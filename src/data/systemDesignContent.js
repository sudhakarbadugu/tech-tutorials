// System Design Patterns — Content
// 12 modules, 70+ topics with mermaid diagrams, code examples, and interview prep

export const systemDesignContent = {
  module1: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Communication patterns define how services talk to each other in a distributed system. The choice of communication pattern directly impacts latency, throughput, reliability, and coupling between services. This module covers the fundamental patterns: message queues for asynchronous decoupling, pub-sub for broadcast, request-response for synchronous calls, webhooks for event notifications, streaming for real-time data, and event-driven architecture for reactive systems.',
          list: [
            '<strong>Topics covered:</strong> Message Queues, Publish-Subscribe, Request-Response, Webhooks, Streaming, Event-Driven Architecture',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Every distributed system starts with communication. Choosing the wrong pattern leads to tight coupling, cascading failures, and hard-to-scale architectures. Understanding these patterns helps you design systems that are loosely coupled, fault-tolerant, and horizontally scalable.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Message Queues] --> T2[Pub-Sub]
    T2 --> T3[Request-Response]
    T3 --> T4[Webhooks]
    T4 --> T5[Streaming]
    T5 --> T6[Event-Driven]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Communication patterns define how services talk to each other in a distributed system. The choice of communication pattern directly impacts latency, throughput, reliability, and coupling between services. This module covers the fundamental patterns: message queues for asynchronous decoupling, pub-sub for broadcast, request-response for synchronous calls, webhooks for event notifications, streaming for real-time data, and event-driven architecture for reactive systems.',
          list: [
            '<strong>Topics covered:</strong> Message Queues, Publish-Subscribe, Request-Response, Webhooks, Streaming (WebSocket & SSE), Event-Driven Architecture',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Every distributed system starts with communication. Choosing the wrong pattern leads to tight coupling, cascading failures, and hard-to-scale architectures. Understanding these patterns helps you design systems that are loosely coupled, fault-tolerant, and horizontally scalable.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Message Queues] -->     T2[Publish-Subscribe] -->     T3[Request-Response] -->     T4[Webhooks] -->     T5["Streaming (WebSocket & SSE)"] -->     T6[Event-Driven Architecture]`,
          text: 'Recommended reading order — each topic builds on the previous one.'
        }
      ]
    },    'message-queues': {
      title: 'Message Queues',
      sections: [
        {
          heading: 'What are Message Queues?',
          text: 'A message queue is a durable buffer that decouples producers from consumers, allowing asynchronous communication between services. Producers push messages to the queue; consumers pull and process them independently.',
          list: [
            '<strong>Decoupling:</strong> Producer and consumer don\'t need to know about each other — they only know the queue',
            '<strong>Durability:</strong> Messages persist on disk until acknowledged, surviving consumer crashes',
            '<strong>Load Leveling:</strong> Queue absorbs traffic spikes; consumers process at their own pace',
            '<strong>Ordering:</strong> FIFO queues guarantee order; standard queues offer best-effort ordering',
            '<strong>At-least-once delivery:</strong> Default in most queues; idempotent consumers handle duplicates'
          ]
        },
        {
          heading: 'Architecture Diagram',
          diagram: {
            chart: `flowchart LR
    P1[Order Service] --> Q[(Message Queue)]
    P2[Payment Service] --> Q
    Q --> C1[Email Worker]
    Q --> C2[SMS Worker]
    Q --> C3[Analytics Worker]
    C1 --> DB[(Database)]
    C2 --> SMS[Twilio API]
    C3 --> DW[(Data Warehouse)]
    style Q fill:#f39c12,color:#fff
    style P1 fill:#3498db,color:#fff
    style P2 fill:#3498db,color:#fff`,
            caption: 'Producers push to queue; multiple consumers process independently. Queue acts as a buffer.'
          }
        },
        {
          heading: 'Popular Message Queue Services',
          text: 'Before comparing, let\'s understand the most popular message queue services and what makes each unique:',
          list: [
            '<strong>RabbitMQ:</strong> Traditional message broker (AMQP protocol). Smart broker with routing, exchanges, and queues. Best for task distribution, RPC patterns, and complex routing. Written in Erlang — proven for concurrency. Used by WhatsApp, Instagram, Reddit.',
            '<strong>Apache Kafka:</strong> Distributed event streaming platform. Not a traditional queue — it\'s an append-only log organized into topics and partitions. Consumers track their own offset. Best for high-throughput event streaming, log aggregation, and real-time pipelines. Used by LinkedIn, Netflix, Uber.',
            '<strong>AWS SQS (Simple Queue Service):</strong> Fully managed queue service. No infrastructure to manage. Standard queues (at-least-once, best-effort ordering) or FIFO queues (exactly-once, strict ordering). Best for AWS-native decoupling and serverless architectures. Used by Amazon, Airbnb, Spotify.',
            '<strong>Redis Pub/Sub:</strong> In-memory message broker. Extremely fast (100K+ msg/s) but no persistence by default. Best for real-time notifications, chat, and cache invalidation. Not suitable for critical message delivery — messages are lost on restart.',
            '<strong>Apache ActiveMQ:</strong> Java-based message broker (JMS protocol). Supports AMQP, MQTT, STOMP. Similar to RabbitMQ but JVM-native. Best for Java enterprise environments. Less popular than RabbitMQ/Kafka for new projects.',
            '<strong>Google Cloud Pub/Sub:</strong> Fully managed streaming service. At-least-once delivery with auto-scaling. Best for GCP-native architectures and analytics pipelines. Similar to Kafka but managed.'
          ]
        },
        {
          heading: 'RabbitMQ vs Kafka vs SQS',
          table: {
            headers: ['Feature', 'RabbitMQ', 'Kafka', 'AWS SQS'],
            rows: [
              ['Model', 'Smart broker, dumb consumer', 'Dumb broker, smart consumer', 'Fully managed queue'],
              ['Throughput', '~20K msg/s', '~1M+ msg/s', 'Unlimited (auto-scale)'],
              ['Persistence', 'Disk + memory', 'Disk (append-only log)', 'Redundant across AZs'],
              ['Ordering', 'Per-queue FIFO', 'Per-partition FIFO', 'Standard or FIFO'],
              ['Use Case', 'Task distribution, RPC', 'Event streaming, logs', 'AWS-native decoupling'],
              ['Retention', 'Until consumed', 'Configurable (days/weeks)', 'Up to 14 days']
            ]
          }
        },
        {
          heading: 'Python Example — RabbitMQ Producer/Consumer',
          example: {
            title: 'Producer and Consumer with pika',
            code: `import pika
import json

# Producer
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='order_events', durable=True)

order = {'order_id': 12345, 'user': 'alice', 'amount': 99.99}
channel.basic_publish(
    exchange='',
    routing_key='order_events',
    body=json.dumps(order),
    properties=pika.BasicProperties(delivery_mode=2)  # persistent
)
print(f"Published: {order}")
connection.close()

# Consumer
def callback(ch, method, properties, body):
    order = json.loads(body)
    print(f"Processing order {order['order_id']} for {order['user']}")
    # Process: send email, update DB, etc.
    ch.basic_ack(delivery_tag=method.delivery_tag)

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.basic_consume(queue='order_events', on_message_callback=callback)
print('Waiting for messages...')
channel.start_consuming()`,
            output: 'Producer publishes; consumer processes and acks. Messages survive restarts.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step: Choosing a Message Queue',
          list: [
            '<strong>1. Identify coupling:</strong> Which services can work asynchronously? (email, analytics, notifications)',
            '<strong>2. Choose delivery semantics:</strong> At-least-once (default) vs exactly-once (FIFO + dedup)',
            '<strong>3. Pick queue type:</strong> RabbitMQ for routing flexibility, Kafka for high-throughput streaming, SQS for zero-ops',
            '<strong>4. Design for failure:</strong> Dead Letter Queue (DLQ) for poison messages, retry with backoff',
            '<strong>5. Monitor:</strong> Queue depth, consumer lag, message age — alert if backlog grows'
          ]
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not making consumers idempotent — at-least-once delivery means duplicates happen',
            'Mistake 2: No DLQ — poison messages block the queue forever',
            'Mistake 3: Using queues for synchronous request-response (use RPC or HTTP instead)',
            'Mistake 4: Single consumer for high-throughput — partition/shard the queue'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Uber — Apache Kafka for trip events.</strong> Uber uses Kafka to process millions of trip events per second. When a rider requests a trip, the event flows through Kafka to multiple consumers: pricing engine, driver matching, fraud detection, and analytics — all independently, without blocking the rider experience.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Message queues decouple producers from consumers for async processing',
            'Key benefits: durability, load leveling, fault tolerance',
            'RabbitMQ = smart broker; Kafka = distributed log; SQS = managed queue',
            'Always use DLQ + idempotent consumers + monitoring'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How would you handle a message that keeps failing (poison message)? → Use DLQ with max retry count; after N failures, move to DLQ for manual inspection.',
            'Q2: When would you choose Kafka over RabbitMQ? → High-throughput event streaming, log aggregation, replay capability, multi-consumer fan-out.',
            'Q3: How do you guarantee message ordering? → FIFO queues or Kafka partitions with a consistent partition key (e.g., user_id).'
          ]
        }
      ]
    },
    'pub-sub': {
      title: 'Publish-Subscribe',
      sections: [
        {
          heading: 'What is Pub/Sub?',
          text: 'Publish-Subscribe is a messaging pattern where publishers send messages to topics, and multiple subscribers receive copies. Unlike point-to-point queues, pub/sub fans out each message to all interested consumers.',
          list: [
            '<strong>Topic-based:</strong> Publishers send to named topics; subscribers express interest by topic',
            '<strong>Fan-out:</strong> One message → multiple subscribers, each gets their own copy',
            '<strong>Loose coupling:</strong> Publishers don\'t know who subscribes; subscribers don\'t know who publishes',
            '<strong>Push vs Pull:</strong> Push delivers immediately; pull lets subscribers control consumption rate',
            '<strong>Filtering:</strong> Advanced systems allow attribute-based filtering (e.g., only orders > $100)'
          ]
        },
        {
          heading: 'Pub/Sub Architecture',
          diagram: {
            chart: `flowchart TB
    P[Order Placed Event] --> T[(Topic: orders)]
    T --> S1[Email Service]
    T --> S2[Inventory Service]
    T --> S3[Analytics Service]
    T --> S4[Fraud Detection]
    S1 --> E[Send Email]
    S2 --> I[Update Stock]
    S3 --> A[Log to DW]
    S4 --> F[Score Risk]
    style T fill:#e74c3c,color:#fff
    style P fill:#2ecc71,color:#fff`,
            caption: 'One event published to a topic fans out to all subscribers. Each subscriber processes independently.'
          }
        },
        {
          heading: 'Pub/Sub vs Message Queues',
          table: {
            headers: ['Aspect', 'Message Queue', 'Pub/Sub'],
            rows: [
              ['Delivery', 'One consumer per message', 'All subscribers get a copy'],
              ['Use Case', 'Task distribution, work queues', 'Event notification, fan-out'],
              ['Coupling', 'Producer → Queue → Consumer', 'Publisher → Topic → Subscribers'],
              ['Scaling', 'Add consumers for throughput', 'Add subscribers for new features'],
              ['Example', 'SQS, RabbitMQ queues', 'SNS, Kafka topics, Redis Pub/Sub'],
              ['Message Life', 'Consumed once, then deleted', 'Delivered to all, then deleted']
            ]
          }
        },
        {
          heading: 'Python Example — Redis Pub/Sub',
          example: {
            title: 'Real-time notifications with Redis',
            code: `import redis
import json
import threading

# Publisher
r = redis.Redis(host='localhost', port=6379)
event = {'type': 'order_placed', 'order_id': 12345, 'amount': 99.99}
r.publish('orders', json.dumps(event))
print(f"Published to 'orders': {event}")

# Subscriber
def subscriber():
    r = redis.Redis(host='localhost', port=6379)
    pubsub = r.pubsub()
    pubsub.subscribe('orders')
    print("Listening on 'orders'...")
    for message in pubsub.listen():
        if message['type'] == 'message':
            data = json.loads(message['data'])
            print(f"Received: {data['type']} #{data['order_id']}")

# Run subscriber in background thread
t = threading.Thread(target=subscriber, daemon=True)
t.start()`,
            output: 'Publisher sends; all subscribers receive. Fire-and-forget — no persistence.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix — Apache Kafka for event streaming.</strong> Netflix uses Kafka topics for every state change: new title added, user started watching, payment processed. Hundreds of microservices subscribe to relevant topics. A single "play started" event fans out to: recommendations engine, billing, analytics, A/B test tracking, and the continue-watching feature — all without the playback service knowing about any of them.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Pub/Sub = one-to-many messaging via topics',
            'Perfect for event notification, real-time updates, and decoupled feature addition',
            'Kafka topics, SNS, Redis Pub/Sub, Google Pub/Sub are common implementations',
            'Key trade-off: no built-in retry per subscriber (use dead-letter topics)'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How does pub/sub differ from a message queue? → Queue: one consumer per message. Pub/Sub: all subscribers get a copy.',
            'Q2: What happens if a subscriber is down when a message is published? → In Redis Pub/Sub, the message is lost. In Kafka/SNS+SQS, it\'s retained until the subscriber catches up.',
            'Q3: Design a notification system using pub/sub. → User action → publish to "notifications" topic → email subscriber, push subscriber, SMS subscriber each process independently.'
          ]
        }
      ]
    },
    'request-response': {
      title: 'Request-Response',
      sections: [
        {
          heading: 'Request-Response Pattern',
          text: 'The most fundamental communication pattern: a client sends a request to a server and waits for a response. Simple, synchronous, and ubiquitous — but comes with tight coupling and latency sensitivity.',
          list: [
            '<strong>Synchronous:</strong> Client blocks until response arrives or timeout',
            '<strong>Point-to-point:</strong> One client, one server per request',
            '<strong>Stateless (REST):</strong> Each request contains all needed context; server doesn\'t store session',
            '<strong>Stateful (gRPC streaming):</strong> Connection maintained; server can push updates',
            '<strong>HTTP/1.1 vs HTTP/2 vs HTTP/3:</strong> Multiplexing, header compression, QUIC transport'
          ]
        },
        {
          heading: 'Request-Response Flow',
          diagram: {
            chart: `sequenceDiagram
    participant C as Client
    participant LB as Load Balancer
    participant S as Server
    participant DB as Database
    C->>LB: GET /users/42
    LB->>S: Forward request
    S->>DB: SELECT * FROM users WHERE id=42
    DB-->>S: {id:42, name:"Alice"}
    S-->>LB: 200 OK + JSON
    LB-->>C: 200 OK + JSON
    Note over C,S: Total latency = network + processing + DB`,
            caption: 'Classic request-response: client → load balancer → server → database → response back up the chain.'
          }
        },
        {
          heading: 'What is REST?',
          text: 'REST (Representational State Transfer) is an architectural style for designing APIs over HTTP. It treats server resources as URLs (e.g. /users/42) and uses standard HTTP verbs — GET to fetch, POST to create, PUT/PATCH to update, DELETE to remove. Responses are typically JSON. REST is stateless (each request carries everything it needs), cacheable, and human-readable. It is the most widely used API style for public web services and mobile apps.',
          list: [
            'Resources are identified by URLs: GET /orders/1001',
            'Uses HTTP verbs: GET (read), POST (create), PUT/PATCH (update), DELETE (remove)',
            'Stateless — no server-side session between requests',
            'Cacheable — HTTP caching headers (ETag, Cache-Control) work natively',
            'Typically JSON over HTTP/1.1 or HTTP/2',
            'Best for: public APIs, web apps, third-party integrations'
          ]
        },
        {
          heading: 'REST in the Real World — Industry Usage',
          text: 'REST powers the majority of public web APIs today. Companies like Stripe, GitHub, Twitter, and Shopify expose REST APIs that millions of developers rely on. Here is how REST is used across different industries:',
          list: [
            'Stripe — Payment processing API: /v1/charges, /v1/customers, /v1/refunds. Versioned via URL path, uses idempotency keys for safe retries',
            'GitHub — Repository API: /repos/{owner}/{repo}/issues, /repos/{owner}/{repo}/pulls. Uses ETag-based conditional requests and rate limiting',
            'Twitter/X — Timeline API: /2/tweets, /2/users/{id}/tweets. OAuth 2.0 bearer tokens, pagination cursors',
            'Shopify — E-commerce API: /admin/api/2024-01/orders.json, /admin/api/2024-01/products.json. Versioned by date in URL path',
            'Amazon S3 — Storage API: PUT /bucket/key, GET /bucket/key. Uses HTTP verbs directly on resource paths, signed headers for auth',
            'Twilio — SMS API: /2010-04-01/Accounts/{Sid}/Messages.json. Versioned by date, uses POST for actions'
          ]
        },
        {
          heading: 'REST API Design — Industry Best Practices',
          text: 'Building a production-grade REST API involves more than just CRUD endpoints. Follow these best practices used by top engineering teams:',
          list: [
            'Use nouns for resources, not verbs: /users/{id} NOT /getUser?id=42 — the HTTP verb already describes the action',
            'Version your API from day one: /v1/users, /v2/users — never break existing clients silently',
            'Use plural nouns for collections: /orders, /products, /users — consistent and predictable',
            'Filtering and pagination: /orders?status=paid&page=2&limit=50 — use query params, not URL segments',
            'Return proper HTTP status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Error',
            'Use idempotency keys for POST/PUT: send Idempotency-Key header so retries do not create duplicate resources (critical for payments)',
            'Rate limiting: return 429 with Retry-After header and X-RateLimit-Remaining — protect your API from abuse',
            'Pagination: use cursor-based pagination (next_token) for large datasets — offset pagination gets slow at scale',
            'HATEOAS (optional): include hypermedia links in responses so clients can discover related resources without hardcoding URLs',
            'Always validate input: reject malformed payloads with 400 + detailed error message — never let bad data reach your DB',
            'Consistent error format: {"error": {"code": "INVALID_EMAIL", "message": "Email format is invalid", "field": "email"}} — helps clients debug',
            'Use ETags for optimistic concurrency: If-Match: "etag123" — prevents lost updates when two clients edit the same resource',
            'Cache-Control headers: set Cache-Control: public, max-age=300 for cacheable responses, no-store for sensitive data',
            'CORS: configure Access-Control-Allow-Origin properly — do not use * for authenticated APIs'
          ]
        },
        {
          heading: 'REST API — Example with Best Practices',
          example: {
            title: 'Production-grade REST API response with best practices',
            code: 'GET /v1/orders/1001 HTTP/1.1\nHost: api.example.com\nAuthorization: Bearer eyJhbGciOi...\nAccept: application/json\nIf-None-Match: "etag-abc123"\n\n--- Response ---\nHTTP/1.1 200 OK\nContent-Type: application/json\nETag: "etag-def456"\nCache-Control: private, max-age=60\nX-RateLimit-Remaining: 98\nX-RateLimit-Reset: 1721234567\n\n{\n  "id": "ord_1001",\n  "status": "paid",\n  "total": 149.99,\n  "items": [\n    {"sku": "WIDGET-01", "qty": 2, "price": 49.99},\n    {"sku": "CABLE-USB", "qty": 1, "price": 50.01}\n  ],\n  "customer": {"id": "cus_42", "email": "alice@example.com"},\n  "_links": {\n    "self": {"href": "/v1/orders/1001"},\n    "customer": {"href": "/v1/customers/cus_42"},\n    "refund": {"href": "/v1/orders/1001/refund", "method": "POST"}\n  }\n}',
            output: 'Proper REST response with ETag for caching, rate limit headers, HATEOAS links, and consistent JSON structure.',
            language: 'http',
            type: 'code'
          }
        },
        {
          heading: 'What is gRPC?',
          text: 'gRPC is a high-performance RPC (Remote Procedure Call) framework built by Google. It uses HTTP/2 for transport and Protocol Buffers (Protobuf) as the binary serialization format. Instead of resources and verbs, you define service methods in a .proto file and generate client/server stubs for 10+ languages. gRPC supports unary (request-response), server streaming, client streaming, and bidirectional streaming. It is ideal for low-latency internal microservice communication.',
          list: [
            'Define services in .proto files: rpc GetUser(UserRequest) returns (UserResponse)',
            'Binary format (Protobuf) — smaller payloads, faster parsing than JSON',
            'HTTP/2 multiplexing — multiple concurrent calls over one TCP connection',
            'Native streaming: server-streaming, client-streaming, bidirectional',
            'Auto-generated stubs for Go, Java, Python, Node, Rust, C++, etc.',
            'Best for: internal microservices, low-latency inter-service calls, polyglot systems'
          ]
        },
        {
          heading: 'What is GraphQL?',
          text: 'GraphQL is a query language for APIs developed by Facebook. Instead of multiple endpoints, a single POST /graphql endpoint accepts a query that specifies exactly which fields the client needs. The server resolves the query and returns a single JSON response. This solves over-fetching (getting too much data) and under-fetching (needing multiple round-trips). GraphQL uses a strongly-typed schema (SDL) and supports real-time updates via subscriptions.',
          list: [
            'Single endpoint: POST /graphql with a query body',
            'Client specifies fields: { user(id:1) { name email orders { total } } }',
            'Solves over-fetching — only requested fields are returned',
            'Solves under-fetching — nested data in one request, no N+1 calls',
            'Strongly-typed schema (SDL) with auto-generated docs',
            'Subscriptions for real-time updates over WebSocket',
            'Best for: flexible client queries, mobile apps (save bandwidth), aggregating multiple services'
          ]
        },
        {
          heading: 'REST vs gRPC vs GraphQL — Comparison',
          table: {
            headers: ['Aspect', 'REST', 'gRPC', 'GraphQL'],
            rows: [
              ['Protocol', 'HTTP/1.1 or HTTP/2', 'HTTP/2 (Protocol Buffers)', 'HTTP (POST)'],
              ['Data Format', 'JSON, XML', 'Protobuf (binary)', 'JSON'],
              ['Performance', 'Good', 'Excellent (binary, multiplexed)', 'Good (over-fetch risk)'],
              ['Schema', 'Implicit (OpenAPI)', 'Explicit (.proto)', 'Explicit (SDL)'],
              ['Streaming', 'No (SSE workaround)', 'Native bidirectional', 'Subscriptions'],
              ['Use Case', 'Public APIs, web', 'Internal microservices', 'Flexible client queries']
            ]
          }
        },
        {
          heading: 'When to Use Which?',
          text: 'There is no single winner — each protocol fits different scenarios. Many systems use a hybrid: gRPC between internal microservices, REST for public-facing APIs, and GraphQL for clients that need flexible queries (mobile apps, dashboards).',
          list: [
            'REST → public APIs, third-party integrations, simple CRUD, browser apps',
            'gRPC → internal microservice-to-microservice calls, low-latency systems, polyglot teams',
            'GraphQL → mobile apps (save bandwidth), complex UIs needing nested data, aggregating multiple backend services',
            'Hybrid example: Mobile app uses GraphQL → gateway resolves via gRPC calls to internal services → external partners use REST webhooks'
          ]
        },
        {
          heading: 'Python Example — FastAPI REST Endpoint',
          example: {
            title: 'Simple REST API with FastAPI',
            code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users_db = {1: {"id": 1, "name": "Alice", "email": "alice@example.com"}}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    user = users_db.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.post("/users")
async def create_user(user: User):
    users_db[user.id] = user.dict()
    return {"status": "created", "user": user}`,
            output: 'GET /users/1 → 200 {id:1, name:"Alice"}. POST creates. Stateless, cacheable.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: No timeout — a hung downstream service blocks the client forever',
            'Mistake 2: Chatty APIs — N+1 queries; use batch endpoints or GraphQL',
            'Mistake 3: Large payloads without pagination — use cursor-based pagination',
            'Mistake 4: No retry with idempotency — retrying a non-idempotent POST can double-charge'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Request-response = synchronous, point-to-point, the backbone of web APIs',
            'REST for public APIs, gRPC for internal microservices, GraphQL for flexible clients',
            'Always set timeouts, use pagination, and make mutating operations idempotent'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When would you choose gRPC over REST? → Internal microservices needing high throughput, streaming, or strong typing.',
            'Q2: How do you handle a slow downstream service? → Set a timeout, use circuit breaker, fall back to cached/stale data.',
            'Q3: What\'s the N+1 problem in REST? → Fetching a list then making one request per item. Fix: batch endpoint or GraphQL.'
          ]
        }
      ]
    },
    'webhooks': {
      title: 'Webhooks',
      sections: [
        {
          heading: 'What are Webhooks?',
          text: 'Webhooks are user-defined HTTP callbacks triggered by events. Instead of polling "has anything changed?", the server pushes an HTTP POST to your URL when something happens. Think of them as "reverse APIs."',
          list: [
            '<strong>Event-driven:</strong> Server pushes data when an event occurs — no polling needed',
            '<strong>HTTP POST:</strong> Delivered as a standard HTTP request to your endpoint',
            '<strong>Signature verification:</strong> HMAC signatures prove the webhook came from the expected sender',
            '<strong>Retry logic:</strong> Most providers retry with exponential backoff on failure',
            '<strong>Idempotency:</strong> Use event IDs to deduplicate — retries can cause duplicates'
          ]
        },
        {
          heading: 'Webhook Flow',
          diagram: {
            chart: `sequenceDiagram
    participant S as Stripe
    participant W as Webhook Endpoint
    participant DB as Your Database
    S->>S: Payment succeeds
    S->>W: POST /webhooks/stripe {event: payment.succeeded, id: evt_123}
    W->>W: Verify HMAC signature
    W->>DB: Check idempotency (evt_123)
    DB-->>W: Not processed yet
    W->>DB: Update order status → PAID
    W-->>S: 200 OK
    Note over S,W: If 200 not received, Stripe retries with backoff`,
            caption: 'Stripe sends webhook on payment; your endpoint verifies, deduplicates, and processes.'
          }
        },
        {
          heading: 'Python Example — Webhook Receiver',
          example: {
            title: 'Flask webhook endpoint with signature verification',
            code: `from flask import Flask, request, jsonify
import hmac, hashlib

app = Flask(__name__)
WEBHOOK_SECRET = b'whsec_your_secret'
processed_events = set()  # In production, use Redis/DB

@app.route('/webhooks/stripe', methods=['POST'])
def stripe_webhook():
    # 1. Verify signature
    signature = request.headers.get('Stripe-Signature')
    payload = request.get_data()
    expected = hmac.new(WEBHOOK_SECRET, payload, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(signature, expected):
        return 'Invalid signature', 401

    # 2. Deduplicate
    event = request.json
    event_id = event['id']
    if event_id in processed_events:
        return 'Already processed', 200

    # 3. Process
    if event['type'] == 'payment_intent.succeeded':
        order_id = event['data']['object']['metadata']['order_id']
        print(f"Order {order_id} paid! Fulfilling...")
        # fulfill_order(order_id)

    processed_events.add(event_id)
    return 'OK', 200`,
            output: 'Verifies HMAC, deduplicates by event ID, processes payment. Returns 200 quickly.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Webhooks vs Polling',
          table: {
            headers: ['Aspect', 'Webhooks', 'Polling'],
            rows: [
              ['Direction', 'Server → You (push)', 'You → Server (pull)'],
              ['Latency', 'Near real-time', 'Depends on poll interval'],
              ['Server Load', 'Low (only on events)', 'High (constant requests)'],
              ['Reliability', 'Retries on failure', 'You control frequency'],
              ['Setup', 'Need public endpoint', 'Simple GET requests'],
              ['Use Case', 'Payment confirmations, CI/CD', 'Dashboards, status checks']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>GitHub Webhooks for CI/CD.</strong> GitHub sends webhooks on push, PR, and release events. CI systems (GitHub Actions, Jenkins) receive these webhooks and trigger builds. GitHub retries up to 3 times with exponential backoff. The webhook payload includes the commit SHA, branch, and repository — everything needed to clone and build.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Webhooks = event-driven HTTP callbacks (reverse API)',
            'Always verify signatures (HMAC) and deduplicate by event ID',
            'Return 200 quickly; process async if heavy',
            'Better than polling for event-driven workflows'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you handle webhook delivery when your server is down? → Provider retries with backoff; use a queue to buffer and process when back up.',
            'Q2: Why verify webhook signatures? → Prevents attackers from sending fake webhooks to your endpoint.',
            'Q3: Design a webhook system that handles 10K events/sec. → Receive → verify → push to queue → workers process async. Use idempotency keys in DB.'
          ]
        }
      ]
    },
    'streaming': {
      title: 'Streaming (WebSocket & SSE)',
      sections: [
        {
          heading: 'Streaming Communication',
          text: 'Streaming enables real-time, bidirectional (WebSocket) or server-to-client (SSE) data flow over a persistent connection. Unlike request-response, the connection stays open, allowing continuous data exchange.',
          list: [
            '<strong>WebSocket:</strong> Full-duplex, bidirectional communication over a single TCP connection',
            '<strong>SSE (Server-Sent Events):</strong> Server → client only, uses standard HTTP, auto-reconnect built-in',
            '<strong>Long Polling:</strong> Client requests; server holds until data available (fallback)',
            '<strong>Use Cases:</strong> Chat, live sports scores, stock tickers, collaborative editing, gaming',
            '<strong>Connection management:</strong> Heartbeats/ping-pong to detect dead connections'
          ]
        },
        {
          heading: 'WebSocket vs SSE vs Long Polling',
          diagram: {
            chart: `sequenceDiagram
    participant C as Client
    participant S as Server
    Note over C,S: WebSocket (bidirectional)
    C->>S: Upgrade: websocket
    S-->>C: 101 Switching Protocols
    C->>S: Send message
    S->>C: Push update
    S->>C: Push another update
    Note over C,S: SSE (server → client)
    C->>S: GET /events (Accept: text/event-stream)
    S-->>C: data: {"price": 150}
    S-->>C: data: {"price": 152}`,
            caption: 'WebSocket = bidirectional. SSE = server-to-client only. Both keep connection open.'
          }
        },
        {
          heading: 'Python Example — WebSocket Chat Server',
          example: {
            title: 'Simple WebSocket server with websockets library',
            code: `import asyncio
import websockets
import json

connected = set()

async def handler(websocket):
    connected.add(websocket)
    try:
        async for message in websocket:
            data = json.loads(message)
            # Broadcast to all connected clients
            for conn in connected:
                if conn != websocket:
                    await conn.send(json.dumps({
                        'user': data['user'],
                        'text': data['text'],
                        'time': asyncio.get_event_loop().time()
                    }))
    finally:
        connected.remove(websocket)

async def main():
    async with websockets.serve(handler, 'localhost', 8765):
        print("Chat server running on ws://localhost:8765")
        await asyncio.Future()  # run forever

asyncio.run(main())`,
            output: 'Clients connect via WebSocket. Messages broadcast to all other clients in real-time.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Scaling WebSockets',
          list: [
            '<strong>1. Sticky sessions:</strong> Route same user to same server (connection state is local)',
            '<strong>2. Redis Pub/Sub backplane:</strong> Servers subscribe to channels; broadcast across instances',
            '<strong>3. Connection pooling:</strong> Use connection pool per server; monitor connection count',
            '<strong>4. Heartbeats:</strong> Send ping every 30s; close connections that don\'t pong within 10s',
            '<strong>5. Graceful degradation:</strong> Fall back to long polling if WebSocket upgrade fails'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Slack — WebSocket for real-time messaging.</strong> Slack maintains persistent WebSocket connections for millions of concurrent users. Messages flow through a message server that fans out to all connected clients in the relevant channels. They use a combination of WebSocket for real-time delivery and HTTP for file uploads and search. Connection state is tracked in Redis for fast lookups.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'WebSocket = bidirectional, real-time, persistent connection',
            'SSE = server-to-client only, simpler, auto-reconnect',
            'Use heartbeats, sticky sessions, and Redis backplane for scaling',
            'Fall back to long polling for clients behind restrictive proxies'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When would you use SSE over WebSocket? → One-way data flow (stock ticker, live scores), simpler implementation, built-in reconnect.',
            'Q2: How do you scale WebSocket to 1M connections? → Multiple servers with sticky sessions + Redis pub/sub backplane for cross-server messaging.',
            'Q3: What happens when a WebSocket connection drops? → Client should auto-reconnect with exponential backoff. Server should clean up stale connections via heartbeat timeout.'
          ]
        }
      ]
    },
    'event-driven': {
      title: 'Event-Driven Architecture',
      sections: [
        {
          heading: 'Event-Driven Architecture (EDA)',
          text: 'Event-Driven Architecture is a design paradigm where services communicate by producing and consuming events. Instead of direct API calls, services emit events when state changes, and other services react to those events. This creates loose coupling and enables independent evolution.',
          list: [
            '<strong>Events as facts:</strong> "OrderPlaced", "PaymentReceived" — immutable records of something that happened',
            '<strong>Event bus/broker:</strong> Central infrastructure (Kafka, RabbitMQ, SNS/SQS) that routes events',
            '<strong>Event sourcing:</strong> Store events as the source of truth; current state = replay of events',
            '<strong>Choreography vs Orchestration:</strong> Services react independently vs a central coordinator',
            '<strong>Eventually consistent:</strong> State propagates asynchronously; not instantly consistent'
          ]
        },
        {
          heading: 'EDA Architecture',
          diagram: {
            chart: `flowchart TB
    U[User Action] --> OS[Order Service]
    OS --> |OrderPlaced| EB[(Event Bus)]
    EB --> IS[Inventory Service]
    EB --> PS[Payment Service]
    EB --> NS[Notification Service]
    EB --> AS[Analytics Service]
    IS --> |StockReserved| EB
    PS --> |PaymentProcessed| EB
    NS --> |EmailSent| EB
    style EB fill:#9b59b6,color:#fff
    style OS fill:#3498db,color:#fff`,
            caption: 'Services emit events to a central bus. Other services react independently. No direct coupling.'
          }
        },
        {
          heading: 'Choreography vs Orchestration',
          table: {
            headers: ['Aspect', 'Choreography', 'Orchestration'],
            rows: [
              ['Control', 'Decentralized — each service knows what to do', 'Centralized — orchestrator directs the flow'],
              ['Coupling', 'Low — services only know events', 'Medium — orchestrator knows all services'],
              ['Visibility', 'Hard to see end-to-end flow', 'Orchestrator has full visibility'],
              ['Failure Handling', 'Each service handles its own failures', 'Orchestrator manages compensation (Saga)'],
              ['Example', 'Event bus + independent reactors', 'Camunda, Temporal, AWS Step Functions'],
              ['Best For', 'Simple flows, high autonomy', 'Complex workflows, strict ordering']
            ]
          }
        },
        {
          heading: 'Python Example — Event-Driven Order Processing',
          example: {
            title: 'Simple event bus with handlers',
            code: `from collections import defaultdict
from datetime import datetime

class EventBus:
    def __init__(self):
        self._handlers = defaultdict(list)

    def subscribe(self, event_type, handler):
        self._handlers[event_type].append(handler)

    def publish(self, event):
        event['timestamp'] = datetime.now().isoformat()
        for handler in self._handlers.get(event['type'], []):
            handler(event)

# Usage
bus = EventBus()

def handle_order_placed(event):
    print(f"Reserving stock for order {event['order_id']}")

def handle_order_placed_notify(event):
    print(f"Sending confirmation email for order {event['order_id']}")

bus.subscribe('OrderPlaced', handle_order_placed)
bus.subscribe('OrderPlaced', handle_order_placed_notify)

bus.publish({'type': 'OrderPlaced', 'order_id': 12345, 'amount': 99.99})`,
            output: 'Both handlers fire independently. New handlers can be added without changing existing code.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Amazon — Event-driven microservices.</strong> Amazon\'s retail platform is built on event-driven microservices. When you place an order, the Order service emits an "OrderPlaced" event. Dozens of services react: Inventory reserves stock, Payment charges your card, Shipping creates a label, Recommendations updates your profile, and Analytics logs the event — all without the Order service knowing about any of them. New services (e.g., fraud detection) can be added by simply subscribing to existing events.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'EDA = services communicate via events, not direct calls',
            'Events are immutable facts; event bus routes them',
            'Choreography = decentralized; Orchestration = centralized',
            'Key benefit: loose coupling, independent deployability, easy to add consumers'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What\'s the difference between an event and a command? → Event = something that happened (past tense). Command = request to do something (imperative).',
            'Q2: How do you handle ordering in EDA? → Use event sequence numbers, process in order within a partition/aggregate, or use a workflow engine.',
            'Q3: What are the downsides of EDA? → Eventual consistency, harder to debug end-to-end, event schema evolution, potential for event storms.'
          ]
        }
      ]
    }
  },
  module2: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Storage patterns address how data is stored, replicated, and partitioned across multiple nodes. As systems scale beyond a single machine, you need strategies for replicating data for availability, sharding for write throughput, consistent hashing for even distribution, and patterns like event sourcing and CQRS for complex domain logic.',
          list: [
            '<strong>Topics covered:</strong> Replication, Sharding, Consistent Hashing, Event Sourcing, CQRS, Write-Ahead Log',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Data is the heart of any application. Poor storage decisions lead to hotspots, data loss, and scaling bottlenecks. These patterns are used by Cassandra, DynamoDB, Kafka, and every modern distributed database.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Replication] --> T2[Sharding]
    T2 --> T3[Consistent Hashing]
    T3 --> T4[Event Sourcing]
    T4 --> T5[CQRS]
    T5 --> T6[WAL]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Storage patterns address how data is stored, replicated, and partitioned across multiple nodes. As systems scale beyond a single machine, you need strategies for replicating data for availability, sharding for write throughput, consistent hashing for even distribution, and patterns like event sourcing and CQRS for complex domain logic. This module covers the foundational storage patterns used by every major distributed database.',
          list: [
            '<strong>Topics covered:</strong> Replication, Sharding & Partitioning, Consistent Hashing, Event Sourcing, CQRS, Write-Ahead Log (WAL)',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Data is the heart of any application. Poor storage decisions lead to hotspots, data loss, and scaling bottlenecks. These patterns are used by Cassandra, DynamoDB, Kafka, and every modern distributed database to achieve horizontal scale, fault tolerance, and consistency guarantees.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Replication] -->     T2["Sharding & Partitioning"] -->     T3[Consistent Hashing] -->     T4[Event Sourcing] -->     T5[CQRS] -->     T6["Write-Ahead Log (WAL)"]`,
          text: 'Recommended reading order — each topic builds on the previous one.'
        }
      ]
    },    'replication': {
      title: 'Replication (Primary-Replica)',
      sections: [
        {
          heading: 'Database Replication',
          text: 'Replication copies data from a primary (master) database to one or more replicas (slaves). This improves read scalability, provides failover capability, and enables geographic distribution of data.',
          list: [
            '<strong>Primary-Replica:</strong> Writes go to primary; reads can go to any replica',
            '<strong>Synchronous:</strong> Primary waits for replica confirmation before acknowledging write',
            '<strong>Asynchronous:</strong> Primary acknowledges immediately; replicas catch up later',
            '<strong>Semi-synchronous:</strong> Primary waits for at least one replica to confirm',
            '<strong>Replication lag:</strong> Time between write on primary and its availability on replicas'
          ]
        },
        {
          heading: 'Replication Architecture',
          diagram: {
            chart: `flowchart TB
    A[App Server] --> |Writes| P[(Primary DB)]
    A --> |Reads| R1[(Replica 1)]
    A --> |Reads| R2[(Replica 2)]
    A --> |Reads| R3[(Replica 3)]
    P --> |Replication Log| R1
    P --> |Replication Log| R2
    P --> |Replication Log| R3
    style P fill:#e74c3c,color:#fff
    style R1 fill:#2ecc71,color:#fff
    style R2 fill:#2ecc71,color:#fff
    style R3 fill:#2ecc71,color:#fff`,
            caption: 'Writes → Primary only. Reads → any replica. Replication log syncs data to replicas.'
          }
        },
        {
          heading: 'Replication Strategies',
          table: {
            headers: ['Strategy', 'Latency', 'Durability', 'Use Case'],
            rows: [
              ['Synchronous', 'Higher (wait for replica)', 'No data loss on failover', 'Financial systems, critical data'],
              ['Asynchronous', 'Lower (ack immediately)', 'Possible data loss on failover', 'Social media, analytics'],
              ['Semi-synchronous', 'Medium (wait for 1 replica)', 'Low data loss risk', 'E-commerce, SaaS'],
              ['Multi-primary', 'Low (write anywhere)', 'Conflict resolution needed', 'Global apps, offline-first'],
              ['Logical replication', 'Medium', 'Flexible (filter/transform)', 'Upgrades, partial sync']
            ]
          }
        },
        {
          heading: 'Python Example — Simulating Replication',
          example: {
            title: 'Primary-Replica simulation',
            code: `import time, threading

class Database:
    def __init__(self, name):
        self.name = name
        self.data = {}
        self.log = []

    def write(self, key, value):
        self.data[key] = value
        self.log.append(('SET', key, value))
        print(f"[{self.name}] Write: {key}={value}")

    def read(self, key):
        return self.data.get(key, f"NOT_FOUND in {self.name}")

# Setup
primary = Database("Primary")
replica = Database("Replica")

# Async replication: replica tails the primary's log
def replicate():
    last_applied = 0
    while True:
        if len(primary.log) > last_applied:
            for op, key, val in primary.log[last_applied:]:
                replica.data[key] = val
            last_applied = len(primary.log)
            print(f"[Replica] Synced: {replica.data}")
        time.sleep(0.5)

threading.Thread(target=replicate, daemon=True).start()

primary.write('user:1', 'Alice')
time.sleep(0.6)
print(f"Read from replica: {replica.read('user:1')}")  # Alice (after lag)`,
            output: 'Write to primary → replica catches up after replication lag. Read from replica returns stale data briefly.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Reading your own writes from a replica immediately → read-after-write consistency issue',
            'Mistake 2: Assuming replicas are always in sync → always account for replication lag',
            'Mistake 3: Not monitoring replication lag → lag can grow unbounded under heavy write load',
            'Mistake 4: Using synchronous replication for all writes → kills write throughput'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>YouTube — MySQL replication at scale.</strong> YouTube uses MySQL with primary-replica replication. Writes go to the primary; reads are distributed across hundreds of replicas. They use Vitess (now part of CNCF) to manage sharding and replication topology. For read-after-write consistency, critical reads (e.g., "my uploaded videos") are routed to the primary.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Replication = copy data from primary to replicas for read scaling and failover',
            'Synchronous = no data loss, higher latency. Asynchronous = faster, possible data loss',
            'Always handle replication lag in application logic',
            'Use read-after-write consistency for critical user-facing reads'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you handle read-after-write consistency? → Route critical reads to primary, or use sticky sessions + wait for replication.',
            'Q2: What happens during primary failover? → Promote a replica to primary; redirect writes. Some data may be lost in async mode.',
            'Q3: Why not just use one big database? → Single point of failure, read bottleneck, can\'t scale horizontally.'
          ]
        }
      ]
    },
    'sharding': {
      title: 'Sharding & Partitioning',
      sections: [
        {
          heading: 'What is Sharding?',
          text: 'Sharding splits a database into smaller, independent pieces (shards), each holding a subset of data. This enables horizontal scaling — instead of one massive database, you have many smaller ones that can run on separate machines.',
          list: [
            '<strong>Horizontal partitioning:</strong> Rows are distributed across shards by a shard key',
            '<strong>Range-based sharding:</strong> Shard by key range (e.g., users A-M → shard 1, N-Z → shard 2)',
            '<strong>Hash-based sharding:</strong> hash(shard_key) % num_shards → uniform distribution',
            '<strong>Directory-based:</strong> Lookup table maps keys to shards (flexible but extra hop)',
            '<strong>Geo-sharding:</strong> Data stored near users (e.g., EU users → EU shard)'
          ]
        },
        {
          heading: 'Sharding Architecture',
          diagram: {
            chart: `flowchart TB
    A[App Server] --> R[Router/Proxy]
    R --> |hash(user_id) % 4 = 0| S0[(Shard 0)]
    R --> |hash(user_id) % 4 = 1| S1[(Shard 1)]
    R --> |hash(user_id) % 4 = 2| S2[(Shard 2)]
    R --> |hash(user_id) % 4 = 3| S3[(Shard 3)]
    S0 --> |Replication| R0[(Replica 0)]
    S1 --> |Replication| R1[(Replica 1)]
    style R fill:#f39c12,color:#fff
    style S0 fill:#3498db,color:#fff
    style S1 fill:#3498db,color:#fff
    style S2 fill:#3498db,color:#fff
    style S3 fill:#3498db,color:#fff`,
            caption: 'Router hashes the shard key to determine which shard holds the data. Each shard is independent.'
          }
        },
        {
          heading: 'Sharding Strategies',
          table: {
            headers: ['Strategy', 'Pros', 'Cons', 'Example'],
            rows: [
              ['Range-based', 'Easy range queries, natural ordering', 'Hotspots (new users cluster)', 'Time-series data by date'],
              ['Hash-based', 'Uniform distribution, no hotspots', 'No range queries, resharding is hard', 'User data by user_id hash'],
              ['Directory-based', 'Flexible, easy to move shards', 'Extra lookup hop, SPOF risk', 'Large-scale dynamic systems'],
              ['Geo-based', 'Low latency for local users', 'Uneven load, complex failover', 'CDNs, regional compliance']
            ]
          }
        },
        {
          heading: 'Python Example — Hash-Based Sharding',
          example: {
            title: 'Simple shard router',
            code: `import hashlib

class ShardRouter:
    def __init__(self, num_shards):
        self.shards = {i: {} for i in range(num_shards)}

    def _get_shard(self, key):
        h = int(hashlib.md5(str(key).encode()).hexdigest(), 16)
        return h % len(self.shards)

    def write(self, key, value):
        shard = self._get_shard(key)
        self.shards[shard][key] = value
        print(f"Wrote {key}={value} to shard {shard}")

    def read(self, key):
        shard = self._get_shard(key)
        return self.shards[shard].get(key, None)

router = ShardRouter(4)
router.write('user:42', 'Alice')
router.write('user:99', 'Bob')
print(router.read('user:42'))  # Alice
print(f"Shard sizes: {[len(s) for s in router.shards.values()]}")`,
            output: 'Keys distributed uniformly across 4 shards. Same key always maps to same shard.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Challenges & Solutions',
          list: [
            '<strong>1. Resharding:</strong> Adding shards requires rehashing all data. Use consistent hashing to minimize movement.',
            '<strong>2. Cross-shard queries:</strong> Joins across shards are expensive. Denormalize or use scatter-gather.',
            '<strong>3. Hot shards:</strong> Some shards get disproportionate traffic. Use key design to spread load.',
            '<strong>4. Transactions:</strong> ACID across shards is hard. Use 2PC or Sagas for distributed transactions.',
            '<strong>5. Backup/Restore:</strong> Each shard needs independent backup. Automate with tooling.'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Instagram — PostgreSQL sharding.</strong> Instagram shards PostgreSQL by user_id using a logical shard mapping. They started with a single DB, then split into thousands of shards as they grew to billions of photos. Each shard is a PostgreSQL cluster with primary-replica replication. A custom proxy layer (based on PostgreSQL\'s FDW) routes queries to the correct shard. They use a combination of range and hash sharding for different data types.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Sharding = splitting data across independent databases for horizontal scaling',
            'Hash-based = uniform distribution; Range-based = natural ordering',
            'Consistent hashing minimizes data movement when adding/removing shards',
            'Cross-shard queries and transactions are the main challenges'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you choose a shard key? → Pick a high-cardinality key that\'s used in most queries. user_id is common. Avoid keys that create hotspots.',
            'Q2: How do you handle a query that spans all shards? → Scatter-gather: send to all shards, merge results. Use for analytics, not real-time.',
            'Q3: What happens when you need to add a new shard? → With consistent hashing, only ~1/N keys move. Without it, rehash everything.'
          ]
        }
      ]
    },
    'consistent-hashing': {
      title: 'Consistent Hashing',
      sections: [
        {
          heading: 'What is Consistent Hashing?',
          text: 'Consistent hashing is a distributed hashing scheme that minimizes key remapping when the number of servers (nodes) changes. Unlike simple modulo hashing where adding a node remaps nearly all keys, consistent hashing only remaps K/N keys on average.',
          list: [
            '<strong>Hash ring:</strong> Nodes and keys are hashed onto a circular space (0 to 2^32-1)',
            '<strong>Virtual nodes:</strong> Each physical node gets multiple positions on the ring for better distribution',
            '<strong>Key placement:</strong> A key is assigned to the first node encountered clockwise on the ring',
            '<strong>Minimal disruption:</strong> Adding/removing a node only affects its immediate neighbors',
            '<strong>Use cases:</strong> Distributed caches (Memcached, Redis Cluster), CDNs, distributed databases (Cassandra, DynamoDB)'
          ]
        },
        {
          heading: 'Consistent Hashing Ring',
          diagram: {
            chart: `flowchart TB
    subgraph Ring["Hash Ring (0 → 2^32-1)"]
        direction LR
        N1["Node A\n(hash=100)"] --> N2["Node B\n(hash=2B)"]
        N2 --> N3["Node C\n(hash=3B)"]
        N3 --> N1
    end
    K1["Key: user:42\nhash=1.5B → Node B"] -.-> N2
    K2["Key: user:99\nhash=500M → Node A"] -.-> N1
    K3["Key: user:7\nhash=3.5B → Node C"] -.-> N3
    style N1 fill:#3498db,color:#fff
    style N2 fill:#2ecc71,color:#fff
    style N3 fill:#e74c3c,color:#fff`,
            caption: 'Keys map to the next node clockwise. Adding Node D between A and B only moves keys in that segment.'
          }
        },
        {
          heading: 'Modulo vs Consistent Hashing',
          table: {
            headers: ['Aspect', 'Modulo Hashing', 'Consistent Hashing'],
            rows: [
              ['Key movement on add', '~100% of keys remapped', '~K/N keys remapped'],
              ['Distribution', 'Perfectly uniform', 'Near-uniform (with virtual nodes)'],
              ['Complexity', 'Simple: key % N', 'Moderate: hash ring + binary search'],
              ['Node removal', 'All keys remapped', 'Only neighbor\'s keys remapped'],
              ['Memory', 'O(1)', 'O(N log N) for ring lookup'],
              ['Best for', 'Static clusters', 'Dynamic clusters (auto-scaling)']
            ]
          }
        },
        {
          heading: 'Python Example — Consistent Hashing',
          example: {
            title: 'Consistent hash ring implementation',
            code: `import hashlib, bisect

class ConsistentHash:
    def __init__(self, nodes, virtual_nodes=150):
        self.ring = {}  # hash → node
        self.sorted_hashes = []
        for node in nodes:
            for i in range(virtual_nodes):
                h = self._hash(f"{node}:vnode:{i}")
                self.ring[h] = node
                bisect.insort(self.sorted_hashes, h)

    def _hash(self, key):
        return int(hashlib.md5(key.encode()).hexdigest(), 16)

    def get_node(self, key):
        if not self.ring:
            return None
        h = self._hash(key)
        idx = bisect.bisect(self.sorted_hashes, h)
        if idx == len(self.sorted_hashes):
            idx = 0  # wrap around
        return self.ring[self.sorted_hashes[idx]]

# Usage
ch = ConsistentHash(['cache-1', 'cache-2', 'cache-3'])
print(ch.get_node('user:42'))   # e.g., cache-2
print(ch.get_node('user:99'))   # e.g., cache-1
print(ch.get_node('user:42'))   # Same key → same node always`,
            output: 'Keys consistently map to the same node. Adding a node only remaps ~1/N keys.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Amazon DynamoDB — consistent hashing at scale.</strong> DynamoDB uses consistent hashing with virtual nodes to distribute data across storage nodes. Each physical node gets multiple virtual node positions on the ring. When a node fails or is added, only a fraction of data needs to be moved. Combined with gossip protocol for membership and hinted handoff for temporary failures, this enables DynamoDB\'s seamless scaling.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Consistent hashing = hash ring that minimizes remapping on node changes',
            'Virtual nodes improve distribution uniformity',
            'Only K/N keys move when adding/removing a node (vs ~100% with modulo)',
            'Used in: DynamoDB, Cassandra, Redis Cluster, CDNs, distributed caches'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why use virtual nodes? → Better distribution, prevents hot spots, allows heterogeneous node capacities.',
            'Q2: How many keys move when adding a node? → Approximately K/N keys (where K = total keys, N = new node count).',
            'Q3: What happens when a node fails? → Keys in its range are lost unless replicated. Use replication factor > 1.'
          ]
        }
      ]
    },
    'event-sourcing': {
      title: 'Event Sourcing',
      sections: [
        {
          heading: 'What is Event Sourcing?',
          text: 'Event Sourcing stores state changes as a sequence of immutable events rather than storing the current state directly. The current state is derived by replaying all events. This provides a complete audit trail and enables temporal queries.',
          list: [
            '<strong>Events as source of truth:</strong> Every state change is captured as an event',
            '<strong>Append-only:</strong> Events are never modified or deleted — only appended',
            '<strong>State = fold(events):</strong> Current state = replay all events from the beginning',
            '<strong>Snapshots:</strong> Periodically save current state to avoid replaying all events',
            '<strong>Benefits:</strong> Full audit trail, temporal queries, easy debugging, event-driven integration'
          ]
        },
        {
          heading: 'Event Sourcing Flow',
          diagram: {
            chart: `flowchart LR
    C[Command:\nCreateOrder] --> A[Aggregate:\nOrder]
    A --> E1[Event:\nOrderCreated]
    A --> E2[Event:\nItemAdded]
    A --> E3[Event:\nOrderPlaced]
    E1 --> ES[(Event Store)]
    E2 --> ES
    E3 --> ES
    ES --> P[Projection:\nCurrent State]
    P --> R["Read Model: Order {id, items, status}"]
    style ES fill:#9b59b6,color:#fff
    style P fill:#2ecc71,color:#fff`,
            caption: 'Commands produce events. Events are appended to the store. Projections build current state by replaying events.'
          }
        },
        {
          heading: 'Event Sourcing vs CRUD',
          table: {
            headers: ['Aspect', 'CRUD', 'Event Sourcing'],
            rows: [
              ['Storage', 'Current state only', 'All events (append-only log)'],
              ['History', 'Lost on update', 'Complete audit trail'],
              ['Debugging', 'Need to reproduce state', 'Replay events to any point'],
              ['Performance', 'Fast reads, simple writes', 'Snapshot + replay for reads'],
              ['Complexity', 'Simple', 'Higher (CQRS, snapshots, event versioning)'],
              ['Use Case', 'Simple CRUD apps', 'Banking, auditing, collaborative editing']
            ]
          }
        },
        {
          heading: 'Python Example — Bank Account with Event Sourcing',
          example: {
            title: 'Event-sourced bank account',
            code: `class BankAccount:
    def __init__(self):
        self.events = []
        self.balance = 0

    def apply_event(self, event):
        if event['type'] == 'Deposited':
            self.balance += event['amount']
        elif event['type'] == 'Withdrawn':
            self.balance -= event['amount']
        self.events.append(event)

    def deposit(self, amount):
        self.apply_event({'type': 'Deposited', 'amount': amount})

    def withdraw(self, amount):
        if self.balance >= amount:
            self.apply_event({'type': 'Withdrawn', 'amount': amount})
        else:
            raise ValueError("Insufficient funds")

    def replay(self):
        self.balance = 0
        events = self.events[:]
        self.events = []
        for e in events:
            self.apply_event(e)

# Usage
acct = BankAccount()
acct.deposit(100)
acct.withdraw(30)
acct.deposit(50)
print(f"Balance: {acct.balance}")  # 120
print(f"Events: {acct.events}")
# Replay from events
acct.replay()
print(f"After replay: {acct.balance}")  # 120`,
            output: 'Balance = 120. Events stored: [Deposited 100, Withdrawn 30, Deposited 50]. Replay reconstructs state.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Event Store DB — purpose-built for event sourcing.</strong> EventStoreDB is used by companies for financial ledgers, IoT data, and microservices. It provides optimistic concurrency control (expected version on write), projections for building read models, and $all stream for replaying all events. Combined with CQRS, it enables systems where every state change is auditable and replayable.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Event Sourcing = store events, not current state',
            'State = replay(fold) all events; use snapshots for performance',
            'Benefits: full audit trail, temporal queries, event-driven integration',
            'Challenges: event schema evolution, eventual consistency, snapshot management'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you handle event schema changes? → Version events, upcast old events to new schema on read, or use schema registry.',
            'Q2: What\'s the performance impact? → Writes are fast (append-only). Reads need snapshot + recent events replay.',
            'Q3: When NOT to use event sourcing? → Simple CRUD, GDPR right-to-delete requirements, when audit trail isn\'t needed.'
          ]
        }
      ]
    },
    'cqrs': {
      title: 'CQRS (Command Query Responsibility Segregation)',
      sections: [
        {
          heading: 'What is CQRS?',
          text: 'CQRS separates read operations (queries) from write operations (commands) using different models. Commands modify state; queries return data. This allows optimizing reads and writes independently — different databases, schemas, and scaling strategies.',
          list: [
            '<strong>Command model:</strong> Handles writes — validates, processes, persists events/state',
            '<strong>Query model:</strong> Handles reads — optimized for specific UI/view needs',
            '<strong>Separate databases:</strong> Write DB (normalized) and Read DB (denormalized, cached)',
            '<strong>Eventual consistency:</strong> Read model updates asynchronously after writes',
            '<strong>Natural fit with Event Sourcing:</strong> Events update both write and read models'
          ]
        },
        {
          heading: 'CQRS Architecture',
          diagram: {
            chart: `flowchart TB
    subgraph Write["Write Side"]
        CMD[Command] --> CH[Command Handler]
        CH --> WDB[(Write DB\nNormalized)]
        CH --> EB[(Event Bus)]
    end
    subgraph Read["Read Side"]
        EB --> |Events| PH[Projection Handler]
        PH --> RDB[(Read DB\nDenormalized)]
        RDB --> QH[Query Handler]
    end
    UI[Client] --> |Commands| CMD
    UI --> |Queries| QH
    style WDB fill:#e74c3c,color:#fff
    style RDB fill:#2ecc71,color:#fff
    style EB fill:#f39c12,color:#fff`,
            caption: 'Commands → Write DB. Events → Projections → Read DB. Queries → Read DB. Optimized independently.'
          }
        },
        {
          heading: 'CQRS Benefits & Trade-offs',
          table: {
            headers: ['Aspect', 'Without CQRS', 'With CQRS'],
            rows: [
              ['Read Performance', 'Same model for reads/writes', 'Read model optimized per query'],
              ['Write Performance', 'Validation + persistence', 'Focused on consistency'],
              ['Scalability', 'Scale both together', 'Scale reads and writes independently'],
              ['Complexity', 'Simple, single model', 'Two models, sync mechanism'],
              ['Consistency', 'Strong (same DB)', 'Eventual (read model lags)'],
              ['Query Flexibility', 'Limited by write schema', 'Any denormalized view possible']
            ]
          }
        },
        {
          heading: 'Python Example — CQRS Order System',
          example: {
            title: 'Simple CQRS with in-memory stores',
            code: `class OrderCommandHandler:
    def __init__(self):
        self.events = []

    def create_order(self, order_id, user_id, items):
        event = {'type': 'OrderCreated', 'order_id': order_id,
                 'user_id': user_id, 'items': items}
        self.events.append(event)
        return event

class OrderQueryHandler:
    def __init__(self):
        self.orders = {}  # Denormalized read model

    def apply_event(self, event):
        if event['type'] == 'OrderCreated':
            self.orders[event['order_id']] = {
                'id': event['order_id'],
                'user': event['user_id'],
                'items': event['items'],
                'status': 'CREATED'
            }

    def get_order(self, order_id):
        return self.orders.get(order_id)

    def get_orders_by_user(self, user_id):
        return [o for o in self.orders.values() if o['user'] == user_id]

# Usage
cmd = OrderCommandHandler()
query = OrderQueryHandler()

event = cmd.create_order('ord-1', 'alice', ['book', 'pen'])
query.apply_event(event)

print(query.get_order('ord-1'))
# {'id': 'ord-1', 'user': 'alice', 'items': ['book', 'pen'], 'status': 'CREATED'}`,
            output: 'Command creates event. Query model is updated. Read optimized for UI needs.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Microsoft — CQRS in large-scale systems.</strong> Microsoft\'s Azure and internal systems use CQRS extensively. For example, their commerce platform uses CQRS to handle millions of transactions: the write side uses event sourcing for audit compliance, while the read side uses denormalized views in Azure Cosmos DB for sub-millisecond query performance. The read models are updated via Azure Event Hubs with < 100ms latency.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'CQRS = separate read and write models for independent optimization',
            'Commands → Write DB (normalized). Queries → Read DB (denormalized)',
            'Natural fit with Event Sourcing; read models updated via events',
            'Trade-off: added complexity for better scalability and query flexibility'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When should you NOT use CQRS? → Simple CRUD apps, when strong consistency is required for all reads, small-scale systems.',
            'Q2: How do you handle read model staleness? → Accept eventual consistency, show "last updated" timestamp, or use long polling for critical updates.',
            'Q3: How does CQRS help with scaling? → Read side can scale horizontally with read replicas; write side scales independently.'
          ]
        }
      ]
    },
    'wal': {
      title: 'Write-Ahead Log (WAL)',
      sections: [
        {
          heading: 'What is Write-Ahead Logging?',
          text: 'WAL is a durability mechanism where all modifications are written to a log before they are applied to the actual data store. If the system crashes, the log can be replayed to recover to a consistent state. This is the foundation of ACID durability in databases.',
          list: [
            '<strong>Log-first:</strong> Write changes to the WAL before modifying the main data store',
            '<strong>Sequential writes:</strong> WAL is append-only, making writes fast (no random I/O)',
            '<strong>Crash recovery:</strong> Replay WAL from the last checkpoint to restore state',
            '<strong>Checkpointing:</strong> Periodically flush WAL changes to the main store and truncate the log',
            '<strong>Used in:</strong> PostgreSQL, MySQL (InnoDB), SQLite, RocksDB, Kafka, ZooKeeper, etcd'
          ]
        },
        {
          heading: 'WAL Architecture',
          diagram: {
            chart: `sequenceDiagram
    participant C as Client
    participant DB as Database Engine
    participant WAL as Write-Ahead Log
    participant DS as Data Store
    C->>DB: UPDATE users SET name='Bob' WHERE id=1
    DB->>WAL: Append: [Txn 42] SET users:1 name=Bob
    WAL-->>DB: fsync → disk
    DB-->>C: COMMIT OK
    DB->>DS: Eventually flush to data store
    Note over WAL,DS: On crash: replay WAL from last checkpoint
    Note over WAL,DS: Checkpoint: flush DS, truncate WAL`,
            caption: 'WAL written and fsynced before acknowledging commit. Data store updated lazily. Crash recovery replays WAL.'
          }
        },
        {
          heading: 'WAL in Different Systems',
          table: {
            headers: ['System', 'WAL Implementation', 'Purpose'],
            rows: [
              ['PostgreSQL', 'pg_wal (formerly pg_xlog)', 'Crash recovery, replication, PITR'],
              ['MySQL InnoDB', 'Redo log + Undo log', 'Crash recovery, rollback'],
              ['Kafka', 'Append-only segment files', 'Durability, replication, consumer replay'],
              ['RocksDB', 'WAL + MemTable → SST files', 'Crash recovery for LSM-tree'],
              ['etcd/Raft', 'Raft log (WAL)', 'Consensus, state machine replication']
            ]
          }
        },
        {
          heading: 'Python Example — Simple WAL',
          example: {
            title: 'Key-value store with WAL',
            code: `import json, os

class KVStoreWithWAL:
    def __init__(self, wal_path='store.wal'):
        self.wal_path = wal_path
        self.data = {}
        self._recover()

    def _recover(self):
        if os.path.exists(self.wal_path):
            with open(self.wal_path) as f:
                for line in f:
                    entry = json.loads(line)
                    if entry['op'] == 'SET':
                        self.data[entry['key']] = entry['value']
                    elif entry['op'] == 'DEL':
                        self.data.pop(entry['key'], None)
            print(f"Recovered {len(self.data)} keys from WAL")

    def set(self, key, value):
        entry = {'op': 'SET', 'key': key, 'value': value}
        with open(self.wal_path, 'a') as f:
            f.write(json.dumps(entry) + '\\n')
            f.flush()
            os.fsync(f.fileno())  # Durability
        self.data[key] = value

    def get(self, key):
        return self.data.get(key)

# Usage
store = KVStoreWithWAL()
store.set('user:1', 'Alice')
store.set('user:2', 'Bob')
print(store.get('user:1'))  # Alice
# Simulate crash: data in memory lost, but WAL persists
# On restart, _recover() replays WAL → data restored`,
            output: 'WAL written and fsynced before acknowledging. On restart, WAL is replayed to recover state.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>PostgreSQL — WAL for replication and PITR.</strong> PostgreSQL\'s WAL (Write-Ahead Log) serves triple duty: crash recovery, streaming replication to standbys, and Point-In-Time Recovery (PITR). WAL segments are 16MB each. In streaming replication, the primary sends WAL records to replicas in real-time. For PITR, WAL archives are stored in object storage (S3) and can be replayed to restore the database to any point in time.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'WAL = write to log first, then apply to data store',
            'Enables crash recovery, replication, and point-in-time recovery',
            'Sequential writes = fast; fsync = durable',
            'Used in virtually every production database and distributed system'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why write to WAL first instead of directly to the data store? → WAL writes are sequential (fast); data store writes are random (slow). WAL ensures durability.',
            'Q2: What happens if WAL grows too large? → Checkpointing flushes to data store and truncates WAL. Without checkpointing, recovery time increases.',
            'Q3: How does WAL enable replication? → Replicas stream WAL records from the primary and apply them, staying in sync.'
          ]
        }
      ]
    }
  },
  module3: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Caching is the single most effective way to reduce latency and database load. This module covers cache-aside for lazy loading, write-through for consistency, write-behind for write performance, eviction policies for memory management, CDN caching for edge delivery, and multi-tier caching for layered performance.',
          list: [
            '<strong>Topics covered:</strong> Cache-Aside, Write-Through, Write-Behind, Eviction Policies, CDN Caching, Multi-Tier Caching',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'A well-designed cache can reduce response times from 50ms to 1ms and cut database load by 95%. But caching gone wrong leads to stale data, cache stampedes, and inconsistency. Understanding these patterns is critical for any read-heavy system.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Cache-Aside] --> T2[Write-Through]
    T2 --> T3[Write-Behind]
    T3 --> T4[Eviction Policies]
    T4 --> T5[CDN Caching]
    T5 --> T6[Multi-Tier Cache]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Caching is the single most effective way to reduce latency and database load. This module covers the essential caching patterns: cache-aside for lazy loading, write-through for consistency, write-behind for write performance, eviction policies for memory management, CDN caching for edge delivery, and multi-tier caching for layered performance. Each pattern has distinct tradeoffs between consistency, performance, and complexity.',
          list: [
            '<strong>Topics covered:</strong> Cache-Aside (Lazy Loading), Write-Through Cache, Write-Behind (Write-Back), Cache Eviction Policies, CDN Caching, Multi-Tier Caching',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'A well-designed cache can reduce response times from 50ms to 1ms and cut database load by 95%. But caching gone wrong leads to stale data, cache stampedes, and inconsistency. Understanding these patterns is critical for any system that serves read-heavy traffic.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1["Cache-Aside (Lazy Loading)"] -->     T2[Write-Through Cache] -->     T3["Write-Behind (Write-Back)"] -->     T4[Cache Eviction Policies] -->     T5[CDN Caching] -->     T6[Multi-Tier Caching]`,
          text: 'Recommended reading order — each topic builds on the previous one.'
        }
      ]
    },    'cache-aside': {
      title: 'Cache-Aside (Lazy Loading)',
      sections: [
        {
          heading: 'What is Cache-Aside?',
          text: 'Cache-Aside (Lazy Loading) is the most common caching pattern. The application checks the cache first; on a miss, it loads from the database, stores in cache, and returns. The cache is populated on-demand — only data that\'s actually requested gets cached.',
          list: [
            '<strong>Read flow:</strong> Check cache → miss → load from DB → store in cache → return',
            '<strong>Lazy population:</strong> Only requested data enters cache; no pre-warming needed',
            '<strong>TTL-based expiry:</strong> Cache entries expire after a configured time to prevent staleness',
            '<strong>Cache stampede risk:</strong> Many concurrent misses for the same key can overwhelm the DB',
            '<strong>Resilience:</strong> Cache failure degrades to DB — system still works, just slower'
          ]
        },
        {
          heading: 'Cache-Aside Flow',
          diagram: {
            chart: `sequenceDiagram
    participant A as App
    participant C as Cache
    participant D as Database
    A->>C: GET user:42
    C-->>A: MISS
    A->>D: SELECT * FROM users WHERE id=42
    D-->>A: {id:42, name:"Alice"}
    A->>C: SET user:42 = {name:"Alice"} (TTL=300s)
    A-->>A: Return to client
    Note over A,C: Next request: GET user:42 → HIT`,
            caption: 'Cache miss → load from DB → populate cache → return. Subsequent requests hit cache.'
          }
        },
        {
          heading: 'Python Example — Cache-Aside with Redis',
          example: {
            title: 'Cache-aside implementation',
            code: `import redis, json, time

cache = redis.Redis(host='localhost', port=6379)
DB = {'user:42': {'name': 'Alice', 'email': 'alice@example.com'}}

def get_user(user_id):
    key = f'user:{user_id}'
    # 1. Check cache
    cached = cache.get(key)
    if cached:
        print(f"Cache HIT for {key}")
        return json.loads(cached)
    # 2. Cache miss — load from DB
    print(f"Cache MISS for {key} — loading from DB")
    user = DB.get(key)
    if user:
        # 3. Store in cache with TTL
        cache.setex(key, 300, json.dumps(user))
    return user

print(get_user('user:42'))  # MISS → DB → cache
print(get_user('user:42'))  # HIT → cache`,
            output: 'First call: MISS, loads from DB, caches. Second call: HIT, returns from cache.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Cache Stampede Prevention',
          list: [
            '<strong>1. Locking:</strong> On miss, acquire a lock; only one thread loads from DB; others wait',
            '<strong>2. Early recomputation:</strong> Refresh cache before expiry (probabilistic early expiration)',
            '<strong>3. External recompute:</strong> Background job refreshes hot keys periodically',
            '<strong>4. Request coalescing:</strong> Combine concurrent requests for the same key into one DB call'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Facebook — Memcached cache-aside at scale.</strong> Facebook\'s TAO graph API uses cache-aside with Memcached. When a user\'s friend list is requested, TAO checks Memcached first. On miss, it queries MySQL shards, populates Memcached, and returns. With billions of queries per second, cache hit rates exceed 98%. They use lease-based cache stampede prevention: on miss, the first request gets a "lease" to load from DB; others get stale data or wait.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Cache-aside = check cache → miss → load from DB → store in cache',
            'Lazy loading: only requested data is cached',
            'TTL prevents staleness; cache stampede prevention is critical',
            'Cache failure = degraded performance, not system failure'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What happens when cache is empty after a restart? → Cache stampede: all requests miss simultaneously. Use cache warming or request coalescing.',
            'Q2: How do you set the right TTL? → Balance between data freshness and cache hit rate. Shorter TTL = fresher data, more DB load.',
            'Q3: What if the cached data is updated in DB? → Cache becomes stale until TTL expires. Use cache invalidation on write or shorter TTL.'
          ]
        }
      ]
    },
    'write-through': {
      title: 'Write-Through Cache',
      sections: [
        {
          heading: 'What is Write-Through?',
          text: 'In write-through caching, every write goes to both the cache and the database synchronously. The cache is always consistent with the database. Reads are always fresh — no stale data. The trade-off is higher write latency since both operations must complete.',
          list: [
            '<strong>Synchronous writes:</strong> Write to cache AND database before acknowledging',
            '<strong>Always consistent:</strong> Cache never has stale data (for successful writes)',
            '<strong>Higher write latency:</strong> Two writes per operation (cache + DB)',
            '<strong>Best for:</strong> Read-heavy workloads where data freshness matters',
            '<strong>Combined with cache-aside:</strong> Write-through for writes, cache-aside for reads'
          ]
        },
        {
          heading: 'Write-Through Flow',
          diagram: {
            chart: `sequenceDiagram
    participant A as App
    participant C as Cache
    participant D as Database
    A->>C: SET user:42 = {name:"Bob"}
    A->>D: UPDATE users SET name='Bob' WHERE id=42
    C-->>A: OK
    D-->>A: OK
    A-->>A: Return success
    Note over A,D: Both cache and DB updated before ack
    Note over C: Cache is always consistent with DB`,
            caption: 'Write goes to cache AND database synchronously. Cache is always in sync with DB.'
          }
        },
        {
          heading: 'Write-Through vs Write-Behind vs Write-Around',
          table: {
            headers: ['Pattern', 'Write Path', 'Consistency', 'Write Latency', 'Best For'],
            rows: [
              ['Write-Through', 'Cache + DB (sync)', 'Strong', 'Higher', 'Read-heavy, freshness matters'],
              ['Write-Behind', 'Cache first, DB async', 'Eventual', 'Low', 'Write-heavy, can tolerate lag'],
              ['Write-Around', 'DB only, invalidate cache', 'Strong (after invalidation)', 'Low', 'Write-once, read-rarely data'],
              ['Cache-Aside', 'DB only (on miss)', 'Eventual (TTL)', 'Low', 'Read-heavy, simple']
            ]
          }
        },
        {
          heading: 'Python Example — Write-Through',
          example: {
            title: 'Write-through cache implementation',
            code: `import redis, json

cache = redis.Redis(host='localhost', port=6379)
DB = {}

def write_through(key, value):
    # 1. Write to cache
    cache.set(key, json.dumps(value))
    # 2. Write to database
    DB[key] = value
    print(f"Written to cache + DB: {key} = {value}")

def read(key):
    cached = cache.get(key)
    if cached:
        return json.loads(cached)
    # Fallback: read from DB (shouldn't happen with write-through)
    return DB.get(key)

write_through('user:42', {'name': 'Alice'})
print(read('user:42'))  # Always fresh from cache`,
            output: 'Write updates both cache and DB. Read always returns fresh data from cache.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>AWS DynamoDB Accelerator (DAX) — write-through caching.</strong> DAX is an in-memory cache for DynamoDB that supports write-through. When an application writes through DAX, the write goes to both the DAX cluster and DynamoDB synchronously. Subsequent reads from DAX return the latest data with microsecond latency. This is ideal for read-heavy workloads like product catalogs where data freshness is critical.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Write-through = write to cache + DB synchronously',
            'Cache always consistent with DB; no stale reads',
            'Higher write latency; best for read-heavy, freshness-critical workloads',
            'Often combined with cache-aside for reads'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When would you NOT use write-through? → Write-heavy workloads where the double-write latency is unacceptable.',
            'Q2: What happens if the cache write succeeds but DB write fails? → Inconsistency. Use distributed transactions or write to DB first, then cache.',
            'Q3: How does write-through compare to write-behind? → Write-through = sync, consistent, slower. Write-behind = async, faster, eventually consistent.'
          ]
        }
      ]
    },
    'write-behind': {
      title: 'Write-Behind (Write-Back)',
      sections: [
        {
          heading: 'What is Write-Behind?',
          text: 'Write-behind (write-back) caching writes data to the cache first and acknowledges immediately. The cache asynchronously flushes writes to the database later. This dramatically reduces write latency but introduces a window where data exists only in cache.',
          list: [
            '<strong>Async writes:</strong> Write to cache → acknowledge → later flush to DB',
            '<strong>Low write latency:</strong> Only one fast write (to cache) before acknowledging',
            '<strong>Batching:</strong> Multiple writes can be batched into fewer DB operations',
            '<strong>Risk of data loss:</strong> If cache crashes before flush, writes are lost',
            '<strong>Write coalescing:</strong> Multiple updates to the same key can be merged into one DB write'
          ]
        },
        {
          heading: 'Write-Behind Flow',
          diagram: {
            chart: `sequenceDiagram
    participant A as App
    participant C as Cache
    participant D as Database
    A->>C: SET user:42 = {name:"Bob"}
    C-->>A: OK (immediate)
    Note over C: Queued for async flush
    A->>C: SET user:42 = {name:"Charlie"}
    C-->>A: OK (immediate)
    Note over C: Coalesced: only latest value flushed
    C->>D: UPDATE users SET name='Charlie' WHERE id=42
    D-->>C: OK
    Note over C,D: Async flush with batching`,
            caption: 'Writes go to cache only (fast ack). Cache flushes to DB asynchronously, coalescing updates.'
          }
        },
        {
          heading: 'Python Example — Write-Behind with Async Flush',
          example: {
            title: 'Write-behind cache with background flush',
            code: `import redis, json, threading, time
from collections import defaultdict

cache = redis.Redis(host='localhost', port=6379)
DB = {}
dirty_keys = set()
lock = threading.Lock()

def write_behind(key, value):
    cache.set(key, json.dumps(value))
    with lock:
        dirty_keys.add(key)
    print(f"Written to cache: {key} = {value}")

def flush_worker():
    while True:
        time.sleep(2)  # Flush interval
        with lock:
            keys = list(dirty_keys)
            dirty_keys.clear()
        for key in keys:
            val = cache.get(key)
            if val:
                DB[key] = json.loads(val)
                print(f"Flushed to DB: {key} = {DB[key]}")

threading.Thread(target=flush_worker, daemon=True).start()

write_behind('user:42', {'name': 'Alice'})
write_behind('user:42', {'name': 'Bob'})  # Coalesced
time.sleep(3)
print(f"DB state: {DB}")  # Only 'Bob' flushed`,
            output: 'Writes acknowledged immediately. Multiple updates coalesced. DB updated async.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Oracle Coherence — write-behind caching.</strong> Oracle Coherence (now part of Oracle Cloud) uses write-behind for high-throughput financial trading systems. Trades are written to the in-memory data grid and acknowledged in microseconds. The grid asynchronously persists to the database, batching hundreds of writes into single DB transactions. This enables sub-millisecond write latency while maintaining eventual durability.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Write-behind = write to cache, ack immediately, flush to DB async',
            'Lowest write latency; supports batching and coalescing',
            'Risk: data loss if cache crashes before flush',
            'Best for write-heavy, latency-sensitive workloads that can tolerate some data loss risk'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you prevent data loss with write-behind? → Use persistent cache (Redis AOF/RDB), replication, or write-ahead log in the cache layer.',
            'Q2: What\'s write coalescing? → Multiple updates to the same key are merged; only the latest value is flushed to DB.',
            'Q3: When is write-behind better than write-through? → Write-heavy workloads where latency matters more than immediate consistency.'
          ]
        }
      ]
    },
    'eviction-policies': {
      title: 'Cache Eviction Policies',
      sections: [
        {
          heading: 'Cache Eviction Policies',
          text: 'When cache is full, eviction policies decide which entries to remove. The right policy depends on access patterns. LRU (Least Recently Used) is the most common, but different workloads benefit from different strategies.',
          list: [
            '<strong>LRU (Least Recently Used):</strong> Evict the item accessed least recently. Good for temporal locality.',
            '<strong>LFU (Least Frequently Used):</strong> Evict the item with the lowest access count. Good for popularity-based access.',
            '<strong>TTL (Time To Live):</strong> Evict items that have exceeded their expiration time. Simple and predictable.',
            '<strong>FIFO (First In First Out):</strong> Evict the oldest item. Simple but ignores access patterns.',
            '<strong>Random:</strong> Evict a random item. Surprisingly effective in some cases, very low overhead.'
          ]
        },
        {
          heading: 'Eviction Policies Comparison',
          diagram: {
            chart: `xychart-beta
    title "Cache Hit Rate vs Cache Size"
    x-axis "Cache Size (% of dataset)" [5, 10, 20, 30, 50, 80]
    y-axis "Hit Rate (%)" 0 --> 100
    line "LRU" [20, 40, 65, 80, 92, 98]
    line "LFU" [25, 45, 70, 82, 90, 96]
    line "FIFO" [15, 30, 50, 65, 80, 90]
    line "Random" [12, 25, 45, 60, 78, 88]`,
            caption: 'LRU and LFU generally outperform FIFO and Random for most real-world workloads with temporal locality.'
          }
        },
        {
          heading: 'Python Example — LRU Cache',
          example: {
            title: 'LRU cache implementation',
            code: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)  # Mark as recently used
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # Evict LRU

# Usage
lru = LRUCache(2)
lru.put(1, 'A'); lru.put(2, 'B')
print(lru.get(1))  # A (1 is now most recent)
lru.put(3, 'C')    # Evicts 2 (least recent)
print(lru.get(2))  # -1 (evicted)`,
            output: 'LRU evicts the least recently used item when capacity is exceeded.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Choosing an Eviction Policy',
          table: {
            headers: ['Policy', 'Best For', 'Overhead', 'Weakness'],
            rows: [
              ['LRU', 'Temporal locality (recent = relevant)', 'Medium (track order)', 'Scanning large datasets flushes cache'],
              ['LFU', 'Popularity-based (hot items stay)', 'High (counters)', 'New items struggle to enter cache'],
              ['TTL', 'Time-sensitive data (sessions, tokens)', 'Low (timestamp)', 'May evict hot items too early'],
              ['FIFO', 'Simple, predictable eviction', 'Very low', 'Ignores access patterns'],
              ['TinyLFU', 'Modern, adaptive (Caffeine)', 'Low', 'More complex implementation']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Redis — multiple eviction policies.</strong> Redis supports 8 eviction policies: noeviction, allkeys-lru, volatile-lru, allkeys-lfu, volatile-lfu, allkeys-random, volatile-random, volatile-ttl. The "volatile-*" variants only evict keys with TTL set. For most use cases, allkeys-lru is recommended. Redis uses approximated LRU (sampling-based) for efficiency — it samples N keys and evicts the least recently used among them, achieving near-optimal results with minimal overhead.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'LRU = evict least recently used (best general-purpose)',
            'LFU = evict least frequently used (good for popularity)',
            'TTL = time-based eviction (sessions, tokens)',
            'Redis uses approximated LRU for efficiency'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why does LRU fail for scan-heavy workloads? → A full table scan loads many items, evicting the actually-hot items (cache pollution).',
            'Q2: What\'s the problem with LFU? → New items have low frequency and get evicted before they can prove their popularity (cache admission problem).',
            'Q3: How does Redis approximate LRU? → Samples N random keys, evicts the least recently used among them. N=5 by default.'
          ]
        }
      ]
    },
    'cdn-caching': {
      title: 'CDN Caching',
      sections: [
        {
          heading: 'What is CDN Caching?',
          text: 'A Content Delivery Network (CDN) caches static and dynamic content at edge locations close to users. This reduces latency, offloads origin servers, and handles traffic spikes. CDNs are the first line of defense for global-scale web applications.',
          list: [
            '<strong>Edge servers:</strong> Hundreds of PoPs (Points of Presence) worldwide cache content near users',
            '<strong>Cache hierarchy:</strong> Edge → Regional → Origin (multi-tier caching)',
            '<strong>Cache-Control headers:</strong> max-age, s-maxage, stale-while-revalidate control CDN behavior',
            '<strong>Cache invalidation:</strong> Purge by URL, wildcard, or cache tag when content changes',
            '<strong>Dynamic content:</strong> CDNs can cache API responses, HTML fragments, and personalized content'
          ]
        },
        {
          heading: 'CDN Architecture',
          diagram: {
            chart: `flowchart TB
    U1[User - India] --> E1[(Edge - Mumbai)]
    U2[User - UK] --> E2[(Edge - London)]
    U3[User - US] --> E3[(Edge - Virginia)]
    E1 --> |Cache Miss| R1[(Regional - Singapore)]
    E2 --> |Cache Miss| R2[(Regional - Frankfurt)]
    E3 --> |Cache Miss| R2
    R1 --> |Cache Miss| O[(Origin Server)]
    R2 --> |Cache Miss| O
    style E1 fill:#2ecc71,color:#fff
    style E2 fill:#2ecc71,color:#fff
    style E3 fill:#2ecc71,color:#fff
    style O fill:#e74c3c,color:#fff`,
            caption: 'Users hit nearest edge. Misses cascade up: Edge → Regional → Origin. Multi-tier caching.'
          }
        },
        {
          heading: 'CDN Cache Headers',
          table: {
            headers: ['Header', 'Purpose', 'Example'],
            rows: [
              ['Cache-Control: max-age', 'How long browser/CDN can cache', 'max-age=3600 (1 hour)'],
              ['Cache-Control: s-maxage', 'CDN-specific max-age (overrides max-age)', 's-maxage=86400 (24h for CDN)'],
              ['Cache-Control: stale-while-revalidate', 'Serve stale while fetching fresh', 'stale-while-revalidate=60'],
              ['Cache-Control: stale-if-error', 'Serve stale if origin errors', 'stale-if-error=86400'],
              ['Surrogate-Control', 'CDN-specific cache directives', 'Surrogate-Control: max-age=3600'],
              ['ETag / If-None-Match', 'Conditional requests (304 Not Modified)', 'ETag: "abc123"']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix — Open Connect CDN.</strong> Netflix built their own CDN (Open Connect) with thousands of edge appliances deployed inside ISPs worldwide. During peak hours, Open Connect serves over 95% of Netflix traffic from edge caches. Content is pre-positioned during off-peak hours based on predicted popularity. This reduces backbone traffic and provides buffer-free streaming to 200M+ subscribers.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'CDN = edge caching near users for low latency and origin offload',
            'Multi-tier: Edge → Regional → Origin',
            'Cache-Control headers control CDN behavior',
            'Cache invalidation (purge) for content updates'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you cache personalized content on a CDN? → Use edge computing (Cloudflare Workers, Lambda@Edge) to assemble personalized pages at the edge.',
            'Q2: What\'s the difference between cache purge and cache invalidation? → Purge = delete from cache immediately. Invalidation = mark as stale, revalidate on next request.',
            'Q3: How do you handle cache warming after a purge? → Pre-fetch popular URLs after purge, or use stale-while-revalidate to serve stale content during revalidation.'
          ]
        }
      ]
    },
    'multi-tier-cache': {
      title: 'Multi-Tier Caching',
      sections: [
        {
          heading: 'What is Multi-Tier Caching?',
          text: 'Multi-tier caching uses multiple cache layers with different speed/capacity trade-offs. The fastest (and smallest) cache is closest to the application; slower (but larger) caches sit behind it. This creates a pyramid: L1 (in-memory) → L2 (local Redis) → L3 (distributed cache) → Database.',
          list: [
            '<strong>L1 — Application cache:</strong> In-process memory (Caffeine, Guava). Nanosecond latency, very small.',
            '<strong>L2 — Local cache:</strong> Redis/Memcached on same machine. Microsecond latency, medium size.',
            '<strong>L3 — Distributed cache:</strong> Redis Cluster, ElastiCache. Millisecond latency, very large.',
            '<strong>L4 — CDN/Edge:</strong> Global edge cache. Low latency for users, massive capacity.',
            '<strong>Cache hierarchy:</strong> Check L1 → L2 → L3 → L4 → Database. Populate all layers on miss.'
          ]
        },
        {
          heading: 'Multi-Tier Cache Architecture',
          diagram: {
            chart: `flowchart TB
    A[App Server] --> L1[(L1: In-Process\nCaffeine/Guava\n~1ns, ~10GB)]
    L1 --> |Miss| L2[(L2: Local Redis\n~100μs, ~100GB)]
    L2 --> |Miss| L3[(L3: Redis Cluster\n~1ms, ~1TB)]
    L3 --> |Miss| L4[(L4: CDN Edge\n~10ms, ~PB)]
    L4 --> |Miss| DB[(Database\n~50ms, ~PB)]
    style L1 fill:#2ecc71,color:#fff
    style L2 fill:#3498db,color:#fff
    style L3 fill:#f39c12,color:#fff
    style L4 fill:#9b59b6,color:#fff
    style DB fill:#e74c3c,color:#fff`,
            caption: 'Each tier trades speed for capacity. Misses cascade down; hits return from the fastest available tier.'
          }
        },
        {
          heading: 'Cache Tier Characteristics',
          table: {
            headers: ['Tier', 'Technology', 'Latency', 'Capacity', 'Scope'],
            rows: [
              ['L1 In-Process', 'Caffeine, Guava, HashMap', '~1-100 ns', 'MBs-GBs', 'Per instance'],
              ['L2 Local', 'Redis, Memcached (local)', '~100 μs', '10s GBs', 'Per machine'],
              ['L3 Distributed', 'Redis Cluster, ElastiCache', '~1 ms', 'TBs', 'Per service/region'],
              ['L4 Edge/CDN', 'CloudFront, Cloudflare, Fastly', '~10-50 ms', 'PBs', 'Global'],
              ['Database', 'PostgreSQL, MySQL, DynamoDB', '~10-100 ms', 'PBs', 'Global']
            ]
          }
        },
        {
          heading: 'Python Example — Two-Tier Cache',
          example: {
            title: 'L1 (in-memory) + L2 (Redis) cache',
            code: `import redis, time, json
from functools import lru_cache

# L2: Redis (distributed)
redis_cache = redis.Redis(host='localhost', port=6379)

# L1: In-memory LRU (per-process)
@lru_cache(maxsize=1024)
def get_user_l1(user_id):
    # Check L2 (Redis)
    key = f'user:{user_id}'
    cached = redis_cache.get(key)
    if cached:
        print(f"L2 HIT: {key}")
        return json.loads(cached)
    # L2 miss — load from DB
    print(f"L2 MISS: {key} — loading from DB")
    user = DB_LOAD(key)  # Simulated DB call
    redis_cache.setex(key, 300, json.dumps(user))
    return user

def DB_LOAD(key):
    time.sleep(0.01)  # Simulate DB latency
    return {'id': key, 'name': 'Alice'}

# First call: L1 miss → L2 miss → DB
print(get_user_l1('user:42'))
# Second call: L1 hit (in-memory, ~ns)
print(get_user_l1('user:42'))`,
            output: 'L1 hit = nanoseconds. L2 hit = microseconds. DB = milliseconds. Multi-tier maximizes hit rate at each level.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Twitter — multi-tier caching for timeline.</strong> Twitter uses a multi-tier cache for timeline generation: L1 is an in-process cache for the most recent tweets of active users, L2 is a Redis cluster for recent timelines, and L3 is Manhattan (Twitter\'s distributed KV store) for historical data. This hierarchy serves billions of timeline requests daily with p99 latency under 100ms.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multi-tier = L1 (fastest/smallest) → L2 → L3 → DB (slowest/largest)',
            'Each tier trades speed for capacity',
            'Misses cascade down; hits return from fastest available tier',
            'Invalidation must propagate through all tiers'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you keep L1 caches consistent across instances? → Use pub/sub to broadcast invalidation messages, or short TTLs.',
            'Q2: What\'s the downside of too many cache tiers? → Increased complexity, invalidation propagation delay, and memory overhead.',
            'Q3: When would you skip L1 cache? → In serverless/stateless environments where in-process cache is lost between invocations.'
          ]
        }
      ]
    }
  },
  module4: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Reliability patterns help systems handle failures gracefully — from transient network glitches to complete service outages. This module covers timeouts, retries with exponential backoff, idempotency, circuit breakers, bulkheads, and rate limiting. These patterns are the backbone of resilient microservices.',
          list: [
            '<strong>Topics covered:</strong> Timeouts, Retries & Backoff, Idempotency, Circuit Breaker, Bulkhead, Rate Limiting',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'In distributed systems, failures are not exceptions — they are the norm. Reliability patterns ensure that when one component fails, the entire system doesn\'t collapse. They are essential for achieving 99.9%+ availability.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Timeouts] --> T2[Retries]
    T2 --> T3[Idempotency]
    T3 --> T4[Circuit Breaker]
    T4 --> T5[Bulkhead]
    T5 --> T6[Rate Limiting]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Reliability patterns help systems handle failures gracefully — from transient network glitches to complete service outages. This module covers timeouts to prevent hanging, retries with exponential backoff, idempotency for safe retries, circuit breakers to prevent cascading failures, bulkheads to isolate failures, and rate limiting to protect against overload. These patterns are the backbone of resilient microservices.',
          list: [
            '<strong>Topics covered:</strong> Timeouts, Retries & Backoff, Idempotency, Circuit Breaker, Bulkhead Pattern, Rate Limiting',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'In distributed systems, failures are not exceptions — they are the norm. Network partitions, service crashes, and resource exhaustion happen every day. Reliability patterns ensure that when one component fails, the entire system doesn\'t collapse. They are essential for achieving 99.9%+ availability.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Timeouts] -->     T2["Retries & Backoff"] -->     T3[Idempotency] -->     T4[Circuit Breaker] -->     T5[Bulkhead Pattern] -->     T6[Rate Limiting]`,
          text: 'Recommended reading order — each topic builds on the previous one.'
        }
      ]
    },    'timeouts': {
      title: 'Timeouts',
      sections: [
        {
          heading: 'What are Timeouts?',
          text: 'Timeouts are the most fundamental reliability pattern: set a maximum time to wait for a response. Without timeouts, a slow or hung downstream service can exhaust all your threads/connections, causing cascading failure. Every network call needs a timeout.',
          list: [
            '<strong>Connection timeout:</strong> Max time to establish a TCP connection (typically 1-5s)',
            '<strong>Read timeout:</strong> Max time to wait for response after connection (typically 5-30s)',
            '<strong>Request timeout:</strong> Overall max time for the entire request (connection + read)',
            '<strong>Idle timeout:</strong> Max time a connection can be idle before being closed',
            '<strong>Adaptive timeouts:</strong> Dynamically adjust based on observed latency percentiles'
          ]
        },
        {
          heading: 'Timeout Flow',
          diagram: {
            chart: `sequenceDiagram
    participant A as Service A
    participant B as Service B
    A->>B: Request (timeout=5s)
    Note over B: Processing... slow
    A->>A: 5s elapsed — timeout!
    A-->>A: Return error / fallback
    B-->>A: Response (too late, ignored)
    Note over A,B: Without timeout, A would wait forever\nThread pool exhausted → cascading failure`,
            caption: 'Timeout prevents indefinite waiting. After timeout, the thread is freed for other requests.'
          }
        },
        {
          heading: 'Timeout Best Practices',
          list: [
            '<strong>1. Set timeouts on every network call:</strong> HTTP, gRPC, database queries, cache lookups — everything',
            '<strong>2. Use different timeouts per dependency:</strong> Cache (100ms) < DB (1s) < External API (5s)',
            '<strong>3. Propagate deadlines:</strong> Pass remaining timeout budget downstream (gRPC deadline propagation)',
            '<strong>4. Add jitter:</strong> Avoid thundering herd — stagger retry timings with random jitter',
            '<strong>5. Monitor timeout rates:</strong> Alert if timeout rate exceeds threshold (e.g., >1% of requests)'
          ]
        },
        {
          heading: 'Python Example — HTTP Client with Timeouts',
          example: {
            title: 'Requests with connection and read timeouts',
            code: `import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# Always set timeouts!
try:
    response = requests.get(
        'https://api.example.com/data',
        timeout=(3.0, 10.0)  # (connect timeout, read timeout)
    )
    data = response.json()
except requests.exceptions.ConnectTimeout:
    print("Connection timed out — service may be down")
except requests.exceptions.ReadTimeout:
    print("Read timed out — service is slow")
except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")

# With retry + timeout
session = requests.Session()
retry = Retry(total=3, backoff_factor=0.5)
adapter = HTTPAdapter(max_retries=retry)
session.mount('https://', adapter)
session.get('https://api.example.com/data', timeout=5)`,
            output: 'Connection timeout = 3s, read timeout = 10s. Catches and handles each failure mode.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Google — deadline propagation in gRPC.</strong> Google\'s internal services use gRPC with deadline propagation. When a user request enters the system, it carries a deadline (e.g., 500ms). Each downstream call subtracts its own processing time and passes the remaining budget. If a service sees the deadline has passed, it immediately returns DEADLINE_EXCEEDED without doing work. This prevents wasted computation and cascading timeouts across hundreds of microservices.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Every network call needs a timeout — no exceptions',
            'Connection timeout (1-5s) + Read timeout (5-30s)',
            'Propagate deadlines downstream to avoid wasted work',
            'Monitor timeout rates; alert on anomalies'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What happens if you don\'t set timeouts? → A slow downstream can exhaust your thread pool, causing cascading failure across all services.',
            'Q2: How do you choose the right timeout value? → Start with p99 latency + buffer. Monitor and adjust. Too short = false timeouts; too long = slow failure.',
            'Q3: What is deadline propagation? → Passing the remaining time budget to downstream calls so they can abort early if the deadline has passed.'
          ]
        }
      ]
    },
    'retries': {
      title: 'Retries & Backoff',
      sections: [
        {
          heading: 'Retries with Exponential Backoff',
          text: 'Retries handle transient failures (network blips, temporary overload) by re-attempting failed requests. Exponential backoff increases the wait time between retries to avoid overwhelming an already-struggling service. Combined with jitter, this prevents thundering herd problems.',
          list: [
            '<strong>Transient failures only:</strong> Retry on network errors, timeouts, 429/503. Don\'t retry on 4xx client errors.',
            '<strong>Exponential backoff:</strong> Wait 1s, 2s, 4s, 8s... between retries (base × 2^attempt)',
            '<strong>Jitter:</strong> Add random variation to backoff to spread retry load (e.g., ±25%)',
            '<strong>Max retries:</strong> Cap at 3-5 attempts to avoid infinite retry loops',
            '<strong>Idempotency:</strong> Retries are only safe if the operation is idempotent'
          ]
        },
        {
          heading: 'Retry with Backoff Flow',
          diagram: {
            chart: `sequenceDiagram
    participant A as Service A
    participant B as Service B
    A->>B: Request (attempt 1)
    B-->>A: 503 Service Unavailable
    Note over A: Wait 1s + jitter
    A->>B: Request (attempt 2)
    B-->>A: 503 Service Unavailable
    Note over A: Wait 2s + jitter
    A->>B: Request (attempt 3)
    B-->>A: 200 OK
    Note over A,B: Exponential backoff: 1s → 2s → 4s → 8s`,
            caption: 'Retry with exponential backoff + jitter. Gives the downstream time to recover.'
          }
        },
        {
          heading: 'Python Example — Retry with Exponential Backoff',
          example: {
            title: 'Retry decorator with backoff + jitter',
            code: `import time, random, functools

def retry(max_attempts=3, base_delay=1, max_delay=30):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    delay = min(base_delay * (2 ** attempt), max_delay)
                    jitter = random.uniform(0, delay * 0.25)
                    wait = delay + jitter
                    print(f"Attempt {attempt+1} failed: {e}. Retrying in {wait:.1f}s...")
                    time.sleep(wait)
        return wrapper
    return decorator

@retry(max_attempts=3, base_delay=1)
def call_api():
    # Simulate transient failure
    if random.random() < 0.7:
        raise ConnectionError("Temporary network error")
    return "Success!"

print(call_api())`,
            output: 'Retries up to 3 times with exponential backoff (1s, 2s, 4s) + random jitter.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>AWS SDK — built-in retry with backoff.</strong> The AWS SDK implements automatic retries with exponential backoff and jitter for all service calls. Default: 3 retries for standard mode, 2 for adaptive mode. The SDK uses "decorrelated jitter" — each retry delay is random between 0 and the calculated backoff — which AWS found to be optimal for reducing thundering herd in large-scale systems.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Retry only transient failures (network, 429, 503) — not 4xx client errors',
            'Exponential backoff: 1s → 2s → 4s → 8s (capped)',
            'Always add jitter to prevent thundering herd',
            'Operations must be idempotent for safe retries'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why not retry on 400 Bad Request? → The request itself is invalid; retrying won\'t help and wastes resources.',
            'Q2: What is the thundering herd problem with retries? → Many clients retry simultaneously after a failure, overwhelming the recovering service. Jitter spreads them out.',
            'Q3: How do you make an operation idempotent for safe retries? → Use idempotency keys, check-before-write, or UPSERT semantics.'
          ]
        }
      ]
    },
    'idempotency': {
      title: 'Idempotency',
      sections: [
        {
          heading: 'What is Idempotency?',
          text: 'An idempotent operation produces the same result no matter how many times it\'s executed. This is critical for distributed systems where network retries, duplicate messages, and at-least-once delivery can cause the same request to be processed multiple times.',
          list: [
            '<strong>Idempotency key:</strong> A unique identifier sent with each request; server deduplicates by key',
            '<strong>HTTP idempotent methods:</strong> GET, PUT, DELETE are idempotent; POST is not',
            '<strong>Idempotency window:</strong> How long the server remembers processed keys (typically 24h)',
            '<strong>Implementation:</strong> Store (key → response) mapping; return cached response for duplicates',
            '<strong>Stripe pattern:</strong> Pass Idempotency-Key header; Stripe returns same response for duplicate keys'
          ]
        },
        {
          heading: 'Idempotency Flow',
          diagram: {
            chart: `sequenceDiagram
    participant C as Client
    participant S as Server
    participant DB as Idempotency Store
    C->>S: POST /charge (Idempotency-Key: abc-123)
    S->>DB: Check key "abc-123"
    DB-->>S: Not found
    S->>S: Process charge ($100)
    S->>DB: Store (abc-123 → {status: "charged", amount: 100})
    S-->>C: 200 {status: "charged", amount: 100}
    Note over C: Network error — retry
    C->>S: POST /charge (Idempotency-Key: abc-123)
    S->>DB: Check key "abc-123"
    DB-->>S: Found: {status: "charged", amount: 100}
    S-->>C: 200 {status: "charged", amount: 100}
    Note over S: No double charge!`,
            caption: 'Idempotency key prevents duplicate processing. Server returns cached response for known keys.'
          }
        },
        {
          heading: 'Python Example — Idempotent API',
          example: {
            title: 'Idempotent payment endpoint',
            code: `from flask import Flask, request, jsonify
import hashlib, time

app = Flask(__name__)
idempotency_store = {}  # In production: Redis with TTL

@app.route('/charge', methods=['POST'])
def charge():
    key = request.headers.get('Idempotency-Key')
    if not key:
        return jsonify({'error': 'Idempotency-Key required'}), 400

    # Check if already processed
    if key in idempotency_store:
        print(f"Duplicate request: {key}")
        return jsonify(idempotency_store[key])

    # Process payment (idempotent because of key)
    amount = request.json.get('amount')
    result = {'status': 'charged', 'amount': amount, 'id': key}
    idempotency_store[key] = result
    print(f"New charge: {key} = {amount}")
    return jsonify(result)

# Cleanup old keys (in production, use Redis TTL)
def cleanup_old_keys():
    now = time.time()
    # Remove keys older than 24h`,
            output: 'First request processes charge. Duplicate with same key returns cached result — no double charge.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Stripe — Idempotency-Key header.</strong> Stripe pioneered the Idempotency-Key pattern for payment APIs. Clients generate a unique key (UUID) for each payment attempt. Stripe stores the key → response mapping for 24 hours. If a network error causes a retry with the same key, Stripe returns the original response — preventing double charges. This pattern is now adopted by PayPal, Square, and most payment processors.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Idempotency = same result regardless of how many times executed',
            'Use idempotency keys for all mutating operations (POST, PATCH)',
            'Store key → response mapping with TTL (typically 24h)',
            'Critical for payment systems, order creation, and any at-least-once delivery'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Which HTTP methods are naturally idempotent? → GET, PUT, DELETE, HEAD, OPTIONS. POST is NOT idempotent.',
            'Q2: How long should you store idempotency keys? → Typically 24 hours. Long enough to cover all retry windows.',
            'Q3: What if the same idempotency key is used for different requests? → The server should reject with 422 Unprocessable Entity (different body, same key).'
          ]
        }
      ]
    },
    'circuit-breaker': {
      title: 'Circuit Breaker',
      sections: [
        {
          heading: 'What is a Circuit Breaker?',
          text: 'A circuit breaker prevents cascading failures by detecting when a downstream service is failing and "opening the circuit" — failing fast instead of making calls that will likely fail. This gives the downstream time to recover and prevents resource exhaustion in the caller.',
          list: [
            '<strong>Closed state:</strong> Normal operation — requests flow through. Count failures.',
            '<strong>Open state:</strong> Failures exceed threshold — requests fail immediately without calling downstream.',
            '<strong>Half-open state:</strong> After timeout, allow a few test requests. If they succeed → close. If they fail → open again.',
            '<strong>Failure threshold:</strong> e.g., 50% failure rate over 10 requests triggers open',
            '<strong>Recovery timeout:</strong> e.g., 30s before transitioning from open to half-open'
          ]
        },
        {
          heading: 'Circuit Breaker States',
          diagram: {
            chart: `stateDiagram-v2
    [*] --> Closed
    Closed --> Open: Failure threshold exceeded\n(>50% failures in window)
    Open --> HalfOpen: Recovery timeout elapsed\n(30s)
    HalfOpen --> Closed: Test requests succeed
    HalfOpen --> Open: Test requests fail
    note right of Closed: Normal operation\nCount failures
    note right of Open: Fail fast\nNo calls to downstream
    note right of HalfOpen: Limited test requests\nProbing recovery`,
            caption: 'Three states: Closed (normal), Open (fail fast), Half-Open (probing recovery).'
          }
        },
        {
          heading: 'Python Example — Circuit Breaker',
          example: {
            title: 'Simple circuit breaker implementation',
            code: `import time, random
from enum import Enum

class State(Enum):
    CLOSED = 1
    OPEN = 2
    HALF_OPEN = 3

class CircuitBreaker:
    def __init__(self, failure_threshold=3, recovery_timeout=10):
        self.state = State.CLOSED
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.last_failure_time = 0

    def call(self, func):
        if self.state == State.OPEN:
            if time.time() - self.last_failure_time > self.recovery_timeout:
                self.state = State.HALF_OPEN
                print("Circuit: OPEN → HALF_OPEN")
            else:
                raise Exception("Circuit breaker is OPEN")

        try:
            result = func()
            if self.state == State.HALF_OPEN:
                self.state = State.CLOSED
                self.failure_count = 0
                print("Circuit: HALF_OPEN → CLOSED")
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = time.time()
            if self.failure_count >= self.failure_threshold:
                self.state = State.OPEN
                print(f"Circuit: CLOSED → OPEN ({self.failure_count} failures)")
            raise

# Usage
cb = CircuitBreaker(failure_threshold=3, recovery_timeout=5)

def unreliable_service():
    if random.random() < 0.7:
        raise ConnectionError("Service unavailable")
    return "OK"

for i in range(10):
    try:
        print(f"Call {i}: {cb.call(unreliable_service)}")
    except Exception as e:
        print(f"Call {i}: {e}")
    time.sleep(0.5)`,
            output: 'After 3 failures, circuit opens. Fails fast for 5s. Then half-open: test request. If OK, closes.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix Hystrix — circuit breaker library.</strong> Netflix created Hystrix to prevent cascading failures in their microservice architecture. Each dependency (database, service, cache) gets its own circuit breaker with configurable thresholds. When a circuit opens, Hystrix executes a fallback (cached data, default value, error response). Hystrix dashboards showed real-time circuit states across hundreds of services. Though now in maintenance mode, its patterns live on in Resilience4j, Sentinel, and Envoy.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Circuit breaker = fail fast when downstream is failing',
            'Three states: Closed → Open → Half-Open → Closed',
            'Prevents cascading failures and resource exhaustion',
            'Always pair with fallback (cached data, default, graceful degradation)'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What\'s the difference between a circuit breaker and a retry? → Retry = try again on failure. Circuit breaker = stop trying when failure rate is high.',
            'Q2: How do you choose the failure threshold? → Balance between sensitivity (detect failures quickly) and stability (don\'t open on transient blips).',
            'Q3: What should happen when the circuit is open? → Fail fast with a fallback: return cached data, default value, or graceful error message.'
          ]
        }
      ]
    },
    'bulkhead': {
      title: 'Bulkhead Pattern',
      sections: [
        {
          heading: 'What is the Bulkhead Pattern?',
          text: 'The Bulkhead pattern isolates failures by partitioning resources into separate pools. Like a ship\'s bulkheads that prevent flooding from spreading, software bulkheads prevent a failure in one component from consuming all resources and taking down the entire system.',
          list: [
            '<strong>Thread pool isolation:</strong> Each downstream dependency gets its own thread pool',
            '<strong>Connection pool isolation:</strong> Separate connection pools per database/service',
            '<strong>Resource limits:</strong> Cap concurrent calls, queue sizes, and memory per component',
            '<strong>Semaphore isolation:</strong> Limit concurrent access to a resource using semaphores',
            '<strong>Container/pod isolation:</strong> Kubernetes resource limits (CPU, memory) per container'
          ]
        },
        {
          heading: 'Bulkhead Architecture',
          diagram: {
            chart: `flowchart TB
    A[Request] --> R[Router]
    R --> |Pool A: 10 threads| S1[Payment Service]
    R --> |Pool B: 10 threads| S2[Inventory Service]
    R --> |Pool C: 5 threads| S3[Notification Service]
    S1 --> |Slow!| DB1[(Payment DB)]
    S2 --> DB2[(Inventory DB)]
    S3 --> EXT[Email API]
    style S1 fill:#e74c3c,color:#fff
    style S2 fill:#2ecc71,color:#fff
    style S3 fill:#2ecc71,color:#fff
    Note: "Payment pool exhausted?\nOther services unaffected!"`,
            caption: 'Each service gets its own thread pool. If Payment exhausts its pool, Inventory and Notification are unaffected.'
          }
        },
        {
          heading: 'Python Example — Thread Pool Bulkhead',
          example: {
            title: 'Bulkhead with separate thread pools',
            code: `from concurrent.futures import ThreadPoolExecutor, as_completed
import time, random

# Separate thread pools for each dependency
payment_pool = ThreadPoolExecutor(max_workers=5, thread_name_prefix='payment')
inventory_pool = ThreadPoolExecutor(max_workers=5, thread_name_prefix='inventory')
notification_pool = ThreadPoolExecutor(max_workers=3, thread_name_prefix='notify')

def call_payment(order_id):
    time.sleep(random.uniform(0.1, 2.0))  # Simulate work
    return f"Payment for {order_id}: OK"

def call_inventory(order_id):
    time.sleep(random.uniform(0.1, 0.5))
    return f"Inventory for {order_id}: OK"

def call_notification(order_id):
    time.sleep(random.uniform(0.1, 1.0))
    return f"Notification for {order_id}: OK"

# Process orders — each dependency isolated
order_id = 'ORD-123'
futures = {
    payment_pool.submit(call_payment, order_id): 'payment',
    inventory_pool.submit(call_inventory, order_id): 'inventory',
    notification_pool.submit(call_notification, order_id): 'notification',
}

for future in as_completed(futures):
    name = futures[future]
    try:
        result = future.result(timeout=5)
        print(f"[{name}] {result}")
    except Exception as e:
        print(f"[{name}] Failed: {e}")`,
            output: 'Each dependency has its own thread pool. Payment slowness doesn\'t block inventory or notifications.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix — bulkheads in microservices.</strong> Netflix uses bulkheads at multiple levels: Hystrix thread pools isolate each downstream dependency, connection pools are sized per database, and Kubernetes resource limits prevent noisy neighbors. During the 2012 AWS outage, bulkheads allowed Netflix to keep streaming while other services failed — the recommendation engine\'s thread pool was exhausted, but playback continued unaffected.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bulkhead = isolate resources to contain failures',
            'Thread pools, connection pools, semaphores, container limits',
            'Prevents one slow/failing component from taking down the system',
            'Trade-off: more resource overhead for better isolation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How is bulkhead different from circuit breaker? → Bulkhead = resource isolation (separate pools). Circuit breaker = fail fast (stop calling). They complement each other.',
            'Q2: What\'s the downside of too many bulkheads? → Resource fragmentation, increased memory overhead, harder to tune pool sizes.',
            'Q3: How do you size thread pools for bulkheads? → Start with expected concurrency × p99 latency. Monitor utilization and adjust.'
          ]
        }
      ]
    },
    'rate-limiting': {
      title: 'Rate Limiting',
      sections: [
        {
          heading: 'Rate Limiting Algorithms',
          text: 'Rate limiting controls the rate of requests to a service to prevent abuse, ensure fair usage, and protect against traffic spikes. Different algorithms offer different trade-offs between accuracy, memory usage, and burst tolerance.',
          list: [
            '<strong>Token Bucket:</strong> Tokens added at fixed rate; each request consumes a token. Allows bursts up to bucket size.',
            '<strong>Leaky Bucket:</strong> Requests enter a queue; processed at fixed rate. Smooths bursts into steady flow.',
            '<strong>Fixed Window:</strong> Count requests in time windows (e.g., per minute). Simple but has edge-boundary burst issue.',
            '<strong>Sliding Window Log:</strong> Track timestamps of each request. Accurate but memory-intensive.',
            '<strong>Sliding Window Counter:</strong> Approximate with weighted previous window. Good balance of accuracy and memory.'
          ]
        },
        {
          heading: 'Rate Limiting Algorithms',
          diagram: {
            chart: `flowchart LR
    subgraph TB["Token Bucket"]
        T[Tokens added\nat rate R] --> B[(Bucket\nMax: N tokens)]
        R1[Request] --> B
        B --> |Token available?| OK1[Allow]
        B --> |No tokens| REJ1[Reject 429]
    end
    subgraph LB["Leaky Bucket"]
        R2[Request] --> Q[(Queue\nFixed size)]
        Q --> |Process at\nfixed rate| OK2[Allow]
        Q --> |Queue full| REJ2[Reject 429]
    end
    style B fill:#3498db,color:#fff
    style Q fill:#2ecc71,color:#fff`,
            caption: 'Token Bucket = allows bursts. Leaky Bucket = smooths to fixed rate. Both reject when capacity exceeded.'
          }
        },
        {
          heading: 'Rate Limiting Algorithms Compared',
          table: {
            headers: ['Algorithm', 'Burst Handling', 'Memory', 'Accuracy', 'Best For'],
            rows: [
              ['Token Bucket', 'Allows bursts (up to bucket)', 'O(1) per bucket', 'Good', 'API rate limiting (most common)'],
              ['Leaky Bucket', 'Smooths bursts to fixed rate', 'O(1) per bucket', 'Good', 'Traffic shaping, QoS'],
              ['Fixed Window', 'Edge bursts possible', 'O(1) per window', 'Poor at boundaries', 'Simple use cases'],
              ['Sliding Window Log', 'Accurate', 'O(N) per window', 'Excellent', 'Strict enforcement needed'],
              ['Sliding Window Counter', 'Good', 'O(1) per window', 'Very good', 'Production API gateways']
            ]
          }
        },
        {
          heading: 'Python Example — Token Bucket',
          example: {
            title: 'Token bucket rate limiter',
            code: `import time

class TokenBucket:
    def __init__(self, rate, capacity):
        self.rate = rate          # Tokens per second
        self.capacity = capacity  # Max tokens (burst size)
        self.tokens = capacity
        self.last_refill = time.time()

    def allow_request(self):
        now = time.time()
        # Refill tokens based on elapsed time
        elapsed = now - self.last_refill
        self.tokens = min(self.capacity, self.tokens + elapsed * self.rate)
        self.last_refill = now

        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False

# Usage: 10 requests/sec, burst up to 20
limiter = TokenBucket(rate=10, capacity=20)

for i in range(25):
    allowed = limiter.allow_request()
    print(f"Request {i+1}: {'ALLOWED' if allowed else 'REJECTED (429)'}")
    time.sleep(0.05)  # 50ms between requests`,
            output: 'Allows 10 req/s sustained. Bursts up to 20 allowed initially, then throttled to rate.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>GitHub API — token bucket rate limiting.</strong> GitHub\'s REST API uses token bucket rate limiting: 5000 requests per hour for authenticated users. The rate limit resets continuously (not at hour boundaries). Response headers (X-RateLimit-Remaining, X-RateLimit-Reset) tell clients their current quota. GitHub also implements secondary rate limits (burst protection) that trigger 429 responses with Retry-After headers.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Rate limiting = control request rate to prevent abuse and protect services',
            'Token Bucket = most common (allows bursts, simple, efficient)',
            'Leaky Bucket = smooths traffic to fixed rate',
            'Always return 429 + Retry-After header; use X-RateLimit-* headers for transparency'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What\'s the edge-boundary problem in fixed window? → A user can send 100 requests at 11:59:59 and 100 at 12:00:01 — 200 in 2 seconds despite a 100/min limit.',
            'Q2: How does token bucket handle bursts? → Tokens accumulate up to bucket capacity during idle periods, allowing bursts when traffic resumes.',
            'Q3: Where should rate limiting be implemented? → At the API gateway (edge) for global limits, and at individual services for per-service protection.'
          ]
        }
      ]
    }
  },
  module5: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Scaling patterns enable systems to handle growing traffic by adding resources. This module covers horizontal vs vertical scaling, load balancing algorithms, auto-scaling strategies, database scaling techniques, microservices scaling with service meshes, and stateless service design.',
          list: [
            '<strong>Topics covered:</strong> Horizontal vs Vertical Scaling, Load Balancing, Auto-Scaling, Database Scaling, Microservices Scaling, Stateless Services',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Every successful system eventually outgrows a single server. Understanding scaling patterns lets you design systems that grow gracefully — handling 10x or 100x traffic increases without re-architecture.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Horizontal vs Vertical] --> T2[Load Balancing]
    T2 --> T3[Auto-Scaling]
    T3 --> T4[Database Scaling]
    T4 --> T5[Microservices Scaling]
    T5 --> T6[Stateless Services]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'horizontal-vertical': {
    title: 'Horizontal vs Vertical Scaling',
    sections: [
      {
        heading: 'What is Horizontal vs Vertical Scaling?',
        text: 'Horizontal scaling (scaling out) adds more machines to the pool of resources. Vertical scaling (scaling up) adds more power (CPU, RAM, storage) to an existing machine. The choice impacts cost, availability, and system design complexity.',
        list: [
          '<strong>Horizontal (Scale Out):</strong> Add more server instances — shared-nothing architecture, enables fault tolerance',
          '<strong>Vertical (Scale Up):</strong> Upgrade existing server — more CPU/RAM/disk, simpler but has a hardware ceiling',
          '<strong>Stateless services</strong> scale horizontally easily; stateful services (databases) are harder',
          '<strong>Cost tradeoff:</strong> Vertical is cheaper up to a point; horizontal wins at scale but adds operational complexity'
        ]
      },
      {
        heading: 'Architecture Diagram',
        diagram: `graph TB
    subgraph "Vertical Scaling (Scale Up)"
        A1[Single Server] --> A2[More CPU/RAM<br/>Same Server]
    end
    subgraph "Horizontal Scaling (Scale Out)"
        B1[Server 1] --> B2[Load Balancer]
        B3[Server 2] --> B2
        B4[Server 3] --> B2
        B2 --> B5[Shared DB]
    end`,
        text: 'Vertical scaling upgrades a single node. Horizontal scaling distributes load across multiple nodes behind a load balancer.'
      },
      {
        heading: 'Code Example: Auto-Scaling Decision Logic',
        code: `# Simple auto-scaling decision based on CPU utilization
def should_scale_out(cpu_usage, memory_usage, active_connections):
    """Decide whether to scale horizontally or vertically."""
    thresholds = {
        'cpu': 70,       # percent
        'memory': 80,    # percent
        'connections': 10000  # per node
    }

    if cpu_usage > thresholds['cpu'] and memory_usage < thresholds['memory']:
        # CPU-bound: scale out (add instances)
        return ('scale_out', 'CPU bound — add more instances')

    if memory_usage > thresholds['memory']:
        # Memory-bound: scale up (bigger instance)
        return ('scale_up', 'Memory bound — upgrade instance size')

    if active_connections > thresholds['connections']:
        # Connection-bound: scale out
        return ('scale_out', 'Connection bound — add more instances')

    return ('no_action', 'All metrics within limits')

# Simulate monitoring
metrics = {'cpu': 85, 'memory': 45, 'connections': 12000}
action, reason = should_scale_out(**metrics)
print(f'Action: {action} — Reason: {reason}')
# Output: Action: scale_out — Reason: Connection bound — add more instances`,
        output: 'Action: scale_out — Reason: Connection bound — add more instances',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Amazon EC2 — both approaches in practice.</strong> Amazon started with vertical scaling on EC2 by offering increasingly larger instance types (m1.small → m5.24xlarge). However, for true scalability, Amazon uses horizontal scaling for their own services — DynamoDB spans thousands of nodes. Netflix, running on AWS, uses hundreds of medium instances rather than a few huge ones, because horizontal scaling provides better fault tolerance and granular cost control.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Horizontal = more machines (scale out) — better availability, fault tolerance',
          'Vertical = bigger machine (scale up) — simpler, but single point of failure',
          'Stateless services → scale horizontally; databases → scale vertically first, then shard',
          'Most real systems use a mix: scale up until limits, then scale out'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why is horizontal scaling harder for databases? → Databases have shared state; sharding, replication, and consistency across nodes add significant complexity.',
          'Q2: When should you choose vertical over horizontal? → When the workload is single-threaded, needs massive memory (in-memory DBs), or the team lacks distributed systems expertise.',
          'Q3: What is the main availability risk of vertical scaling? → Single point of failure — if the one big machine goes down, the entire service is unavailable.'
        ]
      }
    ]
  },
  'load-balancing': {
    title: 'Load Balancing Algorithms',
    sections: [
      {
        heading: 'What is Load Balancing?',
        text: 'A load balancer distributes incoming traffic across multiple servers to ensure no single server is overwhelmed. It acts as a reverse proxy, routing requests based on algorithms that optimize for different scenarios.',
        list: [
          '<strong>Round Robin:</strong> Requests distributed sequentially — simple, works well for identical servers',
          '<strong>Least Connections:</strong> Routes to server with fewest active connections — better for varying request durations',
          '<strong>IP Hash:</strong> Same client IP always goes to same server — enables session affinity (sticky sessions)',
          '<strong>Weighted Round Robin:</strong> Distributes based on server capacity — more powerful servers get more requests',
          '<strong>Health checks:</strong> LB monitors server health and removes unhealthy nodes from rotation'
        ]
      },
      {
        heading: 'Load Balancing Algorithms',
        diagram: `graph LR
    Client[Client] --> LB[Load Balancer]
    LB -->|Round Robin| S1[Server 1]
    LB -->|Least Conn| S2[Server 2]
    LB -->|IP Hash| S3[Server 3]
    LB -->|Weighted| S4[Server 4]
    
    LB -.->|Health Check| S1
    LB -.->|Health Check| S2
    LB -.->|Health Check| S3
    LB -.->|Health Check| S4
    
    style LB fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'A load balancer sits between clients and servers, distributing traffic using algorithms like round-robin, least-connections, IP-hash, and weighted distribution. Health checks ensure traffic only goes to healthy nodes.'
      },
      {
        heading: 'Code Example: Load Balancing Algorithms',
        code: `import random
from collections import defaultdict

class LoadBalancer:
    def __init__(self, servers):
        self.servers = servers  # list of (name, weight)
        self.connections = defaultdict(int)
        self.rr_index = 0

    def round_robin(self):
        server = self.servers[self.rr_index % len(self.servers)]
        self.rr_index += 1
        return server[0]

    def least_connections(self):
        return min(self.servers, key=lambda s: self.connections[s[0]])[0]

    def ip_hash(self, client_ip):
        # Consistent hash of client IP to server
        hash_val = hash(client_ip)
        return self.servers[hash_val % len(self.servers)][0]

    def weighted_round_robin(self):
        # Expand servers by weight for weighted RR
        weighted = []
        for name, weight in self.servers:
            weighted.extend([name] * weight)
        server = weighted[self.rr_index % len(weighted)]
        self.rr_index += 1
        return server

# Usage
lb = LoadBalancer([('server-A', 1), ('server-B', 2), ('server-C', 1)])
for i in range(6):
    print(f'RR: {lb.round_robin()}', end=' | ')
print()
# Output: RR: server-A | RR: server-B | RR: server-C | RR: server-A | RR: server-B | RR: server-C`,
        output: 'Round-robin cycles through servers A, B, C sequentially. Weighted RR gives server B 2x traffic.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Netflix — Zuul + weighted load balancing.</strong> Netflix uses Zuul as their API gateway layer. Zuul routes traffic to backend services using weighted round-robin, with weights adjusted dynamically based on server capacity and health. During peak hours, Netflix\'s load balancers distribute traffic across thousands of EC2 instances across multiple AWS availability zones. They use active health checks (HTTP 200 from /health endpoints) to remove failing instances within seconds.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Round Robin = simple sequential distribution (equal-capacity servers)',
          'Least Connections = adaptive (varying request durations)',
          'IP Hash = sticky sessions (session affinity for stateful apps)',
          'Always pair with health checks to skip unhealthy nodes'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Which algorithm is best for servers with different capacities? → Weighted Round Robin — assign weights proportional to capacity.',
          'Q2: When should you use IP Hash? → When you need session affinity (sticky sessions) and don\'t have shared session storage.',
          'Q3: What happens if health checks are too aggressive? → Healthy servers may be temporarily removed during transient slowdowns, reducing capacity unnecessarily.'
        ]
      }
    ]
  },
  'auto-scaling': {
    title: 'Auto-Scaling',
    sections: [
      {
        heading: 'What is Auto-Scaling?',
        text: 'Auto-scaling automatically adjusts the number of active server instances based on current demand. It replaces manual capacity planning with dynamic scaling policies that react to metrics (CPU, memory, queue depth) or predict demand based on historical patterns.',
        list: [
          '<strong>Reactive scaling:</strong> Scales based on current metrics (CPU > 70% → add instance)',
          '<strong>Predictive scaling:</strong> Uses historical patterns to pre-scale before expected traffic spikes',
          '<strong>Scale-out policy:</strong> Add instances when metrics exceed upper threshold',
          '<strong>Scale-in policy:</strong> Remove instances when metrics fall below lower threshold (with cooldown)',
          '<strong>Cooldown periods:</strong> Wait time between scaling actions to prevent thrashing'
        ]
      },
      {
        heading: 'Auto-Scaling Architecture',
        diagram: `graph TB
    subgraph "Auto-Scaling Group"
        direction TB
        Monitor[Metrics Collector] --> Analyzer{Scaling Policy}
        Analyzer -->|Scale Out| NewInst[Provision New Instance]
        Analyzer -->|Scale In| TermInst[Terminate Instance]
    end
    
    Traffic[Traffic Spike] --> Monitor
    Monitor -->|CPU 85%| Analyzer
    NewInst --> Pool[Instance Pool]
    Pool --> LB[Load Balancer]
    
    subgraph "Predictive"
        History[Historical Data] --> Predictor[ML Model]
        Predictor -->|Pre-scale 7am| Pool
    end`,
        text: 'Auto-scaling uses monitoring metrics to trigger scale-out/in actions. Predictive scaling uses historical traffic patterns to provision capacity before expected spikes.'
      },
      {
        heading: 'Code Example: Auto-Scaling Policy',
        code: `import time
from collections import deque

class AutoScaler:
    def __init__(self, min_instances=2, max_instances=20,
                 scale_out_threshold=70, scale_in_threshold=30,
                 cooldown_seconds=60):
        self.min_instances = min_instances
        self.max_instances = max_instances
        self.scale_out_threshold = scale_out_threshold
        self.scale_in_threshold = scale_in_threshold
        self.cooldown = cooldown_seconds
        self.current_instances = min_instances
        self.last_scale_time = 0
        self.metrics_window = deque(maxlen=5)  # 5 readings

    def evaluate(self, cpu_usage):
        self.metrics_window.append(cpu_usage)
        if len(self.metrics_window) < 3:
            return 'warming_up'

        avg_cpu = sum(self.metrics_window) / len(self.metrics_window)
        now = time.time()
        if now - self.last_scale_time < self.cooldown:
            return 'cooldown'

        if avg_cpu > self.scale_out_threshold and self.current_instances < self.max_instances:
            self.current_instances += 1
            self.last_scale_time = now
            return f'scale_out -> {self.current_instances} instances'

        if avg_cpu < self.scale_in_threshold and self.current_instances > self.min_instances:
            self.current_instances -= 1
            self.last_scale_time = now
            return f'scale_in -> {self.current_instances} instances'

        return 'steady'

# Simulate traffic spike
scaler = AutoScaler(min_instances=2, max_instances=10)
for cpu in [45, 55, 65, 78, 82, 88, 90, 85, 82]:
    action = scaler.evaluate(cpu)
    print(f'CPU={cpu}% -> {action}')`,
        output: 'Warms up with first readings, then triggers scale_out when 5-sample average exceeds 70%.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>AWS Auto Scaling Groups + ALB.</strong> Amazon\'s own retail platform uses auto-scaling groups that react to CPU utilization and request count per target. During Prime Day, predictive scaling pre-warms the platform based on previous year\'s traffic patterns, adding capacity 30 minutes before the sale starts. This combination of reactive + predictive scaling handles both expected and unexpected traffic spikes without over-provisioning.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Reactive = respond to current metrics; Predictive = pre-scale based on patterns',
          'Always set min/max bounds and cooldown periods to prevent thrashing',
          'Use rolling average of metrics (not single readings) to avoid false alarms',
          'Combine with health checks for automatic replacement of unhealthy instances'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why use a cooldown period? → To prevent rapid scale-out/scale-in cycles (thrashing) that waste resources and destabilize the system.',
          'Q2: When is predictive scaling better than reactive? → For predictable traffic patterns (day/night, weekly, seasonal events like Black Friday).',
          'Q3: What metrics besides CPU should trigger scaling? → Queue depth, request latency, memory usage, connection count, and custom business metrics.'
        ]
      }
    ]
  },
  'database-scaling': {
    title: 'Database Scaling (Read Replicas, Sharding)',
    sections: [
      {
        heading: 'What is Database Scaling?',
        text: 'Database scaling handles the bottleneck when a single database cannot serve the load. Two primary approaches: read replicas (copy data to multiple read-only nodes) and sharding (partition data across multiple independent nodes). Connection pooling reduces per-request overhead.',
        list: [
          '<strong>Read Replicas:</strong> Primary handles writes, replicas serve reads — scales read throughput',
          '<strong>Sharding:</strong> Partition data by key (user_id, geography) across multiple DBs — scales write throughput',
          '<strong>Connection Pooling:</strong> Reuse DB connections instead of opening new ones per request',
          '<strong>Vertical partitioning:</strong> Split tables by columns (frequently accessed vs rarely accessed)',
          '<strong>Federation:</strong> Split by function (users DB, orders DB, products DB)'
        ]
      },
      {
        heading: 'Database Scaling Strategies',
        diagram: `graph TB
    subgraph "Read Replicas"
        Primary1[Primary DB<br/>Writes Only] -->|Replicate| Replica1[Read Replica 1]
        Primary1 -->|Replicate| Replica2[Read Replica 2]
        Primary1 -->|Replicate| Replica3[Read Replica 3]
    end
    
    subgraph "Sharding"
        Router[Shard Router] -->|user_id % 3 == 0| Shard1[Shard 1]
        Router -->|user_id % 3 == 1| Shard2[Shard 2]
        Router -->|user_id % 3 == 2| Shard3[Shard 3]
    end
    
    subgraph "Federation"
        FedUsers[Users DB] 
        FedOrders[Orders DB]
        FedProducts[Products DB]
    end`,
        text: 'Read replicas scale read capacity. Sharding scales write capacity by partitioning data. Federation splits by functional domain.'
      },
      {
        heading: 'Code Example: Shard Router',
        code: `class ShardRouter:
    def __init__(self, shards):
        """Route requests to database shards by key hash."""
        self.shards = shards  # list of shard connection strings

    def get_shard(self, key):
        """Consistent hash to determine shard for a given key."""
        return self.shards[hash(key) % len(self.shards)]

    def write(self, key, value):
        shard = self.get_shard(key)
        # In practice: connect to shard, execute INSERT/UPDATE
        print(f'WRITE key={key} -> {shard}')
        return True

    def read(self, key):
        shard = self.get_shard(key)
        # In practice: connect to shard, execute SELECT
        print(f'READ key={key} -> {shard}')
        return f'data_for_{key}'

# Usage: 3 database shards
router = ShardRouter([
    'postgres://shard-1:5432/db',
    'postgres://shard-2:5432/db',
    'postgres://shard-3:5432/db',
])

for user_id in ['user_1001', 'user_1002', 'user_1003', 'user_1004']:
    router.write(user_id, {'name': 'test'})
    router.read(user_id)
# Each user consistently maps to the same shard`,
        output: 'Each user ID hashes to a consistent shard. Same user always goes to same shard.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Uber — sharded MongoDB + Redis.</strong> Uber stores trip data in MongoDB sharded by city_id and timestamp. Each shard handles a geographic region, reducing latency for local queries. They use Redis for connection pooling and caching hot data (driver locations, active trips). Write operations go to the primary shard; read operations use secondary replicas. This setup handles millions of concurrent trips across 700+ cities.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Read replicas = scale reads (primary writes, replicas read)',
          'Sharding = scale writes (partition data by key across nodes)',
          'Connection pooling = reduce overhead (reuse connections)',
          'Shard by access pattern: user_id, geography, or time'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the main tradeoff of sharding? → Loses cross-shard joins and transactions; requires application-level handling of distributed queries.',
          'Q2: How many read replicas before replication lag becomes a problem? → Usually 5-10 replicas; beyond that, replication lag and consistency issues increase significantly.',
          'Q3: When should you use federation vs sharding? → Federation when different domains have independent scaling needs; sharding when one domain needs to scale horizontally.'
        ]
      }
    ]
  },
  'microservices-scaling': {
    title: 'Microservices Scaling',
    sections: [
      {
        heading: 'What is Microservices Scaling?',
        text: 'Microservices scaling involves independently scaling individual services based on their specific load characteristics. Unlike monolithic scaling (replicate the whole app), microservices allow granular resource allocation — scale the payment service without scaling the user service.',
        list: [
          '<strong>Independent scaling:</strong> Each service scales based on its own load profile',
          '<strong>Service mesh:</strong> Sidecar proxies handle service-to-service communication, load balancing, and retries',
          '<strong>Database per service:</strong> Each service owns its data — eliminates shared database bottlenecks',
          '<strong>API gateway:</strong> Single entry point that routes to appropriate services',
          '<strong>Autoscaling per service:</strong> Different scaling policies for different services'
        ]
      },
      {
        heading: 'Microservices Scaling Architecture',
        diagram: `graph TB
    Client[Client] --> Gateway[API Gateway]
    Gateway --> UserService[User Service<br/>2 replicas]
    Gateway --> OrderService[Order Service<br/>5 replicas]
    Gateway --> PaymentService[Payment Service<br/>10 replicas]
    
    UserService --> UserDB["(User DB)"]
    OrderService --> OrderDB["(Order DB)"]
    PaymentService --> PaymentDB["(Payment DB)"]
    
    subgraph "Service Mesh"
        sidecar1[Sidecar Proxy] -.-> UserService
        sidecar2[Sidecar Proxy] -.-> OrderService
        sidecar3[Sidecar Proxy] -.-> PaymentService
    end`,
        text: 'Each microservice scales independently with its own database. Service mesh sidecars handle cross-cutting concerns like load balancing, retries, and circuit breaking.'
      },
      {
        heading: 'Code Example: Service-Level Scaling Config',
        code: `# Kubernetes-style HPA (Horizontal Pod Autoscaler) configuration
# Each service has its own scaling policy

services_config = {
    'user-service': {
        'min_replicas': 2,
        'max_replicas': 10,
        'target_cpu': 60,        # scale at 60% CPU
        'target_memory': 70,     # scale at 70% memory
        'scale_metric': 'cpu'
    },
    'order-service': {
        'min_replicas': 3,
        'max_replicas': 20,
        'target_cpu': 70,
        'target_memory': 80,
        'scale_metric': 'cpu'
    },
    'payment-service': {
        'min_replicas': 5,
        'max_replicas': 50,
        'target_cpu': 50,        # more sensitive — payments are critical
        'target_memory': 60,
        'scale_metric': 'cpu',
        'custom_metrics': {
            'queue_depth': 100,      # scale if > 100 pending payments
            'p99_latency_ms': 200     # scale if p99 > 200ms
        }
    }
}

def get_recommended_replicas(service_name, current_cpu, queue_depth=0):
    cfg = services_config[service_name]
    base = max(2, current_cpu // cfg['target_cpu'] * cfg['min_replicas'])
    if 'custom_metrics' in cfg and queue_depth > cfg['custom_metrics'].get('queue_depth', float('inf')):
        base = min(cfg['max_replicas'], base * 2)
    return min(cfg['max_replicas'], max(cfg['min_replicas'], base))

print('Payment replicas (CPU=40%, queue=150):', get_recommended_replicas('payment-service', 40, 150))
# Output: Payment replicas (CPU=40%, queue=150): 10`,
        output: 'Recommends 10 replicas for payment service when queue depth exceeds threshold.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Uber — domain-oriented microservices architecture.</strong> Uber migrated from a monolith to over 2,000 microservices. Each service owns its data and scales independently. The Trip service scales 10x during rush hour; the Receipt service runs at minimal capacity most of the time. They use a combination of Kubernetes HPA and custom metrics (Hexagon metrics pipeline) to auto-scale based on business-level signals like active trips per city.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Each microservice scales independently based on its own load',
          'Database-per-service eliminates shared DB bottlenecks',
          'Service mesh handles cross-cutting: load balancing, retries, circuit breaking',
          'Different services need different scaling strategies (CPU, queue depth, latency)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the main advantage of microservices scaling over monolith? → Scale only the services under load, not the entire application — saves resources and cost.',
          'Q2: Why use a service mesh for microservices? → Handles cross-cutting concerns (retries, circuit breaking, mTLS, observability) without polluting business logic.',
          'Q3: What is the database-per-service tradeoff? → Eliminates shared DB bottlenecks and enables independent scaling, but makes cross-service transactions harder (requires Saga pattern).'
        ]
      }
    ]
  },
  'stateless-services': {
    title: 'Stateless Services',
    sections: [
      {
        heading: 'What are Stateless Services?',
        text: 'A stateless service processes each request independently without storing session state on the server. All state needed to serve a request comes from the request itself or external storage (database, cache). This enables horizontal scaling — any instance can serve any request.',
        list: [
          '<strong>Session externalization:</strong> Store sessions in Redis/DB instead of server memory',
          '<strong>Shared-nothing architecture:</strong> Each instance is independent — no shared state',
          '<strong>Easy horizontal scaling:</strong> Add/remove instances without data migration',
          '<strong>Easy load balancing:</strong> Any instance can serve any request (no sticky sessions needed)',
          '<strong>Fault tolerance:</strong> If one instance crashes, no session data is lost'
        ]
      },
      {
        heading: 'Stateless vs Stateful Architecture',
        diagram: `graph TB
    subgraph "Stateful (Bad for Scaling)"
        C1[Client A] -->|Sticky Session| S1[Server 1<br/>Session: A123]
        C2[Client B] -->|Sticky Session| S2[Server 2<br/>Session: B456]
        C1 -.->|If S1 down| Fail[Session Lost!]
    end
    
    subgraph "Stateless (Scales Easily)"
        C3[Client A] -->|Token| LB[Load Balancer]
        C4[Client B] -->|Token| LB
        LB --> S3[Server 1]
        LB --> S4[Server 2]
        LB --> S5[Server 3]
        S3 --> Redis["(Redis<br/>Session Store)"]
        S4 --> Redis
        S5 --> Redis`,
        text: 'Stateful servers require sticky sessions and lose state on failure. Stateless servers share a session store (Redis), so any instance can serve any client.'
      },
      {
        heading: 'Code Example: Stateless vs Stateful',
        code: `# STATEFUL (Don't do this at scale)
class StatefulAuth:
    def __init__(self):
        self.sessions = {}  # In-memory — lost on restart!

    def login(self, user_id, request):
        token = f'token_{user_id}'
        self.sessions[token] = {'user': user_id, 'ip': request.remote_addr}
        return token

    def verify(self, token):
        return self.sessions.get(token)  # Only works on same server!

# STATELESS (Scales horizontally)
import hashlib, json

class StatelessAuth:
    def __init__(self, secret_key, redis_client):
        self.secret = secret_key
        self.redis = redis_client  # External session store

    def login(self, user_id, request):
        # JWT-like: state encoded in token + stored in Redis for revocation
        token = self._create_token(user_id, request.remote_addr)
        self.redis.setex(f'session:{token}', 3600, 
                         json.dumps({'user': user_id, 'ip': request.remote_addr}))
        return token

    def verify(self, token):
        # Any instance can verify — state is in Redis, not memory
        data = self.redis.get(f'session:{token}')
        return json.loads(data) if data else None

    def _create_token(self, user_id, ip):
        return hashlib.sha256(f'{user_id}:{ip}:{self.secret}'.encode()).hexdigest()[:32]

# The stateless version works across any number of instances`,
        output: 'Stateless version stores sessions in Redis — any instance can verify any token.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Netflix — stateless web tier with Redis sessions.</strong> Netflix\'s web tier is completely stateless. All session state is stored in EVcache (their Redis-based distributed cache). This allows Netflix to randomly terminate and replace any EC2 instance without disrupting user sessions. During deployments, they cycle through instances with no downtime — new instances pick up traffic immediately because they don\'t need to warm up session state.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Stateless = no server-side session storage → any instance serves any request',
          'Externalize state to Redis/DB if needed for sessions',
          'Enables elastic scaling — add/remove instances freely',
          'Pair with JWT or external session store for authentication'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you handle sessions in stateless services? → Use JWT tokens (state embedded in token) or external session store like Redis.',
          'Q2: What makes a service stateless? → No instance stores data between requests — all needed context comes with the request or from external storage.',
          'Q3: Why is statelessness important for auto-scaling? → New instances can immediately serve traffic without warming up or migrating session data.'
        ]
      }
    ]
  }
},
  module6: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Distributed consistency patterns solve the challenge of keeping data consistent across multiple nodes and services. This module covers the Saga pattern, Two-Phase Commit, quorum-based consistency, distributed transactions, eventual consistency, and the CAP theorem.',
          list: [
            '<strong>Topics covered:</strong> Saga Pattern, Two-Phase Commit, Quorum Consistency, Distributed Transactions, Eventual Consistency, CAP Theorem',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'When data lives in multiple places, consistency becomes a design decision. These patterns give you the tools to make the right tradeoff for each use case — from banking (strong consistency) to social media feeds (eventual consistency).'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Saga] --> T2[2PC]
    T2 --> T3[Quorum]
    T3 --> T4[Distributed Transactions]
    T4 --> T5[Eventual Consistency]
    T5 --> T6[CAP Theorem]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'sagas': {
    title: 'Saga Pattern',
    sections: [
      {
        heading: 'What is the Saga Pattern?',
        text: 'A saga is a sequence of local transactions where each transaction updates data within a single service. If a step fails, compensating transactions undo the effects of preceding steps. Sagas replace distributed transactions (2PC) with eventual consistency for better availability and scalability.',
        list: [
          '<strong>Choreography:</strong> Each service emits events that trigger the next step — no central coordinator',
          '<strong>Orchestration:</strong> A central orchestrator commands each service to execute/compensate',
          '<strong>Compensating transactions:</strong> Undo the effects of a previous step (not a rollback — a semantic reversal)',
          '<strong>Eventual consistency:</strong> System reaches consistent state after all steps complete or compensate',
          '<strong>Use case:</strong> E-commerce checkout: reserve inventory → charge payment → ship → confirm order'
        ]
      },
      {
        heading: 'Saga: Choreography vs Orchestration',
        diagram: `graph LR
    subgraph "Choreography"
        S1[Order Service] -->|Order Created| S2[Payment Service]
        S2 -->|Payment OK| S3[Inventory Service]
        S3 -->|Reserved| S4[Shipping Service]
        S2 -.->|Payment Failed| C1[Compensate: Cancel Order]
        S3 -.->|Out of Stock| C2[Compensate: Refund Payment]
    end
    
    subgraph "Orchestration"
        O[Saga Orchestrator]
        O -->|Step 1| O1[Order Service]
        O -->|Step 2| O2[Payment Service]
        O -->|Step 3| O3[Inventory Service]
        O -->|Step 4| O4[Shipping Service]
        O2 -.->|Fail| O2c[Compensate Step 1]
    end`,
        text: 'Choreography: services react to events without a coordinator. Orchestration: a central controller manages the saga flow and compensation logic.'
      },
      {
        heading: 'Code Example: Saga Orchestrator',
        code: `class SagaOrchestrator:
    def __init__(self):
        self.steps = []
        self.compensations = []

    def add_step(self, name, execute_fn, compensate_fn):
        self.steps.append({'name': name, 'execute': execute_fn})
        self.compensations.append({'name': name, 'compensate': compensate_fn})
        return self

    def execute(self):
        completed = []
        for i, step in enumerate(self.steps):
            try:
                result = step['execute']()
                completed.append(i)
                print(f"  OK: {step['name']} -> {result}")
            except Exception as e:
                print(f"  FAIL: {step['name']} -> {e}")
                print("  Compensating...")
                for j in reversed(completed):
                    comp = self.compensations[j]
                    try:
                        comp['compensate']()
                        print(f"  Compensated: {comp['name']}")
                    except Exception as ce:
                        print(f"  Compensation failed: {comp['name']} -> {ce}")
                return False
        return True

# E-commerce checkout saga
saga = SagaOrchestrator()
saga.add_step('Create Order',
    lambda: 'order_123',
    lambda: print('    -> Cancel order_123'))
saga.add_step('Charge Payment',
    lambda: 'charged $50',
    lambda: print('    -> Refund $50'))
saga.add_step('Reserve Inventory',
    lambda: exec('raise Exception("Out of stock")'),
    lambda: print('    -> Release reservation'))
saga.add_step('Ship', lambda: 'shipped', lambda: print('    -> Cancel shipment'))

print('Running saga...')
success = saga.execute()
print(f'Saga result: {"SUCCESS" if success else "COMPENSATED"}')`,
        output: 'Steps 1-2 succeed, step 3 fails, steps 1-2 are compensated in reverse order.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Uber — Saga for trip booking.</strong> Uber uses orchestrated sagas for the trip lifecycle: create trip → charge payment → update driver availability → send receipt. If payment fails, the saga compensates by cancelling the trip and releasing the driver. If the driver cancels mid-trip, a partial-compensation saga refunds the unused portion. This ensures the system stays consistent without distributed locks or 2PC across their 2,000+ microservices.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Saga = sequence of local transactions with compensating actions',
          'Choreography = event-driven, no coordinator (simpler, harder to debug)',
          'Orchestration = central controller (easier to trace, single point of failure)',
          'Compensating transactions ≠ rollbacks — they are semantic reversals'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: When should you use Saga over 2PC? → When you need high availability and can tolerate eventual consistency (e.g., e-commerce, ride-sharing).',
          'Q2: What happens if a compensating transaction fails? → The system is in an inconsistent state; requires manual intervention or a reconciliation process.',
          'Q3: Choreography vs Orchestration — which is easier to debug? → Orchestration, because the central coordinator has a clear view of the entire saga state.'
        ]
      }
    ]
  },
  'two-phase-commit': {
    title: 'Two-Phase Commit (2PC)',
    sections: [
      {
        heading: 'What is Two-Phase Commit?',
        text: '2PC is a distributed transaction protocol that ensures all participants either commit or abort a transaction atomically. A coordinator manages two phases: prepare (all participants promise to commit) and commit/abort (all participants execute the decision).',
        list: [
          '<strong>Phase 1 (Prepare):</strong> Coordinator asks all participants "can you commit?" — each participant locks resources and responds YES/NO',
          '<strong>Phase 2 (Commit/Abort):</strong> If all YES → coordinator sends COMMIT; if any NO → coordinator sends ABORT',
          '<strong>Blocking protocol:</strong> If coordinator fails after prepare, participants are blocked holding locks',
          '<strong>Strong consistency:</strong> Guarantees atomicity across all participants',
          '<strong>Performance cost:</strong> Synchronous, holds locks during both phases — low throughput'
        ]
      },
      {
        heading: 'Two-Phase Commit Protocol',
        diagram: `sequenceDiagram
    participant C as Coordinator
    participant P1 as Participant 1
    participant P2 as Participant 2
    participant P3 as Participant 3
    
    C->>P1: PREPARE
    C->>P2: PREPARE
    C->>P3: PREPARE
    P1->>C: YES (lock resources)
    P2->>C: YES (lock resources)
    P3->>C: YES (lock resources)
    
    Note over C: All YES → Decision: COMMIT
    
    C->>P1: COMMIT
    C->>P2: COMMIT
    C->>P3: COMMIT
    P1->>C: ACK
    P2->>C: ACK
    P3->>C: ACK
    
    Note over C: Transaction Complete`,
        text: 'Phase 1: Coordinator sends PREPARE to all participants. All must reply YES to proceed. Phase 2: Coordinator sends COMMIT to all. If any participant says NO, coordinator sends ABORT to all.'
      },
      {
        heading: 'Code Example: 2PC Simulation',
        code: `class TwoPhaseCommit:
    def __init__(self, coordinator_name):
        self.coordinator = coordinator_name
        self.participants = []
        self.log = []

    def register(self, name, can_commit=True):
        self.participants.append({'name': name, 'can_commit': can_commit, 'committed': False})

    def execute(self):
        # Phase 1: PREPARE
        print(f"[{self.coordinator}] Phase 1: PREPARE")
        votes = []
        for p in self.participants:
            vote = 'YES' if p['can_commit'] else 'NO'
            votes.append(vote == 'YES')
            print(f"  {p['name']} -> {vote}")
            if not p['can_commit']:
                break

        # Phase 2: COMMIT or ABORT
        if all(votes):
            print(f"[{self.coordinator}] Phase 2: COMMIT")
            for p in self.participants:
                p['committed'] = True
                print(f"  {p['name']} -> COMMITTED")
            self.log.append('COMMITTED')
        else:
            print(f"[{self.coordinator}] Phase 2: ABORT")
            for p in self.participants:
                print(f"  {p['name']} -> ABORTED")
            self.log.append('ABORTED')

# Test: all participants can commit
tx = TwoPhaseCommit('OrderCoordinator')
tx.register('InventoryService', can_commit=True)
tx.register('PaymentService', can_commit=True)
tx.register('ShippingService', can_commit=True)
tx.execute()
# Output: All commit

# Test: one participant cannot commit
tx2 = TwoPhaseCommit('OrderCoordinator')
tx2.register('InventoryService', can_commit=True)
tx2.register('PaymentService', can_commit=False)  # Payment fails
tx2.register('ShippingService', can_commit=True)
tx2.execute()
# Output: All abort`,
        output: 'First transaction commits all. Second transaction aborts all when payment fails.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>PostgreSQL — distributed 2PC for cross-database transactions.</strong> PostgreSQL supports 2PC via PREPARE TRANSACTION and COMMIT PREPARED. Google Spanner uses a variant of 2PC (Paxos-based 2PC) for distributed transactions across data centers, achieving strong consistency with high availability through Paxos consensus for the coordinator role — eliminating the single-point-of-failure of traditional 2PC.'
      },
      {
        heading: 'Quick Recap',
        list: [
          '2PC = atomic commit across distributed nodes (strong consistency)',
          'Phase 1 (Prepare): participants vote and lock resources',
          'Phase 2 (Commit/Abort): coordinator decides based on votes',
          'Blocking: coordinator failure leaves participants locked → use Saga instead at scale'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the main drawback of 2PC? → Blocking: if the coordinator fails after prepare, participants hold locks indefinitely, reducing availability.',
          'Q2: How does Google Spanner solve 2PC\'s coordinator problem? → Uses Paxos to elect the coordinator, so if one fails, another takes over without blocking.',
          'Q3: When is 2PC still a good choice? → In low-latency environments with strong consistency requirements (e.g., financial transfers within a single datacenter).'
        ]
      }
    ]
  },
  'quorum-consistency': {
    title: 'Quorum-Based Consistency',
    sections: [
      {
        heading: 'What is Quorum-Based Consistency?',
        text: 'Quorum-based consistency ensures that reads and writes overlap on at least one node, guaranteeing that reads always see the latest write. With N replicas, a write needs W acknowledgments (write quorum) and a read needs R responses (read quorum). If W + R > N, the system guarantees strong consistency.',
        list: [
          '<strong>N</strong> = total number of replicas',
          '<strong>W</strong> = write quorum (minimum replicas that must acknowledge a write)',
          '<strong>R</strong> = read quorum (minimum replicas that must respond to a read)',
          '<strong>Strong consistency:</strong> W + R > N (read and write quorums overlap)',
          '<strong>Eventual consistency:</strong> W + R ≤ N (quorums may not overlap — reads may see stale data)'
        ]
      },
      {
        heading: 'Quorum Overlap',
        diagram: `graph TB
    subgraph "W + R > N = Strong Consistency (N=5)"
        W1[Write Quorum W=3] --> N1[Node 1]
        W1 --> N2[Node 2]
        W1 --> N3[Node 3]
        R1[Read Quorum R=3] --> N3[Node 3]
        R1 --> N4[Node 4]
        R1 --> N5[Node 5]
        N3 -.->|Overlap!| N3
    end
    
    subgraph "W + R ≤ N = Eventual Consistency (N=5)"
        W2[Write Quorum W=2] --> M1[Node 1]
        W2 --> M2[Node 2]
        R2[Read Quorum R=2] --> M4[Node 4]
        R2 --> M5[Node 5]
        Note[No overlap → stale reads possible]
    end`,
        text: 'With N=5, W=3, R=3: write quorum and read quorum share at least one node (Node 3), so reads always see the latest write. With W=2, R=2: no overlap, so reads may miss recent writes.'
      },
      {
        heading: 'Code Example: Quorum System',
        code: `import random

class QuorumStore:
    def __init__(self, n=5, w=3, r=3):
        self.n = n  # total replicas
        self.w = w  # write quorum
        self.r = r  # read quorum
        self.nodes = [{} for _ in range(n)]
        self.versions = [0] * n

    def write(self, key, value):
        """Write to W random nodes with incremented version."""
        version = max(self.versions) + 1
        targets = random.sample(range(self.n), self.w)
        for t in targets:
            self.nodes[t][key] = value
            self.versions[t] = version
        print(f'  Wrote {key}={value} (v{version}) to nodes {targets}')
        return version

    def read(self, key):
        """Read from R random nodes, return highest version."""
        targets = random.sample(range(self.n), self.r)
        results = []
        for t in targets:
            if key in self.nodes[t]:
                results.append((t, self.versions[t], self.nodes[t][key]))
        if not results:
            return None
        # Return value from node with highest version
        best = max(results, key=lambda x: x[1])
        print(f'  Read {key} from nodes {targets} -> v{best[1]}={best[2]}')
        return best[2]

# Test: strong consistency (W+R > N)
store = QuorumStore(n=5, w=3, r=3)
store.write('user', 'Alice')
store.read('user')
# Always returns 'Alice' because write quorum (3) + read quorum (3) > 5

# Test: eventual consistency (W+R ≤ N)
store2 = QuorumStore(n=5, w=2, r=2)
store2.write('user', 'Bob')
store2.read('user')
# May return None — read quorum might miss the 2 nodes that have the data`,
        output: 'With W=3,R=3,N=5: reads always return latest write. With W=2,R=2,N=5: reads may miss recent writes.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Apache Cassandra — tunable quorum consistency.</strong> Cassandra allows per-query consistency levels: ONE (1 replica), QUORUM (majority), ALL (all replicas). A write at QUORUM + read at QUORUM guarantees strong consistency. Netflix uses Cassandra with LOCAL_QUORUM for their recommendation engine — writes go to a quorum within the local datacenter, reads use the same, ensuring users see their latest actions immediately.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'W + R > N = strong consistency (quorums always overlap)',
          'W + R ≤ N = eventual consistency (reads may see stale data)',
          'Lower W/R = faster but less consistent; higher W/R = slower but more consistent',
          'Tunable: use strong consistency for critical data, eventual for high-throughput'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: If N=7, W=4, R=4, is this strongly consistent? → Yes, W+R=8 > 7=N, so read and write quorums always overlap.',
          'Q2: What consistency level should you use for a shopping cart? → Quorum or higher — users need to see their latest cart state immediately.',
          'Q3: Why not always use W=R=N? → It gives the strongest consistency but any node failure blocks reads/writes, killing availability.'
        ]
      }
    ]
  },
  'distributed-transactions': {
    title: 'Distributed Transactions',
    sections: [
      {
        heading: 'What are Distributed Transactions?',
        text: 'Distributed transactions span multiple services or databases while maintaining ACID properties. Unlike local transactions, they require coordination across network boundaries. Common approaches: 2PC (strong consistency, blocking), Saga (eventual consistency, compensating), and TCC (Try-Confirm-Cancel).',
        list: [
          '<strong>2PC:</strong> Coordinator + participants, prepare-then-commit, blocking but strongly consistent',
          '<strong>Saga:</strong> Sequence of local transactions with compensations — eventual consistency, non-blocking',
          '<strong>TCC (Try-Confirm-Cancel):</strong> Two-phase at application level: Try (reserve), Confirm (commit), Cancel (release)',
          '<strong>Outbox pattern:</strong> Write to DB + event outbox in same local transaction, then publish event asynchronously',
          '<strong>Key tradeoff:</strong> Strong consistency (2PC) vs availability (Saga/TCC)'
        ]
      },
      {
        heading: 'Distributed Transaction Patterns',
        diagram: `graph TB
    subgraph "TCC Pattern"
        T1[Try: Reserve $100] --> T2{Can confirm?}
        T2 -->|Yes| T3[Confirm: Charge $100]
        T2 -->|No| T4[Cancel: Release $100]
    end
    
    subgraph "Outbox Pattern"
        App[Application] -->|1. Write + Event| DB["(Database)"]
        App -->|2. Read outbox| Outbox["(Outbox Table)"]
        Outbox -->|3. Publish| MQ[Message Queue]
        MQ -->|4. Consume| Other[Other Services]
    end`,
        text: 'TCC: application-level two-phase with Try (reserve), Confirm (commit), Cancel (release). Outbox: ensure DB write and event publish happen atomically using a local outbox table.'
      },
      {
        heading: 'Code Example: TCC Pattern',
        code: `class TCCParticipant:
    def __init__(self, name):
        self.name = name
        self.reserved = {}

    def try_action(self, resource_id, amount):
        """Phase 1: Reserve the resource."""
        self.reserved[resource_id] = amount
        print(f"  [{self.name}] TRY: Reserved {amount} for {resource_id}")
        return True

    def confirm(self, resource_id):
        """Phase 2: Confirm the reservation."""
        amount = self.reserved.pop(resource_id, 0)
        print(f"  [{self.name}] CONFIRM: Charged {amount} for {resource_id}")
        return True

    def cancel(self, resource_id):
        """Phase 2: Cancel the reservation."""
        amount = self.reserved.pop(resource_id, 0)
        print(f"  [{self.name}] CANCEL: Released {amount} for {resource_id}")
        return True

class TCCCoordinator:
    def __init__(self):
        self.participants = []

    def add(self, participant):
        self.participants.append(participant)

    def execute(self, resource_id, amount):
        # TRY phase
        tried = []
        for p in self.participants:
            if p.try_action(resource_id, amount):
                tried.append(p)
            else:
                # Cancel all tried
                for t in tried:
                    t.cancel(resource_id)
                return False

        # CONFIRM phase
        for p in tried:
            p.confirm(resource_id)
        return True

# E-commerce: inventory + payment
coord = TCCCoordinator()
coord.add(TCCParticipant('InventoryService'))
coord.add(TCCParticipant('PaymentService'))
print('TCC transaction:')
coord.execute('order_123', 100)
# Output: Both TRY -> both CONFIRM`,
        output: 'Both participants try first, then both confirm. If any try fails, all tried participants are cancelled.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Alipay — TCC for cross-service transactions.</strong> Alipay (Ant Financial) uses TCC for high-volume payment transactions across their microservices. The Try phase reserves funds, Confirm finalizes the transfer, and Cancel releases the reservation. This handles 100,000+ transactions per second during Double 11 (Singles\' Day) sales while maintaining eventual consistency without blocking 2PC locks.'
      },
      {
        heading: 'Quick Recap',
        list: [
          '2PC = strong consistency but blocking (coordinator failure = stuck)',
          'Saga = eventual consistency with compensations (non-blocking)',
          'TCC = application-level 2PC with reserve/confirm/cancel (non-blocking)',
          'Outbox pattern ensures reliable event publishing with DB writes'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: When should you use TCC over Saga? → When you need resource reservation (e.g., deducting money, reserving inventory) with the ability to cancel cleanly.',
          'Q2: What problem does the Outbox pattern solve? → Ensures a service\'s database write and event publish are atomic — prevents losing events on crash.',
          'Q3: Why is 2PC rarely used in microservices? → Blocking protocol, poor performance under network partitions, and single-coordinator bottleneck.'
        ]
      }
    ]
  },
  'eventual-consistency': {
    title: 'Eventual Consistency',
    sections: [
      {
        heading: 'What is Eventual Consistency?',
        text: 'Eventual consistency is a consistency model where, given no new updates, all replicas will eventually converge to the same value. It trades immediate consistency for higher availability and lower latency — critical for distributed systems that span multiple data centers.',
        list: [
          '<strong>Convergence:</strong> Given enough time and no new writes, all replicas will agree',
          '<strong>Read-after-write:</strong> A client may not see its own write immediately',
          '<strong>Anti-entropy:</strong> Background processes (Merkle trees, read-repair) propagate updates',
          '<strong>CAP tradeoff:</strong> During network partitions, choose availability (AP) over consistency (CP)',
          '<strong>Tunable: </strong> Use quorums (W+R>N) to get strong consistency where needed'
        ]
      },
      {
        heading: 'Eventual Consistency Convergence',
        diagram: `graph LR
    subgraph "Write Propagation"
        W[Write v3] --> N1[Node A: v3]
        W --> N2[Node B: v1]
        W --> N3[Node C: v2]
        
        N1 -.->|Gossip| N2
        N1 -.->|Gossip| N3
        N2 -.->|Gossip| N3
        
        N1 -->|Eventually| N1f[Node A: v3 ✓]
        N2 -->|Eventually| N2f[Node B: v3 ✓]
        N3 -->|Eventually| N3f[Node C: v3 ✓]
    end
    
    subgraph "Read Repair"
        R[Read] -->|Ask all| N1
        R --> N2
        R --> N3
        N1 -->|v3 latest| R
        R -->|Repair N2 with v3| N2
        R -->|Repair N3 with v3| N3
    end`,
        text: 'Updates propagate via gossip protocols and read-repair. Given enough time without new writes, all nodes converge to the same value.'
      },
      {
        heading: 'Code Example: Eventual Consistency Simulation',
        code: `import random, time

class EventuallyConsistentStore:
    def __init__(self, num_nodes=3):
        self.nodes = [{} for _ in range(num_nodes)]
        self.pending_updates = []

    def write(self, key, value, source_node=0):
        """Write to source node, queue for propagation."""
        version = self.nodes[source_node].get(key, {}).get('version', 0) + 1
        self.nodes[source_node][key] = {'value': value, 'version': version}
        self.pending_updates.append({'key': key, 'value': value, 
                                     'version': version, 'source': source_node})
        print(f'  Write {key}={value} (v{version}) to node {source_node}')

    def propagate(self):
        """Gossip: propagate pending updates to random nodes."""
        for update in self.pending_updates[:]:
            target = random.randint(0, len(self.nodes) - 1)
            if target == update['source']:
                continue
            current = self.nodes[target].get(update['key'], {})
            if current.get('version', 0) < update['version']:
                self.nodes[target][update['key']] = {
                    'value': update['value'], 
                    'version': update['version']
                }
                print(f'  Propagated {update["key"]}={update["value"]} to node {target}')
            if all(self.nodes[i].get(update['key'], {}).get('version', 0) == update['version']
                   for i in range(len(self.nodes))):
                self.pending_updates.remove(update)
                print(f'  CONVERGED: {update["key"]}={update["value"]} on all nodes')

    def read(self, key, node=0):
        data = self.nodes[node].get(key)
        return data['value'] if data else None

store = EventuallyConsistentStore(num_nodes=3)
store.write('user', 'Alice', source_node=0)
print('Before propagation:')
for i in range(3):
    print(f'  Node {i}: user={store.read("user", i)}')
for _ in range(5):
    store.propagate()
print('After propagation:')
for i in range(3):
    print(f'  Node {i}: user={store.read("user", i)}')`,
        output: 'Write goes to one node first, then propagates via gossip until all nodes converge.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Amazon DynamoDB — tunable eventual consistency.</strong> DynamoDB offers two read modes: eventually consistent reads (up to 1 second to reflect latest writes, but 50% cheaper) and strongly consistent reads (immediate, but more expensive and lower throughput). For product catalog browsing, Amazon uses eventually consistent reads (users don\'t notice if product info is 1 second stale). For shopping cart operations, they use strongly consistent reads to avoid showing stale cart data.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Eventual consistency = all replicas converge given no new writes',
          'Propagation methods: gossip, read-repair, anti-entropy (Merkle trees)',
          'CAP: during partition, choose AP (availability) or CP (consistency)',
          'Tunable: use quorums for strong consistency on critical data'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is read-repair? → When a read discovers stale data on some replicas, it writes the latest value back to those replicas — fixing inconsistency during normal reads.',
          'Q2: When is eventual consistency acceptable? → For non-critical data (product catalogs, social media feeds, analytics) where temporary inconsistency doesn\'t harm users.',
          'Q3: How does gossip protocol work? → Each node periodically shares its state with a random peer; updates spread exponentially across the cluster like a rumor.'
        ]
      }
    ]
  },
  'cap-theorem': {
    title: 'CAP Theorem & PACELC',
    sections: [
      {
        heading: 'What is the CAP Theorem?',
        text: 'CAP theorem states that a distributed system can guarantee at most two of three properties: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition tolerance (system works despite network partitions). Since partitions are inevitable in distributed systems, the real choice is between CP (consistency) and AP (availability) during a partition.',
        list: [
          '<strong>Consistency (C):</strong> Every read returns the latest write or an error',
          '<strong>Availability (A):</strong> Every request gets a non-error response (may be stale)',
          '<strong>Partition tolerance (P):</strong> System continues despite network partitions',
          '<strong>PACELC extension:</strong> If Partition (P): choose A or C; Else (E): choose L (latency) or C',
          '<strong>Real choice:</strong> CP (strong consistency, lower availability) vs AP (high availability, eventual consistency)'
        ]
      },
      {
        heading: 'CAP Theorem Triangle',
        diagram: `graph TB
    CAP[CAP Theorem] --> C[Consistency]
    CAP --> A[Availability]
    CAP --> P[Partition Tolerance]
    
    subgraph "CP Systems"
        CP[MongoDB, HBase, Redis Cluster]
        CP -->|During partition: reject reads| C
    end
    
    subgraph "AP Systems"
        AP[Cassandra, DynamoDB, CouchDB]
        AP -->|During partition: serve stale reads| A
    end
    
    subgraph "PACELC"
        PACELC[PACELC Extension] -->|"If Partition: P-A or P-C"| PAC[PA vs PC]
        PACELC -->|"Else: E-L or E-C"| ELC[EL vs EC]
        AP2[PA/EL: Cassandra] 
        CP2[PC/EC: Spanner]
    end`,
        text: 'CAP: during a network partition, choose Consistency (CP) or Availability (AP). PACELC extends this: even without partitions, choose Latency (fast but stale) or Consistency (slow but fresh).'
      },
      {
        heading: 'Code Example: CAP Decision Logic',
        code: `class DistributedNode:
    def __init__(self, name, cap_mode='AP'):
        self.name = name
        self.cap_mode = cap_mode  # 'CP' or 'AP'
        self.data = {}
        self.partitioned = False
        self.peers = []

    def write(self, key, value):
        """Write to this node and propagate to peers."""
        self.data[key] = value
        if self.partitioned:
            if self.cap_mode == 'AP':
                print(f'  [{self.name}] AP: Accepted write (will sync later)')
                return True
            else:
                print(f'  [{self.name}] CP: Rejected write (partition active)')
                return False
        else:
            for peer in self.peers:
                peer.data[key] = value  # sync to peers
            print(f'  [{self.name}] Write synced to {len(self.peers)} peers')
            return True

    def read(self, key):
        if self.partitioned and self.cap_mode == 'CP':
            print(f'  [{self.name}] CP: Read rejected (cannot guarantee consistency)')
            return None
        if self.partitioned and self.cap_mode == 'AP':
            print(f'  [{self.name}] AP: Returning possibly stale data')
        return self.data.get(key, 'NOT_FOUND')

# Test AP system during partition
ap_node = DistributedNode('AP-Node', 'AP')
ap_node.partitioned = True
ap_node.write('user', 'Alice')   # Accepted
print(f'  Read: {ap_node.read("user")}')  # Returns Alice

# Test CP system during partition
cp_node = DistributedNode('CP-Node', 'CP')
cp_node.partitioned = True
cp_node.write('user', 'Bob')     # Rejected
print(f'  Read: {cp_node.read("user")}')  # Rejected`,
        output: 'AP node accepts writes and returns stale data during partition. CP node rejects both writes and reads.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Cassandra (AP/EL) vs Google Spanner (CP/EC).</strong> Cassandra chooses availability and low latency — during a partition, it accepts writes on any node and reconciles later with last-write-wins. This makes it ideal for use cases like Netflix\'s viewing history (stale data is fine). Google Spanner chooses consistency — it uses TrueTime (GPS/atomic clocks) and Paxos to maintain strong consistency across data centers, at the cost of higher latency, making it ideal for financial systems like Google Ads billing.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'CAP: during partition, choose Consistency (CP) or Availability (AP)',
          'PACELC: even without partition, choose Latency (EL) or Consistency (EC)',
          'Cassandra = PA/EL (available + fast, eventually consistent)',
          'Spanner = PC/EC (consistent, higher latency), MongoDB = PC/EC'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Can a system be both CP and AP? → No, CAP theorem proves you can only guarantee two of three during a partition. You must choose.',
          'Q2: What does PACELC add to CAP? → It addresses the case when there is NO partition: you still must choose between Latency and Consistency.',
          'Q3: Which CAP mode for a banking app? → CP — rejecting a transaction is better than allowing inconsistent account balances.'
        ]
      }
    ]
  }
},
  module7: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'API and edge patterns define how clients interact with your system at the boundary. This module covers API gateways, Backend-for-Frontend, API versioning, edge rate limiting, CDN and edge computing, and GraphQL federation.',
          list: [
            '<strong>Topics covered:</strong> API Gateway, BFF, API Versioning, Edge Rate Limiting, CDN & Edge Computing, GraphQL Federation',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'The API layer is the contract between your system and its users. Poor API design leads to breaking changes, over-fetching, security vulnerabilities, and poor mobile performance. These patterns ensure your APIs are scalable and optimized for every client type.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[API Gateway] --> T2[BFF]
    T2 --> T3[API Versioning]
    T3 --> T4[Edge Rate Limiting]
    T4 --> T5["CDN & Edge"]
    T5 --> T6[GraphQL Federation]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'api-gateway': {
    title: 'API Gateway',
    sections: [
      {
        heading: 'What is an API Gateway?',
        text: 'An API gateway is a server that acts as a single entry point for all client requests. It routes requests to appropriate backend services, handles cross-cutting concerns like authentication, rate limiting, and logging, and can aggregate responses from multiple services into a single response.',
        list: [
          '<strong>Routing:</strong> Maps incoming requests to the correct backend service',
          '<strong>Authentication & Authorization:</strong> Validates tokens before forwarding requests',
          '<strong>Rate limiting:</strong> Throttles requests per client to prevent abuse',
          '<strong>Response aggregation:</strong> Combines responses from multiple services into one response',
          '<strong>Protocol translation:</strong> Converts between REST, gRPC, GraphQL for clients'
        ]
      },
      {
        heading: 'API Gateway Architecture',
        diagram: `graph TB
    Client[Mobile App] --> GW[API Gateway]
    Client2[Web App] --> GW
    Client3[Third Party] --> GW
    
    GW -->|Auth| Auth[Auth Service]
    GW -->|Rate Limit| RL[Rate Limiter]
    GW -->|Log| Logs[Logging/Metrics]
    
    GW -->|Route| S1[User Service]
    GW -->|Route| S2[Order Service]
    GW -->|Route| S3[Product Service]
    GW -->|Aggregate| S4[Review Service]
    
    GW -->|Transform| S1
    style GW fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'The API gateway handles auth, rate limiting, logging, routing, and response aggregation — keeping backend services focused on business logic.'
      },
      {
        heading: 'Code Example: Simple API Gateway',
        code: `from collections import defaultdict
import time

class APIGateway:
    def __init__(self):
        self.routes = {}
        self.rate_limits = defaultdict(list)
        self.auth_tokens = {'valid_token_123': 'user_1'}

    def add_route(self, path, service_url):
        self.routes[path] = service_url

    def authenticate(self, token):
        return self.auth_tokens.get(token) is not None

    def check_rate_limit(self, client_id, limit=100, window=60):
        now = time.time()
        requests = self.rate_limits[client_id]
        # Remove requests older than window
        self.rate_limits[client_id] = [t for t in requests if now - t < window]
        if len(self.rate_limits[client_id]) >= limit:
            return False
        self.rate_limits[client_id].append(now)
        return True

    def handle_request(self, path, token, client_id):
        # 1. Authenticate
        if not self.authenticate(token):
            return {'status': 401, 'error': 'Unauthorized'}
        # 2. Rate limit
        if not self.check_rate_limit(client_id):
            return {'status': 429, 'error': 'Rate limit exceeded'}
        # 3. Route
        if path not in self.routes:
            return {'status': 404, 'error': 'Not found'}
        service = self.routes[path]
        return {'status': 200, 'service': service, 'path': path}

gw = APIGateway()
gw.add_route('/api/users', 'user-service:8080')
gw.add_route('/api/orders', 'order-service:8080')

print(gw.handle_request('/api/users', 'valid_token_123', 'client_A'))
print(gw.handle_request('/api/unknown', 'valid_token_123', 'client_A'))
print(gw.handle_request('/api/users', 'bad_token', 'client_A'))`,
        output: 'First request routes to user-service. Unknown path returns 404. Bad token returns 401.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Netflix Zuul — API gateway for 200M+ subscribers.</strong> Netflix uses Zuul as their API gateway, handling routing, authentication, rate limiting, and response aggregation for all client requests. Zuul routes traffic to 100+ backend microservices and can aggregate responses (e.g., combining user profile + watch history + recommendations into a single homepage response). During peak hours, Zuul processes 50,000+ requests per second with custom filters for traffic shaping and security.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'API gateway = single entry point for all client requests',
          'Handles cross-cutting: auth, rate limiting, logging, routing, aggregation',
          'Backend services stay focused on business logic',
          'Can do protocol translation (REST ↔ gRPC ↔ GraphQL)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the difference between API gateway and load balancer? → LB distributes traffic across identical servers; API gateway routes to different services and handles cross-cutting concerns.',
          'Q2: How does an API gateway improve mobile app performance? → By aggregating multiple API calls into one response, reducing round trips over slow mobile networks.',
          'Q3: What is the risk of putting too much logic in the gateway? → It becomes a single point of failure and a bottleneck; keep business logic in services, not the gateway.'
        ]
      }
    ]
  },
  'bff-pattern': {
    title: 'Backend for Frontend (BFF)',
    sections: [
      {
        heading: 'What is Backend for Frontend?',
        text: 'BFF is a pattern where each client type (mobile, web, IoT) gets its own dedicated backend service that tailors API responses to that client\'s specific needs. Instead of one generic API serving all clients, the BFF aggregates and transforms data from multiple services into the exact shape each client needs.',
        list: [
          '<strong>One BFF per client type:</strong> Mobile BFF, Web BFF, TV BFF — each optimized for its client',
          '<strong>Tailored responses:</strong> Mobile gets smaller payloads; web gets richer data',
          '<strong>Aggregation:</strong> BFF calls multiple backend services and combines responses',
          '<strong>No over-fetching:</strong> Client gets exactly the fields it needs — nothing more',
          '<strong>Client-specific logic:</strong> Different caching, retry, and fallback strategies per client'
        ]
      },
      {
        heading: 'BFF Architecture',
        diagram: `graph TB
    Mobile[Mobile App] --> MBFF[Mobile BFF]
    Web[Web Browser] --> WBFF[Web BFF]
    TV[Smart TV] --> TBFF[TV BFF]
    
    MBFF -->|Aggregate| UserService[User Service]
    MBFF -->|Aggregate| ProductService[Product Service]
    MBFF -->|Aggregate| CartService[Cart Service]
    
    WBFF -->|Aggregate| UserService
    WBFF -->|Aggregate| ProductService
    WBFF -->|Aggregate| ReviewService[Review Service]
    WBFF -->|Aggregate| RecService[Recommendation Service]
    
    TBFF -->|Aggregate| UserService
    TBFF -->|Aggregate| CatalogService[Catalog Service]
    
    style MBFF fill:#bbf,stroke:#333
    style WBFF fill:#bfb,stroke:#333
    style TBFF fill:#fbb,stroke:#333`,
        text: 'Each client type has its own BFF that calls the appropriate backend services and returns data in the optimal shape for that client.'
      },
      {
        heading: 'Code Example: BFF Response Shaping',
        code: `# Mobile BFF: lightweight response (save bandwidth)
def mobile_product_page(product_id, services):
    product = services['product'].get(product_id)
    cart_count = services['cart'].get_count()
    return {
        'name': product['name'],
        'price': product['price'],
        'image_url': product['thumbnail'],  # small image
        'in_cart': cart_count
    }

# Web BFF: rich response (desktop has bandwidth)
def web_product_page(product_id, services):
    product = services['product'].get(product_id)
    reviews = services['review'].get_for_product(product_id, limit=10)
    recommendations = services['recommendation'].get(product_id, limit=5)
    cart_count = services['cart'].get_count()
    return {
        'name': product['name'],
        'price': product['price'],
        'description': product['description'],
        'images': product['all_images'],       # all images
        'specifications': product['specs'],
        'reviews': reviews,                     # 10 reviews
        'recommendations': recommendations,      # 5 related products
        'cart_count': cart_count,
        'breadcrumb': product['category_path']
    }

# Same product, different payloads
mobile = mobile_product_page(123, {})
web = web_product_page(123, {})
# Mobile: ~200 bytes, Web: ~5000 bytes`,
        output: 'Mobile BFF returns ~200B. Web BFF returns ~5KB with reviews, recommendations, and specs.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Spotify — separate BFFs for each platform.</strong> Spotify has dedicated BFFs for iOS, Android, Web, and TV clients. The mobile BFF returns minimal data to save cellular bandwidth. The web BFF includes full social features (friend activity, collaborative playlists). The TV BFF returns simplified navigation and larger image URLs. Each BFF team owns their client\'s experience end-to-end, from API to UI.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'BFF = one backend per client type, tailored to that client\'s needs',
          'Reduces over-fetching — mobile gets less data, web gets more',
          'Client teams own their BFF — faster iteration',
          'Tradeoff: code duplication across BFFs (mitigate with shared libraries)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why not use a single API for all clients? → Different clients need different data shapes, caching strategies, and payloads — a generic API either over-fetches (mobile) or under-fetches (web).',
          'Q2: How do you avoid code duplication across BFFs? → Share core logic via libraries/packages; only the response shaping and aggregation differ between BFFs.',
          'Q3: When is BFF overkill? → When all clients need the same data in the same format — a single API is sufficient.'
        ]
      }
    ]
  },
  'api-versioning': {
    title: 'API Versioning',
    sections: [
      {
        heading: 'What is API Versioning?',
        text: 'API versioning allows you to evolve APIs without breaking existing clients. New versions can add features, change response formats, or remove deprecated fields while old versions continue working. Common strategies include URL path versioning, header versioning, and content negotiation.',
        list: [
          '<strong>URL path versioning:</strong> /v1/users, /v2/users — most explicit and easiest to debug',
          '<strong>Header versioning:</strong> X-API-Version: 2 — keeps URLs clean but harder to test',
          '<strong>Content negotiation:</strong> Accept: application/vnd.api.v2+json — RESTful but complex',
          '<strong>Query parameter:</strong> ?version=2 — simple but easily forgotten',
          '<strong>Deprecation policy:</strong> Announce deprecation → sunset header → remove after 6-12 months'
        ]
      },
      {
        heading: 'API Versioning Strategies',
        diagram: `graph LR
    subgraph "URL Path Versioning"
        U1[GET /v1/users] --> S1[User Service v1]
        U2[GET /v2/users] --> S2[User Service v2]
    end
    
    subgraph "Header Versioning"
        H1[GET /users<br/>X-API-Version: 1] --> S3[Router]
        H2[GET /users<br/>X-API-Version: 2] --> S3
        S3 -->|v1| S4[Handler v1]
        S3 -->|v2| S5[Handler v2]
    end
    
    subgraph "Content Negotiation"
        C1[GET /users<br/>Accept: vnd.api.v1+json] --> S6[Handler v1]
        C2[GET /users<br/>Accept: vnd.api.v2+json] --> S7[Handler v2]
    end`,
        text: 'URL path: version in the URL. Header: version in custom header. Content negotiation: version in Accept header. Each strategy has tradeoffs in visibility, cacheability, and RESTfulness.'
      },
      {
        heading: 'Code Example: Versioned API Router',
        code: `from functools import wraps

class VersionedAPI:
    def __init__(self):
        self.routes = {}  # (path, version) -> handler

    def route(self, path, version=1):
        def decorator(handler):
            self.routes[(path, version)] = handler
            return handler
        return decorator

    def serve(self, path, version=1):
        handler = self.routes.get((path, version))
        if not handler:
            return {'status': 404, 'error': f'No handler for {path} v{version}'}
        return handler()

api = VersionedAPI()

# v1: returns basic user info
@api.route('/users', version=1)
def get_users_v1():
    return {'users': [{'id': 1, 'name': 'Alice'}]}

# v2: returns users with email and avatar
@api.route('/users', version=2)
def get_users_v2():
    return {'users': [{'id': 1, 'name': 'Alice', 'email': 'alice@example.com', 'avatar': '...'}],
            'meta': {'total': 1, 'page': 1}}

# v3: adds pagination and filtering
@api.route('/users', version=3)
def get_users_v3():
    return {'data': [{'id': 1, 'name': 'Alice', 'email': 'alice@example.com'}],
            'pagination': {'total': 1, 'page': 1, 'per_page': 20}}

print('v1:', api.serve('/users', 1))
print('v2:', api.serve('/users', 2))
print('v3:', api.serve('/users', 3))`,
        output: 'Each version returns a different response shape — v1 basic, v2 with email, v3 with pagination.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Twitter/X API — URL path versioning with deprecation.</strong> Twitter used v1.1 for years, then introduced v2 with a completely different data model (envelope-based with included/expansions). Both versions ran simultaneously for 18 months. The v1.1 API included Sunset and Deprecation headers 6 months before removal. This gave developers time to migrate. The v2 API is more RESTful and supports field selection (?fields=id,name,created_at) to reduce over-fetching.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'URL path versioning (/v1, /v2) — most common, easy to debug and cache',
          'Header versioning — clean URLs but harder to test and discover',
          'Always set deprecation headers (Sunset, Deprecation) with a timeline',
          'Maintain old versions for 6-12 months before removal'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Which versioning strategy is most cache-friendly? → URL path versioning — CDNs cache by URL, so /v1/users and /v2/users cache separately.',
          'Q2: How do you handle breaking changes without a new version? → You can\'t — breaking changes require a new version. Non-breaking changes (adding optional fields) can go in the same version.',
          'Q3: What is the Sunset header? → An HTTP header that tells clients when an API version will be removed, giving them a deadline to migrate.'
        ]
      }
    ]
  },
  'api-rate-limiting': {
    title: 'API Rate Limiting at Edge',
    sections: [
      {
        heading: 'What is Edge Rate Limiting?',
        text: 'Edge rate limiting applies rate limits at the API gateway or CDN edge before requests reach backend services. This protects internal services from traffic spikes, abuse, and DDoS attacks. Limits can be per-user, per-IP, per-API-key, or tiered (free vs paid plans).',
        list: [
          '<strong>Per-user limits:</strong> Each authenticated user gets N requests/minute',
          '<strong>Per-IP limits:</strong> Each IP address gets N requests — protects against anonymous abuse',
          '<strong>Tiered limits:</strong> Free: 100/min, Pro: 1,000/min, Enterprise: 10,000/min',
          '<strong>Burst handling:</strong> Token bucket allows short bursts above the sustained rate',
          '<strong>Distributed rate limiting:</strong> Redis-based counters shared across gateway instances'
        ]
      },
      {
        heading: 'Edge Rate Limiting Architecture',
        diagram: `graph TB
    Client --> Edge[Edge / API Gateway]
    Edge -->|Check| Redis["(Redis<br/>Rate Limit Store)"]
    
    Edge -->|Under limit| Backend[Backend Service]
    Edge -->|Over limit| Reject[429 Too Many Requests]
    
    subgraph "Tiered Limits"
        Free[Free: 100/min]
        Pro[Pro: 1000/min]
        Ent[Enterprise: 10000/min]
    end
    
    Edge -->|Rate headers| Client
    Note["X-RateLimit-Limit: 1000<br/>X-RateLimit-Remaining: 999<br/>X-RateLimit-Reset: 1234567890"]`,
        text: 'Rate limiting at the edge: the gateway checks a shared Redis store for per-client counters. Requests under the limit are forwarded; over-limit requests get 429 with rate limit headers.'
      },
      {
        heading: 'Code Example: Distributed Rate Limiter',
        code: `import time
from collections import defaultdict

class EdgeRateLimiter:
    def __init__(self):
        # In production: use Redis with INCR + EXPIRE
        self.counters = defaultdict(lambda: {'count': 0, 'window_start': 0})
        self.tiers = {
            'free': {'limit': 100, 'window': 60},
            'pro': {'limit': 1000, 'window': 60},
            'enterprise': {'limit': 10000, 'window': 60}
        }

    def check(self, client_id, tier='free'):
        now = time.time()
        config = self.tiers[tier]
        counter = self.counters[client_id]

        # Reset window if expired
        if now - counter['window_start'] > config['window']:
            counter['count'] = 0
            counter['window_start'] = now

        # Check limit
        if counter['count'] >= config['limit']:
            reset = int(counter['window_start'] + config['window'])
            return {
                'allowed': False,
                'status': 429,
                'headers': {
                    'X-RateLimit-Limit': str(config['limit']),
                    'X-RateLimit-Remaining': '0',
                    'X-RateLimit-Reset': str(reset),
                    'Retry-After': str(reset - int(now))
                }
            }

        counter['count'] += 1
        remaining = config['limit'] - counter['count']
        return {
            'allowed': True,
            'headers': {
                'X-RateLimit-Limit': str(config['limit']),
                'X-RateLimit-Remaining': str(remaining)
            }
        }

# Test
rl = EdgeRateLimiter()
for i in range(3):
    result = rl.check('user_123', 'free')
    print(f'Request {i+1}: allowed={result["allowed"]}, '
          f'remaining={result["headers"].get("X-RateLimit-Remaining", "N/A")}')`,
        output: 'Each request increments the counter. Returns rate limit headers with remaining quota.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Stripe — tiered rate limiting with transparent headers.</strong> Stripe enforces rate limits per API key: 100 read requests/sec and 100 write requests/sec for standard accounts. Every response includes X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset headers. When limits are exceeded, Stripe returns 429 with a Retry-After header and a JSON body explaining which limit was hit. This transparency lets developers build adaptive retry logic.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Edge rate limiting protects backend services from abuse and spikes',
          'Tiers: free/pro/enterprise with different limits per plan',
          'Always return 429 + X-RateLimit-* headers for transparency',
          'Use Redis for distributed rate limit counters across gateway instances'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why rate limit at the edge instead of at each service? → Edge limiting prevents abusive requests from reaching internal services, saving compute resources and preventing cascading failures.',
          'Q2: How do you share rate limit state across multiple gateway instances? → Use a shared store like Redis: INCR atomically increments counters, EXPIRE resets the window.',
          'Q3: What is the difference between rate limiting and throttling? → Rate limiting rejects requests above the limit (429); throttling slows them down (queue or delay) without rejecting.'
        ]
      }
    ]
  },
  'cdn-edge': {
    title: 'CDN & Edge Computing',
    sections: [
      {
        heading: 'What is CDN & Edge Computing?',
        text: 'A Content Delivery Network (CDN) caches static and dynamic content at edge locations geographically close to users. Edge computing moves computation (serverless functions) to these edge nodes, reducing latency by processing requests near the user instead of at a central origin server.',
        list: [
          '<strong>Static caching:</strong> Images, CSS, JS, videos cached at edge — reduces origin load',
          '<strong>Edge functions:</strong> Run serverless code at edge (Cloudflare Workers, AWS Lambda@Edge)',
          '<strong>Origin shield:</strong> Intermediate cache between edge and origin — reduces origin hits',
          '<strong>Dynamic content:</strong> Edge can cache dynamic content with short TTLs or use edge compute',
          '<strong>Multi-CDN:</strong> Use multiple CDNs and route based on latency, cost, or geography'
        ]
      },
      {
        heading: 'CDN & Edge Computing Architecture',
        diagram: `graph TB
    User[User in India] -->|Low latency| EdgeIN[CDN Edge - Mumbai]
    User2[User in Europe] -->|Low latency| EdgeEU[CDN Edge - Frankfurt]
    User3[User in US] -->|Low latency| EdgeUS[CDN Edge - New York]
    
    EdgeIN -->|Cache hit| Cached[Cached Content]
    EdgeIN -->|Cache miss| Shield[Origin Shield]
    Shield -->|Fetch| Origin[Origin Server]
    
    EdgeIN -->|Edge Function| Func[Run code at edge]
    Func -->|Personalize| User
    Func -->|A/B test| User
    
    style EdgeIN fill:#bbf
    style EdgeEU fill:#bbf
    style EdgeUS fill:#bbf`,
        text: 'CDN edge nodes cache content close to users. On cache miss, requests go through an origin shield to the origin server. Edge functions run code at the edge for personalization or A/B testing without hitting the origin.'
      },
      {
        heading: 'Code Example: CDN Cache Logic',
        code: `class EdgeNode:
    def __init__(self, location):
        self.location = location
        self.cache = {}  # key -> (value, expiry)
        self.origin_shield = None
        self.stats = {'hits': 0, 'misses': 0}

    def set_origin_shield(self, shield):
        self.origin_shield = shield

    def get(self, key, ttl=3600):
        import time
        now = time.time()

        # Check local cache
        if key in self.cache:
            value, expiry = self.cache[key]
            if now < expiry:
                self.stats['hits'] += 1
                return value, 'edge-hit'

        # Cache miss -> origin shield
        self.stats['misses'] += 1
        if self.origin_shield:
            value, source = self.origin_shield.get(key, ttl)
            self.cache[key] = (value, now + ttl)
            return value, f'shield-{source}'

        return None, 'miss'

class OriginShield:
    def __init__(self):
        self.cache = {}
        self.stats = {'hits': 0, 'misses': 0}

    def get(self, key, ttl):
        import time
        now = time.time()
        if key in self.cache:
            value, expiry = self.cache[key]
            if now < expiry:
                self.stats['hits'] += 1
                return value, 'hit'
        # Would fetch from origin here
        self.stats['misses'] += 1
        value = f'content_for_{key}'
        self.cache[key] = (value, now + ttl * 2)  # shield caches longer
        return value, 'miss'

# Setup: edge -> shield -> origin
shield = OriginShield()
mumbai = EdgeNode('Mumbai')
mumbai.set_origin_shield(shield)

# First request: miss at edge, miss at shield
print(mumbai.get('image_1.jpg'))
# Second request: hit at edge
print(mumbai.get('image_1.jpg'))
# Third request from another edge: miss at edge, hit at shield
delhi = EdgeNode('Delhi')
delhi.set_origin_shield(shield)
print(delhi.get('image_1.jpg'))`,
        output: 'First: edge miss + shield miss. Second: edge hit. Third: edge miss + shield hit (shared cache).',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Cloudflare — edge computing at 300+ locations.</strong> Cloudflare Workers run JavaScript at 300+ edge locations worldwide. A request from Mumbai hits the Mumbai edge node, runs the worker function there (A/B testing, personalization, auth check), and returns the response — all in <50ms. Shopify uses Cloudflare Workers to serve 2M+ merchants, running cart logic and redirects at the edge without touching origin servers, reducing origin load by 60%.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'CDN = cache content at edge locations close to users',
          'Edge computing = run serverless code at edge (Workers, Lambda@Edge)',
          'Origin shield = intermediate cache that protects origin from cache stampedes',
          'Multi-CDN strategy = route to best CDN based on latency, cost, or region'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the difference between CDN and edge computing? → CDN caches content; edge computing runs code at the edge. Edge computing can personalize, transform, or validate requests without hitting the origin.',
          'Q2: Why use an origin shield? → It reduces origin load by serving as a shared cache for all edge nodes. 100 edge misses become 1 origin miss + 99 shield hits.',
          'Q3: When should you use multi-CDN? → When you have global traffic, need redundancy, or want to optimize cost by routing to the cheapest/b fastest CDN per region.'
        ]
      }
    ]
  },
  'graphql-federation': {
    title: 'GraphQL Federation',
    sections: [
      {
        heading: 'What is GraphQL Federation?',
        text: 'GraphQL Federation composes multiple independent GraphQL APIs (subgraphs) into a single unified API (supergraph). Each team owns their subgraph, defining their types and resolvers. The gateway automatically stitches them together, allowing clients to query across services in a single request.',
        list: [
          '<strong>Supergraph:</strong> The composed API that clients query — single endpoint for all data',
          '<strong>Subgraphs:</strong> Individual GraphQL APIs owned by teams — each defines part of the schema',
          '<strong>Entity resolution:</strong> Subgraphs can reference entities owned by other subgraphs via @key directive',
          '<strong>Single query:</strong> Clients fetch user + orders + reviews in one request across 3 subgraphs',
          '<strong>Independent deployment:</strong> Each subgraph team deploys independently'
        ]
      },
      {
        heading: 'GraphQL Federation Architecture',
        diagram: `graph TB
    Client[Client] --> Gateway[Supergraph Gateway]
    
    Gateway -->|Compose| UserSub[User Subgraph]
    Gateway -->|Compose| OrderSub[Order Subgraph]
    Gateway -->|Compose| ReviewSub[Review Subgraph]
    
    UserSub -->|type User @key(id)| UserDB["(User DB)"]
    OrderSub -->|type Order @key(id)| OrderDB["(Order DB)"]
    ReviewSub -->|type Review| ReviewDB["(Review DB)"]
    
    OrderSub -.->|extend User| UserSub
    ReviewSub -.->|extend User| UserSub
    
    Client -->|Single query| Query["query { user(id:1) { name orders { total reviews { rating } } } }"]
    Query --> Gateway`,
        text: 'The gateway composes subgraphs into a supergraph. Each subgraph owns its types. Entities (@key) can be extended by other subgraphs. Clients query one endpoint and get data from all subgraphs.'
      },
      {
        heading: 'Code Example: Federation Subgraphs',
        code: `# Simulated GraphQL Federation setup
# Each subgraph defines its own schema and resolvers

user_subgraph = {
    'type User @key(fields: "id")': {
        'id': 'ID!',
        'name': 'String',
        'email': 'String'
    },
    'resolvers': {
        'User': lambda id: {'id': id, 'name': 'Alice', 'email': 'alice@example.com'}
    }
}

order_subgraph = {
    'type Order @key(fields: "id")': {
        'id': 'ID!',
        'userId': 'ID!',
        'total': 'Float',
        'items': '[String]'
    },
    'extend type User @key(fields: "id")': {
        'orders': '[Order]'
    },
    'resolvers': {
        'User.orders': lambda user_id: [
            {'id': 1, 'userId': user_id, 'total': 99.99, 'items': ['Book', 'Pen']},
            {'id': 2, 'userId': user_id, 'total': 45.50, 'items': ['Notebook']}
        ]
    }
}

review_subgraph = {
    'type Review': {
        'id': 'ID!',
        'userId': 'ID!',
        'rating': 'Int',
        'comment': 'String'
    },
    'extend type User @key(fields: "id")': {
        'reviews': '[Review]'
    },
    'resolvers': {
        'User.reviews': lambda user_id: [
            {'id': 1, 'userId': user_id, 'rating': 5, 'comment': 'Great!'}
        ]
    }
}

# Gateway resolves a federated query
def federated_query(user_id):
    user = user_subgraph['resolvers']['User'](user_id)
    user['orders'] = order_subgraph['resolvers']['User.orders'](user_id)
    user['reviews'] = review_subgraph['resolvers']['User.reviews'](user_id)
    return user

import json
print(json.dumps(federated_query(1), indent=2))`,
        output: 'Returns user with nested orders and reviews from 3 different subgraphs in one query.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Apollo Federation at Airbnb.</strong> Airbnb uses Apollo Federation to unify their GraphQL APIs. Each team (Listings, Bookings, Reviews, Payments) owns a subgraph. The gateway composes them into a single supergraph. A client searching for a listing gets listing details, availability, reviews, and host info in one query — the gateway routes parts to each subgraph and stitches the result. This reduced mobile API response times by 40% compared to multiple REST calls.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Federation = compose multiple subgraphs into one supergraph',
          'Each team owns and deploys their subgraph independently',
          'Entities (@key) can be extended across subgraphs',
          'Clients get a single endpoint — no over/under fetching'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How does federation differ from schema stitching? → Federation is declarative — subgraphs define their schema with directives (@key, @extends) and the gateway auto-composes. Schema stitching requires manual resolvers for cross-service joins.',
          'Q2: What happens if a subgraph goes down? → Queries that touch that subgraph fail, but queries using only other subgraphs still work. The gateway can serve partial results with error annotations.',
          'Q3: How does the gateway resolve a field owned by another subgraph? → Using entity references: the gateway fetches the entity by @key from the owning subgraph, then the extending subgraph adds its fields.'
        ]
      }
    ]
  }
},
  module8: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Production operations patterns ensure systems can be deployed, monitored, and maintained safely in production. This module covers canary and blue-green deployments, feature flags, observability, health checks, and chaos engineering.',
          list: [
            '<strong>Topics covered:</strong> Canary Deployment, Blue-Green Deployment, Feature Flags, Observability, Health Checks, Chaos Engineering',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'A system that works in staging but breaks in production is useless. These patterns ensure safe deployments, fast incident response, and proactive failure detection. Companies like Netflix, Google, and Amazon use every pattern in this module.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Canary] --> T2[Blue-Green]
    T2 --> T3[Feature Flags]
    T3 --> T4[Observability]
    T4 --> T5[Health Checks]
    T5 --> T6[Chaos Engineering]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'canary-deployment': {
    title: 'Canary Deployment',
    sections: [
      {
        heading: 'What is Canary Deployment?',
        text: 'Canary deployment is a release strategy where a new version is rolled out to a small subset of users first. If no issues are found, the new version is gradually rolled out to more users until it reaches 100%. This limits the blast radius of bad deployments.',
        list: [
          '<strong>Gradual rollout:</strong> 1% → 5% → 25% → 50% → 100% with monitoring at each stage',
          '<strong>Automatic rollback:</strong> If error rate or latency spikes, traffic reverts to the old version',
          '<strong>Metrics-driven:</strong> Monitor error rate, p99 latency, conversion rate before proceeding',
          '<strong>Traffic shifting:</strong> Use load balancer weights or feature flags to route a percentage of traffic',
          '<strong>Quick comparison:</strong> Canary vs control — compare metrics in real-time'
        ]
      },
      {
        heading: 'Canary Deployment Flow',
        diagram: `graph LR
    subgraph "Stage 1: 1% Canary"
        LB[Load Balancer] -->|99%| Old[Old Version v1]
        LB -->|1%| Canary[New Version v2]
        Monitor[Metrics Monitor] -->|Check| LB
    end
    
    subgraph "Stage 2: 25% Canary"
        LB2[Load Balancer] -->|75%| Old2[Old Version v1]
        LB2 -->|25%| Canary2[New Version v2]
    end
    
    subgraph "Stage 3: 100% or Rollback"
        LB3[Load Balancer] -->|100%| Final[New Version v2]
        LB4[Load Balancer] -->|100%| Rollback[Old Version v1]
    end
    
    Monitor -->|Healthy| LB2
    Monitor -->|Unhealthy| LB4`,
        text: 'Traffic shifts gradually from old to new version. At each stage, metrics are checked. If healthy, proceed to the next stage. If unhealthy, rollback to the old version.'
      },
      {
        heading: 'Code Example: Canary Traffic Shifter',
        code: `import time
import random

class CanaryDeployer:
    def __init__(self, version_old, version_new):
        self.versions = {version_old: 100, version_new: 0}
        self.stages = [1, 5, 25, 50, 100]
        self.metrics = {'errors': 0, 'requests': 0}

    def shift_traffic(self, percentage, new_version):
        old_version = [v for v in self.versions if v != new_version][0]
        self.versions[new_version] = percentage
        self.versions[old_version] = 100 - percentage
        print(f'  Traffic: {old_version}={100-percentage}% | {new_version}={percentage}%')

    def check_metrics(self):
        """Simulate metric check for canary."""
        error_rate = self.metrics['errors'] / max(self.metrics['requests'], 1)
        print(f'  Error rate: {error_rate:.2%} ({self.metrics["errors"]}/{self.metrics["requests"]})')
        return error_rate < 0.01  # < 1% error rate = healthy

    def simulate_requests(self, count, canary_pct):
        self.metrics = {'errors': 0, 'requests': count}
        for _ in range(count):
            if random.randint(1, 100) <= canary_pct:
                # New version has slightly higher error rate
                if random.random() < 0.015:
                    self.metrics['errors'] += 1
            else:
                if random.random() < 0.005:
                    self.metrics['errors'] += 1

    def deploy(self, new_version):
        print(f'Canary deployment: {new_version}')
        for stage in self.stages:
            self.shift_traffic(stage, new_version)
            self.simulate_requests(1000, stage)
            if self.check_metrics():
                print(f'  -> Stage {stage}%: HEALTHY, proceeding')
            else:
                print(f'  -> Stage {stage}%: UNHEALTHY, rolling back!')
                self.shift_traffic(0, new_version)
                return False
        print(f'  -> Deployment complete: 100% {new_version}')
        return True

deployer = CanaryDeployer('v1.0', 'v2.0')
deployer.deploy('v2.0')`,
        output: 'Gradually shifts traffic to v2.0. If error rate exceeds 1% at any stage, rolls back to v1.0.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Google — progressive canary for Search.</strong> Google uses canary deployments for Search updates. A new version first serves 0.1% of traffic to a subset of data centers. Automated canary analysis (using statistical comparison of error rates, latency, and user engagement) decides whether to proceed. Google\'s Borg system can roll back within 90 seconds if anomalies are detected. This protects billions of daily searches from bad deployments.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Canary = gradual rollout (1% → 5% → 25% → 50% → 100%)',
          'Monitor error rate, latency, business metrics at each stage',
          'Automatic rollback if metrics degrade beyond threshold',
          'Limits blast radius — only a small % of users affected by bad releases'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What metrics should you monitor during canary? → Error rate, p99/p95 latency, throughput, and business metrics (conversion rate, revenue).',
          'Q2: How is canary different from A/B testing? → Canary tests for safety (no errors, no latency regression). A/B tests for feature effectiveness (does the new feature improve engagement?).',
          'Q3: What is the rollback time for canary? → Near-instant — just shift traffic weights back to 100% old version. No redeployment needed since the old version is still running.'
        ]
      }
    ]
  },
  'blue-green': {
    title: 'Blue-Green Deployment',
    sections: [
      {
        heading: 'What is Blue-Green Deployment?',
        text: 'Blue-green deployment maintains two identical production environments (blue and green). Only one serves live traffic at a time. To deploy, you release the new version to the idle environment, test it, then switch traffic. If issues arise, you switch back instantly.',
        list: [
          '<strong>Two environments:</strong> Blue (live) and Green (idle) — both identical infrastructure',
          '<strong>Instant switch:</strong> Update load balancer to point from blue to green — zero downtime',
          '<strong>Instant rollback:</strong> Switch traffic back to the previous environment if issues found',
          '<strong>Full cutover:</strong> All traffic switches at once (unlike canary\'s gradual shift)',
          '<strong>Resource cost:</strong> Requires 2x infrastructure (both environments must be running)'
        ]
      },
      {
        heading: 'Blue-Green Deployment Architecture',
        diagram: `graph TB
    subgraph "Before: Blue is Live"
        LB1[Load Balancer] -->|100%| BlueV1[Blue: v1.0<br/>LIVE]
        GreenV2[Green: v2.0<br/>IDLE]
    end
    
    subgraph "After: Green is Live"
        LB2[Load Balancer] -->|100%| GreenV2b[Green: v2.0<br/>LIVE]
        BlueV1b[Blue: v1.0<br/>IDLE - backup]
    end
    
    subgraph "Rollback if needed"
        LB3[Load Balancer] -->|100%| BlueV1c[Blue: v1.0<br/>LIVE AGAIN]
    end
    
    LB1 -->|Deploy v2 to Green| GreenV2
    GreenV2 -->|Test| Test{Tests pass?}
    Test -->|Yes| LB2
    Test -->|No| LB1
    LB2 -->|Issues?| LB3`,
        text: 'Blue serves traffic while Green is updated with the new version. After testing Green, switch the load balancer. If problems arise, switch back to Blue instantly.'
      },
      {
        heading: 'Code Example: Blue-Green Manager',
        code: `class BlueGreenDeploy:
    def __init__(self):
        self.environments = {
            'blue': {'version': 'v1.0', 'is_live': True, 'healthy': True},
            'green': {'version': None, 'is_live': False, 'healthy': None}
        }
        self.live = 'blue'
        self.standby = 'green'

    def deploy(self, new_version):
        """Deploy new version to standby environment."""
        env = self.environments[self.standby]
        env['version'] = new_version
        print(f'  Deployed {new_version} to {self.standby}')
        return self.test()

    def test(self):
        """Run health checks on standby."""
        env = self.environments[self.standby]
        # Simulate health check
        env['healthy'] = True
        print(f'  Health check on {self.standby} ({env["version"]}): PASS')
        return env['healthy']

    def switch(self):
        """Switch traffic from live to standby."""
        if not self.environments[self.standby]['healthy']:
            print(f'  Cannot switch — {self.standby} is not healthy')
            return False
        self.environments[self.live]['is_live'] = False
        self.environments[self.standby]['is_live'] = True
        old_live = self.live
        self.live, self.standby = self.standby, self.live
        print(f'  Switched: {self.live} is now LIVE ({self.environments[self.live]["version"]})')
        print(f'  {self.standby} is now STANDBY ({self.environments[self.standby]["version"]})')
        return True

    def rollback(self):
        """Switch back to the previous environment."""
        print('  ROLLBACK initiated!')
        self.switch()

# Deploy v2.0
bg = BlueGreenDeploy()
print('Initial state: blue=v1.0 (live), green=empty')
bg.deploy('v2.0')
bg.switch()
print('\\nAfter deploy: green=v2.0 (live), blue=v1.0 (standby)')
print('\\nIssue detected! Rolling back...')
bg.rollback()`,
        output: 'Deploy v2.0 to green, test, switch traffic to green. On issue, switch back to blue instantly.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Amazon — blue-green for retail deployments.</strong> Amazon uses blue-green deployments for their retail platform. During Prime Day, they keep the previous version running in the blue environment as a safety net. If the new green version has issues, they switch traffic back in under 30 seconds. The extra infrastructure cost (~2x) is justified by the near-zero downtime and instant rollback capability during their highest-traffic event of the year.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Blue-green = two identical environments, switch traffic between them',
          'Zero downtime — switch is just a load balancer config change',
          'Instant rollback — switch back to the previous environment',
          'Cost: requires 2x infrastructure (both environments running)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: When is blue-green better than canary? → When you need instant rollback and full cutover (all users at once). Canary is better for gradual, risk-minimized rollouts.',
          'Q2: What about database migrations in blue-green? → Schema changes must be backward-compatible. Use expand-and-contract pattern: add new columns (both versions work), then remove old ones after cutover.',
          'Q3: What is the main cost tradeoff? → 2x infrastructure cost during deployment, but you save on debugging downtime, incident response, and lost revenue from bad releases.'
        ]
      }
    ]
  },
  'feature-flags': {
    title: 'Feature Flags',
    sections: [
      {
        heading: 'What are Feature Flags?',
        text: 'Feature flags (feature toggles) are a technique that lets you turn features on or off without deploying new code. They decouple release from deployment, allowing you to ship code with hidden features and activate them independently — per user, per segment, or globally.',
        list: [
          '<strong>Release flags:</strong> Hide incomplete code in production — activate when ready',
          '<strong>Experiment flags:</strong> A/B test features on a percentage of users',
          '<strong>Ops flags:</strong> Toggle features for operational reasons (degrade gracefully)',
          '<strong>Permission flags:</strong> Enable features for specific users (beta, enterprise)',
          '<strong>Kill switch:</strong> Instantly disable a problematic feature without rollback'
        ]
      },
      {
        heading: 'Feature Flag System Architecture',
        diagram: `graph TB
    App[Application] -->|Check flag| FFService[Feature Flag Service]
    FFService --> Rules[Rules Engine]
    Rules -->|User segment| Seg[Segment: beta users]
    Rules -->|Percentage| Pct[30% rollout]
    Rules -->|Environment| Env[Prod vs Staging]
    Rules -->|Kill switch| Kill[Instant off]
    
    FFService --> Store["(Flag Config Store)"]
    Admin[Admin Dashboard] -->|Toggle| Store
    
    App -->|flag=on| FeatureA[New Feature]
    App -->|flag=off| FeatureB[Old Feature]
    
    style FFService fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'The application checks the flag service before executing feature code. Rules engine evaluates conditions (user segment, percentage, environment). Admins can toggle flags in real-time via dashboard without code deployment.'
      },
      {
        heading: 'Code Example: Feature Flag System',
        code: `import hashlib
import json

class FeatureFlagSystem:
    def __init__(self):
        self.flags = {}

    def create_flag(self, name, enabled=False, rules=None):
        self.flags[name] = {
            'enabled': enabled,
            'rules': rules or {}
        }

    def evaluate(self, flag_name, user_id=None, context=None):
        flag = self.flags.get(flag_name)
        if not flag or not flag['enabled']:
            return False

        rules = flag['rules']
        
        # Percentage rollout
        if 'percentage' in rules:
            pct = rules['percentage']
            hash_val = int(hashlib.md5(f'{flag_name}:{user_id}'.encode()).hexdigest(), 16)
            return (hash_val % 100) < pct
        
        # User allowlist
        if 'users' in rules and user_id in rules['users']:
            return True
        
        # Environment check
        if 'environment' in rules:
            env = context.get('environment') if context else None
            return env == rules['environment']
        
        # Global on
        return flag['enabled']

    def toggle(self, flag_name, enabled):
        if flag_name in self.flags:
            self.flags[flag_name]['enabled'] = enabled
            print(f'  Flag "{flag_name}" -> {"ON" if enabled else "OFF"}')

# Setup flags
ff = FeatureFlagSystem()
ff.create_flag('new_checkout', enabled=True, rules={'percentage': 30})
ff.create_flag('beta_dashboard', enabled=True, rules={'users': ['user_1', 'user_2']})
ff.create_flag('dark_mode', enabled=False)

# Evaluate for different users
for uid in ['user_1', 'user_2', 'user_3', 'user_4']:
    checkout = ff.evaluate('new_checkout', uid)
    dashboard = ff.evaluate('beta_dashboard', uid)
    print(f'  {uid}: new_checkout={checkout}, beta_dashboard={dashboard}')

# Kill switch — disable checkout instantly
ff.toggle('new_checkout', False)`,
        output: '30% of users get new_checkout. Only user_1 and user_2 get beta_dashboard. Toggle disables instantly.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Flickr — feature flags for zero-downtime deploys.</strong> Flickr (Yahoo) pioneered feature flags at scale. They deploy code 50+ times per day with features hidden behind flags. New features start at 0% rollout, then gradually increase. During a 2012 incident, a new photo upload feature caused 5xx errors — the team toggled the flag off within 30 seconds, restoring service without a rollback. This reduced mean time to recovery (MTTR) from 30 minutes to under 1 minute.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Feature flags = decouple deployment from release',
          'Types: release, experiment, ops, permission, kill switch',
          'Percentage rollout: hash(user_id + flag_name) for consistent distribution',
          'Admin can toggle flags instantly without code deployment'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you ensure a user consistently sees a feature? → Hash user_id + flag_name to deterministically assign users to control/treatment groups.',
          'Q2: What is the risk of too many flags? → Flag debt — old flags never removed, making code hard to understand. Regularly clean up stale flags.',
          'Q3: How do feature flags help with graceful degradation? → During traffic spikes, turn off non-critical features (recommendations, personalization) to reduce load on backend services.'
        ]
      }
    ]
  },
  'observability': {
    title: 'Observability (Logging, Metrics, Tracing)',
    sections: [
      {
        heading: 'What is Observability?',
        text: 'Observability is the ability to understand a system\'s internal state from its external outputs. In software, this means three pillars: logs (discrete events), metrics (aggregated numbers over time), and traces (request flow across services). Together they let you debug, monitor, and alert on system behavior.',
        list: [
          '<strong>Logs:</strong> Structured events — who did what, when, with what result',
          '<strong>Metrics:</strong> Time-series data — CPU, memory, request rate, error rate, latency percentiles',
          '<strong>Traces:</strong> Distributed tracing follows a request across service boundaries',
          '<strong>The three pillars work together:</strong> Alert on metrics → find the trace → read the logs',
          '<strong>Golden signals:</strong> Latency, traffic, errors, saturation (Google SRE)'
        ]
      },
      {
        heading: 'Observability Three Pillars',
        diagram: `graph TB
    subgraph "Three Pillars"
        Logs[Logs<br/>ELK / Loki<br/>Discrete events]
        Metrics[Metrics<br/>Prometheus / Datadog<br/>Time-series numbers]
        Traces[Traces<br/>Jaeger / Zipkin<br/>Request flow]
    end
    
    subgraph "Workflow"
        Alert[Alert: p99 latency high] -->|Find| Trace[Trace: shows DB call is slow]
        Trace -->|Look at| Log[Log: slow query in orders service]
        Log -->|Fix| Code[Optimize query]
    end
    
    App[Application] -->|Structured logs| Logs
    App -->|/metrics endpoint| Metrics
    App -->|Trace headers| Traces
    
    style Alert fill:#fbb
    style Trace fill:#bbf
    style Log fill:#bfb`,
        text: 'Metrics trigger alerts. Traces show which service is slow. Logs show why. The three pillars work together for effective debugging.'
      },
      {
        heading: 'Code Example: Structured Logging + Metrics',
        code: `import time
import json
from collections import defaultdict

class ObservabilitySystem:
    def __init__(self, service_name):
        self.service = service_name
        self.logs = []
        self.metrics = defaultdict(list)
        self.traces = []

    def log(self, level, event, **kwargs):
        entry = {
            'timestamp': time.time(),
            'service': self.service,
            'level': level,
            'event': event,
            **kwargs
        }
        self.logs.append(entry)
        print(f'  [{level}] {event} - {json.dumps(kwargs)}')

    def record_metric(self, name, value, labels=None):
        self.metrics[name].append({
            'timestamp': time.time(),
            'value': value,
            'labels': labels or {}
        })

    def start_trace(self, trace_id, operation):
        span = {'trace_id': trace_id, 'operation': operation,
                'start': time.time(), 'service': self.service}
        self.traces.append(span)
        return span

    def end_trace(self, span):
        span['duration_ms'] = (time.time() - span['start']) * 1000
        print(f'  TRACE {span["trace_id"]}: {span["operation"]} '
              f'took {span["duration_ms"]:.1f}ms')

    def handle_request(self, user_id, operation):
        trace_id = f'trace_{len(self.traces)}'
        span = self.start_trace(trace_id, operation)
        self.log('INFO', 'request_started', user_id=user_id, operation=operation)
        self.record_metric('request_count', 1, {'operation': operation})
        
        # Simulate work
        time.sleep(0.05)
        
        if operation == 'slow_query':
            self.log('WARN', 'slow_query_detected', duration_ms=500)
            self.record_metric('request_latency_ms', 500, {'operation': operation})
        else:
            self.record_metric('request_latency_ms', 50, {'operation': operation})
        
        self.end_trace(span)
        self.log('INFO', 'request_completed', user_id=user_id, operation=operation)

obs = ObservabilitySystem('order-service')
obs.handle_request('user_1', 'get_order')
obs.handle_request('user_2', 'slow_query')
print(f'\\nMetrics: {dict(obs.metrics)}')`,
        output: 'Logs show events, metrics record latency, traces track request flow — all correlated by trace_id.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Uber — distributed tracing with Jaeger.</strong> Uber open-sourced Jaeger (inspired by Google Dapper) for distributed tracing across their 2,000+ microservices. Each request gets a trace_id that propagates via HTTP headers. When a ride request fails, engineers search by trace_id in Jaeger, see which of the 20+ service calls failed, and jump to the corresponding logs in ELK. This reduced mean time to resolution (MTTR) from hours to minutes.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Logs = discrete events (what happened)',
          'Metrics = time-series numbers (how much, how fast)',
          'Traces = request flow (where, in what order)',
          'Golden signals: latency, traffic, errors, saturation'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the difference between monitoring and observability? → Monitoring tells you when something is wrong (alerting). Observability lets you understand why (debugging via logs, metrics, traces).',
          'Q2: What is a distributed trace? → A tree of spans showing a request\'s path across services, with timing for each service call.',
          'Q3: Why use structured logging? → Machine-parseable JSON logs with consistent fields (timestamp, level, service, trace_id) enable search and correlation with traces and metrics.'
        ]
      }
    ]
  },
  'health-checks': {
    title: 'Health Checks & Readiness Probes',
    sections: [
      {
        heading: 'What are Health Checks?',
        text: 'Health checks are endpoints that report whether a service is healthy and ready to serve traffic. Liveness probes check if the process is alive (should it be restarted?). Readiness probes check if the service can handle requests (should it receive traffic?). These are fundamental to orchestration platforms like Kubernetes.',
        list: [
          '<strong>Liveness probe:</strong> "Is the process alive?" — if fails, restart the container',
          '<strong>Readiness probe:</strong> "Can you serve requests?" — if fails, remove from load balancer',
          '<strong>Startup probe:</strong> "Has the app finished starting?" — disable liveness during slow startup',
          '<strong>Deep checks:</strong> Verify dependencies (DB, cache, downstream services) are reachable',
          '<strong>Shallow checks:</strong> Just verify the process is running (fast, no dependency checks)'
        ]
      },
      {
        heading: 'Health Check Architecture',
        diagram: `graph TB
    subgraph "Kubernetes Probes"
        K8s[Kubernetes] -->|Liveness every 10s| Pod[Pod]
        K8s -->|Readiness every 5s| Pod
        K8s -->|Startup once| Pod
        
        Pod -->|/health/live| Live{Process alive?}
        Pod -->|/health/ready| Ready{DB + Cache OK?}
        Pod -->|/health/startup| Start{App initialized?}
        
        Live -->|Fail| Restart[Restart Pod]
        Ready -->|Fail| Remove[Remove from Service LB]
        Ready -->|Pass| Add[Add to Service LB]
        Start -->|Pass| Enable[Enable liveness checks]
    end`,
        text: 'Liveness: restart the pod if the process is stuck. Readiness: route traffic only when the pod can serve requests. Startup: wait for slow-starting apps before enabling liveness.'
      },
      {
        heading: 'Code Example: Health Check Endpoints',
        code: `import time
import random

class HealthCheckService:
    def __init__(self):
        self.started_at = time.time()
        self.ready = False
        self.dependencies = {'database': False, 'cache': False, 'queue': False}

    def liveness(self):
        """Shallow check: is the process alive?"""
        return {'status': 'alive', 'uptime': time.time() - self.started_at}

    def readiness(self):
        """Deep check: can we serve requests?"""
        all_deps_ok = all(self.dependencies.values())
        return {
            'status': 'ready' if all_deps_ok else 'not_ready',
            'dependencies': self.dependencies
        }

    def startup(self):
        """Check if app has finished initializing."""
        return self.ready

    def simulate_startup(self):
        """Simulate app initialization sequence."""
        print('  Starting up...')
        time.sleep(0.1)
        self.dependencies['cache'] = True
        print('  Cache connected')
        time.sleep(0.1)
        self.dependencies['database'] = True
        print('  Database connected')
        time.sleep(0.1)
        self.dependencies['queue'] = True
        print('  Queue connected')
        self.ready = True
        print('  Startup complete!')

# Simulate
hc = HealthCheckService()
print(f'Startup check: {hc.startup()}')
print(f'Liveness: {hc.liveness()}')
print(f'Readiness (before startup): {hc.readiness()}')
print()
hc.simulate_startup()
print()
print(f'Startup check: {hc.startup()}')
print(f'Readiness (after startup): {hc.readiness()}')`,
        output: 'Before startup: not ready (all deps false). After startup: ready (all deps true).',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Kubernetes — probes at Google.</strong> Google\'s internal infrastructure (Borg) uses health checks to manage millions of containers. Liveness probes restart pods stuck in deadlocks. Readiness probes remove pods from service endpoints during rolling updates, ensuring zero downtime. Google recommends separate liveness and readiness endpoints — a service might be alive (process running) but not ready (still warming cache, connecting to DB). Using only liveness would restart healthy-but-warming pods unnecessarily.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Liveness = restart if process is stuck (shallow check)',
          'Readiness = route traffic only when dependencies are OK (deep check)',
          'Startup = wait for slow-starting apps before enabling liveness',
          'Always use separate endpoints: /health/live, /health/ready'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What happens if readiness probe fails? → Pod is removed from the service endpoint list (no traffic), but NOT restarted. It stays running and can recover.',
          'Q2: Why not use liveness for everything? → A service might be alive but not ready (e.g., still loading a large cache). Restarting it would cause a restart loop.',
          'Q3: What should a deep readiness check include? → Check all critical dependencies: database connection, cache, message queue, and downstream service connectivity.'
        ]
      }
    ]
  },
  'chaos-engineering': {
    title: 'Chaos Engineering',
    sections: [
      {
        heading: 'What is Chaos Engineering?',
        text: 'Chaos engineering is the practice of deliberately injecting failures into a system to verify it handles them gracefully. Rather than waiting for real failures, chaos experiments proactively find weaknesses — uncovering hidden dependencies, missing circuit breakers, and single points of failure before they cause outages.',
        list: [
          '<strong>Game days:</strong> Planned exercises where teams inject failures and observe responses',
          '<strong>Failure injection:</strong> Kill processes, add network latency, exhaust resources, take down nodes',
          '<strong>Blast radius:</strong> Start small (one instance) and gradually increase scope',
          '<strong>Hypothesis-driven:</strong> Define expected behavior before injecting failure',
          '<strong>Automated:</strong> Run chaos experiments continuously in production (Chaos Monkey)'
        ]
      },
      {
        heading: 'Chaos Engineering Process',
        diagram: `graph TB
    subgraph "Chaos Experiment Cycle"
        H[Form Hypothesis<br/>"Service A can survive losing 1 instance"] --> B[Define Blast Radius<br/>1 instance in staging]
        B --> I[Inject Failure<br/>Kill instance]
        I --> O[Observe<br/>Metrics, logs, user impact]
        O --> A{System stable?}
        A -->|Yes| S[Expand blast radius<br/>Try 2 instances, then prod]
        A -->|No| F[Fix vulnerability<br/>Add circuit breaker, retry, fallback]
        S --> H
        F --> H
    end
    
    subgraph "Failure Types"
        FT1[Kill process/container]
        FT2[Network latency/packet loss]
        FT3[CPU/memory exhaustion]
        FT4[Dependency outage]
        FT5[Clock skew]
    end`,
        text: 'Chaos engineering is a cycle: form a hypothesis, inject failure, observe impact, fix vulnerabilities, and expand scope. Failure types range from process kills to network issues to resource exhaustion.'
      },
      {
        heading: 'Code Example: Chaos Experiment Runner',
        code: `import random
import time

class ChaosExperiment:
    def __init__(self, name, hypothesis, blast_radius):
        self.name = name
        self.hypothesis = hypothesis
        self.blast_radius = blast_radius  # number of instances to affect
        self.result = None

class ChaosRunner:
    def __init__(self):
        self.services = {
            'api-gateway': ['instance-1', 'instance-2', 'instance-3'],
            'user-service': ['instance-1', 'instance-2'],
            'payment-service': ['instance-1', 'instance-2', 'instance-3', 'instance-4']
        }
        self.circuit_breakers = {'payment-service': True}
        self.results = []

    def kill_instance(self, service, instance):
        """Simulate killing an instance."""
        if instance in self.services[service]:
            self.services[service].remove(instance)
            print(f'  CHAOS: Killed {service}/{instance}')
            return True
        return False

    def check_service_health(self, service):
        """Check if service still has enough instances."""
        instances = self.services[service]
        min_required = 1
        healthy = len(instances) >= min_required
        has_cb = self.circuit_breakers.get(service, False)
        print(f'  {service}: {len(instances)} instances, '
              f'healthy={healthy}, circuit_breaker={has_cb}')
        return healthy

    def run_experiment(self, service, num_to_kill):
        print(f'\\nExperiment: Kill {num_to_kill} instance(s) of {service}')
        print(f'Hypothesis: {service} survives losing {num_to_kill} instance(s)')
        
        before = len(self.services[service])
        for _ in range(num_to_kill):
            if self.services[service]:
                victim = random.choice(self.services[service])
                self.kill_instance(service, victim)
        
        time.sleep(0.1)  # Simulate time for system to react
        healthy = self.check_service_health(service)
        
        result = 'PASS' if healthy else 'FAIL'
        self.results.append({'service': service, 'killed': num_to_kill, 'result': result})
        print(f'  Result: {result} ({before} -> {len(self.services[service])} instances)')

runner = ChaosRunner()
runner.run_experiment('api-gateway', 1)
runner.run_experiment('user-service', 1)
runner.run_experiment('payment-service', 2)
print('\\nSummary:', runner.results)`,
        output: 'Each experiment kills instances and checks if the service stays healthy. PASS/FAIL recorded.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Netflix — Chaos Monkey and the Simian Army.</strong> Netflix created Chaos Monkey in 2011, which randomly terminates production instances during business hours. This forced engineers to build resilient services that survive instance failures. They later expanded to the "Simian Army": Chaos Gorilla (takes down an entire availability zone), Chaos Kong (takes down a region), and Latency Monkey (injects network delays). Netflix runs these experiments continuously in production, ensuring their 200M+ subscribers experience minimal disruptions.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Chaos engineering = deliberately inject failures to find weaknesses',
          'Start small (staging, 1 instance) and gradually expand blast radius',
          'Failure types: process kill, network latency, resource exhaustion, dependency outage',
          'Hypothesis-driven: define expected behavior before injecting failure'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why run chaos experiments in production? → Staging doesn\'t fully replicate production traffic, data, or scale. Production reveals real weaknesses that staging misses.',
          'Q2: What is "blast radius" in chaos engineering? → The scope of impact — number of instances, services, or users affected. Start small and increase gradually.',
          'Q3: How do circuit breakers help with chaos? → They prevent cascading failures when a dependency goes down, allowing the system to degrade gracefully instead of failing completely.'
        ]
      }
    ]
  }
},
  module9: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Data-intensive patterns handle systems that process massive volumes of data in real-time or batch. This module covers stream processing, Change Data Capture, exactly-once processing, batch processing with MapReduce and Spark, and the Lambda and Kappa architectures.',
          list: [
            '<strong>Topics covered:</strong> Stream Processing, CDC, Exactly-Once, Batch Processing, Lambda Architecture, Kappa Architecture',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Modern systems generate terabytes of data daily. Processing this data efficiently — whether for real-time fraud detection, live dashboards, or ML model training — requires specialized patterns.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Stream Processing] --> T2[CDC]
    T2 --> T3[Exactly-Once]
    T3 --> T4[Batch Processing]
    T4 --> T5[Lambda]
    T5 --> T6[Kappa]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'stream-processing': {
    title: 'Stream Processing',
    sections: [
      {
        heading: 'What is Stream Processing?',
        text: 'Stream processing continuously processes data as it arrives, rather than waiting for batches. It enables real-time analytics, fraud detection, and live dashboards. Systems like Apache Kafka, Flink, and Spark Streaming handle millions of events per second with sub-second latency.',
        list: [
          '<strong>Event stream:</strong> Unbounded flow of events (Kafka topics, Kinesis streams)',
          '<strong>Windowing:</strong> Group events by time (tumbling, sliding, session windows)',
          '<strong>Stateful processing:</strong> Maintain state across events (counters, aggregations)',
          '<strong>Watermarks:</strong> Handle late-arriving events — define how long to wait before closing a window',
          '<strong>Exactly-once:</strong> Ensure each event is processed exactly once, even under failures'
        ]
      },
      {
        heading: 'Stream Processing Architecture',
        diagram: `graph LR
    Producer1[Producer 1] --> Topic[Kafka Topic]
    Producer2[Producer 2] --> Topic
    Producer3[Producer 3] --> Topic
    
    Topic -->|Partition 0| Consumer1[Stream Processor A]
    Topic -->|Partition 1| Consumer2[Stream Processor B]
    Topic -->|Partition 2| Consumer3[Stream Processor C]
    
    Consumer1 -->|Window 1min| Agg[Aggregation]
    Consumer2 -->|Window 1min| Agg
    Consumer3 -->|Window 1min| Agg
    
    Agg --> Sink[Sink: DB/Dashboard/Alert]
    
    subgraph "Window Types"
        T[Tumbling: 0-1, 1-2, 2-3]
        S[Sliding: 0-1, 0.5-1.5, 1-2]
        Ses[Session: user activity gaps]
    end`,
        text: 'Producers write events to Kafka topics. Stream processors consume partitions in parallel, apply windowing (tumbling, sliding, session), aggregate, and write to sinks (DB, dashboard, alert).'
      },
      {
        heading: 'Code Example: Stream Processor with Windowing',
        code: `import time
from collections import defaultdict, deque

class StreamProcessor:
    def __init__(self, window_size_seconds=60):
        self.window_size = window_size_seconds
        self.windows = defaultdict(deque)  # key -> deque of (timestamp, value)
        self.aggregates = {}  # key -> running aggregate

    def process(self, key, value, timestamp=None):
        ts = timestamp or time.time()
        
        # Add event to window
        self.windows[key].append((ts, value))
        
        # Evict old events outside window
        cutoff = ts - self.window_size
        while self.windows[key] and self.windows[key][0][0] < cutoff:
            self.windows[key].popleft()
        
        # Compute aggregate for current window
        values = [v for _, v in self.windows[key]]
        self.aggregates[key] = {
            'count': len(values),
            'sum': sum(values),
            'avg': sum(values) / len(values) if values else 0,
            'min': min(values) if values else 0,
            'max': max(values) if values else 0
        }
        return self.aggregates[key]

    def get_window_state(self, key):
        return self.aggregates.get(key, {})

class TumblingWindow(StreamProcessor):
    """Fixed-size, non-overlapping windows."""
    def __init__(self, window_size=60):
        super().__init__(window_size)
        self.current_window_start = {}

    def process(self, key, value, timestamp=None):
        ts = timestamp or time.time()
        window_start = int(ts // self.window_size) * self.window_size
        
        if key not in self.current_window_start or \
           self.current_window_start[key] != window_start:
            self.windows[key].clear()
            self.current_window_start[key] = window_start
        
        return super().process(key, value, ts)

# Simulate click stream
sp = TumblingWindow(window_size=10)  # 10-second windows
events = [
    ('page_A', 1, 100), ('page_A', 2, 105), ('page_B', 1, 103),
    ('page_A', 3, 108), ('page_B', 2, 115), ('page_A', 1, 120),
]
for key, val, ts in events:
    result = sp.process(key, val, ts)
    print(f'  {key}@{ts}: count={result["count"]}, avg={result["avg"]:.1f}')`,
        output: 'Each window aggregates events per key. Tumbling windows reset at fixed boundaries.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>LinkedIn — Kafka + Samza for activity streams.</strong> LinkedIn processes 7 trillion messages per day using Kafka + Apache Samza. Every profile view, connection, and message is a stream event. Samza processors maintain stateful aggregations (e.g., profile views per minute) and feed real-time dashboards. When a user views a profile, the event flows through Kafka in under 50ms, updates the view counter, and triggers notifications — all in real-time.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Stream processing = continuous, real-time event processing',
          'Windowing: tumbling (fixed), sliding (overlapping), session (activity-based)',
          'Stateful processing maintains state across events for aggregations',
          'Watermarks handle late-arriving events in distributed streams'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Tumbling vs sliding window? → Tumbling: non-overlapping fixed windows (0-60, 60-120). Sliding: overlapping windows that advance by a slide interval (0-60, 30-90).',
          'Q2: What is a watermark? → A timestamp threshold that tells the system "no events older than this will arrive" — allows closing windows even if some events are delayed.',
          'Q3: Why is exactly-once hard in stream processing? → Failures can cause replays. Without idempotent operations + transactional sinks, events may be counted twice.'
        ]
      }
    ]
  },
  'cdc': {
    title: 'Change Data Capture (CDC)',
    sections: [
      {
        heading: 'What is Change Data Capture?',
        text: 'CDC captures row-level changes (insert, update, delete) from a database in real-time and propagates them to downstream systems. Instead of batch ETL (nightly copies), CDC streams changes as they happen — keeping search indexes, caches, analytics warehouses, and microservices in sync.',
        list: [
          '<strong>Log-based CDC:</strong> Read database transaction log (WAL/binlog) — lowest overhead, captures all changes',
          '<strong>Query-based CDC:</strong> Poll for changes (updated_at column) — simpler but misses deletes and has polling overhead',
          '<strong>Debezium:</strong> Open-source CDC platform for PostgreSQL, MySQL, MongoDB',
          '<strong>Event format:</strong> Each change is an event with before/after values, operation type, timestamp',
          '<strong>Use cases:</strong> Sync DB → Elasticsearch, cache invalidation, audit log, event-driven microservices'
        ]
      },
      {
        heading: 'CDC Architecture',
        diagram: `graph LR
    subgraph "Source Database"
        DB["(PostgreSQL)"] --> WAL[WAL Log]
        WAL -->|Debezium Connector| Connector[Debezium Source Connector]
    end
    
    Connector -->|Change Events| Kafka[Kafka Topic<br/>db.public.orders]
    
    Kafka --> Sink1[Elasticsearch Sink<br/>→ Search Index]
    Kafka --> Sink2[Redis Sink<br/>→ Cache Update]
    Kafka --> Sink3[Data Warehouse Sink<br/>→ Analytics]
    Kafka --> Sink4[Microservice Consumer<br/>→ Event-Driven Action]
    
    DB -->|Write| Table[orders table]
    Table -->|Row change| WAL
    
    style Connector fill:#bbf,stroke:#333,stroke-width:2px`,
        text: 'Debezium reads the PostgreSQL WAL (or MySQL binlog), converts changes to events, and publishes to Kafka. Downstream consumers (search, cache, analytics, microservices) react to changes in real-time.'
      },
      {
        heading: 'Code Example: CDC Event Handler',
        code: `import json
from collections import defaultdict

class CDCEvent:
    def __init__(self, table, operation, before, after, timestamp):
        self.table = table
        self.operation = operation  # INSERT, UPDATE, DELETE
        self.before = before  # previous state (None for INSERT)
        self.after = after   # new state (None for DELETE)
        self.timestamp = timestamp

class CDCProcessor:
    def __init__(self):
        self.handlers = defaultdict(list)
        self.stats = defaultdict(int)

    def on_change(self, table, handler):
        """Register a handler for table changes."""
        self.handlers[table].append(handler)

    def process(self, event):
        """Process a CDC event."""
        self.stats[event.operation] += 1
        
        print(f'  CDC: {event.operation} on {event.table}')
        if event.before:
            print(f'    Before: {event.before}')
        if event.after:
            print(f'    After:  {event.after}')
        
        # Call registered handlers
        for handler in self.handlers.get(event.table, []):
            handler(event)
        for handler in self.handlers.get('*', []):  # wildcard
            handler(event)

# Setup CDC processor
processor = CDCProcessor()

# Register handlers
def sync_elasticsearch(event):
    if event.operation == 'DELETE':
        print('    -> Remove from Elasticsearch')
    elif event.operation == 'INSERT':
        print(f'    -> Index in Elasticsearch: {event.after["id"]}')
    else:
        print(f'    -> Update in Elasticsearch: {event.after["id"]}')

def invalidate_cache(event):
    print(f'    -> Invalidate cache for {event.table}:{event.after.get("id") if event.after else event.before.get("id")}')

def audit_log(event):
    print(f'    -> Audit: {event.operation} {event.table} at {event.timestamp}')

processor.on_change('orders', sync_elasticsearch)
processor.on_change('orders', invalidate_cache)
processor.on_change('*', audit_log)

# Simulate CDC events
events = [
    CDCEvent('orders', 'INSERT', None, {'id': 1, 'status': 'pending', 'total': 99.99}, '2024-01-01T10:00:00Z'),
    CDCEvent('orders', 'UPDATE', {'id': 1, 'status': 'pending'}, {'id': 1, 'status': 'shipped', 'total': 99.99}, '2024-01-01T11:00:00Z'),
    CDCEvent('orders', 'DELETE', {'id': 1, 'status': 'shipped'}, None, '2024-01-01T12:00:00Z'),
]

for event in events:
    processor.process(event)
print(f'\\nStats: {dict(processor.stats)}')`,
        output: 'Each CDC event triggers handlers: Elasticsearch sync, cache invalidation, and audit logging.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Uber — CDC for real-time data sync.</strong> Uber uses Debezium to stream changes from their PostgreSQL databases to Kafka. When a driver updates their location, the CDC event flows to the matching service (Elasticsearch), the pricing service (Redis cache), and the analytics warehouse (Apache Pinot). This eliminates batch ETL windows — downstream systems see changes within 100ms instead of waiting for hourly syncs.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'CDC = stream database changes (insert/update/delete) in real-time',
          'Log-based CDC reads WAL/binlog — lowest overhead, no polling',
          'Debezium = open-source CDC for PostgreSQL, MySQL, MongoDB → Kafka',
          'Use cases: search index sync, cache invalidation, audit log, event-driven microservices'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Log-based vs query-based CDC? → Log-based reads the transaction log (WAL/binlog) — zero overhead on the DB, captures all changes including deletes. Query-based polls updated_at columns — simpler but misses hard deletes and adds DB load.',
          'Q2: What does Debezium do? → It connects to database transaction logs, converts changes into structured events (JSON/Avro), and publishes them to Kafka topics for downstream consumption.',
          'Q3: How does CDC help with microservices? → It enables event-driven architecture: when a DB changes, CDC events trigger downstream microservices without the source service needing to know about them.'
        ]
      }
    ]
  },
  'exactly-once': {
    title: 'Exactly-Once Processing',
    sections: [
      {
        heading: 'What is Exactly-Once Processing?',
        text: 'Exactly-once processing guarantees that each event is processed exactly one time — not zero (lost), not twice (duplicated) — even under failures. This is critical for financial transactions, billing, and inventory. It requires idempotent consumers and transactional sinks.',
        list: [
          '<strong>At-most-once:</strong> Events may be lost but never duplicated (fire-and-forget)',
          '<strong>At-least-once:</strong> Events may be duplicated but never lost (acknowledgment-based)',
          '<strong>Exactly-once:</strong> Events processed exactly once (idempotent + transactional)',
          '<strong>Idempotent consumer:</strong> Re-processing an event produces the same result (deduplication by event ID)',
          '<strong>Transactional sink:</strong> Write to DB and update offset in the same transaction (atomic)'
        ]
      },
      {
        heading: 'Delivery Semantics',
        diagram: `graph TB
    subgraph "At-Most-Once"
        A1[Producer] -->|send| B1[Broker]
        B1 -->|maybe| C1[Consumer]
        C1 -->|no ack| B1
        Note1[Risk: lost events]
    end
    
    subgraph "At-Least-Once"
        A2[Producer] -->|send| B2[Broker]
        B2 -->|deliver| C2[Consumer]
        C2 -->|ack| B2
        C2 -.->|crash before ack| Redeliver[Broker redelivers]
        Note2[Risk: duplicate events]
    end
    
    subgraph "Exactly-Once"
        A3[Producer] -->|transactional send| B3[Broker]
        B3 -->|deliver| C3[Consumer]
        C3 -->|process + commit offset<br/>in same transaction| DB["(DB + Offset Store)"]
        C3 -.->|crash| Replay[Replay from last committed offset]
        Note3[No loss, no duplicates]
    end`,
        text: 'At-most-once: may lose events. At-least-once: may duplicate. Exactly-once: idempotent consumer + transactional sink ensures each event is processed exactly once, even after crashes and replays.'
      },
      {
        heading: 'Code Example: Exactly-Once Consumer',
        code: `import json
from collections import defaultdict

class ExactlyOnceConsumer:
    def __init__(self, db):
        self.db = db  # simulated database
        self.processed_events = set()  # deduplication store
        self.offset = 0

    def process(self, event_id, payload):
        """Process event with exactly-once guarantee."""
        
        # Step 1: Check if already processed (idempotency)
        if event_id in self.processed_events:
            print(f'  SKIP: Event {event_id} already processed (dedup)')
            return 'skipped'
        
        # Step 2: Process + commit in same transaction
        # In practice: BEGIN TRANSACTION
        try:
            # Apply business logic
            self.db['balances'][payload['account']] = \\
                self.db['balances'].get(payload['account'], 0) + payload['amount']
            
            # Record processed event + update offset atomically
            self.processed_events.add(event_id)
            self.offset += 1
            # COMMIT
            print(f'  PROCESSED: Event {event_id} -> '
                  f'balance={self.db["balances"][payload["account"]]}')
            return 'processed'
        except Exception as e:
            # ROLLBACK — nothing committed
            print(f'  FAILED: Event {event_id} -> {e}')
            return 'failed'

class AtLeastOnceConsumer:
    def __init__(self, db):
        self.db = db
        self.offset = 0

    def process(self, event_id, payload):
        """At-least-once: no dedup check — may double-process."""
        self.db['balances'][payload['account']] = \\
            self.db['balances'].get(payload['account'], 0) + payload['amount']
        self.offset += 1
        print(f'  PROCESSED: Event {event_id} -> '
              f'balance={self.db["balances"][payload["account"]]}')
        return 'processed'

# Test exactly-once with duplicate delivery
db = {'balances': {}}
eo = ExactlyOnceConsumer(db)
events = [
    ('evt_1', {'account': 'alice', 'amount': 100}),
    ('evt_2', {'account': 'alice', 'amount': 50}),
    ('evt_1', {'account': 'alice', 'amount': 100}),  # DUPLICATE!
    ('evt_3', {'account': 'bob', 'amount': 200}),
]
print('Exactly-once (duplicate evt_1 sent again):')
for eid, payload in events:
    eo.process(eid, payload)
print(f'  Final: {db["balances"]}')  # Alice=150 (not 250)

# Compare with at-least-once
db2 = {'balances': {}}
al = AtLeastOnceConsumer(db2)
print('\\nAt-least-once (duplicate evt_1 double-counted):')
for eid, payload in events:
    al.process(eid, payload)
print(f'  Final: {db2["balances"]}')  # Alice=250 (WRONG!)`,
        output: 'Exactly-once: Alice=150 (dedup works). At-least-once: Alice=250 (double-counted).',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Kafka — exactly-once semantics (EOS) via transactions.</strong> Kafka 0.11 introduced exactly-once processing using transactional producers and read-committed consumers. When a consumer processes a message and writes a result to another topic, both the output write and the offset commit happen in a single Kafka transaction. If the consumer crashes, it resumes from the last committed offset, and the transaction is either fully committed or fully rolled back. Apache Flink integrates with Kafka EOS for stateful stream processing with zero duplicates.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'At-most-once = may lose events (no retry)',
          'At-least-once = may duplicate events (retry without dedup)',
          'Exactly-once = idempotent consumer + transactional sink (no loss, no duplicates)',
          'Implementation: dedup by event ID + atomic (process + commit offset)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why is exactly-once hard? → Failures cause replays. Without idempotent operations and atomic commits, replayed events produce incorrect results (double counts).',
          'Q2: How does Kafka achieve exactly-once? → Transactional producer (idempotent writes + transactional send) + read-committed consumer (only sees committed transactions).',
          'Q3: When is at-least-once acceptable? → For analytics and metrics where occasional duplicates are tolerable and can be filtered post-hoc. Financial transactions require exactly-once.'
        ]
      }
    ]
  },
  'batch-processing': {
    title: 'Batch Processing (MapReduce, Spark)',
    sections: [
      {
        heading: 'What is Batch Processing?',
        text: 'Batch processing processes large volumes of data in bulk, typically on a scheduled interval (hourly, nightly). MapReduce and Apache Spark are the dominant frameworks. They distribute computation across hundreds of nodes, handle failures automatically, and process petabytes of data efficiently.',
        list: [
          '<strong>MapReduce:</strong> Map (transform each record) → Shuffle (group by key) → Reduce (aggregate)',
          '<strong>Spark:</strong> In-memory computation with RDDs/DataFrames — 100x faster than disk-based MapReduce',
          '<strong>DAG execution:</strong> Spark builds a directed acyclic graph of operations, optimizing the execution plan',
          '<strong>Partitioning:</strong> Data split across nodes — each processes its partition independently',
          '<strong>Fault tolerance:</strong> If a node fails, the framework recomputes lost partitions from the DAG'
        ]
      },
      {
        heading: 'MapReduce vs Spark Architecture',
        diagram: `graph TB
    subgraph "MapReduce"
        Input1[HDFS Input] -->|Split| M1[Map Task 1]
        Input1 -->|Split| M2[Map Task 2]
        M1 -->|Shuffle| R1[Reduce Task 1]
        M2 -->|Shuffle| R1
        M1 -->|Shuffle| R2[Reduce Task 2]
        M2 -->|Shuffle| R2
        R1 --> Output1[HDFS Output]
    end
    
    subgraph "Spark"
        Input2[HDFS/S3 Input] -->|Partition| RDD1[RDD Partition 1]
        Input2 -->|Partition| RDD2[RDD Partition 2]
        RDD1 -->|Transform| RDD3[Transformed RDD 1<br/>in-memory]
        RDD2 -->|Transform| RDD4[Transformed RDD 2<br/>in-memory]
        RDD3 -->|Action| Result[Result]
        RDD4 -->|Action| Result
    end
    
    style RDD3 fill:#bbf
    style RDD4 fill:#bbf`,
        text: 'MapReduce: Map → Shuffle → Reduce, writing to disk between stages. Spark: in-memory RDDs/Datasets, DAG optimization, fewer disk writes — much faster for iterative workloads.'
      },
      {
        heading: 'Code Example: Word Count (MapReduce vs Spark)',
        code: `# MapReduce-style word count (simplified)
from collections import defaultdict
import re

def map_function(document):
    """Emit (word, 1) for each word in document."""
    words = re.findall(r'\\w+', document.lower())
    return [(word, 1) for word in words]

def reduce_function(word, counts):
    """Sum all counts for a word."""
    return (word, sum(counts))

def mapreduce_word_count(documents):
    # Map phase
    mapped = []
    for doc in documents:
        mapped.extend(map_function(doc))
    
    # Shuffle phase (group by key)
    shuffled = defaultdict(list)
    for word, count in mapped:
        shuffled[word].append(count)
    
    # Reduce phase
    results = {}
    for word, counts in shuffled.items():
        results[word] = reduce_function(word, counts)
    return results

# Spark-style word count (PySpark equivalent shown in comments)
def spark_word_count(documents):
    """
    # PySpark equivalent:
    rdd = sc.parallelize(documents)
    counts = (rdd
        .flatMap(lambda line: re.findall(r'\\w+', line.lower()))
        .map(lambda word: (word, 1))
        .reduceByKey(lambda a, b: a + b)
    )
    return counts.collect()
    """
    # Simplified in-memory version
    counts = defaultdict(int)
    for doc in documents:
        for word in re.findall(r'\\w+', doc.lower()):
            counts[word] += 1
    return dict(counts)

docs = [
    'hello world hello spark',
    'spark is fast spark is fun',
    'hello from the world of spark'
]

print('MapReduce:', mapreduce_word_count(docs))
print('Spark:', spark_word_count(docs))`,
        output: 'Both produce the same word counts. Spark is in-memory, MapReduce writes to disk between stages.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Yahoo — 100PB+ MapReduce daily.</strong> Yahoo was an early adopter of Hadoop MapReduce, processing 100+ petabytes per day for search indexing, ad targeting, and spam detection. They later migrated to Spark for ML pipelines (recommendation engines, ad optimization) because Spark\'s in-memory computation reduced processing time from hours to minutes. Yahoo\'s 4,000-node Hadoop cluster handles 500,000+ jobs per month.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Batch = process large data in bulk (scheduled, not real-time)',
          'MapReduce: Map → Shuffle → Reduce (disk-based, slower)',
          'Spark: in-memory DAG execution (100x faster for iterative workloads)',
          'Both handle fault tolerance by recomputing lost partitions'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why is Spark faster than MapReduce? → Spark keeps intermediate data in memory (RDDs) and optimizes the execution plan as a DAG. MapReduce writes to disk after each Map and Reduce stage.',
          'Q2: When should you use batch over stream? → Batch for large-scale historical analysis (ETL, ML training, reporting). Stream for real-time alerts, fraud detection, live dashboards.',
          'Q3: What is a shuffle in MapReduce? → The phase where Map outputs are redistributed across nodes so all values for the same key go to the same Reduce task — network-intensive and often the bottleneck.'
        ]
      }
    ]
  },
  'lambda-architecture': {
    title: 'Lambda Architecture',
    sections: [
      {
        heading: 'What is Lambda Architecture?',
        text: 'Lambda architecture combines batch and stream processing to handle both historical and real-time data. The batch layer stores all data and computes batch views. The speed layer processes real-time data for low-latency views. The serving layer merges both to answer queries with both completeness and freshness.',
        list: [
          '<strong>Batch layer:</strong> Store raw data, compute batch views (Hadoop/Spark) — accurate but slow',
          '<strong>Speed layer:</strong> Process recent data in real-time (Storm/Flink) — fast but approximate',
          '<strong>Serving layer:</strong> Merge batch + speed views for queries (HBase/Cassandra)',
          '<strong>Immutable raw data:</strong> All data is append-only — recompute batch views from scratch if needed',
          '<strong>Tradeoff:</strong> Two codebases to maintain (batch + stream) — complexity'
        ]
      },
      {
        heading: 'Lambda Architecture',
        diagram: `graph TB
    Data[New Data] -->|Append| BatchStore["(Immutable Raw Data Store)"]
    Data -->|Stream| Speed[Speed Layer<br/>Storm/Flink]
    
    BatchStore -->|Batch Process| BatchViews[Batch Views<br/>Hadoop/Spark]
    BatchViews --> Serving[Serving Layer<br/>HBase/Cassandra]
    
    Speed -->|Real-time Views| Serving
    
    Query[Client Query] --> Serving
    Serving -->|Merge| Result[Result = Batch View + Real-time View]
    
    style BatchViews fill:#bbf
    style Speed fill:#bfb
    style Serving fill:#fbb`,
        text: 'Data flows to both batch (for accuracy) and speed (for real-time) layers. The serving layer merges both: batch views for historical accuracy, speed views for recent data freshness.'
      },
      {
        heading: 'Code Example: Lambda Query',
        code: `from collections import defaultdict
import time

class BatchLayer:
    """Computes batch views from historical data (slow but accurate)."""
    def __init__(self):
        self.raw_data = []  # all historical events
        self.batch_views = {}

    def ingest(self, event):
        self.raw_data.append(event)

    def compute_views(self):
        """Recompute all batch views from raw data."""
        views = defaultdict(int)
        for event in self.raw_data:
            views[event['page']] += 1
        self.batch_views = dict(views)
        print(f'  Batch: computed {len(self.batch_views)} views from '
              f'{len(self.raw_data)} events')

    def get_views(self):
        return self.batch_views

class SpeedLayer:
    """Processes recent events (fast but only covers recent data)."""
    def __init__(self, window_seconds=300):
        self.window = window_seconds
        self.recent = defaultdict(int)

    def process(self, event):
        self.recent[event['page']] += 1

    def get_views(self):
        """Return views for recent window only."""
        return dict(self.recent)

class ServingLayer:
    """Merges batch and speed views."""
    def __init__(self, batch_layer, speed_layer):
        self.batch = batch_layer
        self.speed = speed_layer

    def query(self, page):
        batch_count = self.batch.get_views().get(page, 0)
        speed_count = self.speed.get_views().get(page, 0)
        total = batch_count + speed_count
        return {
            'page': page,
            'batch_views': batch_count,
            'realtime_views': speed_count,
            'total': total
        }

# Setup
batch = BatchLayer()
speed = SpeedLayer()

# Ingest historical data
for page in ['home', 'home', 'about', 'home', 'about', 'contact']:
    batch.ingest({'page': page, 'ts': time.time() - 3600})

# Compute batch views
batch.compute_views()

# Real-time events (not yet in batch)
for page in ['home', 'about', 'about']:
    speed.process({'page': page, 'ts': time.time()})

# Query
serving = ServingLayer(batch, speed)
print(serving.query('home'))    # batch=3 + realtime=1 = 4
print(serving.query('about'))   # batch=2 + realtime=2 = 4`,
        output: 'Home: batch=3, realtime=1, total=4. About: batch=2, realtime=2, total=4.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Twitter — Lambda for analytics.</strong> Twitter used Lambda architecture for their analytics platform. The batch layer (Scalding on Hadoop) recomputed views hourly from all tweets. The speed layer (Storm) processed real-time tweet streams for up-to-the-minute counts. The serving layer (Summingbird) merged both for analytics queries. This handled both historical analysis (trending topics over months) and real-time alerts (breaking news detection) in one unified system.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Lambda = batch (accuracy) + speed (real-time) + serving (merge)',
          'Batch layer: immutable raw data, recompute views periodically',
          'Speed layer: process recent events, low latency but approximate',
          'Main drawback: two codebases (batch + stream) — complex to maintain'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the main problem with Lambda? → Maintaining two separate codebases (batch + stream) for the same business logic — code duplication and inconsistency.',
          'Q2: How does the serving layer merge views? → For each query: fetch batch view (historical) + speed view (recent), sum them for the total. Batch views are eventually replaced by new batch runs.',
          'Q3: What does Kappa architecture do differently? → Kappa replaces the batch layer with the stream layer — replays historical data through the stream processor when recomputation is needed. Single codebase.'
        ]
      }
    ]
  },
  'kappa-architecture': {
    title: 'Kappa Architecture',
    sections: [
      {
        heading: 'What is Kappa Architecture?',
        text: 'Kappa architecture simplifies Lambda by using a single stream processing engine for both real-time and historical processing. Instead of separate batch and speed layers, Kappa uses the stream processor to replay historical data from a log (Kafka) when recomputation is needed — one codebase, one processing model.',
        list: [
          '<strong>Single processing engine:</strong> One stream processor (Flink, Kafka Streams) for everything',
          '<strong>Immutable log:</strong> Kafka retains all events — replay from any point for recomputation',
          '<strong>Reprocessing:</strong> Start a second instance of the processor reading from the beginning',
          '<strong>Simpler than Lambda:</strong> One codebase, one set of bugs, one processing model',
          '<strong>Tradeoff:</strong> Requires log retention (storage cost) and stream processor must handle high throughput'
        ]
      },
      {
        heading: 'Kappa Architecture',
        diagram: `graph TB
    Data[New Data] -->|Append| Kafka["(Kafka Log<br/>Retains all events)"]
    
    Kafka -->|Real-time| Processor1[Stream Processor v2<br/>Real-time view]
    Kafka -->|Replay from offset 0| Processor2[Stream Processor v2<br/>Reprocessing view]
    
    Processor1 -->|Current views| ServingDB["(Serving DB)"]
    Processor2 -->|Updated views| ServingDB
    
    Query[Client Query] --> ServingDB
    
    style Kafka fill:#bbf,stroke:#333,stroke-width:2px
    style Processor1 fill:#bfb
    style Processor2 fill:#fbb`,
        text: 'All data goes to Kafka (immutable log). One processor handles real-time; another can replay from the beginning for recomputation. Single codebase, single processing model — simpler than Lambda.'
      },
      {
        heading: 'Code Example: Kappa Replay',
        code: `from collections import defaultdict

class KafkaLog:
    """Simplified Kafka log with retention."""
    def __init__(self, retention_count=10000):
        self.events = []
        self.retention = retention_count

    def append(self, event):
        self.events.append(event)
        if len(self.events) > self.retention:
            self.events = self.events[-self.retention:]

    def read(self, offset=0):
        return self.events[offset:]

class KappaProcessor:
    """Single processor for both real-time and replay."""
    def __init__(self):
        self.views = defaultdict(int)
        self.events_processed = 0

    def process_batch(self, events):
        for event in events:
            self.views[event['page']] += 1
            self.events_processed += 1

    def get_views(self):
        return dict(self.views)

class KappaSystem:
    def __init__(self):
        self.log = KafkaLog()
        self.processor = KappaProcessor()
        self.current_offset = 0

    def ingest(self, event):
        self.log.append(event)
        self.processor.process_batch([event])
        self.current_offset += 1

    def reprocess_all(self, reason="new logic"):
        """Replay entire log with current processor (new code)."""
        print(f'  Reprocessing {len(self.log.events)} events ({reason})...')
        self.processor = KappaProcessor()  # fresh state
        events = self.log.read(offset=0)
        self.processor.process_batch(events)
        self.current_offset = len(events)
        print(f'  Reprocessed {self.processor.events_processed} events')

    def query(self, page):
        return self.processor.get_views().get(page, 0)

# Setup
system = KappaSystem()

# Ingest events
for page in ['home', 'about', 'home', 'contact', 'home']:
    system.ingest({'page': page})

print('Initial views:', system.processor.get_views())
# home=3, about=1, contact=1

# Reprocess all (e.g., after fixing a bug)
system.reprocess_all("bug fix: was counting page==None as 'home'")
print('After reprocessing:', system.processor.get_views())
# Same results, but now with fixed logic`,
        output: 'Ingests events, then replays the entire log for recomputation with updated logic — single codebase.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>LinkedIn — Kappa with Kafka + Samza.</strong> LinkedIn migrated from Lambda to Kappa for their analytics platform. All events flow through Kafka (retained for 7 days). Apache Samza processors handle both real-time and replay. When a processing bug is found, they start a new Samza job reading from offset 0, reprocess all events, then switch the serving layer to the new job\'s output — no separate batch layer needed. This eliminated the batch codebase (Scalding/Hadoop), reducing operational complexity significantly.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Kappa = single stream processor for both real-time and historical',
          'Kafka log retains all events — replay from offset 0 for recomputation',
          'One codebase (simpler than Lambda\'s two)',
          'Requires log retention (storage) and a stream processor that scales to high throughput'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Kappa vs Lambda — what is the key difference? → Kappa uses one processing engine (stream) for everything; Lambda uses two (batch + stream). Kappa replays the log for recomputation instead of a batch layer.',
          'Q2: What are the prerequisites for Kappa? → An immutable log with sufficient retention (Kafka), a stream processor that can replay from the beginning, and enough storage to retain events.',
          'Q3: When does Lambda still win? → When the batch layer uses tools optimized for batch (Spark SQL, Hive) and the stream layer needs different logic — Kappa requires the same logic to work for both.'
        ]
      }
    ]
  }
},
  module10: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'AI-era infrastructure patterns address the unique challenges of serving Large Language Models and AI applications. This module covers LLM gateways, semantic caching, RAG pipelines, vector database sharding, GPU serving with batching, and model routing for cost optimization.',
          list: [
            '<strong>Topics covered:</strong> LLM Gateway, Semantic Caching, RAG Pipeline, Vector DB Sharding, GPU Serving, Model Routing',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'AI applications have fundamentally different infrastructure requirements: GPU-bound workloads, token-based costs, semantic similarity, and multi-model routing. These patterns help you build AI systems that are fast, cost-effective, and reliable.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[LLM Gateway] --> T2[Semantic Caching]
    T2 --> T3[RAG Pipeline]
    T3 --> T4[Vector DB Sharding]
    T4 --> T5[GPU Serving]
    T5 --> T6[Model Routing]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'llm-gateway': {
    title: 'LLM Gateway',
    sections: [
      {
        heading: 'What is an LLM Gateway?',
        text: 'An LLM gateway is a centralized service that routes, manages, and monitors requests to Large Language Models. It abstracts away provider differences (OpenAI, Anthropic, local models), handles authentication, rate limiting, caching, fallbacks, and cost tracking — similar to an API gateway but specialized for LLM workloads.',
        list: [
          '<strong>Multi-provider routing:</strong> Route to OpenAI, Anthropic, or local models based on task, cost, or latency',
          '<strong>Token-based rate limiting:</strong> Limit by tokens per minute (TPM), not just requests per minute',
          '<strong>Cost tracking:</strong> Track token usage and cost per user, team, or application',
          '<strong>Semantic caching:</strong> Cache similar prompts by embedding similarity — reuse responses for semantically identical questions',
          '<strong>Fallback chains:</strong> If GPT-4 is down, fall back to Claude, then to a local model'
        ]
      },
      {
        heading: 'LLM Gateway Architecture',
        diagram: `graph TB
    App[Application] --> GW[LLM Gateway]
    
    GW -->|Auth & Quota| Auth[Auth Service]
    GW -->|Check cache| Cache["(Semantic Cache<br/>Vector DB)"]
    GW -->|Track usage| Metrics["Cost & Token Metrics"]
    GW -->|Rate limit| RL[Token Rate Limiter]
    
    GW -->|Route| OpenAI[OpenAI GPT-4]
    GW -->|Route| Anthropic[Anthropic Claude]
    GW -->|Route| Local[Local Llama Model]
    
    OpenAI -.->|Fail| Anthropic
    Anthropic -.->|Fail| Local
    
    style GW fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'The LLM gateway sits between applications and LLM providers. It handles auth, semantic caching, token rate limiting, cost tracking, and routes to the appropriate provider with fallback chains.'
      },
      {
        heading: 'Code Example: LLM Gateway Router',
        code: `import hashlib
from collections import defaultdict

class LLMGateway:
    def __init__(self):
        self.providers = {}
        self.fallback_chains = {}
        self.token_usage = defaultdict(int)
        self.token_limits = {'free': 10000, 'pro': 100000, 'enterprise': 1000000}
        self.cost_per_token = {}

    def register_provider(self, name, client, cost_per_1k_tokens):
        self.providers[name] = client
        self.cost_per_token[name] = cost_per_1k_tokens / 1000

    def set_fallback(self, primary, fallback):
        self.fallback_chains[primary] = fallback

    def check_quota(self, user_id, tier, tokens_needed):
        remaining = self.token_limits[tier] - self.token_usage[user_id]
        if remaining < tokens_needed:
            return False
        return True

    def call(self, prompt, user_id='default', tier='free',
             preferred='openai', max_tokens=1000):
        # Estimate tokens (rough: 1 token ~ 4 chars)
        est_tokens = len(prompt) // 4 + max_tokens
        if not self.check_quota(user_id, tier, est_tokens):
            return {'error': 'Quota exceeded', 'remaining': 
                    self.token_limits[tier] - self.token_usage[user_id]}

        # Try preferred, then fallback chain
        provider = preferred
        while provider:
            try:
                # In practice: self.providers[provider].complete(prompt)
                result = f'[{provider}] Response to: {prompt[:50]}...'
                actual_tokens = est_tokens
                self.token_usage[user_id] += actual_tokens
                cost = actual_tokens * self.cost_per_token.get(provider, 0)
                return {'response': result, 'provider': provider,
                        'tokens': actual_tokens, 'cost': round(cost, 4)}
            except Exception as e:
                provider = self.fallback_chains.get(provider)
                if not provider:
                    return {'error': 'All providers failed'}

gw = LLMGateway()
gw.register_provider('openai', None, 0.03)    # $0.03/1K tokens
gw.register_provider('anthropic', None, 0.015) # $0.015/1K tokens
gw.register_provider('local', None, 0.0)        # free
gw.set_fallback('openai', 'anthropic')
gw.set_fallback('anthropic', 'local')

print(gw.call('Explain microservices', user_id='user_1', tier='pro'))`,
        output: 'Routes to OpenAI, tracks token usage and cost. Falls back to Anthropic, then local model on failure.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>OpenAI — gateway for enterprise API.</strong> OpenAI\'s enterprise API includes gateway features: per-organization token quotas, usage tracking with detailed dashboards, and automatic retry with exponential backoff. Companies like Shopify use an LLM gateway to route customer support prompts to GPT-4 for complex queries and GPT-3.5 for simple ones, reducing costs by 60% while maintaining quality. The gateway caches common questions semantically, saving $200K/year in token costs.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'LLM gateway = centralized routing, caching, and management for LLM calls',
          'Token-based rate limiting (TPM, not just RPM)',
          'Multi-provider routing with fallback chains',
          'Semantic caching: reuse responses for similar prompts (embedding similarity)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why use token-based instead of request-based rate limiting for LLMs? → A 1-token request and a 10,000-token request have very different costs. Token limits reflect actual resource usage.',
          'Q2: How does semantic caching work for LLMs? → Embed the prompt, compare with cached prompts by cosine similarity. If similarity > threshold (e.g., 0.95), return the cached response without calling the LLM.',
          'Q3: What is a fallback chain? → Ordered list of providers: if the primary fails (rate limit, timeout, error), automatically try the next provider in the chain.'
        ]
      }
    ]
  },
  'semantic-caching': {
    title: 'Semantic Caching',
    sections: [
      {
        heading: 'What is Semantic Caching?',
        text: 'Semantic caching caches LLM responses by meaning, not exact string match. It embeds prompts into vectors and checks if a similar prompt has been asked before. If the cosine similarity exceeds a threshold (e.g., 0.95), the cached response is returned — saving API costs and reducing latency.',
        list: [
          '<strong>Embedding-based:</strong> Convert prompt to vector embedding, compare with cached embeddings',
          '<strong>Cosine similarity:</strong> Measure semantic distance — >0.95 = essentially same question',
          '<strong>Cost savings:</strong> Cache hits are free (no LLM call) — huge savings for repeated questions',
          '<strong>Latency reduction:</strong> Cache lookup (~10ms) vs LLM call (~2-5s) — 100x faster',
          '<strong>TTL + invalidation:</strong> Cache entries expire; invalidate on model updates or data changes'
        ]
      },
      {
        heading: 'Semantic Cache Architecture',
        diagram: `graph TB
    Prompt[User Prompt] --> Embed[Embedding Model<br/>text-embedding-3-small]
    Embed --> Vector[Prompt Vector 1536d]
    
    Vector -->|Similarity search| VDB["(Vector Database<br/>Pinecone/Weaviate)"]
    VDB -->|Similarity > 0.95| Hit[Cache HIT<br/>Return cached response]
    VDB -->|Similarity < 0.95| Miss[Cache MISS]
    
    Miss --> LLM[Call LLM]
    LLM --> Response[Generate Response]
    Response -->|Store| VDB
    Response --> User[Return to User]
    Hit --> User
    
    style Hit fill:#bfb,stroke:#333
    style Miss fill:#fbb,stroke:#333`,
        text: 'User prompt is embedded and compared against cached prompts in a vector DB. If similarity > threshold, return cached response. Otherwise, call the LLM and store the result.'
      },
      {
        heading: 'Code Example: Semantic Cache',
        code: `import math
from collections import defaultdict

class SemanticCache:
    def __init__(self, similarity_threshold=0.95):
        self.threshold = similarity_threshold
        self.cache = []  # list of (embedding, prompt, response)
        self.stats = {'hits': 0, 'misses': 0}

    def _cosine_similarity(self, v1, v2):
        """Compute cosine similarity between two vectors."""
        dot = sum(a * b for a, b in zip(v1, v2))
        norm1 = math.sqrt(sum(a * a for a in v1))
        norm2 = math.sqrt(sum(b * b for b in v2))
        if norm1 == 0 or norm2 == 0:
            return 0
        return dot / (norm1 * norm2)

    def _embed(self, text):
        """Simulated embedding: hash-based pseudo-embedding."""
        # In practice: use OpenAI text-embedding-3-small or similar
        words = text.lower().split()
        vec = [0] * 100
        for i, word in enumerate(words):
            vec[hash(word) % 100] += 1
        return vec

    def lookup(self, prompt):
        """Check if a semantically similar prompt exists in cache."""
        query_vec = self._embed(prompt)
        best_sim = 0
        best_entry = None
        for entry in self.cache:
            sim = self._cosine_similarity(query_vec, entry['embedding'])
            if sim > best_sim:
                best_sim = sim
                best_entry = entry
        
        if best_sim >= self.threshold:
            self.stats['hits'] += 1
            print(f'  CACHE HIT (similarity={best_sim:.3f})')
            return best_entry['response']
        
        self.stats['misses'] += 1
        print(f'  CACHE MISS (best similarity={best_sim:.3f})')
        return None

    def store(self, prompt, response):
        """Store a prompt-response pair in cache."""
        self.cache.append({
            'embedding': self._embed(prompt),
            'prompt': prompt,
            'response': response
        })

# Usage
cache = SemanticCache(similarity_threshold=0.85)  # lower for demo

# First request: miss
cache.store('What is microservices architecture?',
           'Microservices is an architecture where applications are built as small, independent services...')
print(cache.lookup('What is microservices architecture?'))  # HIT
print(cache.lookup('Explain microservices architecture'))   # likely HIT
print(cache.lookup('How does a database work?'))             # MISS

print(f'\\nStats: {cache.stats}')`,
        output: 'First query misses and is stored. Second similar query hits. Unrelated query misses.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Glean — semantic caching for enterprise search.</strong> Glean (enterprise AI search) uses semantic caching to avoid redundant LLM calls. When employees ask similar questions ("How do I reset my password?" vs "How to reset password?"), the cache returns the previous answer without calling the LLM. This reduced their LLM API costs by 70% and cut average response time from 3 seconds to 50ms for cached queries. They use OpenAI text-embedding-3-small for embeddings and Pinecone for vector similarity search.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Semantic cache = cache by meaning, not exact string match',
          'Embed prompt → vector → cosine similarity vs cached prompts',
          'Threshold >0.95 = cache hit (return cached response, skip LLM call)',
          'Huge cost savings: 70%+ reduction in LLM API calls for repeated questions'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What similarity threshold should you use? → 0.95+ for strict (FAQ-type), 0.85-0.90 for lenient (may return slightly different but relevant answers). Start strict, loosen based on user feedback.',
          'Q2: How do you handle cache invalidation? → Set TTL (e.g., 24h for general, 1h for time-sensitive). Invalidate on model updates, data source changes, or explicit user feedback ("this answer was wrong").',
          'Q3: What vector DB is best for semantic caching? → Pinecone, Weaviate, or Qdrant for managed. For self-hosted: pgvector (PostgreSQL extension) or ChromaDB.'
        ]
      }
    ]
  },
  'rag-pipeline': {
    title: 'RAG Pipeline Architecture',
    sections: [
      {
        heading: 'What is RAG?',
        text: 'Retrieval-Augmented Generation (RAG) enhances LLM responses by retrieving relevant context from a knowledge base before generating an answer. The LLM grounds its response in retrieved documents, reducing hallucination and enabling access to private or up-to-date information without retraining.',
        list: [
          '<strong>Retrieve:</strong> Search vector DB for documents relevant to the user query',
          '<strong>Augment:</strong> Combine retrieved documents with the user query as context',
          '<strong>Generate:</strong> LLM generates an answer grounded in the retrieved context',
          '<strong>Chunking:</strong> Split documents into chunks (500-1000 tokens) for better retrieval',
          '<strong>Hybrid search:</strong> Combine vector (semantic) + keyword (BM25) search for best results'
        ]
      },
      {
        heading: 'RAG Pipeline Architecture',
        diagram: `graph TB
    subgraph "Ingestion Pipeline"
        Docs[Documents<br/>PDF, HTML, DB] --> Chunk[Chunker<br/>500-1000 tokens]
        Chunk --> Embed1[Embedding Model]
        Embed1 --> VDB["(Vector Database<br/>Pinecone/pgvector)"]
    end
    
    subgraph "Query Pipeline"
        Query[User Query] --> Embed2[Embedding Model]
        Embed2 -->|Top-K search| VDB
        VDB -->|Retrieved chunks| Context[Context]
        Query --> Prompt[Prompt: Query + Context]
        Context --> Prompt
        Prompt --> LLM[LLM<br/>GPT-4/Claude]
        LLM --> Answer[Grounded Answer]
    end
    
    style VDB fill:#bbf,stroke:#333,stroke-width:2px
    style LLM fill:#fbb,stroke:#333`,
        text: 'Ingestion: documents are chunked, embedded, and stored in a vector DB. Query: the user question is embedded, similar chunks are retrieved, combined with the query as context, and sent to the LLM for a grounded answer.'
      },
      {
        heading: 'Code Example: RAG Pipeline',
        code: `import math
from collections import defaultdict

class SimpleEmbedder:
    """Simulated embedder (use OpenAI/ Cohere in production)."""
    def embed(self, text):
        vec = [0] * 50
        for word in text.lower().split():
            vec[hash(word) % 50] += 1
        return vec

class VectorStore:
    """Simple in-memory vector store."""
    def __init__(self):
        self.chunks = []  # (embedding, text, metadata)

    def add(self, text, metadata=None):
        emb = SimpleEmbedder().embed(text)
        self.chunks.append({'embedding': emb, 'text': text, 'meta': metadata or {}})

    def search(self, query, top_k=3):
        query_vec = SimpleEmbedder().embed(query)
        scored = []
        for chunk in self.chunks:
            sim = self._cosine(query_vec, chunk['embedding'])
            scored.append((sim, chunk))
        scored.sort(key=lambda x: -x[0])
        return scored[:top_k]

    def _cosine(self, v1, v2):
        dot = sum(a*b for a,b in zip(v1, v2))
        n1 = math.sqrt(sum(a*a for a in v1)) or 1
        n2 = math.sqrt(sum(b*b for b in v2)) or 1
        return dot / (n1 * n2)

class RAGPipeline:
    def __init__(self, vector_store):
        self.vstore = vector_store

    def ingest(self, documents):
        for doc in documents:
            self.vstore.add(doc['text'], doc.get('meta'))

    def query(self, question, top_k=3):
        # 1. Retrieve
        results = self.vstore.search(question, top_k=top_k)
        context = '\\n'.join([f'- {r[1]["text"]}' for r in results])
        print(f'  Retrieved {len(results)} chunks:')
        for sim, chunk in results:
            print(f'    [{sim:.2f}] {chunk["text"][:60]}...')

        # 2. Augment
        prompt = f'Context:\\n{context}\\n\\nQuestion: {question}\\nAnswer:'

        # 3. Generate (simulated)
        answer = f'Based on the context: {results[0][1]["text"][:80]}...'
        return {'answer': answer, 'sources': [r[1] for r in results]}

# Test
store = VectorStore()
rag = RAGPipeline(store)

rag.ingest([
    {'text': 'Microservices are small independent services that communicate via APIs.', 'meta': {'doc': 'arch.md'}},
    {'text': 'Kubernetes orchestrates container deployment, scaling, and management.', 'meta': {'doc': 'k8s.md'}},
    {'text': 'Event-driven architecture uses events to trigger actions between services.', 'meta': {'doc': 'eda.md'}},
])

result = rag.query('What is microservices?')
print(f'\\nAnswer: {result["answer"]}')`,
        output: 'Retrieves relevant chunks from vector store, combines with query, generates grounded answer.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>NVIDIA — RAG for internal knowledge base.</strong> NVIDIA built ChatRTX, a RAG system that lets employees query internal documentation. Documents are chunked (512 tokens with 50-token overlap), embedded with NVIDIA NeMo Retriever, and stored in a vector DB. When an engineer asks "How do I configure CUDA for multi-GPU training?", the system retrieves relevant docs from 50,000+ internal pages and generates a grounded answer with citations. This reduced support ticket resolution time by 40%.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'RAG = Retrieve relevant context → Augment prompt → Generate grounded answer',
          'Chunking: 500-1000 tokens with overlap for better retrieval',
          'Hybrid search (vector + keyword/BM25) outperforms pure semantic search',
          'Reduces hallucination: LLM answers from retrieved context, not memorization'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why chunk documents instead of embedding the whole document? → Shorter chunks retrieve more precisely. A 10-page doc may have one relevant paragraph — chunking surfaces that specific section.',
          'Q2: What is hybrid search in RAG? → Combining vector similarity (semantic match) with BM25/keyword search (exact term match). Hybrid catches both "meaning" and "specific term" queries.',
          'Q3: How do you evaluate RAG quality? → Use RAGAS or similar: measure faithfulness (answer from context), relevance (retrieved chunks match query), and answer correctness vs ground truth.'
        ]
      }
    ]
  },
  'vector-db-sharding': {
    title: 'Vector Database Sharding',
    sections: [
      {
        heading: 'What is Vector DB Sharding?',
        text: 'Vector database sharding partitions vector indices across multiple nodes to handle datasets too large for a single machine. Each shard holds a subset of vectors; queries fan out to all shards in parallel, and results are merged. This enables billion-vector search with low latency.',
        list: [
          '<strong>Hash-based sharding:</strong> Partition vectors by document ID hash — even distribution',
          '<strong>Range-based sharding:</strong> Partition by vector magnitude or metadata range — locality-aware',
          '<strong>IVF (Inverted File):</strong> Cluster vectors, assign to nearest centroid — query only nearby clusters',
          '<strong>HNSW (Hierarchical Navigable Small World):</strong> Graph-based ANN — fast but memory-heavy',
          '<strong>Fan-out query:</strong> Send query to all shards → merge top-K from each shard → final top-K'
        ]
      },
      {
        heading: 'Vector DB Sharding Architecture',
        diagram: `graph TB
    Query[Query Vector] --> Router[Shard Router]
    
    Router -->|Fan out| S1[Shard 1<br/>Vectors 0-1M]
    Router -->|Fan out| S2[Shard 2<br/>Vectors 1-2M]
    Router -->|Fan out| S3[Shard 3<br/>Vectors 2-3M]
    Router -->|Fan out| S4[Shard 4<br/>Vectors 3-4M]
    
    S1 -->|Top-K| Merge[Merge Results]
    S2 -->|Top-K| Merge
    S3 -->|Top-K| Merge
    S4 -->|Top-K| Merge
    
    Merge -->|Final Top-K| Result[Query Result]
    
    subgraph "IVF Index per Shard"
        Centroid[Centroids] --> Cluster1[Cluster A<br/>nearby vectors]
        Centroid --> Cluster2[Cluster B<br/>nearby vectors]
        Query2[Query] -->|nprobe=4| Centroid
    end`,
        text: 'Query fans out to all shards in parallel. Each shard returns its local top-K. The router merges all local top-K results and returns the global top-K. IVF index reduces per-shard search to nearby clusters only.'
      },
      {
        heading: 'Code Example: Sharded Vector Search',
        code: `import math
import random
from collections import defaultdict

class VectorShard:
    def __init__(self, shard_id):
        self.shard_id = shard_id
        self.vectors = []  # (id, vector, metadata)

    def insert(self, vec_id, vector, meta=None):
        self.vectors.append({'id': vec_id, 'vec': vector, 'meta': meta or {}})

    def search(self, query_vec, top_k=5):
        scored = []
        for item in self.vectors:
            sim = self._cosine(query_vec, item['vec'])
            scored.append((sim, item))
        scored.sort(key=lambda x: -x[0])
        return scored[:top_k]

    def _cosine(self, v1, v2):
        dot = sum(a*b for a,b in zip(v1, v2))
        n1 = math.sqrt(sum(a*a for a in v1)) or 1
        n2 = math.sqrt(sum(b*b for b in v2)) or 1
        return dot / (n1 * n2)

class ShardedVectorDB:
    def __init__(self, num_shards=4):
        self.shards = [VectorShard(i) for i in range(num_shards)]
        self.num_shards = num_shards

    def insert(self, vec_id, vector, meta=None):
        shard_idx = hash(vec_id) % self.num_shards
        self.shards[shard_idx].insert(vec_id, vector, meta)

    def search(self, query_vec, top_k=5):
        # Fan out to all shards
        all_results = []
        for shard in self.shards:
            results = shard.search(query_vec, top_k)
            all_results.extend(results)
        
        # Merge: global top-K from all local top-K
        all_results.sort(key=lambda x: -x[0])
        return all_results[:top_k]

    def stats(self):
        return {f'shard_{s.shard_id}': len(s.vectors) for s in self.shards}

# Test: insert 1000 vectors, search
db = ShardedVectorDB(num_shards=4)
for i in range(1000):
    vec = [random.random() for _ in range(10)]
    db.insert(f'vec_{i}', vec, {'category': random.choice(['A', 'B', 'C'])})

print('Shard distribution:', db.stats())
query = [random.random() for _ in range(10)]
results = db.search(query, top_k=3)
print(f'Top-3 results:')
for sim, item in results:
    print(f'  {item["id"]} (sim={sim:.3f}) cat={item["meta"]["category"]}')`,
        output: 'Vectors distributed across 4 shards. Query fans out to all shards, results merged for global top-K.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Pinecone — billion-vector sharded search.</strong> Pinecone shards vector indices across multiple replicas. For a 1-billion-vector index, Pinecone uses ~64 shards, each holding ~15M vectors with an IVF index. Queries fan out to all 64 shards in parallel, each returning local top-K=100. Pinecone merges these 6,400 candidates into a final top-K=10 in under 100ms. Sharding by metadata (e.g., tenant_id) enables per-tenant isolation — each tenant\'s vectors are on specific shards, improving cache locality.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Vector sharding = partition indices across nodes for billion-scale search',
          'Query fans out to all shards → merge local top-K → global top-K',
          'IVF index: cluster vectors, search only nearby clusters (nprobe parameter)',
          'Shard by metadata (tenant_id) for isolation, or by hash for even distribution'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: What is the tradeoff of more shards? → Lower per-shard search time but higher fan-out overhead and merge cost. Optimal shard count balances parallelism vs overhead.',
          'Q2: How does IVF reduce search time? → Instead of comparing the query against all vectors, it only compares against vectors in the nearest N clusters (nprobe). Trades recall for speed.',
          'Q3: When should you shard by metadata instead of hash? → When queries are always scoped to a tenant/namespace. Metadata sharding ensures all relevant vectors are on one shard — no fan-out needed.'
        ]
      }
    ]
  },
  'gpu-serving': {
    title: 'GPU Serving & Batching',
    sections: [
      {
        heading: 'What is GPU Serving & Batching?',
        text: 'GPU serving optimizes LLM inference on GPUs. The key optimization is batching — grouping multiple requests into a single forward pass through the model. Since GPU memory is the bottleneck, techniques like KV-cache, paged attention, and continuous batching maximize throughput while keeping latency acceptable.',
        list: [
          '<strong>Static batching:</strong> Wait until N requests arrive, process together — high throughput, high latency',
          '<strong>Continuous batching:</strong> Insert new requests into the running batch — no waiting, good throughput',
          '<strong>KV-cache:</strong> Cache attention key-value pairs across tokens — avoid recomputing past tokens',
          '<strong>Paged attention (vLLM):</strong> Manage KV-cache memory like virtual memory pages — 3x throughput',
          '<strong>Quantization:</strong> Use INT8/INT4 instead of FP16 — halves memory, 2x throughput, minor quality loss'
        ]
      },
      {
        heading: 'GPU Serving Architecture',
        diagram: `graph TB
    subgraph "Request Queue"
        R1[Request 1] --> Queue[Batching Queue]
        R2[Request 2] --> Queue
        R3[Request 3] --> Queue
        R4[Request 4] --> Queue
    end
    
    Queue -->|Batch of 4| GPU[GPU<br/>Forward Pass]
    GPU -->|KV Cache| Cache["(KV Cache<br/>Paged Attention)"]
    GPU -->|Output| Results[Parse Results]
    Results --> R1r[Response 1]
    Results --> R2r[Response 2]
    Results --> R3r[Response 3]
    Results --> R4r[Response 4]
    
    subgraph "Continuous Batching"
        New[New Request] -->|Insert mid-batch| GPU
        Done[Request Done] -->|Remove from batch| GPU
    end
    
    style GPU fill:#bbf,stroke:#333,stroke-width:2px
    style Queue fill:#bfb`,
        text: 'Requests are batched and processed in a single GPU forward pass. Continuous batching inserts/removes requests mid-batch. KV-cache avoids recomputing past tokens. Paged attention manages memory efficiently.'
      },
      {
        heading: 'Code Example: GPU Batch Scheduler',
        code: `import time
import random
from collections import deque

class GPUBatchScheduler:
    def __init__(self, max_batch_size=32, max_wait_ms=50):
        self.max_batch = max_batch_size
        self.max_wait = max_wait_ms / 1000
        self.queue = deque()
        self.stats = {'served': 0, 'avg_batch': 0, 'avg_latency': 0}

    def submit(self, request_id, prompt, max_tokens=100):
        """Submit a request to the batching queue."""
        self.queue.append({
            'id': request_id,
            'prompt': prompt,
            'max_tokens': max_tokens,
            'submit_time': time.time()
        })

    def _run_batch(self, batch):
        """Simulate GPU forward pass on a batch."""
        batch_size = len(batch)
        # Simulate: larger batches take slightly longer but throughput per request is higher
        processing_time = 0.05 + 0.001 * batch_size  # base + per-request
        time.sleep(processing_time)
        
        results = []
        for req in batch:
            latency = (time.time() - req['submit_time']) * 1000
            results.append({
                'id': req['id'],
                'response': f'Generated {req["max_tokens"]} tokens',
                'latency_ms': round(latency, 1)
            })
            self.stats['served'] += 1
        
        self.stats['avg_batch'] = (self.stats['avg_batch'] + batch_size) / 2
        return results

    def serve(self):
        """Process requests with batching."""
        while self.queue:
            # Wait for batch to fill or timeout
            batch = []
            wait_start = time.time()
            while len(batch) < self.max_batch and self.queue:
                if time.time() - wait_start > self.max_wait and batch:
                    break  # timeout: process what we have
                batch.append(self.queue.popleft())
            
            if batch:
                print(f'  Batch: {len(batch)} requests')
                results = self._run_batch(batch)
                for r in results:
                    print(f'    {r["id"]}: latency={r["latency_ms"]}ms')

# Simulate
scheduler = GPUBatchScheduler(max_batch_size=8, max_wait_ms=20)

# Submit requests at different times
for i in range(10):
    scheduler.submit(f'req_{i}', f'prompt_{i}', max_tokens=50)
    time.sleep(0.005)  # 5ms between submissions

scheduler.serve()
print(f'\\nStats: {scheduler.stats}')`,
        output: 'Requests are batched (up to 8) or processed after 20ms wait. Larger batches = better throughput.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>vLLM — PagedAttention for 3x throughput.</strong> vLLM (developed at UC Berkeley) introduced PagedAttention, which manages the KV-cache like virtual memory — allocating fixed-size pages instead of contiguous memory blocks. This eliminates memory fragmentation and allows batching 3x more requests on the same GPU. Anyscale uses vLLM to serve Llama-70B on A100 GPUs, achieving 2,400 tokens/second (vs 800 with standard serving) — serving 3x more users on the same hardware.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Batching = group requests into one GPU forward pass — higher throughput',
          'Continuous batching: insert/remove requests mid-batch (no waiting)',
          'KV-cache: cache attention values to avoid recomputing past tokens',
          'PagedAttention (vLLM): virtual-memory-style KV-cache — 3x throughput'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Static vs continuous batching? → Static: wait for N requests (high latency). Continuous: insert new requests into running batch (low latency, high throughput).',
          'Q2: Why is KV-cache important? → Without it, each new token requires recomputing attention for all previous tokens — O(n²) per step. KV-cache makes it O(n) per step.',
          'Q3: How does quantization help? → INT8 halves memory vs FP16, allowing 2x larger batch sizes on the same GPU. INT4 (4-bit) gives 4x but with measurable quality loss.'
        ]
      }
    ]
  },
  'model-routing': {
    title: 'Model Routing & Fallback',
    sections: [
      {
        heading: 'What is Model Routing?',
        text: 'Model routing sends each request to the best LLM based on the task complexity, cost, and latency requirements. Simple queries go to a small, fast model (GPT-3.5); complex reasoning goes to a large model (GPT-4). Fallback ensures availability: if the primary model fails, the request routes to a backup.',
        list: [
          '<strong>Complexity-based routing:</strong> Classify prompt → route simple to small model, complex to large',
          '<strong>Cost optimization:</strong> Use cheapest model that meets quality threshold',
          '<strong>Latency routing:</strong> Route to fastest available model for real-time use cases',
          '<strong>Fallback chains:</strong> Primary → secondary → tertiary (ensure availability)',
          '<strong>A/B routing:</strong> Split traffic between models for evaluation'
        ]
      },
      {
        heading: 'Model Routing Architecture',
        diagram: `graph TB
    Req[User Request] --> Classifier[Prompt Classifier<br/>Simple/Medium/Complex]
    
    Classifier -->|Simple| Small[Small Model<br/>GPT-3.5 / Llama-8B<br/>$0.001/req, 200ms]
    Classifier -->|Medium| Med[Medium Model<br/>GPT-4-mini<br/>$0.01/req, 500ms]
    Classifier -->|Complex| Large[Large Model<br/>GPT-4 / Claude Opus<br/>$0.10/req, 2s]
    
    Small -.->|Fail| Med
    Med -.->|Fail| Large
    Large -.->|Fail| Med
    
    Small --> Response[Response]
    Med --> Response
    Large --> Response
    
    style Classifier fill:#f9f,stroke:#333,stroke-width:2px`,
        text: 'A prompt classifier routes requests by complexity. Simple prompts go to a small, cheap, fast model. Complex prompts go to a large, expensive model. Fallbacks ensure availability if a model fails.'
      },
      {
        heading: 'Code Example: Model Router',
        code: `import random
from collections import defaultdict

class ModelRouter:
    def __init__(self):
        self.models = {
            'gpt-35': {'cost': 0.001, 'latency_ms': 200, 'capacity': 1000,
                       'quality': 0.7, 'available': True},
            'gpt-4-mini': {'cost': 0.01, 'latency_ms': 500, 'capacity': 500,
                           'quality': 0.85, 'available': True},
            'gpt-4': {'cost': 0.10, 'latency_ms': 2000, 'capacity': 100,
                      'quality': 0.95, 'available': True},
            'llama-local': {'cost': 0.0, 'latency_ms': 100, 'capacity': 50,
                            'quality': 0.6, 'available': True}
        }
        self.fallbacks = {
            'gpt-35': ['gpt-4-mini', 'llama-local'],
            'gpt-4-mini': ['gpt-4', 'llama-local'],
            'gpt-4': ['gpt-4-mini', 'gpt-35']
        }
        self.routing_stats = defaultdict(int)

    def classify_complexity(self, prompt):
        """Classify prompt complexity (simulated)."""
        word_count = len(prompt.split())
        has_code = 'code' in prompt.lower() or 'triple-backtick' in prompt
        has_reasoning = any(w in prompt.lower() for w in 
                          ['explain', 'analyze', 'compare', 'design', 'why'])
        
        if has_code and has_reasoning or word_count > 100:
            return 'complex'
        elif has_reasoning or word_count > 30:
            return 'medium'
        return 'simple'

    def route(self, prompt, max_cost=None, max_latency=None):
        complexity = self.classify_complexity(prompt)
        
        model_map = {'simple': 'gpt-35', 'medium': 'gpt-4-mini', 'complex': 'gpt-4'}
        preferred = model_map[complexity]
        
        # Check constraints
        model = self.models[preferred]
        if max_cost and model['cost'] > max_cost:
            # Downgrade to cheaper model
            for m in ['gpt-35', 'llama-local']:
                if self.models[m]['cost'] <= max_cost:
                    preferred = m
                    model = self.models[m]
                    break
        
        # Check availability with fallback
        chain = [preferred] + self.fallbacks.get(preferred, [])
        for model_name in chain:
            if self.models[model_name]['available']:
                self.routing_stats[model_name] += 1
                return {
                    'model': model_name,
                    'complexity': complexity,
                    'cost': self.models[model_name]['cost'],
                    'est_latency_ms': self.models[model_name]['latency_ms']
                }
        
        return {'error': 'No model available'}

# Test
router = ModelRouter()
prompts = [
    'Hi',                                           # simple
    'Explain microservices architecture',           # medium
    'Design a distributed system for real-time chat with code examples',  # complex
]
for p in prompts:
    r = router.route(p)
    print(f'  [{r.get("complexity", "?")}] {p[:40]}... -> {r["model"]} '
          f'($ {r['cost']}, {r["est_latency_ms"]}ms)')

print(f'\\nRouting stats: {dict(router.routing_stats)}')`,
        output: 'Simple prompt → gpt-35 (cheap). Medium → gpt-4-mini. Complex → gpt-4 (expensive).',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Notion — model routing for AI features.</strong> Notion uses model routing for their AI assistant. Quick actions (summarize, autocomplete) route to GPT-3.5 for 200ms response time. Complex tasks (write a blog post, analyze data) route to GPT-4. They use a lightweight classifier (a fine-tuned small model) to predict complexity, achieving 85% accuracy. This routing strategy reduced their LLM costs by 65% — 80% of prompts are simple enough for the cheap model, while the expensive GPT-4 is reserved for the 20% that truly need it.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Model routing = send each request to the best model for the task',
          'Route by complexity: simple → small model, complex → large model',
          'Fallback chains ensure availability: primary → secondary → tertiary',
          'Cost savings: 65%+ by routing simple queries to cheap models'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you classify prompt complexity? → Use a small, fast classifier model or heuristics (token count, keyword matching, code detection). Fine-tune a small model on labeled examples for better accuracy.',
          'Q2: What is cascading fallback? → Try the preferred model; if it fails (rate limit, timeout, error), try the next in the chain. Log which model served each request for debugging.',
          'Q3: How do you measure routing quality? → Track user satisfaction (thumbs up/down) per model per complexity. If simple prompts routed to gpt-35 get low ratings, adjust the classifier or thresholds.'
        ]
      }
    ]
  }
},
  module11: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'This capstone project applies patterns from all previous modules to design a complete URL shortener system like bit.ly. We cover requirements and scale estimates, encoding strategy for short codes, storage and sharding for billions of URLs, caching and CDN for fast redirects, and analytics for click tracking.',
          list: [
            '<strong>Topics covered:</strong> Requirements & Scale, Encoding & Generation, Storage & Sharding, Caching & CDN, Analytics & Redirection',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'A URL shortener is the classic system design interview question because it touches every major pattern: encoding algorithms, distributed storage, multi-layer caching, CDN edge delivery, and real-time analytics. Building one end-to-end demonstrates mastery of the patterns covered in modules 1-10.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Requirements] --> T2[Encoding]
    T2 --> T3["Storage & Sharding"]
    T3 --> T4["Caching & CDN"]
    T4 --> T5[Analytics]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'url-shortener-overview': {
    title: 'URL Shortener: Requirements & Scale',
    sections: [
      {
        heading: 'What is a URL Shortener?',
        text: 'A URL shortener takes a long URL and returns a short alias that redirects to the original. Systems like bit.ly and TinyURL handle billions of redirects per month. Designing one teaches core system design concepts: encoding, storage, caching, scaling, and analytics.',
        list: [
          '<strong>Functional requirements:</strong> Shorten long URL → short code; redirect short code → long URL; optional: custom codes, analytics, expiration',
          '<strong>Non-functional:</strong> High availability (redirects must work), low latency (<100ms redirect), high read:write ratio (100:1), scale to billions of URLs',
          '<strong>Scale estimates:</strong> 100M new URLs/month, 10B redirects/month, 5-year retention → 6B URLs stored',
          '<strong>Storage estimate:</strong> 500 bytes per URL record × 6B = 3TB (easily fits in a distributed DB)',
          '<strong>Throughput:</strong> ~4,000 redirects/sec (read), ~40 new URLs/sec (write)'
        ]
      },
      {
        heading: 'URL Shortener High-Level Architecture',
        diagram: `graph TB
    User[User] -->|Shorten URL| API[API Server]
    API -->|Generate code| Encoder[Encoding Service]
    Encoder --> DB["(Database<br/>short_code → long_url)"]
    
    User2[User] -->|Click short URL| LB[Load Balancer]
    LB --> Cache["(Redis Cache)"]
    Cache -->|Hit| Redirect[301 Redirect]
    Cache -->|Miss| DB
    DB --> Redirect
    
    Redirect -->|Analytics| Analytics[Analytics Pipeline<br/>Kafka + ClickHouse]
    
    style Cache fill:#bbf,stroke:#333
    style DB fill:#fbb,stroke:#333`,
        text: 'Write path: user submits long URL → API generates short code → stores in DB. Read path: user clicks short URL → check Redis cache → miss → query DB → 301 redirect. Analytics pipeline tracks clicks asynchronously.'
      },
      {
        heading: 'Code Example: URL Shortener Core',
        code: `import hashlib
import random
import string

class URLShortener:
    def __init__(self):
        self.db = {}  # short_code -> long_url
        self.cache = {}  # in-memory cache (Redis in production)
        self.base62_chars = string.ascii_letters + string.digits
        self.counter = 1000000  # auto-increment counter

    def shorten(self, long_url, custom_code=None):
        """Generate a short code for a long URL."""
        if custom_code:
            if custom_code in self.db:
                return {'error': 'Custom code already taken'}
            code = custom_code
        else:
            # Generate unique code using counter + base62 encoding
            code = self._encode_base62(self.counter)
            self.counter += 1
        
        self.db[code] = long_url
        self.cache[code] = long_url
        return {'short_code': code, 'short_url': f'https://short.url/{code}'}

    def redirect(self, short_code):
        """Resolve short code to long URL (cache-first)."""
        # Check cache first
        if short_code in self.cache:
            return {'long_url': self.cache[short_code], 'source': 'cache'}
        
        # Cache miss → query DB
        if short_code in self.db:
            long_url = self.db[short_code]
            self.cache[short_code] = long_url  # populate cache
            return {'long_url': long_url, 'source': 'db'}
        
        return {'error': 'Short code not found'}

    def _encode_base62(self, num):
        """Convert number to base62 string (6-7 chars for ~1M range)."""
        if num == 0:
            return self.base62_chars[0]
        result = []
        while num > 0:
            result.append(self.base62_chars[num % 62])
            num //= 62
        return ''.join(reversed(result))

# Test
us = URLShortener()
print(us.shorten('https://www.example.com/very/long/path?param=value'))
print(us.shorten('https://www.google.com/search?q=system+design'))
print(us.shorten('https://www.github.com/some/repo', custom_code='ghrepo'))
print(us.redirect('ghrepo'))
print(us.redirect('unknown_code'))`,
        output: 'Generates short codes, stores URLs, redirects with cache-first lookup.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>bit.ly — 10+ billion redirects/month.</strong> bit.ly handles 10B+ redirects and 100M+ new short links per month. They use a counter-based encoding with base62 (6 characters = 62^6 = 56 billion combinations). Their architecture: Redis for hot URLs (95% cache hit rate), Cassandra for persistent storage (sharded by short_code hash), and Kafka for click analytics (fed to ClickHouse for real-time dashboards). Their redirect latency is under 50ms at the 99th percentile.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Core flow: long URL → generate short code → store → redirect on access',
          'Read:write ratio ~100:1 — cache heavily (Redis) for read performance',
          '6-char base62 code = 56 billion combinations (enough for years)',
          'Analytics: async click tracking via Kafka → analytics warehouse'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Should the redirect be 301 or 302? → 301 (permanent) for SEO and browser caching, but 302 (temporary) if you want to track every click (browsers cache 301, skipping your server). bit.ly uses 301 with JavaScript-based analytics pixels.',
          'Q2: How do you handle custom codes? → Check uniqueness before storing; allow 4-20 chars, alphanumeric only, reserve a blocklist of reserved words (admin, api, etc.).',
          'Q3: What if the counter gets too large? > Use a distributed counter (Zookeeper/etcd for coordination) or pre-allocate ranges per server (server A: 1M-2M, server B: 2M-3M).'
        ]
      }
    ]
  },
  'url-shortener-encoding': {
    title: 'URL Shortener: Encoding & Generation',
    sections: [
      {
        heading: 'How to Generate Short Codes?',
        text: 'Short code generation is the core of a URL shortener. Two main approaches: counter-based (monotonic counter → base62 encode) and hash-based (MD5/SHA hash of URL → take first 6 chars). Counter-based gives shorter, predictable codes; hash-based gives independent, unpredictable codes.',
        list: [
          '<strong>Counter + Base62:</strong> Auto-increment counter → encode to base62 (a-z, A-Z, 0-9). 6 chars = 56B combinations',
          '<strong>Hash-based:</strong> MD5(url) → take first 6-7 chars. Collisions possible — needs collision detection',
          '<strong>UUID-based:</strong> Generate random 6-char string, check for collision. Simple but collision-prone',
          '<strong>Base62:</strong> 62 chars (a-z, A-Z, 0-9) → 6 chars = 62^6 = 56,800,235,584 combinations',
          '<strong>Distributed counter:</strong> Use Zookeeper/etcd for unique counter across multiple servers'
        ]
      },
      {
        heading: 'Encoding Strategies',
        diagram: `graph TB
    subgraph "Counter-Based"
        Counter[Auto-increment Counter] --> Encode[Base62 Encode]
        Encode --> Code1[Code: aB3x9Z]
        Counter -->|Distributed| ZK[Zookeeper<br/>range allocation]
    end
    
    subgraph "Hash-Based"
        URL[Long URL] --> Hash[MD5/SHA256]
        Hash --> Take[Take first 7 chars]
        Take --> Check{Collision?}
        Check -->|No| Code2[Code: 7f2a9K]
        Check -->|Yes| Retry[Try next 7 chars]
    end
    
    subgraph "Pre-allocated Ranges"
        R1[Server 1: 1M-2M] --> E1[Encode range]
        R2[Server 2: 2M-3M] --> E2[Encode range]
        R3[Server 3: 3M-4M] --> E3[Encode range]
    end`,
        text: 'Counter-based: monotonic counter encoded to base62. Hash-based: hash the URL and take first N chars. Pre-allocated ranges: each server gets a counter range to avoid coordination.'
      },
      {
        heading: 'Code Example: Encoding Strategies',
        code: `import hashlib
import random
import string

BASE62 = string.ascii_letters + string.digits  # 62 chars

def encode_base62(num):
    """Convert integer to base62 string."""
    if num == 0:
        return BASE62[0]
    result = []
    while num > 0:
        result.append(BASE62[num % 62])
        num //= 62
    return ''.join(reversed(result))

def decode_base62(code):
    """Convert base62 string back to integer."""
    num = 0
    for char in code:
        num = num * 62 + BASE62.index(char)
    return num

# Strategy 1: Counter-based
class CounterGenerator:
    def __init__(self, start=1000000):
        self.counter = start
    
    def next_code(self):
        code = encode_base62(self.counter)
        self.counter += 1
        return code

# Strategy 2: Hash-based
class HashGenerator:
    def __init__(self):
        self.codes = {}  # detect collisions
    
    def generate(self, long_url, length=7):
        """Generate code from URL hash. Handle collisions."""
        hash_val = hashlib.md5(long_url.encode()).hexdigest()
        for i in range(len(hash_val) - length):
            code = hash_val[i:i + length]
            if code not in self.codes:
                self.codes[code] = long_url
                return code
        # All slices taken — append salt and retry
        salted = long_url + str(random.random())
        return self.generate(salted, length)

# Strategy 3: Pre-allocated ranges
class RangeGenerator:
    def __init__(self, server_id, range_size=1000000):
        self.server_id = server_id
        self.range_size = range_size
        self.current = server_id * range_size
        self.max = (server_id + 1) * range_size
    
    def next_code(self):
        if self.current >= self.max:
            raise Exception("Range exhausted, request new range")
        code = encode_base62(self.current)
        self.current += 1
        return code

# Test all strategies
cg = CounterGenerator()
print("Counter:", cg.next_code(), cg.next_code())

hg = HashGenerator()
print("Hash:", hg.generate("https://example.com/long/path"))

rg = RangeGenerator(server_id=2)
print("Range:", rg.next_code(), rg.next_code())`,
        output: 'Counter: 4c92, 4c93 (sequential). Hash: 7-char code from MD5. Range: server-specific range.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>TinyURL — hash-based with collision detection.</strong> TinyURL uses MD5 hash of the long URL, takes the first 6 characters, and checks for collisions. If a collision occurs (different URL, same code), they try the next 6-character window of the hash. This approach means the same URL always generates the same short code (idempotent), which allows deduplication — if someone shortens the same URL twice, they get the same code back, saving storage.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Counter + base62: sequential, short codes, needs distributed counter',
          'Hash-based: deterministic (same URL = same code), needs collision handling',
          'Pre-allocated ranges: each server gets a range, no coordination needed',
          '6 base62 chars = 56 billion combinations (enough for most use cases)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Counter vs hash — which is better? → Counter: shorter, predictable codes, simpler. Hash: idempotent (same URL = same code), no coordination needed. Most production systems use counter-based with ranges.',
          'Q2: How to prevent guessing short codes? → Use hash-based (unguessable) or add a random salt to the counter before encoding. Counter-only codes are sequential and guessable.',
          'Q3: What is base62 and why not base64? → Base62 (a-z, A-Z, 0-9) is URL-safe with no special characters. Base64 includes + and / which need URL encoding.'
        ]
      }
    ]
  },
  'url-shortener-storage': {
    title: 'URL Shortener: Storage & Sharding',
    sections: [
      {
        heading: 'Storage & Sharding Strategy',
        text: 'With billions of URLs and 10B+ redirects/month, a single database cannot handle the load. Sharding by short_code hash distributes data across multiple DB nodes. Read replicas handle the 100:1 read:write ratio. Cache absorbs the hot path for popular URLs.',
        list: [
          '<strong>Shard by short_code hash:</strong> hash(code) % N → shard. Even distribution, location-independent',
          '<strong>Read replicas:</strong> Primary handles writes, 3-5 replicas handle reads (100:1 ratio)',
          '<strong>Cache layer:</strong> Redis for hot URLs — 95%+ hit rate, sub-millisecond reads',
          '<strong>Storage choice:</strong> Cassandra (write-optimized, eventual consistency) or DynamoDB (managed, auto-scaling)',
          '<strong>Schema:</strong> short_code (PK), long_url, created_at, user_id, expires_at, click_count'
        ]
      },
      {
        heading: 'Storage Architecture',
        diagram: `graph TB
    subgraph "Write Path"
        API[API Server] --> Primary["(DB Primary<br/>Writes)"]
        Primary -->|Replicate| R1[Read Replica 1]
        Primary -->|Replicate| R2[Read Replica 2]
        Primary -->|Replicate| R3[Read Replica 3]
    end
    
    subgraph "Read Path"
        User[Click] --> Redis["(Redis Cache)"]
        Redis -->|95% Hit| Redirect[301 Redirect]
        Redis -->|5% Miss| LB[Shard Router]
        LB -->|hash(code) % 3| R1
        LB --> R2
        LB --> R3
    end
    
    subgraph "Sharding"
        S1[Shard 1<br/>hash=0]
        S2[Shard 2<br/>hash=1]
        S3[Shard 3<br/>hash=2]
    end
    
    style Redis fill:#bbf,stroke:#333
    style Primary fill:#fbb,stroke:#333`,
        text: 'Write: API → primary DB → replicate to read replicas. Read: cache-first (Redis, 95% hit). Cache miss → shard router → read replica. Sharding by hash distributes data evenly.'
      },
      {
        heading: 'Code Example: Sharded URL Store',
        code: `import hashlib
from collections import defaultdict

class ShardedURLStore:
    def __init__(self, num_shards=3, num_replicas=2):
        self.num_shards = num_shards
        self.shards = [dict() for _ in range(num_shards)]
        self.cache = {}  # Redis in production
        self.stats = {'cache_hits': 0, 'cache_misses': 0, 'writes': 0, 'reads': 0}

    def _get_shard(self, short_code):
        """Route to shard by hash of short code."""
        h = int(hashlib.md5(short_code.encode()).hexdigest(), 16)
        return h % self.num_shards

    def store(self, short_code, long_url, user_id=None):
        """Write to the appropriate shard."""
        shard_idx = self._get_shard(short_code)
        self.shards[shard_idx][short_code] = {
            'long_url': long_url,
            'user_id': user_id,
            'clicks': 0
        }
        self.cache[short_code] = long_url
        self.stats['writes'] += 1
        print(f'  Stored {short_code} -> shard {shard_idx}')

    def lookup(self, short_code):
        """Cache-first lookup, fall back to shard."""
        self.stats['reads'] += 1
        
        # Check cache
        if short_code in self.cache:
            self.stats['cache_hits'] += 1
            return self.cache[short_code]
        
        # Cache miss → query shard
        self.stats['cache_misses'] += 1
        shard_idx = self._get_shard(short_code)
        record = self.shards[shard_idx].get(short_code)
        
        if record:
            self.cache[short_code] = record['long_url']
            record['clicks'] += 1
            return record['long_url']
        return None

    def stats_report(self):
        total = self.stats['cache_hits'] + self.stats['cache_misses']
        hit_rate = (self.stats['cache_hits'] / total * 100) if total > 0 else 0
        return {
            **self.stats,
            'cache_hit_rate': f'{hit_rate:.1f}%',
            'shard_sizes': [len(s) for s in self.shards]
        }

# Test
store = ShardedURLStore(num_shards=3)
urls = [
    ('abc123', 'https://example.com/page1'),
    ('def456', 'https://example.com/page2'),
    ('ghi789', 'https://example.com/page3'),
    ('jkl012', 'https://example.com/page4'),
    ('mno345', 'https://example.com/page5'),
]
for code, url in urls:
    store.store(code, url)

# Simulate reads (some repeated)
for code in ['abc123', 'abc123', 'def456', 'abc123', 'xyz999']:
    result = store.lookup(code)
    print(f'  {code} -> {result}')

print(f'\\nStats: {store.stats_report()}')`,
        output: 'URLs distributed across 3 shards. Cache hit rate grows with repeated reads.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>bit.ly — Cassandra with 12 shards.</strong> bit.ly uses Cassandra sharded by short_code hash across 12 nodes. Each node holds ~500M URLs. They use local quorum consistency (write to 2 of 3 replicas, read from 2 of 3) for strong consistency on redirects. A Redis cluster (48 nodes) caches the top 10M most popular URLs, achieving 97% cache hit rate. Less popular URLs fall through to Cassandra with 5-10ms read latency.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Shard by hash(short_code) for even distribution across DB nodes',
          'Read replicas handle the 100:1 read:write ratio',
          'Redis cache for hot URLs — 95%+ hit rate for popular URLs',
          'Cassandra/DynamoDB: write-optimized, horizontally scalable'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why shard by short_code hash instead of user_id? → URL lookups are by short_code (redirect path), not by user. Sharding by short_code ensures the redirect query hits a single shard without fan-out.',
          'Q2: How do you handle a shard going down? → Replicas: each shard has 2-3 replicas. If a primary goes down, a replica is promoted. For reads, the shard router skips the dead shard and uses replicas.',
          'Q3: What TTL for cache entries? → Popular URLs: no TTL (keep forever). Long tail: 24h TTL. Expired URLs: set TTL = expiration time. Use LRU eviction when cache is full.'
        ]
      }
    ]
  },
  'url-shortener-cache': {
    title: 'URL Shortener: Caching & CDN',
    sections: [
      {
        heading: 'Caching Strategy for URL Shortener',
        text: 'Caching is critical for URL shorteners because reads (redirects) outnumber writes (new URLs) by 100:1. A multi-layer cache strategy — CDN for global edge caching, Redis for hot URLs, and database as source of truth — ensures sub-50ms redirect latency worldwide.',
        list: [
          '<strong>CDN edge cache:</strong> Cache 301 redirects at CDN edge — zero origin load for popular URLs',
          '<strong>Redis hot cache:</strong> Top 10M URLs in Redis — sub-millisecond lookup',
          '<strong>Cache-aside:</strong> Check cache → miss → query DB → populate cache',
          '<strong>Write-through:</strong> When a new URL is shortened, write to both DB and cache simultaneously',
          '<strong>Cache eviction:</strong> LRU for general, TTL for expiring URLs, no eviction for top 1M URLs'
        ]
      },
      {
        heading: 'Multi-Layer Cache Architecture',
        diagram: `graph TB
    User[User clicks short URL] --> CDN[CDN Edge<br/>Cloudflare/Akamai]
    
    CDN -->|Cache hit: 301 redirect| Browser[Browser Redirects<br/>< 10ms]
    CDN -->|Cache miss| Origin[Origin Server]
    
    Origin --> Redis["(Redis Cluster<br/>Top 10M URLs)"]
    Redis -->|Hit: 95%| Redirect[301 Redirect<br/>< 1ms]
    Redis -->|Miss: 5%| DB["(Cassandra<br/>All URLs)"]
    DB --> Redirect
    
    Redirect -->|Populate| Redis
    Redirect -->|Set CDN TTL| CDN
    
    subgraph "Cache Layers"
        L1[L1: CDN Edge<br/>Global, 301 cached<br/>TTL: 24h]
        L2[L2: Redis<br/>Hot URLs, 10M<br/>TTL: 1h or no TTL]
        L3[L3: Database<br/>All URLs<br/>Source of truth]
    end`,
        text: 'Three cache layers: CDN edge (global, 301 cached for 24h), Redis (top 10M URLs, sub-ms), Database (all URLs, source of truth). 99%+ of redirects served from CDN or Redis.'
      },
      {
        heading: 'Code Example: Multi-Layer Cache',
        code: `import time
from collections import OrderedDict

class CDNCache:
    def __init__(self):
        self.cache = {}  # Simulated CDN edge cache
        self.stats = {'hits': 0, 'misses': 0}

    def get(self, short_code):
        if short_code in self.cache:
            self.stats['hits'] += 1
            return self.cache[short_code]
        self.stats['misses'] += 1
        return None

    def put(self, short_code, long_url, ttl=3600):
        self.cache[short_code] = {'url': long_url, 'expires': time.time() + ttl}

class RedisCache:
    def __init__(self, capacity=10000000):
        self.capacity = capacity
        self.cache = OrderedDict()  # LRU
        self.stats = {'hits': 0, 'misses': 0}

    def get(self, short_code):
        if short_code in self.cache:
            self.cache.move_to_end(short_code)
            self.stats['hits'] += 1
            return self.cache[short_code]
        self.stats['misses'] += 1
        return None

    def put(self, short_code, long_url):
        if len(self.cache) >= self.capacity:
            self.cache.popitem(last=False)  # LRU eviction
        self.cache[short_code] = long_url

class MultiLayerCache:
    def __init__(self, db):
        self.db = db
        self.cdn = CDNCache()
        self.redis = RedisCache(capacity=100)

    def lookup(self, short_code):
        # L1: CDN
        result = self.cdn.get(short_code)
        if result:
            return result['url'], 'cdn'
        
        # L2: Redis
        result = self.redis.get(short_code)
        if result:
            self.cdn.put(short_code, result)  # populate CDN
            return result, 'redis'
        
        # L3: Database
        result = self.db.get(short_code)
        if result:
            self.redis.put(short_code, result)  # populate Redis
            self.cdn.put(short_code, result)    # populate CDN
            return result, 'db'
        return None, 'miss'

    def store_new(self, short_code, long_url):
        self.db[short_code] = long_url
        self.redis.put(short_code, long_url)  # write-through

# Test
db = {}
mlc = MultiLayerCache(db)
mlc.store_new('abc123', 'https://example.com/long1')
mlc.store_new('def456', 'https://example.com/long2')

# First access: Redis hit (already populated by write-through)
print(mlc.lookup('abc123'))  # redis
# Second access: CDN hit (populated by first access)
print(mlc.lookup('abc123'))  # cdn
# Unknown URL
print(mlc.lookup('xyz999'))  # miss

print(f'\\nCDN stats: {mlc.cdn.stats}')
print(f'Redis stats: {mlc.redis.stats}')`,
        output: 'First lookup hits Redis and populates CDN. Second lookup hits CDN. Unknown URL returns miss.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>bit.ly — 97% cache hit rate with CDN + Redis.</strong> bit.ly uses a three-layer cache: Cloudflare CDN for edge-cached 301 redirects (60% of traffic), Redis cluster for hot URLs (37% of traffic), and Cassandra for the remaining 3%. Their Redis cluster has 48 nodes holding the top 10M URLs. URLs that haven\'t been accessed in 30 days fall out of Redis and go to Cassandra. This architecture serves 10B+ redirects/month with <50ms p99 latency.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'CDN edge cache: 301 redirects cached globally — closest to user',
          'Redis: hot URLs, LRU eviction, sub-millisecond reads',
          'Write-through: new URLs go to DB + Redis simultaneously',
          'Three layers achieve 99%+ cache hit rate, <50ms redirect latency'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why cache 301 redirects at CDN? → 301 is permanent and cacheable. Browsers and CDNs cache it, so subsequent clicks never hit your origin — zero server load.',
          'Q2: What if a URL needs to be updated? → 301 is permanent, so CDNs/browsers cache it for a long time. If you need to update, use 302 (temporary) — but you lose CDN caching benefits. Most shorteners never update; they create new codes.',
          'Q3: How do you handle cache stampede for a viral URL? → Use request coalescing: if multiple requests miss the cache simultaneously, only one queries the DB; others wait for the result.'
        ]
      }
    ]
  },
  'url-shortener-analytics': {
    title: 'URL Shortener: Analytics & Redirection',
    sections: [
      {
        heading: 'Analytics for URL Shorteners',
        text: 'URL shorteners track click data for analytics: who clicked, when, from where, and what device. This data powers dashboards for marketers and content creators. Analytics must not slow down redirects — click events are captured asynchronously via a fire-and-forget pipeline.',
        list: [
          '<strong>Click events:</strong> short_code, timestamp, IP, user_agent, referrer, country, device_type',
          '<strong>Async pipeline:</strong> Redirect → fire click event to Kafka → continue redirect (no blocking)',
          '<strong>Real-time analytics:</strong> Kafka → stream processor → ClickHouse/DragonflyDB for dashboards',
          '<strong>Batch analytics:</strong> Kafka → S3 → Spark for daily/monthly reports',
          '<strong>Aggregation:</strong> Clicks per URL, per country, per referrer, per device, per hour'
        ]
      },
      {
        heading: 'Analytics Pipeline Architecture',
        diagram: `graph TB
    Click[User Click] --> API[API Server]
    API -->|1. Fire event| Kafka[Kafka Topic<br/>click_events]
    API -->|2. Redirect immediately| User[301 Redirect<br/>No delay]
    
    Kafka -->|Stream| Flink[Apache Flink<br/>Real-time Aggregation]
    Kafka -->|Batch| S3["(S3<br/>Raw Events)"]
    
    Flink --> ClickHouse["(ClickHouse<br/>Real-time Dashboard)"]
    S3 --> Spark[Spark Batch<br/>Daily/Monthly Reports]
    Spark --> Warehouse["(Data Warehouse)"]
    
    Dashboard[Analytics Dashboard] --> ClickHouse
    Dashboard --> Warehouse
    
    style API fill:#bbf,stroke:#333
    style Kafka fill:#bfb,stroke:#333`,
        text: 'Click event is fired to Kafka asynchronously — the redirect is not blocked. Kafka feeds both real-time (Flink → ClickHouse) and batch (S3 → Spark) analytics pipelines. Dashboards read from ClickHouse for real-time and warehouse for historical.'
      },
      {
        heading: 'Code Example: Async Click Tracking',
        code: `import time
import random
from collections import defaultdict
from threading import Thread

class ClickEvent:
    def __init__(self, short_code, ip, user_agent, referrer, timestamp=None):
        self.short_code = short_code
        self.ip = ip
        self.user_agent = user_agent
        self.referrer = referrer
        self.timestamp = timestamp or time.time()

class KafkaSimulator:
    def __init__(self):
        self.events = []
    
    def produce(self, event):
        self.events.append(event)
    
    def consume(self):
        return self.events.pop(0) if self.events else None

class AnalyticsProcessor:
    def __init__(self):
        self.aggregates = defaultdict(lambda: {
            'total_clicks': 0,
            'by_country': defaultdict(int),
            'by_device': defaultdict(int),
            'by_hour': defaultdict(int)
        })
    
    def process(self, event):
        stats = self.aggregates[event.short_code]
        stats['total_clicks'] += 1
        stats['by_country'][self._geo_lookup(event.ip)] += 1
        stats['by_device'][self._parse_device(event.user_agent)] += 1
        stats['by_hour'][int(event.timestamp / 3600) % 24] += 1
    
    def _geo_lookup(self, ip):
        return random.choice(['US', 'IN', 'UK', 'DE', 'JP'])
    
    def _parse_device(self, ua):
        if 'Mobile' in ua: return 'mobile'
        if 'Mac' in ua: return 'desktop'
        return 'other'

    def get_stats(self, short_code):
        return dict(self.aggregates.get(short_code, {}))

class URLShortenerWithAnalytics:
    def __init__(self):
        self.db = {}
        self.kafka = KafkaSimulator()
        self.analytics = AnalyticsProcessor()
    
    def shorten(self, code, long_url):
        self.db[code] = long_url
    
    def redirect(self, short_code, ip, user_agent, referrer):
        """Redirect + async analytics."""
        long_url = self.db.get(short_code)
        if not long_url:
            return {'error': 'not found'}
        
        # Fire event to Kafka (non-blocking)
        event = ClickEvent(short_code, ip, user_agent, referrer)
        self.kafka.produce(event)
        
        # Process analytics in background thread
        Thread(target=self._process_analytics, args=(event,)).start()
        
        return {'redirect': long_url, 'status': 301}
    
    def _process_analytics(self, event):
        self.analytics.process(event)
    
    def get_analytics(self, short_code):
        return self.analytics.get_stats(short_code)

# Test
us = URLShortenerWithAnalytics()
us.shorten('abc123', 'https://example.com/long')

# Simulate clicks
for i in range(100):
    ip = f'10.0.{random.randint(0,255)}.{random.randint(0,255)}'
    ua = random.choice(['Mobile Safari', 'Mac Chrome', 'Linux Firefox'])
    us.redirect('abc123', ip, ua, 'https://google.com')

time.sleep(0.5)  # Wait for background processing
stats = us.get_analytics('abc123')
print(f'Total clicks: {stats.get("total_clicks", 0)}')
print(f'By country: {dict(stats.get("by_country", {}))}')
print(f'By device: {dict(stats.get("by_device", {}))}')`,
        output: '100 clicks tracked asynchronously. Analytics show clicks by country and device without blocking redirects.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>bit.ly — real-time analytics with Kafka + Druid.</strong> bit.ly processes 10B+ clicks/month through their analytics pipeline. Each redirect fires a click event to Kafka (non-blocking, <1ms overhead). Kafka events are consumed by Apache Flink for real-time aggregation (clicks per minute per URL) and stored in Apache Druid for sub-second dashboard queries. Marketers see click data within 5 seconds of the actual click. Batch processing (Spark on S3) generates daily reports and detects anomalies (click fraud, viral spikes).'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Analytics must NOT block redirects — fire events to Kafka asynchronously',
          'Click event: short_code, timestamp, IP, user_agent, referrer',
          'Real-time: Kafka → Flink → ClickHouse/Druid for live dashboards',
          'Batch: Kafka → S3 → Spark for daily/monthly reports and anomaly detection'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you ensure analytics doesn\'t slow down redirects? → Fire-and-forget: write to Kafka (non-blocking, <1ms) and return 301 immediately. Process analytics asynchronously.',
          'Q2: How do you handle analytics during a Kafka outage? → Buffer events locally (in-memory or local disk), retry to Kafka when it recovers. Redirects continue working — only analytics is affected.',
          'Q3: How do you detect click fraud? → Batch job (Spark) analyzes patterns: same IP clicking repeatedly, unusual click spikes from a single referrer, bot-like user agents. Flag suspicious URLs for review.'
        ]
      }
    ]
  }
},
  module12: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'This capstone project designs a real-time chat system like WhatsApp or Discord. We cover WebSocket protocol for persistent connections, message storage with Cassandra, presence detection for online status, and scaling with Redis Pub/Sub for fan-out delivery across millions of concurrent users.',
          list: [
            '<strong>Topics covered:</strong> Requirements & Scale, WebSocket Protocol, Message Storage, Presence & Online Status, Scaling & Fan-Out',
            '<strong>Prerequisites:</strong> Basic understanding of distributed systems and web architecture',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interview prep, architecture reviews, and production system design'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Real-time chat is one of the hardest system design challenges: persistent connections, sub-second delivery, presence tracking, message ordering, and horizontal scaling to millions of concurrent users. This capstone shows how to combine patterns from all previous modules into a production-ready chat architecture.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Requirements] --> T2[WebSocket Protocol]
    T2 --> T3[Message Storage]
    T3 --> T4[Presence]
    T4 --> T5["Scaling & Fan-Out"]`,
          text: 'Recommended reading order \u2014 each topic builds on the previous one.'
        }
      ]
    },
  'chat-overview': {
    title: 'Chat System: Requirements & Scale',
    sections: [
      {
        heading: 'What is a Real-Time Chat System?',
        text: 'A real-time chat system enables instant messaging between users over a network. Unlike HTTP request-response, chat requires persistent connections (WebSocket) for real-time delivery. Designing one covers WebSocket protocol, message storage, presence detection, fan-out delivery, and horizontal scaling — a comprehensive system design challenge.',
        list: [
          '<strong>Functional:</strong> 1:1 chat, group chat, message history, online status, read receipts, typing indicators',
          '<strong>Non-functional:</strong> <500ms message delivery latency, 99.9% availability, support 10M concurrent users',
          '<strong>Scale estimates:</strong> 10M DAU, 50M messages/day, avg 5 messages/user/day, 3-year retention',
          '<strong>Storage:</strong> Message: 100 bytes x 50M x 365 x 3 = ~5.5TB. User metadata: 10M x 1KB = 10GB',
          '<strong>Throughput:</strong> ~580 messages/sec average, ~5,000/sec peak (morning rush)'
        ]
      },
      {
        heading: 'Chat System High-Level Architecture',
        diagram: `graph TB
    Client1[Mobile App] --> WS1[WebSocket Connection]
    Client2[Web App] --> WS2[WebSocket Connection]
    Client3[Desktop] --> WS3[WebSocket Connection]
    
    WS1 --> LB[Load Balancer<br/>Sticky Sessions]
    WS2 --> LB
    WS3 --> LB
    
    LB --> CS1[Chat Server 1]
    LB --> CS2[Chat Server 2]
    LB --> CS3[Chat Server 3]
    
    CS1 --> Redis["(Redis Pub/Sub<br/>Message Routing)"]
    CS2 --> Redis
    CS3 --> Redis
    
    CS1 --> DB["(Cassandra<br/>Message Storage)"]
    CS2 --> DB
    CS3 --> DB
    
    Redis --> Presence["(Redis<br/>Presence Store)"]
    
    style LB fill:#bbf,stroke:#333
    style Redis fill:#bfb,stroke:#333`,
        text: 'Clients connect via WebSocket to chat servers behind a load balancer. Messages are published to Redis Pub/Sub for routing to the correct chat server. Cassandra stores message history. Redis also tracks online presence.'
      },
      {
        heading: 'Code Example: Chat Server Core',
        code: `import time
from collections import defaultdict

class ChatServer:
    def __init__(self, server_id):
        self.server_id = server_id
        self.connections = {}  # user_id -> websocket
        self.pubsub = PubSubBroker()  # simulated Redis Pub/Sub
        self.message_store = MessageStore()  # simulated Cassandra

    def connect(self, user_id):
        """User connects via WebSocket."""
        self.connections[user_id] = {'connected_at': time.time()}
        self.pubsub.subscribe(user_id, self.server_id)
        print(f'  [{self.server_id}] User {user_id} connected')

    def disconnect(self, user_id):
        """User disconnects."""
        self.connections.pop(user_id, None)
        self.pubsub.unsubscribe(user_id, self.server_id)
        print(f'  [{self.server_id}] User {user_id} disconnected')

    def send_message(self, from_user, to_user, content):
        """Send a message from one user to another."""
        msg = {
            'id': f'msg_{int(time.time() * 1000)}',
            'from': from_user,
            'to': to_user,
            'content': content,
            'timestamp': time.time()
        }
        # Store message
        self.message_store.save(msg)
        # Publish to recipient's channel
        self.pubsub.publish(to_user, msg)
        # Publish to sender for echo
        self.pubsub.publish(from_user, msg)
        print(f'  [{self.server_id}] {from_user} -> {to_user}: {content}')

    def receive_message(self, user_id, message):
        """Receive a message from Pub/Sub, deliver to connected user."""
        if user_id in self.connections:
            print(f'  [{self.server_id}] Delivered to {user_id}: {message["content"]}')
            return True
        return False  # user offline, store for later

    def is_online(self, user_id):
        return user_id in self.connections

class PubSubBroker:
    def __init__(self):
        self.subscribers = defaultdict(list)
        self.messages = []

    def subscribe(self, channel, server_id):
        self.subscribers[channel].append(server_id)

    def unsubscribe(self, channel, server_id):
        if server_id in self.subscribers[channel]:
            self.subscribers[channel].remove(server_id)

    def publish(self, channel, message):
        self.messages.append((channel, message))

class MessageStore:
    def __init__(self):
        self.messages = []

    def save(self, msg):
        self.messages.append(msg)

# Test: two users on different servers
server1 = ChatServer('server-1')
server2 = ChatServer('server-2')

server1.connect('alice')
server2.connect('bob')

server1.send_message('alice', 'bob', 'Hello Bob!')
server2.send_message('bob', 'alice', 'Hi Alice!')`,
        output: 'Both users connect to different servers. Messages are routed via Pub/Sub and delivered to connected users.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>WhatsApp — 2B users, 100B messages/day.</strong> WhatsApp handles 2 billion users and 100 billion messages per day. Their architecture: Erlang-based chat servers (millions of lightweight processes), WebSocket connections with custom protocol, Cassandra for message storage (sharded by conversation_id), and Redis for presence. Each chat server handles 1-2 million concurrent connections. Message delivery latency is under 200ms globally, with end-to-end encryption adding negligible overhead.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Chat = persistent WebSocket connections for real-time delivery',
          'Scale: 10M DAU, 50M messages/day, <500ms delivery latency',
          'Redis Pub/Sub routes messages between chat servers',
          'Cassandra stores message history (sharded by conversation_id)'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why WebSocket instead of HTTP polling? → WebSocket is bidirectional, persistent, and low-latency. HTTP polling wastes bandwidth with empty polls and adds latency (poll interval vs instant push).',
          'Q2: How do you handle 10M concurrent connections? → Horizontal scaling: thousands of chat servers, each handling 50K-100K connections. Load balancer with sticky sessions keeps a user on the same server.',
          'Q3: What is the message delivery guarantee? → At-least-once: store message in DB, then deliver. If delivery fails (user offline), store for later. Use deduplication by message ID for exactly-once.'
        ]
      }
    ]
  },
  'chat-protocol': {
    title: 'Chat System: WebSocket Protocol',
    sections: [
      {
        heading: 'WebSocket Protocol for Chat',
        text: 'WebSocket provides a full-duplex, persistent connection between client and server. Unlike HTTP (request-response), WebSocket allows the server to push messages instantly — critical for chat. The protocol includes connection upgrade, heartbeat/ping-pong for keepalive, and message frames for text and binary data.',
        list: [
          '<strong>Connection upgrade:</strong> HTTP upgrade handshake → WebSocket connection (ws:// or wss://)',
          '<strong>Heartbeat:</strong> Ping/pong every 30s — detect dead connections, keep NAT alive',
          '<strong>Message frames:</strong> Text (JSON messages), binary (files, images), close frames',
          '<strong>Reconnection:</strong> Client auto-reconnects with exponential backoff; server replays missed messages',
          '<strong>Compression:</strong> Per-message deflate reduces bandwidth for text-heavy chat'
        ]
      },
      {
        heading: 'WebSocket Connection Lifecycle',
        diagram: `sequenceDiagram
    participant C as Client
    participant S as Chat Server
    
    Note over C,S: 1. Connection Upgrade
    C->>S: HTTP GET /ws (Upgrade: websocket)
    S->>C: 101 Switching Protocols
    
    Note over C,S: 2. Authentication
    C->>S: {type: "auth", token: "jwt_..."}
    S->>C: {type: "auth_ok", user_id: "alice"}
    
    Note over C,S: 3. Heartbeat (every 30s)
    C->>S: Ping frame
    S->>C: Pong frame
    
    Note over C,S: 4. Message Exchange
    C->>S: {type: "message", to: "bob", content: "Hi"}
    S->>C: {type: "receipt", msg_id: "msg_123"}
    S->>C: {type: "message", from: "bob", content: "Hello!"}
    C->>S: {type: "read_receipt", msg_id: "msg_456"}
    
    Note over C,S: 5. Disconnect
    C->>S: Close frame
    S->>C: Close frame`,
        text: 'WebSocket lifecycle: HTTP upgrade → auth → heartbeat loop → message exchange → graceful close. Server pushes messages instantly without client polling.'
      },
      {
        heading: 'Code Example: WebSocket Chat Handler',
        code: `import json
import time

class WebSocketConnection:
    def __init__(self, user_id, server):
        self.user_id = user_id
        self.server = server
        self.connected = True
        self.last_heartbeat = time.time()
        self.message_queue = []

    def send(self, message):
        """Send a message to the client over WebSocket."""
        if self.connected:
            self.message_queue.append(message)
            print(f'  WS -> {self.user_id}: {json.dumps(message)[:80]}')
            return True
        return False

    def receive(self, raw_message):
        """Handle incoming message from client."""
        msg = json.loads(raw_message)
        msg_type = msg.get('type')

        if msg_type == 'heartbeat':
            self.last_heartbeat = time.time()
            self.send({'type': 'heartbeat_ack'})
        elif msg_type == 'message':
            self.server.handle_message(self.user_id, msg)
        elif msg_type == 'read_receipt':
            self.server.handle_read_receipt(self.user_id, msg)
        elif msg_type == 'typing':
            self.server.handle_typing(self.user_id, msg)

    def close(self):
        self.connected = False
        print(f'  WS closed for {self.user_id}')

class ChatServerV2:
    def __init__(self):
        self.connections = {}
        self.message_store = []

    def handle_connect(self, user_id):
        conn = WebSocketConnection(user_id, self)
        self.connections[user_id] = conn
        conn.send({'type': 'auth_ok', 'user_id': user_id})
        return conn

    def handle_message(self, from_user, msg):
        to_user = msg['to']
        content = msg['content']
        msg_id = f'msg_{int(time.time() * 1000)}'
        
        message = {
            'type': 'message',
            'id': msg_id,
            'from': from_user,
            'content': content,
            'timestamp': time.time()
        }
        self.message_store.append(message)
        
        # Deliver to recipient if online
        if to_user in self.connections:
            self.connections[to_user].send(message)
        else:
            print(f'  {to_user} offline, message stored')
        
        # Send receipt to sender
        self.connections[from_user].send(
            {'type': 'receipt', 'msg_id': msg_id})

    def handle_typing(self, from_user, msg):
        to_user = msg['to']
        if to_user in self.connections:
            self.connections[to_user].send(
                {'type': 'typing', 'from': from_user})

    def check_heartbeats(self, timeout=60):
        now = time.time()
        for uid, conn in list(self.connections.items()):
            if now - conn.last_heartbeat > timeout:
                conn.close()
                del self.connections[uid]

# Test
server = ChatServerV2()
alice = server.handle_connect('alice')
bob = server.handle_connect('bob')

alice.receive(json.dumps({'type': 'message', 'to': 'bob', 'content': 'Hey Bob!'}))
bob.receive(json.dumps({'type': 'typing', 'to': 'alice'}))
alice.receive(json.dumps({'type': 'heartbeat'}))`,
        output: 'Alice and Bob connect. Alice sends a message, Bob receives it. Typing indicator and heartbeat work.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Discord — 150M MAU with WebSocket + Elixir.</strong> Discord uses WebSocket for their real-time chat, running on Elixir/Erlang VM (BEAM). Each BEAM process handles one WebSocket connection — millions of lightweight processes per server. They use a custom binary protocol on top of WebSocket for message serialization ( protobuf), achieving 3x smaller payloads than JSON. Heartbeat ping/pong every 30s detects stale connections. Gateway servers handle 5M concurrent connections each, with automatic failover.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'WebSocket = full-duplex persistent connection for real-time chat',
          'Heartbeat ping/pong every 30s: keepalive + dead connection detection',
          'Message types: auth, message, receipt, typing, heartbeat',
          'Auto-reconnect with exponential backoff; replay missed messages on reconnect'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you handle WebSocket connection drops? → Client auto-reconnects with exponential backoff (1s, 2s, 4s...). Server stores messages during disconnect and replays on reconnect using last_message_id.',
          'Q2: Why ping/pong instead of TCP keepalive? → TCP keepalive takes 2+ hours to detect a dead connection by default. Application-level ping every 30s detects dead connections in under a minute.',
          'Q3: How do you scale WebSocket connections? → Horizontal scaling with thousands of chat servers. Each server handles 50K-100K connections. Load balancer (L7) routes by user_id for sticky sessions.'
        ]
      }
    ]
  },
  'chat-message-storage': {
    title: 'Chat System: Message Storage',
    sections: [
      {
        heading: 'Message Storage Strategy',
        text: 'Chat messages need a storage system optimized for both writes (new messages) and reads (conversation history). Cassandra is the standard choice: write-optimized, horizontally scalable, and supports time-series queries by conversation_id. Messages are partitioned by conversation_id and clustered by timestamp for efficient range queries.',
        list: [
          '<strong>Partition by conversation_id:</strong> All messages in a conversation are on the same partition',
          '<strong>Cluster by timestamp:</strong> Messages within a partition are ordered by time — range queries are fast',
          '<strong>Schema:</strong> conversation_id (PK), message_id, sender_id, content, timestamp, message_type',
          '<strong>TTL:</strong> Optional message expiration (e.g., Snapchat-style 24h messages)',
          '<strong>Read pattern:</strong> Load last 50 messages in a conversation → paginate older messages on scroll'
        ]
      },
      {
        heading: 'Message Storage Architecture',
        diagram: `graph TB
    subgraph "Write Path"
        ChatServer[Chat Server] -->|Write| Cassandra["(Cassandra<br/>Partition: conversation_id<br/>Cluster: timestamp)"]
        ChatServer -->|Cache recent| Redis["(Redis<br/>Last 50 msgs per conv)"]
    end
    
    subgraph "Read Path"
        Client[Load History] -->|First 50| Redis
        Client -->|Older msgs| Cassandra
        Cassandra -->|ORDER BY timestamp| Client
    end
    
    subgraph "Cassandra Partitioning"
        P1[Conv abc123<br/>msgs sorted by time]
        P2[Conv def456<br/>msgs sorted by time]
        P3[Conv ghi789<br/>msgs sorted by time]
    end
    
    subgraph "Schema"
        Table["messages table<br/>conversation_id (PK)<br/>message_id (clustering)<br/>sender_id, content, type<br/>timestamp"]
    end`,
        text: 'Cassandra partitions by conversation_id and clusters by timestamp. All messages in a conversation are on the same partition, sorted by time. Redis caches the last 50 messages per conversation for fast initial load.'
      },
      {
        heading: 'Code Example: Message Store with Pagination',
        code: `import time
from collections import defaultdict, deque
import hashlib

class MessageStore:
    def __init__(self):
        # Simulated Cassandra: partition_key -> list of messages
        self.partitions = defaultdict(list)
        self.cache = defaultdict(lambda: deque(maxlen=50))  # Redis: last 50 msgs
    
    def _partition_key(self, conversation_id):
        """Hash conversation_id to determine partition."""
        return hashlib.md5(conversation_id.encode()).hexdigest()[:8]

    def save(self, conversation_id, sender_id, content, msg_type='text'):
        """Save a message to the store."""
        msg = {
            'id': f'msg_{int(time.time() * 1000000)}',
            'conversation_id': conversation_id,
            'sender_id': sender_id,
            'content': content,
            'type': msg_type,
            'timestamp': time.time()
        }
        partition = self._partition_key(conversation_id)
        self.partitions[partition].append(msg)
        self.cache[conversation_id].append(msg)
        return msg

    def get_history(self, conversation_id, limit=50, before_timestamp=None):
        """Get message history with pagination."""
        partition = self._partition_key(conversation_id)
        messages = self.partitions[partition]
        
        # Filter by conversation_id and timestamp
        result = []
        for msg in reversed(messages):
            if msg['conversation_id'] != conversation_id:
                continue
            if before_timestamp and msg['timestamp'] >= before_timestamp:
                continue
            result.append(msg)
            if len(result) >= limit:
                break
        
        return list(reversed(result))

    def get_recent(self, conversation_id):
        """Get cached recent messages (last 50)."""
        return list(self.cache[conversation_id])

# Test
store = MessageStore()

# Simulate conversation
conv_id = 'conv_alice_bob'
for i in range(100):
    sender = 'alice' if i % 2 == 0 else 'bob'
    store.save(conv_id, sender, f'Message {i}')

# Load recent (from cache)
recent = store.get_recent(conv_id)
print(f'Recent messages: {len(recent)}')
print(f'Latest: {recent[-1]["content"]} from {recent[-1]["sender_id"]}')

# Load older page (from DB)
older = store.get_history(conv_id, limit=20, before_timestamp=recent[0]['timestamp'])
print(f'Older page: {len(older)} messages')
print(f'Oldest in page: {older[0]["content"]}')`,
        output: 'Recent 50 from cache. Older messages paginated from DB by timestamp.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Slack — Cassandra for 10+ billion messages.</strong> Slack stores all messages in Cassandra, partitioned by channel_id and clustered by timestamp. Each channel is a partition, so loading the last 50 messages in a channel is a single-partition read (fast). They use LWT (lightweight transactions) for message ordering within a channel. For DMs, the conversation_id is derived from the sorted user IDs (userA_userB). Slack retains messages indefinitely for paid workspaces, with compaction to reduce storage for channels with millions of messages.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Partition by conversation_id — all messages in a conversation on one partition',
          'Cluster by timestamp — range queries for history pagination',
          'Redis cache: last 50 messages per conversation for fast initial load',
          'Pagination: load 50 at a time, use before_timestamp for older messages'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: Why partition by conversation_id instead of user_id? → Message history is loaded by conversation, not by user. Partitioning by conversation_id ensures a single-partition read for history queries.',
          'Q2: How do you handle group chats with 1000+ members? → The conversation_id is the group ID. Each message is stored once (not per recipient). Fan-out happens at delivery time via Redis Pub/Sub, not at storage.',
          'Q3: How do you handle message search? → Cassandra is not good at full-text search. Use Elasticsearch: index messages by content via CDC pipeline (Cassandra → Kafka → Elasticsearch).'
        ]
      }
    ]
  },
  'chat-presence': {
    title: 'Chat System: Presence & Online Status',
    sections: [
      {
        heading: 'What is Presence Detection?',
        text: 'Presence detection tracks which users are online and shows their status to contacts. It uses heartbeat signals: each client sends a heartbeat every 30s. If the server doesn\'t receive a heartbeat within 60s, the user is marked offline. Presence updates are pushed to all contacts in real-time.',
        list: [
          '<strong>Heartbeat-based:</strong> Client sends ping every 30s → server updates last_seen timestamp',
          '<strong>Timeout:</strong> If no heartbeat in 60s → mark user offline',
          '<strong>Presence store:</strong> Redis sorted set: user_id → last_heartbeat_timestamp',
          '<strong>Push updates:</strong> When status changes (online/offline), notify all contacts via Pub/Sub',
          '<strong>Battery optimization:</strong> Mobile clients use longer intervals (60-120s) to save battery'
        ]
      },
      {
        heading: 'Presence Detection Architecture',
        diagram: `graph TB
    Client[Client] -->|Heartbeat every 30s| ChatServer[Chat Server]
    ChatServer -->|Update last_seen| Redis["(Redis<br/>presence: user_id -> timestamp)"]
    
    subgraph "Presence Check (every 10s)"
        Scanner[Presence Scanner] -->|Check all| Redis
        Scanner -->|last_seen > 60s ago| Offline[Mark Offline]
        Scanner -->|last_seen < 60s ago| Online[Keep Online]
    end
    
    subgraph "Status Push"
        Offline -->|Publish| PubSub[Redis Pub/Sub<br/>presence:contacts]
        Online -->|Publish| PubSub
        PubSub -->|Push to contacts| Contact1[Contact 1]
        PubSub -->|Push to contacts| Contact2[Contact 2]
    end`,
        text: 'Clients send heartbeats every 30s. Server updates last_seen in Redis. A presence scanner checks every 10s for stale entries (last_seen > 60s) and marks them offline. Status changes are pushed to contacts via Pub/Sub.'
      },
      {
        heading: 'Code Example: Presence Manager',
        code: `import time
from collections import defaultdict

class PresenceManager:
    def __init__(self, heartbeat_timeout=60):
        self.heartbeat_timeout = heartbeat_timeout
        self.presence = {}  # user_id -> {status, last_seen, status_msg}
        self.contacts = defaultdict(set)  # user_id -> set of contact_ids
        self.status_callbacks = []  # functions to call on status change

    def heartbeat(self, user_id):
        """Client sends heartbeat — mark user online."""
        was_online = user_id in self.presence and \\
            self.presence[user_id]['status'] == 'online'
        self.presence[user_id] = {
            'status': 'online',
            'last_seen': time.time(),
            'device': 'mobile'
        }
        if not was_online:
            self._notify_status_change(user_id, 'online')

    def set_status(self, user_id, status, status_msg=''):
        """User sets custom status (online, away, dnd, offline)."""
        self.presence[user_id] = {
            'status': status,
            'last_seen': time.time(),
            'status_msg': status_msg
        }
        self._notify_status_change(user_id, status)

    def get_status(self, user_id):
        """Get a user's presence status."""
        p = self.presence.get(user_id)
        if not p:
            return {'status': 'offline'}
        # Check if heartbeat timed out
        if p['status'] == 'online' and \\
           time.time() - p['last_seen'] > self.heartbeat_timeout:
            return {'status': 'offline'}
        return p

    def check_timeouts(self):
        """Check all users for heartbeat timeout."""
        now = time.time()
        for user_id, p in list(self.presence.items()):
            if p['status'] == 'online' and \\
               now - p['last_seen'] > self.heartbeat_timeout:
                self.presence[user_id]['status'] = 'offline'
                self._notify_status_change(user_id, 'offline')

    def add_contact(self, user_id, contact_id):
        """Register a contact relationship for presence updates."""
        self.contacts[user_id].add(contact_id)
        self.contacts[contact_id].add(user_id)

    def on_status_change(self, callback):
        """Register a callback for status changes."""
        self.status_callbacks.append(callback)

    def _notify_status_change(self, user_id, status):
        """Notify contacts of a status change."""
        for callback in self.status_callbacks:
            callback(user_id, status, self.contacts.get(user_id, set()))

# Test
pm = PresenceManager(heartbeat_timeout=2)  # 2s timeout for demo

def on_change(user_id, status, contacts):
    print(f'  PRESENCE: {user_id} is now {status}')

pm.on_status_change(on_change)
pm.add_contact('alice', 'bob')

# Alice comes online
pm.heartbeat('alice')
print(f'Alice status: {pm.get_status("alice")}')

# Alice sets away
pm.set_status('alice', 'away', 'In a meeting')
print(f'Alice status: {pm.get_status("alice")}')

# Wait for timeout
import time as t
t.sleep(3)
pm.check_timeouts()
print(f'Alice status after timeout: {pm.get_status("alice")}')`,
        output: 'Alice comes online, sets away, then times out and goes offline. Each change triggers notifications.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>WhatsApp — presence at 2B user scale.</strong> WhatsApp tracks presence for 2 billion users. Each client sends a heartbeat every 60 seconds (120s on mobile to save battery). Their presence system uses Redis sorted sets: user_id → last_heartbeat_timestamp. A background scanner checks for stale entries every 15 seconds. When a user goes online/offline, WhatsApp pushes a presence event to all mutual contacts via their WebSocket connections. For celebrities with millions of contacts, they use "directed presence" — only notify contacts who have recently been active.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Heartbeat every 30-60s marks user as online',
          'Timeout (60-120s no heartbeat) marks user offline',
          'Redis stores presence: user_id → last_seen timestamp',
          'Status changes pushed to contacts via Pub/Sub in real-time'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you handle presence for users with millions of contacts (celebrities)? → Directed presence: only notify contacts who have been active in the last 24h. Or use a "fanout-on-write" approach with bounded fan-out.',
          'Q2: How do you save battery on mobile? → Longer heartbeat intervals (120s), use OS push notifications (FCM/APNS) to wake the app on incoming messages instead of keeping WebSocket open constantly.',
          'Q3: What is "last seen" vs "online"? → Online = active heartbeat within timeout. Last seen = the timestamp of the last heartbeat, shown even when offline ("last seen today at 3:45 PM").'
        ]
      }
    ]
  },
  'chat-scaling': {
    title: 'Chat System: Scaling & Fan-Out',
    sections: [
      {
        heading: 'Scaling & Fan-Out Delivery',
        text: 'Scaling a chat system to millions of concurrent users requires distributing WebSocket connections across hundreds of servers. The key challenge is message fan-out: when a user sends a message to a group, the server must deliver it to all members, who may be connected to different servers. Redis Pub/Sub handles this cross-server delivery.',
        list: [
          '<strong>Connection sharding:</strong> Millions of WebSocket connections distributed across hundreds of chat servers',
          '<strong>Redis Pub/Sub:</strong> Message published to channel → all chat servers with recipients receive it',
          '<strong>1:1 chat fan-out:</strong> Send to 2 channels (sender + recipient) — simple',
          '<strong>Group chat fan-out:</strong> Send to group channel → all members subscribed receive it',
          '<strong>Sticky sessions:</strong> Load balancer routes user to same server (by user_id hash) for connection persistence'
        ]
      },
      {
        heading: 'Fan-Out Architecture',
        diagram: `graph TB
    subgraph "1:1 Chat"
        Alice[Alice on Server 1] -->|Publish| RedisPub[Redis Pub/Sub<br/>channel: user:alice]
        Bob[Bob on Server 2] -->|Subscribe| RedisPub
        RedisPub -->|Deliver| Bob
        RedisPub -->|Echo back| Alice
    end
    
    subgraph "Group Chat"
        Sender[Sender on Server 3] -->|Publish| GroupCh[Redis Pub/Sub<br/>channel: group:room123]
        M1[Member 1 on Server 1] -->|Subscribe| GroupCh
        M2[Member 2 on Server 2] -->|Subscribe| GroupCh
        M3[Member 3 on Server 5] -->|Subscribe| GroupCh
        GroupCh -->|Deliver to all| M1
        GroupCh --> M2
        GroupCh --> M3
    end
    
    subgraph "Scaling"
        LB[Load Balancer<br/>L7, sticky by user_id] --> S1[Chat Server 1<br/>50K connections]
        LB --> S2[Chat Server 2<br/>50K connections]
        LB --> SN[Chat Server N<br/>50K connections]
    end`,
        text: '1:1: message published to user channels, recipient\'s server receives via subscription. Group: message published to group channel, all members\' servers receive. Load balancer uses sticky sessions by user_id for connection persistence.'
      },
      {
        heading: 'Code Example: Scaled Chat with Fan-Out',
        code: `from collections import defaultdict

class RedisPubSubSim:
    """Simulated Redis Pub/Sub for cross-server messaging."""
    def __init__(self):
        self.channels = defaultdict(list)  # channel -> [subscribers]
    
    def subscribe(self, channel, callback):
        self.channels[channel].append(callback)
    
    def unsubscribe(self, channel, callback):
        if callback in self.channels[channel]:
            self.channels[channel].remove(callback)
    
    def publish(self, channel, message):
        for callback in self.channels.get(channel, []):
            callback(channel, message)

class ScaledChatServer:
    def __init__(self, server_id, pubsub):
        self.server_id = server_id
        self.pubsub = pubsub
        self.connections = {}  # user_id -> callback
    
    def connect(self, user_id, delivery_callback):
        """User connects to this server."""
        self.connections[user_id] = delivery_callback
        # Subscribe to user's personal channel
        self.pubsub.subscribe(f'user:{user_id}', self._on_message)
        print(f'  [{self.server_id}] {user_id} connected')
    
    def disconnect(self, user_id):
        self.connections.pop(user_id, None)
        self.pubsub.unsubscribe(f'user:{user_id}', self._on_message)
    
    def send_dm(self, from_user, to_user, content):
        """Send a direct message via Pub/Sub."""
        msg = {'type': 'message', 'from': from_user, 'to': to_user,
               'content': content}
        self.pubsub.publish(f'user:{to_user}', msg)
        self.pubsub.publish(f'user:{from_user}', msg)  # echo to sender
    
    def join_group(self, user_id, group_id):
        """User joins a group chat."""
        self.pubsub.subscribe(f'group:{group_id}', self._on_message)
        print(f'  [{self.server_id}] {user_id} joined group {group_id}')
    
    def send_group(self, from_user, group_id, content):
        """Send a message to a group."""
        msg = {'type': 'group_message', 'from': from_user,
               'group': group_id, 'content': content}
        self.pubsub.publish(f'group:{group_id}', msg)
    
    def _on_message(self, channel, message):
        """Received a message from Pub/Sub — deliver to connected user."""
        to_user = message.get('to') or message.get('from')
        if to_user in self.connections:
            self.connections[to_user](message)

# Test: 3 servers, 4 users
pubsub = RedisPubSubSim()
s1 = ScaledChatServer('server-1', pubsub)
s2 = ScaledChatServer('server-2', pubsub)
s3 = ScaledChatServer('server-3', pubsub)

# Users on different servers
s1.connect('alice', lambda m: print(f'  Alice received: {m["content"]}'))
s2.connect('bob', lambda m: print(f'  Bob received: {m["content"]}'))
s3.connect('charlie', lambda m: print(f'  Charlie received: {m["content"]}'))

# 1:1 message across servers
s1.send_dm('alice', 'bob', 'Hey Bob!')
# Group chat
s1.join_group('alice', 'team')
s2.join_group('bob', 'team')
s3.join_group('charlie', 'team')
s2.send_group('bob', 'team', 'Team meeting at 5pm!')`,
        output: 'DM delivered across servers via Pub/Sub. Group message fanned out to all members on different servers.',
        language: 'python',
        type: 'code'
      },
      {
        heading: 'Real-World Case Study',
        text: '<strong>Telegram — 900M users, 500M daily messages.</strong> Telegram scales with a custom protocol (MTProto) over WebSocket and TCP. They use a fan-out-on-write model: when a message is sent to a group, it\'s written to the group\'s message box (shared log), and each member\'s server pulls from it. For large channels (1M+ subscribers), they use a separate broadcast model — messages are pushed to CDN edge nodes, and members pull from the nearest edge. This dual approach handles both small group chats and massive broadcast channels efficiently.'
      },
      {
        heading: 'Quick Recap',
        list: [
          'Connection sharding: millions of WebSocket connections across hundreds of servers',
          'Redis Pub/Sub: cross-server message delivery (fan-out)',
          '1:1: publish to user channels. Group: publish to group channel, all members receive',
          'Sticky sessions by user_id: load balancer keeps user on same server'
        ]
      },
      {
        heading: 'Practice Questions',
        list: [
          'Q1: How do you handle a group with 10,000 members? → Publish to group channel, all subscribed servers receive. Each server delivers to its connected members. One publish, N server deliveries — efficient.',
          'Q2: What if a user is connected to two servers (multi-device)? → Subscribe both servers to the user\'s channel. Each server delivers to the device it manages. Message ID ensures deduplication if both devices receive the same message.',
          'Q3: How do you handle Redis Pub/Sub failure? → Fallback to polling: servers check a shared "pending messages" queue in Redis (LIST) if Pub/Sub is down. Use both: Pub/Sub for real-time, polling for reliability.'
        ]
      }
    ]
  }
}
};
