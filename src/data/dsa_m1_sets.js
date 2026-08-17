// DSA Module 1: Sets topic (split from hashmaps-sets)
export const setsTopic = {
  title: 'Sets',
  subtitle: 'Unique membership in O(1) — dedupe, intersect, and "have I seen this?"',
  sections: [
    // A — What is a Set?
    {
      heading: 'What is a Set?',
      text: 'A set is a collection of <strong>unique elements</strong> with no duplicates. The core operations — add, remove, and membership test ("is x in the set?") — run in expected O(1) time for hash-based sets. Think of a set as a hash map that stores only keys and ignores values: you care about presence, not about mapping to a payload.',
      list: [
        '<strong>Uniqueness:</strong> Adding an element that is already present is a no-op (or returns false) — the set never holds two equal members.',
        '<strong>Membership test:</strong> <code>x in s</code> / <code>set.contains(x)</code> is the operation sets are built for — O(1) average on a hash set.',
        '<strong>No index access:</strong> Sets are not sequences. You cannot ask for "the 3rd element" reliably on a hash set (order is undefined unless you use a linked or sorted variant).',
        '<strong>Mathematical operations:</strong> Union, intersection, difference, and subset checks are first-class and often one-liners in Python.',
        '<strong>Interview superpower:</strong> "Have I seen this before?" and "longest run of consecutive numbers" both become linear with a set.'
      ]
    },
    // B — Components
    {
      heading: 'Components of a Set',
      text: 'A hash set is essentially a hash map with the values stripped away. Understanding that relationship makes set internals and complexities obvious.',
      list: [
        '<strong>Backing hash table:</strong> Elements are hashed into buckets exactly like map keys.',
        '<strong>Equality contract:</strong> Two elements that compare equal must share the same hash; otherwise membership breaks.',
        '<strong>No value field:</strong> Only the element (the "key") is stored — presence is the only information.',
        '<strong>Load factor & resize:</strong> Same growth rules as hash maps: when too full, rehash into a larger bucket array.',
        '<strong>Optional ordering layer:</strong> Tree sets keep elements sorted; linked hash sets preserve insertion order.'
      ]
    },
    // C — How Sets Work
    {
      heading: 'How Sets Work',
      text: 'Inserting an element hashes it to a bucket and stores it only if that bucket does not already contain an equal element. Membership is the same hash path without inserting.',
      diagram: {
        caption: 'add(20) → hash → bucket → store if absent',
        chart: `flowchart LR
    A["add(20)"] --> H["hash(20)"]
    H --> M["hash % n"]
    M --> B["bucket"]
    B --> E{"already present?"}
    E -->|no| S["store 20"]
    E -->|yes| N["no-op"]
    style S fill:#2ecc71,color:#fff
    style N fill:#95a5a6,color:#fff`
      }
    },
    {
      diagram: {
        caption: 'Set after inserts: {10, 20, 30, 40} — unique values only',
        chart: `flowchart LR
    S["Set"] --> A["10"]
    S --> B["20"]
    S --> C["30"]
    S --> D["40"]
    X["add(20) again"] -.->|ignored| B
    style X fill:#e74c3c,color:#fff`
      }
    },
    {
      text: '<strong>Set vs Hash Map:</strong> If you only need "is this key present?", use a set — it communicates intent and avoids dummy values. If you need "key → something", use a map. Frequency counting is a map problem; deduplication and visited tracking are set problems.'
    },
    // D — Types / Variants
    {
      heading: 'Set Variants',
      text: 'Choose the set type based on whether you need hash speed, sorted order, or insertion order.'
    },
    {
      heading: 'Python set and frozenset',
      list: [
        '<strong>set:</strong> Mutable hash set. <code>add</code>, <code>remove</code>/<code>discard</code>, <code>in</code>, and set algebra (<code>|</code>, <code>&</code>, <code>-</code>, <code>^</code>).',
        '<strong>frozenset:</strong> Immutable set — hashable, so it can be a dict key or a member of another set. Useful for caching sets of features or graph cliques.',
        '<strong>Creation:</strong> <code>{1, 2, 3}</code> or <code>set(iterable)</code>. Empty set must be <code>set()</code> — <code>{}</code> is an empty dict.',
        '<strong>Comprehensions:</strong> <code>{x * x for x in nums if x > 0}</code> builds a set of unique transformed values in one expression.'
      ]
    },
    {
      heading: 'Java HashSet, TreeSet, LinkedHashSet',
      list: [
        '<strong>HashSet:</strong> O(1) average add/contains/remove, no order. Default interview choice.',
        '<strong>TreeSet:</strong> Red-Black tree — O(log n) operations, elements always sorted, supports <code>ceiling</code>/<code>floor</code> and range views.',
        '<strong>LinkedHashSet:</strong> Hash set + linked list preserving insertion order. O(1) operations with predictable iteration.',
        '<strong>EnumSet:</strong> Specialized bit-vector set for enum types — extremely fast and compact when the universe is a fixed enum.'
      ]
    },
    // E — Advantages
    {
      heading: 'Advantages',
      text: 'Sets shine whenever uniqueness or membership is the primary concern.',
      list: [
        '<strong>O(1) average membership:</strong> Faster than scanning a list (O(n)) or binary-searching a sorted array (O(log n)) for "is it present?"',
        '<strong>Automatic deduplication:</strong> <code>list(set(arr))</code> (order not preserved) or a LinkedHashSet pass removes duplicates cleanly.',
        '<strong>Clean set algebra:</strong> Intersection, union, and difference express complex filters without nested loops.',
        '<strong>Visited tracking:</strong> Graph BFS/DFS, cycle detection in value sequences, and "seen before" scans all use a set.',
        '<strong>Clearer intent than a map:</strong> A set of visited nodes documents that you only care about presence, not associated data.'
      ]
    },
    // F — Disadvantages
    {
      heading: 'Disadvantages',
      text: 'Sets trade ordered access and indexability for speed of membership.',
      list: [
        '<strong>No random access by index:</strong> You cannot grab the i-th element from a hash set in O(1).',
        '<strong>Unordered by default:</strong> Iteration order is arbitrary unless you use LinkedHashSet / ordered variants (and even then it is not sorted by value).',
        '<strong>Elements must be hashable:</strong> Mutable lists cannot go in a Python set; Java elements need correct equals/hashCode.',
        '<strong>Memory overhead:</strong> Like hash maps, bucket slack and per-element headers cost more RAM than a packed array.',
        '<strong>Worst-case degradation:</strong> Same collision story as hash maps — average O(1), not guaranteed O(1).',
        '<strong>Not for frequency:</strong> A set only knows present/absent. Counting occurrences requires a map (Counter / HashMap).'
      ]
    },
    // G — Operations
    {
      heading: 'Set Operations',
      text: 'The core operations below cover membership, mutation, and set algebra — the three families of problems sets solve in interviews.'
    },
    {
      heading: 'Operation 1: Add',
      text: '<strong>What it does:</strong> Insert an element if it is not already present.<br/><strong>Best efficiency:</strong> O(1) average. Python <code>s.add(x)</code>; Java <code>set.add(x)</code> returns whether the set changed.',
      diagram: {
        caption: 'Adding a new element vs a duplicate',
        chart: `flowchart LR
    S1["{10, 20}"] -->|add 30| S2["{10, 20, 30}"]
    S2 -->|add 20| S3["{10, 20, 30}"]
    style S2 fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation 2: Remove',
      text: '<strong>What it does:</strong> Delete an element if present.<br/><strong>Best efficiency:</strong> O(1) average. Python: <code>remove</code> raises if missing, <code>discard</code> is silent; Java <code>remove</code> returns a boolean.'
    },
    {
      heading: 'Operation 3: Contains / Membership',
      text: '<strong>What it does:</strong> Test whether an element is in the set.<br/><strong>Best efficiency:</strong> O(1) average — the operation that makes sets beat lists for lookups. Prefer a set over <code>x in list</code> whenever the list is large or the test is inside a loop.'
    },
    {
      heading: 'Operation 4: Union',
      text: '<strong>What it does:</strong> Elements that appear in either set A or set B (or both).<br/><strong>Best efficiency:</strong> O(|A| + |B|). Python: <code>a | b</code> or <code>a.union(b)</code>.',
      diagram: {
        caption: 'A ∪ B',
        chart: `flowchart LR
    A["A: 1, 2, 3"] --> U["Union: 1, 2, 3, 4"]
    B["B: 3, 4"] --> U
    style U fill:#3498db,color:#fff`
      }
    },
    {
      heading: 'Operation 5: Intersection',
      text: '<strong>What it does:</strong> Elements that appear in both A and B.<br/><strong>Best efficiency:</strong> O(min(|A|, |B|)) typical — iterate the smaller set and test membership in the larger. Python: <code>a & b</code>.',
      diagram: {
        caption: 'A ∩ B',
        chart: `flowchart LR
    A["A: 1, 2, 3"] --> I["Intersection: 3"]
    B["B: 3, 4"] --> I
    style I fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation 6: Difference',
      text: '<strong>What it does:</strong> Elements in A but not in B.<br/><strong>Best efficiency:</strong> O(|A|). Python: <code>a - b</code>. Common for "items we still need to process" or "words in document A not in stopword list B".'
    },
    {
      heading: 'Operation 7: Symmetric Difference',
      text: '<strong>What it does:</strong> Elements in A or B but not both — <code>(A ∪ B) − (A ∩ B)</code>.<br/><strong>Best efficiency:</strong> O(|A| + |B|). Python: <code>a ^ b</code>. Useful for change detection between two snapshots.'
    },
    {
      heading: 'Operation 8: Subset / Superset',
      text: '<strong>What it does:</strong> Test whether every element of A is in B (<code>a <= b</code>) or vice versa.<br/><strong>Best efficiency:</strong> O(|A|) membership checks. Interview use: validating that required characters / permissions / flags are all present.'
    },
    // H — Python Implementation
    {
      heading: 'Python Implementation',
      example: {
        title: 'Sets in Python',
        code: `from typing import List

# ── Deduplicate while preserving first-seen order ────────────────
def unique_preserve_order(items: List[int]) -> List[int]:
    seen = set()
    out = []
    for x in items:
        if x not in seen:
            seen.add(x)
            out.append(x)
    return out

# ── Contains duplicate — O(n) ────────────────────────────────────
def contains_duplicate(nums: List[int]) -> bool:
    seen = set()
    for x in nums:
        if x in seen:
            return True
        seen.add(x)
    return False
    # one-liner: return len(nums) != len(set(nums))

# ── Longest consecutive sequence — O(n) ──────────────────────────
def longest_consecutive(nums: List[int]) -> int:
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 not in s:          # n starts a sequence
            length = 1
            while n + length in s:
                length += 1
            best = max(best, length)
    return best

# ── Set algebra ──────────────────────────────────────────────────
a, b = {1, 2, 3, 4}, {3, 4, 5}
print("union", a | b)             # {1, 2, 3, 4, 5}
print("intersect", a & b)         # {3, 4}
print("diff", a - b)              # {1, 2}
print("symdiff", a ^ b)           # {1, 2, 5}
print("subset", {3, 4} <= a)      # True

# ── Intersection of two arrays ───────────────────────────────────
def intersection(nums1: List[int], nums2: List[int]) -> List[int]:
    return list(set(nums1) & set(nums2))

# ── Demo ─────────────────────────────────────────────────────────
print(unique_preserve_order([1, 2, 2, 3, 1, 4]))
print(contains_duplicate([1, 2, 3, 1]))
print(longest_consecutive([100, 4, 200, 1, 3, 2]))
print(intersection([1, 2, 2, 1], [2, 2]))`,
        output: `union {1, 2, 3, 4, 5}
intersect {3, 4}
diff {1, 2}
symdiff {1, 2, 5}
subset True
[1, 2, 3, 4]
True
4
[2]`,
        language: 'python',
        type: 'code'
      }
    },
    // I — Java Implementation
    {
      heading: 'Java Implementation',
      example: {
        title: 'Sets in Java',
        code: `import java.util.*;

public class SetDemo {

    static List<Integer> uniquePreserveOrder(int[] nums) {
        Set<Integer> seen = new LinkedHashSet<>();
        for (int x : nums) seen.add(x);
        return new ArrayList<>(seen);
    }

    static boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int x : nums) {
            if (!seen.add(x)) return true;  // add returns false if present
        }
        return false;
    }

    static int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int n : nums) set.add(n);
        int best = 0;
        for (int n : set) {
            if (!set.contains(n - 1)) {
                int length = 1;
                while (set.contains(n + length)) length++;
                best = Math.max(best, length);
            }
        }
        return best;
    }

    static int[] intersection(int[] a, int[] b) {
        Set<Integer> setA = new HashSet<>();
        for (int x : a) setA.add(x);
        Set<Integer> out = new HashSet<>();
        for (int x : b) if (setA.contains(x)) out.add(x);
        return out.stream().mapToInt(Integer::intValue).toArray();
    }

    public static void main(String[] args) {
        System.out.println(uniquePreserveOrder(new int[]{1, 2, 2, 3, 1, 4}));
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 1}));
        System.out.println(longestConsecutive(new int[]{100, 4, 200, 1, 3, 2}));
        System.out.println(Arrays.toString(intersection(new int[]{1, 2, 2, 1}, new int[]{2, 2})));

        Set<Integer> s1 = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> s2 = new HashSet<>(Arrays.asList(3, 4, 5));
        Set<Integer> union = new HashSet<>(s1); union.addAll(s2);
        Set<Integer> inter = new HashSet<>(s1); inter.retainAll(s2);
        Set<Integer> diff = new HashSet<>(s1); diff.removeAll(s2);
        System.out.println(union + " " + inter + " " + diff);
    }
}`,
        output: `[1, 2, 3, 4]
