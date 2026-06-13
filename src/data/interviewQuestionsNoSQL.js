// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.497Z

export const nosqlQuestions = {
  "questions": [
    {
      "question": "What is NoSQL and how does it differ from SQL databases?",
      "answer": "<p><strong>NoSQL</strong> (Not Only SQL) databases provide flexible schemas and horizontal scalability for large-scale data.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>SQL</th><th style='padding:8px;border:1px solid #ddd;'>NoSQL</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Schema</td><td style='padding:8px;border:1px solid #ddd;'>Fixed, rigid</td><td style='padding:8px;border:1px solid #ddd;'>Flexible, dynamic</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Scaling</td><td style='padding:8px;border:1px solid #ddd;'>Vertical (bigger server)</td><td style='padding:8px;border:1px solid #ddd;'>Horizontal (more servers)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Relationships</td><td style='padding:8px;border:1px solid #ddd;'>Joins, foreign keys</td><td style='padding:8px;border:1px solid #ddd;'>Embedded or references</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Transactions</td><td style='padding:8px;border:1px solid #ddd;'>ACID compliant</td><td style='padding:8px;border:1px solid #ddd;'>Eventual consistency (BASE)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Use case</td><td style='padding:8px;border:1px solid #ddd;'>Complex queries, relationships</td><td style='padding:8px;border:1px solid #ddd;'>Big data, real-time, unstructured</td></tr></table><h4>NoSQL Categories</h4><ul><li><strong>Document</strong> — MongoDB, CouchDB (JSON/BSON documents)</li><li><strong>Key-Value</strong> — Redis, DynamoDB (simple lookups)</li><li><strong>Column-Family</strong> — Cassandra, HBase (wide columns)</li><li><strong>Graph</strong> — Neo4j, Amazon Neptune (relationships)</li></ul>",
      "difficulty": "Beginner",
      "tags": [
        "NoSQL",
        "Databases"
      ],
      "keyPoints": [
        "Document — MongoDB, CouchDB (JSON/BSON documents)",
        "Key-Value — Redis, DynamoDB (simple lookups)",
        "Column-Family — Cassandra, HBase (wide columns)"
      ]
    },
    {
      "question": "What is the CAP theorem?",
      "answer": "<p>The <strong>CAP theorem</strong> states that a distributed data store can only guarantee two of three properties:</p><ul><li><strong>C</strong>onsistency — all nodes see the same data at the same time</li><li><strong>A</strong>vailability — every request receives a response (success or failure)</li><li><strong>P</strong>artition Tolerance — system continues operating despite network partitions</li></ul><p>Since network partitions are inevitable, systems choose between CP or AP:</p><ul><li><strong>CP</strong> — Consistency + Partition Tolerance (sacrifice availability during partitions)</li><li><strong>AP</strong> — Availability + Partition Tolerance (sacrifice consistency, eventual consistency)</li><li><strong>CA</strong> — Consistency + Availability (no partition tolerance — single node)</li></ul><pre><code>// CP example: MongoDB with write concern majority\n// AP example: Cassandra, DynamoDB\n// CA example: traditional RDBMS on single node</code></pre><p><strong>PACELC theorem</strong> extends CAP: if partitioned (P), choose A or C; else (E), choose latency (L) or consistency (C).</p>",
      "difficulty": "Beginner",
      "tags": [
        "NoSQL",
        "CAP Theorem",
        "Distributed Systems"
      ],
      "keyPoints": [
        "C onsistency — all nodes see the same data at the same time",
        "A vailability — every request receives a response (success or failure)",
        "P artition Tolerance — system continues operating despite network partitions"
      ]
    },
    {
      "question": "Explain MongoDB document model and BSON.",
      "answer": "<p><strong>MongoDB</strong> stores data as documents in BSON (Binary JSON) format.</p><pre><code>{\n  _id: ObjectId('507f1f77bcf86cd799439011'),\n  name: 'Alice',\n  email: 'alice@example.com',\n  age: 30,\n  address: {\n    street: '123 Main St',\n    city: 'New York',\n    zip: '10001'\n  },\n  tags: ['developer', 'blogger'],\n  createdAt: ISODate('2024-01-15T10:00:00Z'),\n  metadata: {\n    version: 1,\n    source: 'web'\n  }\n}</code></pre><h4>BSON Features</h4><ul><li>Rich data types: Date, ObjectId, Binary, Decimal128, Timestamp</li><li>Efficient encoding (typed, not text-based)</li><li>Traversable — supports efficient querying</li><li>16MB document size limit</li></ul><h4>Collections</h4><p>Documents are grouped into collections (like tables). Collections are schemaless — documents can have different fields.</p>",
      "difficulty": "Beginner",
      "tags": [
        "MongoDB",
        "Document Store"
      ],
      "keyPoints": [
        "Rich data types: Date, ObjectId, Binary, Decimal128, Timestamp",
        "Efficient encoding (typed, not text-based)",
        "Traversable — supports efficient querying"
      ]
    },
    {
      "question": "What are MongoDB indexes and how do they work?",
      "answer": "<p>Indexes improve query performance by avoiding collection scans.</p><pre><code>// Single field index\ndb.users.createIndex({ email: 1 }) // 1 = ascending, -1 = descending\n\n// Compound index\ndb.users.createIndex({ lastName: 1, firstName: 1 })\n\n// Unique index\ndb.users.createIndex({ email: 1 }, { unique: true })\n\n// Text index for search\ndb.articles.createIndex({ content: 'text', title: 'text' })\ndb.articles.find({ $text: { $search: 'mongodb tutorial' } })\n\n// Multikey index (arrays)\ndb.users.createIndex({ tags: 1 })\n\n// TTL index (auto-delete)\ndb.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })\n\n// Partial index\ndb.users.createIndex(\n  { email: 1 },\n  { partialFilterExpression: { age: { $gte: 18 } } }\n)</code></pre><h4>Index Types</h4><ul><li><strong>Single Field</strong> — one field</li><li><strong>Compound</strong> — multiple fields (order matters for prefix matching)</li><li><strong>Multikey</strong> — indexes array elements</li><li><strong>Text</strong> — full-text search</li><li><strong>Hashed</strong> — for sharding</li><li><strong>Wildcard</strong> — indexes all subfields</li></ul><p>Use <code>explain('executionStats')</code> to analyze query plans.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "MongoDB",
        "Indexes",
        "Performance"
      ],
      "keyPoints": [
        "Compound — multiple fields (order matters for prefix matching)",
        "Multikey — indexes array elements",
        "Wildcard — indexes all subfields"
      ]
    },
    {
      "question": "Explain MongoDB aggregation framework.",
      "answer": "<p>The <strong>aggregation pipeline</strong> processes documents through a series of stages, with each stage transforming the output for the next.</p><pre><code>db.orders.aggregate([\n  { $match: { status: 'shipped' } },\n  { $group: {\n      _id: '$customerId',\n      totalSpent: { $sum: '$amount' },\n      orderCount: { $sum: 1 },\n      avgOrder: { $avg: '$amount' }\n  }},\n  { $sort: { totalSpent: -1 } },\n  { $limit: 10 },\n  { $project: {\n      customerId: '$_id',\n      totalSpent: 1,\n      orderCount: 1,\n      avgOrder: { $round: ['$avgOrder', 2] }\n  }}\n])</code></pre><h4>Common Stages</h4><ul><li><strong>$match</strong> — filter documents (like WHERE)</li><li><strong>$group</strong> — group by key, apply accumulators</li><li><strong>$project</strong> — reshape documents</li><li><strong>$sort</strong> — order results</li><li><strong>$limit / $skip</strong> — pagination</li><li><strong>$lookup</strong> — left outer join</li><li><strong>$unwind</strong> — flatten arrays</li><li><strong>$facet</strong> — multi-stage parallel aggregation</li></ul><pre><code>// $lookup (join)\ndb.users.aggregate([\n  { $lookup: {\n      from: 'orders',\n      localField: '_id',\n      foreignField: 'userId',\n      as: 'orders'\n  }}\n])</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "MongoDB",
        "Aggregation"
      ],
      "keyPoints": [
        "$match — filter documents (like WHERE)",
        "$group — group by key, apply accumulators",
        "$project — reshape documents"
      ]
    },
    {
      "question": "What is sharding in MongoDB?",
      "answer": "<p><strong>Sharding</strong> distributes data across multiple servers (shards) to handle large datasets and high throughput.</p><h4>Components</h4><ul><li><strong>Shard</strong> — holds a subset of data (replica set recommended)</li><li><strong>Mongos</strong> — query router, directs operations to correct shard</li><li><strong>Config Servers</strong> — store metadata and routing information</li></ul><h4>Shard Keys</h4><p>The shard key determines data distribution:</p><pre><code>// Enable sharding on database\nsh.enableSharding('mydb')\n\n// Shard a collection\nsh.shardCollection('mydb.users', { userId: 1 })\n\n// Hashed shard key (even distribution)\nsh.shardCollection('mydb.logs', { _id: 'hashed' })\n\n// Compound shard key\nsh.shardCollection('mydb.orders', { region: 1, orderDate: 1 })</code></pre><h4>Choosing a Shard Key</h4><ul><li><strong>Cardinality</strong> — high number of unique values</li><li><strong>Frequency</strong> — avoid monotonically increasing keys (hot spotting)</li><li><strong>Query targeting</strong> — include in common queries for efficiency</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "MongoDB",
        "Sharding",
        "Scaling"
      ],
      "keyPoints": [
        "Shard — holds a subset of data (replica set recommended)",
        "Mongos — query router, directs operations to correct shard",
        "Config Servers — store metadata and routing information"
      ]
    },
    {
      "question": "Explain Redis data structures and use cases.",
      "answer": "<p><strong>Redis</strong> is an in-memory key-value store supporting multiple data structures:</p><h4>Core Data Types</h4><ul><li><strong>String</strong> — text, integers, floats, binary (up to 512MB)</li><li><strong>Hash</strong> — field-value maps (like objects)</li><li><strong>List</strong> — ordered collection (linked list)</li><li><strong>Set</strong> — unordered unique collection</li><li><strong>Sorted Set (ZSet)</strong> — set ordered by score</li><li><strong>Bitmap</strong> — bit-level operations</li><li><strong>HyperLogLog</strong> — cardinality estimation</li><li><strong>Stream</strong> — append-only log (like Kafka topics)</li><li><strong>Geospatial</strong> — longitude/latitude indexes</li></ul><pre><code>// Strings\nSET user:1:name 'Alice'\nGET user:1:name\nINCR view_count\nSETEX session:abc 3600 'data' // with TTL\n\n// Hashes\nHSET user:1 email 'alice@example.com' age 30\nHGETALL user:1\n\n// Lists\nLPUSH queue:tasks 'task1'\nRPUSH queue:tasks 'task2'\nLPOP queue:tasks // FIFO\n\n// Sets\nSADD tags:post:1 'redis' 'database'\nSISMEMBER tags:post:1 'redis'\n\n// Sorted Sets\nZADD leaderboard 100 'player1' 200 'player2'\nZRANGE leaderboard 0 2 WITHSCORES\n\n// Pub/Sub\nPUBLISH channel:news 'New article!'\nSUBSCRIBE channel:news\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "Redis",
        "Key-Value"
      ],
      "keyPoints": [
        "String — text, integers, floats, binary (up to 512MB)",
        "Hash — field-value maps (like objects)",
        "List — ordered collection (linked list)"
      ]
    },
    {
      "question": "What are Redis persistence options?",
      "answer": "<p>Redis provides two persistence mechanisms:</p><h4>RDB (Redis Database)</h4><p>Point-in-time snapshots of the dataset.</p><pre><code># redis.conf\nsave 900 1      # save after 900s if 1 key changed\nsave 300 10     # save after 300s if 10 keys changed\nsave 60 10000   # save after 60s if 10000 keys changed\n\n# Manual\nBGSAVE          # background save\nSAVE            # blocking save\n</code></pre><p><strong>Pros:</strong> compact, fast recovery, good for backups<br><strong>Cons:</strong> potential data loss between snapshots</p><h4>AOF (Append Only File)</h4><p>Logs every write operation.</p><pre><code># redis.conf\nappendonly yes\nappendfsync everysec  # always | everysec | no\n\n# AOF rewrite (compaction)\nBGREWRITEAOF\n</code></pre><p><strong>Pros:</strong> durable, minimal data loss<br><strong>Cons:</strong> larger files, slower recovery</p><h4>Hybrid (Redis 4.0+)</h4><p>Use both: RDB for fast startup, AOF for durability. Redis loads RDB then replays AOF.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Redis",
        "Persistence"
      ],
      "keyPoints": [
        "Redis provides two persistence mechanisms: RDB (Redis Database) Point-in-time snapshots of the dataset.",
        "conf appendonly yes appendfsync everysec # always | everysec | no # AOF rewrite (compaction) BGREWRITEAOF Pros: durable, minimal data loss Cons: larger files, slower recovery Hybrid (Redis 4."
      ]
    },
    {
      "question": "Explain DynamoDB key concepts.",
      "answer": "<p><strong>Amazon DynamoDB</strong> is a fully managed NoSQL key-value and document database.</p><h4>Core Concepts</h4><ul><li><strong>Table</strong> — collection of items</li><li><strong>Item</strong> — collection of attributes (max 400KB)</li><li><strong>Attribute</strong> — fundamental data element</li><li><strong>Primary Key</strong> — uniquely identifies an item</li><ul><li><strong>Partition Key</strong> — single attribute</li><li><strong>Composite Key</strong> — partition key + sort key</li></ul></ul><pre><code>// Table: Orders\n// Partition Key: UserId\n// Sort Key: OrderTimestamp\n\n{\n  UserId: 'user123',\n  OrderTimestamp: '2024-01-15T10:00:00Z',\n  OrderId: 'order456',\n  Items: [...],\n  Total: 99.99\n}\n\n// Query by partition key + sort range\nQuery:\n  TableName: Orders\n  KeyConditionExpression: 'UserId = :uid AND OrderTimestamp BETWEEN :start AND :end'\n</code></pre><h4>Secondary Indexes</h4><ul><li><strong>LSI</strong> — Local Secondary Index (same partition key, different sort key)</li><li><strong>GSI</strong> — Global Secondary Index (different partition/sort keys)</li></ul><h4>Capacity Modes</h4><ul><li><strong>On-Demand</strong> — pay per request</li><li><strong>Provisioned</strong> — set RCU/WCU, with auto-scaling</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "DynamoDB",
        "AWS"
      ],
      "keyPoints": [
        "Table — collection of items",
        "Item — collection of attributes (max 400KB)",
        "Attribute — fundamental data element"
      ]
    },
    {
      "question": "What is the difference between embedding and referencing in MongoDB?",
      "answer": "<p>MongoDB offers two modeling strategies:</p><h4>Embedding (Denormalized)</h4><pre><code>{\n  _id: ObjectId('...'),\n  name: 'Alice',\n  address: {\n    street: '123 Main',\n    city: 'NYC'\n  },\n  orders: [\n    { orderId: 'A001', total: 99.99 },\n    { orderId: 'A002', total: 49.99 }\n  ]\n}</code></pre><p><strong>When to embed:</strong> contained relationship, data read together, no unbounded growth.</p><h4>Referencing (Normalized)</h4><pre><code>// User document\n{\n  _id: ObjectId('...'),\n  name: 'Alice',\n  orderIds: [ObjectId('o1'), ObjectId('o2')]\n}\n\n// Orders in separate collection\n{ _id: ObjectId('o1'), total: 99.99, userId: ObjectId('...') }\n</code></pre><p><strong>When to reference:</strong> many-to-many, data changes independently, unbounded arrays, need ACID across documents.</p><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Factor</th><th style='padding:8px;border:1px solid #ddd;'>Embed</th><th style='padding:8px;border:1px solid #ddd;'>Reference</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Reads</td><td style='padding:8px;border:1px solid #ddd;'>Single query</td><td style='padding:8px;border:1px solid #ddd;'>Multiple queries or $lookup</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Updates</td><td style='padding:8px;border:1px solid #ddd;'>May update large docs</td><td style='padding:8px;border:1px solid #ddd;'>Update specific docs</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Growth</td><td style='padding:8px;border:1px solid #ddd;'>16MB limit</td><td style='padding:8px;border:1px solid #ddd;'>No limit</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": [
        "MongoDB",
        "Data Modeling"
      ],
      "keyPoints": [
        "MongoDB offers two modeling strategies: Embedding (Denormalized) { _id: ObjectId('...",
        "'), name: 'Alice', address: { street: '123 Main', city: 'NYC' }, orders: [ { orderId: 'A001', total: 99."
      ]
    },
    {
      "question": "Explain Cassandra's architecture and data model.",
      "answer": "<p><strong>Apache Cassandra</strong> is a distributed wide-column store designed for high availability and linear scalability.</p><h4>Architecture</h4><ul><li><strong>Peer-to-peer</strong> — no master, all nodes equal</li><li><strong>Partitioning</strong> — consistent hashing (Murmur3)</li><li><strong>Replication</strong> — configurable per keyspace</li><li><strong>Tunable consistency</strong> — ONE, QUORUM, ALL, LOCAL_QUORUM, etc.</li></ul><h4>Data Model</h4><pre><code>CREATE KEYSPACE mykeyspace\n  WITH replication = {\n    'class': 'SimpleStrategy',\n    'replication_factor': 3\n  };\n\nCREATE TABLE users (\n  user_id UUID PRIMARY KEY,\n  email TEXT,\n  name TEXT,\n  created_at TIMESTAMP\n);\n\n// Wide rows (time series)\nCREATE TABLE sensor_data (\n  sensor_id TEXT,\n  timestamp TIMESTAMP,\n  temperature DOUBLE,\n  humidity DOUBLE,\n  PRIMARY KEY (sensor_id, timestamp)\n) WITH CLUSTERING ORDER BY (timestamp DESC);\n</code></pre><h4>CQL vs SQL</h4><ul><li>No joins, subqueries, or foreign keys</li><li>Query-first design — tables modeled for specific queries</li><li>Denormalization is expected</li></ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Cassandra",
        "Column Family"
      ],
      "keyPoints": [
        "Peer-to-peer — no master, all nodes equal",
        "Partitioning — consistent hashing (Murmur3)",
        "Replication — configurable per keyspace"
      ]
    },
    {
      "question": "What are ACID and BASE properties in databases?",
      "answer": "<p>Two different consistency models:</p><h4>ACID (Relational / SQL)</h4><ul><li><strong>Atomicity</strong> — all operations succeed or all fail</li><li><strong>Consistency</strong> — database remains valid after transaction</li><li><strong>Isolation</strong> — concurrent transactions don't interfere</li><li><strong>Durability</strong> — committed data persists</li></ul><h4>BASE (NoSQL / Distributed)</h4><ul><li><strong>Basically Available</strong> — system is always responsive</li><li><strong>Soft State</strong> — state may change without input (eventual consistency)</li><li><strong>Eventual Consistency</strong> — data will be consistent at some point</li></ul><pre><code>// MongoDB multi-document ACID (v4.0+)\nconst session = db.getMongo().startSession();\nsession.startTransaction();\ntry {\n  db.users.updateOne({ _id: 1 }, { $set: { balance: 90 } }, { session });\n  db.transactions.insertOne({ from: 1, to: 2, amount: 10 }, { session });\n  session.commitTransaction();\n} catch (error) {\n  session.abortTransaction();\n}\n\n// DynamoDB transactions\nTransactWriteItems: {\n  TransactItems: [\n    { Put: { TableName: 'Orders', Item: { ... } } },\n    { Update: { TableName: 'Inventory', Key: { ... }, UpdateExpression: '...' } }\n  ]\n}</code></pre><p>Modern NoSQL databases increasingly support ACID transactions for critical operations.</p>",
      "difficulty": "Beginner",
      "tags": [
        "NoSQL",
        "ACID",
        "BASE",
        "Transactions"
      ],
      "keyPoints": [
        "Atomicity — all operations succeed or all fail",
        "Consistency — database remains valid after transaction",
        "Isolation — concurrent transactions don't interfere"
      ]
    },
    {
      "question": "Explain Neo4j and graph database concepts.",
      "answer": "<p><strong>Neo4j</strong> is a graph database storing data as nodes, relationships, and properties.</p><h4>Core Concepts</h4><ul><li><strong>Node</strong> — entity with labels and properties</li><li><strong>Relationship</strong> — directed connection between nodes, with type and properties</li><li><strong>Property</strong> — key-value pair on nodes or relationships</li><li><strong>Label</strong> — tag for grouping nodes</li></ul><pre><code>// Create nodes and relationship\nCREATE (alice:Person {name: 'Alice', age: 30})\nCREATE (bob:Person {name: 'Bob', age: 25})\nCREATE (alice)-[:FRIEND {since: '2020'}]-&gt;(bob)\nCREATE (acme:Company {name: 'Acme'})\nCREATE (alice)-[:WORKS_AT]-&gt;(acme)\n\n// Query with Cypher\nMATCH (p:Person)-[:FRIEND]-&gt;(friend)\nWHERE p.name = 'Alice'\nRETURN friend.name\n\n// Recommendations: friends of friends\nMATCH (p:Person {name: 'Alice'})-[:FRIEND]-&gt;()-[:FRIEND]-&gt;(fof)\nWHERE p &lt;&gt; fof\nRETURN fof.name\n\n// Path finding\nMATCH path = shortestPath(\n  (a:Person {name: 'Alice'})-[*]-(b:Person {name: 'Charlie'})\n)\nRETURN path\n</code></pre><h4>Use Cases</h4><p>Social networks, fraud detection, recommendation engines, network/IT operations, knowledge graphs.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Neo4j",
        "Graph Database"
      ],
      "keyPoints": [
        "Node — entity with labels and properties",
        "Relationship — directed connection between nodes, with type and properties",
        "Property — key-value pair on nodes or relationships"
      ]
    },
    {
      "question": "What is Eventual Consistency and how do you handle it?",
      "answer": "<p><strong>Eventual consistency</strong> guarantees that if no new updates are made, eventually all replicas will converge to the same value.</p><h4>Handling Strategies</h4><ul><li><strong>Read-Your-Writes</strong> — route reads to the replica you wrote to</li><li><strong>Monotonic Reads</strong> — always read from replicas with version >= previous read</li><li><strong>Consistent Prefix Reads</strong> — never see out-of-order writes</li><li><strong>Vector Clocks</strong> — track causality between events</li><li><strong>Last-Write-Wins (LWW)</strong> — timestamp-based resolution</li><li><strong>CRDTs</strong> — conflict-free replicated data types</li></ul><pre><code>// DynamoDB conditional write (optimistic locking)\ndb.updateItem({\n  TableName: 'Users',\n  Key: { userId: '123' },\n  UpdateExpression: 'SET balance = balance - :amount',\n  ConditionExpression: 'balance &gt;= :amount',\n  ExpressionAttributeValues: {\n    ':amount': 50,\n    ':expectedVersion': 5\n  }\n})\n\n// MongoDB write concern\n db.collection('orders').insertOne(\n  doc,\n  { writeConcern: { w: 'majority', j: true, wtimeout: 5000 } }\n)\n</code></pre><p>Choose consistency level based on business requirements: financial transactions need strong consistency; social likes can be eventual.</p>",
      "difficulty": "Advanced",
      "tags": [
        "NoSQL",
        "Eventual Consistency",
        "Distributed Systems"
      ],
      "keyPoints": [
        "Read-Your-Writes — route reads to the replica you wrote to",
        "Monotonic Reads — always read from replicas with version >= previous read",
        "Consistent Prefix Reads — never see out-of-order writes"
      ]
    }
  ]
}
