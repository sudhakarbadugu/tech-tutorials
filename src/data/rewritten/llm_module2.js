// large language models — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js llm_module2.js

export const llmModule2Structure = {
  module2: {
    title: 'Module 2: Transformer Architecture Deep Dive',
    topics: [
      {
        id: 'self-attention',
        title: 'Self-Attention: Query, Key, Value with Matrix Math'
      },
      {
        id: 'multi-head-attention',
        title: 'Multi-Head Attention: Parallel Attention Heads'
      },
      {
        id: 'norm-residual-ffn',
        title: 'Layer Normalization, Residual Connections, and the Feed-Forward Network'
      },
      {
        id: 'positional-encodings',
        title: 'Positional Encodings: Sinusoidal, Learned, and RoPE'
      },
      {
        id: 'gpt-architecture',
        title: 'The GPT Block Stack and Full Forward Pass'
      },
      {
        id: 'mini-gpt-pytorch',
        title: 'Building a Mini-GPT from Scratch in PyTorch'
      }
    ]
  }
};

export const llmModule2Content = {
  module2: {
    'self-attention': {
      title: 'Self-Attention: Query, Key, Value with Matrix Math',
      subtitle: 'The core operation that lets every token attend to every other token',
      sections: [
        {
          heading: 'What Is Self-Attention?',
          text: 'Self-attention lets a sequence model relate every position to every other position in a single parallel pass. Each token produces three vectors via linear projections — a <strong>Query</strong> (what it is looking for), a <strong>Key</strong> (what it offers), and a <strong>Value</strong> (what it contains). The output for a token is a weighted sum of all values, where the weights are the query–key similarities.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Self-attention lets a sequence model relate every position to every other position in a single parallel pass. Each token produces three vectors via linear projections — a <strong>Query</strong> (what it is looking for), a <strong>Key</strong> (what it offers), and a <strong>Value</strong> (what it contains). The output for a token is a weighted sum of all values, where the weights are the query–key similarities. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Self-attention lets a sequence model relate every position to every other position in a single parallel pass. Each token produces three vectors via linear projections — a <strong>Query</strong> (what it is looking for), a <strong>Key</strong> (what it offers), and a <strong>Value</strong> (what it contains). The output for a token is a weighted sum of all values, where the weights are the query–key similarities.</p>',
            '<p>You use self-attention: query, key, value with matrix math when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Self-Attention: Query, Key, Value with Matrix Math

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Self-Attention: Query, Key, Value with Matrix Math sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Self-Attention: Query, Key, Value with Matrix Math with Python',
            code: `# Self-Attention: Query, Key, Value with Matrix Math — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
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
            'Mistake 1: Forgetting the scale factor (fix: without 1/√dₖ, large dₖ pushes softmax to one-hot rows and gradients vanish)',
            'Mistake 2: Applying softmax over the wrong axis (fix: softmax must be over keys (dim=-1) so each query row sums to 1)',
            'Mistake 3: Not masking future tokens in a decoder (fix: add −∞ above the diagonal before softmax for causal attention)',
            'Mistake 4: Storing the full n×n attention for very long sequences (fix: use FlashAttention or chunked/sparse attention for n > 4K)'
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
          text: '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
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
            'Self-attention: Q = XW^Q, K = XW^K, V = XW^V; output = softmax(QKᵀ/√dₖ)V',
            'The scale 1/√dₖ prevents softmax saturation in high dimensions',
            'Causal masking (−∞ above diagonal) enables autoregressive decoders',
            'Self-attention is O(n²) in compute and memory — the long-context bottleneck',
            'Every output token is a weighted average of all value vectors'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What roles do Q, K, and V play in attention?
Ans: Q is what the current token is looking for; K is what each position offers for comparison; V is the content that gets aggregated once the weights are computed.`,
            `Q2: Why divide by √dₖ and not dₖ?
Ans: The variance of the dot product of two independent random vectors of dimension dₖ with unit variance grows as dₖ; √dₖ is the standard deviation, so dividing by it normalizes the variance to ~1 and keeps softmax well-conditioned.`,
            `Q3: How does a causal mask prevent information leakage during training?
Ans: It sets the score for every future position to −∞, so after softmax those positions have weight 0 — a token can only attend to itself and earlier tokens.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Self-Attention: Query, Key, Value with Matrix Math</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Self-Attention: Query, Key, Value with Matrix Math")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multi-head-attention': {
      title: 'Multi-Head Attention: Parallel Attention Heads',
      subtitle: 'Running several attention operations in parallel to capture different relations',
      sections: [
        {
          heading: 'What is Multi-Head Attention: Parallel Attention Heads?',
          text: 'Multi-Head Attention: Parallel Attention Heads is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Multi-Head Attention: Parallel Attention Heads provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use multi-head attention: parallel attention heads when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multi-Head Attention: Parallel Attention Heads

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multi-Head Attention: Parallel Attention Heads sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Multi-Head Attention: Parallel Attention Heads with Python',
            code: `# Multi-Head Attention: Parallel Attention Heads — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
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
            'Mistake 1: Assuming more heads always help (fix: 8–16 is typical; beyond that, heads often become redundant and waste parameters)',
            'Mistake 2: Forgetting that d_model must be divisible by h (fix: choose h to divide d_model; otherwise reshape fails)',
            'Mistake 3: Using full (non-causal) attention in a decoder head (fix: the causal mask must apply to every head)',
            'Mistake 4: Concatenating heads in the wrong axis (fix: concatenate along the feature axis, then apply W^O)'
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
          text: '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
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
            'Multi-head attention runs h parallel attention operations, each over d_model/h dimensions',
            'Heads are concatenated and projected back to d_model with W^O',
            'Total compute is roughly constant versus a single head; relations captured multiply',
            'Heads specialize to different relation types (syntax, coreference, position)',
            '8–16 heads is common; too many tiny heads reduce per-head capacity'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: If d_model = 512 and you use 16 heads, what is d_k per head?
Ans: d_k = d_model / h = 512 / 16 = 32 dimensions per head.`,
            `Q2: Why does multi-head attention not multiply the total compute by h?
Ans: Each head operates on d_model/h dimensions, so the per-head cost is smaller by h; summed across h heads the compute returns to roughly O(n²·d_model).`,
            `Q3: What is the purpose of the final W^O projection?
Ans: It mixes the concatenated head outputs back into the model dimension d_model, letting each head contribute to every output feature.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multi-Head Attention: Parallel Attention Heads</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multi-Head Attention: Parallel Attention Heads")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'norm-residual-ffn': {
      title: 'Layer Normalization, Residual Connections, and the Feed-Forward Network',
      subtitle: 'The three remaining ingredients that make deep transformers trainable',
      sections: [
        {
          heading: 'What is Layer Normalization, Residual Connections, and the Feed-Forward Network?',
          text: 'Layer Normalization, Residual Connections, and the Feed-Forward Network is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Layer Normalization, Residual Connections, and the Feed-Forward Network provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use layer normalization, residual connections, and the feed-forward network when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Layer Normalization, Residual Connections, and the Feed-Forward Network

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Layer Normalization, Residual Connections, and the Feed-Forward Network sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Layer Normalization, Residual Connections, and the Feed-Forward Network with Python',
            code: `# Layer Normalization, Residual Connections, and the Feed-Forward Network — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
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
            'Mistake 1: Using BatchNorm in transformers (fix: use LayerNorm/RMSNorm; BatchNorm depends on the batch and breaks for variable lengths and single-token decoding)',
            'Mistake 2: Forgetting residual connections in deep stacks (fix: every sublayer needs x + Sublayer(x); without it, deep transformers will not train)',
            'Mistake 3: Using post-norm for very deep models without warmup (fix: prefer pre-norm for stability, or use warmup + careful init for post-norm)',
            'Mistake 4: Setting d_ff too small (fix: 4× d_model is standard; smaller FFN underuses the per-token non-linear capacity)'
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
          text: '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
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
            'Residual connections add input to sublayer output, enabling deep, trainable stacks',
            'LayerNorm stabilizes activations per token; RMSNorm drops mean-centering for speed (Llama)',
            'Pre-norm (x + Sublayer(LN(x))) is more stable than the original post-norm',
            'The FFN is a position-wise two-layer MLP, often 4× expansion, with ReLU/GELU/SwiGLU',
            'A block = MHA sublayer + FFN sublayer, each with residual + norm'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is LayerNorm used instead of BatchNorm in transformers?
Ans: LayerNorm normalizes per token across features and does not depend on batch composition, so it works for variable-length sequences and single-token autoregressive decoding.`,
            `Q2: What does the position-wise FFN do that attention does not?
Ans: Attention mixes information across positions; the FFN applies a non-linear transformation within each position independently, giving per-token computation capacity.`,
            `Q3: Why is pre-norm generally easier to train than post-norm?
Ans: Pre-norm normalizes the input to each sublayer, keeping activations well-scaled and letting gradients flow directly through residuals — deep stacks train more stably.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Layer Normalization, Residual Connections, and the Feed-Forward Network</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Layer Normalization, Residual Connections, and the Feed-Forward Network")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'positional-encodings': {
      title: 'Positional Encodings: Sinusoidal, Learned, and RoPE',
      subtitle: 'Injecting order into a permutation-equivariant attention operator',
      sections: [
        {
          heading: 'What is Positional Encodings: Sinusoidal, Learned, and RoPE?',
          text: 'Positional Encodings: Sinusoidal, Learned, and RoPE is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Positional Encodings: Sinusoidal, Learned, and RoPE provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use positional encodings: sinusoidal, learned, and rope when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Positional Encodings: Sinusoidal, Learned, and RoPE

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Positional Encodings: Sinusoidal, Learned, and RoPE sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Positional Encodings: Sinusoidal, Learned, and RoPE with Python',
            code: `# Positional Encodings: Sinusoidal, Learned, and RoPE — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
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
          heading: 'Comparison',
          table: {
            headers: [
              'Method',
              'Learned?',
              'Position Type',
              'Extrapolation',
              'Used by'
            ],
            rows: [
              [
                'Sinusoidal',
                'No',
                'Absolute',
                'Yes (free, but weak)',
                'Vaswani 2017'
              ],
              [
                'Learned absolute',
                'Yes',
                'Absolute',
                'No (capped at max_len)',
                'GPT-2/3, BERT, T5'
              ],
              [
                'RoPE',
                'No',
                'Relative',
                'Yes (with NTK/YaRN scaling)',
                'Llama, Mistral, Qwen'
              ],
              [
                'ALiBi',
                'No',
                'Relative (bias on scores)',
                'Yes',
                'BLOOM, MPT'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Removing positional encoding entirely (fix: attention is permutation-equivariant; without positions the model cannot distinguish word order)',
            'Mistake 2: Expecting learned absolute embeddings to work beyond their max length (fix: use RoPE/ALiBi or apply position interpolation for long context)',
            'Mistake 3: Applying RoPE only to Q and not K (fix: both Q and K must be rotated so their dot product depends on relative position)',
            'Mistake 4: Forgetting that RoPE pairs dimensions (fix: implementation rotates pairs (2i, 2i+1); an odd dimension needs padding)'
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
          text: '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
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
            'Self-attention is permutation-equivariant; positional encodings inject order',
            'Sinusoidal encodings are fixed and extrapolate but can be suboptimal',
            'Learned absolute embeddings are simple and strong but cap context length',
            'RoPE rotates Q and K so attention depends on relative position; used by Llama/Mistral/Qwen',
            'ALiBi adds a distance bias to scores and extrapolates well at no parameter cost'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does self-attention need positional encoding at all?
Ans: The attention operator is permutation-equivariant — without positions, it produces the same output for any reordering of the input tokens, so it cannot model word order.`,
            `Q2: What makes RoPE a relative positional encoding?
Ans: It rotates Q and K by angles proportional to their absolute positions; the resulting dot product depends only on the difference of those angles, i.e., the relative offset, not the absolute positions.`,
            `Q3: Why do learned absolute embeddings fail to extrapolate to longer contexts?
Ans: They store one vector per position up to a maximum length; positions beyond max_len have no learned vector, so the model has no signal there.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Positional Encodings: Sinusoidal, Learned, and RoPE</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Positional Encodings: Sinusoidal, Learned, and RoPE")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'gpt-architecture': {
      title: 'The GPT Block Stack and Full Forward Pass',
      subtitle: 'Wiring self-attention, FFN, norm, and residuals into a decoder-only transformer',
      sections: [
        {
          heading: 'What is The GPT Block Stack and Full Forward Pass?',
          text: 'The GPT Block Stack and Full Forward Pass is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The GPT Block Stack and Full Forward Pass provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use the gpt block stack and full forward pass when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — The GPT Block Stack and Full Forward Pass

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: The GPT Block Stack and Full Forward Pass sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'The GPT Block Stack and Full Forward Pass with Python',
            code: `# The GPT Block Stack and Full Forward Pass — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
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
            'Mistake 1: Using non-causal attention in a decoder (fix: the self-attention must be masked so tokens cannot see the future)',
            'Mistake 2: Forgetting to shift labels for the LM loss (fix: predict token i+1 from position i; align logits[:-1] with targets[1:])',
            'Mistake 3: Not using a KV cache at inference (fix: cache K,V per layer to avoid O(n²) recomputation per generated token)',
            'Mistake 4: Confusing decoder-only with encoder-decoder (fix: GPT/Llama/Claude are decoder-only; T5/BART are encoder-decoder)'
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
          text: '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
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
            'GPT is decoder-only: embeddings → L blocks (masked MHA + FFN + residuals + pre-norm) → LM head',
            'The LM head projects to vocab logits; weights are often tied to the input embeddings',
            'Loss is next-token cross-entropy with shifted labels',
            'Generation samples one token at a time, appending and re-feeding (with a KV cache)',
            'Decoder-only is the dominant architecture for modern general-purpose LLMs'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is the self-attention in a GPT decoder masked?
Ans: So that predicting token i+1 only conditions on tokens 1..i, preventing the model from seeing future tokens during training and enabling strict autoregressive generation.`,
            `Q2: What is weight tying in the LM head?
Ans: Reusing the input token embedding matrix as the output projection (transposed), so the same matrix maps token→vector and vector→logits, reducing parameters and often improving quality.`,
            `Q3: Why does the LM loss use shifted labels?
Ans: Position i predicts token i+1, so the model is trained on (logits[:-1], targets[1:]) — predicting the next token, not the current one.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>The GPT Block Stack and Full Forward Pass</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — The GPT Block Stack and Full Forward Pass")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'mini-gpt-pytorch': {
      title: 'Building a Mini-GPT from Scratch in PyTorch',
      subtitle: 'A complete, runnable small transformer decoder for character-level language modeling',
      sections: [
        {
          heading: 'What is Building a Mini-GPT from Scratch in PyTorch?',
          text: 'Building a Mini-GPT from Scratch in PyTorch is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Building a Mini-GPT from Scratch in PyTorch provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use building a mini-gpt from scratch in pytorch when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Building a Mini-GPT from Scratch in PyTorch

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Building a Mini-GPT from Scratch in PyTorch sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Building a Mini-GPT from Scratch in PyTorch with Python',
            code: `# Building a Mini-GPT from Scratch in PyTorch — tokenization sketch (requires transformers)
try:
    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("gpt2")
    ids = tok.encode("Large language models predict the next token.")
    print("Token IDs:", ids[:8], "... vocab size:", tok.vocab_size)
except Exception as e:
    print("Install transformers for live demo:", e)`,
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
            'Mistake 1: Forgetting the causal mask (fix: set is_causal=True, or add a −∞ upper-triangular mask before softmax)',
            'Mistake 2: Misaligning input/target for the LM loss (fix: logits[:, :-1] predicts targets[:, 1:])',
            'Mistake 3: Not clipping gradients (fix: clip_grad_norm_ to 1.0 stabilizes training of even small transformers)',
            'Mistake 4: Reusing the LM head weights incorrectly (fix: assign head.weight = tok.weight so the same matrix maps both ways)'
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
          text: '<strong>Anthropic — Claude training.</strong> LLMs are trained on trillions of tokens with scaling laws governing loss vs compute. Instruction tuning + RLHF align models for helpful, harmless responses at production scale.',
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
            'A GPT is: token+pos embeddings → L pre-norm blocks (causal MHA + FFN) → norm → tied LM head',
            `PyTorch's scaled_dot_product_attention(is_causal=True) gives fast fused causal attention`,
            'Pre-norm + RMSNorm + weight tying match the Llama/Mistral design',
            'The training loop predicts next tokens with shifted-label cross-entropy and AdamW',
            'The same ~110-line skeleton scales to real models by changing hyperparameters and swapping RoPE/SwiGLU'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is the LM loss computed on logits[:, :-1] and targets[:, 1:]?
Ans: Position i predicts token i+1; shifting by one aligns each position's output with the next token as its target.`,
            `Q2: What does weight tying buy you?
Ans: It reuses the input embedding matrix as the output projection, cutting parameters and often improving quality because token meaning is consistent in and out.`,
            `Q3: How would you replace the learned positional embedding with RoPE in this code?
Ans: Remove self.pos, and rotate Q and K inside CausalSelfAttention by angles proportional to their positions, so the dot product depends on relative offset.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Building a Mini-GPT from Scratch in PyTorch</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Building a Mini-GPT from Scratch in PyTorch")
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
