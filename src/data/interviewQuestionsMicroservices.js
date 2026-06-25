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
    },
    {
      "question": "Payment succeeded but Inventory failed — how would you maintain data consistency across services?",
      "answer": "<p>This is the classic <strong>distributed transaction</strong> problem across services that own their own databases. You cannot use a single ACID transaction, so you need a <strong>Saga pattern</strong> to get eventual consistency with explicit compensation when something fails.</p><h4>Choreography-based saga (event-driven)</h4><ul><li>Order service creates the order in PENDING state and publishes <code>OrderCreated</code>.</li><li>Payment service consumes the event, charges the customer, commits its local DB, publishes <code>PaymentSucceeded</code>.</li><li>Inventory service tries to reserve stock. On success: publishes <code>StockReserved</code>. On failure: publishes <code>StockReservationFailed</code>.</li><li>On failure, payment service consumes <code>StockReservationFailed</code> and runs a <strong>compensating transaction</strong>: refunds the payment and emits <code>PaymentRefunded</code>.</li><li>Order service consumes <code>StockReserved</code> → CONFIRMED, or <code>PaymentRefunded</code> → CANCELLED.</li></ul><h4>Orchestration-based saga</h4><ul><li>A central orchestrator (Camunda, Temporal, or a custom state machine) tells each service what to do and tracks the saga state.</li><li>Each service reports success/failure to the orchestrator; the orchestrator drives compensations.</li><li>Better for complex flows; easier to visualize, test, and add new steps.</li></ul><h4>Key concerns</h4><ul><li><strong>Idempotency</strong> — Every step must be safe to retry. Use a unique <code>idempotency_key</code> per saga instance and dedupe on the consumer side.</li><li><strong>Event ordering</strong> — Use event version + saga id as the partition key, or use an outbox to publish events in commit order.</li><li><strong>Monitoring</strong> — Track every saga state transition, alert on stuck sagas, expose a saga-replay tool for support.</li><li><strong>Outbox / inbox</strong> — To avoid the dual-write problem, write the DB change and the outbound event in a single local transaction (transactional outbox), and a separate poller publishes to the broker.</li></ul><pre><code>// Orchestrator (pseudo)\nsaga.state = AWAITING_PAYMENT\npaymentService.charge(orderId, amount)\nsaga.on(PaymentSucceeded) -&gt; state = AWAITING_STOCK; inventoryService.reserve(orderId, items)\nsaga.on(StockReserved)    -&gt; state = CONFIRMED\nsaga.on(StockFailed)      -&gt; paymentService.refund(orderId); state = REFUND_PENDING\nsaga.on(PaymentRefunded)  -&gt; state = CANCELLED</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Saga",
        "Microservices",
        "Consistency",
        "Kafka"
      ],
      "keyPoints": [
        "Use the Saga pattern: local transactions in each service, with a compensating transaction (refund) when a later step fails.",
        "Idempotency, event ordering, and monitoring are the three things that turn a saga from a demo into a production system.",
        "A transactional outbox avoids the dual-write problem so a DB commit and the outgoing event cannot diverge."
      ]
    },
    {
      "question": "A Kafka consumer updates the database but crashes before offset commit — how would you prevent duplicate processing?",
      "answer": "<p>Kafka gives <strong>at-least-once</strong> delivery by default: a message can be re-delivered if the consumer crashes between processing and offset commit. If the consumer already wrote to the DB before committing, the next poll will replay the same message and write it again — duplicate processing.</p><h4>Layered defenses</h4><ul><li><strong>Consumer-side idempotency</strong> — Every event carries a unique <code>event_id</code>. Before applying, the consumer checks a <code>processed_events</code> table; if present, skip. Apply and insert in the same DB transaction so a crash still leaves a consistent state.</li><li><strong>Transactional outbox + consumer-driven offset commit</strong> — The DB write and the offset commit must be atomic. Pattern: write the business change to the DB in a local transaction that also writes the new offset to an <code>outbox</code> or <code>offsets</code> table; a separate poller commits the offset to Kafka only after the DB transaction succeeds. If the consumer crashes mid-flight, the offset is never advanced and the message is re-delivered — but the dedup table makes the second pass a no-op.</li><li><strong>Kafka transactions (consume-process-produce)</strong> — Use <code>producer.sendOffsetsToTransaction()</code> inside a Kafka transaction. The atomic unit is: consume + process + produce + commit offset, all-or-nothing. This is \"exactly-once\" semantics across Kafka topics but <strong>not</strong> across an external DB unless you also use a Kafka Connect sink or 2PC.</li><li><strong>Idempotent producers</strong> — <code>enable.idempotence=true</code> prevents producer-side duplicates within a session.</li><li><strong>Manual commit only after success</strong> — <code>enable.auto.commit=false</code>, call <code>consumer.commitSync()</code> only after the DB write completes. The default of auto-commit on poll is the trap.</li></ul><h4>Common pattern in practice</h4><ul><li>DB unique constraint on <code>event_id</code> as a backstop — even if the dedup logic fails, the DB rejects the duplicate row.</li><li>Use <code>INSERT ... ON CONFLICT DO NOTHING</code> (Postgres) or <code>INSERT IGNORE</code> (MySQL) for the dedup table.</li><li>Track a <code>last_processed_at</code> watermark to detect and replay suspicious gaps.</li></ul><pre><code>// Consumer with idempotency + manual commit\n@KafkaListener(topics = \"orders\", groupId = \"payment-service\")\npublic void onMessage(ConsumerRecord&lt;String, OrderEvent&gt; rec,\n                      @Header(KafkaHeaders.OFFSET) long off,\n                      Acknowledgment ack) {\n    String eventId = rec.value().getEventId();\n    try {\n        jdbc.update(\"\"\"\n            INSERT INTO processed_events(event_id, processed_at)\n            VALUES (?, now()) ON CONFLICT DO NOTHING\n        \"\"\", eventId);\n        if (jdbc.queryForObject(\"SELECT changes()\", Integer.class) == 0) {\n            ack.acknowledge();        // already processed\n            return;\n        }\n        paymentService.charge(rec.value());   // your business logic\n        ack.acknowledge();                    // commit offset only after success\n    } catch (Exception e) {\n        // do NOT acknowledge; broker will redeliver\n        throw e;\n    }\n}</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Kafka",
        "Idempotency",
        "Reliability",
        "Outbox"
      ],
      "keyPoints": [
        "Kafka default is at-least-once; a crash between DB write and offset commit causes duplicates on the next poll.",
        "Fix it with consumer-side idempotency (event_id + dedup table) and disable auto-commit; transactional outbox or Kafka transactions give stronger guarantees.",
        "The DB unique constraint on event_id is the cheapest backstop — let the database enforce it."
      ]
    },
    {
      "question": "You have 10 consumers and 3 Kafka partitions — how many consumers will actually process messages?",
      "answer": "<p>Only <strong>3</strong> consumers will process messages. The remaining 7 will sit idle in the same consumer group with no partitions assigned.</p><h4>Why</h4><ul><li>A Kafka partition is the unit of parallelism inside a consumer group — at most one consumer in a group reads from a given partition at a time.</li><li>With 3 partitions and 10 consumers in the same group, the group coordinator assigns each partition to exactly one consumer. 3 consumers get 1 partition each, the other 7 are idle.</li><li>This is by design: it is how Kafka preserves <strong>ordering per partition</strong> and avoids two consumers reading the same message in parallel.</li></ul><h4>How to use all 10</h4><ul><li><strong>Increase the partition count to &ge; 10</strong>. The maximum number of active consumers in a group equals the partition count.</li><li>Reassigning is automatic: when partition count changes, the group rebalances. The new partitions get distributed across all 10 consumers.</li><li>Plan partition count up front based on peak parallelism needs. Adding partitions later is allowed, removing them is not.</li></ul><h4>What you should know</h4><ul><li>More partitions = more parallelism but also more open file handles, more controller-state overhead, and slightly higher end-to-end latency. Do not blindly max it out.</li><li>Partition keys matter: events with the same key always land in the same partition, so order is preserved for that key. Uneven keys = skewed partitions = some consumers work harder than others.</li><li>Rebalancing pauses all consumers in the group briefly. Keep session timeouts and processing latency sensible to avoid frequent rebalances.</li></ul><pre><code>// Check the current assignment\n./kafka-consumer-groups.sh --bootstrap-server localhost:9092 \\\n  --describe --group payment-service\n\n// Result: 3 consumers, 3 partitions assigned\n// To utilize 10, increase partitions\n./kafka-topics.sh --bootstrap-server localhost:9092 \\\n  --alter --topic orders --partitions 10\n\n// Keyed messages still go to the same partition\nproducer.send(new ProducerRecord&lt;&gt;(\"orders\", orderId, payload));\n//   ^ partition = hash(orderId) % 10</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Kafka",
        "Partitions",
        "Scalability"
      ],
      "keyPoints": [
        "Maximum active consumers in a group = partition count. With 3 partitions, only 3 of the 10 consumers do work; the rest are idle.",
        "Increase partitions to &ge; 10 to use all 10 consumers. The group rebalances automatically.",
        "Partition keys control ordering and skew — a hot key keeps all its traffic on one partition regardless of consumer count."
      ]
    },
    {
      "question": "When would you choose Kafka over synchronous REST communication?",
      "answer": "<p>The choice is about <strong>coupling, latency, and fan-out</strong>. Kafka wins on loose coupling, durability, and many consumers; REST wins on request-response simplicity and low end-to-end latency.</p><h4>Choose Kafka when</h4><ul><li><strong>You need to decouple producers from consumers</strong> — the producer does not need a response, does not need to know who consumes, and should not block waiting.</li><li><strong>Multiple consumers need the same event</strong> — fan-out to 3+ services (search index, analytics, audit, notifications) without the producer making 3 calls.</li><li><strong>You need durability and replay</strong> — events are persisted; new consumers can read history; a crash does not lose data.</li><li><strong>High throughput, batch-friendly workloads</strong> — millions of events/sec, batching, compression, horizontal partition-based scaling.</li><li><strong>Event-driven architecture / CQRS / async workflows</strong> — order placed → payment → inventory → shipping, with each step async.</li><li><strong>Buffering / load leveling</strong> — protect a downstream service from traffic spikes; consumers process at their own pace.</li></ul><h4>Choose REST when</h4><ul><li><strong>Request-response is the model</strong> — \"get me the user profile\", \"create a record and return its id\".</li><li><strong>Low latency matters</strong> — REST over HTTP/2 is single-digit ms; Kafka commit + replication is tens of ms.</li><li><strong>Strong, immediate consistency is required</strong> — caller learns the outcome right now; no eventual consistency window.</li><li><strong>Simple queries</strong> — single GET, no fan-out, no need for replay.</li><li><strong>Browser/mobile clients</strong> — Kafka is not designed for direct client consumption; the gateway calls REST, REST may trigger Kafka.</li></ul><h4>Often both</h4><ul><li>REST for the request, Kafka for the async follow-ups. \"Place order\" returns 202 with an order id; payment, inventory, email are async via Kafka.</li><li>This is the standard <strong>API gateway → command service → Kafka → worker services</strong> pattern.</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Kafka",
        "REST",
        "Architecture",
        "Communication"
      ],
      "keyPoints": [
        "Pick Kafka for loose coupling, fan-out to many consumers, durability, replay, and high throughput.",
        "Pick REST for low-latency request-response, simple queries, and when the caller needs an immediate answer.",
        "Most real systems use both: REST for the synchronous entry point, Kafka for the asynchronous downstream work."
      ]
    },
    {
      "question": "If you were reviewing a microservices architecture, what are the top 3 risks you would look for?",
      "answer": "<p>Reviews of microservices architecture should focus on the failure modes that are hard to fix later. The top three are: <strong>idempotency, isolation, and observability</strong>. After that, the rest is polish.</p><h4>1. Lack of idempotency</h4><ul><li>Any operation that can be retried — REST calls, Kafka consumers, scheduled jobs, sagas — must produce the same result on the second attempt.</li><li>Look for: missing <code>idempotency_key</code> on POST endpoints, Kafka consumers that do not dedupe, payment/email/SMS that fire multiple times on retry.</li><li>Cheap check: trace one user-facing request end-to-end and see what happens if a step is replayed 5 times. If users get 5 emails, the system is not idempotent.</li></ul><h4>2. No circuit breaker, timeouts, or bulkheads</h4><ul><li>Without circuit breakers, one slow downstream cascades into thread-pool exhaustion, latency spikes, and full-system outages.</li><li>Look for: <code>@CircuitBreaker</code> or Resilience4j / Hystrix config on every external call, timeouts on every HTTP client (not unbounded), per-downstream bulkheads so a slow <code>analytics</code> service cannot starve <code>payment</code>.</li><li>Cheap check: open dashboard for any service, kill its DB, see what happens to the upstream services within 30s.</li></ul><h4>3. Shared database / tight coupling through data</h4><ul><li>Two services writing to the same table, or one service reading the other services tables directly, kills independent deployability. The \"database per service\" rule is one of the hardest to enforce and one of the most violated.</li><li>Look for: services that share schemas, foreign keys across service boundaries, joins between tables owned by different teams, direct table reads outside the service own API.</li></ul><h4>Other risks worth flagging</h4><ul><li><strong>No DLQ</strong> — poison messages block the partition forever.</li><li><strong>No distributed tracing</strong> — you cannot debug a 7-service request without it.</li><li><strong>No graceful shutdown</strong> — SIGKILL drops in-flight work; consumer offsets are committed only on next poll.</li><li><strong>No API versioning</strong> — breaking changes take down clients with no warning.</li><li><strong>Synchronous chains &gt; 2 hops</strong> — A → B → C → D, all REST, multiplies tail latency and amplifies blast radius.</li></ul>",
      "difficulty": "Advanced",
      "tags": [
        "Microservices",
        "Architecture",
        "Reliability",
        "Review"
      ],
      "keyPoints": [
        "Top 3: (1) idempotency missing on retried operations, (2) no circuit breakers/timeouts causing cascading failures, (3) shared database breaking the service boundary.",
        "Also check for: no DLQ for poison messages, no distributed tracing, no graceful shutdown, and breaking API changes with no versioning.",
        "The cheapest review technique: take one production request, replay it 5 times, kill one DB, and watch the system."
      ]
    },
    {
      "question": "An API latency increases from 100ms to 5 seconds in production — what would you investigate first?",
      "answer": "<p>Go from <strong>outside-in</strong>: identify which component is slow, then drill into the cause. Do not guess; measure.</p><h4>Step 1 — Find the slow component (5 min)</h4><ul><li>Pull up the APM / distributed tracing dashboard (Jaeger, Zipkin, Datadog APM, New Relic). Find the slowest span in the request trace.</li><li>Check service-level RED metrics: Rate, Errors, Duration per service and per endpoint. The service with the worst P99 is your starting point.</li><li>If the slow span is the entire service and not a downstream call, the problem is in the service itself (GC, CPU, thread pool, event loop saturation).</li></ul><h4>Step 2 — Database (most common cause)</h4><ul><li>Check slow query log / <code>pg_stat_statements</code> / <code>performance_schema</code> for new slow queries.</li><li>Look for: missing index on a recently-added WHERE clause, full table scans after a stats update, lock contention (look for <code>waiting</code> / <code>blocked</code> on <code>pg_locks</code> or InnoDB row locks).</li><li>Check for <strong>N+1 queries</strong>: a request that fires 100 small queries instead of one batched query. Common with ORMs after a schema change.</li><li>Connection pool saturation: HikariCP <code>pending</code> connections climbing means the DB is slow, not the app.</li></ul><h4>Step 3 — JVM / runtime</h4><ul><li>GC pauses: <code>jstat -gc</code> or Micrometer GC metrics. Long stop-the-world pauses &gt; 1s indicate a heap that is too small, too large, or a memory leak.</li><li>Thread dump (kill -3 or jstack) — look for threads stuck on the same lock or all threads in <code>BLOCKED</code> on a database connection.</li><li>Circuit-breaker half-open: a downstream came back and is being hit with a thundering herd.</li></ul><h4>Step 4 — Downstream services</h4><ul><li>Latency to a downstream call is high — is the downstream itself slow, or is there a network problem in between?</li><li>Check timeouts: are they set to a sane value (e.g. 2s for sync calls) or are they unbounded so a slow call holds a thread for 30s?</li><li>Retry storms: a downstream briefly failed, retries amplified load 5x, now it is truly down.</li></ul><h4>Step 5 — Resource saturation</h4><ul><li>CPU: <code>top</code> / container metrics. Near-100% on a single core = single-threaded bottleneck (often JSON serialization or a hot lock).</li><li>Memory: OOMKilled pods, swap usage.</li><li>File descriptors, ephemeral ports, sockets in <code>TIME_WAIT</code>.</li><li>Thread pool / event loop saturation: Tomcat <code>threads.busy</code>, Netty event loop queue depth, Node.js event loop lag.</li></ul><h4>Step 6 — Network / infra</h4><ul><li>DNS resolution (every uncached lookup is a latency hit; some services do this per request).</li><li>TLS handshake — first request to a new host is slow; check keepalive is on.</li><li>VPC routing / NAT gateway saturation / cross-AZ traffic that used to be same-AZ.</li><li>Load balancer health-check flapping causing connection churn.</li></ul><h4>Step 7 — Recent changes</h4><ul><li>Was there a deploy in the last hour? Roll back or compare with last-known-good.</li><li>Was a new feature flag enabled? A migration applied? A new dependency added?</li><li>Was there a traffic pattern change — a specific customer, a new campaign, a scheduled job running at the wrong time?</li></ul><pre><code>// Quick triage commands\ncurl -w '@%{time_total}\\n' -o /dev/null -s https://api/orders/42   // confirm latency from outside\nkubectl logs -p deploy/order-service --tail=200 | grep -i 'timeout\\|exception'\nkubectl top pod -l app=order-service --sort-by=memory\njstack &lt;pid&gt; | grep BLOCKED -A 20 | head -50\n\n// In the trace: identify the slowest span first\ntrace.span(\"db.query\").setTag(\"db.statement\", sql)\n        .setTag(\"db.row_count\", rows)\n        .durationMs()</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "Microservices",
        "Performance",
        "Debugging",
        "Production"
      ],
      "keyPoints": [
        "Start with distributed tracing to find the slowest span, then drill into DB → JVM → downstream → resources → network → recent changes.",
        "The database is the most common culprit — check for missing indexes, N+1 queries, lock contention, and connection pool saturation before anything else.",
        "Always check what changed recently: a deploy, a migration, a feature flag, or a traffic pattern shift explains most production incidents."
      ]
    }
  ]
}
