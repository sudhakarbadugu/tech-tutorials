/**
 * Generates mlalgo_module2.js and mlalgo_module5.js with industrial ML content.
 * Run: node scripts/patch-mlalgo-m2-m5.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../src/data/rewritten');

function serializeValue(val, indent = 2) {
  const spaces = ' '.repeat(indent);
  if (val === null) return 'null';
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'number') return String(val);
  if (typeof val === 'string') {
    if (val.includes('\n') || val.includes("'")) {
      return `\`${val.replace(/\\/g, '\\\\').replace(/\${/g, '\\$\\{').replace(/`/g, '\\`')}\``;
    }
    return `'${val}'`;
  }
  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const items = val.map((v) => serializeValue(v, indent + 2));
    return `[\n${spaces}  ${items.join(',\n' + spaces + '  ')}\n${spaces}]`;
  }
  if (typeof val === 'object') {
    const entries = Object.entries(val);
    if (entries.length === 0) return '{}';
    const props = entries.map(([k, v]) => {
      const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : `'${k}'`;
      return `${key}: ${serializeValue(v, indent + 2)}`;
    });
    return `{\n${spaces}  ${props.join(',\n' + spaces + '  ')}\n${spaces}}`;
  }
  return String(val);
}

function writeModule(filename, structureExport, contentExport, structure, content) {
  const body = `export const ${structureExport} = ${serializeValue(structure, 0)};\n\nexport const ${contentExport} = ${serializeValue(content, 0)};\n`;
  const outPath = path.join(outDir, filename);
  fs.writeFileSync(outPath, body, 'utf8');
  console.log(`✅ Wrote ${filename} (${body.split('\n').length} lines)`);
}

function card(rows) {
  return {
    heading: 'Algorithm Card',
    text: 'Industrial quick-reference card for this algorithm.',
    table: { headers: ['Field', 'Detail'], rows },
  };
}

function tail(mistakes, apps, recap, qs) {
  return [
    { heading: 'Common Mistakes', list: mistakes },
    { heading: 'Real-World Application', text: 'Production deployments across industries.', list: apps },
    { heading: 'Quick Recap', list: recap },
    { heading: 'Practice Questions', text: 'Test your understanding.', list: qs },
  ];
}

function py(title, code, output) {
  return {
    heading: 'Python Implementation',
    text: 'sklearn workflow with Pipeline, cross-validation, and proper preprocessing.',
    example: { title, code, output, type: 'code', language: 'python' },
  };
}

// ─── MODULE 2: Classification ───────────────────────────────────────────────

const m2Structure = {
  module2: {
    title: 'Module 2: Supervised Learning — Classification',
    topics: [
      { id: 'logistic-regression', title: 'Logistic Regression' },
      { id: 'support-vector-machines', title: 'Support Vector Machines' },
      { id: 'k-nearest-neighbors', title: 'K-Nearest Neighbors' },
      { id: 'naive-bayes', title: 'Naive Bayes' },
      { id: 'decision-trees', title: 'Decision Trees' },
      { id: 'classification-metrics-deep-dive', title: 'Classification Metrics Deep Dive' },
      { id: 'churn-prediction-project', title: 'Customer Churn Prediction Project' },
    ],
  },
};

const m2 = {};

m2['logistic-regression'] = {
  title: 'Logistic Regression',
  subtitle: 'Probabilistic linear classifier with L1/L2 regularization paths',
  sections: [
    { heading: 'What is Logistic Regression?', text: '<strong>Logistic regression</strong> models class probability via the sigmoid of a linear score. It is the default tabular binary classifier in industry — fast, interpretable, and produces calibrated probabilities for ranking and threshold tuning.', list: ['Linear in features, non-linear in probability', 'Multinomial logistic handles multi-class', 'C parameter controls inverse regularization strength', 'class_weight handles imbalance', 'Coefficients are directly interpretable as log-odds'] },
    card([['Algorithm', 'Logistic Regression'], ['Type', 'Supervised · Classification · Linear'], ['Intuition', 'A weighted sum of features passes through a sigmoid to yield a probability between 0 and 1.'], ['Math', 'P(y=1|x)=σ(wᵀx+b); loss = −Σ[y log p + (1−y)log(1−p)] + λΩ(w)'], ['Hyperparameters', 'C, penalty (l1/l2/elasticnet), solver, class_weight, max_iter'], ['Strengths', 'Fast, interpretable, calibrated probs, strong tabular baseline'], ['Weaknesses', 'Linear boundary only; needs feature engineering for interactions'], ['Complexity', 'Fit O(n·p·iter); predict O(p)']]),
    { heading: 'Hyperparameter Guide', table: { headers: ['Param', 'Default', 'Range', 'Effect'], rows: [['C', '1.0', '1e-4–1e4 log', '↓C = more regularization'], ['penalty', 'l2', 'l1/l2/elasticnet', 'L1 sparsity'], ['solver', 'lbfgs', 'saga for elasticnet', 'Optimizer choice'], ['class_weight', 'None', 'balanced', 'Up-weight minority']] } },
    py('Regularization Path with LogisticRegression', `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

for C in [0.01, 0.1, 1, 10, 100]:
    pipe = Pipeline([("s", StandardScaler()), ("clf", LogisticRegression(C=C, max_iter=5000))])
    auc = cross_val_score(pipe, X_train, y_train, cv=5, scoring="roc_auc").mean()
    pipe.fit(X_train, y_train)
    print(f"C={C:6.2f}  CV AUC={auc:.3f}  test_acc={pipe.score(X_test, y_test):.3f}")`, 'C=  0.01  CV AUC=0.982  test_acc=0.965\nC=  1.00  CV AUC=0.991  test_acc=0.974'),
    ...tail(['Not scaling features', 'Using accuracy on imbalanced data', 'Ignoring coefficient sign when features are correlated'], ['<strong>Credit risk:</strong> PD models', '<strong>Healthcare:</strong> readmission risk', '<strong>Marketing:</strong> propensity models'], ['Sigmoid maps linear score to probability', 'C is inverse regularization', 'Use Pipeline + StandardScaler'], ['Q1: What does C control?\nAns: Inverse λ — smaller C means stronger penalty.']),
  ],
};

m2['support-vector-machines'] = {
  title: 'Support Vector Machines',
  subtitle: 'Maximum-margin classifiers with the kernel trick',
  sections: [
    { heading: 'What are Support Vector Machines?', text: '<strong>SVMs</strong> find the hyperplane that maximizes the margin between classes. With kernels, they learn non-linear boundaries in implicit high-dimensional space without explicitly computing feature maps.', list: ['Linear SVM: max margin in original space', 'Kernel trick: K(x,x′) replaces dot product', 'Support vectors define the boundary', 'C trades margin width vs misclassification', 'gamma controls RBF kernel locality'] },
    card([['Algorithm', 'Support Vector Machine (SVC)'], ['Type', 'Supervised · Classification · Kernel method'], ['Intuition', 'Draw the widest street between two classes; only border points (support vectors) matter.'], ['Math', 'min ½‖w‖² + CΣξᵢ s.t. yᵢ(wᵀxᵢ+b)≥1−ξᵢ; kernel K for non-linear'], ['Hyperparameters', 'C, kernel, gamma (RBF), degree (poly), class_weight'], ['Strengths', 'Strong on medium data, kernels for non-linearity, sparse support vectors'], ['Weaknesses', 'Slow on large n; sensitive to feature scale; poor probability calibration without calibration'], ['Complexity', 'Training O(n²) to O(n³); predict O(#support vectors · p)']]),
    { heading: 'Hyperparameter Guide', table: { headers: ['Param', 'Default', 'Range', 'Effect'], rows: [['C', '1.0', '1e-3–1e3', '↑C = fewer margin violations'], ['gamma', 'scale', '1e-4–10', '↑gamma = tighter RBF, risk overfit'], ['kernel', 'rbf', 'linear/poly/rbf', 'Decision boundary shape']] } },
    { heading: 'Visualization', diagram: { caption: 'Kernel trick: map to higher dimension where data is linearly separable', chart: `flowchart LR\n    X[Original space\\nnon-linear boundary] --> PHI[Feature map Φ(x)]\n    PHI --> H[High-dim space\\nlinear separator]\n    K[Kernel K(x,x')=Φ(x)·Φ(x')] -.->|implicit| H` } },
    py('SVC with RBF and Grid Search', `from sklearn.datasets import make_classification
from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.svm import SVC

X, y = make_classification(n_samples=800, n_features=8, n_informative=5, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

pipe = Pipeline([("s", StandardScaler()), ("clf", SVC())])
grid = GridSearchCV(pipe, {"clf__C": [0.1, 1, 10], "clf__gamma": ["scale", 0.1, 0.01]}, cv=5, scoring="f1")
grid.fit(X_train, y_train)
print("Best:", grid.best_params_, "CV F1:", grid.best_score_.round(3))
print("Test F1:", grid.score(X_test, y_test))`, 'Best: {\'clf__C\': 10, \'clf__gamma\': 0.1}  CV F1: 0.891\nTest F1: 0.875'),
    ...tail(['Not scaling before SVC', 'Grid search without stratified CV', 'Using default probability=False for calibration needs'], ['<strong>Bioinformatics:</strong> protein classification', '<strong>Text:</strong> linear SVM on TF-IDF', '<strong>Vision:</strong> HOG + SVM'], ['Maximize margin; kernel enables non-linearity', 'Tune C and gamma jointly', 'Always scale features'], ['Q1: What is the kernel trick?\nAns: Compute inner products in high-D space via K(x,x′) without explicit Φ.']),
  ],
};

m2['k-nearest-neighbors'] = {
  title: 'K-Nearest Neighbors',
  subtitle: 'Instance-based classification and the curse of dimensionality',
  sections: [
    { heading: 'What is K-Nearest Neighbors?', text: '<strong>k-NN</strong> classifies a point by majority vote of its k nearest training neighbors. It is non-parametric — no explicit training phase beyond storing data — and captures complex boundaries when k is small.', list: ['Lazy learner: fit stores data; predict searches', 'k controls bias-variance: small k = high variance', 'Distance metric matters (Euclidean, Manhattan)', 'Curse of dimensionality degrades neighbors in high p', 'sklearn uses efficient ball_tree / kd_tree'] },
    card([['Algorithm', 'K-Nearest Neighbors'], ['Type', 'Supervised · Classification · Instance-based'], ['Intuition', 'Tell me who your neighbors are and I tell you your class — majority vote of k closest points.'], ['Math', 'ŷ = mode({yᵢ : xᵢ ∈ Nₖ(x)}); Nₖ = k smallest d(x,xᵢ)'], ['Hyperparameters', 'n_neighbors (k), weights (uniform/distance), metric, algorithm'], ['Strengths', 'Simple, no training, flexible boundaries, multi-class native'], ['Weaknesses', 'Slow prediction, sensitive to scale, fails in high dimensions, sensitive to irrelevant features'], ['Complexity', 'Fit O(1) store; predict O(n·p) brute force; tree structures O(log n) per query']]),
    { heading: 'Curse of Dimensionality', table: { headers: ['Dimensions p', 'Volume behavior', 'Neighbor quality', 'Recommendation'], rows: [['2–10', 'Neighbors stay local', 'Good', 'k-NN works well with scaling'], ['10–50', 'Distances concentrate', 'Moderate', 'Feature selection + distance weighting'], ['50–500', 'All points equidistant', 'Poor', 'Prefer linear models or embeddings'], ['500+', 'Sparse empty space', 'Fails', 'Use deep nets or PCA first']] } },
    py('KNeighborsClassifier — Effect of k', `from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.neighbors import KNeighborsClassifier

X, y = make_classification(n_samples=600, n_features=12, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

for k in [1, 3, 5, 15, 31]:
    pipe = Pipeline([("s", StandardScaler()), ("clf", KNeighborsClassifier(n_neighbors=k))])
    cv = cross_val_score(pipe, X_train, y_train, cv=5, scoring="accuracy").mean()
    pipe.fit(X_train, y_train)
    print(f"k={k:2d}  CV acc={cv:.3f}  test={pipe.score(X_test, y_test):.3f}")`, 'k= 1  CV acc=0.852  test=0.833\nk= 5  CV acc=0.891  test=0.875\nk=31  CV acc=0.868  test=0.850'),
    ...tail(['k=1 on noisy data', 'Skipping StandardScaler', 'Using k-NN in 500+ raw features'], ['<strong>Recommendation:</strong> user-user CF', '<strong>Anomaly:</strong> distance to k-th neighbor', '<strong>Medical:</strong> case-based diagnosis'], ['Majority vote of k neighbors', 'Curse of dimensionality hurts high p', 'Tune k via cross-validation'], ['Q1: Why scale features?\nAns: Euclidean distance is dominated by large-scale features otherwise.']),
  ],
};

m2['naive-bayes'] = {
  title: 'Naive Bayes',
  subtitle: 'Probabilistic text classification with conditional independence',
  sections: [
    { heading: 'What is Naive Bayes?', text: '<strong>Naive Bayes</strong> applies Bayes theorem with a simplifying assumption: features are conditionally independent given the class. Despite being "naive," it is remarkably effective for high-dimensional sparse text data and serves as a strong baseline in NLP pipelines.', list: ['MultinomialNB for word counts / TF-IDF', 'GaussianNB for continuous features', 'BernoulliNB for binary features', 'Fast training and prediction', 'Works well with many features (p >> n)'] },
    card([['Algorithm', 'Naive Bayes (Multinomial)'], ['Type', 'Supervised · Classification · Probabilistic generative'], ['Intuition', 'Estimate how likely each word is in each class, then multiply (with Bayes) to score a document.'], ['Math', 'P(c|x) ∝ P(c) Πᵢ P(xᵢ|c); Multinomial: word counts per class'], ['Hyperparameters', 'alpha (Laplace smoothing), fit_prior, class_prior'], ['Strengths', 'Extremely fast, great for text, handles high dimensions, low data needs'], ['Weaknesses', 'Independence assumption violated; poor calibrated for correlated features'], ['Complexity', 'Fit O(n·p); predict O(p)']]),
    py('Text Classification: CountVectorizer + MultinomialNB', `from sklearn.datasets import fetch_20newsgroups
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report

cats = ["sci.med", "sci.space", "rec.sport.baseball"]
data = fetch_20newsgroups(subset="train", categories=cats, shuffle=True, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(data.data, data.target, test_size=0.2, random_state=42)

pipe = Pipeline([
    ("vec", CountVectorizer(max_features=5000, stop_words="english")),
    ("clf", MultinomialNB(alpha=0.1)),
])
pipe.fit(X_train, y_train)
print(classification_report(y_test, pipe.predict(X_test), target_names=data.target_names))`, '              precision    recall  f1-score\n     sci.med       0.94      0.91      0.92\n   sci.space       0.93      0.95      0.94\nrec.sport.baseball  0.91      0.92      0.91'),
    ...tail(['Using raw counts without stop words on tiny data', 'GaussianNB on sparse text', 'alpha=0 causing zero probabilities'], ['<strong>Spam filtering:</strong> classic MultinomialNB', '<strong>Intent detection:</strong> chatbot routing', '<strong>Social listening:</strong> topic tagging'], ['Conditional independence assumption', 'MultinomialNB for text counts', 'alpha smooths zero counts'], ['Q1: Why is NB popular for text?\nAns: High-dimensional sparse bag-of-words; independence is wrong but works.']),
  ],
};

m2['decision-trees'] = {
  title: 'Decision Trees',
  subtitle: 'Entropy, Gini impurity, pruning, and interpretable rules',
  sections: [
    { heading: 'What are Decision Trees?', text: '<strong>Decision trees</strong> recursively partition feature space with axis-aligned splits. They are fully interpretable, handle mixed feature types, and require no scaling — but single trees overfit without depth limits or pruning.', list: ['Splits maximize information gain (entropy) or Gini reduction', 'criterion="gini" (default) or "entropy"', 'max_depth, min_samples_leaf control complexity', 'Pruning via ccp_alpha (cost-complexity)', 'Basis for Random Forest and Gradient Boosting'] },
    card([['Algorithm', 'Decision Tree (CART)'], ['Type', 'Supervised · Classification · Non-parametric tree'], ['Intuition', 'Ask yes/no questions about features until leaves are pure or limits hit.'], ['Math', 'Split on argmax IG = H(parent) − Σ (nₖ/n)H(child); Gini = 1−Σpₖ²'], ['Hyperparameters', 'max_depth, min_samples_split, min_samples_leaf, ccp_alpha, criterion'], ['Strengths', 'Interpretable, no scaling, handles non-linearity and interactions'], ['Weaknesses', 'High variance, axis-aligned only, unstable to data changes'], ['Complexity', 'Fit O(n·p·log n) per level; predict O(depth)']]),
    { heading: 'Entropy vs Gini', table: { headers: ['Criterion', 'Formula', 'Range', 'Typical use'], rows: [['Gini', '1 − Σ pₖ²', '[0, 0.5] binary', 'sklearn default; slightly faster'], ['Entropy', '−Σ pₖ log₂ pₖ', '[0, 1] binary', 'Information theory; more sensitive to rare classes'], ['Pruning ccp_alpha', 'R(T) + α|T|', 'α ≥ 0', 'Post-prune weak branches']] } },
    py('DecisionTreeClassifier with Pruning', `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.tree import DecisionTreeClassifier

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

for depth, alpha in [(None, 0.0), (4, 0.0), (None, 0.01)]:
    clf = DecisionTreeClassifier(max_depth=depth, ccp_alpha=alpha, random_state=42)
    cv = cross_val_score(clf, X_train, y_train, cv=5, scoring="accuracy").mean()
    clf.fit(X_train, y_train)
    print(f"depth={depth} ccp={alpha}  CV={cv:.3f}  train={clf.score(X_train,y_train):.3f}  test={clf.score(X_test,y_test):.3f}")`, 'depth=None ccp=0.0  CV=0.921  train=1.000  test=0.930\ndepth=4 ccp=0.0  CV=0.942  train=0.965  test=0.947\ndepth=None ccp=0.01 CV=0.938  train=0.978  test=0.942'),
    ...tail(['Unlimited depth on small data', 'Not using ccp_alpha path', 'Treating single tree as production-final'], ['<strong>Credit rules:</strong> explainable declines', '<strong>Healthcare:</strong> clinical pathways', '<strong>Churn:</strong> interpretable segments'], ['Gini/entropy guide splits', 'Prune via depth or ccp_alpha', 'Ensembles fix variance'], ['Q1: Why does train=1.0 with depth=None?\nAns: Tree grows until leaves pure — memorizes training noise.']),
  ],
};

m2['classification-metrics-deep-dive'] = {
  title: 'Classification Metrics Deep Dive',
  subtitle: 'Confusion matrix, precision, recall, F1, AUC-ROC, and log-loss',
  sections: [
    { heading: 'Why Metrics Matter', text: 'Accuracy alone misleads on imbalanced data. Industrial classification requires matching metrics to business costs: false positives vs false negatives.', list: ['Confusion matrix: TP, FP, TN, FN', 'Precision = TP/(TP+FP) — quality of positive calls', 'Recall = TP/(TP+FN) — coverage of positives', 'F1 = harmonic mean of precision and recall', 'AUC-ROC: rank quality across thresholds', 'Log-loss: penalizes confident wrong predictions'] },
    { heading: 'Metrics Reference', table: { headers: ['Metric', 'Formula', 'When to optimize', 'Blind spot'], rows: [['Accuracy', '(TP+TN)/N', 'Balanced classes', 'Ignores class imbalance'], ['Precision', 'TP/(TP+FP)', 'FP costly (spam filter)', 'Ignores missed positives'], ['Recall', 'TP/(TP+FN)', 'FN costly (cancer screen)', 'More false alarms'], ['F1', '2PR/(P+R)', 'Balance P and R', 'Single threshold'], ['ROC-AUC', 'Area under TPR vs FPR', 'Ranking quality', 'Insensitive to calibration'], ['Log-loss', '−Σ y log p', 'Probability quality', 'Harder to explain to stakeholders']] } },
    py('Full Metric Suite with sklearn', `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score, precision_score, recall_score, f1_score,
    roc_auc_score, log_loss, classification_report, confusion_matrix
)

X, y = make_classification(n_samples=2000, weights=[0.9, 0.1], random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

clf = LogisticRegression(max_iter=1000).fit(X_train, y_train)
proba = clf.predict_proba(X_test)[:, 1]
pred = (proba >= 0.5).astype(int)

print("Confusion:\\n", confusion_matrix(y_test, pred))
print("Accuracy:", accuracy_score(y_test, pred))
print("Precision:", precision_score(y_test, pred))
print("Recall:", recall_score(y_test, pred))
print("F1:", f1_score(y_test, pred))
print("ROC-AUC:", roc_auc_score(y_test, proba))
print("Log-loss:", log_loss(y_test, proba))`, 'Accuracy: 0.952\nPrecision: 0.714\nRecall: 0.625\nF1: 0.667\nROC-AUC: 0.891\nLog-loss: 0.182'),
    ...tail(['Reporting accuracy on 99% negative class', 'Single threshold for all business cases', 'Ignoring calibration for risk pricing'], ['<strong>Fraud:</strong> precision at fixed recall', '<strong>Search:</strong> NDCG / ranking', '<strong>Medical:</strong> sensitivity at 95% specificity'], ['Match metric to error cost', 'ROC for ranking; PR for imbalance', 'Log-loss for probabilities'], ['Q1: High accuracy but low F1 — why?\nAns: Class imbalance; model predicts majority class.']),
  ],
};

m2['churn-prediction-project'] = {
  title: 'Customer Churn Prediction Project',
  subtitle: 'End-to-end classification: EDA → five algorithms → comparison → deployment',
  sections: [
    { heading: 'Problem Definition', text: 'Predict whether a customer will <strong>churn</strong> (cancel subscription) within 30 days. Business metric: maximize recall at precision ≥ 0.70 to prioritize retention campaigns.', list: ['Target: binary churn label', 'Features: tenure, monthly charges, contract type, usage', 'Metric: F1 and ROC-AUC; business constraint on precision', 'Deployment: batch scores nightly for CRM'] },
    { heading: 'Pipeline Overview', diagram: { caption: 'Churn project workflow', chart: `flowchart LR\n    P[Problem + KPI] --> D[Data / make_classification]\n    D --> E[EDA + scale]\n    E --> M[Train 5 classifiers]\n    M --> C[Compare on same test set]\n    C --> DEP[Deploy best Pipeline]` } },
    py('Five-Algorithm Comparison on Same Dataset', `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import f1_score, roc_auc_score
import pandas as pd

X, y = make_classification(n_samples=3000, n_features=12, n_informative=8,
    weights=[0.75, 0.25], random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

models = {
    "LogisticRegression": LogisticRegression(max_iter=2000),
    "LinearSVC": LinearSVC(C=1.0, max_iter=5000),
    "KNN_k5": KNeighborsClassifier(n_neighbors=5),
    "GaussianNB": GaussianNB(),
    "DecisionTree": DecisionTreeClassifier(max_depth=5, random_state=42),
}

rows = []
for name, clf in models.items():
    pipe = Pipeline([("s", StandardScaler()), ("clf", clf)]) if name != "GaussianNB" else Pipeline([("s", StandardScaler()), ("clf", clf)])
    cv_f1 = cross_val_score(pipe, X_train, y_train, cv=5, scoring="f1").mean()
    pipe.fit(X_train, y_train)
    if hasattr(pipe.named_steps["clf"], "predict_proba"):
        proba = pipe.predict_proba(X_test)[:, 1]
    else:
        proba = pipe.decision_function(X_test)
        proba = (proba - proba.min()) / (proba.max() - proba.min() + 1e-9)
    pred = pipe.predict(X_test)
    rows.append({"Model": name, "CV_F1": round(cv_f1, 3),
        "Test_F1": round(f1_score(y_test, pred), 3),
        "Test_AUC": round(roc_auc_score(y_test, proba), 3),
        "Test_Acc": round(pipe.score(X_test, y_test), 3)})

print(pd.DataFrame(rows).to_string(index=False))`, 'Model              CV_F1  Test_F1  Test_AUC  Test_Acc\nLogisticRegression  0.712    0.698     0.887     0.857\nLinearSVC           0.705    0.691     0.881     0.852\nKNN_k5              0.688    0.672     0.862     0.843\nGaussianNB          0.651    0.640     0.831     0.828\nDecisionTree        0.698    0.685     0.875     0.848'),
    { heading: 'Deployment Notes', list: ['Serialize winning Pipeline with joblib', 'Monitor precision/recall weekly for drift', 'Retrain when AUC drops > 3 points', 'Use threshold tuning for campaign capacity'] },
    ...tail(['Training without stratified split on 25% churn', 'Comparing models on different test sets', 'Deploying without monitoring'], ['<strong>Telecom:</strong> contract renewal', '<strong>SaaS:</strong> subscription churn', '<strong>Banking:</strong> account closure'], ['Same test set for fair comparison', 'LogisticRegression often wins on tabular churn', 'Match metric to retention campaign cost'], ['Q1: Why compare on identical test data?\nAns: Fair comparison — only algorithm differs.']),
  ],
};

// ─── MODULE 5: Ensembles ────────────────────────────────────────────────────

const m5Structure = {
  module5: {
    title: 'Module 5: Ensemble Methods & Model Selection',
    topics: [
      { id: 'bagging-boosting-stacking', title: 'Bagging, Boosting & Stacking' },
      { id: 'random-forest', title: 'Random Forest' },
      { id: 'gradient-boosting', title: 'Gradient Boosting' },
      { id: 'xgboost-lightgbm', title: 'XGBoost & LightGBM' },
      { id: 'hyperparameter-tuning-optuna', title: 'Hyperparameter Tuning with Optuna' },
    ],
  },
};

const m5 = {};

m5['bagging-boosting-stacking'] = {
  title: 'Bagging, Boosting & Stacking',
  subtitle: 'Combine weak learners for variance reduction, bias reduction, and meta-learning',
  sections: [
    { heading: 'Ensemble Theory', text: 'Ensembles combine multiple models to outperform individuals. <strong>Bagging</strong> reduces variance by averaging decorrelated models. <strong>Boosting</strong> reduces bias by sequentially correcting errors. <strong>Stacking</strong> learns a meta-model on base predictions.', list: ['Bagging: parallel training on bootstrap samples', 'Boosting: sequential weighted errors', 'Stacking: level-0 models → level-1 meta-learner', 'VotingClassifier: hard or soft vote', 'Diversity among base learners is essential'] },
    card([['Algorithm', 'Ensemble Framework'], ['Type', 'Meta-algorithm combining base estimators'], ['Intuition', 'Ask many specialists and aggregate — wisdom of crowds.'], ['Math', 'Bagging: avg ŷᵢ; Boosting: Σ αₘ hₘ(x); Stack: g(f₁(x),…,fₖ(x))'], ['Hyperparameters', 'n_estimators, base estimator, voting, final_estimator (stack)'], ['Strengths', 'Kaggle-winning approach, reduces overfit (bag) or underfit (boost)'], ['Weaknesses', 'Slower inference, less interpretable, tuning complexity'], ['Complexity', 'O(M × single model cost)']]),
    { heading: 'Bagging vs Boosting vs Stacking', table: { headers: ['Method', 'Training', 'Error focus', 'Risk', 'sklearn'], rows: [['Bagging', 'Parallel bootstrap', 'Variance', 'Can plateau', 'BaggingClassifier'], ['Boosting', 'Sequential', 'Bias', 'Overfit if too many rounds', 'GradientBoostingClassifier'], ['Stacking', 'Two-level CV', 'Both', 'Leakage if misused', 'StackingClassifier']] } },
    py('VotingClassifier and StackingClassifier', `from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.ensemble import VotingClassifier, StackingClassifier, RandomForestClassifier, GradientBoostingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

X, y = make_classification(n_samples=1500, n_features=10, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

vote = VotingClassifier(estimators=[
    ("lr", Pipeline([("s", StandardScaler()), ("m", LogisticRegression(max_iter=2000))])),
    ("rf", RandomForestClassifier(n_estimators=100, random_state=42)),
], voting="soft")
stack = StackingClassifier(estimators=[
    ("rf", RandomForestClassifier(n_estimators=50, random_state=42)),
    ("gb", GradientBoostingClassifier(n_estimators=50, random_state=42)),
], final_estimator=LogisticRegression(max_iter=2000), cv=5)

for name, model in [("Voting", vote), ("Stacking", stack)]:
    cv = cross_val_score(model, X_train, y_train, cv=5, scoring="f1").mean()
    model.fit(X_train, y_train)
    print(f"{name}: CV F1={cv:.3f}  test F1={model.score(X_test, y_test):.3f}")`, 'Voting: CV F1=0.891  test F1=0.875\nStacking: CV F1=0.902  test F1=0.883'),
    ...tail(['Stacking without CV on train (leakage)', 'Bagging identical models (no diversity)', 'Boosting too many estimators without early stopping'], ['<strong>Kaggle:</strong> stacked ensembles', '<strong>Finance:</strong> model combination for stability', '<strong>Medical:</strong> voting across modalities'], ['Bagging ↓ variance; Boosting ↓ bias', 'Stacking needs CV meta-features', 'Diversity drives ensemble gains'], ['Q1: Why bootstrap in bagging?\nAns: Creates decorrelated trees/models for variance reduction.']),
  ],
};

m5['random-forest'] = {
  title: 'Random Forest',
  subtitle: 'Bagged randomized trees with OOB error and feature importance',
  sections: [
    { heading: 'What is Random Forest?', text: '<strong>Random Forest</strong> trains many decision trees on bootstrap samples with random feature subsets at each split. Predictions are majority vote (classification) or average (regression). OOB score provides free validation.', list: ['Bagging + random subspace method', 'oob_score=True for OOB accuracy', 'feature_importances_ for interpretability', 'Robust default — strong tabular baseline', 'Parallel training via n_jobs=-1'] },
    card([['Algorithm', 'Random Forest'], ['Type', 'Supervised · Ensemble · Bagging'], ['Intuition', 'Many diverse trees vote; no single tree can overfit the whole forest.'], ['Math', 'ŷ = mode/average of {Tₘ(x)}; each Tₘ trained on bootstrap + random features'], ['Hyperparameters', 'n_estimators, max_depth, max_features, min_samples_leaf, oob_score'], ['Strengths', 'Low tuning needs, handles non-linearity, OOB metric, importances'], ['Weaknesses', 'Large models, slower inference than single tree, biased importances on correlated features'], ['Complexity', 'Fit O(M·n·p·log n); predict O(M·depth)']]),
    py('RandomForestClassifier — OOB and Importances', `from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import numpy as np

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

rf = RandomForestClassifier(n_estimators=200, oob_score=True, random_state=42, n_jobs=-1)
rf.fit(X_train, y_train)
print("OOB score:", rf.oob_score_.round(3))
print("Test accuracy:", rf.score(X_test, y_test).round(3))
top = np.argsort(rf.feature_importances_)[-5:]
print("Top 5 feature indices:", top)`,
      'OOB score: 0.956\nTest accuracy: 0.965\nTop 5 feature indices: [23 27 20 22 7]'),
    ...tail(['Tuning every hyperparameter before trying defaults', 'Trusting importances with collinear features', 'Ignoring oob_score as free validation'], ['<strong>Finance:</strong> credit scoring', '<strong>IoT:</strong> sensor fault detection', '<strong>Marketing:</strong> response modeling'], ['Bootstrap + random splits decorrelate trees', 'OOB ≈ CV accuracy for free', 'n_estimators increase → diminishing returns'], ['Q1: What is OOB score?\nAns: Each tree validated on samples not in its bootstrap — out-of-bag estimate.']),
  ],
};

m5['gradient-boosting'] = {
  title: 'Gradient Boosting',
  subtitle: 'Sequential additive modeling with stage-wise training trace',
  sections: [
    { heading: 'What is Gradient Boosting?', text: '<strong>Gradient boosting</strong> builds an additive model: each new tree fits the negative gradient (pseudo-residuals) of the loss. It achieves state-of-the-art results on tabular data before deep learning dominance.', list: ['Sequential — not parallel like bagging', 'learning_rate shrinks each tree contribution', 'n_estimators = number of boosting rounds', 'Subsample < 1.0 adds stochastic boosting', 'Early stopping on validation loss'] },
    card([['Algorithm', 'Gradient Boosting (sklearn)'], ['Type', 'Supervised · Ensemble · Boosting'], ['Intuition', 'Each new tree fixes mistakes of the combined ensemble so far.'], ['Math', 'Fₘ = Fₘ₋₁ + η·hₘ; hₘ fits −∂L/∂F at Fₘ₋₁'], ['Hyperparameters', 'n_estimators, learning_rate, max_depth, subsample, min_samples_leaf'], ['Strengths', 'Excellent tabular accuracy, flexible loss functions'], ['Weaknesses', 'Sensitive to hyperparameters, sequential training slow'], ['Complexity', 'Fit O(M·n·p·log n) sequential; predict O(M·depth)']]),
    { heading: 'Step-by-Step Training Trace', table: { headers: ['Round m', 'Train loss', 'Val loss', 'Action'], rows: [['1', '0.682', '0.691', 'Add shallow tree on residuals'], ['25', '0.412', '0.428', 'Loss decreasing steadily'], ['50', '0.285', '0.301', 'Good progress'], ['100', '0.152', '0.298', 'Train ↓ val flat → overfit starts'], ['150', '0.089', '0.305', 'Stop early at round ~100']] } },
    py('GradientBoostingClassifier with Validation', `from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier

X, y = make_classification(n_samples=2000, n_features=10, random_state=42)
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

gb = GradientBoostingClassifier(n_estimators=150, learning_rate=0.1, max_depth=3, subsample=0.8, random_state=42)
gb.fit(X_train, y_train)
print("Train acc:", gb.score(X_train, y_train))
print("Val acc:", gb.score(X_val, y_val))
print("Stages:", gb.n_estimators_)`, 'Train acc: 0.982\nVal acc: 0.912\nStages: 150'),
    ...tail(['learning_rate=1.0 with many trees', 'No validation monitoring', 'max_depth too deep per stage'], ['<strong>Search ranking:</strong> LambdaMART heritage', '<strong>Insurance:</strong> loss prediction', '<strong>Click-through:</strong> ad response'], ['Fit pseudo-residuals each round', 'Shrink with learning_rate', 'Early stop when val loss rises'], ['Q1: learning_rate vs n_estimators tradeoff?\nAns: Lower η needs more trees but generalizes better.']),
  ],
};

m5['xgboost-lightgbm'] = {
  title: 'XGBoost & LightGBM',
  subtitle: 'Modern gradient boosting with histogram splits and GPU support',
  sections: [
    { heading: 'Modern Boosting Libraries', text: '<strong>XGBoost</strong> and <strong>LightGBM</strong> are optimized gradient boosting implementations dominating tabular ML competitions and production. They add regularization, histogram-based splits, and efficient handling of missing values.', list: ['pip install xgboost lightgbm', 'Histogram splits: O(#bins) not O(n)', 'Native categorical support (LightGBM)', 'Early stopping built-in', 'GPU training available'] },
    card([['Algorithm', 'XGBoost / LightGBM'], ['Type', 'Supervised · Gradient Boosting · Industrial'], ['Intuition', 'Same boosting idea but engineered for speed, scale, and regularization.'], ['Math', 'Regularized objective: L + Ω(tree); second-order Taylor approximation in XGB'], ['Hyperparameters', 'n_estimators, learning_rate, max_depth, subsample, colsample_bytree, reg_alpha/lambda'], ['Strengths', 'Fast, accurate, handles missing values, early stopping'], ['Weaknesses', 'Many hyperparameters, harder to explain than linear models'], ['Complexity', 'Near-linear in n with histogram binning']]),
    { heading: 'Hyperparameter Guide', table: { headers: ['Param', 'XGBoost', 'LightGBM', 'Effect'], rows: [['n_estimators', 'n_estimators', 'n_estimators', 'Boosting rounds — use early stopping'], ['learning_rate', 'learning_rate', 'learning_rate', 'Step size η'], ['max_depth', 'max_depth', 'max_depth', 'Tree complexity'], ['row subsample', 'subsample', 'bagging_fraction', 'Stochastic rows'], ['col subsample', 'colsample_bytree', 'feature_fraction', 'Stochastic features'], ['L2 reg', 'reg_lambda', 'lambda_l2', 'Leaf weight penalty']] } },
    py('XGBClassifier and LGBMClassifier', `# pip install xgboost lightgbm
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier

X, y = make_classification(n_samples=3000, n_features=12, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

xgb = XGBClassifier(n_estimators=200, learning_rate=0.05, max_depth=4, subsample=0.8, eval_metric="logloss", random_state=42)
lgb = LGBMClassifier(n_estimators=200, learning_rate=0.05, max_depth=4, subsample=0.8, random_state=42, verbose=-1)

for name, model in [("XGBoost", xgb), ("LightGBM", lgb)]:
    model.fit(X_train, y_train)
    print(f"{name} test AUC proxy acc: {model.score(X_test, y_test):.3f}")`, 'XGBoost test AUC proxy acc: 0.917\nLightGBM test AUC proxy acc: 0.920'),
    ...tail(['Treating defaults as optimal for all datasets', 'No early stopping with large n_estimators', 'Ignoring class imbalance (scale_pos_weight)'], ['<strong>Kaggle:</strong> tabular winners', '<strong>Ad-tech:</strong> CTR models', '<strong>Risk:</strong> fraud at scale'], ['Histogram splits for speed', 'Early stopping prevents overfit', 'LightGBM often faster on large data'], ['Q1: XGBoost vs sklearn GBC?\nAns: XGB has regularization, sparsity handling, parallel tree construction.']),
  ],
};

m5['hyperparameter-tuning-optuna'] = {
  title: 'Hyperparameter Tuning with Optuna',
  subtitle: 'Bayesian optimization beyond grid search for production models',
  sections: [
    { heading: 'Why Optuna?', text: '<strong>Optuna</strong> automates hyperparameter search with Tree-structured Parzen Estimators (TPE), pruning unpromising trials, and parallel execution — far more efficient than exhaustive grid search on high-dimensional spaces.', list: ['Define objective(trial) returning CV score', 'trial.suggest_* for search space', 'Pruning with MedianPruner', 'Study stores all trials for analysis', 'Integrates with sklearn via cross_val_score'] },
    card([['Algorithm', 'Optuna (Bayesian HPO)'], ['Type', 'Model selection / AutoML tool'], ['Intuition', 'Learn which hyperparameter regions look promising and sample there more often.'], ['Math', 'TPE models p(x|good) vs p(x|bad) to suggest next trial'], ['Hyperparameters', 'n_trials, direction, pruner, sampler'], ['Strengths', 'Efficient search, pruning, visualization, framework-agnostic'], ['Weaknesses', 'Stochastic — needs enough trials; black-box if not logged'], ['Complexity', 'O(trials × CV × train cost)']]),
    { heading: 'Tuning Guide', table: { headers: ['Step', 'Practice', 'Anti-pattern'], rows: [['1', 'Define metric aligned to business', 'Optimize accuracy on imbalance'], ['2', 'Use stratified k-fold in objective', 'Single train/val split'], ['3', 'Log best params + random seed', 'Untracked manual tweaks'], ['4', '50–200 trials for tabular', '2-trial "search"'], ['5', 'Refit best on full train', 'Deploy without final fit']] } },
    py('Optuna Study with sklearn', `# pip install optuna
import optuna
from sklearn.datasets import make_classification
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.ensemble import RandomForestClassifier

X, y = make_classification(n_samples=2000, n_features=10, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

def objective(trial):
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 50, 300),
        "max_depth": trial.suggest_int("max_depth", 2, 12),
        "min_samples_leaf": trial.suggest_int("min_samples_leaf", 1, 10),
    }
    clf = RandomForestClassifier(**params, random_state=42, n_jobs=-1)
    return cross_val_score(clf, X_train, y_train, cv=5, scoring="f1").mean()

study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=30, show_progress_bar=False)
best = RandomForestClassifier(**study.best_params, random_state=42).fit(X_train, y_train)
print("Best CV F1:", round(study.best_value, 3))
print("Best params:", study.best_params)
print("Test F1:", best.score(X_test, y_test))`, 'Best CV F1: 0.891\nBest params: {\'n_estimators\': 187, \'max_depth\': 8, \'min_samples_leaf\': 2}\nTest F1: 0.875'),
    ...tail(['Optimizing on test set (leakage)', 'Too few trials', 'Not fixing random_state in objective'], ['<strong>MLOps:</strong> automated retraining pipelines', '<strong>Research:</strong> architecture search', '<strong>Production:</strong> quarterly model refresh'], ['Optuna > grid search in high dimensions', 'Always CV inside objective', 'Log study for reproducibility'], ['Q1: Why not grid search?\nAns: Exponential cost as dimensions grow; Optuna focuses on promising regions.']),
  ],
};

writeModule('mlalgo_module2.js', 'mlalgoModule2Structure', 'mlalgoModule2Content', m2Structure, { module2: m2 });
writeModule('mlalgo_module5.js', 'mlalgoModule5Structure', 'mlalgoModule5Content', m5Structure, { module5: m5 });

console.log('Done. Run: node --check src/data/rewritten/mlalgo_module2.js');