// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.482Z

export const dsaQuestions = {
  "questions": [
    {
      "question": "Find the letter frequency in the given text?",
      "answer": "<div class=\"card mt-2\">\n                <div class=\"card-body\">\n                  <h6 class=\"card-subtitle mb-2 text-muted\">Approach:</h6>\n                  <p class=\"card-text\">\n                    Use Java Streams to calculate the frequency of each letter in the text.\n                  </p>\n                  <h6 class=\"card-subtitle mt-3 mb-2 text-muted\">Code Example:</h6>\n                  <pre><code class=\"language-java\">import java.util.*;\n  import java.util.stream.Collectors;\n  \n  public class LetterFrequency {\n    public static void main(String[] args) {\n        String text = \"hello world\";\n  \n        // Convert text to lowercase and filter only letters\n        Map&lt;Character, Long&gt; frequencyMap = text.toLowerCase().chars()\n            .filter(Character::isLetter) // Filter only alphabetic characters\n            .mapToObj(c -&gt; (char) c)     // Convert int to Character\n            .collect(Collectors.groupingBy(\n                Function.identity(),     // Group by character\n                Collectors.counting()    // Count occurrences\n            ));\n  \n        System.out.println(frequencyMap);\n    }\n  }</code></pre>\n                  <h6 class=\"card-subtitle mt-3 mb-2 text-muted\">Output:</h6>\n                  <pre><code class=\"language-json\">{d=1, e=1, h=1, l=3, o=2, r=1, w=1}</code></pre>\n                </div>\n              </div>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Use Java Streams to calculate the frequency of each letter in the text.",
        "Collectors; public class LetterFrequency { public static void main(String[] args) { String text = \"hello world\"; // Convert text to lowercase and filter only letters Map frequencyMap = text."
      ]
    },
    {
      "question": "How will sort HashMap by value?",
      "answer": "<div class=\"card mt-2\">\n                <div class=\"card-body\">\n                  <h6 class=\"card-subtitle mb-2 text-muted\">Approach:</h6>\n                  <p class=\"card-text\">\n                    Use Java Streams to sort the entries of the `HashMap` by their values.\n                  </p>\n                  <h6 class=\"card-subtitle mt-3 mb-2 text-muted\">Code Example:</h6>\n                  <pre><code class=\"language-java\">import java.util.*;\n  import java.util.stream.Collectors;\n  \n  public class SortHashMapByValue {\n    public static void main(String[] args) {\n        Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();\n        map.put(\"apple\", 3);\n        map.put(\"banana\", 1);\n        map.put(\"cherry\", 2);\n  \n        // Sort the map by value\n        Map&lt;String, Integer&gt; sortedMap = map.entrySet().stream()\n            .sorted(Map.Entry.comparingByValue()) // Sort by value\n            .collect(Collectors.toMap(\n                Map.Entry::getKey,       // Key mapper\n                Map.Entry::getValue,     // Value mapper\n                (e1, e2) -&gt; e1,          // Merge function (in case of duplicates)\n                LinkedHashMap::new       // Preserve insertion order\n            ));\n  \n        System.out.println(sortedMap);\n    }\n  }</code></pre>\n                  <h6 class=\"card-subtitle mt-3 mb-2 text-muted\">Output:</h6>\n                  <pre><code class=\"language-json\">{banana=1, cherry=2, apple=3}</code></pre>\n                  <h6 class=\"card-subtitle mt-3 mb-2 text-muted\">Explanation:</h6>\n                  <ul class=\"list-unstyled\">\n                    <li>\n                      The `entrySet().stream()` method converts the map into a stream of entries.\n                    </li>\n                    <li>\n                      `sorted(Map.Entry.comparingByValue())` sorts the entries by their values.\n                    </li>\n                    <li>\n                      `Collectors.toMap()` collects the sorted entries into a `LinkedHashMap` to\n                      preserve the order.\n                    </li>\n                  </ul>\n                </div>\n              </div>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "The `entrySet().stream()` method converts the map into a stream of entries.",
        "`sorted(Map.Entry.comparingByValue())` sorts the entries by their values.",
        "`Collectors.toMap()` collects the sorted entries into a `LinkedHashMap` to preserve the order."
      ]
    },
    {
      "question": "Find nth largest in the array with time complexity O(n)?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Use the Quickselect algorithm (a variation of Quicksort).\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>public int findKthLargest(int[] nums, int k) {\n    return quickSelect(nums, 0, nums.length - 1, nums.length - k);\n  }\n  \n  private int quickSelect(int[] nums, int left, int right, int k) {\n    if (left == right) return nums[left];\n    int pivotIndex = partition(nums, left, right);\n    if (pivotIndex == k) return nums[k];\n    else if (pivotIndex &gt; k) return quickSelect(nums, left, pivotIndex - 1, k);\n    else return quickSelect(nums, pivotIndex + 1, right, k);\n  }\n  \n  private int partition(int[] nums, int left, int right) {\n    int pivot = nums[right], i = left;\n    for (int j = left; j&lt;right; j++) {\n        if (nums[j] &lt;= pivot) {\n            swap(nums, i, j);\n            i++;\n        }\n    }\n    swap(nums, i, right);\n    return i;\n  }\n  \n  private void swap(int[] nums, int i, int j) {\n    int temp = nums[i];\n    nums[i] = nums[j];\n    nums[j] = temp;\n  }</code></pre>\n                </li>\n                <li>\n                  <strong>Explanation:</strong>\n                  Quickselect reduces the problem size by partitioning the array around a pivot.\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Use the Quickselect algorithm (a variation of Quicksort).",
        "Explanation: Quickselect reduces the problem size by partitioning the array around a pivot."
      ]
    },
    {
      "question": "Sort the array with less time complexity?",
      "answer": "<ol>\n                <li>\n                  <strong>Best Sorting Algorithm:</strong>\n                  Use Merge Sort or Heap Sort for O(n log n) time complexity.\n                </li>\n                <li>\n                  <strong>Code Example (Merge Sort):</strong>\n                  <pre><code>void mergeSort(int[] arr, int left, int right) {\n    if (left&lt;right) {\n        int mid = left + (right - left) / 2;\n        mergeSort(arr, left, mid);\n        mergeSort(arr, mid + 1, right);\n        merge(arr, left, mid, right);\n    }\n  }\n  \n  void merge(int[] arr, int left, int mid, int right) {\n    int n1 = mid - left + 1, n2 = right - mid;\n    int[] L = new int[n1], R = new int[n2];\n    System.arraycopy(arr, left, L, 0, n1);\n    System.arraycopy(arr, mid + 1, R, 0, n2);\n    int i = 0, j = 0, k = left;\n    while (i&lt;n1 && j&lt;n2) {\n        if (L[i] &lt;= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i&lt;n1) arr[k++] = L[i++];\n    while (j&lt;n2) arr[k++] = R[j++];\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Best Sorting Algorithm: Use Merge Sort or Heap Sort for O(n log n) time complexity.",
        "Code Example (Merge Sort): void mergeSort(int[] arr, int left, int right) { if (left"
      ]
    },
    {
      "question": "Print the index of the next maximum element in the array with O(n) time complexity (ans: can be done with stack data structure)?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Use a stack to track elements and their indices.\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>import java.util.*;\n  \n  public class NextGreaterElement {\n    public static int[] nextGreaterElement(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        Arrays.fill(result, -1);\n        Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();\n        for (int i = 0; i&lt;n; i++) {\n            while (!stack.isEmpty() && nums[stack.peek()]&lt;nums[i]) {\n                result[stack.pop()] = nums[i];\n            }\n            stack.push(i);\n        }\n        return result;\n    }\n  \n    public static void main(String[] args) {\n        int[] nums = {4, 5, 2, 25};\n        int[] result = nextGreaterElement(nums);\n        System.out.println(Arrays.toString(result));\n    }\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Use a stack to track elements and their indices."
      ]
    },
    {
      "question": "Duplicate elements count?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Use a HashMap to count occurrences.\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>import java.util.*;\n  \n  public class DuplicateCount {\n    public static Map&lt;Integer, Integer&gt; countDuplicates(int[] nums) {\n        Map&lt;Integer, Integer&gt; counts = new HashMap&lt;&gt;();\n        for (int num : nums) {\n            counts.put(num, counts.getOrDefault(num, 0) + 1);\n        }\n        return counts;\n    }\n  \n    public static void main(String[] args) {\n        int[] nums = {1, 2, 2, 3, 3, 3};\n        Map&lt;Integer, Integer&gt; result = countDuplicates(nums);\n        System.out.println(result);\n    }\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Use a HashMap to count occurrences."
      ]
    },
    {
      "question": "Remove duplicates in the array?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Use a Set to remove duplicates.\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>import java.util.*;\n  \n  public class RemoveDuplicates {\n    public static int[] removeDuplicates(int[] nums) {\n        Set&lt;Integer&gt; uniqueSet = new LinkedHashSet&lt;&gt;();\n        for (int num : nums) {\n            uniqueSet.add(num);\n        }\n        return uniqueSet.stream().mapToInt(Integer::intValue).toArray();\n    }\n  \n    public static void main(String[] args) {\n        int[] nums = {1, 2, 2, 3, 3, 3};\n        int[] result = removeDuplicates(nums);\n        System.out.println(Arrays.toString(result));\n    }\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Use a Set to remove duplicates."
      ]
    },
    {
      "question": "Find the anagram words (print all the respective anagram words in each line) and in the array of words input and sort?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Group words by their sorted character sequence using a HashMap.\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>import java.util.*;\n  \n  public class AnagramWords {\n    public static List&lt;List&lt;String&gt; groupAnagrams(String[] words) {\n        Map&lt;String, List&lt;String&gt;&gt; map = new HashMap&lt;&gt;();\n        for (String word : words) {\n            char[] chars = word.toCharArray();\n            Arrays.sort(chars);\n            String key = new String(chars);\n            map.computeIfAbsent(key, k -&gt; new ArrayList&lt;&gt;()).add(word);\n        }\n        return new ArrayList&lt;&gt;(map.values());\n    }\n  \n    public static void main(String[] args) {\n        String[] words = {\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"};\n        List&lt;List&lt;String&gt; result = groupAnagrams(words);\n        result.forEach(System.out::println);\n    }\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Group words by their sorted character sequence using a HashMap."
      ]
    },
    {
      "question": "Reverse the odd pair of elements with linked list?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Traverse the linked list and reverse pairs of nodes at odd positions.\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>class ListNode {\n    int val;\n    ListNode next;\n    ListNode(int val) { this.val = val; }\n  }\n  \n  public class ReverseOddPairs {\n    public static ListNode reverseOddPairs(ListNode head) {\n        if (head == null || head.next == null) return head;\n        ListNode dummy = new ListNode(0);\n        dummy.next = head;\n        ListNode prev = dummy;\n        while (prev.next != null && prev.next.next != null) {\n            ListNode first = prev.next;\n            ListNode second = first.next;\n            first.next = second.next;\n            second.next = first;\n            prev.next = second;\n            prev = first;\n        }\n        return dummy.next;\n    }\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Traverse the linked list and reverse pairs of nodes at odd positions."
      ]
    },
    {
      "question": "Find the second max?",
      "answer": "<ol>\n                <li>\n                  <strong>Approach:</strong>\n                  Traverse the array once to find the maximum and second maximum.\n                </li>\n                <li>\n                  <strong>Code Example:</strong>\n                  <pre><code>public static int findSecondMax(int[] nums) {\n    if (nums.length&lt;2) throw new IllegalArgumentException(\"Array too small\");\n    int max = Integer.MIN_VALUE, secondMax = Integer.MIN_VALUE;\n    for (int num : nums) {\n        if (num &gt; max) {\n            secondMax = max;\n            max = num;\n        } else if (num &gt; secondMax && num != max) {\n            secondMax = num;\n        }\n    }\n    return secondMax;\n  }</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Approach: Traverse the array once to find the maximum and second maximum.",
        "Code Example: public static int findSecondMax(int[] nums) { if (nums.length max) { secondMax = max; max = num; } else if (num > secondMax && num != max) { secondMax = num; } } return secondMax; }"
      ]
    },
    {
      "question": "Find factorial?",
      "answer": "<pre ngnonbindable=\"\"><code>int digit = 5;\nint fact = 1;\nfor (int i = 2; i &lt;= digit; i++) {{ '{' }}\n  fact *= i;\n{{ '}' }}\nSystem.out.println(fact);\n\npublic static double factorial(int n) {{ '{' }}\n  if (n == 0 || n == 1) return 1;\n  return n * factorial(n - 1);\n{{ '}' }}\n\n// Using streams\nSystem.out.println(IntStream.rangeClosed(1, 5).reduce(1, (a, b) -&gt; a * b));\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int digit = 5; int fact = 1; for (int i = 2; i a * b));"
      ]
    },
    {
      "question": "Sort and group the array?",
      "answer": "<pre ngnonbindable=\"\"><code>int[] arr = {{ 5, 2, 8, 1 }};\nArrays.sort(arr);\nSystem.out.println(Arrays.toString(arr));\n\nMap&lt;Boolean, List&lt;Integer&gt;&gt; groups = Arrays.stream(arr).boxed()\n  .collect(Collectors.partitioningBy(n -&gt; n % 2 == 0));\nSystem.out.println(groups);\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int[] arr = {{ 5, 2, 8, 1 }}; Arrays.",
        "toString(arr)); Map > groups = Arrays."
      ]
    },
    {
      "question": "Find third highest salary?",
      "answer": "<pre ngnonbindable=\"\"><code>SELECT MAX(salary) FROM emp \nWHERE salary &lt; (SELECT MAX(salary) FROM emp);\n\nSELECT DISTINCT salary FROM employee \nORDER BY salary DESC LIMIT 1 OFFSET 2;\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "SELECT MAX(salary) FROM emp WHERE salary"
      ]
    },
    {
      "question": "Reverse an array?",
      "answer": "<pre ngnonbindable=\"\"><code>int[] arr = {{ 1, 2, 3, 4, 5 }};\nint[] reversed = new int[arr.length];\nint index = 0;\nfor (int i = arr.length - 1; i &gt;= 0; i--) {{ '{' }}\n  reversed[index++] = arr[i];\n{{ '}' }}\nSystem.out.println(Arrays.toString(reversed));\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int[] arr = {{ 1, 2, 3, 4, 5 }}; int[] reversed = new int[arr.",
        "length]; int index = 0; for (int i = arr."
      ]
    },
    {
      "question": "Find specific string occurrence?",
      "answer": "<pre ngnonbindable=\"\"><code>String str = \"rajaranirajaranirajaparasa\";\nString word = \"raja\";\nlong count = IntStream.range(0, str.length())\n  .filter(i -&gt; str.startsWith(word, i)).count();\nSystem.out.println(count);\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "String str = \"rajaranirajaranirajaparasa\"; String word = \"raja\"; long count = IntStream."
      ]
    },
    {
      "question": "Find specific character occurrence?",
      "answer": "<pre ngnonbindable=\"\"><code>String str = \"rajaranirajaranirajaparasa\";\nchar ch = 'a';\nlong count = str.chars().filter(c -&gt; c == ch).count();\nSystem.out.println(count);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "String str = \"rajaranirajaranirajaparasa\"; char ch = 'a'; long count = str."
      ]
    },
    {
      "question": "Find mean and median?",
      "answer": "<pre ngnonbindable=\"\"><code>double mean = Arrays.stream(arr).average().orElse(0.0);\nint[] sorted = Arrays.stream(arr).sorted().toArray();\ndouble median;\nif (sorted.length % 2 != 0) {{ '{' }}\n  median = sorted[sorted.length / 2];\n{{ '}' }} else {{ '{' }}\n  median = (sorted[(sorted.length / 2) - 1] + sorted[sorted.length / 2]) / 2.0;\n{{ '}' }}\nSystem.out.println(\"Mean: \" + mean + \", Median: \" + median);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "toArray(); double median; if (sorted.",
        "= 0) {{ '{' }} median = sorted[sorted."
      ]
    },
    {
      "question": "Check if strings are isomorphic?",
      "answer": "<pre ngnonbindable=\"\"><code>public static boolean isIsomorphic(String s, String t) {{ '{' }}\n  if (s.length() != t.length()) return false;\n  int[] mapS = new int[256], mapT = new int[256];\n  for (int i = 0; i &lt; s.length(); i++) {{ '{' }}\n    char cs = s.charAt(i), ct = t.charAt(i);\n    if (mapS[cs] == 0 && mapT[ct] == 0) {{ '{' }}\n      mapS[cs] = ct;\n      mapT[ct] = cs;\n    {{ '}' }} else if (mapS[cs] != ct || mapT[ct] != cs) {{ '{' }}\n      return false;\n    {{ '}' }}\n  {{ '}' }}\n  return true;\n{{ '}' }}\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "public static boolean isIsomorphic(String s, String t) {{ '{' }} if (s."
      ]
    },
    {
      "question": "Arrange given string as sequence numbers?",
      "answer": "<pre ngnonbindable=\"\"><code>String input = \"1 2 3 a -5 -3 -1 0 4\";\nPattern pt = Pattern.compile(\"-?\\\\d+\");\nMatcher mc = pt.matcher(input);\nList&lt;Integer&gt; list = new ArrayList&lt;&gt;();\nwhile(mc.find()) {{ '{' }}\n  list.add(Integer.parseInt(mc.group()));\n{{ '}' }}\nCollections.sort(list);\nSystem.out.println(list);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "String input = \"1 2 3 a -5 -3 -1 0 4\"; Pattern pt = Pattern.",
        "matcher(input); List list = new ArrayList<>(); while(mc."
      ]
    },
    {
      "question": "Reduce method example?",
      "answer": "<pre ngnonbindable=\"\"><code>List&lt;Integer&gt; list = Arrays.asList(1, 2, 3);\nint sum = list.stream().reduce(0, Integer::sum);\nSystem.out.println(sum);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "List list = Arrays.asList(1, 2, 3); int sum = list.stream().reduce(0, Integer::sum); System.out.println(sum);"
      ]
    },
    {
      "question": "Find 2 numbers with target sum?",
      "answer": "<pre ngnonbindable=\"\"><code>public static int[] findTwoSum(int[] nums, int target) {{ '{' }}\n  Set&lt;Integer&gt; set = new HashSet&lt;&gt;();\n  for (int num : nums) {{ '{' }}\n    if (set.contains(target - num)) {{ '{' }}\n      return new int[] {{ target - num, num }};\n    {{ '}' }}\n    set.add(num);\n  {{ '}' }}\n  return new int[] {{ -1 }};\n{{ '}' }}\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "public static int[] findTwoSum(int[] nums, int target) {{ '{' }} Set set = new HashSet<>(); for (int num : nums) {{ '{' }} if (set.",
        "contains(target - num)) {{ '{' }} return new int[] {{ target - num, num }}; {{ '}' }} set."
      ]
    },
    {
      "question": "Average from List collection?",
      "answer": "<pre ngnonbindable=\"\"><code>List&lt;Integer&gt; list = Arrays.asList(1, 2, 3, 4, 5);\ndouble avg = list.stream().mapToInt(Integer::intValue).average().orElse(0.0);\nSystem.out.println(avg);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "asList(1, 2, 3, 4, 5); double avg = list."
      ]
    },
    {
      "question": "Find missing small and big numbers?",
      "answer": "<pre ngnonbindable=\"\"><code>int[] data = {{ 1, 2, 3, 4, 6, 8 }};\nList&lt;Integer&gt; missing = new ArrayList&lt;&gt;();\nfor (int i = 0; i &lt; data.length - 1; i++) {{ '{' }}\n  if (data[i] + 1 != data[i + 1]) {{ '{' }}\n    missing.add(data[i] + 1);\n  {{ '}' }}\n{{ '}' }}\nSystem.out.println(missing);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int[] data = {{ 1, 2, 3, 4, 6, 8 }}; List missing = new ArrayList<>(); for (int i = 0; i"
      ]
    },
    {
      "question": "Recursive sum?",
      "answer": "<pre ngnonbindable=\"\"><code>public static int recursive(int n) {{ '{' }}\n  if (n &lt;= 1) return n;\n  return n + recursive(n - 1);\n{{ '}' }}\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "public static int recursive(int n) {{ '{' }} if (n"
      ]
    },
    {
      "question": "Find and format anagrams?",
      "answer": "<pre ngnonbindable=\"\"><code>List&lt;String&gt; words = List.of(\"abc\", \"bca\", \"cab\", \"def\");\nMap&lt;String, List&lt;String&gt;&gt; map = new HashMap&lt;&gt;();\nfor (String word : words) {{ '{' }}\n  char[] chars = word.toCharArray();\n  Arrays.sort(chars);\n  String key = new String(chars);\n  map.computeIfAbsent(key, k -&gt; new ArrayList&lt;&gt;()).add(word);\n{{ '}' }}\nSystem.out.println(map);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "of(\"abc\", \"bca\", \"cab\", \"def\"); Map > map = new HashMap<>(); for (String word : words) {{ '{' }} char[] chars = word.",
        "sort(chars); String key = new String(chars); map."
      ]
    },
    {
      "question": "Convert each string to char array?",
      "answer": "<pre ngnonbindable=\"\"><code>List&lt;String&gt; words = List.of(\"hello\", \"world\");\nwords.stream().map(String::toCharArray)\n  .forEach(arr -&gt; System.out.println(Arrays.toString(arr)));\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "List words = List.of(\"hello\", \"world\"); words.stream().map(String::toCharArray) .forEach(arr -> System.out.println(Arrays.toString(arr)));"
      ]
    },
    {
      "question": "Return indexes of target sum?",
      "answer": "<pre ngnonbindable=\"\"><code>int[] arr = {{ 3, 2, 4 }};\nint target = 6;\nList&lt;Integer&gt; indexes = new ArrayList&lt;&gt;();\nfor (int i = 0; i &lt; arr.length; i++) {{ '{' }}\n  for (int j = i + 1; j &lt; arr.length; j++) {{ '{' }}\n    if (arr[i] + arr[j] == target) {{ '{' }}\n      indexes.add(i);\n      indexes.add(j);\n    {{ '}' }}\n  {{ '}' }}\n{{ '}' }}\nSystem.out.println(indexes);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int[] arr = {{ 3, 2, 4 }}; int target = 6; List indexes = new ArrayList<>(); for (int i = 0; i"
      ]
    },
    {
      "question": "Even and odd numbers using streams?",
      "answer": "<pre ngnonbindable=\"\"><code>// Even\nIntStream.iterate(2, n -&gt; n + 2).limit(10).forEach(System.out::println);\n\n// Odd\nIntStream.iterate(1, n -&gt; n + 2).limit(10).forEach(System.out::println);\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "// Even IntStream.iterate(2, n -> n + 2).limit(10).forEach(System.out::println); // Odd IntStream.iterate(1, n -> n + 2).limit(10).forEach(System.out::println);"
      ]
    },
    {
      "question": "Longest palindromic substring?",
      "answer": "<pre ngnonbindable=\"\"><code>public static String longestPalindrome(String s) {{ '{' }}\n  int start = 0, end = 0;\n  for (int i = 0; i &lt; s.length(); i++) {{ '{' }}\n    int len1 = expand(s, i, i);\n    int len2 = expand(s, i, i + 1);\n    int len = Math.max(len1, len2);\n    if (len &gt; end - start) {{ '{' }}\n      start = i - (len - 1) / 2;\n      end = i + len / 2;\n    {{ '}' }}\n  {{ '}' }}\n  return s.substring(start, end + 1);\n{{ '}' }}\n\nprivate static int expand(String s, int left, int right) {{ '{' }}\n  while (left &gt;= 0 && right &lt; s.length() && s.charAt(left) == s.charAt(right)) {{ '{' }}\n    left--; right++;\n  {{ '}' }}\n  return right - left - 1;\n{{ '}' }}\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "public static String longestPalindrome(String s) {{ '{' }} int start = 0, end = 0; for (int i = 0; i end - start) {{ '{' }} start = i - (len - 1) / 2; end = i + len / 2; {{ '}' }} {{ '}' }} return s."
      ]
    },
    {
      "question": "Group employees by country and average age?",
      "answer": "<pre ngnonbindable=\"\"><code>Map&lt;String, Integer&gt; age = new HashMap&lt;&gt;();\nMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();\nfor (Employee emp : employees) {{ '{' }}\n  age.put(emp.country, age.getOrDefault(emp.country, 0) + emp.age);\n  count.put(emp.country, count.getOrDefault(emp.country, 0) + 1);\n{{ '}' }}\nfor (String c : age.keySet()) {{ '{' }}\n  System.out.println(c + \": \" + (double) age.get(c) / count.get(c));\n{{ '}' }}\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Map age = new HashMap<>(); Map count = new HashMap<>(); for (Employee emp : employees) {{ '{' }} age.",
        "country, 0) + 1); {{ '}' }} for (String c : age."
      ]
    },
    {
      "question": "Swap three numbers?",
      "answer": "<pre ngnonbindable=\"\"><code>int a = 10, b = 20, c = 30;\na = a + b + c;\nb = a - (b + c);\nc = a - (b + c);\na = a - (b + c);\nSystem.out.println(\"a=\" + a + \", b=\" + b + \", c=\" + c);\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int a = 10, b = 20, c = 30; a = a + b + c; b = a - (b + c); c = a - (b + c); a = a - (b + c); System."
      ]
    },
    {
      "question": "Print StringBuilder result?",
      "answer": "<pre ngnonbindable=\"\"><code>}\nSystem.out.println(builder);</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "} System.out.println(builder);"
      ]
    },
    {
      "question": "Find sum of digits?",
      "answer": "<pre ngnonbindable=\"\"><code>int number = 12345;\nint sum = 0;\nwhile(number &gt; 0) {\n  sum += number % 10;\n  number /= 10;\n}\nSystem.out.println(sum);</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "int number = 12345; int sum = 0; while(number > 0) { sum += number % 10; number /= 10; } System."
      ]
    },
    {
      "question": "HCL List comparison program?",
      "answer": "<pre ngnonbindable=\"\"><code>List&lt;Integer&gt; list = Arrays.asList(1,2,3,4,5,4,5,2,1);\nList&lt;Integer&gt; list2 = Arrays.asList(3,4,5,2);\n\nList&lt;Integer&gt; data = list.stream().distinct().toList();\n\nList&lt;Integer&gt; response = list.stream()\n  .filter(list2::contains)\n  .distinct()\n  .toList();\nSystem.out.println(response);\n\nList&lt;Integer&gt; reverseOrder = response.stream()\n  .sorted(Comparator.reverseOrder())\n  .toList();\nSystem.out.println(reverseOrder);</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "asList(1,2,3,4,5,4,5,2,1); List list2 = Arrays.",
        "println(response); List reverseOrder = response."
      ]
    },
    {
      "question": "Second highest salary using SQL?",
      "answer": "<pre ngnonbindable=\"\"><code>SELECT DISTINCT salary FROM employee \nORDER BY salary DESC \nLIMIT 1 OFFSET 1;</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "SELECT DISTINCT salary FROM employee ORDER BY salary DESC LIMIT 1 OFFSET 1;"
      ]
    },
    {
      "question": "Employee count city-wise (salary > 20000)?",
      "answer": "<pre ngnonbindable=\"\"><code>SELECT CITY, COUNT(*) AS EMPLOYEE_COUNT \nFROM EMPLOYEE \nWHERE SALARY &gt; 20000 \nGROUP BY CITY;</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "SELECT CITY, COUNT(*) AS EMPLOYEE_COUNT FROM EMPLOYEE WHERE SALARY > 20000 GROUP BY CITY;"
      ]
    },
    {
      "question": "Highest salary in each department using streams?",
      "answer": "<pre ngnonbindable=\"\"><code>Map&lt;String, Employee&gt; result = employees.stream()\n  .collect(Collectors.toMap(\n    Employee::getDepartment,\n    e -&gt; e,\n    BinaryOperator.maxBy(Comparator.comparingDouble(Employee::getSalary))\n  ));</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "toMap( Employee::getDepartment, e -> e, BinaryOperator."
      ]
    },
    {
      "question": "Product of all elements except self?",
      "answer": "<pre ngnonbindable=\"\"><code>import java.util.Arrays;\n\npublic class Main {\n  public static void main(String[] args) {\n    int[] arr = {2, 1, 4, 6};\n    int val = 1;\n    int[] data = new int[arr.length];\n\n    for(int i = 0; i &lt; arr.length; i++) {\n      for(int j = 0; j &lt; arr.length; j++) {\n        if(i == j) continue;\n        val *= arr[j];\n      }\n      data[i] = val;\n      val = 1;\n    }\n\n    System.out.println(Arrays.toString(data));\n  }\n}</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "DSA"
      ],
      "keyPoints": [
        "Arrays; public class Main { public static void main(String[] args) { int[] arr = {2, 1, 4, 6}; int val = 1; int[] data = new int[arr."
      ]
    }
  ]
}
