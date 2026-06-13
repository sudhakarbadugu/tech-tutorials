// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.669Z

export const dsaQuestions = {
  questions: [
    {
      question: 'Find the letter frequency in the given text?',
      answer: `<div class="card mt-2">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
                  <p class="card-text">
                    Use Java Streams to calculate the frequency of each letter in the text.
                  </p>
                  <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
                  <pre><code class="language-java">import java.util.*;
  import java.util.stream.Collectors;
  
  public class LetterFrequency {
    public static void main(String[] args) {
        String text = "hello world";
  
        // Convert text to lowercase and filter only letters
        Map<Character, Long> frequencyMap = text.toLowerCase().chars()
            .filter(Character::isLetter) // Filter only alphabetic characters
            .mapToObj(c -> (char) c)     // Convert int to Character
            .collect(Collectors.groupingBy(
                Function.identity(),     // Group by character
                Collectors.counting()    // Count occurrences
            ));
  
        System.out.println(frequencyMap);
    }
  }</code></pre>
                  <h6 class="card-subtitle mt-3 mb-2 text-muted">Output:</h6>
                  <pre><code class="language-json">{d=1, e=1, h=1, l=3, o=2, r=1, w=1}</code></pre>
                </div>
              </div>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'How will sort HashMap by value?',
      answer: `<div class="card mt-2">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 text-muted">Approach:</h6>
                  <p class="card-text">
                    Use Java Streams to sort the entries of the \`HashMap\` by their values.
                  </p>
                  <h6 class="card-subtitle mt-3 mb-2 text-muted">Code Example:</h6>
                  <pre><code class="language-java">import java.util.*;
  import java.util.stream.Collectors;
  
  public class SortHashMapByValue {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("apple", 3);
        map.put("banana", 1);
        map.put("cherry", 2);
  
        // Sort the map by value
        Map<String, Integer> sortedMap = map.entrySet().stream()
            .sorted(Map.Entry.comparingByValue()) // Sort by value
            .collect(Collectors.toMap(
                Map.Entry::getKey,       // Key mapper
                Map.Entry::getValue,     // Value mapper
                (e1, e2) -> e1,          // Merge function (in case of duplicates)
                LinkedHashMap::new       // Preserve insertion order
            ));
  
        System.out.println(sortedMap);
    }
  }</code></pre>
                  <h6 class="card-subtitle mt-3 mb-2 text-muted">Output:</h6>
                  <pre><code class="language-json">{banana=1, cherry=2, apple=3}</code></pre>
                  <h6 class="card-subtitle mt-3 mb-2 text-muted">Explanation:</h6>
                  <ul class="list-unstyled">
                    <li>
                      The \`entrySet().stream()\` method converts the map into a stream of entries.
                    </li>
                    <li>
                      \`sorted(Map.Entry.comparingByValue())\` sorts the entries by their values.
                    </li>
                    <li>
                      \`Collectors.toMap()\` collects the sorted entries into a \`LinkedHashMap\` to
                      preserve the order.
                    </li>
                  </ul>
                </div>
              </div>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find nth largest in the array with time complexity O(n)?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Use the Quickselect algorithm (a variation of Quicksort).
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>public int findKthLargest(int[] nums, int k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
  }
  
  private int quickSelect(int[] nums, int left, int right, int k) {
    if (left == right) return nums[left];
    int pivotIndex = partition(nums, left, right);
    if (pivotIndex == k) return nums[k];
    else if (pivotIndex > k) return quickSelect(nums, left, pivotIndex - 1, k);
    else return quickSelect(nums, pivotIndex + 1, right, k);
  }
  
  private int partition(int[] nums, int left, int right) {
    int pivot = nums[right], i = left;
    for (int j = left; j<right; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    }
    swap(nums, i, right);
    return i;
  }
  
  private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }</code></pre>
                </li>
                <li>
                  <strong>Explanation:</strong>
                  Quickselect reduces the problem size by partitioning the array around a pivot.
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Sort the array with less time complexity?',
      answer: `<ol>
                <li>
                  <strong>Best Sorting Algorithm:</strong>
                  Use Merge Sort or Heap Sort for O(n log n) time complexity.
                </li>
                <li>
                  <strong>Code Example (Merge Sort):</strong>
                  <pre><code>void mergeSort(int[] arr, int left, int right) {
    if (left<right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
  }
  
  void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1, n2 = right - mid;
    int[] L = new int[n1], R = new int[n2];
    System.arraycopy(arr, left, L, 0, n1);
    System.arraycopy(arr, mid + 1, R, 0, n2);
    int i = 0, j = 0, k = left;
    while (i<n1 && j<n2) {
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else arr[k++] = R[j++];
    }
    while (i<n1) arr[k++] = L[i++];
    while (j<n2) arr[k++] = R[j++];
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Print the index of the next maximum element in the array with O(n) time complexity (ans: can be done with stack data structure)?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Use a stack to track elements and their indices.
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>import java.util.*;
  
  public class NextGreaterElement {
    public static int[] nextGreaterElement(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i<n; i++) {
            while (!stack.isEmpty() && nums[stack.peek()]<nums[i]) {
                result[stack.pop()] = nums[i];
            }
            stack.push(i);
        }
        return result;
    }
  
    public static void main(String[] args) {
        int[] nums = {4, 5, 2, 25};
        int[] result = nextGreaterElement(nums);
        System.out.println(Arrays.toString(result));
    }
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Duplicate elements count?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Use a HashMap to count occurrences.
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>import java.util.*;
  
  public class DuplicateCount {
    public static Map<Integer, Integer> countDuplicates(int[] nums) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int num : nums) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }
        return counts;
    }
  
    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 3, 3};
        Map<Integer, Integer> result = countDuplicates(nums);
        System.out.println(result);
    }
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Remove duplicates in the array?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Use a Set to remove duplicates.
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>import java.util.*;
  
  public class RemoveDuplicates {
    public static int[] removeDuplicates(int[] nums) {
        Set<Integer> uniqueSet = new LinkedHashSet<>();
        for (int num : nums) {
            uniqueSet.add(num);
        }
        return uniqueSet.stream().mapToInt(Integer::intValue).toArray();
    }
  
    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 3, 3};
        int[] result = removeDuplicates(nums);
        System.out.println(Arrays.toString(result));
    }
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find the anagram words (print all the respective anagram words in each line) and in the array of words input and sort?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Group words by their sorted character sequence using a HashMap.
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>import java.util.*;
  
  public class AnagramWords {
    public static List<List<String> groupAnagrams(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }
  
    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String> result = groupAnagrams(words);
        result.forEach(System.out::println);
    }
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Reverse the odd pair of elements with linked list?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Traverse the linked list and reverse pairs of nodes at odd positions.
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
  }
  
  public class ReverseOddPairs {
    public static ListNode reverseOddPairs(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        while (prev.next != null && prev.next.next != null) {
            ListNode first = prev.next;
            ListNode second = first.next;
            first.next = second.next;
            second.next = first;
            prev.next = second;
            prev = first;
        }
        return dummy.next;
    }
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find the second max?',
      answer: `<ol>
                <li>
                  <strong>Approach:</strong>
                  Traverse the array once to find the maximum and second maximum.
                </li>
                <li>
                  <strong>Code Example:</strong>
                  <pre><code>public static int findSecondMax(int[] nums) {
    if (nums.length<2) throw new IllegalArgumentException("Array too small");
    int max = Integer.MIN_VALUE, secondMax = Integer.MIN_VALUE;
    for (int num : nums) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num != max) {
            secondMax = num;
        }
    }
    return secondMax;
  }</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find factorial?',
      answer: `<pre ngnonbindable=""><code>int digit = 5;
int fact = 1;
for (int i = 2; i <= digit; i++) {{ '{' }}
  fact *= i;
{{ '}' }}
System.out.println(fact);

public static double factorial(int n) {{ '{' }}
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
{{ '}' }}

// Using streams
System.out.println(IntStream.rangeClosed(1, 5).reduce(1, (a, b) -> a * b));
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Sort and group the array?',
      answer: `<pre ngnonbindable=""><code>int[] arr = {{ 5, 2, 8, 1 }};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));

Map<Boolean, List<Integer>> groups = Arrays.stream(arr).boxed()
  .collect(Collectors.partitioningBy(n -> n % 2 == 0));
System.out.println(groups);
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find third highest salary?',
      answer: `<pre ngnonbindable=""><code>SELECT MAX(salary) FROM emp 
WHERE salary < (SELECT MAX(salary) FROM emp);

SELECT DISTINCT salary FROM employee 
ORDER BY salary DESC LIMIT 1 OFFSET 2;
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Reverse an array?',
      answer: `<pre ngnonbindable=""><code>int[] arr = {{ 1, 2, 3, 4, 5 }};
int[] reversed = new int[arr.length];
int index = 0;
for (int i = arr.length - 1; i >= 0; i--) {{ '{' }}
  reversed[index++] = arr[i];
{{ '}' }}
System.out.println(Arrays.toString(reversed));
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find specific string occurrence?',
      answer: `<pre ngnonbindable=""><code>String str = "rajaranirajaranirajaparasa";
String word = "raja";
long count = IntStream.range(0, str.length())
  .filter(i -> str.startsWith(word, i)).count();
System.out.println(count);
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find specific character occurrence?',
      answer: `<pre ngnonbindable=""><code>String str = "rajaranirajaranirajaparasa";
char ch = 'a';
long count = str.chars().filter(c -> c == ch).count();
System.out.println(count);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find mean and median?',
      answer: `<pre ngnonbindable=""><code>double mean = Arrays.stream(arr).average().orElse(0.0);
int[] sorted = Arrays.stream(arr).sorted().toArray();
double median;
if (sorted.length % 2 != 0) {{ '{' }}
  median = sorted[sorted.length / 2];
{{ '}' }} else {{ '{' }}
  median = (sorted[(sorted.length / 2) - 1] + sorted[sorted.length / 2]) / 2.0;
{{ '}' }}
System.out.println("Mean: " + mean + ", Median: " + median);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Check if strings are isomorphic?',
      answer: `<pre ngnonbindable=""><code>public static boolean isIsomorphic(String s, String t) {{ '{' }}
  if (s.length() != t.length()) return false;
  int[] mapS = new int[256], mapT = new int[256];
  for (int i = 0; i < s.length(); i++) {{ '{' }}
    char cs = s.charAt(i), ct = t.charAt(i);
    if (mapS[cs] == 0 && mapT[ct] == 0) {{ '{' }}
      mapS[cs] = ct;
      mapT[ct] = cs;
    {{ '}' }} else if (mapS[cs] != ct || mapT[ct] != cs) {{ '{' }}
      return false;
    {{ '}' }}
  {{ '}' }}
  return true;
{{ '}' }}
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Arrange given string as sequence numbers?',
      answer: `<pre ngnonbindable=""><code>String input = "1 2 3 a -5 -3 -1 0 4";
Pattern pt = Pattern.compile("-?\\\\d+");
Matcher mc = pt.matcher(input);
List<Integer> list = new ArrayList<>();
while(mc.find()) {{ '{' }}
  list.add(Integer.parseInt(mc.group()));
{{ '}' }}
Collections.sort(list);
System.out.println(list);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Reduce method example?',
      answer: `<pre ngnonbindable=""><code>List<Integer> list = Arrays.asList(1, 2, 3);
int sum = list.stream().reduce(0, Integer::sum);
System.out.println(sum);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find 2 numbers with target sum?',
      answer: `<pre ngnonbindable=""><code>public static int[] findTwoSum(int[] nums, int target) {{ '{' }}
  Set<Integer> set = new HashSet<>();
  for (int num : nums) {{ '{' }}
    if (set.contains(target - num)) {{ '{' }}
      return new int[] {{ target - num, num }};
    {{ '}' }}
    set.add(num);
  {{ '}' }}
  return new int[] {{ -1 }};
{{ '}' }}
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Average from List collection?',
      answer: `<pre ngnonbindable=""><code>List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
double avg = list.stream().mapToInt(Integer::intValue).average().orElse(0.0);
System.out.println(avg);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find missing small and big numbers?',
      answer: `<pre ngnonbindable=""><code>int[] data = {{ 1, 2, 3, 4, 6, 8 }};
List<Integer> missing = new ArrayList<>();
for (int i = 0; i < data.length - 1; i++) {{ '{' }}
  if (data[i] + 1 != data[i + 1]) {{ '{' }}
    missing.add(data[i] + 1);
  {{ '}' }}
{{ '}' }}
System.out.println(missing);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Recursive sum?',
      answer: `<pre ngnonbindable=""><code>public static int recursive(int n) {{ '{' }}
  if (n <= 1) return n;
  return n + recursive(n - 1);
{{ '}' }}
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find and format anagrams?',
      answer: `<pre ngnonbindable=""><code>List<String> words = List.of("abc", "bca", "cab", "def");
Map<String, List<String>> map = new HashMap<>();
for (String word : words) {{ '{' }}
  char[] chars = word.toCharArray();
  Arrays.sort(chars);
  String key = new String(chars);
  map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
{{ '}' }}
System.out.println(map);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Convert each string to char array?',
      answer: `<pre ngnonbindable=""><code>List<String> words = List.of("hello", "world");
words.stream().map(String::toCharArray)
  .forEach(arr -> System.out.println(Arrays.toString(arr)));
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Return indexes of target sum?',
      answer: `<pre ngnonbindable=""><code>int[] arr = {{ 3, 2, 4 }};
int target = 6;
List<Integer> indexes = new ArrayList<>();
for (int i = 0; i < arr.length; i++) {{ '{' }}
  for (int j = i + 1; j < arr.length; j++) {{ '{' }}
    if (arr[i] + arr[j] == target) {{ '{' }}
      indexes.add(i);
      indexes.add(j);
    {{ '}' }}
  {{ '}' }}
{{ '}' }}
System.out.println(indexes);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Even and odd numbers using streams?',
      answer: `<pre ngnonbindable=""><code>// Even
IntStream.iterate(2, n -> n + 2).limit(10).forEach(System.out::println);

// Odd
IntStream.iterate(1, n -> n + 2).limit(10).forEach(System.out::println);
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Longest palindromic substring?',
      answer: `<pre ngnonbindable=""><code>public static String longestPalindrome(String s) {{ '{' }}
  int start = 0, end = 0;
  for (int i = 0; i < s.length(); i++) {{ '{' }}
    int len1 = expand(s, i, i);
    int len2 = expand(s, i, i + 1);
    int len = Math.max(len1, len2);
    if (len > end - start) {{ '{' }}
      start = i - (len - 1) / 2;
      end = i + len / 2;
    {{ '}' }}
  {{ '}' }}
  return s.substring(start, end + 1);
{{ '}' }}

private static int expand(String s, int left, int right) {{ '{' }}
  while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {{ '{' }}
    left--; right++;
  {{ '}' }}
  return right - left - 1;
{{ '}' }}
</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Group employees by country and average age?',
      answer: `<pre ngnonbindable=""><code>Map<String, Integer> age = new HashMap<>();
Map<String, Integer> count = new HashMap<>();
for (Employee emp : employees) {{ '{' }}
  age.put(emp.country, age.getOrDefault(emp.country, 0) + emp.age);
  count.put(emp.country, count.getOrDefault(emp.country, 0) + 1);
{{ '}' }}
for (String c : age.keySet()) {{ '{' }}
  System.out.println(c + ": " + (double) age.get(c) / count.get(c));
{{ '}' }}
</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Swap three numbers?',
      answer: `<pre ngnonbindable=""><code>int a = 10, b = 20, c = 30;
a = a + b + c;
b = a - (b + c);
c = a - (b + c);
a = a - (b + c);
System.out.println("a=" + a + ", b=" + b + ", c=" + c);
</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Print StringBuilder result?',
      answer: `<pre ngnonbindable=""><code>}
System.out.println(builder);</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Find sum of digits?',
      answer: `<pre ngnonbindable=""><code>int number = 12345;
int sum = 0;
while(number > 0) {
  sum += number % 10;
  number /= 10;
}
System.out.println(sum);</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'HCL List comparison program?',
      answer: `<pre ngnonbindable=""><code>List<Integer> list = Arrays.asList(1,2,3,4,5,4,5,2,1);
List<Integer> list2 = Arrays.asList(3,4,5,2);

List<Integer> data = list.stream().distinct().toList();

List<Integer> response = list.stream()
  .filter(list2::contains)
  .distinct()
  .toList();
System.out.println(response);

List<Integer> reverseOrder = response.stream()
  .sorted(Comparator.reverseOrder())
  .toList();
System.out.println(reverseOrder);</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Second highest salary using SQL?',
      answer: `<pre ngnonbindable=""><code>SELECT DISTINCT salary FROM employee 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Employee count city-wise (salary > 20000)?',
      answer: `<pre ngnonbindable=""><code>SELECT CITY, COUNT(*) AS EMPLOYEE_COUNT 
FROM EMPLOYEE 
WHERE SALARY > 20000 
GROUP BY CITY;</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Highest salary in each department using streams?',
      answer: `<pre ngnonbindable=""><code>Map<String, Employee> result = employees.stream()
  .collect(Collectors.toMap(
    Employee::getDepartment,
    e -> e,
    BinaryOperator.maxBy(Comparator.comparingDouble(Employee::getSalary))
  ));</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    },
    {
      question: 'Product of all elements except self?',
      answer: `<pre ngnonbindable=""><code>import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] arr = {2, 1, 4, 6};
    int val = 1;
    int[] data = new int[arr.length];

    for(int i = 0; i < arr.length; i++) {
      for(int j = 0; j < arr.length; j++) {
        if(i == j) continue;
        val *= arr[j];
      }
      data[i] = val;
      val = 1;
    }

    System.out.println(Arrays.toString(data));
  }
}</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'DSA'
      ]
    }
  ]
};
