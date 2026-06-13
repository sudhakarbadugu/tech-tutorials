export const llmModule2Structure = {
  module2: {
    title: 'Module 2: Neural Language Models & Word Representations',
    topics: [
      { id: 'ngram-language-model', title: 'N-gram Language Models' },
      { id: 'markov-chains', title: 'Markov Chains for Language' },
      { id: 'word2vec', title: 'Word2Vec' },
      { id: 'glove', title: 'GloVe' },
      { id: 'fasttext', title: 'FastText' },
      { id: 'transformer-architecture', title: 'Transformer Architecture' },
      { id: 'bert-gpt', title: 'BERT and GPT' },
    ]
  }
};

export const llmModule2Content = {
  module2: {
    'ngram-language-model': {
      title: 'N-gram Language Models',
      subtitle: 'Count-based language modeling with Markov assumptions',
      sections: [
        {
          heading: 'What is an N-gram Language Model?',
          text: 'An <strong>n-gram language model</strong> predicts the next word using only the previous N-1 words. It is the simplest statistical language model, based on counting how often word sequences appear in a training corpus. Despite their simplicity, n-gram models remain useful for speech recognition, machine translation, and spelling correction.',
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
    'markov-chains': {
      title: 'Markov Chains for Language',
      subtitle: 'Modeling sequences as probabilistic state transitions',
      sections: [
        {
          heading: 'What is a Markov Chain?',
          text: 'A <strong>Markov chain</strong> is a stochastic model describing a sequence of possible events where the probability of each event depends only on the state attained in the previous event. In language modeling, states are words (or tokens), and transitions are the probabilities of moving from one word to the next. The Markov assumption — that the future depends only on the present — is what makes n-gram models tractable.',
          list: [
            'First-order Markov: next state depends only on current state',
            'Second-order Markov: next state depends on two previous states (trigram)',
            'Transition matrix stores P(next | current) for all state pairs',
            'Markov chains are the mathematical foundation of n-gram language models'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The transition probability matrix defines the Markov chain. Each entry P(i→j) is the probability of moving from state i to state j.',
          example: {
            title: 'Example: Markov chain transition matrix',
            code: `States: ["The", "cat", "dog", "sat", "ran"]

Transition Matrix P:
          The   cat   dog   sat   ran
The    0.0   0.67  0.33  0.0   0.0
cat    0.0   0.0   0.0   0.5   0.5
dog    0.0   0.0   0.0   0.0   1.0
sat    0.5   0.0   0.0   0.0   0.0
ran    0.5   0.0   0.0   0.0   0.0

Chain rule for sequences:
  P("The cat sat") = P(The) × P(cat|The) × P(sat|cat)
                   = 0.4 × 0.67 × 0.5
                   = 0.134`,
            output: 'Markov chains reduce language modeling to matrix operations.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Markov chains differ in order and application.',
          table: {
            headers: ['Aspect', '1st-Order', '2nd-Order', 'Hidden Markov Model'],
            rows: [
              ['Dependencies', 'Current state only', 'Two previous states', 'Observations depend on hidden states'],
              ['Parameters', 'O(V²)', 'O(V³)', 'O(V² × H²)'],
              ['Use in NLP', 'Bigram LMs', 'Trigram LMs', 'POS tagging, NER'],
              ['Training', 'Count transitions', 'Count 3-grams', 'EM algorithm (Baum-Welch)'],
              ['Expressiveness', 'Limited', 'Better', 'Can model latent structure']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming Markov chains capture long-range dependencies (fix: they do not — use RNNs or Transformers for long context)',
            'Mistake 2: Forgetting to normalize transition rows (fix: each row must sum to 1.0; verify before using)',
            'Mistake 3: Using a single chain for all text genres (fix: build separate chains for formal, informal, and technical text)',
            'Mistake 4: Confusing Markov chains with hidden Markov models (fix: HMMs have unobservable states; standard Markov chains do not)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Markov chains appear in many NLP and beyond-NLP systems.',
          list: [
            '<strong>Text Generation:</strong> Generate plausible-sounding text by sampling from the transition matrix',
            '<strong>POS Tagging:</strong> HMMs (an extension) model tag sequences with emission probabilities',
            '<strong>Music Generation:</strong> Model note-to-note transitions for algorithmic composition',
            '<strong>PageRank:</strong> Google\'s original algorithm treats the web as a Markov chain of page transitions',
            '<strong>Autocomplete:</strong> Predict next word using transition probabilities learned from user behavior'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Markov chains model sequences as probabilistic state transitions',
            'The Markov assumption limits dependency to the previous N-1 states',
            'Transition matrices store all pairwise probabilities',
            'N-gram language models are a direct application of Markov chains',
            'HMMs extend Markov chains with hidden (unobserved) states'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the Markov assumption in a first-order chain?\nAns: The probability of the next state depends only on the current state, not on any earlier history.',
            'Q2: How does a second-order Markov chain differ from a first-order chain?\nAns: The next state depends on the two previous states, not just one — equivalent to a trigram model.',
            'Q3: Why are standard Markov chains limited for language modeling?\nAns: They cannot capture long-range dependencies (e.g., subject-verb agreement across clauses) due to the short memory assumption.'
          ]
        }
      ]
    },
    word2vec: {
      title: 'Word2Vec',
      subtitle: 'Distributed word representations from local context',
      sections: [
        {
          heading: 'What is Word2Vec?',
          text: '<strong>Word2Vec</strong> is a shallow neural network architecture for learning dense word embeddings from large text corpora. Introduced by Mikolov et al. at Google in 2013, it trains by predicting words from their neighbors (CBOW) or neighbors from a word (Skip-gram). Word2Vec proved that simple neural architectures could learn rich semantic relationships from raw text alone.',
          list: [
            'CBOW: predicts a target word from its surrounding context',
            'Skip-gram: predicts surrounding context words from a target word',
            'Uses a shallow neural network (no hidden layer) for efficiency',
            'Learns embeddings that capture analogies: king - man + woman ≈ queen'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Word2Vec trains by maximizing the log probability of observed word-context pairs. Negative sampling makes training efficient.',
          example: {
            title: 'Example: Skip-gram with negative sampling',
            code: `Skip-gram objective for word "cat":
  J = log σ(v_cat · v_the)
    + log σ(v_cat · v_sat)
    + Σᵢ log σ(-v_cat · v_noiseᵢ)

Where:
  v_cat = embedding vector for "cat"
  σ = sigmoid function
  noiseᵢ = random negative samples (e.g., "zebra", "physics")

Training:
  - Window size = 5 (context words within ±5 positions)
  - Negative samples = 5 per positive pair
  - Embedding dimension = 300

Result after training:
  sim("king", "queen") = 0.72
  sim("king", "apple") = 0.12`,
            output: 'Negative sampling makes Word2Vec training tractable on billions of words.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CBOW and Skip-gram serve different needs.',
          table: {
            headers: ['Aspect', 'CBOW', 'Skip-gram'],
            rows: [
              ['Direction', 'Context → Target', 'Target → Context'],
              ['Speed', 'Faster', 'Slower'],
              ['Rare words', 'Poor (context averages dilute them)', 'Better (trained directly on rare words)'],
              ['Accuracy', 'Good for frequent words', 'Better overall for semantics'],
              ['Use case', 'General NLP, speed', 'Rare words, detailed semantics'],
              ['Architecture', 'Average context embeddings', 'Predict each context word separately']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating Word2Vec embeddings as universal truths (fix: they reflect training data biases and corpus-specific usage patterns)',
            'Mistake 2: Using too small a corpus (fix: Word2Vec needs billions of tokens to learn stable relationships; use pretrained models when data is limited)',
            'Mistake 3: Ignoring out-of-vocabulary words (fix: use subword-aware methods like FastText for morphologically rich languages)',
            'Mistake 4: Expecting Word2Vec to handle polysemy (fix: Word2Vec gives one vector per word; contextual embeddings like BERT handle multiple meanings)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Word2Vec transformed how NLP systems represent words.',
          list: [
            '<strong>Document Classification:</strong> Average word embeddings to create document vectors for sentiment analysis',
            '<strong>Recommendation Systems:</strong> Embed products and queries in the same space for semantic search',
            '<strong>Analogy Solving:</strong> Automatically discover relationships: Paris - France + Italy = Rome',
            '<strong>Named Entity Recognition:</strong> Word similarity helps identify entities in new contexts',
            '<strong>Machine Translation:</strong> Align embeddings across languages for unsupervised translation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Word2Vec learns dense word embeddings from raw text using a shallow neural network',
            'CBOW predicts the target from context; Skip-gram predicts context from the target',
            'Negative sampling makes training scalable to large corpora',
            'Word2Vec captures semantic and syntactic analogies in vector space',
            'It gives a single static vector per word — no context sensitivity'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key difference between CBOW and Skip-gram?\nAns: CBOW predicts the target word from its surrounding context; Skip-gram predicts the surrounding context words from the target word.',
            'Q2: Why does Skip-gram perform better on rare words?\nAns: Skip-gram trains directly on rare words as targets, while CBOW averages their infrequent context vectors, diluting their signal.',
            'Q3: What limitation of Word2Vec does BERT solve?\nAns: Word2Vec gives a single static embedding per word, unable to distinguish different meanings in different contexts (polysemy). BERT produces context-dependent embeddings.'
          ]
        }
      ]
    },
    glove: {
      title: 'GloVe',
      subtitle: 'Global vectors from word-word co-occurrence statistics',
      sections: [
        {
          heading: 'What is GloVe?',
          text: '<strong>GloVe (Global Vectors for Word Representation)</strong> is an unsupervised learning algorithm for obtaining vector representations of words. Unlike Word2Vec which trains on local context windows, GloVe explicitly factorizes the global word-word co-occurrence matrix. It was introduced by Pennington et al. at Stanford in 2014 and produces embeddings that often outperform Word2Vec on word analogy tasks.',
          list: [
            'Trains on global corpus statistics, not just local windows',
            'Factorizes the log-co-occurrence matrix with weighted least squares',
            'Explicitly captures the ratio of co-occurrence probabilities',
            'Often more interpretable because the objective directly relates to corpus statistics'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'GloVe minimizes the difference between the dot product of word vectors and the log of their co-occurrence probability, weighted by a function of the co-occurrence count.',
          example: {
            title: 'Example: GloVe objective function',
            code: `Loss = Σᵢⱼ f(Xᵢⱼ) × (wᵢᵀ · w̃ⱼ + bᵢ + b̃ⱼ - log Xᵢⱼ)²

Where:
  Xᵢⱼ = co-occurrence count of words i and j
  wᵢ, w̃ⱼ = word vectors (two sets: center and context)
  bᵢ, b̃ⱼ = bias terms
  f(X) = weighting function:
         f(x) = (x / x_max)^α   if x < x_max
         f(x) = 1                otherwise

Typical values:
  x_max = 100, α = 0.75

Insight:
  log(Xᵢⱼ / Xᵢₖ) captures the ratio
  of association between word pairs.`,
            output: 'GloVe explicitly optimizes for meaningful ratios in co-occurrence statistics.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'GloVe and Word2Vec take fundamentally different approaches.',
          table: {
            headers: ['Aspect', 'Word2Vec', 'GloVe'],
            rows: [
              ['Approach', 'Local context prediction', 'Global co-occurrence factorization'],
              ['Training data', 'Sliding windows', 'Full co-occurrence matrix'],
              ['Objective', 'Predict local neighbors', 'Fit log co-occurrence ratios'],
              ['Speed', 'Faster (online)', 'Slower (requires matrix construction)'],
              ['Interpretability', 'Less direct', 'More direct link to corpus stats'],
              ['Performance', 'Strong on syntactic analogies', 'Strong on semantic analogies'],
              ['OOV handling', 'None', 'None']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking GloVe and Word2Vec produce identical embeddings (fix: they optimize different objectives; their vectors are not interchangeable without retraining)',
            'Mistake 2: Using raw co-occurrence counts without weighting (fix: the f(X) weighting function is essential — rare co-occurrences should not dominate)',
            'Mistake 3: Building the co-occurrence matrix on too small a corpus (fix: GloVe needs a large, diverse corpus; the matrix becomes sparse and noisy with limited data)',
            'Mistake 4: Expecting GloVe to handle OOV words (fix: like Word2Vec, GloVe cannot represent unseen words; use subword methods for OOV handling)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'GloVe embeddings are widely used in research and production.',
          list: [
            '<strong>Stanford NLP Group:</strong> GloVe provides pretrained embeddings in 50d, 100d, 200d, and 300d for multiple languages',
            '<strong>Named Entity Recognition:</strong> GloVe vectors serve as input features for CRF-based and neural NER systems',
            '<strong>Sentiment Analysis:</strong> GloVe embeddings initialize neural classifiers for emotion detection in reviews',
            '<strong>Document Clustering:</strong> Average GloVe vectors to represent documents for topic modeling and clustering',
            '<strong>Question Answering:</strong> GloVe embeddings power semantic similarity matching in retrieval systems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'GloVe learns embeddings by factorizing the global word-word co-occurrence matrix',
            'It optimizes the fit between vector dot products and log co-occurrence counts',
            'The weighting function f(X) balances rare and frequent co-occurrences',
            'GloVe often excels on semantic analogy tasks compared to Word2Vec',
            'Both GloVe and Word2Vec produce static embeddings — no context sensitivity'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the fundamental difference between Word2Vec and GloVe?\nAns: Word2Vec trains by predicting local context neighbors; GloVe explicitly factorizes the global word-word co-occurrence matrix.',
            'Q2: Why does GloVe use a weighting function f(X) on co-occurrence counts?\nAns: To prevent rare co-occurrences from dominating the loss and to limit the influence of extremely frequent word pairs like "the" and "of".',
            'Q3: On which type of analogy task does GloVe typically outperform Word2Vec?\nAns: Semantic analogies (e.g., city-country pairs) where global co-occurrence statistics are particularly informative.'
          ]
        }
      ]
    },
    fasttext: {
      title: 'FastText',
      subtitle: 'Subword-aware embeddings for morphologically rich languages',
      sections: [
        {
          heading: 'What is FastText?',
          text: '<strong>FastText</strong> is an extension of Word2Vec developed by Facebook AI Research (FAIR) in 2016. It represents each word as a bag of character n-grams, allowing it to compute embeddings for out-of-vocabulary (OOV) words and share representations across morphologically related words. This makes FastText especially effective for languages with rich morphology and for handling rare or misspelled words.',
          list: [
            'Represents words as bags of character n-grams (typically 3–6 characters)',
            'Can generate embeddings for words never seen during training',
            'Shares subword information across related words (run, runs, running)',
            'Training is as efficient as Word2Vec but produces richer representations'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'FastText sums the embeddings of all character n-grams (plus the word itself) to produce the final word vector.',
          example: {
            title: 'Example: FastText subword decomposition',
            code: `Word: "where"

Character n-grams (n=3):
  <wh, whe, her, ere, re>
  (with < and > as word boundary markers)

Subword embeddings:
  v_<wh = [-0.12, 0.34, ...]
  v_whe = [0.05, -0.22, ...]
  v_her = [-0.08, 0.15, ...]
  v_ere = [0.11, -0.04, ...]
  v_re> = [-0.03, 0.07, ...]

Word embedding:
  v_where = v_<wh + v_whe + v_her + v_ere + v_re>

OOV word: "wheres"
  v_wheres = v_<wh + v_whe + v_her + v_ere + v_res + v_es>
  → still gets a reasonable vector!`,
            output: 'Subword composition enables OOV handling and morphological awareness.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'FastText extends Word2Vec with subword information.',
          table: {
            headers: ['Aspect', 'Word2Vec', 'FastText'],
            rows: [
              ['Representation', 'Single vector per word', 'Sum of character n-gram vectors'],
              ['OOV handling', 'Random or zero vector', 'Composes from subwords'],
              ['Morphology', 'Ignored', 'Explicitly modeled'],
              ['Vocabulary size', 'Fixed at training', 'Can represent any string'],
              ['Training speed', 'Fast', 'Slightly slower (more subwords to update)'],
              ['Best for', 'English, large corpora', 'Morphologically rich languages']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using FastText for English-only tasks with huge vocabularies (fix: Word2Vec may suffice for English; FastText shines for morphologically rich languages like German, Turkish, Finnish)',
            'Mistake 2: Using too small n-gram range (fix: n=3 to 6 is standard; too small misses morphology, too large creates sparsity)',
            'Mistake 3: Expecting FastText to solve all OOV problems (fix: extremely rare or nonsensical strings may still get poor vectors)',
            'Mistake 4: Not pruning the subword vocabulary (fix: FastText can generate millions of n-grams; set min_n and max_n carefully)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'FastText is widely deployed for multilingual and noisy text.',
          list: [
            '<strong>Facebook Content Moderation:</strong> FastText classifies posts across 100+ languages in real time',
            '<strong>Spell Correction:</strong> Subword similarity helps correct misspelled words in search queries',
            '<strong>Multilingual NLP:</strong> FastText provides aligned embeddings for 157 languages, enabling cross-lingual transfer',
            '<strong>Rare Word Handling:</strong> Scientific and medical texts with rare terminology benefit from subword decomposition',
            '<strong>Text Classification:</strong> FastText includes a built-in classifier that trains in seconds on millions of documents'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'FastText represents words as bags of character n-grams',
            'It can generate embeddings for out-of-vocabulary words',
            'Subword sharing improves representations for morphologically related words',
            'FastText is especially effective for languages with rich morphology',
            'The built-in text classifier makes FastText a complete NLP toolkit'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does FastText handle out-of-vocabulary words?\nAns: It breaks the word into character n-grams and sums their learned embeddings to compose a vector for the unseen word.',
            'Q2: Why is FastText particularly effective for languages like German or Turkish?\nAns: These languages have rich morphology with many inflected forms; FastText shares subword information across related words, improving rare form representations.',
            'Q3: What is the trade-off of using FastText over Word2Vec?\nAns: FastText is slightly slower to train and uses more memory due to the large subword vocabulary, but handles OOV words and morphology better.'
          ]
        }
      ]
    },
    'transformer-architecture': {
      title: 'Transformer Architecture',
      subtitle: 'Attention is all you need: the architecture that changed NLP',
      sections: [
        {
          heading: 'What is the Transformer?',
          text: 'The <strong>Transformer</strong> is a deep learning architecture introduced by Vaswani et al. in the landmark 2017 paper "Attention Is All You Need." It replaces recurrence and convolution entirely with <strong>self-attention</strong>, enabling parallel processing of entire sequences and dramatically improving training efficiency. Transformers are the foundation of all modern large language models including BERT, GPT, T5, and LLaMA.',
          list: [
            'No recurrence — processes all positions in parallel',
            'Self-attention relates every position to every other position',
            'Positional encoding injects sequence order information',
            'Encoder-decoder architecture with multi-head attention and feedforward layers'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Transformer uses scaled dot-product attention, multi-head attention, and position-wise feedforward networks.',
          example: {
            title: 'Example: Transformer attention and FFN',
            code: `Scaled Dot-Product Attention:
  Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V

Multi-Head Attention:
  headᵢ = Attention(QWᵢ^Q, KWᵢ^K, VWᵢ^V)
  MultiHead(Q,K,V) = Concat(head₁,...,headₕ)Wᴼ

Position-wise FFN:
  FFN(x) = max(0, xW₁ + b₁)W₂ + b₂
  (ReLU activation, applied independently to each position)

Layer structure:
  Output = LayerNorm(x + Sublayer(x))
  → residual connection + layer normalization`,
            output: 'Multi-head attention captures different relationship types simultaneously.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Transformers differ fundamentally from RNNs and CNNs.',
          table: {
            headers: ['Aspect', 'RNN/LSTM', 'CNN', 'Transformer'],
            rows: [
              ['Operation', 'Sequential', 'Local sliding window', 'Fully parallel'],
              ['Long-range deps', 'Poor (vanishing gradients)', 'Limited by kernel size', 'Direct (O(1) path length)'],
              ['Position handling', 'Implicit in recurrence', 'Local positional bias', 'Explicit positional encoding'],
              ['Training speed', 'Slow (unrolled)', 'Moderate', 'Fast (parallelizable)'],
              ['Interpretability', 'Hidden state is opaque', 'Filter visualization', 'Attention weights are inspectable'],
              ['Memory', 'O(n) per step', 'O(k × n)', 'O(n²) for attention matrix']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring the quadratic memory cost of attention (fix: for sequences > 4096 tokens, use sparse attention, linear attention, or sliding window variants)',
            'Mistake 2: Removing positional encoding (fix: without it, the transformer is permutation-invariant and loses all sequence order information)',
            'Mistake 3: Using full attention for autoregressive generation without masking (fix: decoder self-attention must be causal — mask future positions to prevent information leakage)',
            'Mistake 4: Assuming more heads always help (fix: 8–16 heads is typical; excessive heads dilute attention capacity without proportional gains)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Transformers power virtually every modern NLP system.',
          list: [
            '<strong>Machine Translation:</strong> Google Translate, DeepL use Transformer encoder-decoder models',
            '<strong>Language Understanding:</strong> BERT uses a Transformer encoder for bidirectional context modeling',
            '<strong>Text Generation:</strong> GPT models use a Transformer decoder for autoregressive generation',
            '<strong>Speech Recognition:</strong> Whisper (OpenAI) uses Transformers for audio-to-text transcription',
            '<strong>Computer Vision:</strong> Vision Transformer (ViT) applies Transformers to image patches, rivaling CNNs',
            '<strong>Multimodal AI:</strong> CLIP, DALL-E, GPT-4V use Transformers to process text and images together'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transformers replace recurrence with self-attention for parallel sequence processing',
            'Scaled dot-product attention prevents gradient saturation in high dimensions',
            'Multi-head attention runs multiple attention operations in parallel',
            'Positional encoding provides sequence order information',
            'Residual connections and layer normalization stabilize deep network training',
            'The O(n²) attention cost is the main scalability challenge'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key advantage of Transformers over RNNs?\nAns: Transformers process all positions in parallel and provide direct connections between any two positions, eliminating sequential bottlenecks and vanishing gradients.',
            'Q2: Why is the dot product scaled by √dₖ in attention?\nAns: In high dimensions, dot products grow large in magnitude, pushing the softmax into regions with vanishing gradients. Scaling prevents this.',
            'Q3: What would happen if positional encoding were removed from a Transformer?\nAns: The model would become permutation-invariant, treating "cat sat the" identically to "The cat sat" — it would lose all sense of word order.'
          ]
        }
      ]
    },
    'bert-gpt': {
      title: 'BERT and GPT',
      subtitle: 'The two dominant paradigms in pretrained language models',
      sections: [
        {
          heading: 'What are BERT and GPT?',
          text: '<strong>BERT (Bidirectional Encoder Representations from Transformers)</strong> and <strong>GPT (Generative Pre-trained Transformer)</strong> are the two most influential pretrained language model families. BERT uses a bidirectional Transformer encoder to understand context from both directions, making it ideal for understanding tasks. GPT uses a left-to-right Transformer decoder to generate text autoregressively, making it ideal for generation tasks. Together they define the two dominant paradigms in modern NLP.',
          list: [
            'BERT: bidirectional encoder, trained with masked language modeling',
            'GPT: autoregressive decoder, trained to predict the next token',
            'BERT excels at classification, NER, QA — understanding tasks',
            'GPT excels at text generation, summarization, dialogue — generation tasks'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'BERT uses masked language modeling (MLM) and next sentence prediction. GPT uses causal language modeling (next token prediction).',
          example: {
            title: 'Example: BERT MLM vs GPT autoregression',
            code: `BERT Masked Language Modeling:
  Input:  "The [MASK] sat on the mat"
  Target: "cat"
  Loss:   -log P("cat" | "The [MASK] sat on the mat")

  Bidirectional context:
    "The [MASK]" ← left context
    "sat on the mat" → right context
    Both inform the prediction of [MASK]

GPT Autoregressive Modeling:
  Input:  "The cat sat"
  Target: "on"
  Loss:   -log P("on" | "The cat sat")

  Causal (left-to-right) only:
    P("on") depends on "The", "cat", "sat"
    Cannot see "the mat" (future tokens)

  Generation:
    Sample "on" → append → predict next
    "The cat sat on the mat..."`,
            output: 'BERT sees both directions; GPT generates one token at a time.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'BERT and GPT differ in architecture, training, and optimal use cases.',
          table: {
            headers: ['Aspect', 'BERT', 'GPT'],
            rows: [
              ['Architecture', 'Transformer encoder', 'Transformer decoder'],
              ['Direction', 'Bidirectional', 'Left-to-right (causal)'],
              ['Pretraining task', 'Masked LM + Next Sentence', 'Causal LM (next token)'],
              ['Attention', 'Full self-attention', 'Masked (causal) self-attention'],
              ['Strengths', 'Understanding, classification', 'Generation, creativity'],
              ['Fine-tuning', 'Add task-specific head', 'Prompt or fine-tune'],
              ['Variants', 'RoBERTa, ALBERT, DeBERTa', 'GPT-2, GPT-3, GPT-4, ChatGPT'],
              ['Typical tasks', 'QA, NER, sentiment, inference', 'Writing, code, dialogue, summarization']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using BERT for text generation (fix: BERT is not autoregressive; use GPT or encoder-decoder models like T5 for generation)',
            'Mistake 2: Using GPT for bidirectional understanding without adaptation (fix: GPT only sees left context; use BERT or add bidirectional layers for understanding tasks)',
            'Mistake 3: Confusing pretraining with fine-tuning (fix: pretraining learns general language; fine-tuning adapts to specific tasks with labeled data)',
            'Mistake 4: Expecting small BERT/GPT models to match large ones (fix: scale matters — larger models capture more nuanced patterns; use appropriate model size for your data and compute)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'BERT and GPT power the most widely used AI products today.',
          list: [
            '<strong>Google Search:</strong> BERT improved search understanding by processing full query context bidirectionally',
            '<strong>ChatGPT:</strong> GPT-4 with RLHF powers conversational AI used by millions daily',
            '<strong>GitHub Copilot:</strong> GPT-based code generation assists developers in real time',
            '<strong>Medical NLP:</strong> BioBERT and MedPaLM adapt BERT/GPT for clinical text analysis',
            '<strong>Legal Tech:</strong> Contract review and legal research use fine-tuned BERT for entity and clause extraction',
            '<strong>Content Moderation:</strong> BERT classifiers detect toxicity, spam, and policy violations at scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BERT uses a bidirectional Transformer encoder with masked language modeling',
            'GPT uses an autoregressive Transformer decoder with causal language modeling',
            'BERT excels at understanding tasks: classification, NER, QA',
            'GPT excels at generation tasks: text, code, dialogue, summarization',
            'Both rely on pretraining + fine-tuning (or prompting) for task adaptation',
            'The choice between BERT and GPT depends on whether you need understanding or generation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the fundamental architectural difference between BERT and GPT?\nAns: BERT uses a Transformer encoder with bidirectional attention; GPT uses a Transformer decoder with causal (left-to-right) attention.',
            'Q2: Why can\'t BERT be used directly for text generation?\nAns: BERT is trained with masked language modeling and bidirectional attention; it is not designed to generate tokens autoregressively one at a time.',
            'Q3: In what scenario would you choose BERT over GPT?\nAns: When the task requires understanding and classification of existing text (sentiment analysis, named entity recognition, question answering) rather than generating new text.'
          ]
        }
      ]
    }
  }
};
