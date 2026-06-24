// machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js mlalgo_module4.js

export const mlalgoModule4Structure = {
  module4: {
    title: 'Module 4: Unsupervised Learning',
    topics: [
      {
        id: 'k-means-clustering',
        title: 'K-Means Clustering'
      },
      {
        id: 'hierarchical-clustering',
        title: 'Hierarchical Clustering'
      },
      {
        id: 'dbscan',
        title: 'DBSCAN'
      },
      {
        id: 'principal-component-analysis',
        title: 'Principal Component Analysis'
      },
      {
        id: 'gaussian-mixture-models',
        title: 'Gaussian Mixture Models'
      }
    ]
  }
};

export const mlalgoModule4Content = {
  module4: {
    'k-means-clustering': {
      title: 'K-Means Clustering',
      subtitle: 'Partition data into K spherical clusters by minimizing within-cluster variance',
      sections: [
        {
          heading: 'What is K-Means Clustering?',
          text: '<strong>K-Means</strong> is a centroid-based clustering algorithm that partitions n observations into K disjoint groups. Each point belongs to the cluster whose centroid (mean) is nearest. It assumes clusters are roughly spherical and of similar size — making it one of the fastest and most widely used unsupervised algorithms in production ML pipelines.',
          list: [
            '<strong>Hard clustering:</strong> Each point belongs to exactly one cluster',
            '<strong>Centroid-based:</strong> Clusters are defined by their mean vectors μ₁, μ₂, …, μₖ',
            '<strong>Iterative refinement:</strong> Alternates between assignment and update steps until convergence',
            '<strong>Requires K upfront:</strong> The number of clusters must be specified or chosen via elbow/silhouette methods',
            '<strong>Scale-sensitive:</strong> Features should be standardized before clustering'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>K-Means</strong> is a centroid-based clustering algorithm that partitions n observations into K disjoint groups. Each point belongs to the cluster whose centroid (mean) is nearest. It assumes clusters are roughly spherical and of similar size — making it one of the fastest and most widely used unsupervised algorithms in production ML pipelines. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>K-Means</strong> is a centroid-based clustering algorithm that partitions n observations into K disjoint groups. Each point belongs to the cluster whose centroid (mean) is nearest. It assumes clusters are roughly spherical and of similar size — making it one of the fastest and most widely used unsupervised algorithms in production ML pipelines. <strong>Hard clustering:</strong> Each point belongs to exactly one cluster <strong>Centroid-based:</strong> Clusters are defined by their mean vectors μ₁, μ₂, …, μₖ <strong>Iterative refinement:</strong> Alternates between assignment and update steps until convergence <strong>Requires K upfront:</strong> The number of clusters must be specified or chosen via elbow/silhouette methods <strong>Scale-sensitive:</strong> Features should be standardized before clustering</p>',
            '<p>You use k-means clustering when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — K-Means Clustering

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: K-Means Clustering sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'K-Means minimizes the <strong>within-cluster sum of squares (WCSS)</strong>, also called inertia.',
          example: {
            title: `K-Means Objective and Lloyd's Algorithm`,
            code: `Objective (minimize inertia):
  J = Σᵢ₌₁ⁿ Σₖ₌₁ᴷ rᵢₖ ||xᵢ - μₖ||²

Where:
  xᵢ   = data point i
  μₖ   = centroid of cluster k
  rᵢₖ  = 1 if xᵢ assigned to cluster k, else 0

Lloyd's Algorithm:
  1. Initialize K centroids (random, k-means++, or user-specified)
  2. ASSIGN: rᵢₖ = 1 if k = argminⱼ ||xᵢ - μⱼ||²
  3. UPDATE: μₖ = (Σᵢ rᵢₖ xᵢ) / (Σᵢ rᵢₖ)
  4. Repeat steps 2–3 until assignments stop changing

Elbow Method:
  Plot inertia J vs K → look for "elbow" where marginal gain drops

Silhouette Score (per point i):
  s(i) = (b(i) - a(i)) / max(a(i), b(i))
  a(i) = mean distance to same-cluster points
  b(i) = mean distance to nearest other cluster
  Range: [-1, 1]; higher is better`,
            output: 'K-Means converges to a local minimum of J; different initializations can yield different results.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'K-Means Clustering with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("K-Means Clustering — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'K-Means differs from other clustering families in assumptions, output, and scalability.',
          table: {
            headers: [
              'Aspect',
              'K-Means',
              'Hierarchical',
              'DBSCAN',
              'GMM'
            ],
            rows: [
              [
                'Cluster shape',
                'Spherical / convex',
                'Any (linkage-dependent)',
                'Arbitrary density shapes',
                'Elliptical (Gaussian)'
              ],
              [
                'K required?',
                'Yes',
                'No (cut dendrogram)',
                'No',
                'Yes (number of components)'
              ],
              [
                'Handles noise',
                'No — assigns all points',
                'No',
                'Yes — labels noise as -1',
                'Soft assignment via probabilities'
              ],
              [
                'Scalability',
                'O(n · K · d · i) — fast',
                'O(n²) naive; O(n log n) optimized',
                'O(n log n) with spatial index',
                'O(n · K · d · i) — EM iterations'
              ],
              [
                'Output',
                'Hard labels + centroids',
                'Dendrogram + flat labels',
                'Core/border/noise labels',
                'Soft probabilities per cluster'
              ],
              [
                'Best for',
                'Large, well-separated blobs',
                'Small n, hierarchy insight',
                'Irregular shapes, outliers',
                'Overlapping elliptical clusters'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Clustering without scaling features (fix: apply StandardScaler; otherwise high-magnitude features dominate distance)',
            'Mistake 2: Running K-Means once with a single random init (fix: set n_init=10+ and init="k-means++" for stabler local minima)',
            'Mistake 3: Choosing K only by elbow when the elbow is ambiguous (fix: combine elbow with silhouette score and domain constraints)',
            'Mistake 4: Using K-Means on non-spherical clusters like rings or moons (fix: use DBSCAN, spectral clustering, or GMM with full covariance)',
            'Mistake 5: Treating cluster IDs as ordinal (fix: cluster 2 is not "more than" cluster 1 — labels are arbitrary permutations)'
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
          text: 'K-Means is the default first-choice clusterer for large-scale segmentation.',
          list: [
            '<strong>Customer segmentation:</strong> Group shoppers by RFM features (recency, frequency, monetary value) for targeted campaigns',
            '<strong>Document clustering:</strong> Cluster TF-IDF vectors to discover topic groups in news or support tickets',
            '<strong>Image compression:</strong> Quantize pixel colors into K palette entries (K-Means on RGB space)',
            '<strong>Anomaly pre-screening:</strong> Flag points far from all centroids as potential outliers before supervised modeling',
            '<strong>ML pipeline preprocessing:</strong> Vector quantization and bag-of-words codebook construction'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'K-Means partitions data into K clusters by minimizing within-cluster sum of squares',
            `Lloyd's algorithm alternates assignment (nearest centroid) and update (recompute mean)`,
            'Use elbow method and silhouette analysis to select K when it is unknown',
            'Always standardize features; use k-means++ initialization and multiple n_init runs',
            'K-Means assumes spherical, similarly-sized clusters — not suitable for arbitrary shapes'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What objective function does K-Means minimize?
Ans: The within-cluster sum of squares (WCSS / inertia): Σᵢ ||xᵢ - μ_{c(i)}||².`,
            `Q2: Why is k-means++ preferred over random initialization?
Ans: It spreads initial centroids apart, reducing the chance of poor local minima and speeding convergence.`,
            `Q3: A silhouette score of 0.65 vs 0.42 for K=3 vs K=5 — which K do you prefer?
Ans: K=3, because higher mean silhouette indicates better-defined, well-separated clusters.`,
            `Q4: Why must features be standardized before K-Means?
Ans: Euclidean distance is scale-dependent; unscaled features with larger ranges dominate the distance calculation.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>K-Means Clustering</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — K-Means Clustering")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'hierarchical-clustering': {
      title: 'Hierarchical Clustering',
      subtitle: 'Build a cluster hierarchy via agglomerative merging or divisive splitting',
      sections: [
        {
          heading: 'What is Hierarchical Clustering?',
          text: '<strong>Hierarchical clustering</strong> builds a nested tree (dendrogram) of clusters without requiring K upfront. <strong>Agglomerative</strong> (bottom-up) starts with each point as its own cluster and iteratively merges the closest pair. <strong>Divisive</strong> (top-down) starts with one cluster and recursively splits. The dendrogram lets you cut at any height to obtain a flat partition with your chosen number of clusters.',
          list: [
            '<strong>Dendrogram:</strong> Tree diagram showing merge/split order and linkage distances',
            '<strong>No K required initially:</strong> Choose the cut height after inspecting the tree',
            '<strong>Linkage criterion:</strong> Defines inter-cluster distance (single, complete, average, Ward)',
            '<strong>Deterministic (agglomerative):</strong> Same data and linkage always produce the same tree',
            '<strong>Does not scale to millions:</strong> O(n²) memory for the distance matrix'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Hierarchical clustering</strong> builds a nested tree (dendrogram) of clusters without requiring K upfront. <strong>Agglomerative</strong> (bottom-up) starts with each point as its own cluster and iteratively merges the closest pair. <strong>Divisive</strong> (top-down) starts with one cluster and recursively splits. The dendrogram lets you cut at any height to obtain a flat partition with your chosen number of clusters. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Hierarchical clustering</strong> builds a nested tree (dendrogram) of clusters without requiring K upfront. <strong>Agglomerative</strong> (bottom-up) starts with each point as its own cluster and iteratively merges the closest pair. <strong>Divisive</strong> (top-down) starts with one cluster and recursively splits. The dendrogram lets you cut at any height to obtain a flat partition with your chosen number of clusters. <strong>Dendrogram:</strong> Tree diagram showing merge/split order and linkage distances <strong>No K required initially:</strong> Choose the cut height after inspecting the tree <strong>Linkage criterion:</strong> Defines inter-cluster distance (single, complete, average, Ward) <strong>Deterministic (agglomerative):</strong> Same data and linkage always produce the same tree <strong>Does not scale to millions:</strong> O(n²) memory for the distance matrix</p>',
            '<p>You use hierarchical clustering when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Hierarchical Clustering

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Hierarchical Clustering sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each merge step combines the two clusters with minimum <strong>linkage distance</strong>, defined by the chosen criterion.',
          example: {
            title: 'Linkage Criteria and Dendrogram Cut',
            code: `Linkage distances between clusters A and B:

  Single (min):     d(A,B) = min{d(a,b) : a∈A, b∈B}
  Complete (max):   d(A,B) = max{d(a,b) : a∈A, b∈B}
  Average (UPGMA):  d(A,B) = mean{d(a,b) : a∈A, b∈B}
  Ward:             d(A,B) = increase in total WCSS if A,B merged

Agglomerative loop:
  1. Start: n clusters (one per point)
  2. Merge the pair (i,j) with minimum linkage distance
  3. Update distance matrix / linkage matrix
  4. Repeat until one cluster remains

Flat clustering:
  Cut dendrogram at height h → clusters = connected components
  below the cut (or set n_clusters in sklearn)

Cophenetic correlation:
  Measures how faithfully the dendrogram preserves
  original pairwise distances (closer to 1 is better)`,
            output: 'Ward linkage minimizes variance increase and tends to produce compact, equal-sized clusters.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Hierarchical Clustering with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Hierarchical Clustering — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'Linkage choice dramatically affects the cluster hierarchy produced.',
          table: {
            headers: [
              'Linkage',
              'Inter-cluster distance',
              'Cluster shape tendency',
              'Outlier sensitivity',
              'Best for'
            ],
            rows: [
              [
                'Single',
                'Minimum pairwise distance',
                'Chaining — elongated clusters',
                'High — bridges outliers',
                'Non-convex, snake-like clusters'
              ],
              [
                'Complete',
                'Maximum pairwise distance',
                'Compact, spherical clusters',
                'Moderate',
                'Well-separated, compact groups'
              ],
              [
                'Average',
                'Mean pairwise distance',
                'Balanced between single/complete',
                'Moderate',
                'General-purpose agglomerative'
              ],
              [
                'Ward',
                'WCSS increase on merge',
                'Compact, similar-sized blobs',
                'Lower — resists chaining',
                'Numeric data, variance minimization'
              ],
              [
                'Centroid',
                'Distance between centroids',
                'Can produce inversions in dendrogram',
                'Moderate',
                'Large datasets (less common)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Ward linkage with non-Euclidean metrics (fix: Ward requires Euclidean distance; use average/complete linkage with other metrics)',
            'Mistake 2: Running hierarchical clustering on 100K+ rows without constraints (fix: use connectivity-constrained clustering or switch to K-Means/DBSCAN)',
            'Mistake 3: Cutting the dendrogram at an arbitrary height without inspecting gaps (fix: look for the largest vertical distance between successive merges)',
            'Mistake 4: Expecting to predict cluster labels for new data points (fix: AgglomerativeClustering has no predict(); train a classifier on labels or use K-Means)',
            'Mistake 5: Ignoring single-linkage chaining with noise (fix: single linkage connects through noise bridges; prefer Ward for compact clusters)'
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
            '<strong>Taxonomy construction:</strong> Build product or species hierarchies from similarity matrices',
            '<strong>Gene expression analysis:</strong> Cluster genes and samples simultaneously (heatmaps + dendrograms)',
            '<strong>Social network communities:</strong> Hierarchical community detection in small networks',
            '<strong>Document hierarchies:</strong> Organize legal clauses or policy documents into nested categories',
            '<strong>Exploratory segmentation:</strong> Discover natural group counts before deploying K-Means at scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Hierarchical clustering builds a dendrogram without requiring K upfront',
            'Agglomerative clustering merges closest clusters iteratively using a linkage criterion',
            'Ward linkage minimizes variance increase and works well for compact, numeric clusters',
            'Cut the dendrogram at a height with a large gap to obtain flat cluster labels',
            'Use scipy dendrogram for visualization; sklearn AgglomerativeClustering for flat labels'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does the height of a merge in a dendrogram represent?
Ans: The linkage distance between the two clusters being merged at that step.`,
            `Q2: Why does single linkage produce "chaining"?
Ans: It merges clusters based on the minimum pairwise distance, so a single bridge point can connect distant groups into one elongated cluster.`,
            `Q3: How do you get 4 flat clusters from a dendrogram?
Ans: Cut the tree at the height just below the merge that would reduce the number of clusters below 4, or set n_clusters=4 in AgglomerativeClustering.`,
            `Q4: Why is hierarchical clustering impractical for n = 1,000,000?
Ans: It requires O(n²) memory for the distance matrix and at least O(n² log n) time — infeasible at that scale.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Hierarchical Clustering</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Hierarchical Clustering")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    dbscan: {
      title: 'DBSCAN',
      subtitle: 'Density-based clustering that discovers arbitrary shapes and labels noise',
      sections: [
        {
          heading: 'What is DBSCAN?',
          text: '<strong>DBSCAN</strong> (Density-Based Spatial Clustering of Applications with Noise) groups points in high-density regions separated by low-density gaps. Unlike K-Means, it does not require K, can find non-spherical clusters, and explicitly marks <strong>noise points</strong> that do not belong to any cluster (label = -1).',
          list: [
            '<strong>Core points:</strong> Have at least minPts neighbors within distance ε (epsilon)',
            '<strong>Border points:</strong> Within ε of a core point but not core themselves',
            '<strong>Noise points:</strong> Neither core nor density-reachable from any core point',
            '<strong>Density-reachable:</strong> Connected through a chain of ε-neighbors',
            '<strong>Two hyperparameters:</strong> ε (neighborhood radius) and minPts (minimum neighbors)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>DBSCAN</strong> (Density-Based Spatial Clustering of Applications with Noise) groups points in high-density regions separated by low-density gaps. Unlike K-Means, it does not require K, can find non-spherical clusters, and explicitly marks <strong>noise points</strong> that do not belong to any cluster (label = -1). Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>DBSCAN</strong> (Density-Based Spatial Clustering of Applications with Noise) groups points in high-density regions separated by low-density gaps. Unlike K-Means, it does not require K, can find non-spherical clusters, and explicitly marks <strong>noise points</strong> that do not belong to any cluster (label = -1). <strong>Core points:</strong> Have at least minPts neighbors within distance ε (epsilon) <strong>Border points:</strong> Within ε of a core point but not core themselves <strong>Noise points:</strong> Neither core nor density-reachable from any core point <strong>Density-reachable:</strong> Connected through a chain of ε-neighbors <strong>Two hyperparameters:</strong> ε (neighborhood radius) and minPts (minimum neighbors)</p>',
            '<p>You use dbscan when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — DBSCAN

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: DBSCAN sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'DBSCAN defines clusters as connected components of <strong>density-reachable</strong> core points.',
          example: {
            title: 'DBSCAN Definitions and Algorithm',
            code: `ε-neighborhood:     N_ε(p) = {q ∈ D : dist(p,q) ≤ ε}
Core point:         |N_ε(p)| ≥ minPts
Directly density-reachable: q ∈ N_ε(p) and p is core
Density-reachable:  chain of directly density-reachable points
Density-connected:  both reachable from some common core point

Algorithm:
  1. Mark all points unvisited
  2. For each unvisited point p:
     a. Mark p visited
     b. If |N_ε(p)| < minPts → mark p as NOISE (may later become border)
     c. Else start new cluster C; add p to C
        - Add all N_ε(p) to a seed queue
        - For each point q in queue:
            if unvisited: mark visited; if core, add N_ε(q) to queue
            if not in any cluster: add q to C
  3. Output clusters + noise label (-1)`,
            output: 'Border points are assigned to clusters but do not expand neighborhoods; noise stays at -1.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'DBSCAN with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("DBSCAN — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'DBSCAN vs partition-based and hierarchical methods.',
          table: {
            headers: [
              'Aspect',
              'DBSCAN',
              'K-Means',
              'Hierarchical',
              'GMM'
            ],
            rows: [
              [
                'Cluster shape',
                'Arbitrary (density-defined)',
                'Spherical',
                'Linkage-dependent',
                'Elliptical'
              ],
              [
                'K required',
                'No',
                'Yes',
                'No (but cut needed)',
                'Yes (components)'
              ],
              [
                'Noise handling',
                'Explicit (-1 label)',
                'Forces assignment',
                'Forces assignment',
                'Low-probability points'
              ],
              [
                'Varying density',
                'Struggles — single ε',
                'Poor',
                'Moderate',
                'Moderate (with many components)'
              ],
              [
                'Hyperparameters',
                'ε, minPts',
                'K',
                'linkage, cut',
                'K, covariance type'
              ],
              [
                'Scalability',
                'O(n log n) with index',
                'O(n · K · d · i)',
                'O(n²)',
                'O(n · K · d · i)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using DBSCAN in high dimensions without dimensionality reduction (fix: apply PCA to 5–15 components; distances become meaningless in high d)',
            'Mistake 2: Setting ε without the k-distance plot (fix: plot k-distance for k = minPts; choose ε at the knee/elbow)',
            'Mistake 3: Treating -1 labels as a valid cluster (fix: noise points need separate handling — imputation, removal, or anomaly workflow)',
            'Mistake 4: Using minPts = 2 on noisy data (fix: rule of thumb minPts ≥ d + 1 or at least 5 for 2D/3D spatial data)',
            'Mistake 5: Expecting DBSCAN to find clusters of very different densities with one ε (fix: try HDBSCAN or run DBSCAN at multiple ε values)'
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
            '<strong>GPS hotspot detection:</strong> Cluster ride-share pickups and crime incidents by geographic density',
            '<strong>Anomaly detection:</strong> Network intrusion points that fail to join any dense cluster are flagged as noise',
            '<strong>Image segmentation:</strong> Cluster pixel features in color/texture space for region extraction',
            '<strong>Astronomy:</strong> Find galaxy groups in sky-survey coordinates — non-spherical, spatially structured',
            '<strong>IoT sensor monitoring:</strong> Identify normal operating regimes; label sensor glitches as noise (-1)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'DBSCAN finds density-connected clusters without specifying K',
            'Core points have ≥ minPts neighbors within ε; border and noise points are distinguished',
            'Noise points receive label -1 — a first-class output, not an error',
            'Tune ε with the k-distance plot; set minPts ≥ d + 1 as a starting rule',
            'Works best in low-to-moderate dimensions on spatial or well-scaled tabular data'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What makes a point a "core" point in DBSCAN?
Ans: It has at least minPts points (including itself) within distance ε.`,
            `Q2: Can a border point become a core point if you increase ε?
Ans: Yes — increasing ε grows neighborhoods, so border points may gain enough neighbors to become core.`,
            `Q3: Why do most points get labeled -1 when ε is too small?
Ans: Neighborhoods are too tight to reach minPts, so few core points form and most points are not density-reachable.`,
            `Q4: What label does sklearn assign to noise?
Ans: -1 (negative one), which must be handled separately from valid cluster IDs 0, 1, 2, …`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>DBSCAN</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — DBSCAN")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'principal-component-analysis': {
      title: 'Principal Component Analysis',
      subtitle: 'Linear dimensionality reduction via orthogonal directions of maximum variance',
      sections: [
        {
          heading: 'What is Principal Component Analysis?',
          text: '<strong>PCA</strong> transforms correlated features into a smaller set of uncorrelated <strong>principal components</strong> ordered by variance explained. The first component captures the direction of maximum variance; each subsequent component is orthogonal to the previous ones. PCA is used for visualization, noise reduction, speeding up downstream models, and combating the curse of dimensionality.',
          list: [
            '<strong>Linear transformation:</strong> Z = X · W where columns of W are eigenvectors of the covariance matrix',
            '<strong>Variance maximization:</strong> Each PC captures the most remaining variance under orthogonality',
            '<strong>Unsupervised:</strong> Uses only X — no labels required',
            '<strong>Reconstruction:</strong> Approximate X with top-k components; reconstruction error measures information loss',
            '<strong>Preprocessing step:</strong> Often paired with clustering, classification, or visualization'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>PCA</strong> transforms correlated features into a smaller set of uncorrelated <strong>principal components</strong> ordered by variance explained. The first component captures the direction of maximum variance; each subsequent component is orthogonal to the previous ones. PCA is used for visualization, noise reduction, speeding up downstream models, and combating the curse of dimensionality. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>PCA</strong> transforms correlated features into a smaller set of uncorrelated <strong>principal components</strong> ordered by variance explained. The first component captures the direction of maximum variance; each subsequent component is orthogonal to the previous ones. PCA is used for visualization, noise reduction, speeding up downstream models, and combating the curse of dimensionality. <strong>Linear transformation:</strong> Z = X · W where columns of W are eigenvectors of the covariance matrix <strong>Variance maximization:</strong> Each PC captures the most remaining variance under orthogonality <strong>Unsupervised:</strong> Uses only X — no labels required <strong>Reconstruction:</strong> Approximate X with top-k components; reconstruction error measures information loss <strong>Preprocessing step:</strong> Often paired with clustering, classification, or visualization</p>',
            '<p>You use principal component analysis when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Principal Component Analysis

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Principal Component Analysis sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'PCA solves an eigendecomposition of the covariance matrix (or SVD of the centered data matrix).',
          example: {
            title: 'PCA Mathematics and Variance Explained',
            code: `Steps:
  1. Center data:     X̃ = X - mean(X)
  2. Covariance:      Σ = (1/(n-1)) X̃ᵀ X̃
  3. Eigendecompose:  Σ vⱼ = λⱼ vⱼ
  4. Project:         Z = X̃ · Vₖ   (top-k eigenvectors)

Variance explained by PC j:
  ratio_j = λⱼ / Σᵢ λᵢ
  cumulative_k = Σⱼ₌₁ᵏ ratio_j

Reconstruction:
  X̂ = Z · Vₖᵀ + mean(X)
  Reconstruction error (Frobenius):
  ||X - X̂||²_F = Σⱼ₌ₖ₊₁ᵈ λⱼ   (sum of discarded eigenvalues)

SVD shortcut (numerically stable):
  X̃ = U S Vᵀ  →  PCs are columns of V`,
            output: 'Keeping k components preserves Σⱼ₌₁ᵏ λⱼ / Σⱼ λⱼ fraction of total variance.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Principal Component Analysis with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Principal Component Analysis — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'PCA vs other dimensionality reduction techniques.',
          table: {
            headers: [
              'Method',
              'Type',
              'Preserves',
              'Cost',
              'Best for'
            ],
            rows: [
              [
                'PCA',
                'Linear',
                'Global variance',
                'O(min(n²d, nd²))',
                'Compression, preprocessing, noise removal'
              ],
              [
                'Kernel PCA',
                'Nonlinear',
                'Variance in feature space',
                'O(n²) – O(n³)',
                'Nonlinear manifolds (small n)'
              ],
              [
                't-SNE',
                'Nonlinear',
                'Local neighborhood structure',
                'O(n²)',
                '2D/3D visualization only'
              ],
              [
                'UMAP',
                'Nonlinear',
                'Local + some global structure',
                'O(n log n)',
                'Visualization, medium datasets'
              ],
              [
                'Autoencoder',
                'Nonlinear (neural)',
                'Learned reconstruction',
                'GPU training',
                'Images, complex high-d data'
              ],
              [
                'Factor Analysis',
                'Linear latent',
                'Shared factors + unique noise',
                'EM iterations',
                'Interpretable latent constructs'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running PCA without centering (fix: sklearn PCA centers by default; always center manually if implementing from scratch)',
            'Mistake 2: Not scaling features with different units (fix: standardize when features have different scales; skip scaling only if all features are commensurate)',
            'Mistake 3: Using PCA for 2D visualization then interpreting cluster separation as ground truth (fix: PCA projection can distort distances; validate with silhouette in original or PC space)',
            'Mistake 4: Keeping too few components to save compute, losing predictive signal (fix: use cumulative variance ≥ 95% or cross-validate downstream model performance vs k)',
            'Mistake 5: Applying PCA to categorical features (fix: PCA is for numeric data; encode categories appropriately or use methods suited to mixed data)'
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
            '<strong>Face recognition (Eigenfaces):</strong> PCA on pixel vectors compresses facial images for efficient matching',
            '<strong>Finance:</strong> Reduce hundreds of correlated stock returns to a few principal risk factors',
            '<strong>Gene expression:</strong> Compress thousands of gene measurements to principal expression patterns',
            '<strong>Clustering preprocessing:</strong> Run K-Means on PCA-reduced data to mitigate curse of dimensionality',
            '<strong>Model speedup:</strong> Train logistic regression or SVM on 20 PCs instead of 500 raw features'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'PCA finds orthogonal directions of maximum variance in centered (and usually scaled) data',
            'Explained variance ratio tells how much information each component retains',
            'Reconstruction error equals the sum of eigenvalues of discarded components',
            'Use cumulative variance (e.g., 95%) to choose the number of components k',
            'sklearn.decomposition.PCA uses SVD internally for numerical stability'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does the first principal component maximize?
Ans: The variance of the projected data — it is the direction of maximum spread.`,
            `Q2: If 10 PCs capture 95% of variance, what fraction is lost in reconstruction?
Ans: 5% of total variance (the sum of eigenvalues of the remaining d - 10 components).`,
            `Q3: Why use SVD instead of explicitly computing the covariance matrix?
Ans: SVD is numerically more stable and avoids forming the d × d covariance matrix when n is large.`,
            `Q4: Should you scale before PCA when features are income ($) and age (years)?
Ans: Yes — without scaling, income dominates due to larger magnitude, not greater informational value.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Principal Component Analysis</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Principal Component Analysis")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'gaussian-mixture-models': {
      title: 'Gaussian Mixture Models',
      subtitle: 'Soft clustering via probabilistic mixture of multivariate Gaussians',
      sections: [
        {
          heading: 'What are Gaussian Mixture Models?',
          text: 'A <strong>Gaussian Mixture Model (GMM)</strong> assumes data is generated from a mixture of K multivariate Gaussian distributions. Unlike K-Means, GMM provides <strong>soft clustering</strong> — each point has a probability of belonging to each component. Parameters (means, covariances, mixing weights) are learned via the <strong>Expectation-Maximization (EM)</strong> algorithm.',
          list: [
            '<strong>Soft assignment:</strong> γᵢₖ = P(cluster k | xᵢ) — responsibilities sum to 1 per point',
            '<strong>Flexible shapes:</strong> Full covariance matrices allow elliptical clusters',
            '<strong>Generative model:</strong> Can sample new data points from the learned mixture',
            '<strong>EM algorithm:</strong> Alternates E-step (compute responsibilities) and M-step (update parameters)',
            '<strong>Model selection:</strong> Use BIC/AIC to choose K and covariance_type'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Gaussian Mixture Model (GMM)</strong> assumes data is generated from a mixture of K multivariate Gaussian distributions. Unlike K-Means, GMM provides <strong>soft clustering</strong> — each point has a probability of belonging to each component. Parameters (means, covariances, mixing weights) are learned via the <strong>Expectation-Maximization (EM)</strong> algorithm. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Gaussian Mixture Model (GMM)</strong> assumes data is generated from a mixture of K multivariate Gaussian distributions. Unlike K-Means, GMM provides <strong>soft clustering</strong> — each point has a probability of belonging to each component. Parameters (means, covariances, mixing weights) are learned via the <strong>Expectation-Maximization (EM)</strong> algorithm. <strong>Soft assignment:</strong> γᵢₖ = P(cluster k | xᵢ) — responsibilities sum to 1 per point <strong>Flexible shapes:</strong> Full covariance matrices allow elliptical clusters <strong>Generative model:</strong> Can sample new data points from the learned mixture <strong>EM algorithm:</strong> Alternates E-step (compute responsibilities) and M-step (update parameters) <strong>Model selection:</strong> Use BIC/AIC to choose K and covariance_type</p>',
            '<p>You use gaussian mixture models when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Gaussian Mixture Models

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Gaussian Mixture Models sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'GMM models the data density as a weighted sum of K Gaussian components.',
          example: {
            title: 'GMM Density and EM Algorithm',
            code: `Mixture density:
  p(x) = Σₖ₌₁ᴷ πₖ · N(x | μₖ, Σₖ)

Where:
  πₖ = mixing weight (Σₖ πₖ = 1)
  μₖ = mean of component k
  Σₖ = covariance matrix of component k

E-step (responsibilities):
  γᵢₖ = πₖ N(xᵢ|μₖ,Σₖ) / Σⱼ πⱼ N(xᵢ|μⱼ,Σⱼ)

M-step (update parameters):
  Nₖ = Σᵢ γᵢₖ
  μₖ = Σᵢ γᵢₖ xᵢ / Nₖ
  Σₖ = Σᵢ γᵢₖ (xᵢ-μₖ)(xᵢ-μₖ)ᵀ / Nₖ
  πₖ = Nₖ / n

BIC for model selection:
  BIC = -2 · log(L) + p · log(n)
  Lower BIC → preferred model (penalizes complexity)`,
            output: 'EM increases the data log-likelihood monotonically until convergence to a local optimum.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Gaussian Mixture Models with Python',
            code: `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("Gaussian Mixture Models — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
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
          text: 'GMM vs K-Means and other clustering methods.',
          table: {
            headers: [
              'Aspect',
              'GMM',
              'K-Means',
              'DBSCAN',
              'Hierarchical'
            ],
            rows: [
              [
                'Assignment',
                'Soft (probabilities)',
                'Hard (labels)',
                'Hard + noise',
                'Hard'
              ],
              [
                'Cluster shape',
                'Elliptical (covariance-dependent)',
                'Spherical',
                'Density-based arbitrary',
                'Linkage-dependent'
              ],
              [
                'Algorithm',
                'EM (probabilistic)',
                `Lloyd's (geometric)`,
                'Density reachability',
                'Greedy merge'
              ],
              [
                'Outliers',
                'Low γᵢₖ across all k',
                'Forced assignment',
                'Explicit -1 label',
                'Forced assignment'
              ],
              [
                'Generative',
                'Yes — can sample new points',
                'No',
                'No',
                'No'
              ],
              [
                'Covariance types',
                'full, tied, diag, spherical',
                'Implicit spherical',
                'N/A',
                'N/A'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using full covariance in high dimensions with small n (fix: use diag or spherical; need n >> K · d² for full covariance)',
            'Mistake 2: Ignoring soft probabilities and only using hard labels (fix: use predict_proba(); low-confidence points deserve different marketing treatment)',
            'Mistake 3: Skipping feature scaling before GMM (fix: EM assumes comparable feature scales; always StandardScaler first)',
            'Mistake 4: Running EM once without n_init (fix: set n_init=5–10; EM converges to local optima like K-Means)',
            'Mistake 5: Choosing K by silhouette alone on overlapping data (fix: use BIC/AIC for GMM; silhouette favors well-separated hard clusters)'
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
            '<strong>Customer segmentation:</strong> RFM-based marketing segments with confidence scores for campaign targeting',
            '<strong>Anomaly detection:</strong> Points with low mixture likelihood are outliers or fraud candidates',
            '<strong>Speaker diarization:</strong> GMM on audio features to identify who spoke when',
            '<strong>Density estimation:</strong> Model traffic patterns or demand distributions for simulation',
            '<strong>Semi-supervised warm-start:</strong> Use GMM posteriors as soft labels for downstream classifiers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'GMM models data as a weighted mixture of K multivariate Gaussians',
            'EM alternates E-step (responsibilities) and M-step (parameter updates)',
            'Soft clustering: each point has a probability vector over K components',
            'Use BIC/AIC to select K; covariance_type trades flexibility for data requirements',
            'Customer segmentation: scale RFM features → BIC select K → profile segments → evaluate'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does GMM differ from K-Means in cluster assignment?
Ans: GMM gives soft probabilities (responsibilities) per cluster; K-Means gives hard exclusive assignments.`,
            `Q2: What happens in the M-step of EM?
Ans: Parameters μₖ, Σₖ, and πₖ are updated using the current responsibilities γᵢₖ.`,
            `Q3: Why use BIC instead of just log-likelihood to choose K?
Ans: BIC penalizes model complexity (more parameters), preventing overfitting from too many components.`,
            `Q4: In the customer segmentation project, why scale before GMM?
Ans: total_spend and recency_days have different units and ranges; unscaled features make the Gaussian model favor high-magnitude features.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Gaussian Mixture Models</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Gaussian Mixture Models")
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
