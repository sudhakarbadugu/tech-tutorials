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
    }
  ]
};
