export const capstones = {
  module1: {
    'capstone-project': {
      title: 'Capstone: Multi-Channel Notification System',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design a notification system that sends alerts via email, SMS, and push notifications. This capstone applies all communication patterns from Module 1: message queues for async delivery, pub-sub for multi-channel fan-out, webhooks for third-party integration, and event-driven architecture for the entire flow.',
          list: [
            '<strong>Requirements:</strong> Send 10M+ notifications/day across 3 channels with <5s delivery latency',
            '<strong>Patterns used:</strong> Message Queues (retry buffer), Pub-Sub (fan-out to channels), Webhooks (delivery callbacks), Event-Driven (trigger flow)',
            '<strong>Scale:</strong> 10M notifications/day, 3 channels, 99.9% delivery guarantee'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph LR
    Trigger[Order Event] --> MQ["(Message Queue)"]
    MQ --> Fanout[Pub-Sub Fan-out]
    Fanout --> EmailSvc[Email Service]
    Fanout --> SmsSvc[SMS Service]
    Fanout --> PushSvc[Push Service]
    EmailSvc -->|Webhook| EmailProvider[SES/SendGrid]
    SmsSvc -->|Webhook| SmsProvider[Twilio]
    PushSvc -->|Webhook| FCM[Firebase FCM]
    EmailProvider -->|Callback| StatusDB["(Status DB)"]
    SmsProvider -->|Callback| StatusDB
    FCM -->|Callback| StatusDB`,
          text: 'Order event triggers a message queue. Pub-Sub fans out to 3 channel services. Each service calls its provider via webhook. Delivery callbacks update the status DB.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why message queue between trigger and fan-out? → Absorbs traffic spikes; if SMS provider is down, messages queue up instead of blocking the order service',
            'Why pub-sub for fan-out? → Adding a new channel (e.g., Slack) just means subscribing a new consumer — no changes to existing channels',
            'Why webhooks for providers? → Third-party APIs (Twilio, SES) are external — webhook callbacks let us know delivery status asynchronously',
            'Why event-driven? → The trigger (order placed) is an event; the notification flow is a reaction to that event, not a synchronous call'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Message Queue = async buffer between trigger and processing',
            'Pub-Sub = fan-out to multiple channels without coupling',
            'Webhooks = async delivery callbacks from external providers',
            'Event-Driven = the entire flow is triggered by domain events'
          ]
        }
      ]
    }
  },
  module2: {
    'capstone-project': {
      title: 'Capstone: Distributed Key-Value Store',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design a distributed key-value store like Redis or DynamoDB that stores 1TB of data across 10 nodes. This capstone applies storage patterns from Module 2: replication for availability, consistent hashing for distribution, sharding for write throughput, and WAL for durability.',
          list: [
            '<strong>Requirements:</strong> 1TB data, 10 nodes, 100K reads/sec, 50K writes/sec, 99.99% availability',
            '<strong>Patterns used:</strong> Replication (3 replicas), Consistent Hashing (distribution), Sharding (partition data), WAL (durability)',
            '<strong>Scale:</strong> 1TB data, 10 nodes, 3 replicas per shard'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    Client --> Router[Consistent Hash Router]
    Router -->|"hash(key) % ring"| N1[Node 1<br/>Primary]
    Router --> N2[Node 2<br/>Primary]
    Router --> N3[Node 3<br/>Primary]
    
    N1 -->|Replicate| R1[Replica 1]
    N1 -->|Replicate| R2[Replica 2]
    N2 -->|Replicate| R3[Replica 3]
    N2 -->|Replicate| R4[Replica 4]
    
    N1 -->|WAL| WAL1["(WAL Log)"]
    N2 -->|WAL| WAL2["(WAL Log)"]
    
    subgraph "Consistent Hash Ring"
        Ring[Hash Ring 0-2^32] --> Node1[Node1: 0-1B]
        Ring --> Node2[Node2: 1B-2B]
        Ring --> Node3[Node3: 2B-3B]
    end`,
          text: 'Client routes to the correct node using consistent hashing. Each node has 2 replicas for availability and a WAL for crash recovery.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why consistent hashing? → Adding/removing a node only rehashes a portion of keys, not all — minimal data movement',
            'Why 3 replicas? → Tolerates 2 node failures while keeping data available (quorum of 2/3)',
            'Why WAL? → On crash, replay WAL to recover in-memory state without losing committed writes',
            'Why sharding? → 1TB doesn\'t fit on one node — sharding distributes data across 10 nodes for parallel I/O'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Consistent Hashing = even distribution with minimal rehashing on scale changes',
            'Replication = 3 copies for fault tolerance (quorum reads/writes)',
            'WAL = durability — recover committed writes after crash',
            'Sharding = horizontal partitioning for write throughput'
          ]
        }
      ]
    }
  },
  module3: {
    'capstone-project': {
      title: 'Capstone: Caching Layer for E-Commerce Product Catalog',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design a caching layer for an e-commerce product catalog that serves 1M product pages/day with 95% cache hit rate. This capstone applies caching patterns from Module 3: cache-aside for product data, write-through for inventory updates, LRU eviction, CDN for images, and multi-tier caching for layered performance.',
          list: [
            '<strong>Requirements:</strong> 1M page views/day, <50ms response time, 95%+ cache hit rate',
            '<strong>Patterns used:</strong> Cache-Aside (product data), Write-Through (inventory), LRU Eviction, CDN (images), Multi-Tier (CDN + Redis + DB)',
            '<strong>Scale:</strong> 1M products, 10M images, 1M daily page views'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    User --> CDN[CDN Edge<br/>Images + static]
    CDN -->|Miss| Origin[Origin Server]
    Origin --> Redis["(Redis Cache<br/>Top 100K products)"]
    Redis -->|95% Hit| Response[Product Page]
    Redis -->|5% Miss| DB["(PostgreSQL<br/>All products)"]
    DB -->|Populate| Redis
    
    Admin[Admin Update] -->|Write-through| DB
    DB -->|Invalidate| Redis
    DB -->|Invalidate| CDN`,
          text: 'Three-tier cache: CDN (images, static), Redis (product data, 95% hit), DB (source of truth). Admin updates use write-through with cache invalidation.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why cache-aside for products? → Most products are rarely accessed; lazy loading only caches what\'s needed',
            'Why write-through for admin updates? → Inventory changes must be immediately consistent — write to DB and cache simultaneously',
            'Why LRU eviction? → Hot products (top 100K) stay in cache; cold products get evicted naturally',
            'Why CDN for images? → Product images are static and cacheable — CDN serves them from edge, reducing origin load by 90%'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multi-tier: CDN (images) → Redis (product data) → DB (source of truth)',
            'Cache-Aside: lazy load on miss, LRU evicts cold data',
            'Write-Through: admin updates go to DB + cache simultaneously',
            'CDN: static images served from edge, 90% origin load reduction'
          ]
        }
      ]
    }
  },
  module4: {
    'capstone-project': {
      title: 'Capstone: Resilient Payment Processing System',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design a payment processing system that handles 10K transactions/minute with zero lost payments. This capstone applies reliability patterns from Module 4: timeouts for stuck calls, retries with exponential backoff, idempotency for safe retries, circuit breakers for bank failures, bulkheads for resource isolation, and rate limiting for fraud protection.',
          list: [
            '<strong>Requirements:</strong> 10K tx/min, zero lost payments, <2s processing time, 99.99% success rate',
            '<strong>Patterns used:</strong> Timeouts, Retries + Backoff, Idempotency, Circuit Breaker, Bulkhead, Rate Limiting',
            '<strong>Scale:</strong> 10K tx/min, 5 bank integrations, 3 payment methods'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    Client --> GW[API Gateway<br/>Rate Limit: 100 req/s/user]
    GW --> Pool[Connection Pool<br/>Bulkhead: 50 per bank]
    Pool --> CB1[Circuit Breaker<br/>Bank A]
    Pool --> CB2[Circuit Breaker<br/>Bank B]
    Pool --> CB3[Circuit Breaker<br/>Bank C]
    
    CB1 -->|Timeout 3s| BankA[Bank A API]
    CB1 -->|Retry x3| BankA
    CB1 -->|Open| Fallback[Fallback Queue]
    
    BankA -->|Idempotency Key| DB["(Tx DB<br/>idempotency_key unique)"]
    Fallback -->|Process later| DB`,
          text: 'Each bank has a circuit breaker and dedicated connection pool (bulkhead). Idempotency keys prevent double-charges on retry. Rate limiting prevents fraud.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why idempotency keys? → If a retry happens (network timeout), the bank must not charge twice — same idempotency key returns the original result',
            'Why circuit breaker per bank? → If Bank A is down, stop sending traffic immediately instead of queuing timeouts — fallback to queue for later processing',
            'Why bulkhead (connection pool per bank)? → If Bank A is slow, it doesn\'t exhaust connections for Bank B and C — isolate failures',
            'Why rate limiting? → Prevent a single merchant from flooding the system — 100 req/s/user protects against both fraud and bugs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Idempotency = safe retries (same key = same result, no double-charge)',
            'Circuit Breaker = stop calling failing banks, fallback to queue',
            'Bulkhead = isolate bank failures (Bank A slow ≠ Bank B blocked)',
            'Rate Limiting = protect against fraud and abuse'
          ]
        }
      ]
    }
  },
  module5: {
    'capstone-project': {
      title: 'Capstone: Scaling a Web App from 1K to 1M Users',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Take a monolithic web application serving 1K users and scale it to 1M users. This capstone applies scaling patterns from Module 5: horizontal scaling with load balancing, auto-scaling policies, database read replicas and sharding, stateless services, and microservices decomposition.',
          list: [
            '<strong>Requirements:</strong> Scale from 1K to 1M users, <200ms response time, 99.9% availability',
            '<strong>Patterns used:</strong> Horizontal Scaling, Load Balancing, Auto-Scaling, DB Scaling, Stateless Services, Microservices',
            '<strong>Stages:</strong> 1K users (monolith) → 10K (LB + replicas) → 100K (DB sharding) → 1M (microservices)'
          ]
        },
        {
          heading: 'Scaling Stages',
          diagram: `graph TB
    subgraph "Stage 1: 1K users"
        M1[Monolith<br/>1 server] --> DB1["(Single DB)"]
    end
    
    subgraph "Stage 2: 10K users"
        LB2[Load Balancer] --> S2a[Server 1]
        LB2 --> S2b[Server 2]
        S2a --> DB2["(DB + Read Replica)"]
        S2b --> DB2
    end
    
    subgraph "Stage 3: 100K users"
        LB3[Auto-Scaling Group<br/>5-20 servers] --> Cache3["(Redis Cache)"]
        Cache3 --> DB3["(Sharded DB<br/>3 shards)"]
    end
    
    subgraph "Stage 4: 1M users"
        GW4[API Gateway] --> MS1[User Service]
        GW4 --> MS2[Order Service]
        GW4 --> MS3[Search Service]
        MS1 --> DB4a["(User DB)"]
        MS2 --> DB4b["(Order DB)"]
        MS3 --> ES4["(Elasticsearch)"]
    end`,
          text: 'Stage 1: monolith on one server. Stage 2: load balancer + 2 servers + read replica. Stage 3: auto-scaling + cache + sharded DB. Stage 4: microservices with independent databases.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Stage 2: Why load balancer before scaling? → Distributes traffic evenly; health checks remove failing servers automatically',
            'Stage 3: Why shard the DB? → Read replicas help reads, but writes still go to one primary — sharding partitions writes across 3 nodes',
            'Stage 3: Why Redis cache? → 95% of requests are reads (product browsing) — cache absorbs them, reducing DB load 10x',
            'Stage 4: Why microservices? → Different services have different scaling needs — search scales 10x during sales, user service stays steady'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            '1K → 10K: add load balancer + horizontal scaling + read replicas',
            '10K → 100K: add cache + auto-scaling + DB sharding',
            '100K → 1M: decompose into microservices with independent scaling',
            'Each stage addresses a specific bottleneck (CPU, DB writes, team scaling)'
          ]
        }
      ]
    }
  },
  module6: {
    'capstone-project': {
      title: 'Capstone: Distributed Movie Ticket Booking System',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design a movie ticket booking system where multiple users can book seats for the same show simultaneously. This capstone applies distributed consistency patterns from Module 6: Saga for the booking flow, quorum consistency for seat availability, eventual consistency for analytics, and CAP theorem tradeoffs for the design.',
          list: [
            '<strong>Requirements:</strong> 10K shows, 100 seats each, 1K concurrent bookings, no double-booking',
            '<strong>Patterns used:</strong> Saga (booking flow), Quorum Consistency (seat availability), Eventual Consistency (analytics), CAP (AP for browsing, CP for booking)',
            '<strong>Scale:</strong> 1M tickets/day, 5K theaters, 500K concurrent users'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    User --> Booking[Booking Saga]
    Booking -->|Step 1| Reserve[Reserve Seats<br/>CP: strong consistency]
    Booking -->|Step 2| Payment[Process Payment]
    Booking -->|Step 3| Confirm[Confirm Booking]
    
    Reserve -->|Quorum W=2,R=2| SeatDB["(Seat DB<br/>3 replicas)"]
    Payment -->|Saga compensate| Refund[Refund if fails]
    
    Booking -->|Event| Analytics[Analytics<br/>AP: eventual consistency]
    Analytics --> DW["(Data Warehouse)"]
    
    Browsing[Browse Shows] -->|AP: eventual| BrowseDB["(Read Replica<br/>eventual consistent)"]`,
          text: 'Booking uses Saga with strong consistency (CP) for seat reservation. Browsing uses eventual consistency (AP) for availability. Analytics is eventually consistent.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why Saga for booking? → Reserve seats → process payment → confirm — if payment fails, compensate by releasing seats',
            'Why quorum for seat reservation? → W=2, R=2, N=3 ensures reads always see the latest write — no double-booking',
            'Why AP for browsing? → Show listings and seat maps can be slightly stale — better availability during peak traffic',
            'Why eventual consistency for analytics? → Booking stats don\'t need real-time accuracy — async events to warehouse are fine'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Saga = reserve → pay → confirm, with compensations on failure',
            'Quorum (W+R>N) = strong consistency for seat reservation (no double-booking)',
            'AP (eventual) = browsing and analytics tolerate staleness for availability',
            'CAP: CP for money/critical, AP for browsing/analytics'
          ]
        }
      ]
    }
  },
  module7: {
    'capstone-project': {
      title: 'Capstone: Multi-Client API Platform',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design an API platform that serves a web app, mobile app, and third-party developers from the same backend. This capstone applies API patterns from Module 7: API gateway for centralized routing, BFF for client-specific responses, API versioning for evolution, edge rate limiting, CDN for static assets, and GraphQL federation for unified data.',
          list: [
            '<strong>Requirements:</strong> Web + mobile + 3rd-party API, 100K req/min, 3 API versions, 99.9% uptime',
            '<strong>Patterns used:</strong> API Gateway, BFF, API Versioning, Edge Rate Limiting, CDN, GraphQL Federation',
            '<strong>Scale:</strong> 100K req/min, 50 third-party integrations, 3 client types'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    Web[Web App] --> WBFF[Web BFF]
    Mobile[Mobile App] --> MBFF[Mobile BFF]
    API3[3rd Party Devs] --> GW[API Gateway v1/v2]
    
    WBFF --> Gateway[Core API Gateway]
    MBFF --> Gateway
    GW --> Gateway
    
    Gateway -->|Rate Limit| RL[Per-user limits]
    Gateway -->|Auth| Auth[OAuth2/JWT]
    
    Gateway --> UserSvc[User Service]
    Gateway --> OrderSvc[Order Service]
    Gateway --> ProductSvc[Product Service]
    
    CDN[CDN] -->|Static assets| Web
    CDN -->|Static assets| Mobile
    
    Gateway -->|GraphQL Federation| Supergraph[Supergraph<br/>User + Order + Product subgraphs]`,
          text: 'Each client type gets its own BFF. API Gateway handles routing, auth, rate limiting. GraphQL Federation composes subgraphs for flexible queries. CDN serves static assets.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why BFF per client? → Mobile needs smaller payloads (save bandwidth); web needs richer data (reviews, recommendations); 3rd-party needs stable API',
            'Why API versioning? → v1 for early adopters, v2 with breaking changes — sunset v1 after 12 months',
            'Why GraphQL Federation? → Third-party devs can query exactly the fields they need — no over-fetching, single endpoint',
            'Why edge rate limiting? → Protect backend from 3rd-party abuse — 1000 req/min for free tier, 10K for paid'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BFF = tailored API per client (mobile, web, 3rd-party)',
            'API Gateway = routing, auth, rate limiting in one place',
            'Versioning = v1/v2 coexist with deprecation timeline',
            'GraphQL Federation = flexible queries, no over-fetching'
          ]
        }
      ]
    }
  },
  module8: {
    'capstone-project': {
      title: 'Capstone: Zero-Downtime Deployment Pipeline',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Design a deployment pipeline that releases new versions with zero downtime, automatic rollback, and full observability. This capstone applies production ops patterns from Module 8: canary deployment, feature flags, observability, health checks, and chaos engineering.',
          list: [
            '<strong>Requirements:</strong> Zero downtime, automatic rollback <90s, 50+ deployments/day, full observability',
            '<strong>Patterns used:</strong> Canary Deployment, Feature Flags, Observability, Health Checks, Chaos Engineering',
            '<strong>Scale:</strong> 20 microservices, 500 instances, 50 deploys/day'
          ]
        },
        {
          heading: 'Pipeline Architecture',
          diagram: `graph TB
    Dev[Developer] -->|Push| CI[CI Pipeline]
    CI -->|Build + Test| Image[Container Image]
    Image -->|Deploy| Canary[Canary: 5% traffic]
    
    Canary -->|Monitor| Metrics[Metrics: errors, latency, saturation]
    Metrics -->|Healthy| Scale[Scale to 100%]
    Metrics -->|Unhealthy| Rollback[Auto Rollback <90s]
    
    FeatureFlags[Feature Flags] -->|Gradual rollout| Canary
    FeatureFlags -->|Kill switch| Rollback
    
    Observability[Logs + Metrics + Traces] --> Dashboard[Grafana Dashboard]
    Chaos[Chaos Monkey] -->|Random kills| Prod[Production]
    
    HealthChecks[Liveness + Readiness] -->|Auto-restart| Prod`,
          text: 'CI builds and deploys to 5% canary. Metrics monitored for 5 minutes — healthy scales to 100%, unhealthy auto-rolls back. Feature flags control rollout. Observability and chaos engineering ensure reliability.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why canary over blue-green? → 20 microservices with independent deploy schedules — canary allows gradual rollout per service',
            'Why feature flags? → Decouple deploy from release — deploy code with flags off, turn on per-user or per-percentage',
            'Why three pillars of observability? → Metrics trigger alerts, traces show which service is slow, logs show why — together they enable <5min MTTR',
            'Why chaos engineering? → Continuously test resilience — kill random instances to ensure auto-recovery works'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Canary = 5% → 25% → 50% → 100% with auto-rollback',
            'Feature Flags = deploy anytime, release when ready',
            'Observability = metrics (alert) + traces (where) + logs (why)',
            'Chaos Engineering = proactively find weaknesses'
          ]
        }
      ]
    }
  },
  module9: {
    'capstone-project': {
      title: 'Capstone: Real-Time Analytics Dashboard',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Build a real-time analytics dashboard that processes 1M events/second and shows live metrics with <1s latency. This capstone applies data-intensive patterns from Module 9: stream processing, CDC for real-time data sync, exactly-once processing, and the Kappa architecture for unified batch + stream processing.',
          list: [
            '<strong>Requirements:</strong> 1M events/sec, <1s dashboard latency, exactly-once guarantee, 7-year data retention',
            '<strong>Patterns used:</strong> Stream Processing, CDC, Exactly-Once, Kappa Architecture',
            '<strong>Scale:</strong> 1M events/sec, 1PB historical data, 100 dashboard users'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    Events[App Events<br/>1M/sec] --> Kafka["(Kafka<br/>7-day retention)"]
    
    Kafka --> Flink[Apache Flink<br/>Stream Processor]
    Flink -->|Windowed aggregates| RealTimeDB["(ClickHouse<br/>Real-time views)"]
    Flink -->|Exactly-once| CheckpointDB["(Checkpoint Store)"]
    
    Kafka -->|Replay| Flink2[Flink Replay Job<br/>Reprocess historical]
    
    CDC[CDC: PostgreSQL] -->|Debezium| Kafka
    
    RealTimeDB --> Dashboard[Real-time Dashboard<br/><1s latency]
    
    subgraph "Kappa Architecture"
        Kafka -->|Real-time| Flink
        Kafka -->|Replay from offset 0| Flink2
        Flink --> Sink1[ClickHouse]
        Flink2 --> Sink1
    end`,
          text: 'Events flow through Kafka to Flink stream processor. Flink writes aggregates to ClickHouse for <1s dashboard queries. CDC streams DB changes to Kafka. Kappa architecture: single Flink job handles both real-time and replay.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why Kappa over Lambda? → Single codebase (Flink) for both real-time and replay — no batch/stream duplication',
            'Why exactly-once? → Analytics metrics must be accurate — duplicate events would inflate counts; Flink checkpoints + Kafka transactions ensure exactly-once',
            'Why CDC? → Sync PostgreSQL changes to Kafka in real-time — dashboard shows live order/user counts without polling the DB',
            'Why ClickHouse? → Optimized for time-series aggregations — 100x faster than PostgreSQL for "count events per minute" queries'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Kappa = single stream processor for real-time + replay (no batch layer)',
            'Exactly-Once = Flink checkpoints + Kafka transactions (no duplicates)',
            'CDC = real-time DB sync without polling (Debezium → Kafka → Flink)',
            'ClickHouse = fast time-series queries for real-time dashboards'
          ]
        }
      ]
    }
  },
  module10: {
    'capstone-project': {
      title: 'Capstone: AI Customer Support Assistant',
      sections: [
        {
          heading: 'Project Overview',
          text: 'Build an AI customer support assistant that handles 50K queries/day with 80% auto-resolution rate. This capstone applies AI-era patterns from Module 10: LLM gateway for model management, semantic caching for cost reduction, RAG for grounding in company docs, vector DB for knowledge retrieval, GPU serving for batch inference, and model routing for cost optimization.',
          list: [
            '<strong>Requirements:</strong> 50K queries/day, 80% auto-resolution, <3s response time, $0.05/query avg cost',
            '<strong>Patterns used:</strong> LLM Gateway, Semantic Caching, RAG Pipeline, Vector DB, GPU Serving, Model Routing',
            '<strong>Scale:</strong> 50K queries/day, 10K docs in knowledge base, 3 LLM providers'
          ]
        },
        {
          heading: 'Architecture',
          diagram: `graph TB
    User[Customer Query] --> GW[LLM Gateway]
    GW -->|Check semantic cache| Cache["(Vector Cache<br/>Pinecone)"]
    Cache -->|Hit 40%| Response[Return cached answer]
    Cache -->|Miss| Router[Model Router]
    
    Router -->|Simple FAQ| Small[Small Model<br/>GPT-3.5<br/>$0.001/query]
    Router -->|Complex issue| Large[Large Model<br/>GPT-4<br/>$0.03/query]
    
    Small --> RAG[RAG Pipeline]
    Large --> RAG
    
    RAG -->|Embed query| VDB["(Vector DB<br/>10K docs)"]
    VDB -->|Top 5 chunks| Context[Context]
    Context -->|Augment prompt| LLM[LLM Generate]
    LLM --> Response
    
    Response -->|Store in cache| Cache
    Response -->|Track usage| Metrics[Cost + Token Metrics]
    
    GW -->|Fallback| Fallback[Local Llama Model<br/>if API down]`,
          text: 'Query hits LLM gateway → semantic cache check (40% hit). On miss, model router picks small or large model. RAG retrieves relevant docs from vector DB. Response cached and metrics tracked.'
        },
        {
          heading: 'Key Design Decisions',
          list: [
            'Why semantic caching? → 40% of support queries are similar ("how to reset password?") — cache hit saves LLM call entirely ($0 cost)',
            'Why RAG? → LLM alone hallucinates company-specific info — RAG grounds answers in actual documentation (80% resolution rate)',
            'Why model routing? → 70% of queries are simple (GPT-3.5, $0.001) vs 30% complex (GPT-4, $0.03) — avg cost $0.013 vs $0.03 for all-GPT-4',
            'Why GPU serving for fallback? → Local Llama model on own GPU ensures 100% availability even if API providers are down'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LLM Gateway = centralized routing, caching, cost tracking',
            'Semantic Cache = 40% hit rate = 40% cost reduction',
            'RAG = grounded answers from company docs (no hallucination)',
            'Model Routing = 70% simple (cheap) + 30% complex (expensive) = avg $0.013/query'
          ]
        }
      ]
    }
  }
};