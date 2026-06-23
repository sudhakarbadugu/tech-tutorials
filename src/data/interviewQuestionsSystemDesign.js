// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.505Z

export const systemDesignQuestions = {
  "questions": [
    {
      "question": "What are the key concepts in system design?",
      "answer": "<p><strong>System Design</strong> involves architecting scalable, reliable, and maintainable systems.</p><h4>Core Concepts</h4><ul><li><strong>Scalability:</strong> Handle growth (horizontal/vertical scaling)</li><li><strong>Reliability:</strong> System works correctly despite failures</li><li><strong>Availability:</strong> System is operational when needed (uptime %)</li><li><strong>Performance:</strong> Response time, throughput, latency</li><li><strong>Maintainability:</strong> Easy to modify and extend</li><li><strong>Consistency:</strong> Data correctness across system</li><li><strong>Fault Tolerance:</strong> Graceful degradation</li></ul><h4>Availability Tiers</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Availability</th><th style='padding:8px;border:1px solid #ddd;'>Downtime/year</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>99% (two nines)</td><td style='padding:8px;border:1px solid #ddd;'>3.65 days</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>99.9% (three nines)</td><td style='padding:8px;border:1px solid #ddd;'>8.76 hours</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>99.99% (four nines)</td><td style='padding:8px;border:1px solid #ddd;'>52.56 minutes</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>99.999% (five nines)</td><td style='padding:8px;border:1px solid #ddd;'>5.26 minutes</td></tr></table>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Fundamentals"
      ],
      "keyPoints": [
        "Scalability: Handle growth (horizontal/vertical scaling)",
        "Reliability: System works correctly despite failures",
        "Availability: System is operational when needed (uptime %)"
      ]
    },
    {
      "question": "Explain horizontal vs vertical scaling.",
      "answer": "<p>Two approaches to increase system capacity:</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Vertical Scaling (Scale Up)</th><th style='padding:8px;border:1px solid #ddd;'>Horizontal Scaling (Scale Out)</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Approach</td><td style='padding:8px;border:1px solid #ddd;'>Add power to existing machine</td><td style='padding:8px;border:1px solid #ddd;'>Add more machines</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Limit</td><td style='padding:8px;border:1px solid #ddd;'>Hardware ceiling</td><td style='padding:8px;border:1px solid #ddd;'>Near unlimited</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Cost</td><td style='padding:8px;border:1px solid #ddd;'>Expensive hardware</td><td style='padding:8px;border:1px solid #ddd;'>Commodity hardware</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Single point of failure</td><td style='padding:8px;border:1px solid #ddd;'>Yes</td><td style='padding:8px;border:1px solid #ddd;'>No (with redundancy)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Examples</td><td style='padding:8px;border:1px solid #ddd;'>Upgrade to bigger EC2</td><td style='padding:8px;border:1px solid #ddd;'>Auto Scaling Groups, Kubernetes</td></tr></table><p><strong>Best practice:</strong> Use horizontal scaling for stateless services, vertical for databases (with read replicas for scale-out reads).</p>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Scaling"
      ],
      "keyPoints": [
        "Two approaches to increase system capacity: Aspect Vertical Scaling (Scale Up) Horizontal Scaling (Scale Out) Approach Add power to existing machine Add more machines Limit Hardware ceiling Near unlim"
      ]
    },
    {
      "question": "What is load balancing and what are common algorithms?",
      "answer": "<p><strong>Load balancing</strong> distributes incoming traffic across multiple servers to prevent any single server from becoming a bottleneck.</p><h4>Load Balancer Types</h4><ul><li><strong>Hardware:</strong> F5, Citrix ADC</li><li><strong>Software:</strong> Nginx, HAProxy, Envoy</li><li><strong>Cloud:</strong> AWS ALB/NLB, GCP Load Balancer, Azure LB</li><li><strong>DNS:</strong> Route53, Cloudflare</li></ul><h4>Algorithms</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Algorithm</th><th style='padding:8px;border:1px solid #ddd;'>Description</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Round Robin</td><td style='padding:8px;border:1px solid #ddd;'>Sequential distribution</td><td style='padding:8px;border:1px solid #ddd;'>Equal capacity servers</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Least Connections</td><td style='padding:8px;border:1px solid #ddd;'>Route to server with fewest active connections</td><td style='padding:8px;border:1px solid #ddd;'>Variable request duration</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>IP Hash</td><td style='padding:8px;border:1px solid #ddd;'>Client IP determines server</td><td style='padding:8px;border:1px solid #ddd;'>Session persistence</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Weighted Round Robin</td><td style='padding:8px;border:1px solid #ddd;'>Servers with different capacities</td><td style='padding:8px;border:1px solid #ddd;'>Heterogeneous hardware</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Least Response Time</td><td style='padding:8px;border:1px solid #ddd;'>Considers latency + connections</td><td style='padding:8px;border:1px solid #ddd;'>Real-time applications</td></tr></table><pre><code>upstream backend {\n    least_conn;\n    server backend1.example.com weight=5;\n    server backend2.example.com;\n    server backend3.example.com backup;\n}</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Load Balancing"
      ],
      "keyPoints": [
        "Software: Nginx, HAProxy, Envoy",
        "Cloud: AWS ALB/NLB, GCP Load Balancer, Azure LB"
      ]
    },
    {
      "question": "Explain caching strategies and types.",
      "answer": "<p><strong>Caching</strong> stores copies of frequently accessed data in fast storage to reduce latency and database load.</p><h4>Caching Locations</h4><ul><li><strong>Browser Cache:</strong> HTTP cache headers, localStorage</li><li><strong>CDN Cache:</strong> CloudFront, Cloudflare</li><li><strong>Reverse Proxy:</strong> Nginx, Varnish</li><li><strong>Application Cache:</strong> In-memory (Guava, Caffeine)</li><li><strong>Distributed Cache:</strong> Redis, Memcached</li><li><strong>Database Cache:</strong> Query cache, buffer pool</li></ul><h4>Caching Patterns</h4><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Pattern</th><th style='padding:8px;border:1px solid #ddd;'>Description</th><th style='padding:8px;border:1px solid #ddd;'>Use Case</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Cache-Aside (Lazy Loading)</td><td style='padding:8px;border:1px solid #ddd;'>App checks cache first, loads from DB on miss</td><td style='padding:8px;border:1px solid #ddd;'>Read-heavy, eventual consistency OK</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Write-Through</td><td style='padding:8px;border:1px solid #ddd;'>Write to cache and DB simultaneously</td><td style='padding:8px;border:1px solid #ddd;'>Read-after-write consistency</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Write-Behind (Write-Back)</td><td style='padding:8px;border:1px solid #ddd;'>Write to cache, async flush to DB</td><td style='padding:8px;border:1px solid #ddd;'>High write throughput</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Read-Through</td><td style='padding:8px;border:1px solid #ddd;'>Cache handles miss, fetches from DB</td><td style='padding:8px;border:1px solid #ddd;'>Simplified application logic</td></tr></table><h4>Eviction Policies</h4><ul><li>LRU (Least Recently Used) — most common</li><li>LFU (Least Frequently Used)</li><li>FIFO (First In First Out)</li><li>TTL (Time To Live)</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Caching"
      ],
      "keyPoints": [
        "Browser Cache: HTTP cache headers, localStorage",
        "CDN Cache: CloudFront, Cloudflare",
        "Reverse Proxy: Nginx, Varnish"
      ]
    },
    {
      "question": "What is database sharding and partitioning?",
      "answer": "<p><strong>Sharding</strong> splits a large database into smaller, manageable pieces (shards) distributed across multiple servers.</p><h4>Sharding Strategies</h4><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Strategy</th><th style='padding:8px;border:1px solid #ddd;'>How it works</th><th style='padding:8px;border:1px solid #ddd;'>Pros/Cons</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Hash-based</td><td style='padding:8px;border:1px solid #ddd;'>hash(key) % N → shard</td><td style='padding:8px;border:1px solid #ddd;'>Even distribution; resharding difficult</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Range-based</td><td style='padding:8px;border:1px solid #ddd;'>Key ranges per shard (A-M, N-Z)</td><td style='padding:8px;border:1px solid #ddd;'>Easy range queries; hot shards</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Directory-based</td><td style='padding:8px;border:1px solid #ddd;'>Lookup service maps keys to shards</td><td style='padding:8px;border:1px solid #ddd;'>Flexible; lookup service bottleneck</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Geo-based</td><td style='padding:8px;border:1px solid #ddd;'>Data by region/location</td><td style='padding:8px;border:1px solid #ddd;'>Low latency; regulatory compliance</td></tr></table><h4>Partitioning (within single node)</h4><ul><li><strong>Horizontal:</strong> Row splitting (sharding)</li><li><strong>Vertical:</strong> Column splitting (rarely used alone)</li></ul><h4>Challenges</h4><ul><li>Cross-shard queries and transactions</li><li>Data rebalancing when adding shards</li><li>Shard key selection (avoid hot shards)</li><li>Join operations across shards</li></ul><pre><code>// Consistent hashing for resharding ease\n// Shard = first N bits of hash(key)\n// Adding shard only affects adjacent ranges\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Database",
        "Sharding"
      ],
      "keyPoints": [
        "Horizontal: Row splitting (sharding)",
        "Vertical: Column splitting (rarely used alone)",
        "Cross-shard queries and transactions"
      ]
    },
    {
      "question": "Explain the difference between SQL and NoSQL in system design.",
      "answer": "<p>Choosing between SQL and NoSQL depends on data structure, scale, and consistency requirements.</p><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>SQL (Relational)</th><th style='padding:8px;border:1px solid #ddd;'>NoSQL</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Schema</td><td style='padding:8px;border:1px solid #ddd;'>Fixed, rigid</td><td style='padding:8px;border:1px solid #ddd;'>Flexible, dynamic</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Vertical + read replicas</td><td style='padding:8px;border:1px solid #ddd;'>Horizontal (sharding)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Consistency</td><td style='padding:8px;border:1px solid #ddd;'>ACID</td><td style='padding:8px;border:1px solid #ddd;'>BASE (eventual)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Relationships</td><td style='padding:8px;border:1px solid #ddd;'>Joins, foreign keys</td><td style='padding:8px;border:1px solid #ddd;'>Embedded or references</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use cases</td><td style='padding:8px;border:1px solid #ddd;'>Financial, ERP, inventory</td><td style='padding:8px;border:1px solid #ddd;'>Social, IoT, real-time, content</td></tr></table><h4>Hybrid Approaches</h4><ul><li><strong>Polyglot persistence:</strong> Use multiple databases for different data types</li><li><strong>CQRS:</strong> Separate read and write models</li><li><strong>Event Sourcing:</strong> Store events, derive state</li></ul><pre><code>// Example: E-commerce system\n// - PostgreSQL: orders, payments (ACID)\n// - MongoDB: product catalog (flexible schema)\n// - Redis: shopping cart, sessions (fast)\n// - Elasticsearch: product search (full-text)\n// - Cassandra: clickstream analytics (write-heavy)\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "Database",
        "SQL",
        "NoSQL"
      ],
      "keyPoints": [
        "Polyglot persistence: Use multiple databases for different data types",
        "CQRS: Separate read and write models",
        "Event Sourcing: Store events, derive state"
      ]
    },
    {
      "question": "What is a message queue and when do you use it?",
      "answer": "<p><strong>Message queues</strong> enable asynchronous communication between services via a broker.</p><h4>Benefits</h4><ul><li><strong>Decoupling:</strong> Services don't need to know about each other</li><li><strong>Asynchronous processing:</strong> Don't block the caller</li><li><strong>Load leveling:</strong> Buffer traffic spikes</li><li><strong>Reliability:</strong> Messages persist if consumer is down</li><li><strong>Scalability:</strong> Add consumers independently</li></ul><h4>Message Queue Systems</h4><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>System</th><th style='padding:8px;border:1px solid #ddd;'>Type</th><th style='padding:8px;border:1px solid #ddd;'>Best For</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>RabbitMQ</td><td style='padding:8px;border:1px solid #ddd;'>Traditional MQ</td><td style='padding:8px;border:1px solid #ddd;'>Complex routing, AMQP</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Kafka</td><td style='padding:8px;border:1px solid #ddd;'>Distributed log</td><td style='padding:8px;border:1px solid #ddd;'>High throughput, event sourcing</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Redis</td><td style='padding:8px;border:1px solid #ddd;'>In-memory</td><td style='padding:8px;border:1px solid #ddd;'>Simple queues, low latency</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>SQS</td><td style='padding:8px;border:1px solid #ddd;'>Managed</td><td style='padding:8px;border:1px solid #ddd;'>AWS ecosystem, serverless</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Pulsar</td><td style='padding:8px;border:1px solid #ddd;'>Distributed</td><td style='padding:8px;border:1px solid #ddd;'>Multi-tenancy, geo-replication</td></tr></table><h4>Patterns</h4><ul><li><strong>Point-to-Point:</strong> One message → one consumer</li><li><strong>Pub/Sub:</strong> One message → many consumers</li><li><strong>Work Queue:</strong> Distribute tasks among workers</li><li><strong>Dead Letter Queue:</strong> Handle failed messages</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Messaging"
      ],
      "keyPoints": [
        "Decoupling: Services don't need to know about each other",
        "Asynchronous processing: Don't block the caller",
        "Load leveling: Buffer traffic spikes"
      ]
    },
    {
      "question": "Explain rate limiting and common algorithms.",
      "answer": "<p><strong>Rate limiting</strong> controls the number of requests a client can make in a given time period.</p><h4>Algorithms</h4><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Algorithm</th><th style='padding:8px;border:1px solid #ddd;'>Description</th><th style='padding:8px;border:1px solid #ddd;'>Pros/Cons</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Token Bucket</td><td style='padding:8px;border:1px solid #ddd;'>Tokens added at fixed rate, requests consume tokens</td><td style='padding:8px;border:1px solid #ddd;'>Allows bursts; flexible</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Leaky Bucket</td><td style='padding:8px;border:1px solid #ddd;'>Queue requests, process at fixed rate</td><td style='padding:8px;border:1px solid #ddd;'>Smooth output; no bursts</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Fixed Window</td><td style='padding:8px;border:1px solid #ddd;'>Count requests in time window</td><td style='padding:8px;border:1px solid #ddd;'>Simple; burst at window boundaries</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Sliding Window Log</td><td style='padding:8px;border:1px solid #ddd;'>Log request timestamps, count in sliding window</td><td style='padding:8px;border:1px solid #ddd;'>Precise; high memory</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Sliding Window Counter</td><td style='padding:8px;border:1px solid #ddd;'>Weighted average of previous + current window</td><td style='padding:8px;border:1px solid #ddd;'>Approximate; memory efficient</td></tr></table><pre><code>// Redis-based token bucket (Lua script)\nlocal key = KEYS[1]\nlocal rate = tonumber(ARGV[1])  -- tokens per second\nlocal capacity = tonumber(ARGV[2])\nlocal now = tonumber(ARGV[3])\nlocal requested = tonumber(ARGV[4])\n\nlocal fill_time = capacity / rate\nlocal ttl = math.floor(fill_time * 2)\n\nlocal last_tokens = redis.call('get', key)\nif last_tokens == false then\n  last_tokens = capacity\nend\n\nlocal last_updated = redis.call('get', key .. ':last_updated')\nif last_updated == false then\n  last_updated = 0\nend\n\nlocal delta = math.max(0, now - last_updated)\nlocal filled_tokens = math.min(capacity, last_tokens + (delta * rate))\nlocal allowed = filled_tokens &gt;= requested\n\nif allowed then\n  filled_tokens = filled_tokens - requested\nend\n\nredis.call('setex', key, ttl, filled_tokens)\nredis.call('setex', key .. ':last_updated', ttl, now)\n\nreturn allowed\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Rate Limiting"
      ],
      "keyPoints": [
        "Rate limiting controls the number of requests a client can make in a given time period.",
        "floor(fill_time * 2) local last_tokens = redis."
      ]
    },
    {
      "question": "What is a CDN and how does it improve performance?",
      "answer": "<p><strong>CDN</strong> (Content Delivery Network) is a geographically distributed network of servers that delivers content faster by serving it from edge locations close to users.</p><h4>How It Works</h4><ol><li>User requests content (e.g., image, JS file)</li><li>DNS routes to nearest edge location</li><li>If cached, serve directly from edge</li><li>If not cached, fetch from origin, cache, then serve</li></ol><h4>Benefits</h4><ul><li><strong>Reduced latency:</strong> Lower RTT for users</li><li><strong>Offloaded origin:</strong> Origin handles less traffic</li><li><strong>DDoS protection:</strong> Absorb and distribute attacks</li><li><strong>SSL termination:</strong> Handle TLS at edge</li><li><strong>Compression:</strong> Gzip/Brotli at edge</li></ul><h4>CDN Providers</h4><ul><li>CloudFront (AWS), Cloudflare, Fastly, Akamai</li></ul><h4>Cache Invalidation Strategies</h4><ul><li><strong>Time-based:</strong> TTL (Cache-Control headers)</li><li><strong>Active:</strong> API-based invalidation</li><li><strong>Versioned URLs:</strong> <code>style.v123.css</code></li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "System Design",
        "CDN"
      ],
      "keyPoints": [
        "User requests content (e.g., image, JS file)",
        "DNS routes to nearest edge location",
        "If cached, serve directly from edge"
      ]
    },
    {
      "question": "Explain microservices architecture and its trade-offs.",
      "answer": "<p><strong>Microservices</strong> decompose an application into small, independently deployable services.</p><h4>Benefits</h4><ul><li>Independent scaling and deployment</li><li>Technology diversity per service</li><li>Team autonomy (Conway's Law)</li><li>Fault isolation</li><li>Easier continuous delivery</li></ul><h4>Challenges</h4><ul><li><strong>Operational complexity:</strong> Monitoring, logging, tracing across services</li><li><strong>Data consistency:</strong> Distributed transactions, sagas</li><li><strong>Network latency:</strong> Inter-service communication overhead</li><li><strong>Deployment complexity:</strong> Multiple pipelines, versions</li><li><strong>Testing:</strong> Integration testing, contract testing</li></ul><h4>When to Choose</h4><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Factor</th><th style='padding:8px;border:1px solid #ddd;'>Monolith</th><th style='padding:8px;border:1px solid #ddd;'>Microservices</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Team size</td><td style='padding:8px;border:1px solid #ddd;'>Small (< 10)</td><td style='padding:8px;border:1px solid #ddd;'>Large (> 30)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Domain complexity</td><td style='padding:8px;border:1px solid #ddd;'>Simple</td><td style='padding:8px;border:1px solid #ddd;'>Complex, well-defined boundaries</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scale requirements</td><td style='padding:8px;border:1px solid #ddd;'>Uniform</td><td style='padding:8px;border:1px solid #ddd;'>Component-specific</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Deployment frequency</td><td style='padding:8px;border:1px solid #ddd;'>Weekly</td><td style='padding:8px;border:1px solid #ddd;'>Multiple times daily</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Microservices"
      ],
      "keyPoints": [
        "Independent scaling and deployment",
        "Technology diversity per service",
        "Team autonomy (Conway's Law)"
      ]
    },
    {
      "question": "What is API Gateway and what does it do?",
      "answer": "<p><strong>API Gateway</strong> is a single entry point that sits between clients and backend services.</p><h4>Responsibilities</h4><ul><li><strong>Request routing:</strong> Route to appropriate microservice</li><li><strong>Authentication/Authorization:</strong> JWT, OAuth, API keys</li><li><strong>Rate limiting:</strong> Throttle requests</li><li><strong>SSL termination:</strong> Handle HTTPS</li><li><strong>Request/Response transformation:</strong> Protocol translation</li><li><strong>Caching:</strong> Reduce backend load</li><li><strong>Load balancing:</strong> Distribute across service instances</li><li><strong>Monitoring/Logging:</strong> Centralized observability</li></ul><h4>Popular Gateways</h4><ul><li><strong>Cloud:</strong> AWS API Gateway, Azure APIM, GCP Endpoints</li><li><strong>Open Source:</strong> Kong, Zuul, Spring Cloud Gateway, Envoy</li><li><strong>K8s:</strong> Ingress Controller (NGINX, Traefik, Istio)</li></ul><pre><code>// Kong configuration example\nservices:\n  - name: user-service\n    url: http://users:8080\n    routes:\n      - name: users-route\n        paths:\n          - /api/users\n    plugins:\n      - name: rate-limiting\n        config:\n          minute: 100\n      - name: jwt\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "API Gateway"
      ],
      "keyPoints": [
        "Request routing: Route to appropriate microservice",
        "Authentication/Authorization: JWT, OAuth, API keys",
        "Rate limiting: Throttle requests"
      ]
    },
    {
      "question": "Explain CAP and PACELC theorems.",
      "answer": "<p><strong>CAP Theorem:</strong> In distributed systems, you can only guarantee two of three properties:</p><ul><li><strong>C</strong>onsistency — all nodes see same data</li><li><strong>A</strong>vailability — every request gets a response</li><li><strong>P</strong>artition tolerance — system operates despite network failures</li></ul><p>Since partitions are inevitable, choose:</p><ul><li><strong>CP:</strong> Consistency + Partition Tolerance (MongoDB with w:majority, HBase)</li><li><strong>AP:</strong> Availability + Partition Tolerance (Cassandra, DynamoDB, Riak)</li></ul><h4>PACELC Theorem (Extended CAP)</h4><p>If there is a <strong>P</strong>artition, choose between <strong>A</strong> and <strong>C</strong>; <strong>E</strong>lse choose between <strong>L</strong>atency and <strong>C</strong>onsistency.</p><pre><code>// Example trade-offs:\n// DynamoDB (AP + Latency)\n//   - Eventually consistent reads (default): low latency\n//   - Strongly consistent reads: higher latency\n\n// MongoDB (CP + Latency when no partition)\n//   - w:1 (default): low latency, possible data loss on failure\n//   - w:majority: higher latency, consistency\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "CAP",
        "Distributed Systems"
      ],
      "keyPoints": [
        "C onsistency — all nodes see same data",
        "A vailability — every request gets a response",
        "P artition tolerance — system operates despite network failures"
      ]
    },
    {
      "question": "How do you design a URL shortener like bit.ly?",
      "answer": "<p><strong>URL Shortener Design:</strong></p><h4>Requirements</h4><ul><li>Functional: Shorten URL, redirect, custom aliases, analytics</li><li>Non-functional: Low latency, high availability, scalable</li></ul><h4>API Design</h4><pre><code>POST /api/v1/shorten\n  Body: { \"url\": \"https://example.com/very/long/path\", \"customAlias\": \"abc\" }\n  Response: { \"shortUrl\": \"https://short.ly/abc123\", \"expiresAt\": \"...\" }\n\nGET /abc123\n  302 Redirect → original URL\n</code></pre><h4>Database Design</h4><pre><code>// URL mapping table\n{\n  shortCode: \"abc123\",      // PK, 7 chars base62\n  originalUrl: \"https://...\",\n  createdAt: timestamp,\n  expiresAt: timestamp,\n  clickCount: 0,\n  userId: \"user_123\"\n}\n\n// Analytics table (time-series)\n{\n  shortCode: \"abc123\",\n  timestamp: \"2024-01-15T10:00:00Z\",\n  ip: \"192.168.1.1\",\n  userAgent: \"Mozilla/5.0...\",\n  referrer: \"https://twitter.com\"\n}\n</code></pre><h4>Key Generation</h4><ul><li><strong>Base62 encoding:</strong> 62^7 = 3.5 trillion unique URLs</li><li><strong>MD5 + truncation:</strong> Hash URL, take first 7 chars (check collision)</li><li><strong>Key Generation Service (KGS):</strong> Pre-generate keys in database</li></ul><h4>Architecture</h4><pre><code>Client → Load Balancer → API Servers → Cache (Redis) → Database\n                              ↓\n                        Analytics Queue (Kafka) → Analytics DB\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Case Study"
      ],
      "keyPoints": [
        "Functional: Shorten URL, redirect, custom aliases, analytics",
        "Non-functional: Low latency, high availability, scalable",
        "Base62 encoding: 62^7 = 3.5 trillion unique URLs"
      ]
    },
    {
      "question": "How do you design a rate limiter for an API?",
      "answer": "<p><strong>Rate Limiter Design:</strong></p><h4>Requirements</h4><ul><li>Limit requests per user/IP/API key</li><li>Different limits per tier (free, pro, enterprise)</li><li>Low latency overhead (&lt; 1ms)</li><li>Distributed across multiple servers</li></ul><h4>Architecture</h4><pre><code>Client → API Gateway → Rate Limiter → Application\n                    ↓\n              Redis (Token Bucket state)\n                    ↓\n              Rules Engine (limits per user/tier)\n</code></pre><h4>Redis Implementation</h4><pre><code>// Lua script for atomic token bucket\nlocal key = KEYS[1]\nlocal rate = tonumber(ARGV[1])\nlocal capacity = tonumber(ARGV[2])\nlocal now = tonumber(ARGV[3])\nlocal requested = tonumber(ARGV[4])\n\nlocal ttl = math.floor(capacity / rate * 2)\nlocal last_tokens = tonumber(redis.call('get', key)) or capacity\nlocal last_updated = tonumber(redis.call('get', key .. ':ts')) or 0\n\nlocal delta = math.max(0, now - last_updated)\nlocal filled = math.min(capacity, last_tokens + delta * rate)\nlocal allowed = filled &gt;= requested\n\nif allowed then filled = filled - requested end\n\nredis.call('setex', key, ttl, filled)\nredis.call('setex', key .. ':ts', ttl, now)\n\nreturn allowed\n</code></pre><h4>Response Headers</h4><pre><code>X-RateLimit-Limit: 100\nX-RateLimit-Remaining: 42\nX-RateLimit-Reset: 1640995200\nRetry-After: 3600  # When rate limited\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Rate Limiting",
        "Case Study"
      ],
      "keyPoints": [
        "Limit requests per user/IP/API key",
        "Different limits per tier (free, pro, enterprise)",
        "Low latency overhead (< 1ms)"
      ]
    },
    {
      "question": "How do you design a distributed ID generator?",
      "answer": "<p><strong>Distributed ID Generation Requirements:</strong></p><ul><li>Globally unique across distributed systems</li><li>Roughly sortable by time (for indexing)</li><li>High throughput (10,000+ IDs/second)</li><li>Low latency</li></ul><h4>Approaches</h4><table style='border-collapse:collapse;margin:10px;0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Approach</th><th style='padding:8px;border:1px solid #ddd;'>Pros</th><th style='padding:8px;border:1px solid #ddd;'>Cons</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>UUID (v4)</td><td style='padding:8px;border:1px solid #ddd;'>Simple, no coordination</td><td style='padding:8px;border:1px solid #ddd;'>128-bit, not sortable, index fragmentation</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Database sequence</td><td style='padding:8px;border:1px solid #ddd;'>Simple, sortable</td><td style='padding:8px;border:1px solid #ddd;'>Bottleneck, single point of failure</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Snowflake (Twitter)</td><td style='padding:8px;border:1px solid #ddd;'>Sortable, 64-bit, high throughput</td><td style='padding:8px;border:1px solid #ddd;'>Requires unique machine ID</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>ULID</td><td style='padding:8px;border:1px solid #ddd;'>Lexicographically sortable, UUID compatible</td><td style='padding:8px;border:1px solid #ddd;'>Less adoption</td></tr></table><h4>Snowflake Format (64 bits)</h4><pre><code>0 | 0000000000 | 000000000000 | 000000000000\n↑    timestamp    machine ID     sequence\n1 bit  41 bits      10 bits        12 bits\n\n// Timestamp: milliseconds since epoch (69 years)\n// Machine ID: datacenter + worker (1024 machines)\n// Sequence: per-millisecond counter (4096 IDs/ms)\n// Total: ~4.1 billion IDs per second across cluster\n</code></pre><h4>Implementation</h4><pre><code>class Snowflake:\n    EPOCH = 1288834974657  # Twitter epoch\n    \n    def __init__(self, machine_id):\n        self.machine_id = machine_id\n        self.sequence = 0\n        self.last_timestamp = -1\n    \n    def generate(self):\n        timestamp = self._current_time()\n        \n        if timestamp == self.last_timestamp:\n            self.sequence = (self.sequence + 1) & 0xFFF\n            if self.sequence == 0:\n                timestamp = self._wait_next_ms(timestamp)\n        else:\n            self.sequence = 0\n        \n        self.last_timestamp = timestamp\n        \n        return ((timestamp - self.EPOCH) &lt;&lt; 22) | \\n               (self.machine_id &lt;&lt; 12) | \\n               self.sequence\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "System Design",
        "Distributed Systems",
        "ID Generation"
      ],
      "keyPoints": [
        "Globally unique across distributed systems",
        "Roughly sortable by time (for indexing)",
        "High throughput (10,000+ IDs/second)"
      ]
    },
    {
      "question": "How would you design a notification system (like email/SMS/push)?",
      "answer": "<p><strong>Notification System Design:</strong></p><h4>Requirements</h4><ul><li>Support email, SMS, push notifications, in-app</li><li>Priority queue (critical vs marketing)</li><li>Rate limiting per user/channel</li><li>Retry with exponential backoff</li><li>Template management</li><li>Delivery tracking and analytics</li></ul><h4>Architecture</h4><pre><code>[Service] → [API Gateway] → [Notification Service]\n                              ↓\n                    [Priority Queue (RabbitMQ/Kafka)]\n                              ↓\n        ┌─────────┬──────────┬──────────┐\n        ↓         ↓          ↓          ↓\n   [Email]    [SMS]    [Push]    [In-App]\n   Workers   Workers   Workers   Workers\n   (SendGrid) (Twilio) (FCM/APNs) (WebSocket)\n        ↓         ↓          ↓          ↓\n   [Delivery Status DB] ←──────┘\n        ↓\n   [Analytics Pipeline]\n</code></pre><h4>Key Components</h4><ul><li><strong>Notification Service:</strong> Validates, enriches, routes</li><li><strong>Priority Queue:</strong> Separate queues for critical/marketing</li><li><strong>Worker Pools:</strong> Scaled per channel independently</li><li><strong>Template Engine:</strong> Handlebars/Jinja with localization</li><li><strong>User Preferences:</strong> Opt-in/opt-out, channel preferences</li><li><strong>Idempotency:</strong> Dedup by notification ID</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "System Design",
        "Case Study"
      ],
      "keyPoints": [
        "Support email, SMS, push notifications, in-app",
        "Priority queue (critical vs marketing)",
        "Rate limiting per user/channel"
      ]
    }
