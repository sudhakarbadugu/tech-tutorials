// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.502Z

export const sqlQuestions = {
  "questions": [
    {
      "question": "Find the Nth highest salary with edge case handling",
      "answer": "<pre ngnonbindable=\"\"><code>-- Method 1: Using DENSE_RANK (handles duplicates)\nWITH ranked_salaries AS (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank\n  FROM employees\n)\nSELECT DISTINCT salary as nth_highest_salary\nFROM ranked_salaries\nWHERE rank = 2; -- Change 2 to N\n\n-- Method 2: Using subquery with NULL handling\nSELECT COALESCE(\n  (SELECT DISTINCT salary \n   FROM employees \n   ORDER BY salary DESC \n   LIMIT 1 OFFSET 1), -- Change 1 to N-1\n  NULL\n) AS second_highest_salary;\n\n-- Method 3: Generic function approach\nCREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT\nBEGIN\n  DECLARE result INT DEFAULT NULL;\n  SELECT DISTINCT salary INTO result\n  FROM employees\n  ORDER BY salary DESC\n  LIMIT 1 OFFSET N-1;\n  RETURN result;\nEND;\n</code></pre>\n              <strong>Follow-up Questions:</strong>\n              <ul>\n                <li>What if there are duplicate salaries?</li>\n                <li>How to handle when there's no Nth highest salary?</li>\n                <li>Performance implications of each approach</li>\n              </ul>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "What if there are duplicate salaries?",
        "How to handle when there's no Nth highest salary?",
        "Performance implications of each approach"
      ]
    },
    {
      "question": "Customer Analytics with Window Functions",
      "answer": "<pre ngnonbindable=\"\"><code>-- Find customers with running totals, ranks, and growth\nWITH customer_analytics AS (\n  SELECT \n    c.customer_id,\n    c.name,\n    o.order_date,\n    o.amount,\n    -- Running total for each customer\n    SUM(o.amount) OVER (\n      PARTITION BY c.customer_id \n      ORDER BY o.order_date\n    ) AS running_total,\n    -- Rank customers by total spending\n    DENSE_RANK() OVER (ORDER BY SUM(o.amount) DESC) AS spending_rank,\n    -- Previous order amount for growth calculation\n    LAG(o.amount) OVER (\n      PARTITION BY c.customer_id \n      ORDER BY o.order_date\n    ) AS prev_order_amount,\n    -- Moving average of last 3 orders\n    AVG(o.amount) OVER (\n      PARTITION BY c.customer_id \n      ORDER BY o.order_date \n      ROWS 2 PRECEDING\n    ) AS moving_avg_3_orders\n  FROM customers c\n  JOIN orders o ON c.customer_id = o.customer_id\n)\nSELECT *,\n  CASE \n    WHEN prev_order_amount IS NOT NULL \n    THEN ((amount - prev_order_amount) / prev_order_amount) * 100\n    ELSE NULL\n  END AS growth_percentage\nFROM customer_analytics\nORDER BY customer_id, order_date;\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "-- Find customers with running totals, ranks, and growth WITH customer_analytics AS ( SELECT c.",
        "amount, -- Running total for each customer SUM(o."
      ]
    },
    {
      "question": "How to optimize database performance",
      "answer": "<ol>\n                <li>\n                  <strong>Indexing Strategies:</strong>\n                  <pre ngnonbindable=\"\"><code>-- Create composite index for multi-column searches\nCREATE INDEX idx_customer_date ON orders(customer_id, order_date);\n\n-- Partial index for specific conditions\nCREATE INDEX idx_active_users ON users(email) WHERE active = true;\n\n-- Index on expressions\nCREATE INDEX idx_upper_email ON users(UPPER(email));\n\n-- Covering index (includes all needed columns)\nCREATE INDEX idx_order_summary ON orders(customer_id, order_date) \nINCLUDE (amount, product_id);\n</code></pre>\n                </li>\n                <li>\n                  <strong>Query Optimization:</strong>\n                  <ul>\n                    <li>Use EXPLAIN PLAN to analyze query execution</li>\n                    <li>Avoid SELECT * in production queries</li>\n                    <li>Use appropriate JOIN types (INNER vs LEFT vs EXISTS)</li>\n                    <li>Implement query result caching</li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Database Design:</strong>\n                  <ul>\n                    <li>Normalize to reduce redundancy (3NF minimum)</li>\n                    <li>Denormalize for read-heavy workloads when needed</li>\n                    <li>Use appropriate data types</li>\n                    <li>Implement proper constraints</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Query Optimization: Use EXPLAIN PLAN to analyze query execution",
        "Avoid SELECT * in production queries",
        "Use appropriate JOIN types (INNER vs LEFT vs EXISTS)"
      ]
    },
    {
      "question": "Explain ACID properties with examples",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Property</th>\n                    <th>Description</th>\n                    <th>Example</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Atomicity</strong></td>\n                    <td>All operations in a transaction succeed or all fail</td>\n                    <td>Bank transfer: Debit and credit must both succeed or both fail</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Consistency</strong></td>\n                    <td>Database remains in valid state before and after transaction</td>\n                    <td>Account balance constraints are maintained during transfers</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Isolation</strong></td>\n                    <td>Concurrent transactions don't interfere with each other</td>\n                    <td>\n                      Two users transferring money simultaneously don't see intermediate states\n                    </td>\n                  </tr>\n                  <tr>\n                    <td><strong>Durability</strong></td>\n                    <td>Committed changes persist even after system failure</td>\n                    <td>Completed transactions survive database crashes</td>\n                  </tr>\n                </tbody>\n              </table>\n              <pre ngnonbindable=\"\"><code>-- Example transaction with proper error handling\nBEGIN TRANSACTION;\n  SAVEPOINT before_transfer;\n  \n  UPDATE accounts \n  SET balance = balance - 1000 \n  WHERE account_id = 'A123';\n  \n  IF @@ROWCOUNT = 0 OR (SELECT balance FROM accounts WHERE account_id = 'A123') &lt; 0\n  BEGIN\n    ROLLBACK TO before_transfer;\n    THROW 50001, 'Insufficient funds', 1;\n  END\n  \n  UPDATE accounts \n  SET balance = balance + 1000 \n  WHERE account_id = 'B456';\n  \nCOMMIT TRANSACTION;\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Property Description Example Atomicity All operations in a transaction succeed or all fail Bank transfer: Debit and credit must both succeed or both fail Consistency Database remains in valid state be"
      ]
    },
    {
      "question": "Database design patterns for scalability",
      "answer": "<ol>\n                <li>\n                  <strong>Horizontal Partitioning (Sharding):</strong>\n                  <pre ngnonbindable=\"\"><code>-- Partition by customer ID ranges\nCREATE TABLE orders_shard1 (\n  order_id INT PRIMARY KEY,\n  customer_id INT CHECK (customer_id BETWEEN 1 AND 100000),\n  -- other columns\n);\n\nCREATE TABLE orders_shard2 (\n  order_id INT PRIMARY KEY,\n  customer_id INT CHECK (customer_id BETWEEN 100001 AND 200000),\n  -- other columns\n);\n</code></pre>\n                </li>\n                <li>\n                  <strong>Vertical Partitioning:</strong>\n                  <pre ngnonbindable=\"\"><code>-- Separate frequently accessed from rarely accessed data\nCREATE TABLE users_core (\n  user_id INT PRIMARY KEY,\n  email VARCHAR(255),\n  password_hash VARCHAR(255),\n  created_at TIMESTAMP\n);\n\nCREATE TABLE users_profile (\n  user_id INT PRIMARY KEY,\n  bio TEXT,\n  preferences JSON,\n  last_login TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users_core(user_id)\n);\n</code></pre>\n                </li>\n                <li>\n                  <strong>Read Replicas and Master-Slave Architecture:</strong>\n                  <ul>\n                    <li>Write operations go to master database</li>\n                    <li>Read operations distributed across read replicas</li>\n                    <li>Eventual consistency model</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Read Replicas and Master-Slave Architecture: Write operations go to master database",
        "Read operations distributed across read replicas",
        "Eventual consistency model"
      ]
    },
    {
      "question": "When to use NoSQL vs SQL databases?",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Aspect</th>\n                    <th>SQL (RDBMS)</th>\n                    <th>NoSQL</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Data Structure</strong></td>\n                    <td>Structured, fixed schema</td>\n                    <td>Flexible, schema-less or dynamic schema</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Scalability</strong></td>\n                    <td>Vertical scaling (scale up)</td>\n                    <td>Horizontal scaling (scale out)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>ACID Compliance</strong></td>\n                    <td>Full ACID compliance</td>\n                    <td>Eventually consistent (BASE model)</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Use Cases</strong></td>\n                    <td>Financial systems, complex queries, reporting</td>\n                    <td>Real-time web apps, big data, rapid development</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Examples</strong></td>\n                    <td>PostgreSQL, MySQL, Oracle</td>\n                    <td>MongoDB, Cassandra, Redis, DynamoDB</td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Aspect SQL (RDBMS) NoSQL Data Structure Structured, fixed schema Flexible, schema-less or dynamic schema Scalability Vertical scaling (scale up) Horizontal scaling (scale out) ACID Compliance Full ACI"
      ]
    },
    {
      "question": "How to solve the N+1 problem in ORMs?",
      "answer": "<ol>\n                <li>\n                  <strong>Problem Description:</strong>\n                  <p>\n                    N+1 occurs when fetching a list of entities (1 query) and then fetching related\n                    data for each entity (N queries).\n                  </p>\n                </li>\n                <li>\n                  <strong>Solutions in Hibernate/JPA:</strong>\n                  <pre ngnonbindable=\"\"><code>-- Problem: N+1 queries\nList&lt;User&gt; users = userRepository.findAll(); // 1 query\nfor (User user : users) {{ '{' }}\n  user.getOrders().size(); // N queries (one per user)\n{{ '}' }}\n\n-- Solution 1: JOIN FETCH\n@Query(\"SELECT u FROM User u JOIN FETCH u.orders\")\nList&lt;User&gt; findAllWithOrders();\n\n-- Solution 2: EntityGraph\n@EntityGraph(attributePaths = {{ '{' }}\"orders\", \"orders.items\"{{ '}' }})\nList&lt;User&gt; findAll();\n\n-- Solution 3: Batch fetching\n@BatchSize(size = 10)\n@OneToMany(mappedBy = \"user\")\nprivate Set&lt;Order&gt; orders;\n\n-- Solution 4: Projection for specific data\n@Query(\"SELECT new com.example.UserOrderDto(u.name, COUNT(o)) \" +\n       \"FROM User u LEFT JOIN u.orders o GROUP BY u.id, u.name\")\nList&lt;UserOrderDto&gt; findUserOrderCounts();\n</code></pre>\n                </li>\n                <li>\n                  <strong>Solutions in Other ORMs:</strong>\n                  <ul>\n                    <li>\n                      <strong>Sequelize (Node.js):</strong>\n                      Use\n                      <code>include</code>\n                      with\n                      <code>required: false</code>\n                    </li>\n                    <li>\n                      <strong>Django ORM:</strong>\n                      Use\n                      <code>select_related()</code>\n                      and\n                      <code>prefetch_related()</code>\n                    </li>\n                    <li>\n                      <strong>ActiveRecord (Rails):</strong>\n                      Use\n                      <code>includes()</code>\n                      method\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Problem Description: N+1 occurs when fetching a list of entities (1 query) and then fetching related data for each entity (N queries).",
        "Solutions in Other ORMs: Sequelize (Node.js): Use include with required: false",
        "Django ORM: Use select_related() and prefetch_related()"
      ]
    },
    {
      "question": "Database security best practices",
      "answer": "<ol>\n                <li>\n                  <strong>SQL Injection Prevention:</strong>\n                  <pre ngnonbindable=\"\"><code>-- BAD: Vulnerable to SQL injection\nString query = \"SELECT * FROM users WHERE id = \" + userId;\n\n-- GOOD: Using parameterized queries\nString query = \"SELECT * FROM users WHERE id = ?\";\nPreparedStatement pstmt = connection.prepareStatement(query);\npstmt.setInt(1, userId);\n\n-- GOOD: Using JPA/Hibernate\n@Query(\"SELECT u FROM User u WHERE u.id = :userId\")\nUser findById(@Param(\"userId\") Long userId);\n</code></pre>\n                </li>\n                <li>\n                  <strong>Access Control:</strong>\n                  <ul>\n                    <li>Principle of least privilege</li>\n                    <li>Role-based access control (RBAC)</li>\n                    <li>Database user segregation</li>\n                    <li>Connection pooling with limited privileges</li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Data Protection:</strong>\n                  <ul>\n                    <li>Encrypt sensitive data at rest</li>\n                    <li>Use SSL/TLS for data in transit</li>\n                    <li>Hash passwords with salt</li>\n                    <li>Regular security audits and updates</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Access Control: Principle of least privilege",
        "Role-based access control (RBAC)",
        "Database user segregation"
      ]
    },
    {
      "question": "Database constraints and their differences",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Constraint Type</th>\n                    <th>Purpose</th>\n                    <th>Allows NULL</th>\n                    <th>Multiple Per Table</th>\n                    <th>Example</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>PRIMARY KEY</strong></td>\n                    <td>Uniquely identifies each row</td>\n                    <td>No</td>\n                    <td>No (only one per table)</td>\n                    <td><code>id INT PRIMARY KEY</code></td>\n                  </tr>\n                  <tr>\n                    <td><strong>FOREIGN KEY</strong></td>\n                    <td>Maintains referential integrity</td>\n                    <td>Yes</td>\n                    <td>Yes</td>\n                    <td><code>FOREIGN KEY (user_id) REFERENCES users(id)</code></td>\n                  </tr>\n                  <tr>\n                    <td><strong>UNIQUE</strong></td>\n                    <td>Ensures all values are distinct</td>\n                    <td>Yes (multiple NULLs allowed)</td>\n                    <td>Yes</td>\n                    <td><code>email VARCHAR(255) UNIQUE</code></td>\n                  </tr>\n                  <tr>\n                    <td><strong>NOT NULL</strong></td>\n                    <td>Prevents NULL values</td>\n                    <td>No</td>\n                    <td>Yes</td>\n                    <td><code>name VARCHAR(100) NOT NULL</code></td>\n                  </tr>\n                  <tr>\n                    <td><strong>CHECK</strong></td>\n                    <td>Validates data against conditions</td>\n                    <td>Yes</td>\n                    <td>Yes</td>\n                    <td><code>age INT CHECK (age &gt;= 0 AND age &lt;= 150)</code></td>\n                  </tr>\n                </tbody>\n              </table>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Constraint Type Purpose Allows NULL Multiple Per Table Example PRIMARY KEY Uniquely identifies each row No No (only one per table) id INT PRIMARY KEY FOREIGN KEY Maintains referential integrity Yes Ye"
      ]
    },
    {
      "question": "Database connection pooling and configuration",
      "answer": "<ol>\n                <li>\n                  <strong>Why Connection Pooling?</strong>\n                  <ul>\n                    <li>Reduces overhead of creating/destroying connections</li>\n                    <li>Limits database connections to prevent resource exhaustion</li>\n                    <li>Improves application performance and scalability</li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Configuration Example (HikariCP with Spring Boot):</strong>\n                  <pre ngnonbindable=\"\"><code># application.properties\nspring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.idle-timeout=300000\nspring.datasource.hikari.connection-timeout=30000\nspring.datasource.hikari.max-lifetime=1800000\nspring.datasource.hikari.leak-detection-threshold=60000\n\n# Monitor pool health\nspring.datasource.hikari.register-mbeans=true\n</code></pre>\n                </li>\n                <li>\n                  <strong>Best Practices:</strong>\n                  <ul>\n                    <li>Set appropriate pool size based on concurrent users</li>\n                    <li>Monitor connection usage and adjust accordingly</li>\n                    <li>Implement connection leak detection</li>\n                    <li>Use health checks to validate connections</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Why Connection Pooling? Reduces overhead of creating/destroying connections",
        "Limits database connections to prevent resource exhaustion",
        "Improves application performance and scalability"
      ]
    },
    {
      "question": "Database migrations and schema evolution strategies",
      "answer": "<ol>\n                <li>\n                  <strong>Migration Tools and Best Practices:</strong>\n                  <pre ngnonbindable=\"\"><code>-- Flyway migration example (V1__Create_users_table.sql)\nCREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    password_hash VARCHAR(255) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- Liquibase migration example\n&lt;changeSet id=\"1\" author=\"developer\"&gt;\n    &lt;createTable tableName=\"orders\"&gt;\n        &lt;column name=\"id\" type=\"BIGINT\" autoIncrement=\"true\"&gt;\n            &lt;constraints primaryKey=\"true\"/&gt;\n        &lt;/column&gt;\n        &lt;column name=\"user_id\" type=\"BIGINT\"&gt;\n            &lt;constraints nullable=\"false\"/&gt;\n        &lt;/column&gt;\n    &lt;/createTable&gt;\n&lt;/changeSet&gt;\n\n-- Zero-downtime migration strategy\n-- Step 1: Add new column (nullable)\nALTER TABLE users ADD COLUMN new_email VARCHAR(255);\n\n-- Step 2: Populate new column\nUPDATE users SET new_email = email WHERE new_email IS NULL;\n\n-- Step 3: Make column non-nullable\nALTER TABLE users ALTER COLUMN new_email SET NOT NULL;\n\n-- Step 4: Add unique constraint\nALTER TABLE users ADD CONSTRAINT uk_users_new_email UNIQUE (new_email);\n\n-- Step 5: Drop old column (after application deployment)\nALTER TABLE users DROP COLUMN email;\n</code></pre>\n                </li>\n                <li>\n                  <strong>Migration Strategies:</strong>\n                  <ul>\n                    <li>Blue-green deployment with database versioning</li>\n                    <li>Backward-compatible schema changes</li>\n                    <li>Feature flags for gradual rollouts</li>\n                    <li>Rollback strategies and data recovery plans</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Migration Strategies: Blue-green deployment with database versioning",
        "Backward-compatible schema changes",
        "Feature flags for gradual rollouts"
      ]
    },
    {
      "question": "Database caching strategies for web applications",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Cache Type</th>\n                    <th>Use Case</th>\n                    <th>Implementation</th>\n                    <th>TTL Strategy</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Application Cache</strong></td>\n                    <td>Frequently accessed data</td>\n                    <td>Redis, Memcached</td>\n                    <td>Time-based expiration</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Query Result Cache</strong></td>\n                    <td>Expensive queries</td>\n                    <td>Hibernate 2nd level cache</td>\n                    <td>Event-based invalidation</td>\n                  </tr>\n                  <tr>\n                    <td><strong>HTTP Cache</strong></td>\n                    <td>API responses</td>\n                    <td>CDN, Browser cache</td>\n                    <td>ETag, Last-Modified</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Session Cache</strong></td>\n                    <td>User session data</td>\n                    <td>Redis with Spring Session</td>\n                    <td>Session timeout based</td>\n                  </tr>\n                </tbody>\n              </table>\n              <pre ngnonbindable=\"\"><code>// Spring Boot Redis caching example\n@Service\npublic class UserService {{ '{' }}\n    \n    @Cacheable(value = \"users\", key = \"#id\")\n    public User findById(Long id) {{ '{' }}\n        return userRepository.findById(id);\n    {{ '}' }}\n    \n    @CacheEvict(value = \"users\", key = \"#user.id\")\n    public User updateUser(User user) {{ '{' }}\n        return userRepository.save(user);\n    {{ '}' }}\n    \n    @CachePut(value = \"users\", key = \"#result.id\")\n    public User createUser(User user) {{ '{' }}\n        return userRepository.save(user);\n    {{ '}' }}\n{{ '}' }}\n\n// Cache-aside pattern with manual control\n@Service\npublic class ProductService {{ '{' }}\n    \n    @Autowired\n    private RedisTemplate&lt;String, Product&gt; redisTemplate;\n    \n    public Product getProduct(String id) {{ '{' }}\n        String key = \"product:\" + id;\n        Product cached = redisTemplate.opsForValue().get(key);\n        \n        if (cached != null) {{ '{' }}\n            return cached;\n        {{ '}' }}\n        \n        Product product = productRepository.findById(id);\n        if (product != null) {{ '{' }}\n            redisTemplate.opsForValue().set(key, product, Duration.ofHours(1));\n        {{ '}' }}\n        \n        return product;\n    {{ '}' }}\n{{ '}' }}\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "findById(id); {{ '}' }} @CacheEvict(value = \"users\", key = \"#user.",
        "id\") public User updateUser(User user) {{ '{' }} return userRepository."
      ]
    },
    {
      "question": "API design patterns with database optimization",
      "answer": "<ol>\n                <li>\n                  <strong>Pagination Strategies:</strong>\n                  <pre ngnonbindable=\"\"><code>-- Offset-based pagination (simple but not performant for large datasets)\nSELECT * FROM products \nORDER BY created_at DESC \nLIMIT 20 OFFSET 100;\n\n-- Cursor-based pagination (better for large datasets)\nSELECT * FROM products \nWHERE created_at &lt; '2023-01-01 12:00:00'\nORDER BY created_at DESC \nLIMIT 20;\n\n-- Keyset pagination with composite keys\nSELECT * FROM orders \nWHERE (created_at, id) &lt; ('2023-01-01 12:00:00', 12345)\nORDER BY created_at DESC, id DESC \nLIMIT 20;\n\n// Spring Boot pagination example\n@RestController\npublic class ProductController {{ '{' }}\n    \n    @GetMapping(\"/products\")\n    public Page&lt;ProductDto&gt; getProducts(\n        @RequestParam(defaultValue = \"0\") int page,\n        @RequestParam(defaultValue = \"20\") int size,\n        @RequestParam(defaultValue = \"createdAt\") String sortBy\n    ) {{ '{' }}\n        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending());\n        return productService.findAll(pageable)\n                .map(this::convertToDto);\n    {{ '}' }}\n{{ '}' }}\n</code></pre>\n                </li>\n                <li>\n                  <strong>GraphQL with DataLoader (N+1 Prevention):</strong>\n                  <pre ngnonbindable=\"\"><code>// DataLoader implementation for batching\n@Component\npublic class UserDataLoader {{ '{' }}\n    \n    @Autowired\n    private UserRepository userRepository;\n    \n    public DataLoader&lt;Long, User&gt; createDataLoader() {{ '{' }}\n        return DataLoader.newDataLoader(userIds -&gt; {{ '{' }}\n            List&lt;User&gt; users = userRepository.findAllById(userIds);\n            Map&lt;Long, User&gt; userMap = users.stream()\n                .collect(Collectors.toMap(User::getId, Function.identity()));\n            \n            return userIds.stream()\n                .map(userMap::get)\n                .collect(Collectors.toList());\n        {{ '}' }});\n    {{ '}' }}\n{{ '}' }}\n\n// GraphQL resolver using DataLoader\n@Component\npublic class OrderResolver {{ '{' }}\n    \n    public CompletableFuture&lt;User&gt; user(Order order, DataFetchingEnvironment env) {{ '{' }}\n        DataLoader&lt;Long, User&gt; dataLoader = env.getDataLoader(\"userDataLoader\");\n        return dataLoader.load(order.getUserId());\n    {{ '}' }}\n{{ '}' }}\n</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "descending()); return productService.",
        "newDataLoader(userIds -> {{ '{' }} List users = userRepository."
      ]
    },
    {
      "question": "Database monitoring and performance troubleshooting",
      "answer": "<ol>\n                <li>\n                  <strong>Key Metrics to Monitor:</strong>\n                  <ul>\n                    <li>Query execution time and frequency</li>\n                    <li>Connection pool utilization</li>\n                    <li>Database locks and deadlocks</li>\n                    <li>Memory usage and buffer pool hit ratio</li>\n                    <li>I/O operations and disk usage</li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Monitoring Tools and Queries:</strong>\n                  <pre ngnonbindable=\"\"><code>-- PostgreSQL: Find slow queries\nSELECT query, calls, total_time, mean_time, rows\nFROM pg_stat_statements\nORDER BY total_time DESC\nLIMIT 10;\n\n-- MySQL: Check current connections and processes\nSHOW PROCESSLIST;\nSELECT * FROM INFORMATION_SCHEMA.PROCESSLIST \nWHERE COMMAND != 'Sleep' \nORDER BY TIME DESC;\n\n-- PostgreSQL: Check active connections\nSELECT pid, usename, application_name, client_addr, state, query\nFROM pg_stat_activity\nWHERE state != 'idle'\nORDER BY query_start DESC;\n\n-- Find table sizes\nSELECT \n    schemaname,\n    tablename,\n    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size\nFROM pg_tables\nORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;\n\n-- Application monitoring with Micrometer\n@Component\npublic class DatabaseMetrics {{ '{' }}\n    \n    @EventListener\n    public void handleQueryExecution(QueryExecutionEvent event) {{ '{' }}\n        Timer.Sample sample = Timer.start(Metrics.globalRegistry);\n        sample.stop(Timer.builder(\"database.query.duration\")\n            .tag(\"query.type\", event.getQueryType())\n            .register(Metrics.globalRegistry));\n    {{ '}' }}\n{{ '}' }}\n</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Key Metrics to Monitor: Query execution time and frequency",
        "Connection pool utilization",
        "Database locks and deadlocks"
      ]
    },
    {
      "question": "Data consistency in distributed systems",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Pattern</th>\n                    <th>Use Case</th>\n                    <th>Consistency Level</th>\n                    <th>Complexity</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Saga Pattern</strong></td>\n                    <td>Distributed transactions across services</td>\n                    <td>Eventually consistent</td>\n                    <td>Medium</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Event Sourcing</strong></td>\n                    <td>Audit trail and state reconstruction</td>\n                    <td>Eventually consistent</td>\n                    <td>High</td>\n                  </tr>\n                  <tr>\n                    <td><strong>CQRS</strong></td>\n                    <td>Separate read/write models</td>\n                    <td>Eventually consistent</td>\n                    <td>Medium</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Two-Phase Commit</strong></td>\n                    <td>Strong consistency across databases</td>\n                    <td>Strong consistency</td>\n                    <td>High</td>\n                  </tr>\n                </tbody>\n              </table>\n              <pre ngnonbindable=\"\"><code>// Saga pattern implementation with Spring Boot\n@Component\npublic class OrderSaga {{ '{' }}\n    \n    @SagaOrchestrationStart\n    public void startOrderProcessing(OrderCreatedEvent event) {{ '{' }}\n        // Step 1: Reserve inventory\n        commandGateway.send(new ReserveInventoryCommand(\n            event.getOrderId(), event.getProductId(), event.getQuantity()));\n    {{ '}' }}\n    \n    @SagaOrchestrationStep\n    public void handleInventoryReserved(InventoryReservedEvent event) {{ '{' }}\n        // Step 2: Process payment\n        commandGateway.send(new ProcessPaymentCommand(\n            event.getOrderId(), event.getAmount()));\n    {{ '}' }}\n    \n    @SagaOrchestrationStep\n    public void handlePaymentFailed(PaymentFailedEvent event) {{ '{' }}\n        // Compensating action: Release inventory\n        commandGateway.send(new ReleaseInventoryCommand(\n            event.getOrderId(), event.getProductId()));\n    {{ '}' }}\n{{ '}' }}\n\n// Event sourcing example\n@Entity\npublic class OrderAggregate {{ '{' }}\n    private String orderId;\n    private OrderStatus status;\n    private List&lt;OrderEvent&gt; events = new ArrayList&lt;&gt;();\n    \n    public void createOrder(CreateOrderCommand command) {{ '{' }}\n        OrderCreatedEvent event = new OrderCreatedEvent(command.getOrderId());\n        apply(event);\n    {{ '}' }}\n    \n    private void apply(OrderEvent event) {{ '{' }}\n        events.add(event);\n        // Update aggregate state based on event\n        if (event instanceof OrderCreatedEvent) {{ '{' }}\n            this.status = OrderStatus.CREATED;\n        {{ '}' }}\n    {{ '}' }}\n{{ '}' }}\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "send(new ReserveInventoryCommand( event.",
        "getQuantity())); {{ '}' }} @SagaOrchestrationStep public void handleInventoryReserved(InventoryReservedEvent event) {{ '{' }} // Step 2: Process payment commandGateway."
      ]
    },
    {
      "question": "Modern database technologies and when to use them",
      "answer": "<table class=\"table table-striped table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Database Type</th>\n                    <th>Best Use Cases</th>\n                    <th>Examples</th>\n                    <th>Key Features</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><strong>Time Series DB</strong></td>\n                    <td>IoT data, monitoring, analytics</td>\n                    <td>InfluxDB, TimescaleDB</td>\n                    <td>High write throughput, compression</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Graph Database</strong></td>\n                    <td>Social networks, recommendations</td>\n                    <td>Neo4j, Amazon Neptune</td>\n                    <td>Relationship traversal, pattern matching</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Search Engine</strong></td>\n                    <td>Full-text search, log analysis</td>\n                    <td>Elasticsearch, Solr</td>\n                    <td>Text indexing, faceted search</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Vector Database</strong></td>\n                    <td>AI/ML applications, embeddings</td>\n                    <td>Pinecone, Weaviate, Chroma</td>\n                    <td>Similarity search, vector operations</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Multi-model DB</strong></td>\n                    <td>Complex applications with diverse data</td>\n                    <td>ArangoDB, CosmosDB</td>\n                    <td>Document + Graph + Key-Value</td>\n                  </tr>\n                </tbody>\n              </table>\n              <pre ngnonbindable=\"\"><code>// Time series data with InfluxDB\n@Measurement(name = \"cpu_usage\")\npublic class CpuMetric {{ '{' }}\n    @Column(tag = true)\n    private String host;\n    \n    @Column\n    private Double value;\n    \n    @Column(timestamp = true)\n    private Instant time;\n{{ '}' }}\n\n// Graph query with Neo4j\n@Query(\"MATCH (u:User)-[:FRIENDS_WITH]-&gt;(friend)-[:LIKES]-&gt;(product:Product) \" +\n       \"WHERE u.id = $userId \" +\n       \"RETURN product, COUNT(*) as recommendations \" +\n       \"ORDER BY recommendations DESC LIMIT 10\")\nList&lt;ProductRecommendation&gt; findRecommendations(@Param(\"userId\") String userId);\n\n// Elasticsearch integration\n@Document(indexName = \"products\")\npublic class ProductDocument {{ '{' }}\n    @Id\n    private String id;\n    \n    @Field(analyzer = \"standard\")\n    private String name;\n    \n    @Field(type = FieldType.Keyword)\n    private String category;\n    \n    @Field(type = FieldType.Double)\n    private Double price;\n{{ '}' }}\n\n@Repository\npublic interface ProductSearchRepository extends ElasticsearchRepository&lt;ProductDocument, String&gt; {{ '{' }}\n    \n    @Query({{ '{' }}\"bool\": {{ '{' }}\"must\": [{{ '{' }}\"match\": {{ '{' }}\"name\": \"?0\"{{ '}' }}{{ '}' }}]{{ '}' }}{{ '}' }})\n    List&lt;ProductDocument&gt; findByNameWithBoost(String name);\n{{ '}' }}\n</code></pre>",
      "difficulty": "Advanced",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Keyword) private String category; @Field(type = FieldType.",
        "Double) private Double price; {{ '}' }} @Repository public interface ProductSearchRepository extends ElasticsearchRepository {{ '{' }} @Query({{ '{' }}\"bool\": {{ '{' }}\"must\": [{{ '{' }}\"match\": {{ '{' }}\"name\": \"?"
      ]
    },
    {
      "question": "Database testing strategies for full stack applications",
      "answer": "<ol>\n                <li>\n                  <strong>Unit Testing with Test Containers:</strong>\n                  <pre ngnonbindable=\"\"><code>// Integration test with TestContainers\n@DataJpaTest\n@Testcontainers\nclass UserRepositoryTest {{ '{' }}\n    \n    @Container\n    static PostgreSQLContainer&lt;?&gt; postgres = new PostgreSQLContainer&lt;&gt;(\"postgres:13\")\n            .withDatabaseName(\"testdb\")\n            .withUsername(\"test\")\n            .withPassword(\"test\");\n    \n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {{ '{' }}\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n    {{ '}' }}\n    \n    @Test\n    void shouldSaveAndFindUser() {{ '{' }}\n        User user = new User(\"test@example.com\", \"John Doe\");\n        User saved = userRepository.save(user);\n        \n        Optional&lt;User&gt; found = userRepository.findByEmail(\"test@example.com\");\n        assertThat(found).isPresent();\n        assertThat(found.get().getName()).isEqualTo(\"John Doe\");\n    {{ '}' }}\n{{ '}' }}\n\n// Database state verification\n@Test\n@Sql(\"/test-data/users.sql\")\n@Sql(scripts = \"/cleanup.sql\", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)\nvoid shouldCalculateUserStatistics() {{ '{' }}\n    UserStatistics stats = userService.calculateStatistics();\n    assertThat(stats.getTotalUsers()).isEqualTo(5);\n    assertThat(stats.getActiveUsers()).isEqualTo(3);\n{{ '}' }}\n\n// Performance testing\n@Test\nvoid shouldHandleConcurrentUserCreation() throws InterruptedException {{ '{' }}\n    int threadCount = 10;\n    int operationsPerThread = 100;\n    ExecutorService executor = Executors.newFixedThreadPool(threadCount);\n    CountDownLatch latch = new CountDownLatch(threadCount);\n    \n    for (int i = 0; i &lt; threadCount; i++) {{ '{' }}\n        executor.submit(() -&gt; {{ '{' }}\n            try {{ '{' }}\n                for (int j = 0; j &lt; operationsPerThread; j++) {{ '{' }}\n                    userService.createUser(generateRandomUser());\n                {{ '}' }}\n            {{ '}' }} finally {{ '{' }}\n                latch.countDown();\n            {{ '}' }}\n        {{ '}' }});\n    {{ '}' }}\n    \n    latch.await(30, TimeUnit.SECONDS);\n    assertThat(userRepository.count()).isEqualTo(threadCount * operationsPerThread);\n{{ '}' }}\n</code></pre>\n                </li>\n                <li>\n                  <strong>Testing Strategies:</strong>\n                  <ul>\n                    <li>Use in-memory databases (H2) for fast unit tests</li>\n                    <li>Test containers for integration tests with real databases</li>\n                    <li>Database fixtures and cleanup strategies</li>\n                    <li>Performance testing with concurrent operations</li>\n                    <li>Migration testing in CI/CD pipelines</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "SQL"
      ],
      "keyPoints": [
        "Testing Strategies: Use in-memory databases (H2) for fast unit tests",
        "Test containers for integration tests with real databases",
        "Database fixtures and cleanup strategies"
      ]
    },
    {
      "question": "Explain different types of JOINs with examples",
      "answer": "<p>JOINs combine rows from two or more tables based on a related column.</p>\n\n<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>JOIN Type</th><th>Returns</th><th>When to Use</th></tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>INNER JOIN</strong></td><td>Only matching rows from both tables</td><td>Default choice — need data from both</td></tr>\n    <tr><td><strong>LEFT JOIN</strong></td><td>All rows from left + matching from right</td><td>Want all left rows, even without matches</td></tr>\n    <tr><td><strong>RIGHT JOIN</strong></td><td>All rows from right + matching from left</td><td>Rare — usually rewrite as LEFT JOIN</td></tr>\n    <tr><td><strong>FULL OUTER JOIN</strong></td><td>All rows from both tables</td><td>Find unmatched rows in either table</td></tr>\n    <tr><td><strong>CROSS JOIN</strong></td><td>Cartesian product (every combo)</td><td>Generate combinations, rarely needed</td></tr>\n    <tr><td><strong>SELF JOIN</strong></td><td>Table joined with itself</td><td>Hierarchies (manager-employee)</td></tr>\n  </tbody>\n</table>\n\n<pre ngnonbindable=\"\"><code>-- INNER JOIN: Get orders with customer names\nSELECT o.order_id, c.name, o.total\nFROM orders o\nINNER JOIN customers c ON o.customer_id = c.id;\n\n-- LEFT JOIN: All customers, even those without orders\nSELECT c.name, COUNT(o.order_id) AS order_count\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id\nGROUP BY c.id;\n\n-- SELF JOIN: Find employees and their managers\nSELECT e.name AS employee, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.id;\n\n-- FULL OUTER JOIN: Find unmatched rows in either table\nSELECT c.name, o.order_id\nFROM customers c\nFULL OUTER JOIN orders o ON c.id = o.customer_id\nWHERE c.id IS NULL OR o.customer_id IS NULL;</code></pre>\n\n<p><strong>Interview Tip:</strong> LEFT JOIN is the most common after INNER JOIN. RIGHT JOIN can always be rewritten as LEFT JOIN by swapping tables. FULL OUTER JOIN is not supported in MySQL — use UNION of LEFT JOIN + RIGHT JOIN.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SQL",
        "JOINs",
        "Queries"
      ],
      "keyPoints": [
        "JOINs combine rows from two or more tables based on a related column.",
        "total FROM orders o INNER JOIN customers c ON o."
      ]
    },
    {
      "question": "What are database indexes and how do they affect performance?",
      "answer": "<p>An <strong>index</strong> is a data structure (usually B-Tree) that speeds up data retrieval at the cost of additional storage and slower writes.</p>\n\n<h4>Types of Indexes</h4>\n<ul>\n  <li><strong>B-Tree Index</strong> — Default in most databases. Good for equality, range, and ORDER BY queries.</li>\n  <li><strong>Hash Index</strong> — O(1) for exact matches only. No range queries. PostgreSQL hash indexes.</li>\n  <li><strong>Composite Index</strong> — Index on multiple columns. Follows leftmost prefix rule.</li>\n  <li><strong>Covering Index</strong> — Includes all columns needed by the query, so no table lookup needed.</li>\n  <li><strong>Partial/Filtered Index</strong> — Index only rows matching a WHERE clause.</li>\n  <li><strong>Unique Index</strong> — Enforces uniqueness. Automatically created for PRIMARY KEY and UNIQUE constraints.</li>\n</ul>\n\n<pre ngnonbindable=\"\"><code>-- Create indexes\nCREATE INDEX idx_users_email ON users(email);                -- B-Tree\nCREATE INDEX idx_orders_comp ON orders(customer_id, order_date); -- Composite\nCREATE UNIQUE INDEX idx_users_email_uniq ON users(email);   -- Unique\n\n-- Covering index (PostgreSQL)\nCREATE INDEX idx_orders_covering ON orders(customer_id, order_date) INCLUDE (total);\n\n-- Partial index\nCREATE INDEX idx_active_users ON users(email) WHERE active = true;\n\n-- Check if index is being used\nEXPLAIN ANALYZE SELECT * FROM users WHERE email = 'alice@example.com';</code></pre>\n\n<h4>When to Index</h4>\n<ul>\n  <li>Columns in WHERE, JOIN, ORDER BY, GROUP BY clauses</li>\n  <li>High-cardinality columns (many distinct values)</li>\n  <li>Columns queried frequently</li>\n</ul>\n\n<h4>When NOT to Index</h4>\n<ul>\n  <li>Small tables (sequential scan is faster than index lookup)</li>\n  <li>Columns with low cardinality (e.g., boolean, gender)</li>\n  <li>Tables with heavy INSERT/UPDATE — each write updates all indexes</li>\n  <li>Columns rarely used in queries</li>\n</ul>\n\n<p><strong>Rule of Thumb:</strong> A query that returns &lt;5% of rows typically benefits from an index. Above 5%, a full scan is often faster.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "Indexes",
        "Performance"
      ],
      "keyPoints": [
        "B-Tree Index — Default in most databases. Good for equality, range, and ORDER BY queries.",
        "Hash Index — O(1) for exact matches only. No range queries. PostgreSQL hash indexes.",
        "Composite Index — Index on multiple columns. Follows leftmost prefix rule."
      ]
    },
    {
      "question": "Explain SQL transaction isolation levels with examples",
      "answer": "<p>Isolation levels control how visible changes made by one transaction are to other concurrent transactions. Lower isolation = better performance but more anomalies.</p>\n\n<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Isolation Level</th><th>Dirty Read</th><th>Non-Repeatable Read</th><th>Phantom Read</th><th>Performance</th></tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>READ UNCOMMITTED</strong></td><td>✅ Possible</td><td>✅ Possible</td><td>✅ Possible</td><td>⚡ Fastest</td></tr>\n    <tr><td><strong>READ COMMITTED</strong></td><td>❌ Prevented</td><td>✅ Possible</td><td>✅ Possible</td><td>🟢 Default (PostgreSQL, Oracle)</td></tr>\n    <tr><td><strong>REPEATABLE READ</strong></td><td>❌ Prevented</td><td>❌ Prevented</td><td>✅ Possible*</td><td>🟡 Default (MySQL InnoDB)</td></tr>\n    <tr><td><strong>SERIALIZABLE</strong></td><td>❌ Prevented</td><td>❌ Prevented</td><td>❌ Prevented</td><td>🐢 Slowest</td></tr>\n  </tbody>\n</table>\n\n<p>*MySQL InnoDB prevents phantom reads at REPEATABLE READ using Next-Key Locking.</p>\n\n<h4>Anomalies Explained</h4>\n<ul>\n  <li><strong>Dirty Read</strong> — Reading uncommitted data from another transaction that may roll back.</li>\n  <li><strong>Non-Repeatable Read</strong> — Same query returns different results because another transaction committed an update between reads.</li>\n  <li><strong>Phantom Read</strong> — Same query returns different rows because another transaction inserted/deleted rows between reads.</li>\n</ul>\n\n<pre ngnonbindable=\"\"><code>-- Set isolation level (PostgreSQL)\nSET TRANSACTION ISOLATION LEVEL READ COMMITTED;\n\n-- MySQL\nSET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;\n\n-- Spring Boot @Transactional\n@Transactional(isolation = Isolation.READ_COMMITTED)\npublic void transferMoney(Long fromId, Long toId, BigDecimal amount) {\n    accountRepository.withdraw(fromId, amount);\n    accountRepository.deposit(toId, amount);\n}</code></pre>\n\n<p><strong>Interview Tip:</strong> Most production apps use READ COMMITTED. Use SERIALIZABLE only when absolute consistency is required (e.g., financial transfers). Use optimistic locking (version column) instead of SERIALIZABLE for better throughput.</p>",
      "difficulty": "Advanced",
      "tags": [
        "SQL",
        "Transactions",
        "Isolation Levels"
      ],
      "keyPoints": [
        "Dirty Read — Reading uncommitted data from another transaction that may roll back.",
        "Non-Repeatable Read — Same query returns different results because another transaction committed an update between reads.",
        "Phantom Read — Same query returns different rows because another transaction inserted/deleted rows between reads."
      ]
    },
    {
      "question": "What is the difference between WHERE and HAVING?",
      "answer": "<p><strong>WHERE</strong> filters rows before grouping. <strong>HAVING</strong> filters groups after aggregation.</p>\n\n<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Aspect</th><th>WHERE</th><th>HAVING</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>When applied</td><td>Before GROUP BY</td><td>After GROUP BY</td></tr>\n    <tr><td>Can use aggregates</td><td>No (COUNT, SUM not available)</td><td>Yes</td></tr>\n    <tr><td>Filters</td><td>Individual rows</td><td>Groups/aggregates</td></tr>\n    <tr><td>Performance</td><td>Faster (fewer rows processed)</td><td>Slower (processes grouped data)</td></tr>\n  </tbody>\n</table>\n\n<pre ngnonbindable=\"\"><code>-- WHERE: Filter before grouping\nSELECT department, COUNT(*) AS emp_count\nFROM employees\nWHERE salary &gt; 50000   -- Filter individual rows first\nGROUP BY department;\n\n-- HAVING: Filter after grouping\nSELECT department, COUNT(*) AS emp_count\nFROM employees\nGROUP BY department\nHAVING COUNT(*) &gt; 5;    -- Filter groups\n\n-- Both together (most common pattern)\nSELECT department, AVG(salary) AS avg_salary\nFROM employees\nWHERE status = 'ACTIVE'  -- Only active employees\nGROUP BY department\nHAVING AVG(salary) &gt; 60000;  -- Only departments with high avg salary</code></pre>\n\n<p><strong>SQL Execution Order:</strong> FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</p>\n\n<p><strong>Common Mistake:</strong> Using HAVING for non-aggregate conditions that should be in WHERE. This is slower because HAVING processes more rows.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SQL",
        "WHERE",
        "HAVING",
        "Aggregation"
      ],
      "keyPoints": [
        "WHERE filters rows before grouping.",
        "HAVING filters groups after aggregation."
      ]
    },
    {
      "question": "What is the difference between UNION and UNION ALL?",
      "answer": "<p>Both combine result sets of two or more SELECT statements, but handle duplicates differently.</p>\n\n<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Aspect</th><th>UNION</th><th>UNION ALL</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Duplicates</td><td>Removes duplicates</td><td>Keeps all rows</td></tr>\n    <tr><td>Performance</td><td>Slower (sorts to deduplicate)</td><td>Faster (no dedup step)</td></tr>\n    <tr><td>Use When</td><td>Need unique rows</td><td>Duplicates don't matter or are impossible</td></tr>\n  </tbody>\n</table>\n\n<pre ngnonbindable=\"\"><code>-- UNION: Unique customers from both tables\nSELECT name FROM customers_us\nUNION\nSELECT name FROM customers_eu;\n\n-- UNION ALL: All customers including duplicates\nSELECT name FROM customers_us\nUNION ALL\nSELECT name FROM customers_eu;\n\n-- Common pattern: Combine with a source column\nSELECT id, name, 'US' AS region FROM customers_us\nUNION ALL\nSELECT id, name, 'EU' AS region FROM customers_eu;</code></pre>\n\n<p><strong>Rules:</strong> Both SELECT statements must have the same number of columns, compatible data types, and same column order. Column names come from the first SELECT.</p>\n\n<p><strong>Interview Tip:</strong> Always prefer UNION ALL unless you specifically need deduplication. UNION's implicit DISTINCT can cause unexpected performance issues on large datasets.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SQL",
        "UNION",
        "Set Operations"
      ],
      "keyPoints": [
        "Both combine result sets of two or more SELECT statements, but handle duplicates differently.",
        "Column names come from the first SELECT."
      ]
    },
    {
      "question": "What are Common Table Expressions (CTEs) and when to use them?",
      "answer": "<p>A <strong>CTE (Common Table Expression)</strong> is a named temporary result set defined within a SELECT, INSERT, UPDATE, or DELETE statement. It improves readability and enables recursive queries.</p>\n\n<h4>Simple CTE</h4>\n<pre ngnonbindable=\"\"><code>-- Find departments with above-average salary\nWITH dept_avg AS (\n    SELECT department, AVG(salary) AS avg_salary\n    FROM employees\n    GROUP BY department\n)\nSELECT e.name, e.salary, d.avg_salary\nFROM employees e\nJOIN dept_avg d ON e.department = d.department\nWHERE e.salary &gt; d.avg_salary;</code></pre>\n\n<h4>Recursive CTE (Hierarchy)</h4>\n<pre ngnonbindable=\"\"><code>-- Employee hierarchy with manager chain\nWITH RECURSIVE org_chart AS (\n    -- Anchor: Top-level managers\n    SELECT id, name, manager_id, 1 AS level, CAST(name AS VARCHAR(1000)) AS path\n    FROM employees\n    WHERE manager_id IS NULL\n\n    UNION ALL\n\n    -- Recursive: Find subordinates\n    SELECT e.id, e.name, e.manager_id, oc.level + 1,\n           CONCAT(oc.path, ' → ', e.name)\n    FROM employees e\n    JOIN org_chart oc ON e.manager_id = oc.id\n)\nSELECT * FROM org_chart ORDER BY level, path;</code></pre>\n\n<h4>CTE vs Subquery vs Temp Table</h4>\n<table class=\"table table-striped table-bordered\">\n  <thead><tr><th>Aspect</th><th>CTE</th><th>Subquery</th><th>Temp Table</th></tr></thead>\n  <tbody>\n    <tr><td>Readability</td><td>✅ Excellent</td><td>❌ Poor (nested)</td><td>🟡 Moderate</td></tr>\n    <tr><td>Reusability</td><td>Within same query</td><td>No</td><td>Across queries</td></tr>\n    <tr><td>Performance</td><td>Same as subquery*</td><td>Same as CTE*</td><td>Indexed, persistent</td></tr>\n    <tr><td>Scope</td><td>Single statement</td><td>Single expression</td><td>Session</td></tr>\n  </tbody>\n</table>\n<p>*Most optimizers inline CTEs. PostgreSQL materializes them with MATERIALIZED hint.</p>\n\n<p><strong>Interview Tip:</strong> Always prefer CTEs over nested subqueries for readability. Use recursive CTEs for tree/hierarchy traversal (org charts, category trees, BOM explosions).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "CTE",
        "Recursive Queries"
      ],
      "keyPoints": [
        "A CTE (Common Table Expression) is a named temporary result set defined within a SELECT, INSERT, UPDATE, or DELETE statement.",
        "It improves readability and enables recursive queries."
      ]
    },
    {
      "question": "How do you use EXPLAIN to analyze and optimize queries?",
      "answer": "<p><strong>EXPLAIN</strong> shows the query execution plan — how the database retrieves data. <strong>EXPLAIN ANALYZE</strong> actually runs the query and shows real timing.</p>\n\n<h4>Key Things to Look For</h4>\n<ul>\n  <li><strong>Seq Scan</strong> — Full table scan (bad for large tables, might need an index)</li>\n  <li><strong>Index Scan</strong> — Using an index (good)</li>\n  <li><strong>Index Only Scan</strong> — Covering index, no table lookup (best)</li>\n  <li><strong>Nested Loop</strong> — For each row in outer table, scan inner table (OK for small datasets)</li>\n  <li><strong>Hash Join</strong> — Build hash table on smaller table, probe with larger (good for large joins)</li>\n  <li><strong>Merge Join</strong> — Both inputs sorted, merge them (good for already-sorted data)</li>\n  <li><strong>Sort</strong> — Explicit sort (consider an index with the right ORDER BY)</li>\n  <li><strong>Filter</strong> — Rows removed after scan (push filters into WHERE earlier)</li>\n</ul>\n\n<pre ngnonbindable=\"\"><code>-- PostgreSQL\nEXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 123;\n\n-- MySQL\nEXPLAIN SELECT * FROM orders WHERE customer_id = 123;\n\n-- Common output analysis:\n-- \"Seq Scan on orders\" → Missing index on customer_id\n-- \"Index Scan using idx_customer_id\" → Index is being used ✅\n-- \"Filter: (total &gt; 1000)\" → Consider composite index on (customer_id, total)</code></pre>\n\n<h4>Optimization Checklist</h4>\n<ol>\n  <li>Add indexes on WHERE/JOIN/GROUP BY/ORDER BY columns</li>\n  <li>Use covering indexes (INCLUDE clause) to avoid table lookups</li>\n  <li>Limit SELECT * — only fetch columns you need</li>\n  <li>Replace subqueries with JOINs or CTEs where possible</li>\n  <li>Use LIMIT for pagination instead of fetching all rows</li>\n  <li>Check for implicit type conversions that prevent index usage</li>\n  <li>Run ANALYZE/VACUUM to keep statistics up to date</li>\n</ol>\n\n<p><strong>Gotcha:</strong> Using functions on indexed columns prevents index usage. <code>WHERE LOWER(email) = 'alice'</code> won't use the index on email. Use a functional index or store normalized values.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "EXPLAIN",
        "Query Optimization",
        "Performance"
      ],
      "keyPoints": [
        "Seq Scan — Full table scan (bad for large tables, might need an index)",
        "Index Scan — Using an index (good)",
        "Index Only Scan — Covering index, no table lookup (best)"
      ]
    },
    {
      "question": "What is the difference between DELETE, TRUNCATE, and DROP?",
      "answer": "<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Aspect</th><th>DELETE</th><th>TRUNCATE</th><th>DROP</th></tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>What it removes</strong></td><td>Specific rows (WHERE)</td><td>All rows</td><td>Table + data + structure</td></tr>\n    <tr><td><strong>WHERE clause</strong></td><td>✅ Supported</td><td>❌ Not supported</td><td>N/A</td></tr>\n    <tr><td><strong>Transaction safe</strong></td><td>✅ Can rollback</td><td>🟡 DB-dependent*</td><td>❌ Cannot rollback</td></tr>\n    <tr><td><strong>Triggers fire</strong></td><td>✅ Yes</td><td>❌ No</td><td>N/A</td></tr>\n    <tr><td><strong>Auto-increment reset</strong></td><td>No</td><td>Yes</td><td>N/A</td></tr>\n    <tr><td><strong>Speed</strong></td><td>Slow (row by row)</td><td>Fast (deallocates pages)</td><td>Fast</td></tr>\n    <tr><td><strong>Foreign keys</strong></td><td>Can delete referenced rows</td><td>Must drop FK first</td><td>Cascades</td></tr>\n  </tbody>\n</table>\n\n<p>*PostgreSQL: TRUNCATE is transactional. MySQL InnoDB: TRUNCATE is NOT transactional (implicit commit).</p>\n\n<pre ngnonbindable=\"\"><code>-- DELETE specific rows (slow, logged, rollbackable)\nDELETE FROM orders WHERE status = 'CANCELLED';\n\n-- TRUNCATE all rows (fast, minimal logging)\nTRUNCATE TABLE orders;\n\n-- TRUNCATE with CASCADE (also truncates referencing tables)\nTRUNCATE TABLE customers CASCADE;\n\n-- DROP entire table (structure + data)\nDROP TABLE orders;</code></pre>\n\n<p><strong>Interview Tip:</strong> Use DELETE for targeted removal with WHERE. Use TRUNCATE for wiping all data (e.g., staging tables, test data). Use DROP only when the table itself is no longer needed.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SQL",
        "DELETE",
        "TRUNCATE",
        "DROP"
      ],
      "keyPoints": [
        "MySQL InnoDB: TRUNCATE is NOT transactional (implicit commit).",
        "Use TRUNCATE for wiping all data (e."
      ]
    },
    {
      "question": "Explain subqueries vs correlated subqueries with examples",
      "answer": "<p>A <strong>subquery</strong> runs independently. A <strong>correlated subquery</strong> depends on the outer query and runs once per row.</p>\n\n<h4>Simple Subquery (Independent)</h4>\n<pre ngnonbindable=\"\"><code>-- Find employees earning above average salary\n-- Inner query runs ONCE, result is reused\nSELECT name, salary\nFROM employees\nWHERE salary &gt; (SELECT AVG(salary) FROM employees);</code></pre>\n\n<h4>Correlated Subquery (Dependent)</h4>\n<pre ngnonbindable=\"\"><code>-- Find employees earning above their department's average\n-- Inner query runs for EACH row in outer query\nSELECT name, salary, department\nFROM employees e\nWHERE salary &gt; (\n    SELECT AVG(salary)\n    FROM employees\n    WHERE department = e.department  -- Correlates with outer row\n);</code></pre>\n\n<h4>Performance Comparison</h4>\n<table class=\"table table-striped table-bordered\">\n  <thead><tr><th>Aspect</th><th>Simple Subquery</th><th>Correlated Subquery</th></tr></thead>\n  <tbody>\n    <tr><td>Execution</td><td>Once</td><td>Once per outer row</td></tr>\n    <tr><td>Performance</td><td>Generally fast</td><td>Can be slow on large tables</td></tr>\n    <tr><td>Optimization</td><td>Auto by optimizer</td><td>Rewrite as JOIN or window function</td></tr>\n  </tbody>\n</table>\n\n<h4>Rewrite Correlated Subquery as Window Function (Better Performance)</h4>\n<pre ngnonbindable=\"\"><code>-- SAME result, MUCH faster on large datasets\nSELECT name, salary, department\nFROM (\n    SELECT name, salary, department,\n           AVG(salary) OVER (PARTITION BY department) AS dept_avg\n    FROM employees\n) sub\nWHERE salary &gt; dept_avg;</code></pre>\n\n<p><strong>Interview Tip:</strong> Correlated subqueries are a code smell. Always consider rewriting as a JOIN or window function for better performance.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "Subqueries",
        "Correlated Subquery",
        "Performance"
      ],
      "keyPoints": [
        "A correlated subquery depends on the outer query and runs once per row.",
        "Always consider rewriting as a JOIN or window function for better performance."
      ]
    },
    {
      "question": "What are SQL window functions and how do they differ from GROUP BY?",
      "answer": "<p><strong>Window functions</strong> perform calculations across rows related to the current row, <strong>without collapsing rows</strong> like GROUP BY does.</p>\n\n<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Aspect</th><th>GROUP BY</th><th>Window Functions</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Output rows</td><td>One per group</td><td>Same as input rows</td></tr>\n    <tr><td>Access to individual rows</td><td>No (only aggregates)</td><td>Yes (row + aggregate)</td></tr>\n    <tr><td>Use case</td><td>Aggregation reports</td><td>Ranking, running totals, comparisons</td></tr>\n  </tbody>\n</table>\n\n<pre ngnonbindable=\"\"><code>-- GROUP BY: One row per department\nSELECT department, AVG(salary) FROM employees GROUP BY department;\n\n-- Window Function: ALL rows with department average\nSELECT name, department, salary,\n       AVG(salary) OVER (PARTITION BY department) AS dept_avg\nFROM employees;\n\n-- Common window functions\nSELECT name, department, salary,\n    ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS row_num,\n    RANK()       OVER (PARTITION BY dept ORDER BY salary DESC) AS rank_val,\n    DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dense_rank_val,\n    LAG(salary, 1) OVER (PARTITION BY dept ORDER BY salary) AS prev_salary,\n    LEAD(salary, 1) OVER (PARTITION BY dept ORDER BY salary) AS next_salary,\n    SUM(salary) OVER (PARTITION BY dept ORDER BY hire_date\n                      ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\nFROM employees;</code></pre>\n\n<h4>ROW_NUMBER vs RANK vs DENSE_RANK</h4>\n<table class=\"table table-striped table-bordered\">\n  <thead><tr><th>Salary</th><th>ROW_NUMBER</th><th>RANK</th><th>DENSE_RANK</th></tr></thead>\n  <tbody>\n    <tr><td>100K</td><td>1</td><td>1</td><td>1</td></tr>\n    <tr><td>90K</td><td>2</td><td>2</td><td>2</td></tr>\n    <tr><td>90K</td><td>3</td><td>2</td><td>2</td></tr>\n    <tr><td>80K</td><td>4</td><td>4</td><td>3</td></tr>\n  </tbody>\n</table>\n\n<p><strong>Interview Tip:</strong> Window functions are one of the most-tested SQL topics. Practice ranking, running totals, and year-over-year comparisons.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "Window Functions",
        "Analytics"
      ],
      "keyPoints": [
        "Window functions perform calculations across rows related to the current row, without collapsing rows like GROUP BY does.",
        "Practice ranking, running totals, and year-over-year comparisons."
      ]
    },
    {
      "question": "How do you handle deadlocks and what causes them?",
      "answer": "<p>A <strong>deadlock</strong> occurs when two transactions hold locks on resources that the other transaction needs, creating a circular dependency.</p>\n\n<h4>Classic Deadlock Scenario</h4>\n<pre ngnonbindable=\"\"><code>-- Transaction A                -- Transaction B\nBEGIN;                          BEGIN;\nUPDATE accounts                 UPDATE accounts\n  SET balance = balance - 100    SET balance = balance - 50\n  WHERE id = 1;                  WHERE id = 2;\n                                -- A holds lock on id=1, needs id=2\nUPDATE accounts                 UPDATE accounts\n  SET balance = balance + 100    SET balance = balance + 50\n  WHERE id = 2;  -- BLOCKED!      WHERE id = 1;  -- BLOCKED!\n                                -- B holds lock on id=2, needs id=1\n-- DEADLOCK! Database detects and kills one transaction</code></pre>\n\n<h4>Prevention Strategies</h4>\n<ul>\n  <li><strong>Consistent lock ordering</strong> — Always lock resources in the same order (e.g., always lock lower ID first)</li>\n  <li><strong>Keep transactions short</strong> — Shorter transactions hold locks for less time</li>\n  <li><strong>Use optimistic locking</strong> — Version columns instead of row locks</li>\n  <li><strong>Set lock timeouts</strong> — <code>SET LOCK_TIMEOUT 5000</code> (PostgreSQL)</li>\n  <li><strong>Reduce isolation level</strong> — READ COMMITTED has fewer locks than SERIALIZABLE</li>\n  <li><strong>Access least rows first</strong> — Apply filters before locking</li>\n</ul>\n\n<h4>Spring Boot Retry on Deadlock</h4>\n<pre ngnonbindable=\"\"><code>@Retryable(value = {DeadlockLoserDataAccessException.class},\n           maxAttempts = 3,\n           backoff = @Backoff(delay = 100, multiplier = 2))\n@Transactional\npublic void transferMoney(Long fromId, Long toId, BigDecimal amount) {\n    // Always lock in consistent order (lower ID first)\n    Long first = Math.min(fromId, toId);\n    Long second = Math.max(fromId, toId);\n    \n    Account acc1 = accountRepository.findById(first).orElseThrow();\n    Account acc2 = accountRepository.findById(second).orElseThrow();\n    \n    acc1.setBalance(acc1.getBalance().subtract(amount));\n    acc2.setBalance(acc2.getBalance().add(amount));\n}</code></pre>\n\n<p><strong>MySQL:</strong> <code>SHOW ENGINE INNODB STATUS</code> shows last deadlock. <strong>PostgreSQL:</strong> Check <code>pg_stat_activity</code> for blocked queries.</p>",
      "difficulty": "Advanced",
      "tags": [
        "SQL",
        "Deadlocks",
        "Transactions",
        "Spring Boot"
      ],
      "keyPoints": [
        "Consistent lock ordering — Always lock resources in the same order (e.g., always lock lower ID first)",
        "Keep transactions short — Shorter transactions hold locks for less time",
        "Use optimistic locking — Version columns instead of row locks"
      ]
    },
    {
      "question": "What are the different types of SQL keys (Primary, Foreign, Unique, Composite)?",
      "answer": "<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Key Type</th><th>Purpose</th><th>NULLs Allowed</th><th>Duplicates</th><th>Example</th></tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Primary Key</strong></td><td>Uniquely identify each row</td><td>No</td><td>No</td><td><code>id INT PRIMARY KEY</code></td></tr>\n    <tr><td><strong>Foreign Key</strong></td><td>Reference another table's PK</td><td>Yes*</td><td>Yes</td><td><code>FOREIGN KEY (user_id) REFERENCES users(id)</code></td></tr>\n    <tr><td><strong>Unique Key</strong></td><td>Ensure column values are distinct</td><td>Yes (1 NULL in MySQL, many in PostgreSQL)</td><td>No</td><td><code>email VARCHAR(255) UNIQUE</code></td></tr>\n    <tr><td><strong>Composite Key</strong></td><td>PK/Unique across multiple columns</td><td>No (if PK)</td><td>No</td><td><code>PRIMARY KEY (order_id, product_id)</code></td></tr>\n    <tr><td><strong>Surrogate Key</strong></td><td>Artificial key (auto-increment/UUID)</td><td>No</td><td>No</td><td><code>id BIGINT AUTO_INCREMENT</code></td></tr>\n    <tr><td><strong>Natural Key</strong></td><td>Business-meaningful key</td><td>No</td><td>No</td><td><code>isbn VARCHAR(13) PRIMARY KEY</code></td></tr>\n  </tbody>\n</table>\n\n<pre ngnonbindable=\"\"><code>-- Composite primary key (junction table for many-to-many)\nCREATE TABLE order_items (\n    order_id   INT NOT NULL,\n    product_id INT NOT NULL,\n    quantity   INT NOT NULL DEFAULT 1,\n    PRIMARY KEY (order_id, product_id),  -- Composite key\n    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,\n    FOREIGN KEY (product_id) REFERENCES products(id)\n);\n\n-- Surrogate vs Natural key\n-- Surrogate: Auto-generated, never changes\nCREATE TABLE users (\n    id    BIGSERIAL PRIMARY KEY,     -- Surrogate key\n    email VARCHAR(255) UNIQUE NOT NULL -- Natural key candidate\n);</code></pre>\n\n<p><strong>Foreign Key NULLs:</strong> A nullable FK means the relationship is optional. E.g., <code>manager_id INT REFERENCES employees(id)</code> — NULL means no manager (CEO).</p>\n\n<p><strong>Interview Tip:</strong> Prefer surrogate keys (auto-increment/UUID) for primary keys. Natural keys change, causing cascading updates across all foreign key references.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SQL",
        "Keys",
        "Constraints",
        "Schema Design"
      ],
      "keyPoints": [
        ", manager_id INT REFERENCES employees(id) — NULL means no manager (CEO).",
        "Interview Tip: Prefer surrogate keys (auto-increment/UUID) for primary keys."
      ]
    },
    {
      "question": "How do you implement pagination in SQL and what are the pitfalls?",
      "answer": "<p>Pagination retrieves data in chunks instead of loading entire result sets. Two main approaches: <strong>OFFSET</strong> and <strong>Keyset (cursor)</strong>.</p>\n\n<h4>OFFSET-based Pagination (Simple but Slow)</h4>\n<pre ngnonbindable=\"\"><code>-- Page 1 (rows 1-20)\nSELECT * FROM orders ORDER BY id LIMIT 20 OFFSET 0;\n\n-- Page 2 (rows 21-40)\nSELECT * FROM orders ORDER BY id LIMIT 20 OFFSET 20;\n\n-- Spring Data JPA\nPage&lt;Order&gt; findAll(Pageable ofSize(20).withPage(pageNum));</code></pre>\n\n<h4>Keyset Pagination (Fast, No OFFSET)</h4>\n<pre ngnonbindable=\"\"><code>-- First page\nSELECT * FROM orders ORDER BY id LIMIT 20;\n\n-- Next page (using last seen ID)\nSELECT * FROM orders WHERE id &gt; :last_seen_id ORDER BY id LIMIT 20;\n\n-- With composite sort (created_at + id for uniqueness)\nSELECT * FROM orders\nWHERE (created_at, id) &gt; (:last_created_at, :last_id)\nORDER BY created_at, id\nLIMIT 20;</code></pre>\n\n<h4>Performance Comparison</h4>\n<table class=\"table table-striped table-bordered\">\n  <thead><tr><th>Aspect</th><th>OFFSET Pagination</th><th>Keyset Pagination</th></tr></thead>\n  <tbody>\n    <tr><td>Page 1 speed</td><td>Fast</td><td>Fast</td></tr>\n    <tr><td>Page 10000 speed</td><td>🐢 Very slow (scips 200K rows)</td><td>⚡ Fast (indexed lookup)</td></tr>\n    <tr><td>Total count needed</td><td>Yes (for \"Page X of Y\")</td><td>No</td></tr>\n    <tr><td>Handles inserts</td><td>🟡 May skip/duplicate rows</td><td>✅ Consistent</td></tr>\n    <tr><td>Random page access</td><td>✅ Jump to any page</td><td>❌ Sequential only</td></tr>\n  </tbody>\n</table>\n\n<p><strong>OFFSET Problem:</strong> <code>OFFSET 100000</code> means the database still reads and discards 100,000 rows. This gets exponentially slower.</p>\n\n<p><strong>Interview Tip:</strong> Use keyset pagination for infinite scroll / feed-style UIs. Use OFFSET only when you need \"Page X of Y\" navigation with small page ranges.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "Pagination",
        "Performance",
        "Spring Data"
      ],
      "keyPoints": [
        "Pagination retrieves data in chunks instead of loading entire result sets.",
        "Two main approaches: OFFSET and Keyset (cursor) ."
      ]
    },
    {
      "question": "What is the difference between clustered and non-clustered indexes?",
      "answer": "<table class=\"table table-striped table-bordered\">\n  <thead>\n    <tr><th>Aspect</th><th>Clustered Index</th><th>Non-Clustered Index</th></tr>\n  </thead>\n  <tbody>\n    <tr><td><strong>Storage</strong></td><td>Table data IS the index (leaf nodes = data pages)</td><td>Index + pointer to data row</td></tr>\n    <tr><td><strong>Per table</strong></td><td>Only ONE (data can only be sorted one way)</td><td>Multiple (up to 999 in SQL Server)</td></tr>\n    <tr><td><strong>Speed</strong></td><td>Faster for range queries (data is sorted)</td><td>Faster for point lookups</td></tr>\n    <tr><td><strong>Lookup</strong></td><td>Direct (no extra step)</td><td>Indirect (bookmark/key lookup)</td></tr>\n    <tr><td><strong>Example</strong></td><td>PRIMARY KEY in InnoDB (MySQL)</td><td>CREATE INDEX idx_email ON users(email)</td></tr>\n  </tbody>\n</table>\n\n<pre ngnonbindable=\"\"><code>-- MySQL InnoDB: PRIMARY KEY is the clustered index\n-- Data is physically ordered by id\nCREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,  -- Clustered\n    email VARCHAR(255),\n    name VARCHAR(100),\n    INDEX idx_email (email)  -- Non-clustered (secondary)\n);\n\n-- When you query:\n-- SELECT * FROM users WHERE id = 5;\n--   → Clustered: Direct lookup (1 I/O)\n\n-- SELECT * FROM users WHERE email = 'alice@example.com';\n--   → Non-clustered: Find in index → get PK → lookup in clustered (2 I/Os)\n\n-- Covering index avoids the second lookup:\nCREATE INDEX idx_email_name ON users(email, name);\n-- Now SELECT name FROM users WHERE email = 'alice@example.com';\n-- Only reads the index, no table lookup!</code></pre>\n\n<p><strong>PostgreSQL:</strong> Uses heap tables (no clustered index by default). <code>CLUSTER</code> command reorders data once but doesn't maintain order on inserts.</p>\n\n<p><strong>SQL Server:</strong> You explicitly choose clustered vs non-clustered. Default PK is clustered.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "Indexes",
        "Clustered",
        "Performance"
      ],
      "keyPoints": [
        "com'; -- Only reads the index, no table lookup!",
        "PostgreSQL: Uses heap tables (no clustered index by default)."
      ]
    },
    {
      "question": "How do you perform UPSERT (INSERT or UPDATE) in different databases?",
      "answer": "<p>UPSERT = insert a row, or update it if it already exists. Each database has different syntax.</p>\n\n<pre ngnonbindable=\"\"><code>-- MySQL: INSERT ... ON DUPLICATE KEY UPDATE\nINSERT INTO users (id, name, email)\nVALUES (1, 'Alice', 'alice@example.com')\nON DUPLICATE KEY UPDATE\n    name = VALUES(name),\n    email = VALUES(email);\n\n-- PostgreSQL: INSERT ... ON CONFLICT (upsert)\nINSERT INTO users (id, name, email)\nVALUES (1, 'Alice', 'alice@example.com')\nON CONFLICT (id) DO UPDATE SET\n    name = EXCLUDED.name,\n    email = EXCLUDED.email;\n\n-- SQLite: INSERT OR REPLACE\nINSERT OR REPLACE INTO users (id, name, email)\nVALUES (1, 'Alice', 'alice@example.com');\n\n-- SQL Server: MERGE\nMERGE INTO users AS target\nUSING (VALUES (1, 'Alice', 'alice@example.com')) AS source (id, name, email)\nON target.id = source.id\nWHEN MATCHED THEN UPDATE SET name = source.name, email = source.email\nWHEN NOT MATCHED THEN INSERT (id, name, email) VALUES (source.id, source.name, source.email);\n\n-- Oracle: MERGE\nMERGE INTO users target\nUSING (SELECT 1 AS id, 'Alice' AS name, 'alice@example.com' AS email FROM dual) source\nON (target.id = source.id)\nWHEN MATCHED THEN UPDATE SET target.name = source.name, target.email = source.email\nWHEN NOT MATCHED THEN INSERT (id, name, email) VALUES (source.id, source.name, source.email);</code></pre>\n\n<h4>Spring Data JPA (Database-Agnostic)</h4>\n<pre ngnonbindable=\"\"><code>// Spring Data JPA uses merge() for upsert\n@Repository\npublic interface UserRepository extends JpaRepository&lt;User, Long&gt; {\n    @Query(\"SELECT u FROM User u WHERE u.email = :email\")\n    Optional&lt;User&gt; findByEmail(@Param(\"email\") String email);\n}\n\n// Usage:\nUser user = userRepository.findByEmail(email)\n    .map(existing -&gt; existing.updateName(name))  // Update\n    .orElse(new User(name, email));               // Insert\nuserRepository.save(user);</code></pre>\n\n<p><strong>Interview Tip:</strong> PostgreSQL's <code>ON CONFLICT</code> is the cleanest syntax. MySQL's <code>ON DUPLICATE KEY UPDATE</code> is most commonly asked. Know the difference between <code>VALUES(col)</code> (MySQL) and <code>EXCLUDED.col</code> (PostgreSQL) for referencing the new values.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "SQL",
        "UPSERT",
        "MySQL",
        "PostgreSQL",
        "Spring Data"
      ],
      "keyPoints": [
        "UPSERT = insert a row, or update it if it already exists.",
        "Each database has different syntax."
      ]
    },
    {
      "question": "How do you prevent SQL injection and what are prepared statements?",
      "answer": "<p><strong>SQL Injection</strong> occurs when untrusted input is concatenated directly into SQL queries, allowing attackers to execute arbitrary SQL.</p>\n\n<h4>Vulnerable Code (NEVER do this)</h4>\n<pre ngnonbindable=\"\"><code>// Java — VULNERABLE\nString sql = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\n// Input: ' OR '1'='1  →  SELECT * FROM users WHERE email = '' OR '1'='1'\n\n// Python — VULNERABLE\ncursor.execute(f\"SELECT * FROM users WHERE email = '{email}'\")</code></pre>\n\n<h4>Safe: Parameterized Queries (Prepared Statements)</h4>\n<pre ngnonbindable=\"\"><code>// Java — JDBC\nPreparedStatement stmt = conn.prepareStatement(\n    \"SELECT * FROM users WHERE email = ? AND status = ?\");\nstmt.setString(1, email);   // Automatically escaped\nstmt.setString(2, \"ACTIVE\");\nResultSet rs = stmt.executeQuery();\n\n// Spring Data JPA — Safe by design\n@Query(\"SELECT u FROM User u WHERE u.email = :email\")\nOptional&lt;User&gt; findByEmail(@Param(\"email\") String email);\n\n// Python — psycopg2\ncursor.execute(\"SELECT * FROM users WHERE email = %s\", (email,))\n\n// Python — SQLAlchemy ORM\nuser = session.query(User).filter(User.email == email).first()</code></pre>\n\n<h4>Other Prevention Methods</h4>\n<ul>\n  <li><strong>ORM/JPA</strong> — Uses prepared statements automatically</li>\n  <li><strong>Input Validation</strong> — Whitelist allowed characters (regex for email, numeric IDs)</li>\n  <li><strong>Least Privilege</strong> — Application DB user should NOT have DROP, ALTER, or GRANT permissions</li>\n  <li><strong>Stored Procedures</strong> — Parameterized by default, but don't dynamically build SQL inside them</li>\n  <li><strong>WAF</strong> — Web Application Firewall (Cloudflare, AWS WAF) as defense-in-depth</li>\n</ul>\n\n<p><strong>Interview Tip:</strong> The #1 answer is always <strong>parameterized queries/prepared statements</strong>. ORMs like Hibernate use them by default. The danger is when developers use string concatenation for dynamic queries — always use named parameters instead.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SQL",
        "Security",
        "SQL Injection",
        "Prepared Statements"
      ],
      "keyPoints": [
        "ORM/JPA — Uses prepared statements automatically",
        "Input Validation — Whitelist allowed characters (regex for email, numeric IDs)",
        "Least Privilege — Application DB user should NOT have DROP, ALTER, or GRANT permissions"
      ]
    },
    {
      "question": "What is the N+1 query problem and how do you solve it in SQL and JPA?",
      "answer": "<p>The <strong>N+1 problem</strong> occurs when you execute 1 query to fetch N parent records, then N additional queries to fetch each parent's related records.</p>\n\n<h4>Example: N+1 Problem</h4>\n<pre ngnonbindable=\"\"><code>-- 1 query: Get all departments\nSELECT * FROM departments;  -- Returns 10 departments\n\n-- N queries: Get employees for EACH department\nSELECT * FROM employees WHERE dept_id = 1;   -- Query 1\nSELECT * FROM employees WHERE dept_id = 2;   -- Query 2\n...\nSELECT * FROM employees WHERE dept_id = 10;  -- Query 10\n-- Total: 1 + 10 = 11 queries!</code></pre>\n\n<h4>Solution 1: JOIN FETCH (SQL + JPA)</h4>\n<pre ngnonbindable=\"\"><code>-- SQL: Single query with JOIN\nSELECT d.*, e.*\nFROM departments d\nLEFT JOIN employees e ON d.id = e.dept_id;\n\n-- JPA: @EntityGraph or JOIN FETCH\n@Query(\"SELECT d FROM Department d JOIN FETCH d.employees\")\nList&lt;Department&gt; findAllWithEmployees();\n\n-- Spring Data JPA EntityGraph\n@EntityGraph(attributePaths = {\"employees\"})\nList&lt;Department&gt; findAll();</code></pre>\n\n<h4>Solution 2: Batch Fetching (JPA/Hibernate)</h4>\n<pre ngnonbindable=\"\"><code>-- In application.properties\nspring.jpa.properties.hibernate.default_batch_fetch_size=100\n\n-- Or per collection with @BatchSize\n@Entity\npublic class Department {\n    @OneToMany(mappedBy = \"department\")\n    @BatchSize(size = 50)  -- Fetch 50 departments' employees at once\n    private List&lt;Employee&gt; employees;\n}</code></pre>\n\n<h4>Solution 3: IN Clause (Batch)</h4>\n<pre ngnonbindable=\"\"><code>-- Get all department IDs first, then fetch all employees in one query\nSELECT * FROM employees WHERE dept_id IN (1, 2, 3, ..., 10);</code></pre>\n\n<table class=\"table table-striped table-bordered\">\n  <thead><tr><th>Approach</th><th>Queries</th><th>Best For</th></tr></thead>\n  <tbody>\n    <tr><td>JOIN FETCH</td><td>1</td><td>Need all related data immediately</td></tr>\n    <tr><td>@BatchSize</td><td>N/50 + 1</td><td>Lazy loading with fewer round trips</td></tr>\n    <tr><td>IN clause</td><td>2</td><td>Custom batch queries</td></tr>\n  </tbody>\n</table>\n\n<p><strong>How to detect N+1:</strong> Enable SQL logging with <code>spring.jpa.show-sql=true</code> and <code>spring.jpa.properties.hibernate.format_sql=true</code>. Watch for repeated similar queries.</p>",
      "difficulty": "Advanced",
      "tags": [
        "SQL",
        "N+1",
        "JPA",
        "Hibernate",
        "Performance"
      ],
      "keyPoints": [
        "The N+1 problem occurs when you execute 1 query to fetch N parent records, then N additional queries to fetch each parent's related records.",
        "SELECT * FROM employees WHERE dept_id = 10; -- Query 10 -- Total: 1 + 10 = 11 queries!"
      ]
    }
