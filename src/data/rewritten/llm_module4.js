export const llmModule4Structure = {
  module4: {
    title: 'Module 4: Advanced Reasoning, Prompting & Agentic Systems',
    topics: [
      { id: 'chain-of-thought', title: 'Chain-of-Thought Prompting' },
      { id: 'prompt-engineering', title: 'Prompt Engineering' },
      { id: 'retrieval-augmented-generation', title: 'Retrieval-Augmented Generation' },
      { id: 'agents-and-tools', title: 'Agents and Tools' },
    ]
  }
};

export const llmModule4Content = {
  module4: {
    'chain-of-thought': {
      title: 'Chain-of-Thought Prompting',
      subtitle: 'Unlocking step-by-step reasoning in large language models',
      sections: [
        {
          heading: 'What is Chain-of-Thought?',
          text: '<strong>Chain-of-Thought (CoT)</strong> prompting is a technique that encourages large language models to break down complex problems into intermediate reasoning steps before producing a final answer. Rather than asking the model for an answer directly, CoT prompts explicitly request the model to "think step by step," which dramatically improves performance on arithmetic, commonsense, and symbolic reasoning tasks.',
          list: [
            'CoT was introduced by Wei et al. (2022) and shown to match fine-tuned model performance on math word problems',
            'Works by generating intermediate reasoning tokens that guide the model toward the correct conclusion',
            'Effective on tasks requiring multi-step logic: math, logic puzzles, planning, and structured reasoning',
            'Can be combined with few-shot examples to steer the reasoning style'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core principle of CoT is to reframe the generation target from a direct answer to a reasoning trace followed by an answer.',
          example: {
            title: 'Example: CoT vs. Direct Prompting',
            code: `Direct Prompt:
  "A bat and ball cost $11.
   The bat costs $10 more than the ball.
   How much does the ball cost?"
  → Output: "$1.00" (incorrect — intuitive trap)

Chain-of-Thought Prompt:
  "A bat and ball cost $11.
   The bat costs $10 more than the ball.
   How much does the ball cost?
   Let's think step by step."

  Output:
    Let ball = x
    Then bat = x + 10
    x + (x + 10) = 11
    2x + 10 = 11
    2x = 1
    x = 0.5

  Answer: $0.50`,
            output: 'CoT improves reasoning accuracy by 20–50% on benchmarks like GSM8K and MultiArith.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CoT comes in several flavors, each suited to different problem types.',
          table: {
            headers: ['Variant', 'How It Works', 'Best For', 'Trade-off'],
            rows: [
              ['Zero-shot CoT', 'Append "Let\'s think step by step"', 'Quick improvements without examples', 'Less reliable than few-shot CoT'],
              ['Few-shot CoT', 'Provide reasoning examples in prompt', 'Consistent reasoning style', 'Requires carefully crafted examples'],
              ['Self-Consistency', 'Sample multiple CoT paths, vote', 'Noisy or ambiguous problems', 'Higher compute (multiple generations)'],
              ['Tree-of-Thoughts', 'Explore multiple reasoning branches', 'Complex planning, games, search', 'Much higher compute, needs scaffolding'],
              ['Automatic CoT', 'Auto-generate reasoning chains', 'Scaling to many tasks', 'Requires validation of generated chains']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting CoT to fix all reasoning errors (fix: CoT helps but does not eliminate hallucinations — verify outputs on critical tasks)',
            'Mistake 2: Using CoT on tasks that do not benefit from reasoning (fix: simple classification or extraction tasks are often slower with CoT and gain no accuracy)',
            'Mistake 3: Providing inconsistent few-shot reasoning examples (fix: ensure all examples follow the same logical structure and notation)',
            'Mistake 4: Ignoring the cost of long reasoning traces (fix: CoT increases token usage significantly; budget for longer outputs in production)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'CoT is deployed in systems where reasoning quality matters.',
          list: [
            '<strong>Financial analysis:</strong> Break down balance-sheet calculations into explicit steps before summarizing',
            '<strong>Medical diagnosis support:</strong> Walk through symptom-to-disease reasoning chains for clinician review',
            '<strong>Legal document review:</strong> Trace clause dependencies and obligations across contracts',
            '<strong>Code debugging:</strong> Step through execution traces to identify the source of bugs',
            '<strong>Education:</strong> Generate worked examples that show students the reasoning process, not just answers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Chain-of-Thought prompting asks the model to show its reasoning before answering',
            'Zero-shot CoT works with a simple "think step by step" instruction; few-shot CoT uses example reasoning traces',
            'Self-Consistency and Tree-of-Thoughts extend CoT for harder problems at higher compute cost',
            'CoT is most valuable on multi-step reasoning tasks and can be wasteful on simple classification',
            'Always validate CoT outputs — reasoning traces can contain errors just like answers can'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does CoT improve accuracy on math word problems?\nAns: It forces the model to generate intermediate reasoning steps, reducing reliance on intuitive but incorrect shortcuts.',
            'Q2: What is the difference between Zero-shot and Few-shot CoT?\nAns: Zero-shot CoT adds a generic instruction to think step by step; Few-shot CoT provides concrete reasoning examples in the prompt to guide style.',
            'Q3: When should you NOT use CoT?\nAns: On simple tasks like binary classification or entity extraction where reasoning adds tokens without improving accuracy.'
          ]
        }
      ]
    },
    'prompt-engineering': {
      title: 'Prompt Engineering',
      subtitle: 'Designing inputs that unlock model capabilities without fine-tuning',
      sections: [
        {
          heading: 'What is Prompt Engineering?',
          text: '<strong>Prompt engineering</strong> is the practice of crafting input prompts to guide large language models toward desired outputs without modifying model weights. A well-designed prompt can outperform naive fine-tuning for many tasks by leveraging the vast knowledge already encoded in the pre-trained model. It is the fastest and cheapest way to adapt an LLM to a new task.',
          list: [
            'Requires no training data or compute — just careful prompt design',
            'Can be iterated in minutes rather than hours or days',
            'Works across tasks: classification, generation, translation, summarization, reasoning',
            'Often the first step before committing to fine-tuning or RAG'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Effective prompts follow a consistent structure: context + instruction + format + examples + constraints.',
          example: {
            title: 'Example: Structured Prompt Template',
            code: `Role: You are a senior Python code reviewer.

Task: Review the function below for bugs,
       security issues, and style violations.

Format: Return a JSON object with keys:
         "issues" (array of strings),
         "severity" (High / Medium / Low),
         "suggestion" (improved code).

Constraints:
  - Do not explain the code.
  - Focus only on security and correctness.

Code:
  def login(user, pwd):
      query = "SELECT * FROM users WHERE name='" + user + "' AND pass='" + pwd + "'"
      return db.execute(query)`,
            output: 'Structured prompts reduce ambiguity and improve output consistency by 30–60%.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different prompting strategies suit different task types and model sizes.',
          table: {
            headers: ['Strategy', 'Mechanism', 'Best For', 'Limitation'],
            rows: [
              ['Zero-shot', 'Direct instruction, no examples', 'Simple tasks, large models', 'Struggles with niche or complex tasks'],
              ['Few-shot', '2–5 examples in the prompt', 'Pattern-matching tasks', 'Token-heavy; examples must be high quality'],
              ['Chain-of-Thought', 'Request reasoning steps', 'Math, logic, planning', 'Increases token cost and latency'],
              ['Role Prompting', 'Assign an expert persona', 'Style-sensitive outputs', 'Can encourage overconfidence'],
              ['Self-Consistency', 'Generate multiple answers, vote', 'Ambiguous or noisy problems', 'High compute cost'],
              ['ReAct', 'Reason + Act with tools', 'Multi-step tasks with external data', 'Requires tool infrastructure']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Vague instructions (fix: be explicit about the task, desired format, and constraints; ambiguity leads to inconsistent outputs)',
            'Mistake 2: Overloading the prompt with irrelevant context (fix: include only the information the model needs; long prompts dilute signal and increase cost)',
            'Mistake 3: Inconsistent few-shot examples (fix: every example should follow the same output format; mixed formats confuse the model)',
            'Mistake 4: Ignoring token limits (fix: count prompt + expected output tokens; leave headroom for the model to complete its response)',
            'Mistake 5: Treating prompts as one-shot artifacts (fix: treat prompts as code — version them, A/B test them, and iterate based on output quality)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Prompt engineering powers production LLM systems across industries.',
          list: [
            '<strong>Customer support bots:</strong> Engineered prompts guide the model to stay on-topic, use a friendly tone, and escalate when uncertain',
            '<strong>Content generation:</strong> Structured prompts with style examples produce consistent blog posts, emails, and marketing copy',
            '<strong>Data extraction:</strong> Zero-shot or few-shot prompts extract entities from unstructured documents without training a NER model',
            '<strong>Code generation:</strong> Prompts with role assignment ("You are an expert Rust developer") and constraints improve code quality significantly',
            '<strong>Medical summarization:</strong> Carefully constrained prompts generate patient-friendly summaries from clinical notes while avoiding advice'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Prompt engineering is the art of designing inputs to guide LLM behavior without changing model weights',
            'A strong prompt includes role, task, format, examples, and constraints',
            'Zero-shot works for simple tasks; Few-shot and CoT help with pattern-matching and reasoning',
            'Iterate prompts like code — version, test, and refine based on real outputs',
            'Always respect token limits and cost constraints in production'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main advantage of prompt engineering over fine-tuning?\nAns: It requires no training data or compute and can be iterated in minutes.',
            'Q2: Why are few-shot examples powerful?\nAns: They provide concrete patterns the model can mimic, dramatically improving accuracy on pattern-matching tasks.',
            'Q3: What risk does role prompting introduce?\nAns: It can make the model sound authoritative even when it is uncertain, increasing the risk of confident but incorrect outputs.'
          ]
        }
      ]
    },
    'retrieval-augmented-generation': {
      title: 'Retrieval-Augmented Generation',
      subtitle: 'Grounding LLM outputs in external knowledge for accuracy and freshness',
      sections: [
        {
          heading: 'What is Retrieval-Augmented Generation?',
          text: '<strong>Retrieval-Augmented Generation (RAG)</strong> is a hybrid architecture that combines information retrieval from an external knowledge base with the generative power of large language models. Instead of relying solely on the model\'s parametric memory, RAG retrieves relevant documents at inference time and feeds them into the prompt as context, enabling the model to produce factual, up-to-date, and verifiable answers.',
          list: [
            'Retrieval step: search a vector database or keyword index for documents relevant to the user query',
            'Augmentation step: inject retrieved passages into the LLM prompt as grounding context',
            'Generation step: the LLM synthesizes an answer conditioned on both the query and the retrieved evidence',
            'RAG reduces hallucinations because the model is anchored to real documents rather than internal parametric guesses'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The RAG pipeline follows a retrieve-then-generate pattern. The quality of the final answer is bounded by the quality of retrieval.',
          example: {
            title: 'Example: Full RAG Pipeline',
            code: `User Query: "What is SRM University's vision?"

Step 1 — Chunk & Embed Documents:
  Document: "SRMIST aims to be a world-class..."
  → Embedding vector (768-d)

Step 2 — Index in Vector DB:
  Store: [chunk_id, vector, metadata]

Step 3 — Query Embedding:
  "What is SRM University's vision?"
  → Query vector (same 768-d space)

Step 4 — Similarity Search:
  top_k = 3 nearest vectors
  → Retrieved chunks:
    1. "SRMIST aims to be a world-class..."
    2. "The vision is to emerge as a leading..."
    3. "Committed to excellence in education..."

Step 5 — Augmented Prompt:
  "Context:
   [1] SRMIST aims to be a world-class...
   [2] The vision is to emerge as a leading...

   Question: What is SRM University's vision?
   Answer:"

Step 6 — Generate:
  LLM produces a grounded, cited answer.`,
            output: 'RAG grounds LLM responses in factual data, dramatically reducing hallucinations.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'RAG architectures vary by retrieval method, knowledge base type, and integration strategy.',
          table: {
            headers: ['Approach', 'Retrieval Method', 'Strength', 'Weakness'],
            rows: [
              ['Dense Retrieval (Vector)', 'Semantic similarity via embeddings', 'Handles paraphrasing and synonyms', 'Requires embedding model and vector DB'],
              ['Sparse Retrieval (BM25)', 'Keyword overlap scoring', 'Fast, interpretable, no ML needed', 'Misses semantic nuance'],
              ['Hybrid Retrieval', 'Combine dense + sparse scores', 'Best of both worlds', 'More complex tuning and infrastructure'],
              ['Graph RAG', 'Query knowledge graphs', 'Structured relationships, multi-hop reasoning', 'Requires curated graph data'],
              ['Self-RAG', 'LLM critiques its own retrieval', 'Adaptive retrieval depth', 'Higher latency and cost']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating retrieval quality as optional (fix: RAG is only as good as retrieval; invest in chunking strategy, embedding quality, and indexing hygiene)',
            'Mistake 2: Stuffing too many retrieved chunks into the prompt (fix: top-k=3–5 is usually optimal; more chunks dilute signal and exceed context limits)',
            'Mistake 3: Ignoring chunk size and overlap (fix: chunk documents into semantically coherent passages with 10–20% overlap to preserve context across boundaries)',
            'Mistake 4: Forgetting to handle retrieval failures (fix: when no relevant documents are found, the system should fall back gracefully or warn the user)',
            'Mistake 5: Assuming static knowledge bases are sufficient (fix: schedule periodic re-indexing and updates; stale RAG is nearly as bad as no RAG)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'RAG is the dominant pattern for production knowledge-grounded LLM systems.',
          list: [
            '<strong>Enterprise search:</strong> Employees query internal wikis, manuals, and policies through a conversational interface with source citations',
            '<strong>Healthcare co-pilots:</strong> Retrieve from medical literature and patient records to support clinical decision-making with grounded evidence',
            '<strong>Legal research:</strong> Search case law, statutes, and contracts to draft briefs and answer compliance questions with verifiable references',
            '<strong>Customer support:</strong> RAG over product documentation and ticket history provides accurate, up-to-date answers without retraining',
            '<strong>Financial analysis:</strong> Retrieve earnings transcripts, filings, and news to generate investment summaries anchored in real data'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'RAG combines retrieval from an external knowledge base with LLM generation for factual, grounded answers',
            'The pipeline is: chunk → embed → index → retrieve → augment prompt → generate',
            'Dense retrieval uses embeddings; sparse retrieval uses keywords; hybrid combines both',
            'Retrieval quality is the ceiling for RAG quality — invest in chunking, embeddings, and indexing',
            'Always handle retrieval failures and keep knowledge bases fresh'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does RAG reduce hallucinations compared to a standalone LLM?\nAns: The LLM is conditioned on retrieved real documents rather than generating from parametric memory alone.',
            'Q2: What is the main risk of retrieving too many chunks?\nAns: Too many chunks dilute signal, increase noise, and may exceed the model\'s context window.',
            'Q3: When is sparse retrieval (BM25) preferred over dense retrieval?\nAns: When exact keyword matching matters, compute is limited, or no embedding model is available.'
          ]
        }
      ]
    },
    'agents-and-tools': {
      title: 'Agents and Tools',
      subtitle: 'Giving LLMs the ability to plan, act, and interact with the world',
      sections: [
        {
          heading: 'What are LLM Agents?',
          text: 'An <strong>LLM agent</strong> is a system that uses a language model as its reasoning core to autonomously decide which actions to take, which tools to invoke, and how to combine results to accomplish a user-defined goal. Unlike a simple chatbot that only generates text, an agent can search the web, run code, query databases, send emails, and orchestrate multi-step workflows.',
          list: [
            'Agents follow a loop: observe → think → act → observe again until the goal is satisfied',
            'Tools are external functions the agent can call: search, calculator, APIs, databases, code interpreters',
            'The LLM decides the action plan dynamically; no hardcoded workflow is required',
            'ReAct (Reason + Act) is the most popular agent framework, interleaving reasoning traces with tool calls'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The ReAct loop structures agent behavior as alternating reasoning and action steps.',
          example: {
            title: 'Example: ReAct Agent Solving a Multi-Step Problem',
            code: `User: "What is the population of the capital of France?"

Agent Loop:

  Thought 1: I need the population of Paris.
              I do not know this from memory.
              I should search for it.
  Action 1: search("population of Paris 2024")
  Observation 1: "Paris has a population of
                   approximately 2.16 million
                   as of 2023."

  Thought 2: I have the answer.
              The capital of France is Paris,
              and its population is 2.16 million.
  Action 2: finish("2.16 million")

Output: "The population of Paris,
         the capital of France,
         is approximately 2.16 million."`,
            output: 'Agents combine reasoning with tool use to solve problems beyond the LLM\'s parametric knowledge.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Agents vary by planning depth, tool autonomy, and memory architecture.',
          table: {
            headers: ['Agent Type', 'Planning', 'Tool Use', 'Memory', 'Best For'],
            rows: [
              ['Simple ReAct', 'Single-step reasoning', 'One tool at a time', 'In-context only', 'Straightforward Q&A with search'],
              ['Multi-step ReAct', 'Multi-step plans', 'Sequential tool calls', 'In-context + scratchpad', 'Research, data gathering'],
              ['Plan-and-Execute', 'Full plan before acting', 'Parallel tool calls', 'Full plan memory', 'Complex workflows, coding'],
              ['Autonomous Agent', 'Self-directed goal setting', 'Dynamic tool discovery', 'Long-term memory + reflection', 'Open-ended tasks, research'],
              ['Multi-Agent', 'Multiple agents collaborate', 'Agents share tools', 'Shared + private memory', 'Debate, verification, distributed tasks']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Giving an agent too many tools without descriptions (fix: every tool needs a clear name, description, and schema; ambiguous tools lead to incorrect selection)',
            'Mistake 2: Allowing infinite loops (fix: set max iteration limits, timeout thresholds, and termination conditions to prevent runaway agents)',
            'Mistake 3: Trusting agent reasoning without verification (fix: agents can confabulate tool outputs or misinterpret observations; validate critical outputs independently)',
            'Mistake 4: Ignoring security (fix: sandbox code execution, restrict API permissions, and sanitize tool inputs to prevent prompt injection and unauthorized actions)',
            'Mistake 5: Building agents for tasks that do not need them (fix: simple retrieval or single-prompt tasks are faster and cheaper without agent overhead)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Agentic systems are increasingly deployed for complex, multi-step workflows.',
          list: [
            '<strong>DevOps assistants:</strong> Agents read logs, query metrics, run diagnostics, and open tickets autonomously when anomalies are detected',
            '<strong>Research assistants:</strong> Multi-step agents search literature, summarize papers, cross-reference findings, and draft reports',
            '<strong>Travel planners:</strong> Agents query flight APIs, hotel databases, and weather services to build and book complete itineraries',
            '<strong>Data analysts:</strong> Agents load datasets, run SQL queries, generate visualizations, and present insights in natural language',
            '<strong>Customer support escalation:</strong> Agents triage tickets, look up order history, attempt resolutions, and escalate to humans only when necessary'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'An LLM agent is a system that uses an LLM to reason, plan, and invoke external tools dynamically',
            'The ReAct loop (Reason + Act) is the foundational pattern for agent behavior',
            'Tools must be well-documented; agents need iteration limits and safety guardrails',
            'Agent systems trade latency and cost for capability — use them only when tasks are genuinely multi-step',
            'Multi-agent systems can collaborate, debate, and verify outputs for higher reliability'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the core difference between a chatbot and an agent?\nAns: A chatbot only generates text; an agent can plan, invoke external tools, and act in a loop to accomplish goals.',
            'Q2: Why is ReAct effective for agent design?\nAns: It interleaves explicit reasoning traces with tool actions, making the agent\'s decision process transparent and debuggable.',
            'Q3: What is the most important safety consideration when giving an agent code execution tools?\nAns: Sandboxing and input sanitization are essential to prevent prompt injection and unauthorized code execution.'
          ]
        }
      ]
    }
  }
};