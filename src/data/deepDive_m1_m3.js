export const deepDive_m1_m3 = {
  module1: {
    'message-queues': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Message queues are the backbone of async decoupling. Understanding throughput, latency, and storage limits is critical for sizing brokers and consumer groups. Use these benchmarks to estimate capacity and avoid bottlenecks before they happen.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Throughput (RabbitMQ)', '10K-20K msgs/sec', '50K-100K msgs/sec', 'Clustered with mirrored queues'],
            ['Throughput (Kafka)', '100K-500K msgs/sec', '1M+ msgs/sec per cluster', 'LinkedIn benchmarks; depends on partition count'],
            ['Throughput (AWS SQS)', '300 msgs/sec (FIFO)', 'Unlimited burst (standard)', 'FIFO capped; standard scales horizontally'],
            ['Producer Latency (p99)', '1-5 ms', '10-50 ms', 'Sync replication adds latency'],
            ['Consumer Lag Tolerance', 'Seconds', 'Minutes to hours', 'Depends on SLA; monitor with alerts'],
            ['Message Size Limit', '256 KB (SQS)', '1 MB (Kafka, RabbitMQ)', 'Larger messages use S3/blob offloading'],
            ['Queue Depth (healthy)', '< 1,000 msgs', '< 100,000 msgs', 'Deeper queues signal consumer lag'],
            ['Disk per Million Msgs', '~1 GB', '~500 MB (Kafka with compression)', 'Kafka LZ4 compression reduces footprint'],
            ['Fan-out Ratio', '1:3 producers:consumers', '1:10+', 'Pub-sub scales fan-out better'],
            ['Operational Cost', '$500/mo (self-hosted)', '$5K-20K/mo (managed)', 'Confluent Cloud, AWS MSK pricing']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'As load increases, message queues exhibit predictable degradation: latency grows linearly at first, then exponentially once broker I/O or consumer processing becomes saturated. Monitoring consumer lag is the key early warning signal.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '2-5 ms', 'Smooth operation; consumers keep up', 'Healthy system with headroom'],
            ['2x', '5-15 ms', 'Minor latency increase; queue depth stable', 'Normal scaling; add partitions if Kafka'],
            ['5x', '20-100 ms', 'Queue depth grows; consumer lag appears', 'Consumers bottlenecked; scale horizontally'],
            ['8x', '200 ms - 1 s', 'Significant lag; retries and redeliveries spike', 'Broker I/O saturated; risk of disk full'],
            ['10x', '1-10 s+', 'Message timeouts; dead-letter queue fills', 'Critical: add consumers or partition now'],
            ['>10x (Spike)', 'Unbounded', 'Producer backpressure or drops', 'Circuit breaker needed; queue as shock absorber']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'See how message queues evolve from a simple task queue to a massive event streaming backbone used by companies like LinkedIn and Netflix.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — A single in-memory queue (e.g., Bull with Redis) handles background jobs like sending welcome emails. No persistence needed. Bottleneck: single Redis instance memory.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Switch to RabbitMQ with persistent queues. Producers decouple from email/SMS workers. Bottleneck: single broker CPU. Add mirrored queues for HA.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Migrate to Apache Kafka with topic partitioning. Each partition handles ~10K msgs/sec. Consumer groups enable parallel processing. Bottleneck: partition count; too few partitions limit parallelism.',
          '<strong>Stage 4: Large Scale (1M-10M users)</strong> — Kafka clusters with 50-200 brokers. MirrorMaker for cross-region replication. Schema Registry enforces Avro schemas. Bottleneck: network bandwidth between brokers; disk I/O on leaders.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., LinkedIn)</strong> — Kafka handles trillions of messages per day. Tiered Storage offloads old segments to S3. Consumers use exactly-once semantics with transactional producers. Bottleneck: consumer rebalancing during broker changes.',
          '<strong>Stage 6: Global Scale (e.g., Uber)</strong> — Multi-cluster Kafka with Uber\'s uReplicator for geo-replication. Dead-letter topics with automated replay. Bottleneck: cross-DC latency; solved with local clusters and aggregation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Message queues affect every tier differently. Here is how to apply them at each layer with specific strategies and numbers.',
        list: [
          '<strong>Application Tier:</strong> Producers should batch messages (e.g., 100-500 msgs/batch) to reduce network round trips. Use async producers to avoid blocking request threads. At Netflix, producers use a buffering layer that flushes every 100ms or 1MB.',
          '<strong>Database Tier:</strong> Consumers should batch database writes (e.g., 100 rows per INSERT) to reduce lock contention. Use idempotent consumers to handle duplicate deliveries safely. MySQL can handle ~5K writes/sec; batching increases this to ~50K/sec.',
          '<strong>Cache Tier:</strong> Use message queues for cache invalidation rather than direct deletion. Redis Streams (not Pub/Sub) provides persistence for invalidation events. At Twitter, cache invalidation events flow through Kafka to 1000s of cache nodes.',
          '<strong>Message Queue Tier:</strong> Monitor consumer lag with tools like Kafka\'s Consumer Group Lag exporter or Burrow. Alert when lag exceeds 10,000 messages or 30 seconds. Scale consumers before lag grows unbounded.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing the right message queue technology depends on throughput needs, ordering guarantees, and operational maturity.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Task distribution with complex routing', 'RabbitMQ', 'AMQP exchanges enable flexible routing', 'Lower throughput than Kafka'],
            ['High-throughput event streaming (1M+ msgs/s)', 'Apache Kafka', 'Partitioned log scales horizontally', 'Higher operational complexity'],
            ['AWS-native serverless architecture', 'AWS SQS + SNS', 'Fully managed; zero infrastructure', 'FIFO queues limited to 300 msg/s'],
            ['Real-time notifications, no persistence needed', 'Redis Pub/Sub', '100K+ msg/s; sub-millisecond latency', 'Messages lost on restart'],
            ['Need exactly-once semantics', 'Kafka with idempotent producers', 'Transactional IDs + deduplication', 'Higher latency; more config'],
            ['Multi-cloud or on-premise flexibility', 'Apache Pulsar', 'Tiered storage; geo-replication built-in', 'Smaller community than Kafka'],
            ['Simple background jobs in Node.js', 'Bull/BullMQ (Redis)', 'Easy setup; job scheduling built-in', 'Limited to single Redis memory']
          ]
        }
      }
    ],
    'pub-sub': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Pub-sub systems excel at fan-out but require careful capacity planning. Track fan-out ratio, subscriber lag, and broker memory to prevent cascading slowdowns.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Publish Latency (p99)', '1-3 ms', '5-20 ms', 'Increases with subscriber count'],
            ['Fan-out Ratio', '1:10 subscribers', '1:1000+ (Google Pub/Sub)', 'Each subscriber gets a copy'],
            ['Throughput per Topic (Kafka)', '100K-500K msgs/sec', '1M+ msgs/sec', 'Depends on partitions and consumers'],
            ['Subscriber Lag (healthy)', '< 1 second', '< 5 minutes', 'Alert if > 10 min for critical topics'],
            ['Memory per Subscriber', '1-10 MB', '100 MB+ (with replay buffer)', 'Retain buffer for slow consumers'],
            ['Message Retention', '7 days (Kafka default)', 'Indefinite (with tiered storage)', 'Google Pub/Sub: 31 days max'],
            ['Delivery Guarantee', 'At-least-once', 'Exactly-once (with dedup)', 'Most systems default to at-least-once'],
            ['Filter Efficiency', '50% match rate', '90%+ with good key design', 'Poor filtering wastes bandwidth'],
            ['Cost per Million Messages', '$0.05 (SNS)', '$0.40 (Google Pub/Sub)', 'Varies by region and retention'],
            ['Max Subscribers per Topic', '100 (SNS)', 'Unlimited (Kafka, Pulsar)', 'AWS SNS has soft limits']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Pub-sub degradation is often subscriber-driven. A single slow subscriber can backpressure the entire topic if not isolated. Monitor per-subscriber lag religiously.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1-3 ms publish', 'All subscribers keep up', 'Optimal fan-out performance'],
            ['2x', '3-8 ms publish', 'Minor lag in slowest subscriber', 'Normal; isolated with separate consumer groups'],
            ['5x', '10-50 ms publish', 'Some subscribers lagging; broker memory grows', 'Add consumers or shard topics'],
            ['8x', '50-200 ms', 'Backpressure on publisher; message drops possible', 'Apply publisher rate limiting'],
            ['10x', '200 ms - 2 s', 'Broker OOM risk; subscribers far behind', 'Critical: isolate slow subscribers immediately'],
            ['>10x (Spike)', 'Publish rejected', 'Circuit breaker trips or broker throttles', 'Use buffering and backoff']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Follow how pub-sub grows from a simple notification system to a global real-time data distribution network.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Redis Pub/Sub broadcasts login events to a WebSocket server. No persistence; simple and fast. Bottleneck: single Redis instance; messages lost on disconnect.',
          '<strong>Stage 2: Growing (1K-50K users)</strong> — Apache Kafka with 3-6 brokers. Topics for user events, analytics, and notifications. Consumer groups isolate slow subscribers. Bottleneck: topic partitioning; too few partitions limit throughput.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Separate topics by event type and priority. High-priority events (payments) get dedicated partitions. Low-priority (analytics) share partitions. Bottleneck: consumer rebalancing during deployments causes lag spikes.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Spotify)</strong> — Spotify uses Kafka to fan out playlist updates to millions of clients. Event schemas enforced with Confluent Schema Registry. Bottleneck: schema evolution breaks old consumers; use backward compatibility.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., LinkedIn)</strong> — LinkedIn\'s Kafka handles 7 trillion messages/day. Each user action fans out to 10+ downstream systems. Bottleneck: cross-cluster replication latency; solved with MirrorMaker 2.',
          '<strong>Stage 6: Global Scale (e.g., Google Pub/Sub)</strong> — Global topics with automatic geo-routing. Push subscriptions for serverless consumers. Bottleneck: push endpoint availability; solved with retries and dead-letter topics.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Pub-sub patterns require different strategies at each system tier to handle fan-out efficiently.',
        list: [
          '<strong>Application Tier:</strong> Publishers should fire-and-forget with acknowledgment disabled for non-critical events. For critical events, use idempotent publishers with UUIDs. At Uber, publishers batch 500 events per request to Pub/Sub.',
          '<strong>Database Tier:</strong> Subscribers that write to databases should batch inserts. A single event fanning out to 10 subscribers could generate 10 database writes; use CQRS to separate read and write paths.',
          '<strong>Cache Tier:</strong> Use pub-sub for cache warming. When a product updates, publish to a topic; cache nodes subscribe and warm their local caches. Amazon uses this pattern for product catalog updates.',
          '<strong>Message Queue Tier:</strong> Kafka\'s consumer group model isolates subscribers. Each group maintains its own offset. Slow groups do not affect fast groups. Use Kafka\'s partition assignment strategy (StickyAssignor) to minimize rebalancing.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Pub-sub vs direct messaging vs polling — use this matrix to choose the right pattern.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['One-to-many broadcast (e.g., stock ticker)', 'Pub-Sub (Kafka/Pulsar)', 'Natural fan-out; each subscriber independent', 'Broker must handle N copies of each message'],
            ['One-to-one task distribution', 'Message Queue (RabbitMQ/SQS)', 'Load balancing across workers', 'No broadcast capability'],
            ['Occasional events; low volume', 'Polling with cursor', 'Simpler than managing subscriptions', 'Higher latency; wasted polls'],
            ['Real-time to browsers/mobile', 'WebSockets + Pub-Sub backend', 'Low latency push to clients', 'Complex connection management'],
            ['Ordered event log for replay', 'Kafka with partition keys', 'Immutable log; replay from any offset', 'Higher storage cost'],
            ['Multi-tenant SaaS with per-tenant isolation', 'Pulsar with namespaces', 'Built-in tenant isolation and quotas', 'Smaller ecosystem than Kafka'],
            ['Strict exactly-once with ordering', 'Kafka transactions + partition keys', 'Atomic commit across producer and consumer', 'Slower; more complex error handling']
          ]
        }
      }
    ],
    'request-response': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Request-response is the most common pattern. These benchmarks help you estimate when to add load balancers, connection pools, and caching.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['RPS per Server (Node.js)', '1K-5K RPS', '10K-20K RPS', 'With clustering; CPU-bound tasks lower this'],
            ['RPS per Server (Java/Spring)', '5K-20K RPS', '50K-100K RPS', 'Netty-based async can push higher'],
            ['RPS per Server (Go)', '10K-50K RPS', '100K+ RPS', 'Goroutines and efficient runtime'],
            ['Latency (p50)', '5-20 ms', '1-5 ms', 'Within same datacenter'],
            ['Latency (p99)', '50-200 ms', '10-50 ms', 'With caching and optimization'],
            ['Connection Pool Size', '10-50 per instance', '100-500', 'Too large wastes memory; too small starves'],
            ['HTTP Keep-Alive Duration', '5-60 seconds', '5 minutes', 'Balance between reuse and stale connections'],
            ['TLS Handshake Overhead', '1-2 RTT (~50-100ms)', '0-RTT (TLS 1.3 with early data)', 'Session resumption reduces this'],
            ['Payload Size (typical)', '1-10 KB', '100 KB-1 MB', 'Large payloads need streaming'],
            ['Timeout Budget', '500 ms - 2 s', '100-500 ms', 'Break down across service calls']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Request-response systems degrade when threads, connections, or downstream services saturate. The degradation is often sudden due to thread pool exhaustion.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '10-50 ms', 'All threads idle; connections reused', 'Healthy with low CPU usage'],
            ['2x', '50-100 ms', 'Thread pools filling; connection churn starts', 'Add instances or optimize handlers'],
            ['5x', '100-500 ms', 'Thread pool exhaustion; requests queued', 'Queue depth grows; latency spikes'],
            ['8x', '500 ms - 2 s', 'Rejected connections; timeouts begin', 'Circuit breaker should trip now'],
            ['10x', '2-10 s', 'Most requests timeout; cascading failures', 'Critical: shed load or scale out immediately'],
            ['>10x (Spike)', '100% error rate', 'Service unavailable; thread death spiral', 'Bulkhead and rate limit to survive']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'See how a simple REST API evolves from a single server to a globally distributed service mesh.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Single Node.js/Express server. SQLite or local Postgres. No load balancer. Bottleneck: single-core event loop blocks on CPU tasks.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Add Nginx reverse proxy with upstream load balancing. Connection pooling to Postgres (10-20 connections). Bottleneck: database connection limit; add PgBouncer.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Horizontal scaling with 10-50 app servers behind ALB. Redis for session storage and caching. API Gateway for rate limiting. Bottleneck: session affinity; move to JWT stateless tokens.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Shopify)</strong> — Shopify\'s Ruby monolith handles millions of merchants with request coalescing and edge caching. GraphQL query complexity limits prevent abuse. Bottleneck: database write throughput; shard by shop ID.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Netflix)</strong> — Netflix uses Zuul API Gateway with dynamic routing. Hystrix circuit breakers isolate failing services. Ribbon client-side load balancing. Bottleneck: cross-region latency; solved with local caches and EVCache.',
          '<strong>Stage 6: Global Scale (e.g., Google)</strong> — Global load balancing with Anycast. gRPC for internal services with protocol buffers. B4 SDN network optimizes inter-datacenter routes. Bottleneck: none at request-response layer; moved to data locality.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Request-response optimizations vary dramatically by tier.',
        list: [
          '<strong>Application Tier:</strong> Use async/await to free threads while waiting for I/O. In Java, use CompletableFuture or reactive WebFlux. Go\'s goroutines handle 100K+ concurrent requests per server. Implement request coalescing for identical queries.',
          '<strong>Database Tier:</strong> Use prepared statements and connection pooling. Postgres can handle ~10K connections total; use PgBouncer to multiplex. Add read replicas for read-heavy workloads. MySQL read replicas serve ~5K reads/sec each.',
          '<strong>Cache Tier:</strong> Cache responses at the API Gateway layer. Varnish or Nginx FastCGI cache can serve 100K+ RPS with sub-millisecond latency. Cache TTL should match data freshness requirements.',
          '<strong>Message Queue Tier:</strong> For long-running requests, return 202 Accepted and use a message queue for background processing. Poll for status or use webhooks for completion. This converts sync to async when needed.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use sync request-response vs async alternatives.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Simple CRUD operations', 'REST API (request-response)', 'Universal; easy to debug', 'Tight coupling; blocking'],
            ['Internal microservices', 'gRPC with HTTP/2', 'Binary protocol; multiplexed streams', 'Less human-readable than REST'],
            ['Mobile APIs with poor networks', 'GraphQL with persisted queries', 'Reduce payload size; single request', 'Server complexity increases'],
            ['Long-running operations (> 2s)', 'Async job with polling/webhook', 'Free up client connection', 'Client must handle async pattern'],
            ['Real-time bidirectional', 'WebSockets over request-response', 'Full duplex; server push', 'Connection state management'],
            ['Cross-language services', 'REST with OpenAPI', 'Language agnostic; tooling rich', 'Higher overhead than gRPC'],
            ['High-frequency internal calls', 'gRPC + protobuf + sidecar (Istio)', 'Efficient; mTLS built-in', 'Service mesh adds latency (~1-3ms)']
          ]
        }
      }
    ],
    'webhooks': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Webhooks are simple but dangerous at scale. These numbers help you plan for retry storms, signature verification overhead, and endpoint capacity.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Delivery Latency (p99)', '500 ms - 2 s', '5-30 s', 'Includes retry delays'],
            ['Webhook Payload Size', '1-10 KB', '100 KB-1 MB', 'Stripe caps at 1 MB; use refs for large data'],
            ['Endpoints per Account', '1-3', '10-50 (e.g., Zapier)', 'Each endpoint gets a full copy'],
            ['Retry Attempts', '3-5', '10-15', 'Exponential backoff: 1s, 2s, 4s...'],
            ['Signature Verification Time', '< 1 ms', '1-5 ms', 'HMAC-SHA256 per request'],
            ['Delivery Success Rate', '95%', '99.9% (with retries)', 'Monitor and alert on < 95%'],
            ['Webhook Throughput', '100-1K/min', '10K-100K/min', 'Stripe handles millions/day'],
            ['Endpoint Timeout', '5-10 s', '30 s (for heavy processing)', 'Shorter timeouts reduce queue backlog'],
            ['Storage for Failed Events', '7 days', '30 days', 'Dead-letter for manual replay'],
            ['Cost per Million Deliveries', '$50-200', '$500+ (with retries)', 'Compute + bandwidth + storage']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Webhook systems degrade when endpoints are slow or unavailable. Retry storms can overwhelm both the provider and the consumer.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '200-500 ms', 'Most deliveries succeed on first attempt', 'Healthy webhook system'],
            ['2x', '500 ms - 1 s', 'Some endpoints slow; retries start', 'Normal; monitor retry rate'],
            ['5x', '1-3 s', 'Retry queue grows; signature verification CPU spikes', 'Scale webhook workers horizontally'],
            ['8x', '3-10 s', 'Many endpoints timing out; retry storm begins', 'Implement circuit breaker per endpoint'],
            ['10x', '10-60 s', 'Queue depth unbounded; old events dropped', 'Critical: disable failing endpoints'],
            ['>10x (Spike)', 'Delivery halted', 'Provider throttles or pauses webhooks', 'Buffer events; notify customers']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Webhooks start simple but quickly become a delivery nightmare without proper infrastructure.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Synchronous HTTP POST from the main app thread. No retries; failures are logged. Bottleneck: blocks the request thread; slow endpoints stall the app.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Background job queue (e.g., Bull with Redis) handles deliveries. 3 retries with exponential backoff. Bottleneck: Redis memory for queued jobs; add TTL.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Dedicated webhook workers with consumer groups. Circuit breakers per endpoint (e.g., Opossum in Node.js). Idempotency keys prevent duplicates. Bottleneck: circuit breaker flapping during intermittent failures.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Stripe)</strong> — Stripe uses a dedicated delivery infrastructure with per-endpoint rate limits. Signature verification is batched where possible. Bottleneck: global event ordering; Stripe does not guarantee ordering across event types.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., GitHub)</strong> — GitHub delivers millions of webhooks daily. Webhook payloads are signed with HMAC-SHA256. IP allowlisting and SSL verification mandatory. Bottleneck: endpoint DDoS; solved with per-org rate limits.',
          '<strong>Stage 6: Global Scale</strong> — Regional webhook delivery clusters. Local queues for each region. Cross-region failover if a cluster goes down. Bottleneck: data residency requirements; solved with regional data partitioning.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Each tier in a webhook system has unique scaling considerations.',
        list: [
          '<strong>Application Tier:</strong> Never deliver webhooks synchronously. Always enqueue and return 200. Use a worker pool with concurrency limits per endpoint. At Shopify, webhook workers process 1000s of deliveries per second with per-shop rate limiting.',
          '<strong>Database Tier:</strong> Store webhook delivery status (pending, delivered, failed) in a database table or event log. Postgres can handle ~5K writes/sec; use batch inserts for status updates. Index by endpoint URL and status for fast retry queries.',
          '<strong>Cache Tier:</strong> Cache endpoint health status (circuit breaker state) in Redis. A failed endpoint should not be retried for 60 seconds. Redis SETEX with 60s TTL prevents unnecessary retries.',
          '<strong>Message Queue Tier:</strong> Use a priority queue for webhook retries. Failed deliveries get lower priority than new events. Dead-letter queue holds events that exhaust retries. At AWS, SQS with DLQ handles this natively.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Webhooks vs polling vs SSE for event delivery.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Customer exposes HTTPS endpoint', 'Webhooks', 'Push model; lowest latency', 'Requires consumer availability'],
            ['Consumer behind firewall/NAT', 'Polling with cursor', 'No inbound connections needed', 'Higher latency; wasted requests'],
            ['Real-time to browser', 'SSE or WebSockets', 'Server push over HTTP', 'Connection management'],
            ['Guaranteed ordered delivery', 'Polling with cursor + idempotency', 'Consumer controls ordering', 'More complex client logic'],
            ['High-volume, at-least-once', 'Message queue (SQS/Kafka)', 'Durable; replayable', 'Consumer must poll or subscribe'],
            ['Third-party integrations (Zapier)', 'Webhooks + retry + signature', 'Industry standard for SaaS', 'Operational burden on consumer'],
            ['Audit trail required', 'Event log (Kafka) + webhook', 'Immutable history; replayable', 'Higher infrastructure cost']
          ]
        }
      }
    ],
    'streaming': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Streaming systems (WebSockets, SSE) require estimating concurrent connections, memory per connection, and heartbeat overhead.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Concurrent Connections per Node', '10K-50K', '100K-500K (Go/C++)', 'Node.js ~10K; Go ~100K+'],
            ['Memory per Connection', '5-50 KB', '1-5 KB (optimized C++)', 'Includes buffers and state'],
            ['Heartbeat Interval', '30 s', '5-10 s (mobile)', 'Balance between accuracy and bandwidth'],
            ['Message Latency (p99)', '10-50 ms', '1-10 ms (same datacenter)', 'Network dominates'],
            ['Throughput per Connection', '1-10 msg/s', '100-1000 msg/s', 'Chat vs stock ticker'],
            ['Connection Setup Time', '1-3 RTT (~50-150ms)', '0-RTT (TLS 1.3)', 'WebSocket handshake adds overhead'],
            ['Reconnection Backoff', '1-30 s', 'Exponential up to 5 min', 'Prevents thundering herd'],
            ['Broker Messages/sec (Redis)', '100K+', '1M+ (clustered)', 'Pub/Sub per channel'],
            ['Fan-out per Message', '1:1 (direct)', '1:1000+ (broadcast)', 'Chat room vs live sports'],
            ['Cost per Million Connections', '$1K-5K', '$10K-50K', 'Infrastructure + bandwidth']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Streaming systems degrade when connections drop and reconnect simultaneously, or when message volume exceeds broker capacity.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '10-50 ms msg delivery', 'Connections stable; heartbeats clean', 'Optimal streaming performance'],
            ['2x', '50-100 ms', 'Minor connection churn; some reconnection', 'Normal during deployments'],
            ['5x', '100-500 ms', 'Heartbeat timeouts increase; broker CPU rises', 'Add broker shards or connection limits'],
            ['8x', '500 ms - 2 s', 'Reconnection storms after brief outage', 'Add jitter to reconnection backoff'],
            ['10x', '2-10 s', 'Broker memory exhaustion; messages dropped', 'Critical: shed connections or scale brokers'],
            ['>10x (Spike)', 'Mass disconnect', 'Clients cannot reconnect; service degraded', 'Use CDN edge for WebSocket termination']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple chat app to a global real-time data platform like Netflix or Slack.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Socket.io with single Node.js server. In-memory adapter. Rooms for chat channels. Bottleneck: single server limits connections to ~10K.',
          '<strong>Stage 2: Growing (1K-50K users)</strong> — Redis Pub/Sub adapter for Socket.io. Multiple Node.js servers behind ALB with sticky sessions. Bottleneck: sticky sessions complicate scaling; move to JWT-based auth.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Dedicated WebSocket layer with connection broker (e.g., NATS or custom). Stateless servers; auth via JWT on connection. Bottleneck: Redis Pub/Sub does not persist messages; use NATS Streaming or RabbitMQ.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Slack)</strong> — Slack\'s websocket infrastructure uses a custom connection broker. Channels are sharded across brokers. Presence updates are batched. Bottleneck: presence fan-out; solved with incremental updates.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Netflix)', 'Netflix uses SSE for push notifications to 200M+ subscribers. Edge caches terminate SSE connections close to users. Bottleneck: global event ordering not needed; per-region events suffice.',
          '<strong>Stage 6: Global Scale (e.g., Facebook Messenger)</strong> — Messenger uses MQTT over WebSockets for mobile. Custom broker infrastructure with billions of connections. Bottleneck: battery drain on mobile; solved with push notifications for inactive sessions.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Streaming requires careful resource management at every tier.',
        list: [
          '<strong>Application Tier:</strong> Use lightweight goroutines (Go) or async I/O (Node.js) to handle many concurrent connections. Avoid blocking operations in the connection handler. At Discord, Elixir\'s lightweight processes handle millions of connections.',
          '<strong>Database Tier:</strong> Do not write every message to the database synchronously. Buffer in memory and flush in batches. For chat, store messages in Cassandra (write-optimized) and read from Redis (hot messages).',
          '<strong>Cache Tier:</strong> Use Redis for session state and recent message history. Set TTL to match active room lifetime. For presence, use Redis SET with expiration. At WhatsApp, presence is stored in memory and synced across clusters.',
          '<strong>Message Queue Tier:</strong> Use a dedicated message broker for cross-server fan-out. NATS Streaming provides persistence and replay. Kafka is overkill for sub-second streaming but works for aggregated event logs.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'WebSockets vs SSE vs long-polling vs MQTT.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Browser bidirectional real-time', 'WebSockets', 'Full duplex; low latency', 'Complex reconnection logic'],
            ['Browser unidirectional push', 'SSE (Server-Sent Events)', 'Simple HTTP; auto-reconnect', 'No client-to-server push'],
            ['Mobile with intermittent connectivity', 'MQTT over WebSocket/TLS', 'Lightweight; QoS levels', 'Smaller ecosystem than HTTP'],
            ['Fallback for older browsers', 'Long-polling', 'Works everywhere', 'Higher latency; more server load'],
            ['Simple notifications to browser', 'SSE with EventSource API', 'Native browser support', 'Limited to text/event-stream'],
            ['Gaming or binary data', 'WebSockets with binary frames', 'Efficient binary transfer', 'More complex protocol handling'],
            ['Massive broadcast (1M+ subscribers)', 'CDN edge SSE or MQTT broker', 'Offload to edge; reduce origin load', 'Event ordering not guaranteed globally']
          ]
        }
      }
    ],
    'event-driven': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Event-driven architectures trade immediate consistency for scalability. These metrics quantify that trade-off.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Event Throughput (Kafka)', '100K-500K events/sec', '1M+ events/sec', 'Per cluster; add clusters for more'],
            ['Event Latency (end-to-end)', '10-100 ms', '1-5 ms (in-memory)', 'Includes serialization and network'],
            ['Projection Rebuild Time', 'Minutes', 'Hours (TB-scale logs)', 'Depends on event count and projector speed'],
            ['Consistency Window (CQRS)', '10-100 ms', '1-5 s (global)', 'Time for read model to catch up'],
            ['Schema Versions Supported', '5-10', 'Unlimited (with upcasters)', 'Backward compatibility required'],
            ['Event Store Growth', '1 GB/day', '1 TB/day (Uber)', 'Compaction and tiered storage help'],
            ['Saga Completion Time', '100 ms - 1 s', '5-30 s (with retries)', 'Compensating actions add time'],
            ['Consumer Group Rebalance', '1-3 s', '10-30 s (large groups)', 'Kafka CooperativeStickyAssignor improves this'],
            ['Event Size (typical)', '1-5 KB', '100 KB-1 MB', 'Avro/Protobuf compress well'],
            ['Dead Letter Events per Day', '< 0.1%', '< 0.01% (tuned systems)', 'Alert if > 1%']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Event-driven systems degrade when consumers fall behind or the event bus becomes a bottleneck.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '10-50 ms event processing', 'All consumers keep up; projections current', 'Healthy event-driven system'],
            ['2x', '50-100 ms', 'Minor lag in non-critical consumers', 'Normal; scale projectors if needed'],
            ['5x', '100-500 ms', 'Critical consumers lagging; consistency window grows', 'Add projector instances or partition more'],
            ['8x', '500 ms - 2 s', 'Event bus throughput saturated; backpressure', 'Throttle producers or scale brokers'],
            ['10x', '2-10 s', 'Projections severely stale; sagas timeout', 'Critical: disable non-critical consumers'],
            ['>10x (Spike)', 'Event loss or rejection', 'Broker cannot accept; producers fail', 'Use buffering and circuit breakers']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple event bus to a complex choreography/orchestration hybrid powering global platforms.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Simple in-memory event emitter. No persistence. Services listen for events locally. Bottleneck: no durability; events lost on restart.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Redis Pub/Sub or RabbitMQ for cross-service events. Events for user registration, order creation. Bottleneck: no ordering or replay; move to Kafka.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Kafka with Avro schemas and Schema Registry. Consumer groups for each service. Event sourcing for critical aggregates (e.g., order history). Bottleneck: schema evolution breaks consumers; enforce compatibility.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Netflix)</strong> — Netflix uses Kafka for all internal events (Keystone pipeline). Events flow to Hadoop, Elasticsearch, and real-time dashboards. Bottleneck: event volume overwhelms batch consumers; use separate streams for real-time and batch.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Uber)</strong> — Uber\'s event-driven platform handles ride lifecycle with sagas. Choreography for simple flows; orchestration for complex multi-step rides. Bottleneck: saga compensation correctness; extensive testing required.',
          '<strong>Stage 6: Global Scale (e.g., Amazon)</strong> — Amazon uses event-driven internally (e.g., SWF, Step Functions). EventBridge routes events across AWS services. Bottleneck: cross-region event consistency; solved with regional event buses and replication.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Event-driven patterns require different approaches at each tier.',
        list: [
          '<strong>Application Tier:</strong> Services should be stateless and idempotent. Emit events after database transaction commits (outbox pattern). At Shopify, the outbox table is polled by a background worker that publishes to Kafka.',
          '<strong>Database Tier:</strong> Use the outbox pattern to avoid dual writes (DB + event bus) without distributed transactions. The outbox table is local to the service database, ensuring atomicity. Projections read from the event log and write to read-optimized stores (Elasticsearch, DynamoDB).',
          '<strong>Cache Tier:</strong> Cache invalidation via events is the primary cache coherence strategy. When a product updates, emit ProductUpdated event; cache nodes consume and invalidate. At Amazon, DynamoDB Streams trigger Lambda for cache invalidation.',
          '<strong>Message Queue Tier:</strong> Kafka is the default for event logs. Use log compaction for key-based retention (keep latest value per key). At LinkedIn, Kafka topics are configured with compaction for user profile updates. Topic count should stay manageable (< 1000 per cluster).' ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choreography vs orchestration vs synchronous calls for distributed workflows.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Simple independent reactions', 'Choreography', 'Fully decoupled; no central controller', 'Hard to trace; implicit coupling'],
            ['Complex multi-step workflows', 'Orchestration (Saga)', 'Central visibility; easy to debug', 'Orchestrator is a bottleneck'],
            ['Need strong consistency', 'Synchronous 2PC', 'ACID across services', 'Blocking; poor availability'],
            ['Audit trail and replayability', 'Event Sourcing + Kafka', 'Immutable log; rebuild any view', 'Complex; storage intensive'],
            ['Fast failure recovery', 'Choreography with compensation', 'No single point of failure', 'Compensation logic is complex'],
            ['Mobile app backend', 'Event-driven with CQRS', 'Optimized read and write models', 'Eventual consistency in UI'],
            ['Financial transactions', 'Orchestrated Saga + idempotency', 'Compensating actions for rollback', 'Slower; requires careful design']
          ]
        }
      }
    ]
  },
  module2: {
    replication: [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Replication is the first scaling tool for read-heavy workloads. These numbers help you estimate lag, throughput improvement, and failover time.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Replication Lag (async)', '1-100 ms', '1-10 s (under load)', 'Monitor with heartbeat tables'],
            ['Replication Lag (sync)', '0 ms', '10-50 ms', 'Primary waits for replica ACK'],
            ['Read Scaling Factor', '2-5x', '10-20x', 'Depends on replica count and lag tolerance'],
            ['Failover Time (manual)', '1-5 minutes', 'N/A', 'Human-driven; error-prone'],
            ['Failover Time (automated)', '5-30 s', '1-5 s (with proxy)', 'Tools: Orchestrator, Patroni'],
            ['Write Throughput Impact (sync)', '-20% to -50%', '-80%', 'Every write waits for replicas'],
            ['Replica Count (typical)', '1-3', '5-10+', 'Diminishing returns after 5-7'],
            ['Network Bandwidth per Replica', '1-10 MB/s', '100 MB/s+', 'Depends on write volume'],
            ['Storage per Replica', 'Same as primary', 'Same', 'No compression benefit'],
            ['Replication Protocol', 'Binlog (MySQL)', 'WAL streaming (Postgres)', 'Logical vs physical replication']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Replication systems degrade when replicas cannot keep up or network bandwidth is exhausted.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1 ms lag', 'Replicas apply changes in real-time', 'Healthy replication'],
            ['2x', '10-50 ms lag', 'Replicas slightly behind; reads may be stale', 'Normal for async replication'],
            ['5x', '100 ms - 1 s lag', 'Replication thread CPU-saturated; lag grows', 'Add more replicas or optimize queries'],
            ['8x', '1-10 s lag', 'Significant staleness; some reads must go to primary', 'Consider sync for critical reads'],
            ['10x', '10-60 s lag', 'Replicas at risk of falling too far behind', 'Critical: investigate network or disk I/O'],
            ['>10x (Spike)', 'Replication stops', 'Replica cannot keep up; may need rebuild', 'Use parallel replication threads']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a single database to a globally distributed replication topology.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Single Postgres instance. No replication. Backups via pg_dump nightly. Bottleneck: no HA; downtime on failure.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Primary-replica async replication. Replica serves read queries. pg_basebackup for initial sync. Bottleneck: replication lag on replica during batch jobs.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Multiple replicas with read distribution. HAProxy or PgPool-II routes reads. Connection pooling via PgBouncer. Bottleneck: write throughput still limited to primary.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Twitter)</strong> — Twitter\'s MySQL sharding with per-shard replication. Each shard has a primary and multiple replicas. FlockDB (graph store) uses replication for read scaling. Bottleneck: cross-shard queries require aggregation.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Booking.com)</strong> — Booking.com runs thousands of MySQL replicas. Automated failover with Orchestrator. Delayed replicas for point-in-time recovery. Bottleneck: schema changes require rolling updates across all replicas.',
          '<strong>Stage 6: Global Scale (e.g., Amazon Aurora)</strong> — Aurora replicates WAL to 6 storage nodes across 3 AZs. Read replicas in other regions. Storage is separate from compute. Bottleneck: cross-region replication lag (~100ms); acceptable for reads.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Replication strategies differ by tier.',
        list: [
          '<strong>Application Tier:</strong> Use a database proxy (e.g., PgPool-II, ProxySQL) to route reads to replicas and writes to primary. Application should tolerate eventual consistency for reads. At GitHub, they use MySQL\'s ProxySQL with query rules to route SELECTs to replicas.',
          '<strong>Database Tier:</strong> Configure parallel replication threads (MySQL: slave_parallel_workers) to speed up replica apply rate. Postgres 16+ supports parallel apply for logical replication. Monitor lag with pg_stat_replication or SHOW SLAVE STATUS.',
          '<strong>Cache Tier:</strong> Replicated databases still benefit from caching. Cache the most frequently read data from replicas to reduce replica load. Redis can handle 100K+ reads/sec, offloading replicas significantly.',
          '<strong>Message Queue Tier:</strong> Use message queues for cache invalidation when replication lag causes stale cache entries. If a write happens on primary, invalidate cache before replica catches up to prevent reading stale data from cache.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use async vs sync replication, and when to shard instead.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Read-heavy, lag-tolerant workload', 'Async replication', 'Low write overhead; scales reads', 'Risk of stale data'],
            ['Financial transactions, strong consistency', 'Sync replication (semi-sync)', 'Guaranteed durability on replica', 'Higher write latency'],
            ['Write volume exceeds single node', 'Sharding + async replication', 'Distributes write load', 'Complex routing and cross-shard queries'],
            ['Global read access with local latency', 'Cross-region read replicas', 'Users query local replica', 'Replication lag across regions'],
            ['Point-in-time recovery needs', 'Delayed replica (1 hour lag)', 'Protects against accidental deletion', 'Replica is not current'],
            ['Minimal operational overhead', 'Managed DB (RDS, Cloud SQL)', 'Automated backups, failover, patching', 'Less control; higher cost'],
            ['Maximum availability (99.999%)', 'Multi-primary with conflict resolution', 'Write to any node', 'Complex conflict resolution logic']
          ]
        }
      }
    ],
    sharding: [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Sharding splits data horizontally. These metrics help you choose shard keys, estimate rebalancing cost, and plan capacity.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Shards per Cluster (typical)', '4-16', '100-1000+', 'Uber: 1000+ shards for Schemaless'],
            ['Data per Shard (healthy)', '100 GB - 1 TB', '1-5 TB', 'Depends on query patterns and hardware'],
            ['Rebalancing Time', 'Hours', 'Days (TB-scale)', 'Throttled to avoid production impact'],
            ['Cross-Shard Query Latency', '10-100 ms', '100 ms - 1 s', 'Requires scatter-gather'],
            ['Shard Key Cardinality (min)', '1,000', '1M+', 'Higher cardinality = better distribution'],
            ['Hot Shard Traffic Ratio', '1x (even)', '10x+ (skewed)', 'Monitor per-shard QPS'],
            ['Connections per Shard', '100-500', '1000+', 'PgBouncer multiplexes connections'],
            ['Write Throughput (per shard)', '1K-5K writes/sec', '10K-50K writes/sec', 'MySQL ~5K; ScyllaDB ~50K+'],
            ['Rebalancing Impact on Latency', '+10-50%', '+100% if unthrottled', 'Always throttle rebalancing'],
            ['Operational Complexity', 'Medium', 'Very High', 'Requires dedicated tooling and expertise']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Sharding distributes load until a hot shard or cross-shard query becomes the bottleneck.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1-5 ms', 'Even shard distribution; single-shard queries', 'Healthy sharded system'],
            ['2x', '5-10 ms', 'Some shards warming; minor latency increase', 'Normal; monitor per-shard QPS'],
            ['5x', '10-50 ms', 'Hot shard detected; one node overloaded', 'Reshard or split hot shard'],
            ['8x', '50-200 ms', 'Cross-shard queries becoming frequent', 'Redesign queries to avoid scatter-gather'],
            ['10x', '200 ms - 1 s', 'Rebalancing triggered; temporary slowdown', 'Plan rebalancing during low traffic'],
            ['>10x (Spike)', 'Hot shard fails', 'Single shard cannot handle load', 'Add sub-shards or cache heavily']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a single database to a massively sharded architecture.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Single database. No sharding. Vertical scaling (bigger instance) handles growth. Bottleneck: single instance CPU/memory limits.',
          '<strong>Stage 2: Growing (1K-100K users)</strong> — Application-level sharding by tenant ID. Each tenant gets a separate database. Simple but does not scale to millions of tenants. Bottleneck: connection count; too many databases.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Hash-based sharding on user_id. MongoDB or Vitess handles routing. 16-64 shards. Bottleneck: cross-shard queries (e.g., global search) require scatter-gather.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Instagram)</strong> — Instagram sharded Postgres by user_id. Each photo maps to a shard. Cross-shard operations (follower lists) are avoided by denormalizing. Bottleneck: resharding when users grow; consistent hashing helps.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Uber)</strong> — Uber\'s Schemaless uses hash sharding with thousands of shards. Each shard is a MySQL instance. Built-in resharding with double-write during migration. Bottleneck: schema changes across 1000+ shards; use online schema change tools.',
          '<strong>Stage 6: Global Scale (e.g., Cassandra)</strong> — Cassandra uses consistent hashing (vnode) across nodes. No explicit shards; nodes own token ranges. Automatic rebalancing on node add/remove. Bottleneck: tombstone accumulation; requires compaction tuning.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Sharding affects each tier differently.',
        list: [
          '<strong>Application Tier:</strong> Use a shard-aware ORM or query router. Vitess for MySQL; MongoDB drivers handle routing natively. Application should include shard key in every query. At Pinterest, they use a custom sharding library that pins users to shards.',
          '<strong>Database Tier:</strong> Each shard runs an independent database instance. Monitor per-shard QPS, disk usage, and replication lag. Pre-split chunks before adding load (MongoDB). Use range sharding for time-series data.',
          '<strong>Cache Tier:</strong> Cache per-shard to avoid cross-shard cache invalidation. Use consistent hashing for cache nodes so adding/removing cache nodes does not cause mass invalidation. Redis Cluster uses 16,384 hash slots.',
          '<strong>Message Queue Tier:</strong> Shard event streams by entity ID. Kafka partition key = shard key. This ensures all events for a given entity go to the same partition, maintaining ordering per entity.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Hash vs range vs directory-based sharding.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Even distribution is priority', 'Hash sharding', 'Good distribution for random keys', 'Range queries require scatter-gather'],
            ['Time-series data (logs, metrics)', 'Range sharding by time', 'Efficient time-range queries', 'Recent shards are hot'],
            ['Multi-tenant SaaS with per-tenant isolation', 'Directory-based sharding', 'Map tenant to shard; easy migration', 'Directory is a single point of lookup'],
            ['Need to add/remove shards dynamically', 'Consistent hashing', 'Minimal data movement', 'Slightly more complex routing'],
            ['Geo-distributed data', 'Geo sharding (by region)', 'Local writes and reads', 'Cross-region queries are expensive'],
            ['Small dataset, high query complexity', 'No sharding; replication instead', 'Avoid distributed query overhead', 'Write bottleneck remains'],
            ['Need global secondary indexes', 'Directory sharding + global index', 'Index spans shards', 'Index maintenance overhead']
          ]
        }
      }
    ],
    'consistent-hashing': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Consistent hashing minimizes reorganization when nodes change. These numbers quantify the benefits.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Virtual Nodes per Physical Node', '100-150', '200-500', 'More vnodes = better distribution'],
            ['Keys Remapped on Node Add (modulo)', '99%', '~1/K (K = node count)', 'Consistent hashing: only K/n keys move'],
            ['Keys Remapped on Node Add (consistent)', '1/K %', '~5-10%', 'Depends on vnode count and hash quality'],
            ['Hash Ring Lookup Time', 'O(log V)', 'O(log V)', 'V = virtual node count; binary search'],
            ['Standard Deviation of Load', '10-20%', '5-10%', 'With sufficient vnodes'],
            ['Replication Factor', '2-3', '5+', 'Higher = more availability, more storage'],
            ['Memory for Ring State', '1-10 MB', '100 MB+', 'Per client; scales with vnode count'],
            ['Hash Function Quality', 'MurmurHash3', 'xxHash, HighwayHash', 'Low collision rate; fast computation'],
            ['Node Failure Detection Time', '1-3 s', '< 1 s', 'Via gossip or centralized health checks'],
            ['Rebalance Throttle', '10-50 MB/s', '100 MB/s+', 'Limit to avoid impacting live traffic']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Consistent hashing distributes load well until hot keys or uneven node capacities skew distribution.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1-2 ms lookup', 'Even distribution across all nodes', 'Healthy consistent hash ring'],
            ['2x', '2-5 ms', 'Minor skew; some nodes slightly hotter', 'Normal; add vnodes if needed'],
            ['5x', '5-20 ms', 'Hot keys detected; single node overloaded', 'Add caching for hot keys'],
            ['8x', '20-100 ms', 'Node capacity differences cause imbalance', 'Weight nodes by capacity'],
            ['10x', '100 ms - 1 s', 'Multiple hot keys; cascading failures', 'Critical: shard hot keys further'],
            ['>10x (Spike)', 'Node failures', 'Hot nodes crash; keys remapped', 'Use replica promotion and backoff']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple modulo hash to a production-grade consistent hashing system.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Modulo hash: key % N. Simple but remaps everything when N changes. Bottleneck: any node addition causes cache storm.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Introduce consistent hashing with 100 vnodes per node. Client libraries (e.g., hashring in Node.js) handle routing. Bottleneck: initial distribution still uneven with few nodes.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Use Ketama algorithm (Memcached) or jump consistent hash. Replication factor 3. Node failures promote replica without full rebuild. Bottleneck: replica promotion time (~seconds).',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Discord)</strong> — Discord uses consistent hashing for routing WebSocket connections to guilds. Each guild maps to a node; vnodes smooth distribution. Bottleneck: guild size variance; large guilds need special handling.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Akamai CDN)</strong> — Akamai uses consistent hashing for cache server selection. Content maps to edge servers via hash of URL. Bottleneck: popular content creates hot servers; solved with replication and tiered caching.',
          '<strong>Stage 6: Global Scale (e.g., Amazon DynamoDB)</strong> — DynamoDB uses consistent hashing internally across partitions. Partitions split automatically when size exceeds 10 GB. Bottleneck: partition splitting causes brief latency spikes; handled transparently.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Consistent hashing applies differently at each tier.',
        list: [
          '<strong>Application Tier:</strong> Clients cache the hash ring locally and update it via gossip or config service. Etsy uses a client-side consistent hash ring for their memcached cluster, updating via ZooKeeper.',
          '<strong>Database Tier:</strong> Cassandra\'s vnode architecture places 256 vnodes per physical node by default. Token ranges are automatically rebalanced when nodes join/leave. DataStax recommends 128-256 vnodes for production.',
          '<strong>Cache Tier:</strong> Memcached uses Ketama consistent hashing. Adding a cache node only affects ~1/N of keys. Twemproxy (Twitter) implements consistent hashing with automatic node detection.',
          '<strong>Message Queue Tier:</strong> Kafka partition assignment uses a form of consistent hashing. When consumers join/leave, the StickyAssignor minimizes partition movement. Kafka Connect uses consistent hashing for task distribution.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Consistent hashing vs rendezvous hashing vs modulo hashing.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Frequent node additions/removals', 'Consistent hashing', 'Minimal key remapping', 'More memory for ring state'],
            ['Weighted node capacities', 'Rendezvous hashing', 'Natural support for weights', 'Slower O(N) lookup per key'],
            ['Simple static cluster', 'Modulo hashing', 'Fastest lookup; simplest code', 'Mass remapping on change'],
            ['Distributed caching (Memcached)', 'Ketama consistent hashing', 'Industry standard; proven at scale', 'Requires client library support'],
            ['Database partitioning (Cassandra)', 'Vnode consistent hashing', 'Automatic rebalancing', 'Higher overhead than static tokens'],
            ['Load balancing with session affinity', 'Consistent hashing on client IP', 'Same client always hits same server', 'Uneven if client IPs are skewed'],
            ['Minimizing coordination', 'Jump consistent hash', 'No ring state needed; pure function', 'Only works for integer keys']
          ]
        }
      }
    ],
    'event-sourcing': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Event sourcing replaces state storage with an immutable event log. These metrics quantify storage, replay, and consistency costs.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Events per Transaction', '1-3', '10-50', 'Complex sagas emit many events'],
            ['Event Store Growth', '1 GB/day', '1 TB/day (Uber, Netflix)', 'Compaction and tiered storage essential'],
            ['Snapshot Frequency', 'Every 100-1000 events', 'Every 10K+ events', 'Balance between replay speed and storage'],
            ['Replay Speed (no snapshot)', '1K-10K events/sec', '100K+ events/sec (in-memory)', 'Depends on event handler complexity'],
            ['Replay Speed (with snapshot)', '1M+ events/sec effective', 'Instant', 'Load snapshot + apply recent events'],
            ['Projection Lag', '10-100 ms', '1-5 s (global)', 'Time to update read models'],
            ['Event Size (JSON)', '1-5 KB', '100 KB+ (with blobs)', 'Avro/Protobuf reduce to ~20% of JSON'],
            ['Storage Overhead vs State', '3-10x', '10-100x', 'Every change stored, not just final state'],
            ['Schema Version Lifespan', 'Months', 'Years', 'Old schemas must remain readable'],
            ['Point-in-Time Recovery Window', '7 days', 'Years (with archive)', 'Depends on retention policy']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Event sourcing degrades when event volume overwhelms the store or projections cannot keep up.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1-2 ms append', 'Projections current; snapshots valid', 'Healthy event-sourced system'],
            ['2x', '2-5 ms append', 'Minor projection lag; acceptable', 'Normal; add projectors if needed'],
            ['5x', '5-20 ms append', 'Event store I/O saturates; projections lag', 'Scale event store horizontally'],
            ['8x', '20-100 ms', 'Snapshot creation falls behind; replay time grows', 'Increase snapshot frequency'],
            ['10x', '100 ms - 1 s', 'Projections severely stale; queries return old data', 'Critical: shed non-critical projections'],
            ['>10x (Spike)', 'Append rejected', 'Event store cannot accept writes', 'Use buffering and backpressure']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple audit log to a full event-sourced system powering complex domains.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Append-only audit table in Postgres. Events stored as JSONB. No projections; queries read current state. Bottleneck: table grows indefinitely; no compaction.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Separate event store (e.g., Event Store DB). Projectors build read models in MongoDB. Snapshots every 100 events. Bottleneck: projector single-threaded; lag grows.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Kafka as event store. Multiple projector instances in consumer groups. Schema Registry enforces Avro schemas. CQRS separates command and query paths. Bottleneck: consumer rebalancing causes projection lag spikes.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Walmart)</strong> — Walmart uses event sourcing for inventory management. Every stock movement is an event. Projections serve real-time availability. Bottleneck: high event cardinality; solved with event type partitioning.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Netflix)</strong> — Netflix\'s event-sourced systems handle user activity (play, pause, resume) as events. The event log is the source of truth; dashboards are projections. Bottleneck: event volume requires tiered storage (S3 for old events).',
          '<strong>Stage 6: Global Scale (e.g., AxonIQ)</strong> — Axon Framework provides event sourcing with distributed command buses. Event store replication across regions. Sagas handle long-running transactions. Bottleneck: saga compensation requires careful design and testing.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Event sourcing touches every tier.',
        list: [
          '<strong>Application Tier:</strong> Commands validate business rules and emit events. Never mutate state directly. Use the outbox pattern to atomically write to the database and emit to the event bus. At Shopify, the outbox pattern ensures events are not lost.',
          '<strong>Database Tier:</strong> The event store is append-only. Use a database optimized for sequential writes (Kafka, Event Store DB). For relational event stores, use table partitioning by event date. Index by aggregate ID for fast replay.',
          '<strong>Cache Tier:</strong> Projections can be cached aggressively because they are immutable once written. Use cache-aside for read models. Invalidation happens via new events, not direct deletes. At Pinterest, projection caches have 95%+ hit rates.',
          '<strong>Message Queue Tier:</strong> The event bus is the backbone. Kafka\'s log compaction keeps the latest event per key, reducing storage for state snapshots. Event streaming platforms (Confluent, Redpanda) provide managed event sourcing infrastructure.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Event sourcing vs traditional CRUD vs audit log.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Complex domain with state transitions', 'Event sourcing', 'Full audit trail; replayable', 'High complexity; steep learning curve'],
            ['Simple CRUD with occasional audit', 'CRUD + audit log table', 'Simpler; familiar pattern', 'Audit is separate; not replayable'],
            ['Need to rebuild read models', 'Event sourcing', 'Replay events to create new views', 'Storage cost is higher'],
            ['Financial transactions requiring compliance', 'Event sourcing', 'Immutable log satisfies auditors', 'Projection lag must be acceptable'],
            ['Small team, tight deadline', 'CRUD with caching', 'Faster to build and iterate', 'No audit trail; harder to debug'],
            ['Real-time analytics on mutations', 'Event sourcing + stream processing', 'Kafka + Flink for real-time projections', 'Complex pipeline to maintain'],
            ['Mobile app with offline sync', 'Event sourcing (local)', 'Local event log syncs on reconnect', 'Conflict resolution needed']
          ]
        }
      }
    ],
    cqrs: [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'CQRS separates read and write models. These metrics quantify the latency, consistency, and capacity trade-offs.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Write Latency (p99)', '5-20 ms', '1-5 ms (in-memory command bus)', 'Optimized for consistency'],
            ['Read Latency (p99)', '1-5 ms', '< 1 ms (cached)', 'Optimized for query patterns'],
            ['Consistency Window', '10-100 ms', '1-5 s (global replication)', 'Time before read model reflects write'],
            ['Read Model Rebuild Time', 'Minutes', 'Hours (TB-scale)', 'Depends on event history size'],
            ['Read:Write Ratio', '10:1', '100:1+ (e.g., Twitter)', 'CQRS shines with high read ratios'],
            ['Read Model Count', '2-5', '10-20+ per aggregate', 'Each query pattern gets a model'],
            ['Storage Overhead', '2x', '5-10x', 'Multiple read models + event store'],
            ['Projection Throughput', '1K-10K events/sec', '100K+ events/sec (Kafka)', 'Per projector instance'],
            ['Command Bus Throughput', '1K-5K commands/sec', '50K+ commands/sec', 'In-memory bus is faster'],
            ['Operational Complexity', 'High', 'Very High', 'Dual models require expertise']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'CQRS systems degrade when the read model cannot keep up with write volume or the command bus saturates.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', 'Reads: 1 ms; Writes: 10 ms', 'Read models current; commands processed', 'Healthy CQRS system'],
            ['2x', 'Reads: 1-2 ms; Writes: 10-20 ms', 'Minor projection lag; acceptable', 'Normal; monitor consistency window'],
            ['5x', 'Reads: 2-5 ms; Writes: 20-50 ms', 'Projection lag grows; some stale reads', 'Scale projectors horizontally'],
            ['8x', 'Reads: 5-20 ms; Writes: 50-200 ms', 'Command bus queuing; read models far behind', 'Add command handlers and projectors'],
            ['10x', 'Reads: 20-100 ms; Writes: 200 ms - 1 s', 'Consistency window unacceptable; user complaints', 'Critical: shed reads or accept staleness'],
            ['>10x (Spike)', 'Command rejected', 'Command bus cannot accept writes', 'Use backpressure and queues']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple database to a fully separated command and query architecture.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Single database handles reads and writes. No separation. Bottleneck: complex queries slow down writes.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Materialized views in same database. Views are refreshed on write. Bottleneck: view refresh blocks writes; eventual consistency not yet embraced.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Separate read database (Postgres replica) and write database (primary). Read models denormalized. Event streaming (Debezium) syncs primary to replica. Bottleneck: replication lag creates stale reads.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Twitter)</strong> — Twitter uses CQRS-like patterns: writes go to Cassandra (tweets), reads come from Redis timelines. Timeline is a read model built by fan-out workers. Bottleneck: fan-out for celebrities; solved by pull model for > 1M followers.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Amazon)</strong> — Amazon\s DynamoDB streams power CQRS. Writes go to DynamoDB; Lambda projectors update Elasticsearch for search. Each service team owns their read model. Bottleneck: Lambda cold starts cause projection lag; use provisioned concurrency.',
          '<strong>Stage 6: Global Scale (e.g., Event Store DB + projections)</strong> — Event Store DB persists commands as events. Projections in Elasticsearch, MongoDB, and custom stores serve different query patterns. Cross-region consistency window is ~1 second. Bottleneck: schema changes require rebuilding all projections.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'CQRS requires different optimization strategies at each tier.',
        list: [
          '<strong>Application Tier:</strong> Commands are handled by a dedicated command handler layer. Queries bypass commands and go directly to read models. At Microsoft, CQRS is used in Azure IoT with separate pipelines for device commands and telemetry queries.',
          '<strong>Database Tier:</strong> The write database is normalized for consistency. Read databases are denormalized for query speed. Use Elasticsearch for search read models, Redis for session read models, and TimescaleDB for time-series read models.',
          '<strong>Cache Tier:</strong> Read models can be cached aggressively. Because updates flow through the event bus, cache invalidation is event-driven. At Instagram, photo read models are cached in Memcached with event-driven invalidation.',
          '<strong>Message Queue Tier:</strong> The event bus connects writes to read models. Kafka\s log compaction ensures the latest state is always available for rebuilding read models. Debezium captures database changes and publishes to Kafka for projector consumption.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'CQRS vs single model vs read replicas.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['High read:write ratio (100:1)', 'CQRS', 'Read models optimized for queries', 'Complexity of dual models'],
            ['Simple CRUD, balanced load', 'Single model + caching', 'Simpler; faster to develop', 'Queries may slow writes'],
            ['Need multiple query patterns', 'CQRS with multiple projections', 'Each pattern gets optimal store', 'Storage overhead increases'],
            ['Strong consistency required on reads', 'Single model or sync replication', 'No consistency window', 'Write latency increases'],
            ['Event sourcing already in use', 'CQRS naturally', 'Events feed projections', 'Same complexity as event sourcing'],
            ['Small team, tight deadline', 'Read replicas', 'Quick win; simpler than CQRS', 'All queries same schema'],
            ['Search-heavy application', 'CQRS + Elasticsearch projection', 'Full-text search on read model', 'Eventually consistent search']
          ]
        }
      }
    ],
    wal: [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Write-Ahead Logs are fundamental to database durability. These metrics help you size WAL storage and tune checkpoint frequency.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['WAL Generation Rate', '10-100 MB/hour', '1-10 GB/hour', 'Depends on write volume'],
            ['Checkpoint Interval', '5-15 minutes', '1-5 minutes (high write)', 'Shorter = less recovery time, more I/O'],
            ['Recovery Time (crash)', '1-30 s', '1-5 min (TB WAL)', 'Depends on WAL size since last checkpoint'],
            ['WAL Segment Size', '16 MB (Postgres)', '1 GB (custom)', 'Larger segments reduce file count'],
            ['Flush Latency (fsync)', '1-5 ms (SSD)', '0.1-1 ms (NVMe)', 'HDD: 10-20 ms; use SSD for WAL'],
            ['WAL Buffers', '16 MB', '256 MB+', 'Larger buffers reduce fsync frequency'],
            ['Replication Lag (WAL shipping)', '1-100 ms', '1-10 s (network)', 'Streaming replication vs archive'],
            ['PITR Recovery Window', '7 days', 'Years (with archive)', 'Archive WAL to S3/GCS for long-term'],
            ['WAL Archive Storage', '1 GB/day', '100 GB/day', 'Compress with pg_basebackup'],
            ['Concurrent WAL Writers', '1', '1 (Postgres)', 'Single writer prevents contention']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'WAL performance degrades when fsync latency increases or checkpoints cannot keep up.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1-2 ms fsync', 'WAL flushes smoothly; checkpoints on schedule', 'Healthy WAL performance'],
            ['2x', '2-5 ms fsync', 'Minor checkpoint delay; buffers absorb spike', 'Normal; monitor checkpoint frequency'],
            ['5x', '5-20 ms fsync', 'Checkpoint cannot keep up; WAL grows', 'Shorten checkpoint interval or add I/O'],
            ['8x', '20-100 ms', 'WAL disk saturated; writes queue', 'Move WAL to dedicated NVMe disk'],
            ['10x', '100 ms - 1 s', 'Commits timeout; transactions fail', 'Critical: fsync latency unacceptable'],
            ['>10x (Spike)', 'Database stalls', 'WAL disk full; no new writes possible', 'Archive WAL aggressively; resize disk']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From default WAL settings to a finely tuned durability system.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Default Postgres WAL settings. Checkpoints every 5 minutes. WAL on same disk as data. Bottleneck: checkpoint spike causes latency jitter.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Move WAL to separate SSD. Increase wal_buffers to 64 MB. Tune checkpoint_completion_target to 0.9 for smooth writes. Bottleneck: WAL disk still fills during heavy writes.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — WAL archiving to S3 for PITR. Streaming replication to replicas. Checkpoint every 1 minute for faster recovery. Bottleneck: archive command latency; use async archiving.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Heroku Postgres)</strong> — Heroku uses continuous WAL archiving to S3. Automated failover with WAL replication. Checkpoints tuned for multi-tenant workloads. Bottleneck: shared WAL on multi-tenant instances; use dedicated plans.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., AWS Aurora)</strong> — Aurora does not use traditional WAL. The storage layer handles redo logs across 6 storage nodes. No checkpoint lag. Bottleneck: only applies to Aurora; migration from Postgres requires changes.',
          '<strong>Stage 6: Global Scale (e.g., CockroachDB)</strong> — CockroachDB uses Raft logs (similar to WAL) replicated across nodes. Every write is consensus-backed. WAL is per-node and replicated for durability. Bottleneck: consensus latency; solved with local quorum writes.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'WAL considerations by tier.',
        list: [
          '<strong>Application Tier:</strong> Applications should batch writes to reduce WAL fsync frequency. Each commit triggers fsync; batching 100 writes into one transaction reduces fsyncs by 100x. At Shopify, write batches of 100 rows are common.',
          '<strong>Database Tier:</strong> The WAL must be on the fastest storage (NVMe SSD). Separate WAL from data files to prevent I/O contention. Postgres wal_level = replica enables streaming replication. Use wal_compression to reduce WAL size.',
          '<strong>Cache Tier:</strong> WAL does not apply to caches directly, but cache writes that need durability should go through a WAL-enabled store first. Redis AOF is analogous to WAL but optional.',
          '<strong>Message Queue Tier:</strong> Kafka\s log segments are WAL-like. Each partition is an append-only log. Replication copies log segments to followers. Tune log.segment.bytes (1 GB default) and log.retention.hours for capacity planning.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'WAL tuning for different durability and performance needs.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Maximum durability (financial data)', 'Synchronous commit + fsync', 'Guaranteed on-disk on commit', 'Higher latency; lower throughput'],
            ['High throughput, acceptable risk', 'Asynchronous commit', 'No fsync per commit', 'Last second of data may be lost'],
            ['Read replicas with fast failover', 'Streaming WAL replication', 'Near-real-time replica sync', 'Network bandwidth for WAL stream'],
            ['Point-in-time recovery', 'WAL archiving to S3', 'Recover to any moment', 'Storage cost for archives'],
            ['Minimize recovery time', 'Frequent checkpoints', 'Less WAL to replay', 'Higher I/O during checkpoints'],
            ['Multi-region durability', 'Sync replication to remote region', 'Survive region loss', 'Write latency > 100ms'],
            ['Distributed consensus', 'Raft/Paxos log (CockroachDB, etcd)', 'Replicated WAL across nodes', 'Consensus overhead on every write']
          ]
        }
      }
    ]
  },
  module3: {
    'cache-aside': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Cache-aside is the most common caching pattern. These benchmarks help you estimate hit rates, memory needs, and fallback latency.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Cache Hit Rate (healthy)', '80-90%', '95%+ (well-tuned)', 'Depends on data locality'],
            ['Cache Miss Latency', '10-50 ms (DB)', '1-5 ms (DB + hot cache)', 'Includes DB query + cache write'],
            ['Cache Hit Latency (Redis)', '0.5-1 ms', '0.1-0.5 ms (local)', 'Network vs in-process'],
            ['Memory per Cached Item', '1-5 KB', '100 KB-1 MB', 'Includes key, value, metadata'],
            ['TTL (typical)', '1-60 minutes', '1-24 hours', 'Balance between freshness and hit rate'],
            ['Max Items (Redis per node)', '1M-10M', '100M+ (with clustering)', 'Limited by memory'],
            ['Throughput (Redis)', '100K+ ops/sec', '1M+ ops/sec (pipelined)', 'Single-threaded but efficient'],
            ['Stampede Probability', '10% (poor TTL)', '< 1% (jittered TTL)', 'Uniform expiry causes thundering herd'],
            ['Warm-up Time after Deploy', '1-5 minutes', 'Hours (cold start)', 'Pre-warm critical keys'],
            ['Operational Cost', '$100/mo', '$5K+/mo (clustered)', 'AWS Elasticache, Redis Cloud']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Cache-aside systems degrade when the cache is cold or stampede occurs.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '0.5-1 ms (hit)', '90%+ hit rate; database idle', 'Healthy cache-aside system'],
            ['2x', '1-2 ms (hit)', 'Hit rate stable; minor latency increase', 'Normal; cache handles load'],
            ['5x', '2-5 ms or 50 ms (miss)', 'Hit rate drops to 70%; some misses', 'Cache warming needed'],
            ['8x', '5-20 ms or 100-500 ms (miss)', 'Stampede risk; multiple threads hit DB', 'Implement singleflight'],
            ['10x', '20-100 ms or 500 ms - 2 s', 'Cache stampede; database overloaded', 'Critical: add circuit breaker'],
            ['>10x (Spike)', 'Database fails', 'All cache misses; DB cannot recover', 'Pre-warm cache; use cache warming scripts']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple local cache to a globally distributed caching layer.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — In-process LRU cache (e.g., Node-cache). No network overhead. Resets on deploy. Bottleneck: each server has separate cache; inconsistent across instances.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Redis single instance. Application checks Redis first, falls back to Postgres. TTL of 10 minutes. Bottleneck: Redis memory limit; eviction starts.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Redis Cluster with 6 nodes (3 masters, 3 replicas). Consistent hashing distributes keys. Pipelining for batch operations. Bottleneck: cross-slot operations require client-side handling.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Twitter)</strong> — Twitter uses a multi-tier cache: in-process (LRU) → Redis Cluster → Memcached. Cache-aside at each tier. Hit rate: 99%+ at L1, 95% at L2. Bottleneck: cache invalidation latency; solved with event-driven invalidation.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Instagram)</strong> — Instagram uses Memcached with cache-aside. Each photo metadata cached with 24-hour TTL. Cold start after deploy pre-warms top 10K photos. Bottleneck: memcached slab rebalancing; tune slab sizes.',
          '<strong>Stage 6: Global Scale (e.g., Netflix EVCache)</strong> — Netflix\'s EVCache is a distributed Memcached layer with cross-region replication. Cache-aside with async invalidation. Handles billions of requests daily. Bottleneck: cross-region invalidation lag (~100ms); acceptable for video metadata.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Cache-aside applies differently at each tier.',
        list: [
          '<strong>Application Tier:</strong> Implement singleflight (e.g., Go\'s singleflight package) to prevent duplicate database queries for the same key. Use probabilistic early expiration to spread out TTLs. At Google, cache-aside uses a 2-second singleflight window.',
          '<strong>Database Tier:</strong> On cache miss, the database handles the query. Ensure indexes support cache miss queries. A cache miss query should be fast (indexed lookup, not table scan). At Airbnb, cache miss queries target primary keys only.',
          '<strong>Cache Tier:</strong> Redis is the standard. Use pipelining for multiple lookups. Set maxmemory-policy to allkeys-lru. Monitor eviction rate; high eviction means cache is undersized. Redis 7+ supports client-side caching for L1 performance.',
          '<strong>Message Queue Tier:</strong> Use message queues for cache warming and invalidation. After a database update, publish an invalidation event. Cache nodes consume and invalidate. At LinkedIn, Kafka powers cache invalidation across 1000s of cache nodes.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Cache-aside vs write-through vs write-behind.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Read-heavy, data changes infrequently', 'Cache-aside', 'Simple; high hit rate', 'Stale data possible on miss'],
            ['Data must be consistent after write', 'Write-through', 'Cache always fresh', 'Higher write latency'],
            ['Write-heavy, read latency critical', 'Write-behind', 'Ack writes immediately', 'Risk of data loss on crash'],
            ['Simplest implementation', 'Cache-aside', 'No cache layer changes', 'Application handles all logic'],
            ['Existing database, minimal changes', 'Cache-aside', 'Works with any DB', 'Cache logic in application code'],
            ['Need strong consistency always', 'Write-through + TTL', 'Cache and DB synchronized', 'Write path bottleneck'],
            ['Analytics counters, sessions', 'Write-behind + cache-aside reads', 'Fast writes; fast reads', 'Acceptable loss on crash']
          ]
        }
      }
    ],
    'write-through': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Write-through ensures cache consistency by synchronously updating both cache and database.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Write Latency (p99)', '10-50 ms', '5-20 ms (local cache)', 'Includes DB write + cache write'],
            ['Read Latency (p99)', '0.5-1 ms', '0.1-0.5 ms (local)', 'Always served from cache'],
            ['Cache Hit Rate', '95-99%', '99.9%+', 'By design, cache is always warm'],
            ['Write Amplification', '2x (cache + DB)', '3x+ (with replicas)', 'Every write hits multiple stores'],
            ['Database Write Throughput', 'Same as app writes', 'Same', 'No write offloading benefit'],
            ['Cache Eviction Impact', 'High', 'Very High', 'Evicted reads miss both cache and DB'],
            ['Consistency Window', '0 ms', '0 ms', 'Strong consistency by design'],
            ['Failed Cache Write Behavior', 'Write fails', 'Write fails', 'Cache is part of write path'],
            ['Operational Complexity', 'Medium', 'High', 'Cache must be HA'],
            ['Use Case Read:Write Ratio', 'Any', 'Any', 'Works well even with 1:1 ratio']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Write-through degrades when database writes slow down because the cache cannot acknowledge until the database confirms.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '10-20 ms write', 'Database handles writes; cache updated', 'Healthy write-through system'],
            ['2x', '20-40 ms write', 'Minor database load increase', 'Normal; database has headroom'],
            ['5x', '40-100 ms write', 'Database write throughput saturated', 'Add database write capacity'],
            ['8x', '100-500 ms', 'Cache writes queue; clients wait', 'Database is bottleneck'],
            ['10x', '500 ms - 2 s', 'Write timeouts; cache rejections', 'Critical: scale database or switch pattern'],
            ['>10x (Spike)', 'Write rejected', 'Database cannot accept writes', 'Use write-behind or async queue']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple write-through cache to a high-availability synchronized store.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Application writes to Redis and MySQL in the same request handler. No transaction wrapper. Bottleneck: partial failures leave cache and DB inconsistent.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Use database transactions. Write to DB first, then cache. If cache fails, retry or mark for invalidation. Bottleneck: retry logic adds latency.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Cache layer (e.g., Redis) with replication. Writes go to primary Redis and primary DB. Reads from replica Redis. Bottleneck: replica lag causes brief stale reads.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Amazon ElastiCache)</strong> — Amazon\'s ElastiCache for Redis with write-through patterns. Multi-AZ replication. Auto-failover. Bottleneck: failover causes brief write unavailability (~seconds).',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Google Cloud Memorystore)</strong> — Memorystore provides write-through capabilities with Redis protocol. Read replicas for scaling. Bottleneck: write still bottlenecked by primary database; consider sharding.',
          '<strong>Stage 6: Global Scale</strong> — Global write-through with distributed consensus (e.g., CockroachDB + caching layer). Every write is consensus-backed. Cache invalidated globally via event bus. Bottleneck: consensus latency (~50-100ms); acceptable for strong consistency needs.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Write-through considerations by tier.',
        list: [
          '<strong>Application Tier:</strong> The application must handle partial failures gracefully. If the database write succeeds but cache fails, the cache should be invalidated or retried. At Amazon, write-through uses a two-phase commit between cache and DB.',
          '<strong>Database Tier:</strong> The database is the bottleneck because every write hits it directly. Use database connection pooling and batch writes where possible. MySQL can handle ~5K writes/sec; Postgres ~3K writes/sec.',
          '<strong>Cache Tier:</strong> The cache must be highly available. Use Redis Sentinel or Cluster for HA. Write failures should trigger alerts. Monitor cache write success rate; it should be > 99.9%.',
          '<strong>Message Queue Tier:</strong> Use message queues for cache invalidation on write failures. If cache write fails, publish an invalidation event. Another process repairs the cache asynchronously.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use write-through vs alternatives.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Strong consistency required', 'Write-through', 'Cache and DB always in sync', 'Slower writes'],
            ['Read-heavy after write', 'Write-through', 'Subsequent reads are cache hits', 'Write latency cost'],
            ['Write latency is critical', 'Write-behind', 'Immediate acknowledgment', 'Eventual consistency risk'],
            ['Cache layer can fail writes', 'Write-through with fallback', 'DB is source of truth', 'Complex failure handling'],
            ['Simplest strong consistency', 'Write-through', 'No eventual consistency window', 'Cache is write bottleneck'],
            ['High-frequency counters', 'Write-behind + atomic increments', 'Cache aggregates writes', 'Crash loses unflushed data'],
            ['Financial transactions', 'Write-through + sync replication', 'Durability on both cache and DB', 'Highest latency']
          ]
        }
      }
    ],
    'write-behind': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Write-behind (write-back) caches acknowledge immediately and flush asynchronously. These metrics quantify the durability risk and performance benefit.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Write Latency (p99)', '0.1-1 ms', '0.01-0.1 ms (local)', 'No database wait; cache only'],
            ['Flush Interval', '1-5 seconds', '100 ms - 1 s', 'Balance between durability and batching'],
            ['Batch Size', '10-100 writes', '1K-10K writes', 'Larger batches = fewer DB ops'],
            ['Data Loss Window', '1-5 seconds', '100 ms - 1 s', 'Unflushed data lost on crash'],
            ['Write Coalescing Rate', '50-90%', '95%+', 'Multiple writes to same key merged'],
            ['Flush Worker Count', '1-5', '10-50+', 'Scale workers with write volume'],
            ['Memory for Dirty Entries', '10-100 MB', '1-10 GB', 'Unflushed data held in cache'],
            ['Flush Failure Retry', '3-5 attempts', '10+ with exponential backoff', 'Persistent failures need attention'],
            ['Database Write Reduction', '50-80%', '90%+', 'Coalescing + batching'],
            ['Operational Complexity', 'High', 'Very High', 'Flush scheduling, recovery logging']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Write-behind excels at write latency but degrades if flush workers cannot keep up.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '0.1-1 ms write', 'Flush workers keep up; dirty entries minimal', 'Healthy write-behind system'],
            ['2x', '0.1-1 ms write', 'Dirty entries grow slowly; flushes catch up', 'Normal; monitor dirty entry count'],
            ['5x', '0.1-1 ms write', 'Flush workers saturated; dirty entries accumulate', 'Add flush workers or reduce flush interval'],
            ['8x', '0.1-1 ms write', 'Dirty entries > memory limit; evictions start', 'Risk of losing unflushed data'],
            ['10x', '0.1-1 ms write', 'Flush queue unbounded; memory pressure critical', 'Critical: throttle writes or switch to write-through'],
            ['>10x (Spike)', 'Cache rejects writes', 'No memory for dirty entries', 'Emergency: force flush or drop non-critical data']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a simple async write to a robust write-behind system with recovery guarantees.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Application writes to in-memory cache. Background setInterval flushes to SQLite every 10 seconds. Bottleneck: application crash loses all unflushed data.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Redis with custom flush worker. Writes go to Redis; worker reads dirty keys and writes to Postgres. No recovery log. Bottleneck: worker crash loses flush queue.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Write-ahead log for dirty entries. Redis stores data; WAL (e.g., RocksDB) stores unflushed changes. Worker replays WAL on restart. Bottleneck: WAL compaction needed.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Facebook)</strong> — Facebook uses write-behind for analytics counters. Memcached stores counters; flush workers batch increments to HBase. Coalescing reduces writes by 90%. Bottleneck: HBase write hotspots; solved with pre-splitting.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Redis Enterprise)</strong> — Redis Enterprise provides built-in write-behind with RedisGears. Flash-backed storage for dirty entries. Automatic recovery after crash. Bottleneck: flash wear; use SSD with wear leveling.',
          '<strong>Stage 6: Global Scale (e.g., Akamai CDN)</strong> — Edge servers cache and write-behind to origin. Batch size of 1000s of log entries. Origin processes batches asynchronously. Bottleneck: origin processing lag; solved with multiple origin endpoints.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Write-behind by tier.',
        list: [
          '<strong>Application Tier:</strong> Applications write to cache and forget. No database logic in the app. However, the app should handle the possibility of data loss (e.g., analytics counters can tolerate loss). At Facebook, like counters use write-behind with lossy semantics.',
          '<strong>Database Tier:</strong> The database receives batched writes. Batch INSERT/UPDATE is far more efficient than individual writes. MySQL can handle 50K+ batched writes/sec vs 5K individual. Use ON DUPLICATE KEY UPDATE for upsert batches.',
          '<strong>Cache Tier:</strong> The cache holds dirty entries until flush. Memory must be sized for peak dirty entry count. Use Redis with AOF for durability, or Memcached with external WAL. Monitor evicted dirty entries; eviction = data loss.',
          '<strong>Message Queue Tier:</strong> Use message queues for reliable flush scheduling. Each flush job is a message. Workers consume and flush. Failed flushes retry via dead-letter queue. At Netflix, SQS queues schedule cache flushes to Cassandra.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Write-behind vs write-through vs direct DB writes.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Analytics counters, logs', 'Write-behind', 'Fast writes; batching reduces DB load', 'Acceptable data loss on crash'],
            ['Session state, temporary data', 'Write-behind', 'Low latency; data is transient', 'Loss on crash is expected'],
            ['Financial transactions', 'Write-through or direct DB', 'Durability is non-negotiable', 'Higher latency'],
            ['Inventory counts', 'Write-through + optimistic locking', 'Prevents oversell', 'Complex concurrency handling'],
            ['Social media likes', 'Write-behind + periodic sync', 'Fast UX; approximate count OK', 'Count may be slightly off'],
            ['High-frequency gaming state', 'Write-behind + snapshot', 'Sub-millisecond writes', 'Snapshot on checkpoint'],
            ['Need immediate read consistency', 'Write-through', 'Cache always reflects latest', 'Slower writes']
          ]
        }
      }
    ],
    'eviction-policies': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Eviction policies determine which data stays in cache. These metrics compare policy effectiveness.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['LRU Hit Rate (typical)', '80-85%', '90-95% (Zipfian)', 'Best for temporal locality'],
            ['LFU Hit Rate (typical)', '75-80%', '85-90%', 'Best for frequency-based workloads'],
            ['FIFO Hit Rate (typical)', '60-70%', '70-80%', 'Simple but ignores access patterns'],
            ['TTL Hit Rate (typical)', '70-80%', '80-90%', 'Depends on TTL tuning'],
            ['Random Hit Rate (typical)', '40-50%', '50-60%', 'Worst; only for uniform workloads'],
            ['W-TinyLFU Hit Rate', '85-92%', '93-98%', 'Hybrid; state of the art (Caffeine)'],
            ['CLOCK Approximation Overhead', '5-10% miss increase', '2-5% (tuned)', 'Versus exact LRU'],
            ['Memory per Entry (LRU)', '1.2x value size', '1.5x (with timestamps)', 'Linked list pointers'],
            ['Memory per Entry (LFU)', '1.3x value size', '1.6x (with counters)', 'Counter + timestamp storage'],
            ['Policy Switching Cost', '1-5 min warm-up', 'Hours (large caches)', 'Hit rate drops during adaptation']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Eviction policy performance depends on workload characteristics.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '1-2 ms (hit)', 'Policy efficiently retains hot data', 'Healthy cache'],
            ['2x', '1-2 ms (hit)', 'Hit rate stable; minor eviction increase', 'Normal; policy handles load'],
            ['5x', '2-5 ms (miss)', 'Scanning workload pollutes LRU', 'Consider scan resistance'],
            ['8x', '5-20 ms (miss)', 'LFU retains stale popular data', 'Add TTL cap to LFU'],
            ['10x', '20-100 ms (miss)', 'Mass eviction; hit rate collapses', 'Cache undersized for workload'],
            ['>10x (Spike)', 'Database overload', 'Effectively no cache', 'Scale cache memory or use CDN']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From simple TTL to advanced adaptive eviction.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Fixed TTL (e.g., 10 minutes). No complex eviction. Items expire uniformly. Bottleneck: thundering herd on mass expiration.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — LRU with per-key TTL. Redis allkeys-lru policy. Jittered TTLs prevent mass expiration. Bottleneck: Redis exact LRU is expensive; use approximated LRU.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — W-TinyLFU (Caffeine in Java, similar in other languages). Adapts to changing workloads. Window cache + TinyLFU admission. Bottleneck: tuning window size requires workload analysis.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Caffeine at Twitter)</strong> — Twitter uses Caffeine\'s W-TinyLFU for in-process caching. Hit rates exceed 99% for some workloads. Bottleneck: memory overhead of frequency sketches.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Netflix)</strong> — Netflix uses a combination of LRU for video metadata and TTL for session data. EVCache supports LRU, LFU, and TTL policies per namespace. Bottleneck: namespace-level policy misconfiguration causes evictions.',
          '<strong>Stage 6: Global Scale (e.g., Cloudflare)</strong> — Cloudflare\'s edge caches use a custom eviction policy optimized for web content. Frequently accessed assets (HTML, images) stay hot. Bottleneck: cache key design affects hit rate more than policy.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Eviction policies by tier.',
        list: [
          '<strong>Application Tier:</strong> In-process caches (Caffeine, Guava) should use W-TinyLFU for best hit rates. Configure maximum size, not just TTL. At Google, Guava caches use size-based eviction with reference counting.',
          '<strong>Database Tier:</strong> Database query caches (e.g., Postgres buffer cache) use LRU variants. The buffer cache is managed by the database; tune shared_buffers (25% of RAM is standard). Query result caching at application level uses application eviction policies.',
          '<strong>Cache Tier:</strong> Redis supports volatile-lru, allkeys-lru, volatile-lfu, allkeys-lfu, volatile-random, allkeys-random, volatile-ttl, and noeviction. Default is noeviction (returns errors). For caching, use allkeys-lru or allkeys-lfu.',
          '<strong>Message Queue Tier:</strong> Message queue buffers are effectively caches with FIFO eviction. Kafka retains messages by time or size, not access pattern. For consumer lag buffers, use TTL-based eviction to prevent unbounded growth.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing an eviction policy for your workload.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Temporal locality (recent data is hot)', 'LRU', 'Simple; effective for recency', 'Vulnerable to scan attacks'],
            ['Some items are consistently popular', 'LFU', 'Retains genuinely popular data', 'Retains stale popular items'],
            ['Mixed workloads, changing patterns', 'W-TinyLFU', 'Adapts to shifts; scan resistant', 'More memory overhead'],
            ['Simplest possible policy', 'FIFO', 'Easy to implement and reason about', 'Ignores access patterns'],
            ['Time-bound data (sessions, tokens)', 'TTL', 'Natural expiration semantics', 'Uniform expiry causes thundering herd'],
            ['Cache size strictly bounded', 'LRU + max size', 'Predictable memory usage', 'Tuning max size required'],
            ['CDN / edge cache', 'Custom (frequency + recency + TTL)', 'Optimized for web content', 'Complex; platform-specific']
          ]
        }
      }
    ],
    'cdn-caching': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'CDN caching reduces origin load and latency by serving content from edge locations.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Cache Hit Rate (static)', '90-95%', '98%+ (well-tuned)', 'Images, CSS, JS'],
            ['Cache Hit Rate (dynamic)', '50-70%', '80-90% (with edge logic)', 'HTML, API responses'],
            ['Edge Latency (p99)', '10-50 ms', '1-10 ms (major cities)', 'Depends on PoP proximity'],
            ['Origin Offload', '80-90%', '95%+', 'Traffic never reaches origin'],
            ['TTL (static assets)', '1-30 days', '1 year (versioned filenames)', 'Immutable assets = infinite TTL'],
            ['Purge Propagation Time', '1-5 minutes', '30 seconds - 2 minutes', 'Fastly purges in ~150ms'],
            ['Edge Storage per PoP', '10-100 TB', '1 PB+', 'SSD-based edge caching'],
            ['PoP Count (global CDN)', '50-200', '500+ (Cloudflare)', 'More PoPs = lower latency'],
            ['Cost per GB Served', '$0.01-0.05', '$0.001-0.01 (volume)', 'AWS CloudFront pricing tiers'],
            ['Bandwidth per PoP', '10-100 Gbps', '1 Tbps+ (Cloudflare)', 'DDoS protection included']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'CDN performance is excellent until cache misses spike or purges flood the system.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', '10-50 ms edge', 'High hit rate; origin idle', 'Healthy CDN usage'],
            ['2x', '10-50 ms edge', 'Hit rate stable; minor origin increase', 'Normal; CDN absorbs spike'],
            ['5x', '50-100 ms or origin', 'Cache misses spike; origin load rises', 'Origin shield helps'],
            ['8x', '100-500 ms (origin)', 'Origin overloaded; edge serves stale', 'Enable stale-while-revalidate'],
            ['10x', '500 ms - 2 s', 'Origin failing; cascade to edges', 'Critical: scale origin or cache more'],
            ['>10x (Spike)', 'Origin down', 'CDN serves stale or errors', 'Use origin shield + multiple origins']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a single origin to a globally cached architecture.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Single origin server. No CDN. Static assets served directly. Bottleneck: origin bandwidth and latency to distant users.',
          '<strong>Stage 2: Growing (1K-100K users)</strong> — Basic CDN (e.g., Cloudflare free tier). Static assets cached at edge. HTML still from origin. Bottleneck: dynamic content latency unchanged.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Full CDN with dynamic content caching. Cache keys include URL and Accept-Encoding. Origin shield reduces origin load. API responses cached with short TTL (1 minute). Bottleneck: cache invalidation for personalized content.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Netflix)</strong> — Netflix uses Open Connect CDN (ISP-hosted caches). Video content cached at ISP level. Origin only serves manifest files. Bottleneck: manifest file freshness; solved with short TTL + ETags.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Facebook)</strong> — Facebook\'s CDN caches photos, videos, and static content. Edge-side includes (ESI) for personalized fragments. Bottleneck: ESI assembly latency; solved with edge computing (Cloudflare Workers style).',
          '<strong>Stage 6: Global Scale (e.g., Cloudflare)</strong> — Cloudflare serves 20%+ of web traffic. Every PoP runs the full stack. Workers execute JavaScript at edge for dynamic personalization. Bottleneck: worker CPU limits; complex logic must be simple.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'CDN caching by tier.',
        list: [
          '<strong>Application Tier:</strong> Applications should version static assets (e.g., app.v123.js) for infinite cacheability. Use cache-busting query strings or filename hashing. At Google, static assets have content-addressed filenames (hash in URL).',
          '<strong>Database Tier:</strong> Database query results can be cached at the CDN edge using surrogate keys. When data changes, purge by surrogate key. At NYT, article content is cached at CDN; database updates trigger key purges.',
          '<strong>Cache Tier:</strong> The CDN is the cache tier for static and semi-dynamic content. Configure cache-control headers: max-age for TTL, s-maxage for CDN-specific TTL, stale-while-revalidate for graceful degradation.',
          '<strong>Message Queue Tier:</strong> Use message queues to trigger CDN purges. When a product updates, a worker consumes the event and calls the CDN purge API. At Shopify, webhooks trigger cache purges across multiple CDN providers.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'CDN caching strategies by content type.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Immutable static assets', 'Long TTL (1 year) + versioned URL', 'Never expires; cache forever', 'Must update references on change'],
            ['Semi-dynamic content (product catalog)', 'Short TTL (1-5 min) + surrogate keys', 'Fresh enough; high hit rate', 'Brief staleness acceptable'],
            ['Personalized content', 'Edge-side includes or no cache', 'Dynamic per user', 'Higher origin load'],
            ['API responses (read-heavy)', 'Cache with vary by auth token', 'Reduces API server load', 'Token changes = cache miss'],
            ['Global latency reduction', 'Multi-CDN strategy', 'Failover between providers', 'Operational complexity'],
            ['DDoS protection needed', 'CDN with WAF', 'Absorbs attack at edge', 'Cost; false positives'],
            ['Real-time data (stock prices)', 'No CDN cache; use WebSocket', 'CDN cannot cache mutable data', 'Origin handles all load']
          ]
        }
      }
    ],
    'multi-tier-cache': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Multi-tier caching optimizes latency and cost by placing data at the right speed/cost layer.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['L1 Hit Rate (in-process)', '90-95%', '98%+', 'Fastest; smallest capacity'],
            ['L2 Hit Rate (distributed)', '70-80%', '90%+', 'Redis/Memcached cluster'],
            ['L3 Hit Rate (CDN/disk)', '50-70%', '80%+', 'Slower; largest capacity'],
            ['L1 Latency', '0.001-0.01 ms', '0.001 ms', 'In-process memory access'],
            ['L2 Latency', '0.5-2 ms', '0.1-0.5 ms (local Redis)', 'Network round trip'],
            ['L3 Latency', '10-100 ms', '1-10 ms (CDN edge)', 'Geographic distance'],
            ['L1 Capacity per Instance', '100 MB - 1 GB', '10 GB+ (dedicated)', 'Limited by application memory'],
            ['L2 Capacity per Cluster', '10-100 GB', '1 TB+', 'Redis Cluster or Memcached'],
            ['L3 Capacity', '1-10 TB', 'Unlimited (CDN)', 'Cloud CDN or disk cache'],
            ['Promotion Rate (L2→L1)', '1-10%', '20%+ (hot data)', 'Moves frequently accessed data up']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Multi-tier caches degrade when upper tiers miss and lower tiers cannot handle the fallback load.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Baseline)', 'L1: 0.01 ms', '95%+ L1 hits; lower tiers idle', 'Optimal multi-tier performance'],
            ['2x', 'L1: 0.01 ms; L2: 0.5 ms', 'L1 hit rate stable; L2 handles overflow', 'Normal; promotion keeps hot data in L1'],
            ['5x', 'L1: 0.01 ms; L2: 1-2 ms', 'L1 evictions increase; L2 hit rate drops', 'Size L1 for working set'],
            ['8x', 'L1: 0.01 ms; L2: 2-5 ms; L3: 50 ms', 'L2 saturated; L3 fallback grows', 'Add L2 capacity or nodes'],
            ['10x', 'L1 misses; L2: 5-10 ms; L3: 100 ms', 'Cascading misses; database load spikes', 'Critical: pre-warm upper tiers'],
            ['>10x (Spike)', 'Database overloaded', 'All tiers cold; origin cannot recover', 'Use circuit breakers and graceful degradation']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From a single cache to a multi-layer hierarchy.',
        list: [
          '<strong>Stage 1: Startup (1-100 users)</strong> — Single in-process cache (e.g., LRU map). No external cache. Bottleneck: application restart clears cache.',
          '<strong>Stage 2: Growing (1K-10K users)</strong> — Add Redis as L2. L1 is in-process (Caffeine/Guava). L1 TTL shorter than L2. Bottleneck: L1/L2 inconsistency; updates must invalidate both.',
          '<strong>Stage 3: Scaling (100K-1M users)</strong> — Redis Cluster as L2. CDN as L3 for static content. L1 caches hot API responses. L2 caches warm data. L3 caches static assets. Bottleneck: cross-tier invalidation complexity.',
          '<strong>Stage 4: Large Scale (1M-10M users, e.g., Twitter)</strong> — Twitter uses in-process (L1) → Redis Cluster (L2) → Memcached (L3, historical) → database. Timeline data flows up tiers as it becomes hot. Bottleneck: tier promotion logic; solved with access counters.',
          '<strong>Stage 5: Massive Scale (10M+ users, e.g., Netflix)</strong> — Netflix\'s EVCache is L2 for video metadata. L1 is in-process (Caffeine). L3 is origin data stores. CDN handles static assets separately. Bottleneck: cross-region cache coherence; solved with regional isolation.',
          '<strong>Stage 6: Global Scale (e.g., Google)</strong> — Google\'s caching hierarchy: CPU registers → L1/L2/L3 CPU cache → RAM → local SSD → distributed cache (e.g., Bigtable memcache) → persistent storage. Application-level caching mirrors this pattern. Bottleneck: each tier must be sized for the working set above it.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Multi-tier caching by tier.',
        list: [
          '<strong>Application Tier:</strong> L1 is in-process. Use Caffeine (Java), cachetools (Python), or lru-cache (Node.js). Size L1 to the hot working set (e.g., top 10K objects). Promote from L2 on miss. At Google, Guava caches serve billions of L1 requests daily.',
          '<strong>Database Tier:</strong> Database is the source of truth for L3 and below. L2 (Redis) offloads 80-90% of reads. L1 offloads 90-95% of remaining reads. Database sees only 0.5-1% of original read load.',
          '<strong>Cache Tier:</strong> L2 is Redis or Memcached. Use Redis Cluster for horizontal scaling. Configure different eviction policies per tier: L1 = size-based LRU, L2 = allkeys-lru, L3 = TTL-based. Monitor per-tier hit rates.',
          '<strong>Message Queue Tier:</strong> Invalidation events flow from database → L2 → L1. Kafka can fan out invalidation to all cache tiers. At LinkedIn, invalidation events propagate through Kafka to 1000s of L1 and L2 cache nodes.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use multi-tier vs single-tier caching.',
        table: {
          headers: ['Scenario', 'Recommended Approach', 'Why', 'Trade-off'],
          rows: [
            ['Simple app, moderate traffic', 'Single-tier (Redis)', 'Simpler operations', 'Higher latency for hot data'],
            ['High read volume, latency critical', 'L1 (in-process) + L2 (Redis)', 'Sub-millisecond hot path', 'Invalidation complexity'],
            ['Mixed static and dynamic content', 'L1 + L2 + L3 (CDN)', 'Optimal latency per content type', 'Operational overhead'],
            ['Global user base', 'Regional L2 + Global L3', 'Local latency everywhere', 'Cross-region consistency'],
            ['Microservices with shared data', 'L2 (shared Redis) + L1 (per-service)', 'Service isolation; shared warm data', 'Cache fragmentation'],
            ['Cost-sensitive, latency tolerant', 'Single L2 (large)', 'Fewer components to manage', 'Higher p99 latency'],
            ['Maximum performance (trading, gaming)', 'L1 only (replicated)', 'Lowest possible latency', 'Data inconsistency risk; complex replication']
          ]
        }
      }
    ]
  }
};
