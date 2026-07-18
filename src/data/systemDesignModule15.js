// Module 15: Networking & Distributed Systems Core

export const systemDesignModule15 = {
  module15: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'This module covers the networking and distributed systems primitives that hold modern cloud architectures together: DNS, consensus protocols, distributed ID generation, locking, service discovery, and vector clocks. These topics appear constantly in system design interviews because they sit underneath almost every scalable service.',
          list: [
            '<strong>Topics covered:</strong> DNS, Consensus (Raft & Paxos), Distributed ID Generation, Distributed Locking, Service Discovery, Vector Clocks',
            '<strong>Prerequisites:</strong> Modules on load balancing, caching, databases, and leader-follower replication',
            '<strong>Time to complete:</strong> ~3-4 hours including diagrams and code examples',
            '<strong>Best for:</strong> System design interviews, distributed systems engineering, and cloud architecture reviews'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Every distributed system must agree on names, leadership, identity, ownership, location, and ordering. Getting these wrong leads to outages, split-brain, duplicate IDs, expired locks, or silently lost data. This module gives you the conceptual models and concrete examples to reason about them correctly.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[DNS] --> T2[Consensus]
    T2 --> T3[Distributed IDs]
    T3 --> T4[Distributed Locks]
    T4 --> T5[Service Discovery]
    T5 --> T6[Vector Clocks]`,
          text: 'Recommended reading order — each topic builds on the previous one.'
        }
      ]
    },
    'dns': {
      title: 'DNS & Name Resolution',
      sections: [
        {
          heading: 'What is DNS?',
          text: 'The Domain Name System (DNS) is a hierarchical, distributed naming service that translates human-readable domain names like example.com into IP addresses. It is often called the phone book of the internet, but it also supports load balancing, failover, geolocation, and service discovery.',
          list: [
            '<strong>Domain hierarchy:</strong> Root zone, top-level domains (TLD), second-level domains, and subdomains',
            '<strong>Authoritative nameserver:</strong> Holds the official records for a domain',
            '<strong>Recursive resolver:</strong> Caches and traverses the hierarchy on behalf of clients',
            '<strong>TTL:</strong> Time-to-live tells resolvers how long to cache a record before re-querying',
            '<strong>Anycast:</strong> Same IP advertised from many locations to route users to the nearest resolver'
          ]
        },
        {
          heading: 'Recursive vs Iterative Resolution',
          diagram: {
            chart: `sequenceDiagram
    participant U as User
    participant S as Stub Resolver
    participant R as Recursive Resolver
    participant Q as Root
    participant D as TLD
    participant A as Authoritative
    U->>S: resolve example.com
    S->>R: recursive query
    R->>Q: who serves .com
    Q-->>R: TLD nameservers
    R->>D: who serves example.com
    D-->>R: authoritative nameservers
    R->>A: A record for example.com
    A-->>R: 93.184.216.34
    R-->>S: answer
    S-->>U: 93.184.216.34`,
            caption: 'The recursive resolver does the legwork across root, TLD, and authoritative servers.'
          }
        },
        {
          heading: 'Common DNS Record Types',
          table: {
            headers: ['Record', 'Purpose', 'Example'],
            rows: [
              ['A', 'IPv4 address for a hostname', 'example.com -> 93.184.216.34'],
              ['AAAA', 'IPv6 address for a hostname', 'example.com -> 2001:db8::1'],
              ['CNAME', 'Alias to another domain', 'www.example.com -> example.com'],
              ['MX', 'Mail server priority and target', '10 mail.example.com'],
              ['TXT', 'Arbitrary text, often for verification', 'v=spf1 include:_spf.example.com'],
              ['NS', 'Nameserver delegation', 'ns-1.exampledns.com'],
              ['SRV', 'Service location with port and weight', '_http._tcp.example.com'],
              ['CAA', 'Certificate authority authorization', '0 issue letsencrypt.org']
            ]
          }
        },
        {
          heading: 'DNS-Based Load Balancing and Failover',
          text: 'DNS can return different IP addresses for the same name based on health, geography, or load. This is called GeoDNS or latency-based routing. Multiple A records with short TTLs let clients pick among healthy endpoints, and removing a failed IP from the zone triggers failover once caches expire.',
          list: [
            '<strong>Round-robin DNS:</strong> Returns multiple A records in rotating order; simple but ignores health',
            '<strong>GeoDNS:</strong> Routes users to the nearest datacenter based on resolver location',
            '<strong>Latency-based routing:</strong> Measures resolver latency and picks the fastest region',
            '<strong>DNS failover:</strong> Health checks remove unhealthy endpoints from DNS responses',
            '<strong>Short TTL trade-off:</strong> Faster failover but more resolver load and higher latency'
          ]
        },
        {
          heading: 'AWS Route 53 Health-Checked Record Example',
          example: {
            title: 'DNS failover with health checks',
            code: `{
  "Comment": "Failover routing policy",
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "api.example.com",
        "Type": "A",
        "SetIdentifier": "primary",
        "Failover": "PRIMARY",
        "TTL": 60,
        "ResourceRecords": [{"Value": "1.2.3.4"}],
        "HealthCheckId": "primary-hc"
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "api.example.com",
        "Type": "A",
        "SetIdentifier": "secondary",
        "Failover": "SECONDARY",
        "TTL": 60,
        "ResourceRecords": [{"Value": "5.6.7.8"}]
      }
    }
  ]
}`,
            output: 'Route 53 returns the primary IP when it is healthy and switches to the secondary when health checks fail.',
            language: 'json',
            type: 'code'
          }
        },
        {
          heading: 'Common DNS Mistakes',
          text: 'DNS seems simple until it is not. Long TTLs delay failover, misconfigured CNAMEs break mail, and stale caches hide changes. Understanding TTL and hierarchy prevents painful incidents.',
          list: [
            '<strong>Overly long TTLs:</strong> A 24-hour TTL means clients may reach a dead IP for a full day after failover',
            '<strong>CNAME at apex:</strong> The root of a zone cannot be a CNAME due to RFC rules and conflicts with other records',
            '<strong>Ignoring resolver caches:</strong> You cannot flush the entire internet; plan for cache behavior',
            '<strong>Missing health checks:</strong> DNS round-robin without health checks sends traffic to dead nodes'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Cloudflare global DNS and DDoS mitigation.</strong> Cloudflare operates one of the largest authoritative and recursive DNS networks using Anycast. During attacks, Cloudflare can absorb malicious traffic at the edge and reroute legitimate requests to healthy origins. Their DNS also supports GeoDNS and load balancing so that api.cloudflare.com resolves to the nearest datacenter, cutting latency for users worldwide.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'DNS translates domain names into IP addresses through a hierarchical, distributed system',
            'Recursive resolvers traverse root, TLD, and authoritative servers on behalf of clients',
            'TTL controls cache duration and directly impacts failover speed',
            'DNS-based load balancing uses GeoDNS, latency routing, and health-checked failover',
            'Route 53 and Cloudflare are common providers for advanced DNS routing'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the difference between recursive and iterative DNS resolution? → A recursive resolver handles the entire lookup for the client; an iterative resolver returns referrals and lets the client ask the next server.',
            'Q2: Why does DNS failover use short TTLs? → Short TTLs cause cached records to expire faster, so clients pick up new IPs quickly after a failure.',
            'Q3: Why can you not put a CNAME at the zone apex? → The apex must hold NS and SOA records; a CNAME cannot coexist with other records at the same owner name.'
          ]
        }
      ]
    },
    'consensus-raft-paxos': {
      title: 'Consensus Algorithms (Raft & Paxos)',
      sections: [
        {
          heading: 'What is Consensus?',
          text: 'Consensus is the problem of getting multiple independent computers to agree on a single value or sequence of values. It is fundamental to distributed databases, configuration stores, and leader election. A consensus protocol must remain safe even when messages are lost, nodes crash, or the network partitions.',
          list: [
            '<strong>Agreement:</strong> No two correct nodes decide on different values',
            '<strong>Validity:</strong> The chosen value must have been proposed by a participant',
            '<strong>Termination:</strong> Correct nodes eventually decide under stability',
            '<strong>Fault tolerance:</strong> Protocols tolerate minority failures, typically 2f+1 nodes for f faults',
            '<strong>FLP impossibility:</strong> No deterministic consensus protocol is guaranteed to terminate in an asynchronous system with even one faulty process'
          ]
        },
        {
          heading: 'How Raft Works',
          text: 'Raft separates consensus into three sub-problems: leader election, log replication, and safety. One node is elected leader; all writes flow through it, and it replicates entries to followers. Terms act as logical clocks and prevent stale leaders from committing new values.',
          list: [
            '<strong>Leader election:</strong> Nodes start as followers; if they hear no heartbeat, they become candidates and request votes',
            '<strong>Log replication:</strong> The leader appends client writes to its log and sends AppendEntries RPCs to followers',
            '<strong>Commit rule:</strong> An entry is committed once replicated on a majority, including the leader',
            '<strong>Safety:</strong> A leader of term T contains all entries committed in earlier terms before serving writes',
            '<strong>Split vote:</strong> Randomized election timeouts reduce the chance of repeated ties'
          ]
        },
        {
          heading: 'Raft Log Replication Architecture',
          diagram: {
            chart: `flowchart TD
    C[Client] -->|write x=5| L[Leader]
    L -->|AppendEntries| F1[Follower 1]
    L -->|AppendEntries| F2[Follower 2]
    L -->|AppendEntries| F3[Follower 3]
    F1 -->|ack| L
    F2 -->|ack| L
    L -->|commit| C
    style L fill:#e74c3c,color:#fff
    style F1 fill:#2ecc71,color:#fff
    style F2 fill:#2ecc71,color:#fff
    style F3 fill:#2ecc71,color:#fff`,
            caption: 'The leader replicates log entries to a majority before acknowledging the client.'
          }
        },
        {
          heading: 'Paxos and Multi-Paxos',
          text: 'Paxos is the classic consensus algorithm. A proposer asks acceptors to promise not to accept older proposals, then asks them to accept a value. Multi-Paxos optimizes repeated consensus by keeping a stable proposer (leader) so the promise phase is amortized across many values.',
          list: [
            '<strong>Prepare:</strong> Proposer picks a proposal number n and asks acceptors to promise not to accept lower numbers',
            '<strong>Promise:</strong> Acceptors reply with the highest value they have already accepted, or a blank promise',
            '<strong>Accept:</strong> Proposer sends its value to acceptors; acceptors accept if n is still the highest they promised',
            '<strong>Learn:</strong> Learners observe accepted values and propagate the decision',
            '<strong>Multi-Paxos:</strong> Reuse the same leader to skip the prepare phase after the first round'
          ]
        },
        {
          heading: 'Raft vs Paxos Comparison',
          table: {
            headers: ['Aspect', 'Raft', 'Paxos'],
            rows: [
              ['Understandability', 'Designed for clarity', 'Notoriously subtle'],
              ['Leader', 'Strong leader throughout', 'Any node can propose; Multi-Paxos adds stable leader'],
              ['Phases', 'Leader election plus AppendEntries', 'Prepare, promise, accept, learn'],
              ['Terminology', 'Terms, logs, commits', 'Proposal numbers, acceptors, quorums'],
              ['Common use', 'etcd, Consul, TiKV', 'Chubby, ZooKeeper Zab variant, academic systems']
            ]
          }
        },
        {
          heading: 'Python Raft Log Replication Example',
          example: {
            title: 'Leader appends and replicates an entry',
            code: `class RaftNode:
    def __init__(self, name, peers):
        self.name = name
        self.peers = peers
        self.log = []
        self.is_leader = False

    def append(self, command):
        if not self.is_leader:
            raise Exception('only leader accepts writes')
        entry = {'term': self.current_term, 'command': command}
        self.log.append(entry)
        acks = 1  # leader counts as an ack
        for peer in self.peers:
            if peer.replicate_entry(entry):
                acks += 1
        if acks > (len(self.peers) + 1) // 2:
            self.commit_index = len(self.log) - 1
            print(f'committed {command}')
        else:
            print(f'failed to commit {command}')

# Simulated cluster
class Peer:
    def replicate_entry(self, entry):
        return True  # simulate success

leader = RaftNode('leader', [Peer(), Peer()])
leader.is_leader = True
leader.current_term = 1
leader.append('set x=42')`,
            output: 'The leader replicates the entry to peers and commits it once a majority acknowledge.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Common Consensus Mistakes',
          text: 'Consensus is powerful but easy to misuse. Applications must understand the difference between commit, apply, and durability, and must never assume a leader is forever.',
          list: [
            '<strong>Ignoring leader changes:</strong> A former leader may still receive stale writes after a partition heals',
            '<strong>Reading from followers:</strong> Follower reads can be stale unless the protocol supports linearizable reads',
            '<strong>Even cluster size:</strong> A four-node cluster tolerates the same failures as a three-node cluster but increases quorum size',
            '<strong>Network partitions:</strong> A minority partition must step down to avoid split-brain'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>etcd and Kubernetes.</strong> Kubernetes stores all cluster state in etcd, which uses the Raft consensus algorithm. Every API server writes to the etcd leader, and etcd replicates the change to a majority before acknowledging. This guarantees that even if a control-plane node fails, the remaining nodes agree on the state of pods, services, and deployments. The recommended etcd cluster size is three or five nodes to tolerate one or two failures.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Consensus algorithms let distributed nodes agree on a value despite failures',
            'Raft uses leader election, log replication, and terms for clarity and safety',
            'Paxos uses prepare, promise, and accept phases; Multi-Paxos adds a stable leader',
            'A majority quorum is required for both commit safety and fault tolerance',
            'etcd, Consul, ZooKeeper, and Chubby use consensus for configuration and coordination'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why does Raft use randomized election timeouts? → To reduce the chance of split votes when multiple followers become candidates simultaneously.',
            'Q2: What is split-brain and how does quorum prevent it? → Split-brain is two nodes believing they are leader; a quorum ensures only a majority can commit writes.',
            'Q3: When would you choose Raft over Paxos? → When you want an easier-to-understand and easier-to-implement protocol without sacrificing safety.'
          ]
        }
      ]
    },
    'distributed-id-generation': {
      title: 'Distributed ID Generation',
      sections: [
        {
          heading: 'What is Distributed ID Generation?',
          text: 'Distributed ID generation is the problem of creating unique identifiers across many machines without coordination. Auto-increment primary keys work on a single database but become a bottleneck, expose ordering, and fail across shards. Distributed systems need IDs that are unique, ordered, roughly sortable, and fast to generate.',
          list: [
            '<strong>Uniqueness:</strong> No two generators should produce the same ID',
            '<strong>Scalability:</strong> Generation must not require a central coordinator',
            '<strong>Sortability:</strong> IDs roughly ordered by time simplify indexing and debugging',
            '<strong>Compactness:</strong> Shorter IDs reduce storage and network overhead',
            '<strong>Cardinality:</strong> The ID space must outlast the lifetime of the system'
          ]
        },
        {
          heading: 'Common ID Generation Strategies',
          table: {
            headers: ['Approach', 'Pros', 'Cons', 'Best For'],
            rows: [
              ['Auto-increment', 'Simple, strictly ordered', 'Single-node bottleneck, hard to shard', 'Single-node databases'],
              ['UUID v4', 'Globally unique, decentralized', 'Random, not sortable, 128 bits', 'Tokens, session IDs'],
              ['UUID v7', 'Time-ordered, sortable', 'Slightly larger than Snowflake', 'Modern distributed systems'],
              ['Snowflake', 'Sortable, compact, fast', 'Requires unique worker ID, clock sensitive', 'Twitter-scale timelines'],
              ['ObjectId', 'Time-ordered, embedded shard', 'MongoDB-specific format', 'MongoDB documents'],
              ['Ticket server', 'Strictly sequential, simple', 'Single point of contention', 'Low-volume sequences']
            ]
          }
        },
        {
          heading: 'Twitter Snowflake Format',
          diagram: {
            chart: `flowchart LR
    subgraph "64-bit Snowflake ID"
        T["41 bits timestamp"]
        W["10 bits worker ID"]
        S["12 bits sequence"]
    end
    T --> ID["Unique 64-bit integer"]
    W --> ID
    S --> ID
    style ID fill:#f39c12,color:#fff`,
            caption: 'Timestamp provides ordering, worker ID provides uniqueness, and sequence handles bursts on one worker.'
          }
        },
        {
          heading: 'Snowflake Mechanics',
          text: 'A Snowflake ID is a 64-bit integer composed of a timestamp, a worker ID, and a per-millisecond sequence number. The timestamp is relative to a custom epoch, so IDs are sortable by creation time. Each worker machine is assigned a unique worker ID, and the sequence increments for IDs generated in the same millisecond.',
          list: [
            '<strong>Timestamp:</strong> 41 bits gives about 69 years of IDs from the custom epoch',
            '<strong>Worker ID:</strong> 10 bits supports 1024 unique workers',
            '<strong>Sequence:</strong> 12 bits allows 4096 IDs per worker per millisecond',
            '<strong>Sign bit:</strong> Left unused so IDs remain positive signed integers',
            '<strong>Clock drift:</strong> Generators must wait or error if the clock moves backwards'
          ]
        },
        {
          heading: 'Python Snowflake Generator Example',
          example: {
            title: 'Generate time-ordered 64-bit IDs',
            code: `import time

class Snowflake:
    EPOCH = 1609459200000  # 2021-01-01
    WORKER_BITS = 10
    SEQUENCE_BITS = 12
    MAX_SEQUENCE = (1 << SEQUENCE_BITS) - 1

    def __init__(self, worker_id):
        if worker_id < 0 or worker_id >= (1 << self.WORKER_BITS):
            raise ValueError('worker_id out of range')
        self.worker_id = worker_id
        self.last_timestamp = -1
        self.sequence = 0

    def _now_ms(self):
        return int(time.time() * 1000)

    def next_id(self):
        ts = self._now_ms()
        if ts < self.last_timestamp:
            raise Exception('clock moved backwards')
        if ts == self.last_timestamp:
            self.sequence = (self.sequence + 1) & self.MAX_SEQUENCE
            if self.sequence == 0:
                while ts <= self.last_timestamp:
                    ts = self._now_ms()
        else:
            self.sequence = 0
        self.last_timestamp = ts
        id_value = ((ts - self.EPOCH) << (self.WORKER_BITS + self.SEQUENCE_BITS)) | \
                   (self.worker_id << self.SEQUENCE_BITS) | self.sequence
        return id_value

gen = Snowflake(worker_id=1)
print(gen.next_id())
print(gen.next_id())`,
            output: 'Each call returns a unique, time-ordered 64-bit integer generated without central coordination.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Handling Clock Drift',
          text: 'Snowflake-style IDs depend on wall-clock time. If a machine clock moves backwards, timestamp bits could repeat and violate uniqueness. Systems handle this by refusing to generate IDs until the clock catches up, by using monotonic clocks, or by adding logical sequence bits.',
          list: [
            '<strong>Wait strategy:</strong> Block generation until the current millisecond exceeds the last used millisecond',
            '<strong>Monotonic clock:</strong> Prefer CLOCK_MONOTONIC where wall-clock jumps are irrelevant for sequence',
            '<strong>NTP care:</strong> Configure NTP to slew time rather than step it backwards',
            '<strong>UUID v7:</strong> Uses Unix timestamp and random data, reducing clock sensitivity'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Twitter Snowflake and Instagram IDs.</strong> Twitter created Snowflake to generate roughly time-ordered 64-bit tweet IDs at massive scale. Instagram later adapted the approach for photo IDs, embedding a logical shard ID in the worker bits. Both systems needed IDs that were unique across thousands of machines, sortable by time for efficient range scans, and compact enough to fit in a 64-bit integer.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Distributed ID generation must provide uniqueness without a central bottleneck',
            'UUID v4 is random and decentralized but not sortable; UUID v7 adds time ordering',
            'Snowflake packs timestamp, worker ID, and sequence into a compact 64-bit integer',
            'Clock drift can break time-based ID generators; generators must wait or use monotonic clocks',
            'Choose ID format based on whether sortability, compactness, or decentralization matters most'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why are auto-increment IDs a poor choice for sharded databases? → They require coordination, expose ordering, and make resharding difficult.',
            'Q2: What is the maximum number of unique workers in the standard Snowflake layout? → 10 bits allow 1024 unique workers.',
            'Q3: How do you prevent duplicate IDs if a worker clock goes backwards? → Refuse generation until the clock advances, or rely on a monotonic clock and NTP slewing.'
          ]
        }
      ]
    },
    'distributed-locking': {
      title: 'Distributed Locking',
      sections: [
        {
          heading: 'What is Distributed Locking?',
          text: 'A distributed lock coordinates access to a shared resource across multiple processes or machines. Local locks like mutexes only work within one process, so distributed systems need locks that span nodes. Distributed locks are used for leader election, rate limiting, cron deduplication, and preventing duplicate work.',
          list: [
            '<strong>Mutual exclusion:</strong> Only one holder can own the lock at a time',
            '<strong>Lease:</strong> A time-bound grant that expires automatically if the holder crashes',
            '<strong>Fencing token:</strong> A monotonic number the resource checks to reject stale lock holders',
            '<strong>Liveness:</strong> A failed holder must release the lock so others can proceed',
            '<strong>Safety:</strong> Two holders must never believe they own the same lock simultaneously'
          ]
        },
        {
          heading: 'Redis SET NX PX Lock Flow',
          diagram: {
            chart: `sequenceDiagram
    participant C as Client
    participant R as Redis
    participant S as Shared Resource
    C->>R: SET lock NX PX 30000
    R-->>C: OK
    C->>S: perform guarded work
    C->>R: DEL lock
    Note over C,R: Lease expires if client crashes`,
            caption: 'The lock is acquired atomically, used, and released or expired when done.'
          }
        },
        {
          heading: 'Locking Strategies Compared',
          table: {
            headers: ['Strategy', 'Mechanism', 'Pros', 'Cons'],
            rows: [
              ['Redis single instance', 'SET key NX PX', 'Simple, fast', 'Single point of failure'],
              ['Redlock', 'Majority of Redis nodes', 'Tolerates node failures', 'Complex, clock sensitive, debated safety'],
              ['ZooKeeper', 'Ephemeral znode', 'Session-based cleanup', 'Higher latency, requires ensemble'],
              ['etcd', 'Lease with TTL', 'Strong consistency, TTL', 'Requires etcd cluster'],
              ['Database advisory lock', 'SELECT FOR UPDATE', 'No extra infrastructure', 'Does not scale well, ties lock to DB']
            ]
          }
        },
        {
          heading: 'The Redlock Algorithm',
          text: 'Redlock acquires the same lock on multiple independent Redis instances and considers the lock held only if a majority of instances grant it within a total timeout. It was proposed by Redis creator Salvatore Sanfilippo, though its safety under clock skew has been debated.',
          list: [
            '<strong>Acquire:</strong> Try to lock N instances with a TTL; collect successes',
            '<strong>Majority:</strong> Lock is valid only if successes exceed N/2',
            '<strong>Validity:</strong> Subtract acquisition time from TTL to determine real lock duration',
            '<strong>Release:</strong> Delete the lock on all instances, including those that refused',
            '<strong>Fencing token:</strong> Combine with a monotonic token for extra safety'
          ]
        },
        {
          heading: 'Node.js Redis Lock Example',
          example: {
            title: 'Acquire and release a lease-based lock',
            code: `const Redis = require('ioredis');
const redis = new Redis();
const LOCK_KEY = 'payment:lock:user:42';
const LOCK_TTL_MS = 30000;

async function acquireLock(lockKey, ttl) {
  const token = Date.now().toString();
  const acquired = await redis.set(lockKey, token, 'NX', 'PX', ttl);
  return acquired === 'OK' ? token : null;
}

async function releaseLock(lockKey, token) {
  const script = [
    "if redis.call('get', KEYS[1]) == ARGV[1] then",
    "  return redis.call('del', KEYS[1])",
    "else",
    "  return 0",
    "end"
  ].join('\n');
  return redis.eval(script, 1, lockKey, token);
}

(async () => {
  const token = await acquireLock(LOCK_KEY, LOCK_TTL_MS);
  if (!token) {
    console.log('lock not acquired');
    return;
  }
  try {
    console.log('doing guarded work');
  } finally {
    await releaseLock(LOCK_KEY, token);
  }
})();`,
            output: 'The lock is acquired atomically and released only by the same owner using a Lua script.',
            language: 'javascript',
            type: 'code'
          }
        },
        {
          heading: 'Common Locking Mistakes',
          text: 'Distributed locks are easy to implement incorrectly. A lock without a lease can hang forever; a lock without a fencing token can allow a stale holder to overwrite a newer one.',
          list: [
            '<strong>No TTL:</strong> A crashing holder leaves the locked forever unless manually cleaned up',
            '<strong>Long-lived locks:</strong> Work that exceeds the lease can be interrupted by another process',
            '<strong>Missing fencing token:</strong> A delayed process can write after its lock has been stolen',
            '<strong>Single Redis instance:</strong> The lock disappears if the Redis node fails and is not replicated safely',
            '<strong>Ignoring unlock failures:</strong> Always release in a finally block and handle retries'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix concurrency control and scheduled jobs.</strong> Netflix uses distributed locks backed by Redis and Cassandra to ensure that scheduled tasks run exactly once across a cluster. For example, a cleanup job that scans inactive sessions acquires a lock before starting. If the owner crashes, the lease expires and another instance takes over. Fencing tokens protect shared storage updates from delayed former holders.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Distributed locks coordinate shared resources across processes and machines',
            'Redis SET NX PX provides simple lease-based locking but needs TTL to avoid dead locks',
            'Redlock improves fault tolerance by requiring a majority of independent Redis nodes',
            'Fencing tokens prevent stale lock holders from corrupting shared state',
            'ZooKeeper and etcd provide strongly consistent locking through ephemeral nodes and leases'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why do local mutexes not work across servers? → They only synchronize threads within a single process; other machines cannot see them.',
            'Q2: What is a fencing token and why is it important? → A monotonic number that proves the current lock holder is still valid, preventing stale writes.',
            'Q3: What happens if a client crashes while holding a Redis lock with a TTL? → The lock expires automatically after the TTL, allowing another client to acquire it.'
          ]
        }
      ]
    },
    'service-discovery': {
      title: 'Service Discovery',
      sections: [
        {
          heading: 'What is Service Discovery?',
          text: 'Service discovery is the mechanism by which clients find the network location of healthy service instances. In dynamic environments like Kubernetes or auto-scaling groups, instance IPs change constantly. Service discovery decouples clients from specific endpoints and routes them to live instances.',
          list: [
            '<strong>Service registry:</strong> A database of service names to healthy instance endpoints',
            '<strong>Health checks:</strong> Probes that remove dead or unhealthy instances from the registry',
            '<strong>Client-side discovery:</strong> The client queries the registry and picks an instance directly',
            '<strong>Server-side discovery:</strong> The client sends to a load balancer or proxy that consults the registry',
            '<strong>DNS-based discovery:</strong> Standard DNS records are updated as instances change'
          ]
        },
        {
          heading: 'Client-Side vs Server-Side Discovery',
          diagram: {
            chart: `flowchart LR
    subgraph "Client-side"
        C1[Client] -->|query| R1[Registry]
        R1 -->|instances| C1
        C1 -->|call| I1[Instance A]
        C1 -->|call| I2[Instance B]
    end
    subgraph "Server-side"
        C2[Client] -->|request| LB[Load Balancer]
        LB -->|lookup| R2[Registry]
        R2 -->|instances| LB
        LB -->|route| I3[Instance C]
    end
    style R1 fill:#3498db,color:#fff
    style R2 fill:#3498db,color:#fff`,
            caption: 'Client-side places routing logic in the client; server-side hides it behind a proxy or balancer.'
          }
        },
        {
          heading: 'Service Registry Tools Compared',
          table: {
            headers: ['Tool', 'Model', 'Strengths', 'Common Pairing'],
            rows: [
              ['Consul', 'Distributed registry with health checks', 'Multi-datacenter, DNS interface', 'Nomad, Kubernetes'],
              ['etcd', 'Consistent key-value store', 'Raft-backed, Kubernetes-native', 'Kubernetes, CoreDNS'],
              ['Eureka', 'REST-based registry', 'Netflix ecosystem, client-side', 'Spring Cloud'],
              ['ZooKeeper', 'Coordination service', 'Mature, strong consistency', 'Kafka, older Hadoop stacks'],
              ['AWS Cloud Map', 'Managed registry', 'Integrated with ECS and Fargate', 'AWS load balancers']
            ]
          }
        },
        {
          heading: 'Kubernetes Service Discovery',
          text: 'Kubernetes provides service discovery through Services and DNS. A Service creates a stable virtual IP and DNS name backed by a set of pods. kube-proxy routes traffic to healthy pods, and CoreDNS resolves service names to cluster IPs or pod IPs depending on the service type.',
          list: [
            '<strong>ClusterIP:</strong> Stable internal IP reachable only inside the cluster',
            '<strong>Headless service:</strong> DNS returns pod IPs directly for client-side routing',
            '<strong>DNS naming:</strong> service.namespace.svc.cluster.local resolves automatically',
            '<strong>Endpoints:</strong> Kubernetes updates endpoints as pods start and stop',
            '<strong>Readiness probe:</strong> Pods are added to the service only when ready to serve traffic'
          ]
        },
        {
          heading: 'Kubernetes Service Example',
          example: {
            title: 'Expose a set of pods internally',
            code: `apiVersion: v1
kind: Service
metadata:
  name: payment-service
  namespace: payments
spec:
  selector:
    app: payment-api
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: ClusterIP
---
apiVersion: v1
kind: Endpoints
metadata:
  name: payment-service
  namespace: payments
subsets:
  - addresses:
      - ip: 10.0.1.10
      - ip: 10.0.1.11
    ports:
      - port: 8080`,
            output: 'Other pods can reach http://payment-service.payments.svc.cluster.local, and Kubernetes routes to healthy endpoints.',
            language: 'yaml',
            type: 'code'
          }
        },
        {
          heading: 'Common Service Discovery Mistakes',
          text: 'Service discovery fails when health checks are missing, caches are stale, or clients ignore DNS TTLs. Treating discovery as a one-time lookup rather than a continuous process causes clients to hit removed instances.',
          list: [
            '<strong>Missing health checks:</strong> Dead instances remain in the registry and receive traffic',
            '<strong>Ignoring TTLs:</strong> Clients that cache DNS forever miss failover changes',
            '<strong>Registry as SPOF:</strong> A single registry node can take down discovery for the whole system',
            '<strong>Over-fetching:</strong> Polling the registry too frequently adds load without benefit'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix Eureka and Spring Cloud.</strong> Netflix built Eureka for client-side service discovery in a large microservices fleet. Each service registers with Eureka and heartbeats periodically. Clients query Eureka, cache the instance list, and use a local load-balancing algorithm such as round-robin or latency-aware selection. This design keeps the data plane working even if Eureka itself is briefly unavailable.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Service discovery maps service names to healthy instance endpoints',
            'Client-side discovery puts routing in the client; server-side discovery uses a proxy or load balancer',
            'Health checks and TTLs are essential for accurate and timely discovery',
            'Consul, etcd, Eureka, ZooKeeper, and Kubernetes are common registry choices',
            'Envoy and Istio extend discovery with xDS APIs for advanced traffic management'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the main difference between client-side and server-side discovery? → Client-side discovery lets the client choose an instance; server-side discovery hides instances behind a load balancer.',
            'Q2: Why are health checks important in a service registry? → They ensure traffic is not sent to failed or unready instances.',
            'Q3: How does Kubernetes provide service discovery? → Through Services that create stable DNS names and virtual IPs backed by dynamic Endpoints and CoreDNS.'
          ]
        }
      ]
    },
    'vector-clocks': {
      title: 'Vector Clocks & Conflict Resolution',
      sections: [
        {
          heading: 'What are Vector Clocks?',
          text: 'A vector clock is a data structure that tracks the happens-before relationship between events in a distributed system. Each replica maintains a counter per node, and comparing two vector clocks reveals whether one event causally precedes another, whether they are concurrent, or whether they are equal.',
          list: [
            '<strong>Causality:</strong> Event A happens before event B if every counter in A is less than or equal to B and at least one is strictly less',
            '<strong>Concurrency:</strong> Two events are concurrent if neither vector dominates the other',
            '<strong>Version vector:</strong> A vector clock variant used to track per-replica state versions',
            '<strong>Dots:</strong> Some databases store a single event identifier to reduce metadata size',
            '<strong>Conflict:</strong> Concurrent updates to the same key require reconciliation'
          ]
        },
        {
          heading: 'Lamport Timestamps vs Vector Clocks',
          table: {
            headers: ['Aspect', 'Lamport Timestamp', 'Vector Clock'],
            rows: [
              ['Structure', 'Single integer', 'Array of counters per node'],
              ['Partial ordering', 'Can imply false ordering', 'Captures true causality'],
              ['Concurrency detection', 'Cannot detect', 'Can detect'],
              ['Size', 'Constant', 'Grows with number of nodes'],
              ['Use case', 'Lock ordering, logical clocks', 'Event ordering, conflict resolution']
            ]
          }
        },
        {
          heading: 'Vector Clock Mechanics',
          diagram: {
            chart: `flowchart LR
    subgraph "Replica A"
        A1[vA 1 0 0]
        A2[vA 2 0 0]
    end
    subgraph "Replica B"
        B1[vB 0 1 0]
        B2[vB 0 2 0]
    end
    A2 -->|sync| M[Merge to 2 2 0]
    B2 -->|sync| M
    style M fill:#f39c12,color:#fff`,
            caption: 'Each replica increments its own counter; merging takes the component-wise maximum.'
          }
        },
        {
          heading: 'Conflict Resolution Strategies',
          table: {
            headers: ['Strategy', 'How It Works', 'Trade-off'],
            rows: [
              ['Last-write-wins', 'Pick the event with the latest timestamp', 'Simple but can discard valid writes under clock skew'],
              ['Vector-clock merge', 'Take component-wise maximum and preserve both versions', 'Correct but requires application reconciliation'],
              ['Client-side merge', 'Return all concurrent versions to the client', 'Flexible but pushes complexity to callers'],
              ['CRDTs', 'Use mathematically mergeable data types', 'Always converges but limited data structures'],
              ['Vector clocks with siblings', 'Store concurrent versions as siblings', 'Accurate but uses more storage']
            ]
          }
        },
        {
          heading: 'Python Vector Clock Example',
          example: {
            title: 'Compare and merge vector clocks',
            code: `class VectorClock:
    def __init__(self, clock=None):
        self.clock = dict(clock) if clock else {}

    def increment(self, node):
        self.clock[node] = self.clock.get(node, 0) + 1
        return self

    def merge(self, other):
        result = {}
        for node in set(self.clock) | set(other.clock):
            result[node] = max(self.clock.get(node, 0), other.clock.get(node, 0))
        return VectorClock(result)

    def compare(self, other):
        dominates = False
        dominated = False
        for node in set(self.clock) | set(other.clock):
            a = self.clock.get(node, 0)
            b = other.clock.get(node, 0)
            if a > b:
                dominates = True
            elif b > a:
                dominated = True
        if dominates and not dominated:
            return 'after'
        if dominated and not dominates:
            return 'before'
        if not dominates and not dominated:
            return 'equal'
        return 'concurrent'

vc_a = VectorClock({'A': 2, 'B': 0, 'C': 0})
vc_b = VectorClock({'A': 0, 'B': 2, 'C': 0})
print(vc_a.compare(vc_b))  # concurrent
merged = vc_a.merge(vc_b)
print(merged.clock)  # {'A': 2, 'B': 2, 'C': 0}`,
            output: 'The comparison detects concurrency; the merge computes the component-wise maximum.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Common Vector Clock Mistakes',
          text: 'Vector clocks add metadata overhead and complexity. Treating them as timestamps or ignoring concurrent siblings leads to silent data loss or surprising merge behavior.',
          list: [
            '<strong>Clock size growth:</strong> One counter per replica can become large; prune stable entries safely',
            '<strong>Ignoring siblings:</strong> Returning only one version of a concurrent write loses data',
            '<strong>Assuming total order:</strong> Distributed events are only partially ordered; timestamps lie',
            '<strong>Using wall-clock LWW:</strong> Last-write-wins with wall clocks is unsafe under clock skew',
            '<strong>Pruning too aggressively:</strong> Removing vector entries early can make old versions appear concurrent'
          ]
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Amazon Dynamo and Riak.</strong> Amazon Dynamo used vector clocks to maintain eventual consistency across replicas without a primary. When concurrent updates occurred, Dynamo stored all versions as siblings and returned them to the client for reconciliation. Riak adopted the same model, offering vector clocks and dotted version vectors to track causality in distributed key-value storage. This design favors availability and partition tolerance, pushing conflict resolution to the application layer.'
        },
        {
          heading: 'Quick Recap',
          list: [
            'Vector clocks track causality and detect concurrent events across replicas',
            'A vector dominates another if every counter is greater than or equal and at least one is greater',
            'Concurrent events require conflict resolution such as last-write-wins, client merge, or CRDTs',
            'Lamport timestamps give a single number but cannot detect concurrency',
            'Dynamo and Riak use vector clocks to provide availability during network partitions'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What does it mean when two vector clocks are concurrent? → Neither event happened before the other; they were independent and require reconciliation.',
            'Q2: Why is last-write-wins unsafe in a distributed system? → Wall clocks can skew, so the latest timestamp does not always represent the causally latest write.',
            'Q3: How do Dynamo and Riak handle concurrent writes? → They store concurrent versions as siblings and let the client reconcile them using vector clocks.'
          ]
        }
      ]
    }
  }
};