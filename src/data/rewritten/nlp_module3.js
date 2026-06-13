export const nlpStructure = {
  module3: {
    title: 'Module 3: Transformers, Pretrained Models & Prompting',
    topics: [
      { id: 'transformers-nlp', title: 'Transformers' },
      { id: 'bert-family', title: 'BERT Family' },
      { id: 'gpt-family', title: 'GPT Family' },
      { id: 'prompt-engineering-nlp', title: 'Prompt Engineering for NLP' },
      { id: 'fine-tuning-nlp', title: 'Fine-Tuning for NLP' },
    ]
  }
};

export const nlpContent = {
  module3: {
    'transformers-nlp': {
      title: 'Transformers',
      subtitle: 'Attention is all you need — the architecture that revolutionized NLP',
      sections: [
        {
          heading: 'What is a Transformer?',
          text: 'The <strong>Transformer</strong> is a deep-learning architecture introduced by Vaswani et al. (2017) that replaced recurrence with <strong>self-attention</strong>. It processes entire sequences in parallel, making it faster to train and better at capturing long-range dependencies than RNNs or LSTMs.',
          list: [
            'Self-attention computes relationships between all token pairs simultaneously',
            'Positional encodings inject sequence order information',
            'Layer normalization and residual connections stabilize deep training',
            'Multi-head attention captures diverse syntactic and semantic relationships',
            'Transformers form the backbone of BERT, GPT, T5, and virtually all modern LLMs'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Scaled dot-product attention is the mathematical core of every transformer.',
          example: {
            title: 'Scaled Dot-Product Attention',
            code: `Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) × V

Where:
  Q = query matrix (n_q × d_k)
  K = key matrix (n_k × d_k)  
  V = value matrix (n_v × d_v)
  d_k = dimension of keys

Multi-Head Attention:
  head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)
  MultiHead = Concat(head_1, ..., head_h)W^O

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

  Output = Σ weight_i × value_i`,
            output: 'Scaling by sqrt(d_k) prevents softmax saturation and maintains stable gradients.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Transformer variants differ in which components they use and how they process text.',
          table: {
            headers: ['Aspect', 'Encoder-Only (BERT)', 'Decoder-Only (GPT)', 'Encoder-Decoder (T5/BART)'],
            rows: [
              ['Direction', 'Bidirectional', 'Left-to-right', 'Bidirectional encoder, left-to-right decoder'],
              ['Pre-training', 'Masked LM + NSP', 'Next-token prediction', 'Denoising / span corruption'],
              ['Best for', 'Understanding tasks', 'Generation tasks', 'Translation, summarization'],
              ['Attention type', 'Self-attention', 'Masked self-attention', 'Self + cross-attention'],
              ['Parameters (base)', '110M', '117M–175B', '220M–11B'],
              ['Examples', 'BERT, RoBERTa', 'GPT-2, GPT-3, GPT-4', 'T5, BART, mT5']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using transformers without positional encoding (fix: add absolute sinusoidal or learned positional embeddings; attention alone is permutation-invariant and ignores word order)',
            'Mistake 2: Forgetting the scaling factor sqrt(d_k) (fix: always scale dot products; without it, large d_k causes softmax saturation and vanishing gradients)',
            'Mistake 3: Confusing encoder and decoder attention masks (fix: encoder uses unmasked self-attention; decoder uses causal/masked attention to prevent looking ahead)',
            'Mistake 4: Using too few attention heads (fix: use 8–16 heads for base models; too few heads limit the diversity of relationships the model can learn)'
          ]
        },
        {
          heading: 'Real-World Applications',
          list: [
            'Machine translation: Google Translate and DeepL use transformer encoder-decoder models for state-of-the-art translation quality',
            'Search engines: Bing and Google use transformers to understand query intent and rank results by semantic relevance',
            'Conversational AI: ChatGPT, Claude, and Gemini are all built on decoder-only transformer architectures',
            'Document understanding: legal and medical NLP systems use bidirectional transformers to extract entities and relationships',
            'Code generation: GitHub Copilot uses transformer models trained on code to provide context-aware suggestions'
          ]
        },
        {
          heading: 'Exam-Style Questions',
          text: 'Practice questions to test your transformer knowledge.',
          example: {
            title: 'Sample Question',
            code: `Q: Why does the Transformer use positional encoding?

A: Self-attention computes weighted averages 
of all tokens simultaneously. Without positional 
encoding, the model would be permutation-invariant 
(cannot distinguish "cat sat dog" from "dog sat cat").

Positional encoding adds position-specific signals:
  PE(pos, 2i)   = sin(pos / 10000^(2i/d))
  PE(pos, 2i+1) = cos(pos / 10000^(2i/d))

This allows the model to learn both absolute 
and relative token positions.`,
            output: 'Positional encoding is essential because self-attention alone has no notion of sequence order.',
            type: 'code'
          }
        }
      ]
    },
    'bert-family': {
      title: 'BERT Family',
      subtitle: 'Bidirectional encoder representations and their variants',
      sections: [
        {
          heading: 'What is BERT?',
          text: '<strong>BERT</strong> (Bidirectional Encoder Representations from Transformers) is an encoder-only transformer pre-trained on masked language modeling and next sentence prediction. It learns deep bidirectional representations by conditioning on both left and right context in all layers.',
          list: [
            'MLM (Masked Language Modeling): randomly masks 15% of tokens and predicts them from context',
            'NSP (Next Sentence Prediction): learns relationships between sentence pairs',
            'Pre-train once on large unlabeled text, then fine-tune for specific tasks with small labeled datasets',
            'Achieved state-of-the-art on 11 NLP benchmarks when released in 2018',
            'The BERT family includes RoBERTa, ALBERT, DistilBERT, ELECTRA, and DeBERTa'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'BERT uses masked language modeling to force bidirectional understanding.',
          example: {
            title: 'MLM Objective',
            code: `Input:  "The [MASK] sat on the mat"

BERT predicts:
  P("cat" | context) = 0.65
  P("dog" | context) = 0.25
  P("mat" | context) = 0.05

Loss = -log P(true_masked_word | context)

For sentence pair classification:
  [CLS] Sentence A [SEP] Sentence B [SEP]
  → [CLS] token → Linear → Label`,
            output: 'MLM ensures the model learns bidirectional context, unlike left-to-right language models.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'BERT variants improve training efficiency, model size, or downstream performance.',
          table: {
            headers: ['Model', 'Innovation', 'Parameters', 'Best For'],
            rows: [
              ['BERT-Base', 'Original architecture', '110M', 'General NLP tasks'],
              ['BERT-Large', '24 layers, 1024 hidden', '340M', 'High-accuracy needs'],
              ['RoBERTa', 'Better training recipe (no NSP, more data)', '355M', 'Improved understanding'],
              ['ALBERT', 'Shared parameters + factorized embeddings', '18M', 'Memory-constrained environments'],
              ['DistilBERT', 'Knowledge distillation from BERT', '66M', 'Fast inference (2x speed)'],
              ['ELECTRA', 'Replaced token detection (more efficient)', '110M', 'Better sample efficiency'],
              ['DeBERTa', 'Disentangled attention + enhanced mask', '304M', 'Advanced understanding']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fine-tuning BERT without unfreezing layers strategically (fix: for small datasets, freeze lower layers and only train top 2–4 layers plus the classification head to prevent overfitting)',
            'Mistake 2: Using BERT for autoregressive generation (fix: BERT is encoder-only and not designed for generation; use GPT, BART, or T5 for text generation tasks)',
            'Mistake 3: Ignoring max sequence length (fix: BERT-base supports 512 tokens; truncate or chunk longer documents, or use Longformer for long sequences)',
            'Mistake 4: Not handling class imbalance during fine-tuning (fix: use weighted loss or focal loss when classes are imbalanced; BERT tends to overfit to majority classes)'
          ]
        },
        {
          heading: 'Real-World Applications',
          list: [
            'Search engines: Google Search uses BERT to understand query context and intent, improving result relevance by 10%',
            'Healthcare NLP: BioBERT and ClinicalBERT extract medical entities, predict diagnoses, and parse clinical notes',
            'Customer support: sentiment analysis and intent classification power chatbots and ticket routing systems',
            'Legal tech: LegalBERT analyzes contracts, extracts clauses, and predicts case outcomes from court documents',
            'Indian languages: MuRIL (Multilingual Representations for Indian Languages) supports 17 Indian languages for NLP tasks'
          ]
        },
        {
          heading: 'Exam-Style Questions',
          text: 'Test your understanding of BERT and its variants.',
          example: {
            title: 'Sample Question',
            code: `Q: Why does BERT use [CLS] and [SEP] tokens?

A: 
  [CLS] → Added at the start of every input.
          Used as an aggregate representation 
          for classification tasks.
          
  [SEP] → Separates sentence pairs.
          In single sentences, marks the end.
          
Example (sentiment):
  [CLS] This movie was amazing [SEP]
  → [CLS] vector → Linear → Positive

Example (NLI):
  [CLS] It is sunny [SEP] The weather is nice [SEP]
  → [CLS] vector → Linear → Entailment`,
            output: '[CLS] provides a fixed-length representation for classification; [SEP] enables sentence-pair tasks like NLI and QA.',
            type: 'code'
          }
        }
      ]
    },
    'gpt-family': {
      title: 'GPT Family',
      subtitle: 'Generative pre-trained transformers for text generation',
      sections: [
        {
          heading: 'What is GPT?',
          text: '<strong>GPT</strong> (Generative Pre-trained Transformer) is a decoder-only autoregressive language model that predicts the next token given all previous tokens. Unlike BERT, which is bidirectional, GPT processes text left-to-right, making it naturally suited for generation tasks.',
          list: [
            'Autoregressive: predicts P(next_token | previous_tokens) one token at a time',
            'Decoder-only: uses masked self-attention to prevent looking at future tokens',
            'Pre-trained on massive web text corpora (Common Crawl, WebText, BooksCorpus)',
            'Scale leads to emergent capabilities: GPT-3 showed few-shot learning without gradient updates',
            'RLHF alignment (GPT-3.5/4) makes models helpful, harmless, and honest'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'GPT maximizes the likelihood of the next token in a left-to-right fashion.',
          example: {
            title: 'Autoregressive Generation',
            code: `P(sequence) = Π P(w_t | w_1, ..., w_{t-1})

Example:
  Prompt: "In 1492, Christopher Columbus"
  
  P("set" | "In 1492, Christopher Columbus") = 0.25
  P("sail" | "...Columbus set") = 0.40
  P("from" | "...set sail") = 0.35
  P("Spain" | "...sail from") = 0.60
  
  Generated: "In 1492, Christopher Columbus
  set sail from Spain with three ships..."

Temperature scaling controls randomness:
  T=0.0 → deterministic (always pick argmax)
  T=1.0 → natural diversity
  T>1.0 → more creative, less coherent`,
            output: 'Autoregressive generation produces fluent text by sampling one token at a time conditioned on all previous tokens.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'GPT models have grown dramatically in scale and capability across generations.',
          table: {
            headers: ['Model', 'Parameters', 'Training Data', 'Key Innovation'],
            rows: [
              ['GPT-1', '117M', 'BooksCorpus', 'First generative pre-training'],
              ['GPT-2', '1.5B', 'WebText', 'Zero-shot task transfer'],
              ['GPT-3', '175B', 'Filtered CommonCrawl', 'Few-shot prompting at scale'],
              ['GPT-3.5', 'Unknown', 'Code + text', 'Instruct tuning + RLHF'],
              ['GPT-4', 'Estimated >1T', 'Multimodal data', 'Vision + reasoning + safety'],
              ['GPT-4o', 'Estimated >1T', 'Multimodal', 'Native audio/vision, faster inference']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating GPT as a knowledge retrieval system (fix: GPT can hallucinate facts; always verify outputs against authoritative sources for medical, legal, or factual claims)',
            'Mistake 2: Using greedy decoding for all generation tasks (fix: use sampling with temperature and top-p/nucleus sampling; greedy decoding often produces repetitive, generic text)',
            'Mistake 3: Ignoring context window limits (fix: GPT-4 supports 128K tokens; earlier models support 4K–32K; chunk long documents and use retrieval-augmented generation for very long inputs)',
            'Mistake 4: Expecting consistent outputs without system prompts (fix: use system prompts to set behavior, temperature to control creativity, and seed for reproducibility when needed)'
          ]
        },
        {
          heading: 'Real-World Applications',
          list: [
            'Content creation: Jasper, Copy.ai, and Writesonic use GPT to draft marketing copy, blog posts, and email campaigns',
            'Software development: GitHub Copilot and Cursor use GPT-4 to suggest code, explain functions, and debug errors in real time',
            'Education: Khanmigo and Duolingo use GPT for personalized tutoring, explaining concepts, and generating practice problems',
            'Customer service: GPT powers conversational agents that handle support tickets, booking appointments, and answering FAQs',
            'Creative writing: authors use GPT for brainstorming, character development, and overcoming writer\'s block'
          ]
        },
        {
          heading: 'Exam-Style Questions',
          text: 'Practice questions to test your GPT knowledge.',
          example: {
            title: 'Sample Question',
            code: `Q: Why is GPT decoder-only while BERT 
   is encoder-only? What are the trade-offs?

A:
  GPT (decoder-only):
    • Left-to-right masked attention
    • Natural for generation
    • Can generate arbitrary-length text
    • Cannot use future context
    
  BERT (encoder-only):
    • Bidirectional attention
    • Natural for understanding
    • Fixed input length (512 tokens)
    • Cannot generate text autoregressively
    
  Trade-off:
    Bidirectional = better understanding
    Unidirectional = better generation`,
            output: 'Encoder-only models excel at understanding; decoder-only models excel at generation. Architecture choice depends on the task.',
            type: 'code'
          }
        }
      ]
    },
    'prompt-engineering-nlp': {
      title: 'Prompt Engineering for NLP',
      subtitle: 'Designing effective instructions to guide language models',
      sections: [
        {
          heading: 'What is Prompt Engineering?',
          text: '<strong>Prompt engineering</strong> is the practice of designing input prompts to guide LLMs toward desired outputs without updating model weights. It is the primary interface for interacting with models like GPT-4, Claude, and Gemini.',
          list: [
            'Zero-shot prompting: direct instruction with no examples — relies entirely on pre-trained knowledge',
            'Few-shot prompting: includes 2–5 examples in the prompt to demonstrate the desired pattern',
            'Chain-of-Thought (CoT): asks the model to show step-by-step reasoning before giving the final answer',
            'Role prompting: assigns a persona ("You are an expert physicist") to shape tone and depth',
            'Structured prompting: uses delimiters, XML tags, or JSON schemas to constrain output format'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The quality of LLM output is a function of prompt clarity, context, and structure.',
          example: {
            title: 'Chain-of-Thought Prompting',
            code: `Prompt:
  "A bat and ball cost $11 total.
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

Answer: $0.50

Without CoT:
  Model often answers $1 (intuitive but wrong)

With CoT:
  Accuracy improves 20-50% on reasoning tasks.`,
            output: 'Chain-of-thought prompting unlocks reasoning by forcing the model to generate intermediate steps.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different prompting strategies suit different tasks and model sizes.',
          table: {
            headers: ['Technique', 'When to Use', 'Pros', 'Cons'],
            rows: [
              ['Zero-shot', 'Simple tasks, large models', 'Fast, no examples needed', 'Unreliable for complex tasks'],
              ['Few-shot', 'Pattern-based tasks', 'Teaches format and style', 'Consumes context window'],
              ['Chain-of-Thought', 'Math, logic, reasoning', 'Much higher accuracy', 'Increases output length'],
              ['Role Prompting', 'Need domain expertise tone', 'Shapes depth and style', 'Can be overconfident'],
              ['Self-Consistency', 'High-stakes answers', 'Reduces random errors', '3–5x more expensive'],
              ['ReAct', 'Tool use + reasoning', 'Combines thought + action', 'Complex to implement']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Writing vague or ambiguous prompts (fix: be specific about output format, length, tone, and constraints; ambiguous prompts produce inconsistent results)',
            'Mistake 2: Not using delimiters for complex inputs (fix: use triple quotes, XML tags, or markdown code blocks to separate instructions from content; this prevents the model from confusing what to process vs what to follow)',
            'Mistake 3: Providing inconsistent few-shot examples (fix: ensure all examples follow the exact same format and label scheme; inconsistent examples confuse the model more than no examples)',
            'Mistake 4: Ignoring token limits when building prompts (fix: count tokens before sending; long few-shot prompts can exceed context windows and leave no room for the response)'
          ]
        },
        {
          heading: 'Real-World Applications',
          list: [
            'Customer support chatbots: carefully engineered prompts guide LLMs to stay on-topic, ask clarifying questions, and escalate when uncertain',
            'Code generation: prompts that specify language, framework, and constraints produce more accurate and secure code from Copilot',
            'Data extraction: structured prompts with JSON schemas force LLMs to output parseable data for downstream pipelines',
            'Content moderation: multi-step prompts first analyze content, then classify severity, then suggest action — reducing false positives',
            'Educational tutoring: Socratic prompts that ask leading questions rather than giving answers help students learn problem-solving'
          ]
        },
        {
          heading: 'Exam-Style Questions',
          text: 'Practice questions on prompt engineering concepts.',
          example: {
            title: 'Sample Question',
            code: `Q: Design a prompt for extracting 
   named entities from text.

A:
  System: "You are a precise NER system."
  
  Instruction: "Extract all named entities 
  and classify them as PER, ORG, or LOC."
  
  Format: "Entity | Type"
  
  Example:
    Input: "Apple Inc. opened a store in Paris."
    Output:
      Apple Inc. | ORG
      Paris | LOC
  
  Input: "{{user_text}}"
  Output:
    [model fills in]

Why it works:
  • Role sets precision expectation
  • Example teaches exact format
  • Delimiters prevent parsing errors`,
            output: 'Effective prompts combine role, instruction, format, and examples to constrain model behavior predictably.',
            type: 'code'
          }
        }
      ]
    },
    'fine-tuning-nlp': {
      title: 'Fine-Tuning for NLP',
      subtitle: 'Adapting pre-trained models to specific tasks and domains',
      sections: [
        {
          heading: 'What is Fine-Tuning?',
          text: '<strong>Fine-tuning</strong> adapts a pre-trained language model to a specific task by continuing training on labeled task data. It transfers general language understanding into specialized capabilities for sentiment analysis, NER, translation, or domain-specific applications.',
          list: [
            'Full fine-tuning: updates all model parameters — highest accuracy but computationally expensive',
            'Transfer learning: pre-train on massive unlabeled data, then fine-tune on small labeled datasets with 10x less data',
            'PEFT (Parameter-Efficient Fine-Tuning): updates only a small subset of parameters — affordable for large models',
            'LoRA (Low-Rank Adaptation): learns low-rank decomposition matrices instead of full weight updates — 64x fewer parameters',
            'RLHF (Reinforcement Learning from Human Feedback): aligns models with human preferences using reward models'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'PEFT methods make large model adaptation affordable by updating only a tiny fraction of parameters.',
          example: {
            title: 'LoRA vs Full Fine-Tuning',
            code: `Full fine-tuning:
  Update: W (d × d matrix)
  Parameters: 175B
  GPU memory: ~1TB
  Cost: $10,000+

LoRA:
  h = Wx + BAx
  
  W: d×d (frozen, pre-trained)
  B: d×r (learned)
  A: r×d (learned)
  r << d (rank, e.g., r = 8)
  
  Learned params: 2 × d × r
  = 2 × 768 × 8 = 12,288
  
  vs full: 768 × 768 = 589,824
  → 48x fewer parameters!

Other PEFT methods:
  • Prefix tuning: learn 100 prompt tokens
  • Adapters: insert small bottleneck layers
  • BitFit: update only bias terms`,
            output: 'LoRA is the most popular PEFT method, enabling fine-tuning of 175B-parameter models on consumer GPUs.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different fine-tuning methods trade off accuracy, cost, and implementation complexity.',
          table: {
            headers: ['Method', 'Parameters Updated', 'Accuracy', 'Cost', 'Best For'],
            rows: [
              ['Full fine-tuning', 'All', 'Highest', '$10,000+', 'Unlimited budget, maximum accuracy'],
              ['LoRA', 'Low-rank matrices', 'Near full', '~$100', 'Most popular; consumer GPU feasible'],
              ['Prefix tuning', 'Prefix embeddings', 'Good', '~$50', 'Task-specific soft prompts'],
              ['Adapter layers', 'Small bottleneck layers', 'Good', '~$100', 'Multi-task switching'],
              ['BitFit', 'Bias terms only', 'Moderate', '~$20', 'Extreme parameter constraints'],
              ['RLHF', 'Policy + reward model', 'Aligned', 'Very high', 'Human preference alignment']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fine-tuning with too small a learning rate (fix: use 2e-5 to 5e-5 for BERT-family models; too small leads to underfitting, too large causes catastrophic forgetting of pre-trained knowledge)',
            'Mistake 2: Not using validation data to detect overfitting (fix: always reserve 10–15% of labeled data for validation; fine-tuning small datasets on large models overfits quickly)',
            'Mistake 3: Mixing pre-training and fine-tuning data formats (fix: fine-tuning data should match the target task format exactly; random pre-training text mixed in degrades task performance)',
            'Mistake 4: Ignoring class imbalance in classification fine-tuning (fix: use weighted cross-entropy or focal loss; LLMs fine-tuned on imbalanced data predict majority classes almost exclusively)'
          ]
        },
        {
          heading: 'Real-World Applications',
          list: [
            'Financial sentiment: FinBERT fine-tuned on financial news outperforms generic BERT by 15% on stock movement prediction',
            'Legal document analysis: LegalBERT and CaseLawBERT fine-tuned on court opinions extract clauses, predict rulings, and summarize briefs',
            'Healthcare NLP: BioBERT and ClinicalBERT fine-tuned on PubMed and clinical notes identify drug interactions and predict diagnoses from EHRs',
            'Customer support: domain-specific fine-tuning on company ticket history enables accurate intent classification and automated response generation',
            'Multilingual adaptation: XLM-R fine-tuned on low-resource languages (e.g., Tamil, Telugu) achieves near-English quality for Indian language NLP'
          ]
        },
        {
          heading: 'Exam-Style Questions',
          text: 'Practice questions to test your fine-tuning knowledge.',
          example: {
            title: 'Sample Question',
            code: `Q: Compare full fine-tuning, LoRA, 
   and RLHF. When would you use each?

A:
  Full fine-tuning:
    • Update all parameters
    • Best accuracy, highest cost
    • Use when: unlimited compute, 
      need every point of accuracy
      
  LoRA (PEFT):
    • Update low-rank matrices only
    • 95%+ of full accuracy, 64x cheaper
    • Use when: consumer GPUs, 
      many downstream tasks
      
  RLHF:
    • Train reward model + optimize policy
    • Aligns with human preferences
    • Use when: chatbots, safety-critical,
      need helpful/harmless/honest output`,
            output: 'Full fine-tuning for maximum accuracy, LoRA for efficiency, RLHF for alignment with human values.',
            type: 'code'
          }
        }
      ]
    }
  }
};