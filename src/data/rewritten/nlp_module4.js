export const nlpStructure = {
  module4: {
    title: 'Module 4: Large Language Models',
    topics: [
      { id: 'attention-nlp', title: 'Attention Mechanism' },
      { id: 'transformers-nlp', title: 'Transformers' },
      { id: 'bert-nlp', title: 'BERT' },
      { id: 'gpt-nlp', title: 'GPT' },
      { id: 'xlnet', title: 'XLNet' },
      { id: 'bart', title: 'BART' },
      { id: 'multilingual', title: 'Multilingual Models' },
      { id: 'indian-llms', title: 'LLMs for Indian Languages' },
    ]
  }
};

export const nlpContent = {
  module4: {
    'attention-nlp': {
      title: 'Attention Mechanism',
      subtitle: 'Focusing on relevant words dynamically',
      sections: [
        {
          heading: 'What is Attention?',
          text: 'Attention is a mechanism that allows a model to focus on different parts of the input when producing each part of the output. It computes a weighted sum of input representations, where the weights indicate relevance.',
          list: [
            'Attention removes the bottleneck of fixed-size context vectors in seq2seq models',
            'It computes relevance scores between query and key vectors',
            'Weights are normalized via softmax to form a probability distribution',
            'The output is a weighted combination of value vectors',
            'Self-attention relates different positions within the same sequence'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Scaled dot-product attention is the foundation of modern transformers.',
          example: {
            title: 'Scaled Dot-Product Attention',
            code: `Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) × V

Where:
  Q = query matrix (n_q × d_k)
  K = key matrix (n_k × d_k)
  V = value matrix (n_v × d_v)
  d_k = dimension of keys

Example:
  Sentence: "The cat sat on the mat"
  Query: "What did the cat do?"

  Attention scores:
    "The":   0.05
    "cat":   0.40 ← key subject
    "sat":   0.35 ← key action
    "on":    0.10
    "the":   0.05
    "mat":   0.05

  Output = Σ weight_i × value_i
         = 0.40×"cat" + 0.35×"sat" + ...`,
            output: 'Scaling by sqrt(d_k) prevents softmax saturation with large dimensions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different attention variants suit different needs.',
          table: {
            headers: ['Aspect', 'Self-Attention', 'Cross-Attention', 'Multi-Head'],
            rows: [
              ['Query source', 'Same sequence', 'Different sequence', 'Multiple parallel heads'],
              ['Use case', 'Encoding context within text', 'Machine translation (source → target)', 'Capture diverse relationships'],
              ['Parameters', 'Q=K=V from same input', 'Q from decoder, K=V from encoder', 'h parallel attention layers'],
              ['Output', 'Context-aware representation', 'Target-aware source context', 'Concatenated head outputs'],
              ['Example', 'BERT encoder', 'Transformer decoder', 'Transformer full model']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using attention without positional encoding (fix: add absolute or relative positional embeddings; attention alone is permutation-invariant)',
            'Mistake 2: Ignoring the scaling factor sqrt(d_k) (fix: always scale; without it, dot products grow large and softmax saturates)',
            'Mistake 3: Confusing self-attention with cross-attention (fix: self-attention uses same input for Q/K/V; cross-attention uses encoder output for K/V)',
            'Mistake 4: Using too few heads (fix: use 8–16 heads for base models; too few limits relationship diversity)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Attention powers the most impactful NLP systems in production.',
          list: [
            'Machine translation: Google Translate uses attention to align source and target words dynamically',
            'Document summarization: models attend to salient sentences when generating summaries',
            'Question answering: systems focus on relevant passages to extract precise answers',
            'Speech recognition: audio-text attention maps acoustic frames to transcription tokens'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Attention = weighted sum where weights indicate input relevance',
            'Scaled dot-product: softmax(QK^T / sqrt(d_k)) × V',
            'Self-attention relates positions within the same sequence',
            'Cross-attention relates decoder queries to encoder keys/values',
            'Multi-head attention runs parallel attention layers for richer representations',
            'Positional encoding is essential — attention has no inherent sequence order'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the scaling factor sqrt(d_k) necessary in attention?\nAns: Without scaling, dot products grow with dimension, pushing softmax into saturation where gradients vanish.',
            'Q2: What is the difference between self-attention and cross-attention?\nAns: Self-attention draws Q, K, V from the same input; cross-attention draws Q from the decoder and K/V from the encoder output.',
            'Q3: Why does attention need positional encoding?\nAns: Attention is permutation-invariant; positional encodings inject sequence order so the model knows word positions.'
          ]
        }
      ]
    },
    'transformers-nlp': {
      title: 'Transformers',
      subtitle: 'Attention is all you need — parallel sequence modeling',
      sections: [
        {
          heading: 'What is a Transformer?',
          text: 'The Transformer is a neural network architecture that replaces recurrence with self-attention, enabling parallel processing of entire sequences and capturing global dependencies in constant time per layer.',
          list: [
            'Introduced in "Attention Is All You Need" (Vaswani et al., 2017)',
            'No recurrence or convolution — pure attention-based',
            'Processes all tokens in parallel, unlike RNNs',
            'Encoder-decoder structure with residual connections and layer normalization',
            'Positional encodings provide sequence order information'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Transformer encoder stacks multi-head self-attention and feed-forward layers.',
          example: {
            title: 'Transformer Encoder Layer',
            code: `Input: "The cat sat"

1. Token Embedding + Positional Encoding:
   x = Embed(token) + PE(position)

2. Multi-Head Self-Attention:
   "The" attends to "cat", "sat"
   "cat" attends to "The", "sat"
   "sat" attends to "The", "cat"
   → attn_out = MultiHeadAttention(x, x, x)

3. Add & Norm (residual + layer norm):
   x = LayerNorm(x + attn_out)

4. Feed-Forward Network:
   ffn_out = ReLU(xW₁ + b₁)W₂ + b₂

5. Add & Norm:
   x = LayerNorm(x + ffn_out)

Repeat for N layers (e.g., N=12 for BERT-base)`,
            output: 'Each layer refines contextual representations via attention and non-linearity.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Transformer variants differ in directionality and purpose.',
          table: {
            headers: ['Aspect', 'Transformer (Original)', 'BERT (Encoder-only)', 'GPT (Decoder-only)'],
            rows: [
              ['Directionality', 'Encoder + decoder', 'Bidirectional', 'Left-to-right (autoregressive)'],
              ['Attention mask', 'Source + target masks', 'No mask (full context)', 'Causal mask (future hidden)'],
              ['Pre-training', 'Machine translation', 'MLM + NSP', 'Next-token prediction'],
              ['Best for', 'Translation, summarization', 'Understanding tasks', 'Generation tasks'],
              ['Parameters', 'Base: 65M, Large: 213M', 'Base: 110M, Large: 340M', 'GPT-3: 175B']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating all transformer variants as interchangeable (fix: encoder-only for classification/understanding; decoder-only for generation; encoder-decoder for translation/summarization)',
            'Mistake 2: Forgetting causal masking in autoregressive decoders (fix: apply a lower-triangular mask so positions cannot attend to future tokens)',
            'Mistake 3: Using too few layers for complex tasks (fix: base models use 12 layers; large tasks need 24+; depth matters for hierarchical abstraction)',
            'Mistake 4: Ignoring the feed-forward sublayer (fix: FFN provides token-wise non-linearity and increases capacity; it is not optional)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Transformers are the backbone of modern NLP infrastructure.',
          list: [
            'Search engines: Google uses BERT to understand query intent and rank documents',
            'Virtual assistants: Alexa and Siri rely on transformer-based speech and NLU pipelines',
            'Code completion: GitHub Copilot uses GPT-style transformers to suggest code',
            'Customer support: chatbots use transformers for intent classification and response generation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transformers replace recurrence with self-attention for parallel processing',
            'Encoder layers use bidirectional self-attention + FFN + residual connections',
            'Decoder layers add causal masking for autoregressive generation',
            'Positional encodings inject sequence order',
            'Layer normalization stabilizes training at scale',
            'Encoder-only = understanding; decoder-only = generation; both = translation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why can transformers process sequences in parallel while RNNs cannot?\nAns: Transformers use self-attention which relates all positions simultaneously; RNNs update hidden states sequentially.',
            'Q2: What is the purpose of causal masking in a decoder?\nAns: It prevents the model from attending to future tokens, preserving autoregressive generation.',
            'Q3: Why are residual connections and layer normalization important?\nAns: Residual connections enable gradient flow through deep stacks; layer normalization stabilizes activations and speeds convergence.'
          ]
        }
      ]
    },
    'bert-nlp': {
      title: 'BERT',
      subtitle: 'Bidirectional Encoder Representations from Transformers',
      sections: [
        {
          heading: 'What is BERT?',
          text: 'BERT is a transformer-based model that pre-trains deep bidirectional representations by jointly conditioning on both left and right context in all layers. It can be fine-tuned with just one additional output layer for a wide range of tasks.',
          list: [
            'Introduced by Google in 2018',
            'Pre-trains on unlabeled text using two objectives: MLM and NSP',
            'Bidirectional — reads entire sentences in both directions simultaneously',
            'Fine-tuning requires only task-specific layers on top',
            'Achieved state-of-the-art on 11 NLP benchmarks at release'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'BERT pre-trains with Masked Language Modeling and Next Sentence Prediction.',
          example: {
            title: 'BERT Pre-training Objectives',
            code: `MLM (Masked Language Modeling):
  Input:  "The [MASK] sat on the mat"
  Target: "cat"
  Loss:   -log P("cat" | context)

  15% of tokens are selected:
    80% replaced with [MASK]
    10% replaced with random word
    10% kept unchanged

NSP (Next Sentence Prediction):
  Sentence A: "The cat sat."
  Sentence B: "It was tired."
  Label: IsNext (1)

  Negative sample:
    Sentence B: "The stock market rose."
    Label: NotNext (0)

Fine-tuning:
  Classification: [CLS] token → Linear → softmax
  QA: Start/End span prediction over passage`,
            output: 'MLM forces true bidirectional learning; NSP captures sentence relationships.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'BERT variants differ in size, training data, and objective.',
          table: {
            headers: ['Aspect', 'BERT-base', 'BERT-large', 'RoBERTa', 'ALBERT'],
            rows: [
              ['Layers', '12', '24', '12 or 24', '12'],
              ['Hidden size', '768', '1024', '768 or 1024', '768 or 1024'],
              ['Parameters', '110M', '340M', '125M or 355M', '12M or 18M'],
              ['Pre-training', 'MLM + NSP', 'MLM + NSP', 'Dynamic MLM only', 'SOP (sentence order)'],
              ['Data', 'BookCorpus + Wikipedia', 'Same', '10× more data', 'Same'],
              ['Key change', 'Original', 'Deeper', 'Better training', 'Parameter sharing']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using BERT for autoregressive generation (fix: BERT is encoder-only and bidirectional; use GPT or BART for generation tasks)',
            'Mistake 2: Fine-tuning without proper learning rate (fix: use small learning rates like 2e-5 or 3e-5; BERT embeddings need gentle updates)',
            'Mistake 3: Ignoring max sequence length (fix: BERT-base handles 512 tokens; truncate or chunk longer documents)',
            'Mistake 4: Assuming NSP is always useful (fix: later work shows NSP provides limited benefit; RoBERTa drops it and still improves)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'BERT powers understanding tasks across industries.',
          list: [
            'Search ranking: Google Search uses BERT to match queries with relevant passages',
            'Sentiment analysis: fine-tuned BERT classifies product reviews and social media posts',
            'Named entity recognition: BERT-based NER extracts entities from legal and medical documents',
            'Question answering: SQuAD and similar benchmarks use BERT to locate exact answer spans'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BERT = bidirectional transformer encoder pre-trained on MLM + NSP',
            'MLM masks 15% of tokens and predicts them from full context',
            'NSP predicts whether sentence B follows sentence A',
            'Fine-tuning adds a small task-specific head on top of [CLS]',
            'Use small learning rates (2e-5) for fine-tuning',
            'Encoder-only — great for understanding, not for generation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is BERT called "bidirectional" while GPT is not?\nAns: BERT attends to all tokens in both directions simultaneously during MLM; GPT only attends to past tokens.',
            'Q2: What are the two pre-training objectives in BERT?\nAns: Masked Language Modeling (predict masked words) and Next Sentence Prediction (predict sentence relationship).',
            'Q3: Why should you use a small learning rate when fine-tuning BERT?\nAns: Pre-trained representations are already well-tuned; large updates can destroy general linguistic knowledge.'
          ]
        }
      ]
    },
    'gpt-nlp': {
      title: 'GPT',
      subtitle: 'Generative Pre-trained Transformer for text generation',
      sections: [
        {
          heading: 'What is GPT?',
          text: 'GPT is a family of autoregressive transformer models that learn to predict the next token in a sequence. By pre-training on vast corpora and fine-tuning on specific tasks, GPT excels at text generation, completion, and conditioning.',
          list: [
            'GPT-1 (2018): 117M parameters, demonstrated unsupervised pre-training + supervised fine-tuning',
            'GPT-2 (2019): 1.5B parameters, showed strong zero-shot capabilities',
            'GPT-3 (2020): 175B parameters, enabled few-shot and prompt-based learning',
            'GPT-4 (2023): multimodal, significantly improved reasoning and safety',
            'Autoregressive: predicts P(token_t | token_1...token_t-1)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'GPT models maximize the likelihood of the next token given all previous tokens.',
          example: {
            title: 'GPT Autoregressive Generation',
            code: `Objective: maximize log P(tokens)

P(tokens) = ∏ P(token_t | token_<t)

Example generation:
  Prompt: "In 1492, Columbus"

  Step 1: P("set" | "In 1492, Columbus") = 0.35
  Step 2: P("sail" | "...Columbus set") = 0.42
  Step 3: P("from" | "...set sail") = 0.38
  ...

  Generated:
    "In 1492, Christopher Columbus
     set sail from Spain with three
     ships: the Niña, the Pinta,
     and the Santa María."

Temperature controls randomness:
  T→0: deterministic (greedy)
  T=1: natural sampling
  T>1: more diverse/creative`,
            output: 'Each token is sampled from the conditional distribution over the vocabulary.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'GPT models scale in size, data, and capability.',
          table: {
            headers: ['Aspect', 'GPT-1', 'GPT-2', 'GPT-3', 'GPT-4'],
            rows: [
              ['Parameters', '117M', '1.5B', '175B', 'Unknown (estimated >1T)'],
              ['Layers', '12', '48', '96', 'Unknown'],
              ['Context length', '512', '1024', '2048', '128K'],
              ['Pre-training data', 'BookCorpus', 'WebText', 'Common Crawl + books', 'Unknown'],
              ['Learning paradigm', 'Pre-train + fine-tune', 'Zero-shot', 'Few-shot', 'Instruction tuning + RLHF'],
              ['Key innovation', 'Transfer to NLP', 'Zero-shot generation', 'In-context learning', 'Multimodal reasoning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting factual accuracy from raw GPT (fix: use RAG or tool augmentation; GPT can hallucinate confidently)',
            'Mistake 2: Using high temperature for factual tasks (fix: set temperature near 0 for deterministic, factual outputs; higher T for creative writing)',
            'Mistake 3: Ignoring prompt engineering (fix: few-shot examples, clear instructions, and role framing dramatically improve output quality)',
            'Mistake 4: Treating GPT as a reasoning engine rather than a pattern matcher (fix: break complex reasoning into explicit chain-of-thought steps)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'GPT models power generative applications across domains.',
          list: [
            'Content creation: drafting emails, blog posts, marketing copy, and creative writing',
            'Code assistance: GitHub Copilot generates code completions and explanations from prompts',
            'Customer service: chatbots answer FAQs and draft personalized responses',
            'Education: tutoring systems explain concepts and generate practice questions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'GPT = autoregressive transformer decoder that predicts the next token',
            'Pre-training on large text corpora learns general language patterns',
            'Fine-tuning or prompting adapts the model to specific tasks',
            'Temperature controls randomness: low for facts, high for creativity',
            'GPT-3 introduced few-shot in-context learning without parameter updates',
            'Hallucination is a real risk — always verify factual outputs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What makes GPT "autoregressive"?\nAns: It predicts each token conditioned only on previous tokens, generating text left-to-right.',
            'Q2: How does few-shot learning work in GPT-3?\nAns: The model reads task examples in the prompt and infers the pattern without updating weights.',
            'Q3: Why does temperature affect output quality?\nAns: Temperature scales the logits before softmax; low T sharpens the distribution (greedy), high T flattens it (diverse).' ]
        }
      ]
    },
    xlnet: {
      title: 'XLNet',
      subtitle: 'Generalized autoregressive pretraining for language understanding',
      sections: [
        {
          heading: 'What is XLNet?',
          text: 'XLNet is a generalized autoregressive language model that captures bidirectional context by maximizing the expected likelihood over all permutations of the factorization order. It overcomes the limitations of both BERT (masking introduces pretrain-finetune discrepancy) and GPT (unidirectional context).',
          list: [
            'Uses permutation language modeling instead of masking',
            'Predicts tokens in random order while maintaining autoregressive formulation',
            'No [MASK] token — avoids pretrain-finetune mismatch',
            'Integrates Transformer-XL for long-sequence modeling',
            'Outperformed BERT on 20 tasks at release'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'XLNet maximizes log-likelihood over all permutations of the target positions.',
          example: {
            title: 'Permutation Language Modeling',
            code: `For sequence [x1, x2, x3, x4]:

Permutation 1: 2 → 4 → 3 → 1
  P(x2) × P(x4|x2) × P(x3|x2,x4) × P(x1|x2,x4,x3)

Permutation 2: 4 → 1 → 3 → 2
  P(x4) × P(x1|x4) × P(x3|x4,x1) × P(x2|x4,x1,x3)

Objective:
  maximize E_z∈Z [ Σ log P(x_zt | x_z<t) ]

Where Z = all permutations of [1,2,3,4]

Two-stream attention:
  Content stream: attends to all previously predicted tokens
  Query stream: only attends to context, not the target itself`,
            output: 'Every token learns to use context from all other positions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'XLNet addresses limitations of both BERT and GPT.',
          table: {
            headers: ['Aspect', 'BERT', 'GPT', 'XLNet'],
            rows: [
              ['Context', 'Bidirectional (masked)', 'Unidirectional', 'Bidirectional via permutation'],
              ['Pretrain objective', 'MLM (mask tokens)', 'Next-token prediction', 'Permutation LM'],
              ['Masking', 'Uses [MASK]', 'No masking', 'No masking needed'],
              ['Pretrain-finetune gap', 'Exists (mask absent at fine-tune)', 'None', 'None'],
              ['Position encoding', 'Absolute', 'Absolute', 'Relative (Transformer-XL)'],
              ['Long sequences', '512 tokens', '1024–2048', 'Up to thousands (segment recurrence)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating XLNet as just another BERT variant (fix: XLNet is autoregressive; training and sampling differ significantly from masked LMs)',
            'Mistake 2: Using XLNet for very short sequences (fix: XLNet shines on longer texts where relative positions and permutation modeling add value)',
            'Mistake 3: Ignoring the two-stream attention complexity (fix: the query/content stream split is essential; incorrect implementation breaks permutation invariance)',
            'Mistake 4: Confusing permutation sampling with shuffled input (fix: inputs stay in original order; only the prediction order permutes)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'XLNet excels on tasks requiring deep contextual reasoning.',
          list: [
            'Reading comprehension: SQuAD and RACE benchmarks where bidirectional context is critical',
            'Document classification: long documents benefit from Transformer-XL segment recurrence',
            'Natural language inference: permutation modeling captures nuanced sentence relationships',
            'Sentiment analysis: especially effective on longer reviews with complex opinions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'XLNet uses permutation language modeling for bidirectional context without masking',
            'No [MASK] token eliminates pretrain-finetune discrepancy',
            'Autoregressive formulation preserves natural text generation capability',
            'Two-stream attention separates target query from context content',
            'Transformer-XL backbone enables very long sequence modeling',
            'Best for understanding tasks with long or complex context'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does XLNet achieve bidirectional context without masking?\nAns: It trains on all permutations of the prediction order, so each token learns to condition on every other position.',
            'Q2: What is the pretrain-finetune discrepancy in BERT?\nAns: BERT sees [MASK] during pre-training but never during fine-tuning, creating a distribution mismatch.',
            'Q3: What is two-stream attention in XLNet?\nAns: A content stream that sees all context tokens and a query stream that excludes the target token itself.'
          ]
        }
      ]
    },
    bart: {
      title: 'BART',
      subtitle: 'Bidirectional and Auto-Regressive Transformers for generation',
      sections: [
        {
          heading: 'What is BART?',
          text: 'BART is a denoising autoencoder built with a seq2seq architecture. It combines BERT\'s bidirectional encoder with GPT\'s left-to-right decoder, making it exceptionally flexible for both understanding and generation tasks.',
          list: [
            'Encoder is bidirectional (like BERT) — sees full corrupted input',
            'Decoder is autoregressive (like GPT) — generates left-to-right',
            'Pre-training objective: reconstruct original text from corrupted versions',
            'Supports flexible noise functions: token masking, deletion, permutation, infilling',
            'Achieves strong results on summarization, translation, and dialogue'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'BART corrupts input text and trains the decoder to reconstruct the original.',
          example: {
            title: 'BART Denoising Pre-training',
            code: `Original: "The cat sat on the mat"

Noising strategies:
  Token masking:
    "The [MASK] sat on the [MASK]"
    → reconstruct: "The cat sat on the mat"

  Token deletion:
    "The sat on the mat"
    → reconstruct: "The cat sat on the mat"

  Sentence permutation:
    "It was sunny. The cat sat."
    → shuffled: "The cat sat. It was sunny."
    → reconstruct original order

  Document rotation:
    Rotate so a random token starts:
    "mat. The cat sat on the"
    → reconstruct original

Architecture:
  Encoder: processes corrupted text (bidirectional)
  Decoder: generates original text (autoregressive)`,
            output: 'Multiple corruption strategies make BART robust to varied inputs.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'BART sits between BERT and GPT in capability.',
          table: {
            headers: ['Aspect', 'BERT', 'GPT', 'BART'],
            rows: [
              ['Architecture', 'Encoder-only', 'Decoder-only', 'Encoder-decoder'],
              ['Encoder', 'Bidirectional', 'None', 'Bidirectional'],
              ['Decoder', 'None', 'Autoregressive', 'Autoregressive'],
              ['Pre-training', 'MLM + NSP', 'Next-token', 'Denoising autoencoder'],
              ['Best for', 'Understanding', 'Generation', 'Both (seq2seq tasks)'],
              ['Fine-tuning', 'Add classification head', 'Prompting', 'End-to-end seq2seq']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using BART for simple classification without considering BERT (fix: BERT is often more efficient for pure classification; use BART when generation is involved)',
            'Mistake 2: Applying BART with single-sentence corruption only (fix: leverage diverse noising — permutation, infilling, rotation — for better generalization)',
            'Mistake 3: Treating encoder and decoder as independent (fix: the decoder cross-attends to encoder output; both must be trained jointly)',
            'Mistake 4: Ignoring the text infilling capability (fix: BART can fill gaps by predicting multiple tokens at masked spans, useful for completion tasks)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'BART excels at sequence-to-sequence tasks.',
          list: [
            'Text summarization: CNN/DailyMail and XSum benchmarks use BART to compress long articles',
            'Machine translation: encoder-decoder structure naturally maps source to target languages',
            'Dialogue systems: BART generates contextual responses in conversational AI',
            'Text simplification: rewriting complex passages for broader accessibility'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BART = bidirectional encoder + autoregressive decoder',
            'Pre-trains as a denoising autoencoder with varied corruption strategies',
            'Token masking, deletion, permutation, and rotation are all valid noising functions',
            'Best for seq2seq tasks: summarization, translation, dialogue',
            'More flexible than BERT or GPT alone for tasks requiring both understanding and generation',
            'Decoder cross-attends to encoder representations during generation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does BART differ architecturally from BERT and GPT?\nAns: BART has both a bidirectional encoder (like BERT) and an autoregressive decoder (like GPT), making it a seq2seq model.',
            'Q2: What is BART\'s pre-training objective?\nAns: Denoising autoencoder — corrupt input text and train the decoder to reconstruct the original.',
            'Q3: When should you prefer BART over BERT?\nAns: When the task involves text generation or sequence transformation (summarization, translation) rather than pure classification.'
          ]
        }
      ]
    },
    multilingual: {
      title: 'Multilingual Models',
      subtitle: 'Cross-lingual understanding and transfer learning',
      sections: [
        {
          heading: 'What are Multilingual Models?',
          text: 'Multilingual models are trained on data from many languages simultaneously, sharing parameters across languages. They enable cross-lingual transfer — a model trained on one language can often perform well on others without language-specific training data.',
          list: [
            'Trained on parallel or monolingual corpora from dozens to hundreds of languages',
            'Shared vocabulary and weights enable transfer between languages',
            'Zero-shot cross-lingual transfer reduces annotation costs',
            'Especially valuable for low-resource languages with limited labeled data',
            'Common architectures: mBERT, XLM, XLM-RoBERTa, mBART, mT5'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cross-lingual transfer works because shared subword vocabulary and joint training align representations across languages.',
          example: {
            title: 'Zero-Shot Cross-Lingual Transfer',
            code: `Training: English sentiment classifier
  Input: "This movie is great"
  Label: Positive

Zero-shot inference on Hindi:
  Input: "यह फिल्म बढ़िया है"
  mBERT processes → Positive

No Hindi training data needed!

Why it works:
  Shared subword tokens:
    "movie" and "फिल्म" map to similar
    embedding spaces through joint
    pre-training on multilingual text.

  Cross-lingual alignment:
    Cosine(emb("great"), emb("बढ़िया")) ≈ 0.75`,
            output: 'Joint pre-training aligns semantically similar words across languages.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different multilingual models vary in architecture and training approach.',
          table: {
            headers: ['Model', 'Languages', 'Architecture', 'Training Approach', 'Best For'],
            rows: [
              ['mBERT', '104', 'BERT-base', 'Shared Wikipedia', 'Cross-lingual understanding'],
              ['XLM', '100', 'BERT-like', 'MLM + TLM', 'Translation + NLU'],
              ['XLM-R', '100', 'RoBERTa', 'CC-100 corpus', 'Better cross-lingual NLU'],
              ['mBART', '25', 'BART', 'Denoising autoencoder', 'Multilingual generation'],
              ['mT5', '101', 'T5', 'Span corruption', 'Multilingual translation']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting perfect zero-shot transfer (fix: performance varies by language pair; high-resource to low-resource works better than vice versa)',
            'Mistake 2: Using English tokenizers for multilingual text (fix: use language-specific or jointly trained tokenizers like SentencePiece to avoid character explosion)',
            'Mistake 3: Ignoring language imbalance in training data (fix: English dominates most corpora; upsample low-resource languages or use balanced sampling)',
            'Mistake 4: Assuming all multilingual models are encoder-only (fix: mBART and mT5 are encoder-decoder and excel at generation/translation tasks)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multilingual models reduce the need for language-specific annotation.',
          list: [
            'Global customer support: one model handles tickets in English, Spanish, German, and Japanese',
            'Content moderation: detecting toxic speech across social media platforms in many languages',
            'Legal document analysis: processing contracts and filings in multiple jurisdictions',
            'Healthcare NLP: applying clinical NER to medical records in under-resourced languages'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multilingual models train jointly on many languages with shared parameters',
            'Cross-lingual transfer enables zero-shot performance on unseen languages',
            'mBERT and XLM-R are encoder-only for understanding',
            'mBART and mT5 are encoder-decoder for generation and translation',
            'Performance depends on language similarity and training data balance',
            'Use joint tokenizers like SentencePiece for multilingual vocabularies'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does a multilingual model perform zero-shot transfer?\nAns: Joint pre-training aligns embedding spaces across languages, so a classifier trained on English representations generalizes to similar representations in other languages.',
            'Q2: What is the main limitation of cross-lingual transfer?\nAns: Performance degrades for low-resource languages and language pairs with little structural similarity.',
            'Q3: When should you use mBART instead of mBERT?\nAns: When the task involves text generation or translation across languages, since mBART has an autoregressive decoder.'
          ]
        }
      ]
    },
    'indian-llms': {
      title: 'LLMs for Indian Languages',
      subtitle: 'MuRIL and regional multilingual models',
      sections: [
        {
          heading: 'What are Indian Language LLMs?',
          text: 'Indian language LLMs are multilingual models specifically pre-trained on Indic languages. They address the unique challenges of India\'s linguistic diversity — 22 scheduled languages, multiple scripts, code-switching, and limited digital corpora for many languages.',
          list: [
            'MuRIL (Google): 17 Indian languages + English, BERT-like, 236M parameters',
            'IndicBERT (AI4Bharat): 12 Indic languages, compact and efficient',
            'BharatGPT (OlaKrutrim): Indic-centric large language model',
            'Sarvam-1: 1B parameter model focused on Indian languages',
            'Challenges: code-switching (Hinglish), script diversity, low-resource settings'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Indian language models use shared subword vocabularies across scripts to maximize transfer.',
          example: {
            title: 'MuRIL Architecture and Training',
            code: `Languages covered:
  Hindi, Tamil, Telugu, Bengali, Marathi,
  Gujarati, Kannada, Malayalam, Punjabi,
  Odia, Assamese, Urdu, Sanskrit, Nepali,
  Sinhala, English

Architecture:
  BERT-like transformer
  236M parameters
  16 layers, 768 hidden dim
  12 attention heads

Training data:
  Wikipedia (all languages)
  Common Crawl
  Bible corpus (parallel text)

Pre-training objectives:
  MLM: mask and predict tokens
  NSP: predict sentence pairs

Code-switching example:
  "यह movie बहुत amazing है"
  → MuRIL processes mixed scripts
    and languages seamlessly`,
            output: 'Joint training on parallel religious text improves cross-lingual alignment.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Indian language models differ in scale, focus, and accessibility.',
          table: {
            headers: ['Model', 'Languages', 'Parameters', 'Focus', 'Accessibility'],
            rows: [
              ['MuRIL', '17 + English', '236M', 'Cross-lingual understanding', 'Open (Google)'],
              ['IndicBERT', '12', 'Base: 34M', 'Efficiency + low-resource', 'Open (AI4Bharat)'],
              ['Bharam-1 / Sarvam-1', '10+', '1B', 'Indic generation', 'API access'],
              ['BharatGPT', 'Multiple', 'Unknown', 'Indic-centric LLM', 'Commercial'],
              ['mBERT', '104 (incl. Indic)', '110M', 'General multilingual', 'Open']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using English-centric models for Indian languages (fix: use MuRIL or IndicBERT for better script handling and code-switching support)',
            'Mistake 2: Ignoring code-switching in training data (fix: Indian users frequently mix languages; models must see Hinglish, Tanglish, etc. during training)',
            'Mistake 3: Assuming all Indian languages have equal digital resources (fix: Hindi and Tamil have more data than Odia or Assamese; use upsampling or augmentation)',
            'Mistake 4: Using Latin transliteration instead of native scripts (fix: native script models perform better; transliteration loses orthographic information)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Indian language NLP powers local digital services.',
          list: [
            'Government portals: translating schemes and forms into regional languages',
            'Agricultural apps: providing crop advice in Kannada, Marathi, and Telugu',
            'Financial inclusion: chatbots in Hindi and Bengali for banking services',
            'Education: generating explanations and quizzes in students\' native languages'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Indian language LLMs address 22+ scheduled languages and scripts',
            'MuRIL is the most widely used: 17 languages, BERT-like, 236M parameters',
            'Code-switching is common and must be handled natively',
            'Low-resource languages need upsampling or augmentation',
            'Native script models outperform transliterated Latin models',
            'Applications span governance, agriculture, finance, and education'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is code-switching a unique challenge for Indian language NLP?\nAns: Speakers frequently mix Hindi + English, Tamil + English, etc. within sentences, requiring models to handle multiple scripts and grammars simultaneously.',
            'Q2: What makes MuRIL different from general multilingual BERT?\nAns: MuRIL is specifically trained on 17 Indian languages with parallel Bible corpus for better cross-lingual alignment within the Indian language family.',
            'Q3: Why should you prefer native script over Latin transliteration?\nAns: Native scripts preserve orthographic, morphological, and phonetic information that transliteration strips away, leading to better model performance.'
          ]
        }
      ]
    }
  }
};
