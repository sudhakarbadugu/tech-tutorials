export const module7 = {
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
    Edge -->|Check| Redis[(Redis<br/>Rate Limit Store)]
    
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
    
    UserSub -->|type User @key(id)| UserDB[(User DB)]
    OrderSub -->|type Order @key(id)| OrderDB[(Order DB)]
    ReviewSub -->|type Review| ReviewDB[(Review DB)]
    
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
};