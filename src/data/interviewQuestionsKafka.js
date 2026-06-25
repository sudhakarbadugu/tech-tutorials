// Kafka Interview Questions
// Source: LinkedIn post by Omkar Tomar — Senior-Level Interview Questions

export const kafkaQuestions = {
  "questions": [
    {
      "question": "How does Kafka achieve high throughput?",
      "answer": "<p>Kafka achieves high throughput through several architectural decisions:</p><h4>1. Sequential I/O</h4><ul><li>Kafka appends messages to log files sequentially — no random disk seeks.</li><li>Sequential disk writes are nearly as fast as sequential memory reads on modern SSDs (~600 MB/s).</li></ul><h4>2. Zero-Copy Transfer</h4><ul><li>Kafka uses <code>sendfile()</code> to transfer data directly from disk to network socket, bypassing user-space memory copies.</li><li>Reduces CPU usage and memory bandwidth consumption.</li></ul><h4>3. Batch Compression</h4><ul><li>Producers batch messages together and compress the entire batch (snappy, lz4, zstd, gzip).</li><li>Compression is applied once per batch, not per message — huge savings at high volume.</li></ul><h4>4. Partitioning for Parallelism</h4><ul><li>Topics are split into partitions; each partition is an independent log.</li><li>Consumers in a group read from partitions in parallel — throughput scales with partition count.</li></ul><h4>5. Page Cache</h4><ul><li>Kafka relies on the OS page cache for reading — it does not maintain its own application cache.</li><li>Multiple consumers reading the same topic all benefit from the same cached pages.</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Messaging"],
      "keyPoints": [
        "Sequential disk I/O — append-only logs, no random seeks, near-memory speeds on SSDs",
        "Zero-copy transfer via sendfile() — disk to network without user-space copies",
        "Batch compression — compress per batch, not per message",
        "Partitioning — parallel producers and consumers, throughput scales with partitions",
        "OS page cache — Kafka does not maintain its own cache, relies on the OS"
      ]
    },
    {
      "question": "What causes consumer lag and how do you diagnose it?",
      "answer": "<p><strong>Consumer lag</strong> is the difference between the latest offset produced by the broker and the last committed offset of the consumer group.</p><h4>Common Causes</h4><ul><li><strong>Slow processing:</strong> Consumer takes longer to process than the producer takes to produce.</li><li><strong>Insufficient consumers:</strong> Fewer consumers than partitions — some consumers handle multiple partitions.</li><li><strong>Frequent rebalances:</strong> Consumers joining/leaving the group triggers rebalances that pause consumption.</li><li><strong>GC pauses:</strong> Long GC pauses in the consumer JVM stall offset commits.</li><li><strong>Network/dependency bottlenecks:</strong> Consumer writes to a slow database or downstream service.</li></ul><h4>Diagnosis Steps</h4><ol><li><code>kafka-consumer-groups.sh --describe --group &lt;group-id&gt;</code> — shows lag per partition.</li><li>Monitor <code>records-lag-max</code> via JMX or Kafka consumer metrics.</li><li>Check consumer logs for rebalance events, GC pauses, or processing errors.</li><li>Use Burrow or Kafka UI tools for lag trend visualization.</li></ol><h4>Fixes</h4><ul><li>Scale consumers up to partition count.</li><li>Optimize processing logic (batch writes, async I/O).</li><li>Increase partitions if the topic is under-partitioned.</li><li>Tune <code>fetch.min.bytes</code>, <code>max.poll.records</code> for batch efficiency.</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Monitoring"],
      "keyPoints": [
        "Consumer lag = broker's latest offset − consumer's last committed offset",
        "Causes: slow processing, insufficient consumers, frequent rebalances, GC pauses, downstream bottlenecks",
        "Diagnose with kafka-consumer-groups.sh --describe, JMX records-lag-max, Burrow",
        "Fix: scale consumers, optimize processing, increase partitions, tune fetch/poll settings"
      ]
    },
    {
      "question": "How do you handle duplicate messages in Kafka?",
      "answer": "<p>Kafka provides <strong>at-least-once</strong> delivery by default, which means duplicates can occur during retries or rebalances. Handling them requires <strong>idempotency</strong> on the consumer side.</p><h4>Producer-Side Deduplication</h4><ul><li>Enable <strong>idempotent producer</strong>: <code>enable.idempotence=true</code> — Kafka deduplicates on the broker using a producer ID and sequence numbers.</li><li>This prevents duplicates from producer retries but NOT from consumer rebalances.</li></ul><h4>Consumer-Side Idempotency</h4><ul><li><strong>Unique message ID:</strong> Include a unique key (UUID, event ID) in each message. Consumer stores processed IDs (in Redis/DB) and skips duplicates.</li><li><strong>Idempotent operations:</strong> Design the consumer operation to be naturally idempotent — e.g., <code>UPSERT</code> instead of <code>INSERT</code>, or <code>set balance = X</code> instead of <code>set balance = balance + X</code>.</li><li><strong>Transactional outbox:</strong> Consumer writes to a DB with a unique constraint on the message key — duplicate inserts fail silently.</li></ul><h4>Exactly-Once Processing</h4><ul><li>Kafka Transactions API (<code>transactional.id</code>) provides exactly-once across produce-consume pipelines.</li><li>Consumer must use <code>isolation.level=read_committed</code> to only read committed transactions.</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Idempotency"],
      "keyPoints": [
        "Kafka is at-least-once by default — duplicates happen on retries/rebalances",
        "Idempotent producer (enable.idempotence=true) deduplicates on broker side",
        "Consumer-side: unique message IDs + dedup store, or design idempotent operations (UPSERT)",
        "Exactly-once: Kafka Transactions API with transactional.id + read_committed isolation"
      ]
    },
    {
      "question": "Explain Kafka partitioning strategy. How do you choose partition count?",
      "answer": "<p><strong>Partitioning</strong> is how Kafka parallelizes a topic. Each partition is an ordered, append-only log that lives on one broker (with replicas on others).</p><h4>How Partitioning Works</h4><ul><li><strong>Producer</strong> sends a message with a key. Kafka hashes the key to determine the partition: <code>partition = hash(key) % numPartitions</code>.</li><li>Messages with the same key always go to the same partition — guarantees ordering per key.</li><li>If key is null, Kafka uses round-robin or sticky partitioning.</li></ul><h4>Choosing Partition Count</h4><ul><li><strong>Throughput target:</strong> More partitions = more parallelism. Rule of thumb: partitions ≥ peak throughput / per-partition throughput.</li><li><strong>Consumer parallelism:</strong> Max useful consumers in a group = number of partitions. If you need 10 parallel consumers, you need ≥ 10 partitions.</li><li><strong>Per-broker limit:</strong> Avoid too many partitions per broker (recommendation: ≤ 4000 partitions per broker). Too many partitions increase broker overhead and rebalance time.</li><li><strong>Replication:</strong> Each partition has replicas (e.g., replication factor 3). More partitions = more replica traffic.</li></ul><h4>Custom Partitioner</h4><ul><li>Implement <code>org.apache.kafka.clients.producer.Partitioner</code> for custom logic (e.g., geo-based partitioning, hot-key mitigation).</li></ul>",
      "difficulty": "Intermediate",
      "tags": ["Kafka", "Architecture"],
      "keyPoints": [
        "Partition = ordered, append-only log on one broker with replicas",
        "Key-based partitioning: hash(key) % numPartitions — same key → same partition → ordering guarantee",
        "Partition count drives parallelism: max consumers per group = partitions",
        "Rule of thumb: partitions ≥ peak throughput / per-partition throughput; ≤ 4000 partitions/broker",
        "Custom Partitioner interface for domain-specific routing"
      ]
    },
    {
      "question": "How do you guarantee message ordering in Kafka?",
      "answer": "<p>Kafka guarantees ordering only <strong>within a single partition</strong>. There is no ordering guarantee across partitions.</p><h4>Strategies for Ordering</h4><ul><li><strong>Same key → same partition:</strong> Use a business key (e.g., <code>orderId</code>) so all events for that entity go to one partition and are consumed in order.</li><li><strong>Single partition topic:</strong> If you need global ordering, use one partition. This kills parallelism — only one consumer processes messages.</li><li><strong>Key-based ordering with parallelism:</strong> Use entity keys to get per-entity ordering while keeping parallelism across entities.</li></ul><h4>Consumer-Side Ordering</h4><ul><li>Within a partition, a single consumer thread processes messages in offset order by default.</li><li>If you parallelize processing within a consumer (e.g., thread pool), you lose ordering — use key-based routing to worker threads to preserve per-key ordering.</li></ul><h4>Common Pitfall</h4><ul><li>Retries with <code>max.in.flight.requests.per.connection &gt; 1</code> can reorder messages. Enable idempotent producer to safely retry without reordering.</li></ul>",
      "difficulty": "Intermediate",
      "tags": ["Kafka", "Ordering"],
      "keyPoints": [
        "Ordering guaranteed only within a partition, NOT across partitions",
        "Same key → same partition (hash-based) — use entity key (orderId, userId) for per-entity ordering",
        "Single partition = global ordering but no parallelism (anti-pattern for high throughput)",
        "Idempotent producer prevents reordering on retries when max.in.flight &gt; 1"
      ]
    },
    {
      "question": "What is exactly-once processing in Kafka and how is it achieved?",
      "answer": "<p><strong>Exactly-once semantics (EOS)</strong> means each message is processed exactly once — no duplicates, no lost messages — even across producer retries and consumer rebalances.</p><h4>Kafka Transactions API</h4><ul><li>Producer sets <code>transactional.id</code> — Kafka deduplicates messages across retries using this ID.</li><li>Producer calls <code>beginTransaction()</code>, sends messages, then <code>commitTransaction()</code> or <code>abortTransaction()</code>.</li><li>Consumer sets <code>isolation.level=read_committed</code> — only reads committed transactions, skips aborted ones.</li></ul><h4>Consume-Process-Produce Pipeline</h4><ul><li>The classic EOS pattern: read from input topic → process → write to output topic, all in one transaction.</li><li>Offsets are committed in the same transaction as the output messages — atomic read-process-write.</li><li>If the consumer crashes, the transaction aborts and both the output and offset commit are rolled back.</li></ul><h4>Limitations</h4><ul><li>EOS only works within Kafka (Kafka-to-Kafka). Writing to an external system (DB, HTTP) breaks exactly-once — you need consumer-side idempotency.</li><li>Performance overhead: transactions add latency (~100ms commit interval by default).</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Transactions"],
      "keyPoints": [
        "Exactly-once = each message processed once, no duplicates, no losses — across retries and rebalances",
        "Transactional producer: transactional.id + beginTransaction/commitTransaction/abortTransaction",
        "Consumer: isolation.level=read_committed — only sees committed messages",
        "Consume-process-produce pattern: offsets + output committed atomically in one transaction",
        "Limitation: EOS is Kafka-to-Kafka only; external sinks need consumer-side idempotency"
      ]
    },
    {
      "question": "What happens when a Kafka broker fails?",
      "answer": "<p>Kafka is designed for high availability through <strong>replication</strong>. When a broker fails, the cluster continues operating with minimal disruption.</p><h4>Failure Sequence</h4><ol><li><strong>Controller detects failure:</strong> The Kafka controller (an elected broker) detects the failed broker via ZooKeeper/KRaft heartbeat timeout (~10s).</li><li><strong>Leadership reassignment:</strong> Partitions where the failed broker was the leader get new leaders elected from their in-sync replicas (ISR).</li><li><strong>Producer/consumer retry:</strong> Clients automatically reconnect to the new leader. In-flight requests may fail and get retried.</li><li><strong>Replica catch-up:</strong> When the broker recovers, it rejoins the ISR and catches up by fetching missing messages from the current leader.</li></ol><h4>Edge Cases</h4><ul><li><strong>Controller failure:</strong> A new controller is elected from the remaining brokers. Brief cluster-wide pause (~seconds).</li><li><strong>ISR shrinks:</strong> If a broker falls too far behind, it is removed from ISR. If ISR drops below <code>min.insync.replicas</code>, producers with <code>acks=all</code> get <code>NotEnoughReplicasException</code>.</li><li><strong>Unclean leader election:</strong> If <code>unclean.leader.election.enable=true</code> (default false since 1.0), a non-ISR replica can become leader — data loss possible but availability preserved.</li></ul><h4>Best Practices</h4><ul><li>replication.factor ≥ 3, min.insync.replicas = 2, acks = all.</li><li>Spread partitions across brokers to avoid hot spots.</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Fault Tolerance"],
      "keyPoints": [
        "Controller detects broker failure via heartbeat timeout (~10s)",
        "New leaders elected from ISR for partitions where failed broker was leader",
        "Clients auto-reconnect to new leader; in-flight requests retry",
        "Recovered broker rejoins ISR and catches up from current leader",
        "Best practice: replication.factor=3, min.insync.replicas=2, acks=all, unclean.leader.election=false"
      ]
    },
    {
      "question": "How would you design a Dead Letter Queue (DLQ) strategy in Kafka?",
      "answer": "<p>A <strong>Dead Letter Queue (DLQ)</strong> is a separate topic where messages that cannot be processed are sent, so they do not block the main pipeline.</p><h4>When to Use a DLQ</h4><ul><li>Message deserialization fails (corrupt data).</li><li>Processing fails after max retries (persistent errors, not transient).</li><li>Schema validation fails (incompatible schema version).</li></ul><h4>Design Pattern</h4><ol><li><strong>Retry topic:</strong> Consumer sends failed messages to a retry topic (e.g., <code>orders.retry</code>). A retry consumer reprocesses with backoff.</li><li><strong>DLQ topic:</strong> After N retries, message is sent to <code>orders.dlq</code> for manual inspection or automated alerting.</li><li><strong>Headers:</strong> Include original topic, partition, offset, error reason, retry count, and timestamp as headers for debugging.</li></ol><h4>Implementation (Spring Kafka)</h4><pre><code>@KafkaListener(topics = \"orders\", groupId = \"order-service\")\npublic void handle(OrderEvent event, Acknowledgment ack) {\n    try {\n        processOrder(event);\n        ack.acknowledge();\n    } catch (Exception e) {\n        kafkaTemplate.send(\"orders.dlq\", event.getKey(), event);\n        ack.acknowledge(); // don't block — move on\n    }\n}</code></pre><h4>DLQ Consumer</h4><ul><li>Alert on DLQ message arrival (Slack, PagerDuty).</li><li>Replay tool to fix and re-send messages to the original topic.</li><li>Dashboard showing DLQ message count, error categories, and trends.</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Error Handling"],
      "keyPoints": [
        "DLQ = separate topic for messages that cannot be processed",
        "Use cases: deserialization failure, persistent processing errors, schema violations",
        "Pattern: main topic → retry topic (with backoff) → DLQ after N retries",
        "Include original topic/partition/offset/error in headers for debugging",
        "DLQ consumer: alert on arrival, replay tool, dashboard for trends"
      ]
    },
    {
      "question": "Kafka vs RabbitMQ — when would you choose which?",
      "answer": "<p>Both are messaging systems but designed for very different use cases.</p><h4>Kafka — Event Streaming</h4><ul><li><strong>Append-only log:</strong> Messages are stored durably and can be replayed. Retention is configurable (time or size based).</li><li><strong>High throughput:</strong> Millions of messages/second. Optimized for sequential I/O and batch processing.</li><li><strong>Multiple consumers:</strong> Multiple independent consumer groups can read the same topic at their own pace.</li><li><strong>Use cases:</strong> Event sourcing, log aggregation, stream processing, CDC, real-time data pipelines.</li></ul><h4>RabbitMQ — Message Broker</h4><ul><li><strong>Queue-based:</strong> Message is delivered to one consumer and acknowledged. Once acked, it is removed.</li><li><strong>Flexible routing:</strong> Exchanges (direct, topic, fanout, headers) with complex routing rules.</li><li><strong>Lower latency:</strong> Optimized for fast message delivery (~ microseconds). Lower throughput than Kafka.</li><li><strong>Use cases:</strong> Task queues, RPC, work distribution, pub/sub with complex routing.</li></ul><table style='border-collapse:collapse;margin:10px 0;'><tr style='background:#f5f5f5;'><th style='padding:8px;border:1px solid #ddd;'>Feature</th><th style='padding:8px;border:1px solid #ddd;'>Kafka</th><th style='padding:8px;border:1px solid #ddd;'>RabbitMQ</th></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Model</td><td style='padding:8px;border:1px solid #ddd;'>Append-only log</td><td style='padding:8px;border:1px solid #ddd;'>Queue + exchanges</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Throughput</td><td style='padding:8px;border:1px solid #ddd;'>Millions/sec</td><td style='padding:8px;border:1px solid #ddd;'>~100K/sec</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Replay</td><td style='padding:8px;border:1px solid #ddd;'>Yes (retention)</td><td style='padding:8px;border:1px solid #ddd;'>No (acked = gone)</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Routing</td><td style='padding:8px;border:1px solid #ddd;'>Topic/partition</td><td style='padding:8px;border:1px solid #ddd;'>Complex exchanges</td></tr><tr><td style='padding:8px;border:1px solid #ddd;'>Best for</td><td style='padding:8px;border:1px solid #ddd;'>Streaming, events</td><td style='padding:8px;border:1px solid #ddd;'>Task queues, RPC</td></tr></table>",
      "difficulty": "Intermediate",
      "tags": ["Kafka", "RabbitMQ", "Messaging"],
      "keyPoints": [
        "Kafka: append-only log, high throughput, replayable, multiple consumer groups — best for streaming",
        "RabbitMQ: queue-based, flexible routing, low latency, ack removes message — best for task queues/RPC",
        "Kafka throughput: millions/sec; RabbitMQ: ~100K/sec",
        "Kafka: event sourcing, log aggregation, CDC; RabbitMQ: work distribution, pub/sub with complex routing"
      ]
    },
    {
      "question": "How do you replay historical events safely in Kafka?",
      "answer": "<p>Replaying historical events is one of Kafka's key strengths — messages are retained on disk and can be re-consumed by resetting the consumer offset.</p><h4>Approaches</h4><ol><li><strong>Reset offset to earliest:</strong> Stop the consumer, reset its offset to the beginning (<code>seekToBeginning()</code> or <code>kafka-consumer-groups.sh --reset-offsets --to-earliest</code>), and restart. The consumer re-reads all messages from the start.</li><li><strong>Reset to a specific timestamp:</strong> <code>--to-datetime 2026-06-01T00:00:00</code> to replay from a specific point in time.</li><li><strong>Reset to a specific offset:</strong> <code>--to-offset 12345</code> to replay from an exact position.</li><li><strong>New consumer group:</strong> Create a new consumer group with a fresh offset — starts from earliest or a chosen position without affecting existing consumers.</li></ol><h4>Safety Considerations</h4><ul><li><strong>Idempotency:</strong> Ensure the consumer operation is idempotent — reprocessing old messages should not create duplicates. Use unique event IDs or UPSERT patterns.</li><li><strong>Downstream impact:</strong> Replaying thousands of events may overwhelm downstream services. Use rate limiting or batch processing.</li><li><strong>Schema compatibility:</strong> Old messages may use a different schema version. Ensure schema registry or backward-compatible deserialization.</li><li><strong>Side effects:</strong> Replaying events that trigger emails, payments, or notifications is dangerous. Filter or use a dry-run flag to suppress side effects during replay.</li><li><strong>Separate replay topic:</strong> For critical pipelines, replay into a separate topic first, validate, then promote.</li></ul>",
      "difficulty": "Advanced",
      "tags": ["Kafka", "Replay"],
      "keyPoints": [
        "Reset consumer offset: to earliest, to timestamp, to specific offset, or use a new consumer group",
        "Idempotency is critical — reprocessing must not create duplicates (use event IDs, UPSERT)",
        "Downstream impact: rate-limit replay to avoid overwhelming services",
        "Schema compatibility: old messages may use different schema versions",
        "Side effects: suppress emails/payments during replay; consider a separate replay topic for validation"
      ]
    }
  ]
};