// Real interview questions for System Design
// Generated: 2026-06-13T19:00:14.232Z

export const systemDesignRealQuestions = {
  "questions": [
    {
      "question": "How would you design a multi-step checkout process that works across different payment providers?",
      "answer": "<p><strong>Multi-step checkout</strong> must be resilient, PCI-compliant, and support multiple payment processors without vendor lock-in.</p><h4>Architecture</h4><pre>&lt;code&gt;Cart Service → Checkout Session Service → Payment Orchestrator\n                    ↓                           ↓\n            Order DB (PostgreSQL)       Provider Adapters (Stripe, PayPal, Adyen)\n                    ↓                           ↓\n            Inventory Reservation      Webhook Handler → Reconciliation\n</code></pre><h4>Key Components</h4><ul><li><strong>Checkout session:</strong> Maintains state across steps (shipping, payment, review).</li><li><strong>Payment orchestrator:</strong> Routes to provider based on cost, currency, or availability.</li><li><strong>Idempotency:</strong> Every charge uses an idempotency key to avoid double billing.</li><li><strong>Saga/Compensation:</strong> On failure, release inventory and refund any partial charge.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Payments"
      ],
      "keyPoints": [
        "Use a checkout session to maintain state across payment steps.",
        "Route charges through provider adapters with idempotency keys.",
        "Compensate on failure by releasing inventory and refunding charges."
      ]
    },
    {
      "question": "Design a scalable UI architecture for real-time voice chat with screen sharing capabilities.",
      "answer": "<p><strong>Real-time voice and screen share</strong> requires low-latency media transport, signaling, and selective media routing.</p><h4>Architecture</h4><pre>&lt;code&gt;Client ←→ Signaling Server (WebSocket) ←→ SFU (Selective Forwarding Unit)\n   ↓                                           ↓\nMedia over UDP (SRTP)                    TURN relay for NAT\n</code></pre><h4>Key Components</h4><ul><li><strong>WebRTC:</strong> Peer media capture and encryption.</li><li><strong>SFU:</strong> Receives one stream and forwards selectively to reduce uplink bandwidth.</li><li><strong>Signaling:</strong> Exchanges SDP/ICE candidates before media flows.</li><li><strong>Region selection:</strong> Place media servers close to users to minimize latency.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Use WebRTC for peer capture and encrypted media transport.",
        "Deploy an SFU to forward media selectively and save uplink bandwidth.",
        "Place signaling and media servers in regions close to users."
      ]
    },
    {
      "question": "How would you implement collaborative cursor tracking in a shared document?",
      "answer": "<p><strong>Collaborative cursors</strong> show remote user positions and selections with sub-second latency.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Operational Transform / CRDT Engine → Sync Server (WebSocket)\n                                  ↓\n                          Presence Store (Redis)\n</code></pre><h4>Key Components</h4><ul><li><strong>CRDTs/OT:</strong> Merge concurrent edits deterministically.</li><li><strong>Presence service:</strong> Stores cursor positions per user with short TTL.</li><li><strong>Throttling:</strong> Send cursor updates at 10-30 Hz to limit bandwidth.</li><li><strong>Conflict resolution:</strong> Last-write-wins or logical clocks for positions.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Use CRDTs or OT to merge concurrent document edits deterministically.",
        "Store cursor positions in a presence service with short TTLs.",
        "Throttle cursor updates to 10-30 Hz to reduce bandwidth."
      ]
    },
    {
      "question": "Design an architecture for a notifications system handling millions of real-time updates.",
      "answer": "<p><strong>Notifications at scale</strong> need fan-out, prioritization, and reliable delivery across channels.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Notification Service → Priority Queue (Kafka/SQS)\n                                    ↓\n                    Channel Workers (Push, Email, SMS, In-App)\n                                    ↓\n                    Delivery Status DB + Analytics\n</code></pre><h4>Key Components</h4><ul><li><strong>Priority queues:</strong> Separate critical alerts from marketing messages.</li><li><strong>Rate limiting:</strong> Per-user caps prevent spam and provider throttling.</li><li><strong>Templates:</strong> Localized content with A/B testing support.</li><li><strong>Retries & dedup:</strong> Exponential backoff and idempotency keys.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Notifications"
      ],
      "keyPoints": [
        "Route notifications through priority queues by urgency.",
        "Apply per-user rate limits and retry with exponential backoff.",
        "Track delivery status and deduplicate with idempotency keys."
      ]
    },
    {
      "question": "Design a news website like Times of India. Focus on schema, API design, video rendering, showing ads.",
      "answer": "<p><strong>News platform</strong> must serve mixed content (text, video, ads) with low latency and personalization.</p><h4>Architecture</h4><pre>&lt;code&gt;CDN Edge → Article API → Headless CMS / Article DB\n   ↓            ↓\nVideo Origin   Ad Server\n   ↓            ↓\nAdaptive Bitrate Streaming  Programmatic Ad Auction\n</code></pre><h4>Key Components</h4><ul><li><strong>CDN:</strong> Cache static articles and media at edge.</li><li><strong>Video:</strong> HLS/DASH transcoding with multiple bitrates.</li><li><strong>Ads:</strong> Real-time bidding via header bidding or server-side ad insertion.</li><li><strong>Schema:</strong> Articles, authors, categories, comments, user preferences.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Streaming"
      ],
      "keyPoints": [
        "Cache articles and media at CDN edge locations.",
        "Deliver video via adaptive bitrate streaming (HLS/DASH).",
        "Integrate programmatic ad auctions for monetization."
      ]
    },
    {
      "question": "Design a URL shortener (TinyURL) system.",
      "answer": "<p><strong>URL shortener</strong> maps long URLs to short codes and redirects quickly.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → LB → API Service → Cache (Redis)\n                              ↓\n                         URL Mapping DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Short code:</strong> Base62 encoding of a 64-bit ID; pre-allocate keys for speed.</li><li><strong>Collision handling:</strong> Unique key constraint or check-before-write.</li><li><strong>Cache:</strong> Hot URLs served from Redis to reduce DB load.</li><li><strong>Analytics:</strong> Async logging of clicks via message queue.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Generate short codes with Base62 encoding of sequential IDs.",
        "Handle collisions with unique constraints or pre-allocated keys.",
        "Cache hot mappings in Redis and log analytics asynchronously."
      ]
    },
    {
      "question": "Design a web crawler system.",
      "answer": "<p><strong>Web crawler</strong> fetches, parses, and indexes pages at scale while respecting politeness.</p><h4>Architecture</h4><pre>&lt;code&gt;Seed URLs → URL Frontier → Fetchers → Content Parser → Indexer\n              ↓                ↓            ↓\n          Dedup Filter     Robots Cache   Link Extractor\n</code></pre><h4>Key Components</h4><ul><li><strong>URL frontier:</strong> Priority queue by domain and freshness.</li><li><strong>Politeness:</strong> Rate limits per domain from robots.txt.</li><li><strong>Deduplication:</strong> Bloom filter or hash set for seen URLs/content.</li><li><strong>Distributed:</strong> Partition frontier by domain to coordinate fetchers.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Use a prioritized URL frontier partitioned by domain.",
        "Respect robots.txt and enforce per-domain rate limits.",
        "Deduplicate URLs and content with Bloom filters or hashes."
      ]
    },
    {
      "question": "Design a library to process a stream of logs and perform filtering operations.",
      "answer": "<p><strong>Log processing library</strong> ingests high-volume logs and applies filters, aggregation, and search.</p><h4>Architecture</h4><pre>&lt;code&gt;Log Source → Ingestion API → Stream (Kafka) → Processors → Index (Elasticsearch)\n                                ↓\n                         Rule Engine for filters\n</code></pre><h4>Key Components</h4><ul><li><strong>Streaming:</strong> Kafka/Kinesis buffers logs and decouples producers/consumers.</li><li><strong>Filter DSL:</strong> Structured query language for level, service, timestamp.</li><li><strong>Indexing:</strong> Inverted index for full-text search.</li><li><strong>Retention:</strong> Hot (SSD) → warm (S3) tiering by age.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Ingest logs through a stream to decouple producers and processors.",
        "Provide a structured filter DSL for level, service, and time.",
        "Index logs for search and tier older logs to cheap storage."
      ]
    },
    {
      "question": "Design a job review system (schema design and API design).",
      "answer": "<p><strong>Job review system</strong> stores reviews, ratings, salaries, and company profiles with moderation.</p><h4>Schema</h4><pre>&lt;code&gt;companies(id, name, industry)\nreviews(id, company_id, user_id, rating, pros, cons, status, created_at)\nsalaries(id, company_id, role, location, amount, currency)\n</code></pre><h4>Key Components</h4><ul><li><strong>API design:</strong> GET /companies/:id/reviews, POST /reviews, moderation workflow.</li><li><strong>Search:</strong> Filter by company, role, location with Elasticsearch.</li><li><strong>Anti-fraud:</strong> Rate limit reviews per user and detect fake accounts.</li><li><strong>Aggregates:</strong> Materialized views for company ratings.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Store companies, reviews, and salaries in normalized tables.",
        "Enable search and filtering via an inverted index.",
        "Moderate reviews and aggregate ratings in materialized views."
      ]
    },
    {
      "question": "Design a leaderboard system for a gaming platform that supports real-time score updates.",
      "answer": "<p><strong>Notifications at scale</strong> need fan-out, prioritization, and reliable delivery across channels.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Notification Service → Priority Queue (Kafka/SQS)\n                                    ↓\n                    Channel Workers (Push, Email, SMS, In-App)\n                                    ↓\n                    Delivery Status DB + Analytics\n</code></pre><h4>Key Components</h4><ul><li><strong>Priority queues:</strong> Separate critical alerts from marketing messages.</li><li><strong>Rate limiting:</strong> Per-user caps prevent spam and provider throttling.</li><li><strong>Templates:</strong> Localized content with A/B testing support.</li><li><strong>Retries & dedup:</strong> Exponential backoff and idempotency keys.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design"
      ],
      "keyPoints": [
        "Route notifications through priority queues by urgency.",
        "Apply per-user rate limits and retry with exponential backoff.",
        "Track delivery status and deduplicate with idempotency keys."
      ]
    },
    {
      "question": "Design a URL shortener (TinyURL)",
      "answer": "<p><strong>URL shortener</strong> maps long URLs to short codes and redirects quickly.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → LB → API Service → Cache (Redis)\n                              ↓\n                         URL Mapping DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Short code:</strong> Base62 encoding of a 64-bit ID; pre-allocate keys for speed.</li><li><strong>Collision handling:</strong> Unique key constraint or check-before-write.</li><li><strong>Cache:</strong> Hot URLs served from Redis to reduce DB load.</li><li><strong>Analytics:</strong> Async logging of clicks via message queue.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Generate short codes with Base62 encoding of sequential IDs.",
        "Handle collisions with unique constraints or pre-allocated keys.",
        "Cache hot mappings in Redis and log analytics asynchronously."
      ]
    },
    {
      "question": "Design Instagram feed / newsfeed ranking system",
      "answer": "<p><strong>Feed ranking</strong> combines retrieval, scoring, and blending to show relevant content.</p><h4>Architecture</h4><pre>&lt;code&gt;Posts → Fan-out / Pull → Candidate Generation → Ranking Model → Blending → Client\n</code></pre><h4>Key Components</h4><ul><li><strong>Candidate generation:</strong> Retrieve posts from followed users and similar content.</li><li><strong>Ranking model:</strong> ML scoring on engagement, freshness, and affinity.</li><li><strong>Fan-out:</strong> Push for normal users, pull for celebrities to avoid write amplification.</li><li><strong>Caching:</strong> Pre-compute and cache timelines in Redis.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Generate candidates from follows and similar content.",
        "Rank posts with an ML model on engagement and freshness.",
        "Use push fan-out for normal users and pull-on-read for celebrities."
      ]
    },
    {
      "question": "Design a logging system with cost optimization",
      "answer": "<p><strong>Cost-optimized logging</strong> balances ingest volume, retention, and query speed.</p><h4>Architecture</h4><pre>&lt;code&gt;Apps → Log Agent → Kafka → Hot Index (1-7d) → Warm Storage (S3) → Cold Archive\n              ↓\n         Sampling & Filtering\n</code></pre><h4>Key Components</h4><ul><li><strong>Sampling:</strong> Keep 100% of errors, sample debug logs.</li><li><strong>Compression:</strong> Parquet/ORC with columnar encoding.</li><li><strong>Tiered retention:</strong> Query recent logs fast; archive older logs cheaply.</li><li><strong>Cardinality control:</strong> Limit high-cardinality labels.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Sample verbose logs and retain all errors to reduce volume.",
        "Compress logs into columnar formats like Parquet.",
        "Move old logs through hot, warm, and cold storage tiers."
      ]
    },
    {
      "question": "Design a payment processing system with failure handling and reconciliation",
      "answer": "<p><strong>Payment system</strong> guarantees correctness, idempotency, and auditability through ledgers and reconciliation.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Idempotency Check → Payment Orchestrator → PSP Adapter → PSP\n                         ↓                            ↓\n                   Ledger DB                     Reconciliation Job\n</code></pre><h4>Key Components</h4><ul><li><strong>Ledger:</strong> Immutable double-entry records for every movement.</li><li><strong>Idempotency:</strong> Keys prevent duplicate charges.</li><li><strong>Reconciliation:</strong> Match internal ledger against PSP settlement reports.</li><li><strong>Retry policy:</strong> Exponential backoff with strict status queries.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Record every movement in an immutable double-entry ledger.",
        "Use idempotency keys to prevent duplicate charges.",
        "Reconcile internal records against PSP settlement reports daily."
      ]
    },
    {
      "question": "Design a video streaming platform with CDN optimization",
      "answer": "<p><strong>Video streaming platform</strong> ingests, transcodes, stores, and delivers video globally.</p><h4>Architecture</h4><pre>&lt;code&gt;Upload → Object Storage → Transcoder → CDN\n                                  ↓\n                            Metadata DB → Recommendation Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Transcoding:</strong> Multiple resolutions and bitrates (HLS/DASH).</li><li><strong>CDN:</strong> Cache segments at edge POPs for low latency.</li><li><strong>DRM:</strong> Protect premium content.</li><li><strong>Adaptive bitrate:</strong> Switch quality based on bandwidth.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Streaming"
      ],
      "keyPoints": [
        "Transcode uploads into multiple resolutions and bitrates.",
        "Deliver video segments through a global CDN.",
        "Use adaptive bitrate and DRM for playback quality and protection."
      ]
    },
    {
      "question": "Design Twitter's home timeline with fan-out strategy",
      "answer": "<p><strong>Twitter timeline</strong> uses a hybrid fan-out model to balance read and write load.</p><h4>Architecture</h4><pre>&lt;code&gt;Write: Tweet → Fan-out Service → Redis Timelines (normal users)\n                    ↓\n             Pull-on-read (celebrities)\nRead: Client → Timeline Service → Redis → Merge + Filter\n</code></pre><h4>Key Components</h4><ul><li><strong>Fan-out on write:</strong> Pre-build timelines for users with few followers.</li><li><strong>Pull on read:</strong> For celebrities, merge their tweets at request time.</li><li><strong>Caching:</strong> Redis sorted sets by tweet ID/time.</li><li><strong>Blending:</strong> Mix ads, ranked tweets, and recency.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Pre-build timelines for normal users with fan-out on write.",
        "Pull celebrity tweets at read time to avoid write amplification.",
        "Cache timelines in Redis and blend ads and ranking."
      ]
    },
    {
      "question": "Design a notification service for real-time delivery across push, email, and SMS",
      "answer": "<p><strong>Multi-channel notification service</strong> routes alerts across push, email, and SMS with reliability.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Notification Service → Priority Queue → Channel Routers\n                                       ↓\n                             User Preferences DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Channel adapters:</strong> FCM/APNs for push, SendGrid for email, Twilio for SMS.</li><li><strong>Preferences:</strong> Per-channel opt-ins and quiet hours.</li><li><strong>Retry & dead-letter:</strong> Handle provider failures.</li><li><strong>Priority:</strong> Critical alerts bypass rate limits.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Notifications"
      ],
      "keyPoints": [
        "Route alerts to channel-specific adapters (FCM/APNs, SendGrid, Twilio).",
        "Respect user preferences and quiet hours.",
        "Retry failed deliveries and prioritize critical alerts."
      ]
    },
    {
      "question": "Design a distributed message queue like Kafka",
      "answer": "<p><strong>Distributed message queue</strong> provides durable, ordered, high-throughput event streaming.</p><h4>Architecture</h4><pre>&lt;code&gt;Producer → Broker Cluster → Topics/Partitions → Consumer Groups\n              ↓\n         Replicated Log (ZooKeeper/KRaft)\n</code></pre><h4>Key Components</h4><ul><li><strong>Partitioning:</strong> Scale throughput; preserve order per partition.</li><li><strong>Replication:</strong> Leader-follower for fault tolerance.</li><li><strong>Retention:</strong> Time- or size-based log retention.</li><li><strong>Consumer groups:</strong> Load balance and scale consumers.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Message Queues",
        "Messaging"
      ],
      "keyPoints": [
        "Partition topics to scale throughput and preserve order per partition.",
        "Replicate partitions for fault tolerance.",
        "Use consumer groups to load-balance and scale consumers."
      ]
    },
    {
      "question": "Design a rate limiter for API abuse prevention",
      "answer": "<p><strong>Distributed rate limiter</strong> throttles requests using a shared state store.</p><h4>Architecture</h4><pre>&lt;code&gt;API Gateway → Rate Limit Middleware → Redis (Token Bucket / Sliding Window)\n</code></pre><h4>Key Components</h4><ul><li><strong>Token bucket:</strong> Allows controlled bursts while enforcing average rate.</li><li><strong>Sliding window:</strong> More precise than fixed window at boundaries.</li><li><strong>Distributed state:</strong> Redis with Lua for atomic increments.</li><li><strong>Headers:</strong> Return limit, remaining, and reset timestamps.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Rate Limiting"
      ],
      "keyPoints": [
        "Use token buckets to allow bursts while capping average rate.",
        "Implement sliding windows for precise boundary behavior.",
        "Store counters in Redis with atomic Lua scripts and expose rate headers."
      ]
    },
    {
      "question": "Design an online code editor with real-time collaborative coding",
      "answer": "<p><strong>Real-time collaborative editor</strong> synchronizes edits and presence across users.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → WebSocket Gateway → CRDT / OT Engine → Document Store\n            ↓\n       Presence Store (Redis)\n</code></pre><h4>Key Components</h4><ul><li><strong>CRDTs:</strong> Conflict-free replicated data types for offline support.</li><li><strong>Operational transform:</strong> Alternative for centralized coordination.</li><li><strong>Versioning:</strong> Snapshot history and undo/redo.</li><li><strong>Execution:</strong> Sandboxed runners for compile/run features.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Synchronize edits with CRDTs or operational transform.",
        "Store presence and cursor positions in Redis.",
        "Provide versioning, undo/redo, and sandboxed code execution."
      ]
    },
    {
      "question": "Design a payment processing system with fraud detection",
      "answer": "<p><strong>Payment system</strong> guarantees correctness, idempotency, and auditability through ledgers and reconciliation.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Idempotency Check → Payment Orchestrator → PSP Adapter → PSP\n                         ↓                            ↓\n                   Ledger DB                     Reconciliation Job\n</code></pre><h4>Key Components</h4><ul><li><strong>Ledger:</strong> Immutable double-entry records for every movement.</li><li><strong>Idempotency:</strong> Keys prevent duplicate charges.</li><li><strong>Reconciliation:</strong> Match internal ledger against PSP settlement reports.</li><li><strong>Retry policy:</strong> Exponential backoff with strict status queries.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Record every movement in an immutable double-entry ledger.",
        "Use idempotency keys to prevent duplicate charges.",
        "Reconcile internal records against PSP settlement reports daily."
      ]
    },
    {
      "question": "Design an analytics platform for metrics and logging",
      "answer": "<p><strong>Metrics and analytics platform</strong> ingests, stores, and queries time-series data at scale.</p><h4>Architecture</h4><pre>&lt;code&gt;Agents → Collectors → Stream → Time-Series DB (Prometheus/InfluxDB/VictoriaMetrics)\n                              ↓\n                       Long-term Store (S3)\n</code></pre><h4>Key Components</h4><ul><li><strong>Time-series DB:</strong> Optimized for high-cardinality ingestion and range queries.</li><li><strong>Aggregation:</strong> Pre-aggregate common queries; downsample old data.</li><li><strong>Retention:</strong> Hot → warm → cold tiers.</li><li><strong>Alerting:</strong> Rule engine evaluates thresholds on streaming data.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Ingest metrics through collectors into a time-series database.",
        "Pre-aggregate and downsample data to control query cost.",
        "Move older data to long-term storage and alert on thresholds."
      ]
    },
    {
      "question": "Design a file-sharing system like Dropbox",
      "answer": "<p><strong>File sharing service</strong> syncs files across devices with versioning and sharing.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Sync Service → Object Storage (S3)\n           ↓\n      Metadata DB → Versioning / Conflict Resolution\n</code></pre><h4>Key Components</h4><ul><li><strong>Chunking:</strong> Deduplicate by content hash (rsync-like).</li><li><strong>Delta sync:</strong> Transfer only changed blocks.</li><li><strong>Conflict resolution:</strong> Last-write-wins or manual merge.</li><li><strong>Sharing:</strong> Access control lists and share tokens.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Chunk files and deduplicate by content hash.",
        "Transfer only changed blocks with delta sync.",
        "Support versioning, conflict resolution, and ACL-based sharing."
      ]
    },
    {
      "question": "Design a parking payment system",
      "answer": "<p><strong>Parking system</strong> tracks spots, reservations, and payments.</p><h4>Schema</h4><pre>&lt;code&gt;lots(id, floors)\nspots(id, lot_id, floor, size, status)\ntickets(id, spot_id, vehicle_id, entry_time, exit_time, amount)\npayments(id, ticket_id, amount, status)\n</code></pre><h4>Key Components</h4><ul><li><strong>Spot allocation:</strong> Find nearest available spot by size.</li><li><strong>Payment:</strong> Calculate fare by duration; integrate PSP.</li><li><strong>Concurrency:</strong> Lock or compare-and-swap spot status.</li><li><strong>Monitoring:</strong> Occupancy sensors update status in real time.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Model lots, spots, tickets, and payments in a normalized schema.",
        "Allocate spots by size and location with atomic status updates.",
        "Calculate fares by duration and integrate a payment provider."
      ]
    },
    {
      "question": "Design a warehouse system for Amazon fulfillment centers",
      "answer": "<p><strong>Warehouse management system</strong> optimizes inventory placement, picking, packing, and shipping.</p><h4>Architecture</h4><pre>&lt;code&gt;Orders → WMS Core → Inventory DB → Pick/Pack Workflows → Shipping APIs\n          ↓\n    Robotics / Scanner Integration\n</code></pre><h4>Key Components</h4><ul><li><strong>Inventory:</strong> Track bin-level stock with reservations.</li><li><strong>Wave planning:</strong> Batch picks to minimize travel.</li><li><strong>Real-time sync:</strong> Barcode/RFID updates prevent overselling.</li><li><strong>Integration:</strong> Carrier APIs for labels and tracking.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Track bin-level inventory with reservations to prevent overselling.",
        "Batch picks into waves to minimize worker travel.",
        "Integrate scanners, robotics, and carrier APIs for fulfillment."
      ]
    },
    {
      "question": "Design Amazon.com to handle 10x more traffic",
      "answer": "<p><strong>Scaling Amazon.com 10x</strong> requires horizontal scaling, caching, and graceful degradation.</p><h4>Strategies</h4><ul><li><strong>Autoscaling:</strong> Kubernetes/ASG scale stateless services based on load.</li><li><strong>Caching:</strong> Redis for sessions, product catalog, and search results.</li><li><strong>Database:</strong> Read replicas, sharding, and cache-aside patterns.</li><li><strong>CDN:</strong> Edge cache static assets and product images.</li><li><strong>Degradation:</strong> Circuit breakers and static fallbacks.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Scalability"
      ],
      "keyPoints": [
        "Autoscale stateless services and cache catalogs in Redis.",
        "Scale databases with read replicas and sharding.",
        "Use a CDN and graceful degradation for static fallbacks."
      ]
    },
    {
      "question": "Design Amazon lockers for various locations",
      "answer": "<p><strong>Amazon Locker</strong> lets customers pick up orders from secure kiosks.</p><h4>Architecture</h4><pre>&lt;code&gt;Order → Locker Allocation Service → Locker Hub → Customer Notification\n                         ↓\n                   Locker State DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Allocation:</strong> Reserve nearest locker by size and availability.</li><li><strong>Access codes:</strong> Time-limited OTPs sent via SMS/app.</li><li><strong>Synchronization:</strong> Hub offline mode with local state and later sync.</li><li><strong>Monitoring:</strong> Sensor data for door open/close and capacity.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Reserve the nearest available locker by package size.",
        "Send time-limited OTPs for pickup via SMS or app.",
        "Support offline hub operation with later state sync."
      ]
    },
    {
      "question": "Design a food delivery app on a global scale (like Swiggy)",
      "answer": "<p><strong>Food/ride matching platform</strong> pairs customers with nearby providers in real time.</p><h4>Architecture</h4><pre>&lt;code&gt;Customer App → Matching Engine → Driver/Rider Location Store (Redis Geo)\n                    ↓\n            Notification Service → Driver App\n</code></pre><h4>Key Components</h4><ul><li><strong>Geo-indexing:</strong> Redis geospatial indexes or S2/H3 cells.</li><li><strong>Matching algorithm:</strong> Distance, ETA, rating, and surge pricing.</li><li><strong>Tracking:</strong> GPS streams update location every few seconds.</li><li><strong>Payments:</strong> Post-trip billing with tip and split support.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Index driver locations with geospatial queries or S2/H3 cells.",
        "Match based on distance, ETA, rating, and surge pricing.",
        "Stream GPS updates and bill after trip completion."
      ]
    },
    {
      "question": "Design a distributed cache system",
      "answer": "<p><strong>Distributed cache</strong> shares hot data across service instances to reduce database load.</p><h4>Architecture</h4><pre>&lt;code&gt;App → Cache Client → Cache Cluster (Redis/Memcached)\n  ↓ miss\nDatabase\n</code></pre><h4>Key Components</h4><ul><li><strong>Sharding:</strong> Consistent hashing to distribute keys.</li><li><strong>Replication:</strong> Read replicas for availability.</li><li><strong>Eviction:</strong> LRU/LFU policies.</li><li><strong>Cache patterns:</strong> Cache-aside, write-through, write-behind.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Caching",
        "Caching"
      ],
      "keyPoints": [
        "Shard cache keys with consistent hashing.",
        "Replicate for availability and evict with LRU/LFU.",
        "Use cache-aside, write-through, or write-behind patterns."
      ]
    },
    {
      "question": "Design a URL shortening service with hash collision handling",
      "answer": "<p>Design this system by clarifying requirements, estimating scale, and choosing components that balance consistency, availability, and cost.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Clarify functional and non-functional needs.</li><li><strong>Capacity:</strong> Estimate QPS, storage, and bandwidth.</li><li><strong>API & data model:</strong> Design endpoints and schema.</li><li><strong>Components:</strong> Use load balancers, caches, queues, and databases appropriately.</li><li><strong>Trade-offs:</strong> Discuss consistency, availability, and cost.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Clarify functional and non-functional requirements first.",
        "Estimate QPS, storage, and bandwidth for capacity planning.",
        "Justify component choices and discuss trade-offs."
      ]
    },
    {
      "question": "Design a Botnet architecture with master/slave communication",
      "answer": "<p><strong>Command-and-control architecture</strong> coordinates distributed nodes; discussed defensively for threat analysis.</p><h4>Architecture</h4><pre>&lt;code&gt;Master (C2) → Encrypted Channels → Bots\n   ↑                                    ↓\n   └──────── Reports / Heartbeats ←─────┘\n</code></pre><h4>Key Components</h4><ul><li><strong>Decentralized C2:</strong> Peer-to-peer or domain generation to resist takedown.</li><li><strong>Encryption:</strong> Hide traffic in common protocols.</li><li><strong>Detection defense:</strong> Rate limits, egress filtering, anomaly detection.</li><li><strong>Legitimate analog:</strong> Similar to bot orchestration or IoT fleet management.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "C2 uses encrypted or peer-to-peer channels to control bots.",
        "Defenses include egress filtering and anomaly detection.",
        "Legitimate parallels include IoT fleet orchestration."
      ]
    },
    {
      "question": "Design a Dropbox client application with chunking and sync",
      "answer": "<p><strong>File sharing service</strong> syncs files across devices with versioning and sharing.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Sync Service → Object Storage (S3)\n           ↓\n      Metadata DB → Versioning / Conflict Resolution\n</code></pre><h4>Key Components</h4><ul><li><strong>Chunking:</strong> Deduplicate by content hash (rsync-like).</li><li><strong>Delta sync:</strong> Transfer only changed blocks.</li><li><strong>Conflict resolution:</strong> Last-write-wins or manual merge.</li><li><strong>Sharing:</strong> Access control lists and share tokens.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Chunk files and deduplicate by content hash.",
        "Transfer only changed blocks with delta sync.",
        "Support versioning, conflict resolution, and ACL-based sharing."
      ]
    },
    {
      "question": "Design LeetCode platform with submissions, leaderboards, and contest management",
      "answer": "<p><strong>Real-time leaderboard</strong> ranks players by score with frequent updates and low read latency.</p><h4>Architecture</h4><pre>&lt;code&gt;Game Client → Score API → Stream (Kafka) → Leaderboard Worker → Redis Sorted Set\n                                                         ↓\n                                                   Persistent DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Redis sorted sets:</strong> O(log N) score updates and range queries.</li><li><strong>Sharding:</strong> Partition by game or tournament ID.</li><li><strong>Time windows:</strong> TTL keys for hourly/daily leaderboards.</li><li><strong>Persistence:</strong> Periodic snapshots to durable store.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Use Redis sorted sets for O(log N) score updates and range reads.",
        "Shard leaderboards by game or tournament.",
        "Expire time-windowed boards with TTLs and snapshot to durable storage."
      ]
    },
    {
      "question": "Design a Ticket Booking System like Ticketmaster",
      "answer": "<p><strong>Ticket booking</strong> manages inventory, reservations, and payments under high contention.</p><h4>Architecture</h4><pre>&lt;code&gt;User → Booking API → Inventory Service → Reservation (Redis/DB)\n                          ↓\n                   Payment → Confirmation\n</code></pre><h4>Key Components</h4><ul><li><strong>Inventory:</strong> Pessimistic locking or conditional writes for seat holds.</li><li><strong>Reservation TTL:</strong> Release unpaid holds after timeout.</li><li><strong>Queue:</strong> Virtual waiting room for popular events.</li><li><strong>Idempotency:</strong> Prevent duplicate bookings.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Hold inventory with conditional writes or pessimistic locks.",
        "Expire unpaid reservations after a TTL.",
        "Use a waiting room for high-demand events and idempotent bookings."
      ]
    },
    {
      "question": "Design an Ad Click Aggregator system",
      "answer": "<p><strong>Ad click aggregator</strong> counts clicks in near real time for billing and reporting.</p><h4>Architecture</h4><pre>&lt;code&gt;Click Events → Kafka → Aggregation (Flink/Spark) → OLAP (ClickHouse/Druid)\n                ↓\n         Fraud Filter\n</code></pre><h4>Key Components</h4><ul><li><strong>Stream processing:</strong> Windowed counts by campaign and hour.</li><li><strong>Deduplication:</strong> Drop duplicate click IDs.</li><li><strong>Fraud detection:</strong> Bot signatures and anomaly rules.</li><li><strong>Reporting:</strong> Pre-aggregated rollups for dashboards.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Process click events through a stream processor for windowed counts.",
        "Deduplicate clicks and filter fraud.",
        "Serve reports from an OLAP store with pre-aggregated rollups."
      ]
    },
    {
      "question": "Design a Global IP Address Blocking System",
      "answer": "<p><strong>Global IP blocking system</strong> distributes blocklists to edge proxies with low latency.</p><h4>Architecture</h4><pre>&lt;code&gt;Threat Intel → Blocklist Service → CDN/Edge Proxy (Nginx/Envoy)\n                     ↓\n              Regional Cache\n</code></pre><h4>Key Components</h4><ul><li><strong>Bloom filters:</strong> Compact representation for billions of IPs.</li><li><strong>Propagation:</strong> Push deltas to edge within seconds.</li><li><strong>TTL:</strong> Automatic expiration of entries.</li><li><strong>Audit:</strong> Log blocked requests for review.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Represent blocklists compactly with Bloom filters.",
        "Push delta updates to edge proxies quickly.",
        "Expire entries with TTLs and audit blocked requests."
      ]
    },
    {
      "question": "Design a Distributed Cache",
      "answer": "<p><strong>Distributed cache</strong> shares hot data across service instances to reduce database load.</p><h4>Architecture</h4><pre>&lt;code&gt;App → Cache Client → Cache Cluster (Redis/Memcached)\n  ↓ miss\nDatabase\n</code></pre><h4>Key Components</h4><ul><li><strong>Sharding:</strong> Consistent hashing to distribute keys.</li><li><strong>Replication:</strong> Read replicas for availability.</li><li><strong>Eviction:</strong> LRU/LFU policies.</li><li><strong>Cache patterns:</strong> Cache-aside, write-through, write-behind.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Caching",
        "Caching"
      ],
      "keyPoints": [
        "Shard cache keys with consistent hashing.",
        "Replicate for availability and evict with LRU/LFU.",
        "Use cache-aside, write-through, or write-behind patterns."
      ]
    },
    {
      "question": "Design a Trending Hashtags System (Top K)",
      "answer": "<p><strong>Trending topics</strong> find the most frequent terms over a sliding time window.</p><h4>Architecture</h4><pre>&lt;code&gt;Tweets/Posts → Stream Processor → Count-Min Sketch / Counters → Top-K Heap\n                                          ↓\n                                    API / Trending Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Count-Min Sketch:</strong> Approximate frequency with bounded memory.</li><li><strong>Sliding window:</strong> Decay older counts.</li><li><strong>Top-K:</strong> Min-heap to track leaders.</li><li><strong>Spam filtering:</strong> Remove manipulated trends.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Approximate term frequencies with Count-Min Sketch.",
        "Apply a sliding window to decay older counts.",
        "Track top-K with a min-heap and filter spam trends."
      ]
    },
    {
      "question": "Design a Webhook Callback System for real-time notifications",
      "answer": "<p><strong>Webhook callback system</strong> reliably delivers HTTP callbacks to customer endpoints.</p><h4>Architecture</h4><pre>&lt;code&gt;Event → Webhook Queue → Dispatcher → Customer Endpoint\n                          ↓\n                   Retry Scheduler + DLQ\n</code></pre><h4>Key Components</h4><ul><li><strong>Queue:</strong> Decouple event generation from delivery.</li><li><strong>Retries:</strong> Exponential backoff with jitter.</li><li><strong>Signing:</strong> HMAC signatures verify authenticity.</li><li><strong>DLQ:</strong> Inspect and replay failed deliveries.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Notifications"
      ],
      "keyPoints": [
        "Queue webhook events to decouple generation from delivery.",
        "Retry with exponential backoff and sign payloads with HMAC.",
        "Inspect failures in a dead-letter queue and support replay."
      ]
    },
    {
      "question": "Design a Payment System handling 10,000 TPS with external processing",
      "answer": "<p><strong>High-throughput payment system</strong> processes thousands of transactions per second reliably.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Load Balancer → Payment Service → Queue → Ledger Workers\n                         ↓\n                  Idempotency Store (Redis)\n</code></pre><h4>Key Components</h4><ul><li><strong>Async processing:</strong> Queue durable payment jobs.</li><li><strong>Ledger:</strong> Immutable double-entry bookkeeping.</li><li><strong>Sharding:</strong> Partition by account or region.</li><li><strong>Reconciliation:</strong> Nightly settlement matching.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Queue durable payment jobs for async ledger processing.",
        "Shard by account or region to scale writes.",
        "Maintain immutable ledgers and reconcile settlements nightly."
      ]
    },
    {
      "question": "Design Uber with focus on rider-driver matching flow",
      "answer": "<p><strong>Food/ride matching platform</strong> pairs customers with nearby providers in real time.</p><h4>Architecture</h4><pre>&lt;code&gt;Customer App → Matching Engine → Driver/Rider Location Store (Redis Geo)\n                    ↓\n            Notification Service → Driver App\n</code></pre><h4>Key Components</h4><ul><li><strong>Geo-indexing:</strong> Redis geospatial indexes or S2/H3 cells.</li><li><strong>Matching algorithm:</strong> Distance, ETA, rating, and surge pricing.</li><li><strong>Tracking:</strong> GPS streams update location every few seconds.</li><li><strong>Payments:</strong> Post-trip billing with tip and split support.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Index driver locations with geospatial queries or S2/H3 cells.",
        "Match based on distance, ETA, rating, and surge pricing.",
        "Stream GPS updates and bill after trip completion."
      ]
    },
    {
      "question": "Design a ride-sharing service with real-time driver location tracking",
      "answer": "<p><strong>Ride-sharing service</strong> matches riders with drivers and tracks trips in real time.</p><h4>Architecture</h4><pre>&lt;code&gt;Rider App → Matching Engine → Driver Location Store → Driver App\n               ↓\n        Pricing + Dispatch\n</code></pre><h4>Key Components</h4><ul><li><strong>Location stream:</strong> GPS updates via WebSocket/MQTT.</li><li><strong>Geo-matching:</strong> Find nearest available drivers.</li><li><strong>Surge pricing:</strong> Dynamic fare based on supply/demand.</li><li><strong>Trip state machine:</strong> Requested → accepted → ongoing → completed.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Stream GPS locations over WebSocket or MQTT.",
        "Match riders to nearest drivers using geo-indexing.",
        "Apply surge pricing and manage trip state transitions."
      ]
    },
    {
      "question": "Design a distributed rate limiter handling 1M requests/second",
      "answer": "<p><strong>Distributed rate limiter</strong> throttles requests using a shared state store.</p><h4>Architecture</h4><pre>&lt;code&gt;API Gateway → Rate Limit Middleware → Redis (Token Bucket / Sliding Window)\n</code></pre><h4>Key Components</h4><ul><li><strong>Token bucket:</strong> Allows controlled bursts while enforcing average rate.</li><li><strong>Sliding window:</strong> More precise than fixed window at boundaries.</li><li><strong>Distributed state:</strong> Redis with Lua for atomic increments.</li><li><strong>Headers:</strong> Return limit, remaining, and reset timestamps.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Rate Limiting"
      ],
      "keyPoints": [
        "Use token buckets to allow bursts while capping average rate.",
        "Implement sliding windows for precise boundary behavior.",
        "Store counters in Redis with atomic Lua scripts and expose rate headers."
      ]
    },
    {
      "question": "Design a Payment System like Stripe with ledger and idempotency",
      "answer": "<p><strong>Payment system</strong> guarantees correctness, idempotency, and auditability through ledgers and reconciliation.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Idempotency Check → Payment Orchestrator → PSP Adapter → PSP\n                         ↓                            ↓\n                   Ledger DB                     Reconciliation Job\n</code></pre><h4>Key Components</h4><ul><li><strong>Ledger:</strong> Immutable double-entry records for every movement.</li><li><strong>Idempotency:</strong> Keys prevent duplicate charges.</li><li><strong>Reconciliation:</strong> Match internal ledger against PSP settlement reports.</li><li><strong>Retry policy:</strong> Exponential backoff with strict status queries.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Record every movement in an immutable double-entry ledger.",
        "Use idempotency keys to prevent duplicate charges.",
        "Reconcile internal records against PSP settlement reports daily."
      ]
    },
    {
      "question": "Design a managed pub/sub or message queue used internally",
      "answer": "<p><strong>Distributed message queue</strong> provides durable, ordered, high-throughput event streaming.</p><h4>Architecture</h4><pre>&lt;code&gt;Producer → Broker Cluster → Topics/Partitions → Consumer Groups\n              ↓\n         Replicated Log (ZooKeeper/KRaft)\n</code></pre><h4>Key Components</h4><ul><li><strong>Partitioning:</strong> Scale throughput; preserve order per partition.</li><li><strong>Replication:</strong> Leader-follower for fault tolerance.</li><li><strong>Retention:</strong> Time- or size-based log retention.</li><li><strong>Consumer groups:</strong> Load balance and scale consumers.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Message Queues",
        "Messaging"
      ],
      "keyPoints": [
        "Partition topics to scale throughput and preserve order per partition.",
        "Replicate partitions for fault tolerance.",
        "Use consumer groups to load-balance and scale consumers."
      ]
    },
    {
      "question": "Design a live chat for YouTube live sessions",
      "answer": "<p><strong>Real-time chat</strong> delivers messages with low latency, persistence, and presence.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Chat Gateway (WebSocket) → Message Service → Message Store\n              ↓\n         Presence / Push Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Conversation sharding:</strong> Shard by conversation ID for scalability.</li><li><strong>Presence:</strong> Online status stored in Redis.</li><li><strong>Sync protocol:</strong> Sequence IDs and acknowledgments.</li><li><strong>Media:</strong> Offload images/video to object storage.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Streaming"
      ],
      "keyPoints": [
        "Shard conversations by ID to scale message storage.",
        "Track presence in Redis and sync with sequence IDs.",
        "Offload media to object storage and push missed messages."
      ]
    },
    {
      "question": "Design a real-time global leaderboard for a game at Pokemon Go scale",
      "answer": "<p><strong>Real-time leaderboard</strong> ranks players by score with frequent updates and low read latency.</p><h4>Architecture</h4><pre>&lt;code&gt;Game Client → Score API → Stream (Kafka) → Leaderboard Worker → Redis Sorted Set\n                                                         ↓\n                                                   Persistent DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Redis sorted sets:</strong> O(log N) score updates and range queries.</li><li><strong>Sharding:</strong> Partition by game or tournament ID.</li><li><strong>Time windows:</strong> TTL keys for hourly/daily leaderboards.</li><li><strong>Persistence:</strong> Periodic snapshots to durable store.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Use Redis sorted sets for O(log N) score updates and range reads.",
        "Shard leaderboards by game or tournament.",
        "Expire time-windowed boards with TTLs and snapshot to durable storage."
      ]
    },
    {
      "question": "Design a Google-scale web crawler for Search indexing",
      "answer": "<p><strong>Web crawler</strong> fetches, parses, and indexes pages at scale while respecting politeness.</p><h4>Architecture</h4><pre>&lt;code&gt;Seed URLs → URL Frontier → Fetchers → Content Parser → Indexer\n              ↓                ↓            ↓\n          Dedup Filter     Robots Cache   Link Extractor\n</code></pre><h4>Key Components</h4><ul><li><strong>URL frontier:</strong> Priority queue by domain and freshness.</li><li><strong>Politeness:</strong> Rate limits per domain from robots.txt.</li><li><strong>Deduplication:</strong> Bloom filter or hash set for seen URLs/content.</li><li><strong>Distributed:</strong> Partition frontier by domain to coordinate fetchers.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Search"
      ],
      "keyPoints": [
        "Use a prioritized URL frontier partitioned by domain.",
        "Respect robots.txt and enforce per-domain rate limits.",
        "Deduplicate URLs and content with Bloom filters or hashes."
      ]
    },
    {
      "question": "Design a distributed job scheduler for cron jobs across machines",
      "answer": "<p><strong>Distributed job scheduler</strong> triggers and executes periodic tasks reliably.</p><h4>Architecture</h4><pre>&lt;code&gt;Scheduler → Job Queue → Worker Pool → Result Store\n   ↓\nCron Expression DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Leader election:</strong> One scheduler instance active at a time.</li><li><strong>Missed fire:</strong> Catch-up policy for downtime.</li><li><strong>Idempotency:</strong> Job instances deduplicated.</li><li><strong>Monitoring:</strong> Track success, failure, and duration.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Use leader election so only one scheduler instance is active.",
        "Catch up missed fires after downtime.",
        "Dedupe job executions and monitor outcomes."
      ]
    },
    {
      "question": "Design Google Drive with versioning, sharing, and sync",
      "answer": "<p><strong>Cloud file storage</strong> supports uploads, versioning, sharing, and sync.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → API → Metadata DB + Object Storage\n           ↓\n      Versioning + Sharing ACLs\n</code></pre><h4>Key Components</h4><ul><li><strong>Chunked uploads:</strong> Resumable and deduplicated.</li><li><strong>Versioning:</strong> Store snapshots or deltas.</li><li><strong>ACLs:</strong> User/group permissions and share links.</li><li><strong>Sync:</strong> Long polling or WebSocket for change notifications.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Support resumable chunked uploads and deduplication.",
        "Store file versions and manage sharing with ACLs.",
        "Notify clients of changes via long polling or WebSocket."
      ]
    },
    {
      "question": "Design a notification system routing time-sensitive alerts across push, email, SMS",
      "answer": "<p><strong>Multi-channel notification service</strong> routes alerts across push, email, and SMS with reliability.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Notification Service → Priority Queue → Channel Routers\n                                       ↓\n                             User Preferences DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Channel adapters:</strong> FCM/APNs for push, SendGrid for email, Twilio for SMS.</li><li><strong>Preferences:</strong> Per-channel opt-ins and quiet hours.</li><li><strong>Retry & dead-letter:</strong> Handle provider failures.</li><li><strong>Priority:</strong> Critical alerts bypass rate limits.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Notifications"
      ],
      "keyPoints": [
        "Route alerts to channel-specific adapters (FCM/APNs, SendGrid, Twilio).",
        "Respect user preferences and quiet hours.",
        "Retry failed deliveries and prioritize critical alerts."
      ]
    },
    {
      "question": "Design a dynamic recommendation system for content personalization",
      "answer": "<p><strong>Recommendation system</strong> predicts relevant items for users from large catalogs.</p><h4>Architecture</h4><pre>&lt;code&gt;Events → Feature Store → Candidate Generation → Ranking Model → Serving\n</code></pre><h4>Key Components</h4><ul><li><strong>Candidate generation:</strong> Collaborative filtering or embeddings.</li><li><strong>Ranking:</strong> ML model scores relevance.</li><li><strong>Feature store:</strong> Real-time and batch features.</li><li><strong>A/B testing:</strong> Measure engagement and diversity.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Generate candidates with collaborative filtering or embeddings.",
        "Rank candidates with an ML relevance model.",
        "Serve with real-time features and measure via A/B tests."
      ]
    },
    {
      "question": "Design a streaming service with CDN and content delivery",
      "answer": "<p><strong>CDN</strong> caches content at edge locations close to users to reduce latency and origin load.</p><h4>Architecture</h4><pre>&lt;code&gt;User → Edge POP → Cache Hit → Serve\n            ↓ miss\n         Origin Fetch → Cache\n</code></pre><h4>Key Components</h4><ul><li><strong>Edge caching:</strong> Store static and dynamic content near users.</li><li><strong>Anycast DNS:</strong> Route users to nearest POP.</li><li><strong>Cache invalidation:</strong> TTL, purge APIs, and versioned URLs.</li><li><strong>Security:</strong> DDoS protection and WAF.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Cache content at edge POPs close to users.",
        "Route users to the nearest POP with anycast DNS.",
        "Invalidate caches with TTLs, purge APIs, and versioned URLs."
      ]
    },
    {
      "question": "Design an internal event logging system",
      "answer": "<p><strong>Cost-optimized logging</strong> balances ingest volume, retention, and query speed.</p><h4>Architecture</h4><pre>&lt;code&gt;Apps → Log Agent → Kafka → Hot Index (1-7d) → Warm Storage (S3) → Cold Archive\n              ↓\n         Sampling & Filtering\n</code></pre><h4>Key Components</h4><ul><li><strong>Sampling:</strong> Keep 100% of errors, sample debug logs.</li><li><strong>Compression:</strong> Parquet/ORC with columnar encoding.</li><li><strong>Tiered retention:</strong> Query recent logs fast; archive older logs cheaply.</li><li><strong>Cardinality control:</strong> Limit high-cardinality labels.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Sample verbose logs and retain all errors to reduce volume.",
        "Compress logs into columnar formats like Parquet.",
        "Move old logs through hot, warm, and cold storage tiers."
      ]
    },
    {
      "question": "Design a content delivery network (CDN)",
      "answer": "<p><strong>CDN</strong> caches content at edge locations close to users to reduce latency and origin load.</p><h4>Architecture</h4><pre>&lt;code&gt;User → Edge POP → Cache Hit → Serve\n            ↓ miss\n         Origin Fetch → Cache\n</code></pre><h4>Key Components</h4><ul><li><strong>Edge caching:</strong> Store static and dynamic content near users.</li><li><strong>Anycast DNS:</strong> Route users to nearest POP.</li><li><strong>Cache invalidation:</strong> TTL, purge APIs, and versioned URLs.</li><li><strong>Security:</strong> DDoS protection and WAF.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Cache content at edge POPs close to users.",
        "Route users to the nearest POP with anycast DNS.",
        "Invalidate caches with TTLs, purge APIs, and versioned URLs."
      ]
    },
    {
      "question": "Design a real-time chat application like WhatsApp for 2+ billion users",
      "answer": "<p><strong>Real-time chat</strong> delivers messages with low latency, persistence, and presence.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Chat Gateway (WebSocket) → Message Service → Message Store\n              ↓\n         Presence / Push Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Conversation sharding:</strong> Shard by conversation ID for scalability.</li><li><strong>Presence:</strong> Online status stored in Redis.</li><li><strong>Sync protocol:</strong> Sequence IDs and acknowledgments.</li><li><strong>Media:</strong> Offload images/video to object storage.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Shard conversations by ID to scale message storage.",
        "Track presence in Redis and sync with sequence IDs.",
        "Offload media to object storage and push missed messages."
      ]
    },
    {
      "question": "Design a Metrics Gathering System with time-series database",
      "answer": "<p><strong>Metrics and analytics platform</strong> ingests, stores, and queries time-series data at scale.</p><h4>Architecture</h4><pre>&lt;code&gt;Agents → Collectors → Stream → Time-Series DB (Prometheus/InfluxDB/VictoriaMetrics)\n                              ↓\n                       Long-term Store (S3)\n</code></pre><h4>Key Components</h4><ul><li><strong>Time-series DB:</strong> Optimized for high-cardinality ingestion and range queries.</li><li><strong>Aggregation:</strong> Pre-aggregate common queries; downsample old data.</li><li><strong>Retention:</strong> Hot → warm → cold tiers.</li><li><strong>Alerting:</strong> Rule engine evaluates thresholds on streaming data.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Ingest metrics through collectors into a time-series database.",
        "Pre-aggregate and downsample data to control query cost.",
        "Move older data to long-term storage and alert on thresholds."
      ]
    },
    {
      "question": "Design Twitter's home timeline with push/pull hybrid model",
      "answer": "<p><strong>Twitter timeline</strong> uses a hybrid fan-out model to balance read and write load.</p><h4>Architecture</h4><pre>&lt;code&gt;Write: Tweet → Fan-out Service → Redis Timelines (normal users)\n                    ↓\n             Pull-on-read (celebrities)\nRead: Client → Timeline Service → Redis → Merge + Filter\n</code></pre><h4>Key Components</h4><ul><li><strong>Fan-out on write:</strong> Pre-build timelines for users with few followers.</li><li><strong>Pull on read:</strong> For celebrities, merge their tweets at request time.</li><li><strong>Caching:</strong> Redis sorted sets by tweet ID/time.</li><li><strong>Blending:</strong> Mix ads, ranked tweets, and recency.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Notifications"
      ],
      "keyPoints": [
        "Pre-build timelines for normal users with fan-out on write.",
        "Pull celebrity tweets at read time to avoid write amplification.",
        "Cache timelines in Redis and blend ads and ranking."
      ]
    },
    {
      "question": "Design a trending topics detection system",
      "answer": "<p><strong>Trending topics</strong> find the most frequent terms over a sliding time window.</p><h4>Architecture</h4><pre>&lt;code&gt;Tweets/Posts → Stream Processor → Count-Min Sketch / Counters → Top-K Heap\n                                          ↓\n                                    API / Trending Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Count-Min Sketch:</strong> Approximate frequency with bounded memory.</li><li><strong>Sliding window:</strong> Decay older counts.</li><li><strong>Top-K:</strong> Min-heap to track leaders.</li><li><strong>Spam filtering:</strong> Remove manipulated trends.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Approximate term frequencies with Count-Min Sketch.",
        "Apply a sliding window to decay older counts.",
        "Track top-K with a min-heap and filter spam trends."
      ]
    },
    {
      "question": "Design a tweet search system with instant results",
      "answer": "<p><strong>Tweet search</strong> returns instant full-text results from a high-write stream.</p><h4>Architecture</h4><pre>&lt;code&gt;Tweets → Ingestion → Indexer → Search Index (Elasticsearch/Solr)\n                         ↓\n                    Query Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Inverted index:</strong> Terms to tweet IDs with positional info.</li><li><strong>Real-time indexing:</strong> Near-line updates from Kafka.</li><li><strong>Ranking:</strong> Recency, engagement, and relevance.</li><li><strong>Sharding:</strong> By time range or term.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Search"
      ],
      "keyPoints": [
        "Build an inverted index mapping terms to tweet IDs.",
        "Index new tweets in near real time from a stream.",
        "Rank results by recency, relevance, and engagement."
      ]
    },
    {
      "question": "Design a rate limiter for API gateway handling millions of requests/second",
      "answer": "<p><strong>Distributed rate limiter</strong> throttles requests using a shared state store.</p><h4>Architecture</h4><pre>&lt;code&gt;API Gateway → Rate Limit Middleware → Redis (Token Bucket / Sliding Window)\n</code></pre><h4>Key Components</h4><ul><li><strong>Token bucket:</strong> Allows controlled bursts while enforcing average rate.</li><li><strong>Sliding window:</strong> More precise than fixed window at boundaries.</li><li><strong>Distributed state:</strong> Redis with Lua for atomic increments.</li><li><strong>Headers:</strong> Return limit, remaining, and reset timestamps.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Rate Limiting"
      ],
      "keyPoints": [
        "Use token buckets to allow bursts while capping average rate.",
        "Implement sliding windows for precise boundary behavior.",
        "Store counters in Redis with atomic Lua scripts and expose rate headers."
      ]
    },
    {
      "question": "Design a messaging app like WhatsApp or Messenger",
      "answer": "<p><strong>Real-time chat</strong> delivers messages with low latency, persistence, and presence.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Chat Gateway (WebSocket) → Message Service → Message Store\n              ↓\n         Presence / Push Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Conversation sharding:</strong> Shard by conversation ID for scalability.</li><li><strong>Presence:</strong> Online status stored in Redis.</li><li><strong>Sync protocol:</strong> Sequence IDs and acknowledgments.</li><li><strong>Media:</strong> Offload images/video to object storage.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Shard conversations by ID to scale message storage.",
        "Track presence in Redis and sync with sequence IDs.",
        "Offload media to object storage and push missed messages."
      ]
    },
    {
      "question": "Design YouTube with video upload, transcoding, and streaming",
      "answer": "<p><strong>Video streaming platform</strong> ingests, transcodes, stores, and delivers video globally.</p><h4>Architecture</h4><pre>&lt;code&gt;Upload → Object Storage → Transcoder → CDN\n                                  ↓\n                            Metadata DB → Recommendation Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Transcoding:</strong> Multiple resolutions and bitrates (HLS/DASH).</li><li><strong>CDN:</strong> Cache segments at edge POPs for low latency.</li><li><strong>DRM:</strong> Protect premium content.</li><li><strong>Adaptive bitrate:</strong> Switch quality based on bandwidth.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Streaming"
      ],
      "keyPoints": [
        "Transcode uploads into multiple resolutions and bitrates.",
        "Deliver video segments through a global CDN.",
        "Use adaptive bitrate and DRM for playback quality and protection."
      ]
    },
    {
      "question": "Design a collaborative document editor like Google Docs",
      "answer": "<p>Design this system by clarifying requirements, estimating scale, and choosing components that balance consistency, availability, and cost.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Clarify functional and non-functional needs.</li><li><strong>Capacity:</strong> Estimate QPS, storage, and bandwidth.</li><li><strong>API & data model:</strong> Design endpoints and schema.</li><li><strong>Components:</strong> Use load balancers, caches, queues, and databases appropriately.</li><li><strong>Trade-offs:</strong> Discuss consistency, availability, and cost.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Clarify functional and non-functional requirements first.",
        "Estimate QPS, storage, and bandwidth for capacity planning.",
        "Justify component choices and discuss trade-offs."
      ]
    },
    {
      "question": "Design a coding competition platform with leaderboard and execution environment",
      "answer": "<p><strong>Real-time leaderboard</strong> ranks players by score with frequent updates and low read latency.</p><h4>Architecture</h4><pre>&lt;code&gt;Game Client → Score API → Stream (Kafka) → Leaderboard Worker → Redis Sorted Set\n                                                         ↓\n                                                   Persistent DB\n</code></pre><h4>Key Components</h4><ul><li><strong>Redis sorted sets:</strong> O(log N) score updates and range queries.</li><li><strong>Sharding:</strong> Partition by game or tournament ID.</li><li><strong>Time windows:</strong> TTL keys for hourly/daily leaderboards.</li><li><strong>Persistence:</strong> Periodic snapshots to durable store.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Use Redis sorted sets for O(log N) score updates and range reads.",
        "Shard leaderboards by game or tournament.",
        "Expire time-windowed boards with TTLs and snapshot to durable storage."
      ]
    },
    {
      "question": "Design a peer-to-peer money transfer system",
      "answer": "<p><strong>P2P transfer</strong> moves funds between user accounts instantly and safely.</p><h4>Architecture</h4><pre>&lt;code&gt;Sender → Transfer API → Ledger DB → Recipient\n                  ↓\n           Fraud / Compliance Checks\n</code></pre><h4>Key Components</h4><ul><li><strong>Ledger:</strong> Double-entry to maintain balance integrity.</li><li><strong>Idempotency:</strong> Prevent duplicate transfers.</li><li><strong>KYC/AML:</strong> Verify identities and screen transactions.</li><li><strong>Notifications:</strong> Confirm receipt to both parties.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Record transfers in a double-entry ledger.",
        "Use idempotency keys to avoid duplicate transfers.",
        "Run KYC/AML checks and notify both parties."
      ]
    },
    {
      "question": "Design a fraud detection pipeline for payment processing",
      "answer": "<p><strong>Payment system</strong> guarantees correctness, idempotency, and auditability through ledgers and reconciliation.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Idempotency Check → Payment Orchestrator → PSP Adapter → PSP\n                         ↓                            ↓\n                   Ledger DB                     Reconciliation Job\n</code></pre><h4>Key Components</h4><ul><li><strong>Ledger:</strong> Immutable double-entry records for every movement.</li><li><strong>Idempotency:</strong> Keys prevent duplicate charges.</li><li><strong>Reconciliation:</strong> Match internal ledger against PSP settlement reports.</li><li><strong>Retry policy:</strong> Exponential backoff with strict status queries.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Record every movement in an immutable double-entry ledger.",
        "Use idempotency keys to prevent duplicate charges.",
        "Reconcile internal records against PSP settlement reports daily."
      ]
    },
    {
      "question": "Design a ledger or bookkeeping service for transactions",
      "answer": "<p><strong>Payment system</strong> guarantees correctness, idempotency, and auditability through ledgers and reconciliation.</p><h4>Architecture</h4><pre>&lt;code&gt;API → Idempotency Check → Payment Orchestrator → PSP Adapter → PSP\n                         ↓                            ↓\n                   Ledger DB                     Reconciliation Job\n</code></pre><h4>Key Components</h4><ul><li><strong>Ledger:</strong> Immutable double-entry records for every movement.</li><li><strong>Idempotency:</strong> Keys prevent duplicate charges.</li><li><strong>Reconciliation:</strong> Match internal ledger against PSP settlement reports.</li><li><strong>Retry policy:</strong> Exponential backoff with strict status queries.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Record every movement in an immutable double-entry ledger.",
        "Use idempotency keys to prevent duplicate charges.",
        "Reconcile internal records against PSP settlement reports daily."
      ]
    },
    {
      "question": "Design a metrics service for application performance monitoring",
      "answer": "<p><strong>Metrics and analytics platform</strong> ingests, stores, and queries time-series data at scale.</p><h4>Architecture</h4><pre>&lt;code&gt;Agents → Collectors → Stream → Time-Series DB (Prometheus/InfluxDB/VictoriaMetrics)\n                              ↓\n                       Long-term Store (S3)\n</code></pre><h4>Key Components</h4><ul><li><strong>Time-series DB:</strong> Optimized for high-cardinality ingestion and range queries.</li><li><strong>Aggregation:</strong> Pre-aggregate common queries; downsample old data.</li><li><strong>Retention:</strong> Hot → warm → cold tiers.</li><li><strong>Alerting:</strong> Rule engine evaluates thresholds on streaming data.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Ingest metrics through collectors into a time-series database.",
        "Pre-aggregate and downsample data to control query cost.",
        "Move older data to long-term storage and alert on thresholds."
      ]
    },
    {
      "question": "Design a pizza shop software system",
      "answer": "<p><strong>pizza shop software system</strong> focuses on classes, interfaces, state machines, and concurrency boundaries.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Identify actors, use cases, and invariants.</li><li><strong>Entities:</strong> Model core classes and relationships.</li><li><strong>State machine:</strong> Track object lifecycle states.</li><li><strong>Concurrency:</strong> Handle multiple users or requests safely.</li><li><strong>Tests:</strong> Cover state transitions and edge cases.</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Low Level Design"
      ],
      "keyPoints": [
        "Identify actors, use cases, and invariants before modeling classes.",
        "Track object lifecycle with a state machine.",
        "Handle concurrent requests safely and cover edge cases with tests."
      ]
    },
    {
      "question": "Design a social network like Facebook or Instagram",
      "answer": "<p><strong>Social network</strong> supports profiles, posts, feeds, and real-time interactions at scale.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → API Gateway → Microservices (Profile, Post, Feed, Chat)\n                                ↓\n                         Graph DB + Blob Storage + Cache\n</code></pre><h4>Key Components</h4><ul><li><strong>Graph model:</strong> Users and relationships in a graph database.</li><li><strong>Feed:</strong> Fan-out or pull-based timeline.</li><li><strong>Media:</strong> Image/video storage and CDN.</li><li><strong>Privacy:</strong> Visibility rules on every post.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Model users and relationships in a graph database.",
        "Build feeds with fan-out or pull-on-read strategies.",
        "Store media in blob storage with a CDN and enforce privacy rules."
      ]
    },
    {
      "question": "Design a system to optimally fill a delivery truck",
      "answer": "<p><strong>Delivery truck optimization</strong> packs items to maximize space and minimize trips.</p><h4>Approach</h4><ul><li><strong>Bin packing:</strong> 3D variant of NP-hard knapsack problem.</li><li><strong>Heuristics:</strong> First-fit decreasing, best-fit decreasing.</li><li><strong>Constraints:</strong> Weight, fragility, delivery order, refrigeration.</li><li><strong>Optimization:</strong> OR-Tools or genetic algorithms for large fleets.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Model truck loading as a 3D bin-packing problem.",
        "Apply heuristics like first-fit decreasing under weight and fragility constraints.",
        "Use optimization solvers for large fleets."
      ]
    },
    {
      "question": "Design a temperature identification system with geographically distributed sensors",
      "answer": "<p><strong>Sensor data system</strong> ingests readings from geographically distributed devices.</p><h4>Architecture</h4><pre>&lt;code&gt;Sensor → IoT Gateway → Stream (Kafka) → Time-Series DB → Alerts\n</code></pre><h4>Key Components</h4><ul><li><strong>Ingestion:</strong> MQTT/CoAP for constrained devices.</li><li><strong>Time-series DB:</strong> Efficient storage of timestamped readings.</li><li><strong>Aggregation:</strong> Roll up by region and time window.</li><li><strong>Alerts:</strong> Threshold rules on streaming data.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Ingest sensor data via MQTT or CoAP through IoT gateways.",
        "Store timestamped readings in a time-series database.",
        "Aggregate by region and alert on threshold breaches."
      ]
    },
    {
      "question": "Design a registration system for a restaurant",
      "answer": "<p><strong>registration system for a restaurant</strong> focuses on classes, interfaces, state machines, and concurrency boundaries.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Identify actors, use cases, and invariants.</li><li><strong>Entities:</strong> Model core classes and relationships.</li><li><strong>State machine:</strong> Track object lifecycle states.</li><li><strong>Concurrency:</strong> Handle multiple users or requests safely.</li><li><strong>Tests:</strong> Cover state transitions and edge cases.</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Low Level Design"
      ],
      "keyPoints": [
        "Identify actors, use cases, and invariants before modeling classes.",
        "Track object lifecycle with a state machine.",
        "Handle concurrent requests safely and cover edge cases with tests."
      ]
    },
    {
      "question": "Design a system to find friends on social media",
      "answer": "<p><strong>Find friends</strong> suggests connections using contact imports and graph traversal.</p><h4>Architecture</h4><pre>&lt;code&gt;Contacts → Normalization → Graph DB (Neo4j/JanusGraph) → Recommendation API\n</code></pre><h4>Key Components</h4><ul><li><strong>Contact matching:</strong> Hash and compare phone/email.</li><li><strong>Mutual friends:</strong> Short-path graph queries.</li><li><strong>Privacy:</strong> Opt-in contact upload and blocking.</li><li><strong>Caching:</strong> Pre-compute suggestions for active users.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Normalize and hash contacts for privacy-preserving matching.",
        "Query mutual friends with graph traversals.",
        "Cache suggestions and respect opt-in/blocking preferences."
      ]
    },
    {
      "question": "Design a global chat service with multi-region support",
      "answer": "<p><strong>Real-time chat</strong> delivers messages with low latency, persistence, and presence.</p><h4>Architecture</h4><pre>&lt;code&gt;Client → Chat Gateway (WebSocket) → Message Service → Message Store\n              ↓\n         Presence / Push Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Conversation sharding:</strong> Shard by conversation ID for scalability.</li><li><strong>Presence:</strong> Online status stored in Redis.</li><li><strong>Sync protocol:</strong> Sequence IDs and acknowledgments.</li><li><strong>Media:</strong> Offload images/video to object storage.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Shard conversations by ID to scale message storage.",
        "Track presence in Redis and sync with sequence IDs.",
        "Offload media to object storage and push missed messages."
      ]
    },
    {
      "question": "Design a multi-region storage system with consistency guarantees",
      "answer": "<p><strong>Multi-region storage</strong> replicates data across geographies with chosen consistency.</p><h4>Architecture</h4><pre>&lt;code&gt;Write → Local Region → Async / Sync Replication → Remote Regions\n</code></pre><h4>Trade-offs</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Model</th><th style='padding:8px;border:1px solid #ddd;'>Consistency</th><th style='padding:8px;border:1px solid #ddd;'>Latency</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Synchronous</td><td style='padding:8px;border:1px solid #ddd;'>Strong</td><td style='padding:8px;border:1px solid #ddd;'>High</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Asynchronous</td><td style='padding:8px;border:1px solid #ddd;'>Eventual</td><td style='padding:8px;border:1px solid #ddd;'>Low</td></tr></table><h4>Key Components</h4><ul><li><strong>Conflict resolution:</strong> Vector clocks or last-write-wins.</li><li><strong>Quorum:</strong> Read/write consistency levels.</li><li><strong>Failover:</strong> DNS traffic steering to healthy regions.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Choose synchronous replication for strong consistency or async for low latency.",
        "Resolve conflicts with vector clocks or last-write-wins.",
        "Steer traffic to healthy regions with DNS failover."
      ]
    },
    {
      "question": "Design a recommendation and ranking system for a feed at billions of users",
      "answer": "<p><strong>Recommendation system</strong> predicts relevant items for users from large catalogs.</p><h4>Architecture</h4><pre>&lt;code&gt;Events → Feature Store → Candidate Generation → Ranking Model → Serving\n</code></pre><h4>Key Components</h4><ul><li><strong>Candidate generation:</strong> Collaborative filtering or embeddings.</li><li><strong>Ranking:</strong> ML model scores relevance.</li><li><strong>Feature store:</strong> Real-time and batch features.</li><li><strong>A/B testing:</strong> Measure engagement and diversity.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Machine Learning Systems"
      ],
      "keyPoints": [
        "Generate candidates with collaborative filtering or embeddings.",
        "Rank candidates with an ML relevance model.",
        "Serve with real-time features and measure via A/B tests."
      ]
    },
    {
      "question": "Design a personalized search feature for YouTube Shorts",
      "answer": "<p><strong>Personalized search</strong> combines query understanding with user preferences.</p><h4>Architecture</h4><pre>&lt;code&gt;Query → Parser → Retrieval (inverted index + embeddings) → Ranking → Results\n</code></pre><h4>Key Components</h4><ul><li><strong>Query understanding:</strong> Intent classification and spelling correction.</li><li><strong>Personalization:</strong> User embeddings from watch history.</li><li><strong>Ranking:</strong> Relevance, freshness, and engagement signals.</li><li><strong>Latency:</strong> Cache popular queries.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Machine Learning Systems",
        "Streaming",
        "Search"
      ],
      "keyPoints": [
        "Parse queries for intent and spelling correction.",
        "Personalize retrieval with user embeddings.",
        "Rank by relevance, freshness, and engagement."
      ]
    },
    {
      "question": "Design a rate limiter with token bucket algorithm for burst traffic",
      "answer": "<p><strong>Distributed rate limiter</strong> throttles requests using a shared state store.</p><h4>Architecture</h4><pre>&lt;code&gt;API Gateway → Rate Limit Middleware → Redis (Token Bucket / Sliding Window)\n</code></pre><h4>Key Components</h4><ul><li><strong>Token bucket:</strong> Allows controlled bursts while enforcing average rate.</li><li><strong>Sliding window:</strong> More precise than fixed window at boundaries.</li><li><strong>Distributed state:</strong> Redis with Lua for atomic increments.</li><li><strong>Headers:</strong> Return limit, remaining, and reset timestamps.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Rate Limiting"
      ],
      "keyPoints": [
        "Use token buckets to allow bursts while capping average rate.",
        "Implement sliding windows for precise boundary behavior.",
        "Store counters in Redis with atomic Lua scripts and expose rate headers."
      ]
    },
    {
      "question": "Design the Twitter/X timeline with client-side state management",
      "answer": "<p><strong>Twitter timeline</strong> uses a hybrid fan-out model to balance read and write load.</p><h4>Architecture</h4><pre>&lt;code&gt;Write: Tweet → Fan-out Service → Redis Timelines (normal users)\n                    ↓\n             Pull-on-read (celebrities)\nRead: Client → Timeline Service → Redis → Merge + Filter\n</code></pre><h4>Key Components</h4><ul><li><strong>Fan-out on write:</strong> Pre-build timelines for users with few followers.</li><li><strong>Pull on read:</strong> For celebrities, merge their tweets at request time.</li><li><strong>Caching:</strong> Redis sorted sets by tweet ID/time.</li><li><strong>Blending:</strong> Mix ads, ranked tweets, and recency.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Frontend System Design"
      ],
      "keyPoints": [
        "Pre-build timelines for normal users with fan-out on write.",
        "Pull celebrity tweets at read time to avoid write amplification.",
        "Cache timelines in Redis and blend ads and ranking."
      ]
    },
    {
      "question": "Design a media streaming website frontend like Netflix",
      "answer": "<p><strong>Video streaming platform</strong> ingests, transcodes, stores, and delivers video globally.</p><h4>Architecture</h4><pre>&lt;code&gt;Upload → Object Storage → Transcoder → CDN\n                                  ↓\n                            Metadata DB → Recommendation Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Transcoding:</strong> Multiple resolutions and bitrates (HLS/DASH).</li><li><strong>CDN:</strong> Cache segments at edge POPs for low latency.</li><li><strong>DRM:</strong> Protect premium content.</li><li><strong>Adaptive bitrate:</strong> Switch quality based on bandwidth.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Frontend System Design",
        "Streaming"
      ],
      "keyPoints": [
        "Transcode uploads into multiple resolutions and bitrates.",
        "Deliver video segments through a global CDN.",
        "Use adaptive bitrate and DRM for playback quality and protection."
      ]
    },
    {
      "question": "Design a search engine autocomplete system",
      "answer": "<p><strong>Autocomplete</strong> suggests completions as the user types with low latency.</p><h4>Architecture</h4><pre>&lt;code&gt;Query Prefix → Trie / Inverted Index → Top-K Suggestions\n</code></pre><h4>Key Components</h4><ul><li><strong>Trie:</strong> Prefix tree for fast lookups.</li><li><strong>Ranking:</strong> Popularity, personalization, and recency.</li><li><strong>Cache:</strong> CDN or edge cache for common prefixes.</li><li><strong>Debouncing:</strong> Reduce server calls while typing.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Search"
      ],
      "keyPoints": [
        "Use a trie or inverted index for prefix lookup.",
        "Rank suggestions by popularity, personalization, and recency.",
        "Cache common prefixes and debounce client requests."
      ]
    },
    {
      "question": "Design an elevator system for a building",
      "answer": "<p><strong>an elevator system for a building</strong> focuses on classes, interfaces, state machines, and concurrency boundaries.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Identify actors, use cases, and invariants.</li><li><strong>Entities:</strong> Model core classes and relationships.</li><li><strong>State machine:</strong> Track object lifecycle states.</li><li><strong>Concurrency:</strong> Handle multiple users or requests safely.</li><li><strong>Tests:</strong> Cover state transitions and edge cases.</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Low Level Design"
      ],
      "keyPoints": [
        "Identify actors, use cases, and invariants before modeling classes.",
        "Track object lifecycle with a state machine.",
        "Handle concurrent requests safely and cover edge cases with tests."
      ]
    },
    {
      "question": "Design an online poker game",
      "answer": "<p><strong>an online poker game</strong> focuses on classes, interfaces, state machines, and concurrency boundaries.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Identify actors, use cases, and invariants.</li><li><strong>Entities:</strong> Model core classes and relationships.</li><li><strong>State machine:</strong> Track object lifecycle states.</li><li><strong>Concurrency:</strong> Handle multiple users or requests safely.</li><li><strong>Tests:</strong> Cover state transitions and edge cases.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Low Level Design"
      ],
      "keyPoints": [
        "Identify actors, use cases, and invariants before modeling classes.",
        "Track object lifecycle with a state machine.",
        "Handle concurrent requests safely and cover edge cases with tests."
      ]
    },
    {
      "question": "Design a parking lot system with multiple floors and vehicle sizes",
      "answer": "<p><strong>Parking system</strong> tracks spots, reservations, and payments.</p><h4>Schema</h4><pre>&lt;code&gt;lots(id, floors)\nspots(id, lot_id, floor, size, status)\ntickets(id, spot_id, vehicle_id, entry_time, exit_time, amount)\npayments(id, ticket_id, amount, status)\n</code></pre><h4>Key Components</h4><ul><li><strong>Spot allocation:</strong> Find nearest available spot by size.</li><li><strong>Payment:</strong> Calculate fare by duration; integrate PSP.</li><li><strong>Concurrency:</strong> Lock or compare-and-swap spot status.</li><li><strong>Monitoring:</strong> Occupancy sensors update status in real time.</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Low Level Design"
      ],
      "keyPoints": [
        "Model lots, spots, tickets, and payments in a normalized schema.",
        "Allocate spots by size and location with atomic status updates.",
        "Calculate fares by duration and integrate a payment provider."
      ]
    },
    {
      "question": "Design a system that recommends in-flight movies matching flight time",
      "answer": "<p><strong>Recommendation system</strong> predicts relevant items for users from large catalogs.</p><h4>Architecture</h4><pre>&lt;code&gt;Events → Feature Store → Candidate Generation → Ranking Model → Serving\n</code></pre><h4>Key Components</h4><ul><li><strong>Candidate generation:</strong> Collaborative filtering or embeddings.</li><li><strong>Ranking:</strong> ML model scores relevance.</li><li><strong>Feature store:</strong> Real-time and batch features.</li><li><strong>A/B testing:</strong> Measure engagement and diversity.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Machine Learning Systems"
      ],
      "keyPoints": [
        "Generate candidates with collaborative filtering or embeddings.",
        "Rank candidates with an ML relevance model.",
        "Serve with real-time features and measure via A/B tests."
      ]
    },
    {
      "question": "Design a product recommendation system for e-commerce",
      "answer": "<p><strong>Recommendation system</strong> predicts relevant items for users from large catalogs.</p><h4>Architecture</h4><pre>&lt;code&gt;Events → Feature Store → Candidate Generation → Ranking Model → Serving\n</code></pre><h4>Key Components</h4><ul><li><strong>Candidate generation:</strong> Collaborative filtering or embeddings.</li><li><strong>Ranking:</strong> ML model scores relevance.</li><li><strong>Feature store:</strong> Real-time and batch features.</li><li><strong>A/B testing:</strong> Measure engagement and diversity.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Machine Learning Systems"
      ],
      "keyPoints": [
        "Generate candidates with collaborative filtering or embeddings.",
        "Rank candidates with an ML relevance model.",
        "Serve with real-time features and measure via A/B tests."
      ]
    },
    {
      "question": "Design a news website with personalized content feeds",
      "answer": "<p><strong>News platform</strong> must serve mixed content (text, video, ads) with low latency and personalization.</p><h4>Architecture</h4><pre>&lt;code&gt;CDN Edge → Article API → Headless CMS / Article DB\n   ↓            ↓\nVideo Origin   Ad Server\n   ↓            ↓\nAdaptive Bitrate Streaming  Programmatic Ad Auction\n</code></pre><h4>Key Components</h4><ul><li><strong>CDN:</strong> Cache static articles and media at edge.</li><li><strong>Video:</strong> HLS/DASH transcoding with multiple bitrates.</li><li><strong>Ads:</strong> Real-time bidding via header bidding or server-side ad insertion.</li><li><strong>Schema:</strong> Articles, authors, categories, comments, user preferences.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Cache articles and media at CDN edge locations.",
        "Deliver video via adaptive bitrate streaming (HLS/DASH).",
        "Integrate programmatic ad auctions for monetization."
      ]
    },
    {
      "question": "Design a shopping cart system with inventory management",
      "answer": "<p><strong>Shopping cart and inventory</strong> reserves stock while users check out.</p><h4>Architecture</h4><pre>&lt;code&gt;Cart Service → Inventory Service → Reservation (Redis/DB)\n                   ↓\n            Order Service\n</code></pre><h4>Key Components</h4><ul><li><strong>Reservation:</strong> Soft hold with TTL to prevent overselling.</li><li><strong>Consistency:</strong> Conditional updates or saga pattern.</li><li><strong>Abandoned cart:</strong> TTL release and recovery emails.</li><li><strong>Price:</strong> Freeze prices at add-to-cart or checkout.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Reserve inventory with a TTL to prevent overselling.",
        "Use conditional updates or sagas for consistency.",
        "Release abandoned holds and freeze prices at checkout."
      ]
    },
    {
      "question": "Design a system to interview candidates with scheduling",
      "answer": "<p><strong>system to interview candidates with scheduling</strong> focuses on classes, interfaces, state machines, and concurrency boundaries.</p><h4>Approach</h4><ul><li><strong>Requirements:</strong> Identify actors, use cases, and invariants.</li><li><strong>Entities:</strong> Model core classes and relationships.</li><li><strong>State machine:</strong> Track object lifecycle states.</li><li><strong>Concurrency:</strong> Handle multiple users or requests safely.</li><li><strong>Tests:</strong> Cover state transitions and edge cases.</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Low Level Design"
      ],
      "keyPoints": [
        "Identify actors, use cases, and invariants before modeling classes.",
        "Track object lifecycle with a state machine.",
        "Handle concurrent requests safely and cover edge cases with tests."
      ]
    },
    {
      "question": "Design a phone billing system",
      "answer": "<p><strong>Phone billing system</strong> rates and charges calls/data usage.</p><h4>Architecture</h4><pre>&lt;code&gt;Usage Records → Mediation → Rating Engine → Billing DB → Invoicing\n</code></pre><h4>Key Components</h4><ul><li><strong>CDR processing:</strong> Call detail records normalized and rated.</li><li><strong>Plans:</strong> Tariff rules for prepaid/postpaid.</li><li><strong>Real-time balance:</strong> OCS for prepaid subscribers.</li><li><strong>Reconciliation:</strong> Match network records with billing.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Payments"
      ],
      "keyPoints": [
        "Normalize and rate call detail records in a mediation layer.",
        "Apply prepaid/postpaid tariff rules and maintain balances.",
        "Reconcile network records with billing invoices."
      ]
    },
    {
      "question": "Design a news feed system with feed publishing and retrieval",
      "answer": "<p><strong>News feed</strong> publishes user posts and retrieves personalized timelines.</p><h4>Architecture</h4><pre>&lt;code&gt;Publish → Post Service → Fan-out / Pull → Feed Cache → Client\n</code></pre><h4>Key Components</h4><ul><li><strong>Fan-out:</strong> Push to followers for normal users.</li><li><strong>Pull:</strong> Fetch celebrity posts at read time.</li><li><strong>Ranking:</strong> Score by relevance and recency.</li><li><strong>Storage:</strong> Sharded post and feed data.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Push posts to followers for normal users.",
        "Pull celebrity posts at read time to avoid write amplification.",
        "Rank feeds by relevance and recency from sharded storage."
      ]
    },
    {
      "question": "Design YouTube with video upload, transcoding, and recommendation",
      "answer": "<p><strong>Recommendation system</strong> predicts relevant items for users from large catalogs.</p><h4>Architecture</h4><pre>&lt;code&gt;Events → Feature Store → Candidate Generation → Ranking Model → Serving\n</code></pre><h4>Key Components</h4><ul><li><strong>Candidate generation:</strong> Collaborative filtering or embeddings.</li><li><strong>Ranking:</strong> ML model scores relevance.</li><li><strong>Feature store:</strong> Real-time and batch features.</li><li><strong>A/B testing:</strong> Measure engagement and diversity.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "Streaming"
      ],
      "keyPoints": [
        "Generate candidates with collaborative filtering or embeddings.",
        "Rank candidates with an ML relevance model.",
        "Serve with real-time features and measure via A/B tests."
      ]
    },
    {
      "question": "Design Google Maps with routing and real-time traffic",
      "answer": "<p><strong>Mapping service</strong> provides routing, ETA, and real-time traffic.</p><h4>Architecture</h4><pre>&lt;code&gt;Map Tiles → CDN / Edge\nRouting → Graph Service (Contraction Hierarchies) → ETA Engine\nTraffic → Probe Stream → Aggregation → Live Edge Weights\n</code></pre><h4>Key Components</h4><ul><li><strong>Road graph:</strong> Partitioned by region; pre-computed shortcuts.</li><li><strong>Traffic probes:</strong> GPS data weighted by freshness and density.</li><li><strong>Tile serving:</strong> Vector tiles for smooth client rendering.</li><li><strong>Alternative routes:</strong> Compute multiple candidate paths.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Serve map tiles from CDN and route with contraction hierarchies.",
        "Ingest GPS probes to compute live traffic edge weights.",
        "Render vector tiles and offer alternative routes."
      ]
    }
  ]
}