export const llmModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Language Models',
    topics: [
      { id: 'intro', title: 'Introduction to Language Models' },
      { id: 'neural-representation', title: 'Neural Representations for Language' },
      { id: 'embedding', title: 'Word Embeddings' },
      { id: 'ngram', title: 'N-gram Models' },
      { id: 'rnn', title: 'Recurrent Neural Networks' },
      { id: 'lstm', title: 'LSTM and GRU' },
      { id: 'attention', title: 'Attention Mechanism' },
    ]
  }
};

export const llmModule1Content = {
  module1: {
    intro: {
      title: 'Introduction to Language Models',
      subtitle: 'The probabilistic heart of natural language processing',
      sections: [
        {
          heading: 'What is a Language Model?',
          text: 'A <strong>Language Model (LM)</strong> is a probabilistic model that assigns a probability to a sequence of words. It predicts the likelihood of the next word given all the previous words: <strong>P(wₙ | w₁, w₂, ..., wₙ₋₁)</strong>. Modern Large Language Models (LLMs) scale this idea to billions of parameters and trillions of tokens, but the core idea remains the same — learn the patterns of language from data.',
          list: [
            'Predicts the next token in a sequence based on context',
            'Trained on vast text corpora (books, web pages, code)',
            'Foundation for translation, summarization, chatbots, and search',
            'Modern LLMs are simply very large, pretrained neural language models'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The chain rule of probability decomposes a sequence probability into a product of conditional probabilities.',
          example: {
            title: 'Example: Probability of a sentence',
            code: `P("I love AI") =
  P("I") × P("love" | "I") × P("AI" | "I love")

= 0.05 × 0.12 × 0.08
= 0.00048

Perplexity (PP) = exp(-1/N Σ log P(wᵢ))
  PP = 45 → model is "surprised" 45 times
  PP = 15 → much better prediction`,
            output: 'Lower perplexity = better language model.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Language models come in many forms. Understanding the distinctions helps you choose the right tool.',
          table: {
            headers: ['Aspect', 'Statistical (N-gram)', 'Neural (RNN/Transformer)', 'Large (LLM)'],
            rows: [
              ['Approach', 'Count-based probabilities', 'Learned dense representations', 'Massive pre-training + scaling'],
              ['Context', 'Fixed window (N-1 words)', 'Variable (hidden state)', 'Very long (thousands of tokens)'],
              ['Data need', 'Millions of words', 'Millions to billions', 'Trillions of tokens'],
              ['Generalization', 'Poor on unseen sequences', 'Good via embeddings', 'Excellent via emergent abilities'],
              ['Examples', 'SRILM, KenLM', 'LSTM, Transformer', 'GPT-4, Claude, Gemini']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming LLMs "understand" meaning (fix: they model statistical patterns, not true comprehension)',
            'Mistake 2: Evaluating only on fluency (fix: test for factuality, reasoning, and safety too)',
            'Mistake 3: Ignoring context window limits (fix: split long inputs or use retrieval-augmented generation)',
            'Mistake 4: Treating all LMs as black boxes (fix: probe intermediate layers and attention weights for interpretability)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Language models power products you use every day.',
          list: [
            '<strong>Machine Translation:</strong> Google Translate, DeepL — predict target language words from source context',
            '<strong>Speech Recognition:</strong> Whisper, Alexa — convert audio to text using language model scoring',
            '<strong>Code Completion:</strong> GitHub Copilot — predict the next line of code from file context',
            '<strong>Conversational AI:</strong> ChatGPT, Claude — generate coherent, context-aware dialogue',
            '<strong>Search & QA:</strong> Perplexity, Bing AI — retrieve and synthesize answers from documents'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A language model assigns P(sequence) using conditional probabilities',
            'The chain rule breaks P(w₁...wₙ) into a product of next-word predictions',
            'Perplexity measures model quality — lower is better',
            'N-gram models count; neural models learn; LLMs scale',
            'All modern NLP rests on language modeling'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does P(wₙ | w₁...wₙ₋₁) represent in a language model?\nAns: The probability of the next word given all previous words in the sequence.',
            'Q2: Why does the probability of a long sentence become vanishingly small?\nAns: It is a product of many probabilities ≤ 1, so the value shrinks exponentially with length.',
            'Q3: What is the main difference between a statistical n-gram model and a neural language model?\nAns: N-grams count explicit word co-occurrences; neural models learn dense, continuous representations that generalize better.'
          ]
        }
      ]
    },
    'neural-representation': {
      title: 'Neural Representations for Language',
      subtitle: 'From symbols to vectors: how neural networks represent text',
      sections: [
        {
          heading: 'What is a Neural Representation?',
          text: 'A <strong>neural representation</strong> is a dense, real-valued vector that encodes the meaning of a word, phrase, or sentence. Unlike symbolic representations (like one-hot vectors), neural representations capture semantic relationships through proximity in vector space. Words with similar meanings have similar vectors.',
          list: [
            'Maps discrete tokens to continuous vectors (embeddings)',
            'Similar words cluster together in vector space',
            'Enables arithmetic: king - man + woman ≈ queen',
            'Learned automatically from text data, no manual feature engineering'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Word embeddings are learned by minimizing prediction error in a neural language model. The embedding layer is simply a lookup matrix.',
          example: {
            title: 'Example: Embedding lookup and similarity',
            code: `Vocabulary size = 10,000
Embedding dimension = 300

Embedding matrix E: 10,000 × 300

word_id("cat") = 523
embedding("cat") = E[523]  → 300-d vector

Cosine similarity:
  sim(a, b) = (a · b) / (||a|| × ||b||)

sim("cat", "dog") = 0.82
sim("cat", "car") = 0.15`,
            output: 'Cosine similarity measures semantic closeness in embedding space.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Symbolic vs neural representations differ fundamentally.',
          table: {
            headers: ['Aspect', 'One-Hot / Symbolic', 'Neural Embedding'],
            rows: [
              ['Dimensionality', 'Vocabulary size (10K–1M+)', 'Fixed low (50–1,024)'],
              ['Semantics', 'None — all words equally distant', 'Captures semantic relationships'],
              ['Generalization', 'Cannot infer unseen words', 'Can infer via vector arithmetic'],
              ['Sparsity', 'Extremely sparse (one 1, rest 0)', 'Dense and continuous'],
              ['Learning', 'Fixed, no training needed', 'Learned end-to-end from data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking embeddings are static truths (fix: they reflect training data biases and must be audited)',
            'Mistake 2: Using pretrained embeddings without domain adaptation (fix: fine-tune on domain text for specialized tasks)',
            'Mistake 3: Confusing embedding similarity with semantic equivalence (fix: similarity captures relatedness, not strict synonymy)',
            'Mistake 4: Ignoring out-of-vocabulary words (fix: use subword methods like BPE or FastText for rare words)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Neural representations are the foundation of modern NLP.',
          list: [
            '<strong>Information Retrieval:</strong> Dense passage retrieval uses embedding similarity instead of keyword matching',
            '<strong>Sentiment Analysis:</strong> Word embeddings feed into classifiers to detect emotion in reviews',
            '<strong>Named Entity Recognition:</strong> Contextual embeddings help identify people, places, and organizations',
            '<strong>Recommendation:</strong> Product and user embeddings power semantic search and recommendations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Neural representations are dense vectors that encode meaning',
            'They replace sparse one-hot encodings with learnable embeddings',
            'Similarity in vector space ≈ semantic similarity',
            'Embedding layers are lookup matrices trained end-to-end',
            'The distributional hypothesis drives it all: "you shall know a word by the company it keeps"'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is cosine similarity preferred over Euclidean distance for word embeddings?\nAns: Cosine similarity ignores vector magnitude and captures directional alignment, which better reflects semantic relatedness.',
            'Q2: What is the "distributional hypothesis"?\nAns: Words that appear in similar contexts tend to have similar meanings, so their learned vectors will be close together.',
            'Q3: What happens to out-of-vocabulary words in a standard Word2Vec model?\nAns: They receive a random or zero vector because the model has no learned representation for unseen tokens.'
          ]
        }
      ]
    },
    embedding: {
      title: 'Word Embeddings',
      subtitle: 'Learning distributed representations from raw text',
      sections: [
        {
          heading: 'What are Word Embeddings?',
          text: '<strong>Word embeddings</strong> are dense vector representations of words learned from large text corpora. They map each word to a low-dimensional vector such that words appearing in similar contexts have similar vectors. This is the practical realization of the distributional hypothesis — the foundation of all modern NLP.',
          list: [
            'Low-dimensional: typically 50–300 dimensions (vs vocabulary size for one-hot)',
            'Dense: every dimension carries meaningful information',
            'Learned from data: no manual annotation required',
            'Generalize: analogies and relationships emerge automatically'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Word2Vec trains by predicting words from their neighbors (CBOW) or neighbors from a word (Skip-gram).',
          example: {
            title: 'Example: CBOW vs Skip-gram',
            code: `CBOW (Continuous Bag of Words):
  Context → Predict target
  Input: ["The", "___", "sat", "on", "the", "mat"]
  Target: "cat"
  Loss: -log P("cat" | context)

Skip-gram:
  Target → Predict context
  Input: "cat"
  Predict: ["The", "sat", "on", "the", "mat"]
  Loss: Σ -log P(context_word | "cat")

Training: maximize log probability
of observed word-context pairs.`,
            output: 'Skip-gram works better for rare words; CBOW is faster for frequent words.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Embedding methods vary in how they use context and handle vocabulary.',
          table: {
            headers: ['Method', 'Context Type', 'OOV Handling', 'Best For'],
            rows: [
              ['Word2Vec CBOW', 'Local window', 'None', 'General NLP, speed'],
              ['Word2Vec Skip-gram', 'Local window', 'None', 'Rare words, quality'],
              ['GloVe', 'Global co-occurrence', 'None', 'General NLP, interpretability'],
              ['FastText', 'Subword n-grams', 'Yes (via subwords)', 'Morphological languages'],
              ['ELMo / BERT', 'Full sentence context', 'Yes (via subwords)', 'Context-dependent meaning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using raw word counts instead of co-occurrence probabilities (fix: normalize by word frequency or use PMI)',
            'Mistake 2: Treating all embedding dimensions as equally important (fix: use PCA or t-SNE for visualization, but feed full vectors to models)',
            'Mistake 3: Assuming embeddings are language-universal (fix: train or fine-tune embeddings for each language separately)',
            'Mistake 4: Forgetting that embeddings encode corpus bias (fix: audit for gender, racial, and cultural biases before deployment)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Word embeddings are the workhorses of applied NLP.',
          list: [
            '<strong>Document Classification:</strong> Average word embeddings to represent documents for sentiment or topic classification',
            '<strong>Named Entity Recognition:</strong> Word features help tag sequences as person, organization, or location',
            '<strong>Machine Translation:</strong> Align embeddings across languages for unsupervised translation',
            '<strong>Recommendation Engines:</strong> Embed products and queries into the same space for semantic retrieval',
            '<strong>Analogy Solving:</strong> king - man + woman = queen, demonstrating emergent relational knowledge'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Word embeddings map words to dense, low-dimensional vectors',
            'Word2Vec uses CBOW or Skip-gram to learn from local context',
            'GloVe factorizes global co-occurrence statistics',
            'FastText handles OOV words via subword n-grams',
            'Contextual embeddings (ELMo, BERT) give different vectors for the same word in different sentences'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main difference between Word2Vec Skip-gram and CBOW?\nAns: Skip-gram predicts context words from a target word; CBOW predicts the target word from surrounding context words.',
            'Q2: Why does GloVe often produce more interpretable embeddings than Word2Vec?\nAns: GloVe explicitly factorizes the global word-word co-occurrence matrix, making the relationship to corpus statistics transparent.',
            'Q3: How does FastText handle words it has never seen during training?\nAns: It breaks words into character n-grams and composes their embeddings, so rare and misspelled words still get reasonable vectors.'
          ]
        }
      ]
    },
    ngram: {
      title: 'N-gram Models',
      subtitle: 'Count-based language modeling with Markov assumptions',
      sections: [
        {
          heading: 'What are N-gram Models?',
          text: 'An <strong>n-gram model</strong> predicts the next word using only the previous N-1 words. It is the simplest statistical language model, based on counting how often word sequences appear in a training corpus. Despite their simplicity, n-gram models remain useful for speech recognition, machine translation, and spelling correction.',
          list: [
            'Unigram: P(w) — no context, just word frequency',
            'Bigram: P(wₙ | wₙ₋₁) — one word of context',
            'Trigram: P(wₙ | wₙ₋₁, wₙ₋₂) — two words of context',
            'Higher n = more context, but sparser data and larger memory usage'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'N-gram probabilities are estimated by maximum likelihood: count the occurrences and normalize.',
          example: {
            title: 'Example: Bigram probability',
            code: `Corpus: "The cat sat. The dog ran. The cat slept."

P("cat" | "The") = count("The cat") / count("The")
                 = 2 / 3
                 = 0.67

P("dog" | "The") = count("The dog") / count("The")
                 = 1 / 3
                 = 0.33

Smoothing (Laplace / Add-1):
  P("ran" | "The") = (count("The ran") + 1) / (count("The") + V)
                   = (0 + 1) / (3 + 10000)
                   ≈ 0.0001`,
            output: 'Smoothing prevents zero probabilities for unseen n-grams.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'N-gram models differ by context length and smoothing approach.',
          table: {
            headers: ['Aspect', 'Unigram', 'Bigram', 'Trigram', '4-gram+'],
            rows: [
              ['Context', 'None', '1 word', '2 words', '3+ words'],
              ['Sparsity', 'None', 'Moderate', 'Severe', 'Extreme'],
              ['Memory', 'Small', 'Moderate', 'Large', 'Very large'],
              ['Quality', 'Poor', 'Basic', 'Good', 'Diminishing returns'],
              ['Typical use', 'Baseline', 'Speech recognition', 'Machine translation', 'Rare (too sparse)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using high n without enough data (fix: n=2 or 3 is usually optimal; higher n causes severe sparsity)',
            'Mistake 2: Forgetting smoothing (fix: always apply Laplace, Good-Turing, or Kneser-Ney smoothing for unseen n-grams)',
            'Mistake 3: Treating n-gram probabilities as independent (fix: remember they are conditional probabilities chained together)',
            'Mistake 4: Ignoring backoff and interpolation (fix: use lower-order n-grams when higher-order counts are unreliable)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'N-gram models power many production systems even today.',
          list: [
            '<strong>Speech Recognition:</strong> Google Speech API uses n-gram language models to score phoneme-to-word hypotheses',
            '<strong>Spell Checking:</strong> Detect unlikely character or word n-grams to flag misspellings',
            '<strong>Machine Translation:</strong> IBM and early Google Translate used n-gram models for fluency scoring',
            '<strong>Autocomplete:</strong> Keyboard suggestions rank next-word candidates by n-gram probability',
            '<strong>Text Compression:</strong> Arithmetic coding uses n-gram probabilities to encode text efficiently'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'N-grams predict the next word from the previous N-1 words',
            'Probabilities are estimated by counting and normalizing',
            'Data sparsity is the main challenge — most n-grams are unseen',
            'Smoothing techniques assign small probabilities to unseen events',
            'Kneser-Ney smoothing is the gold standard for n-gram LMs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the Markov assumption in n-gram models?\nAns: The next word depends only on the previous N-1 words, not on the entire history.',
            'Q2: Why do n-gram models suffer from data sparsity?\nAns: As N increases, the number of possible n-grams grows exponentially while corpus counts remain finite, leaving most n-grams unseen.',
            'Q3: What is the purpose of smoothing in n-gram models?\nAns: To assign non-zero probabilities to n-grams that did not appear in the training data, preventing the model from assigning zero probability to valid sentences.'
          ]
        }
      ]
    },
    rnn: {
      title: 'Recurrent Neural Networks',
      subtitle: 'Sequential processing with hidden state memory',
      sections: [
        {
          heading: 'What is an RNN?',
          text: 'A <strong>Recurrent Neural Network (RNN)</strong> processes sequences one element at a time, maintaining a hidden state that acts as memory. This hidden state captures information about all previous inputs, allowing the network to model temporal dependencies. Unlike n-grams, RNNs can theoretically remember context from arbitrarily far back in the sequence.',
          list: [
            'Hidden state hₜ carries summary of all previous inputs',
            'Same weights applied at every time step (weight sharing)',
            'Can process variable-length sequences',
            'Natural fit for language, speech, and time series'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'At each time step, the RNN updates its hidden state and produces an output using shared weight matrices.',
          example: {
            title: 'Example: RNN forward pass',
            code: `At each time step t:
  hₜ = tanh(Wₕₕ · hₜ₋₁ + Wₓₕ · xₜ + bₕ)
  yₜ = softmax(Wₕᵧ · hₜ + bᵧ)

Unrolled for "The cat sat":
  "The" → h₁ = tanh(Wₓₕ·x₁ + Wₕₕ·h₀)
  "cat" → h₂ = tanh(Wₓₕ·x₂ + Wₕₕ·h₁)
  "sat" → h₃ = tanh(Wₓₕ·x₃ + Wₕₕ·h₂)
  P("on") = softmax(Wₕᵧ·h₃)`,
            output: 'The hidden state compresses all previous context into a fixed-size vector.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'RNNs compare differently to feedforward networks and n-grams.',
          table: {
            headers: ['Aspect', 'Feedforward NN', 'RNN', 'N-gram'],
            rows: [
              ['Input size', 'Fixed', 'Variable', 'Fixed window'],
              ['Memory', 'None', 'Hidden state', 'Explicit context window'],
              ['Weight sharing', 'No', 'Yes (across time)', 'No'],
              ['Long-term deps', 'Poor', 'Theoretically good', 'None beyond window'],
              ['Training', 'Standard backprop', 'Backpropagation Through Time', 'Counting'],
              ['Best for', 'Tabular data, images', 'Sequences, text, speech', 'Baseline text scoring']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting vanilla RNNs to remember long sequences (fix: use LSTM or GRU for sequences longer than ~20 tokens)',
            'Mistake 2: Forgetting to truncate backpropagation through time (fix: limit BPTT to ~50 steps to save memory and prevent gradient issues)',
            'Mistake 3: Using the final hidden state for all predictions (fix: use attention or use hidden states at each position for sequence labeling)',
            'Mistake 4: Ignoring vanishing gradients (fix: use ReLU/tanh carefully, gradient clipping, or switch to gated architectures like LSTM)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'RNNs transformed sequence modeling before Transformers took over.',
          list: [
            '<strong>Language Modeling:</strong> Predict next word in mobile keyboard suggestions (earlier versions of SwiftKey)',
            '<strong>Speech Recognition:</strong> DeepSpeech mapped audio spectrograms to text sequences using RNNs',
            '<strong>Machine Translation:</strong> Early neural MT used encoder-decoder RNNs (Google Neural Machine Translation, 2016)',
            '<strong>Music Generation:</strong> Magenta and similar projects used RNNs to compose melodies note-by-note',
            '<strong>Time Series Forecasting:</strong> Predict stock prices, weather, and energy demand from sequential data'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'RNNs process sequences by maintaining a hidden state',
            'The same weights are reused at every time step',
            'Vanilla RNNs suffer from vanishing gradients in long sequences',
            'Backpropagation Through Time (BPTT) trains RNNs by unrolling them',
            'RNNs laid the groundwork for LSTMs, GRUs, and eventually Transformers'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the purpose of the hidden state in an RNN?\nAns: It acts as memory, encoding a summary of all previous inputs so the network can make context-aware predictions.',
            'Q2: Why do vanilla RNNs struggle with long sequences?\nAns: Gradients shrink or explode exponentially as they propagate back through many time steps, making it hard to learn long-range dependencies.',
            'Q3: What is Backpropagation Through Time (BPTT)?\nAns: It is the training algorithm for RNNs where the network is unrolled across time steps and standard backpropagation is applied to the expanded graph.'
          ]
        }
      ]
    },
    lstm: {
      title: 'LSTM and GRU',
      subtitle: 'Gated recurrent architectures for long-term memory',
      sections: [
        {
          heading: 'What are LSTM and GRU?',
          text: '<strong>Long Short-Term Memory (LSTM)</strong> networks are a type of RNN with a gating mechanism that controls the flow of information. They were invented by Hochreiter and Schmidhuber in 1997 to solve the vanishing gradient problem. <strong>GRU (Gated Recurrent Unit)</strong> is a simplified variant with fewer gates but similar performance. Both are now standard tools for sequence modeling.',
          list: [
            'LSTM uses three gates: forget, input, and output',
            'GRU uses two gates: update and reset',
            'Both preserve long-term memory through additive cell state updates',
            'Additive updates prevent gradients from vanishing exponentially'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'LSTM gates control what to forget, what to store, and what to output. The cell state is updated additively, allowing gradients to flow.',
          example: {
            title: 'Example: LSTM gate operations',
            code: `Forget gate:  fₜ = σ(Wf · [hₜ₋₁, xₜ] + bf)
Input gate:   iₜ = σ(Wi · [hₜ₋₁, xₜ] + bi)
Candidate:   C̃ₜ = tanh(Wc · [hₜ₋₁, xₜ] + bc)

Cell state:  Cₜ = fₜ ⊙ Cₜ₋₁ + iₜ ⊙ C̃ₜ
  → additive update! gradient flows

Output gate: oₜ = σ(Wo · [hₜ₋₁, xₜ] + bo)
Hidden:      hₜ = oₜ ⊙ tanh(Cₜ)

GRU (simpler):
  z = σ(Wz · [hₜ₋₁, xₜ])
  r = σ(Wr · [hₜ₋₁, xₜ])
  h̃ = tanh(W · [r ⊙ hₜ₋₁, xₜ])
  hₜ = (1-z) ⊙ hₜ₋₁ + z ⊙ h̃`,
            output: 'The additive cell state update is why LSTM remembers long sequences.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'LSTM and GRU trade off complexity and performance.',
          table: {
            headers: ['Aspect', 'Vanilla RNN', 'LSTM', 'GRU'],
            rows: [
              ['Gates', 'None', '3 (forget, input, output)', '2 (update, reset)'],
              ['Parameters', 'Fewest', '~4× RNN', '~3× RNN'],
              ['Memory mechanism', 'Hidden state only', 'Separate cell state', 'Hidden state only'],
              ['Long-term memory', 'Poor', 'Excellent', 'Good'],
              ['Training speed', 'Fast', 'Slower', 'Moderate'],
              ['Best for', 'Short sequences', 'Very long sequences', 'General use, speed/quality balance']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming LSTM always beats GRU (fix: GRU often matches LSTM with fewer parameters; try both on your task)',
            'Mistake 2: Using LSTM without dropout or regularization (fix: apply recurrent dropout (p=0.2–0.5) to prevent overfitting)',
            'Mistake 3: Forgetting that gates can saturate (fix: use gradient clipping and proper weight initialization to maintain gate responsiveness)',
            'Mistake 4: Stacking too many LSTM layers without need (fix: 1–2 layers usually suffice; more layers increase training time without proportional gains)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'LSTMs and GRUs dominated sequence modeling from 2014 to 2017.',
          list: [
            '<strong>Neural Machine Translation:</strong> Google Neural Machine Translation used 8-layer LSTM encoders and decoders',
            '<strong>Speech Synthesis:</strong> Tacotron 2 used LSTM for text-to-speech prosody modeling',
            '<strong>Named Entity Recognition:</strong> BiLSTM-CRF was the state-of-the-art architecture for tagging entities',
            '<strong>Sentiment Analysis:</strong> LSTM classifiers processed reviews and social media for emotion detection',
            '<strong>Time Series Prediction:</strong> LSTM networks forecasted electricity demand and traffic patterns'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LSTM uses gates to selectively remember and forget information',
            'The cell state update is additive, preventing vanishing gradients',
            'GRU simplifies LSTM with two gates and similar performance',
            'Both enable learning of long-range dependencies in sequences',
            'BiLSTM processes sequences in both directions for richer context'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key innovation of LSTM that solves the vanishing gradient problem?\nAns: The additive cell state update (Cₜ = fₜ⊙Cₜ₋₁ + iₜ⊙C̃ₜ) allows gradients to flow directly through time without repeated multiplication by small weights.',
            'Q2: When might you choose GRU over LSTM?\nAns: When you want similar performance with fewer parameters and faster training, or when your sequences are moderately long rather than extremely long.',
            'Q3: What does the forget gate control in an LSTM?\nAns: It decides what proportion of the previous cell state to retain, allowing the model to discard irrelevant old information.'
          ]
        }
      ]
    },
    attention: {
      title: 'Attention Mechanism',
      subtitle: 'Dynamic focusing for sequence modeling',
      sections: [
        {
          heading: 'What is Attention?',
          text: 'The <strong>attention mechanism</strong> allows a model to dynamically focus on relevant parts of the input when producing each output. Instead of compressing the entire input into a single fixed vector (the bottleneck of encoder-decoder RNNs), attention computes a weighted combination of all input positions. This was the breakthrough that led directly to the Transformer architecture.',
          list: [
            'Weights input positions dynamically for each output position',
            'Eliminates the fixed-size context vector bottleneck',
            'Enables parallel computation across positions',
            'Provides interpretability — attention weights show what the model focuses on'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Scaled dot-product attention computes attention weights using query, key, and value matrices.',
          example: {
            title: 'Example: Scaled dot-product attention',
            code: `Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V

Where:
  Q = Query matrix (what I am looking for)
  K = Key matrix (what each position offers)
  V = Value matrix (what each position contains)

For "it" in "The cat sat, it was tired":
  Q("it") · K("cat") = 8.5  ← HIGH
  Q("it") · K("The") = 1.2
  Q("it") · K("sat") = 0.8

Weights after softmax: [0.05, 0.80, 0.03, 0.04, 0.08]
Output = 0.80 × V("cat") + ...`,
            output: 'Attention resolves pronouns by focusing on the relevant antecedent.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Attention variants serve different purposes in model architecture.',
          table: {
            headers: ['Type', 'Query Source', 'Key/Value Source', 'Use Case'],
            rows: [
              ['Self-Attention', 'Same sequence', 'Same sequence', 'Encoder, understanding context within one sequence'],
              ['Masked Self-Attention', 'Same sequence (causal)', 'Same sequence (past only)', 'Decoder, autoregressive generation'],
              ['Cross-Attention', 'Decoder sequence', 'Encoder sequence', 'Seq2Seq, translation, summarization'],
              ['Multi-Head', 'Multiple parallel heads', 'Multiple parallel heads', 'Capture different relationship types simultaneously']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing attention with memory (fix: attention is a weighted average, not a storage mechanism; it computes, it does not store)',
            'Mistake 2: Ignoring the scaling factor √dₖ (fix: without it, dot products grow large with dimension, pushing softmax into regions with vanishing gradients)',
            'Mistake 3: Thinking attention is interpretable everywhere (fix: attention weights correlate weakly with importance in deep layers; use gradient-based methods for true interpretability)',
            'Mistake 4: Using full attention for very long sequences (fix: use sparse attention, linear attention, or chunked attention for sequences > 4096 tokens)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Attention is the defining innovation of modern deep learning.',
          list: [
            '<strong>Machine Translation:</strong> Google Translate (Transformer) uses attention to align source and target words dynamically',
            '<strong>Document Summarization:</strong> Models attend to salient sentences when generating a summary',
            '<strong>Image Captioning:</strong> Show-Attend-and-Tell uses visual attention to focus on image regions per output word',
            '<strong>Speech Recognition:</strong> Attention-based models align audio frames with text transcriptions',
            '<strong>Large Language Models:</strong> GPT, Claude, and Gemini are built entirely on multi-head self-attention'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Attention weights input positions dynamically for each output',
            'Query, Key, and Value are the three core matrices',
            'Scaled dot-product attention prevents gradient saturation',
            'Multi-head attention runs multiple attention operations in parallel',
            'Self-attention is the foundation of the Transformer architecture',
            'Attention replaced recurrence in state-of-the-art NLP models'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What problem does attention solve in encoder-decoder models?\nAns: It eliminates the fixed-size context vector bottleneck by allowing the decoder to dynamically focus on all encoder hidden states.',
            'Q2: Why is the dot product divided by √dₖ in scaled attention?\nAns: To prevent the dot products from growing too large in high dimensions, which would push the softmax into a region with extremely small gradients.',
            'Q3: What is the difference between self-attention and cross-attention?\nAns: Self-attention relates positions within the same sequence; cross-attention relates positions in one sequence (decoder) to positions in another (encoder).'
          ]
        }
      ]
    }
  }
};
