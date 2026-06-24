// machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js mlalgo_module2.js

export const mlalgoModule2Structure = {
  module2: {
    title: 'Module 2: Supervised Learning — Classification',
    topics: [
      {
        id: 'logistic-regression',
        title: 'Logistic Regression'
      },
      {
        id: 'support-vector-machines',
        title: 'Support Vector Machines'
      },
      {
        id: 'k-nearest-neighbors',
        title: 'K-Nearest Neighbors'
      },
      {
        id: 'naive-bayes',
        title: 'Naive Bayes'
      },
      {
        id: 'decision-trees',
        title: 'Decision Trees'
      },
      {
        id: 'classification-metrics-deep-dive',
        title: 'Classification Metrics Deep Dive'
      },
      {
        id: 'churn-prediction-project',
        title: 'Customer Churn Prediction Project'
      }
    ]
  }
};

export const mlalgoModule2Content = {
  module2: {
    'logistic-regression': {
      title: 'Logistic Regression',
      subtitle: 'Probabilistic linear classifier with L1/L2 regularization paths',
      sections: [
        {
          heading: 'What is Logistic Regression?',
          text: '<strong>Logistic regression</strong> models class probability via the sigmoid of a linear score. It is the default tabular binary classifier in industry — fast, interpretable, and produces calibrated probabilities for ranking and threshold tuning.',
          list: [
            'Linear in features, non-linear in probability',
            'Multinomial logistic handles multi-class',
            'C parameter controls inverse regularization strength',
            'class_weight handles imbalance',
            'Coefficients are directly interpretable as log-odds'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Logistic regression</strong> models class probability via the sigmoid of a linear score. It is the default tabular binary classifier in industry — fast, interpretable, and produces calibrated probabilities for ranking and threshold tuning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Logistic regression</strong> models class probability via the sigmoid of a linear score. It is the default tabular binary classifier in industry — fast, interpretable, and produces calibrated probabilities for ranking and threshold tuning. Linear in features, non-linear in probability Multinomial logistic handles multi-class C parameter controls inverse regularization strength class_weight handles imbalance Coefficients are directly interpretable as log-odds</p>',
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
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Logistic Regression — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Not scaling features',
            'Using accuracy on imbalanced data',
            'Ignoring coefficient sign when features are correlated'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Credit risk:</strong> PD models',
            '<strong>Healthcare:</strong> readmission risk',
            '<strong>Marketing:</strong> propensity models'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Sigmoid maps linear score to probability',
            'C is inverse regularization',
            'Use Pipeline + StandardScaler'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does C control?
Ans: Inverse λ — smaller C means stronger penalty.`,
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
    'support-vector-machines': {
      title: 'Support Vector Machines',
      subtitle: 'Maximum-margin classifiers with the kernel trick',
      sections: [
        {
          heading: 'What are Support Vector Machines?',
          text: '<strong>SVMs</strong> find the hyperplane that maximizes the margin between classes. With kernels, they learn non-linear boundaries in implicit high-dimensional space without explicitly computing feature maps.',
          list: [
            'Linear SVM: max margin in original space',
            'Kernel trick: K(x,x′) replaces dot product',
            'Support vectors define the boundary',
            'C trades margin width vs misclassification',
            'gamma controls RBF kernel locality'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>SVMs</strong> find the hyperplane that maximizes the margin between classes. With kernels, they learn non-linear boundaries in implicit high-dimensional space without explicitly computing feature maps. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>SVMs</strong> find the hyperplane that maximizes the margin between classes. With kernels, they learn non-linear boundaries in implicit high-dimensional space without explicitly computing feature maps. Linear SVM: max margin in original space Kernel trick: K(x,x′) replaces dot product Support vectors define the boundary C trades margin width vs misclassification gamma controls RBF kernel locality</p>',
            '<p>You use support vector machines when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Support Vector Machines

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Support Vector Machines sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Support Vector Machines with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Support Vector Machines — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Not scaling before SVC',
            'Grid search without stratified CV',
            'Using default probability=False for calibration needs'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Bioinformatics:</strong> protein classification',
            '<strong>Text:</strong> linear SVM on TF-IDF',
            '<strong>Vision:</strong> HOG + SVM'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Maximize margin; kernel enables non-linearity',
            'Tune C and gamma jointly',
            'Always scale features'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the kernel trick?
Ans: Compute inner products in high-D space via K(x,x′) without explicit Φ.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Support Vector Machines</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Support Vector Machines")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'k-nearest-neighbors': {
      title: 'K-Nearest Neighbors',
      subtitle: 'Instance-based classification and the curse of dimensionality',
      sections: [
        {
          heading: 'What is K-Nearest Neighbors?',
          text: '<strong>k-NN</strong> classifies a point by majority vote of its k nearest training neighbors. It is non-parametric — no explicit training phase beyond storing data — and captures complex boundaries when k is small.',
          list: [
            'Lazy learner: fit stores data; predict searches',
            'k controls bias-variance: small k = high variance',
            'Distance metric matters (Euclidean, Manhattan)',
            'Curse of dimensionality degrades neighbors in high p',
            'sklearn uses efficient ball_tree / kd_tree'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>k-NN</strong> classifies a point by majority vote of its k nearest training neighbors. It is non-parametric — no explicit training phase beyond storing data — and captures complex boundaries when k is small. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>k-NN</strong> classifies a point by majority vote of its k nearest training neighbors. It is non-parametric — no explicit training phase beyond storing data — and captures complex boundaries when k is small. Lazy learner: fit stores data; predict searches k controls bias-variance: small k = high variance Distance metric matters (Euclidean, Manhattan) Curse of dimensionality degrades neighbors in high p sklearn uses efficient ball_tree / kd_tree</p>',
            '<p>You use k-nearest neighbors when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — K-Nearest Neighbors

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: K-Nearest Neighbors sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'K-Nearest Neighbors with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("K-Nearest Neighbors — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'k=1 on noisy data',
            'Skipping StandardScaler',
            'Using k-NN in 500+ raw features'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Recommendation:</strong> user-user CF',
            '<strong>Anomaly:</strong> distance to k-th neighbor',
            '<strong>Medical:</strong> case-based diagnosis'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Majority vote of k neighbors',
            'Curse of dimensionality hurts high p',
            'Tune k via cross-validation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why scale features?
Ans: Euclidean distance is dominated by large-scale features otherwise.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>K-Nearest Neighbors</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — K-Nearest Neighbors")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'naive-bayes': {
      title: 'Naive Bayes',
      subtitle: 'Probabilistic text classification with conditional independence',
      sections: [
        {
          heading: 'What is Naive Bayes?',
          text: '<strong>Naive Bayes</strong> applies Bayes theorem with a simplifying assumption: features are conditionally independent given the class. Despite being "naive," it is remarkably effective for high-dimensional sparse text data and serves as a strong baseline in NLP pipelines.',
          list: [
            'MultinomialNB for word counts / TF-IDF',
            'GaussianNB for continuous features',
            'BernoulliNB for binary features',
            'Fast training and prediction',
            'Works well with many features (p >> n)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Naive Bayes</strong> applies Bayes theorem with a simplifying assumption: features are conditionally independent given the class. Despite being "naive," it is remarkably effective for high-dimensional sparse text data and serves as a strong baseline in NLP pipelines. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Naive Bayes</strong> applies Bayes theorem with a simplifying assumption: features are conditionally independent given the class. Despite being "naive," it is remarkably effective for high-dimensional sparse text data and serves as a strong baseline in NLP pipelines. MultinomialNB for word counts / TF-IDF GaussianNB for continuous features BernoulliNB for binary features Fast training and prediction Works well with many features (p >> n)</p>',
            '<p>You use naive bayes when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Naive Bayes

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Naive Bayes sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Naive Bayes with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Naive Bayes — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Using raw counts without stop words on tiny data',
            'GaussianNB on sparse text',
            'alpha=0 causing zero probabilities'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Spam filtering:</strong> classic MultinomialNB',
            '<strong>Intent detection:</strong> chatbot routing',
            '<strong>Social listening:</strong> topic tagging'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Conditional independence assumption',
            'MultinomialNB for text counts',
            'alpha smooths zero counts'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is NB popular for text?
Ans: High-dimensional sparse bag-of-words; independence is wrong but works.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Naive Bayes</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Naive Bayes")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'decision-trees': {
      title: 'Decision Trees',
      subtitle: 'Entropy, Gini impurity, pruning, and interpretable rules',
      sections: [
        {
          heading: 'What are Decision Trees?',
          text: '<strong>Decision trees</strong> recursively partition feature space with axis-aligned splits. They are fully interpretable, handle mixed feature types, and require no scaling — but single trees overfit without depth limits or pruning.',
          list: [
            'Splits maximize information gain (entropy) or Gini reduction',
            'criterion="gini" (default) or "entropy"',
            'max_depth, min_samples_leaf control complexity',
            'Pruning via ccp_alpha (cost-complexity)',
            'Basis for Random Forest and Gradient Boosting'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Decision trees</strong> recursively partition feature space with axis-aligned splits. They are fully interpretable, handle mixed feature types, and require no scaling — but single trees overfit without depth limits or pruning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Decision trees</strong> recursively partition feature space with axis-aligned splits. They are fully interpretable, handle mixed feature types, and require no scaling — but single trees overfit without depth limits or pruning. Splits maximize information gain (entropy) or Gini reduction criterion="gini" (default) or "entropy" max_depth, min_samples_leaf control complexity Pruning via ccp_alpha (cost-complexity) Basis for Random Forest and Gradient Boosting</p>',
            '<p>You use decision trees when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Decision Trees

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Decision Trees sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Decision Trees with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Decision Trees — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Unlimited depth on small data',
            'Not using ccp_alpha path',
            'Treating single tree as production-final'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Credit rules:</strong> explainable declines',
            '<strong>Healthcare:</strong> clinical pathways',
            '<strong>Churn:</strong> interpretable segments'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Gini/entropy guide splits',
            'Prune via depth or ccp_alpha',
            'Ensembles fix variance'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does train=1.0 with depth=None?
Ans: Tree grows until leaves pure — memorizes training noise.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Decision Trees</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Decision Trees")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'classification-metrics-deep-dive': {
      title: 'Classification Metrics Deep Dive',
      subtitle: 'Confusion matrix, precision, recall, F1, AUC-ROC, and log-loss',
      sections: [
        {
          heading: 'What is Classification Metrics Deep Dive?',
          text: 'Classification Metrics Deep Dive is essential for machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Classification Metrics Deep Dive provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use classification metrics deep dive when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Classification Metrics Deep Dive

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Classification Metrics Deep Dive sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Classification Metrics Deep Dive with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Classification Metrics Deep Dive — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Reporting accuracy on 99% negative class',
            'Single threshold for all business cases',
            'Ignoring calibration for risk pricing'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Fraud:</strong> precision at fixed recall',
            '<strong>Search:</strong> NDCG / ranking',
            '<strong>Medical:</strong> sensitivity at 95% specificity'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Match metric to error cost',
            'ROC for ranking; PR for imbalance',
            'Log-loss for probabilities'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: High accuracy but low F1 — why?
Ans: Class imbalance; model predicts majority class.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Classification Metrics Deep Dive</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Classification Metrics Deep Dive")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'churn-prediction-project': {
      title: 'Customer Churn Prediction Project',
      subtitle: 'End-to-end classification: EDA → five algorithms → comparison → deployment',
      sections: [
        {
          heading: 'What is Customer Churn Prediction Project?',
          text: 'Customer Churn Prediction Project is essential for machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Customer Churn Prediction Project provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use customer churn prediction project when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Customer Churn Prediction Project

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Customer Churn Prediction Project sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Customer Churn Prediction Project with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Customer Churn Prediction Project — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
            'Training without stratified split on 25% churn',
            'Comparing models on different test sets',
            'Deploying without monitoring'
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
          text: 'Production deployments across industries.',
          list: [
            '<strong>Telecom:</strong> contract renewal',
            '<strong>SaaS:</strong> subscription churn',
            '<strong>Banking:</strong> account closure'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Same test set for fair comparison',
            'LogisticRegression often wins on tabular churn',
            'Match metric to retention campaign cost'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why compare on identical test data?
Ans: Fair comparison — only algorithm differs.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Customer Churn Prediction Project</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Customer Churn Prediction Project")
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
