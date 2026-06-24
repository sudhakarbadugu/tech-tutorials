// machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js mlalgo_module3.js

export const mlalgoModule3Structure = {
  module3: {
    title: 'Module 3: Supervised Learning — Regression',
    topics: [
      {
        id: 'linear-regression',
        title: 'Linear Regression'
      },
      {
        id: 'polynomial-regression',
        title: 'Polynomial Regression'
      },
      {
        id: 'ridge-lasso-elastic-net',
        title: 'Ridge, Lasso & Elastic Net'
      },
      {
        id: 'regression-pipeline-eda',
        title: 'Regression Pipeline & EDA'
      },
      {
        id: 'house-price-prediction-project',
        title: 'House Price Prediction Project'
      }
    ]
  }
};

export const mlalgoModule3Content = {
  module3: {
    'linear-regression': {
      title: 'Linear Regression',
      subtitle: 'Predict continuous targets with a weighted linear combination of features',
      sections: [
        {
          heading: 'What is Linear Regression?',
          text: `<strong>Linear regression</strong> models the relationship between input features <em>X</em> and a continuous target <em>y</em> as a straight line (or hyperplane in multiple dimensions). It is the baseline algorithm for regression: fast, interpretable, and surprisingly strong on tabular data. sklearn's <code>LinearRegression</code> solves the same optimization problem that statistics calls <strong>Ordinary Least Squares (OLS)</strong>.`,
          list: [
            '<strong>Simple linear:</strong> one feature — ŷ = β₀ + β₁x',
            '<strong>Multiple linear:</strong> many features — ŷ = β₀ + β₁x₁ + β₂x₂ + … + βₚxₚ',
            '<strong>Goal:</strong> find weights β that minimize prediction error on training data',
            '<strong>Two solvers:</strong> closed-form <em>Normal Equation</em> vs iterative <em>Gradient Descent</em>',
            '<strong>Assumption:</strong> relationship is approximately linear in the features (after transforms)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p><strong>Linear regression</strong> models the relationship between input features <em>X</em> and a continuous target <em>y</em> as a straight line (or hyperplane in multiple dimensions). It is the baseline algorithm for regression: fast, interpretable, and surprisingly strong on tabular data. sklearn's <code>LinearRegression</code> solves the same optimization problem that statistics calls <strong>Ordinary Least Squares (OLS)</strong>. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, <strong>Linear regression</strong> models the relationship between input features <em>X</em> and a continuous target <em>y</em> as a straight line (or hyperplane in multiple dimensions). It is the baseline algorithm for regression: fast, interpretable, and surprisingly strong on tabular data. sklearn's <code>LinearRegression</code> solves the same optimization problem that statistics calls <strong>Ordinary Least Squares (OLS)</strong>. <strong>Simple linear:</strong> one feature — ŷ = β₀ + β₁x <strong>Multiple linear:</strong> many features — ŷ = β₀ + β₁x₁ + β₂x₂ + … + βₚxₚ <strong>Goal:</strong> find weights β that minimize prediction error on training data <strong>Two solvers:</strong> closed-form <em>Normal Equation</em> vs iterative <em>Gradient Descent</em> <strong>Assumption:</strong> relationship is approximately linear in the features (after transforms)</p>`,
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
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Linear Regression — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Mistake 1: Using linear regression on clearly non-linear data without transforms (fix: plot residuals; if U-shaped, try polynomial features or log transform)',
            'Mistake 2: Not checking multicollinearity when interpreting coefficients (fix: compute VIF; if VIF > 10, coefficients are unstable — use Ridge)',
            'Mistake 3: Extrapolating beyond training range (fix: linear models assume trends continue — limit predictions to observed x range)',
            'Mistake 4: Ignoring feature scaling when using Gradient Descent manually (fix: StandardScaler before GD; Normal Equation does not need scaling)',
            'Mistake 5: Treating R² = 0.99 as proof of causation (fix: correlation ≠ causation; validate with domain knowledge and held-out test data)'
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
          text: '<strong>Stripe — fraud detection.</strong> Stripe scores billions of transactions with gradient-boosted trees. A <strong>0.1% recall improvement</strong> on fraud saves millions; models are retrained weekly with stratified CV and precision-recall monitoring.',
          list: [
            '<strong>Real estate:</strong> Zillow Zestimate uses gradient-boosted models, but linear regression remains the interpretable baseline for price-per-sqft analysis',
            '<strong>Finance:</strong> CAPM and factor models are linear regressions of asset returns on market factors',
            '<strong>Healthcare:</strong> Predicting blood pressure from age, BMI, and lifestyle factors — clinicians need interpretable coefficients',
            '<strong>Marketing:</strong> Sales response curves (spend → revenue) start with linear models before adding saturation transforms',
            '<strong>Engineering:</strong> Sensor calibration — map raw readings to true measurements with linear fits'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Linear regression predicts continuous targets: ŷ = β₀ + Σ βⱼxⱼ',
            'OLS minimizes sum of squared residuals — same loss as MSE',
            'Normal Equation gives exact β* in one step; Gradient Descent iterates with learning rate α',
            'Use Normal Equation when p < 10,000; use GD/SGD for high-dimensional or streaming data',
            'sklearn LinearRegression uses LAPACK lstsq (Normal Equation family) by default',
            'Always check residual plots, R² on held-out data, and coefficient stability (VIF)'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the closed-form solution for OLS?
Ans: β* = (XᵀX)⁻¹Xᵀy, known as the Normal Equation.`,
            `Q2: When should you prefer Gradient Descent over the Normal Equation?
Ans: When the number of features p is very large (> 10,000), data arrives in streams, or XᵀX is too large to store/invert.`,
            `Q3: Why does Gradient Descent require feature scaling but the Normal Equation does not?
Ans: GD convergence speed depends on the condition number of the loss surface; unscaled features create elongated valleys. The Normal Equation's analytical solution is scale-invariant (though numerical stability can still benefit from scaling).`,
            `Q4: What does a negative coefficient mean?
Ans: Holding other features constant, increasing that feature decreases the predicted target by |βⱼ| units per unit increase in xⱼ.`,
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
    'polynomial-regression': {
      title: 'Polynomial Regression',
      subtitle: 'Model curved relationships by adding polynomial feature terms',
      sections: [
        {
          heading: 'What is Polynomial Regression?',
          text: `<strong>Polynomial regression</strong> is still linear regression — but applied to <em>polynomial features</em> of the original inputs. By adding x², x³, and interaction terms, a linear model can fit curves, peaks, and valleys. sklearn's <code>PolynomialFeatures</code> transformer generates these terms; <code>LinearRegression</code> fits the weights. The danger: high-degree polynomials <strong>overfit</strong> training data while failing on validation data.`,
          list: [
            '<strong>Degree 2:</strong> adds x² and pairwise interactions (x₁x₂) — captures parabolas',
            '<strong>Degree 3+:</strong> captures S-curves and inflection points — overfitting risk rises fast',
            '<strong>Still "linear":</strong> linear in the <em>parameters</em> β, non-linear in raw features x',
            '<strong>Key tool:</strong> <code>PolynomialFeatures</code> + <code>Pipeline</code> to prevent data leakage',
            '<strong>Diagnosis:</strong> compare train vs validation error across degrees'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p><strong>Polynomial regression</strong> is still linear regression — but applied to <em>polynomial features</em> of the original inputs. By adding x², x³, and interaction terms, a linear model can fit curves, peaks, and valleys. sklearn's <code>PolynomialFeatures</code> transformer generates these terms; <code>LinearRegression</code> fits the weights. The danger: high-degree polynomials <strong>overfit</strong> training data while failing on validation data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, <strong>Polynomial regression</strong> is still linear regression — but applied to <em>polynomial features</em> of the original inputs. By adding x², x³, and interaction terms, a linear model can fit curves, peaks, and valleys. sklearn's <code>PolynomialFeatures</code> transformer generates these terms; <code>LinearRegression</code> fits the weights. The danger: high-degree polynomials <strong>overfit</strong> training data while failing on validation data. <strong>Degree 2:</strong> adds x² and pairwise interactions (x₁x₂) — captures parabolas <strong>Degree 3+:</strong> captures S-curves and inflection points — overfitting risk rises fast <strong>Still "linear":</strong> linear in the <em>parameters</em> β, non-linear in raw features x <strong>Key tool:</strong> <code>PolynomialFeatures</code> + <code>Pipeline</code> to prevent data leakage <strong>Diagnosis:</strong> compare train vs validation error across degrees</p>`,
            '<p>You use polynomial regression when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Polynomial Regression

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Polynomial Regression sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Polynomial Regression with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Polynomial Regression — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Mistake 1: Fitting PolynomialFeatures on the full dataset before train/test split (fix: always use Pipeline so transforms are fit only on training folds)',
            'Mistake 2: Using degree > 5 without regularization (fix: add Ridge(α) in the pipeline or use cross-validation to cap degree)',
            'Mistake 3: Forgetting to scale features before high-degree polynomials (fix: StandardScaler before PolynomialFeatures — x=1000 and x²=1,000,000 have wildly different magnitudes)',
            'Mistake 4: Interpreting raw polynomial coefficients (fix: coefficients depend on feature scale and are not marginal effects — plot the curve instead)',
            'Mistake 5: Choosing degree by training error alone (fix: always select degree by validation or cross-validation MSE)'
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
          text: '<strong>Stripe — fraud detection.</strong> Stripe scores billions of transactions with gradient-boosted trees. A <strong>0.1% recall improvement</strong> on fraud saves millions; models are retrained weekly with stratified CV and precision-recall monitoring.',
          list: [
            '<strong>Economics:</strong> Diminishing returns curves (advertising spend vs sales) — degree-2 polynomial captures saturation',
            '<strong>Physics:</strong> Kinematic equations are polynomial in time (s = ut + ½at²)',
            '<strong>Agriculture:</strong> Crop yield vs fertilizer dose — too little and too much both reduce yield (quadratic)',
            '<strong>Manufacturing:</strong> Temperature vs product quality — optimal temperature is a peak, not a line',
            '<strong>Calibration:</strong> Sensor response curves that deviate from linearity at extremes'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Polynomial regression = PolynomialFeatures + LinearRegression',
            'It is linear in parameters but non-linear in raw features',
            'Degree controls flexibility: low = underfit, high = overfit',
            'Watch for the train/val error gap — the hallmark of overfitting',
            'Always use Pipeline; always scale; select degree by cross-validation',
            'Pair with Ridge regularization when degree or feature count is high'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is polynomial regression still called "linear"?
Ans: It is linear in the parameters β — the model is a weighted sum of features, even though those features are powers of x.`,
            `Q2: What pattern in the train/val error table signals overfitting?
Ans: Training MSE keeps decreasing while validation MSE increases — a growing gap between the two.`,
            `Q3: Why must PolynomialFeatures be inside a Pipeline?
Ans: To ensure the transform is fit only on training data during cross-validation, preventing data leakage from the test set into feature generation.`,
            `Q4: What is Runge's phenomenon?
Ans: High-degree polynomials oscillate wildly at the edges of the data range, causing poor extrapolation even when they fit training points perfectly.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Polynomial Regression</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Polynomial Regression")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'ridge-lasso-elastic-net': {
      title: 'Ridge, Lasso & Elastic Net',
      subtitle: 'Regularized linear regression to control overfitting and perform feature selection',
      sections: [
        {
          heading: 'What is Regularized Regression?',
          text: 'When features are correlated, numerous, or polynomial-expanded, plain OLS overfits and produces unstable coefficients. <strong>Regularization</strong> adds a penalty on weight magnitude to the loss function. <strong>Ridge (L2)</strong> shrinks coefficients toward zero; <strong>Lasso (L1)</strong> drives some exactly to zero (feature selection); <strong>Elastic Net</strong> combines both penalties. sklearn provides <code>Ridge</code>, <code>Lasso</code>, and <code>ElasticNet</code> with a shared <code>alpha</code> hyperparameter controlling penalty strength.',
          list: [
            '<strong>Ridge:</strong> L2 penalty λ‖β‖² — keeps all features, shrinks coefficients',
            '<strong>Lasso:</strong> L1 penalty λ‖β‖₁ — zeros out irrelevant features',
            '<strong>Elastic Net:</strong> α·L1 + (1−α)·L2 — best of both when features are correlated',
            '<strong>Regularization path:</strong> plot coefficients vs α to see which features survive',
            '<strong>Always scale features</strong> before regularized regression — penalties are not scale-invariant'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>When features are correlated, numerous, or polynomial-expanded, plain OLS overfits and produces unstable coefficients. <strong>Regularization</strong> adds a penalty on weight magnitude to the loss function. <strong>Ridge (L2)</strong> shrinks coefficients toward zero; <strong>Lasso (L1)</strong> drives some exactly to zero (feature selection); <strong>Elastic Net</strong> combines both penalties. sklearn provides <code>Ridge</code>, <code>Lasso</code>, and <code>ElasticNet</code> with a shared <code>alpha</code> hyperparameter controlling penalty strength. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, When features are correlated, numerous, or polynomial-expanded, plain OLS overfits and produces unstable coefficients. <strong>Regularization</strong> adds a penalty on weight magnitude to the loss function. <strong>Ridge (L2)</strong> shrinks coefficients toward zero; <strong>Lasso (L1)</strong> drives some exactly to zero (feature selection); <strong>Elastic Net</strong> combines both penalties. sklearn provides <code>Ridge</code>, <code>Lasso</code>, and <code>ElasticNet</code> with a shared <code>alpha</code> hyperparameter controlling penalty strength. <strong>Ridge:</strong> L2 penalty λ‖β‖² — keeps all features, shrinks coefficients <strong>Lasso:</strong> L1 penalty λ‖β‖₁ — zeros out irrelevant features <strong>Elastic Net:</strong> α·L1 + (1−α)·L2 — best of both when features are correlated <strong>Regularization path:</strong> plot coefficients vs α to see which features survive <strong>Always scale features</strong> before regularized regression — penalties are not scale-invariant</p>',
            '<p>You use ridge, lasso & elastic net when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Ridge, Lasso & Elastic Net

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Ridge, Lasso & Elastic Net sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Ridge, Lasso & Elastic Net with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Ridge, Lasso & Elastic Net — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          heading: 'L1 vs L2 Comparison',
          text: 'The choice of penalty shape determines whether you get shrinkage, sparsity, or both.',
          table: {
            headers: [
              'Property',
              'Ridge (L2)',
              'Lasso (L1)',
              'Elastic Net'
            ],
            rows: [
              [
                'Penalty term',
                'α Σ βⱼ²',
                'α Σ |βⱼ|',
                'α·ρ·Σ|βⱼ| + α·(1−ρ)·Σβⱼ²'
              ],
              [
                'Coefficient behavior',
                'Shrinks toward 0, never exactly 0',
                'Shrinks to exactly 0 (sparse)',
                'Sparse + grouped shrinkage'
              ],
              [
                'Feature selection',
                'No — keeps all features',
                'Yes — zeros irrelevant features',
                'Yes, but keeps correlated groups'
              ],
              [
                'Multicollinearity',
                'Handles well — distributes weight',
                'Picks one, drops others arbitrarily',
                'Keeps groups together'
              ],
              [
                'When p > n',
                'Works (always)',
                'Works (selects ≤ n features)',
                'Works best for correlated p > n'
              ],
              [
                'Geometric intuition',
                'Circular constraint → smooth shrinkage',
                'Diamond constraint → corners at axes (zeros)',
                'Mix of diamond + circle'
              ],
              [
                'sklearn class',
                'Ridge / RidgeCV',
                'Lasso / LassoCV',
                'ElasticNet / ElasticNetCV'
              ],
              [
                'Typical use',
                'Many correlated features, all relevant',
                'Few important features, sparse truth',
                'High-dimensional, correlated groups'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying Lasso/Ridge without scaling (fix: StandardScaler in Pipeline — L1/L2 penalties are not scale-invariant)',
            'Mistake 2: Using Lasso when all features are truly relevant (fix: Ridge preserves all features; Lasso drops correlated ones arbitrarily)',
            'Mistake 3: Not using CV to tune alpha (fix: RidgeCV/LassoCV search log-spaced alphas — manual guessing wastes performance)',
            'Mistake 4: Comparing regularized models to OLS on training R² (fix: regularized models intentionally sacrifice training fit for better generalization — compare on test/cv metrics)',
            'Mistake 5: Ignoring max_iter warnings in Lasso (fix: increase max_iter to 5000+ or scale features better; convergence failure means unreliable coefficients)'
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
          text: '<strong>Stripe — fraud detection.</strong> Stripe scores billions of transactions with gradient-boosted trees. A <strong>0.1% recall improvement</strong> on fraud saves millions; models are retrained weekly with stratified CV and precision-recall monitoring.',
          list: [
            '<strong>Genomics:</strong> p = 20,000 genes, n = 200 patients — Lasso selects biomarkers for disease prediction',
            '<strong>Finance:</strong> Ridge stabilizes factor model coefficients when economic indicators are highly correlated',
            '<strong>Marketing mix modeling:</strong> Elastic Net handles correlated ad channels while selecting the strongest drivers',
            '<strong>Real estate:</strong> Ridge on 50+ property features prevents overfitting in hedonic price models',
            '<strong>Text regression:</strong> Lasso on TF-IDF features (p = 10,000+) selects the most predictive terms'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Ridge (L2) shrinks coefficients; Lasso (L1) zeros them; Elastic Net combines both',
            'Alpha (α) controls penalty strength — higher α = simpler model',
            'Regularization paths show coefficient behavior as α varies',
            'Always scale features before L1/L2 penalties',
            'Use RidgeCV / LassoCV / ElasticNetCV for automatic alpha tuning',
            'Choose Ridge for correlated features; Lasso for sparse truth; Elastic Net for both'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does Lasso produce sparse solutions but Ridge does not?
Ans: The L1 penalty's diamond-shaped constraint has corners on the axes where some βⱼ = 0. The L2 circle has no corners, so coefficients shrink but rarely hit exactly zero.`,
            `Q2: When would you choose Elastic Net over pure Lasso?
Ans: When features are highly correlated and you want feature selection without arbitrarily dropping one from each correlated group.`,
            `Q3: What happens as α → ∞ in Ridge regression?
Ans: All coefficients approach zero and the model predicts the mean of y — maximum bias, minimum variance.`,
            `Q4: Why is feature scaling mandatory for regularized regression?
Ans: Penalties sum over raw coefficient values. A feature with large scale (e.g., income in dollars) would be penalized more than one with small scale (e.g., age), distorting the optimization.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Ridge, Lasso & Elastic Net</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Ridge, Lasso & Elastic Net")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'regression-pipeline-eda': {
      title: 'Regression Pipeline & EDA',
      subtitle: 'End-to-end workflow from raw data to evaluated model using sklearn Pipeline',
      sections: [
        {
          heading: 'What is a Regression Pipeline?',
          text: `A production-quality regression workflow is more than <code>model.fit(X, y)</code>. It chains <strong>EDA → cleaning → feature engineering → modeling → evaluation</strong> into a reproducible pipeline. sklearn's <code>Pipeline</code> and <code>ColumnTransformer</code> ensure every preprocessing step is fit only on training data and applied consistently at prediction time — eliminating the most common source of data leakage.`,
          list: [
            '<strong>EDA:</strong> distributions, missing values, correlations, outliers',
            '<strong>Feature engineering:</strong> scaling, encoding categoricals, creating interactions',
            '<strong>Modeling:</strong> LinearRegression, Ridge, or ElasticNet inside a Pipeline',
            '<strong>Evaluation:</strong> MAE, RMSE, R² on held-out test data',
            '<strong>Cross-validation:</strong> robust estimates before final test evaluation'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>A production-quality regression workflow is more than <code>model.fit(X, y)</code>. It chains <strong>EDA → cleaning → feature engineering → modeling → evaluation</strong> into a reproducible pipeline. sklearn's <code>Pipeline</code> and <code>ColumnTransformer</code> ensure every preprocessing step is fit only on training data and applied consistently at prediction time — eliminating the most common source of data leakage. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, A production-quality regression workflow is more than <code>model.fit(X, y)</code>. It chains <strong>EDA → cleaning → feature engineering → modeling → evaluation</strong> into a reproducible pipeline. sklearn's <code>Pipeline</code> and <code>ColumnTransformer</code> ensure every preprocessing step is fit only on training data and applied consistently at prediction time — eliminating the most common source of data leakage. <strong>EDA:</strong> distributions, missing values, correlations, outliers <strong>Feature engineering:</strong> scaling, encoding categoricals, creating interactions <strong>Modeling:</strong> LinearRegression, Ridge, or ElasticNet inside a Pipeline <strong>Evaluation:</strong> MAE, RMSE, R² on held-out test data <strong>Cross-validation:</strong> robust estimates before final test evaluation</p>`,
            '<p>You use regression pipeline & eda when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Regression Pipeline & EDA

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Regression Pipeline & EDA sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Regression Pipeline & EDA with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Regression Pipeline & EDA — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Mistake 1: Fitting StandardScaler on the full dataset including test rows (fix: everything inside Pipeline, fit only on X_train)',
            'Mistake 2: Evaluating only on training data (fix: hold out a test set; report MAE/RMSE/R² on unseen data)',
            'Mistake 3: Using R² alone to claim success (fix: R² = 0.95 on skewed targets can still mean large dollar errors — always report MAE/RMSE in original units)',
            'Mistake 4: Skipping EDA and going straight to modeling (fix: 30 minutes of EDA prevents hours of debugging — check distributions, missing values, and correlations first)',
            'Mistake 5: Not persisting the full pipeline (fix: joblib.dump(pipe, "model.joblib") — not just the model object, so preprocessing is included at inference time)'
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
          text: '<strong>Stripe — fraud detection.</strong> Stripe scores billions of transactions with gradient-boosted trees. A <strong>0.1% recall improvement</strong> on fraud saves millions; models are retrained weekly with stratified CV and precision-recall monitoring.',
          list: [
            '<strong>ML engineering:</strong> Every production regression service wraps preprocessing + model in a single serialized Pipeline',
            '<strong>Data science interviews:</strong> "Walk me through your modeling process" expects EDA → pipeline → cross-validation → test evaluation',
            '<strong>MLOps:</strong> Pipelines ensure training and serving use identical transforms — prevents training-serving skew',
            '<strong>Compliance:</strong> Reproducible pipelines with fixed random seeds satisfy audit requirements in finance and healthcare',
            '<strong>A/B testing:</strong> Compare pipelines (not just models) to measure end-to-end impact of feature engineering changes'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Regression workflow: EDA → split → preprocess → model → evaluate',
            'sklearn Pipeline chains all steps; ColumnTransformer handles mixed feature types',
            'Report MAE (interpretable), RMSE (penalizes big errors), and R² (variance explained)',
            'Cross-validate on training data; evaluate once on held-out test set',
            'Serialize the entire Pipeline, not just the model',
            'EDA prevents leakage, identifies transforms, and guides feature selection'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why must preprocessing be inside the Pipeline?
Ans: So transforms are fit only on training data during cross-validation, preventing information leakage from the test set.`,
            `Q2: When is RMSE much larger than MAE?
Ans: When the model makes a few large errors (outliers in residuals). RMSE squares errors, amplifying big mistakes.`,
            `Q3: What does R² = 0.87 mean?
Ans: The model explains 87% of the variance in the target; 13% remains unexplained by the features.`,
            `Q4: Why log-transform a skewed target?
Ans: Linear models assume residuals are homoscedastic. Log transformation compresses large values, making errors more symmetric and improving model fit.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Regression Pipeline & EDA</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Regression Pipeline & EDA")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'house-price-prediction-project': {
      title: 'House Price Prediction Project',
      subtitle: 'End-to-end regression project on California-housing-style data — from problem definition to deployment',
      sections: [
        {
          heading: 'What is House Price Prediction Project?',
          text: 'House Price Prediction Project is essential for machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, House Price Prediction Project provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use house price prediction project when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — House Price Prediction Project

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: House Price Prediction Project sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'House Price Prediction Project with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("House Price Prediction Project — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Mistake 1: Training on the full dataset and reporting training R² as final performance (fix: always hold out a test set; report test metrics)',
            'Mistake 2: Manually scaling at inference time differently than at training (fix: save the Pipeline — scaler is embedded)',
            'Mistake 3: Ignoring geographic features and using only demographic data (fix: Latitude/Longitude capture location premium — include them or use spatial encodings)',
            'Mistake 4: Deploying the most complex model (polynomial) when Ridge is nearly as accurate (fix: prefer simpler model when performance difference is < 1% RMSE)',
            'Mistake 5: Not monitoring model drift in production (fix: log predictions and actuals; retrain when RMSE exceeds a threshold over rolling windows)'
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
          text: '<strong>Stripe — fraud detection.</strong> Stripe scores billions of transactions with gradient-boosted trees. A <strong>0.1% recall improvement</strong> on fraud saves millions; models are retrained weekly with stratified CV and precision-recall monitoring.',
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
            'House price prediction is a classic regression project with real-world constraints',
            'EDA revealed MedInc as top predictor and multicollinearity in room features',
            'RidgeCV won with Test RMSE = 0.681 ($68K large-error scale) and R² = 0.633',
            'Pipeline ensures preprocessing consistency from training to API serving',
            'Deployment: joblib.dump the Pipeline, load in Flask, expose /predict endpoint',
            'Always monitor production predictions for model drift'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why did Ridge outperform plain LinearRegression on this dataset?
Ans: AveRooms and AveBedrms are highly correlated, making OLS coefficients unstable. Ridge's L2 penalty produces stable, generalizable weights.`,
            `Q2: How do you convert a prediction of 2.453 to dollars?
Ans: Multiply by $100,000 → $245,300. The target is in $100K units.`,
            `Q3: Why serialize the Pipeline instead of just the Ridge model?
Ans: The Pipeline includes StandardScaler. Without it, raw features would be fed to Ridge at inference time, producing wrong predictions.`,
            `Q4: What would you do if production RMSE drifts from 0.68 to 0.95?
Ans: Investigate data drift (feature distributions changed), retrain on recent data, and consider adding new features or switching to a more flexible model.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>House Price Prediction Project</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — House Price Prediction Project")
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
