// LLM & NLP Interview Questions
// Source: LinkedIn post — 50 LLM/NLP interview questions

export const llmQuestions = {
  questions: [
    {
      question: "What are Large Language Models (LLMs)?",
      answer: `<p>A <strong>Large Language Model (LLM)</strong> is a neural network trained on massive amounts of text data to understand and generate human-like language. The "large" refers to both the training data (trillions of tokens) and the model size (billions of parameters).</p>
<h4>Key Characteristics</h4>
<ul>
<li><strong>Architecture:</strong> Most LLMs are built on the Transformer architecture, using self-attention to process text in parallel rather than sequentially.</li>
<li><strong>Training:</strong> Two-phase — <em>pre-training</em> (learn language patterns from internet-scale text) and <em>fine-tuning</em> (specialize for specific tasks like chat, coding, or reasoning).</li>
<li><strong>Capabilities:</strong> Text generation, summarization, translation, question answering, code writing, and reasoning — all from a single model.</li>
<li><strong>Emergent abilities:</strong> At sufficient scale, LLMs develop capabilities not explicitly trained for — like chain-of-thought reasoning and in-context learning.</li>
</ul>
<h4>Examples</h4>
<ul>
<li><strong>GPT-4 / GPT-4o</strong> (OpenAI), <strong>Claude</strong> (Anthropic), <strong>Gemini</strong> (Google), <strong>LLaMA</strong> (Meta), <strong>Mistral</strong></li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "LLM = Transformer-based neural network trained on trillions of tokens with billions of parameters",
        "Two-phase training: pre-training (language patterns) + fine-tuning (task specialization)",
        "Capabilities: generation, summarization, translation, coding, reasoning — from one model",
        "Emergent abilities appear at scale — chain-of-thought reasoning, in-context learning"
      ]
    },
    {
      question: "How are LLMs different from traditional language models?",
      answer: `<p>Traditional language models (N-gram, RNN, LSTM) and LLMs differ in architecture, scale, and capability.</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Traditional (N-gram/RNN/LSTM)</th><th style='padding:8px;border:1px solid #ddd;'>LLM (Transformer)</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Architecture</td><td style='padding:8px;border:1px solid #ddd;'>Sequential (RNN/LSTM) or statistical (N-gram)</td><td style='padding:8px;border:1px solid #ddd;'>Self-attention (parallel)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Context window</td><td style='padding:8px;border:1px solid #ddd;'>Limited (N-gram: N words; LSTM: ~100s)</td><td style='padding:8px;border:1px solid #ddd;'>Thousands to millions of tokens</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Parameters</td><td style='padding:8px;border:1px solid #ddd;'>Millions</td><td style='padding:8px;border:1px solid #ddd;'>Billions (7B — 1.7T+)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Training data</td><td style='padding:8px;border:1px solid #ddd;'>Domain-specific, small</td><td style='padding:8px;border:1px solid #ddd;'>Internet-scale, diverse</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Generalization</td><td style='padding:8px;border:1px solid #ddd;'>Single task, needs retraining</td><td style='padding:8px;border:1px solid #ddd;'>Zero-shot / few-shot across tasks</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Long-range dependencies</td><td style='padding:8px;border:1px solid #ddd;'>Poor (vanishing gradient)</td><td style='padding:8px;border:1px solid #ddd;'>Strong (self-attention connects any two tokens)</td></tr>
</table>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Traditional: sequential/limited context (N-gram, RNN, LSTM); LLM: parallel self-attention with long context windows",
        "Scale: traditional = millions of params; LLM = billions of params trained on internet-scale data",
        "Generalization: traditional needs per-task training; LLM does zero-shot/few-shot across many tasks",
        "Long-range dependencies: traditional suffers vanishing gradients; LLM self-attention connects distant tokens directly"
      ]
    },
    {
      question: "What are Foundation Models?",
      answer: `<p>A <strong>Foundation Model</strong> is a large model trained on broad data (usually self-supervised) that can be adapted to many downstream tasks. The term was coined by Stanford's CRFM in 2021.</p>
<h4>Key Properties</h4>
<ul>
<li><strong>Pre-trained on broad data:</strong> Internet text, code, images — not limited to one domain.</li>
<li><strong>Self-supervised learning:</strong> Learns from the data itself (predict next token, fill in blanks) — no manual labels needed.</li>
<li><strong>Transferable:</strong> Fine-tuned or prompted for many tasks — classification, generation, Q&A, summarization, coding.</li>
<li><strong>General-purpose base:</strong> Acts as a "foundation" upon which specialized models are built.</li>
</ul>
<h4>Examples</h4>
<ul>
<li><strong>Text:</strong> GPT-4, BERT, LLaMA, Claude — foundation models for language tasks.</li>
<li><strong>Multi-modal:</strong> GPT-4o (text+image+audio), Gemini — foundation models across modalities.</li>
<li><strong>Code:</strong> Codex, Code LLaMA — foundation models fine-tuned for programming.</li>
</ul>
<p>The key insight: instead of building one model per task, train one large model on everything, then adapt it. This is more data-efficient and produces better results due to knowledge transfer.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Foundation model = large, self-supervised model trained on broad data, adaptable to many tasks",
        "Coined by Stanford CRFM in 2021 — describes the shift from task-specific to general-purpose models",
        "Self-supervised: learns from data itself (next-token prediction, masked tokens) — no manual labels",
        "Examples: GPT-4, BERT, LLaMA, Codex — one model, many downstream tasks via fine-tuning or prompting"
      ]
    },
    {
      question: "How is GPT-4 different from GPT-3 in capabilities and applications?",
      answer: `<p>GPT-4 is a significant upgrade over GPT-3 across multiple dimensions.</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Dimension</th><th style='padding:8px;border:1px solid #ddd;'>GPT-3</th><th style='padding:8px;border:1px solid #ddd;'>GPT-4</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Parameters</td><td style='padding:8px;border:1px solid #ddd;'>175B</td><td style='padding:8px;border:1px solid #ddd;'>~1.7T (estimated, Mixture of Experts)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Context window</td><td style='padding:8px;border:1px solid #ddd;'>2K — 4K tokens</td><td style='padding:8px;border:1px solid #ddd;'>8K — 128K tokens</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Reasoning</td><td style='padding:8px;border:1px solid #ddd;'>Basic logic, many errors</td><td style='padding:8px;border:1px solid #ddd;'>Strong multi-step reasoning, chain-of-thought</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Multimodal</td><td style='padding:8px;border:1px solid #ddd;'>Text only</td><td style='padding:8px;border:1px solid #ddd;'>Text + image input (GPT-4V)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Code generation</td><td style='padding:8px;border:1px solid #ddd;'>Basic, often buggy</td><td style='padding:8px;border:1px solid #ddd;'>Production-quality, multi-file projects</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Factuality</td><td style='padding:8px;border:1px solid #ddd;'>Frequent hallucinations</td><td style='padding:8px;border:1px solid #ddd;'>Reduced hallucinations, better grounding</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Safety/Alignment</td><td style='padding:8px;border:1px solid #ddd;'>Minimal</td><td style='padding:8px;border:1px solid #ddd;'>RLHF, system messages, safety filters</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Exam performance</td><td style='padding:8px;border:1px solid #ddd;'>~bottom 10% on BAR exam</td><td style='padding:8px;border:1px solid #ddd;'>~top 10% on BAR exam</td></tr>
</table>
<h4>New Capabilities in GPT-4</h4>
<ul>
<li><strong>Long-context processing:</strong> Analyze entire books or codebases in one prompt (128K tokens).</li>
<li><strong>Image understanding:</strong> Describe images, read charts, interpret diagrams.</li>
<li><strong>Structured output:</strong> Reliable JSON/XML output for tool use and API integration.</li>
<li><strong>System prompts:</strong> Customizable behavior via system messages for different personas/use cases.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "GPT-3: 175B params, 2-4K context, text-only; GPT-4: ~1.7T MoE, 8-128K context, text+image",
        "GPT-4 has significantly better reasoning, reduced hallucinations, and multi-step chain-of-thought",
        "GPT-4 adds multimodal (image input), long-context (128K), structured output, and system prompts",
        "GPT-4 scored top 10% on BAR exam vs GPT-3's bottom 10% — major reasoning leap"
      ]
    },
    {
      question: "What role do embeddings play in LLMs?",
      answer: `<p><strong>Embeddings</strong> convert words, tokens, or sentences into dense numerical vectors that capture semantic meaning. They are the bridge between human language and machine-computable numbers.</p>
<h4>How They Work</h4>
<ul>
<li>Each token is mapped to a high-dimensional vector (typically 768 — 12,288 dimensions).</li>
<li>Semantically similar words have vectors that are <strong>close together</strong> in vector space (e.g., "king" and "queen" are near each other; "king" and "banana" are far apart).</li>
<li>The model learns these vectors during training — they are not hand-crafted.</li>
</ul>
<h4>Types of Embeddings in LLMs</h4>
<ul>
<li><strong>Token embeddings:</strong> Each token ID → vector. The input layer of every Transformer.</li>
<li><strong>Positional embeddings:</strong> Encode the position of each token in the sequence (added to token embeddings).</li>
<li><strong>Contextual embeddings:</strong> In Transformers, embeddings change based on surrounding context. The word "bank" has a different vector in "river bank" vs "bank account".</li>
</ul>
<h4>Why They Matter</h4>
<ul>
<li>Without embeddings, the model would only see token IDs (integers) — no semantic information.</li>
<li>Embeddings enable similarity search, clustering, and retrieval (used in RAG systems).</li>
<li>The quality of embeddings directly determines the quality of the model's understanding.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Embeddings = dense vectors capturing semantic meaning (similar words → nearby vectors)",
        "Token embeddings (input layer) + positional embeddings (position info) + contextual embeddings (Transformer layers)",
        "Contextual: same word gets different embedding based on surrounding context (bank: river vs money)",
        "Embeddings enable similarity search, clustering, and RAG retrieval — quality determines model understanding"
      ]
    },
    {
      question: "How do LLMs handle out-of-vocabulary (OOV) words?",
      answer: `<p>Traditional NLP models used fixed vocabularies — any word not in the vocabulary was "OOV" and mapped to an &lt;UNK&gt; token. LLMs solve this differently using <strong>subword tokenization</strong>.</p>
<h4>Subword Tokenization</h4>
<ul>
<li><strong>Byte-Pair Encoding (BPE):</strong> Starts with characters, merges the most frequent pairs iteratively. "unbelievable" → ["un", "believ", "able"]. If a word is unseen, it falls back to subwords or characters.</li>
<li><strong>WordPiece:</strong> Similar to BPE but picks merges that maximize language model likelihood (used by BERT).</li>
<li><strong>SentencePiece:</strong> Works at the byte level — any Unicode string can be tokenized. No &lt;UNK&gt; token needed at all.</li>
</ul>
<h4>How It Handles OOV</h4>
<ol>
<li>An unseen word is broken into known subword units: "tokenization" → ["token", "ization"].</li>
<li>If subwords are also unknown, it breaks down to individual characters or bytes — which are always in the vocabulary.</li>
<li>This means <strong>any text can be represented</strong> — even misspellings, rare names, or non-English words.</li>
</ol>
<h4>Example</h4>
<pre><code class="language-text">Word: "supercalifragilistic"
BPE tokens: ["super", "cal", "if", "rag", "il", "istic"]
Each subword has its own embedding → the model combines them via self-attention.</code></pre>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Traditional models use fixed vocab + &lt;UNK&gt; for OOV; LLMs use subword tokenization (BPE, WordPiece, SentencePiece)",
        "BPE: merge most frequent character pairs iteratively — unseen words decompose into known subwords",
        "SentencePiece: byte-level tokenization — any Unicode string is representable, no &lt;UNK&gt; needed",
        "OOV word → subwords → characters → bytes: always decomposes to known units, so no word is ever truly unknown"
      ]
    },
    {
      question: "What are Sequence-to-Sequence (Seq2Seq) Models?",
      answer: `<p><strong>Seq2Seq models</strong> take a variable-length input sequence and produce a variable-length output sequence. They are the foundation of translation, summarization, and Q&amp;A systems.</p>
<h4>Architecture</h4>
<ul>
<li><strong>Encoder:</strong> Reads the input sequence token by token and builds a context representation (a fixed-length vector or a series of hidden states).</li>
<li><strong>Decoder:</strong> Takes the encoder's output and generates the output sequence one token at a time, each step conditioned on the previous output.</li>
<li><strong>Connection:</strong> The encoder's final state (or attention over all states) is passed to the decoder as the "context".</li>
</ul>
<h4>Evolution</h4>
<ol>
<li><strong>RNN Seq2Seq (2014):</strong> Encoder RNN → context vector → Decoder RNN. Bottleneck: the entire input is compressed into one fixed vector.</li>
<li><strong>Seq2Seq + Attention (2015):</strong> Decoder attends to all encoder states — no bottleneck. Better for long sequences.</li>
<li><strong>Transformer (2017):</strong> Replaced RNNs entirely with self-attention. Encoder and decoder are stacks of attention layers. Parallelizable and scalable — this is what powers modern LLMs.</li>
</ol>
<h4>Applications</h4>
<ul>
<li><strong>Translation:</strong> English → French (input and output are different lengths)</li>
<li><strong>Summarization:</strong> Long article → short summary</li>
<li><strong>Q&amp;A:</strong> Question + context → answer</li>
<li><strong>Code generation:</strong> Natural language → code</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Seq2Seq = variable-length input → variable-length output; encoder builds context, decoder generates output",
        "Evolution: RNN Seq2Seq (bottleneck) → + Attention (no bottleneck) → Transformer (parallel, scalable)",
        "Transformer replaced RNNs with self-attention — this is the architecture behind all modern LLMs",
        "Applications: translation, summarization, Q&A, code generation — all variable-length transformations"
      ]
    },
    {
      question: "What is the difference between an encoder and a decoder?",
      answer: `<p>Encoders and decoders are the two main components of Transformer models, with different roles and attention patterns.</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Encoder</th><th style='padding:8px;border:1px solid #ddd;'>Decoder</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Role</td><td style='padding:8px;border:1px solid #ddd;'>Reads and understands input</td><td style='padding:8px;border:1px solid #ddd;'>Generates output one token at a time</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Attention</td><td style='padding:8px;border:1px solid #ddd;'>Bidirectional (sees all tokens at once)</td><td style='padding:8px;border:1px solid #ddd;'>Causal/masked (sees only past tokens)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Output</td><td style='padding:8px;border:1px solid #ddd;'>Contextual representations for all tokens</td><td style='padding:8px;border:1px solid #ddd;'>Next token probability distribution</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Cross-attention</td><td style='padding:8px;border:1px solid #ddd;'>No (only self-attention)</td><td style='padding:8px;border:1px solid #ddd;'>Yes (attends to encoder output)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Best for</td><td style='padding:8px;border:1px solid #ddd;'>Understanding tasks (classification, NER, search)</td><td style='padding:8px;border:1px solid #ddd;'>Generation tasks (text, code, translation)</td></tr>
</table>
<h4>Model Variants</h4>
<ul>
<li><strong>Encoder-only (BERT):</strong> Bidirectional — best for understanding and classification.</li>
<li><strong>Decoder-only (GPT):</strong> Causal — best for generation. No encoder needed; the decoder processes the input text directly.</li>
<li><strong>Encoder-decoder (T5, BART):</strong> Encoder reads input, decoder generates output — best for translation and summarization.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Encoder: bidirectional attention, understands input, produces contextual representations",
        "Decoder: causal/masked attention, generates output one token at a time, has cross-attention to encoder",
        "Encoder-only = BERT (classification); Decoder-only = GPT (generation); Encoder-decoder = T5 (translation)",
        "Decoder-only models (GPT) process input text directly — no separate encoder needed"
      ]
    },
    {
      question: "How do autoregressive models differ from masked models?",
      answer: `<p><strong>Autoregressive</strong> and <strong>masked</strong> models use different training objectives, leading to different strengths.</p>
<h4>Autoregressive Models (GPT family)</h4>
<ul>
<li><strong>Training:</strong> Predict the next token given all previous tokens. P(x_t | x_1, x_2, ..., x_{t-1}).</li>
<li><strong>Attention:</strong> Causal/masked — each token can only see tokens before it (left-to-right).</li>
<li><strong>Strength:</strong> Excellent at <em>generation</em> — the model is literally trained to generate text.</li>
<li><strong>Weakness:</strong> Cannot see future context — bad for tasks that need full bidirectional understanding (classification, NER).</li>
<li><strong>Examples:</strong> GPT-3, GPT-4, LLaMA, Mistral.</li>
</ul>
<h4>Masked Models (BERT family)</h4>
<ul>
<li><strong>Training:</strong> Randomly mask 15% of tokens, predict them from the full context (both left and right). P(x_masked | all other tokens).</li>
<li><strong>Attention:</strong> Bidirectional — each token sees all other tokens.</li>
<li><strong>Strength:</strong> Excellent at <em>understanding</em> — classification, NER, sentiment analysis, search.</li>
<li><strong>Weakness:</strong> Cannot generate text naturally — the training objective is reconstruction, not generation.</li>
<li><strong>Examples:</strong> BERT, RoBERTa, DeBERTa.</li>
</ul>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Autoregressive (GPT)</th><th style='padding:8px;border:1px solid #ddd;'>Masked (BERT)</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Training objective</td><td style='padding:8px;border:1px solid #ddd;'>Next-token prediction</td><td style='padding:8px;border:1px solid #ddd;'>Masked-token reconstruction</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Attention</td><td style='padding:8px;border:1px solid #ddd;'>Causal (left-to-right)</td><td style='padding:8px;border:1px solid #ddd;'>Bidirectional (full context)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Best for</td><td style='padding:8px;border:1px solid #ddd;'>Text generation</td><td style='padding:8px;border:1px solid #ddd;'>Understanding/classification</td></tr>
</table>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Autoregressive (GPT): predict next token, causal (left-to-right) attention — best for generation",
        "Masked (BERT): predict masked tokens from full context, bidirectional attention — best for understanding",
        "Autoregressive cannot see future context; masked cannot generate text naturally",
        "Modern trend: decoder-only autoregressive models (GPT/LLaMA) dominate because generation + few-shot > task-specific"
      ]
    },
    {
      question: "What is masked language modeling, and how does it help pretraining?",
      answer: `<p><strong>Masked Language Modeling (MLM)</strong> is a pretraining objective where some tokens in the input are randomly replaced with a [MASK] token, and the model must predict the original token from the surrounding context.</p>
<h4>How It Works</h4>
<ol>
<li>Take a sentence: "The cat sat on the mat."</li>
<li>Randomly mask 15% of tokens: "The [MASK] sat on the mat."</li>
<li>Model predicts the masked token using bidirectional context (sees both "The" and "sat").</li>
<li>Loss is computed only on masked tokens — the model learns deep contextual understanding.</li>
</ol>
<h4>Why It Helps Pretraining</h4>
<ul>
<li><strong>Bidirectional context:</strong> Unlike next-token prediction, MLM sees both left and right context — richer understanding.</li>
<li><strong>Dense training signal:</strong> Every masked token is a training example. 15% of tokens × billions of sentences = huge training signal.</li>
<li><strong>Prevents shortcut:</strong> The model cannot just copy the previous token — it must genuinely understand context.</li>
<li><strong>Transfer learning:</strong> The contextual representations learned via MLM are excellent for downstream tasks (classification, NER, Q&amp;A).</li>
</ul>
<h4>Used By</h4>
<ul>
<li><strong>BERT:</strong> 15% masking (80% [MASK], 10% random token, 10% unchanged).</li>
<li><strong>RoBERTa:</strong> Dynamic masking (different mask each epoch) + longer training.</li>
<li><strong>DeBERTa:</strong> Enhanced mask decoder + disentangled attention.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "MLM = randomly mask tokens, predict them from bidirectional context — BERT's pretraining objective",
        "Bidirectional: sees both left and right context — richer than autoregressive next-token prediction",
        "Dense training signal: 15% of tokens × billions of sentences = massive training signal",
        "Used by BERT (80% mask, 10% random, 10% unchanged), RoBERTa (dynamic masking), DeBERTa"
      ]
    },
    {
      question: "What is Next Sentence Prediction (NSP)?",
      answer: `<p><strong>Next Sentence Prediction (NSP)</strong> is a pretraining task used in BERT to help the model understand relationships between sentences.</p>
<h4>How It Works</h4>
<ol>
<li>Take two sentences, A and B.</li>
<li>50% of the time, B is the actual sentence that follows A in the original text (positive example).</li>
<li>50% of the time, B is a random sentence from the corpus (negative example).</li>
<li>The model uses the [CLS] token output to predict: Is B the next sentence after A?</li>
</ol>
<h4>Why It Was Added</h4>
<ul>
<li>MLM (masked language modeling) only teaches token-level understanding within a sentence.</li>
<li>NSP teaches <strong>sentence-level understanding</strong> — coherence, discourse, logical flow.</li>
<li>Tasks like Q&amp;A and natural language inference need sentence-pair understanding.</li>
</ul>
<h4>Controversy</h4>
<ul>
<li><strong>RoBERTa</strong> (Facebook, 2019) removed NSP and found <em>better</em> performance — NSP was too easy and not helpful.</li>
<li><strong>ALBERT</strong> replaced NSP with <strong>Sentence Order Prediction (SOP)</strong> — predicts whether two consecutive sentences are in the right order. SOP is harder and more useful.</li>
<li>Modern LLMs (GPT, LLaMA) skip NSP entirely — they are decoder-only and use next-token prediction instead.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "NSP = predict whether sentence B follows sentence A — BERT's sentence-level pretraining task",
        "50% positive (real next sentence), 50% negative (random sentence) — binary classification via [CLS] token",
        "Purpose: teach sentence-pair understanding for Q&A and NLI tasks",
        "RoBERTa removed NSP and did better; ALBERT replaced with SOP; modern LLMs skip it entirely"
      ]
    },
    {
      question: "How does the Transformer architecture overcome challenges of traditional Seq2Seq models?",
      answer: `<p>The Transformer (2017, "Attention Is All You Need") solved three fundamental problems of RNN-based Seq2Seq models.</p>
<h4>Problem 1: Sequential Processing (Slow)</h4>
<ul>
<li><strong>RNN:</strong> Must process token t before token t+1 — no parallelization during training.</li>
<li><strong>Transformer:</strong> Self-attention processes all tokens simultaneously — fully parallelizable on GPUs. Training is 10-100x faster.</li>
</ul>
<h4>Problem 2: Long-Range Dependency (Bottleneck)</h4>
<ul>
<li><strong>RNN:</strong> Information must pass through every hidden state — degrades over distance (vanishing gradient). The encoder compresses everything into one fixed-length vector.</li>
<li><strong>Transformer:</strong> Self-attention connects every token to every other token directly — O(1) path length between any two positions. No information bottleneck.</li>
</ul>
<h4>Problem 3: Limited Context Window</h4>
<ul>
<li><strong>RNN:</strong> Practical limit ~100-200 tokens before performance degrades.</li>
<li><strong>Transformer:</strong> Theoretically unlimited (in practice limited by O(n²) attention cost, but techniques like sparse attention, FlashAttention, and sliding window extend it to 100K+ tokens).</li>
</ul>
<h4>Key Innovations</h4>
<ul>
<li><strong>Self-attention:</strong> Q, K, V matrices — each token attends to all others directly.</li>
<li><strong>Multi-head attention:</strong> Multiple attention heads learn different relationship types simultaneously.</li>
<li><strong>Positional encoding:</strong> Since attention is permutation-invariant, positional info is added explicitly.</li>
<li><strong>Layer normalization + residual connections:</strong> Enables deep stacks (12-96 layers) without vanishing gradients.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Transformer solved RNN's 3 problems: sequential processing (→ parallel), long-range bottleneck (→ direct attention), limited context (→ scalable)",
        "Self-attention: O(1) path between any two tokens — no information degradation over distance",
        "Fully parallelizable on GPUs — 10-100x faster training than RNNs",
        "Key innovations: self-attention, multi-head attention, positional encoding, residual connections + layer norm"
      ]
    },
    {
      question: "What is attention in Transformer models?",
      answer: `<p><strong>Attention</strong> is a mechanism that lets the model focus on the most relevant parts of the input when producing each part of the output. It's inspired by how humans pay attention to specific parts of an image or text rather than processing everything equally.</p>
<h4>Intuition</h4>
<p>When translating "The black cat sat" to French, the model generating "noir" (black) should attend more to "black" than to "sat". Attention computes a <strong>weighted average</strong> of all input tokens, where the weights are learned.</p>
<h4>Self-Attention (used in Transformers)</h4>
<p>In self-attention, the input plays all three roles:</p>
<ul>
<li><strong>Query (Q):</strong> What this token is "looking for"</li>
<li><strong>Key (K):</strong> What each token "offers"</li>
<li><strong>Value (V):</strong> The actual content to pass forward</li>
</ul>
<h4>Computation</h4>
<ol>
<li>Compute attention scores: <code>scores = Q × K^T</code> — how much each token relates to every other.</li>
<li>Scale: <code>scores = scores / sqrt(d_k)</code> — prevents large values from dominating softmax.</li>
<li>Softmax: Converts scores to probabilities (0 to 1, sum to 1).</li>
<li>Weighted sum: <code>output = softmax(scores) × V</code> — the final attention output.</li>
</ol>
<h4>Why It Works</h4>
<ul>
<li>Every token can directly attend to every other token — no distance bottleneck.</li>
<li>Attention weights are learned — the model discovers which relationships matter.</li>
<li>Different attention heads can focus on different aspects (syntax, semantics, position).</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Attention = weighted focus on relevant input tokens; weights are learned, not hardcoded",
        "Self-attention: Q (what to look for), K (what's offered), V (content to pass forward)",
        "Formula: softmax(Q×K^T / sqrt(d_k)) × V — scores → probabilities → weighted sum",
        "Every token attends to every other — O(1) path length, no distance bottleneck"
      ]
    },
    {
      question: "How are attention scores computed in transformers?",
      answer: `<p>Attention scores measure how much each token should "attend to" every other token. The computation is a series of matrix operations.</p>
<h4>Step-by-Step</h4>
<ol>
<li><strong>Project input:</strong> Multiply the input matrix X (n×d) by learned weight matrices W_Q, W_K, W_V to get Q, K, V (each n×d_k):<pre><code class="language-text">Q = X × W_Q    (n × d_k)
K = X × W_K    (n × d_k)
V = X × W_V    (n × d_v)</code></pre></li>
<li><strong>Compute raw scores:</strong> Dot product of Q and K^T:<pre><code class="language-text">scores = Q × K^T    (n × n matrix)
scores[i][j] = how much token i attends to token j</code></pre></li>
<li><strong>Scale:</strong> Divide by sqrt(d_k) to stabilize gradients:<pre><code class="language-text">scores = scores / sqrt(d_k)</code></pre></li>
<li><strong>Masking (decoder only):</strong> Set future positions to -inf so softmax gives them 0 probability:<pre><code class="language-text">scores = scores + mask  (-inf for future tokens)</code></pre></li>
<li><strong>Softmax:</strong> Convert to probabilities (each row sums to 1):<pre><code class="language-text">weights = softmax(scores)    (n × n)</code></pre></li>
<li><strong>Output:</strong> Weighted sum of values:<pre><code class="language-text">output = weights × V    (n × d_v)</code></pre></li>
</ol>
<h4>Complexity</h4>
<ul>
<li><strong>Time:</strong> O(n² × d_k) for the Q×K^T and weights×V operations.</li>
<li><strong>Memory:</strong> O(n²) for the n×n attention matrix.</li>
<li>This is why long sequences are expensive — attention is quadratic in sequence length.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Step 1: Q=X×W_Q, K=X×W_K, V=X×W_V (learned projections)",
        "Step 2: scores = Q×K^T (n×n matrix of token-to-token relevance)",
        "Step 3: scale by 1/sqrt(d_k), mask future (decoder), softmax → weights, multiply by V",
        "Complexity: O(n²) time and memory — quadratic in sequence length, why long context is expensive"
      ]
    },
    {
      question: "What is the softmax function and why is it used in attention?",
      answer: `<p><strong>Softmax</strong> converts a vector of numbers into a probability distribution where all values are between 0 and 1 and sum to 1.</p>
<h4>Formula</h4>
<pre><code class="language-text">softmax(x_i) = exp(x_i) / Σ exp(x_j)</code></pre>
<h4>Example</h4>
<pre><code class="language-text">Input:  [2.0, 1.0, 0.1]
exp:    [7.39, 2.72, 1.11]    sum = 11.22
softmax:[0.659, 0.242, 0.099]  (sums to 1.0)</code></pre>
<h4>Why It's Used in Attention</h4>
<ol>
<li><strong>Converts scores to probabilities:</strong> The raw Q×K^T scores can be any real number. Softmax converts them to a probability distribution — each value is between 0 and 1, and they sum to 1.</li>
<li><strong>Differentiable:</strong> Softmax is smooth and differentiable — gradients flow through it during backpropagation.</li>
<li><strong>Emphasizes the largest scores:</strong> Because of the exponential, the highest score gets disproportionately more weight. This makes the attention "sharper" — the model focuses on the most relevant tokens.</li>
<li><strong>Per-row normalization:</strong> For each query token, softmax normalizes over all keys — so each token's attention weights sum to 1, giving a proper weighted average.</li>
</ol>
<h4>Temperature Scaling</h4>
<p>Some models divide the input by a temperature T before softmax:</p>
<ul>
<li>High T → flatter distribution (more uniform attention)</li>
<li>Low T → sharper distribution (focus on top tokens)</li>
<li>In standard attention, T = sqrt(d_k)</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Softmax converts scores to probabilities: exp(x_i) / Σ exp(x_j) — all values 0-1, sum to 1",
        "Used in attention because: differentiable, emphasizes highest scores (exponential), per-row normalization",
        "Temperature: dividing by sqrt(d_k) stabilizes gradients; high T = flatter, low T = sharper",
        "Without softmax, Q×K^T produces unbounded scores — softmax makes them a proper probability distribution"
      ]
    },
    {
      question: "How is dot product used in self-attention?",
      answer: `<p>The <strong>dot product</strong> is the core mathematical operation in self-attention — it measures how "similar" two vectors are.</p>
<h4>What the Dot Product Measures</h4>
<ul>
<li>The dot product of two vectors tells you how aligned they are: large positive = similar, near zero = unrelated, negative = opposite.</li>
<li>In attention, <code>Q × K^T</code> computes the dot product of every Query with every Key — producing an n×n matrix of similarity scores.</li>
</ul>
<h4>Geometric Intuition</h4>
<pre><code class="language-text">Q[cat] · K[animal] = 0.85  (high — cat and animal are related)
Q[cat] · K[computer] = 0.03 (low — cat and computer are unrelated)
Q[cat] · K[dog]     = 0.78  (high — cat and dog are semantically close)</code></pre>
<h4>Why Dot Product (Not Cosine or Euclidean)?</h4>
<ul>
<li><strong>Efficient:</strong> Matrix multiplication (Q × K^T) is highly optimized on GPUs.</li>
<li><strong>Learnable scale:</strong> The W_Q and W_K projections are learned — the model can scale vectors to make dot products meaningful. It's not just raw vector similarity; it's learned similarity.</li>
<li><strong>Additive vs multiplicative:</strong> Additive attention (Bahdanau) uses a small neural network to compute scores. Dot-product attention (Vaswani) is simpler and faster. The Transformer paper showed dot product performs just as well with proper scaling.</li>
</ul>
<h4>Scaling</h4>
<p>Raw dot products grow with dimension d_k. For d_k=128, dot products can reach ±128, making softmax saturate (one value → 1, all others → 0, gradients vanish). Dividing by <code>sqrt(d_k)</code> keeps values in a reasonable range.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Dot product = similarity measure: high = related, near zero = unrelated, negative = opposite",
        "Q×K^T computes dot product of every query with every key — n×n similarity matrix in one matmul",
        "Why dot product: GPU-efficient (matmul), learnable (W_Q/W_K projections shape the similarity space)",
        "Scaling by sqrt(d_k) prevents softmax saturation — without it, high dimensions cause vanishing gradients"
      ]
    },
    {
      question: "What is beam search, and how does it differ from greedy decoding?",
      answer: `<p><strong>Beam search</strong> and <strong>greedy decoding</strong> are strategies for generating text from a language model. They differ in how they choose the next token.</p>
<h4>Greedy Decoding</h4>
<ul>
<li>At each step, pick the token with the <strong>highest probability</strong>.</li>
<li>Fast and simple — but can get stuck in a local optimum.</li>
<li>Example: if "The cat" has P(cat)=0.6, P(dog)=0.4 → always picks "cat".</li>
<li><strong>Problem:</strong> Choosing the highest-probability token at each step does not guarantee the highest-probability <em>sequence</em>. A different first token could lead to a much better overall sentence.</li>
</ul>
<h4>Beam Search</h4>
<ul>
<li>Keep top <strong>k</strong> (beam width, typically 4-8) partial sequences at each step.</li>
<li>For each candidate, expand all possible next tokens, keep the top k overall.</li>
<li>At the end, pick the sequence with the highest total log probability.</li>
<li><strong>Advantage:</strong> Explores multiple paths — finds better sequences than greedy.</li>
<li><strong>Cost:</strong> k× more computation than greedy.</li>
</ul>
<h4>Example (beam width = 2)</h4>
<pre><code class="language-text">Step 1: "The" → top 2: [("cat", 0.6), ("dog", 0.4)]
Step 2: "The cat" → ("sat", 0.5), ("ran", 0.3)
         "The dog" → ("barked", 0.7), ("ran", 0.2)
Top 2: "The cat sat" (0.30), "The dog barked" (0.28)
Step 3: continue expanding both...

Final: "The dog barked loudly" (0.15) beats greedy's "The cat sat on" (0.12)</code></pre>
<h4>When to Use Each</h4>
<ul>
<li><strong>Greedy:</strong> Real-time applications, short outputs, when speed matters more than quality.</li>
<li><strong>Beam search:</strong> Translation, summarization, code generation — when quality matters more than speed.</li>
<li><strong>Sampling (temperature):</strong> Creative writing — beam search produces bland, repetitive text; sampling adds variety.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Greedy: pick highest-probability token at each step — fast but can miss better sequences",
        "Beam search: keep top-k partial sequences, expand all, pick best total — explores more paths",
        "Beam width k=4-8 typical; cost is k× greedy; finds better sequences especially for translation",
        "Greedy = speed; Beam = quality; Sampling = creativity (beam produces bland repetitive text)"
      ]
    },
    {
      question: "Explain the concept of temperature in LLM text generation.",
      answer: `<p><strong>Temperature</strong> controls the randomness/creativity of LLM outputs by scaling the logits before softmax.</p>
<h4>How It Works</h4>
<pre><code class="language-text">softmax(logits / T)</code></pre>
<ul>
<li><strong>Low temperature (0.1):</strong> Distribution becomes sharp — model almost always picks the top token. Deterministic, conservative, good for factual Q&amp;A.</li>
<li><strong>High temperature (1.0+):</strong> Distribution flattens — less likely tokens get more probability. Creative, diverse, good for brainstorming/storytelling.</li>
<li><strong>T = 0:</strong> Equivalent to greedy decoding (always pick argmax).</li>
<li><strong>T = 1:</strong> Original distribution unchanged.</li>
<li><strong>T &gt; 1:</strong> Flatter than original — more random, sometimes nonsensical.</li>
</ul>
<h4>Practical Guide</h4>
<ul>
<li>Code generation, factual QA: T = 0.1 — 0.3</li>
<li>Summarization, extraction: T = 0.3 — 0.5</li>
<li>Creative writing, brainstorming: T = 0.7 — 1.0</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Temperature scales logits before softmax: softmax(logits/T) — controls randomness",
        "Low T (0.1) = deterministic/conservative; High T (1.0+) = creative/random; T=0 = greedy",
        "Factual QA: low T; Creative writing: high T; T=1 = original distribution unchanged"
      ]
    },
    {
      question: "What is the difference between top-k sampling and top-p sampling?",
      answer: `<p>Both are methods to limit which tokens the model can sample from, reducing the chance of picking bad tokens.</p>
<h4>Top-k Sampling</h4>
<ul>
<li>Keep only the <strong>k highest-probability</strong> tokens, set all others to 0, renormalize, sample from those k.</li>
<li>Example: k=20 means only the top 20 tokens can be chosen. k=1 = greedy.</li>
<li><strong>Problem:</strong> Fixed count. When distribution is peaked (few good tokens), k=20 may include garbage. When flat (many good tokens), k=20 may exclude valid options.</li>
</ul>
<h4>Top-p Sampling (Nucleus Sampling)</h4>
<ul>
<li>Keep the <strong>smallest set of tokens</strong> whose cumulative probability ≥ p. Sample from that set.</li>
<li>Example: p=0.9 = consider the smallest set of tokens covering 90% of probability mass.</li>
<li><strong>Advantage:</strong> Adaptive count. Peaked distribution → few tokens (maybe 3). Flat distribution → many tokens (maybe 50).</li>
</ul>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Top-k</th><th style='padding:8px;border:1px solid #ddd;'>Top-p</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Selection</td><td style='padding:8px;border:1px solid #ddd;'>Fixed count (k)</td><td style='padding:8px;border:1px solid #ddd;'>Dynamic (cumulative prob ≥ p)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Adapts to distribution</td><td style='padding:8px;border:1px solid #ddd;'>No</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Typical value</td><td style='padding:8px;border:1px solid #ddd;'>k=20-40</td><td style='padding:8px;border:1px solid #ddd;'>p=0.9-0.95</td></tr>
</table>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Top-k: fixed count of highest-prob tokens (k=20); Top-p: smallest set covering p% of prob mass (p=0.9)",
        "Top-p is adaptive — peaked dist → few tokens, flat dist → many tokens; top-k doesn't adapt",
        "Both reduce the risk of sampling low-probability (garbage) tokens",
        "Often combined with temperature: first apply temp, then top-k or top-p"
      ]
    },
    {
      question: "How does Adaptive Softmax speed up LLMs?",
      answer: `<p><strong>Adaptive Softmax</strong> is a hierarchical softmax that reduces the computational cost of predicting the next token over a large vocabulary.</p>
<h4>Problem</h4>
<ul>
<li>Standard softmax: O(V) per token, where V can be 50,000 — 100,000+.</li>
<li>This is often the bottleneck in language models — most compute is in the output layer.</li>
</ul>
<h4>Solution</h4>
<ul>
<li>Split vocabulary into <strong>clusters</strong> based on frequency: a small cluster of frequent words, and larger clusters of rare words.</li>
<li>Frequent cluster: full (small) softmax — computed for every token.</li>
<li>Rare clusters: 2-step hierarchical softmax — first predict which cluster, then which word within it. Only computed when needed.</li>
<li>Result: O(V/cluster_size) for common words, O(V) amortized to O(√V) for rare words.</li>
</ul>
<h4>Example (word-level)</h4>
<pre><code class="language-text">Cluster 1 (frequent, ~2000 words): "the", "is", "cat", "dog", ...
Cluster 2 (medium, ~10000 words): "hypothesis", "aggregate", ...
Cluster 3 (rare, ~38000 words): "obfuscate", "sesquipedalian", ...

For "the": just softmax over Cluster 1 (2000 words vs 50000)
For "obfuscate": softmax to pick Cluster 3, then softmax within Cluster 3</code></pre>
<h4>Used By</h4>
<ul>
<li>Meta's LLaMA models use Adaptive Softmax</li>
<li>Speedup: 2-5x faster inference for vocab-heavy models</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Adaptive Softmax clusters vocab by frequency — frequent words get small full softmax, rare words get hierarchical 2-step softmax",
        "Reduces O(V) to O(V/cluster_size) for common words — output layer is often the compute bottleneck",
        "Used by Meta's LLaMA — 2-5x faster inference for large vocabularies",
        "Trade-off: no change to quality, just faster — rare words are slightly slower but still accurate"
      ]
    },
    {
      question: "What is cross-entropy loss and why is it used in language models?",
      answer: `<p><strong>Cross-entropy loss</strong> measures the difference between two probability distributions — the model's predicted distribution and the true distribution.</p>
<h4>Formula</h4>
<pre><code class="language-text">H(p, q) = -Σ p(x) * log(q(x))</code></pre>
<ul>
<li><strong>p</strong> = true distribution (one-hot vector: 1 for correct token, 0 for all others)</li>
<li><strong>q</strong> = model's predicted probability distribution over vocabulary</li>
<li>Since p is one-hot, this simplifies to: <code>loss = -log(q[correct_token])</code></li>
</ul>
<h4>Why It's Used</h4>
<ul>
<li><strong>Maximizes likelihood:</strong> Minimizing cross-entropy = maximizing log-likelihood of the correct token. This is the standard training objective for language models.</li>
<li><strong>Differentiable:</strong> Smooth gradients flow through the network during backpropagation.</li>
<li><strong>Penalizes confident wrong answers heavily:</strong> If model assigns 0.01 to the correct token, loss = -log(0.01) = 4.6. If 0.9, loss = -log(0.9) = 0.11. Wrong + confident = big penalty.</li>
<li><strong>Works with softmax:</strong> Cross-entropy + softmax = numerically stable when implemented as log-softmax + NLL loss.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Cross-entropy = -Σ p(x) log q(x); for one-hot true dist, simplifies to -log(q[correct_token])",
        "Minimizing cross-entropy = maximizing log-likelihood of correct token — standard LM training objective",
        "Penalizes confident wrong answers heavily: 0.01 prob → loss 4.6, 0.9 prob → loss 0.11",
        "Cross-entropy + softmax = numerically stable when fused as log-softmax + NLL loss"
      ]
    },
    {
      question: "How are gradients computed with respect to embeddings during backpropagation?",
      answer: `<p>Embeddings are learnable parameters — the model improves them during training via gradient descent.</p>
<h4>Forward Pass</h4>
<ul>
<li>Input: token ID 42 → look up row 42 in the embedding matrix E (V × d).</li>
<li>Output: a d-dimensional vector E[42] that flows through the network.</li>
</ul>
<h4>Backward Pass</h4>
<ul>
<li>Loss gradient flows backward: d_loss/d_output → d_loss/d_hidden → ... → d_loss/d_embedding.</li>
<li>Only tokens that appeared in the input batch receive non-zero gradients.</li>
<li>The gradient for token 42 = d_loss/d_E[42] — how much changing that embedding would reduce loss.</li>
<li>Tokens not in the batch: gradient = 0 (they don't affect the loss for this batch).</li>
</ul>
<h4>Math</h4>
<pre><code class="language-text">E = embedding matrix (V × d)
For input token i:
  forward:  output = E[i]
  backward: d_loss/d_E[i] = gradient_from_above
  update:   E[i] -= lr * d_loss/d_E[i]</code></pre>
<h4>Why This Matters</h4>
<ul>
<li>Embeddings learn during pre-training: common words get refined quickly, rare words slowly.</li>
<li>In fine-tuning, embeddings can be frozen (PEFT) or updated — frozen is more memory-efficient.</li>
<li>If a rare word appears only once in training, its embedding barely changes — why rare words sometimes have poor representations.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Forward: token ID → lookup row in embedding matrix; Backward: gradient flows back to that row only",
        "Tokens not in the batch get zero gradient — they don't affect the loss for this batch",
        "Update: E[i] -= lr * d_loss/d_E[i] — same as any learnable parameter",
        "Rare words get few gradient updates → poor embeddings; PEFT can freeze embeddings to save memory"
      ]
    },
    {
      question: "What is the role of the Jacobian matrix in backpropagation?",
      answer: `<p>The <strong>Jacobian matrix</strong> generalizes the gradient to vector-valued functions. In deep learning, each layer transforms a vector into another vector, and the Jacobian tells us how each output changes with respect to each input.</p>
<h4>Definition</h4>
<p>For a function f: R^n → R^m, the Jacobian J is an m × n matrix:</p>
<pre><code class="language-text">J[i][j] = ∂f_i / ∂x_j</code></pre>
<h4>Role in Backpropagation</h4>
<ul>
<li><strong>Linear layer:</strong> Y = XW + b. Jacobian = W^T. Gradient flows: d_loss/d_X = d_loss/d_Y × W^T.</li>
<li><strong>Element-wise activation (ReLU, GELU):</strong> Jacobian = diagonal matrix of derivatives. d_loss/d_x = d_loss/d_y ⊙ f'(x).</li>
<li><strong>Softmax:</strong> J[i][j] = s_i(δ_ij - s_j) — each output depends on all inputs.</li>
<li><strong>Chain rule:</strong> For composed layers, backprop multiplies Jacobians: d_loss/d_input = J_n × J_{n-1} × ... × J_1 × d_loss/d_output.</li>
</ul>
<h4>Why It Matters</h4>
<ul>
<li>Backpropagation IS the chain rule applied to Jacobians.</li>
<li>Autograd frameworks (PyTorch, TensorFlow) build a computation graph and multiply Jacobians in reverse mode — this is automatic differentiation.</li>
<li>Vanishing/exploding gradients happen when these Jacobian products shrink/grow exponentially.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Jacobian = matrix of all first-order partial derivatives: J[i][j] = ∂f_i/∂x_j",
        "Linear layer Jacobian = W^T; Element-wise activation Jacobian = diagonal of derivatives",
        "Backprop = reverse-mode automatic differentiation = chain rule with Jacobian multiplication",
        "Vanishing/exploding gradients = Jacobian products shrinking/growing exponentially through layers"
      ]
    },
    {
      question: "What is the chain rule and how is it used in deep learning?",
      answer: `<p>The <strong>chain rule</strong> is the fundamental theorem that enables backpropagation in neural networks.</p>
<h4>Mathematical Statement</h4>
<pre><code class="language-text">If y = f(g(x)), then dy/dx = df/dg × dg/dx</code></pre>
<p>For a composition of n layers: loss = f_n(f_{n-1}(...f_1(x)))</p>
<pre><code class="language-text">d_loss/d_x = d_loss/d_h_n × d_h_n/d_h_{n-1} × ... × d_h_1/d_x</code></pre>
<h4>In Deep Learning</h4>
<ol>
<li><strong>Forward pass:</strong> Input flows through layers, each computing output from the previous layer's output.</li>
<li><strong>Backward pass (backprop):</strong> Start with d_loss/d_output, multiply by each layer's Jacobian in reverse to get gradient for every weight.</li>
<li><strong>Weight update:</strong> Each weight is updated using its gradient: W -= lr × d_loss/d_W.</li>
</ol>
<h4>Example (2-layer network)</h4>
<pre><code class="language-text">Forward:  h1 = ReLU(W1 × x + b1)
          out = softmax(W2 × h1 + b2)
          loss = cross_entropy(out, label)

Backward: d_loss/d_out = out - label
          d_loss/d_W2 = d_loss/d_out × h1^T
          d_loss/d_h1 = W2^T × d_loss/d_out
          d_loss/d_W1 = (d_loss/d_h1 ⊙ ReLU'(h1)) × x^T</code></pre>
`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Chain rule: d(f(g(x)))/dx = df/dg × dg/dx — enables computing gradient through composed functions",
        "Deep learning: loss = f_n(...f_1(x)); backprop multiplies layer gradients in reverse",
        "Each layer computes its local Jacobian; autograd (PyTorch/TF) automates this via computation graph",
        "Vanishing gradients = chain of small derivatives → 0; exploding = large derivatives → ∞"
      ]
    },
    {
      question: "What is ReLU and why is it important?",
      answer: `<p><strong>ReLU</strong> (Rectified Linear Unit) is the most widely used activation function in deep learning.</p>
<h4>Definition</h4>
<pre><code class="language-text">ReLU(x) = max(0, x)</code></pre>
<ul>
<li>For x &gt; 0: output = x (identity)</li>
<li>For x &lt; 0: output = 0 (clipped)</li>
</ul>
<h4>Why It's Important</h4>
<ul>
<li><strong>Simple &amp; fast:</strong> No exponential computation (unlike sigmoid/tanh). Just a max operation.</li>
<li><strong>No vanishing gradient for positive inputs:</strong> Derivative = 1 for x &gt; 0. Gradients flow freely through deep networks.</li>
<li><strong>Sparse activation:</strong> Negative inputs → 0, which means many neurons are inactive. Sparsity improves efficiency and generalization.</li>
<li><strong>Empirical success:</strong> All modern architectures (Transformers, CNNs, ResNets) use ReLU or variants.</li>
</ul>
<h4>Variants</h4>
<ul>
<li><strong>Leaky ReLU:</strong> max(0.01x, x) — small gradient for x&lt;0, prevents dead neurons.</li>
<li><strong>GELU:</strong> x × Φ(x) where Φ is the Gaussian CDF. Smoother than ReLU. Used in GPT, BERT.</li>
<li><strong>SwiGLU:</strong> Used in LLaMA. Combines Swish activation with gating mechanism.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "ReLU(x) = max(0, x) — simple, fast, no exponential",
        "Derivative = 1 for x>0 → no vanishing gradient for positive inputs; gradient = 0 for x<0 → dead neurons",
        "Sparse activation (negative → 0) improves efficiency and generalization",
        "Variants: Leaky ReLU (0.01x for x<0), GELU (smooth, used in GPT/BERT), SwiGLU (used in LLaMA)"
      ]
    },
    {
      question: "What is the vanishing gradient problem, and how do Transformers solve it?",
      answer: `<p>The <strong>vanishing gradient problem</strong> occurs when gradients shrink exponentially as they flow backward through layers, making early layers impossible to train.</p>
<h4>Causes</h4>
<ul>
<li><strong>Saturating activations:</strong> sigmoid/tanh derivatives are 0-0.25. Multiplying many small derivatives → gradient → 0.</li>
<li><strong>Sequential depth:</strong> In RNNs, each time step multiplies the gradient. 100 steps × 0.1 derivative = 10^{-10} — effectively zero.</li>
<li><strong>Weight initialization:</strong> Small initial weights compound the shrinkage.</li>
</ul>
<h4>How Transformers Solve It</h4>
<ol>
<li><strong>Self-attention (O(1) path):</strong> In RNNs, token 1 must pass through 99 intermediate states to reach token 100. In Transformers, self-attention connects ANY two tokens directly — gradient path length is O(1), not O(n).</li>
<li><strong>Residual connections:</strong> output = layer(x) + x. Gradients can bypass layers — even if a layer's gradient is small, the residual path carries gradient forward.</li>
<li><strong>Layer normalization:</strong> Normalizes activations to mean 0, std 1. Prevents activations (and gradients) from vanishing or exploding.</li>
<li><strong>ReLU/GELU activations:</strong> Derivative = 1 for positive inputs (ReLU) — no shrinking gradient through activations.</li>
<li><strong>Proper initialization:</strong> Xavier/Glorot initialization scales weights by 1/√n to keep gradient variance stable.</li>
</ol>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Vanishing gradients = gradient → 0 through deep layers; causes: sigmoid (deriv 0-0.25), sequential RNN depth, small weights",
        "Transformer fixes: self-attention gives O(1) path between any two tokens (vs RNN's O(n))",
        "Residual connections: gradient bypasses layers — direct path from output to input",
        "Layer norm + ReLU/GELU (deriv=1 for x>0) + proper init = gradients flow freely"
      ]
    },
    {
      question: "What are eigenvalues and eigenvectors, and how are they used in dimensionality reduction?",
      answer: `<p><strong>Eigenvalues and eigenvectors</strong> are fundamental linear algebra concepts used in PCA (Principal Component Analysis) for dimensionality reduction.</p>
<h4>Definition</h4>
<p>For a square matrix A, an eigenvector v and eigenvalue λ satisfy:</p>
<pre><code class="language-text">A × v = λ × v</code></pre>
<ul>
<li><strong>Eigenvector (v):</strong> A direction that doesn't change when transformed by A — only scaled.</li>
<li><strong>Eigenvalue (λ):</strong> How much it's scaled (stretched or shrunk).</li>
</ul>
<h4>Use in PCA</h4>
<ol>
<li>Compute the <strong>covariance matrix</strong> of the data (captures how features vary together).</li>
<li>Find eigenvectors and eigenvalues of the covariance matrix.</li>
<li><strong>Eigenvectors = principal components:</strong> Directions of maximum variance in the data.</li>
<li><strong>Eigenvalues = variance explained:</strong> Large eigenvalue = that direction carries lots of information.</li>
<li>Sort by eigenvalue (descending), keep top-k eigenvectors.</li>
<li>Project data: X_reduced = X × top-k eigenvectors (n×d → n×k).</li>
</ol>
<h4>Example</h4>
<pre><code class="language-text">Data: 1000 samples × 50 features
Covariance matrix: 50 × 50
Eigenvalues: [12.3, 8.1, 3.2, 1.5, 0.8, ...] (sorted descending)
Keep top 3 eigenvectors (explain 85% of variance)
Result: 1000 × 3 (from 50 dimensions to 3 — for visualization or faster ML)</code></pre>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Math"],
      keyPoints: [
        "Eigenvector v + eigenvalue λ: A×v = λ×v — direction unchanged by A, only scaled by λ",
        "PCA: eigenvectors of covariance matrix = principal components (max variance directions)",
        "Eigenvalues = variance explained; sort descending, keep top-k for dimensionality reduction",
        "X_reduced = X × top-k eigenvectors: reduces d-dimensional data to k dimensions"
      ]
    },
{
      question: "What is positional encoding and why do Transformers need it?",
      answer: `<p><strong>Positional encoding</strong> injects information about the position of each token into the input embeddings, because the Transformer's self-attention mechanism has no inherent sense of order.</p>
<h4>Why It's Needed</h4>
<ul>
<li>Self-attention treats all tokens in parallel — it doesn't know which word came first.</li>
<li>RNN/LSTM inherently process tokens sequentially, so order is implicit. Transformers don't.</li>
<li>Without positional encoding, "dog bites man" and "man bites dog" look identical to the model.</li>
</ul>
<h4>How It Works (Sinusoidal Encoding)</h4>
<pre><code class="language-text">PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))

# pos = position in sequence (0, 1, 2, ...)
# i   = dimension index (0, 1, ..., d_model/2 - 1)
# d_model = embedding dimension (e.g., 512)</code></pre>
<p>The sinusoidal functions produce unique, smooth position vectors. Nearby positions get similar encodings; distant positions differ more. The model can <em>learn</em> to use these patterns for relative positions.</p>
<h4>Alternatives</h4>
<ul>
<li><strong>Learned positional embeddings:</strong> Each position gets a trainable vector (BERT, GPT-2).</li>
<li><strong>Rotary Position Embedding (RoPE):</strong> Rotates embeddings based on position (used in LLaMA, GPT-NeoX).</li>
<li><strong>ALiBi:</strong> Adds a distance-based bias to attention scores — no positional encoding needed.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Transformers"],
      keyPoints: [
        "Self-attention has no inherent notion of token order — positional encoding injects sequence order",
        "Sinusoidal: sin/cos of different frequencies so each position gets a unique pattern",
        "Alternatives: learned embeddings (BERT), RoPE (LLaMA), ALiBi (bias-based)",
        "Without positional encoding, word order is lost — 'dog bites man' ≈ 'man bites dog'"
      ]
    },
    {
      question: "What is multi-head attention and why is it better than single-head attention?",
      answer: `<p><strong>Multi-head attention</strong> runs the attention mechanism multiple times in parallel with different learned projections, then concatenates the results. Each "head" can focus on different relationships.</p>
<h4>How It Works</h4>
<pre><code class="language-text">Given: d_model = 512, h = 8 heads → d_k = d_v = 512/8 = 64

For each head i:
  Q_i = X × W_Q_i    (d_model → d_k)
  K_i = X × W_K_i    (d_model → d_k)
  V_i = X × W_V_i    (d_model → d_v)

  head_i = softmax(Q_i × K_i^T / √d_k) × V_i

Concatenate all heads:
  MultiHead = Concat(head_1, ..., head_h) × W_O</code></pre>
<h4>Why Multiple Heads?</h4>
<ul>
<li><strong>Different heads learn different patterns:</strong> One head might focus on syntactic relationships (subject-verb), another on coreference (pronoun → noun), another on semantic similarity.</li>
<li><strong>Parallel attention:</strong> Each head independently attends to relevant tokens, giving richer representations than a single attention computation.</li>
<li><strong>Efficient:</strong> Total computation is similar to single-head attention with d_model dimensions, just split across heads.</li>
</ul>
<h4>Example</h4>
<p>In "The cat sat on the mat because it was tired", different heads might attend to:</p>
<ul>
<li>Head 1: "it" → "cat" (coreference)</li>
<li>Head 2: "sat" → "mat" (verb → location)</li>
<li>Head 3: "tired" → "cat" (adjective → subject)</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Transformers"],
      keyPoints: [
        "Multi-head = run attention h times in parallel with different learned W_Q, W_K, W_V projections",
        "Each head captures different relationships (syntax, coreference, semantics)",
        "d_model split across heads: 512/8 = 64 per head; concat → linear projection",
        "Same total compute as single-head but richer representations"
      ]
    },
    {
      question: "What is the position-wise feed-forward network in a Transformer?",
      answer: `<p>Each Transformer layer contains a <strong>position-wise feed-forward network (FFN)</strong> applied to each position independently and identically. It consists of two linear transformations with a non-linear activation in between.</p>
<h4>Architecture</h4>
<pre><code class="language-text">FFN(x) = max(0, x × W_1 + b_1) × W_2 + b_2

# d_model = 512 (input)
# d_ff = 2048 (hidden)
# W_1: 512 × 2048, W_2: 2048 × 512</code></pre>
<h4>Key Characteristics</h4>
<ul>
<li><strong>Position-wise:</strong> The same FFN is applied to every token position independently — no interaction between positions (that's attention's job).</li>
<li><strong>Two linear layers:</strong> Expand (d_model → d_ff, usually 4× wider) then contract (d_ff → d_model).</li>
<li><strong>Activation:</strong> Original Transformer uses ReLU; modern models use GELU (GPT-2, BERT) or SwiGLU (LLaMA).</li>
<li><strong>Why expand-then-contract?</strong> The wide hidden layer gives the model capacity to learn complex transformations on each token's representation. The contraction brings it back to the residual stream dimension.</li>
</ul>
<p>Modern variants include <strong>SwiGLU</strong> (used in LLaMA) which adds a gating mechanism: <code>FFN(x) = (Swish(xW_1) ⊙ xW_3) × W_2</code>, improving performance with similar parameter count.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Transformers"],
      keyPoints: [
        "Position-wise FFN: two linear layers with non-linear activation, applied to each token independently",
        "Expand (d_model → 4×d_ff) then contract (d_ff → d_model) for richer per-token transformations",
        "Original uses ReLU; modern models use GELU or SwiGLU",
        "Doesn't mix positions — that's attention's role; FFN transforms each token's representation"
      ]
    },
    {
      question: "What is the difference between layer normalization and batch normalization?",
      answer: `<p>Both are normalization techniques to stabilize training, but they normalize along different dimensions.</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Batch Norm (BN)</th><th style='padding:8px;border:1px solid #ddd;'>Layer Norm (LN)</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Normalizes across</td><td style='padding:8px;border:1px solid #ddd;'>Batch dimension (per feature)</td><td style='padding:8px;border:1px solid #ddd;'>Feature dimension (per sample)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Statistics</td><td style='padding:8px;border:1px solid #ddd;'>Mean/var from current batch</td><td style='padding:8px;border:1px solid #ddd;'>Mean/var from current sample's features</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Batch size</td><td style='padding:8px;border:1px solid #ddd;'>Needs large batch → poor for small/variable batches</td><td style='padding:8px;border:1px solid #ddd;'>Works with any batch size (even 1)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Sequence length</td><td style='padding:8px;border:1px solid #ddd;'>Fails with variable-length sequences</td><td style='padding:8px;border:1px solid #ddd;'>Independent of sequence length</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Used in</td><td style='padding:8px;border:1px solid #ddd;'>CNNs (ResNet, VGG)</td><td style='padding:8px;border:1px solid #ddd;'>Transformers, RNNs</td></tr>
</table>
<h4>Why Transformers Use Layer Norm</h4>
<ul>
<li><strong>Variable sequence length:</strong> Input sequences vary in length; BN across batch is inconsistent. LN normalizes within each token independently.</li>
<li><strong>Small batch sizes:</strong> In LLM training, batch sizes can be small due to memory. BN needs large batches for stable statistics.</li>
<li><strong>Per-token normalization:</strong> Each token's features are normalized together, preserving the independence of positions.</li>
</ul>
<h4>Formulas</h4>
<pre><code class="language-text">Layer Norm:  LN(x) = γ × (x - μ) / σ + β
  μ = mean(x)      # across features for one token
  σ = std(x)       # across features for one token
  γ, β = learnable scale and shift

RMSNorm (used in LLaMA): RMSNorm(x) = γ × x / RMS(x)
  RMS(x) = sqrt(mean(x²))  # simpler, no mean subtraction</code></pre>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Batch Norm: normalizes across the batch (per feature); Layer Norm: normalizes across features (per sample)",
        "Transformers use Layer Norm because sequences are variable-length and batch sizes can be small",
        "RMSNorm (LLaMA) simplifies Layer Norm by removing mean subtraction — faster and equally effective",
        "Both stabilize training by keeping activations in a consistent range"
      ]
    },
    {
      question: "What is tokenization in NLP, and what are BPE, WordPiece, and SentencePiece?",
      answer: `<p><strong>Tokenization</strong> splits text into smaller units (tokens) that the model processes. Modern LLMs use <strong>subword tokenization</strong> — between character-level and word-level — to balance vocabulary size and sequence length.</p>
<h4>Byte-Pair Encoding (BPE) — GPT-2, GPT-4</h4>
<ul>
<li>Start with bytes/characters as initial tokens.</li>
<li>Iteratively merge the most frequent adjacent token pair into a new token.</li>
<li>Continue until vocabulary reaches target size (e.g., 50K).</li>
<li>"tokenization" → ["token", "ization"] (if "ization" was learned as a common subword).</li>
</ul>
<h4>WordPiece — BERT</h4>
<ul>
<li>Similar to BPE, but selects merges that maximize likelihood of training data (not just frequency).</li>
<li>Unknown tokens prefixed with "##": "playing" → ["play", "##ing"].</li>
</ul>
<h4>SentencePiece — LLaMA, T5</h4>
<ul>
<li>Treats text as a raw byte sequence — no assumption about word boundaries.</li>
<li>Works for languages without spaces (Chinese, Japanese, Thai).</li>
<li>Uses BPE or Unigram algorithm internally.</li>
</ul>
<h4>Vocabulary Size Examples</h4>
<pre><code class="language-text">Model         Tokenizer       Vocab Size
GPT-2         BPE             50,257
GPT-4         tiktoken (BPE)  100,256
BERT          WordPiece       30,522
LLaMA-2       SentencePiece   32,000
LLaMA-3       tiktoken (BPE)  128,256</code></pre>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "NLP"],
      keyPoints: [
        "Subword tokenization (BPE, WordPiece, SentencePiece) balances vocabulary size and sequence length",
        "BPE: iteratively merge most frequent adjacent token pairs; used by GPT-2/GPT-4",
        "WordPiece: maximize likelihood, not just frequency; used by BERT",
        "SentencePiece: byte-level, no word boundary assumption; works for any language"
      ]
    },
    {
      question: "What is the difference between pre-training and fine-tuning in LLMs?",
      answer: `<p>LLMs are trained in two major phases: <strong>pre-training</strong> (learn language from massive data) and <strong>fine-tuning</strong> (specialize for specific tasks or behaviors).</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Pre-training</th><th style='padding:8px;border:1px solid #ddd;'>Fine-tuning</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Goal</td><td style='padding:8px;border:1px solid #ddd;'>Learn language patterns, facts, reasoning</td><td style='padding:8px;border:1px solid #ddd;'>Specialize for tasks (chat, coding, safety)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Data</td><td style='padding:8px;border:1px solid #ddd;'>Trillions of tokens (web, books, code)</td><td style='padding:8px;border:1px solid #ddd;'>Thousands to millions of labeled examples</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Compute</td><td style='padding:8px;border:1px solid #ddd;'>Thousands of GPUs, weeks to months</td><td style='padding:8px;border:1px solid #ddd;'>Few GPUs, hours to days</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Method</td><td style='padding:8px;border:1px solid #ddd;'>Next-token prediction (self-supervised)</td><td style='padding:8px;border:1px solid #ddd;'>Supervised / RLHF / DPO</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Output</td><td style='padding:8px;border:1px solid #ddd;'>Base model (e.g., GPT-4-base)</td><td style='padding:8px;border:1px solid #ddd;'>Chat/instruct model (e.g., GPT-4o)</td></tr>
</table>
<h4>Fine-tuning Stages (Modern LLM Pipeline)</h4>
<ol>
<li><strong>SFT (Supervised Fine-Tuning):</strong> Train on high-quality instruction-response pairs.</li>
<li><strong>RLHF / DPO:</strong> Align with human preferences using reward models or direct preference optimization.</li>
<li><strong>Safety fine-tuning:</strong> Reduce harmful outputs, jailbreak resistance.</li>
</ol>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Training"],
      keyPoints: [
        "Pre-training: self-supervised next-token prediction on trillions of tokens → learns general language",
        "Fine-tuning: supervised (SFT) + alignment (RLHF/DPO) on smaller curated data → specializes for tasks",
        "Pre-training needs thousands of GPUs for months; fine-tuning needs few GPUs for hours/days",
        "Base model → SFT → RLHF/DPO → deployed chat model"
      ]
    },
    {
      question: "What is RLHF (Reinforcement Learning from Human Feedback)?",
      answer: `<p><strong>RLHF</strong> fine-tunes LLMs to produce outputs that humans prefer, using a reward model trained on human preferences. It's how ChatGPT became a good chat assistant instead of just a text predictor.</p>
<h4>The RLHF Pipeline (3 Steps)</h4>
<ol>
<li><strong>Supervised Fine-Tuning (SFT):</strong> Start with a pre-trained model, fine-tune on high-quality demonstrations (good responses to prompts).</li>
<li><strong>Reward Model Training:</strong>
<ul>
<li>Show humans 2+ model outputs for the same prompt.</li>
<li>Humans rank them (A > B > C).</li>
<li>Train a separate reward model to predict human preference scores.</li>
</ul>
</li>
<li><strong>RL Optimization (PPO):</strong>
<ul>
<li>Use the reward model to score new generations.</li>
<li>Optimize the LLM with Proximal Policy Optimization to maximize reward.</li>
<li>Add KL-divergence penalty to stay close to the SFT model (prevent reward hacking).</li>
</ul>
</li>
</ol>
<h4>Alternatives</h4>
<ul>
<li><strong>DPO (Direct Preference Optimization):</strong> Skips the reward model — directly optimize the LLM on preference pairs. Simpler and more stable.</li>
<li><strong>Constitutional AI (Anthropic):</strong> Uses an AI model (not humans) to evaluate outputs against principles, reducing need for human labelers.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Training"],
      keyPoints: [
        "RLHF 3 steps: SFT → Train reward model on human preferences → PPO optimization",
        "Reward model learns to predict which outputs humans prefer; LLM optimizes to maximize reward",
        "KL penalty keeps LLM close to SFT model (prevents reward hacking/degeneration)",
        "DPO skips reward model — directly optimizes on preference pairs; Constitutional AI uses AI feedback"
      ]
    },
    {
      question: "What is prompt engineering, and what are some key techniques?",
      answer: `<p><strong>Prompt engineering</strong> is the practice of crafting inputs (prompts) to get the best possible output from an LLM, without changing the model itself.</p>
<h4>Key Techniques</h4>
<ul>
<li><strong>Zero-shot:</strong> Direct instruction with no examples. "Translate to French: Hello →"</li>
<li><strong>Few-shot:</strong> Provide 1-5 examples in the prompt to show the desired pattern.</li>
<li><strong>Chain-of-Thought (CoT):</strong> Ask the model to reason step-by-step. "Let's think step by step." Improves accuracy on math/logic.</li>
<li><strong>Self-Consistency:</strong> Run CoT multiple times, take the majority answer.</li>
<li><strong>ReAct (Reason + Act):</strong> Alternate reasoning and tool-use steps. "Thought: ... Action: search(...) Observation: ..."</li>
<li><strong>Role prompting:</strong> "You are an expert Python developer..." — sets context and tone.</li>
<li><strong>Structured output:</strong> "Respond in JSON format: {summary, sentiment, keywords}" — constrains output format.</li>
</ul>
<h4>Example: Few-Shot + CoT</h4>
<pre><code class="language-text">Q: 15 + 27 = ? Let's think step by step.
A: 15 + 27. 5+7=12, carry 1. 1+2+1=4. Answer: 42.

Q: 89 - 34 = ? Let's think step by step.
A: [model continues the pattern]</code></pre>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Prompt Engineering"],
      keyPoints: [
        "Zero-shot: direct instruction; Few-shot: provide examples; CoT: 'think step by step' for reasoning",
        "Self-consistency: run CoT multiple times, majority vote; ReAct: alternate reasoning + tool use",
        "Role prompting sets expertise context; structured output constrains format (JSON, tables)",
        "Prompt engineering is model-free improvement — no weight changes needed"
      ]
    },
    {
      question: "What is Retrieval-Augmented Generation (RAG)?",
      answer: `<p><strong>RAG</strong> combines an LLM with an external knowledge base. Instead of relying solely on knowledge baked into model weights, RAG retrieves relevant documents at query time and feeds them to the LLM to generate grounded answers.</p>
<h4>How RAG Works</h4>
<pre><code class="language-text">1. User asks: "What is our company's refund policy?"

2. RETRIEVE:
   - Embed the query
   - Search vector database (Pinecone, Weaviate, FAISS)
   - Get top-k relevant document chunks

3. AUGMENT:
   - Create prompt: "Use the following context to answer:
     [retrieved documents]
     Question: What is our refund policy?"

4. GENERATE:
   - LLM produces answer grounded in retrieved docs
   - Can cite sources</code></pre>
<h4>Why RAG?</h4>
<ul>
<li><strong>Fresh knowledge:</strong> Update the document store without retraining the model.</li>
<li><strong>Domain-specific:</strong> Works with private/company data the model never saw.</li>
<li><strong>Reduces hallucination:</strong> Answer is grounded in retrieved evidence.</li>
<li><strong>Citations:</strong> Can point to source documents for verification.</li>
</ul>
<h4>Components</h4>
<ul>
<li><strong>Embedding model:</strong> e.g., text-embedding-ada-002, BGE, E5</li>
<li><strong>Vector DB:</strong> Pinecone, Weaviate, FAISS, Chroma, pgvector</li>
<li><strong>Chunking strategy:</strong> Split documents into 200-1000 token chunks with overlap</li>
<li><strong>Retrieval:</strong> Top-k similarity search, optionally with reranking</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "RAG"],
      keyPoints: [
        "RAG = Retrieve relevant docs → Augment prompt with them → Generate grounded answer",
        "Solves fresh knowledge, private data, hallucination, and citation needs without retraining",
        "Key components: embedding model, vector DB, chunking strategy, retrieval + optional reranking",
        "Can update knowledge by updating the document store — no model retraining needed"
      ]
    },
    {
      question: "What is LoRA (Low-Rank Adaptation) and how does it make fine-tuning efficient?",
      answer: `<p><strong>LoRA</strong> fine-tunes LLMs by learning low-rank decomposition matrices instead of updating all weights. It can match full fine-tuning quality while training <strong>100× fewer parameters</strong>.</p>
<h4>How LoRA Works</h4>
<pre><code class="language-text">Original:  Y = X × W        (W is d×d, e.g., 4096×4096)

LoRA:     Y = X × W + X × A × B

  W: frozen (pre-trained weights, not updated)
  A: d × r  (down-projection, e.g., 4096 × 8)
  B: r × d  (up-projection, e.g., 8 × 4096)
  r: rank (usually 4-64)

# Trainable params: 2 × d × r instead of d²
# For d=4096, r=8:  65,536 vs 16,777,216  (256× fewer)</code></pre>
<h4>Key Advantages</h4>
<ul>
<li><strong>Small trainable footprint:</strong> Only A and B matrices are trained; original W stays frozen.</li>
<li><strong>Swappable adapters:</strong> Different LoRA adapters for different tasks — swap at inference, no merging needed.</li>
<li><strong>Memory efficient:</strong> Can fine-tune 70B models on a single GPU.</li>
<li><strong>No inference overhead:</strong> A×B can be merged into W after training → same inference speed.</li>
</ul>
<h4>Variants</h4>
<ul>
<li><strong>QLoRA:</strong> Quantize W to 4-bit, then apply LoRA → fine-tune 70B on a single 48GB GPU.</li>
<li><strong>AdaLoRA:</strong> Dynamically allocates rank budget across layers.</li>
<li><strong>DoRA:</strong> Decomposes into direction and magnitude for better quality.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Fine-tuning"],
      keyPoints: [
        "LoRA: freeze W, train low-rank A (d×r) and B (r×d) → 100× fewer trainable params",
        "Rank r typically 4-64; QLoRA quantizes W to 4-bit + LoRA for extreme memory savings",
        "Adapters are swappable per task; can merge A×B into W for zero inference overhead",
        "Enables fine-tuning 70B+ models on consumer GPUs"
      ]
    },
{
      question: "What is model quantization and why is it important for LLM deployment?",
      answer: `<p><strong>Quantization</strong> reduces the precision of model weights (e.g., 32-bit floats → 4-bit integers), dramatically shrinking model size and memory usage with minimal quality loss.</p>
<h4>Precision Levels</h4>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Precision</th><th style='padding:8px;border:1px solid #ddd;'>Bits per weight</th><th style='padding:8px;border:1px solid #ddd;'>70B model size</th><th style='padding:8px;border:1px solid #ddd;'>Quality</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>FP32</td><td style='padding:8px;border:1px solid #ddd;'>32</td><td style='padding:8px;border:1px solid #ddd;'>280 GB</td><td style='padding:8px;border:1px solid #ddd;'>Baseline</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>FP16/BF16</td><td style='padding:8px;border:1px solid #ddd;'>16</td><td style='padding:8px;border:1px solid #ddd;'>140 GB</td><td style='padding:8px;border:1px solid #ddd;'>~Lossless</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>INT8</td><td style='padding:8px;border:1px solid #ddd;'>8</td><td style='padding:8px;border:1px solid #ddd;'>70 GB</td><td style='padding:8px;border:1px solid #ddd;'>~1% drop</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>INT4</td><td style='padding:8px;border:1px solid #ddd;'>4</td><td style='padding:8px;border:1px solid #ddd;'>35 GB</td><td style='padding:8px;border:1px solid #ddd;'>~2-3% drop</td></tr>
</table>
<h4>Quantization Methods</h4>
<ul>
<li><strong>PTQ (Post-Training Quantization):</strong> Convert weights after training. Fast but may lose precision. Methods: GPTQ, AWQ, GGUF.</li>
<li><strong>QAT (Quantization-Aware Training):</strong> Simulate quantization during training so the model adapts. Better quality but needs retraining.</li>
<li><strong>GGUF (llama.cpp):</strong> Popular format for running LLMs on CPU/consumer hardware. Supports 2-8 bit quantization.</li>
</ul>
<h4>Why It Matters</h4>
<ul>
<li>Run 70B models on a single 24GB GPU (instead of 4× A100 80GB)</li>
<li>Faster inference: less memory bandwidth → faster token generation</li>
<li>Enables on-device LLMs (phones, laptops)</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Deployment"],
      keyPoints: [
        "Quantization: reduce weight precision (FP32 → INT4), shrinking model 8× with ~2-3% quality loss",
        "70B model: 280GB (FP32) → 35GB (INT4) — fits on consumer GPUs",
        "PTQ (GPTQ, AWQ, GGUF): convert after training; QAT: simulate during training for better quality",
        "Enables on-device LLMs and dramatically reduces inference cost"
      ]
    },
    {
      question: "What is knowledge distillation in LLMs?",
      answer: `<p><strong>Knowledge distillation</strong> transfers knowledge from a large "teacher" model to a smaller "student" model, so the student can achieve similar performance at a fraction of the size and cost.</p>
<h4>How It Works</h4>
<pre><code class="language-text">Teacher: GPT-4 (1.7T params) → produces soft labels (logits/probabilities)
Student: Small model (1-7B params) → trained to match teacher's outputs

Loss = α × KL(student_logits, teacher_logits) + (1-α) × CE(student_logits, true_labels)

# KL = Kullback-Leibler divergence (measures distribution similarity)
# CE = Cross-entropy (standard supervised loss)
# α = weight between distillation and true label loss</code></pre>
<h4>Distillation Strategies</h4>
<ul>
<li><strong>Logit distillation:</strong> Student matches teacher's output probability distribution (soft targets carry more info than hard labels).</li>
<li><strong>Response distillation:</strong> Generate outputs from teacher, train student on these as high-quality training data.</li>
<li><strong>Feature distillation:</strong> Student matches intermediate representations (hidden states) of the teacher.</li>
</ul>
<h4>Examples</h4>
<ul>
<li><strong>DistilBERT:</strong> 60% smaller, 60% faster, retains 97% of BERT's performance.</li>
<li><strong>Alpaca/Vicuna:</strong> Student LLaMA models distilled from GPT-3.5/GPT-4 responses.</li>
<li><strong>Phi系列 (Microsoft):</strong> Small models trained on GPT-4-generated textbook data.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Training"],
      keyPoints: [
        "Distillation: train small student model to match large teacher model's output distributions",
        "Loss combines KL divergence (soft targets) + cross-entropy (hard labels)",
        "DistilBERT: 60% smaller, 60% faster, 97% of BERT quality",
        "Strategies: logit distillation, response distillation (synthetic data), feature distillation"
      ]
    },
    {
      question: "What is perplexity and how is it used to evaluate LLMs?",
      answer: `<p><strong>Perplexity (PPL)</strong> measures how well a language model predicts a sequence of text. Lower perplexity = better prediction. It's the exponentiated average negative log-likelihood.</p>
<h4>Formula</h4>
<pre><code class="language-text">PPL = exp(−1/N × Σ log P(w_i | w_1, ..., w_{i−1}))

# N = number of tokens
# P(w_i | context) = model's predicted probability for token w_i

# Intuition: "How surprised is the model by the text?"
# PPL = 1   → model is certain (perfect prediction, never happens)
# PPL = 10  → model is as confused as if choosing from 10 equally likely words
# PPL = 100 → model is very confused</code></pre>
<h4>Interpretation</h4>
<ul>
<li>PPL measures the <strong>average branching factor</strong> — how many equally likely next words the model is choosing between.</li>
<li>Lower is better. But PPL is only comparable across models on the <strong>same dataset and tokenizer</strong>.</li>
<li>Good models on standard benchmarks: WikiText-103 PPL < 20, Penn Treebank PPL < 40.</li>
</ul>
<h4>Limitations</h4>
<ul>
<li><strong>Not comparable across tokenizers:</strong> Different tokenizers produce different N and P(w_i).</li>
<li><strong>Doesn't measure generation quality:</strong> A model can have low PPL but produce boring or unsafe text.</li>
<li><strong>Domain dependent:</strong> A model may have low PPL on news but high PPL on code.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Evaluation"],
      keyPoints: [
        "Perplexity = exp(−avg log-likelihood) — lower is better",
        "Intuition: average branching factor — how many equally likely next words the model considers",
        "Only comparable across models with same tokenizer and dataset",
        "Measures prediction quality, not generation quality (fluency, safety, helpfulness)"
      ]
    },
    {
      question: "What is the BLEU score and how is it used in NLP evaluation?",
      answer: `<p><strong>BLEU (Bilingual Evaluation Understudy)</strong> is a metric for evaluating machine translation by comparing n-gram overlap between model output and reference translations.</p>
<h4>How BLEU Works</h4>
<pre><code class="language-text">Reference: "the cat is on the mat"
Output:    "the cat the cat on the mat"

1. Count matching n-grams (1-gram to 4-gram):
   1-gram precision = matches / total 1-grams in output
   2-gram precision = matching bigrams / total bigrams
   ...

2. Geometric mean of n-gram precisions:
   BP = brevity penalty (penalize too-short outputs)
   BLEU = BP × exp(Σ w_n × log p_n)

   BP = 1 if output_len &gt; ref_len
   BP = exp(1 − output_len/ref_len) if output_len ≤ ref_len</code></pre>
<h4>BLEU Score Ranges</h4>
<ul>
<li><strong>BLEU < 10:</strong> Poor translation</li>
<li><strong>BLEU 10-30:</strong> Understandable but imperfect</li>
<li><strong>BLEU 30-50:</strong> Good quality translation</li>
<li><strong>BLEU > 50:</strong> High quality (some n-grams match reference)</li>
</ul>
<h4>Limitations</h4>
<ul>
<li><strong>Exact match only:</strong> Synonyms and paraphrases count as errors ("happy" vs "glad").</li>
<li><strong>Single reference:</strong> Multiple valid translations exist, but BLEU compares against one or few references.</li>
<li><strong>Not for LLM generation:</strong> BLEU is for translation, not open-ended generation. For Q&A/summarization, use ROUGE, BERTScore, or human evaluation.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Evaluation"],
      keyPoints: [
        "BLEU: n-gram overlap (1-4 grams) between output and reference translation + brevity penalty",
        "BLEU > 30 = good quality; BLEU > 50 = high quality translation",
        "Limitation: exact match only — synonyms count as errors; multiple valid translations exist",
        "For LLM generation tasks, use ROUGE (summarization) or BERTScore instead"
      ]
    },
    {
      question: "What are hallucinations in LLMs, and how can they be reduced?",
      answer: `<p><strong>Hallucinations</strong> are when an LLM generates text that sounds plausible but is factually wrong, fabricated, or unsupported. The model doesn't "know" truth — it predicts likely next tokens.</p>
<h4>Types of Hallucination</h4>
<ul>
<li><strong>Factual hallucination:</strong> "Albert Einstein was born in 1879 in Vienna, Austria" (wrong — born in Ulm, Germany, 1879).</li>
<li><strong>Fabrication:</strong> Inventing citations, papers, or entities that don't exist. "As shown in Smith et al. 2023..."</li>
<li><strong>Numerical:</strong> Wrong calculations presented confidently. "17 × 23 = 391" (actual: 391... OK that one's right. But models do get math wrong.)</li>
<li><strong>Logical:</strong> Sound reasoning from false premises, or contradictory statements within one response.</li>
</ul>
<h4>Causes</h4>
<ul>
<li>Training data contains errors or conflicting information.</li>
<li>Model has no ground-truth verification mechanism — it optimizes fluency, not factualness.</li>
<li>Knowledge cutoff: model doesn't know post-training events.</li>
<li>Over-generalization from patterns.</li>
</ul>
<h4>Mitigation Strategies</h4>
<ul>
<li><strong>RAG:</strong> Provide external facts in the prompt (retrieval-augmented generation).</li>
<li><strong>Grounding:</strong> "Answer only based on the provided context."</li>
<li><strong>RLHF:</strong> Train model to say "I don't know" when uncertain.</li>
<li><strong>Chain-of-thought:</strong> Step-by-step reasoning catches more errors.</li>
<li><strong>Citations:</strong> Require model to cite sources; verify them.</li>
<li><strong>Multi-step verification:</strong> Use a second model to fact-check the first.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Safety"],
      keyPoints: [
        "Hallucination = plausible-sounding but factually wrong output; LLMs optimize fluency not truth",
        "Types: factual errors, fabricated citations, wrong math, logical contradictions",
        "Causes: training data errors, no verification mechanism, knowledge cutoff, over-generalization",
        "Mitigation: RAG, grounding instructions, RLHF for uncertainty, CoT reasoning, citations, multi-step verification"
      ]
    },
    {
      question: "What is a context window in LLMs, and how does it affect performance?",
      answer: `<p>The <strong>context window</strong> is the maximum number of tokens an LLM can process in a single forward pass — including both the input prompt and the generated output.</p>
<h4>Context Window Sizes (2024-2025)</h4>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Model</th><th style='padding:8px;border:1px solid #ddd;'>Context Window</th><th style='padding:8px;border:1px solid #ddd;'>Approx. words</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>GPT-3</td><td style='padding:8px;border:1px solid #ddd;'>2K</td><td style='padding:8px;border:1px solid #ddd;'>~1,500</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>GPT-4 (original)</td><td style='padding:8px;border:1px solid #ddd;'>8K</td><td style='padding:8px;border:1px solid #ddd;'>~6,000</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>GPT-4 Turbo</td><td style='padding:8px;border:1px solid #ddd;'>128K</td><td style='padding:8px;border:1px solid #ddd;'>~96,000</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Claude 3.5 Sonnet</td><td style='padding:8px;border:1px solid #ddd;'>200K</td><td style='padding:8px;border:1px solid #ddd;'>~150,000</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Gemini 1.5 Pro</td><td style='padding:8px;border:1px solid #ddd;'>2M</td><td style='padding:8px;border:1px solid #ddd;'>~1,500,000</td></tr>
</table>
<h4>Impact on Performance</h4>
<ul>
<li><strong>Long context:</strong> Can process entire books, codebases, or long conversations. But models may "lose" information in the middle of long contexts ("lost in the middle" problem).</li>
<li><strong>Cost:</strong> Attention is O(n²) — doubling context quadruples attention computation.</li>
<li><strong>Memory:</strong> KV cache grows linearly with context length, using significant GPU memory.</li>
<li><strong>Quality:</strong> Very long contexts can dilute attention; important info may get less weight.</li>
</ul>
<h4>Techniques for Long Context</h4>
<ul>
<li><strong>Sliding window attention:</strong> Each token only attends to a local window.</li>
<li><strong>Flash Attention:</strong> Optimized attention computation that reduces memory I/O.</li>
<li><strong>Ring Attention:</strong> Distributes long context across multiple GPUs.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Architecture"],
      keyPoints: [
        "Context window = max tokens (input + output) the model can process in one pass",
        "Grew from 2K (GPT-3) to 2M (Gemini 1.5 Pro) — but attention is O(n²) in cost",
        "'Lost in the middle' problem: models miss info buried in long contexts",
        "Techniques: sliding window, Flash Attention, Ring Attention for long context efficiency"
      ]
    },
    {
      question: "What is the KV cache, and why is it important for LLM inference?",
      answer: `<p>The <strong>KV cache</strong> stores the Key and Value projections of all previously processed tokens so they don't need to be recomputed for each new token generated. It's the key to fast autoregressive generation.</p>
<h4>How It Works</h4>
<pre><code class="language-text">Generating: "The cat sat on the"

Step 1: Process "The" → compute K_1, V_1 → store in cache
Step 2: Process "cat" → compute K_2, V_2 → store in cache
  - Attention for "cat" uses [K_1, K_2] and [V_1, V_2]
Step 3: Process "sat" → compute K_3, V_3 → store in cache
  - Attention uses [K_1, K_2, K_3] and [V_1, V_2, V_3]

# Without KV cache: step N recomputes all K,V for N−1 previous tokens → O(N²)
# With KV cache: each step only computes 1 new K,V → O(N) per step, O(N²) total amortized</code></pre>
<h4>Memory Cost</h4>
<pre><code class="language-text">Per token per layer:
  K: 1 × n_heads × d_head × 2 bytes (FP16)
  V: 1 × n_heads × d_head × 2 bytes

Total for LLaMA-2 70B (80 layers, 64 heads, d_head=128):
  Per token: 80 × 64 × 128 × 2 × 2 = 2.6 MB
  4096 token context: ~10.5 GB just for KV cache
  32768 token context: ~84 GB</code></pre>
<h4>Optimizations</h4>
<ul>
<li><strong>GQA (Grouped Query Attention):</strong> Share K,V across multiple query heads → reduces KV cache size. Used in LLaMA-2 70B.</li>
<li><strong>PagedAttention (vLLM):</strong> Store KV cache in non-contiguous pages (like virtual memory) → reduce fragmentation.</li>
<li><strong>KV cache quantization:</strong> Store K,V in INT8 or INT4 → 2-4× memory reduction.</li>
<li><strong>Sliding window KV:</strong> Only keep recent tokens' KV → fixed memory regardless of context length.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Inference"],
      keyPoints: [
        "KV cache stores Key/Value projections of past tokens → avoids recomputing them for each new token",
        "Reduces per-step cost from O(N²) to O(N) amortized — essential for fast autoregressive generation",
        "Memory grows linearly with context length — can exceed 80GB for long contexts on 70B models",
        "Optimizations: GQA (shared KV), PagedAttention (vLLM), KV quantization, sliding window"
      ]
    },
    {
      question: "What is Mixture of Experts (MoE) and how does it scale LLMs efficiently?",
      answer: `<p><strong>Mixture of Experts (MoE)</strong> uses multiple specialized "expert" networks within each layer. A gating router selects only the top-k experts per token, so total parameters increase but <em>active</em> parameters per token stay small.</p>
<h4>How MoE Works</h4>
<pre><code class="language-text">Each Transformer layer's FFN is replaced by:
  - N expert FFNs (e.g., 8 or 64)
  - A gating/router network

For token x:
  gate_scores = softmax(W_gate × x)   # N expert scores
  select top-k experts (e.g., k=2)
  output = Σ gate_scores[i] × expert_i(x)   # only for selected experts

# Example: Mixtral 8×7B
  - 8 experts per layer, top-2 routed
  - Total params: 47B (all experts + shared layers)
  - Active params per token: ~13B (2 experts + attention)
  -→ 47B quality at 13B inference cost</code></pre>
<h4>Advantages</h4>
<ul>
<li><strong>Decoupled capacity and compute:</strong> 8× more parameters but same FLOPs per token as using 2 experts.</li>
<li><strong>Specialization:</strong> Different experts may naturally specialize in different languages, topics, or skills.</li>
<li><strong>Scalability:</strong> Add more experts → more capacity without proportional compute increase.</li>
</ul>
<h4>Challenges</h4>
<ul>
<li><strong>Memory:</strong> All expert weights must be in GPU memory even if unused per token.</li>
<li><strong>Load balancing:</strong> If all tokens route to the same expert, it's effectively a dense model. Need auxiliary loss to encourage even routing.</li>
<li><strong>Communication overhead:</strong> In distributed training, experts are across GPUs → all-to-all communication needed.</li>
</ul>
<h4>Examples</h4>
<ul>
<li><strong>Mixtral 8×7B:</strong> 47B total, 13B active — matches GPT-3.5 quality</li>
<li><strong>GPT-4:</strong> Reported to be an MoE with 16 experts (8 assigned per token)</li>
<li><strong>DeepSeek-V2:</strong> 236B total, 21B active — fine-grained expert segmentation</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Architecture"],
      keyPoints: [
        "MoE: multiple expert FFNs per layer, router selects top-k → large total params, small active params",
        "Mixtral 8×7B: 47B total, ~13B active per token — GPT-3.5 quality at lower compute",
        "Challenge: load balancing (avoid all tokens routing to one expert), high memory for all weights",
        "GPT-4 reportedly uses MoE with 16 experts (8 per token)"
      ]
    },
    {
      question: "What is dropout, and how does it prevent overfitting in neural networks?",
      answer: `<p><strong>Dropout</strong> randomly sets a fraction of neuron activations to zero during training, forcing the network to learn redundant, robust features instead of relying on specific neurons.</p>
<h4>How It Works</h4>
<pre><code class="language-text">During training (each forward pass):
  For each neuron in a dropout layer:
    With probability p (dropout rate, e.g., 0.1):
      Set activation to 0
    With probability (1-p):
      Scale activation by 1/(1-p)  # inverted dropout

During inference:
  Dropout is disabled — all neurons active
  No scaling needed (already handled in training)</code></pre>
<h4>Intuition</h4>
<ul>
<li>Without dropout, neurons can co-adapt — they learn to rely on specific other neurons. This creates fragile representations.</li>
<li>With dropout, each neuron must learn features that are useful <em>regardless</em> of which other neurons are present.</li>
<li>Equivalent to training an ensemble of sub-networks (each dropout mask = different sub-network) and averaging their predictions.</li>
</ul>
<h4>Where Dropout Is Used in Transformers</h4>
<ul>
<li><strong>Attention weights:</strong> Dropout on attention probabilities (before applying to values).</li>
<li><strong>FFN output:</strong> Dropout after the position-wise feed-forward network.</li>
<li><strong>Embeddings:</strong> Dropout on token + positional embeddings.</li>
<li><strong>Residual connections:</strong> Dropout on the output of each sub-layer before adding to residual.</li>
</ul>
<h4>Typical Values</h4>
<ul>
<li>BERT: dropout = 0.1</li>
<li>GPT-2: dropout = 0.1</li>
<li>Large models (>1B): Often lower dropout (0.0-0.1) since large data + parameters make overfitting less likely.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Dropout: randomly zero out p% of activations during training → prevents co-adaptation",
        "Training: scale surviving neurons by 1/(1-p); inference: dropout disabled",
        "Equivalent to ensemble of sub-networks — improves generalization",
        "In Transformers: applied to attention weights, FFN output, embeddings, residual connections"
      ]
    },
    {
      question: "What are the main gradient descent optimization algorithms used in training LLMs?",
      answer: `<p>LLMs are trained using variants of <strong>gradient descent</strong> — updating weights in the direction that reduces loss. The choice of optimizer affects training speed, stability, and final quality.</p>
<h4>Key Optimizers</h4>
<ul>
<li><strong>SGD (Stochastic Gradient Descent):</strong> <code>w = w − lr × gradient</code>. Simple but slow convergence, easily stuck in local minima or saddle points.</li>
<li><strong>Momentum:</strong> <code>v = β × v + (1−β) × gradient; w = w − lr × v</code>. Accumulates gradient direction to accelerate through flat regions and smooth oscillations.</li>
<li><strong>Adam (Adaptive Moment Estimation):</strong> Combines momentum (first moment) and squared gradient (second moment / RMSprop):
<pre><code class="language-text">m = β₁ × m + (1−β₁) × g        # first moment (momentum)
v = β₂ × v + (1−β₂) × g²       # second moment (adaptive lr per param)
m̂ = m / (1−β₁ᵗ)               # bias correction
v̂ = v / (1−β₂ᵗ)
w = w − lr × m̂ / (√v̂ + ε)</code></pre>
Each parameter gets its own adaptive learning rate based on gradient history.</li>
<li><strong>AdamW:</strong> Fix for Adam's weight decay. Decouples weight decay from the adaptive learning rate:
<pre><code class="language-text">w = w − lr × (m̂ / √v̂ + λ × w)</code></pre>
Standard for training most modern LLMs (GPT-4, LLaMA, etc.).</li>
</ul>
<h4>Training Hyperparameters (LLaMA-2 70B example)</h4>
<ul>
<li>Optimizer: AdamW</li>
<li>β₁ = 0.9, β₂ = 0.95</li>
<li>Weight decay (λ) = 0.1</li>
<li>Learning rate: 3×10⁻⁴ with cosine schedule + warmup</li>
<li>Gradient clipping: max norm 1.0</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Training"],
      keyPoints: [
        "Adam: combines momentum (1st moment) + adaptive per-parameter lr (2nd moment) with bias correction",
        "AdamW: decouples weight decay from adaptive lr → standard optimizer for modern LLMs (LLaMA, GPT)",
        "SGD with momentum is simpler but slower convergence than Adam variants",
        "Key hyperparams: β₁=0.9, β₂=0.95, weight decay 0.1, cosine LR schedule + warmup"
      ]
    },
    {
      question: "What is transfer learning, and how does it relate to LLMs?",
      answer: `<p><strong>Transfer learning</strong> reuses knowledge from a pre-trained model on a new task. LLMs are the ultimate transfer learning tool: train once on massive general data, then adapt for countless downstream tasks.</p>
<h4>Transfer Learning Paradigms</h4>
<ul>
<li><strong>Fine-tuning:</strong> Update all (or some) weights on task-specific data. Most common for LLMs.</li>
<li><strong>Feature extraction:</strong> Use pretrained model's representations as features for a smaller model. (Common with BERT, ResNet.)</li>
<li><strong>Prompting (zero/few-shot):</strong> No weight updates — guide the model with instructions and examples. Unique to LLMs.</li>
<li><strong>Adapter methods:</strong> Insert small trainable modules between frozen layers (LoRA, prefix tuning, adapters).</li>
</ul>
<h4>LLM Transfer Learning Pipeline</h4>
<pre><code class="language-text">Pre-training (web, books, code — trillions of tokens)
    │
    ▼
Base model (general language understanding)
    │
    ├──→ SFT (supervised fine-tuning on instructions)
    │       │
    │       ▼
    │    Chat/Instruct model
    │       │
    │       ├──→ LoRA on medical data → Medical chatbot
    │       ├──→ LoRA on legal data → Legal assistant
    │       └──→ LoRA on code data → Code generator
    │
    └──→ Zero-shot / few-shot prompting (no weight changes)
            │
            ▼
        General-purpose QA, summarization, translation, etc.</code></pre>
<h4>Why Transfer Learning Works</h4>
<ul>
<li><strong>Low-level features transfer:</strong> General language patterns (syntax, semantics, facts) learned during pre-training are useful across all tasks.</li>
<li><strong>Few-shot adaptation:</strong> With good prompting, models transfer to new tasks with zero training data.</li>
<li><strong>Cost efficiency:</strong> Pre-train once (expensive), adapt many times (cheap).</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Training"],
      keyPoints: [
        "Transfer learning: reuse pretrained model's knowledge for new tasks — LLMs are the ultimate example",
        "Methods: fine-tuning (update weights), prompting (no weight changes), adapters (LoRA), feature extraction",
        "Pre-train once (expensive) → adapt to countless tasks cheaply (LoRA, prompting, SFT)",
        "Works because general language patterns (syntax, semantics, facts) transfer across tasks"
      ]
    },
    {
      question: "What is overfitting and underfitting, and how do they apply to LLMs?",
      answer: `<p><strong>Overfitting</strong> = model learns training data too well, including noise, and fails on new data. <strong>Underfitting</strong> = model fails to capture patterns in training data.</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Overfitting</th><th style='padding:8px;border:1px solid #ddd;'>Underfitting</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Training loss</td><td style='padding:8px;border:1px solid #ddd;'>Very low</td><td style='padding:8px;border:1px solid #ddd;'>High</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Validation loss</td><td style='padding:8px;border:1px solid #ddd;'>High (gap with training)</td><td style='padding:8px;border:1px solid #ddd;'>High (similar to training)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Model complexity</td><td style='padding:8px;border:1px solid #ddd;'>Too high vs. data</td><td style='padding:8px;border:1px solid #ddd;'>Too low vs. data</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Cause</td><td style='padding:8px;border:1px solid #ddd;'>Too many params, too little data, too many epochs</td><td style='padding:8px;border:1px solid #ddd;'>Too few params, too little training</td></tr>
</table>
<h4>In LLMs Specifically</h4>
<ul>
<li><strong>Pre-trained LLMs rarely overfit</strong> — they have billions of parameters but training data is trillions of tokens. Data >>> parameters.</li>
<li><strong>Fine-tuning can overfit</strong> — small task-specific datasets (thousands of examples) vs. billions of parameters. Loss drops on train but rises on validation.</li>
<li><strong>Mitigations for fine-tuning:</strong>
<ul>
<li>Early stopping (monitor validation loss)</li>
<li>Lower learning rate (e.g., 1e-5 vs 1e-4)</li>
<li>Fewer training epochs (1-3)</li>
<li>Dropout, weight decay</li>
<li>Data augmentation, more diverse training data</li>
<li>LoRA (fewer trainable parameters → less overfitting)</li>
</ul>
</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Deep Learning"],
      keyPoints: [
        "Overfitting: low train loss, high val loss (gap). Underfitting: both losses high.",
        "Pre-trained LLMs rarely overfit (data >> parameters) — but fine-tuning on small datasets often does",
        "Fine-tuning fixes: early stopping, low LR (1e-5), few epochs (1-3), dropout, LoRA",
        "Detecting overfitting: plot train vs val loss; stop when val loss starts rising"
      ]
    },
    {
      question: "What is a token in LLMs, and how do token limits affect cost and performance?",
      answer: `<p>A <strong>token</strong> is the atomic unit of text processed by an LLM. Tokens are roughly equivalent to 4 characters or ~0.75 words in English.</p>
<h4>Token Examples (GPT-4 tokenizer)</h4>
<pre><code class="language-text">"Hello, world!"     → ["Hello", ",", " world", "!"]  → 4 tokens
"tokenization"      → ["token", "ization"]           → 2 tokens
"ChatGPT"           → ["Chat", "G", "PT"]            → 3 tokens
"unbelievable"      → ["un", "believ", "able"]       → 3 tokens

Average: 1 token ≈ 4 chars ≈ 0.75 words</code></pre>
<h4>Why Tokens Matter</h4>
<ul>
<li><strong>API cost is per-token:</strong> GPT-4 Turbo: $10/M input tokens, $30/M output tokens. Long prompts = expensive.</li>
<li><strong>Context window is in tokens:</strong> 128K context = ~96K words, not exactly.</li>
<li><strong>Output length limits:</strong> Max tokens parameter caps the response length.</li>
<li><strong>Latency scales with tokens:</strong> More input tokens = slower first response. More output tokens = slower streaming.</li>
</ul>
<h4>Multilingual Tokenization Cost</h4>
<p>Tokenizers are usually English-optimized. Other languages can be much more expensive:</p>
<pre><code class="language-text">"Hello world"        → 2 tokens
"こんにちは"          → 4 tokens   (Japanese, ~2x more tokens)
"안녕하세요"          → 5 tokens   (Korean, ~2.5x more)
"你好世界"            → 5 tokens   (Chinese, ~2.5x more)

# Some scripts (Tamil, Thai, Devanagari) can be 3-5x less efficient</code></pre>
<h4>Practical Tips</h4>
<ul>
<li>Use tiktoken library to count tokens before sending API calls.</li>
<li>Truncate or summarize long inputs to fit context + leave room for output.</li>
<li>For non-English content, factor in higher token cost or use multilingual-optimized models.</li>
</ul>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "LLMs", "Fundamentals"],
      keyPoints: [
        "Token ≈ 4 chars ≈ 0.75 words in English; cost and context are measured in tokens",
        "GPT-4 Turbo pricing: $10/M input + $30/M output tokens — long prompts are expensive",
        "Non-English (Japanese, Korean, Chinese, Tamil) often needs 2-5x more tokens than English for same content",
        "Use tiktoken to count tokens before API calls; leave room for output in context window"
      ]
    },
    {
      question: "What does the Temperature parameter control in an LLM, and what happens when it changes from 0.2 to 1.5?",
      answer: `<p>The <strong>Temperature</strong> parameter in an LLM is a scaling factor applied to the logits (raw model outputs) before softmax, which directly controls the <strong>sharpness of the probability distribution</strong> over the next token. It does <strong>not</strong> affect model accuracy, creativity as a property, or context window.</p>
<h4>What Temperature Actually Controls</h4>
<ul>
<li><strong>Probability distribution shape:</strong> Low temperature → sharp/peaked distribution (predictable); high temperature → flat/distributed (creative/random).</li>
<li><strong>Token selection diversity:</strong> Higher temp → more variety in outputs; lower temp → more deterministic.</li>
</ul>
<h4>Technical Mechanics</h4>
<pre><code class="language-text">logits = model_output              # raw scores (e.g., [2.1, 1.4, 0.7, 0.2])
scaled = logits / temperature
probs = softmax(scaled)

# Temperature = 0.2:  scaled = [10.5, 7.0, 3.5, 1.0]  →  probs ≈ [0.97, 0.03, 0.00, 0.00]
# Temperature = 1.0:  scaled = [2.1, 1.4, 0.7, 0.2]   →  probs ≈ [0.50, 0.25, 0.13, 0.08]
# Temperature = 1.5:  scaled = [1.4, 0.93, 0.47, 0.13] → probs ≈ [0.42, 0.24, 0.16, 0.11]</code></pre>
<h4>What Temperature Does NOT Control</h4>
<ul>
<li><strong>Model accuracy:</strong> Accuracy is determined by training data and architecture, not temperature.</li>
<li><strong>Creativity as a property:</strong> The model has the same knowledge regardless of temperature; temperature only changes which token it picks.</li>
<li><strong>Context window:</strong> Temperature does not change how many tokens the model can see.</li>
</ul>
<h4>What Changes from 0.2 to 1.5</h4>
<ul>
<li>0.2 → very peaked: model almost always picks highest-probability token (good for factual Q&amp;A, code)</li>
<li>1.0 → default: balanced between predictability and variety</li>
<li>1.5 → very flat: rare tokens get sampled more often (creative writing, brainstorming, but risk of incoherence)</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Sampling"],
      keyPoints: [
        "Temperature divides logits before softmax → controls sharpness of token probability distribution",
        "Does NOT affect model accuracy, creativity-as-property, or context window — only token selection",
        "0.2: peaked → predictable; 1.0: balanced; 1.5: flat → creative but may produce incoherent text",
        "Use low temp for code/factual Q&A, high temp for creative writing/brainstorming"
      ]
    },
    {
      question: "Why is Temperature = 0 not always fully deterministic in production?",
      answer: `<p>Setting temperature to 0 (or a very small value like 1e-5) makes the model pick the <strong>highest-probability token at every step</strong>, which should be deterministic <em>in theory</em>. In practice, several factors can introduce variation:</p>
<h4>Why It Can Still Vary</h4>
<ul>
<li><strong>Batch effects:</strong> Some inference runtimes use <em>continuous batching</em> or dynamic batching where different requests share GPU kernels. Floating-point reductions across batches may use non-deterministic algorithms (e.g., FlashAttention).</li>
<li><strong>GPU non-determinism:</strong> Parallel floating-point operations on GPUs (especially matrix multiplications) are not always bit-exact. Different kernel implementations (cuBLAS versions) can produce slightly different results.</li>
<li><strong>Tied probabilities:</strong> If two tokens have identical (or near-identical) logit values, which one wins can depend on hardware-level ordering — even with greedy decoding.</li>
<li><strong>KV cache precision:</strong> Mixed-precision inference (FP16/BF16 vs FP32) can introduce small numerical differences that compound over many tokens.</li>
<li><strong>Prompt formatting:</strong> Whitespace, special tokens, or chat template differences (system message vs no system message) can shift logits subtly.</li>
<li><strong>Model parallelism:</strong> Tensor parallelism splits weights across GPUs; reduction order across devices can introduce non-determinism.</li>
</ul>
<h4>How Production Systems Ensure Consistency</h4>
<ul>
<li><strong>Seed control:</strong> Set torch/numpy random seeds (but does not affect core LLM forward pass).</li>
<li><strong>Greedy decoding + greedy sampling:</strong> Use <code>do_sample=False</code> (Hugging Face) or equivalent.</li>
<li><strong>Deterministic kernels:</strong> Use FlashAttention with <code>deterministic=True</code> or CPU inference for reproducibility.</li>
<li><strong>Single GPU, single batch:</strong> Avoid batching and parallelism when reproducibility matters most.</li>
<li><strong>Pin model precision:</strong> Run inference in FP32 (slower but reproducible) instead of FP16.</li>
<li><strong>Lock chat template:</strong> Use the exact same prompt format every time, including system message.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Sampling", "Production"],
      keyPoints: [
        "Temperature=0 should be greedy, but GPU parallelism, batched kernels, and tied logits introduce variation",
        "Sources of non-determinism: FlashAttention batching, cuBLAS versions, FP16/BF16 precision, tensor parallelism",
        "Production fixes: deterministic kernels, single-GPU no-batching, FP32, locked chat template, do_sample=False",
        "For full reproducibility: same hardware + same precision + same prompt format + same model weights"
      ]
    },
    {
      question: "When would you choose a high temperature vs a low temperature for different LLM applications?",
      answer: `<p>Temperature is a <strong>use-case-specific</strong> knob. The right setting depends on whether you want <strong>predictable, accurate</strong> output or <strong>creative, diverse</strong> output.</p>
<h4>Application-by-Application Recommendations</h4>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Application</th><th style='padding:8px;border:1px solid #ddd;'>Recommended Temp</th><th style='padding:8px;border:1px solid #ddd;'>Reason</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>RAG chatbot</td><td style='padding:8px;border:1px solid #ddd;'>0.0 – 0.3</td><td style='padding:8px;border:1px solid #ddd;'>Want faithful answers grounded in retrieved docs; avoid hallucination</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Code generation</td><td style='padding:8px;border:1px solid #ddd;'>0.0 – 0.2</td><td style='padding:8px;border:1px solid #ddd;'>Correctness matters; same prompt should give same working code</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Marketing copy / Blog</td><td style='padding:8px;border:1px solid #ddd;'>0.7 – 1.0</td><td style='padding:8px;border:1px solid #ddd;'>Want creative, varied phrasing; engagement matters more than precision</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>AI agent planning</td><td style='padding:8px;border:1px solid #ddd;'>0.3 – 0.6</td><td style='padding:8px;border:1px solid #ddd;'>Balance between reliable plan structure and exploring alternative strategies</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Brainstorming / ideation</td><td style='padding:8px;border:1px solid #ddd;'>0.9 – 1.3</td><td style='padding:8px;border:1px solid #ddd;'>Want diverse, unexpected ideas</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Factual Q&amp;A / extraction</td><td style='padding:8px;border:1px solid #ddd;'>0.0</td><td style='padding:8px;border:1px solid #ddd;'>Need the single best answer; no room for variation</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Translation</td><td style='padding:8px;border:1px solid #ddd;'>0.0 – 0.3</td><td style='padding:8px;border:1px solid #ddd;'>Want accurate, idiomatic translations</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Summarization</td><td style='padding:8px;border:1px solid #ddd;'>0.2 – 0.5</td><td style='padding:8px;border:1px solid #ddd;'>Mostly faithful, but slight variation acceptable</td></tr>
</table>
<h4>Same Model, Different Temperatures</h4>
<pre><code class="language-text">Prompt: "Write a tagline for a coffee shop."

Temp 0.0: "Your daily brew, perfected."
Temp 0.7: "Where every cup tells a story."
Temp 1.2: "Sip the sunrise — coffee that whispers to your soul."</code></pre>
<p>You would <strong>not</strong> use the same temperature for all of these. Production systems should expose temperature as a configurable parameter and tune it per use case.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Sampling"],
      keyPoints: [
        "RAG/code/factual Q&A → low temp (0.0–0.3) for accuracy and faithfulness",
        "Creative/marketing → high temp (0.7–1.3) for variety and engagement",
        "Agent planning → mid temp (0.3–0.6) for balance between reliability and exploration",
        "Temperature should be a configurable per-use-case parameter, not a single global setting"
      ]
    },
    {
      question: "How does Temperature interact with Top-k and Top-p sampling?",
      answer: `<p>Temperature, Top-k, and Top-p are <strong>three independent knobs</strong> applied at different stages of token sampling. They compose multiplicatively.</p>
<h4>Sampling Pipeline (in order)</h4>
<pre><code class="language-text">logits = model_output                # [5.2, 3.1, 2.8, 2.4, 1.9, 1.2, 0.5]

# Step 1: Apply temperature
scaled = logits / temperature        # divides logits → flattens or sharpens distribution

# Step 2: Apply Top-k (keep top k logits, set rest to -inf)
#   Top-k = 3  →  keep 3 highest, others = -inf
#   scaled = [5.2, 3.1, 2.8, -inf, -inf, -inf, -inf]

# Step 3: Apply Top-p (keep smallest set of tokens whose cumulative prob &gt;= p)
#   Top-p = 0.8  →  keep tokens until cumulative probability crosses 0.8
#   probs = [0.55, 0.30, 0.10, 0.04, ...] → cumulative = [0.55, 0.85, ...] → keep first 2

# Step 4: Re-normalize and sample
probs = softmax(filtered_logits)     # sample from this final distribution</code></pre>
<h4>Concrete Example (Temperature=1.5, Top-p=0.8)</h4>
<pre><code class="language-text">Original logits: [3.0, 2.5, 2.0, 1.5, 1.0, 0.5, 0.0]

After temp 1.5:  [2.0, 1.67, 1.33, 1.0, 0.67, 0.33, 0.0]
After softmax:   [0.32, 0.23, 0.16, 0.12, 0.08, 0.05, 0.04]
Cumulative:      [0.32, 0.55, 0.71, 0.83, 0.91, 0.96, 1.00]

Top-p = 0.8 → keep tokens until cumulative crosses 0.8
   → keep first 4 tokens (cumulative 0.83)

Final sampling distribution (renormalized):
   probs = [0.32, 0.23, 0.16, 0.12]  → sample from these 4</code></pre>
<h4>Can Top-p Restrict Randomness When Temperature Is High?</h4>
<p><strong>Yes — partially.</strong> Top-p restricts the candidate pool to high-probability tokens, so even though temperature 1.5 makes the raw distribution flatter, Top-p 0.8 still only samples from the top 80% of probability mass. The result is a <strong>smaller effective vocabulary</strong> than pure temperature=1.5 sampling, but more variety than greedy decoding.</p>
<h4>Common Production Combinations</h4>
<ul>
<li><strong>Creative writing:</strong> temp 0.9, top-p 0.9, top-k disabled</li>
<li><strong>Factual:</strong> temp 0.0 (or very low), no top-k/top-p</li>
<li><strong>Balanced chatbot:</strong> temp 0.7, top-p 0.9</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Sampling"],
      keyPoints: [
        "Pipeline: logits → temperature scaling → top-k filter → top-p filter → softmax → sample",
        "Temperature flattens/sharpens the whole distribution; top-k/top-p restrict which tokens are eligible",
        "Top-p CAN restrict randomness even at high temperature by limiting the candidate pool",
        "Common combos: creative (temp 0.9 + top-p 0.9), factual (temp 0.0 only), chatbot (temp 0.7 + top-p 0.9)"
      ]
    },
    {
      question: "Your RAG chatbot is hallucinating frequently. Current settings: Temperature=1.2, RAG enabled, good retrieval quality. Would reducing temperature help?",
      answer: `<p>Reducing temperature from 1.2 to ~0.2 will <strong>reduce — but not eliminate — hallucinations</strong>. With temperature 0.2, the model is much more likely to stick to high-probability (i.e., context-grounded) tokens. However, hallucinations can still occur even at temperature 0 because of deeper issues.</p>
<h4>What Reducing Temperature Will Fix</h4>
<ul>
<li><strong>Token-level randomness:</strong> At temp 1.2, the model occasionally samples low-probability tokens that aren't supported by the retrieved context. Lower temp sharply reduces this.</li>
<li><strong>Off-topic drift:</strong> Lower temp keeps the model focused on the most relevant continuation, less likely to wander into fabricated details.</li>
</ul>
<h4>Why Hallucinations Still Happen at Temperature 0</h4>
<ul>
<li><strong>Retrieved context is incomplete:</strong> If the right document isn't in top-k retrieved chunks, the model has no ground truth to anchor to — it'll generate plausible-sounding text from prior knowledge.</li>
<li><strong>Conflicts in context:</strong> If retrieved documents contradict each other, the model picks one — but the other (wrong) version can leak into the answer.</li>
<li><strong>Out-of-context questions:</strong> If the user asks something the documents don't cover, the model has nothing to ground on and will improvise.</li>
<li><strong>Model has stronger prior than context:</strong> If the LLM was heavily trained on conflicting info, its parametric memory can override retrieved context.</li>
<li><strong>Prompt design:</strong> Weak system prompt ("answer the question") lets the model stray. Strong grounding ("answer ONLY using the context below; if not present, say 'I don't know'") is essential.</li>
<li><strong>Chunking problems:</strong> If relevant info is split across chunks, neither chunk alone provides the full answer.</li>
<li><strong>Embedding mismatch:</strong> User query phrased differently from documents → low similarity → wrong chunks retrieved.</li>
</ul>
<h4>Recommended Fixes (in order)</h4>
<ol>
<li><strong>Lower temperature to 0.0–0.3</strong> — first and cheapest fix.</li>
<li><strong>Strengthen system prompt:</strong> "Answer ONLY based on the provided context. If the answer is not in the context, say 'I don't know.' Do not use outside knowledge."</li>
<li><strong>Improve retrieval:</strong> Better embeddings, hybrid search (BM25 + vector), query rewriting, larger top-k with reranking.</li>
<li><strong>Better chunking:</strong> Semantic chunking, larger overlap, keep related info together.</li>
<li><strong>Cite sources:</strong> Force the model to cite which chunk each claim came from — enables verification.</li>
<li><strong>Add a verification step:</strong> Use a second LLM call to check if the first answer is grounded in the retrieved context.</li>
<li><strong>Log retrieval scores:</strong> If top retrieval score is below threshold, refuse to answer.</li>
</ol>
<h4>TL;DR</h4>
<p>Lowering temperature from 1.2 to ~0.2 will reduce hallucinations significantly, but won't eliminate them. The remaining hallucinations are usually caused by <strong>retrieval or prompt</strong> issues, not sampling randomness. Fix retrieval + prompt before going below temp 0.2.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "RAG", "Production"],
      keyPoints: [
        "Lowering temp 1.2 → 0.2 reduces token randomness but doesn't eliminate hallucinations",
        "Hallucinations at temp 0 come from: incomplete retrieval, conflicting context, weak prompts, chunking issues",
        "Fix order: lower temp → stronger grounding prompt → improve retrieval → chunking → citation → verification step",
        "Strong system prompt ('answer ONLY from context') is often the highest-leverage fix after temperature"
      ]
    },
    {
      question: "What causes hallucinations in LLMs, and how do you reduce them?",
      answer: `<p>An LLM <strong>hallucinates</strong> when it generates text that is fluent and confident but factually wrong, fabricated, or ungrounded. Hallucinations are not bugs — they are a natural consequence of how LLMs work.</p>
<h4>Root Causes</h4>
<ul>
<li><strong>Next-token prediction objective:</strong> The model is trained to produce a <em>plausible</em> next token, not a <em>truthful</em> one. Plausibility and truth are different signals.</li>
<li><strong>No memory of what it knows:</strong> The model has no internal flag for "I don't know this." If it has seen similar patterns during training, it will complete them — even if the specific fact was never there.</li>
<li><strong>Training data noise:</strong> The web contains misinformation, contradictions, and outdated facts. The model absorbs all of it.</li>
<li><strong>Decoding randomness:</strong> Sampling (top-p, temperature) can pick less-likely tokens that drift the answer.</li>
<li><strong>Long, open-ended prompts:</strong> The further the model has to extrapolate, the more it has to "fill in" — and the higher the chance of fabrication.</li>
</ul>
<h4>Reduction Techniques (in order of impact)</h4>
<ol>
<li><strong>Grounding via RAG:</strong> Force the model to answer only from retrieved documents. "Answer ONLY using the context below; if not present, say 'I don't know.'"</li>
<li><strong>Lower temperature (0.0–0.3):</strong> Reduces sampling randomness, makes outputs more deterministic and conservative.</li>
<li><strong>Cite sources:</strong> Force the model to attribute every claim to a retrieved chunk — makes fabrication easy to detect.</li>
<li><strong>Self-verification / chain-of-thought:</strong> Ask the model to reason step-by-step and check its own work. "First list the facts, then write the answer."</li>
<li><strong>Constrained decoding / JSON mode / tool use:</strong> Restrict the output to a known schema — the model cannot fabricate free-form text.</li>
<li><strong>Fine-tune on domain data:</strong> Reduces reliance on the model's broad (and often wrong) prior knowledge.</li>
<li><strong>Add a verification step:</strong> A second LLM call checks if the first answer is supported by the context. Reject or rewrite if not.</li>
</ol>
<h4>What does NOT work well</h4>
<ul>
<li><strong>"Just don't hallucinate" in the prompt:</strong> The model has no mechanism to obey this — it cannot introspect on its own confidence.</li>
<li><strong>Lowering temperature alone:</strong> Reduces variance but not factual error. A model can confidently hallucinate at temperature 0.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "RAG", "Evaluation"],
      keyPoints: [
        "Hallucination = fluent, confident, but factually wrong output — caused by next-token objective, not a bug",
        "Root causes: plausible ≠ truthful training, no self-knowledge of limits, noisy web data, sampling randomness, long prompts",
        "Best fixes: RAG grounding (highest impact), lower temperature, source citations, self-verification, constrained decoding",
        "'Don't hallucinate' prompts do not work — the model cannot introspect on its own confidence"
      ]
    },
    {
      question: "Why isn't RAG enough for enterprise AI?",
      answer: `<p>RAG solves the "knowledge cutoff" and "private data" problems — but a production enterprise AI system needs much more than just retrieval. RAG is the <em>floor</em>, not the ceiling.</p>
<h4>What RAG Does Well</h4>
<ul>
<li>Grounds answers in up-to-date, private, or proprietary documents.</li>
<li>Reduces hallucinations by providing source material.</li>
<li>Cheap to update (re-index a document, no retraining).</li>
<li>Transparent — you can show which documents the answer came from.</li>
</ul>
<h4>What RAG Alone Cannot Solve</h4>
<ol>
<li><strong>Reasoning across documents:</strong> Enterprise questions often require combining info from 5+ documents. A single retrieved chunk is rarely enough.</li>
<li><strong>Authorization and access control:</strong> Not every user should see every document. RAG retrieval needs to respect role-based permissions.</li>
<li><strong>Structured data queries:</strong> "What were Q3 sales by region?" lives in a database, not in documents. You need SQL or tool use, not RAG.</li>
<li><strong>Multi-step workflows:</strong> "Onboard this new employee" is a workflow — not a single Q&A. RAG cannot execute steps or call systems.</li>
<li><strong>Auditability and compliance:</strong> Regulated industries (finance, healthcare) need to log every decision, citation, and tool call.</li>
<li><strong>Latency and cost at scale:</strong> 10M users × 5 retrievals each = expensive vector DB + LLM calls. RAG alone does not address serving economics.</li>
<li><strong>Knowledge conflicts:</strong> When retrieved docs contradict each other (old policy vs. new policy), RAG cannot resolve the conflict — the LLM picks one.</li>
<li><strong>Evaluation and monitoring:</strong> You need a feedback loop — did this answer actually help the user? RAG has no built-in observability.</li>
</ol>
<h4>What Enterprise AI Actually Needs</h4>
<ul>
<li><strong>RAG</strong> for knowledge grounding</li>
<li><strong>Fine-tuning</strong> for tone, format, domain style</li>
<li><strong>Agents + tool use</strong> for actions and multi-step workflows</li>
<li><strong>Guardrails</strong> for safety, PII, prompt injection</li>
<li><strong>Observability</strong> for evaluation, drift detection, feedback loops</li>
<li><strong>Access control</strong> at the retrieval layer, not just at the UI</li>
</ul>
<p>The insight: <strong>RAG is a building block, not a complete system.</strong> Enterprise AI is the orchestration of RAG + tools + guardrails + eval + auth.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "Enterprise AI", "Architecture"],
      keyPoints: [
        "RAG is the floor, not the ceiling — it grounds answers in documents but does not solve the full enterprise problem",
        "RAG alone cannot handle: cross-doc reasoning, RBAC, structured data, workflows, audit, scale, conflict resolution, eval",
        "Enterprise AI = RAG + fine-tuning + agents/tools + guardrails + observability + access control",
        "RAG's strength: cheap updates, transparency, grounding. Its limits: reasoning, auth, latency at scale, conflict resolution"
      ]
    },
    {
      question: "How do you evaluate an LLM beyond accuracy?",
      answer: `<p>Accuracy is necessary but not sufficient. Real LLM evaluation is multi-dimensional — and "did it get the right answer" often hides deeper failures.</p>
<h4>The Evaluation Pyramid</h4>
<ol>
<li><strong>Correctness (top):</strong> Is the final answer factually right?</li>
<li><strong>Groundedness:</strong> Is every claim supported by the retrieved context or a reliable source?</li>
<li><strong>Faithfulness:</strong> Does the answer stick to the context, or does it inject outside knowledge?</li>
<li><strong>Relevance:</strong> Did the answer address the user's actual question, or a related-but-different one?</li>
<li><strong>Completeness:</strong> Did the answer cover all parts of a multi-part question?</li>
<li><strong>Safety:</strong> Did it refuse harmful, biased, or PII-leaking requests?</li>
<li><strong>Format / structure:</strong> Did it follow the required JSON schema, length, tone, language?</li>
<li><strong>Latency, cost, throughput (bottom):</strong> Engineering metrics that determine if the system is even usable at scale.</li>
</ol>
<h4>Evaluation Methods</h4>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Method</th><th style='padding:8px;border:1px solid #ddd;'>What it measures</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Exact match / F1</td><td style='padding:8px;border:1px solid #ddd;'>Surface-level correctness (good for Q&amp;A, classification)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>BLEU / ROUGE</td><td style='padding:8px;border:1px solid #ddd;'>N-gram overlap with reference (translation, summarization)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>LLM-as-judge</td><td style='padding:8px;border:1px solid #ddd;'>A second LLM scores the first on rubrics (faithfulness, tone)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Human evaluation</td><td style='padding:8px;border:1px solid #ddd;'>Gold standard for quality, tone, nuance — slow and expensive</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Retrieval recall@k</td><td style='padding:8px;border:1px solid #ddd;'>Did the retriever surface the right documents? (RAG)</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>A/B testing</td><td style='padding:8px;border:1px solid #ddd;'>User-facing metrics: CTR, task success, satisfaction</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Red team / adversarial</td><td style='padding:8px;border:1px solid #ddd;'>Probes for jailbreaks, bias, PII leakage</td></tr>
</table>
<h4>Common Mistakes</h4>
<ul>
<li><strong>Optimizing only accuracy:</strong> A model can be "accurate" but unsafe, slow, or off-tone.</li>
<li><strong>Trusting offline metrics blindly:</strong> LLM-judge correlation with humans is ~70–80%, not 100%.</li>
<li><strong>No production eval:</strong> Offline benchmarks are not your users. You need live feedback loops.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Evaluation", "Production"],
      keyPoints: [
        "Accuracy is just one of 8+ dimensions: correctness, groundedness, faithfulness, relevance, completeness, safety, format, latency/cost",
        "Methods: exact match, BLEU/ROUGE, LLM-as-judge, human eval, retrieval recall@k, A/B testing, red team",
        "LLM-as-judge correlates ~70-80% with humans — not a replacement for human eval on quality",
        "Production needs live feedback loops, not just offline benchmarks — your users are the real evaluation set"
      ]
    },
    {
      question: "Explain precision, recall, faithfulness, and groundedness in LLM evaluation.",
      answer: `<p>These four metrics are often confused but measure very different things. They are foundational for any RAG or QA system.</p>
<h4>Precision (Retrieval Quality)</h4>
<ul>
<li><strong>Definition:</strong> Of the documents retrieved, how many were actually relevant?</li>
<li><strong>Formula:</strong> precision = relevant_retrieved / total_retrieved</li>
<li><strong>Example:</strong> You retrieved 10 documents, 7 were relevant. Precision = 7/10 = 0.7.</li>
<li><strong>High precision = no noise in the context window.</strong> Important because irrelevant docs waste tokens and can confuse the LLM.</li>
</ul>
<h4>Recall (Retrieval Coverage)</h4>
<ul>
<li><strong>Definition:</strong> Of all the relevant documents that exist, how many did you retrieve?</li>
<li><strong>Formula:</strong> recall = relevant_retrieved / total_relevant</li>
<li><strong>Example:</strong> 20 relevant documents exist, you retrieved 7. Recall = 7/20 = 0.35.</li>
<li><strong>High recall = no missed information.</strong> Important for questions that need the full picture (compliance, legal, medical).</li>
</ul>
<h4>Faithfulness (Generation Quality)</h4>
<ul>
<li><strong>Definition:</strong> Does the answer stick to the retrieved context, or does it inject outside knowledge?</li>
<li><strong>How to measure:</strong> Split the answer into claims; for each claim, check if it is supported by the context. faithfulness = supported_claims / total_claims.</li>
<li><strong>Low faithfulness = the LLM is "making stuff up" beyond the context.</strong> Even if the answer is correct, it may not be grounded in your data.</li>
</ul>
<h4>Groundedness (Truthfulness to Sources)</h4>
<ul>
<li><strong>Definition:</strong> Is each claim in the answer actually supported by a specific, citable source?</li>
<li><strong>How to measure:</strong> For each claim, identify which retrieved document it came from and verify the document says that.</li>
<li><strong>Low groundedness = hallucinations that look authoritative.</strong> The answer may be fluent but invented.</li>
</ul>
<h4>How They Relate</h4>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Metric</th><th style='padding:8px;border:1px solid #ddd;'>Question answered</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Precision</td><td style='padding:8px;border:1px solid #ddd;'>Did we retrieve the right documents?</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Recall</td><td style='padding:8px;border:1px solid #ddd;'>Did we miss anything important?</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Faithfulness</td><td style='padding:8px;border:1px solid #ddd;'>Did the model stick to the context?</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Groundedness</td><td style='padding:8px;border:1px solid #ddd;'>Is every claim backed by a real source?</td></tr>
</table>
<p>Precision and recall measure <strong>retrieval</strong>. Faithfulness and groundedness measure <strong>generation</strong>. You need both layers to find and fix bugs in a RAG system.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "RAG", "Evaluation"],
      keyPoints: [
        "Precision: of retrieved docs, how many are relevant? (retrieval quality)",
        "Recall: of all relevant docs, how many did we retrieve? (retrieval coverage)",
        "Faithfulness: does the answer stick to context, or inject outside knowledge? (generation)",
        "Groundedness: is every claim actually supported by a citable source? (generation, anti-hallucination)"
      ]
    },
    {
      question: "What happens internally when an LLM receives a prompt?",
      answer: `<p>From the moment a prompt arrives to the moment a token comes out, an LLM goes through a precise pipeline of transformations.</p>
<h4>The Pipeline</h4>
<ol>
<li><strong>Tokenization:</strong> The raw text is split into tokens (subword units) via BPE, WordPiece, or SentencePiece. Each token maps to an integer ID from the vocabulary. "Hello world" → [15496, 995].</li>
<li><strong>Embedding lookup:</strong> Each token ID is converted to a dense vector (e.g., 4096 dimensions) by looking up a row in the embedding matrix. Tokens now have meaning.</li>
<li><strong>Positional encoding:</strong> A position vector is added to each token embedding so the model knows the order. Without this, attention would be permutation-invariant.</li>
<li><strong>Transformer blocks (N layers):</strong> The sequence passes through N stacked blocks. Each block does:
  <ul>
    <li>Multi-head self-attention: every token attends to every other.</li>
    <li>Feed-forward network: position-wise non-linear transformation.</li>
    <li>Residual connections + layer normalization: stabilize training and depth.</li>
  </ul>
</li>
<li><strong>Final layer norm:</strong> Normalizes the last hidden states.</li>
<li><strong>LM head (unembedding):</strong> The final hidden state of the last token is projected back to vocabulary size, producing a logit for every possible next token.</li>
<li><strong>Softmax (or sampled):</strong> Logits → probabilities. The next token is sampled (greedy, top-k, top-p, temperature).</li>
<li><strong>Append and repeat:</strong> The chosen token is appended to the sequence and fed back in. This loops until &lt;EOS&gt; or max length.</li>
</ol>
<h4>What the Model Is Actually Doing</h4>
<ul>
<li>At every step, the model computes P(next_token | all_previous_tokens).</li>
<li>It is not "thinking" or "searching" — it is doing a single forward pass through a fixed graph of matrix multiplications.</li>
<li>The "intelligence" is in the weights, learned during training. Inference is just lookup + matrix multiplies + sampling.</li>
</ul>
<h4>Key Internal State</h4>
<ul>
<li><strong>KV cache:</strong> To avoid recomputing attention for past tokens at every step, the model caches the Key and Value tensors. This is why inference is faster than the naive O(n²) cost suggests.</li>
<li><strong>Hidden states:</strong> The intermediate representations after each layer — useful for probing, classification heads, or interpretability research.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Architecture", "Inference"],
      keyPoints: [
        "Pipeline: tokenize → embed → add positions → N transformer blocks → final norm → LM head → softmax → sample → repeat",
        "At every step, the model computes P(next_token | all_previous_tokens) — a single forward pass, not search or reasoning",
        "Intelligence lives in the weights (learned during training); inference is just lookup + matrix multiplies + sampling",
        "KV cache avoids recomputing attention for past tokens — makes autoregressive generation tractable"
      ]
    },
    {
      question: "How do tokens, embeddings, and attention work together?",
      answer: `<p>Tokens, embeddings, and attention are the three layers of meaning in a Transformer. They are deeply interconnected.</p>
<h4>Layer 1: Tokens (Discrete Symbols)</h4>
<ul>
<li>Text is split into tokens via subword tokenization (BPE, WordPiece).</li>
<li>Each token is an integer ID from a fixed vocabulary (e.g., 50,000–100,000 tokens).</li>
<li>Tokens are discrete — there is no notion of similarity between token 15496 and 995.</li>
</ul>
<h4>Layer 2: Embeddings (Dense Meaning)</h4>
<ul>
<li>Each token ID is looked up in a learned embedding matrix (V × d, where d is typically 2048–12,288).</li>
<li>The result is a dense vector that captures the token's meaning in context.</li>
<li>Two tokens that mean similar things (e.g., "cat" and "kitten") end up close in embedding space — even though their IDs are different.</li>
</ul>
<h4>Layer 3: Attention (Context Mixing)</h4>
<ul>
<li>Self-attention lets each token's embedding be <strong>updated</strong> based on every other token in the sequence.</li>
<li>The updated embedding (the "contextualized" embedding) reflects the meaning of the token <em>in this specific context</em>.</li>
<li>Example: the word "bank" gets a different contextual embedding in "river bank" vs. "bank account" — even though the static embedding is the same.</li>
</ul>
<h4>How They Work Together</h4>
<pre><code class="language-text">Input text: "The cat sat on the mat"
  ↓
Tokenize: [The, cat, sat, on, the, mat] → [1234, 5678, 9012, ...]
  ↓
Embed: each ID → 4096-dim vector (V × d lookup)
  ↓
Self-attention: each token's vector mixes with every other, weighted by relevance
  → "sat" attends strongly to "cat" (subject-verb), weakly to "mat"
  ↓
Output: contextualized embeddings that the LM head reads to predict the next token</code></pre>
<h4>Why This Architecture Works</h4>
<ul>
<li><strong>Tokens</strong> give the model a discrete, finite vocabulary to work with — no infinite ambiguity.</li>
<li><strong>Embeddings</strong> turn discrete symbols into continuous space where math (dot products, distances) becomes meaningful.</li>
<li><strong>Attention</strong> lets embeddings be <em>context-dependent</em> — the same word means different things in different sentences.</li>
</ul>
<p>Without embeddings, attention would have nothing to compute. Without attention, embeddings would be static and miss context. Without tokens, there would be no discrete units to embed. All three are required.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Architecture"],
      keyPoints: [
        "Tokens = discrete IDs (finite vocabulary); Embeddings = dense vectors (continuous meaning); Attention = contextualizes embeddings",
        "Static embedding is the same for a word in any sentence; attention updates it based on context (bank: river vs money)",
        "Tokens without embeddings = no math; Embeddings without attention = no context; Attention without tokens = nothing to mix",
        "Pipeline: text → tokens → embeddings → self-attention updates embeddings → LM head reads contextual embeddings"
      ]
    },
    {
      question: "When should you fine-tune instead of using prompt engineering?",
      answer: `<p>Fine-tuning and prompt engineering solve different problems. Choosing the wrong one wastes time, money, and quality.</p>
<h4>Use Prompt Engineering When</h4>
<ul>
<li>You need the model to follow a new <strong>instruction format</strong> or template.</li>
<li>You need <strong>better reasoning</strong> on a problem the model already understands (chain-of-thought, few-shot examples).</li>
<li>You want a <strong>fast iteration cycle</strong> — change a string, not a training run.</li>
<li>The task is <strong>general</strong> and the base model is already capable.</li>
<li>You have <strong>no labeled data</strong> or very little.</li>
<li>Budget or infrastructure for training is limited.</li>
</ul>
<h4>Use Fine-Tuning When</h4>
<ul>
<li>You need the model to learn a <strong>consistent style, tone, or format</strong> (e.g., always respond in a specific JSON schema, or in a specific brand voice).</li>
<li>You need to inject <strong>domain knowledge</strong> that the base model lacks or gets wrong (legal, medical, internal jargon).</li>
<li>You want to <strong>reduce token cost</strong> — a fine-tuned 7B model can often replace a GPT-4 prompt for narrow tasks.</li>
<li>You need <strong>lower latency</strong> — smaller fine-tuned models are faster than large prompted models.</li>
<li>You have a <strong>large, clean labeled dataset</strong> (thousands of examples).</li>
<li>Prompt engineering has plateaued and you need a quality step-change.</li>
</ul>
<h4>The Decision Framework</h4>
<ol>
<li><strong>Start with prompt engineering.</strong> It is cheap, fast, and surprisingly effective. Try few-shot, chain-of-thought, system prompts.</li>
<li><strong>If prompts plateau, try RAG.</strong> For knowledge-grounded tasks, RAG often beats both prompting and fine-tuning.</li>
<li><strong>If RAG + prompts still fall short, fine-tune.</strong> Especially when you need style, format, or domain-specific behavior that cannot be expressed in a prompt.</li>
<li><strong>Consider LoRA / QLoRA</strong> for cost-efficient fine-tuning — you do not always need a full fine-tune.</li>
</ol>
<h4>Common Mistakes</h4>
<ul>
<li><strong>Fine-tuning too early:</strong> Without exhausting prompt engineering, you spend days on training to discover a 3-line prompt would have worked.</li>
<li><strong>Fine-tuning for knowledge:</strong> Use RAG instead. Fine-tuning a model to "know" facts is brittle (the model forgets, and updates require retraining).</li>
<li><strong>Fine-tuning without enough data:</strong> Under ~1,000 examples, fine-tuning often overfits or underperforms prompting.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs", "Fine-tuning", "Prompt Engineering"],
      keyPoints: [
        "Prompt engineering: instruction format, reasoning tricks, fast iteration, no labeled data needed",
        "Fine-tuning: consistent style/format, domain knowledge, lower cost/latency (smaller model), need 1k+ labeled examples",
        "Decision order: prompt first → RAG for knowledge → fine-tune for style/format/cost",
        "Common mistake: fine-tuning for knowledge (use RAG), or fine-tuning without enough data (<1k examples usually fails)"
      ]
    },
    {
      question: "Why do most fine-tuning projects fail?",
      answer: `<p>Industry estimates suggest 60–80% of LLM fine-tuning projects do not ship to production. The reasons are almost always process, not technical.</p>
<h4>Why Fine-Tuning Projects Fail</h4>
<ol>
<li><strong>No clear success metric:</strong> "Better" is not a metric. Without a concrete eval (e.g., "faithfulness > 0.9 on a held-out test set"), you cannot tell if the fine-tune helped or hurt.</li>
<li><strong>Bad or insufficient data:</strong> The #1 reason. Garbage in, garbage out. Common issues:
  <ul>
    <li>Too few examples (&lt;1,000 for most tasks).</li>
    <li>Noisy or inconsistent labels.</li>
    <li>Train/test contamination (test examples leak into training).</li>
    <li>Mismatched distribution (training on formal text, deploying on chat).</li>
  </ul>
</li>
<li><strong>Skipping the baseline:</strong> Fine-tuning without first measuring the prompted base model. You do not know if you are improving anything.</li>
<li><strong>Overfitting to a small set:</strong> The model memorizes training examples but performs worse on real users. Eval set is critical.</li>
<li><strong>Full fine-tuning when LoRA would do:</strong> Full fine-tunes are expensive, slow, and risky (catastrophic forgetting). LoRA / QLoRA is usually enough.</li>
<li><strong>Wrong hyperparameters:</strong> Learning rate, epochs, warmup, scheduler — all matter. A bad config can destroy a base model's capabilities.</li>
<li><strong>No eval set, only vibes:</strong> "It looks better" is not a deployment signal. Need a reproducible, automated test set.</li>
<li><strong>Forgetting catastrophic forgetting:</strong> Fine-tuning can degrade the model's general capabilities (reasoning, instruction-following on unrelated tasks). Test for this.</li>
<li><strong>Underestimating data pipeline work:</strong> Curating, cleaning, deduplicating, and labeling data takes 80% of the effort. Most teams underestimate this.</li>
</ol>
<h4>How to Make Fine-Tuning Succeed</h4>
<ul>
<li><strong>Start with a clear eval:</strong> 200+ labeled test examples that reflect real production traffic.</li>
<li><strong>Measure the base model first:</strong> Establish a baseline on the eval set before any training.</li>
<li><strong>Invest in data quality:</strong> Even 500 clean, diverse, well-labeled examples beat 50,000 noisy ones.</li>
<li><strong>Use LoRA / QLoRA by default:</strong> Cheaper, faster, less catastrophic forgetting, easier to A/B test.</li>
<li><strong>Track regression on general capabilities:</strong> Test on a held-out benchmark (MMLU, etc.) to make sure you did not break the model.</li>
<li><strong>Treat it as iterative:</strong> Train → eval → diagnose → fix data or hyperparams → retrain. Expect 5-10 cycles.</li>
</ul>
<p>The TL;DR: <strong>data quality and evaluation discipline</strong> matter 10x more than the choice of base model or fine-tuning method.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs", "Fine-tuning", "Production"],
      keyPoints: [
        "60-80% of fine-tuning projects do not ship — failures are usually process, not technical",
        "Top reasons: no success metric, bad data, no baseline, overfitting, full fine-tune when LoRA suffices, no eval set",
        "Success recipe: clear eval set, measure base model first, invest in data quality, use LoRA/QLoRA, watch for regression",
        "Data quality and eval discipline matter 10x more than the choice of base model or fine-tuning method"
      ]
    }
  ]
};
