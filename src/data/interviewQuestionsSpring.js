// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.504Z

export const springQuestions = {
  "questions": [
    {
      "question": "What is Spring Framework?",
      "answer": "<ol>\n              <li>\n                Spring is a comprehensive, lightweight, open-source framework for building Java\n                applications.\n              </li>\n              <li>\n                It provides infrastructure support for developing Java applications, including\n                dependency injection, aspect-oriented programming, and transaction management.\n              </li>\n              <li>\n                Spring promotes loose coupling through dependency injection and inversion of control\n                (IoC).\n              </li>\n              <li>\n                It offers modules for data access, web applications, security, testing, and more.\n              </li>\n              <li>Spring can be used for both standalone and enterprise-level applications.</li>\n              <li>\n                It integrates easily with other frameworks and technologies, such as Hibernate, JPA,\n                and JMS.\n              </li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring is a comprehensive, lightweight, open-source framework for building Java applications.",
        "It provides infrastructure support for developing Java applications, including dependency injection, aspect-oriented programming, and transaction management.",
        "Spring promotes loose coupling through dependency injection and inversion of control (IoC)."
      ]
    },
    {
      "question": "What is Dependency Injection (DI)?",
      "answer": "<ol>\n              <li>\n                Dependency Injection is a design pattern that allows objects to receive their\n                dependencies from an external source rather than creating them internally.\n              </li>\n              <li>\n                In Spring, DI is achieved through constructor injection, setter injection, or field\n                injection.\n              </li>\n              <li>\n                It promotes loose coupling and easier unit testing by decoupling object creation\n                from business logic.\n              </li>\n              <li>\n                Spring's IoC container manages the lifecycle and dependencies of beans\n                automatically.\n              </li>\n              <li>\n                DI helps in managing complex application dependencies and configuration in a\n                centralized way.\n              </li>\n              <li>\n                It improves code maintainability and flexibility by allowing easy swapping of\n                implementations.\n              </li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Dependency Injection is a design pattern that allows objects to receive their dependencies from an external source rather than creating them internally.",
        "In Spring, DI is achieved through constructor injection, setter injection, or field injection.",
        "It promotes loose coupling and easier unit testing by decoupling object creation from business logic."
      ]
    },
    {
      "question": "What is Inversion of Control (IoC)?",
      "answer": "<ol>\n              <li>\n                IoC is a principle where the control of object creation and management is\n                transferred from the application code to a container or framework.\n              </li>\n              <li>\n                In Spring, the IoC container is responsible for instantiating, configuring, and\n                assembling beans.\n              </li>\n              <li>\n                IoC enables loose coupling between components by removing direct dependencies.\n              </li>\n              <li>It allows for better separation of concerns and easier testing.</li>\n              <li>\n                IoC is implemented in Spring through dependency injection and bean configuration.\n              </li>\n              <li>It supports modular and scalable application design.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "IoC is a principle where the control of object creation and management is transferred from the application code to a container or framework.",
        "In Spring, the IoC container is responsible for instantiating, configuring, and assembling beans.",
        "IoC enables loose coupling between components by removing direct dependencies."
      ]
    },
    {
      "question": "What are the different types of Spring Bean scopes?",
      "answer": "<ol>\n              <li>\n                <b>Singleton:</b>\n                Only one instance of the bean is created per Spring container (default scope).\n              </li>\n              <li>\n                <b>Prototype:</b>\n                A new instance is created every time the bean is requested from the container.\n              </li>\n              <li>\n                <b>Request:</b>\n                A new bean instance is created for each HTTP request (web applications only).\n              </li>\n              <li>\n                <b>Session:</b>\n                A new bean instance is created for each HTTP session (web applications only).\n              </li>\n              <li>\n                <b>Application:</b>\n                A single bean instance is created for the lifecycle of a ServletContext (web\n                applications only).\n              </li>\n              <li>\n                <b>WebSocket:</b>\n                A single bean instance is created for the lifecycle of a WebSocket session (web\n                applications only).\n              </li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Singleton: Only one instance of the bean is created per Spring container (default scope).",
        "Prototype: A new instance is created every time the bean is requested from the container.",
        "Request: A new bean instance is created for each HTTP request (web applications only)."
      ]
    },
    {
      "question": "What is the use of @Autowired annotation?",
      "answer": "<ol>\n              <li>\n                <code>@Autowired</code>\n                is used for automatic dependency injection in Spring.\n              </li>\n              <li>\n                It can be applied to constructors, fields, or setter methods to inject collaborating\n                beans.\n              </li>\n              <li>\n                Spring resolves and injects the required bean automatically based on type (and\n                optionally by name with\n                <code>@Qualifier</code>\n                ).\n              </li>\n              <li>It reduces boilerplate code and manual wiring of dependencies.</li>\n              <li>\n                It supports both required and optional dependencies (using\n                <code>required=false</code>\n                ).\n              </li>\n              <li>It works with both XML and annotation-based configuration.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Autowired is used for automatic dependency injection in Spring.",
        "It can be applied to constructors, fields, or setter methods to inject collaborating beans.",
        "Spring resolves and injects the required bean automatically based on type (and optionally by name with @Qualifier )."
      ]
    },
    {
      "question": "What is the difference between @Component , @Service , @Repository , and @Controller ?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Annotation</th>\n                  <th>Purpose</th>\n                  <th>Typical Usage</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><code>@Component</code></td>\n                  <td>Generic stereotype for any Spring-managed component.</td>\n                  <td>Any bean not fitting other stereotypes.</td>\n                </tr>\n                <tr>\n                  <td><code>@Service</code></td>\n                  <td>\n                    Specialization of\n                    <code>@Component</code>\n                    for service layer beans.\n                  </td>\n                  <td>Business logic and service classes.</td>\n                </tr>\n                <tr>\n                  <td><code>@Repository</code></td>\n                  <td>\n                    Specialization of\n                    <code>@Component</code>\n                    for data access objects (DAOs).\n                  </td>\n                  <td>Persistence, database operations, exception translation.</td>\n                </tr>\n                <tr>\n                  <td><code>@Controller</code></td>\n                  <td>\n                    Specialization of\n                    <code>@Component</code>\n                    for web controllers in Spring MVC.\n                  </td>\n                  <td>Handling HTTP requests and responses.</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Annotation Purpose Typical Usage @Component Generic stereotype for any Spring-managed component.",
        "Any bean not fitting other stereotypes."
      ]
    },
    {
      "question": "What is Spring Boot?",
      "answer": "<ol>\n              <li>\n                Spring Boot is a framework built on top of Spring to simplify application setup and\n                development.\n              </li>\n              <li>\n                It provides auto-configuration, embedded servers (Tomcat, Jetty), and\n                production-ready features.\n              </li>\n              <li>\n                Spring Boot eliminates the need for extensive XML configuration and boilerplate\n                code.\n              </li>\n              <li>\n                It offers starter dependencies for rapid development and easy integration with other\n                technologies.\n              </li>\n              <li>\n                Spring Boot includes built-in tools for monitoring, health checks, and metrics.\n              </li>\n              <li>\n                It is ideal for creating stand-alone, production-grade Spring applications quickly.\n              </li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Boot is a framework built on top of Spring to simplify application setup and development.",
        "It provides auto-configuration, embedded servers (Tomcat, Jetty), and production-ready features.",
        "Spring Boot eliminates the need for extensive XML configuration and boilerplate code."
      ]
    },
    {
      "question": "What is the purpose of application.properties or application.yml ?",
      "answer": "<ol>\n              <li>\n                These files are used to configure application settings in a Spring Boot application.\n              </li>\n              <li>\n                They allow you to set database URLs, server ports, logging levels, and other\n                properties.\n              </li>\n              <li>\n                They support hierarchical and environment-specific configuration (e.g.,\n                <code>application-dev.properties</code>\n                ).\n              </li>\n              <li>\n                They can be used to externalize configuration for different deployment environments.\n              </li>\n              <li>\n                Both\n                <code>.properties</code>\n                and\n                <code>.yml</code>\n                formats are supported for flexibility.\n              </li>\n              <li>They help keep configuration separate from code, improving maintainability.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "These files are used to configure application settings in a Spring Boot application.",
        "They allow you to set database URLs, server ports, logging levels, and other properties.",
        "They support hierarchical and environment-specific configuration (e.g., application-dev.properties )."
      ]
    },
    {
      "question": "How do you handle exceptions in Spring Boot?",
      "answer": "<ol>\n              <li>\n                Use\n                <code>@ControllerAdvice</code>\n                to define global exception handlers for controllers.\n              </li>\n              <li>\n                Use\n                <code>@ExceptionHandler</code>\n                methods to handle specific exceptions.\n              </li>\n              <li>Return custom error responses or views for different exception types.</li>\n              <li>\n                Spring Boot provides a default error page and JSON error response for REST APIs.\n              </li>\n              <li>\n                You can customize error handling using\n                <code>ErrorController</code>\n                or\n                <code>ResponseEntityExceptionHandler</code>\n                .\n              </li>\n              <li>Exception handling improves user experience and application robustness.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Use @ControllerAdvice to define global exception handlers for controllers.",
        "Use @ExceptionHandler methods to handle specific exceptions.",
        "Return custom error responses or views for different exception types."
      ]
    },
    {
      "question": "What is Spring Data JPA?",
      "answer": "<ol>\n              <li>\n                Spring Data JPA is a part of the Spring Data project for simplifying data access\n                using JPA (Java Persistence API).\n              </li>\n              <li>\n                It provides repository interfaces like\n                <code>JpaRepository</code>\n                and\n                <code>CrudRepository</code>\n                for CRUD operations.\n              </li>\n              <li>\n                It supports custom query methods using method naming conventions and\n                <code>@Query</code>\n                annotation.\n              </li>\n              <li>\n                Spring Data JPA handles entity mapping, transactions, and pagination automatically.\n              </li>\n              <li>It integrates with various databases and supports auditing and projections.</li>\n              <li>It reduces boilerplate code for data access layers.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Data JPA is a part of the Spring Data project for simplifying data access using JPA (Java Persistence API).",
        "It provides repository interfaces like JpaRepository and CrudRepository for CRUD operations.",
        "It supports custom query methods using method naming conventions and @Query annotation."
      ]
    },
    {
      "question": "What is the difference between Monolithic and Microservice Architecture?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Monolithic Architecture</th>\n                  <th>Microservice Architecture</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Single, unified application with tightly coupled components.</td>\n                  <td>\n                    Composed of independent, loosely coupled services for each business feature.\n                  </td>\n                </tr>\n                <tr>\n                  <td>All modules are deployed together as a single unit.</td>\n                  <td>Each service can be developed, deployed, and scaled independently.</td>\n                </tr>\n                <tr>\n                  <td>Technology stack is usually uniform across the application.</td>\n                  <td>Different services can use different technology stacks and databases.</td>\n                </tr>\n                <tr>\n                  <td>Scaling requires scaling the entire application.</td>\n                  <td>Only the required services can be scaled as needed.</td>\n                </tr>\n                <tr>\n                  <td>Failure in one module can affect the entire application.</td>\n                  <td>Failure in one service does not impact others directly.</td>\n                </tr>\n                <tr>\n                  <td>Simple to develop initially but becomes complex as it grows.</td>\n                  <td>More complex to set up but easier to maintain and scale in the long run.</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Monolithic Architecture Microservice Architecture Single, unified application with tightly coupled components.",
        "Composed of independent, loosely coupled services for each business feature."
      ]
    },
    {
      "question": "How does Spring Boot interact with the databases?",
      "answer": "<ol>\n              <li>\n                Spring Boot uses Spring Data JPA, JDBC, or other data access modules to interact\n                with databases.\n              </li>\n              <li>\n                Entities are defined using\n                <code>@Entity</code>\n                annotation, mapping Java classes to database tables.\n              </li>\n              <li>\n                Repositories like\n                <code>JpaRepository</code>\n                and\n                <code>CrudRepository</code>\n                provide CRUD operations without boilerplate code.\n              </li>\n              <li>\n                Database connection details (URL, username, password, dialect) are configured in\n                <code>application.properties</code>\n                or\n                <code>application.yml</code>\n                .\n              </li>\n              <li>\n                Supports automatic schema generation and database initialization using properties\n                like\n                <code>spring.jpa.hibernate.ddl-auto</code>\n                .\n              </li>\n              <li>\n                Enables transaction management, connection pooling, and supports multiple databases\n                (MySQL, PostgreSQL, Oracle, etc.).\n              </li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Boot uses Spring Data JPA, JDBC, or other data access modules to interact with databases.",
        "Entities are defined using @Entity annotation, mapping Java classes to database tables.",
        "Repositories like JpaRepository and CrudRepository provide CRUD operations without boilerplate code."
      ]
    },
    {
      "question": "What is MVC (Model-View-Controller)?",
      "answer": "<ol>\n              <li>\n                MVC is a design pattern that separates an application into three main components:\n                Model, View, and Controller.\n              </li>\n              <li>\n                <b>Model:</b>\n                Represents the application's data and business logic.\n              </li>\n              <li>\n                <b>View:</b>\n                Handles the display and presentation of data to the user (UI).\n              </li>\n              <li>\n                <b>Controller:</b>\n                Processes user input, interacts with the model, and selects the view for response.\n              </li>\n              <li>Promotes separation of concerns, making code more modular and maintainable.</li>\n              <li>Spring MVC implements this pattern for building robust web applications.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "MVC is a design pattern that separates an application into three main components: Model, View, and Controller.",
        "Model: Represents the application's data and business logic.",
        "View: Handles the display and presentation of data to the user (UI)."
      ]
    },
    {
      "question": "What is LazyInitializationException?",
      "answer": "<ol>\n              <li>\n                Occurs when a lazily loaded association or collection is accessed outside the\n                Hibernate session.\n              </li>\n              <li>\n                Common in ORM frameworks like Hibernate and JPA when using\n                <code>FetchType.LAZY</code>\n                .\n              </li>\n              <li>\n                Can be fixed by fetching the data within an open session or using\n                <code>FetchType.EAGER</code>\n                for immediate loading.\n              </li>\n              <li>\n                DTO projection or\n                <code>@Transactional</code>\n                methods can help avoid this exception.\n              </li>\n              <li>Indicates improper session management or detached entities.</li>\n              <li>Best practice is to design data access layers to avoid lazy loading issues.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Occurs when a lazily loaded association or collection is accessed outside the Hibernate session.",
        "Common in ORM frameworks like Hibernate and JPA when using FetchType.LAZY .",
        "Can be fixed by fetching the data within an open session or using FetchType.EAGER for immediate loading."
      ]
    },
    {
      "question": "What is Metaspace in Java?",
      "answer": "<ol>\n              <li>\n                Metaspace is a memory area in Java 8 and above that stores class metadata (class\n                definitions, methods, etc.).\n              </li>\n              <li>Replaces the PermGen space used in earlier Java versions.</li>\n              <li>Metaspace grows automatically as needed, limited only by system memory.</li>\n              <li>\n                Helps avoid\n                <code>OutOfMemoryError: PermGen space</code>\n                issues from previous Java versions.\n              </li>\n              <li>\n                Can be tuned using JVM options like\n                <code>-XX:MaxMetaspaceSize</code>\n                .\n              </li>\n              <li>Improves class loading and unloading efficiency in large applications.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Metaspace is a memory area in Java 8 and above that stores class metadata (class definitions, methods, etc.).",
        "Replaces the PermGen space used in earlier Java versions.",
        "Metaspace grows automatically as needed, limited only by system memory."
      ]
    },
    {
      "question": "What is @Transactional in Spring?",
      "answer": "<ol>\n              <li>\n                <code>@Transactional</code>\n                is an annotation used to define transactional boundaries for methods or classes.\n              </li>\n              <li>\n                Ensures that a series of operations are executed within a single transaction\n                context.\n              </li>\n              <li>If an exception occurs, the transaction is rolled back automatically.</li>\n              <li>\n                Supports configuration of isolation levels, propagation behavior, and rollback\n                rules.\n              </li>\n              <li>Can be applied at the service or repository layer for data consistency.</li>\n              <li>Improves reliability and integrity of database operations.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Transactional is an annotation used to define transactional boundaries for methods or classes.",
        "Ensures that a series of operations are executed within a single transaction context.",
        "If an exception occurs, the transaction is rolled back automatically."
      ]
    },
    {
      "question": "What is Aspect in Spring Boot?",
      "answer": "<ol>\n              <li>\n                Aspect-Oriented Programming (AOP) allows separation of cross-cutting concerns like\n                logging, security, and transactions.\n              </li>\n              <li>\n                Aspects are modular units of code that can be applied across different parts of an\n                application.\n              </li>\n              <li>\n                In Spring, aspects are defined using\n                <code>@Aspect</code>\n                annotation and advice types like\n                <code>@Before</code>\n                ,\n                <code>@After</code>\n                , and\n                <code>@Around</code>\n                .\n              </li>\n              <li>\n                Helps keep business logic clean and focused by moving repetitive code to aspects.\n              </li>\n              <li>Supports pointcuts to specify where advice should be applied.</li>\n              <li>Improves maintainability and reduces code duplication.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Aspect-Oriented Programming (AOP) allows separation of cross-cutting concerns like logging, security, and transactions.",
        "Aspects are modular units of code that can be applied across different parts of an application.",
        "In Spring, aspects are defined using @Aspect annotation and advice types like @Before , @After , and @Around ."
      ]
    },
    {
      "question": "What is Spring Boot Scheduling?",
      "answer": "<ol>\n              <li>\n                Spring Boot provides scheduling support using the\n                <code>@Scheduled</code>\n                annotation.\n              </li>\n              <li>\n                Tasks can be scheduled to run at fixed intervals, delays, or cron expressions.\n              </li>\n              <li>\n                Enable scheduling by adding\n                <code>@EnableScheduling</code>\n                to a configuration class.\n              </li>\n              <li>\n                Common use cases include periodic data cleanup, report generation, and\n                notifications.\n              </li>\n              <li>Supports both simple and complex scheduling needs with cron syntax.</li>\n              <li>\n                Scheduled methods must be\n                <code>void</code>\n                and have no arguments.\n              </li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Boot provides scheduling support using the @Scheduled annotation.",
        "Tasks can be scheduled to run at fixed intervals, delays, or cron expressions.",
        "Enable scheduling by adding @EnableScheduling to a configuration class."
      ]
    },
    {
      "question": "What is Spring Security?",
      "answer": "<ol>\n              <li>\n                Spring Security is a powerful framework for authentication and authorization in Java\n                applications.\n              </li>\n              <li>\n                Supports a wide range of security features, including form login, OAuth2, JWT, and\n                LDAP integration.\n              </li>\n              <li>\n                Provides method-level security using annotations like\n                <code>@PreAuthorize</code>\n                and\n                <code>@Secured</code>\n                .\n              </li>\n              <li>\n                Enables protection against common vulnerabilities such as CSRF, XSS, and session\n                fixation.\n              </li>\n              <li>Highly customizable to fit different security requirements.</li>\n              <li>Integrates seamlessly with Spring Boot and Spring MVC.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Security is a powerful framework for authentication and authorization in Java applications.",
        "Supports a wide range of security features, including form login, OAuth2, JWT, and LDAP integration.",
        "Provides method-level security using annotations like @PreAuthorize and @Secured ."
      ]
    },
    {
      "question": "What is Dependency Injection?",
      "answer": "<ol>\n              <li>\n                Dependency Injection (DI) is a design pattern that allows objects to receive their\n                dependencies from an external source.\n              </li>\n              <li>Spring supports DI through constructor, setter, and field injection.</li>\n              <li>\n                Promotes loose coupling and easier testing by decoupling object creation from\n                business logic.\n              </li>\n              <li>\n                Spring's IoC container manages the lifecycle and dependencies of beans\n                automatically.\n              </li>\n              <li>\n                DI helps in managing complex application dependencies and configuration in a\n                centralized way.\n              </li>\n              <li>\n                Improves code maintainability and flexibility by allowing easy swapping of\n                implementations.\n              </li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Dependency Injection (DI) is a design pattern that allows objects to receive their dependencies from an external source.",
        "Spring supports DI through constructor, setter, and field injection.",
        "Promotes loose coupling and easier testing by decoupling object creation from business logic."
      ]
    },
    {
      "question": "What is a Spring Bean?",
      "answer": "<ol>\n              <li>A Spring Bean is an object managed by the Spring IoC container.</li>\n              <li>\n                Beans are defined using annotations like\n                <code>@Component</code>\n                ,\n                <code>@Service</code>\n                ,\n                <code>@Repository</code>\n                , or\n                <code>@Bean</code>\n                in configuration.\n              </li>\n              <li>\n                Beans can have different scopes (singleton, prototype, request, session, etc.).\n              </li>\n              <li>Spring manages the lifecycle, dependencies, and configuration of beans.</li>\n              <li>Beans can be injected into other beans using dependency injection.</li>\n              <li>Central to building modular and testable Spring applications.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "A Spring Bean is an object managed by the Spring IoC container.",
        "Beans are defined using annotations like @Component , @Service , @Repository , or @Bean in configuration.",
        "Beans can have different scopes (singleton, prototype, request, session, etc.)."
      ]
    },
    {
      "question": "What is the Spring Boot flow?",
      "answer": "<ol>\n              <li>\n                Application starts with a class annotated with\n                <code>@SpringBootApplication</code>\n                .\n              </li>\n              <li>\n                Spring Boot auto-configures beans and application settings based on dependencies.\n              </li>\n              <li>Dependency injection wires up controllers, services, and repositories.</li>\n              <li>REST controllers handle HTTP requests and responses.</li>\n              <li>\n                Service layer contains business logic, and repository layer handles data access.\n              </li>\n              <li>Application connects to the database and exposes endpoints for clients.</li>\n            </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Application starts with a class annotated with @SpringBootApplication .",
        "Spring Boot auto-configures beans and application settings based on dependencies.",
        "Dependency injection wires up controllers, services, and repositories."
      ]
    },
    {
      "question": "What is IoC?",
      "answer": "<ol>\n              <li>\n                Inversion of Control (IoC) is a design principle where the control of object\n                creation and management is transferred to a container or framework.\n              </li>\n              <li>\n                In Spring, the IoC container is responsible for instantiating, configuring, and\n                assembling beans.\n              </li>\n              <li>\n                IoC enables loose coupling between components by removing direct dependencies.\n              </li>\n              <li>It allows for better separation of concerns and easier testing.</li>\n              <li>\n                IoC is implemented in Spring through dependency injection and bean configuration.\n              </li>\n              <li>It supports modular and scalable application design.</li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Inversion of Control (IoC) is a design principle where the control of object creation and management is transferred to a container or framework.",
        "In Spring, the IoC container is responsible for instantiating, configuring, and assembling beans.",
        "IoC enables loose coupling between components by removing direct dependencies."
      ]
    },
    {
      "question": "What is @Entity?",
      "answer": "<ol>\n              <li>\n                <code>@Entity</code>\n                is a JPA annotation used to mark a class as a persistent entity.\n              </li>\n              <li>Each entity maps to a table in the database, and fields map to columns.</li>\n              <li>\n                Requires a primary key field annotated with\n                <code>@Id</code>\n                .\n              </li>\n              <li>\n                Entities can have relationships with other entities (OneToOne, OneToMany, etc.).\n              </li>\n              <li>Used in ORM frameworks like Hibernate and Spring Data JPA.</li>\n              <li>Supports automatic schema generation and mapping.</li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Entity is a JPA annotation used to mark a class as a persistent entity.",
        "Each entity maps to a table in the database, and fields map to columns.",
        "Requires a primary key field annotated with @Id ."
      ]
    },
    {
      "question": "What are the types of Spring Beans?",
      "answer": "<ol>\n              <li>\n                <b>Singleton:</b>\n                Only one instance of the bean is created per Spring container (default scope).\n              </li>\n              <li>\n                <b>Prototype:</b>\n                A new instance is created every time the bean is requested from the container.\n              </li>\n              <li>\n                <b>Request:</b>\n                A new bean instance is created for each HTTP request (web applications only).\n              </li>\n              <li>\n                <b>Session:</b>\n                A new bean instance is created for each HTTP session (web applications only).\n              </li>\n              <li>\n                <b>Application:</b>\n                A single bean instance is created for the lifecycle of a ServletContext (web\n                applications only).\n              </li>\n              <li>\n                <b>WebSocket:</b>\n                A single bean instance is created for the lifecycle of a WebSocket session (web\n                applications only).\n              </li>\n            </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Singleton: Only one instance of the bean is created per Spring container (default scope).",
        "Prototype: A new instance is created every time the bean is requested from the container.",
        "Request: A new bean instance is created for each HTTP request (web applications only)."
      ]
    },
    {
      "question": "What are the spring scopes?",
      "answer": "<ol>\n                <li>\n                  <strong>Singleton:</strong>\n                  Default scope, creates a single shared instance per Spring container.\n                </li>\n                <li>\n                  <strong>Prototype:</strong>\n                  Creates a new instance every time it is requested.\n                </li>\n                <li>\n                  <strong>Request:</strong>\n                  Scoped to an HTTP request (valid in web-aware applications).\n                </li>\n                <li>\n                  <strong>Session:</strong>\n                  Scoped to an HTTP session (valid in web-aware applications).\n                </li>\n                <li>\n                  <strong>Application:</strong>\n                  Scoped to the lifecycle of a ServletContext (valid in web-aware applications).\n                </li>\n                <li>\n                  <strong>WebSocket:</strong>\n                  Scoped to a WebSocket session (valid in web-aware applications).\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Singleton: Default scope, creates a single shared instance per Spring container.",
        "Prototype: Creates a new instance every time it is requested.",
        "Request: Scoped to an HTTP request (valid in web-aware applications)."
      ]
    },
    {
      "question": "What are the main modules of Spring?",
      "answer": "<ol>\n                <li>\n                  <strong>Core Container:</strong>\n                  Includes Core, Beans, Context, and Expression Language modules.\n                </li>\n                <li>\n                  <strong>Data Access/Integration:</strong>\n                  Includes JDBC, ORM, Transactions, and OXM modules.\n                </li>\n                <li>\n                  <strong>Web:</strong>\n                  Includes Web, Web MVC, WebFlux, and WebSockets modules.\n                </li>\n                <li>\n                  <strong>AOP (Aspect-Oriented Programming):</strong>\n                  Provides support for cross-cutting concerns like logging and security.\n                </li>\n                <li>\n                  <strong>Instrumentation:</strong>\n                  Supports class instrumentation and classloader implementations.\n                </li>\n                <li>\n                  <strong>Test:</strong>\n                  Provides support for testing Spring components with tools like JUnit and Mockito.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Core Container: Includes Core, Beans, Context, and Expression Language modules.",
        "Data Access/Integration: Includes JDBC, ORM, Transactions, and OXM modules.",
        "Web: Includes Web, Web MVC, WebFlux, and WebSockets modules."
      ]
    },
    {
      "question": "What are the differences between Spring and Spring Boot?",
      "answer": "<ol>\n                <li>\n                  <strong>Spring:</strong>\n                  A comprehensive framework requiring manual configuration of beans, dependencies,\n                  and XML files.\n                </li>\n                <li>\n                  <strong>Spring Boot:</strong>\n                  An opinionated framework built on top of Spring that simplifies development by\n                  providing auto-configuration, embedded servers, and default settings.\n                </li>\n                <li>\n                  <strong>Configuration:</strong>\n                  Spring requires explicit configuration, while Spring Boot uses convention over\n                  configuration.\n                </li>\n                <li>\n                  <strong>Development Speed:</strong>\n                  Spring Boot accelerates development with starters and minimal setup.\n                </li>\n                <li>\n                  <strong>Deployment:</strong>\n                  Spring Boot includes embedded servers (e.g., Tomcat), whereas Spring requires\n                  external server setup.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring: A comprehensive framework requiring manual configuration of beans, dependencies, and XML files.",
        "Spring Boot: An opinionated framework built on top of Spring that simplifies development by providing auto-configuration, embedded servers, and default settings.",
        "Configuration: Spring requires explicit configuration, while Spring Boot uses convention over configuration."
      ]
    },
    {
      "question": "What are Transaction Isolation and propagation?",
      "answer": "<ol>\n                <li>\n                  <strong>Transaction Isolation:</strong>\n                  Defines how transactions interact with each other in terms of visibility and\n                  locking.\n                  <ul>\n                    <li>\n                      <strong>READ_UNCOMMITTED:</strong>\n                      Allows dirty reads.\n                    </li>\n                    <li>\n                      <strong>READ_COMMITTED:</strong>\n                      Prevents dirty reads but allows non-repeatable reads.\n                    </li>\n                    <li>\n                      <strong>REPEATABLE_READ:</strong>\n                      Prevents dirty reads and non-repeatable reads but allows phantom reads.\n                    </li>\n                    <li>\n                      <strong>SERIALIZABLE:</strong>\n                      Prevents all types of anomalies but has the highest overhead.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Transaction Propagation:</strong>\n                  Defines how transactions relate to each other when methods call one another.\n                  <ul>\n                    <li>\n                      <strong>REQUIRED:</strong>\n                      Supports an existing transaction or creates a new one.\n                    </li>\n                    <li>\n                      <strong>REQUIRES_NEW:</strong>\n                      Always creates a new transaction, suspending any existing one.\n                    </li>\n                    <li>\n                      <strong>SUPPORTS:</strong>\n                      Executes within a transaction if one exists; otherwise, executes\n                      non-transactionally.\n                    </li>\n                    <li>\n                      <strong>NOT_SUPPORTED:</strong>\n                      Executes non-transactionally, suspending any existing transaction.\n                    </li>\n                    <li>\n                      <strong>MANDATORY:</strong>\n                      Requires an existing transaction; throws an exception if none exists.\n                    </li>\n                    <li>\n                      <strong>NEVER:</strong>\n                      Executes non-transactionally; throws an exception if a transaction exists.\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Transaction Isolation: Defines how transactions interact with each other in terms of visibility and locking. READ_UNCOMMITTED: Allows dirty reads.",
        "READ_COMMITTED: Prevents dirty reads but allows non-repeatable reads.",
        "REPEATABLE_READ: Prevents dirty reads and non-repeatable reads but allows phantom reads."
      ]
    },
    {
      "question": "Differences between SOAP and REST?",
      "answer": "<ol>\n                <li>\n                  <strong>Protocol vs Architecture:</strong>\n                  <ul>\n                    <li>\n                      <strong>SOAP:</strong>\n                      A protocol with strict standards (XML-based).\n                    </li>\n                    <li>\n                      <strong>REST:</strong>\n                      An architectural style that uses standard HTTP methods (GET, POST, PUT,\n                      DELETE).\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Data Format:</strong>\n                  <ul>\n                    <li>\n                      <strong>SOAP:</strong>\n                      Uses XML exclusively.\n                    </li>\n                    <li>\n                      <strong>REST:</strong>\n                      Supports multiple formats (JSON, XML, plain text).\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Performance:</strong>\n                  <ul>\n                    <li>\n                      <strong>SOAP:</strong>\n                      Heavier due to XML parsing and strict standards.\n                    </li>\n                    <li>\n                      <strong>REST:</strong>\n                      Lightweight and faster due to JSON usage.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Security:</strong>\n                  <ul>\n                    <li>\n                      <strong>SOAP:</strong>\n                      Built-in WS-Security for enterprise-level security.\n                    </li>\n                    <li>\n                      <strong>REST:</strong>\n                      Relies on HTTPS and OAuth for security.\n                    </li>\n                  </ul>\n                </li>\n                <li>\n                  <strong>Use Cases:</strong>\n                  <ul>\n                    <li>\n                      <strong>SOAP:</strong>\n                      Suitable for enterprise-level applications requiring strict contracts.\n                    </li>\n                    <li>\n                      <strong>REST:</strong>\n                      Ideal for lightweight, scalable web services and mobile applications.\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Protocol vs Architecture: SOAP: A protocol with strict standards (XML-based).",
        "REST: An architectural style that uses standard HTTP methods (GET, POST, PUT, DELETE).",
        "Data Format: SOAP: Uses XML exclusively."
      ]
    },
    {
      "question": "How to specify a specific profile in Spring Boot?",
      "answer": "<ol>\n              <li>\n                Spring profiles allow you to define environment-specific configurations (e.g., dev,\n                test, prod).\n              </li>\n              <li>\n                Annotate beans or configuration classes with\n                <code>@Profile(\"dev\")</code>\n                to load them only for a specific profile.\n              </li>\n              <li>\n                Activate a profile by setting\n                <code>spring.profiles.active=dev</code>\n                in\n                <code>application.properties</code>\n                or as a command-line argument.\n              </li>\n              <li>\n                Profiles help isolate beans and settings for different deployment environments,\n                improving flexibility and testing.\n              </li>\n              <li>\n                You can create profile-specific property files like\n                <code>application-dev.properties</code>\n                for further customization.\n              </li>\n              <li>\n                Profiles can be combined (comma-separated) to activate multiple environments at\n                once.\n              </li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring profiles allow you to define environment-specific configurations (e.g., dev, test, prod).",
        "Annotate beans or configuration classes with @Profile(\"dev\") to load them only for a specific profile.",
        "Activate a profile by setting spring.profiles.active=dev in application.properties or as a command-line argument."
      ]
    },
    {
      "question": "Difference b/w Spring and Spring Boot?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Spring</th>\n                  <th>Spring Boot</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Requires manual configuration of beans, XML, and dependencies.</td>\n                  <td>Provides auto-configuration and starter dependencies for rapid setup.</td>\n                </tr>\n                <tr>\n                  <td>Needs external server setup (Tomcat, Jetty, etc.).</td>\n                  <td>Embeds servers like Tomcat, Jetty, or Undertow by default.</td>\n                </tr>\n                <tr>\n                  <td>Flexible but more boilerplate and setup required.</td>\n                  <td>Opinionated defaults reduce boilerplate and speed up development.</td>\n                </tr>\n                <tr>\n                  <td>Configuration is explicit and verbose.</td>\n                  <td>Convention over configuration; minimal setup needed.</td>\n                </tr>\n                <tr>\n                  <td>Best for complex, highly customized applications.</td>\n                  <td>Best for microservices and rapid prototyping.</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Spring Boot Requires manual configuration of beans, XML, and dependencies.",
        "Provides auto-configuration and starter dependencies for rapid setup."
      ]
    },
    {
      "question": "Difference between @Controller and @RestController?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>@Controller</th>\n                  <th>@RestController</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Used for traditional MVC web applications.</td>\n                  <td>Used for RESTful web services and APIs.</td>\n                </tr>\n                <tr>\n                  <td>Returns HTML views (JSP, Thymeleaf, etc.).</td>\n                  <td>Returns JSON or XML data directly to the client.</td>\n                </tr>\n                <tr>\n                  <td>\n                    Requires\n                    <code>@ResponseBody</code>\n                    for data responses.\n                  </td>\n                  <td>\n                    Combines\n                    <code>@Controller</code>\n                    and\n                    <code>@ResponseBody</code>\n                    for automatic serialization.\n                  </td>\n                </tr>\n                <tr>\n                  <td>Commonly used for web page rendering.</td>\n                  <td>Commonly used for building REST APIs.</td>\n                </tr>\n                <tr>\n                  <td>\n                    Example:\n                    <code>@Controller</code>\n                  </td>\n                  <td>\n                    Example:\n                    <code>@RestController</code>\n                  </td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Controller @RestController Used for traditional MVC web applications.",
        "Used for RESTful web services and APIs."
      ]
    },
    {
      "question": "Difference between CrudRepository and JpaRepository?",
      "answer": "<table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>CrudRepository</th>\n                  <th>JpaRepository</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Provides basic CRUD operations (save, find, delete, etc.).</td>\n                  <td>Extends CrudRepository with additional JPA-specific features.</td>\n                </tr>\n                <tr>\n                  <td>No support for pagination and sorting.</td>\n                  <td>\n                    Supports pagination and sorting with\n                    <code>Pageable</code>\n                    and\n                    <code>Sort</code>\n                    .\n                  </td>\n                </tr>\n                <tr>\n                  <td>Does not provide batch operations or flush methods.</td>\n                  <td>\n                    Includes batch operations,\n                    <code>flush()</code>\n                    , and\n                    <code>deleteInBatch()</code>\n                    .\n                  </td>\n                </tr>\n                <tr>\n                  <td>Suitable for simple CRUD use cases.</td>\n                  <td>Recommended for advanced JPA features and custom queries.</td>\n                </tr>\n                <tr>\n                  <td>\n                    Interface:\n                    <code>CrudRepository&lt;T, ID&gt;</code>\n                  </td>\n                  <td>\n                    Interface:\n                    <code>JpaRepository&lt;T, ID&gt;</code>\n                  </td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "CrudRepository JpaRepository Provides basic CRUD operations (save, find, delete, etc.",
        "Extends CrudRepository with additional JPA-specific features."
      ]
    },
    {
      "question": "How does auto-configuration work in Spring Boot?",
      "answer": "<ol>\n              <li>\n                Auto-configuration is enabled by\n                <code>@EnableAutoConfiguration</code>\n                or\n                <code>@SpringBootApplication</code>\n                .\n              </li>\n              <li>\n                Spring Boot scans the classpath for dependencies and applies sensible default\n                configurations.\n              </li>\n              <li>\n                Auto-configuration classes are listed in\n                <code>META-INF/spring.factories</code>\n                or\n                <code>spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>\n                .\n              </li>\n              <li>\n                Beans and settings are registered automatically based on detected libraries (e.g.,\n                DataSource, JPA, Security).\n              </li>\n              <li>\n                Developers can override defaults by defining their own beans or using properties\n                files.\n              </li>\n              <li>Reduces manual setup and speeds up application bootstrapping.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Auto-configuration is enabled by @EnableAutoConfiguration or @SpringBootApplication .",
        "Spring Boot scans the classpath for dependencies and applies sensible default configurations.",
        "Auto-configuration classes are listed in META-INF/spring.factories or spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports ."
      ]
    },
    {
      "question": "How to override CRUD methods in JPA Repository?",
      "answer": "<ol>\n              <li>Override default methods by redeclaring them in your repository interface.</li>\n              <li>\n                Provide custom implementations in a separate class (e.g.,\n                <code>BookRepositoryCustom</code>\n                ).\n              </li>\n              <li>\n                Use method naming conventions to define custom queries (e.g.,\n                <code>findByTitle</code>\n                ).\n              </li>\n              <li>\n                Annotate methods with\n                <code>@Query</code>\n                for JPQL or native SQL queries.\n              </li>\n              <li>\n                Spring Data automatically wires custom logic with standard repository methods.\n              </li>\n              <li>Supports projections and DTOs for custom result mapping.</li>\n            </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Override default methods by redeclaring them in your repository interface.",
        "Provide custom implementations in a separate class (e.g., BookRepositoryCustom ).",
        "Use method naming conventions to define custom queries (e.g., findByTitle )."
      ]
    },
    {
      "question": "Common Spring Boot Annotations",
      "answer": "<ul>\n              <li>\n                <code>@SpringBootApplication</code>\n                – Combines\n                <code>@Configuration</code>\n                ,\n                <code>@EnableAutoConfiguration</code>\n                , and\n                <code>@ComponentScan</code>\n              </li>\n              <li>\n                <code>@RestController</code>\n                ,\n                <code>@GetMapping</code>\n                ,\n                <code>@PostMapping</code>\n              </li>\n              <li>\n                <code>@Autowired</code>\n                ,\n                <code>@Value</code>\n              </li>\n              <li>\n                <code>@Component</code>\n                ,\n                <code>@Service</code>\n                ,\n                <code>@Repository</code>\n              </li>\n            </ul>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@SpringBootApplication – Combines @Configuration , @EnableAutoConfiguration , and @ComponentScan",
        "@RestController , @GetMapping , @PostMapping",
        "@Component , @Service , @Repository"
      ]
    },
    {
      "question": "Which is faster: Native SQL or HQL?",
      "answer": "Native SQL executes directly on the database engine, often yielding better performance\n            for complex queries. HQL (Hibernate Query Language) is more abstract and portable across\n            databases, but slightly slower. Choose native SQL for performance tuning and HQL for\n            database-agnostic design.",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Native SQL executes directly on the database engine, often yielding better performance for complex queries.",
        "HQL (Hibernate Query Language) is more abstract and portable across databases, but slightly slower."
      ]
    },
    {
      "question": "What is @SpringBootApplication?",
      "answer": "This is a convenience annotation that includes\n            <code>@Configuration</code>\n            ,\n            <code>@EnableAutoConfiguration</code>\n            , and\n            <code>@ComponentScan</code>\n            . It marks the main class as the application’s entry point, enabling component scanning\n            and automatic bean registration as part of Spring Boot’s startup process.",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "This is a convenience annotation that includes @Configuration , @EnableAutoConfiguration , and @ComponentScan .",
        "It marks the main class as the application’s entry point, enabling component scanning and automatic bean registration as part of Spring Boot’s startup process."
      ]
    },
    {
      "question": "How to implement pagination in Spring Boot?",
      "answer": "Use\n            <code>Pageable</code>\n            along with repository methods like\n            <code>Page&lt;Entity&gt; findAll(Pageable pageable)</code>\n            . You can create a pageable request using\n            <code>PageRequest.of(page, size)</code>\n            . This allows Spring Data to automatically handle limit/offset queries for paginated\n            responses.",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Use Pageable along with repository methods like Page findAll(Pageable pageable) .",
        "You can create a pageable request using PageRequest."
      ]
    },
    {
      "question": "Difference between REST Client and Feign Client?",
      "answer": "<table class=\"table table-bordered mt-2\">\n              <thead>\n                <tr>\n                  <th>🔥 Feature</th>\n                  <th>REST Client (RestTemplate/WebClient)</th>\n                  <th>Feign Client</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>✅ Type</td>\n                  <td>Imperative or reactive API style</td>\n                  <td>Declarative interface-driven HTTP client</td>\n                </tr>\n                <tr>\n                  <td>✅ Boilerplate</td>\n                  <td>Manual URL setup and serialization logic</td>\n                  <td>Minimal—just define annotated interface</td>\n                </tr>\n                <tr>\n                  <td>✅ Eureka Support</td>\n                  <td>Requires external configuration</td>\n                  <td>Built-in Ribbon + Eureka integration</td>\n                </tr>\n                <tr>\n                  <td>✅ Customization</td>\n                  <td>Custom interceptors in config</td>\n                  <td>\n                    Uses\n                    <code>@Configuration</code>\n                    and interceptors for tuning\n                  </td>\n                </tr>\n                <tr>\n                  <td>✅ Error Handling</td>\n                  <td>Manual try/catch or controller advice</td>\n                  <td>Supports ErrorDecoder for centralized error mapping</td>\n                </tr>\n              </tbody>\n            </table>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "🔥 Feature REST Client (RestTemplate/WebClient) Feign Client ✅ Type Imperative or reactive API style Declarative interface-driven HTTP client ✅ Boilerplate Manual URL setup and serialization logic Min"
      ]
    },
    {
      "question": "What is Spring Boot and features of Spring Boot?",
      "answer": "<ol>\n                <li>\n                  <strong>Spring Boot:</strong>\n                  A framework built on top of the Spring Framework that simplifies the development\n                  of production-ready applications.\n                </li>\n                <li>\n                  <strong>Features:</strong>\n                  <ul>\n                    <li>\n                      Auto-configuration: Automatically configures the application based on\n                      dependencies.\n                    </li>\n                    <li>Standalone: Embeds servers like Tomcat, Jetty, or Undertow.</li>\n                    <li>\n                      Opinionated: Provides default configurations to reduce boilerplate code.\n                    </li>\n                    <li>\n                      Production-ready: Includes tools like Actuator for monitoring and managing\n                      applications.\n                    </li>\n                    <li>\n                      Externalized configuration: Supports properties files, YAML, environment\n                      variables, etc.\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Boot: A framework built on top of the Spring Framework that simplifies the development of production-ready applications.",
        "Features: Auto-configuration: Automatically configures the application based on dependencies.",
        "Standalone: Embeds servers like Tomcat, Jetty, or Undertow."
      ]
    },
    {
      "question": "Transaction management in microservices (saga pattern)",
      "answer": "<ol>\n                <li>\n                  <strong>Saga Pattern:</strong>\n                  A design pattern for managing distributed transactions across microservices.\n                </li>\n                <li>\n                  <strong>Types:</strong>\n                  <ul>\n                    <li>\n                      <strong>Choreography:</strong>\n                      Services communicate directly using events without a central coordinator.\n                    </li>\n                    <li>\n                      <strong>Orchestration:</strong>\n                      A central orchestrator coordinates the transaction flow between services.\n                    </li>\n                  </ul>\n                </li>\n                <li>Ensures consistency by compensating actions if any step fails.</li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Saga Pattern: A design pattern for managing distributed transactions across microservices.",
        "Types: Choreography: Services communicate directly using events without a central coordinator.",
        "Orchestration: A central orchestrator coordinates the transaction flow between services."
      ]
    },
    {
      "question": "How to call another microservice?",
      "answer": "<ol>\n                <li>\n                  Use REST APIs with libraries like\n                  <code>RestTemplate</code>\n                  ,\n                  <code>WebClient</code>\n                  , or Feign Client.\n                </li>\n                <li>\n                  Example:\n                  <pre><code>RestTemplate restTemplate = new RestTemplate();\n  String url = \"http://microservice-endpoint\";\n  ResponseEntity&lt;String&gt; response = restTemplate.getForEntity(url, String.class);</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Use REST APIs with libraries like RestTemplate , WebClient , or Feign Client.",
        "Example: RestTemplate restTemplate = new RestTemplate(); String url = \"http://microservice-endpoint\"; ResponseEntity response = restTemplate.getForEntity(url, String.class);"
      ]
    },
    {
      "question": "What is circuit breaker pattern?",
      "answer": "<ol>\n                <li>A design pattern to prevent cascading failures in distributed systems.</li>\n                <li>\n                  When a service fails repeatedly, the circuit breaker trips and stops further calls\n                  to the failing service for a defined period.\n                </li>\n                <li>\n                  Tools like\n                  <code>Hystrix</code>\n                  or\n                  <code>Resilience4j</code>\n                  implement this pattern.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "A design pattern to prevent cascading failures in distributed systems.",
        "When a service fails repeatedly, the circuit breaker trips and stops further calls to the failing service for a defined period.",
        "Tools like Hystrix or Resilience4j implement this pattern."
      ]
    },
    {
      "question": "Use of API gateway?",
      "answer": "<ol>\n                <li>Acts as a single entry point for clients to access multiple microservices.</li>\n                <li>\n                  <strong>Features:</strong>\n                  <ul>\n                    <li>Routing requests to appropriate microservices.</li>\n                    <li>Authentication and authorization.</li>\n                    <li>Load balancing and rate limiting.</li>\n                    <li>Aggregation of responses from multiple services.</li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Acts as a single entry point for clients to access multiple microservices.",
        "Features: Routing requests to appropriate microservices.",
        "Authentication and authorization."
      ]
    },
    {
      "question": "Annotations in Spring Boot?",
      "answer": "<ol>\n                <li>\n                  <strong>Common Annotations:</strong>\n                  <ul>\n                    <li>\n                      <code>@SpringBootApplication</code>\n                      : Marks the main class of a Spring Boot application.\n                    </li>\n                    <li>\n                      <code>@RestController</code>\n                      : Combines\n                      <code>@Controller</code>\n                      and\n                      <code>@ResponseBody</code>\n                      .\n                    </li>\n                    <li>\n                      <code>@Autowired</code>\n                      : Injects dependencies automatically.\n                    </li>\n                    <li>\n                      <code>@Component</code>\n                      : Marks a class as a Spring-managed component.\n                    </li>\n                    <li>\n                      <code>@Configuration</code>\n                      : Defines a configuration class.\n                    </li>\n                    <li>\n                      <code>@EnableAutoConfiguration</code>\n                      : Enables auto-configuration of beans.\n                    </li>\n                  </ul>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Common Annotations: @SpringBootApplication : Marks the main class of a Spring Boot application.",
        "@RestController : Combines @Controller and @ResponseBody .",
        "@Autowired : Injects dependencies automatically."
      ]
    },
    {
      "question": "How Spring Boot auto configures?",
      "answer": "<ol>\n                <li>\n                  Spring Boot scans the classpath for dependencies and applies sensible defaults.\n                </li>\n                <li>\n                  Uses\n                  <code>@EnableAutoConfiguration</code>\n                  to trigger auto-configuration.\n                </li>\n                <li>\n                  Auto-configuration classes are defined in\n                  <code>META-INF/spring.factories</code>\n                  .\n                </li>\n                <li>Customizations can be made using properties files or overriding beans.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Boot scans the classpath for dependencies and applies sensible defaults.",
        "Uses @EnableAutoConfiguration to trigger auto-configuration.",
        "Auto-configuration classes are defined in META-INF/spring.factories ."
      ]
    },
    {
      "question": "What happens with starter dependency?",
      "answer": "<ol>\n                <li>\n                  Starter dependencies bundle commonly used libraries for specific functionalities.\n                </li>\n                <li>\n                  Example:\n                  <code>spring-boot-starter-web</code>\n                  includes dependencies for building web applications.\n                </li>\n                <li>Reduces manual dependency management and provides pre-configured setups.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Starter dependencies bundle commonly used libraries for specific functionalities.",
        "Example: spring-boot-starter-web includes dependencies for building web applications.",
        "Reduces manual dependency management and provides pre-configured setups."
      ]
    },
    {
      "question": "Spring Boot actuator?",
      "answer": "<ol>\n                <li>\n                  Provides production-ready features like health checks, metrics, and monitoring\n                  endpoints.\n                </li>\n                <li>\n                  Endpoints include\n                  <code>/actuator/health</code>\n                  ,\n                  <code>/actuator/metrics</code>\n                  , etc.\n                </li>\n                <li>\n                  Add the dependency\n                  <code>spring-boot-starter-actuator</code>\n                  to enable it.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Provides production-ready features like health checks, metrics, and monitoring endpoints.",
        "Endpoints include /actuator/health , /actuator/metrics , etc.",
        "Add the dependency spring-boot-starter-actuator to enable it."
      ]
    },
    {
      "question": "Autowired and Bean difference?",
      "answer": "<ol>\n                <li>\n                  <strong>@Autowired:</strong>\n                  Injects a bean into another component (e.g., constructor, field, or method).\n                </li>\n                <li>\n                  <strong>@Bean:</strong>\n                  Marks a method to produce a bean managed by the Spring container.\n                </li>\n                <li>\n                  <code>@Bean</code>\n                  is used in configuration classes, while\n                  <code>@Autowired</code>\n                  is used for dependency injection.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Autowired: Injects a bean into another component (e.g., constructor, field, or method).",
        "@Bean: Marks a method to produce a bean managed by the Spring container.",
        "@Bean is used in configuration classes, while @Autowired is used for dependency injection."
      ]
    },
    {
      "question": "Component and Bean difference?",
      "answer": "<ol>\n                <li>\n                  <strong>@Component:</strong>\n                  A generic stereotype for any Spring-managed component.\n                </li>\n                <li>\n                  <strong>@Bean:</strong>\n                  Used in configuration classes to define beans explicitly.\n                </li>\n                <li>\n                  <code>@Component</code>\n                  is class-level, while\n                  <code>@Bean</code>\n                  is method-level.\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Component: A generic stereotype for any Spring-managed component.",
        "@Bean: Used in configuration classes to define beans explicitly.",
        "@Component is class-level, while @Bean is method-level."
      ]
    },
    {
      "question": "Steps to disable default tomcat server?",
      "answer": "<ol>\n                <li>\n                  Exclude the Tomcat dependency in\n                  <code>pom.xml</code>\n                  :\n                  <pre><code>&lt;dependency&gt;\n  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\n  &lt;exclusions&gt;\n    &lt;exclusion&gt;\n      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n      &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;\n    &lt;/exclusion&gt;\n  &lt;/exclusions&gt;\n&lt;/dependency&gt;</code></pre>\n                </li>\n                <li>Add another embedded server like Jetty or Undertow.</li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Exclude the Tomcat dependency in pom.xml : org.springframework.boot spring-boot-starter-web org.springframework.boot spring-boot-starter-tomcat",
        "Add another embedded server like Jetty or Undertow."
      ]
    },
    {
      "question": "Resttemplate purposes?",
      "answer": "<ol>\n                <li>Used to consume RESTful web services.</li>\n                <li>Supports HTTP methods like GET, POST, PUT, DELETE.</li>\n                <li>\n                  Example:\n                  <pre><code>RestTemplate restTemplate = new RestTemplate();\n  String url = \"http://example.com/api\";\n  ResponseEntity&lt;String&gt; response = restTemplate.getForEntity(url, String.class);</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Used to consume RESTful web services.",
        "Supports HTTP methods like GET, POST, PUT, DELETE.",
        "Example: RestTemplate restTemplate = new RestTemplate(); String url = \"http://example.com/api\"; ResponseEntity response = restTemplate.getForEntity(url, String.class);"
      ]
    },
    {
      "question": "How to change the server port?",
      "answer": "<ol>\n                <li>\n                  In\n                  <code>application.properties</code>\n                  :\n                  <pre><code>server.port=8081</code></pre>\n                </li>\n                <li>\n                  Or in\n                  <code>application.yml</code>\n                  :\n                  <pre><code>server:\n  port: 8081</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "In application.properties : server.port=8081",
        "Or in application.yml : server: port: 8081"
      ]
    },
    {
      "question": "What is Spring Actuator? How to enable them?",
      "answer": "<ol>\n                <li>\n                  Spring Actuator provides production-ready features like health checks, metrics,\n                  and monitoring endpoints.\n                </li>\n                <li>\n                  To enable, add the dependency:\n                  <pre><code>&lt;dependency&gt;\n  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n  &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;\n&lt;/dependency&gt;</code></pre>\n                </li>\n                <li>\n                  Access endpoints like\n                  <code>/actuator/health</code>\n                  .\n                </li>\n              </ol>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Spring Actuator provides production-ready features like health checks, metrics, and monitoring endpoints.",
        "To enable, add the dependency: org.springframework.boot spring-boot-starter-actuator",
        "Access endpoints like /actuator/health ."
      ]
    },
    {
      "question": "Differences between @Controller and @RestController?",
      "answer": "<ol>\n                <li>\n                  <strong>@Controller:</strong>\n                  Used for traditional MVC controllers. Requires\n                  <code>@ResponseBody</code>\n                  for returning data.\n                </li>\n                <li>\n                  <strong>@RestController:</strong>\n                  Combines\n                  <code>@Controller</code>\n                  and\n                  <code>@ResponseBody</code>\n                  . Simplifies RESTful web services.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "@Controller: Used for traditional MVC controllers. Requires @ResponseBody for returning data.",
        "@RestController: Combines @Controller and @ResponseBody . Simplifies RESTful web services."
      ]
    },
    {
      "question": "What are profiles in SpringBoot and how to enable them?",
      "answer": "<ol>\n                <li>Profiles allow environment-specific configurations (e.g., dev, prod).</li>\n                <li>\n                  Enable profiles in\n                  <code>application.properties</code>\n                  :\n                  <pre><code>spring.profiles.active=dev</code></pre>\n                </li>\n                <li>\n                  Create profile-specific files like\n                  <code>application-dev.properties</code>\n                  .\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Profiles allow environment-specific configurations (e.g., dev, prod).",
        "Enable profiles in application.properties : spring.profiles.active=dev",
        "Create profile-specific files like application-dev.properties ."
      ]
    },
    {
      "question": "What is @Qualifier?",
      "answer": "<ol>\n                <li>Used to resolve ambiguity when multiple beans of the same type exist.</li>\n                <li>\n                  Specifies which bean to inject:\n                  <pre><code>@Autowired\n  @Qualifier(\"beanName\")\n  private MyService myService;</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Used to resolve ambiguity when multiple beans of the same type exist.",
        "Specifies which bean to inject: @Autowired @Qualifier(\"beanName\") private MyService myService;"
      ]
    },
    {
      "question": "How to exclude the auto configuration?",
      "answer": "<ol>\n                <li>\n                  Use\n                  <code>@EnableAutoConfiguration</code>\n                  with the\n                  <code>exclude</code>\n                  attribute:\n                  <pre><code>@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})</code></pre>\n                </li>\n                <li>\n                  Or in\n                  <code>application.properties</code>\n                  :\n                  <pre><code>spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Use @EnableAutoConfiguration with the exclude attribute: @EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})",
        "Or in application.properties : spring.autoconfigure.exclude=org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration"
      ]
    },
    {
      "question": "What is Spring-boot-devtools?",
      "answer": "<ol>\n                <li>\n                  Provides development-time features like automatic restarts and live reloads.\n                </li>\n                <li>\n                  Improves developer productivity by reducing manual restarts during development.\n                </li>\n                <li>\n                  Add the dependency:\n                  <pre><code>&lt;dependency&gt;\n  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n  &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;\n&lt;/dependency&gt;</code></pre>\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Provides development-time features like automatic restarts and live reloads.",
        "Improves developer productivity by reducing manual restarts during development.",
        "Add the dependency: org.springframework.boot spring-boot-devtools"
      ]
    },
    {
      "question": "How to get the configuration value in Spring Boot?",
      "answer": "<ol>\n                <li>\n                  Use\n                  <code>@Value</code>\n                  annotation:\n                  <pre><code>@Value(\"${property.name}\")\n  private String propertyName;</code></pre>\n                </li>\n                <li>\n                  Or use\n                  <code>@ConfigurationProperties</code>\n                  for complex configurations.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Use @Value annotation: @Value(\"${property.name}\") private String propertyName;",
        "Or use @ConfigurationProperties for complex configurations."
      ]
    },
    {
      "question": "What are different design patterns for Microservices?",
      "answer": "<ol>\n                <li>\n                  <strong>API Gateway:</strong>\n                  Single entry point for clients.\n                </li>\n                <li>\n                  <strong>Circuit Breaker:</strong>\n                  Prevents cascading failures.\n                </li>\n                <li>\n                  <strong>Database per Service:</strong>\n                  Each service has its own database.\n                </li>\n                <li>\n                  <strong>Event Sourcing:</strong>\n                  Captures changes as a sequence of events.\n                </li>\n                <li>\n                  <strong>CQRS:</strong>\n                  Separates read and write operations.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "API Gateway: Single entry point for clients.",
        "Circuit Breaker: Prevents cascading failures.",
        "Database per Service: Each service has its own database."
      ]
    },
    {
      "question": "What is CSRF?",
      "answer": "<ol>\n                <li>\n                  Cross-Site Request Forgery (CSRF) is an attack where unauthorized commands are\n                  submitted on behalf of an authenticated user.\n                </li>\n                <li>Spring Security provides CSRF protection by default.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Cross-Site Request Forgery (CSRF) is an attack where unauthorized commands are submitted on behalf of an authenticated user.",
        "Spring Security provides CSRF protection by default."
      ]
    },
    {
      "question": "What is idempotent request?",
      "answer": "<ol>\n                <li>\n                  An idempotent request produces the same result regardless of how many times it is\n                  executed.\n                </li>\n                <li>HTTP methods like GET, PUT, and DELETE are idempotent, while POST is not.</li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "An idempotent request produces the same result regardless of how many times it is executed.",
        "HTTP methods like GET, PUT, and DELETE are idempotent, while POST is not."
      ]
    },
    {
      "question": "How will you invoke other endpoints in Spring Boot?",
      "answer": "<ol>\n                <li>\n                  Using\n                  <code>RestTemplate</code>\n                  :\n                  <pre><code>RestTemplate restTemplate = new RestTemplate();\n  String url = \"http://example.com/api\";\n  ResponseEntity&lt;String&gt; response = restTemplate.getForEntity(url, String.class);</code></pre>\n                </li>\n                <li>\n                  Or using\n                  <code>WebClient</code>\n                  for reactive programming.\n                </li>\n              </ol>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot"
      ],
      "keyPoints": [
        "Using RestTemplate : RestTemplate restTemplate = new RestTemplate(); String url = \"http://example.com/api\"; ResponseEntity response = restTemplate.getForEntity(url, String.class);",
        "Or using WebClient for reactive programming."
      ]
    },
    {
      "question": "What happens internally when you add spring-boot-starter-web?",
      "answer": "<p>Adding <code>spring-boot-starter-web</code> triggers a cascade of auto-configuration.</p>\n<p><b>Step-by-step:</b></p>\n<ol>\n  <li><b>Starter pulls dependencies</b> — Spring MVC, Jackson, Tomcat, and validation API are added to the classpath.</li>\n  <li><b>@EnableAutoConfiguration scans <code>META-INF/spring.factories</code></b> (or <code>AutoConfiguration.imports</code> in Spring Boot 3.x) and finds <code>ServletWebServerFactoryAutoConfiguration</code>, <code>WebMvcAutoConfiguration</code>, <code>JacksonAutoConfiguration</code>, etc.</li>\n  <li><b>ServletWebServerFactoryAutoConfiguration</b> detects Tomcat on the classpath and registers an embedded <code>TomcatServletWebServerFactory</code> bean.</li>\n  <li><b>WebMvcAutoConfiguration</b> configures DispatcherServlet, ViewResolver, MessageConverters (JSON via Jackson), and static resource handling.</li>\n  <li><b>JacksonAutoConfiguration</b> configures the ObjectMapper bean with sensible defaults.</li>\n  <li><b>Tomcat starts on port 8080</b> (or <code>server.port</code> from properties).</li>\n</ol>\n<pre><code>// spring-boot-starter-web includes:\n//   spring-boot-starter-tomcat (embedded Tomcat)\n//   spring-webmvc (DispatcherServlet, @Controller, etc.)\n//   spring-web (core web utilities)\n//   jackson-databind (JSON serialization)\n//   spring-boot-starter-validation\n</code></pre>\n<p><b>Key point:</b> Each <code>@ConditionalOnClass</code> / <code>@ConditionalOnMissingBean</code> annotation ensures configuration only applies if the dependency is present and no user-defined bean exists.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Auto-Configuration",
        "Web"
      ],
      "keyPoints": [
        "Starter pulls dependencies — Spring MVC, Jackson, Tomcat, and validation API are added to the classpath.",
        "@EnableAutoConfiguration scans META-INF/spring.factories (or AutoConfiguration.imports in Spring Boot 3.x) and finds ServletWebServerFactoryAutoConfiguration , WebMvcAutoConfiguration , JacksonAutoConfiguration , etc.",
        "ServletWebServerFactoryAutoConfiguration detects Tomcat on the classpath and registers an embedded TomcatServletWebServerFactory bean."
      ]
    },
    {
      "question": "Why does Spring Boot prefer convention over configuration?",
      "answer": "<p><b>Convention over configuration (CoC)</b> means the framework provides sensible defaults so you only override what you need. Spring Boot applies this philosophy everywhere.</p>\n<p><b>Examples of conventions:</b></p>\n<ul>\n  <li><b>Embedded server</b> — Tomcat on port 8080 by default. No web.xml, no server setup.</li>\n  <li><b>Bean names</b> — A class annotated @Service or @Repository is registered with a camelCase name derived from the class.</li>\n  <li><b>Configuration files</b> — application.properties or application.yml in src/main/resources/ are auto-detected.</li>\n  <li><b>Database</b> — If H2 is on the classpath, Spring Boot auto-configures an in-memory DataSource.</li>\n  <li><b>Error handling</b> — /error maps to a whitelabel error page automatically.</li>\n  <li><b>Static resources</b> — Served from /static, /public, /resources, or /META-INF/resources.</li>\n</ul>\n<p><b>Why it matters:</b></p>\n<ol>\n  <li><b>Faster development</b> — less boilerplate, quicker prototyping.</li>\n  <li><b>Consistency</b> — all projects follow the same structure.</li>\n  <li><b>Override when needed</b> — define your own bean or set a property and auto-configuration backs off.</li>\n</ol>\n<pre><code>// Override a convention:\n// Default: embedded Tomcat on 8080\n// Override: switch to Undertow and port 9090\n// pom.xml: exclude tomcat, add undertow\n// application.yml:\nserver:\n  port: 9090\n// Spring Boot sees Undertow on classpath, uses it instead.\n</code></pre>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot",
        "Design Philosophy",
        "Convention"
      ],
      "keyPoints": [
        "Embedded server — Tomcat on port 8080 by default. No web.xml, no server setup.",
        "Bean names — A class annotated @Service or @Repository is registered with a camelCase name derived from the class.",
        "Configuration files — application.properties or application.yml in src/main/resources/ are auto-detected."
      ]
    },
    {
      "question": "Difference between @ComponentScan and @SpringBootApplication?",
      "answer": "<p>@SpringBootApplication is a <b>composite annotation</b> that bundles three annotations together. @ComponentScan is just one of them.</p>\n<table>\n  <tr><th>Annotation</th><th>Purpose</th><th>Key Feature</th></tr>\n  <tr><td>@SpringBootApplication</td><td>Enables entire Spring Boot app</td><td>Combines 3 annotations</td></tr>\n  <tr><td>@ComponentScan</td><td>Discovers beans in a package</td><td>Only scans and registers components</td></tr>\n</table>\n<p><b>@SpringBootApplication is equivalent to:</b></p>\n<pre><code>@SpringBootApplication  // this one annotation\n// is equivalent to these three:\n@SpringBootConfiguration   // marks class as a configuration class\n@EnableAutoConfiguration   // triggers auto-configuration\n@ComponentScan              // scans for @Component, @Service, @Repository, @Controller\n</code></pre>\n<p><b>When to use each:</b></p>\n<ul>\n  <li><b>@SpringBootApplication</b> — Use on your main class. Covers 99% of cases.</li>\n  <li><b>@ComponentScan</b> — Use alone when you want component scanning <i>without</i> auto-configuration (rare). Or use @ComponentScan(basePackages) to scan outside the default package.</li>\n</ul>\n<pre><code>// Typical usage\n@SpringBootApplication\npublic class MyApp {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApp.class, args);\n    }\n}\n\n// Custom scan path\n@SpringBootApplication\n@ComponentScan(basePackages = {\"com.example.service\", \"com.example.external\"})\npublic class MyApp { ... }\n</code></pre>\n<p><b>Interview tip:</b> If asked what @SpringBootApplication does, break it into the three annotations and explain each.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Annotations",
        "ComponentScan"
      ],
      "keyPoints": [
        "@SpringBootApplication — Use on your main class. Covers 99% of cases.",
        "@ComponentScan — Use alone when you want component scanning without auto-configuration (rare). Or use @ComponentScan(basePackages) to scan outside the default package."
      ]
    },
    {
      "question": "How does Spring Boot detect embedded Tomcat and configure it?",
      "answer": "<p>Spring Boot uses <b>conditional annotations</b> to detect Tomcat on the classpath and auto-configure it.</p>\n<p><b>Step-by-step:</b></p>\n<ol>\n  <li>spring-boot-starter-web brings in spring-boot-starter-tomcat.</li>\n  <li>ServletWebServerFactoryAutoConfiguration is loaded via spring.factories.</li>\n  <li>EmbeddedTomcat is annotated with @ConditionalOnClass({ Servlet.class, Tomcat.class }) — only activates if Tomcat classes are present.</li>\n  <li>A TomcatServletWebServerFactory bean is created, which starts an embedded Tomcat instance.</li>\n  <li>ServerProperties (bound to server.* properties) configure port, session timeout, SSL, etc.</li>\n</ol>\n<pre><code>// Simplified auto-configuration logic\n@Configuration\n@ConditionalOnClass(Servlet.class)\npublic class ServletWebServerFactoryAutoConfiguration {\n    @Configuration\n    @ConditionalOnClass(Tomcat.class)\n    public static class EmbeddedTomcat {\n        @Bean\n        @ConditionalOnMissingBean\n        public TomcatServletWebServerFactory tomcatFactory() {\n            return new TomcatServletWebServerFactory();\n        }\n    }\n    @Configuration\n    @ConditionalOnClass(Undertow.class)\n    public static class EmbeddedUndertow { ... }\n}\n</code></pre>\n<p><b>Switching servers:</b> Exclude Tomcat and add Jetty or Undertow in pom.xml.</p>\n<p><b>Interview tip:</b> The key mechanism is @ConditionalOnClass + @ConditionalOnMissingBean. The former detects the dependency; the latter allows user override.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Tomcat",
        "Auto-Configuration",
        "Embedded Server"
      ],
      "keyPoints": [
        "spring-boot-starter-web brings in spring-boot-starter-tomcat.",
        "ServletWebServerFactoryAutoConfiguration is loaded via spring.factories.",
        "EmbeddedTomcat is annotated with @ConditionalOnClass({ Servlet.class, Tomcat.class }) — only activates if Tomcat classes are present."
      ]
    },
    {
      "question": "What happens if two beans of same type exist and no @Qualifier?",
      "answer": "<p>Spring throws a <code>NoUniqueBeanDefinitionException</code> at startup because it cannot decide which bean to inject.</p>\n<pre><code>@Service\npublic class EmailService implements NotificationService { ... }\n\n@Service\npublic class SmsService implements NotificationService { ... }\n\n@Service\npublic class UserService {\n    @Autowired\n    private NotificationService notificationService; // NoUniqueBeanDefinitionException!\n}\n</code></pre>\n<p><b>Ways to resolve:</b></p>\n<ol>\n  <li><b>@Qualifier</b> — specify the bean name explicitly:\n    <pre><code>@Autowired\n@Qualifier(\"emailService\")\nprivate NotificationService notificationService;</code></pre></li>\n  <li><b>@Primary</b> — mark one as the default:\n    <pre><code>@Service @Primary\npublic class EmailService implements NotificationService { ... }</code></pre></li>\n  <li><b>Field name matches bean name</b> — Spring uses the field name as a qualifier:\n    <pre><code>@Autowired\nprivate NotificationService emailService; // matches \"emailService\" bean</code></pre></li>\n  <li><b>Use a specific type</b> — inject the concrete class instead of the interface.</li>\n</ol>\n<p><b>Priority:</b> @Primary → @Qualifier → field name matching. If none resolves the ambiguity, Spring fails at startup.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Dependency Injection",
        "Beans"
      ],
      "keyPoints": [
        "@Qualifier — specify the bean name explicitly: @Autowired @Qualifier(\"emailService\") private NotificationService notificationService;",
        "@Primary — mark one as the default: @Service @Primary public class EmailService implements NotificationService { ... }",
        "Field name matches bean name — Spring uses the field name as a qualifier: @Autowired private NotificationService emailService; // matches \"emailService\" bean"
      ]
    },
    {
      "question": "What is the role of SpringFactoriesLoader?",
      "answer": "<p>SpringFactoriesLoader is the mechanism Spring Boot uses to <b>discover and load auto-configuration classes</b> from the classpath without compile-time dependencies.</p>\n<p><b>How it works:</b></p>\n<ol>\n  <li>Each starter JAR contains META-INF/spring.factories listing fully-qualified class names under specific keys.</li>\n  <li>SpringFactoriesLoader reads all spring.factories files on the classpath and loads the listed classes.</li>\n  <li>Each loaded class is evaluated for its @ConditionalOn* annotations to decide whether to apply.</li>\n</ol>\n<pre><code># META-INF/spring.factories (Spring Boot 2.x)\norg.springframework.boot.autoconfigure.EnableAutoConfiguration=  org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration,  org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration\n</code></pre>\n<p><b>Spring Boot 3.x change:</b> Replaced by META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports — one class per line, no escaping needed.</p>\n<p><b>Why it matters:</b> This is how Spring Boot achieves plug-and-play — adding a JAR to the classpath automatically enables its configuration.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Auto-Configuration",
        "SpringFactoriesLoader"
      ],
      "keyPoints": [
        "Each starter JAR contains META-INF/spring.factories listing fully-qualified class names under specific keys.",
        "SpringFactoriesLoader reads all spring.factories files on the classpath and loads the listed classes.",
        "Each loaded class is evaluated for its @ConditionalOn* annotations to decide whether to apply."
      ]
    },
    {
      "question": "How does Spring Boot reduce XML configuration completely?",
      "answer": "<p>Spring Boot eliminates XML through <b>auto-configuration, annotation-driven development, and sensible defaults</b>.</p>\n<p><b>Key mechanisms:</b></p>\n<ol>\n  <li><b>Auto-configuration</b> — @EnableAutoConfiguration detects dependencies and configures beans automatically.</li>\n  <li><b>Annotation-based config</b> — @Configuration + @Bean replaces XML bean declarations:\n    <pre><code>@Configuration\npublic class AppConfig {\n    @Bean\n    public RestTemplate restTemplate() { return new RestTemplate(); }\n}</code></pre></li>\n  <li><b>Properties files</b> — application.yml replaces XML property placeholders.</li>\n  <li><b>Component scanning</b> — @ComponentScan replaces manual bean wiring.</li>\n  <li><b>Starter POMs</b> — Curated dependency lists replace manual dependency management.</li>\n  <li><b>Embedded servers</b> — No need to configure Tomcat/Jetty externally.</li>\n</ol>\n<p><b>Before Spring Boot:</b> 20+ lines of XML for a DataSource. <b>After:</b> Just add spring-boot-starter-data-jpa + set properties. DataSource auto-configured!</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Configuration",
        "XML-Free"
      ],
      "keyPoints": [
        "Auto-configuration — @EnableAutoConfiguration detects dependencies and configures beans automatically.",
        "Annotation-based config — @Configuration + @Bean replaces XML bean declarations: @Configuration public class AppConfig { @Bean public RestTemplate restTemplate() { return new RestTemplate(); } }",
        "Properties files — application.yml replaces XML property placeholders."
      ]
    },
    {
      "question": "How does Spring Boot manage dependency versions automatically?",
      "answer": "<p>Spring Boot uses a <b>BOM (Bill of Materials)</b> called spring-boot-dependencies to manage all dependency versions centrally.</p>\n<p><b>How it works:</b></p>\n<ol>\n  <li>The spring-boot-starter-parent POM declares versions for 300+ curated dependencies.</li>\n  <li>When you declare a starter, you dont specify a version — the BOM provides it.</li>\n  <li>All versions are tested together, guaranteeing compatibility.</li>\n</ol>\n<pre><code>&lt;parent&gt;\n  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n  &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;\n  &lt;version&gt;3.3.0&lt;/version&gt;\n&lt;/parent&gt;\n&lt;!-- No version needed! BOM provides it --&gt;\n&lt;dependency&gt;\n  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n  &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\n&lt;/dependency&gt;\n</code></pre>\n<p><b>Overriding a version:</b></p>\n<pre><code>&lt;properties&gt;\n  &lt;jackson-bom.version&gt;2.16.0&lt;/jackson-bom.version&gt;\n&lt;/properties&gt;\n</code></pre>\n<p><b>Interview key point:</b> The parent POM also configures plugin versions, Java version, resource filtering, and encoding defaults. You can use just the BOM (spring-boot-dependencies) without the parent if you need a different parent POM.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Dependencies",
        "Maven",
        "BOM"
      ],
      "keyPoints": [
        "The spring-boot-starter-parent POM declares versions for 300+ curated dependencies.",
        "When you declare a starter, you dont specify a version — the BOM provides it.",
        "All versions are tested together, guaranteeing compatibility."
      ]
    },
    {
      "question": "What is the lifecycle of a Spring Bean in Spring Boot?",
      "answer": "<p>A Spring Bean goes through <b>7 phases</b> from instantiation to destruction.</p>\n<ol>\n  <li><b>Instantiation</b> — Spring creates the bean instance via constructor.</li>\n  <li><b>Populate properties</b> — @Autowired, @Value injections happen.</li>\n  <li><b>Awareness callbacks</b> — BeanNameAware.setBeanName(), BeanFactoryAware.setBeanFactory() called.</li>\n  <li><b>Pre-initialization</b> — BeanPostProcessor.postProcessBeforeInitialization() (@PostConstruct processing).</li>\n  <li><b>Initialization</b> — @PostConstruct, InitializingBean.afterPropertiesSet(), custom init-method run.</li>\n  <li><b>Bean is ready</b> — Available for use in the application.</li>\n  <li><b>Destruction</b> — @PreDestroy, DisposableBean.destroy(), custom destroy-method.</li>\n</ol>\n<pre><code>@Component\npublic class LifecycleDemo implements InitializingBean, DisposableBean,\n        BeanNameAware, BeanFactoryAware {\n    public LifecycleDemo() { System.out.println(\"1. Constructor\"); }\n    @Autowired\n    public void setDependency(SomeService svc) { System.out.println(\"2. Injection\"); }\n    @Override\n    public void setBeanName(String name) { System.out.println(\"3. BeanNameAware\"); }\n    @Override\n    public void setBeanFactory(BeanFactory f) { System.out.println(\"4. BeanFactoryAware\"); }\n    @PostConstruct\n    public void postConstruct() { System.out.println(\"5. @PostConstruct\"); }\n    @Override\n    public void afterPropertiesSet() { System.out.println(\"6. afterPropertiesSet()\"); }\n    @PreDestroy\n    public void preDestroy() { System.out.println(\"7. @PreDestroy\"); }\n    @Override\n    public void destroy() { System.out.println(\"8. destroy()\"); }\n}\n</code></pre>\n<p><b>Interview tip:</b> Constructor → Injection → Aware callbacks → @PostConstruct → afterPropertiesSet() → Ready → @PreDestroy → destroy().</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Bean Lifecycle",
        "IoC"
      ],
      "keyPoints": [
        "Instantiation — Spring creates the bean instance via constructor.",
        "Populate properties — @Autowired, @Value injections happen.",
        "Awareness callbacks — BeanNameAware.setBeanName(), BeanFactoryAware.setBeanFactory() called."
      ]
    },
    {
      "question": "What happens if application.yml and application.properties both exist?",
      "answer": "<p>Spring Boot loads <b>both files</b>, but <b>application.properties wins</b> when the same key appears in both.</p>\n<p><b>Loading order (later overrides earlier):</b></p>\n<ol>\n  <li>application.yml is loaded first</li>\n  <li>application.properties is loaded second and <b>overrides duplicate keys</b></li>\n</ol>\n<pre><code># application.yml\nserver:\n  port: 8081\n  servlet:\n    context-path: /api\n\n# application.properties\nserver.port=9090\n# Result: port=9090 (properties wins), context-path=/api (from yml only)\n</code></pre>\n<p><b>Full priority order (highest wins):</b></p>\n<ol>\n  <li>Command-line arguments</li>\n  <li>JNDI attributes</li>\n  <li>Java System properties</li>\n  <li>OS environment variables</li>\n  <li>Profile-specific properties/yml</li>\n  <li>application.properties/yml (properties overrides yml)</li>\n  <li>@PropertySource</li>\n  <li>Default properties</li>\n</ol>\n<p><b>Best practice:</b> Pick one format and stick with it. Mixing both is confusing. YAML is preferred for nested config; properties for flat key-value pairs.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Configuration",
        "Properties",
        "YAML"
      ],
      "keyPoints": [
        "application.yml is loaded first",
        "application.properties is loaded second and overrides duplicate keys",
        "Profile-specific properties/yml"
      ]
    },
    {
      "question": "Difference between @Configuration and normal class?",
      "answer": "<p>A @Configuration class is a specialized @Component that can declare @Bean methods with full proxy support. A normal class is just a POJO Spring knows nothing about.</p>\n<table>\n  <tr><th>Aspect</th><th>@Configuration</th><th>Normal class</th></tr>\n  <tr><td>Scanned by Spring?</td><td>Yes</td><td>No (unless annotated)</td></tr>\n  <tr><td>Can declare @Bean methods?</td><td>Yes — beans are managed</td><td>Only with @Import or @Component</td></tr>\n  <tr><td>Proxy mode</td><td>CGLIB proxy by default</td><td>No proxy</td></tr>\n  <tr><td>Bean inter-dependencies</td><td>Resolved correctly via proxy</td><td>Each call creates new instance</td></tr>\n</table>\n<p><b>Why the proxy matters:</b></p>\n<pre><code>@Configuration\npublic class AppConfig {\n    @Bean\n    public ServiceA serviceA() {\n        return new ServiceA(serviceB()); // CGLIB proxy intercepts this\n    }\n    @Bean\n    public ServiceB serviceB() {\n        return new ServiceB();\n    }\n}\n// serviceB() called from serviceA() returns the SAME singleton bean.\n\n// Without @Configuration (plain @Component):\n// serviceB() called from serviceA() creates a NEW instance!\n// Use @Configuration for full-mode, @Component for lite-mode\n</code></pre>\n<p><b>Interview tip:</b> Use @Configuration (full mode) when beans reference each other. Use @Component with @Bean (lite mode) only for standalone beans with no inter-dependencies.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Configuration",
        "Beans",
        "Annotations"
      ],
      "keyPoints": [
        "A @Configuration class is a specialized @Component that can declare @Bean methods with full proxy support.",
        "A normal class is just a POJO Spring knows nothing about."
      ]
    },
    {
      "question": "How does Spring Boot create DataSource automatically?",
      "answer": "<p>When Spring Boot detects a database driver and connection properties on the classpath, DataSourceAutoConfiguration creates a DataSource bean automatically.</p>\n<p><b>Step-by-step:</b></p>\n<ol>\n  <li>DataSourceAutoConfiguration is listed in spring.factories.</li>\n  <li>It checks for DataSource.class on the classpath (@ConditionalOnClass).</li>\n  <li>If H2 is on the classpath and no URL is configured, it creates an in-memory H2 DataSource.</li>\n  <li>If spring.datasource.url is set, it creates a connection pool (HikariCP by default).</li>\n  <li>If you define your own DataSource @Bean, auto-configuration backs off (@ConditionalOnMissingBean).</li>\n</ol>\n<pre><code># Minimal configuration for auto DataSource\nspring:\n  datasource:\n    url: jdbc:mysql://localhost:3306/mydb\n    username: root\n    password: secret\n    driver-class-name: com.mysql.cj.jdbc.Driver\n# HikariCP pool is auto-configured with these settings\n\n# To switch pool type\nspring.datasource.type: org.apache.commons.dbcp2.BasicDataSource\n</code></pre>\n<p><b>HikariCP defaults:</b> max-pool-size=10, connection-timeout=30s, idle-timeout=10min.</p>\n<p><b>Key point:</b> If you see HikariPool-1 in logs, Spring Boot auto-configured your DataSource. Override by defining your own @Bean DataSource.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "DataSource",
        "Auto-Configuration",
        "Database"
      ],
      "keyPoints": [
        "DataSourceAutoConfiguration is listed in spring.factories.",
        "It checks for DataSource.class on the classpath (@ConditionalOnClass).",
        "If H2 is on the classpath and no URL is configured, it creates an in-memory H2 DataSource."
      ]
    },
    {
      "question": "What is the real use of CommandLineRunner?",
      "answer": "<p>CommandLineRunner is a functional interface that runs code <b>after the Spring ApplicationContext is fully initialized</b> and before the application starts accepting requests.</p>\n<pre><code>@Component\npublic class StartupRunner implements CommandLineRunner {\n    @Override\n    public void run(String... args) throws Exception {\n        System.out.println(\"Application started with args: \" + Arrays.toString(args));\n    }\n}\n</code></pre>\n<p><b>Common use cases:</b></p>\n<ol>\n  <li><b>Seed data</b> — populate the database on startup</li>\n  <li><b>Cache warming</b> — pre-load reference data</li>\n  <li><b>Health checks</b> — verify external service connectivity</li>\n  <li><b>Notification</b> — send startup alerts</li>\n</ol>\n<p><b>CommandLineRunner vs ApplicationRunner:</b></p>\n<table>\n  <tr><th>Aspect</th><th>CommandLineRunner</th><th>ApplicationRunner</th></tr>\n  <tr><td>Parameter type</td><td>String... args (raw)</td><td>ApplicationArguments (parsed)</td></tr>\n  <tr><td>Parsed options</td><td>No</td><td>Yes — args.getOptionValues(\"key\")</td></tr>\n  <tr><td>Use when</td><td>Simple positional args</td><td>Need --key=value parsing</td></tr>\n</table>\n<p><b>Ordering multiple runners:</b></p>\n<pre><code>@Component @Order(1)\npublic class CacheWarmer implements CommandLineRunner { ... }\n\n@Component @Order(2)\npublic class DataSeeder implements CommandLineRunner { ... }\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "CommandLineRunner",
        "Startup"
      ],
      "keyPoints": [
        "Seed data — populate the database on startup",
        "Cache warming — pre-load reference data",
        "Health checks — verify external service connectivity"
      ]
    },
    {
      "question": "How does Spring Boot handle exception translation?",
      "answer": "<p>Spring Boot provides automatic exception translation through <b>@RestControllerAdvice</b> and the DataAccessException hierarchy.</p>\n<p><b>1. Data access exception translation:</b> Spring wraps vendor-specific exceptions (SQLException) into unchecked DataAccessException via @Repository annotation.</p>\n<pre><code>@Repository  // enables exception translation\npublic class UserDaoImpl implements UserDao {\n    // SQLException → DataIntegrityViolationException\n    // LockAcquisitionException → PessimisticLockingFailureException\n}\n</code></pre>\n<p><b>2. REST exception translation with @RestControllerAdvice:</b></p>\n<pre><code>@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(EntityNotFoundException.class)\n    @ResponseStatus(HttpStatus.NOT_FOUND)\n    public ErrorResponse handleNotFound(EntityNotFoundException ex) {\n        return new ErrorResponse(\"NOT_FOUND\", ex.getMessage());\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    @ResponseStatus(HttpStatus.BAD_REQUEST)\n    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {\n        List&lt;String&gt; errors = ex.getBindingResult().getFieldErrors().stream()\n            .map(e -&gt; e.getField() + \": \" + e.getDefaultMessage())\n            .collect(Collectors.toList());\n        return new ErrorResponse(\"VALIDATION_FAILED\", errors);\n    }\n\n    @ExceptionHandler(Exception.class)\n    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)\n    public ErrorResponse handleGeneral(Exception ex) {\n        return new ErrorResponse(\"INTERNAL_ERROR\", ex.getMessage());\n    }\n}\n</code></pre>\n<p><b>3. Default error handling:</b> When no handler catches an exception, BasicErrorController renders /error whitelabel page (browser) or JSON (API clients).</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Exception Handling",
        "REST",
        "Data Access"
      ],
      "keyPoints": [
        "Spring Boot provides automatic exception translation through @RestControllerAdvice and the DataAccessException hierarchy.",
        "Data access exception translation: Spring wraps vendor-specific exceptions (SQLException) into unchecked DataAccessException via @Repository annotation."
      ]
    },
    {
      "question": "Difference between @EnableAutoConfiguration and @Import?",
      "answer": "<table>\n  <tr><th>Aspect</th><th>@EnableAutoConfiguration</th><th>@Import</th></tr>\n  <tr><td>Purpose</td><td>Trigger classpath-based auto-configuration</td><td>Manually import specific config classes</td></tr>\n  <tr><td>Discovery</td><td>Scans spring.factories / AutoConfiguration.imports</td><td>Only imports the listed classes</td></tr>\n  <tr><td>Conditional</td><td>Each config has @ConditionalOn* checks</td><td>Imports unconditionally — always loaded</td></tr>\n  <tr><td>Scope</td><td>Potentially hundreds of configurations</td><td>Specific, targeted configurations</td></tr>\n</table>\n<pre><code>// @EnableAutoConfiguration — scans classpath, conditionally applies configs\n@SpringBootApplication  // includes @EnableAutoConfiguration\npublic class MyApp { ... }\n\n// @Import — manually load specific configuration\n@Import(DataSourceConfig.class)\npublic class MyApp { ... }  // always loaded, no conditions\n\n// They can be combined\n@SpringBootApplication\n@Import(SecurityConfig.class)  // always load this one\npublic class MyApp { ... }\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Auto-Configuration",
        "Annotations"
      ],
      "keyPoints": [
        "Aspect @EnableAutoConfiguration @Import Purpose Trigger classpath-based auto-configuration Manually import specific config classes Discovery Scans spring.",
        "} // @Import — manually load specific configuration @Import(DataSourceConfig."
      ]
    },
    {
      "question": "How does Spring Boot support microservices so easily?",
      "answer": "<p>Spring Boot provides the foundation, and <b>Spring Cloud</b> adds microservices patterns on top.</p>\n<p><b>Key building blocks:</b></p>\n<ol>\n  <li><b>Service Registration & Discovery</b> — Eureka or Consul. Services register and discover without hardcoding URLs.</li>\n  <li><b>API Gateway</b> — Spring Cloud Gateway. Single entry point for routing, rate limiting, auth.</li>\n  <li><b>Circuit Breaker</b> — Resilience4j. Prevents cascading failures.</li>\n  <li><b>Config Server</b> — Spring Cloud Config. Centralized configuration for all services.</li>\n  <li><b>Load Balancing</b> — Spring Cloud LoadBalancer. Client-side load balancing.</li>\n  <li><b>Distributed Tracing</b> — Micrometer + Zipkin/Jaeger. Follow requests across services.</li>\n  <li><b>Health Monitoring</b> — Actuator endpoints for health checks and metrics.</li>\n</ol>\n<pre><code>// Service registration with Eureka\n@SpringBootApplication\n@EnableDiscoveryClient\npublic class OrderService {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderService.class, args);\n    }\n}\n\n// application.yml\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:8761/eureka/\n</code></pre>\n<p><b>Why Spring Boot makes microservices easy:</b></p>\n<ul>\n  <li><b>Embedded servers</b> — each service is a self-contained JAR</li>\n  <li><b>Auto-configuration</b> — minimal boilerplate</li>\n  <li><b>Actuator</b> — production-ready endpoints out of the box</li>\n  <li><b>Fat JARs</b> — java -jar service.jar is all you need</li>\n</ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Microservices",
        "Spring Cloud"
      ],
      "keyPoints": [
        "Service Registration & Discovery — Eureka or Consul. Services register and discover without hardcoding URLs.",
        "API Gateway — Spring Cloud Gateway. Single entry point for routing, rate limiting, auth.",
        "Circuit Breaker — Resilience4j. Prevents cascading failures."
      ]
    },
    {
      "question": "What is the difference between fat jar and normal jar?",
      "answer": "<table>\n  <tr><th>Aspect</th><th>Fat JAR (Spring Boot)</th><th>Normal JAR</th></tr>\n  <tr><td>Contains dependencies?</td><td>Yes — all libs bundled inside</td><td>No — only your classes</td></tr>\n  <tr><td>Runs with</td><td>java -jar app.jar</td><td>java -cp app.jar:lib/* com.Main</td></tr>\n  <tr><td>Classpath</td><td>Self-contained</td><td>Must be set manually</td></tr>\n  <tr><td>Size</td><td>Large (20-60 MB+)</td><td>Small (few KB to MB)</td></tr>\n  <tr><td>Deployment</td><td>Single file, zero config</td><td>Needs dependency management</td></tr>\n  <tr><td>Docker-friendly</td><td>Very — just COPY app.jar /</td><td>Need to copy all deps too</td></tr>\n</table>\n<p><b>Spring Boot fat JAR structure:</b></p>\n<pre><code>my-app.jar\n├── BOOT-INF/\n│   ├── classes/          your compiled code\n│   └── lib/              all dependency JARs\n├── META-INF/\n│   ├── MANIFEST.MF      Main-Class: JarLauncher\n│   └── spring.factories\n└── org/springframework/boot/loader/  Spring Boot launcher\n</code></pre>\n<p><b>Building it:</b></p>\n<pre><code>&lt;build&gt;\n  &lt;plugins&gt;\n    &lt;plugin&gt;\n      &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n      &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;\n    &lt;/plugin&gt;\n  &lt;/plugins&gt;\n&lt;/build&gt;\n// mvn package → creates fat JAR\n// java -jar target/my-app.jar → runs the application\n</code></pre>\n<p><b>Layered JARs (Spring Boot 2.3+):</b> Extract layers for Docker so dependency layers are cached independently.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Spring Boot",
        "Build",
        "Deployment",
        "JAR"
      ],
      "keyPoints": [
        "Aspect Fat JAR (Spring Boot) Normal JAR Contains dependencies?",
        "Yes — all libs bundled inside No — only your classes Runs with java -jar app."
      ]
    },
    {
      "question": "How does Spring Boot handle logging by default?",
      "answer": "<p>Spring Boot uses <b>SLF4J</b> as the logging facade with <b>Logback</b> as the default implementation. No additional configuration needed.</p>\n<p><b>Default behavior:</b></p>\n<ul>\n  <li>Logs to STDOUT at INFO level</li>\n  <li>Log format: timestamp level PID thread logger: message</li>\n  <li>Color-coded output in terminals</li>\n</ul>\n<pre><code># Default log output:\n# 2024-06-13 10:45:00.123 INFO 12345 --- [main] c.e.MyApp : Started MyApp in 2.3s\n</code></pre>\n<p><b>Customizing log levels:</b></p>\n<pre><code># application.properties\nlogging.level.root=WARN\nlogging.level.org.springframework.web=DEBUG\nlogging.level.com.example=TRACE\nlogging.file.name=logs/app.log\nlogging.file.max-size=10MB\nlogging.file.max-history=30\n</code></pre>\n<p><b>Switching to Log4j2:</b> Exclude spring-boot-starter-logging and add spring-boot-starter-log4j2.</p>\n<p><b>Interview key points:</b></p>\n<ul>\n  <li>Spring Boot converts Commons Logging, Log4j2, and JUL calls to SLF4J — all logging goes through one framework.</li>\n  <li>spring-boot-starter-logging is a transitive dependency of every starter.</li>\n  <li>Custom Logback config: place logback-spring.xml in src/main/resources/.</li>\n</ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Logging",
        "Logback",
        "SLF4J"
      ],
      "keyPoints": [
        "Logs to STDOUT at INFO level",
        "Log format: timestamp level PID thread logger: message",
        "Color-coded output in terminals"
      ]
    },
    {
      "question": "How does Spring Boot decide server port priority?",
      "answer": "<p>Spring Boot resolves the server port using a <b>priority chain</b> — highest wins.</p>\n<p><b>Priority order (highest to lowest):</b></p>\n<ol>\n  <li><b>Command-line argument</b> — java -jar app.jar --server.port=9090</li>\n  <li><b>Environment variable</b> — SERVER_PORT=9090</li>\n  <li><b>Profile-specific properties</b> — application-prod.properties with server.port=9090</li>\n  <li><b>Default properties file</b> — application.properties or application.yml</li>\n  <li><b>Hardcoded default</b> — port 8080</li>\n</ol>\n<pre><code># application.yml (priority 4)\nserver:\n  port: 8081\n\n# application-prod.yml (priority 3 — overrides when prod profile active)\nserver:\n  port: 8082\n\n# Command-line (priority 1 — wins)\njava -jar app.jar --server.port=9090\n# Result: 9090\n\n# Environment variable (priority 2)\nSERVER_PORT=7070 java -jar app.jar\n# Result: 7070 (env var beats properties file)\n\n# Random port for testing\nserver.port=0  # Spring Boot picks a random available port\n</code></pre>\n<p><b>Interview tip:</b> The full property resolution order is the same for ALL Spring Boot properties. Mnemonic: <b>Command line > Env vars > Profile properties > Default properties > Hardcoded defaults</b>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Configuration",
        "Server",
        "Properties"
      ],
      "keyPoints": [
        "Command-line argument — java -jar app.jar --server.port=9090",
        "Environment variable — SERVER_PORT=9090",
        "Profile-specific properties — application-prod.properties with server.port=9090"
      ]
    },
    {
      "question": "What happens internally when you hit a REST endpoint?",
      "answer": "<p>A request flows through the <b>DispatcherServlet</b> and interceptors before reaching your controller.</p>\n<p><b>Request flow:</b></p>\n<ol>\n  <li><b>Client sends HTTP request</b></li>\n  <li><b>Embedded Tomcat</b> passes request to DispatcherServlet.</li>\n  <li><b>DispatcherServlet</b> consults HandlerMapping to find the controller method (URL path + HTTP method).</li>\n  <li><b>Filters</b> execute (Security, CORS, etc.).</li>\n  <li><b>HandlerAdapter</b> invokes the controller method.</li>\n  <li><b>MethodArgumentResolver</b> converts request data to method parameters (@PathVariable, @RequestBody, @RequestParam).</li>\n  <li><b>Controller method executes</b> — business logic runs.</li>\n  <li><b>HttpMessageConverter</b> (Jackson) serializes the return object to JSON.</li>\n  <li><b>Response</b> flows back through filters to the client.</li>\n</ol>\n<pre><code>@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired\n    private UserService userService;\n\n    @GetMapping(\"/{id}\")              // Step 3: mapped by HandlerMapping\n    public User getUser(\n            @PathVariable Long id) {   // Step 6: extracted by resolver\n        return userService.findById(id); // Step 7: business logic\n        // Step 8: Jackson converts User to JSON\n    }\n}\n// GET /api/users/1\n// Tomcat → DispatcherServlet → HandlerMapping → Filters → Controller → JSON\n</code></pre>\n<p><b>Exception path:</b> If controller throws, DispatcherServlet looks for @ExceptionHandler or global @RestControllerAdvice. If none found, default error handling kicks in.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "REST",
        "DispatcherServlet",
        "Request Flow"
      ],
      "keyPoints": [
        "Client sends HTTP request",
        "Embedded Tomcat passes request to DispatcherServlet.",
        "DispatcherServlet consults HandlerMapping to find the controller method (URL path + HTTP method)."
      ]
    },
    {
      "question": "Why is Spring Boot preferred for cloud-native apps?",
      "answer": "<p>Spring Boot aligns with <b>12-factor app</b> principles and provides cloud-ready features out of the box.</p>\n<p><b>Key reasons:</b></p>\n<ol>\n  <li><b>Externalized configuration</b> — application.yml, env vars, config server. Config never hardcoded.</li>\n  <li><b>Fat JAR deployment</b> — Self-contained executable, perfect for containers.</li>\n  <li><b>Health & metrics</b> — Actuator endpoints (/actuator/health, /actuator/prometheus) integrate with Kubernetes probes.</li>\n  <li><b>Graceful shutdown</b> — server.shutdown=graceful lets in-flight requests complete before terminating.</li>\n  <li><b>Distributed tracing</b> — Micrometer + Zipkin/Jaeger for request tracing across services.</li>\n  <li><b>Embedded server</b> — Each pod runs its own Tomcat; no external app server needed.</li>\n  <li><b>Spring Cloud integration</b> — Service discovery, config management, circuit breakers, API gateways.</li>\n  <li><b>Containerization support</b> — Layered JARs + Buildpacks for efficient Docker images.</li>\n</ol>\n<pre><code># Dockerfile (Spring Boot fat JAR)\nFROM eclipse-temurin:17-jre\nCOPY target/my-app.jar /app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"/app.jar\"]\n\n# Or use Spring Boot Buildpacks (no Dockerfile needed)\n./mvnw spring-boot:build-image\n</code></pre>\n<p><b>Kubernetes integration:</b></p>\n<pre><code>server:\n  port: 8080\n  shutdown: graceful\nspring:\n  lifecycle:\n    timeout-per-shutdown-phase: 30s\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,prometheus\n  endpoint:\n    health:\n      probes:\n        enabled: true\n</code></pre>",
      "difficulty": "Intermediate",
      "tags": [
        "Spring Boot",
        "Cloud",
        "Microservices",
        "Kubernetes"
      ],
      "keyPoints": [
        "Externalized configuration — application.yml, env vars, config server. Config never hardcoded.",
        "Fat JAR deployment — Self-contained executable, perfect for containers.",
        "Health & metrics — Actuator endpoints (/actuator/health, /actuator/prometheus) integrate with Kubernetes probes."
      ]
    },
    {
      "question": "What are the most common Spring Boot performance mistakes?",
      "answer": "<p>Top performance pitfalls in Spring Boot applications:</p>\n<ol>\n  <li><b>Not using connection pooling</b> — HikariCP is default, but overriding with misconfigured pool kills DB performance.\n    <pre><code>spring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.minimum-idle=5\nspring.datasource.hikari.idle-timeout=30000</code></pre></li>\n  <li><b>N+1 query problem with JPA</b> — Lazy-loading in a loop causes hundreds of queries.\n    <pre><code>// BAD: N+1 queries\nList&lt;Order&gt; orders = orderRepo.findAll();\nfor (Order o : orders) { o.getItems().size(); } // 1 query per order!\n\n// GOOD: JOIN FETCH\n@Query(\"SELECT o FROM Order o JOIN FETCH o.items\")\nList&lt;Order&gt; findAllWithItems();</code></pre></li>\n  <li><b>Not enabling lazy initialization</b> — All beans created at startup even if unused.\n    <pre><code>spring.main.lazy-initialization=true</code></pre></li>\n  <li><b>Synchronous blocking I/O</b> — RestTemplate blocks threads. Use WebClient for non-blocking.</li>\n  <li><b>Over-scanning components</b> — Broad @ComponentScan packages slow startup.</li>\n  <li><b>Not caching expensive operations</b> — Use @Cacheable for repeated lookups.\n    <pre><code>@Cacheable(\"users\")\npublic User findById(Long id) { ... }</code></pre></li>\n  <li><b>Excessive logging</b> — DEBUG/TRACE in production adds significant overhead.</li>\n  <li><b>Not tuning JVM</b> — Default heap is often too small.\n    <pre><code>java -Xms512m -Xmx2g -jar app.jar</code></pre></li>\n  <li><b>Serializing too much data</b> — Returning full entities instead of DTOs causes large payloads.</li>\n  <li><b>Ignoring Actuator overhead</b> — Exposing all endpoints adds processing. Be selective.</li>\n</ol>\n<p><b>Quick wins:</b> HikariCP with tuned pools, JOIN FETCH for JPA, lazy init, DTOs in API responses, production log levels, JVM heap tuning.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Spring Boot",
        "Performance",
        "Best Practices"
      ],
      "keyPoints": [
        "Not enabling lazy initialization — All beans created at startup even if unused. spring.main.lazy-initialization=true",
        "Synchronous blocking I/O — RestTemplate blocks threads. Use WebClient for non-blocking.",
        "Over-scanning components — Broad @ComponentScan packages slow startup."
      ]
    }
  ]
}
