// Module 0: Interview Fundamentals

export const systemDesignModule0 = {
  module0: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'This module prepares you for the system design interview. It covers what interviewers actually look for, how to gather and organize requirements, how to estimate capacity with back-of-the-envelope math, a repeatable framework for answering any design question, and the most common mistakes that cause strong engineers to fail.',
          list: [
            '<strong>Topics covered:</strong> What is a System Design Interview?, Requirements, Back-of-the-Envelope Estimation, The 4S Framework, Common Mistakes',
            '<strong>Prerequisites:</strong> Basic software engineering knowledge and a willingness to think out loud',
            '<strong>Time to complete:</strong> ~2-3 hours including practice questions and mental math exercises',
            '<strong>Best for:</strong> Anyone preparing for system design interviews, architecture reviews, or large-scale design discussions'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'A system design interview is less about producing the "perfect" architecture and more about demonstrating structured thinking, trade-off awareness, communication, and the ability to scale a solution. A strong candidate can take an ambiguous problem, clarify constraints, sketch a working design, and reason about performance and failure.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1["What is a System Design Interview?"] --> T2["Requirements"]
    T2 --> T3["Back-of-the-Envelope Estimation"]
    T3 --> T4["The 4S Framework"]
    T4 --> T5["Common Mistakes"]`,
          text: 'Recommended reading order — start with the interview mindset, then learn to gather requirements, estimate capacity, apply a repeatable framework, and avoid common traps.'
        }
      ]
    },
    'what-is-system-design-interview': {
      title: 'What is a System Design Interview?',
      sections: [
        {
          heading: 'What interviewers are really testing',
          text: 'A system design interview asks you to design a large, complex software system such as a URL shortener, social media feed, ride-sharing service, or messaging app. The goal is not to finish with a perfect diagram but to observe how you approach an ambiguous, open-ended problem under time pressure.',
          list: [
            '<strong>Problem-solving under ambiguity:</strong> Can you define the problem and decide what matters?',
            '<strong>Technical breadth and depth:</strong> Do you understand databases, caches, load balancers, queues, CDNs, and trade-offs?',
            '<strong>Scalability instincts:</strong> Can you reason about load, latency, throughput, and data growth?',
            '<strong>Trade-off analysis:</strong> Do you recognize that every choice has a cost and can you justify yours?',
            '<strong>Communication and collaboration:</strong> Do you think out loud, check assumptions, and respond to hints?'
          ]
        },
        {
          heading: 'The interview format',
          diagram: {
            chart: `flowchart TB
    subgraph "45-60 Minute Interview"
        A["1. Understand Requirements\n(5-10 min)"] --> B["2. Sketch High-Level Design\n(10-15 min)"]
        B --> C["3. Deep Dive & Trade-offs\n(15-25 min)"]
        C --> D["4. Scale & Solidify\n(10-15 min)"]
    end
    D --> E["Feedback: clarity, depth, trade-offs, communication"]`,
            caption: 'Typical timeline for a system design interview. Spend most of your time on design and trade-offs.'
          }
        },
        {
          heading: 'What interviewers look for',
          text: 'Interviewers are not checking whether you can name a specific AWS service or open-source tool. They want to see structured reasoning: define scope, propose a reasonable architecture, discuss alternatives, and explain why you chose one over the other.',
          list: [
            '<strong>Requirement gathering:</strong> Ask clarifying questions before jumping to a solution.',
            '<strong>API and data model design:</strong> Show you can design interfaces and storage.',
            '<strong>Scalability:</strong> Discuss load, read/write ratios, caching, sharding, and replication.',
            '<strong>Reliability:</strong> Mention failover, redundancy, monitoring, and graceful degradation.',
            '<strong>Concrete numbers:</strong> Back-of-the-envelope estimates show you think quantitatively.'
          ]
        },
        {
          heading: 'Formula: System Design Scorecard',
          example: {
            title: 'Interviewers mentally score across dimensions',
            code: `Strong Candidate =
  Clarity(0.20) +
  Requirements Gathering(0.15) +
  High-Level Design(0.20) +
  Trade-offs & Alternatives(0.20) +
  Scalability & Reliability(0.15) +
  Communication(0.10)

Weak Candidate =
  Jumps to Solution(0.25) +
  Ignores Constraints(0.20) +
  No Trade-offs(0.20) +
  Vague Numbers(0.20) +
  Silent Diagramming(0.15)`,
            output: 'Spend your energy where it matters: structured problem-solving and trade-off discussion.',
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>How Google evaluates design questions.</strong> In Google system design interviews, the rubric explicitly weights "trade-off analysis" and "communication" as highly as technical correctness. A candidate who draws a slightly wrong architecture but explains it clearly, gathers requirements, and discusses alternatives will often outperform a candidate who draws a complex but unexamined design in silence.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'A system design interview is a structured conversation, not a memorized architecture quiz.',
            'Interviewers value clarity, trade-offs, and collaboration over "the right answer".',
            'Practice thinking out loud and justifying every major decision with requirements and numbers.',
            'Typical format: requirements → high-level design → deep dive → scale and trade-offs.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the first thing you should do when asked "Design a URL shortener"? → Clarify functional and non-functional requirements before drawing anything.',
            'Q2: Why do interviewers care about trade-offs? → Because real systems always choose between competing goals (latency vs consistency, cost vs availability).',
            'Q3: How should you handle a hint that your design is wrong? → Pause, understand the concern, and adapt. Do not defend blindly.'
          ]
        }
      ]
    },
    'functional-vs-nonfunctional-requirements': {
      title: 'Functional vs Non-Functional Requirements',
      sections: [
        {
          heading: 'Why requirements come first',
          text: 'Before you design a single box, you must understand what the system is supposed to do and how well it must do it. Requirements fall into two categories: functional (what the system does) and non-functional (how the system behaves). A clear requirements phase prevents over-engineering, missed constraints, and wasted time.',
          list: [
            '<strong>Functional Requirements (FRs):</strong> Features, behaviors, user actions, APIs, and data outputs.',
            '<strong>Non-Functional Requirements (NFRs):</strong> Latency, throughput, availability, consistency, durability, security, and cost.',
            '<strong>Constraints:</strong> Budget, team size, existing tech stack, regulatory needs, and geographic distribution.',
            '<strong>Assumptions:</strong> State them explicitly so the interviewer can correct or validate them.',
            '<strong>Out of scope:</strong> Define what you will not cover to keep the discussion focused.'
          ]
        },
        {
          heading: 'FR vs NFR comparison',
          diagram: {
            chart: `flowchart LR
    subgraph "Requirements"
        FR["Functional Requirements"] --> |"features, APIs, data"| F1["Users can post tweets"]
        FR --> F2["Users can follow other users"]
        FR --> F3["Users can see a feed"]
        NFR["Non-Functional Requirements"] --> |"how well"| N1["Feed load < 200ms at p99"]
        NFR --> N2["99.99% availability"]
        NFR --> N3["Eventually consistent follows"]
    end`,
            caption: 'Functional requirements define capabilities. Non-functional requirements define quality and scale targets.'
          }
        },
        {
          heading: 'How to gather requirements in an interview',
          list: [
            '<strong>1. Restate the problem:</strong> "So I am designing a Twitter-like feed. Is that correct?"',
            '<strong>2. Identify users:</strong> Who uses the system? Readers, writers, admins, third-party developers?',
            '<strong>3. List core features:</strong> What are the must-have actions and data flows?',
            '<strong>4. Set scale targets:</strong> Daily active users, QPS, storage, latency, availability.',
            '<strong>5. Ask about constraints:</strong> Latency budget, budget, existing services, compliance.',
            '<strong>6. Define out-of-scope:</strong> Explicitly exclude things like machine learning, payments, or mobile apps if not asked.'
          ]
        },
        {
          heading: 'Key non-functional requirements',
          table: {
            headers: ['NFR', 'Typical Target', 'What It Means'],
            rows: [
              ['Latency', 'p99 < 200ms for reads', '99% of requests finish under 200ms; p50 is usually much lower.'],
              ['Throughput', '100K QPS', 'System can handle 100,000 queries per second.'],
              ['Availability', '99.99% (four nines)', 'Down ~52 minutes per year. 99.999% = ~5 minutes.'],
              ['Durability', '99.999999999% (11 nines)', 'Object storage target (e.g., S3). Probability of data loss is extremely low.'],
              ['Consistency', 'Strong vs eventual', 'Strong: all reads see the latest write. Eventual: reads converge over time.'],
              ['Scalability', 'Horizontal growth', 'Add nodes to handle more load without redesign.']
            ]
          }
        },
        {
          heading: 'Code example: requirement checklist',
          example: {
            title: 'Structured requirements for a URL shortener',
            code: `/* Functional Requirements */
- Generate a short URL for a given long URL
- Redirect short URL to original long URL
- Custom aliases (optional)
- Expiry for links (optional)
- Analytics for click count (optional)

/* Non-Functional Requirements */
- Read:Write ratio ~ 100:1
- Latency: redirect < 50ms at p99
- Availability: 99.99%
- Throughput: 100K redirects/sec, 1K shortens/sec
- Storage: 10B URLs over 5 years
- Durability: short URL must never be lost
- Security: prevent malicious URLs, rate limiting`,
            output: 'A clear checklist keeps the design focused and gives you a target for every number.',
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix playback latency requirements.</strong> Netflix has a strict non-functional requirement: the time from a user pressing play to video starting must be under a few seconds globally. This requirement drives the design of a massive CDN (Open Connect), regional caches, predictive content placement, and adaptive bitrate streaming. The NFR shapes the entire architecture more than any functional requirement does.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Functional requirements = what the system does. Non-functional requirements = how well it does it.',
            'Always start interviews by clarifying requirements, constraints, and scope.',
            'Key NFRs to remember: latency, throughput, availability, consistency, durability, scalability.',
            'State assumptions and out-of-scope items explicitly to keep the conversation aligned.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Design a ride-sharing app. What are the top 3 functional and top 3 non-functional requirements? → FRs: request ride, match driver, payment. NFRs: real-time matching latency, high availability, location consistency.',
            'Q2: Why is it risky to skip NFRs? → You may design for throughput that is 10x too low or choose the wrong consistency model.',
            'Q3: What is the difference between availability and durability? → Availability means the system is up; durability means data is not lost.'
          ]
        }
      ]
    },
    'back-of-the-envelope-estimation': {
      title: 'Back-of-the-Envelope Estimation',
      sections: [
        {
          heading: 'Why estimation matters',
          text: 'Back-of-the-envelope estimation is the ability to approximate capacity, storage, bandwidth, and cost with simple math. It helps you choose the right architecture, justify trade-offs, and avoid designs that are wildly over- or under-provisioned. Interviewers expect you to produce reasonable numbers and explain your assumptions.',
          list: [
            '<strong>QPS (Queries Per Second):</strong> Peak and average request volume.',
            '<strong>Storage:</strong> How much disk space is needed over time.',
            '<strong>Bandwidth:</strong> Ingress and egress data per second.',
            '<strong>Memory:</strong> Working set size and cache requirements.',
            '<strong>Cost:</strong> Approximate server, storage, and network costs.',
            '<strong>Number of servers:</strong> Based on CPU capacity and concurrency.'
          ]
        },
        {
          heading: 'Useful numbers to memorize',
          diagram: {
            chart: `flowchart TB
    subgraph "Useful Constants"
        U1["1 million = 10^6"] --> U2["1 billion = 10^9"]
        U2 --> U3["1 year ≈ 30 million seconds"]
        U3 --> U4["1 day = 86,400 seconds"]
        U4 --> U5["~2.5 million seconds per month"]
    end
    U5 --> U6["Assume 1 server handles ~1K-10K QPS"]
    U6 --> U7["1 SSD read ≈ 0.1-1ms, 1 HDD seek ≈ 5-10ms"]
    U7 --> U8["Memory lookup ≈ 100ns, network round trip ≈ 1-100ms"]`,
            caption: 'Round numbers are your friends. Keep them simple and state your assumptions.'
          }
        },
        {
          heading: 'The estimation method',
          list: [
            '<strong>1. State assumptions:</strong> DAU, requests per user per day, peak factor, payload size.',
            '<strong>2. Calculate average QPS:</strong> (DAU × actions per user per day) / seconds per day.',
            '<strong>3. Apply peak factor:</strong> Multiply average by 2-5x for peak traffic.',
            '<strong>4. Compute storage:</strong> (requests per day × payload size) × retention days.',
            '<strong>5. Compute bandwidth:</strong> QPS × average request/response size.',
            '<strong>6. Sanity check:</strong> Compare to a real-world system you know.'
          ]
        },
        {
          heading: 'Formula example: Design a Twitter-like feed',
          example: {
            title: 'Capacity estimation for a social feed',
            code: `Assumptions:
- 300 million DAU
- Each user posts 2 tweets/day
- Each user refreshes feed 5 times/day
- Each tweet = 250 bytes metadata + 5 KB media on average
- Peak traffic = 3x average

Write QPS (tweets):
  300M × 2 / 86,400 ≈ 6,944 tweets/sec
  Peak: 6,944 × 3 ≈ 21,000 tweets/sec

Read QPS (feed loads):
  300M × 5 / 86,400 ≈ 17,361 feed requests/sec
  Peak: 17,361 × 3 ≈ 52,000 feed requests/sec

Storage per day:
  Text: 600M tweets × 250 bytes ≈ 150 GB/day
  Media: 600M × 5 KB ≈ 3 TB/day

Storage over 5 years:
  Text: 150 GB × 365 × 5 ≈ 274 TB
  Media: 3 TB × 365 × 5 ≈ 5.5 PB

Bandwidth (egress for feed reads):
  52,000 × 50 KB ≈ 2.6 GB/sec ≈ 21 Gbps`,
            output: 'These numbers tell you the system needs heavy fan-out, caching, and media object storage.',
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-step estimation flow',
          diagram: {
            chart: `sequenceDiagram
    participant I as Interviewer
    participant Y as You
    I->>Y: "Design a Twitter-like feed"
    Y->>Y: Ask scale assumptions
    Y->>I: "Assume 300M DAU, 2 tweets/day, 5 feed reads/day"
    I-->>Y: Agree
    Y->>Y: Compute QPS, storage, bandwidth
    Y->>I: Present numbers and explain implications
    Note over Y: "This means we need a write-heavy fan-out and heavy read cache"`,
            caption: 'Always agree on assumptions with the interviewer before computing numbers.'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>WhatsApp status estimation.</strong> When WhatsApp launched Status, engineers estimated that 500 million daily users uploading a 15-second video once per day would generate roughly 50 million uploads per hour at peak. That simple back-of-the-envelope number told them they needed pre-signed upload URLs, regional object storage, media transcoding pipelines, and CDN distribution — decisions that were impossible to make without estimation.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Estimation turns ambiguous design questions into quantitative targets.',
            'Start with assumptions, then compute QPS, storage, bandwidth, and cost.',
            'Apply peak factors (2x-5x) to average numbers.',
            'Use round numbers and explain your reasoning; exact answers are not required.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Estimate the storage needed for a chat app with 1 billion messages/day, average 100 bytes each, retained for 1 year. → 1B × 100 bytes × 365 ≈ 36.5 TB of text.',
            'Q2: How many servers do you need to serve 100K QPS if each server handles 10K QPS? → 10 servers, plus 2-3x for redundancy and peak = ~30.',
            'Q3: Estimate bandwidth for a video streaming service with 10M concurrent viewers at 5 Mbps each. → 10M × 5 Mbps = 50 Tbps. This is why CDNs are essential.'
          ]
        }
      ]
    },
    'interview-framework': {
      title: 'The 4S Framework',
      sections: [
        {
          heading: 'A repeatable framework for any system design question',
          text: 'The 4S Framework gives you a consistent structure for answering system design questions: Scope, Sketch, Scale, Solidify. It helps you manage time, stay organized, and cover the topics interviewers care about without panicking.',
          list: [
            '<strong>Scope:</strong> Clarify requirements, constraints, and assumptions.',
            '<strong>Sketch:</strong> Draw a high-level design with the core components.',
            '<strong>Scale:</strong> Add caching, sharding, replication, load balancing, and queues.',
            '<strong>Solidify:</strong> Discuss trade-offs, failure modes, monitoring, and future evolution.'
          ]
        },
        {
          heading: 'The 4S Framework flow',
          diagram: {
            chart: `flowchart LR
    S1["1. Scope\nRequirements & Assumptions"] --> S2["2. Sketch\nHigh-Level Design"]
    S2 --> S3["3. Scale\nCaching, Sharding, Replication"]
    S3 --> S4["4. Solidify\nTrade-offs, Failures, Monitoring"]`,
            caption: 'Use the 4S framework to pace your interview and hit every expected topic.'
          }
        },
        {
          heading: 'Each step in detail',
          list: [
            '<strong>Scope:</strong> Ask functional and non-functional questions. Define scale. State assumptions. Agree on scope.',
            '<strong>Sketch:</strong> Draw clients, API gateway, services, databases, and external dependencies. Keep it simple.',
            '<strong>Scale:</strong> Add a cache, CDN, load balancer, database replicas, sharding, message queues, and rate limiting.',
            '<strong>Solidify:</strong> Compare alternatives, explain failure handling, add monitoring, and discuss what you would do next.'
          ]
        },
        {
          heading: 'Code example: applying 4S to a URL shortener',
          example: {
            title: '4S framework outline',
            code: `/* 1. SCOPE */
- FR: shorten URL, redirect URL, analytics (optional)
- NFR: 100M shortens/day, 10B redirects/day, p99 < 50ms, 99.99% uptime
- Assumptions: 62 chars [a-zA-Z0-9], 7-char short code

/* 2. SKETCH */
Client -> API Gateway -> Shortener Service -> Database
                -> Cache -> Analytics Service (async)

/* 3. SCALE */
- Cache hot short codes in Redis (99% hit rate)
- Hash-based sharding on short code
- Database replication for read-heavy redirects
- Message queue for analytics writes
- Rate limiting per user/API key

/* 4. SOLIDIFY */
- Trade-off: random key vs base62 hash of long URL
- Failure: cache miss -> DB read -> re-populate cache
- Failure: DB partition -> queue writes, graceful degradation
- Monitoring: QPS, cache hit rate, DB latency, 5xx rate`,
            output: 'A complete interview answer in four structured steps.',
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>How Stripe uses structured design reviews.</strong> Stripe engineering interviews are evaluated on a rubric similar to 4S: problem decomposition, high-level design, trade-off analysis, and operational considerations. Candidates who naturally follow a structured framework score higher because they are easier to calibrate and less likely to miss important dimensions.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Scope: clarify requirements and assumptions before designing.',
            'Sketch: produce a simple, working high-level design.',
            'Scale: add caching, replication, sharding, queues, and rate limiting.',
            'Solidify: discuss trade-offs, failure modes, and monitoring.',
            'Time-box each phase to leave room for the full conversation.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the danger of skipping the Scope step? → You may design the wrong system or miss critical constraints.',
            'Q2: When should you introduce a cache in the Sketch step vs the Scale step? → Sketch is for a working design; Scale is for performance optimizations.',
            'Q3: What should you do in the Solidify step if you realize your design has a flaw? → Acknowledge it, propose a mitigation, and explain the trade-off. This is a strength, not a weakness.'
          ]
        }
      ]
    },
    'common-interview-mistakes': {
      title: 'Common Interview Mistakes',
      sections: [
        {
          heading: 'Mistakes that cost strong candidates the offer',
          text: 'Even experienced engineers fail system design interviews by falling into predictable traps. The most common mistakes are not technical; they are about process, communication, and humility. Recognizing these traps in advance is half the battle.',
          list: [
            '<strong>Skipping requirements:</strong> Diving straight into the solution without clarifying scope.',
            '<strong>Ignoring trade-offs:</strong> Presenting one design as if it were obviously correct.',
            '<strong>Over-engineering:</strong> Adding unnecessary complexity to impress the interviewer.',
            '<strong>Poor communication:</strong> Silent diagramming or rambling without structure.',
            '<strong>Not considering failure modes:</strong> Designing for the happy path only.',
            '<strong>Memorizing architectures:</strong> Trying to force a known pattern onto a different problem.'
          ]
        },
        {
          heading: 'Mistake map',
          diagram: {
            chart: `flowchart TB
    M1["Skipping Requirements"] --> R["Rejection Zone"]
    M2["Ignoring Trade-offs"] --> R
    M3["Over-Engineering"] --> R
    M4["Silent Diagramming"] --> R
    M5["No Failure Modes"] --> R
    M6["Memorized Architecture"] --> R
    style R fill:#e74c3c,color:#fff
    style M1 fill:#f39c12,color:#fff
    style M2 fill:#f39c12,color:#fff
    style M3 fill:#f39c12,color:#fff
    style M4 fill:#f39c12,color:#fff
    style M5 fill:#f39c12,color:#fff
    style M6 fill:#f39c12,color:#fff`,
            caption: 'All of these mistakes lead to the same outcome. Avoid them by following a structured framework.'
          }
        },
        {
          heading: 'How to avoid each mistake',
          table: {
            headers: ['Mistake', 'Why It Hurts', 'How to Avoid'],
            rows: [
              ['Skipping requirements', 'You design the wrong system', 'Ask clarifying questions first; write down FRs and NFRs.'],
              ['Ignoring trade-offs', 'You appear naive or rigid', 'Always present at least two alternatives and justify your choice.'],
              ['Over-engineering', 'Wastes time and adds failure surface', 'Start simple and add complexity only when justified by scale.'],
              ['Poor communication', 'Interviewer cannot follow your reasoning', 'Think out loud, name components, and summarize decisions.'],
              ['No failure modes', 'System appears fragile', 'Discuss retries, fallbacks, replication, circuit breakers, and monitoring.'],
              ['Memorized architecture', 'Pattern does not fit the problem', 'Derive the design from requirements, not from memory.']
            ]
          }
        },
        {
          heading: 'Code example: a bad vs good answer pattern',
          example: {
            title: 'How to answer a trade-off question',
            code: `/* BAD: No trade-off */
Interviewer: "Why did you choose a SQL database?"
Candidate: "Because SQL is good."

/* GOOD: Structured trade-off */
Interviewer: "Why did you choose a SQL database?"
Candidate: "I chose a relational database for three reasons:
1. The data has clear relationships (users, orders, items).
2. We need strong consistency for inventory and payments.
3. Our team is already proficient with PostgreSQL.
If we later scale writes beyond a single node's capacity,
I would evaluate sharding or a NoSQL alternative."
`,
            output: 'Good answers show reasoning, context, and awareness of alternatives.',
            language: 'text',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>The "over-engineering" trap at startups.</strong> Many candidates design a distributed system with Kafka, Cassandra, and microservices for a problem that would be solved by a single database and a CDN. Interviewers at startups often prefer a simple, pragmatic design that can evolve. Complexity is a liability until scale justifies it. A good answer starts simple and adds layers only when requirements demand them.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Always clarify requirements before drawing architecture.',
            'Every design decision has a trade-off; discuss it openly.',
            'Start simple, then add complexity only when justified by scale or NFRs.',
            'Think out loud and check in with the interviewer.',
            'Always consider failure modes, monitoring, and graceful degradation.'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the biggest mistake you can make in the first 5 minutes of a system design interview? → Starting to design before understanding requirements.',
            'Q2: How do you handle a trade-off between consistency and availability? → State the business impact, pick one based on requirements, and explain when you would change the decision.',
            'Q3: Why is over-engineering bad in an interview? → It wastes time, increases failure surface, and suggests you are not solving the actual problem.'
          ]
        }
      ]
    }
  }
};