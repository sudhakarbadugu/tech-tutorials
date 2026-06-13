// Real AI Engineer interview questions (first half)
// Generated: 2026-06-13T19:16:08.844Z

export const aiEngineerRealQuestionsA = {
  questions: [
    {
      question: "What is the Transformer architecture and how does it work? Explain the differences between encoder-only, decoder-only, and encoder-decoder architectures.",
      answer: `<p>The <strong>Transformer</strong> is a deep-learning architecture built entirely on self-attention and feed-forward layers, avoiding recurrence.</p>
<h4>Architecture</h4>
<pre><code class="language-text">Input → Embeddings + Positional Encoding → N Encoder/Decoder Blocks → Output

Encoder block: Multi-Head Self-Attention → Feed-Forward → Layer Norm
Decoder block: Masked Self-Attention → Cross-Attention → Feed-Forward</code></pre>
<h4>Variants</h4>
<ul>
<li><strong>Encoder-only (BERT):</strong> bidirectional context; best for classification, encoding, and understanding tasks.</li>
<li><strong>Decoder-only (GPT):</strong> causal (left-to-right) attention; best for autoregressive generation.</li>
<li><strong>Encoder-decoder (T5, BART):</strong> encoder reads input, decoder generates output; best for translation and summarization.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Transformers rely on self-attention and positional encoding instead of recurrence.",
        "Encoder-only models use bidirectional attention for understanding tasks.",
        "Decoder-only models use causal attention for text generation."
      ]
    },
    {
      question: "Explain the self-attention mechanism. How do Query (Q), Key (K), and Value (V) vectors work? Write out the attention formula and explain why we divide by sqrt(d_k).",
      answer: `<p><strong>Self-attention</strong> lets each token attend to every other token by comparing Queries to Keys and weighting Values.</p>
<h4>Formula</h4>
<pre><code class="language-text">Attention(Q, K, V) = softmax(QK^T / sqrt(d_k))V</code></pre>
<ul>
<li><strong>Q, K, V:</strong> linear projections of the input embeddings.</li>
<li><strong>QK^T:</strong> similarity scores between every pair of tokens.</li>
<li><strong>sqrt(d_k):</strong> scales dot products so softmax gradients do not vanish for large dimensions.</li>
</ul>
<p>Without scaling, large d_k produces very sharp softmax outputs, making gradients extremely small.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Self-attention computes token-to-token relevance using Q, K, and V projections.",
        "The attention formula scales the QK^T dot product by sqrt(d_k).",
        "Scaling prevents extremely small softmax gradients in high dimensions."
      ]
    },
    {
      question: "What is multi-head attention and why is it used? How does it differ from single-head self-attention?",
      answer: `<p><strong>Multi-head attention</strong> runs several self-attention layers in parallel, each learning a different representation subspace.</p>
<h4>Differences</h4>
<ul>
<li><strong>Single-head:</strong> one set of Q/K/V projections; one view of relationships.</li>
<li><strong>Multi-head:</strong> h independent heads with separate projections; outputs are concatenated and linearly projected.</li>
</ul>
<pre><code class="language-text">MultiHead(Q,K,V) = Concat(head_1,...,head_h)W^O
head_i = Attention(QW_i^Q, KW_i^K, VW_i^V)</code></pre>
<p>This allows the model to capture syntactic, semantic, and positional dependencies simultaneously.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Multi-head attention uses multiple parallel attention heads.",
        "Each head learns a different subspace of relationships.",
        "Outputs are concatenated and projected to the original dimension."
      ]
    },
    {
      question: "How would you serve a 70B parameter model with low latency? Discuss Quantization (4-bit/8-bit), KV Caching, Continuous Batching, and Speculative Decoding.",
      answer: `<p>Serving a 70B model efficiently requires reducing memory, batching requests, and accelerating decoding.</p>
<h4>Techniques</h4>
<ul>
<li><strong>Quantization:</strong> load weights in INT8/FP8 or 4-bit (AWQ/GPTQ) to shrink memory and increase throughput.</li>
<li><strong>KV Cache:</strong> store key/value tensors for prior tokens to avoid recomputation during autoregressive generation.</li>
<li><strong>Continuous Batching:</strong> dynamically batch new requests as others finish, keeping GPU utilization high.</li>
<li><strong>Speculative Decoding:</strong> draft future tokens with a small model, verify them in parallel with the large model.</li>
</ul>
<pre><code class="language-text">Request Queue → Continuous Batcher → GPU Kernel
                    ↑
              KV Cache Manager + Quantized Weights</code></pre>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Quantize weights to reduce memory footprint and increase throughput.",
        "Use KV caching to avoid recomputing past token representations.",
        "Combine continuous batching and speculative decoding for low-latency serving."
      ]
    },
    {
      question: "Explain Quantization for LLM Deployment: compare INT8, INT4, FP8, GPTQ, AWQ, and QAT. When would you use each?",
      answer: `<p><strong>Quantization</strong> reduces the numerical precision of weights and/or activations to lower memory and compute.</p>
<h4>Comparison</h4>
<ul>
<li><strong>INT8:</strong> simple uniform quantization; good baseline with minor accuracy loss.</li>
<li><strong>FP8:</strong> hardware-friendly on H100/B200; keeps dynamic range better than INT8.</li>
<li><strong>INT4:</strong> aggressive memory reduction; often used for very large models on consumer GPUs.</li>
<li><strong>GPTQ:</strong> post-training quantization for 4-bit weights; layer-wise compensation.</li>
<li><strong>AWQ:</strong> protects 1% salient weights during 4-bit quantization; better accuracy than GPTQ.</li>
<li><strong>QAT:</strong> quantization-aware training; most accurate but requires retraining.</li>
</ul>
<p>Use QAT when accuracy is critical; AWQ/GPTQ for quick 4-bit deployment; INT8/FP8 for production balance.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Quantization lowers weight and activation precision to save memory and compute.",
        "Post-training methods like AWQ and GPTQ enable fast 4-bit deployment.",
        "QAT gives the best accuracy but requires training with simulated quantization."
      ]
    },
    {
      question: "What is Continuous Batching for LLM serving and why is it better than static batching? How does vLLM implement this with PagedAttention?",
      answer: `<p><strong>Continuous batching</strong> replaces a fixed batch by dynamically adding and removing requests as tokens complete, so the GPU stays busy.</p>
<h4>Static vs Continuous</h4>
<ul>
<li><strong>Static:</strong> all requests wait for the slowest one; padding wastes compute.</li>
<li><strong>Continuous:</strong> new requests join immediately; finished ones leave.</li>
</ul>
<h4>PagedAttention</h4>
<p>vLLM stores KV cache in non-contiguous fixed-size blocks, similar to OS virtual memory. This avoids pre-allocating maximum sequence length and enables memory sharing.</p>
<pre><code class="language-text">KV cache → fixed-size blocks → block table per request
new token appends to current block; overflow allocates new block</code></pre>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Continuous batching keeps GPUs busy by adding and removing requests dynamically.",
        "PagedAttention stores KV cache in fixed-size blocks to reduce memory waste.",
        "vLLM uses block tables to support memory sharing and efficient scheduling."
      ]
    },
    {
      question: "How do you detect and mitigate hallucinations in a production chatbot? Discuss techniques like Chain-of-Thought prompting, Self-Consistency, and RAG.",
      answer: `<p><strong>Hallucinations</strong> are outputs that are plausible but ungrounded or false. Detect and reduce them with retrieval, reasoning, and verification.</p>
<h4>Techniques</h4>
<ul>
<li><strong>RAG:</strong> ground answers in retrieved documents and cite sources.</li>
<li><strong>Chain-of-Thought (CoT):</strong> prompt the model to reason step-by-step before answering.</li>
<li><strong>Self-Consistency:</strong> sample multiple reasoning paths and vote on the most common answer.</li>
<li><strong>Retrieval verification:</strong> check generated claims against source documents or a knowledge graph.</li>
</ul>
<h4>Monitoring</h4>
<p>Track disagreement with retrieved context, entropy of generated answers, and user feedback to flag hallucinations.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "RAG grounds answers in external documents and enables source citations.",
        "Chain-of-Thought and Self-Consistency improve reasoning reliability.",
        "Monitor retrieval consistency and user feedback to detect hallucinations."
      ]
    },
    {
      question: "We need a model to answer questions about internal documentation. Would you use RAG, Fine-Tuning, or Long-Context Windows? Explain the trade-offs in cost, latency, and accuracy.",
      answer: `<p>For internal documentation, the best approach is usually <strong>RAG</strong> with optional fine-tuning for tone or task format.</p>
<h4>Trade-offs</h4>
<ul>
<li><strong>RAG:</strong> low cost, easy updates, high accuracy when docs change frequently; adds retrieval latency.</li>
<li><strong>Fine-tuning:</strong> bakes knowledge into weights; expensive to train and retrain whenever docs change.</li>
<li><strong>Long-context:</strong> simplest architecture; slower and costlier per request, and models may miss details in very long documents.</li>
</ul>
<p>A hybrid pipeline retrieves relevant chunks and passes them to a long-context model for final synthesis.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "RAG is cost-effective and keeps answers current when documentation changes.",
        "Fine-tuning is expensive to maintain and risks stale knowledge.",
        "Long-context windows are simple but slower and may miss details."
      ]
    },
    {
      question: "What is tokenization and why does it matter for LLMs? Compare Byte-Pair Encoding (BPE), WordPiece, and SentencePiece.",
      answer: `<p><strong>Tokenization</strong> converts raw text into a sequence of tokens that the model can process. It determines vocabulary, cost, and cross-lingual behavior.</p>
<h4>Methods</h4>
<ul>
<li><strong>BPE:</strong> starts with characters and iteratively merges the most frequent pairs; used by GPT-2/ChatGPT.</li>
<li><strong>WordPiece:</strong> merges pairs that maximize training likelihood; used by BERT.</li>
<li><strong>SentencePiece:</strong> treats text as a raw byte stream; language-agnostic and handles any script; used by T5, LLaMA.</li>
</ul>
<p>Poor tokenization can increase sequence length, inflate inference cost, and hurt multilingual performance.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Tokenization converts text into a fixed-vocabulary token sequence.",
        "BPE merges frequent pairs; WordPiece merges by likelihood.",
        "SentencePiece is language-agnostic and works directly on raw text."
      ]
    },
    {
      question: "How do positional encodings work? Compare absolute positional encodings with Rotary Position Embedding (RoPE).",
      answer: `<p>Transformers have no built-in notion of order, so <strong>positional encodings</strong> inject position information into token embeddings.</p>
<h4>Absolute Positional Encoding</h4>
<p>Adds fixed sinusoidal vectors or learned embeddings to input embeddings. Simple but length-limited and hard to extrapolate.</p>
<h4>Rotary Position Embedding (RoPE)</h4>
<p>Rotates Q and K vectors by a position-dependent angle so that dot products naturally encode relative distance.</p>
<pre><code class="language-text">RoPE: f(q, m) = R_m * q
Attention score depends on q^T k rotated by (m - n)</code></pre>
<p>RoPE generalizes better to longer sequences and is used in LLaMA, Mistral, and GPT-NeoX.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Positional encodings provide sequence order to the model.",
        "Absolute encodings add position vectors directly to embeddings.",
        "RoPE embeds relative position into Q/K dot products and extrapolates better."
      ]
    },
    {
      question: "Explain RLHF (Reinforcement Learning from Human Feedback). How does it work and why is it central to aligning LLMs with human expectations?",
      answer: `<p><strong>RLHF</strong> aligns language models with human preferences using a reward model trained on human rankings.</p>
<h4>Pipeline</h4>
<ol>
<li><strong>Supervised Fine-Tuning (SFT):</strong> train the model on high-quality prompt-response pairs.</li>
<li><strong>Reward Model:</strong> humans rank multiple outputs; train a model to predict preferred responses.</li>
<li><strong>Reinforcement Learning:</strong> optimize the LLM policy with PPO against the reward model, penalizing divergence from the SFT model.</li>
</ol>
<h4>Why it matters</h4>
<p>RLHF captures nuanced human values like helpfulness, harmlessness, and honesty that are hard to specify with simple loss functions.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "RLHF uses a reward model trained from human preference rankings.",
        "PPO optimizes the LLM policy while keeping it close to the original model.",
        "It aligns models with subjective human values beyond next-token accuracy."
      ]
    },
    {
      question: "Compare RAG vs Fine-tuning across accuracy, cost, and maintainability. When would you choose one over the other?",
      answer: `<p><strong>RAG</strong> and <strong>fine-tuning</strong> solve different problems: retrieval grounds answers, while fine-tuning adapts behavior.</p>
<h4>Comparison</h4>
<ul>
<li><strong>Accuracy:</strong> RAG is better for factual, domain-specific queries; fine-tuning is better for style and task patterns.</li>
<li><strong>Cost:</strong> RAG adds retrieval infrastructure; fine-tuning requires GPU training and retraining on data changes.</li>
<li><strong>Maintainability:</strong> RAG updates by refreshing documents; fine-tuning needs retraining and evaluation.</li>
</ul>
<p>Choose RAG when knowledge changes often; choose fine-tuning when you need consistent tone, format, or specialized reasoning.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "RAG is best for dynamic, fact-based knowledge.",
        "Fine-tuning is best for behavior, style, and task adaptation.",
        "They are often combined: RAG for facts and fine-tuning for output format."
      ]
    },
    {
      question: "What are common failure modes of RAG systems in production? How would you debug a RAG system with poor retrieval quality?",
      answer: `<p>Common RAG failures include <strong>retrieval errors</strong>, <strong>context overload</strong>, and <strong>generator misalignment</strong>.</p>
<h4>Failure Modes</h4>
<ul>
<li><strong>Poor chunking:</strong> chunks split key context or contain redundant noise.</li>
<li><strong>Bad embeddings:</strong> the embedding model does not match the domain.</li>
<li><strong>Low recall:</strong> relevant documents are not retrieved.</li>
<li><strong>Hallucinated synthesis:</strong> generator ignores retrieved context.</li>
</ul>
<h4>Debugging</h4>
<p>Measure retrieval metrics (MRR, NDCG, recall@k), inspect query-document similarity, test chunk sizes, and add hybrid search (BM25 + vector).</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Bad chunking and mismatched embeddings are common retrieval problems.",
        "Measure MRR, NDCG, and recall@k to quantify retrieval quality.",
        "Hybrid search and re-ranking often improve recall."
      ]
    },
    {
      question: "Design a multi-stage retrieval strategy for a RAG system. How do you balance recall vs precision at scale?",
      answer: `<p>A production RAG pipeline typically uses multiple retrieval stages to balance <strong>recall</strong> and <strong>precision</strong>.</p>
<h4>Stages</h4>
<ol>
<li><strong>Initial retrieval:</strong> hybrid search (dense vector + BM25) to get high recall.</li>
<li><strong>Re-ranking:</strong> cross-encoder or ColBERT scores the top-k candidates for precision.</li>
<li><strong>Query rewriting:</strong> expand or rewrite queries to improve retrieval coverage.</li>
</ol>
<pre><code class="language-text">Query → Rewrite/Expand → Hybrid Retrieval (top-100)
             → Re-ranker (top-10) → LLM Synthesis</code></pre>
<p>Filter by metadata, date, or source to reduce the candidate pool early.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Use hybrid retrieval to maximize recall in the first stage.",
        "Apply a re-ranker to improve precision before sending context to the LLM.",
        "Metadata filtering reduces the candidate pool and improves latency."
      ]
    },
    {
      question: "Describe a RAG pipeline end-to-end: from document chunking to embedding generation to retrieval to answer generation.",
      answer: `<p>A typical <strong>RAG pipeline</strong> has four main stages.</p>
<h4>Pipeline</h4>
<ol>
<li><strong>Document chunking:</strong> split documents into semantic or fixed-size chunks with overlap.</li>
<li><strong>Embedding generation:</strong> encode chunks with a dense embedding model and store in a vector database.</li>
<li><strong>Retrieval:</strong> encode the query, search the vector index, and return top-k chunks.</li>
<li><strong>Answer generation:</strong> feed query + retrieved chunks into an LLM with a grounded prompt.</li>
</ol>
<pre><code class="language-text">Documents → Chunker → Embedding Model → Vector DB
Query → Embedding Model → Vector DB → LLM → Answer</code></pre>
<p>Include citations so users can verify the answer against source chunks.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Chunk documents with overlap to preserve context.",
        "Store dense embeddings in a vector database for fast similarity search.",
        "Pass retrieved chunks and the query to an LLM with citations."
      ]
    },
    {
      question: "How does KV cache work in transformer inference? Why is it critical for efficient autoregressive generation?",
      answer: `<p>The <strong>KV cache</strong> stores key and value tensors from previous tokens so they do not have to be recomputed at every generation step.</p>
<h4>Autoregressive Generation</h4>
<p>For each new token, the model needs attention over all prior tokens. Without caching, it would recompute K and V for the full prefix every time.</p>
<pre><code class="language-text">Step t: cache K_1..t-1, V_1..t-1
Compute only K_t, V_t and attend over all cached keys/values</code></pre>
<p>This reduces complexity from O(n^2 * d) per token to O(n * d) after the first pass and is essential for long conversations.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "The KV cache stores previous key and value tensors during generation.",
        "It avoids recomputing attention over the full prefix each step.",
        "Caching is essential for low-latency, long-context inference."
      ]
    },
    {
      question: "Explain LoRA and QLoRA for parameter-efficient fine-tuning. When would you use them instead of full fine-tuning?",
      answer: `<p><strong>LoRA</strong> freezes pre-trained weights and trains low-rank update matrices for selected layers.</p>
<pre><code class="language-text">W' = W + ΔW = W + BA
B ∈ R^{d x r}, A ∈ R^{r x k}, r &lt;&lt; min(d, k)</code></pre>
<ul>
<li><strong>LoRA:</strong> reduces trainable parameters and memory; merges weights at inference.</li>
<li><strong>QLoRA:</strong> quantizes the base model to 4-bit and uses paged optimizers, enabling fine-tuning on consumer GPUs.</li>
</ul>
<p>Use them when data is limited, compute is constrained, or you need many task-specific adapters.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "LoRA trains low-rank matrices instead of full weight matrices.",
        "QLoRA combines 4-bit quantization with LoRA for memory-efficient tuning.",
        "Use them for limited data, compute constraints, or multi-task adapters."
      ]
    },
    {
      question: "What are the differences between causal/masked attention, cross-attention, and multi-query attention? When is each used?",
      answer: `<p>These attention variants serve different architectural purposes.</p>
<h4>Variants</h4>
<ul>
<li><strong>Causal/masked attention:</strong> tokens attend only to previous positions; used in decoder-only models for generation.</li>
<li><strong>Cross-attention:</strong> queries come from the decoder, keys/values from the encoder; used in encoder-decoder models.</li>
<li><strong>Multi-query attention:</strong> shares a single K/V head across all Q heads; speeds up inference and reduces memory.</li>
</ul>
<pre><code class="language-text">Causal: attention(i,j) = 0 for j &gt; i
Cross: Q from decoder, K/V from encoder
MQA: one K/V head per layer, multiple Q heads</code></pre>
<p>Grouped-query attention (GQA) is a middle ground between MHA and MQA.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Causal attention prevents tokens from seeing future positions.",
        "Cross-attention lets decoders attend to encoder outputs.",
        "Multi-query attention shares K/V heads to reduce memory and latency."
      ]
    },
    {
      question: "Walk through a basic RAG pipeline end to end. What roles do the retriever and generator play, and how are they coupled?",
      answer: `<p>A basic <strong>RAG</strong> system combines retrieval with generation to produce grounded answers.</p>
<h4>Components</h4>
<ul>
<li><strong>Retriever:</strong> converts the query into an embedding and fetches relevant documents from a vector store.</li>
<li><strong>Generator:</strong> an LLM that receives the query plus retrieved passages and synthesizes an answer.</li>
</ul>
<pre><code class="language-text">query → retriever → top-k passages
query + passages → generator → answer</code></pre>
<p>The retriever controls recall, while the generator controls fluency and synthesis. They are coupled through the prompt context.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "The retriever fetches relevant documents for the query.",
        "The generator synthesizes an answer from the query and passages.",
        "The two components are coupled through the prompt context."
      ]
    },
    {
      question: "How does increasing the context window affect model performance? How would you design a prompt to ensure the model pays attention to instructions at the beginning of a 500k token document?",
      answer: `<p>Longer context windows increase <strong>recall</strong> but can degrade <strong>attention</strong> to middle and distant content, a phenomenon called <strong>lost in the middle</strong>.</p>
<h4>Effects</h4>
<ul>
<li>Higher memory and compute for KV cache.</li>
<li>Attenuated signal for tokens far from the query or instruction.</li>
<li>Better for tasks needing large evidence but worse if relevant details are buried.</li>
</ul>
<h4>Prompt Design</h4>
<p>Repeat critical instructions at the beginning and end, break the document into sections, retrieve only relevant chunks, or use hierarchical summarization.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "LLMs"],
      keyPoints: [
        "Long contexts can suffer from lost-in-the-middle attention decay.",
        "KV cache memory grows linearly with sequence length.",
        "Repeat key instructions and retrieve relevant chunks for long documents."
      ]
    },
    {
      question: "What is the difference between image recognition and object detection? How does image segmentation go further?",
      answer: `<p>These computer vision tasks differ in the granularity of their outputs.</p>
<h4>Comparison</h4>
<ul>
<li><strong>Image recognition:</strong> assigns a single label to an entire image.</li>
<li><strong>Object detection:</strong> predicts bounding boxes and class labels for multiple objects.</li>
<li><strong>Image segmentation:</strong> classifies each pixel, producing precise object masks.</li>
</ul>
<pre><code class="language-text">Recognition:   image → class label
Detection:     image → {box, label}*
Segmentation:  image → pixel-wise mask</code></pre>
<p>Segmentation is used for medical imaging, autonomous driving, and scene understanding.</p>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Image recognition classifies the whole image.",
        "Object detection locates and labels multiple objects with bounding boxes.",
        "Segmentation classifies every pixel for precise object boundaries."
      ]
    },
    {
      question: "Can you explain what a convolutional neural network (CNN) is and how it works? How do convolutional layers and pooling layers function?",
      answer: `<p>A <strong>CNN</strong> uses convolutional filters to detect local patterns such as edges, textures, and shapes in images.</p>
<h4>Layers</h4>
<ul>
<li><strong>Convolutional layer:</strong> applies learnable filters that slide across the input, producing feature maps.</li>
<li><strong>Pooling layer:</strong> downsamples feature maps to reduce dimensions and add translation invariance.</li>
<li><strong>Activation:</strong> introduces non-linearity, usually ReLU.</li>
</ul>
<pre><code class="language-text">input → Conv → ReLU → Pool → Conv → ReLU → Pool → Flatten → FC</code></pre>
<p>Pooling is often max-pooling, which keeps the strongest local signal.</p>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Convolutional layers learn local visual patterns with shared weights.",
        "Pooling layers reduce spatial size and provide translation invariance.",
        "Stacks of conv/pool layers build hierarchical feature representations."
      ]
    },
    {
      question: "Explain the differences between edge detection and corner detection. Why might you choose one technique over the other?",
      answer: `<p><strong>Edge detection</strong> finds intensity discontinuities, while <strong>corner detection</strong> finds points with strong gradients in multiple directions.</p>
<h4>Comparison</h4>
<ul>
<li><strong>Edge detection (Sobel, Canny):</strong> good for boundaries and shapes; sensitive to noise.</li>
<li><strong>Corner detection (Harris, Shi-Tomasi, FAST):</strong> good for feature matching and tracking; invariant to small viewpoint changes.</li>
</ul>
<p>Use edge detection for segmentation and shape analysis; use corner detection for SLAM, stitching, and object tracking.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Edge detectors find intensity boundaries.",
        "Corner detectors find locally distinct points with multi-directional gradients.",
        "Choose corners for matching and tracking, edges for shape analysis."
      ]
    },
    {
      question: "How would you handle scale and rotation invariance when developing an image matching application?",
      answer: `<p><strong>Scale and rotation invariance</strong> ensure that the same object matches even when it appears larger, smaller, or rotated.</p>
<h4>Techniques</h4>
<ul>
<li><strong>Scale-invariant features (SIFT):</strong> detects keypoints across image pyramids and assigns orientation histograms.</li>
<li><strong>ORB:</strong> faster alternative using oriented FAST keypoints and BRIEF descriptors.</li>
<li><strong>Data augmentation:</strong> train deep matchers on scaled and rotated examples.</li>
</ul>
<pre><code class="language-text">Image pyramid → keypoint detection → orientation assignment
→ descriptor extraction → nearest-neighbor matching → RANSAC filtering</code></pre>
<p>RANSAC removes outlier matches and estimates a geometric transformation.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "SIFT provides scale and rotation invariance through pyramids and orientation.",
        "ORB offers a faster binary alternative.",
        "RANSAC filters outlier matches and recovers geometric consistency."
      ]
    },
    {
      question: "Given a stream of images from a video, how would you design and implement real-time object detection and tracking?",
      answer: `<p>Real-time video detection and tracking need a fast detector plus temporal consistency.</p>
<h4>Pipeline</h4>
<ul>
<li><strong>Detector:</strong> YOLO or MobileNet SSD for single-frame bounding boxes.</li>
<li><strong>Tracker:</strong> SORT, DeepSORT, or ByteTrack to associate boxes across frames.</li>
<li><strong>Motion model:</strong> Kalman filter predicts object positions between frames.</li>
</ul>
<pre><code class="language-text">Frame t → Detector → Kalman prediction → IoU association → Track IDs
Frame t+1 → Detector → Kalman update → re-ID / new track</code></pre>
<p>Run detection on key frames and propagate tracks for latency reduction.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Use a lightweight detector like YOLO for speed.",
        "Associate detections across frames with a tracker such as DeepSORT or ByteTrack.",
        "Kalman filters improve temporal smoothness and handle occlusions."
      ]
    },
    {
      question: "Explain how you would implement a convolutional neural network from scratch for image classification without using high-level frameworks.",
      answer: `<p>Implementing a CNN from scratch requires only matrix operations and a loss function.</p>
<h4>Building Blocks</h4>
<ul>
<li><strong>Convolution:</strong> slide filters over the image and compute element-wise dot products.</li>
<li><strong>Activation:</strong> apply ReLU element-wise.</li>
<li><strong>Pooling:</strong> take the maximum value in each window.</li>
<li><strong>Fully connected:</strong> matrix multiply followed by softmax.</li>
</ul>
<pre><code class="language-python">def conv2d(x, kernel):
    return sum(x[i:i+kh, j:j+kw] * kernel for ...)</code></pre>
<p>Backpropagation computes gradients for filters and weights using the chain rule.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Implement convolution as sliding-window dot products.",
        "Add activation, pooling, and fully connected layers.",
        "Backpropagate gradients through each layer manually."
      ]
    },
    {
      question: "Design visual search for Pinterest. How would you approach building a system that finds visually similar images?",
      answer: `<p><strong>Visual search</strong> retrieves images that look similar to a query image using learned visual embeddings.</p>
<h4>Architecture</h4>
<ul>
<li><strong>Embedding model:</strong> fine-tune a CNN or Vision Transformer on product/image data with metric learning.</li>
<li><strong>Index:</strong> store embeddings in a vector database with approximate nearest-neighbor search (FAISS, Milvus).</li>
<li><strong>Reranking:</strong> apply metadata filters and user personalization.</li>
</ul>
<pre><code class="language-text">Query image → CNN/ViT → embedding → ANN index → top-K candidates
→ Metadata filter → Personalization rerank → Results</code></pre>
<p>Use multi-modal embeddings to combine visual and text signals.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Extract visual embeddings with a CNN or Vision Transformer.",
        "Use approximate nearest-neighbor search for fast retrieval.",
        "Rerank by metadata, freshness, and user preferences."
      ]
    },
    {
      question: "How does Canny edge detection work, and what are its parameters? Compare it with Sobel edge detection.",
      answer: `<p><strong>Canny edge detection</strong> is a multi-step algorithm that produces thin, well-localized edges.</p>
<h4>Steps</h4>
<ol>
<li>Gaussian blur to reduce noise.</li>
<li>Compute gradient magnitude and direction (often with Sobel).</li>
<li>Non-maximum suppression to thin edges.</li>
<li>Hysteresis thresholding with low and high thresholds to trace edges.</li>
</ol>
<h4>Parameters</h4>
<ul>
<li><strong>Gaussian sigma:</strong> controls smoothing.</li>
<li><strong>Low/high thresholds:</strong> control edge linking and noise rejection.</li>
</ul>
<p><strong>Sobel</strong> only computes gradients and produces thicker, noisier edges without suppression.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Canny uses Gaussian blur, gradient computation, suppression, and hysteresis.",
        "Parameters include Gaussian sigma and low/high thresholds.",
        "Sobel computes gradients but does not thin or link edges."
      ]
    },
    {
      question: "What is the difference between Haar cascades and deep learning-based detection? When would you use each?",
      answer: `<p><strong>Haar cascades</strong> are classical, lightweight detectors; deep-learning detectors learn features end-to-end.</p>
<h4>Comparison</h4>
<ul>
<li><strong>Haar cascades:</strong> fast on CPU, small models, but fragile to pose, lighting, and occlusion.</li>
<li><strong>Deep learning (YOLO, Faster R-CNN, SSD):</strong> much higher accuracy, robust to variation, but require GPU and data.</li>
</ul>
<p>Use Haar cascades for simple, resource-constrained tasks like face detection on edge devices. Use deep learning for general object detection and accuracy-critical applications.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Computer Vision"],
      keyPoints: [
        "Haar cascades are fast and lightweight but less robust.",
        "Deep-learning detectors achieve higher accuracy at the cost of compute.",
        "Choose Haar for constrained devices and deep learning for accuracy."
      ]
    },
    {
      question: "Compare policy gradients and Q-learning. What are the key differences in what they optimize, and when would you use each?",
      answer: `<p><strong>Policy gradients</strong> optimize the policy directly, while <strong>Q-learning</strong> learns a value function and derives the policy.</p>
<h4>Policy Gradients</h4>
<ul>
<li>Optimize parameters to maximize expected cumulative reward.</li>
<li>Good for continuous action spaces and stochastic policies.</li>
<li>High variance; needs baselines or advantage estimation.</li>
</ul>
<h4>Q-Learning</h4>
<ul>
<li>Learns Q(s,a), the expected return of taking action a in state s.</li>
<li>Good for discrete action spaces.</li>
<li>Can suffer from instability with function approximation.</li>
</ul>
<p>Use policy gradients for robotics and continuous control; use Q-learning for discrete games and simple environments.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Policy gradients optimize the policy parameters directly.",
        "Q-learning estimates action values and picks the best action.",
        "Policy gradients suit continuous actions; Q-learning suits discrete actions."
      ]
    },
    {
      question: "Describe the Actor-Critic architecture. How does it address the limitations of traditional value-based methods?",
      answer: `<p><strong>Actor-Critic</strong> combines a policy (actor) with a value function (critic) to reduce variance and stabilize training.</p>
<h4>Architecture</h4>
<ul>
<li><strong>Actor:</strong> learns the policy π(a|s).</li>
<li><strong>Critic:</strong> estimates the value V(s) or Q(s,a).</li>
</ul>
<h4>Advantages</h4>
<ul>
<li>The critic provides a lower-variance baseline than Monte-Carlo returns.</li>
<li>Works in continuous action spaces where pure value-based methods struggle.</li>
</ul>
<pre><code class="language-text">Actor update: ∇log π(a|s) * A(s,a)
Critic update: minimize (R + γV(s') - V(s))^2</code></pre>
<p>A3C and A2C are popular synchronous/asynchronous actor-critic algorithms.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Actor-Critic uses an actor for policy and a critic for value estimation.",
        "The critic reduces variance compared to pure policy gradients.",
        "It handles continuous action spaces better than value-based methods."
      ]
    },
    {
      question: "What is PPO (Proximal Policy Optimization) and how does it improve stability over vanilla policy gradients?",
      answer: `<p><strong>PPO</strong> is a policy-gradient algorithm that limits how far the policy can change in one update, improving stability.</p>
<h4>Key Idea</h4>
<p>Clip the importance-sampling ratio so updates do not become too large.</p>
<pre><code class="language-text">L^CLIP(θ) = E[min(r_t(θ) A_t, clip(r_t(θ), 1-ε, 1+ε) A_t)]
r_t(θ) = π_θ(a|s) / π_old(a|s)</code></pre>
<ul>
<li><strong>Clipping:</strong> prevents overly aggressive policy changes.</li>
<li><strong>Surrogate objective:</strong> simpler and more stable than TRPO's trust region.</li>
</ul>
<p>PPO is widely used because it is easy to tune and works reliably across tasks.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "PPO clips the policy ratio to avoid overly large updates.",
        "It uses a surrogate objective that is simpler than TRPO.",
        "PPO is stable and easy to tune across many RL tasks."
      ]
    },
    {
      question: "Explain the Bellman equation and its role in Q-learning. How does temporal difference learning work?",
      answer: `<p>The <strong>Bellman equation</strong> relates the value of a state to the values of successor states.</p>
<pre><code class="language-text">Q(s,a) = r + γ max_a' Q(s',a')</code></pre>
<p><strong>Temporal Difference (TD) learning</strong> updates Q-values using observed rewards and estimated future values.</p>
<pre><code class="language-text">TD error: δ = r + γ max_a' Q(s',a') - Q(s,a)
Q(s,a) ← Q(s,a) + α δ</code></pre>
<ul>
<li><strong>Bootstrap:</strong> uses the current Q estimate for the next state.</li>
<li><strong>Off-policy:</strong> Q-learning can learn from exploratory behavior while targeting the greedy policy.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "The Bellman equation decomposes value into immediate reward plus discounted future value.",
        "TD learning updates estimates using observed rewards and bootstrapped future values.",
        "Q-learning is off-policy and converges to the optimal Q-function under standard conditions."
      ]
    },
    {
      question: "How would you explain policy gradients to a non-technical audience?",
      answer: `<p><strong>Policy gradients</strong> can be explained as learning by trial and error with feedback.</p>
<p>Imagine a robot trying to walk. Each time it takes a step, it gets a score. Actions that lead to higher scores become more likely, and actions that lead to lower scores become less likely. Over many attempts, the robot learns a reliable way to walk.</p>
<p>The key idea is to <strong>increase the probability of good actions</strong> and <strong>decrease the probability of bad actions</strong> based on the final outcome.</p>`,
      difficulty: "Beginner",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Policy gradients learn by trying actions and observing rewards.",
        "Good actions become more likely over time.",
        "It is analogous to a robot learning to walk through repeated feedback."
      ]
    },
    {
      question: "What is the variance-bias trade-off in policy gradient methods? How does Generalized Advantage Estimation (GAE) help?",
      answer: `<p><strong>Policy gradients</strong> estimate gradients from sampled trajectories, creating a bias-variance trade-off in the advantage estimate.</p>
<h4>Trade-off</h4>
<ul>
<li><strong>High-bias baseline (V(s)):</strong> stable but may misestimate action quality.</li>
<li><strong>High-variance Monte-Carlo returns:</strong> unbiased but noisy.</li>
</ul>
<h4>GAE</h4>
<p>GAE interpolates between n-step advantages with a parameter λ.</p>
<pre><code class="language-text">Â_GAE = Σ (γλ)^l δ_l
δ_l = r_l + γV(s_l+1) - V(s_l)</code></pre>
<p>λ = 0 gives low-variance one-step estimates; λ = 1 gives high-variance Monte-Carlo estimates.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Policy gradient estimates balance bias and variance.",
        "GAE blends multi-step advantages with a smoothing parameter λ.",
        "Tuning λ lets you trade off variance against bias."
      ]
    },
    {
      question: "What is the difference between discrete and continuous action spaces? Which algorithms work best for each?",
      answer: `<p><strong>Action spaces</strong> define the set of choices an agent can make.</p>
<h4>Discrete</h4>
<ul>
<li>Finite set of actions, e.g., move up, down, left, right.</li>
<li>Best with DQN, Q-learning, and PPO with a categorical distribution.</li>
</ul>
<h4>Continuous</h4>
<ul>
<li>Actions are real-valued vectors, e.g., joint torques or steering angle.</li>
<li>Best with DDPG, TD3, SAC, and PPO with a Gaussian policy.</li>
</ul>
<p>Continuous spaces require parameterized distributions or deterministic policy gradients.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Discrete action spaces have a finite set of actions.",
        "Continuous action spaces use real-valued vectors.",
        "DQN suits discrete spaces; DDPG, TD3, and SAC suit continuous spaces."
      ]
    },
    {
      question: "Explain reward hacking and how it can negatively impact an RL agent's learning. How do you prevent it?",
      answer: `<p><strong>Reward hacking</strong> occurs when an agent finds unintended shortcuts to maximize reward without achieving the true objective.</p>
<h4>Example</h4>
<p>A cleaning robot rewarded for minimizing mess might hide dirt instead of cleaning it.</p>
<h4>Prevention</h4>
<ul>
<li><strong>Careful reward design:</strong> align rewards with the true goal.</li>
<li><strong>Reward shaping:</strong> provide intermediate rewards that encourage correct behavior.</li>
<li><strong>Human feedback:</strong> RLHF or reward models trained on preferences.</li>
<li><strong>Monitoring:</strong> log and audit agent behavior in simulation before deployment.</li>
</ul>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Reward hacking exploits the reward function instead of solving the real task.",
        "Careful reward design and shaping reduce the risk.",
        "Human feedback and behavioral monitoring catch unintended shortcuts."
      ]
    },
    {
      question: "What is the difference between model-based and model-free RL? Give examples of algorithms for each.",
      answer: `<p><strong>Model-based RL</strong> learns or uses a model of the environment; <strong>model-free RL</strong> learns directly from experience.</p>
<h4>Model-Based</h4>
<ul>
<li>Learns dynamics P(s'|s,a) and reward R(s,a).</li>
<li>Can plan ahead using rollouts.</li>
<li>Examples: Dyna-Q, MuZero, Model Predictive Control (MPC).</li>
</ul>
<h4>Model-Free</h4>
<ul>
<li>No environment model; learns value function or policy from samples.</li>
<li>Examples: DQN, A3C, PPO, SAC.</li>
</ul>
<p>Model-based methods are sample-efficient but complex; model-free methods are simpler but need more data.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "Reinforcement Learning"],
      keyPoints: [
        "Model-based RL uses or learns an environment model for planning.",
        "Model-free RL learns value functions or policies directly from experience.",
        "Model-based methods are more sample-efficient; model-free methods are simpler."
      ]
    },
    {
      question: "Design a CI/CD Pipeline for ML Models. How is it fundamentally different from software CI/CD?",
      answer: `<p><strong>MLOps CI/CD</strong> must validate data, code, models, and deployment behavior, not just application code.</p>
<h4>Pipeline</h4>
<ol>
<li><strong>Data validation:</strong> check schema, drift, and quality.</li>
<li><strong>Training:</strong> reproducible experiment with versioned data and hyperparameters.</li>
<li><strong>Model evaluation:</strong> offline metrics, fairness checks, and error analysis.</li>
<li><strong>Deployment:</strong> canary or shadow release with monitoring.</li>
</ol>
<pre><code class="language-text">Data → Train → Evaluate → Register → Deploy → Monitor
         ↑           ↓           ↓
      Git commit  Metrics    Model registry</code></pre>
<p>Unlike software CI/CD, ML pipelines must also track data lineage, model versions, and performance degradation.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "ML CI/CD validates data, models, and code together.",
        "Reproducible training requires versioned data and parameters.",
        "Deployment includes model registry, canary release, and monitoring."
      ]
    },
    {
      question: "How do you monitor models in production? What is data drift, concept drift, and model performance drift?",
      answer: `<p>Production ML monitoring tracks <strong>inputs</strong>, <strong>predictions</strong>, and <strong>outcomes</strong> to detect degradation.</p>
<h4>Drift Types</h4>
<ul>
<li><strong>Data drift:</strong> input feature distribution changes over time.</li>
<li><strong>Concept drift:</strong> the relationship between inputs and labels changes.</li>
<li><strong>Performance drift:</strong> model metrics degrade even if inputs look similar.</li>
</ul>
<h4>Monitoring</h4>
<p>Use dashboards for prediction distributions, KS tests or PSI for drift, and delayed-label pipelines for ground-truth accuracy.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "Data drift is a change in input feature distributions.",
        "Concept drift is a change in the input-label relationship.",
        "Track metrics and statistical tests to trigger retraining."
      ]
    },
    {
      question: "How would you implement an automated ML pipeline? Describe the components from data ingestion to model serving.",
      answer: `<p>An <strong>automated ML pipeline</strong> connects data ingestion, feature engineering, training, and serving with orchestration.</p>
<h4>Components</h4>
<ul>
<li><strong>Data ingestion:</strong> batch or streaming ETL to a data lake.</li>
<li><strong>Feature store:</strong> versioned, reusable features for training and serving.</li>
<li><strong>Training:</strong> scheduled or event-driven jobs with experiment tracking.</li>
<li><strong>Validation:</strong> model tests, bias checks, and champion-challenger comparison.</li>
<li><strong>Serving:</strong> REST/gRPC endpoint with autoscaling and A/B testing.</li>
</ul>
<pre><code class="language-text">Raw Data → ETL → Feature Store → Training → Registry → Serving
                ↓                    ↑
           Monitoring ← Feedback loop</code></pre>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "Use a feature store to share features between training and serving.",
        "Automate training with orchestration and experiment tracking.",
        "Deploy behind a scalable endpoint with monitoring and A/B testing."
      ]
    },
    {
      question: "Design an Evaluation Framework for Testing Ranking Models in Production. How do interleaving and A/B testing differ?",
      answer: `<p>A ranking evaluation framework combines <strong>offline metrics</strong> and <strong>online experiments</strong>.</p>
<h4>Offline</h4>
<ul>
<li>NDCG, MAP, MRR, precision@k, recall@k on labeled datasets.</li>
<li>Champion-challenger comparison before release.</li>
</ul>
<h4>Online</h4>
<ul>
<li><strong>A/B testing:</strong> split users, compare business metrics like CTR and engagement.</li>
<li><strong>Interleaving:</strong> blend results from two rankers for the same user and measure which gets more clicks.</li>
</ul>
<p>Interleaving is faster and needs less traffic; A/B testing gives stronger causal estimates.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "Offline metrics like NDCG and MAP evaluate ranking quality.",
        "A/B testing compares rankers by splitting users.",
        "Interleaving blends results and requires less traffic than A/B tests."
      ]
    },
    {
      question: "Explain Model Serving Infrastructure: compare vLLM, TGI (Text Generation Inference), and TensorRT-LLM.",
      answer: `<p>These serving engines optimize LLM throughput and latency.</p>
<h4>Comparison</h4>
<ul>
<li><strong>vLLM:</strong> open-source, PagedAttention, continuous batching, high throughput.</li>
<li><strong>TGI:</strong> Hugging Face server with safetensors support, easy integration, streaming.</li>
<li><strong>TensorRT-LLM:</strong> NVIDIA-optimized kernels, FP8/BF16, best on NVIDIA GPUs.</li>
</ul>
<pre><code class="language-text">vLLM → research/production, flexible
TGI → Hugging Face ecosystem, quick deployment
TensorRT-LLM → maximum NVIDIA GPU performance</code></pre>
<p>Choose based on hardware, ecosystem, and whether you need custom scheduling.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "vLLM offers PagedAttention and continuous batching.",
        "TGI integrates easily with the Hugging Face ecosystem.",
        "TensorRT-LLM maximizes throughput on NVIDIA hardware."
      ]
    },
    {
      question: "What is Amazon SageMaker and how does it simplify building, training, and deploying ML models? Explain multi-model endpoints.",
      answer: `<p><strong>Amazon SageMaker</strong> is a managed ML platform for the full model lifecycle.</p>
<h4>Key Services</h4>
<ul>
<li><strong>Studio:</strong> integrated development environment.</li>
<li><strong>Training:</strong> managed distributed training with spot instances.</li>
<li><strong>Pipelines:</strong> orchestrate end-to-end workflows.</li>
<li><strong>Model Monitor:</strong> detect data and concept drift.</li>
</ul>
<h4>Multi-Model Endpoints</h4>
<p>A single endpoint hosts multiple models and loads them on demand, reducing cost when many models share low traffic.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "SageMaker provides managed environments for training and deployment.",
        "SageMaker Pipelines orchestrates reproducible ML workflows.",
        "Multi-model endpoints reduce cost by sharing infrastructure across models."
      ]
    },
    {
      question: "How do you handle A/B testing and canary deployments for machine learning models in production?",
      answer: `<p><strong>A/B testing</strong> and <strong>canary deployments</strong> let you validate model changes safely.</p>
<h4>Approach</h4>
<ul>
<li><strong>Shadow mode:</strong> run the new model alongside the old one without affecting users.</li>
<li><strong>Canary:</strong> route a small percentage of traffic to the new model and monitor.</li>
<li><strong>A/B test:</strong> split users randomly, compare business and model metrics.</li>
</ul>
<pre><code class="language-text">100% old model → 5% new model → 50% new model → 100% new model
                ↑ canary       ↑ A/B comparison</code></pre>
<p>Rollback if error rates, latency, or business metrics degrade.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "Shadow mode validates a new model without user impact.",
        "Canary deploys to a small fraction of traffic first.",
        "A/B tests compare metrics across randomly split user groups."
      ]
    },
    {
      question: "Explain the difference between data parallelism and model parallelism in distributed training.",
      answer: `<p>Distributed training splits either data or model across devices.</p>
<h4>Data Parallelism</h4>
<ul>
<li>Each worker holds a full model copy and processes a different batch slice.</li>
<li>Gradients are averaged across workers.</li>
<li>Best when the model fits in one GPU.</li>
</ul>
<h4>Model Parallelism</h4>
<ul>
<li>Model layers or tensors are split across devices.</li>
<li>Used when a model is too large for one GPU.</li>
<li>Variants include pipeline parallelism and tensor parallelism.</li>
</ul>
<p>Large LLMs often combine data, pipeline, and tensor parallelism.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "Data parallelism splits batches across workers with full model copies.",
        "Model parallelism splits model layers or tensors across devices.",
        "Large models often combine both approaches."
      ]
    },
    {
      question: "How do you use SageMaker Model Monitor to detect data drift and concept drift in production?",
      answer: `<p><strong>SageMaker Model Monitor</strong> automatically compares production data against a baseline captured during training.</p>
<h4>Workflow</h4>
<ol>
<li>Capture baseline statistics and constraints from the training dataset.</li>
<li>Enable endpoint data capture for incoming requests.</li>
<li>Schedule monitoring jobs to compare live data against the baseline.</li>
<li>Trigger CloudWatch alarms or retraining pipelines on violations.</li>
</ol>
<p>It detects <strong>data drift</strong> via feature distribution shifts and <strong>concept drift</strong> via quality degradation metrics when ground truth arrives.</p>`,
      difficulty: "Intermediate",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "Model Monitor compares live data to a training baseline.",
        "Data capture records endpoint requests and responses.",
        "Violations trigger alerts or retraining workflows."
      ]
    },
    {
      question: "How would you design a feature store? What are the key requirements for training-serving consistency?",
      answer: `<p>A <strong>feature store</strong> centralizes feature computation, storage, and serving for ML pipelines.</p>
<h4>Key Components</h4>
<ul>
<li><strong>Online store:</strong> low-latency lookups for real-time inference.</li>
<li><strong>Offline store:</strong> historical data for training and backfilling.</li>
<li><strong>Feature engineering:</strong> reusable transformations shared between training and serving.</li>
</ul>
<h4>Training-Serving Consistency</h4>
<ul>
<li>Use the same transformation code in both paths.</li>
<li>Version features and align timestamps to avoid leakage.</li>
<li>Point-in-time joins for training data.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "MLOps"],
      keyPoints: [
        "A feature store provides online and offline storage for features.",
        "Shared transformation code ensures consistency between training and serving.",
        "Point-in-time joins prevent label leakage in training data."
      ]
    },
    {
      question: "Design a recommendation system for an e-commerce platform. How would you handle the cold start problem?",
      answer: `<p>An e-commerce recommender retrieves and ranks products for each user.</p>
<h4>Architecture</h4>
<ul>
<li><strong>Candidate generation:</strong> collaborative filtering, content-based signals, and popular items.</li>
<li><strong>Ranking:</strong> gradient-boosted trees or neural networks on user, item, and context features.</li>
<li><strong>Reranking:</strong> diversity, freshness, and business rules.</li>
</ul>
<h4>Cold Start</h4>
<ul>
<li>New users: show popular items, ask preferences, or use contextual bandits.</li>
<li>New items: use content features, item embeddings, and exploration strategies.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "ML System Design"],
      keyPoints: [
        "Use candidate generation, ranking, and reranking stages.",
        "Cold-start users see popular or preference-gathering items.",
        "Cold-start items rely on content features and exploration."
      ]
    },
    {
      question: "Design a fraud detection system for a financial service like Stripe. What features would you use?",
      answer: `<p>A fraud detection system scores transactions in real time and adapts to new attack patterns.</p>
<h4>Architecture</h4>
<ul>
<li><strong>Feature engineering:</strong> amount, merchant, location, device, velocity, time-of-day, and user history.</li>
<li><strong>Models:</strong> gradient-boosted trees for interpretability, neural networks for complex patterns.</li>
<li><strong>Rules engine:</strong> hard rules for known fraud signatures.</li>
<li><strong>Feedback loop:</strong> incorporate chargeback labels to retrain.</li>
</ul>
<h4>Features</h4>
<p>Velocity counts, geolocation mismatches, device fingerprints, and behavioral sequences are highly predictive.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "ML System Design"],
      keyPoints: [
        "Combine ML models with deterministic rules for fraud detection.",
        "Use behavioral, transactional, and device features.",
        "Close the feedback loop with chargeback and dispute labels."
      ]
    },
    {
      question: "Design a personalized news ranking system. What metrics would you optimize for?",
      answer: `<p>A personalized news ranker balances relevance, freshness, and user satisfaction.</p>
<h4>Pipeline</h4>
<ul>
<li><strong>Candidate generation:</strong> user interests, trending topics, followed publishers.</li>
<li><strong>Ranking model:</strong> predict click, dwell time, and engagement.</li>
<li><strong>Reranking:</strong> diversity, freshness, and editorial policies.</li>
</ul>
<h4>Metrics</h4>
<ul>
<li><strong>Online:</strong> CTR, dwell time, scroll depth, shares, daily active users.</li>
<li><strong>Offline:</strong> AUC, log loss, NDCG on labeled relevance.</li>
</ul>
<p>Optimize for long-term engagement, not just clicks, to avoid clickbait.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "ML System Design"],
      keyPoints: [
        "Generate candidates from interests, trends, and subscriptions.",
        "Rank by predicted engagement and relevance.",
        "Balance click metrics with dwell time and diversity."
      ]
    },
    {
      question: "Design TikTok's 'For You' page recommendation system. How would you balance engagement with user well-being?",
      answer: `<p>TikTok's <strong>For You</strong> feed is a short-video recommender optimized for engagement.</p>
<h4>Architecture</h4>
<ul>
<li><strong>Candidate generation:</strong> collaborative filtering, content embeddings, and trending videos.</li>
<li><strong>Ranking:</strong> multi-objective model predicting watch time, likes, shares, and follows.</li>
<li><strong>Reranking:</strong> diversity, freshness, and creator fairness.</li>
</ul>
<h4>Well-being</h4>
<p>Add penalties for harmful content, enforce screen-time nudges, and include content variety to reduce filter bubbles.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "ML System Design"],
      keyPoints: [
        "Candidate generation combines collaborative and content signals.",
        "Multi-objective ranking optimizes engagement and retention.",
        "Reranking controls diversity, safety, and user well-being."
      ]
    },
    {
      question: "Design YouTube Search. How would you rank videos considering relevance, freshness, and user engagement?",
      answer: `<p><strong>YouTube Search</strong> retrieves and ranks videos from a massive corpus using query understanding and user signals.</p>
<h4>Ranking</h4>
<ul>
<li><strong>Relevance:</strong> title, description, tags, transcript, and query-video embedding similarity.</li>
<li><strong>Freshness:</strong> recency boost for news, trending, and newly uploaded content.</li>
<li><strong>Engagement:</strong> watch time, CTR, likes, comments, and session satisfaction.</li>
</ul>
<pre><code class="language-text">Query → Parsing → Retrieval → Ranking → Policy Rerank → Results</code></pre>
<p>Use a multi-objective model with pointwise or pairwise ranking loss and online A/B tests.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "ML System Design"],
      keyPoints: [
        "Rank videos by relevance, freshness, and engagement signals.",
        "Use query understanding and embeddings for retrieval.",
        "Apply policy reranking and online A/B testing."
      ]
    }
  ]
}
