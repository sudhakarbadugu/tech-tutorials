// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.626Z

export const springQuestions = {
  questions: [
    {
      question: 'What is Spring Framework?',
      answer: `<ol>
              <li>
                Spring is a comprehensive, lightweight, open-source framework for building Java
                applications.
              </li>
              <li>
                It provides infrastructure support for developing Java applications, including
                dependency injection, aspect-oriented programming, and transaction management.
              </li>
              <li>
                Spring promotes loose coupling through dependency injection and inversion of control
                (IoC).
              </li>
              <li>
                It offers modules for data access, web applications, security, testing, and more.
              </li>
              <li>Spring can be used for both standalone and enterprise-level applications.</li>
              <li>
                It integrates easily with other frameworks and technologies, such as Hibernate, JPA,
                and JMS.
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Dependency Injection (DI)?',
      answer: `<ol>
              <li>
                Dependency Injection is a design pattern that allows objects to receive their
                dependencies from an external source rather than creating them internally.
              </li>
              <li>
                In Spring, DI is achieved through constructor injection, setter injection, or field
                injection.
              </li>
              <li>
                It promotes loose coupling and easier unit testing by decoupling object creation
                from business logic.
              </li>
              <li>
                Spring's IoC container manages the lifecycle and dependencies of beans
                automatically.
              </li>
              <li>
                DI helps in managing complex application dependencies and configuration in a
                centralized way.
              </li>
              <li>
                It improves code maintainability and flexibility by allowing easy swapping of
                implementations.
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Inversion of Control (IoC)?',
      answer: `<ol>
              <li>
                IoC is a principle where the control of object creation and management is
                transferred from the application code to a container or framework.
              </li>
              <li>
                In Spring, the IoC container is responsible for instantiating, configuring, and
                assembling beans.
              </li>
              <li>
                IoC enables loose coupling between components by removing direct dependencies.
              </li>
              <li>It allows for better separation of concerns and easier testing.</li>
              <li>
                IoC is implemented in Spring through dependency injection and bean configuration.
              </li>
              <li>It supports modular and scalable application design.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are the different types of Spring Bean scopes?',
      answer: `<ol>
              <li>
                <b>Singleton:</b>
                Only one instance of the bean is created per Spring container (default scope).
              </li>
              <li>
                <b>Prototype:</b>
                A new instance is created every time the bean is requested from the container.
              </li>
              <li>
                <b>Request:</b>
                A new bean instance is created for each HTTP request (web applications only).
              </li>
              <li>
                <b>Session:</b>
                A new bean instance is created for each HTTP session (web applications only).
              </li>
              <li>
                <b>Application:</b>
                A single bean instance is created for the lifecycle of a ServletContext (web
                applications only).
              </li>
              <li>
                <b>WebSocket:</b>
                A single bean instance is created for the lifecycle of a WebSocket session (web
                applications only).
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is the use of @Autowired annotation?',
      answer: `<ol>
              <li>
                <code>@Autowired</code>
                is used for automatic dependency injection in Spring.
              </li>
              <li>
                It can be applied to constructors, fields, or setter methods to inject collaborating
                beans.
              </li>
              <li>
                Spring resolves and injects the required bean automatically based on type (and
                optionally by name with
                <code>@Qualifier</code>
                ).
              </li>
              <li>It reduces boilerplate code and manual wiring of dependencies.</li>
              <li>
                It supports both required and optional dependencies (using
                <code>required=false</code>
                ).
              </li>
              <li>It works with both XML and annotation-based configuration.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is the difference between @Component , @Service , @Repository , and @Controller ?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Annotation</th>
                  <th>Purpose</th>
                  <th>Typical Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>@Component</code></td>
                  <td>Generic stereotype for any Spring-managed component.</td>
                  <td>Any bean not fitting other stereotypes.</td>
                </tr>
                <tr>
                  <td><code>@Service</code></td>
                  <td>
                    Specialization of
                    <code>@Component</code>
                    for service layer beans.
                  </td>
                  <td>Business logic and service classes.</td>
                </tr>
                <tr>
                  <td><code>@Repository</code></td>
                  <td>
                    Specialization of
                    <code>@Component</code>
                    for data access objects (DAOs).
                  </td>
                  <td>Persistence, database operations, exception translation.</td>
                </tr>
                <tr>
                  <td><code>@Controller</code></td>
                  <td>
                    Specialization of
                    <code>@Component</code>
                    for web controllers in Spring MVC.
                  </td>
                  <td>Handling HTTP requests and responses.</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Boot?',
      answer: `<ol>
              <li>
                Spring Boot is a framework built on top of Spring to simplify application setup and
                development.
              </li>
              <li>
                It provides auto-configuration, embedded servers (Tomcat, Jetty), and
                production-ready features.
              </li>
              <li>
                Spring Boot eliminates the need for extensive XML configuration and boilerplate
                code.
              </li>
              <li>
                It offers starter dependencies for rapid development and easy integration with other
                technologies.
              </li>
              <li>
                Spring Boot includes built-in tools for monitoring, health checks, and metrics.
              </li>
              <li>
                It is ideal for creating stand-alone, production-grade Spring applications quickly.
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is the purpose of application.properties or application.yml ?',
      answer: `<ol>
              <li>
                These files are used to configure application settings in a Spring Boot application.
              </li>
              <li>
                They allow you to set database URLs, server ports, logging levels, and other
                properties.
              </li>
              <li>
                They support hierarchical and environment-specific configuration (e.g.,
                <code>application-dev.properties</code>
                ).
              </li>
              <li>
                They can be used to externalize configuration for different deployment environments.
              </li>
              <li>
                Both
                <code>.properties</code>
                and
                <code>.yml</code>
                formats are supported for flexibility.
              </li>
              <li>They help keep configuration separate from code, improving maintainability.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How do you handle exceptions in Spring Boot?',
      answer: `<ol>
              <li>
                Use
                <code>@ControllerAdvice</code>
                to define global exception handlers for controllers.
              </li>
              <li>
                Use
                <code>@ExceptionHandler</code>
                methods to handle specific exceptions.
              </li>
              <li>Return custom error responses or views for different exception types.</li>
              <li>
                Spring Boot provides a default error page and JSON error response for REST APIs.
              </li>
              <li>
                You can customize error handling using
                <code>ErrorController</code>
                or
                <code>ResponseEntityExceptionHandler</code>
                .
              </li>
              <li>Exception handling improves user experience and application robustness.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Data JPA?',
      answer: `<ol>
              <li>
                Spring Data JPA is a part of the Spring Data project for simplifying data access
                using JPA (Java Persistence API).
              </li>
              <li>
                It provides repository interfaces like
                <code>JpaRepository</code>
                and
                <code>CrudRepository</code>
                for CRUD operations.
              </li>
              <li>
                It supports custom query methods using method naming conventions and
                <code>@Query</code>
                annotation.
              </li>
              <li>
                Spring Data JPA handles entity mapping, transactions, and pagination automatically.
              </li>
              <li>It integrates with various databases and supports auditing and projections.</li>
              <li>It reduces boilerplate code for data access layers.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is the difference between Monolithic and Microservice Architecture?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Monolithic Architecture</th>
                  <th>Microservice Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Single, unified application with tightly coupled components.</td>
                  <td>
                    Composed of independent, loosely coupled services for each business feature.
                  </td>
                </tr>
                <tr>
                  <td>All modules are deployed together as a single unit.</td>
                  <td>Each service can be developed, deployed, and scaled independently.</td>
                </tr>
                <tr>
                  <td>Technology stack is usually uniform across the application.</td>
                  <td>Different services can use different technology stacks and databases.</td>
                </tr>
                <tr>
                  <td>Scaling requires scaling the entire application.</td>
                  <td>Only the required services can be scaled as needed.</td>
                </tr>
                <tr>
                  <td>Failure in one module can affect the entire application.</td>
                  <td>Failure in one service does not impact others directly.</td>
                </tr>
                <tr>
                  <td>Simple to develop initially but becomes complex as it grows.</td>
                  <td>More complex to set up but easier to maintain and scale in the long run.</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How does Spring Boot interact with the databases?',
      answer: `<ol>
              <li>
                Spring Boot uses Spring Data JPA, JDBC, or other data access modules to interact
                with databases.
              </li>
              <li>
                Entities are defined using
                <code>@Entity</code>
                annotation, mapping Java classes to database tables.
              </li>
              <li>
                Repositories like
                <code>JpaRepository</code>
                and
                <code>CrudRepository</code>
                provide CRUD operations without boilerplate code.
              </li>
              <li>
                Database connection details (URL, username, password, dialect) are configured in
                <code>application.properties</code>
                or
                <code>application.yml</code>
                .
              </li>
              <li>
                Supports automatic schema generation and database initialization using properties
                like
                <code>spring.jpa.hibernate.ddl-auto</code>
                .
              </li>
              <li>
                Enables transaction management, connection pooling, and supports multiple databases
                (MySQL, PostgreSQL, Oracle, etc.).
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is MVC (Model-View-Controller)?',
      answer: `<ol>
              <li>
                MVC is a design pattern that separates an application into three main components:
                Model, View, and Controller.
              </li>
              <li>
                <b>Model:</b>
                Represents the application's data and business logic.
              </li>
              <li>
                <b>View:</b>
                Handles the display and presentation of data to the user (UI).
              </li>
              <li>
                <b>Controller:</b>
                Processes user input, interacts with the model, and selects the view for response.
              </li>
              <li>Promotes separation of concerns, making code more modular and maintainable.</li>
              <li>Spring MVC implements this pattern for building robust web applications.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is LazyInitializationException?',
      answer: `<ol>
              <li>
                Occurs when a lazily loaded association or collection is accessed outside the
                Hibernate session.
              </li>
              <li>
                Common in ORM frameworks like Hibernate and JPA when using
                <code>FetchType.LAZY</code>
                .
              </li>
              <li>
                Can be fixed by fetching the data within an open session or using
                <code>FetchType.EAGER</code>
                for immediate loading.
              </li>
              <li>
                DTO projection or
                <code>@Transactional</code>
                methods can help avoid this exception.
              </li>
              <li>Indicates improper session management or detached entities.</li>
              <li>Best practice is to design data access layers to avoid lazy loading issues.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Metaspace in Java?',
      answer: `<ol>
              <li>
                Metaspace is a memory area in Java 8 and above that stores class metadata (class
                definitions, methods, etc.).
              </li>
              <li>Replaces the PermGen space used in earlier Java versions.</li>
              <li>Metaspace grows automatically as needed, limited only by system memory.</li>
              <li>
                Helps avoid
                <code>OutOfMemoryError: PermGen space</code>
                issues from previous Java versions.
              </li>
              <li>
                Can be tuned using JVM options like
                <code>-XX:MaxMetaspaceSize</code>
                .
              </li>
              <li>Improves class loading and unloading efficiency in large applications.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is @Transactional in Spring?',
      answer: `<ol>
              <li>
                <code>@Transactional</code>
                is an annotation used to define transactional boundaries for methods or classes.
              </li>
              <li>
                Ensures that a series of operations are executed within a single transaction
                context.
              </li>
              <li>If an exception occurs, the transaction is rolled back automatically.</li>
              <li>
                Supports configuration of isolation levels, propagation behavior, and rollback
                rules.
              </li>
              <li>Can be applied at the service or repository layer for data consistency.</li>
              <li>Improves reliability and integrity of database operations.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Aspect in Spring Boot?',
      answer: `<ol>
              <li>
                Aspect-Oriented Programming (AOP) allows separation of cross-cutting concerns like
                logging, security, and transactions.
              </li>
              <li>
                Aspects are modular units of code that can be applied across different parts of an
                application.
              </li>
              <li>
                In Spring, aspects are defined using
                <code>@Aspect</code>
                annotation and advice types like
                <code>@Before</code>
                ,
                <code>@After</code>
                , and
                <code>@Around</code>
                .
              </li>
              <li>
                Helps keep business logic clean and focused by moving repetitive code to aspects.
              </li>
              <li>Supports pointcuts to specify where advice should be applied.</li>
              <li>Improves maintainability and reduces code duplication.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Boot Scheduling?',
      answer: `<ol>
              <li>
                Spring Boot provides scheduling support using the
                <code>@Scheduled</code>
                annotation.
              </li>
              <li>
                Tasks can be scheduled to run at fixed intervals, delays, or cron expressions.
              </li>
              <li>
                Enable scheduling by adding
                <code>@EnableScheduling</code>
                to a configuration class.
              </li>
              <li>
                Common use cases include periodic data cleanup, report generation, and
                notifications.
              </li>
              <li>Supports both simple and complex scheduling needs with cron syntax.</li>
              <li>
                Scheduled methods must be
                <code>void</code>
                and have no arguments.
              </li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Security?',
      answer: `<ol>
              <li>
                Spring Security is a powerful framework for authentication and authorization in Java
                applications.
              </li>
              <li>
                Supports a wide range of security features, including form login, OAuth2, JWT, and
                LDAP integration.
              </li>
              <li>
                Provides method-level security using annotations like
                <code>@PreAuthorize</code>
                and
                <code>@Secured</code>
                .
              </li>
              <li>
                Enables protection against common vulnerabilities such as CSRF, XSS, and session
                fixation.
              </li>
              <li>Highly customizable to fit different security requirements.</li>
              <li>Integrates seamlessly with Spring Boot and Spring MVC.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Dependency Injection?',
      answer: `<ol>
              <li>
                Dependency Injection (DI) is a design pattern that allows objects to receive their
                dependencies from an external source.
              </li>
              <li>Spring supports DI through constructor, setter, and field injection.</li>
              <li>
                Promotes loose coupling and easier testing by decoupling object creation from
                business logic.
              </li>
              <li>
                Spring's IoC container manages the lifecycle and dependencies of beans
                automatically.
              </li>
              <li>
                DI helps in managing complex application dependencies and configuration in a
                centralized way.
              </li>
              <li>
                Improves code maintainability and flexibility by allowing easy swapping of
                implementations.
              </li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is a Spring Bean?',
      answer: `<ol>
              <li>A Spring Bean is an object managed by the Spring IoC container.</li>
              <li>
                Beans are defined using annotations like
                <code>@Component</code>
                ,
                <code>@Service</code>
                ,
                <code>@Repository</code>
                , or
                <code>@Bean</code>
                in configuration.
              </li>
              <li>
                Beans can have different scopes (singleton, prototype, request, session, etc.).
              </li>
              <li>Spring manages the lifecycle, dependencies, and configuration of beans.</li>
              <li>Beans can be injected into other beans using dependency injection.</li>
              <li>Central to building modular and testable Spring applications.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is the Spring Boot flow?',
      answer: `<ol>
              <li>
                Application starts with a class annotated with
                <code>@SpringBootApplication</code>
                .
              </li>
              <li>
                Spring Boot auto-configures beans and application settings based on dependencies.
              </li>
              <li>Dependency injection wires up controllers, services, and repositories.</li>
              <li>REST controllers handle HTTP requests and responses.</li>
              <li>
                Service layer contains business logic, and repository layer handles data access.
              </li>
              <li>Application connects to the database and exposes endpoints for clients.</li>
            </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is IoC?',
      answer: `<ol>
              <li>
                Inversion of Control (IoC) is a design principle where the control of object
                creation and management is transferred to a container or framework.
              </li>
              <li>
                In Spring, the IoC container is responsible for instantiating, configuring, and
                assembling beans.
              </li>
              <li>
                IoC enables loose coupling between components by removing direct dependencies.
              </li>
              <li>It allows for better separation of concerns and easier testing.</li>
              <li>
                IoC is implemented in Spring through dependency injection and bean configuration.
              </li>
              <li>It supports modular and scalable application design.</li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is @Entity?',
      answer: `<ol>
              <li>
                <code>@Entity</code>
                is a JPA annotation used to mark a class as a persistent entity.
              </li>
              <li>Each entity maps to a table in the database, and fields map to columns.</li>
              <li>
                Requires a primary key field annotated with
                <code>@Id</code>
                .
              </li>
              <li>
                Entities can have relationships with other entities (OneToOne, OneToMany, etc.).
              </li>
              <li>Used in ORM frameworks like Hibernate and Spring Data JPA.</li>
              <li>Supports automatic schema generation and mapping.</li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are the types of Spring Beans?',
      answer: `<ol>
              <li>
                <b>Singleton:</b>
                Only one instance of the bean is created per Spring container (default scope).
              </li>
              <li>
                <b>Prototype:</b>
                A new instance is created every time the bean is requested from the container.
              </li>
              <li>
                <b>Request:</b>
                A new bean instance is created for each HTTP request (web applications only).
              </li>
              <li>
                <b>Session:</b>
                A new bean instance is created for each HTTP session (web applications only).
              </li>
              <li>
                <b>Application:</b>
                A single bean instance is created for the lifecycle of a ServletContext (web
                applications only).
              </li>
              <li>
                <b>WebSocket:</b>
                A single bean instance is created for the lifecycle of a WebSocket session (web
                applications only).
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are the spring scopes?',
      answer: `<ol>
                <li>
                  <strong>Singleton:</strong>
                  Default scope, creates a single shared instance per Spring container.
                </li>
                <li>
                  <strong>Prototype:</strong>
                  Creates a new instance every time it is requested.
                </li>
                <li>
                  <strong>Request:</strong>
                  Scoped to an HTTP request (valid in web-aware applications).
                </li>
                <li>
                  <strong>Session:</strong>
                  Scoped to an HTTP session (valid in web-aware applications).
                </li>
                <li>
                  <strong>Application:</strong>
                  Scoped to the lifecycle of a ServletContext (valid in web-aware applications).
                </li>
                <li>
                  <strong>WebSocket:</strong>
                  Scoped to a WebSocket session (valid in web-aware applications).
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are the main modules of Spring?',
      answer: `<ol>
                <li>
                  <strong>Core Container:</strong>
                  Includes Core, Beans, Context, and Expression Language modules.
                </li>
                <li>
                  <strong>Data Access/Integration:</strong>
                  Includes JDBC, ORM, Transactions, and OXM modules.
                </li>
                <li>
                  <strong>Web:</strong>
                  Includes Web, Web MVC, WebFlux, and WebSockets modules.
                </li>
                <li>
                  <strong>AOP (Aspect-Oriented Programming):</strong>
                  Provides support for cross-cutting concerns like logging and security.
                </li>
                <li>
                  <strong>Instrumentation:</strong>
                  Supports class instrumentation and classloader implementations.
                </li>
                <li>
                  <strong>Test:</strong>
                  Provides support for testing Spring components with tools like JUnit and Mockito.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are the differences between Spring and Spring Boot?',
      answer: `<ol>
                <li>
                  <strong>Spring:</strong>
                  A comprehensive framework requiring manual configuration of beans, dependencies,
                  and XML files.
                </li>
                <li>
                  <strong>Spring Boot:</strong>
                  An opinionated framework built on top of Spring that simplifies development by
                  providing auto-configuration, embedded servers, and default settings.
                </li>
                <li>
                  <strong>Configuration:</strong>
                  Spring requires explicit configuration, while Spring Boot uses convention over
                  configuration.
                </li>
                <li>
                  <strong>Development Speed:</strong>
                  Spring Boot accelerates development with starters and minimal setup.
                </li>
                <li>
                  <strong>Deployment:</strong>
                  Spring Boot includes embedded servers (e.g., Tomcat), whereas Spring requires
                  external server setup.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are Transaction Isolation and propagation?',
      answer: `<ol>
                <li>
                  <strong>Transaction Isolation:</strong>
                  Defines how transactions interact with each other in terms of visibility and
                  locking.
                  <ul>
                    <li>
                      <strong>READ_UNCOMMITTED:</strong>
                      Allows dirty reads.
                    </li>
                    <li>
                      <strong>READ_COMMITTED:</strong>
                      Prevents dirty reads but allows non-repeatable reads.
                    </li>
                    <li>
                      <strong>REPEATABLE_READ:</strong>
                      Prevents dirty reads and non-repeatable reads but allows phantom reads.
                    </li>
                    <li>
                      <strong>SERIALIZABLE:</strong>
                      Prevents all types of anomalies but has the highest overhead.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Transaction Propagation:</strong>
                  Defines how transactions relate to each other when methods call one another.
                  <ul>
                    <li>
                      <strong>REQUIRED:</strong>
                      Supports an existing transaction or creates a new one.
                    </li>
                    <li>
                      <strong>REQUIRES_NEW:</strong>
                      Always creates a new transaction, suspending any existing one.
                    </li>
                    <li>
                      <strong>SUPPORTS:</strong>
                      Executes within a transaction if one exists; otherwise, executes
                      non-transactionally.
                    </li>
                    <li>
                      <strong>NOT_SUPPORTED:</strong>
                      Executes non-transactionally, suspending any existing transaction.
                    </li>
                    <li>
                      <strong>MANDATORY:</strong>
                      Requires an existing transaction; throws an exception if none exists.
                    </li>
                    <li>
                      <strong>NEVER:</strong>
                      Executes non-transactionally; throws an exception if a transaction exists.
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Differences between SOAP and REST?',
      answer: `<ol>
                <li>
                  <strong>Protocol vs Architecture:</strong>
                  <ul>
                    <li>
                      <strong>SOAP:</strong>
                      A protocol with strict standards (XML-based).
                    </li>
                    <li>
                      <strong>REST:</strong>
                      An architectural style that uses standard HTTP methods (GET, POST, PUT,
                      DELETE).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Data Format:</strong>
                  <ul>
                    <li>
                      <strong>SOAP:</strong>
                      Uses XML exclusively.
                    </li>
                    <li>
                      <strong>REST:</strong>
                      Supports multiple formats (JSON, XML, plain text).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Performance:</strong>
                  <ul>
                    <li>
                      <strong>SOAP:</strong>
                      Heavier due to XML parsing and strict standards.
                    </li>
                    <li>
                      <strong>REST:</strong>
                      Lightweight and faster due to JSON usage.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Security:</strong>
                  <ul>
                    <li>
                      <strong>SOAP:</strong>
                      Built-in WS-Security for enterprise-level security.
                    </li>
                    <li>
                      <strong>REST:</strong>
                      Relies on HTTPS and OAuth for security.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Use Cases:</strong>
                  <ul>
                    <li>
                      <strong>SOAP:</strong>
                      Suitable for enterprise-level applications requiring strict contracts.
                    </li>
                    <li>
                      <strong>REST:</strong>
                      Ideal for lightweight, scalable web services and mobile applications.
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to specify a specific profile in Spring Boot?',
      answer: `<ol>
              <li>
                Spring profiles allow you to define environment-specific configurations (e.g., dev,
                test, prod).
              </li>
              <li>
                Annotate beans or configuration classes with
                <code>@Profile("dev")</code>
                to load them only for a specific profile.
              </li>
              <li>
                Activate a profile by setting
                <code>spring.profiles.active=dev</code>
                in
                <code>application.properties</code>
                or as a command-line argument.
              </li>
              <li>
                Profiles help isolate beans and settings for different deployment environments,
                improving flexibility and testing.
              </li>
              <li>
                You can create profile-specific property files like
                <code>application-dev.properties</code>
                for further customization.
              </li>
              <li>
                Profiles can be combined (comma-separated) to activate multiple environments at
                once.
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Difference b/w Spring and Spring Boot?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>Spring</th>
                  <th>Spring Boot</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Requires manual configuration of beans, XML, and dependencies.</td>
                  <td>Provides auto-configuration and starter dependencies for rapid setup.</td>
                </tr>
                <tr>
                  <td>Needs external server setup (Tomcat, Jetty, etc.).</td>
                  <td>Embeds servers like Tomcat, Jetty, or Undertow by default.</td>
                </tr>
                <tr>
                  <td>Flexible but more boilerplate and setup required.</td>
                  <td>Opinionated defaults reduce boilerplate and speed up development.</td>
                </tr>
                <tr>
                  <td>Configuration is explicit and verbose.</td>
                  <td>Convention over configuration; minimal setup needed.</td>
                </tr>
                <tr>
                  <td>Best for complex, highly customized applications.</td>
                  <td>Best for microservices and rapid prototyping.</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Difference between @Controller and @RestController?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>@Controller</th>
                  <th>@RestController</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Used for traditional MVC web applications.</td>
                  <td>Used for RESTful web services and APIs.</td>
                </tr>
                <tr>
                  <td>Returns HTML views (JSP, Thymeleaf, etc.).</td>
                  <td>Returns JSON or XML data directly to the client.</td>
                </tr>
                <tr>
                  <td>
                    Requires
                    <code>@ResponseBody</code>
                    for data responses.
                  </td>
                  <td>
                    Combines
                    <code>@Controller</code>
                    and
                    <code>@ResponseBody</code>
                    for automatic serialization.
                  </td>
                </tr>
                <tr>
                  <td>Commonly used for web page rendering.</td>
                  <td>Commonly used for building REST APIs.</td>
                </tr>
                <tr>
                  <td>
                    Example:
                    <code>@Controller</code>
                  </td>
                  <td>
                    Example:
                    <code>@RestController</code>
                  </td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Difference between CrudRepository and JpaRepository?',
      answer: `<table class="table table-bordered">
              <thead>
                <tr>
                  <th>CrudRepository</th>
                  <th>JpaRepository</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Provides basic CRUD operations (save, find, delete, etc.).</td>
                  <td>Extends CrudRepository with additional JPA-specific features.</td>
                </tr>
                <tr>
                  <td>No support for pagination and sorting.</td>
                  <td>
                    Supports pagination and sorting with
                    <code>Pageable</code>
                    and
                    <code>Sort</code>
                    .
                  </td>
                </tr>
                <tr>
                  <td>Does not provide batch operations or flush methods.</td>
                  <td>
                    Includes batch operations,
                    <code>flush()</code>
                    , and
                    <code>deleteInBatch()</code>
                    .
                  </td>
                </tr>
                <tr>
                  <td>Suitable for simple CRUD use cases.</td>
                  <td>Recommended for advanced JPA features and custom queries.</td>
                </tr>
                <tr>
                  <td>
                    Interface:
                    <code>CrudRepository<T, ID></code>
                  </td>
                  <td>
                    Interface:
                    <code>JpaRepository<T, ID></code>
                  </td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How does auto-configuration work in Spring Boot?',
      answer: `<ol>
              <li>
                Auto-configuration is enabled by
                <code>@EnableAutoConfiguration</code>
                or
                <code>@SpringBootApplication</code>
                .
              </li>
              <li>
                Spring Boot scans the classpath for dependencies and applies sensible default
                configurations.
              </li>
              <li>
                Auto-configuration classes are listed in
                <code>META-INF/spring.factories</code>
                or
                <code>spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>
                .
              </li>
              <li>
                Beans and settings are registered automatically based on detected libraries (e.g.,
                DataSource, JPA, Security).
              </li>
              <li>
                Developers can override defaults by defining their own beans or using properties
                files.
              </li>
              <li>Reduces manual setup and speeds up application bootstrapping.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to override CRUD methods in JPA Repository?',
      answer: `<ol>
              <li>Override default methods by redeclaring them in your repository interface.</li>
              <li>
                Provide custom implementations in a separate class (e.g.,
                <code>BookRepositoryCustom</code>
                ).
              </li>
              <li>
                Use method naming conventions to define custom queries (e.g.,
                <code>findByTitle</code>
                ).
              </li>
              <li>
                Annotate methods with
                <code>@Query</code>
                for JPQL or native SQL queries.
              </li>
              <li>
                Spring Data automatically wires custom logic with standard repository methods.
              </li>
              <li>Supports projections and DTOs for custom result mapping.</li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Common Spring Boot Annotations',
      answer: `<ul>
              <li>
                <code>@SpringBootApplication</code>
                – Combines
                <code>@Configuration</code>
                ,
                <code>@EnableAutoConfiguration</code>
                , and
                <code>@ComponentScan</code>
              </li>
              <li>
                <code>@RestController</code>
                ,
                <code>@GetMapping</code>
                ,
                <code>@PostMapping</code>
              </li>
              <li>
                <code>@Autowired</code>
                ,
                <code>@Value</code>
              </li>
              <li>
                <code>@Component</code>
                ,
                <code>@Service</code>
                ,
                <code>@Repository</code>
              </li>
            </ul>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Which is faster: Native SQL or HQL?',
      answer: `Native SQL executes directly on the database engine, often yielding better performance
            for complex queries. HQL (Hibernate Query Language) is more abstract and portable across
            databases, but slightly slower. Choose native SQL for performance tuning and HQL for
            database-agnostic design.`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Data JPA?',
      answer: `Spring Data JPA simplifies JPA-based data access through repository interfaces like
            <code>JpaRepository</code>
            . It eliminates boilerplate code, supports method-name queries, and allows custom
            queries using
            <code>@Query</code>
            . It integrates seamlessly with Spring Boot for efficient persistence.`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is @SpringBootApplication?',
      answer: `This is a convenience annotation that includes
            <code>@Configuration</code>
            ,
            <code>@EnableAutoConfiguration</code>
            , and
            <code>@ComponentScan</code>
            . It marks the main class as the application’s entry point, enabling component scanning
            and automatic bean registration as part of Spring Boot’s startup process.`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to implement pagination in Spring Boot?',
      answer: `Use
            <code>Pageable</code>
            along with repository methods like
            <code>Page<Entity> findAll(Pageable pageable)</code>
            . You can create a pageable request using
            <code>PageRequest.of(page, size)</code>
            . This allows Spring Data to automatically handle limit/offset queries for paginated
            responses.`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Difference between REST Client and Feign Client?',
      answer: `<table class="table table-bordered mt-2">
              <thead>
                <tr>
                  <th>🔥 Feature</th>
                  <th>REST Client (RestTemplate/WebClient)</th>
                  <th>Feign Client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>✅ Type</td>
                  <td>Imperative or reactive API style</td>
                  <td>Declarative interface-driven HTTP client</td>
                </tr>
                <tr>
                  <td>✅ Boilerplate</td>
                  <td>Manual URL setup and serialization logic</td>
                  <td>Minimal—just define annotated interface</td>
                </tr>
                <tr>
                  <td>✅ Eureka Support</td>
                  <td>Requires external configuration</td>
                  <td>Built-in Ribbon + Eureka integration</td>
                </tr>
                <tr>
                  <td>✅ Customization</td>
                  <td>Custom interceptors in config</td>
                  <td>
                    Uses
                    <code>@Configuration</code>
                    and interceptors for tuning
                  </td>
                </tr>
                <tr>
                  <td>✅ Error Handling</td>
                  <td>Manual try/catch or controller advice</td>
                  <td>Supports ErrorDecoder for centralized error mapping</td>
                </tr>
              </tbody>
            </table>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Boot and features of Spring Boot?',
      answer: `<ol>
                <li>
                  <strong>Spring Boot:</strong>
                  A framework built on top of the Spring Framework that simplifies the development
                  of production-ready applications.
                </li>
                <li>
                  <strong>Features:</strong>
                  <ul>
                    <li>
                      Auto-configuration: Automatically configures the application based on
                      dependencies.
                    </li>
                    <li>Standalone: Embeds servers like Tomcat, Jetty, or Undertow.</li>
                    <li>
                      Opinionated: Provides default configurations to reduce boilerplate code.
                    </li>
                    <li>
                      Production-ready: Includes tools like Actuator for monitoring and managing
                      applications.
                    </li>
                    <li>
                      Externalized configuration: Supports properties files, YAML, environment
                      variables, etc.
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Transaction management in microservices (saga pattern)',
      answer: `<ol>
                <li>
                  <strong>Saga Pattern:</strong>
                  A design pattern for managing distributed transactions across microservices.
                </li>
                <li>
                  <strong>Types:</strong>
                  <ul>
                    <li>
                      <strong>Choreography:</strong>
                      Services communicate directly using events without a central coordinator.
                    </li>
                    <li>
                      <strong>Orchestration:</strong>
                      A central orchestrator coordinates the transaction flow between services.
                    </li>
                  </ul>
                </li>
                <li>Ensures consistency by compensating actions if any step fails.</li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to call another microservice?',
      answer: `<ol>
                <li>
                  Use REST APIs with libraries like
                  <code>RestTemplate</code>
                  ,
                  <code>WebClient</code>
                  , or Feign Client.
                </li>
                <li>
                  Example:
                  <pre><code>RestTemplate restTemplate = new RestTemplate();
  String url = "http://microservice-endpoint";
  ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);</code></pre>
                </li>
              </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is circuit breaker pattern?',
      answer: `<ol>
                <li>A design pattern to prevent cascading failures in distributed systems.</li>
                <li>
                  When a service fails repeatedly, the circuit breaker trips and stops further calls
                  to the failing service for a defined period.
                </li>
                <li>
                  Tools like
                  <code>Hystrix</code>
                  or
                  <code>Resilience4j</code>
                  implement this pattern.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Use of API gateway?',
      answer: `<ol>
                <li>Acts as a single entry point for clients to access multiple microservices.</li>
                <li>
                  <strong>Features:</strong>
                  <ul>
                    <li>Routing requests to appropriate microservices.</li>
                    <li>Authentication and authorization.</li>
                    <li>Load balancing and rate limiting.</li>
                    <li>Aggregation of responses from multiple services.</li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Annotations in Spring Boot?',
      answer: `<ol>
                <li>
                  <strong>Common Annotations:</strong>
                  <ul>
                    <li>
                      <code>@SpringBootApplication</code>
                      : Marks the main class of a Spring Boot application.
                    </li>
                    <li>
                      <code>@RestController</code>
                      : Combines
                      <code>@Controller</code>
                      and
                      <code>@ResponseBody</code>
                      .
                    </li>
                    <li>
                      <code>@Autowired</code>
                      : Injects dependencies automatically.
                    </li>
                    <li>
                      <code>@Component</code>
                      : Marks a class as a Spring-managed component.
                    </li>
                    <li>
                      <code>@Configuration</code>
                      : Defines a configuration class.
                    </li>
                    <li>
                      <code>@EnableAutoConfiguration</code>
                      : Enables auto-configuration of beans.
                    </li>
                  </ul>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How Spring Boot auto configures?',
      answer: `<ol>
                <li>
                  Spring Boot scans the classpath for dependencies and applies sensible defaults.
                </li>
                <li>
                  Uses
                  <code>@EnableAutoConfiguration</code>
                  to trigger auto-configuration.
                </li>
                <li>
                  Auto-configuration classes are defined in
                  <code>META-INF/spring.factories</code>
                  .
                </li>
                <li>Customizations can be made using properties files or overriding beans.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What happens with starter dependency?',
      answer: `<ol>
                <li>
                  Starter dependencies bundle commonly used libraries for specific functionalities.
                </li>
                <li>
                  Example:
                  <code>spring-boot-starter-web</code>
                  includes dependencies for building web applications.
                </li>
                <li>Reduces manual dependency management and provides pre-configured setups.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Spring Boot actuator?',
      answer: `<ol>
                <li>
                  Provides production-ready features like health checks, metrics, and monitoring
                  endpoints.
                </li>
                <li>
                  Endpoints include
                  <code>/actuator/health</code>
                  ,
                  <code>/actuator/metrics</code>
                  , etc.
                </li>
                <li>
                  Add the dependency
                  <code>spring-boot-starter-actuator</code>
                  to enable it.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Autowired and Bean difference?',
      answer: `<ol>
                <li>
                  <strong>@Autowired:</strong>
                  Injects a bean into another component (e.g., constructor, field, or method).
                </li>
                <li>
                  <strong>@Bean:</strong>
                  Marks a method to produce a bean managed by the Spring container.
                </li>
                <li>
                  <code>@Bean</code>
                  is used in configuration classes, while
                  <code>@Autowired</code>
                  is used for dependency injection.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Component and Bean difference?',
      answer: `<ol>
                <li>
                  <strong>@Component:</strong>
                  A generic stereotype for any Spring-managed component.
                </li>
                <li>
                  <strong>@Bean:</strong>
                  Used in configuration classes to define beans explicitly.
                </li>
                <li>
                  <code>@Component</code>
                  is class-level, while
                  <code>@Bean</code>
                  is method-level.
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Steps to disable default tomcat server?',
      answer: `<ol>
                <li>
                  Exclude the Tomcat dependency in
                  <code>pom.xml</code>
                  :
                  <pre><code><dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <exclusions>
    <exclusion>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
    </exclusion>
  </exclusions>
  </dependency></code></pre>
                </li>
                <li>Add another embedded server like Jetty or Undertow.</li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Resttemplate purposes?',
      answer: `<ol>
                <li>Used to consume RESTful web services.</li>
                <li>Supports HTTP methods like GET, POST, PUT, DELETE.</li>
                <li>
                  Example:
                  <pre><code>RestTemplate restTemplate = new RestTemplate();
  String url = "http://example.com/api";
  ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to change the server port?',
      answer: `<ol>
                <li>
                  In
                  <code>application.properties</code>
                  :
                  <pre><code>server.port=8081</code></pre>
                </li>
                <li>
                  Or in
                  <code>application.yml</code>
                  :
                  <pre><code>server:
  port: 8081</code></pre>
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring Actuator? How to enable them?',
      answer: `<ol>
                <li>
                  Spring Actuator provides production-ready features like health checks, metrics,
                  and monitoring endpoints.
                </li>
                <li>
                  To enable, add the dependency:
                  <pre><code><dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-actuator</artifactId>
  </dependency></code></pre>
                </li>
                <li>
                  Access endpoints like
                  <code>/actuator/health</code>
                  .
                </li>
              </ol>`,
      difficulty: 'Intermediate',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'Differences between @Controller and @RestController?',
      answer: `<ol>
                <li>
                  <strong>@Controller:</strong>
                  Used for traditional MVC controllers. Requires
                  <code>@ResponseBody</code>
                  for returning data.
                </li>
                <li>
                  <strong>@RestController:</strong>
                  Combines
                  <code>@Controller</code>
                  and
                  <code>@ResponseBody</code>
                  . Simplifies RESTful web services.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are profiles in SpringBoot and how to enable them?',
      answer: `<ol>
                <li>Profiles allow environment-specific configurations (e.g., dev, prod).</li>
                <li>
                  Enable profiles in
                  <code>application.properties</code>
                  :
                  <pre><code>spring.profiles.active=dev</code></pre>
                </li>
                <li>
                  Create profile-specific files like
                  <code>application-dev.properties</code>
                  .
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is @Qualifier?',
      answer: `<ol>
                <li>Used to resolve ambiguity when multiple beans of the same type exist.</li>
                <li>
                  Specifies which bean to inject:
                  <pre><code>@Autowired
  @Qualifier("beanName")
  private MyService myService;</code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to exclude the auto configuration?',
      answer: `<ol>
                <li>
                  Use
                  <code>@EnableAutoConfiguration</code>
                  with the
                  <code>exclude</code>
                  attribute:
                  <pre><code>@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})</code></pre>
                </li>
                <li>
                  Or in
                  <code>application.properties</code>
                  :
                  <pre><code>spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration</code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is Spring-boot-devtools?',
      answer: `<ol>
                <li>
                  Provides development-time features like automatic restarts and live reloads.
                </li>
                <li>
                  Improves developer productivity by reducing manual restarts during development.
                </li>
                <li>
                  Add the dependency:
                  <pre><code><dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-devtools</artifactId>
  </dependency></code></pre>
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How to get the configuration value in Spring Boot?',
      answer: `<ol>
                <li>
                  Use
                  <code>@Value</code>
                  annotation:
                  <pre><code>@Value("\${property.name}")
  private String propertyName;</code></pre>
                </li>
                <li>
                  Or use
                  <code>@ConfigurationProperties</code>
                  for complex configurations.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What are different design patterns for Microservices?',
      answer: `<ol>
                <li>
                  <strong>API Gateway:</strong>
                  Single entry point for clients.
                </li>
                <li>
                  <strong>Circuit Breaker:</strong>
                  Prevents cascading failures.
                </li>
                <li>
                  <strong>Database per Service:</strong>
                  Each service has its own database.
                </li>
                <li>
                  <strong>Event Sourcing:</strong>
                  Captures changes as a sequence of events.
                </li>
                <li>
                  <strong>CQRS:</strong>
                  Separates read and write operations.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is CSRF?',
      answer: `<ol>
                <li>
                  Cross-Site Request Forgery (CSRF) is an attack where unauthorized commands are
                  submitted on behalf of an authenticated user.
                </li>
                <li>Spring Security provides CSRF protection by default.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'What is idempotent request?',
      answer: `<ol>
                <li>
                  An idempotent request produces the same result regardless of how many times it is
                  executed.
                </li>
                <li>HTTP methods like GET, PUT, and DELETE are idempotent, while POST is not.</li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    },
    {
      question: 'How will you invoke other endpoints in Spring Boot?',
      answer: `<ol>
                <li>
                  Using
                  <code>RestTemplate</code>
                  :
                  <pre><code>RestTemplate restTemplate = new RestTemplate();
  String url = "http://example.com/api";
  ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);</code></pre>
                </li>
                <li>
                  Or using
                  <code>WebClient</code>
                  for reactive programming.
                </li>
              </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Spring Boot'
      ]
    }
  ]
};