true
4
[2]
[1, 2, 3, 4, 5] [3, 4] [1, 2]`,
        language: 'java',
        type: 'code'
      }
    },
    // J — Complexity
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of set operation complexities for hash-based sets (Python <code>set</code>, Java <code>HashSet</code>). Tree sets replace average O(1) with O(log n) and gain sorted order.',
      table: {
        headers: ['Operation', 'Time (avg)', 'Time (worst)', 'Notes'],
        rows: [
          ['Add', 'O(1)', 'O(n)', 'No-op if element already present; resize amortized.'],
          ['Remove', 'O(1)', 'O(n)', 'Hash + unlink / tombstone.'],
          ['Contains', 'O(1)', 'O(n)', 'The operation sets exist for — prefer over list scan.'],
          ['Iterate all', 'O(n)', 'O(n)', 'Order undefined on HashSet; insertion order on LinkedHashSet.'],
          ['Union A ∪ B', 'O(|A|+|B|)', '—', 'Build from both; each insert O(1) avg.'],
          ['Intersection A ∩ B', 'O(min(|A|,|B|))', '—', 'Scan smaller, test membership in larger.'],
          ['Difference A − B', 'O(|A|)', '—', 'Keep elements of A not in B.'],
          ['TreeSet add/contains', 'O(log n)', 'O(log n)', 'Sorted; use for ordered iteration / ceiling / floor.']
        ]
      },
      note: 'Interview tip: when you only need membership, reach for a set — not a map with dummy true values. When you need counts, reach for a map. And for longest consecutive sequence, the trick is "only expand from sequence starts (n-1 not in set)" so each number is visited a constant number of times → true O(n).'
    },
    // K — Comparison table
    {
      heading: 'Choosing the Right Set Type',
      table: {
        headers: ['Set Type', 'Order', 'Add / Contains avg', 'Best Use Case'],
        rows: [
          ['Python set', 'None', 'O(1)', 'Membership, dedupe, set algebra'],
          ['Python frozenset', 'None (immutable)', 'O(1)', 'Hashable set — dict key or set-of-sets'],
          ['Java HashSet', 'None', 'O(1)', 'General membership / dedupe'],
          ['Java LinkedHashSet', 'Insertion', 'O(1)', 'Dedupe while keeping first-seen order'],
          ['Java TreeSet', 'Sorted', 'O(log n)', 'Ordered unique elements, range queries'],
          ['Java EnumSet', 'Enum ordinal', 'O(1)', 'Fixed enum universe — bit-set speed']
        ]
      }
    },
    // L — Common Mistakes
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Mistake: Using <code>{}</code> for an empty set in Python.</strong> That creates an empty dict — <em>Fix:</em> always write <code>set()</code> for an empty set.',
        '<strong>Mistake: Expecting stable order from HashSet / set.</strong> Iteration order is arbitrary — <em>Fix:</em> use LinkedHashSet or sort the result when order matters.',
        '<strong>Mistake: Putting unhashable / mutable elements in a set.</strong> Lists and other mutables fail in Python; broken equals/hashCode fails in Java — <em>Fix:</em> use tuples, strings, or immutable records.',
        '<strong>Mistake: Using a set when you need frequencies.</strong> Sets collapse duplicates to one — <em>Fix:</em> use Counter / HashMap for counts.',
        '<strong>Mistake: O(n²) consecutive-sequence solution.</strong> Sorting is O(n log n); the set start-only expansion is O(n) — know both and pick O(n) when asked.',
        '<strong>Mistake: <code>remove</code> on a missing element in Python.</strong> Raises KeyError — <em>Fix:</em> use <code>discard</code> when absence is normal.'
      ],
      code: `# WRONG
