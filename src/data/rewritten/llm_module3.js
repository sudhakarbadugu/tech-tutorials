// large language models — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js llm_module3.js

export const llmModule3Structure = {
  module3: {
    title: 'Module 3: Training & Fine-Tuning LLMs',
    topics: [
      {
        id: 'pretraining-objectives',
        title: 'Pre-Training Objectives: Autoregressive and Masked'
      },
      {
        id: 'fine-tuning-strategies',
        title: 'Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning'
      },
      {
        id: 'instruction-tuning',
        title: 'Instruction Tuning and FLAN'
      },
      {
        id: 'rlhf',
        title: 'RLHF: Reward Model + PPO'
      },
      {
        id: 'dpo',
        title: 'DPO: Direct Preference Optimization'
      }
    ]
  }
};

export const llmModule3Content = {
  module3: {
    'pretraining-objectives': {
      title: 'Pre-Training Objectives: Autoregressive and Masked',
      subtitle: 'The self-supervised tasks that turn a transformer into a language model',
      sections: [
        {
          heading: 'What Is Pre-Training?',
          text: '<strong>Pre-training</strong> is the first, most expensive stage of LLM development: train a transformer on a huge, generic text corpus using a <strong>self-supervised objective</strong> — no labels, just predict part of the input from the rest. The objective determines what the model learns to do (generate vs. fill in) and shapes its downstream strengths.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Pre-training</strong> is the first, most expensive stage of LLM development: train a transformer on a huge, generic text corpus using a <strong>self-supervised objective</strong> — no labels, just predict part of the input from the rest. The objective determines what the model learns to do (generate vs. fill in) and shapes its downstream strengths. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Pre-training</strong> is the first, most expensive stage of LLM development: train a transformer on a huge, generic text corpus using a <strong>self-supervised objective</strong> — no labels, just predict part of the input from the rest. The objective determines what the model learns to do (generate vs. fill in) and shapes its downstream strengths.</p>',
            '<p>You use pre-training objectives: autoregressive and masked when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Pre-Training Objectives: Autoregressive and Masked

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Pre-Training Objectives: Autoregressive and Masked sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Pre-Training Objectives: Autoregressive and Masked with Python',
            code: `# Pre-Training Objectives: Autoregressive and Masked — tokenization sketch (requires transformers)
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
          heading: 'Objective Comparison',
          table: {
            headers: [
              'Objective',
              'Architecture',
              'Context',
              'Best For',
              'Example Models'
            ],
            rows: [
              [
                'Autoregressive (next token)',
                'Decoder-only',
                'Causal (left-to-right)',
                'Generation, chat, code',
                'GPT, Llama, Mistral, Claude'
              ],
              [
                'Masked LM',
                'Encoder-only',
                'Bidirectional',
                'Classification, NER, QA',
                'BERT, RoBERTa, DeBERTa'
              ],
              [
                'Span corruption',
                'Encoder-decoder',
                'Encoder bi + decoder causal',
                'Translation, summarization',
                'T5, BART, mT5'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using MLM for a generative product (fix: MLM models are not autoregressive; use a decoder-only autoregressive objective)',
            'Mistake 2: Training on raw, un-deduplicated web data (fix: dedup drastically reduces memorization and raises effective data quality)',
            'Mistake 3: Treating all tokens equally in the loss (fix: ignore padding/unknown tokens; consider loss weighting on rare-but-important tokens)',
            'Mistake 4: Skipping warmup and high learning-rate phases (fix: large pre-training needs LR warmup + cosine decay for stability)'
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
            'Autoregressive (next-token) LM is the GPT objective; best for generation',
            'Masked LM is the BERT objective; bidirectional, best for understanding',
            'Span corruption (T5/BART) unifies understanding and generation in encoder-decoders',
            'Decoder-only + autoregressive is the dominant choice for modern general LLMs',
            'Pre-training data quality and deduplication matter as much as the objective'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is an MLM model not directly usable for text generation?
Ans: MLM is trained to fill masked tokens from bidirectional context, not to autoregressively sample one token at a time conditioned only on the past.`,
            `Q2: What does the BERT 80/10/10 masking split achieve?
Ans: It reduces the train/test distribution mismatch by not always feeding the model the literal [MASK] token, so fine-tuning inputs (which contain no [MASK]) look closer to pre-training inputs.`,
            `Q3: Why did the field converge on decoder-only autoregressive models for general LLMs?
Ans: A single unified generative objective scales cleanly, handles any task via prompting, and avoids the encoder/decoder split — simpler, and empirically strongest at scale.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Pre-Training Objectives: Autoregressive and Masked</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Pre-Training Objectives: Autoregressive and Masked")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'fine-tuning-strategies': {
      title: 'Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning',
      subtitle: 'Adapting foundation models to specific tasks efficiently',
      sections: [
        {
          heading: 'What is Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning?',
          text: 'Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use fine-tuning strategies: full, lora, qlora, prefix tuning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning with Python',
            code: `# Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning — tokenization sketch (requires transformers)
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
            'Mistake 1: Full fine-tuning a huge model for a small dataset (fix: use LoRA/QLoRA to avoid overfitting and forgetting)',
            'Mistake 2: Too-high learning rate for fine-tuning (fix: use 1e-5 to 5e-5, not the pre-training rate)',
            'Mistake 3: Forgetting to merge LoRA weights before serving (fix: W = W₀ + B·A can be folded in for zero added latency)',
            'Mistake 4: Ignoring catastrophic forgetting (fix: replay general data or use PEFT that freezes the base)'
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
            'Full fine-tuning updates all params; highest accuracy, highest cost, risk of forgetting',
            'LoRA adds low-rank deltas BA to frozen weights; ~0.1% params, mergeable for zero-latency serving',
            'QLoRA = 4-bit NF4 base + LoRA; fine-tunes 70B on one GPU',
            'Prefix/prompt tuning adds trainable soft prompts; cheapest, weakest capacity',
            'Pick by budget and task: full (max acc), LoRA (general), QLoRA (huge model, one GPU), prefix (many tasks)'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does LoRA use a low rank r rather than full-rank deltas?
Ans: Empirically, fine-tuning updates live in a low-dimensional subspace; a rank-r factorization BA captures most of the useful update with ~0.1% of the parameters.`,
            `Q2: What two tricks beyond 4-bit weights make QLoRA memory-feasible for 70B models?
Ans: Double Quantization (quantize the quantization constants) and Paged Optimizers (page Adam states to CPU to avoid OOM spikes).`,
            `Q3: Why can prefix tuning hot-swap tasks at inference with near-zero overhead?
Ans: Only the small prefix vectors differ per task; the base model is frozen and shared, so switching tasks means swapping a few thousand vectors.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Fine-Tuning Strategies: Full, LoRA, QLoRA, Prefix Tuning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'instruction-tuning': {
      title: 'Instruction Tuning and FLAN',
      subtitle: 'Teaching pre-trained models to follow natural-language instructions',
      sections: [
        {
          heading: 'What Is Instruction Tuning?',
          text: 'A pre-trained LM predicts likely text, not necessarily <strong>helpful</strong> text. <strong>Instruction tuning</strong> fine-tunes on datasets of (instruction, input, output) triples so the model learns to understand and follow natural-language instructions across many tasks. It is the step that turns a next-token predictor into an assistant.',
          example: {
            title: 'Example: Instruction format',
            code: `Instruction: Translate the following
         sentence to French.

Input: The cat sat on the mat.

Output: Le chat s'est assis
         sur le tapis.

---

Instruction: Summarize the article
         in one sentence.

Input: [long article text]

Output: [one-sentence summary]`,
            output: 'Diverse instruction datasets teach generalizable obedience to commands.',
            type: 'code'
          }
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A pre-trained LM predicts likely text, not necessarily <strong>helpful</strong> text. <strong>Instruction tuning</strong> fine-tunes on datasets of (instruction, input, output) triples so the model learns to understand and follow natural-language instructions across many tasks. It is the step that turns a next-token predictor into an assistant. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A pre-trained LM predicts likely text, not necessarily <strong>helpful</strong> text. <strong>Instruction tuning</strong> fine-tunes on datasets of (instruction, input, output) triples so the model learns to understand and follow natural-language instructions across many tasks. It is the step that turns a next-token predictor into an assistant.</p>',
            '<p>You use instruction tuning and flan when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Instruction Tuning and FLAN

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Instruction Tuning and FLAN sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Instruction Tuning and FLAN with Python',
            code: `# Instruction Tuning and FLAN — tokenization sketch (requires transformers)
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
            'Mistake 1: Low-quality synthetic instructions (fix: filter aggressively; dedup with ROUGE; reject incoherent outputs)',
            'Mistake 2: Overfitting on a narrow task distribution (fix: mix many task types; FLAN-style breadth aids generalization)',
            'Mistake 3: Expecting instruction tuning alone to produce safe behavior (fix: instruction tuning teaches format; safety needs RLHF/Constitutional AI)',
            'Mistake 4: Ignoring format consistency across examples (fix: normalize templates so the model learns a stable instruction format)'
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
            'Instruction tuning fine-tunes on (instruction, input, output) triples to teach task-following',
            'FLAN aggregated 180+ tasks and showed zero-shot generalization to unseen tasks',
            'Self-instruct bootstraps instruction data from a strong teacher (Alpaca, Vicuna)',
            'Instruction tuning teaches format; RLHF/DPO teach preference and safety',
            'Quality can beat quantity — LIMA showed ~1K strong examples go far'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does instruction tuning add that pre-training does not?
Ans: It teaches the model to map natural-language instructions to outputs across many tasks, enabling zero-shot generalization to unseen instructions.`,
            `Q2: How does self-instruct reduce the labeling burden?
Ans: It uses a strong teacher model to generate both new instructions and their outputs, then fine-tunes a smaller student on the synthetic pairs — minimal human labeling needed.`,
            `Q3: Why is instruction tuning considered "shallow" alignment?
Ans: It mostly teaches format and task coverage via imitation; deeper alignment (helpfulness, harmlessness, honesty) requires preference optimization like RLHF or DPO.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Instruction Tuning and FLAN</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Instruction Tuning and FLAN")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    rlhf: {
      title: 'RLHF: Reward Model + PPO',
      subtitle: 'Aligning language models with human preferences via reinforcement learning',
      sections: [
        {
          heading: 'What is RLHF: Reward Model + PPO?',
          text: 'RLHF: Reward Model + PPO is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, RLHF: Reward Model + PPO provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use rlhf: reward model + ppo when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — RLHF: Reward Model + PPO

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: RLHF: Reward Model + PPO sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'RLHF: Reward Model + PPO with Python',
            code: `# RLHF: Reward Model + PPO — tokenization sketch (requires transformers)
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
            'Mistake 1: Skipping the KL penalty (fix: without it the model drifts and reward-hacks; keep β > 0)',
            'Mistake 2: Training the reward model on too few / biased comparisons (fix: collect diverse, high-quality pairwise data; validate the RM separately)',
            'Mistake 3: Letting the policy explore too far from π_ref (fix: increase β or use early stopping based on KL)',
            'Mistake 4: Trusting reward-model scores as ground truth (fix: the RM is a noisy proxy; always validate with held-out human eval)'
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
            'RLHF = SFT → reward model (Bradley–Terry on rankings) → PPO with a KL penalty to the reference',
            'The reward model is a scalar human-preference proxy trained on pairwise preferences',
            'PPO maximizes reward while the KL penalty keeps the model close to the SFT base',
            'It powers ChatGPT/Claude but is complex, costly, and prone to reward hacking',
            'Alternatives include DPO (no RM), Constitutional AI (AI feedback), and GRPO'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the role of the KL penalty in RLHF?
Ans: It keeps the learned policy close to the reference (SFT) model, preventing reward hacking and preserving fluency/general capability.`,
            `Q2: Why is the reward model trained on rankings rather than absolute scores?
Ans: Humans are more reliable at relative comparisons than absolute scoring; Bradley–Terry on pairwise winner/loser pairs is more robust to labeler noise.`,
            `Q3: Name two failure modes that RLHF introduces beyond pre-training/SFT.
Ans: Reward hacking (exploiting the RM) and distribution shift (the policy leaving the RM's reliable range).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>RLHF: Reward Model + PPO</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — RLHF: Reward Model + PPO")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    dpo: {
      title: 'DPO: Direct Preference Optimization',
      subtitle: 'Aligning with preferences without a reward model or RL loop',
      sections: [
        {
          heading: 'What Problem Does DPO Solve?',
          text: 'RLHF is powerful but complex: it needs a separate reward model and an unstable PPO loop with a KL penalty. <strong>Direct Preference Optimization (DPO)</strong> (Rafailov et al., 2023) re-derives the RLHF objective and shows it can be optimized <strong>directly</strong> with a simple classification loss on preference pairs — no reward model, no RL, no value function.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>RLHF is powerful but complex: it needs a separate reward model and an unstable PPO loop with a KL penalty. <strong>Direct Preference Optimization (DPO)</strong> (Rafailov et al., 2023) re-derives the RLHF objective and shows it can be optimized <strong>directly</strong> with a simple classification loss on preference pairs — no reward model, no RL, no value function. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, RLHF is powerful but complex: it needs a separate reward model and an unstable PPO loop with a KL penalty. <strong>Direct Preference Optimization (DPO)</strong> (Rafailov et al., 2023) re-derives the RLHF objective and shows it can be optimized <strong>directly</strong> with a simple classification loss on preference pairs — no reward model, no RL, no value function.</p>',
            '<p>You use dpo: direct preference optimization when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — DPO: Direct Preference Optimization

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: DPO: Direct Preference Optimization sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'DPO: Direct Preference Optimization with Python',
            code: `# DPO: Direct Preference Optimization — tokenization sketch (requires transformers)
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
            'Mistake 1: Using the wrong reference model (fix: π_ref must be the SFT model that produced the preference data; a mismatched reference breaks the derivation)',
            'Mistake 2: Too-high β (fix: large β keeps the policy pinned to the reference and learns little; β≈0.1 is typical)',
            'Mistake 3: Feeding DPO low-quality or inconsistent preferences (fix: DPO is offline and fully trusts the dataset; bad labels directly corrupt the policy)',
            'Mistake 4: Forgetting to freeze the reference model (fix: π_ref must be frozen; if it moves, the implicit reward is ill-defined)'
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
            'DPO re-derives RLHF so the reward is implicit in the policy relative to a frozen reference',
            'Loss: -log σ( β·(logπ(y_w)-logπ_ref(y_w)) - β·(logπ(y_l)-logπ_ref(y_l)) )',
            'No reward model, no PPO, no value function — just BCE on preference pairs',
            'Simpler and more stable than RLHF, but offline-only and sometimes slightly below peak RLHF',
            'Variants: iterative DPO, IPO, KTO, SimPO, ORPO each address a DPO limitation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does DPO eliminate the reward model?
Ans: It solves the RLHF objective analytically, expressing the reward as r(x,y) = β·log(π(y|x)/π_ref(y|x)) + const, so the reward is implicit in the policy and reference — no separate RM is trained.`,
            `Q2: What is the role of the frozen reference policy π_ref in DPO?
Ans: It is the baseline relative to which the implicit reward is measured; it must be the SFT model whose outputs were ranked in the preference data, and it stays frozen so the implicit reward stays well-defined.`,
            `Q3: Name one advantage and one disadvantage of DPO versus RLHF.
Ans: Advantage: far simpler and more stable (no RL loop or RM). Disadvantage: offline only — it cannot explore on-policy, so peak performance can be slightly lower than a well-tuned PPO+RM RLHF pipeline.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>DPO: Direct Preference Optimization</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — DPO: Direct Preference Optimization")
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
