// large language models — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js llm_module4.js

export const llmModule4Structure = {
  module4: {
    title: 'Module 4: Prompt Engineering & Applications',
    topics: [
      {
        id: 'prompting-basics',
        title: 'Zero-Shot, Few-Shot, and Chain-of-Thought'
      },
      {
        id: 'react-pattern',
        title: 'The ReAct Pattern: Reasoning + Acting'
      },
      {
        id: 'self-consistency',
        title: 'Self-Consistency Decoding'
      },
      {
        id: 'tree-of-thoughts',
        title: 'Tree of Thoughts'
      },
      {
        id: 'function-calling-agent',
        title: 'Building an Agent with Function Calling'
      }
    ]
  }
};

export const llmModule4Content = {
  module4: {
    'prompting-basics': {
      title: 'Zero-Shot, Few-Shot, and Chain-of-Thought',
      subtitle: 'The foundational prompting techniques that unlock model capabilities without training',
      sections: [
        {
          heading: 'What Is Prompt Engineering?',
          text: '<strong>Prompt engineering</strong> is the practice of crafting input prompts to guide LLMs toward desired outputs <strong>without modifying model weights</strong>. A well-designed prompt can outperform naive fine-tuning for many tasks by leveraging the knowledge already encoded in the pre-trained model. It is the fastest and cheapest way to adapt an LLM to a new task.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Prompt engineering</strong> is the practice of crafting input prompts to guide LLMs toward desired outputs <strong>without modifying model weights</strong>. A well-designed prompt can outperform naive fine-tuning for many tasks by leveraging the knowledge already encoded in the pre-trained model. It is the fastest and cheapest way to adapt an LLM to a new task. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Prompt engineering</strong> is the practice of crafting input prompts to guide LLMs toward desired outputs <strong>without modifying model weights</strong>. A well-designed prompt can outperform naive fine-tuning for many tasks by leveraging the knowledge already encoded in the pre-trained model. It is the fastest and cheapest way to adapt an LLM to a new task.</p>',
            '<p>You use zero-shot, few-shot, and chain-of-thought when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Zero-Shot, Few-Shot, and Chain-of-Thought

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Zero-Shot, Few-Shot, and Chain-of-Thought sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Zero-Shot, Few-Shot, and Chain-of-Thought with Python',
            code: `# Zero-Shot, Few-Shot, and Chain-of-Thought — tokenization sketch (requires transformers)
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
              'Strategy',
              'Mechanism',
              'Best For',
              'Cost / Limitation'
            ],
            rows: [
              [
                'Zero-shot',
                'Direct instruction, no examples',
                'Simple tasks, large models',
                'Weak on niche/complex tasks'
              ],
              [
                'Few-shot',
                '2–5 examples in prompt',
                'Pattern-matching, format control',
                'Token-heavy; examples must be high quality'
              ],
              [
                'Zero-shot CoT',
                `"Let's think step by step"`,
                'Quick reasoning gains',
                'Less reliable than few-shot CoT'
              ],
              [
                'Few-shot CoT',
                'Reasoning examples in prompt',
                'Consistent reasoning style',
                'Requires crafted examples; long outputs'
              ],
              [
                'Role prompting',
                'Assign an expert persona',
                'Style-sensitive outputs',
                'Can encourage overconfidence'
              ],
              [
                'Self-consistency',
                'Sample many CoT, vote',
                'Noisy/ambiguous problems',
                'Higher compute (many samples)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Vague instructions (fix: be explicit about task, format, and constraints)',
            'Mistake 2: Inconsistent few-shot examples (fix: every example must follow the same output format)',
            'Mistake 3: Using CoT on simple tasks (fix: CoT adds tokens without benefit on trivial classification — skip it)',
            'Mistake 4: Treating prompts as one-shot artifacts (fix: A/B test, version, and iterate prompts based on real outputs)',
            'Mistake 5: Overloading the prompt with irrelevant context (fix: include only what the model needs; long prompts dilute signal)'
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
            '<strong>Customer support bots:</strong> engineered prompts keep the model on-topic, friendly, and escalating when uncertain',
            '<strong>Data extraction:</strong> zero/few-shot prompts extract entities from unstructured docs without training a NER model',
            '<strong>Code generation:</strong> role assignment ("You are an expert Rust developer") + constraints improve quality',
            '<strong>Medical summarization:</strong> constrained prompts generate patient-friendly summaries while avoiding advice',
            '<strong>Math/reasoning tools:</strong> CoT and self-consistency are the basis of reasoning-model behavior'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Prompt engineering adapts LLMs without weight changes — fastest, cheapest adaptation',
            'Zero-shot = direct instruction; few-shot = add 2–5 demonstrations',
            'Chain-of-Thought asks for step-by-step reasoning, big gains on math/logic',
            'Structure prompts: role + task + format + examples + constraints + input',
            'Treat prompts as code: version, A/B test, iterate'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: When should you prefer few-shot over zero-shot?
Ans: When the task is format-sensitive or pattern-matching (extraction, classification, style transfer) where demonstrations of the exact desired output pattern materially help.`,
            `Q2: Why does CoT improve accuracy on word problems?
Ans: It forces the model to generate intermediate reasoning tokens, reducing reliance on intuitive but wrong shortcuts and letting compositional logic accumulate.`,
            `Q3: What is a downside of few-shot examples that are inconsistently formatted?
Ans: Mixed formats confuse the model about the target pattern, producing inconsistent or malformed outputs; every example must share the same structure.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Zero-Shot, Few-Shot, and Chain-of-Thought</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Zero-Shot, Few-Shot, and Chain-of-Thought")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'react-pattern': {
      title: 'The ReAct Pattern: Reasoning + Acting',
      subtitle: 'Interleaving reasoning traces with tool actions for grounded problem solving',
      sections: [
        {
          heading: 'What Is ReAct?',
          text: `<strong>ReAct</strong> (Yao et al., 2022, "ReAct: Synergizing Reasoning and Acting in Language Models") is a prompting pattern where the model alternates between explicit <strong>Thought</strong> (reasoning) and <strong>Action</strong> (tool calls), observing each action's result before reasoning again. It grounds reasoning in real tool outputs (search, calculator, APIs) instead of relying on parametric memory.`
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p><strong>ReAct</strong> (Yao et al., 2022, "ReAct: Synergizing Reasoning and Acting in Language Models") is a prompting pattern where the model alternates between explicit <strong>Thought</strong> (reasoning) and <strong>Action</strong> (tool calls), observing each action's result before reasoning again. It grounds reasoning in real tool outputs (search, calculator, APIs) instead of relying on parametric memory. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, <strong>ReAct</strong> (Yao et al., 2022, "ReAct: Synergizing Reasoning and Acting in Language Models") is a prompting pattern where the model alternates between explicit <strong>Thought</strong> (reasoning) and <strong>Action</strong> (tool calls), observing each action's result before reasoning again. It grounds reasoning in real tool outputs (search, calculator, APIs) instead of relying on parametric memory.</p>`,
            '<p>You use the react pattern: reasoning + acting when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — The ReAct Pattern: Reasoning + Acting

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: The ReAct Pattern: Reasoning + Acting sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'The ReAct Pattern: Reasoning + Acting with Python',
            code: `# The ReAct Pattern: Reasoning + Acting — tokenization sketch (requires transformers)
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
            'Mistake 1: Giving an agent tools without clear descriptions (fix: each tool needs a name, description, and argument schema; ambiguity causes wrong-tool selection)',
            'Mistake 2: Allowing infinite loops (fix: set max iterations, timeouts, and explicit finish conditions)',
            'Mistake 3: Trusting agent reasoning without verification (fix: agents can confabulate observations; validate critical outputs independently)',
            'Mistake 4: Using ReAct for tasks that do not need tools (fix: pure-reasoning CoT is cheaper when no external data is needed)',
            'Mistake 5: Not sandboxing tool execution (fix: restrict API permissions and sanitize inputs to prevent prompt injection)'
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
            '<strong>Research assistants:</strong> search literature, summarize papers, cross-reference findings, draft reports',
            '<strong>Data analysts:</strong> load datasets, run SQL, generate charts, narrate insights',
            '<strong>Customer support:</strong> triage tickets, look up order history, attempt resolutions, escalate to humans',
            '<strong>DevOps assistants:</strong> read logs, query metrics, run diagnostics, open tickets on anomalies',
            '<strong>Travel planners:</strong> query flight/hotel/weather APIs and build complete itineraries'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ReAct interleaves Thought (reasoning) and Action (tool call) with Observations',
            'It grounds reasoning in real tool outputs, reducing hallucination',
            'The trace is transparent and debuggable; loops need iteration limits and safety guards',
            'ReAct beats plain CoT when external/fresh information is required',
            'Strict Thought/Action/Observation formatting makes the loop parseable'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does ReAct add over plain Chain-of-Thought?
Ans: It interleaves explicit tool Actions and their Observations between Thoughts, grounding reasoning in external data rather than relying on parametric memory.`,
            `Q2: Why is the ReAct trace said to be "debuggable"?
Ans: Every Thought and Action is explicit and human-readable, so a failure can be localized to a specific reasoning step or tool call and corrected.`,
            `Q3: Name two safety measures required when giving a ReAct agent code or API tools.
Ans: Sandboxing/permissions to prevent unauthorized actions, and input sanitization to prevent prompt injection through tool outputs.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>The ReAct Pattern: Reasoning + Acting</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — The ReAct Pattern: Reasoning + Acting")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'self-consistency': {
      title: 'Self-Consistency Decoding',
      subtitle: 'Sample many reasoning paths and vote on the answer for robust reasoning',
      sections: [
        {
          heading: 'What is Self-Consistency Decoding?',
          text: 'Self-Consistency Decoding is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Self-Consistency Decoding provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use self-consistency decoding when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Self-Consistency Decoding

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Self-Consistency Decoding sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Self-Consistency Decoding with Python',
            code: `# Self-Consistency Decoding — tokenization sketch (requires transformers)
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
            'Mistake 1: Sampling at temperature 0 (fix: you need diverse paths; use T≈0.5–0.8 so votes differ)',
            'Mistake 2: Applying to open-ended tasks (fix: voting needs a discrete answer space; for free-form tasks use a verifier instead)',
            'Mistake 3: Failing to extract answers reliably (fix: a robust final-answer parser is essential; ambiguous extractions corrupt the vote)',
            'Mistake 4: Treating the majority as guaranteed correct (fix: agreement raises confidence, not certainty; verify on safety-critical tasks)'
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
            'Self-consistency samples K diverse CoT paths and takes a majority vote on the final answer',
            'It needs temperature > 0 so paths differ; K = 20–40 is typical',
            'Biggest gains on verifiable-answer reasoning; not useful for open-ended generation',
            'Costs K× compute; pair with verification for the highest reliability',
            'Universal self-consistency uses the model itself to pick the most consistent answer'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why must self-consistency use temperature > 0?
Ans: With greedy (T=0) decoding all K samples are identical, so the vote carries no information; diversity requires stochastic sampling.`,
            `Q2: Why does self-consistency help more on GSM8K than on story generation?
Ans: GSM8K has a single correct numeric answer to vote on; story generation has many valid outputs and no discrete answer space for a majority vote.`,
            `Q3: What is "universal self-consistency"?
Ans: A variant that does not vote mechanically; instead the LLM is asked to select the answer it judges most consistent across the K sampled paths.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Self-Consistency Decoding</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Self-Consistency Decoding")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'tree-of-thoughts': {
      title: 'Tree of Thoughts',
      subtitle: 'Exploring multiple reasoning branches with search for hard planning tasks',
      sections: [
        {
          heading: 'What Is Tree of Thoughts (ToT)?',
          text: '<strong>Tree of Thoughts</strong> (Yao et al., 2023) generalizes CoT from a single linear chain to a <strong>tree of reasoning states</strong>. At each step the model generates multiple candidate "thoughts" (partial solutions), evaluates them with a value function, and searches (BFS/DFS) over the tree to find a high-quality solution. It is the prompting analogue of search algorithms used in game AI.'
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Tree of Thoughts</strong> (Yao et al., 2023) generalizes CoT from a single linear chain to a <strong>tree of reasoning states</strong>. At each step the model generates multiple candidate "thoughts" (partial solutions), evaluates them with a value function, and searches (BFS/DFS) over the tree to find a high-quality solution. It is the prompting analogue of search algorithms used in game AI. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Tree of Thoughts</strong> (Yao et al., 2023) generalizes CoT from a single linear chain to a <strong>tree of reasoning states</strong>. At each step the model generates multiple candidate "thoughts" (partial solutions), evaluates them with a value function, and searches (BFS/DFS) over the tree to find a high-quality solution. It is the prompting analogue of search algorithms used in game AI.</p>',
            '<p>You use tree of thoughts when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Tree of Thoughts

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Tree of Thoughts sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Tree of Thoughts with Python',
            code: `# Tree of Thoughts — tokenization sketch (requires transformers)
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
            'Mistake 1: Applying ToT to trivial tasks (fix: ToT is for search/planning; CoT or self-consistency suffice for routine reasoning)',
            'Mistake 2: A weak value function (fix: the evaluator quality bounds the search; use LLM-as-judge with calibrated prompts or a task-specific scorer)',
            'Mistake 3: No pruning/backtracking budget (fix: cap depth and branching; otherwise the tree explodes combinatorially)',
            'Mistake 4: Ignoring cost (fix: ToT can be 10–100× a single CoT; reserve it for high-value, hard problems)'
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
            'ToT generalizes CoT into a tree of reasoning states explored with search',
            'Four steps: decompose, generate K candidates, evaluate with a value function, search (BFS/DFS)',
            'It beats CoT/self-consistency on planning, puzzles, and search-heavy tasks',
            'Cost is high (many generations + evaluations); do not use for trivial tasks',
            'Reasoning models (o1-style) internalize ToT-like search at test time'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does ToT add beyond self-consistency?
Ans: Self-consistency votes over independent linear chains; ToT explores a tree of states with an evaluator and search (branching, pruning, backtracking), so it can recover from dead ends that a single chain cannot.`,
            `Q2: Why is the value/evaluator function critical in ToT?
Ans: Search quality is bounded by the evaluator: it decides which branches to expand and prune, so a weak or noisy evaluator makes the search no better than random exploration.`,
            `Q3: Give an example of a task where ToT is clearly better than CoT.
Ans: The 24-game: partial arithmetic states can be scored (closeness to 24, solvability) and dead branches pruned, so search finds solutions that greedy CoT misses.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Tree of Thoughts</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Tree of Thoughts")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'function-calling-agent': {
      title: 'Building an Agent with Function Calling',
      subtitle: 'Using native tool/function-calling to build a reliable, structured agent',
      sections: [
        {
          heading: 'What is Building an Agent with Function Calling?',
          text: 'Building an Agent with Function Calling is essential for large language models.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in large language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Building an Agent with Function Calling provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use building an agent with function calling when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Building an Agent with Function Calling

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Building an Agent with Function Calling sits in the inference layer — turning noisy samples into actionable ranges.`,
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
            title: 'Building an Agent with Function Calling with Python',
            code: `# Building an Agent with Function Calling — tokenization sketch (requires transformers)
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
            'Mistake 1: Vague tool descriptions (fix: the description is what the model uses to select the tool; be precise about when to use it)',
            'Mistake 2: Not validating tool arguments (fix: always schema-validate before executing; reject and re-prompt on violation)',
            'Mistake 3: Letting tool outputs inject instructions (fix: treat tool outputs as data, not commands; use structured roles and mark untrusted content)',
            'Mistake 4: No step/timeout limits (fix: cap max_steps and per-tool timeouts to prevent runaway agents)',
            'Mistake 5: Building agents for single-shot tasks (fix: if one call works, do not add an agent loop)'
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
            '<strong>Enterprise copilots:</strong> query internal APIs (CRM, ticketing, calendar) and synthesize answers',
            '<strong>Data analysis agents:</strong> run SQL/pandas over a warehouse, then narrate findings and charts',
            '<strong>Shopping/travel agents:</strong> call product/flight/hotel APIs, compare options, book',
            '<strong>Code agents:</strong> read files, run tests, apply patches, verify — agentic coding tools',
            '<strong>Multimodal agents:</strong> call vision tools on screenshots to operate GUIs and browsers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Function calling is model-native structured tool use — the model emits valid JSON tool calls, not free text',
            'Define tools with JSON schemas; the agent loop executes calls and feeds results back until a final answer',
            'Modern APIs support parallel calls, conditional choice, and streaming',
            'Safety: max steps, sandboxing, schema validation, and prompt-injection defenses are mandatory',
            'Use agents for multi-step, tool-using tasks; use a single call or RAG when they suffice'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does function calling give you over free-text ReAct?
Ans: Structured, schema-validated JSON tool calls that the host can parse reliably, eliminating the brittleness of regex-parsing Thought/Action traces.`,
            `Q2: Why must tool outputs be treated as untrusted data?
Ans: A tool result (e.g., a retrieved web page) can contain adversarial instructions ("ignore previous instructions and …"); treating outputs as data, not commands, prevents prompt injection.`,
            `Q3: Give two reasons to prefer a single LLM call (or RAG) over an agent loop.
Ans: Lower latency and lower cost; if the task is a single grounded answer, retrieval + one generation is simpler and cheaper than a multi-step agent.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Building an Agent with Function Calling</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Building an Agent with Function Calling")
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
