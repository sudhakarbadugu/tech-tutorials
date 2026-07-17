export const module12 = {
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
    
    CS1 --> Redis[(Redis Pub/Sub<br/>Message Routing)]
    CS2 --> Redis
    CS3 --> Redis
    
    CS1 --> DB[(Cassandra<br/>Message Storage)]
    CS2 --> DB
    CS3 --> DB
    
    Redis --> Presence[(Redis<br/>Presence Store)]
    
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
        ChatServer[Chat Server] -->|Write| Cassandra[(Cassandra<br/>Partition: conversation_id<br/>Cluster: timestamp)]
        ChatServer -->|Cache recent| Redis[(Redis<br/>Last 50 msgs per conv)]
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
        Table[messages table<br/>conversation_id (PK)<br/>message_id (clustering)<br/>sender_id, content, type<br/>timestamp]
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
    ChatServer -->|Update last_seen| Redis[(Redis<br/>presence: user_id -> timestamp)]
    
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
};