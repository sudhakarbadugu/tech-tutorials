// System Design Patterns — Structure
// Based on DesignGurus.io System Design Patterns course (12 modules, 60+ patterns)

export const systemDesignStructure = {
  module1: {
    title: "Module 1: Communication Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "message-queues", title: "Message Queues" },
      { id: "pub-sub", title: "Publish-Subscribe" },
      { id: "request-response", title: "Request-Response" },
      { id: "webhooks", title: "Webhooks" },
      { id: "streaming", title: "Streaming (WebSocket & SSE)" },
      { id: "event-driven", title: "Event-Driven Architecture" },
    ],
  },
  module2: {
    title: "Module 2: Storage Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "replication", title: "Replication (Primary-Replica)" },
      { id: "sharding", title: "Sharding & Partitioning" },
      { id: "consistent-hashing", title: "Consistent Hashing" },
      { id: "event-sourcing", title: "Event Sourcing" },
      { id: "cqrs", title: "CQRS (Command Query Responsibility Segregation)" },
      { id: "wal", title: "Write-Ahead Log (WAL)" },
    ],
  },
  module3: {
    title: "Module 3: Caching Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "cache-aside", title: "Cache-Aside (Lazy Loading)" },
      { id: "write-through", title: "Write-Through Cache" },
      { id: "write-behind", title: "Write-Behind (Write-Back)" },
      { id: "eviction-policies", title: "Cache Eviction Policies (LRU, LFU, TTL)" },
      { id: "cdn-caching", title: "CDN Caching" },
      { id: "multi-tier-cache", title: "Multi-Tier Caching" },
    ],
  },
  module4: {
    title: "Module 4: Reliability Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "timeouts", title: "Timeouts" },
      { id: "retries", title: "Retries & Backoff" },
      { id: "idempotency", title: "Idempotency" },
      { id: "circuit-breaker", title: "Circuit Breaker" },
      { id: "bulkhead", title: "Bulkhead Pattern" },
      { id: "rate-limiting", title: "Rate Limiting (Token Bucket, Leaky Bucket)" },
    ],
  },
  module5: {
    title: "Module 5: Scaling Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "horizontal-vertical", title: "Horizontal vs Vertical Scaling" },
      { id: "load-balancing", title: "Load Balancing Algorithms" },
      { id: "auto-scaling", title: "Auto-Scaling" },
      { id: "database-scaling", title: "Database Scaling (Read Replicas, Sharding)" },
      { id: "microservices-scaling", title: "Microservices Scaling" },
      { id: "stateless-services", title: "Stateless Services" },
    ],
  },
  module6: {
    title: "Module 6: Distributed Consistency Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "sagas", title: "Saga Pattern" },
      { id: "two-phase-commit", title: "Two-Phase Commit (2PC)" },
      { id: "quorum-consistency", title: "Quorum-Based Consistency" },
      { id: "distributed-transactions", title: "Distributed Transactions" },
      { id: "eventual-consistency", title: "Eventual Consistency" },
      { id: "cap-theorem", title: "CAP Theorem & PACELC" },
    ],
  },
  module7: {
    title: "Module 7: API & Edge Design Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "api-gateway", title: "API Gateway" },
      { id: "bff-pattern", title: "Backend for Frontend (BFF)" },
      { id: "api-versioning", title: "API Versioning" },
      { id: "api-rate-limiting", title: "API Rate Limiting at Edge" },
      { id: "cdn-edge", title: "CDN & Edge Computing" },
      { id: "graphql-federation", title: "GraphQL Federation" },
    ],
  },
  module8: {
    title: "Module 8: Production Operations Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "canary-deployment", title: "Canary Deployment" },
      { id: "blue-green", title: "Blue-Green Deployment" },
      { id: "feature-flags", title: "Feature Flags" },
      { id: "observability", title: "Observability (Logging, Metrics, Tracing)" },
      { id: "health-checks", title: "Health Checks & Readiness Probes" },
      { id: "chaos-engineering", title: "Chaos Engineering" },
    ],
  },
  module9: {
    title: "Module 9: Data-Intensive System Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "stream-processing", title: "Stream Processing" },
      { id: "cdc", title: "Change Data Capture (CDC)" },
      { id: "exactly-once", title: "Exactly-Once Processing" },
      { id: "batch-processing", title: "Batch Processing (MapReduce, Spark)" },
      { id: "lambda-architecture", title: "Lambda Architecture" },
      { id: "kappa-architecture", title: "Kappa Architecture" },
    ],
  },
  module10: {
    title: "Module 10: AI-Era Infrastructure Patterns",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "llm-gateway", title: "LLM Gateway" },
      { id: "semantic-caching", title: "Semantic Caching" },
      { id: "rag-pipeline", title: "RAG Pipeline Architecture" },
      { id: "vector-db-sharding", title: "Vector Database Sharding" },
      { id: "gpu-serving", title: "GPU Serving & Batching" },
      { id: "model-routing", title: "Model Routing & Fallback" },
    ],
  },
  module11: {
    title: "Module 11: Capstone — URL Shortener",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "url-shortener-overview", title: "URL Shortener: Requirements & Scale" },
      { id: "url-shortener-encoding", title: "URL Shortener: Encoding & Generation" },
      { id: "url-shortener-storage", title: "URL Shortener: Storage & Sharding" },
      { id: "url-shortener-cache", title: "URL Shortener: Caching & CDN" },
      { id: "url-shortener-analytics", title: "URL Shortener: Analytics & Redirection" },
    ],
  },
  module12: {
    title: "Module 12: Capstone — Real-Time Chat System",
    topics: [
      { id: "module-intro", title: "Chapter Overview" },
      { id: "chat-overview", title: "Chat System: Requirements & Scale" },
      { id: "chat-protocol", title: "Chat System: WebSocket Protocol" },
      { id: "chat-message-storage", title: "Chat System: Message Storage" },
      { id: "chat-presence", title: "Chat System: Presence & Online Status" },
      { id: "chat-scaling", title: "Chat System: Scaling & Fan-Out" },
    ],
  },
};