,
    {
          "question": "Design a flash-sale system capable of handling millions of users simultaneously.",
          "answer": "<p>Flash sale = inventory sold in a few minutes, traffic 100-1000x normal. The bottleneck is <strong>overselling prevention under contention</strong>.</p><h4>Core requirements</h4><ul><li>Strict inventory accuracy (no overselling, no underselling).</li><li>Fair queueing (FIFO, no script advantage beyond allowed).</li><li>Latency budget roughly 200ms p99 for the buy endpoint.</li><li>Spike absorption: 1M users in 60s for 10K items = roughly 166 orders/sec required, but roughly 16K attempts/sec, with a 100:1 over-subscription.</li></ul><h4>Architecture</h4><ol><li><strong>Pre-warm:</strong> load inventory into Redis with <code>SET key 10000</code> per SKU.</li><li><strong>Queue:</strong> requests enter a Kafka/SQS queue, consumed by a worker pool at a controlled rate (consumer-side throttle).</li><li><strong>Atomic decrement:</strong> in Redis with Lua script — check current stock greater than 0, decrement, return success in one atomic op. Single-threaded Redis makes this safe and fast.</li><li><strong>Two-phase commit:</strong> after Redis decrement, write the order to the DB. If DB write fails, increment Redis back (compensating action). Use the outbox pattern for reliable DB writes.</li><li><strong>Idempotency:</strong> client sends an idempotency key; Redis SETNX reserves a slot; retries see it.</li><li><strong>Rate limit + captcha</strong> at the edge: prevent bot-driven inventory hoarding.</li></ol><h4>Capacity math</h4><ul><li>10K items, 1M attempts = 1% success rate. Funnel: 1M landing andrarr; 200K add-to-cart andrarr; 50K checkout attempts andrarr; 10K successful orders.</li><li>Each step needs the right backpressure: cart service can be lenient; checkout needs strict per-user rate limit.</li></ul><h4>Failure modes</h4><ul><li><strong>Redis dies:</strong> circuit-breaker; redirect to a waitlist; do not let overselling happen at the DB without Redis lock.</li><li><strong>DB slow:</strong> outbox + async writes; surface order state as pending until committed; webhook when confirmed.</li><li><strong>Bot attack:</strong> CAPTCHA, per-IP rate limit, account age requirement, device fingerprinting.</li></ul><h4>Observability</h4><ul><li>Per-second: attempts, cart-adds, checkout-starts, orders-confirmed, inventory-remaining.</li><li>Alert on inventory-remaining less than expected success rate (overselling risk).</li><li>End-to-end tracing across queue, Redis, DB.</li></ul><p>Anti-pattern: relying on a relational DB row-level lock for the decrement — 10K items times 1K attempts = 10M lock acquisitions, throughput collapses.</p>",
          "difficulty": "Advanced",
          "tags": [
                "System Design",
                "Scalability",
                "Swiggy"
          ],
          "keyPoints": [
                "Atomic decrement via Redis Lua script — single-threaded Redis = safe and fast.",
                "Funnel: landing andrarr; cart andrarr; checkout andrarr; confirmed; backpressure at each step.",
                "Outbox pattern for reliable DB write; idempotency key for retries; CAPTCHA + rate limit at the edge."
          ]
    },
    {
          "question": "Design a real-time notification system supporting email, SMS, and push notifications.",
          "answer": "<p>A notification platform decouples producers from channels, applies user preferences and rate limits, and survives traffic spikes.</p><h4>Core components</h4><ol><li><strong>Producer APIs:</strong> business services call <code>notifications.send(userId, template, data)</code>.</li><li><strong>Notification Service (NS):</strong> resolves the user, looks up preferences, dedupes, builds the notification.</li><li><strong>Channel routers:</strong> email, SMS, push, in-app — separate workers per channel.</li><li><strong>Provider gateways:</strong> SES/SendGrid for email, Twilio for SMS, FCM/APNS for push.</li><li><strong>Tracking:</strong> delivery state, opens, clicks; webhook handlers from each provider.</li></ol><h4>Pipeline (per send)</h4><ol><li>Producer enqueues a notification event (Kafka topic <code>notifications.incoming</code>) with userId, template, channels, priority, dedupe key.</li><li>NS consumer: <strong>resolve user</strong> (with preferences: no SMS between 10pm-8am); <strong>dedupe</strong> (Redis SET NX with template+userId key + TTL); <strong>quiet hours check</strong>; <strong>rate limit per user</strong> (e.g. 5 push / hour).</li><li>NS writes a per-channel envelope to <code>notifications.email</code>, <code>notifications.sms</code>, <code>notifications.push</code> topics.</li><li>Channel workers consume, render template (handlebars/jinja), call provider SDK with retries.</li><li>Provider responses (success/failure/bounce) go to <code>notifications.events</code>; trackers update the user-visible delivery state.</li></ol><h4>Key design decisions</h4><ul><li><strong>Eventual consistency:</strong> do not block the producer. Returns 202 Accepted; user sees the notification when delivered.</li><li><strong>Priority lanes:</strong> separate topics for <code>critical</code> (auth OTP) vs <code>marketing</code>; higher consumption rate for critical.</li><li><strong>Backpressure:</strong> if a channel is degraded, dead-letter the events; alert; user gets notification later (or via fallback channel).</li><li><strong>Idempotency at the provider:</strong> use provider-supplied message-id; retry the same id if unsure.</li><li><strong>Template safety:</strong> templates server-side, never user-input HTML; render in a sandbox.</li></ul><h4>Scaling</h4><ul><li>Throughput: 100K notifications/sec at peak; Kafka handles that easily with right partitioning.</li><li>Sharding by userId within the NS so one user notifications stay ordered.</li><li>Provider limits: most providers enforce a per-second rate; smooth bursts with a token-bucket per provider.</li></ul><h4>Observability</h4><ul><li>Per-channel delivery rate, bounce rate, latency p99, error rate.</li><li>Per-template conversion (open, click).</li><li>End-to-end latency from event creation to provider acceptance.</li></ul><p>For Swiggy-style use, real-time is sub-30s for OTPs, sub-2min for order updates, batch OK for marketing.</p>",
          "difficulty": "Advanced",
          "tags": [
                "System Design",
                "Notifications",
                "Swiggy"
          ],
          "keyPoints": [
                "Producer andrarr; Kafka topic andrarr; NS (resolve + dedupe + preferences + rate-limit) andrarr; per-channel topics andrarr; provider.",
                "Separate critical (auth OTP) and marketing lanes for backpressure and SLAs.",
                "Idempotency at the provider via message-id; token-bucket per provider to smooth bursts."
          ]
    }
  ]
}
