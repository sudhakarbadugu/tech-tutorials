export const deepDive_m15_m19 = {
  module15: {
    'dns': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'DNS is the first hop of almost every internet request. The numbers below reflect operational experience from Cloudflare, Google Public DNS, Route 53, and large ISPs.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['DNS Lookup Latency', '20–100 ms', '1–10 ms', 'Cached recursive resolver: <1 ms; cold lookup: 50–200 ms'],
            ['TTL (Time to Live)', '300 s–24 h', '60 s–5 min', 'Short TTL for failover; long TTL for cache efficiency'],
            ['DNS Query QPS per Resolver', '1K–10K', '1M–10M', 'Cloudflare handles 1.1M+ queries per second globally'],
            ['Authoritative DNS Latency', '1–10 ms', '<1 ms', 'Route 53 authoritative response: <1 ms'],
            ['DNS Record Types in Use', 'A/AAAA/CNAME/TXT/NS', 'Same + ALIAS/SVCB/HTTPS', 'ALIAS records for apex flattening'],
            ['Recursive Resolver Cache Hit Rate', '80–95%', '95–99%', 'Higher TTL and popular domains increase hit rate'],
            ['DNSSEC Validation Overhead', '+1–5 ms', '+0.1–1 ms', 'Cryptographic signature validation'],
            ['Anycast POP Count', '10–50', '100–300+', 'Cloudflare: 300+ cities; faster edge resolution'],
            ['DDoS Mitigation Capacity', '10M–100M qps', '100M+ qps', 'Cloudflare blocked 71M rps DDoS in 2023'],
            ['DNS Propagation Delay', 'TTL-bound (minutes–hours)', 'Near-instant with API', 'Cloudflare/Route 53 push changes in <1 min']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'DNS is extremely resilient, but latency and cache behavior shift noticeably under load and attack.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–20 ms', 'Recursive cache hit; resolver healthy', 'Normal user browsing experience'],
            ['2× Load', '20–50 ms', 'Some cache eviction; fresh lookups rise', 'Monitor resolver CPU and cache efficiency'],
            ['5× Load', '50–100 ms', 'Resolver queues grow; TTL truncation begins', 'Rate limiting or capacity expansion needed'],
            ['10× Load', '100 ms–1 s', 'Recursive resolver CPU saturated', 'Anycast steering and more resolvers required'],
            ['DDoS / Attack', 'Timeout or NXDOMAIN', 'Authoritative servers rate-limit', 'DDoS absorption at edge; origin protected'],
            ['Cache Poisoning Attempt', 'Normal or filtered', 'DNSSEC validation rejects bogus records', 'DNSSEC + DNS-over-HTTPS mitigates']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'DNS architecture evolves from a single registrar record to a global, programmable traffic steering layer.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single A record from domain registrar to one server. TTL 1 hour. No CDN or failover.',
          '<strong>Stage 2: 1K–10K users</strong> — Route 53/Cloudflare DNS. A/AAAA + CNAME to origin. TTL 5 min. Basic health checks.',
          '<strong>Stage 3: 10K–100K users</strong> — GeoDNS routing: US-East → East servers, EU → Frankfurt servers. Latency-based routing for APIs.',
          '<strong>Stage 4: 100K–1M users</strong> — Anycast authoritative DNS. Apex ALIAS records for root domain to CDN. DNSSEC enabled.',
          '<strong>Stage 5: 1M–10M users</strong> — DNS as load balancer: weighted routing, failover, geofencing. Split-horizon DNS for internal vs external. DNS-over-HTTPS/TLS deployed.',
          '<strong>Stage 6: 10M+ users</strong> — Programmable DNS: edge rules steer traffic by region, device, load. Real-time DNS analytics. Integration with service mesh (Istio Gateway) for internal discovery.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'DNS spans client resolvers, recursive resolvers, authoritative servers, and edge CDNs. Each tier has distinct scaling concerns.',
        list: [
          '<strong>Client Tier:</strong> OS stub resolver caches locally (Windows: 24 h positive, 15 min negative). Browsers cache DNS per-connection. Chrome DNS prefetch resolves links early.',
          '<strong>Recursive Resolver Tier:</strong> ISP resolver or public resolver (8.8.8.8, 1.1.1.1). Maintains cache of millions of records. Supports DNS-over-HTTPS/TLS for privacy.',
          '<strong>Authoritative DNS Tier:</strong> Route 53, Cloudflare, NS1, Dyn. Returns records for the zone. Anycast IP for global low latency.',
          '<strong>CDN / Edge Tier:</strong> DNS CNAME to CDN edge (e.g., cdn.example.com → Cloudflare). Edge returns cached content; origin DNS hidden.',
          '<strong>Load Balancer Tier:</strong> DNS can point to L4/L7 load balancers (AWS NLB/ALB, NGINX). Geo-routing sends users to nearest LB.',
          '<strong>Origin / Application Tier:</strong> Application services register names in internal DNS (CoreDNS, Consul). Health checks remove failed nodes.',
          '<strong>Service Mesh Tier:</strong> Internal DNS is often replaced by service discovery (Envoy/Consul). DNS still used for bootstrap and external calls.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'DNS design choices depend on latency, availability, and traffic-steering needs.',
        table: {
          headers: ['Scenario', 'DNS Approach', 'TTL', 'Key Feature', 'Example'],
          rows: [
            ['Small website', 'Registrar DNS + CNAME', '1–24 h', 'Cheap, simple', 'Personal blog'],
            ['Global SaaS', 'Anycast authoritative DNS', '60–300 s', 'Geo + latency routing', 'Slack, Salesforce'],
            ['High-availability API', 'DNS failover + health checks', '30–60 s', 'Automatic origin failover', 'Payment API'],
            ['CDN-backed site', 'CNAME/ALIAS to CDN', '5 min–1 h', 'Edge caching; DDoS protection', 'News site'],
            ['Internal microservices', 'Private DNS (CoreDNS/Consul)', '10 s–1 min', 'Service discovery integration', 'Kubernetes cluster'],
            ['Privacy-sensitive app', 'DNS-over-HTTPS/TLS', 'N/A', 'Encrypt DNS queries', 'Brave, Firefox'],
            ['Multi-cloud failover', 'GeoDNS + weighted records', '30–60 s', 'Steer traffic across clouds', 'Netflix, Uber']
          ]
        }
      }
    ],
    'consensus-raft-paxos': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Consensus protocols are the foundation of strongly consistent distributed systems. These numbers come from etcd, Consul, ZooKeeper, and academic Paxos/Raft deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Raft Election Timeout', '150–300 ms', '100–200 ms', 'etcd default heartbeat: 100 ms; election: 1 s'],
            ['Paxos/Raft Write Latency', '1–10 ms (LAN)', '10–50 ms (WAN)', 'Majority quorum: 2 of 3 or 3 of 5'],
            ['etcd Write Throughput', '1K–10K writes/s', '10K+ writes/s', 'Limited by fsync latency and leader CPU'],
            ['etcd Read Throughput', '10K–50K reads/s', '100K+ reads/s', 'Reads can be served from follower'],
            ['Leader Election Time', '100 ms–1 s', '50–200 ms', 'Network partition triggers election'],
            ['Log Replication Lag', '1–10 ms', '<1 ms', 'Followers lag behind leader slightly'],
            ['Cluster Size', '3–5 nodes', '5–9 nodes', 'Odd numbers avoid split votes; etcd max 7–9'],
            ['Max Recommended Data Size', '1–8 GB', '100 MB–1 GB', 'etcd practical limit: ~8 GB; recommended <1 GB'],
            ['Snapshot Interval', '10K–100K entries', '1K–10K entries', 'Frequent snapshots limit log replay'],
            ['Consensus Messages per Write', '2N–4N', 'N+1 (optimized)', 'N = cluster size; leader → followers → acks']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Consensus systems trade write throughput and latency for strong consistency. Behavior degrades under leader saturation or partition.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–5 ms', 'Leader handles writes; followers replicate', 'Healthy quorum'],
            ['2× Write Load', '5–15 ms', 'Leader CPU/disk busier; latency rises', 'Still within SLA'],
            ['5× Write Load', '15–50 ms', 'Replication lag grows; followers catch up', 'Consider larger leader instance'],
            ['10× Write Load', '50 ms–1 s', 'Leader saturated; election risk', 'Scale by partitioning data or add followers'],
            ['Network Partition (minority leader)', 'Unavailable for writes', 'Majority partition elects new leader', 'CP behavior: consistency over availability'],
            ['Leader Failure', '100 ms–1 s outage', 'New leader elected; writes resume', 'Clients retry with backoff']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Consensus adoption evolves from single-node configuration to planet-scale coordination services.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single config file or SQLite. No consensus. Manual failover.',
          '<strong>Stage 2: 1K–10K users</strong> — ZooKeeper or etcd cluster (3 nodes). Stores config, leader election, locks. First introduction to Raft/Zab.',
          '<strong>Stage 3: 10K–100K users</strong> — etcd for Kubernetes (5 nodes). Service discovery in Consul. Distributed locks for cron jobs.',
          '<strong>Stage 4: 100K–1M users</strong> — Multiple independent consensus clusters per service domain (users, orders, inventory). Sharded consensus reduces per-cluster load.',
          '<strong>Stage 5: 1M–10M users</strong> — Consensus at the data layer: CockroachDB, Spanner use Paxos/Raft per range/shard. Application rarely sees raw consensus.',
          '<strong>Stage 6: 10M+ users</strong> — Multi-region consensus. Geographically aware quorums (e.g., Spanner leadership in user region). Calvin-style deterministic ordering for high throughput.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Consensus touches metadata, service discovery, locks, and distributed databases.',
        list: [
          '<strong>Application Tier:</strong> Use high-level abstractions (etcd leases, ZooKeeper recipes) rather than implement Raft/Paxos directly. Implement leader election for singleton background jobs.',
          '<strong>Database Tier:</strong> Distributed SQL (CockroachDB, Spanner, TiDB) uses Raft/Paxos per shard/range. etcd/ZooKeeper store metadata and schema.',
          '<strong>Cache Tier:</strong> Not directly consensus-based. Use distributed locks (RedLock with caveats, etcd) to coordinate cache warming or invalidation.',
          '<strong>Message Queue Tier:</strong> Kafka uses ZooKeeper/KRaft for controller metadata and partition leadership. NATS JetStream uses Raft for stream metadata.',
          '<strong>Load Balancer Tier:</strong> Service discovery (Consul, etcd) provides healthy backend lists to LBs. Health checks must be consistent; avoid split-brain routing.',
          '<strong>Service Mesh Tier:</strong> Istio/Envoy use control plane (often backed by etcd/Consul) for config distribution. Consensus ensures config consistency.',
          '<strong>Client Tier:</strong> Clients connect to leader for writes; followers can serve reads. Client libraries must handle leader redirects and election timeouts gracefully.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing consensus implementation, cluster size, and consistency model.',
        table: {
          headers: ['Scenario', 'Protocol', 'Cluster Size', 'Use Case', 'Example'],
          rows: [
            ['Kubernetes config/metadata', 'Raft (etcd)', '3–5 nodes', 'Cluster state, secrets, config', 'Kubernetes etcd'],
            ['Service discovery', 'Raft (Consul) / Gossip hybrid', '3–5 servers', 'Healthy instance registry', 'Consul service mesh'],
            ['Distributed locks', 'Raft / Paxos-based lock service', '3–5 nodes', 'Leader election, mutual exclusion', 'etcd leases, ZooKeeper'],
            ['Globally distributed SQL', 'Multi-Paxos / Raft per range', '3–5 replicas per shard', 'Strongly consistent transactions', 'Spanner, CockroachDB'],
            ['High-throughput metadata', 'Raft with batching', '5–7 nodes', 'Many small writes', 'TiKV, etcd'],
            ['Legacy Java ecosystem', 'Zab (ZooKeeper)', '3–5 nodes', 'Coordination recipes', 'Kafka 2.x, Hadoop'],
            ['Mobile/low-latency', 'Avoid raw consensus', 'N/A', 'Use AP + CRDTs instead', 'Collaborative editing']
          ]
        }
      }
    ],
    'distributed-id-generation': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Unique ID generation is a bottleneck in every large distributed system. The numbers below reflect Snowflake, UUID, and database-sequence deployments at Twitter, Discord, and Instagram.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Snowflake IDs per ms per worker', '1–4,096', '4,096', 'Twitter Snowflake: 12-bit sequence = 4,096/ms'],
            ['Snowflake ID Throughput', '1K–100K IDs/s', '1M–10M IDs/s', 'Scale by adding worker/datacenter IDs'],
            ['UUID v4 Generation Rate', '100K–1M/s', '1M–10M/s', 'Random; no coordination; 128 bits'],
            ['UUID v7 Generation Rate', '100K–1M/s', '1M+ /s', 'Sortable by time; improves DB insert locality'],
            ['Database Auto-Increment', '1K–10K/s', 'Bottleneck', 'Single-node write; not scalable'],
            ['Hi/Lo Allocation Range', '1–1,000 per batch', '1K–10K per batch', 'Hibernate optimist; reduces DB round trips'],
            ['Flake ID Latency', '<1 ms', '<0.1 ms', 'Local generation; no network call'],
            ['ID Size', '8 bytes (Snowflake)', '16 bytes (UUID)', 'Smaller IDs = better index density'],
            ['Clock Dependency', 'Yes (Snowflake)', 'No (UUID v4)', 'Snowflake needs NTP; clock backslide breaks ordering'],
            ['Sortability', 'Time-ordered (Snowflake)', 'Random (UUID v4)', 'Time-ordered IDs improve B-tree insert performance']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'ID generation must remain low-latency even when millions of IDs are requested per second.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '<1 ms', 'Local ID generation', 'No coordination overhead'],
            ['10× Load', '<1 ms', 'Sequence counter increments rapidly', 'Snowflake still within 4,096/ms per worker'],
            ['100× Load', '1–5 ms', 'Need more workers/datacenters', 'Scale horizontally by partitioning ID space'],
            ['1,000× Load', '5–20 ms', 'Coordinator / database allocation under pressure', 'Switch to fully local algorithms'],
            ['Clock Skew (Snowflake)', 'Generation pauses', 'Wait for clock to catch up', 'NTP synchronization critical'],
            ['Sequence Exhaustion', 'Rollover to next ms', 'Brief 1 ms wait', '12-bit sequence limits burst per worker']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'ID generation strategies scale from single-node databases to planet-wide ID factories.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Database auto-increment BIGINT primary key. Simple, monotonic, single-node only.',
          '<strong>Stage 2: 1K–10K users</strong> — UUID v4 as primary key. Avoids collisions; but random inserts hurt index locality.',
          '<strong>Stage 3: 10K–100K users</strong> — Hi/Lo sequence allocator. Batch-fetch IDs from DB to reduce contention.',
          '<strong>Stage 4: 100K–1M users</strong> — Snowflake-style IDs: 41-bit timestamp + 10-bit worker/datacenter + 12-bit sequence. Time-ordered, sortable, no DB coordination.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-datacenter Snowflake deployment. NTP + leap-second smearing. Dedicated ID-generation service.',
          '<strong>Stage 6: 10M+ users</strong> — Custom schemes: Twitter Snowflake, Discord Snowflake, Instagram IGNI. Hybrid: time-ordered + sharded counters. UUID v7 for new systems.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'ID generation integrates with application, database, cache, and analytics tiers.',
        list: [
          '<strong>Client Tier:</strong> Some IDs are generated client-side (UUID in browser/mobile) before upload to reduce latency. Examples: photo upload request IDs, client-generated trace IDs.',
          '<strong>Application Tier:</strong> ID-generation service or library. Snowflake worker per process. Batch pre-allocation for high-throughput paths. Libraries: Twitter Snowflake, Sonyflake, Instagram IGNI.',
          '<strong>Database Tier:</strong> Primary keys are time-ordered BIGINTs (Snowflake) or UUIDs. Use BIGSERIAL only for low-scale tables. Index density matters: 8-byte Snowflake vs 16-byte UUID halves index size.',
          '<strong>Cache Tier:</strong> No direct ID generation, but cache keys often embed IDs. Ensure ID space is large enough to avoid collisions in sharded caches.',
          '<strong>Queue Tier:</strong> Message IDs generated at producer. Kafka message keys derived from entity ID. Ordered partition keys benefit from time-ordered IDs.',
          '<strong>Analytics Tier:</strong> Time-ordered IDs simplify time-range queries and partition pruning. UUID v7 improves Parquet/ClickHouse sort order.',
          '<strong>Observability Tier:</strong> Distributed trace IDs and span IDs generated per request. Must be unique across services; 64-bit or 128-bit trace IDs.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Select ID generation strategy based on scale, ordering, and collision domain.',
        table: {
          headers: ['Scenario', 'Strategy', 'Ordering', 'Collision Risk', 'Example'],
          rows: [
            ['Single-node app', 'Auto-increment', 'Strong', 'None', 'Internal admin tool'],
            ['Distributed low-scale', 'UUID v4', 'Random', 'Negligible', 'Early SaaS'],
            ['Distributed high-scale', 'Snowflake / Sonyflake', 'Time-ordered', 'None with unique worker IDs', 'Twitter tweets'],
            ['Database-friendly inserts', 'UUID v7 / Snowflake', 'Time-ordered', 'Negligible', 'New OLTP systems'],
            ['Global multi-region', 'Snowflake with datacenter bits', 'Roughly time-ordered', 'None', 'Discord messages'],
            ['Embedded/mobile offline', 'UUID v4 / ULID', 'Random / time-ordered', 'Negligible', 'Mobile photo sync'],
            ['Ledger/audit', 'Database sequence + timestamp', 'Strict', 'None', 'Bank transactions']
          ]
        }
      }
    ],
    'distributed-locking': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Distributed locks coordinate exclusive access across processes. These numbers come from Redis Redlock, ZooKeeper, etcd, and DynamoDB lock implementations.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Lock Acquisition Latency', '1–10 ms', '<1 ms', 'etcd: ~1–3 ms; Redis: <1 ms local'],
            ['Lock Hold Timeout', '5–30 s', '1–5 s', 'Must exceed expected work duration'],
            ['Lease Renewal Interval', '1/3 of TTL', '100 ms–1 s', 'Keep-alive prevents expiration during work'],
            ['Redlock Quorum', 'N/2 + 1', 'N/2 + 1', 'Acquire majority of N Redis instances'],
            ['ZooKeeper Lock Latency', '5–20 ms', '1–5 ms', 'Sequential ephemeral nodes'],
            ['etcd Lock Throughput', '1K–5K locks/s', '10K+ locks/s', 'Limited by leader write throughput'],
            ['False-Unlock Probability', '<0.01%', '<0.001%', 'Fencing tokens prevent stale client unlock'],
            ['Lock Contention Rate', '1–10%', '10–50%', 'High contention suggests coarse lock or split'],
            ['Fencing Token Size', '64-bit', '64-bit', 'Monotonically increasing token per lock'],
            ['DynamoDB Lock Lease Duration', '10–60 s', '1–10 s', 'AWS DynamoDB Lock Client defaults']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Lock performance degrades as contention rises; good design minimizes lock scope and duration.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–5 ms', 'Locks acquired immediately', 'Low contention'],
            ['2× Load', '5–20 ms', 'Some waiting; queue forms', 'Monitor lock hold time'],
            ['5× Load', '20–100 ms', 'Frequent retries; lease renewal pressure', 'Consider finer-grained locks'],
            ['10× Load', '100 ms–1 s', 'Lock contention dominates latency', 'Redesign to avoid lock or use optimistic concurrency'],
            ['Network Partition', 'Stale lock risk', 'Fencing token required', 'Without token, split-brain writes possible'],
            ['Client Crash While Holding Lock', 'Lock expires after TTL', 'Other clients acquire after timeout', 'TTL must bound worst-case stale access']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Distributed locking evolves from database rows to dedicated coordination services.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No distributed locks. Single process or database row locks suffice.',
          '<strong>Stage 2: 1K–10K users</strong> — Database advisory locks (PostgreSQL pg_advisory_lock) or MySQL GET_LOCK. Simple but DB-dependent.',
          '<strong>Stage 3: 10K–100K users</strong> — Redis SET key NX EX for simple locks. Redlock for multi-master. Fencing token added for correctness.',
          '<strong>Stage 4: 100K–1M users</strong> — ZooKeeper or etcd locks. Sequential ephemeral nodes; automatic release on client disconnect. Leader election for singleton tasks.',
          '<strong>Stage 5: 1M–10M users</strong> — Application-level partitioning: per-user locks, per-shard locks. Locks become very short-lived. Optimistic concurrency preferred.',
          '<strong>Stage 6: 10M+ users</strong> — Avoid locks where possible: CRDTs, event sourcing, idempotent operations. Locks only for rare coordination (leader election, resource allocation).'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Locks appear across the stack but should be used sparingly at scale.',
        list: [
          '<strong>Client Tier:</strong> Client-side locking is generally avoided. Use optimistic UI and idempotent operations. For offline-first apps, CRDTs handle conflicts.',
          '<strong>Application Tier:</strong> Lock service wrapper around Redis/etcd/ZooKeeper. Acquire lock → do work → release. Always use fencing token when mutating shared state.',
          '<strong>Database Tier:</strong> Row-level locks (SELECT FOR UPDATE), advisory locks, or optimistic locking (version column). Database locks are easiest but do not span services.',
          '<strong>Cache Tier:</strong> Redis SET NX EX for short-lived locks. Redlock across multiple Redis masters for higher availability. Memcached add() can act as a lock.',
          '<strong>Message Queue Tier:</strong> Partitioning provides natural exclusivity: one consumer per partition processes a given key. Kafka consumer group acts as distributed lock for partition ownership.',
          '<strong>Service Mesh Tier:</strong> Sidecars do not provide locks but can enforce per-client rate limits that reduce lock contention indirectly.',
          '<strong>Coordination Service Tier:</strong> etcd/ZooKeeper store lock state. Highly available, consistent. Used for leader election and cluster-wide mutexes.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choose lock backend and pattern based on correctness and scale requirements.',
        table: {
          headers: ['Scenario', 'Lock Backend', 'Pattern', 'Correctness Guarantee', 'Example'],
          rows: [
            ['Single DB transaction', 'Database row lock', 'SELECT FOR UPDATE', 'ACID', 'Inventory decrement'],
            ['Leader election (cron)', 'etcd / ZooKeeper', 'Lease + watch', 'Strong with fencing', 'Kubernetes scheduler'],
            ['Short-lived resource lock', 'Redis SET NX EX', 'TTL lock', 'Best-effort (Redlock debates)', 'Rate-limit resource'],
            ['High-availability lock', 'etcd', 'Lease + mutex', 'Linearizable', 'Bank transfer orchestration'],
            ['Multi-region lock', 'Spanner / DynamoDB', 'Paxos-backed lock', 'Strong', 'Global seat reservation'],
            ['Per-user action dedup', 'Redis + idempotency key', 'Set-if-not-exists', 'Best-effort', 'Like button'],
            ['Avoid locks entirely', 'CRDT / event sourcing', 'Conflict-free', 'Eventual', 'Google Docs']
          ]
        }
      }
    ],
    'service-discovery': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Service discovery maps logical service names to physical endpoints. These numbers come from Consul, Eureka, Kubernetes DNS, and cloud load balancers.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Service Registry Lookup Latency', '1–10 ms', '<1 ms', 'In-memory client cache: <1 ms'],
            ['Eureka Registry Size', '100–1,000 services', '5,000–10,000+', 'Netflix Eureka: 10K+ service registrations'],
            ['Consul Query Latency', '1–5 ms', '<1 ms (cached)', 'Consul agent cache on each node'],
            ['Kubernetes DNS Resolution', '1–5 ms', '<1 ms (CoreDNS cache)', 'CoreDNS cache TTL default 30 s'],
            ['Health Check Interval', '5–30 s', '1–5 s', 'Faster checks = faster failover but more load'],
            ['Service Registration Propagation', '1–10 s', '100 ms–1 s', 'Gossip/consensus propagation delay'],
            ['Client Cache TTL', '30 s–5 min', '10–30 s', 'Balance freshness vs lookup load'],
            ['Max Endpoints per Service', '10–100', '1,000–10,000', 'Kubernetes service can front thousands of pods'],
            ['DNS TTL for Service Names', '5 s–5 min', '1–30 s', 'Short for dynamic environments'],
            ['Service Mesh Discovery Latency', '1–5 ms', '<1 ms', 'Envoy SDS (Service Discovery Service) push']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Service discovery must stay highly available; lookup storms can overwhelm registries.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–5 ms', 'Cached lookups; registry stable', 'Healthy'],
            ['2× Load', '5–10 ms', 'Some cache misses; registry QPS rises', 'Monitor registry CPU'],
            ['5× Load', '10–50 ms', 'Frequent re-registrations during churn', 'Scale registry or increase cache TTL'],
            ['10× Load', '50 ms–1 s', 'Registry approaching limits', 'Add registry nodes; shard by service'],
            ['Thundering Herd (cache miss)', 'Spike then recover', 'Many simultaneous lookups', 'Use jitter and longer TTL'],
            ['Registry Failure', 'Client cache degrades gracefully', 'Stale endpoints possible', 'Client-side caching essential for availability']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Service discovery evolves from hardcoded hosts to dynamic, automated platforms.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Hardcoded IP/hostnames in config. Single server per service. Manual updates.',
          '<strong>Stage 2: 1K–10K users</strong> — DNS round-robin or static load balancer. Manual addition of backends.',
          '<strong>Stage 3: 10K–100K users</strong> — Dedicated service registry: Eureka, Consul. Self-registration on startup. Client-side load balancing (Ribbon).',
          '<strong>Stage 4: 100K–1M users</strong> — Kubernetes + CoreDNS. Services register automatically. Ingress controllers route by name. Health checks remove failed pods.',
          '<strong>Stage 5: 1M–10M users</strong> — Service mesh discovery: Istio/Consul Connect. Envoy sidecars get endpoints via SDS. mTLS identity tied to service account.',
          '<strong>Stage 6: 10M+ users</strong> — Multi-cluster service discovery. Global control plane federates services across regions. Cell-based discovery isolates failures.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Service discovery spans clients, DNS, registries, and load balancers.',
        list: [
          '<strong>Client Tier:</strong> SDKs cache endpoint lists and refresh periodically. Retry next endpoint on failure. DNS resolver uses short TTL for service names.',
          '<strong>DNS Tier:</strong> CoreDNS/Kube-DNS resolves service names to cluster IPs. External DNS (Route 53, Cloudflare) exposes services publicly.',
          '<strong>Registry Tier:</strong> Consul, Eureka, ZooKeeper, etcd store service metadata. Highly available consensus-backed registries for critical services.',
          '<strong>Load Balancer Tier:</strong> AWS ALB/NLB, NGINX, HAProxy query registry or use DNS to discover backends. Health checks mark instances in/out.',
          '<strong>Application Tier:</strong> Services self-register on startup and deregister on shutdown. Heartbeat/lease keeps registration alive.',
          '<strong>Service Mesh Tier:</strong> Envoy sidecars receive endpoint lists from Istio Pilot/Consul. Circuit breaker, retries, and mTLS configured centrally.',
          '<strong>Observability Tier:</strong> Service graph derived from discovery metadata. Track registration/deregistration events and unhealthy endpoints.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Service discovery choices depend on platform, scale, and consistency needs.',
        table: {
          headers: ['Scenario', 'Discovery Mechanism', 'Lookup Latency', 'Best For', 'Example'],
          rows: [
            ['Simple VM deployment', 'DNS round-robin', '1–50 ms', 'Static or slow-changing backends', 'Early web app'],
            ['Spring/Java microservices', 'Eureka + Ribbon', '1–5 ms', 'Netflix OSS ecosystem', 'Legacy Netflix stack'],
            ['Multi-cloud / VM', 'Consul', '1–5 ms', 'Service mesh-ready registry', 'Nomad, VM fleet'],
            ['Kubernetes-native', 'CoreDNS + Endpoints API', '<1 ms (cached)', 'Container orchestration', 'Cloud-native SaaS'],
            ['Service mesh', 'Istio SDS / Consul Connect', '<1 ms', 'mTLS + traffic management', 'Istio on Kubernetes'],
            ['Serverless', 'Cloud provider discovery', 'Variable', 'Function-to-function calls', 'AWS Lambda function URLs'],
            ['Global multi-cluster', 'Federated control plane', '1–10 ms', 'Cross-region service routing', 'Google Anthos']
          ]
        }
      }
    ],
    'vector-clocks': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Vector clocks track causality in distributed systems. These numbers come from Dynamo, Riak, Cassandra, and distributed systems research.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Vector Clock Size', 'N × 8 bytes', 'N × 16 bytes', 'N = number of replicas/nodes'],
            ['Replicas (N) in Practice', '3', '3–7', 'More replicas = larger clock'],
            ['Concurrent Update Rate', '0.01–1%', '1–10% during partitions', 'Higher during network splits'],
            ['Conflict Resolution Time', '1–10 ms', '1–100 ms', 'Last-write-wins: fast; CRDT merge: varies'],
            ['Divergent Version Count', '1–2', '2–10+', 'Unreconciled siblings after partition'],
            ['Siblings per Key (Riak)', '1–2', '2–5', 'Riak warns when siblings exceed limit'],
            ['Vector Clock Pruning Interval', '1K–10K updates', '100–1K updates', 'Remove stale entries to bound size'],
            ['Clock Comparison Latency', '1 µs–1 ms', '<1 µs', 'Compare N counters; CPU-bound'],
            ['Storage Overhead', '0.1–1%', '1–5%', 'Depends on value size and replica count'],
            ['Application-Resolved Conflicts', '1–10%', '10–50%', 'Business logic needed for semantic reconciliation']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Vector clocks add metadata overhead and occasionally require application-level conflict resolution.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '+0.1–1 ms', 'Clock appended; no conflicts', 'Minimal overhead'],
            ['2× Load', '+1–5 ms', 'Sibling comparisons increase', 'Still manageable'],
            ['5× Load', '+5–20 ms', 'More concurrent writes per key', 'Conflict resolution dominates'],
            ['10× Load', '+20–100 ms', 'Many siblings; app reconciliation needed', 'Consider reducing partition count or using CRDTs'],
            ['Network Partition', 'Versions diverge', 'Siblings accumulate', 'Return multiple versions to client'],
            ['Partition Heal', 'Merge latency spikes', 'Anti-entropy reconciles clocks', 'Read repair or background repair needed']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Vector clock usage grows with replication and the need for causal reasoning.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No vector clocks. Single database with strong consistency.',
          '<strong>Stage 2: 1K–10K users</strong> — First replicated database. Last-write-wins timestamps. Occasional lost updates.',
          '<strong>Stage 3: 10K–100K users</strong> — Vector clocks in Dynamo/Riak per key. Application learns to handle sibling objects.',
          '<strong>Stage 4: 100K–1M users</strong> — Bounded vector clocks with pruning. Dotted version vectors reduce size. CRDTs for specific data types.',
          '<strong>Stage 5: 1M–10M users</strong> — Hybrid consistency: vector clocks for shopping cart, LWW for analytics. Automated conflict resolution for common cases.',
          '<strong>Stage 6: 10M+ users</strong> — Vector clocks largely hidden behind CRDT libraries and database internals. Application sees merged values.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Vector clocks live in the data layer but affect application and client design.',
        list: [
          '<strong>Client Tier:</strong> Clients may receive multiple versions (siblings) and must choose or merge. Mobile offline apps merge local and server versions.',
          '<strong>Application Tier:</strong> Code reads vector clock metadata, compares versions, and resolves conflicts. Idempotency keys reduce concurrent-update conflicts.',
          '<strong>Database Tier:</strong> Dynamo, Riak, Voldemort store vector clocks per object. Cassandra uses timestamps (LWW) by default; vector clocks optional in older designs.',
          '<strong>Cache Tier:</strong> Caches usually store a single resolved value. Vector clock reconciliation happens at origin; cache may briefly serve stale resolved value.',
          '<strong>Queue Tier:</strong> Event streams carry version metadata. Consumers process events idempotently; out-of-order delivery handled by version comparison.',
          '<strong>Analytics Tier:</strong> Causal analytics uses vector clocks to reconstruct event partial orders. Less common now with CRDTs and strong logs.',
          '<strong>Service Mesh Tier:</strong> Not directly related, but distributed tracing spans form a partial order similar in concept to vector clocks.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use vector clocks vs alternatives.',
        table: {
          headers: ['Scenario', 'Approach', 'Conflict Handling', 'Complexity', 'Example'],
          rows: [
            ['Single writer per key', 'LWW timestamp', 'Overwrite', 'Low', 'User profile update'],
            ['Multi-replica shopping cart', 'Vector clock / CRDT', 'Merge (union)', 'Medium', 'Amazon cart'],
            ['Collaborative editing', 'CRDT', 'Automatic merge', 'High', 'Google Docs'],
            ['Bank balance', 'Strong consistency / consensus', 'No conflicts', 'Medium', 'Account ledger'],
            ['Analytics counters', 'LWW or approximate counters', 'Lossy acceptable', 'Low', 'Page views'],
            ['Distributed session store', 'Vector clock + TTL', 'Merge or discard oldest', 'Medium', 'Riak sessions'],
            ['Mobile sync', 'Version vectors / CRDT', 'Automatic merge', 'Medium', 'iCloud, Dropbox']
          ]
        }
      }
    ]
  },
  module16: {
    'inverted-index': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Inverted indexes power search engines by mapping terms to documents. These numbers reflect Elasticsearch, Solr, and web-scale indexing at Google and Bing.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Index Size vs Raw Text', '30–50% of raw', '20–30% with compression', 'Google: index ~10–20% of web text'],
            ['Documents per Shard', '1M–50M', '10M–100M', 'Elasticsearch recommends 20–40 GB per shard'],
            ['Query Latency (p99)', '10–100 ms', '1–10 ms', 'Cached term lookups and filter bitsets'],
            ['Indexing Throughput', '1K–10K docs/s', '100K+ docs/s', 'Bulk indexing with segment merges'],
            ['Term Dictionary Size', '10K–1M terms', '1B+ terms', 'Web search: billions of unique tokens'],
            ['Posting List Length', '10–1,000 docs', '1M+ docs', 'Stop words have huge posting lists'],
            ['Segment Merge Latency', '100 ms–1 s', '1–10 s', 'Lucene background merges segments'],
            ['Memory per Query', '1–10 MB', '100 MB–1 GB', 'Aggregations and sorting consume heap'],
            ['Replica Count', '1', '1–3', 'Replicas improve read throughput and HA'],
            ['Search Cluster Nodes', '3–10', '100–1,000+', 'Elasticsearch clusters with 1,000+ nodes exist']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Search performance depends on index size, query complexity, and caching.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '10–50 ms', 'Simple term queries hit cache', 'Healthy'],
            ['2× Load', '50–100 ms', 'Filter cache pressure; some disk reads', 'Monitor heap and cache hit rate'],
            ['5× Load', '100 ms–1 s', 'Aggregations and sorts consume CPU', 'Add replicas or optimize queries'],
            ['10× Load', '1–5 s', 'GC pressure; node hotspotting', 'Shard allocation and query routing need tuning'],
            ['Indexing Spike', 'Query latency rises', 'Merge throttling activates', 'Separate indexing and search clusters'],
            ['Large Fanout Query', '100 ms–1 s', 'Many posting lists intersected', 'Use skip lists and pruning']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Inverted index systems scale from a single search library to globally distributed search clusters.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Database LIKE queries. No inverted index. Slow and unscalable.',
          '<strong>Stage 2: 1K–10K users</strong> — Embedded search library (Lucene, SQLite FTS). Single node. Good for small datasets.',
          '<strong>Stage 3: 10K–100K users</strong> — Elasticsearch or Solr cluster (3–6 nodes). Sharded inverted index. Basic replicas for HA.',
          '<strong>Stage 4: 100K–1M users</strong> — Dedicated search tier. Index sharding by document ID or time. Caching layer for top queries. Query routing by language/region.',
          '<strong>Stage 5: 1M–10M users</strong> — Separate indexing and search clusters. Near-real-time indexing with Kafka → Elasticsearch. Personalized ranking overlays.',
          '<strong>Stage 6: 10M+ users</strong> — Custom indexing pipeline: document ingestion → tokenizer → sharded index builders → distributed serving. Google/Bing-scale: index partitions by term range and document range.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Inverted index architecture spans ingestion, storage, query, and ranking layers.',
        list: [
          '<strong>Client Tier:</strong> Search box with autocomplete and spell correction. Faceted filters. Pagination and sorting. Query sent to search API.',
          '<strong>Gateway Tier:</strong> Rate limiting, query parsing, authentication. Routes queries to appropriate search cluster/shard. Caches popular results.',
          '<strong>Application Tier:</strong> Query builder transforms user text into boolean/filter/aggregation queries. Ranking layer blends BM25 score with business signals.',
          '<strong>Index Storage Tier:</strong> Lucene segments on disk: term dictionary, posting lists, stored fields, doc values. SSD strongly preferred.',
          '<strong>Cache Tier:</strong> Filter cache, query cache, field data cache. Redis may cache top search results. Warmup queries prepopulate caches.',
          '<strong>Database Tier:</strong> Source of truth for documents. Search index is derived from DB via CDC or application writes. Reindex from DB on corruption.',
          '<strong>Queue Tier:</strong> Kafka/SQS buffers document updates. Indexers consume in batches for high throughput. Dead letter queue for failed indexing.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Search engine selection and index design by use case.',
        table: {
          headers: ['Scenario', 'Engine', 'Sharding Strategy', 'Key Optimization', 'Example'],
          rows: [
            ['Small product catalog', 'SQLite FTS / Meilisearch', 'Single node', 'Prefix matching, typo tolerance', 'Shopify small store'],
            ['E-commerce search', 'Elasticsearch', 'By category or shard count', 'Facets, synonyms, boosting', 'Amazon product search'],
            ['Log analytics', 'Elasticsearch / OpenSearch', 'By time', 'Hot/warm/cold tiers, ILM', 'ELK stack'],
            ['Web search', 'Custom (Lucene-based)', 'By term + document range', 'Crawling, PageRank, pruning', 'Google, Bing'],
            ['Mobile app search', 'Algolia / Meilisearch', 'Managed', 'Latency <100 ms, typo tolerance', 'E-commerce mobile app'],
            ['Security search', 'Splunk / OpenSearch', 'By time + source', 'RBAC, field-level security', 'SIEM'],
            ['Geo search', 'Elasticsearch geo-shapes', 'By geohash', 'Bounding box + distance filters', 'Restaurant finder']
          ]
        }
      }
    ],
    'typeahead-autocomplete': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Typeahead systems suggest completions as users type. These numbers come from Google Search, Amazon, Netflix, and Twitter autocomplete deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Suggestion Latency (p99)', '10–50 ms', '<10 ms', 'Must feel instantaneous; 100 ms is perceptible'],
            ['Prefix Length Processed', '1–3 chars', '1 char', 'Google starts suggesting after 1 character'],
            ['Suggestions Returned', '5–10', '10–20', 'Mobile: 5; desktop: 10'],
            ['Query Log Volume', '1K–1M events/s', '10M+ events/s', 'Every keystroke can be logged for ranking'],
            ['Prefix Index Size', '1M–10M prefixes', '100M–1B+', 'Google: billions of prefixes'],
            ['Index Update Frequency', 'Minutes–hours', 'Seconds–minutes', 'Trending queries updated faster'],
            ['Cache Hit Rate', '80–95%', '95–99%', 'Popular prefixes cached at edge'],
            ['Personalized Suggestions Ratio', '10–30%', '30–50%', 'Netflix/Amazon personalize heavily'],
            ['Mobile Typo Correction Rate', '5–15%', '20–30%', 'Mobile keyboards generate more errors'],
            ['Ranking Signals', 'Popularity, recency', '+ user history, location, context', 'ML models rank suggestions']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Autocomplete must serve millions of keystrokes per second with very low latency.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '<20 ms', 'Cache hits dominate', 'Instant feel'],
            ['2× Load', '20–50 ms', 'Some cache misses; origin lookups', 'Still acceptable'],
            ['5× Load', '50–100 ms', 'Origin CPU rises; may drop suggestions', 'Add edge cache or replicas'],
            ['10× Load', '100 ms–1 s', 'Degraded experience; suggestions stale', 'Scale serving tier; precompute hot prefixes'],
            ['Trending Event Spike', 'Spike then cached', 'Trending queries precomputed', 'Twitter pre-builds trending suggestions'],
            ['Cold Prefix (long tail)', '50–200 ms', 'Database lookup or fallback', 'Acceptable for rare queries']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Autocomplete evolves from database prefix queries to a dedicated real-time suggestion service.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No autocomplete. Static list or database LIKE query on every keystroke.',
          '<strong>Stage 2: 1K–10K users</strong> — Database prefix index. Cache top queries in Redis. Debounce keystrokes (300 ms).',
          '<strong>Stage 3: 10K–100K users</strong> — Trie in memory (prefix tree) or Elasticsearch completion suggester. Top 10 prefixes precomputed. CDN edge caching.',
          '<strong>Stage 4: 100K–1M users</strong> — Dedicated autocomplete service. Prefix index sharded alphabetically. Real-time query log aggregation updates suggestions.',
          '<strong>Stage 5: 1M–10M users</strong> — Personalized autocomplete per user. ML ranking model. A/B testing of suggestion quality. Geo/context-aware suggestions.',
          '<strong>Stage 6: 10M+ users</strong> — Planet-scale: sharded prefix-serving clusters, edge caches at CDN, predictive prefetch. Google Search typeahead serves billions of queries daily.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Typeahead systems combine edge caching, fast in-memory indexes, and ranking services.',
        list: [
          '<strong>Client Tier:</strong> Debounce input (150–300 ms). Cancel in-flight requests. Render cached suggestions instantly. Handle mobile typos.',
          '<strong>CDN / Edge Tier:</strong> Cache top-N suggestions for popular prefixes. Cloudflare Workers can run autocomplete at edge.',
          '<strong>Gateway Tier:</strong> Rate limit autocomplete endpoints (high QPS). Authenticate users. Route to nearest autocomplete cluster.',
          '<strong>Application Tier:</strong> Autocomplete service hosts trie/prefix index. Fuzzy matching for typos. Filters suggestions by user permissions/region.',
          '<strong>Cache Tier:</strong> Redis stores hot prefix → suggestions. LRU eviction. Cache top 1M prefixes. Update asynchronously.',
          '<strong>Database / Data Warehouse Tier:</strong> Query logs aggregated into prefix frequency tables. Trending queries computed via streaming (Flink/Spark).',
          '<strong>ML / Ranking Tier:</strong> Model scores suggestions by popularity, personalization, and context. Rank top 10 for each prefix.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Autocomplete architecture choices by product needs.',
        table: {
          headers: ['Scenario', 'Index Structure', 'Latency Target', 'Personalization', 'Example'],
          rows: [
            ['Small catalog', 'Database prefix index', '<100 ms', 'None', 'Local business directory'],
            ['E-commerce search', 'Trie + Redis cache', '<50 ms', 'Moderate', 'Amazon search box'],
            ['Social media mentions', 'Inverted index + trie', '<30 ms', 'High', 'Twitter @mentions'],
            ['Global web search', 'Sharded prefix index', '<10 ms', 'High', 'Google Search'],
            ['Command palette', 'Local trie', '<10 ms', 'None', 'VS Code command palette'],
            ['Video streaming', 'Personalized ML ranking', '<50 ms', 'High', 'Netflix search'],
            ['Maps/location', 'Geo-tuned trie', '<50 ms', 'By location', 'Google Maps search']
          ]
        }
      }
    ],
    'geohash-quadtree': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Geohashes and quadtrees spatially index location data. These numbers come from Uber, Foursquare, Google Maps, and MongoDB/Elasticsearch geo deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Geohash Precision Levels', '1–12 chars', '6–9 chars', 'Higher precision = smaller cell'],
            ['Cell Size at Precision 6', '~1.2 km × 0.6 km', 'Same', 'Useful for city-level queries'],
            ['Cell Size at Precision 9', '~4.8 m × 4.8 m', 'Same', 'Useful for exact location'],
            ['Quadtree Depth', '10–20 levels', '20–30 levels', 'Each level splits cell into 4'],
            ['Points per Leaf Node', '10–100', '1–10', 'Higher depth = fewer points per leaf'],
            ['Radius Query Latency', '1–10 ms', '<1 ms', 'Find cells overlapping radius, then filter'],
            ['Index Size per Point', '8–32 bytes', '16–64 bytes', 'Geohash + point + reference'],
            ['Uber Driver Locations', '1M+', '10M+', 'Updated every few seconds globally'],
            ['Geospatial QPS', '1K–10K', '100K–1M+', 'Uber dispatches use massive geo query volume'],
            ['H3 Resolution Levels', '0–15', '8–10 typical', 'Hexagonal grid; Uber H3 for analytics']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Geo queries must balance index precision, query area, and point density.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–10 ms', 'Small radius; few candidate cells', 'Healthy'],
            ['2× Load', '10–20 ms', 'More candidate points to filter', 'Add replicas'],
            ['5× Load', '20–50 ms', 'Large query radius; many cells', 'Tune geohash precision'],
            ['10× Load', '50–200 ms', 'Hotspot cells saturated', 'Shard by geohash prefix'],
            ['Dense Urban Area', 'Higher latency', 'Many points per cell', 'Use finer precision or quadtree'],
            ['Sparse Rural Area', 'Lower latency', 'Few points; broader cells acceptable', 'Coarser precision works']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Geo indexing evolves from database distance queries to specialized spatial systems.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Haversine distance query in SQL. Full table scan. Only works for tiny datasets.',
          '<strong>Stage 2: 1K–10K users</strong> — Database geospatial index (PostGIS, MySQL spatial). Bounding box queries.',
          '<strong>Stage 3: 10K–100K users</strong> — Geohash index in Redis or Elasticsearch. Radial searches via neighbor geohashes. Static POI data.',
          '<strong>Stage 4: 100K–1M users</strong> — Quadtree or R-tree in memory for hot regions. Sharding by geohash prefix. Real-time vehicle/person location updates.',
          '<strong>Stage 5: 1M–10M users</strong> — H3 or S2 geometry library. Hexagonal cells unify aggregation and query. Separate hot (active drivers) and cold (POI) indexes.',
          '<strong>Stage 6: 10M+ users</strong> — Custom spatial databases (Google S2, Uber H3, Foursquare Pilgrim). Multi-level indexes, predictive caching, and ML-driven geofencing.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Geospatial systems combine spatial indexing, real-time streams, and map visualization.',
        list: [
          '<strong>Client Tier:</strong> Map SDK (Mapbox, Google Maps) displays points and polygons. Client sends location and viewport. Caches tiles and search results.',
          '<strong>CDN / Edge Tier:</strong> Serves map tiles and static POI data. Edge caches popular location search results.',
          '<strong>Gateway Tier:</strong> Rate limits geo queries. Validates bounding box size to prevent expensive queries. Routes to nearest geo cluster.',
          '<strong>Application Tier:</strong> Geo service computes geohash/quadtree cells for query. Filters candidates by radius or polygon. Ranks results by distance/score.',
          '<strong>Cache Tier:</strong> Redis stores hot geohash cells → point IDs. Caches recent location updates with short TTL. Pub/sub for live driver location.',
          '<strong>Database Tier:</strong> Stores point/region data indexed by geohash or spatial index. MongoDB 2dsphere, PostgreSQL PostGIS, Elasticsearch geo_shape.',
          '<strong>Stream / Queue Tier:</strong> Kafka ingests GPS updates from mobile devices. Flink computes geohash aggregations and heatmaps in real time.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Spatial indexing and grid choices by use case.',
        table: {
          headers: ['Scenario', 'Index', 'Shape', 'Precision', 'Example'],
          rows: [
            ['Store locator', 'Geohash + Redis', 'Rectangle cells', '6–7 chars', 'Retail store finder'],
            ['Ride matching', 'Quadtree / KD-tree', 'Recursive squares', 'Fine in cities', 'Uber dispatch'],
            ['Delivery zones', 'H3 / S2', 'Hexagons', '8–10', 'DoorDash zones'],
            ['Map visualizations', 'Quadtree tiles', 'Squares', 'Tile zoom level', 'Google Maps'],
            ['Geo analytics', 'H3', 'Hexagons', '7–9', 'Uber movement data'],
            ['Fencing/alerts', 'R-tree / S2', 'Arbitrary polygons', 'High', 'Geofencing apps'],
            ['Search by polygon', 'PostGIS / Elasticsearch geo_shape', 'Polygons', 'High', 'Real estate search']
          ]
        }
      }
    ]
  },
  module17: {
    'news-feed-overview': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'News feed systems deliver personalized content streams. These numbers reflect Twitter, Facebook, Instagram, and LinkedIn scale.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['DAU', '1M–10M', '500M+', 'Facebook: ~2B DAU; Twitter/X: ~250M'],
            ['Posts Created per Day', '1M–10M', '500M+', 'Includes original posts, replies, reshares'],
            ['Feed Reads per Day', '100M–1B', '10B+', 'Each user refreshes feed many times'],
            ['Fanout per Post (median)', '100–1,000', '10–1,000', 'Celebrities have millions of followers'],
            ['Feed Items Returned', '10–20', '20–50', 'Infinite scroll loads more on demand'],
            ['Feed Generation Latency (p99)', '100 ms–1 s', '50–200 ms', 'Pull-based fanout on read can be slower'],
            ['Ranking Model Latency', '10–50 ms', '<10 ms', 'ML scoring per candidate post'],
            ['Cache Hit Rate for Feed', '80–95%', '95–99%', 'Precomputed feeds cached in Redis/Memcached'],
            ['Storage per User Feed', '1–10 KB', '10–100 KB', 'Top N post IDs + metadata'],
            ['Global Edge Cache Hit Rate', '60–80%', '80–90%', 'CDN caches media; API caches metadata']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'News feed systems face massive read fanout and must balance freshness with latency.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '50–200 ms', 'Read precomputed feed from cache', 'Healthy'],
            ['2× Load', '200–500 ms', 'Cache misses rise; DB reads increase', 'Add feed cache replicas'],
            ['5× Load', '500 ms–1 s', 'Feed generation queues build', 'Scale fanout workers and ranking'],
            ['10× Load', '1–3 s', 'Hot celebrities cause fanout storms', 'Use pull model for mega-celebrities'],
            ['Breaking News Spike', 'Spike then cache', 'Trending content preloaded', 'Precompute popular feeds'],
            ['Ranking Model Failure', 'Fallback to chronological', 'Simpler feed served quickly', 'Graceful degradation']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'News feed architecture evolves from database queries to a dedicated feed platform.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — SQL query: SELECT posts FROM friends ORDER BY time. Works until follower graph grows.',
          '<strong>Stage 2: 1K–10K users</strong> — Indexed timeline query with pagination. Redis cache for each user\'s feed.',
          '<strong>Stage 3: 10K–100K users</strong> — Fan-out-on-write: when user posts, push post ID to followers\' feed lists. Feed read is O(1) list fetch.',
          '<strong>Stage 4: 100K–1M users</strong> — Hybrid fanout: push for normal users, pull for celebrities. Feed aggregator merges and ranks.',
          '<strong>Stage 5: 1M–10M users</strong> — Distributed feed service. Separate hot and cold feeds. ML ranking. Real-time updates via WebSocket/SSE.',
          '<strong>Stage 6: 10M+ users</strong> — Global feed platform. Geo-partitioned fanout. Personalized ranking at edge. Twitter\'s home timeline served from in-memory caches.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'A news feed platform spans clients, CDNs, feed services, ranking, storage, and messaging.',
        list: [
          '<strong>Client Tier:</strong> Mobile and web apps display feed with infinite scroll. Prefetch next page. Upload new posts and reactions.',
          '<strong>CDN / Edge Tier:</strong> Caches media (images, videos) and feed API responses. Edge computes reduce origin load.',
          '<strong>Gateway Tier:</strong> Authenticates users, rate limits reads/writes, routes to feed service. API versioning supports client updates.',
          '<strong>Feed Service Tier:</strong> Retrieves user feed list from cache. Merges push and pull sources. Applies pagination and filters.',
          '<strong>Ranking Tier:</strong> ML model scores candidates (engagement probability, recency, relevance). Runs in separate service for latency isolation.',
          '<strong>Cache Tier:</strong> Redis/Memcached stores feed lists per user. TAO-style graph cache for social graph. CDN for media.',
          '<strong>Database / Queue Tier:</strong> Relational/NoSQL DB stores posts and social graph. Kafka delivers fanout events to feed builders.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'News feed design trade-offs.',
        table: {
          headers: ['Scenario', 'Fanout Model', 'Latency', 'Complexity', 'Example'],
          rows: [
            ['Small social network', 'Fan-out-on-read', '100 ms–1 s', 'Low', 'Early Twitter'],
            ['Normal users (<10K followers)', 'Fan-out-on-write', '<100 ms read', 'Medium', 'Facebook friends'],
            ['Mega-celebrities', 'Fan-out-on-read (pull)', '<200 ms read', 'Medium', 'Celebrity tweets'],
            ['Real-time updates', 'Push + WebSocket', '<1 s propagation', 'High', 'Live sports feeds'],
            ['Interest-based feeds', 'Hybrid + ML ranking', '<200 ms', 'High', 'TikTok For You'],
            ['Enterprise activity feed', 'Fan-out-on-write', '<100 ms', 'Low', 'LinkedIn feed'],
            ['Geo-local feed', 'Geo-sharded fanout', '<200 ms', 'High', 'Nextdoor']
          ]
        }
      }
    ],
    'news-feed-data-model': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'News feed data models must store users, posts, social graphs, and feed lists at scale.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Users Table Rows', '1M–10M', '1B+', 'Facebook: ~3B accounts'],
            ['Posts Table Rows', '10M–100M', '100B+', 'Includes all historical posts'],
            ['Social Graph Edges', '10M–100M', '1T+', 'Follows, friendships, subscriptions'],
            ['Feed List Entries per User', '100–1,000', '1,000–10,000', 'Only top N kept hot; rest cold'],
            ['Post Metadata Size', '100 bytes–1 KB', '1–10 KB', 'IDs, text, media refs, engagement counters'],
            ['Media Object Size', '10 KB–10 MB', 'Same', 'Images compressed; videos much larger'],
            ['Index Size (social graph)', '10–100 GB', '10–100 TB', 'Graph databases or sharded relational'],
            ['Write QPS (posts)', '10–100', '100K+', 'Includes reactions and comments'],
            ['Read QPS (feed + graph)', '1K–10K', '10M+', 'Feed reads dominate'],
            ['Cold Storage Ratio', '10–30% active', '70–90% cold', 'Old posts moved to cheaper storage']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Data model performance depends on access patterns and how hot data is cached.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–10 ms', 'Hot user/post rows in cache', 'Healthy'],
            ['2× Load', '10–50 ms', 'Some cache misses; DB reads', 'Add cache capacity'],
            ['5× Load', '50–200 ms', 'Graph traversal queries slow', 'Add graph cache (TAO)'],
            ['10× Load', '200 ms–1 s', 'DB hotspots on popular users', 'Shard by user_id'],
            ['Viral Post', 'Read amplification', 'Engagement counters spike', 'Counter sharding or rate counting'],
            ['Feed Backfill', '1–5 s', 'Reconstruct feed from graph + posts', 'Rare; cache miss path']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Data model evolution for feed systems.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single users and posts tables. Foreign keys for friendships. Simple joins.',
          '<strong>Stage 2: 1K–10K users</strong> — Denormalize feed table: user_id → ordered list of post_ids. Index by time.',
          '<strong>Stage 3: 10K–100K users</strong> — Separate social graph store. Posts sharded by author_id. Feed lists in Redis.',
          '<strong>Stage 4: 100K–1M users</strong> — Graph database or TAO-like cache for follows/friends. Object store (S3) for media. Metadata in distributed SQL/NoSQL.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-datacenter replication. Cold storage tier for old posts. Counter service for likes/shares.',
          '<strong>Stage 6: 10M+ users</strong> — Federated data model. User data geo-partitioned. Event sourcing for posts. Separate real-time and analytics pipelines.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Feed data model components.',
        list: [
          '<strong>User Store:</strong> User profiles, auth, preferences. Sharded by user_id. Cache profile data heavily.',
          '<strong>Post Store:</strong> Immutable post content and metadata. Object storage for media. Metadata indexed by time and author.',
          '<strong>Social Graph Store:</strong> Follows/friends lists. TAO cache (Facebook) or graph DB. Read-heavy; eventual consistency OK.',
          '<strong>Feed List Store:</strong> Per-user feed: list of post IDs. Redis/Memcached for hot feeds. Persistent backing store for cold reconstruction.',
          '<strong>Engagement Store:</strong> Counters for likes, comments, shares. Counter sharding for viral posts. Real-time + batch reconciliation.',
          '<strong>Media Store:</strong> S3/GCS + CDN. Multiple resolutions and codecs. Pre-signed URLs for access control.',
          '<strong>Analytics Store:</strong> Data warehouse for feed metrics, A/B tests, ranking model training. Columnar store (BigQuery, Snowflake).'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Data model choices by entity and access pattern.',
        table: {
          headers: ['Entity', 'Storage', 'Sharding Key', 'Consistency', 'Example'],
          rows: [
            ['User profile', 'Relational / Key-value', 'user_id', 'Strong', 'PostgreSQL, DynamoDB'],
            ['Post content', 'Object store + metadata DB', 'post_id / author_id', 'Eventual', 'S3 + Cassandra'],
            ['Social graph', 'Graph cache (TAO)', 'user_id', 'Eventual', 'Facebook TAO'],
            ['Feed list', 'Redis / Memcached', 'user_id', 'Eventual', 'Twitter timeline cache'],
            ['Engagement counters', 'Counter service + DB', 'post_id shard', 'Eventual', 'YouTube view counter'],
            ['Media', 'Object store + CDN', 'content_hash', 'Eventual', 'Cloudflare Stream'],
            ['Ranking features', 'Feature store', 'user_id / post_id', 'Eventual', 'Tecton, Feast']
          ]
        }
      }
    ],
    'news-feed-fanout': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Fanout is the process of distributing a post to followers. These numbers come from Twitter, Facebook, and Instagram engineering blogs.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Followers per User (median)', '100–1,000', '500–2,000', 'Median is low; celebrities are outliers'],
            ['Followers per Celebrity', '1M–10M', '100M+', 'Elon Musk: 180M+ followers on X'],
            ['Fanout Latency (normal user)', '100 ms–1 s', '10–100 ms', 'Push post ID to followers\' feed lists'],
            ['Fanout Latency (celebrity)', 'Seconds–minutes', 'Pull on read', 'Twitter changed to pull for celebs'],
            ['Fanout Messages/sec', '1K–10K', '1M+', 'Kafka handles fanout events'],
            ['Feed List Writes per Post', '100–1,000', '10M+ possible', 'Determines push vs pull threshold'],
            ['Batch Size for Fanout', '100–1,000 followers', '1,000–10,000', 'Batch Redis writes for efficiency'],
            ['Fanout Worker Count', '10–100', '1,000+', 'Horizontally scalable workers'],
            ['Pull Model Read Cost', '10–100 ms', '1–10 ms (cached)', 'Fetch followers\' recent posts on read'],
            ['Hybrid Threshold', '1K–10K followers', '10K–100K followers', 'Switch to pull above threshold']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Fanout behavior changes dramatically with follower count and posting rate.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Normal user)', '10–100 ms', 'Push to all followers\' lists', 'Healthy'],
            ['2× Posting Rate', '100–500 ms', 'Fanout queue backlog grows', 'Add workers'],
            ['5× Posting Rate', '500 ms–2 s', 'Delayed feed updates', 'Scale fanout cluster'],
            ['Celebrity Post', 'Pull on read', 'No immediate fanout', 'Avoids 100M+ writes'],
            ['Follower Spike', 'Fanout lag', 'New followers receive backlog gradually', 'Backfill jobs handle historical posts'],
            ['Regional Outage', 'Fanout paused/replayed', 'Kafka retains events', 'Replay fanout after recovery']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Fanout architecture evolves from simple inserts to sophisticated push/pull hybrid models.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No fanout. Feed generated by querying friends\' posts at read time.',
          '<strong>Stage 2: 1K–10K users</strong> — Simple fan-out-on-write: write post ID into each follower\'s feed list. Redis lists.',
          '<strong>Stage 3: 10K–100K users</strong> — Kafka-based fanout workers. Batch writes. Fanout service scales independently.',
          '<strong>Stage 4: 100K–1M users</strong> — Hybrid fanout: push for users below 10K followers, pull for celebrities. Feed aggregator combines both.',
          '<strong>Stage 5: 1M–10M users</strong> — Geo-distributed fanout. Priority fanout for active users. Lazy fanout for inactive users on next login.',
          '<strong>Stage 6: 10M+ users</strong> — Machine learning predicts which followers will actually see the post; fanout only to likely consumers. Real-time and eventual fanout tiers.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Fanout pipeline components.',
        list: [
          '<strong>Client Tier:</strong> User creates post. Client uploads media, sends create-post API call.',
          '<strong>Post Ingestion Tier:</strong> Validates post, stores content, assigns post_id. Emits fanout event to Kafka.',
          '<strong>Fanout Worker Tier:</strong> Consumes fanout events. Fetches follower list from social graph. Writes post ID to each follower\'s feed list.',
          '<strong>Feed List Store:</strong> Redis/Memcached lists per user. Batch LPUSH operations. Trim lists to max length.',
          '<strong>Social Graph Tier:</strong> Provides follower IDs. Cached heavily. May shard by celebrity for read efficiency.',
          '<strong>Pull Feed Builder:</strong> For celebrities, assembles feed on read by fetching recent posts from followed accounts.',
          '<strong>Notification Tier:</strong> Push notifications sent separately from feed fanout; may share follower list fetch.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Push vs pull fanout decisions.',
        table: {
          headers: ['Scenario', 'Model', 'Write Amplification', 'Read Latency', 'Example'],
          rows: [
            ['Most users (<1K followers)', 'Push', 'Low', 'Very low', 'Typical Facebook friends'],
            ['Power users (1K–100K)', 'Hybrid push/pull', 'Medium', 'Low', 'Instagram influencers'],
            ['Celebrities (>100K)', 'Pull on read', 'None', 'Medium', 'Celebrity tweets'],
            ['Real-time chat feed', 'Push + WebSocket', 'Low', 'Very low', 'WhatsApp status'],
            ['Interest-based feed', 'No fanout by follower', 'None', 'Medium', 'TikTok For You'],
            ['Enterprise notifications', 'Push to relevant users', 'Low', 'Low', 'LinkedIn notifications']
          ]
        }
      }
    ],
    'news-feed-ranking': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Feed ranking selects and orders posts to maximize engagement. These numbers come from Facebook, Twitter/X, LinkedIn, and TikTok.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Candidate Pool Size', '100–1,000', '1,000–10,000', 'Posts scored before final ranking'],
            ['Final Feed Items', '10–20', '20–50', 'What user actually sees'],
            ['Ranking Latency (p99)', '50–200 ms', '10–50 ms', 'Per feed request'],
            ['Features per Candidate', '10–50', '100–1,000+', 'ML features: user, post, context, graph'],
            ['Model Inference QPS', '1K–10K', '1M+', 'Real-time scoring service'],
            ['A/B Test Experiments', '10–100', '1,000+', 'Continuous ranking experiments'],
            ['Engagement Lift from Ranking', '5–20%', '20–50%', 'ML ranking significantly improves engagement'],
            ['Freshness Half-Life', '1–24 h', 'Minutes–hours', 'Recency is a strong signal'],
            ['Re-ranking Frequency', 'Every feed load', 'Continuous background updates', 'TikTok re-ranks in near real-time'],
            ['Training Data Volume', '1M–100M events/day', '1B+ events/day', 'Clicks, likes, dwell time, shares']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Ranking latency grows with candidate count and model complexity.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '50–100 ms', 'Simple model; 100 candidates', 'Healthy'],
            ['2× Load', '100–200 ms', 'CPU contention on scoring service', 'Scale scoring replicas'],
            ['5× Load', '200–500 ms', 'Model batching queues grow', 'Increase batch size or use GPU'],
            ['10× Load', '500 ms–1 s', 'Fallback to heuristic ranking', 'ML timeout; use lightweight model'],
            ['Candidate Flood', 'Latency spike', 'More posts than model can score', 'Prune candidates first'],
            ['Model Failure', '<50 ms fallback', 'Chronological or popularity ranking', 'Graceful degradation']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Ranking evolves from chronological sorting to deep learning personalization.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Chronological feed. No ranking. Simple ORDER BY created_at.',
          '<strong>Stage 2: 1K–10K users</strong> — Heuristic ranking: recency + engagement count. Lightweight formula.',
          '<strong>Stage 3: 10K–100K users</strong> — Feature-based linear model. Logistic regression. Score candidates by predicted engagement.',
          '<strong>Stage 4: 100K–1M users</strong> — Gradient boosted trees or early neural nets. Real-time feature store. A/B testing framework.',
          '<strong>Stage 5: 1M–10M users</strong> — Deep learning ranking. Multi-objective optimization (click, like, comment, dwell). Separate candidate generation and ranking stages.',
          '<strong>Stage 6: 10M+ users</strong> — Large-scale recommendation platform. Two-tower models, reinforcement learning, and continuous online learning. TikTok/YouTube-style ranking.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Ranking pipeline components.',
        list: [
          '<strong>Client Tier:</strong> Sends feed request with user context (location, time, device). Logs impressions and engagements.',
          '<strong>Candidate Generation Tier:</strong> Retrieves candidate post IDs from feed list, social graph, and interest indexes. Fast but coarse.',
          '<strong>Feature Store:</strong> Provides user features, post features, and contextual features in <10 ms. Online + offline features.',
          '<strong>Scoring Tier:</strong> ML model scores each candidate. Runs on CPU/GPU. Batch inference for efficiency.',
          '<strong>Ranking Tier:</strong> Sorts candidates by score. Applies diversification, freshness rules, and business constraints.',
          '<strong>Re-ranking / Policy Tier:</strong> Removes harmful content, enforces ad slots, injects promoted posts, balances creator distribution.',
          '<strong>Feedback Loop Tier:</strong> Streams engagements back to training pipeline. Kafka → feature store + model training.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Ranking approach by maturity and requirements.',
        table: {
          headers: ['Scenario', 'Ranking Approach', 'Latency', 'Engagement Impact', 'Example'],
          rows: [
            ['New product', 'Chronological', '<10 ms', 'Low', 'Early-stage feed'],
            ['Engagement-focused', 'Heuristic score', '<50 ms', 'Medium', 'Forum thread ranking'],
            ['Mid-scale platform', 'Logistic regression', '<100 ms', 'Medium-High', 'LinkedIn feed'],
            ['Large social network', 'GBDT / deep neural net', '<200 ms', 'High', 'Facebook feed'],
            ['Short video', 'Two-tower + real-time', '<100 ms', 'Very high', 'TikTok For You'],
            ['Professional network', 'Graph-aware ranking', '<200 ms', 'High', 'LinkedIn'],
            ['Real-time events', 'Trending + recency', '<50 ms', 'Medium', 'Twitter trending']
          ]
        }
      }
    ],
    'news-feed-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Scaling news feed systems requires optimizing reads, writes, fanout, and ranking at global scale.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Feed Read QPS', '1K–10K', '10M+', 'Twitter/X: hundreds of thousands feed QPS'],
            ['Feed Write QPS (posts)', '10–100', '100K+', 'Includes reactions/comments'],
            ['Feed Cache Hit Rate', '85–95%', '95–99.9%', 'Hot feeds cached in memory'],
            ['Feed Generation Latency (p99)', '200 ms–1 s', '50–100 ms', 'Precomputed feeds lower latency'],
            ['Global Regions', '1–3', '10–30+', 'Multi-region active-active for latency'],
            ['Fanout Workers', '10–100', '1,000–10,000', 'Kafka consumers for fanout'],
            ['Feed Shards', '10–100', '1,000+', 'By user_id or geography'],
            ['CDN Cache Hit Rate (media)', '70–85%', '85–95%', 'Media served from edge'],
            ['Database Read Replicas', '3–10', '100+', 'Feed metadata reads scale horizontally'],
            ['Cost per 1K Feed Reads', '$0.001–$0.01', '$0.0001–$0.001', 'Cache-heavy architectures reduce cost']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Scaling feed systems handle massive fanout and read spikes while maintaining low latency.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '50–200 ms', 'Cache serves most feeds', 'Healthy'],
            ['2× Load', '200–400 ms', 'Cache misses increase; fanout queue grows', 'Add cache replicas'],
            ['5× Load', '400 ms–1 s', 'Origin DB under pressure', 'Scale DB replicas and fanout workers'],
            ['10× Load', '1–2 s', 'Feed service hotspots', 'Shard feed lists by user_id'],
            ['Viral Event', 'Spike then recover', 'Trending content cached globally', 'Precompute + rate limit writes'],
            ['Regional Failure', 'Failover to other region', 'Some staleness acceptable', 'Multi-region feed replication']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'News feed scaling journey.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Monolithic app with SQL feed query. Single server.',
          '<strong>Stage 2: 1K–10K users</strong> — Add Redis cache for feed lists. Read replicas for posts.',
          '<strong>Stage 3: 10K–100K users</strong> — Fan-out-on-write with Kafka workers. Feed service split from monolith.',
          '<strong>Stage 4: 100K–1M users</strong> — Hybrid push/pull. Separate ranking service. CDN for media. Multi-AZ.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-region deployment. Geo-partitioned feed caches. ML ranking. Real-time analytics.',
          '<strong>Stage 6: 10M+ users</strong> — Planet-scale feed platform. Cell-based architecture. Predictive caching. Separate infrastructure for creators vs consumers.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Scaling components across the feed stack.',
        list: [
          '<strong>Client Tier:</strong> Efficient pagination, prefetching, and local caching. Limit request frequency.',
          '<strong>CDN / Edge Tier:</strong> Cache feed API responses and media at edge. Edge compute for lightweight personalization.',
          '<strong>Gateway Tier:</strong> Rate limiting, auth, request coalescing. Route to nearest region. Cache popular anonymous feeds.',
          '<strong>Feed Service Tier:</strong> Stateless, horizontally scalable. Fetches feed lists, merges push/pull, calls ranking.',
          '<strong>Cache Tier:</strong> Redis/Memcached for feed lists. TAO-style graph cache. CDN for media. Multi-level caching.',
          '<strong>Database Tier:</strong> Sharded by user_id or geography. Read replicas for posts. Distributed SQL or NoSQL.',
          '<strong>Queue / Stream Tier:</strong> Kafka for fanout events, engagements, and analytics. Flink for real-time aggregations.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Scaling strategies by challenge.',
        table: {
          headers: ['Challenge', 'Strategy', 'Impact', 'Complexity', 'Example'],
          rows: [
            ['High read volume', 'Cache feed lists + CDN', 'Latency ↓, cost ↓', 'Low', 'All large feeds'],
            ['High write/fanout', 'Hybrid push/pull', 'Write amplification ↓', 'Medium', 'Twitter/X'],
            ['Global latency', 'Multi-region caches', 'Latency ↓', 'High', 'Facebook'],
            ['Ranking cost', 'Candidate pruning + batch inference', 'Cost ↓', 'Medium', 'TikTok'],
            ['Hot celebrities', 'Pull model for mega-celebs', 'Write load ↓', 'Medium', 'Twitter celebrities'],
            ['Media bandwidth', 'CDN + adaptive bitrate', 'Bandwidth ↓', 'Medium', 'Instagram'],
            ['Feed freshness', 'Stream processing + partial updates', 'Freshness ↑', 'High', 'LinkedIn feed']
          ]
        }
      }
    ]
  },
  module18: {
    'crawler-overview': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Web crawlers fetch and index pages from the internet. These numbers reflect Google, Bing, and large-scale commercial crawlers.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Pages Crawled per Month', '1M–100M', '10B–100B+', 'Google: hundreds of billions'],
            ['Crawl Rate per Second', '100–1,000 pages/s', '100K+ pages/s', 'Distributed crawler cluster'],
            ['Average Page Size', '50–200 KB', '1–2 MB', 'Modern pages heavy with JS/media'],
            ['Crawl Queue Size', '1M–10M URLs', '1B+ URLs', 'Frontier stores discovered URLs'],
            ['Politeness Delay', '1–5 s between requests', '0.5–1 s', 'Respect robots.txt and server load'],
            ['Duplicate Content Rate', '30–60%', '60–80%', 'Much of web is duplicate or near-duplicate'],
            ['Crawl Freshness Half-Life', 'Days–weeks', 'Hours–days', 'News sites crawled frequently'],
            ['Robots.txt Check TTL', '1–24 h', '1 h', 'Re-check periodically'],
            ['Crawler Bandwidth', '1–10 Gbps', '100+ Gbps', 'Distributed across data centers'],
            ['Indexable Pages Ratio', '30–70%', '10–30%', 'Many crawled pages are low quality']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Crawler performance depends on frontier size, politeness, and target site capacity.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–3 s per page', 'Politeness delay dominates', 'Healthy'],
            ['2× Target Load', 'Some 429/503 responses', 'Crawler throttles automatically', 'Politeness kicks in'],
            ['5× Target Load', 'Higher error rates', 'Site may block crawler', 'Reduce rate per domain'],
            ['Crawler Cluster Scale-out', 'Throughput linearly increases', 'More pages/sec', 'Add crawler nodes'],
            ['Frontier Saturation', 'Queue growth', 'Cannot keep up with discovery', 'Scale storage and scheduling'],
            ['Target Site Failure', 'Retries with backoff', 'Crawler moves to other domains', 'Fault tolerance essential']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Crawler architecture evolves from a single script to a distributed crawling platform.',
        list: [
          '<strong>Stage 1: 0–1K pages</strong> — Single Python script with requests + BeautifulSoup. Saves to local files.',
          '<strong>Stage 2: 1K–100K pages</strong> — Multi-threaded crawler. Redis queue for URLs. Politeness delay added.',
          '<strong>Stage 3: 100K–10M pages</strong> — Distributed crawler workers. Kafka/SQS frontier. Storage in S3/DB. robots.txt parser.',
          '<strong>Stage 4: 10M–1B pages</strong> — Domain-aware scheduler. Reverse DNS and IP rate limiting. Content deduplication. Rendering JS with headless browser.',
          '<strong>Stage 5: 1B–10B pages</strong> — Global crawler with regional crawlers. Real-time freshness signals. Machine learning for crawl priority.',
          '<strong>Stage 6: 10B+ pages</strong> — Planet-scale crawler: Google/Bing. Continuous crawling, trillions of URLs, sophisticated spam/quality detection.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Crawler system components.',
        list: [
          '<strong>Seed / URL Source Tier:</strong> Initial URLs from sitemaps, manual seeds, and previous crawl. Trending URLs from social signals.',
          '<strong>Frontier Tier:</strong> Priority queue of URLs to crawl. Redis, Kafka, or custom distributed queue. Orders by priority, freshness, and politeness.',
          '<strong>Fetcher Tier:</strong> HTTP/HTTPS downloader. Respects robots.txt. Handles redirects, compression, and retries. Headless browser for JS rendering.',
          '<strong>Parser / Extractor Tier:</strong> Parses HTML, extracts links, metadata, text. Identifies canonical URLs and pagination.',
          '<strong>Deduplication Tier:</strong> URLSeen set (Bloom filter + DB). Content fingerprinting (SimHash) to detect near-duplicates.',
          '<strong>Storage Tier:</strong> Raw page store (S3/GCS), extracted content DB, index builder input.',
          '<strong>Scheduler / Politeness Tier:</strong> Domain-level rate limiter. IP and host grouping. Crawl budget allocation.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Crawler design choices.',
        table: {
          headers: ['Scenario', 'Scale', 'Renderer', 'Storage', 'Example'],
          rows: [
            ['Personal scraper', '1K pages', 'Static HTML', 'Local files', 'Price tracker'],
            ['Site monitor', '10K–100K pages', 'Static', 'SQL/NoSQL', 'SEO monitoring'],
            ['Search engine', '1B+ pages', 'Headless + static', 'Object store + index', 'Google, Bing'],
            ['E-commerce aggregator', '10M–100M pages', 'Headless', 'Object store + DB', 'Price comparison'],
            ['News aggregator', '1M–10M pages', 'Static', 'DB + cache', 'Google News'],
            ['Academic crawler', '10M–100M pages', 'Static', 'WARC files', 'Common Crawl'],
            ['Enterprise internal crawler', '1M–10M pages', 'Static', 'Search index', 'Internal search']
          ]
        }
      }
    ],
    'crawler-frontier': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'The frontier manages URLs waiting to be crawled. Efficient frontier design is critical for crawler throughput.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Frontier Size', '1M–10M URLs', '1B+ URLs', 'Billion-URL frontier needs sharding'],
            ['Enqueue Rate', '1K–10K URLs/s', '100K+ URLs/s', 'Discovered links added continuously'],
            ['Dequeue Rate', '1K–10K URLs/s', '100K+ URLs/s', 'Matched by fetcher capacity'],
            ['Priority Levels', '3–10', '10–100', 'Page rank, freshness, site importance'],
            ['Politeness Window per Host', '1–5 s', '0.5–1 s', 'Minimum delay between requests to same host'],
            ['Bloom Filter False Positive', '1%', '0.1%', 'Configurable memory/accuracy trade-off'],
            ['URLSeen Memory', '100 MB–1 GB', '10–100 GB', 'Bloom filter + on-disk set'],
            ['Frontier Shards', '10–100', '1,000+', 'By hostname hash or URL range'],
            ['Retry Queue Size', '1–10% of frontier', '5–20%', 'Transient failures re-enqueued'],
            ['Recrawl Interval Range', 'Hours–months', 'Minutes–days', 'High-priority pages recrawled often']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Frontier behavior under high discovery and fetch rates.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–5 ms per URL', 'Priority queue healthy', 'Healthy'],
            ['2× Discovery Rate', '5–10 ms', 'Enqueue backlog grows', 'Scale frontier writers'],
            ['5× Discovery Rate', '10–50 ms', 'Frontier storage pressure', 'Shard frontier by host'],
            ['10× Discovery Rate', '50–200 ms', 'Deduplication set saturated', 'Add Bloom filter capacity'],
            ['Hot Domain', 'Politeness bottleneck', 'URLs queued per host', 'Host-level rate limiting'],
            ['Stale URLs', 'Frontier bloat', 'Old URLs accumulate', 'Recrawl scheduling and cleanup']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Frontier evolution.',
        list: [
          '<strong>Stage 1: 0–1K pages</strong> — In-memory queue (Python deque). No persistence.',
          '<strong>Stage 2: 1K–100K pages</strong> — Redis queue with persistence. URLSeen in Redis SET.',
          '<strong>Stage 3: 100K–10M pages</strong> — Priority queue by domain + score. Kafka for enqueue/dequeue. Bloom filter for URLSeen.',
          '<strong>Stage 4: 10M–1B pages</strong> — Distributed frontier sharded by host. Disk-backed queues. Priority scheduler considers page rank and freshness.',
          '<strong>Stage 5: 1B–10B pages</strong> — Hierarchical frontier: hot in-memory, warm on SSD, cold in object store. Machine learning predicts crawl value.',
          '<strong>Stage 6: 10B+ pages</strong> — Custom frontier database. Per-host politeness state. Global budget allocation. Real-time frontier analytics.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Frontier components.',
        list: [
          '<strong>URL Discovery Tier:</strong> Extracts links from crawled pages. Normalizes URLs. Filters by scope and robots.txt.',
          '<strong>Deduplication Tier:</strong> URLSeen Bloom filter + persistent store. Prevents re-crawling same URL.',
          '<strong>Priority Tier:</strong> Scores URLs by PageRank, freshness, content type, site importance. High-priority URLs dequeued first.',
          '<strong>Politeness Tier:</strong> Host-level queues and rate limiters. Ensures minimum delay between requests to same host.',
          '<strong>Distributed Queue Tier:</strong> Kafka, Redis Streams, or custom queue. Sharded by host or URL hash.',
          '<strong>Storage Tier:</strong> Fast SSD for hot frontier, object store for archive. Metadata DB tracks crawl state.',
          '<strong>Monitoring Tier:</strong> Tracks frontier size, enqueue/dequeue rates, politeness delays, and stuck hosts.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Frontier design choices.',
        table: {
          headers: ['Scenario', 'Queue Technology', 'Deduplication', 'Priority', 'Example'],
          rows: [
            ['Small crawler', 'Redis list/set', 'Redis SET', 'FIFO', 'Personal scraper'],
            ['Medium crawler', 'RabbitMQ / SQS', 'Bloom filter + DB', 'Basic score', 'SEO crawler'],
            ['Large crawler', 'Kafka / Kinesis', 'Bloom filter + RocksDB', 'Multi-factor priority', 'Commercial search crawler'],
            ['Focused crawler', 'Priority heap', 'DB unique index', 'Domain-specific score', 'Academic focused crawl'],
            ['Real-time crawler', 'Redis Streams', 'Redis SET + TTL', 'Recency', 'News crawler'],
            ['Planet-scale crawler', 'Custom distributed queue', 'Multi-level Bloom + Bigtable', 'ML priority', 'Google crawler']
          ]
        }
      }
    ],
    'crawler-politeness-dedup': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Politeness and deduplication keep crawlers respectful and efficient.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Politeness Delay per Host', '1–5 s', '0.5–1 s', 'Crawl-delay from robots.txt respected'],
            ['Max Concurrent Requests per Host', '1–5', '1', 'Single connection common for politeness'],
            ['Robots.txt Cache TTL', '1–24 h', '1 h', 'Re-fetched periodically'],
            ['URL Deduplication Rate', '50–90%', '90–99%', 'Most URLs seen before'],
            ['Near-Duplicate Detection Rate', '30–60%', '60–80%', 'SimHash / MinHash clustering'],
            ['Bloom Filter Memory per 1B URLs', '1–2 GB', '500 MB–1 GB', '1% false positive at 10 bits/URL'],
            ['SimHash Hamming Distance Threshold', '3–6', '3–4', 'Lower = stricter duplicate detection'],
            ['Content Fingerprinting Cost', '1–10 ms', '<1 ms', 'Per page hash computation'],
            ['Robots.txt Fetch Failure Rate', '<1%', '<0.1%', 'Most sites serve robots.txt'],
            ['Retry Backoff Initial Delay', '1–5 s', '1 s', 'Exponential backoff on errors']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Politeness and dedup behavior under load.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal', 'Politeness delay dominates', 'Healthy'],
            ['2× Crawler Count', 'Politeness bottleneck on small sites', 'Throughput per host capped', 'Scale by crawling more hosts'],
            ['5× Crawler Count', 'More hosts crawled in parallel', 'Host diversity increases throughput', 'Good horizontal scaling'],
            ['Duplicate Flood', '<1 ms per URL', 'Bloom filter rejects duplicates', 'Memory-efficient dedup'],
            ['Robots.txt Miss', 'Extra fetch + delay', 'Crawler falls back to conservative', 'Cache robots.txt aggressively'],
            ['Rate Limit Hit (429)', 'Backoff 1 s → 5 s → 30 s', 'Crawler respects site limits', 'Essential for good citizenship']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Politeness and dedup evolution.',
        list: [
          '<strong>Stage 1: 0–1K pages</strong> — Fixed delay between all requests. No dedup beyond simple set.',
          '<strong>Stage 2: 1K–100K pages</strong> — Per-host delay. Redis SET for URLSeen. Parse robots.txt.',
          '<strong>Stage 3: 100K–10M pages</strong> — Bloom filter for URLSeen. SimHash for content dedup. Host-level rate limiter.',
          '<strong>Stage 4: 10M–1B pages</strong> — Distributed politeness state. robots.txt cache shared across crawlers. Near-duplicate clustering.',
          '<strong>Stage 5: 1B–10B pages</strong> — Machine learning predicts site capacity and adjusts crawl rate. Real-time spam/duplicate detection.',
          '<strong>Stage 6: 10B+ pages</strong> — Sophisticated politeness: per-IP, per-CDN, per-path budgets. Content signature store at petabyte scale.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Politeness and dedup components.',
        list: [
          '<strong>Robots.txt Tier:</strong> Fetches and parses robots.txt. Caches rules. Respects crawl-delay and disallow paths.',
          '<strong>Host Rate Limiter Tier:</strong> Token bucket or sliding window per host/IP. Enforces politeness and crawl budgets.',
          '<strong>URL Deduplication Tier:</strong> Bloom filter for probable duplicates, persistent store for confirmation. Canonicalizes URLs.',
          '<strong>Content Deduplication Tier:</strong> Computes SimHash/MinHash fingerprints. Cluster near-duplicates. Keeps canonical version.',
          '<strong>Retry/Backoff Tier:</strong> Exponential backoff with jitter. Separate retry queues by failure type.',
          '<strong>Monitoring Tier:</strong> Tracks blocked requests, robots.txt violations, duplicate rates, and site response codes.',
          '<strong>Policy Tier:</strong> Crawl budget rules. Domain whitelist/blacklist. Respect robots.txt and nofollow.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Politeness and dedup choices.',
        table: {
          headers: ['Scenario', 'Politeness', 'Deduplication', 'Complexity', 'Example'],
          rows: [
            ['Internal crawler', 'Fixed delay', 'Hash set', 'Low', 'Corporate site indexing'],
            ['Respectful web crawler', 'Per-host delay + robots.txt', 'Bloom filter', 'Medium', 'Search engine crawler'],
            ['Aggressive focused crawler', 'Adaptive rate', 'Bloom + SimHash', 'High', 'Commercial aggregator'],
            ['Archival crawler', 'Very polite', 'Content fingerprint archive', 'High', 'Internet Archive'],
            ['Real-time news crawler', 'Site-specific rate', 'URLSeen TTL 1 h', 'Medium', 'News aggregator'],
            ['Large-scale crawler', 'ML-based politeness', 'Multi-level fingerprinting', 'Very high', 'Google/Bing']
          ]
        }
      }
    ],
    'crawler-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Scaling crawlers requires horizontal fetchers, efficient scheduling, and massive storage.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Fetcher Nodes', '10–100', '1,000–10,000', 'Horizontally scalable'],
            ['Pages per Node per Second', '10–100', '100–1,000', 'Depends on page complexity'],
            ['Crawl Bandwidth per Node', '100 Mbps–1 Gbps', '1–10 Gbps', 'Network-bound'],
            ['Frontier Shards', '10–100', '1,000+', 'By host hash or geography'],
            ['Storage per 1B Pages', '50–200 TB', '10–50 TB compressed', 'Raw HTML + metadata'],
            ['Index Build Time', 'Hours–days', 'Minutes–hours', 'Distributed indexing pipeline'],
            ['DNS Resolution QPS', '1K–10K', '100K+', 'DNS caching critical'],
            ['TCP Connections per Node', '100–1,000', '10,000+', 'Connection pooling'],
            ['TLS Handshake Overhead', '10–100 ms', '1–10 ms with session reuse', 'TLS adds latency'],
            ['Operational Cost per 1B Pages', '$10K–$100K', '$1K–$10K', 'Efficiency improves at scale']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Crawler scaling behavior.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal throughput', 'Fetcher utilization <50%', 'Healthy'],
            ['2× Fetcher Nodes', 'Throughput ~2×', 'Frontier and DNS scale too', 'Good horizontal scaling'],
            ['5× Fetcher Nodes', 'Throughput ~4–5×', 'Frontier may become bottleneck', 'Scale frontier storage'],
            ['10× Fetcher Nodes', 'Throughput ~7–9×', 'DNS and target sites bottleneck', 'Distribute DNS, respect politeness'],
            ['Storage Limit', 'Crawl pauses', 'Object storage scales', 'Use S3/GCS'],
            ['Target Site Saturation', 'Rate limits trigger', 'Throughput capped per host', 'Host diversity essential']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Crawler scaling journey.',
        list: [
          '<strong>Stage 1: 0–1K pages</strong> — Single machine, single thread. No scaling concerns.',
          '<strong>Stage 2: 1K–100K pages</strong> — Multi-threaded single machine. Shared queue.',
          '<strong>Stage 3: 100K–10M pages</strong> — Multiple fetcher VMs. Central Redis frontier. S3 for storage.',
          '<strong>Stage 4: 10M–1B pages</strong> — Kubernetes fetcher pods. Sharded frontier. Separate rendering cluster. Distributed indexing.',
          '<strong>Stage 5: 1B–10B pages</strong> — Regional crawler fleets. Custom scheduler. ML prioritization. Real-time analytics.',
          '<strong>Stage 6: 10B+ pages</strong> — Planet-scale crawler with specialized hardware, continuous streaming, and petabyte storage.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Scaling crawler components.',
        list: [
          '<strong>Fetcher Tier:</strong> Stateless workers. HTTP client with connection reuse. Headless browser cluster for JS. Auto-scales.',
          '<strong>Frontier Tier:</strong> Distributed priority queue. Politeness state per host. Scales independently.',
          '<strong>DNS Tier:</strong> Recursive resolver cache. DNS-over-HTTPS. Avoids DNS as bottleneck.',
          '<strong>Rendering Tier:</strong> Headless Chrome/Puppeteer cluster. Renders JS-heavy pages. Separate due to resource cost.',
          '<strong>Storage Tier:</strong> Object store for raw pages. Database for metadata and crawl state. Index builder input.',
          '<strong>Processing Tier:</strong> Extract links, text, metadata. Deduplication. Content classification.',
          '<strong>Index Tier:</strong> Inverted index builders. Distributed indexing (Spark/MapReduce). Search serving cluster.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Scaling choices.',
        table: {
          headers: ['Challenge', 'Strategy', 'Impact', 'Complexity', 'Example'],
          rows: [
            ['Throughput', 'Add fetcher nodes', 'Linear scaling', 'Low', 'Any crawler'],
            ['Politeness', 'Per-host rate limiting', 'Avoid blocks', 'Medium', 'Search engine'],
            ['Storage', 'Object store + compression', 'Cost ↓', 'Low', 'Common Crawl'],
            ['JS rendering', 'Separate headless cluster', 'Coverage ↑', 'High', 'Modern web crawler'],
            ['Freshness', 'Prioritized recrawl', 'Stale content ↓', 'Medium', 'News crawler'],
            ['Cost', 'Spot instances + batching', 'Cost ↓', 'Medium', 'Large crawler'],
            ['Reliability', 'Kafka + idempotent workers', 'No lost URLs', 'Medium', 'Production crawler']
          ]
        }
      }
    ]
  },
  module19: {
    'video-overview': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Video platforms serve huge volumes of streaming content. These numbers come from Netflix, YouTube, TikTok, and Twitch.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Global Internet Bandwidth Share', '60–70%', '15% (Netflix alone at peak)', 'Netflix ~15% of global downstream traffic'],
            ['Concurrent Viewers', '10K–100K', '100M+', 'YouTube: 1B+ hours watched daily'],
            ['Video Catalog Size', '10K–1M videos', '100M+ videos', 'YouTube: billions of videos'],
            ['Uploads per Day', '1K–10K', '1M+', 'YouTube: 500+ hours uploaded per minute'],
            ['Average Bitrate', '2–5 Mbps (HD)', '5–25 Mbps (4K)', 'Adaptive bitrate selects per client'],
            ['Storage per Hour of Video', '1–10 GB', '0.5–2 GB (compressed)', 'Multiple resolutions/codecs multiply total'],
            ['Transcoding Time per Hour', '2–10× real-time', '0.5–2× real-time', 'Depends on codec and resolution ladder'],
            ['CDN Cache Hit Rate', '80–90%', '90–95%', 'Popular videos cached globally'],
            ['Startup Latency Target', '1–3 s', '<1 s', 'Critical for user retention'],
            ['Rebuffering Rate Target', '<1%', '<0.5%', 'Poor rebuffering causes churn']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Video platforms must deliver consistent quality despite variable network and demand.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Smooth playback', 'CDN edge serves video chunks', 'Healthy'],
            ['2× Load', 'Slight CDN warming', 'Some origin fetches', 'Origin bandwidth rises'],
            ['5× Load', 'Adaptive bitrate steps down', 'Clients switch to lower resolution', 'Maintains playback over quality'],
            ['10× Load', 'Rebuffering increases', 'CDN hot spots; origin strain', 'Add CDN capacity or pre-position content'],
            ['Viral Video Spike', 'Latency then smooth', 'CDN absorbs surge', 'Popular content cached quickly'],
            ['Network Congestion', 'Bitrate drops', 'Player switches to lower bitrate', 'ABR handles transient issues']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Video platform evolution.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single server streams MP4 files. No transcoding. Simple HTML5 video player.',
          '<strong>Stage 2: 1K–10K users</strong> — CDN for video delivery. Basic encoding to 2–3 resolutions. Origin in cloud.',
          '<strong>Stage 3: 10K–100K users</strong> — Adaptive bitrate streaming (HLS/DASH). Transcoding pipeline. Multiple CDNs.',
          '<strong>Stage 4: 100K–1M users</strong> — Dedicated transcoding farm. Content delivery network with regional PoPs. DRM for premium content.',
          '<strong>Stage 5: 1M–10M users</strong> — Global multi-CDN. Per-title encoding optimization. Live streaming support. Real-time analytics.',
          '<strong>Stage 6: 10M+ users</strong> — Planet-scale: Netflix Open Connect appliances in ISPs, YouTube\'s Google Global Cache. Custom codecs (AV1), edge compute, and ML-driven bitrate adaptation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Video platform components.',
        list: [
          '<strong>Client Tier:</strong> Video player with ABR logic. Prefetches segments. Reports QoE metrics (buffer, bitrate, errors).',
          '<strong>CDN / Edge Tier:</strong> Delivers video chunks from nearest PoP. Handles 90%+ of traffic. Origin shield reduces origin load.',
          '<strong>Origin / Storage Tier:</strong> Object store (S3/GCS) holds transcoded video files. Origin responds to cache misses.',
          '<strong>Transcoding Tier:</strong> FFmpeg-based worker farm. Creates resolution ladder, codecs, subtitles, thumbnails.',
          '<strong>Manifest / API Tier:</strong> Serves HLS/DASH manifests. Maps users to appropriate CDN and bitrate ladder.',
          '<strong>Upload Tier:</strong> Accepts raw video uploads. Validates format. Queues for transcoding.',
          '<strong>Analytics / QoE Tier:</strong> Collects playback metrics. Drives ABR improvements, CDN selection, and content decisions.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Video platform architecture choices.',
        table: {
          headers: ['Scenario', 'Delivery', 'Transcoding', 'CDN', 'Example'],
          rows: [
            ['Small video site', 'Progressive MP4', 'Manual', 'Single CDN', 'Portfolio site'],
            ['VOD platform', 'HLS/DASH', 'On-demand farm', 'Multi-CDN', 'Netflix, Hulu'],
            ['Live streaming', 'Low-latency HLS/DASH', 'Real-time encoders', 'Multi-CDN', 'Twitch, YouTube Live'],
            ['Short-form video', 'Pre-transcoded ladder', 'Batch + real-time', 'Global CDN', 'TikTok, Reels'],
            ['Premium content', 'DRM + ABR', 'Secure farm', 'Multi-CDN + token auth', 'Disney+'],
            ['Enterprise video', 'HLS', 'Cloud transcoding', 'CDN + SSO', 'Vimeo Enterprise'],
            ['UGC platform', 'Async transcoding queue', 'Worker farm', 'Multi-CDN', 'YouTube']
          ]
        }
      }
    ],
    'video-transcoding': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Transcoding converts raw video into playable formats. These numbers come from Netflix, YouTube, and AWS Elemental.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Transcoding Time per Hour', '2–10× real-time', '0.5–1× real-time', 'Hardware encoders faster than software'],
            ['Resolution Ladder', '3–5 versions', '8–15+ versions', '240p to 4K/8K'],
            ['Codecs Used', 'H.264', 'H.264/HEVC/VP9/AV1', 'AV1 ~50% smaller than H.264'],
            ['Output Size vs Original', '10–50% of original', '5–20% with advanced codecs', 'Per-title optimization reduces further'],
            ['Transcoding Cost per Hour', '$1–$10', '$0.10–$1', 'Spot instances and hardware encode lower cost'],
            ['GPU Transcoding Throughput', '1–5× real-time', '10–50× real-time', 'NVIDIA NVENC for H.264/HEVC'],
            ['CPU Transcoding Throughput', '0.1–0.5× real-time', '0.5–2× real-time', 'x264/x265 slower but higher quality'],
            ['Thumbnails per Video', '1–10', '10–100', 'Preview thumbnails, storyboards'],
            ['Audio Tracks per Video', '1–2', '5–20+', 'Multiple languages, commentary'],
            ['Subtitle Tracks per Video', '1–5', '10–50+', 'Localized subtitles and captions']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Transcoding farms must handle bursty upload workloads while maintaining quality.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–4× real-time', 'Queue empty', 'Healthy'],
            ['2× Upload Rate', 'Queue grows', 'Workers at 80% utilization', 'Add workers'],
            ['5× Upload Rate', 'Latency 10–30× real-time', 'Backlog; users wait longer', 'Auto-scale farm'],
            ['10× Upload Rate', 'Hours delay', 'Queue deep', 'Use spot instances; prioritize popular uploads'],
            ['Long Video Uploaded', 'Proportional delay', 'More chunks to process', 'Chunked parallel transcoding'],
            ['Codec Failure', 'Retry with fallback', 'Some formats fail first attempt', 'Robust error handling needed']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Transcoding pipeline evolution.',
        list: [
          '<strong>Stage 1: 0–1K videos</strong> — Manual transcoding with FFmpeg. Upload one file, convert manually.',
          '<strong>Stage 2: 1K–10K videos</strong> — Single FFmpeg worker. Queue in Redis. Generate 2–3 resolutions.',
          '<strong>Stage 3: 10K–100K videos</strong> — Worker farm with message queue. HLS/DASH packaging. Thumbnails.',
          '<strong>Stage 4: 100K–1M videos</strong> — Distributed transcoding with chunking. Per-title bitrate optimization. Multiple codecs.',
          '<strong>Stage 5: 1M–10M videos</strong> — GPU + CPU hybrid farm. Auto-scaling. Multi-region processing. DRM packaging.',
          '<strong>Stage 6: 10M+ videos</strong> — Netflix-style encoding: per-shot optimization, custom codecs (AV1), parallel chunk encoding, quality metrics (VMAF), and continuous research pipelines.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Transcoding pipeline components.',
        list: [
          '<strong>Upload Tier:</strong> Resumable upload. Stores raw file in object store. Triggers transcoding job.',
          '<strong>Job Scheduler Tier:</strong> Prioritizes jobs by creator size, content type, and SLA. Routes to appropriate worker type.',
          '<strong>Transcoding Worker Tier:</strong> FFmpeg/GPU encoders. Produce resolution ladder, codecs, audio, subtitles. Chunked processing for long videos.',
          '<strong>Quality Control Tier:</strong> Validates output. VMAF/PSNR checks. Detects corruption or artifacts.',
          '<strong>Packaging Tier:</strong> Creates HLS/DASH manifests. Encrypts for DRM. Generates thumbnails and preview sprites.',
          '<strong>Storage Tier:</strong> Stores raw and transcoded files. Multi-region replication for popular content.',
          '<strong>Metadata Tier:</strong> Tracks job status, output URLs, manifests, and DRM keys in database.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Transcoding choices.',
        table: {
          headers: ['Scenario', 'Encoder', 'Resolution Ladder', 'Cost Driver', 'Example'],
          rows: [
            ['Small VOD', 'CPU FFmpeg', '3 versions', 'Compute', 'Indie streaming'],
            ['Large VOD', 'GPU + CPU', '8+ versions', 'Storage + compute', 'Netflix'],
            ['Live streaming', 'Hardware encoders', '3–5 versions', 'Real-time infra', 'Twitch'],
            ['UGC short video', 'Fast preset CPU/GPU', '4–6 versions', 'Volume', 'TikTok'],
            ['Premium 4K', 'CPU x265 / AV1', '10+ versions', 'Compute time', 'Disney+'],
            ['Quick previews', 'Low-res fast transcode', '1–2 versions', 'Speed', 'Upload preview'],
            ['Archive', 'Slow high-efficiency codec', '2 versions', 'Long-term storage', 'Video archive']
          ]
        }
      }
    ],
    'video-delivery': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Video delivery optimizes playback quality and latency through CDNs and adaptive streaming.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['CDN Cache Hit Rate', '80–90%', '90–95%', 'Popular videos cached at edge'],
            ['Origin Offload', '90–95%', '95–99%', 'CDN serves most requests'],
            ['Startup Latency', '1–3 s', '<1 s', 'First chunk fetch + player init'],
            ['Live Latency (HLS/DASH)', '10–30 s', '3–10 s (low-latency)', 'LL-HLS and CMAF reduce latency'],
            ['Chunk Duration', '2–10 s', '2–4 s', 'Shorter chunks = lower latency but more requests'],
            ['Bitrate Ladder Steps', '4–6', '8–12', 'Smoother ABR with more steps'],
            ['Concurrent Bitrate Switches', '1–5 per minute', '5–20 per minute', 'Adaptive to network conditions'],
            ['Global PoP Count', '50–100', '200–300+', 'Cloudflare: 300+; Fastly: 100+'],
            ['Peak Bandwidth per Video', '1–10 Gbps', '100+ Gbps', 'Viral live events'],
            ['QoE Metric Sampling', '1–10% of sessions', '100% of sessions', 'Detailed playback analytics']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Video delivery performance under traffic and network variation.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Smooth ABR', 'CDN edge hit', 'Healthy'],
            ['2× Load', 'Origin fetches rise', 'Slightly higher chunk latency', 'CDN warming'],
            ['5× Load', 'Some bitrate drops', 'Players adapt to maintain buffer', 'Quality trade-off'],
            ['10× Load', 'Regional CDN hot spots', 'Possible rebuffering', 'Add CDN capacity or steering'],
            ['Viral Video', 'Cache miss storm then smooth', 'CDN pulls from origin then fans out', 'Origin must handle burst'],
            ['Mobile Network Degradation', 'Bitrate steps down', 'Player preserves playback', 'ABR working']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Video delivery evolution.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single origin server serves MP4. No CDN. Direct download.',
          '<strong>Stage 2: 1K–10K users</strong> — CDN for static video files. Progressive download.',
          '<strong>Stage 3: 10K–100K users</strong> — HLS/DASH streaming with ABR. Single CDN. Basic manifest server.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-CDN strategy. Geo-routing. Origin shield. DRM token auth.',
          '<strong>Stage 5: 1M–10M users</strong> — Low-latency live streaming. Per-title encoding. Real-time CDN switching based on QoE.',
          '<strong>Stage 6: 10M+ users</strong> — Planet-scale: Netflix Open Connect, YouTube Google Global Cache. Edge caches inside ISPs. ML-driven CDN selection and bitrate adaptation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Video delivery components.',
        list: [
          '<strong>Client Tier:</strong> Player downloads manifest, selects bitrate, buffers segments. Reports QoE.',
          '<strong>CDN / Edge Tier:</strong> Caches manifests and video segments. Provides lowest-latency delivery. Multiple CDNs for resilience.',
          '<strong>Origin Shield Tier:</strong> Consolidates cache misses from multiple CDNs. Reduces origin load.',
          '<strong>Origin / Storage Tier:</strong> Object store holds transcoded content. Serves cache misses.',
          '<strong>Manifest / API Tier:</strong> Generates personalized manifests. Handles auth, geo-restriction, and CDN selection.',
          '<strong>Load Balancer / Steering Tier:</strong> Routes users to best CDN/PoP based on geography, capacity, and real-time performance.',
          '<strong>QoE / Analytics Tier:</strong> Collects buffer ratios, bitrates, errors. Feeds ABR and CDN optimization.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Delivery architecture choices.',
        table: {
          headers: ['Scenario', 'Protocol', 'Latency', 'CDN Strategy', 'Example'],
          rows: [
            ['Small VOD', 'HLS', '5–10 s startup', 'Single CDN', 'Course platform'],
            ['Large VOD', 'DASH/HLS', '<3 s startup', 'Multi-CDN', 'Netflix'],
            ['Live sports', 'Low-latency HLS', '3–10 s', 'Multi-CDN + origin shield', 'ESPN+'],
            ['Interactive live', 'WebRTC / SRT', '<1 s', 'SFU + edge', 'Twitch, Live shopping'],
            ['Premium DRM content', 'CMAF + Widevine/PlayReady', '5–10 s', 'Multi-CDN + token auth', 'Disney+'],
            ['Mobile-first UGC', 'HLS short chunks', '<2 s startup', 'Global CDN', 'TikTok'],
            ['Enterprise streaming', 'HLS/DASH', '10–30 s', 'CDN + SSO', 'Internal events']
          ]
        }
      }
    ],
    'video-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Scaling video platforms requires optimizing storage, delivery, transcoding, and personalization globally.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Storage per Video (all formats)', '1–10 GB', '0.5–2 GB with advanced codecs', 'Multiple resolutions multiply size'],
            ['Total Storage', '100 TB–1 PB', '100+ PB', 'YouTube: exabytes of storage'],
            ['Daily Egress Bandwidth', '10–100 Gbps', '100+ Tbps', 'Netflix peak ~600 Gbps per Open Connect appliance'],
            ['Transcoding Farm Size', '10–100 workers', '10,000+ workers', 'Auto-scaling GPU/CPU mix'],
            ['CDN PoPs Used', '50–100', '200–1,000+', 'Multi-CDN + ISP edge caches'],
            ['Concurrent Streams', '10K–100K', '100M+', 'Live events can spike rapidly'],
            ['Upload QPS', '1–10/s', '1,000+/s', 'UGC platforms see constant uploads'],
            ['Recommendation Latency', '50–200 ms', '<50 ms', 'Personalized feed ranking'],
            ['Cold Content Ratio', '50–80%', '80–95%', 'Long tail rarely watched'],
            ['Cost per Streamed Hour', '$0.01–$0.10', '$0.001–$0.01', 'Efficiency improves at scale']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Video platform scaling behavior.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Smooth playback', 'All tiers healthy', 'Healthy'],
            ['2× Viewers', 'Slight CDN warming', 'More origin fetches', 'Add CDN capacity'],
            ['5× Viewers', 'Adaptive bitrate steps down', 'Maintains playback', 'Scale delivery aggressively'],
            ['10× Viewers', 'Regional hot spots', 'May need pre-positioning', 'Major live event'],
            ['Viral Upload Spike', 'Transcoding queue grows', 'Latency to publish increases', 'Scale transcoding farm'],
            ['Global Event', 'Multi-region load', 'Traffic shifts across continents', 'Follow-the-sun + multi-CDN']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Video platform scaling journey.',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single server hosts and streams videos. Manual uploads.',
          '<strong>Stage 2: 1K–10K users</strong> — CDN added. Basic transcoding. Object storage for files.',
          '<strong>Stage 3: 10K–100K users</strong> — HLS/DASH, ABR, transcoding farm. Multi-CDN begins.',
          '<strong>Stage 4: 100K–1M users</strong> — Distributed transcoding. Per-title optimization. DRM. Recommendation engine.',
          '<strong>Stage 5: 1M–10M users</strong> — Global platform. Live streaming. Edge compute. ML personalization. Real-time QoE analytics.',
          '<strong>Stage 6: 10M+ users</strong> — Planet-scale: Netflix/YouTube. ISP edge appliances, custom codecs, global recommendation platform, and autonomous bitrate adaptation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Scaling video platform components.',
        list: [
          '<strong>Client Tier:</strong> Players across devices. Adaptive bitrate, offline downloads, low-latency live. Report QoE.',
          '<strong>Edge / CDN Tier:</strong> Massive distributed caching. Multi-CDN steering. ISP-local caches for top content.',
          '<strong>Origin / Storage Tier:</strong> Object store with lifecycle policies. Hot content replicated widely; cold content on cheap storage.',
          '<strong>Transcoding Tier:</strong> Elastic worker farm. GPU for speed, CPU for quality. Job scheduling and priority queues.',
          '<strong>API / Manifest Tier:</strong> Scales with requests. Personalizes manifests. Auth and geo-fencing.',
          '<strong>Recommendation Tier:</strong> ML models rank content. Feature store. A/B testing. Separate from delivery path.',
          '<strong>Analytics / QoE Tier:</strong> Billions of playback events. Drives capacity planning, ABR tuning, and CDN selection.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Scaling strategies by challenge.',
        table: {
          headers: ['Challenge', 'Strategy', 'Impact', 'Complexity', 'Example'],
          rows: [
            ['Delivery cost', 'Multi-CDN + edge caches', 'Cost ↓ 30–50%', 'Medium', 'Netflix Open Connect'],
            ['Storage cost', 'Cold tier + lifecycle policies', 'Cost ↓ 70%+', 'Low', 'YouTube archival'],
            ['Transcoding cost', 'Spot instances + GPU', 'Cost ↓ 50%+', 'Medium', 'AWS Elemental'],
            ['Quality of experience', 'Per-title encoding + ABR', 'Rebuffering ↓', 'High', 'Netflix'],
            ['Live scale', 'Origin shield + pre-positioning', 'Hot events handled', 'High', 'Olympics streaming'],
            ['Personalization', 'ML recommendation platform', 'Engagement ↑', 'High', 'YouTube Home'],
            ['Global latency', 'Regional transcoding + CDN PoPs', 'Latency ↓', 'High', 'TikTok']
          ]
        }
      }
    ]
  }
};
