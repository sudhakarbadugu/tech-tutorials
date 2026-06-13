export const multimodalUnit3Content = {
  unit3: {
    'language-models': {
      title: 'Language Models',
      subtitle: 'Predicting the next word: from n-grams to neural language models',
      sections: [
        {
          heading: 'What is a Language Model?',
          text: 'A <strong>language model</strong> predicts the probability of a sequence of words. It is the core engine behind autocomplete, machine translation, speech recognition, and generative AI. The better the model, the more coherent and contextually appropriate the text it generates.',
          list: [
            'Assigns a probability P(w₁, w₂, ..., wₙ) to any sequence of words',
            'Can generate text by sampling one word at a time conditioned on previous words',
            'N-gram models use local context; neural models capture long-range dependencies',
            'Modern LLMs (GPT, Llama) are neural language models scaled to billions of parameters'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The chain rule decomposes sequence probability into a product of conditional probabilities. N-gram models approximate this with a fixed context window.',
          example: {
            title: 'Example: Bigram probability decomposition',
            code: 'Chain rule (exact):\n  P("the cat sat") = P(the) × P(cat|the) × P(sat|the cat)\n\nBigram approximation:\n  P(sat|the cat) ≈ P(sat|cat)\n\nCorpus counts:\n  count("cat sat") = 120\n  count("cat") = 4000\n\nP(sat|cat) = 120 / 4000 = 0.03',
            output: 'Bigram captures local word order but ignores words before "cat".',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing language modeling approaches by context length and representational power.',
          table: {
            headers: ['Model', 'Context Used', 'Key Limitation', 'Representative Example'],
            rows: [
              ['Unigram', 'None (independent)', 'No context at all', 'Naive Bayes text classifier'],
              ['Bigram', '1 previous word', 'Very short context', 'Simple autocomplete'],
              ['Trigram', '2 previous words', 'Sparsity for rare triples', 'Traditional speech recognizer'],
              ['LSTM LM', 'All previous words (gated)', 'Sequential computation only', 'Early neural MT'],
              ['Transformer', 'All previous words (parallel)', 'Quadratic attention cost', 'GPT-4, Claude, Llama']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming higher n is always better for n-grams (fix: trigram+ suffers from data sparsity — most n-grams never appear; use smoothing or switch to neural models)',
            'Mistake 2: Ignoring the zero-probability problem with n-grams (fix: apply Laplace or Kneser-Ney smoothing so unseen n-grams get small non-zero probabilities instead of zero)',
            'Mistake 3: Evaluating language models only by perplexity (fix: perplexity correlates with fluency but not factual accuracy or safety; always test on downstream tasks and human evaluation)',
            'Mistake 4: Confusing a language model with a knowledge base (fix: LMs predict likely text, not true text — they hallucinate confidently; verify facts with retrieval or external tools)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Language models are the invisible engine behind everyday text technology.',
          list: [
            'Autocomplete and predictive keyboards: your phone suggests next words using a compact neural LM running locally',
            'Machine translation: Google Translate generates target sentences by decoding from a neural language model conditioned on source encoding',
            'Speech recognition: Whisper transcribes audio by finding the most probable text sequence under an LM prior',
            'Code completion: GitHub Copilot predicts the next tokens of code, not just natural language, using a specialized programming language model'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Language models predict P(sequence) or P(next_word | context)',
            'N-grams are fast and interpretable but suffer from sparsity and short context',
            'Neural LMs (LSTM, Transformer) capture long-range dependencies and generalize better',
            'Perplexity is the standard intrinsic metric; extrinsic evaluation on downstream tasks is essential',
            'LMs generate fluent text but do not guarantee factual correctness — always verify'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do trigram models hit a sparsity wall even with large corpora?\nAns: The number of possible trigrams grows cubically with vocabulary size, so most valid trigrams never appear in training data.',
            'Q2: What does it mean when a neural language model has lower perplexity than an n-gram model on the same test set?\nAns: It assigns higher average probability to the true next words, indicating better predictive accuracy.',
            'Q3: Why can a language model confidently generate false statements?\nAns: It models linguistic probability, not truth — false but common phrases receive high probability.'
          ]
        }
      ]
    },
    'skip-thought': {
      title: 'Skip-Thought Vectors',
      subtitle: 'Extending Word2Vec from words to sentences',
      sections: [
        {
          heading: 'What are Skip-Thought Vectors?',
          text: '<strong>Skip-Thought</strong> extends the skip-gram idea from words to sentences: encode a sentence into a vector, then reconstruct the <em>previous</em> and <em>next</em> sentences. The resulting vector captures the sentence\'s semantic and discourse meaning in an unsupervised way.',
          list: [
            'Inspired by Word2Vec skip-gram but operates at sentence level',
            'An encoder (GRU/LSTM) compresses a sentence into a fixed vector',
            'Two decoders reconstruct the adjacent sentences from this vector',
            'Fully unsupervised — needs only raw text documents, no labels'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The training objective maximizes the log probability of the surrounding sentences given the encoded representation of the current sentence.',
          example: {
            title: 'Example: Skip-thought training on a document',
            code: 'Document:\n  S1: "The cat sat on the mat."\n  S2: "It looked comfortable."\n  S3: "The dog wanted to join."\n\nEncoder:\n  h2 = Encoder(S2)\n\nObjective:\n  J = log P(S1 | h2) + log P(S3 | h2)\n\nDecoder 1 (previous):\n  h2 → "The" → "cat" → "sat" → ...\n\nDecoder 2 (next):\n  h2 → "The" → "dog" → "wanted" → ...',
            output: 'h2 becomes a generic sentence embedding that captures meaning and discourse role.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing sentence-level representation learning methods.',
          table: {
            headers: ['Method', 'Supervision', 'Context Used', 'Best Use Case', 'Limitation'],
            rows: [
              ['Skip-Thought', 'Unsupervised', 'Adjacent sentences', 'Generic sentence embeddings', 'Outperformed by transformers'],
              ['InferSent', 'Supervised (SNLI)', 'Sentence pair labels', 'Semantic similarity tasks', 'Needs labeled data'],
              ['Universal Sentence Encoder', 'Supervised + unsupervised', 'Diverse tasks', 'General NLP', 'Black box, Google-only'],
              ['BERT (CLS token)', 'Supervised (MLM + NSP)', 'Full bi-directional context', 'Contextual sentence understanding', 'Not a true sentence embedding'],
              ['Sentence-BERT', 'Supervised (Siamese)', 'Sentence pairs with similarity', 'Semantic search, clustering', 'Requires fine-tuning data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating skip-thought vectors as state-of-the-art for modern NLP (fix: skip-thought was pioneering in 2015 but is surpassed by sentence-BERT and large embedding models; use it only for historical or lightweight contexts)',
            'Mistake 2: Expecting skip-thought to capture fine-grained sentiment or intent (fix: it captures broad discourse semantics; for sentiment or intent, fine-tune on labeled data or use domain-specific encoders)',
            'Mistake 3: Applying skip-thought to isolated sentences without document context (fix: skip-thought is trained on document coherence; performance degrades on shuffled or standalone sentences)',
            'Mistake 4: Confusing skip-thought with paragraph vectors (Doc2Vec) (fix: Doc2Vec predicts words from a paragraph ID; skip-thought predicts surrounding sentences from an encoded sentence — different objectives, different behavior)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Skip-thought vectors enable sentence understanding without labeled data.',
          list: [
            'Document summarization: scoring sentence importance by embedding sentences and selecting diverse, high-centrality candidates',
            'Plagiarism detection: comparing skip-thought vectors of student submissions against source texts for semantic similarity',
            'Dialogue systems: encoding utterances to retrieve contextually relevant responses from a conversation database',
            'Cross-lingual transfer: training skip-thought on aligned multilingual documents to produce language-agnostic sentence representations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Skip-thought = Word2Vec skip-gram applied to sentences instead of words',
            'Encoder compresses a sentence; decoders reconstruct neighbors',
            'Fully unsupervised — learns from document structure alone',
            'Produces generic sentence embeddings transferable to downstream tasks',
            'Superseded by Sentence-BERT and large transformer embeddings for most applications'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does skip-thought differ from Word2Vec skip-gram?\nAns: Skip-gram predicts context words from a target word; skip-thought predicts adjacent sentences from an encoded target sentence.',
            'Q2: Why is skip-thought considered fully unsupervised?\nAns: It learns from the natural ordering of sentences in documents without any human annotations.',
            'Q3: What is the main reason modern systems prefer Sentence-BERT over skip-thought?\nAns: Sentence-BERT fine-tunes on labeled semantic similarity data (e.g., SNLI), producing embeddings optimized for the target task.'
          ]
        }
      ]
    },
    'n-grams': {
      title: 'N-Gram Models',
      subtitle: 'Counting word sequences for language modeling',
      sections: [
        {
          heading: 'What are N-Grams?',
          text: 'An <strong>n-gram</strong> is a contiguous sequence of n items (words) from text. N-gram models are the simplest statistical language models: they estimate the probability of a word based on the previous n-1 words using frequency counts from a training corpus.',
          list: [
            'Unigram (n=1): single words treated independently — ignores all context',
            'Bigram (n=2): predicts a word given exactly one previous word',
            'Trigram (n=3): predicts a word given two previous words',
            'Higher n-grams capture more context but suffer from data sparsity'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'N-grams apply the Markov assumption: the probability of a word depends only on the previous n-1 words.',
          example: {
            title: 'Example: Bigram probability',
            code: 'Sentence: "I love machine learning"\n\nChain rule:\n  P(I love machine learning) =\n    P(I) × P(love|I) × P(machine|love) × P(learning|machine)\n\nCorpus counts:\n  count("I love") = 500\n  count("I") = 10,000\n\nP(love|I) = 500 / 10,000 = 0.05',
            output: 'Bigram models capture local word order but ignore everything beyond the immediate predecessor.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Trade-offs across n-gram orders.',
          table: {
            headers: ['N-gram', 'Context', 'Sparsity', 'Storage', 'Best Use'],
            rows: [
              ['Unigram', 'None', 'None', 'Vocabulary size', 'Topic classification, baseline'],
              ['Bigram', '1 word', 'Low', 'Vocabulary²', 'Simple autocomplete'],
              ['Trigram', '2 words', 'Moderate', 'Vocabulary³', 'Speech recognition'],
              ['4-gram+', '3+ words', 'Severe', 'Vocabulary⁴+', 'Rare, needs smoothing'],
              ['Neural LM', 'All previous', 'None', 'Model weights', 'Modern NLP (LSTM, Transformer)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using high-order n-grams without smoothing (fix: most n-grams never appear in training; apply Laplace, Kneser-Ney, or backoff smoothing to avoid zero probabilities)',
            'Mistake 2: Ignoring the zero-probability problem (fix: unseen n-grams must receive small non-zero probabilities via smoothing, otherwise any sentence containing a new combination gets P=0)',
            'Mistake 3: Assuming n-grams are sufficient for modern NLP (fix: n-grams have fixed short context and no generalization; neural language models dominate almost all tasks today)',
            'Mistake 4: Treating n-gram probability as semantic meaning (fix: n-grams capture co-occurrence frequency, not meaning — "not good" and "good" may both contain "good" but have opposite sentiment)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'N-grams were the workhorse of NLP before neural models.',
          list: [
            'Speech recognition: early systems used trigram language models to constrain phoneme sequences to likely word sequences',
            'Spelling correction: "teh" is corrected to "the" because P(the|context) >> P(teh|context) in the training corpus',
            'Predictive keyboards: early mobile phones suggested next words using compact bigram models stored locally',
            'Plagiarism detection: n-gram fingerprinting compares document n-gram overlap to detect copied passages'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'N-grams: contiguous sequences of n words used for probability estimation',
            'Markov assumption limits context to n-1 previous words',
            'Sparsity grows exponentially with n; smoothing is essential',
            'Neural LMs (RNN, Transformer) have replaced n-grams in most modern systems',
            'N-grams remain useful for small-data settings and interpretable baselines'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do trigram models hit a sparsity wall even with large corpora?\nAns: The number of possible trigrams grows cubically with vocabulary size, so most valid combinations never appear in training.',
            'Q2: What is the purpose of smoothing in n-gram language models?\nAns: To assign small non-zero probabilities to unseen n-grams so that sentences containing novel combinations are not assigned zero probability.',
            'Q3: Why have neural language models largely replaced n-gram models in modern NLP?\nAns: Neural models capture long-range dependencies and generalize to unseen sequences, while n-grams are limited by fixed context windows and data sparsity.'
          ]
        }
      ]
    },
    rnn: {
      title: 'RNN & Sequential Models',
      subtitle: 'Processing variable-length sequences with shared parameters',
      sections: [
        {
          heading: 'What is a Recurrent Neural Network?',
          text: 'A <strong>Recurrent Neural Network (RNN)</strong> processes sequences by maintaining a hidden state that acts as memory. At each time step, it updates this state using both the current input and the previous state, enabling it to model temporal dependencies in text, speech, and time series.',
          list: [
            'Maintains a hidden state hₜ that carries information from previous time steps',
            'Uses the same weight matrices at every time step (parameter sharing)',
            'Can process sequences of arbitrary length, unlike fixed-input MLPs',
            'Natural fit for time-ordered data: text, audio, sensor readings, stock prices'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The RNN update equations combine the previous hidden state with the current input via a non-linear transformation.',
          example: {
            title: 'Example: Vanilla RNN forward pass',
            code: 'At each time step t:\n  zt = Whh · hₜ₋₁ + Wxh · xt + bh\n  ht = tanh(zt)\n  yt = Why · ht + by\n\nFor input sequence "cat sat":\n  x1 = embed("cat")  → h1 = tanh(Wxh·x1 + bh)\n  x2 = embed("sat")  → h2 = tanh(Whh·h1 + Wxh·x2 + bh)\n\nOutput:\n  y2 = Why·h2 + by  ← prediction for next word',
            output: 'The hidden state h2 encodes the entire sequence "cat sat" so far.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing sequence modeling architectures.',
          table: {
            headers: ['Feature', 'Vanilla RNN', 'LSTM', 'GRU', 'Transformer'],
            rows: [
              ['Gating mechanism', 'None', '3 gates (input, forget, output)', '2 gates (reset, update)', 'Attention (no recurrence)'],
              ['Long-term memory', 'Poor (>10 steps)', 'Excellent (100+ steps)', 'Good (50+ steps)', 'Unlimited (full context)'],
              ['Training speed', 'Moderate', 'Slow (many gates)', 'Moderate', 'Fast (parallelizable)'],
              ['Parameters', 'Minimal', '~4× RNN', '~3× RNN', 'Large but efficient'],
              ['Best for', 'Short sequences, education', 'Long complex sequences', 'Balanced speed/performance', 'Modern default']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using vanilla RNNs for long sequences (fix: gradients vanish exponentially; use LSTM, GRU, or transformers for sequences longer than ~20 time steps)',
            'Mistake 2: Forgetting to initialize the hidden state properly (fix: zero initialization is standard for training, but for inference consider learned initial states or carry-over states in streaming applications)',
            'Mistake 3: Assuming bidirectional RNNs work for real-time streaming (fix: bidirectional RNNs require the entire sequence; for live processing, use unidirectional with caching or transformer streaming variants)',
            'Mistake 4: Not handling variable sequence lengths in batches (fix: use padding with pack_padded_sequence in PyTorch or masking in TensorFlow to avoid computing on padded tokens)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'RNNs and their variants are foundational to sequential AI systems.',
          list: [
            'Speech recognition: mapping acoustic feature frames to phoneme or character sequences in systems like DeepSpeech',
            'Time series forecasting: predicting stock prices, energy demand, and weather by modeling temporal patterns in historical data',
            'Music generation: generating melodies note-by-note by conditioning on previous notes and chords',
            'Named entity recognition: tagging sequences of words with entity labels (person, organization, location) using BiLSTM-CRF architectures'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'RNNs process sequences via a hidden state updated at each time step',
            'Parameter sharing makes them efficient and length-independent',
            'Vanilla RNNs suffer from vanishing gradients on long sequences',
            'LSTM and GRU solve this with gating mechanisms',
            'Transformers have largely replaced RNNs for most NLP tasks but RNNs remain relevant for streaming and small-model settings'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does parameter sharing in RNNs matter for sequence length?\nAns: The same weights are reused at every time step, so the model generalizes to sequences of any length without parameter explosion.',
            'Q2: What causes the vanishing gradient problem in vanilla RNNs?\nAns: Gradients are multiplied by the weight matrix at each backpropagation step; if its largest eigenvalue is less than 1, the gradient shrinks exponentially with sequence length.',
            'Q3: When might you still choose an RNN over a Transformer today?\nAns: Streaming/real-time applications where latency matters, memory-constrained edge devices, or very small datasets where RNNs train faster.'
          ]
        }
      ]
    },
    lstm: {
      title: 'LSTM Networks',
      subtitle: 'Long Short-Term Memory: gating the flow of information through time',
      sections: [
        {
          heading: 'What is an LSTM?',
          text: 'The <strong>Long Short-Term Memory (LSTM)</strong> network is a specialized RNN architecture designed to remember information for long periods. It uses a <strong>cell state</strong> (a conveyor belt) and three <strong>gates</strong> (forget, input, output) to selectively add or remove information, solving the vanishing gradient problem that cripples vanilla RNNs.',
          list: [
            'Cell state runs through the entire chain with minimal linear interactions',
            'Forget gate decides what information to discard from the cell state',
            'Input gate decides what new information to store in the cell state',
            'Output gate decides what part of the cell state to output as the hidden state'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The LSTM gates use sigmoid (0 to 1, acting as filters) and tanh (-1 to 1, creating candidate values). The cell state update is additive, allowing gradients to flow directly.',
          example: {
            title: 'Example: LSTM cell computation step',
            code: 'Forget gate:\n  ft = σ(Wf · [hₜ₋₁, xt] + bf)\n\nInput gate + candidate:\n  it = σ(Wi · [hₜ₋₁, xt] + bi)\n  C̃t = tanh(Wc · [hₜ₋₁, xt] + bc)\n\nCell state update (ADDITIVE):\n  Ct = ft ⊙ Cₜ₋₁ + it ⊙ C̃t\n\nOutput gate:\n  ot = σ(Wo · [hₜ₋₁, xt] + bo)\n  ht = ot ⊙ tanh(Ct)\n\nIf ft = 1 and it = 0:\n  Ct = Cₜ₋₁  ← gradient flows unchanged!',
            output: 'The additive cell state update is the key to avoiding vanishing gradients.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing gated recurrent architectures in detail.',
          table: {
            headers: ['Aspect', 'LSTM', 'GRU', 'Peephole LSTM'],
            rows: [
              ['Gates', '3 (forget, input, output)', '2 (reset, update)', '3 + peephole connections'],
              ['Cell state', 'Explicit, separate from hidden', 'Merged with hidden state', 'Explicit with peephole links'],
              ['Parameters', '~4× vanilla RNN', '~3× vanilla RNN', '~4.5× vanilla RNN'],
              ['Long-term memory', 'Excellent', 'Good', 'Slightly better than standard'],
              ['Training speed', 'Slower', 'Moderate', 'Slowest'],
              ['When to use', 'Maximum memory needed', 'Speed-memory balance', 'Rare (legacy)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming LSTM completely eliminates vanishing gradients (fix: LSTM dramatically reduces the problem but does not eliminate it entirely; very long sequences may still struggle — use gradient clipping and layer normalization)',
            'Mistake 2: Using LSTM where a simpler GRU would suffice (fix: GRU has fewer parameters and trains faster with comparable performance on many tasks; start with GRU and upgrade to LSTM if needed)',
            'Mistake 3: Forgetting to use forget gate bias initialization (fix: initialize forget gate bias to 1.0 so the LSTM starts by remembering everything and learns to forget, rather than learning to remember from scratch)',
            'Mistake 4: Stacking too many LSTM layers without regularization (fix: deep LSTM stacks overfit easily; use dropout between layers and recurrent dropout on hidden states)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'LSTMs power systems that need to remember context over long spans.',
          list: [
            'Machine translation: Google\'s original Neural Machine Translation used deep LSTM encoder-decoder with attention to translate between languages',
            'Handwriting recognition: reading cursive text by processing pen-stroke sequences over hundreds of time steps',
            'Anomaly detection in IoT: LSTMs learn normal patterns in sensor streams and flag deviations that persist over long windows',
            'Video activity recognition: processing frame sequences to classify actions like "opening a door" or "falling" where the full temporal context matters'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LSTM = cell state + three gates (forget, input, output)',
            'Cell state updates additively, preventing gradient vanishing',
            'Gates use sigmoid to filter (0–1) and tanh to create candidates (-1 to 1)',
            'GRU is a lighter alternative with similar memory capabilities',
            'Initialize forget gate bias to 1.0 for faster training'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does the additive cell state update prevent vanishing gradients?\nAns: Gradients flow through the cell state via multiplication by the forget gate (≈1), avoiding repeated multiplication by small weights.',
            'Q2: What is the role of the forget gate in an LSTM?\nAns: It decides what proportion of the previous cell state to retain, allowing the network to discard irrelevant old information.',
            'Q3: Why is GRU often preferred over LSTM in practice?\nAns: GRU achieves comparable performance with fewer parameters and faster training, making it more efficient for many tasks.'
          ]
        }
      ]
    },
    gru: {
      title: 'GRU',
      subtitle: 'Gated Recurrent Unit — a streamlined LSTM',
      sections: [
        {
          heading: 'What is a GRU?',
          text: 'The <strong>Gated Recurrent Unit (GRU)</strong> is a simplified variant of LSTM that merges the forget and input gates into a single <strong>update gate</strong> and eliminates the separate cell state. It uses only two gates (reset and update) instead of three, making it faster to train while retaining most of LSTM\'s ability to model long-range dependencies.',
          list: [
            'Update gate: decides how much of the previous hidden state to keep vs. replace with new candidate',
            'Reset gate: controls how much past information to forget when computing the candidate activation',
            'Only hidden state — no separate cell state (unlike LSTM)',
            'Fewer parameters and faster training than LSTM with comparable performance on many tasks'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'GRU computes a candidate hidden state using the reset gate, then blends it with the previous state using the update gate.',
          example: {
            title: 'Example: GRU gate computation',
            code: 'Previous state: h_{t-1} = [0.2, -0.1, 0.5]\nInput: x_t = emb("running")\n\nReset gate:\n  r_t = sigmoid(W_r · [h_{t-1}, x_t])\n  r_t = [0.1, 0.9, 0.3]  (mostly forget first, keep second)\n\nCandidate state:\n  h̃_t = tanh(W · [r_t ⊙ h_{t-1}, x_t])\n\nUpdate gate:\n  z_t = sigmoid(W_z · [h_{t-1}, x_t])\n  z_t = [0.8, 0.2, 0.6]\n\nNew state:\n  h_t = z_t ⊙ h_{t-1} + (1 - z_t) ⊙ h̃_t',
            output: 'The update gate blends old and new information, while the reset gate controls how much past context enters the candidate.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'GRU versus LSTM: architectural simplifications and practical trade-offs.',
          table: {
            headers: ['Feature', 'LSTM', 'GRU'],
            rows: [
              ['Gates', '3 (forget, input, output)', '2 (reset, update)'],
              ['Cell state', 'Separate cell state + hidden state', 'Only hidden state'],
              ['Parameters', 'More (~4× input size)', 'Fewer (~3× input size)'],
              ['Training speed', 'Slower', 'Faster'],
              ['Long sequences', 'Better on very long sequences', 'Comparable on most tasks'],
              ['Interpretability', 'Clear cell-state conveyor belt', 'Simpler, but less explicit memory path']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming GRU is always worse than LSTM (fix: on many standard NLP benchmarks, GRU performs within 1-2% of LSTM with significantly faster training; use GRU as a default and switch to LSTM only if you need the extra capacity)',
            'Mistake 2: Using GRU for extremely long sequences (>500 steps) without testing (fix: LSTM\'s explicit cell state sometimes outperforms GRU on very long documents; benchmark both on your data)',
            'Mistake 3: Tuning LSTM and GRU hyperparameters identically (fix: GRU trains faster and may need different learning rates or dropout settings; run separate hyperparameter searches)',
            'Mistake 4: Ignoring the update gate initialization (fix: initializing the update gate bias to a small negative value encourages the model to retain more past information early in training, stabilizing learning)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'GRU is the go-to choice when you want LSTM-like modeling with less computational cost.',
          list: [
            'Real-time speech recognition: GRU decodes audio streams with lower latency than LSTM in production ASR systems',
            'Music generation: Google\'s Magenta uses GRU to generate melodies because it trains faster on large MIDI datasets',
            'Sentiment analysis: GRU achieves near-LSTM accuracy on short texts (tweets, reviews) with 25% fewer parameters',
            'Resource-constrained devices: embedded NLP systems (smart speakers, wearables) prefer GRU for its smaller memory footprint'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'GRU = simplified LSTM with 2 gates (reset + update) and no cell state',
            'Update gate blends old and new hidden state; reset gate controls candidate computation',
            'Fewer parameters, faster training, comparable accuracy to LSTM on most tasks',
            'Best for medium-length sequences and resource-constrained deployments',
            'LSTM may still win on very long sequences where explicit cell state matters'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main architectural difference between GRU and LSTM?\nAns: GRU merges the forget and input gates into a single update gate and eliminates the separate cell state, using only a hidden state.',
            'Q2: Why does GRU train faster than LSTM?\nAns: GRU has fewer parameters (no separate cell state, fewer gates), so each gradient step is cheaper and the network converges faster.',
            'Q3: When should you prefer LSTM over GRU?\nAns: For very long sequences where the explicit cell-state conveyor belt provides better long-range information preservation than GRU\'s update-gate blending.'
          ]
        }
      ]
    },
    bptt: {
      title: 'Backpropagation Through Time',
      subtitle: 'Training RNNs by unrolling sequences into computation graphs',
      sections: [
        {
          heading: 'What is BPTT?',
          text: '<strong>Backpropagation Through Time (BPTT)</strong> is the algorithm for training recurrent networks. It "unrolls" the recurrent connections across time steps, creating a large feedforward graph, then applies standard backpropagation. The gradient at each step is the product of Jacobian matrices, which leads to the vanishing or exploding gradient problem.',
          list: [
            'Unrolls the RNN across T time steps to create a feedforward-like graph',
            'Applies the chain rule backward from the final output to the initial state',
            'Requires storing all hidden states during the forward pass',
            'Truncated BPTT limits the backward window to k steps for efficiency'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The gradient of the loss with respect to the recurrent weight matrix is the sum of gradients at each time step, each involving a product of Jacobian matrices back to that step.',
          example: {
            title: 'Example: BPTT gradient computation',
            code: 'Unrolled RNN for sequence length T=3:\n  x1 → h1 → y1\n  x2 → h2 → y2\n  x3 → h3 → y3\n\nGradient for Whh:\n  ∂L/∂Whh = ∂L/∂y3 · ∂y3/∂h3 · ∂h3/∂Whh\n          + ∂L/∂y3 · ∂y3/∂h3 · ∂h3/∂h2 · ∂h2/∂Whh\n          + ∂L/∂y3 · ∂y3/∂h3 · ∂h3/∂h2 · ∂h2/∂h1 · ∂h1/∂Whh\n\nFor h_t = tanh(Whh·hₜ₋₁ + ...):\n  ∂h_t/∂hₜ₋₁ = diag(1 - tanh²(...)) · Whh\n\nRepeated multiplication by Whh causes\nvanishing (eigenvalue < 1) or exploding\n(eigenvalue > 1) gradients.',
            output: 'The gradient is a sum of products — each product gets longer as we go back in time.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing full BPTT with truncated and approximate variants.',
          table: {
            headers: ['Method', 'Backprop Window', 'Memory Cost', 'Captures Long Dependencies', 'Use Case'],
            rows: [
              ['Full BPTT', 'Entire sequence', 'O(T) hidden states', 'Yes (in theory)', 'Short sequences only'],
              ['Truncated BPTT (k=20)', 'Last k steps', 'O(k) per chunk', 'Up to k steps', 'Standard training'],
              ['Real-Time Recurrent Learning', 'Online, no storage', 'O(n²) per step', 'No', 'Online learning'],
              ['Checkpointing', 'Full via recomputation', 'O(√T) checkpoints', 'Yes', 'Very long sequences'],
              ['Straight-Through Estimator', 'None (approximate)', 'O(1)', 'No', 'Discrete RNNs']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running full BPTT on very long sequences (fix: memory grows linearly with sequence length and gradients explode; use truncated BPTT with a window of 20–50 steps)',
            'Mistake 2: Ignoring gradient clipping when training RNNs (fix: always clip gradients to a maximum norm (e.g., 5.0) because BPTT gradients can explode exponentially even with LSTMs)',
            'Mistake 3: Assuming BPTT on LSTM has no vanishing gradient at all (fix: LSTM reduces but does not eliminate the problem; extremely long sequences may still lose early gradients)',
            'Mistake 4: Not resetting the hidden state between unrelated sequences (fix: carry-over hidden states from unrelated documents corrupt training; always reset h₀ to zero or a learned initial state at sequence boundaries)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'BPTT is the training backbone of all recurrent neural network applications.',
          list: [
            'Neural machine translation: training encoder-decoder models to translate sentences of varying length by backpropagating error through the full unrolled sequence',
            'Speech synthesis (Tacotron): training LSTM-based spectrogram generators by propagating reconstruction error back through hundreds of acoustic frames',
            'Reinforcement learning (PPO with RNN policies): unrolling trajectories through time and backpropagating policy gradients through the recurrent policy network',
            'Music transcription: training RNNs to map audio frames to note onsets by backpropagating through long musical phrases'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BPTT unrolls RNNs and applies standard backpropagation',
            'Gradient = sum of products of Jacobian matrices across time',
            'Repeated multiplication causes vanishing or exploding gradients',
            'Truncated BPTT limits the backward window for practicality',
            'Always use gradient clipping and state reset when training RNNs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does BPTT require more memory than standard backpropagation in feedforward networks?\nAns: It must store all hidden states from the forward pass to compute gradients during the backward pass.',
            'Q2: What is the mathematical reason for vanishing gradients in BPTT?\nAns: The gradient involves repeated multiplication of the same weight matrix; if its spectral radius is less than 1, the product decays exponentially.',
            'Q3: How does truncated BPTT trade off memory, speed, and model capability?\nAns: It limits backpropagation to k steps, reducing memory and computation but capping the maximum dependency length the model can learn.'
          ]
        }
      ]
    },
    'encoder-decoder': {
      title: 'Encoder-Decoder Models',
      subtitle: 'Sequence-to-sequence learning for translation, summarization, and beyond',
      sections: [
        {
          heading: 'What is an Encoder-Decoder Model?',
          text: 'An <strong>encoder-decoder</strong> (or seq2seq) model consists of two neural networks: an <strong>encoder</strong> that reads the input sequence and compresses it into a context vector, and a <strong>decoder</strong> that generates the output sequence from this vector. It is the foundational architecture for machine translation, summarization, and speech-to-text.',
          list: [
            'Encoder processes the input sequence and produces a fixed-length context vector',
            'Decoder generates the output sequence autoregressively, one token at a time',
            'Can handle different input and output lengths (unlike fixed-size classifiers)',
            'Attention allows the decoder to focus on relevant encoder states per output token'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Without attention, the decoder conditions solely on the final encoder hidden state. With attention, it conditions on a weighted sum of all encoder states.',
          example: {
            title: 'Example: Encoder-decoder with attention for translation',
            code: 'English input: "The cat sat"\n\nEncoder (BiLSTM):\n  h1 = encode("The")\n  h2 = encode("cat")\n  h3 = encode("sat")\n\nDecoder generating French "Le chat était assis":\n\nFor output word "chat":\n  attention weights:\n    α(The)  = 0.05\n    α(cat)  = 0.88  ← HIGH\n    α(sat)  = 0.07\n\n  context = 0.05·h1 + 0.88·h2 + 0.07·h3\n\n  P("chat" | context, previous_outputs) = high',
            output: 'Attention tells the decoder which input word to focus on for each output word.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing encoder-decoder variants and their attention mechanisms.',
          table: {
            headers: ['Variant', 'Context Vector', 'Alignment', 'Strength', 'Weakness'],
            rows: [
              ['Vanilla Seq2Seq', 'Final encoder state only', 'None', 'Simple', 'Bottleneck on long inputs'],
              ['Seq2Seq + Attention', 'Weighted sum of all states', 'Learned per output', 'No bottleneck', 'Slower, more compute'],
              ['Transformer', 'Self-attention + cross-attention', 'Multi-head parallel', 'Best quality, parallelizable', 'Quadratic memory'],
              ['Pointer-Generator', 'Attention + copy mechanism', 'Can copy from input', 'Handles OOV words', 'More complex training']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using encoder-decoder without attention for long sequences (fix: the fixed context vector is a severe bottleneck; always add attention for sequences longer than ~15 tokens)',
            'Mistake 2: Teacher-forcing the decoder 100% of the time during training (fix: at inference the decoder sees its own previous outputs, not ground truth; use scheduled sampling or curriculum learning to bridge the exposure gap)',
            'Mistake 3: Forgetting to reverse the input sequence for vanilla LSTM encoders (fix: reversing the input brings the first and last words closer in the hidden state, improving translation quality — a historical trick still useful for simple models)',
            'Mistake 4: Using the same vocabulary for source and target in multilingual systems (fix: shared vocabularies force unrelated languages to share tokens; use separate or jointly learned subword vocabularies like SentencePiece)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Encoder-decoder architectures are at the heart of modern language technology.',
          list: [
            'Machine translation: Google Translate, DeepL, and OpenAI\'s translation API all use attention-based encoder-decoder or transformer architectures',
            'Text summarization: news article summarizers encode the full article and decode a concise headline or abstract',
            'Speech recognition: Whisper encodes audio spectrograms and decodes text transcripts in a single encoder-decoder pass',
            'Code generation: GitHub Copilot encodes surrounding code context and decodes the next lines of code autoregressively'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Encoder-decoder = encoder (compress input) + decoder (generate output)',
            'Can handle variable-length input and output sequences',
            'Attention removes the bottleneck of a fixed context vector',
            'Teacher forcing during training creates an exposure bias — mitigate with scheduled sampling',
            'Transformers are the modern evolution, replacing recurrence with full self-attention'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the "bottleneck problem" in vanilla encoder-decoder models?\nAns: The entire input sequence must be compressed into a single fixed-size vector, losing information for long sequences.',
            'Q2: How does attention solve the bottleneck problem?\nAns: The decoder accesses all encoder hidden states via a weighted sum, dynamically focusing on relevant input tokens per output token.',
            'Q3: What is "exposure bias" and why does it matter?\nAns: The decoder is trained on ground-truth inputs but tested on its own predictions, causing error accumulation at inference.'
          ]
        }
      ]
    },
    'image-captioning': {
      title: 'Image Captioning',
      subtitle: 'Generating natural language descriptions from visual content',
      sections: [
        {
          heading: 'What is Image Captioning?',
          text: '<strong>Image captioning</strong> is the task of generating a natural language description for a given image. It requires bridging the visual and linguistic modalities — understanding <em>what</em> objects are present, <em>where</em> they are, and <em>how</em> they relate — then expressing this understanding in fluent text.',
          list: [
            'Combines computer vision (object detection, scene understanding) with NLP (language generation)',
            'Standard pipeline: CNN encoder extracts visual features → RNN/Transformer decoder generates words',
            'Visual attention allows the model to focus on specific image regions per output word',
            'Evaluation uses both n-gram overlap (BLEU, METEOR) and semantic similarity (CIDEr, SPICE)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The model maximizes the conditional probability of the caption given the image, factorized as a product of per-word probabilities.',
          example: {
            title: 'Example: Caption generation with attention',
            code: 'Image → [CNN backbone] → spatial features (14×14×2048)\n\nDecoder step t=3 (generating "dog"):\n  attention scores over 14×14 grid:\n    region (5,3): 0.02\n    region (7,8): 0.85  ← dog region\n    region (2,1): 0.03\n\n  context = Σ αᵢ · featureᵢ\n          = 0.85 · feature(7,8) + ...\n\n  P("dog" | context, hₜ₋₁, prev_words) = 0.91',
            output: 'The decoder focuses on the dog region when generating the word "dog".',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing image captioning architectures by visual representation and decoding strategy.',
          table: {
            headers: ['Approach', 'Visual Input', 'Decoder', 'Strength', 'Limitation'],
            rows: [
              ['CNN + LSTM (global)', 'Single image vector', 'LSTM', 'Simple, fast', 'No spatial detail'],
              ['CNN + LSTM (attention)', 'Spatial feature grid', 'LSTM + attention', 'Interpretable, better', 'Slower inference'],
              ['Transformer (fully)', 'Patch embeddings', 'Transformer decoder', 'Best performance', 'Needs large data'],
              ['Contrastive (BLIP)', 'Image-text pretraining', 'Multimodal transformer', 'Strong zero-shot', 'Complex training']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Evaluating captions with BLEU alone (fix: BLEU measures n-gram overlap but ignores semantic meaning; always pair it with CIDEr or SPICE for semantic evaluation)',
            'Mistake 2: Using a single global image vector for complex scenes (fix: global vectors lose spatial relationships; use attention over a spatial grid or object-level features for multi-object scenes)',
            'Mistake 3: Not handling rare or unseen object categories (fix: captioners often ignore uncommon objects; use object detectors as auxiliary inputs or train on diverse object-centric datasets)',
            'Mistake 4: Generating generic captions like "a person is doing something" (fix: this is a known bias in datasets; use diverse beam search, CLIP-guided scoring, or reinforcement learning with CIDEr reward to encourage specificity)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Image captioning makes visual content accessible and searchable.',
          list: [
            'Accessibility: screen readers describe images to visually impaired users using automatically generated alt-text',
            'Social media moderation: captioning flagged images to help moderators understand visual content at scale',
            'Image search: indexing images by their captions enables text-based retrieval of visual content',
            'Video summarization: generating textual summaries of video frames for content indexing and recommendation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image captioning = visual understanding + language generation',
            'CNN encodes images; RNN/Transformer decodes captions',
            'Visual attention improves quality by focusing on relevant regions per word',
            'BLEU alone is insufficient — use CIDEr and SPICE for semantic evaluation',
            'Generic caption bias is common; mitigate with diverse decoding or RL rewards'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is visual attention important in image captioning?\nAns: It allows the decoder to focus on specific image regions when generating each word, improving accuracy for multi-object scenes.',
            'Q2: What is the main limitation of using BLEU as the sole evaluation metric for captions?\nAns: BLEU measures n-gram overlap with reference captions but ignores semantic equivalence — two valid but differently worded captions score poorly.',
            'Q3: How does the "generic caption" problem arise and how can it be addressed?\nAns: Training data biases lead models to safe, vague captions; diverse beam search or reinforcement learning with specificity rewards encourages richer descriptions.'
          ]
        }
      ]
    },
    'encoder-decoder': {
      title: 'Encoder-Decoder Architecture',
      subtitle: 'Sequence-to-sequence learning for translation and generation',
      sections: [
        {
          heading: 'What is Encoder-Decoder?',
          text: 'The <strong>Encoder-Decoder</strong> (or Seq2Seq) architecture is the foundational framework for machine translation, text summarization, and speech recognition. The <strong>encoder</strong> reads the input sequence and compresses it into a fixed-length context vector; the <strong>decoder</strong> generates the output sequence one token at a time conditioned on this vector.',
          list: [
            'Encoder: processes input tokens sequentially, building a representation',
            'Context vector: fixed-size summary of the entire input sequence',
            'Decoder: generates output tokens autoregressively (one by one)',
            'Training: teacher forcing — feed ground-truth previous tokens as decoder inputs'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The decoder outputs a probability distribution over the vocabulary at each step, conditioned on the context vector and all previously generated tokens.',
          example: {
            title: 'Example: Machine translation step',
            code: 'Input (English): "She is happy"\n\nEncoder:\n  h_1 = RNN(emb("She"), h_0)\n  h_2 = RNN(emb("is"), h_1)\n  h_3 = RNN(emb("happy"), h_2)\n  Context vector c = h_3\n\nDecoder:\n  Step 1: P("Ella" | c, <sos>) = 0.85\n  Step 2: P("está" | c, "Ella") = 0.78\n  Step 3: P("feliz" | c, "Ella está") = 0.91\n  Step 4: P(</eos> | ...) = 0.95',
            output: 'The decoder generates the Spanish translation token by token, each conditioned on the context vector and previous outputs.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Encoder-decoder variants and their trade-offs.',
          table: {
            headers: ['Variant', 'Encoder', 'Decoder', 'Best For', 'Limitation'],
            rows: [
              ['Vanilla Seq2Seq', 'RNN', 'RNN', 'Short sequences', 'Bottleneck on long inputs'],
              ['Seq2Seq + Attention', 'RNN / CNN', 'RNN + attention', 'Long sequences', 'Sequential decoding is slow'],
              ['Transformer', 'Self-attention stack', 'Self + cross-attention', 'Parallel training', 'Quadratic memory cost'],
              ['T5', 'Transformer encoder', 'Transformer decoder', 'Unified text-to-text', 'Heavy compute']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a fixed-size context vector for very long inputs (fix: attention mechanisms replace the single vector with a dynamic weighted combination of all encoder states, eliminating the bottleneck)',
            'Mistake 2: Forgetting teacher forcing during training but not at inference (fix: train with teacher forcing (feed ground truth as decoder input), but at inference use the model\'s own outputs — this train/test mismatch can hurt performance if not handled with scheduled sampling)',
            'Mistake 3: Ignoring the exposure bias problem (fix: the decoder never sees its own errors during training; use scheduled sampling or reinforcement learning to expose it to realistic inference-time inputs)',
            'Mistake 4: Using identical architectures for encoder and decoder (fix: the encoder needs to capture meaning, the decoder needs to generate fluent text; use bidirectional encoder + unidirectional decoder, and often different layer depths)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Encoder-decoder architectures power virtually all sequence generation systems.',
          list: [
            'Machine translation: Google Translate\'s original NMT system used a deep LSTM encoder-decoder with attention',
            'Text summarization: encoder reads a news article, decoder generates a headline or abstract (e.g., T5, BART)',
            'Speech recognition: encoder processes audio features, decoder outputs text transcripts (Listen, Attend and Spell)',
            'Image captioning: CNN encoder extracts image features, RNN/Transformer decoder generates descriptive sentences'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Encoder-decoder = encoder compresses input + decoder generates output',
            'Fixed context vector creates a bottleneck for long sequences',
            'Attention solves the bottleneck by letting the decoder focus on relevant encoder states',
            'Teacher forcing accelerates training but creates exposure bias at inference',
            'Transformers replaced RNN encoders/decoders for parallelizable, large-scale training'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the bottleneck problem in vanilla encoder-decoder models?\nAns: The encoder compresses the entire input into a single fixed-length context vector, making it hard to preserve information from long inputs.',
            'Q2: What is teacher forcing and why is it used during training?\nAns: Teacher forcing feeds the ground-truth previous token as the decoder\'s next input, which speeds up convergence by avoiding error accumulation during training.',
            'Q3: How does attention improve the encoder-decoder architecture?\nAns: Instead of a single context vector, attention lets the decoder dynamically focus on different parts of the input at each generation step, preserving information from long sequences.'
          ]
        }
      ]
    },
    'attention-mechanism': {
      title: 'Attention Mechanism',
      subtitle: 'Dynamic focus for sequence models',
      sections: [
        {
          heading: 'What is Attention?',
          text: '<strong>Attention</strong> is a mechanism that allows the decoder to dynamically focus on different parts of the input sequence at each output step, rather than relying on a single fixed context vector. It computes a weighted combination of all encoder hidden states, where the weights are determined by how relevant each input position is to the current output position.',
          list: [
            'Replaces the fixed context vector with a dynamic, input-dependent summary',
            'Alignment scores measure relevance between decoder state and each encoder state',
            'Softmax turns scores into a probability distribution over input positions',
            'Weighted sum of encoder states becomes the context for the current decoder step'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Attention computes alignment scores, normalizes them, and produces a context vector as a weighted sum of values.',
          example: {
            title: 'Example: Bahdanau attention step',
            code: 'Decoder state: s_t (current hidden state)\nEncoder states: [h_1, h_2, h_3, h_4]\n\nAlignment scores:\n  e_ti = v^T · tanh(W_s · s_t + W_h · h_i)\n  e_t = [2.1, 0.3, 1.5, 3.8]\n\nAttention weights (softmax):\n  a_ti = exp(e_ti) / Σ_j exp(e_tj)\n  a_t = [0.18, 0.03, 0.12, 0.67]\n\nContext vector:\n  c_t = Σ_i a_ti · h_i\n\nResult: decoder focuses 67% on h_4 (most relevant encoder state)',
            output: 'Attention learns to align output positions with the most relevant input positions dynamically.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Attention variants and scoring functions.',
          table: {
            headers: ['Variant', 'Score Function', 'Pros', 'Cons', 'Used In'],
            rows: [
              ['Bahdanau (Additive)', 'v^T tanh(W_q q + W_k k)', 'Flexible, learns alignment', 'Slower (MLP per score)', 'Original NMT'],
              ['Luong (Multiplicative)', 'q^T W k or q^T k', 'Faster, simpler', 'Less expressive', 'GNMT'],
              ['Scaled Dot-Product', '(Q·K^T) / √d_k', 'Very fast, parallelizable', 'Requires scaled normalization', 'Transformers'],
              ['Self-Attention', 'Each token attends to all others', 'Captures intra-sentence relations', 'Quadratic memory', 'BERT, GPT']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing attention with memory (fix: attention computes a weighted average of existing states; it does not store new information — the encoder still does the representation learning)',
            'Mistake 2: Using attention without masking in decoders (fix: during training, the decoder must not attend to future positions; use causal masking to prevent information leakage from future tokens)',
            'Mistake 3: Assuming attention weights are interpretable (fix: attention weights can be noisy and do not always correspond to human-expected alignments; use them as hints, not proofs)',
            'Mistake 4: Ignoring computational cost (fix: attention over long sequences is O(n²) in memory; use sparse attention, local attention, or linear attention approximations for very long documents)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Attention is the single most important architectural innovation in modern deep learning.',
          list: [
            'Neural machine translation: attention allows the decoder to focus on the relevant source word when generating each target word, improving translation quality dramatically',
            'Visual question answering: attention over image regions helps the model focus on the visual evidence relevant to the text question',
            'Document summarization: attention weights identify the most salient sentences to include in the summary',
            'Speech recognition: attention aligns acoustic frames with output characters, handling variable-rate speech naturally'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Attention replaces fixed context vectors with dynamic, position-dependent summaries',
            'Alignment scores → softmax → weighted sum of encoder states',
            'Bahdanau (additive) and Luong (multiplicative) are classic seq2seq attention variants',
            'Self-attention extends attention to intra-sequence relationships (Transformer core)',
            'Attention is O(n²) in sequence length — approximations exist for long documents'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does attention solve the bottleneck problem in encoder-decoder models?\nAns: Instead of compressing the entire input into a single vector, attention lets the decoder access all encoder states and focus on the most relevant ones at each step.',
            'Q2: What is the difference between Bahdanau and Luong attention?\nAns: Bahdanau uses an additive score with a learned alignment model (tanh + linear), while Luong uses a simpler multiplicative score (direct dot product or learned projection).',
            'Q3: Why must decoder self-attention be masked during training?\nAns: To prevent the decoder from attending to future tokens, which would leak information and make the task trivial during training.'
          ]
        }
      ]
    },
    'transformers': {
      title: 'Transformers',
      subtitle: 'Attention is all you need',
      sections: [
        {
          heading: 'What are Transformers?',
          text: 'The <strong>Transformer</strong> (Vaswani et al., 2017) replaces recurrence entirely with <strong>self-attention</strong>, enabling parallel processing of all positions simultaneously. This architecture is the foundation of modern NLP: BERT, GPT, T5, and virtually all large language models are Transformers.',
          list: [
            'Self-attention: each token computes relevance scores with every other token in the sequence',
            'Multi-head attention: multiple attention heads run in parallel, each learning different relationship types',
            'Positional encodings: inject position information since there is no recurrence',
            'Feed-forward networks: position-wise MLPs add non-linear transformation capacity'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Scaled dot-product attention is the core computation of the Transformer.',
          example: {
            title: 'Example: Self-attention computation',
            code: 'Input tokens: X = [x_1, x_2, x_3]\n\nLinear projections:\n  Q = X · W_Q,  K = X · W_K,  V = X · W_V\n\nAttention scores:\n  Score = Q · K^T / √d_k\n\nSoftmax:\n  A = softmax(Score)  (row-wise)\n\nOutput:\n  Output = A · V\n\nResult: each output is a weighted combination of all values,\nwhere weights depend on query-key similarity.',
            output: 'Self-attention captures relationships between all token pairs in a single layer.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Transformer vs. RNN/LSTM for sequence modeling.',
          table: {
            headers: ['Aspect', 'RNN / LSTM', 'Transformer'],
            rows: [
              ['Parallelism', 'Sequential (one step at a time)', 'Fully parallel (all tokens simultaneously)'],
              ['Long-range dependencies', 'Must propagate through chain (degrades)', 'Direct connection between any two tokens'],
              ['Position information', 'Implicit (sequential processing)', 'Explicit (sinusoidal or learned positional encodings)'],
              ['Training speed', 'Slow (cannot parallelize time steps)', 'Fast (matrix operations on full sequence)'],
              ['Memory', 'O(1) per step (fixed hidden state)', 'O(n²) (attention matrix over all pairs)'],
              ['Best for', 'Small models, streaming data', 'Large models, batch training']
            ]
          }
        },
        {
          heading: 'Transformer Architecture',
          text: 'The full Transformer consists of encoder and decoder stacks, each built from identical layers with residual connections and layer normalization.',
          list: [
            'Encoder stack: self-attention → add & norm → feed-forward → add & norm',
            'Decoder stack: masked self-attention → add & norm → cross-attention (to encoder) → add & norm → feed-forward → add & norm',
            'Cross-attention: decoder queries attend to encoder keys and values',
            'Layer normalization and residual connections enable training very deep networks (12-96+ layers)'
          ]
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing encoder-only and decoder-only transformers (fix: encoder-only models like BERT use bidirectional attention for understanding; decoder-only models like GPT use causal (left-to-right) attention for generation; encoder-decoder models like T5 do both)',
            'Mistake 2: Ignoring the O(n²) memory cost (fix: for long sequences, attention matrices become huge; use gradient checkpointing, mixed precision, or sparse attention variants like Longformer or Flash Attention)',
            'Mistake 3: Forgetting positional encodings (fix: without positional encodings, the transformer is permutation-invariant and cannot distinguish "dog bites man" from "man bites dog"; always include sinusoidal or learned position embeddings)',
            'Mistake 4: Treating attention weights as explanations (fix: attention weights are learned correlations, not causal explanations; a high weight does not prove the model "used" that token for the prediction)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Transformers have become the universal architecture for sequence modeling.',
          list: [
            'Large language models: GPT-4, Claude, Llama, Gemini are all decoder-only Transformers scaled to hundreds of billions of parameters',
            'Bidirectional understanding: BERT and RoBERTa use encoder-only Transformers for classification, NER, and question answering',
            'Vision: Vision Transformer (ViT) applies self-attention to image patches, rivaling CNNs on ImageNet',
            'Multimodal systems: CLIP, DALL-E, and Stable Diffusion use Transformers to align or generate across text, image, and audio'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transformer = self-attention + multi-head attention + positional encoding + FFN',
            'Self-attention connects every token to every other token directly',
            'Encoder stack for understanding; decoder stack for generation; both for translation',
            'O(n²) memory is the main limitation — sparse and linear attention variants address this',
            'All modern LLMs are Transformers; the architecture is now universal across NLP and beyond'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why can Transformers process all positions in parallel while RNNs cannot?\nAns: Transformers use self-attention which has no sequential dependency — every token attends to all others simultaneously. RNNs require the previous hidden state to compute the next one.',
            'Q2: What is the purpose of the √d_k scaling factor in scaled dot-product attention?\nAns: For large d_k, dot products grow in magnitude and push softmax into regions with extremely small gradients; dividing by √d_k keeps values in a well-behaved range.',
            'Q3: Why do Transformers need positional encodings?\nAns: Without them, the model is permutation-invariant and cannot tell the difference between word orders; positional encodings inject sequence position information into the input embeddings.'
          ]
        }
      ]
    },
    'multimodal-transformers': {
      title: 'Multimodal Transformers',
      subtitle: 'Cross-modal understanding with attention',
      sections: [
        {
          heading: 'What are Multimodal Transformers?',
          text: '<strong>Multimodal Transformers</strong> extend the Transformer architecture to process multiple modalities (text, image, audio, video) within a single unified model. They use separate encoders per modality, then fuse representations through cross-attention or shared embedding spaces, enabling tasks like image captioning, visual question answering, and text-to-image generation.',
          list: [
            'Per-modality encoders: text (BERT/GPT), image (ViT/CNN), audio (spectrogram transformer)',
            'Fusion module: cross-attention layers let modalities attend to each other',
            'Shared latent space: contrastive alignment ensures matched pairs are close in embedding space',
            'Decoder: generates captions, answers, or other modality outputs autoregressively'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cross-modal attention computes alignment between text queries and image keys/values, enabling the text model to "look at" image regions.',
          example: {
            title: 'Example: Cross-attention in visual question answering',
            code: 'Question: "What color is the dog?"\nImage patches: [p_1, p_2, ..., p_16] (4×4 grid)\n\nText encoder:\n  q = Transformer("What color is the dog?")\n\nImage encoder:\n  K = [k_1, k_2, ..., k_16], V = [v_1, v_2, ..., v_16]\n\nCross-attention:\n  scores = q · K^T / √d\n  weights = softmax(scores)\n  context = weights · V\n\nResult: attention weights highlight the patch\ncontaining the dog, enabling correct answer: "brown"',
            output: 'Cross-attention dynamically routes information between modalities at every layer.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Fusion strategies for multimodal Transformers.',
          table: {
            headers: ['Strategy', 'How It Works', 'Pros', 'Cons', 'Example'],
            rows: [
              ['Early Fusion', 'Concatenate tokens/patches at input', 'Strong cross-modal interaction', 'Heavy compute', 'VisualBERT'],
              ['Late Fusion', 'Separate encoders, fuse at final layers', 'Fast, simple', 'Weak deep interaction', 'Two-stream retrieval'],
              ['Hybrid Fusion', 'Separate encoders + cross-attention layers', 'Best of both', 'More complex', 'Flamingo, LLaVA'],
              ['Contrastive', 'Align modalities in shared space', 'Scalable, zero-shot', 'No generation', 'CLIP, BLIP']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating all modalities equally (fix: modalities have different noise levels, resolutions, and information densities; balance loss contributions or use modality dropout so one dominant modality does not suppress the others)',
            'Mistake 2: Using the same tokenizer for all modalities (fix: images use patch embeddings, audio uses spectrogram frames, text uses subword tokens — each needs its own preprocessing and embedding layer, though the Transformer blocks can be shared)',
            'Mistake 3: Expecting zero-shot transfer without alignment (fix: for zero-shot image classification or retrieval, the model must be explicitly trained with contrastive or alignment objectives; simply concatenating modalities does not create a shared semantic space)',
            'Mistake 4: Ignoring modality-specific inductive biases (fix: images benefit from 2D position embeddings, audio from 1D time embeddings; removing these biases hurts performance compared to modality-aware designs like Swin Transformer or wav2vec 2.0)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal Transformers power the next generation of AI assistants and creative tools.',
          list: [
            'Visual question answering: models like LLaVA and GPT-4V answer questions about images by jointly processing text queries and visual features',
            'Image captioning: BLIP and Salesforce BLIP-2 generate natural language descriptions of images using cross-attention between image patches and text decoder',
            'Text-to-image generation: DALL-E 3 and Stable Diffusion use multimodal Transformers to map text prompts to image latent spaces for generation',
            'Multimodal search: CLIP enables searching image databases with arbitrary text queries without task-specific training'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal Transformer = separate encoders + fusion module + decoder',
            'Cross-attention lets text "look at" images and vice versa',
            'Early fusion (input concatenation), late fusion (output pooling), and hybrid fusion (cross-attention layers) are the main strategies',
            'Contrastive alignment (CLIP-style) creates shared spaces for retrieval and zero-shot tasks',
            'Modality-specific preprocessing (patches, spectrograms, tokens) is essential before the shared Transformer layers'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the purpose of cross-attention in a multimodal Transformer?\nAns: It allows one modality (e.g., text) to dynamically attend to and extract relevant information from another modality (e.g., image patches) at each layer.',
            'Q2: What is the main advantage of hybrid fusion over early or late fusion?\nAns: Hybrid fusion keeps modality-specific processing in early layers for efficiency while adding cross-attention in deeper layers for rich multimodal interaction.',
            'Q3: How does CLIP achieve zero-shot image classification without task-specific training?\nAns: CLIP trains image and text encoders to map matched pairs to nearby points in a shared embedding space; at test time, it compares image embeddings to text embeddings of candidate class descriptions.'
          ]
        }
      ]
    },
    viseme: {
      title: 'Viseme Generation',
      subtitle: 'Mapping speech sounds to visual mouth shapes for realistic animation',
      sections: [
        {
          heading: 'What is Viseme Generation?',
          text: 'A <strong>viseme</strong> is the visual shape of the mouth and face when producing a particular phoneme. <strong>Viseme generation</strong> creates realistic lip and facial animations from audio speech signals, bridging the audio-visual gap in speech synthesis, dubbing, and virtual avatars.',
          list: [
            'Phonemes are acoustic units; visemes are their visual counterparts',
            'Many phonemes map to the same viseme (many-to-one), reducing visual complexity',
            'Standard pipeline: phoneme detection → viseme mapping → face animation → compositing',
            'Deep learning approaches predict facial landmarks or neural textures directly from audio'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Phonemes are grouped into viseme classes based on visual indistinguishability. The mapping is many-to-one and language-dependent.',
          example: {
            title: 'Example: Phoneme-to-viseme mapping',
            code: 'Phoneme groups → Viseme class:\n  /p/, /b/, /m/     → "lips_closed"\n  /f/, /v/          → "teeth_on_lip"\n  /θ/, /ð/          → "tongue_between_teeth"\n  /a/, /ɑ/, /ɔ/     → "mouth_open_round"\n  /i/, /ɪ/, /e/     → "mouth_spread"\n  /w/, /u/          → "lips_rounded"\n\nWord: "father" /ˈfɑːðər/\n  /f/  → teeth_on_lip\n  /ɑː/ → mouth_open_round\n  /ð/  → tongue_between_teeth\n  /ər/ → mouth_neutral',
            output: '12–16 viseme classes cover all visually distinct mouth shapes in English.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing approaches to generating facial animation from speech.',
          table: {
            headers: ['Approach', 'Input', 'Output', 'Realism', 'Latency'],
            rows: [
              ['Rule-based viseme', 'Phoneme labels', 'Predefined mouth shapes', 'Low', 'Low'],
              ['HMM/GMM', 'Acoustic features', 'Viseme probabilities', 'Moderate', 'Moderate'],
              ['LSTM audio-to-landmarks', 'Raw audio / MFCC', 'Facial landmark sequences', 'High', 'Moderate'],
              ['Neural texture (DeepFake)', 'Audio + reference face', 'Photorealistic video frames', 'Very high', 'High'],
              ['Wav2Lip', 'Audio + target video', 'Lip-synced video', 'High', 'Low (real-time)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating phonemes and visemes as one-to-one (fix: multiple phonemes share the same visual appearance; group them into viseme classes to avoid overfitting and unnatural micro-movements)',
            'Mistake 2: Ignoring coarticulation in viseme generation (fix: the mouth shape for a phoneme is influenced by neighboring phonemes; model context with LSTM or transformer to produce smooth transitions)',
            'Mistake 3: Synchronizing visemes to audio at the phoneme level only (fix: human speech has anticipatory and carryover coarticulation; viseme transitions should be continuous and time-aligned to audio with sub-phoneme precision)',
            'Mistake 4: Generating lip motion without head pose or facial expression (fix: realistic animation requires head movement, eye blinks, and emotional expression in addition to lip sync; use multimodal models that jointly predict these)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Viseme generation powers realistic digital humans and media localization.',
          list: [
            'Movie dubbing: synchronizing lip movements to translated dialogue without reshooting scenes, saving millions in production costs',
            'Virtual avatars and VTubers: real-time lip sync for live-streamed digital characters driven by the performer\'s voice',
            'Accessibility aids: visual speech synthesis for hearing-impaired users, providing lip-readable animated faces from text or audio',
            'Video conferencing: bandwidth reduction by transmitting audio plus viseme parameters to reconstruct the speaker\'s face on the receiving end'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Viseme = visual counterpart of a phoneme; many phonemes map to one viseme',
            'Standard pipeline: audio → phonemes → visemes → facial animation',
            'Coarticulation means neighboring sounds influence mouth shape',
            'Deep learning (LSTM, GAN) produces photorealistic lip sync from audio alone',
            'Realistic animation requires head pose, expression, and eye movement beyond just lips'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the phoneme-to-viseme mapping many-to-one rather than one-to-one?\nAns: Multiple phonemes produce visually identical mouth shapes (e.g., /p/, /b/, /m/ all show closed lips), so they share a single viseme class.',
            'Q2: What is coarticulation and why does it matter for viseme generation?\nAns: The articulation of one sound is influenced by neighboring sounds, so mouth shapes must be predicted in context, not independently per phoneme.',
            'Q3: Why do rule-based viseme systems look less realistic than neural approaches?\nAns: Rule-based systems use discrete predefined shapes with abrupt transitions, while neural models produce continuous, context-aware motion with natural timing.'
          ]
        }
      ]
    },
    dtw: {
      title: 'Dynamic Time Warping',
      subtitle: 'Aligning sequences with varying speed and timing',
      sections: [
        {
          heading: 'What is Dynamic Time Warping?',
          text: '<strong>Dynamic Time Warping (DTW)</strong> measures similarity between two sequences that may vary in speed or timing. It finds the optimal alignment by "warping" the time axis non-linearly, making it ideal for speech recognition, gesture matching, and time series comparison.',
          list: [
            'Finds the optimal alignment between two sequences of different lengths',
            'Allows non-linear warping of the time axis — matching events that occur at different speeds',
            'Computed via dynamic programming with monotonicity and continuity constraints',
            'Widely used in speech, gesture, bioinformatics, and music information retrieval'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'DTW finds the minimum-cost path through a cost matrix where each cell represents the distance between two sequence elements.',
          example: {
            title: 'Example: DTW alignment of "hello" at different speeds',
            code: 'Audio (fast):   [h] [e] [l] [l] [o]\n                  ↓ DTW alignment ↓\nVideo (slow):    [h] [_] [e] [_] [l] [l] [_] [o]\n\nCost matrix D(i,j):\n  D(i,j) = dist(seq1[i], seq2[j])\n           + min(D(i-1,j), D(i,j-1), D(i-1,j-1))\n\nOptimal warping path:\n  (1,1) → (2,3) → (3,5) → (4,6) → (5,8)\n\nAudio frame 2 ("e") aligns with\nVideo frame 3 — the time axis is warped!',
            output: 'The warping path maps events even when their timing differs.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing DTW with alternative sequence similarity methods.',
          table: {
            headers: ['Method', 'Handles Speed Variation', 'Handles Length Mismatch', 'Alignment Path', 'Complexity'],
            rows: [
              ['Euclidean', 'No', 'No (must truncate)', 'None', 'O(n)'],
              ['Cosine Similarity', 'No', 'No', 'None', 'O(n)'],
              ['DTW', 'Yes', 'Yes', 'Optimal warping', 'O(n·m)'],
              ['Soft-DTW', 'Yes', 'Yes', 'Differentiable', 'O(n·m)'],
              ['CTW (Canonical Time Warping)', 'Yes', 'Yes', 'Optimal + projection', 'Higher'],
              ['FastDTW', 'Yes', 'Yes', 'Approximate', 'O(n)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using DTW on sequences with fundamentally different structure (fix: DTW assumes similar shape and ordering; for sequences with different events or reversed order, use edit distance or alignment methods instead)',
            'Mistake 2: Not constraining the warping path (fix: unconstrained DTW can align the end of one sequence to the beginning of another; apply Sakoe-Chiba band or Itakura parallelogram to restrict warping)',
            'Mistake 3: Computing full DTW on very long sequences (fix: O(n·m) memory and time is prohibitive for long sequences; use FastDTW approximation or subsequence DTW for streaming applications)',
            'Mistake 4: Ignoring the distance metric choice (fix: Euclidean distance works for similar-scale features, but for multimodal data (e.g., audio + kinematics), design a learned or domain-specific distance function)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'DTW aligns temporal patterns across domains where speed varies naturally.',
          list: [
            'Speech recognition: aligning spoken utterances to reference templates in isolated-word recognition systems (historical HMM-DTW hybrids)',
            'Gesture recognition: matching motion-captured hand trajectories against template gestures despite different execution speeds',
            'Music information retrieval: identifying songs from short audio snippets by aligning chroma features with database entries',
            'Healthcare monitoring: comparing patient gait cycles or ECG waveforms to reference patterns for anomaly detection despite heart rate variation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'DTW finds optimal alignment between sequences with different timing',
            'Uses dynamic programming with monotonicity and continuity constraints',
            'O(n·m) time and space; FastDTW approximates in linear time',
            'Constrain the warping path to prevent pathological alignments',
            'Cannot handle fundamentally different sequence structure — assumes similar shape'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why can\'t Euclidean distance be used directly for comparing two speech utterances of the same word spoken at different speeds?\nAns: Euclidean distance assumes point-to-point correspondence; if one utterance is stretched, corresponding phonemes misalign and distance becomes artificially large.',
            'Q2: What is the purpose of the Sakoe-Chiba band in DTW?\nAns: It constrains how far the warping path can deviate from the diagonal, preventing unrealistic alignments and reducing computation.',
            'Q3: In what scenario would DTW fail even if two sequences are semantically equivalent?\nAns: If the sequences have different event orderings or fundamentally different structure (e.g., "hello" vs "goodbye"), DTW cannot produce a meaningful alignment.'
          ]
        }
      ]
    }
  }
};
