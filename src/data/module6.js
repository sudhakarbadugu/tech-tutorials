export const module6 = {
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
        App[Application] -->|1. Write + Event| DB[(Database)]
        App -->|2. Read outbox| Outbox[(Outbox Table)]
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
};