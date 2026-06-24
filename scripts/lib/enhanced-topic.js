/**
 * W3Schools-style 12-section topic builder (matches cv_module1 / timeseries pattern).
 */

export function findSection(sections, ...keywords) {
  return sections.find((s) =>
    keywords.some((k) => s.heading.toLowerCase().includes(k.toLowerCase()))
  );
}

export function sectionText(section) {
  if (!section) return '';
  return [section.text, ...(section.list || [])].filter(Boolean).join(' ');
}

export function buildEnhancedTopic(existing, cfg = {}) {
  const sections = existing.sections || [];
  const what = findSection(sections, 'what is', 'what are', 'what');
  const formula = findSection(sections, 'key formula', 'mathematical');
  const differences = findSection(sections, 'important differences', 'comparison');
  const mistakes = findSection(sections, 'common mistake', 'common pitfall');
  const realWorld = findSection(sections, 'real-world', 'case study');
  const recap = findSection(sections, 'quick recap');
  const practice = findSection(sections, 'practice question');

  const title = existing.title || cfg.title || 'Topic';
  const subject = cfg.subject || 'data science';

  const conceptParagraphs = cfg.conceptParagraphs || [
    `<p>${what?.text || `This topic is a core building block in ${subject}.`} Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
    `<p>Technically, ${cfg.technical || sectionText(what) || `${title} provides formal tools for quantifying patterns and uncertainty in data.`}</p>`,
    `<p>You use ${title.toLowerCase()} when ${cfg.whenToUse || 'you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.'}</p>`,
  ];

  const enhanced = [
    what || {
      heading: `What is ${title}?`,
      text: cfg.concept || `${title} is essential for ${subject}.`,
      list: cfg.conceptList || [],
    },
    {
      heading: 'Concept Explanation',
      content: conceptParagraphs,
      note: cfg.references || `References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.`,
    },
    {
      heading: 'Visual Representation',
      code: cfg.visual || `Concept map — ${title}

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: ${title} sits in the inference layer — turning noisy samples into actionable ranges.`,
      language: 'text',
    },
    formula || {
      heading: 'Key Formula / Rule',
      text: cfg.mathText || 'Core identity for this topic.',
      example: {
        title: cfg.mathTitle || 'Worked formula',
        code: cfg.mathCode || 'See Python example below.',
        output: cfg.mathOutput || 'Apply the formula before trusting software output.',
        type: 'code',
      },
    },
    {
      heading: 'Python Code Example',
      example: {
        title: cfg.pyTitle || `${title} with Python`,
        code: cfg.pyCode || defaultPython(subject, title),
        output: cfg.pyOutput || 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
        language: 'python',
        type: 'code',
      },
    },
    {
      heading: 'Step-by-Step Walkthrough',
      list:
        cfg.steps ||
        [
          `<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.`,
          `<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.`,
          `<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.`,
          `<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.`,
          `<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.`,
        ],
    },
    differences || {
      heading: 'Important Differences',
      text: cfg.compareText || 'Pick the right variant for your data type and sample size.',
      table: cfg.compareTable || {
        headers: ['Aspect', 'Option A', 'Option B', 'When to use each'],
        rows: [
          ['Data', 'Numerical', 'Categorical', 'Numerical → t/ANOVA; categorical → chi-square'],
          ['Sample size', 'Large n', 'Small n', 'Large → z/normal; small → t or exact tests'],
          ['Goal', 'Estimate', 'Test', 'Estimation → CI; decision → hypothesis test'],
          ['Assumptions', 'Parametric', 'Non-parametric', 'Parametric when assumptions hold; else rank-based'],
        ],
      },
    },
    {
      heading: 'Common Mistakes',
      list: mistakes?.list || cfg.mistakes || [
        'Mistake 1: Ignoring how data was collected (fix: document sampling design before analysis).',
        'Mistake 2: Reporting only p-values without effect size (fix: add Cohen d, R², or CI).',
        'Mistake 3: Multiple comparisons without correction (fix: Bonferroni or FDR when testing many hypotheses).',
        'Mistake 4: Treating non-random samples as representative (fix: limit claims to the sampled population).',
      ],
      code:
        cfg.mistakesCode ||
        `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
      language: 'python',
    },
    {
      heading: 'Real-World Case Study',
      text:
        cfg.caseText ||
        realWorld?.text ||
        SUBJECT_DEFAULTS[subject]?.caseText ||
        `<strong>Industry case study.</strong> Data teams apply ${title} to turn noisy observations into decisions with measurable KPI impact — always report uncertainty and validate assumptions before deployment.`,
      list:
        cfg.caseList ||
        realWorld?.list || [
          'Industry: Streaming / product experimentation',
          'Dataset: Millions of user sessions per variant',
          'Method: Hypothesis tests + CUPED variance reduction',
          'Results: Detect ~0.1% metric lifts reliably',
          'Impact: Data-driven feature launches at global scale',
        ],
    },
    recap || {
      heading: 'Quick Recap',
      list: cfg.recap || [
        `${title}: know when and why before how.`,
        'Always pair estimates with uncertainty (CI).',
        'Check assumptions before parametric tests.',
        'Report effect sizes, not just p-values.',
        'Reproducibility: seed, document, version data.',
      ],
    },
    {
      heading: 'Practice Questions',
      list: (practice?.list || cfg.practice || []).concat(
        cfg.challenge
          ? [cfg.challenge]
          : [
              `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?\nAns: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`,
            ]
      ),
    },
    {
      heading: 'Try It Yourself',
      text:
        cfg.tryText ||
        `<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>${title}</em>, and visualize the distribution. Interpret one number from the output.`,
      example: {
        title: cfg.tryTitle || 'Solution (collapsed)',
        code:
          cfg.tryCode ||
          `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — ${title}")
plt.suptitle("")
plt.show()`,
        output: cfg.tryOutput || 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
        language: 'python',
        type: 'code',
      },
    },
  ];

  return {
    title: existing.title,
    subtitle: existing.subtitle || cfg.subtitle || `Master ${title} for data-driven decisions`,
    sections: enhanced,
  };
}

