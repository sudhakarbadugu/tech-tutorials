// RAG (Retrieval-Augmented Generation) debugging & scaling questions
// Covers production failure investigation, retrieval-vs-generation gaps,
// evaluation, multi-document reasoning, and large-scale architecture.

export const ragQuestions = {
  questions: [
    {
      question: "Your RAG system suddenly starts giving incorrect answers. What's the first thing you investigate, and how would you prove that's the root cause?",
      answer: `<p>The first move is to <strong>classify the failure mode</strong>, not start changing things. Common RAG failure modes include:</p>
<ul>
<li><strong>Retrieval failure</strong> — wrong or irrelevant documents returned.</li>
<li><strong>Generation failure</strong> — right docs retrieved, LLM misuses or ignores them.</li>
<li><strong>Data failure</strong> — source data is stale, corrupted, or unindexed.</li>
<li><strong>Pipeline failure</strong> — chunking, embedding, or indexing broke.</li>
<li><strong>Query failure</strong> — user query is ambiguous, out-of-scope, or poorly rewritten.</li>
</ul>
<h4>Debugging Framework: Observe → Reproduce → Isolate → Verify</h4>
<ol>
<li><strong>Observe:</strong> pull ~50 recent failing queries; cluster them by topic, user, or time window.</li>
<li><strong>Reproduce:</strong> find a single failing query and log the actual retrieved chunks verbatim.</li>
<li><strong>Isolate:</strong> bypass RAG and call the LLM directly with the user's question. If the LLM is correct, retrieval is the problem; if it still fails, the LLM or prompt is.</li>
<li><strong>Verify:</strong> build a labeled eval set of (query, expected docs) and measure recall@k and answer faithfulness.</li>
</ol>
<h4>Proving the Root Cause</h4>
<ul>
<li><strong>A/B with a roll-back:</strong> pin the suspect change (new embedding model, chunker, index) and compare new vs. old on the same failing queries.</li>
<li><strong>Component-level metrics, not just end-to-end:</strong> a "good" final answer can hide a broken retriever the LLM patches over. Measure retrieval recall@k <em>and</em> answer faithfulness separately.</li>
<li><strong>Distribution-shift detection:</strong> compare embedding cosine distributions week-over-week; a drifting cluster often signals a data or pipeline change.</li>
<li><strong>Adversarial probes:</strong> manually craft the trickiest domain queries; if they fail, the system is fragile regardless of average metrics.</li>
</ul>
<p><em>Key principle:</em> never trust a single metric. A great answer can come from a broken retriever, and a great retriever can produce a bad answer. Isolate which stage broke before changing anything.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "ML System Design"],
      keyPoints: [
        "Classify the failure mode (retrieval, generation, data, pipeline, query) before changing anything.",
        "Use Observe → Reproduce → Isolate → Verify to localize the problem.",
        "Measure retrieval recall@k and answer faithfulness separately — they often decouple.",
        "A/B with roll-back and distribution-shift checks are how you prove root cause, not just guess."
      ]
    },
    {
      question: "Your retriever returns relevant documents, but answer quality is still poor. What could be going wrong between retrieval and generation?",
      answer: `<p>This is the classic "middle of the pipeline" failure. Five things commonly break between retrieval and generation:</p>
<h4>1. Chunking Problems (the most common silent killer)</h4>
<ul>
<li>Chunks split mid-sentence, mid-table, or mid-code-block.</li>
<li>No overlap between chunks — critical info at boundaries is lost.</li>
<li>Fixed-size chunking doesn't fit content type (code, tables, and prose need different strategies).</li>
</ul>
<h4>2. The "Lost in the Middle" Problem</h4>
<ul>
<li>LLMs underweight content in the middle of long contexts.</li>
<li>If your best chunk is at position 7/10, the model is likely to ignore it.</li>
<li><strong>Fix:</strong> reorder so the most relevant chunks sit at the <em>start and end</em> of context.</li>
</ul>
<h4>3. No Re-ranker</h4>
<ul>
<li>Bi-encoders (used in vector search) are fast but imprecise.</li>
<li>A cross-encoder re-ranker (Cohere Rerank, BGE-reranker) on top-20 → top-5 is the single highest-ROI quality win in most RAG systems.</li>
</ul>
<h4>4. Prompt & Context Formatting Issues</h4>
<ul>
<li>No "answer only from context, say if unsure" guardrail → LLM hallucinates.</li>
<li>Chunks dumped as a wall of text with no structure → LLM cannot tell where one source ends and another begins.</li>
<li>No source citations in context → LLM cannot reason about provenance.</li>
<li><strong>Fix:</strong> structured context with clear delimiters, e.g. <code>--- Document 1 (source: foo.pdf, page 3) ---</code>.</li>
</ul>
<h4>5. Too Much Context = Noise</h4>
<ul>
<li>Stuffing 15 chunks when 3 would do → model gets confused, contradicted, or diluted.</li>
<li><strong>Fix:</strong> tighter top-k (3–5), or extract just the relevant spans per chunk before stuffing.</li>
</ul>
<h4>Other Things to Check</h4>
<ul>
<li>Are conflicting or contradictory documents being returned? LLMs will pick one arbitrarily.</li>
<li>Is the LLM actually reading the context, or relying on its parametric memory?</li>
<li>Is a query-transformation step missing (HyDE, step-back prompting, multi-query)?</li>
</ul>
<p><em>Pragmatic order to investigate:</em> add a cross-encoder reranker first, then audit the chunker. Most RAG quality problems live in the chunker, not the retriever.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "ML System Design"],
      keyPoints: [
        "Chunking is the most common silent killer — splits mid-content, no overlap, wrong size for content type.",
        "LLMs underweight middle context — put the best chunks at start and end.",
        "A cross-encoder re-ranker on top-k is the single highest-ROI quality win.",
        "Structure context with source labels and instruct the LLM to cite and refuse when unsure."
      ]
    },
    {
      question: "How would you know whether improving embeddings actually improved the system? What metrics would you measure before and after the change?",
      answer: `<p>You need <strong>both retrieval-side and end-to-end metrics</strong>, and an eval set that hasn't leaked into your tuning process. The trap answer is "I'd measure recall" — recall alone hides many issues.</p>
<h4>Retrieval-Side Metrics (isolating the embedding change)</h4>
<ul>
<li><strong>Recall@k</strong> — is the right document in the top-k?</li>
<li><strong>MRR (Mean Reciprocal Rank)</strong> — how high up is the first relevant document?</li>
<li><strong>NDCG@k</strong> — graded relevance, not just binary.</li>
<li><strong>Hit rate</strong> — coarse: did we get it at all?</li>
</ul>
<h4>End-to-End Metrics (does the user notice?)</h4>
<ul>
<li><strong>Answer faithfulness / groundedness</strong> — is the answer supported by retrieved context? (NLI model or LLM-as-judge)</li>
<li><strong>Answer relevance</strong> — does it actually answer the question?</li>
<li><strong>Task success rate</strong> — for closed tasks, did the agent complete the goal?</li>
<li><strong>Hallucination rate</strong> — explicit measurement, even if approximate.</li>
</ul>
<h4>Eval-Set Principles</h4>
<ul>
<li><strong>Held-out:</strong> never tune on the same queries you evaluate on.</li>
<li><strong>Production distribution:</strong> synthetic eval sets lie — use real user queries.</li>
<li><strong>Statistical significance:</strong> report confidence intervals, not just point estimates.</li>
<li><strong>Counterfactual:</strong> also run the <em>old</em> embeddings on the <em>new</em> eval set. If both improve, your eval set is broken.</li>
<li><strong>Human + automated:</strong> automated metrics are necessary but not sufficient — sample 50–100 evals/month for human review.</li>
</ul>
<h4>The Non-Obvious Gotcha</h4>
<p>Improving retrieval recall@k from 0.7 to 0.8 might <em>not</em> improve end-to-end answers — because generation was the bottleneck, not retrieval. And conversely: a worse retriever with a better reranker and prompt can win. Don't optimize embeddings in isolation.</p>
<p><em>Rule of thumb:</em> set up the eval <em>before</em> changing anything. If you can't measure it, you can't tell if you improved it — and measure both retrieval and end-to-end, because they often decouple.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "Evaluation"],
      keyPoints: [
        "Measure both retrieval (recall@k, MRR, NDCG@k) and end-to-end (faithfulness, relevance) — they often decouple.",
        "Build a held-out, production-distribution eval set before changing anything.",
        "Run the old embeddings on the new eval set as a counterfactual sanity check.",
        "Improving retrieval doesn't always improve answers — generation may be the real bottleneck."
      ]
    },
    {
      question: "A user asks a question that requires information from 5 different documents. How would you design retrieval and context construction to handle that scenario?",
      answer: `<p>This is a <strong>multi-hop / multi-document reasoning</strong> problem. Naive top-k retrieval fails here because one query rarely retrieves from 5 different documents, top-k returns similar (not complementary) docs, and the LLM must synthesize across them — which it does poorly with unstructured context.</p>
<h4>Design — Five-Part Plan</h4>
<h4>1. Query Decomposition (highest-value step)</h4>
<ul>
<li>Use an LLM to break the complex query into 2–5 sub-questions.</li>
<li>Example: "Compare A and B's growth in 2024" → SQ1: "A's growth metrics 2024" / SQ2: "B's growth metrics 2024" / SQ3: "Comparison criteria for A vs B".</li>
<li>Each sub-question gets its own retrieval pass.</li>
</ul>
<h4>2. Multi-Query / HyDE / Step-Back Prompting</h4>
<ul>
<li>Generate query variants → union retrieval results.</li>
<li>HyDE: embed a hypothetical answer for fuzzy semantic matches.</li>
<li>Step-back: also retrieve the broader topic, not just the specific.</li>
</ul>
<h4>3. Diverse Retrieval — Avoid 5 Versions of the Same Doc</h4>
<ul>
<li><strong>MMR (Maximal Marginal Relevance)</strong> to penalize redundancy.</li>
<li><strong>Hybrid search:</strong> BM25 for keyword precision + dense for semantic recall.</li>
<li><strong>Per-domain retrievers</strong> if the corpus is heterogeneous.</li>
</ul>
<h4>4. Re-rank for Precision, Then Context Assembly</h4>
<ul>
<li>Cross-encoder reranker on the union of retrieved chunks.</li>
<li>Take the top 5–10 highest-quality <em>and diverse</em> chunks.</li>
</ul>
<h4>5. Context Construction — Where Most Teams Fail</h4>
<pre><code class="language-text">[1] Source: report_q3_2024.pdf, page 12
&lt;chunk content&gt;

[2] Source: market_analysis.md, section 4
&lt;chunk content&gt;</code></pre>
<ul>
<li><strong>Explicit structure:</strong> number each source, label with metadata (file, page, section).</li>
<li><strong>De-duplicate:</strong> merge semantically equivalent chunks.</li>
<li><strong>Order for "lost in the middle":</strong> highest-relevance at top and bottom.</li>
<li><strong>Preserve citations:</strong> the model can reference "[3]" in its answer.</li>
<li><strong>Instruct the LLM explicitly:</strong> "Synthesize information from the provided sources. Cite source numbers. If sources disagree, say so."</li>
</ul>
<h4>Optional Advanced: Iterative Retrieval</h4>
<ul>
<li>Generate initial answer → self-critique ("what's missing or unverified?") → retrieve more → regenerate.</li>
</ul>
<p><em>Key insight:</em> the trick isn't retrieving from 5 docs — it's making sure the LLM can tell them apart, know which is which, and synthesize without losing the thread. Structure context like a researcher would structure a literature review, not a copy-paste.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "ML System Design"],
      keyPoints: [
        "Decompose the complex query into 2–5 sub-questions, each with its own retrieval pass.",
        "Use MMR + hybrid search to ensure diverse, complementary documents — not 5 versions of the same one.",
        "Structure context with explicit source labels and citations; the LLM must be able to tell sources apart.",
        "Instruct the LLM to cite source numbers and surface contradictions explicitly."
      ]
    },
    {
      question: "Your RAG system works perfectly with 10,000 documents. Now it has 1 million documents. What breaks first, and how would you redesign the architecture?",
      answer: `<p>At 100× growth, the question shifts from "does RAG work?" to "how do I serve it cheap, fast, and fresh?" Most teams underestimate the indexing pipeline — at 1M docs you cannot rebuild the index on a Tuesday afternoon anymore.</p>
<h4>What Breaks First (Roughly in Order of Pain)</h4>
<ol>
<li><strong>Re-indexing time</strong> — 100× data → hours → days; can't re-embed on every change.</li>
<li><strong>Index size / memory</strong> — in-memory indexes OOM; need disk-based or sharded vector DB.</li>
<li><strong>Tail latency</strong> — k-NN over 1M is slower; ANN is approximate and recall can drop.</li>
<li><strong>Recall degradation</strong> — long tail of irrelevant docs crowds out the right ones.</li>
<li><strong>Update staleness</strong> — can't re-embed fast enough; users see outdated info.</li>
<li><strong>Cost</strong> — storage, embedding API, and LLM context costs all 100×.</li>
<li><strong>Multi-tenancy</strong> — per-tenant indices explode; need shared index with namespacing.</li>
</ol>
<h4>Redesign — A 10-Point Architecture</h4>
<h4>A. Vector Database That Scales</h4>
<ul>
<li>Move from FAISS-in-memory to <strong>Pinecone, Weaviate, Milvus, Qdrant, Vespa</strong>.</li>
<li>HNSW or IVF indexes (not exact search).</li>
<li>Shard by tenant or domain; replicate for read scale.</li>
</ul>
<h4>B. Hierarchical / Two-Stage Retrieval</h4>
<ul>
<li>Stage 1: <strong>doc-level</strong> — find the 100 most relevant <em>documents</em> (use doc summaries).</li>
<li>Stage 2: <strong>chunk-level</strong> — within those 100, find the 5 most relevant <em>chunks</em>.</li>
<li>This 100× reduction in search space is often the single biggest latency win.</li>
</ul>
<h4>C. Pre-Filtering with Metadata</h4>
<ul>
<li>Filter by <code>date</code>, <code>source</code>, <code>tenant</code>, <code>doc_type</code>, <code>tags</code> <em>before</em> vector search.</li>
<li>"Documents from 2025 about X" filters out 95% of the corpus.</li>
<li>Combine with vector search inside the filter.</li>
</ul>
<h4>D. Smaller, Faster Embeddings</h4>
<ul>
<li>Lower-dim models (384 vs 1536) — 4× cheaper.</li>
<li><strong>Matryoshka embeddings</strong> — single embedding, multiple granularities.</li>
<li><strong>Quantization</strong> (int8, binary) — 4–32× smaller, slight recall cost.</li>
<li>BGE-small, E5-small, or domain-specific fine-tunes.</li>
</ul>
<h4>E. Asynchronous Indexing Pipeline</h4>
<ul>
<li>Streaming ingestion (Kafka → workers).</li>
<li>Background re-embedding for slow updates.</li>
<li>Event-driven: doc changes → re-embed only that doc.</li>
<li>Decouple index updates from the query path.</li>
</ul>
<h4>F. Caching</h4>
<ul>
<li><strong>Semantic cache:</strong> embed the incoming query, look up near-duplicates, return cached answer if hit (saves 30–60% of LLM calls in production).</li>
<li>Result cache for hot queries.</li>
<li>Embedding cache to avoid re-embedding the same text.</li>
</ul>
<h4>G. Selective Indexing</h4>
<ul>
<li>Don't index low-value docs (deprecated, duplicates, low-quality).</li>
<li>Document quality scoring at ingestion.</li>
</ul>
<h4>H. Cheap Retrieval, Expensive Rerank</h4>
<ul>
<li>Cheap bi-encoder retrieves top-100 from 1M.</li>
<li>Cross-encoder reranks top-100 → top-5.</li>
<li>Skip rerank for known-simple queries.</li>
</ul>
<h4>I. Observability at Scale</h4>
<ul>
<li>Per-stage latency (embed, retrieve, rerank, generate).</li>
<li>Per-stage cost.</li>
<li>Retrieval quality monitoring in production (sample, label, track).</li>
<li>Drift detection: is the embedding distribution shifting?</li>
</ul>
<h4>J. Evals That Scale</h4>
<ul>
<li>Continuous eval pipeline on sampled production traffic.</li>
<li>A/B test infrastructure.</li>
<li>Synthetic query generation for coverage.</li>
</ul>
<p><em>Bottom line:</em> at 1M docs, reach for a real vector DB with HNSW, add doc-level pre-filtering, semantic caching, and a streaming indexer. Treat indexing as a first-class pipeline, not a one-time script.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "ML System Design", "Scalability"],
      keyPoints: [
        "Indexing pipeline is the silent killer — at 1M docs you can't rebuild casually; treat it as a first-class system.",
        "Use a real vector DB (HNSW/IVF) with sharding and replication — not in-memory FAISS.",
        "Two-stage retrieval (doc-level → chunk-level) and metadata pre-filtering give the biggest latency wins.",
        "Semantic caching, smaller/quantized embeddings, and async re-indexing control cost and freshness."
      ]
    },
    {
      question: "You're building a RAG system over annual reports and financial statements. Which retrieval strategy maximizes BOTH accuracy and recall — so a missed figure or a wrong value never makes it into the answer?",
      answer: `<p>Finance RAG is <strong>high-stakes</strong>: a wrong revenue number or a flipped sign isn't a UX bug — it's a compliance issue. Pure vector search with top-k is <em>not enough</em>; it misses exact tokens like "Q3 2023" and hallucinates figures. The right strategy layers <strong>6 techniques</strong>.</p>
<h4>1. Hybrid Retrieval (Dense + Sparse)</h4>
<ul>
<li><strong>Dense (vector) search</strong> excels at semantic match ("revenue growth" ≈ "top-line expansion").</li>
<li><strong>Sparse (BM25/keyword) search</strong> excels at exact tokens like "Q3 2023", "₹4,521 Cr", company tickers.</li>
<li>Combine scores: <code>final_score = α × dense_score + (1−α) × sparse_score</code> (typically α = 0.5–0.7).</li>
<li>Use frameworks like <strong>Weaviate, Pinecone (sparse-dense), Qdrant, or Elasticsearch + vector</strong>.</li>
</ul>
<h4>2. Structure-Aware Chunking</h4>
<ul>
<li>Don't blindly split by 500 tokens — you'll cut a balance sheet table in half.</li>
<li>Parse tables, line items, and statements as <strong>semantic units</strong>.</li>
<li>Keep a figure attached to its <strong>label, period (FY/Q), and currency</strong>.</li>
<li>Use tools like <strong>Unstructured.io, LlamaParse, or Azure Document Intelligence</strong> to preserve table structure.</li>
</ul>
<h4>3. Over-Retrieve + Re-rank</h4>
<ul>
<li>First pass: cast a wide net — retrieve top 50-100 chunks (high <strong>recall</strong>).</li>
<li>Second pass: cross-encoder re-ranker (Cohere Rerank, BGE-reranker) pushes the truly relevant chunks to top 5-10 (high <strong>precision</strong>).</li>
<li>Recall-first, then precision. Trade latency for accuracy.</li>
</ul>
<h4>4. Metadata Filtering (Pre-Retrieval)</h4>
<ul>
<li>Tag every chunk with: <strong>company, fiscal year, statement type, units (₹/$), period (Q3 / FY24)</strong>.</li>
<li>Apply filters BEFORE retrieval: "2023 net income" should never pull a 2021 figure.</li>
<li>Most vector DBs support metadata filtering natively (Pinecone, Weaviate, Qdrant, pgvector).</li>
</ul>
<h4>5. Grounding + Self-Verification</h4>
<ul>
<li>Force the LLM to cite <strong>the exact source line</strong> for every figure.</li>
<li>Add a <strong>numeric-consistency check</strong>: every number in the answer must appear verbatim in the retrieved chunks.</li>
<li>If a number can't be traced to retrieved evidence → reject the answer or flag it.</li>
<li>Pattern: extract figures from answer, regex-match against retrieved text, raise alert on mismatch.</li>
</ul>
<h4>6. Domain-Specific Evaluation</h4>
<ul>
<li>Track <strong>recall@k</strong> AND <strong>faithfulness</strong> on a labeled financial Q&amp;A set.</li>
<li>In finance, a <em>missed</em> figure (low recall) is as dangerous as a <em>wrong</em> figure (low precision).</li>
<li>Eval metrics: <strong>Exact-Match accuracy</strong>, <strong>numeric F1</strong>, <strong>citation precision/recall</strong>, <strong>human-audited samples</strong>.</li>
</ul>
<h4>End-to-End Pipeline</h4>
<pre><code class="language-text">Query: "What was TCS net income in Q3 FY24?"

1. Metadata filter: company=TCS, year=FY24, period=Q3
2. Hybrid retrieval: BM25 + dense → top 50 chunks
3. Cross-encoder rerank → top 8 chunks
4. Prompt with chunks + cite instructions
5. LLM generates answer WITH citations
6. Numeric verification: each number in answer → must appear in cited chunks
7. Return: "TCS Q3 FY24 net income: ₹11,735 Cr [Source: TCS Q3FY24 earnings, page 4]"</code></pre>
<h4>Why "Just Vector Search + Top-k" Fails</h4>
<ul>
<li>Embeddings don't preserve <strong>exact numeric values</strong> — "₹11,735 Cr" and "₹11,375 Cr" may have near-identical embeddings.</li>
<li>Embeddings don't preserve <strong>period/currency</strong> — "Q3 FY24 ₹" and "FY23 ₹" can match similar chunks.</li>
<li>Vector-only retrieval has <strong>~70-80% recall</strong> on financial QA — missing 20-30% is unacceptable for production.</li>
<li>Hallucination rates jump without grounding verification.</li>
</ul>
<h4>TL;DR</h4>
<p><strong>Hybrid retrieval → table-aware chunks → over-retrieve → cross-encoder re-rank → metadata filter → cite &amp; verify.</strong> "Good enough retrieval" isn't good enough in finance RAG.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "Finance"],
      keyPoints: [
        "Hybrid retrieval (dense + BM25) — embeddings miss exact tokens like 'Q3 FY24' or '₹4,521 Cr'",
        "Structure-aware chunking — preserve tables, attach labels/periods/currency to each figure",
        "Over-retrieve (50-100) → cross-encoder rerank → top 5-10: recall first, precision second",
        "Metadata filter BEFORE retrieval (company/year/statement); ground + numeric verify in answer",
        "Evaluate on recall@k AND faithfulness — missed figure is as bad as wrong figure in finance"
      ]
    },
    {
      question: "How do you build enterprise-grade RAG pipelines?",
      answer: `<p>Enterprise RAG is not a single retrieval call — it is a multi-stage pipeline with access control, evaluation, and observability baked in.</p>
<h4>Reference Architecture</h4>
<ol>
<li><strong>Ingestion pipeline:</strong>
  <ul>
    <li>Document loaders: PDF, DOCX, HTML, code, structured data (SQL, Notion, Confluence).</li>
    <li>Cleaners: strip headers, footers, boilerplate; normalize unicode; extract tables.</li>
    <li>Chunkers: semantic-aware (sentence boundaries, section-aware), not fixed-size. 256–1024 tokens with overlap.</li>
    <li>Metadata enrichment: source, author, date, version, permissions, document type.</li>
  </ul>
</li>
<li><strong>Indexing pipeline:</strong>
  <ul>
    <li>Embeddings: domain-tuned when possible (e.g., legal embeddings for legal docs).</li>
    <li>Vector DB: Pinecone, Weaviate, Milvus, Qdrant, pgvector — pick by scale, cost, ops complexity.</li>
    <li>Hybrid search: BM25 + vector, fused via RRF or learned reranker. Pure vector misses keyword matches.</li>
    <li>Metadata filters: enable filtered retrieval by tenant, role, date, document type.</li>
  </ul>
</li>
<li><strong>Query pipeline (per request):</strong>
  <ul>
    <li>Query rewriting: rephrase vague user queries; decompose multi-part questions.</li>
    <li>Retrieval: hybrid + filtered by access control.</li>
    <li>Reranking: cross-encoder rerank (Cohere, bge-reranker) for top-k precision.</li>
    <li>Context construction: format retrieved chunks with metadata; respect token limits.</li>
    <li>Generation: grounded prompt with citations; low temperature.</li>
    <li>Post-processing: extract citations, verify faithfulness, log everything.</li>
  </ul>
</li>
<li><strong>Cross-cutting concerns:</strong>
  <ul>
    <li>Access control at retrieval layer (filter by user role/tenant before sending to LLM).</li>
    <li>Citations: every claim linked to a source document and chunk ID.</li>
    <li>Observability: log queries, retrievals, generations, faithfulness scores, user feedback.</li>
    <li>Evaluation: regression tests, golden datasets, online A/B tests.</li>
    <li>Cost control: caching, query classification, cascade to smaller models.</li>
  </ul>
</li>
</ol>
<h4>Anti-Patterns to Avoid</h4>
<ul>
<li><strong>Fixed-size 500-token chunks with no overlap</strong> — splits mid-sentence; misses cross-chunk context.</li>
<li><strong>Single embedding model for all domains</strong> — medical, legal, and code need different models.</li>
<li><strong>No access control</strong> — RAG leaks data across tenants if filters are not enforced.</li>
<li><strong>No evaluation</strong> — you cannot improve what you cannot measure.</li>
</ul>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "Enterprise AI", "Architecture"],
      keyPoints: [
        "Enterprise RAG = ingestion (load, clean, chunk, enrich metadata) + indexing (embed, hybrid, filters) + query (rewrite, retrieve, rerank, generate)",
        "Cross-cutting: access control at retrieval layer, citations, observability, evaluation, cost control",
        "Use hybrid search (BM25 + vector) — pure vector misses keyword matches; use rerankers for top-k precision",
        "Anti-patterns: fixed-size chunks, single embedding model, no access control, no evaluation"
      ]
    },
    {
      question: "Why do chunking and retrieval strategies matter?",
      answer: `<p>Chunking and retrieval are the two levers that determine <em>what</em> the LLM sees. Get them wrong, and the LLM hallucinates — no matter how good the model is.</p>
<h4>Why Chunking Matters</h4>
<p>The LLM only sees what you put in its context window. If the relevant fact is split across two chunks and the chunks are returned separately, the LLM never sees the complete answer.</p>
<table style='border-collapse:collapse;margin:10px 0;'>
<tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Strategy</th><th style='padding:8px;border:1px solid #ddd;'>Pros</th><th style='padding:8px;border:1px solid #ddd;'>Cons</th></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Fixed-size (e.g., 500 tokens)</td><td style='padding:8px;border:1px solid #ddd;'>Simple, predictable</td><td style='padding:8px;border:1px solid #ddd;'>Splits mid-sentence; loses context</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Sentence-aware</td><td style='padding:8px;border:1px solid #ddd;'>Respects boundaries</td><td style='padding:8px;border:1px solid #ddd;'>Variable chunk size; can be very long</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Section-aware (markdown headers)</td><td style='padding:8px;border:1px solid #ddd;'>Preserves document structure</td><td style='padding:8px;border:1px solid #ddd;'>Needs structured input</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Semantic (cluster similar sentences)</td><td style='padding:8px;border:1px solid #ddd;'>Coherent chunks</td><td style='padding:8px;border:1px solid #ddd;'>Slower, more complex</td></tr>
<tr><td style='padding:8px;border:1px solid #ddd;'>Sliding window with overlap</td><td style='padding:8px;border:1px solid #ddd;'>Captures cross-chunk context</td><td style='padding:8px;border:1px solid #ddd;'>Doubles storage cost</td></tr>
</table>
<h4>Why Retrieval Strategy Matters</h4>
<p>Even with perfect chunks, bad retrieval returns the wrong ones. The LLM cannot reason about information it does not have.</p>
<ul>
<li><strong>Top-k is a tradeoff:</strong> k=3 is fast and focused but may miss context. k=20 is comprehensive but wastes tokens and confuses the LLM.</li>
<li><strong>Dense vs sparse vs hybrid:</strong>
  <ul>
    <li><strong>Dense (vector):</strong> great for semantic similarity ("how to handle errors" matches "exception management").</li>
    <li><strong>Sparse (BM25):</strong> great for exact keywords, product names, error codes.</li>
    <li><strong>Hybrid:</strong> combines both — usually wins. Fuse with RRF or a learned reranker.</li>
  </ul>
</li>
<li><strong>Reranking:</strong> A first-stage retriever (fast, recall-oriented) gets top-100, then a cross-encoder reranker (slow, precision-oriented) re-scores them. Standard production pattern.</li>
<li><strong>Query rewriting:</strong> User queries are often vague or have implicit context. Rewrite them ("What was Q3 revenue?" → "What was the company's revenue in Q3 2024?") to improve recall.</li>
<li><strong>Multi-query / HyDE:</strong> Generate multiple variations of the query, retrieve for each, merge results. Improves recall for ambiguous queries.</li>
</ul>
<h4>The Interaction</h4>
<p>Smaller chunks = better granularity but more chances to lose cross-chunk context. Larger chunks = better context but more noise and wasted tokens. The "right" answer depends on the task:</p>
<ul>
<li><strong>Q&amp;A over FAQs:</strong> small chunks (256 tokens), top-k=3, dense retrieval.</li>
<li><strong>Legal / compliance:</strong> larger chunks (1024+ tokens), high recall, hybrid + reranking, citation required.</li>
<li><strong>Code search:</strong> function-level chunks, hybrid (text + AST), low top-k.</li>
</ul>
<p>The lesson: <strong>chunking and retrieval are not afterthoughts — they set the upper bound on answer quality.</strong> A frontier model with bad retrieval will lose to a small model with great retrieval.</p>`,
      difficulty: "Advanced",
      tags: ["AI Engineer", "RAG", "Retrieval", "Architecture"],
      keyPoints: [
        "Chunking sets the upper bound on answer quality — bad chunks = LLM never sees the right fact",
        "Chunking strategies: fixed (simple, breaks context), sentence-aware, section-aware, semantic, sliding window with overlap",
        "Retrieval strategies: dense (semantic), sparse/BM25 (keywords), hybrid (usually wins), reranking (precision), query rewriting (recall)",
        "Smaller chunks = better granularity, more context loss; larger chunks = better context, more noise — pick by task"
      ]
    }
  ]
};
