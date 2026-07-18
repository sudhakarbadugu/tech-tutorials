export const deepDive_m7_m9 = {
  module7: {
    'api-gateway': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'API Gateways are the traffic cop of distributed systems. Below are real-world numbers observed at companies like Netflix, Amazon, and Stripe.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Throughput', '10K–50K req/s', '100K–500K req/s', 'Netflix Zuul handles ~50K req/s per instance'],
            ['Latency (p50)', '1–5 ms', '< 1 ms', 'Envoy at Lyft adds < 1 ms at p50'],
            ['Latency (p99)', '20–50 ms', '5–20 ms', 'Depends on auth and routing complexity'],
            ['Concurrent Connections', '10K–50K', '100K+', 'Kong Gateway tested to 100K+ conns'],
            ['SSL Termination CPU', '10–20% overhead', '5–10% with hardware offloading', 'AWS NLB offloads SSL at line rate'],
            ['Cache Hit Rate', '60–80%', '85–95%', 'With edge caching (Cloudflare)'],
            ['Request Body Size Limit', '1–10 MB', '100 MB+ (streaming)', 'AWS API Gateway: 10 MB hard limit'],
            ['Rate Limit Accuracy', '±1–5%', '±0.1% (distributed)', 'Redis-based token bucket vs local counters']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How an API Gateway degrades as load increases. Data based on Kong, Envoy, and NGINX benchmarks.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', '1–3 ms', 'Stable, all features on', 'Baseline healthy state'],
            ['5x', '5–15 ms', 'Slight queuing, connection pool active', 'Thread pools saturate, need tuning'],
            ['10x', '20–80 ms', 'Circuit breakers may trip', 'Downstream latency dominates'],
            ['20x', '100–500 ms', 'Rate limiting kicks in, 429s rise', 'Gateway protecting backend (intentional)'],
            ['50x+', 'Timeouts / 503s', 'Load shedding, degraded mode', 'Emergency: static fallback responses']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How API Gateway adoption evolves from a single monolith to a planet-scale mesh.',
        list: [
          '<strong>Stage 1: Monolith (1–10 req/s)</strong> — No gateway. Direct client → server calls. Simple, fast, no cross-cutting concerns.',
          '<strong>Stage 2: Reverse Proxy (100–1K req/s)</strong> — NGINX added for SSL termination and static file serving. No auth or rate limiting yet.',
          '<strong>Stage 3: API Gateway (1K–10K req/s)</strong> — Introduce Kong or AWS API Gateway. Auth, rate limiting, request/response transformation enabled.',
          '<strong>Stage 4: Multi-Region Gateway (10K–100K req/s)</strong> — Deploy gateways per region with GeoDNS. Amazon CloudFront + API Gateway at edge. Cross-region failover configured.',
          '<strong>Stage 5: Service Mesh Integration (100K+ req/s)</strong> — Sidecar proxies (Envoy/Istio) take over service-to-service traffic. Edge gateway delegates to mesh. Netflix and Lyft operate here.',
          '<strong>Stage 6: Global Gateway Fabric (1M+ req/s)</strong> — Custom gateway built on eBPF or DPDK. Cloudflare Workers at 200+ edge locations. Sub-millisecond routing globally.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How API Gateway impacts each system layer.',
        list: [
          '<strong>Client Tier:</strong> Simplified client logic — no need to handle retries, auth tokens, or service discovery. Mobile apps especially benefit.',
          '<strong>Edge/CDN Tier:</strong> CDN can cache gateway responses (if idempotent). Edge locations reduce round-trip latency by 50–100ms.',
          '<strong>Gateway Tier:</strong> Becomes a critical path. Needs horizontal scaling, health checks, and circuit breaker configuration.',
          '<strong>Service Tier:</strong> Receives clean, authenticated requests. Can focus on business logic. However, added network hop increases latency by 1–5ms.',
          '<strong>Data Tier:</strong> Indirect impact. Gateway caching reduces DB load by 20–40% for read-heavy endpoints.',
          '<strong>Observability Tier:</strong> Centralized logging, metrics, and distributed tracing all funnel through the gateway. Adds 1–2% CPU overhead for tracing.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to choose which API Gateway approach.',
        table: {
          headers: ['Scenario', 'Self-Hosted (Kong/NGINX)', 'Managed (AWS/GCP)', 'Service Mesh (Istio/Linkerd)'],
          rows: [
            ['Startup / Low Traffic', 'Overkill', '✅ Best fit', 'Overkill'],
            ['Multi-Cloud / Hybrid', '✅ Best fit', 'Vendor lock-in', '✅ Best fit'],
            ['Kubernetes-Native', 'Good', 'Possible', '✅ Best fit'],
            ['Maximum Performance', '✅ Best fit (tuned)', 'Limited', '✅ Best fit (eBPF)'],
            ['Rapid Prototyping', 'Slow setup', '✅ Best fit', 'Slow setup'],
            ['Compliance / On-Prem', '✅ Best fit', 'May not meet', '✅ Best fit']
          ]
        }
      }
    ],

    'bff-pattern': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Backend-for-Frontend (BFF) pattern metrics from companies like SoundCloud, Netflix, and Twitter.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['BFFs per Client Type', '2–4', '10–20', 'Netflix has BFFs for Web, iOS, Android, TV, each with variants'],
            ['API Aggregation Calls', '3–7 per request', '10–30 per request', 'Complex pages need many backend services'],
            ['Payload Reduction', '30–50%', '60–80%', 'BFF filters and shapes responses for specific client'],
            ['Cache Hit Rate (BFF)', '40–60%', '70–85%', 'Client-specific caching at BFF layer'],
            ['Latency Saved vs Direct', '50–200 ms', '300–500 ms', 'Fewer round trips, tailored payloads'],
            ['BFF Deployment Frequency', '1–3/day', '10–50/day', 'Independent deploys per client team'],
            ['Team Ownership', '1 team', '1 team per BFF', 'SoundCloud: separate teams per client platform']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'BFF performance as client request volume grows.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', '50–150 ms', 'All backend calls parallel, cache warm', 'Optimal BFF operation'],
            ['3x', '150–400 ms', 'Backend queues grow, some timeouts', 'Need backend scaling or circuit breakers'],
            ['5x', '300–800 ms', 'Fallbacks activated, degraded responses', 'BFF returns partial data gracefully'],
            ['10x', '1–3 s', 'Heavy caching, aggressive timeouts', 'User experience degrades, but system stable'],
            ['20x+', 'Timeouts / 503s', 'Bulkhead patterns isolate failures', 'Non-critical features dropped entirely']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How BFF adoption grows with team and product complexity.',
        list: [
          '<strong>Stage 1: Single API (1 client)</strong> — One generic REST API serves web and mobile. Simple, but mobile gets bloated payloads.',
          '<strong>Stage 2: First BFF (2–3 clients)</strong> — Mobile team creates its own BFF. Reduces payload by 40%. Team autonomy increases.',
          '<strong>Stage 3: Multiple BFFs (5+ clients)</strong> — Web, iOS, Android, TV each have BFFs. Netflix operates here. Duplication risk emerges.',
          '<strong>Stage 4: BFF + GraphQL (10+ clients)</strong> — GraphQL gateway sits above BFFs. Clients query what they need. SoundCloud uses this hybrid.',
          '<strong>Stage 5: Federated BFFs (enterprise scale)</strong> — Domain teams own subgraphs. BFFs compose from federated services. Apollo Federation at scale.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How BFF affects each system layer.',
        list: [
          '<strong>Client Tier:</strong> Simpler code. No need to stitch multiple APIs. Smaller payloads = faster parse and render.',
          '<strong>BFF Tier:</strong> New layer to maintain. Needs independent CI/CD, monitoring, and scaling per client type.',
          '<strong>Backend Service Tier:</strong> Receives generic, stable requests. Less client-specific churn. Can evolve APIs independently.',
          '<strong>Data Tier:</strong> BFF caching reduces direct DB hits by 30–50%. Cache invalidation complexity shifts to BFF teams.',
          '<strong>Team Structure:</strong> Enables full-stack client teams. Each team owns end-to-end experience. Organizational alignment improves.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When BFF adds value vs. when it is unnecessary overhead.',
        table: {
          headers: ['Factor', 'Use BFF', 'Skip BFF (Generic API)'],
          rows: [
            ['Single Client (Web only)', 'Not needed', '✅ Simpler'],
            ['Multiple Clients (Web + Mobile + TV)', '✅ Tailored per client', 'Bloated payloads, coupling'],
            ['Rapid Client Iteration', '✅ Independent deploys', 'Backend blocks frontend releases'],
            ['Small Team (< 10 devs)', 'Overhead', '✅ One API suffices'],
            ['Microservices Backend', '✅ Orchestrates complexity', 'Client handles orchestration (bad)'],
            ['Strict Latency Requirements', '✅ Parallel aggregation', 'Sequential client calls add latency']
          ]
        }
      }
    ],

    'api-versioning': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'API versioning metrics from Stripe, GitHub, and Microsoft API Management.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Active API Versions', '2–3', '5–10', 'Stripe supports 100+ historical versions but 3 active'],
            ['Version Lifetime', '12–24 months', '6–12 months (agile)', 'GitHub: 12-month deprecation notice'],
            ['Traffic on Old Versions', '10–30%', '< 5%', 'Goal is to drive migration to current'],
            ['Breaking Changes per Year', '1–2', '5–10 (fast iteration)', 'Internal APIs change faster than public'],
            ['Migration Time (clients)', '3–6 months', '1–2 years', 'Enterprise clients move slowly'],
            ['Version Header Size', '10–20 bytes', 'Negligible', 'Accept: application/vnd.api.v2+json']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How API versioning infrastructure behaves under load.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', 'No added latency', 'Version routing at edge', 'Negligible overhead'],
            ['5x', '+0.1–0.5 ms', 'Header parsing, route matching', 'Still negligible'],
            ['10x', '+0.5–1 ms', 'Version-specific caching layers', 'Cache segmentation complexity'],
            ['20x', '+1–2 ms', 'Versioned rate limits apply', 'Per-version quotas protect backends'],
            ['50x+', 'Stable (if designed well)', 'Old versions may throttle more', 'Intentional pressure to migrate']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How API versioning strategy evolves.',
        list: [
          '<strong>Stage 1: No Versioning</strong> — Break clients frequently. Only internal APIs. Pain point drives adoption.',
          '<strong>Stage 2: URL Versioning (/v1/, /v2/)</strong> — Simple, explicit. Used by Twitter and many startups. Easy to cache but proliferates endpoints.',
          '<strong>Stage 3: Header Versioning</strong> — Cleaner URLs. Accept header carries version. GitHub uses this. Harder to test in browser.',
          '<strong>Stage 4: Continuous Versioning (Stripe-style)</strong> — Each API change is a version. Clients pin to a date. Stripe has 100+ versions. Enables granular rollbacks.',
          '<strong>Stage 5: GraphQL (versionless)</strong> — Schema evolution replaces versioning. Deprecated fields marked. Facebook/GraphQL approach.',
          '<strong>Stage 6: Contract Testing + Consumer-Driven</strong> — Pact testing ensures backward compatibility. Versions become less critical. Spotify uses this.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How versioning affects each system layer.',
        list: [
          '<strong>Gateway Tier:</strong> Routes requests to correct version. May need version-aware load balancing. Adds routing table complexity.',
          '<strong>Service Tier:</strong> May run multiple versions simultaneously. Code duplication or compatibility layers required.',
          '<strong>Cache Tier:</strong> Cache keys must include version. Cloudflare supports versioned cache keys. 20–30% cache fragmentation.',
          '<strong>Client Tier:</strong> Must handle deprecation notices. SDKs abstract version differences. Stripe SDKs auto-handle versions.',
          '<strong>Observability Tier:</strong> Metrics must be sliced by version. Old versions showing errors = migration blocker.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing a versioning strategy.',
        table: {
          headers: ['Strategy', 'Best For', 'Trade-offs', 'Example'],
          rows: [
            ['URL (/v1/)', 'Public APIs, simplicity', 'Proliferates endpoints, caching issues', 'Twitter API'],
            ['Header', 'RESTful purity', 'Harder to debug, browser unfriendly', 'GitHub API'],
            ['Date-Based (Stripe)', 'Rapid iteration, enterprise clients', 'Complex to implement', 'Stripe API'],
            ['GraphQL (Versionless)', 'Internal APIs, mobile apps', 'Requires schema discipline', 'Facebook'],
            ['Consumer-Driven Contracts', 'Microservices, fast teams', 'Needs Pact or similar tooling', 'Spotify']
          ]
        }
      }
    ],

    'api-rate-limiting': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Rate limiting numbers from Twitter, GitHub, AWS, and Redis benchmarks.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Default Rate Limit', '100–1000 req/min', '10K–100K req/min', 'GitHub: 5K/hour for unauthenticated'],
            ['Burst Allowance', '2x–5x sustained rate', '10x+ with token bucket', 'Slack allows bursts up to 10x'],
            ['Rate Limit Latency', '< 1 ms (local)', '1–5 ms (distributed Redis)', 'Redis single-node: < 1ms'],
            ['Accuracy (local)', '100%', 'N/A', 'Per-process counters'],
            ['Accuracy (distributed)', '±1–5%', '±0.1% (Redis Cell)', 'Sliding window more accurate than fixed'],
            ['429 Response Rate', '< 1%', '5–10% during attacks', 'DDoS: 100% blocked at edge'],
            ['Redis Memory per Key', '~100 bytes', '~100 bytes', 'Minimal, millions of keys feasible'],
            ['Penalty Window', '1–15 minutes', '1–24 hours', 'AWS: exponential backoff on 429s']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How rate limiting behaves as traffic spikes.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', '< 1 ms', 'All requests pass, counters increment', 'Baseline'],
            ['3x', '< 1 ms (allowed), instant 429s', 'Token bucket drains', 'Burst capacity consumed'],
            ['5x', 'Instant 429s (majority)', 'Queue or reject, depends on config', 'Sustained limit exceeded'],
            ['10x', 'All 429s or queued', 'Circuit breaker may activate', 'Backend protected, clients throttled'],
            ['100x (Attack)', 'Blocked at edge', 'WAF + DDoS protection', 'Cloudflare blocks before app layer']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How rate limiting evolves from basic to advanced.',
        list: [
          '<strong>Stage 1: No Rate Limiting</strong> — Single server, trusted clients. First DDoS or bug takes everything down.',
          '<strong>Stage 2: Simple Fixed Window</strong> — 100 req/minute per IP. Easy to implement. Burst at window boundaries (thundering herd).',
          '<strong>Stage 3: Token Bucket</strong> — Allows bursts. Google GCM uses this. Smoother traffic shaping.',
          '<strong>Stage 4: Sliding Window + Redis</strong> — Distributed counters. Twitter uses this. More accurate but adds 1–5ms latency.',
          '<strong>Stage 5: User-Tiered Limits</strong> — Free: 100/min, Pro: 10K/min, Enterprise: unlimited. Stripe and GitHub use tiered limits.',
          '<strong>Stage 6: Adaptive Rate Limiting</strong> — ML-based: limits adjust based on backend health. Netflix and Amazon use predictive throttling.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How rate limiting affects each system layer.',
        list: [
          '<strong>Edge/CDN Tier:</strong> First line of defense. Cloudflare rate limits at edge — zero backend impact. WAF rules block by IP, country, or UA.',
          '<strong>Gateway Tier:</strong> Primary enforcement point. May use local counters (fast) or distributed Redis (accurate). Adds < 5ms.',
          '<strong>Service Tier:</strong> Protected from overload. Can operate at 60–80% capacity instead of 100% = headroom for spikes.',
          '<strong>Data Tier:</strong> Reduced load. Rate limiting on read APIs can cut DB queries by 30–50%.',
          '<strong>Client Tier:</strong> Must handle 429s with exponential backoff. SDKs should auto-retry. GitHub SDKs include retry logic.',
          '<strong>Observability Tier:</strong> 429 responses tracked. Sudden spikes = incident signal. Rate limit headers (X-RateLimit-*) inform clients.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing a rate limiting algorithm.',
        table: {
          headers: ['Algorithm', 'Accuracy', 'Burst Handling', 'Distributed', 'Best For'],
          rows: [
            ['Fixed Window', 'Low', 'Poor', 'Easy', 'Simple internal APIs'],
            ['Sliding Window', 'Medium', 'Fair', 'Moderate', 'Public APIs (GitHub)'],
            ['Token Bucket', 'High', '✅ Excellent', 'Moderate', 'Burst-tolerant services (Slack)'],
            ['Leaky Bucket', 'High', 'Smooths bursts', 'Hard', 'Strict rate shaping'],
            ['Redis Cell / Sliding Log', '✅ Highest', 'Fair', '✅ Yes', 'High-accuracy distributed (Stripe)'],
            ['Adaptive / ML', 'Variable', 'Predictive', '✅ Yes', 'Large-scale (Netflix)']
          ]
        }
      }
    ],

    'cdn-edge': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'CDN performance numbers from Cloudflare, Akamai, Fastly, and AWS CloudFront.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Cache Hit Ratio', '80–90%', '95–99%', 'Static assets: 99%, APIs: 60–80%'],
            ['Edge Locations', '100–200', '250–400', 'Cloudflare: 300+, Akamai: 4,000+ (incl. ISP)'],
            ['TTFB Reduction', '50–200 ms', '300–500 ms', 'From origin to edge'],
            ['Bandwidth Savings', '50–70%', '80–90%', 'Origin offload for static content'],
            ['Edge Compute Latency', '1–10 ms', '< 1 ms', 'Cloudflare Workers: cold start < 1ms'],
            ['Cache Invalidation Time', '30 s–5 min', 'Instant (Fastly surrogate keys)', 'Fastly: instant purge via API'],
            ['SSL Termination at Edge', '0 ms (hardware)', '0 ms', 'Dedicated TLS hardware at POPs'],
            ['DDoS Mitigation Capacity', '10–100 Tbps', '100+ Tbps', 'Cloudflare: 192 Tbps network capacity']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'CDN behavior during traffic surges and attacks.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', '10–50 ms (edge)', 'Cache serves 80%+ traffic', 'Optimal state'],
            ['10x (Viral)', '10–50 ms (edge)', 'Origin sees only cache misses', 'CDN absorbs viral spike'],
            ['100x (DDoS)', '10–50 ms (legit), blocked (attack)', 'WAF rules, CAPTCHA challenges', 'Malicious traffic filtered at edge'],
            ['Origin Down', 'Serves stale (if configured)', 'Stale-while-revalidate', 'Graceful degradation'],
            ['Cache Purge Storm', 'Origin spikes', 'Thundering herd', 'Need staggered TTL or origin shield']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How CDN usage evolves.',
        list: [
          '<strong>Stage 1: No CDN</strong> — Single origin server. High latency for global users. Vulnerable to traffic spikes.',
          '<strong>Stage 2: Static Asset CDN</strong> — Images, CSS, JS served from CloudFront or Cloudflare. 50% bandwidth savings.',
          '<strong>Stage 3: Full-Site CDN</strong> — HTML cached at edge. WordPress sites use this. TTL-based invalidation.',
          '<strong>Stage 4: Edge Compute</strong> — Cloudflare Workers or Lambda@Edge. Dynamic personalization at edge. < 1ms cold start.',
          '<strong>Stage 5: Origin Shield + Tiered Cache</strong> — Shield POP reduces origin load. Fastly and CloudFront offer this. Cache hit ratio jumps to 95%+.',
          '<strong>Stage 6: Global Edge Architecture</strong> — Application logic at edge. Databases replicated to edge (CRDTs, SQLite at edge). Fly.io and Cloudflare D1 direction.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How CDN affects each system layer.',
        list: [
          '<strong>DNS Tier:</strong> Geo-routed to nearest POP. Anycast IP. Failover automatic.',
          '<strong>Edge Tier:</strong> SSL termination, WAF, DDoS mitigation, caching, edge compute. Most traffic never reaches origin.',
          '<strong>Origin Tier:</strong> Sees 10–30% of requests. Can be smaller, cheaper. Focus on dynamic content.',
          '<strong>Storage Tier:</strong> Origin storage load reduced. May use S3 + CloudFront origin.',
          '<strong>Client Tier:</strong> Faster load times. Better UX. SEO benefits from lower TTFB.',
          '<strong>Security Tier:</strong> DDoS absorbed by CDN. Origin IP hidden. WAF blocks OWASP top 10 at edge.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'CDN feature selection.',
        table: {
          headers: ['Need', 'Basic CDN', 'CDN + WAF', 'CDN + Edge Compute', 'Enterprise CDN (Akamai)'],
          rows: [
            ['Static Assets Only', '✅ Best', 'Overkill', 'Overkill', 'Overkill'],
            ['DDoS Protection', 'Limited', '✅ Best', '✅ Best', '✅ Best'],
            ['Dynamic Personalization', 'No', 'No', '✅ Best', 'Possible'],
            ['Global Compliance', 'Limited', 'Limited', 'Limited', '✅ Best'],
            ['Cost Sensitivity', '✅ Best', 'Moderate', 'Moderate', 'Expensive'],
            ['Instant Cache Purge', 'Varies', 'Fastly/Cloudflare', 'Fastly/Cloudflare', '✅ Best']
          ]
        }
      }
    ],

    'graphql-federation': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'GraphQL Federation metrics from Netflix, Airbnb, and Apollo Federation deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Subgraphs', '5–20', '50–200', 'Netflix: 100+ subgraphs'],
            ['Query Depth', '2–4 levels', '5–10 levels', 'Deeper = more composition complexity'],
            ['Query Latency (p99)', '100–300 ms', '500 ms–2 s', 'Depends on subgraph fan-out'],
            ['Subgraph Calls per Query', '2–5', '10–50', 'Complex pages hit many services'],
            ['Schema Composition Time', '< 1 s', '5–30 s', 'At 100+ subgraphs, CI slows'],
            ['Federation Gateway CPU', '1–2x REST gateway', '2–5x', 'Query planning overhead'],
            ['Cache Hit Rate (Query)', '30–50%', '60–70%', '@cacheControl directives needed'],
            ['N+1 Detection', 'Manual', 'Automated (Apollo)', 'DataLoader pattern essential']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'GraphQL Federation behavior under increasing query complexity and volume.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Simple Query)', '50–100 ms', '1–2 subgraphs queried', 'Baseline'],
            ['3x (Complex Query)', '200–500 ms', '5–10 subgraphs, parallel fetch', 'Query planner optimizes parallelism'],
            ['5x (Deep Query)', '500 ms–2 s', 'Depth 5+, serial dependencies', 'Consider @defer and @stream'],
            ['10x (Malicious Query)', 'Timeout / 400', 'Max depth/ complexity limits', 'Query cost analysis needed'],
            ['20x+ (Subgraph Down)', 'Degraded / Error', 'Partial responses with errors', 'Federation resilience kicks in']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How GraphQL Federation adoption grows.',
        list: [
          '<strong>Stage 1: Monolith GraphQL</strong> — Single schema, single resolver set. Simple but becomes bottleneck.',
          '<strong>Stage 2: Schema Stitching</strong> — Multiple GraphQL services manually stitched. Fragile, tight coupling.',
          '<strong>Stage 3: Apollo Federation v1</strong> — @key directives link entities. Gateway composes schema. Netflix and Airbnb adopted this.',
          '<strong>Stage 4: Federation v2 + Router</strong> — Apollo Router (Rust) replaces Node gateway. 10x throughput. Shared ownership model.',
          '<strong>Stage 5: Subgraph Autonomy</strong> — Teams own subgraphs end-to-end. CI validates schema changes against supergraph.',
          '<strong>Stage 6: Federated Caching + @Defer</strong> — Edge caching of partial queries. @defer streams non-critical fields. Incremental delivery.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How Federation affects each system layer.',
        list: [
          '<strong>Gateway Tier:</strong> Query planning, subgraph routing, response assembly. Apollo Router adds < 1ms overhead. Node gateway: 5–20ms.',
          '<strong>Subgraph Tier:</strong> Each service implements part of schema. Needs @key and @resolveField annotations. Can use any language.',
          '<strong>Client Tier:</strong> Single query for complex pages. No more N REST calls. But needs to handle partial errors.',
          '<strong>Cache Tier:</strong> Query-level caching is harder. Needs normalized cache (Apollo Client) or CDN with query hashing.',
          '<strong>Observability Tier:</strong> Distributed tracing across subgraphs essential. OpenTelemetry spans per subgraph field.',
          '<strong>CI/CD Tier:</strong> Schema composition in CI. Breaking changes detected before deploy. Rover CLI validates subgraphs.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to adopt GraphQL Federation.',
        table: {
          headers: ['Scenario', 'REST + BFF', 'GraphQL (Monolith)', 'GraphQL Federation'],
          rows: [
            ['Single Team, Simple Domain', '✅ Best', 'Overkill', 'Overkill'],
            ['Multiple Clients, One Backend', 'BFF needed', '✅ Best', 'Overkill'],
            ['Many Teams, Shared Domain', 'Integration hell', 'Monolith bottleneck', '✅ Best'],
            ['Rapid Schema Evolution', 'Versioning pain', 'Schema conflicts', '✅ Independent subgraphs'],
            ['Microservices with Complex Queries', 'N+1 problems', 'Single point of failure', '✅ Best (Netflix)'],
            ['Strict Latency Requirements', 'Predictable', 'Variable', 'Query planner tuning needed']
          ]
        }
      }
    ]
  },

  module8: {
    'canary-deployment': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Canary deployment metrics from Google, Netflix, and AWS CodeDeploy.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Initial Canary %', '1–5%', '0.1–1%', 'Google: 1% to start, internal first'],
            ['Canary Duration', '15–60 minutes', '1–24 hours', 'Netflix: hours to days for critical services'],
            ['Error Rate Threshold', '2x baseline', '1.5x baseline', 'Auto-rollback trigger'],
            ['Latency Threshold', '1.5x baseline', '1.2x baseline', 'Stricter for user-facing APIs'],
            ['Rollback Time', '30 s–2 min', '10–30 s', 'Kubernetes: pod termination + startup'],
            ['Canary Instance Count', '1–2', '5–10', 'AWS CodeDeploy default: 1 canary'],
            ['Traffic Shift Steps', '2–3', '5–10', 'Gradual: 1% → 5% → 25% → 100%'],
            ['Manual Approval Gates', '1–2', '0 (fully automated)', 'Spotify: automated canary analysis']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Canary behavior as rollout progresses.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1% Canary', 'Baseline', 'New version handles tiny slice', 'Sentry error tracking watches'],
            ['5% Canary', '±5% variance', 'Enough traffic to detect issues', 'Metrics comparison starts'],
            ['25% Canary', '±10% variance', 'Moderate confidence', 'If issues, 25% of users affected'],
            ['50% Canary', 'Should match baseline', 'A/B comparison valid', 'Go/no-go decision point'],
            ['100% (Complete)', 'Baseline restored', 'Old version deprecated', 'Monitoring continues for hours']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How canary deployment matures.',
        list: [
          '<strong>Stage 1: Manual Canary</strong> — Deploy 1 new pod. Manually check logs. Roll back by hand. Error-prone.',
          '<strong>Stage 2: Scripted Canary</strong> — Jenkins pipeline shifts traffic in steps. Human approval between steps.',
          '<strong>Stage 3: Automated Canary Analysis</strong> — Kayenta (Netflix) or Flagger compare metrics. Auto-rollback on threshold breach.',
          '<strong>Stage 4: Multi-Region Canary</strong> — Canary in one region first. AWS us-east-1 → eu-west-1. Region isolation limits blast radius.',
          '<strong>Stage 5: Dark Launches</strong> — New code runs shadow traffic. No user impact. Netflix runs shadow on production traffic.',
          '<strong>Stage 6: Continuous Deployment</strong> — Every commit auto-canaried. No human gates. Requires extreme test coverage and observability.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How canary affects each system layer.',
        list: [
          '<strong>Load Balancer Tier:</strong> Must support weighted routing. NGINX, Envoy, AWS ALB all support this.',
          '<strong>Service Tier:</strong> Two versions running simultaneously. DB migrations must be backward compatible.',
          '<strong>Data Tier:</strong> Schema changes tricky. Expand → migrate → contract pattern. Feature flags help.',
          '<strong>Observability Tier:</strong> Critical. Need baseline metrics, canary metrics, and automated comparison. Datadog, Prometheus, Kayenta.',
          '<strong>Client Tier:</strong> Users may see mixed versions during shift. Session affinity can help (sticky sessions).',
          '<strong>CI/CD Tier:</strong> Pipeline must support multi-stage deploys. Argo Rollouts, Flagger, Spinnaker integrate with K8s.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Deployment strategy selection.',
        table: {
          headers: ['Factor', 'Canary', 'Blue-Green', 'Rolling Update'],
          rows: [
            ['Blast Radius', '✅ Minimal (1–5%)', 'Medium (instant 100%)', 'Medium (gradual)'],
            ['Resource Cost', 'Low (+1–5% pods)', 'High (2x capacity)', 'Low (same capacity)'],
            ['Rollback Speed', '✅ Fast (30s)', '✅ Instant (switch)', 'Slow (redeploy)'],
            ['Complexity', 'High', 'Medium', '✅ Low'],
            ['Zero-Downtime', '✅ Yes', '✅ Yes', 'Yes (if health checks pass)'],
            ['Database Changes', 'Tricky (both versions)', 'Tricky (both versions)', '✅ Simpler (one version)']
          ]
        }
      }
    ],

    'blue-green': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Blue-green deployment metrics from AWS, Kubernetes, and enterprise practices.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Resource Overhead', '2x (duplicate environment)', '2x', 'Always running two identical stacks'],
            ['Switchover Time', '1–30 s', '< 1 s (DNS)', 'Load balancer reconfiguration'],
            ['Rollback Time', '1–30 s', '< 1 s', 'Instant: route back to blue'],
            ['Pre-Deploy Testing', 'Smoke tests: 1–5 min', 'Full suite: 10–30 min', 'Run against green before switch'],
            ['Session Persistence', 'Requires shared store', 'Sticky sessions broken', 'Redis/session DB needed'],
            ['Cost Impact', '2x compute', '2x compute', 'Can scale down blue after warmup'],
            ['Database Compatibility', 'Both versions must work', 'Both versions must work', 'Schema changes need expand/contract']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Blue-green behavior during switchover.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Pre-Switch (Blue Active)', 'Baseline', '100% traffic on blue', 'Stable state'],
            ['Green Warming', 'No user traffic', 'Health checks verify green', 'Synthetic traffic pre-warms caches'],
            ['Switch Moment', '1–5 ms blip', 'DNS or LB flips', 'Connection drain on blue'],
            ['Post-Switch (Green Active)', 'Baseline', '100% traffic on green', 'Blue kept for rollback'],
            ['Rollback', 'Instant', 'Back to blue', 'Used if green issues detected']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How blue-green deployment matures.',
        list: [
          '<strong>Stage 1: Manual Swap</strong> — Two servers, manual DNS update. Error-prone. Used in early 2000s.',
          '<strong>Stage 2: Scripted Swap</strong> — Ansible or Terraform flips load balancer. Still manual trigger.',
          '<strong>Stage 3: CI/CD Blue-Green</strong> — Jenkins deploys green, runs tests, auto-switches. CircleCI and GitLab support this.',
          '<strong>Stage 4: Kubernetes Blue-Green</strong> — Two deployments, service selector switches. Argo CD and Flux manage.',
          '<strong>Stage 5: Database-Aware Blue-Green</strong> — Expand schema, deploy green, contract schema. Flyway or Liquibase manage migrations.',
          '<strong>Stage 6: Cost-Optimized Blue-Green</strong> — Green environment scales to zero when idle. AWS Lambda or Knative. Pay only during deploy + testing.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How blue-green affects each system layer.',
        list: [
          '<strong>Infrastructure Tier:</strong> 2x resources. Auto-scaling groups for both colors. Cost optimization: downscale blue after confidence.',
          '<strong>Load Balancer Tier:</strong> Fast switchover. Connection draining. Health checks must pass before routing.',
          '<strong>Service Tier:</strong> Two code versions never run side-by-side for same request. Simpler than canary but expensive.',
          '<strong>Data Tier:</strong> Must be compatible with both versions. Shared DB or replication lag considered.',
          '<strong>Session Tier:</strong> Sessions must persist across switch. External Redis or DB required. In-memory sessions break.',
          '<strong>Observability Tier:</strong> Pre-switch validation suite runs against green. Post-switch monitoring confirms health.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When blue-green is the right choice.',
        table: {
          headers: ['Scenario', 'Blue-Green', 'Canary', 'Rolling Update'],
          rows: [
            ['Mission-Critical (Payments)', '✅ Instant rollback', 'Good', 'Risky'],
            ['Resource Constrained', 'Expensive', '✅ Better', '✅ Best'],
            ['Session-Heavy Apps', '✅ Works with shared store', 'Session split issues', '✅ Works'],
            ['Database Schema Changes', '✅ Time to validate', 'Both versions must work', '✅ One version at a time'],
            ['Frequent Deploys (10+/day)', 'Costly', '✅ Better', '✅ Best'],
            ['Compliance / Audit Needs', '✅ Clean cutover', 'Complex to audit', 'Moderate']
          ]
        }
      }
    ],

    'feature-flags': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Feature flag metrics from LaunchDarkly, Split.io, and large-scale deployments at Netflix and Etsy.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Flags per Application', '10–50', '500–1000+', 'Etsy: 1000+ flags across services'],
            ['Flag Evaluation Latency', '< 1 ms (local)', '1–5 ms (remote)', 'In-memory: negligible, SDK: < 1ms'],
            ['Remote Flag Fetch Interval', '30–60 s', '5–30 s', 'SSE (server-sent events) for instant'],
            ['Flag Targeting Rules', '1–5', '50–100+', 'User segments, geo, device, custom attrs'],
            ['Stale Flag Cleanup', '6–12 months', '3–6 months', 'Technical debt: remove old flags'],
            ['A/B Test Duration', '1–2 weeks', '2–4 weeks', 'Statistical significance needed'],
            ['Flag Change Propagation', '5–30 s', '< 1 s (SSE)', 'LaunchDarkly: real-time streaming'],
            ['SDK Memory Overhead', '1–5 MB', '10–20 MB', 'Depends on flag set size']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Feature flag system behavior at scale.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', '< 1 ms', 'Local evaluation, no remote call', 'SDK cached all flags'],
            ['Flag Update Storm', 'Flags update in < 1s', 'SSE pushes to all clients', 'Rare, but handles gracefully'],
            ['SDK Initialization', '100–500 ms', '1–2 s (large flag sets)', 'First fetch from LaunchDarkly'],
            ['Fallback Mode (LD down)', '< 1 ms', 'Default values returned', 'SDK must have local defaults'],
            ['Evaluation per Request', 'Adds < 0.1% CPU', 'Negligible', 'In-memory map lookup']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How feature flag usage evolves.',
        list: [
          '<strong>Stage 1: If-Config Flags</strong> — Hardcoded booleans in config files. Restart to change. Primitive but works.',
          '<strong>Stage 2: Database Flags</strong> — Flags in DB, admin UI to toggle. No restart needed. Etsy started here.',
          '<strong>Stage 3: SaaS Feature Platform</strong> — LaunchDarkly or Split.io. Real-time updates, targeting, analytics.',
          '<strong>Stage 4: Progressive Rollouts</strong> — Percentage-based rollout. 1% → 5% → 25% → 100%. Automated monitoring gates.',
          '<strong>Stage 5: Experimentation Platform</strong> — A/B tests with statistical significance. Cohort analysis. Netflix runs 100s of experiments daily.',
          '<strong>Stage 6: ML-Driven Rollouts</strong> — Automatic rollout based on metrics. Anomaly detection auto-rolls back. LinkedIn uses predictive rollouts.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How feature flags affect each system layer.',
        list: [
          '<strong>Application Code:</strong> Branches on flag state. Risk: flag spaghetti. Need linting rules (max flags per function).',
          '<strong>SDK Tier:</strong> Caches flags locally. Handles network failures gracefully. Must have sane defaults.',
          '<strong>Flag Service Tier:</strong> High availability required. If flags fail, apps must still work (defaults).',
          '<strong>Analytics Tier:</strong> Tracks flag impressions for A/B testing. 1–2% of traffic sampled for analytics.',
          '<strong>Client Tier:</strong> Mobile apps cache flags locally. May see stale flags for 30–60s. Acceptable for non-critical features.',
          '<strong>Ops Tier:</strong> On-call playbooks include "disable flag X" for fast mitigation. Kill switches are flags too.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Feature flag vs. deployment strategy.',
        table: {
          headers: ['Goal', 'Feature Flags', 'Canary Deploy', 'Config Change'],
          rows: [
            ['Show/Hide UI Feature', '✅ Best', 'Overkill', 'Possible'],
            ['Backend Logic Change', '✅ Best', 'Good', 'Limited'],
            ['Database Schema Change', 'Not applicable', '✅ Best', 'Limited'],
            ['Emergency Kill Switch', '✅ Best', 'Slow (rollback)', 'Requires restart'],
            ['A/B Testing', '✅ Best', 'Limited', 'No'],
            ['Permanent Configuration', 'Technical debt', 'Overkill', '✅ Best']
          ]
        }
      }
    ],

    'observability': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Observability metrics from Honeycomb, Datadog, and Google SRE practices.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Log Volume', '1–10 GB/day', '10–100 TB/day', 'Netflix: ~100 TB/day of logs'],
            ['Metrics Cardinality', '1K–10K series', '100K–1M+ series', 'High cardinality = expensive'],
            ['Trace Sampling Rate', '1–5%', '0.01–1%', 'Google: 0.1% for high-traffic, 100% for errors'],
            ['APM Agent Overhead', '1–3% CPU', '5–10% CPU', 'eBPF reduces to < 1%'],
            ['Alert Noise Ratio', '50–80%', '10–20%', 'Goal: actionable alerts only'],
            ['MTTD (Mean Time to Detect)', '5–15 minutes', '1–5 minutes', 'Depends on threshold tuning'],
            ['MTTR (Mean Time to Repair)', '30 min–2 hours', '10–30 minutes', 'Runbooks and automation help'],
            ['Dashboard Load Time', '2–5 s', '< 1 s', 'Pre-aggregated metrics vs raw logs']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Observability system behavior during incidents.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Normal Operations', 'Baseline', 'Steady ingestion, clean dashboards', 'Optimal'],
            ['2x Traffic Spike', '+20–50% lag', 'Log buffers grow, some drop', 'Need backpressure handling'],
            ['10x Traffic Spike', 'Significant lag', 'Sampling kicks in aggressively', 'Protect observability pipeline'],
            ['Incident Investigation', 'High query load', 'Ad-hoc queries spike', 'Separate read replicas for querying'],
            ['Log Flood (Bug)', 'Pipeline saturation', 'Drop or sample oldest', 'Circuit breaker on log volume']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How observability matures.',
        list: [
          '<strong>Stage 1: Logs Only</strong> — grep through log files. Manual. Effective for small systems.',
          '<strong>Stage 2: Metrics (Prometheus/Grafana)</strong> — Time-series monitoring. Alerts on thresholds. Industry standard.',
          '<strong>Stage 3: Distributed Tracing</strong> — Jaeger or Zipkin. Follow requests across services. Essential for microservices.',
          '<strong>Stage 4: Structured Logging + Correlation IDs</strong> — JSON logs with trace_id. ELK or Loki stack. Query across services.',
          '<strong>Stage 5: Unified Observability (MELT)</strong> — Metrics, Events, Logs, Traces in one platform. Datadog, New Relic, Dynatrace.',
          '<strong>Stage 6: AI-Assisted Observability</strong> — Anomaly detection, root cause analysis, predictive alerts. Moogsoft, BigPanda, Honeycomb BubbleUp.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How observability affects each system layer.',
        list: [
          '<strong>Agent Tier:</strong> Runs on every host/pod. Collects metrics, traces, logs. APM agents instrument code.',
          '<strong>Collector Tier:</strong> OpenTelemetry Collector, Datadog Agent, Fluentd. Buffers and forwards. Needs HA.',
          '<strong>Storage Tier:</strong> Time-series DB (Prometheus, Cortex, Thanos). Log store (Elasticsearch, Loki). Trace store (Jaeger, Tempo).',
          '<strong>Query Tier:</strong> Grafana, Kibana, Honeycomb. Ad-hoc queries. Needs indexing for performance.',
          '<strong>Alerting Tier:</strong> PagerDuty, Opsgenie. Routing rules, escalation policies. On-call rotation.',
          '<strong>Application Tier:</strong> Instrumented with spans, metrics, structured logs. 1–3% overhead. eBPF for zero-instrumentation.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Observability stack selection.',
        table: {
          headers: ['Need', 'Open Source (Prometheus/ELK)', 'SaaS (Datadog/New Relic)', 'Enterprise (Splunk/Dynatrace)'],
          rows: [
            ['Cost', '✅ Free (infra cost)', '$$$', '$$$$'],
            ['Setup Complexity', 'High', '✅ Low', '✅ Low'],
            ['Scale (PB/day)', 'Hard', 'Good', '✅ Best'],
            ['AI/ML Features', 'None', 'Moderate', '✅ Best'],
            ['Vendor Lock-in Fear', '✅ None', 'Medium', 'Medium'],
            ['Support SLAs', 'Community', 'Good', '✅ Best']
          ]
        }
      }
    ],

    'health-checks': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Health check metrics from Kubernetes, AWS ELB, and microservices practices.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Liveness Probe Interval', '10 s', '5–10 s', 'K8s default: 10s'],
            ['Readiness Probe Interval', '5–10 s', '2–5 s', 'Faster for user-facing services'],
            ['Startup Probe Timeout', '30–60 s', '1–3 min', 'Slow-starting Java apps'],
            ['Health Check Latency', '1–10 ms', '< 1 ms', 'Must be lightweight'],
            ['Endpoint Timeout', '1–3 s', '5–10 s', 'Must be < LB timeout'],
            ['Failed Threshold', '3 consecutive', '5–10 consecutive', 'Avoid flapping'],
            ['Recovery Time (pod restart)', '15–60 s', '1–3 min', 'Image pull + startup'],
            ['Deep Health Check Latency', '50–500 ms', '1–2 s', 'DB + cache checks included']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Health check behavior under stress.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Normal', '< 10 ms', 'All probes pass', 'Healthy state'],
            ['CPU Saturated', '10–100 ms', 'Liveness may fail', 'K8s restarts pod (intended)'],
            ['DB Connection Pool Exhausted', 'Readiness fails', 'Traffic stops routing', 'Protects DB from more load'],
            ['Memory Pressure', 'OOMKill', 'Pod killed, restarted', 'Liveness catches this'],
            ['Network Partition', 'Timeout', 'Both probes may fail', 'Depends on which side of partition']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How health checks evolve.',
        list: [
          '<strong>Stage 1: Manual Checks</strong> — curl endpoint. Human decides if service is up. Not scalable.',
          '<strong>Stage 2: Simple HTTP 200</strong> — /health returns 200 if process runs. No dependency checks.',
          '<strong>Stage 3: Liveness + Readiness (K8s)</strong> — Liveness: restart if dead. Readiness: remove from LB if not ready. Kubernetes standard.',
          '<strong>Stage 4: Deep Health Checks</strong> — Check DB, cache, external APIs. /health/deep for monitoring. /health for LB.',
          '<strong>Stage 5: Health Aggregation</strong> — Service mesh aggregates health. Istio health check merging. Upstream health influenced by downstream.',
          '<strong>Stage 6: Predictive Health</strong> — ML-based: predict failure before it happens. Netflix uses predictive resiliency. Proactive replacement.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How health checks affect each system layer.',
        list: [
          '<strong>Load Balancer Tier:</strong> Uses readiness to include/exclude instances. AWS ALB health checks every 5–30s.',
          '<strong>Orchestrator Tier:</strong> K8s uses liveness to restart, readiness for routing. Critical for auto-healing.',
          '<strong>Service Tier:</strong> Must expose lightweight /health. Deep checks must not overwhelm dependencies.',
          '<strong>Data Tier:</strong> Deep health checks verify DB connectivity. But too many health checks = extra DB load.',
          '<strong>Client Tier:</strong> Indirectly benefits. Unready pods removed before client sees errors.',
          '<strong>Observability Tier:</strong> Health check failures logged. Patterns analyzed for systemic issues.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Health check depth selection.',
        table: {
          headers: ['Check Type', 'Speed', 'Coverage', 'Use For', 'Risk'],
          rows: [
            ['Process Alive (PID)', '✅ Instant', 'Minimal', 'Liveness (basic)', 'False positives'],
            ['HTTP 200 (shallow)', '✅ < 10ms', 'Low', 'LB health check', 'Misses DB issues'],
            ['Dependency Check (deep)', '50–500ms', '✅ High', 'Readiness, monitoring', 'Can overload deps'],
            ['Synthetic Transaction', '1–5s', '✅ Highest', 'End-to-end validation', 'Expensive, slow'],
            ['ML Prediction', 'Variable', 'Proactive', 'Predictive maintenance', 'Complex, nascent']
          ]
        }
      }
    ],

    'chaos-engineering': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Chaos engineering metrics from Netflix (Chaos Monkey), Gremlin, and industry practices.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Experiment Frequency', '1–2/week', '5–10/day', 'Netflix: thousands of experiments/day'],
            ['Blast Radius', '1–5% of traffic', '0.1–1%', 'Start small, increase over time'],
            ['Experiment Duration', '5–30 minutes', '1–4 hours', 'Longer for soak tests'],
            ['MTTD During Experiment', '1–5 minutes', '10–30 seconds', 'Automated detection required'],
            ['Services Tested', '5–20%', '80–100%', 'Goal: all critical paths covered'],
            ['Abort Rate (failed exps)', '10–20%', '5–10%', 'High abort = immature resilience'],
            ['Auto-Abort Latency', '30 s–2 min', '5–30 s', 'Gremlin: automatic safety aborts'],
            ['Cost of Downtime Prevented', 'Hard to quantify', '$Millions/year', 'Netflix credits Chaos Engineering for availability']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'System behavior during chaos experiments.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Normal + Experiment', '+10–50% latency', 'Degraded but acceptable', 'Fallbacks activate'],
            ['High Load + Experiment', '+100–300% latency', 'Circuit breakers trip', 'System protects itself'],
            ['Peak Load + Experiment', 'Timeouts / 503s', 'Bulkheads isolate', 'Blast radius contained'],
            ['Cascading Failure', 'Partial outage', 'Auto-rollback needed', 'Experiment aborted'],
            ['Recovery Post-Abort', '1–5 minutes', 'Gradual return to baseline', 'Cache warm-up, connection pool refill']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How chaos engineering matures.',
        list: [
          '<strong>Stage 1: No Chaos</strong> — Hope nothing breaks. Reactive incident response. Industry average MTTR: hours.',
          '<strong>Stage 2: Chaos Monkey (Random Termination)</strong> — Netflix open-sourced this. Randomly kills instances. Forces statelessness.',
          '<strong>Stage 3: Application-Level Chaos</strong> — Latency injection, error injection, packet loss. Gremlin provides these.',
          '<strong>Stage 4: Planned GameDays</strong> — Scheduled experiments with on-call teams. Amazon does GameDays quarterly. Cross-team learning.',
          '<strong>Stage 5: Automated Chaos Platform</strong> — Continuous, automated experiments. Hypothesis → experiment → measure → report. Netflix ChAP.',
          '<strong>Stage 6: AI-Guided Chaos</strong> — ML identifies weak points. Targets experiments where failure is most likely. Predictive chaos.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How chaos engineering affects each system layer.',
        list: [
          '<strong>Infrastructure Tier:</strong> EC2 termination, AZ failure simulation, network partition. AWS Fault Injection Simulator.',
          '<strong>Application Tier:</strong> Latency/error injection via sidecars or libraries. Tests circuit breakers and fallbacks.',
          '<strong>Data Tier:</strong> DB failover tests, replication lag injection. Verifies read replicas handle load.',
          '<strong>Network Tier:</strong> Packet loss, latency, DNS failure. Tests retry and timeout configurations.',
          '<strong>Client Tier:</strong> Mobile chaos: simulate poor network. SDK retry logic tested.',
          '<strong>Observability Tier:</strong> Critical. Must detect experiment impact in real-time. Dashboards and alerts tested too.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Chaos experiment types.',
        table: {
          headers: ['Experiment', 'What It Tests', 'Risk Level', 'Tool', 'When to Run'],
          rows: [
            ['Instance Termination', 'Auto-healing, statelessness', 'Low', 'Chaos Monkey', 'Always (automated)'],
            ['Latency Injection', 'Timeouts, retries', 'Medium', 'Gremlin, Toxiproxy', 'Scheduled GameDays'],
            ['Error Injection', 'Circuit breakers, fallbacks', 'Medium', 'Gremlin', 'Pre-production validation'],
            ['AZ Failure', 'Multi-AZ resilience', 'High', 'AWS FIS', 'Quarterly GameDay'],
            ['Region Failure', 'Disaster recovery', 'High', 'Custom', 'Bi-annual drill'],
            ['Data Corruption', 'Backup/recovery', 'Very High', 'Custom', 'Isolated environment']
          ]
        }
      }
    ]
  },

  module9: {
    'stream-processing': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Stream processing metrics from Kafka, Flink, and real-world deployments at LinkedIn and Uber.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Throughput per Partition', '1K–10K events/s', '50K–100K events/s', 'Kafka partition limit: ~10MB/s'],
            ['End-to-End Latency', '100 ms–1 s', '10–100 ms', 'Flink: < 100ms for complex windows'],
            ['Window Size', '1–5 minutes', '1–24 hours', 'Join windows: longer = more state'],
            ['State Size (per job)', '100 MB–10 GB', '100 GB–1 TB', 'RocksDB state backend for large state'],
            ['Checkpoint Interval', '30 s–5 min', '1–10 min', 'Flink: exactly-once checkpoints'],
            ['Recovery Time', '1–5 min', '10–30 s', 'Incremental checkpoints help'],
            ['Parallelism', '5–20', '100–500', 'LinkedIn: 1000+ parallelism for some jobs'],
            ['Consumer Lag Threshold', '1K–10K messages', '100K+ messages', 'Alert if lag grows beyond SLA']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Stream processing behavior under traffic spikes.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', 'Sub-second', 'Lag stable, checkpoints on time', 'Healthy'],
            ['3x Spike', 'Lag grows', 'Backpressure activates', 'Flink slows upstream producers'],
            ['5x Spike', 'Minutes lag', 'Autoscaler adds tasks (if configured)', 'Kinesis auto-scales shards'],
            ['10x Spike', 'Significant lag', 'May need partition expansion', 'Kafka: add partitions (complex)'],
            ['Sustained 10x', 'Persistent lag', 'Scale out or sample/drop', 'Business decision: tolerate lag or drop?']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How stream processing evolves.',
        list: [
          '<strong>Stage 1: Simple Consumer</strong> — Single-threaded consumer. Poll loop. No state. Good for logging.',
          '<strong>Stage 2: Consumer Groups</strong> — Parallel consumers. Kafka auto-balances partitions. Still stateless.',
          '<strong>Stage 3: Stateful Processing (Kafka Streams)</strong> — Local state stores. Aggregations, joins. Changelog topics for fault tolerance.',
          '<strong>Stage 4: Complex Event Processing (Flink)</strong> — Windowed joins, CEP patterns. Event time processing. Watermarks handle out-of-order.',
          '<strong>Stage 5: Exactly-Once + Large State</strong> — RocksDB + incremental checkpoints. TB-scale state. LinkedIn runs this for sessionization.',
          '<strong>Stage 6: Unified Batch+Stream</strong> — Apache Beam / Flink. Same code for batch and streaming. Google Dataflow model.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How stream processing affects each system layer.',
        list: [
          '<strong>Broker Tier:</strong> Kafka/Kinesis throughput is bottleneck. Partition count limits parallelism. Rebalancing is expensive.',
          '<strong>Processing Tier:</strong> Flink/Spark Streaming tasks. CPU-bound for complex windows. Memory for state stores.',
          '<strong>State Tier:</strong> RocksDB local, or remote (Redis, Cassandra). Checkpoints to S3/HDFS. State size drives recovery time.',
          '<strong>Storage Tier:</strong> Output sinks: DB, data warehouse, Elasticsearch. Backpressure if sink is slow.',
          '<strong>Observability Tier:</strong> Consumer lag is key metric. Prometheus + Grafana. LinkedIn uses Kafka Monitor.',
          '<strong>Ops Tier:</strong> Scaling partitions requires rebalancing. Flink savepoints for code updates. Schema evolution critical.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Stream processing framework selection.',
        table: {
          headers: ['Factor', 'Kafka Streams', 'Apache Flink', 'Spark Streaming', 'ksqlDB'],
          rows: [
            ['Latency Requirement', '100ms–1s', '✅ < 100ms', '1–10s (micro-batch)', '100ms–1s'],
            ['Complex Windows/CEP', 'Limited', '✅ Excellent', 'Good', 'Limited'],
            ['Operational Simplicity', '✅ Good', 'Moderate', 'Moderate', '✅ Best'],
            ['SQL Interface', 'No', 'Flink SQL', 'Spark SQL', '✅ Native'],
            ['Exactly-Once', 'Yes', '✅ Yes (checkpoints)', 'Yes', 'Yes'],
            ['Large State (TB)', 'Possible', '✅ RocksDB backend', '✅ Good', 'Limited']
          ]
        }
      }
    ],

    'cdc': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Change Data Capture metrics from Debezium, Maxwell, and real-world deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Capture Latency', '10–100 ms', '1–10 ms', 'Debezium: ~10ms for MySQL binlog'],
            ['Throughput', '1K–10K events/s', '50K–100K events/s', 'Depends on DB write rate'],
            ['Binlog/ WAL Retention', '24–48 hours', '7+ days', 'Longer = more recovery buffer'],
            ['Schema Change Handling', 'Manual', 'Automated (Schema Registry)', 'Debezium + Avro + Registry'],
            ['Snapshot Time (initial)', 'Minutes–hours', 'Hours–days', 'Large tables: parallel snapshot'],
            ['Memory Overhead (DB)', '1–5%', '5–10%', 'Binlog parsing adds load'],
            ['Duplicate Events', 'Rare', 'Handled by idempotent consumers', 'At-least-once delivery'],
            ['Lag on Schema Change', '1–5 min', 'Seconds (if automated)', 'Pipeline pause for DDL parsing']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'CDC behavior under database write load.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Normal Write Load', '10–50 ms lag', 'Real-time sync', 'Optimal'],
            ['3x Write Spike', 'Lag grows to 1–5s', 'Connector buffers events', 'Temporary, recovers'],
            ['Bulk Load (ETL)', 'Minutes–hours lag', 'Massive binlog generation', 'Consider disabling CDC or snapshot'],
            ['Schema Change (ALTER)', '1–5 min pause', 'Parser must adapt', 'Automated with Schema Registry'],
            ['Connector Failure', 'Lag grows until restart', 'Resume from last offset', 'Checkpointing essential']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How CDC adoption evolves.',
        list: [
          '<strong>Stage 1: Query-Based Polling</strong> — SELECT * WHERE updated_at > ?. Simple but misses deletes, high DB load.',
          '<strong>Stage 2: Transaction Log Tailing</strong> — MySQL binlog, PostgreSQL WAL, SQL Server CDC. Debezium reads this.',
          '<strong>Stage 3: Event Bus Integration</strong> — CDC feeds Kafka. Downstream consumers decoupled from DB.',
          '<strong>Stage 4: Schema Registry + Avro</strong> — Enforce schemas. Evolution rules. Confluent Schema Registry.',
          '<strong>Stage 5: Multi-Target Replication</strong> — Same CDC stream to data warehouse, cache, search index, audit log.',
          '<strong>Stage 6: Distributed Transaction Outbox</strong> — Application writes to outbox table, CDC captures. Guarantees event delivery.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How CDC affects each system layer.',
        list: [
          '<strong>Database Tier:</strong> Binlog/WAL must be enabled. Adds 1–5% overhead. Retention critical for recovery.',
          '<strong>Connector Tier:</strong> Debezium, Maxwell, or native tools. Must be HA (primary/standby). Offset management crucial.',
          '<strong>Message Bus Tier:</strong> Kafka is standard destination. Topic per table or per domain event.',
          '<strong>Consumer Tier:</strong> Idempotent consumers required. At-least-once delivery. Eventual consistency model.',
          '<strong>Data Warehouse Tier:</strong> Sink connectors (Kafka Connect) load to BigQuery, Snowflake, Redshift.',
          '<strong>Cache/Search Tier:</strong> Invalidate or update cache on CDC event. Elasticsearch sync via Kafka.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'CDC implementation approaches.',
        table: {
          headers: ['Approach', 'Latency', 'DB Impact', 'Completeness', 'Complexity', 'Best For'],
          rows: [
            ['Query Polling', 'Seconds–minutes', 'High', 'Misses deletes', '✅ Low', 'Simple sync'],
            ['Binlog/WAL Tailing', '✅ 10–100ms', 'Low', '✅ All changes', 'Moderate', 'Real-time sync'],
            ['Trigger-Based', 'Immediate', '✅ Very High', '✅ All changes', 'Moderate', 'Legacy systems'],
            ['Outbox Pattern', '✅ 10–100ms', 'Low', '✅ Application events', 'High', 'Microservices'],
            ['Dual Write', 'Immediate', 'Medium', 'Risk of inconsistency', 'Low', '⚠️ Avoid if possible']
          ]
        }
      }
    ],

    'exactly-once': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Exactly-once processing metrics from Kafka, Flink, and distributed systems theory.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Latency Overhead', '5–20%', '10–30%', 'Idempotent writes + transaction coordination'],
            ['Throughput Penalty', '10–20%', '20–40%', 'Two-phase commit or idempotent dedup'],
            ['Checkpoint Interval', '30 s–5 min', '1–10 min', 'Flink: shorter = faster recovery, more overhead'],
            ['Deduplication Window', '1–7 days', '7–30 days', 'Kafka transactional.id timeout: 7 days default'],
            ['State Size (for dedup)', '10–100 MB', '1–10 GB', 'Bloom filters or idempotent stores'],
            ['Transaction Timeout', '10–15 min', '1–5 min', 'Shorter = faster failure detection'],
            ['Recovery Time', '1–5 min', '10–30 s', 'Incremental checkpoints'],
            ['End-to-End Latency', '100 ms–1 s', '10–100 ms', 'Flink: < 100ms possible with exactly-once']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Exactly-once behavior under increasing load.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', 'Baseline + 5–10%', 'Transactions commit normally', 'Healthy overhead'],
            ['3x', '+10–20% latency', 'Transaction coordinator busy', 'May need more coordinator resources'],
            ['5x', '+20–40% latency', 'More aborts and retries', 'Contention on transactional IDs'],
            ['10x', 'Significant degradation', 'Consider at-least-once + idempotent', 'Exactly-once becomes bottleneck'],
            ['Network Partition', 'Transactions stall', 'Timeout and abort', 'Idempotency handles retries']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How exactly-once processing evolves.',
        list: [
          '<strong>Stage 1: At-Most-Once</strong> — Fire and forget. May lose messages. Simple, fast. Not suitable for payments.',
          '<strong>Stage 2: At-Least-Once + Deduplication</strong> — Retry on failure. Consumer deduplicates by ID. Kafka consumers with manual offset.',
          '<strong>Stage 3: Idempotent Producers (Kafka)</strong> — enable.idempotence = true. Automatic dedup within producer session. No consumer change needed.',
          '<strong>Stage 4: Transactions (Kafka TX)</strong> — Atomic consume-transform-produce. beginTransaction() / commitTransaction().',
          '<strong>Stage 5: Two-Phase Commit (Flink + Kafka + DB)</strong> — End-to-end exactly-once. Flink checkpoints coordinate Kafka + JDBC sinks.',
          '<strong>Stage 6: Sagas + Compensation</strong> — Long-running transactions. Compensating actions on failure. Temporal.io, Camunda. Event-driven orchestration.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How exactly-once affects each system layer.',
        list: [
          '<strong>Producer Tier:</strong> Idempotent producer (Kafka) or dedup layer. Sequence numbers tracked.',
          '<strong>Broker Tier:</strong> Transaction coordinator manages pending transactions. Partition leader tracks transactional state.',
          '<strong>Consumer Tier:</strong> Must store offsets atomically with processing. Kafka transactions or DB transactions.',
          '<strong>Database Tier:</strong> Idempotent writes (INSERT IGNORE, ON CONFLICT). Or two-phase commit.',
          '<strong>Coordinator Tier:</strong> Flink JobManager, Kafka TransactionCoordinator. Single point of coordination.',
          '<strong>Observability Tier:</strong> Track "exactly-once violation" metrics. Very rare but critical to detect.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Delivery guarantee selection.',
        table: {
          headers: ['Guarantee', 'Latency', 'Complexity', 'Use Case', 'Example'],
          rows: [
            ['At-Most-Once', '✅ Fastest', '✅ Lowest', 'Metrics, logs (tolerate loss)', 'UDP metrics'],
            ['At-Least-Once', 'Fast', 'Low', 'Most streaming use cases', 'Kafka default consumer'],
            ['Exactly-Once (Idempotent)', 'Moderate', 'Moderate', 'Payments, inventory', 'Kafka idempotent producer'],
            ['Exactly-Once (Transactional)', 'Slower', 'High', 'End-to-end consistency', 'Flink + Kafka TX'],
            ['Saga / Compensation', 'Variable', '✅ Highest', 'Distributed transactions', 'Temporal, Camunda']
          ]
        }
      }
    ],

    'batch-processing': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Batch processing metrics from Spark, Hadoop, and cloud data pipelines at Netflix and Airbnb.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Job Duration', 'Minutes–hours', 'Hours–days', 'Spark: TPC-DS benchmark jobs'],
            ['Data Volume per Job', '10 GB–1 TB', '10–100 TB', 'Daily ETL pipelines'],
            ['Throughput', '100 MB–1 GB/min', '10–100 GB/min', 'Spark: in-memory = faster'],
            ['Cluster Size', '10–50 nodes', '100–1000+ nodes', 'AWS EMR, Databricks auto-scale'],
            ['Shuffle Data', '10–50% of input', '100%+', 'Network-heavy, impacts performance'],
            ['Failed Task Retry Rate', '1–5%', '10–20% (spot instances)', 'Preemptible VMs save cost'],
            ['Checkpoint/Stage Count', '10–50', '100–500', 'More stages = more scheduling overhead'],
            ['Cost per TB Processed', '$1–$10', '$0.10–$1', 'Spot instances, auto-termination']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Batch processing behavior with data volume growth.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1x (Normal)', 'Baseline', 'All tasks fit in memory', 'Optimal'],
            ['2x Data', '2–3x time', 'Spill to disk starts', 'Spark: MEMORY_AND_DISK'],
            ['5x Data', '5–10x time', 'Heavy shuffle, GC pressure', 'Need partitioning tuning'],
            ['10x Data', '10–20x time', 'OOM errors possible', 'Increase executor memory or nodes'],
            ['100x Data', 'Requires re-architecture', 'Consider streaming or incremental', 'Daily batch → hourly or micro-batch']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How batch processing evolves.',
        list: [
          '<strong>Stage 1: Cron + SQL</strong> — Nightly SQL queries on read replica. Simple, limited scale.',
          '<strong>Stage 2: Hadoop MapReduce</strong> — Distributed batch processing. HDFS storage. High latency, high throughput.',
          '<strong>Stage 3: Spark In-Memory</strong> — 10–100x faster than MapReduce. RDD/DataFrame APIs. Caching between stages.',
          '<strong>Stage 4: SQL-on-Big-Data (Spark SQL, Presto)</strong> — Analysts use SQL directly. No Java/Scala needed.',
          '<strong>Stage 5: Auto-Scaling Cloud Jobs</strong> — AWS EMR, Databricks, BigQuery. Scale to zero when idle. Spot instances reduce cost 70%.',
          '<strong>Stage 6: Incremental + Hybrid</strong> — Process only changed data. Delta Lake / Iceberg time travel. Merge batch + streaming (Spark Structured Streaming).'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How batch processing affects each system layer.',
        list: [
          '<strong>Orchestrator Tier:</strong> Airflow, Dagster, Prefect schedule and monitor. DAG dependencies. Retry logic.',
          '<strong>Compute Tier:</strong> Spark executors, Hadoop task trackers. CPU and memory intensive. Auto-scaling critical.',
          '<strong>Storage Tier:</strong> HDFS, S3, ADLS. Input data, intermediate shuffle, output. S3 = cheap, high latency.',
          '<strong>Shuffle Tier:</strong> External shuffle service (Spark). Disk or SSD-based. Network bandwidth bottleneck.',
          '<strong>Metastore Tier:</strong> Hive Metastore, Glue Catalog. Table schemas, partitions. Query planning depends on this.',
          '<strong>Output Tier:</strong> Data warehouse (Snowflake, Redshift), BI tools (Tableau, Looker), ML feature stores.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Batch processing engine selection.',
        table: {
          headers: ['Engine', 'Latency', 'Scale', 'SQL Support', 'Cost', 'Best For'],
          rows: [
            ['Spark', 'Minutes–hours', '✅ PBs', '✅ Excellent (Spark SQL)', 'Moderate', 'General purpose ETL'],
            ['Hadoop MR', 'Hours', '✅ PBs', 'Hive (slow)', 'Low (on-prem)', 'Legacy, cost-sensitive'],
            ['Presto/Trino', 'Seconds–minutes', '100s TB', '✅ Native', 'Moderate', 'Ad-hoc analytics'],
            ['BigQuery', 'Seconds', '✅ PBs', '✅ Native', 'Pay-per-query', 'Serverless analytics'],
            ['Snowflake', 'Seconds–minutes', '✅ PBs', '✅ Native', '$$$', 'Enterprise DWH'],
            ['DuckDB (local)', 'Milliseconds', 'GBs–TBs', '✅ Native', '✅ Free', 'Local/dev analytics']
          ]
        }
      }
    ],

    'lambda-architecture': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Lambda Architecture metrics from early Twitter, LinkedIn, and Nathan Marz’s original design.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Batch Latency', 'Hours', 'Minutes (Spark)', 'Nightly recompute of full dataset'],
            ['Speed Layer Latency', 'Seconds–minutes', 'Sub-second (Storm/Flink)', 'Real-time view of recent data'],
            ['Data Duplication', '2x (batch + speed)', '2x', 'Same data processed twice'],
            ['Code Duplication', '50–100%', '30–50% (if shared libs)', 'Batch and speed logic differ'],
            ['Recomputation Frequency', 'Daily', 'Hourly', 'Batch view refreshed on schedule'],
            ['Query Complexity', 'High (merge batch + speed)', 'Moderate (with abstractions)', 'Application merges two views'],
            ['Storage Overhead', '2x', '2x', 'HDFS + real-time store'],
            ['Operational Complexity', 'High', 'Very High', 'Two systems to maintain']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Lambda architecture behavior under data growth.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Normal Batch', 'Hours', 'Full recompute', 'Expected'],
            ['Speed Layer Spike', 'Seconds–minutes lag', 'Speed layer absorbs', 'Recent data slightly delayed'],
            ['Batch Delay', 'Batch view stale', 'Speed layer serves more', 'Merge ratio shifts'],
            ['Recompute Failure', 'Batch view outdated', 'Speed layer continues', 'Serving layer may be inconsistent'],
            ['Speed Layer Failure', 'Real-time view gaps', 'Batch view still valid (older)', 'Eventual consistency extended']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How Lambda Architecture adoption has evolved (and declined).',
        list: [
          '<strong>Stage 1: Pure Batch (Hadoop)</strong> — Nightly MapReduce. Simple but 24-hour stale data. Twitter started here.',
          '<strong>Stage 2: Lambda Architecture</strong> — Batch + speed layers. Nathan Marz at Twitter. Real-time + accurate views. Complex.',
          '<strong>Stage 3: Unified Frameworks (Spark Streaming)</strong> — Same API for batch and streaming. Reduced code duplication.',
          '<strong>Stage 4: Kappa Architecture</strong> — Streaming only. Replay from Kafka for reprocessing. Jay Kreps (Confluent) proposed this.',
          '<strong>Stage 5: Modern Stream Processing (Flink)</strong> — True streaming with state. No separate batch needed for many use cases.',
          '<strong>Stage 6: Table/Stream Duality (Kafka, Pulsar)</strong> — Topic is a table. Stream and table are dual. ksqlDB queries streams as tables.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How Lambda Architecture affects each system layer.',
        list: [
          '<strong>Data Ingestion Tier:</strong> Kafka or Kinesis. Same stream feeds both batch and speed. No duplication in ingestion.',
          '<strong>Batch Tier:</strong> Hadoop/Spark. Processes full dataset. Output: batch view in serving layer.',
          '<strong>Speed Tier:</strong> Storm, Spark Streaming, or Flink. Processes recent data only. Output: real-time view.',
          '<strong>Serving Tier:</strong> Merges batch + speed on query. Druid, Cassandra, or custom merge logic.',
          '<strong>Storage Tier:</strong> Two copies of data. Batch: HDFS/S3. Speed: NoSQL or in-memory.',
          '<strong>Operational Tier:</strong> Two pipelines to monitor, debug, and keep in sync. Major maintenance burden.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Lambda vs. Kappa vs. batch-only.',
        table: {
          headers: ['Scenario', 'Lambda', 'Kappa', 'Batch-Only'],
          rows: [
            ['Latency Requirement < 1s', '✅ Speed layer', '✅ Streaming', '❌ Unsuitable'],
            ['Absolute Accuracy Required', '✅ Batch recompute', 'Eventual consistency', '✅ Best'],
            ['Operational Simplicity', '❌ Complex', '✅ Simpler', '✅ Simplest'],
            ['Code Reuse', '❌ Low', '✅ High', 'N/A'],
            ['Historical Reprocessing', '✅ Easy (rerun batch)', '✅ Replay stream', '✅ Easy'],
            ['Modern Recommendation', '⚠️ Legacy', '✅ Preferred', '✅ If latency OK']
          ]
        }
      }
    ],

    'kappa-architecture': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Kappa Architecture metrics from Kafka, Confluent, and streaming-first deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Stream Retention', '7–30 days', 'Months–years (Tiered Storage)', 'Kafka 3.0: infinite retention with tiered storage'],
            ['Replay Throughput', '10–100 MB/s', '1 GB/s+', 'Limited by consumer count and disk'],
            ['Processing Latency', '10 ms–1 s', '1–10 ms', 'Flink: sub-100ms possible'],
            ['Reprocessing Time', 'Hours (full replay)', 'Minutes–hours', 'Same code, just rewind offset'],
            ['Storage Cost (stream)', '$0.02/GB (S3 tiered)', '$0.004/GB (cold)', 'Kafka Tiered Storage to S3'],
            ['Code Duplication', '0%', '0%', 'Single codebase for all processing'],
            ['Operational Complexity', 'Medium', 'Moderate–High', 'One system, but streaming is complex'],
            ['Event Ordering', 'Per-partition', 'Per-partition', 'Global ordering requires single partition']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Kappa architecture behavior under data growth.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['Normal Stream', 'Sub-second', 'Consumer keeps up with producer', 'Healthy'],
            ['Consumer Lag', 'Minutes–hours', 'Consumer slower than producer', 'Scale consumers or optimize'],
            ['Replay (Backfill)', 'Hours–days', 'Historical reprocessing', 'Expected for Kappa'],
            ['Partition Expansion', 'Brief pause', 'Rebalance', 'Kafka: consumers reassign'],
            ['Schema Evolution', 'Processing pause', 'Old + new schema consumers', 'Schema Registry + compatibility']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How Kappa Architecture adoption grows.',
        list: [
          '<strong>Stage 1: Log as Source of Truth</strong> — Kafka becomes system of record. DB is a derived view. LinkedIn operates this way.',
          '<strong>Stage 2: Stream Processing for Analytics</strong> — Real-time dashboards. Materialized views from Kafka topics. ksqlDB for SQL.',
          '<strong>Stage 3: Event Sourcing + CQRS</strong> — Application state is event log. Read models are projections. EventStoreDB, Axon.',
          '<strong>Stage 4: Tiered Storage + Long Retention</strong> — Kafka retains data in S3. Reprocess months of history without batch.',
          '<strong>Stage 5: Exactly-Once Stream Processing</strong> — Flink + Kafka transactions. Stateful processing with strong guarantees.',
          '<strong>Stage 6: Unified Table/Stream (Kafka Tables)</strong> — ksqlDB tables backed by changelog topics. Stream = changelog, Table = snapshot. Dual representation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'How Kappa Architecture affects each system layer.',
        list: [
          '<strong>Stream Tier:</strong> Kafka/Pulsar is central. Must be highly available. Retention policy critical.',
          '<strong>Processing Tier:</strong> Single codebase. Flink, Kafka Streams, or ksqlDB. Stateful or stateless jobs.',
          '<strong>Storage Tier:</strong> Stream is primary storage. Materialized views in DB/cache are secondary.',
          '<strong>Serving Tier:</strong> Queries against materialized views. Or ksqlDB directly. Real-time but not historical.',
          '<strong>Replay Tier:</strong> Rewind consumer offsets. Reprocess with updated logic. Same code, new output.',
          '<strong>Ops Tier:</strong> Monitor consumer lag. Schema evolution. Partition growth. No batch job scheduling needed.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When Kappa is the right choice.',
        table: {
          headers: ['Factor', 'Kappa', 'Lambda', 'Batch-Only'],
          rows: [
            ['Real-Time Requirement', '✅ Yes', '✅ Yes', '❌ No'],
            ['Operational Simplicity', '✅ One system', '❌ Two systems', '✅ Simple'],
            ['Historical Accuracy', 'Replayable', '✅ Batch guaranteed', '✅ Guaranteed'],
            ['Reprocessing Ease', '✅ Rewind offsets', '✅ Rerun batch', '✅ Rerun job'],
            ['Storage Cost', 'Stream retention', '2x data', 'Low'],
            ['Team Streaming Expertise', 'Required', 'Required', 'Not required']
          ]
        }
      }
    ]
  }
};
