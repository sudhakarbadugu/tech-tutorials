// large language models — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js llm_module5.js

export const llmModule5Structure = {
  module5: {
    title: 'Module 5: LLM Systems & Deployment',
    topics: [
      {
        id: 'quantization',
        title: 'Quantization: INT8, INT4, GPTQ, AWQ'
      },
      {
        id: 'vllm-serving',
        title: 'vLLM for High-Throughput Serving'
      },
      {
        id: 'model-merging',
        title: 'Model Merging with MergeKit'
      },
      {
        id: 'multi-gpu-inference',
        title: 'Multi-GPU Inference: Tensor and Pipeline Parallelism'
      },
      {
        id: 'safety-alignment',
        title: 'Safety and Alignment Considerations'
      }
    ]
  }
};

export const llmModule5Content = {
  module5: {
    quantization: {
      title: 'Quantization: INT8, INT4, GPTQ, AWQ',
      subtitle: 'Compressing LLM weights and activations to run on cheaper, smaller hardware',
      sections: [
        {
          heading: 'What is Quantization: INT8, INT4, GPTQ, AWQ?',
          text: 'Quantization: INT8, INT4, GPTQ, AWQ is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Quantization: INT8, INT4, GPTQ, AWQ provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use quantization: int8, int4, gptq, awq when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Quantization: INT8, INT4, GPTQ, AWQ

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Quantization: INT8, INT4, GPTQ, AWQ sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Quantization: INT8, INT4, GPTQ, AWQ with Python',
            code: `# Quantization: INT8, INT4, GPTQ, AWQ — tokenization sketch (requires transformers)
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
            'Mistake 1: Quantizing activations aggressively without calibration (fix: keep activations FP16, or use SmoothQuant/per-token dynamic quant)',
            'Mistake 2: Expecting INT4 with no grouping to match FP16 (fix: use group_size=64–128 or mixed precision for sensitive layers)',
            'Mistake 3: Picking a format your serving kernel does not accelerate (fix: match quant format to the inference engine — Marlin for GPTQ/AWQ on Ampere+, etc.)',
            'Mistake 4: Forgetting the calibration set matters (fix: use representative, in-distribution calibration data for GPTQ/AWQ)'
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
            'Quantization maps FP weights to lower-bit ints via scale (+zero point); halves memory per bit-width step',
            'PTQ is applied after training; QAT simulates quant during training for best accuracy',
            'GPTQ quantizes per-layer using Hessian-based error compensation; AWQ protects salient channels by scaling',
            'INT4 needs grouping/mixed precision; activations are often kept FP16 (W4A16)',
            'Match format to hardware: GPTQ/AWQ on GPU, GGUF on CPU/mixed, NF4 for QLoRA fine-tuning'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does AWQ scale "salient" channels rather than keep them in high precision?
Ans: Scaling the important channels before quantization (and inversely scaling activations) lets everything be stored uniformly at 4 bits while protecting the computations that matter most, avoiding the mixed-precision kernel complexity.`,
            `Q2: What does GPTQ use to decide how to compensate quantization error per layer?
Ans: Approximate second-order information (a Hessian proxy from calibration activations), which tells it which weight changes most affect the layer output, so error can be pushed into unquantized columns.`,
            `Q3: Why do many INT4 deployments keep activations in FP16 (W4A16)?
Ans: Activations have dynamic, outlier-prone ranges that are hard to quantize without hurting accuracy; weights are static and compress well, so weight-only quant gives most of the memory savings at much lower accuracy risk.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Quantization: INT8, INT4, GPTQ, AWQ</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Quantization: INT8, INT4, GPTQ, AWQ")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'vllm-serving': {
      title: 'vLLM for High-Throughput Serving',
      subtitle: 'PagedAttention and continuous batching for production LLM serving',
      sections: [
        {
          heading: 'What is vLLM for High-Throughput Serving?',
          text: 'vLLM for High-Throughput Serving is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, vLLM for High-Throughput Serving provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use vllm for high-throughput serving when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — vLLM for High-Throughput Serving

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: vLLM for High-Throughput Serving sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'vLLM for High-Throughput Serving with Python',
            code: `# vLLM for High-Throughput Serving — tokenization sketch (requires transformers)
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
          heading: 'Serving Engine Comparison',
          table: {
            headers: [
              'Engine',
              'Strength',
              'Best For'
            ],
            rows: [
              [
                'vLLM',
                'PagedAttention + continuous batching, broad model support',
                'General high-throughput serving'
              ],
              [
                'TensorRT-LLM',
                'NVIDIA-optimized kernels, FP8, multi-GPU',
                'Max NVIDIA throughput, latency-critical'
              ],
              [
                'TGI (HF)',
                'Production HF server, sharding, streaming',
                'Hugging Face ecosystem'
              ],
              [
                'llama.cpp / Ollama',
                'CPU/GPU local, GGUF quants',
                'Local/desktop inference'
              ],
              [
                'MLC-LLM',
                'Universal deploy (browser, phone, edge)',
                'Edge and cross-platform'
              ],
              [
                'SGLang',
                'Structured outputs, RadixAttention prefix reuse',
                'Agents, structured generation'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Serving one request at a time (fix: use continuous batching to keep the GPU saturated)',
            'Mistake 2: Ignoring max-model-len vs. KV cache memory (fix: tune --max-model-len and --gpu-memory-utilization; the KV cache can dominate at long context)',
            'Mistake 3: Not enabling prefix caching for shared system prompts (fix: turn on prefix caching to cut cost and latency on repeated prefixes)',
            'Mistake 4: Quantizing a model your serving kernel does not support (fix: match the quant format to the engine — Marlin for vLLM/AWQ/GPTQ, etc.)'
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
            'vLLM uses PagedAttention (block-paged KV cache) to eliminate fragmentation and boost concurrency',
            'Continuous batching admits new requests at iteration boundaries, keeping the GPU busy',
            'Prefix caching reuses shared KV across requests; tensor/pipeline parallelism scale across GPUs',
            'OpenAI-compatible API and quantized serving (GPTQ/AWQ/FP8) are built in',
            'vLLM gives 3–10× naive HF throughput; alternatives include TensorRT-LLM, TGI, SGLang, llama.cpp'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What problem does PagedAttention solve?
Ans: The naive contiguous KV cache wastes 60–80% of memory to fragmentation and preallocation; PagedAttention stores the KV in fixed-size blocks allocated on demand, near-eliminating fragmentation and letting far more sequences run concurrently.`,
            `Q2: How does continuous batching differ from static batching?
Ans: Static batching waits for the whole batch to finish before admitting new requests; continuous batching admits a new request at the next iteration whenever a slot frees, keeping the GPU saturated despite heterogeneous request lengths.`,
            `Q3: Why does prefix caching help for chat workloads?
Ans: Most requests share a long system prompt; caching and reusing its KV avoids recomputing those tokens for every request, cutting latency and cost.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>vLLM for High-Throughput Serving</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — vLLM for High-Throughput Serving")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'model-merging': {
      title: 'Model Merging with MergeKit',
      subtitle: 'Combining multiple fine-tuned models into one without extra training',
      sections: [
        {
          heading: 'What Is Model Merging?',
          text: '<strong>Model merging</strong> combines the weights of two or more models (often fine-tuned variants of the same base) into a single model with capabilities of all of them — <strong>without further training</strong>. It exploits the fact that different fine-tunes often occupy different, low-distortion directions in weight space ("model soups", task vectors).'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Model merging</strong> combines the weights of two or more models (often fine-tuned variants of the same base) into a single model with capabilities of all of them — <strong>without further training</strong>. It exploits the fact that different fine-tunes often occupy different, low-distortion directions in weight space ("model soups", task vectors). Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Model merging</strong> combines the weights of two or more models (often fine-tuned variants of the same base) into a single model with capabilities of all of them — <strong>without further training</strong>. It exploits the fact that different fine-tunes often occupy different, low-distortion directions in weight space ("model soups", task vectors).</p>',
            '<p>You use model merging with mergekit when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Model Merging with MergeKit

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Model Merging with MergeKit sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Model Merging with MergeKit with Python',
            code: `# Model Merging with MergeKit — tokenization sketch (requires transformers)
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
            'Mistake 1: Merging models with different bases/tokenizers (fix: only merge fine-tunes of the same base architecture and tokenizer)',
            'Mistake 2: Naive averaging of conflicting fine-tunes (fix: use TIES/DARE to resolve sign conflicts and drop small deltas)',
            'Mistake 3: Skipping evaluation of the merged model (fix: benchmark on all target tasks; merges can silently degrade one capability)',
            'Mistake 4: Merging in mismatched dtypes (fix: merge in a single dtype like bf16; dtype mismatches corrupt the weights)'
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
            'Model merging combines weights of same-base fine-tunes into one model with no extra training',
            'Methods: linear/SLERP, task arithmetic, TIES, DARE, model soup, franken-merges',
            'MergeKit is the standard tool; configured via YAML with method, models, weights, density',
            'Task vectors (W_task − W_base) can be added/subtracted to compose or remove capabilities',
            'Only merge shared-base models; always evaluate the result on all intended tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why must merged models share the same base architecture and tokenizer?
Ans: Different architectures/tokenizers have incompatible weight shapes and token IDs, so a linear combination of their weights is meaningless or produces a broken model.`,
            `Q2: What does TIES-Merging do to handle conflicts between task vectors?
Ans: It trims tiny deltas, resolves sign conflicts by keeping the majority sign, and elects the largest-magnitude values, reducing interference between merged fine-tunes.`,
            `Q3: Give one reason DARE-TIES can outperform plain TIES for large merges.
Ans: DARE randomly drops a fraction of small deltas and rescales the rest, which reduces interference and parameter overlap when many models are merged at once.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Model Merging with MergeKit</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Model Merging with MergeKit")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multi-gpu-inference': {
      title: 'Multi-GPU Inference: Tensor and Pipeline Parallelism',
      subtitle: 'Splitting a large model across GPUs to fit memory and cut latency',
      sections: [
        {
          heading: 'What is Multi-GPU Inference: Tensor and Pipeline Parallelism?',
          text: 'Multi-GPU Inference: Tensor and Pipeline Parallelism is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Multi-GPU Inference: Tensor and Pipeline Parallelism provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use multi-gpu inference: tensor and pipeline parallelism when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multi-GPU Inference: Tensor and Pipeline Parallelism

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multi-GPU Inference: Tensor and Pipeline Parallelism sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Multi-GPU Inference: Tensor and Pipeline Parallelism with Python',
            code: `# Multi-GPU Inference: Tensor and Pipeline Parallelism — tokenization sketch (requires transformers)
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
            'Mistake 1: High TP across slow interconnect (fix: TP needs NVLink within a node; cross-node use PP instead)',
            'Mistake 2: Ignoring KV cache when sizing memory (fix: at long context the KV cache can exceed weights; size total memory, not just weights)',
            'Mistake 3: Adding GPUs without adding throughput (fix: beyond a point latency stops improving; add DP replicas for throughput, not more TP)',
            'Mistake 4: Forgetting bubbles in pure PP (fix: use micro-batching/interleaved 1F1B scheduling to fill the pipeline)'
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
            'Tensor parallelism splits each layer (matmuls/heads) across GPUs; needs fast interconnect, good for low latency',
            'Pipeline parallelism splits layers across GPUs; low bandwidth but has bubbles, fixed with micro-batching',
            'Data parallelism runs independent replicas for throughput once the model fits on one GPU',
            'Expert/sequence parallelism handle MoE and very long context respectively',
            'Fit with TP within a node, PP across nodes, DP for throughput; engines: vLLM, TensorRT-LLM, DeepSpeed'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is tensor parallelism typically limited to a single node?
Ans: TP performs an all-reduce across GPUs every layer, which needs very high-bandwidth, low-latency interconnect (NVLink); cross-node links are too slow, so PP is preferred across nodes.`,
            `Q2: What causes pipeline "bubbles" and how are they reduced?
Ans: Bubbles are idle time when a stage waits for the previous stage's output; micro-batching and interleaved 1F1B scheduling pipeline multiple micro-batches to keep stages busy.`,
            `Q3: If a model already fits on one GPU and you want more throughput, what should you add — TP or DP?
Ans: Data parallelism (more independent replicas), since TP only helps fit/latency and adds communication overhead that does not increase throughput when the model already fits.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multi-GPU Inference: Tensor and Pipeline Parallelism</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multi-GPU Inference: Tensor and Pipeline Parallelism")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'safety-alignment': {
      title: 'Safety and Alignment Considerations',
      subtitle: 'Keeping deployed LLMs helpful, harmless, and honest in production',
      sections: [
        {
          heading: 'What is Safety and Alignment Considerations?',
          text: 'Safety and Alignment Considerations is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Safety and Alignment Considerations provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use safety and alignment considerations when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Safety and Alignment Considerations

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Safety and Alignment Considerations sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Safety and Alignment Considerations with Python',
            code: `# Safety and Alignment Considerations — tokenization sketch (requires transformers)
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
            'Mistake 1: Shipping a raw base model to users (fix: deploy an aligned instruction-tuned model with safety tuning)',
            'Mistake 2: Trusting tool/retrieved outputs as instructions (fix: treat them as untrusted data; use structured roles and guardrails against injection)',
            'Mistake 3: Relying on a single defense (fix: stack input filters, alignment, output filters, monitoring — no layer alone suffices)',
            'Mistake 4: No red-teaming before launch (fix: adversarially test direct, roleplay, encoding, and multi-turn attacks)',
            'Mistake 5: Treating alignment as one-time (fix: re-evaluate after any model/prompt/data change; monitor production traffic)'
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
            'Alignment makes a fluent LM helpful, harmless, and honest (HHH) without losing capability',
            'Failure modes: jailbreaking, prompt injection, hallucination, data extraction, sycophancy, bias',
            'Model-level alignment: instruction tuning → RLHF/DPO/Constitutional AI',
            'System-level defenses: input/output filters, system prompts, tool sandboxing, red teaming, monitoring',
            'Deploy aligned models, stack defenses, sandbox tools, red-team before launch, and monitor continuously'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is prompt injection and how do you defend against it?
Ans: Malicious instructions hidden in retrieved documents or tool outputs that override the system prompt; defend by treating tool/retrieved content as untrusted data, using structured roles, and adding output guardrails.`,
            `Q2: Why must production safety use multiple layers rather than one technique?
Ans: Each layer (input filters, alignment, output filters, monitoring) has different blind spots; jailbreaks and edge cases slip through any single defense, so defense-in-depth is required.`,
            `Q3: How does Constitutional AI reduce the labeling burden for safety tuning?
Ans: The model critiques and revises its own outputs against a written set of principles, generating aligned training data via AI feedback rather than requiring proportional human preference labels.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Safety and Alignment Considerations</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Safety and Alignment Considerations")
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
