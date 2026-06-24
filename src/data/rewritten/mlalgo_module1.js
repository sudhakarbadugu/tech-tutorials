// machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js mlalgo_module1.js

export const mlalgoModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of ML',
    topics: [
      {
        id: 'intro-ml-foundations',
        title: 'Introduction to ML Foundations'
      },
      {
        id: 'bias-variance-tradeoff',
        title: 'Bias-Variance Tradeoff'
      },
      {
        id: 'cross-validation-strategies',
        title: 'Cross-Validation Strategies'
      },
      {
        id: 'evaluation-metrics-overview',
        title: 'Evaluation Metrics Overview'
      },
      {
        id: 'imbalanced-data-handling',
        title: 'Imbalanced Data Handling'
      }
    ]
  }
};

export const mlalgoModule1Content = {
  module1: {
    'intro-ml-foundations': {
      title: 'Introduction to ML Foundations',
      subtitle: 'The end-to-end workflow, learning paradigms, and the scikit-learn ecosystem',
      sections: [
        {
          heading: 'What is Machine Learning?',
          text: `Machine learning is the discipline of building systems that <strong>learn patterns from data</strong> to make predictions or decisions on unseen inputs. Unlike rule-based software, an ML model's behavior is shaped by examples, not hand-coded logic. Industrial ML success depends as much on workflow discipline — problem framing, data quality, validation, and deployment — as on algorithm choice.`,
          list: [
            '<strong>Supervised learning:</strong> learn a mapping from features X to labels y (classification, regression)',
            '<strong>Unsupervised learning:</strong> discover structure in unlabeled data (clustering, dimensionality reduction)',
            '<strong>Semi-supervised / self-supervised:</strong> leverage limited labels plus abundant unlabeled data',
            '<strong>Reinforcement learning:</strong> learn policies from reward signals (covered in RL modules)',
            '<strong>Industrial reality:</strong> 80% of effort is data engineering, validation, and monitoring — not model fitting'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Machine learning is the discipline of building systems that <strong>learn patterns from data</strong> to make predictions or decisions on unseen inputs. Unlike rule-based software, an ML model's behavior is shaped by examples, not hand-coded logic. Industrial ML success depends as much on workflow discipline — problem framing, data quality, validation, and deployment — as on algorithm choice. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, Machine learning is the discipline of building systems that <strong>learn patterns from data</strong> to make predictions or decisions on unseen inputs. Unlike rule-based software, an ML model's behavior is shaped by examples, not hand-coded logic. Industrial ML success depends as much on workflow discipline — problem framing, data quality, validation, and deployment — as on algorithm choice. <strong>Supervised learning:</strong> learn a mapping from features X to labels y (classification, regression) <strong>Unsupervised learning:</strong> discover structure in unlabeled data (clustering, dimensionality reduction) <strong>Semi-supervised / self-supervised:</strong> leverage limited labels plus abundant unlabeled data <strong>Reinforcement learning:</strong> learn policies from reward signals (covered in RL modules) <strong>Industrial reality:</strong> 80% of effort is data engineering, validation, and monitoring — not model fitting</p>`,
            '<p>You use introduction to ml foundations when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to ML Foundations

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to ML Foundations sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Supervised learning minimizes expected prediction error on unseen data. The empirical risk plus regularization is what sklearn estimators optimize under the hood.',
          example: {
            title: 'Empirical Risk Minimization',
            code: `General supervised objective:
  f* = argmin_f  (1/n) Σᵢ L(f(xᵢ), yᵢ) + λ · Ω(f)

Where:
  L  = loss (e.g., log-loss, squared error)
  Ω  = regularization penalty (L1, L2, tree depth)
  λ  = regularization strength

Example — Logistic Regression:
  L = -[y·log(p) + (1-y)·log(1-p)]
  Ω = ||w||²₂   (Ridge / L2 penalty)`,
            output: 'Every sklearn classifier minimizes some form of empirical loss plus complexity control.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Introduction to ML Foundations with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Introduction to ML Foundations — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'Choosing the right learning paradigm determines your data requirements, evaluation strategy, and tooling.',
          table: {
            headers: [
              'Paradigm',
              'Data',
              'Goal',
              'Typical sklearn API',
              'Example Use Case'
            ],
            rows: [
              [
                'Supervised — Classification',
                'Labeled (X, y)',
                'Predict discrete class',
                'fit(X, y) → predict(X)',
                'Fraud detection, churn prediction'
              ],
              [
                'Supervised — Regression',
                'Labeled (X, y)',
                'Predict continuous value',
                'fit(X, y) → predict(X)',
                'Demand forecasting, price estimation'
              ],
              [
                'Unsupervised — Clustering',
                'Unlabeled (X)',
                'Group similar points',
                'fit(X) → labels_',
                'Customer segmentation'
              ],
              [
                'Unsupervised — Reduction',
                'Unlabeled (X)',
                'Compress features',
                'fit_transform(X)',
                'Visualization, noise reduction'
              ],
              [
                'Pipeline (both)',
                'Labeled or unlabeled',
                'Composable transforms + model',
                'Pipeline([...])',
                'Production-grade preprocessing'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Jumping to complex models before establishing a baseline (fix: start with LogisticRegression or a shallow RandomForest)',
            'Mistake 2: Fitting preprocessing on the full dataset before splitting (fix: put all transforms inside a Pipeline fitted only on training data)',
            'Mistake 3: Using accuracy as the sole metric on imbalanced data (fix: report precision, recall, F1, and AUC-ROC)',
            'Mistake 4: Treating train score as production performance (fix: always evaluate on a held-out test set the model never saw during tuning)'
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
          text: 'The same foundational workflow powers models across industries.',
          list: [
            '<strong>Finance:</strong> credit scoring pipelines with StandardScaler + LogisticRegression, monitored for population drift',
            '<strong>Healthcare:</strong> readmission risk models using supervised classification with strict hold-out validation',
            '<strong>E-commerce:</strong> customer clustering (KMeans) for marketing segments alongside churn classifiers',
            '<strong>Manufacturing:</strong> defect detection with imbalanced classification and precision-focused thresholds',
            '<strong>Search & Ads:</strong> click-through rate models as supervised regression with log-loss evaluation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ML learns patterns from data; workflow discipline matters as much as algorithm choice',
            'Supervised learning maps features to labels; unsupervised finds structure without labels',
            'sklearn uses a uniform API: fit → predict/transform → score',
            'Always use Pipelines to prevent data leakage between train and test',
            'Establish a simple baseline before investing in complex models'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between supervised and unsupervised learning?
Ans: Supervised learning uses labeled data to predict a target; unsupervised learning finds patterns in unlabeled data.`,
            `Q2: Why should preprocessing steps be inside a Pipeline?
Ans: To ensure transforms are fit only on training data, preventing information leakage from the test set.`,
            `Q3: What sklearn method trains a model on data?
Ans: estimator.fit(X, y) for supervised models, or estimator.fit(X) for unsupervised transforms.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to ML Foundations</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to ML Foundations")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'bias-variance-tradeoff': {
      title: 'Bias-Variance Tradeoff',
      subtitle: 'Learning curves, model complexity, and the science of generalization',
      sections: [
        {
          heading: 'What is the Bias-Variance Tradeoff?',
          text: 'The <strong>bias-variance tradeoff</strong> explains why models fail to generalize. <strong>Bias</strong> is error from overly simple assumptions (underfitting). <strong>Variance</strong> is error from sensitivity to training data fluctuations (overfitting). Total expected test error decomposes into bias², variance, and irreducible noise. Your job as a data scientist is to find the complexity sweet spot.',
          list: [
            '<strong>High bias (underfitting):</strong> model too simple — linear model on non-linear data',
            '<strong>High variance (overfitting):</strong> model too complex — deep tree memorizing noise',
            '<strong>Bias-variance tradeoff:</strong> reducing one typically increases the other',
            '<strong>Learning curves:</strong> plot train vs validation score vs training set size to diagnose the problem',
            '<strong>Model complexity:</strong> controlled via hyperparameters (tree depth, regularization λ, polynomial degree)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>bias-variance tradeoff</strong> explains why models fail to generalize. <strong>Bias</strong> is error from overly simple assumptions (underfitting). <strong>Variance</strong> is error from sensitivity to training data fluctuations (overfitting). Total expected test error decomposes into bias², variance, and irreducible noise. Your job as a data scientist is to find the complexity sweet spot. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The <strong>bias-variance tradeoff</strong> explains why models fail to generalize. <strong>Bias</strong> is error from overly simple assumptions (underfitting). <strong>Variance</strong> is error from sensitivity to training data fluctuations (overfitting). Total expected test error decomposes into bias², variance, and irreducible noise. Your job as a data scientist is to find the complexity sweet spot. <strong>High bias (underfitting):</strong> model too simple — linear model on non-linear data <strong>High variance (overfitting):</strong> model too complex — deep tree memorizing noise <strong>Bias-variance tradeoff:</strong> reducing one typically increases the other <strong>Learning curves:</strong> plot train vs validation score vs training set size to diagnose the problem <strong>Model complexity:</strong> controlled via hyperparameters (tree depth, regularization λ, polynomial degree)</p>',
            '<p>You use bias-variance tradeoff when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Bias-Variance Tradeoff

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Bias-Variance Tradeoff sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The expected prediction error at point x decomposes into three irreducible and reducible components.',
          example: {
            title: 'Bias-Variance Decomposition (Regression)',
            code: `Expected Test Error at x:
  E[(y - ŷ)²] = Bias²(ŷ) + Var(ŷ) + σ²_noise

Where:
  Bias(ŷ)  = E[ŷ] - y_true        (systematic error)
  Var(ŷ)   = E[(ŷ - E[ŷ])²]       (spread across training sets)
  σ²_noise = irreducible aleatoric noise

Underfitting:  high Bias², low Var
Overfitting:   low Bias², high Var
Sweet spot:    both low enough that total error is minimized`,
            output: 'You cannot eliminate σ²_noise — focus on balancing bias and variance.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Bias-Variance Tradeoff with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Bias-Variance Tradeoff — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'Diagnose underfitting vs overfitting by comparing training and validation performance.',
          table: {
            headers: [
              'Signal',
              'Train Score',
              'Val Score',
              'Diagnosis',
              'Fix'
            ],
            rows: [
              [
                'Underfitting',
                'Low',
                'Low (similar)',
                'High bias',
                'More features, complex model, less regularization'
              ],
              [
                'Good fit',
                'High',
                'High (close)',
                'Balanced',
                'Deploy or fine-tune'
              ],
              [
                'Overfitting',
                'Very high',
                'Much lower',
                'High variance',
                'More data, regularization, simpler model'
              ],
              [
                'Data-limited overfit',
                'High',
                'Low + gap grows',
                'High variance',
                'Collect more training samples'
              ],
              [
                'Noisy labels',
                'Moderate',
                'Moderate',
                'High irreducible noise',
                'Improve labeling, feature engineering'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Adding model complexity when validation error is already high on small data (fix: you likely have high bias — try richer features first)',
            'Mistake 2: Collecting more data when learning curves show both train and val scores are low (fix: more data helps variance, not bias)',
            'Mistake 3: Tuning on the test set by repeatedly checking test performance (fix: use validation set or cross-validation; test set is touched once)',
            'Mistake 4: Ignoring the regularization knob (fix: increase C⁻¹ in SVM, min_samples_leaf in trees, or α in Ridge to reduce variance)'
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
            '<strong>Credit risk:</strong> shallow trees preferred over deep ensembles for regulatory explainability — explicit bias-variance tradeoff',
            '<strong>Medical imaging:</strong> transfer learning reduces variance when training data is limited',
            '<strong>Ad click prediction:</strong> massive data shifts models from high-bias (underfitting) to variance-dominated regimes',
            '<strong>Time-series forecasting:</strong> complexity controlled via lag features and regularization to avoid fitting noise'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Total error = Bias² + Variance + irreducible noise',
            'Underfitting: high bias; overfitting: high variance',
            'Learning curves diagnose whether more data or more complexity is needed',
            'validation_curve sweeps hyperparameters to find the sweet spot',
            'Regularization and ensembles are primary tools to reduce variance'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: A model has 99% train accuracy and 72% validation accuracy. What is the likely problem?
Ans: High variance (overfitting). The model memorizes training data but fails to generalize.`,
            `Q2: Both train and validation accuracy are stuck at 65%. What should you try?
Ans: Address high bias — use a more complex model, engineer better features, or reduce regularization.`,
            `Q3: When do learning curves show that collecting more data will help?
Ans: When validation score is still climbing and the train-val gap is large at the maximum training size.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Bias-Variance Tradeoff</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Bias-Variance Tradeoff")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'cross-validation-strategies': {
      title: 'Cross-Validation Strategies',
      subtitle: 'K-fold, stratified, time-series, and nested CV for unbiased model selection',
      sections: [
        {
          heading: 'What is Cross-Validation?',
          text: '<strong>Cross-validation (CV)</strong> estimates how a model generalizes by repeatedly training on subsets of data and evaluating on held-out folds. A single train-test split is noisy; CV provides a more stable performance estimate and is the standard gate before hyperparameter tuning in industry.',
          list: [
            '<strong>K-Fold CV:</strong> split data into k folds; each fold serves as validation once',
            '<strong>Stratified K-Fold:</strong> preserves class proportions in each fold — essential for classification',
            '<strong>Time Series Split:</strong> respects temporal ordering — train on past, validate on future',
            '<strong>Nested CV:</strong> outer loop for performance estimation, inner loop for hyperparameter tuning — prevents optimistic bias',
            '<strong>Leave-One-Out (LOO):</strong> k = n; unbiased but high variance and expensive'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Cross-validation (CV)</strong> estimates how a model generalizes by repeatedly training on subsets of data and evaluating on held-out folds. A single train-test split is noisy; CV provides a more stable performance estimate and is the standard gate before hyperparameter tuning in industry. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Cross-validation (CV)</strong> estimates how a model generalizes by repeatedly training on subsets of data and evaluating on held-out folds. A single train-test split is noisy; CV provides a more stable performance estimate and is the standard gate before hyperparameter tuning in industry. <strong>K-Fold CV:</strong> split data into k folds; each fold serves as validation once <strong>Stratified K-Fold:</strong> preserves class proportions in each fold — essential for classification <strong>Time Series Split:</strong> respects temporal ordering — train on past, validate on future <strong>Nested CV:</strong> outer loop for performance estimation, inner loop for hyperparameter tuning — prevents optimistic bias <strong>Leave-One-Out (LOO):</strong> k = n; unbiased but high variance and expensive</p>',
            '<p>You use cross-validation strategies when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Cross-Validation Strategies

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Cross-Validation Strategies sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'K-fold CV estimates generalization error as the mean score across k validation folds.',
          example: {
            title: 'K-Fold CV Score',
            code: `CV Score = (1/k) Σⱼ₌₁ᵏ  Score(fⱼ, D_valⱼ)

Where:
  k        = number of folds
  fⱼ       = model trained on k-1 folds (all except j)
  D_valⱼ   = validation fold j
  Score    = metric (accuracy, F1, neg_MSE, etc.)

Standard error of CV estimate:
  SE ≈ std(fold_scores) / √k`,
            output: 'Report mean ± std across folds, not just the mean.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Cross-Validation Strategies with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Cross-Validation Strategies — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'The CV strategy must match your data structure. Using the wrong splitter is a common source of leakage and inflated scores.',
          table: {
            headers: [
              'Strategy',
              'sklearn Class',
              'When to Use',
              'Pitfall if Misused'
            ],
            rows: [
              [
                'K-Fold',
                'KFold',
                'IID regression or balanced classification',
                'Class imbalance distorts fold estimates'
              ],
              [
                'Stratified K-Fold',
                'StratifiedKFold',
                'Classification with imbalanced classes',
                'Cannot stratify on multiple columns natively'
              ],
              [
                'Time Series Split',
                'TimeSeriesSplit',
                'Temporal / sequential data',
                'Random KFold leaks future into past'
              ],
              [
                'Group K-Fold',
                'GroupKFold',
                'Same entity in multiple rows (patients, users)',
                'Entity leakage across folds'
              ],
              [
                'Nested CV',
                'GridSearchCV + outer CV',
                'Unbiased tuning + evaluation',
                'Tuning on outer fold inflates reported performance'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using random KFold on time-series data (fix: use TimeSeriesSplit — future data must never appear in training)',
            'Mistake 2: Running GridSearchCV and reporting best_score_ as final performance (fix: best_score_ is optimistically biased; use nested CV)',
            'Mistake 3: Preprocessing the full dataset before CV (fix: wrap preprocessing in a Pipeline inside GridSearchCV)',
            'Mistake 4: Using k=2 folds for small datasets without stratification (fix: use StratifiedKFold with k=5 or k=10)'
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
            '<strong>Pharma trials:</strong> GroupKFold ensures no patient appears in both train and validation',
            '<strong>Demand forecasting:</strong> TimeSeriesSplit with expanding windows mimics production retraining',
            '<strong>Model benchmarking:</strong> nested CV for unbiased comparison of algorithms in research papers and internal bake-offs',
            '<strong>AutoML platforms:</strong> H2O, Auto-sklearn use CV internally for leaderboard rankings'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CV estimates generalization by averaging scores across k held-out folds',
            'StratifiedKFold is default for classification; TimeSeriesSplit for temporal data',
            'Nested CV prevents hyperparameter tuning from inflating reported performance',
            'Always put preprocessing inside Pipeline when using GridSearchCV',
            'Report mean ± std across folds, not a single number'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why use StratifiedKFold instead of KFold for imbalanced classification?
Ans: StratifiedKFold preserves the class ratio in every fold, giving more reliable performance estimates.`,
            `Q2: What is the purpose of the outer loop in nested CV?
Ans: To provide an unbiased estimate of the tuned model's generalization performance.`,
            `Q3: Why is TimeSeriesSplit required for stock price prediction?
Ans: Random splits would leak future prices into training, producing unrealistically high scores.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Cross-Validation Strategies</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Cross-Validation Strategies")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'evaluation-metrics-overview': {
      title: 'Evaluation Metrics Overview',
      subtitle: 'Accuracy, precision, recall, F1, AUC-ROC, and log-loss with sklearn',
      sections: [
        {
          heading: 'What is Evaluation Metrics Overview?',
          text: 'Evaluation Metrics Overview is essential for machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Evaluation Metrics Overview provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use evaluation metrics overview when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Evaluation Metrics Overview

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Evaluation Metrics Overview sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Core classification metrics derived from the confusion matrix.',
          example: {
            title: 'Classification Metrics from Confusion Matrix',
            code: `Confusion Matrix:
              Pred 0    Pred 1
  Actual 0    TN        FP
  Actual 1    FN        TP

Accuracy  = (TP + TN) / (TP + TN + FP + FN)
Precision = TP / (TP + FP)        "of predicted positives, how many correct?"
Recall    = TP / (TP + FN)        "of actual positives, how many caught?"
F1        = 2 · (Precision · Recall) / (Precision + Recall)

Log-Loss (binary):
  -[y·log(p) + (1-y)·log(1-p)]    averaged over samples

AUC-ROC = P(score(positive) > score(negative))`,
            output: 'Precision and recall are in tension — improving one often reduces the other.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Evaluation Metrics Overview with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Evaluation Metrics Overview — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'Each metric answers a different question about model quality.',
          table: {
            headers: [
              'Metric',
              'Range',
              'Threshold-Free?',
              'Best When',
              'sklearn Function'
            ],
            rows: [
              [
                'Accuracy',
                '[0, 1]',
                'No (uses argmax)',
                'Balanced classes',
                'accuracy_score'
              ],
              [
                'Precision',
                '[0, 1]',
                'No',
                'False positives costly (spam filter)',
                'precision_score'
              ],
              [
                'Recall',
                '[0, 1]',
                'No',
                'False negatives costly (cancer screening)',
                'recall_score'
              ],
              [
                'F1',
                '[0, 1]',
                'No',
                'Balance precision & recall',
                'f1_score'
              ],
              [
                'AUC-ROC',
                '[0, 1]',
                'Yes',
                'Ranking quality, balanced-ish data',
                'roc_auc_score'
              ],
              [
                'Log-loss',
                '[0, ∞)',
                'Yes',
                'Calibrated probabilities matter',
                'log_loss'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Optimizing accuracy on 99:1 imbalanced data (fix: a dummy classifier scoring 99% looks great — use F1, AUC-PR, or recall)',
            'Mistake 2: Computing AUC on hard class predictions instead of probabilities (fix: pass predict_proba[:, 1] to roc_auc_score)',
            'Mistake 3: Using a single global threshold of 0.5 without business context (fix: tune threshold to maximize F1 or meet a recall constraint)',
            'Mistake 4: Reporting training metrics as generalization performance (fix: always evaluate on held-out or cross-validated data)'
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
            '<strong>Fraud detection:</strong> optimize precision at fixed recall ≥ 0.90 — false alarms erode customer trust',
            '<strong>Cancer screening:</strong> maximize recall (sensitivity) even at lower precision — missing a case is catastrophic',
            '<strong>Search ranking:</strong> AUC-ROC and NDCG evaluate ranking quality across the full score distribution',
            '<strong>Insurance pricing:</strong> log-loss ensures predicted probabilities are calibrated for premium calculation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Confusion matrix is the foundation — all threshold metrics derive from TP, FP, TN, FN',
            'Precision = quality of positive predictions; Recall = coverage of actual positives',
            'F1 balances precision and recall; AUC-ROC evaluates ranking across thresholds',
            'Log-loss penalizes overconfident wrong predictions — use when probabilities matter',
            'Align metric choice with business cost of false positives vs false negatives'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: A fraud model has 99% accuracy but catches only 10% of fraud. Which metric reveals the problem?
Ans: Recall — it measures what fraction of actual fraud cases the model detects.`,
            `Q2: When should you prefer log-loss over accuracy?
Ans: When calibrated probability estimates matter, such as risk scoring or expected value calculations.`,
            `Q3: What does AUC-ROC = 0.5 indicate?
Ans: The model performs no better than random ranking — it cannot discriminate between classes.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Evaluation Metrics Overview</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Evaluation Metrics Overview")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'imbalanced-data-handling': {
      title: 'Imbalanced Data Handling',
      subtitle: 'SMOTE, class weights, and threshold tuning for skewed class distributions',
      sections: [
        {
          heading: 'What is Imbalanced Data Handling?',
          text: 'Imbalanced Data Handling is essential for machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Imbalanced Data Handling provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use imbalanced data handling when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Imbalanced Data Handling

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Imbalanced Data Handling sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Class-weighted loss upweights minority class errors. SMOTE creates synthetic samples along line segments between minority neighbors.',
          example: {
            title: 'SMOTE and Weighted Loss',
            code: `Weighted loss (binary):
  L_w = -[w₁·y·log(p) + w₀·(1-y)·log(1-p)]

Common weight strategy:
  w_c = n_samples / (n_classes · n_samples_c)
  (sklearn class_weight="balanced")

SMOTE synthetic sample:
  x_new = x_i + λ · (x_neighbor - x_i),  λ ~ Uniform(0, 1)
  where x_i is a minority sample, x_neighbor is its k-NN`,
            output: 'Combine resampling and class weights carefully — double-correcting can over-compensate.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Imbalanced Data Handling with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Imbalanced Data Handling — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'Three primary strategies for handling imbalance — often combined in practice.',
          table: {
            headers: [
              'Strategy',
              'When Applied',
              'Mechanism',
              'Risk'
            ],
            rows: [
              [
                'SMOTE (oversampling)',
                'Before / inside training',
                'Synthetic minority examples',
                'Overfitting to synthetic noise if k too small'
              ],
              [
                'Random undersampling',
                'Before training',
                'Remove majority samples',
                'Loses information if too aggressive'
              ],
              [
                'Class weights',
                'During training',
                'Higher penalty for minority errors',
                'May need threshold tuning after'
              ],
              [
                'Threshold tuning',
                'After training',
                'Shift decision boundary',
                'Does not improve probability calibration'
              ],
              [
                'Ensemble (BalancedRF)',
                'During training',
                'Balanced bootstrap per tree',
                'More compute, often best out-of-box'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying SMOTE to the full dataset before train-test split (fix: SMOTE only inside the training fold — use imblearn Pipeline)',
            'Mistake 2: Using SMOTE and class_weight="balanced" together without checking for over-compensation (fix: try each strategy independently first)',
            'Mistake 3: Optimizing threshold on the test set (fix: tune threshold on a validation set; test set is for final reporting only)',
            'Mistake 4: Reporting accuracy on 99:1 data (fix: report minority-class recall, F1, and AUC-PR)'
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
            '<strong>Credit card fraud:</strong> SMOTE + RandomForest with recall-focused threshold; costs asymmetric (missing fraud >> false alarm)',
            '<strong>Medical diagnosis:</strong> class_weight="balanced" in logistic regression; threshold set to achieve ≥ 95% sensitivity',
            '<strong>Predictive maintenance:</strong> SMOTE for rare failure events; precision-recall curve for maintenance crew capacity planning',
            '<strong>Churn prediction:</strong> undersampling majority for training speed, then threshold tuning for campaign budget constraints'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Imbalanced data makes accuracy misleading — focus on recall, F1, and AUC-PR',
            'SMOTE generates synthetic minority samples; apply only to training data inside CV',
            'class_weight="balanced" penalizes minority misclassification during training',
            'Threshold tuning trades precision for recall after the model is trained',
            'Combine strategies thoughtfully — avoid double-correcting with SMOTE + balanced weights'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why must SMOTE be applied inside cross-validation folds, not before splitting?
Ans: Applying SMOTE before splitting leaks synthetic information from validation data into training, inflating performance estimates.`,
            `Q2: When is class_weight preferable to SMOTE?
Ans: When the minority class is extremely small (fewer than k+1 samples for SMOTE neighbors) or in high-dimensional sparse data where interpolation creates unrealistic samples.`,
            `Q3: How do you increase recall without retraining?
Ans: Lower the classification threshold — accept more positive predictions to catch more actual positives.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Imbalanced Data Handling</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Imbalanced Data Handling")
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
