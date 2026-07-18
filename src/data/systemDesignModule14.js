// Module 14: Trade-offs

export const systemDesignModule14 = {
  module14: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'System design interviews rarely have one "right" answer. They are about choosing the right trade-off for a given problem. This module covers the most important X-vs-Y comparisons in distributed systems: consistency models, performance metrics, database guarantees, infrastructure components, communication styles, replication strategies, caching layers, and architectural paradigms.',
          list: [
            '<strong>Topics covered:</strong> Strong vs Eventual Consistency, Latency vs Throughput, ACID vs BASE, Load Balancer vs API Gateway, API Gateway vs Reverse Proxy, Primary-Replica vs Peer-to-Peer, Server-Side vs Client-Side Caching, REST vs RPC, Polling vs WebSockets vs Webhooks, CDN vs Direct Server, Serverless vs Traditional, Stateful vs Stateless, Token Bucket vs Leaky Bucket, Read-Heavy vs Write-Heavy design',
            '<strong>Prerequisites:</strong> Modules on communication, storage, and scaling fundamentals',
            '<strong>Time to complete:</strong> ~2-3 hours including comparisons and practice questions',
            '<strong>Best for:</strong> System design interviews, architecture reviews, and trade-off analysis'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Senior engineers are evaluated not by whether they know a single tool, but by whether they can justify one choice over another. Every system design decision involves trade-offs between consistency, availability, latency, throughput, cost, complexity, and operational burden. Mastering these comparisons lets you defend your design decisions with clarity.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1["Strong vs Eventual Consistency"] --> T2["Latency vs Throughput"]
    T2 --> T3["ACID vs BASE"]
    T3 --> T4["Load Balancer vs API Gateway"]
    T4 --> T5["API Gateway vs Reverse Proxy"]
    T5 --> T6["Primary-Replica vs Peer-to-Peer"]
    T6 --> T7["Server-Side vs Client-Side Caching"]
    T7 --> T8["REST vs RPC"]
    T8 --> T9["Polling vs WebSocket vs Webhook"]
    T9 --> T10["CDN vs Direct Server"]
    T10 --> T11["Serverless vs Traditional"]
    T11 --> T12["Stateful vs Stateless"]
    T12 --> T13["Token Bucket vs Leaky Bucket"]
    T13 --> T14["Read-Heavy vs Write-Heavy"]`,
          text: 'Recommended reading order — each comparison builds context for the next.'
        }
      ]
    },

    'strong-vs-eventual-consistency': {
      title: 'Strong vs Eventual Consistency',
      sections: [
        {
          heading: 'Strong Consistency',
          text: 'Strong consistency guarantees that after a write completes, any subsequent read will see the latest value. The system behaves as if there is only one copy of the data, even if it is replicated across many nodes. This usually requires coordination (locks, quorums, or consensus protocols) and adds latency.'
        },
        {
          heading: 'Eventual Consistency',
          text: 'Eventual consistency allows replicas to temporarily diverge. After a write, some reads may return stale values until all replicas converge. There is no coordination on every read, so the system is faster and more available, especially across distributed nodes.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Strong Consistency', 'Eventual Consistency'],
            rows: [
              ['Read guarantee', 'Always latest write', 'May be stale temporarily'],
              ['Latency', 'Higher (coordination)', 'Lower (no coordination)'],
              ['Availability', 'Lower under partitions', 'Higher under partitions'],
              ['Use case', 'Bank balances, inventory', 'Social feeds, comments, analytics'],
              ['Implementation', 'Paxos, Raft, 2PC, quorums', 'Async replication, conflict resolution'],
              ['Conflict handling', 'No conflicts', 'Last-write-wins or vector clocks']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph Strong["Strong Consistency"]
      C1[Client] --> W1[Write]
      W1 --> Q1[Quorum/Consensus]
      Q1 --> N1[Node A]
      Q1 --> N2[Node B]
      Q1 --> N3[Node C]
      C1 --> R1[Read]
      R1 --> Q1
    end
    subgraph Eventual["Eventual Consistency"]
      C2[Client] --> W2[Write to Node A]
      W2 --> N4[Node A]
      N4 -.->|Async replication| N5[Node B]
      N4 -.->|Async replication| N6[Node C]
      C2 --> R2[Read from Node B]
      R2 --> N5
    end`,
            caption: 'Strong consistency coordinates reads/writes across replicas. Eventual consistency writes locally and replicates asynchronously.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Twitter timeline and Amazon DynamoDB.</strong> Twitter timelines are eventually consistent — a tweet may take a few seconds to propagate globally, which is acceptable. In contrast, AWS DynamoDB supports configurable consistency: strongly consistent reads for critical operations (like confirming a payment state) and eventually consistent reads by default for cost and performance.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Strong consistency = every read returns the latest write; coordination required',
            'Eventual consistency = replicas may lag; higher availability and lower latency',
            'Choose strong consistency for correctness-critical data',
            'Choose eventual consistency for scale, availability, and partition tolerance'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When would you choose strong consistency? → Bank balances, inventory reservations, seat bookings, any domain where stale data is unacceptable.',
            'Q2: What is the CAP theorem trade-off with eventual consistency? → You favor availability and partition tolerance over immediate consistency.',
            'Q3: How do you detect and resolve conflicts in an eventually consistent system? → Use vector clocks, last-write-wins, or application-level reconciliation.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Can a system be both strongly and eventually consistent?</strong> A: Yes, at different scopes. A system can enforce strong consistency for a single entity and eventual consistency across aggregates or replicas.',
            '<strong>Q: How does DynamoDB support strong reads?</strong> A: It reads from the leader replica and waits for acknowledgement, costing twice the throughput of an eventually consistent read.',
            '<strong>Q: What is monotonic read consistency?</strong> A: A middle ground where a client never sees older data after seeing newer data, even if it is not always the absolute latest.'
          ]
        }
      ]
    },

    'latency-vs-throughput': {
      title: 'Latency vs Throughput',
      sections: [
        {
          heading: 'Latency',
          text: 'Latency is the time it takes for a single operation to complete, usually measured from the client sending a request to receiving the first byte of the response. Lower latency means faster response for individual users. It is critical for interactive applications like search, gaming, and trading platforms.'
        },
        {
          heading: 'Throughput',
          text: 'Throughput is the number of operations the system can handle per unit of time (e.g., requests per second, messages per second). Higher throughput means the system can serve more load in aggregate. It is critical for batch processing, streaming, and high-traffic APIs.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Latency', 'Throughput'],
            rows: [
              ['Definition', 'Time per operation', 'Operations per unit time'],
              ['Unit', 'Milliseconds (ms), seconds', 'RPS, TPS, messages/sec'],
              ['Optimization goal', 'Minimize time to first byte', 'Maximize total workload'],
              ['Typical lever', 'Caching, CDN, faster hardware', 'Batching, horizontal scaling, partitioning'],
              ['Trade-off', 'High throughput may add queuing latency', 'Low latency can reduce batching efficiency'],
              ['Example', 'Search autocomplete', 'Log ingestion pipeline']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph Latency["Latency-Optimized System"]
      C1[Client] -->|Request| LB1[Load Balancer]
      LB1 --> S1[App Server]
      S1 --> Cache[(Cache)]
      Cache --> S1
      S1 -->|Response| C1
    end
    subgraph Throughput["Throughput-Optimized System"]
      C2[Client] -->|Batch request| LB2[Load Balancer]
      LB2 --> S2[App Server]
      S2 --> Q[(Queue)]
      Q --> W1[Worker 1]
      Q --> W2[Worker 2]
      Q --> W3[Worker 3]
    end`,
            caption: 'Latency optimization uses caching and short paths. Throughput optimization uses queues and parallel workers.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Google Search vs Kafka log ingestion.</strong> Google Search optimizes latency — results must appear in milliseconds, so it uses in-memory indexes, caching, and edge locations. Apache Kafka optimizes throughput — it can ingest millions of events per second by batching, sequential disk writes, and partitioning, accepting per-message latency of milliseconds to seconds.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Latency = how fast one request completes',
            'Throughput = how many requests the system can handle',
            'Optimize latency with caching, CDNs, and fast storage',
            'Optimize throughput with batching, queues, and horizontal scaling'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Can you optimize latency and throughput at the same time? → Not always; batching improves throughput but adds per-request latency. You optimize for the workload.',
            'Q2: What metric matters most for a stock trading platform? → Latency, because microseconds decide trade execution.',
            'Q3: How do you measure latency fairly? → Use percentiles (p50, p95, p99) rather than averages, because averages hide tail latency.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Why is latency often more important than throughput for user-facing systems?</strong> A: Users notice delays directly; a slow page causes abandonment. Aggregate throughput matters less if each user request is slow.',
            '<strong>Q: How does queuing affect latency and throughput?</strong> A: Queues improve throughput by smoothing load, but they add queuing delay, which increases latency.',
            '<strong>Q: What is tail latency?</strong> A: The latency of the slowest percentiles (p99 or p999). It is important because a few slow requests can dominate user experience.'
          ]
        }
      ]
    },

    'acid-vs-base': {
      title: 'ACID vs BASE Properties in Databases',
      sections: [
        {
          heading: 'ACID',
          text: 'ACID stands for Atomicity, Consistency, Isolation, and Durability. It is the traditional transaction model used by relational databases. ACID guarantees that a group of operations either completes entirely or fails entirely, leaving the database in a valid state. It is ideal for systems where correctness is paramount.'
        },
        {
          heading: 'BASE',
          text: 'BASE stands for Basically Available, Soft state, and Eventually consistent. It is the philosophy behind many NoSQL databases. BASE relaxes immediate consistency in favor of availability and performance. Data may be temporarily inconsistent across replicas, but the system remains available and scales horizontally.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Property', 'ACID', 'BASE'],
            rows: [
              ['Atomicity', 'All operations succeed or roll back', 'Not guaranteed across documents/nodes'],
              ['Consistency', 'Always consistent after transaction', 'Eventually consistent'],
              ['Isolation', 'Transactions isolated from each other', 'Concurrency handled loosely'],
              ['Durability', 'Committed data survives failures', 'Usually durable, but model does not guarantee'],
              ['Availability', 'Can block during contention', 'Highly available under partitions'],
              ['Scalability', 'Vertical + limited horizontal', 'Horizontal scale-out friendly']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph ACID["ACID System"]
      C1[Client] --> T1[Transaction]
      T1 --> DB1[(Primary DB)]
      DB1 --> |Commit/Rollback| T1
      T1 -->|Ack| C1
    end
    subgraph BASE["BASE System"]
      C2[Client] --> W1[Write Node A]
      W1 --> N1[Node A]
      N1 -.->|Async replicate| N2[Node B]
      N1 -.->|Async replicate| N3[Node C]
      C2 --> R1[Read Node B]
      R1 --> N2
    end`,
            caption: 'ACID uses a single transaction boundary. BASE writes locally and replicates asynchronously across nodes.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Banking vs Netflix viewing history.</strong> Banking systems use ACID relational databases to ensure that transfers and balance updates are exact and atomic. Netflix uses a BASE-approach NoSQL store (Cassandra) for viewing history: a temporary delay in showing a recently watched episode across devices is acceptable, but the system must never go down under load.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'ACID = Atomicity, Consistency, Isolation, Durability',
            'BASE = Basically Available, Soft state, Eventually consistent',
            'ACID is for correctness-critical transactional workloads',
            'BASE is for high-availability, high-scale distributed workloads'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Give an example where ACID is mandatory. → Payment processing, inventory reservation, booking systems.',
            'Q2: Why is BASE easier to scale horizontally? → No need for distributed locks or consensus on every write; replicas can converge asynchronously.',
            'Q3: Can a NoSQL database support ACID? → Yes, some modern NoSQL databases (e.g., MongoDB multi-document transactions, CockroachDB) offer ACID at the cost of some performance.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Is ACID the opposite of the CAP theorem?</strong> A: Not exactly. CAP focuses on consistency vs availability under network partitions. ACID is a stronger transactional guarantee that historically prioritizes consistency and isolation over availability.',
            '<strong>Q: What does "soft state" mean in BASE?</strong> A: The state of the system can change without direct input, typically during background replication and reconciliation.',
            '<strong>Q: How do you choose between ACID and BASE?</strong> A: Start with business requirements: if a single incorrect value is costly, lean ACID; if availability and scale matter more, lean BASE.'
          ]
        }
      ]
    },

    'load-balancer-vs-api-gateway': {
      title: 'Load Balancer vs API Gateway',
      sections: [
        {
          heading: 'Load Balancer',
          text: 'A load balancer distributes incoming network traffic across multiple servers to improve availability, fault tolerance, and capacity. It operates primarily at Layer 4 (transport) or Layer 7 (application) of the OSI model. Its main job is to route, health-check, and scale horizontally by adding backend servers.'
        },
        {
          heading: 'API Gateway',
          text: 'An API gateway is a Layer 7 reverse proxy that sits between clients and backend services. It handles routing, authentication, rate limiting, request transformation, caching, and protocol translation. It is an application-aware entry point that enforces API policies and often aggregates multiple microservices into one client-facing API.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Load Balancer', 'API Gateway'],
            rows: [
              ['Primary role', 'Distribute traffic', 'Manage API lifecycle'],
              ['Layer', 'L4 or L7', 'L7 only'],
              ['Authentication', 'Usually not', 'Yes (JWT, OAuth, API keys)'],
              ['Rate limiting', 'Basic', 'Advanced per user/API/route'],
              ['Request transformation', 'No', 'Yes (JSON ↔ XML, protocol translation)'],
              ['Service aggregation', 'No', 'Yes'],
              ['Examples', 'Nginx, HAProxy, AWS ALB', 'Kong, AWS API Gateway, Zuul']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph LB["Load Balancer Setup"]
      C1[Clients] --> LB1[Load Balancer]
      LB1 --> S1[App Server 1]
      LB1 --> S2[App Server 2]
      LB1 --> S3[App Server 3]
    end
    subgraph GW["API Gateway Setup"]
      C2[Clients] --> GW1[API Gateway]
      GW1 -->|Auth + Rate Limit| A[Service A]
      GW1 -->|Transform| B[Service B]
      GW1 -->|Aggregate| C[Service C]
      A --> DB1[(DB)]
      B --> DB2[(DB)]
      C --> DB3[(DB)]
    end`,
            caption: 'Load balancer spreads traffic across identical servers. API gateway enforces policies and routes to different services.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Uber microservices.</strong> Uber uses a load balancer at the edge to distribute traffic across ingress gateways. Inside the platform, an API gateway handles authentication, rate limiting, and route discovery for thousands of microservices. The gateway may also translate mobile REST requests into internal gRPC calls.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Load balancer = traffic distribution, high availability, horizontal scaling',
            'API gateway = authentication, rate limiting, routing, transformation, aggregation',
            'They are often used together: LB at the edge, gateway behind it',
            'Choose LB for simple scaling; add gateway for API policy enforcement'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Can a load balancer perform rate limiting? → Yes, but usually coarse-grained (IP-based). API gateways offer per-user or per-route limits.',
            'Q2: Where does SSL termination usually happen? → At the load balancer or API gateway, so backend servers do not need to handle TLS.',
            'Q3: Why would you put both a load balancer and an API gateway in front of microservices? → LB handles edge traffic and TLS; gateway handles API-specific policies and routing.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Can an API gateway replace a load balancer?</strong> A: It can handle some routing, but not all load balancing concerns like cross-region failover or L4 health checks. Typically both are used.',
            '<strong>Q: What is a common pitfall of API gateways?</strong> A: Becoming a single point of failure or bottleneck. Use replicas, rate limiting, and keep logic lightweight.',
            '<strong>Q: What is the difference between an edge proxy and an API gateway?</strong> A: Edge proxies focus on security, TLS, and caching. API gateways are application-aware and enforce API policies.'
          ]
        }
      ]
    },

    'api-gateway-vs-reverse-proxy': {
      title: 'API Gateway vs Reverse Proxy',
      sections: [
        {
          heading: 'Reverse Proxy',
          text: 'A reverse proxy sits between clients and backend servers and forwards client requests to the appropriate backend. It hides the internal topology, provides SSL termination, caching, compression, and basic load balancing. It is usually lightweight and protocol-aware but not necessarily API-aware.'
        },
        {
          heading: 'API Gateway',
          text: 'An API gateway is a specialized reverse proxy designed for APIs. It adds authentication, authorization, rate limiting, API versioning, request/response transformation, analytics, and service aggregation. It understands the API contract and often integrates with developer portals and identity providers.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Reverse Proxy', 'API Gateway'],
            rows: [
              ['Scope', 'Network/TLS/basic routing', 'Full API lifecycle management'],
              ['Authentication', 'TLS termination, maybe mTLS', 'JWT, OAuth, API keys, SSO'],
              ['Rate limiting', 'IP-based, basic', 'Quota, tier, per-client'],
              ['Caching', 'Static/response caching', 'Endpoint-aware caching'],
              ['Transformation', 'Header rewrite, URL rewrite', 'Protocol, body, schema transformation'],
              ['Analytics/billing', 'Basic logs', 'Usage analytics, billing integration'],
              ['Examples', 'Nginx, Apache, Traefik', 'Kong, AWS API Gateway, Azure APIM']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph RP["Reverse Proxy"]
      C1[Client] --> RP1[Reverse Proxy]
      RP1 -->|SSL + Cache| S1[Web Server]
      RP1 -->|SSL + Cache| S2[Web Server]
    end
    subgraph GW["API Gateway"]
      C2[Mobile Client] --> GW1[API Gateway]
      GW1 -->|Auth| Auth[Identity Provider]
      GW1 -->|Rate Limit| R[Rate Limiter]
      GW1 -->|Route| A[User Service]
      GW1 -->|Aggregate| B[Order Service]
      GW1 -->|Transform| C[Legacy SOAP]
    end`,
            caption: 'Reverse proxy focuses on forwarding and termination. API gateway adds API-specific policy and transformation.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix and Kong.</strong> Netflix historically used Zuul as an API gateway for its streaming API, handling authentication, routing, and rate limiting for devices worldwide. A simpler Nginx reverse proxy can serve static web assets, terminate TLS, and cache responses, but it does not know about API tokens or per-user quotas.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'All API gateways are reverse proxies, but not all reverse proxies are API gateways',
            'Reverse proxy = TLS, caching, forwarding, basic load balancing',
            'API gateway = auth, rate limiting, transformation, analytics, service aggregation',
            'Use a reverse proxy for simple web traffic; use an API gateway for API management'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When do you need an API gateway instead of a reverse proxy? → When you need per-client rate limits, API versioning, OAuth, or request transformation.',
            'Q2: Can you use both together? → Yes. Reverse proxy at the edge, API gateway behind it for service policies.',
            'Q3: What is a common reason to avoid a gateway for internal services? → Added latency and complexity; service mesh may be a lighter alternative.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: What is the difference between forward and reverse proxy?</strong> A: A forward proxy represents clients (outbound). A reverse proxy represents servers (inbound).',
            '<strong>Q: How does a gateway help with legacy system migration?</strong> A: It translates new REST requests to legacy SOAP or RPC formats, allowing clients to migrate without touching old backends.',
            '<strong>Q: Should authentication happen at the gateway or the service?</strong> A: Usually at the gateway for coarse-grained checks; services should still validate scopes for fine-grained authorization.'
          ]
        }
      ]
    },

    'primary-replica-vs-peer-to-peer': {
      title: 'Primary-Replica vs Peer-to-Peer Replication',
      sections: [
        {
          heading: 'Primary-Replica',
          text: 'In primary-replica (master-slave) replication, all writes go to a single primary node, which then propagates changes to one or more replicas. Reads can be served by replicas. This model is simple, consistent, and widely used, but the primary can become a bottleneck and a single point of failure.'
        },
        {
          heading: 'Peer-to-Peer',
          text: 'In peer-to-peer (leaderless) replication, every node can accept reads and writes. Nodes coordinate to synchronize changes, often using quorums or gossip protocols. This model is more resilient and scalable, but conflict resolution and consistency are harder to manage.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Primary-Replica', 'Peer-to-Peer'],
            rows: [
              ['Write target', 'Single primary', 'Any node'],
              ['Read scaling', 'Scale reads via replicas', 'Scale reads and writes via nodes'],
              ['Consistency', 'Easier to enforce', 'Requires quorum/conflict resolution'],
              ['Failover', 'Promote replica to primary', 'No single point of failure'],
              ['Conflict handling', 'Rare (single writer)', 'Common (multi-writer)'],
              ['Examples', 'MySQL, PostgreSQL, MongoDB replica sets', 'Cassandra, DynamoDB, Riak']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph PR["Primary-Replica"]
      C1[Client] -->|Write| P[(Primary)]
      P -->|Replicate| R1[(Replica 1)]
      P -->|Replicate| R2[(Replica 2)]
      C1 -->|Read| R1
      C1 -->|Read| R2
    end
    subgraph P2P["Peer-to-Peer"]
      C2[Client] -->|Write| N1[Node A]
      C2 -->|Read| N2[Node B]
      N1 <-->|Gossip/Quorum| N3[Node C]
      N2 <-->|Gossip/Quorum| N3
      N1 <-->|Gossip/Quorum| N2
    end`,
            caption: 'Primary-replica funnels writes through one node. Peer-to-peer allows every node to accept writes and reconciles conflicts.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Amazon DynamoDB vs MySQL.</strong> DynamoDB uses a peer-to-peer-style replicated architecture with quorums to ensure high availability and partition tolerance across many nodes. A typical e-commerce order service backed by MySQL uses primary-replica replication for transactional correctness, with replicas handling read scaling.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Primary-replica = one primary writer, many replicas; simple but has a bottleneck',
            'Peer-to-peer = all nodes can write; resilient but needs conflict resolution',
            'Use primary-replica for transactional, read-heavy workloads',
            'Use peer-to-peer for massive scale, high availability, and geo-distribution'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the biggest risk of primary-replica replication? → Primary failure and write bottleneck; requires failover.',
            'Q2: How do peer-to-peer systems handle simultaneous writes? → Quorums, vector clocks, last-write-wins, or application reconciliation.',
            'Q3: Which model is better for a global chat app? → Peer-to-peer for availability and local writes; but conflict resolution is critical.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: How does MongoDB fit these models?</strong> A: MongoDB replica sets are primary-replica with automatic failover. A replica is elected primary if the current primary fails.',
            '<strong>Q: Can you have both models in one system?</strong> A: Yes. Some systems use primary-replica for strongly consistent transactions and peer-to-peer for less critical data.',
            '<strong>Q: What is a hinted handoff in peer-to-peer systems?</strong> A: A temporary write to a healthy node when the intended node is down, later reconciled when the node returns.'
          ]
        }
      ]
    },

    'server-vs-client-caching': {
      title: 'Server-Side vs Client-Side Caching',
      sections: [
        {
          heading: 'Server-Side Caching',
          text: 'Server-side caching stores data on the server or in a shared cache layer (Redis, Memcached, in-memory cache). It reduces database load and speeds up responses for all clients. Because the cache is centralized, it is easier to invalidate and keep consistent.'
        },
        {
          heading: 'Client-Side Caching',
          text: 'Client-side caching stores data on the user device or browser (HTTP cache, local storage, service worker cache). It reduces network requests and improves perceived performance. However, the server has less control over invalidation and staleness.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Server-Side Caching', 'Client-Side Caching'],
            rows: [
              ['Location', 'Redis, Memcached, in-memory', 'Browser, mobile device, CDN edge'],
              ['Reduces DB load', 'Yes', 'No (but reduces origin requests)'],
              ['Invalidation control', 'Server controlled', 'Client controlled or HTTP headers'],
              ['Staleness risk', 'Lower with TTL/purge', 'Higher if headers are wrong'],
              ['Use case', 'API responses, sessions, DB query results', 'Static assets, app data, offline support'],
              ['Examples', 'Redis, Memcached, application cache', 'Browser cache, localStorage, service worker']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph SC["Server-Side Cache"]
      C1[Client] -->|Request| S1[App Server]
      S1 -->|Check| Cache[(Redis Cache)]
      Cache -->|Hit| S1
      S1 -->|Miss| DB1[(Database)]
      S1 -->|Response| C1
    end
    subgraph CC["Client-Side Cache"]
      C2[Client] -->|Cache?| BC[Browser Cache]
      BC -->|Hit| C2
      BC -->|Miss| S2[App Server]
      S2 -->|Response + Cache-Control| BC
    end`,
            caption: 'Server-side cache sits between application and database. Client-side cache sits on the user device or browser.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Twitter and browser caching.</strong> Twitter uses server-side caches (Redis/Memcached) to store timelines and user profiles, dramatically reducing database load. For static assets like JavaScript and CSS, Twitter sets long Cache-Control headers so browsers cache them locally, avoiding repeated downloads.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Server-side cache = shared, easy to invalidate, reduces DB load',
            'Client-side cache = local, faster for repeat visits, harder to invalidate',
            'Use server-side caching for dynamic data and session state',
            'Use client-side caching for static assets and offline-first experiences'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you invalidate a server-side cache? → TTL, explicit deletion, cache tags, or write-through caching.',
            'Q2: What header controls browser caching? → Cache-Control, with directives like max-age, no-cache, no-store.',
            'Q3: When should you avoid client-side caching? → For sensitive data, frequently changing data, or when correctness is more important than speed.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: What is cache invalidation?</strong> A: Removing or updating cached data when the underlying data changes. It is one of the hardest problems in caching.',
            '<strong>Q: Can you use both cache types together?</strong> A: Yes. Layer caches at browser, CDN, application, and database levels.',
            '<strong>Q: What is a stale-while-revalidate header?</strong> A: It allows serving a stale cached response while refreshing it in the background, improving latency.'
          ]
        }
      ]
    },

    'rest-vs-rpc': {
      title: 'REST vs RPC',
      sections: [
        {
          heading: 'REST',
          text: 'REST (Representational State Transfer) is an architectural style for designing networked applications using HTTP resources and standard verbs. It focuses on resources, statelessness, and cacheability. REST is human-readable, easy to debug, and widely adopted for public APIs and web applications.'
        },
        {
          heading: 'RPC',
          text: 'RPC (Remote Procedure Call) treats a network request as a call to a function or method on a remote server. It emphasizes actions and procedures rather than resources. gRPC is the most popular modern RPC framework, using HTTP/2 and Protocol Buffers for high performance.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'REST', 'RPC (gRPC)'],
            rows: [
              ['Abstraction', 'Resources (nouns)', 'Procedures (verbs)'],
              ['Protocol', 'HTTP/1.1 or HTTP/2', 'HTTP/2'],
              ['Serialization', 'JSON, XML', 'Protocol Buffers (binary)'],
              ['Performance', 'Good', 'Excellent (smaller payloads, multiplexing)'],
              ['Readability', 'Human-readable', 'Needs code generation'],
              ['Streaming', 'Limited (SSE, long polling)', 'Native bidirectional'],
              ['Best for', 'Public APIs, web apps', 'Internal microservices, polyglot systems']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph REST["REST API"]
      C1[Client] -->|"GET /users/42"| LB1[Load Balancer]
      LB1 --> S1[App Server]
      S1 --> DB1[(Database)]
      S1 -->|"200 user"| C1
    end
    subgraph RPC["RPC Service"]
      C2[Client] -->|"GetUser(42)"| LB2[Load Balancer]
      LB2 --> S2[gRPC Server]
      S2 --> DB2[(Database)]
      S2 -->|"User proto"| C2
    end`,
            caption: 'REST exposes resources via HTTP. RPC exposes remote procedures via generated stubs.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Stripe and Google.</strong> Stripe exposes a public REST API for payments because developers can easily integrate with JSON and HTTP. Google uses gRPC internally for microservices in products like Kubernetes and Google Cloud, where low latency and high throughput matter more than human readability.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'REST = resource-oriented, HTTP verbs, JSON, public APIs',
            'RPC = action-oriented, binary protocols, high performance, internal services',
            'Use REST for external APIs and web clients',
            'Use RPC (gRPC) for low-latency internal microservices'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why is gRPC faster than REST? → Binary Protobuf payloads, HTTP/2 multiplexing, and generated code reduce overhead.',
            'Q2: Can REST support streaming? → Yes, with Server-Sent Events or chunked transfer, but it is not as native as gRPC streaming.',
            'Q3: When should you avoid gRPC? → When clients are browsers without a proxy, or when you need simple, debuggable HTTP endpoints.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: What is the main design difference between REST and RPC?</strong> A: REST models the world as resources manipulated by HTTP verbs; RPC models the world as remote function calls.',
            '<strong>Q: How does HTTP/2 help gRPC?</strong> A: Multiplexing many requests over one TCP connection, header compression, and server push capabilities.',
            '<strong>Q: Can a REST API and gRPC coexist?</strong> A: Yes. Many gateways translate REST calls to gRPC for internal services, or vice versa.'
          ]
        }
      ]
    },

    'polling-vs-websocket-vs-webhook': {
      title: 'Polling vs Long-Polling vs WebSockets vs Webhooks',
      sections: [
        {
          heading: 'Polling',
          text: 'Polling is the simplest pattern: the client repeatedly asks the server for new data at a fixed interval. It is easy to implement but wastes resources and is inefficient for real-time use cases.'
        },
        {
          heading: 'Long-Polling',
          text: 'Long-polling improves on polling by keeping the request open until the server has data to send. The client then immediately opens a new request. It reduces empty responses but still has overhead from repeatedly opening connections.'
        },
        {
          heading: 'WebSockets',
          text: 'WebSockets establish a persistent, full-duplex connection between client and server. Both sides can send messages at any time. This is ideal for chat, gaming, live collaboration, and financial tickers.'
        },
        {
          heading: 'Webhooks',
          text: 'Webhooks are server-initiated HTTP callbacks triggered by events. The server pushes data to the client when something happens, rather than the client pulling. This is efficient for event-driven integrations like payment notifications.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Polling', 'Long-Polling', 'WebSockets', 'Webhooks'],
            rows: [
              ['Direction', 'Client pull', 'Client pull', 'Bidirectional', 'Server push'],
              ['Latency', 'High (interval dependent)', 'Medium', 'Low', 'Low (event-driven)'],
              ['Server load', 'High (empty requests)', 'Medium', 'Medium (connection state)', 'Low'],
              ['Connection', 'New each time', 'Held open temporarily', 'Persistent', 'New HTTP request per event'],
              ['Use case', 'Status checks', 'Near real-time updates', 'Chat, gaming, live data', 'Event notifications'],
              ['Complexity', 'Low', 'Low-Medium', 'Medium-High', 'Medium']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `sequenceDiagram
    participant C as Client
    participant S as Server
    Note over C,S: Polling
    C->>S: Any updates?
    S-->>C: No
    C->>S: Any updates?
    S-->>C: No
    C->>S: Any updates?
    S-->>C: Yes
    Note over C,S: Long-Polling
    C->>S: Wait for updates
    Note right of S: Holds connection
    S-->>C: Update
    Note over C,S: WebSocket
    C->>S: Upgrade
    S-->>C: 101
    C->>S: Message
    S->>C: Message
    Note over C,S: Webhook
    S->>C: POST /callback {event}`,
            caption: 'Polling and long-polling are client-driven. WebSockets are persistent and bidirectional. Webhooks are server-driven HTTP callbacks.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Slack notifications.</strong> Slack uses WebSockets for real-time chat messages because low latency and bidirectional messaging are essential. For integrations like payment status updates from Stripe, Slack might receive webhooks instead of polling, avoiding unnecessary API calls and delivering events near instantly.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Polling = simple but wasteful; good for infrequent status checks',
            'Long-polling = better latency than polling, but still connection overhead',
            'WebSockets = persistent bidirectional; best for real-time collaboration',
            'Webhooks = server push; best for event-driven external integrations'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Which pattern should you use for a live stock price dashboard? → WebSockets or SSE for low-latency updates.',
            'Q2: When are webhooks better than polling? → When the server can reliably notify clients and you want to avoid wasted requests.',
            'Q3: What is a downside of WebSockets? → Stateful connections require sticky sessions, connection management, and scaling complexity.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: How do you scale WebSockets?</strong> A: Use sticky sessions, a Redis pub/sub backplane for cross-server messaging, and heartbeat detection.',
            '<strong>Q: Why is polling still used despite inefficiency?</strong> A: It is stateless, simple, works behind strict firewalls, and is easy to scale on the server side.',
            '<strong>Q: What is SSE and where does it fit?</strong> A: Server-Sent Events push updates from server to client over HTTP. It is simpler than WebSockets for one-way real-time feeds.'
          ]
        }
      ]
    },

    'cdn-vs-direct-server': {
      title: 'CDN Usage vs Direct Server Serving',
      sections: [
        {
          heading: 'CDN Serving',
          text: 'A Content Delivery Network (CDN) is a geographically distributed network of edge servers that caches and serves content close to users. It reduces latency, lowers origin load, and improves availability. CDNs are ideal for static assets like images, videos, JavaScript, CSS, and HTML pages.'
        },
        {
          heading: 'Direct Server Serving',
          text: 'Direct server serving means every client request reaches the origin server. This is necessary for dynamic, personalized, or uncacheable content. It gives full control but can create bottlenecks and higher latency for distant users.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'CDN', 'Direct Server'],
            rows: [
              ['Latency', 'Low (edge close to user)', 'Higher (round trip to origin)'],
              ['Origin load', 'Low (cache absorbs traffic)', 'High (every request hits origin)'],
              ['Cost', 'Bandwidth savings, cache costs', 'Compute and bandwidth concentrated'],
              ['Content type', 'Static, cacheable assets', 'Dynamic, personalized, uncacheable'],
              ['Availability', 'Resilient to origin failures', 'Depends on origin health'],
              ['Examples', 'Cloudflare, CloudFront, Fastly', 'Origin application servers']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph CDN["CDN Serving"]
      U1[User in India] --> E1[Edge Server Mumbai]
      U2[User in Germany] --> E2[Edge Server Frankfurt]
      U3[User in Brazil] --> E3[Edge Server Sao Paulo]
      E1 -->|Cache miss| O1[Origin Server]
      E2 -->|Cache miss| O1
      E3 -->|Cache miss| O1
    end
    subgraph DS["Direct Server Serving"]
      U4[User anywhere] --> LB[Load Balancer]
      LB --> S1[Origin Server]
      LB --> S2[Origin Server]
    end`,
            caption: 'CDN serves content from nearby edge servers. Direct serving routes every request to the origin.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix video delivery.</strong> Netflix uses a global CDN called Open Connect to cache movies and shows on ISPs edge servers. This reduces the load on Netflix origin data centers and ensures smooth streaming even during peak hours. Personalized recommendations and user state are served directly from origin servers because they cannot be cached.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'CDN = cache content at the edge for low latency and high availability',
            'Direct server = full control, necessary for dynamic and personalized data',
            'Use CDN for static assets, media, and public pages',
            'Serve dynamic content directly from origin with proper caching headers'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Can you cache dynamic content on a CDN? → Sometimes, with short TTLs, edge-side includes, or stale-while-revalidate.',
            'Q2: What is cache invalidation at a CDN? → Purging or expiring cached content so users see updated versions.',
            'Q3: What is a downside of using a CDN? → Additional cost, cache invalidation complexity, and potential for stale content during updates.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: What is the difference between pull and push CDN?</strong> A: Pull CDNs fetch content from origin on demand. Push CDNs require you to upload content explicitly to the CDN.',
            '<strong>Q: How do CDNs handle dynamic content?</strong> A: They can pass through uncached requests, or use edge computing (Cloudflare Workers, Lambda@Edge) to personalize at the edge.',
            '<strong>Q: When would you not use a CDN?</strong> A: For private internal apps, content that changes every request, or when regulatory requirements forbid off-site caching.'
          ]
        }
      ]
    },

    'serverless-vs-traditional': {
      title: 'Serverless vs Traditional Server-Based',
      sections: [
        {
          heading: 'Serverless',
          text: 'Serverless computing allows developers to run code without managing servers. The cloud provider handles provisioning, scaling, patching, and billing. Functions are invoked by events, and you pay only for execution time. Examples include AWS Lambda, Google Cloud Functions, and Azure Functions.'
        },
        {
          heading: 'Traditional Server-Based',
          text: 'Traditional server-based computing uses virtual machines or containers that run continuously. You manage the operating system, runtime, scaling, and maintenance. This model offers more control, predictable performance, and long-running processes.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Serverless', 'Traditional Server'],
            rows: [
              ['Management', 'Managed by provider', 'Managed by team'],
              ['Scaling', 'Automatic, event-driven', 'Manual or auto-scaling groups'],
              ['Cost model', 'Pay per execution', 'Pay per provisioned capacity'],
              ['Cold start', 'Yes (initialization delay)', 'No (always running)'],
              ['Use case', 'Event processing, APIs, batch jobs', 'Long-running services, databases, complex apps'],
              ['Examples', 'AWS Lambda, Cloud Functions', 'EC2, Kubernetes, VMs']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph Serverless["Serverless"]
      E[Event] --> L[Lambda Function]
      L --> DB[(Database)]
      L --> S3[(Object Storage)]
    end
    subgraph Traditional["Traditional Server"]
      C[Client] --> LB[Load Balancer]
      LB --> S1[Server 1]
      LB --> S2[Server 2]
      S1 --> DB2[(Database)]
      S2 --> DB2
    end`,
            caption: 'Serverless runs functions in response to events. Traditional servers run continuously behind a load balancer.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>AWS Lambda for image processing.</strong> When a user uploads a photo to an S3 bucket, AWS Lambda can resize it, generate thumbnails, and store metadata. The team does not need to maintain servers for a task that happens intermittently. A traditional server would be idle most of the time and harder to right-size.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Serverless = no server management, pay per use, auto-scaling, cold starts',
            'Traditional = full control, predictable performance, always-running capacity',
            'Use serverless for event-driven, spiky, or intermittent workloads',
            'Use traditional servers for long-running, stateful, or latency-sensitive workloads'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is a cold start? → The initialization delay when a serverless function wakes up after being idle.',
            'Q2: How can you reduce cold start latency? → Keep functions warm, use provisioned concurrency, reduce dependency size, and choose faster runtimes.',
            'Q3: When is traditional better than serverless? → Long-running computations, databases, applications requiring persistent connections, and strict latency requirements.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Is serverless truly serverless?</strong> A: No. Servers still exist, but the provider abstracts them. The user does not manage provisioning or maintenance.',
            '<strong>Q: What are the limits of serverless functions?</strong> A: Execution time limits, payload size limits, cold starts, and vendor lock-in.',
            '<strong>Q: Can a serverless function handle a steady 10K RPS load?</strong> A: Yes, but cost and concurrency limits matter. At sustained high traffic, containers or servers may be cheaper.'
          ]
        }
      ]
    },

    'stateful-vs-stateless': {
      title: 'Stateful vs Stateless Architecture',
      sections: [
        {
          heading: 'Stateful Architecture',
          text: 'In a stateful architecture, the server keeps client-specific data in memory between requests. This can make some interactions faster, but it complicates scaling, failover, and recovery because requests must be routed to the same server or state must be replicated.'
        },
        {
          heading: 'Stateless Architecture',
          text: 'In a stateless architecture, each request contains all the information needed to process it. The server does not store client session data locally. This makes horizontal scaling, failover, and recovery straightforward, but it may require more data transfer per request or a shared session store.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Stateful', 'Stateless'],
            rows: [
              ['Server memory', 'Stores session state', 'No client state stored'],
              ['Scalability', 'Harder (sticky sessions or state replication)', 'Easy (any server can handle any request)'],
              ['Failover', 'Complex (state must transfer)', 'Simple (restart any server)'],
              ['Request size', 'Smaller', 'May be larger (token/session data included)'],
              ['Use case', 'WebSockets, real-time games', 'REST APIs, microservices'],
              ['Examples', 'Chat servers, session-aware load balancers', 'RESTful services, JWT auth']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph Stateful["Stateful"]
      C1[Client] -->|Request 1| LB1[Load Balancer]
      LB1 -->|Sticky| S1[Server A]
      S1 -->|Store session| M1[(Memory)]
      C1 -->|Request 2| LB1
      LB1 -->|Sticky| S1
      S1 --> M1
    end
    subgraph Stateless["Stateless"]
      C2[Client] -->|Request + Token| LB2[Load Balancer]
      LB2 --> S2[Server 1]
      LB2 --> S3[Server 2]
      S2 -->|Validate| Auth[Auth Service]
      S3 --> Auth
    end`,
            caption: 'Stateful needs sticky sessions or replicated state. Stateless routes each request to any server using a token.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Online multiplayer games.</strong> A real-time multiplayer game server is stateful because it keeps the game world in memory. Players must stay connected to the same server, or the state must be migrated. In contrast, a shopping API like Amazon product search is stateless: each request includes a JWT, and any server can handle it.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Stateful = server remembers client state between requests',
            'Stateless = each request is self-contained',
            'Stateless is easier to scale, load balance, and recover',
            'Stateful is needed for real-time, long-lived connections and local computation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you make a stateful app scalable? → Use sticky sessions, externalize state to Redis, or replicate state between servers.',
            'Q2: What is a downside of stateless authentication? → Tokens must be validated and can grow large; revocation is harder than server sessions.',
            'Q3: Can a stateless system use a session store? → Yes, but the session is externalized (e.g., Redis) rather than stored in the application server memory.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Why are microservices usually stateless?</strong> A: Stateless services can be easily replicated, restarted, and moved without losing user context.',
            '<strong>Q: How do sticky sessions work?</strong> A: The load balancer routes the same client to the same backend server, usually via a cookie or IP hash.',
            '<strong>Q: Is a WebSocket server stateful or stateless?</strong> A: Stateful by nature because it maintains a persistent connection and conversation state.'
          ]
        }
      ]
    },

    'token-bucket-vs-leaky-bucket': {
      title: 'Token Bucket vs Leaky Bucket',
      sections: [
        {
          heading: 'Token Bucket',
          text: 'The token bucket algorithm allows bursts of traffic up to a certain capacity. Tokens are added to a bucket at a fixed rate, and each request consumes a token. If the bucket has enough tokens, the request is allowed; otherwise, it is throttled or rejected. Token bucket is flexible and permits short bursts.'
        },
        {
          heading: 'Leaky Bucket',
          text: 'The leaky bucket algorithm enforces a constant outflow rate. Incoming requests fill a bucket, and the bucket leaks at a fixed rate. If the bucket overflows, excess requests are discarded. Leaky bucket smooths traffic into a steady rate and is good for enforcing strict throughput limits.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Token Bucket', 'Leaky Bucket'],
            rows: [
              ['Traffic pattern', 'Allows bursts', 'Smooths to constant rate'],
              ['Bucket behavior', 'Tokens added over time', 'Requests leak out over time'],
              ['Overflow', 'Requests wait until tokens available', 'Excess requests are dropped or queued'],
              ['Burst handling', 'Supports short bursts up to bucket size', 'No bursts; constant rate enforced'],
              ['Use case', 'API rate limiting with burst allowance', 'Traffic shaping, network QoS'],
              ['Examples', 'AWS API Gateway, Stripe', 'Network routers, traffic shapers']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph TB["Token Bucket"]
      R1[Requests] --> B1[Bucket of Tokens]
      B1 -->|Token available| A1[Allow]
      B1 -->|No token| D1[Deny/Queue]
      T1[Token Refill] --> B1
    end
    subgraph LB["Leaky Bucket"]
      R2[Requests] --> B2[Bucket]
      B2 -->|Leak at fixed rate| A2[Allowed Output]
      B2 -->|Overflow| D2[Drop]
    end`,
            caption: 'Token bucket allows bursts when tokens exist. Leaky bucket releases requests at a fixed rate.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Stripe API rate limiting.</strong> Stripe uses a token bucket approach for API rate limits. Developers can burst up to a certain number of requests (e.g., during a checkout spike) and then continue at a sustained rate. A network provider shaping a 10 Mbps link might use a leaky bucket to ensure a smooth, predictable data rate for all customers.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Token bucket = tokens refill at a fixed rate; bursts allowed up to bucket size',
            'Leaky bucket = requests leak at a fixed rate; no bursts, smooth output',
            'Use token bucket for flexible API rate limiting',
            'Use leaky bucket for strict traffic shaping and network QoS'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: A user spikes from 0 to 100 requests in one second. Which algorithm allows this? → Token bucket, if the bucket has 100 tokens.',
            'Q2: Which algorithm is better for enforcing a strict 1 request per second? → Leaky bucket, because it smooths to a constant rate.',
            'Q3: How do distributed systems implement token buckets? → Use a shared store like Redis with Lua scripts or Redis Cell module for atomicity.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: What is the difference between rate limiting and throttling?</strong> A: Rate limiting caps the total number of requests allowed. Throttling slows down or delays requests to match a rate.',
            '<strong>Q: How do you handle rate limiting across multiple servers?</strong> A: Use a centralized store like Redis, or partition rate limits by user ID and route consistently.',
            '<strong>Q: Can token bucket and leaky bucket be combined?</strong> A: Yes. Some systems use token bucket to admit bursts and a leaky bucket to smooth the downstream rate.'
          ]
        }
      ]
    },

    'read-heavy-vs-write-heavy': {
      title: 'Read-Heavy vs Write-Heavy System Design',
      sections: [
        {
          heading: 'Read-Heavy Systems',
          text: 'Read-heavy systems handle far more reads than writes. Examples include content websites, search engines, product catalogs, and social media feeds. The design focus is on caching, replication, read replicas, and CDN distribution to reduce database load and serve reads quickly.'
        },
        {
          heading: 'Write-Heavy Systems',
          text: 'Write-heavy systems handle far more writes than reads. Examples include logging pipelines, telemetry systems, time-series databases, and event stores. The design focus is on high-ingest throughput, write-optimized storage, partitioning, and batching.'
        },
        {
          heading: 'Comparison Table',
          table: {
            headers: ['Aspect', 'Read-Heavy', 'Write-Heavy'],
            rows: [
              ['Read/write ratio', 'High reads, few writes', 'High writes, few reads'],
              ['Database pattern', 'Primary-replica, read replicas', 'Sharding, partitioning, append-only logs'],
              ['Caching', 'Critical (CDN, Redis, in-memory)', 'Less effective; focus on ingestion'],
              ['Storage optimization', 'Indexes, materialized views', 'LSM trees, columnar, time-series'],
              ['Scaling strategy', 'Add replicas, caches', 'Add shards, batch writes, partition'],
              ['Examples', 'E-commerce catalog, news site', 'IoT telemetry, logging, Kafka']
            ]
          }
        },
        {
          heading: 'Architectural Difference',
          diagram: {
            chart: `flowchart TB
    subgraph RH["Read-Heavy"]
      C1[Clients] -->|Read| LB1[Load Balancer]
      LB1 -->|Cache hit| Cache[(Redis Cache)]
      LB1 -->|Cache miss| R1[Read Replica]
      LB1 -->|Cache miss| R2[Read Replica]
      R1 --> DB1[(Primary DB)]
    end
    subgraph WH["Write-Heavy"]
      C2[Devices] -->|Write| LB2[Load Balancer]
      LB2 --> I[Ingestion Layer]
      I --> Q[(Queue)]
      Q --> W1[Worker Shard 1]
      Q --> W2[Worker Shard 2]
      W1 --> TS[(Time-Series DB)]
      W2 --> TS
    end`,
            caption: 'Read-heavy systems scale with caches and replicas. Write-heavy systems scale with queues, sharding, and write-optimized storage.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Amazon product catalog vs CloudWatch metrics.</strong> The Amazon product catalog is read-heavy: product pages are viewed millions of times more often than they are edited, so Amazon uses extensive caching, read replicas, and a CDN. AWS CloudWatch is write-heavy: millions of metrics are published every second, so it uses time-series storage, partitioning, and aggregation to handle massive ingestion.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Read-heavy = optimize with caching, replicas, CDNs, and indexes',
            'Write-heavy = optimize with sharding, queues, batching, and write-optimized storage',
            'Most systems are mixed; identify the dominant workload to prioritize design',
            'Hybrid patterns like CQRS separate read and write models for each workload'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How would you design a news website homepage? → Cache heavily, use a CDN, and serve from read replicas or a content store.',
            'Q2: How would you design an IoT telemetry system? → Use a queue for ingestion, partition by device or time, and store in a time-series database.',
            'Q3: What is CQRS and when is it useful? → Command Query Responsibility Segregation separates read and write models; useful when read and write workloads need different optimization.'
          ]
        },
        {
          heading: 'Interview Q&A',
          list: [
            '<strong>Q: Can a system be both read-heavy and write-heavy?</strong> A: Different parts of the system can be. Use CQRS, separate databases, or different storage engines for each workload.',
            '<strong>Q: What is a common mistake for read-heavy systems?</strong> A: Over-indexing the primary database instead of using caches and read replicas.',
            '<strong>Q: What is hot-spotting in write-heavy systems?</strong> A: When one shard or partition receives disproportionate writes, causing a bottleneck. Mitigate by choosing a good partition key and salting.'
          ]
        }
      ]
    }
  }
};
