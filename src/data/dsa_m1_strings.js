// DSA Module 1: Strings topic (split from arrays-strings)
export const stringsTopic = {
  title: 'Strings',
  subtitle: 'Immutable character sequences — patterns over pointers',
  sections: [
    // A — What is a String?
    {
      heading: 'What is a String?',
      text: 'A string is a sequence of characters stored as an ordered, indexable collection. Conceptually it behaves like an array of characters: the first character is at index 0, the last at index length - 1, and any character can be read directly by its position. What makes strings special in Python and Java is that they are immutable — once created, the characters of a string object can never be changed in place.',
      list: [
        '<strong>Sequence of characters:</strong> A string is an ordered collection where position matters — "abc" and "cab" contain the same characters but are different strings.',
        '<strong>Immutable in Python and Java:</strong> There is no operation that modifies a string in place. Writing <code>s[0] = \'x\'</code> raises an error in Python and is impossible in Java. Every "modification" — concatenation, replacement, case change — builds and returns a brand-new string object.',
        '<strong>What immutability means practically:</strong> Reading is cheap and safe (you can share a string without anyone mutating it), but editing is expensive because each edit copies. This single fact drives almost every string algorithm pattern: you build a new result rather than mutating the input.',
        '<strong>Strings as character arrays for indexing:</strong> Like arrays, strings support O(1) index access — <code>s[i]</code> jumps straight to the i-th character via offset arithmetic. Python also supports negative indices (<code>s[-1]</code> is the last character) and rich slicing (<code>s[1:4]</code>, <code>s[::-1]</code>).',
        '<strong>Unicode / encoding note:</strong> A Java <code>String</code> is a sequence of UTF-16 code units, so characters outside the Basic Multilingual Plane (like many emoji) occupy two <code>char</code> slots and <code>s.length()</code> counts code units, not visible characters. A Python 3 <code>str</code> is a sequence of Unicode code points, so <code>len(s)</code> counts characters as you would expect. For ASCII interview inputs the two behave identically.'
      ]
    },
    // B — String Anatomy
    {
      heading: 'String Anatomy',
      text: 'Under the hood, a string is a contiguous block of characters with an integer index over each slot. Reading <code>s[i]</code> is O(1) because the runtime computes the address (or slot offset) of index i directly — exactly like array access. But because the string is immutable, any operation that "changes" the string must allocate a new block of characters and copy the relevant content into it. Replacing one character in a string of length n costs O(n): a brand-new string is created with that one slot different.',
      diagram: {
        caption: 'The string "hello" as an indexed character sequence',
        chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C0 fill:#3498db,color:#fff
    style C4 fill:#2ecc71,color:#fff`
      }
    },
    // C — Immutability & Performance
    {
      heading: 'Immutability & Performance',
      content: [
        '<p>The most common string performance bug is the concatenation loop trap. Writing <code>s = s + c</code> inside a loop allocates a brand-new string of length len(s) + 1 on every iteration. After n iterations the total characters allocated are 1 + 2 + ... + n = O(n²) — a loop that looks linear is actually quadratic.</p>',
        '<p>The fix is to collect the pieces and join them once. In Python, append each piece to a list and finish with <code>"".join(parts)</code> — a single allocation of the final size. In Java, use a <code>StringBuilder</code>, which is a <em>mutable</em> character buffer: <code>append()</code> is O(1) amortized, and one final <code>toString()</code> produces the immutable result.</p>',
        '<p>Concatenation with <code>+</code> is perfectly fine when the number of pieces is small and fixed — building a log line from three values, or joining a first and last name. The trap only bites when the number of concatenations grows with the input size, because then the repeated copying grows quadratically.</p>'
      ],
      note: 'Rule of thumb: concatenating a fixed number of strings — use +. Concatenating inside a loop whose trip count depends on n — use join (Python) or StringBuilder (Java).'
    },
    {
      text: 'Code:',
      code: `# WRONG: a new string is allocated on every iteration.
# Total characters copied = 1 + 2 + ... + n  ->  O(n^2)
def build_slow(chars):
    result = ""
    for ch in chars:
        result = result + ch   # copies everything so far, plus ch
    return result

# RIGHT: collect pieces in a list, join exactly once.
# One allocation of the final length  ->  O(n) total
def build_fast(chars):
    parts = []
    for ch in chars:
        parts.append(ch)       # list append is O(1) amortized
    return "".join(parts)      # single final copy`,
      language: 'python'
    },
    // D — Advantages
    {
      heading: 'Advantages',
      text: 'Strings are the workhorse of everyday programming, and their design trades mutability for safety and convenience.',
      list: [
        '<strong>O(1) index access:</strong> Reading the character at any position is constant time, just like array access — no traversal needed.',
        '<strong>Rich built-in operations:</strong> Search, split, replace, trim, case conversion, and formatting are built into the standard library of every mainstream language, so most text tasks are one call away.',
        '<strong>Expressive slicing (Python):</strong> <code>s[1:4]</code>, <code>s[:3]</code>, <code>s[::-1]</code>, and negative indices make substring extraction and reversal one-liners instead of hand-written loops.',
        '<strong>Hashable because immutable:</strong> Immutable strings can be used as dictionary keys and set members in Python, and as keys in a Java <code>HashMap</code>. Their hash code is computed once and safely cached — this is what makes counting patterns and anagram grouping so easy.',
        '<strong>Thread-safe by immutability:</strong> A string can be shared freely across threads with no locks or defensive copies, because no thread can ever change what another thread sees.',
        '<strong>Safe to pass around:</strong> Functions can receive a string and never accidentally corrupt the caller\'s data — aliasing is harmless when nothing can be mutated.'
      ]
    },
    // E — Disadvantages
    {
      heading: 'Disadvantages',
      text: 'The same immutability that makes strings safe makes editing them expensive, and several common operations hide surprising costs.',
      list: [
        '<strong>Every edit allocates:</strong> Replacing, inserting, or deleting even one character creates a whole new string — an O(n) copy for what feels like an O(1) change.',
        '<strong>The concat loop trap:</strong> Building a string with <code>s = s + c</code> in a loop costs O(n²) total time and allocations; forgetting join/StringBuilder is a classic performance bug.',
        '<strong>Substring operations hide O(n) copies:</strong> Slicing or taking a substring copies the characters into a new string — extracting many substrings in a loop can quietly become quadratic.',
        '<strong>Comparison is O(n), not O(1):</strong> Checking <code>a == b</code> compares characters one by one; the cost is proportional to the shorter string. Comparing long strings repeatedly adds up fast.',
        '<strong>Memory cost of many small strings:</strong> Every string object carries overhead (length, cached hash, object header), so millions of short strings — tokens, keys, log fields — consume far more memory than the raw characters suggest.',
        '<strong>No in-place algorithms:</strong> Techniques like in-place reversal are impossible on the string itself; you must copy into a mutable structure (a Python list or Java char[]) first, then build a new string back.'
      ]
    },
    // F — String Operations
    {
      heading: 'String Operations',
      text: 'The eight core operations below cover nearly everything interviews ask you to do with strings. Each one shows the most efficient implementation, a Mermaid visual, and code.'
    },
    {
      heading: 'Operation 1: Traverse / Print',
      text: '<strong>What it does:</strong> Visit every character of the string from left to right, usually with its index.<br/><strong>Best efficiency:</strong> A single loop is O(n) time and O(1) extra space — every character must be read at least once, so this is optimal.',
      diagram: {
        caption: 'Traversing "hello" left to right',
        chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C0 fill:#2ecc71,color:#fff
    style C4 fill:#e74c3c,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def traverse(s):
    for i, ch in enumerate(s):
        print(i, ch)

# Time: O(n), Space: O(1) extra`,
      language: 'python'
    },
    {
      heading: 'Operation 2: Access Character by Index',
      text: '<strong>What it does:</strong> Read the character at a given position, e.g. <code>s[2]</code>.<br/><strong>Best efficiency:</strong> O(1) — the runtime jumps directly to the slot via offset arithmetic, exactly like array indexing. Always bounds-check first.',
      diagram: {
        caption: 'Accessing the character at index 2',
        chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C2 fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def char_at(s, i):
    if i < 0 or i >= len(s):
        return None          # out of bounds
    return s[i]              # direct O(1) slot access

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 3: Concatenate (join)',
      text: '<strong>What it does:</strong> Combine several strings into one, e.g. joining "he" and "llo" into "hello".<br/><strong>Best efficiency:</strong> <code>"".join(parts)</code> allocates the result once — O(total length). Never concatenate with + inside a loop over n pieces (O(n²)).',
      diagram: {
        caption: 'Joining "he" and "llo" into "hello"',
        chart: `flowchart LR
    A0[0:h] --> A1[1:e]
    A1 -. join .-> B0[2:l]
    B0[2:l] --> B1[3:l] --> B2[4:o]
    style B0 fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def concat(parts):
    return "".join(parts)   # one allocation of the final length

# join over k parts of total length n: Time O(n), Space O(n)
# n separate "+" operations in a loop:   Time O(n^2)`,
      language: 'python'
    },
    {
      heading: 'Operation 4: Slice / Substring',
      text: '<strong>What it does:</strong> Extract a contiguous piece of the string, e.g. <code>s[1:4]</code> gives "ell" from "hello".<br/><strong>Best efficiency:</strong> O(k) time and space for a slice of length k — the characters must be copied into a new immutable string. There is no O(1) "view" of a substring in Python or Java.',
      diagram: {
        caption: 'Slicing s[1:4] out of "hello"',
        chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C1 fill:#f1c40f,color:#000
    style C2 fill:#f1c40f,color:#000
    style C3 fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def substring(s, start, end):
    return s[start:end]      # copies characters start..end-1

# s[::-1] is also a slice -> a reversed copy
# Slice of length k: Time O(k), Space O(k)`,
      language: 'python'
    },
    {
      heading: 'Operation 5: Search Substring (find / contains)',
      text: '<strong>What it does:</strong> Locate a pattern inside a larger string — <code>s.find("ll")</code> returns the index of the first match, or -1.<br/><strong>Best efficiency:</strong> The naive check-every-position approach is O(n·m); classic algorithms like KMP or Rabin-Karp bring it down to roughly O(n + m). Built-in <code>find</code>/<code>contains</code> use optimized variants, so prefer them over hand-rolled loops.',
      diagram: {
        caption: 'Finding "ll" inside "hello"',
        chart: `flowchart LR
    C0[0:h] --> C1[1:e] --> C2[2:l] --> C3[3:l] --> C4[4:o]
    style C2 fill:#f1c40f,color:#000
    style C3 fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def find_substring(s, pattern):
    return s.find(pattern)   # first match index, or -1

def contains(s, pattern):
    return pattern in s      # boolean version

# Built-in find: ~O(n + m) in practice
# Naive position-by-position scan: O(n * m) worst case`,
      language: 'python'
    },
    {
      heading: 'Operation 6: Split & Join',
      text: '<strong>What it does:</strong> <code>split</code> breaks a string into a list of pieces around a separator; <code>join</code> is its inverse, stitching a list of pieces back into one string.<br/><strong>Best efficiency:</strong> Both are O(n) — each character is examined (split) or copied (join) exactly once.',
      diagram: {
        caption: 'Splitting "a-b-c" on the dashes',
        chart: `flowchart LR
    C0[0:a] --> S1[1:dash] --> C1[2:b] --> S2[3:dash] --> C2[4:c]
    style S1 fill:#e74c3c,color:#fff
    style S2 fill:#e74c3c,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def split_csv(line):
    return line.split(",")        # list of fields

def join_words(words):
    return " ".join(words)        # one string, space-separated

# Both: Time O(n), Space O(n) for the produced pieces`,
      language: 'python'
    },
    {
      heading: 'Operation 7: Reverse a String',
      text: '<strong>What it does:</strong> Produce a new string with the characters in the opposite order — "hello" becomes "olleh".<br/><strong>Best efficiency:</strong> O(n) time and O(n) space. True in-place reversal is impossible on an immutable string, so the result is always a new allocation.',
      diagram: {
        caption: 'Reversing "hello" into "olleh"',
        chart: `flowchart LR
    subgraph Before[Before]
      direction LR
      B0[0:h] --> B1[1:e] --> B2[2:l] --> B3[3:l] --> B4[4:o]
    end
    subgraph After[After]
      direction LR
      A0[0:o] --> A1[1:l] --> A2[2:l] --> A3[3:e] --> A4[4:h]
    end
    Before ~~~ After`
      }
    },
    {
      heading: 'How string reversal works',
      text: '<p>Because strings are immutable, you never "flip" a string in place — you build a new reversed string. Python gives you two idiomatic ways to do it.</p><p><strong>Way 1 — slicing:</strong> <code>s[::-1]</code> means "the whole string, step -1", so Python walks from the last character back to the first and copies them into a new string. One line, O(n).</p><p><strong>Way 2 — two pointers on a mutable list:</strong> convert the string to a list of characters (which <em>is</em> mutable), place one pointer at each end, swap the pair, and move both pointers inward until they meet. Then <code>"".join(chars)</code> builds the result. This is the version interviewers want to see, because it generalizes to arrays and linked problems.</p><p><strong>Trace on "hello":</strong> swap h and o → "oellh"; swap e and l → "olleh"; the pointers meet at the middle l and stop. Result: "olleh" — one new string, n/2 swaps.</p>'
    },
    {
      text: 'Code:',
      code: `def reverse_slice(s):
    return s[::-1]                # idiomatic Python one-liner

def reverse_two_pointer(s):
    chars = list(s)               # mutable copy
    left, right = 0, len(chars) - 1
    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1
    return "".join(chars)         # build the new immutable string

# Both: Time O(n), Space O(n) for the new string`,
      language: 'python'
    },
    {
      heading: 'Operation 8: Compare & Case',
      text: '<strong>What it does:</strong> Check two strings for equality or order (<code>a == b</code>, <code>a &lt; b</code>), and normalize case for case-insensitive logic.<br/><strong>Best efficiency:</strong> Comparison is O(k) where k is the length of the shorter string — characters are checked one by one until a difference is found. Case folding is O(n) because it builds a new string.',
      diagram: {
        caption: 'Comparing "cat" with "car" — first difference at index 2',
        chart: `flowchart LR
    C0[0:c] --> C1[1:a] --> C2[2:t]
    D0[0:c] --> D1[1:a] --> D2[2:r]
    style C2 fill:#f1c40f,color:#000
    style D2 fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def equals_ignore_case(a, b):
    return a.casefold() == b.casefold()   # Unicode-aware case fold

def is_before(a, b):
    return a < b          # lexicographic (dictionary) order

# Comparison: Time O(k) for shorter length k, Space O(1)
# casefold(): Time O(n), Space O(n) — it builds a new string`,
      language: 'python'
    },
    // G — Complete String Algorithms (tabs)
    {
      heading: 'Complete String Algorithms',
      text: 'Here is a complete, tested collection of the six core string algorithms from this page, with a driver demo at the bottom. Switch between the Python and Java tabs — both versions implement the identical algorithms and print the identical results.'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete String Algorithms in Python',
        code: `def reverse_string(s):
    return s[::-1]


def is_palindrome(s):
    """True if s reads the same forwards and backwards,
    ignoring non-alphanumeric characters and case."""
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True


def is_anagram(a, b):
    """True if a and b contain the same character counts."""
    if len(a) != len(b):
        return False
    counts = {}
    for ch in a:
        counts[ch] = counts.get(ch, 0) + 1
    for ch in b:
        counts[ch] = counts.get(ch, 0) - 1
        if counts[ch] < 0:
            return False
    return True


def longest_unique_substring(s):
    """Length of the longest substring with no repeating character.
    Sliding window: last_seen maps each char to its most recent index."""
    last_seen = {}
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1     # shrink window past the duplicate
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best


def longest_common_prefix(strs):
    """Longest prefix shared by every string. Vertical scanning:
    compare column by column across all strings."""
    if not strs:
        return ""
    for i, ch in enumerate(strs[0]):
        for word in strs[1:]:
            if i == len(word) or word[i] != ch:
                return strs[0][:i]
    return strs[0]


def group_anagrams(words):
    """Group words that are anagrams of each other.
    The sorted characters of a word are the hash-map key for its group."""
    groups = {}
    for word in words:
        key = "".join(sorted(word))
        groups.setdefault(key, []).append(word)
    return list(groups.values())


# Driver demo
print(reverse_string("hello"))
# olleh
print(is_palindrome("A man, a plan, a canal: Panama"))
# True
print(is_anagram("listen", "silent"))
# True
print(longest_unique_substring("abcabcbb"))
# 3
print(longest_common_prefix(["flower", "flow", "flight"]))
# fl
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete String Algorithms in Java',
        code: `import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class StringAlgorithms {

    public static String reverseString(String s) {
        return new StringBuilder(s).reverse().toString();
    }

    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    public static boolean isAnagram(String a, String b) {
        if (a.length() != b.length()) return false;
        int[] counts = new int[26];
        for (char c : a.toCharArray()) counts[c - 'a']++;
        for (char c : b.toCharArray()) {
            counts[c - 'a']--;
            if (counts[c - 'a'] < 0) return false;
        }
        return true;
    }

    public static int longestUniqueSubstring(String s) {
        Map<Character, Integer> lastSeen = new HashMap<>();
        int left = 0, best = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (lastSeen.containsKey(c) && lastSeen.get(c) >= left) {
                left = lastSeen.get(c) + 1;   // shrink window past the duplicate
            }
            lastSeen.put(c, right);
            best = Math.max(best, right - left + 1);
        }
        return best;
    }

    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        return strs[0];
    }

    public static List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> groups = new LinkedHashMap<>();   // insertion order, like a Python dict
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);   // sorted chars = group key
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }

    public static void main(String[] args) {
        System.out.println(reverseString("hello"));
        // olleh
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
        // true
        System.out.println(isAnagram("listen", "silent"));
        // true
        System.out.println(longestUniqueSubstring("abcabcbb"));
        // 3
        System.out.println(longestCommonPrefix(new String[]{"flower", "flow", "flight"}));
        // fl
        System.out.println(groupAnagrams(new String[]{"eat", "tea", "tan", "ate", "nat", "bat"}));
        // [[eat, tea, ate], [tan, nat], [bat]]
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    // H — Complexity Summary
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of string operation complexities. The single most important rule: <strong>strings are immutable, so every operation that produces a different string pays for a new allocation and a copy</strong> — reading is cheap, editing is not.',
      table: {
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Access by index', 'O(1)', 'O(1)', 'Direct offset arithmetic into the character array, exactly like array indexing — the one "free" operation strings share with arrays.'],
          ['Traverse / Print', 'O(n)', 'O(1)', 'Every character must be visited once, so linear time is optimal; the loop itself needs only a counter. Printing writes O(n) of output but uses no extra working space.'],
          ['Concatenate', 'O(n) per op', 'O(n)', 'Each + allocates a new string and copies both operands. Doing it in a loop over n pieces is O(n^2) total; collecting pieces and calling join once (or StringBuilder in Java) is O(n) total.'],
          ['Slice / Substring', 'O(k)', 'O(k)', 'Python slicing and Java substring both copy the k extracted characters into a new string — there is no zero-copy "view", so extracting many substrings in a loop can quietly become O(n^2).'],
          ['Search substring', 'O(n·m) naive', 'O(1)', 'Checking the pattern at every position is O(n·m) worst case; KMP or Rabin-Karp bring it to about O(n + m). Built-in find/contains use optimized variants — prefer them over hand-rolled scans.'],
          ['Split / Join', 'O(n)', 'O(n)', 'Split scans each character once and emits the pieces; join copies each piece once into the final string. Both are linear in the total input size.'],
          ['Reverse', 'O(n)', 'O(n)', 'Immutability forbids in-place reversal: every approach (slicing, two-pointer swap on a char list, StringBuilder.reverse) ends by allocating a new string of length n.'],
          ['Compare', 'O(n)', 'O(1)', 'Equality and ordering compare characters pairwise until a mismatch — worst case O(n) when strings are equal. Never assume string == is constant time.']
        ]
      },
      note: 'Interview tip: because strings are immutable, almost every string answer builds a NEW string — always state the O(n) output space explicitly and interviewers will trust the rest of your analysis. Two patterns cover most string questions: sliding window for substring-constraint problems ("longest substring without..."), and a hash map of character counts for anagram problems. When you hear "compare words up to rearrangement", reach for counts or a sorted key, not nested loops.'
    },
    // I — Applications
    {
      heading: 'Real-World Applications',
      text: 'Strings are the most-used data type in real software — most of what computers move around is text. Each example below shows where the string model fits, and where systems deliberately step around its limits (usually the O(n) copy cost of immutability).',
      list: [
        '<strong>Text editors and IDEs:</strong> The document you type into is conceptually one giant string — but editors do not store it as one, because inserting a character at the top of a 100,000-line file would copy everything below it (the O(n) immutability cost on every keystroke). Instead they use gap buffers (Emacs) or ropes (VS Code) — tree structures of small string chunks — so edits touch only the chunk under the cursor while the screen still renders one seamless string.',
        '<strong>URLs and web routing:</strong> Every request that reaches a web server arrives as a string like "/users/42/orders?page=2". The router splits it on "/", matches path segments against patterns, and parses the query string into key-value pairs — classic split-and-search string work. Frameworks from Django to Express are essentially fast string matchers layered on top of this.',
        '<strong>Compilers and interpreters:</strong> The first phase of every compiler, the lexer, reads your source code as one long string and scans it character by character, grouping runs of characters into tokens (keywords, identifiers, numbers). Lexers are a direct application of index access and substring extraction, and their speed depends on doing it in a single linear pass.',
        '<strong>DNA sequence analysis:</strong> A genome is stored as a string over the alphabet {A, C, G, T} — the human genome is about 3 billion characters. Bioinformatics is string algorithms at scale: substring search finds genes, longest-common-substring variants measure similarity between sequences, and read-mapping aligns millions of short strings against the reference genome.',
        '<strong>Search engines:</strong> When Google indexes a page, it first tokenizes the text — splitting the document string into words, normalizing case, stripping punctuation. Each token becomes a key in the inverted index (word → list of documents), which works precisely because immutable strings are hashable and make reliable hash-map keys. Your query is matched against those same string keys.',
        '<strong>Network protocols:</strong> HTTP is a text protocol — every request and response header is lines of strings like "Content-Type: application/json". Servers split each line on ":", trim whitespace, and compare header names case-insensitively. Parsing happens on every request, so protocol libraries lean heavily on fast substring search and comparison.',
        '<strong>Internationalization and localization:</strong> Apps store every user-facing message as a string keyed by locale, so the same screen renders "Hello" or "Bonjour" by swapping one string table. This is also where the Unicode model matters: case folding, sorting, and even length differ across languages, and bugs here (Turkish dotted-i, emoji counting) come directly from how strings encode characters.'
      ],
      note: 'The common thread: strings are the universal format for data in motion and data meant for humans — URLs, source code, genomes, HTTP, logs. Systems that only read text use plain strings directly; systems that must edit large text at interactive speed (editors) replace the one-giant-string model with chunk structures precisely to escape the O(n) copy cost of immutability.'
    },
    // J — Interview Practice Questions (each an accordion, default closed)
    {
      heading: 'Top Interview Questions on Strings',
      text: 'The eight most frequently asked string interview questions are below — each in its own collapsible card with the key idea, a solved answer, and its complexity. Four recurring patterns solve nearly all of them: <strong>two pointers from both ends</strong> (reverse, palindrome), <strong>sliding window</strong> (substring constraints), <strong>character-count hash maps</strong> (anagrams), and <strong>expand-around-center</strong> (palindromic substrings).',
      note: 'Pattern cheat sheet: comparing a string with its reverse or checking symmetry — two pointers from both ends. Any "longest/shortest substring where..." — sliding window with a last-seen map. "Same letters rearranged" — count characters or sort into a hash-map key. "Longest palindromic..." — expand around each of the 2n - 1 centers (n odd-length, n - 1 even-length). Nested brackets — a stack of expected closers.'
    },
    {
      heading: 'Practice Question 1: Reverse String (LeetCode 344, Easy)',
      text: '<strong>Problem:</strong> Reverse a character array in place — modify the input array directly, with O(1) extra memory.<br/><strong>Key idea:</strong> Two pointers from both ends. Place <code>left</code> at index 0 and <code>right</code> at the last index, swap the two characters, then move both pointers one step inward. When the pointers meet or cross, every pair has been swapped exactly once — n/2 swaps total. Because the input here is a mutable array (unlike an immutable string), no extra copy is needed.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def reverse_string(s):
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]   # swap the outer pair
        left += 1
        right -= 1                              # pointers move inward`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Valid Palindrome (LeetCode 125, Easy)',
      text: '<strong>Problem:</strong> Return true if a string reads the same forward and backward, considering only alphanumeric characters and ignoring case. "A man, a plan, a canal: Panama" is a palindrome.<br/><strong>Key idea:</strong> Two pointers from both ends, with skipping. Before comparing, advance each pointer past any non-alphanumeric character (spaces, punctuation). Then compare the two letters case-folded; a mismatch ends it immediately. Each pointer moves only inward, so the whole check is one pass with no cleaned-up copy of the string.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1            # skip non-alphanumeric from the left
        while left < right and not s[right].isalnum():
            right -= 1           # skip non-alphanumeric from the right
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Valid Anagram (LeetCode 242, Easy)',
      text: '<strong>Problem:</strong> Return true if string t is an anagram of string s — the same letters with the same multiplicities, rearranged. "anagram" and "nagaram" are anagrams.<br/><strong>Key idea:</strong> Anagrams have identical character counts. With lowercase a-z input, a fixed array of 26 counters is enough: increment for each character of s, decrement for each character of t, and fail the moment any count goes negative (which also catches length mismatches mid-stream). For general Unicode input, swap the fixed array for a hash map keyed by character. Sorting both strings also works but costs O(n log n).<br/><strong>Complexity:</strong> Time O(n), Space O(1) — the 26-slot array is constant.',
      example: {
        title: 'Python Solution',
        code: `def is_anagram(s, t):
    if len(s) != len(t):
        return False
    counts = [0] * 26                    # one slot per lowercase letter
    for ch in s:
        counts[ord(ch) - ord('a')] += 1
    for ch in t:
        counts[ord(ch) - ord('a')] -= 1
        if counts[ord(ch) - ord('a')] < 0:
            return False                 # t has more of this char than s
    return True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Longest Substring Without Repeating Characters (LeetCode 3, Medium)',
      text: '<strong>Problem:</strong> Given a string, return the length of the longest substring in which no character appears twice. For "abcabcbb" the answer is 3 ("abc").<br/><strong>Key idea:</strong> Sliding window with a last-seen map. Expand <code>right</code> one character at a time, recording the most recent index of every character. When the incoming character was already seen <em>inside the current window</em> (its last index is >= <code>left</code>), jump <code>left</code> to one past that old occurrence — the duplicate is now excluded. Each character enters and leaves the window at most once, so the two pointers together do O(n) work; the map makes the duplicate check O(1).<br/><strong>Complexity:</strong> Time O(n), Space O(min(n, alphabet)).',
      example: {
        title: 'Python Solution',
        code: `def length_of_longest_substring(s):
    last_seen = {}          # char -> most recent index
    left = 0
    best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1     # shrink window past the duplicate
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Longest Common Prefix (LeetCode 14, Easy)',
      text: '<strong>Problem:</strong> Find the longest prefix shared by every string in an array. For ["flower", "flow", "flight"] the answer is "fl"; if there is none, return "".<br/><strong>Key idea:</strong> Vertical scanning. Take the first string as the candidate and compare it column by column against every other string. The first column where any string differs — or where any string runs out of characters — is exactly where the common prefix ends, so slice the candidate there. The running time is bounded by the total characters actually compared, and ties like ["flow", "flow"] naturally return the whole word.<br/><strong>Complexity:</strong> Time O(S) where S is the sum of all characters (worst case all strings are identical), Space O(1) extra.',
      example: {
        title: 'Python Solution',
        code: `def longest_common_prefix(strs):
    if not strs:
        return ""
    for i, ch in enumerate(strs[0]):
        for word in strs[1:]:
            if i == len(word) or word[i] != ch:
                return strs[0][:i]       # column i breaks the prefix
    return strs[0]                       # every column matched`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Group Anagrams (LeetCode 49, Medium)',
      text: '<strong>Problem:</strong> Group an array of strings so that words that are anagrams of each other land in the same group. ["eat", "tea", "tan", "ate", "nat", "bat"] groups into ["eat","tea","ate"], ["tan","nat"], ["bat"].<br/><strong>Key idea:</strong> Anagrams are identical when sorted: "eat", "tea", and "ate" all sort to "aet". Use that sorted string as a hash-map key and append every word to its key\'s bucket — one pass through the input, one sort per word. This works because immutable strings are hashable and can serve as map keys directly. A faster key (a 26-count tuple) avoids the per-word sort when n is large.<br/><strong>Complexity:</strong> Time O(n · k log k) for n words of max length k (the per-word sort), Space O(n · k) for the groups.',
      example: {
        title: 'Python Solution',
        code: `def group_anagrams(strs):
    groups = {}
    for word in strs:
        key = "".join(sorted(word))      # anagrams share the same sorted key
        groups.setdefault(key, []).append(word)
    return list(groups.values())`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Longest Palindromic Substring (LeetCode 5, Medium)',
      text: '<strong>Problem:</strong> Return the longest substring of s that is a palindrome. For "babad" the answer is "bab" (or "aba"); for "cbbd" it is "bb".<br/><strong>Key idea:</strong> Expand around center. Every palindrome is mirrored around a center, and a string of length n has 2n - 1 possible centers: n single characters (odd-length palindromes like "racecar") and n - 1 gaps between characters (even-length ones like "abba"). From each center, walk outward while the two mirrored characters match; the last matching pair bounds the longest palindrome at that center. Track the best window across all centers — 2n - 1 expansions of at most n steps each.<br/><strong>Complexity:</strong> Time O(n²), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def longest_palindrome(s):
    if len(s) < 2:
        return s
    start = end = 0

    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1       # bounds of the palindrome found

    for i in range(len(s)):
        for lo, hi in (expand(i, i), expand(i, i + 1)):  # odd and even center
            if hi - lo > end - start:
                start, end = lo, hi
    return s[start:end + 1]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Valid Parentheses (LeetCode 20, Easy)',
      text: '<strong>Problem:</strong> Given a string of brackets ()[]{}, return true if every opening bracket is closed by the same type in the correct order. "()[]{}" is valid; "(]" and "([)]" are not.<br/><strong>Key idea:</strong> A stack of expected closers — the most recently opened bracket must be closed first, which is exactly LIFO order. Push every opening bracket; on each closing bracket, pop and require the matching type — a mismatch or an empty stack means invalid. At the end the stack must be empty, or some opener was never closed. This is why it fails on "([)]": the "]" arrives while "(" is still waiting for its ")".<br/><strong>Complexity:</strong> Time O(n), Space O(n) worst case (all openers).',
      example: {
        title: 'Python Solution',
        code: `def is_valid(s):
    closers = {')': '(', ']': '[', '}': '{'}
    stack = []
    for ch in s:
        if ch in '([{':
            stack.append(ch)             # remember the opener
        else:
            if not stack or stack.pop() != closers[ch]:
                return False             # wrong closer, or closer with no opener
    return not stack                     # every opener must be closed`,
        language: 'python',
        type: 'code'
      }
    }
  ]
}
