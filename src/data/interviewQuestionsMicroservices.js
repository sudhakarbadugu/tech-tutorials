export const microservicesQuestions = {
  "questions": [
    {
      "question": "What are microservices and how do they differ from monolithic architecture?",
      "answer": "<p><strong>Microservices</strong> are an architectural style where an application is built as a collection of small, independent services that communicate over a network. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently.</p><h4>Monolithic vs Microservices</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Monolithic</th><th style='padding:8px;border:1px solid #ddd;'>Microservices</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Codebase</td><td style='padding:8px;border:1px solid #ddd;'>Single unified codebase</td><td style='padding:8px;border:1px solid #ddd;'>Multiple independent codebases</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Deployment</td><td style='padding:8px;border:1px solid #ddd;'>Deploy entire application</td><td style='padding:8px;border:1px solid #ddd;'>Deploy individual services</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Scale entire app</td><td style='padding:8px;border:1px solid #ddd;'>Scale specific services</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Tech Stack</td><td style='padding:8px;border:1px solid #ddd;'>Single technology</td><td style='padding:8px;border:1px solid #ddd;'>Polyglot (multiple techs)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Complexity</td><td style='padding:8px;border:1px solid #ddd;'>Simpler initially</td><td style='padding:8px;border:1px solid #ddd;'>Higher operational complexity</td></tr></table>",
      "difficulty": "Beginner",
      "tags": ["Architecture", "Basics"]
    },
    {
      "question": "What are the key principles of microservices design?",
      "answer": "<p>The key principles include:</p><ul><li><strong>Single Responsibility</strong> — Each service does one thing well</li><li><strong>Loose Coupling</strong> — Services are independent and changes don't cascade</li><li><strong>High Cohesion</strong> — Related functionality stays together</li><li><strong>Independent Deployability</strong> — Deploy without coordinating with other teams</li><li><strong>Failure Isolation</strong> — One service failing doesn't crash the system</li><li><strong>Decentralized Data</strong> — Each service owns its data</li><li><strong>API-First</strong> — Services communicate via well-defined APIs</li></ul>",
      "difficulty": "Beginner",
      "tags": ["Design Principles", "Architecture"]
    },
    {
      "question": "How do microservices communicate with each other?",
      "answer": "<p>Microservices use several communication patterns:</p><h4>Synchronous</h4><ul><li><strong>REST/HTTP</strong> — Request-response, simple but blocking</li><li><strong>gRPC</strong> — High-performance binary protocol with strong typing</li><li><strong>GraphQL</strong> — Flexible queries, single endpoint</li></ul><h4>Asynchronous</h4><ul><li><strong>Message Queues</strong> — RabbitMQ, ActiveMQ for reliable delivery</li><li><strong>Event Streaming</strong> — Kafka, AWS Kinesis for high throughput</li><li><strong>Pub/Sub</strong> — Google Pub/Sub, Redis Pub/Sub</li></ul><pre><code>// REST API call between services\nconst user = await fetch('http://user-service:8080/users/123');\n\n// Async with message queue\nawait messageQueue.publish('order.created', { orderId: 456 });</code></pre>",
      "difficulty": "Intermediate",
      "tags": ["Communication", "REST", "Messaging"]
    },
    {
      "question": "What is service discovery and why is it needed?",
      "answer": "<p><strong>Service discovery</strong> allows services to find and communicate with each other without hardcoding network locations. In dynamic environments (containers, cloud), service instances come and go, so IP addresses change constantly.</p><h4>Approaches</h4><ul><li><strong>Client-Side</strong> — Client queries registry (Eureka, Consul) to find service instances</li><li><strong>Server-Side</strong> — Load balancer/router handles discovery (API Gateway, Kubernetes Services)</li></ul><pre><code>// With Eureka (Spring Cloud)\n@FeignClient(name = \"inventory-service\")\npublic interface InventoryClient {\n    @GetMapping(\"/items/{id}\")\n    Item getItem(@PathVariable Long id);\n}</code></pre>",
      "difficulty": "Intermediate",
      "tags": ["Service Discovery", "Eureka", "Consul"]
    },
    {
      "question": "Explain API Gateway pattern in microservices.",
      "answer": "<p>An <strong>API Gateway</strong> is a single entry point for all clients that routes requests to appropriate microservices, handles cross-cutting concerns, and aggregates responses.</p><h4>Responsibilities</h4><ul><li><strong>Routing</strong> — Route requests to correct services</li><li><strong>Authentication/Authorization</strong> — Verify JWT tokens, API keys</li><li><strong>Rate Limiting</strong> — Prevent overload</li><li><strong>SSL Termination</strong> — Handle HTTPS</li><li><strong>Request/Response Transformation</strong> — Protocol translation</li><li><strong>Caching</strong> — Reduce load on backend</li><li><strong>Request Aggregation</strong> — Combine multiple service calls</li></ul><p>Popular implementations: <strong>Kong</strong>, <strong>Spring Cloud Gateway</strong>, <strong>AWS API Gateway</strong>, <strong>NGINX</strong></p>",
      "difficulty": "Intermediate",
      "tags": ["API Gateway", "Routing", "Security"]
    },
    {
      "question": "What are the challenges of distributed transactions in microservices?",
      "answer": "<p>Microservices own their own databases, so ACID transactions across services are not possible. Traditional 2PC (Two-Phase Commit) doesn't scale well.</p><h4>Solutions</h4><ul><li><strong>Saga Pattern</strong> — Sequence of local transactions where each service updates its data and triggers the next step via events</li><li><strong>Compensating Transactions</strong> — If a step fails, execute compensating actions to undo previous steps</li><li><strong>Eventual Consistency</strong> — Accept temporary inconsistency, system becomes consistent over time</li></ul><pre><code>// Saga Pattern Example\n1. Order Service: Create Order (PENDING)\n2. Payment Service: Process Payment → emit PaymentCompleted\n3. Inventory Service: Reserve Stock → emit StockReserved\n4. Order Service: Update Order to CONFIRMED\n\n// If step 3 fails:\n3a. Inventory Service: Stock unavailable\n3b. Compensate: Payment Service refunds, Order cancelled</code></pre>",
      "difficulty": "Advanced",
      "tags": ["Transactions", "Saga", "Consistency"]
    },
    {
      "question": "How do you handle failure and resilience in microservices?",
      "answer": "<p>Resilience patterns protect the system from cascading failures:</p><ul><li><strong>Circuit Breaker</strong> — Stop calling failing service temporarily (Hystrix, Resilience4j)</li><li><strong>Retry with Backoff</strong> — Retry failed requests with exponential delay</li><li><strong>Timeout</strong> — Don't wait indefinitely for responses</li><li><strong>Fallback</strong> — Return cached or default values when service fails</li><li><strong>Bulkhead</strong> — Isolate failures by limiting resources per service</li><li><strong>Rate Limiting</strong> — Prevent overwhelming services</li></ul><pre><code>// Resilience4j Circuit Breaker (Spring Boot)\n@CircuitBreaker(name = \"inventoryService\", fallbackMethod = \"getDefaultInventory\")\npublic Inventory getInventory(Long id) {\n    return inventoryClient.getById(id);\n}\n\npublic Inventory getDefaultInventory(Long id, Exception ex) {\n    return new Inventory(id, 0); // Return default/cached\n}</code></pre>",
      "difficulty": "Advanced",
      "tags": ["Resilience", "Circuit Breaker", "Fault Tolerance"]
    },
    {
      "question": "What is the Circuit Breaker pattern and how does it work?",
      "answer": "<p>The <strong>Circuit Breaker</strong> pattern prevents calling a service that is likely to fail, avoiding resource exhaustion and cascading failures.</p><h4>States</h4><ul><li><strong>Closed</strong> — Normal operation, requests pass through</li><li><strong>Open</strong> — Failure threshold exceeded, requests fail fast</li><li><strong>Half-Open</strong> — After timeout, allow limited requests to test if service recovered</li></ul><pre><code>// States transition:\nCLOSED → (failures > threshold) → OPEN\nOPEN → (timeout expires) → HALF_OPEN\nHALF_OPEN → (success) → CLOSED\nHALF_OPEN → (failure) → OPEN</code></pre><p>Libraries: <strong>Netflix Hystrix</strong> (deprecated), <strong>Resilience4j</strong>, <strong>Polly</strong> (.NET)</p>",
      "difficulty": "Intermediate",
      "tags": ["Circuit Breaker", "Resilience", "Patterns"]
    },
    {
      "question": "How do you implement security in microservices?",
      "answer": "<p>Security in microservices involves multiple layers:</p><h4>Authentication & Authorization</h4><ul><li><strong>JWT Tokens</strong> — Stateless auth, passed in Authorization header</li><li><strong>OAuth 2.0 / OpenID Connect</strong> — Industry standard for delegated auth</li><li><strong>API Keys</strong> — Service-to-service authentication</li></ul><h4>Service-to-Service Security</h4><ul><li><strong>mTLS (Mutual TLS)</strong> — Both client and server verify certificates</li><li><strong>Service Mesh</strong> — Istio, Linkerd handle security at infrastructure level</li></ul><h4>Other Measures</h4><ul><li><strong>Input Validation</strong> — Prevent injection attacks</li><li><strong>Rate Limiting</strong> — Prevent abuse</li><li><strong>Secrets Management</strong> — HashiCorp Vault, AWS Secrets Manager</li></ul>",
      "difficulty": "Intermediate",
      "tags": ["Security", "JWT", "mTLS", "OAuth"]
    },
    {
      "question": "What is a service mesh and when would you use one?",
      "answer": "<p>A <strong>Service Mesh</strong> is a dedicated infrastructure layer that handles service-to-service communication, removing that responsibility from application code.</p><h4>Features</h4><ul><li><strong>Traffic Management</strong> — Load balancing, canary deployments, A/B testing</li><li><strong>Security</strong> — Automatic mTLS, access control</li><li><strong>Observability</strong> — Distributed tracing, metrics, logging</li><li><strong>Resilience</strong> — Retries, timeouts, circuit breakers</li></ul><h4>Popular Implementations</h4><ul><li><strong>Istio</strong> — Feature-rich, works with Kubernetes</li><li><strong>Linkerd</strong> — Lightweight, simpler to operate</li><li><strong>Consul Connect</strong> — Integrates with HashiCorp ecosystem</li></ul><p><strong>Use when:</strong> You have many services, need consistent security/observability, and want to decouple these concerns from application code.</p>",
      "difficulty": "Advanced",
      "tags": ["Service Mesh", "Istio", "Infrastructure"]
    },
    {
      "question": "How do you monitor and observe microservices?",
      "answer": "<p>Observability in microservices requires three pillars:</p><h4>1. Logging</h4><ul><li>Centralized log aggregation (ELK Stack, Splunk, Datadog)</li><li>Correlation IDs to trace requests across services</li></ul><h4>2. Metrics</h4><ul><li>Application metrics: latency, throughput, error rates</li><li>Infrastructure metrics: CPU, memory, disk</li><li>Tools: Prometheus, Grafana, Micrometer</li></ul><h4>3. Distributed Tracing</h4><ul><li>Trace requests as they flow through multiple services</li><li>Standards: OpenTelemetry, Zipkin, Jaeger</li></ul><pre><code>// Adding correlation ID\nconst correlationId = req.headers['x-correlation-id'] || uuid();\nlogger.info(`Processing order`, { correlationId, orderId });\n\n// Propagate to next service\nawait fetch('http://payment-service/pay', {\n  headers: { 'x-correlation-id': correlationId }\n});</code></pre>",
      "difficulty": "Intermediate",
      "tags": ["Observability", "Monitoring", "Tracing", "Logging"]
    },
    {
      "question": "What is the difference between synchronous and asynchronous communication in microservices?",
      "answer": "<p>Choosing between sync and async depends on latency requirements, reliability needs, and coupling tolerance.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Synchronous</th><th style='padding:8px;border:1px solid #ddd;'>Asynchronous</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Coupling</td><td style='padding:8px;border:1px solid #ddd;'>Tight — caller waits</td><td style='padding:8px;border:1px solid #ddd;'>Loose — fire and forget</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Latency</td><td style='padding:8px;border:1px solid #ddd;'>Higher (blocking)</td><td style='padding:8px;border:1px solid #ddd;'>Lower (non-blocking)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reliability</td><td style='padding:8px;border:1px solid #ddd;'>If callee fails, caller fails</td><td style='padding:8px;border:1px solid #ddd;'>Messages queued, can retry</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Complexity</td><td style='padding:8px;border:1px solid #ddd;'>Simpler to reason about</td><td style='padding:8px;border:1px solid #ddd;'>Harder (eventual consistency)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use Case</td><td style='padding:8px;border:1px solid #ddd;'>Real-time queries</td><td style='padding:8px;border:1px solid #ddd;'>Background processing</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": ["Communication", "Async", "Sync", "Architecture"]
    },
    {
      "question": "What is database per service pattern?",
      "answer": "<p>Each microservice owns its own database, ensuring loose coupling and independent evolution.</p><h4>Benefits</h4><ul><li><strong>Loose Coupling</strong> — Services don't depend on each other's schema</li><li><strong>Independent Scaling</strong> — Scale databases based on service needs</li><li><strong>Technology Diversity</strong> — Use SQL for transactions, NoSQL for documents, Graph DB for relationships</li><li><strong>Fault Isolation</strong> — Database failure affects only one service</li></ul><h4>Challenges</h4><ul><li><strong>Data Consistency</strong> — Need patterns like Saga for cross-service transactions</li><li><strong>Data Duplication</strong> — Some data may exist in multiple services</li><li><strong>Query Complexity</strong> — Can't do JOINs across services, need API composition or CQRS</li></ul>",
      "difficulty": "Intermediate",
      "tags": ["Database", "Data Ownership", "Architecture"]
    },
    {
      "question": "What is CQRS and how does it relate to microservices?",
      "answer": "<p><strong>CQRS (Command Query Responsibility Segregation)</strong> separates read and write operations into different models or services.</p><h4>Pattern</h4><ul><li><strong>Commands</strong> — Write operations that change state (create, update, delete)</li><li><strong>Queries</strong> — Read operations optimized for specific views</li></ul><h4>Benefits in Microservices</h4><ul><li><strong>Optimized Read Models</strong> — Denormalized views for fast queries</li><li><strong>Scalability</strong> — Scale reads and writes independently</li><li><strong>Complex Queries</strong> — Aggregate data from multiple services into read model</li></ul><pre><code>// Command Side\nclass OrderCommandService {\n  createOrder(order) {\n    // Validate, save to order DB\n    // Emit OrderCreated event\n  }\n}\n\n// Query Side\nclass OrderQueryService {\n  getOrderSummary(userId) {\n    // Read from denormalized view\n    // Joins pre-computed during event consumption\n  }\n}</code></pre>",
      "difficulty": "Advanced",
      "tags": ["CQRS", "Event Sourcing", "Patterns"]
    },
    {
      "question": "What is the Strangler Fig pattern?",
      "answer": "<p>The <strong>Strangler Fig Pattern</strong> is a migration strategy where you gradually replace a monolithic application with microservices by incrementally routing functionality to new services.</p><h4>How It Works</h4><ol><li>Place a <strong>facade/router</strong> (API Gateway or proxy) in front of the monolith</li><li>Incrementally build new microservices for specific domains</li><li>Route traffic for migrated functionality to new services</li><li>Continue until monolith is 'strangled' and can be retired</li></ol><h4>Benefits</h4><ul><li><strong>Risk Reduction</strong> — Gradual migration vs big-bang rewrite</li><li><strong>Incremental Value</strong> — Deliver improvements continuously</li><li><strong>Rollback Safety</strong> — Can route back to monolith if issues occur</li></ul><p>Popularized by Martin Fowler, named after the Strangler Fig tree that grows around existing trees.</p>",
      "difficulty": "Intermediate",
      "tags": ["Migration", "Strangler Fig", "Patterns"]
    }
  ]
};
