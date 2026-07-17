export const module11 = {
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
    Encoder --> DB[(Database<br/>short_code → long_url)]
    
    User2[User] -->|Click short URL| LB[Load Balancer]
    LB --> Cache[(Redis Cache)]
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
        API[API Server] --> Primary[(DB Primary<br/>Writes)]
        Primary -->|Replicate| R1[Read Replica 1]
        Primary -->|Replicate| R2[Read Replica 2]
        Primary -->|Replicate| R3[Read Replica 3]
    end
    
    subgraph "Read Path"
        User[Click] --> Redis[(Redis Cache)]
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
    
    Origin --> Redis[(Redis Cluster<br/>Top 10M URLs)]
    Redis -->|Hit: 95%| Redirect[301 Redirect<br/>< 1ms]
    Redis -->|Miss: 5%| DB[(Cassandra<br/>All URLs)]
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
    Kafka -->|Batch| S3[(S3<br/>Raw Events)]
    
    Flink --> ClickHouse[(ClickHouse<br/>Real-time Dashboard)]
    S3 --> Spark[Spark Batch<br/>Daily/Monthly Reports]
    Spark --> Warehouse[(Data Warehouse)]
    
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
};