export const statsModule4Structure = {
  module4: {
    title: 'Module 4: Regression Analysis',
    topics: [
      { id: 'regression', title: 'Introduction to Regression' },
      { id: 'correlation', title: 'Correlation Analysis' },
      { id: 'linear-regression', title: 'Linear Regression' },
      { id: 'logistic-regression', title: 'Logistic Regression' },
      { id: 'multiple-regression', title: 'Multiple Regression' },
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
          heading: 'Types of Regression',
          table: {
            headers: ['Type', 'Dependent Variable', 'Use Case', 'Example'],
            rows: [
              ['Simple Linear', 'Continuous', 'One predictor', 'House price vs. square footage'],
              ['Multiple Linear', 'Continuous', 'Many predictors', 'Salary vs. experience, education, age'],
              ['Logistic', 'Binary', 'Classification', 'Spam vs. not spam'],
              ['Polynomial', 'Continuous', 'Non-linear trends', 'Population growth curves'],
              ['Ridge/Lasso', 'Continuous', 'Regularized', 'High-dimensional data'],
              ['Poisson', 'Count', 'Rate prediction', 'Number of customer arrivals']
            ]
          }
        },
        {
          heading: 'The Regression Equation',
          text: 'At its core, regression finds the best-fitting line (or curve) through data points by minimizing the overall prediction error.',
          example: {
            title: 'Simple Linear Regression Formula',
            code: `ŷ = β₀ + β₁x

Where:
  ŷ  = predicted value of dependent variable
  x  = independent variable (predictor)
  β₀ = y-intercept (value when x = 0)
  β₁ = slope (change in y per unit change in x)

Example:
  Study Hours (x): [1, 2, 3, 4, 5]
  Exam Score (y):  [55, 60, 70, 75, 85]

Fitted line:
  ŷ = 45 + 8x

Interpretation:
  - Baseline score (0 hours): 45
  - Each additional hour adds 8 marks`,
            output: 'The regression line captures the linear trend in data.',
            type: 'code'
          }
        },
        {
          heading: 'Key Concepts',
          list: [
            '<strong>Residuals:</strong> Differences between actual and predicted values (e = y - ŷ)',
            '<strong>Least Squares:</strong> Method that minimizes the sum of squared residuals',
            '<strong>R-squared (R²):</strong> Proportion of variance in y explained by the model (0 to 1)',
            '<strong>Overfitting:</strong> Model fits training data too closely and performs poorly on new data',
            '<strong>Underfitting:</strong> Model is too simple to capture the underlying pattern'
          ]
        },
        {
          heading: 'Regression Assumptions',
          table: {
            headers: ['Assumption', 'Description', 'How to Check'],
            rows: [
              ['Linearity', 'Relationship is linear', 'Scatter plot of residuals vs. fitted'],
              ['Independence', 'Observations are independent', 'Durbin-Watson test'],
              ['Homoscedasticity', 'Constant variance of residuals', 'Residual plot'],
              ['Normality', 'Residuals are normally distributed', 'Q-Q plot, Shapiro-Wilk'],
              ['No multicollinearity', 'Predictors not highly correlated', 'VIF (Variance Inflation Factor)']
            ]
          },
          note: 'Violating assumptions does not always make regression useless, but it affects the validity of p-values and confidence intervals.'
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
          heading: 'Pearson Correlation Coefficient (r)',
          text: 'The most common measure of linear correlation, ranging from -1 to +1.',
          example: {
            title: 'Pearson r Formula',
            code: `r = Cov(X, Y) / (σₓ × σᵧ)

Where:
  Cov(X,Y) = Σ(xi - x̄)(yi - ȳ) / (n - 1)
  σₓ = standard deviation of X
  σᵧ = standard deviation of Y

Simplified:
  r = Σ(xi - x̄)(yi - ȳ) / √[Σ(xi-x̄)² × Σ(yi-ȳ)²]

Interpretation of |r|:
  0.00 - 0.19: Very weak
  0.20 - 0.39: Weak
  0.40 - 0.59: Moderate
  0.60 - 0.79: Strong
  0.80 - 1.00: Very strong`,
            output: 'r = +1 means perfect positive linear relationship. r = -1 means perfect negative. r = 0 means no linear relationship.',
            type: 'code'
          }
        },
        {
          heading: 'Example: Study Hours vs. Exam Score',
          example: {
            title: 'Computing Pearson r',
            code: `Data:
  Student | Hours (x) | Score (y)
  A       | 2         | 55
  B       | 3         | 65
  C       | 4         | 70
  D       | 5         | 80
  E       | 6         | 85

Step 1: Compute means
  x̄ = 4, ȳ = 71

Step 2: Compute deviations and products
  (2-4)(55-71) = (-2)(-16) = 32
  (3-4)(65-71) = (-1)(-6)  = 6
  (4-4)(70-71) = (0)(-1)   = 0
  (5-4)(80-71) = (1)(9)    = 9
  (6-4)(85-71) = (2)(14)   = 28

  Σ(xi-x̄)(yi-ȳ) = 75

Step 3: Compute standard deviations
  Σ(xi-x̄)² = 10  → σₓ = √2.5 ≈ 1.58
  Σ(yi-ȳ)² = 370 → σᵧ = √92.5 ≈ 9.62

Step 4: Calculate r
  r = 75 / (5-1) / (1.58 × 9.62)
    = 75 / 4 / 15.2
    ≈ 0.987`,
            output: 'r ≈ 0.99 indicates a very strong positive linear relationship between study hours and exam scores.',
            type: 'code'
          }
        },
        {
          heading: 'Correlation vs. Causation',
          text: 'Correlation does <strong>not</strong> imply causation. Two variables may be correlated without one causing the other.',
          table: {
            headers: ['Scenario', 'Explanation'],
            rows: [
              ['Ice cream sales & drowning deaths', 'Both increase in summer (confounding variable: temperature)'],
              ['Number of firefighters & fire damage', 'More firefighters are sent to larger fires'],
              ['Shoe size & reading ability', 'Both correlate with age in children']
            ]
          },
          note: 'Always consider confounding variables before inferring causation from correlation.'
        },
        {
          heading: 'Other Correlation Measures',
          table: {
            headers: ['Measure', 'Use Case', 'Properties'],
            rows: [
              ['Pearson', 'Linear relationships', 'Sensitive to outliers; assumes normality'],
              ['Spearman', 'Monotonic relationships', 'Rank-based; robust to outliers'],
              ['Kendall', 'Small samples, ties', 'Rank-based; more robust than Spearman'],
              ['Point-Biserial', 'One continuous, one binary', 'Special case of Pearson'],
              ['Phi coefficient', 'Two binary variables', 'Special case of Pearson for 2×2 tables']
            ]
          }
        },
        {
          heading: 'Coefficient of Determination (r²)',
          text: 'Squaring the correlation coefficient gives the proportion of variance in one variable explained by the other.',
          example: {
            title: 'Interpreting r²',
            code: `If r = 0.80 between advertising spend and sales:

  r² = 0.80² = 0.64

Interpretation:
  64% of the variation in sales
  can be explained by advertising spend.

  The remaining 36% is due to
  other factors (price, season, competition).`,
            output: 'r² is always used in regression as R² — the proportion of variance explained by the model.',
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
          heading: 'Simple Linear Regression',
          text: '<strong>Simple linear regression</strong> models the relationship between a single independent variable X and a dependent variable Y using a straight line. It is the simplest form of regression and the foundation for all advanced regression techniques.',
          example: {
            title: 'The Regression Line',
            code: `Model:
  ŷ = β₀ + β₁x

Example — House Prices:
  Size (sq ft) | Price ($K)
  1000         | 150
  1200         | 180
  1500         | 220
  1800         | 260
  2000         | 290

Using least squares:
  β₁ = Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²
     = 142000 / 620000
     ≈ 0.229

  β₀ = ȳ - β₁x̄
     = 220 - 0.229(1500)
     ≈ -123.5

Regression equation:
  Price = -123.5 + 0.229 × Size`,
            output: 'Each additional square foot adds approximately $229 to the house price.',
            type: 'code'
          }
        },
        {
          heading: 'Ordinary Least Squares (OLS)',
          text: 'OLS finds the line that minimizes the <strong>sum of squared residuals</strong> — the vertical distances between actual data points and the fitted line.',
          example: {
            title: 'OLS Minimization',
            code: `Residual for point i:
  eᵢ = yᵢ - ŷᵢ = yᵢ - (β₀ + β₁xᵢ)

Objective:
  Minimize SSE = Σ(eᵢ)² = Σ[yᵢ - (β₀ + β₁xᵢ)]²

Closed-form solutions:
  β₁ = Σ(xi - x̄)(yi - ȳ) / Σ(xi - x̄)²
  β₀ = ȳ - β₁x̄

Why squared residuals?
  - Differentiable (unlike absolute value)
  - Penalizes large errors more heavily
  - Has unique closed-form solution`,
            output: 'OLS is computationally efficient and statistically optimal under standard assumptions.',
            type: 'code'
          }
        },
        {
          heading: 'Evaluating the Model',
          table: {
            headers: ['Metric', 'Formula', 'Interpretation'],
            rows: [
              ['R² (R-squared)', '1 - SSE/SST', 'Proportion of variance explained (0 to 1)'],
              ['Adjusted R²', '1 - (SSE/(n-k))/(SST/(n-1))', 'Penalizes adding irrelevant predictors'],
              ['Standard Error', '√(SSE/(n-2))', 'Average prediction error in original units'],
              ['t-statistic', 'β₁ / SE(β₁)', 'Tests if slope is significantly different from 0'],
              ['p-value', 'From t-distribution', '< 0.05 → predictor is statistically significant']
            ]
          }
        },
        {
          heading: 'Interpreting Regression Output',
          example: {
            title: 'Sample Regression Summary',
            code: `Regression: Price vs. Size

Coefficients:
              Estimate  Std. Error  t-value  p-value
Intercept    -123.50    45.20      -2.73    0.041
Size (sq ft)    0.229    0.031       7.39    <0.001

Model Fit:
  R² = 0.932
  Adjusted R² = 0.909
  Standard Error = 12.3

Interpretation:
  - Size is highly significant (p < 0.001)
  - Model explains 93.2% of price variation
  - Typical prediction error: ±$12,300`,
            output: 'Both coefficients and model fit statistics are needed for complete interpretation.',
            type: 'code'
          }
        },
        {
          heading: 'Residual Analysis',
          text: 'Analyzing residuals helps verify assumptions and identify model problems.',
          list: [
            '<strong>Residuals vs. Fitted:</strong> Should show random scatter (no pattern) around zero',
            '<strong>Normal Q-Q plot:</strong> Residuals should fall approximately on a straight line',
            '<strong>Scale-Location plot:</strong> Checks homoscedasticity (constant variance)',
            '<strong>Residuals vs. Leverage:</strong> Identifies influential outliers that unduly affect the model'
          ],
          note: 'If residual plots show patterns (curves, funnels), consider transforming variables or using a different model type.'
        },
        {
          heading: 'Common Pitfalls',
          table: {
            headers: ['Pitfall', 'Description', 'Solution'],
            rows: [
              ['Outliers', 'Extreme values skew the line', 'Robust regression; investigate data'],
              ['Extrapolation', 'Predicting outside data range', 'Limit predictions to observed range'],
              ['Non-linearity', 'True relationship is curved', 'Polynomial regression or transformation'],
              ['Heteroscedasticity', 'Error variance changes', 'Weighted least squares; transform y'],
              ['Autocorrelation', 'Errors correlated over time', 'Time series models; Durbin-Watson test']
            ]
          }
        }
      ]
    },
    'logistic-regression': {
      title: 'Logistic Regression',
      subtitle: 'Predicting binary outcomes with probability',
      sections: [
        {
          heading: 'Why Logistic Regression?',
          text: 'Linear regression is unsuitable for binary outcomes (0/1, Yes/No, Pass/Fail) because it can predict values outside [0, 1]. <strong>Logistic regression</strong> solves this by modeling the <em>probability</em> of an event using the logistic (sigmoid) function.',
          example: {
            title: 'The Problem with Linear Regression',
            code: `Scenario: Predict exam pass/fail based on study hours

Linear regression might predict:
  2 hours → 0.30 (30% pass probability) ✓
  5 hours → 0.75 (75% pass probability) ✓
  8 hours → 1.20 (120%?) ✗ IMPOSSIBLE
  0 hours → -0.15 (-15%?) ✗ IMPOSSIBLE

Logistic regression:
  ŷ = σ(z) = 1 / (1 + e⁻ᶻ)

  σ(-∞) = 0, σ(0) = 0.5, σ(+∞) = 1

Always outputs valid probabilities!`,
            output: 'The sigmoid function squashes any real-valued input into the (0, 1) range.',
            type: 'code'
          }
        },
        {
          heading: 'The Logistic Function',
          example: {
            title: 'Logistic Regression Model',
            code: `Log-odds (logit):
  z = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ

Probability:
  P(Y=1|X) = σ(z) = 1 / (1 + e⁻ᶻ)

Decision boundary (default):
  If P(Y=1|X) ≥ 0.5 → Predict Class 1
  If P(Y=1|X) < 0.5 → Predict Class 0

Odds interpretation:
  Odds = P / (1 - P) = eᶻ
  log(Odds) = z = β₀ + β₁x₁ + ...

A one-unit increase in xᵢ multiplies
odds by e^(βᵢ).`,
            output: 'Logistic regression is linear in the log-odds space, but non-linear in probability space.',
            type: 'code'
          }
        },
        {
          heading: 'Maximum Likelihood Estimation',
          text: 'Unlike linear regression (which uses least squares), logistic regression uses <strong>Maximum Likelihood Estimation (MLE)</strong> to find coefficients.',
          example: {
            title: 'Likelihood Function',
            code: `For each observation i:
  If yᵢ = 1: contribution = log(Pᵢ)
  If yᵢ = 0: contribution = log(1 - Pᵢ)

Total log-likelihood:
  LL = Σ [yᵢ log(Pᵢ) + (1-yᵢ)log(1-Pᵢ)]

Objective:
  Maximize LL (or minimize negative LL)

No closed-form solution →
  Iterative optimization (Newton-Raphson,
  gradient descent, IRLS)`,
            output: 'MLE finds the coefficients that make the observed data most probable.',
            type: 'code'
          }
        },
        {
          heading: 'Example: Email Spam Detection',
          example: {
            title: 'Spam Classification Model',
            code: `Features:
  x₁ = word_count (normalized)
  x₂ = has_link (0 or 1)
  x₃ = sender_reputation_score

Fitted model:
  z = -2.5 + 1.2x₁ + 3.0x₂ - 0.8x₃

For an email [x₁=2.0, x₂=1, x₃=5]:
  z = -2.5 + 1.2(2) + 3.0(1) - 0.8(5)
    = -2.5 + 2.4 + 3.0 - 4.0
    = -1.1

  P(Spam) = 1 / (1 + e¹·¹)
          = 1 / (1 + 3.004)
          ≈ 0.25

Prediction: Not Spam (< 0.5)`,
            output: 'Each coefficient represents the change in log-odds per unit change in the predictor.',
            type: 'code'
          }
        },
        {
          heading: 'Model Evaluation for Classification',
          table: {
            headers: ['Metric', 'Formula / Definition', 'Best For'],
            rows: [
              ['Accuracy', '(TP+TN)/(TP+TN+FP+FN)', 'Balanced classes'],
              ['Precision', 'TP/(TP+FP)', 'Minimizing false positives'],
              ['Recall (Sensitivity)', 'TP/(TP+FN)', 'Minimizing false negatives'],
              ['F1-Score', '2×Precision×Recall/(Precision+Recall)', 'Balanced precision/recall'],
              ['AUC-ROC', 'Area under ROC curve', 'Overall discrimination ability'],
              ['Log-Loss', '-Σ[y log(p) + (1-y)log(1-p)]', 'Probabilistic calibration']
            ]
          }
        },
        {
          heading: 'Odds Ratios and Interpretation',
          example: {
            title: 'Interpreting Coefficients',
            code: `Model: z = -1.5 + 0.8×Smoking + 0.02×Age

Odds ratios (e^β):
  Smoking: e^0.8 ≈ 2.23
    → Smokers have 2.23× the odds
       of disease vs. non-smokers

  Age: e^0.02 ≈ 1.02
    → Each additional year of age
       increases odds by 2%

Confidence intervals:
  If 95% CI for smoking OR is (1.5, 3.2)
    → Statistically significant
       (does not include 1.0)`,
            output: 'Odds ratios > 1 indicate increased risk; < 1 indicates decreased risk.',
            type: 'code'
          },
          note: 'Always report confidence intervals with odds ratios. If the interval includes 1.0, the effect is not statistically significant.'
        },
        {
          heading: 'Multiclass Extension',
          text: 'Logistic regression extends to multiple classes using:',
          list: [
            '<strong>One-vs-Rest (OvR):</strong> Train one binary classifier per class vs. all others',
            '<strong>Softmax (Multinomial):</strong> Generalizes sigmoid to K classes; outputs probability distribution over all classes',
            '<strong>Ordered Logit:</strong> For ordinal outcomes (Low < Medium < High)'
          ]
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
          heading: 'Matrix Formulation',
          example: {
            title: 'OLS in Matrix Notation',
            code: `Design matrix X (n × (k+1)):
  [1  x₁₁  x₁₂  ...  x₁ₖ]
  [1  x₂₁  x₂₂  ...  x₂ₖ]
  [... ...  ...  ...  ... ]
  [1  xₙ₁  xₙ₂  ...  xₙₖ]

Target vector y (n × 1):
  [y₁, y₂, ..., yₙ]ᵀ

Coefficient vector β ((k+1) × 1):
  [β₀, β₁, ..., βₖ]ᵀ

Closed-form solution:
  β̂ = (XᵀX)⁻¹ Xᵀy

This works when XᵀX is invertible
(no perfect multicollinearity).`,
            output: 'Matrix form enables efficient computation even with hundreds of predictors.',
            type: 'code'
          }
        },
        {
          heading: 'Key Challenges in Multiple Regression',
          table: {
            headers: ['Challenge', 'Description', 'Diagnostic', 'Solution'],
            rows: [
              ['Multicollinearity', 'Predictors highly correlated', 'VIF > 10', 'Remove; combine; ridge regression'],
              ['Overfitting', 'Model fits noise in training data', 'Training R² >> Test R²', 'Regularization; cross-validation'],
              ['Omitted Variable Bias', 'Important predictor missing', 'Theory-driven model', 'Include relevant variables'],
              ['Heteroscedasticity', 'Non-constant error variance', 'Residual plots', 'Transform; weighted least squares'],
              ['Autocorrelation', 'Correlated errors (time series)', 'Durbin-Watson', 'Time series models']
            ]
          }
        },
        {
          heading: 'Variable Selection Methods',
          text: 'With many potential predictors, we need systematic ways to choose which to include.',
          table: {
            headers: ['Method', 'Approach', 'Advantages', 'Disadvantages'],
            rows: [
              ['All Subsets', 'Try every combination', 'Finds optimal model', 'Computationally infeasible for many variables'],
              ['Forward Selection', 'Add best variable iteratively', 'Fast; intuitive', 'May miss optimal combinations'],
              ['Backward Elimination', 'Start full, remove weakest', 'Considers interactions early', 'Sensitive to multicollinearity'],
              ['Stepwise', 'Forward + backward combined', 'Balanced exploration', 'Overfitting risk; p-value hacking'],
              ['Regularized (Lasso)', ' penalizes large coefficients', 'Automatic selection; handles many variables', 'Requires tuning λ']
            ]
          }
        },
        {
          heading: 'Regularization: Ridge and Lasso',
          text: 'Regularization adds a penalty to the loss function to prevent overfitting and handle multicollinearity.',
          example: {
            title: 'Ridge vs. Lasso',
            code: `Ridge Regression (L2 penalty):
  Loss = SSE + λΣβⱼ²

  - Shrinks all coefficients toward 0
  - Never fully eliminates predictors
  - Best when many predictors have small effects

Lasso Regression (L1 penalty):
  Loss = SSE + λΣ|βⱼ|

  - Can shrink coefficients to exactly 0
  - Performs automatic feature selection
  - Best when few predictors are truly important

Elastic Net:
  Loss = SSE + λ₁Σ|βⱼ| + λ₂Σβⱼ²
  - Combines both penalties`,
            output: 'Lasso simplifies models by eliminating irrelevant predictors; Ridge handles correlated predictors better.',
            type: 'code'
          }
        },
        {
          heading: 'Interpreting Multiple Regression Results',
          example: {
            title: 'Regression Output Table',
            code: `Model: Salary ~ Experience + Education + Gender

Variable      Coefficient  Std Error  t-stat  p-value  VIF
Intercept     25,000       3,200      7.81    <0.001   —
Experience    3,500        400        8.75    <0.001   1.8
Education     8,200        1,500      5.47    <0.001   2.1
Gender(M)     500        2,100      0.24    0.812    1.5

Interpretation:
  - Each year of experience adds $3,500
    (significant, p < 0.001)
  - Each degree level adds $8,200
    (significant)
  - Gender coefficient is NOT significant
    (p = 0.812) → no evidence of
    gender pay gap in this model
  - All VIFs < 5 → no multicollinearity`,
            output: 'Always check significance, effect size, and model diagnostics together.',
            type: 'code'
          },
          note: 'Be cautious with causal interpretation. Regression shows association, not necessarily causation. Randomized experiments or instrumental variables are needed for strong causal claims.'
        },
        {
          heading: 'Assumptions Checklist for Multiple Regression',
          list: [
            '<strong>Linearity:</strong> Relationship between predictors and outcome is linear (check partial residual plots)',
            '<strong>Independence:</strong> Observations are not correlated (check Durbin-Watson for time series)',
            '<strong>Homoscedasticity:</strong> Residual variance is constant (check residuals vs. fitted plot)',
            '<strong>Normality:</strong> Residuals are approximately normal (Q-Q plot, Shapiro-Wilk test)',
            '<strong>No multicollinearity:</strong> VIF values should generally be below 5 (definitely below 10)',
            '<strong>No influential outliers:</strong> Check Cook\'s distance — values > 1 warrant investigation'
          ]
        }
      ]
    }
  }
};