s = {}           # this is a dict!
s.add(1)         # AttributeError

# CORRECT
s = set()
s.add(1)

# WRONG: list in a set
s.add([1, 2])    # TypeError: unhashable type: 'list'

# CORRECT
s.add((1, 2))    # tuple is hashable

# Membership: list vs set inside a loop
# WRONG — O(n) per test → O(n²) overall
if x in my_list: ...
# CORRECT — O(1) per test → O(n) overall
if x in my_set: ...`,
      language: 'python'
    },
    // M — Real-World Applications
    {
      heading: 'Real-World Applications',
      text: 'Sets appear anywhere systems must enforce uniqueness or answer membership quickly.',
      list: [
        '<strong>Visited sets in graph algorithms:</strong> BFS, DFS, and Dijkstra mark nodes as visited with a set so each node is processed once — without it, cycles loop forever.',
        '<strong>Deduplicating logs and events:</strong> Streaming pipelines keep a set (or bloom filter approximation) of seen event IDs to drop retries and double-publishes.',
        '<strong>Access-control allow/deny lists:</strong> User ids, IP addresses, or feature flags in a set give O(1) authorization checks on every request.',
        '<strong>Spell-checkers and dictionaries:</strong> A set (or trie) of valid words answers "is this a real word?" instantly; edit-distance suggestions start from that membership test.',
        '<strong>Database UNIQUE constraints:</strong> Under the hood, uniqueness indexes behave like sets of column values — insert fails when the value is already present.',
        '<strong>Stopword filtering in NLP:</strong> Token streams drop words that appear in a stopword set (<code>the</code>, <code>a</code>, <code>is</code>) before indexing.',
        '<strong>Change detection:</strong> Symmetric difference of yesterday\'s and today\'s ID sets yields exactly the added and removed records.'
      ],
      note: 'Common thread: the question is always "is this element already known?" — not "what value is attached to this key?" (map) and not "what is at index i?" (array).'
    },
    // N — Interview Questions intro
    {
      heading: 'Top Interview Questions on Sets',
      text: 'The eight most frequently asked set interview questions are below. Recurring patterns: <strong>seen-before scan</strong> (duplicates), <strong>set algebra</strong> (intersection / difference), <strong>sequence expansion from starts</strong> (longest consecutive), and <strong>visited tracking</strong> (happy number, graphs).',
      note: 'Pattern cheat sheet: "any duplicate?" → set while scanning; "common elements of two arrays" → set intersection; "longest run of consecutive ints" → set + expand only from starts; "cycle in a value sequence" → set of seen values (or Floyd). Prefer sets over maps when you do not need associated data.'
    },
    {
      heading: 'Practice Question 1: Contains Duplicate (LeetCode 217, Easy)',
      text: '<strong>Problem:</strong> Return true if any value appears at least twice.<br/><strong>Key idea:</strong> Add each element to a set; if add fails (already present), return true. Early exit makes best case O(1).<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def contains_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return True
        seen.add(x)
    return False`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Intersection of Two Arrays (LeetCode 349, Easy)',
      text: '<strong>Problem:</strong> Return the unique elements common to both arrays.<br/><strong>Key idea:</strong> Put one array in a set; scan the other and collect hits into a result set (auto-dedupes).<br/><strong>Complexity:</strong> Time O(n + m), Space O(n + m).',
      example: {
        title: 'Python Solution',
        code: `def intersection(nums1, nums2):
    return list(set(nums1) & set(nums2))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Longest Consecutive Sequence (LeetCode 128, Medium)',
      text: '<strong>Problem:</strong> Find the length of the longest consecutive elements sequence in O(n) time (no sorting).<br/><strong>Key idea:</strong> Put all numbers in a set. Only start counting at sequence heads (<code>n - 1 not in set</code>), then expand forward. Each number is visited at most twice.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def longest_consecutive(nums):
    s = set(nums)
    best = 0
    for n in s:
        if n - 1 not in s:
            length = 1
            while n + length in s:
                length += 1
            best = max(best, length)
    return best`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Happy Number (LeetCode 202, Easy)',
      text: '<strong>Problem:</strong> Starting from n, repeatedly replace the number with the sum of the squares of its digits. Return true if you reach 1 (happy), false if you loop forever.<br/><strong>Key idea:</strong> A set of seen numbers detects cycles. If a sum repeats, you are in a loop and not happy. (Floyd cycle detection also works without a set.)<br/><strong>Complexity:</strong> Time O(log n) per step × constant cycle length, Space O(cycle length) for the set.',
      example: {
        title: 'Python Solution',
        code: `def is_happy(n):
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(d) ** 2 for d in str(n))
    return n == 1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Valid Sudoku (LeetCode 36, Medium)',
      text: '<strong>Problem:</strong> Determine if a 9×9 Sudoku board is valid (no duplicate digits in any row, column, or 3×3 box). Empty cells are \'.\'.<br/><strong>Key idea:</strong> Three families of sets (or one set of tagged strings like <code>"r0-5"</code>, <code>"c3-5"</code>, <code>"b0-5"</code>). On each filled cell, if any tag is already present, the board is invalid.<br/><strong>Complexity:</strong> Time O(1) for a fixed 9×9 board (O(n²) generally), Space O(1) / O(n²).',
      example: {
        title: 'Python Solution',
        code: `def is_valid_sudoku(board):
    seen = set()
    for i in range(9):
        for j in range(9):
            v = board[i][j]
            if v == '.':
                continue
            tags = (f"r{i}-{v}", f"c{j}-{v}", f"b{i//3}{j//3}-{v}")
            if any(t in seen for t in tags):
                return False
            seen.update(tags)
    return True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Single Number (LeetCode 136, Easy)',
      text: '<strong>Problem:</strong> Every element appears twice except one; find that single one.<br/><strong>Key idea (set):</strong> Add on first sight, remove on second; the only remaining element is the answer. (XOR of all elements is the classic O(1)-space solution — mention both.)<br/><strong>Complexity:</strong> Time O(n), Space O(n) for the set (O(1) with XOR).',
      example: {
        title: 'Python Solution',
        code: `def single_number(nums):
    seen = set()
    for x in nums:
        if x in seen:
            seen.remove(x)
        else:
            seen.add(x)
    return seen.pop()
    # XOR alternative: reduce(lambda a, b: a ^ b, nums)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Jewels and Stones (LeetCode 771, Easy)',
      text: '<strong>Problem:</strong> Jewels is a string of jewel types; stones is what you have. How many of your stones are jewels?<br/><strong>Key idea:</strong> Put jewel characters in a set; count stones that appear in it. Turning jewels into a set makes each stone check O(1).<br/><strong>Complexity:</strong> Time O(|J| + |S|), Space O(|J|).',
      example: {
        title: 'Python Solution',
        code: `def num_jewels_in_stones(jewels, stones):
    jset = set(jewels)
    return sum(s in jset for s in stones)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Find All Numbers Disappeared (LeetCode 448, Easy)',
      text: '<strong>Problem:</strong> Array of n integers where each is in [1, n]; some appear twice and others are missing. Return all missing numbers.<br/><strong>Key idea (set):</strong> Put all array values in a set; collect every k in 1..n that is not present. (In-place negation of indices is the O(1)-space follow-up.)<br/><strong>Complexity:</strong> Time O(n), Space O(n) for the set.',
      example: {
        title: 'Python Solution',
        code: `def find_disappeared_numbers(nums):
    present = set(nums)
    return [k for k in range(1, len(nums) + 1) if k not in present]`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
