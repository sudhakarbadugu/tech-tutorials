// DSA Module 3 — enhanced interview-ready content
// Regenerate: node scripts/generate-dsa-modules-2-3.js

export const dsaModule3Structure = {
  module3: {
    title: 'Module 3: Sorting, Searching & Patterns',
    topics: [
      {
        id: 'sorting',
        title: 'Sorting Algorithms'
      },
      {
        id: 'binary-search',
        title: 'Binary Search'
      },
      {
        id: 'two-pointers',
        title: 'Two Pointers & Sliding Window'
      },
      {
        id: 'divide-conquer',
        title: 'Divide & Conquer'
      },
      {
        id: 'greedy',
        title: 'Greedy Algorithms'
      }
    ]
  }
};

export const dsaModule3Content = {
  module3: {
    sorting: {
      title: 'Sorting Algorithms',
      subtitle: 'Merge, Quick, Heap — know when each wins',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Sorting is foundational. Interviews expect you to implement merge sort and quicksort, know complexities, and recognize when O(n log n) is unavoidable.',
          list: [
            '<strong>Merge sort:</strong> Stable O(n log n), O(n) extra space',
            '<strong>Quick sort:</strong> O(n log n) average, O(n²) worst, in-place',
            '<strong>Heap sort:</strong> O(n log n), O(1) extra space, not stable',
            '<strong>Counting/Radix:</strong> O(n) when keys bounded',
            '<strong>Python Timsort:</strong> O(n log n) hybrid, stable'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Comparison sorts lower bound is O(n log n). Merge sort guarantees it; quicksort is faster in practice due to cache locality but can degrade.</p>'
          ],
          note: 'Stable sort preserves relative order of equal elements — important for multi-key sorts.'
        },
        {
          heading: 'Visual Diagram',
          code: `Merge sort on [38,27,43,3]:
Split: [38,27] [43,3]
Split: [38][27] [43][3]
Merge: [27,38] [3,43]
Merge: [3,27,38,43]`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Merge, Quick, Heap Sort',
            code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    mid = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)

def heap_sort(arr):
    import heapq
    h = arr[:]
    heapq.heapify(h)
    return [heapq.heappop(h) for _ in range(len(h))]

data = [3, 1, 4, 1, 5, 9, 2, 6]
print("Merge:", merge_sort(data))
print("Quick:", quick_sort(data))
print("Heap:", heap_sort(data))`,
            output: `Merge: [1,1,2,3,4,5,6,9]
Quick: [1,1,2,3,4,5,6,9]`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Merge Sort in Java',
            code: `import java.util.*;

public class SortDemo {
    static void merge(int[] a, int l, int m, int r) {
        int[] tmp = new int[r - l + 1];
        int i = l, j = m + 1, k = 0;
        while (i <= m && j <= r) tmp[k++] = a[i] <= a[j] ? a[i++] : a[j++];
        while (i <= m) tmp[k++] = a[i++];
        while (j <= r) tmp[k++] = a[j++];
        for (k = 0; k < tmp.length; k++) a[l + k] = tmp[k];
    }

    static void mergeSort(int[] a, int l, int r) {
        if (l >= r) return;
        int m = l + (r - l) / 2;
        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);
        merge(a, l, m, r);
    }

    public static void main(String[] args) {
        int[] a = {3,1,4,1,5,9,2,6};
        mergeSort(a, 0, a.length - 1);
        System.out.println(Arrays.toString(a));
    }
}`,
            output: '[1, 1, 2, 3, 4, 5, 6, 9]',
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Merge sort:</strong> Divide in half, sort halves, merge two sorted arrays.',
            '<strong>Quick sort:</strong> Pick pivot, partition smaller/larger, recurse.',
            '<strong>Heap sort:</strong> heapify, repeatedly extract min/max.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'n elements:',
          table: {
            headers: [
              'Algorithm',
              'Best',
              'Average',
              'Worst',
              'Space',
              'Stable'
            ],
            rows: [
              [
                'Merge',
                'O(n log n)',
                'O(n log n)',
                'O(n log n)',
                'O(n)',
                'Yes'
              ],
              [
                'Quick',
                'O(n log n)',
                'O(n log n)',
                'O(n²)',
                'O(log n)',
                'No'
              ],
              [
                'Heap',
                'O(n log n)',
                'O(n log n)',
                'O(n log n)',
                'O(1)',
                'No'
              ],
              [
                'Bubble',
                'O(n)',
                'O(n²)',
                'O(n²)',
                'O(1)',
                'Yes'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Using O(n²) sort on large n in interviews.',
            'Quicksort worst case on sorted input without random pivot.'
          ],
          code: `# Use random pivot for quicksort partition
import random
pivot_idx = random.randint(lo, hi)
nums[pivot_idx], nums[hi] = nums[hi], nums[pivot_idx]`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Databases, search ranking, deduplication pipelines.',
          list: [
            '<strong>SQL ORDER BY:</strong> Often merge-based',
            '<strong>Big data:</strong> External merge sort'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Kth largest → quickselect O(n) average.',
            'Nearly sorted → insertion sort O(n).'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Sort array. Implement merge sort. Ans: O(n log n).',
            'Q2: Kth largest. Hint: quickselect. Ans: O(n) avg.',
            'Q3 (Hard): Count inversions. Hint: merge sort count during merge. Ans: O(n log n).'
          ]
        }
      ]
    },
    'binary-search': {
      title: 'Binary Search',
      subtitle: 'O(log n) on sorted data — and beyond',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Binary search halves the search space each step. Works on sorted arrays and on monotonic answer spaces (binary search on answer).',
          list: [
            '<strong>Loop invariant:</strong> target in [lo, hi] if exists',
            '<strong>lower_bound:</strong> First index where arr[i] >= target',
            '<strong>upper_bound:</strong> First index where arr[i] > target',
            '<strong>Rotated array:</strong> One half always sorted',
            '<strong>Search on answer:</strong> Minimize/maximize with feasibility check'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Classic mistake: using mid = (lo+hi)/2 overflow in Java — use lo + (hi-lo)/2. Another: infinite loop when lo=mid with lo=mid+1 update — use lo < hi for lower_bound.</p>'
          ],
          note: 'Binary search on answer: if feasible(x) is monotonic, binary search the answer space.'
        },
        {
          heading: 'Visual Diagram',
          code: `arr = [1,3,5,7,9,11], target = 7
lo=0 hi=5 mid=2 (5<7) lo=3
lo=3 hi=5 mid=4 (9>7) hi=3
lo=3 hi=3 mid=3 arr[3]=7 FOUND`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Binary Search, lower_bound, Rotated Array',
            code: `def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

def lower_bound(arr, target):
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = (lo + hi) // 2
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid
    return lo

def search_rotated(nums, target):
    lo, hi = 0, len(nums) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == target:
            return mid
        if nums[lo] <= nums[mid]:
            if nums[lo] <= target < nums[mid]:
                hi = mid - 1
            else:
                lo = mid + 1
        else:
            if nums[mid] < target <= nums[hi]:
                lo = mid + 1
            else:
                hi = mid - 1
    return -1

arr = [1, 2, 4, 4, 5, 7]
print(binary_search(arr, 5))
print(lower_bound(arr, 4))
print(search_rotated([4,5,6,7,0,1,2], 0))`,
            output: `4
2
4`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Binary Search in Java',
            code: `public class BSearch {
    static int search(int[] a, int t) {
        int lo = 0, hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] == t) return mid;
            if (a[mid] < t) lo = mid + 1; else hi = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        System.out.println(search(new int[]{1,3,5,7}, 5));
    }
}`,
            output: '2',
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1:</strong> lo=0, hi=n-1 (or n for lower_bound).',
            '<strong>Step 2:</strong> mid = lo + (hi-lo)//2.',
            '<strong>Step 3:</strong> Compare, shrink left or right half.',
            '<strong>Step 4:</strong> Rotated: identify sorted half, check if target in range.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'n elements:',
          table: {
            headers: [
              'Variant',
              'Time',
              'Space'
            ],
            rows: [
              [
                'Standard',
                'O(log n)',
                'O(1)'
              ],
              [
                'lower_bound',
                'O(log n)',
                'O(1)'
              ],
              [
                'Search on answer',
                'O(log R · f(n))',
                'O(1)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Off-by-one with lo<=hi vs lo<hi.',
            'Mid overflow in Java/C++.',
            'Applying to unsorted array.'
          ],
          code: 'mid = lo + (hi - lo) // 2  # safe mid',
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Database indexes, pagination, version control bisect.',
          list: [
            '<strong>Git bisect:</strong> Find breaking commit O(log n commits)'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Find first/last occurrence → lower_bound + check neighbors.',
            'Minimize maximum → binary search on answer.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Search in rotated sorted array. Hint: sorted half check. Ans: O(log n).',
            'Q2: Find peak element. Hint: compare mid with mid+1. Ans: O(log n).',
            'Q3 (Hard): Median of two sorted arrays. Hint: binary search partition. Ans: O(log(min(m,n))).'
          ]
        }
      ]
    },
    'two-pointers': {
      title: 'Two Pointers & Sliding Window',
      subtitle: 'Turn O(n²) brute force into O(n)',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Two pointers move across arrays/strings; sliding window maintains a valid contiguous segment. Together they solve a huge fraction of array interview problems.',
          list: [
            '<strong>Opposite ends:</strong> Sorted pair-sum, palindrome, container water',
            '<strong>Same direction:</strong> Remove duplicates, fast/slow cycle detection',
            '<strong>Fixed window k:</strong> Max sum subarray of size k',
            '<strong>Variable window:</strong> Longest substring with constraint',
            '<strong>Invariant:</strong> Window always satisfies (or violates) a condition'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Sliding window: each element enters and leaves at most once → O(n). Expand right until invalid, shrink left until valid again.</p>'
          ],
          note: 'If array sorted → try opposite-end two pointers before hash map.'
        },
        {
          heading: 'Visual Diagram',
          code: `Longest unique substring "abcabcbb":
