// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.496Z

export const microservicesQuestions = {
  "questions": [
    {
      "question": "What are microservices and how do they differ from monolithic architecture?",
      "answer": "<p><strong>Microservices</strong> are an architectural style where an application is built as a collection of small, independent services that communicate over a network. Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently.</p><h4>Monolithic vs Microservices</h4><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Monolithic</th><th style='padding:8px;border:1px solid #ddd;'>Microservices</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Codebase</td><td style='padding:8px;border:1px solid #ddd;'>Single unified codebase</td><td style='padding:8px;border:1px solid #ddd;'>Multiple independent codebases</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Deployment</td><td style='padding:8px;border:1px solid #ddd;'>Deploy entire application</td><td style='padding:8px;border:1px solid #ddd;'>Deploy individual services</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Scale entire app</td><td style='padding:8px;border:1px solid #ddd;'>Scale specific services</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Tech Stack</td><td style='padding:8px;border:1px solid #ddd;'>Single technology</td><td style='padding:8px;border:1px solid #ddd;'>Polyglot (multiple techs)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Complexity</td><td style='padding:8px;border:1px solid #ddd;'>Simpler initially</td><td style='padding:8px;border:1px solid #ddd;'>Higher operational complexity</td></tr></table>",
      "difficulty": "Beginner",
      "tags": [
        "Architecture",
        "Basics"
      ],
      "keyPoints": [
        "Microservices are an architectural style where an application is built as a collection of small, independent services that communicate over a network.",
        "Each service is responsible for a specific business capability and can be developed, deployed, and scaled independently."
      ]
    },
    {
      "question": "What are the key principles of microservices design?",
      "answer": "<p>The key principles include:</p><ul><li><strong>Single Responsibility</strong> — Each service does one thing well</li><li><strong>Loose Coupling</strong> — Services are independent and changes don't cascade</li><li><strong>High Cohesion</strong> — Related functionality stays together</li><li><strong>Independent Deployability</strong> — Deploy without coordinating with other teams</li><li><strong>Failure Isolation</strong> — One service failing doesn't crash the system</li><li><strong>Decentralized Data</strong> — Each service owns its data</li><li><strong>API-First</strong> — Services communicate via well-defined APIs</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "Design Principles",
        "Architecture"
      ],
      "keyPoints": [
        "Single Responsibility — Each service does one thing well",
        "Loose Coupling — Services are independent and changes don't cascade",
        "High Cohesion — Related functionality stays together"
      ]
    },
    {
      "question": "How do microservices communicate with each other?",
      "answer": "<p>Microservices use several communication patterns:</p><h4>Synchronous</h4><ul><li><strong>REST/HTTP</strong> — Request-response, simple but blocking</li><li><strong>gRPC</strong> — High-performance binary protocol with strong typing</li><li><strong>GraphQL</strong> — Flexible queries, single endpoint</li></ul><h4>Asynchronous</h4><ul><li><strong>Message Queues</strong> — RabbitMQ, ActiveMQ for reliable delivery</li><li><strong>Event Streaming</strong> — Kafka, AWS Kinesis for high throughput</li><li><strong>Pub/Sub</strong> — Google Pub/Sub, Redis Pub/Sub</li></ul><pre><code>// REST API call between services\nconst user = await fetch('http://user-service:8080/users/123');\n\n// Async with message queue\nawait messageQueue.publish('order.created', { orderId: 456 });</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Communication",
        "REST",
        "Messaging"
      ],
      "keyPoints": [
        "REST/HTTP — Request-response, simple but blocking",
        "gRPC — High-performance binary protocol with strong typing",
        "GraphQL — Flexible queries, single endpoint"
      ]
    },
    {
      "question": "What is service discovery and why is it needed?",
      "answer": "<p><strong>Service discovery</strong> allows services to find and communicate with each other without hardcoding network locations. In dynamic environments (containers, cloud), service instances come and go, so IP addresses change constantly.</p><h4>Approaches</h4><ul><li><strong>Client-Side</strong> — Client queries registry (Eureka, Consul) to find service instances</li><li><strong>Server-Side</strong> — Load balancer/router handles discovery (API Gateway, Kubernetes Services)</li></ul><pre><code>// With Eureka (Spring Cloud)\n@FeignClient(name = \"inventory-service\")\npublic interface InventoryClient {\n    @GetMapping(\"/items/{id}\")\n    Item getItem(@PathVariable Long id);\n}</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Service Discovery",
        "Eureka",
        "Consul"
      ],
      "keyPoints": [
        "Client-Side — Client queries registry (Eureka, Consul) to find service instances",
        "Server-Side — Load balancer/router handles discovery (API Gateway, Kubernetes Services)"
      ]
    },
    {
      "question": "Explain API Gateway pattern in microservices.",
      "answer": "<p>An <strong>API Gateway</strong> is a single entry point for all clients that routes requests to appropriate microservices, handles cross-cutting concerns, and aggregates responses.</p><h4>Responsibilities</h4><ul><li><strong>Routing</strong> — Route requests to correct services</li><li><strong>Authentication/Authorization</strong> — Verify JWT tokens, API keys</li><li><strong>Rate Limiting</strong> — Prevent overload</li><li><strong>SSL Termination</strong> — Handle HTTPS</li><li><strong>Request/Response Transformation</strong> — Protocol translation</li><li><strong>Caching</strong> — Reduce load on backend</li><li><strong>Request Aggregation</strong> — Combine multiple service calls</li></ul><p>Popular implementations: <strong>Kong</strong>, <strong>Spring Cloud Gateway</strong>, <strong>AWS API Gateway</strong>, <strong>NGINX</strong></p>",
      "difficulty": "Intermediate",
      "tags": [
        "API Gateway",
        "Routing",
        "Security"
      ],
      "keyPoints": [
        "Routing — Route requests to correct services",
        "Authentication/Authorization — Verify JWT tokens, API keys",
        "Rate Limiting — Prevent overload"
      ]
    },
    {
      "question": "What are the challenges of distributed transactions in microservices?",
      "answer": "<p>Microservices own their own databases, so ACID transactions across services are not possible. Traditional 2PC (Two-Phase Commit) doesn't scale well.</p><h4>Solutions</h4><ul><li><strong>Saga Pattern</strong> — Sequence of local transactions where each service updates its data and triggers the next step via events</li><li><strong>Compensating Transactions</strong> — If a step fails, execute compensating actions to undo previous steps</li><li><strong>Eventual Consistency</strong> — Accept temporary inconsistency, system becomes consistent over time</li></ul><pre><code>// Saga Pattern Example\n1. Order Service: Create Order (PENDING)\n2. Payment Service: Process Payment → emit PaymentCompleted\n3. Inventory Service: Reserve Stock → emit StockReserved\n4. Order Service: Update Order to CONFIRMED\n\n// If step 3 fails:\n3a. Inventory Service: Stock unavailable\n3b. Compensate: Payment Service refunds, Order cancelled</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Transactions",
        "Saga",
        "Consistency"
      ],
      "keyPoints": [
        "Saga Pattern — Sequence of local transactions where each service updates its data and triggers the next step via events",
        "Compensating Transactions — If a step fails, execute compensating actions to undo previous steps",
        "Eventual Consistency — Accept temporary inconsistency, system becomes consistent over time"
      ]
    },
    {
      "question": "How do you handle failure and resilience in microservices?",
      "answer": "<p>Resilience patterns protect the system from cascading failures:</p><ul><li><strong>Circuit Breaker</strong> — Stop calling failing service temporarily (Hystrix, Resilience4j)</li><li><strong>Retry with Backoff</strong> — Retry failed requests with exponential delay</li><li><strong>Timeout</strong> — Don't wait indefinitely for responses</li><li><strong>Fallback</strong> — Return cached or default values when service fails</li><li><strong>Bulkhead</strong> — Isolate failures by limiting resources per service</li><li><strong>Rate Limiting</strong> — Prevent overwhelming services</li></ul><pre><code>// Resilience4j Circuit Breaker (Spring Boot)\n@CircuitBreaker(name = \"inventoryService\", fallbackMethod = \"getDefaultInventory\")\npublic Inventory getInventory(Long id) {\n    return inventoryClient.getById(id);\n}\n\npublic Inventory getDefaultInventory(Long id, Exception ex) {\n    return new Inventory(id, 0); // Return default/cached\n}</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Resilience",
        "Circuit Breaker",
        "Fault Tolerance"
      ],
      "keyPoints": [
        "Circuit Breaker — Stop calling failing service temporarily (Hystrix, Resilience4j)",
        "Retry with Backoff — Retry failed requests with exponential delay",
        "Timeout — Don't wait indefinitely for responses"
      ]
    },
    {
      "question": "What is the Circuit Breaker pattern and how does it work?",
      "answer": "<p>The <strong>Circuit Breaker</strong> pattern prevents calling a service that is likely to fail, avoiding resource exhaustion and cascading failures.</p><h4>States</h4><ul><li><strong>Closed</strong> — Normal operation, requests pass through</li><li><strong>Open</strong> — Failure threshold exceeded, requests fail fast</li><li><strong>Half-Open</strong> — After timeout, allow limited requests to test if service recovered</li></ul><pre><code>// States transition:\nCLOSED → (failures &gt; threshold) → OPEN\nOPEN → (timeout expires) → HALF_OPEN\nHALF_OPEN → (success) → CLOSED\nHALF_OPEN → (failure) → OPEN</code></pre><p>Libraries: <strong>Netflix Hystrix</strong> (deprecated), <strong>Resilience4j</strong>, <strong>Polly</strong> (.NET)</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Circuit Breaker",
        "Resilience",
        "Patterns"
      ],
      "keyPoints": [
        "Closed — Normal operation, requests pass through",
        "Open — Failure threshold exceeded, requests fail fast",
        "Half-Open — After timeout, allow limited requests to test if service recovered"
      ]
    },
    {
      "question": "How do you implement security in microservices?",
      "answer": "<p>Security in microservices involves multiple layers:</p><h4>Authentication &amp; Authorization</h4><ul><li><strong>JWT Tokens</strong> — Stateless auth, passed in Authorization header</li><li><strong>OAuth 2.0 / OpenID Connect</strong> — Industry standard for delegated auth</li><li><strong>API Keys</strong> — Service-to-service authentication</li></ul><h4>Service-to-Service Security</h4><ul><li><strong>mTLS (Mutual TLS)</strong> — Both client and server verify certificates</li><li><strong>Service Mesh</strong> — Istio, Linkerd handle security at infrastructure level</li></ul><h4>Other Measures</h4><ul><li><strong>Input Validation</strong> — Prevent injection attacks</li><li><strong>Rate Limiting</strong> — Prevent abuse</li><li><strong>Secrets Management</strong> — HashiCorp Vault, AWS Secrets Manager</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Security",
        "JWT",
        "mTLS",
        "OAuth"
      ],
      "keyPoints": [
        "JWT Tokens — Stateless auth, passed in Authorization header",
        "OAuth 2.0 / OpenID Connect — Industry standard for delegated auth",
        "API Keys — Service-to-service authentication"
      ]
    },
    {
      "question": "What is a service mesh and when would you use one?",
      "answer": "<p>A <strong>Service Mesh</strong> is a dedicated infrastructure layer that handles service-to-service communication, removing that responsibility from application code.</p><h4>Features</h4><ul><li><strong>Traffic Management</strong> — Load balancing, canary deployments, A/B testing</li><li><strong>Security</strong> — Automatic mTLS, access control</li><li><strong>Observability</strong> — Distributed tracing, metrics, logging</li><li><strong>Resilience</strong> — Retries, timeouts, circuit breakers</li></ul><h4>Popular Implementations</h4><ul><li><strong>Istio</strong> — Feature-rich, works with Kubernetes</li><li><strong>Linkerd</strong> — Lightweight, simpler to operate</li><li><strong>Consul Connect</strong> — Integrates with HashiCorp ecosystem</li></ul><p><strong>Use when:</strong> You have many services, need consistent security/observability, and want to decouple these concerns from application code.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Service Mesh",
        "Istio",
        "Infrastructure"
      ],
      "keyPoints": [
        "Traffic Management — Load balancing, canary deployments, A/B testing",
        "Security — Automatic mTLS, access control",
        "Observability — Distributed tracing, metrics, logging"
      ]
    },
    {
      "question": "How do you monitor and observe microservices?",
      "answer": "<p>Observability in microservices requires three pillars:</p><h4>1. Logging</h4><ul><li>Centralized log aggregation (ELK Stack, Splunk, Datadog)</li><li>Correlation IDs to trace requests across services</li></ul><h4>2. Metrics</h4><ul><li>Application metrics: latency, throughput, error rates</li><li>Infrastructure metrics: CPU, memory, disk</li><li>Tools: Prometheus, Grafana, Micrometer</li></ul><h4>3. Distributed Tracing</h4><ul><li>Trace requests as they flow through multiple services</li><li>Standards: OpenTelemetry, Zipkin, Jaeger</li></ul><pre><code>// Adding correlation ID\nconst correlationId = req.headers['x-correlation-id'] || uuid();\nlogger.info(`Processing order`, { correlationId, orderId });\n\n// Propagate to next service\nawait fetch('http://payment-service/pay', {\n  headers: { 'x-correlation-id': correlationId }\n});</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Observability",
        "Monitoring",
        "Tracing",
        "Logging"
      ],
      "keyPoints": [
        "Centralized log aggregation (ELK Stack, Splunk, Datadog)",
        "Correlation IDs to trace requests across services",
        "Application metrics: latency, throughput, error rates"
      ]
    },
    {
      "question": "What is the difference between synchronous and asynchronous communication in microservices?",
      "answer": "<p>Choosing between sync and async depends on latency requirements, reliability needs, and coupling tolerance.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Aspect</th><th style='padding:8px;border:1px solid #ddd;'>Synchronous</th><th style='padding:8px;border:1px solid #ddd;'>Asynchronous</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Coupling</td><td style='padding:8px;border:1px solid #ddd;'>Tight — caller waits</td><td style='padding:8px;border:1px solid #ddd;'>Loose — fire and forget</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Latency</td><td style='padding:8px;border:1px solid #ddd;'>Higher (blocking)</td><td style='padding:8px;border:1px solid #ddd;'>Lower (non-blocking)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reliability</td><td style='padding:8px;border:1px solid #ddd;'>If callee fails, caller fails</td><td style='padding:8px;border:1px solid #ddd;'>Messages queued, can retry</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Complexity</td><td style='padding:8px;border:1px solid #ddd;'>Simpler to reason about</td><td style='padding:8px;border:1px solid #ddd;'>Harder (eventual consistency)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use Case</td><td style='padding:8px;border:1px solid #ddd;'>Real-time queries</td><td style='padding:8px;border:1px solid #ddd;'>Background processing</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": [
        "Communication",
        "Async",
        "Sync",
        "Architecture"
      ],
      "keyPoints": [
        "Choosing between sync and async depends on latency requirements, reliability needs, and coupling tolerance."
      ]
    },
    {
      "question": "What is database per service pattern?",
      "answer": "<p>Each microservice owns its own database, ensuring loose coupling and independent evolution.</p><h4>Benefits</h4><ul><li><strong>Loose Coupling</strong> — Services don't depend on each other's schema</li><li><strong>Independent Scaling</strong> — Scale databases based on service needs</li><li><strong>Technology Diversity</strong> — Use SQL for transactions, NoSQL for documents, Graph DB for relationships</li><li><strong>Fault Isolation</strong> — Database failure affects only one service</li></ul><h4>Challenges</h4><ul><li><strong>Data Consistency</strong> — Need patterns like Saga for cross-service transactions</li><li><strong>Data Duplication</strong> — Some data may exist in multiple services</li><li><strong>Query Complexity</strong> — Can't do JOINs across services, need API composition or CQRS</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Database",
        "Data Ownership",
        "Architecture"
      ],
      "keyPoints": [
        "Loose Coupling — Services don't depend on each other's schema",
        "Independent Scaling — Scale databases based on service needs",
        "Technology Diversity — Use SQL for transactions, NoSQL for documents, Graph DB for relationships"
      ]
    },
    {
      "question": "What is CQRS and how does it relate to microservices?",
      "answer": "<p><strong>CQRS (Command Query Responsibility Segregation)</strong> separates read and write operations into different models or services.</p><h4>Pattern</h4><ul><li><strong>Commands</strong> — Write operations that change state (create, update, delete)</li><li><strong>Queries</strong> — Read operations optimized for specific views</li></ul><h4>Benefits in Microservices</h4><ul><li><strong>Optimized Read Models</strong> — Denormalized views for fast queries</li><li><strong>Scalability</strong> — Scale reads and writes independently</li><li><strong>Complex Queries</strong> — Aggregate data from multiple services into read model</li></ul><pre><code>// Command Side\nclass OrderCommandService {\n  createOrder(order) {\n    // Validate, save to order DB\n    // Emit OrderCreated event\n  }\n}\n\n// Query Side\nclass OrderQueryService {\n  getOrderSummary(userId) {\n    // Read from denormalized view\n    // Joins pre-computed during event consumption\n  }\n}</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "CQRS",
        "Event Sourcing",
        "Patterns"
      ],
      "keyPoints": [
        "Commands — Write operations that change state (create, update, delete)",
        "Queries — Read operations optimized for specific views",
        "Optimized Read Models — Denormalized views for fast queries"
      ]
    },
    {
      "question": "What is the Strangler Fig pattern?",
      "answer": "<p>The <strong>Strangler Fig Pattern</strong> is a migration strategy where you gradually replace a monolithic application with microservices by incrementally routing functionality to new services.</p><h4>How It Works</h4><ol><li>Place a <strong>facade/router</strong> (API Gateway or proxy) in front of the monolith</li><li>Incrementally build new microservices for specific domains</li><li>Route traffic for migrated functionality to new services</li><li>Continue until monolith is 'strangled' and can be retired</li></ol><h4>Benefits</h4><ul><li><strong>Risk Reduction</strong> — Gradual migration vs big-bang rewrite</li><li><strong>Incremental Value</strong> — Deliver improvements continuously</li><li><strong>Rollback Safety</strong> — Can route back to monolith if issues occur</li></ul><p>Popularized by Martin Fowler, named after the Strangler Fig tree that grows around existing trees.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Migration",
        "Strangler Fig",
        "Patterns"
      ],
      "keyPoints": [
        "Place a facade/router (API Gateway or proxy) in front of the monolith",
        "Incrementally build new microservices for specific domains",
        "Route traffic for migrated functionality to new services"
      ]
    },
    {
      "question": "How do you create a microservice with Spring Boot?",
      "answer": "<p><strong>Spring Boot</strong> makes building microservices straightforward with auto-configuration and embedded servers.</p><h4>Step-by-Step</h4><ol><li><strong>Generate Project</strong> — Use Spring Initializr with <code>Web</code>, <code>Actuator</code>, <code>Config Client</code> dependencies</li><li><strong>Add @SpringBootApplication</strong> — Main class annotation</li><li><strong>Create REST Controller</strong> — Expose endpoints via <code>@RestController</code></li><li><strong>Add Config</strong> — <code>application.yml</code> with service name, port, and config server</li></ol><pre><code>@SpringBootApplication\npublic class OrderServiceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderServiceApplication.class, args);\n    }\n}\n\n@RestController\n@RequestMapping(\"/orders\")\npublic class OrderController {\n    @GetMapping(\"/{id}\")\n    public Order getOrder(@PathVariable Long id) {\n        return orderService.findById(id);\n    }\n}</code></pre><p><strong>Key Dependencies:</strong> <code>spring-boot-starter-web</code>, <code>spring-boot-starter-actuator</code>, <code>spring-cloud-starter-netflix-eureka-client</code></p>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot",
        "Setup",
        "REST"
      ],
      "keyPoints": [
        "Generate Project — Use Spring Initializr with Web , Actuator , Config Client dependencies",
        "Add @SpringBootApplication — Main class annotation",
        "Create REST Controller — Expose endpoints via @RestController"
      ]
    },
    {
      "question": "How do you implement inter-service communication in Spring Boot with Feign?",
      "answer": "<p><strong>OpenFeign</strong> is a declarative HTTP client that simplifies service-to-service calls in Spring Cloud.</p><h4>Setup</h4><ol><li>Add <code>spring-cloud-starter-openfeign</code> dependency</li><li>Enable with <code>@EnableFeignClients</code> on main class</li><li>Create interface with <code>@FeignClient</code> annotation</li></ol><pre><code>@SpringBootApplication\n@EnableFeignClients\npublic class OrderServiceApplication { }\n\n@FeignClient(name = \"inventory-service\", fallback = InventoryFallback.class)\npublic interface InventoryClient {\n    @GetMapping(\"/inventory/{productId}\")\n    Inventory getInventory(@PathVariable(\"productId\") String productId);\n}\n\n@Component\npublic class InventoryFallback implements InventoryClient {\n    @Override\n    public Inventory getInventory(String productId) {\n        return new Inventory(productId, 0, \"Fallback: stock unknown\");\n    }\n}</code></pre><p><strong>Benefits:</strong> No boilerplate HTTP code, built-in Ribbon load balancing, easy fallback integration with Resilience4j.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Feign",
        "Inter-Service Communication"
      ],
      "keyPoints": [
        "Add spring-cloud-starter-openfeign dependency",
        "Enable with @EnableFeignClients on main class",
        "Create interface with @FeignClient annotation"
      ]
    },
    {
      "question": "How do you implement service discovery with Eureka in Spring Cloud?",
      "answer": "<p><strong>Eureka</strong> is Netflix's service registry. Spring Cloud makes it trivial to register and discover services.</p><h4>Eureka Server</h4><pre><code>@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}</code></pre><h4>Eureka Client (Microservice)</h4><pre><code>@SpringBootApplication\n@EnableDiscoveryClient\npublic class PaymentServiceApplication { }\n\n# application.yml\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:8761/eureka/\n  instance:\n    prefer-ip-address: true</code></pre><p><strong>Discovery:</strong> Services register on startup and heartbeat every 30s. Clients fetch registry cache locally. Ribbon uses it for client-side load balancing.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Eureka",
        "Service Discovery"
      ],
      "keyPoints": [
        "Eureka is Netflix's service registry.",
        "Spring Cloud makes it trivial to register and discover services."
      ]
    },
    {
      "question": "How do you implement an API Gateway with Spring Cloud Gateway?",
      "answer": "<p><strong>Spring Cloud Gateway</strong> is Spring's reactive API Gateway built on Spring WebFlux.</p><h4>Basic Route Configuration</h4><pre><code>@SpringBootApplication\n@EnableDiscoveryClient\npublic class GatewayApplication { }\n\n# application.yml\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: order-service\n          uri: lb://order-service\n          predicates:\n            - Path=/orders/**\n          filters:\n            - StripPrefix=1\n            - name: Retry\n              args:\n                retries: 3\n                statuses: BAD_GATEWAY\n        - id: auth-filter\n          uri: lb://user-service\n          predicates:\n            - Path=/auth/**\n          filters:\n            - JwtAuthenticationFilter</code></pre><p><strong>Features:</strong> Path rewriting, rate limiting (Redis), circuit breaker integration, custom filters for auth/logging, reactive non-blocking.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "API Gateway",
        "Spring Cloud Gateway"
      ],
      "keyPoints": [
        "Spring Cloud Gateway is Spring's reactive API Gateway built on Spring WebFlux.",
        "Basic Route Configuration @SpringBootApplication @EnableDiscoveryClient public class GatewayApplication { } # application."
      ]
    },
    {
      "question": "How do you implement the Circuit Breaker pattern in Spring Boot with Resilience4j?",
      "answer": "<p><strong>Resilience4j</strong> is the modern replacement for Netflix Hystrix in Spring Cloud.</p><h4>Maven Dependencies</h4><pre><code>&lt;dependency&gt;\n    &lt;groupId&gt;io.github.resilience4j&lt;/groupId&gt;\n    &lt;artifactId&gt;resilience4j-spring-boot2&lt;/artifactId&gt;\n&lt;/dependency&gt;\n&lt;dependency&gt;\n    &lt;groupId&gt;io.github.resilience4j&lt;/groupId&gt;\n    &lt;artifactId&gt;resilience4j-retry&lt;/artifactId&gt;\n&lt;/dependency&gt;</code></pre><h4>Code Example</h4><pre><code>@Service\npublic class PaymentService {\n    @CircuitBreaker(name = \"paymentGateway\", fallbackMethod = \"fallbackPayment\")\n    public PaymentResult processPayment(PaymentRequest request) {\n        return paymentGateway.charge(request);\n    }\n\n    @Retry(name = \"paymentGateway\")\n    @RateLimiter(name = \"paymentGateway\")\n    public PaymentResult retryableCharge(PaymentRequest request) {\n        return paymentGateway.charge(request);\n    }\n\n    private PaymentResult fallbackPayment(PaymentRequest request, Exception ex) {\n        return PaymentResult.builder()\n            .status(PaymentStatus.QUEUED)\n            .message(\"Payment queued for retry\")\n            .build();\n    }\n}</code></pre><p><strong>Config (application.yml):</strong> failureRateThreshold, slowCallRateThreshold, permittedNumberOfCallsInHalfOpenState, slidingWindowSize.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Resilience4j",
        "Circuit Breaker"
      ],
      "keyPoints": [
        "Resilience4j is the modern replacement for Netflix Hystrix in Spring Cloud.",
        "resilience4j resilience4j-spring-boot2 io."
      ]
    },
    {
      "question": "How do you implement distributed tracing in Spring Boot with Sleuth and Zipkin?",
      "answer": "<p><strong>Spring Cloud Sleuth</strong> adds trace and span IDs to logs. <strong>Zipkin</strong> collects and visualizes traces.</p><h4>Dependencies</h4><pre><code>&lt;dependency&gt;\n    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;\n    &lt;artifactId&gt;spring-cloud-starter-sleuth&lt;/artifactId&gt;\n&lt;/dependency&gt;\n&lt;dependency&gt;\n    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;\n    &lt;artifactId&gt;spring-cloud-sleuth-zipkin&lt;/artifactId&gt;\n&lt;/dependency&gt;</code></pre><h4>Configuration</h4><pre><code>spring:\n  zipkin:\n    base-url: http://zipkin-server:9411/\n  sleuth:\n    sampler:\n      probability: 1.0  # Sample 100% in dev\n\n# In logs:\n# 2024-01-15 10:23:45.123 [order-service,abc123,def456,true]\n# serviceName,traceId,spanId,exportable</code></pre><p><strong>Trace Propagation:</strong> Sleuth automatically propagates trace context via HTTP headers (B3 propagation) when using <code>RestTemplate</code>, <code>WebClient</code>, or <code>Feign</code>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Distributed Tracing",
        "Sleuth",
        "Zipkin"
      ],
      "keyPoints": [
        "Spring Cloud Sleuth adds trace and span IDs to logs.",
        "Zipkin collects and visualizes traces."
      ]
    },
    {
      "question": "How do you externalize configuration in Spring Boot microservices with Spring Cloud Config?",
      "answer": "<p><strong>Spring Cloud Config Server</strong> centralizes configuration for all microservices, supporting Git-backed versioned configs.</p><h4>Config Server</h4><pre><code>@SpringBootApplication\n@EnableConfigServer\npublic class ConfigServerApplication { }\n\n# application.yml (Config Server)\nspring:\n  cloud:\n    config:\n      server:\n        git:\n          uri: https://github.com/company/config-repo\n          clone-on-start: true</code></pre><h4>Client Service</h4><pre><code>@SpringBootApplication\n@RefreshScope\npublic class PaymentService { }\n\n# bootstrap.yml\nspring:\n  application:\n    name: payment-service\n  cloud:\n    config:\n      uri: http://localhost:8888\n\n# Use @Value with auto-refresh\n@Value(\"${payment.retry.max-attempts:3}\")\nprivate int maxRetryAttempts;\n\n# Trigger refresh without restart:\n# POST /actuator/refresh</code></pre><p><strong>Environment-specific:</strong> <code>payment-service.yml</code> (shared), <code>payment-service-dev.yml</code>, <code>payment-service-prod.yml</code>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Spring Cloud Config",
        "Configuration Management"
      ],
      "keyPoints": [
        "Spring Cloud Config Server centralizes configuration for all microservices, supporting Git-backed versioned configs.",
        "Config Server @SpringBootApplication @EnableConfigServer public class ConfigServerApplication { } # application."
      ]
    },
    {
      "question": "How do you build a microservice with Python and FastAPI?",
      "answer": "<p><strong>FastAPI</strong> is the modern choice for Python microservices — async, type-safe, auto-documented.</p><h4>Basic Service</h4><pre><code>from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\nimport httpx\n\napp = FastAPI(title=\"Order Service\", version=\"1.0\")\n\nclass Order(BaseModel):\n    id: int\n    product: str\n    quantity: int\n    status: str = \"PENDING\"\n\n@app.get(\"/orders/{order_id}\", response_model=Order)\nasync def get_order(order_id: int):\n    order = await fetch_order(order_id)\n    if not order:\n        raise HTTPException(status_code=404, detail=\"Order not found\")\n    return order\n\n@app.post(\"/orders\", status_code=201)\nasync def create_order(order: Order):\n    # Call inventory service via async HTTP client\n    async with httpx.AsyncClient() as client:\n        inventory = await client.get(\n            f\"http://inventory-service:8000/inventory/{order.product}\"\n        )\n    if inventory.json()[\"stock\"] &lt; order.quantity:\n        raise HTTPException(status_code=400, detail=\"Insufficient stock\")\n    return {\"id\": 123, **order.dict(), \"status\": \"CONFIRMED\"}</code></pre><p><strong>Run:</strong> <code>uvicorn main:app --host 0.0.0.0 --port 8000</code> — Auto-generated docs at <code>/docs</code> (Swagger UI).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Python",
        "FastAPI",
        "Async"
      ],
      "keyPoints": [
        "FastAPI is the modern choice for Python microservices — async, type-safe, auto-documented.",
        "Basic Service from fastapi import FastAPI, HTTPException from pydantic import BaseModel import httpx app = FastAPI(title=\"Order Service\", version=\"1."
      ]
    },
    {
      "question": "How do you implement service-to-service communication in Python microservices?",
      "answer": "<p>Python microservices typically use HTTP (REST/gRPC) or message brokers.</p><h4>Synchronous — HTTPX (Async)</h4><pre><code>import httpx\nfrom tenacity import retry, stop_after_attempt, wait_exponential\n\nclass InventoryClient:\n    def __init__(self, base_url: str):\n        self.base_url = base_url\n        self.client = httpx.AsyncClient(timeout=5.0)\n\n    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=1, max=10))\n    async def check_stock(self, product_id: str) -&gt; dict:\n        response = await self.client.get(f\"{self.base_url}/stock/{product_id}\")\n        response.raise_for_status()\n        return response.json()</code></pre><h4>Asynchronous — Kafka with aiokafka</h4><pre><code>from aiokafka import AIOKafkaProducer, AIOKafkaConsumer\nimport json\n\nasync def produce_event(topic: str, event: dict):\n    producer = AIOKafkaProducer(bootstrap_servers='kafka:9092')\n    await producer.start()\n    try:\n        await producer.send(topic, json.dumps(event).encode())\n    finally:\n        await producer.stop()\n\nasync def consume_events(topic: str):\n    consumer = AIOKafkaConsumer(topic, bootstrap_servers='kafka:9092', group_id='order-service')\n    await consumer.start()\n    try:\n        async for msg in consumer:\n            event = json.loads(msg.value.decode())\n            await process_event(event)\n    finally:\n        await consumer.stop()</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "HTTPX",
        "Kafka",
        "Async"
      ],
      "keyPoints": [
        "Python microservices typically use HTTP (REST/gRPC) or message brokers.",
        "Synchronous — HTTPX (Async) import httpx from tenacity import retry, stop_after_attempt, wait_exponential class InventoryClient: def __init__(self, base_url: str): self."
      ]
    },
    {
      "question": "How do you implement circuit breaker in Python microservices?",
      "answer": "<p>Use <strong>pybreaker</strong> or <strong>tenacity</strong> for circuit breaker and retry logic.</p><h4>Using pybreaker</h4><pre><code>import pybreaker\nfrom pybreaker import CircuitBreakerError\n\n# State: CLOSED → OPEN → HALF_OPEN\nbreaker = pybreaker.CircuitBreaker(\n    fail_max=5,      # Open after 5 failures\n    reset_timeout=60, # Try half-open after 60s\n    expected_exception=Exception\n)\n\n@breaker\nasync def call_payment_gateway(payment_request: dict):\n    async with httpx.AsyncClient() as client:\n        response = await client.post(\n            \"http://payment-service:8000/charge\",\n            json=payment_request,\n            timeout=5.0\n        )\n        response.raise_for_status()\n        return response.json()\n\n# Fallback\nasync def process_payment(payment_request: dict):\n    try:\n        return await call_payment_gateway(payment_request)\n    except CircuitBreakerError:\n        # Queue for later processing\n        await queue_payment_for_retry(payment_request)\n        return {\"status\": \"QUEUED\", \"message\": \"Payment queued\"}\n    except Exception as e:\n        logger.error(f\"Payment failed: {e}\")\n        raise</code></pre><p><strong>Alternative:</strong> <code>tenacity</code> is great for retries with exponential backoff and jitter.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Circuit Breaker",
        "Resilience"
      ],
      "keyPoints": [
        "Use pybreaker or tenacity for circuit breaker and retry logic.",
        "Using pybreaker import pybreaker from pybreaker import CircuitBreakerError # State: CLOSED → OPEN → HALF_OPEN breaker = pybreaker."
      ]
    },
    {
      "question": "How do you handle distributed transactions in Spring Boot with Saga pattern?",
      "answer": "<p>The <strong>Saga pattern</strong> manages long-running transactions across microservices using a sequence of local transactions.</p><h4>Choreography Saga (Event-Driven)</h4><pre><code>// Order Service — initiates saga\n@Service\npublic class OrderSaga {\n    @Autowired private ApplicationEventPublisher publisher;\n\n    @Transactional\n    public Order createOrder(OrderRequest request) {\n        Order order = orderRepo.save(new Order(request, Status.PENDING));\n        publisher.publishEvent(new OrderCreatedEvent(order.getId(), request));\n        return order;\n    }\n\n    @EventListener\n    @Transactional\n    public void on(PaymentCompletedEvent event) {\n        orderRepo.updateStatus(event.getOrderId(), Status.PAID);\n        publisher.publishEvent(new StockReservationRequestedEvent(event.getOrderId()));\n    }\n\n    @EventListener\n    @Transactional\n    public void on(StockReservedEvent event) {\n        orderRepo.updateStatus(event.getOrderId(), Status.CONFIRMED);\n    }\n\n    @EventListener\n    @Transactional\n    public void on(StockReservationFailedEvent event) {\n        orderRepo.updateStatus(event.getOrderId(), Status.CANCELLED);\n        publisher.publishEvent(new PaymentRefundRequestedEvent(event.getOrderId()));\n    }\n}</code></pre><p><strong>Orchestration Saga:</strong> Use <strong>Camunda</strong> or <strong>Temporal</strong> (formerly Cadence) for a central saga orchestrator that coordinates steps and handles compensations.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Saga",
        "Distributed Transactions"
      ],
      "keyPoints": [
        "The Saga pattern manages long-running transactions across microservices using a sequence of local transactions.",
        "publishEvent(new OrderCreatedEvent(order."
      ]
    },
    {
      "question": "How do you containerize and deploy Spring Boot microservices with Docker?",
      "answer": "<p><strong>Docker</strong> packages Spring Boot apps with JRE and dependencies for consistent deployment.</p><h4>Dockerfile (Multi-stage for smaller image)</h4><pre><code># Build stage\nFROM maven:3.9-eclipse-temurin-21-alpine AS build\nCOPY . /app\nWORKDIR /app\nRUN mvn clean package -DskipTests\n\n# Runtime stage\nFROM eclipse-temurin:21-jre-alpine\nCOPY --from=build /app/target/*.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]</code></pre><h4>Docker Compose for Local Dev</h4><pre><code>version: '3.8'\nservices:\n  eureka:\n    image: steeltoeoss/eureka-server\n    ports: [\"8761:8761\"]\n\n  order-service:\n    build: ./order-service\n    ports: [\"8081:8080\"]\n    environment:\n      - EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE=http://eureka:8761/eureka\n      - SPRING_PROFILES_ACTIVE=docker\n    depends_on: [eureka]\n\n  payment-service:\n    build: ./payment-service\n    ports: [\"8082:8080\"]\n    environment:\n      - EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE=http://eureka:8761/eureka\n    depends_on: [eureka]</code></pre><p><strong>Production:</strong> Use Kubernetes with Helm charts or Spring Boot's <code>buildpacks</code> (<code>mvn spring-boot:build-image</code>) for OCI-compliant images without Dockerfile.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Docker",
        "Deployment"
      ],
      "keyPoints": [
        "Docker packages Spring Boot apps with JRE and dependencies for consistent deployment.",
        "Dockerfile (Multi-stage for smaller image) # Build stage FROM maven:3."
      ]
    },
    {
      "question": "How do you implement centralized logging for Python microservices?",
      "answer": "<p>Use <strong>structlog</strong> for structured JSON logs and ship them to ELK or Grafana Loki.</p><h4>Setup</h4><pre><code>import structlog\nimport logging\nfrom pythonjsonlogger import jsonlogger\n\n# Configure structured logging\nstructlog.configure(\n    processors=[\n        structlog.stdlib.filter_by_level,\n        structlog.stdlib.add_logger_name,\n        structlog.stdlib.add_log_level,\n        structlog.stdlib.PositionalArgumentsFormatter(),\n        structlog.processors.TimeStamper(fmt=\"iso\"),\n        structlog.processors.StackInfoRenderer(),\n        structlog.processors.format_exc_info,\n        structlog.processors.JSONRenderer()\n    ],\n    context_class=dict,\n    logger_factory=structlog.stdlib.LoggerFactory(),\n)\n\nlogger = structlog.get_logger()\n\n# In your service with correlation ID\nfrom contextvars import ContextVar\nrequest_id: ContextVar[str] = ContextVar('request_id')\n\n@app.middleware(\"http\")\nasync def add_correlation_id(request, call_next):\n    req_id = request.headers.get('X-Request-ID', str(uuid.uuid4()))\n    request_id.set(req_id)\n    response = await call_next(request)\n    response.headers['X-Request-ID'] = req_id\n    return response\n\n@app.get(\"/orders/{order_id}\")\nasync def get_order(order_id: int):\n    logger.info(\n        \"fetching_order\",\n        order_id=order_id,\n        request_id=request_id.get(),\n        service=\"order-service\"\n    )\n    # ... fetch order</code></pre><p><strong>Ship to:</strong> Filebeat → Logstash → Elasticsearch, or directly to <strong>Loki</strong> with <code>grafana-agent</code>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Python",
        "Logging",
        "Observability",
        "Structlog"
      ],
      "keyPoints": [
        "Use structlog for structured JSON logs and ship them to ELK or Grafana Loki.",
        "Setup import structlog import logging from pythonjsonlogger import jsonlogger # Configure structured logging structlog."
      ]
    },
    {
      "question": "How do you implement event-driven architecture in Spring Boot with Kafka?",
      "answer": "<p><strong>Spring Kafka</strong> provides seamless integration with Apache Kafka for event-driven microservices.</p><h4>Producer</h4><pre><code>@Service\npublic class OrderEventPublisher {\n    @Autowired private KafkaTemplate&lt;String, OrderEvent&gt; kafkaTemplate;\n\n    public void publishOrderCreated(Order order) {\n        OrderEvent event = new OrderEvent(\"ORDER_CREATED\", order.getId(), order);\n        kafkaTemplate.send(\"orders.topic\", order.getId().toString(), event);\n    }\n}</code></pre><h4>Consumer</h4><pre><code>@Service\npublic class PaymentEventListener {\n    @KafkaListener(topics = \"orders.topic\", groupId = \"payment-service\")\n    public void handleOrderCreated(OrderEvent event) {\n        if (\"ORDER_CREATED\".equals(event.getType())) {\n            paymentService.processPayment(event.getOrderId());\n        }\n    }\n\n    @KafkaListener(topics = \"orders.topic\", groupId = \"inventory-service\")\n    public void handleInventoryReservation(OrderEvent event) {\n        inventoryService.reserveStock(event.getOrderId());\n    }\n}</code></pre><h4>Configuration</h4><pre><code>spring:\n  kafka:\n    bootstrap-servers: kafka:9092\n    producer:\n      key-serializer: org.apache.kafka.common.serialization.StringSerializer\n      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer\n    consumer:\n      group-id: ${spring.application.name}\n      auto-offset-reset: earliest</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Kafka",
        "Event-Driven"
      ],
      "keyPoints": [
        "Spring Kafka provides seamless integration with Apache Kafka for event-driven microservices.",
        "Producer @Service public class OrderEventPublisher { @Autowired private KafkaTemplate kafkaTemplate; public void publishOrderCreated(Order order) { OrderEvent event = new OrderEvent(\"ORDER_CREATED\", order."
      ]
    },
    {
      "question": "How do you implement health checks and readiness probes in Spring Boot and Python?",
      "answer": "<p>Health checks are critical for Kubernetes and load balancers to know when a service is ready to receive traffic.</p><h4>Spring Boot — Actuator</h4><pre><code># application.yml\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,prometheus\n  endpoint:\n    health:\n      show-details: always\n      probes:\n        enabled: true  # /actuator/health/liveness and /readiness\n\n# Custom health indicator\n@Component\npublic class DatabaseHealthIndicator implements HealthIndicator {\n    @Autowired private DataSource dataSource;\n\n    @Override\n    public Health health() {\n        try (Connection conn = dataSource.getConnection()) {\n            if (conn.isValid(1)) {\n                return Health.up().withDetail(\"database\", \"Accessible\").build();\n            }\n        } catch (SQLException e) {\n            return Health.down().withException(e).build();\n        }\n        return Health.down().withDetail(\"database\", \"Unreachable\").build();\n    }\n}</code></pre><h4>Python — FastAPI Health Checks</h4><pre><code>from fastapi import FastAPI\nfrom fastapi.responses import JSONResponse\nimport asyncpg\n\n@app.get(\"/health\")\nasync def health_check():\n    return {\"status\": \"UP\", \"version\": \"1.0.0\"}\n\n@app.get(\"/ready\")\nasync def readiness_check():\n    try:\n        conn = await asyncpg.connect(DATABASE_URL)\n        await conn.fetchval('SELECT 1')\n        await conn.close()\n        return JSONResponse({\"status\": \"READY\"}, status_code=200)\n    except Exception as e:\n        return JSONResponse({\"status\": \"NOT_READY\", \"error\": str(e)}, status_code=503)</code></pre><p><strong>Kubernetes:</strong> Configure <code>livenessProbe</code> (restart if failing) and <code>readinessProbe</code> (remove from service if failing) in deployment YAML.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Python",
        "Health Checks",
        "Kubernetes"
      ],
      "keyPoints": [
        "Health checks are critical for Kubernetes and load balancers to know when a service is ready to receive traffic.",
        "Spring Boot — Actuator # application."
      ]
    }
  ]
}
