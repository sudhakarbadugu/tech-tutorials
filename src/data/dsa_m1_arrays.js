// DSA Module 1: Arrays topic (split from arrays-strings)
export const arraysTopic = {
  title: 'Arrays',
  subtitle: 'Contiguous memory — the fastest way to read data',
  sections: [
    // A — What is an Array?
    {
      heading: 'What is an Array?',
      text: 'An array is a linear data structure that stores elements of the same type in a single contiguous block of memory. Because every element sits right next to its neighbor, the position of any element can be computed directly from its index — this is what makes arrays the fastest data structure for reading data. Arrays are the foundation that almost every other structure (strings, hash tables, heaps, matrices) is built on top of.',
      list: [
        '<strong>Contiguous memory:</strong> All elements occupy one unbroken block of addresses — element i+1 is stored immediately after element i.',
        '<strong>Index addressing:</strong> Every element is reachable by a zero-based integer index. The address of element i is computed, not searched for.',
        '<strong>Fixed vs growable:</strong> A <em>static</em> array (C, Java <code>int[]</code>) has a fixed capacity decided at creation. A <em>dynamic</em> array (Python list, Java ArrayList, C++ vector) hides a static array inside and grows it automatically when full.',
        '<strong>Cache-friendliness:</strong> When the CPU loads one element, it pulls the neighboring elements into cache for free. Sequential iteration over an array is therefore dramatically faster in practice than chasing pointers scattered across memory.',
        '<strong>Homogeneous elements:</strong> In low-level languages every element is the same size, which is what makes index math exact. Python lists store same-sized pointers to objects, keeping the same property.'
      ]
    },
    // B — Array Anatomy: Contiguous Memory
    {
      heading: 'Array Anatomy: Contiguous Memory',
      text: 'Imagine an array of five 8-byte integers stored starting at memory address 1000. Because the elements are contiguous and equal-sized, the address of any element is pure arithmetic: <strong>address(i) = base_address + i × element_size</strong>. There is no searching, no pointer chasing — one multiply and one add.',
      diagram: {
        caption: 'arr = [10, 20, 30, 40, 50], base address 1000, 8 bytes per element',
        chart: `flowchart LR
    A["idx 0: 10<br/>addr 1000"] --> B["idx 1: 20<br/>addr 1008"] --> C["idx 2: 30<br/>addr 1016"] --> D["idx 3: 40<br/>addr 1024"] --> E["idx 4: 50<br/>addr 1032"]
    style C fill:#f1c40f,color:#000`
      }
    },
    {
      text: '<strong>Why access is O(1):</strong> to read <code>arr[3]</code>, the CPU computes 1000 + 3 × 8 = 1024 and reads that single address. The work is identical whether the array has five elements or five million — the index never requires looking at any other element. This is <em>random access</em>, and no linked structure can match it.'
    },
    // C — Static vs Dynamic Arrays
    {
      heading: 'Static vs Dynamic Arrays',
      text: 'A <strong>static array</strong> allocates its full capacity up front and can never grow — you must know (or bound) the size in advance. A <strong>dynamic array</strong> starts with a modest capacity and replaces its backing buffer with a bigger one (usually double the size) whenever it runs out of room, copying the existing elements over. You get growable storage while keeping O(1) index access.',
      diagram: {
        caption: 'Static array: capacity 4 is fixed forever — element 5 has nowhere to go',
        chart: `flowchart LR
    A["0: 10"] --> B["1: 20"] --> C["2: 30"] --> D["3: 40"]
    X["5th element?"] -.->|no room| D
    style X fill:#e74c3c,color:#fff`
      }
    },
    {
      diagram: {
        caption: 'Dynamic array: full capacity 4 → allocate new capacity 8, copy, then append',
        chart: `flowchart LR
    subgraph Full["Before: capacity 4, size 4, full"]
      direction LR
      F1["0: 10"] --> F2["1: 20"] --> F3["2: 30"] --> F4["3: 40"]
    end
    subgraph Grown["After: capacity 8, size 5"]
      direction LR
      G1["0: 10"] --> G2["1: 20"] --> G3["2: 30"] --> G4["3: 40"] --> G5["4: 50"] --> G6["5: empty"] --> G7["6: empty"] --> G8["7: empty"]
    end
    Full ~~~ Grown
    style G5 fill:#2ecc71,color:#fff`
      }
    },
    {
      text: '<strong>Why append is amortized O(1):</strong> a resize costs O(n) because every element is copied. But doubling means resizes happen at sizes 4, 8, 16, 32, ... — after n appends, the total copy work is roughly 1 + 2 + 4 + ... + n ≈ 2n, which averages out to a constant cost per append. Most appends are a single write; the rare expensive resize is "paid for" by all the cheap appends before it.'
    },
    // D — Advantages
    {
      heading: 'Advantages',
      text: 'Arrays are the default choice when the workload is dominated by reading, indexing, and iterating.',
      list: [
        '<strong>O(1) access by index:</strong> Offset arithmetic maps any index straight to a memory address — the single biggest advantage over linked structures.',
        '<strong>Cache locality:</strong> Contiguous storage means the CPU prefetcher loads upcoming elements before you ask for them. Iterating an array is often 10–100× faster in practice than iterating a linked list of the same size.',
        '<strong>Memory density:</strong> An array stores pure data — no per-node pointers, no per-node allocation headers. A linked list of 64-bit integers uses 2–3× the memory for the same values.',
        '<strong>Simple, fast iteration:</strong> A plain <code>for</code> loop over indices is the tightest loop a CPU can run — sequential addresses, predictable branching, vectorization-friendly.',
        '<strong>Binary search when sorted:</strong> Random access means you can jump to the middle in O(1), so a sorted array supports O(log n) lookup — impossible on a linked list.'
      ]
    },
    // E — Disadvantages
    {
      heading: 'Disadvantages',
      text: 'Arrays pay for fast reads with expensive structural changes.',
      list: [
        '<strong>O(n) insert or delete in the middle:</strong> Every element after the affected position must shift one slot to keep the block contiguous — on average half the array moves.',
        '<strong>Fixed size for static arrays:</strong> Capacity is decided at creation; too small and you are stuck, too big and memory sits unused.',
        '<strong>Resize cost for dynamic arrays:</strong> Growth is O(n) when it happens (amortized away, but a real latency spike — bad for hard real-time systems), and the old buffer must be copied and freed.',
        '<strong>Wasted capacity:</strong> A dynamic array typically holds 25–50% empty slots so it has room to grow; a just-resized array of n elements may reserve 2n slots.',
        '<strong>Contiguous memory requirement:</strong> A one-billion-element array needs one unbroken multi-gigabyte block. On a fragmented heap, allocation can fail even when plenty of total memory is free.'
      ]
    },
    // F — Array Operations intro
    {
      heading: 'Array Operations',
      text: 'The eight core operations below are each explained with their best efficient implementation, a Mermaid visual of the memory layout, and runnable Python code.'
    },
    // G — Eight core operations
    {
      heading: 'Operation 1: Traverse / Print',
      text: '<strong>What it does:</strong> Visit every element from index 0 to n − 1 in order.<br/><strong>Best efficiency:</strong> A simple index loop is O(n) time and O(1) space — and because the elements are contiguous, the CPU prefetcher makes it extremely fast in practice.',
      diagram: {
        caption: 'Visit indices 0 → 4 in sequence',
        chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> D["3:40"] --> E["4:50"]
    style A fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def traverse(arr):
    for i in range(len(arr)):
        print(i, "->", arr[i])

# Time: O(n), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 2: Access by Index',
      text: '<strong>What it does:</strong> Read the element at a given index.<br/><strong>Best efficiency:</strong> Always O(1) — the address is computed as base + index × element_size, so no other element is ever touched. This is the operation arrays are built for.',
      diagram: {
        caption: 'Access arr[2]: address = 1000 + 2 × 8 = 1016',
        chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> D["3:40"] --> E["4:50"]
    style C fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def access(arr, index):
    if index < 0 or index >= len(arr):
        raise IndexError("index out of range")
    return arr[index]          # base + index * element_size

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 3: Append',
      text: '<strong>What it does:</strong> Add a new element after the current last one.<br/><strong>Best efficiency:</strong> O(1) amortized on a dynamic array — usually a single write into a spare slot; when the backing store is full it is doubled and copied first (O(n) that one time).',
      diagram: {
        caption: 'Append 40 into the spare slot at index 3',
        chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> N["3:40 new"]
    style N fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def append(arr, val):
    arr.append(val)   # writes into spare capacity, or doubles first if full

# Time: O(1) amortized, Space: O(1)
# The one-in-a-while resize is O(n), but doubling makes it rare.`,
      language: 'python'
    },
    {
      heading: 'Operation 4: Insert at Index',
      text: '<strong>What it does:</strong> Place a new element at a specific index, keeping the existing order.<br/><strong>Best efficiency:</strong> O(n) — reaching the slot is O(1), but every element from that index onward must shift one position right to open a gap. Worst case is inserting at index 0, which moves all n elements.',
      diagram: {
        caption: 'Insert 15 at index 1: 20 and 30 shift right first',
        chart: `flowchart LR
    A["0:10"] --> N["1:15 new"] --> B["2:20"] --> C["3:30"]
    style N fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def insert(arr, index, val):
    arr.append(None)                       # grow by one slot
    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]                # shift right, from the back
    arr[index] = val

# Time: O(n) due to shifting, Space: O(1) extra`,
      language: 'python'
    },
    {
      heading: 'Operation 5: Delete at Index',
      text: '<strong>What it does:</strong> Remove the element at a given index and close the gap.<br/><strong>Best efficiency:</strong> O(n) — after removing the element, every element to its right must shift one position left so the block stays contiguous. Deleting the last element is O(1); deleting the first moves all n − 1 elements.',
      diagram: {
        caption: 'Delete index 1: 30 and 40 shift left over the gap',
        chart: `flowchart LR
    A["0:10"] --> B["1:20 del"] --> C["2:30"] --> D["3:40"]
    style B fill:#e74c3c,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def delete(arr, index):
    removed = arr[index]
    for i in range(index, len(arr) - 1):
        arr[i] = arr[i + 1]                # shift left to fill the gap
    arr.pop()                              # drop the duplicated last slot
    return removed

# Time: O(n) due to shifting, Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 6: Search by Value',
      text: '<strong>What it does:</strong> Find the index of the first element equal to a target value.<br/><strong>Best efficiency:</strong> O(n) linear scan on an unsorted array — nothing beats looking at every element. If the array is <em>sorted</em>, random access enables binary search in O(log n), which no linked structure can do.',
      diagram: {
        caption: 'Linear scan for 30: check 10, 20, then hit index 2',
        chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:30"] --> D["3:40"]
    style C fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def search(arr, target):
    for i, x in enumerate(arr):
        if x == target:
            return i
    return -1

# Unsorted: Time O(n), Space O(1)

def binary_search(arr, target):   # requires a sorted array
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1

# Sorted: Time O(log n), Space O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 7: Reverse',
      text: '<strong>What it does:</strong> Flip the array in place so the last element becomes the first and vice versa.<br/><strong>Best efficiency:</strong> Two pointers swapping from both ends inward — O(n) time (exactly n/2 swaps) and O(1) space, no second array needed.',
      diagram: {
        caption: 'Two-pointer in-place reversal',
        chart: `flowchart LR
    subgraph Before["Before"]
      direction LR
      B1["0:10"] --> B2["1:20"] --> B3["2:30"] --> B4["3:40"] --> B5["4:50"]
    end
    subgraph After["After"]
      direction LR
      A1["0:50"] --> A2["1:40"] --> A3["2:30"] --> A4["3:20"] --> A5["4:10"]
    end
    Before ~~~ After`
      }
    },
    {
      heading: 'How two-pointer reversal works',
      text: '<p>Keep two indices: <strong>lo</strong> starting at 0 and <strong>hi</strong> starting at n − 1. Swap the elements they point at, then move <code>lo</code> one step right and <code>hi</code> one step left. Stop when they meet or cross — at that point every pair has been swapped exactly once.</p><ol><li><strong>Start:</strong> <code>lo = 0</code>, <code>hi = n - 1</code>. The outermost pair is swapped first, placing the final answer at both ends immediately.</li><li><strong>Each iteration:</strong> <code>arr[lo], arr[hi] = arr[hi], arr[lo]</code>, then <code>lo += 1</code> and <code>hi -= 1</code>. The swapped region grows inward from both ends.</li><li><strong>End:</strong> when <code>lo &gt;= hi</code>, the middle element (if n is odd) is already in its correct place, so nothing more to do.</li></ol><p><strong>Trace on [10, 20, 30, 40, 50]:</strong><br/>• Iteration 1: swap indices 0 and 4 → <code>[50, 20, 30, 40, 10]</code>.<br/>• Iteration 2: swap indices 1 and 3 → <code>[50, 40, 30, 20, 10]</code>.<br/>• <code>lo = 2</code>, <code>hi = 2</code> — pointers meet, stop. Element 30 was already home.</p>'
    },
    {
      text: 'Code:',
      code: `def reverse(arr):
    lo, hi = 0, len(arr) - 1
    while lo < hi:
        arr[lo], arr[hi] = arr[hi], arr[lo]   # swap the outer pair
        lo += 1
        hi -= 1

# Time: O(n) — n/2 swaps, Space: O(1) — in place`,
      language: 'python'
    },
    {
      heading: 'Operation 8: Update by Index',
      text: '<strong>What it does:</strong> Overwrite the value stored at a given index.<br/><strong>Best efficiency:</strong> O(1) — just like access, the address is computed directly and the write lands in a single step. No shifting, no traversal, no reallocation.',
      diagram: {
        caption: 'Update arr[2] from 30 to 99 in one write',
        chart: `flowchart LR
    A["0:10"] --> B["1:20"] --> C["2:99"] --> D["3:40"]
    style C fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def update(arr, index, val):
    if index < 0 or index >= len(arr):
        raise IndexError("index out of range")
    arr[index] = val

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    // H — Complete DynamicArray class (Python/Java tabs)
    {
      heading: 'Complete DynamicArray Class',
      text: 'Now build a dynamic array from scratch to see exactly what Python\'s <code>list</code> and Java\'s <code>ArrayList</code> hide from you. The key discipline: the backing store is a <em>fixed-capacity</em> block (in Python we simulate it with a list of <code>None</code> values of a fixed length and never call <code>list.append</code> on it). When it fills up, the class allocates a new block of double the capacity, copies every element over by hand, and only then continues. Tracking <code>size</code> (how many slots are used) separately from <code>capacity</code> (how many slots exist) is the whole trick.'
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete DynamicArray Class in Python',
        code: `class DynamicArray:
    def __init__(self, capacity=4):
        self._data = [None] * capacity   # fixed-size backing store
        self._size = 0                   # slots actually in use

    def __len__(self):
        return self._size

    def capacity(self):
        return len(self._data)

    def _check_index(self, index, allow_end=False):
        upper = self._size if allow_end else self._size - 1
        if index < 0 or index > upper:
            raise IndexError("index out of range")

    def get(self, index):
        self._check_index(index)
        return self._data[index]          # O(1)

    def set(self, index, val):
        self._check_index(index)
        self._data[index] = val           # O(1)

    def _resize(self, new_capacity):
        new_data = [None] * new_capacity  # brand-new bigger block
        for i in range(self._size):       # manual copy: O(n)
            new_data[i] = self._data[i]
        self._data = new_data

    def append(self, val):
        if self._size == len(self._data):           # full?
            self._resize(max(1, 2 * len(self._data)))
        self._data[self._size] = val
        self._size += 1

    def insert(self, index, val):
        self._check_index(index, allow_end=True)
        if self._size == len(self._data):
            self._resize(max(1, 2 * len(self._data)))
        for i in range(self._size, index, -1):      # shift right
            self._data[i] = self._data[i - 1]
        self._data[index] = val
        self._size += 1

    def remove(self, index):
        self._check_index(index)
        removed = self._data[index]
        for i in range(index, self._size - 1):      # shift left
            self._data[i] = self._data[i + 1]
        self._size -= 1
        self._data[self._size] = None               # clear stale slot
        return removed

    def __str__(self):
        vals = ", ".join(str(self._data[i]) for i in range(self._size))
        return "[" + vals + "]  (size=" + str(self._size) + \
               ", capacity=" + str(self.capacity()) + ")"

# Driver
da = DynamicArray(4)
for v in [10, 20, 30, 40]:
    da.append(v)
print(da)          # [10, 20, 30, 40]  (size=4, capacity=4)
da.append(50)      # full -> resize 4 to 8, copy, then write
print(da)          # [10, 20, 30, 40, 50]  (size=5, capacity=8)
da.insert(1, 15)
print(da)          # [10, 15, 20, 30, 40, 50]  (size=6, capacity=8)
print(da.remove(0))   # 10
print(da)          # [15, 20, 30, 40, 50]  (size=5, capacity=8)
da.set(2, 99)
print(da.get(2))   # 99
print(da)          # [15, 20, 99, 40, 50]  (size=5, capacity=8)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete DynamicArray Class in Java',
        code: `import java.util.Arrays;

public class DynamicArray {
    private int[] data;   // fixed-size backing store
    private int size;     // slots actually in use

    public DynamicArray(int capacity) {
        data = new int[capacity];
        size = 0;
    }

    public int length()   { return size; }
    public int capacity() { return data.length; }

    private void checkIndex(int index, boolean allowEnd) {
        int upper = allowEnd ? size : size - 1;
        if (index < 0 || index > upper) {
            throw new IndexOutOfBoundsException("index out of range: " + index);
        }
    }

    public int get(int index) {
        checkIndex(index, false);
        return data[index];              // O(1)
    }

    public void set(int index, int val) {
        checkIndex(index, false);
        data[index] = val;               // O(1)
    }

    private void resize(int newCapacity) {
        data = Arrays.copyOf(data, newCapacity);   // allocate + copy: O(n)
    }

    public void append(int val) {
        if (size == data.length) resize(Math.max(1, 2 * data.length));
        data[size] = val;
        size++;
    }

    public void insert(int index, int val) {
        checkIndex(index, true);
        if (size == data.length) resize(Math.max(1, 2 * data.length));
        for (int i = size; i > index; i--) {       // shift right
            data[i] = data[i - 1];
        }
        data[index] = val;
        size++;
    }

    public int remove(int index) {
        checkIndex(index, false);
        int removed = data[index];
        for (int i = index; i < size - 1; i++) {   // shift left
            data[i] = data[i + 1];
        }
        size--;
        return removed;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < size; i++) {
            if (i > 0) sb.append(", ");
            sb.append(data[i]);
        }
        sb.append("]  (size=").append(size);
        sb.append(", capacity=").append(data.length).append(")");
        return sb.toString();
    }

    public static void main(String[] args) {
        DynamicArray da = new DynamicArray(4);
        for (int v : new int[]{10, 20, 30, 40}) da.append(v);
        System.out.println(da);   // [10, 20, 30, 40]  (size=4, capacity=4)
        da.append(50);            // full -> resize 4 to 8, copy, then write
        System.out.println(da);   // [10, 20, 30, 40, 50]  (size=5, capacity=8)
        da.insert(1, 15);
        System.out.println(da);   // [10, 15, 20, 30, 40, 50]  (size=6, capacity=8)
        System.out.println(da.remove(0));   // 10
        System.out.println(da);   // [15, 20, 30, 40, 50]  (size=5, capacity=8)
        da.set(2, 99);
        System.out.println(da.get(2));      // 99
        System.out.println(da);   // [15, 20, 99, 40, 50]  (size=5, capacity=8)
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    // I — Complexity Summary
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of array operation complexities. Costs assume a dynamic array; for a static array, treat append/insert as impossible when full. The single most important rule: <strong>reaching a position by index is always O(1)</strong> thanks to offset arithmetic — the only operations that cost O(n) are the ones that must move other elements to keep the block contiguous.',
      table: {
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Traverse / Print', 'O(n)', 'O(1)', 'Visit every element once with a plain index loop. Because the elements are contiguous, CPU cache prefetching makes this the fastest possible linear scan.'],
          ['Access by index', 'O(1)', 'O(1)', 'The address is computed directly as base + index × element_size — one multiply, one add, one memory read. No other element is ever touched, no matter how large the array grows.'],
          ['Append', 'O(1) amortized', 'O(1)', 'Usually a single write into spare capacity. When the backing store is full, it is doubled and every element copied — O(n) for that one append — but doubling makes resizes so rare that the average cost stays O(1).'],
          ['Insert at index', 'O(n)', 'O(1)', 'Reaching the slot is O(1), but every element from that index onward must shift one position right to open a gap — n moves in the worst case (insert at index 0), n/2 on average.'],
          ['Delete at index', 'O(n)', 'O(1)', 'Same shifting story in reverse: every element to the right of the gap moves one position left. Deleting the last element is O(1); deleting the first is the O(n) worst case.'],
          ['Search by value', 'O(n)', 'O(1)', 'On an unsorted array, a linear scan is the best possible — you cannot rule out an element you have not looked at. On a sorted array, random access enables binary search in O(log n).'],
          ['Reverse', 'O(n)', 'O(1)', 'Two pointers swap from both ends inward — exactly n/2 swaps, done in place with no second array.'],
          ['Update by index', 'O(1)', 'O(1)', 'A single computed-address write via offset arithmetic, just like access. No shifting, no reallocation.']
        ]
      },
      note: 'Interview tip: separate the "cost to reach the position" from the "cost to modify the structure". For an array, reaching index i is O(1) (offset math) but inserting or deleting there is O(n) (shifting). For a linked list it is exactly flipped: reaching position i is O(n) (pointer walking) but inserting or deleting there is O(1) (rewiring). And when interviewers ask why arrays outperform linked lists in practice even when the big-O matches, the hidden answer is cache locality — contiguous memory lets the CPU prefetch, scattered nodes do not.'
    },
    // J — Applications
    {
      heading: 'Real-World Applications',
      text: 'Arrays sit underneath almost every system that moves large amounts of data. Each example below shows the same pattern: the array is chosen because the workload is dominated by <strong>index-based reads and sequential iteration</strong> — exactly what contiguous memory does best — while insertions and deletions in the middle are rare or nonexistent.',
      list: [
        '<strong>Image pixel buffers:</strong> A photo is stored as one giant array of pixel values (row after row, three or four bytes per pixel for RGB). Every filter — blur, sharpen, brightness — iterates the buffer sequentially or jumps to pixel (x, y) via y × width + x offset math. Contiguity makes the iteration cache-friendly and lets GPUs process thousands of pixels in parallel.',
        '<strong>Database record pages:</strong> Databases like PostgreSQL store table rows inside fixed-size disk pages (typically 8 KB), with an array of row offsets at the end of each page. Finding the i-th row on a page is O(1) offset arithmetic, and reading a page pulls a contiguous block from disk in one I/O — far faster than chasing row pointers.',
        '<strong>Hash table backing arrays:</strong> Python dicts, Java HashMaps, and every other hash table store their entries in a flat array of buckets. The hash of a key is reduced modulo the array length to get a bucket index, giving expected O(1) lookup — and it all rests on the array\'s O(1) index access. The array is also resized (usually doubled) when the load factor gets too high, exactly like a dynamic array.',
        '<strong>Ring buffers in audio/video streaming:</strong> Media players smooth out jitter with a circular buffer: a fixed-size array where a write index drops incoming frames and a read index consumes them, both wrapping around with modulo arithmetic. The fixed array never reallocates mid-playback, and wraparound means no shifting ever happens — both ends are O(1).',
        '<strong>Spreadsheets:</strong> A spreadsheet row or column is essentially an array of cells, and formulas like <code>SUM(A1:A1000)</code> are sequential scans over a contiguous range. Referencing cell B47 is direct index math, which is why recalculating a huge sheet stays fast as long as formulas avoid volatile lookups.',
        '<strong>NumPy arrays and tensor storage:</strong> NumPy ndarrays (and the tensors under PyTorch/TensorFlow) store numbers in a flat C-contiguous buffer plus shape and stride metadata. Slicing, reshaping, and transposing often just change the metadata — no data is copied — and matrix operations iterate the buffer in cache-friendly order, which is why NumPy beats pure-Python lists by 10–100×.',
        '<strong>Stack and queue implementations:</strong> A stack is trivially an array with append and pop at the end — both O(1) amortized. An efficient queue is an array ring buffer with head and tail indices. Operating systems, browsers (the JavaScript call stack), and language runtimes all use array-backed versions because the per-operation cost is a single index bump with no allocation.',
        '<strong>Lookup tables in systems code:</strong> Character classifiers, font glyph metrics, CRC checksum tables, and CPU branch predictors all precompute answers into flat arrays so that "compute the answer" becomes "read table[x]" — replacing logic with a single O(1) memory read.'
      ],
      note: 'The common thread: every one of these workloads is index-heavy and iteration-heavy — read element i, scan a contiguous range, jump straight to a computed position — while structural mutation (insert/delete in the middle) is rare. When that is the access pattern, nothing beats an array.'
    },
    // K — Interview Questions intro
    {
      heading: 'Top Interview Questions on Arrays',
      text: 'The eight most frequently asked array interview questions are below — each in its own collapsible card with the key idea, a solved answer, and its complexity. Arrays anchor roughly 40% of all coding interviews, and nearly every problem is a variation of five recurring patterns: <strong>hash maps for complements</strong>, <strong>two pointers</strong>, <strong>sliding window</strong>, <strong>prefix products/sums</strong>, and <strong>Kadane\'s running best</strong>. Master these eight and the rest are disguises.',
      note: 'Pattern cheat sheet: pair-sum on an unsorted array → hash map of complements; pair-sum on a sorted array or in-place reversal → two pointers from both ends; contiguous subarray with a constraint → sliding window; "except self" or range queries → prefix products/sums; maximum-sum contiguous subarray → Kadane\'s. In-place rearrangement with O(1) space almost always means a slow write pointer or a reversal trick.'
    },
    // L — Interview Practice Questions (each an accordion, default closed)
    {
      heading: 'Practice Question 1: Two Sum (LeetCode 1, Easy)',
      text: '<strong>Problem:</strong> Given an array of integers and a target, return the indices of the two numbers that add up to the target.<br/><strong>Key idea:</strong> The brute force checks every pair in O(n²). Instead, walk once and store each value\'s index in a hash map. For the current element <code>x</code>, the partner you need is <code>target - x</code> — if that complement is already in the map, you are done. Each lookup is O(1), so the whole scan is linear at the cost of O(n) extra space.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def two_sum(nums, target):
    seen = {}                        # value -> index
    for i, x in enumerate(nums):
        if target - x in seen:       # complement already seen?
            return [seen[target - x], i]
        seen[x] = i
    return []                        # no pair found`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Best Time to Buy and Sell Stock (LeetCode 121, Easy)',
      text: '<strong>Problem:</strong> Given daily prices, choose one day to buy and a later day to sell to maximize profit; return 0 if no profit is possible.<br/><strong>Key idea:</strong> One pass, two running values. Track <code>min_price</code>, the cheapest day seen so far — that is the best day you could have bought. At each day, the best sell ending today is <code>price - min_price</code>; keep the maximum of that. Because the buy day must precede the sell day, only updating <code>min_price</code> from days already passed enforces the ordering for free.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def max_profit(prices):
    min_price = float("inf")   # cheapest buy day so far
    best = 0                   # best profit so far
    for p in prices:
        min_price = min(min_price, p)
        best = max(best, p - min_price)
    return best`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Maximum Subarray (LeetCode 53, Medium)',
      text: '<strong>Problem:</strong> Find the contiguous subarray with the largest sum and return that sum (the array contains negative numbers).<br/><strong>Key idea:</strong> Kadane\'s algorithm. Keep <code>curr</code>, the best sum of a subarray <em>ending at the current element</em>. At each element you either extend the previous run (<code>curr + x</code>) or start fresh at <code>x</code> — whichever is bigger. If the running sum has gone negative, it can only drag down anything that follows, so restarting is always right. Track the maximum <code>curr</code> ever seen as the answer.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def max_subarray(nums):
    best = curr = nums[0]
    for x in nums[1:]:
        curr = max(x, curr + x)   # extend the run or start fresh
        best = max(best, curr)
    return best`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Product of Array Except Self (LeetCode 238, Medium)',
      text: '<strong>Problem:</strong> Return an array where <code>out[i]</code> is the product of every element except <code>nums[i]</code> — without using division, in O(n).<br/><strong>Key idea:</strong> Every answer is the product of everything to its left times everything to its right. First pass left to right: store the running prefix product into <code>out[i]</code>. Second pass right to left: multiply <code>out[i]</code> by a running suffix product. Division would break on zeros; two passes never divide at all, and the suffix tracker lives in a single variable so the extra space stays O(1).<br/><strong>Complexity:</strong> Time O(n), Space O(1) extra (output array does not count).',
      example: {
        title: 'Python Solution',
        code: `def product_except_self(nums):
    n = len(nums)
    out = [1] * n
    left = 1
    for i in range(n):            # out[i] = product of nums[0..i-1]
        out[i] = left
        left *= nums[i]
    right = 1
    for i in range(n - 1, -1, -1):  # multiply by product of nums[i+1..n-1]
        out[i] *= right
        right *= nums[i]
    return out`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Contains Duplicate (LeetCode 217, Easy)',
      text: '<strong>Problem:</strong> Return true if any value appears at least twice in the array.<br/><strong>Key idea:</strong> Sorting would work in O(n log n) (duplicates become adjacent), but a hash set does it in one pass. Add each element to the set as you scan; the moment an element is already there, you have found a duplicate and can exit early — the best case is O(1). The set never holds more than n entries, so space is O(n) worst case.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def contains_duplicate(nums):
    seen = set()
    for x in nums:
        if x in seen:
            return True           # early exit on first duplicate
        seen.add(x)
    return False`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Move Zeroes (LeetCode 283, Easy)',
      text: '<strong>Problem:</strong> Move all zeros to the end of the array, in place, preserving the relative order of the non-zero elements.<br/><strong>Key idea:</strong> A slow write pointer. Scan with a read pointer; every time you see a non-zero value, write it at <code>write</code> and advance <code>write</code>. This compacts all non-zeros to the front in their original order (a stable partition). Then fill everything from <code>write</code> to the end with zeros. One pass plus one fill, all in place — no second array.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def move_zeroes(nums):
    write = 0
    for x in nums:                # compact non-zeros to the front
        if x != 0:
            nums[write] = x
            write += 1
    for i in range(write, len(nums)):
        nums[i] = 0               # fill the tail with zeros`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Rotate Array (LeetCode 189, Medium)',
      text: '<strong>Problem:</strong> Rotate the array to the right by k steps, in place with O(1) extra space.<br/><strong>Key idea:</strong> Triple reversal. Rotating right by k moves the last k elements to the front. Reverse the whole array — the last k elements are now at the front but in the wrong internal order, and so is the rest. Reverse the first k elements and then the remaining n − k separately, and both groups snap into place. Remember <code>k %= n</code> first, since rotating by n does nothing. Each reversal is Operation 7 from this page.<br/><strong>Complexity:</strong> Time O(n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def rotate(nums, k):
    n = len(nums)
    if n == 0:
        return
    k %= n                         # rotating by n changes nothing

    def rev(lo, hi):
        while lo < hi:
            nums[lo], nums[hi] = nums[hi], nums[lo]
            lo += 1
            hi -= 1

    rev(0, n - 1)                  # 1: whole array
    rev(0, k - 1)                  # 2: first k elements
    rev(k, n - 1)                  # 3: remaining n - k`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Merge Sorted Array (LeetCode 88, Easy)',
      text: '<strong>Problem:</strong> <code>nums1</code> has length m + n: its first m elements are sorted, the last n are placeholder zeros with enough room. Merge the sorted array <code>nums2</code> (length n) into <code>nums1</code> as one sorted array, in place.<br/><strong>Key idea:</strong> Fill from the back. Merging front-to-back would overwrite elements of <code>nums1</code> you have not read yet — but the spare capacity is at the <em>end</em>, so compare the largest remaining elements of both arrays and place the winner at the write pointer starting at index m + n − 1, walking all three pointers left. When <code>nums2</code> runs out you are done (the rest of <code>nums1</code> is already in place); if <code>nums1</code> runs out first, the loop keeps copying the rest of <code>nums2</code>.<br/><strong>Complexity:</strong> Time O(m + n), Space O(1).',
      example: {
        title: 'Python Solution',
        code: `def merge(nums1, m, nums2, n):
    i, j, w = m - 1, n - 1, m + n - 1   # read nums1, read nums2, write
    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[w] = nums1[i]
            i -= 1
        else:
            nums1[w] = nums2[j]
            j -= 1
        w -= 1`,
        language: 'python',
        type: 'code'
      }
    }
  ]
}
