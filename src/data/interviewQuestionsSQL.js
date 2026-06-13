// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.666Z

export const sqlQuestions = {
  questions: [
    {
      question: 'Find the Nth highest salary with edge case handling',
      answer: `<pre ngnonbindable=""><code>-- Method 1: Using DENSE_RANK (handles duplicates)
WITH ranked_salaries AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
  FROM employees
)
SELECT DISTINCT salary as nth_highest_salary
FROM ranked_salaries
WHERE rank = 2; -- Change 2 to N

-- Method 2: Using subquery with NULL handling
SELECT COALESCE(
  (SELECT DISTINCT salary 
   FROM employees 
   ORDER BY salary DESC 
   LIMIT 1 OFFSET 1), -- Change 1 to N-1
  NULL
) AS second_highest_salary;

-- Method 3: Generic function approach
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE result INT DEFAULT NULL;
  SELECT DISTINCT salary INTO result
  FROM employees
  ORDER BY salary DESC
  LIMIT 1 OFFSET N-1;
  RETURN result;
END;
</code></pre>
              <strong>Follow-up Questions:</strong>
              <ul>
                <li>What if there are duplicate salaries?</li>
                <li>How to handle when there's no Nth highest salary?</li>
                <li>Performance implications of each approach</li>
              </ul>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Customer Analytics with Window Functions',
      answer: `<pre ngnonbindable=""><code>-- Find customers with running totals, ranks, and growth
WITH customer_analytics AS (
  SELECT 
    c.customer_id,
    c.name,
    o.order_date,
    o.amount,
    -- Running total for each customer
    SUM(o.amount) OVER (
      PARTITION BY c.customer_id 
      ORDER BY o.order_date
    ) AS running_total,
    -- Rank customers by total spending
    DENSE_RANK() OVER (ORDER BY SUM(o.amount) DESC) AS spending_rank,
    -- Previous order amount for growth calculation
    LAG(o.amount) OVER (
      PARTITION BY c.customer_id 
      ORDER BY o.order_date
    ) AS prev_order_amount,
    -- Moving average of last 3 orders
    AVG(o.amount) OVER (
      PARTITION BY c.customer_id 
      ORDER BY o.order_date 
      ROWS 2 PRECEDING
    ) AS moving_avg_3_orders
  FROM customers c
  JOIN orders o ON c.customer_id = o.customer_id
)
SELECT *,
  CASE 
    WHEN prev_order_amount IS NOT NULL 
    THEN ((amount - prev_order_amount) / prev_order_amount) * 100
    ELSE NULL
  END AS growth_percentage
FROM customer_analytics
ORDER BY customer_id, order_date;
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'How to optimize database performance',
      answer: `<ol>
                <li>
                  <strong>Indexing Strategies:</strong>
                  <pre ngnonbindable=""><code>-- Create composite index for multi-column searches
CREATE INDEX idx_customer_date ON orders(customer_id, order_date);

-- Partial index for specific conditions
CREATE INDEX idx_active_users ON users(email) WHERE active = true;

-- Index on expressions
CREATE INDEX idx_upper_email ON users(UPPER(email));

-- Covering index (includes all needed columns)
CREATE INDEX idx_order_summary ON orders(customer_id, order_date) 
INCLUDE (amount, product_id);
</code></pre>
                </li>
                <li>
                  <strong>Query Optimization:</strong>
                  <ul>
                    <li>Use EXPLAIN PLAN to analyze query execution</li>
                    <li>Avoid SELECT * in production queries</li>
                    <li>Use appropriate JOIN types (INNER vs LEFT vs EXISTS)</li>
                    <li>Implement query result caching</li>
                  </ul>
                </li>
                <li>
                  <strong>Database Design:</strong>
                  <ul>
                    <li>Normalize to reduce redundancy (3NF minimum)</li>
                    <li>Denormalize for read-heavy workloads when needed</li>
                    <li>Use appropriate data types</li>
                    <li>Implement proper constraints</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Explain ACID properties with examples',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Atomicity</strong></td>
                    <td>All operations in a transaction succeed or all fail</td>
                    <td>Bank transfer: Debit and credit must both succeed or both fail</td>
                  </tr>
                  <tr>
                    <td><strong>Consistency</strong></td>
                    <td>Database remains in valid state before and after transaction</td>
                    <td>Account balance constraints are maintained during transfers</td>
                  </tr>
                  <tr>
                    <td><strong>Isolation</strong></td>
                    <td>Concurrent transactions don't interfere with each other</td>
                    <td>
                      Two users transferring money simultaneously don't see intermediate states
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Durability</strong></td>
                    <td>Committed changes persist even after system failure</td>
                    <td>Completed transactions survive database crashes</td>
                  </tr>
                </tbody>
              </table>
              <pre ngnonbindable=""><code>-- Example transaction with proper error handling
BEGIN TRANSACTION;
  SAVEPOINT before_transfer;
  
  UPDATE accounts 
  SET balance = balance - 1000 
  WHERE account_id = 'A123';
  
  IF @@ROWCOUNT = 0 OR (SELECT balance FROM accounts WHERE account_id = 'A123') < 0
  BEGIN
    ROLLBACK TO before_transfer;
    THROW 50001, 'Insufficient funds', 1;
  END
  
  UPDATE accounts 
  SET balance = balance + 1000 
  WHERE account_id = 'B456';
  
COMMIT TRANSACTION;
</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database design patterns for scalability',
      answer: `<ol>
                <li>
                  <strong>Horizontal Partitioning (Sharding):</strong>
                  <pre ngnonbindable=""><code>-- Partition by customer ID ranges
CREATE TABLE orders_shard1 (
  order_id INT PRIMARY KEY,
  customer_id INT CHECK (customer_id BETWEEN 1 AND 100000),
  -- other columns
);

CREATE TABLE orders_shard2 (
  order_id INT PRIMARY KEY,
  customer_id INT CHECK (customer_id BETWEEN 100001 AND 200000),
  -- other columns
);
</code></pre>
                </li>
                <li>
                  <strong>Vertical Partitioning:</strong>
                  <pre ngnonbindable=""><code>-- Separate frequently accessed from rarely accessed data
CREATE TABLE users_core (
  user_id INT PRIMARY KEY,
  email VARCHAR(255),
  password_hash VARCHAR(255),
  created_at TIMESTAMP
);

CREATE TABLE users_profile (
  user_id INT PRIMARY KEY,
  bio TEXT,
  preferences JSON,
  last_login TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users_core(user_id)
);
</code></pre>
                </li>
                <li>
                  <strong>Read Replicas and Master-Slave Architecture:</strong>
                  <ul>
                    <li>Write operations go to master database</li>
                    <li>Read operations distributed across read replicas</li>
                    <li>Eventual consistency model</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'When to use NoSQL vs SQL databases?',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>SQL (RDBMS)</th>
                    <th>NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Data Structure</strong></td>
                    <td>Structured, fixed schema</td>
                    <td>Flexible, schema-less or dynamic schema</td>
                  </tr>
                  <tr>
                    <td><strong>Scalability</strong></td>
                    <td>Vertical scaling (scale up)</td>
                    <td>Horizontal scaling (scale out)</td>
                  </tr>
                  <tr>
                    <td><strong>ACID Compliance</strong></td>
                    <td>Full ACID compliance</td>
                    <td>Eventually consistent (BASE model)</td>
                  </tr>
                  <tr>
                    <td><strong>Use Cases</strong></td>
                    <td>Financial systems, complex queries, reporting</td>
                    <td>Real-time web apps, big data, rapid development</td>
                  </tr>
                  <tr>
                    <td><strong>Examples</strong></td>
                    <td>PostgreSQL, MySQL, Oracle</td>
                    <td>MongoDB, Cassandra, Redis, DynamoDB</td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'How to solve the N+1 problem in ORMs?',
      answer: `<ol>
                <li>
                  <strong>Problem Description:</strong>
                  <p>
                    N+1 occurs when fetching a list of entities (1 query) and then fetching related
                    data for each entity (N queries).
                  </p>
                </li>
                <li>
                  <strong>Solutions in Hibernate/JPA:</strong>
                  <pre ngnonbindable=""><code>-- Problem: N+1 queries
List<User> users = userRepository.findAll(); // 1 query
for (User user : users) {{ '{' }}
  user.getOrders().size(); // N queries (one per user)
{{ '}' }}

-- Solution 1: JOIN FETCH
@Query("SELECT u FROM User u JOIN FETCH u.orders")
List<User> findAllWithOrders();

-- Solution 2: EntityGraph
@EntityGraph(attributePaths = {{ '{' }}"orders", "orders.items"{{ '}' }})
List<User> findAll();

-- Solution 3: Batch fetching
@BatchSize(size = 10)
@OneToMany(mappedBy = "user")
private Set<Order> orders;

-- Solution 4: Projection for specific data
@Query("SELECT new com.example.UserOrderDto(u.name, COUNT(o)) " +
       "FROM User u LEFT JOIN u.orders o GROUP BY u.id, u.name")
List<UserOrderDto> findUserOrderCounts();
</code></pre>
                </li>
                <li>
                  <strong>Solutions in Other ORMs:</strong>
                  <ul>
                    <li>
                      <strong>Sequelize (Node.js):</strong>
                      Use
                      <code>include</code>
                      with
                      <code>required: false</code>
                    </li>
                    <li>
                      <strong>Django ORM:</strong>
                      Use
                      <code>select_related()</code>
                      and
                      <code>prefetch_related()</code>
                    </li>
                    <li>
                      <strong>ActiveRecord (Rails):</strong>
                      Use
                      <code>includes()</code>
                      method
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database security best practices',
      answer: `<ol>
                <li>
                  <strong>SQL Injection Prevention:</strong>
                  <pre ngnonbindable=""><code>-- BAD: Vulnerable to SQL injection
String query = "SELECT * FROM users WHERE id = " + userId;

-- GOOD: Using parameterized queries
String query = "SELECT * FROM users WHERE id = ?";
PreparedStatement pstmt = connection.prepareStatement(query);
pstmt.setInt(1, userId);

-- GOOD: Using JPA/Hibernate
@Query("SELECT u FROM User u WHERE u.id = :userId")
User findById(@Param("userId") Long userId);
</code></pre>
                </li>
                <li>
                  <strong>Access Control:</strong>
                  <ul>
                    <li>Principle of least privilege</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Database user segregation</li>
                    <li>Connection pooling with limited privileges</li>
                  </ul>
                </li>
                <li>
                  <strong>Data Protection:</strong>
                  <ul>
                    <li>Encrypt sensitive data at rest</li>
                    <li>Use SSL/TLS for data in transit</li>
                    <li>Hash passwords with salt</li>
                    <li>Regular security audits and updates</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database constraints and their differences',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Constraint Type</th>
                    <th>Purpose</th>
                    <th>Allows NULL</th>
                    <th>Multiple Per Table</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>PRIMARY KEY</strong></td>
                    <td>Uniquely identifies each row</td>
                    <td>No</td>
                    <td>No (only one per table)</td>
                    <td><code>id INT PRIMARY KEY</code></td>
                  </tr>
                  <tr>
                    <td><strong>FOREIGN KEY</strong></td>
                    <td>Maintains referential integrity</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td><code>FOREIGN KEY (user_id) REFERENCES users(id)</code></td>
                  </tr>
                  <tr>
                    <td><strong>UNIQUE</strong></td>
                    <td>Ensures all values are distinct</td>
                    <td>Yes (multiple NULLs allowed)</td>
                    <td>Yes</td>
                    <td><code>email VARCHAR(255) UNIQUE</code></td>
                  </tr>
                  <tr>
                    <td><strong>NOT NULL</strong></td>
                    <td>Prevents NULL values</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td><code>name VARCHAR(100) NOT NULL</code></td>
                  </tr>
                  <tr>
                    <td><strong>CHECK</strong></td>
                    <td>Validates data against conditions</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td><code>age INT CHECK (age >= 0 AND age <= 150)</code></td>
                  </tr>
                </tbody>
              </table>`,
      difficulty: 'Intermediate',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database connection pooling and configuration',
      answer: `<ol>
                <li>
                  <strong>Why Connection Pooling?</strong>
                  <ul>
                    <li>Reduces overhead of creating/destroying connections</li>
                    <li>Limits database connections to prevent resource exhaustion</li>
                    <li>Improves application performance and scalability</li>
                  </ul>
                </li>
                <li>
                  <strong>Configuration Example (HikariCP with Spring Boot):</strong>
                  <pre ngnonbindable=""><code># application.properties
spring.datasource.hikari.maximum-pool-size=20
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.idle-timeout=300000
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.leak-detection-threshold=60000

# Monitor pool health
spring.datasource.hikari.register-mbeans=true
</code></pre>
                </li>
                <li>
                  <strong>Best Practices:</strong>
                  <ul>
                    <li>Set appropriate pool size based on concurrent users</li>
                    <li>Monitor connection usage and adjust accordingly</li>
                    <li>Implement connection leak detection</li>
                    <li>Use health checks to validate connections</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database migrations and schema evolution strategies',
      answer: `<ol>
                <li>
                  <strong>Migration Tools and Best Practices:</strong>
                  <pre ngnonbindable=""><code>-- Flyway migration example (V1__Create_users_table.sql)
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Liquibase migration example
<changeSet id="1" author="developer">
    <createTable tableName="orders">
        <column name="id" type="BIGINT" autoIncrement="true">
            <constraints primaryKey="true"/>
        </column>
        <column name="user_id" type="BIGINT">
            <constraints nullable="false"/>
        </column>
    </createTable>
</changeSet>

-- Zero-downtime migration strategy
-- Step 1: Add new column (nullable)
ALTER TABLE users ADD COLUMN new_email VARCHAR(255);

-- Step 2: Populate new column
UPDATE users SET new_email = email WHERE new_email IS NULL;

-- Step 3: Make column non-nullable
ALTER TABLE users ALTER COLUMN new_email SET NOT NULL;

-- Step 4: Add unique constraint
ALTER TABLE users ADD CONSTRAINT uk_users_new_email UNIQUE (new_email);

-- Step 5: Drop old column (after application deployment)
ALTER TABLE users DROP COLUMN email;
</code></pre>
                </li>
                <li>
                  <strong>Migration Strategies:</strong>
                  <ul>
                    <li>Blue-green deployment with database versioning</li>
                    <li>Backward-compatible schema changes</li>
                    <li>Feature flags for gradual rollouts</li>
                    <li>Rollback strategies and data recovery plans</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database caching strategies for web applications',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Cache Type</th>
                    <th>Use Case</th>
                    <th>Implementation</th>
                    <th>TTL Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Application Cache</strong></td>
                    <td>Frequently accessed data</td>
                    <td>Redis, Memcached</td>
                    <td>Time-based expiration</td>
                  </tr>
                  <tr>
                    <td><strong>Query Result Cache</strong></td>
                    <td>Expensive queries</td>
                    <td>Hibernate 2nd level cache</td>
                    <td>Event-based invalidation</td>
                  </tr>
                  <tr>
                    <td><strong>HTTP Cache</strong></td>
                    <td>API responses</td>
                    <td>CDN, Browser cache</td>
                    <td>ETag, Last-Modified</td>
                  </tr>
                  <tr>
                    <td><strong>Session Cache</strong></td>
                    <td>User session data</td>
                    <td>Redis with Spring Session</td>
                    <td>Session timeout based</td>
                  </tr>
                </tbody>
              </table>
              <pre ngnonbindable=""><code>// Spring Boot Redis caching example
@Service
public class UserService {{ '{' }}
    
    @Cacheable(value = "users", key = "#id")
    public User findById(Long id) {{ '{' }}
        return userRepository.findById(id);
    {{ '}' }}
    
    @CacheEvict(value = "users", key = "#user.id")
    public User updateUser(User user) {{ '{' }}
        return userRepository.save(user);
    {{ '}' }}
    
    @CachePut(value = "users", key = "#result.id")
    public User createUser(User user) {{ '{' }}
        return userRepository.save(user);
    {{ '}' }}
{{ '}' }}

// Cache-aside pattern with manual control
@Service
public class ProductService {{ '{' }}
    
    @Autowired
    private RedisTemplate<String, Product> redisTemplate;
    
    public Product getProduct(String id) {{ '{' }}
        String key = "product:" + id;
        Product cached = redisTemplate.opsForValue().get(key);
        
        if (cached != null) {{ '{' }}
            return cached;
        {{ '}' }}
        
        Product product = productRepository.findById(id);
        if (product != null) {{ '{' }}
            redisTemplate.opsForValue().set(key, product, Duration.ofHours(1));
        {{ '}' }}
        
        return product;
    {{ '}' }}
{{ '}' }}
</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'API design patterns with database optimization',
      answer: `<ol>
                <li>
                  <strong>Pagination Strategies:</strong>
                  <pre ngnonbindable=""><code>-- Offset-based pagination (simple but not performant for large datasets)
SELECT * FROM products 
ORDER BY created_at DESC 
LIMIT 20 OFFSET 100;

-- Cursor-based pagination (better for large datasets)
SELECT * FROM products 
WHERE created_at < '2023-01-01 12:00:00'
ORDER BY created_at DESC 
LIMIT 20;

-- Keyset pagination with composite keys
SELECT * FROM orders 
WHERE (created_at, id) < ('2023-01-01 12:00:00', 12345)
ORDER BY created_at DESC, id DESC 
LIMIT 20;

// Spring Boot pagination example
@RestController
public class ProductController {{ '{' }}
    
    @GetMapping("/products")
    public Page<ProductDto> getProducts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size,
        @RequestParam(defaultValue = "createdAt") String sortBy
    ) {{ '{' }}
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending());
        return productService.findAll(pageable)
                .map(this::convertToDto);
    {{ '}' }}
{{ '}' }}
</code></pre>
                </li>
                <li>
                  <strong>GraphQL with DataLoader (N+1 Prevention):</strong>
                  <pre ngnonbindable=""><code>// DataLoader implementation for batching
@Component
public class UserDataLoader {{ '{' }}
    
    @Autowired
    private UserRepository userRepository;
    
    public DataLoader<Long, User> createDataLoader() {{ '{' }}
        return DataLoader.newDataLoader(userIds -> {{ '{' }}
            List<User> users = userRepository.findAllById(userIds);
            Map<Long, User> userMap = users.stream()
                .collect(Collectors.toMap(User::getId, Function.identity()));
            
            return userIds.stream()
                .map(userMap::get)
                .collect(Collectors.toList());
        {{ '}' }});
    {{ '}' }}
{{ '}' }}

// GraphQL resolver using DataLoader
@Component
public class OrderResolver {{ '{' }}
    
    public CompletableFuture<User> user(Order order, DataFetchingEnvironment env) {{ '{' }}
        DataLoader<Long, User> dataLoader = env.getDataLoader("userDataLoader");
        return dataLoader.load(order.getUserId());
    {{ '}' }}
{{ '}' }}
</code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database monitoring and performance troubleshooting',
      answer: `<ol>
                <li>
                  <strong>Key Metrics to Monitor:</strong>
                  <ul>
                    <li>Query execution time and frequency</li>
                    <li>Connection pool utilization</li>
                    <li>Database locks and deadlocks</li>
                    <li>Memory usage and buffer pool hit ratio</li>
                    <li>I/O operations and disk usage</li>
                  </ul>
                </li>
                <li>
                  <strong>Monitoring Tools and Queries:</strong>
                  <pre ngnonbindable=""><code>-- PostgreSQL: Find slow queries
SELECT query, calls, total_time, mean_time, rows
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 10;

-- MySQL: Check current connections and processes
SHOW PROCESSLIST;
SELECT * FROM INFORMATION_SCHEMA.PROCESSLIST 
WHERE COMMAND != 'Sleep' 
ORDER BY TIME DESC;

-- PostgreSQL: Check active connections
SELECT pid, usename, application_name, client_addr, state, query
FROM pg_stat_activity
WHERE state != 'idle'
ORDER BY query_start DESC;

-- Find table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- Application monitoring with Micrometer
@Component
public class DatabaseMetrics {{ '{' }}
    
    @EventListener
    public void handleQueryExecution(QueryExecutionEvent event) {{ '{' }}
        Timer.Sample sample = Timer.start(Metrics.globalRegistry);
        sample.stop(Timer.builder("database.query.duration")
            .tag("query.type", event.getQueryType())
            .register(Metrics.globalRegistry));
    {{ '}' }}
{{ '}' }}
</code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Data consistency in distributed systems',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Pattern</th>
                    <th>Use Case</th>
                    <th>Consistency Level</th>
                    <th>Complexity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Saga Pattern</strong></td>
                    <td>Distributed transactions across services</td>
                    <td>Eventually consistent</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td><strong>Event Sourcing</strong></td>
                    <td>Audit trail and state reconstruction</td>
                    <td>Eventually consistent</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td><strong>CQRS</strong></td>
                    <td>Separate read/write models</td>
                    <td>Eventually consistent</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td><strong>Two-Phase Commit</strong></td>
                    <td>Strong consistency across databases</td>
                    <td>Strong consistency</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
              <pre ngnonbindable=""><code>// Saga pattern implementation with Spring Boot
@Component
public class OrderSaga {{ '{' }}
    
    @SagaOrchestrationStart
    public void startOrderProcessing(OrderCreatedEvent event) {{ '{' }}
        // Step 1: Reserve inventory
        commandGateway.send(new ReserveInventoryCommand(
            event.getOrderId(), event.getProductId(), event.getQuantity()));
    {{ '}' }}
    
    @SagaOrchestrationStep
    public void handleInventoryReserved(InventoryReservedEvent event) {{ '{' }}
        // Step 2: Process payment
        commandGateway.send(new ProcessPaymentCommand(
            event.getOrderId(), event.getAmount()));
    {{ '}' }}
    
    @SagaOrchestrationStep
    public void handlePaymentFailed(PaymentFailedEvent event) {{ '{' }}
        // Compensating action: Release inventory
        commandGateway.send(new ReleaseInventoryCommand(
            event.getOrderId(), event.getProductId()));
    {{ '}' }}
{{ '}' }}

// Event sourcing example
@Entity
public class OrderAggregate {{ '{' }}
    private String orderId;
    private OrderStatus status;
    private List<OrderEvent> events = new ArrayList<>();
    
    public void createOrder(CreateOrderCommand command) {{ '{' }}
        OrderCreatedEvent event = new OrderCreatedEvent(command.getOrderId());
        apply(event);
    {{ '}' }}
    
    private void apply(OrderEvent event) {{ '{' }}
        events.add(event);
        // Update aggregate state based on event
        if (event instanceof OrderCreatedEvent) {{ '{' }}
            this.status = OrderStatus.CREATED;
        {{ '}' }}
    {{ '}' }}
{{ '}' }}
</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Modern database technologies and when to use them',
      answer: `<table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Database Type</th>
                    <th>Best Use Cases</th>
                    <th>Examples</th>
                    <th>Key Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Time Series DB</strong></td>
                    <td>IoT data, monitoring, analytics</td>
                    <td>InfluxDB, TimescaleDB</td>
                    <td>High write throughput, compression</td>
                  </tr>
                  <tr>
                    <td><strong>Graph Database</strong></td>
                    <td>Social networks, recommendations</td>
                    <td>Neo4j, Amazon Neptune</td>
                    <td>Relationship traversal, pattern matching</td>
                  </tr>
                  <tr>
                    <td><strong>Search Engine</strong></td>
                    <td>Full-text search, log analysis</td>
                    <td>Elasticsearch, Solr</td>
                    <td>Text indexing, faceted search</td>
                  </tr>
                  <tr>
                    <td><strong>Vector Database</strong></td>
                    <td>AI/ML applications, embeddings</td>
                    <td>Pinecone, Weaviate, Chroma</td>
                    <td>Similarity search, vector operations</td>
                  </tr>
                  <tr>
                    <td><strong>Multi-model DB</strong></td>
                    <td>Complex applications with diverse data</td>
                    <td>ArangoDB, CosmosDB</td>
                    <td>Document + Graph + Key-Value</td>
                  </tr>
                </tbody>
              </table>
              <pre ngnonbindable=""><code>// Time series data with InfluxDB
@Measurement(name = "cpu_usage")
public class CpuMetric {{ '{' }}
    @Column(tag = true)
    private String host;
    
    @Column
    private Double value;
    
    @Column(timestamp = true)
    private Instant time;
{{ '}' }}

// Graph query with Neo4j
@Query("MATCH (u:User)-[:FRIENDS_WITH]->(friend)-[:LIKES]->(product:Product) " +
       "WHERE u.id = \$userId " +
       "RETURN product, COUNT(*) as recommendations " +
       "ORDER BY recommendations DESC LIMIT 10")
List<ProductRecommendation> findRecommendations(@Param("userId") String userId);

// Elasticsearch integration
@Document(indexName = "products")
public class ProductDocument {{ '{' }}
    @Id
    private String id;
    
    @Field(analyzer = "standard")
    private String name;
    
    @Field(type = FieldType.Keyword)
    private String category;
    
    @Field(type = FieldType.Double)
    private Double price;
{{ '}' }}

@Repository
public interface ProductSearchRepository extends ElasticsearchRepository<ProductDocument, String> {{ '{' }}
    
    @Query({{ '{' }}"bool": {{ '{' }}"must": [{{ '{' }}"match": {{ '{' }}"name": "?0"{{ '}' }}{{ '}' }}]{{ '}' }}{{ '}' }})
    List<ProductDocument> findByNameWithBoost(String name);
{{ '}' }}
</code></pre>`,
      difficulty: 'Advanced',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Database testing strategies for full stack applications',
      answer: `<ol>
                <li>
                  <strong>Unit Testing with Test Containers:</strong>
                  <pre ngnonbindable=""><code>// Integration test with TestContainers
@DataJpaTest
@Testcontainers
class UserRepositoryTest {{ '{' }}
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:13")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {{ '{' }}
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    {{ '}' }}
    
    @Test
    void shouldSaveAndFindUser() {{ '{' }}
        User user = new User("test@example.com", "John Doe");
        User saved = userRepository.save(user);
        
        Optional<User> found = userRepository.findByEmail("test@example.com");
        assertThat(found).isPresent();
        assertThat(found.get().getName()).isEqualTo("John Doe");
    {{ '}' }}
{{ '}' }}

// Database state verification
@Test
@Sql("/test-data/users.sql")
@Sql(scripts = "/cleanup.sql", executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD)
void shouldCalculateUserStatistics() {{ '{' }}
    UserStatistics stats = userService.calculateStatistics();
    assertThat(stats.getTotalUsers()).isEqualTo(5);
    assertThat(stats.getActiveUsers()).isEqualTo(3);
{{ '}' }}

// Performance testing
@Test
void shouldHandleConcurrentUserCreation() throws InterruptedException {{ '{' }}
    int threadCount = 10;
    int operationsPerThread = 100;
    ExecutorService executor = Executors.newFixedThreadPool(threadCount);
    CountDownLatch latch = new CountDownLatch(threadCount);
    
    for (int i = 0; i < threadCount; i++) {{ '{' }}
        executor.submit(() -> {{ '{' }}
            try {{ '{' }}
                for (int j = 0; j < operationsPerThread; j++) {{ '{' }}
                    userService.createUser(generateRandomUser());
                {{ '}' }}
            {{ '}' }} finally {{ '{' }}
                latch.countDown();
            {{ '}' }}
        {{ '}' }});
    {{ '}' }}
    
    latch.await(30, TimeUnit.SECONDS);
    assertThat(userRepository.count()).isEqualTo(threadCount * operationsPerThread);
{{ '}' }}
</code></pre>
                </li>
                <li>
                  <strong>Testing Strategies:</strong>
                  <ul>
                    <li>Use in-memory databases (H2) for fast unit tests</li>
                    <li>Test containers for integration tests with real databases</li>
                    <li>Database fixtures and cleanup strategies</li>
                    <li>Performance testing with concurrent operations</li>
                    <li>Migration testing in CI/CD pipelines</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'SQL'
      ]
    },
    {
      question: 'Explain different types of JOINs with examples',
      answer: `<p>JOINs combine rows from two or more tables based on a related column.</p>

<table class="table table-striped table-bordered">
  <thead>
    <tr><th>JOIN Type</th><th>Returns</th><th>When to Use</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>INNER JOIN</strong></td><td>Only matching rows from both tables</td><td>Default choice — need data from both</td></tr>
    <tr><td><strong>LEFT JOIN</strong></td><td>All rows from left + matching from right</td><td>Want all left rows, even without matches</td></tr>
    <tr><td><strong>RIGHT JOIN</strong></td><td>All rows from right + matching from left</td><td>Rare — usually rewrite as LEFT JOIN</td></tr>
    <tr><td><strong>FULL OUTER JOIN</strong></td><td>All rows from both tables</td><td>Find unmatched rows in either table</td></tr>
    <tr><td><strong>CROSS JOIN</strong></td><td>Cartesian product (every combo)</td><td>Generate combinations, rarely needed</td></tr>
    <tr><td><strong>SELF JOIN</strong></td><td>Table joined with itself</td><td>Hierarchies (manager-employee)</td></tr>
  </tbody>
</table>

<pre ngnonbindable=""><code>-- INNER JOIN: Get orders with customer names
SELECT o.order_id, c.name, o.total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

-- LEFT JOIN: All customers, even those without orders
SELECT c.name, COUNT(o.order_id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id;

-- SELF JOIN: Find employees and their managers
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;

-- FULL OUTER JOIN: Find unmatched rows in either table
SELECT c.name, o.order_id
FROM customers c
FULL OUTER JOIN orders o ON c.id = o.customer_id
WHERE c.id IS NULL OR o.customer_id IS NULL;</code></pre>

<p><strong>Interview Tip:</strong> LEFT JOIN is the most common after INNER JOIN. RIGHT JOIN can always be rewritten as LEFT JOIN by swapping tables. FULL OUTER JOIN is not supported in MySQL — use UNION of LEFT JOIN + RIGHT JOIN.</p>`,
      difficulty: 'Beginner',
      tags: ['SQL', 'JOINs', 'Queries']
    },
    {
      question: 'What are database indexes and how do they affect performance?',
      answer: `<p>An <strong>index</strong> is a data structure (usually B-Tree) that speeds up data retrieval at the cost of additional storage and slower writes.</p>

<h4>Types of Indexes</h4>
<ul>
  <li><strong>B-Tree Index</strong> — Default in most databases. Good for equality, range, and ORDER BY queries.</li>
  <li><strong>Hash Index</strong> — O(1) for exact matches only. No range queries. PostgreSQL hash indexes.</li>
  <li><strong>Composite Index</strong> — Index on multiple columns. Follows leftmost prefix rule.</li>
  <li><strong>Covering Index</strong> — Includes all columns needed by the query, so no table lookup needed.</li>
  <li><strong>Partial/Filtered Index</strong> — Index only rows matching a WHERE clause.</li>
  <li><strong>Unique Index</strong> — Enforces uniqueness. Automatically created for PRIMARY KEY and UNIQUE constraints.</li>
</ul>

<pre ngnonbindable=""><code>-- Create indexes
CREATE INDEX idx_users_email ON users(email);                -- B-Tree
CREATE INDEX idx_orders_comp ON orders(customer_id, order_date); -- Composite
CREATE UNIQUE INDEX idx_users_email_uniq ON users(email);   -- Unique

-- Covering index (PostgreSQL)
CREATE INDEX idx_orders_covering ON orders(customer_id, order_date) INCLUDE (total);

-- Partial index
CREATE INDEX idx_active_users ON users(email) WHERE active = true;

-- Check if index is being used
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'alice@example.com';</code></pre>

<h4>When to Index</h4>
<ul>
  <li>Columns in WHERE, JOIN, ORDER BY, GROUP BY clauses</li>
  <li>High-cardinality columns (many distinct values)</li>
  <li>Columns queried frequently</li>
</ul>

<h4>When NOT to Index</h4>
<ul>
  <li>Small tables (sequential scan is faster than index lookup)</li>
  <li>Columns with low cardinality (e.g., boolean, gender)</li>
  <li>Tables with heavy INSERT/UPDATE — each write updates all indexes</li>
  <li>Columns rarely used in queries</li>
</ul>

<p><strong>Rule of Thumb:</strong> A query that returns &lt;5% of rows typically benefits from an index. Above 5%, a full scan is often faster.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'Indexes', 'Performance']
    },
    {
      question: 'Explain SQL transaction isolation levels with examples',
      answer: `<p>Isolation levels control how visible changes made by one transaction are to other concurrent transactions. Lower isolation = better performance but more anomalies.</p>

<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Isolation Level</th><th>Dirty Read</th><th>Non-Repeatable Read</th><th>Phantom Read</th><th>Performance</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>READ UNCOMMITTED</strong></td><td>✅ Possible</td><td>✅ Possible</td><td>✅ Possible</td><td>⚡ Fastest</td></tr>
    <tr><td><strong>READ COMMITTED</strong></td><td>❌ Prevented</td><td>✅ Possible</td><td>✅ Possible</td><td>🟢 Default (PostgreSQL, Oracle)</td></tr>
    <tr><td><strong>REPEATABLE READ</strong></td><td>❌ Prevented</td><td>❌ Prevented</td><td>✅ Possible*</td><td>🟡 Default (MySQL InnoDB)</td></tr>
    <tr><td><strong>SERIALIZABLE</strong></td><td>❌ Prevented</td><td>❌ Prevented</td><td>❌ Prevented</td><td>🐢 Slowest</td></tr>
  </tbody>
</table>

<p>*MySQL InnoDB prevents phantom reads at REPEATABLE READ using Next-Key Locking.</p>

<h4>Anomalies Explained</h4>
<ul>
  <li><strong>Dirty Read</strong> — Reading uncommitted data from another transaction that may roll back.</li>
  <li><strong>Non-Repeatable Read</strong> — Same query returns different results because another transaction committed an update between reads.</li>
  <li><strong>Phantom Read</strong> — Same query returns different rows because another transaction inserted/deleted rows between reads.</li>
</ul>

<pre ngnonbindable=""><code>-- Set isolation level (PostgreSQL)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- MySQL
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- Spring Boot @Transactional
@Transactional(isolation = Isolation.READ_COMMITTED)
public void transferMoney(Long fromId, Long toId, BigDecimal amount) {
    accountRepository.withdraw(fromId, amount);
    accountRepository.deposit(toId, amount);
}</code></pre>

<p><strong>Interview Tip:</strong> Most production apps use READ COMMITTED. Use SERIALIZABLE only when absolute consistency is required (e.g., financial transfers). Use optimistic locking (version column) instead of SERIALIZABLE for better throughput.</p>`,
      difficulty: 'Advanced',
      tags: ['SQL', 'Transactions', 'Isolation Levels']
    },
    {
      question: 'What is the difference between WHERE and HAVING?',
      answer: `<p><strong>WHERE</strong> filters rows before grouping. <strong>HAVING</strong> filters groups after aggregation.</p>

<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Aspect</th><th>WHERE</th><th>HAVING</th></tr>
  </thead>
  <tbody>
    <tr><td>When applied</td><td>Before GROUP BY</td><td>After GROUP BY</td></tr>
    <tr><td>Can use aggregates</td><td>No (COUNT, SUM not available)</td><td>Yes</td></tr>
    <tr><td>Filters</td><td>Individual rows</td><td>Groups/aggregates</td></tr>
    <tr><td>Performance</td><td>Faster (fewer rows processed)</td><td>Slower (processes grouped data)</td></tr>
  </tbody>
</table>

<pre ngnonbindable=""><code>-- WHERE: Filter before grouping
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE salary > 50000   -- Filter individual rows first
GROUP BY department;

-- HAVING: Filter after grouping
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;    -- Filter groups

-- Both together (most common pattern)
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE status = 'ACTIVE'  -- Only active employees
GROUP BY department
HAVING AVG(salary) > 60000;  -- Only departments with high avg salary</code></pre>

<p><strong>SQL Execution Order:</strong> FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</p>

<p><strong>Common Mistake:</strong> Using HAVING for non-aggregate conditions that should be in WHERE. This is slower because HAVING processes more rows.</p>`,
      difficulty: 'Beginner',
      tags: ['SQL', 'WHERE', 'HAVING', 'Aggregation']
    },
    {
      question: 'What is the difference between UNION and UNION ALL?',
      answer: `<p>Both combine result sets of two or more SELECT statements, but handle duplicates differently.</p>

<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Aspect</th><th>UNION</th><th>UNION ALL</th></tr>
  </thead>
  <tbody>
    <tr><td>Duplicates</td><td>Removes duplicates</td><td>Keeps all rows</td></tr>
    <tr><td>Performance</td><td>Slower (sorts to deduplicate)</td><td>Faster (no dedup step)</td></tr>
    <tr><td>Use When</td><td>Need unique rows</td><td>Duplicates don't matter or are impossible</td></tr>
  </tbody>
</table>

<pre ngnonbindable=""><code>-- UNION: Unique customers from both tables
SELECT name FROM customers_us
UNION
SELECT name FROM customers_eu;

-- UNION ALL: All customers including duplicates
SELECT name FROM customers_us
UNION ALL
SELECT name FROM customers_eu;

-- Common pattern: Combine with a source column
SELECT id, name, 'US' AS region FROM customers_us
UNION ALL
SELECT id, name, 'EU' AS region FROM customers_eu;</code></pre>

<p><strong>Rules:</strong> Both SELECT statements must have the same number of columns, compatible data types, and same column order. Column names come from the first SELECT.</p>

<p><strong>Interview Tip:</strong> Always prefer UNION ALL unless you specifically need deduplication. UNION's implicit DISTINCT can cause unexpected performance issues on large datasets.</p>`,
      difficulty: 'Beginner',
      tags: ['SQL', 'UNION', 'Set Operations']
    },
    {
      question: 'What are Common Table Expressions (CTEs) and when to use them?',
      answer: `<p>A <strong>CTE (Common Table Expression)</strong> is a named temporary result set defined within a SELECT, INSERT, UPDATE, or DELETE statement. It improves readability and enables recursive queries.</p>

<h4>Simple CTE</h4>
<pre ngnonbindable=""><code>-- Find departments with above-average salary
WITH dept_avg AS (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
)
SELECT e.name, e.salary, d.avg_salary
FROM employees e
JOIN dept_avg d ON e.department = d.department
WHERE e.salary > d.avg_salary;</code></pre>

<h4>Recursive CTE (Hierarchy)</h4>
<pre ngnonbindable=""><code>-- Employee hierarchy with manager chain
WITH RECURSIVE org_chart AS (
    -- Anchor: Top-level managers
    SELECT id, name, manager_id, 1 AS level, CAST(name AS VARCHAR(1000)) AS path
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive: Find subordinates
    SELECT e.id, e.name, e.manager_id, oc.level + 1,
           CONCAT(oc.path, ' → ', e.name)
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, path;</code></pre>

<h4>CTE vs Subquery vs Temp Table</h4>
<table class="table table-striped table-bordered">
  <thead><tr><th>Aspect</th><th>CTE</th><th>Subquery</th><th>Temp Table</th></tr></thead>
  <tbody>
    <tr><td>Readability</td><td>✅ Excellent</td><td>❌ Poor (nested)</td><td>🟡 Moderate</td></tr>
    <tr><td>Reusability</td><td>Within same query</td><td>No</td><td>Across queries</td></tr>
    <tr><td>Performance</td><td>Same as subquery*</td><td>Same as CTE*</td><td>Indexed, persistent</td></tr>
    <tr><td>Scope</td><td>Single statement</td><td>Single expression</td><td>Session</td></tr>
  </tbody>
</table>
<p>*Most optimizers inline CTEs. PostgreSQL materializes them with MATERIALIZED hint.</p>

<p><strong>Interview Tip:</strong> Always prefer CTEs over nested subqueries for readability. Use recursive CTEs for tree/hierarchy traversal (org charts, category trees, BOM explosions).</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'CTE', 'Recursive Queries']
    },
    {
      question: 'How do you use EXPLAIN to analyze and optimize queries?',
      answer: `<p><strong>EXPLAIN</strong> shows the query execution plan — how the database retrieves data. <strong>EXPLAIN ANALYZE</strong> actually runs the query and shows real timing.</p>

<h4>Key Things to Look For</h4>
<ul>
  <li><strong>Seq Scan</strong> — Full table scan (bad for large tables, might need an index)</li>
  <li><strong>Index Scan</strong> — Using an index (good)</li>
  <li><strong>Index Only Scan</strong> — Covering index, no table lookup (best)</li>
  <li><strong>Nested Loop</strong> — For each row in outer table, scan inner table (OK for small datasets)</li>
  <li><strong>Hash Join</strong> — Build hash table on smaller table, probe with larger (good for large joins)</li>
  <li><strong>Merge Join</strong> — Both inputs sorted, merge them (good for already-sorted data)</li>
  <li><strong>Sort</strong> — Explicit sort (consider an index with the right ORDER BY)</li>
  <li><strong>Filter</strong> — Rows removed after scan (push filters into WHERE earlier)</li>
</ul>

<pre ngnonbindable=""><code>-- PostgreSQL
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 123;

-- MySQL
EXPLAIN SELECT * FROM orders WHERE customer_id = 123;

-- Common output analysis:
-- "Seq Scan on orders" → Missing index on customer_id
-- "Index Scan using idx_customer_id" → Index is being used ✅
-- "Filter: (total > 1000)" → Consider composite index on (customer_id, total)</code></pre>

<h4>Optimization Checklist</h4>
<ol>
  <li>Add indexes on WHERE/JOIN/GROUP BY/ORDER BY columns</li>
  <li>Use covering indexes (INCLUDE clause) to avoid table lookups</li>
  <li>Limit SELECT * — only fetch columns you need</li>
  <li>Replace subqueries with JOINs or CTEs where possible</li>
  <li>Use LIMIT for pagination instead of fetching all rows</li>
  <li>Check for implicit type conversions that prevent index usage</li>
  <li>Run ANALYZE/VACUUM to keep statistics up to date</li>
</ol>

<p><strong>Gotcha:</strong> Using functions on indexed columns prevents index usage. <code>WHERE LOWER(email) = 'alice'</code> won't use the index on email. Use a functional index or store normalized values.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'EXPLAIN', 'Query Optimization', 'Performance']
    },
    {
      question: 'What is the difference between DELETE, TRUNCATE, and DROP?',
      answer: `<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Aspect</th><th>DELETE</th><th>TRUNCATE</th><th>DROP</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>What it removes</strong></td><td>Specific rows (WHERE)</td><td>All rows</td><td>Table + data + structure</td></tr>
    <tr><td><strong>WHERE clause</strong></td><td>✅ Supported</td><td>❌ Not supported</td><td>N/A</td></tr>
    <tr><td><strong>Transaction safe</strong></td><td>✅ Can rollback</td><td>🟡 DB-dependent*</td><td>❌ Cannot rollback</td></tr>
    <tr><td><strong>Triggers fire</strong></td><td>✅ Yes</td><td>❌ No</td><td>N/A</td></tr>
    <tr><td><strong>Auto-increment reset</strong></td><td>No</td><td>Yes</td><td>N/A</td></tr>
    <tr><td><strong>Speed</strong></td><td>Slow (row by row)</td><td>Fast (deallocates pages)</td><td>Fast</td></tr>
    <tr><td><strong>Foreign keys</strong></td><td>Can delete referenced rows</td><td>Must drop FK first</td><td>Cascades</td></tr>
  </tbody>
</table>

<p>*PostgreSQL: TRUNCATE is transactional. MySQL InnoDB: TRUNCATE is NOT transactional (implicit commit).</p>

<pre ngnonbindable=""><code>-- DELETE specific rows (slow, logged, rollbackable)
DELETE FROM orders WHERE status = 'CANCELLED';

-- TRUNCATE all rows (fast, minimal logging)
TRUNCATE TABLE orders;

-- TRUNCATE with CASCADE (also truncates referencing tables)
TRUNCATE TABLE customers CASCADE;

-- DROP entire table (structure + data)
DROP TABLE orders;</code></pre>

<p><strong>Interview Tip:</strong> Use DELETE for targeted removal with WHERE. Use TRUNCATE for wiping all data (e.g., staging tables, test data). Use DROP only when the table itself is no longer needed.</p>`,
      difficulty: 'Beginner',
      tags: ['SQL', 'DELETE', 'TRUNCATE', 'DROP']
    },
    {
      question: 'Explain subqueries vs correlated subqueries with examples',
      answer: `<p>A <strong>subquery</strong> runs independently. A <strong>correlated subquery</strong> depends on the outer query and runs once per row.</p>

<h4>Simple Subquery (Independent)</h4>
<pre ngnonbindable=""><code>-- Find employees earning above average salary
-- Inner query runs ONCE, result is reused
SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);</code></pre>

<h4>Correlated Subquery (Dependent)</h4>
<pre ngnonbindable=""><code>-- Find employees earning above their department's average
-- Inner query runs for EACH row in outer query
SELECT name, salary, department
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department  -- Correlates with outer row
);</code></pre>

<h4>Performance Comparison</h4>
<table class="table table-striped table-bordered">
  <thead><tr><th>Aspect</th><th>Simple Subquery</th><th>Correlated Subquery</th></tr></thead>
  <tbody>
    <tr><td>Execution</td><td>Once</td><td>Once per outer row</td></tr>
    <tr><td>Performance</td><td>Generally fast</td><td>Can be slow on large tables</td></tr>
    <tr><td>Optimization</td><td>Auto by optimizer</td><td>Rewrite as JOIN or window function</td></tr>
  </tbody>
</table>

<h4>Rewrite Correlated Subquery as Window Function (Better Performance)</h4>
<pre ngnonbindable=""><code>-- SAME result, MUCH faster on large datasets
SELECT name, salary, department
FROM (
    SELECT name, salary, department,
           AVG(salary) OVER (PARTITION BY department) AS dept_avg
    FROM employees
) sub
WHERE salary > dept_avg;</code></pre>

<p><strong>Interview Tip:</strong> Correlated subqueries are a code smell. Always consider rewriting as a JOIN or window function for better performance.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'Subqueries', 'Correlated Subquery', 'Performance']
    },
    {
      question: 'What are SQL window functions and how do they differ from GROUP BY?',
      answer: `<p><strong>Window functions</strong> perform calculations across rows related to the current row, <strong>without collapsing rows</strong> like GROUP BY does.</p>

<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Aspect</th><th>GROUP BY</th><th>Window Functions</th></tr>
  </thead>
  <tbody>
    <tr><td>Output rows</td><td>One per group</td><td>Same as input rows</td></tr>
    <tr><td>Access to individual rows</td><td>No (only aggregates)</td><td>Yes (row + aggregate)</td></tr>
    <tr><td>Use case</td><td>Aggregation reports</td><td>Ranking, running totals, comparisons</td></tr>
  </tbody>
</table>

<pre ngnonbindable=""><code>-- GROUP BY: One row per department
SELECT department, AVG(salary) FROM employees GROUP BY department;

-- Window Function: ALL rows with department average
SELECT name, department, salary,
       AVG(salary) OVER (PARTITION BY department) AS dept_avg
FROM employees;

-- Common window functions
SELECT name, department, salary,
    ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS row_num,
    RANK()       OVER (PARTITION BY dept ORDER BY salary DESC) AS rank_val,
    DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dense_rank_val,
    LAG(salary, 1) OVER (PARTITION BY dept ORDER BY salary) AS prev_salary,
    LEAD(salary, 1) OVER (PARTITION BY dept ORDER BY salary) AS next_salary,
    SUM(salary) OVER (PARTITION BY dept ORDER BY hire_date
                      ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total
FROM employees;</code></pre>

<h4>ROW_NUMBER vs RANK vs DENSE_RANK</h4>
<table class="table table-striped table-bordered">
  <thead><tr><th>Salary</th><th>ROW_NUMBER</th><th>RANK</th><th>DENSE_RANK</th></tr></thead>
  <tbody>
    <tr><td>100K</td><td>1</td><td>1</td><td>1</td></tr>
    <tr><td>90K</td><td>2</td><td>2</td><td>2</td></tr>
    <tr><td>90K</td><td>3</td><td>2</td><td>2</td></tr>
    <tr><td>80K</td><td>4</td><td>4</td><td>3</td></tr>
  </tbody>
</table>

<p><strong>Interview Tip:</strong> Window functions are one of the most-tested SQL topics. Practice ranking, running totals, and year-over-year comparisons.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'Window Functions', 'Analytics']
    },
    {
      question: 'How do you handle deadlocks and what causes them?',
      answer: `<p>A <strong>deadlock</strong> occurs when two transactions hold locks on resources that the other transaction needs, creating a circular dependency.</p>

<h4>Classic Deadlock Scenario</h4>
<pre ngnonbindable=""><code>-- Transaction A                -- Transaction B
BEGIN;                          BEGIN;
UPDATE accounts                 UPDATE accounts
  SET balance = balance - 100    SET balance = balance - 50
  WHERE id = 1;                  WHERE id = 2;
                                -- A holds lock on id=1, needs id=2
UPDATE accounts                 UPDATE accounts
  SET balance = balance + 100    SET balance = balance + 50
  WHERE id = 2;  -- BLOCKED!      WHERE id = 1;  -- BLOCKED!
                                -- B holds lock on id=2, needs id=1
-- DEADLOCK! Database detects and kills one transaction</code></pre>

<h4>Prevention Strategies</h4>
<ul>
  <li><strong>Consistent lock ordering</strong> — Always lock resources in the same order (e.g., always lock lower ID first)</li>
  <li><strong>Keep transactions short</strong> — Shorter transactions hold locks for less time</li>
  <li><strong>Use optimistic locking</strong> — Version columns instead of row locks</li>
  <li><strong>Set lock timeouts</strong> — <code>SET LOCK_TIMEOUT 5000</code> (PostgreSQL)</li>
  <li><strong>Reduce isolation level</strong> — READ COMMITTED has fewer locks than SERIALIZABLE</li>
  <li><strong>Access least rows first</strong> — Apply filters before locking</li>
</ul>

<h4>Spring Boot Retry on Deadlock</h4>
<pre ngnonbindable=""><code>@Retryable(value = {DeadlockLoserDataAccessException.class},
           maxAttempts = 3,
           backoff = @Backoff(delay = 100, multiplier = 2))
@Transactional
public void transferMoney(Long fromId, Long toId, BigDecimal amount) {
    // Always lock in consistent order (lower ID first)
    Long first = Math.min(fromId, toId);
    Long second = Math.max(fromId, toId);
    
    Account acc1 = accountRepository.findById(first).orElseThrow();
    Account acc2 = accountRepository.findById(second).orElseThrow();
    
    acc1.setBalance(acc1.getBalance().subtract(amount));
    acc2.setBalance(acc2.getBalance().add(amount));
}</code></pre>

<p><strong>MySQL:</strong> <code>SHOW ENGINE INNODB STATUS</code> shows last deadlock. <strong>PostgreSQL:</strong> Check <code>pg_stat_activity</code> for blocked queries.</p>`,
      difficulty: 'Advanced',
      tags: ['SQL', 'Deadlocks', 'Transactions', 'Spring Boot']
    },
    {
      question: 'What are the different types of SQL keys (Primary, Foreign, Unique, Composite)?',
      answer: `<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Key Type</th><th>Purpose</th><th>NULLs Allowed</th><th>Duplicates</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Primary Key</strong></td><td>Uniquely identify each row</td><td>No</td><td>No</td><td><code>id INT PRIMARY KEY</code></td></tr>
    <tr><td><strong>Foreign Key</strong></td><td>Reference another table's PK</td><td>Yes*</td><td>Yes</td><td><code>FOREIGN KEY (user_id) REFERENCES users(id)</code></td></tr>
    <tr><td><strong>Unique Key</strong></td><td>Ensure column values are distinct</td><td>Yes (1 NULL in MySQL, many in PostgreSQL)</td><td>No</td><td><code>email VARCHAR(255) UNIQUE</code></td></tr>
    <tr><td><strong>Composite Key</strong></td><td>PK/Unique across multiple columns</td><td>No (if PK)</td><td>No</td><td><code>PRIMARY KEY (order_id, product_id)</code></td></tr>
    <tr><td><strong>Surrogate Key</strong></td><td>Artificial key (auto-increment/UUID)</td><td>No</td><td>No</td><td><code>id BIGINT AUTO_INCREMENT</code></td></tr>
    <tr><td><strong>Natural Key</strong></td><td>Business-meaningful key</td><td>No</td><td>No</td><td><code>isbn VARCHAR(13) PRIMARY KEY</code></td></tr>
  </tbody>
</table>

<pre ngnonbindable=""><code>-- Composite primary key (junction table for many-to-many)
CREATE TABLE order_items (
    order_id   INT NOT NULL,
    product_id INT NOT NULL,
    quantity   INT NOT NULL DEFAULT 1,
    PRIMARY KEY (order_id, product_id),  -- Composite key
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Surrogate vs Natural key
-- Surrogate: Auto-generated, never changes
CREATE TABLE users (
    id    BIGSERIAL PRIMARY KEY,     -- Surrogate key
    email VARCHAR(255) UNIQUE NOT NULL -- Natural key candidate
);</code></pre>

<p><strong>Foreign Key NULLs:</strong> A nullable FK means the relationship is optional. E.g., <code>manager_id INT REFERENCES employees(id)</code> — NULL means no manager (CEO).</p>

<p><strong>Interview Tip:</strong> Prefer surrogate keys (auto-increment/UUID) for primary keys. Natural keys change, causing cascading updates across all foreign key references.</p>`,
      difficulty: 'Beginner',
      tags: ['SQL', 'Keys', 'Constraints', 'Schema Design']
    },
    {
      question: 'How do you implement pagination in SQL and what are the pitfalls?',
      answer: `<p>Pagination retrieves data in chunks instead of loading entire result sets. Two main approaches: <strong>OFFSET</strong> and <strong>Keyset (cursor)</strong>.</p>

<h4>OFFSET-based Pagination (Simple but Slow)</h4>
<pre ngnonbindable=""><code>-- Page 1 (rows 1-20)
SELECT * FROM orders ORDER BY id LIMIT 20 OFFSET 0;

-- Page 2 (rows 21-40)
SELECT * FROM orders ORDER BY id LIMIT 20 OFFSET 20;

-- Spring Data JPA
Page<Order> findAll(Pageable ofSize(20).withPage(pageNum));</code></pre>

<h4>Keyset Pagination (Fast, No OFFSET)</h4>
<pre ngnonbindable=""><code>-- First page
SELECT * FROM orders ORDER BY id LIMIT 20;

-- Next page (using last seen ID)
SELECT * FROM orders WHERE id > :last_seen_id ORDER BY id LIMIT 20;

-- With composite sort (created_at + id for uniqueness)
SELECT * FROM orders
WHERE (created_at, id) > (:last_created_at, :last_id)
ORDER BY created_at, id
LIMIT 20;</code></pre>

<h4>Performance Comparison</h4>
<table class="table table-striped table-bordered">
  <thead><tr><th>Aspect</th><th>OFFSET Pagination</th><th>Keyset Pagination</th></tr></thead>
  <tbody>
    <tr><td>Page 1 speed</td><td>Fast</td><td>Fast</td></tr>
    <tr><td>Page 10000 speed</td><td>🐢 Very slow (scips 200K rows)</td><td>⚡ Fast (indexed lookup)</td></tr>
    <tr><td>Total count needed</td><td>Yes (for "Page X of Y")</td><td>No</td></tr>
    <tr><td>Handles inserts</td><td>🟡 May skip/duplicate rows</td><td>✅ Consistent</td></tr>
    <tr><td>Random page access</td><td>✅ Jump to any page</td><td>❌ Sequential only</td></tr>
  </tbody>
</table>

<p><strong>OFFSET Problem:</strong> <code>OFFSET 100000</code> means the database still reads and discards 100,000 rows. This gets exponentially slower.</p>

<p><strong>Interview Tip:</strong> Use keyset pagination for infinite scroll / feed-style UIs. Use OFFSET only when you need "Page X of Y" navigation with small page ranges.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'Pagination', 'Performance', 'Spring Data']
    },
    {
      question: 'What is the difference between clustered and non-clustered indexes?',
      answer: `<table class="table table-striped table-bordered">
  <thead>
    <tr><th>Aspect</th><th>Clustered Index</th><th>Non-Clustered Index</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Storage</strong></td><td>Table data IS the index (leaf nodes = data pages)</td><td>Index + pointer to data row</td></tr>
    <tr><td><strong>Per table</strong></td><td>Only ONE (data can only be sorted one way)</td><td>Multiple (up to 999 in SQL Server)</td></tr>
    <tr><td><strong>Speed</strong></td><td>Faster for range queries (data is sorted)</td><td>Faster for point lookups</td></tr>
    <tr><td><strong>Lookup</strong></td><td>Direct (no extra step)</td><td>Indirect (bookmark/key lookup)</td></tr>
    <tr><td><strong>Example</strong></td><td>PRIMARY KEY in InnoDB (MySQL)</td><td>CREATE INDEX idx_email ON users(email)</td></tr>
  </tbody>
</table>

<pre ngnonbindable=""><code>-- MySQL InnoDB: PRIMARY KEY is the clustered index
-- Data is physically ordered by id
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Clustered
    email VARCHAR(255),
    name VARCHAR(100),
    INDEX idx_email (email)  -- Non-clustered (secondary)
);

