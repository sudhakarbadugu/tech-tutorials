// Module 16: Search & Spatial Indexing

export const systemDesignModule16 = {
  module16: {
    'module-intro': {
      title: 'Chapter Overview',
      sections: [
        {
          heading: 'What is this chapter about?',
          text: 'Search and spatial indexing are the engines behind modern discovery systems. Whether users are searching products, getting autocomplete suggestions, or finding nearby drivers, the right index makes the difference between a fast, relevant result and a full scan. This module covers inverted indexes and Elasticsearch, typeahead autocomplete, and spatial indexing with geohashes and quadtrees.',
          list: [
            '<strong>Topics covered:</strong> Inverted Index & Elasticsearch, Typeahead & Autocomplete, Geohash & Quadtree',
            '<strong>Prerequisites:</strong> Hash maps, trees, basic distributed systems, and database indexing',
            '<strong>Time to complete:</strong> ~2-3 hours including code examples and practice questions',
            '<strong>Best for:</strong> System design interviews, search engineering, and location-based services'
          ]
        },
        {
          heading: 'Why does this matter?',
          text: 'Text and location queries are some of the most common user-facing operations. Interviewers expect you to explain how posting lists work, how autocomplete returns suggestions in milliseconds, and how apps find nearby points efficiently. These indexing techniques also underpin Elasticsearch, Redis, and many production search stacks.'
        },
        {
          heading: 'Chapter Roadmap',
          diagram: `graph LR
    T1[Inverted Index] --> T2[Elasticsearch]
    T2 --> T3[Typeahead]
    T3 --> T4[Autocomplete]
    T4 --> T5[Geohash]
    T5 --> T6[Quadtree]`,
          text: 'Recommended reading order — text search first, then autocomplete, then spatial indexing.'
        }
      ]
    },
    'inverted-index': {
      title: 'Inverted Index & Elasticsearch',
      sections: [
        {
          heading: 'What is an Inverted Index?',
          text: 'An inverted index maps terms to the documents that contain them. Unlike a forward index, which lists the terms inside each document, an inverted index starts with a term and points to all matching documents. Search engines use this structure to answer queries without scanning every document.',
          list: [
            '<strong>Posting list:</strong> A sorted list of document IDs for each term, often with term frequency and position data',
            '<strong>Tokenization/analyzers:</strong> Text is lowercased, split into tokens, filtered for stop words, and stemmed before indexing',
            '<strong>TF-IDF:</strong> Classic scoring that rewards rare terms and frequent matches within a document',
            '<strong>BM25:</strong> Probabilistic ranking that improves on TF-IDF by saturating term frequency and normalizing document length',
            '<strong>Shards and replicas:</strong> Elasticsearch splits an index into shards for parallelism and replicates them for availability',
            '<strong>Document routing:</strong> Each document hashes to a specific shard so searches can target the right partitions'
          ]
        },
        {
          heading: 'How an Inverted Index Works',
          text: 'When a document is added, an analyzer produces normalized tokens. Each token updates a posting list that records which documents contain it. At query time, the query text is analyzed the same way, the relevant posting lists are intersected, and the matching documents are scored and ranked.',
          list: [
            'Tokenize incoming documents and normalize terms',
            'Append document metadata to each term posting list',
            'Tokenize the search query using the same analyzer chain',
            'Look up posting lists for query terms and intersect them',
            'Score candidates with BM25 or a learned ranking function',
            'Return the top-k results to the user'
          ]
        },
        {
          heading: 'Inverted Index Architecture',
          diagram: {
            chart: `flowchart LR
    D[Document] -->|analyze| A[Analyzer]
    A -->|emit| T[Terms]
    T -->|append| P[(Posting Lists)]
    Q[Search Query] -->|tokenize| QT[Query Terms]
    QT -->|lookup| P
    P -->|score| R[Ranked Results]
    style P fill:#3498db,color:#fff
    style R fill:#2ecc71,color:#fff`,
            caption: 'Documents flow through analyzers into posting lists; queries intersect lists and score matches.'
          }
        },
        {
          heading: 'Python Inverted Index Example',
          example: {
            title: 'Build a simple inverted index and run a boolean query',
            code: `from collections import defaultdict

docs = {
    1: "the quick brown fox",
    2: "the lazy dog",
    3: "the quick dog jumps"
}

index = defaultdict(set)
for doc_id, text in docs.items():
    for token in text.lower().split():
        index[token].add(doc_id)

def search(terms):
    sets = [index[t] for t in terms if t in index]
    return set.intersection(*sets) if sets else set()

print(index)
print(search(["the", "dog"]))`,
            output: 'The index maps each token to document IDs, and the search returns documents that contain all query terms.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Search Engine Comparison',
          table: {
            headers: ['Engine', 'Best For', 'Scaling Model', 'Trade-off'],
            rows: [
              ['Elasticsearch', 'Full-text search, logs, analytics', 'Horizontal sharding + replicas', 'Operational complexity and JVM tuning'],
              ['Solr', 'Enterprise search, faceted search', 'ZooKeeper-coordinated clusters', 'Slower feature release cycle than Elasticsearch'],
              ['OpenSearch', 'AWS-compatible search and observability', 'Fork of Elasticsearch', 'Smaller ecosystem than Elasticsearch'],
              ['MySQL Full-Text', 'Small tables with simple search', 'Single-node or read replicas', 'Does not scale to web-scale relevance or sharding']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Shopify product search.</strong> Shopify merchants power product discovery with Elasticsearch. Each shop has an index of products, variants, and inventory. Elasticsearch handles tokenization for synonyms, typo tolerance, and faceted filtering. Shards and replicas keep search latency low during flash sales and holiday traffic.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Over-sharding indexes, which increases memory and query coordination overhead',
            'Using the default analyzer for all languages instead of language-specific tokenization',
            'Forcing a refresh after every write instead of relying on the near-real-time refresh interval',
            'Ranking purely by TF-IDF without business signals like popularity or recency',
            'Using deep pagination without search_after or scroll APIs',
            'Ignoring mapping explosions from unbounded dynamic fields'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'An inverted index maps terms to posting lists of matching documents',
            'Analyzers normalize text so queries and documents speak the same token language',
            'BM25 is the default ranking function in Elasticsearch and handles term saturation better than TF-IDF',
            'Shards parallelize data; replicas improve read throughput and fault tolerance',
            'Choose routing and sharding strategy based on query patterns and data size'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why is an inverted index faster than a full table scan for text search? → It maps each term directly to its matching documents, avoiding a scan of every row.',
            'Q2: What is the role of an analyzer in Elasticsearch? → It tokenizes, normalizes, filters, and stems text so queries and documents match consistently.',
            'Q3: How does document routing affect sharding? → A hash of the document routing key determines the shard, keeping related data on the same node.',
            'Q4: When would you choose a replica over a shard for read scaling? → Replicas serve read traffic and improve availability; shards split data for write and query parallelism.'
          ]
        }
      ]
    },
    'typeahead-autocomplete': {
      title: 'Typeahead & Autocomplete',
      sections: [
        {
          heading: 'What is Typeahead?',
          text: 'Typeahead, also called autocomplete, predicts and surfaces completions as a user types. It must feel instant, usually returning suggestions in under 100 milliseconds. The system balances popularity, personalization, spelling tolerance, and cache efficiency.',
          list: [
            '<strong>Trie / prefix tree:</strong> A tree where each edge represents a character and each path spells a term',
            '<strong>Top-k per node:</strong> Every prefix node stores the k most popular completions below it',
            '<strong>Personalization:</strong> Suggestions can be re-ranked by user history, location, or preferences',
            '<strong>Frequency updates:</strong> Term popularity changes as users search, so counts must be refreshed',
            '<strong>Cache popular prefixes:</strong> Short prefixes are cached at the edge to avoid repeated trie lookups',
            '<strong>Fuzzy matching:</strong> Edit distance or n-gram indexes catch typos within a small budget',
            '<strong>Latency budget:</strong> End-to-end response should stay below 100ms for a snappy UX'
          ]
        },
        {
          heading: 'How Typeahead Works',
          text: 'As the user types, the system walks the trie along the typed prefix. At the terminal node, it returns the stored top-k completions. Popular prefixes are served from cache; rare or personalized queries may hit a service that blends real-time signals.',
          list: [
            'Normalize the query prefix by lowercasing and removing accents',
            'Traverse the trie from root to the last character of the prefix',
            'Read the top-k completions stored at or below that node',
            'Apply personalization, business rules, and typo-tolerant candidates',
            'Return ranked suggestions to the client',
            'Log selections and update term frequencies asynchronously'
          ]
        },
        {
          heading: 'Trie Structure',
          diagram: {
            chart: `flowchart TD
    R[Root] --> C[c]
    C --> A[a]
    A --> T1[t isWord]
    T1 --> S[s isWord]
    R --> D[d]
    D --> O[o]
    O --> G[g isWord]
    style T1 fill:#2ecc71,color:#fff
    style S fill:#2ecc71,color:#fff
    style G fill:#2ecc71,color:#fff`,
            caption: 'A prefix tree shares common prefixes and marks complete words at terminal nodes.'
          }
        },
        {
          heading: 'Python Trie Autocomplete Example',
          example: {
            title: 'Trie with top-k suggestions per prefix',
            code: `from collections import defaultdict

class TrieNode:
    def __init__(self):
        self.children = {}
        self.top = []

class Trie:
    def __init__(self, k=3):
        self.root = TrieNode()
        self.k = k

    def insert(self, word, freq):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
            # maintain top-k completions by frequency
            node.top.append((freq, word))
            node.top.sort(reverse=True)
            node.top = node.top[:self.k]

    def suggest(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return []
            node = node.children[ch]
        return [w for _, w in node.top]

trie = Trie(k=2)
trie.insert("cat", 10)
trie.insert("cats", 7)
trie.insert("car", 5)
trie.insert("dog", 8)
print(trie.suggest("ca"))`,
            output: 'The trie returns the most frequent completions for the prefix "ca" without scanning the whole dictionary.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Autocomplete Technique Comparison',
          table: {
            headers: ['Technique', 'Strength', 'Weakness', 'Use Case'],
            rows: [
              ['Trie', 'Fast prefix lookup, easy top-k', 'High memory for huge dictionaries', 'General autocomplete'],
              ['Ternary Search Tree', 'Compact, cache-friendly', 'Slightly slower than trie', 'Memory-constrained dictionaries'],
              ['N-gram index', 'Handles typos and substrings', 'More storage and noise', 'Fuzzy search and spell correction'],
              ['Edit-distance index', 'Corrects misspellings', 'Higher latency per query', 'Search-as-you-type with typos']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Google Search autocomplete.</strong> Google processes billions of queries and surfaces completions from a trie-like index that stores popular n-grams. The system blends global popularity, user language, location, and recent search history. Suggestions are aggressively cached at edge points of presence to keep latency under 100 milliseconds worldwide.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Storing every completion at every node, which wastes memory',
            'Ignoring frequency updates, causing stale suggestions long after trends change',
            'Failing to cache short prefixes, which are queried most often',
            'Ranking only by popularity and missing personalization or business goals',
            'Running fuzzy matching on every keystroke instead of only when the prefix has few results',
            'Returning sensitive or abusive suggestions due to insufficient filtering'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Typeahead predicts completions as the user types and must feel instant',
            'A trie stores shared prefixes and can keep top-k completions at each node',
            'Cache popular prefixes and update frequencies asynchronously to stay fast',
            'Fuzzy matching improves typo tolerance but should be used selectively',
            'Personalization and business rules sit on top of raw frequency data'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why store top-k completions at each trie node? → It turns a prefix query into an O(prefix length + k) lookup instead of scanning all suffixes.',
            'Q2: How do you keep autocomplete latency under 100ms? → Cache popular prefixes, keep the trie in memory, and avoid heavy computation on every keystroke.',
            'Q3: What is the trade-off of fuzzy matching in typeahead? → It improves typo tolerance but increases query latency and can return noisy suggestions.',
            'Q4: How should term popularity be updated? → Log selections and aggregate counts asynchronously so the write path does not block reads.'
          ]
        }
      ]
    },
    'geohash-quadtree': {
      title: 'Geohash & Quadtree (Spatial Indexing)',
      sections: [
        {
          heading: 'What is Geohash & Quadtree?',
          text: 'Geohash and quadtree are spatial indexing techniques that map two-dimensional coordinates into structures that support fast nearby searches. Geohash encodes latitude and longitude into a short base32 string whose prefixes represent larger regions. Quadtrees recursively subdivide a plane into four quadrants until each cell meets a size or density threshold.',
          list: [
            '<strong>Geohash encoding:</strong> Interleaves latitude and longitude bits, then encodes them as a base32 string',
            '<strong>Precision levels:</strong> Longer geohash strings represent smaller, more precise rectangles',
            '<strong>Prefix search:</strong> Shared prefixes mean two points are geographically close, which enables range scans',
            '<strong>Quadtree subdivision:</strong> Each node splits into four children; points are placed in the smallest fitting cell',
            '<strong>Nearby queries:</strong> Search the cell containing the point plus neighboring cells to cover a radius',
            '<strong>Redis GEO commands:</strong> Redis stores locations in a sorted set by geohash score and supports radius queries'
          ]
        },
        {
          heading: 'How Geohash Works',
          text: 'Geohash repeatedly bisects the latitude and longitude ranges. Each bisection adds one bit: 0 for the lower half and 1 for the upper half. The bits are interleaved and grouped into five-bit chunks, each mapped to a base32 character. A five-character geohash covers roughly a 5 by 5 kilometer box, while a nine-character geohash covers a few meters.',
          list: [
            'Start with the full latitude and longitude ranges',
            'Bisect each range and record a bit for which half contains the point',
            'Interleave longitude and latitude bits alternately',
            'Group bits into chunks of five and map each chunk to a base32 character',
            'Longer strings give higher precision but require more storage',
            'Nearby search scans the prefix range and checks neighboring prefixes'
          ]
        },
        {
          heading: 'Spatial Indexing Architecture',
          diagram: {
            chart: `flowchart LR
    L[Lat Lon] -->|encode| G[Geohash string]
    G -->|prefix| P[Prefix range]
    P -->|filter| N[Nearby results]
    Q[Quadtree] -->|subdivide| C1[Quadrant NW]
    Q -->|subdivide| C2[Quadrant NE]
    Q -->|subdivide| C3[Quadrant SW]
    Q -->|subdivide| C4[Quadrant SE]
    style G fill:#f39c12,color:#fff`,
            caption: 'Geohashes turn location into sortable strings; quadtrees recursively partition space into cells.'
          }
        },
        {
          heading: 'Python Geohash and Redis GEO Example',
          example: {
            title: 'Simple geohash encoder and Redis GEO commands',
            code: `BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz"

def encode_lat_lon(lat, lon, precision=5):
    lat_range, lon_range = [-90.0, 90.0], [-180.0, 180.0]
    bits = []
    for _ in range(precision * 5):
        # longitude bit first
        mid = (lon_range[0] + lon_range[1]) / 2
        if lon >= mid:
            bits.append(1)
            lon_range[0] = mid
        else:
            bits.append(0)
            lon_range[1] = mid
        # latitude bit
        mid = (lat_range[0] + lat_range[1]) / 2
        if lat >= mid:
            bits.append(1)
            lat_range[0] = mid
        else:
            bits.append(0)
            lat_range[1] = mid
    s = ""
    for i in range(0, len(bits), 5):
        s += BASE32[int("".join(map(str, bits[i:i+5])), 2)]
    return s

print(encode_lat_lon(37.7749, -122.4194, precision=6))
# Redis commands for nearby search
# GEOADD drivers -122.4194 37.7749 driver:1
# GEORADIUS drivers -122.4194 37.7749 2 km WITHDIST`,
            output: 'The encoder produces a base32 geohash string, and Redis GEO commands add points and query nearby points by radius.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Spatial Index Comparison',
          table: {
            headers: ['Index', 'Structure', 'Best For', 'Trade-off'],
            rows: [
              ['Geohash', 'Base32 string from interleaved bits', 'Radius search on sorted sets', 'Rectangle distortion near poles'],
              ['Quadtree', 'Recursive four-way subdivision', 'Dense or uneven point distributions', 'Rebalancing cost on updates'],
              ['R-tree', 'Balanced tree of bounding boxes', 'Arbitrary geometries and polygons', 'More complex implementation'],
              ['S2 / H3', 'Hierarchical spherical cells', 'Global location analytics', 'Higher learning curve']
            ]
          }
        },
        {
          heading: 'Real-World Case Study',
          text: '<strong>Uber driver dispatch.</strong> Uber needs to match riders with nearby drivers in real time. It indexes driver locations using a spatial grid based on geohash-like cells. When a rider requests a trip, the dispatch service queries neighboring cells, ranks available drivers by ETA, and sends the request to the closest one. Low-latency spatial indexing is critical for a smooth ride request flow.'
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Using geohash equality instead of prefix plus neighbor checks, which misses nearby border points',
            'Choosing precision that is too high, creating tiny cells with few points',
            'Ignoring distortion near the poles and the antimeridian',
            'Storing points without an efficient in-memory index, leading to slow scans',
            'Forgetting to recompute cells when a location changes frequently',
            'Using geohash for exact distance instead of a final haversine filter'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Geohash converts latitude and longitude into a sortable base32 string',
            'Longer geohash prefixes give finer precision and smaller rectangles',
            'Nearby searches scan the prefix range and neighboring cells, then filter by true distance',
            'Quadtrees recursively split space into four quadrants until cells reach a desired density',
            'Redis GEO uses geohash scores inside sorted sets for fast radius queries'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            'Q1: Why does a shared geohash prefix imply proximity? → Prefixes map to nested rectangles, so longer shared prefixes mean smaller shared rectangles.',
            'Q2: How do you handle points near the edge of a geohash cell? → Query neighboring cells and apply a final distance filter such as haversine.',
            'Q3: What is the main advantage of a quadtree over a geohash grid? → Quadtrees adapt to uneven point density by subdividing dense regions more than sparse regions.',
            'Q4: Which Redis data structure supports GEOADD and GEORADIUS? → A sorted set keyed by geohash score.'
          ]
        }
      ]
    }
  }
};
