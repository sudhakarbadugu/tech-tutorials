export const module10 = {
  'llm-gateway': {
    title: 'LLM Gateway',
    sections: [
      {
        heading: 'What is an LLM Gateway?',
        text: 'An LLM gateway is a centralized service that routes, manages, and monitors requests to Large Language Models. It abstracts away provider differences (OpenAI, Anthropic, local models), handles authentication, rate limiting, caching, fallbacks, and cost tracking — similar to an API gateway but specialized for LLM workloads.',
        list: [
          '<strong>Multi-provider routing:</strong> Route to OpenAI, Anthropic, or local models based on task, cost, or latency',
          '<strong>Token-based rate limiting:</strong> Limit by tokens per minute (TPM), not just requests per minute',
          '<strong>Cost tracking:</strong> Track token usage and cost per user, team, or application',
          '<strong>Semantic caching:</strong> Cache similar prompts by embedding similarity — reuse responses for semantically identical questions',
          '<strong>Fallback chains:</strong> If GPT-4 is down, fall back to Claude, then to a local model'
        ]
      },
      {
        heading: 'LLM Gateway Architecture',
        diagram: `graph TB
    App[Application] --> GW[LLM Gateway]
    
    GW -->|Auth & Quota| Auth[Auth Service]
    GW -->|Check cache| Cache[(Semantic Cache<br/>Vector DB)]
    GW -->|Track usage| Metrics[Cost & Token Metrics]
    GW -->|Rate limit| RL[Token Rate Limiter]
    
    GW -->|Route| OpenAI[OpenAI GPT-4]
    GW -->|Route| Anthropic[Anthropic Claude]
    GW -->|Route| Local[Local Llama Model]
    
    OpenAI -.->|Fail| Anthropic
    Anthropic -.->|Fail| Local
    
    style GW fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'The LLM gateway sits between applications and LLM providers. It handles auth, semantic caching, token rate limiting, cost tracking, and routes to the appropriate provider with fallback chains.'
      },
      {
        heading: 'Code Example: LLM Gateway Router',
        code: `import hashlib
from collections import defaultdict

class LLMGateway:
    def __init__(self):
        self.providers = {}
        self.fallback_chains = {}
        self.token_usage = defaultdict(int)
        self.token_limits = {'free': 10000, 'pro': 100000, 'enterprise': 1000000}
        self.cost_per_token = {}

    def register_provider(self, name, client, cost_per_1k_tokens):
        self.providers[name] = client
        self.cost_per_token[name] = cost_per_1k_tokens / 1000

    def set_fallback(self, primary, fallback):
        self.fallback_chains[primary] = fallback

    def check_quota(self, user_id, tier, tokens_needed):
        remaining = self.token_limits[tier] - self.token_usage[user_id]
        if remaining < tokens_needed:
            return False
        return True

    def call(self, prompt, user_id='default', tier='free',
             preferred='openai', max_tokens=1000):
        # Estimate tokens (rough: 1 token ~ 4 chars)
        est_tokens = len(prompt) // 4 + max_tokens
        if not self.check_quota(user_id, tier, est_tokens):
            return {'error': 'Quota exceeded', 'remaining': 
                    self.token_limits[tier] - self.token_usage[user_id]}

        # Try preferred, then fallback chain
        provider = preferred
        while provider:
            try:
                # In practice: self.providers[provider].complete(prompt)
                result = f'[{provider}] Response to: {prompt[:50]}...'
                actual_tokens = est_tokens
                self.token_usage[user_id] += actual_tokens
                cost = actual_tokens * self.cost_per_token.get(provider, 0)
                return {'response': result, 'provider': provider,
                        'tokens': actual_tokens, 'cost': round(cost, 4)}
            except Exception as e:
                provider = self.fallback_chains.get(provider)
                if not provider:
                    return {'error': 'All providers failed'}

gw = LLMGateway()
gw.register_provider('openai', None, 0.03)    # $0.03/1K tokens
gw.register_provider('anthropic', None, 0.015) # $0.015/1K tokens
gw.register_provider('local', None, 0.0)        # free
gw.set_fallback('openai', 'anthropic')
gw.set_fallback('anthropic', 'local')

print(gw.call('Explain microservices', user_id='user_1', tier='pro'))`,
        output: 'Routes to OpenAI, tracks token usage and cost. Falls back to Anthropic, then local model on failure.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>OpenAI — gateway for enterprise API.</strong> OpenAI\'s enterprise API includes gateway features: per-organization token quotas, usage tracking with detailed dashboards, and automatic retry with exponential backoff. Companies like Shopify use an LLM gateway to route customer support prompts to GPT-4 for complex queries and GPT-3.5 for simple ones, reducing costs by 60% while maintaining quality. The gateway caches common questions semantically, saving $200K/year in token costs.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'LLM gateway = centralized routing, caching, and management for LLM calls',
          'Token-based rate limiting (TPM, not just RPM)',
          'Multi-provider routing with fallback chains',
          'Semantic caching: reuse responses for similar prompts (embedding similarity)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why use token-based instead of request-based rate limiting for LLMs? → A 1-token request and a 10,000-token request have very different costs. Token limits reflect actual resource usage.',
          'Q2: How does semantic caching work for LLMs? → Embed the prompt, compare with cached prompts by cosine similarity. If similarity > threshold (e.g., 0.95), return the cached response without calling the LLM.',
          'Q3: What is a fallback chain? → Ordered list of providers: if the primary fails (rate limit, timeout, error), automatically try the next provider in the chain.'
        ]
      }
    ]
  },
  'semantic-caching': {
    title: 'Semantic Caching',
    sections: [
      {
        heading: 'What is Semantic Caching?',
        text: 'Semantic caching caches LLM responses by meaning, not exact string match. It embeds prompts into vectors and checks if a similar prompt has been asked before. If the cosine similarity exceeds a threshold (e.g., 0.95), the cached response is returned — saving API costs and reducing latency.',
        list: [
          '<strong>Embedding-based:</strong> Convert prompt to vector embedding, compare with cached embeddings',
          '<strong>Cosine similarity:</strong> Measure semantic distance — >0.95 = essentially same question',
          '<strong>Cost savings:</strong> Cache hits are free (no LLM call) — huge savings for repeated questions',
          '<strong>Latency reduction:</strong> Cache lookup (~10ms) vs LLM call (~2-5s) — 100x faster',
          '<strong>TTL + invalidation:</strong> Cache entries expire; invalidate on model updates or data changes'
        ]
      },
      {
        heading: 'Semantic Cache Architecture',
        diagram: `graph TB
    Prompt[User Prompt] --> Embed[Embedding Model<br/>text-embedding-3-small]
    Embed --> Vector[Prompt Vector 1536d]
    
    Vector -->|Similarity search| VDB[(Vector Database<br/>Pinecone/Weaviate)]
    VDB -->|Similarity > 0.95| Hit[Cache HIT<br/>Return cached response]
    VDB -->|Similarity < 0.95| Miss[Cache MISS]
    
    Miss --> LLM[Call LLM]
    LLM --> Response[Generate Response]
    Response -->|Store| VDB
    Response --> User[Return to User]
    Hit --> User
    
    style Hit fill:#bfb,stroke:#333
    style Miss fill:#fbb,stroke:#333`,
        text: 'User prompt is embedded and compared against cached prompts in a vector DB. If similarity > threshold, return cached response. Otherwise, call the LLM and store the result.'
      },
      {
        heading: 'Code Example: Semantic Cache',
        code: `import math
from collections import defaultdict

class SemanticCache:
    def __init__(self, similarity_threshold=0.95):
        self.threshold = similarity_threshold
        self.cache = []  # list of (embedding, prompt, response)
        self.stats = {'hits': 0, 'misses': 0}

    def _cosine_similarity(self, v1, v2):
        """Compute cosine similarity between two vectors."""
        dot = sum(a * b for a, b in zip(v1, v2))
        norm1 = math.sqrt(sum(a * a for a in v1))
        norm2 = math.sqrt(sum(b * b for b in v2))
        if norm1 == 0 or norm2 == 0:
            return 0
        return dot / (norm1 * norm2)

    def _embed(self, text):
        """Simulated embedding: hash-based pseudo-embedding."""
        # In practice: use OpenAI text-embedding-3-small or similar
        words = text.lower().split()
        vec = [0] * 100
        for i, word in enumerate(words):
            vec[hash(word) % 100] += 1
        return vec

    def lookup(self, prompt):
        """Check if a semantically similar prompt exists in cache."""
        query_vec = self._embed(prompt)
        best_sim = 0
        best_entry = None
        for entry in self.cache:
            sim = self._cosine_similarity(query_vec, entry['embedding'])
            if sim > best_sim:
                best_sim = sim
                best_entry = entry
        
        if best_sim >= self.threshold:
            self.stats['hits'] += 1
            print(f'  CACHE HIT (similarity={best_sim:.3f})')
            return best_entry['response']
        
        self.stats['misses'] += 1
        print(f'  CACHE MISS (best similarity={best_sim:.3f})')
        return None

    def store(self, prompt, response):
        """Store a prompt-response pair in cache."""
        self.cache.append({
            'embedding': self._embed(prompt),
            'prompt': prompt,
            'response': response
        })

# Usage
cache = SemanticCache(similarity_threshold=0.85)  # lower for demo

# First request: miss
cache.store('What is microservices architecture?',
           'Microservices is an architecture where applications are built as small, independent services...')
print(cache.lookup('What is microservices architecture?'))  # HIT
print(cache.lookup('Explain microservices architecture'))   # likely HIT
print(cache.lookup('How does a database work?'))             # MISS

print(f'\\nStats: {cache.stats}')`,
        output: 'First query misses and is stored. Second similar query hits. Unrelated query misses.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Glean — semantic caching for enterprise search.</strong> Glean (enterprise AI search) uses semantic caching to avoid redundant LLM calls. When employees ask similar questions ("How do I reset my password?" vs "How to reset password?"), the cache returns the previous answer without calling the LLM. This reduced their LLM API costs by 70% and cut average response time from 3 seconds to 50ms for cached queries. They use OpenAI text-embedding-3-small for embeddings and Pinecone for vector similarity search.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Semantic cache = cache by meaning, not exact string match',
          'Embed prompt → vector → cosine similarity vs cached prompts',
          'Threshold >0.95 = cache hit (return cached response, skip LLM call)',
          'Huge cost savings: 70%+ reduction in LLM API calls for repeated questions'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What similarity threshold should you use? → 0.95+ for strict (FAQ-type), 0.85-0.90 for lenient (may return slightly different but relevant answers). Start strict, loosen based on user feedback.',
          'Q2: How do you handle cache invalidation? → Set TTL (e.g., 24h for general, 1h for time-sensitive). Invalidate on model updates, data source changes, or explicit user feedback ("this answer was wrong").',
          'Q3: What vector DB is best for semantic caching? → Pinecone, Weaviate, or Qdrant for managed. For self-hosted: pgvector (PostgreSQL extension) or ChromaDB.'
        ]
      }
    ]
  },
  'rag-pipeline': {
    title: 'RAG Pipeline Architecture',
    sections: [
      {
        heading: 'What is RAG?',
        text: 'Retrieval-Augmented Generation (RAG) enhances LLM responses by retrieving relevant context from a knowledge base before generating an answer. The LLM grounds its response in retrieved documents, reducing hallucination and enabling access to private or up-to-date information without retraining.',
        list: [
          '<strong>Retrieve:</strong> Search vector DB for documents relevant to the user query',
          '<strong>Augment:</strong> Combine retrieved documents with the user query as context',
          '<strong>Generate:</strong> LLM generates an answer grounded in the retrieved context',
          '<strong>Chunking:</strong> Split documents into chunks (500-1000 tokens) for better retrieval',
          '<strong>Hybrid search:</strong> Combine vector (semantic) + keyword (BM25) search for best results'
        ]
      },
      {
        heading: 'RAG Pipeline Architecture',
        diagram: `graph TB
    subgraph "Ingestion Pipeline"
        Docs[Documents<br/>PDF, HTML, DB] --> Chunk[Chunker<br/>500-1000 tokens]
        Chunk --> Embed1[Embedding Model]
        Embed1 --> VDB[(Vector Database<br/>Pinecone/pgvector)]
    end
    
    subgraph "Query Pipeline"
        Query[User Query] --> Embed2[Embedding Model]
        Embed2 -->|Top-K search| VDB
        VDB -->|Retrieved chunks| Context[Context]
        Query --> Prompt[Prompt: Query + Context]
        Context --> Prompt
        Prompt --> LLM[LLM<br/>GPT-4/Claude]
        LLM --> Answer[Grounded Answer]
    end
    
    style VDB fill:#bbf,stroke:#333,stroke-width:2px
    style LLM fill:#fbb,stroke:#333`,
        text: 'Ingestion: documents are chunked, embedded, and stored in a vector DB. Query: the user question is embedded, similar chunks are retrieved, combined with the query as context, and sent to the LLM for a grounded answer.'
      },
      {
        heading: 'Code Example: RAG Pipeline',
        code: `import math
from collections import defaultdict

class SimpleEmbedder:
    """Simulated embedder (use OpenAI/ Cohere in production)."""
    def embed(self, text):
        vec = [0] * 50
        for word in text.lower().split():
            vec[hash(word) % 50] += 1
        return vec

class VectorStore:
    """Simple in-memory vector store."""
    def __init__(self):
        self.chunks = []  # (embedding, text, metadata)

    def add(self, text, metadata=None):
        emb = SimpleEmbedder().embed(text)
        self.chunks.append({'embedding': emb, 'text': text, 'meta': metadata or {}})

    def search(self, query, top_k=3):
        query_vec = SimpleEmbedder().embed(query)
        scored = []
        for chunk in self.chunks:
            sim = self._cosine(query_vec, chunk['embedding'])
            scored.append((sim, chunk))
        scored.sort(key=lambda x: -x[0])
        return scored[:top_k]

    def _cosine(self, v1, v2):
        dot = sum(a*b for a,b in zip(v1, v2))
        n1 = math.sqrt(sum(a*a for a in v1)) or 1
        n2 = math.sqrt(sum(b*b for b in v2)) or 1
        return dot / (n1 * n2)

class RAGPipeline:
    def __init__(self, vector_store):
        self.vstore = vector_store

    def ingest(self, documents):
        for doc in documents:
            self.vstore.add(doc['text'], doc.get('meta'))

    def query(self, question, top_k=3):
        # 1. Retrieve
        results = self.vstore.search(question, top_k=top_k)
        context = '\\n'.join([f'- {r[1]["text"]}' for r in results])
        print(f'  Retrieved {len(results)} chunks:')
        for sim, chunk in results:
            print(f'    [{sim:.2f}] {chunk["text"][:60]}...')

        # 2. Augment
        prompt = f'Context:\\n{context}\\n\\nQuestion: {question}\\nAnswer:'

        # 3. Generate (simulated)
        answer = f'Based on the context: {results[0][1]["text"][:80]}...'
        return {'answer': answer, 'sources': [r[1] for r in results]}

# Test
store = VectorStore()
rag = RAGPipeline(store)

rag.ingest([
    {'text': 'Microservices are small independent services that communicate via APIs.', 'meta': {'doc': 'arch.md'}},
    {'text': 'Kubernetes orchestrates container deployment, scaling, and management.', 'meta': {'doc': 'k8s.md'}},
    {'text': 'Event-driven architecture uses events to trigger actions between services.', 'meta': {'doc': 'eda.md'}},
])

result = rag.query('What is microservices?')
print(f'\\nAnswer: {result["answer"]}')`,
        output: 'Retrieves relevant chunks from vector store, combines with query, generates grounded answer.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>NVIDIA — RAG for internal knowledge base.</strong> NVIDIA built ChatRTX, a RAG system that lets employees query internal documentation. Documents are chunked (512 tokens with 50-token overlap), embedded with NVIDIA NeMo Retriever, and stored in a vector DB. When an engineer asks "How do I configure CUDA for multi-GPU training?", the system retrieves relevant docs from 50,000+ internal pages and generates a grounded answer with citations. This reduced support ticket resolution time by 40%.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'RAG = Retrieve relevant context → Augment prompt → Generate grounded answer',
          'Chunking: 500-1000 tokens with overlap for better retrieval',
          'Hybrid search (vector + keyword/BM25) outperforms pure semantic search',
          'Reduces hallucination: LLM answers from retrieved context, not memorization'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why chunk documents instead of embedding the whole document? → Shorter chunks retrieve more precisely. A 10-page doc may have one relevant paragraph — chunking surfaces that specific section.',
          'Q2: What is hybrid search in RAG? → Combining vector similarity (semantic match) with BM25/keyword search (exact term match). Hybrid catches both "meaning" and "specific term" queries.',
          'Q3: How do you evaluate RAG quality? → Use RAGAS or similar: measure faithfulness (answer from context), relevance (retrieved chunks match query), and answer correctness vs ground truth.'
        ]
      }
    ]
  },
  'vector-db-sharding': {
    title: 'Vector Database Sharding',
    sections: [
      {
        heading: 'What is Vector DB Sharding?',
        text: 'Vector database sharding partitions vector indices across multiple nodes to handle datasets too large for a single machine. Each shard holds a subset of vectors; queries fan out to all shards in parallel, and results are merged. This enables billion-vector search with low latency.',
        list: [
          '<strong>Hash-based sharding:</strong> Partition vectors by document ID hash — even distribution',
          '<strong>Range-based sharding:</strong> Partition by vector magnitude or metadata range — locality-aware',
          '<strong>IVF (Inverted File):</strong> Cluster vectors, assign to nearest centroid — query only nearby clusters',
          '<strong>HNSW (Hierarchical Navigable Small World):</strong> Graph-based ANN — fast but memory-heavy',
          '<strong>Fan-out query:</strong> Send query to all shards → merge top-K from each shard → final top-K'
        ]
      },
      {
        heading: 'Vector DB Sharding Architecture',
        diagram: `graph TB
    Query[Query Vector] --> Router[Shard Router]
    
    Router -->|Fan out| S1[Shard 1<br/>Vectors 0-1M]
    Router -->|Fan out| S2[Shard 2<br/>Vectors 1-2M]
    Router -->|Fan out| S3[Shard 3<br/>Vectors 2-3M]
    Router -->|Fan out| S4[Shard 4<br/>Vectors 3-4M]
    
    S1 -->|Top-K| Merge[Merge Results]
    S2 -->|Top-K| Merge
    S3 -->|Top-K| Merge
    S4 -->|Top-K| Merge
    
    Merge -->|Final Top-K| Result[Query Result]
    
    subgraph "IVF Index per Shard"
        Centroid[Centroids] --> Cluster1[Cluster A<br/>nearby vectors]
        Centroid --> Cluster2[Cluster B<br/>nearby vectors]
        Query2[Query] -->|nprobe=4| Centroid
    end`,
        text: 'Query fans out to all shards in parallel. Each shard returns its local top-K. The router merges all local top-K results and returns the global top-K. IVF index reduces per-shard search to nearby clusters only.'
      },
      {
        heading: 'Code Example: Sharded Vector Search',
        code: `import math
import random
from collections import defaultdict

class VectorShard:
    def __init__(self, shard_id):
        self.shard_id = shard_id
        self.vectors = []  # (id, vector, metadata)

    def insert(self, vec_id, vector, meta=None):
        self.vectors.append({'id': vec_id, 'vec': vector, 'meta': meta or {}})

    def search(self, query_vec, top_k=5):
        scored = []
        for item in self.vectors:
            sim = self._cosine(query_vec, item['vec'])
            scored.append((sim, item))
        scored.sort(key=lambda x: -x[0])
        return scored[:top_k]

    def _cosine(self, v1, v2):
        dot = sum(a*b for a,b in zip(v1, v2))
        n1 = math.sqrt(sum(a*a for a in v1)) or 1
        n2 = math.sqrt(sum(b*b for b in v2)) or 1
        return dot / (n1 * n2)

class ShardedVectorDB:
    def __init__(self, num_shards=4):
        self.shards = [VectorShard(i) for i in range(num_shards)]
        self.num_shards = num_shards

    def insert(self, vec_id, vector, meta=None):
        shard_idx = hash(vec_id) % self.num_shards
        self.shards[shard_idx].insert(vec_id, vector, meta)

    def search(self, query_vec, top_k=5):
        # Fan out to all shards
        all_results = []
        for shard in self.shards:
            results = shard.search(query_vec, top_k)
            all_results.extend(results)
        
        # Merge: global top-K from all local top-K
        all_results.sort(key=lambda x: -x[0])
        return all_results[:top_k]

    def stats(self):
        return {f'shard_{s.shard_id}': len(s.vectors) for s in self.shards}

# Test: insert 1000 vectors, search
db = ShardedVectorDB(num_shards=4)
for i in range(1000):
    vec = [random.random() for _ in range(10)]
    db.insert(f'vec_{i}', vec, {'category': random.choice(['A', 'B', 'C'])})

print('Shard distribution:', db.stats())
query = [random.random() for _ in range(10)]
results = db.search(query, top_k=3)
print(f'Top-3 results:')
for sim, item in results:
    print(f'  {item["id"]} (sim={sim:.3f}) cat={item["meta"]["category"]}')`,
        output: 'Vectors distributed across 4 shards. Query fans out to all shards, results merged for global top-K.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Pinecone — billion-vector sharded search.</strong> Pinecone shards vector indices across multiple replicas. For a 1-billion-vector index, Pinecone uses ~64 shards, each holding ~15M vectors with an IVF index. Queries fan out to all 64 shards in parallel, each returning local top-K=100. Pinecone merges these 6,400 candidates into a final top-K=10 in under 100ms. Sharding by metadata (e.g., tenant_id) enables per-tenant isolation — each tenant\'s vectors are on specific shards, improving cache locality.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Vector sharding = partition indices across nodes for billion-scale search',
          'Query fans out to all shards → merge local top-K → global top-K',
          'IVF index: cluster vectors, search only nearby clusters (nprobe parameter)',
          'Shard by metadata (tenant_id) for isolation, or by hash for even distribution'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the tradeoff of more shards? → Lower per-shard search time but higher fan-out overhead and merge cost. Optimal shard count balances parallelism vs overhead.',
          'Q2: How does IVF reduce search time? → Instead of comparing the query against all vectors, it only compares against vectors in the nearest N clusters (nprobe). Trades recall for speed.',
          'Q3: When should you shard by metadata instead of hash? → When queries are always scoped to a tenant/namespace. Metadata sharding ensures all relevant vectors are on one shard — no fan-out needed.'
        ]
      }
    ]
  },
  'gpu-serving': {
    title: 'GPU Serving & Batching',
    sections: [
      {
        heading: 'What is GPU Serving & Batching?',
        text: 'GPU serving optimizes LLM inference on GPUs. The key optimization is batching — grouping multiple requests into a single forward pass through the model. Since GPU memory is the bottleneck, techniques like KV-cache, paged attention, and continuous batching maximize throughput while keeping latency acceptable.',
        list: [
          '<strong>Static batching:</strong> Wait until N requests arrive, process together — high throughput, high latency',
          '<strong>Continuous batching:</strong> Insert new requests into the running batch — no waiting, good throughput',
          '<strong>KV-cache:</strong> Cache attention key-value pairs across tokens — avoid recomputing past tokens',
          '<strong>Paged attention (vLLM):</strong> Manage KV-cache memory like virtual memory pages — 3x throughput',
          '<strong>Quantization:</strong> Use INT8/INT4 instead of FP16 — halves memory, 2x throughput, minor quality loss'
        ]
      },
      {
        heading: 'GPU Serving Architecture',
        diagram: `graph TB
    subgraph "Request Queue"
        R1[Request 1] --> Queue[Batching Queue]
        R2[Request 2] --> Queue
        R3[Request 3] --> Queue
        R4[Request 4] --> Queue
    end
    
    Queue -->|Batch of 4| GPU[GPU<br/>Forward Pass]
    GPU -->|KV Cache| Cache[(KV Cache<br/>Paged Attention)]
    GPU -->|Output| Results[Parse Results]
    Results --> R1r[Response 1]
    Results --> R2r[Response 2]
    Results --> R3r[Response 3]
    Results --> R4r[Response 4]
    
    subgraph "Continuous Batching"
        New[New Request] -->|Insert mid-batch| GPU
        Done[Request Done] -->|Remove from batch| GPU
    end
    
    style GPU fill:#bbf,stroke:#333,stroke-width:2px
    style Queue fill:#bfb`,
        text: 'Requests are batched and processed in a single GPU forward pass. Continuous batching inserts/removes requests mid-batch. KV-cache avoids recomputing past tokens. Paged attention manages memory efficiently.'
      },
      {
        heading: 'Code Example: GPU Batch Scheduler',
        code: `import time
import random
from collections import deque

class GPUBatchScheduler:
    def __init__(self, max_batch_size=32, max_wait_ms=50):
        self.max_batch = max_batch_size
        self.max_wait = max_wait_ms / 1000
        self.queue = deque()
        self.stats = {'served': 0, 'avg_batch': 0, 'avg_latency': 0}

    def submit(self, request_id, prompt, max_tokens=100):
        """Submit a request to the batching queue."""
        self.queue.append({
            'id': request_id,
            'prompt': prompt,
            'max_tokens': max_tokens,
            'submit_time': time.time()
        })

    def _run_batch(self, batch):
        """Simulate GPU forward pass on a batch."""
        batch_size = len(batch)
        # Simulate: larger batches take slightly longer but throughput per request is higher
        processing_time = 0.05 + 0.001 * batch_size  # base + per-request
        time.sleep(processing_time)
        
        results = []
        for req in batch:
            latency = (time.time() - req['submit_time']) * 1000
            results.append({
                'id': req['id'],
                'response': f'Generated {req["max_tokens"]} tokens',
                'latency_ms': round(latency, 1)
            })
            self.stats['served'] += 1
        
        self.stats['avg_batch'] = (self.stats['avg_batch'] + batch_size) / 2
        return results

    def serve(self):
        """Process requests with batching."""
        while self.queue:
            # Wait for batch to fill or timeout
            batch = []
            wait_start = time.time()
            while len(batch) < self.max_batch and self.queue:
                if time.time() - wait_start > self.max_wait and batch:
                    break  # timeout: process what we have
                batch.append(self.queue.popleft())
            
            if batch:
                print(f'  Batch: {len(batch)} requests')
                results = self._run_batch(batch)
                for r in results:
                    print(f'    {r["id"]}: latency={r["latency_ms"]}ms')

# Simulate
scheduler = GPUBatchScheduler(max_batch_size=8, max_wait_ms=20)

# Submit requests at different times
for i in range(10):
    scheduler.submit(f'req_{i}', f'prompt_{i}', max_tokens=50)
    time.sleep(0.005)  # 5ms between submissions

scheduler.serve()
print(f'\\nStats: {scheduler.stats}')`,
        output: 'Requests are batched (up to 8) or processed after 20ms wait. Larger batches = better throughput.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>vLLM — PagedAttention for 3x throughput.</strong> vLLM (developed at UC Berkeley) introduced PagedAttention, which manages the KV-cache like virtual memory — allocating fixed-size pages instead of contiguous memory blocks. This eliminates memory fragmentation and allows batching 3x more requests on the same GPU. Anyscale uses vLLM to serve Llama-70B on A100 GPUs, achieving 2,400 tokens/second (vs 800 with standard serving) — serving 3x more users on the same hardware.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Batching = group requests into one GPU forward pass — higher throughput',
          'Continuous batching: insert/remove requests mid-batch (no waiting)',
          'KV-cache: cache attention values to avoid recomputing past tokens',
          'PagedAttention (vLLM): virtual-memory-style KV-cache — 3x throughput'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Static vs continuous batching? → Static: wait for N requests (high latency). Continuous: insert new requests into running batch (low latency, high throughput).',
          'Q2: Why is KV-cache important? → Without it, each new token requires recomputing attention for all previous tokens — O(n²) per step. KV-cache makes it O(n) per step.',
          'Q3: How does quantization help? → INT8 halves memory vs FP16, allowing 2x larger batch sizes on the same GPU. INT4 (4-bit) gives 4x but with measurable quality loss.'
        ]
      }
    ]
  },
  'model-routing': {
    title: 'Model Routing & Fallback',
    sections: [
      {
        heading: 'What is Model Routing?',
        text: 'Model routing sends each request to the best LLM based on the task complexity, cost, and latency requirements. Simple queries go to a small, fast model (GPT-3.5); complex reasoning goes to a large model (GPT-4). Fallback ensures availability: if the primary model fails, the request routes to a backup.',
        list: [
          '<strong>Complexity-based routing:</strong> Classify prompt → route simple to small model, complex to large',
          '<strong>Cost optimization:</strong> Use cheapest model that meets quality threshold',
          '<strong>Latency routing:</strong> Route to fastest available model for real-time use cases',
          '<strong>Fallback chains:</strong> Primary → secondary → tertiary (ensure availability)',
          '<strong>A/B routing:</strong> Split traffic between models for evaluation'
        ]
      },
      {
        heading: 'Model Routing Architecture',
        diagram: `graph TB
    Req[User Request] --> Classifier[Prompt Classifier<br/>Simple/Medium/Complex]
    
    Classifier -->|Simple| Small[Small Model<br/>GPT-3.5 / Llama-8B<br/>$0.001/req, 200ms]
    Classifier -->|Medium| Med[Medium Model<br/>GPT-4-mini<br/>$0.01/req, 500ms]
    Classifier -->|Complex| Large[Large Model<br/>GPT-4 / Claude Opus<br/>$0.10/req, 2s]
    
    Small -.->|Fail| Med
    Med -.->|Fail| Large
    Large -.->|Fail| Med
    
    Small --> Response[Response]
    Med --> Response
    Large --> Response
    
    style Classifier fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'A prompt classifier routes requests by complexity. Simple prompts go to a small, cheap, fast model. Complex prompts go to a large, expensive model. Fallbacks ensure availability if a model fails.'
      },
      {
        heading: 'Code Example: Model Router',
        code: `import random
from collections import defaultdict

class ModelRouter:
    def __init__(self):
        self.models = {
            'gpt-35': {'cost': 0.001, 'latency_ms': 200, 'capacity': 1000,
                       'quality': 0.7, 'available': True},
            'gpt-4-mini': {'cost': 0.01, 'latency_ms': 500, 'capacity': 500,
                           'quality': 0.85, 'available': True},
            'gpt-4': {'cost': 0.10, 'latency_ms': 2000, 'capacity': 100,
                      'quality': 0.95, 'available': True},
            'llama-local': {'cost': 0.0, 'latency_ms': 100, 'capacity': 50,
                            'quality': 0.6, 'available': True}
        }
        self.fallbacks = {
            'gpt-35': ['gpt-4-mini', 'llama-local'],
            'gpt-4-mini': ['gpt-4', 'llama-local'],
            'gpt-4': ['gpt-4-mini', 'gpt-35']
        }
        self.routing_stats = defaultdict(int)

    def classify_complexity(self, prompt):
        """Classify prompt complexity (simulated)."""
        word_count = len(prompt.split())
        has_code = 'code' in prompt.lower() or 'triple-backtick' in prompt
        has_reasoning = any(w in prompt.lower() for w in 
                          ['explain', 'analyze', 'compare', 'design', 'why'])
        
        if has_code and has_reasoning or word_count > 100:
            return 'complex'
        elif has_reasoning or word_count > 30:
            return 'medium'
        return 'simple'

    def route(self, prompt, max_cost=None, max_latency=None):
        complexity = self.classify_complexity(prompt)
        
        model_map = {'simple': 'gpt-35', 'medium': 'gpt-4-mini', 'complex': 'gpt-4'}
        preferred = model_map[complexity]
        
        # Check constraints
        model = self.models[preferred]
        if max_cost and model['cost'] > max_cost:
            # Downgrade to cheaper model
            for m in ['gpt-35', 'llama-local']:
                if self.models[m]['cost'] <= max_cost:
                    preferred = m
                    model = self.models[m]
                    break
        
        # Check availability with fallback
        chain = [preferred] + self.fallbacks.get(preferred, [])
        for model_name in chain:
            if self.models[model_name]['available']:
                self.routing_stats[model_name] += 1
                return {
                    'model': model_name,
                    'complexity': complexity,
                    'cost': self.models[model_name]['cost'],
                    'est_latency_ms': self.models[model_name]['latency_ms']
                }
        
        return {'error': 'No model available'}

# Test
router = ModelRouter()
prompts = [
    'Hi',                                           # simple
    'Explain microservices architecture',           # medium
    'Design a distributed system for real-time chat with code examples',  # complex
]
for p in prompts:
    r = router.route(p)
    print(f'  [{r.get("complexity", "?")}] {p[:40]}... -> {r["model"]} '
          f'($ {r['cost']}, {r["est_latency_ms"]}ms)')

print(f'\\nRouting stats: {dict(router.routing_stats)}')`,
        output: 'Simple prompt → gpt-35 (cheap). Medium → gpt-4-mini. Complex → gpt-4 (expensive).',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Notion — model routing for AI features.</strong> Notion uses model routing for their AI assistant. Quick actions (summarize, autocomplete) route to GPT-3.5 for 200ms response time. Complex tasks (write a blog post, analyze data) route to GPT-4. They use a lightweight classifier (a fine-tuned small model) to predict complexity, achieving 85% accuracy. This routing strategy reduced their LLM costs by 65% — 80% of prompts are simple enough for the cheap model, while the expensive GPT-4 is reserved for the 20% that truly need it.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Model routing = send each request to the best model for the task',
          'Route by complexity: simple → small model, complex → large model',
          'Fallback chains ensure availability: primary → secondary → tertiary',
          'Cost savings: 65%+ by routing simple queries to cheap models'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you classify prompt complexity? → Use a small, fast classifier model or heuristics (token count, keyword matching, code detection). Fine-tune a small model on labeled examples for better accuracy.',
          'Q2: What is cascading fallback? → Try the preferred model; if it fails (rate limit, timeout, error), try the next in the chain. Log which model served each request for debugging.',
          'Q3: How do you measure routing quality? → Track user satisfaction (thumbs up/down) per model per complexity. If simple prompts routed to gpt-35 get low ratings, adjust the classifier or thresholds.'
        ]
      }
    ]
  }
};