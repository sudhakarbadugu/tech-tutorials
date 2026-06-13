// Real coding interview questions (first half)
// Generated: 2026-06-13T19:03:35.313Z

export const codingRealQuestionsA = {
  "questions": [
    {
      "question": "Write a SQL query to find the second highest salary from an Employee table using DENSE_RANK().",
      "answer": "<p>Use a CTE with <code>DENSE_RANK()</code> over salaries descending, then select rank <code>= 2</code>.</p>\n<pre><code class=\"language-sql\">WITH Ranked AS (\n  SELECT *, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM Employee\n)\nSELECT * FROM Ranked WHERE rnk = 2;</code></pre>\n<p><code>DENSE_RANK()</code> handles ties so multiple employees with the same top salary still share rank 1, and the next distinct salary gets rank 2.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Use DENSE_RANK ordered by salary descending to assign ranks without gaps.",
        "Filter for rnk = 2 to get the second highest distinct salary.",
        "DENSE_RANK handles ties better than ROW_NUMBER for this task."
      ]
    },
    {
      "question": "Write a SQL query to find the employee with the highest salary in each department using ROW_NUMBER() window function.",
      "answer": "<p>Use <code>ROW_NUMBER()</code> partitioned by department, ordered by salary descending.</p>\n<pre><code class=\"language-sql\">WITH DeptRanks AS (\n  SELECT *,\n    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rn\n  FROM Employee\n)\nSELECT * FROM DeptRanks WHERE rn = 1;</code></pre>\n<p>For ties, <code>RANK()</code> or <code>DENSE_RANK()</code> can return multiple top earners per department.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Partition by department and order by salary descending.",
        "Filter ROW_NUMBER() = 1 for the highest salary in each department.",
        "Use RANK/DENSE_RANK instead if you want to include ties."
      ]
    },
    {
      "question": "Write a SQL query using window function to find the Nth highest salary from an Employee table.",
      "answer": "<p>Use a CTE with <code>DENSE_RANK()</code> and filter by a parameter N.</p>\n<pre><code class=\"language-sql\">WITH SalaryRanks AS (\n  SELECT salary,\n    DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM Employee\n)\nSELECT DISTINCT salary FROM SalaryRanks WHERE rnk = :N;</code></pre>\n<p>Parameterize N to avoid SQL injection and make the query reusable.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Rank salaries descending with DENSE_RANK.",
        "Filter on rnk = N to get the Nth highest distinct salary.",
        "Use DISTINCT because DENSE_RANK can produce duplicate rows for ties."
      ]
    },
    {
      "question": "Write a SQL query to calculate month-over-month revenue growth using LAG() function.",
      "answer": "<p>Use <code>LAG()</code> to get the previous month's revenue, then compute the percentage change.</p>\n<pre><code class=\"language-sql\">WITH Monthly AS (\n  SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount) AS revenue\n  FROM orders\n  GROUP BY 1\n)\nSELECT month, revenue,\n  LAG(revenue) OVER (ORDER BY month) AS prev_revenue,\n  ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))\n        / NULLIF(LAG(revenue) OVER (ORDER BY month), 0), 2) AS growth_pct\nFROM Monthly;</code></pre>\n<p><code>NULLIF</code> prevents division by zero for the first month.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Aggregate revenue per month first.",
        "Use LAG to access the previous month's revenue.",
        "Compute percentage growth and handle zero with NULLIF."
      ]
    },
    {
      "question": "Write a SQL query to find the top two highest-grossing products within each category for a given year using window functions.",
      "answer": "<p>Use <code>DENSE_RANK()</code> partitioned by category and year, ordered by revenue descending.</p>\n<pre><code class=\"language-sql\">WITH Ranked AS (\n  SELECT category, product_id, year,\n    DENSE_RANK() OVER (PARTITION BY category, year ORDER BY revenue DESC) AS rnk\n  FROM sales\n)\nSELECT category, product_id, year, revenue\nFROM Ranked\nWHERE rnk &lt;= 2;</code></pre>\n<p><code>DENSE_RANK</code> keeps ties; switch to <code>ROW_NUMBER</code> for exactly two rows per category.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Partition by category and year, order by revenue descending.",
        "Filter DENSE_RANK &lt;= 2 to get the top two per group.",
        "DENSE_RANK includes ties; ROW_NUMBER gives exactly two rows."
      ]
    },
    {
      "question": "Write a SQL query to show the previous sale and next sale for each date using LAG() and LEAD().",
      "answer": "<p>Use <code>LAG()</code> and <code>LEAD()</code> over an ordered window.</p>\n<pre><code class=\"language-sql\">SELECT sale_date, amount,\n  LAG(amount) OVER (ORDER BY sale_date) AS prev_sale,\n  LEAD(amount) OVER (ORDER BY sale_date) AS next_sale\nFROM sales;</code></pre>\n<p>Add <code>PARTITION BY customer_id</code> if the window should be per customer.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Use LAG for the previous row and LEAD for the next row.",
        "Order the window by sale_date.",
        "Partition by customer or region when needed."
      ]
    },
    {
      "question": "Write a SQL query to find all customers who never ordered anything ( Customers and Orders tables).",
      "answer": "<p>Use a <code>LEFT JOIN</code> and filter where the order side is null, or use <code>NOT EXISTS</code>.</p>\n<pre><code class=\"language-sql\">SELECT c.*\nFROM Customers c\nLEFT JOIN Orders o ON c.id = o.customer_id\nWHERE o.customer_id IS NULL;</code></pre>\n<p><code>NOT EXISTS</code> is often more efficient with proper indexes.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Use LEFT JOIN ... WHERE order id IS NULL.",
        "NOT EXISTS is a readable, index-friendly alternative.",
        "Avoid SELECT * in production; select only needed columns."
      ]
    },
    {
      "question": "Write a SQL query to find duplicate rows in a table using GROUP BY and HAVING.",
      "answer": "<p>Group by the columns that define uniqueness and use <code>HAVING COUNT(*) &gt; 1</code>.</p>\n<pre><code class=\"language-sql\">SELECT email, COUNT(*) AS cnt\nFROM Users\nGROUP BY email\nHAVING COUNT(*) &gt; 1;</code></pre>\n<p><code>WHERE</code> cannot filter aggregates; use <code>HAVING</code> after grouping.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "GROUP BY the unique-key columns.",
        "Use HAVING COUNT(*) &gt; 1 to filter duplicates.",
        "WHERE filters rows before aggregation; HAVING filters after."
      ]
    },
    {
      "question": "Write a SQL query using a self-join to find employees who earn more than their managers.",
      "answer": "<p>Self-join the Employee table on manager_id.</p>\n<pre><code class=\"language-sql\">SELECT e.name AS employee, e.salary AS emp_salary, m.salary AS mgr_salary\nFROM Employee e\nJOIN Employee m ON e.manager_id = m.id\nWHERE e.salary &gt; m.salary;</code></pre>\n<p>Ensure manager_id is indexed for large tables.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Self-join Employee with its manager on manager_id = id.",
        "Filter where employee salary &gt; manager salary.",
        "Index manager_id for performance."
      ]
    },
    {
      "question": "Write a SQL query to calculate a running total (cumulative sum) of sales using window functions.",
      "answer": "<p>Use <code>SUM() OVER</code> with an ordering clause.</p>\n<pre><code class=\"language-sql\">SELECT order_date, amount,\n  SUM(amount) OVER (ORDER BY order_date\n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM sales;</code></pre>\n<p>Partition by region or product to compute separate running totals.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Use SUM() OVER with an ORDER BY clause.",
        "The default frame gives a running total.",
        "Add PARTITION BY for per-group running totals."
      ]
    },
    {
      "question": "Write a SQL query to find the top 5 customers with the highest total spending in the past year, excluding orders placed on holidays.",
      "answer": "<p>Filter dates, exclude holidays with a subquery or join, then aggregate and limit.</p>\n<pre><code class=\"language-sql\">SELECT customer_id, SUM(amount) AS total_spent\nFROM orders\nWHERE order_date &gt;= CURRENT_DATE - INTERVAL '1 year'\n  AND order_date NOT IN (SELECT holiday_date FROM holidays)\nGROUP BY customer_id\nORDER BY total_spent DESC\nLIMIT 5;</code></pre>\n<p>Replace <code>NOT IN</code> with <code>NOT EXISTS</code> when holidays may contain NULLs.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Filter orders to the past year and exclude holidays.",
        "Aggregate spending per customer and sort descending.",
        "Use LIMIT/TOP/FETCH FIRST depending on your SQL dialect."
      ]
    },
    {
      "question": "Write a SQL query to handle missing data using COALESCE() and CASE WHEN statements.",
      "answer": "<p><code>COALESCE</code> returns the first non-null value; <code>CASE WHEN</code> applies conditional logic.</p>\n<pre><code class=\"language-sql\">SELECT\n  COALESCE(phone, 'N/A') AS phone,\n  CASE WHEN age IS NULL THEN 'Unknown' ELSE CAST(age AS VARCHAR) END AS age_group\nFROM Users;</code></pre>\n<p>Use <code>NULLIF</code> to turn sentinel values like empty strings into NULL before coalescing.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "COALESCE substitutes the first non-NULL fallback.",
        "CASE WHEN handles conditional transformations.",
        "NULLIF can clean sentinel values before COALESCE."
      ]
    },
    {
      "question": "Write a SQL query to find the difference between RANK() and DENSE_RANK() with a practical example on employee salaries by department.",
      "answer": "<p>Both rank rows within a partition; they differ in handling ties.</p>\n<pre><code class=\"language-sql\">SELECT name, salary,\n  RANK() OVER (ORDER BY salary DESC) AS rnk,\n  DENSE_RANK() OVER (ORDER BY salary DESC) AS drnk\nFROM Employee;</code></pre>\n<p>With salaries 100, 90, 90, 80: RANK gives 1,2,2,4; DENSE_RANK gives 1,2,2,3.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "RANK leaves gaps after ties (1,2,2,4).",
        "DENSE_RANK does not leave gaps (1,2,2,3).",
        "Use DENSE_RANK when you need the Nth distinct value."
      ]
    },
    {
      "question": "Write a SQL query to find the median salary from an Employee table.",
      "answer": "<p>Order salaries, count rows, and pick the middle value(s).</p>\n<pre><code class=\"language-sql\">SELECT AVG(salary) AS median\nFROM (\n  SELECT salary,\n    ROW_NUMBER() OVER (ORDER BY salary) AS rn,\n    COUNT(*) OVER () AS cnt\n  FROM Employee\n) t\nWHERE rn IN (FLOOR((cnt + 1) / 2.0), CEIL((cnt + 1) / 2.0));</code></pre>\n<p>PostgreSQL and others provide <code>PERCENTILE_CONT(0.5)</code> for a simpler median.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Rank salaries and count total rows.",
        "Average the one or two middle rows.",
        "Use PERCENTILE_CONT(0.5) if your database supports it."
      ]
    },
    {
      "question": "Design a database schema for a messaging system and write a query to get the last message sent by each user.",
      "answer": "<p>Tables: Users, Conversations, Messages (with sender_id, conversation_id, sent_at).</p>\n<pre><code class=\"language-sql\">CREATE TABLE Messages (\n  id BIGINT PRIMARY KEY,\n  conversation_id BIGINT,\n  sender_id BIGINT,\n  content TEXT,\n  sent_at TIMESTAMP,\n  FOREIGN KEY (conversation_id) REFERENCES Conversations(id),\n  FOREIGN KEY (sender_id) REFERENCES Users(id)\n);\n\nWITH LastMsg AS (\n  SELECT *,\n    ROW_NUMBER() OVER (PARTITION BY sender_id ORDER BY sent_at DESC) AS rn\n  FROM Messages\n)\nSELECT sender_id, content, sent_at FROM LastMsg WHERE rn = 1;</code></pre>\n<p>Indexes on <code>(sender_id, sent_at DESC)</code> speed up the last-message query.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Database Design"
      ],
      "keyPoints": [
        "Store messages with sender_id, conversation_id, and sent_at.",
        "Use ROW_NUMBER partitioned by sender ordered by sent_at DESC.",
        "Index sender_id and sent_at for performance."
      ]
    },
    {
      "question": "Normalize a given denormalized schema into 3NF and explain your steps.",
      "answer": "<p>Take a denormalized table with repeating groups and transitive dependencies and split it.</p>\n<ul>\n  <li><strong>1NF:</strong> Atomic columns, no repeating groups.</li>\n  <li><strong>2NF:</strong> Remove partial dependencies (non-key attributes depend on the whole key).</li>\n  <li><strong>3NF:</strong> Remove transitive dependencies (non-key attributes depend only on the key).</li>\n</ul>\n<p>Example: an Orders table with customer details becomes Orders + Customers tables.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Database Design"
      ],
      "keyPoints": [
        "1NF makes each column atomic with no repeating groups.",
        "2NF removes partial dependencies on composite keys.",
        "3NF removes transitive dependencies so non-key fields depend only on the key."
      ]
    },
    {
      "question": "Design the database changes needed for Facebook to transition from simple likes to multi-reaction support on posts and comments.",
      "answer": "<p>Replace the single <code>likes</code> counter with a Reactions table supporting multiple reaction types on posts and comments.</p>\n<pre><code class=\"language-sql\">CREATE TABLE Reactions (\n  id BIGINT PRIMARY KEY,\n  user_id BIGINT NOT NULL,\n  entity_type VARCHAR(20) NOT NULL, -- 'post' or 'comment'\n  entity_id BIGINT NOT NULL,\n  reaction_type VARCHAR(20) NOT NULL, -- 'like', 'love', 'angry', ...\n  created_at TIMESTAMP,\n  UNIQUE (user_id, entity_type, entity_id)\n);</code></pre>\n<p>Backfill existing likes as reaction_type='like' and drop or deprecate the old counter columns.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Database Design"
      ],
      "keyPoints": [
        "Model reactions generically with entity_type and entity_id.",
        "Use a unique constraint to prevent duplicate reactions per user.",
        "Backfill existing likes before removing old columns."
      ]
    },
    {
      "question": "Explain the difference between WHERE and HAVING clauses with an example query.",
      "answer": "<p><code>WHERE</code> filters rows before grouping; <code>HAVING</code> filters groups after aggregation.</p>\n<pre><code class=\"language-sql\">SELECT department_id, AVG(salary) AS avg_salary\nFROM Employee\nWHERE hire_date &gt;= '2020-01-01'\nGROUP BY department_id\nHAVING AVG(salary) &gt; 70000;</code></pre>\n<p>Use <code>WHERE</code> for row-level conditions and <code>HAVING</code> for aggregate conditions.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "WHERE filters individual rows before aggregation.",
        "HAVING filters groups after aggregation.",
        "Aggregates can only appear in HAVING, not WHERE."
      ]
    },
    {
      "question": "Write a SQL query to find employees who joined in the last 6 months and have a salary above the department average.",
      "answer": "<p>Use a window function or correlated subquery for the department average, and date math for the hire date.</p>\n<pre><code class=\"language-sql\">WITH DeptAvg AS (\n  SELECT department_id, AVG(salary) AS avg_sal\n  FROM Employee\n  GROUP BY department_id\n)\nSELECT e.*\nFROM Employee e\nJOIN DeptAvg d ON e.department_id = d.department_id\nWHERE e.hire_date &gt;= CURRENT_DATE - INTERVAL '6 months'\n  AND e.salary &gt; d.avg_sal;</code></pre>\n<p>Ensure hire_date is indexed.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Compute department average in a CTE or subquery.",
        "Filter on hire_date within the last 6 months.",
        "Compare employee salary to the department average."
      ]
    },
    {
      "question": "How do you optimize a slow-running query? List strategies including indexing and query plan analysis.",
      "answer": "<p>Start with the query plan, then apply targeted fixes.</p>\n<ul>\n  <li>Run <code>EXPLAIN ANALYZE</code> to find full table scans or high-cost joins.</li>\n  <li>Add indexes on WHERE, JOIN, and ORDER BY columns.</li>\n  <li>Rewrite subqueries as joins; avoid SELECT *.</li>\n  <li>Partition large tables; update statistics.</li>\n  <li>Use caching and read replicas for read-heavy workloads.</li>\n</ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL",
        "Optimization"
      ],
      "keyPoints": [
        "Use EXPLAIN ANALYZE to identify bottlenecks.",
        "Add indexes for filter, join, and sort columns.",
        "Rewrite inefficient subqueries and avoid SELECT *."
      ]
    },
    {
      "question": "Write a SQL query to calculate year-over-year host growth rate using LAG() and CTEs.",
      "answer": "<p>Aggregate hosts per year, then use <code>LAG()</code> to compare with the previous year.</p>\n<pre><code class=\"language-sql\">WITH Yearly AS (\n  SELECT YEAR(created_at) AS yr, COUNT(DISTINCT host_id) AS host_count\n  FROM Listings\n  GROUP BY YEAR(created_at)\n)\nSELECT yr, host_count,\n  LAG(host_count) OVER (ORDER BY yr) AS prev_count,\n  ROUND(100.0 * (host_count - LAG(host_count) OVER (ORDER BY yr))\n        / NULLIF(LAG(host_count) OVER (ORDER BY yr), 0), 2) AS growth_pct\nFROM Yearly;</code></pre>\n<p>Use <code>COUNT(DISTINCT host_id)</code> to avoid double-counting.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Aggregate distinct hosts per year.",
        "Use LAG to get the previous year's count.",
        "Calculate percentage growth and guard against division by zero."
      ]
    },
    {
      "question": "Write a SQL query using CTE to find all employees in an organizational hierarchy under a given manager.",
      "answer": "<p>Use a recursive CTE starting from the manager.</p>\n<pre><code class=\"language-sql\">WITH RECURSIVE Reports AS (\n  SELECT id, name, manager_id, 0 AS level\n  FROM Employee\n  WHERE id = :manager_id\n  UNION ALL\n  SELECT e.id, e.name, e.manager_id, r.level + 1\n  FROM Employee e\n  JOIN Reports r ON e.manager_id = r.id\n)\nSELECT * FROM Reports;</code></pre>\n<p>Add a <code>level</code> column to control recursion depth if needed.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Use a recursive CTE with an anchor member for the manager.",
        "Union all joins employees to their manager's row.",
        "Add a level counter to track hierarchy depth."
      ]
    },
    {
      "question": "Explain ACID properties and write a SQL transaction that transfers money between two bank accounts.",
      "answer": "<p>ACID: Atomicity, Consistency, Isolation, Durability.</p>\n<pre><code class=\"language-sql\">BEGIN TRANSACTION;\n\nUPDATE Accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE Accounts SET balance = balance + 100 WHERE id = 2;\n\nCOMMIT;</code></pre>\n<p>Roll back on error; use proper isolation level to avoid inconsistent reads.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "SQL",
        "Transactions"
      ],
      "keyPoints": [
        "Atomicity ensures all operations succeed or none do.",
        "Consistency preserves database rules after the transaction.",
        "Isolation and durability protect concurrent execution and committed data."
      ]
    },
    {
      "question": "When would you intentionally denormalize a schema? Give a real-world example.",
      "answer": "<p>Denormalize when read performance and query simplicity outweigh storage and update costs.</p>\n<ul>\n  <li>Read-heavy analytics dashboards</li>\n  <li>Pre-aggregated counters and rollups</li>\n  <li>Avoiding expensive joins in high-throughput systems</li>\n</ul>\n<p>Keep a source-of-truth normalized copy and update denormalized views asynchronously.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Database Design"
      ],
      "keyPoints": [
        "Denormalize to improve read performance and reduce joins.",
        "Common cases are analytics, counters, and high-traffic reads.",
        "Maintain consistency via application logic or materialized views."
      ]
    },
    {
      "question": "Write a SQL query to find consecutive streaks of user logins (days in a row a user logged in).",
      "answer": "<p>Compute a streak group by subtracting a row number from the login date.</p>\n<pre><code class=\"language-sql\">WITH Streaks AS (\n  SELECT user_id, login_date,\n    DATE_SUB(login_date, INTERVAL ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) DAY) AS grp\n  FROM Logins\n)\nSELECT user_id, COUNT(*) AS streak_length\nFROM Streaks\nGROUP BY user_id, grp;</code></pre>\n<p>Dialects vary: use <code>DATEADD/DATE_SUB</code> equivalents.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "SQL"
      ],
      "keyPoints": [
        "Use ROW_NUMBER to assign an increasing integer per user by date.",
        "Subtract that integer from the date to create a constant streak group.",
        "Group by user_id and the streak group to count consecutive days."
      ]
    },
    {
      "question": "Given an array of integers, find two numbers such that they add up to a specific target (Two Sum).",
      "answer": "<p>Use a hash map to store complements for O(n) time.</p>\n<pre><code class=\"language-java\">public int[] twoSum(int[] nums, int target) {\n    Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();\n    for (int i = 0; i &lt; nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[]{map.get(complement), i};\n        }\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Use a hash map to map each value to its index.",
        "For each element, check if its complement exists.",
        "Returns O(n) time and O(n) space."
      ]
    },
    {
      "question": "Find the first and last position of an element in a sorted array (Binary Search variant).",
      "answer": "<p>Run binary search twice: once for the leftmost and once for the rightmost occurrence.</p>\n<pre><code class=\"language-java\">public int[] searchRange(int[] nums, int target) {\n    return new int[]{findBound(nums, target, true), findBound(nums, target, false)};\n}\n\nint findBound(int[] nums, int target, boolean isFirst) {\n    int lo = 0, hi = nums.length - 1, ans = -1;\n    while (lo &lt;= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (nums[mid] == target) {\n            ans = mid;\n            if (isFirst) hi = mid - 1;\n            else lo = mid + 1;\n        } else if (nums[mid] &lt; target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return ans;\n}</code></pre>\n<p>Time O(log n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Use binary search to find boundaries.",
        "Search leftmost by moving hi = mid - 1 on match.",
        "Search rightmost by moving lo = mid + 1 on match."
      ]
    },
    {
      "question": "Merge overlapping intervals. Given an array of intervals, merge all overlapping intervals.",
      "answer": "<p>Sort by start time, then iterate and merge overlapping intervals.</p>\n<pre><code class=\"language-java\">public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -&gt; Integer.compare(a[0], b[0]));\n    List&lt;int[]&gt; merged = new ArrayList&lt;&gt;();\n    for (int[] interval : intervals) {\n        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] &lt; interval[0]) {\n            merged.add(interval);\n        } else {\n            merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);\n        }\n    }\n    return merged.toArray(new int[merged.size()][]);\n}</code></pre>\n<p>Time O(n log n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Sort intervals by start time.",
        "Compare current interval with the last merged interval.",
        "Merge when they overlap, otherwise add a new interval."
      ]
    },
    {
      "question": "3Sum: Given an integer array, return all unique triplets that sum up to zero.",
      "answer": "<p>Sort and use a two-pointer approach for each pivot.</p>\n<pre><code class=\"language-java\">public List&lt;List&lt;Integer&gt;&gt; threeSum(int[] nums) {\n    List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();\n    Arrays.sort(nums);\n    for (int i = 0; i &lt; nums.length - 2; i++) {\n        if (i &gt; 0 && nums[i] == nums[i - 1]) continue;\n        int l = i + 1, r = nums.length - 1;\n        while (l &lt; r) {\n            int sum = nums[i] + nums[l] + nums[r];\n            if (sum == 0) {\n                res.add(Arrays.asList(nums[i], nums[l], nums[r]));\n                while (l &lt; r && nums[l] == nums[l + 1]) l++;\n                while (l &lt; r && nums[r] == nums[r - 1]) r--;\n                l++; r--;\n            } else if (sum &lt; 0) l++;\n            else r--;\n        }\n    }\n    return res;\n}</code></pre>\n<p>Time O(n²), space O(1) excluding output.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Sort the array first.",
        "Fix one number and use two pointers for the remaining sum.",
        "Skip duplicates for all three positions."
      ]
    },
    {
      "question": "Find the maximum subarray sum (Kadane's Algorithm).",
      "answer": "<p>Track the maximum subarray ending at each position.</p>\n<pre><code class=\"language-java\">public int maxSubArray(int[] nums) {\n    int maxSoFar = nums[0], maxEndingHere = nums[0];\n    for (int i = 1; i &lt; nums.length; i++) {\n        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);\n        maxSoFar = Math.max(maxSoFar, maxEndingHere);\n    }\n    return maxSoFar;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "At each element, decide to extend the previous subarray or start new.",
        "Track both local and global maximums.",
        "Runs in O(n) time and O(1) space."
      ]
    },
    {
      "question": "Find all anagrams in a string using the sliding window technique.",
      "answer": "<p>Slide a window over s and compare character counts with p.</p>\n<pre><code class=\"language-java\">public List&lt;Integer&gt; findAnagrams(String s, String p) {\n    List&lt;Integer&gt; res = new ArrayList&lt;&gt;();\n    int[] count = new int[26];\n    for (char c : p.toCharArray()) count[c - 'a']++;\n    int left = 0, right = 0, needed = p.length();\n    while (right &lt; s.length()) {\n        if (count[s.charAt(right++) - 'a']-- &gt;= 1) needed--;\n        if (needed == 0) res.add(left);\n        if (right - left == p.length() && count[s.charAt(left++) - 'a']++ &gt;= 0) needed++;\n    }\n    return res;\n}</code></pre>\n<p>Time O(n), space O(1) for 26 letters.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Maintain a frequency count of characters in p.",
        "Slide a window of length |p| over s.",
        "Update the count and track how many characters are still needed."
      ]
    },
    {
      "question": "Search in a rotated sorted array using modified binary search.",
      "answer": "<p>Modified binary search: determine which half is sorted, then decide where the target lies.</p>\n<pre><code class=\"language-java\">public int search(int[] nums, int target) {\n    int lo = 0, hi = nums.length - 1;\n    while (lo &lt;= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[lo] &lt;= nums[mid]) {\n            if (target &gt;= nums[lo] && target &lt; nums[mid]) hi = mid - 1;\n            else lo = mid + 1;\n        } else {\n            if (target &gt; nums[mid] && target &lt;= nums[hi]) lo = mid + 1;\n            else hi = mid - 1;\n        }\n    }\n    return -1;\n}</code></pre>\n<p>Time O(log n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Identify which half is sorted.",
        "Check if the target lies within the sorted half.",
        "Adjust pointers accordingly for O(log n) search."
      ]
    },
    {
      "question": "Container With Most Water: Given an array of heights, find two lines that together with the x-axis form a container that holds the most water.",
      "answer": "<p>Use two pointers from both ends and move the shorter line inward.</p>\n<pre><code class=\"language-java\">public int maxArea(int[] height) {\n    int left = 0, right = height.length - 1, max = 0;\n    while (left &lt; right) {\n        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));\n        if (height[left] &lt; height[right]) left++;\n        else right--;\n    }\n    return max;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Use two pointers at both ends.",
        "Area is min height times width.",
        "Move the pointer with the smaller height inward."
      ]
    },
    {
      "question": "Product of Array Except Self: Given an array, return an array where each element is the product of all other elements.",
      "answer": "<p>Compute prefix and suffix products in two passes.</p>\n<pre><code class=\"language-java\">public int[] productExceptSelf(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    res[0] = 1;\n    for (int i = 1; i &lt; n; i++) res[i] = res[i - 1] * nums[i - 1];\n    int suffix = 1;\n    for (int i = n - 1; i &gt;= 0; i--) {\n        res[i] *= suffix;\n        suffix *= nums[i];\n    }\n    return res;\n}</code></pre>\n<p>Time O(n), space O(1) excluding output.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "First pass stores the product of all elements to the left.",
        "Second pass multiplies by the running suffix product.",
        "Achieves O(n) time and O(1) extra space."
      ]
    },
    {
      "question": "Find the minimum in a rotated sorted array.",
      "answer": "<p>Binary search: the minimum is in the unsorted half.</p>\n<pre><code class=\"language-java\">public int findMin(int[] nums) {\n    int lo = 0, hi = nums.length - 1;\n    while (lo &lt; hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (nums[mid] &gt; nums[hi]) lo = mid + 1;\n        else hi = mid;\n    }\n    return nums[lo];\n}</code></pre>\n<p>Time O(log n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Arrays"
      ],
      "keyPoints": [
        "Compare middle element with the rightmost element.",
        "If nums[mid] &gt; nums[hi], the minimum is to the right.",
        "Otherwise it is at mid or to the left."
      ]
    },
    {
      "question": "Longest Substring Without Repeating Characters (Sliding Window).",
      "answer": "<p>Sliding window with a set or map of last seen indices.</p>\n<pre><code class=\"language-java\">public int lengthOfLongestSubstring(String s) {\n    Map&lt;Character, Integer&gt; map = new HashMap&lt;&gt;();\n    int max = 0, left = 0;\n    for (int right = 0; right &lt; s.length(); right++) {\n        char c = s.charAt(right);\n        if (map.containsKey(c)) left = Math.max(left, map.get(c) + 1);\n        map.put(c, right);\n        max = Math.max(max, right - left + 1);\n    }\n    return max;\n}</code></pre>\n<p>Time O(n), space O(min(n, charset)).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Strings"
      ],
      "keyPoints": [
        "Expand the right pointer and track character positions.",
        "Move left pointer past the previous duplicate.",
        "Keep the maximum window length seen."
      ]
    },
    {
      "question": "Minimum Window Substring: Given two strings s and t, return the minimum window in s which contains all characters in t.",
      "answer": "<p>Sliding window with two pointers and character counts.</p>\n<pre><code class=\"language-java\">public String minWindow(String s, String t) {\n    int[] need = new int[128];\n    for (char c : t.toCharArray()) need[c]++;\n    int missing = t.length(), left = 0, start = 0, minLen = Integer.MAX_VALUE;\n    for (int right = 0; right &lt; s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c] &gt; 0) missing--;\n        need[c]--;\n        while (missing == 0) {\n            if (right - left + 1 &lt; minLen) {\n                minLen = right - left + 1;\n                start = left;\n            }\n            need[s.charAt(left)]++;\n            if (need[s.charAt(left)] &gt; 0) missing++;\n            left++;\n        }\n    }\n    return minLen == Integer.MAX_VALUE ? \"\" : s.substring(start, start + minLen);\n}</code></pre>\n<p>Time O(n + m).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Strings"
      ],
      "keyPoints": [
        "Track counts of characters needed from t.",
        "Expand right until the window is valid.",
        "Contract from left to find the minimum valid window."
      ]
    },
    {
      "question": "Valid Palindrome: Given a string, determine if it is a palindrome considering only alphanumeric characters.",
      "answer": "<p>Use two pointers, skipping non-alphanumeric characters and comparing case-insensitively.</p>\n<pre><code class=\"language-java\">public boolean isPalindrome(String s) {\n    int l = 0, r = s.length() - 1;\n    while (l &lt; r) {\n        while (l &lt; r && !Character.isLetterOrDigit(s.charAt(l))) l++;\n        while (l &lt; r && !Character.isLetterOrDigit(s.charAt(r))) r--;\n        if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) return false;\n        l++; r--;\n    }\n    return true;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Strings"
      ],
      "keyPoints": [
        "Use two pointers from both ends.",
        "Skip non-alphanumeric characters.",
        "Compare characters case-insensitively."
      ]
    },
    {
      "question": "Integer to English Words: Convert a non-negative integer to its English words representation.",
      "answer": "<p>Process in chunks of three digits (thousands, millions, billions).</p>\n<pre><code class=\"language-java\">private final String[] LESS_THAN_20 = {\"\",\"One\",\"Two\",\"Three\",\"Four\",\"Five\",\"Six\",\"Seven\",\"Eight\",\"Nine\",\"Ten\",\"Eleven\",\"Twelve\",\"Thirteen\",\"Fourteen\",\"Fifteen\",\"Sixteen\",\"Seventeen\",\"Eighteen\",\"Nineteen\"};\nprivate final String[] TENS = {\"\",\"Ten\",\"Twenty\",\"Thirty\",\"Forty\",\"Fifty\",\"Sixty\",\"Seventy\",\"Eighty\",\"Ninety\"};\nprivate final String[] THOUSANDS = {\"\",\"Thousand\",\"Million\",\"Billion\"};\n\npublic String numberToWords(int num) {\n    if (num == 0) return \"Zero\";\n    int i = 0;\n    String words = \"\";\n    while (num &gt; 0) {\n        if (num % 1000 != 0) words = helper(num % 1000) + THOUSANDS[i] + \" \" + words;\n        num /= 1000;\n        i++;\n    }\n    return words.trim();\n}\n\nprivate String helper(int num) {\n    if (num == 0) return \"\";\n    if (num &lt; 20) return LESS_THAN_20[num] + \" \";\n    if (num &lt; 100) return TENS[num / 10] + \" \" + helper(num % 10);\n    return LESS_THAN_20[num / 100] + \" Hundred \" + helper(num % 100);\n}</code></pre>\n<p>Time O(log n) base 1000, space O(1).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Strings"
      ],
      "keyPoints": [
        "Break the number into groups of three digits.",
        "Map ones, teens, tens, and scale words.",
        "Recurse within each group for hundreds."
      ]
    },
    {
      "question": "Find the longest common prefix among an array of strings.",
      "answer": "<p>Compare characters column by column or sort and compare first/last strings.</p>\n<pre><code class=\"language-java\">public String longestCommonPrefix(String[] strs) {\n    if (strs == null || strs.length == 0) return \"\";\n    String prefix = strs[0];\n    for (int i = 1; i &lt; strs.length; i++) {\n        while (strs[i].indexOf(prefix) != 0) {\n            prefix = prefix.substring(0, prefix.length() - 1);\n            if (prefix.isEmpty()) return \"\";\n        }\n    }\n    return prefix;\n}</code></pre>\n<p>Time O(S) where S is total characters.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Strings"
      ],
      "keyPoints": [
        "Start with the first string as the candidate prefix.",
        "Trim the prefix until the next string starts with it.",
        "Return empty if no common prefix exists."
      ]
    },
    {
      "question": "Longest Palindromic Substring: Given a string, find the longest palindromic substring.",
      "answer": "<p>Expand around each center (odd and even length).</p>\n<pre><code class=\"language-java\">public String longestPalindrome(String s) {\n    if (s == null || s.length() &lt; 1) return \"\";\n    int start = 0, end = 0;\n    for (int i = 0; i &lt; s.length(); i++) {\n        int len1 = expand(s, i, i);\n        int len2 = expand(s, i, i + 1);\n        int len = Math.max(len1, len2);\n        if (len &gt; end - start) {\n            start = i - (len - 1) / 2;\n            end = i + len / 2;\n        }\n    }\n    return s.substring(start, end + 1);\n}\nint expand(String s, int l, int r) {\n    while (l &gt;= 0 && r &lt; s.length() && s.charAt(l) == s.charAt(r)) { l--; r++; }\n    return r - l - 1;\n}</code></pre>\n<p>Time O(n²), space O(1).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Strings"
      ],
      "keyPoints": [
        "Consider each character as the center of a palindrome.",
        "Check both odd and even length centers.",
        "Expand while characters match."
      ]
    },
    {
      "question": "Reverse a singly linked list iteratively and recursively.",
      "answer": "<p>Iteratively reverse next pointers, or recursively reverse the rest and append current.</p>\n<pre><code class=\"language-java\">public ListNode reverseList(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}</code></pre>\n<p>Time O(n), space O(1) iterative.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Iteratively point each node's next to the previous node.",
        "Use a temporary variable to keep the original next node.",
        "Recursive solution uses O(n) stack space."
      ]
    },
    {
      "question": "Remove Nth Node From End of List.",
      "answer": "<p>Use a fast pointer n nodes ahead, then move both until fast reaches the end.</p>\n<pre><code class=\"language-java\">public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i &lt;= n; i++) fast = fast.next;\n    while (fast != null) { fast = fast.next; slow = slow.next; }\n    slow.next = slow.next.next;\n    return dummy.next;\n}</code></pre>\n<p>Time O(n), space O(1).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Use a dummy node to simplify edge cases.",
        "Advance fast pointer n+1 steps ahead.",
        "Move both together and skip the target node."
      ]
    },
    {
      "question": "Detect Cycle in a Linked List using Floyd's Cycle Detection Algorithm (Tortoise and Hare).",
      "answer": "<p>Use slow (1 step) and fast (2 steps) pointers. If they meet, a cycle exists.</p>\n<pre><code class=\"language-java\">public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}</code></pre>\n<p>To find the cycle start, reset one pointer to head and advance both one step until they meet.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Move slow by one and fast by two.",
        "If they meet, the list has a cycle.",
        "To find the cycle start, move one pointer to head and advance both by one."
      ]
    },
    {
      "question": "Merge K Sorted Lists using a min-heap.",
      "answer": "<p>Use a min-heap of size k to always get the smallest current node.</p>\n<pre><code class=\"language-java\">public ListNode mergeKLists(ListNode[] lists) {\n    PriorityQueue&lt;ListNode&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; a.val - b.val);\n    for (ListNode node : lists) if (node != null) pq.offer(node);\n    ListNode dummy = new ListNode(0), tail = dummy;\n    while (!pq.isEmpty()) {\n        ListNode min = pq.poll();\n        tail.next = min;\n        tail = min;\n        if (min.next != null) pq.offer(min.next);\n    }\n    return dummy.next;\n}</code></pre>\n<p>Time O(N log k), space O(k).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Push the head of each list into a min-heap.",
        "Poll the smallest node and append it to the result.",
        "Push the next node from the same list back into the heap."
      ]
    },
    {
      "question": "Flatten a binary tree to a linked list in-place.",
      "answer": "<p>Use recursion or Morris traversal to rearrange nodes in-place to a right-linked list in preorder.</p>\n<pre><code class=\"language-java\">public void flatten(TreeNode root) {\n    if (root == null) return;\n    TreeNode left = root.left, right = root.right;\n    root.left = null;\n    flatten(left);\n    flatten(right);\n    root.right = left;\n    TreeNode cur = root;\n    while (cur.right != null) cur = cur.right;\n    cur.right = right;\n}</code></pre>\n<p>Time O(n), space O(h) recursion stack.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Flatten left and right subtrees recursively.",
        "Attach the flattened left subtree as the right child.",
        "Connect the original right subtree at the end of the new right chain."
      ]
    },
    {
      "question": "Clone a linked list with random pointers (deep copy).",
      "answer": "<p>Insert copy nodes next to originals, then assign random pointers, then split the list.</p>\n<pre><code class=\"language-java\">public Node copyRandomList(Node head) {\n    if (head == null) return null;\n    Node cur = head;\n    while (cur != null) {\n        Node copy = new Node(cur.val);\n        copy.next = cur.next;\n        cur.next = copy;\n        cur = copy.next;\n    }\n    cur = head;\n    while (cur != null) {\n        if (cur.random != null) cur.next.random = cur.random.next;\n        cur = cur.next.next;\n    }\n    cur = head;\n    Node newHead = cur.next;\n    while (cur != null) {\n        Node copy = cur.next;\n        cur.next = copy.next;\n        if (copy.next != null) copy.next = copy.next.next;\n        cur = cur.next;\n    }\n    return newHead;\n}</code></pre>\n<p>Time O(n), space O(1) extra.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Create interleaved copies next to each original node.",
        "Set copy.random using original.random.next.",
        "Separate the interleaved lists back into original and copy."
      ]
    },
    {
      "question": "Reorder List: Reorder a singly linked list L0 to Ln-1 to be L0, Ln-1, L1, Ln-2, ...",
      "answer": "<p>Find middle, reverse second half, then merge alternating nodes.</p>\n<pre><code class=\"language-java\">public void reorderList(ListNode head) {\n    if (head == null) return;\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }\n    ListNode second = reverse(slow.next);\n    slow.next = null;\n    ListNode first = head;\n    while (second != null) {\n        ListNode t1 = first.next, t2 = second.next;\n        first.next = second;\n        second.next = t1;\n        first = t1;\n        second = t2;\n    }\n}\nListNode reverse(ListNode head) { /* standard iterative reverse */ }</code></pre>\n<p>Time O(n), space O(1).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Linked List"
      ],
      "keyPoints": [
        "Use slow/fast pointers to find the middle.",
        "Reverse the second half of the list.",
        "Merge the two halves alternately."
      ]
    },
    {
      "question": "Maximum Depth of Binary Tree.",
      "answer": "<p>Recursively compute max depth of left and right subtrees.</p>\n<pre><code class=\"language-java\">public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}</code></pre>\n<p>Time O(n), space O(h).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Base case: null node has depth 0.",
        "Return 1 plus the max depth of the children.",
        "Iterative BFS also works using a queue."
      ]
    },
    {
      "question": "Invert/Flip a Binary Tree.",
      "answer": "<p>Swap left and right children recursively or iteratively.</p>\n<pre><code class=\"language-java\">public TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    TreeNode temp = root.left;\n    root.left = invertTree(root.right);\n    root.right = invertTree(temp);\n    return root;\n}</code></pre>\n<p>Time O(n), space O(h).</p>",
      "difficulty": "Beginner",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Swap the left and right children at every node.",
        "Recurse on both subtrees.",
        "BFS with a queue is an iterative alternative."
      ]
    },
    {
      "question": "Binary Tree Maximum Path Sum (can start and end anywhere in the tree).",
      "answer": "<p>For each node compute the max gain from left/right and track a global max including the node as the apex.</p>\n<pre><code class=\"language-java\">int maxSum = Integer.MIN_VALUE;\npublic int maxPathSum(TreeNode root) {\n    gain(root);\n    return maxSum;\n}\nint gain(TreeNode node) {\n    if (node == null) return 0;\n    int left = Math.max(gain(node.left), 0);\n    int right = Math.max(gain(node.right), 0);\n    maxSum = Math.max(maxSum, node.val + left + right);\n    return node.val + Math.max(left, right);\n}</code></pre>\n<p>Time O(n), space O(h).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Compute max contribution from each subtree, ignoring negative sums.",
        "Update global max with node plus both contributions.",
        "Return node plus the larger single-side contribution."
      ]
    },
    {
      "question": "Serialize and Deserialize a Binary Tree.",
      "answer": "<p>Use preorder traversal with a sentinel for null nodes.</p>\n<pre><code class=\"language-java\">public String serialize(TreeNode root) {\n    StringBuilder sb = new StringBuilder();\n    build(root, sb);\n    return sb.toString();\n}\nvoid build(TreeNode node, StringBuilder sb) {\n    if (node == null) { sb.append(\"X,\"); return; }\n    sb.append(node.val).append(\",\");\n    build(node.left, sb);\n    build(node.right, sb);\n}\npublic TreeNode deserialize(String data) {\n    Queue&lt;String&gt; q = new LinkedList&lt;&gt;(Arrays.asList(data.split(\",\")));\n    return rebuild(q);\n}\nTreeNode rebuild(Queue&lt;String&gt; q) {\n    String v = q.poll();\n    if (v.equals(\"X\")) return null;\n    TreeNode node = new TreeNode(Integer.parseInt(v));\n    node.left = rebuild(q);\n    node.right = rebuild(q);\n    return node;\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Encode null children with a sentinel value.",
        "Traverse preorder for both serialization and deserialization.",
        "Use a queue to consume tokens during deserialization."
      ]
    },
    {
      "question": "Construct Binary Tree from Preorder and Inorder Traversal.",
      "answer": "<p>Use preorder to find root, inorder to split left/right subtrees.</p>\n<pre><code class=\"language-java\">Map&lt;Integer, Integer&gt; inMap = new HashMap&lt;&gt;();\npublic TreeNode buildTree(int[] preorder, int[] inorder) {\n    for (int i = 0; i &lt; inorder.length; i++) inMap.put(inorder[i], i);\n    return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);\n}\nTreeNode build(int[] pre, int ps, int pe, int[] in, int is, int ie) {\n    if (ps &gt; pe) return null;\n    TreeNode root = new TreeNode(pre[ps]);\n    int idx = inMap.get(root.val);\n    int leftSize = idx - is;\n    root.left = build(pre, ps + 1, ps + leftSize, in, is, idx - 1);\n    root.right = build(pre, ps + leftSize + 1, pe, in, idx + 1, ie);\n    return root;\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "The first element of preorder is the subtree root.",
        "Find that root in inorder to split left and right.",
        "Recursively build subtrees using index ranges."
      ]
    },
    {
      "question": "Validate a Binary Search Tree (BST).",
      "answer": "<p>Use recursion with valid min/max bounds, or in-order traversal checking increasing order.</p>\n<pre><code class=\"language-java\">public boolean isValidBST(TreeNode root) {\n    return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);\n}\nboolean validate(TreeNode node, long min, long max) {\n    if (node == null) return true;\n    if (node.val &lt;= min || node.val &gt;= max) return false;\n    return validate(node.left, min, node.val) && validate(node.right, node.val, max);\n}</code></pre>\n<p>Time O(n), space O(h).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Each node must be within a valid range.",
        "Left child range is updated to be less than parent.",
        "Right child range must be greater than parent."
      ]
    },
    {
      "question": "Find the Kth Smallest Element in a BST.",
      "answer": "<p>In-order traversal of a BST yields sorted values; stop at the kth visited node.</p>\n<pre><code class=\"language-java\">int count = 0, result = 0;\npublic int kthSmallest(TreeNode root, int k) {\n    inorder(root, k);\n    return result;\n}\nvoid inorder(TreeNode node, int k) {\n    if (node == null) return;\n    inorder(node.left, k);\n    count++;\n    if (count == k) { result = node.val; return; }\n    inorder(node.right, k);\n}</code></pre>\n<p>Time O(h + k), space O(h).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "In-order traversal visits BST nodes in ascending order.",
        "Stop when the counter reaches k.",
        "Average time is O(h + k)."
      ]
    },
    {
      "question": "Lowest Common Ancestor of a Binary Tree.",
      "answer": "<p>If root equals one node or is null, return root; otherwise recurse left and right.</p>\n<pre><code class=\"language-java\">public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}</code></pre>\n<p>Time O(n), space O(h).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "If root is p or q, it is the LCA.",
        "Recurse on left and right subtrees.",
        "If both sides return non-null, root is the LCA."
      ]
    },
    {
      "question": "Find the distance between two nodes in a binary tree (with parent pointers).",
      "answer": "<p>Lift the deeper node to the same depth, then move both up until they meet.</p>\n<pre><code class=\"language-java\">public int distance(Node p, Node q) {\n    int distP = depth(p), distQ = depth(q);\n    while (distP &gt; distQ) { p = p.parent; distP--; }\n    while (distQ &gt; distP) { q = q.parent; distQ--; }\n    int dist = 0;\n    while (p != q) { p = p.parent; q = q.parent; dist += 2; }\n    return dist;\n}\nint depth(Node node) {\n    int d = 0;\n    while (node.parent != null) { node = node.parent; d++; }\n    return d;\n}</code></pre>\n<p>Time O(h).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Compute depths of both nodes from the root.",
        "Align both nodes to the same depth.",
        "Move both upward together until they meet."
      ]
    },
    {
      "question": "Given two nodes of a binary tree, find their Lowest Common Ancestor (LCA).",
      "answer": "<p>Recursively search both subtrees. If a node matches p or q, propagate it up; when both sides are non-null, the current node is the LCA.</p>\n<pre><code class=\"language-java\">public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}</code></pre>\n<p>Time O(n), space O(h).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Return the node itself if it equals p or q.",
        "Recurse on left and right subtrees.",
        "The current node is the LCA when both subtrees return a match."
      ]
    },
    {
      "question": "Implement a Trie (Prefix Tree) with insert, search, and startsWith methods.",
      "answer": "<p>Build a tree of nodes where each edge is a character.</p>\n<pre><code class=\"language-java\">class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEnd;\n}\nclass Trie {\n    TrieNode root = new TrieNode();\n    public void insert(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) {\n            if (node.children[c - 'a'] == null) node.children[c - 'a'] = new TrieNode();\n            node = node.children[c - 'a'];\n        }\n        node.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode node = find(word);\n        return node != null && node.isEnd;\n    }\n    public boolean startsWith(String prefix) { return find(prefix) != null; }\n    TrieNode find(String s) {\n        TrieNode node = root;\n        for (char c : s.toCharArray()) {\n            node = node.children[c - 'a'];\n            if (node == null) return null;\n        }\n        return node;\n    }\n}</code></pre>\n<p>Insert/search O(m) where m is word length.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Each node stores children and an end-of-word flag.",
        "Insert creates nodes along the character path.",
        "Search checks the path and the end flag; startsWith only needs a valid path."
      ]
    },
    {
      "question": "Find the maximum width of a binary tree.",
      "answer": "<p>Use BFS and index nodes as if in a complete binary tree; width is last minus first index + 1.</p>\n<pre><code class=\"language-java\">public int widthOfBinaryTree(TreeNode root) {\n    if (root == null) return 0;\n    Queue&lt;Pair&lt;TreeNode, Integer&gt;&gt; q = new LinkedList&lt;&gt;();\n    q.offer(new Pair&lt;&gt;(root, 0));\n    int max = 0;\n    while (!q.isEmpty()) {\n        int size = q.size(), min = q.peek().getValue();\n        int first = 0, last = 0;\n        for (int i = 0; i &lt; size; i++) {\n            Pair&lt;TreeNode, Integer&gt; cur = q.poll();\n            TreeNode node = cur.getKey();\n            int idx = cur.getValue() - min;\n            if (i == 0) first = idx;\n            if (i == size - 1) last = idx;\n            if (node.left != null) q.offer(new Pair&lt;&gt;(node.left, 2 * idx));\n            if (node.right != null) q.offer(new Pair&lt;&gt;(node.right, 2 * idx + 1));\n        }\n        max = Math.max(max, last - first + 1);\n    }\n    return max;\n}</code></pre>\n<p>Time O(n), space O(n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Trees"
      ],
      "keyPoints": [
        "Assign indices to nodes like a complete binary tree.",
        "Normalize indices per level to avoid overflow.",
        "Width is max lastIndex - firstIndex + 1 across levels."
      ]
    },
    {
      "question": "Number of Islands: Given a 2D grid of '1's (land) and '0's (water), count the number of islands.",
      "answer": "<p>DFS/BFS each unvisited '1' and mark all connected land as visited.</p>\n<pre><code class=\"language-java\">public int numIslands(char[][] grid) {\n    int count = 0;\n    for (int i = 0; i &lt; grid.length; i++)\n        for (int j = 0; j &lt; grid[0].length; j++)\n            if (grid[i][j] == '1') {\n                count++;\n                dfs(grid, i, j);\n            }\n    return count;\n}\nvoid dfs(char[][] grid, int i, int j) {\n    if (i &lt; 0 || j &lt; 0 || i &gt;= grid.length || j &gt;= grid[0].length || grid[i][j] != '1') return;\n    grid[i][j] = '0';\n    dfs(grid, i + 1, j); dfs(grid, i - 1, j); dfs(grid, i, j + 1); dfs(grid, i, j - 1);\n}</code></pre>\n<p>Time O(m×n), space O(m×n) recursion.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Traverse the grid and start DFS from each unvisited land cell.",
        "Mark visited cells to avoid recounting.",
        "Count how many DFS launches are needed."
      ]
    },
    {
      "question": "Clone a Graph: Given a reference of a node in a connected undirected graph, return a deep copy.",
      "answer": "<p>Use a hash map to map original nodes to copies and DFS/BFS to traverse.</p>\n<pre><code class=\"language-java\">public Node cloneGraph(Node node) {\n    if (node == null) return null;\n    Map&lt;Node, Node&gt; map = new HashMap&lt;&gt;();\n    return dfs(node, map);\n}\nNode dfs(Node node, Map&lt;Node, Node&gt; map) {\n    if (map.containsKey(node)) return map.get(node);\n    Node copy = new Node(node.val);\n    map.put(node, copy);\n    for (Node n : node.neighbors) copy.neighbors.add(dfs(n, map));\n    return copy;\n}</code></pre>\n<p>Time O(V + E), space O(V).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Map every original node to a new copy.",
        "Create the copy before recursing to avoid infinite loops.",
        "DFS or BFS both run in O(V + E) time."
      ]
    },
    {
      "question": "Course Schedule: Determine if it is possible to finish all courses given prerequisites (Detect Cycle in Directed Graph).",
      "answer": "<p>Detect a cycle in a directed graph using Kahn's algorithm or DFS.</p>\n<pre><code class=\"language-java\">public boolean canFinish(int numCourses, int[][] prerequisites) {\n    List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();\n    int[] in = new int[numCourses];\n    for (int i = 0; i &lt; numCourses; i++) graph.add(new ArrayList&lt;&gt;());\n    for (int[] p : prerequisites) {\n        graph.get(p[1]).add(p[0]);\n        in[p[0]]++;\n    }\n    Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();\n    for (int i = 0; i &lt; numCourses; i++) if (in[i] == 0) q.offer(i);\n    int visited = 0;\n    while (!q.isEmpty()) {\n        int c = q.poll(); visited++;\n        for (int n : graph.get(c)) if (--in[n] == 0) q.offer(n);\n    }\n    return visited == numCourses;\n}</code></pre>\n<p>Time O(V + E), space O(V + E).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Model prerequisites as a directed graph.",
        "Use in-degree counts and a queue to process courses with no prerequisites.",
        "If all courses are processed, there is no cycle."
      ]
    },
    {
      "question": "Pacific Atlantic Water Flow: Find cells in a matrix where water can flow to both Pacific and Atlantic oceans.",
      "answer": "<p>DFS/BFS from oceans inward; cells reachable from both are the answer.</p>\n<pre><code class=\"language-java\">public List&lt;List&lt;Integer&gt;&gt; pacificAtlantic(int[][] heights) {\n    List&lt;List&lt;Integer&gt;&gt; res = new ArrayList&lt;&gt;();\n    int m = heights.length, n = heights[0].length;\n    boolean[][] pac = new boolean[m][n], atl = new boolean[m][n];\n    for (int i = 0; i &lt; m; i++) { dfs(heights, pac, i, 0); dfs(heights, atl, i, n - 1); }\n    for (int j = 0; j &lt; n; j++) { dfs(heights, pac, 0, j); dfs(heights, atl, m - 1, j); }\n    for (int i = 0; i &lt; m; i++)\n        for (int j = 0; j &lt; n; j++)\n            if (pac[i][j] && atl[i][j]) res.add(Arrays.asList(i, j));\n    return res;\n}\nvoid dfs(int[][] h, boolean[][] visited, int i, int j) {\n    visited[i][j] = true;\n    int[][] dirs = {{-1,0},{1,0},{0,-1},{0,1}};\n    for (int[] d : dirs) {\n        int x = i + d[0], y = j + d[1];\n        if (x &gt;= 0 && y &gt;= 0 && x &lt; h.length && y &lt; h[0].length && !visited[x][y] && h[x][y] &gt;= h[i][j])\n            dfs(h, visited, x, y);\n    }\n}</code></pre>\n<p>Time O(m×n), space O(m×n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Start DFS from both oceans' borders.",
        "Water can only flow to cells of equal or greater height.",
        "Cells reachable from both oceans are the result."
      ]
    },
    {
      "question": "Word Ladder: Given two words and a dictionary, find the length of the shortest transformation sequence.",
      "answer": "<p>Use BFS over transformed words, generating all possible one-letter changes.</p>\n<pre><code class=\"language-java\">public int ladderLength(String beginWord, String endWord, List&lt;String&gt; wordList) {\n    Set&lt;String&gt; dict = new HashSet&lt;&gt;(wordList);\n    if (!dict.contains(endWord)) return 0;\n    Queue&lt;String&gt; q = new LinkedList&lt;&gt;();\n    q.offer(beginWord);\n    int steps = 1;\n    while (!q.isEmpty()) {\n        int size = q.size();\n        for (int i = 0; i &lt; size; i++) {\n            String word = q.poll();\n            if (word.equals(endWord)) return steps;\n            for (int j = 0; j &lt; word.length(); j++) {\n                char[] chars = word.toCharArray();\n                for (char c = 'a'; c &lt;= 'z'; c++) {\n                    chars[j] = c;\n                    String next = new String(chars);\n                    if (dict.contains(next)) { q.offer(next); dict.remove(next); }\n                }\n            }\n        }\n        steps++;\n    }\n    return 0;\n}</code></pre>\n<p>Time O(N × M² × 26), space O(N).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Use BFS where each level is one letter change.",
        "Generate all possible one-letter neighbors.",
        "Remove visited words from the dictionary to avoid cycles."
      ]
    },
    {
      "question": "Topological Sorting of a directed acyclic graph (DAG).",
      "answer": "<p>Kahn's algorithm or DFS post-order.</p>\n<pre><code class=\"language-java\">public int[] findOrder(int numCourses, int[][] prerequisites) {\n    List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();\n    int[] in = new int[numCourses];\n    for (int i = 0; i &lt; numCourses; i++) graph.add(new ArrayList&lt;&gt;());\n    for (int[] p : prerequisites) { graph.get(p[1]).add(p[0]); in[p[0]]++; }\n    Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();\n    for (int i = 0; i &lt; numCourses; i++) if (in[i] == 0) q.offer(i);\n    int[] order = new int[numCourses]; int idx = 0;\n    while (!q.isEmpty()) {\n        int c = q.poll(); order[idx++] = c;\n        for (int n : graph.get(c)) if (--in[n] == 0) q.offer(n);\n    }\n    return idx == numCourses ? order : new int[0];\n}</code></pre>\n<p>Time O(V + E), space O(V + E).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Repeatedly process nodes with in-degree zero.",
        "Append each processed node to the result.",
        "If the result length is less than V, the graph contains a cycle."
      ]
    },
    {
      "question": "Find the largest area of an island in a 2D grid (DFS/BFS).",
      "answer": "<p>DFS each '1' and count connected cells.</p>\n<pre><code class=\"language-java\">public int maxAreaOfIsland(int[][] grid) {\n    int max = 0;\n    for (int i = 0; i &lt; grid.length; i++)\n        for (int j = 0; j &lt; grid[0].length; j++)\n            if (grid[i][j] == 1) max = Math.max(max, dfs(grid, i, j));\n    return max;\n}\nint dfs(int[][] grid, int i, int j) {\n    if (i &lt; 0 || j &lt; 0 || i &gt;= grid.length || j &gt;= grid[0].length || grid[i][j] == 0) return 0;\n    grid[i][j] = 0;\n    return 1 + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1);\n}</code></pre>\n<p>Time O(m×n), space O(m×n).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Launch DFS from each land cell.",
        "Count cells in the current island and mark them visited.",
        "Track the maximum island area found."
      ]
    },
    {
      "question": "Given a tree-based coding question with follow-ups converting it to a graph, then solved using Dijkstra's algorithm.",
      "answer": "<p>Convert the tree to a graph by adding edges for neighbors and possibly a new edge, then run Dijkstra from a start node.</p>\n<pre><code class=\"language-java\">public int shortestPath(int n, int[][] edges, int start, int end) {\n    List&lt;List&lt;int[]&gt;&gt; graph = new ArrayList&lt;&gt;();\n    for (int i = 0; i &lt; n; i++) graph.add(new ArrayList&lt;&gt;());\n    for (int[] e : edges) {\n        graph.get(e[0]).add(new int[]{e[1], e[2]});\n        graph.get(e[1]).add(new int[]{e[0], e[2]});\n    }\n    int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE);\n    dist[start] = 0;\n    PriorityQueue&lt;int[]&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; a[1] - b[1]);\n    pq.offer(new int[]{start, 0});\n    while (!pq.isEmpty()) {\n        int[] cur = pq.poll();\n        if (cur[1] &gt; dist[cur[0]]) continue;\n        for (int[] nei : graph.get(cur[0])) {\n            int d = cur[1] + nei[1];\n            if (d &lt; dist[nei[0]]) { dist[nei[0]] = d; pq.offer(new int[]{nei[0], d}); }\n        }\n    }\n    return dist[end] == Integer.MAX_VALUE ? -1 : dist[end];\n}</code></pre>\n<p>Time O((V + E) log V), space O(V + E).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Coding",
        "DSA",
        "Graphs"
      ],
      "keyPoints": [
        "Build an adjacency list from edges.",
        "Use a min-heap to always expand the shortest known distance.",
        "Relax neighbors and return the shortest distance to the target."
      ]
    }
  ]
};
