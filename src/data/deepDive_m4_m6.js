export const deepDive_m4_m6 = {
  module4: {
    'timeouts': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Timeouts prevent cascading failures by cutting off slow operations. The values below are derived from industry benchmarks at Netflix, Google, and Amazon.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['HTTP Request Timeout', '5–30 seconds', '200 ms–2 s', 'API gateways use 200 ms; internal microservices use 1–2 s'],
            ['Database Query Timeout', '10–30 seconds', '100 ms–1 s', 'OLTP queries should complete in <100 ms at scale'],
            ['Cache Read Timeout', '1–5 seconds', '5–50 ms', 'Redis typically responds in <1 ms; 50 ms is a red flag'],
            ['Message Queue Timeout', '30–300 seconds', '5–30 seconds', 'Kafka consumer timeouts depend on processing complexity'],
            ['DNS Resolution Timeout', '5 seconds', '1–2 seconds', 'Cloud DNS (Route 53, Cloud DNS) resolves in <50 ms normally'],
            ['Connection Establishment', '10 seconds', '1–3 seconds', 'TCP handshake + TLS; 1 RTT (~50 ms) ideal'],
            ['Circuit Breaker Open Duration', '30–60 seconds', '5–15 seconds', 'Exponential backoff after failure threshold'],
            ['Health Check Timeout', '5 seconds', '1–2 seconds', 'Kubernetes liveness probes default to 1 s'],
            ['Bulkhead Thread Pool Timeout', '10–60 seconds', '1–5 seconds', 'Hystrix default: 1 s execution timeout'],
            ['Total End-to-End Timeout', '30–120 seconds', '2–10 seconds', 'User-facing: 2 s; async batch: 10 s+']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'As load increases, timeout behavior shifts from graceful degradation to hard failures.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '< 200 ms', 'All requests succeed within timeout', 'Healthy system, no timeout pressure'],
            ['2× Load', '200 ms–1 s', '5–10% of requests hit soft timeout warnings', 'Monitor p95/p99 latencies closely'],
            ['5× Load', '1–5 s', '20–40% requests timeout and retry', 'Circuit breakers start tripping; queues build up'],
            ['10× Load', '> 5 s or ∞', '50–80% requests fail with timeout', 'Cascading failure risk; bulkheads prevent total collapse'],
            ['Burst Traffic', 'Spikes to 10 s+', 'Timeout storms trigger retry amplification', 'Exponential backoff + jitter essential']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How timeout strategy evolves as a startup grows:',
        list: [
          '<strong>Stage 1: 0–1K users (Monolith)</strong> — Default framework timeouts (30 s HTTP, 30 s DB). No tuning needed; single server handles everything.',
          '<strong>Stage 2: 1K–10K users (API + DB)</strong> — Reduce HTTP timeout to 5 s, DB to 10 s. First latency spikes appear during peak hours.',
          '<strong>Stage 3: 10K–100K users (Microservices)</strong> — Service-specific timeouts: 200 ms for gateway→service, 1 s for service→DB, 5 s for async jobs. Introduce timeout dashboards.',
          '<strong>Stage 4: 100K–1M users (Global)</strong> — Per-region timeouts based on RTT (50 ms same-AZ, 200 ms cross-region). Implement adaptive timeouts using latency percentiles.',
          '<strong>Stage 5: 1M–10M users (Multi-cloud)</strong> — Dynamic timeout adjustment via control plane. Machine learning predicts optimal timeout per endpoint based on historical p99.',
          '<strong>Stage 6: 10M+ users (Hyperscale)</strong> — Context propagation timeouts (OpenTelemetry spans with deadline). Distributed tracing shows timeout chains across 50+ services.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Timeouts must be tuned per infrastructure layer:',
        list: [
          '<strong>Application Tier:</strong> Controller timeouts (200 ms–2 s), service call timeouts (1–5 s), background job timeouts (30 s–5 min). Use Hystrix/Resilience4j for per-method configuration.',
          '<strong>Database Tier:</strong> Connection pool timeout (30 s), query timeout (100 ms–1 s), lock wait timeout (5–10 s). PostgreSQL: <code>statement_timeout</code>; MySQL: <code>MAX_EXECUTION_TIME</code>.',
          '<strong>Cache Tier:</strong> Redis read timeout (1–5 s), write timeout (5–10 s), connection timeout (1 s). Memcached: 1 s default; tune for cross-AZ latency.',
          '<strong>Message Queue Tier:</strong> Kafka consumer session timeout (10–30 s), producer request timeout (30 s), queue read timeout (poll interval: 100 ms–5 s).',
          '<strong>Load Balancer Tier:</strong> AWS ALB idle timeout (60 s), target timeout (5 s), health check timeout (5 s). NGINX proxy_read_timeout (60 s), proxy_connect_timeout (1 s).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use which timeout strategy:',
        table: {
          headers: ['Scenario', 'Recommended Timeout', 'Rationale', 'Tool/Config'],
          rows: [
            ['User-facing API (sync)', '200 ms–1 s', 'Users abandon after 3 s; 200 ms keeps p99 happy', 'API Gateway / NGINX'],
            ['Internal service call', '1–5 s', 'Network + processing overhead; retries possible', 'Resilience4j / Hystrix'],
            ['Database query (OLTP)', '100 ms–1 s', 'Slow queries indicate missing index or lock contention', 'PostgreSQL statement_timeout'],
            ['Cache read', '5–50 ms', 'Cache miss should fallback quickly; slow cache = worse than no cache', 'Redis timeout config'],
            ['Async batch job', '30 s–5 min', 'Large data processing needs headroom; monitor progress', 'Celery / AWS Batch'],
            ['Cross-region call', 'RTT + 2× processing time', 'US-East to US-West RTT ~70 ms; add buffer', 'Latency-aware routing'],
            ['Mobile app API', '5–10 s', 'Mobile networks are flaky; allow longer but retry with backoff', 'OkHttp / Alamofire timeouts']
          ]
        }
      }
    ],
    'retries': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Retry policies balance reliability against thundering herd risk. These numbers come from AWS, Google Cloud, and Netflix operational experience.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Max Retry Attempts', '3–5', '1–3', 'Fewer retries at scale to reduce amplification'],
            ['Base Retry Delay', '100 ms–1 s', '10–100 ms', 'Exponential backoff starts small at hyperscale'],
            ['Max Retry Delay', '10–60 s', '1–5 s', 'Cap backoff to prevent indefinite delay'],
            ['Retry Jitter Range', '±10–25%', '±50–100%', 'Full jitter prevents synchronization at scale'],
            ['Retry Budget (per minute)', '10% of requests', '1–5% of requests', 'Spotify uses 1% retry budget to prevent overload'],
            ['Idempotency Key TTL', '1–24 hours', '5–60 minutes', 'Long enough for retries, short enough for storage'],
            ['Retry Storm Threshold', '100 req/s', '1,000+ req/s', 'Rate limit retries separately from normal traffic'],
            ['Circuit Breaker After Retries', '5 failures in 10 s', '50 failures in 10 s', 'Scale threshold with request volume'],
            ['Total Retry Timeout', '30 s–2 min', '5–30 s', 'User-facing: fast fail; async: longer tolerance'],
            ['Per-Attempt Timeout', '1–5 s', '100 ms–1 s', 'Each attempt must be shorter than total budget']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Retries can either save a system or destroy it. Behavior under load:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal + 0–100 ms', '0–1% retry rate', 'Healthy; retries are invisible to users'],
            ['2× Load', 'Normal + 100 ms–1 s', '5–10% retry rate', 'First signs of strain; jitter prevents sync'],
            ['5× Load', '1–5 s (with retries)', '20–30% retry rate', 'Retry amplification begins; consider circuit breaker'],
            ['10× Load', '> 10 s or failed', '40–60% retry rate', 'Retry storm risk; bulkhead isolation critical'],
            ['Retry Storm', 'System-wide degradation', '100% retry rate on failing service', 'Without backoff, retries DDoS the service']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Retry strategy evolution from startup to hyperscale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No retries; simple fail-fast. Single server, quick debugging.',
          '<strong>Stage 2: 1K–10K users</strong> — Add 3 retries with fixed 1 s delay. First transient failures from network blips.',
          '<strong>Stage 3: 10K–100K users</strong> — Exponential backoff: 100 ms → 200 ms → 400 ms + 25% jitter. Retry budget: 10% of traffic.',
          '<strong>Stage 4: 100K–1M users</strong> — Per-service retry policies. Idempotency keys for all mutating operations. Retry budget drops to 5%.',
          '<strong>Stage 5: 1M–10M users</strong> — Separate retry rate limiters (1,000 req/s). Machine learning detects retry-worthy vs. permanent failures.',
          '<strong>Stage 6: 10M+ users</strong> — Global retry orchestration. Hedged requests (send 2, use first response). Retry budget: 1% with automatic circuit breaker.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Retry behavior differs dramatically by infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> HTTP client retries (3× with backoff), gRPC automatic retries (transparent retry on UNAVAILABLE), GraphQL query retries (idempotent reads only). Use Resilience4j Retry module.',
          '<strong>Database Tier:</strong> Connection pool retries (1–3× on transient disconnect), query retries (only for read-only operations), transaction retries (optimistic locking conflicts). PostgreSQL: <code>max_reTRIES</code> in application layer.',
          '<strong>Cache Tier:</strong> Redis: retry on connection timeout (3×, 100 ms backoff). Memcached: minimal retries; prefer failover to replica. Cache-aside pattern: retry cache miss, not cache write.',
          '<strong>Message Queue Tier:</strong> Kafka: consumer retries with exponential backoff (max 3×, then dead letter queue). SQS: visibility timeout + maxReceiveCount (3–5). RabbitMQ: consumer nack with requeue=false → DLX.',
          '<strong>Load Balancer Tier:</strong> Health check retries (2–3 failures before marking unhealthy). AWS ALB: retry on 502/503 (enabled by default). NGINX: <code>proxy_next_upstream</code> for 5xx retries.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Retry strategy selection guide:',
        table: {
          headers: ['Scenario', 'Retry Policy', 'Backoff Strategy', 'Key Consideration'],
          rows: [
            ['Read operation (idempotent)', '3–5 retries', 'Exponential + jitter', 'Safe to retry; no side effects'],
            ['Write operation (non-idempotent)', '0–1 retry', 'None or fixed 1 s', 'Must use idempotency key; avoid duplicate writes'],
            ['Payment processing', '0 retries', 'N/A', 'Fail fast; manual reconciliation instead'],
            ['Real-time chat message', '1 retry, 100 ms', 'Fixed', 'User is waiting; fast fail better than delay'],
            ['Batch data import', '5–10 retries', 'Exponential up to 5 min', 'Background job; can afford longer waits'],
            ['Mobile API (unreliable network)', '3 retries, 5 s timeout', 'Exponential + full jitter', 'Network flakiness is normal; be generous'],
            ['Internal service mesh (Istio)', '2 retries', 'Automatic (Envoy default)', 'Envoy handles retries transparently']
          ]
        }
      }
    ],
    'idempotency': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Idempotency prevents duplicate processing in distributed systems. Key metrics from Stripe, Adyen, and Amazon Pay:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Idempotency Key Length', '16–64 bytes', '32 bytes (UUID)', 'Stripe uses 64-char string keys'],
            ['Key Storage TTL', '1–24 hours', '5–60 minutes', 'Long enough for all retries to complete'],
            ['Duplicate Detection Rate', '0.1–1%', '5–10% during incidents', 'Spikes during network partitions'],
            ['Idempotency Store QPS', '100–1,000', '10,000–100,000', 'Redis handles 100K+ ops/sec per node'],
            ['Key Collision Probability', '< 0.001%', '< 0.0001%', 'UUID v4: 2^122 possible values'],
            ['Storage per Key', '100 bytes–1 KB', '50–200 bytes', 'Key + request hash + response pointer'],
            ['Lock Duration (pessimistic)', '1–10 s', '100 ms–1 s', 'Short locks prevent deadlock'],
            ['Optimistic Retry Window', '30 s–5 min', '5–30 s', 'Time window for duplicate detection'],
            ['Idempotency Cache Hit Rate', '95–99%', '99.9%', 'Most requests are first-time; duplicates are rare'],
            ['End-to-End Idempotency Latency', '+1–5 ms', '+0.1–1 ms', 'Redis lookup overhead at scale']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Idempotency systems must handle both normal and duplicate-heavy traffic:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal + 1–5 ms', '0.1% duplicates detected', 'Minimal overhead; cache hits are fast'],
            ['2× Load', 'Normal + 2–10 ms', '0.5% duplicates', 'Slight cache pressure; Redis scales linearly'],
            ['5× Load', 'Normal + 5–20 ms', '2–5% duplicates', 'Network partition recovery phase; duplicates spike'],
            ['10× Load', 'Normal + 10–50 ms', '10–20% duplicates', 'Retry storms create duplicate bursts; TTL critical'],
            ['Duplicate Flood', '50–200 ms', '50–100% duplicates', 'Client retry bug; rate limit idempotency checks']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Idempotency implementation stages:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No idempotency. Database unique constraints prevent duplicates. Simple but brittle.',
          '<strong>Stage 2: 1K–10K users</strong> — Database-level idempotency: UNIQUE index on (idempotency_key, operation_type). 100 ms query overhead.',
          '<strong>Stage 3: 10K–100K users</strong> — Redis idempotency cache: SET key → process → SET result. 5 ms overhead. 1-hour TTL.',
          '<strong>Stage 4: 100K–1M users</strong> — Distributed idempotency store: Redis Cluster with 3 replicas. Keys partitioned by user_id. 1 ms overhead.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-region idempotency: DynamoDB Global Tables with conflict resolution. 10 ms cross-region latency.',
          '<strong>Stage 6: 10M+ users</strong> — Event-sourced idempotency: idempotency keys are event IDs. Natural deduplication in event log. Sub-millisecond.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Idempotency across the stack:',
        list: [
          '<strong>Application Tier:</strong> API endpoints accept <code>Idempotency-Key</code> header. Middleware checks cache before processing. Response cached for 24 hours. Stripe-style: key locks during processing.',
          '<strong>Database Tier:</strong> UNIQUE constraints on (idempotency_key). UPSERT operations: <code>INSERT ... ON CONFLICT DO NOTHING</code>. Optimistic locking with version numbers.',
          '<strong>Cache Tier:</strong> Redis: <code>SET idempotency_key request_hash NX EX 3600</code>. Memcached: <code>add</code> operation (atomic). Cache result alongside key for fast replay.',
          '<strong>Message Queue Tier:</strong> Kafka: exactly-once semantics with transactional producers. SQS: deduplication ID (5-minute window). RabbitMQ: consumer ack + manual dedup.',
          '<strong>Load Balancer Tier:</strong> AWS ALB: sticky sessions reduce duplicate risk (not a substitute). NGINX: rate limiting per idempotency key prevents abuse.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Idempotency strategy by operation type:',
        table: {
          headers: ['Operation Type', 'Strategy', 'Storage', 'TTL', 'Example'],
          rows: [
            ['Payment charge', 'Pessimistic lock + key', 'Redis + DB', '24 hours', 'Stripe charges'],
            ['User registration', 'Unique constraint', 'Database only', 'Permanent', 'Username/email UNIQUE'],
            ['Inventory decrement', 'Optimistic locking', 'Database', 'Transaction', 'Amazon checkout'],
            ['Email send', 'Idempotency key', 'Redis', '1 hour', 'SendGrid API'],
            ['Webhook delivery', 'Key + retry log', 'Redis + DB', '24 hours', 'GitHub webhooks'],
            ['Data import (batch)', 'Job-level key', 'Database', '7 days', 'Nightly ETL'],
            ['Real-time game action', 'Event sourcing', 'Event store', 'Permanent', 'MMORPG actions']
          ]
        }
      }
    ],
    'circuit-breaker': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Circuit breakers prevent cascading failures by stopping requests to unhealthy services. Based on Netflix Hystrix and Resilience4j implementations:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Failure Threshold (%)', '50–60%', '70–80%', 'Higher at scale due to noise; Netflix uses 50%'],
            ['Failure Threshold (count)', '5 in 10 s', '50–100 in 10 s', 'Count-based for low-volume services'],
            ['Slow Call Threshold (%)', '80–100%', '60–80%', 'Percentage of calls > slow call duration'],
            ['Slow Call Duration', '1–5 s', '100 ms–1 s', 'Hystrix default: 1 s; hyperscale: 100 ms'],
            ['Open Duration (fixed)', '30–60 s', '5–15 s', 'How long breaker stays open before half-open'],
            ['Open Duration (exponential)', '10 s → 20 s → 40 s', '1 s → 2 s → 4 s', 'Backoff for persistent failures'],
            ['Half-Open Permitted Calls', '1–3', '5–10', 'Test calls to check recovery'],
            ['Breaker Window Size', '10–60 s', '1–10 s', 'Sliding window for failure calculation'],
            ['Minimum Calls to Trip', '5–10', '20–100', 'Prevent tripping on first few failures'],
            ['Fallback Timeout', '10–100 ms', '1–10 ms', 'Fallback must be faster than normal path']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Circuit breaker behavior as load increases:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Healthy)', 'Normal', 'CLOSED — all requests pass', 'No failure threshold reached'],
            ['2× (Degraded)', 'Normal + fallback latency', 'CLOSED → some failures', 'p99 latency rises; monitor failure rate'],
            ['5× (Overloaded)', 'Fallback (< 10 ms)', 'OPEN — requests fail fast', 'Service protected; fallback serves stale data'],
            ['10× (Downstream Down)', 'Fallback only', 'OPEN — 100% fallback', 'Downstream completely bypassed; monitor recovery'],
            ['Recovery Phase', 'Gradual improvement', 'HALF-OPEN → CLOSED', 'Test calls succeed; breaker re-closes']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Circuit breaker adoption from startup to hyperscale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No circuit breakers. Failures are obvious in logs. Manual restarts fix issues.',
          '<strong>Stage 2: 1K–10K users</strong> — Simple circuit breaker: 50% failure threshold, 30 s open. One breaker per external service.',
          '<strong>Stage 3: 10K–100K users</strong> — Per-endpoint breakers: different thresholds for read vs write. Fallback to cache or default values.',
          '<strong>Stage 4: 100K–1M users</strong> — Hierarchical breakers: service-level + endpoint-level + client-level. Adaptive thresholds based on historical baselines.',
          '<strong>Stage 5: 1M–10M users</strong> — ML-powered anomaly detection adjusts thresholds automatically. Predictive open before failure cascade.',
          '<strong>Stage 6: 10M+ users</strong> — Global circuit breaker mesh. Istio/Envoy breakers per cluster. Automatic canary bypass when breaker opens.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Circuit breaker placement in the architecture:',
        list: [
          '<strong>Application Tier:</strong> Hystrix/Resilience4j annotations on service calls. Thread pool isolation (10 threads default) + semaphore isolation (100 permits). Fallback to cached response or static default.',
          '<strong>Database Tier:</strong> Connection pool circuit breaker: open when pool exhausted. Query circuit breaker: open when query timeout rate > 50%. Read replicas get separate breakers.',
          '<strong>Cache Tier:</strong> Redis circuit breaker: open on connection timeout > 50%. Fallback to database (with its own breaker). Cache stampede protection via breaker.',
          '<strong>Message Queue Tier:</strong> Kafka consumer circuit breaker: pause consumption when processing fails > 50%. Producer breaker: stop sending when broker unavailable.',
          '<strong>Load Balancer Tier:</strong> AWS ALB: automatic target removal on health check failure. NGINX: <code>max_fails=3 fail_timeout=30s</code> upstream circuit breaker. Istio: outlier detection ejects unhealthy pods.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Circuit breaker configuration by scenario:',
        table: {
          headers: ['Scenario', 'Threshold', 'Window', 'Open Duration', 'Fallback'],
          rows: [
            ['Critical payment service', '30% / 10 failures', '10 s', '60 s', 'Queue for later processing'],
            ['User profile read', '70% / 50 failures', '30 s', '30 s', 'Cached profile / default avatar'],
            ['Recommendation engine', '80% / 100 failures', '60 s', '15 s', 'Popular items fallback'],
            ['Third-party API', '50% / 20 failures', '20 s', '120 s', 'Static response / degraded mode'],
            ['Database read replica', '60% / 30 failures', '30 s', '30 s', 'Primary DB fallback'],
            ['Cache cluster', '50% / 10 failures', '10 s', '10 s', 'Database fallback (slower but safe)'],
            ['Internal service mesh', '50% / 5 failures', '10 s', '30 s', 'Envoy automatic retry to alternate']
          ]
        }
      }
    ],
    'bulkhead': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Bulkheads isolate failures by limiting resource consumption per component. Based on Hystrix and container orchestration best practices:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Thread Pool Size (per service)', '10–20', '5–10', 'Smaller pools at scale; more instances instead'],
            ['Thread Pool Queue Size', '5–10', '0–5', 'Queue size 0 = fail fast; Netflix prefers 0'],
            ['Semaphore Max Concurrent', '100–200', '20–50', 'Lightweight; no thread overhead'],
            ['Semaphore Queue Size', 'Unbounded', '100–1,000', 'Bounded to prevent memory exhaustion'],
            ['Container CPU Limit', '1–2 cores', '0.5–1 core', 'Kubernetes: 500m–1000m CPU request'],
            ['Container Memory Limit', '1–4 GB', '512 MB–1 GB', 'Smaller containers = faster scaling'],
            ['Max Connections per Pod', '50–100', '10–20', 'NGINX worker: 768 default; tune down'],
            ['DB Connection Pool per Service', '10–20', '5–10', 'Total pool size < DB max_connections'],
            ['Bulkhead Timeout', '1–5 s', '100 ms–1 s', 'Fail fast when bulkhead full'],
            ['Resource Quota (per namespace)', '10 pods', '100–1,000 pods', 'Kubernetes namespace isolation']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Bulkhead behavior under increasing load:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal', 'All requests within pool capacity', 'Healthy; pool utilization < 50%'],
            ['2× Load', 'Normal + queue wait', 'Some requests queue briefly', 'Queue absorbs spike; no failures yet'],
            ['5× Load', 'Timeout or rejection', 'Pool saturated; new requests rejected', 'Fail fast prevents resource exhaustion'],
            ['10× Load', 'Immediate rejection', '100% rejection after pool + queue full', 'Other services unaffected; bulkhead working'],
            ['Cascading Failure Without Bulkhead', 'System-wide outage', 'All services starved for threads', 'Without bulkhead: one slow service kills all']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Bulkhead implementation stages:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No bulkheads. Single thread pool shared by all operations. One slow query blocks everything.',
          '<strong>Stage 2: 1K–10K users</strong> — Separate thread pools for critical vs non-critical operations. 10 threads for payments, 20 for analytics.',
          '<strong>Stage 3: 10K–100K users</strong> — Per-service bulkheads with Hystrix. Thread pool isolation for external calls, semaphore for internal. Queue size 0 for fail-fast.',
          '<strong>Stage 4: 100K–1M users</strong> — Container-level bulkheads: Kubernetes resource quotas per team/service. CPU/memory limits prevent noisy neighbor.',
          '<strong>Stage 5: 1M–10M users</strong> — Cell-based architecture: users partitioned into independent cells. Each cell has full bulkhead isolation. AWS Route 53 cell routing.',
          '<strong>Stage 6: 10M+ users</strong> — Multi-layer bulkheads: pod → node → AZ → region. Automatic cell evacuation on resource pressure. Shuffle sharding for minimal blast radius.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Bulkhead strategies per infrastructure layer:',
        list: [
          '<strong>Application Tier:</strong> Hystrix thread pools per dependency (10 threads each). Semaphore isolation for local computations (100 permits). Separate pools for sync vs async operations.',
          '<strong>Database Tier:</strong> Connection pool per service (max 10). Read-only pool separate from write pool. Connection pool per tenant in multi-tenant systems. PostgreSQL: <code>max_connections</code> divided by service count.',
          '<strong>Cache Tier:</strong> Redis: separate connection pools per microservice. Memcached: per-app connection limits. Cache warming pool separate from live traffic pool.',
          '<strong>Message Queue Tier:</strong> Kafka: consumer group with max 1 consumer per partition. SQS: separate queues per priority level (high/normal/low). RabbitMQ: per-queue consumer limits.',
          '<strong>Load Balancer Tier:</strong> Kubernetes: pod disruption budgets (min 1 available). AWS ALB: target group connection limits. NGINX: <code>limit_conn</code> per IP/zone. Istio: destination rules with connection pool limits.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Bulkhead strategy selection:',
        table: {
          headers: ['Scenario', 'Isolation Type', 'Pool Size', 'Queue Size', 'Rationale'],
          rows: [
            ['Payment processing', 'Thread pool', '5–10', '0', 'Fail fast; never queue payments'],
            ['User analytics', 'Semaphore', '50–100', 'Bounded', 'Lightweight; tolerate brief delays'],
            ['Third-party API calls', 'Thread pool', '10', '0', 'External latency unpredictable; isolate'],
            ['Database reads', 'Connection pool', '10–20', '5', 'Queue brief spikes; fail on sustained load'],
            ['Database writes', 'Connection pool', '5–10', '0', 'Writes are expensive; fail fast'],
            ['File upload handling', 'Thread pool', '5', '0', 'Large memory footprint; strict limits'],
            ['Kubernetes namespace', 'Resource quota', '10–100 pods', 'N/A', 'Prevent namespace from consuming cluster']
          ]
        }
      }
    ],
    'rate-limiting': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Rate limiting protects services from abuse and ensures fair resource sharing. Based on Cloudflare, AWS API Gateway, and Stripe implementations:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Per-User Rate Limit', '100–1,000 req/min', '10–100 req/s', 'GitHub: 5,000 req/hour; Stripe: 100 req/s'],
            ['Per-IP Rate Limit', '60–600 req/min', '10–30 req/s', 'Cloudflare: free tier 1,200 req/5 min'],
            ['Per-API Key Rate Limit', '1,000–10,000 req/min', '100–1,000 req/s', 'Enterprise keys get higher limits'],
            ['Burst Allowance', '10–50% over limit', '0–10%', 'Token bucket allows brief bursts'],
            ['Rate Limit Window', '1–60 seconds', '1 second', 'Sliding window for accuracy; fixed for performance'],
            ['Rate Limit Key Space', '1M–10M keys', '100M–1B keys', 'Redis Cluster handles billions of keys'],
            ['Penalty Duration (exceeded)', '1–60 minutes', '1–5 minutes', 'Progressive penalty: 1 min → 5 min → 1 hour'],
            ['Rate Limit Check Latency', '1–5 ms', '0.1–1 ms', 'Redis INCR + EXPIRE: <1 ms'],
            ['Distributed Rate Limit Sync', '1–5 s', '100 ms–1 s', 'Gossip protocol or Redis pub/sub'],
            ['Global Rate Limit', '10K–100K req/s', '1M–10M req/s', 'CDN edge rate limiting (Cloudflare, Fastly)']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Rate limiting behavior as traffic increases:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Within limit)', 'Normal + 1 ms', '100% accepted', 'Rate limit check is negligible overhead'],
            ['2× Limit', 'Normal + 1 ms', '50% accepted, 50% rejected (429)', 'Fair sharing; legitimate users unaffected'],
            ['5× Limit', 'Normal + 1 ms', '20% accepted, 80% rejected', 'Aggressive rejection; consider scaling or higher limits'],
            ['10× Limit', '1 ms (rejection)', '10% accepted, 90% rejected', 'DDoS or misconfigured client; alert security'],
            ['Attack Traffic', '1 ms (rejection)', '99%+ rejected at edge', 'Cloudflare blocks 70M req/s DDoS attacks']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Rate limiting evolution from startup to hyperscale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No rate limiting. Single server handles all traffic. Abuse is handled manually.',
          '<strong>Stage 2: 1K–10K users</strong> — Simple per-IP rate limit: 100 req/min. NGINX <code>limit_req_zone</code>. Basic DDoS protection.',
          '<strong>Stage 3: 10K–100K users</strong> — Per-user rate limits: 1,000 req/min. Token bucket algorithm in Redis. API keys tracked separately.',
          '<strong>Stage 4: 100K–1M users</strong> — Tiered rate limits: free (100 req/min), pro (1,000 req/min), enterprise (10,000 req/min). Different limits per endpoint.',
          '<strong>Stage 5: 1M–10M users</strong> — Distributed rate limiting: Redis Cluster with consistent hashing. Global + regional + per-instance limits. Machine learning detects abnormal patterns.',
          '<strong>Stage 6: 10M+ users</strong> — Edge rate limiting: Cloudflare/Fastly block at CDN before reaching origin. 100M+ req/s handled at edge. Origin sees only legitimate traffic.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Rate limiting at each infrastructure layer:',
        list: [
          '<strong>Application Tier:</strong> API Gateway rate limits (Kong, AWS API Gateway). Per-endpoint limits: GET /users = 100 req/s, POST /payments = 10 req/s. Custom headers: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>.',
          '<strong>Database Tier:</strong> Query rate limiting per user/tenant. PostgreSQL: <code>pg_stat_statements</code> + application-level throttling. Connection rate limiting: max 10 new connections/sec per user.',
          '<strong>Cache Tier:</strong> Redis: <code>ACL</code> with rate limits per user. Memcached: no native rate limiting; use proxy (mcrouter). Cache stampede prevention: rate limit cache miss handlers.',
          '<strong>Message Queue Tier:</strong> Kafka: consumer rate limiting (max 1,000 messages/sec per consumer). SQS: visibility timeout acts as implicit rate limit. RabbitMQ: <code>prefetch_count</code> as consumer rate limit.',
          '<strong>Load Balancer Tier:</strong> Cloudflare: 100 req/s per IP at edge. AWS WAF: rate-based rules (2,000 req/5 min). NGINX: <code>limit_req</code> per zone. Istio: quota enforcement per service.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Rate limiting algorithm and placement:',
        table: {
          headers: ['Scenario', 'Algorithm', 'Placement', 'Limit', 'Window'],
          rows: [
            ['Public API (free tier)', 'Token bucket', 'API Gateway', '100 req/min', '60 s'],
            ['Public API (paid tier)', 'Token bucket', 'API Gateway', '10,000 req/min', '60 s'],
            ['Internal microservice', 'Fixed window', 'Service mesh (Istio)', '1,000 req/s', '1 s'],
            ['Webhook receiver', 'Sliding window', 'Application', '100 req/min', '60 s'],
            ['Login endpoint', 'Token bucket', 'Application + WAF', '5 req/min', '60 s'],
            ['File upload', 'Token bucket', 'Application', '10 req/min', '60 s'],
            ['DDoS protection', 'Fixed window', 'CDN edge', '100 req/s per IP', '10 s']
          ]
        }
      }
    ]
  },
  module5: {
    'horizontal-vertical': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Horizontal vs vertical scaling trade-offs with concrete numbers from AWS, Google Cloud, and Azure pricing:',
        table: {
          headers: ['Metric', 'Vertical Scaling', 'Horizontal Scaling', 'Notes'],
          rows: [
            ['Max Single Instance', '128–768 vCPUs, 24 TB RAM', 'Unlimited (theoretically)', 'AWS u-24tb1.metal: 448 vCPUs, 24 TB'],
            ['Cost per vCPU/hour', '$0.01–$0.05', '$0.005–$0.02', 'Horizontal: spot instances 70% cheaper'],
            ['Scale-up Time', '5–15 minutes (reboot)', '1–5 minutes (new instance)', 'Vertical: downtime required usually'],
            ['Scale-down Time', '5–15 minutes', '30–60 seconds', 'Horizontal: auto-terminate unused'],
            ['Max Throughput (single)', '100K–500K req/s', '1M–100M+ req/s', 'Google Cloud Load Balancer: 1M+ req/s'],
            ['Data Locality', 'Single node = fast', 'Network latency: 0.5–2 ms', 'Cross-AZ: 1–2 ms; cross-region: 50–100 ms'],
            ['Fault Tolerance', 'Single point of failure', 'N-1 redundancy', 'Horizontal: 3 instances minimum for HA'],
            ['Storage Scaling', 'Add disks to single node', 'Distributed storage (S3, GFS)', 'S3: unlimited storage, 11 nines durability'],
            ['Network Bandwidth', '25–100 Gbps per instance', 'Aggregate: 1–10 Tbps', 'AWS EC2: 100 Gbps max per instance'],
            ['Operational Complexity', 'Low', 'High (orchestration, state)', 'Kubernetes adds ~20% overhead']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How each scaling approach handles increasing load:',
        table: {
          headers: ['Load Factor', 'Vertical Scaling', 'Horizontal Scaling', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Single large instance', '3 small instances', 'Both handle load comfortably'],
            ['2× Load', 'Upgrade to larger instance', 'Add 3 more instances', 'Vertical: brief downtime; Horizontal: seamless'],
            ['5× Load', 'Max instance size reached', 'Scale to 15 instances', 'Vertical hits ceiling; Horizontal keeps growing'],
            ['10× Load', 'Cannot scale further', '30+ instances across regions', 'Vertical: bottleneck; Horizontal: elastic'],
            ['100× Load', 'Complete rewrite needed', '300+ instances + auto-scaling', 'Horizontal with auto-scaling wins'],
            ['Burst (10× spike)', 'Over-provisioned waste', 'Scale out in 2–5 minutes', 'Horizontal: pay for burst only']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'The classic scaling journey from startup to hyperscaler (based on real company architectures):',
        list: [
          '<strong>Stage 1: 0–10 users (Prototype)</strong> — Single t2.micro (1 vCPU, 1 GB RAM). Vertical scaling only. Cost: $10/month. Everything on one machine.',
          '<strong>Stage 2: 10–1K users (MVP)</strong> — Upgrade to c5.large (2 vCPU, 4 GB). Vertical scaling. Separate DB on same instance. Cost: $50/month.',
          '<strong>Stage 3: 1K–10K users (Product-Market Fit)</strong> — Horizontal: 2 web servers behind load balancer. DB still vertical (RDS db.r5.xlarge). Cost: $500/month. First need for session stickiness.',
          '<strong>Stage 4: 10K–100K users (Growth)</strong> — Horizontal: 10+ web servers. DB read replicas (1 primary + 3 replicas). Cache layer (Redis cluster). Cost: $5K/month.',
          '<strong>Stage 5: 100K–1M users (Scale)</strong> — Horizontal: 50+ instances across 3 AZs. DB sharding begins. CDN for static assets. Cost: $50K/month.',
          '<strong>Stage 6: 1M–10M users (Enterprise)</strong> — Horizontal: 200+ instances, multi-region. Microservices (50+ services). Auto-scaling groups. Cost: $500K/month.',
          '<strong>Stage 7: 10M+ users (Hyperscale)</strong> — Horizontal: 1,000+ instances, global. Cell-based architecture. Serverless for bursty workloads. Cost: $5M+/month. Netflix runs 10,000+ EC2 instances.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Horizontal vs vertical scaling per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> Horizontal: stateless services scale perfectly (CPU-bound). Vertical: monolithic apps with shared memory (Java heap: 64 GB+). Netflix: 10,000+ stateless instances.',
          '<strong>Database Tier:</strong> Vertical: single-node PostgreSQL/MySQL (up to 64 vCPU, 512 GB RAM). Horizontal: read replicas (5–20), sharding (10–100 shards), or distributed DB (CockroachDB, Spanner).',
          '<strong>Cache Tier:</strong> Vertical: single Redis instance (up to 100 GB). Horizontal: Redis Cluster (16 shards × 6 GB = 96 GB), Redis Sentinel for HA. Memcached: inherently horizontal.',
          '<strong>Message Queue Tier:</strong> Vertical: single Kafka broker (up to 100K msg/s). Horizontal: Kafka cluster (10–100 brokers, 1M+ msg/s). RabbitMQ: vertical with clustering for HA.',
          '<strong>Load Balancer Tier:</strong> Horizontal: AWS ALB (auto-scales to millions of req/s). Vertical: hardware load balancer (F5: 40 Gbps). Cloud: always horizontal (DNS + anycast).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to choose horizontal vs vertical scaling:',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Instance Type', 'Rationale', 'Example'],
          rows: [
            ['Early startup (< 1K users)', 'Vertical', 'c5.large → c5.2xlarge', 'Simple, cost-effective, no ops overhead', 'MVP on single server'],
            ['Stateless web API', 'Horizontal', 'c5.large × 3–10', 'Perfect horizontal scaling; add instances', 'REST API microservices'],
            ['Relational database', 'Vertical + read replicas', 'db.r5.2xlarge + 3 replicas', 'ACID needs single writer; scale reads', 'PostgreSQL primary-replica'],
            ['In-memory cache', 'Horizontal (cluster)', 'cache.r6g.large × 10', 'Memory scales linearly with shards', 'Redis Cluster'],
            ['Big data processing', 'Horizontal', 'r5.2xlarge × 100', 'Data parallelism; map-reduce', 'Spark on EMR'],
            ['Legacy monolith', 'Vertical first', 'm5.8xlarge (32 vCPU)', 'Refactor cost high; scale up temporarily', 'Old Java application'],
            ['Global SaaS', 'Horizontal + multi-region', 't3.medium × 1,000', 'Latency + availability requirements', 'Salesforce, Slack'],
            ['GPU ML training', 'Vertical (single node) or Horizontal (distributed)', 'p4d.24xlarge', 'Single node: 8 A100 GPUs; Multi-node: Horovod', 'GPT training']
          ]
        }
      }
    ],
    'load-balancing': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Load balancer performance and capacity metrics from major cloud providers and hardware vendors:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Layer 4 Throughput', '1–10 Gbps', '100+ Gbps', 'AWS NLB: 100 Gbps per AZ pair'],
            ['Layer 7 Throughput', '100K–1M req/s', '10M+ req/s', 'Google Cloud LB: 1M+ req/s per instance'],
            ['Connection Count', '10K–100K', '1M–10M', 'AWS NLB: millions of concurrent connections'],
            ['SSL/TLS Handshakes/sec', '1K–10K', '100K+', 'Hardware SSL offload: 200K+ handshakes/s'],
            ['Latency (L4)', '< 1 ms', '< 0.1 ms', 'Kernel bypass (DPDK): sub-microsecond'],
            ['Latency (L7)', '1–5 ms', '0.5–2 ms', 'HTTP parsing + routing adds overhead'],
            ['Health Check Interval', '5–30 s', '1–5 s', 'Faster detection = more control plane load'],
            ['Failover Time', '1–30 s', '1–5 s', 'DNS TTL affects failover; anycast: <1 s'],
            ['Backend Pool Size', '2–10', '10–1,000', 'AWS ALB: up to 100 targets per target group'],
            ['Geographic Distribution', '1–3 regions', '10–50+ regions', 'Cloudflare: 300+ PoP locations']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Load balancer behavior as traffic scales:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–5 ms', 'Even distribution across backends', 'Round-robin or least-connections optimal'],
            ['2× Load', '2–10 ms', 'Some backends at 70% capacity', 'Weighted routing kicks in; consider scale-out'],
            ['5× Load', '5–20 ms', 'Backends at 90%+; queueing begins', 'Add backends or enable auto-scaling'],
            ['10× Load', '20–100 ms', 'LB itself becomes bottleneck', 'Need multiple LBs or anycast distribution'],
            ['100× Load', 'LB upgrade needed', 'DDoS mitigation mode', 'Cloudflare absorbs 70M req/s attacks']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Load balancer evolution from single server to global scale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No load balancer. Single server. DNS A record points directly to IP.',
          '<strong>Stage 2: 1K–10K users</strong> — Software LB: NGINX or HAProxy on dedicated instance. Round-robin to 2–3 backends. Health checks every 30 s.',
          '<strong>Stage 3: 10K–100K users</strong> — Cloud LB: AWS ALB/NLB or GCP Load Balancer. SSL termination at LB. Path-based routing. 10–20 backends.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-AZ load balancing. Cross-zone load balancing enabled. Connection draining. 50–100 backends. CDN integration.',
          '<strong>Stage 5: 1M–10M users</strong> — Global load balancing: AWS Global Accelerator, Cloudflare Load Balancer. Anycast IP. Geo-routing (route to nearest region).',
          '<strong>Stage 6: 10M+ users</strong> — Multi-tier LB: Edge (Cloudflare) → Regional (AWS ALB) → Service Mesh (Istio/Envoy). 1,000+ backends. Sub-second failover.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Load balancing at each infrastructure layer:',
        list: [
          '<strong>Application Tier:</strong> Reverse proxy LB (NGINX, HAProxy). Algorithm: least-connections for long-lived, round-robin for short. Session affinity (sticky sessions) for stateful apps.',
          '<strong>Database Tier:</strong> Read replica LB: distribute reads across replicas. ProxySQL: connection pooling + query routing. Vitess: sharded MySQL LB. pgPool: PostgreSQL connection pooling.',
          '<strong>Cache Tier:</strong> Redis: client-side sharding (consistent hashing) or Redis Cluster proxy (Twemproxy). Memcached: client library handles node selection.',
          '<strong>Message Queue Tier:</strong> Kafka: partition assignment acts as load balancing. RabbitMQ: queue federation across nodes. NATS: auto-discovery of cluster nodes.',
          '<strong>Load Balancer Tier:</strong> DNS (Route 53, Cloudflare): geographic routing. L4 (NLB, HAProxy): TCP/UDP forwarding. L7 (ALB, NGINX): HTTP routing, SSL, WAF. Service Mesh (Istio): per-pod LB.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Load balancer selection and algorithm:',
        table: {
          headers: ['Scenario', 'LB Type', 'Algorithm', 'Key Feature', 'Example'],
          rows: [
            ['Small web app', 'Software (NGINX)', 'Round-robin', 'Simple, free, SSL termination', 'Startup website'],
            ['High-throughput API', 'Cloud L4 (NLB)', '5-tuple hash', 'Millions of connections, low latency', 'Gaming backend'],
            ['HTTP routing', 'Cloud L7 (ALB)', 'Path-based', 'Host/path routing, WebSocket', 'Microservices gateway'],
            ['Global application', 'Anycast (Cloudflare)', 'Geo-proximity', 'Route to nearest PoP', 'SaaS platform'],
            ['Stateless microservices', 'Service Mesh', 'Least-request', 'mTLS, circuit breaker, retries', 'Kubernetes cluster'],
            ['Database reads', 'Proxy (ProxySQL)', 'Least-connections', 'Query caching, read/write split', 'E-commerce DB'],
            ['WebSocket/Real-time', 'L4 + Sticky', 'IP hash', 'Same backend for connection lifetime', 'Chat application'],
            ['Mobile API', 'Global Accelerator', 'Performance', 'Optimize for mobile network paths', 'Uber, Lyft']
          ]
        }
      }
    ],
    'auto-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Auto-scaling parameters and performance from AWS, Kubernetes, and Azure:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Scale-out Trigger (CPU)', '70–80%', '50–60%', 'Lower threshold = faster response, more cost'],
            ['Scale-in Trigger (CPU)', '30–40%', '20–30%', 'Prevent flapping; wide hysteresis band'],
            ['Scale-out Cooldown', '2–5 minutes', '30–60 seconds', 'Faster with predictive scaling'],
            ['Scale-in Cooldown', '5–15 minutes', '10–30 minutes', 'Longer to prevent premature termination'],
            ['Instance Launch Time', '2–5 minutes', '30–60 seconds', 'Pre-warmed AMIs; container startup faster'],
            ['Target Tracking Response', '1–2 minutes', '30–60 seconds', 'AWS Target Tracking: 1-minute CloudWatch'],
            ['Predictive Scaling Horizon', 'N/A', '1–24 hours', 'AWS Predictive: forecast based on history'],
            ['Min Instances', '2–3', '10–50', 'Higher minimum for baseline + HA'],
            ['Max Instances', '10–50', '1,000–10,000', 'AWS Auto Scaling: 1,000+ per group'],
            ['Cost Savings (vs static)', '20–40%', '50–70%', 'Spot instances + auto-scaling = maximum savings']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Auto-scaling behavior during traffic changes:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Steady)', 'Normal', 'Current instance count stable', 'No scaling action; baseline cost'],
            ['2× Load (gradual)', 'Slight increase then normal', 'Scale out in 2–5 minutes', 'Target tracking handles smoothly'],
            ['5× Load (gradual)', '1–2 min spike, then normal', 'Scale out to 3× instances', 'Some queueing during launch window'],
            ['10× Load (sudden)', '5–30 s spike', 'Predictive or scheduled scaling needed', 'Reactive scaling too slow; pre-warm required'],
            ['10× Load (predicted)', 'Normal', 'Instances ready before traffic hits', 'Scheduled scaling for known events'],
            ['Load Drop', 'Normal', 'Scale in after 10–15 min cooldown', 'Cost optimization; watch for flapping']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Auto-scaling implementation from startup to hyperscale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No auto-scaling. Static 1–2 instances. Manual scaling during deploys.',
          '<strong>Stage 2: 1K–10K users</strong> — Simple reactive auto-scaling: CPU > 80% → add instance. 5-minute cooldown. 2–5 instances.',
          '<strong>Stage 3: 10K–100K users</strong> — Multi-metric scaling: CPU + request count + queue depth. Target tracking policies. 2–20 instances.',
          '<strong>Stage 4: 100K–1M users</strong> — Predictive scaling: machine learning forecasts traffic patterns. Scheduled scaling for known events (Black Friday). 10–100 instances.',
          '<strong>Stage 5: 1M–10M users</strong> — Kubernetes HPA + VPA + cluster autoscaler. Pod-level + node-level scaling. Mixed on-demand + spot instances. 50–500 instances.',
          '<strong>Stage 6: 10M+ users</strong> — Multi-dimensional scaling: horizontal (instances) + vertical (bigger pods) + functional (serverless for bursts). Karpenter for node provisioning. 500–5,000+ instances.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Auto-scaling per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> AWS Auto Scaling Groups: CPU-based target tracking. Kubernetes HPA: scale pods on CPU/memory/custom metrics. KEDA: event-driven scaling (Kafka lag, queue length).',
          '<strong>Database Tier:</strong> AWS Aurora: auto-scaling read replicas (0–15). DynamoDB: on-demand capacity (pay per request). Google Cloud Spanner: automatic node addition.',
          '<strong>Cache Tier:</strong> Redis: manual shard addition (no true auto-scaling). AWS ElastiCache: cluster mode auto-scaling. Memcached: client-side consistent hashing + manual node add.',
          '<strong>Message Queue Tier:</strong> Kafka: auto-scaling consumers based on lag. SQS: Lambda event source mapping auto-scales consumers. RabbitMQ: consumer count auto-scales with queue depth.',
          '<strong>Load Balancer Tier:</strong> AWS ALB: automatic capacity scaling (no config needed). Cloudflare: always scaled. NGINX: manual config update when backends change (or use Consul Template).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Auto-scaling strategy by workload pattern:',
        table: {
          headers: ['Workload Pattern', 'Scaling Strategy', 'Metrics', 'Cooldown', 'Example'],
          rows: [
            ['Steady + predictable', 'Scheduled scaling', 'Time-based', 'N/A', 'Daily cron jobs'],
            ['Gradual growth', 'Target tracking (CPU)', 'CPU 70%', '2 min', 'SaaS application growth'],
            ['Spiky/unpredictable', 'Predictive + reactive', 'CPU + request count', '1 min', 'Social media app'],
            ['Event-driven', 'KEDA / Lambda', 'Queue depth / Kafka lag', '0 (immediate)', 'Image processing pipeline'],
            ['Batch processing', 'Scheduled scale-out', 'Time-based', 'N/A', 'Nightly ETL jobs'],
            ['Dev/test environments', 'Scheduled scale to zero', 'Time-based', 'N/A', 'Office hours only'],
            ['Global application', 'Geo-scheduled', 'Regional traffic patterns', 'N/A', 'Follow-the-sun scaling']
          ]
        }
      }
    ],
    'database-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Database scaling metrics and limits from real-world systems (Amazon, Uber, Airbnb):',
        table: {
          headers: ['Metric', 'Single Node', 'Read Replicas', 'Sharding', 'Notes'],
          rows: [
            ['Max Connections', '100–1,000', '100–1,000 per replica', 'Aggregate: 10K+', 'PostgreSQL: 100 default; tune to 500'],
            ['Max Write Throughput', '1K–10K TPS', 'Same as primary', '10K–100K TPS', 'MySQL: 5K–10K TPS on modern hardware'],
            ['Max Read Throughput', '10K–50K QPS', '50K–500K QPS', '100K–1M QPS', 'Read replicas scale reads linearly'],
            ['Max Data Size', '1–10 TB', 'Same as primary', '100 TB+', 'PostgreSQL: practical limit ~4 TB'],
            ['Replication Lag', 'N/A', '1 ms–1 s', 'N/A (shards independent)', 'Async replication: 1 ms–1 s typical'],
            ['Failover Time', '5–15 minutes', '1–30 seconds', '1–5 minutes', 'RDS Multi-AZ: 60–120 s failover'],
            ['Scale-out Time', '5–15 minutes', '5–10 minutes', 'Hours–days', 'Adding shard = data migration'],
            ['Query Latency (p99)', '1–10 ms', '1–10 ms', '1–10 ms', 'Same if properly indexed'],
            ['Storage Cost/GB/month', '$0.10–$0.50', '$0.10–$0.50', '$0.10–$0.50', 'RDS: ~$0.25/GB; Aurora: ~$0.10/GB'],
            ['Operational Complexity', 'Low', 'Medium', 'High', 'Sharding requires application changes']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Database behavior as load increases:',
        table: {
          headers: ['Load Factor', 'Single Node', 'Read Replicas', 'Sharding', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal', 'Normal', 'Normal', 'All approaches handle load'],
            ['2× Read Load', 'CPU 80%, latency ↑', 'Distribute to 2 replicas', 'Normal', 'Read replicas solve read scaling'],
            ['5× Read Load', 'Unusable', '5 replicas, 20% utilization', 'Normal', 'Sharding overkill for reads alone'],
            ['2× Write Load', 'CPU 80%, disk IO ↑', 'Same as primary', 'Normal', 'Write scaling needs sharding'],
            ['5× Write Load', 'Dead', 'Primary dead', '5 shards, normal', 'Only sharding handles write scale'],
            ['10× Mixed Load', 'Dead', 'Primary dead', '10 shards, 50% utilization', 'Sharding + replicas = ultimate scale']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Database scaling journey from single node to distributed:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single PostgreSQL/MySQL on same server as app. No replication. Daily backups.',
          '<strong>Stage 2: 1K–10K users</strong> — Separate DB server. Vertical scaling: db.r5.large (2 vCPU, 16 GB). Automated backups.',
          '<strong>Stage 3: 10K–100K users</strong> — Read replicas: 1 primary + 2 replicas. Async replication. Read/write split in application. Connection pooling (PgBouncer).',
          '<strong>Stage 4: 100K–1M users</strong> — Read replicas: 1 primary + 10 replicas. Connection pooling mandatory. Query optimization (index tuning, materialized views).',
          '<strong>Stage 5: 1M–10M users</strong> — Sharding: 10–50 shards by user_id. Application-level routing. Shard rebalancing tools. Or migrate to CockroachDB/Spanner.',
          '<strong>Stage 6: 10M+ users</strong> — Distributed SQL: CockroachDB (50+ nodes), Spanner (global). Automatic sharding. ACID across regions. Or NoSQL: DynamoDB (unlimited scale), Cassandra (100+ nodes).'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Database scaling strategies per component:',
        list: [
          '<strong>Application Tier:</strong> Read/write split: writes to primary, reads to replicas. Connection pooling: 10–20 connections per app instance. Query caching: 1–5 second TTL for read-heavy queries.',
          '<strong>Database Tier:</strong> Vertical: scale to 64 vCPU, 512 GB RAM. Read replicas: 1–20 async replicas. Sharding: hash or range-based (user_id % 16). Partitioning: table-level (time-based partitions).',
          '<strong>Cache Tier:</strong> Cache-aside: 80% read hit rate. Write-through: cache updated on write. Cache warming: pre-populate after restart. Redis: 100K+ QPS per node.',
          '<strong>Message Queue Tier:</strong> CQRS: read model updated via events. Event sourcing: state rebuilt from event log. Outbox pattern: DB + message queue consistency.',
          '<strong>Load Balancer Tier:</strong> ProxySQL: routes reads to replicas, writes to primary. HAProxy: health checks for replica lag. Vitess: transparent sharding for MySQL.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Database scaling approach by scenario:',
        table: {
          headers: ['Scenario', 'Approach', 'Read Replicas', 'Shards', 'Example'],
          rows: [
            ['Read-heavy, low write', 'Read replicas', '3–10', '0', 'News site, catalog'],
            ['Write-heavy, low read', 'Sharding', '0–2', '10–50', 'Time-series data, IoT'],
            ['Balanced read/write', 'Sharding + replicas', '2–5 per shard', '10–20', 'E-commerce (Amazon)'],
            ['Global, low latency', 'Distributed SQL', 'Built-in', 'Automatic', 'Spanner, CockroachDB'],
            ['Massive scale, flexible', 'NoSQL', 'N/A', 'Automatic', 'DynamoDB, Cassandra'],
            ['Complex transactions', 'Vertical + replicas', '2–5', '0', 'Banking, ERP'],
            ['Analytics/OLAP', 'Columnar + ETL', 'N/A', 'N/A', 'Redshift, BigQuery'],
            ['Caching layer', 'In-memory', 'Redis Cluster', 'N/A', 'Session store, leaderboard']
          ]
        }
      }
    ],
    'microservices-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Microservices scaling metrics from Netflix, Uber, and Amazon production systems:',
        table: {
          headers: ['Metric', 'Small Scale', 'Medium Scale', 'Hyperscale', 'Notes'],
          rows: [
            ['Services Count', '5–20', '50–100', '500–2,000+', 'Netflix: 700+; Uber: 2,000+'],
            ['Developers per Service', '2–5', '5–10', '10–50', 'Amazon: 2-pizza team per service'],
            ['Deployments per Day', '1–10', '100–1,000', '10,000+', 'Netflix: 1,000+ production deploys/day'],
            ['Container per Service', '2–5', '10–50', '100–1,000', 'Kubernetes: 3 pods minimum per service'],
            ['Inter-service Calls/request', '1–3', '5–10', '10–50', 'Each user request fans out to many services'],
            ['Service Discovery Latency', '1–10 ms', '1–5 ms', '< 1 ms', 'Consul: 1–5 ms; Eureka: 1–3 ms'],
            ['API Gateway Latency', '1–5 ms', '5–20 ms', '10–50 ms', 'Adds overhead per hop; caching critical'],
            ['Service Mesh Overhead', 'N/A', '1–3 ms', '0.5–2 ms', 'Istio/Envoy: 1–3 ms per hop at scale'],
            ['Database per Service', 'Shared (1–3)', 'Mixed (some dedicated)', 'Dedicated', 'Database per service ideal but costly'],
            ['Cross-team Communication', 'Low', 'Medium', 'High (orchestrated)', 'API contracts, versioning critical']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Microservices performance as system complexity grows:',
        table: {
          headers: ['Load Factor', 'Latency (1 service)', 'Latency (10 services)', 'Latency (50 services)', 'What It Means'],
          rows: [
            ['1× (Baseline)', '10 ms', '50 ms', '200 ms', 'Each hop adds 1–5 ms overhead'],
            ['2× Load', '12 ms', '60 ms', '300 ms', 'Queueing at each service compounds'],
            ['5× Load', '20 ms', '150 ms', '1 s+', 'Tail latency amplification (fan-out)'],
            ['10× Load', '50 ms', '500 ms', '5 s+', 'Circuit breakers open; fallbacks activate'],
            ['Cascading Failure', 'Timeout', 'Partial outage', 'System-wide degradation', 'One slow service affects all callers']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Microservices adoption and scaling journey:',
        list: [
          '<strong>Stage 1: 0–1K users (Monolith)</strong> — Single deployable unit. 1 database. 1 team. Simple but scaling limited.',
          '<strong>Stage 2: 1K–10K users (Modular Monolith)</strong> — Internal modules with clean boundaries. Shared database. Prepare for extraction.',
          '<strong>Stage 3: 10K–100K users (First Microservices)</strong> — Extract 1–3 services (auth, payments). Each has own DB. API Gateway introduced. 2–3 teams.',
          '<strong>Stage 4: 100K–1M users (Service Mesh)</strong> — 20–50 services. Kubernetes + Istio. Service discovery (Consul/Eureka). Centralized logging/metrics. 5–10 teams.',
          '<strong>Stage 5: 1M–10M users (Platform)</strong> — 100+ services. Internal developer platform. CI/CD pipelines per service. Feature flags. Chaos engineering. 20–50 teams.',
          '<strong>Stage 6: 10M+ users (Ecosystem)</strong> — 500+ services. Cell-based architecture. Multi-region active-active. Federated GraphQL. gRPC everywhere. 100+ teams.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Microservices scaling per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> Stateless services: scale horizontally (10–1,000 instances). Stateful services: partition by user (shard). API Gateway: rate limiting, routing, caching. Sidecar pattern: Envoy proxy per pod.',
          '<strong>Database Tier:</strong> Database per service: 1 DB per 2–5 services initially. Event sourcing: state changes as events. CQRS: separate read/write models. Saga pattern: distributed transactions.',
          '<strong>Cache Tier:</strong> Distributed cache: Redis Cluster per service group. Cache invalidation: event-driven (Kafka → cache clear). Local cache: Caffeine/Guava per instance (1–5 min TTL).',
          '<strong>Message Queue Tier:</strong> Async communication: Kafka for events (1M+ msg/s). RabbitMQ for RPC (request/reply). NATS for lightweight pub/sub. Dead letter queues for failed processing.',
          '<strong>Load Balancer Tier:</strong> Kubernetes Ingress: L7 routing per service. Istio Gateway: mTLS + traffic splitting. Consul: service mesh load balancing. NGINX: path-based routing to services.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Microservices architecture decisions:',
        table: {
          headers: ['Decision', 'Monolith', 'Microservices', 'When to Choose', 'Example'],
          rows: [
            ['Architecture', 'Single codebase', 'Multiple codebases', '< 10 developers = monolith; > 30 = microservices', 'Startup vs Enterprise'],
            ['Database', 'Shared database', 'Database per service', 'Strong consistency needs = shared; independent scaling = per service', 'Banking vs Social'],
            ['Communication', 'In-process calls', 'HTTP/gRPC/messaging', 'Latency sensitive = in-process; resilient = async messaging', 'Real-time vs E-commerce'],
            ['Deployment', 'Weekly/monthly', 'Multiple per day', 'Risk tolerance; feature velocity', 'Enterprise vs Netflix'],
            ['Team Structure', '1 large team', '2-pizza teams', 'Conway\'s Law: architecture follows org', 'Amazon vs Traditional'],
            ['Observability', 'Simple logging', 'Distributed tracing', '> 10 services = tracing mandatory', 'Jaeger, Zipkin'],
            ['Testing', 'Integration tests', 'Contract tests + chaos', 'Consumer-driven contracts (Pact) for microservices', 'Unit vs E2E']
          ]
        }
      }
    ],
    'stateless-services': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Stateless service metrics and scaling characteristics from cloud-native best practices:',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Instance Startup Time', '5–30 seconds', '1–5 seconds', 'Container: 1–5 s; VM: 30–60 s'],
            ['Instance Memory', '256 MB–2 GB', '128 MB–512 MB', 'Smaller = faster scale, more density'],
            ['Instance CPU', '0.5–2 vCPUs', '0.25–1 vCPU', 'AWS Fargate: 0.25 vCPU minimum'],
            ['Max Instances per Service', '10–50', '1,000–10,000', 'Kubernetes: 100 pods per namespace typical'],
            ['Requests per Instance', '100–1,000 req/s', '1,000–10,000 req/s', 'Go: 10K+ req/s; Node.js: 1–5K req/s'],
            ['Session Data Size', '0 (stateless)', '0 (stateless)', 'All state externalized to Redis/DB'],
            ['Scale-out Time', '1–5 minutes', '10–30 seconds', 'Kubernetes HPA: 30 s reaction time'],
            ['Scale-in Time', '5–10 minutes', '1–5 minutes', 'Longer to prevent flapping'],
            ['Rolling Update Time', '5–15 minutes', '1–5 minutes', 'Kubernetes: maxUnavailable + maxSurge'],
            ['Cost per 1K req', '$0.001–$0.01', '$0.0001–$0.001', 'Serverless: Lambda $0.20 per 1M requests']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Stateless service behavior under increasing load:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal', '3 instances handle load', 'Even distribution; no session affinity needed'],
            ['2× Load', 'Normal', 'Scale to 6 instances in 2 min', 'Seamless; no state migration needed'],
            ['5× Load', 'Normal', '15 instances; all healthy', 'Perfect horizontal scaling; each instance identical'],
            ['10× Load', 'Normal', '30 instances; auto-scaling', 'No bottleneck from shared state'],
            ['100× Load', 'Slight increase', '300 instances; cost spike', 'Stateless scales linearly; watch costs'],
            ['Instance Failure', 'No impact', 'Traffic redistributed', 'Other instances unaffected; user sees no difference']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Stateless service adoption journey:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Stateful monolith: sessions in memory, files on disk. Single server. Simple but not scalable.',
          '<strong>Stage 2: 1K–10K users</strong> — Session externalization: Redis for sessions, S3 for files. App becomes stateless. 2 instances behind LB.',
          '<strong>Stage 3: 10K–100K users</strong> — Fully stateless: no local storage, no in-memory state. JWT tokens instead of sessions. 10 instances. Kubernetes.',
          '<strong>Stage 4: 100K–1M users</strong> — Stateless microservices: 50+ services, all stateless. Shared nothing architecture. CDN for static assets.',
          '<strong>Stage 5: 1M–10M users</strong> — Serverless stateless: AWS Lambda, Google Cloud Run. Automatic scaling to zero. Pay per request. Cold start: 100 ms–1 s.',
          '<strong>Stage 6: 10M+ users</strong> — Global stateless: multi-region deployment. Same container image everywhere. Geo-routing at edge. Cloudflare Workers (stateless at edge).'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Stateless patterns per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> No in-memory sessions. JWT for authentication (stateless auth). Configuration from environment variables. Logs to stdout (external aggregation).',
          '<strong>Database Tier:</strong> No local DB state. Connection pooling external (PgBouncer). Read replicas for scale. Write to primary only.',
          '<strong>Cache Tier:</strong> External cache only (Redis Cluster). No local cache that causes inconsistency. Cache warming on startup.',
          '<strong>Message Queue Tier:</strong> Consume from queue, process, ack. No local offset storage. Consumer group membership external (ZooKeeper/KRaft).',
          '<strong>Load Balancer Tier:</strong> No sticky sessions required. Any instance can handle any request. Health checks: simple HTTP 200. Rolling updates: zero downtime.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Stateless vs stateful by scenario:',
        table: {
          headers: ['Scenario', 'Stateless', 'Stateful', 'Hybrid', 'Example'],
          rows: [
            ['Web API (CRUD)', '✅ Perfect fit', '❌ Unnecessary', '—', 'REST API'],
            ['Real-time game server', '❌ Needs game state', '✅ Required', '—', 'MMORPG server'],
            ['WebSocket chat', '❌ Needs connection state', '✅ Required', '—', 'Slack, Discord'],
            ['Video streaming', '✅ CDN + stateless origin', '❌ Not needed', '—', 'Netflix'],
            ['Shopping cart', '✅ External session store', '❌ Risky', '✅ Redis session', 'Amazon cart'],
            ['ML inference', '✅ Model in container', '❌ Large models', '✅ Model server', 'TensorFlow Serving'],
            ['Financial transaction', '✅ External state machine', '❌ Risky', '✅ Saga pattern', 'Payment processing'],
            ['File upload', '✅ Stream to S3', '❌ Disk limits', '—', 'Google Drive upload']
          ]
        }
      }
    ]
  },
  module6: {
    'sagas': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Saga pattern metrics from microservices transaction implementations (Netflix Conductor, Camunda, Temporal):',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Saga Steps (max)', '3–10', '10–50', 'More steps = more complexity, longer execution'],
            ['Saga Execution Time', '100 ms–1 s', '1–30 s', 'Choreography: faster; Orchestration: more reliable'],
            ['Compensating Action Time', '10 ms–1 s', '100 ms–5 s', 'Must complete successfully; no retries on comp'],
            ['Saga Timeout', '5–30 s', '30 s–5 min', 'Longer for external service calls'],
            ['Concurrent Sagas', '100–1,000', '10,000–100,000', 'Temporal: 100K+ concurrent workflows'],
            ['Saga Failure Rate', '0.1–1%', '1–5%', 'Higher with more steps and external services'],
            ['Compensation Success Rate', '99.9%', '99.5%', 'Compensation must be designed to not fail'],
            ['Event Store Retention', '7–30 days', '1–7 days', 'Saga events for debugging/auditing'],
            ['Saga Orchestrator Latency', '1–5 ms', '< 1 ms', 'In-memory state machine; minimal overhead'],
            ['Message Queue for Saga', '1,000–10,000 msg/s', '100,000+ msg/s', 'Kafka: 1M+ msg/s per cluster']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Saga behavior under increasing transaction load:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '100 ms–1 s', '99% sagas complete successfully', 'Normal operation; occasional compensation'],
            ['2× Load', '100 ms–2 s', '98% success; 2% compensation', 'Slight increase in partial failures'],
            ['5× Load', '1–5 s', '95% success; 5% compensation', 'External services slow down; more timeouts'],
            ['10× Load', '5–30 s', '90% success; 10% compensation', 'Compensations cascade; monitor carefully'],
            ['Saga Storm', '30 s–timeout', '50% success; 50% compensation', 'Circuit breaker on saga steps needed'],
            ['Compensation Failure', 'Manual intervention', 'Data inconsistency risk', 'Escalate to human; audit log critical']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Saga pattern adoption from simple to complex systems:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No sagas. Single database ACID transactions. Simple, reliable, but no distribution.',
          '<strong>Stage 2: 1K–10K users</strong> — First distributed operation: payment + inventory. Saga with 2 steps. Manual compensation (refund + restock).',
          '<strong>Stage 3: 10K–100K users</strong> — Choreography sagas: services emit events, others react. 3–5 steps. Event bus (RabbitMQ). Compensations automated.',
          '<strong>Stage 4: 100K–1M users</strong> — Orchestration sagas: central coordinator (Camunda/Temporal). 5–10 steps. Visual workflow definition. Compensation planning mandatory.',
          '<strong>Stage 5: 1M–10M users</strong> — Saga patterns standardized: each service exposes compensate endpoint. Saga monitoring dashboard. 90% automated, 10% human-assisted.',
          '<strong>Stage 6: 10M+ users</strong> — Saga as platform: reusable saga templates. Automatic compensation generation. ML predicts failure points and pre-compensates. Temporal Cloud: 100K+ concurrent workflows.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Saga implementation per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> Saga coordinator service: state machine management. Compensation service: reverse operations. Idempotency keys for all saga steps. Timeout and retry policies per step.',
          '<strong>Database Tier:</strong> Each service has local transaction. Outbox pattern: write to DB + outbox table atomically. CDC (Debezium) publishes outbox to message bus. Compensation: update local state + publish event.',
          '<strong>Cache Tier:</strong> Saga-aware cache: invalidate on saga completion, not step completion. Compensation: restore cache to pre-saga state. Distributed cache locks during saga execution.',
          '<strong>Message Queue Tier:</strong> Kafka: saga events in dedicated topic. Event ordering: partition by saga ID. Dead letter queue for failed steps. Exactly-once semantics for saga events.',
          '<strong>Load Balancer Tier:</strong> Saga coordinator: sticky routing for saga ID (same coordinator handles all steps). Or stateless coordinator with external state store (Redis).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Saga pattern vs alternatives:',
        table: {
          headers: ['Scenario', 'Saga Type', 'Coordination', 'Compensation', 'Example'],
          rows: [
            ['2–3 services, simple flow', 'Choreography', 'Event-driven', 'Simple reverse', 'Order + Payment'],
            ['5+ services, complex flow', 'Orchestration', 'Central coordinator', 'Planned per step', 'Travel booking'],
            ['Real-time requirement', 'None (2PC)', 'Synchronous', 'Rollback', 'Bank transfer'],
            ['Long-running process', 'Orchestration', 'Temporal/Camunda', 'Human + automated', 'Loan approval'],
            ['High throughput, simple', 'Choreography', 'Kafka events', 'Best-effort', 'Inventory updates'],
            ['Financial, audit required', 'Orchestration', 'Camunda + audit log', 'Mandatory + logged', 'Insurance claim'],
            ['Mobile app backend', 'Choreography', 'Lightweight events', 'Simple', 'Social media actions']
          ]
        }
      }
    ],
    'two-phase-commit': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: '2PC performance metrics from database and distributed systems research:',
        table: {
          headers: ['Metric', 'Single Coordinator', 'Distributed Coordinator', 'Notes'],
          rows: [
            ['2PC Latency (no failure)', '2–3 network RTTs', '4–6 network RTTs', 'Prepare + Commit phases'],
            ['2PC Latency (with failure)', '5–10 s', '10–30 s', 'Timeout + recovery protocol'],
            ['Max Participants', '2–5', '5–10', 'More participants = higher failure probability'],
            ['Coordinator Recovery Time', '1–5 s', '5–30 s', 'Election + log replay'],
            ['Blocking Probability', '0.01–0.1%', '0.1–1%', 'Coordinator failure during commit = blocking'],
            ['Throughput (2PC)', '100–1,000 TPS', '10–100 TPS', 'Per distributed transaction; much slower than local'],
            ['Throughput (local TX)', '1,000–10,000 TPS', '1,000–10,000 TPS', 'Baseline for comparison'],
            ['Log Writes per 2PC', '4 (2 per participant)', '2N (N participants)', 'Prepare log + commit log'],
            ['Network Messages per 2PC', '4N', '4N + coordination', 'N = number of participants'],
            ['2PC Timeout (prepare)', '1–5 s', '5–10 s', 'How long to wait for prepare votes']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: '2PC behavior under increasing load:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '10–50 ms', 'All transactions commit', 'Coordinator not a bottleneck'],
            ['2× Load', '20–100 ms', '95% commit, 5% timeout retry', 'Some prepare phases timeout'],
            ['5× Load', '100 ms–1 s', '80% commit, 20% abort/timeout', 'Coordinator saturated; consider sharding'],
            ['10× Load', '1–5 s', '50% commit, 50% issues', '2PC coordinator is single bottleneck'],
            ['Coordinator Failure', 'Blocking', 'All in-flight transactions block', 'Until coordinator recovers; minutes possible'],
            ['Participant Failure', 'Transaction abort', 'Automatic rollback', 'Safer than blocking; but work lost']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: '2PC usage from small to large systems:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No distributed transactions. Single database ACID is sufficient.',
          '<strong>Stage 2: 1K–10K users</strong> — First 2PC: two databases, one coordinator. XA transactions (Java JTA). Simple but slow.',
          '<strong>Stage 3: 10K–100K users</strong> — 2PC with 3–5 participants. Dedicated coordinator service. Timeout tuning critical. First blocking incidents.',
          '<strong>Stage 4: 100K–1M users</strong> — 2PC replaced by sagas for most cases. 2PC only for critical financial operations (2–3 participants max).',
          '<strong>Stage 5: 1M–10M users</strong> — 2PC extremely rare. Used only in specialized databases (Google Spanner: internal 2PC, external saga).',
          '<strong>Stage 6: 10M+ users</strong> — No 2PC in application layer. Database-internal distributed transactions only (Spanner, CockroachDB). Application uses sagas or eventual consistency.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: '2PC implementation across infrastructure:',
        list: [
          '<strong>Application Tier:</strong> XA/JTA for Java applications. Coordinator service: transaction manager (Atomikos, Bitronix). Application code: begin, enlist, commit/rollback.',
          '<strong>Database Tier:</strong> PostgreSQL: PREPARE TRANSACTION + COMMIT PREPARED. MySQL: XA START / XA END / XA PREPARE / XA COMMIT. Oracle: automatic 2PC in distributed transactions.',
          '<strong>Cache Tier:</strong> No 2PC with cache. Cache updates are best-effort. If 2PC needed, include cache as participant (rare, complex).',
          '<strong>Message Queue Tier:</strong> JMS/XA: enqueue + DB update in same 2PC. Kafka: no native 2PC; use outbox + CDC instead.',
          '<strong>Load Balancer Tier:</strong> Coordinator affinity: all 2PC requests routed to same coordinator instance. Or distributed coordinator with consensus (Raft/Paxos).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use 2PC vs alternatives:',
        table: {
          headers: ['Scenario', '2PC', 'Saga', 'Eventual Consistency', 'Recommendation'],
          rows: [
            ['Bank account transfer', '✅ Required', '❌ Too risky', '❌ Unacceptable', '2PC with strong consistency'],
            ['E-commerce order', '❌ Too slow', '✅ Perfect', '❌ Inventory risk', 'Saga (order + payment + inventory)'],
            ['Social media post', '❌ Overkill', '❌ Unnecessary', '✅ Perfect', 'Eventual consistency'],
            ['Inventory reservation', '❌ Blocking risk', '✅ Good', '✅ Acceptable', 'Saga or async reservation'],
            ['Multi-DB report', '❌ Not needed', '❌ Not needed', '✅ Perfect', 'Read replicas + eventual consistency'],
            ['Payment processing', '✅ If single processor', '✅ If multi-service', '❌ Risky', 'Depends on architecture'],
            ['Distributed lock', '❌ Use Redlock', '❌ Not applicable', '❌ Not applicable', 'Redlock or ZooKeeper']
          ]
        }
      }
    ],
    'quorum-consistency': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Quorum consistency metrics from distributed databases (Cassandra, DynamoDB, Riak, etcd):',
        table: {
          headers: ['Metric', 'Weak Quorum', 'Strong Quorum', 'Notes'],
          rows: [
            ['Replication Factor (N)', '3', '3–5', 'Typical: 3; critical: 5'],
            ['Read Quorum (R)', '1', '2–3', 'R + W > N for strong consistency'],
            ['Write Quorum (W)', '1', '2–3', 'W = N for all-node writes'],
            ['Read Latency (local)', '1–2 ms', '2–5 ms', 'R=1: single node; R=3: wait for majority'],
            ['Write Latency (local)', '1–2 ms', '5–10 ms', 'W=1: fast; W=3: wait for replication'],
            ['Read Latency (cross-region)', '50–100 ms', '100–200 ms', 'Quorum across regions = high latency'],
            ['Write Latency (cross-region)', '50–100 ms', '100–500 ms', 'DynamoDB global tables: 1 s replication'],
            ['Availability (1 node down)', '100%', '100% (if R+W≤N+1)', 'Quorum tolerates (N-1)/2 failures'],
            ['Availability (2 nodes down, N=3)', 'Degraded', 'Unavailable', 'Strong quorum needs majority'],
            ['Stale Read Probability', '10–50%', '0%', 'R=1: high stale read chance']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Quorum consistency behavior under load:',
        table: {
          headers: ['Load Factor', 'R=1, W=1', 'R=2, W=2 (N=3)', 'R=3, W=3 (N=3)', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–2 ms', '2–5 ms', '5–10 ms', 'Fastest with weak quorum'],
            ['2× Load', '1–2 ms', '3–8 ms', '8–15 ms', 'Strong quorum latency increases'],
            ['5× Load', '2–5 ms', '10–30 ms', '30–100 ms', 'Quorum waits for slowest replica'],
            ['10× Load', '5–10 ms', '50–200 ms', 'Timeout', 'Strong quorum may fail under extreme load'],
            ['Node Failure (1 down)', 'Normal', 'Normal (slower)', 'Unavailable', 'R+W>N needed for availability'],
            ['Network Partition', 'Split brain possible', 'Consistent majority', 'Consistent but unavailable', 'CAP theorem in action']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Quorum consistency adoption journey:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single node. No replication. No quorum concepts. Simple but no HA.',
          '<strong>Stage 2: 1K–10K users</strong> — First replication: 3 nodes. R=1, W=1 for speed. Eventual consistency. Occasional stale reads.',
          '<strong>Stage 3: 10K–100K users</strong> — R=2, W=1 for read-heavy. R=1, W=2 for write-heavy. Tunable per query. Cassandra consistency levels.',
          '<strong>Stage 4: 100K–1M users</strong> — R=2, W=2 (quorum) for critical data. R=1, W=1 for analytics. Per-query consistency selection.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-region: LOCAL_QUORUM (same region), QUORUM (global). DynamoDB: consistent reads option. Spanner: external consistency (stronger than quorum).',
          '<strong>Stage 6: 10M+ users</strong> — Automatic consistency tuning: system selects R/W based on latency SLA. Linearizable for critical operations, eventual for rest. Calvin-style deterministic ordering.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Quorum consistency per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> Cassandra driver: consistency level per query (ONE, QUORUM, ALL). DynamoDB: ConsistentRead=true/false. Application logic: handle stale reads gracefully.',
          '<strong>Database Tier:</strong> Cassandra: tunable consistency (N=3, R+W>N for strong). DynamoDB: eventually consistent by default; strongly consistent reads 2× cost. Riak: bucket properties for quorum. etcd: Raft consensus (automatic quorum).',
          '<strong>Cache Tier:</strong> No quorum in cache. Cache is inherently eventually consistent. Redis Cluster: no strong consistency guarantees. Use cache aside with TTL.',
          '<strong>Message Queue Tier:</strong> Kafka: min.insync.replicas acts as write quorum. R=1 (consumer reads from single replica). Exactly-once: stronger consistency via transactions.',
          '<strong>Load Balancer Tier:</strong> No direct quorum. But health checks: quorum of health checks to mark up/down. Consul: quorum of servers for consensus.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Quorum consistency level selection:',
        table: {
          headers: ['Scenario', 'Consistency Level', 'Latency', 'Availability', 'Example'],
          rows: [
            ['User session read', 'ONE (R=1)', '1–2 ms', 'Highest', 'Session cache'],
            ['Product catalog', 'ONE (R=1)', '1–2 ms', 'Highest', 'Amazon product page'],
            ['Shopping cart read', 'QUORUM (R=2)', '2–5 ms', 'High', 'Cart contents'],
            ['Order placement', 'QUORUM (R=2, W=2)', '5–10 ms', 'High', 'Order write'],
            ['Payment record', 'ALL (R=3, W=3)', '10–50 ms', 'Lower', 'Payment ledger'],
            ['Analytics/Metrics', 'ONE (R=1)', '1–2 ms', 'Highest', 'Time-series data'],
            ['Cross-region read', 'LOCAL_QUORUM', '2–5 ms', 'High', 'Regional user data'],
            ['Cross-region write', 'EACH_QUORUM', '50–200 ms', 'Medium', 'Global inventory']
          ]
        }
      }
    ],
    'distributed-transactions': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Distributed transaction metrics across various implementation patterns:',
        table: {
          headers: ['Metric', '2PC', 'Saga', 'TCC', 'Notes'],
          rows: [
            ['Latency (happy path)', '10–50 ms', '50–500 ms', '20–100 ms', '2PC fastest but riskiest'],
            ['Latency (with retry)', '1–5 s', '1–10 s', '1–5 s', 'Saga retries add latency'],
            ['Max Throughput', '100–1,000 TPS', '1,000–10,000 TPS', '500–5,000 TPS', 'Saga scales better'],
            ['Failure Recovery Time', '1–30 s', '100 ms–1 s', '10 ms–100 ms', 'TCC: Try-Confirm-Cancel'],
            ['Application Complexity', 'Low', 'Medium', 'High', 'TCC requires 3 operations per service'],
            ['Coordinator Required', 'Yes', 'Optional', 'Yes', 'Saga: choreography needs no coordinator'],
            ['Blocking Risk', 'High', 'None', 'Low', '2PC blocks on coordinator failure'],
            ['Data Consistency', 'Strong', 'Eventual', 'Eventual', 'Saga: temporary inconsistency during execution'],
            ['Compensation Required', 'No (rollback)', 'Yes', 'Yes (Cancel)', 'Saga and TCC need compensating logic'],
            ['Industry Usage', 'Declining', 'Growing', 'Niche', 'Saga: Netflix, Uber; TCC: Alibaba']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Distributed transaction patterns under load:',
        table: {
          headers: ['Load Factor', '2PC', 'Saga', 'TCC', 'What It Means'],
          rows: [
            ['1× (Baseline)', '10–50 ms', '50–200 ms', '20–100 ms', 'All patterns functional'],
            ['2× Load', '50–200 ms', '100–500 ms', '50–200 ms', '2PC saturates first'],
            ['5× Load', '200 ms–2 s', '200 ms–1 s', '100 ms–500 ms', 'Saga and TCC handle better'],
            ['10× Load', '1–10 s', '500 ms–2 s', '200 ms–1 s', '2PC unusable; Saga preferred'],
            ['Partial Failure', 'Blocking possible', 'Compensation executes', 'Cancel executes', 'Saga/TCC more resilient'],
            ['Full Recovery', 'Manual possible', 'Automatic', 'Automatic', 'Saga/TCC self-healing']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Distributed transaction pattern adoption:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No distributed transactions. Single database. ACID guarantees.',
          '<strong>Stage 2: 1K–10K users</strong> — First split: user service + order service. 2PC for critical operations. Painfully slow but safe.',
          '<strong>Stage 3: 10K–100K users</strong> — Saga pattern introduced. 3–5 services. Event-driven choreography. Compensation logic added.',
          '<strong>Stage 4: 100K–1M users</strong> — TCC for high-performance scenarios (Alibaba Seata). Try (reserve), Confirm (commit), Cancel (release). 10–20 services.',
          '<strong>Stage 5: 1M–10M users</strong> — Saga orchestration (Temporal/Camunda). 50+ services. Visual workflow design. Compensation planning automated.',
          '<strong>Stage 6: 10M+ users</strong> — Pattern-specific: 2PC only in database internals (Spanner). Application: sagas for most, TCC for performance-critical, eventual consistency for rest.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Distributed transaction patterns per component:',
        list: [
          '<strong>Application Tier:</strong> Saga coordinator: workflow engine (Temporal, Camunda). TCC framework: Seata, ByteTCC. Transaction context propagation: OpenTelemetry baggage, headers.',
          '<strong>Database Tier:</strong> 2PC: XA transactions across databases. Saga: local transactions + outbox pattern. TCC: business-level reservations in DB. Event sourcing: transaction log as source of truth.',
          '<strong>Cache Tier:</strong> No distributed transactions with cache. Cache updates: eventual consistency. Saga completion: invalidate cache. TCC: cache reservation during Try phase.',
          '<strong>Message Queue Tier:</strong> Saga: events drive next steps. Kafka: transactional producer (exactly-once). Outbox pattern: DB + message atomicity via CDC. TCC: async Confirm/Cancel via queue.',
          '<strong>Load Balancer Tier:</strong> Transaction affinity: route all saga steps to same region (for latency). Or global: route to nearest, handle cross-region in saga logic.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Distributed transaction pattern selection:',
        table: {
          headers: ['Scenario', 'Recommended Pattern', 'Latency Budget', 'Complexity', 'Example'],
          rows: [
            ['Bank transfer (2 accounts)', '2PC', '< 100 ms', 'Low', 'Inter-bank transfer'],
            ['E-commerce checkout', 'Saga', '< 1 s', 'Medium', 'Amazon checkout'],
            ['Flash sale (inventory)', 'TCC', '< 200 ms', 'High', 'Alibaba Double 11'],
            ['Hotel booking', 'Saga (orchestration)', '< 5 s', 'Medium', 'Booking.com'],
            ['Ride sharing match', 'Saga (choreography)', '< 2 s', 'Medium', 'Uber ride request'],
            ['Social media actions', 'Eventual consistency', '< 100 ms', 'Low', 'Like, share, comment'],
            ['Report generation', 'Eventual consistency', 'Minutes', 'Low', 'Analytics dashboard'],
            ['Inventory sync', 'Saga', '< 5 s', 'Medium', 'Multi-warehouse sync']
          ]
        }
      }
    ],
    'eventual-consistency': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Eventual consistency metrics from real-world systems (DynamoDB, Cassandra, DNS, CDN):',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Replication Lag', '1 ms–1 s', '100 ms–10 s', 'Async replication delay'],
            ['Eventual Consistency Window', '1 s–1 min', '1 min–1 hour', 'Time until all replicas converge'],
            ['Read-Your-Write Consistency', '1–10 ms', '1–100 ms', 'DynamoDB: configurable per request'],
            ['Monotonic Read Latency', '1–5 ms', '1–10 ms', 'Guarantee: reads see increasing writes'],
            ['Stale Read Probability', '1–10%', '10–50%', 'Depends on write rate and replication lag'],
            ['Conflict Resolution Time', '1–10 ms', '1–100 ms', 'Last-write-wins: fast; CRDT: depends'],
            ['Anti-Entropy Repair Rate', '1–10 MB/s', '100 MB/s–1 GB/s', 'Cassandra: background repair'],
            ['Gossip Protocol Interval', '1 s', '100 ms–1 s', 'Cassandra: 1 s gossip interval'],
            ['Vector Clock Size', '100 bytes–1 KB', '1–10 KB', 'Per-replica entry; grows with replicas'],
            ['Eventual Consistency Throughput', '10K–100K ops/s', '1M–10M ops/s', 'Cassandra: 1M+ writes/s per node']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Eventual consistency behavior under load:',
        table: {
          headers: ['Load Factor', 'Write Latency', 'Read Latency', 'Consistency Window', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–2 ms', '1–2 ms', '1 s', 'Fast reads/writes; quick convergence'],
            ['2× Load', '1–2 ms', '1–2 ms', '1–5 s', 'Replication lag increases slightly'],
            ['5× Load', '2–5 ms', '1–2 ms', '5–30 s', 'Write replication backpressure'],
            ['10× Load', '5–10 ms', '1–2 ms', '30 s–5 min', 'Significant lag; stale reads likely'],
            ['Network Partition', '1–2 ms (local)', '1–2 ms (local)', 'Until partition heals', 'Divergent replicas; conflict resolution needed'],
            ['Partition Recovery', 'N/A', 'N/A', '1 min–1 hour', 'Anti-entropy repair; read repair']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Eventual consistency adoption from startup to hyperscale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Strong consistency everywhere. Single database. No need for eventual consistency.',
          '<strong>Stage 2: 1K–10K users</strong> — First read replica. Async replication. 1–5 second lag acceptable. Some stale reads in analytics.',
          '<strong>Stage 3: 10K–100K users</strong> — Multi-region replication. 1–10 second lag. Read-your-writes via session stickiness. CDN for static assets (minutes of staleness).',
          '<strong>Stage 4: 100K–1M users</strong> — Cassandra/DynamoDB for high-write workloads. Tunable consistency per query. Conflict resolution: last-write-wins.',
          '<strong>Stage 5: 1M–10M users</strong> — CRDTs for collaborative editing (Google Docs). Vector clocks for ordering. Active-active multi-region. Conflict resolution: business logic.',
          '<strong>Stage 6: 10M+ users</strong> — Eventual consistency as default. Strong consistency only where legally required (payments, healthcare). Calvin-based systems for hybrid approach.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Eventual consistency per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> Design for idempotency and retries. Handle stale reads gracefully (show "updating..." UI). Version vectors for conflict detection. CQRS: separate read/write models.',
          '<strong>Database Tier:</strong> Read replicas: async replication (1 s–1 min lag). Multi-master: conflict resolution needed. Cassandra: tunable consistency. DynamoDB: eventual by default, strong reads optional.',
          '<strong>Cache Tier:</strong> Cache is inherently eventually consistent. TTL: 1 min–1 hour. Cache invalidation: async via message queue. Stale cache acceptable for most reads.',
          '<strong>Message Queue Tier:</strong> Kafka: consumers may be behind by seconds–minutes. At-least-once delivery: duplicates possible. Exactly-once: stronger but slower.',
          '<strong>Load Balancer Tier:</strong> DNS: 1–24 hour TTL (eventual propagation). CDN: minutes–hours cache TTL. Anycast: nearest POP may have stale data.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Eventual consistency vs strong consistency:',
        table: {
          headers: ['Scenario', 'Consistency Model', 'Acceptable Lag', 'Conflict Resolution', 'Example'],
          rows: [
            ['User profile read', 'Eventual', '1–10 s', 'Last-write-wins', 'Facebook profile'],
            ['News feed', 'Eventual', '1–60 s', 'None (append-only)', 'Twitter timeline'],
            ['Search index', 'Eventual', '1 min–1 hour', 'Re-index on change', 'Elasticsearch'],
            ['Shopping cart', 'Read-your-writes', '< 1 s', 'Session-based', 'Amazon cart'],
            ['Inventory count', 'Eventual', '1–10 s', 'Reservation + overbooking', 'E-commerce stock'],
            ['Bank balance', 'Strong', '0', '2PC or linearizable', 'Account balance'],
            ['Medical records', 'Strong', '0', 'Mandatory audit', 'Hospital EMR'],
            ['Real-time collaboration', 'CRDT', '< 100 ms', 'Merge function', 'Google Docs']
          ]
        }
      }
    ],
    'cap-theorem': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'CAP theorem trade-offs with concrete system metrics:',
        table: {
          headers: ['Property', 'CP Systems', 'AP Systems', 'Notes'],
          rows: [
            ['Consistency Latency', '10–100 ms', '1–2 ms', 'CP: consensus overhead; AP: no coordination'],
            ['Availability (partition)', 'Unavailable', '100% available', 'CP: sacrifice availability; AP: sacrifice consistency'],
            ['Partition Recovery Time', '1–10 s', '1 ms–1 s', 'CP: state reconciliation; AP: anti-entropy'],
            ['Max Throughput', '1K–100K ops/s', '100K–1M+ ops/s', 'AP: no coordination = higher throughput'],
            ['Data Divergence Risk', '0%', '0.1–10%', 'AP: temporary inconsistency during partition'],
            ['Consensus Messages', '2N–4N per operation', '0–N', 'CP: Paxos/Raft overhead'],
            ['Leader Election Time', '100 ms–5 s', 'N/A', 'CP: leader-based systems need election'],
            ['Network Partitions/Year', '1–10', '1–10', 'Same for both; response differs'],
            ['Mean Time to Repair', '1–10 minutes', '1–10 minutes', 'Network partition duration'],
            ['Operational Complexity', 'High', 'Medium', 'CP: consensus tuning; AP: conflict resolution']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'CP vs AP system behavior under network partition:',
        table: {
          headers: ['Load Factor', 'CP System', 'AP System', 'What It Means'],
          rows: [
            ['1× (No partition)', 'Normal latency', 'Normal latency', 'Both perform well'],
            ['2× Load + partition', 'Unavailable or slow', 'Normal + stale reads', 'CP blocks; AP serves stale data'],
            ['5× Load + partition', 'Unavailable', 'Normal + conflicts', 'AP handles load; conflicts increase'],
            ['10× Load + partition', 'Unavailable', 'Degraded + many conflicts', 'AP: conflict resolution bottleneck'],
            ['Partition heals', '1–10 s recovery', '1 s–1 min convergence', 'CP: state sync; AP: anti-entropy'],
            ['Normal after heal', 'Normal', 'Normal', 'Both return to steady state']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'CAP trade-off evolution in system design:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single node = all of CAP. No partitions possible. PostgreSQL/MySQL.',
          '<strong>Stage 2: 1K–10K users</strong> — First replication: choose AP (MySQL async replication) or CP (PostgreSQL synchronous). Most choose AP for availability.',
          '<strong>Stage 3: 10K–100K users</strong> — Multi-region: AP with conflict resolution (Cassandra). Or CP with consensus (etcd for config, ZooKeeper for coordination).',
          '<strong>Stage 4: 100K–1M users</strong> — Hybrid: CP for metadata (ZooKeeper), AP for data (Cassandra). PACELC theorem: latency vs consistency trade-off.',
          '<strong>Stage 5: 1M–10M users</strong> — Fine-grained CAP: per-request consistency. DynamoDB: consistent reads optional. Spanner: external consistency (CP) with global scale.',
          '<strong>Stage 6: 10M+ users</strong> — CAP-aware design: default AP, opt-in CP for critical operations. CALM theorem: consistency without coordination for monotonic programs. CRDTs for AP collaboration.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'CAP choices per infrastructure component:',
        list: [
          '<strong>Application Tier:</strong> Design for AP by default. Use sagas for distributed consistency. CP only for critical operations (payments, inventory). Idempotency makes AP safer.',
          '<strong>Database Tier:</strong> CP: PostgreSQL synchronous replication, Spanner, CockroachDB. AP: Cassandra, DynamoDB, Riak, Couchbase. Hybrid: MongoDB (configurable).',
          '<strong>Cache Tier:</strong> Inherently AP. No consistency guarantees. Design application to tolerate cache staleness. Redis: AP with optional RedLock for CP-like locking.',
          '<strong>Message Queue Tier:</strong> Kafka: AP by default (at-least-once). CP option: transactional producer (exactly-once). RabbitMQ: AP with publisher confirms.',
          '<strong>Load Balancer Tier:</strong> DNS: AP (eventual propagation). Service discovery: CP (Consul, etcd with Raft). AnyCast: AP (nearest POP may differ).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'System selection by CAP priority:',
        table: {
          headers: ['System Type', 'CAP Choice', 'Technology', 'When to Use', 'Example'],
          rows: [
            ['Financial ledger', 'CP', 'Spanner, CockroachDB', 'Cannot tolerate inconsistency', 'Bank transactions'],
            ['User session store', 'AP', 'Redis, Memcached', 'Availability > consistency', 'Web session cache'],
            ['Product catalog', 'AP', 'DynamoDB, Cassandra', 'High read throughput, stale OK', 'Amazon product search'],
            ['Configuration store', 'CP', 'etcd, ZooKeeper', 'Consistency critical for cluster', 'Kubernetes config'],
            ['Real-time analytics', 'AP', 'ClickHouse, Druid', 'High ingestion, approximate OK', 'Metrics dashboard'],
            ['Shopping cart', 'AP + session', 'DynamoDB + sticky', 'Read-your-writes via routing', 'Amazon cart'],
            ['Social graph', 'AP', 'Neo4j, Cassandra', 'Eventual consistency acceptable', 'Facebook friends'],
            ['Distributed lock', 'CP', 'Redis RedLock, ZooKeeper', 'Must be consistent', 'Leader election']
          ]
        }
      }
    ]
  }
};
