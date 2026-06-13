export const nlpModule1Content = {
  module1: {
    overview: {
      title: 'Overview of Natural Language Processing',
      subtitle: 'From rule-based systems to modern deep learning',
      sections: [
        {
          heading: 'What is Natural Language Processing?',
          text: '<strong>Natural Language Processing (NLP)</strong> is a branch of artificial intelligence that enables computers to understand, interpret, and generate human language. It bridges the gap between human communication and machine understanding by processing text and speech data.',
          list: [
            'NLP combines computational linguistics, computer science, and machine learning to analyze language',
            'It handles both written text and spoken speech through subfields like Natural Language Understanding (NLU) and Natural Language Generation (NLG)',
            'Modern NLP relies heavily on deep learning, especially transformer architectures like BERT and GPT',
            'Applications range from simple spell-checkers to sophisticated conversational AI systems'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The evolution of NLP follows a clear progression from rules to neural networks.',
          example: {
            title: 'Example: NLP Pipeline Flow',
            code: 'Raw Text Input\n    ↓\n[Text Preprocessing]\n  → Lowercasing, removing noise, normalizing\n    ↓\n[Tokenization]\n  → Split into words, subwords, or characters\n    ↓\n[Feature Extraction]\n  → Convert tokens to numerical vectors (BoW, TF-IDF, embeddings)\n    ↓\n[Model Processing]\n  → Classification, generation, translation, etc.\n    ↓\nStructured Output',
            output: 'Every NLP task follows this general pipeline, though modern deep learning often merges feature extraction and modeling.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Rule-based vs statistical vs neural NLP approaches.',
          table: {
            headers: ['Aspect', 'Rule-based', 'Statistical', 'Neural/Deep Learning'],
            rows: [
              ['Approach', 'Hand-crafted grammar rules', 'Probabilistic models (n-grams, HMM)', 'Neural networks (RNN, Transformer)'],
              ['Data needed', 'Minimal', 'Moderate', 'Large corpora'],
              ['Flexibility', 'Rigid, breaks on variation', 'Handles some variation', 'Generalizes well to new patterns'],
              ['Interpretability', 'Highly interpretable', 'Somewhat interpretable', 'Black-box, less interpretable'],
              ['Examples', 'Regex parsers, ELIZA', 'N-gram language models', 'BERT, GPT, T5'],
              ['Era', '1950s–1980s', '1990s–2010s', '2013–present']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Skipping preprocessing assuming the model will handle noise (fix: always clean text — remove HTML, URLs, special characters, and normalize case before feeding to any model)',
            'Mistake 2: Using the same pipeline for all languages (fix: tokenization and preprocessing are language-specific; English tokenizers fail on Chinese, Arabic, or Indian languages)',
            'Mistake 3: Ignoring context window limitations (fix: understand your model\'s max sequence length; truncate or chunk long documents appropriately)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'NLP powers countless applications we use daily.',
          list: [
            'Search engines: Google and Bing use NLP to understand queries and rank relevant documents',
            'Virtual assistants: Siri, Alexa, and Google Assistant process speech and intent through NLP pipelines',
            'Machine translation: Google Translate converts text across 100+ languages using transformer models',
            'Spam detection: Email providers classify messages as spam or ham using text classification techniques',
            'Sentiment analysis: Brands monitor social media sentiment to gauge public opinion about products'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'NLP enables computers to understand and generate human language',
            'The field evolved from rule-based → statistical → neural approaches',
            'Core pipeline: raw text → preprocessing → tokenization → features → model → output',
            'Modern NLP relies on large-scale deep learning and transformer architectures',
            'Applications include search, translation, chatbots, sentiment analysis, and spam filtering'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does NLP stand for and what is its primary goal?\nAns: Natural Language Processing; to enable computers to understand, interpret, and generate human language.',
            'Q2: Name the three major eras of NLP development.\nAns: Rule-based (1950s–1980s), Statistical (1990s–2010s), and Neural/Deep Learning (2013–present).',
            'Q3: Why is preprocessing important in NLP pipelines?\nAns: Raw text contains noise (HTML, URLs, special characters, inconsistent case) that degrades model performance; cleaning improves accuracy.'
          ]
        }
      ]
    },
    tokenization: {
      title: 'Tokenization',
      subtitle: 'Breaking text into meaningful units for processing',
      sections: [
        {
          heading: 'What is Tokenization?',
          text: '<strong>Tokenization</strong> is the process of splitting raw text into smaller units called tokens. Tokens can be words, subwords, characters, or sentences. It is the first essential step in any NLP pipeline because models cannot process raw text directly — they need discrete units to operate on.',
          list: [
            'Word tokenization splits text on whitespace and punctuation: "Hello world!" → ["Hello", "world", "!"]',
            'Subword tokenization breaks rare words into smaller known pieces: "unhappiness" → ["un", "happiness"]',
            'Character tokenization splits into individual letters: "cat" → ["c", "a", "t"]',
            'Sentence tokenization splits paragraphs into sentences for document-level processing'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Tokenization strategies balance vocabulary size and sequence length.',
          example: {
            title: 'Example: Comparing Tokenization Types',
            code: 'Input: "Tokenization is important!!!"\n\nWord-level:\n  ["Tokenization", "is", "important", "!!!"]\n  Vocab size: ~50,000 words\n  Problem: OOV words like "Tokenization" if not in vocab\n\nSubword (BPE):\n  ["Token", "ization", "is", "important", "!!!"]\n  Vocab size: ~30,000 subwords\n  Advantage: handles "Tokenization" via known subwords\n\nCharacter-level:\n  ["T", "o", "k", "e", "n", "i", "z", "a", "t", "i", "o", "n", ...]\n  Vocab size: ~100 characters\n  Problem: very long sequences, weak semantic signals',
            output: 'Subword tokenization is the modern standard — it balances compact vocabulary with the ability to represent any word.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing popular tokenization algorithms.',
          table: {
            headers: ['Tokenizer', 'Unit', 'Algorithm', 'Used In', 'Strength'],
            rows: [
              ['Whitespace', 'Words', 'Split on spaces', 'Baselines, simple tasks', 'Fast, intuitive'],
              ['Treebank', 'Words', 'Linguistic rules', 'NLTK, research', 'Handles punctuation well'],
              ['WordPiece', 'Subwords', 'Greedy merge', 'BERT, DistilBERT', 'Good for morphologically rich languages'],
              ['BPE', 'Subwords', 'Byte-pair encoding', 'GPT-2, RoBERTa, LLaMA', 'Efficient, widely adopted'],
              ['SentencePiece', 'Subwords', 'Unigram LM', 'XLNet, T5, ALBERT', 'Language-agnostic, no pre-tokenization'],
              ['Unigram', 'Subwords', 'Probabilistic segmentation', 'SentencePiece backend', 'Handles noise better than BPE']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating tokenization as language-universal (fix: use language-specific tokenizers; English BPE fails on Chinese characters or Hindi script)',
            'Mistake 2: Ignoring the <unk> token problem (fix: prefer subword tokenizers over word-level to minimize unknown tokens; BPE and WordPiece reduce OOV rate dramatically)',
            'Mistake 3: Forgetting to preserve special tokens (fix: always reserve tokens for <pad>, [CLS], [SEP], [MASK] when using transformer models; mismatched special tokens cause errors)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Tokenization directly impacts model performance in production.',
          list: [
            'GPT models use BPE tokenization: a single word like "tokenization" may become 2–3 subword tokens, affecting cost and context window usage',
            'Multilingual models like mBERT use WordPiece to handle 104 languages with a shared vocabulary',
            'Search engines tokenize queries and documents differently: query tokenization must handle spelling errors and abbreviations',
            'Clinical NLP systems use specialized tokenizers that preserve medical terms and dosage expressions (e.g., "5mg/day")'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Tokenization converts raw text into discrete tokens (words, subwords, or characters)',
            'Word-level tokenization is simple but suffers from out-of-vocabulary words',
            'Subword tokenization (BPE, WordPiece, SentencePiece) is the modern standard',
            'Each tokenizer algorithm has different strengths: BPE for efficiency, WordPiece for BERT, SentencePiece for multilingual tasks',
            'Tokenization must be matched to the language and model architecture'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main disadvantage of word-level tokenization?\nAns: It cannot handle out-of-vocabulary words — any unseen word becomes an <unk> token, losing information.',
            'Q2: Which tokenization algorithm does GPT-2 use?\nAns: Byte-Pair Encoding (BPE).',
            'Q3: Why is SentencePiece considered language-agnostic?\nAns: It operates directly on raw text without language-specific pre-tokenization (like whitespace splitting), making it work across scripts and languages.'
          ]
        }
      ]
    },
    'text-preprocessing': {
      title: 'Text Preprocessing',
      subtitle: 'Cleaning and normalizing raw text for NLP pipelines',
      sections: [
        {
          heading: 'What is Text Preprocessing?',
          text: '<strong>Text preprocessing</strong> is the process of cleaning and transforming raw text into a consistent, usable format before tokenization and modeling. Raw text from the web, social media, or documents contains noise — HTML tags, URLs, emojis, inconsistent casing, and special characters — that degrades model performance if left unhandled.',
          list: [
            'Lowercasing normalizes text to a single case for consistency, though case can carry meaning ("US" vs "us")',
            'Removing URLs, emails, and HTML tags eliminates non-linguistic noise common in web-scraped data',
            'Removing or normalizing special characters and emojis prevents token pollution',
            'Stopword removal and spelling correction reduce vocabulary noise and improve feature quality'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Preprocessing follows a pipeline: clean first, normalize second, structure last.',
          example: {
            title: 'Example: Complete Preprocessing Pipeline',
            code: 'Raw input:\n  "Check out https://example.com!!! NLP is AWESOME 😊🔥 #AI"\n\nStep 1 — Lowercase:\n  "check out https://example.com!!! nlp is awesome 😊🔥 #ai"\n\nStep 2 — Remove URLs:\n  "check out !!! nlp is awesome 😊🔥 #ai"\n\nStep 3 — Remove special chars & hashtags:\n  "check out nlp is awesome"\n\nStep 4 — Remove stopwords:\n  "check nlp awesome"\n\nStep 5 — Tokenize:\n  ["check", "nlp", "awesome"]',
            output: 'Clean tokens improve model accuracy by 5–15% on classification tasks.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'When to apply each preprocessing step.',
          table: {
            headers: ['Step', 'When to Apply', 'When to Skip', 'Impact'],
            rows: [
              ['Lowercasing', 'General text classification, search', 'NER, sentiment (case matters)', 'Reduces vocab size by ~30%'],
              ['Remove URLs', 'Social media, web text', 'URL classification tasks', 'Eliminates non-semantic tokens'],
              ['Remove punctuation', 'BoW, TF-IDF models', 'Transformer models (keep structure)', 'Simplifies tokenization'],
              ['Remove stopwords', 'Traditional ML (SVM, NB)', 'Deep learning, language models', 'May hurt context in transformers'],
              ['Spelling correction', 'User-generated content', 'Clean corpora, legal/medical text', 'Fixes OOV and noise'],
              ['Lemmatization', 'Information retrieval, topic modeling', 'Sentiment analysis, NER', 'Reduces word forms to roots']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying the same preprocessing to all tasks (fix: sentiment analysis needs punctuation and case; NER needs capitalization; only remove stopwords for traditional ML, not transformers)',
            'Mistake 2: Over-cleaning and losing semantic signals (fix: do not remove all punctuation blindly — "not good!" vs "not good." vs "not good?" carry different intensities; preserve emoticons in sentiment tasks)',
            'Mistake 3: Forgetting to handle encoding issues (fix: always normalize to UTF-8; fix mojibake and mixed encodings before any other step; invalid bytes break tokenizers)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Preprocessing choices directly affect production model accuracy.',
          list: [
            'Social media sentiment analysis: remove URLs and normalize emojis, but preserve exclamation marks and emoticons as sentiment signals',
            'Resume parsing: remove headers and formatting artifacts, but preserve section boundaries (Education, Experience) for information extraction',
            'Medical NLP: do not lemmatize drug names or dosages; "5mg" and "50mg" are completely different; preserve exact casing for abbreviations',
            'Legal document processing: maintain paragraph and clause structure; do not strip numbering systems like "Section 3.2(a)"'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Text preprocessing cleans raw text before modeling: lowercasing, URL removal, punctuation handling, stopword removal',
            'The preprocessing pipeline must be task-specific — not one-size-fits-all',
            'Transformers generally need less preprocessing than traditional ML models',
            'Over-cleaning can remove useful signals (case, punctuation, emojis)',
            'Always normalize encoding to UTF-8 before any other step'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why should you be careful about lowercasing in Named Entity Recognition?\nAns: Case carries important information — "Apple" (company) vs "apple" (fruit); lowercasing makes them indistinguishable.',
            'Q2: In which type of models is stopword removal generally NOT recommended?\nAns: Deep learning and transformer models — they rely on full context and stopwords carry syntactic meaning.',
            'Q3: What is the first preprocessing step you should always perform?\nAns: Encoding normalization to UTF-8 to prevent mojibake and byte errors downstream.'
          ]
        }
      ]
    },
    'ngram-models': {
      title: 'N-Gram Language Models',
      subtitle: 'Predicting the next word using local context',
      sections: [
        {
          heading: 'What are N-Gram Models?',
          text: 'An <strong>n-gram language model</strong> predicts the probability of a word given the previous N-1 words. It is a statistical approach to language modeling based on counting co-occurrences in a corpus. N-grams are the foundation of traditional NLP and illustrate core concepts like probability estimation and smoothing that remain relevant today.',
          list: [
            'Unigram (N=1): predicts each word independently — P(word)',
            'Bigram (N=2): predicts a word given the previous word — P(wordₙ | wordₙ₋₁)',
            'Trigram (N=3): predicts a word given the previous two words — P(wordₙ | wordₙ₋₂, wordₙ₋₁)',
            'Higher-order n-grams capture more context but suffer from data sparsity'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core n-gram probability formula with maximum likelihood estimation.',
          example: {
            title: 'Example: Bigram Probability Calculation',
            code: 'Training corpus:\n  "The cat sat on the mat"\n  "The dog sat on the floor"\n\nBigram count table:\n  (The, cat) = 1    (cat, sat) = 1\n  (The, dog) = 1    (dog, sat) = 1\n  (sat, on) = 2     (on, the) = 2\n  (the, mat) = 1    (the, floor) = 1\n\nP("cat" | "The") = count("The cat") / count("The")\n                 = 1 / 2 = 0.5\n\nP("sat" | "cat") = count("cat sat") / count("cat")\n                 = 1 / 1 = 1.0\n\nSentence probability:\n  P("The cat sat") = P(The) × P(cat|The) × P(sat|cat)\n                   ≈ 0.33 × 0.5 × 1.0 = 0.165',
            output: 'Bigrams capture simple local dependencies but fail on unseen word pairs.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing n-gram orders and their trade-offs.',
          table: {
            headers: ['Aspect', 'Unigram', 'Bigram', 'Trigram', '4-gram+'],
            rows: [
              ['Context', 'None', '1 previous word', '2 previous words', '3+ previous words'],
              ['Accuracy', 'Very low', 'Low', 'Moderate', 'Higher but sparse'],
              ['Data needs', 'Minimal', 'Small', 'Moderate', 'Very large corpus'],
              ['Sparsity', 'None', 'Moderate', 'Severe', 'Critical'],
              ['Storage', 'Vocabulary', 'Vocabulary²', 'Vocabulary³', 'Vocabulary⁴'],
              ['Use case', 'Baseline', 'Simple tasks', 'Speech recognition', 'Rarely used today']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring zero-probability n-grams (fix: apply smoothing — Add-1 (Laplace), Good-Turing, or Kneser-Ney smoothing — to assign non-zero probabilities to unseen n-grams)',
            'Mistake 2: Using high-order n-grams on small corpora (fix: trigrams need millions of tokens to be reliable; use bigrams for small datasets and trigrams only for large corpora like Wikipedia)',
            'Mistake 3: Forgetting to pad sentence boundaries (fix: always add <s> and </s> tokens to capture n-grams at the start and end of sentences; otherwise P(first-word|context) is undefined)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'N-gram models powered NLP systems before transformers existed and still appear in modern pipelines.',
          list: [
            'Spell checking: Microsoft Word and early search engines used trigram models to rank spelling corrections by probability',
            'Speech recognition: traditional ASR systems (Sphinx, HTK) used n-gram language models to guide acoustic model decoding',
            'Autocomplete: early smartphone keyboards predicted the next word using compressed bigram and trigram models',
            'Machine translation: IBM statistical MT models (1990s) relied heavily on n-gram language models for fluency scoring'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'N-gram models predict the next word based on the previous N-1 words',
            'Probability is estimated by counting co-occurrences in a training corpus',
            'Higher N captures more context but suffers from data sparsity and storage explosion',
            'Smoothing (Add-1, Kneser-Ney) is essential to handle unseen n-grams',
            'N-grams are foundational but largely replaced by neural language models in modern NLP'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the formula for a bigram probability P(wₙ | wₙ₋₁)?\nAns: P(wₙ | wₙ₋₁) = count(wₙ₋₁, wₙ) / count(wₙ₋₁).',
            'Q2: Why do high-order n-grams suffer from data sparsity?\nAns: As N increases, the number of possible n-gram combinations grows exponentially (V^N), so most combinations never appear in training.',
            'Q3: What is the purpose of smoothing in n-gram models?\nAns: To assign non-zero probabilities to n-grams that were not seen in the training corpus, preventing the model from assigning zero probability to valid sentences.'
          ]
        }
      ]
    },
    'text-classification': {
      title: 'Text Classification',
      subtitle: 'Assigning predefined categories to text documents',
      sections: [
        {
          heading: 'What is Text Classification?',
          text: '<strong>Text classification</strong> is the task of automatically assigning one or more predefined categories or labels to a text document. It is one of the most common and practical NLP applications, powering spam detection, sentiment analysis, topic labeling, intent recognition, and content moderation.',
          list: [
            'Binary classification: two classes — spam vs ham, positive vs negative sentiment',
            'Multi-class classification: one label from many categories — news topic categories (sports, politics, tech)',
            'Multi-label classification: multiple labels per document — a blog post can be both "AI" and "Healthcare"',
            'Classifiers use features from text (words, TF-IDF, embeddings) to learn decision boundaries'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Naive Bayes is the classic probabilistic classifier for text.',
          example: {
            title: 'Example: Naive Bayes Spam Classification',
            code: 'Training:\n  Spam emails: 1000 docs\n  Ham emails: 1000 docs\n\nLearned probabilities:\n  P(spam) = 1000 / 2000 = 0.5\n  P(ham) = 1000 / 2000 = 0.5\n\nWord probabilities from spam:\n  P("free" | spam) = 800 / total_spam_words = 0.08\n  P("meeting" | spam) = 10 / total_spam_words = 0.001\n\nPrediction for "Free offer today":\n  P(spam | text) ∝ P(spam) × P(free|spam) × P(offer|spam) × P(today|spam)\n                ∝ 0.5 × 0.08 × 0.03 × 0.01 = 0.000012\n\n  P(ham | text) ∝ 0.5 × 0.001 × 0.005 × 0.02 = 0.00000005\n\n→ Classify as SPAM (higher probability)',
            output: 'Naive Bayes is fast, interpretable, and surprisingly effective for high-dimensional sparse text data.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing text classification algorithms.',
          table: {
            headers: ['Algorithm', 'Type', 'Strengths', 'Weaknesses', 'Best For'],
            rows: [
              ['Naive Bayes', 'Probabilistic', 'Fast, interpretable, works with small data', 'Independence assumption', 'Spam, topic labeling'],
              ['Logistic Regression', 'Linear', 'Fast, probabilistic output, regularized', 'Cannot capture non-linear patterns', 'Baseline for most tasks'],
              ['SVM', 'Kernel-based', 'Works well in high dimensions', 'Slow on large datasets', 'Short text, document classification'],
              ['Random Forest', 'Ensemble', 'Handles feature interactions', 'Overfits on sparse text', 'When features are dense'],
              ['CNN', 'Neural', 'Captures local n-gram patterns', 'Needs more data', 'Sentence-level classification'],
              ['BERT', 'Transformer', 'Context-aware, state-of-the-art', 'Slow, compute-heavy', 'High-accuracy requirements']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using accuracy as the metric on imbalanced datasets (fix: use F1-score, precision/recall, or AUC-ROC; accuracy is misleading when 95% of emails are ham and the classifier labels everything as ham)',
            'Mistake 2: Leaking test data into preprocessing (fix: fit TF-IDF vectorizers and preprocessing pipelines only on training data; never use test set statistics during training or feature extraction)',
            'Mistake 3: Ignoring class imbalance (fix: use class weights, oversampling (SMOTE), or undersampling; for extreme imbalance, consider focal loss or threshold tuning)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Text classification is everywhere in production systems.',
          list: [
            'Email filtering: Gmail and Outlook classify billions of emails daily into spam, promotions, social, and primary categories',
            'Sentiment analysis: Amazon and Flipkart classify product reviews as positive, neutral, or negative to surface helpful feedback',
            'Content moderation: Facebook and Twitter classify posts for hate speech, misinformation, and policy violations using multi-label classifiers',
            'Customer support: Zendesk and Freshdesk automatically classify support tickets by urgency and department (billing, technical, sales)',
            'News aggregation: Google News classifies articles into topics and ranks them by relevance using text classification pipelines'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Text classification assigns predefined labels to documents — binary, multi-class, or multi-label',
            'Naive Bayes is a classic probabilistic classifier based on word frequencies and conditional independence',
            'Feature representation matters: BoW, TF-IDF, and embeddings are common choices',
            'Modern approaches use CNNs and transformers (BERT) for state-of-the-art accuracy',
            'Always evaluate with appropriate metrics (F1, not accuracy) and avoid data leakage'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the "naive" assumption in Naive Bayes?\nAns: It assumes all features (words) are conditionally independent given the class label.',
            'Q2: Why is accuracy a poor metric for spam classification?\nAns: Datasets are usually imbalanced (most emails are ham); a classifier that labels everything as ham achieves high accuracy but fails completely.',
            'Q3: What is the difference between multi-class and multi-label classification?\nAns: Multi-class assigns exactly one label from many categories; multi-label assigns zero or more labels per document.'
          ]
        }
      ]
    }
  }
};
