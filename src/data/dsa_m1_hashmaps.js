// DSA Module 1: Hash Maps topic (split from hashmaps-sets)
export const hashmapsTopic = {
  title: 'Hash Maps',
  subtitle: 'O(1) key-value lookup — the interviewer\'s favorite space-for-time trade-off',
  sections: [
    // A — What is a Hash Map?
    {
      heading: 'What is a Hash Map?',
      text: 'A hash map (also called a hash table or dictionary) is a data structure that stores <strong>key–value pairs</strong> and supports insert, lookup, and delete in expected O(1) time. It turns a key of almost any type into an integer bucket index via a hash function, then stores the value at that bucket. When an interviewer asks "can you do better than O(n) for finding a matching element?", the answer is almost always a hash map.',
      list: [
        '<strong>Key–value storage:</strong> Every entry maps a unique key to an associated value (e.g. word → frequency, userId → profile).',
        '<strong>Hash function:</strong> Converts a key into an integer that is reduced modulo the bucket-array length to pick a slot.',
        '<strong>Expected O(1) operations:</strong> get, put, and delete average constant time when the hash spreads keys evenly.',
        '<strong>Unordered (usually):</strong> Classic hash maps do not keep keys sorted. Python <code>dict</code> (3.7+) and Java <code>LinkedHashMap</code> preserve insertion order; Java <code>TreeMap</code> keeps keys sorted at O(log n).',
        '<strong>Foundation of modern software:</strong> Caches, databases, language runtimes, and nearly every "count / group / lookup" interview problem rests on hash maps.'
      ]
    },
    // B — Components
    {
      heading: 'Components of a Hash Map',
      text: 'Under the hood a hash map is simple: an array of buckets, a hash function, and a strategy for handling collisions when two keys land in the same bucket.',
      list: [
        '<strong>Bucket array:</strong> A fixed-length array (that grows when full) where each slot holds zero or more entries.',
        '<strong>Hash function:</strong> Maps a key to an integer. Good hashes spread keys uniformly so no bucket gets overloaded.',
        '<strong>Load factor:</strong> Ratio of stored entries to bucket capacity (often ~0.75). When exceeded, the table resizes (usually doubles) and rehashes.',
        '<strong>Entry / node:</strong> The unit stored in a bucket — at minimum (key, value), and for chaining also a next pointer.',
        '<strong>Collision strategy:</strong> Separate chaining (linked list or tree per bucket) or open addressing (probe for another empty slot).'
      ]
    },
    // C — How Hashing Works (diagrams)
    {
      heading: 'How Hashing Works',
      text: 'Inserting a key–value pair is three steps: (1) compute <code>hash(key)</code>, (2) reduce it to a bucket index with modulo the array length, (3) place the entry in that bucket — either at the head of a chain or in the first empty probe slot.',
      diagram: {
        caption: 'key → hash → bucket index → store entry',
        chart: `flowchart LR
    K["key = 'apple'"] --> H["hash('apple')"]
    H --> M["hash % 8 = 3"]
    M --> B["Bucket 3"]
    B --> E["('apple', 5)"]
    style K fill:#3498db,color:#fff
    style E fill:#2ecc71,color:#fff`
      }
    },
    {
      diagram: {
        caption: 'Bucket array after several inserts (chaining on collision)',
        chart: `flowchart TB
    subgraph Buckets["Bucket Array size 8"]
      direction TB
      B0["0: empty"]
      B1["1: empty"]
      B2["2: banana → 2"]
      B3["3: apple → 5  →  cherry → 1"]
      B4["4: empty"]
      B5["5: date → 3"]
      B6["6: empty"]
      B7["7: elderberry → 7"]
    end
    style B3 fill:#f1c40f,color:#000`
      }
    },
    {
      text: '<strong>Why lookup is O(1) average:</strong> computing the hash and modulo is constant work, and with a good hash and reasonable load factor each bucket holds a small constant number of entries. You only pay linear cost when many keys collide into the same bucket — the rare worst case you should still mention in interviews.'
    },
    // D — Collision Resolution
    {
      heading: 'Collision Resolution',
      text: 'Two different keys can hash to the same bucket. How you resolve that collision is the main design difference between Python dicts and Java HashMaps.',
      list: [
        '<strong>Separate chaining (Java HashMap):</strong> Each bucket holds a linked list of entries. Since Java 8, a bucket that grows past 8 entries converts to a balanced tree (O(log n) worst case per bucket instead of O(n)).',
        '<strong>Open addressing (Python dict):</strong> On collision, probe other slots in the array (Python uses a form of open addressing with pseudo-random probing) until an empty slot is found. All data lives in the flat array — no per-bucket lists.',
        '<strong>Why it matters:</strong> Chaining handles high load factors gracefully; open addressing is more cache-friendly but needs a lower load factor and careful tombstones on delete.',
        '<strong>Interview answer:</strong> "Average O(1) assumes a uniform hash and bounded chain/probe length. Adversarial collisions can degrade to O(n); Java 8+ tree bins reduce that to O(log n)."'
      ]
    },
    {
      diagram: {
        caption: 'Separate chaining vs open addressing',
        chart: `flowchart LR
    subgraph Chain["Chaining"]
      direction TB
      C0["bucket 3"] --> C1["apple"] --> C2["cherry"]
    end
    subgraph Open["Open Addressing"]
      direction TB
      O0["slot 3: apple"]
      O1["slot 4: cherry (probed)"]
      O2["slot 5: empty"]
    end
    Chain ~~~ Open`
      }
    },
    // E — Types / Variants
    {
      heading: 'Hash Map Variants',
      text: 'Pick the right map type for ordering and performance needs. Interviews often ask you to name the difference between these.'
    },
    {
      heading: 'Python dict, Counter, defaultdict, OrderedDict',
      text: 'Python\'s built-in <code>dict</code> is a high-performance hash map that preserves insertion order (guaranteed since 3.7). Three important subclasses sit on top of it:',
      list: [
        '<strong>dict:</strong> General key–value map. <code>d[k]</code>, <code>d.get(k, default)</code>, <code>del d[k]</code>, <code>k in d</code> are all O(1) average.',
        '<strong>Counter:</strong> Frequency map. <code>Counter(iterable)</code> builds counts in O(n); supports <code>+</code>, <code>-</code>, and <code>most_common(k)</code>.',
        '<strong>defaultdict:</strong> Auto-creates missing keys via a factory — <code>defaultdict(list)</code> for grouping, <code>defaultdict(int)</code> for counting — eliminates repetitive existence checks.',
        '<strong>OrderedDict:</strong> Explicit order control with <code>move_to_end</code> / <code>popitem(last=False)</code> — the classic building block for an LRU cache in pure Python.'
      ]
    },
    {
      heading: 'Java HashMap, TreeMap, LinkedHashMap',
      list: [
        '<strong>HashMap:</strong> O(1) average get/put/delete, no key order. Default choice for interviews.',
        '<strong>TreeMap:</strong> Red-Black tree backing — O(log n) operations, keys always sorted, supports range queries (<code>subMap</code>, <code>floorKey</code>).',
        '<strong>LinkedHashMap:</strong> Hash map + doubly linked list that preserves insertion order (or access order for LRU). O(1) operations with predictable iteration order.',
        '<strong>Hashtable:</strong> Legacy synchronized map — prefer <code>ConcurrentHashMap</code> for thread safety instead.'
      ]
    },
    // F — Advantages
    {
      heading: 'Advantages',
      text: 'Hash maps dominate when the workload is "look up by key" rather than "walk by index" or "iterate in sorted order".',
      list: [
        '<strong>Expected O(1) lookup / insert / delete:</strong> The single biggest reason they win interviews and production systems.',
        '<strong>Flexible keys:</strong> Strings, integers, tuples (Python), and any object with a correct hashCode/equals (Java) can be keys.',
        '<strong>Eliminates nested loops:</strong> Replacing an O(n) inner search with a map lookup turns O(n²) into O(n) — the classic space-for-time trade-off.',
        '<strong>Natural grouping and counting:</strong> Frequency maps, adjacency lists, inverted indexes, and memoization tables are all hash maps.',
        '<strong>Rich standard-library support:</strong> Every major language ships a battle-tested implementation — you rarely need to write one from scratch.'
      ]
    },
    // G — Disadvantages
    {
      heading: 'Disadvantages',
      text: 'Constant-time average case comes with memory and ordering costs you must understand.',
      list: [
        '<strong>No sorted order by default:</strong> Range queries and "next larger key" need a tree map (O(log n)), not a plain hash map.',
        '<strong>Extra memory:</strong> Bucket arrays, load-factor slack, and per-entry overhead use more RAM than a packed array of the same values.',
        '<strong>Worst-case O(n) (or O(log n)):</strong> Pathological collisions can degrade performance; always state "average O(1)" in interviews.',
        '<strong>Keys must be hashable / immutable:</strong> Mutable lists cannot be dict keys in Python; mutable keys in Java break equality contracts if mutated after insert.',
        '<strong>Cache misses vs arrays:</strong> Entries are not as contiguous as a plain array, so a pure sequential scan of values is often slower than scanning an array.',
        '<strong>Resize spikes:</strong> Rehashing on growth is O(n) for that operation — amortized away, but a real latency hiccup under tight SLAs.'
      ]
    },
    // H — Operations
    {
      heading: 'Hash Map Operations',
      text: 'The eight core operations below cover nearly everything interviews ask you to do with hash maps. Each one shows the idea, a Mermaid visual where useful, and the complexity.'
    },
    {
      heading: 'Operation 1: Put / Insert',
      text: '<strong>What it does:</strong> Store a value under a key (overwrite if the key already exists).<br/><strong>Best efficiency:</strong> O(1) average — hash the key, land in a bucket, write or update the entry. Occasional resize is amortized.',
      diagram: {
        caption: 'put("apple", 5) lands in bucket hash % n',
        chart: `flowchart LR
    P["put('apple', 5)"] --> H["hash"] --> B["bucket"] --> W["write entry"]
    style W fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation 2: Get / Lookup',
      text: '<strong>What it does:</strong> Return the value for a key, or a missing indicator (None / null / default).<br/><strong>Best efficiency:</strong> O(1) average. Prefer <code>get(key, default)</code> or <code>getOrDefault</code> over raw indexing when absence is normal.',
      diagram: {
        caption: 'get("apple") → hash → bucket → value 5',
        chart: `flowchart LR
    G["get('apple')"] --> H["hash"] --> B["bucket 3"] --> V["5"]
    style V fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation 3: Delete',
      text: '<strong>What it does:</strong> Remove a key and its value.<br/><strong>Best efficiency:</strong> O(1) average. Open-addressing tables mark a tombstone so probe chains stay correct; chaining simply unlinks the node.'
    },
    {
      heading: 'Operation 4: Contains Key',
      text: '<strong>What it does:</strong> Return true if the key is present.<br/><strong>Best efficiency:</strong> O(1) average — same path as get, but you only need existence, not the value. In Python: <code>key in d</code>. In Java: <code>map.containsKey(key)</code>.'
    },
    {
      heading: 'Operation 5: Frequency Count',
      text: '<strong>What it does:</strong> Build a map of element → how many times it appears.<br/><strong>Best efficiency:</strong> One O(n) pass. Use <code>Counter</code> / <code>defaultdict(int)</code> in Python or <code>merge(key, 1, Integer::sum)</code> in Java.',
      code: `# Python
from collections import Counter, defaultdict
freq = Counter("hello")           # {'h':1,'e':1,'l':2,'o':1}
freq2 = defaultdict(int)
for ch in "hello":
    freq2[ch] += 1

# Java
Map<Character, Integer> freq = new HashMap<>();
for (char c : "hello".toCharArray())
    freq.merge(c, 1, Integer::sum);`,
      language: 'python'
    },
    {
      heading: 'Operation 6: Group by Canonical Key',
      text: '<strong>What it does:</strong> Collect items that share an equivalence class (anagrams, same frequency signature, same category) into lists keyed by a canonical form.<br/><strong>Best efficiency:</strong> O(n × cost of key). Sorted string or count-tuple are classic keys for anagrams.',
      code: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))   # "eat","tea","ate" → "aet"
        groups[key].append(word)
    return list(groups.values())`,
      language: 'python'
    },
    {
      heading: 'Operation 7: Complement Lookup (Two-Sum Pattern)',
      text: '<strong>What it does:</strong> While scanning, store each value and ask "have I already seen the partner I need?" in O(1).<br/><strong>Best efficiency:</strong> O(n) time, O(n) space — replaces the O(n²) nested loop.',
      diagram: {
        caption: 'Two Sum: for x, look up target − x in the map',
        chart: `flowchart LR
    X["current x"] --> C["complement = target - x"]
    C --> M{"complement in map?"}
    M -->|yes| R["return pair"]
    M -->|no| S["store x → index"]
    style R fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation 8: Prefix-Sum Map',
      text: '<strong>What it does:</strong> Count (or find) subarrays whose sum equals k by storing how many times each running prefix sum has appeared.<br/><strong>Best efficiency:</strong> O(n). At index i, if <code>prefix - k</code> was seen c times, there are c subarrays ending at i with sum k. Initialize <code>{0: 1}</code> for subarrays that start at index 0.'
    },
    // I — Python Implementation
    {
      heading: 'Python Implementation',
      example: {
        title: 'Hash Maps in Python',
        code: `from collections import Counter, defaultdict, OrderedDict
from typing import List

# ── Word frequency with Counter — O(n) ───────────────────────────
def word_frequency(text: str):
    freq = Counter(text.lower().split())
    print("Top 3:", freq.most_common(3))
    return freq

# ── Group Anagrams with defaultdict — O(n * k log k) ─────────────
def group_anagrams(words: List[str]) -> List[List[str]]:
    groups = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))
        groups[key].append(word)
    return list(groups.values())

# ── Two Sum — O(n) time, O(n) space ──────────────────────────────
def two_sum(nums: List[int], target: int) -> List[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# ── Subarray sum equals k — O(n), prefix sum + hash map ──────────
def subarray_sum(nums: List[int], k: int) -> int:
    count = 0
    prefix_sum = 0
    prefix_counts = defaultdict(int)
    prefix_counts[0] = 1

    for num in nums:
        prefix_sum += num
        count += prefix_counts[prefix_sum - k]
        prefix_counts[prefix_sum] += 1
    return count

# ── LRU Cache using OrderedDict — O(1) get and put ────────────────
class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)

# ── Demo ──────────────────────────────────────────────────────────
word_frequency("the quick brown fox the fox")
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
print(two_sum([2, 7, 11, 15], 9))
print("Subarrays with sum 2:", subarray_sum([1, 1, 1], 2))

lru = LRUCache(2)
lru.put(1, 10)
lru.put(2, 20)
print(lru.get(1))
lru.put(3, 30)
print(lru.get(2))`,
        output: `Top 3: [('the', 2), ('fox', 2), ('quick', 1)]
[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
[0, 1]
Subarrays with sum 2: 2
10
-1`,
        language: 'python',
        type: 'code'
      }
    },
    // J — Java Implementation
    {
      heading: 'Java Implementation',
      example: {
        title: 'Hash Maps in Java',
        code: `import java.util.*;

public class HashMapDemo {

    static Map<String, Integer> wordFrequency(String text) {
        Map<String, Integer> freq = new HashMap<>();
        for (String word : text.toLowerCase().split("\\\\s+")) {
            freq.merge(word, 1, Integer::sum);
        }
        return freq;
    }

    static List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> groups = new HashMap<>();
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }

    static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    static int subarraySum(int[] nums, int k) {
        int count = 0, prefixSum = 0;
        Map<Integer, Integer> prefixCounts = new HashMap<>();
        prefixCounts.put(0, 1);
        for (int num : nums) {
            prefixSum += num;
            count += prefixCounts.getOrDefault(prefixSum - k, 0);
            prefixCounts.merge(prefixSum, 1, Integer::sum);
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(wordFrequency("the quick brown fox the fox"));
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println("Subarrays with sum 2: " + subarraySum(new int[]{1,1,1}, 2));
    }
}`,
        output: `{the=2, quick=1, brown=1, fox=2}
[[eat, tea, ate], [tan, nat], [bat]]
[0, 1]
Subarrays with sum 2: 2`,
        language: 'java',
        type: 'code'
      }
    },
    // K — Complexity
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of hash map operation complexities. The single most important rule: <strong>state average O(1) and acknowledge the collision worst case</strong> — interviewers dock points for claiming "always O(1)".',
      table: {
        headers: ['Operation', 'Time (avg)', 'Time (worst)', 'Notes'],
        rows: [
          ['Put / Insert', 'O(1)', 'O(n) / O(log n)*', 'Hash + write. Resize is O(n) amortized away. *Java 8+ tree bins: O(log n) worst.'],
          ['Get / Lookup', 'O(1)', 'O(n) / O(log n)*', 'Hash + walk chain or probe sequence until key or empty.'],
          ['Delete', 'O(1)', 'O(n) / O(log n)*', 'Same path as get, then unlink or tombstone.'],
          ['Contains key', 'O(1)', 'O(n) / O(log n)*', 'Identical cost to get without returning the value.'],
          ['Iterate all entries', 'O(n)', 'O(n)', 'Visit every stored entry; order depends on map type.'],
          ['Build frequency map', 'O(n)', 'O(n²) rare', 'One pass; n inserts each O(1) average.'],
          ['Two-Sum style scan', 'O(n)', 'O(n²) rare', 'One pass with O(1) complement lookups; O(n) extra space.'],
          ['TreeMap get/put', 'O(log n)', 'O(log n)', 'Sorted keys; use only when order/range queries matter.']
        ]
      },
      note: 'Interview tip: always name the space trade-off out loud — "I use O(n) extra space for the map to buy O(n) time instead of O(n²)." Also know when NOT to use a hash map: sorted iteration, range queries, or hard real-time with no resize spikes favor tree maps or plain arrays.'
    },
    // L — Map type comparison table
    {
      heading: 'Choosing the Right Map Type',
      text: 'Quick reference for interviews and production choices:',
      table: {
        headers: ['Map Type', 'Key Order', 'Get / Put avg', 'Best Use Case'],
        rows: [
          ['Python dict', 'Insertion (3.7+)', 'O(1)', 'General key–value mapping'],
          ['Python Counter', 'Insertion', 'O(1)', 'Frequency counting, most_common(k)'],
          ['Python defaultdict', 'Insertion', 'O(1)', 'Grouping, adjacency lists, counting'],
          ['Python OrderedDict', 'Explicit order', 'O(1)', 'LRU cache (move_to_end)'],
          ['Java HashMap', 'None', 'O(1)', 'General key–value mapping'],
          ['Java TreeMap', 'Sorted by key', 'O(log n)', 'Range queries, sorted iteration'],
          ['Java LinkedHashMap', 'Insert or access', 'O(1)', 'LRU cache, ordered output']
        ]
      }
    },
    // M — Common Mistakes
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Mistake: Using a mutable object as a key.</strong> Lists are unhashable in Python (TypeError); in Java, mutating a key after put breaks the bucket contract — <em>Fix:</em> use tuples / strings / immutable records.',
        '<strong>Mistake: Manual existence checks under time pressure.</strong> Writing three lines for "increment or create" wastes time and invites bugs — <em>Fix:</em> <code>defaultdict(int)</code> or <code>merge</code> / <code>getOrDefault</code>.',
        '<strong>Mistake: Claiming "always O(1)".</strong> Adversarial hashes can collide — <em>Fix:</em> say "average O(1), worst O(n) / O(log n) with tree bins".',
        '<strong>Mistake: Forgetting the prefix-sum base case.</strong> Subarray-sum-equals-k needs <code>{0: 1}</code> or you miss subarrays that start at index 0.',
        '<strong>Mistake: Sorting when counting would do.</strong> Anagram checks do not need O(n log n) sorts if a frequency map (or 26-slot array) works in O(n).'
      ],
      code: `# WRONG: list as dict key
key = sorted(word)          # list — TypeError
groups[key].append(word)

# CORRECT
key = "".join(sorted(word)) # or tuple(sorted(word))
groups[key].append(word)

# WRONG: verbose count
if ch not in freq:
    freq[ch] = 0
freq[ch] += 1

# CORRECT
from collections import defaultdict
freq = defaultdict(int)
freq[ch] += 1`,
      language: 'python'
    },
    // N — Real-World Applications
    {
      heading: 'Real-World Applications',
      text: 'Hash maps sit under almost every system that needs "find this thing by name/id instantly".',
      list: [
        '<strong>Database hash indexes:</strong> Equality lookups like <code>WHERE id = 42</code> map column values to row pointers in O(1) average — the engine behind primary-key fetches.',
        '<strong>Distributed caches (Redis / Memcached):</strong> Essentially networked hash maps with TTLs and eviction. Every cache hit is a hash lookup.',
        '<strong>Language runtimes:</strong> Python\'s <code>object.__dict__</code>, Java class metadata, and JavaScript object properties are hash maps under the hood.',
        '<strong>LRU / LFU caches:</strong> Hash map for O(1) access plus a linked list or heap for eviction order — the same design as LeetCode 146.',
        '<strong>NLP tokenizers:</strong> Vocabulary tables map token strings to integer ids; BPE merge rules are hash-map lookups during encoding.',
        '<strong>Routing tables and DNS caches:</strong> Hostnames and routes resolve through hash-based tables for low-latency lookups at scale.',
        '<strong>Deduplication pipelines:</strong> Spark / Flink <code>distinct</code> and <code>groupBy</code> hash-partition records so identical keys land on the same worker.'
      ],
      note: 'Common thread: the access pattern is "I know the key; give me the value now" — not "give me everything between key A and key B" (that is a tree) and not "give me index i" (that is an array).'
    },
    // O — Interview Questions intro
    {
      heading: 'Top Interview Questions on Hash Maps',
      text: 'The eight most frequently asked hash-map interview questions are below — each with the key idea, a solved answer, and its complexity. Four recurring patterns solve nearly all of them: <strong>complement lookup</strong> (Two Sum), <strong>frequency counting</strong> (anagrams, top-k), <strong>prefix-sum maps</strong> (subarray sum), and <strong>map + ordered structure</strong> (LRU).',
      note: 'Pattern cheat sheet: nested loop searching for a partner → hash the complement; count occurrences → Counter / freq map; contiguous subarray constraint on sums → prefix map; cache with eviction → HashMap + LinkedHashMap / OrderedDict. Always state the O(n) space trade-off for the O(n) time win.'
    },
    {
      heading: 'Practice Question 1: Two Sum (LeetCode 1, Easy)',
      text: '<strong>Problem:</strong> Given an array of integers and a target, return the indices of the two numbers that add up to the target.<br/><strong>Key idea:</strong> Walk once; store each value\'s index. For current <code>x</code>, if <code>target - x</code> is already in the map, return both indices.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i
    return []`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Group Anagrams (LeetCode 49, Medium)',
      text: '<strong>Problem:</strong> Group an array of strings so anagrams land in the same group.<br/><strong>Key idea:</strong> Use the sorted string (or a 26-count tuple) as a hash-map key; append each word to its key\'s list.<br/><strong>Complexity:</strong> Time O(n · k log k) with sorted keys, Space O(n · k).',
      example: {
        title: 'Python Solution',
        code: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        groups["".join(sorted(word))].append(word)
    return list(groups.values())`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Subarray Sum Equals K (LeetCode 560, Medium)',
      text: '<strong>Problem:</strong> Count contiguous subarrays whose sum equals k.<br/><strong>Key idea:</strong> Prefix sums + map of prefix frequencies. At each index, add <code>count[prefix - k]</code>; then record the current prefix. Seed with <code>{0: 1}</code>.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `from collections import defaultdict

def subarray_sum(nums, k):
    count = prefix = 0
    seen = defaultdict(int)
    seen[0] = 1
    for x in nums:
        prefix += x
        count += seen[prefix - k]
        seen[prefix] += 1
    return count`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: First Unique Character (LeetCode 387, Easy)',
      text: '<strong>Problem:</strong> Return the index of the first non-repeating character in a string, or -1.<br/><strong>Key idea:</strong> Frequency map in one pass, then a second pass returns the first character whose count is 1.<br/><strong>Complexity:</strong> Time O(n), Space O(1) for a fixed alphabet (or O(k) distinct characters).',
      example: {
        title: 'Python Solution',
        code: `from collections import Counter

def first_uniq_char(s):
    freq = Counter(s)
    for i, ch in enumerate(s):
        if freq[ch] == 1:
            return i
    return -1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Top K Frequent Elements (LeetCode 347, Medium)',
      text: '<strong>Problem:</strong> Return the k most frequent elements in an array.<br/><strong>Key idea:</strong> Count with a hash map, then either sort by frequency or push into a min-heap of size k / bucket-sort by frequency for O(n).<br/><strong>Complexity:</strong> Time O(n log k) with a heap, or O(n) with buckets; Space O(n).',
      example: {
        title: 'Python Solution',
        code: `from collections import Counter

def top_k_frequent(nums, k):
    return [x for x, _ in Counter(nums).most_common(k)]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Two Sum II / design note — Copy List with Random Pointer (LeetCode 138, Medium)',
      text: '<strong>Problem:</strong> Deep-copy a linked list where each node has a random pointer.<br/><strong>Key idea:</strong> First pass: map original node → new node. Second pass: wire <code>next</code> and <code>random</code> using the map. Hash map turns pointer rewiring into O(1) lookups.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def copy_random_list(head):
    if not head:
        return None
    mp = {}
    cur = head
    while cur:
        mp[cur] = Node(cur.val)
        cur = cur.next
    cur = head
    while cur:
        mp[cur].next = mp.get(cur.next)
        mp[cur].random = mp.get(cur.random)
        cur = cur.next
    return mp[head]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: LRU Cache (LeetCode 146, Medium)',
      text: '<strong>Problem:</strong> Design a cache with O(1) get and put and a fixed capacity that evicts the least recently used key.<br/><strong>Key idea:</strong> Hash map for key → value (or node) plus an ordered structure (OrderedDict / LinkedHashMap / doubly linked list) for recency. On get/put, move the key to "most recent"; on overflow, drop the least recent.<br/><strong>Complexity:</strong> Time O(1) per operation, Space O(capacity).',
      example: {
        title: 'Python Solution',
        code: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap, self.cache = capacity, OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Isomorphic Strings (LeetCode 205, Easy)',
      text: '<strong>Problem:</strong> Return true if characters in s can be replaced to get t with a consistent one-to-one mapping.<br/><strong>Key idea:</strong> Two maps (or one map + a set of used values): s→t and t→s must both stay consistent. A single direction is not enough ("ab" / "aa" is a classic trap).<br/><strong>Complexity:</strong> Time O(n), Space O(k) for the alphabet.',
      example: {
        title: 'Python Solution',
        code: `def is_isomorphic(s, t):
    if len(s) != len(t):
        return False
    s2t, t2s = {}, {}
    for a, b in zip(s, t):
        if a in s2t and s2t[a] != b:
            return False
        if b in t2s and t2s[b] != a:
            return False
        s2t[a], t2s[b] = b, a
    return True`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