a|bcabcbb  → best=1
ab|cabcbb  → best=2
abc|abcbb  → dup 'a', shrink left past index 0
  bc|abcbb → best=3`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Two Sum II, Fixed K Window, Longest Unique Substring',
            code: `def two_sum_sorted(nums, target):
    l, r = 0, len(nums) - 1
    while l < r:
        s = nums[l] + nums[r]
        if s == target:
            return [l + 1, r + 1]
        elif s < target:
            l += 1
        else:
            r -= 1
    return []

def max_sum_subarray_k(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return best

def longest_unique_substring(s):
    last = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in last and last[ch] >= left:
            left = last[ch] + 1
        last[ch] = right
        best = max(best, right - left + 1)
    return best

print(two_sum_sorted([2,7,11,15], 9))
print(max_sum_subarray_k([2,1,5,1,3,2], 3))
print(longest_unique_substring("abcabcbb"))`,
            output: `[1,2]
9
3`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Sliding Window in Java',
            code: `public class Window {
    static int maxSumK(int[] a, int k) {
        int sum = 0;
        for (int i = 0; i < k; i++) sum += a[i];
        int best = sum;
        for (int i = k; i < a.length; i++) {
            sum += a[i] - a[i - k];
            best = Math.max(best, sum);
        }
        return best;
    }
    public static void main(String[] args) {
        System.out.println(maxSumK(new int[]{2,1,5,1,3,2}, 3));
    }
}`,
            output: '9',
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Two Sum sorted:</strong> If sum too small, l++; too big, r--.',
            '<strong>Fixed k:</strong> Add right, subtract falling off left.',
            '<strong>Variable:</strong> Track last index map; shrink on duplicate inside window.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'n = array/string length:',
          table: {
            headers: [
              'Pattern',
              'Time',
              'Space'
            ],
            rows: [
              [
                'Two pointers',
                'O(n)',
                'O(1)'
              ],
              [
                'Sliding window',
                'O(n)',
                'O(k) or O(alphabet)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Shrinking window before expanding.',
            'Wrong window size formula (right-left+1).'
          ],
          code: 'best = max(best, right - left + 1)  # inclusive window size',
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Stream processing, genomic sequence analysis, rate limiting.',
          list: [
            '<strong>Rate limiter:</strong> Sliding window counter'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'At most K distinct → shrink when map size > k.',
            'Minimum window substring → shrink while valid.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Max sum subarray size k. Hint: fixed window. Ans: O(n).',
            'Q2: Longest substring without repeating. Hint: variable window + last index. Ans: O(n).',
            'Q3 (Hard): Minimum window substring containing all chars of t. Hint: expand until valid, shrink while valid. Ans: O(n).'
          ]
        }
      ]
    },
    'divide-conquer': {
      title: 'Divide & Conquer',
      subtitle: 'Split, solve subproblems, combine',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Divide & conquer breaks problems into independent subproblems. Classic examples: merge sort, quicksort, binary search, closest pair of points.',
          list: [
            '<strong>Divide:</strong> Split input into smaller pieces',
            '<strong>Conquer:</strong> Solve subproblems recursively',
            '<strong>Combine:</strong> Merge partial results — often O(n)',
            '<strong>Master Theorem:</strong> T(n)=aT(n/b)+O(n^d) → solve recurrence',
            '<strong>Base case:</strong> Small n solved directly'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Merge sort: T(n)=2T(n/2)+O(n) → O(n log n). Binary search: T(n)=T(n/2)+O(1) → O(log n).</p>'
          ],
          note: 'If combine step is O(n) and you split in half, often O(n log n) total.'
        },
        {
          heading: 'Visual Diagram',
          code: `Max subarray (Kadane is O(n); D&C version):
[-2,1,-3,4,-1,2,1,-5,4]
Left max=1, Right max=2, Cross max=6 → global 6`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Merge Sort as Divide & Conquer',
            code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]

print(merge_sort([38,27,43,3,9]))`,
            output: '[3, 9, 27, 38, 43]',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Merge Sort D&C',
            code: `import java.util.*;

public class SortDemo {
    static void merge(int[] a, int l, int m, int r) {
        int[] tmp = new int[r - l + 1];
        int i = l, j = m + 1, k = 0;
        while (i <= m && j <= r) tmp[k++] = a[i] <= a[j] ? a[i++] : a[j++];
        while (i <= m) tmp[k++] = a[i++];
        while (j <= r) tmp[k++] = a[j++];
        for (k = 0; k < tmp.length; k++) a[l + k] = tmp[k];
    }

    static void mergeSort(int[] a, int l, int r) {
        if (l >= r) return;
        int m = l + (r - l) / 2;
        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);
        merge(a, l, m, r);
    }

    public static void main(String[] args) {
        int[] a = {3,1,4,1,5,9,2,6};
        mergeSort(a, 0, a.length - 1);
        System.out.println(Arrays.toString(a));
    }
}`,
            output: '[1, 1, 2, 3, 4, 5, 6, 9]',
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Step 1:</strong> Define base case (n<=1).',
            '<strong>Step 2:</strong> Split array in half.',
            '<strong>Step 3:</strong> Recursively sort each half.',
            '<strong>Step 4:</strong> Merge two sorted halves in O(n).'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Recurrence determines complexity:',
          table: {
            headers: [
              'Problem',
              'Recurrence',
              'Result'
            ],
            rows: [
              [
                'Merge sort',
                '2T(n/2)+O(n)',
                'O(n log n)'
              ],
              [
                'Binary search',
                'T(n/2)+O(1)',
                'O(log n)'
              ],
              [
                'Strassen',
                '7T(n/2)+O(n²)',
                'O(n^2.81)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Forgetting combine step cost.',
            'Subproblems not independent (use DP instead).'
          ],
          code: `# Merge step is O(n) — don't drop it from complexity analysis`,
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'FFT, map reduce, parallel sorting.',
          list: [
            '<strong>MapReduce:</strong> Divide data across workers'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Draw recursion tree: levels × work per level.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Implement merge sort. Ans: O(n log n).',
            'Q2: Count inversions. Hint: merge sort merge step. Ans: O(n log n).',
            'Q3 (Hard): Pow(x,n) fast exponentiation. Hint: T(n/2). Ans: O(log n).'
          ]
        }
      ]
    },
    greedy: {
      title: 'Greedy Algorithms',
      subtitle: 'Local optimal choices — when they work globally',
      sections: [
        {
          heading: 'Core Concepts',
          text: 'Greedy picks the best local option at each step. Works for matroids and problems with greedy choice property; fails otherwise (need DP).',
          list: [
            '<strong>Activity selection:</strong> Sort by end time, pick non-overlapping',
            '<strong>Merge intervals:</strong> Sort by start, merge overlaps',
            '<strong>Huffman coding:</strong> Build tree by merging least frequent',
            '<strong>Coin change (canonical):</strong> Greedy works for US coins, not all systems',
            '<strong>Proof:</strong> Exchange argument or staying ahead'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Greedy fails for coin systems like coins=[1,3,4] amount=6: greedy gives 4+1+1=3 coins, optimal is 3+3=2 coins. Always verify or mention when greedy fails.</p>'
          ],
          note: `Prove greedy works or cite classic result — interviewers ask 'why greedy?'`
        },
        {
          heading: 'Visual Diagram',
          code: `Activity selection (sort by end):
[1,4] [3,5] [0,6] [5,7] [8,9] [5,9]
Pick [1,4], skip [3,5],[0,6], pick [5,7], pick [8,9] → 3 activities`,
          language: 'text'
        },
        {
          heading: 'Python Implementation',
          example: {
            title: 'Activity Selection, Merge Intervals, Coin Greedy',
            code: `def activity_selection(start, end):
    order = sorted(range(len(start)), key=lambda i: end[i])
    count, last_end = 0, float('-inf')
    for i in order:
        if start[i] >= last_end:
            count += 1
            last_end = end[i]
    return count

def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for s, e in intervals:
        if not merged or s > merged[-1][1]:
            merged.append([s, e])
        else:
            merged[-1][1] = max(merged[-1][1], e)
    return merged

def coin_change_greedy(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for c in coins:
        if amount == 0:
            break
        take = amount // c
        count += take
        amount -= take * c
    return count if amount == 0 else -1

print(activity_selection([1,2,3,0],[4,5,6,7]))
print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))
print(coin_change_greedy([1,5,10,25], 63))`,
            output: `2
[[1,6],[8,10],[15,18]]
5`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Java Implementation',
          example: {
            title: 'Merge Intervals Java',
            code: `import java.util.*;
public class Greedy {
    static int[][] merge(int[][] in) {
        Arrays.sort(in, (a,b) -> a[0]-b[0]);
        List<int[]> out = new ArrayList<>();
        for (int[] iv : in) {
            if (out.isEmpty() || iv[0] > out.get(out.size()-1)[1])
                out.add(iv);
            else
                out.get(out.size()-1)[1] = Math.max(out.get(out.size()-1)[1], iv[1]);
        }
        return out.toArray(new int[0][]);
    }
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10}})));
    }
}`,
            output: '[[1, 6], [8, 10]]',
            language: 'java',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>Activity selection:</strong> Sort by finish time; greedy pick if start >= last end.',
            '<strong>Merge intervals:</strong> Sort by start; extend last if overlap.',
            '<strong>Prove:</strong> Show greedy choice never blocks better solution.'
          ]
        },
        {
          heading: 'Time & Space Complexity',
          text: 'Typical greedy sorts first O(n log n):',
          table: {
            headers: [
              'Problem',
              'Greedy?',
              'Complexity'
            ],
            rows: [
              [
                'Activity selection',
                'Yes',
                'O(n log n)'
              ],
              [
                'Fractional knapsack',
                'Yes',
                'O(n log n)'
              ],
              [
                '0/1 knapsack',
                'No — use DP',
                'O(nW)'
              ],
              [
                'Coin change general',
                'No',
                'DP O(n·amount)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes & Pitfalls',
          list: [
            'Applying greedy to 0/1 knapsack.',
            'Not sorting before greedy interval problems.'
          ],
          code: '# Coin [1,3,4] amount 6: greedy fails — use DP',
          language: 'python'
        },
        {
          heading: 'Real-World Applications',
          text: 'Huffman compression, task scheduling, network routing.',
          list: [
            '<strong>ZIP/Huffman:</strong> Optimal prefix codes'
          ]
        },
        {
          heading: 'Interview Tips',
          list: [
            'Interval problems → sort by start or end first.',
            'If greedy fails small case → DP.'
          ]
        },
        {
          heading: 'Practice Problems',
          list: [
            'Q1: Non-overlapping intervals (max count). Hint: sort by end. Ans: O(n log n).',
            'Q2: Jump game can reach end? Hint: track farthest reach. Ans: O(n).',
            'Q3 (Hard): Minimum arrows to burst balloons. Hint: sort by end, greedy. Ans: O(n log n).'
          ]
        }
      ]
    }
  }
};
