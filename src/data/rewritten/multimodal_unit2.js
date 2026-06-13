export const multimodalUnit2Content = {
  unit2: {
    distributional: {
      title: 'Distributional Hypothesis',
      subtitle: 'You shall know a word by the company it keeps',
      sections: [
        {
          heading: 'What is the Distributional Hypothesis?',
          text: 'The <strong>Distributional Hypothesis</strong>, formulated by linguist John Firth, states: <em>"You shall know a word by the company it keeps."</em> Words that appear in similar contexts tend to have similar meanings. This principle is the theoretical foundation of all modern NLP.',
          list: [
            'Words with overlapping contexts are semantically similar',
            'No human annotation needed — learned purely from text corpora',
            'Underpins Word2Vec, GloVe, BERT, and all embedding methods',
            'Analogies like king − man + woman ≈ queen emerge naturally'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Context overlap determines semantic similarity in vector space.',
          example: {
            title: 'Example: Context overlap drives similarity',
            code: 'Corpus examples:\n  "The doctor treated the patient."\n  "The physician examined the patient."\n\nContext overlap:\n  doctor     → [treated, patient, hospital]\n  physician  → [examined, patient, hospital]\n\nShared context words: patient, hospital\n→ doctor ≈ physician in vector space',
            output: 'High context overlap produces high cosine similarity between word vectors.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'How different embedding methods implement the distributional hypothesis.',
          table: {
            headers: ['Method', 'Implementation', 'Context Type', 'Best For'],
            rows: [
              ['Word2Vec', 'Predicts target from local context window', 'Local (±5 words)', 'General NLP, analogies'],
              ['GloVe', 'Factorizes global word-word co-occurrence matrix', 'Global (entire corpus)', 'Efficient training, word similarity'],
              ['BERT', 'Masked language modeling with deep context', 'Dynamic (sentence-specific)', 'Contextual disambiguation'],
              ['FastText', 'Subword n-gram embeddings', 'Local + subword units', 'Morphological languages, OOV words']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming distributional similarity equals true semantic equivalence (fix: embeddings capture usage patterns, not grounded world knowledge)',
            'Mistake 2: Ignoring corpus bias (fix: embeddings reflect the data — gender, racial, and cultural biases must be audited and mitigated)',
            'Mistake 3: Expecting good representations for rare words (fix: rare words lack sufficient context; use subword methods like FastText or BERT)',
            'Mistake 4: Treating homonyms as single vectors (fix: context-sensitive embeddings like ELMo or BERT assign different vectors per usage)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'The distributional hypothesis powers every modern NLP system.',
          list: [
            'Search engines: query-document semantic matching using word embeddings',
            'Machine translation: aligning word meanings across languages via shared context patterns',
            'Recommendation systems: understanding item descriptions and reviews through semantic similarity',
            'Chatbots and assistants: intent classification built on distributional semantic representations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Distributional hypothesis: similar context → similar meaning',
            'Foundation of Word2Vec, GloVe, BERT, and all embeddings',
            'Data-driven: no labels needed, but reflects corpus biases',
            'Rare words and homonyms are challenging for static embeddings',
            'Contextual embeddings (BERT) extend the hypothesis to dynamic usage'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does the distributional hypothesis work for learning word meaning?\nAns: Words appearing in similar contexts tend to have similar semantic roles and meanings.',
            'Q2: What is the main limitation of static embeddings like Word2Vec for words like "bank" (river vs financial)?\nAns: They produce a single vector regardless of context, collapsing different senses into one representation.',
            'Q3: How does BERT extend the distributional hypothesis beyond Word2Vec?\nAns: BERT computes context-dependent embeddings, so the same word gets different vectors in different sentences.'
          ]
        }
      ]
    },
    'word-embedding': {
      title: 'Word Embedding',
      subtitle: 'Mapping words to continuous vector spaces',
      sections: [
        {
          heading: 'What is Word Embedding?',
          text: 'A <strong>word embedding</strong> maps each word to a dense, low-dimensional vector (typically 50–300 dimensions) such that semantically similar words are close together in vector space. This replaces sparse one-hot encoding with a meaningful continuous representation.',
          list: [
            'Dense vectors: fixed low dimensionality regardless of vocabulary size',
            'Captures semantic relationships: cosine similarity measures meaning',
            'Enables vector arithmetic: king − man + woman ≈ queen',
            'Generalizes to unseen words via subword or context-based methods'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Word2Vec objective maximizes the probability of context words given a target word (skip-gram) or vice versa (CBOW).',
          example: {
            title: 'Example: Skip-gram training step',
            code: 'Target word: "cat"\nContext window size = 2:\n  Positive pairs: (cat, The), (cat, sat), (cat, on), (cat, the)\n  Negative pairs: (cat, dog), (cat, car), (cat, blue)\n\nObjective:\n  maximize log σ(v_cat · v_The) + Σ log σ(-v_cat · v_neg)\n\nResult after training:\n  vector("cat") ≈ vector("dog")  (both animals)\n  vector("cat") ⊥ vector("car")  (unrelated)',
            output: 'Skip-gram pushes similar words together and unrelated words apart.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing the major word embedding approaches.',
          table: {
            headers: ['Aspect', 'One-Hot', 'Word2Vec', 'GloVe', 'FastText'],
            rows: [
              ['Dimension', 'Vocabulary size (10K–1M+)', 'Fixed (50–300)', 'Fixed (50–300)', 'Fixed (50–300)'],
              ['Captures similarity', 'No — all equidistant', 'Yes — local context', 'Yes — global co-occurrence', 'Yes — subword-aware'],
              ['OOV handling', 'No', 'No', 'No', 'Yes — via subwords'],
              ['Training speed', 'Instant', 'Fast', 'Fast', 'Moderate'],
              ['Best for', 'Baseline only', 'General NLP, analogies', 'Dense similarity tasks', 'Morphological languages']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using one-hot encoding for neural networks with large vocabularies (fix: always use embeddings — one-hot creates millions of parameters and no semantic structure)',
            'Mistake 2: Treating embedding similarity as synonymy (fix: embeddings capture relatedness, not strict synonymy — "coffee" and "tea" are close but not synonyms)',
            'Mistake 3: Forgetting to normalize vectors before cosine similarity (fix: cosine similarity already normalizes; Euclidean distance does not and is less appropriate)',
            'Mistake 4: Using pretrained embeddings blindly without domain adaptation (fix: fine-tune embeddings on domain-specific corpora for specialized tasks like biomedical NLP)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Word embeddings are the default text representation in modern AI.',
          list: [
            'Document classification: average word vectors as document features for spam detection and sentiment analysis',
            'Search and retrieval: semantic search that matches queries to documents beyond keyword overlap',
            'Named entity recognition: using word context vectors to identify people, organizations, and locations',
            'Cross-lingual transfer: aligning monolingual embeddings to create shared multilingual spaces for translation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Word embeddings = dense vectors where semantics ≈ proximity',
            'Word2Vec: CBOW (fast, frequent words) vs Skip-gram (better quality, rare words)',
            'GloVe: global co-occurrence matrix factorization',
            'FastText: subword n-grams handle out-of-vocabulary words',
            'Vector arithmetic demonstrates linear semantic relationships'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is one-hot encoding inadequate for large-vocabulary NLP?\nAns: It creates sparse, high-dimensional vectors with no semantic structure and massive parameter counts.',
            'Q2: What is the main advantage of FastText over Word2Vec?\nAns: FastText uses subword n-grams, so it can generate embeddings for out-of-vocabulary words.',
            'Q3: In vector arithmetic, why does king − man + woman ≈ queen work?\nAns: The embedding space captures semantic relationships as linear directions (gender, royalty, etc.).'
          ]
        }
      ]
    },
    elmo: {
      title: 'ELMo',
      subtitle: 'Embeddings from Language Models',
      sections: [
        {
          heading: 'What is ELMo?',
          text: '<strong>ELMo</strong> (Embeddings from Language Models, 2018) is a deep contextualized word representation model. Unlike static embeddings like Word2Vec or GloVe that assign a single vector to each word, ELMo generates embeddings dynamically based on the entire sentence context.',
          list: [
            'Solves the one-word, one-vector limitation of static embeddings',
            'Uses a deep Bidirectional Language Model (biLM) for context-aware representations',
            'Handles polysemy: the same word gets different vectors in different sentences',
            'Character-based input makes it robust to out-of-vocabulary words'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'ELMo computes a weighted sum of all layer representations from a deep biLSTM.',
          example: {
            title: 'Example: ELMo embedding computation',
            code: 'Sentence: "Let\'s stick together" vs "He poked the fire with a stick"\n\nWord: "stick"\n\nContext 1 (verb):\n  Forward: "Let\'s" → "stick" → "together"\n  Backward: "together" → "stick" → "Let\'s"\n\nContext 2 (noun):\n  Forward: "the" → "fire" → "with" → "a" → "stick"\n  Backward: "He" → "poked" → "the" → "fire" → "with" → "a"\n\nELMo_k = gamma * (s0*h_k0 + s1*h_k1 + s2*h_k2)\n\nResult: Different vectors for the same word due to different context.',
            output: 'Context-dependent embeddings solve polysemy by generating vectors on-the-fly.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ELMo versus static embedding methods.',
          table: {
            headers: ['Aspect', 'Word2Vec / GloVe', 'ELMo'],
            rows: [
              ['Representation', 'Single fixed vector per word', 'Context-dependent vector per occurrence'],
              ['Bidirectionality', 'None', 'Shallow bidirectional (two LSTMs)'],
              ['Polysemy handling', 'Collapses all senses into one vector', 'Different vectors for different senses'],
              ['OOV handling', 'No', 'Character-level CNN handles unknown words'],
              ['Layer usage', 'Single layer', 'Weighted combination of all layers'],
              ['Training', 'Word prediction / co-occurrence', 'Bidirectional language modeling']
            ]
          }
        },
        {
          heading: 'ELMo Architecture (3 Steps)',
          text: 'ELMo builds embeddings through a three-stage pipeline.',
          list: [
            'Step 1 — Character-Based Input (CharCNN): Individual characters are processed by a Character-level CNN to create initial embeddings. This handles OOV words like "Jedi" by composing vectors from characters.',
            'Step 2 — Deep Bidirectional LSTM: Character embeddings feed into a multi-layered biLSTM. A Forward LM processes left-to-right, and a separate Backward LM processes right-to-left. Both directions are concatenated for full context.',
            'Step 3 — Weighted Layer Combination: The final embedding is a learned weighted sum of ALL layer outputs: ELMo_k = gamma * (s0*h_k0 + s1*h_k1 + s2*h_k2). Lower layers capture syntax; higher layers capture semantics.'
          ]
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating ELMo as just another pretrained embedding (fix: ELMo requires the full sentence as input; you cannot look up word vectors in isolation like Word2Vec)',
            'Mistake 2: Ignoring the shallow bidirectionality limitation (fix: ELMo concatenates two separate LSTMs; for deep bidirectionality where every layer sees full context simultaneously, use BERT)',
            'Mistake 3: Using only the top layer representation (fix: the power of ELMo comes from combining all layers; the top layer alone misses syntactic information from lower layers)',
            'Mistake 4: Expecting ELMo to handle very long contexts (fix: LSTM-based models struggle with very long sequences; for long-document understanding, use Transformer-based models)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ELMo was a breakthrough in transfer learning for NLP.',
          list: [
            'Question answering: context-aware representations improve answer span identification in reading comprehension',
            'Named entity recognition: disambiguating entity types based on surrounding context (e.g., "Apple" as company vs fruit)',
            'Sentiment analysis: capturing sentiment-flipping words like "not bad" where static embeddings fail',
            'Coreference resolution: resolving pronouns by understanding the contextual mentions they refer to'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ELMo = deep contextualized word representations from a bidirectional language model',
            'Character-level CNN handles OOV words without a fixed vocabulary',
            'biLSTM processes text in both directions for full context',
            'Weighted combination of all layers captures both syntax and semantics',
            'Solves polysemy: the same word gets different vectors in different contexts'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does ELMo solve polysemy while Word2Vec does not?\nAns: ELMo generates embeddings dynamically using the full sentence context, so the same word gets different vectors in different contexts.',
            'Q2: What is the purpose of the Character-level CNN in ELMo?\nAns: It creates initial embeddings from individual characters, allowing the model to handle out-of-vocabulary words.',
            'Q3: What is the difference between shallow bidirectionality (ELMo) and deep bidirectionality (BERT)?\nAns: ELMo concatenates two separate LSTMs; BERT uses a single Transformer where every layer attends to the full context in both directions simultaneously.'
          ]
        }
      ]
    },
    tokenization: {
      title: 'Tokenization',
      subtitle: 'Breaking text into subword units',
      sections: [
        {
          heading: 'What is Tokenization?',
          text: '<strong>Tokenization</strong> is the process of splitting text into smaller units (tokens) that a model can process. Modern NLP does not use whole words as tokens; instead, it uses subword methods that balance vocabulary size with the ability to represent any text.',
          list: [
            'Word-level: simple but creates massive vocabularies and cannot handle rare words',
            'Character-level: tiny vocabulary but loses word structure and meaning',
            'Subword methods: merge frequently occurring character sequences for efficiency',
            'Two dominant methods: WordPiece (BERT) and Byte-Pair Encoding (GPT)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'WordPiece and BPE both start with characters and iteratively merge the most frequent pairs, but WordPiece optimizes for language model likelihood while BPE optimizes for frequency.',
          example: {
            title: 'Example: WordPiece tokenization',
            code: 'Word: "unhappiness"\n\nWordPiece (BERT-style):\n  ["un", "##happy", "##ness"]\n\nByte-level BPE (GPT-style):\n  ["un", "happiness"] or\n  ["un", "hap", "pi", "ness"]\n\n## marker: indicates subword continuation\nByte-level: works on raw bytes (0-255), handles any Unicode',
            output: 'Subword tokenization keeps vocabulary small while representing any word.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing the two dominant subword tokenization methods.',
          table: {
            headers: ['Aspect', 'WordPiece (BERT)', 'BPE (GPT)'],
            rows: [
              ['Merge criterion', 'Maximizes language model likelihood', 'Most frequent character pair'],
              ['Vocabulary size', '~30K tokens', 'Typically 50K tokens'],
              ['OOV handling', 'Rare words split into known subwords', 'Rare words split into known subwords'],
              ['Unicode support', 'Via subword vocabulary', 'Byte-level: handles any text natively'],
              ['## marker', 'Uses ## for continuations', 'No special marker'],
              ['Best for', 'Masked language modeling', 'Autoregressive generation']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking tokenization is just splitting on spaces (fix: modern tokenizers use learned merge rules; the same word may tokenize differently depending on context and the learned vocabulary)',
            'Mistake 2: Mixing tokenizers between training and inference (fix: you must use the exact same tokenizer and vocabulary that the model was trained with; mismatched tokenization destroys performance)',
            'Mistake 3: Expecting tokenized text to be human-readable (fix: tokenized output contains special subword markers and may split words unintuitively; it is designed for the model, not humans)',
            'Mistake 4: Ignoring byte-level tokenization for multilingual or code tasks (fix: byte-level BPE handles any Unicode, emojis, code, and foreign scripts without special preprocessing)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Tokenization is the first step in every modern NLP pipeline.',
          list: [
            'Multilingual models: XLM-R uses SentencePiece (similar to BPE) to handle 100 languages with a single shared vocabulary',
            'Code models: Codex and GitHub Copilot use byte-level BPE to tokenize any programming language without language-specific parsers',
            'Social media analysis: byte-level tokenizers handle emojis, hashtags, and informal text natively',
            'Machine translation: shared subword vocabularies align related words across languages (e.g., "happiness" and "felicidad" share "ness" / "dad" patterns)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Tokenization converts text into model-processable subword tokens',
            'WordPiece (BERT): merges based on language model likelihood, ~30K vocab',
            'BPE (GPT): merges most frequent pairs, byte-level variant handles any text',
            'Subword methods solve the vocabulary-size vs OOV trade-off',
            'Always use the same tokenizer that the model was trained with'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do modern NLP models use subword tokenization instead of word-level tokenization?\nAns: Subword methods keep vocabulary size manageable while handling rare words by decomposing them into known pieces.',
            'Q2: What is the key difference between WordPiece and BPE merge criteria?\nAns: WordPiece merges the pair that maximizes training set likelihood; BPE merges the most frequent pair.',
            'Q3: Why is byte-level BPE particularly powerful for multilingual and code tasks?\nAns: It operates on raw bytes (0-255), so it can represent any Unicode character, emoji, or code symbol without special handling or unknown tokens.'
          ]
        }
      ]
    },
    cnn: {
      title: 'Convolutional Neural Networks',
      subtitle: 'Deep learning for grid-like data',
      sections: [
        {
          heading: 'What is a Convolutional Neural Network?',
          text: 'A <strong>CNN</strong> is a neural network specifically designed for processing grid-like data such as images. It uses convolutional layers with learnable filters that slide across the input to detect local features, reducing parameters through weight sharing.',
          list: [
            'Convolution layers apply learnable filters (kernels) locally across the input',
            'Parameter sharing: the same filter slides over the entire image',
            'Pooling layers provide translation invariance and reduce spatial dimensions',
            'Hierarchical feature learning: edges → textures → shapes → objects'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A convolution operation computes the dot product of a filter and a local image patch at each position.',
          example: {
            title: 'Example: Edge detection with a Sobel filter',
            code: 'Input patch (3×3):     Sobel X filter:\n[1   2   1]            [-1   0   1]\n[0   0   0]      *     [-2   0   2]\n[-1 -2  -1]            [-1   0   1]\n\nResult = (1×-1)+(2×0)+(1×1) +\n         (0×-2)+(0×0)+(0×2) +\n         (-1×-1)+(-2×0)+(-1×1)\n       = 0\n\n→ Horizontal edge detected (zero crossing)',
            output: 'Different filters detect edges, corners, textures, and object parts.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CNNs vs fully connected networks and key architectural variants.',
          table: {
            headers: ['Aspect', 'Fully Connected (MLP)', 'CNN', 'ResNet'],
            rows: [
              ['Connectivity', 'Every neuron to every neuron', 'Local, shared weights', 'Skip connections + convolutions'],
              ['Parameters', 'Huge (grows with input size)', 'Small (filter count × size)', 'Moderate (skips save depth)'],
              ['Translation handling', 'None — must learn position', 'Inherent via pooling', 'Inherent via pooling'],
              ['Depth limit', 'Shallow (vanishing gradients)', 'Deep (with care)', 'Very deep (100+ layers)'],
              ['Best for', 'Tabular data', 'Images, grids', 'Complex vision tasks']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using MLP instead of CNN for images (fix: CNNs exploit spatial structure; MLPs ignore it and require impossibly many parameters)',
            'Mistake 2: Choosing filter sizes arbitrarily (fix: 3×3 is the sweet spot for most tasks; larger filters can be decomposed into stacked 3×3s)',
            'Mistake 3: Forgetting padding in early layers (fix: use same padding to preserve spatial dimensions so features at image edges are not lost)',
            'Mistake 4: Using too much pooling (fix: pooling destroys spatial resolution; modern architectures use strided convolutions instead of aggressive pooling)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'CNNs are the backbone of modern computer vision.',
          list: [
            'Medical imaging: tumor detection in CT and MRI scans using 3D CNNs',
            'Autonomous driving: object detection (pedestrians, vehicles, signs) from camera feeds',
            'Satellite imagery: land use classification, deforestation monitoring, disaster assessment',
            'Face recognition: Apple Face ID and surveillance systems use deep CNNs for identity verification'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CNNs = local receptive fields + shared weights + pooling',
            'Filters detect features hierarchically: edges → textures → objects',
            'Key hyperparameters: filter size, stride, padding, number of filters',
            'ResNet skip connections enable training very deep networks',
            'Always prefer CNN over MLP for image and grid data'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does parameter sharing in CNNs matter?\nAns: The same filter detects the same feature anywhere in the image, drastically reducing parameters.',
            'Q2: What does a pooling layer do and why is it controversial in modern architectures?\nAns: It reduces spatial size and provides translation invariance, but also loses fine-grained spatial information.',
            'Q3: How do ResNet skip connections solve the vanishing gradient problem?\nAns: They create shortcut paths that allow gradients to flow directly through the network bypassing layers.'
          ]
        }
      ]
    },
    spectrograms: {
      title: 'Spectrograms',
      subtitle: 'Visualizing sound for machine learning',
      sections: [
        {
          heading: 'What is a Spectrogram?',
          text: 'A <strong>spectrogram</strong> is a visual representation of the spectrum of frequencies in an audio signal as they vary with time. It converts 1D audio waveforms into 2D image-like representations, making audio compatible with CNN-based pipelines.',
          list: [
            'STFT splits audio into overlapping frames and applies Fourier transform',
            'Mel spectrograms apply perceptual frequency scaling (human hearing is logarithmic)',
            'Result is a 2D matrix: time on x-axis, frequency on y-axis, magnitude as color intensity',
            'Standard input format for speech recognition, music classification, and audio event detection'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Mel scale compresses higher frequencies to match human auditory perception.',
          example: {
            title: 'Example: Mel scale conversion',
            code: 'm = 2595 × log₁₀(1 + f/700)\n\nf = 1000 Hz  → m ≈ 1000 mel\nf = 4000 Hz  → m ≈ 2146 mel\nf = 8000 Hz  → m ≈ 2840 mel\nf = 16000 Hz → m ≈ 3385 mel\n\nNote: doubling frequency does NOT\ndouble perceived pitch.',
            output: 'The Mel scale is approximately linear below 1 kHz and logarithmic above.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Types of audio representations for machine learning.',
          table: {
            headers: ['Representation', 'Axes', 'Information', 'Best For'],
            rows: [
              ['Waveform', 'Amplitude vs time', 'Raw signal, all info', 'WaveNet, raw audio generation'],
              ['Linear Spectrogram', 'Freq vs time', 'Full frequency detail', 'General analysis, pitch tasks'],
              ['Mel Spectrogram', 'Mel freq vs time', 'Perceptually weighted', 'Speech recognition, most ML'],
              ['MFCC', 'Coefficients vs time', 'Compact, decorrelated', 'Traditional ASR, speaker ID'],
              ['Chromagram', 'Pitch class vs time', 'Harmonic content', 'Music analysis, chord detection']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using raw waveforms with standard CNNs without modification (fix: either convert to spectrograms or use 1D convolutions / WaveNet architectures)',
            'Mistake 2: Ignoring the time-frequency trade-off (fix: longer windows give better frequency resolution but worse time resolution; match window size to the temporal granularity of your task)',
            'Mistake 3: Discarding phase information when it matters (fix: for tasks like source separation or audio generation, use complex spectrograms or waveform models)',
            'Mistake 4: Forgetting to normalize or log-compress magnitudes (fix: apply log(1 + |STFT|) to compress the wide dynamic range of audio signals)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Spectrograms bridge audio and computer vision pipelines.',
          list: [
            'Speech recognition: Google Assistant and Siri process Mel spectrograms through deep CNN or transformer encoders',
            'Music genre classification: CNNs trained on spectrograms classify rock, jazz, classical with >90% accuracy',
            'Industrial monitoring: anomaly detection in machinery by analyzing spectrogram patterns of operational sounds',
            'Wildlife conservation: automated species identification from acoustic sensors in rainforests'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Spectrogram = time-frequency visual representation of audio',
            'STFT creates it; Mel scaling makes it perceptual',
            'Mel spectrograms are the standard input for audio ML',
            'Log compression and normalization are essential preprocessing steps',
            'Phase information is lost in standard magnitude spectrograms'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the Mel scale used instead of linear frequency for speech recognition?\nAns: Human hearing perceives pitch approximately logarithmically; Mel matches perceptual sensitivity.',
            'Q2: What is the time-frequency trade-off in STFT?\nAns: Longer windows improve frequency resolution but reduce time resolution, and vice versa.',
            'Q3: Why can standard CNNs process spectrograms directly?\nAns: Spectrograms are 2D image-like matrices, making them compatible with standard 2D convolutional architectures.'
          ]
        }
      ]
    },
    autoencoders: {
      title: 'Autoencoders',
      subtitle: 'Unsupervised learning of efficient representations',
      sections: [
        {
          heading: 'What is an Autoencoder?',
          text: 'An <strong>autoencoder</strong> is a neural network trained to copy its input to its output through a compressed bottleneck. It consists of an <strong>encoder</strong> that maps input to a latent representation, and a <strong>decoder</strong> that reconstructs the input from this latent code.',
          list: [
            'Encoder compresses high-dimensional input into a low-dimensional latent vector',
            'Decoder reconstructs the original input from the latent representation',
            'The bottleneck forces the network to learn efficient, meaningful features',
            'Trained unsupervised — needs only input data, no labels'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The autoencoder minimizes reconstruction loss between input and output.',
          example: {
            title: 'Example: Reconstruction loss on MNIST',
            code: 'Input image (28×28 = 784 pixels):\n  x = [0.8, 0.2, 0.1, ..., 0.9]\n\nBottleneck (32 dimensions):\n  z = encoder(x) = [0.3, -0.1, ..., 0.7]\n\nReconstruction:\n  x̂ = decoder(z) = [0.75, 0.25, ..., 0.85]\n\nMSE Loss:\n  L = (1/784) Σᵢ (xᵢ - x̂ᵢ)²\n  L ≈ 0.02  (good reconstruction)',
            output: 'A well-trained autoencoder produces reconstructions nearly identical to the input.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Autoencoder variants and their specializations.',
          table: {
            headers: ['Variant', 'Modification', 'Use Case', 'Key Benefit'],
            rows: [
              ['Vanilla AE', 'Standard bottleneck', 'Dimensionality reduction', 'Simple, fast training'],
              ['Denoising AE', 'Corrupted input, clean target', 'Noise removal', 'Learns robust features'],
              ['Sparse AE', 'Sparsity penalty on hidden units', 'Feature selection', 'Interpretable representations'],
              ['VAE', 'Probabilistic latent space', 'Generation, interpolation', 'Smooth, structured latent space'],
              ['Contractive AE', 'Penalizes encoder sensitivity', 'Robust features', 'Stable to input perturbations']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Making the bottleneck too wide (fix: if bottleneck equals input size, the network learns the identity function; keep bottleneck much smaller)',
            'Mistake 2: Using autoencoders for classification without validation (fix: autoencoder features are reconstruction-optimal, not necessarily class-discriminative; always validate on downstream tasks)',
            'Mistake 3: Expecting VAEs to produce sharp images like GANs (fix: VAEs optimize likelihood, which tends toward blurry samples; combine with adversarial loss or use GANs for sharp generation)',
            'Mistake 4: Ignoring latent space structure in generative tasks (fix: sample from the learned prior distribution, not uniformly — uniform sampling produces unrealistic outputs)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Autoencoders are versatile tools across domains.',
          list: [
            'Anomaly detection: high reconstruction error flags fraudulent transactions or manufacturing defects',
            'Image denoising: medical scans and satellite imagery cleaned by training on noise-corrupted inputs',
            'Dimensionality reduction: pre-training feature extractors for downstream classifiers when labels are scarce',
            'Recommendation systems: collaborative filtering via autoencoders that reconstruct user-item interaction matrices'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Autoencoder = encoder + bottleneck + decoder',
            'Trained to reconstruct input, learning compressed representations',
            'Denoising AE learns robustness; VAE learns a generative latent space',
            'Reconstruction error signals anomalies',
            'Bottleneck size controls compression and feature quality'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does the bottleneck force the network to learn meaningful features?\nAns: The compression constraint prevents memorization; the network must capture the most salient structure.',
            'Q2: How can autoencoders detect anomalies?\nAns: Anomalies have unusual structure → high reconstruction error when passed through a model trained on normal data.',
            'Q3: What is the key difference between a standard autoencoder and a VAE?\nAns: A VAE learns a probabilistic latent distribution, enabling generation of new samples by sampling from the latent space.'
          ]
        }
      ]
    },
    'visual-semantic': {
      title: 'Visual Semantic Spaces',
      subtitle: 'Bridging vision and language in shared embedding spaces',
      sections: [
        {
          heading: 'What are Visual Semantic Spaces?',
          text: 'A <strong>Visual Semantic Space</strong> is a shared embedding space where both visual features (from images) and semantic features (from text) are mapped into the same vector space. This enables cross-modal retrieval, zero-shot classification, and joint understanding.',
          list: [
            'Images and text are encoded into vectors of the same dimensionality',
            'Similar concepts from different modalities cluster together',
            'Cosine similarity measures cross-modal relevance',
            'Foundation of image search, captioning, and visual question answering'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Contrastive loss pulls matched image-text pairs together and pushes unmatched pairs apart.',
          example: {
            title: 'Example: CLIP-style contrastive learning',
            code: 'Image of "golden retriever"\n  → [Image Encoder] → z_img = [0.2, -0.5, 0.8, ...]\n\nText: "a golden retriever"\n  → [Text Encoder]  → z_txt = [0.2, -0.5, 0.8, ...]\n\nCosine similarity:\n  sim(z_img, z_txt) = 0.99  ← MATCH\n\nNegative pair:\n  sim(z_img, z_txt_random) = 0.12  ← NO MATCH\n\nLoss = -log(0.99) + log(0.12)',
            output: 'The model learns to align semantically equivalent concepts across modalities.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Methods for learning visual-semantic alignment.',
          table: {
            headers: ['Method', 'Projection Type', 'Training Signal', 'Scalability'],
            rows: [
              ['CCA', 'Linear', 'Correlation maximization', 'Moderate (small datasets)'],
              ['Deep CCA', 'Non-linear (neural net)', 'Correlation maximization', 'Moderate'],
              ['Contrastive (CLIP)', 'Non-linear (transformer)', 'NCE / contrastive pairs', 'Massive (web-scale data)'],
              ['Alignment (VSE++)', 'Non-linear', 'Triplet ranking loss', 'Large (caption datasets)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming perfect alignment is possible (fix: visual and linguistic information are asymmetric — images contain more detail than typical captions; expect noisy, not perfect, alignment)',
            'Mistake 2: Evaluating only on retrieval, not on fairness (fix: visual semantic models inherit and can amplify societal biases present in training captions; audit for demographic fairness)',
            'Mistake 3: Using pre-trained encoders without fine-tuning (fix: while CLIP works zero-shot, fine-tuning on domain-specific image-text pairs significantly improves accuracy for specialized domains)',
            'Mistake 4: Ignoring the modality gap (fix: even well-trained models exhibit a systematic gap between image and text embeddings; normalization and temperature scaling help bridge it)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Visual semantic spaces enable cross-modal AI products.',
          list: [
            'Image search: searching photo libraries with natural language queries like "sunset over mountains with lake"',
            'Zero-shot classification: classifying images into categories never seen during training using text descriptions',
            'Visual question answering: answering "What color is the car?" by jointly reasoning over image regions and question text',
            'Accessibility: generating alt-text for images to assist visually impaired users'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Visual semantic spaces map images and text into the same vector space',
            'Contrastive learning (CLIP) is the dominant modern approach',
            'Cosine similarity measures cross-modal relevance',
            'Zero-shot classification works by comparing image embeddings to text label embeddings',
            'The modality gap is a persistent challenge even in well-trained systems'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why are visual semantic spaces useful for zero-shot image classification?\nAns: You can classify into new categories by encoding their text descriptions and comparing to image embeddings, without retraining.',
            'Q2: What training objective does CLIP use to align vision and language?\nAns: Contrastive loss that maximizes similarity for matched image-text pairs and minimizes it for unmatched pairs.',
            'Q3: What is the "modality gap" in visual semantic spaces?\nAns: A systematic separation between image and text embeddings even for aligned concepts, due to inherent differences in the modalities.'
          ]
        }
      ]
    },
    cca: {
      title: 'Canonical Correlation Analysis',
      subtitle: 'Finding linear relationships between two data views',
      sections: [
        {
          heading: 'What is Canonical Correlation Analysis?',
          text: '<strong>CCA</strong> is a classical statistical method that finds linear projections of two data views such that the projected variables are maximally correlated. It is one of the earliest and most principled approaches to multimodal learning.',
          list: [
            'Finds u and v such that corr(uᵀX, vᵀY) is maximized',
            'Solves a generalized eigenvalue problem on covariance matrices',
            'Classical CCA is linear; Deep CCA extends to non-linear mappings',
            'Widely used in neuroimaging, genomics, and cross-modal retrieval'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'CCA maximizes the correlation between linear projections of two views.',
          example: {
            title: 'Example: CCA objective and solution',
            code: 'Given: X ∈ ℝⁿˣᵖ (view 1), Y ∈ ℝⁿˣᵠ (view 2)\n\nFind: u ∈ ℝᵖ, v ∈ ℝᵠ\n  maximize: corr(uᵀX, vᵀY)\n  subject to: ||u|| = ||v|| = 1\n\nSolution:\n  Σₓₓ⁻¹ Σₓᵧ Σᵧᵧ⁻¹ Σᵧₓ u = ρ² u\n\nWhere:\n  ρ = canonical correlation (0 to 1)\n  u, v = canonical vectors (directions)',
            output: 'Each pair of canonical vectors extracts one correlated dimension.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Classical CCA versus its deep learning extension.',
          table: {
            headers: ['Aspect', 'Classical CCA', 'Deep CCA'],
            rows: [
              ['Projection', 'Linear (matrix multiply)', 'Non-linear (neural network)'],
              ['Optimization', 'Closed-form eigenvalue problem', 'Gradient descent'],
              ['Scalability', 'O(d³) — limited dimensions', 'Scales to high dimensions'],
              ['Interpretability', 'Canonical vectors interpretable', 'Black-box representations'],
              ['Best for', 'Small datasets, theory', 'Large datasets, complex patterns']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying CCA to non-stationary or unaligned data (fix: ensure both views describe the same samples in the same order; CCA assumes paired observations)',
            'Mistake 2: Using too many canonical components (fix: only keep components with statistically significant correlation; scree plots help determine the effective dimensionality)',
            'Mistake 3: Forgetting regularization in high dimensions (fix: when p or q > n, covariance matrices are singular; use regularized CCA or deep CCA instead)',
            'Mistake 4: Confusing correlation with causation (fix: CCA finds associations, not causal links; high correlation does not imply one view causes the other)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'CCA bridges multiple measurement modalities in science and engineering.',
          list: [
            'Neuroimaging: linking fMRI brain activity patterns to behavioral questionnaire responses',
            'Genomics: finding correlated gene expression and methylation patterns across samples',
            'Multilingual NLP: aligning monolingual word embeddings across languages for cross-lingual transfer',
            'Multimodal sentiment analysis: combining text sentiment scores with facial expression features'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CCA finds linear projections maximizing cross-view correlation',
            'Solved via generalized eigenvalue decomposition',
            'Deep CCA replaces linear projections with neural networks',
            'Regularization is essential when dimensions exceed samples',
            'CCA finds association, not causation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What quantity does CCA maximize between two data views?\nAns: The correlation between their linear projections.',
            'Q2: When should you use Deep CCA instead of classical CCA?\nAns: When the relationship between views is non-linear or the dimensionality is too high for closed-form solutions.',
            'Q3: Why is regularization necessary in high-dimensional CCA?\nAns: When feature dimensions exceed sample size, covariance matrices become singular and uninvertible.'
          ]
        }
      ]
    },
    'component-analysis': {
      title: 'Component Analysis',
      subtitle: 'PCA, ICA, and orthogonal representations',
      sections: [
        {
          heading: 'What is Component Analysis?',
          text: '<strong>Component Analysis</strong> is a family of techniques that decompose data into a set of fundamental building blocks (components). The two most important methods are <strong>PCA</strong> (Principal Component Analysis) and <strong>ICA</strong> (Independent Component Analysis).',
          list: [
            'PCA finds orthogonal directions of maximum variance in the data',
            'ICA finds statistically independent sources that generated the mixed signal',
            'Both reduce dimensionality but with different optimization goals',
            'Widely used for preprocessing, visualization, and feature extraction'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'PCA solves an eigenvalue problem on the covariance matrix; ICA maximizes non-Gaussianity of components.',
          example: {
            title: 'Example: PCA dimensionality reduction',
            code: '1. Center data: X′ = X - mean(X)\n2. Compute covariance: Σ = (1/n) X′ᵀX′\n3. Eigen-decompose: Σv = λv\n4. Select top-k eigenvectors (largest λ)\n5. Project: Z = X′ · Vₖ\n\nOriginal: 1000-dimensional images\nPCA: 50 dimensions\nVariance retained: 95%\n\nResult: faster training, less noise',
            output: 'PCA preserves maximum variance in the fewest dimensions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'PCA versus ICA: different goals, different assumptions, different outputs.',
          table: {
            headers: ['Aspect', 'PCA', 'ICA'],
            rows: [
              ['Goal', 'Maximize variance', 'Maximize statistical independence'],
              ['Components', 'Orthogonal', 'Statistically independent'],
              ['Ordering', 'By variance (ranked)', 'No natural ordering'],
              ['Gaussian data', 'Optimal', 'Cannot separate sources'],
              ['Use case', 'Dimensionality reduction, denoising', 'Blind source separation'],
              ['Example', 'Eigenfaces, feature compression', 'Cocktail party problem, EEG artifact removal']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using PCA on non-linear manifolds (fix: PCA assumes linear relationships; for curved data, use kernel PCA, t-SNE, or UMAP instead)',
            'Mistake 2: Applying ICA without centering and whitening (fix: ICA assumes pre-whitened data; run PCA whitening as a preprocessing step)',
            'Mistake 3: Interpreting PCA components as causal factors (fix: PCA components are variance-optimal linear combinations, not necessarily meaningful real-world factors)',
            'Mistake 4: Keeping too many or too few components (fix: use cumulative explained variance plots — typically 95% retention — or cross-validate downstream task performance)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Component analysis is a universal preprocessing tool.',
          list: [
            'Face recognition: Eigenfaces (PCA) compress facial images into 50–100 components for efficient matching',
            'Finance: PCA reduces correlated stock returns to a handful of risk factors (market, sector, style)',
            'Neuroscience: ICA separates EEG signals into independent brain sources and artifact components (eye blinks, muscle noise)',
            'Genomics: PCA on SNP data reveals population structure and ancestry clusters'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'PCA = orthogonal directions of maximum variance',
            'ICA = statistically independent sources',
            'PCA is ideal for compression and denoising',
            'ICA is ideal for blind source separation',
            'Neither assumes causality — both are linear decomposition methods'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the fundamental difference between PCA and ICA objectives?\nAns: PCA maximizes variance; ICA maximizes statistical independence of components.',
            'Q2: Why does ICA fail on Gaussian-distributed sources?\nAns: Gaussian distributions are rotationally symmetric — independence and uncorrelatedness are equivalent, so ICA cannot uniquely separate them.',
            'Q3: When should you prefer kernel PCA over standard PCA?\nAns: When the data lies on a non-linear manifold and linear projections cannot capture its structure.'
          ]
        }
      ]
    },
    'multimodal-rep': {
      title: 'Multimodal Representations',
      subtitle: 'Joint, coordinated, and parallel representations',
      sections: [
        {
          heading: 'What are Multimodal Representations?',
          text: 'Multimodal representations are strategies for encoding information from multiple modalities (text, image, audio) into vector spaces that enable cross-modal reasoning. The three main types are <strong>joint</strong>, <strong>coordinated</strong>, and <strong>aligned</strong> representations.',
          list: [
            'Joint: all modalities map into a single shared latent space',
            'Coordinated: separate modality spaces aligned through constraints',
            'Aligned: fine-grained mappings between elements across modalities',
            'The choice depends on whether you need all modalities at test time'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Coordinated representations use a contrastive or ranking loss to align separate encoders without fusing them.',
          example: {
            title: 'Example: Coordinated representation (CLIP-style)',
            code: 'Image → [Image Encoder] → z_img ∈ ℝᵈ\nText  → [Text Encoder]  → z_txt ∈ ℝᵈ\n\nPositive pair (matched):\n  sim(z_img, z_txt) = 0.95\n\nNegative pair (random):\n  sim(z_img, z_txt_rand) = 0.08\n\nContrastive loss:\n  L = -log(exp(0.95/τ) / Σ exp(sim/τ))\n\nResult: separate encoders, aligned spaces',
            output: 'Coordinated representations allow unimodal inference while maintaining cross-modal compatibility.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Three strategies for multimodal representation learning.',
          table: {
            headers: ['Aspect', 'Joint', 'Coordinated', 'Aligned'],
            rows: [
              ['Architecture', 'Single shared encoder / fusion layer', 'Separate encoders + alignment loss', 'Separate encoders + explicit mappings'],
              ['Test-time flexibility', 'All modalities required', 'Single modality OK', 'Single modality OK'],
              ['Training complexity', 'High (joint optimization)', 'Moderate (alignment loss)', 'High (fine-grained labels)'],
              ['Cross-modal strength', 'Strongest fusion', 'Moderate compatibility', 'Fine-grained correspondence'],
              ['Example systems', 'Multimodal autoencoders', 'CLIP, Visual Semantic Spaces', 'Attention-based image captioning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Always choosing joint representations (fix: joint representations require all modalities at test time; use coordinated representations if you need to handle missing modalities)',
            'Mistake 2: Ignoring modality imbalance in joint training (fix: modalities have different noise levels and scales; balance loss contributions or use modality dropout to prevent one modality from dominating)',
            'Mistake 3: Assuming alignment implies semantic equivalence (fix: fine-grained alignment maps elements (e.g., words to image regions), but alignment strength does not guarantee semantic correctness)',
            'Mistake 4: Not evaluating cross-modal retrieval separately from unimodal tasks (fix: a model can perform well on unimodal tasks while failing at cross-modal transfer — always test both)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal representation strategies power diverse AI systems.',
          list: [
            'Joint representations: fusing audio and video into a single vector for emotion recognition in video calls',
            'Coordinated representations: CLIP enables zero-shot image classification by encoding class names as text queries',
            'Aligned representations: image captioning models align each generated word to a specific image region via attention',
            'Cross-modal retrieval: searching a video database by typing "person playing guitar near beach at sunset"'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Joint = single shared space (all modalities fused)',
            'Coordinated = separate spaces aligned by loss (flexible at test time)',
            'Aligned = fine-grained element-to-element mappings',
            'Joint is strongest for fusion; coordinated is best for flexibility',
            'Always evaluate both unimodal and cross-modal performance'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When should you prefer a coordinated representation over a joint one?\nAns: When you need to perform inference with only one modality at test time.',
            'Q2: What is the main advantage of joint representations?\nAns: They create the deepest fusion of all modalities, often yielding the strongest performance when all inputs are available.',
            'Q3: What is the difference between coarse (coordinated) and fine-grained (aligned) multimodal representations?\nAns: Coordinated aligns whole modalities; aligned maps specific elements (e.g., words to image regions) with precise correspondences.'
          ]
        }
      ]
    }
  }
};
