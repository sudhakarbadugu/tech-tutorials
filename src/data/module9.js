export const module9 = {
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
        DB[(PostgreSQL)] --> WAL[WAL Log]
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
        C3 -->|process + commit offset<br/>in same transaction| DB[(DB + Offset Store)]
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
    Data[New Data] -->|Append| BatchStore[(Immutable Raw Data Store)]
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
    Data[New Data] -->|Append| Kafka[(Kafka Log<br/>Retains all events)]
    
    Kafka -->|Real-time| Processor1[Stream Processor v2<br/>Real-time view]
    Kafka -->|Replay from offset 0| Processor2[Stream Processor v2<br/>Reprocessing view]
    
    Processor1 -->|Current views| ServingDB[(Serving DB)]
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
};