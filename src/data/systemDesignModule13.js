// Module 13: Building Blocks

export const systemDesignModule13 = {
  module13: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Building blocks are the low-level primitives that make larger distributed systems possible. While high-level patterns like microservices and event-driven architecture get a lot of attention, interviews often test whether you understand the smaller pieces that keep those systems reliable and fast. This module covers proxies, database indexes, bloom filters, heartbeats, checksums, and the leader-follower pattern.',
          list: [
            '<strong>Topics covered:</strong> Proxies, Database Indexes, Bloom Filters, Heartbeat, Checksum, Leader and Follower',
            '<strong>Prerequisites:</strong> Basic understanding of databases, networking, and distributed systems',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interviews, architecture reviews, and building production-grade systems'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Every large system is built from these primitives. Knowing when to place a reverse proxy, when an index helps, or how a heartbeat detects failure lets you reason about trade-offs before you commit to a design. These topics are also some of the most common short-answer questions in interviews.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Proxies] --> T2[Database Indexes]
    T2 --> T3[Bloom Filters]
    T3 --> T4[Heartbeat]
    T4 --> T5[Checksum]
    T5 --> T6[Leader and Follower]`,
          text: 'Recommended reading order — each topic builds on the previous one.'
        }
      ]
    },
    'proxies': {
      title: 'Proxies (Forward Proxy vs Reverse Proxy)',
      sections: [
        {
          heading: 'What is a Proxy?',
          text: 'A proxy is an intermediary server that forwards requests between a client and another server. It can hide the client, protect the server, cache responses, or distribute load. Proxies come in two main flavors: forward proxies and reverse proxies.',
          list: [
            '<strong>Forward proxy:</strong> Sits in front of clients and forwards outbound requests to the internet or origin servers. Hides the client identity.',
            '<strong>Reverse proxy:</strong> Sits in front of servers and forwards inbound client requests to the appropriate backend. Hides the server topology.',
            '<strong>Security:</strong> Proxies can enforce TLS, filter traffic, and block malicious requests.',
            '<strong>Caching:</strong> Reverse proxies can cache static responses to reduce backend load.',
            '<strong>Load balancing:</strong> Reverse proxies distribute traffic across multiple backend instances.'
          ]
        },
        {
          heading: 'Proxy Placement',
          diagram: {
            chart: `flowchart LR
    C[Client] -->|request| FP[Forward Proxy]
    FP -->|to origin| O[Origin Server]
    U[User] -->|request| RP[Reverse Proxy]
    RP -->|distributes| W1[Web Server 1]
    RP -->|distributes| W2[Web Server 2]
    style FP fill:#3498db,color:#fff
    style RP fill:#e74c3c,color:#fff`,
            caption: 'Forward proxies represent clients; reverse proxies represent servers and can balance load.'
          }
        },
        {
          heading: 'Forward vs Reverse Proxy',
          table: {
            headers: ['Aspect', 'Forward Proxy', 'Reverse Proxy'],
            rows: [
              ['Who sits behind it', 'Client', 'Origin server'],
              ['Visibility', 'Hides client IP', 'Hides backend topology'],
              ['Use case', 'Bypass filters, corporate firewalls', 'Load balancing, caching, SSL termination'],
              ['Direction', 'Outbound traffic', 'Inbound traffic'],
              ['Examples', 'Squid, corporate VPN', 'Nginx, HAProxy, Cloudflare, AWS ALB']
            ]
          }
        },
        {
          heading: 'Use Cases and Benefits',
          text: 'Proxies are everywhere in production. They terminate TLS, cache content, compress responses, and protect backends from direct exposure. A reverse proxy also lets you scale horizontally by adding backend servers without changing the public endpoint.',
          list: [
            '<strong>SSL termination:</strong> Offload TLS encryption from application servers',
            '<strong>Rate limiting:</strong> Block excessive requests before they reach the backend',
            '<strong>Request routing:</strong> Route /api requests to one pool and /static to another',
            '<strong>Compression:</strong> gzip responses at the edge to save bandwidth',
            '<strong>Failover:</strong> Detect unhealthy backends and route traffic away'
          ]
        },
        {
          heading: 'Nginx Reverse Proxy Example',
          example: {
            title: 'Load balancing and header forwarding',
            code: `server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://backend_cluster;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

upstream backend_cluster {
    server 10.0.0.1:8080;
    server 10.0.0.2:8080;
    server 10.0.0.3:8080;
}`,
            output: 'Incoming requests hit Nginx; Nginx forwards them to backend servers and adds client headers.',
            language: 'nginx',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Cloudflare global reverse proxy.</strong> Cloudflare sits between users and millions of websites. It acts as a reverse proxy for caching, DDoS protection, SSL termination, and WAF rules. By absorbing traffic at the edge, origin servers see fewer requests and stay available during attacks.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Forward proxies sit in front of clients; reverse proxies sit in front of servers',
            'Reverse proxies provide load balancing, caching, SSL termination, and security',
            'Nginx, HAProxy, and Cloudflare are common reverse proxy choices',
            'Proxies hide topology and protect backends from direct exposure'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the main difference between a forward and reverse proxy? → A forward proxy acts on behalf of clients; a reverse proxy acts on behalf of servers.',
            'Q2: How does a reverse proxy help with scaling? → It distributes requests across many backends, so you can add servers without changing the public endpoint.',
            'Q3: Why place SSL termination at a reverse proxy? → It offloads TLS work from application servers and centralizes certificate management.'
          ]
        }
      ]
    },
    'database-indexes': {
      title: 'Database Indexes',
      sections: [
        {
          heading: 'What is a Database Index?',
          text: 'A database index is a data structure that speeds up reads by letting the database find rows without scanning the entire table. It is analogous to the index at the back of a book: instead of reading every page, you jump directly to the right section.',
          list: [
            '<strong>B-tree index:</strong> Balanced tree structure that supports equality and range lookups in O(log n) time.',
            '<strong>Hash index:</strong> Maps keys to exact locations using a hash function; great for equality, useless for ranges.',
            '<strong>Clustered index:</strong> The index order is the same as the physical row order. Only one per table.',
            '<strong>Non-clustered index:</strong> A separate structure that points to the actual rows. Many per table.',
            '<strong>Composite index:</strong> An index on multiple columns. Column order matters for query matching.'
          ]
        },
        {
          heading: 'B-Tree Index Lookup',
          diagram: {
            chart: `flowchart LR
    Q[Query by id] --> I[(B-Tree Index)]
    I --> T[Log n traversal]
    T --> R[(Row Data Page)]
    style I fill:#3498db,color:#fff
    style R fill:#2ecc71,color:#fff`,
            caption: 'The query uses the index to traverse directly to the relevant data page.'
          }
        },
        {
          heading: 'Index Types Comparison',
          table: {
            headers: ['Type', 'Structure', 'Best For', 'Trade-off'],
            rows: [
              ['B-tree', 'Balanced tree', 'Equality, range, sorting', 'Slower writes than heap'],
              ['Hash', 'Hash map', 'Exact match lookups', 'No range scans or sorting'],
              ['Clustered', 'Data rows in index order', 'Range scans on primary key', 'Only one per table; inserts may reorder'],
              ['Non-clustered', 'Pointer to row', 'Additional lookup paths', 'Extra storage and maintenance'],
              ['Composite', 'Multiple columns', 'Filters using leading columns', 'Wasted if query does not use leading column']
            ]
          }
        },
        {
          heading: 'SQL Example: Creating and Using Indexes',
          example: {
            title: 'Index creation and query plan',
            code: `-- B-tree index for equality and range queries
CREATE INDEX idx_users_email ON users(email);

-- Composite index for multi-column filtering
CREATE INDEX idx_orders_user_created ON orders(user_id, created_at);

-- Hash index for exact match only
CREATE INDEX idx_users_phone_hash ON users USING HASH(phone);

EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'alice@example.com';`,
            output: 'The query planner uses idx_users_email instead of scanning the entire users table.',
            language: 'sql',
            type: 'code'
          }
        },
        {
          heading: 'When Indexes Slow Down Writes',
          text: 'Every insert, update, or delete that touches an indexed column must also update every relevant index. More indexes mean faster reads but slower writes and more storage. Choose indexes based on query patterns, not by indexing every column.',
          list: [
            '<strong>Write amplification:</strong> Each write touches the table plus every affected index',
            '<strong>Storage cost:</strong> Indexes can be 10-50% of total table size',
            '<strong>Locking:</strong> Index maintenance can increase lock contention during writes',
            '<strong>Covering index:</strong> Includes all columns a query needs, so the engine never touches the heap'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Twitter user timelines.</strong> Twitter stores tweets in a sharded MySQL cluster. Indexes on user_id and created_at make timeline queries fast. Without those indexes, fetching a user timeline would require scanning billions of rows. New tweets also trigger index updates, so write throughput is balanced against read speed.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Indexes speed up reads by avoiding full table scans',
            'B-trees handle ranges and equality; hash indexes only handle equality',
            'Clustered indexes determine physical row order; non-clustered indexes add pointers',
            'Indexes speed up reads but slow down writes and consume extra space'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: When would you use a hash index over a B-tree? → Only when the query is an exact match and you do not need range scans or ordering.',
            'Q2: Why does column order matter in a composite index? → The query must use the leading column for the optimizer to use the index efficiently.',
            'Q3: How do indexes affect writes? → Every write must update the table and every affected index, which increases latency and storage.'
          ]
        }
      ]
    },
    'bloom-filters': {
      title: 'Bloom Filters',
      sections: [
        {
          heading: 'What is a Bloom Filter?',
          text: 'A Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set. It can tell you that an element is definitely not in the set, or that it is probably in the set. It never produces false negatives, but it can produce false positives.',
          list: [
            '<strong>Bit array:</strong> A fixed-size array of bits, initially all set to 0.',
            '<strong>Hash functions:</strong> Multiple independent hash functions map an element to bit positions.',
            '<strong>False negative:</strong> Impossible. If any bit is 0, the element was never added.',
            '<strong>False positive:</strong> Possible if all k bits are set by other elements.',
            '<strong>Deletion:</strong> Standard Bloom filters do not support removing elements.'
          ]
        },
        {
          heading: 'Bloom Filter Architecture',
          diagram: {
            chart: `flowchart TD
    K[Key user42] --> H1[Hash 1]
    K --> H2[Hash 2]
    K --> H3[Hash 3]
    H1 --> B1[Bit 4]
    H2 --> B2[Bit 9]
    H3 --> B3[Bit 15]
    B1 --> BF[Bit Array]
    B2 --> BF
    B3 --> BF
    style BF fill:#f39c12,color:#fff`,
            caption: 'A key is hashed k times; the corresponding bits are set to 1 to record membership.'
          }
        },
        {
          heading: 'Sizing a Bloom Filter',
          text: 'Bloom filters are sized by the expected number of elements n and the acceptable false positive probability p. The formulas below give the optimal number of bits m and hash functions k.',
          list: [
            '<strong>Optimal bits:</strong> m = -n * ln(p) / (ln 2)^2',
            '<strong>Optimal hashes:</strong> k = (m/n) * ln 2',
            '<strong>Space:</strong> Roughly 10 bits per element gives ~1% false positive rate',
            '<strong>Trade-off:</strong> Smaller p means more bits and more hashes, which slows checks'
          ]
        },
        {
          heading: 'Python Bloom Filter Example',
          example: {
            title: 'Probabilistic membership test',
            code: `import mmh3
from bitarray import bitarray

class BloomFilter:
    def __init__(self, size, hash_count):
        self.size = size
        self.hash_count = hash_count
        self.bit_array = bitarray(size)
        self.bit_array.setall(0)

    def add(self, item):
        for i in range(self.hash_count):
            index = mmh3.hash(item, i) % self.size
            self.bit_array[index] = 1

    def check(self, item):
        for i in range(self.hash_count):
            index = mmh3.hash(item, i) % self.size
            if not self.bit_array[index]:
                return False
        return True

bf = BloomFilter(100000, 3)
bf.add('user:42')
print(bf.check('user:42'))  # True
print(bf.check('user:99'))  # False with high probability`,
            output: 'user:42 is definitely in the set; user:99 is probably not in the set.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Google Chrome Safe Browsing.</strong> Chrome keeps a local Bloom filter containing hashes of known malicious URLs. Before visiting a site, Chrome checks the filter. If the filter says the URL is definitely not malicious, no network call is needed. If it says probably malicious, Chrome sends a full check to Google servers. This saves enormous bandwidth and latency.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bloom filters give definite negatives and probabilistic positives',
            'They use a bit array and multiple hash functions',
            'False positive rate is controlled by bit array size and hash count',
            'Great for avoiding expensive lookups when an item is unlikely to exist'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Can a Bloom filter produce false negatives? → No. A false negative would require a previously set bit to become 0, which never happens in a standard Bloom filter.',
            'Q2: How would you use a Bloom filter in a URL shortener? → Check if a short code already exists before hitting the database; false positives only cause an extra DB lookup.',
            'Q3: How do you reduce the false positive rate? → Increase the bit array size or the number of hash functions, at the cost of more memory and CPU.'
          ]
        }
      ]
    },
    'heartbeat': {
      title: 'Heartbeat',
      sections: [
        {
          heading: 'What is a Heartbeat?',
          text: 'A heartbeat is a periodic message sent between processes to confirm they are alive. In distributed systems, heartbeats are the primary mechanism for failure detection. If a node misses enough heartbeats, other nodes assume it has failed and take corrective action.',
          list: [
            '<strong>Periodic ping:</strong> Leader or monitor sends a ping to followers at a fixed interval',
            '<strong>Timeout:</strong> If no response arrives within a threshold, the target is marked as suspect or failed',
            '<strong>Leader-follower keepalive:</strong> Followers report their status to the leader; the leader reassigns work if a follower is down',
            '<strong>False positive:</strong> A slow network or garbage collection pause can make a healthy node appear dead',
            '<strong>Phi accrual failure detector:</strong> Tracks heartbeat arrival distribution to reduce false positives'
          ]
        },
        {
          heading: 'Heartbeat Sequence',
          diagram: {
            chart: `sequenceDiagram
    participant L as Leader
    participant F as Follower
    loop Every interval
        L->>F: heartbeat ping
        F-->>L: pong ack
    end
    Note over L,F: Missing N heartbeats => suspected failure`,
            caption: 'Leader and follower exchange pings and pongs; missed responses trigger suspicion.'
          }
        },
        {
          heading: 'Gossip vs Heartbeat',
          table: {
            headers: ['Aspect', 'Heartbeat', 'Gossip'],
            rows: [
              ['Communication', 'Direct, point-to-point', 'Random peer exchange'],
              ['Scalability', 'O(n) pairs can be heavy', 'O(log n) rounds to spread state'],
              ['Failure detection', 'Fast, explicit timeouts', 'Eventually consistent view'],
              ['Use case', 'Leader-follower, load balancers', 'Membership lists, cluster state'],
              ['Examples', 'ZooKeeper, Redis Sentinel', 'Cassandra, Consul']
            ]
          }
        },
        {
          heading: 'Python Heartbeat Example',
          example: {
            title: 'Detect missed heartbeats',
            code: `import time
import threading

class HeartbeatMonitor:
    def __init__(self, timeout=2):
        self.timeout = timeout
        self.last_seen = time.time()

    def heartbeat(self):
        self.last_seen = time.time()
        print('heartbeat received')

    def monitor(self):
        while True:
            time.sleep(1)
            if time.time() - self.last_seen > self.timeout:
                print('ALERT: missed heartbeat')
            else:
                print('node healthy')

monitor = HeartbeatMonitor(timeout=2)
threading.Thread(target=monitor.monitor, daemon=True).start()

monitor.heartbeat()
time.sleep(3)  # simulate a missed beat`,
            output: 'Healthy heartbeats print node healthy; a missed beat raises an alert.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Timeouts and False Positives',
          text: 'Choosing a heartbeat timeout is a trade-off. A short timeout detects failures quickly but can mark slow nodes as dead. A long timeout reduces false positives but delays failure detection. In practice, systems use a suspect threshold and a confirm threshold to avoid flapping.',
          list: [
            '<strong>Network jitter:</strong> Variable latency can cause intermittent missed heartbeats',
            '<strong>GC pauses:</strong> Long garbage collection can delay heartbeat responses',
            '<strong>Clock skew:</strong> Wall-clock differences can skew timeout calculations; use monotonic clocks',
            '<strong>Backpressure:</strong> An overloaded node may still be alive but unable to respond in time'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>ZooKeeper failure detection.</strong> ZooKeeper uses heartbeats between clients and servers as well as between servers in an ensemble. A client sends a periodic heartbeat to its connected server. If the server does not hear from the client within a session timeout, it cleans up the client session and releases any ephemeral nodes.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Heartbeats are periodic messages used to detect process or node failures',
            'A missed heartbeat beyond a timeout marks a node as failed or suspect',
            'Gossip scales better than all-pairs heartbeats but is eventually consistent',
            'Tune timeouts carefully to balance detection speed and false positives'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How does a heartbeat differ from a health check? → A heartbeat is usually sent by a node to a monitor, while a health check is often polled by a load balancer or orchestrator.',
            'Q2: What causes false positives in heartbeat-based failure detection? → Network delays, GC pauses, high load, or clock skew can make a healthy node miss its deadline.',
            'Q3: When would you use gossip instead of heartbeats? → When you need a scalable, eventually consistent membership list rather than fast point-to-point failure detection.'
          ]
        }
      ]
    },
    'checksum': {
      title: 'Checksum',
      sections: [
        {
          heading: 'What is a Checksum?',
          text: 'A checksum is a small fixed-size value computed from a larger block of data. It is used to detect accidental changes or corruption during transmission or storage. If the recomputed checksum does not match the original, the data has been altered.',
          list: [
            '<strong>CRC:</strong> Cyclic Redundancy Check, fast and good for detecting bit flips in networking.',
            '<strong>MD5:</strong> Older 128-bit hash; fast but not collision-resistant; still useful for integrity checks.',
            '<strong>SHA-256:</strong> Cryptographic hash, strong collision resistance, used for security and integrity.',
            '<strong>Data corruption:</strong> Disk errors, network noise, and memory faults can flip bits silently.',
            '<strong>End-to-end:</strong> Checksums verify integrity from source to destination.'
          ]
        },
        {
          heading: 'Checksum Verification Flow',
          diagram: {
            chart: `sequenceDiagram
    participant S as Sender
    participant R as Receiver
    S->>S: compute hash of data
    S->>R: send data + checksum
    R->>R: recompute hash of data
    R->>R: compare checksums
    alt match
        R-->>S: OK
    else mismatch
        R-->>S: CORRUPTION DETECTED
    end`,
            caption: 'Sender and receiver compute the same hash; mismatches indicate corruption.'
          }
        },
        {
          heading: 'Checksum Algorithms',
          table: {
            headers: ['Algorithm', 'Length', 'Use Case', 'Security'],
            rows: [
              ['CRC32', '32 bits', 'Network packets, file integrity', 'Not secure'],
              ['MD5', '128 bits', 'Legacy file checksums', 'Broken for security'],
              ['SHA-256', '256 bits', 'Data integrity, TLS, blockchains', 'Collision-resistant'],
              ['Blake3', '256 bits', 'High-speed verification', 'Modern, fast']
            ]
          }
        },
        {
          heading: 'Python SHA-256 Example',
          example: {
            title: 'Verify data integrity',
            code: `import hashlib

def compute_checksum(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

original = b'Transfer $500 to account 42'
checksum = compute_checksum(original)
print('Checksum:', checksum)

received = b'Transfer $500 to account 42'
if compute_checksum(received) == checksum:
    print('Integrity verified')
else:
    print('Data corrupted!')`,
            output: 'Matching checksums prove integrity; any bit flip produces a different hash.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Checksums in Distributed Systems',
          text: 'Distributed systems move data across networks and disks. Checksums catch corruption at every layer. Storage systems compute checksums for blocks and verify them on reads. Message queues and RPC frameworks include checksums in frames to detect network corruption.',
          list: [
            '<strong>HDFS:</strong> Stores CRC32 checksums for each block and verifies them on read',
            '<strong>S3:</strong> Supports MD5 and SHA-256 checksums for uploaded objects',
            '<strong>TCP:</strong> Includes a checksum in every segment, though it is weak for large transfers',
            '<strong>Application layer:</strong> Systems often re-verify with SHA-256 after TCP checksums'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>HDFS block verification.</strong> Hadoop Distributed File System stores each data block with a separate CRC32 checksum. When a DataNode serves a block to a client, the client recomputes the checksum and compares it with the stored value. If they differ, the client reads the block from another replica, ensuring users never see corrupted data.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Checksums detect accidental data corruption during transmission or storage',
            'CRC is fast for networking; SHA-256 is strong and collision-resistant',
            'Sender and receiver must compute the same hash using the same algorithm',
            'Distributed systems verify checksums at multiple layers for reliability'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Can a checksum guarantee a file has not been altered? → A strong cryptographic hash like SHA-256 makes tampering practically impossible; weak hashes like CRC can be forged.',
            'Q2: Why do distributed storage systems store checksums separately? → So corruption can be detected even when the data itself is intact, and the system can choose a different replica.',
            'Q3: What is the difference between a checksum and a hash? → A checksum is generally for error detection; a hash can be used for both integrity and identity, depending on its strength.'
          ]
        }
      ]
    },
    'leader-follower': {
      title: 'Leader and Follower',
      sections: [
        {
          heading: 'What is Leader-Follower?',
          text: 'Leader-follower is a replication pattern where one node, the leader, accepts all writes and replicates them to one or more followers. Followers serve read requests and can be promoted to leader if the current leader fails. This pattern is the foundation of many distributed databases and message queues.',
          list: [
            '<strong>Leader:</strong> The single writable source of truth for a partition or dataset',
            '<strong>Follower:</strong> Read-only replica that receives updates from the leader',
            '<strong>Replication:</strong> Can be synchronous or asynchronous, trading durability for latency',
            '<strong>Failover:</strong> Promoting a follower to leader when the leader fails',
            '<strong>Consensus:</strong> Protocols like Raft and Paxos elect a leader safely across nodes'
          ]
        },
        {
          heading: 'Leader-Follower Architecture',
          diagram: {
            chart: `flowchart LR
    C[Client] -->|writes| L[(Leader)]
    C -->|reads| F1[(Follower 1)]
    C -->|reads| F2[(Follower 2)]
    L -->|replicate| F1
    L -->|replicate| F2
    style L fill:#e74c3c,color:#fff
    style F1 fill:#2ecc71,color:#fff
    style F2 fill:#2ecc71,color:#fff`,
            caption: 'All writes go to the leader; reads can be served by followers.'
          }
        },
        {
          heading: 'Synchronous vs Asynchronous Replication',
          table: {
            headers: ['Aspect', 'Synchronous', 'Asynchronous'],
            rows: [
              ['Durability', 'No data loss on failover', 'Possible data loss on failover'],
              ['Latency', 'Higher; waits for follower ack', 'Lower; acks immediately'],
              ['Throughput', 'Lower', 'Higher'],
              ['Use case', 'Financial transactions', 'Social feeds, analytics'],
              ['Examples', 'PostgreSQL sync rep, Raft', 'MySQL async replication, Redis']
            ]
          }
        },
        {
          heading: 'Python Replica Simulation',
          example: {
            title: 'Leader writes and replicates to followers',
            code: `import random
import time

class Replica:
    def __init__(self, name):
        self.name = name
        self.is_leader = False
        self.data = {}

    def write(self, key, value):
        if not self.is_leader:
            raise Exception('Only leader accepts writes')
        self.data[key] = value
        print(f'[{self.name}] wrote {key}={value}')

    def replicate(self, follower):
        follower.data = self.data.copy()
        print(f'[{self.name}] replicated to {follower.name}')

leader = Replica('Leader')
leader.is_leader = True
follower = Replica('Follower')

leader.write('foo', 'bar')
leader.replicate(follower)
print(follower.data)`,
            output: 'Leader accepts the write and copies the updated state to the follower.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Failover and Split-Brain',
          text: 'Failover promotes a follower to leader when the old leader is unreachable. Split-brain occurs when two nodes believe they are leader simultaneously, which can cause data divergence. Quorum-based systems and fencing mechanisms prevent split-brain.',
          list: [
            '<strong>Quorum:</strong> A node must be acknowledged by a majority to become leader',
            '<strong>Split-brain:</strong> Two leaders accept conflicting writes, causing data loss',
            '<strong>Fencing:</strong> Force the old leader to step down before a new leader serves writes',
            '<strong>Raft:</strong> Leader election uses randomized timeouts and majority votes',
            '<strong>Paxos:</strong> Classic consensus protocol; harder to implement but proven'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Redis Sentinel and replication.</strong> Redis uses asynchronous leader-follower replication. A primary Redis node accepts writes and streams commands to replicas. Redis Sentinel monitors the primary and promotes a replica to primary if the primary fails. Sentinel uses a quorum to avoid split-brain during failover.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Leader-follower separates writes to a leader and reads to followers',
            'Synchronous replication is durable but slower; asynchronous is faster but may lose data',
            'Failover promotes a follower, but quorum is needed to avoid split-brain',
            'Raft and Paxos are consensus protocols used for safe leader election'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the main read-after-write risk with asynchronous replication? → A client may read from a follower that has not yet received the latest write.',
            'Q2: How do you prevent split-brain during failover? → Use a quorum majority and fencing so only one node can be leader at a time.',
            'Q3: When would you choose synchronous replication? → When durability is more important than write latency, such as financial transactions.'
          ]
        }
      ]
    }
  }
};