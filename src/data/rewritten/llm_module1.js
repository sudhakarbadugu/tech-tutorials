// large language models — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js llm_module1.js

export const llmModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Large Language Models',
    topics: [
      {
        id: 'evolution',
        title: 'Evolution: N-gram to RNN to Transformer to GPT/BERT'
      },
      {
        id: 'scaling-laws',
        title: 'Scaling Laws and Emergent Abilities'
      },
      {
        id: 'tokenization',
        title: 'Tokenization Deep Dive (BPE, WordPiece, SentencePiece)'
      },
      {
        id: 'context-window',
        title: 'Context Window and Attention Complexity'
      },
      {
        id: 'foundations-recap',
        title: 'Foundations Recap: Representations, Embeddings, Attention'
      }
    ]
  }
};

export const llmModule1Content = {
  module1: {
    evolution: {
      title: 'Evolution: N-gram to RNN to Transformer to GPT/BERT',
      subtitle: 'How language modeling evolved from counting to deep neural prediction',
      sections: [
        {
          heading: 'What is a Language Model?',
          text: 'A <strong>Language Model (LM)</strong> assigns a probability to a sequence of words and predicts the likelihood of the next word given all previous words: <strong>P(wₙ | w₁, w₂, ..., wₙ₋₁)</strong>. Modern Large Language Models (LLMs) scale this idea to billions of parameters and trillions of tokens, but the core idea — learning the patterns of language from data — remains unchanged.',
          list: [
            'Predicts the next token in a sequence based on context',
            'Trained on vast text corpora (books, web pages, code)',
            'Foundation for translation, summarization, chatbots, and search',
            'Modern LLMs are simply very large, pre-trained neural language models'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Language Model (LM)</strong> assigns a probability to a sequence of words and predicts the likelihood of the next word given all previous words: <strong>P(wₙ | w₁, w₂, ..., wₙ₋₁)</strong>. Modern Large Language Models (LLMs) scale this idea to billions of parameters and trillions of tokens, but the core idea — learning the patterns of language from data — remains unchanged. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Language Model (LM)</strong> assigns a probability to a sequence of words and predicts the likelihood of the next word given all previous words: <strong>P(wₙ | w₁, w₂, ..., wₙ₋₁)</strong>. Modern Large Language Models (LLMs) scale this idea to billions of parameters and trillions of tokens, but the core idea — learning the patterns of language from data — remains unchanged. Predicts the next token in a sequence based on context Trained on vast text corpora (books, web pages, code) Foundation for translation, summarization, chatbots, and search Modern LLMs are simply very large, pre-trained neural language models</p>',
            '<p>You use evolution: n-gram to rnn to transformer to gpt/bert when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Evolution: N-gram to RNN to Transformer to GPT/BERT

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Evolution: N-gram to RNN to Transformer to GPT/BERT sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Evolution: N-gram to RNN to Transformer to GPT/BERT with Python',
            code: `# Evolution: N-gram to RNN to Transformer to GPT/BERT — tokenization sketch (requires transformers)
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
            'Mistake 1: Assuming LLMs "understand" meaning (fix: they model statistical patterns, not true comprehension — probe for factuality and reasoning)',
            'Mistake 2: Ignoring context window limits (fix: split long inputs or use retrieval-augmented generation)',
            'Mistake 3: Treating all language models as black boxes (fix: probe intermediate layers and attention weights for interpretability)',
            'Mistake 4: Forgetting the Markov limitation of n-grams when comparing to neural methods (fix: only neural/attention models capture long-range dependencies)'
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
          text: 'Each generation of language models powers products you use every day.',
          list: [
            '<strong>N-gram autocomplete:</strong> Early mobile keyboards ranked next-word candidates by bigram/trigram probability',
            '<strong>Word2Vec retrieval:</strong> Semantic search and recommendation engines use embedding similarity instead of keyword matching',
            '<strong>LSTM translation:</strong> Google Neural Machine Translation (2016) used 8-layer LSTM encoder-decoders',
            '<strong>BERT search:</strong> Google Search uses BERT to process full query context bidirectionally',
            '<strong>GPT chat:</strong> ChatGPT, Claude, and Gemini use large transformer decoders with instruction tuning + RLHF'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'N-grams count; neural models learn dense representations; LLMs scale representations massively',
            'RNNs added memory via hidden state; LSTMs/GRUs fixed vanishing gradients with additive gates',
            'Attention removed the fixed-context-vector bottleneck and enabled the Transformer',
            'BERT is a bidirectional encoder (understanding); GPT is an autoregressive decoder (generation)',
            'Every modern LLM (GPT-4, Claude, Llama) is a scaled, aligned transformer decoder'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does the probability of a long sentence become vanishingly small?
Ans: It is a product of many probabilities ≤ 1, so the value shrinks exponentially with length — this motivates working in log-space and perplexity.`,
            `Q2: What is the key innovation of LSTM over vanilla RNNs?
Ans: The additive cell-state update (Cₜ = fₜ⊙Cₜ₋₁ + iₜ⊙C̃ₜ) lets gradients flow directly through time without repeated multiplication by small weights.`,
            `Q3: What problem does attention solve in encoder-decoder models?
Ans: It removes the fixed-size context-vector bottleneck by letting the decoder dynamically focus on all encoder hidden states.`,
            `Q4: Why can't BERT be used directly for text generation?
Ans: BERT is trained with masked LM and bidirectional attention; it is not designed to autoregressively generate tokens one at a time.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Evolution: N-gram to RNN to Transformer to GPT/BERT</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Evolution: N-gram to RNN to Transformer to GPT/BERT")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'scaling-laws': {
      title: 'Scaling Laws and Emergent Abilities',
      subtitle: 'Why bigger models, more data, and more compute keep working',
      sections: [
        {
          heading: 'What Are Scaling Laws?',
          text: `<strong>Scaling laws</strong> are empirical relationships that predict how a language model's loss (and downstream capability) improves as a function of model size (parameters N), dataset size (tokens D), and training compute (FLOPs C). The landmark <strong>Kaplan et al. (2020)</strong> paper showed that test loss follows smooth power laws across many orders of magnitude — small predictable gains compound into large capability jumps when extrapolated.`
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p><strong>Scaling laws</strong> are empirical relationships that predict how a language model's loss (and downstream capability) improves as a function of model size (parameters N), dataset size (tokens D), and training compute (FLOPs C). The landmark <strong>Kaplan et al. (2020)</strong> paper showed that test loss follows smooth power laws across many orders of magnitude — small predictable gains compound into large capability jumps when extrapolated. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, <strong>Scaling laws</strong> are empirical relationships that predict how a language model's loss (and downstream capability) improves as a function of model size (parameters N), dataset size (tokens D), and training compute (FLOPs C). The landmark <strong>Kaplan et al. (2020)</strong> paper showed that test loss follows smooth power laws across many orders of magnitude — small predictable gains compound into large capability jumps when extrapolated.</p>`,
            '<p>You use scaling laws and emergent abilities when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Scaling Laws and Emergent Abilities

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Scaling Laws and Emergent Abilities sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Scaling Laws and Emergent Abilities with Python',
            code: `# Scaling Laws and Emergent Abilities — tokenization sketch (requires transformers)
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
            'Mistake 1: Using Kaplan ratios today (fix: prefer Chinchilla-optimal ~20 tokens/param for compute-efficient training)',
            'Mistake 2: Claiming a model "cannot do X" because a 1B model fails (fix: many abilities emerge only past tens of billions of parameters; scale the test before concluding impossibility)',
            'Mistake 3: Reading a sharp emergence curve as a phase transition (fix: re-measure with a continuous metric; the jump may be a metric artifact)',
            'Mistake 4: Ignoring data quality when scaling data (fix: garbage tokens do not count toward D; dedup and filter aggressively)'
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
          text: 'Scaling laws shaped the entire strategy of frontier LLM development.',
          list: [
            '<strong>Model sizing:</strong> Labs pick N and D using Chinchilla-optimal ratios to maximize quality per dollar',
            '<strong>Data pipelines:</strong> Massive investment in dedup, filtering, and synthetic data to reach the ~20 tokens/param target',
            '<strong>Capability forecasting:</strong> Use scaling curves to predict the model size needed to hit a target benchmark score before spending compute',
            '<strong>Reasoning models:</strong> o1/o3-style systems trade some parameter scale for test-time compute scaling, opening a second axis of improvement'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Scaling laws relate test loss to parameters N, data D, and compute C as smooth power laws',
            'Kaplan et al. (2020) established the basic power-law form; Chinchilla (2022) corrected the optimal tokens/param to ~20',
            'Emergent abilities appear above scale thresholds but may be partly metric artifacts',
            'Scaling justified the race to large pre-trained models and data-rich training',
            'Test-time compute is a complementary scaling axis to parameter scale'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What did Chinchilla change about how we allocate compute between N and D?
Ans: It showed models were undertrained; the compute-optimal split grows N and D together at ~20 tokens per parameter rather than over-investing in parameters.`,
            `Q2: Why is the claim of "sharp emergence" sometimes disputed?
Ans: Many sharp jumps are artifacts of discontinuous exact-match metrics; continuous metrics often show smooth improvement with scale.`,
            `Q3: If you have a fixed compute budget C ≈ 6ND, how do you pick N and D under Chinchilla?
Ans: Solve for the balanced split where N and D grow together at ~20 tokens/param, so D = 20N and C ≈ 6·N·20N = 120N², giving N ≈ √(C/120).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Scaling Laws and Emergent Abilities</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Scaling Laws and Emergent Abilities")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    tokenization: {
      title: 'Tokenization Deep Dive (BPE, WordPiece, SentencePiece)',
      subtitle: 'Turning raw text into the atomic units language models actually process',
      sections: [
        {
          heading: 'What is Tokenization Deep Dive (BPE, WordPiece, SentencePiece)?',
          text: 'Tokenization Deep Dive (BPE, WordPiece, SentencePiece) is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Tokenization Deep Dive (BPE, WordPiece, SentencePiece) provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use tokenization deep dive (bpe, wordpiece, sentencepiece) when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Tokenization Deep Dive (BPE, WordPiece, SentencePiece)

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Tokenization Deep Dive (BPE, WordPiece, SentencePiece) sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Tokenization Deep Dive (BPE, WordPiece, SentencePiece) with Python',
            code: `# Tokenization Deep Dive (BPE, WordPiece, SentencePiece) — tokenization sketch (requires transformers)
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
          heading: 'Comparison: BPE vs WordPiece vs SentencePiece',
          table: {
            headers: [
              'Method',
              'Merge Criterion',
              'Space Handling',
              'Typical Users'
            ],
            rows: [
              [
                'BPE',
                'Most frequent pair',
                'Pre-tokenize on whitespace',
                'GPT-2/3/4, Llama, RoBERTa'
              ],
              [
                'Byte-level BPE',
                'Most frequent byte pair',
                'No <UNK> (any bytes encodable)',
                'GPT-2+, Llama'
              ],
              [
                'WordPiece',
                'Maximize corpus likelihood',
                'WordPiece continuation "##"',
                'BERT, DistilBERT'
              ],
              [
                'SentencePiece (BPE)',
                'Most frequent pair',
                '"▁" marks spaces; raw stream',
                'T5, ALBERT'
              ],
              [
                'SentencePiece (Unigram)',
                'Probabilistic pruning',
                '"▁" marks spaces; raw stream',
                'Llama, XLNet, mT5'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring how data was collected (fix: document sampling design before analysis).',
            'Mistake 2: Reporting only p-values without effect size (fix: add Cohen d, R², or CI).',
            'Mistake 3: Multiple comparisons without correction (fix: Bonferroni or FDR when testing many hypotheses).',
            'Mistake 4: Treating non-random samples as representative (fix: limit claims to the sampled population).'
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
          text: 'Tokenization is invisible to users but determines cost, speed, and fairness.',
          list: [
            '<strong>Cost pricing:</strong> APIs bill per token; a sentence in Hindi may cost 3× a sentence in English due to token fragmentation',
            '<strong>Context limits:</strong> A 128K "context window" holds fewer non-English words because each word costs more tokens',
            `<strong>Code models:</strong> Specialized tokenizers (e.g., GPT-4's) include many code tokens so indentation and identifiers compress well`,
            '<strong>Multi-lingual coverage:</strong> SentencePiece + large shared vocab lets Llama and mT5 handle 100+ languages'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Models process token IDs, not words or characters; tokenization is a first-class design decision',
            'BPE merges the most frequent pairs; GPT and Llama use byte-level BPE',
            'WordPiece maximizes corpus likelihood; BERT uses it with "##" continuation markers',
            'SentencePiece is language-agnostic, treats spaces as characters, and powers T5/Llama',
            'Subword tokenization balances vocabulary size, OOV handling, and sequence length'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does byte-level BPE never produce an <UNK> token?
Ans: It operates on UTF-8 bytes (256 possible values), so any byte sequence — including emoji, typos, and rare scripts — can be encoded as some combination of byte tokens.`,
            `Q2: What is the main difference between BPE and WordPiece merge selection?
Ans: BPE merges the most frequent adjacent pair; WordPiece merges the pair that maximizes the likelihood of the corpus under the resulting vocabulary.`,
            `Q3: Why is SentencePiece preferred for languages like Chinese or Thai?
Ans: Those languages have no whitespace word boundaries; SentencePiece treats the input as a raw character stream with "▁" space markers, so it needs no language-specific pre-tokenization.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Tokenization Deep Dive (BPE, WordPiece, SentencePiece)</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Tokenization Deep Dive (BPE, WordPiece, SentencePiece)")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'context-window': {
      title: 'Context Window and Attention Complexity',
      subtitle: 'Why long context is hard, and how the O(n²) attention cost drives architecture design',
      sections: [
        {
          heading: 'What Is a Context Window?',
          text: 'The <strong>context window</strong> is the maximum number of tokens a model can attend to in a single forward pass — the sum of the prompt and the generated output. Early GPT-2 had 1,024 tokens; GPT-4 Turbo reaches 128K; some 2024–2025 models reach 1M+ tokens. The window sets a hard limit on how much text, code, or retrieved context a model can reason over at once.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>context window</strong> is the maximum number of tokens a model can attend to in a single forward pass — the sum of the prompt and the generated output. Early GPT-2 had 1,024 tokens; GPT-4 Turbo reaches 128K; some 2024–2025 models reach 1M+ tokens. The window sets a hard limit on how much text, code, or retrieved context a model can reason over at once. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The <strong>context window</strong> is the maximum number of tokens a model can attend to in a single forward pass — the sum of the prompt and the generated output. Early GPT-2 had 1,024 tokens; GPT-4 Turbo reaches 128K; some 2024–2025 models reach 1M+ tokens. The window sets a hard limit on how much text, code, or retrieved context a model can reason over at once.</p>',
            '<p>You use context window and attention complexity when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Context Window and Attention Complexity

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Context Window and Attention Complexity sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Context Window and Attention Complexity with Python',
            code: `# Context Window and Attention Complexity — tokenization sketch (requires transformers)
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
            'Mistake 1: Assuming a bigger context window means better long-context performance (fix: measure retrieval/recall at depth; nominal ≠ effective)',
            'Mistake 2: Ignoring KV-cache memory when planning serving (fix: a 70B model at 128K context can need ~80 GB of KV cache alone)',
            'Mistake 3: Stuffing the full context when retrieval would do (fix: RAG over small chunks is often cheaper and more accurate than 200K-token prompts)',
            'Mistake 4: Forgetting that cost scales with token count (fix: every API call is billed per token; long prompts are expensive and slow)'
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
          text: 'Context window size shapes what products are possible.',
          list: [
            '<strong>Document Q&A:</strong> 128K context lets a model read a whole book or codebase in one pass',
            '<strong>Agentic memory:</strong> Long context holds the full tool-call history for an agent run',
            '<strong>Code refactoring:</strong> Whole-repository context enables cross-file edits without retrieval',
            '<strong>Cost control:</strong> For high-volume APIs, shorter prompts + retrieval (RAG) often beat giant-context single-shot calls'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'The context window is the max tokens a model attends to in one forward pass',
            'Self-attention is O(n²) in time and memory — the main scalability bottleneck',
            'The KV cache turns per-step generation from O(n²) into O(n) but uses O(n·d·L) memory',
            'FlashAttention, sparse/linear attention, and paged KV management extend usable context',
            'Effective context (measured by retrieval at depth) is often smaller than the nominal window'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does attention cost scale as O(n²) with sequence length?
Ans: Self-attention computes a similarity between every pair of positions, producing an n×n attention matrix that requires O(n²) memory and O(n²·d) compute.`,
            `Q2: How does the KV cache change per-token generation cost?
Ans: By caching Keys and Values for past tokens, each new token only computes its own Query and attends to the cache, reducing per-step cost from O(n²) to O(n).`,
            `Q3: Why might a model with a 128K context window still fail on a 50K-token retrieval task?
Ans: "Lost in the middle" and positional-extrapolation failures mean effective context can be much smaller than nominal context; retrieval accuracy degrades with depth and position.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Context Window and Attention Complexity</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Context Window and Attention Complexity")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'foundations-recap': {
      title: 'Foundations Recap: Representations, Embeddings, Attention',
      subtitle: 'Consolidating the core concepts that every LLM builds on',
      sections: [
        {
          heading: 'What is Foundations Recap: Representations, Embeddings, Attention?',
          text: 'Foundations Recap: Representations, Embeddings, Attention is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Foundations Recap: Representations, Embeddings, Attention provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use foundations recap: representations, embeddings, attention when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Foundations Recap: Representations, Embeddings, Attention

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Foundations Recap: Representations, Embeddings, Attention sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Foundations Recap: Representations, Embeddings, Attention with Python',
            code: `# Foundations Recap: Representations, Embeddings, Attention — tokenization sketch (requires transformers)
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
            'Mistake 1: Confusing the tokenizer with the model (fix: the tokenizer is a fixed preprocessing step; the model learns over its outputs)',
            'Mistake 2: Treating embeddings as universal truths (fix: they encode corpus bias and must be audited before deployment)',
            'Mistake 3: Assuming attention weights are explanations (fix: they correlate weakly with importance in deep layers; use gradient-based methods for interpretability)',
            'Mistake 4: Ignoring that scaling laws assume high-quality data (fix: deduplicated, filtered tokens; garbage in, garbage out)'
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
            'Foundations Recap: Representations, Embeddings, Attention: know when and why before how.',
            'Always pair estimates with uncertainty (CI).',
            'Check assumptions before parametric tests.',
            'Report effect sizes, not just p-values.',
            'Reproducibility: seed, document, version data.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why are contextual embeddings better than static ones for polysemous words?
Ans: Static embeddings assign one vector per word type, so "bank" is the same in river and financial contexts; contextual embeddings condition the vector on surrounding tokens, disambiguating meaning.`,
            `Q2: What are the four core components every modern LLM composes?
Ans: A tokenizer, an embedding layer, stacked self-attention + feed-forward blocks, and an autoregressive next-token head.`,
            `Q3: Why is the scale factor 1/√dₖ needed in attention?
Ans: In high dimensions the dot products grow large, pushing softmax into regions with vanishing gradients; scaling keeps the softmax well-conditioned.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Foundations Recap: Representations, Embeddings, Attention</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Foundations Recap: Representations, Embeddings, Attention")
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
