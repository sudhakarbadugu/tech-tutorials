// Modules 17-19: News Feed, Web Crawler, Video Streaming

export const systemDesignModule17_19 = {
  module17: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'News feeds are the backbone of social networks. Designing a feed means balancing read and write fan-out, ranking billions of items, and keeping latency low for hundreds of millions of daily active users. This module walks through requirements, data models, fan-out strategies, ranking signals, and scaling patterns.',
          list: [
            '<strong>Topics covered:</strong> News Feed requirements, data model, fan-out, ranking, and scaling',
            '<strong>Prerequisites:</strong> Databases, caching, message queues, and basic distributed systems',
            '<strong>Time to complete:</strong> ~3-4 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interviews for social, content, and collaboration products'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Interviewers love feed problems because they touch almost every system design concept: eventual consistency, hot keys, fan-out trade-offs, ranking, and cache design. A strong answer shows you can reason about the celebrity problem, choose between push and pull, and explain how feeds stay fresh at scale.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Requirements] --> T2[Data Model]
    T2 --> T3[Fan-out]
    T3 --> T4[Ranking]
    T4 --> T5[Scaling]`,
          text: 'Recommended reading order — requirements first, then storage, then fan-out, ranking, and finally scaling.'
        }
      ]
    },
    'news-feed-overview': {
      title: 'News Feed: Requirements & Scale',
      sections: [
        {
          heading: 'What is a News Feed?',
          text: 'A news feed is a chronologically or algorithmically sorted list of posts, updates, and activities from people, pages, or groups a user follows. The core challenge is delivering fresh, personalized content to hundreds of millions of users with low latency while keeping storage and compute costs under control.',
          list: [
            '<strong>Target scale:</strong> 500 million daily active users, billions of posts per day',
            '<strong>Latency:</strong> Feed load should feel instant, typically under 200ms for the first page',
            '<strong>Freshness:</strong> New posts should reach followers within seconds for active users',
            '<strong>Availability:</strong> Feeds must remain readable even during partial outages',
            '<strong>Personalization:</strong> Ranking can blend recency, engagement, and user interests'
          ]
        },
        {
          heading: 'How a News Feed Works',
          text: 'A user creates a post, which is stored in a posts table and distributed to followers through a fan-out service. When a user opens the app, the feed service reads a precomputed feed or assembles one on the fly, ranks the items, and returns a paginated response.',
          list: [
            'User creates a post with content, media, and metadata',
            'The post is persisted and assigned a timestamp or snowflake ID',
            'Fan-out service writes the post ID into follower feeds or queues',
            'Feed service reads, merges, ranks, and paginates results',
            'Client caches the first page and requests subsequent pages on scroll',
            'Ranking and ads may be blended before final rendering'
          ]
        },
        {
          heading: 'News Feed Architecture',
          diagram: {
            chart: `flowchart LR
    U[User] -->|request| LB[Load Balancer]
    LB -->|route| API[API Gateway]
    API -->|read| FS[Feed Service]
    API -->|write| PS[Post Service]
    FS -->|fetch| FC[(Feed Cache)]
    FS -->|fallback| DB[(Feed DB)]
    PS -->|fan out| FOS[Fan-out Service]
    FOS -->|write| FC
    style FS fill:#3498db,color:#fff
    style FOS fill:#e74c3c,color:#fff`,
            caption: 'Writes fan out to follower feeds; reads serve precomputed or assembled feeds from cache.'
          }
        },
        {
          heading: 'Sample Feed Item JSON',
          example: {
            title: 'Minimal feed item representation',
            code: `{
  "post_id": "post_982374",
  "author_id": "user_42",
  "author_name": "Alice",
  "content": "Just shipped a new feature",
  "media_urls": ["https://cdn.example.com/pic.jpg"],
  "created_at": "2026-07-18T09:30:00Z",
  "likes": 128,
  "comments": 14,
  "shares": 5
}`,
            output: 'A feed item contains identity, content, metadata, and engagement counters needed for ranking and rendering.',
            language: 'json',
            type: 'code'
          }
        },
        {
          heading: 'Fan-out Model Comparison',
          table: {
            headers: ['Model', 'Write Cost', 'Read Cost', 'Best For'],
            rows: [
              ['Fan-out on write', 'High for celebrities', 'Low', 'Users with few followers and low read latency'],
              ['Fan-out on read', 'Low', 'High', 'Users with many followers and write-heavy workloads'],
              ['Hybrid', 'Moderate', 'Moderate', 'Most real-world social networks']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Twitter home timeline.</strong> Twitter uses a hybrid fan-out model. Normal users get fan-out-on-write so their tweets are preloaded into follower timelines. Celebrities use fan-out-on-read to avoid massive write amplification. The timeline service reads from Redis-backed caches and merges ranked tweets before returning them to clients.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Assuming fan-out-on-write is always better without considering celebrity users',
            `Storing full post content inside every follower's feed, which causes huge duplication`,
            'Using naive pagination with offsets instead of cursor-based pagination',
            'Forgetting to handle deleted posts or privacy changes in cached feeds',
            'Ranking the feed purely by time and missing engagement signals',
            'Underestimating read amplification from feed ranking and enrichment'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'News feeds must balance low read latency, freshness, and personalization at scale',
            'Fan-out-on-write is fast to read but explodes for celebrity posts',
            'Fan-out-on-read avoids write amplification but makes reads more expensive',
            'Hybrid models use the best strategy per user segment',
            'Feed items are usually cached and ranked before they reach the client'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why is fan-out-on-write expensive for celebrities? → A single post must be written into millions of follower feeds.',
            'Q2: What is the hybrid fan-out approach? → Fan-out-on-write for normal users and fan-out-on-read for celebrities.',
            'Q3: How do you paginate a feed without missing items? → Use cursor-based pagination keyed on timestamps or snowflake IDs.',
            'Q4: Why cache feeds instead of assembling them on every request? → Precomputed feeds reduce database load and keep latency low.'
          ]
        }
      ]
    },
    'news-feed-data-model': {
      title: 'News Feed: Data Model & Storage',
      sections: [
        {
          heading: 'What is the Data Model?',
          text: 'A news feed data model separates users, posts, follow relationships, and feed caches. Each entity has different access patterns, so using the right storage for each piece is critical. Relational databases work well for user profiles and follows, while wide-column or key-value stores handle high-volume posts and feeds.',
          list: [
            '<strong>Users:</strong> Profile data, preferences, and privacy settings',
            '<strong>Posts:</strong> Immutable content with metadata and engagement counters',
            '<strong>Follows / edges:</strong> Social graph representing who follows whom',
            '<strong>Feed caches:</strong> Precomputed lists of post IDs per user',
            '<strong>Engagement:</strong> Likes, comments, shares, and views used for ranking'
          ]
        },
        {
          heading: 'How Posts and Edges Are Stored',
          text: 'Posts are written once and read often, so they are stored in a wide-column store or distributed object store with a content delivery network for media. Follow relationships are stored as directed edges and may live in a graph database or a relational table with follower and followee columns. Feed caches store ordered post IDs keyed by user ID.',
          list: [
            'Posts table uses user_id and created_at as the partition or clustering key',
            'Media is stored in object storage and referenced by URL',
            'Follow edges are indexed by both follower and followee for efficient lookups',
            'Feed caches keep the most recent few hundred post IDs per user',
            'Counters are updated asynchronously to avoid write hot spots'
          ]
        },
        {
          heading: 'Data Model Architecture',
          diagram: {
            chart: `flowchart LR
    U[(Users)] -->|follows| E[(Edges)]
    U -->|writes| P[(Posts)]
    E -->|drives| F[(Feed Cache)]
    P -->|populate| F
    F -->|serves| FS[Feed Service]
    style P fill:#3498db,color:#fff
    style F fill:#f39c12,color:#fff`,
            caption: 'Users, posts, and edges feed into per-user feed caches served by the feed service.'
          }
        },
        {
          heading: 'Cassandra Schema Example',
          example: {
            title: 'Wide-column tables for posts and feeds',
            code: `-- Posts by author for profile and timeline enrichment
CREATE TABLE posts (
    author_id TEXT,
    post_id TEXT,
    content TEXT,
    created_at TIMESTAMP,
    media_urls LIST<TEXT>,
    PRIMARY KEY (author_id, created_at, post_id)
) WITH CLUSTERING ORDER BY (created_at DESC);

-- Precomputed feed for each user
CREATE TABLE user_feeds (
    user_id TEXT,
    post_id TEXT,
    author_id TEXT,
    score DOUBLE,
    PRIMARY KEY (user_id, score, post_id)
) WITH CLUSTERING ORDER BY (score DESC);`,
            output: 'Wide-column tables let the feed service read posts and feeds in sorted order with minimal random access.',
            language: 'sql',
            type: 'code'
          }
        },
        {
          heading: 'Storage Choice Comparison',
          table: {
            headers: ['Storage', 'Best For', 'Scaling', 'Trade-off'],
            rows: [
              ['Relational DB', 'User profiles and follows', 'Read replicas and sharding', 'Harder to scale writes beyond a single node'],
              ['Wide-column store', 'Posts and feed caches', 'Partition by user or post ID', 'Eventually consistent counters'],
              ['Graph database', 'Social graph queries', 'Graph partitioning', 'Higher overhead for simple feeds'],
              ['Object store + CDN', 'Images and videos', 'Massive scale', 'Not suitable for metadata queries']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Instagram photo feed storage.</strong> Instagram stores photos in object storage and serves them through a CDN. Post metadata, follow edges, and engagement counters live in a sharded data store. Feed caches keep each user’s home timeline materialized so reads are fast even though the underlying dataset is enormous.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Storing full post bodies inside feed caches, causing huge duplication',
            'Indexing feeds by offset instead of sortable cursors',
            'Placing all follows in a single relational table that becomes a hot shard',
            'Ignoring the need for denormalized counters in read-heavy feeds',
            'Choosing a graph database when simple key lookups would suffice',
            'Forgetting time-to-live policies on feed caches'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Separate users, posts, edges, feeds, and engagement into appropriate stores',
            'Wide-column stores excel at ordered feed and post reads',
            'Follow edges need indexes in both directions for followers and following lists',
            'Feed caches store post IDs, not full content, to save space',
            'Media belongs in object storage with a CDN'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why store only post IDs in feed caches? → It avoids duplicating large post bodies and keeps cache entries small.',
            'Q2: What clustering key works well for a posts table? → created_at descending so the newest posts are read first.',
            'Q3: How do you scale a follows table? → Shard by follower or followee and keep both directional indexes.',
            'Q4: Why are engagement counters updated asynchronously? → Synchronous updates create hot rows and slow down the write path.'
          ]
        }
      ]
    },
    'news-feed-fanout': {
      title: 'News Feed: Fan-out (Push vs Pull)',
      sections: [
        {
          heading: 'What is Fan-out?',
          text: 'Fan-out is the process of distributing a post to all followers. The two classic strategies are push, which writes the post into each follower feed at creation time, and pull, which gathers posts from followed users when the feed is read. The choice determines read latency, write amplification, and storage cost.',
          list: [
            '<strong>Fan-out on write:</strong> Preload post IDs into every follower feed immediately',
            '<strong>Fan-out on read:</strong> Assemble the feed by querying followed users at read time',
            '<strong>Hybrid:</strong> Push for normal users, pull for celebrities',
            '<strong>Celebrity problem:</strong> A single celebrity post would otherwise generate millions of writes',
            '<strong>Fan-out service:</strong> An async worker that distributes posts without blocking the write API'
          ]
        },
        {
          heading: 'How Fan-out Works',
          text: 'When a user posts, the post service records the post and publishes a fan-out event. For normal authors, the fan-out service reads the follower list and writes the post ID into each follower feed cache. For celebrities, the post ID is stored in a separate key or index and merged during read.',
          list: [
            'Post service persists the post and emits a fan-out message',
            'Message queue decouples posting from distribution',
            'Fan-out workers fetch the author follower list in batches',
            'Workers insert post IDs into follower feed caches',
            'Celebrities bypass per-follower writes to avoid amplification',
            'Read path merges normal and celebrity posts before ranking'
          ]
        },
        {
          heading: 'Fan-out Architecture',
          diagram: {
            chart: `flowchart LR
    P[Post Created] -->|event| Q[Message Queue]
    Q -->|consume| FW[Fan-out Worker]
    FW -->|read| E[Followers]
    FW -->|push| NF[Normal Feed Caches]
    CP[Celebrity Post] -->|store| CK[(Celebrity Key)]
    FR[Feed Read] -->|merge| NF
    FR -->|merge| CK
    style FW fill:#e74c3c,color:#fff
    style CK fill:#f39c12,color:#fff`,
            caption: 'Normal posts are pushed to followers; celebrity posts are pulled and merged at read time.'
          }
        },
        {
          heading: 'Python Fan-out Worker Example',
          example: {
            title: 'Push post IDs into follower feeds',
            code: `def fan_out_on_write(post_id, author_id, followers, feed_cache, max_followers_for_push=10000):
    if len(followers) > max_followers_for_push:
        # celebrity path: store once, pull on read
        feed_cache.add_to_celebrity_pool(author_id, post_id)
        return
    # normal path: write into each follower feed
    for follower_id in followers:
        feed_cache.prepend(follower_id, post_id)

class FeedCache:
    def prepend(self, user_id, post_id):
        print(f"Prepended {post_id} to feed of user {user_id}")
    def add_to_celebrity_pool(self, author_id, post_id):
        print(f"Added celebrity post {post_id} from {author_id}")

fan_out_on_write("p1", "alice", ["bob", "carol", "dave"], FeedCache())`,
            output: 'Normal users get the post pushed to each follower feed; celebrity users go through a pull path.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Push vs Pull Comparison',
          table: {
            headers: ['Aspect', 'Push', 'Pull'],
            rows: [
              ['Write cost', 'O(number of followers)', 'O(1)'],
              ['Read cost', 'O(1) cache lookup', 'O(number of followees)'],
              ['Latency', 'Low read latency', 'Higher read latency'],
              ['Storage', 'Higher due to duplication', 'Lower'],
              ['Celebrity handling', 'Expensive', 'Natural']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>The celebrity problem on Twitter.</strong> When a celebrity with tens of millions of followers posts a tweet, fan-out-on-write would require writing that tweet into every follower timeline instantly. Twitter solves this by using fan-out-on-read for celebrities. Normal users see their celebrity follows merged into the timeline at read time, keeping write costs bounded.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Pushing celebrity posts to every follower and overwhelming the queue',
            'Pulling from thousands of followees without pagination or caching',
            'Not batching follower list reads, causing database hot spots',
            'Failing to handle private accounts or follow requests in fan-out',
            'Blocking the post API while waiting for fan-out to complete',
            'Ignoring duplicate post IDs in merged pull results'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Push precomputes follower feeds at write time for fast reads',
            'Pull assembles feeds at read time and handles celebrities well',
            'Hybrid systems push for normal users and pull for celebrities',
            'Fan-out workers should be async and batched to protect storage',
            'Read path must merge pushed and pulled posts consistently'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the celebrity problem? → A high-follower user creates write amplification that can overwhelm the system.',
            'Q2: Why use a message queue for fan-out? → It decouples posting from distribution and absorbs traffic spikes.',
            'Q3: What is a hybrid fan-out strategy? → Push for users with few followers and pull for celebrities.',
            'Q4: How do you keep read latency low when pulling celebrity posts? → Cache celebrity posts separately and merge a small number of them during feed assembly.'
          ]
        }
      ]
    },
    'news-feed-ranking': {
      title: 'News Feed: Ranking & ML Signals',
      sections: [
        {
          heading: 'What is Feed Ranking?',
          text: 'Feed ranking decides which posts appear at the top of a user’s feed. A simple feed is chronological, but most large products use a scoring model that combines content features, user behavior, social signals, and predicted engagement to maximize relevance and session time.',
          list: [
            '<strong>Engagement signals:</strong> Likes, comments, shares, clicks, dwell time, and video views',
            '<strong>Recency:</strong> Newer posts usually score higher, but evergreen content can resurface',
            '<strong>Social proximity:</strong> Posts from close friends or frequent interactions rank higher',
            '<strong>ML predictions:</strong> Models estimate click, like, comment, and hide probabilities',
            '<strong>Diversity and freshness:</strong> Avoid showing the same source or topic repeatedly',
            '<strong>Business rules:</strong> Promote ads, announcements, or safety-filtered content'
          ]
        },
        {
          heading: 'How Ranking Works',
          text: 'Candidate generation selects hundreds of recent and relevant posts. A lightweight model scores each candidate using precomputed features. A heavier re-ranking model refines the top candidates. Finally, blending and business rules produce the feed shown to the user.',
          list: [
            'Candidate generation fetches recent posts from followees and interests',
            'Feature store supplies author, content, and user features in real time',
            'Light scoring prunes the candidate set down to a manageable size',
            'Heavy re-ranking scores the top candidates with a more complex model',
            'Blending adds ads, recommendations, and diversity adjustments',
            'The final list is paginated and returned to the client'
          ]
        },
        {
          heading: 'Ranking Pipeline Architecture',
          diagram: {
            chart: `flowchart LR
    C[Candidate Generation] -->|candidates| LS[Light Scoring]
    LS -->|top n| HR[Heavy Re-ranking]
    HR -->|ranked| B[Blending]
    B -->|final| F[Feed]
    FS[(Feature Store)] -->|features| LS
    FS -->|features| HR
    style HR fill:#9b59b6,color:#fff
    style FS fill:#f39c12,color:#fff`,
            caption: 'Ranking moves from many candidates through light scoring, heavy re-ranking, and blending.'
          }
        },
        {
          heading: 'Python Ranking Score Example',
          example: {
            title: 'Simple additive scoring function',
            code: `def score_post(post, user):
    # recency decays with age in hours
    recency_score = max(0, 1 - post['age_hours'] / 24)
    # engagement rate from the author
    engagement_score = min(1, post['likes'] / max(1, post['impressions']))
    # social closeness between user and author
    closeness = user['interaction_rate'].get(post['author_id'], 0)
    # predicted click probability from a lightweight model
    predicted_click = post.get('predicted_click', 0.5)
    return (
        0.35 * recency_score +
        0.25 * engagement_score +
        0.20 * closeness +
        0.20 * predicted_click
    )

post = {
    'author_id': 'alice',
    'age_hours': 2,
    'likes': 120,
    'impressions': 3000,
    'predicted_click': 0.7
}
user = {'interaction_rate': {'alice': 0.8}}
print(score_post(post, user))`,
            output: 'A weighted combination of recency, engagement, social closeness, and predicted engagement produces a ranking score.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Ranking Signal Comparison',
          table: {
            headers: ['Signal', 'Captures', 'Cost', 'Risk'],
            rows: [
              ['Recency', 'Fresh content', 'Low', 'May bury high-quality older posts'],
              ['Engagement count', 'Popularity', 'Low', 'Can favor clickbait'],
              ['Dwell time', 'Actual attention', 'Medium', 'Harder to collect reliably'],
              ['Social proximity', 'Relationship strength', 'Medium', 'Can create filter bubbles'],
              ['ML prediction', 'Personalized relevance', 'High', 'Model drift and latency']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Facebook feed ranking.</strong> Facebook ranks stories using hundreds of signals and multiple ML models. Lightweight models filter thousands of candidates, and heavier models re-rank the top few hundred. The system blends organic content, stories, reels, ads, and notifications while enforcing diversity and safety rules. Ranking infrastructure must return results in milliseconds at massive scale.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Ranking purely by engagement and creating clickbait incentives',
            'Using heavy models on every candidate, causing high latency',
            'Ignoring feature freshness and stale model predictions',
            'Failing to A/B test ranking changes against long-term metrics',
            'Over-personalizing and reducing content diversity',
            'Not logging impressions consistently for model training'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Feed ranking combines recency, engagement, social signals, and ML predictions',
            'Candidate generation narrows the pool before expensive scoring',
            'Light scoring prunes candidates; heavy re-ranking refines the top results',
            'Blending adds ads, recommendations, and diversity constraints',
            'Ranking should be evaluated with A/B tests and long-term engagement metrics'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why use both light and heavy ranking stages? → Light scoring prunes cheaply; heavy scoring is too slow for thousands of candidates.',
            'Q2: What is a feature store used for in feed ranking? → It supplies precomputed author, content, and user features with low latency.',
            'Q3: Why is dwell time a stronger signal than likes? → It measures real attention rather than a single quick action.',
            'Q4: What is a filter bubble? → Over-personalization that limits exposure to diverse viewpoints and content.'
          ]
        }
      ]
    },
    'news-feed-scaling': {
      title: 'News Feed: Scaling to 100M+ Users',
      sections: [
        {
          heading: 'What Does Scaling Mean?',
          text: 'Scaling a news feed to hundreds of millions of users requires handling high read throughput, large fan-out writes, global data distribution, and efficient cache usage. The goal is to keep latency low and availability high while controlling infrastructure cost.',
          list: [
            '<strong>Read scaling:</strong> Cache feeds and use replicas to serve billions of reads',
            '<strong>Write scaling:</strong> Shard by user or post ID and use async fan-out',
            '<strong>Hot key mitigation:</strong> Celebrity accounts and viral posts need special handling',
            '<strong>Geo distribution:</strong> Replicate caches closer to users in multiple regions',
            '<strong>Cost control:</strong> TTLs, compression, and selective fan-out reduce storage'
          ]
        },
        {
          heading: 'Scaling Strategies',
          text: 'Feeds scale by materializing per-user timelines in caches, sharding storage by user ID, using hybrid fan-out, and offloading media delivery to CDNs. Rate limiting and circuit breakers protect backend services during traffic spikes and viral events.',
          list: [
            'Shard feed caches and databases by user ID or geographic region',
            'Use Redis or Memcached clusters with replication for feed reads',
            'Push only a limited number of recent posts into each feed cache',
            'Pull older posts on demand from durable storage',
            'Place media behind a CDN to avoid hitting origin servers',
            'Rate limit fan-out and ranking to prevent cascading overload'
          ]
        },
        {
          heading: 'Scaled Feed Architecture',
          diagram: {
            chart: `flowchart LR
    U[User] -->|read| CDN[CDN]
    CDN -->|miss| LB[Load Balancer]
    LB -->|route| FS[Feed Service]
    FS -->|fetch| RC[(Redis Cluster)]
    RC -->|miss| DB[(Sharded DB)]
    W[Write] -->|event| Q[Queue]
    Q -->|fan out| RC
    style RC fill:#3498db,color:#fff
    style DB fill:#2ecc71,color:#fff`,
            caption: 'Reads are served by caches and CDNs; writes flow through queues to update caches asynchronously.'
          }
        },
        {
          heading: 'Python Feed Cache Example',
          example: {
            title: 'Read-through cache with fallback to database',
            code: `def get_feed(user_id, cursor, limit, cache, db):
    cache_key = f"feed:{user_id}:{cursor}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached
    # cache miss: assemble from durable store
    posts = db.query_feed(user_id, cursor, limit)
    feed_page = {
        "items": posts,
        "next_cursor": posts[-1]['post_id'] if posts else None
    }
    cache.set(cache_key, feed_page, ttl=300)
    return feed_page

class Cache:
    def get(self, key): return None
    def set(self, key, value, ttl): print(f"cached {key}")
class DB:
    def query_feed(self, user_id, cursor, limit):
        return [{"post_id": f"p{i}"} for i in range(limit)]

print(get_feed("user_42", "", 10, Cache(), DB()))`,
            output: 'Feed pages are cached after assembly to protect the database and speed up repeated reads.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Scaling Technique Comparison',
          table: {
            headers: ['Technique', 'Benefit', 'Cost', 'When to Use'],
            rows: [
              ['Feed caching', 'Sub-100ms reads', 'Memory', 'Always for active users'],
              ['Async fan-out', 'Smooth write spikes', 'Queue complexity', 'Normal user posts'],
              ['Hybrid fan-out', 'Bounded write cost', 'Complex read path', 'Celebrity accounts'],
              ['CDN for media', 'Massive bandwidth offload', 'Origin complexity', 'Image and video feeds'],
              ['Geo replication', 'Lower global latency', 'Consistency challenges', 'Multi-region products']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>LinkedIn feed scaling.</strong> LinkedIn materializes member feeds using a combination of caching and distributed stream processing. Feed updates are fanned out through Kafka, and feed reads hit a globally distributed cache tier. The system handles hundreds of millions of members while respecting privacy, professional context, and ranking goals.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Sharding by timestamp instead of user ID, creating hot shards',
            'Caching feed pages for too long, causing stale content',
            'Ignoring thundering herd on cache expiration',
            'Failing to rate limit viral posts and celebrity fan-out',
            'Running ranking synchronously without caching scores',
            'Forgetting observability into queue lag and cache hit rates'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Scale reads with feed caches, CDNs, and database replicas',
            'Scale writes with sharding, async fan-out, and hybrid models',
            'Protect against hot keys and viral events with rate limits',
            'Replicate caches globally for low-latency international users',
            'Monitor cache hit rates, queue lag, and feed freshness'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: How do you prevent a viral post from overwhelming the feed cache? → Rate limit fan-out and use separate keys for celebrity content.',
            'Q2: Why shard feed storage by user ID? → It spreads load evenly and keeps a single user feed on one shard.',
            'Q3: What causes a thundering herd on a feed cache? → Many clients request the same expired key simultaneously, hitting the database.',
            'Q4: How does a CDN help feed scaling? → It offloads media delivery so feed services only handle metadata and ranking.'
          ]
        }
      ]
    }
  },
  module18: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Web crawlers discover, fetch, and process pages across the internet. They power search engines, price monitors, archival services, and content aggregators. This module covers crawler requirements, the URL frontier, politeness, deduplication, and scaling to billions of pages.',
          list: [
            '<strong>Topics covered:</strong> Crawler requirements, URL frontier, politeness, deduplication, and distributed crawling',
            '<strong>Prerequisites:</strong> HTTP basics, queues, hash maps, and distributed systems fundamentals',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interviews for search, monitoring, and data pipeline roles'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Crawlers must balance speed, politeness, freshness, and cost. Interviewers want to see that you understand the URL frontier, how to avoid overwhelming websites, how to deduplicate content, and how to scale horizontally. These patterns also appear in batch data pipelines and change detection systems.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Overview] --> T2[URL Frontier]
    T2 --> T3[Politeness]
    T3 --> T4[Deduplication]
    T4 --> T5[Scaling]`,
          text: 'Recommended reading order — start with the overall crawler, then dive into frontier, politeness, dedup, and scaling.'
        }
      ]
    },
    'crawler-overview': {
      title: 'Web Crawler: Requirements & Scale',
      sections: [
        {
          heading: 'What is a Web Crawler?',
          text: 'A web crawler systematically browses the web by starting from seed URLs, fetching pages, extracting links, and following them. Crawlers must be polite to websites, avoid duplicates, and scale to massive page volumes while respecting robots.txt and rate limits.',
          list: [
            '<strong>Target scale:</strong> Billions of pages per month, millions of fetches per second at peak',
            '<strong>Freshness:</strong> Re-crawl important pages frequently while avoiding stale content',
            '<strong>Politeness:</strong> Do not overload individual websites',
            '<strong>Deduplication:</strong> Skip already seen URLs and near-duplicate pages',
            '<strong>Robustness:</strong> Handle malformed HTML, redirects, and transient failures'
          ]
        },
        {
          heading: 'How a Crawler Works',
          text: 'The crawler maintains a frontier of URLs to visit. A fetcher picks a URL, downloads the page, parses it, and extracts new links. Each new link is checked against a deduplication store before being added back to the frontier. Parsed content is sent downstream for indexing or analysis.',
          list: [
            'Seed URLs initialize the frontier',
            'The frontier selects the next URL to fetch',
            'The fetcher downloads the page with retries and timeout handling',
            'The parser extracts links, metadata, and content',
            'New URLs pass through a deduplication filter',
            'Content is stored or forwarded to indexing pipelines'
          ]
        },
        {
          heading: 'Crawler Architecture',
          diagram: {
            chart: `flowchart LR
    S[Seeds] -->|enqueue| F[Frontier]
    F -->|next URL| FT[Fetcher]
    FT -->|download| P[Parser]
    P -->|extract| D[Dedup]
    D -->|new| F
    P -->|content| I[Indexer]
    style F fill:#3498db,color:#fff
    style D fill:#f39c12,color:#fff`,
            caption: 'The frontier drives fetches; the parser feeds new URLs back through deduplication.'
          }
        },
        {
          heading: 'Python Fetcher Example',
          example: {
            title: 'Simple page fetcher and link extractor',
            code: `import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup

def fetch(url, timeout=10):
    try:
        resp = requests.get(url, timeout=timeout)
        resp.raise_for_status()
        return resp.text
    except requests.RequestException as e:
        print(f"failed {url}: {e}")
        return None

def extract_links(base_url, html):
    soup = BeautifulSoup(html, "html.parser")
    links = []
    for tag in soup.find_all("a", href=True):
        links.append(urljoin(base_url, tag["href"]))
    return links

html = fetch("https://example.com")
if html:
    print(extract_links("https://example.com", html)[:5])`,
            output: 'The fetcher downloads a page and the parser extracts absolute URLs for further crawling.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Crawling Strategy Comparison',
          table: {
            headers: ['Strategy', 'Order', 'Best For', 'Risk'],
            rows: [
              ['Breadth-first', 'All links at current depth', 'Broad discovery', 'Can waste resources on low-value pages'],
              ['Priority', 'Importance or change frequency', 'Search engines', 'Requires good page scoring signals'],
              ['Focused', 'Topical relevance', 'Vertical search', 'May miss related but off-topic pages']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Googlebot.</strong> Googlebot continuously crawls the web to build and update Google’s search index. It uses a highly distributed fetch infrastructure, prioritizes pages based on PageRank and change frequency, and respects robots.txt and per-host rate limits. Duplicate detection and content fingerprints keep the index fresh without redundant storage.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Crawling too fast and getting blocked by websites',
            'Ignoring robots.txt and legal restrictions',
            'Failing to handle infinite URL spaces such as calendars and filters',
            'Storing duplicate pages instead of fingerprints',
            'Not retrying transient failures with exponential backoff',
            'Crawling without a user agent or contact information'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A crawler fetches pages, extracts links, and follows them recursively',
            'The frontier manages which URL to crawl next',
            'Politeness and rate limits protect websites from overload',
            'Deduplication prevents redundant work and storage',
            'Scaling requires distributed fetchers and efficient URL scheduling'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What is the role of the URL frontier? → It maintains and schedules the set of URLs waiting to be fetched.',
            'Q2: Why is politeness important? → Aggressive crawling can overload websites and get the crawler blocked.',
            'Q3: What is the difference between a seed and a discovered URL? → Seeds start the crawl; discovered URLs are extracted from fetched pages.',
            'Q4: How do crawlers avoid infinite URL spaces? → Normalize URLs, limit depth, and fingerprint pages to detect loops.'
          ]
        }
      ]
    },
    'crawler-frontier': {
      title: 'Web Crawler: URL Frontier & Scheduling',
      sections: [
        {
          heading: 'What is a URL Frontier?',
          text: 'The URL frontier is the data structure that holds URLs waiting to be crawled. It must support efficient insertion, priority ordering, and politeness scheduling so that multiple fetchers can work in parallel without hammering the same host.',
          list: [
            '<strong>Front queues:</strong> Priority queues that order URLs by importance or freshness',
            '<strong>Back queues:</strong> Per-host queues that enforce politeness gaps',
            '<strong>Prioritization:</strong> Important pages are fetched sooner than less important ones',
            '<strong>Politeness:</strong> A per-host delay prevents consecutive rapid requests',
            '<strong>Distributed frontier:</strong> Multiple workers coordinate through shared queues'
          ]
        },
        {
          heading: 'How the Frontier Works',
          text: 'Newly discovered URLs are scored and placed into front queues. A scheduler moves URLs from front queues into per-host back queues. Fetchers pull from back queues only when the host’s politeness delay has elapsed, ensuring respectful crawl rates.',
          list: [
            'Discover URLs from parsed pages',
            'Score each URL by page importance and freshness',
            'Insert scored URLs into priority front queues',
            'Move URLs into back queues grouped by host',
            'Fetchers dequeue from back queues after the politeness timeout',
            'Reschedule failed URLs with exponential backoff'
          ]
        },
        {
          heading: 'URL Frontier Architecture',
          diagram: {
            chart: `flowchart LR
    N[New URLs] -->|score| FQ[Front Queues]
    FQ -->|pick| S[Scheduler]
    S -->|host queue| BQ[Back Queues]
    BQ -->|ready| FT[Fetcher]
    FT -->|discover| N
    style FQ fill:#9b59b6,color:#fff
    style BQ fill:#3498db,color:#fff`,
            caption: 'Front queues prioritize URLs; back queues enforce per-host politeness for fetchers.'
          }
        },
        {
          heading: 'Python Frontier Example',
          example: {
            title: 'Priority frontier with host-based back queues',
            code: `import heapq
import time
from urllib.parse import urlparse
from collections import deque

class URLFrontier:
    def __init__(self, politeness_delay=1):
        self.front = []
        self.back = {}
        self.last_fetched = {}
        self.politeness_delay = politeness_delay

    def add(self, url, priority):
        heapq.heappush(self.front, (priority, url))

    def _ready_host(self, host):
        return time.time() - self.last_fetched.get(host, 0) >= self.politeness_delay

    def next(self):
        # refill back queues from front queue
        while self.front and len(self.back) < 10:
            _, url = heapq.heappop(self.front)
            host = urlparse(url).netloc
            self.back.setdefault(host, deque()).append(url)
        # pick a ready host
        for host, queue in list(self.back.items()):
            if queue and self._ready_host(host):
                url = queue.popleft()
                self.last_fetched[host] = time.time()
                return url
        return None

frontier = URLFrontier()
frontier.add("https://example.com/a", 1)
frontier.add("https://example.com/b", 2)
print(frontier.next())`,
            output: 'The frontier orders URLs by priority and groups them by host so fetchers respect politeness delays.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Frontier Strategy Comparison',
          table: {
            headers: ['Strategy', 'Ordering', 'Politeness', 'Scalability'],
            rows: [
              ['FIFO queue', 'First-in first-out', 'None by default', 'Easy but can overload hosts'],
              ['Priority queue', 'By score', 'Hard to enforce per-host', 'Good for focused crawling'],
              ['Front + back queues', 'Priority then politeness', 'Built-in per-host delay', 'Best for large-scale crawlers']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Mercator web crawler.</strong> The Mercator crawler used a scalable URL frontier with front queues for prioritization and back queues for politeness. Each back queue corresponded to a single host, and a scheduler ensured that consecutive requests to the same host were spaced apart. This design influenced many modern distributed crawlers.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Using a single global queue, which makes politeness enforcement hard',
            'Ignoring URL priorities and crawling low-value pages first',
            'Keeping all URLs in memory, which limits crawl size',
            'Not handling host-level backpressure when a site is slow',
            'Forgetting to persist the frontier across restarts',
            'Allowing back queues to starve while waiting for a single slow host'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'The frontier schedules which URL to crawl next',
            'Front queues prioritize URLs by importance',
            'Back queues group URLs by host and enforce politeness',
            'Distributed frontiers let many fetchers work in parallel',
            'Persist the frontier and reschedule failures with backoff'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why separate front and back queues? → Front queues prioritize URLs; back queues enforce per-host politeness.',
            'Q2: How do you prevent a crawler from hitting one host too fast? → Maintain a per-host last-fetched timestamp and delay the next fetch.',
            'Q3: What happens if a host is very slow? → Its back queue builds up while fetchers work on ready hosts.',
            'Q4: Why persist the frontier? → Crawls can take days, and losing the frontier means restarting from seeds.'
          ]
        }
      ]
    },
    'crawler-politeness-dedup': {
      title: 'Web Crawler: Politeness & Deduplication',
      sections: [
        {
          heading: 'What is Politeness?',
          text: 'Politeness means respecting the websites a crawler visits. This includes obeying robots.txt rules, limiting request rates per host, and avoiding bandwidth spikes. Deduplication ensures the crawler does not fetch the same URL or near-identical page multiple times, saving resources and keeping indexes clean.',
          list: [
            '<strong>robots.txt:</strong> A file that tells crawlers which paths are allowed or disallowed',
            '<strong>Per-host rate limit:</strong> A maximum number of requests per second to a single host',
            '<strong>Crawl-delay:</strong> A directive that specifies a delay between successive requests',
            '<strong>URL deduplication:</strong> Skip URLs already seen during the crawl',
            '<strong>Content deduplication:</strong> Skip pages whose content fingerprints match an existing page'
          ]
        },
        {
          heading: 'How Politeness & Deduplication Work',
          text: 'Before fetching a URL, the crawler checks whether it has already been seen and whether robots.txt permits it. A bloom filter provides a fast probabilistic check for seen URLs, while a content fingerprint such as SimHash detects near-duplicates. Rate limiters enforce per-host crawl delays.',
          list: [
            'Normalize and canonicalize each URL',
            'Check the URL against a seen-set or bloom filter',
            'Fetch and cache robots.txt per host',
            'Verify the URL path is allowed by robots.txt',
            'Wait for the per-host rate limit before fetching',
            'Fingerprint content and skip near-duplicates'
          ]
        },
        {
          heading: 'Politeness & Dedup Architecture',
          diagram: {
            chart: `flowchart LR
    U[URL] -->|normalize| N[Canonical URL]
    N -->|seen check| BF[Bloom Filter]
    BF -->|maybe new| R[robots.txt check]
    R -->|allowed| RL[Rate Limiter]
    RL -->|ready| F[Fetch]
    F -->|fingerprint| SH[SimHash]
    SH -->|new| I[Indexer]
    style BF fill:#f39c12,color:#fff
    style RL fill:#e74c3c,color:#fff`,
            caption: 'URLs pass through deduplication, robots filtering, rate limiting, and content fingerprinting.'
          }
        },
        {
          heading: 'Python Politeness and Bloom Filter Example',
          example: {
            title: 'Track seen URLs and respect robots.txt',
            code: `import hashlib

class CrawlFilter:
    def __init__(self):
        self.seen = set()
        self.robots = {}

    def canonical(self, url):
        return url.split("#")[0].rstrip("/")

    def is_allowed(self, url):
        host = url.split("/")[2]
        # simplified: assume all hosts allow /wiki/ paths
        disallowed = self.robots.get(host, [])
        return not any(url.endswith(path) for path in disallowed)

    def should_fetch(self, url):
        url = self.canonical(url)
        if url in self.seen:
            return False
        if not self.is_allowed(url):
            return False
        self.seen.add(url)
        return True

f = CrawlFilter()
print(f.should_fetch("https://example.com/page#section"))
print(f.should_fetch("https://example.com/page"))`,
            output: 'The filter normalizes URLs, skips duplicates, and checks robots rules before fetching.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Deduplication Comparison',
          table: {
            headers: ['Method', 'Detects', 'Space', 'Notes'],
            rows: [
              ['URL hash set', 'Exact URL duplicates', 'Grows with URLs', 'Simple but memory-heavy'],
              ['Bloom filter', 'Probable duplicates', 'Fixed size', 'May cause extra fetches on false positives'],
              ['SimHash', 'Near-duplicate content', 'Moderate', 'Compares page fingerprints with Hamming distance'],
              ['Content hash', 'Exact content duplicates', 'Moderate', 'Cannot detect modified duplicates']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Googlebot robots.txt and duplicate handling.</strong> Googlebot fetches robots.txt for each host and obeys allow and disallow rules. It maintains large-scale URL seen-sets and content fingerprints to avoid reprocessing duplicate pages. Near-duplicate detection keeps search results diverse without storing every copy of syndicated content.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Skipping robots.txt parsing entirely',
            'Not normalizing URLs, causing the same page to be fetched many ways',
            'Using a tiny bloom filter with a high false positive rate',
            'Ignoring redirect chains that canonicalize to the same destination',
            'Fetching before checking rate limits',
            'Treating session IDs or tracking parameters as distinct URLs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Politeness means respecting robots.txt and per-host rate limits',
            'Normalize URLs before deduplication to avoid redundant fetches',
            'Bloom filters provide compact approximate URL deduplication',
            'SimHash detects near-duplicate content beyond exact URL matches',
            'Rate limiters protect both the crawler and the target websites'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What does robots.txt control? → It tells crawlers which paths on a host they may fetch.',
            'Q2: Why use a bloom filter for URL deduplication? → It uses fixed memory to test whether a URL has probably been seen before.',
            'Q3: How does SimHash detect near-duplicates? → It creates fingerprints where similar pages have a small Hamming distance.',
            'Q4: What is a false positive in a bloom filter? → A URL that was never fetched but the filter reports as already seen.'
          ]
        }
      ]
    },
    'crawler-scaling': {
      title: 'Web Crawler: Scaling to Billions of Pages',
      sections: [
        {
          heading: 'What Does Scaling Mean?',
          text: 'Scaling a crawler to billions of pages requires distributing work across many fetchers, storing the frontier durably, caching DNS and robots.txt, and handling failures gracefully. The system must also adapt to varying website speeds and politeness constraints.',
          list: [
            '<strong>Distributed fetchers:</strong> Many workers pull URLs from shared queues',
            '<strong>Durability:</strong> Frontier and seen-sets must survive restarts',
            '<strong>DNS caching:</strong> Avoid repeated DNS lookups for the same host',
            '<strong>Robots caching:</strong> Cache robots.txt per host with TTL',
            '<strong>Geo distribution:</strong> Place fetchers close to target regions when needed'
          ]
        },
        {
          heading: 'Scaling Strategies',
          text: 'Large crawlers use horizontally scalable fetcher pools, persistent message queues for the frontier, shared key-value stores for deduplication, and DNS resolvers with caches. Work is partitioned by host or region to respect politeness while maximizing throughput.',
          list: [
            'Run many stateless fetcher instances behind a queue',
            'Partition the frontier by host hash for cache locality',
            'Cache DNS records to reduce resolver load',
            'Cache robots.txt with TTL to avoid re-fetching rules',
            'Use distributed storage for URL seen-sets and content fingerprints',
            'Monitor fetch success rates and adapt rate limits per host'
          ]
        },
        {
          heading: 'Distributed Crawler Architecture',
          diagram: {
            chart: `flowchart LR
    S[Seeds] -->|enqueue| Q[Distributed Queue]
    Q -->|pull| W1[Fetcher 1]
    Q -->|pull| W2[Fetcher 2]
    Q -->|pull| W3[Fetcher N]
    W1 -->|store| KV[(Dedup Store)]
    W2 -->|store| KV
    W3 -->|store| KV
    W1 -->|content| IS[Indexer Store]
    style Q fill:#3498db,color:#fff
    style KV fill:#f39c12,color:#fff`,
            caption: 'Multiple fetchers consume from a shared queue and coordinate through a distributed dedup store.'
          }
        },
        {
          heading: 'Python Worker Consuming from Redis',
          example: {
            title: 'Distributed fetcher worker pseudocode',
            code: `import time
import redis

class FetcherWorker:
    def __init__(self, queue_name):
        self.redis = redis.Redis()
        self.queue = queue_name

    def run(self):
        while True:
            # blocking pop from queue
            item = self.redis.blpop(self.queue, timeout=5)
            if not item:
                continue
            url = item[1].decode()
            if self.already_seen(url):
                continue
            try:
                page = self.fetch(url)
                self.process(page)
                self.mark_seen(url)
            except Exception as e:
                print(f"error fetching {url}: {e}")
            time.sleep(self.politeness_delay(url))

    def already_seen(self, url):
        return self.redis.sismember("seen_urls", url)

    def mark_seen(self, url):
        self.redis.sadd("seen_urls", url)

    def fetch(self, url):
        # HTTP fetch logic here
        return "page content"

    def process(self, page):
        # parse and enqueue new links
        pass

    def politeness_delay(self, url):
        return 1`,
            output: 'Workers pull URLs from a Redis queue, skip seen URLs, fetch pages, and enqueue newly discovered links.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Scaling Approach Comparison',
          table: {
            headers: ['Approach', 'Benefit', 'Limitation', 'When to Use'],
            rows: [
              ['Vertical scaling', 'Simple', 'Hard ceiling', 'Prototypes or small crawls'],
              ['Horizontal fetchers', 'Near-linear throughput', 'Needs coordination', 'Large-scale crawling'],
              ['Geo-distributed fetchers', 'Lower latency to regional sites', 'Operational complexity', 'Global crawlers'],
              ['Serverless fetchers', 'Elastic bursts', 'Cold start latency', 'Spiky or batch workloads']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Bing distributed crawler.</strong> Bing runs a globally distributed crawler that fetches and updates billions of pages. It partitions work across fetcher clusters, caches DNS and robots information, and uses distributed storage for deduplication. The system dynamically adjusts crawl rates based on website responsiveness and freshness needs.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Running a single fetcher that becomes a bottleneck',
            'Storing the frontier only in memory and losing progress on restart',
            'Hitting the same DNS resolver from every worker',
            'Not partitioning work, causing cache contention on seen-sets',
            'Ignoring per-host response times and using a fixed crawl rate',
            'Failing to handle crawler traps and spider-generated URLs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Scale fetchers horizontally with shared queues and distributed dedup',
            'Persist the frontier and seen-sets to survive failures',
            'Cache DNS and robots.txt to reduce redundant network calls',
            'Partition work by host for politeness and cache locality',
            'Adapt crawl rates based on site behavior and freshness goals'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why cache DNS in a large crawler? → DNS lookups add latency and load; caching avoids repeated resolver requests.',
            'Q2: What limits crawler throughput even with many fetchers? → Per-host politeness and website response times cap the rate per host.',
            'Q3: Why partition the frontier by host? → It improves cache locality for robots.txt and politeness state.',
            'Q4: How do you make a crawler fault tolerant? → Persist the frontier, retry with backoff, and replicate the dedup store.'
          ]
        }
      ]
    }
  },
  module19: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Video streaming powers entertainment, education, communication, and live events. Designing a video platform means handling huge uploads, transcoding into many formats, delivering adaptively over CDNs, and tracking user progress. This module covers requirements, upload and transcoding, adaptive delivery, and scaling strategy.',
          list: [
            '<strong>Topics covered:</strong> Video requirements, transcoding, HLS/DASH delivery, CDN strategy, and resume tracking',
            '<strong>Prerequisites:</strong> Object storage, CDNs, message queues, and distributed job processing',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interviews for media, streaming, and content platforms'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Video is one of the most bandwidth- and compute-heavy workloads. Interviewers want to see that you can design an upload pipeline, explain transcoding ladders, choose between HLS and DASH, and use CDNs to deliver at scale. These patterns also apply to live streaming and video conferencing.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Overview] --> T2[Transcoding]
    T2 --> T3[Adaptive Delivery]
    T3 --> T4[CDN Strategy]`,
          text: 'Recommended reading order — overview, then transcoding, then delivery, and finally scaling.'
        }
      ]
    },
    'video-overview': {
      title: 'Video Streaming: Requirements & Scale',
      sections: [
        {
          heading: 'What is Video Streaming?',
          text: 'Video streaming delivers video content to users over the internet without requiring a complete download before playback. Modern platforms support uploads from many devices, transcode into multiple bitrates, and adapt quality to network conditions in real time.',
          list: [
            '<strong>Target scale:</strong> Billions of views per day, millions of concurrent streams',
            '<strong>Uploads:</strong> Support large files from mobile, web, and professional tools',
            '<strong>Latency:</strong> Start playback within a few seconds for on-demand',
            '<strong>Quality:</strong> Adapt bitrate to bandwidth, device, and screen size',
            '<strong>Reliability:</strong> Resume playback, handle errors, and support offline viewing'
          ]
        },
        {
          heading: 'Video Streaming Requirements & Scale',
          text: 'A global video platform must ingest raw uploads, process them into playable formats, store them durably, and deliver them through caches near the user. Storage and bandwidth dominate cost, so efficient encoding and CDN placement are critical.',
          list: [
            'Ingest high-resolution source files from uploaders',
            'Transcode into multiple resolutions and bitrates',
            'Package into streaming protocols such as HLS and DASH',
            'Store originals and variants in object storage',
            'Deliver via CDN with edge caches around the world',
            'Track watch position and resume state per user'
          ]
        },
        {
          heading: 'Video Streaming Architecture',
          diagram: {
            chart: `flowchart LR
    U[Uploader] -->|upload| IS[Ingest Service]
    IS -->|store| OS[Object Storage]
    OS -->|job| TQ[Transcode Queue]
    TQ -->|process| TP[Transcoder Pool]
    TP -->|variants| OS
    P[Player] -->|request| CDN[CDN]
    CDN -->|manifest| OS
    CDN -->|segment| OS
    style TP fill:#e74c3c,color:#fff
    style CDN fill:#3498db,color:#fff`,
            caption: 'Uploads are stored and queued for transcoding; players fetch manifests and segments from CDN.'
          }
        },
        {
          heading: 'Sample Video Metadata JSON',
          example: {
            title: 'Video object stored after ingest',
            code: `{
  "video_id": "v_884322",
  "title": "System Design Crash Course",
  "duration_sec": 1860,
  "status": "processing",
  "source_url": "s3://videos/source/v_884322.mp4",
  "variants": [
    {"resolution": "1080p", "bitrate": "5000k", "codec": "h264"},
    {"resolution": "720p", "bitrate": "2500k", "codec": "h264"},
    {"resolution": "480p", "bitrate": "1000k", "codec": "h264"}
  ],
  "manifests": {
    "hls": "https://cdn.example.com/v_884322/master.m3u8",
    "dash": "https://cdn.example.com/v_884322/manifest.mpd"
  }
}`,
            output: 'Metadata tracks source location, transcoding variants, and streaming manifest URLs.',
            language: 'json',
            type: 'code'
          }
        },
        {
          heading: 'Streaming Protocol Comparison',
          table: {
            headers: ['Protocol', 'Format', 'Best For', 'Trade-off'],
            rows: [
              ['HLS', 'Apple HTTP Live Streaming', 'Apple devices and broad compatibility', 'Higher latency than some modern protocols'],
              ['DASH', 'MPEG-DASH', 'Android, web, standards-based', 'Requires player support'],
              ['Progressive', 'Single MP4 file', 'Simple embeds', 'No adaptive quality, less efficient']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix streaming platform.</strong> Netflix ingests source content, encodes it into dozens of bitrate and resolution combinations, and packages them for HLS and DASH. Content is pushed to Open Connect appliances inside internet service provider networks, placing video close to subscribers and reducing backbone traffic.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Serving large single files instead of segmented adaptive streams',
            'Ignoring upload resume for large files on unreliable networks',
            'Storing only one bitrate and forcing low quality on fast connections',
            'Delivering video directly from origin instead of using a CDN',
            'Forgetting closed captions, audio tracks, and DRM requirements',
            'Not tracking watch position across devices'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video platforms ingest, transcode, package, store, and deliver content',
            'HLS and DASH split video into manifests and segments for adaptive playback',
            'Multiple bitrates let players switch quality based on network conditions',
            'CDNs reduce origin load and latency for global viewers',
            'Resume tracking improves user experience across sessions and devices'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why transcode a single upload into multiple bitrates? → So players can choose the quality that matches current bandwidth and device capability.',
            'Q2: What is the difference between a manifest and a segment? → The manifest lists available variants and segments; segments are the actual short video chunks.',
            'Q3: Why use a CDN for video delivery? → It caches content near users, reducing origin bandwidth and improving start times.',
            'Q4: Why is resume tracking important? → Users expect playback to continue where they left off across devices and sessions.'
          ]
        }
      ]
    },
    'video-transcoding': {
      title: 'Video Streaming: Upload & Transcoding',
      sections: [
        {
          heading: 'What is Transcoding?',
          text: 'Transcoding converts a raw uploaded video into compressed formats and resolutions suitable for different devices and network conditions. It is computationally expensive and usually done asynchronously by a pool of worker nodes.',
          list: [
            '<strong>Codec:</strong> H.264, H.265, VP9, or AV1 compress raw video efficiently',
            '<strong>Bitrate ladder:</strong> A set of resolutions and bitrates from low mobile to 4K',
            '<strong>Container:</strong> MP4, TS, or fragmented MP4 packages the encoded streams',
            '<strong>DAG workers:</strong> Transcoding pipelines split jobs into dependent stages',
            '<strong>Preview and thumbnails:</strong> Extra outputs extracted during transcoding'
          ]
        },
        {
          heading: 'How Transcoding Works',
          text: 'After upload, the ingest service stores the source file and publishes a transcoding job. A scheduler routes the job to an available worker. The worker demuxes the source, encodes each resolution, packages segments, and writes outputs to object storage. Job status is tracked in a database.',
          list: [
            'Upload raw video to object storage',
            'Validate format, duration, and resolution',
            'Queue a transcoding job with the desired output ladder',
            'Worker demuxes audio and video streams',
            'Encode each target resolution and bitrate',
            'Package outputs, generate manifests, and update metadata'
          ]
        },
        {
          heading: 'Transcoding Pipeline Architecture',
          diagram: {
            chart: `flowchart LR
    U[Upload] -->|store| OS[Object Storage]
    OS -->|submit| JS[Job Scheduler]
    JS -->|assign| W[Worker]
    W -->|encode| V1080[1080p Variant]
    W -->|encode| V720[720p Variant]
    W -->|encode| V480[480p Variant]
    V1080 -->|package| M[Manifests]
    V720 -->|package| M
    V480 -->|package| M
    M -->|save| OS
    style W fill:#e74c3c,color:#fff
    style M fill:#2ecc71,color:#fff`,
            caption: 'Workers encode the source into multiple variants and package them into streaming manifests.'
          }
        },
        {
          heading: 'Transcoding Job Config Example',
          example: {
            title: 'DAG job definition for multi-resolution encoding',
            code: `{
  "job_id": "transcode_7721",
  "input": "s3://videos/source/v_884322.mp4",
  "outputs": [
    {
      "name": "1080p",
      "resolution": "1920x1080",
      "video_bitrate": "5000k",
      "audio_bitrate": "192k",
      "codec": "h264"
    },
    {
      "name": "720p",
      "resolution": "1280x720",
      "video_bitrate": "2500k",
      "audio_bitrate": "128k",
      "codec": "h264"
    },
    {
      "name": "480p",
      "resolution": "854x480",
      "video_bitrate": "1000k",
      "audio_bitrate": "96k",
      "codec": "h264"
    }
  ],
  "manifests": ["hls", "dash"]
}`,
            output: 'The job config defines input, output ladder, and manifest formats for the transcoding pipeline.',
            language: 'json',
            type: 'code'
          }
        },
        {
          heading: 'Transcoder Comparison',
          table: {
            headers: ['Option', 'Control', 'Scale', 'Best For'],
            rows: [
              ['FFmpeg self-hosted', 'Full', 'Manual scaling', 'Custom pipelines and startups'],
              ['AWS Elemental', 'Managed', 'Elastic', 'AWS-native video workloads'],
              ['Zencoder', 'API-driven', 'Cloud', 'Quick integration without ops'],
              ['Google Transcoder API', 'Managed', 'Elastic', 'Google Cloud video workflows']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>YouTube transcoding pipeline.</strong> YouTube receives uploads in many formats and resolutions. Each video is processed into a ladder of formats and resolutions, including low-bitrate versions for mobile and high-bitrate versions for TV. The pipeline runs on a massive cluster of workers and supports features like thumbnails, previews, and content ID matching during processing.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Transcoding synchronously during upload, causing timeouts',
            'Creating too few variants, which hurts quality on large screens',
            'Creating too many variants, which wastes storage and compute',
            'Not validating uploaded files, leading to worker crashes',
            'Failing to retry failed jobs or handle partial outputs',
            'Ignoring audio normalization and subtitle tracks'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transcoding converts raw video into multiple resolutions and bitrates',
            'Workers process jobs asynchronously using message queues',
            'Bitrate ladders balance quality, bandwidth, and storage cost',
            'Outputs are packaged into HLS or DASH manifests with segments',
            'Job status and output metadata must be tracked durably'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why transcode asynchronously? → Video encoding is CPU-intensive and can take minutes; async processing avoids blocking uploads.',
            'Q2: What is a bitrate ladder? → A set of resolution and bitrate combinations that players can switch between.',
            'Q3: What is the role of a manifest in streaming? → It tells the player which variants and segments are available.',
            'Q4: Why generate thumbnails during transcoding? → Extracting frames while the video is already being decoded is more efficient than a separate pass.'
          ]
        }
      ]
    },
    'video-delivery': {
      title: 'Video Streaming: Adaptive Delivery (HLS/DASH)',
      sections: [
        {
          heading: 'What is Adaptive Delivery?',
          text: 'Adaptive delivery adjusts video quality in real time based on the viewer’s network bandwidth, device capability, and buffer state. HLS and DASH are the dominant protocols. They split a video into short segments and provide a manifest that lists available variants.',
          list: [
            '<strong>HLS:</strong> Apple protocol using M3U8 manifests and TS or fMP4 segments',
            '<strong>DASH:</strong> MPEG standard using XML MPD manifests and fMP4 segments',
            '<strong>ABR:</strong> Adaptive bitrate selection by the player',
            '<strong>Segments:</strong> Short chunks, typically 2 to 10 seconds',
            '<strong>Buffer:</strong> Player maintains a buffer to smooth network variability'
          ]
        },
        {
          heading: 'How HLS and DASH Work',
          text: 'The player first downloads the master manifest, which points to variant manifests for each bitrate. It then downloads segments sequentially, monitoring download speed and buffer level. If bandwidth drops, the player switches to a lower bitrate; if bandwidth rises, it switches up.',
          list: [
            'Player requests the master manifest',
            'Master manifest lists variant manifests by resolution and bitrate',
            'Player selects an initial variant based on estimated bandwidth',
            'Player downloads segments and measures throughput',
            'Player switches variants to maintain stable playback',
            'Audio, subtitles, and DRM may be handled separately'
          ]
        },
        {
          heading: 'Adaptive Delivery Architecture',
          diagram: {
            chart: `sequenceDiagram
    participant P as Player
    participant C as CDN
    participant O as Origin
    P->>C: request master manifest
    C-->>P: master.m3u8
    P->>C: request variant manifest
    C-->>P: variant_720p.m3u8
    loop Playback
        P->>C: request segment
        C-->>P: segment.ts
    end`,
            caption: 'The player fetches manifests then segments, adapting bitrate based on measured throughput.'
          }
        },
        {
          heading: 'HLS Master Playlist Example',
          example: {
            title: 'Master manifest listing video variants',
            code: `#EXTM3U
#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080
1080p/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2500000,RESOLUTION=1280x720
720p/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1000000,RESOLUTION=854x480
480p/playlist.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=500000,RESOLUTION=640x360
360p/playlist.m3u8`,
            output: 'The master manifest tells the player which variant playlists are available and their bandwidth requirements.',
            language: 'http',
            type: 'code'
          }
        },
        {
          heading: 'HLS vs DASH Comparison',
          table: {
            headers: ['Aspect', 'HLS', 'DASH'],
            rows: [
              ['Manifest format', 'M3U8 playlist', 'XML MPD'],
              ['Native support', 'Apple, Safari, iOS', 'Android, Chrome, smart TVs'],
              ['Segment format', 'TS or fMP4', 'fMP4'],
              ['DRM', 'FairPlay', 'Widevine, PlayReady'],
              ['Latency', 'Typically higher', 'Can be lower with low-latency DASH']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Apple HLS ecosystem.</strong> Apple devices natively support HLS, and Apple requires HLS for streaming over cellular networks on iOS. The protocol’s simple text-based manifests and broad device support make it the default for many platforms, often delivered alongside DASH to cover non-Apple devices.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Using segment durations that are too long, delaying bitrate switches',
            'Not aligning segment boundaries across variants, causing playback glitches',
            'Serving manifests without cache headers, reducing CDN effectiveness',
            'Forgetting to include audio-only variants for low-bandwidth users',
            'Hardcoding one bitrate instead of letting the player adapt',
            'Ignoring DRM and subtitle track packaging'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Adaptive delivery switches bitrate based on bandwidth and buffer',
            'HLS uses M3U8 manifests; DASH uses XML MPD manifests',
            'Segments are short chunks, usually 2 to 10 seconds',
            'Players measure throughput and adjust variant selection continuously',
            'Provide multiple variants, audio tracks, and captions for accessibility'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: What triggers a player to switch bitrates? → Changes in measured bandwidth, buffer level, or device capability.',
            'Q2: Why align segment boundaries across variants? → So the player can switch seamlessly at segment boundaries.',
            'Q3: What does the master manifest contain? → A list of variant manifests with bandwidth and resolution metadata.',
            'Q4: When would you choose DASH over HLS? → When targeting Android, smart TVs, or when lower-latency DASH is needed.'
          ]
        }
      ]
    },
    'video-scaling': {
      title: 'Video Streaming: Scaling & CDN Strategy',
      sections: [
        {
          heading: 'What is Video Scaling?',
          text: 'Video scaling ensures that millions of viewers can start playback quickly and watch smoothly without overloading origin servers. CDNs cache manifests and segments at edge locations, while origin shields and regional caches reduce redundant fetches from storage.',
          list: [
            '<strong>CDN:</strong> Distributed edge caches that serve content close to viewers',
            '<strong>Origin shield:</strong> A single cache layer in front of origin to reduce origin hits',
            '<strong>Pull vs push:</strong> CDNs can fetch on demand or be preloaded with popular content',
            '<strong>Cache key:</strong> A URL-based identifier that determines cacheability',
            '<strong>Regional replication:</strong> Copies of content stored in multiple geographic regions'
          ]
        },
        {
          heading: 'Scaling Strategies',
          text: 'Popular content is cached globally, while long-tail content is fetched on demand. Manifests are cached for short TTLs so updates propagate quickly, and segments are cached for long TTLs because they are immutable. Origin shields and per-ISP caches further reduce origin load.',
          list: [
            'Cache segments with long TTLs because they never change',
            'Cache manifests with short TTLs to allow quick updates',
            'Use an origin shield to collapse duplicate cache misses',
            'Preload trending content to edge locations before peak demand',
            'Replicate object storage across regions for faster origin access',
            'Serve different bitrates from the same CDN using query or path variants'
          ]
        },
        {
          heading: 'CDN Strategy Architecture',
          diagram: {
            chart: `flowchart LR
    P[Player] -->|request| CE[CDN Edge]
    CE -->|hit| P
    CE -->|miss| OS[Origin Shield]
    OS -->|hit| CE
    OS -->|miss| S3[Object Storage]
    S3 -->|fetch| OS
    style CE fill:#3498db,color:#fff
    style OS fill:#f39c12,color:#fff`,
            caption: 'CDN edges serve viewers; misses are collapsed by the origin shield before reaching object storage.'
          }
        },
        {
          heading: 'Nginx Origin Cache Headers Example',
          example: {
            title: 'Serve video with cache-friendly headers',
            code: `server {
    listen 80;
    server_name origin.example.com;
    location /segments/ {
        add_header Cache-Control "public, max-age=31536000, immutable";
        alias /var/videos/segments/;
    }
    location /manifests/ {
        add_header Cache-Control "public, max-age=30";
        alias /var/videos/manifests/;
    }
}`,
            output: 'Immutable segments get long cache TTLs while manifests get short TTLs so players see updates quickly.',
            language: 'nginx',
            type: 'code'
          }
        },
        {
          heading: 'CDN Strategy Comparison',
          table: {
            headers: ['Strategy', 'How It Works', 'Best For', 'Trade-off'],
            rows: [
              ['Pull CDN', 'Fetches content on first request', 'Long-tail content', 'First viewer pays origin cost'],
              ['Push CDN', 'Preloads content to edges', 'Blockbusters and live events', 'Storage and complexity'],
              ['P2P delivery', 'Viewers share segments', 'Large live streams', 'Harder to control quality'],
              ['Multi-CDN', 'Uses multiple providers', 'Global availability', 'Increased operational overhead']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Netflix Open Connect.</strong> Netflix deploys Open Connect Appliances inside ISP data centers. These appliances cache the most popular Netflix content near subscribers. During peak hours, the vast majority of streams are served locally from these appliances, drastically reducing transit costs and improving start times.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Caching manifests too long and delaying new content or fixes',
            'Not setting immutable headers on video segments',
            'Serving video directly from origin without any CDN',
            'Using cache keys that include user-specific tokens, breaking caching',
            'Ignoring regional compliance and content licensing boundaries',
            'Forgetting to warm caches before a major release or live event'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CDNs cache content near viewers to reduce latency and origin load',
            'Segments are immutable and cacheable for long periods',
            'Manifests need short TTLs to support updates and corrections',
            'Origin shields collapse cache misses and protect storage',
            'Trending content can be preloaded to edges before peak demand'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why cache segments longer than manifests? → Segments are immutable, while manifests may change when variants are added or corrected.',
            'Q2: What is an origin shield? → A cache layer between CDN edges and origin storage that reduces redundant origin fetches.',
            'Q3: When would you push content instead of letting the CDN pull it? → For highly anticipated releases or live events where many viewers will request the same content.',
            'Q4: How can cache keys hurt video delivery? → User-specific tokens in URLs prevent the CDN from sharing the same cached segment across viewers.'
          ]
        }
      ]
    }
  }
};
