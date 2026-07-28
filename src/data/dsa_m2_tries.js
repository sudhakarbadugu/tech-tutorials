// DSA Module 2: Tries / Prefix Trees (Linked-List-style tutorial)
export const triesTopic = {
  title: 'Tries (Prefix Trees)',
  subtitle: 'Character-by-character trees — O(L) prefix search for dictionaries and autocomplete',
  sections: [
    {
      heading: 'What is a Trie?',
      text: 'A trie (prefix tree) is a tree where each edge is labeled with a character, and each path from the root represents a string prefix. Words that share a prefix share a path — making tries ideal for autocomplete, spell-check dictionaries, IP routing (binary tries), and "search word in board" with a dictionary.',
      list: [
        '<strong>Root:</strong> Empty prefix; every insertion/search starts here.',
        '<strong>Edge / child map:</strong> From a node, character → next node (array of 26 for a–z, or a hashmap).',
        '<strong>End marker:</strong> A boolean (or count) on a node saying "a complete word ends here".',
        '<strong>Prefix sharing:</strong> "app", "apple", "apply" share a-p-p before branching.',
        '<strong>Time:</strong> Insert/search/startsWith are O(L) in word length L — independent of how many words are stored (for fixed alphabet).'
      ]
    },
    {
      heading: 'Components of a Trie Node',
      list: [
        '<strong>children:</strong> Map or fixed array to at most alphabet-size children.',
        '<strong>is_end / isWord:</strong> True if some inserted word ends at this node.',
        '<strong>Optional count:</strong> How many words pass through / end here — useful for delete and frequency.',
        '<strong>Optional parent / char:</strong> Helpful if you need to delete and prune dead branches.',
        '<strong>No "val" for the whole word:</strong> The word is the path labels, not a field on the leaf alone.'
      ]
    },
    {
      heading: 'Node Structure',
      diagram: {
        caption: 'TrieNode: children map + end flag',
        chart: `flowchart LR
    subgraph N[TrieNode]
      C["children: char → node"]
      E["is_end: bool"]
    end
    C --> A["'a'"]
    C --> B["'b'"]
    style E fill:#e67e22,color:#fff`
      }
    },
    {
      example: {
        title: 'TrieNode skeleton',
        code: `class TrieNode:
    def __init__(self):
        self.children = {}   # char -> TrieNode
        self.is_end = False`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Example Trie',
      text: 'Insert "app", "apple", "bat". Shared prefixes collapse.',
      diagram: {
        caption: 'Paths spell the words; * marks is_end',
        chart: `flowchart TD
    R["root"] --> A["a"]
    R --> B["b"]
    A --> P1["p"]
    P1 --> P2["p * app"]
    P2 --> L["l"]
    L --> E["e * apple"]
    B --> A2["a"]
    A2 --> T["t * bat"]
    style P2 fill:#2ecc71,color:#fff
    style E fill:#2ecc71,color:#fff
    style T fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'How Insert and Search Work',
      text: 'Insert walks character by character, creating missing nodes, then sets is_end. Search walks the same path; fails if a link is missing; success requires is_end at the final node. startsWith is search without the is_end check.'
    },
    {
      heading: 'Operation 1: Insert',
      text: '<strong>What it does:</strong> Add a word to the dictionary.<br/><strong>Best efficiency:</strong> O(L) time, O(L) new nodes worst case if no shared prefix.',
      diagram: {
        caption: 'Insert "ace" creates a→c→e path',
        chart: `flowchart LR
    R["root"] --> A["a"] --> C["c"] --> E["e is_end"]
    style E fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Operation 2: Search Word',
      text: '<strong>What it does:</strong> Return true only if the exact word was inserted.<br/><strong>Best efficiency:</strong> O(L). Path exists AND final is_end is true.'
    },
    {
      heading: 'Operation 3: StartsWith (Prefix)',
      text: '<strong>What it does:</strong> Return true if any word has this prefix.<br/><strong>Best efficiency:</strong> O(L). Path exists; is_end irrelevant.'
    },
    {
      heading: 'Operation 4: Delete (optional)',
      text: '<strong>What it does:</strong> Remove a word; prune nodes that are no longer on any word path.<br/><strong>Careful:</strong> Do not remove nodes that are prefixes of other words (is_end or children remain).'
    },
    {
      heading: 'Trie vs HashSet vs BST',
      table: {
        headers: ['Structure', 'Exact word lookup', 'Prefix queries', 'Ordered scan'],
        rows: [
          ['HashSet', 'O(L) hash', 'Poor (scan all)', 'No'],
          ['BST / TreeMap of strings', 'O(L log n)', 'Possible with range', 'Yes'],
          ['Trie', 'O(L)', 'O(L) natural', 'DFS lex order'],
          ['Sorted list + binary search', 'O(L log n)', 'Binary search prefix', 'Yes']
        ]
      }
    },
    {
      heading: 'Advantages',
      list: [
        '<strong>Prefix operations shine:</strong> Autocomplete, longest prefix match, typing suggestions.',
        '<strong>Predictable O(L) time</strong> independent of dictionary size (alphabet fixed).',
        '<strong>Shared storage</strong> for common prefixes — can beat storing full copies of each word.',
        '<strong>Lexicographic DFS</strong> can list words in sorted order by exploring children a→z.',
        '<strong>Board / Boggle search:</strong> Prune DFS early when path leaves the trie.'
      ]
    },
    {
      heading: 'Disadvantages',
      list: [
        '<strong>Memory hungry:</strong> Many small nodes and child arrays/maps; worse than a compact hash set for exact-only lookups.',
        '<strong>Poor cache locality</strong> vs contiguous string arrays.',
        '<strong>Alphabet size matters:</strong> Array[256] per node wastes space for sparse alphabets.',
        '<strong>Unicode:</strong> Character-based tries need careful codepoint / grapheme policy.',
        '<strong>Not ideal for edit distance search</strong> alone — need BK-trees or n-grams for fuzzy match.'
      ]
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Trie insert, search, startsWith, prefix collect',
        code: `from typing import List, Optional

class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True

    def _walk(self, prefix: str) -> Optional[TrieNode]:
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return None
            node = node.children[ch]
        return node

    def search(self, word: str) -> bool:
        node = self._walk(word)
        return bool(node and node.is_end)

    def startsWith(self, prefix: str) -> bool:
        return self._walk(prefix) is not None

    def words_with_prefix(self, prefix: str) -> List[str]:
        node = self._walk(prefix)
        if not node:
            return []
        out = []
        def dfs(n, path):
            if n.is_end:
                out.append(path)
            for ch in sorted(n.children):
                dfs(n.children[ch], path + ch)
        dfs(node, prefix)
        return out

t = Trie()
for w in ["app", "apple", "apply", "bat", "batch"]:
    t.insert(w)
print(t.search("app"), t.search("ap"))
print(t.startsWith("ap"), t.startsWith("z"))
print(t.words_with_prefix("app"))`,
        output: `True False
True False
['app', 'apple', 'apply']`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Trie with HashMap children',
        code: `import java.util.*;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEnd;
}

public class Trie {
    private final TrieNode root = new TrieNode();

    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node = node.children.computeIfAbsent(c, k -> new TrieNode());
        }
        node.isEnd = true;
    }

    private TrieNode walk(String s) {
        TrieNode node = root;
        for (char c : s.toCharArray()) {
            node = node.children.get(c);
            if (node == null) return null;
        }
        return node;
    }

    public boolean search(String word) {
        TrieNode n = walk(word);
        return n != null && n.isEnd;
    }

    public boolean startsWith(String prefix) {
        return walk(prefix) != null;
    }

    public static void main(String[] args) {
        Trie t = new Trie();
        t.insert("apple");
        System.out.println(t.search("apple"));
        System.out.println(t.search("app"));
        System.out.println(t.startsWith("app"));
    }
}`,
        output: `true
false
true`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      table: {
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Insert word length L', 'O(L)', 'O(L) new nodes worst', 'Shared prefixes reuse nodes'],
          ['Search / startsWith', 'O(L)', 'O(1)', 'Independent of #words n'],
          ['List words with prefix', 'O(L + output)', 'O(H)', 'DFS under prefix node'],
          ['Build from n words', 'O(total chars)', 'O(total nodes)', 'Often ≪ store-all-strings'],
          ['HashSet exact lookup', 'O(L)', 'O(total chars)', 'No prefix without scan']
        ]
      },
      note: 'Interview tip: say "time is O(length of the word), not O(n dictionary size)" — that is the main win over scanning a list.'
    },
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>Search without checking is_end</strong> — "app" prefix of "apple" is not a word unless inserted.',
        '<strong>Using list as children without map</strong> for large alphabets — prefer map or array[26] for a–z only.',
        '<strong>Deleting and breaking other words</strong> — clear is_end first; prune only childless non-end nodes.',
        '<strong>Mutating shared nodes incorrectly</strong> when tries are reused across queries.',
        '<strong>Case / locale:</strong> Normalize to lowercase if the problem is case-insensitive.'
      ],
      code: `# WRONG — treats any path as a word
def search_bad(self, word):
    return self._walk(word) is not None

# CORRECT
def search(self, word):
    node = self._walk(word)
    return node is not None and node.is_end`,
      language: 'python'
    },
    {
      heading: 'Real-World Applications',
      list: [
        '<strong>Autocomplete / search-as-you-type:</strong> Browser URL bar, IDE symbol search, mobile keyboards.',
        '<strong>Spell checkers:</strong> Dictionary membership + prefix-based suggestions.',
        '<strong>IP routing (binary trie):</strong> Longest prefix match on address bits.',
        '<strong>T9 / predictive text:</strong> Paths constrained by key sequences.',
        '<strong>Word games (Boggle, Scrabble AI):</strong> Prune board DFS when prefix dies in the trie.',
        '<strong>Antivirus / IDS signatures:</strong> Multi-pattern matching often uses Aho–Corasick (trie + failure links).'
      ]
    },
    {
      heading: 'Top Interview Questions on Tries',
      text: 'Eight problems. Implement the trie once; reuse the mental model for word search and design problems.',
      note: 'Design Add-and-Search Word (\'.\' wildcards) extends search with DFS on children. Word Search II = board DFS + trie pruning.'
    },
    {
      heading: 'Practice Question 1: Implement Trie (LeetCode 208, Medium)',
      text: '<strong>Problem:</strong> Implement insert, search, startsWith.<br/><strong>Key idea:</strong> Standard trie node with map/array children.<br/><strong>Complexity:</strong> O(L) per op.',
      example: {
        title: 'Python Solution',
        code: `class Trie:
    def __init__(self):
        self.root = {}
    def insert(self, word):
        n = self.root
        for c in word:
            n = n.setdefault(c, {})
        n['#'] = True  # end marker
    def search(self, word):
        n = self.root
        for c in word:
            if c not in n: return False
            n = n[c]
        return '#' in n
    def startsWith(self, prefix):
        n = self.root
        for c in prefix:
            if c not in n: return False
            n = n[c]
        return True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Design Add and Search Words (LeetCode 211, Medium)',
      text: '<strong>Problem:</strong> search supports \'.\' wildcard matching any letter.<br/><strong>Key idea:</strong> DFS: on \'.\' try all children; on letter follow one edge.<br/><strong>Complexity:</strong> O(26^L) worst; fine for interview constraints.',
      example: {
        title: 'Python Solution',
        code: `class WordDictionary:
    def __init__(self):
        self.root = {}
    def addWord(self, word):
        n = self.root
        for c in word:
            n = n.setdefault(c, {})
        n['#'] = True
    def search(self, word):
        def dfs(j, node):
            if j == len(word): return '#' in node
            c = word[j]
            if c == '.':
                return any(dfs(j+1, node[ch]) for ch in node if ch != '#')
            if c not in node: return False
            return dfs(j+1, node[c])
        return dfs(0, self.root)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Word Search II (LeetCode 212, Hard)',
      text: '<strong>Problem:</strong> Find all dictionary words on a board via adjacent cells.<br/><strong>Key idea:</strong> Build trie of words; DFS board while walking trie; prune when no child; mark visited.<br/><strong>Complexity:</strong> O(board cells · 4 · L) with heavy pruning.',
      example: {
        title: 'Python Solution (sketch)',
        code: `def findWords(board, words):
    trie = {}
    for w in words:
        n = trie
        for c in w: n = n.setdefault(c, {})
        n['$'] = w  # store word at end
    res, m, n = [], len(board), len(board[0])
    def dfs(i, j, node):
        ch = board[i][j]
        if ch not in node: return
        nxt = node[ch]
        if '$' in nxt:
            res.append(nxt.pop('$'))
        board[i][j] = '#'
        for di, dj in ((1,0),(-1,0),(0,1),(0,-1)):
            ni, nj = i+di, j+dj
            if 0<=ni<m and 0<=nj<n and board[ni][nj] != '#':
                dfs(ni, nj, nxt)
        board[i][j] = ch
    for i in range(m):
        for j in range(n):
            dfs(i, j, trie)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Replace Words (LeetCode 648, Medium)',
      text: '<strong>Problem:</strong> Replace sentence words by their shortest dictionary root prefix.<br/><strong>Key idea:</strong> Trie of roots; for each word walk until is_end or mismatch.<br/><strong>Complexity:</strong> O(total chars).',
      example: {
        title: 'Python Solution',
        code: `def replaceWords(dictionary, sentence):
    root = {}
    for w in dictionary:
        n = root
        for c in w: n = n.setdefault(c, {})
        n['#'] = True
    def replace(word):
        n, pref = root, []
        for c in word:
            if c not in n or '#' in n: break
            n = n[c]; pref.append(c)
            if '#' in n: return ''.join(pref)
        return word
    return ' '.join(replace(w) for w in sentence.split())`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Longest Word in Dictionary (LeetCode 720, Medium)',
      text: '<strong>Problem:</strong> Longest word built by adding one char at a time from other words; tie → lex smallest.<br/><strong>Key idea:</strong> Trie + BFS/DFS only through is_end nodes, or sort + set of buildable words.<br/><strong>Complexity:</strong> O(total chars).',
      example: {
        title: 'Python Solution',
        code: `def longestWord(words):
    words = set(words)
    best = ''
    for w in sorted(words):
        if all(w[:k] in words for k in range(1, len(w))) and (
            len(w) > len(best) or (len(w) == len(best) and w < best)
        ):
            # stricter: every prefix must be a word — check k=1..len-1
            if all(w[:k] in words for k in range(1, len(w))):
                best = w
    # cleaner:
    best = ''
    for w in sorted(words, key=lambda x: (-len(x), x)):
        if all(w[:i] in words for i in range(1, len(w))):
            return w
    return best`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Map Sum Pairs (LeetCode 677, Medium)',
      text: '<strong>Problem:</strong> insert key→val; sum of values with keys starting with prefix.<br/><strong>Key idea:</strong> Trie storing subtree sum or val on end; update path sums on insert.<br/><strong>Complexity:</strong> O(L) insert/sum.',
      example: {
        title: 'Python Solution',
        code: `class MapSum:
    def __init__(self):
        self.root = {}
        self.vals = {}
    def insert(self, key, val):
        delta = val - self.vals.get(key, 0)
        self.vals[key] = val
        n = self.root
        for c in key:
            n = n.setdefault(c, {'sum': 0, 'ch': {}})
            # simplified structure: use dual dict pattern carefully
        # Practical: store sum on nodes
        n = self.root
        for c in key:
            if c not in n:
                n[c] = {'_s': 0}
            n = n[c]
            n['_s'] = n.get('_s', 0) + delta
        n['_v'] = val
    def sum(self, prefix):
        n = self.root
        for c in prefix:
            if c not in n: return 0
            n = n[c]
        return n.get('_s', 0)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Implement Magic Dictionary (LeetCode 676, Medium)',
      text: '<strong>Problem:</strong> search true if can change exactly one character to match a dict word.<br/><strong>Key idea:</strong> Group by length; for each candidate count mismatches == 1. Or trie DFS with remaining edits.<br/><strong>Complexity:</strong> O(n · L) per search naive.',
      example: {
        title: 'Python Solution',
        code: `from collections import defaultdict
class MagicDictionary:
    def __init__(self):
        self.by_len = defaultdict(list)
    def buildDict(self, dictionary):
        for w in dictionary:
            self.by_len[len(w)].append(w)
    def search(self, searchWord):
        for w in self.by_len[len(searchWord)]:
            diff = sum(a != b for a, b in zip(w, searchWord))
            if diff == 1: return True
        return False`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Maximum XOR of Two Numbers in an Array (LeetCode 421, Medium)',
      text: '<strong>Problem:</strong> Max XOR of any two numbers.<br/><strong>Key idea:</strong> Binary trie of bits (MSB→LSB); for each num greedily take opposite bit when possible.<br/><strong>Complexity:</strong> O(n · 32).',
      example: {
        title: 'Python Solution',
        code: `def findMaximumXOR(nums):
    root = {}
    for x in nums:
        n = root
        for i in range(31, -1, -1):
            b = (x >> i) & 1
            n = n.setdefault(b, {})
    ans = 0
    for x in nums:
        n, cur = root, 0
        for i in range(31, -1, -1):
            b = (x >> i) & 1
            want = 1 - b
            if want in n:
                cur |= 1 << i
                n = n[want]
            else:
                n = n[b]
        ans = max(ans, cur)
    return ans`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
