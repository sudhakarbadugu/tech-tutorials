// DSA Module 4: Advanced String Algorithms (Linked-List-style tutorial)
export const stringAlgosTopic = {
  title: 'Advanced String Algorithms',
  subtitle: 'KMP, Rabin-Karp, and pattern matching beyond the naive scan',
  sections: [
    {
      heading: 'What Are Advanced String Algorithms?',
      text: 'Naive substring search checks the pattern at every text position and can take O(n · m) time. Advanced algorithms preprocess the pattern (or use rolling hashes) to skip redundant comparisons and reach <strong>O(n + m)</strong> matching. Interviews focus on <strong>KMP</strong> (prefix table / LPS) and <strong>Rabin-Karp</strong> (rolling hash), with Z-algorithm and tries as strong follow-ups.',
      list: [
        '<strong>Pattern matching:</strong> Find all occurrences of pattern P inside text T.',
        '<strong>KMP:</strong> Automaton-like search using the longest proper prefix that is also a suffix (LPS).',
        '<strong>Rabin-Karp:</strong> Compare rolling hashes in O(1); verify on hash hits to handle collisions.',
        '<strong>Why it matters:</strong> Grep, plagiarism checks, DNA motif search, intrusion detection, editors\' find-next.',
        '<strong>Related tools:</strong> Z-array, Aho-Corasick (multi-pattern), suffix arrays/trees (advanced).'
      ]
    },
    {
      heading: 'Components of Pattern Matching',
      list: [
        '<strong>Text T:</strong> Length n — the haystack.',
        '<strong>Pattern P:</strong> Length m — the needle.',
        '<strong>Window:</strong> Alignment of P against a substring of T of length m.',
        '<strong>Preprocessing:</strong> LPS array (KMP) or pattern hash + power (Rabin-Karp).',
        '<strong>Shift rule:</strong> How far to move the window after a mismatch or full match.'
      ]
    },
    {
      heading: 'Naive Search (Baseline)',
      text: 'For each start i in 0..n-m, compare T[i..i+m) to P character by character. Simple and fine for tiny m, but worst case O(n · m) (e.g. T=aaa…a, P=aa…ab).',
      diagram: {
        caption: 'Naive: after mismatch, shift by only 1',
        chart: `flowchart LR
    T["T: a a a a b"]
    P1["P@0: a a b ✗"]
    P2["P@1: a a b ✗"]
    P3["P@2: a a b"]
    T --> P1 --> P2 --> P3
    style P1 fill:#e74c3c,color:#fff`
      }
    },
    // KMP
    {
      heading: 'What is KMP?',
      text: 'Knuth–Morris–Pratt never re-compares characters it already knows match. After a mismatch at pattern index j, it shifts using <strong>lps[j-1]</strong> — the length of the longest proper prefix of P[0..j-1] that is also a suffix of that segment — so the already-matched prefix lines up with a possible continuation.',
      list: [
        '<strong>LPS / pi array:</strong> lps[i] = longest proper prefix of P[0..i] that is also a suffix of P[0..i].',
        '<strong>Proper:</strong> Not the whole string — so lps values are &lt; i+1.',
        '<strong>Search phase:</strong> Two pointers i (text) and j (pattern); on match both advance; on mismatch j = lps[j-1] (or i++ if j==0).',
        '<strong>Time:</strong> O(n + m) total — each pointer only moves forward overall.',
        '<strong>Space:</strong> O(m) for the LPS array.'
      ]
    },
    {
      heading: 'Building the LPS Array',
      text: 'LPS is itself computed with a two-pointer scan that mirrors the search logic.',
      diagram: {
        caption: 'P = "aabaaab" — sample LPS values',
        chart: `flowchart LR
    I0["0: a → 0"] --> I1["1: a → 1"]
    I1 --> I2["2: b → 0"]
    I2 --> I3["3: a → 1"]
    I3 --> I4["4: a → 2"]
    I4 --> I5["5: a → 2"]
    I5 --> I6["6: b → 3"]
    style I1 fill:#3498db,color:#fff
    style I6 fill:#2ecc71,color:#fff`
      }
    },
    {
      text: '<strong>Algorithm:</strong> len = 0, i = 1. While i &lt; m: if P[i]==P[len], len++, lps[i]=len, i++. Else if len&gt;0, len=lps[len-1]; else lps[i]=0, i++. This is O(m).'
    },
    {
      heading: 'KMP Search Visualization',
      diagram: {
        caption: 'Mismatch uses LPS to shift pattern without moving text back',
        chart: `flowchart TD
    M["Match run j increases"] --> X{"Mismatch at j?"}
    X -->|j>0| S["j = lps[j-1] — slide pattern"]
    X -->|j==0| A["i += 1"]
    S --> M
    A --> M
    M --> F{"j == m?"}
    F -->|yes| H["Record hit at i-m; j = lps[j-1]"]
    style H fill:#2ecc71,color:#fff
    style S fill:#f1c40f,color:#000`
      }
    },
    // Rabin-Karp
    {
      heading: 'What is Rabin-Karp?',
      text: 'Rabin-Karp compares a <strong>rolling hash</strong> of the current text window to the pattern hash. Sliding the window updates the hash in O(1) by removing the leaving character and adding the entering character (modular arithmetic). On hash equality, verify characters to guard against collisions.',
      list: [
        '<strong>Polynomial hash:</strong> h = (c0·b^{m-1} + c1·b^{m-2} + … + c_{m-1}) mod p.',
        '<strong>Roll:</strong> h = (h - c_old·b^{m-1}) · b + c_new (mod p).',
        '<strong>Average O(n+m)</strong> with a good modulus; worst O(n·m) if many collisions (rare with large prime / double hash).',
        '<strong>Multi-pattern:</strong> Can check a set of pattern hashes (bloom-like) — useful variant.',
        '<strong>Interview tip:</strong> Mention collision handling — never trust hash alone in correctness-critical code.'
      ]
    },
    {
      heading: 'Rolling Hash Diagram',
      diagram: {
        caption: 'Window slides right: drop left char, append right char',
        chart: `flowchart LR
    W1["[a b c] hash H1"] --> W2["[b c d] hash H2"]
    W1 -.->|remove a, add d| W2
    style W2 fill:#3498db,color:#fff`
      }
    },
    {
      heading: 'Types of String Matching Tools',
      text: 'Pick the tool for the job.'
    },
    {
      heading: 'KMP',
      text: 'Best when you need guaranteed linear time and deterministic comparisons. Great for single pattern, streaming text, and explaining automata thinking.'
    },
    {
      heading: 'Rabin-Karp',
      text: 'Elegant for teaching hashes; practical for multi-pattern and plagiarism-style fingerprinting. Watch collisions.'
    },
    {
      heading: 'Z-Algorithm',
      text: 'Z[i] = longest substring starting at i that matches a prefix of the string. Build Z for P + "#" + T to find matches in O(n+m). Same complexity class as KMP; different view.'
    },
    {
      heading: 'Trie / Aho-Corasick',
      text: 'Trie for prefix dictionary ops; Aho-Corasick adds failure links for multi-pattern search in O(n + total hits + patterns size).'
    },
    {
      heading: 'Advantages',
      list: [
        '<strong>Linear time guarantees (KMP/Z):</strong> No quadratic surprise on adversarial strings.',
        '<strong>Streaming friendly:</strong> Process text left to right with O(m) memory.',
        '<strong>Foundation for compilers / search:</strong> Lexers and find-in-file tools use these ideas.',
        '<strong>Hash techniques transfer:</strong> Rolling hashes appear in string DP, palindromes, and duplicate substring problems.'
      ]
    },
    {
      heading: 'Disadvantages',
      list: [
        '<strong>Implementation detail heavy:</strong> LPS off-by-ones are common in interviews under time pressure.',
        '<strong>Rabin-Karp collisions:</strong> Must verify or use double hashing.',
        '<strong>Constant factors:</strong> For short patterns, naive or library find may win in practice.',
        '<strong>Unicode complexity:</strong> Real text may need grapheme-aware handling beyond byte/char indexes.',
        '<strong>Overkill for small n:</strong> Interviewers still want the algorithm; production may use std::string::find.'
      ]
    },
    {
      heading: 'Core Operations',
      text: 'Four operations you should be able to code cold.'
    },
    {
      heading: 'Operation 1: Build LPS',
      text: '<strong>What it does:</strong> Preprocess pattern for KMP.<br/><strong>Best efficiency:</strong> O(m) time, O(m) space.',
      code: `def build_lps(p):
    m, lps, length, i = len(p), [0] * len(p), 0, 1
    while i < m:
        if p[i] == p[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps`,
      language: 'python'
    },
    {
      heading: 'Operation 2: KMP Search',
      text: '<strong>What it does:</strong> Return all start indices of P in T.<br/><strong>Best efficiency:</strong> O(n + m).'
    },
    {
      heading: 'Operation 3: Rolling Hash Update',
      text: '<strong>What it does:</strong> Slide window hash in O(1).<br/><strong>Best efficiency:</strong> O(n) to scan text after O(m) pattern hash.'
    },
    {
      heading: 'Operation 4: Verify on Hash Match',
      text: '<strong>What it does:</strong> Compare characters when hashes equal to eliminate false positives.<br/><strong>Best efficiency:</strong> O(m) only on candidate hits.'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'KMP (full LPS + search) & Rabin-Karp (rolling hash)',
        code: `from typing import List

def build_lps(pattern: str) -> List[int]:
    m = len(pattern)
    lps = [0] * m
    length = 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    return lps

def kmp_search(text: str, pattern: str) -> List[int]:
    if not pattern:
        return list(range(len(text) + 1))
    lps = build_lps(pattern)
    i = j = 0
    hits = []
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1
            if j == len(pattern):
                hits.append(i - j)
                j = lps[j - 1]
        elif j:
            j = lps[j - 1]
        else:
            i += 1
    return hits

def rabin_karp(text: str, pattern: str, base: int = 256, mod: int = 1_000_000_007) -> List[int]:
    n, m = len(text), len(pattern)
    if m == 0 or m > n:
        return [] if m else list(range(n + 1))
    power = pow(base, m - 1, mod)
    ph = th = 0
    for i in range(m):
        ph = (ph * base + ord(pattern[i])) % mod
        th = (th * base + ord(text[i])) % mod
    hits = []
    for i in range(n - m + 1):
        if ph == th and text[i:i + m] == pattern:
            hits.append(i)
        if i < n - m:
            th = (th - ord(text[i]) * power) % mod
            th = (th * base + ord(text[i + m])) % mod
            th %= mod
    return hits

print(build_lps("aabaaac"))
print(kmp_search("ababcababa", "ababa"))
print(rabin_karp("aaaaa", "aa"))`,
        output: `[0, 1, 0, 1, 2, 2, 0]
[5]
[0, 1, 2, 3]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'KMP & Rabin-Karp in Java',
        code: `import java.util.*;

public class StringAlgos {
    static int[] buildLps(String p) {
        int m = p.length(), len = 0, i = 1;
        int[] lps = new int[m];
        while (i < m) {
            if (p.charAt(i) == p.charAt(len)) lps[i++] = ++len;
            else if (len > 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
        return lps;
    }

    static List<Integer> kmp(String t, String p) {
        List<Integer> hits = new ArrayList<>();
        if (p.isEmpty()) return hits;
        int[] lps = buildLps(p);
        int i = 0, j = 0;
        while (i < t.length()) {
            if (t.charAt(i) == p.charAt(j)) { i++; j++;
                if (j == p.length()) { hits.add(i - j); j = lps[j - 1]; }
            } else if (j > 0) j = lps[j - 1];
            else i++;
        }
        return hits;
    }

    static List<Integer> rabinKarp(String t, String p) {
        List<Integer> hits = new ArrayList<>();
        int n = t.length(), m = p.length();
        if (m == 0 || m > n) return hits;
        long base = 256, mod = 1_000_000_007L, power = 1, ph = 0, th = 0;
        for (int i = 0; i < m - 1; i++) power = (power * base) % mod;
        for (int i = 0; i < m; i++) {
            ph = (ph * base + p.charAt(i)) % mod;
            th = (th * base + t.charAt(i)) % mod;
        }
        for (int i = 0; i <= n - m; i++) {
            if (ph == th && t.regionMatches(i, p, 0, m)) hits.add(i);
            if (i < n - m) {
                th = (th - t.charAt(i) * power % mod + mod) % mod;
                th = (th * base + t.charAt(i + m)) % mod;
            }
        }
        return hits;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(buildLps("aabaaac")));
        System.out.println(kmp("ababcababa", "ababa"));
        System.out.println(rabinKarp("aaaaa", "aa"));
    }
}`,
        output: `[0, 1, 0, 1, 2, 2, 0]
[5]
[0, 1, 2, 3]`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      table: {
        headers: ['Algorithm', 'Preprocess', 'Search', 'Space', 'Notes'],
        rows: [
          ['Naive', 'O(1)', 'O(n · m)', 'O(1)', 'Fine for tiny m'],
          ['KMP', 'O(m)', 'O(n)', 'O(m)', 'Worst-case linear'],
          ['Rabin-Karp', 'O(m)', 'O(n) avg', 'O(1)', 'O(n·m) if many collisions'],
          ['Z-algorithm', 'O(n+m)', 'included', 'O(n+m)', 'Via concat P+# +T'],
          ['Aho-Corasick', 'O(sum |Pi|)', 'O(n + hits)', 'O(sum |Pi|)', 'Multi-pattern'],
          ['Python str.find', '—', 'practical fast', '—', 'C-optimized; still know KMP']
        ]
      },
      note: 'Interview tip: for KMP, prove linearity by arguing i only increases n times and j decreases along LPS but total decreases are bounded — amortized O(n+m).'
    },
    {
      heading: 'Common Mistakes & Pitfalls',
      list: [
        '<strong>LPS off-by-one:</strong> On match at end, set j = lps[j-1] to find overlapping occurrences (e.g. "aaa" in "aaaa").',
        '<strong>Negative mod in rolling hash:</strong> Always ((h % mod) + mod) % mod after subtraction.',
        '<strong>Integer overflow:</strong> Use 64-bit / BigInt or modular multiplies carefully in Java.',
        '<strong>Skipping character verification</strong> in Rabin-Karp — correctness requires it (or double hash).',
        '<strong>Empty pattern edge cases</strong> — define behavior explicitly.'
      ],
      code: `# WRONG modular roll
th = (th - ord(text[i]) * power) * base + ord(text[i+m])

# CORRECT
th = (th - ord(text[i]) * power) % mod
th = (th * base + ord(text[i + m])) % mod
th %= mod  # keep non-negative

# KMP: after full match, do NOT reset j to 0 if overlaps matter
j = lps[j - 1]`,
      language: 'python'
    },
    {
      heading: 'Real-World Applications',
      list: [
        '<strong>Text editors & IDEs:</strong> Find / replace all uses efficient matching under the hood.',
        '<strong>Intrusion detection:</strong> Multi-pattern signature scan (Aho-Corasick).',
        '<strong>Bioinformatics:</strong> Motif search in DNA/protein sequences — n and m are huge.',
        '<strong>Plagiarism / near-duplicate detection:</strong> Rabin fingerprinting of shingles.',
        '<strong>Network protocols:</strong> Pattern match on packet payloads.',
        '<strong>Compilers:</strong> Lexical analysis related to automata (siblings of KMP thinking).',
        '<strong>Version control diffs:</strong> Hashing blocks of text for similarity.'
      ]
    },
    {
      heading: 'Top Interview Questions on String Algorithms',
      text: 'Eight problems spanning KMP, hashing, and classic string DP that often appear beside these topics.',
      note: 'If the problem is "find pattern", think KMP/RK. If "longest duplicate substring", think binary search + rolling hash. If "edit distance / LCS", think DP tables from the previous topic.'
    },
    {
      heading: 'Practice Question 1: Find the Index of the First Occurrence (LeetCode 28, Easy)',
      text: '<strong>Problem:</strong> Return the first index of needle in haystack (or -1).<br/><strong>Key idea:</strong> KMP search; return first hit.<br/><strong>Complexity:</strong> O(n + m).',
      example: {
        title: 'Python Solution',
        code: `def strStr(haystack, needle):
    hits = kmp_search(haystack, needle)
    return hits[0] if hits else -1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Repeated Substring Pattern (LeetCode 459, Easy)',
      text: '<strong>Problem:</strong> Is s made by repeating a substring?<br/><strong>Key idea:</strong> KMP: if n % (n - lps[-1]) == 0 and lps[-1] > 0. Or check s in (s+s)[1:-1].<br/><strong>Complexity:</strong> O(n).',
      example: {
        title: 'Python Solution',
        code: `def repeatedSubstringPattern(s):
    n = len(s)
    lps = build_lps(s)
    return lps[-1] > 0 and n % (n - lps[-1]) == 0`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Implement strStr with Rabin-Karp',
      text: '<strong>Problem:</strong> Same as Q1 using rolling hash.<br/><strong>Key idea:</strong> Compare hashes; verify on match.<br/><strong>Complexity:</strong> O(n + m) average.',
      example: {
        title: 'Python Solution',
        code: `def strStrRK(haystack, needle):
    hits = rabin_karp(haystack, needle)
    return hits[0] if hits else -1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Shortest Palindrome (LeetCode 214, Hard)',
      text: '<strong>Problem:</strong> Add characters in front of s to make it a palindrome; return the shortest.<br/><strong>Key idea:</strong> KMP on s + "#" + reverse(s); lps[-1] is longest palindromic prefix length.<br/><strong>Complexity:</strong> O(n).',
      example: {
        title: 'Python Solution',
        code: `def shortestPalindrome(s):
    rev = s[::-1]
    lps = build_lps(s + '#' + rev)
    return rev[: len(s) - lps[-1]] + s`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Longest Duplicate Substring (LeetCode 1044, Hard)',
      text: '<strong>Problem:</strong> Longest substring that occurs at least twice.<br/><strong>Key idea:</strong> Binary search length L; Rabin-Karp fingerprint set to test if any duplicate window of length L exists.<br/><strong>Complexity:</strong> O(n log n) average with hashing.',
      example: {
        title: 'Python Solution (sketch)',
        code: `def longestDupSubstring(s):
    n = len(s)
    # binary search on length + rolling hash check
    # return the substring found at the largest feasible L
    ...`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Find All Anagrams in a String (LeetCode 438, Medium)',
      text: '<strong>Problem:</strong> Start indices of p\'s anagrams in s.<br/><strong>Key idea:</strong> Sliding window counts (not KMP) — fixed window frequency match.<br/><strong>Complexity:</strong> O(n).',
      example: {
        title: 'Python Solution',
        code: `from collections import Counter
def findAnagrams(s, p):
    need, window = Counter(p), Counter()
    left = 0
    res = []
    for right, ch in enumerate(s):
        window[ch] += 1
        if right - left + 1 > len(p):
            window[s[left]] -= 1
            if window[s[left]] == 0: del window[s[left]]
            left += 1
        if window == need:
            res.append(left)
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Longest Happy Prefix (LeetCode 1392, Hard)',
      text: '<strong>Problem:</strong> Longest prefix that is also a suffix (proper).<br/><strong>Key idea:</strong> Exactly lps[-1] characters: return s[:lps[-1]].<br/><strong>Complexity:</strong> O(n).',
      example: {
        title: 'Python Solution',
        code: `def longestPrefix(s):
    lps = build_lps(s)
    return s[: lps[-1]]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Repeated String Match (LeetCode 686, Medium)',
      text: '<strong>Problem:</strong> Min times to repeat a so that b is a substring.<br/><strong>Key idea:</strong> Repeat a until length ≥ len(b); check with KMP; try one more repeat for border cases.<br/><strong>Complexity:</strong> O((n+m) · repeats) with KMP.',
      example: {
        title: 'Python Solution',
        code: `def repeatedStringMatch(a, b):
    times = (len(b) + len(a) - 1) // len(a)
    text = a * times
    if kmp_search(text, b): return times
    if kmp_search(text + a, b): return times + 1
    return -1`,
        language: 'python',
        type: 'code'
      }
    }
  ]
};
