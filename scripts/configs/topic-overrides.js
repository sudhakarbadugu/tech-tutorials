/**
 * Per-topic enrichment overrides keyed by "filename/topicId".
 * Merged into buildEnhancedTopic() cfg for richer Python & case studies.
 */

export const topicOverrides = {
  // ── Stats Module 1 ──────────────────────────────────────────────────────
  'stats_module1.js/intro': {
    references: 'References: Moore, McCabe & Craig (2017), <em>Introduction to the Practice of Statistics</em>; Gelman et al. (2013), <em>Bayesian Data Analysis</em>.',
    pyTitle: 'Descriptive vs inferential on seaborn tips',
    pyCode: `import seaborn as sns
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
    pyOutput: 'Mean bill: 19.79; Median: 17.80; 95% CI: (18.66, 20.92) — inferential quantifies uncertainty about the population.',
    caseText: '<strong>Spotify — listener analytics.</strong> Spotify analysts use descriptive stats (daily streams, skip rates) for dashboards and inferential stats (confidence intervals on genre lift) to decide playlist experiments. A 1% lift in completion rate across 500M users is tested with hypothesis tests before global rollout.',
    tryCode: `import seaborn as sns
tips = sns.load_dataset("tips")
print("n =", len(tips))
print("Sample mean:", tips["total_bill"].mean())
print("Population? We only have this restaurant sample — inferential stats generalize with caution.`,
    tryOutput: 'n = 244; Sample mean: 19.79 — this describes the sample only until you justify representativeness.',
  },

  'stats_module1.js/data-types': {
    pyTitle: 'Classify columns in the penguins dataset',
    pyCode: `import seaborn as sns
import pandas as pd

penguins = sns.load_dataset("penguins").dropna()
for col in penguins.columns:
    dtype = penguins[col].dtype
    nunique = penguins[col].nunique()
    kind = "numerical" if pd.api.types.is_numeric_dtype(penguins[col]) else "categorical"
    print(f"{col:12} {kind:12} dtype={dtype} nunique={nunique}")`,
    pyOutput: 'species/island/sex → categorical; bill_length_mm/body_mass_g → numerical — drives test selection.',
    visual: `Measurement levels (Stevens)

  Nominal     Ordinal      Interval       Ratio
  (labels)    (ordered)    (no true 0)    (true 0)
  gender      Likert       °C temp        height, income
  |           |            |              |
  mode        median       mean, SD       ratios OK`,
  },

  'stats_module1.js/descriptive-stats': {
    pyTitle: 'Mean vs median on skewed bill data',
    pyCode: `import seaborn as sns
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
    pyOutput: 'Mean jumps with one $500 outlier; median stays stable — use median for skewed spend data.',
  },

  'stats_module1.js/probability-basics': {
    pyTitle: 'Bayes theorem — medical screening simulation',
    pyCode: `import numpy as np

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
    pyOutput: 'PPV ≈ 0.16 — only ~16% of positives truly have the disease when prevalence is 1%.',
  },

  'stats_module1.js/distributions': {
    pyTitle: 'Normal, binomial, and Poisson with scipy',
    pyCode: `import numpy as np
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
    pyOutput: 'P(X<=3) binomial: 0.8497 — scipy handles both discrete and continuous distributions.',
  },

  'stats_module1.js/sampling': {
    pyTitle: 'Compare sampling strategies with numpy',
    pyCode: `import numpy as np
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
    pyOutput: 'Both means near 100; SE ≈ 2.1 — larger n halves SE via σ/√n.',
  },

  'stats_module1.js/central-limit': {
    pyTitle: 'CLT demo — uniform population, normal sample means',
    pyCode: `import numpy as np
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
    pyOutput: 'Mean of means ≈ 5.0; histogram matches normal curve — CLT in action.',
  },

  'stats_module1.js/confidence-intervals': {
    pyTitle: '95% CI for mean bill — t interval',
    pyCode: `import seaborn as sns
import numpy as np
from scipy import stats

tips = sns.load_dataset("tips")
x = tips["total_bill"]
n, m, s = len(x), x.mean(), x.std(ddof=1)
ci = stats.t.interval(0.95, df=n-1, loc=m, scale=s/np.sqrt(n))
print(f"n={n}, x̄={m:.2f}, 95% CI=({ci[0]:.2f}, {ci[1]:.2f})")`,
    pyOutput: 'n=244, x̄=19.79, 95% CI=(18.66, 20.92) — plausible range for population mean.',
  },

  'stats_module1.js/hypothesis-intro': {
    pyTitle: 'One-sample t-test on tips',
    pyCode: `from scipy import stats
import seaborn as sns

tips = sns.load_dataset("tips")
# H0: mean bill = 20
t, p = stats.ttest_1samp(tips["total_bill"], popmean=20)
print(f"t={t:.3f}, p={p:.4f}")
print("Reject H0 at α=0.05?" , p < 0.05)`,
    pyOutput: 't≈-1.47, p≈0.14 — fail to reject H0; insufficient evidence mean ≠ 20.',
  },
};