,
    {
          "question": "Why can adding an index sometimes make application performance worse?",
          "answer": "<p>Indexes speed up reads but have a real cost on writes, storage, and the optimizer. The trade-offs show up at scale.</p><h4>Reasons a new index hurts performance</h4><ol><li><strong>Write amplification.</strong> Every INSERT, UPDATE, DELETE must also update the index. On a write-heavy table, a new index can drop throughput by 10-30%.</li><li><strong>Storage and cache pressure.</strong> Indexes consume memory in the buffer pool. PostgreSQL shared_buffers is finite; an index that does not fit is evicted on every read, defeating its purpose. MySQL InnoDB has the same issue with the buffer pool.</li><li><strong>Hot index lock contention.</strong> Auto-incrementing PKs on a high-write table cause index leaf contention in some engines. The wrong secondary index makes it worse — every write locks multiple B-tree pages.</li><li><strong>Wrong index chosen by the optimizer.</strong> The optimizer may pick a new index for queries where a different plan was faster. <code>EXPLAIN ANALYZE</code> before and after.</li><li><strong>Index on a low-cardinality column.</strong> An index on <code>status</code> (5 values) gives almost no selectivity, but the optimizer may still use it. Either drop it, or use a partial / filtered index.</li><li><strong>Index on a function/expression</strong> without matching the query — wastes space and the planner ignores it.</li><li><strong>Index bloat after many updates.</strong> Postgres B-tree indexes bloat over time. A 5-year-old index may be 3x its actual size; rebuild it (<code>REINDEX</code>) before adding more.</li></ol><h4>How to decide</h4><ul><li>Profile read queries — does the new index actually get used? (<code>pg_stat_user_indexes.idx_scan = 0</code> = drop it)</li><li>Measure write impact on a staging clone with production-shaped load.</li><li>Prefer composite indexes over multiple single-column indexes; they cover more queries with one B-tree.</li><li>Use partial indexes (Postgres <code>WHERE status = 'active'</code>) when most queries hit a subset of rows.</li></ul><p>Rule of thumb: an unused index is pure cost. Audit indexes quarterly and drop the ones with <code>idx_scan = 0</code> for a sustained period.</p>",
          "difficulty": "Advanced",
          "tags": [
                "SQL",
                "Indexes",
                "Performance",
                "Swiggy"
          ],
          "keyPoints": [
                "Indexes cost write throughput, buffer pool memory, and storage — measure both sides before adding.",
                "Unused indexes (idx_scan = 0 over weeks) are pure cost; drop them quarterly.",
                "Prefer partial/composite indexes over many single-column ones; the wrong index can hurt the optimizer plan."
          ]
    },
    {
          "question": "How would you identify the root cause of a slow query in production?",
          "answer": "<p>Slow queries are usually plan regressions, missing/wrong indexes, or data-volume growth. Follow a structured path.</p><h4>Step 1: Get the exact query and its stats</h4><ul><li>Enable slow query log (Postgres <code>log_min_duration_statement = 500ms</code>; MySQL <code>slow_query_log</code>).</li><li>Capture the full query with bind variables — not just the skeleton.</li><li>Check execution count, total time, mean, std-dev. A query running 10x/sec at 200ms is 20% CPU; a 1/min query at 5s is barely a blip.</li></ul><h4>Step 2: Run EXPLAIN ANALYZE</h4><ul><li>Postgres: <code>EXPLAIN (ANALYZE, BUFFERS, VERBOSE) query</code>.</li><li>Look for: <strong>Seq Scan</strong> on large tables, <strong>Nested Loop</strong> joining millions of rows, <strong>rows=</strong> estimates wildly off from <code>actual rows=</code>.</li><li>Sort operations spilling to disk (<code>Sort Method: external merge</code> in Postgres) = <code>work_mem</code> too low.</li></ul><h4>Step 3: Check the data environment</h4><ul><li><strong>Statistics freshness:</strong> <code>ANALYZE</code> (Postgres) / <code>ANALYZE TABLE</code> (MySQL). Stale stats andrarr; bad plan choice.</li><li><strong>Table bloat:</strong> dead tuples from many updates; <code>VACUUM</code> not keeping up.</li><li><strong>Index health:</strong> indexes bloated or fragmented; rebuild if needed.</li><li><strong>Parameter sniffing (SQL Server):</strong> plan cached for one parameter value, terrible for another. Use <code>OPTIMIZE FOR UNKNOWN</code> or <code>OPTION (RECOMPILE)</code> if common.</li><li><strong>Lock waits:</strong> <code>pg_stat_activity.wait_event_type = 'Lock'</code> — the query is fine, it is just blocked.</li></ul><h4>Step 4: Compare against the historical plan</h4><ul><li><code>auto_explain</code> (Postgres) or <code>performance_schema</code> (MySQL) to see plan changes over time.</li><li>Did an <code>ANALYZE</code>, a deploy, or a partition move change the plan?</li></ul><h4>Step 5: Common fixes</h4><ul><li>Add or adjust the index that matches the filter + join columns.</li><li>Rewrite: <code>SELECT *</code> andrarr; specific columns; <code>OR</code> andrarr; <code>UNION</code>; correlated subquery andrarr; join.</li><li>Bound the result: pagination with keyset instead of <code>OFFSET</code> past 10K rows.</li><li>Cache: if the result changes slowly, cache for a few seconds (Redis) — orders of magnitude win for the same SQL.</li></ul><p>Before changing schema, prove the fix: capture EXPLAIN ANALYZE before, apply candidate fix, capture after. If the new plan is better under production-shaped load, ship it.</p>",
          "difficulty": "Advanced",
          "tags": [
                "SQL",
                "Performance",
                "Query Optimization",
                "Swiggy"
          ],
          "keyPoints": [
                "Enable slow query log + EXPLAIN ANALYZE (with BUFFERS) to find the bad plan.",
                "Stale statistics, table bloat, and index bloat cause plan regressions even when SQL is unchanged.",
                "Fix options: better index, rewrite query, keyset pagination, or cache the result for seconds."
          ]
    },
    {
          "question": "What strategies can be used to avoid database hot spots?",
          "answer": "<p>A hot spot is one row, one page, or one shard receiving so much traffic that the system bottlenecks there. Common forms: <em>hot row</em> (a single PK getting 90% of writes), <em>hot page</em> (B-tree leaves near a monotonic key), <em>hot shard</em> (poor sharding key).</p><h4>Strategies by layer</h4><h4>1. Hot row</h4><ul><li><strong>Counter table sharding:</strong> instead of one <code>counters(id=42, value=100)</code> row, use 10 rows <code>counter_42_0..9</code>, sum on read. Writes spread across rows.</li><li><strong>Rate-limit the writes:</strong> throttle to N writes/sec, batch the rest.</li><li><strong>Read-side cache:</strong> if the read pattern tolerates staleness, cache the counter in Redis with a write-through on a schedule.</li><li><strong>Append-only log:</strong> writes go to an immutable append log, reads fold the log periodically.</li></ul><h4>2. Hot page (B-tree contention)</h4><ul><li><strong>UUIDs instead of auto-increment:</strong> removes right-edge-of-tree hot page, but breaks range scans and inflates index size.</li><li><strong>Hash sharding of PK:</strong> Postgres 11+ — spread writes across multiple B-trees.</li><li><strong>Page-level batching:</strong> group small writes into larger transactions to reduce lock acquisitions.</li></ul><h4>3. Hot shard (poor sharding key)</h4><ul><li><strong>Re-shard:</strong> pick a sharding key with high cardinality and even distribution (e.g. <code>tenant_id</code> if tenants are large; <code>order_id</code> if not).</li><li><strong>Split hot shards:</strong> detect them (per-shard CPU, row count, request rate) and re-balance manually or with a consistent-hash rebalancer.</li><li><strong>Virtual shards:</strong> store many logical shards per physical node; re-distribute by moving logical shards, not by re-hashing all data.</li></ul><h4>4. Hot index / hot column</h4><ul><li>Covering index that includes the hot column — single index lookup instead of table + index.</li><li>Filtered/partial index on the hot subset of rows.</li></ul><h4>5. Application-level</h4><ul><li>Move state to a more appropriate store: counters andrarr; Redis with INCR; queues andrarr; Kafka; ephemeral session andrarr; in-memory cache.</li><li>De-normalize hot aggregates into a separate read model updated asynchronously.</li></ul><p>Identifying a hot spot: monitor per-shard/per-row write rate, per-page contention (<code>pg_stat_database</code>), and lock-wait time. Fix the worst one, re-measure, repeat.</p>",
          "difficulty": "Advanced",
          "tags": [
                "SQL",
                "Scalability",
                "Sharding",
                "Swiggy"
          ],
          "keyPoints": [
                "Counter table sharding spreads one hot row across N rows; sum on read.",
                "Hash sharding (Postgres 11+) eliminates auto-increment right-edge contention.",
                "Pick a sharding key with high cardinality + even distribution; re-balance via virtual shards, not full re-hash."
          ]
    },
    {
          "question": "How would you design pagination for a table containing billions of records?",
          "answer": "<p>Naive <code>OFFSET 1000000 LIMIT 20</code> becomes O(N) as the offset grows — the database still scans and discards 1M rows. Use keyset pagination instead.</p><h4>Pattern: Keyset (seek) pagination</h4><ul><li>Stable: works even with concurrent inserts.</li><li>O(limit) per page regardless of depth.</li><li>Requires a unique tiebreaker (id) when the sort key has duplicates.</li><li>Index on <code>(tenant_id, created_at DESC, id DESC)</code> makes it an index-only scan.</li></ul><h4>For deeply-paged data</h4><ul><li>Cursor-based with a snapshot of the dataset for stable pagination; or use a single composite cursor that is base64-encoded so it is opaque to clients.</li><li>Encode the sort key + value in the cursor: <code>?cursor=eyJ0IjoxNzAwMDAsImlkIjo5OTk5fQ==</code></li></ul><h4>For analytics / one-off exports</h4><ul><li>Use background jobs + streaming: <code>COPY (SELECT ... FROM events) TO '/tmp/events.tsv';</code> in chunks.</li><li>Or use server-side cursors at the app layer: <code>DECLARE c CURSOR FOR ...; FETCH 1000;</code> in a loop.</li></ul><h4>Approaches that do NOT scale</h4><ul><li><strong>OFFSET pagination:</strong> O(N) at depth; tablescans at very deep pages; problematic for live data.</li><li><strong>Page numbers (1, 2, 3...):</strong> forces OFFSET; same problems.</li><li><strong>Counting total rows:</strong> <code>SELECT COUNT(*)</code> on a billion rows is a full scan — never do it on a hot endpoint. Return <code>has_next: true/false</code> instead.</li></ul><h4>Index design</h4><ul><li>Sort key + tiebreaker: composite B-tree.</li><li>Include partition filter (tenant_id) first in the index — keyset then becomes a contiguous range scan.</li><li>Consider covering the columns returned to keep it an index-only scan.</li></ul><p>For very large datasets, also partition the table by tenant or time (Postgres declarative partitioning, MySQL range partitioning). Pagination within a partition is even faster.</p>",
          "difficulty": "Advanced",
          "tags": [
                "SQL",
                "Pagination",
                "Performance",
                "Swiggy"
          ],
          "keyPoints": [
                "Use keyset pagination (WHERE (created_at, id) less than cursor) — O(limit) regardless of depth.",
                "Never OFFSET on billion-row tables; never SELECT COUNT(*) on hot endpoints.",
                "Composite index on (partition, sort_key DESC, id DESC) — include returned columns for index-only scan."
          ]
    },
    {
          "question": "How would you migrate a large database schema with zero downtime?",
          "answer": "<p>Zero-downtime migrations = expand-and-contract pattern, executed in multiple deploys.</p><h4>Phase 1: Expand (additive, backward compatible)</h4><ol><li>Add the new column/table nullable, no default. Old code keeps working.</li><li>Backfill: write a batched job that fills the new column for existing rows, in chunks of e.g. 10K rows, throttled. Monitor replication lag if you have replicas.</li><li>Add a NOT NULL constraint on the new column in a separate step, after backfill completes. Use <code>CHECK</code> constraints, not blocking table rewrites.</li><li>Deploy the new code that writes to the new column (and reads from the old for safety).</li></ol><h4>Phase 2: Switch (cutover)</h4><ol><li>Make new code read from the new column as the source of truth.</li><li>Run both reads in parallel for a few hours/days, assert they return the same result, alert on divergence.</li><li>Once parity is proven, stop writing to the old column.</li></ol><h4>Phase 3: Contract (cleanup)</h4><ol><li>Remove the old column or table in a later deploy, when you are confident no old code path is using it.</li><li>Add the new column to the appropriate index strategy.</li></ol><h4>Specific patterns</h4><ul><li><strong>Renaming a column:</strong> add new column andrarr; dual-write andrarr; backfill andrarr; switch reads andrarr; drop old column. Cannot do in one <code>ALTER TABLE</code>.</li><li><strong>Changing a column type:</strong> add new column of the new type andrarr; dual-write andrarr; backfill with cast andrarr; switch reads andrarr; drop old. Some engines allow non-blocking type changes for compatible types (int andrarr; bigint, varchar length up).</li><li><strong>Adding a NOT NULL column with a default:</strong> in modern Postgres (<code>DEFAULT NULL</code> first, fill, then <code>SET NOT NULL</code>) or in MySQL 8 (<code>INSTANT</code> add column).</li><li><strong>Adding an index:</strong> use <code>CREATE INDEX CONCURRENTLY</code> (Postgres) or <code>ALTER TABLE ... ADD INDEX</code> with <code>ALGORITHM=INPLACE, LOCK=NONE</code> (MySQL) to avoid blocking writes.</li></ul><h4>Tooling and discipline</h4><ul><li>Migrations are reviewed like code, run forward and backward in staging first.</li><li>Schema migrations run as part of the deploy, in a controlled order with the app code.</li><li>Long backfills run as background jobs with a kill switch.</li><li>Keep an expand-only branch window — at least 1-2 weeks between adding the new column and removing the old one, so a rollback is possible.</li></ul>",
          "difficulty": "Advanced",
          "tags": [
                "SQL",
                "Migration",
                "Database",
                "Swiggy"
          ],
          "keyPoints": [
                "Expand (additive, nullable) andrarr; backfill in batches andrarr; switch (dual-read) andrarr; contract (drop old).",
                "Use CREATE INDEX CONCURRENTLY (Postgres) or ALGORITHM=INPLACE, LOCK=NONE (MySQL) to avoid blocking writes.",
                "Keep an expand-only window of 1-2 weeks so rollback is always possible."
          ]
    }
  ]
}