-- When you query:
-- SELECT * FROM users WHERE id = 5;
--   → Clustered: Direct lookup (1 I/O)

-- SELECT * FROM users WHERE email = 'alice@example.com';
--   → Non-clustered: Find in index → get PK → lookup in clustered (2 I/Os)

-- Covering index avoids the second lookup:
CREATE INDEX idx_email_name ON users(email, name);
-- Now SELECT name FROM users WHERE email = 'alice@example.com';
-- Only reads the index, no table lookup!</code></pre>

<p><strong>PostgreSQL:</strong> Uses heap tables (no clustered index by default). <code>CLUSTER</code> command reorders data once but doesn't maintain order on inserts.</p>

<p><strong>SQL Server:</strong> You explicitly choose clustered vs non-clustered. Default PK is clustered.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'Indexes', 'Clustered', 'Performance']
    },
    {
      question: 'How do you perform UPSERT (INSERT or UPDATE) in different databases?',
      answer: `<p>UPSERT = insert a row, or update it if it already exists. Each database has different syntax.</p>

<pre ngnonbindable=""><code>-- MySQL: INSERT ... ON DUPLICATE KEY UPDATE
INSERT INTO users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com')
ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    email = VALUES(email);

-- PostgreSQL: INSERT ... ON CONFLICT (upsert)
INSERT INTO users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    email = EXCLUDED.email;

-- SQLite: INSERT OR REPLACE
INSERT OR REPLACE INTO users (id, name, email)
VALUES (1, 'Alice', 'alice@example.com');

-- SQL Server: MERGE
MERGE INTO users AS target
USING (VALUES (1, 'Alice', 'alice@example.com')) AS source (id, name, email)
ON target.id = source.id
WHEN MATCHED THEN UPDATE SET name = source.name, email = source.email
WHEN NOT MATCHED THEN INSERT (id, name, email) VALUES (source.id, source.name, source.email);

-- Oracle: MERGE
MERGE INTO users target
USING (SELECT 1 AS id, 'Alice' AS name, 'alice@example.com' AS email FROM dual) source
ON (target.id = source.id)
WHEN MATCHED THEN UPDATE SET target.name = source.name, target.email = source.email
WHEN NOT MATCHED THEN INSERT (id, name, email) VALUES (source.id, source.name, source.email);</code></pre>

<h4>Spring Data JPA (Database-Agnostic)</h4>
<pre ngnonbindable=""><code>// Spring Data JPA uses merge() for upsert
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.email = :email")
    Optional<User> findByEmail(@Param("email") String email);
}

// Usage:
User user = userRepository.findByEmail(email)
    .map(existing -> existing.updateName(name))  // Update
    .orElse(new User(name, email));               // Insert
userRepository.save(user);</code></pre>

<p><strong>Interview Tip:</strong> PostgreSQL's <code>ON CONFLICT</code> is the cleanest syntax. MySQL's <code>ON DUPLICATE KEY UPDATE</code> is most commonly asked. Know the difference between <code>VALUES(col)</code> (MySQL) and <code>EXCLUDED.col</code> (PostgreSQL) for referencing the new values.</p>`,
      difficulty: 'Intermediate',
      tags: ['SQL', 'UPSERT', 'MySQL', 'PostgreSQL', 'Spring Data']
    },
    {
      question: 'How do you prevent SQL injection and what are prepared statements?',
      answer: `<p><strong>SQL Injection</strong> occurs when untrusted input is concatenated directly into SQL queries, allowing attackers to execute arbitrary SQL.</p>

<h4>Vulnerable Code (NEVER do this)</h4>
<pre ngnonbindable=""><code>// Java — VULNERABLE
String sql = "SELECT * FROM users WHERE email = '" + email + "'";
// Input: ' OR '1'='1  →  SELECT * FROM users WHERE email = '' OR '1'='1'

// Python — VULNERABLE
cursor.execute(f"SELECT * FROM users WHERE email = '{email}'")</code></pre>

<h4>Safe: Parameterized Queries (Prepared Statements)</h4>
<pre ngnonbindable=""><code>// Java — JDBC
PreparedStatement stmt = conn.prepareStatement(
    "SELECT * FROM users WHERE email = ? AND status = ?");
stmt.setString(1, email);   // Automatically escaped
stmt.setString(2, "ACTIVE");
ResultSet rs = stmt.executeQuery();

// Spring Data JPA — Safe by design
@Query("SELECT u FROM User u WHERE u.email = :email")
Optional<User> findByEmail(@Param("email") String email);

// Python — psycopg2
cursor.execute("SELECT * FROM users WHERE email = %s", (email,))

// Python — SQLAlchemy ORM
user = session.query(User).filter(User.email == email).first()</code></pre>

<h4>Other Prevention Methods</h4>
<ul>
  <li><strong>ORM/JPA</strong> — Uses prepared statements automatically</li>
  <li><strong>Input Validation</strong> — Whitelist allowed characters (regex for email, numeric IDs)</li>
  <li><strong>Least Privilege</strong> — Application DB user should NOT have DROP, ALTER, or GRANT permissions</li>
  <li><strong>Stored Procedures</strong> — Parameterized by default, but don't dynamically build SQL inside them</li>
  <li><strong>WAF</strong> — Web Application Firewall (Cloudflare, AWS WAF) as defense-in-depth</li>
</ul>

<p><strong>Interview Tip:</strong> The #1 answer is always <strong>parameterized queries/prepared statements</strong>. ORMs like Hibernate use them by default. The danger is when developers use string concatenation for dynamic queries — always use named parameters instead.</p>`,
      difficulty: 'Beginner',
      tags: ['SQL', 'Security', 'SQL Injection', 'Prepared Statements']
    },
    {
      question: 'What is the N+1 query problem and how do you solve it in SQL and JPA?',
      answer: `<p>The <strong>N+1 problem</strong> occurs when you execute 1 query to fetch N parent records, then N additional queries to fetch each parent's related records.</p>

<h4>Example: N+1 Problem</h4>
<pre ngnonbindable=""><code>-- 1 query: Get all departments
SELECT * FROM departments;  -- Returns 10 departments

-- N queries: Get employees for EACH department
SELECT * FROM employees WHERE dept_id = 1;   -- Query 1
SELECT * FROM employees WHERE dept_id = 2;   -- Query 2
...
SELECT * FROM employees WHERE dept_id = 10;  -- Query 10
-- Total: 1 + 10 = 11 queries!</code></pre>

<h4>Solution 1: JOIN FETCH (SQL + JPA)</h4>
<pre ngnonbindable=""><code>-- SQL: Single query with JOIN
SELECT d.*, e.*
FROM departments d
LEFT JOIN employees e ON d.id = e.dept_id;

-- JPA: @EntityGraph or JOIN FETCH
@Query("SELECT d FROM Department d JOIN FETCH d.employees")
List<Department> findAllWithEmployees();

-- Spring Data JPA EntityGraph
@EntityGraph(attributePaths = {"employees"})
List<Department> findAll();</code></pre>

<h4>Solution 2: Batch Fetching (JPA/Hibernate)</h4>
<pre ngnonbindable=""><code>-- In application.properties
spring.jpa.properties.hibernate.default_batch_fetch_size=100

-- Or per collection with @BatchSize
@Entity
public class Department {
    @OneToMany(mappedBy = "department")
    @BatchSize(size = 50)  -- Fetch 50 departments' employees at once
    private List<Employee> employees;
}</code></pre>

<h4>Solution 3: IN Clause (Batch)</h4>
<pre ngnonbindable=""><code>-- Get all department IDs first, then fetch all employees in one query
SELECT * FROM employees WHERE dept_id IN (1, 2, 3, ..., 10);</code></pre>

<table class="table table-striped table-bordered">
  <thead><tr><th>Approach</th><th>Queries</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>JOIN FETCH</td><td>1</td><td>Need all related data immediately</td></tr>
    <tr><td>@BatchSize</td><td>N/50 + 1</td><td>Lazy loading with fewer round trips</td></tr>
    <tr><td>IN clause</td><td>2</td><td>Custom batch queries</td></tr>
  </tbody>
</table>

<p><strong>How to detect N+1:</strong> Enable SQL logging with <code>spring.jpa.show-sql=true</code> and <code>spring.jpa.properties.hibernate.format_sql=true</code>. Watch for repeated similar queries.</p>`,
      difficulty: 'Advanced',
      tags: ['SQL', 'N+1', 'JPA', 'Hibernate', 'Performance']
    }
  ]
};
