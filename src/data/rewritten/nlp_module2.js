export const nlpStructure = {
  module2: {
    title: 'Module 2: NLP Techniques & Applications',
    topics: [
      { id: 'sentiment-analysis', title: 'Sentiment Analysis' },
      { id: 'tfidf', title: 'TF-IDF' },
      { id: 'word2vec-nlp', title: 'Word2Vec for NLP' },
      { id: 'sequence-tagging', title: 'Sequence Tagging' },
      { id: 'dependency-parsing', title: 'Dependency Parsing' },
      { id: 'constituency-parsing', title: 'Constituency Parsing' },
      { id: 'machine-translation', title: 'Machine Translation' },
      { id: 'text-summarization', title: 'Text Summarization' },
      { id: 'question-answering', title: 'Question Answering' },
    ]
  }
};

export const nlpContent = {
  module2: {
    'sentiment-analysis': {
      title: 'Sentiment Analysis',
      subtitle: 'Detecting emotion and opinion in text',
      sections: [
        {
          heading: 'What is Sentiment Analysis?',
          text: 'Sentiment analysis (or opinion mining) is the NLP task of identifying the emotional tone behind a piece of text. It classifies text as positive, negative, or neutral, and can also detect finer emotions like anger, joy, or sadness.',
          list: [
            'Binary classification: positive vs negative sentiment',
            'Multi-class: positive, negative, neutral, or emotion labels',
            'Aspect-based: detects sentiment toward specific product features',
            'Intensity scoring: rates how strong the sentiment is (e.g., +0.8 vs +0.3)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Lexicon-based sentiment scores words individually, while deep learning models learn sentiment from context.',
          example: {
            title: 'Example: Lexicon vs Contextual Model',
            code: `Lexicon approach:
  "not bad" → "not"(-0.5) + "bad"(-0.8) = -1.3 (WRONG)

Contextual model (BERT):
  "not bad" → context embedding → "mildly positive" (CORRECT)

Fine-grained example:
  "The movie was terrible but the acting was brilliant"
  → Aspect 1 (movie): negative
  → Aspect 2 (acting): positive`,
            output: 'Contextual models handle negation and mixed sentiment better than simple lexicons.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Sentiment analysis approaches vary in complexity and accuracy.',
          table: {
            headers: ['Aspect', 'Lexicon-Based', 'ML-Based', 'Deep Learning'],
            rows: [
              ['Method', 'Predefined word lists', 'SVM, Naive Bayes on features', 'RNN, LSTM, BERT'],
              ['Context handling', 'Poor (no context awareness)', 'Limited (feature engineering)', 'Excellent (learns context)'],
              ['Negation', 'Fails on "not good"', 'Manual rules needed', 'Handles naturally'],
              ['Training data', 'No training needed', 'Requires labeled dataset', 'Requires large labeled dataset'],
              ['Speed', 'Very fast', 'Fast', 'Slower (GPU recommended)'],
              ['Best for', 'Quick prototypes, domains with stable vocab', 'Medium-scale classification', 'Production, nuanced text']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring negation (fix: use contextual models like BERT that naturally handle "not good" vs "good")',
            'Mistake 2: Treating all domains the same (fix: retrain or fine-tune on domain-specific text; financial sentiment differs from social media)',
            'Mistake 3: Assuming 100% accuracy is possible (fix: human agreement on sentiment is ~80%; set realistic expectations at 75–85%)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Sentiment analysis powers decision-making across industries.',
          list: [
            'Social media monitoring: brands track customer reactions to products and campaigns in real time',
            'Financial trading: hedge funds analyze news and earnings call sentiment to predict stock movement',
            'Customer support: triage tickets by urgency based on customer frustration level',
            'Political analysis: gauge public opinion on policies and candidates from news and tweets'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Sentiment analysis detects emotion and opinion in text',
            'Levels: document-level, sentence-level, aspect-level',
            'Lexicon methods are fast but brittle; deep learning captures context',
            'Negation and sarcasm are key challenges',
            'Domain adaptation is essential for accurate results'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does lexicon-based sentiment analysis fail on "not bad"?\nAns: It adds negative scores for both words without understanding that "not bad" is mildly positive in context.',
            'Q2: What is aspect-based sentiment analysis?\nAns: It identifies sentiment toward specific features (e.g., "battery life" in a phone review) rather than the whole document.',
            'Q3: Why is domain adaptation important?\nAns: Words carry different sentiment in different contexts; "unpredictable" is negative for brakes but positive for movies.'
          ]
        }
      ]
    },
    tfidf: {
      title: 'TF-IDF',
      subtitle: 'Term Frequency — Inverse Document Frequency',
      sections: [
        {
          heading: 'What is TF-IDF?',
          text: 'TF-IDF is a statistical measure that evaluates how important a word is to a document within a collection (corpus). It balances how often a word appears in a document against how common it is across all documents.',
          list: [
            'TF (Term Frequency): how often a word appears in a document',
            'IDF (Inverse Document Frequency): how rare the word is across the corpus',
            'TF-IDF = TF × IDF: words frequent in a document but rare in the corpus score highest',
            'Used for: information retrieval, text classification, keyword extraction, document similarity'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'TF-IDF assigns higher weight to words that are distinctive to a document.',
          example: {
            title: 'Example: TF-IDF Calculation',
            code: `Corpus: 3 documents about animals

Doc1: "The cat sat on the mat" (8 words)
  TF("cat") = 1/8 = 0.125
  DF("cat") = 2 (appears in Doc1, Doc2)
  IDF("cat") = log(3/2) ≈ 0.176
  TF-IDF("cat") = 0.125 × 0.176 ≈ 0.022

Doc2: "The dog chased the cat" (6 words)
  TF("dog") = 1/6 ≈ 0.167
  DF("dog") = 1 (only in Doc2)
  IDF("dog") = log(3/1) ≈ 0.477
  TF-IDF("dog") = 0.167 × 0.477 ≈ 0.080 ← HIGHEST

Doc3: "The bird flew high" (5 words)
  TF("the") = 1/5 = 0.2
  DF("the") = 3 (appears in all docs)
  IDF("the") = log(3/3) = 0
  TF-IDF("the") = 0.2 × 0 = 0 ← STOPWORD`,
            output: '"dog" gets the highest TF-IDF because it is unique to Doc2; "the" gets zero because it appears everywhere.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'TF-IDF variants and alternatives serve different needs.',
          table: {
            headers: ['Aspect', 'Raw Count', 'TF-IDF', 'BM25'],
            rows: [
              ['Formula', 'Simple word count', 'TF × log(N/DF)', 'Optimized TF-IDF with length normalization'],
              ['Normalization', 'None', 'None', 'Document length compensated'],
              ['Stopwords', 'Dominate scores', 'Downweighted to near zero', 'Downweighted'],
              ['Rare words', 'Underrepresented', 'Boosted', 'Boosted with saturation'],
              ['Use case', 'Simple baselines', 'Keyword extraction, classification', 'Search engines, ranking'],
              ['Limitation', 'Biased toward long documents', 'No semantic meaning', 'No semantic meaning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not removing stopwords before TF-IDF (fix: stopwords will have IDF ≈ 0, but removing them reduces noise and dimensionality)',
            'Mistake 2: Using TF-IDF for semantic similarity (fix: TF-IDF captures lexical overlap, not meaning; use word embeddings or BERT for semantic tasks)',
            'Mistake 3: Ignoring document length (fix: normalize TF or use BM25 for corpora with highly variable document lengths)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'TF-IDF remains a workhorse in text processing pipelines.',
          list: [
            'Search engines: ranking documents by relevance to a query term',
            'News aggregation: identifying key topics in articles by extracting top TF-IDF terms',
            'Plagiarism detection: comparing TF-IDF vectors to find similar documents',
            'Spam filtering: classifying emails by important keyword presence'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'TF-IDF = Term Frequency × Inverse Document Frequency',
            'High score = frequent in document, rare in corpus',
            'Stopwords and common terms are automatically downweighted',
            'TF-IDF is lexical, not semantic — it measures word overlap, not meaning',
            'BM25 is an improved variant used in modern search engines'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does "the" get a TF-IDF score of zero?\nAns: It appears in every document, so IDF = log(N/N) = log(1) = 0.',
            'Q2: What is the main limitation of TF-IDF for semantic tasks?\nAns: It only captures word occurrence patterns, not meaning; "car" and "automobile" are treated as unrelated.',
            'Q3: When should you prefer BM25 over standard TF-IDF?\nAns: When documents vary greatly in length and you need more nuanced ranking behavior.'
          ]
        }
      ]
    },
    'word2vec-nlp': {
      title: 'Word2Vec for NLP',
      subtitle: 'Dense word embeddings from context',
      sections: [
        {
          heading: 'What is Word2Vec?',
          text: 'Word2Vec is a shallow neural network model that learns dense vector representations (embeddings) of words from large text corpora. Words with similar contexts end up with similar vectors, capturing semantic and syntactic relationships.',
          list: [
            'Two architectures: CBOW (predicts target from context) and Skip-gram (predicts context from target)',
            'Trained via sliding context windows over raw text',
            'Output: fixed-size dense vectors (typically 100–300 dimensions)',
            'Enables vector arithmetic: king − man + woman ≈ queen'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Word2Vec maximizes the probability of context words given a target word (Skip-gram) or vice versa (CBOW).',
          example: {
            title: 'Example: Skip-gram with Negative Sampling',
            code: `Corpus: "The quick brown fox jumps over the lazy dog"
Window = 2, Target = "fox"

Context (positive pairs):
  (fox, quick), (fox, brown), (fox, jumps), (fox, over)

Negative sampling (5 negative samples per positive):
  (fox, banana), (fox, quantum), (fox, table), (fox, swim), (fox, blue)

Objective for one positive pair (fox, jumps):
  log σ(v_fox · v_jumps) + Σ log σ(-v_fox · v_neg)

Where σ = sigmoid function.

Result after training:
  v_fox · v_wolf ≈ 0.85 (high similarity)
  v_fox · v_table ≈ 0.02 (low similarity)`,
            output: 'Negative sampling makes training efficient by updating only a small subset of weights per example.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CBOW and Skip-gram serve different needs in embedding quality.',
          table: {
            headers: ['Aspect', 'CBOW', 'Skip-gram'],
            rows: [
              ['Prediction direction', 'Context → Target word', 'Target word → Context'],
              ['Training speed', 'Faster (averages context vectors)', 'Slower (more updates)'],
              ['Rare words', 'Poor representation', 'Better representation'],
              ['Large corpora', 'Performs well', 'Good but slower'],
              ['Small corpora', 'Better generalization', 'May overfit rare words'],
              ['Best for', 'Frequent words, syntactic tasks', 'Rare words, semantic tasks']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting Word2Vec to solve all NLP tasks (fix: Word2Vec provides static embeddings; modern tasks need contextual embeddings from BERT or ELMo)',
            'Mistake 2: Using too small a corpus (fix: Word2Vec needs millions of words to learn meaningful relationships; use pre-trained embeddings for small datasets)',
            'Mistake 3: Not handling out-of-vocabulary words (fix: subword models like FastText or BPE-based embeddings handle OOV better than Word2Vec)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Word2Vec embeddings power many downstream NLP systems.',
          list: [
            'Search and recommendation: query expansion by finding semantically similar terms',
            'Document classification: averaging word vectors to create document representations',
            'Named entity recognition: using word embeddings as input features to sequence taggers',
            'Machine translation: initializing embedding layers with pre-trained Word2Vec for faster convergence'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Word2Vec learns dense word vectors from context windows',
            'CBOW is faster and better for frequent words',
            'Skip-gram is slower but better for rare words',
            'Vector arithmetic captures analogies and relationships',
            'Static embeddings are surpassed by contextual embeddings for many tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does Skip-gram perform better on rare words than CBOW?\nAns: Skip-gram updates the target word vector directly from each context occurrence; CBOW averages context, diluting rare word signals.',
            'Q2: What is the purpose of negative sampling?\nAns: It avoids computing the full softmax over the vocabulary (expensive) by updating only a few negative examples.',
            'Q3: What is a key limitation of Word2Vec embeddings?\nAns: They are static — "bank" in "river bank" and "bank account" get the same vector regardless of context.'
          ]
        }
      ]
    },
    'sequence-tagging': {
      title: 'Sequence Tagging',
      subtitle: 'Labeling each element in a sequence',
      sections: [
        {
          heading: 'What is Sequence Tagging?',
          text: 'Sequence tagging is the NLP task of assigning a label to each element (token) in an input sequence. Unlike classification, which labels the whole text, sequence tagging labels every individual token.',
          list: [
            'POS tagging: labels each word with its grammatical role (noun, verb, adjective)',
            'NER: labels tokens as person, organization, location, or other entity types',
            'Chunking: groups words into syntactic phrases (noun phrases, verb phrases)',
            'BIO tagging scheme: B (begin), I (inside), O (outside) marks entity boundaries'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Conditional Random Fields (CRF) model the joint probability of the entire tag sequence, capturing dependencies between neighboring labels.',
          example: {
            title: 'Example: BIO Tagging for NER',
            code: `Sentence: "Barack Obama visited Paris"

BIO tagging:
  Barack  → B-PER (begin person)
  Obama   → I-PER (inside person)
  visited → O     (outside entity)
  Paris   → B-LOC (begin location)

CRF score for a tag sequence y:
  score(y|x) = Σ [transition(y_{t-1}, y_t) + emission(x_t, y_t)]

Where:
  transition = learned tag-to-tag compatibility
  emission = compatibility of word with tag

Constraint: I-PER can only follow B-PER or I-PER`,
            output: 'CRF ensures valid tag sequences (e.g., I-PER never appears without B-PER).',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Sequence tagging models differ in how they capture context.',
          table: {
            headers: ['Aspect', 'HMM', 'CRF', 'BiLSTM-CRF', 'BERT'],
            rows: [
              ['Type', 'Generative', 'Discriminative', 'Neural + CRF', 'Transformer'],
              ['Dependencies', 'Limited (previous tag only)', 'Arbitrary features', 'Bidirectional context + CRF', 'Full context'],
              ['Features', 'Word + previous tag', 'Rich handcrafted or learned', 'Learned representations', 'Contextual embeddings'],
              ['Accuracy', '~90%', '~95%', '~97%', '~98%'],
              ['Speed', 'Fast', 'Moderate', 'Moderate', 'Slow (GPU needed)'],
              ['Best for', 'Simple baselines', 'Feature-rich domains', 'Production NER/POS', 'State-of-the-art accuracy']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating sequence tagging as independent classification (fix: use CRF or structured prediction to model tag dependencies; "I-PER" must follow "B-PER")',
            'Mistake 2: Ignoring tag imbalance (fix: "O" (outside) tags dominate; use weighted loss or sampling to prevent models from predicting all "O")',
            'Mistake 3: Evaluating with per-token accuracy instead of per-entity F1 (fix: a model can get 90% token accuracy by tagging everything "O"; report entity-level precision, recall, and F1)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Sequence tagging is foundational to information extraction systems.',
          list: [
            'Legal documents: extracting parties, dates, and obligations from contracts',
            'Healthcare: identifying symptoms, medications, and dosages from clinical notes',
            'Finance: extracting company names, monetary values, and dates from news and filings',
            'Customer support: pulling order numbers, product names, and issue types from tickets'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Sequence tagging labels every token in a sequence',
            'Common tasks: POS tagging, NER, chunking',
            'BIO tagging marks entity beginnings, continuations, and non-entities',
            'CRF models tag dependencies; BiLSTM-CRF and BERT are modern standards',
            'Always evaluate with entity-level F1, not token accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is token accuracy misleading for NER evaluation?\nAns: Most tokens are "O"; a model predicting all "O" achieves high token accuracy but zero entity recall.',
            'Q2: What does the BIO scheme prevent?\nAns: It prevents ambiguous entity boundaries by explicitly marking beginnings and continuations.',
            'Q3: What is the advantage of BiLSTM-CRF over standalone CRF?\nAns: BiLSTM learns rich contextual representations automatically, while CRF enforces valid tag transitions.'
          ]
        }
      ]
    },
    'dependency-parsing': {
      title: 'Dependency Parsing',
      subtitle: 'Modeling grammatical relationships between words',
      sections: [
        {
          heading: 'What is Dependency Parsing?',
          text: 'Dependency parsing analyzes the grammatical structure of a sentence by identifying directed relationships (dependencies) between words. Each word (except the root) has exactly one head word it depends on, labeled with a grammatical relation type.',
          list: [
            'Identifies head-modifier relationships in a sentence',
            'Labels relations: nsubj (nominal subject), dobj (direct object), amod (adjectival modifier), etc.',
            'Produces a tree structure (single root, connected, no cycles)',
            'Used for: information extraction, question answering, machine translation, relation extraction'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A valid dependency tree must be projective (no crossing edges) for many algorithms, though modern parsers handle non-projective trees.',
          example: {
            title: 'Example: Dependency Parse',
            code: `Sentence: "The cat sat on the mat"

Dependencies:
  sat    → ROOT (root verb)
  cat    → nsubj(sat) (subject of sat)
  The    → det(cat) (determiner of cat)
  mat    → nmod(sat) (nominal modifier of sat)
  on     → case(mat) (case marker of mat)
  the    → det(mat) (determiner of mat)

Tree structure:
        sat (ROOT)
       /  \
    nsubj  nmod
     /      \
   cat     mat
   / \     / \
 det  .  case det
 The     on  the`,
            output: 'Dependency trees capture who did what to whom in a compact, word-to-word graph.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Dependency and constituency parsing represent syntax differently.',
          table: {
            headers: ['Aspect', 'Dependency Parsing', 'Constituency Parsing'],
            rows: [
              ['Unit of analysis', 'Word-to-word relations', 'Phrase structure (constituents)'],
              ['Output', 'Directed tree (arcs)', 'Hierarchical tree (nested phrases)'],
              ['Root', 'Single root verb', 'Root is the full sentence (S)'],
              ['Relation labels', 'Grammatical functions (nsubj, dobj)', 'Syntactic categories (NP, VP)'],
              ['Best for', 'Relation extraction, information extraction', 'Grammar checking, sentence generation'],
              ['Complexity', 'Generally faster (O(n) to O(n³))', 'Slower (O(n³) to O(n⁶))']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing dependency labels (fix: nsubj is the subject; dobj is the direct object; iobj is the indirect object — study Universal Dependencies guidelines for standard labels)',
            'Mistake 2: Assuming all languages have the same dependency patterns (fix: word order varies; subject-verb-object vs subject-object-verb changes parser behavior)',
            'Mistake 3: Using dependency trees without checking for non-projectivity (fix: for free-word-order languages like Czech or Latin, use non-projective parsers like MST or graph-based models)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Dependency parsing drives deep language understanding in applications.',
          list: [
            'Voice assistants: extracting the action and target from commands like "remind me to call mom tomorrow"',
            'Relation extraction: identifying subject-verb-object triples for knowledge graph construction',
            'Machine translation: reordering source dependencies to match target language word order',
            'Text simplification: breaking complex sentences by detaching subordinate clauses'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Dependency parsing finds word-to-word grammatical relations',
            'Each word has one head; relations are labeled (nsubj, dobj, amod)',
            'Produces a directed tree with a single root',
            'Faster and more compact than constituency parsing',
            'Universal Dependencies is the standard label set'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between nsubj and dobj in a dependency parse?\nAns: nsubj is the nominal subject (who performs the action); dobj is the direct object (what receives the action).',
            'Q2: Why is dependency parsing generally faster than constituency parsing?\nAns: Dependency parses are word-to-word graphs with linear or cubic complexity; constituency parsing must explore many more bracketing combinations.',
            'Q3: What is a non-projective dependency tree?\nAns: A tree where dependency arcs cross, common in languages with flexible word order.'
          ]
        }
      ]
    },
    'constituency-parsing': {
      title: 'Constituency Parsing',
      subtitle: 'Building hierarchical phrase structure trees',
      sections: [
        {
          heading: 'What is Constituency Parsing?',
          text: 'Constituency parsing (or phrase structure parsing) breaks a sentence into nested syntactic constituents — phrases like noun phrases (NP), verb phrases (VP), and prepositional phrases (PP) — arranged in a hierarchical tree.',
          list: [
            'Organizes words into nested phrases based on grammar rules',
            'Root node represents the full sentence (S)',
            'Non-terminal nodes are syntactic categories (NP, VP, PP, ADJP)',
            'Terminal nodes are the actual words (leaves of the tree)',
            'Context-Free Grammars (CFG) formalize the rewriting rules'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A CFG consists of production rules that rewrite non-terminals into sequences of terminals and non-terminals.',
          example: {
            title: 'Example: CFG Rules and Parse Tree',
            code: `Grammar rules:
  S   → NP VP
  NP  → Det N | Det ADJP N | PRP
  VP  → V NP | V PP | V NP PP
  PP  → P NP
  Det → "the" | "a"
  N   → "cat" | "mat"
  V   → "sat"
  P   → "on"
  ADJP→ "lazy"
  PRP → "it"

Sentence: "The cat sat on the mat"

Parse tree:
              S
           /     \
         NP       VP
        / \      / | \
      Det   N   V  NP  PP
      |     |   |  /\  /\
    The   cat sat Det N  P NP
                  |   |  |  /\
                the mat on Det N
                           |   |
                         the mat`,
            output: 'Constituency parsing reveals the nested phrase structure of a sentence.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Parsing algorithms trade off speed, accuracy, and grammar formalism.',
          table: {
            headers: ['Aspect', 'CKY (Dynamic Programming)', 'Shift-Reduce', 'Probabilistic CFG'],
            rows: [
              ['Approach', 'Bottom-up chart parsing', 'Greedy stack-based', 'Rule probabilities'],
              ['Speed', 'O(n³)', 'O(n)', 'O(n³)'],
              ['Accuracy', 'Exact (for given grammar)', 'Fast but less accurate', 'Handles ambiguity'],
              ['Training', 'Needs grammar rules', 'Needs annotated treebank', 'Needs treebank + rule counts'],
              ['Ambiguity', 'Returns all parses', 'One parse (greedy)', 'Returns most probable parse'],
              ['Best for', 'Small grammars, teaching', 'Production speed', 'Broad-coverage parsing']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming a single correct parse (fix: natural language is ambiguous; "I saw the man with the telescope" has two valid constituency parses)',
            'Mistake 2: Using an overly permissive grammar (fix: unrestricted CFGs over-generate; use a treebank-trained PCFG or neural parser for realistic sentences)',
            'Mistake 3: Confusing constituency with dependency (fix: constituency groups words into phrases; dependency links words directly — they answer different questions)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Constituency parsing supports tasks that need phrase-level structure.',
          list: [
            'Grammar checking: identifying malformed noun phrases or missing verb phrases',
            'Sentence generation: producing grammatically valid sentences from templates',
            'Machine translation: mapping source-language phrase structures to target-language structures',
            'Sentiment analysis: determining which noun phrase a sentiment-bearing adjective modifies'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Constituency parsing groups words into nested phrases (NP, VP, PP)',
            'Uses Context-Free Grammar production rules',
            'Produces a hierarchical tree with the sentence (S) at the root',
            'Different from dependency parsing, which links words directly',
            'PCFG and neural parsers handle ambiguity better than simple CFG'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between a terminal and a non-terminal in a constituency tree?\nAns: Terminals are the actual words (leaves); non-terminals are syntactic categories like NP and VP (internal nodes).',
            'Q2: Why does "I saw the man with the telescope" have two valid parses?\nAns: The PP "with the telescope" can attach to the verb (I used the telescope) or to the noun phrase (the man had the telescope).',
            'Q3: When is constituency parsing preferred over dependency parsing?\nAns: When you need phrase-level structure for grammar checking, sentence generation, or sentiment scope analysis.'
          ]
        }
      ]
    },
    'machine-translation': {
      title: 'Machine Translation',
      subtitle: 'Automatically translating text between languages',
      sections: [
        {
          heading: 'What is Machine Translation?',
          text: 'Machine Translation (MT) is the task of automatically converting text from one natural language (source) to another (target). Modern MT systems use deep learning, particularly encoder-decoder architectures with attention, to produce fluent and accurate translations.',
          list: [
            'Rule-based MT: uses bilingual dictionaries and hand-crafted grammar rules',
            'Statistical MT (SMT): learns translation probabilities from parallel corpora',
            'Neural MT (NMT): uses sequence-to-sequence models with attention',
            'Transformer-based MT: current state-of-the-art (Google Translate, DeepL)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Neural machine translation maximizes the conditional probability of the target sentence given the source sentence using the chain rule.',
          example: {
            title: 'Example: Encoder-Decoder with Attention',
            code: `Source: "El gato duerme" (Spanish)
Target: "The cat sleeps" (English)

Encoder (BiLSTM or Transformer):
  "El"    → h₁
  "gato"  → h₂
  "duerme" → h₃

Attention scores:
  e_{t,i} = v · tanh(W_s · s_t + W_h · h_i)
  α_{t,i} = softmax(e_t)

Context vector for step t=1 (predicting "The"):
  c₁ = Σ α_{1,i} · h_i
     ≈ 0.1·h₁(El) + 0.8·h₂(gato) + 0.1·h₃(duerme)

Decoder predicts:
  P("The" | <BOS>, c₁) → highest probability`,
            output: 'Attention lets the decoder focus on the relevant source word for each target word.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'MT paradigms differ in methodology and output quality.',
          table: {
            headers: ['Aspect', 'Rule-Based', 'Statistical (SMT)', 'Neural (NMT)'],
            rows: [
              ['Approach', 'Hand-crafted rules', 'Phrase tables + language model', 'End-to-end neural network'],
              ['Training data', 'Bilingual dictionaries', 'Large parallel corpus', 'Large parallel corpus'],
              ['Output fluency', 'Often rigid and unnatural', 'Better but still choppy', 'Fluent and natural'],
              ['Rare words', 'Handled by dictionary', 'Poor (out-of-phrase-table)', 'Poor (OOV) but subword helps'],
              ['Word reordering', 'Explicit rules', 'Distortion model', 'Learned implicitly'],
              ['Current status', 'Obsolete', 'Legacy systems', 'Dominant (Transformer-based)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Evaluating MT with word-level accuracy (fix: use BLEU, chrF, or COMET scores; human perception correlates poorly with exact word match)',
            'Mistake 2: Ignoring out-of-vocabulary words (fix: use subword tokenization (BPE, SentencePiece) so rare words are split into known pieces)',
            'Mistake 3: Translating without domain adaptation (fix: legal, medical, and technical texts need fine-tuned models; generic MT fails on specialized terminology)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Machine translation enables global communication at scale.',
          list: [
            'Real-time communication: translating messages, emails, and video subtitles instantly',
            'Content localization: adapting websites, apps, and games for international markets',
            'Multilingual customer support: routing and translating tickets across language barriers',
            'Academic research: translating scientific papers to broaden accessibility'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Machine translation converts text between languages automatically',
            'Rule-based → Statistical → Neural → Transformer evolution',
            'Attention mechanisms align source and target words dynamically',
            'Subword tokenization solves rare word problems',
            'Evaluate with BLEU, chrF, or COMET, not word accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does NMT produce more fluent output than SMT?\nAns: NMT models entire sentences holistically; SMT stitches together phrase translations, producing discontinuities.',
            'Q2: What problem does subword tokenization solve in MT?\nAns: It splits rare words into known subword units, eliminating out-of-vocabulary issues.',
            'Q3: Why is BLEU preferred over exact word match for MT evaluation?\nAns: BLEU measures n-gram overlap, tolerating valid paraphrases that exact match would penalize.'
          ]
        }
      ]
    },
    'text-summarization': {
      title: 'Text Summarization',
      subtitle: 'Condensing documents into shorter summaries',
      sections: [
        {
          heading: 'What is Text Summarization?',
          text: 'Text summarization is the task of producing a shorter version of a text while preserving its key information and meaning. It reduces reading time and helps users quickly grasp the essence of long documents.',
          list: [
            'Extractive summarization: selects and concatenates the most important sentences from the source',
            'Abstractive summarization: generates new sentences that paraphrase the source content',
            'Single-document vs multi-document summarization',
            'Query-focused: summary tailored to a specific user question'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Extractive methods score sentences by importance; abstractive methods use encoder-decoder models to generate novel text.',
          example: {
            title: 'Example: TextRank for Extractive Summarization',
            code: `Document (5 sentences):
  S1: "The economy grew by 2% this quarter."
  S2: "Unemployment fell to a record low."
  S3: "Analysts had predicted slower growth."
  S4: "Consumer spending drove the expansion."
  S5: "The stock market reacted positively."

Similarity graph (sentence nodes, cosine edges):
  S1 connected to S3 ("growth"), S4 ("economy/expansion")
  S2 connected to S5 ("market/record")

TextRank scores (PageRank on sentence graph):
  S1: 0.35 (highest — central topic)
  S4: 0.28
  S2: 0.15

Summary (top-2 sentences, extractive):
  "The economy grew by 2% this quarter. Consumer spending drove the expansion."`,
            output: 'TextRank selects sentences that are most central to the document\'s topic graph.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Extractive and abstractive approaches differ in technique and output style.',
          table: {
            headers: ['Aspect', 'Extractive', 'Abstractive'],
            rows: [
              ['Method', 'Select existing sentences', 'Generate new sentences'],
              ['Factual accuracy', 'High (directly from source)', 'Risk of hallucination'],
              ['Fluency', 'Limited by source quality', 'Can be very fluent'],
              ['Compression', 'Moderate (sentence-level)', 'High (phrase-level)'],
              ['Complexity', 'Lower (scoring + ranking)', 'Higher (seq2seq, transformers)'],
              ['Best for', 'News, reports, factual documents', 'Creative writing, conversational summaries']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Evaluating summaries with BLEU alone (fix: BLEU measures n-gram overlap, which penalizes valid paraphrasing; use ROUGE for extractive and BERTScore for abstractive)',
            'Mistake 2: Not handling document length (fix: very long documents exceed model context windows; use hierarchical summarization or sliding window approaches for long inputs)',
            'Mistake 3: Ignoring hallucination in abstractive models (fix: always fact-check generated summaries; models may invent names, dates, or numbers not present in the source)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Summarization reduces information overload across domains.',
          list: [
            'News aggregators: generating headline summaries from full articles',
            'Enterprise search: summarizing long documents for quick preview in search results',
            'Medical records: condensing lengthy patient histories for physician review',
            'Legal discovery: summarizing deposition transcripts and contract clauses'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Text summarization produces shorter versions of documents',
            'Extractive: selects sentences; Abstractive: generates new text',
            'TextRank and TF-IDF are classic extractive methods',
            'Transformer seq2seq models (BART, T5, Pegasus) dominate abstractive summarization',
            'Watch for hallucination in abstractive outputs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main risk of abstractive summarization?\nAns: Hallucination — the model may generate facts, names, or numbers not present in the source document.',
            'Q2: Why does BLEU work poorly for evaluating summaries?\nAns: Good summaries often paraphrase rather than copy exact phrases; BLEU penalizes lexical differences even when meaning is preserved.',
            'Q3: What is TextRank and how does it work?\nAns: TextRank applies PageRank to a graph of sentences connected by similarity; the highest-ranked sentences are selected for the summary.'
          ]
        }
      ]
    },
    'question-answering': {
      title: 'Question Answering',
      subtitle: 'Building systems that read and answer questions',
      sections: [
        {
          heading: 'What is Question Answering?',
          text: 'Question Answering (QA) is the NLP task of automatically producing an answer to a natural language question, typically based on a provided context (passage, document, or knowledge base). It spans from simple fact lookup to complex multi-hop reasoning.',
          list: [
            'Extractive QA: answer is a span of text directly from the context (SQuAD style)',
            'Abstractive QA: generates an answer in free-form natural language',
            'Open-domain QA: answers from a large corpus or the web without a given passage',
            'Multi-hop QA: requires reasoning across multiple documents or facts'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Extractive QA models predict the start and end positions of the answer span within the context.',
          example: {
            title: 'Example: BERT for Extractive QA',
            code: `Question: "Who wrote the Theory of Relativity?"
Context: "Albert Einstein published the Theory of Relativity in 1905, revolutionizing modern physics."

BERT input:
  [CLS] Who wrote the Theory of Relativity? [SEP]
  Albert Einstein published the Theory of Relativity in 1905, revolutionizing modern physics. [SEP]

Start logits: scores for each token being the start of answer
  "Albert" → 8.5 (highest)
  "Einstein" → 3.2
  "published" → -1.1

End logits: scores for each token being the end of answer
  "Einstein" → 7.8 (highest)
  "Albert" → 2.1

Answer span: start=Albert (index 1), end=Einstein (index 2)
  → "Albert Einstein"`,
            output: 'BERT-style QA independently scores start and end positions, then selects the best valid span.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'QA systems differ in how they retrieve and generate answers.',
          table: {
            headers: ['Aspect', 'Extractive', 'Abstractive', 'Retrieval-Augmented'],
            rows: [
              ['Answer source', 'Span from provided context', 'Generated freely', 'Retrieved docs + generation'],
              ['Factuality', 'High (grounded in text)', 'Risk of hallucination', 'Moderate to high'],
              ['Complexity', 'Lower (span prediction)', 'Higher (seq2seq)', 'Highest (retrieval + generation)'],
              ['Context required', 'Single passage', 'Can be passage or open', 'Large corpus or web'],
              ['Best for', 'Reading comprehension', 'Conversational QA', 'Open-domain knowledge'],
              ['Examples', 'SQuAD, BERT-QA', 'T5, GPT-4', 'RAG, Bing Chat']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming the answer is always in the context (fix: for unanswerable questions, models must learn to output "no answer"; SQuAD 2.0 includes unanswerable examples)',
            'Mistake 2: Not handling long contexts (fix: BERT has a 512-token limit; use sliding windows, Longformer, or hierarchical models for long documents)',
            'Mistake 3: Evaluating with exact match only (fix: use both Exact Match (EM) and F1; "USA" and "United States" are both correct but EM would reject one)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'QA systems power intelligent information access across industries.',
          list: [
            'Search engines: direct answer boxes for "what is" and "who is" queries',
            'Customer support: answering product questions from manuals and FAQ documents',
            'Healthcare: answering physician questions from clinical guidelines and research papers',
            'Education: automated tutoring systems that answer student questions from textbooks'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Question answering produces answers from context or knowledge',
            'Extractive QA selects text spans; abstractive QA generates answers',
            'BERT-style models score start and end positions independently',
            'Unanswerable questions and long contexts are key challenges',
            'Evaluate with Exact Match and F1, not just exact string comparison'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between extractive and abstractive QA?\nAns: Extractive answers are direct text spans from the context; abstractive answers are generated freely and may paraphrase.',
            'Q2: Why is F1 preferred over Exact Match for QA evaluation?\nAns: F1 rewards partial overlap; "United States" and "USA" share no exact match but convey the same meaning.',
            'Q3: What is retrieval-augmented generation (RAG) and why is it useful?\nAns: RAG retrieves relevant documents from a large corpus before generating an answer, grounding the output in real sources and reducing hallucination.'
          ]
        }
      ]
    }
  }
};
