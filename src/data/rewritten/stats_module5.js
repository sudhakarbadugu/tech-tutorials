// inferential statistics — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js stats_module5.js

export const statsModule5Structure = {
  module5: {
    title: 'Module 5: Advanced Statistical Methods',
    topics: [
      {
        id: 'time-series-stats',
        title: 'Time Series Analysis'
      },
      {
        id: 'survival-analysis',
        title: 'Survival Analysis'
      },
      {
        id: 'experimental-design',
        title: 'Experimental Design'
      },
      {
        id: 'multivariate-stats',
        title: 'Multivariate Statistics'
      },
      {
        id: 'bayesian-stats',
        title: 'Bayesian Statistics'
      }
    ]
  }
};

export const statsModule5Content = {
  module5: {
    'time-series-stats': {
      title: 'Time Series Analysis',
      subtitle: 'Analyzing data that evolves over time',
      sections: [
        {
          heading: 'What is Time Series Analysis?',
          text: 'A <strong>time series</strong> is a sequence of data points collected or recorded at successive time intervals. Time series analysis seeks to understand patterns, forecast future values, and model temporal dependencies.',
          list: [
            '<strong>Trend:</strong> Long-term upward or downward movement in the data',
            '<strong>Seasonality:</strong> Regular, repeating patterns at fixed intervals (daily, monthly, yearly)',
            '<strong>Cyclical:</strong> Fluctuations that are not of fixed frequency, often tied to economic cycles',
            '<strong>Irregular/Noise:</strong> Random, unpredictable variation remaining after removing other components',
            '<strong>Stationarity:</strong> A series whose statistical properties (mean, variance, autocorrelation) do not change over time'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>time series</strong> is a sequence of data points collected or recorded at successive time intervals. Time series analysis seeks to understand patterns, forecast future values, and model temporal dependencies. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>time series</strong> is a sequence of data points collected or recorded at successive time intervals. Time series analysis seeks to understand patterns, forecast future values, and model temporal dependencies. <strong>Trend:</strong> Long-term upward or downward movement in the data <strong>Seasonality:</strong> Regular, repeating patterns at fixed intervals (daily, monthly, yearly) <strong>Cyclical:</strong> Fluctuations that are not of fixed frequency, often tied to economic cycles <strong>Irregular/Noise:</strong> Random, unpredictable variation remaining after removing other components <strong>Stationarity:</strong> A series whose statistical properties (mean, variance, autocorrelation) do not change over time</p>',
            '<p>You use time series analysis when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Time Series Analysis

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Time Series Analysis sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Decomposing a time series isolates each component so they can be analyzed or removed separately.',
          example: {
            title: 'Example: Decomposing monthly sales',
            code: `Additive Model:
  Y(t) = Trend(t) + Seasonal(t) + Cyclical(t) + Noise(t)

Multiplicative Model:
  Y(t) = Trend(t) × Seasonal(t) × Cyclical(t) × Noise(t)

When to use which:
  - Additive: seasonal fluctuations stay roughly constant over time
  - Multiplicative: seasonal fluctuations grow or shrink with the trend`,
            output: 'If holiday sales spikes get larger as the business grows, use multiplicative decomposition.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Time Series Analysis with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Time Series Analysis
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
          text: 'Understanding stationarity is essential before choosing a modeling approach.',
          table: {
            headers: [
              'Property',
              'Stationary Series',
              'Non-Stationary Series'
            ],
            rows: [
              [
                'Mean',
                'Constant over time',
                'Changes over time'
              ],
              [
                'Variance',
                'Constant over time',
                'Changes over time'
              ],
              [
                'Autocorrelation',
                'Depends only on lag, not time',
                'Depends on both lag and time'
              ],
              [
                'Example',
                'White noise, temperature residuals',
                'Stock prices, GDP, population'
              ],
              [
                'Modeling approach',
                'ARMA, direct regression',
                'Differencing, ARIMA, transformation'
              ],
              [
                'Forecast behavior',
                'Reverts to long-run mean',
                'Follows trend; can diverge'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Modeling a non-stationary series directly with ARMA (fix: apply differencing, logging, or detrending until stationarity is achieved — verify with ADF or KPSS tests)',
            'Mistake 2: Ignoring seasonality when it is present (fix: always plot the series, check autocorrelation function at seasonal lags, and include seasonal terms or seasonal decomposition)',
            'Mistake 3: Overfitting with excessive AR or MA lags (fix: use information criteria like AIC or BIC to penalize model complexity; perform out-of-sample validation)',
            'Mistake 4: Treating correlation as causation in cross-series analysis (fix: use Granger causality or structural models carefully, and remember that prediction does not prove cause)',
            'Mistake 5: Using standard train-test split without preserving time order (fix: always split sequentially; random shuffling destroys temporal structure and leads to optimistic, invalid performance estimates)'
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
          text: 'Time series models power forecasting across every industry.',
          list: [
            'Finance: ARIMA and GARCH models forecast stock volatility, option pricing, and risk metrics like VaR',
            'Retail: demand forecasting predicts inventory needs, reducing stockouts and overstock costs',
            'Energy: utilities forecast electricity consumption by hour and season to optimize grid load and pricing',
            'Epidemiology: SARIMA and nowcasting models track disease spread and predict hospital capacity needs',
            'Tech: anomaly detection on server metrics (CPU, latency) uses time-series models to flag outages early'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Time series = data ordered in time; components are trend, seasonality, cycle, and noise',
            'Stationarity means constant mean, variance, and autocorrelation over time',
            'Always test for stationarity (ADF, KPSS) before fitting ARMA-class models',
            'Use ARIMA for non-stationary data; SARIMA when seasonality is present; ARIMAX to include external regressors',
            'Split sequentially for validation; never shuffle time-ordered data'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between a trend and a seasonal pattern?
Ans: A trend is a long-term directional movement; seasonality is a regular, repeating pattern at known intervals.`,
            `Q2: Why must a series be stationary before applying ARMA?
Ans: ARMA models assume stable mean, variance, and autocorrelation structure. Non-stationary series violate these assumptions, producing unreliable estimates and spurious forecasts.`,
            `Q3: When would you choose SARIMA over ARIMA?
Ans: When the data exhibits clear seasonal patterns (e.g., monthly sales peaks every December) that repeat at a fixed period.`,
            `Q4: What does first-order differencing do?
Ans: It replaces each value with the difference from the previous value (Y't = Yt − Yt−1), often removing a linear trend and helping achieve stationarity.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Time Series Analysis</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Time Series Analysis")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'survival-analysis': {
      title: 'Survival Analysis',
      subtitle: 'Modeling time-to-event data',
      sections: [
        {
          heading: 'What is Survival Analysis?',
          text: 'Survival analysis studies the <strong>time until an event of interest occurs</strong>. It is also called time-to-event analysis, reliability analysis, or event-history analysis. The "event" can be death, failure, churn, recovery, or any binary outcome.',
          list: [
            '<strong>Survival function S(t):</strong> Probability that the event has NOT occurred by time t; S(t) = P(T > t)',
            '<strong>Hazard function h(t):</strong> Instantaneous rate of event occurrence at time t, given survival up to t',
            '<strong>Censoring:</strong> When the event time is incompletely observed — the most common being right-censoring (subject has not experienced the event by study end)',
            '<strong>Kaplan-Meier estimator:</strong> Non-parametric estimate of the survival function from censored data',
            '<strong>Cox Proportional Hazards:</strong> Semi-parametric regression model linking covariates to hazard rates'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Survival analysis studies the <strong>time until an event of interest occurs</strong>. It is also called time-to-event analysis, reliability analysis, or event-history analysis. The "event" can be death, failure, churn, recovery, or any binary outcome. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Survival analysis studies the <strong>time until an event of interest occurs</strong>. It is also called time-to-event analysis, reliability analysis, or event-history analysis. The "event" can be death, failure, churn, recovery, or any binary outcome. <strong>Survival function S(t):</strong> Probability that the event has NOT occurred by time t; S(t) = P(T > t) <strong>Hazard function h(t):</strong> Instantaneous rate of event occurrence at time t, given survival up to t <strong>Censoring:</strong> When the event time is incompletely observed — the most common being right-censoring (subject has not experienced the event by study end) <strong>Kaplan-Meier estimator:</strong> Non-parametric estimate of the survival function from censored data <strong>Cox Proportional Hazards:</strong> Semi-parametric regression model linking covariates to hazard rates</p>',
            '<p>You use survival analysis when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Survival Analysis

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Survival Analysis sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The survival and hazard functions are two sides of the same coin — one describes cumulative avoidance, the other describes instantaneous risk.',
          example: {
            title: 'Example: Customer churn (SaaS subscription)',
            code: `Kaplan-Meier Estimator:
  Ŝ(t) = Π (1 - di / ni)

  Where at each event time ti:
    di = number of events at ti
    ni = number at risk just before ti

Cox Proportional Hazards:
  h(t|X) = h₀(t) × exp(β₁X₁ + β₂X₂ + ...)

  h₀(t) = baseline hazard (unspecified)
  exp(β) = hazard ratio for a 1-unit change in X`,
            output: 'If β = 0.5 for "monthly billing", exp(0.5) ≈ 1.65 → monthly subscribers have 65% higher hazard of churning than annual subscribers.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Survival Analysis with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Survival Analysis
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
          text: 'Different censoring types and estimators suit different study designs.',
          table: {
            headers: [
              'Concept',
              'Description',
              'When to Use'
            ],
            rows: [
              [
                'Right-censoring',
                'Event not yet occurred by study end',
                'Most common; ongoing subjects'
              ],
              [
                'Left-censoring',
                'Event occurred before observation began',
                'Retrospective studies with unknown start'
              ],
              [
                'Interval-censoring',
                'Event known to occur within an interval',
                'Periodic inspections (e.g., dental visits)'
              ],
              [
                'Kaplan-Meier',
                'Non-parametric survival curve',
                'Visualizing survival; comparing groups with log-rank test'
              ],
              [
                'Nelson-Aalen',
                'Non-parametric cumulative hazard',
                'When hazard interpretation is more natural than survival'
              ],
              [
                'Cox PH',
                'Semi-parametric regression',
                'Assessing covariate effects without specifying baseline hazard'
              ],
              [
                'Parametric (Weibull, Exp)',
                'Fully specified distributions',
                'When you need to predict exact survival times or extrapolate beyond data'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring censored observations and using standard mean or t-tests (fix: censoring carries information — include it with Kaplan-Meier or Cox models; discarding censored cases biases results)',
            'Mistake 2: Assuming proportional hazards without checking (fix: test Schoenfeld residuals; if violated, use time-varying coefficients, stratified Cox, or accelerated failure time models)',
            'Mistake 3: Interpreting survival probability at late times with very few at-risk subjects (fix: report the number at risk at each time point; estimates with small denominators are unreliable)',
            'Mistake 4: Using Kaplan-Meier curves for heavily tied event times without confirming assumptions (fix: for heavily tied or discrete data, consider discrete-time hazard models or actuarial estimators)',
            'Mistake 5: Failing to account for competing risks (e.g., death from other causes preventing the event of interest) (fix: use cause-specific or subdistribution hazard models like Fine-Gray when competing risks exist)'
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
          text: 'Survival analysis is essential whenever the question is "how long until..."',
          list: [
            'Healthcare: Kaplan-Meier curves compare survival rates across treatment arms in clinical trials; Cox models identify prognostic factors',
            'SaaS / Subscription business: time-to-churn models segment customers by risk and predict lifetime value',
            'Manufacturing: reliability engineering uses Weibull distributions to predict component failure and schedule preventive maintenance',
            'Credit risk: time-to-default models estimate when a borrower will likely stop repaying',
            'HR / Workforce planning: employee tenure models identify factors driving turnover and forecast staffing gaps'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Survival analysis models time-to-event with censoring handled correctly',
            'S(t) = probability of surviving past time t; h(t) = instantaneous event risk',
            'Kaplan-Meier estimates survival non-parametrically from censored data',
            'Cox PH regression links covariates to hazard without assuming a baseline distribution',
            'Always check proportional hazards assumption and account for competing risks when relevant'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is censoring, and why is it a problem for standard statistical methods?
Ans: Censoring occurs when the event time is only partially known (e.g., study ends before the event). Standard methods like t-tests or mean time ignore the information that the event had not occurred yet, leading to bias.`,
            `Q2: What does a hazard ratio of 2.0 mean in a Cox model?
Ans: It means the group with the higher covariate value has twice the instantaneous risk of the event compared to the reference group, at any given time.`,
            `Q3: Why is the Cox model called "semi-parametric"?
Ans: Because it makes a parametric assumption about how covariates affect the hazard (via the exponential link), but leaves the baseline hazard h₀(t) completely unspecified.`,
            `Q4: When would you prefer a parametric model (e.g., Weibull) over Cox?
Ans: When you need to predict actual survival times, extrapolate beyond observed data, or when the distributional assumption improves efficiency and fit.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Survival Analysis</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Survival Analysis")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'experimental-design': {
      title: 'Experimental Design',
      subtitle: 'Structuring studies to produce valid, reliable conclusions',
      sections: [
        {
          heading: 'What is Experimental Design?',
          text: 'Experimental design is the systematic planning of data collection to answer a research question with minimal bias and maximum precision. A well-designed experiment isolates the effect of interest, controls nuisance factors, and allows causal inference.',
          list: [
            '<strong>Randomization:</strong> Assigning subjects to treatments by chance to eliminate selection bias and balance confounders',
            '<strong>Replication:</strong> Repeating the experiment or applying it to multiple subjects to estimate variability and improve precision',
            '<strong>Blocking:</strong> Grouping similar subjects together to remove a known source of variation from the error term',
            '<strong>Control group:</strong> A baseline condition that receives no treatment or a placebo, enabling comparison',
            '<strong>Factorial design:</strong> Studying multiple factors simultaneously and their interactions'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Experimental design is the systematic planning of data collection to answer a research question with minimal bias and maximum precision. A well-designed experiment isolates the effect of interest, controls nuisance factors, and allows causal inference. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Experimental design is the systematic planning of data collection to answer a research question with minimal bias and maximum precision. A well-designed experiment isolates the effect of interest, controls nuisance factors, and allows causal inference. <strong>Randomization:</strong> Assigning subjects to treatments by chance to eliminate selection bias and balance confounders <strong>Replication:</strong> Repeating the experiment or applying it to multiple subjects to estimate variability and improve precision <strong>Blocking:</strong> Grouping similar subjects together to remove a known source of variation from the error term <strong>Control group:</strong> A baseline condition that receives no treatment or a placebo, enabling comparison <strong>Factorial design:</strong> Studying multiple factors simultaneously and their interactions</p>',
            '<p>You use experimental design when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Experimental Design

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Experimental Design sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The fundamental equation of experimental design separates signal from noise.',
          example: {
            title: 'Example: Two-factor fertilizer experiment',
            code: `Model:
  Yijk = μ + αi + βj + (αβ)ij + εijk

Where:
  μ = overall mean
  αi = effect of fertilizer type i
  βj = effect of watering schedule j
  (αβ)ij = interaction effect
  εijk = random error

Sum of Squares decomposition:
  SST = SSA + SSB + SSAB + SSE`,
            output: 'If the interaction term (αβ) is significant, the effect of fertilizer depends on watering schedule — you cannot interpret main effects independently.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Experimental Design with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Experimental Design
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
          text: 'Different designs trade off complexity, precision, and practical feasibility.',
          table: {
            headers: [
              'Design',
              'Description',
              'Best For'
            ],
            rows: [
              [
                'Completely Randomized',
                'Subjects randomly assigned to treatments',
                'Homogeneous subjects; simplest analysis'
              ],
              [
                'Randomized Block',
                'Subjects grouped into blocks, then randomized within block',
                'Known nuisance factor (e.g., gender, location)'
              ],
              [
                'Latin Square',
                'Two blocking factors in a square layout',
                'Controlling two nuisance factors with few resources'
              ],
              [
                'Factorial (2^k)',
                'All combinations of k factors at two levels each',
                'Screening many factors and their interactions'
              ],
              [
                'Split-Plot',
                'Whole-plot factors applied to large units; sub-plot factors to sub-units',
                'When some factors are hard to change (e.g., oven temperature)'
              ],
              [
                'Repeated Measures',
                'Same subjects measured under all conditions',
                'Reducing between-subject variability; studying temporal effects'
              ],
              [
                'Crossover',
                'Subjects switch treatments after a washout period',
                'Comparing treatments while controlling individual differences'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confounding treatment effect with a nuisance variable (fix: randomize assignment; if randomization is impossible, use blocking, stratification, or statistical adjustment in analysis)',
            'Mistake 2: Underpowered experiments with too few replicates (fix: perform a power analysis before running the study; define the minimum detectable effect size, significance level α, and desired power (typically 0.80))',
            'Mistake 3: P-hacking by testing many outcomes and reporting only significant ones (fix: pre-register primary hypotheses; apply multiple comparison corrections like Bonferroni or FDR; separate confirmatory from exploratory analysis)',
            'Mistake 4: Ignoring interaction effects and interpreting main effects in isolation (fix: always test interaction terms in factorial designs; if significant, present simple effects or interaction plots instead of only main effects)',
            'Mistake 5: Treating observational data as experimental without acknowledging confounding (fix: explicitly state limitations; use methods like propensity scoring, instrumental variables, or causal graphs; avoid causal language when randomization was absent)'
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
          text: 'Rigorous experimental design underpins trustworthy conclusions across domains.',
          list: [
            'Pharmaceuticals: randomized controlled trials (RCTs) are the gold standard for proving drug efficacy and safety; blocking by age or disease severity reduces variance',
            'Tech / Product: A/B tests use completely randomized designs to compare two app versions; factorial designs optimize multiple UI elements simultaneously',
            'Agriculture: split-plot designs test irrigation (hard to change) and fertilizer (easy to change) efficiently across field plots',
            'Manufacturing: Design of Experiments (DoE) uses fractional factorial designs to screen dozens of process parameters for quality optimization',
            'Education: randomized block designs compare teaching methods while blocking by prior achievement level to reduce noise'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Experimental design = planning data collection to isolate cause and minimize bias',
            'Three pillars: randomization (remove bias), replication (estimate error), blocking (reduce noise)',
            'Factorial designs study multiple factors and interactions together, more efficiently than one-factor-at-a-time',
            'Always do a power analysis to ensure adequate sample size before running the experiment',
            'Pre-register hypotheses and correct for multiple comparisons to maintain scientific rigor'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the purpose of randomization in an experiment?
Ans: Randomization balances both known and unknown confounding variables across treatment groups, allowing causal attribution of differences to the treatment.`,
            `Q2: When should you use a block design instead of a completely randomized design?
Ans: When there is a known nuisance factor (e.g., gender, batch, location) that strongly affects the outcome — blocking removes its effect from the error term, increasing precision.`,
            `Q3: What does a significant interaction mean in a factorial design?
Ans: It means the effect of one factor depends on the level of another factor; the factors cannot be interpreted independently.`,
            `Q4: Why is replication important?
Ans: Replication provides an estimate of experimental error (variance), which is necessary for hypothesis testing, confidence intervals, and determining whether observed differences are real or due to chance.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Experimental Design</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Experimental Design")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multivariate-stats': {
      title: 'Multivariate Statistics',
      subtitle: 'Analyzing multiple variables simultaneously',
      sections: [
        {
          heading: 'What is Multivariate Statistics?',
          text: 'Multivariate statistics deals with datasets that contain <strong>multiple variables measured on the same set of observations</strong>. Unlike univariate analysis (one variable at a time), multivariate methods account for correlations among variables and reveal latent structure in high-dimensional data.',
          list: [
            '<strong>Multivariate Normal Distribution:</strong> Generalization of the normal distribution to multiple dimensions, defined by a mean vector and covariance matrix',
            '<strong>MANOVA:</strong> Multivariate Analysis of Variance — tests whether mean vectors differ across groups for multiple dependent variables simultaneously',
            '<strong>PCA:</strong> Principal Component Analysis — transforms correlated variables into uncorrelated components ordered by variance explained',
            '<strong>Factor Analysis:</strong> Models observed variables as linear combinations of fewer unobserved (latent) factors',
            '<strong>Discriminant Analysis:</strong> Finds linear combinations of variables that best separate predefined groups'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Multivariate statistics deals with datasets that contain <strong>multiple variables measured on the same set of observations</strong>. Unlike univariate analysis (one variable at a time), multivariate methods account for correlations among variables and reveal latent structure in high-dimensional data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Multivariate statistics deals with datasets that contain <strong>multiple variables measured on the same set of observations</strong>. Unlike univariate analysis (one variable at a time), multivariate methods account for correlations among variables and reveal latent structure in high-dimensional data. <strong>Multivariate Normal Distribution:</strong> Generalization of the normal distribution to multiple dimensions, defined by a mean vector and covariance matrix <strong>MANOVA:</strong> Multivariate Analysis of Variance — tests whether mean vectors differ across groups for multiple dependent variables simultaneously <strong>PCA:</strong> Principal Component Analysis — transforms correlated variables into uncorrelated components ordered by variance explained <strong>Factor Analysis:</strong> Models observed variables as linear combinations of fewer unobserved (latent) factors <strong>Discriminant Analysis:</strong> Finds linear combinations of variables that best separate predefined groups</p>',
            '<p>You use multivariate statistics when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multivariate Statistics

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multivariate Statistics sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'PCA finds directions of maximum variance through eigendecomposition of the covariance matrix.',
          example: {
            title: 'Example: PCA on customer data',
            code: `Covariance Matrix Σ:
  Σ = E[(X - μ)(X - μ)ᵀ]

Eigen-decomposition:
  Σv = λv

  λ = eigenvalue (variance along direction v)
  v = eigenvector (principal component direction)

First principal component:
  PC1 = v₁₁X₁ + v₁₂X₂ + ... + v₁pXp

Variance explained:
  Proportion = λi / (λ₁ + λ₂ + ... + λp)`,
            output: 'If the first two eigenvalues explain 85% of total variance, you can reduce p variables to 2 components with minimal information loss.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Multivariate Statistics with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Multivariate Statistics
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
          text: 'Multivariate methods are often confused because they all reduce dimensionality, but their goals differ fundamentally.',
          table: {
            headers: [
              'Method',
              'Goal',
              'Assumptions',
              'Output'
            ],
            rows: [
              [
                'PCA',
                'Maximize variance; reduce dimensions',
                'Linear, no noise model',
                'Components ordered by variance'
              ],
              [
                'Factor Analysis',
                'Model observed variables with latent factors',
                'Unique factors + common factors',
                'Factor loadings + uniquenesses'
              ],
              [
                'LDA (Discriminant)',
                'Maximize between-group separation',
                'Multivariate normal, equal covariances',
                'Discriminant functions'
              ],
              [
                'MANOVA',
                'Test group differences on multiple DVs',
                'Multivariate normal, homogeneity of covariance',
                `Wilks' Lambda, Pillai's Trace`
              ],
              [
                'Clustering (k-means)',
                'Group observations by similarity',
                'Spherical clusters, chosen k',
                'Cluster assignments'
              ],
              [
                'MDS',
                'Preserve pairwise distances in low-D',
                'Distance metric chosen',
                'Coordinate representation'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying PCA to interpret latent factors as causal constructs (fix: PCA is a mathematical variance rotation, not a psychological or causal model; use factor analysis with rotation if you need interpretable latent constructs)',
            `Mistake 2: Running MANOVA without checking multivariate normality and homogeneity of covariance matrices (fix: use Box's M test for homogeneity; if violated, consider Welch-adjusted tests or robust methods)`,
            'Mistake 3: Overinterpreting components with eigenvalues just above 1 (Kaiser criterion) without checking scree plots or cumulative variance (fix: use parallel analysis or inspect the scree plot elbow; the Kaiser rule is a rough heuristic)',
            'Mistake 4: Using LDA when groups have very different covariance structures (fix: if covariance matrices differ substantially, use quadratic discriminant analysis (QDA) or regularized LDA)',
            'Mistake 5: Failing to scale variables before PCA or clustering when they are on different units (fix: standardize to zero mean and unit variance; otherwise, variables with larger scales dominate purely due to magnitude)'
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
          text: 'Multivariate methods extract signal from high-dimensional data where variables are interrelated.',
          list: [
            'Finance: PCA on stock returns isolates market-wide and sector-specific risk factors for portfolio construction',
            'Genomics: microarray and RNA-seq data have thousands of genes; PCA and clustering reduce dimensionality and identify sample groups',
            'Marketing: factor analysis uncovers latent customer segments from survey responses on product attributes',
            `Quality control: multivariate control charts (Hotelling's T²) monitor correlated process variables simultaneously to detect anomalies earlier`,
            'Image processing: face recognition uses PCA (Eigenfaces) or LDA (Fisherfaces) to compress and classify images in reduced feature spaces'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multivariate statistics analyzes multiple correlated variables together rather than in isolation',
            'PCA reduces dimensionality by finding orthogonal directions of maximum variance',
            'Factor Analysis models observed variables with fewer latent factors plus noise',
            'MANOVA tests whether groups differ on multiple dependent variables simultaneously',
            'Always check assumptions (normality, covariance homogeneity) and scale variables before distance-based or variance-based methods'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the key difference between PCA and Factor Analysis?
Ans: PCA is a variance-maximizing rotation of observed variables with no explicit noise model; Factor Analysis explicitly models observed variables as driven by common latent factors plus unique error terms.`,
            `Q2: Why is MANOVA preferred over multiple separate ANOVAs?
Ans: MANOVA controls the family-wise error rate and accounts for correlations among dependent variables, which separate ANOVAs ignore, inflating Type I error and missing multivariate patterns.`,
            `Q3: When should you standardize variables before PCA?
Ans: Always, when variables are on different scales or units; otherwise, high-magnitude variables dominate the components arbitrarily.`,
            `Q4: What does an eigenvalue represent in PCA?
Ans: The eigenvalue represents the amount of variance captured by its corresponding principal component. The ratio of an eigenvalue to the sum of all eigenvalues is the proportion of total variance explained.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multivariate Statistics</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multivariate Statistics")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'bayesian-stats': {
      title: 'Bayesian Statistics',
      subtitle: 'Updating beliefs with evidence',
      sections: [
        {
          heading: 'What is Bayesian Statistics?',
          text: 'Bayesian statistics treats probability as a <strong>degree of belief</strong> rather than a long-run frequency. It provides a framework for updating prior knowledge with observed data to produce a posterior distribution. This approach naturally quantifies uncertainty and supports sequential learning.',
          list: [
            '<strong>Prior P(θ):</strong> Belief about a parameter before seeing data',
            '<strong>Likelihood P(D|θ):</strong> Probability of observing the data given a parameter value',
            '<strong>Posterior P(θ|D):</strong> Updated belief about the parameter after observing data',
            '<strong>Evidence P(D):</strong> Marginal probability of the data; normalizes the posterior',
            '<strong>Credible Interval:</strong> Bayesian analog of a confidence interval — a range where the parameter lies with a specified probability'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Bayesian statistics treats probability as a <strong>degree of belief</strong> rather than a long-run frequency. It provides a framework for updating prior knowledge with observed data to produce a posterior distribution. This approach naturally quantifies uncertainty and supports sequential learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Bayesian statistics treats probability as a <strong>degree of belief</strong> rather than a long-run frequency. It provides a framework for updating prior knowledge with observed data to produce a posterior distribution. This approach naturally quantifies uncertainty and supports sequential learning. <strong>Prior P(θ):</strong> Belief about a parameter before seeing data <strong>Likelihood P(D|θ):</strong> Probability of observing the data given a parameter value <strong>Posterior P(θ|D):</strong> Updated belief about the parameter after observing data <strong>Evidence P(D):</strong> Marginal probability of the data; normalizes the posterior <strong>Credible Interval:</strong> Bayesian analog of a confidence interval — a range where the parameter lies with a specified probability</p>',
            '<p>You use bayesian statistics when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Bayesian Statistics

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Bayesian Statistics sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `Bayes' theorem is the mathematical engine of Bayesian inference.`,
          example: {
            title: 'Example: A/B test conversion rate',
            code: `Bayes' Theorem:
  P(θ|D) = P(D|θ) × P(θ) / P(D)

  Posterior ∝ Likelihood × Prior

Example: Conversion rate θ ~ Beta(α, β)
  Prior: Beta(2, 8) → mean = 0.2, weak belief
  Data: 30 conversions out of 100 visitors

  Posterior: Beta(2+30, 8+70) = Beta(32, 78)

  Posterior mean = 32 / (32+78) ≈ 0.291
  95% Credible Interval: (0.21, 0.38)`,
            output: `The posterior mean (0.291) is a weighted compromise between the prior guess (0.2) and the observed data (0.3). With more data, the prior's influence shrinks.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Bayesian Statistics with Python',
            code: `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# Bayesian Statistics
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
          text: 'Bayesian and frequentist inference answer different questions and report uncertainty differently.',
          table: {
            headers: [
              'Aspect',
              'Bayesian',
              'Frequentist'
            ],
            rows: [
              [
                'Probability meaning',
                'Degree of belief',
                'Long-run frequency'
              ],
              [
                'Parameter status',
                'Random variable with a distribution',
                'Fixed unknown constant'
              ],
              [
                'Inference target',
                'Posterior distribution P(θ|D)',
                'Point estimate + sampling distribution'
              ],
              [
                'Uncertainty interval',
                'Credible interval: P(a < θ < b|D) = 0.95',
                'Confidence interval: 95% of intervals contain θ over repeated samples'
              ],
              [
                'Interpretation',
                '"There is a 95% probability θ is in this interval"',
                '"If we repeated the experiment infinitely, 95% of such intervals would contain θ"'
              ],
              [
                'Prior information',
                'Explicitly incorporated',
                'Not used'
              ],
              [
                'Small samples',
                'Naturally regularized by prior',
                'Can be unstable or biased'
              ],
              [
                'Computation',
                'Often requires MCMC or variational methods',
                'Usually closed-form or asymptotic'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Letting the prior dominate when data is abundant, or ignoring the prior entirely when data is scarce (fix: perform sensitivity analysis — test informative, weakly informative, and diffuse priors to see how much conclusions depend on prior choice)',
            'Mistake 2: Choosing an improper prior without checking that the posterior is proper (fix: ensure the integral of likelihood × prior converges; improper priors can lead to improper posteriors, especially in hierarchical models)',
            'Mistake 3: Confusing credible intervals with confidence intervals and interpreting a 95% CI as "probability the parameter is in the interval" (fix: in frequentist statistics, the parameter is fixed; only Bayesian credible intervals support that direct probabilistic interpretation)',
            'Mistake 4: Treating MCMC chains as independent samples without checking convergence (fix: inspect trace plots, Gelman-Rubin R̂ (should be < 1.01), effective sample size (ESS); discard burn-in and thin if needed)',
            'Mistake 5: Overfitting complex hierarchical models with too many latent variables relative to data (fix: use prior predictive checks to validate model behavior before seeing data; apply posterior predictive checks and information criteria like WAIC or LOO for model comparison)'
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
          text: 'Bayesian methods shine when uncertainty matters, data is limited, or prior domain knowledge exists.',
          list: [
            'Clinical trials: Bayesian adaptive trials continuously update efficacy beliefs as patients enroll, potentially stopping early for futility or success — saving lives and costs',
            'A/B testing: Bayesian bandits dynamically allocate traffic to better-performing variants, maximizing conversions during the experiment itself',
            'Search and recommender systems: Bayesian ranking incorporates item uncertainty (e.g., a new item with few ratings might be great; Thompson sampling explores this)',
            'Finance: Bayesian portfolio optimization blends historical returns with prior views (Black-Litterman model) to produce more stable asset allocations',
            'Spam filtering: Naive Bayes classifiers use word-frequency likelihoods and prior spam probabilities to score emails efficiently in real time'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bayesian inference updates prior beliefs with data to produce a posterior distribution',
            `Posterior ∝ Likelihood × Prior; Bayes' theorem formalizes this`,
            'Credible intervals allow direct probability statements about parameters — a key advantage over frequentist confidence intervals',
            'Priors matter most with small data; always run sensitivity analyses',
            'MCMC requires convergence diagnostics (R̂, ESS, trace plots) before trusting posterior summaries'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between a prior and a posterior distribution?
Ans: The prior represents belief about a parameter before observing data; the posterior is the updated belief after combining the prior with the observed data through the likelihood.`,
            `Q2: Can you interpret a 95% confidence interval as "there is a 95% probability the parameter is in this interval"?
Ans: No — that interpretation is valid for Bayesian credible intervals, but not for frequentist confidence intervals, where the parameter is fixed and the interval is random across repeated sampling.`,
            `Q3: What is a conjugate prior, and why is it useful?
Ans: A conjugate prior is a prior distribution that, when combined with a specific likelihood, yields a posterior of the same family (e.g., Beta prior + Binomial likelihood → Beta posterior). It makes computation analytically tractable without MCMC.`,
            `Q4: Why is MCMC necessary for many Bayesian models?
Ans: Because the posterior distribution is often high-dimensional and analytically intractable. MCMC generates samples from the posterior so that expectations, quantiles, and intervals can be approximated empirically.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Bayesian Statistics</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Bayesian Statistics")
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
