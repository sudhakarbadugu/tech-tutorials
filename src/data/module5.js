export const module5 = {
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
    
    UserService --> UserDB[(User DB)]
    OrderService --> OrderDB[(Order DB)]
    PaymentService --> PaymentDB[(Payment DB)]
    
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
        S3 --> Redis[(Redis<br/>Session Store)]
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
};