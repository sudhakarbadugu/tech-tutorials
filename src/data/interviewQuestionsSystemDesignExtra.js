// Extra system design interview questions covering gaps not in interviewQuestionsSystemDesign.js

export const systemDesignExtraQuestions = {
  "questions": [
    {
      "question": `How does consistent hashing work, and why is it useful for distributed caches or databases?`,
      "answer": `<p><strong>Consistent hashing</strong> maps both nodes and keys onto the same hash ring so that adding or removing a node only affects a small fraction of keys, unlike modulo hashing where <code>hash(key) % N</code> reshuffles almost everything.</p><h4>Traditional Modulo Problem</h4><p>With <code>N = 4</code> nodes, key <code>K</code> lands on node <code>hash(K) % 4</code>. When <code>N</code> becomes 5, roughly 75% of keys move, causing cache misses or data migration storms.</p><h4>How Consistent Hashing Works</h4><ol><li>Map each physical node to multiple <strong>virtual nodes</strong> (replicas) on a 0..2^32-1 ring using a hash function.</li><li>Hash each data key and walk clockwise until the first virtual node; that node owns the key.</li><li>Adding a node inserts new virtual-node arcs; only keys in those arcs move.</li><li>Removing a node deletes its arcs; only its former neighbors absorb the keys.</li></ol><h4>Trade-offs</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Pros</th><th style='padding:8px;border:1px solid #ddd;'>Cons</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Minimal redistribution</td><td style='padding:8px;border:1px solid #ddd;'>Needs virtual nodes for even load</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Elastic scale-out/in</td><td style='padding:8px;border:1px solid #ddd;'>Hotspots still possible for skewed keys</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Fast lookup with balanced tree</td><td style='padding:8px;border:1px solid #ddd;'>More complex than modulo</td></tr></table><pre><code class="language-python">import hashlib
import bisect

class ConsistentHashRing:
    def __init__(self, nodes=None, replicas=150):
        self.replicas = replicas
        self.ring = []          # sorted list of hash values
        self.nodes = {}         # hash to node mapping
        for node in nodes or []:
            self.add_node(node)

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def add_node(self, node):
        for i in range(self.replicas):
            h = self._hash(f"{node}:{i}")
            self.ring.append(h)
            self.nodes[h] = node
        self.ring.sort()

    def remove_node(self, node):
        for i in range(self.replicas):
            h = self._hash(f"{node}:{i}")
            self.ring.remove(h)
            del self.nodes[h]

    def get_node(self, key):
        if not self.ring:
            return None
        h = self._hash(key)
        idx = bisect.bisect_right(self.ring, h) % len(self.ring)
        return self.nodes[self.ring[idx]]
</code></pre><p><strong>Common pitfall:</strong> Using too few virtual nodes leads to uneven load; using non-uniform hash functions creates clustering. Dynamo and Cassandra use this technique with tunable replica counts.</p>`,
      "difficulty": `Advanced`,
      "tags": [
        `System Design`,
        `Consistent Hashing`,
        `Distributed Systems`
      ],
      "keyPoints": [
        `Both keys and nodes are placed on the same hash ring; ownership is determined clockwise.`,
        `Adding or removing a node only moves keys in adjacent arcs, not the whole dataset.`,
        `Virtual nodes improve load balance but require careful tuning of replica counts.`
      ]
    },
    {
      "question": `Explain leader election in distributed systems and how Raft achieves consensus.`,
      "answer": `<p><strong>Leader election</strong> picks one coordinator in a distributed cluster so clients have a single authoritative writer, avoiding split-brain and simplifying replication. <strong>Raft</strong> is a consensus algorithm that makes leader election and log replication understandable.</p><h4>Raft Roles</h4><ul><li><strong>Follower:</strong> Receives log entries and heartbeats from the leader.</li><li><strong>Candidate:</strong> Starts an election when it times out without hearing from a leader.</li><li><strong>Leader:</strong> Handles all client writes and replicates entries to followers.</li></ul><h4>Election Flow</h4><ol><li>Each node has a random election timeout (e.g., 150-300ms).</li><li>If a follower receives no heartbeat, it increments its term, votes for itself, and asks peers for votes.</li><li>A candidate wins if it receives a majority of votes for that term.</li><li>The new leader sends periodic heartbeats to suppress further elections.</li></ol><h4>Safety Rules</h4><ul><li>A node votes only once per term and only for a candidate whose log is at least as up-to-date.</li><li>Committed entries (replicated on a majority) are guaranteed to survive future leader changes.</li></ul><pre><code class="language-python"># Simplified Raft vote RPC handler
def request_vote(term, candidate_id, last_log_index, last_log_term):
    if term &lt; current_term:
        return current_term, False
    if term &gt; current_term:
        current_term = term
        voted_for = None
        become_follower()
    if voted_for in (None, candidate_id) and \\
       log_is_at_least_as_up_to_date(last_log_index, last_log_term):
        voted_for = candidate_id
        return current_term, True
    return current_term, False
</code></pre><h4>Trade-offs</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Pros</th><th style='padding:8px;border:1px solid #ddd;'>Cons</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Easier to reason about than Paxos</td><td style='padding:8px;border:1px solid #ddd;'>Leader is a bottleneck for writes</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Strong consistency on committed writes</td><td style='padding:8px;border:1px solid #ddd;'>Unavailable for writes during leader failover</td></tr></table><p><strong>Real-world uses:</strong> etcd, Consul, Kafka KRaft, TiKV, CockroachDB.</p>`,
      "difficulty": `Advanced`,
      "tags": [
        `System Design`,
        `Raft`,
        `Consensus`,
        `Distributed Systems`
      ],
      "keyPoints": [
        `Raft separates leader election, log replication, and safety into clear phases.`,
        `A candidate must win a majority of votes and have an up-to-date log to become leader.`,
        `Committed entries survive leader changes because they are replicated to a majority.`
      ]
    },
    {
      "question": `How do you maintain consistency across distributed services without a global transaction?`,
      "answer": `<p>In microservices each service owns its own database, so ACID transactions across services are impractical. Patterns like <strong>Saga</strong>, <strong>two-phase commit (2PC)</strong>, and <strong>outbox</strong> coordinate consistency without locking the whole system.</p><h4>Saga Pattern</h4><p>A saga splits a business transaction into a sequence of local transactions. If a step fails, compensating transactions undo previous steps.</p><ul><li><strong>Choreography:</strong> Services emit domain events; other services react. Loose coupling but harder to trace.</li><li><strong>Orchestration:</strong> A central coordinator drives each step and invokes compensations. Easier to monitor and debug.</li></ul><h4>Example: Order → Payment → Inventory</h4><pre><code class="language-text">1. Order Service: create order (PENDING)
2. Payment Service: charge card
   - FAIL → Order Service compensates: cancel order
3. Inventory Service: reserve item
   - FAIL → Payment Service refunds, Order Service cancels
</code></pre><h4>Outbox Pattern</h4><p>Write business data and an event to an outbox table in the same local DB transaction. A separate relay publishes the event to a message bus, guaranteeing at-least-once delivery.</p><pre><code class="language-sql">BEGIN;
  INSERT INTO orders (id, status) VALUES ('ord-1', 'PENDING');
  INSERT INTO outbox (topic, payload)
    VALUES ('orders.created', '{"orderId":"ord-1"}');
COMMIT;
-- Relay polls outbox and publishes to Kafka, then deletes the row.
</code></pre><h4>2PC vs Saga</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>2PC</th><th style='padding:8px;border:1px solid #ddd;'>Saga</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Consistency</td><td style='padding:8px;border:1px solid #ddd;'>Strong (ACID)</td><td style='padding:8px;border:1px solid #ddd;'>Eventual</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Availability</td><td style='padding:8px;border:1px solid #ddd;'>Blocks participants</td><td style='padding:8px;border:1px solid #ddd;'>No long locks</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Failure handling</td><td style='padding:8px;border:1px solid #ddd;'>Coordinator recovery</td><td style='padding:8px;border:1px solid #ddd;'>Compensations</td></tr></table><p><strong>Pitfall:</strong> Compensations are not rollbacks; they are business operations (refund, restock) and must be idempotent.</p>`,
      "difficulty": `Advanced`,
      "tags": [
        `System Design`,
        `Saga`,
        `Distributed Transactions`,
        `Microservices`
      ],
      "keyPoints": [
        `Sagas break a cross-service transaction into local steps with compensating actions.`,
        `The outbox pattern atomically persists business state and an event before publication.`,
        `Compensations are business-level undo operations and must be idempotent.`
      ]
    },
    {
      "question": `What is service discovery and how do services find each other dynamically?`,
      "answer": `<p><strong>Service discovery</strong> lets clients and other services locate running instances of a service without hard-coding hostnames or IPs. It is essential in dynamic environments like Kubernetes or auto-scaling groups.</p><h4>Two Models</h4><ul><li><strong>Client-side discovery:</strong> The client queries a registry and load-balances across returned instances itself (e.g., Netflix Eureka + Ribbon).</li><li><strong>Server-side discovery:</strong> The client talks to a gateway or load balancer that looks up healthy instances (e.g., AWS ALB, Kubernetes Service, Consul + NGINX).</li></ul><h4>Core Components</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Component</th><th style='padding:8px;border:1px solid #ddd;'>Purpose</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Service Registry</td><td style='padding:8px;border:1px solid #ddd;'>Stores instance locations and metadata</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Health Checks</td><td style='padding:8px;border:1px solid #ddd;'>Removes dead instances from the registry</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Heartbeat / Lease</td><td style='padding:8px;border:1px solid #ddd;'>Instances renew their registration periodically</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>DNS Integration</td><td style='padding:8px;border:1px solid #ddd;'>Provides stable names that resolve to instances</td></tr></table><pre><code class="language-yaml"># Kubernetes Service example
apiVersion: v1
kind: Service
metadata:
  name: payment-service
spec:
  selector:
    app: payment
  ports:
    - port: 8080
      targetPort: 8080
</code></pre><h4>Common Tools</h4><ul><li><strong>Consul:</strong> Service mesh + discovery with health checks and KV store.</li><li><strong>etcd:</strong> Key-value store used by Kubernetes for all registry data.</li><li><strong>Eureka:</strong> Netflix client-side registry.</li><li><strong>AWS Cloud Map / GCP Service Directory:</strong> Managed cloud discovery.</li></ul><p><strong>Pitfall:</strong> Stale registry entries caused by missed heartbeats or slow health checks can route traffic to crashed instances. Use short TTLs, retries, and circuit breakers together.</p>`,
      "difficulty": `Intermediate`,
      "tags": [
        `System Design`,
        `Service Discovery`,
        `Microservices`
      ],
      "keyPoints": [
        `Client-side discovery puts routing logic in the client; server-side uses a gateway or LB.`,
        `Health checks and heartbeats keep the registry accurate in dynamic environments.`,
        `Combine discovery with retries and circuit breakers to handle stale entries.`
      ]
    },
    {
      "question": `How do you design observability for a distributed system?`,
      "answer": `<p><strong>Observability</strong> is the ability to infer internal system state from external outputs. It rests on three pillars: <strong>metrics</strong>, <strong>logs</strong>, and <strong>traces</strong>. A good observability stack also includes alerts, dashboards, and SLOs.</p><h4>The Three Pillars</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Pillar</th><th style='padding:8px;border:1px solid #ddd;'>What it captures</th><th style='padding:8px;border:1px solid #ddd;'>Examples</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Metrics</td><td style='padding:8px;border:1px solid #ddd;'>Numeric time-series data</td><td style='padding:8px;border:1px solid #ddd;'>CPU, latency p99, request rate, error rate</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Logs</td><td style='padding:8px;border:1px solid #ddd;'>Discrete events and messages</td><td style='padding:8px;border:1px solid #ddd;'>Application errors, audit events</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Traces</td><td style='padding:8px;border:1px solid #ddd;'>End-to-end request path</td><td style='padding:8px;border:1px solid #ddd;'>OpenTelemetry spans across services</td></tr></table><h4>Architecture</h4><pre><code class="language-text">Services → OpenTelemetry Collector → Metrics (Prometheus) → Grafana
                                   → Logs (Loki/ELK)      → Grafana/Kibana
                                   → Traces (Jaeger/Tempo) → Jaeger UI
</code></pre><h4>Key Metrics (RED Method)</h4><ul><li><strong>Rate:</strong> requests per second</li><li><strong>Errors:</strong> percentage of failed requests</li><li><strong>Duration:</strong> request latency (p50, p95, p99)</li></ul><h4>Instrumentation Best Practices</h4><ul><li>Use correlation IDs / trace IDs propagated across all services.</li><li>Keep log levels consistent; avoid logging PII.</li><li>Define SLOs and alert on symptoms (high error rate) not causes (CPU &gt; 80%).</li><li>Sample high-volume traces to control cost.</li></ul><p><strong>Common pitfall:</strong> Collecting logs and traces without structured fields makes querying and correlation nearly impossible.</p>`,
      "difficulty": `Intermediate`,
      "tags": [
        `System Design`,
        `Observability`,
        `Monitoring`
      ],
      "keyPoints": [
        `Metrics, logs, and traces are the three pillars of observability.`,
        `Use correlation IDs to link logs and traces across distributed services.`,
        `Alert on user-impacting symptoms and define clear SLOs.`
      ]
    },
    {
      "question": `Explain database indexing internals and how to choose indexes for read-heavy workloads.`,
      "answer": `<p>A <strong>database index</strong> is a separate data structure that speeds up lookups at the cost of extra storage and slower writes. Understanding index internals helps avoid full table scans and slow queries.</p><h4>B-Tree Index</h4><p>The most common index type. It keeps keys sorted in a balanced tree with high fan-out, giving <code>O(log N)</code> lookups, range scans, and ordered traversal. InnoDB uses clustered B+ trees where leaf nodes contain the full row.</p><h4>Hash Index</h4><p>Provides <code>O(1)</code> exact-match lookups but cannot support range queries or ordering. Used by memory engines and adaptive hashing.</p><h4>Composite Index Rules</h4><ol><li>Columns are ordered left-to-right; queries must use a leftmost prefix.</li><li>Put high-selectivity or equality-filtered columns first.</li><li>Avoid redundant indexes that are prefixes of another.</li></ol><pre><code class="language-sql">-- Composite index example
CREATE INDEX idx_user_status_created
  ON orders(user_id, status, created_at);

-- Uses index: equality on user_id + status, then range on created_at
SELECT * FROM orders
WHERE user_id = 42
  AND status = 'shipped'
  AND created_at &gt; '2024-01-01';
</code></pre><h4>Covering Index</h4><p>An index that contains all columns requested by the query, so the engine never touches the heap/table.</p><h4>Trade-offs</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Pros</th><th style='padding:8px;border:1px solid #ddd;'>Cons</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Faster SELECTs</td><td style='padding:8px;border:1px solid #ddd;'>Slower INSERT/UPDATE/DELETE</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Enforces uniqueness</td><td style='padding:8px;border:1px solid #ddd;'>Consumes disk/memory</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Supports ordering</td><td style='padding:8px;border:1px solid #ddd;'>Wrong choice can degrade performance</td></tr></table><p><strong>Pitfalls:</strong> Indexing low-cardinality columns alone, missing indexes on foreign keys, and ignoring query plans. Always verify with <code>EXPLAIN</code>.</p>`,
      "difficulty": `Intermediate`,
      "tags": [
        `System Design`,
        `Database`,
        `Indexing`
      ],
      "keyPoints": [
        `B-tree indexes support range scans and ordering; hash indexes only support exact matches.`,
        `Composite indexes require a leftmost-prefix match to be effective.`,
        `Every index adds write overhead, so validate choices with EXPLAIN and workload metrics.`
      ]
    },
    {
      "question": `Walk through a back-of-the-envelope estimation for a Twitter-like news feed.`,
      "answer": `<p><strong>Back-of-the-envelope estimation</strong> proves you can reason about scale, capacity, and cost before writing code. Interviewers care more about method and assumptions than exact numbers.</p><h4>Assumptions</h4><ul><li>100 million daily active users (DAU)</li><li>Each user posts 2 tweets/day → 200 million tweets/day</li><li>Each user reads 200 tweets/session, 2 sessions/day</li><li>Average tweet size: 250 bytes text + metadata ≈ 500 bytes</li><li>Media is stored separately; metadata references it</li></ul><h4>Traffic Estimates</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Metric</th><th style='padding:8px;border:1px solid #ddd;'>Calculation</th><th style='padding:8px;border:1px solid #ddd;'>Result</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Writes/sec</td><td style='padding:8px;border:1px solid #ddd;'>200M / 86,400</td><td style='padding:8px;border:1px solid #ddd;'>~2,300 tweets/s</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reads/sec</td><td style='padding:8px;border:1px solid #ddd;'>100M × 200 × 2 / 86,400</td><td style='padding:8px;border:1px solid #ddd;'>~460,000 reads/s</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Write bandwidth</td><td style='padding:8px;border:1px solid #ddd;'>2,300 × 500 bytes</td><td style='padding:8px;border:1px solid #ddd;'>~1.15 MB/s</td></tr></table><h4>Storage Estimates</h4><pre><code class="language-text">Tweets (5 years): 200M/day × 365 × 5 × 500 B ≈ 182 TB
Users: 100M × 1 KB profile ≈ 100 GB
Media: assumed offloaded to object storage (S3), metadata in DB
</code></pre><h4>Feed Architecture Sketch</h4><pre><code class="language-text">Write path:
  User → API Gateway → Tweet Service → Tweet DB (sharded)
                    → Fan-out Service → Fan-out Queue → Home Timeline Cache per user

Read path:
  User → API Gateway → Timeline Service → Redis (pre-built home timeline)
</code></pre><h4>Design Decisions Driven by Math</h4><ul><li>Read-heavy (200:1 ratio) → pre-compute and cache timelines.</li><li>Celebrity users (millions of followers) → use hybrid fan-out-on-write + pull-on-read.</li><li>Hot keys in Redis → shard timelines by user ID.</li></ul><p><strong>Pitfall:</strong> Ignoring the long-tail distribution. A few celebrities dominate traffic, so average-case math can mislead capacity planning.</p>`,
      "difficulty": `Intermediate`,
      "tags": [
        `System Design`,
        `Capacity Planning`,
        `Estimation`
      ],
      "keyPoints": [
        `State assumptions clearly and convert daily numbers into per-second rates.`,
        `Use read/write ratios to choose between pull, push, and hybrid feed models.`,
        `Account for skewed distributions such as celebrity users.`
      ]
    },
    {
      "question": `What is idempotency and how do you achieve exactly-once semantics in distributed messaging?`,
      "answer": `<p><strong>Idempotency</strong> means processing the same request multiple times produces the same result as processing it once. It is the foundation of reliable distributed systems because networks, retries, and failures make duplicate delivery inevitable.</p><h4>Why Exactly-Once Is Hard</h4><p>A distributed message system can guarantee at-most-once or at-least-once easily, but exactly-once requires cooperation between producer, broker, and consumer. The consensus in practice is <strong>exactly-once processing = at-least-once delivery + idempotent consumers + deduplication</strong>.</p><h4>Idempotency Techniques</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Technique</th><th style='padding:8px;border:1px solid #ddd;'>When to use</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Idempotency key</td><td style='padding:8px;border:1px solid #ddd;'>API requests; stored in DB with unique constraint</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Conditional writes</td><td style='padding:8px;border:1px solid #ddd;'>DynamoDB conditional put, UPDATE ... WHERE status</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Natural idempotency</td><td style='padding:8px;border:1px solid #ddd;'>Setting state to a value rather than incrementing</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Deduplication window</td><td style='padding:8px;border:1px solid #ddd;'>Kafka producer idempotency with sequence IDs</td></tr></table><h4>Example: Idempotent Payment</h4><pre><code class="language-sql">CREATE TABLE payments (
  idempotency_key VARCHAR(64) PRIMARY KEY,
  order_id VARCHAR(64) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Retry-safe insert: fails on duplicate key without charging twice
INSERT INTO payments (idempotency_key, order_id, amount, status)
VALUES ('key-abc-123', 'ord-1', 49.99, 'completed')
ON CONFLICT (idempotency_key) DO NOTHING;
</code></pre><h4>Kafka Idempotent Producer</h4><pre><code class="language-java">Properties props = new Properties();
props.put("bootstrap.servers", "kafka:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("enable.idempotence", "true"); // guarantees in-order, exactly-once per partition
props.put("acks", "all");
props.put("retries", Integer.MAX_VALUE);
</code></pre><p><strong>Common pitfall:</strong> Assuming the message broker alone provides exactly-once. Consumers must still deduplicate and write idempotently, usually with an idempotency key or state-machine transition guarded by a condition.</p>`,
      "difficulty": `Advanced`,
      "tags": [
        `System Design`,
        `Idempotency`,
        `Messaging`,
        `Distributed Systems`
      ],
      "keyPoints": [
        `Idempotency ensures retries do not change the outcome beyond the first successful application.`,
        `Exactly-once semantics require at-least-once delivery plus idempotent consumers and deduplication.`,
        `Idempotency keys, conditional writes, and broker sequence IDs are the main practical tools.`
      ]
    }
  ]
}
