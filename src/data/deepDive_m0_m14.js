// Deep Dive content for System Design Modules 0, 10, 13, 14
// Adds AlgoMaster-style quantitative depth: metrics, load degradation, scaling walkthroughs, component tiers, and decision matrices.

export const deepDive_m0_m14 = {
  module0: {
    'what-is-system-design-interview': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'System design interviews are evaluated on a rubric with concrete time and depth expectations. These numbers are typical for senior/lead-level loops at large tech companies.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Interview Duration', '45–60 min', '60–90 min (staff+)', 'Top companies allocate 60 min for design + 30 min for coding/behavioral'],
            ['Requirements Clarification', '5–10 min', '5–10 min', 'Should consume ~10% of total time'],
            ['High-Level Design Time', '10–15 min', '15–20 min', 'Must produce a clear block diagram'],
            ['Deep Dive & Trade-offs', '15–25 min', '25–35 min', 'Most important scoring area'],
            ['Final Scaling & Failure Modes', '10–15 min', '10–15 min', 'Demonstrates production awareness'],
            ['Estimated System Scale Discussed', '10K–1M users', '10M–100M users', 'Should cover 1–2 orders of magnitude beyond current requirement'],
            ['Latency SLOs Mentioned', 'p95/p99', 'p99.9', 'State concrete targets: e.g., p99 < 200 ms'],
            ['Acceptable Designs Given', '1 solid design', '2+ alternatives', 'Senior candidates compare 2–3 approaches']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How interview signal quality changes with candidate load (topics covered, depth, and clarity).',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Smooth 1-question flow', 'Clear diagram, concrete numbers, good trade-offs', 'Strong pass'],
            ['2× Load', 'Rushed but complete', 'Covers core design; trade-offs shallow', 'Marginal pass with feedback'],
            ['5× Load', 'Rambling', 'Misses data sizing, ignores failure modes', 'Likely no-hire'],
            ['10× Load', 'Question drifts', 'Can not converge on a design', 'Reject'],
            ['Interviewer Hints', 'Should recover', 'Adjusts course based on feedback', 'Strong signal']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How a candidate’s expected depth grows with seniority and the scale of the question.',
        list: [
          '<strong>Stage 1: Junior (0–10K users)</strong> — Focus on functional requirements, API design, and a simple database schema. Mention a single server and a load balancer.',
          '<strong>Stage 2: Mid (10K–1M users)</strong> — Add caching, read replicas, and basic monitoring. Discuss trade-offs between SQL and NoSQL.',
          '<strong>Stage 3: Senior (1M–10M users)</strong> — Introduce sharding, message queues, CDN, auto-scaling, and failure modes. Quantify throughput and latency.',
          '<strong>Stage 4: Staff (10M–100M users)</strong> — Multi-region design, data locality, eventual consistency, observability, and capacity planning. Compare 2–3 architectures.',
          '<strong>Stage 5: Principal (100M+ users)</strong> — Global scale, cross-DC replication, compliance, cost optimization, and multi-year roadmap. Coach the interviewer.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'What interviewers look for in each tier of the system design answer.',
        list: [
          '<strong>Client / Edge:</strong> Mention CDN, mobile clients, DNS, TLS termination, and edge caching. Know that a typical CDN serves 90–95% cache hit rate.',
          '<strong>API Gateway / Load Balancer:</strong> Discuss routing, rate limiting, authentication, and SSL. Know API gateways handle 10K–100K req/s.',
          '<strong>Application Tier:</strong> Stateless services, horizontal scaling, and service boundaries. Be ready to estimate ~1 vCPU per 100–500 concurrent users.',
          '<strong>Cache Tier:</strong> Redis/Memcached, cache hit rates, eviction policies. Redis can handle 100K+ ops/s per node.',
          '<strong>Database Tier:</strong> Read replicas, sharding, indexes, CAP theorem. MySQL can handle ~5K writes/s and 50K reads/s per node.',
          '<strong>Message Queue Tier:</strong> Async processing, Kafka/RabbitMQ/SQS. Kafka can handle 1M+ messages/s per cluster.',
          '<strong>Observability:</strong> Metrics, logs, tracing, and health checks. Sampling rate at scale is typically 1–5%.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'How to decide where to spend your time during the interview based on the prompt.',
        table: {
          headers: ['Scenario', 'Focus First', 'Also Cover', 'Avoid'],
          rows: [
            ['Read-heavy product (feed, search)', 'Caching, read replicas, CDN', 'API design, sharding', 'Over-engineering writes'],
            ['Write-heavy product (logging, IoT)', 'Message queues, partitioning, sharding', 'Batching, retention, cost', 'Complex joins'],
            ['Real-time product (chat, game)', 'WebSockets, presence, fan-out', 'Delivery semantics, retries', 'Polling-heavy design'],
            ['Financial / payments product', 'ACID, idempotency, audit logs', 'Consistency model, retries', 'Eventual consistency for core transactions'],
            ['Global multi-region product', 'Data locality, replication, conflict resolution', 'Latency, compliance, failover', 'Ignoring cross-region latency'],
            ['AI / LLM product', 'Latency, token budget, rate limiting, caching', 'Routing, fallback, cost', 'Ignoring model capacity limits']
          ]
        }
      }
    ],
    'functional-vs-nonfunctional-requirements': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Functional requirements define what the system does; non-functional requirements define how well it does it, with measurable numbers.',
        table: {
          headers: ['Requirement Type', 'Example', 'How to Quantify', 'Typical Target'],
          rows: [
            ['Functional', 'Users can post tweets', 'API endpoints, supported actions', 'N/A — binary yes/no'],
            ['Availability', 'System is up 99.9% of the year', 'Uptime percentage', '99.9% = 8.77 h downtime/year'],
            ['Latency', 'Timeline loads quickly', 'p50/p95/p99 response time', 'p95 < 200 ms'],
            ['Throughput', 'Handle Black Friday traffic', 'Requests per second (RPS)', '100K RPS peak'],
            ['Durability', 'Messages are not lost', 'Data loss probability', '11 nines (0.0000001% annual)'],
            ['Scalability', 'Support 10× growth', 'User or data growth factor', '10M → 100M users'],
            ['Consistency', 'All users see the same order', 'Consistency model', 'Strong, eventual, or causal'],
            ['Security', 'Only owners can delete posts', 'AuthZ checks', 'OAuth2 + RBAC']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How non-functional requirements degrade as load increases, and the acceptable thresholds.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Meets SLO', 'All NFRs satisfied', 'Healthy'],
            ['2× Load', 'p95 +10–20%', 'Latency SLO still met', 'Good design'],
            ['5× Load', 'p95 +50–100%', 'Some NFRs borderline', 'Need tuning'],
            ['10× Load', 'p95 > 2× SLO', 'NFRs violated; degrade gracefully', 'Scale or redesign required'],
            ['>10× Load', 'Timeouts or errors', 'Availability SLO at risk', 'Urgent mitigation']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How requirements evolve as a product grows from prototype to global scale.',
        list: [
          '<strong>Stage 1: MVP (0–1K users)</strong> — Functional requirements dominate. Non-functional: basic availability, no SLA, manual recovery.',
          '<strong>Stage 2: Product-Market Fit (1K–10K users)</strong> — Add uptime targets (99%), page-load time targets (< 2 s), and daily backups.',
          '<strong>Stage 3: Growth (10K–1M users)</strong> — Latency p95, throughput RPS, and multi-region availability become explicit. Add monitoring.',
          '<strong>Stage 4: Scale (1M–100M users)</strong> — Fine-grained SLOs (p99.9), cost per request, durability, compliance, and GDPR/CCPA requirements.',
          '<strong>Stage 5: Global Platform (100M+ users)</strong> — Multi-tenancy, cross-border latency, regional failover, and multi-year capacity planning.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Where functional and non-functional requirements are most relevant by tier.',
        list: [
          '<strong>Client:</strong> Functional: UI/UX features, input validation. Non-functional: offline availability, first-contentful-paint (< 1 s).',
          '<strong>CDN:</strong> Functional: deliver static assets. Non-functional: cache hit rate (90%+), origin offload, global latency.',
          '<strong>API Gateway:</strong> Functional: route to correct service. Non-functional: rate limiting (e.g., 1000 req/s per key), auth latency (< 5 ms).',
          '<strong>Application:</strong> Functional: business logic, workflows. Non-functional: throughput, horizontal scaling, error rate (< 0.1%).',
          '<strong>Database:</strong> Functional: CRUD operations. Non-functional: write throughput, replication lag (< 1 s), durability.',
          '<strong>Queue:</strong> Functional: async task delivery. Non-functional: latency, throughput, at-least-once/exactly-once semantics.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing the right non-functional requirements to prioritize for different product types.',
        table: {
          headers: ['Product Type', 'Prioritize', 'Accept Trade-off', 'Why'],
          rows: [
            ['E-commerce checkout', 'Availability, consistency', 'Higher latency for commit', 'Lost revenue if checkout fails'],
            ['Social media feed', 'Latency, availability', 'Eventual consistency', 'Users tolerate stale posts'],
            ['Banking ledger', 'Consistency, durability', 'Higher latency, lower throughput', 'Incorrect balances are unacceptable'],
            ['Analytics dashboard', 'Throughput, cost', 'Latency (seconds OK)', 'Batch computation over fast queries'],
            ['Gaming / real-time', 'Latency, throughput', 'Strong consistency relaxed', 'Sub-100 ms matters more than perfect state'],
            ['AI chatbot', 'Latency, cost', 'Approximate answers', 'Users want fast responses; tokens are expensive']
          ]
        }
      }
    ],
    'back-of-the-envelope-estimation': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'A cheat sheet of numbers every system designer should know cold. These are order-of-magnitude approximations used for interviews.',
        table: {
          headers: ['Resource / Operation', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Round trip within same DC', '0.5 ms', '1 ms', '1 RTT ~ 500 μs'],
            ['Cross-region RTT', '50–100 ms', '200 ms', 'India–US ~ 250 ms'],
            ['Read from SSD', '0.1 ms', '0.5 ms', 'Random read'],
            ['Read from HDD', '10 ms', '20 ms', 'Spinning disk seek time'],
            ['Read from Redis', '0.2 ms', '1 ms', 'In-memory, local network'],
            ['Simple DB query', '1 ms', '10 ms', 'Indexed single-row lookup'],
            ['Complex DB query', '10 ms', '100 ms', 'Joins or full table scan'],
            ['1 MB object over 1 Gbps', '8 ms', '10 ms', 'Network transfer time'],
            ['Write to Kafka', '1 ms', '5 ms', 'Acknowledged write'],
            ['HTTP JSON parse', '0.1 ms', '1 ms', 'Small payload'],
            ['User-generated content per day', '100 B–1 KB', '10 KB (rich post)', 'Text vs image metadata'],
            ['Daily active users (DAU) to MAU ratio', '20–50%', '60–70% (addictive apps)', 'Used to estimate peak traffic']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Estimation accuracy as system load grows. Good estimations converge on actuals within an order of magnitude.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Quick napkin math', 'Within 2× of actual', 'Strong'],
            ['2× Load', 'Slightly complex', 'Within 5× of actual', 'Acceptable'],
            ['5× Load', 'Multiple components', 'Within 10× of actual', 'Need more data'],
            ['10× Load', 'Unknown unknowns', 'Order of magnitude only', 'Flag assumptions'],
            ['100× Load', 'Wild guess', 'Could be 100× off', 'Use benchmarks, not theory']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'A worked example: estimating storage for a Twitter-like service as it grows.',
        list: [
          '<strong>Stage 1: 10K DAU</strong> — 100 tweets/user/day = 1M tweets/day ≈ 1 GB/day text (1 KB each). 1 TB/year.',
          '<strong>Stage 2: 100K DAU</strong> — 10M tweets/day ≈ 10 GB/day. 3.6 TB/year. Need indexes for timeline reads.',
          '<strong>Stage 3: 1M DAU</strong> — 100M tweets/day ≈ 100 GB/day. 36 TB/year. Start sharding by user_id.',
          '<strong>Stage 4: 10M DAU</strong> — 1B tweets/day ≈ 1 TB/day. 365 TB/year. Media storage dominates (100× text). Use object storage.',
          '<strong>Stage 5: 100M DAU</strong> — 10B tweets/day ≈ 10 TB/day text + 1 PB/day media. Multi-region, cold storage, compression.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'What to estimate in each tier.',
        list: [
          '<strong>Requests:</strong> DAU × actions/day ÷ 86400 = peak RPS. Peak is typically 5× average.',
          '<strong>Bandwidth:</strong> RPS × payload size. Example: 10K RPS × 10 KB = 100 MB/s inbound, 1 GB/s outbound.',
          '<strong>Storage:</strong> Writes/day × retention × replication factor. Add 30% buffer for overhead.',
          '<strong>Memory:</strong> Hot data × replication. Redis node capacity: 25–50 GB per node is common.',
          '<strong>Compute:</strong> 1 CPU core ≈ 100–500 concurrent connections depending on workload.',
          '<strong>Network:</strong> Include 2× for cross-zone, 10× for cross-region traffic. Account for replication.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to estimate which metric first.',
        table: {
          headers: ['Starting Point', 'Estimate First', 'Then', 'Why'],
          rows: [
            ['Storage-heavy product', 'Storage per user/day', 'Read/write ratio, bandwidth', 'Storage usually dictates architecture'],
            ['Read-heavy product', 'Read QPS, cache hit rate', 'DB read replicas, CDN', 'Cache design dominates'],
            ['Write-heavy product', 'Write throughput, message rate', 'Sharding, queue partitioning', 'Write path must not bottleneck'],
            ['Real-time product', 'Latency budget', 'Per-hop latency, concurrency', 'Latency constraints are strict'],
            ['AI/LLM product', 'Token budget per request', 'GPU throughput, cost', 'Tokens are the scarce resource'],
            ['Global product', 'Traffic by region', 'Data locality, replication', 'Geography changes everything']
          ]
        }
      }
    ],
    'interview-framework': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'The 4S framework (Scope, Sketch, Scale, Solidify) with time budgets and expected depth.',
        table: {
          headers: ['Phase', 'Time Budget', 'Output', 'Key Metrics'],
          rows: [
            ['S1: Scope', '5–10 min', 'Requirements, assumptions, constraints', '3–5 functional, 3–5 non-functional requirements'],
            ['S2: Sketch', '10–15 min', 'High-level block diagram', '4–8 components, data flow arrows'],
            ['S3: Scale', '15–25 min', 'Deep dive on bottleneck', 'Throughput, latency, storage estimates'],
            ['S4: Solidify', '5–10 min', 'Failure modes, monitoring, future evolution', '3–5 failure scenarios, 2–3 monitoring signals']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How well the 4S framework holds up under time pressure and question complexity.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Standard)', 'Smooth flow', 'All 4 phases covered', 'Strong candidate'],
            ['2× Load', 'Slightly compressed', 'Skip some depth in S3 or S4', 'Still good with focus'],
            ['5× Load', 'Rushed', 'Jump to S3 without clear S2', 'Needs structure'],
            ['10× Load', 'Lost', 'No clear diagram, no estimates', 'No framework; likely reject']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Apply the 4S framework to the same question at different levels of depth.',
        list: [
          '<strong>Stage 1: Junior</strong> — S1: list features; S2: single-server diagram; S3: basic DB schema; S4: one failure mode.',
          '<strong>Stage 2: Mid</strong> — S1: functional + non-functional requirements; S2: load balancer + app servers + DB; S3: read replicas + cache; S4: retry and timeout.',
          '<strong>Stage 3: Senior</strong> — S1: quantitative requirements; S2: microservices + queue + CDN; S3: sharding + CAP theorem; S4: disaster recovery + monitoring.',
          '<strong>Stage 4: Staff</strong> — S1: multi-year roadmap; S2: multi-region architecture; S3: trade-off analysis of 3 designs; S4: chaos engineering and business continuity.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'What each phase should address per tier.',
        list: [
          '<strong>S1 Scope:</strong> Define which tiers exist, latency/availability targets, scale, and user behavior per tier.',
          '<strong>S2 Sketch:</strong> Draw all tiers (client, CDN, gateway, app, cache, DB, queue, object storage) and label data flows.',
          '<strong>S3 Scale:</strong> Pick the tier with the highest expected load or risk; do back-of-the-envelope math for it.',
          '<strong>S4 Solidify:</strong> List failure modes and observability for each tier. Mention alerts and runbooks.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to spend more time on each phase.',
        table: {
          headers: ['Prompt Signal', 'Spend More Time On', 'Skimp On', 'Why'],
          rows: [
            ['Large data volume', 'S3 Scale (storage, sharding)', 'S2 detail', 'Bottleneck is data'],
            ['Low latency required', 'S3 Scale (latency budget)', 'S4 breadth', 'Prove latency is achievable'],
            ['Ambiguous requirements', 'S1 Scope', 'S3 depth', 'Clarify first'],
            ['Well-known problem (e.g., URL shortener)', 'S3 Scale + S4 failure modes', 'S2 sketch', 'Interviewer expects depth, not basics'],
            ['AI/LLM product', 'S3 Scale (cost + tokens)', 'S2 generic services', 'Token economics dominate'],
            ['Global/multi-region', 'S3 Scale + S4 solidify', 'S1 basic features', 'Data locality and DR matter']
          ]
        }
      }
    ],
    'common-interview-mistakes': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Common mistakes and their impact on interview scores, measured by how they affect rubric dimensions.',
        table: {
          headers: ['Mistake', 'Rubric Impact', 'Frequency', 'How to Fix'],
          rows: [
            ['Jumping to design before requirements', 'S1 Scope: fail', 'Very common', 'Ask 3–5 clarifying questions first'],
            ['No numbers or estimates', 'S3 Scale: weak', 'Very common', 'Provide RPS, storage, latency, cost estimates'],
            ['Single point of failure', 'S4 Solidify: weak', 'Common', 'Mention redundancy, failover, replication'],
            ['Ignoring database scaling', 'S3 Scale: fail', 'Common', 'Discuss read replicas, sharding, indexing'],
            ['Over-engineering early', 'S2 Sketch: mediocre', 'Common', 'Start simple, then scale incrementally'],
            ['Not stating trade-offs', 'S3 Scale: weak', 'Very common', 'Always say “Pros: X, Cons: Y”'],
            ['No failure mode discussion', 'S4 Solidify: fail', 'Common', 'List 2–3 failure scenarios and recovery'],
            ['Ignoring monitoring', 'S4 Solidify: weak', 'Common', 'Mention metrics, logs, alerts, SLOs']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'How candidate performance degrades under increasing pressure from follow-up questions.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Confident answers', 'Clear rationale, numbers, alternatives', 'Strong'],
            ['2× Load', 'Slight hesitation', 'Still answers but less structured', 'Acceptable'],
            ['5× Load', 'Defensive or vague', 'Avoids numbers, says “it depends” too much', 'Concerning'],
            ['10× Load', 'Cannot answer', 'Does not understand the question', 'Critical gap'],
            ['Recovery after hint', 'Improves quickly', 'Incorporates feedback', 'Great signal']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'The most common failure pattern as interview difficulty increases.',
        list: [
          '<strong>Stage 1: Requirements</strong> — Mistake: not clarifying functional vs non-functional. Fix: ask about scale, latency, availability.',
          '<strong>Stage 2: High-level design</strong> — Mistake: drawing too many boxes without explaining trade-offs. Fix: justify each component.',
          '<strong>Stage 3: Deep dive</strong> — Mistake: picking wrong bottleneck. Fix: identify the hottest path and estimate its load.',
          '<strong>Stage 4: Trade-offs</strong> — Mistake: only discussing one approach. Fix: compare at least two alternatives.',
          '<strong>Stage 5: Failure modes</strong> — Mistake: generic “we restart the server.” Fix: discuss cascading failures, retries, circuit breakers, and observability.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Tier-specific mistakes to avoid.',
        list: [
          '<strong>Client / CDN:</strong> Forgetting cache invalidation, ignoring first-page load time.',
          '<strong>API Gateway:</strong> Not mentioning rate limiting, auth, or routing. Treating gateway as just a load balancer.',
          '<strong>Application:</strong> Assuming stateful sessions without shared session store.',
          '<strong>Cache:</strong> No cache invalidation strategy, ignoring cold-start problem.',
          '<strong>Database:</strong> No indexes, no sharding plan, no replication strategy.',
          '<strong>Queue:</strong> No dead-letter queue, no idempotency, no retry policy.',
          '<strong>Observability:</strong> No SLOs, no alerting, no tracing.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Prioritize which mistakes to avoid based on interview level.',
        table: {
          headers: ['Interview Level', 'Biggest Mistake to Avoid', 'Why It Matters', 'Quick Win'],
          rows: [
            ['Junior', 'Not asking clarifying questions', 'Shows lack of rigor', 'Ask 3 questions before designing'],
            ['Mid', 'No numbers or scaling', 'Suggests no production sense', 'Estimate RPS, storage, latency'],
            ['Senior', 'No trade-offs or failure modes', 'Fails to demonstrate depth', 'Compare 2 approaches, list 3 failures'],
            ['Staff+', 'No multi-region or cost thinking', 'Misses organizational impact', 'Discuss regions, DR, and cost']
          ]
        }
      }
    ]
  },
  module10: {
    'llm-gateway': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'LLM gateways centralize routing, rate limiting, caching, and observability for model providers. These numbers are drawn from OpenAI, Anthropic, Cloudflare AI Gateway, and production AI platforms.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Requests per Second', '10–1,000 req/s', '10K–100K req/s', 'Cloudflare AI Gateway handles millions of cached req/day'],
            ['Tokens per Second (per model)', '100–5,000 tok/s', '10K–50K tok/s', 'GPT-4: ~5K tok/s; GPT-4o: ~20K+ tok/s'],
            ['First Token Latency (TTFT)', '100 ms–1 s', '50–200 ms', 'Streaming hides full generation latency'],
            ['Inter-Token Latency', '10–100 ms', '1–10 ms', 'Smaller models + batching reduce time between tokens'],
            ['Cost per 1M Tokens', '$0.50–$30', '$0.10–$5 (cached)', 'OpenAI GPT-4o: $5/1M input, $15/1M output'],
            ['Cache Hit Rate', '10–30%', '40–60%', 'Semantic caching can cut costs by 30–50%'],
            ['Rate Limit per API Key', '100–10K req/min', '100K+ req/min', 'Enterprise agreements increase limits'],
            ['Fallback Detection Time', '1–5 s', '100 ms–1 s', 'Health checks + p99 latency monitors trigger fallback'],
            ['Prompt Injection Scan Latency', '1–10 ms', '< 1 ms', 'Regex/heuristic at edge; LLM-based scan: 100 ms+'],
            ['Cost Attribution Granularity', 'Per request', 'Per token / per user', 'Tag every call with user_id, feature, model for chargeback']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'LLM gateway behavior as AI traffic grows. The main risks are cost explosion, provider rate limits, and tail latency.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Normal TTFT', 'All requests routed to primary provider', 'Healthy; token budget tracked per key'],
            ['2× Load', 'TTFT + 20–50%', 'Rate limits begin to throttle; retries increase', 'Need retry budget and fallback model'],
            ['5× Load', 'TTFT + 50–200%', 'Provider quotas hit; queue builds', 'Circuit breaker to fallback provider essential'],
            ['10× Load', '10 s+ or 429s', 'Primary provider rejects traffic', 'Gateway must shed load to alternate region/model'],
            ['Burst (viral feature)', 'Timeouts then recovery', 'Token spend spikes 10×', 'Pre-warmed fallback + spend limits prevent bill shock'],
            ['Provider Outage', '< 100 ms fallback', 'Traffic auto-routes to backup', 'Multi-provider resilience is core value of gateway']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How an LLM gateway evolves from a prototype to a global AI platform:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Direct calls to OpenAI/Anthropic from application. No gateway. Simple API key in env var. Manual retry logic.',
          '<strong>Stage 2: 1K–10K users</strong> — Thin proxy (NGINX/Envoy) adds retries, timeouts, and logging. Single provider. Token usage logged per day.',
          '<strong>Stage 3: 10K–100K users</strong> — Dedicated LLM gateway service. Per-user rate limits. Request/response logging. Semantic cache (Redis). First fallback provider.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-provider routing: OpenAI, Anthropic, Azure OpenAI. Latency-based selection. Cost tracking per feature. Prompt injection filter.',
          '<strong>Stage 5: 1M–10M users</strong> — Global gateway with edge caching. Model routing based on quality, cost, latency. A/B testing between models. Streaming optimization.',
          '<strong>Stage 6: 10M+ users</strong> — Autonomous gateway: ML predicts best model per prompt. Dynamic quota negotiation with providers. Private model endpoints. Sub-50 ms fallback globally.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'LLM gateway responsibilities span the full request path from client to model provider.',
        list: [
          '<strong>Client Tier:</strong> SDK sends prompts with metadata (user_id, feature, desired quality). Streaming requested for long outputs. Client-side retry with exponential backoff.',
          '<strong>CDN / Edge Tier:</strong> Cloudflare Workers or AWS Lambda@Edge handle simple caching and geo-routing. Static prompt templates cached at edge.',
          '<strong>Gateway Tier:</strong> Core proxy (Envoy/Kong/custom) enforces auth, rate limits, retries, circuit breakers. Token counting. Request validation. Provider health checks.',
          '<strong>Cache Tier:</strong> Redis for exact-match semantic caching. Vector DB for similarity cache. Embedding model cache for repeated prompts. 30–60% cost reduction possible.',
          '<strong>Observability Tier:</strong> Per-request logs: model, tokens, latency, cost. Prometheus/Grafana dashboards. Alert on p99 latency and token spend anomalies.',
          '<strong>Provider Tier:</strong> Multiple model providers (OpenAI, Anthropic, Cohere, Azure, self-hosted). Each has distinct quotas, latency, and pricing.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Gateway routing and policy decisions for production AI systems:',
        table: {
          headers: ['Scenario', 'Routing Strategy', 'Cache Strategy', 'Fallback', 'Example'],
          rows: [
            ['High-value user query', 'Best-quality model', 'Semantic cache', 'Next-best model', 'Customer support agent'],
            ['Low-latency chat', 'Fastest model (GPT-4o-mini)', 'Exact cache', 'Smaller model', 'Live chat autocomplete'],
            ['Batch document processing', 'Cheapest model per token', 'None (unique docs)', 'Queue for retry', 'Nightly report generation'],
            ['Code generation', 'Strong coding model', 'Embedding cache', 'Open-source model', 'GitHub Copilot-style feature'],
            ['Creative writing', 'Quality-first model', 'Low cacheability', 'Different creative model', 'Marketing copy generator'],
            ['Rate limit approaching', 'Round-robin providers', 'Aggressive cache', 'Any available provider', 'High-traffic consumer app'],
            ['Sensitive data', 'Self-hosted / private endpoint', 'No external cache', 'On-prem fallback', 'Healthcare/legal AI']
          ]
        }
      }
    ],
    'semantic-caching': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Semantic caching stores embeddings of previous prompts and returns cached responses for similar queries. Metrics are based on Redis, vector databases, and embedding models in production.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Embedding Latency', '5–50 ms', '1–5 ms', 'OpenAI text-embedding-3-small: fast; local models: sub-ms'],
            ['Embedding Dimension', '384–1,536', '256–768', 'OpenAI: 1,536; sentence-transformers/all-MiniLM: 384'],
            ['Cache Lookup Latency', '5–20 ms', '1–5 ms', 'Vector DB approximate nearest neighbor search'],
            ['Similarity Threshold', '0.85–0.95 cosine', '0.90–0.98', 'Higher threshold = fewer false cache hits'],
            ['Cache Hit Rate', '20–40%', '50–70%', 'Customer support FAQs often hit 60%+'],
            ['Cost Savings', '10–30%', '40–60%', 'Avoids repeated LLM calls for similar prompts'],
            ['Storage per Cached Response', '1–10 KB', '100 bytes–1 KB', 'Embedding vector + response metadata'],
            ['Index Size (1M entries)', '1–5 GB', '500 MB–2 GB', 'Depends on embedding dimension and quantization'],
            ['False Positive Rate', '1–5%', '0.1–1%', 'Tune threshold; add exact-match guard'],
            ['TTL for Cache Entries', '1–24 hours', '5–60 minutes', 'Short for dynamic content, long for static FAQs']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Semantic cache behavior as query volume and similarity pressure increase:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Cache hit: 10 ms; miss: 500 ms', '30% hit rate', 'Embedding + vector search overhead is small'],
            ['2× Load', 'Hit: 10 ms; miss: 600 ms', '35% hit rate', 'More diverse queries; hit rate stable'],
            ['5× Load', 'Hit: 15 ms; miss: 1 s', '40% hit rate', 'Vector DB query latency rises; consider replicas'],
            ['10× Load', 'Hit: 20–50 ms; miss: 2 s+', '45% hit rate', 'Vector DB becomes hotspot; shard or use approximate index'],
            ['Repeated Prompt Attack', 'All hits', '99% hit rate', 'Potential cache pollution; rate limit identical prompts'],
            ['Threshold Too Low', 'Fast but wrong answers', 'High hit rate, low accuracy', 'Users get stale or irrelevant cached responses']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Semantic cache adoption from simple to production scale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No semantic cache. Exact string match only. Simple Redis key for identical prompts.',
          '<strong>Stage 2: 1K–10K users</strong> — Local embeddings + in-memory approximate cache. FAISS index. 100 MB memory. Single instance.',
          '<strong>Stage 3: 10K–100K users</strong> — Redis + vector DB (Pinecone/Weaviate/Milvus). Dedicated embedding service. Similarity threshold 0.90. 1-hour TTL.',
          '<strong>Stage 4: 100K–1M users</strong> — Async embedding pipeline: cache miss triggers background embedding + vector insert. Pre-computed embeddings for top 10K prompts. Multi-region vector DB.',
          '<strong>Stage 5: 1M–10M users</strong> — Hierarchical cache: exact match (Redis) → semantic match (vector DB) → model call. Per-user and per-feature cache isolation.',
          '<strong>Stage 6: 10M+ users</strong> — Edge semantic cache: embeddings computed at CDN edge. Quantized vectors (int8) reduce memory 4×. Adaptive threshold based on content type.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Semantic caching spans embedding, vector storage, and cache policy layers.',
        list: [
          '<strong>Client Tier:</strong> Prompt normalized (strip whitespace, lowercasing optional). Optional client-side exact cache for identical queries.',
          '<strong>Gateway Tier:</strong> Checks exact cache first (Redis). If miss, computes/retrieves embedding and queries vector DB. Applies similarity threshold.',
          '<strong>Embedding Tier:</strong> Embedding model service (OpenAI, Cohere, local ONNX). Caches embeddings for repeated prompts. Latency target: <20 ms.',
          '<strong>Vector DB Tier:</strong> Pinecone, Weaviate, Milvus, pgvector, Redis Vector Similarity Search. HNSW index for approximate search. Sharded by tenant or content domain.',
          '<strong>Cache Policy Tier:</strong> TTL, eviction (LRU/LFU), similarity threshold per use case. Invalidation on knowledge base updates.',
          '<strong>Observability Tier:</strong> Track hit rate, false positive rate, embedding latency, vector DB latency. Alert on accuracy degradation.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When and how to deploy semantic caching:',
        table: {
          headers: ['Scenario', 'Cacheability', 'Threshold', 'TTL', 'Example'],
          rows: [
            ['FAQ / customer support', 'Very high', '0.92', '24 hours', 'Chatbot answers repeated questions'],
            ['Code generation', 'Medium', '0.88', '1 hour', 'Similar coding prompts share solutions'],
            ['Creative writing', 'Low', '0.95', '15 minutes', 'Avoid stale or repetitive copy'],
            ['Data extraction', 'High', '0.90', '6 hours', 'Extracting fields from similar documents'],
            ['Real-time data queries', 'None', 'N/A', 'N/A', 'Stock prices, weather — do not cache'],
            ['Multi-turn conversations', 'Medium', '0.85', 'Session TTL', 'Cache within conversation context'],
            ['Personalized recommendations', 'Low', '0.95', '5 minutes', 'User-specific outputs change quickly']
          ]
        }
      }
    ],
    'rag-pipeline': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Retrieval-Augmented Generation pipelines combine document retrieval with LLM generation. Metrics reflect OpenAI, LangChain, LlamaIndex, and vector DB production deployments.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Chunk Size', '256–1,000 tokens', '384–512 tokens', 'Smaller chunks improve relevance; larger preserve context'],
            ['Chunks per Document', '10–100', '100–1,000', '10K-token doc → ~20 chunks of 512 tokens'],
            ['Embedding Latency (batch)', '50–500 ms', '10–50 ms', 'Batched embedding reduces per-chunk latency'],
            ['Vector Search Latency', '10–100 ms', '1–10 ms', 'HNSW approximate search; exact search slower'],
            ['Retrieved Chunks (top-k)', '3–10', '5–20', 'More chunks = more context but higher cost'],
            ['Reranking Latency', '20–200 ms', '5–50 ms', 'Cross-encoder rerankers improve relevance 10–20%'],
            ['Generation Latency', '500 ms–5 s', '100 ms–1 s', 'Depends on model and output token count'],
            ['End-to-End RAG Latency', '1–6 s', '200 ms–1 s', 'Optimization: cache embeddings + fast vector DB'],
            ['Retrieval Accuracy (hit@5)', '60–80%', '85–95%', 'Reranking + better chunking improves accuracy'],
            ['Cost per Query', '$0.001–$0.05', '$0.0001–$0.01', 'Embedding + LLM generation + storage']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'RAG pipeline behavior as document volume and query rate grow:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–3 s', 'Top-k retrieval + generation succeeds', 'Vector DB and model capacity comfortable'],
            ['2× Load', '2–5 s', 'Embedding queue builds slightly', 'Add embedding workers or batch larger'],
            ['5× Load', '5–10 s', 'Vector DB CPU high; retrieval slows', 'Scale vector DB replicas; optimize HNSW params'],
            ['10× Load', '10–30 s', 'Retriever fails; LLM queue overflows', 'Separate retrieval from generation; add queues'],
            ['Document Ingestion Burst', 'Query latency spikes', 'Embeddings backlog', 'Decouple ingestion from query path'],
            ['Stale Index', 'Fast retrieval, wrong answers', 'Hallucination risk', 'Refresh index on source doc changes; versioning']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'RAG pipeline evolution from proof-of-concept to enterprise search:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Load documents manually. Embed with OpenAI API. Store in local FAISS. Query with Python script.',
          '<strong>Stage 2: 1K–10K users</strong> — Persistent vector DB (Pinecone/Weaviate). Basic chunking (fixed size). Simple retrieval + GPT-4 generation.',
          '<strong>Stage 3: 10K–100K users</strong> — Async ingestion pipeline: S3 → chunker → embedding worker → vector DB. Semantic cache. Reranker (Cohere/ColBERT).',
          '<strong>Stage 4: 100K–1M users</strong> — Hybrid search: vector + keyword (BM25). Multi-tenant indices. Document versioning. Query rewriting for better retrieval.',
          '<strong>Stage 5: 1M–10M users</strong> — Distributed vector DB (Milvus cluster, Elasticsearch vector). Multi-modal RAG (images, tables). Feedback loop improves ranking.',
          '<strong>Stage 6: 10M+ users</strong> — Real-time RAG: CDC from source systems to vector index in seconds. Personalized retrieval per user. Multi-hop retrieval for complex queries.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'RAG pipeline components from document ingestion to answer generation.',
        list: [
          '<strong>Document Store Tier:</strong> S3, GCS, SharePoint, Confluence. Versioned documents. Trigger ingestion on update. PDF parsing, OCR for scanned docs.',
          '<strong>Chunking Tier:</strong> Fixed-size, semantic, or hierarchical chunking. Overlap 10–20% between chunks. Preserve section headers and metadata.',
          '<strong>Embedding Tier:</strong> Batch embedding service. Queue-based workers. Cache embeddings for unchanged chunks. OpenAI/Cohere/local models.',
          '<strong>Vector DB Tier:</strong> Stores chunk embeddings + metadata. Supports filtering (by source, date, tenant). HNSW index tuned for recall vs latency.',
          '<strong>Retrieval Tier:</strong> Hybrid search (dense + sparse), reranking, query expansion. Returns top-k chunks with scores.',
          '<strong>Generation Tier:</strong> LLM receives query + retrieved context. Prompt includes citations. Streaming response to user.',
          '<strong>Feedback Tier:</strong> Users thumbs up/down. Logs feed reranker fine-tuning. Detect hallucinations via source attribution.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'RAG design decisions by use case:',
        table: {
          headers: ['Scenario', 'Chunking', 'Retriever', 'Reranker', 'Model'],
          rows: [
            ['Internal knowledge base', 'Semantic / 512 tokens', 'Vector + BM25', 'Cross-encoder', 'GPT-4 / Claude'],
            ['Customer support', 'Paragraph / 256 tokens', 'Vector search', 'Lightweight reranker', 'GPT-4o-mini'],
            ['Legal document analysis', 'Section-aware / 1K tokens', 'Hybrid search', 'Heavy reranker', 'Claude 3.5 Sonnet'],
            ['Code documentation RAG', 'Function-level', 'Vector + keyword', 'No reranker', 'Code-specialized model'],
            ['Medical Q&A', 'Small chunks / 256 tokens', 'Vector + filters', 'Clinical reranker', 'MedPaLM / fine-tuned model'],
            ['Real-time news', 'Sentence / 128 tokens', 'Vector + time filter', 'None', 'Fast model'],
            ['Multi-lingual docs', 'Language-aware', 'Multilingual embeddings', 'Multilingual reranker', 'Multilingual model']
          ]
        }
      }
    ],
    'vector-db-sharding': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Vector databases need sharding to scale beyond single-node memory and query limits. Metrics are based on Pinecone, Milvus, Weaviate, pgvector, and Elasticsearch vector search.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Vectors per Node (RAM)', '1M–10M', '10M–100M', 'Depends on dimension and quantization; 768-dim float32 ~3 KB/vector'],
            ['Vector Dimension', '384–1,536', '256–2,048', 'OpenAI: 1,536; CLIP: 512; custom models vary'],
            ['Query Latency (single node)', '10–100 ms', '1–10 ms', 'HNSW index; brute force is 10–100× slower'],
            ['Query Latency (cluster)', '20–200 ms', '5–20 ms', 'Fan-out to shards + aggregation adds overhead'],
            ['Recall@10 (HNSW)', '85–95%', '95–99%', 'Trade off recall vs latency via ef/efConstruction'],
            ['Ingestion Rate', '1K–10K vectors/s', '100K+ vectors/s', 'Milvus cluster: 100K+ vectors/sec'],
            ['Shard Size Recommendation', '1–10 GB', '10–50 GB', 'Smaller shards = faster recovery, more overhead'],
            ['Replication Factor', '1–2', '3–5', 'Higher for query-heavy; lower for cost-sensitive'],
            ['Index Build Time', 'Minutes–hours', 'Seconds–minutes', 'HNSW incremental; IVF requires full rebuild'],
            ['Storage with Quantization', '1× (float32)', '0.25× (int8/binary)', 'Binary vectors: 1/32 the size of float32']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Vector DB behavior as data and query volume scale:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '10–50 ms', 'Single node handles queries', 'High recall, low latency'],
            ['2× Data Volume', '50–100 ms', 'Node memory pressure; query slows', 'Add shards or enable quantization'],
            ['5× Query Load', '100–300 ms', 'CPU saturated; queueing visible', 'Scale query replicas; add load balancer'],
            ['10× Mixed Load', '500 ms–2 s', 'Ingestion starves queries', 'Separate ingest and query paths'],
            ['Cross-Shard Query', '20–100 ms + fan-out', 'Aggregation overhead', 'Shard by tenant/content domain to limit fan-out'],
            ['Node Failure', 'Degraded recall or timeout', 'Replicas maintain availability', 'Replication factor determines resilience']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Vector DB scaling journey from a single index to a global vector platform:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single-node vector DB or FAISS in memory. No sharding. Few thousand vectors.',
          '<strong>Stage 2: 1K–10K users</strong> — Managed vector DB (Pinecone serverless, Weaviate Cloud). Auto-sharding behind the scenes. Still single tenant.',
          '<strong>Stage 3: 10K–100K users</strong> — Self-hosted vector DB cluster (Milvus). Shard by tenant or content type. HNSW index. 10M+ vectors.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-collection architecture. Separate read replicas. Quantization (PQ/SCaNN) for memory savings.',
          '<strong>Stage 5: 1M–10M users</strong> — Global vector DB with region-local shards. Cross-region replication for low-latency queries. Tiered storage (hot/cold vectors).',
          '<strong>Stage 6: 10M+ users</strong> — Custom vector search infrastructure. Approximate indexes tuned per use case. GPU acceleration for brute-force search. Federated queries across 100+ shards.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Vector DB sharding spans indexing, storage, and query routing layers.',
        list: [
          '<strong>Client Tier:</strong> Embedding client sends vectors + metadata. Queries include filters (tenant, date, category).',
          '<strong>Gateway Tier:</strong> Routes queries to correct shard(s). Fan-out for global queries. Aggregates top-k results from shards.',
          '<strong>Index Tier:</strong> HNSW, IVF, or brute-force index. Tuned for recall/latency. Incremental index updates during ingestion.',
          '<strong>Storage Tier:</strong> Raw vectors + metadata + index. Hot storage (SSD) for active data; cold storage (S3) for archives.',
          '<strong>Compute Tier:</strong> Query executors per shard. Ingestion workers. GPU nodes for batch search or reindexing.',
          '<strong>Replication Tier:</strong> Leader-follower or multi-leader replication. Query replicas handle read traffic; ingest goes to leader.',
          '<strong>Coordinator Tier:</strong> Metadata service tracks shard map, node health, schema. etcd/ZooKeeper for consensus.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Vector DB sharding strategy by requirement:',
        table: {
          headers: ['Scenario', 'Sharding Key', 'Index Type', 'Replication', 'Tool Example'],
          rows: [
            ['Multi-tenant SaaS', 'tenant_id', 'HNSW per tenant', '2×', 'Pinecone, Weaviate'],
            ['Single large corpus', 'content hash / range', 'HNSW / IVF', '3×', 'Milvus, Elasticsearch'],
            ['Real-time updates', 'time bucket', 'HNSW incremental', '2×', 'pgvector + partitioning'],
            ['Massive billion-scale', 'vector partition (LSH)', 'IVF with PQ', '1–2×', 'Faiss cluster, ScaNN'],
            ['Low-latency serving', 'geo-region', 'HNSW', '3× regional', 'Global Pinecone'],
            ['Cost-sensitive archive', 'age of data', 'Brute-force / no index', '1×', 'S3 + lambda search'],
            ['Hybrid text + vector', 'document ID', 'Inverted + HNSW', '2×', 'Elasticsearch, OpenSearch']
          ]
        }
      }
    ],
    'gpu-serving': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'GPU serving for LLMs and other AI models requires careful batching, memory management, and scheduling. Metrics are based on NVIDIA A100/H100/T4 and serving stacks like vLLM, TensorRT-LLM, and Triton.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['GPU Memory (VRAM)', '16 GB (T4)', '80 GB (H100)', 'A100: 40/80 GB; H100: 80 GB'],
            ['FP16 Throughput (A100)', '312 TFLOPS', '989 TFLOPS (H100)', 'H100 SXM: ~2× A100 for inference'],
            ['Batch Size', '1–8', '32–128', 'Larger batches improve throughput but increase latency'],
            ['Requests per GPU/sec', '1–10 req/s', '50–200 req/s', 'Depends on model size and sequence length'],
            ['Tokens per GPU/sec', '500–5,000 tok/s', '10K–50K tok/s', 'vLLM on H100: 20K+ tok/s for Llama 70B'],
            ['VRAM per 1B Params (FP16)', '2 GB', '1 GB (quantized)', 'INT8 quantization halves memory; 4-bit ~0.5 GB/B'],
            ['KV Cache Memory', '10–100 MB', '1–10 GB', 'Grows with batch size × sequence length'],
            ['GPU Utilization Target', '50–70%', '80–95%', 'Higher util = better ROI but latency risk'],
            ['Cold Start Time', '30–120 s', '5–30 s', 'Model loading from storage to GPU'],
            ['Cost per GPU/hour', '$1–$3 (T4)', '$4–$8 (A100)', 'Cloud spot/preemptible: 50–70% cheaper']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'GPU serving behavior as request concurrency grows:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Low concurrency)', 'Fast, low batch', 'GPU util 20–40%', 'Efficient per-request but poor GPU ROI'],
            ['2× Load', 'Slightly higher', 'GPU util 50–70%', 'Batching begins to improve throughput'],
            ['5× Load', 'Latency doubles', 'GPU util 80–90%', 'Good throughput; monitor queue depth'],
            ['10× Load', 'Latency 3–5×', 'GPU util 95–100%', 'Queueing dominates; need more GPUs or bigger batch'],
            ['Batch Too Large', 'Timeout / OOM', 'VRAM exhausted', 'KV cache exceeds GPU memory; reduce batch or sequence length'],
            ['Cold Start', '30–120 s', 'First request slow', 'Keep warm instances for latency-sensitive traffic']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'GPU serving evolution from a single model instance to a large inference fleet:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single GPU instance (T4). Run model directly (PyTorch/Transformers). No batching optimization.',
          '<strong>Stage 2: 1K–10K users</strong> — Use vLLM or TensorRT-LLM. PagedAttention reduces KV cache waste. Single A100. Dynamic batching.',
          '<strong>Stage 3: 10K–100K users</strong> — Multi-GPU single node (2–8 A100s). Tensor parallelism for large models (70B+). Load balancer across replicas.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-node GPU cluster. Pipeline parallelism + tensor parallelism. Autoscaling based on queue depth. Spot instances for batch jobs.',
          '<strong>Stage 5: 1M–10M users</strong> — Model-specific GPU pools: small models on T4/L4, large on A100/H100. Continuous batching. Speculative decoding for latency.',
          '<strong>Stage 6: 10M+ users</strong> — Global inference network. Edge GPU inference for small models. Central H100 clusters for large models. Request routing optimizes cost/latency.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'GPU serving infrastructure from request routing to hardware.',
        list: [
          '<strong>Client / Gateway Tier:</strong> Requests queued by model, priority, and SLA. Token spend tracked. Streaming responses.',
          '<strong>Scheduler Tier:</strong> Batching engine (vLLM, TensorRT-LLM, Triton) groups requests. Continuous batching maximizes GPU utilization.',
          '<strong>Model Runtime Tier:</strong> Optimized inference engine. Quantization (INT8, FP8, AWQ, GPTQ). KV cache management.',
          '<strong>GPU Tier:</strong> NVIDIA A100/H100/L4/T4. Multi-GPU nodes via NVLink/InfiniBand. GPU drivers + CUDA runtime.',
          '<strong>Storage Tier:</strong> Model weights stored on fast local NVMe or parallel filesystem. Warm cache avoids cold start.',
          '<strong>Scaling Tier:</strong> Kubernetes with GPU operator. Cluster autoscaler provisions GPU nodes. Spot/preemptible for cost.',
          '<strong>Observability Tier:</strong> GPU util, memory, temperature, batch size, queue length, token throughput. Alert on OOM and thermal throttling.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'GPU serving configuration by workload:',
        table: {
          headers: ['Scenario', 'GPU Type', 'Batching', 'Optimization', 'Example'],
          rows: [
            ['Small model (< 10B)', 'T4 / L4', 'Dynamic', 'INT8 quantization', 'Embedding model serving'],
            ['Medium model (10–70B)', 'A100 40/80 GB', 'Continuous', 'Tensor parallelism', 'Llama 2 70B chat'],
            ['Large model (> 70B)', 'H100 cluster', 'Continuous + pipeline', 'TP + PP + FP8', 'GPT-4 class model'],
            ['Low-latency real-time', 'A100/H100', 'Small batches', 'Speculative decoding', 'Voice assistant'],
            ['High-throughput batch', 'Spot A100s', 'Large batches', 'Quantization', 'Nightly summarization'],
            ['Multi-modal model', 'H100 / A100', 'Dynamic', 'Multimodal batching', 'Image + text generation'],
            ['Cost-sensitive dev/test', 'T4 / CPU fallback', 'None / small', 'Smaller model', 'Internal prototype']
          ]
        }
      }
    ],
    'model-routing': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Model routing selects the best model/provider per request based on latency, cost, quality, and availability. Numbers reflect multi-provider AI platforms and model routers like Not Diamond, Martian, and OpenRouter.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Routing Decision Latency', '1–10 ms', '< 1 ms', 'Simple rule routing is fast; ML routing adds 5–50 ms'],
            ['Provider Count', '2–3', '10–20+', 'OpenAI, Anthropic, Azure, Cohere, local models, open-source'],
            ['Models Available', '5–10', '50–100+', 'Includes fine-tuned variants and quantized versions'],
            ['Cost Spread per 1M Tokens', '$0.10–$30', '$0.01–$50', 'Small local model vs frontier model'],
            ['Latency Spread', '100 ms–5 s', '50 ms–10 s', 'Depends on model size and output length'],
            ['Quality Spread (benchmark)', '40–90%', '30–95%', 'GPT-4 vs small model on complex tasks'],
            ['Fallback Trigger Time', '1–5 s', '100 ms–1 s', 'Latency SLO breach or error rate threshold'],
            ['Routing Accuracy Improvement', '5–15%', '20–30%', 'Correct router improves quality at same cost'],
            ['Cost Savings from Routing', '10–30%', '40–60%', 'Route easy queries to cheap models'],
            ['Multi-Region Latency Delta', '50–200 ms', '20–50 ms', 'Route to nearest healthy provider region']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Model routing behavior under varying provider health and traffic:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Healthy)', 'Optimal latency', 'Router picks best provider', 'Quality and cost balanced'],
            ['2× Load', 'Slight increase', 'Some providers throttle; router shifts traffic', 'Distribute load across providers'],
            ['5× Load', 'Latency + 50–100%', 'Fallbacks activate frequently', 'Cost may rise; monitor spend per provider'],
            ['10× Load', 'Timeouts on primary', 'Router drains unhealthy providers', 'Pre-negotiated quota limits hit'],
            ['Provider Outage', '< 100 ms failover', 'Traffic black-holes failing provider', 'Health checks + circuit breaker essential'],
            ['Bad Router Decisions', 'Low cost, wrong answers', 'User complaints rise', 'Continuous evaluation loop needed']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Model routing evolution from simple fallback to intelligent AI traffic management:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single model/provider. No routing. Hardcoded model name.',
          '<strong>Stage 2: 1K–10K users</strong> — Primary + fallback provider. Simple rule: if OpenAI fails, call Anthropic.',
          '<strong>Stage 3: 10K–100K users</strong> — Latency-based and cost-based routing. Per-endpoint model mapping. Retry budgets per provider.',
          '<strong>Stage 4: 100K–1M users</strong> — Quality-aware routing: small model for simple prompts, large for complex. Prompt classification (heuristic or small model).',
          '<strong>Stage 5: 1M–10M users</strong> — ML-based router trained on prompt features and outcome quality. Multi-objective optimization (latency, cost, quality). A/B tests between routing policies.',
          '<strong>Stage 6: 10M+ users</strong> — Real-time routing marketplace. Providers bid for traffic. Automatic contract negotiation. Global load balancing with carbon/energy awareness.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Model routing spans policy, health monitoring, and provider abstraction layers.',
        list: [
          '<strong>Policy Tier:</strong> Rules define which models/providers are eligible per use case. Constraints: max latency, max cost, min quality, data residency.',
          '<strong>Classification Tier:</strong> Lightweight model or heuristic classifies prompt complexity, intent, sensitivity. Determines candidate pool.',
          '<strong>Health Tier:</strong> Monitors provider latency, error rate, quota usage. Circuit breakers mark providers unhealthy.',
          '<strong>Scoring Tier:</strong> Scores candidates on latency, cost, quality. Weights adjustable per request or customer tier.',
          '<strong>Execution Tier:</strong> Sends request to selected provider. Streams response. Handles retries and fallback.',
          '<strong>Feedback Tier:</strong> Logs actual latency, cost, quality. Retrains router. Tracks provider SLA compliance.',
          '<strong>Billing Tier:</strong> Aggregates spend by provider, model, customer. Reconciliation for multi-provider invoices.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Model routing strategy by objective:',
        table: {
          headers: ['Objective', 'Routing Signal', 'Preferred Model', 'Fallback', 'Trade-off'],
          rows: [
            ['Minimize latency', 'TTFT / token latency', 'Fastest available', 'Next fastest', 'May sacrifice quality'],
            ['Minimize cost', 'Price per token', 'Cheapest passing quality gate', 'Next cheapest', 'May sacrifice quality'],
            ['Maximize quality', 'Benchmark score / evaluator', 'Best model', 'Second best', 'Higher cost and latency'],
            ['Ensure availability', 'Provider health', 'Healthy provider', 'Any healthy', 'Cost/quality fluctuate'],
            ['Data privacy', 'Residency / contract', 'Approved provider/self-hosted', 'On-prem', 'Limited model choice'],
            ['Balance all three', 'Multi-objective score', 'Pareto-optimal model', 'Next on frontier', 'Requires evaluation framework'],
            ['Experimentation', 'Random or bandit', 'Test model', 'Production model', 'Controlled quality risk']
          ]
        }
      }
    ]
  },
  module13: {
    'proxies': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Proxies sit between clients and services to add routing, security, caching, and observability. Metrics are based on NGINX, Envoy, HAProxy, Squid, and cloud proxy services.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Layer 4 Throughput', '1–10 Gbps', '100+ Gbps', 'Kernel-bypass proxies (DPDK) reach Tbps'],
            ['Layer 7 Requests/sec', '10K–100K', '1M–10M+', 'Envoy at Lyft: 2M+ req/s per cluster'],
            ['Connection Count', '10K–100K', '1M–10M', 'AWS NLB: millions of concurrent connections'],
            ['Proxy Latency (L4)', '< 1 ms', '< 0.1 ms', 'DPDK/kernel bypass sub-microsecond'],
            ['Proxy Latency (L7)', '1–5 ms', '0.5–2 ms', 'TLS termination + routing adds overhead'],
            ['Cache Hit Rate (forward proxy)', '20–50%', '60–80%', 'Squid/Cloudflare caching static content'],
            ['SSL Handshakes/sec', '1K–10K', '100K+', 'Hardware SSL offload: 200K+ handshakes/s'],
            ['Health Check Interval', '5–30 s', '1–5 s', 'Envoy defaults 5 s; faster = more control plane load'],
            ['Backend Pool Size', '2–10', '10–1,000', 'AWS ALB: up to 100 targets per target group'],
            ['Request Size Limit (L7)', '1–10 MB', '100 MB+', 'Large uploads need streaming or chunked']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Proxy behavior as traffic scales and backend health varies:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '1–5 ms overhead', 'Even distribution', 'Round-robin or least-connections optimal'],
            ['2× Load', '2–10 ms overhead', 'Some backends at 70%', 'Weighted routing helps'],
            ['5× Load', '5–20 ms overhead', 'Backends near saturation', 'Add backends or cache more'],
            ['10× Load', '20–100 ms overhead', 'Proxy queues requests', 'Proxy itself may need scaling'],
            ['Backend Failure', '< 100 ms failover', 'Requests routed to healthy backends', 'Health checks + circuit breaker'],
            ['DDoS Traffic', 'Edge rejection', '99%+ dropped at proxy/WAF', 'Cloudflare proxies absorb 70M req/s attacks']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Proxy adoption from single server to global architecture:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No proxy. Client connects directly to app server. Simple but no flexibility.',
          '<strong>Stage 2: 1K–10K users</strong> — Reverse proxy (NGINX) adds SSL termination and load balancing to 2–3 backends.',
          '<strong>Stage 3: 10K–100K users</strong> — Dedicated proxy layer (Envoy/HAProxy). Path-based routing. Connection pooling. Rate limiting.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-AZ proxy deployment. Anycast routing. WAF integration. Forward proxy for outbound traffic.',
          '<strong>Stage 5: 1M–10M users</strong> — Service mesh (Istio/Linkerd) with per-pod Envoy sidecars. mTLS, traffic splitting, retries.',
          '<strong>Stage 6: 10M+ users</strong> — Global edge proxy network (Cloudflare, Fastly). Compute at edge. Central control plane manages routing policies worldwide.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Proxy responsibilities across the infrastructure stack.',
        list: [
          '<strong>Client Tier:</strong> Browser/mobile connects to proxy endpoint. May use forward proxy for corporate/policy control.',
          '<strong>Edge Tier:</strong> CDN/edge proxy (Cloudflare, AWS CloudFront) caches content and blocks attacks close to users.',
          '<strong>Gateway Tier:</strong> Reverse proxy/API gateway handles SSL termination, auth, rate limiting, routing. NGINX, Envoy, Kong.',
          '<strong>Service Mesh Tier:</strong> Sidecar proxies provide mTLS, load balancing, retries, circuit breakers between microservices.',
          '<strong>Outbound Tier:</strong> Forward proxy controls egress traffic. URL filtering, data loss prevention, egress logging.',
          '<strong>Observability Tier:</strong> Access logs, metrics, distributed tracing. Proxy is ideal point for request telemetry.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Proxy selection by use case:',
        table: {
          headers: ['Scenario', 'Proxy Type', 'Tool', 'Key Feature', 'Example'],
          rows: [
            ['Static content + DDoS protection', 'Reverse proxy / CDN', 'Cloudflare, Fastly', 'Edge caching and WAF', 'Public website'],
            ['Microservices ingress', 'Reverse proxy / API gateway', 'Envoy, Kong, NGINX', 'Path routing, rate limiting', 'Kubernetes ingress'],
            ['Service-to-service calls', 'Sidecar proxy', 'Istio/Envoy, Linkerd', 'mTLS, traffic management', 'Service mesh'],
            ['Corporate egress control', 'Forward proxy', 'Squid, Zscaler', 'URL filtering, DLP', 'Enterprise network'],
            ['High-frequency trading API', 'L4 proxy', 'DPDK-based', 'Sub-microsecond latency', 'Financial exchange'],
            ['Database connection pooling', 'Connection proxy', 'PgBouncer, ProxySQL', 'Pool reuse, read/write split', 'PostgreSQL scaling'],
            ['Anonymous browsing', 'Anonymizing proxy', 'Tor', 'Multi-hop privacy', 'Privacy network']
          ]
        }
      }
    ],
    'database-indexes': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Database indexes accelerate queries at the cost of storage and write overhead. Metrics are based on PostgreSQL, MySQL, MongoDB, and Elasticsearch indexing behavior.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Index Size vs Table Size', '10–30%', '50–100%+', 'Multiple indexes can exceed table size'],
            ['Query Speedup', '10×–100×', '1,000×+', 'From full table scan to index lookup'],
            ['Write Overhead per Index', '+10–20%', '+50–100%', 'Each index slows INSERT/UPDATE/DELETE'],
            ['B-Tree Lookup Latency', '1–3 disk reads', '1–2 reads', 'O(log N); ~4 levels for 1B rows'],
            ['Hash Index Lookup', '1 read', '1 read', 'O(1) for equality only'],
            ['GIN Index Build Time', 'Minutes–hours', 'Hours–days', 'For JSONB, arrays, full-text search'],
            ['Composite Index Columns', '2–4', '5–10', 'More columns = diminishing returns'],
            ['Index Selectivity Threshold', '1–10%', '< 1%', 'Low selectivity indexes may not be used'],
            ['Covering Index Hit', '1 read', '1 read', 'Index-only scan avoids heap access'],
            ['Index Maintenance Cost', 'Low', 'High', 'REINDEX, vacuum, analyze frequency grows']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Index behavior as query and write volume scale:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Index lookup: 1–10 ms', 'Queries use optimal index', 'Healthy index usage'],
            ['2× Read Load', 'Same or slightly higher', 'Index buffers warm', 'Add memory or replicas'],
            ['5× Read Load', '10–100 ms', 'Index pages evicted from cache', 'Increase shared_buffers or shard'],
            ['10× Read Load', '100 ms–1 s', 'Index lookups become disk-bound', 'Scale reads or optimize queries'],
            ['2× Write Load', '+10–30% write latency', 'Index maintenance visible', 'Each index adds write cost'],
            ['Missing Index', 'Full scan: 1–10 s', 'CPU and I/O spike', 'Add index or rewrite query']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Index strategy evolution from small tables to billion-row systems:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Primary key only. Small tables fit in memory. Queries are fast without indexes.',
          '<strong>Stage 2: 1K–10K users</strong> — Add indexes on foreign keys and frequently filtered columns. Single-column B-tree indexes.',
          '<strong>Stage 3: 10K–100K users</strong> — Composite indexes for common query patterns. Partial indexes for hot subsets. Query plan review.',
          '<strong>Stage 4: 100K–1M users</strong> — Covering indexes for index-only scans. Partitioning with local indexes. Read replicas handle analytical queries.',
          '<strong>Stage 5: 1M–10M users</strong> — Specialized indexes: GIN for JSONB/full-text, GiST for geospatial, BRIN for time-series. Automated index advisors.',
          '<strong>Stage 6: 10M+ users</strong> — Sharded indexes. Global secondary indexes in distributed DBs. Index placement optimized per shard. Continuous index tuning via workload analysis.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Index considerations per database component.',
        list: [
          '<strong>Application Tier:</strong> Query patterns drive index design. Avoid <code>SELECT *</code>; use covering indexes. Parametrize queries for plan stability.',
          '<strong>Database Tier:</strong> B-tree for range/equality; hash for equality only; GIN/GiST for complex types; BRIN for large sorted data. Maintain statistics.',
          '<strong>Storage Tier:</strong> Indexes stored on SSD for low latency. Large indexes partition across tablespaces. WAL writes for index updates.',
          '<strong>Cache Tier:</strong> Hot index pages cached in shared_buffers/OS page cache. Index-only scans reduce heap access.',
          '<strong>Replication Tier:</strong> Indexes maintained on replicas. Read replicas spread index-heavy query load. Logical replication may replicate without indexes.',
          '<strong>Monitoring Tier:</strong> Track index usage (<code>pg_stat_user_indexes</code>), bloat, duplicate/wasted indexes. Auto-alert on sequential scans.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Index type selection by query pattern:',
        table: {
          headers: ['Query Pattern', 'Index Type', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Equality lookup', 'B-tree / Hash', 'Fast, small', 'Hash cannot do range', 'User by email'],
            ['Range scan', 'B-tree', 'Sorted access', 'Larger for wide ranges', 'Orders by date'],
            ['Full-text search', 'GIN', 'Fast text search', 'Large, slow updates', 'Product search'],
            ['Geospatial', 'GiST / SP-GiST', 'Spatial queries', 'Specialized', 'Nearby stores'],
            ['JSONB attributes', 'GIN', 'Flexible schema queries', 'Build/maintenance cost', 'User profile JSONB'],
            ['Time-series append', 'BRIN', 'Tiny size, fast sequential', 'Poor random access', 'IoT metrics'],
            ['High-cardinality unique', 'B-tree unique', 'Enforces uniqueness', 'Insert overhead', 'Username'],
            ['Low-cardinality filter', 'Partial / Bitmap', 'Selective on subset', 'Not used alone often', 'Active users only']
          ]
        }
      }
    ],
    'bloom-filters': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Bloom filters provide space-efficient probabilistic set membership with no false negatives. Metrics are based on RedisBloom, Cassandra, HBase, and LevelDB usage.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['False Positive Rate', '1%', '0.1–0.01%', 'Tunable by size and hash functions'],
            ['Bits per Element', '8–12', '16–32', 'Lower FPR needs more bits'],
            ['Hash Functions', '3–7', '5–10', 'Optimal count depends on bits/element'],
            ['Memory for 1B Items', '1 GB (8 bits/item)', '4 GB (32 bits/item)', 'vs ~100 GB+ for exact set'],
            ['Lookup Latency', '1–10 µs', '< 1 µs', 'In-memory bloom filter'],
            ['Insertion Latency', '1–10 µs', '< 1 µs', 'Set k bits'],
            ['Scalable Bloom Filter Growth', '2×', 'Variable', 'Add new filters as set grows'],
            ['Counting Bloom Filter Overhead', '4× standard', '2–8×', 'Supports deletion'],
            ['Cassandra Bloom Filter FP Rate', '0.01–1%', '0.1%', 'Per-SSTable bloom filters'],
            ['RedisBloom Capacity', '1M–100M items', '1B+ items', 'Can layer multiple filters']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Bloom filter behavior under query and element volume pressure:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '< 1 µs', 'Few false positives', 'Negligible overhead'],
            ['2× Elements', 'Same', 'False positive rate doubles', 'Filter becoming saturated'],
            ['5× Elements', 'Same', 'High false positive rate', 'Rebuild filter or add capacity'],
            ['10× Elements', 'Same', 'Useless without scaling', 'Scalable bloom filter adds layers'],
            ['Disk-Based Filter', '1–10 ms', 'One disk seek per lookup', 'SSTable bloom filters avoid disk reads'],
            ['Network Filter', '1–5 ms', 'One RTT to RedisBloom', 'Still faster than DB lookup']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Bloom filter adoption from simple cache guard to large-scale distributed systems:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No bloom filter. Exact set in memory or database.',
          '<strong>Stage 2: 1K–10K users</strong> — Simple bloom filter in application memory. Guards cache: negative lookups avoid DB.',
          '<strong>Stage 3: 10K–100K users</strong> — Centralized RedisBloom. Shared across instances. False positive rate tuned to 1%.',
          '<strong>Stage 4: 100K–1M users</strong> — Counting bloom filter to support deletions. Multiple filters per data partition.',
          '<strong>Stage 5: 1M–10M users</strong> — Scalable bloom filter layers. Each layer has target FPR. Distributed across Redis Cluster.',
          '<strong>Stage 6: 10M+ users</strong> — Per-shard bloom filters in database (Cassandra/HBase). Disk-based filters for SSTables. Cuckoo filters as alternative for deletion support.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Bloom filter placement across the architecture.',
        list: [
          '<strong>Application Tier:</strong> In-memory bloom filter for hot key guard. Avoids cache/database lookups for known non-existent keys.',
          '<strong>Cache Tier:</strong> RedisBloom module. Shared filter across services. <code>BF.ADD</code> / <code>BF.EXISTS</code>. Counting bloom filter with <code>CF.ADD</code>.',
          '<strong>Database Tier:</strong> Cassandra/HBase use bloom filters per SSTable to avoid disk seeks for non-existent keys. LevelDB bloom filter on disk.',
          '<strong>Storage Tier:</strong> Disk-resident bloom filters for large datasets. Read one block to check membership before full scan.',
          '<strong>Network Tier:</strong> Bloom filters for set reconciliation (Bitcoin, CDN cache invalidation). Reduce bandwidth for sync.',
          '<strong>Analytics Tier:</strong> Count-Min Sketch and HyperLogLog variants for frequency and cardinality estimation.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use bloom filters vs exact data structures:',
        table: {
          headers: ['Scenario', 'Structure', 'False Positives', 'Memory', 'Example'],
          rows: [
            ['Cache negative lookup', 'Bloom filter', 'Allowed', 'Tiny', 'Avoid DB lookup for missing keys'],
            ['Deduplication (exact)', 'Hash set', 'None', 'Large', 'Exact duplicate detection'],
            ['Deletion required', 'Counting / Cuckoo filter', 'Allowed', 'Moderate', 'Dynamic set membership'],
            ['Large-scale DB SSTable', 'Bloom filter', 'Allowed', 'Tiny per SSTable', 'Cassandra, LevelDB'],
            ['Approximate count', 'Count-Min Sketch', 'Overestimates', 'Tiny', 'Top-k items, frequency'],
            ['Approximate cardinality', 'HyperLogLog', 'Small error', 'Tiny', 'Unique visitor count'],
            ['Strong consistency required', 'Exact set / DB', 'None', 'Variable', 'Financial ledger membership']
          ]
        }
      }
    ],
    'heartbeat': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Heartbeats detect liveness in distributed systems. Metrics are based on Kubernetes, Consul, etcd, ZooKeeper, and custom health-check implementations.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Heartbeat Interval', '5–30 s', '100 ms–2 s', 'Kubernetes liveness: default 10 s; etcd: 100 ms'],
            ['Heartbeat Timeout', '2–5 × interval', '2–3 × interval', 'Too short = false positives; too long = slow detection'],
            ['Failure Detection Time', '10–60 s', '1–5 s', 'Time to declare node/service dead'],
            ['Gossip Protocol Fan-out', '3–5 peers', '5–10 peers', 'Consul serf: 3–5 random peers'],
            ['Gossip Interval', '200 ms–1 s', '100–500 ms', 'Trade-off: convergence vs overhead'],
            ['Convergence Time', 'Seconds–minutes', 'Milliseconds–seconds', 'For cluster state to propagate'],
            ['Heartbeat Payload Size', '100 bytes–1 KB', '10–100 bytes', 'Usually node ID, timestamp, minimal status'],
            ['Heartbeat Messages/sec (cluster)', '100–1,000', '10K–100K', 'Large clusters generate significant gossip'],
            ['False Positive Rate', '0.01–0.1%', '< 0.01%', 'Tuned by timeout and network quality'],
            ['Lease TTL', '10–60 s', '1–10 s', 'etcd leases expire if not renewed']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Heartbeat behavior as cluster size and network instability grow:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Healthy)', 'Heartbeat ack < 10 ms', 'All nodes healthy', 'Stable cluster'],
            ['2× Node Count', 'Slight increase in gossip traffic', 'Detection time stable', 'Gossip scales logarithmically'],
            ['5× Node Count', 'Gossip traffic noticeable', 'Some delayed heartbeats', 'May need larger fan-out or sub-clusters'],
            ['10× Node Count', 'Heartbeat storms possible', 'False positives rise', 'Tune intervals; use hierarchical detection'],
            ['Network Partition', 'Timeout → suspect → dead', 'Split-brain risk', 'Quorum-based systems avoid false declaration'],
            ['Node Overload', 'Missed heartbeats despite alive', 'Flapping', 'Distinguish process health from network health']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Heartbeat mechanism evolution from single service to global cluster:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Simple periodic HTTP health endpoint. External load balancer pings app every 30 s.',
          '<strong>Stage 2: 1K–10K users</strong> — Application exposes <code>/health</code>. Load balancer checks every 5 s. Basic heartbeat timeout.',
          '<strong>Stage 3: 10K–100K users</strong> — Service registry (Consul, Eureka) with heartbeats. Clients discover healthy instances. Gossip protocol.',
          '<strong>Stage 4: 100K–1M users</strong> — Distributed consensus (etcd/ZooKeeper) for leader election and lease management. 100 ms heartbeats.',
          '<strong>Stage 5: 1M–10M users</strong> — Hierarchical heartbeat: local agents report to regional controllers. Failure detection in 1–5 s globally.',
          '<strong>Stage 6: 10M+ users</strong> — Custom failure detectors (phi accrual) adapt to network conditions. Heartbeat merged with metrics stream. Edge + core layered detection.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Heartbeat implementation per infrastructure layer.',
        list: [
          '<strong>Client Tier:</strong> Application SDK sends heartbeats to registry. Includes metadata: version, region, load, custom health.',
          '<strong>Registry Tier:</strong> Consul/Eureka/etcd store service instances. Track heartbeats. Expire entries on timeout.',
          '<strong>Load Balancer Tier:</strong> Health checks determine backend pool. AWS ALB: 5 s interval, 2 consecutive failures. NGINX: max_fails + fail_timeout.',
          '<strong>Orchestrator Tier:</strong> Kubernetes kubelet sends node heartbeats to API server. Controller marks pods NotReady.',
          '<strong>Consensus Tier:</strong> etcd/ZooKeeper/Raft leaders send heartbeats to followers. Lease mechanism for ephemeral keys.',
          '<strong>Application Tier:</strong> Internal heartbeats between services (e.g., keep-alive on long connections). Circuit breakers use health signals.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Heartbeat strategy by system requirement:',
        table: {
          headers: ['Scenario', 'Mechanism', 'Interval', 'Timeout', 'Tool'],
          rows: [
            ['HTTP service health', 'Active probe', '5–10 s', '2–3 failures', 'Load balancer, Kubernetes'],
            ['Service discovery', 'Registration heartbeat', '10 s', '30 s', 'Consul, Eureka'],
            ['Leader election', 'Consensus heartbeat', '100 ms', '1 s', 'etcd, ZooKeeper'],
            ['Distributed lock lease', 'Lease renewal', '5 s', '10 s', 'etcd, Redis Redlock'],
            ['Mobile app presence', 'Keep-alive / websocket ping', '30 s', '90 s', 'Custom'],
            ['IoT device fleet', 'Lightweight MQTT ping', '1–5 min', '15 min', 'MQTT broker'],
            ['Global cluster health', 'Gossip + hierarchical', '1 s local, 10 s global', '3× interval', 'Consul serf, custom']
          ]
        }
      }
    ],
    'checksum': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Checksums and hashes verify data integrity and detect corruption. Metrics compare CRC32, MD5, SHA-256, xxHash, and BLAKE3.',
        table: {
          headers: ['Metric', 'CRC32', 'MD5', 'SHA-256', 'xxHash', 'BLAKE3'],
          rows: [
            ['Output Size', '32 bits', '128 bits', '256 bits', '32–128 bits', '256 bits'],
            ['Collision Resistance', 'Very low', 'Low (broken)', 'High', 'Medium', 'Very high'],
            ['Throughput (1 GB/s CPU)', '3–5 GB/s', '0.5–1 GB/s', '0.2–0.5 GB/s', '5–10 GB/s', '3–7 GB/s'],
            ['Security Use', 'No', 'No (deprecated)', 'Yes', 'No', 'Yes'],
            ['Common Use', 'Network packets, ZIP', 'Legacy file checksum', 'TLS, signatures, git', 'Database checksums', 'Modern hashing'],
            ['False Positive Rate (corruption)', '1 / 2^32', '1 / 2^128', '1 / 2^256', '1 / 2^64 (64-bit)', '1 / 2^256'],
            ['CPU Cost', 'Very low', 'Low', 'Medium', 'Very low', 'Low'],
            ['Incremental Computation', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Checksum computation and verification behavior under data volume:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Small files)', '< 1 ms', 'Checksum negligible', 'Use strong hash freely'],
            ['2× Data Volume', 'Linear increase', 'CPU usage rises', 'Still acceptable for SHA-256'],
            ['5× Data Volume', 'Noticeable CPU', 'May become bottleneck', 'Switch to xxHash/BLAKE3 for integrity'],
            ['10× Data Volume', 'Throughput capped', 'Hashing limits pipeline', 'Parallelize or use hardware acceleration'],
            ['Streaming Large Objects', 'Steady throughput', 'One pass over data', 'Incremental hash avoids loading all data'],
            ['Verify on Every Read', '+1–5% latency', 'Read path overhead', 'Acceptable for critical data; cache checksums']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Checksum strategy evolution from simple file verification to distributed data integrity:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No checksums. Trust storage and network.',
          '<strong>Stage 2: 1K–10K users</strong> — MD5 or SHA-256 checksums for uploaded files. Stored in database. Verified on download.',
          '<strong>Stage 3: 10K–100K users</strong> — xxHash for fast database page checksums. SHA-256 for user files and API payloads.',
          '<strong>Stage 4: 100K–1M users</strong> — Checksums at every layer: network (CRC), storage (block checksums), application (content hash). Merkle trees for efficient verification.',
          '<strong>Stage 5: 1M–10M users</strong> — Hardware-accelerated SHA-256 (Intel SHA-NI). Erasure coding with checksums. Cross-region replication verification.',
          '<strong>Stage 6: 10M+ users</strong> — Cryptographic integrity by default. Content-addressed storage (IPFS-style). Auditable checksum logs. Formal verification of checksum chains.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Checksum usage per infrastructure layer.',
        list: [
          '<strong>Network Tier:</strong> Ethernet CRC32 detects frame corruption. TCP checksums detect segment corruption. TLS uses MACs for integrity + authenticity.',
          '<strong>Storage Tier:</strong> SSDs and filesystems (ZFS, btrfs) use block checksums. S3 provides ETags (MD5 or CRC64). RAID parity protects against disk failure.',
          '<strong>Database Tier:</strong> PostgreSQL page checksums detect corruption. MySQL InnoDB checksums per page. Replication compares checksums.',
          '<strong>Application Tier:</strong> API request/response signatures. File upload checksums. Idempotency keys derived from content hash.',
          '<strong>Distributed Systems Tier:</strong> Merkle trees compare replica state efficiently. Content-addressed storage deduplicates by hash.',
          '<strong>Security Tier:</strong> HMAC and digital signatures provide integrity + authentication. SHA-256 minimum for security contexts.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Checksum algorithm selection by requirement:',
        table: {
          headers: ['Requirement', 'Algorithm', 'Speed', 'Security', 'Example'],
          rows: [
            ['Detect accidental corruption', 'CRC32 / xxHash', 'Very fast', 'No', 'Network packet, file transfer'],
            ['Fast database integrity', 'xxHash64', 'Fastest', 'No', 'RocksDB checksums'],
            ['Legacy compatibility', 'MD5', 'Fast', 'No', 'Old file checksum tools'],
            ['Security / signatures', 'SHA-256 / BLAKE3', 'Medium', 'Yes', 'TLS, code signing'],
            ['Password hashing', 'Argon2 / bcrypt', 'Slow (intentional)', 'Yes', 'User passwords'],
            ['Content addressing', 'SHA-256', 'Medium', 'Yes', 'Git, IPFS'],
            ['Streaming large data', 'BLAKE3 / SHA-256', 'Medium–fast', 'Yes/No', 'Video upload verification']
          ]
        }
      }
    ],
    'leader-follower': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Leader-follower (primary-replica) replication provides read scaling and failover. Metrics are based on PostgreSQL, MySQL, Redis, MongoDB, and Raft-based systems.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Replication Lag', '1 ms–1 s', '< 10 ms', 'Async: milliseconds to seconds; sync: <1 ms'],
            ['Failover Time', '30 s–5 min', '1–30 s', 'Manual failover slow; automated (Patroni/Redis Sentinel) fast'],
            ['Replica Count', '1–3', '5–20', 'More replicas = more read scale but overhead'],
            ['Read Split Ratio', '80:20 to 95:5', '99:1', 'Most traffic reads; write goes to leader'],
            ['Write Throughput', '1K–10K TPS', '10K–100K TPS', 'Leader is write bottleneck'],
            ['Read Throughput (with replicas)', '10K–100K QPS', '1M+ QPS', 'Replicas scale reads linearly'],
            ['Semi-Sync Timeout', '10 s', '1–5 s', 'How long to wait for replica ack'],
            ['Quorum Size (Raft)', 'Majority of N', 'N/2+1', '3 nodes tolerate 1 failure; 5 tolerate 2'],
            ['Snapshot Transfer Time', 'Seconds–minutes', 'Minutes–hours', 'New replica copies full dataset'],
            ['Consistency Model', 'Eventual / async', 'Strong / sync', 'Sync hurts write latency']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Leader-follower behavior as read and write load grow:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Read: 1–10 ms; Write: 5–20 ms', 'Leader + 2 replicas healthy', 'Lag negligible'],
            ['2× Read Load', 'Read: stable', 'Replicas share load', 'Scale by adding replicas'],
            ['5× Read Load', 'Read: 10–50 ms', 'Replicas saturated', 'Add more replicas or cache'],
            ['2× Write Load', 'Write: +50–100%', 'Leader CPU/disk pressure', 'Vertical scale leader or shard'],
            ['5× Write Load', 'Write: timeout/spike', 'Leader bottleneck', 'Must shard or partition writes'],
            ['Leader Failure', '1–60 s downtime', 'Automatic failover to replica', 'Data loss risk with async replication']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Leader-follower evolution from single database to global replication topology:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single node. No replication. Backups only.',
          '<strong>Stage 2: 1K–10K users</strong> — First async replica for backups and read scaling. Manual failover. Lag monitored.',
          '<strong>Stage 3: 10K–100K users</strong> — 1 leader + 3 replicas. Read/write split in app. Automated failover (Patroni, Redis Sentinel).',
          '<strong>Stage 4: 100K–1M users</strong> — 1 leader + 10 replicas. Connection pooling (PgBouncer). Semi-sync replication for critical data.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-region leader-follower. Regional read replicas. Cross-region replication lag 100 ms–1 s.',
          '<strong>Stage 6: 10M+ users</strong> — Sharded leaders. Each shard has its own leader-follower set. Global consensus (Raft/Paxos) for metadata. Or distributed SQL (CockroachDB/Spanner).'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Leader-follower architecture across infrastructure layers.',
        list: [
          '<strong>Application Tier:</strong> Writes go to leader; reads distributed to replicas with lag awareness. Stale reads acceptable for most queries.',
          '<strong>Database Tier:</strong> Leader processes writes, replicates WAL/binlog to replicas. PostgreSQL streaming replication. MySQL binlog. Redis replication.',
          '<strong>Cache Tier:</strong> Cache invalidation from leader. Replicas serve stale cache if invalidation lags. Redis Sentinel manages Redis leader election.',
          '<strong>Load Balancer Tier:</strong> ProxySQL/HAProxy routes reads to replicas, writes to leader. Health checks exclude lagging replicas.',
          '<strong>Consensus Tier:</strong> Raft (etcd, Consul) or ZooKeeper stores leader metadata. Orchestrates failover.',
          '<strong>Orchestrator Tier:</strong> Patroni, Orchestrator, Redis Sentinel automate failover. Monitor replication lag, failover history.',
          '<strong>Backup Tier:</strong> Replicas used for consistent snapshots. Offsite backups from replica to reduce leader load.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Replication strategy by consistency and scale needs:',
        table: {
          headers: ['Scenario', 'Replication', 'Failover', 'Consistency', 'Example'],
          rows: [
            ['Read-heavy web app', 'Async leader-follower', 'Automated', 'Eventual', 'Blog, catalog'],
            ['Financial ledger', 'Semi-sync / sync', 'Manual or quorum', 'Strong', 'Bank transaction DB'],
            ['Cache / session store', 'Async replication', 'Sentinel auto', 'Eventual', 'Redis primary-replica'],
            ['Global low-latency reads', 'Multi-region replicas', 'Regional failover', 'Eventual', 'Netflix viewing data'],
            ['High write throughput', 'Sharding + leader per shard', 'Per-shard failover', 'Eventual/strong per shard', 'Uber, Instagram'],
            ['Metadata / coordination', 'Raft consensus', 'Quorum election', 'Linearizable', 'etcd, ZooKeeper'],
            ['Read replicas for analytics', 'Async with lag tolerance', 'No failover needed', 'Eventual', 'Reporting replica']
          ]
        }
      }
    ]
  },
  module14: {
    'strong-vs-eventual-consistency': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Strong consistency ensures all observers see the same data at the same time; eventual consistency allows temporary divergence. Metrics reflect Spanner, DynamoDB, Cassandra, and Redis deployments.',
        table: {
          headers: ['Metric', 'Strong Consistency', 'Eventual Consistency', 'Notes'],
          rows: [
            ['Read Latency (local)', '2–10 ms', '1–2 ms', 'Strong must coordinate with replicas'],
            ['Read Latency (cross-region)', '100–500 ms', '1–5 ms', 'Strong cross-region is expensive'],
            ['Write Latency', '5–50 ms', '1–5 ms', 'Strong writes wait for quorum/all'],
            ['Availability (network partition)', 'Lower', 'Higher', 'CAP theorem: choose consistency or availability'],
            ['Throughput', '1K–10K TPS', '10K–1M+ TPS', 'Eventual avoids coordination overhead'],
            ['Replication Lag', '0 ms (visible)', '1 ms–seconds', 'Eventual lag depends on load/distance'],
            ['Conflict Rate', '0%', '0.1–5%', 'Eventual may need conflict resolution'],
            ['Operational Complexity', 'High', 'Medium', 'Strong needs consensus; eventual needs conflict handling'],
            ['Examples', 'Spanner, etcd, Raft', 'DynamoDB, Cassandra, DNS', 'Choose based on business need'],
            ['Use Case Fit', 'Banking, inventory', 'Social feeds, analytics', 'Wrong choice causes bugs or outages']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Behavior comparison as load and partition tolerance pressure increase:',
        table: {
          headers: ['Load Factor', 'Strong Consistency', 'Eventual Consistency', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Slightly higher latency', 'Low latency', 'Eventual wins on raw speed'],
            ['2× Load', 'Latency increases linearly', 'Latency stable', 'Strong coordination becomes visible'],
            ['5× Load', 'Leader/quorum bottleneck', 'Scales well', 'Strong may need sharding'],
            ['10× Load', 'Throughput capped', 'Still scaling', 'Eventual handles fan-out better'],
            ['Network Partition', 'Unavailable or degraded', 'Available, stale reads', 'Classic CAP trade-off'],
            ['Recovery', 'Reconciliation fast', 'Reconciliation may lag', 'Eventual needs anti-entropy']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How consistency requirements evolve with scale:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single database. Strong consistency by default. No distribution concerns.',
          '<strong>Stage 2: 1K–10K users</strong> — Read replicas introduced. Accept eventual consistency for reads. Writes remain strongly consistent.',
          '<strong>Stage 3: 10K–100K users</strong> — Some data becomes eventually consistent (caches, analytics). Critical data stays strong (payments, inventory).',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-region deployment. Per-region eventual reads. Cross-region strong consistency only for financial transactions.',
          '<strong>Stage 5: 1M–10M users</strong> — Mixed model: Spanner for strong global data, DynamoDB/Cassandra for eventually consistent scale data.',
          '<strong>Stage 6: 10M+ users</strong> — Consistency chosen per operation. Linearizable for money; causal for social; eventual for metrics. Formal consistency models documented.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Consistency trade-offs per infrastructure layer.',
        list: [
          '<strong>Client Tier:</strong> User sees stale data or not? Shopping cart expects strong; news feed tolerates eventual.',
          '<strong>API Gateway Tier:</strong> Can route read requests to closest replica if eventual. Must route critical writes to leader/strong store.',
          '<strong>Application Tier:</strong> Code must handle stale reads gracefully for eventual. Idempotency keys protect against duplicate strong writes.',
          '<strong>Cache Tier:</strong> Cache is inherently eventual. Write-through/write-around strategies affect consistency window.',
          '<strong>Database Tier:</strong> Relational DBs strong by default. NoSQL often configurable (ONE/QUORUM/ALL). Distributed SQL offers global strong consistency.',
          '<strong>Queue Tier:</strong> Message queues are eventually consistent by nature. Exactly-once semantics add strong guarantees at cost of throughput.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to choose strong vs eventual consistency:',
        table: {
          headers: ['Scenario', 'Recommended Model', 'Why', 'Example'],
          rows: [
            ['Bank account balance', 'Strong / linearizable', 'Money cannot disappear or duplicate', 'Ledger'],
            ['E-commerce inventory', 'Strong or careful optimistic', 'Overselling costs money', 'Amazon checkout'],
            ['Social media feed', 'Eventual', 'Speed matters; stale OK', 'Twitter/X timeline'],
            ['Like/comment counts', 'Eventual', 'Approximate counts acceptable', 'YouTube views'],
            ['User profile read', 'Eventual / read-your-writes', 'Fresh enough; fast globally', 'Netflix profile'],
            ['Distributed lock', 'Strong', 'Split-brain is catastrophic', 'etcd, ZooKeeper'],
            ['Analytics dashboard', 'Eventual', 'Aggregate data; freshness flexible', 'Metrics'],
            ['Shopping cart', 'Strong per user', 'User must see own changes', 'Amazon cart']
          ]
        }
      }
    ],
    'latency-vs-throughput': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Latency is the time for a single operation; throughput is operations per unit time. They are related but optimized differently.',
        table: {
          headers: ['Metric', 'Latency-Focused', 'Throughput-Focused', 'Notes'],
          rows: [
            ['Target Latency', '< 10 ms', '100 ms–seconds', 'Trading per-op speed for volume'],
            ['Throughput', '1K–10K ops/s', '100K–10M+ ops/s', 'Batching and parallelism increase throughput'],
            ['Batch Size', '1', '10–10,000', 'Batching amortizes overhead'],
            ['Queue Depth', 'Low', 'High', 'High queueing improves throughput at latency cost'],
            ['Resource Utilization', '40–60%', '80–95%', 'Latency needs headroom; throughput maximizes'],
            ['Concurrency', 'Low–medium', 'High', 'More concurrent work improves throughput'],
            ['Examples', 'Trading, gaming', 'Analytics, ETL, logging', 'Different hardware and software stacks'],
            ['Optimization', 'Cache, fast path', 'Batch, pipeline, parallel', 'Often mutually exclusive'],
            ['SLO Focus', 'p99, p99.9', 'Aggregate ops/sec', 'Measure what users care about'],
            ['Cost per Op', 'Higher', 'Lower', 'Throughput amortizes fixed costs']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Latency-throughput trade-off under increasing load:',
        table: {
          headers: ['Load Factor', 'Latency-Focused System', 'Throughput-Focused System', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Low latency, low util', 'Moderate latency, low util', 'Both have headroom'],
            ['2× Load', 'Latency stable', 'Latency stable, throughput doubles', 'Throughput system scales better'],
            ['5× Load', 'Latency spikes if util > 70%', 'Throughput high, latency rises', 'Latency system needs scale-out'],
            ['10× Load', 'Latency unacceptable', 'Throughput peaks, latency long tail', 'Both need architectural change'],
            ['Burst', 'Rejects or queues', 'Absorbs in batch queue', 'Throughput systems handle bursts better'],
            ['Over-provisioning', 'Required for low latency', 'Less needed', 'Latency systems cost more at low load']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Optimizing for latency vs throughput over time:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single server. Both latency and throughput acceptable. No trade-off needed.',
          '<strong>Stage 2: 1K–10K users</strong> — Cache hot data for latency. Batch background jobs for throughput.',
          '<strong>Stage 3: 10K–100K users</strong> — Separate latency-sensitive path from throughput batch path. Redis for real-time; Kafka for ingest.',
          '<strong>Stage 4: 100K–1M users</strong> — Latency path: edge cache, in-memory data, optimized code. Throughput path: sharded databases, parallel processing.',
          '<strong>Stage 5: 1M–10M users</strong> — Latency SLOs per endpoint. Throughput measured in events/sec. Different teams own each SLO.',
          '<strong>Stage 6: 10M+ users</strong> — Latency: sub-ms p99 at edge. Throughput: billions of events/day. Hardware-software co-design for each.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Latency and throughput optimizations per tier.',
        list: [
          '<strong>Client Tier:</strong> Latency: reduce requests, prefetch, caching. Throughput: bulk uploads, compression.',
          '<strong>Network Tier:</strong> Latency: connection reuse, QUIC, edge PoPs. Throughput: bandwidth, parallel streams, compression.',
          '<strong>Application Tier:</strong> Latency: async I/O, in-memory caches, fast algorithms. Throughput: batching, backpressure, workers.',
          '<strong>Database Tier:</strong> Latency: indexes, SSD, connection pooling. Throughput: batch writes, sharding, columnar storage.',
          '<strong>Queue Tier:</strong> Latency: skip queue for sync path. Throughput: high-throughput stream (Kafka 1M+ msg/s).',
          '<strong>Storage Tier:</strong> Latency: NVMe SSD, local cache. Throughput: object storage, sequential writes, erasure coding.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to optimize for latency vs throughput:',
        table: {
          headers: ['Scenario', 'Optimize For', 'Techniques', 'Example'],
          rows: [
            ['User-facing API', 'Latency', 'Cache, CDN, connection reuse', 'Product page load'],
            ['Log ingestion', 'Throughput', 'Batch, compress, stream', 'Fluentd → Kafka'],
            ['Real-time bidding', 'Latency', 'In-memory, kernel bypass', 'Ad exchange'],
            ['Data warehouse ETL', 'Throughput', 'Parallel, columnar, batch', 'Nightly reports'],
            ['Payment processing', 'Latency + consistency', 'Fast consensus, minimal hops', 'Checkout'],
            ['Video streaming', 'Throughput (bandwidth)', 'CDN, adaptive bitrate', 'Netflix'],
            ['IoT telemetry', 'Throughput', 'Aggregate, compress, edge batch', 'Sensor fleet']
          ]
        }
      }
    ],
    'acid-vs-base': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'ACID (Atomicity, Consistency, Isolation, Durability) vs BASE (Basically Available, Soft state, Eventual consistency) represent different consistency and availability trade-offs.',
        table: {
          headers: ['Metric', 'ACID', 'BASE', 'Notes'],
          rows: [
            ['Transaction Latency', '5–50 ms', '1–5 ms', 'ACID coordination adds overhead'],
            ['Throughput', '1K–10K TPS', '10K–1M+ TPS', 'BASE avoids locks and coordination'],
            ['Availability (partition)', 'Lower', 'Higher', 'BASE prioritizes availability'],
            ['Consistency Guarantees', 'Strong (serializable)', 'Eventual', 'ACID prevents anomalies'],
            ['Conflict Rate', '0%', '0.1–5%', 'BASE systems resolve conflicts later'],
            ['Schema Flexibility', 'Rigid', 'Flexible', 'BASE often schema-less'],
            ['Operational Complexity', 'Medium', 'High', 'BASE needs conflict resolution'],
            ['Scaling Writes', 'Harder', 'Easier', 'BASE scales horizontally'],
            ['Examples', 'PostgreSQL, MySQL, Spanner', 'Cassandra, DynamoDB, Couchbase', 'Choose per use case'],
            ['Correctness Burden', 'Database', 'Application', 'BASE pushes complexity to app']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'ACID vs BASE behavior under load:',
        table: {
          headers: ['Load Factor', 'ACID System', 'BASE System', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Predictable latency', 'Fast writes', 'Both healthy'],
            ['2× Load', 'Latency increases', 'Scales linearly', 'BASE handles growth better'],
            ['5× Load', 'Lock contention visible', 'Minimal latency increase', 'ACID may deadlock or queue'],
            ['10× Load', 'Single-node bottleneck', 'Add nodes', 'BASE horizontal scale shines'],
            ['Network Partition', 'May block or fail', 'Continues operating', 'BASE chooses availability'],
            ['Recovery', 'Rollback / replay logs', 'Anti-entropy / CRDTs', 'Different recovery models']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'ACID to BASE adoption as scale demands:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single ACID database. All operations transactional. Simple and correct.',
          '<strong>Stage 2: 1K–10K users</strong> — ACID still works. Read replicas added; reads become slightly eventual.',
          '<strong>Stage 3: 10K–100K users</strong> — Cache introduced (BASE-like for reads). Core writes stay ACID.',
          '<strong>Stage 4: 100K–1M users</strong> — Some data moves to BASE stores (session, analytics, logs). Critical financial data remains ACID.',
          '<strong>Stage 5: 1M–10M users</strong> — Polyglot persistence: ACID RDBMS + BASE NoSQL + cache + queue. Each data type matched to store.',
          '<strong>Stage 6: 10M+ users</strong> — ACID for money and inventory; BASE for social, telemetry, search. Distributed sagas bridge ACID boundaries.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'ACID/BASE choices per infrastructure layer.',
        list: [
          '<strong>Application Tier:</strong> ACID: use transactions, pessimistic/optimistic locking. BASE: design for idempotency, eventual consistency, conflict resolution.',
          '<strong>Database Tier:</strong> ACID: relational databases, distributed SQL. BASE: Cassandra, DynamoDB, MongoDB (configurable), key-value stores.',
          '<strong>Cache Tier:</strong> BASE by nature. TTL, eviction, invalidation define consistency window.',
          '<strong>Queue Tier:</strong> BASE delivery semantics. At-least-once common. Exactly-once approaches ACID but costs throughput.',
          '<strong>Search Tier:</strong> BASE. Index updates are asynchronous. Search results reflect near-real-time state.',
          '<strong>Object Storage Tier:</strong> BASE. S3 eventual consistency for some operations; strong consistency now for read-after-write.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'ACID vs BASE by data characteristic:',
        table: {
          headers: ['Data Type', 'Model', 'Why', 'Example'],
          rows: [
            ['Bank balances', 'ACID', 'Must not lose or duplicate money', 'Ledger'],
            ['Shopping cart', 'ACID per user', 'User expects own actions reflected', 'Amazon cart'],
            ['Product catalog', 'BASE / eventual', 'Frequent reads, tolerant of stale', 'Product search'],
            ['User sessions', 'BASE', 'TTL-based; ephemeral', 'Redis sessions'],
            ['Clickstream analytics', 'BASE', 'Volume huge; exact order not critical', 'Event stream'],
            ['Inventory reservation', 'ACID or saga', 'Overselling is costly', 'E-commerce'],
            ['Social graph', 'BASE', 'Massive scale; approximate OK', 'Facebook graph'],
            ['Audit log', 'ACID / append-only', 'Tamper-evident, ordered', 'Compliance log']
          ]
        }
      }
    ],
    'load-balancer-vs-api-gateway': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Load balancers distribute traffic; API gateways add application-level concerns like auth, rate limiting, and routing. Many products blur the line.',
        table: {
          headers: ['Metric', 'Load Balancer', 'API Gateway', 'Notes'],
          rows: [
            ['Latency Overhead', '< 1 ms (L4)', '1–10 ms (L7)', 'Gateway does more work'],
            ['Throughput', '1M–10M+ req/s', '10K–100K req/s', 'LBs are simpler and faster'],
            ['Protocol Layer', 'L4 / L7', 'L7', 'LBs can be TCP/UDP; gateways HTTP'],
            ['SSL Termination', 'Yes', 'Yes', 'Both terminate TLS'],
            ['Authentication', 'No', 'Yes', 'Gateway validates tokens'],
            ['Rate Limiting', 'Basic', 'Advanced', 'Gateway has per-user/key limits'],
            ['Request Transformation', 'No', 'Yes', 'Gateway rewrites paths/headers'],
            ['Cost', 'Low', 'Higher', 'Gateway licensing/compute'],
            ['Examples', 'NGINX, HAProxy, ALB/NLB', 'Kong, AWS API Gateway, Zuul', 'Often used together'],
            ['When to Use', 'High-throughput traffic distribution', 'API management and policy', 'Layer them']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Comparison as traffic and policy complexity grow:',
        table: {
          headers: ['Load Factor', 'Load Balancer', 'API Gateway', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Sub-ms overhead', '1–5 ms overhead', 'Both handle load'],
            ['2× Load', 'Linear scale', 'Slightly more CPU', 'Gateway auth/transformation cost'],
            ['5× Load', 'Still fast', 'Latency increases', 'Gateway may need scaling'],
            ['10× Load', 'LB rarely bottleneck', 'Gateway can bottleneck', 'Add gateway instances or cache'],
            ['Many Policies', 'Ignores policies', 'Per-request evaluation', 'Gateway cost scales with policy count'],
            ['DDoS', 'Passes to WAF/gateway', 'Rate limit + block', 'Gateway is policy enforcement point']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Evolution from load balancer to gateway to combined platform:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No load balancer. Direct connection.',
          '<strong>Stage 2: 1K–10K users</strong> — Load balancer (NGINX/ALB) distributes to app servers. SSL termination.',
          '<strong>Stage 3: 10K–100K users</strong> — API gateway added for auth, rate limiting, routing. Load balancer still in front of gateway.',
          '<strong>Stage 4: 100K–1M users</strong> — Separate internal and external gateways. Edge LB → WAF → API gateway → service mesh.',
          '<strong>Stage 5: 1M–10M users</strong> — Global API gateway with edge caching. Per-tenant policies. Developer portal.',
          '<strong>Stage 6: 10M+ users</strong> — LB and gateway functions converge at edge (Cloudflare, AWS CloudFront Functions). Policies pushed to edge.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Layered placement of load balancer and API gateway.',
        list: [
          '<strong>Edge / CDN Tier:</strong> Edge load balancing and caching. DDoS mitigation. Closest to users.',
          '<strong>Load Balancer Tier:</strong> Distributes raw traffic across gateways or app servers. L4 for TCP/UDP, L7 for HTTP.',
          '<strong>API Gateway Tier:</strong> Authenticates, authorizes, rate limits, routes, transforms. Policy enforcement point.',
          '<strong>Service Mesh Tier:</strong> Internal load balancing and mTLS between services. Repeats some gateway functions internally.',
          '<strong>Application Tier:</strong> Receives pre-validated requests from gateway. Focuses on business logic.',
          '<strong>Observability Tier:</strong> Both LB and gateway emit logs/metrics. Gateway has richer per-API telemetry.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use load balancer vs API gateway:',
        table: {
          headers: ['Need', 'Use', 'Why', 'Example'],
          rows: [
            ['Raw traffic distribution', 'Load balancer', 'Faster, cheaper', 'NLB for gaming servers'],
            ['API authentication', 'API gateway', 'Token validation', 'OAuth2 JWT validation'],
            ['Path-based routing', 'Either', 'Both support L7 routing', 'Route /api/v1 to service A'],
            ['Rate limiting per user', 'API gateway', 'User-aware policies', 'SaaS tier limits'],
            ['TCP/UDP traffic', 'Load balancer', 'Gateway is HTTP-focused', 'Database connections'],
            ['Request/response transformation', 'API gateway', 'Body/header rewrite', 'XML ↔ JSON'],
            ['SSL termination only', 'Load balancer', 'Simpler', 'HTTPS for static site']
          ]
        }
      }
    ],
    'api-gateway-vs-reverse-proxy': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Reverse proxies forward requests to backends; API gateways add API management features. API gateways are often reverse proxies with extras.',
        table: {
          headers: ['Metric', 'Reverse Proxy', 'API Gateway', 'Notes'],
          rows: [
            ['Latency Overhead', '< 1–2 ms', '2–10 ms', 'Gateway does auth, rate limiting, transforms'],
            ['Throughput', '100K–1M+ req/s', '10K–100K req/s', 'Reverse proxy is leaner'],
            ['Authentication', 'Optional (via module)', 'Core feature', 'Gateway integrates IdP'],
            ['Rate Limiting', 'Basic', 'Per-key, per-tier', 'Gateway is policy-rich'],
            ['Caching', 'Yes', 'Yes', 'Both cache responses'],
            ['Developer Portal', 'No', 'Yes', 'Gateway exposes API docs/keys'],
            ['Request Transformation', 'Limited', 'Extensive', 'Gateway rewrites payloads'],
            ['Analytics', 'Access logs', 'Per-API metrics', 'Gateway has business insights'],
            ['Examples', 'NGINX, Envoy, HAProxy', 'Kong, Apigee, AWS API Gateway', 'Gateway builds on proxy'],
            ['Cost', 'Low', 'Medium–high', 'Gateway licensing and compute']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Reverse proxy vs API gateway under load:',
        table: {
          headers: ['Load Factor', 'Reverse Proxy', 'API Gateway', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Negligible overhead', 'Slight overhead', 'Gateway adds policy cost'],
            ['2× Load', 'Scales linearly', 'Scales with policy complexity', 'Gateway may need more CPU'],
            ['5× Load', 'Still minimal overhead', 'Latency increases', 'Policy evaluation dominates'],
            ['10× Load', 'Rarely bottleneck', 'Can bottleneck', 'Scale gateway horizontally'],
            ['Many APIs / Policies', 'Same overhead', 'Overhead per policy', 'Gateway cost grows'],
            ['Simple Static Routing', 'Ideal', 'Overkill', 'Use reverse proxy']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'From reverse proxy to full API gateway:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No proxy. Direct connections.',
          '<strong>Stage 2: 1K–10K users</strong> — Reverse proxy (NGINX) for SSL termination and load balancing.',
          '<strong>Stage 3: 10K–100K users</strong> — Need auth and rate limiting. Upgrade to API gateway (Kong/AWS API Gateway).',
          '<strong>Stage 4: 100K–1M users</strong> — Dedicated gateway cluster. Separate internal/external gateways. Developer portal.',
          '<strong>Stage 5: 1M–10M users</strong> — Global gateway with edge caching. Per-tenant policies and analytics.',
          '<strong>Stage 6: 10M+ users</strong> — Gateway functions distributed to edge. Reverse proxy handles raw traffic; gateway handles dynamic policy at edge.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Functional layers of reverse proxy and API gateway.',
        list: [
          '<strong>Network Tier:</strong> Reverse proxy terminates TLS, keeps connections alive, handles compression.',
          '<strong>Routing Tier:</strong> Both route by host/path. Gateway adds version-based routing and canary.',
          '<strong>Security Tier:</strong> Gateway handles auth (OAuth, API keys), WAF integration, bot detection. Reverse proxy may delegate.',
          '<strong>Policy Tier:</strong> Gateway enforces quotas, rate limits, request validation, transformations. Reverse proxy has minimal policy.',
          '<strong>Analytics Tier:</strong> Gateway emits per-API metrics, usage dashboards, billing data. Reverse proxy logs are lower-level.',
          '<strong>Developer Experience Tier:</strong> Gateway offers portals, key management, documentation. Reverse proxy does not.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Reverse proxy vs API gateway by requirement:',
        table: {
          headers: ['Requirement', 'Choice', 'Reason', 'Example'],
          rows: [
            ['Simple SSL + LB', 'Reverse proxy', 'Cheaper, faster', 'NGINX for static site'],
            ['API key management', 'API gateway', 'Built-in feature', 'Kong developer portal'],
            ['Internal service routing', 'Reverse proxy / mesh', 'Lower overhead', 'Envoy sidecar'],
            ['External API monetization', 'API gateway', 'Billing + quotas', 'Apigee'],
            ['WebSocket support', 'Both', 'Both support', 'Chat API'],
            ['Request body validation', 'API gateway', 'Schema enforcement', 'OpenAPI spec validation'],
            ['High-throughput proxying', 'Reverse proxy', 'Less overhead', 'HAProxy for L4']
          ]
        }
      }
    ],
    'primary-replica-vs-peer-to-peer': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Primary-replica has a single leader for writes; peer-to-peer distributes writes across nodes. Metrics compare relational replication, Redis, Cassandra, and blockchain-style systems.',
        table: {
          headers: ['Metric', 'Primary-Replica', 'Peer-to-Peer', 'Notes'],
          rows: [
            ['Write Latency', '5–20 ms', '1–5 ms', 'P2P writes local; primary needs replication'],
            ['Read Latency (local)', '1–10 ms', '1–5 ms', 'Both fast locally'],
            ['Read Latency (global)', '1–10 ms (replica)', '1–5 ms (local node)', 'P2P avoids cross-region reads'],
            ['Write Throughput', '1K–10K TPS', '10K–100K+ TPS', 'Primary is bottleneck'],
            ['Conflict Rate', '0%', '0.1–5%', 'P2P needs conflict resolution'],
            ['Consistency', 'Strong/eventual configurable', 'Eventual / causal', 'Primary-replica easier to make strong'],
            ['Failover Complexity', 'Medium', 'Low', 'P2P has no leader to fail'],
            ['Operational Complexity', 'Medium', 'High', 'P2P harder to reason about'],
            ['Examples', 'PostgreSQL, MySQL, Redis', 'Cassandra, DynamoDB, IPFS', 'Different fault models'],
            ['Best For', 'Strong consistency, simpler ops', 'Global scale, high writes', 'Choose by workload']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Comparison under read/write scaling pressure:',
        table: {
          headers: ['Load Factor', 'Primary-Replica', 'Peer-to-Peer', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Stable', 'Stable', 'Both healthy'],
            ['2× Read Load', 'Add replicas', 'Add nodes', 'Both scale reads'],
            ['5× Read Load', 'Many replicas needed', 'Scales naturally', 'P2P read scaling simpler'],
            ['2× Write Load', 'Leader pressure', 'Distributed across nodes', 'P2P handles writes better'],
            ['5× Write Load', 'Leader bottleneck', 'Still scales', 'Primary-replica needs sharding'],
            ['Node Failure', 'Failover required', 'No failover; data redistributed', 'P2P more resilient to individual loss']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Adoption path from primary-replica to peer-to-peer:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single node. No replication. No peer concept.',
          '<strong>Stage 2: 1K–10K users</strong> — Primary-replica for read scaling and backups.',
          '<strong>Stage 3: 10K–100K users</strong> — Multiple replicas. Write load still on primary. Some data cached.',
          '<strong>Stage 4: 100K–1M users</strong> — Primary-replica with sharding or move to peer-to-peer for write-heavy data.',
          '<strong>Stage 5: 1M–10M users</strong> — Hybrid: primary-replica for transactional data; peer-to-peer for global scale data.',
          '<strong>Stage 6: 10M+ users</strong> — Peer-to-peer or distributed consensus for global state. Primary-replica still used inside shards.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Architecture differences per tier.',
        list: [
          '<strong>Client Tier:</strong> Primary-replica: writes to leader, reads from replica. P2P: writes/reads to any node.',
          '<strong>Routing Tier:</strong> Primary-replica: proxy routes writes to leader. P2P: consistent hashing routes to responsible peers.',
          '<strong>Replication Tier:</strong> Primary-replica: leader streams changes. P2P: gossip/anti-entropy syncs changes.',
          '<strong>Consistency Tier:</strong> Primary-replica: quorum or synchronous replication. P2P: vector clocks, CRDTs, last-write-wins.',
          '<strong>Failure Tier:</strong> Primary-replica: failover automation. P2P: no single point of failure; data re-replication.',
          '<strong>Observability Tier:</strong> Primary-replica: monitor replication lag. P2P: monitor partition health, conflict rate.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Primary-replica vs peer-to-peer by use case:',
        table: {
          headers: ['Scenario', 'Architecture', 'Why', 'Example'],
          rows: [
            ['Relational OLTP', 'Primary-replica', 'ACID, simple failover', 'Banking DB'],
            ['Global key-value store', 'Peer-to-peer', 'High writes, global HA', 'DynamoDB, Cassandra'],
            ['Read-heavy cache', 'Primary-replica', 'Simple, fast failover', 'Redis Sentinel'],
            ['Content delivery', 'Peer-to-peer', 'Nodes near users', 'CDN, IPFS'],
            ['Multi-region inventory', 'Primary-replica per region or P2P', 'Trade-off: consistency vs availability', 'E-commerce'],
            ['Blockchain', 'Peer-to-peer', 'Decentralized consensus', 'Bitcoin'],
            ['Time-series data', 'Peer-to-peer / sharded', 'High ingest', 'InfluxDB cluster']
          ]
        }
      }
    ],
    'server-vs-client-caching': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Server caches reduce origin load; client caches reduce network round trips. Metrics cover browser cache, CDN, Redis, and service worker caches.',
        table: {
          headers: ['Metric', 'Server Cache', 'Client Cache', 'Notes'],
          rows: [
            ['Hit Rate', '50–90%', '30–80%', 'Depends on cacheability'],
            ['Latency Reduction', '1–100 ms', '10–1,000 ms', 'Client cache avoids network entirely'],
            ['Storage Size', 'GB–TB', 'MB–GB', 'Client cache limited by device'],
            ['Invalidation Control', 'Full control', 'Limited control', 'Client caches honor headers'],
            ['Freshness Guarantee', 'Configurable', 'Depends on headers', 'ETag, Cache-Control, Last-Modified'],
            ['Cost Savings', '30–70% origin load', 'Bandwidth savings', 'Both reduce infrastructure cost'],
            ['Examples', 'Redis, Memcached, CDN', 'Browser cache, Service Worker', 'Layer them'],
            ['Hit Rate for Static Assets', '80–95% (CDN)', '50–70% (browser)', 'CDN offloads repeat users'],
            ['Dynamic Content Hit Rate', '20–50%', 'Low', 'Dynamic data less cacheable'],
            ['Invalidation Latency', '1 ms–1 min', 'TTL-based', 'Server can purge; client waits for TTL']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Server vs client cache behavior under load:',
        table: {
          headers: ['Load Factor', 'Server Cache', 'Client Cache', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Reduces origin load', 'Avoids network', 'Both valuable'],
            ['2× Load', 'Cache hit rate stable', 'No server impact', 'Client cache scales for free'],
            ['5× Load', 'Server cache may saturate', 'Still avoids network', 'Scale server cache replicas'],
            ['10× Load', 'Origin protected if cache hit', 'No protection of origin', 'Server cache is origin shield'],
            ['Cache Miss Storm', 'Origin spike', 'Requests go to server/CDN', 'Warm caches after deploy'],
            ['Invalidation Burst', 'Propagates quickly', 'Slow TTL-based refresh', 'Client cache harder to purge']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Caching strategy evolution from server-only to layered caching:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No caching. Every request hits origin.',
          '<strong>Stage 2: 1K–10K users</strong> — Server-side cache (Redis) for hot data. Browser cache for static assets.',
          '<strong>Stage 3: 10K–100K users</strong> — CDN for static assets. Application cache for dynamic data. Cache invalidation strategy.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-tier cache: client → CDN → edge → app cache → DB. Each layer has TTL.',
          '<strong>Stage 5: 1M–10M users</strong> — Personalized client caching. Service workers for offline. Stale-while-revalidate patterns.',
          '<strong>Stage 6: 10M+ users</strong> — Edge compute caches dynamic content per user. Predictive prefetch. Consistency models per cache tier.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Cache placement across client and server tiers.',
        list: [
          '<strong>Client Tier:</strong> Browser HTTP cache, Service Workers, localStorage/IndexedDB. Honors Cache-Control. Can serve offline.',
          '<strong>CDN / Edge Tier:</strong> Caches static and dynamic content near users. Full/purge invalidation. Cloudflare, Akamai, Fastly.',
          '<strong>Gateway Tier:</strong> API gateway response cache. Short TTL for API responses. Rate limit + cache combined.',
          '<strong>Application Tier:</strong> Redis/Memcached for database query results, sessions, computed data. Cache-aside/write-through.',
          '<strong>Database Tier:</strong> Buffer pool, query cache (deprecated in MySQL), materialized views.',
          '<strong>Invalidation Tier:</strong> Pub/sub (Redis), Kafka events, webhooks, CDN purge APIs. Keeps caches consistent.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'What to cache where:',
        table: {
          headers: ['Content Type', 'Cache Location', 'TTL', 'Invalidation', 'Example'],
          rows: [
            ['Static assets', 'Client + CDN', '1 year (with hash)', 'Versioned filename', 'JS/CSS/images'],
            ['API responses', 'CDN + server', 'Seconds–minutes', 'Cache-Control or purge', 'Product catalog API'],
            ['User session', 'Server only', 'Minutes–hours', 'Logout invalidates', 'Redis session'],
            ['Personalized feed', 'Client + edge', 'Minutes', 'Stale-while-revalidate', 'Social feed'],
            ['Search results', 'Server + CDN', 'Minutes', 'Purge on index update', 'Search API'],
            ['Real-time data', 'None / short client', 'Seconds', 'None', 'Stock price'],
            ['Computed aggregates', 'Server', 'Hours', 'ETL update triggers purge', 'Dashboard data']
          ]
        }
      }
    ],
    'rest-vs-rpc': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'REST uses HTTP resources; RPC uses remote procedure calls. gRPC, REST, and GraphQL are common choices. Metrics compare latency, payload, and tooling.',
        table: {
          headers: ['Metric', 'REST (HTTP/JSON)', 'RPC (gRPC)', 'Notes'],
          rows: [
            ['Latency', '5–50 ms', '1–10 ms', 'gRPC HTTP/2 + binary is faster'],
            ['Payload Size', 'Text, verbose', 'Binary, compact', 'Protobuf ~2–5× smaller than JSON'],
            ['Throughput', '1K–10K req/s', '10K–100K req/s', 'gRPC multiplexing reduces overhead'],
            ['Serialization CPU', 'Higher', 'Lower', 'JSON parsing slower than protobuf'],
            ['Browser Support', 'Native', 'Needs gRPC-Web or proxy', 'REST easier for web clients'],
            ['Code Generation', 'Optional (OpenAPI)', 'Required (proto)', 'gRPC enforces contracts'],
            ['Streaming', 'Limited / SSE', 'Native bidirectional', 'gRPC ideal for streaming'],
            ['Load Balancing', 'HTTP-aware', 'Needs L7 aware of HTTP/2', 'Long-lived gRPC connections complicate LB'],
            ['Caching', 'HTTP caching mature', 'Limited', 'REST benefits from CDN'],
            ['Tooling Maturity', 'Very high', 'High', 'REST broader; gRPC stronger in microservices']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'REST vs RPC behavior as service call volume grows:',
        table: {
          headers: ['Load Factor', 'REST (HTTP/JSON)', 'RPC (gRPC)', 'What It Means'],
          rows: [
            ['1× (Baseline)', '10–50 ms', '2–10 ms', 'gRPC faster due to binary + multiplexing'],
            ['2× Load', 'Latency + 20%', 'Latency + 10%', 'gRPC scales better'],
            ['5× Load', 'Connection overhead high', 'Multiplexed streams efficient', 'REST needs connection pooling'],
            ['10× Load', 'JSON parsing bottleneck', 'Protobuf keeps CPU lower', 'gRPC wins on CPU'],
            ['Many Small Calls', 'High overhead per call', 'Efficient', 'gRPC better for chatty services'],
            ['Public Browser API', 'Easy', 'Needs gateway', 'REST wins for external web']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'API style evolution from monolith to microservices:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Simple REST JSON API. Easy to debug. Browser-friendly.',
          '<strong>Stage 2: 1K–10K users</strong> — REST with OpenAPI specs. HTTP caching. Standard status codes.',
          '<strong>Stage 3: 10K–100K users</strong> — Internal services move to gRPC for efficiency. Public API remains REST. API gateway translates.',
          '<strong>Stage 4: 100K–1M users</strong> — gRPC for service mesh. REST for external clients. GraphQL for complex client queries.',
          '<strong>Stage 5: 1M–10M users</strong> — gRPC everywhere internally. REST edge with protobuf-to-JSON transcoding. Streaming for real-time features.',
          '<strong>Stage 6: 10M+ users</strong> — Polyglot: REST for web, gRPC for backend, GraphQL for mobile, WebSocket for real-time. IDL-driven contracts.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'REST and RPC across the service architecture.',
        list: [
          '<strong>Client Tier:</strong> Browsers and mobile consume REST or GraphQL. gRPC-Web needed for direct gRPC in browser.',
          '<strong>API Gateway Tier:</strong> REST externally; may translate to gRPC internally. OpenAPI docs for developers.',
          '<strong>Service Mesh Tier:</strong> gRPC between microservices. mTLS, retries, load balancing, circuit breakers.',
          '<strong>Database Tier:</strong> Drivers use wire protocols (not REST/RPC directly), but ORMs and services expose data via chosen API style.',
          '<strong>Queue Tier:</strong> Async events often use schema-driven serialization (Avro, protobuf), similar to RPC contracts.',
          '<strong>Observability Tier:</strong> REST has rich HTTP status codes and headers. gRPC uses status codes + trailers; needs tracing integration.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'REST vs RPC by use case:',
        table: {
          headers: ['Scenario', 'Choose', 'Why', 'Example'],
          rows: [
            ['Public API for web/mobile', 'REST', 'Browser support, caching', 'Stripe API'],
            ['Internal microservices', 'gRPC', 'Performance, contracts', 'Uber microservices'],
            ['Streaming / real-time', 'gRPC', 'Bidirectional streaming', 'Live updates'],
            ['Third-party integration', 'REST', 'Familiar, tooling', 'Webhook API'],
            ['Low-latency financial', 'gRPC / custom binary', 'Minimal overhead', 'Trading systems'],
            ['Complex client queries', 'GraphQL', 'Reduce over-fetching', 'GitHub API'],
            ['Resource-oriented CRUD', 'REST', 'Natural mapping', 'Blog API']
          ]
        }
      }
    ],
    'polling-vs-websocket-vs-webhook': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Polling, WebSocket, and webhooks are patterns for clients to receive updates. Metrics compare latency, resource usage, and complexity.',
        table: {
          headers: ['Metric', 'Polling', 'WebSocket', 'Webhook', 'Notes'],
          rows: [
            ['Latency', 'Seconds–minutes', '< 100 ms', 'Seconds–minutes', 'Polling interval dominates'],
            ['Server Resource Usage', 'High (many empty requests)', 'Medium (persistent conn)', 'Low (push on event)', 'Polling wastes resources'],
            ['Client Resource Usage', 'Low', 'Medium', 'Low', 'WebSocket keeps connection open'],
            ['Scalability', 'Poor at high frequency', 'Good with connection mgmt', 'Excellent', 'Webhooks scale best for rare events'],
            ['Complexity', 'Low', 'Medium–high', 'High', 'Webhooks need retry, security, endpoint mgmt'],
            ['Firewall/NAT Friendly', 'Yes', 'Yes (HTTP upgrade)', 'Needs public endpoint', 'Webhooks require client server'],
            ['Use Case', 'Simple status checks', 'Real-time bidirectional', 'Server-to-server events', 'Choose by direction and frequency'],
            ['Connection Count', 'Many short', 'Few long', 'None persistent', 'WebSocket needs connection limits'],
            ['Mobile Battery', 'Moderate–high drain', 'Moderate drain', 'Low drain', 'Polling frequent drains battery'],
            ['Reliability', 'Depends on interval', 'High with reconnect', 'Needs retry logic', 'Webhooks need idempotency']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Behavior as client count and event frequency grow:',
        table: {
          headers: ['Load Factor', 'Polling', 'WebSocket', 'Webhook', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Few empty polls', 'Few persistent connections', 'Few events pushed', 'All manageable'],
            ['2× Clients', '2× poll load', '2× connections', '2× delivery attempts', 'Polling cost scales linearly'],
            ['5× Clients', 'Server CPU high', 'Connection pool pressure', 'Retry queue grows', 'WebSocket needs horizontal scaling'],
            ['10× Clients', 'Polling collapses', 'Need connection sharding', 'Delivery failures spike', 'Each pattern needs architecture change'],
            ['High Event Frequency', 'Wastes polls', 'Ideal', 'Many outgoing calls', 'WebSocket for frequent updates'],
            ['Rare Events', 'Wastes polls', 'Maintains idle connections', 'Ideal', 'Webhooks for rare events']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Evolution of update delivery patterns:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Polling every 30 s. Simple. Works for low-frequency updates.',
          '<strong>Stage 2: 1K–10K users</strong> — Long polling for faster updates without WebSocket complexity.',
          '<strong>Stage 3: 10K–100K users</strong> — WebSocket for real-time UI features. Server maintains connection state.',
          '<strong>Stage 4: 100K–1M users</strong> — WebSocket cluster with sticky load balancing. Redis pub/sub for cross-server messaging.',
          '<strong>Stage 5: 1M–10M users</strong> — Webhooks for server-to-server integrations. WebSocket for user-facing real-time. Polling only for legacy.',
          '<strong>Stage 6: 10M+ users</strong> — Hybrid: WebSocket for active sessions, push notifications for mobile background, webhooks for backends. Connectionless protocols where possible.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Update patterns across infrastructure tiers.',
        list: [
          '<strong>Client Tier:</strong> Polling: simple HTTP client. WebSocket: persistent connection with reconnect. Webhook: exposes HTTP endpoint.',
          '<strong>Gateway Tier:</strong> WebSocket needs L7 sticky routing. Webhooks need ingress, auth, retry. Polling needs rate limiting.',
          '<strong>Application Tier:</strong> Polling: cache responses. WebSocket: connection manager + message bus. Webhook: event dispatcher + retry queue.',
          '<strong>Message Bus Tier:</strong> WebSocket backend uses Redis pub/sub, Kafka, or RabbitMQ for fan-out. Webhooks use queue for reliable delivery.',
          '<strong>Database Tier:</strong> Polling queries DB each time; consider materialized views. WebSocket/webhook store state/offset for resume.',
          '<strong>Reliability Tier:</strong> WebSocket: heartbeat + reconnect. Webhook: idempotency keys + exponential backoff + DLQ. Polling: etag/Last-Modified.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use polling, WebSocket, or webhook:',
        table: {
          headers: ['Scenario', 'Pattern', 'Why', 'Example'],
          rows: [
            ['Real-time chat', 'WebSocket', 'Low latency bidirectional', 'Slack, Discord'],
            ['Email delivery status', 'Webhook', 'Event-driven, efficient', 'SendGrid webhooks'],
            ['Simple status page', 'Polling', 'Easy to implement', 'Job status page'],
            ['Stock price ticker', 'WebSocket', 'Frequent updates', 'Trading dashboard'],
            ['Server-to-server events', 'Webhook', 'Push model scales', 'GitHub webhooks'],
            ['Mobile push alternative', 'Polling', 'Works when push unavailable', 'Legacy app refresh'],
            ['Live sports score', 'WebSocket', 'Real-time updates', 'ESPN live'],
            ['Order state changes', 'Webhook + polling fallback', 'Reliable delivery', 'E-commerce notifications']
          ]
        }
      }
    ],
    'cdn-vs-direct-server': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'CDNs cache content at edge locations; direct server delivery serves all requests from origin. Metrics cover latency, bandwidth, and cost.',
        table: {
          headers: ['Metric', 'CDN', 'Direct Server', 'Notes'],
          rows: [
            ['Latency (cached)', '10–50 ms', '50–500 ms', 'CDN serves from nearest PoP'],
            ['Latency (uncached)', '50–200 ms', 'Same as origin', 'CDN fetches from origin once'],
            ['Cache Hit Rate', '80–95%', 'N/A', 'Static assets highly cacheable'],
            ['Origin Load Reduction', '70–90%', '0%', 'CDN absorbs most traffic'],
            ['Bandwidth Cost', '$0.01–$0.10/GB', '$0.05–$0.50/GB', 'CDN egress often cheaper'],
            ['Global PoPs', '100–300+', '1–10 origins', 'Cloudflare: 300+ cities'],
            ['DDoS Protection', 'Built-in', 'Manual / WAF', 'CDNs absorb large attacks'],
            ['SSL/TLS Termination', 'At edge', 'At origin', 'CDN reduces origin crypto load'],
            ['Dynamic Content', 'Limited / with edge compute', 'Full control', 'CDN edge functions enable dynamic'],
            ['Time to First Byte', 'Fast for cache hits', 'Depends on origin distance', 'CDN improves TTFB globally']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'CDN vs direct server under traffic spikes:',
        table: {
          headers: ['Load Factor', 'CDN', 'Direct Server', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Fast cache hits', 'Normal origin latency', 'CDN already helps'],
            ['2× Load', 'Hit rate stable', 'Origin CPU/bandwidth rises', 'CDN protects origin'],
            ['5× Load', 'Absorbs spike', 'Origin may struggle', 'CDN scales automatically'],
            ['10× Load', 'DDoS mode possible', 'Origin likely down', 'CDN is critical for survival'],
            ['Cache Miss Storm', 'Origin spike once', 'Origin spike every request', 'CDN shields after first fetch'],
            ['Dynamic Burst', 'May pass through', 'Origin handles directly', 'Use edge compute or origin scaling']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Evolution from direct serving to CDN-centric delivery:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Direct server. All assets served from origin. Simple.',
          '<strong>Stage 2: 1K–10K users</strong> — Static assets on CDN. Origin still serves HTML/API.',
          '<strong>Stage 3: 10K–100K users</strong> — Full-site CDN. Cache HTML with short TTL. API responses cached selectively.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-CDN strategy. Geographic load balancing. Origin shield.',
          '<strong>Stage 5: 1M–10M users</strong> — Edge compute (Cloudflare Workers, Lambda@Edge). Personalization at edge. Cache dynamic content.',
          '<strong>Stage 6: 10M+ users</strong> — Origin becomes API-only. All user-facing content at edge. Real-time purging. Tiered cache architecture.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'CDN and origin roles per tier.',
        list: [
          '<strong>Client Tier:</strong> Browser requests assets. Cache-Control headers determine local caching.',
          '<strong>CDN Tier:</strong> PoPs cache and serve static/dynamic content. DDoS protection. SSL termination. Geo-routing.',
          '<strong>Edge Compute Tier:</strong> Run logic at edge: A/B testing, authentication, personalization, request modification.',
          '<strong>Origin Tier:</strong> API servers, dynamic content generation. Protected by CDN; only sees uncached requests.',
          '<strong>Storage Tier:</strong> Origin stores original assets. CDN pulls and caches. S3 + CloudFront common pattern.',
          '<strong>Invalidation Tier:</strong> CDN purge APIs, versioned filenames, Cache-Control headers. Keep content fresh.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'When to use CDN vs direct server:',
        table: {
          headers: ['Content Type', 'Delivery', 'Why', 'Example'],
          rows: [
            ['Static assets', 'CDN', 'Cacheable, global', 'Images, JS, CSS'],
            ['Dynamic API', 'Direct / edge compute', 'Personalized, low cacheability', 'User profile API'],
            ['Streaming video', 'CDN', 'Bandwidth intensive', 'Netflix, YouTube'],
            ['Small internal app', 'Direct server', 'No global users, simple', 'Internal dashboard'],
            ['Downloadable files', 'CDN', 'Large bandwidth savings', 'Software installers'],
            ['Personalized HTML', 'Edge compute + CDN', 'Cache per segment', 'E-commerce homepage'],
            ['Real-time data', 'Direct / WebSocket', 'Not cacheable', 'Live scores']
          ]
        }
      }
    ],
    'serverless-vs-traditional': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Serverless scales automatically and bills per use; traditional servers require provisioning and management. Metrics compare AWS Lambda, Cloud Run, EC2, and Kubernetes.',
        table: {
          headers: ['Metric', 'Serverless', 'Traditional', 'Notes'],
          rows: [
            ['Cold Start Latency', '100 ms–2 s', 'None', 'Cold starts are the main serverless concern'],
            ['Warm Request Latency', '1–50 ms', '1–10 ms', 'Similar once warm'],
            ['Scale-out Time', 'Milliseconds–seconds', 'Minutes', 'Serverless instant; traditional needs provisioning'],
            ['Scale-to-Zero', 'Yes', 'No', 'Serverless saves idle cost'],
            ['Idle Cost', '$0', 'Full instance cost', 'Traditional wastes money at low utilization'],
            ['Max Execution Time', '15 min (Lambda)', 'Unlimited', 'Long jobs need traditional or containers'],
            ['Memory Limit', '128 MB–10 GB', 'Limited by hardware', 'Serverless has caps'],
            ['Concurrency Limit', '1,000–tens of thousands', 'Depends on capacity', 'AWS Lambda default 1,000 concurrent'],
            ['Operational Overhead', 'Very low', 'Medium–high', 'Serverless abstracts servers'],
            ['Cost per Request', '$0.20 per 1M', 'Amortized instance cost', 'Serverless cheap at low scale; can exceed at high scale']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Serverless vs traditional under load changes:',
        table: {
          headers: ['Load Factor', 'Serverless', 'Traditional', 'What It Means'],
          rows: [
            ['1× (Low)', 'Cold starts possible', 'Idle capacity', 'Serverless cheap; traditional over-provisioned'],
            ['2× Load', 'Scales instantly', 'Utilization rises', 'Serverless smooth'],
            ['5× Load', 'Concurrency limits may hit', 'Auto-scaling kicks in', 'Serverless may need limit increase'],
            ['10× Load', 'Cold start storm', 'Scale-out takes minutes', 'Both need pre-warming / faster scaling'],
            ['Sustained High Load', 'Cost can exceed traditional', 'Efficient at steady high load', 'Traditional wins on unit cost'],
            ['Burst Traffic', 'Excellent', 'Slow unless pre-warmed', 'Serverless ideal for bursts']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Evolution from serverless to traditional and hybrid:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Serverless functions for simple backends. No ops. Pay per request.',
          '<strong>Stage 2: 1K–10K users</strong> — Serverless + managed database. Cold starts addressed with provisioned concurrency.',
          '<strong>Stage 3: 10K–100K users</strong> — Some workloads move to containers (ECS/EKS/GKE) for long-running or stateful needs. API gateway in front.',
          '<strong>Stage 4: 100K–1M users</strong> — Hybrid: serverless for bursty/event-driven; Kubernetes for steady-state services.',
          '<strong>Stage 5: 1M–10M users</strong> — Cost optimization drives workload placement. Reserved instances for baseline; serverless for peaks.',
          '<strong>Stage 6: 10M+ users</strong> — Workload-specific infrastructure: bare metal for databases, serverless for edge, Kubernetes for microservices, specialized hardware for ML.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Serverless and traditional across infrastructure tiers.',
        list: [
          '<strong>Compute Tier:</strong> Serverless functions for event handlers. Traditional VMs/containers for long-running services.',
          '<strong>API Tier:</strong> Serverless API endpoints via API Gateway + Lambda. Traditional via load balancer + app servers.',
          '<strong>Queue/Event Tier:</strong> Serverless event sources trigger functions. Traditional workers run continuously.',
          '<strong>Database Tier:</strong> Serverless DBs (DynamoDB on-demand, Aurora Serverless) scale automatically. Traditional provisioned DBs predictable at scale.',
          '<strong>Storage Tier:</strong> Object storage (S3) is serverless by nature. File systems need traditional management.',
          '<strong>Ops Tier:</strong> Serverless reduces patching/scaling work. Traditional needs CI/CD, monitoring, capacity planning.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Serverless vs traditional by workload:',
        table: {
          headers: ['Workload', 'Choice', 'Why', 'Example'],
          rows: [
            ['Spiky HTTP API', 'Serverless', 'Auto-scale, pay per use', 'Webhook receiver'],
            ['Steady-state microservice', 'Traditional / Kubernetes', 'Lower unit cost', 'E-commerce catalog service'],
            ['Event processing', 'Serverless', 'Scales with event rate', 'Image thumbnail generator'],
            ['Long-running batch job', 'Traditional / container', 'Exceeds serverless timeout', 'Nightly ETL'],
            ['Real-time streaming', 'Traditional / managed', 'Consistent low latency', 'Kafka consumers'],
            ['Prototype / MVP', 'Serverless', 'Fastest time to market', 'Startup backend'],
            ['GPU/ML inference', 'Traditional / specialized', 'Hardware access needed', 'LLM serving']
          ]
        }
      }
    ],
    'stateful-vs-stateless': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Stateful services retain client/session data; stateless services treat each request independently. Metrics cover scaling, failover, and complexity.',
        table: {
          headers: ['Metric', 'Stateful', 'Stateless', 'Notes'],
          rows: [
            ['Scale-out Difficulty', 'Hard', 'Easy', 'State must move or partition'],
            ['Failover Time', 'Seconds–minutes', 'Instant', 'Stateless: any instance can serve'],
            ['Session Affinity Needed', 'Yes', 'No', 'Sticky sessions complicate LB'],
            ['Memory per Instance', 'Higher (holds state)', 'Lower', 'Stateful stores data in memory/disk'],
            ['Data Loss Risk', 'Higher', 'Lower', 'Stateful instance failure loses state'],
            ['Horizontal Scaling', 'Partition by key', 'Add instances freely', 'Stateful needs sharding'],
            ['Operational Complexity', 'High', 'Low', 'Stateful needs backup, replication, migration'],
            ['Latency for Hot State', 'Very low', 'Moderate (fetch from store)', 'In-memory state is fastest'],
            ['Cost at Scale', 'Higher (specialized)', 'Lower (commodity)', 'Stateless uses smaller instances'],
            ['Examples', 'Game servers, WebSocket, databases', 'REST APIs, CDNs, functions', 'Most web apps prefer stateless']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Stateful vs stateless behavior under load:',
        table: {
          headers: ['Load Factor', 'Stateful', 'Stateless', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Fast local state', 'Fetch state from store', 'Stateful faster for hot data'],
            ['2× Load', 'Need to partition state', 'Add instances', 'Stateless scales easier'],
            ['5× Load', 'Shard carefully', 'Linear scale', 'Stateful complexity grows'],
            ['10× Load', 'Rebalancing state', 'Auto-scale', 'Stateful needs planned migration'],
            ['Instance Failure', 'State loss or failover', 'No impact', 'Stateless resilient'],
            ['Rolling Update', 'Hard (state migration)', 'Easy', 'Stateless enables continuous deploy']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Evolution from stateful monolith to stateless services:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Stateful monolith. Sessions in memory. Simple.',
          '<strong>Stage 2: 1K–10K users</strong> — Externalize sessions to Redis. App becomes stateless. Sticky sessions removed.',
          '<strong>Stage 3: 10K–100K users</strong> — Stateless microservices. Shared state in database/cache. JWT for auth.',
          '<strong>Stage 4: 100K–1M users</strong> — Some stateful services remain (WebSocket, real-time). Partitioned by user_id.',
          '<strong>Stage 5: 1M–10M users</strong> — Stateless default. Stateful services isolated and specialized. Event sourcing for audit.',
          '<strong>Stage 6: 10M+ users</strong> — Stateless at edge. Stateful in databases and specialized platforms. Cell-based isolation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'State placement across infrastructure tiers.',
        list: [
          '<strong>Client Tier:</strong> Stateless clients use tokens. Stateful clients keep local data (mobile apps).',
          '<strong>API Tier:</strong> Stateless APIs scale horizontally. Stateful APIs need sticky routing or shared state.',
          '<strong>Session Tier:</strong> External session store (Redis) keeps APIs stateless. Sticky sessions only when unavoidable.',
          '<strong>Cache Tier:</strong> Cache is stateful by nature but externalized. Stateless apps fetch from cache.',
          '<strong>Database Tier:</strong> Database is the canonical state. Stateless apps persist here.',
          '<strong>Real-Time Tier:</strong> WebSocket/game servers are inherently stateful. Partition by user/room.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Stateful vs stateless by component:',
        table: {
          headers: ['Component', 'Choice', 'Why', 'Example'],
          rows: [
            ['REST API', 'Stateless', 'Scales horizontally', 'User service'],
            ['WebSocket chat server', 'Stateful', 'Connection state needed', 'Slack server'],
            ['Shopping cart', 'Stateless + external store', 'Resilient and scalable', 'Amazon cart'],
            ['Game server', 'Stateful', 'Game state in memory', 'MMORPG shard'],
            ['Authentication service', 'Stateless', 'JWT avoids session state', 'OAuth2 provider'],
            ['Stream processing', 'Stateful (partitioned)', 'Windowed state per partition', 'Flink job'],
            ['CDN edge function', 'Stateless', 'Short-lived, global', 'Cloudflare Worker']
          ]
        }
      }
    ],
    'token-bucket-vs-leaky-bucket': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Token bucket and leaky bucket are rate-limiting algorithms. Token bucket allows bursts; leaky bucket smooths traffic.',
        table: {
          headers: ['Metric', 'Token Bucket', 'Leaky Bucket', 'Notes'],
          rows: [
            ['Burst Handling', 'Allows bursts up to bucket size', 'Smooths bursts', 'Token bucket better for bursty clients'],
            ['Average Rate', 'Controlled by refill rate', 'Controlled by leak rate', 'Both control long-term rate'],
            ['Implementation Complexity', 'Low', 'Low–medium', 'Both simple in Redis'],
            ['Memory per Key', 'Low (tokens + last refill)', 'Low (queue or counter)', 'Redis stores small counters'],
            ['Fairness', 'Can be unfair to new clients', 'Smoother distribution', 'Leaky bucket more egalitarian'],
            ['Use Case', 'API rate limiting', 'Traffic shaping', 'Token bucket for APIs; leaky for networks'],
            ['Refill/Leak Interval', 'Per second/minute', 'Continuous / fixed interval', 'Token often periodic; leaky often continuous'],
            ['Bucket Capacity', 'Determines max burst', 'Queue size determines buffer', 'Tune to client needs'],
            ['Latency Overhead', '< 1 ms', '< 1 ms', 'Redis INCR/EXPIRE or Lua script'],
            ['Examples', 'AWS API Gateway, Stripe', 'Network QoS, queues', 'Both widely used']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Rate limiter behavior under traffic:',
        table: {
          headers: ['Load Factor', 'Token Bucket', 'Leaky Bucket', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Most requests pass', 'Steady leak', 'Normal operation'],
            ['2× Sustained', 'Bucket drains; half rejected', 'Queue builds; delayed', 'Both limit rate'],
            ['Burst Traffic', 'Burst passes if tokens available', 'Burst buffered then smoothed', 'Token bucket friendlier to bursts'],
            ['10× Load', 'Rapid rejection after burst', 'Queue overflow → rejection', 'Both protect backend'],
            ['Distributed Sync', 'Refill clock drift matters', 'Leak rate per node matters', 'Use Redis or consensus'],
            ['Low-Bandwidth Client', 'Can save tokens', 'Steady rate enforced', 'Token bucket more flexible']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Rate limiter evolution:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No rate limiting. Single app instance.',
          '<strong>Stage 2: 1K–10K users</strong> — In-memory token bucket per instance. Simple but inconsistent across instances.',
          '<strong>Stage 3: 10K–100K users</strong> — Centralized Redis token bucket. Lua scripts for atomicity. Per-user and per-API limits.',
          '<strong>Stage 4: 100K–1M users</strong> — Distributed token bucket with Redis Cluster. Sliding window log for accuracy.',
          '<strong>Stage 5: 1M–10M users</strong> — Edge rate limiting at CDN. Origin uses token bucket. Hierarchical limits.',
          '<strong>Stage 6: 10M+ users</strong> — Global token bucket with approximate coordination. Leaky bucket for inter-service traffic shaping. ML-based adaptive limits.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Token and leaky bucket placement.',
        list: [
          '<strong>Client Tier:</strong> SDKs may implement client-side token bucket to avoid being throttled.',
          '<strong>Edge Tier:</strong> CDN/WAF enforces coarse rate limits. Token bucket per IP.',
          '<strong>API Gateway Tier:</strong> Per-key and per-user token buckets. Returns 429 with retry-after.',
          '<strong>Service Mesh Tier:</strong> Leaky bucket shapes traffic between services. Prevents thundering herd.',
          '<strong>Queue Tier:</strong> Leaky bucket controls consumption rate. Smooths downstream load.',
          '<strong>Database Tier:</strong> Connection pool rate limiting acts like token bucket for DB connections.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Token bucket vs leaky bucket by use case:',
        table: {
          headers: ['Scenario', 'Algorithm', 'Why', 'Example'],
          rows: [
            ['Public API per-user limit', 'Token bucket', 'Allows reasonable bursts', 'GitHub API'],
            ['Network traffic shaping', 'Leaky bucket', 'Smooth output rate', 'QoS'],
            ['DDoS protection', 'Token bucket', 'Drop excess immediately', 'WAF'],
            ['Queue consumer throttling', 'Leaky bucket', 'Smooth consumption', 'Worker pool'],
            ['Mobile app API', 'Token bucket', 'Tolerates bursty mobile usage', 'Uber API'],
            ['Microservice egress', 'Leaky bucket', 'Protect downstream from spikes', 'Service mesh'],
            ['Login endpoint', 'Token bucket', 'Strict per-IP limit', 'Auth service']
          ]
        }
      }
    ],
    'read-heavy-vs-write-heavy': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Read-heavy and write-heavy workloads need different architectures. Metrics compare typical ratios and system choices.',
        table: {
          headers: ['Metric', 'Read-Heavy', 'Write-Heavy', 'Notes'],
          rows: [
            ['Read:Write Ratio', '90:10 to 99:1', '10:90 to 1:99', 'Most web apps are read-heavy'],
            ['Primary Bottleneck', 'Read throughput', 'Write throughput / disk I/O', 'Different optimization targets'],
            ['Scaling Strategy', 'Read replicas + cache', 'Sharding + queue + SSD', 'Reads scale horizontally; writes harder'],
            ['Cache Hit Rate', '70–95%', '20–50%', 'Write-heavy data changes too fast to cache'],
            ['Database Choice', 'PostgreSQL + replicas, Redis', 'Cassandra, DynamoDB, Kafka', 'Match DB to access pattern'],
            ['Index Overhead', 'Worth it', 'Expensive', 'Indexes slow writes'],
            ['Replication Lag Tolerance', 'Higher', 'Lower', 'Read-heavy can tolerate stale reads'],
            ['Latency Sensitivity', 'Reads must be fast', 'Writes must be durable', 'Different SLOs'],
            ['Examples', 'News, e-commerce catalog', 'IoT, logging, trading', 'Common patterns'],
            ['Cost Driver', 'Cache and replica size', 'Storage IOPS and write throughput', 'Plan capacity accordingly']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Read-heavy vs write-heavy behavior under load:',
        table: {
          headers: ['Load Factor', 'Read-Heavy', 'Write-Heavy', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Cache serves most reads', 'Write throughput comfortable', 'Both healthy'],
            ['2× Read Load', 'Add replicas / cache', 'No impact', 'Reads scale easily'],
            ['2× Write Load', 'No impact', 'Disk/leader pressure', 'Writes need scale strategy'],
            ['5× Read Load', 'Many replicas or CDN', 'Still OK if reads isolated', 'Cache is key'],
            ['5× Write Load', 'Replication lag grows', 'Sharding or queue needed', 'Writes are bottleneck'],
            ['10× Mixed Load', 'Read path scales; watch cache', 'Partitioning essential', 'Different scale paths']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Scaling journey for read-heavy and write-heavy workloads:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single database handles both reads and writes. No special optimization.',
          '<strong>Stage 2: 1K–10K users</strong> — Read-heavy: add cache. Write-heavy: optimize indexes, batch writes.',
          '<strong>Stage 3: 10K–100K users</strong> — Read-heavy: read replicas + cache. Write-heavy: queue writes, batch inserts, SSD.',
          '<strong>Stage 4: 100K–1M users</strong> — Read-heavy: CDN + many replicas. Write-heavy: sharding by key, time-based partitioning.',
          '<strong>Stage 5: 1M–10M users</strong> — Read-heavy: edge cache, materialized views. Write-heavy: distributed DB, stream processing, columnar ingest.',
          '<strong>Stage 6: 10M+ users</strong> — Read-heavy: global cache + read-only replicas per region. Write-heavy: partitioned event log (Kafka) + distributed store. Separate hot/cold data.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Architecture choices per tier for read-heavy and write-heavy workloads.',
        list: [
          '<strong>Client Tier:</strong> Read-heavy: aggressive client caching. Write-heavy: batch client actions where possible.',
          '<strong>Cache Tier:</strong> Read-heavy: large cache, long TTL. Write-heavy: cache only hot reads, short TTL, write-through invalidation.',
          '<strong>Database Tier:</strong> Read-heavy: replicas, covering indexes, materialized views. Write-heavy: sharding, append-only tables, reduced indexes, SSD.',
          '<strong>Queue Tier:</strong> Read-heavy: minimal. Write-heavy: decouple writes via Kafka/SQS; absorb spikes.',
          '<strong>Storage Tier:</strong> Read-heavy: fast SSD + cache. Write-heavy: high-IOPS SSD, log-structured storage, object storage for archives.',
          '<strong>Analytics Tier:</strong> Read-heavy: pre-aggregate. Write-heavy: stream to OLAP; batch ETL.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Architecture choices by workload pattern:',
        table: {
          headers: ['Scenario', 'Pattern', 'Key Techniques', 'Example'],
          rows: [
            ['News website', 'Read-heavy', 'CDN, cache, read replicas', 'CNN, NYT'],
            ['IoT telemetry', 'Write-heavy', 'Kafka, time-series DB, sharding', 'Sensor platform'],
            ['E-commerce product page', 'Read-heavy', 'CDN, cache, replica DB', 'Amazon product page'],
            ['Order processing', 'Write-heavy', 'Queue, sharded DB, idempotency', 'Amazon checkout'],
            ['Social feed', 'Read-heavy, write bursts', 'Feed cache, fan-out on write', 'Instagram'],
            ['Logging platform', 'Write-heavy', 'Kafka, Elasticsearch, S3 archive', 'Splunk, Datadog'],
            ['User profile', 'Balanced', 'Cache + primary DB', 'Netflix profile']
          ]
        }
      }
    ]
  },
  module11: {
    'url-shortener-overview': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'URL shorteners map long URLs to compact codes. These metrics are drawn from bit.ly, TinyURL, and production link-management platforms.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Short Links Created / Day', '1M–10M', '100M+', 'bit.ly has created 10B+ total links'],
            ['Redirect Requests / Day', '100M–1B', '10B+', 'Read-heavy; 100:1 read:write ratio common'],
            ['Redirect Latency (p99)', '< 50 ms', '< 20 ms', 'Cache hit path; origin lookup adds 5–20 ms'],
            ['Short Code Length', '6–7 chars', '7–8 chars', 'Base62: 6 chars = 57B keys; 7 chars = 3.5T keys'],
            ['Active Users', '1M–10M DAU', '100M+ DAU', 'Enterprise link managers serve large user bases'],
            ['Links per User / Month', '10–100', '1,000+', 'Marketing automation creates many links'],
            ['Storage per Link Row', '100–500 bytes', '1–2 KB with metadata', 'URL, short code, user_id, timestamps, analytics flags'],
            ['Global Availability Target', '99.9%', '99.99%', 'Downtime means broken marketing campaigns'],
            ['Cache Hit Rate for Redirects', '80–95%', '95–99%', 'Hot links dominate traffic'],
            ['Monthly Click Analytics Events', '1B–10B', '100B+', 'Every redirect generates analytics events']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Redirect traffic dominates URL shortener load. The system must remain fast even during viral traffic spikes.',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'p99 < 50 ms', 'Cache serves most redirects', 'Healthy'],
            ['2× Load', 'p99 < 70 ms', 'Cache hit rate stable; backend CPU rises slightly', 'Add cache replicas'],
            ['5× Load', 'p99 100–200 ms', 'Backend DB reads increase; some cache misses', 'Scale read replicas'],
            ['10× Load', 'p99 500 ms+', 'DB saturated; cache stampede risk', 'Add cache capacity, pre-warm'],
            ['Viral Link Burst', 'Spike then recover', 'Single short code gets millions of hits', 'Rate limit or cache aggressively'],
            ['Creation Surge', 'Creation latency rises', 'Unique short-code generation becomes bottleneck', 'Pre-generate code pools']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How a URL shortener evolves from a weekend project to a global link platform:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single web server with SQLite. URL → code mapping in one table. No cache.',
          '<strong>Stage 2: 1K–10K users</strong> — Move to PostgreSQL/MySQL. Add Redis cache for hot redirects. Single short-code generation via DB auto-increment + base62.',
          '<strong>Stage 3: 10K–100K users</strong> — Separate read replicas for redirects. Async analytics ingestion to queue. Pre-generated code pools avoid DB write contention.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-region deployment. CDN for redirect edge caching. Sharded code generation service. Idempotency for link creation retries.',
          '<strong>Stage 5: 1M–10M users</strong> — Global cache with regional replicas. Analytics stream to data warehouse. Custom short codes and branded domains supported.',
          '<strong>Stage 6: 10M+ users</strong> — Edge-first redirects at CDN. Separate hot/cold link storage. ML-based spam/phishing detection. Sub-10 ms p99 for cached redirects.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'URL shortener architecture spans edge caching, code generation, persistent storage, and analytics ingestion.',
        list: [
          '<strong>Client Tier:</strong> Browser or app follows short link. Expects fast redirect (301/302). Mobile apps may preview metadata.',
          '<strong>CDN / Edge Tier:</strong> Caches 301 redirects for hot short codes at edge. Cloudflare Workers can serve redirects without hitting origin.',
          '<strong>API Gateway Tier:</strong> Rate limits link creation. Validates URLs. Routes /create and /:shortCode. Auth for custom domains.',
          '<strong>Application Tier:</strong> Stateless services handle link creation and redirect lookup. Code generation service ensures uniqueness.',
          '<strong>Cache Tier:</strong> Redis stores short-code → long-URL mapping. TTL based on link popularity. Cache-aside pattern.',
          '<strong>Database Tier:</strong> Relational DB (PostgreSQL/MySQL) or NoSQL (DynamoDB/Cassandra) for canonical mapping. Sharded by short-code prefix or hash.',
          '<strong>Analytics / Queue Tier:</strong> Kafka/SQS buffers click events. Aggregators compute counts by geography, device, referrer. Data lake for historical analysis.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Key design choices for URL shorteners:',
        table: {
          headers: ['Scenario', 'Approach', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Code generation', 'DB auto-increment + base62', 'Simple, guaranteed unique', 'Centralized bottleneck', 'TinyURL early design'],
            ['Code generation', 'Pre-generated random pools', 'Scales writes; no contention', 'Wasted keys; collision check needed', 'bit.ly production'],
            ['Custom short codes', 'Application-level uniqueness check', 'Branding', 'Slower; more DB lookups', 't.co, brand.ly'],
            ['Read scaling', 'CDN + Redis cache', 'Sub-50 ms redirects', 'Stale risk on URL update', 'High-traffic campaigns'],
            ['Analytics', 'Async queue + data warehouse', 'Does not slow redirects', 'Eventual aggregation', 'Marketing dashboards'],
            ['Global deployment', 'Multi-region read replicas', 'Low latency everywhere', 'Write conflict complexity', 'Enterprise URL shortener']
          ]
        }
      }
    ],
    'url-shortener-encoding': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Encoding converts a unique integer or random value into a short, URL-safe code. The choice of alphabet and length determines keyspace and collision risk.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Alphabet', 'Base62 (A-Z, a-z, 0-9)', 'Base64 or custom', 'Base62 avoids ambiguous chars and is URL-safe'],
            ['Keyspace (6 chars base62)', '56.8 billion', 'N/A', '62^6 = ~57B unique codes'],
            ['Keyspace (7 chars base62)', '3.5 trillion', 'N/A', '62^7 = ~3.5T codes'],
            ['Keyspace (8 chars base62)', '218 trillion', 'N/A', '62^8 = ~218T codes'],
            ['Encoding Latency', '< 1 µs', '< 100 ns', 'Integer-to-string conversion is trivial'],
            ['Collision Probability (random 7-char)', '~1.4% at 100M keys', '< 0.01% with 8+ chars', 'Birthday problem: collisions scale with sqrt(keyspace)'],
            ['Custom Code Length', '4–10 chars', 'Up to 32 chars', 'User-defined branded codes can be longer'],
            ['Sequential vs Random', 'Sequential: dense', 'Random: scattered', 'Sequential reveals creation order; random is opaque'],
            ['Uniqueness Check Latency', '1–5 ms', '< 1 ms (cache)', 'DB lookup or bloom filter checks new code'],
            ['Reserved Codes', '1–5% of keyspace', '10%+', 'Block profanity, trademark, and common words']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Encoding performance under high-volume code generation:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '< 1 ms', 'Single encoder serves requests', 'Healthy'],
            ['2× Load', '1–2 ms', 'CPU usage rises; still fast', 'Scale encoder service horizontally'],
            ['5× Load', '2–5 ms', 'Uniqueness checks become visible', 'Add bloom filter for fast negative checks'],
            ['10× Load', '5–20 ms', 'DB contention on uniqueness checks', 'Pre-generate and cache code pools'],
            ['Collision Storm', 'Retries increase', 'Random generator produces duplicates', 'Increase code length or use counters'],
            ['Custom Code Rush', '10–100 ms', 'High collision rate on short words', 'Reserve dictionary; fallback to random']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How short-code encoding scales as link creation volume grows:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Counter in DB; encode row_id with base62. Simple, sequential, unique.',
          '<strong>Stage 2: 1K–10K users</strong> — Random 7-char base62 with uniqueness check. Acceptable collision probability.',
          '<strong>Stage 3: 10K–100K users</strong> — Pre-generate random code pools in Redis. Workers claim batches of 1,000 codes.',
          '<strong>Stage 4: 100K–1M users</strong> — Separate encoding service. Bloom filter guards against collisions. Multi-datacenter code pools partitioned by range.',
          '<strong>Stage 5: 1M–10M users</strong> — Hybrid encoding: counter-based for anonymous links, random pools for custom/secure links.',
          '<strong>Stage 6: 10M+ users</strong> — Distributed counters (Snowflake-style) embedded in code. Cryptographically secure random for premium codes. Automated keyspace monitoring alerts when expansion needed.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Encoding components and where they live in the architecture.',
        list: [
          '<strong>Client Tier:</strong> User submits long URL and optional custom alias. Client validates URL format before sending.',
          '<strong>API Gateway Tier:</strong> Rate limits creation. Rejects malformed URLs. Routes to encoding service.',
          '<strong>Encoding Service Tier:</strong> Stateless workers convert IDs to base62 or generate random codes. Idempotent requests carry client-generated idempotency keys.',
          '<strong>Uniqueness Check Tier:</strong> Bloom filter for fast collision avoidance. Database is authoritative source of truth.',
          '<strong>Counter / ID Generation Tier:</strong> Distributed counter (DB sequence, Snowflake, Redis INCR) supplies unique integers for sequential encoding.',
          '<strong>Cache Tier:</strong> Pre-generated code pools stored in Redis. Workers atomically pop codes to reduce DB pressure.',
          '<strong>Database Tier:</strong> Canonical short-code → URL table enforces uniqueness at write time.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Choosing an encoding strategy for different requirements:',
        table: {
          headers: ['Requirement', 'Encoding', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Maximum simplicity', 'DB auto-increment + base62', 'Unique, ordered, tiny', 'Predictable, single-writer bottleneck', 'Internal tool'],
            ['Opaque codes', 'Random base62', 'Unpredictable URLs', 'Collision checks needed', 'Public shortener'],
            ['Branded codes', 'Custom dictionary', 'Marketing value', 'Scarcity, collisions', 'Campaign links'],
            ['Very high volume', 'Pre-generated pools', 'No live encoding contention', 'Wasted/unused codes', 'bit.ly scale'],
            ['Global uniqueness', 'Snowflake-style embedded', 'Distributed, ordered', 'Longer codes', 'Multi-region system'],
            ['Security-sensitive', 'Cryptographic random', 'Un-guessable', 'Slower generation', 'Private share links']
          ]
        }
      }
    ],
    'url-shortener-storage': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Storage for a URL shortener must handle a high write rate of small records and an enormous read rate of redirects.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Rows per Shard', '10M–100M', '1B+', 'Shard by short-code hash or range'],
            ['Storage per Row', '100–500 bytes', '1–2 KB with metadata', 'Long URL dominates size; metadata adds overhead'],
            ['Daily Write Volume', '1M–10M rows', '100M+ rows', 'Link creation rate'],
            ['Daily Read Volume', '100M–1B rows', '10B+ rows', 'Redirect lookups'],
            ['Read:Write Ratio', '50:1', '1000:1', 'Heavily read-biased'],
            ['DB Write Throughput per Node', '1K–5K writes/s', '10K+ writes/s', 'SSD-backed relational or NoSQL'],
            ['DB Read Throughput per Node', '10K–50K reads/s', '100K+ reads/s', 'With proper indexes and replicas'],
            ['Replication Lag', '< 1 s', '< 100 ms', 'Sync critical; async acceptable for analytics'],
            ['Backup Size Growth', '1–10 GB/day', '100 GB+/day', 'Incremental backups; archive cold links'],
            ['Index Size vs Data Size', '10–30%', '20–50%', 'Primary key on short_code is compact']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Storage behavior as link creation and redirect traffic grow:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Read: 1–5 ms; Write: 5–20 ms', 'Single primary + replicas healthy', 'Healthy'],
            ['2× Read Load', 'Read stable', 'Replicas absorb traffic', 'Add replicas'],
            ['5× Read Load', 'Read: 10–50 ms', 'Replica CPU high; cache miss rate rises', 'Scale cache and replicas'],
            ['2× Write Load', 'Write: +30–50%', 'Primary DB pressure', 'Consider code pool pre-generation'],
            ['10× Write Load', 'Write: 100 ms+', 'Primary becomes bottleneck', 'Shard writes or use NoSQL'],
            ['Hot Shard', 'Latency spike on shard', 'Uneven short-code distribution', 'Rehash or use consistent hashing']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Storage architecture evolution for a URL shortener:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single SQL table: short_code PK, long_url, created_at. No sharding.',
          '<strong>Stage 2: 1K–10K users</strong> — Add read replica for redirects. Index on short_code. Backups enabled.',
          '<strong>Stage 3: 10K–100K users</strong> — Shard by short_code hash (e.g., first 2 chars) across 16–64 DB instances. Async analytics writes.',
          '<strong>Stage 4: 100K–1M users</strong> — Separate hot link cache (Redis) + cold link store (NoSQL/S3). Multi-region read replicas.',
          '<strong>Stage 5: 1M–10M users</strong> — Tiered storage: in-memory for viral links, SSD for recent, object storage for old. Automated archival.',
          '<strong>Stage 6: 10M+ users</strong> — Global distributed store (CockroachDB/Spanner/Yugabyte) for strong consistency where needed. Edge-local read replicas. Content-addressed archival.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Storage responsibilities by tier.',
        list: [
          '<strong>Client Tier:</strong> No persistent storage. Local browser cache may remember redirects.',
          '<strong>CDN / Edge Tier:</strong> Edge KV stores (Cloudflare Workers KV) cache redirect mappings close to users.',
          '<strong>Cache Tier:</strong> Redis/Memcached holds hot short-code → URL mappings. Cache-aside with TTL.',
          '<strong>Application Tier:</strong> Writes new links. Reads through cache; updates cache on miss. Handles idempotency.',
          '<strong>Database Tier:</strong> Canonical store. Relational for strong consistency; NoSQL for massive scale. Sharded by short-code.',
          '<strong>Object Storage Tier:</strong> Archive old/analytics data. Cheap long-term retention for click logs.',
          '<strong>Queue Tier:</strong> Buffers analytics writes and cross-region replication events. Prevents storage write spikes.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Storage technology choices for URL shorteners:',
        table: {
          headers: ['Scenario', 'Storage', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Small scale', 'PostgreSQL/MySQL', 'ACID, simple ops', 'Write bottleneck at scale', 'Startup'],
            ['High read scale', 'SQL + Redis cache', 'Fast redirects, strong consistency', 'Cache invalidation complexity', 'Mid-size shortener'],
            ['Massive scale', 'DynamoDB/Cassandra', 'Horizontal write scale', 'Eventual consistency', 'bit.ly scale'],
            ['Global strong consistency', 'Spanner/CockroachDB', 'Global transactions', 'Higher latency/cost', 'Enterprise'],
            ['Cost archive', 'S3 + metadata index', 'Cheap long-term storage', 'Higher read latency', 'Old link analytics'],
            ['Edge redirects', 'Cloudflare KV', 'Sub-10 ms global reads', 'Limited query ability', 'Edge-first shortener']
          ]
        }
      }
    ],
    'url-shortener-cache': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Caching is the most important performance layer for URL shorteners because redirects are extremely read-heavy and latency-sensitive.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Cache Hit Rate', '80–95%', '95–99.5%', 'Pareto distribution: few links drive most traffic'],
            ['Redirect Latency (cache hit)', '1–5 ms', '< 1 ms', 'Redis/Memcached in same DC'],
            ['Redirect Latency (cache miss)', '5–20 ms', '10–50 ms', 'DB lookup + cache write'],
            ['Cache Size per Node', '10–100 GB', '100 GB–1 TB', 'Redis node capacity; cluster for larger'],
            ['Hot Link TTL', '1–24 hours', 'Days', 'Popular campaign links stay hot'],
            ['Cold Link TTL', 'Minutes–hours', 'None', 'One-hit links do not need long cache'],
            ['Eviction Policy', 'LRU / LFU', 'Adaptive', 'LFU better for viral link bursts'],
            ['Redis Ops/sec per Node', '100K+', '1M+', 'Single Redis instance handles massive redirect load'],
            ['Cache Stampede Protection', 'Lock + single flight', 'Probabilistic early refresh', 'Prevents thundering herd on cache miss'],
            ['CDN Redirect Cache Hit Rate', '90–99%', '99%+', 'Edge PoPs absorb global redirect traffic']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Cache behavior as redirect volume and link popularity distribution change:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'p99 < 10 ms', 'High hit rate', 'Healthy'],
            ['2× Load', 'p99 < 15 ms', 'Hit rate stable; CPU rises', 'Scale cache cluster'],
            ['5× Load', 'p99 20–50 ms', 'Some eviction pressure', 'Add nodes; tune TTL'],
            ['10× Load', 'p99 100 ms+', 'Cache stampede risk', 'Implement single-flight / circuit breaker'],
            ['Viral Link', 'Spike then plateau', 'Single key becomes extremely hot', 'Replicate hot key; CDN edge cache'],
            ['Cache Failure', 'DB read spike', 'Redirects slow 10×', 'Graceful degradation; failover replica']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Cache architecture evolution for redirects:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No cache. Every redirect hits DB.',
          '<strong>Stage 2: 1K–10K users</strong> — Local in-memory cache in app server. Simple but not shared across instances.',
          '<strong>Stage 3: 10K–100K users</strong> — Centralized Redis cache. Cache-aside pattern. TTL 1 hour default.',
          '<strong>Stage 4: 100K–1M users</strong> — Redis Cluster with replication. LFU eviction. Single-flight on cache miss. CDN caches 301 redirects.',
          '<strong>Stage 5: 1M–10M users</strong> — Multi-tier cache: CDN edge → regional Redis → origin DB. Hot-link detection extends TTL.',
          '<strong>Stage 6: 10M+ users</strong> — Edge-first caching with programmable CDNs. Predictive pre-warming for anticipated viral links. Content-addressed cache invalidation.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Cache placement and responsibilities across tiers.',
        list: [
          '<strong>Client Tier:</strong> Browser cache remembers 301/302 redirects. Cache-Control headers control client-side TTL.',
          '<strong>CDN / Edge Tier:</strong> Caches HTTP 301 redirects. Edge KV stores mapping locally. Invalidation via purge API or versioned codes.',
          '<strong>API Gateway Tier:</strong> May cache common redirect responses. Enforces rate limits to protect cache.',
          '<strong>Application Tier:</strong> Implements cache-aside logic. On miss, reads DB and writes cache. Handles single-flight.',
          '<strong>Cache Tier:</strong> Redis/Memcached cluster. Stores short-code → long URL. Monitors hit rate and eviction.',
          '<strong>Database Tier:</strong> Source of truth. Used on cache miss. Read replicas scale DB-side reads.',
          '<strong>Analytics Tier:</strong> Tracks cache hits/misses. Identifies hot links for TTL tuning.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Caching strategy decisions:',
        table: {
          headers: ['Scenario', 'Strategy', 'Pros', 'Cons', 'Example'],
          rows: [
            ['General redirects', 'Redis cache-aside', 'Fast, flexible', 'Invalidation complexity', 'Default'],
            ['Global hot links', 'CDN 301 cache', 'Massive offload', 'TTL limited', 'Viral campaigns'],
            ['Predictable hot links', 'Pre-warm cache', 'No cold start', 'Wasted cache for misses', 'Planned product launches'],
            ['Long-tail links', 'Short TTL or no cache', 'Saves memory', 'More DB reads', 'Rare personal links'],
            ['Real-time updates', 'Active invalidation', 'Freshness guaranteed', 'More complex', 'Blocked/malicious links'],
            ['Cost-sensitive', 'CDN-only caching', 'Cheaper than Redis cluster', 'Less control', 'Small global shortener']
          ]
        }
      }
    ],
    'url-shortener-analytics': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Analytics turns every redirect into an event. At scale, this creates a massive write stream and requires careful aggregation architecture.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Analytics Events / Day', '100M–1B', '100B+', 'One event per redirect plus metadata'],
            ['Events per Second (peak)', '10K–100K', '10M+', 'Viral links create huge spikes'],
            ['Event Payload Size', '100–500 bytes', '1–2 KB', 'URL, referrer, user-agent, geo, timestamp'],
            ['Real-time Aggregation Latency', '1–5 minutes', '10–30 seconds', 'Near-real-time dashboards'],
            ['Batch Aggregation Latency', 'Hours', 'Minutes', 'Daily/weekly reports'],
            ['Storage Growth', '10–100 GB/day', '10 TB+/day', 'Raw events dominate'],
            ['Retention Period', '90 days–1 year', 'Years in cold storage', 'Hot data kept short-term'],
            ['Distinct Links Queried', '1M–10M', '1B+', 'Top-k and per-link drilldowns'],
            ['Aggregation Query Latency', '100 ms–1 s', '< 100 ms', 'Pre-aggregated counters vs ad-hoc scans'],
            ['Click Fraud Detection Latency', 'Minutes', 'Seconds', 'ML or heuristic bot filtering']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Analytics pipeline behavior under redirect traffic:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Dashboard < 1 s', 'Queue drains quickly', 'Healthy'],
            ['2× Load', 'Dashboard 1–2 s', 'Queue depth stable', 'Scale consumers'],
            ['5× Load', 'Dashboard 2–5 s', 'Aggregation lag grows', 'Add Flink/Spark workers'],
            ['10× Load', 'Dashboard 5–30 s', 'Queue backlog', 'Scale horizontally; sample if needed'],
            ['Viral Event Burst', 'Lag spikes then recovers', 'Single link drives millions of events', 'Isolate hot link counters'],
            ['Ad-hoc Query', 'Seconds–minutes', 'Full table scans', 'Use pre-aggregates or data warehouse']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Analytics pipeline evolution:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No analytics or simple DB counters incremented synchronously on redirect.',
          '<strong>Stage 2: 1K–10K users</strong> — Async queue (RabbitMQ/SQS) buffers click events. Worker increments counters in DB.',
          '<strong>Stage 3: 10K–100K users</strong> — Stream processing (Kafka + Flink/Spark Streaming) aggregates events. Time-windowed counts.',
          '<strong>Stage 4: 100K–1M users</strong> — Separate real-time and batch pipelines. Druid/ClickHouse for fast dashboards. Data lake for raw logs.',
          '<strong>Stage 5: 1M–10M users</strong> — Per-link counter sharding. Bot filtering. Real-time anomaly detection. Data retention policies.',
          '<strong>Stage 6: 10M+ users</strong> — Global event ingestion. Edge aggregation reduces cross-region traffic. ML models predict viral links and pre-scale.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Analytics pipeline tiers.',
        list: [
          '<strong>Client Tier:</strong> Browser sends redirect request; user-agent and referrer headers carry analytics signals.',
          '<strong>Edge Tier:</strong> Edge logs events locally and batches them to central pipeline. Reduces origin write load.',
          '<strong>Application Tier:</strong> Emits structured click events to queue. Does not block redirect on analytics write.',
          '<strong>Queue Tier:</strong> Kafka/Kinesis/SQS buffers high-volume events. Durable, ordered, scalable.',
          '<strong>Stream Processing Tier:</strong> Flink/Spark Streaming/Storm computes real-time aggregates: clicks by link, geo, device, referrer.',
          '<strong>Data Warehouse Tier:</strong> Snowflake/BigQuery/ClickHouse stores historical events. Powers dashboards and ad-hoc queries.',
          '<strong>Data Lake Tier:</strong> S3/GCS archives raw events long-term. Used for ML training and compliance.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Analytics architecture decisions:',
        table: {
          headers: ['Scenario', 'Approach', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Simple counts', 'DB counter table', 'Easy to query', 'Does not scale', 'Tiny shortener'],
            ['Real-time dashboards', 'Kafka + stream processor', 'Low latency aggregates', 'Operational complexity', 'Campaign tracking'],
            ['Historical analysis', 'Data warehouse + data lake', 'Rich querying', 'Higher latency', 'Yearly reports'],
            ['Cost-sensitive', 'Sample events', 'Massive cost reduction', 'Less accuracy', 'Telemetry at scale'],
            ['Bot filtering', 'ML/heuristic filter', 'Cleaner metrics', 'Adds processing latency', 'Fraud detection'],
            ['Global low latency', 'Edge aggregation', 'Reduced central load', 'Complex consistency', 'Multi-region analytics']
          ]
        }
      }
    ]
  },
  module12: {
    'chat-overview': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Chat systems connect billions of users in real time. These metrics reflect WhatsApp, Slack, Discord, Telegram, and WeChat production scale.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Daily Active Users', '1M–10M', '1B+ (WhatsApp 2B+)', 'DAU drives connection and message load'],
            ['Messages per Day', '10M–100M', '100B+ (WhatsApp)', 'Peak hours often 2–3× average'],
            ['Messages per Second (peak)', '10K–100K', '10M+', 'Includes text, images, reactions, edits'],
            ['One-to-One Chats', '70–80% of total', '60–70%', 'Majority of conversations are private'],
            ['Group Chat Members', 'Up to 1,024', 'Up to 200,000 (Telegram)', 'Group size changes fan-out dramatically'],
            ['Message Delivery Latency (p99)', '< 200 ms', '< 100 ms', 'End-to-end within same region'],
            ['Concurrent Connections per Server', '10K–100K', '1M+', 'Depends on language/runtime and protocol'],
            ['Media Message Ratio', '20–40%', '50%+', 'Images, video, audio, files'],
            ['Presence Status Updates / Sec', '100K–1M', '10M+', 'Online/typing/last-seen fan-out'],
            ['Global Regions', '2–5', '10+', 'Multi-region for latency and compliance']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Chat behavior as user count and message rate grow:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'p99 < 100 ms', 'Messages delivered smoothly', 'Healthy'],
            ['2× Load', 'p99 < 150 ms', 'Connection pools warm', 'Add gateway capacity'],
            ['5× Load', 'p99 200–500 ms', 'Presence fan-out pressure', 'Scale presence service'],
            ['10× Load', 'p99 1 s+', 'Message queue backlog', 'Shard by conversation or region'],
            ['Viral Group Message', 'Latency spike in group', 'One message fans out to 100K+ members', 'Special large-group path needed'],
            ['Connection Storm', 'Reconnect spikes', 'Millions reconnect after outage', 'Backoff and staggered reconnect']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'How a chat platform evolves from a small app to a global messaging service:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single server with WebSocket. Messages stored in SQL DB. No presence or read receipts.',
          '<strong>Stage 2: 1K–10K users</strong> — Separate WebSocket gateway. Redis for session state. Simple fan-out in app server.',
          '<strong>Stage 3: 10K–100K users</strong> — Message queue (Kafka/RabbitMQ) for async delivery. Presence service. Read receipts.',
          '<strong>Stage 4: 100K–1M users</strong> — Sharded by conversation/user_id. Multi-region gateways. Separate media storage. Push notification service.',
          '<strong>Stage 5: 1M–10M users</strong> — Optimized fan-out (write-time fan-out for small groups, read-time for large channels). Edge presence. E2E encryption optional.',
          '<strong>Stage 6: 10M+ users</strong> — Global mesh. Cell-based architecture. Anti-spam/anti-abuse ML. Multi-device sync. Sub-100 ms cross-region delivery.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Chat architecture spans real-time connections, messaging, presence, storage, and notifications.',
        list: [
          '<strong>Client Tier:</strong> Mobile/desktop/web apps maintain persistent connection. Local DB caches messages. Handles reconnect and offline queue.',
          '<strong>CDN / Edge Tier:</strong> Delivers media files, avatars, and stickers. Edge caches popular media near users.',
          '<strong>Gateway Tier:</strong> WebSocket/Long-polling gateway manages millions of concurrent connections. Routes messages to correct servers.',
          '<strong>Application Tier:</strong> Stateless chat services handle send/receive, message validation, fan-out logic, and rate limiting.',
          '<strong>Cache Tier:</strong> Redis stores online status, recent message threads, unread counts, and session affinity.',
          '<strong>Database Tier:</strong> Stores messages, conversations, user metadata. Sharded by conversation_id or user_id.',
          '<strong>Queue Tier:</strong> Kafka/RabbitMQ decouples senders from receivers. Handles offline delivery and push notifications.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'High-level chat design decisions:',
        table: {
          headers: ['Scenario', 'Approach', 'Pros', 'Cons', 'Example'],
          rows: [
            ['1:1 messaging', 'Direct delivery', 'Simple, low latency', 'Does not scale to groups', 'WhatsApp chats'],
            ['Small groups (< 1K)', 'Write-time fan-out', 'Fast reads', 'Write amplification', 'Family groups'],
            ['Large channels (100K+)', 'Read-time fan-out', 'Low write cost', 'Complex queries', 'Telegram channels'],
            ['Media-heavy chat', 'Object storage + CDN', 'Scalable media', 'Sync complexity', 'Instagram Direct'],
            ['Enterprise chat', 'Strong consistency + search', 'Compliance, audit', 'Higher latency/cost', 'Slack'],
            ['Cross-region chat', 'Regional gateways + sync', 'Low latency', 'Conflict resolution', 'Global messenger']
          ]
        }
      }
    ],
    'chat-protocol': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Chat protocols balance real-time delivery, battery life, and reliability. Metrics cover WebSocket, MQTT, XMPP, and proprietary protocols.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Protocol', 'WebSocket', 'Proprietary over QUIC/TCP', 'WebSocket is most common for web chat'],
            ['Connection Uptime', 'Hours–days', 'Weeks', 'Mobile networks cause frequent reconnects'],
            ['Heartbeat Interval', '20–60 s', '5–30 s', 'Keep connection alive; too frequent drains battery'],
            ['Heartbeat Timeout', '60–120 s', '15–60 s', 'Detect dead connections'],
            ['Message Overhead', '2–10 bytes framing', '10–50 bytes metadata', 'WebSocket frame + custom headers'],
            ['Message Size Limit', '1–10 KB text', 'Up to MB for media', 'Large media uses separate upload'],
            ['Reconnect Backoff', '1 s → 30 s exponential', '1 s → 5 min', 'Prevents reconnect storms'],
            ['Concurrent Connections per Gateway', '10K–100K', '1M+', 'Go/Erlang handle high concurrency well'],
            ['Fallback Latency (HTTP poll)', 'Seconds', 'Seconds–minutes', 'Long polling or periodic sync'],
            ['Protocol Battery Drain', 'Moderate', 'Optimized via QUIC/0-RTT', 'Mobile chat optimizes for battery']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Protocol behavior under connection and message load:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '< 100 ms delivery', 'Connections stable', 'Healthy'],
            ['2× Connections', 'Slight latency increase', 'Gateway CPU rises', 'Scale gateways horizontally'],
            ['5× Connections', '100–300 ms delivery', 'Heartbeat traffic significant', 'Tune heartbeat interval'],
            ['10× Connections', '500 ms+ delivery', 'Gateway becomes bottleneck', 'Add gateways; shard by user'],
            ['Reconnect Storm', 'Seconds to recover', 'Many clients reconnect at once', 'Exponential backoff + jitter'],
            ['Network Flapping', 'Repeated disconnects', 'Battery and server load increase', 'Adaptive heartbeat / QUIC 0-RTT']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Protocol evolution as scale increases:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Simple HTTP polling every 5 s. Easy but high latency and battery drain.',
          '<strong>Stage 2: 1K–10K users</strong> — Long polling. Persistent HTTP request held open until message arrives.',
          '<strong>Stage 3: 10K–100K users</strong> — WebSocket for web; MQTT for mobile/IoT. Bidirectional, low overhead.',
          '<strong>Stage 4: 100K–1M users</strong> — Custom binary protocol over TCP/QUIC. Framing, compression, multiplexed streams.',
          '<strong>Stage 5: 1M–10M users</strong> — Protocol supports resumable sessions, delta sync, and QoS levels. Mobile clients batch heartbeats.',
          '<strong>Stage 6: 10M+ users</strong> — QUIC-based protocol with 0-RTT reconnect. Edge-terminated connections. Protocol evolves without breaking old clients.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Protocol responsibilities by tier.',
        list: [
          '<strong>Client Tier:</strong> Maintains connection state. Implements reconnect, backoff, message deduplication, and offline queue.',
          '<strong>Gateway Tier:</strong> Terminates persistent connections. Translates between client protocol and internal messaging. Handles heartbeat acks.',
          '<strong>Load Balancer Tier:</strong> Routes connections to gateway instances with sticky sessions. Supports WebSocket-aware LB.',
          '<strong>Message Router Tier:</strong> Looks up recipient gateway/session. Forwards messages. Handles multi-device routing.',
          '<strong>Queue Tier:</strong> Buffers messages for offline users. Guarantees at-least-once delivery.',
          '<strong>Database Tier:</strong> Persists messages and delivery state. Supports message history sync on reconnect.',
          '<strong>Push Tier:</strong> Sends APNS/FCM push notifications when client is offline or backgrounded.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Protocol choice by client and scale:',
        table: {
          headers: ['Scenario', 'Protocol', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Web chat', 'WebSocket', 'Native browser support', 'Connection limits, battery', 'Slack web'],
            ['Mobile chat', 'MQTT / proprietary', 'Battery efficient', 'Needs custom client', 'WhatsApp'],
            ['IoT / low bandwidth', 'MQTT', 'Tiny overhead', 'Limited features', 'Connected devices'],
            ['Maximum performance', 'Custom binary over QUIC', 'Lowest latency', 'Complex', 'Discord'],
            ['Enterprise / federated', 'XMPP', 'Standard, extensible', 'Verbose, old', 'Jabber'],
            ['Fallback / poor network', 'HTTP long polling', 'Reliable through proxies', 'Higher latency', 'Legacy support']
          ]
        }
      }
    ],
    'chat-message-storage': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Message storage must support high write throughput, efficient recent-message reads, and long-term retention at petabyte scale.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Messages Stored per Day', '10M–100M', '10B+', 'Text, reactions, edits, system messages'],
            ['Storage per Text Message', '100 bytes–1 KB', '1–2 KB with metadata', 'Message body + sender + timestamp + flags'],
            ['Storage per Media Message', '10 KB–10 MB', 'Up to GB (video)', 'Media stored in object storage; DB holds metadata'],
            ['Retention Period', '30 days–1 year', 'Years or indefinite', 'Depends on product and compliance'],
            ['Recent Messages Read per Query', '20–50', '100–200', 'Chat UI loads recent history first'],
            ['Message Read Latency (recent)', '1–10 ms', '< 1 ms (cache)', 'Indexed by conversation_id + timestamp'],
            ['Message Read Latency (old)', '10–100 ms', '100 ms–1 s', 'Cold storage or archive queries'],
            ['Write Throughput per Shard', '1K–10K msg/s', '50K+ msg/s', 'Group chat fan-out increases writes'],
            ['Index Size vs Data', '20–40%', '30–50%', 'Conversation + timestamp indexes'],
            ['Global Storage Growth', '1–10 TB/day', '1 PB+/day', 'Media dominates storage growth']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Message storage behavior under traffic:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', 'Recent reads < 10 ms', 'Storage healthy', 'Healthy'],
            ['2× Load', 'Reads stable', 'Write throughput rises', 'Add write replicas'],
            ['5× Load', 'Recent reads 10–50 ms', 'Hot conversation shards', 'Shard by conversation or time'],
            ['10× Load', 'Reads 100 ms+', 'Storage saturated', 'Scale horizontally; archive old data'],
            ['History Sync', 'Seconds–minutes', 'Large sync on new device', 'Paginated cursor-based sync'],
            ['Media Upload Surge', 'Upload latency spikes', 'Object storage scales', 'Use pre-signed URLs']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Message storage evolution:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Single SQL table: messages(conversation_id, sender, text, timestamp). Simple ORDER BY timestamp.',
          '<strong>Stage 2: 1K–10K users</strong> — Add index on conversation_id + timestamp. Read replicas for history queries. Separate media storage.',
          '<strong>Stage 3: 10K–100K users</strong> — Shard by conversation_id. Time-series friendly DB (ScyllaDB, Cassandra) for messages.',
          '<strong>Stage 4: 100K–1M users</strong> — Hot conversations on SSD; archive old to S3. Message cache (Redis) for recent threads.',
          '<strong>Stage 5: 1M–10M users</strong> — Separate recent and historical storage. Recent: wide-column DB; Historical: data warehouse. E2E encrypted blobs.',
          '<strong>Stage 6: 10M+ users</strong> — Geo-partitioned storage. Automatic tiering. Differential sync. Petabyte-scale object storage for media. Multi-region replication.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Message storage tiers.',
        list: [
          '<strong>Client Tier:</strong> Local SQLite/RocksDB caches recent messages. Syncs cursor with server on reconnect.',
          '<strong>Application Tier:</strong> Validates messages, computes conversation order, handles edits/deletes, triggers fan-out.',
          '<strong>Cache Tier:</strong> Redis stores recent message threads and unread counts. Reduces DB load for active chats.',
          '<strong>Message DB Tier:</strong> Wide-column or time-series DB optimized for append-only writes by conversation. Sharded by conversation_id.',
          '<strong>Metadata DB Tier:</strong> Relational DB for users, conversations, memberships, permissions.',
          '<strong>Object Storage Tier:</strong> S3/GCS for images, video, files. CDN serves media to recipients.',
          '<strong>Search / Index Tier:</strong> Elasticsearch/OpenSearch indexes messages for full-text search in enterprise chat.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Message storage choices:',
        table: {
          headers: ['Scenario', 'Storage', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Small chat', 'PostgreSQL/MySQL', 'ACID, simple', 'Hard to scale writes', 'Startup'],
            ['High write scale', 'Cassandra/ScyllaDB', 'Linear write scale', 'Eventual consistency', 'WhatsApp'],
            ['Enterprise search', 'Elasticsearch + SQL', 'Full-text search', 'Higher cost', 'Slack'],
            ['Media-heavy', 'Object storage + metadata DB', 'Cheap media', 'Eventual sync', 'Telegram'],
            ['E2E encrypted', 'Encrypted blobs', 'Privacy', 'No server-side search', 'Signal'],
            ['Long retention', 'Data warehouse + cold storage', 'Cheap archive', 'Slow old queries', 'Compliance archive']
          ]
        }
      }
    ],
    'chat-presence': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Presence tracks online/away/typing/last-seen status and fans updates out to contacts. At scale it is a fan-out-heavy subsystem.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Online Users', '100K–1M', '1B+', 'Peak concurrent connections'],
            ['Presence Updates / Sec', '100K–1M', '10M+', 'Online/away/typing changes'],
            ['Heartbeat Interval', '20–60 s', '30–120 s', 'Balance freshness vs battery'],
            ['Typing Indicator Duration', '3–5 s', '3–5 s', 'User expects near-real-time typing state'],
            ['Last-Seen Resolution', 'Minutes', 'Seconds–minutes', 'WhatsApp shows last seen to minute'],
            ['Presence Fan-Out per User', '10–100 contacts', 'Up to 5,000 (large groups)', 'Updates sent to all observers'],
            ['Presence Storage per User', '100 bytes', '500 bytes', 'User ID, status, timestamp, device list'],
            ['Update Latency (p99)', '< 500 ms', '< 100 ms', 'Contacts should see status quickly'],
            ['Presence Cache Hit Rate', '90–99%', '99%+', 'Hot presence data cached in Redis'],
            ['Multi-Device Sync Latency', '< 1 s', '< 100 ms', 'Status consistent across user devices']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Presence behavior under scale:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '< 100 ms fan-out', 'Updates propagate smoothly', 'Healthy'],
            ['2× Load', '< 200 ms', 'CPU on presence service rises', 'Scale presence workers'],
            ['5× Load', '500 ms–1 s', 'Some update batching needed', 'Batch presence updates'],
            ['10× Load', '1 s+', 'Fan-out backlog', 'Shard presence by user_id'],
            ['Celebrity User Online', 'Huge fan-out spike', 'Millions notified', 'Special handling for high-degree users'],
            ['Network Partition', 'Stale presence', 'Users appear offline incorrectly', 'Eventually consistent presence acceptable']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Presence system evolution:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — No presence. User list fetched on demand.',
          '<strong>Stage 2: 1K–10K users</strong> — Simple heartbeat updates status in DB. Polling contacts for status.',
          '<strong>Stage 3: 10K–100K users</strong> — Redis stores presence. Pub/sub pushes updates to gateway servers subscribed per user.',
          '<strong>Stage 4: 100K–1M users</strong> — Presence service with batched updates. Fan-out limited to active contacts. Push notifications for important status changes.',
          '<strong>Stage 5: 1M–10M users</strong> — Sharded presence store. Hierarchical aggregation. Typing indicators scoped to open conversations.',
          '<strong>Stage 6: 10M+ users</strong> — Edge-local presence. Probabilistic data structures for approximate online counts. Special path for celebrities/high-fan-out users.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Presence subsystem tiers.',
        list: [
          '<strong>Client Tier:</strong> Sends heartbeat and status changes. Displays online/typing indicators. Buffers updates during reconnect.',
          '<strong>Gateway Tier:</strong> Maintains user→gateway mapping. Subscribes to presence updates for connected users.',
          '<strong>Presence Service Tier:</strong> Receives status changes. Computes fan-out list. Batches updates to observers.',
          '<strong>Cache Tier:</strong> Redis stores current presence per user. Pub/sub channels fan-out to gateway subscribers.',
          '<strong>Database Tier:</strong> Stores last-seen timestamps and persistent status history.',
          '<strong>Graph / Contacts Tier:</strong> Provides list of contacts/groups that should receive presence updates.',
          '<strong>Push Tier:</strong> Optionally notifies mobile clients of important presence changes when backgrounded.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Presence design decisions:',
        table: {
          headers: ['Scenario', 'Approach', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Simple friends list', 'DB polling', 'Easy', 'High latency, DB load', 'Early chat'],
            ['Real-time 1:1', 'Redis pub/sub', 'Fast', 'Does not scale to huge fan-out', 'WhatsApp'],
            ['Large groups', 'Batch + scoped updates', 'Scalable', 'Less instant', 'Slack channels'],
            ['Celebrity accounts', 'Separate high-fan-out path', 'Protects normal users', 'Complex', 'Public figures'],
            ['Battery-sensitive mobile', 'Longer heartbeat', 'Saves battery', 'Stale presence', 'Mobile messenger'],
            ['Privacy-focused', 'User-controlled visibility', 'Privacy', 'More complex auth', 'Signal']
          ]
        }
      }
    ],
    'chat-scaling': [
      {
        heading: 'Quantitative Metrics & Sizing',
        text: 'Scaling chat requires handling millions of concurrent connections, high message fan-out, and global low latency.',
        table: {
          headers: ['Metric', 'Typical Value', 'High-Scale Value', 'Notes'],
          rows: [
            ['Concurrent Connections', '100K–1M', '100M+', 'WebSocket/MQTT connections to gateways'],
            ['Connections per Gateway Instance', '10K–100K', '500K–1M', 'Depends on language and hardware'],
            ['Messages per Second per Shard', '1K–10K', '100K+', 'Shard by conversation or region'],
            ['Gateway Fleet Size', '10–100', '1,000–10,000', 'Horizontal scaling for connections'],
            ['Cross-Region Message Latency', '50–200 ms', '20–100 ms', 'Replicate messages between regions'],
            ['Fan-Out Factor (small groups)', '< 1,000', 'N/A', 'Write-time fan-out practical'],
            ['Fan-Out Factor (large channels)', '1K–1M', 'Up to 200M', 'Read-time fan-out required'],
            ['CPU per 1K Connections', '1–2 cores', '0.1–0.5 cores', 'Highly optimized gateways use less'],
            ['Memory per 1K Connections', '100 MB–1 GB', '10–100 MB', 'Connection buffers dominate'],
            ['Auto-Scale Reaction Time', 'Seconds', 'Seconds–minutes', 'Kubernetes HPA or cloud autoscaling']
          ]
        }
      },
      {
        heading: 'Performance Under Load',
        text: 'Scaling behavior as chat traffic grows:',
        table: {
          headers: ['Load Factor', 'Response Time', 'Behavior', 'What It Means'],
          rows: [
            ['1× (Baseline)', '< 100 ms delivery', 'Gateways underutilized', 'Healthy'],
            ['2× Load', '< 150 ms', 'Gateway CPU rises', 'Add gateway pods'],
            ['5× Load', '200–500 ms', 'Message queue depth grows', 'Scale consumers and DB'],
            ['10× Load', '500 ms–1 s', 'Hot shards form', 'Reshard by conversation'],
            ['Connection Burst', 'Reconnect latency spikes', 'Auth and state restoration slow', 'Pre-warm and rate-limit reconnects'],
            ['Cross-Region Surge', '100–300 ms', 'Inter-region replication lag', 'Add regional capacity']
          ]
        }
      },
      {
        heading: 'Progressive Scaling Walkthrough',
        text: 'Chat scaling journey:',
        list: [
          '<strong>Stage 1: 0–1K users</strong> — Monolith. Single server handles connections, messages, and storage.',
          '<strong>Stage 2: 1K–10K users</strong> — Separate gateway and app services. Redis for shared state.',
          '<strong>Stage 3: 10K–100K users</strong> — Sharded message storage. Presence service. Async delivery queue.',
          '<strong>Stage 4: 100K–1M users</strong> — Multi-region gateways. Separate media, push, and analytics paths. Read-time fan-out for large channels.',
          '<strong>Stage 5: 1M–10M users</strong> — Cell-based architecture. Regional data residency. Anti-abuse pipelines. Multi-device sync service.',
          '<strong>Stage 6: 10M+ users</strong> — Global mesh with regional autonomy. Self-healing gateways. Predictive auto-scaling. Sub-100 ms delivery worldwide.'
        ]
      },
      {
        heading: 'Component-Tier Breakdown',
        text: 'Scaling-oriented tier breakdown.',
        list: [
          '<strong>Client Tier:</strong> Handles reconnect storms gracefully. Uses exponential backoff. Caches state for offline-first UX.',
          '<strong>Edge / CDN Tier:</strong> Terminates TLS near users. Routes to nearest regional gateway. Caches media and static assets.',
          '<strong>Gateway Tier:</strong> Horizontally scaled stateful connection managers. Sticky routing by user_id.',
          '<strong>Messaging Tier:</strong> Stateless services route messages, enforce rate limits, and coordinate fan-out.',
          '<strong>Cache Tier:</strong> Redis Cluster stores sessions, recent messages, presence, unread counts. Regional replicas.',
          '<strong>Database Tier:</strong> Sharded by conversation_id or user_id. Active-active in some regions. Async replication.',
          '<strong>Queue / Stream Tier:</strong> Kafka/Kinesis decouples senders from receivers. Absorbs traffic bursts. Enables replay and analytics.'
        ]
      },
      {
        heading: 'Decision Matrix',
        text: 'Scaling strategy decisions:',
        table: {
          headers: ['Scenario', 'Strategy', 'Pros', 'Cons', 'Example'],
          rows: [
            ['Connection scaling', 'Horizontal gateway instances', 'Linear scale', 'Sticky routing needed', 'Discord'],
            ['Message fan-out (small)', 'Write-time fan-out', 'Fast reads', 'Write amplification', '1:1 chats'],
            ['Message fan-out (large)', 'Read-time fan-out', 'Bounded writes', 'Complex read path', 'Channels'],
            ['Storage scaling', 'Shard by conversation_id', 'Even write distribution', 'Cross-shard queries hard', 'WhatsApp'],
            ['Global latency', 'Regional deployment', 'Low RTT', 'Replication complexity', 'Global messenger'],
            ['Burst absorption', 'Queue + backpressure', 'Smooth peaks', 'Adds latency', 'Event-driven chat']
          ]
        }
      }
    ]
  }
};