const SUBJECT_DEFAULTS = {
  'inferential statistics': {
    caseText:
      '<strong>Netflix — experimentation platform.</strong> Netflix runs thousands of A/B tests per year. Each uses pre-registered metrics, fixed α, and power analysis. With <strong>n ≈ 2M users</strong>, they detect a <strong>0.1% lift</strong> in streaming hours — worth tens of millions in revenue.',
    py: (title) => `import numpy as np
import seaborn as sns
from scipy import stats

tips = sns.load_dataset("tips")
print(tips.head())
# ${title}
t, p = stats.ttest_ind(tips.loc[tips.sex=="Male","total_bill"], tips.loc[tips.sex=="Female","total_bill"])
print(f"Welch t-test: t={t:.3f}, p={p:.4f}")`,
  },
  'machine learning': {
    caseText:
      '<strong>Stripe — fraud detection.</strong> Stripe scores billions of transactions with gradient-boosted trees. A <strong>0.1% recall improvement</strong> on fraud saves millions; models are retrained weekly with stratified CV and precision-recall monitoring.',
    py: (title) => `import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

X, y = load_breast_cancer(return_X_y=True)
pipe = Pipeline([("sc", StandardScaler()), ("clf", LogisticRegression(max_iter=1000))])
scores = cross_val_score(pipe, X, y, cv=5, scoring="accuracy")
print("${title} — CV accuracy:", round(scores.mean(), 4), "+/-", round(scores.std(), 4))`,
  },
  'deep learning': {
    caseText:
      '<strong>Tesla — vision stack.</strong> Tesla trains convolutional networks on millions of driving clips. A <strong>1% detection miss rate drop</strong> on pedestrians directly affects safety metrics; training uses mixed precision, augmentations, and held-out geographic validation.',
    py: (title) => `import torch
import torch.nn as nn

# ${title} — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
  },
  'reinforcement learning': {
    caseText:
      '<strong>DeepMind — AlphaGo / game agents.</strong> RL agents learn policies from reward signals over millions of simulated steps. Sample efficiency and exploration strategy determine whether training converges in days vs months.',
    py: (title) => `import gymnasium as gym
import numpy as np

env = gym.make("CartPole-v1")
obs, _ = env.reset(seed=42)
total = 0
for _ in range(200):
    action = env.action_space.sample()
    obs, reward, term, trunc, _ = env.step(action)
    total += reward
    if term or trunc: break
print("${title} — random agent return:", total)`,
  },
  'large language models': {
    caseText:
      '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
    py: (title) => `# ${title} — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
  },
  'natural language processing': {
    caseText:
      '<strong>Google Search — query understanding.</strong> NLP pipelines tokenize, normalize, and embed billions of queries daily. A <strong>1% relevance gain</strong> drives measurable search revenue.',
    py: (title) => `from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["machine learning is great", "deep learning with neural nets", "natural language processing"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
print("${title} — TF-IDF shape:", X.shape)
print("Vocabulary sample:", vec.get_feature_names_out()[:6])`,
  },
  'computer vision': {
    caseText:
      '<strong>Waymo — autonomous perception.</strong> Multi-camera pipelines detect pedestrians at >99.99% recall under 50m using CNN detectors trained on billions of miles of data.',
    py: (title) => `import numpy as np
# ${title} — synthetic image array (H x W x C)
img = np.random.randint(0, 255, (224, 224, 3), dtype=np.uint8)
print("Image shape:", img.shape, "dtype:", img.dtype, "mean:", round(img.mean(), 1))`,
  },
  'multimodal machine learning': {
    caseText:
      '<strong>OpenAI — GPT-4V.</strong> Vision-language models align image and text embeddings for zero-shot QA, captioning, and document understanding at scale.',
    py: (title) => `import numpy as np
# ${title} — image + text feature placeholders
img_feat = np.random.randn(512)
txt_feat = np.random.randn(512)
sim = np.dot(img_feat, txt_feat) / (np.linalg.norm(img_feat)*np.linalg.norm(txt_feat))
print("Cosine similarity (random):", round(sim, 4))`,
  },
  'medical and satellite imaging': {
    caseText:
      '<strong>Philips — CT lung screening.</strong> 3D U-Net segmentation on chest CT achieves Dice >0.85 on nodules, reducing radiologist reading time by ~30%.',
    py: (title) => `import numpy as np
# ${title} — synthetic 16-bit slice
ct = np.random.randint(-1000, 2000, (512, 512), dtype=np.int16)
print("HU range:", ct.min(), "to", ct.max(), "mean:", round(ct.mean(), 1))`,
  },
  'data structures and algorithms': {
    caseText:
      '<strong>Google — search & ranking.</strong> Inverted indexes (hash + trie), graph algorithms for PageRank, and heap-backed priority queues power query latency at billions of requests per day — every layer is a DSA trade-off.',
    py: (title) => `from collections import deque

# ${title} — BFS on a small graph
graph = {0: [1, 2], 1: [0, 3], 2: [0], 3: [1]}
seen, q = {0}, deque([0])
while q:
    node = q.popleft()
    for nei in graph[node]:
        if nei not in seen:
            seen.add(nei)
            q.append(nei)
print("${title} — BFS visited:", sorted(seen))`,
  },
  'artificial intelligence': {
    caseText:
      '<strong>DeepMind — AlphaFold.</strong> Search + learning over protein conformation space solved structure prediction for 200M+ proteins, transforming structural biology.',
    py: (title) => `from collections import deque

# ${title} — BFS on a tiny grid graph
grid = [[0,0,0],[0,1,0],[0,0,0]]
q = deque([(0,0)]); seen = {(0,0)}
while q:
    r,c = q.popleft()
    for dr,dc in [(1,0),(-1,0),(0,1),(0,-1)]:
        nr,nc = r+dr, c+dc
        if 0<=nr<3 and 0<=nc<3 and grid[nr][nc]==0 and (nr,nc) not in seen:
            seen.add((nr,nc)); q.append((nr,nc))
print("BFS reachable cells:", len(seen))`,
  },
};

function defaultPython(subject, title) {
  const d = SUBJECT_DEFAULTS[subject];
  if (d?.py) return d.py(title);
  return `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

np.random.seed(42)
df = sns.load_dataset("tips")
print(df.head())
print(df["total_bill"].describe())`;
}

export function serializeValue(val, indent = 2) {
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

export function writeModuleFile(_outPath, structureExport, contentExport, structure, content, headerComment = '') {
  return `${headerComment}export const ${structureExport} = ${serializeValue(structure, 0)};\n\nexport const ${contentExport} = ${serializeValue(content, 0)};\n`;
}