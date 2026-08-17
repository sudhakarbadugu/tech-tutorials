import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../src/data/rewritten/dsa_module3.js');

const dsaModule3Structure = {
  module3: {
    title: 'Module 3: Sorting, Searching & Patterns',
    topics: [
      { id: 'sorting', title: 'Sorting Algorithms' },
      { id: 'binary-search', title: 'Binary Search' },
      { id: 'two-pointers', title: 'Two Pointers & Sliding Window' },
      { id: 'divide-conquer', title: 'Divide & Conquer' },
      { id: 'greedy', title: 'Greedy Algorithms' },
    ]
  }
};

// TOPIC 1: Sorting Algorithms
const sortingTopic = {
  title: 'Sorting Algorithms',
  subtitle: 'Merge, Quick, Heap, Non-Comparison & Timsort — trade-offs, algorithms, and implementations',
  sections: [
    {
      heading: 'What is Sorting?',
      text: 'Sorting is the process of arranging a collection of data elements in a specific order (typically ascending or descending). It is one of the most fundamental operations in computer science. Efficient sorting is crucial for optimizing other algorithms (such as binary search, database index creation, set intersection, and data visualization) that require sorted data.',
      list: [
        '<strong>Comparison-Based Lower Bound:</strong> Any deterministic comparison-based sorting algorithm requires at least Ω(n log n) comparisons in the worst case.',
        '<strong>Non-Comparison Sorting:</strong> Algorithms like Counting Sort and Radix Sort bypass the comparison lower bound to achieve O(n + k) time by exploiting structural properties of numbers.',
        '<strong>Stability:</strong> A stable sort preserves the relative input order of records with equal keys.',
        '<strong>In-Place Sorting:</strong> An in-place algorithm sorts the array using O(1) or O(log n) auxiliary memory without allocating a full duplicate array.',
        '<strong>Adaptivity:</strong> An adaptive sort executes faster (e.g. O(n) time) when the input array is already partially or fully sorted.'
      ]
    },
    {
      heading: 'Components & Core Taxonomy',
      text: 'Understanding sorting requires evaluating six fundamental attributes for every algorithm:',
      list: [
        '<strong>Key Comparison Cost:</strong> The number of element comparisons required during execution.',
        '<strong>Element Swap / Move Cost:</strong> The cost of copying or swapping elements in memory.',
        '<strong>Stability:</strong> Crucial when sorting multi-attribute data (e.g., sort by First Name, then by Last Name).',
        '<strong>Space Overhead:</strong> Auxiliary memory consumed beyond the input container.',
        '<strong>Cache Locality:</strong> Sequential memory access (arrays) triggers CPU hardware prefetching, outperforming pointer-chasing structures.',
        '<strong>Worst-Case Degeneracy:</strong> Susceptibility to pathological input distributions (e.g., Quick Sort on sorted inputs with naive pivot).'
      ]
    },
    {
      heading: 'Comparison Sort Lower Bound',
      text: 'The Ω(n log n) lower bound for comparison sorting can be proven using a decision tree model. For n elements, there are n! possible permutations. A binary decision tree of height h has at most 2^h leaves, so 2^h ≥ n! → h ≥ log2(n!) = Ω(n log n).',
      diagram: {
        caption: 'Decision Tree Model for Comparison Sorting (3 elements: 3! = 6 leaves)',
        chart: `flowchart TD
    Root["Compare a vs b"] -->|a < b| L1["Compare b vs c"]
    Root -->|a >= b| R1["Compare a vs c"]
    L1 -->|b < c| Res1["[a, b, c]"]
    L1 -->|b >= c| L2["Compare a vs c"]
    L2 -->|a < c| Res2["[a, c, b]"]
    L2 -->|a >= c| Res3["[c, a, b]"]
    R1 -->|a < c| Res4["[b, a, c]"]
    R1 -->|a >= c| R2["Compare b vs c"]
    R2 -->|b < c| Res5["[b, c, a]"]
    R2 -->|b >= c| Res6["[c, b, a]"]
    style Root fill:#3498db,color:#fff
    style Res1 fill:#2ecc71,color:#fff
    style Res6 fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Algorithm Visualizations',
      text: 'Different sorting paradigms employ distinct structural strategies to organize data.',
      diagram: {
        caption: 'Merge Sort: Divide & Conquer Tree',
        chart: `flowchart TD
    Sub1["Split: [38, 27, 43, 3, 9, 82, 10]"] --> Left1["[38, 27, 43]"]
    Sub1 --> Right1["[3, 9, 82, 10]"]
    Left1 --> L21["[38]"]
    Left1 --> L22["[27, 43]"]
    Right1 --> R21["[3, 9]"]
    Right1 --> R22["[82, 10]"]
    L22 --> L31["[27]"]
    L22 --> L32["[43]"]
    R21 --> R31["[3]"]
    R21 --> R32["[9]"]
    R22 --> R33["[82]"]
    R22 --> R34["[10]"]
    style Sub1 fill:#9b59b6,color:#fff`
      }
    },
    {
      diagram: {
        caption: 'Quick Sort: Lomuto Partition Mechanics around Pivot (p = 4)',
        chart: `flowchart LR
    subgraph Array["Input Array: [3, 8, 2, 5, 1, 4]"]
      direction LR
      A0["3"] --- A1["8"] --- A2["2"] --- A3["5"] --- A4["1"] --- P["Pivot: 4"]
    end
    subgraph Partitioned["After Partitioning"]
      direction LR
      L["Less than 4: [3, 2, 1]"] <--> PivotPos["Pivot: [4]"] <--> G["Greater than 4: [8, 5]"]
    end
    Array ==> Partitioned
    style PivotPos fill:#f1c40f,color:#000
    style L fill:#2ecc71,color:#fff
    style G fill:#e74c3c,color:#fff`
      }
    },
    {
      heading: 'Types of Sorting Algorithms',
      text: 'Sorting algorithms fall into distinct operational categories based on their design patterns and memory access behaviors.'
    },
    {
      heading: 'Comparison vs Non-Comparison Sorts',
      text: 'Comparison sorts (Merge, Quick, Heap) compare element values directly and work on arbitrary data types. Non-comparison sorts (Counting, Radix, Bucket) use numeric key properties and integer digit distribution to achieve linear time O(n + k).',
      diagram: {
        caption: 'Non-Comparison Counting Sort Frequency Array & Prefix Sum Positioning',
        chart: `flowchart LR
    subgraph Input["Input: [4, 2, 2, 8, 3]"]
      I1["4, 2, 2, 8, 3"]
    end
    subgraph Count["Count Array (Frequencies)"]
      C1["idx 2: 2 | idx 3: 1 | idx 4: 1 | idx 8: 1"]
    end
    subgraph Prefix["Prefix Sum (Output Indices)"]
      P1["idx 2: 2 | idx 3: 3 | idx 4: 4 | idx 8: 5"]
    end
    subgraph Sorted["Output: [2, 2, 3, 4, 8]"]
      S1["2, 2, 3, 4, 8"]
    end
    Input --> Count --> Prefix --> Sorted
    style Count fill:#3498db,color:#fff
    style Prefix fill:#f1c40f,color:#000
    style Sorted fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Advantages',
      text: 'Choosing the correct sorting algorithm unlocks optimal performance for downstream algorithms and system operations.',
      list: [
        '<strong>Enables O(log n) Binary Search:</strong> Sorting once converts O(n) linear search into fast O(log n) queries.',
        '<strong>Duplicate & Frequency Detection:</strong> Adjacent items in a sorted array allow O(n) single-pass duplicate identification.',
        '<strong>Sweepline & Geometric Algorithms:</strong> Sorting event coordinates enables efficient interval merging and collision detection.',
        '<strong>Set Operations:</strong> Intersection, union, and difference between two sorted arrays take O(n + m) time.',
        '<strong>Database Query Optimization:</strong> Indexing via sorted B+Trees enables fast range queries and ORDER BY execution.'
      ]
    },
    {
      heading: 'Disadvantages & Limitations',
      text: 'Sorting carries computational trade-offs that must be managed in high-throughput systems.',
      list: [
        '<strong>O(n log n) Computational Overhead:</strong> For massive datasets, sorting can be a major CPU bottleneck.',
        '<strong>Auxiliary Memory Costs:</strong> Out-of-place algorithms like Merge Sort require O(n) extra RAM, which can cause allocation pressure.',
        '<strong>Unstable Reordering:</strong> Unstable sorts can break existing order in multi-column database results.',
        '<strong>Heap Sort Cache Unfriendliness:</strong> Heap parent-child index jumps (i → 2i+1) cause frequent CPU cache misses.',
        '<strong>Quick Sort Worst-Case Risk:</strong> Bad pivot choices lead to O(n²) time and deep call stack recursion.'
      ]
    },
    {
      heading: 'Sorting Operations Breakdown',
      text: 'Each major sorting algorithm is explained below with its mechanism, complexity, visual diagram, and code implementation.'
    },
    {
      heading: 'Operation 1: Merge Sort',
      text: '<strong>What it does:</strong> Recursively splits the array into two halves until singletons remain, then merges sorted subarrays.<br/><strong>Best efficiency:</strong> Guaranteed O(n log n) time in all cases. Requires O(n) auxiliary space.',
      diagram: {
        caption: 'Merge Step of Two Sorted Subarrays',
        chart: `flowchart LR
    A["Subarray 1: [2, 7, 8]"] --> M["Merge Engine"]
    B["Subarray 2: [1, 4, 9]"] --> M
    M --> Out["Merged Output: [1, 2, 4, 7, 8, 9]"]
    style M fill:#9b59b6,color:#fff
    style Out fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    merged = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged

# Time: O(n log n) all cases | Space: O(n)`,
      language: 'python'
    },
    {
      heading: 'Operation 2: Quick Sort',
      text: '<strong>What it does:</strong> Selects a pivot element, partitions elements into less-than and greater-than sub-arrays, and recursively sorts each side.<br/><strong>Best efficiency:</strong> O(n log n) average time, O(1) auxiliary space (in-place). Worst case is O(n²) if naive pivot selection is used.',
      diagram: {
        caption: 'Randomized Pivot Quick Sort Partitioning',
        chart: `flowchart LR
    P["Pivot Selection (Random)"] --> Part["Lomuto / Hoare Partition"]
    Part --> L["Left Sub-array (< Pivot)"]
    Part --> R["Right Sub-array (>= Pivot)"]
    style P fill:#f1c40f,color:#000
    style Part fill:#3498db,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `import random

def quick_sort(arr):
    def _quick_sort(items, low, high):
        if low < high:
            p_idx = _partition(items, low, high)
            _quick_sort(items, low, p_idx - 1)
            _quick_sort(items, p_idx + 1, high)

    def _partition(items, low, high):
        rand_idx = random.randint(low, high)
        items[rand_idx], items[high] = items[high], items[rand_idx]
        pivot = items[high]
        i = low - 1
        for j in range(low, high):
            if items[j] <= pivot:
                i += 1
                items[i], items[j] = items[j], items[i]
        items[i + 1], items[high] = items[high], items[i + 1]
        return i + 1

    _quick_sort(arr, 0, len(arr) - 1)
    return arr

# Time: O(n log n) avg, O(n²) worst | Space: O(log n) stack`,
      language: 'python'
    },
    {
      heading: 'Operation 3: Heap Sort',
      text: '<strong>What it does:</strong> Builds a Max-Heap from the input array in O(n) time, then repeatedly extracts the maximum element to the end of the array.<br/><strong>Best efficiency:</strong> Guaranteed O(n log n) time and strictly O(1) extra space. Not stable.',
      diagram: {
        caption: 'Heap Sort Max-Heap Sift-Down Extraction Step',
        chart: `flowchart TD
    Max["Max Element (Root: 90)"] -->|Swap with Tail| End["Place at Array End"]
    NewRoot["New Root (Unsorted Element)"] -->|Sift Down| Restore["Restore Max-Heap Property O(log n)"]
    style Max fill:#e74c3c,color:#fff
    style Restore fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def heap_sort(arr):
    n = len(arr)

    def heapify(items, size, root):
        largest = root
        left = 2 * root + 1
        right = 2 * root + 2

        if left < size and items[left] > items[largest]:
            largest = left
        if right < size and items[right] > items[largest]:
            largest = right
        if largest != root:
            items[root], items[largest] = items[largest], items[root]
            heapify(items, size, largest)

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

# Time: O(n log n) all cases | Space: O(1) in-place`,
      language: 'python'
    },
    {
      heading: 'Operation 4: Counting Sort',
      text: '<strong>What it does:</strong> Counts element frequencies in an auxiliary array, computes prefix sums to determine exact output positions, and places elements in linear time.<br/><strong>Best efficiency:</strong> O(n + k) time where k is the value range. O(n + k) space. Extremely fast when k is O(n).',
      diagram: {
        caption: 'Counting Sort Element Placement',
        chart: `flowchart LR
    Val["Value: 3"] --> CountArr["Count[3] = 4"] --> Pos["Prefix Sum = Position 4"] --> Out["Place at Output[3]"]
    style Val fill:#3498db,color:#fff
    style Out fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def counting_sort(arr):
    if not arr:
        return arr
    min_val, max_val = min(arr), max(arr)
    k = max_val - min_val + 1
    count = [0] * k
    output = [0] * len(arr)

    for num in arr:
        count[num - min_val] += 1

    for i in range(1, k):
        count[i] += count[i - 1]

    for num in reversed(arr):
        output[count[num - min_val] - 1] = num
        count[num - min_val] -= 1

    return output

# Time: O(n + k) | Space: O(n + k) | Stable`,
      language: 'python'
    },
    {
      heading: 'Operation 5: Radix Sort',
      text: '<strong>What it does:</strong> Sorts numbers digit by digit from least significant digit (LSD) to most significant digit (MSD) using a stable sub-sort (like Counting Sort).<br/><strong>Best efficiency:</strong> O(d * (n + k)) time where d is the number of digits and k is the radix (e.g. 10 for base-10 integers).',
      diagram: {
        caption: 'Radix Sort LSD Digit Passes',
        chart: `flowchart LR
    In["[170, 45, 75, 90, 802, 24, 2, 66]"] --> Pass1["Pass 1 (1s digit)"]
    Pass1 --> Pass2["Pass 2 (10s digit)"]
    Pass2 --> Pass3["Pass 3 (100s digit)"]
    Pass3 --> Out["Sorted Output"]
    style Out fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def radix_sort(arr):
    if not arr:
        return arr
    max_num = max(arr)
    exp = 1
    while max_num // exp > 0:
        arr = _counting_sort_by_digit(arr, exp)
        exp *= 10
    return arr

def _counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1

    return output

# Time: O(d * (n + k)) | Space: O(n + k) | Stable`,
      language: 'python'
    },
    {
      heading: 'Operation 6: Timsort (Hybrid Merge & Insertion Sort)',
      text: '<strong>What it does:</strong> Finds naturally ordered runs in data, uses Insertion Sort on small runs (minrun size 32 or 64), and merges runs using an adaptive gallop mode.<br/><strong>Best efficiency:</strong> O(n) best-case time for already sorted data; guaranteed O(n log n) worst-case time; O(n) space. Used by Python (list.sort) and Java (Arrays.sort for objects).',
      diagram: {
        caption: 'Timsort Run Identification & Merging',
        chart: `flowchart LR
    Data["Raw Data Stream"] --> R1["Run 1 (Insertion Sorted)"]
    Data --> R2["Run 2 (Insertion Sorted)"]
    R1 --> Merge["Galloping Merge Engine"]
    R2 --> Merge
    Merge --> Out["Sorted Output"]
    style Merge fill:#9b59b6,color:#fff
    style Out fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Sorting Algorithms Library in Python',
        code: `class SortingSuite:
    @staticmethod
    def merge_sort(arr):
        if len(arr) <= 1:
            return arr
        mid = len(arr) // 2
        left = SortingSuite.merge_sort(arr[:mid])
        right = SortingSuite.merge_sort(arr[mid:])
        
        merged = []
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1
        merged.extend(left[i:])
        merged.extend(right[j:])
        return merged

    @staticmethod
    def quick_sort(arr):
        def _qs(lst, low, high):
            if low < high:
                pivot_idx = _partition(lst, low, high)
                _qs(lst, low, pivot_idx - 1)
                _qs(lst, pivot_idx + 1, high)

        def _partition(lst, low, high):
            pivot = lst[high]
            i = low - 1
            for j in range(low, high):
                if lst[j] <= pivot:
                    i += 1
                    lst[i], lst[j] = lst[j], lst[i]
            lst[i + 1], lst[high] = lst[high], lst[i + 1]
            return i + 1

        copy_arr = list(arr)
        _qs(copy_arr, 0, len(copy_arr) - 1)
        return copy_arr

    @staticmethod
    def heap_sort(arr):
        items = list(arr)
        n = len(items)

        def heapify(size, root):
            largest = root
            l, r = 2 * root + 1, 2 * root + 2
            if l < size and items[l] > items[largest]:
                largest = l
            if r < size and items[r] > items[largest]:
                largest = r
            if largest != root:
                items[root], items[largest] = items[largest], items[root]
                heapify(size, largest)

        for i in range(n // 2 - 1, -1, -1):
            heapify(n, i)
        for i in range(n - 1, 0, -1):
            items[i], items[0] = items[0], items[i]
            heapify(i, 0)
        return items

    @staticmethod
    def counting_sort(arr):
        if not arr:
            return arr
        min_v, max_v = min(arr), max(arr)
        k = max_v - min_v + 1
        count = [0] * k
        out = [0] * len(arr)
        for x in arr:
            count[x - min_v] += 1
        for i in range(1, k):
            count[i] += count[i - 1]
        for x in reversed(arr):
            out[count[x - min_v] - 1] = x
            count[x - min_v] -= 1
        return out

if __name__ == '__main__':
    data = [38, 27, 43, 3, 9, 82, 10]
    print("Original:", data)
    print("Merge Sort:", SortingSuite.merge_sort(data))
    print("Quick Sort:", SortingSuite.quick_sort(data))
    print("Heap Sort: ", SortingSuite.heap_sort(data))
    print("Counting:  ", SortingSuite.counting_sort(data))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Sorting Suite Class in Java',
        code: `import java.util.Arrays;

public class SortingSuite {

    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length <= 1) return;
        int[] aux = new int[arr.length];
        mergeSortRecursive(arr, aux, 0, arr.length - 1);
    }

    private static void mergeSortRecursive(int[] arr, int[] aux, int low, int high) {
        if (low >= high) return;
        int mid = low + (high - low) / 2;
        mergeSortRecursive(arr, aux, low, mid);
        mergeSortRecursive(arr, aux, mid + 1, high);
        merge(arr, aux, low, mid, high);
    }

    private static void merge(int[] arr, int[] aux, int low, int mid, int high) {
        for (int k = low; k <= high; k++) aux[k] = arr[k];
        int i = low, j = mid + 1;
        for (int k = low; k <= high; k++) {
            if (i > mid) arr[k] = aux[j++];
            else if (j > high) arr[k] = aux[i++];
            else if (aux[j] < aux[i]) arr[k] = aux[j++];
            else arr[k] = aux[i++];
        }
    }

    public static void quickSort(int[] arr) {
        if (arr == null || arr.length <= 1) return;
        quickSortRecursive(arr, 0, arr.length - 1);
    }

    private static void quickSortRecursive(int[] arr, int low, int high) {
        if (low < high) {
            int pIdx = partition(arr, low, high);
            quickSortRecursive(arr, low, pIdx - 1);
            quickSortRecursive(arr, pIdx + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
            }
        }
        int tmp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = tmp;
        return i + 1;
    }

    public static void heapSort(int[] arr) {
        int n = arr.length;
        for (int i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i);
        for (int i = n - 1; i > 0; i--) {
            int tmp = arr[0]; arr[0] = arr[i]; arr[i] = tmp;
            heapify(arr, i, 0);
        }
    }

    private static void heapify(int[] arr, int n, int root) {
        int largest = root;
        int left = 2 * root + 1, right = 2 * root + 2;
        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest != root) {
            int tmp = arr[root]; arr[root] = arr[largest]; arr[largest] = tmp;
            heapify(arr, n, largest);
        }
    }

    public static void main(String[] args) {
        int[] data = {38, 27, 43, 3, 9, 82, 10};
        int[] copy1 = data.clone();
        mergeSort(copy1);
        System.out.println("Merge Sort: " + Arrays.toString(copy1));

        int[] copy2 = data.clone();
        quickSort(copy2);
        System.out.println("Quick Sort: " + Arrays.toString(copy2));

        int[] copy3 = data.clone();
        heapSort(copy3);
        System.out.println("Heap Sort:  " + Arrays.toString(copy3));
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      text: 'Comprehensive comparison of time complexity, space overhead, stability, and adaptivity across major sorting algorithms.',
      table: {
        headers: ['Algorithm', 'Best Time', 'Avg Time', 'Worst Time', 'Space', 'Stable?', 'Best Use Case'],
        rows: [
          ['Merge Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes', 'Guaranteed worst-case limits; linked lists; parallel sorting'],
          ['Quick Sort', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)', 'No', 'Fastest general-purpose in-place array sorting'],
          ['Heap Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)', 'No', 'Strict embedded systems with tight memory limits'],
          ['Timsort', 'O(n)', 'O(n log n)', 'O(n log n)', 'O(n)', 'Yes', 'Real-world software (Python list.sort, Java object sort)'],
          ['Counting Sort', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'O(n + k)', 'Yes', 'Small bounded integer ranges (e.g., ages 0-120)'],
          ['Radix Sort', 'O(d*(n+k))', 'O(d*(n+k))', 'O(d*(n+k))', 'O(n + k)', 'Yes', 'Fixed-length keys (IP addresses, 64-bit integers)'],
          ['Insertion Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)', 'Yes', 'Very small arrays (n < 32) or nearly sorted input']
        ]
      },
      note: 'Interview tip: Always clarify whether memory constraints require an in-place sort, whether equal key order matters (stability), and whether worst-case bounds are critical (avoiding Quick Sort’s O(n²) worst case).'
    },
    {
      heading: 'Real-World Applications',
      text: 'Sorting is heavily optimized inside core infrastructure software across industries.',
      list: [
        '<strong>Database Index B+Trees & External Merge Sort:</strong> When sorting 1TB of log data on a machine with 4GB RAM, database engines use <em>External Merge Sort</em> to sort chunk files on disk and merge them.',
        '<strong>E-commerce Search & Product Filtering:</strong> Sorting millions of product records by price, rating, or relevance score using Timsort and multi-attribute stable sorts.',
        '<strong>Graphics Z-Buffer & Depth Rendering:</strong> 3D game engines use depth sorting (Painter’s Algorithm) to render polygons from back to front.',
        '<strong>OS Job Prioritization & Schedulers:</strong> Real-time operating systems maintain task priority queues powered by heap sorting.',
        '<strong>Search Engines & TF-IDF Ranking:</strong> Search indexing pipelines sort document IDs by relevance weights to generate quick search result snippets.',
        '<strong>Gene Sequencing & DNA Alignment:</strong> Bioinformatics tools sort sequence k-mers using Radix Sort to match genomic reads to reference genomes.',
        '<strong>Financial High-Frequency Trading (HFT):</strong> Limit order books sort bids and asks in real-time to match trades at sub-microsecond latency.',
        '<strong>Standard Library Language Runtimes:</strong> Python (list.sort), Java (Arrays.sort), and Rust (slice::sort) all rely on Timsort or pdqsort (Pattern-Defeating Quicksort).'
      ],
      note: 'Key takeaway: Most real-world standard libraries use hybrid algorithms (like Timsort or IntroSort) that combine Quick Sort, Merge Sort, and Insertion Sort to exploit the strengths of each.'
    },
    {
      heading: 'Top Interview Questions on Sorting',
      text: 'Master these classic interview problems on sorting, partitioning, and custom comparator ordering.',
      note: 'Pattern cheat sheet: Use Quickselect for kth element selection in O(n); use 3-pointer partition for 3-way splits; use custom comparators for string & interval sorting.'
    },
    {
      heading: 'Practice Question 1: Kth Largest Element in an Array (LeetCode 215, Medium)',
      text: '<strong>Problem:</strong> Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k</code>-th largest element in the array.<br/><strong>Key idea:</strong> Use Quickselect (Lomuto partition) to achieve O(n) average time complexity, or a Min-Heap of size k for O(n log k) time.<br/><strong>Complexity:</strong> Time O(n) average, O(n²) worst; Space O(1).',
      example: {
        title: 'Python Solution (Quickselect)',
        code: `import random

def findKthLargest(nums, k):
    target = len(nums) - k
    
    def quickselect(left, right):
        pivot_idx = random.randint(left, right)
        nums[pivot_idx], nums[right] = nums[right], nums[pivot_idx]
        pivot = nums[right]
        
        p = left
        for i in range(left, right):
            if nums[i] <= pivot:
                nums[p], nums[i] = nums[i], nums[p]
                p += 1
        nums[p], nums[right] = nums[right], nums[p]
        
        if p == target:
            return nums[p]
        elif p < target:
            return quickselect(p + 1, right)
        else:
            return quickselect(left, p - 1)
            
    return quickselect(0, len(nums) - 1)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution (Min-Heap O(n log k))',
        code: `import java.util.PriorityQueue;

public class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Sort Colors / Dutch National Flag (LeetCode 75, Medium)',
      text: '<strong>Problem:</strong> Given an array <code>nums</code> with <code>n</code> objects colored red (0), white (1), or blue (2), sort them in-place so that objects of the same color are adjacent.<br/><strong>Key idea:</strong> Use Dijkstra\'s 3-way partitioning with three pointers: <code>low</code> (boundary for 0s), <code>mid</code> (current inspector), and <code>high</code> (boundary for 2s).<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def sortColors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
    return nums`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] == 0) {
                int tmp = nums[low]; nums[low] = nums[mid]; nums[mid] = tmp;
                low++; mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                int tmp = nums[mid]; nums[mid] = nums[high]; nums[high] = tmp;
                high--;
            }
        }
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Merge Intervals (LeetCode 56, Medium)',
      text: '<strong>Problem:</strong> Given an array of <code>intervals</code> where <code>intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals.<br/><strong>Key idea:</strong> Sort intervals by start time. Iterate through and merge interval <code>i</code> into the last merged interval if <code>intervals[i][0] <= last_merged[1]</code>.<br/><strong>Complexity:</strong> Time O(n log n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `import java.util.*;

public class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> merged = new ArrayList<>();
        for (int[] interval : intervals) {
            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
                merged.add(interval);
            } else {
                merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Sort List (LeetCode 148, Medium)',
      text: '<strong>Problem:</strong> Given the head of a linked list, return the list after sorting it in O(n log n) time and O(1) space.<br/><strong>Key idea:</strong> Use top-down or bottom-up Merge Sort. Find the middle node using fast/slow pointers, cut the list in two, sort recursively, and merge.<br/><strong>Complexity:</strong> Time O(n log n), Space O(log n) stack space.',
      example: {
        title: 'Python Solution',
        code: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sortList(head):
    if not head or not head.next:
        return head

    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    mid = slow.next
    slow.next = None

    left = sortList(head)
    right = sortList(mid)

    dummy = ListNode(0)
    tail = dummy
    while left and right:
        if left.val <= right.val:
            tail.next = left
            left = left.next
        else:
            tail.next = right
            right = right.next
        tail = tail.next
    tail.next = left or right
    return dummy.next`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode mid = slow.next;
        slow.next = null;

        ListNode left = sortList(head);
        ListNode right = sortList(mid);

        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;
        while (left != null && right != null) {
            if (left.val <= right.val) {
                tail.next = left; left = left.next;
            } else {
                tail.next = right; right = right.next;
            }
            tail = tail.next;
        }
        tail.next = (left != null) ? left : right;
        return dummy.next;
    }
}`,
        language: 'java',
        type: 'code'
      }
    }
  ]
};

// TOPIC 2: Binary Search
const binarySearchTopic = {
  title: 'Binary Search',
  subtitle: 'Logarithmic search in sorted arrays and monotonic predicate spaces',
  sections: [
    {
      heading: 'What is Binary Search?',
      text: 'Binary Search is an efficient algorithm for finding an item in a sorted list by repeatedly halving the search interval. Instead of scanning n elements linearly, binary search compares the target with the middle element. If they do not match, the half in which the target cannot lie is eliminated, reducing the search space exponentially.',
      list: [
        '<strong>Logarithmic Time Complexity:</strong> Reduces a search space of size n to 1 in ⌈log2 n⌉ steps (e.g., searching 1 billion items takes ~30 steps).',
        '<strong>Sorted Constraint:</strong> Requires elements to be in sorted order or monotonic (where a predicate transitions from False to True).',
        '<strong>Integer Overflow Invariant:</strong> Middle index calculation must use <code>mid = low + (high - low) // 2</code> instead of <code>(low + high) // 2</code> to avoid integer overflow in statically-typed languages.',
        '<strong>Boundary Invariants:</strong> Requires strict discipline around closed intervals <code>[low, high]</code> vs half-open intervals <code>[low, high)</code>.',
        '<strong>Implicit Binary Search:</strong> Can be applied beyond arrays to search spaces of continuous or discrete numbers (Binary Search on Answer).'
      ]
    },
    {
      heading: 'Components & Search Space Invariants',
      text: 'A binary search consists of three fundamental components:',
      list: [
        '<strong>Search Space Boundaries:</strong> The current active range bounded by <code>low</code> and <code>high</code>.',
        '<strong>Midpoint Calculation:</strong> The candidate index evaluated in each iteration.',
        '<strong>Decision Predicate / Comparator:</strong> A boolean test returning whether <code>mid</code> is target, too small, or too large.'
      ]
    },
    {
      heading: 'Search Space Visualizations',
      text: 'Visualizing how binary search eliminates half of the remaining elements at each step.',
      diagram: {
        caption: 'Interval Halving Mechanics on Sorted Array [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] (Target = 23)',
        chart: `flowchart TD
    Step1["Step 1: low=0, high=9, mid=4 (val=16 < 23)"] -->|Eliminate Left Half| Step2["Step 2: low=5, high=9, mid=7 (val=56 > 23)"]
    Step2 -->|Eliminate Right Half| Step3["Step 3: low=5, high=6, mid=5 (val=23 == 23)"]
    Step3 --> Found["TARGET FOUND at Index 5!"]
    style Step1 fill:#3498db,color:#fff
    style Step2 fill:#3498db,color:#fff
    style Found fill:#2ecc71,color:#fff`
      }
    },
    {
      diagram: {
        caption: 'Lower Bound vs Upper Bound on Array with Duplicates [1, 2, 2, 2, 3, 5] (Target = 2)',
        chart: `flowchart LR
    subgraph Array["[1, 2, 2, 2, 3, 5]"]
      direction LR
      A0["1"] --- A1["2 (LB)"] --- A2["2"] --- A3["2"] --- A4["3 (UB)"] --- A5["5"]
    end
    LB["Lower Bound (bisect_left): idx 1\nFirst element >= 2"] --> A1
    UB["Upper Bound (bisect_right): idx 4\nFirst element > 2"] --> A4
    style A1 fill:#2ecc71,color:#fff
    style A4 fill:#e74c3c,color:#fff`
      }
    },
    {
      heading: 'Types & Patterns of Binary Search',
      text: 'Binary search applies to several distinct structural problem domains.'
    },
    {
      heading: 'Standard Match vs Boundary Search vs Answer Space',
      text: 'Standard match searches for a specific target value. Boundary search (lower/upper bound) finds insertion points or duplicated key boundaries. Binary search on answer operates on a monotonic function f(x) -> bool to find the minimum/maximum valid parameter x.',
      diagram: {
        caption: 'Monotonic Predicate Space [F, F, F, T, T, T] — Finding First True',
        chart: `flowchart LR
    P0["x=1: False"] --- P1["x=2: False"] --- P2["x=3: False"] --- P3["x=4: True (First True)"] --- P4["x=5: True"]
    P3 ==> FirstTrue["Optimal Min Target x = 4"]
    style P3 fill:#2ecc71,color:#fff
    style FirstTrue fill:#f1c40f,color:#000`
      }
    },
    {
      heading: 'Advantages',
      text: 'Binary search provides unparalleled logarithmic efficiency for query and optimization tasks.',
      list: [
        '<strong>Extreme Speed O(log n):</strong> Performs 30 comparisons for 1 billion items, vs 1 billion comparisons for linear search.',
        '<strong>Minimal Space O(1):</strong> Iterative binary search uses constant auxiliary space.',
        '<strong>Solves Optimization Problems:</strong> Finds optimal threshold values without computing every state.',
        '<strong>Scales to Infinite / Continuous Ranges:</strong> Works on continuous real numbers (floating point binary search).'
      ]
    },
    {
      heading: 'Disadvantages & Pitfalls',
      text: 'Common implementation errors and prerequisites for binary search.',
      list: [
        '<strong>Requires Sorted Data:</strong> Must sort first (O(n log n)), which is inefficient if doing only a single search.',
        '<strong>Off-by-One Errors:</strong> Misplacing <code>low = mid</code> vs <code>low = mid + 1</code> causes infinite loops.',
        '<strong>Integer Overflow:</strong> <code>(low + high) / 2</code> overflows when low + high > 2^31 - 1.',
        '<strong>Requires Random Access:</strong> Inefficient on linked lists (O(n) pointer walking).'
      ]
    },
    {
      heading: 'Binary Search Patterns Breakdown',
      text: 'Deep dive into the main binary search templates used in technical interviews.'
    },
    {
      heading: 'Pattern 1: Standard Exact Match',
      text: '<strong>What it does:</strong> Find the exact index of target in a sorted array.<br/><strong>Template:</strong> Closed interval <code>[low, high]</code> with <code>while low <= high:</code>.',
      code: `def binary_search(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

# Time: O(log n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 2: Lower Bound (bisect_left)',
      text: '<strong>What it does:</strong> Find the first index where <code>nums[i] >= target</code>.<br/><strong>Template:</strong> Half-open interval <code>[low, high)</code> with <code>while low < high:</code>.',
      code: `def lower_bound(nums, target):
    low, high = 0, len(nums)
    while low < high:
        mid = low + (high - low) // 2
        if nums[mid] < target:
            low = mid + 1
        else:
            high = mid
    return low

# Time: O(log n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 3: Upper Bound (bisect_right)',
      text: '<strong>What it does:</strong> Find the first index where <code>nums[i] > target</code>.<br/><strong>Template:</strong> Half-open interval <code>[low, high)</code> with <code>while low < high:</code>.',
      code: `def upper_bound(nums, target):
    low, high = 0, len(nums)
    while low < high:
        mid = low + (high - low) // 2
        if nums[mid] <= target:
            low = mid + 1
        else:
            high = mid
    return low

# Time: O(log n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 4: Search in Rotated Sorted Array',
      text: '<strong>What it does:</strong> Search in an array sorted then rotated.<br/><strong>Key Idea:</strong> At least one half (left or right) is always strictly sorted.',
      code: `def search_rotated(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target:
            return mid
        
        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1

# Time: O(log n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 5: Binary Search on Answer Space (Monotonic Predicates)',
      text: '<strong>What it does:</strong> Find min/max valid parameter k satisfying condition <code>feasible(k)</code>.<br/><strong>Example:</strong> Koko Eating Bananas (min speed k to finish in H hours).',
      code: `def min_eating_speed(piles, h):
    def feasible(speed):
        return sum((p + speed - 1) // speed for p in piles) <= h

    low, high = 1, max(piles)
    ans = high
    while low <= high:
        mid = low + (high - low) // 2
        if feasible(mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans

# Time: O(n log(max_pile)) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Binary Search Suite in Python',
        code: `class BinarySearchSuite:
    @staticmethod
    def exact_search(nums, target):
        low, high = 0, len(nums) - 1
        while low <= high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return -1

    @staticmethod
    def lower_bound(nums, target):
        low, high = 0, len(nums)
        while low < high:
            mid = low + (high - low) // 2
            if nums[mid] < target:
                low = mid + 1
            else:
                high = mid
        return low

    @staticmethod
    def upper_bound(nums, target):
        low, high = 0, len(nums)
        while low < high:
            mid = low + (high - low) // 2
            if nums[mid] <= target:
                low = mid + 1
            else:
                high = mid
        return low

    @staticmethod
    def search_range(nums, target):
        lb = BinarySearchSuite.lower_bound(nums, target)
        if lb == len(nums) or nums[lb] != target:
            return [-1, -1]
        ub = BinarySearchSuite.upper_bound(nums, target)
        return [lb, ub - 1]

if __name__ == '__main__':
    nums = [1, 2, 2, 2, 3, 5, 8, 12]
    print("Exact search for 5:", BinarySearchSuite.exact_search(nums, 5))
    print("Lower bound for 2:", BinarySearchSuite.lower_bound(nums, 2))
    print("Upper bound for 2:", BinarySearchSuite.upper_bound(nums, 2))
    print("Search range for 2:", BinarySearchSuite.search_range(nums, 2))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Binary Search Suite Class in Java',
        code: `import java.util.Arrays;

public class BinarySearchSuite {

    public static int exactSearch(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public static int lowerBound(int[] nums, int target) {
        int low = 0, high = nums.length;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] < target) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    public static int upperBound(int[] nums, int target) {
        int low = 0, high = nums.length;
        while (low < high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] <= target) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    public static int[] searchRange(int[] nums, int target) {
        int lb = lowerBound(nums, target);
        if (lb == nums.length || nums[lb] != target) return new int[]{-1, -1};
        int ub = upperBound(nums, target);
        return new int[]{lb, ub - 1};
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 2, 3, 5, 8, 12};
        System.out.println("Exact Search for 5: " + exactSearch(nums, 5));
        System.out.println("Lower Bound for 2: " + lowerBound(nums, 2));
        System.out.println("Upper Bound for 2: " + upperBound(nums, 2));
        System.out.println("Range for 2: " + Arrays.toString(searchRange(nums, 2)));
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of binary search variants and bounds.',
      table: {
        headers: ['Variant', 'Time Complexity', 'Space Complexity', 'Notes'],
        rows: [
          ['Iterative Binary Search', 'O(log n)', 'O(1)', 'Standard implementation; zero call stack overhead'],
          ['Recursive Binary Search', 'O(log n)', 'O(log n)', 'Call stack uses log n stack frames'],
          ['Binary Search on Answer Space', 'O(k * log(range))', 'O(1)', 'k is cost of feasibility check function'],
          ['2D Matrix Binary Search', 'O(log(m * n))', 'O(1)', 'Treat matrix as flattened 1D array with row=mid/n, col=mid%n'],
          ['Rotated Array Search', 'O(log n)', 'O(1)', 'Determine which half is sorted in each step']
        ]
      },
      note: 'Interview tip: When solving optimization problems ("find min capacity...", "find max distance..."), always check if the problem can be phrased as a binary search on answer space!'
    },
    {
      heading: 'Real-World Applications',
      text: 'Binary search is foundational in high-performance computing and infrastructure systems.',
      list: [
        '<strong>Database B+Tree Index Queries:</strong> Navigating page nodes in B+Trees to execute O(log N) key lookups.',
        '<strong>Git Bisect Regression Debugging:</strong> Automated binary search across commit history to pinpoint breaking commits.',
        '<strong>Network Routing CIDR Prefix Matching:</strong> Finding longest prefix matches for IP addresses in router lookup tables.',
        '<strong>Game Engine Ray Casting:</strong> Binary searching heightfields and terrain meshes for precision collision points.',
        '<strong>Video Player Keyframe Seeking:</strong> Seeking to exact video timestamps by binary searching indexed keyframe offsets.',
        '<strong>OS Memory Virtual Page Lookup:</strong> Locating virtual memory addresses in page translation tables.',
        '<strong>Financial Options Implied Volatility:</strong> Binary searching Black-Scholes formula parameters for implied volatility.',
        '<strong>Cloud Autoscaler Target Metrics:</strong> Determining optimal pod count limits by binary searching capacity metrics.'
      ],
      note: 'Key insight: Any time a search space is sorted or monotonic, binary search provides exponential acceleration.'
    },
    {
      heading: 'Top Interview Questions on Binary Search',
      text: 'Eight essential interview questions covering all major binary search variations.',
      note: 'Pattern cheat sheet: For rotated arrays, check sorted half; for answer space, write feasibility function; for duplicates, use lower/upper bound templates.'
    },
    {
      heading: 'Practice Question 1: Search in Rotated Sorted Array (LeetCode 33, Medium)',
      text: '<strong>Problem:</strong> Given a rotated sorted array <code>nums</code> and a <code>target</code>, return index of target or -1.<br/><strong>Key idea:</strong> Mid splits array into one sorted half and one rotated half. Check if target lies within the sorted half.<br/><strong>Complexity:</strong> Time O(log n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def search(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if nums[mid] == target:
            return mid
        if nums[low] <= nums[mid]:
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public int search(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) return mid;
            if (nums[low] <= nums[mid]) {
                if (nums[low] <= target && target < nums[mid]) high = mid - 1;
                else low = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[high]) low = mid + 1;
                else high = mid - 1;
            }
        }
        return -1;
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Koko Eating Bananas (LeetCode 875, Medium)',
      text: '<strong>Problem:</strong> Given <code>piles</code> of bananas and <code>h</code> hours, find minimum integer speed <code>k</code> to eat all bananas.<br/><strong>Key idea:</strong> Binary search on speed <code>k</code> in range <code>[1, max(piles)]</code>. Test feasibility in O(n).<br/><strong>Complexity:</strong> Time O(n log(max_pile)), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `import math

def minEatingSpeed(piles, h):
    low, high = 1, max(piles)
    ans = high
    while low <= high:
        mid = low + (high - low) // 2
        hours_needed = sum(math.ceil(p / mid) for p in piles)
        if hours_needed <= h:
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    return ans`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int low = 1, high = 0;
        for (int p : piles) high = Math.max(high, p);
        int ans = high;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            long hours = 0;
            for (int p : piles) hours += (p + mid - 1) / mid;
            if (hours <= h) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}`,
        language: 'java',
        type: 'code'
      }
    }
  ]
};

// TOPIC 3: Two Pointers & Sliding Window
const twoPointersTopic = {
  title: 'Two Pointers & Sliding Window',
  subtitle: 'Linear-time algorithms for array processing, subarray optimization, and window tracking',
  sections: [
    {
      heading: 'What are Two Pointers & Sliding Window?',
      text: 'Two Pointers and Sliding Window are algorithmic techniques designed to reduce time complexity from O(n²) or O(n³) brute-force nested loops down to O(n) linear scans. By keeping two index pointers (e.g. left and right) and moving them based on a condition or mathematical invariant, we systematically traverse the data without redundant computation.',
      list: [
        '<strong>Opposite-Direction Pointers:</strong> One pointer starts at index 0 (left) and the other at index n-1 (right). They move inward until they meet (e.g., Two Sum Sorted, Container With Most Water).',
        '<strong>Same-Direction / Sliding Window:</strong> Both pointers start at index 0 and move rightward. The region between left and right represents a dynamic or fixed subarray window.',
        '<strong>Fast & Slow Pointers (Floyd Cycle Finding):</strong> Two pointers move at different speeds (e.g., slow moves 1 step, fast moves 2 steps) to detect cycles or find middle elements.',
        '<strong>Monotonic State Maintenance:</strong> Sliding window problems maintain window state (e.g. sum, character frequencies, deque max) in O(1) time as the window slides.'
      ]
    },
    {
      heading: 'Components & Window Mechanics',
      text: 'A sliding window framework operates through four core actions:',
      list: [
        '<strong>Expand Window (Right Pointer):</strong> Include <code>nums[right]</code> in the window state.',
        '<strong>Validity Check:</strong> Determine if the window state violates constraints (e.g., sum > target, duplicate characters).',
        '<strong>Shrink Window (Left Pointer):</strong> Incrementally remove <code>nums[left]</code> from state until validity is restored.',
        '<strong>Update Answer:</strong> Record maximum/minimum window length or subarray aggregate when valid.'
      ]
    },
    {
      heading: 'Visual Diagrams',
      text: 'Visualizing pointer movement patterns across array elements.',
      diagram: {
        caption: 'Opposite-Direction Two Pointers Converging on Sorted Array [1, 3, 4, 6, 8, 11] (Target Sum = 10)',
        chart: `flowchart LR
    subgraph Iter1["Iteration 1: L=0, R=5 | Sum=12 | Decrement R"]
      I1["L: 1"] --- I2["3"] --- I3["4"] --- I4["6"] --- I5["8"] --- I6["R: 11"]
    end
    subgraph Iter2["Iteration 2: L=0, R=4 | Sum=9 | Increment L"]
      J1["L: 1"] --- J2["3"] --- J3["4"] --- J4["6"] --- J5["R: 8"] --- J6["11"]
    end
    subgraph Iter3["Iteration 3: L=1, R=4 | Sum=11 | Decrement R"]
      K1["1"] --- K2["L: 3"] --- K3["4"] --- K4["6"] --- K5["R: 8"] --- K6["11"]
    end
    subgraph Iter4["Iteration 4: L=2, R=3 | Sum=10 | TARGET MATCH!"]
      L1["1"] --- L2["3"] --- L3["L: 4"] --- L4["R: 6"] --- L5["8"] --- L6["11"]
    end
    Iter1 --> Iter2 --> Iter3 --> Iter4
    style L3 fill:#2ecc71,color:#fff
    style L4 fill:#2ecc71,color:#fff`
      }
    },
    {
      diagram: {
        caption: 'Dynamic Sliding Window Expansion & Contraction (Longest Substring Without Repeats "abcabcbb")',
        chart: `flowchart TD
    W1["Window [a, b, c] - len=3, valid"] -->|Expand a - Duplicate!| W2["Window [a, b, c, a] - INVALID"]
    W2 -->|Shrink Left: remove a| W3["Window [b, c, a] - len=3, valid"]
    style W1 fill:#3498db,color:#fff
    style W2 fill:#e74c3c,color:#fff
    style W3 fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Types & Patterns of Two Pointers',
      text: 'Detailed breakdown of the 5 fundamental two-pointer and sliding window templates.'
    },
    {
      heading: 'Pattern 1: Opposite Pointers (Two Sum Sorted)',
      text: '<strong>What it does:</strong> Uses array sorting property to move left and right pointers towards each other in O(n) time.',
      code: `def two_sum_sorted(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        curr_sum = nums[left] + nums[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return []

# Time: O(n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 2: Fixed-Size Sliding Window',
      text: '<strong>What it does:</strong> Maintains a window of exact fixed size K as it moves from left to right across the array.',
      code: `def max_sub_array_of_size_k(arr, k):
    if len(arr) < k:
        return 0
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# Time: O(n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 3: Variable-Size Window (Longest Substring Without Repeats)',
      text: '<strong>What it does:</strong> Expands right pointer until condition is broken, then shrinks left pointer until valid again.',
      code: `def length_of_longest_substring(s):
    char_map = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len

# Time: O(n) | Space: O(min(n, m))`,
      language: 'python'
    },
    {
      heading: 'Pattern 4: Variable-Size Window (Minimum Window Substring)',
      text: '<strong>What it does:</strong> Finds shortest subarray containing all target characters using frequency map.',
      code: `from collections import Counter

def min_window(s, t):
    if not s or not t:
        return ""
    dict_t = Counter(t)
    required = len(dict_t)
    left = right = 0
    formed = 0
    window_counts = {}
    ans = (float("inf"), None, None)

    while right < len(s):
        character = s[right]
        window_counts[character] = window_counts.get(character, 0) + 1
        if character in dict_t and window_counts[character] == dict_t[character]:
            formed += 1

        while left <= right and formed == required:
            character = s[left]
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            window_counts[character] -= 1
            if character in dict_t and window_counts[character] < dict_t[character]:
                formed -= 1
            left += 1
        right += 1

    return "" if ans[0] == float("inf") else s[ans[1] : ans[2] + 1]

# Time: O(n + m) | Space: O(n + m)`,
      language: 'python'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Two Pointers & Sliding Window Suite in Python',
        code: `class TwoPointersSuite:
    @staticmethod
    def two_sum_sorted(nums, target):
        l, r = 0, len(nums) - 1
        while l < r:
            s = nums[l] + nums[r]
            if s == target: return [l, r]
            elif s < target: l += 1
            else: r -= 1
        return []

    @staticmethod
    def max_area(height):
        l, r = 0, len(height) - 1
        max_water = 0
        while l < r:
            h = min(height[l], height[r])
            max_water = max(max_water, h * (r - l))
            if height[l] < height[r]: l += 1
            else: r -= 1
        return max_water

    @staticmethod
    def length_of_longest_substring(s):
        seen = {}
        left = max_len = 0
        for right, ch in enumerate(s):
            if ch in seen and seen[ch] >= left:
                left = seen[ch] + 1
            seen[ch] = right
            max_len = max(max_len, right - left + 1)
        return max_len

if __name__ == '__main__':
    print("Two Sum Sorted ([2,7,11,15], 9):", TwoPointersSuite.two_sum_sorted([2,7,11,15], 9))
    print("Max Container Area ([1,8,6,2,5,4,8,3,7]):", TwoPointersSuite.max_area([1,8,6,2,5,4,8,3,7]))
    print("Longest Substring ('abcabcbb'):", TwoPointersSuite.length_of_longest_substring("abcabcbb"))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Two Pointers Suite Class in Java',
        code: `import java.util.*;

public class TwoPointersSuite {

    public static int[] twoSumSorted(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (sum == target) return new int[]{l, r};
            else if (sum < target) l++;
            else r--;
        }
        return new int[]{};
    }

    public static int maxArea(int[] height) {
        int l = 0, r = height.length - 1;
        int maxWater = 0;
        while (l < r) {
            int h = Math.min(height[l], height[r]);
            maxWater = Math.max(maxWater, h * (r - l));
            if (height[l] < height[r]) l++;
            else r--;
        }
        return maxWater;
    }

    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (map.containsKey(ch) && map.get(ch) >= left) {
                left = map.get(ch) + 1;
            }
            map.put(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        System.out.println("Two Sum Sorted: " + Arrays.toString(twoSumSorted(new int[]{2,7,11,15}, 9)));
        System.out.println("Max Water Area: " + maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println("Longest Substring: " + lengthOfLongestSubstring("abcabcbb"));
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of two pointers and sliding window complexity patterns.',
      table: {
        headers: ['Pattern', 'Time Complexity', 'Space Complexity', 'Notes'],
        rows: [
          ['Opposite Two Pointers', 'O(n)', 'O(1)', 'Requires sorted input array'],
          ['Fixed Sliding Window', 'O(n)', 'O(1)', 'Single pass; sliding step updates window in O(1)'],
          ['Dynamic Sliding Window', 'O(n)', 'O(k)', 'Left & right pointers each move at most n times -> 2n steps'],
          ['Monotonic Deque Window', 'O(n)', 'O(k)', 'Maintains max/min in window in amortized O(1) time'],
          ['Fast & Slow Cycle Finding', 'O(n)', 'O(1)', 'Floyd cycle detection; guaranteed match in O(n)']
        ]
      },
      note: 'Interview tip: Even though sliding window uses nested loops (a while loop inside a for loop), the overall time complexity is strictly O(n) because the left pointer advances at most n times total over the entire algorithm.'
    },
    {
      heading: 'Real-World Applications',
      text: 'Two pointers and sliding window patterns power high-throughput streaming and networking systems.',
      list: [
        '<strong>Network Packet Rate Limiter:</strong> Sliding window log and token bucket algorithms for API rate limiting.',
        '<strong>Adaptive Video Bitrate Monitoring:</strong> Tracking moving averages of network throughput to adjust video quality dynamically.',
        '<strong>Financial Real-Time Moving Averages (SMA/EMA):</strong> Computing rolling stock prices over time windows (e.g. 50-day moving average).',
        '<strong>TCP Sliding Window Protocol:</strong> Flow control protocol ensuring reliable packet delivery over lossy channels.',
        '<strong>Stream Processing Window Aggregations:</strong> Apache Flink and Spark Streaming tumbling/sliding window analytics.',
        '<strong>Text Editor Tokenizers:</strong> Lexing code streams into tokens using fast and slow index pointers.',
        '<strong>Bioinformatics DNA Substring Search:</strong> Matching GC-content density ratios across genomic sequences.',
        '<strong>Fraud Detection Anomaly Windows:</strong> Monitoring transaction spikes within rolling 10-minute user activity windows.'
      ],
      note: 'Key takeaway: Sliding window avoids recomputing metrics over entire windows by using O(1) delta updates when sliding right.'
    },
    {
      heading: 'Top Interview Questions on Two Pointers & Sliding Window',
      text: 'Master these classic interview problems on pointer convergence and window tracking.',
      note: 'Pattern cheat sheet: For sorted arrays -> opposite pointers; for subsegment optimization -> dynamic sliding window; for max in window -> monotonic deque.'
    },
    {
      heading: 'Practice Question 1: 3Sum (LeetCode 15, Medium)',
      text: '<strong>Problem:</strong> Given an integer array <code>nums</code>, return all unique triplets <code>[nums[i], nums[j], nums[k]]</code> such that sum is 0.<br/><strong>Key idea:</strong> Sort array. Iterate index <code>i</code>, then use opposite two pointers (<code>left</code> and <code>right</code>) to find pairs summing to <code>-nums[i]</code>. Skip duplicates.<br/><strong>Complexity:</strong> Time O(n²), Space O(1) auxiliary.',
      example: {
        title: 'Python Solution',
        code: `def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l + 1]: l += 1
                while l < r and nums[r] == nums[r - 1]: r -= 1
                l += 1; r -= 1
            elif s < 0:
                l += 1
            else:
                r -= 1
    return res`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `import java.util.*;

public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    res.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    while (l < r && nums[l] == nums[l + 1]) l++;
                    while (l < r && nums[r] == nums[r - 1]) r--;
                    l++; r--;
                } else if (sum < 0) l++;
                else r--;
            }
        }
        return res;
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Container With Most Water (LeetCode 11, Medium)',
      text: '<strong>Problem:</strong> Given <code>n</code> vertical line heights, find two lines that together with the x-axis form a container holding the most water.<br/><strong>Key idea:</strong> Opposite two pointers at ends. Calculate area = <code>min(height[l], height[r]) * (r - l)</code>. Move the pointer with the smaller height inward.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def maxArea(height):
    l, r = 0, len(height) - 1
    max_w = 0
    while l < r:
        h = min(height[l], height[r])
        max_w = max(max_w, h * (r - l))
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return max_w`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1;
        int maxW = 0;
        while (l < r) {
            int h = Math.min(height[l], height[r]);
            maxW = Math.max(maxW, h * (r - l));
            if (height[l] < height[r]) l++;
            else r--;
        }
        return maxW;
    }
}`,
        language: 'java',
        type: 'code'
      }
    }
  ]
};

// TOPIC 4: Divide & Conquer
const divideConquerTopic = {
  title: 'Divide & Conquer',
  subtitle: 'Breaking complex problems into independent subproblems, solving recursively, and combining solutions',
  sections: [
    {
      heading: 'What is Divide & Conquer?',
      text: 'Divide & Conquer is an algorithmic design paradigm that solves a complex problem by recursively breaking it down into two or more smaller subproblems of the same or related type, until these become simple enough to be solved directly (base case). The solutions to the subproblems are then combined to give a solution to the original problem.',
      list: [
        '<strong>1. Divide:</strong> Break the main problem into smaller, independent subproblems of the same type.',
        '<strong>2. Conquer:</strong> Solve the subproblems recursively. If subproblems are small enough, solve them directly as base cases.',
        '<strong>3. Combine:</strong> Merge the subproblem solutions into a solution for the original problem.',
        '<strong>Recurrence Relation & Master Theorem:</strong> Recurrence relations like T(n) = a T(n/b) + f(n) quantify time complexity using Master Theorem analysis.',
        '<strong>Independence of Subproblems:</strong> Subproblems do not overlap (unlike Dynamic Programming, which addresses overlapping subproblems).'
      ]
    },
    {
      heading: 'Components & Master Theorem',
      text: 'The Master Theorem provides a cookbook solution for divide-and-conquer recurrences of the form T(n) = a T(n/b) + f(n):',
      list: [
        '<strong>a (Number of Subproblems):</strong> Number of recursive calls in each step (a ≥ 1).',
        '<strong>b (Subproblem Division Factor):</strong> Factor by which input size is divided (b > 1).',
        '<strong>f(n) (Work per Level):</strong> Cost of dividing problem and combining subproblem results.',
        '<strong>Case 1 (Leaf Dominant):</strong> If f(n) = O(n^(log_b(a) - ε)), then T(n) = Θ(n^(log_b a)).',
        '<strong>Case 2 (Balanced Work):</strong> If f(n) = Θ(n^(log_b a) * log^k n), then T(n) = Θ(n^(log_b a) * log^(k+1) n).',
        '<strong>Case 3 (Root Dominant):</strong> If f(n) = Ω(n^(log_b(a) + ε)) and regularity holds, then T(n) = Θ(f(n)).'
      ]
    },
    {
      heading: 'Visual Diagrams',
      text: 'Visualizing recursive problem decomposition and solution combination.',
      diagram: {
        caption: 'Divide & Conquer Recursion Tree Topology',
        chart: `flowchart TD
    P["Main Problem: Size N"] -->|Divide| S1["Subproblem 1: Size N/2"]
    P -->|Divide| S2["Subproblem 2: Size N/2"]
    S1 -->|Conquer| B1["Base Case 1"]
    S1 -->|Conquer| B2["Base Case 2"]
    S2 -->|Conquer| B3["Base Case 3"]
    S2 -->|Conquer| B4["Base Case 4"]
    B1 & B2 -->|Combine| Sol1["Partial Solution 1"]
    B3 & B4 -->|Combine| Sol2["Partial Solution 2"]
    Sol1 & Sol2 -->|Combine| Final["Final Solution"]
    style P fill:#3498db,color:#fff
    style Final fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'D&C vs Dynamic Programming vs Greedy',
      text: 'Comparison of major algorithmic design paradigms.',
      diagram: {
        caption: 'Paradigm Comparison Matrix',
        chart: `flowchart LR
    DC["Divide & Conquer\nIndependent Subproblems\n(e.g., Merge Sort)"]
    DP["Dynamic Programming\nOverlapping Subproblems\n(e.g., Knapsack, Edit Distance)"]
    GR["Greedy Algorithms\nLocally Optimal Choices\n(e.g., Huffman, Dijkstra)"]
    style DC fill:#3498db,color:#fff
    style DP fill:#9b59b6,color:#fff
    style GR fill:#f1c40f,color:#000`
      }
    },
    {
      heading: 'Advantages',
      text: 'Key benefits of divide-and-conquer algorithms.',
      list: [
        '<strong>Solves Complex Problems:</strong> Naturally breaks down high-dimensional problems (e.g. Fast Fourier Transform, Matrix Multiplication).',
        '<strong>Guaranteed Optimal Complexity:</strong> Merge Sort guarantees O(n log n) worst-case time.',
        '<strong>Parallel Computing Friendly:</strong> Independent subproblems can execute concurrently on different CPU cores/threads.',
        '<strong>Memory Cache Friendly (Cache-Oblivious):</strong> Subproblems fit naturally into L1/L2 CPU caches as size decreases.'
      ]
    },
    {
      heading: 'Disadvantages & Overhead',
      text: 'Trade-offs and overheads associated with recursion.',
      list: [
        '<strong>Recursion Call Stack Overhead:</strong> Recursion depth of O(log n) or O(n) uses call stack memory and CPU stack frames.',
        '<strong>Combination Step Cost:</strong> If combining subproblems takes O(n²), overall complexity degrades.',
        '<strong>Not Suitable for Overlapping Subproblems:</strong> Can lead to exponential time O(2ⁿ) without memoization.'
      ]
    },
    {
      heading: 'Classic Divide & Conquer Algorithms Breakdown',
      text: 'Deep dive into classic divide & conquer implementations.'
    },
    {
      heading: 'Algorithm 1: Merge Sort & Count Inversions',
      text: '<strong>What it does:</strong> Counts pairs (i, j) such that i < j and nums[i] > nums[j] during the merge step.<br/><strong>Complexity:</strong> Time O(n log n), Space O(n).',
      code: `def count_inversions(arr):
    def merge_and_count(items, temp, left, mid, right):
        i, j, k = left, mid + 1, left
        inv_count = 0
        while i <= mid and j <= right:
            if items[i] <= items[j]:
                temp[k] = items[i]; i += 1
            else:
                temp[k] = items[j]; j += 1
                inv_count += (mid - i + 1)
            k += 1
        while i <= mid:
            temp[k] = items[i]; i += 1; k += 1
        while j <= right:
            temp[k] = items[j]; j += 1; k += 1
        for idx in range(left, right + 1):
            items[idx] = temp[idx]
        return inv_count

    def _sort(items, temp, left, right):
        inv_count = 0
        if left < right:
            mid = (left + right) // 2
            inv_count += _sort(items, temp, left, mid)
            inv_count += _sort(items, temp, mid + 1, right)
            inv_count += merge_and_count(items, temp, left, mid, right)
        return inv_count

    temp = [0] * len(arr)
    return _sort(list(arr), temp, 0, len(arr) - 1)

# Time: O(n log n) | Space: O(n)`,
      language: 'python'
    },
    {
      heading: 'Algorithm 2: Fast Exponentiation Pow(x, n)',
      text: '<strong>What it does:</strong> Computes x^n in O(log n) time using binary power halving: x^n = (x^(n/2))^2.',
      code: `def my_pow(x, n):
    if n == 0:
        return 1.0
    if n < 0:
        x = 1 / x
        n = -n
    
    half = my_pow(x, n // 2)
    if n % 2 == 0:
        return half * half
    else:
        return half * half * x

# Time: O(log n) | Space: O(log n) stack`,
      language: 'python'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Divide & Conquer Suite in Python',
        code: `class DivideConquerSuite:
    @staticmethod
    def count_inversions(arr):
        def merge_count(items, temp, l, m, r):
            i, j, k = l, m + 1, l
            invs = 0
            while i <= m and j <= r:
                if items[i] <= items[j]:
                    temp[k] = items[i]; i += 1
                else:
                    temp[k] = items[j]; j += 1
                    invs += (m - i + 1)
                k += 1
            while i <= m: temp[k] = items[i]; i += 1; k += 1
            while j <= r: temp[k] = items[j]; j += 1; k += 1
            for idx in range(l, r + 1): items[idx] = temp[idx]
            return invs

        def sort_and_count(items, temp, l, r):
            if l >= r: return 0
            m = (l + r) // 2
            return sort_and_count(items, temp, l, m) + \\
                   sort_and_count(items, temp, m + 1, r) + \\
                   merge_count(items, temp, l, m, r)

        temp = [0] * len(arr)
        return sort_and_count(list(arr), temp, 0, len(arr) - 1)

    @staticmethod
    def pow(x, n):
        if n == 0: return 1.0
        if n < 0: x = 1 / x; n = -n
        half = DivideConquerSuite.pow(x, n // 2)
        return half * half if n % 2 == 0 else half * half * x

if __name__ == '__main__':
    print("Inversions in [8, 4, 2, 1]:", DivideConquerSuite.count_inversions([8, 4, 2, 1]))
    print("Pow(2.0, 10):", DivideConquerSuite.pow(2.0, 10))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Divide & Conquer Suite Class in Java',
        code: `public class DivideConquerSuite {

    public static long countInversions(int[] arr) {
        int[] temp = new int[arr.length];
        return sortAndCount(arr.clone(), temp, 0, arr.length - 1);
    }

    private static long sortAndCount(int[] arr, int[] temp, int l, int r) {
        if (l >= r) return 0;
        int m = l + (r - l) / 2;
        long invs = sortAndCount(arr, temp, l, m);
        invs += sortAndCount(arr, temp, m + 1, r);
        invs += mergeAndCount(arr, temp, l, m, r);
        return invs;
    }

    private static long mergeAndCount(int[] arr, int[] temp, int l, int m, int r) {
        int i = l, j = m + 1, k = l;
        long invs = 0;
        while (i <= m && j <= r) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
                invs += (m - i + 1);
            }
        }
        while (i <= m) temp[k++] = arr[i++];
        while (j <= r) temp[k++] = arr[j++];
        for (int idx = l; idx <= r; idx++) arr[idx] = temp[idx];
        return invs;
    }

    public static double pow(double x, int n) {
        if (n == 0) return 1.0;
        long N = n;
        if (N < 0) { x = 1 / x; N = -N; }
        return fastPow(x, N);
    }

    private static double fastPow(double x, long n) {
        if (n == 0) return 1.0;
        double half = fastPow(x, n / 2);
        return (n % 2 == 0) ? half * half : half * half * x;
    }

    public static void main(String[] args) {
        System.out.println("Inversions [8, 4, 2, 1]: " + countInversions(new int[]{8, 4, 2, 1}));
        System.out.println("Pow(2.0, 10): " + pow(2.0, 10));
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of classic Divide & Conquer algorithms.',
      table: {
        headers: ['Algorithm', 'Time Complexity', 'Space Complexity', 'Recurrence Relation'],
        rows: [
          ['Merge Sort', 'O(n log n)', 'O(n)', 'T(n) = 2T(n/2) + O(n)'],
          ['Quickselect (Avg)', 'O(n)', 'O(log n)', 'T(n) = T(n/2) + O(n)'],
          ['Fast Exponentiation', 'O(log n)', 'O(log n)', 'T(n) = T(n/2) + O(1)'],
          ['Karatsuba Multiply', 'O(n^1.585)', 'O(n)', 'T(n) = 3T(n/2) + O(n)'],
          ['Strassen Matrix Mult', 'O(n^2.807)', 'O(n²)', 'T(n) = 7T(n/2) + O(n²)']
        ]
      },
      note: 'Interview tip: Always state the recurrence relation T(n) = a T(n/b) + f(n) when explaining a divide & conquer algorithm to demonstrate theoretical depth.'
    },
    {
      heading: 'Real-World Applications',
      text: 'Divide and conquer underpins high-performance distributed and scientific computing.',
      list: [
        '<strong>MapReduce Distributed Data Processing:</strong> Hadoop/Spark split huge datasets across worker nodes (Divide) and combine aggregated results.',
        '<strong>Fast Fourier Transform (FFT):</strong> Essential in digital signal processing, audio compression (MP3), and wireless communication (OFDM in 5G).',
        '<strong>Computational Geometry & 3D Physics:</strong> Collision detection in game engines using hierarchical bounding volumes (BVH).',
        '<strong>Big Integer Cryptography:</strong> Karatsuba and Toom-Cook multiplication for RSA 4096-bit encryption key generation.',
        '<strong>Parallel Work-Stealing Schedulers:</strong> Java ForkJoinPool and Go runtime scheduler split tasks recursively across CPU cores.',
        '<strong>Recommender System Matrix Operations:</strong> Strassen-style matrix algorithms for fast collaborative filtering.',
        '<strong>Database Parallel Query Execution:</strong> Partitioning table scans across multiple worker threads.',
        '<strong>Computer Vision Image Pyramids:</strong> Gaussian pyramid decomposition for multi-scale feature detection.'
      ],
      note: 'Key insight: Divide and conquer algorithms map directly onto parallel hardware architectures.'
    },
    {
      heading: 'Top Interview Questions on Divide & Conquer',
      text: 'Essential interview problems using recursive problem splitting.',
      note: 'Pattern cheat sheet: Identify base case -> split in half -> conquer recursively -> merge results.'
    },
    {
      heading: 'Practice Question 1: Count of Smaller Numbers After Self (LeetCode 315, Hard)',
      text: '<strong>Problem:</strong> Given integer array <code>nums</code>, return array <code>counts</code> where <code>counts[i]</code> is number of smaller elements to the right.<br/><strong>Key idea:</strong> Use Modified Merge Sort. Track original indices and increment counts during right-subarray merge jumps.<br/><strong>Complexity:</strong> Time O(n log n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def countSmaller(nums):
    n = len(nums)
    counts = [0] * n
    indices = list(range(n))

    def merge_sort(enum_indices):
        if len(enum_indices) <= 1:
            return enum_indices
        mid = len(enum_indices) // 2
        left = merge_sort(enum_indices[:mid])
        right = merge_sort(enum_indices[mid:])

        merged = []
        i = j = 0
        while i < len(left) and j < len(right):
            if nums[left[i]] <= nums[right[j]]:
                counts[left[i]] += j
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1
        while i < len(left):
            counts[left[i]] += j
            merged.append(left[i])
            i += 1
        while j < len(right):
            merged.append(right[j])
            j += 1
        return merged

    merge_sort(indices)
    return counts`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `import java.util.*;

public class Solution {
    int[] counts;
    public List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        counts = new int[n];
        int[] indices = new int[n];
        for (int i = 0; i < n; i++) indices[i] = i;

        mergeSort(nums, indices, 0, n - 1);

        List<Integer> res = new ArrayList<>();
        for (int c : counts) res.add(c);
        return res;
    }

    private void mergeSort(int[] nums, int[] indices, int l, int r) {
        if (l >= r) return;
        int m = l + (r - l) / 2;
        mergeSort(nums, indices, l, m);
        mergeSort(nums, indices, m + 1, r);
        merge(nums, indices, l, m, r);
    }

    private void merge(int[] nums, int[] indices, int l, int m, int r) {
        int[] temp = new int[r - l + 1];
        int i = l, j = m + 1, k = 0, rightCount = 0;
        while (i <= m && j <= r) {
            if (nums[indices[i]] <= nums[indices[j]]) {
                counts[indices[i]] += rightCount;
                temp[k++] = indices[i++];
            } else {
                rightCount++;
                temp[k++] = indices[j++];
            }
        }
        while (i <= m) {
            counts[indices[i]] += rightCount;
            temp[k++] = indices[i++];
        }
        while (j <= r) temp[k++] = indices[j++];
        for (int idx = 0; idx < temp.length; idx++) indices[l + idx] = temp[idx];
    }
}`,
        language: 'java',
        type: 'code'
      }
    }
  ]
};

// TOPIC 5: Greedy Algorithms
const greedyTopic = {
  title: 'Greedy Algorithms',
  subtitle: 'Making locally optimal choices to achieve globally optimal solutions',
  sections: [
    {
      heading: 'What is a Greedy Algorithm?',
      text: 'A Greedy Algorithm makes the locally optimal choice at each step with the hope of finding a global optimum. Instead of evaluating all possible subproblem choices (like Dynamic Programming) or exploring every branch (like Backtracking), a greedy algorithm picks the best immediate option without ever reconsidering past decisions.',
      list: [
        '<strong>Greedy Choice Property:</strong> A global optimum can be arrived at by making locally optimal (greedy) choices.',
        '<strong>Optimal Substructure:</strong> An optimal solution to the problem contains optimal solutions to its subproblems.',
        '<strong>No Backtracking:</strong> Once a choice is made, it is permanent (never undone).',
        '<strong>Requires Proof of Correctness:</strong> Greedy strategies must be mathematically proven (e.g. via Exchange Argument or Proof by Contradiction).',
        '<strong>Fast & Efficient:</strong> Typically runs in O(n log n) (due to initial sorting) or O(n) time with O(1) space.'
      ]
    },
    {
      heading: 'Proof Techniques: Exchange Argument',
      text: 'To prove a greedy strategy is correct, we use the Exchange Argument: assume an optimal solution O exists that differs from greedy solution G. Modify O step-by-step by exchanging choices with G\'s choices without degrading quality, proving G is also optimal.',
      diagram: {
        caption: 'Exchange Argument Flow',
        chart: `flowchart LR
    Opt["Optimal Solution O"] -->|Exchange Choice 1 with Greedy G| Opt1["Solution O' (Equal or Better Quality)"]
    Opt1 -->|Repeat for all choices| G["Greedy Solution G (Proven Optimal!)"]
    style Opt fill:#3498db,color:#fff
    style G fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'Visual Diagrams',
      text: 'Visualizing interval scheduling and greedy choice selection.',
      diagram: {
        caption: 'Interval Scheduling: Select Non-Overlapping Intervals by Earliest End Time',
        chart: `flowchart TD
    I1["Interval 1: [1, 3] (Ends at 3) -> SELECT!"] --> Next1["Filter out intervals starting < 3"]
    Next1 --> I2["Interval 2: [3, 5] (Ends at 5) -> SELECT!"]
    Next1 --> Skip["Interval 3: [2, 6] (Overlaps -> SKIP)"]
    Next1 --> I3["Interval 4: [5, 8] (Ends at 8) -> SELECT!"]
    style I1 fill:#2ecc71,color:#fff
    style I2 fill:#2ecc71,color:#fff
    style Skip fill:#e74c3c,color:#fff
    style I3 fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'When Greedy Works vs When Greedy Fails',
      text: 'Understanding when greedy is applicable vs when Dynamic Programming is required.',
      diagram: {
        caption: 'Knapsack Variant Matrix: Fractional (Greedy) vs 0/1 (DP)',
        chart: `flowchart LR
    subgraph Frac["Fractional Knapsack (Items can be split)"]
      F1["Sort by Value/Weight Ratio\nGREEDY WORKS -> O(n log n)"]
    end
    subgraph ZeroOne["0/1 Knapsack (Items cannot be split)"]
      Z1["Greedy Ratio Fails!\nREQUIRES DP -> O(n * W)"]
    end
    Frac ~~~ ZeroOne
    style F1 fill:#2ecc71,color:#fff
    style Z1 fill:#e74c3c,color:#fff`
      }
    },
    {
      heading: 'Advantages',
      text: 'Key strengths of greedy algorithms.',
      list: [
        '<strong>High Computational Speed:</strong> Typically O(n log n) due to sorting or O(n) linear scans.',
        '<strong>Low Memory Consumption:</strong> Operates in O(1) extra space without DP tables or recursion stacks.',
        '<strong>Intuitive & Clean Implementations:</strong> Straightforward code logic without complex state transitions.',
        '<strong>Effective Approximation Heuristics:</strong> Provides fast near-optimal solutions for NP-hard problems (e.g. TSP).'
      ]
    },
    {
      heading: 'Disadvantages & Risks',
      text: 'Limitations and risks of greedy approaches.',
      list: [
        '<strong>Greedy Trap (Local Optimum Failure):</strong> May get stuck in a bad local optimum if greedy choice property fails.',
        '<strong>Requires Rigorous Proof:</strong> Easy to invent plausible greedy heuristics that fail subtle edge cases.',
        '<strong>No Undo / Backtracking:</strong> Bad early choices cannot be corrected later.'
      ]
    },
    {
      heading: 'Core Algorithmic Patterns Breakdown',
      text: 'Deep dive into classic greedy algorithm implementations.'
    },
    {
      heading: 'Pattern 1: Non-Overlapping Intervals (Activity Selection)',
      text: '<strong>What it does:</strong> Sort intervals by end time. Always pick the interval that finishes earliest.<br/><strong>Complexity:</strong> Time O(n log n), Space O(1).',
      code: `def erase_overlap_intervals(intervals):
    if not intervals:
        return 0
    intervals.sort(key=lambda x: x[1])
    count = 0
    prev_end = intervals[0][1]
    for i in range(1, len(intervals)):
        if intervals[i][0] < prev_end:
            count += 1
        else:
            prev_end = intervals[i][1]
    return count

# Time: O(n log n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Pattern 2: Gas Station (Circuit Completion)',
      text: '<strong>What it does:</strong> Track total gas surplus and current tank deficit in a single pass.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      code: `def can_complete_circuit(gas, cost):
    total_tank = curr_tank = 0
    start_idx = 0
    for i in range(len(gas)):
        diff = gas[i] - cost[i]
        total_tank += diff
        curr_tank += diff
        if curr_tank < 0:
            start_idx = i + 1
            curr_tank = 0
    return start_idx if total_tank >= 0 else -1

# Time: O(n) | Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Greedy Algorithms Suite in Python',
        code: `class GreedySuite:
    @staticmethod
    def erase_overlap_intervals(intervals):
        if not intervals: return 0
        intervals.sort(key=lambda x: x[1])
        count = 0
        prev_end = intervals[0][1]
        for i in range(1, len(intervals)):
            if intervals[i][0] < prev_end:
                count += 1
            else:
                prev_end = intervals[i][1]
        return count

    @staticmethod
    def can_jump(nums):
        farthest = 0
        for i, num in enumerate(nums):
            if i > farthest:
                return False
            farthest = max(farthest, i + num)
        return True

    @staticmethod
    def can_complete_circuit(gas, cost):
        total = curr = start = 0
        for i in range(len(gas)):
            diff = gas[i] - cost[i]
            total += diff
            curr += diff
            if curr < 0:
                start = i + 1
                curr = 0
        return start if total >= 0 else -1

if __name__ == '__main__':
    print("Non-overlapping count:", GreedySuite.erase_overlap_intervals([[1,2],[2,3],[3,4],[1,3]]))
    print("Can Jump ([2,3,1,1,4]):", GreedySuite.can_jump([2,3,1,1,4]))
    print("Gas Station (gas=[1,2,3,4,5], cost=[3,4,5,1,2]):", GreedySuite.can_complete_circuit([1,2,3,4,5], [3,4,5,1,2]))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Greedy Suite Class in Java',
        code: `import java.util.*;

public class GreedySuite {

    public static int eraseOverlapIntervals(int[][] intervals) {
        if (intervals == null || intervals.length == 0) return 0;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        int count = 0;
        int prevEnd = intervals[0][1];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < prevEnd) {
                count++;
            } else {
                prevEnd = intervals[i][1];
            }
        }
        return count;
    }

    public static boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            farthest = Math.max(farthest, i + nums[i]);
        }
        return true;
    }

    public static int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0, curr = 0, start = 0;
        for (int i = 0; i < gas.length; i++) {
            int diff = gas[i] - cost[i];
            total += diff;
            curr += diff;
            if (curr < 0) {
                start = i + 1;
                curr = 0;
            }
        }
        return total >= 0 ? start : -1;
    }

    public static void main(String[] args) {
        int[][] intervals = {{1,2},{2,3},{3,4},{1,3}};
        System.out.println("Erase Overlap Count: " + eraseOverlapIntervals(intervals));
        System.out.println("Can Jump: " + canJump(new int[]{2,3,1,1,4}));
        System.out.println("Gas Station Start: " + canCompleteCircuit(new int[]{1,2,3,4,5}, new int[]{3,4,5,1,2}));
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of classic Greedy problem complexities.',
      table: {
        headers: ['Problem', 'Time Complexity', 'Space Complexity', 'Greedy Strategy'],
        rows: [
          ['Interval Scheduling', 'O(n log n)', 'O(1)', 'Sort intervals by earliest finish time'],
          ['Fractional Knapsack', 'O(n log n)', 'O(1)', 'Sort items by value-to-weight ratio'],
          ['Jump Game I', 'O(n)', 'O(1)', 'Track maximum reachable index'],
          ['Gas Station', 'O(n)', 'O(1)', 'Reset start index when current tank falls below 0'],
          ['Huffman Encoding', 'O(n log n)', 'O(n)', 'Build tree using min-heap for smallest frequencies']
        ]
      },
      note: 'Interview tip: If an interview question asks to minimize/maximize something with non-overlapping choices, try sorting by end time or ratio first!'
    },
    {
      heading: 'Real-World Applications',
      text: 'Greedy algorithms power critical compression and networking systems.',
      list: [
        '<strong>Lossless File Compression (ZIP, JPEG, MP3):</strong> Huffman Coding creates optimal prefix variable-length codes based on character frequencies.',
        '<strong>Network Shortest Path Routing (OSPF):</strong> Dijkstra\'s algorithm greedily selects the closest unvisited network router node.',
        '<strong>Cloud Infrastructure Pod Scheduling:</strong> Kubernetes schedules pods onto nodes with the best available resource fit.',
        '<strong>High-Frequency Smart Order Routing:</strong> Execution engines pick liquidity pools with the lowest transaction fees.',
        '<strong>Cellular Frequency Allocation:</strong> Telecommunication towers greedily assign non-interfering frequency bands to active mobiles.',
        '<strong>Airline Crew & Gate Allocation:</strong> Scheduling flight crews to aircraft minimizing idle gate turnaround time.',
        '<strong>Cash Register Currency Systems:</strong> Canonical coin systems (e.g. $0.25, $0.10, $0.05, $0.01) yield minimum coins using greedy choice.',
        '<strong>Cache Eviction (Belady\'s Optimal Algorithm):</strong> Evicts the cache item that will not be needed for the longest time in the future.'
      ],
      note: 'Key insight: Greedy algorithms are preferred in real-time control systems because of their speed and low memory overhead.'
    },
    {
      heading: 'Top Interview Questions on Greedy Algorithms',
      text: 'Essential interview problems using greedy choice strategies.',
      note: 'Pattern cheat sheet: For reachability -> track max reach; for intervals -> sort by finish time; for frequencies -> priority queue.'
    },
    {
      heading: 'Practice Question 1: Jump Game (LeetCode 55, Medium)',
      text: '<strong>Problem:</strong> Given integer array <code>nums</code> where <code>nums[i]</code> is maximum jump length at index <code>i</code>, return true if you can reach the last index.<br/><strong>Key idea:</strong> Maintain <code>farthest</code> reachable index. If current index <code>i > farthest</code>, return false.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def canJump(nums):
    farthest = 0
    for i, num in enumerate(nums):
        if i > farthest:
            return False
        farthest = max(farthest, i + num)
    return True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            farthest = Math.max(farthest, i + nums[i]);
        }
        return true;
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Task Scheduler (LeetCode 621, Medium)',
      text: '<strong>Problem:</strong> Given CPU tasks array <code>tasks</code> and cooldown <code>n</code>, find minimum CPU intervals required.<br/><strong>Key idea:</strong> Find task with max frequency <code>max_freq</code>. The bottleneck is <code>(max_freq - 1) * (n + 1) + count(max_freq)</code>.<br/><strong>Complexity:</strong> Time O(N), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `from collections import Counter

def leastInterval(tasks, n):
    freq = Counter(tasks)
    max_freq = max(freq.values())
    max_freq_count = sum(1 for count in freq.values() if count == max_freq)
    
    ans = (max_freq - 1) * (n + 1) + max_freq_count
    return max(ans, len(tasks))`,
        language: 'python',
        type: 'code'
      }
    },
    {
      example: {
        title: 'Java Solution',
        code: `public class Solution {
    public int leastInterval(char[] tasks, int n) {
        int[] freq = new int[26];
        for (char t : tasks) freq[t - 'A']++;
        Arrays.sort(freq);
        int maxFreq = freq[25];
        int maxFreqCount = 0;
        for (int f : freq) if (f == maxFreq) maxFreqCount++;
        
        int ans = (maxFreq - 1) * (n + 1) + maxFreqCount;
        return Math.max(ans, tasks.length);
    }
}`,
        language: 'java',
        type: 'code'
      }
    }
  ]
};

const dsaModule3Content = {
  module3: {
    'sorting': sortingTopic,
    'binary-search': binarySearchTopic,
    'two-pointers': twoPointersTopic,
    'divide-conquer': divideConquerTopic,
    'greedy': greedyTopic,
  }
};

const header = `// DSA Module 3 — enhanced interview-ready content\n// Regenerate: node scripts/build-dsa-m3.js\n\n`;

const body =
  header +
  `export const dsaModule3Structure = ${JSON.stringify(dsaModule3Structure, null, 2)};\n\n` +
  `export const dsaModule3Content = ${JSON.stringify(dsaModule3Content, null, 2)};\n`;

fs.writeFileSync(outPath, body, 'utf8');
console.log(`✅ Successfully built ${outPath} (${(body.length / 1024).toFixed(1)} KB, ${body.split('\n').length} lines)`);
