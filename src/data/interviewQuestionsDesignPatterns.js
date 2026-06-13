// Auto-generated interview questions with key-points summaries
// Generated: 2026-06-13T18:03:17.483Z

export const designPatternsQuestions = {
  "questions": [
    {
      "question": "What are SOLID principles?",
      "answer": "<p>\n              <strong>SOLID</strong> is an acronym coined by Robert C. Martin (\"Uncle Bob\") for five\n              object-oriented design principles that, when applied together, make software systems\n              more <strong>understandable, flexible, and maintainable</strong>. Each letter stands\n              for a principle; each is covered in detail in the next five questions.\n            </p>\n\n            <strong>Quick Reference Table:</strong>\n            <table>\n              <tr><th>Letter</th><th>Principle</th><th>One-Line Summary</th></tr>\n              <tr><td><strong>S</strong></td><td>Single Responsibility</td><td>One class, one reason to change</td></tr>\n              <tr><td><strong>O</strong></td><td>Open/Closed</td><td>Open for extension, closed for modification</td></tr>\n              <tr><td><strong>L</strong></td><td>Liskov Substitution</td><td>Subtypes must be substitutable for their base types</td></tr>\n              <tr><td><strong>I</strong></td><td>Interface Segregation</td><td>Prefer many small interfaces over one fat one</td></tr>\n              <tr><td><strong>D</strong></td><td>Dependency Inversion</td><td>Depend on abstractions, not concretions</td></tr>\n            </table>\n\n            <strong>Why these principles matter:</strong>\n            <ul>\n              <li><strong>Maintainability</strong> — Small, focused classes are easier to read, test, and refactor.</li>\n              <li><strong>Extensibility</strong> — Adding new features doesn't require modifying existing, tested code.</li>\n              <li><strong>Testability</strong> — Loosely-coupled code can be unit-tested with mocks and stubs.</li>\n              <li><strong>Reusability</strong> — Well-abstracted components can be reused across projects.</li>\n            </ul>\n\n            <strong>Where SOLID fits in modern development:</strong>\n            <p>\n              SOLID is the foundation of clean architecture. It works hand-in-hand with the GoF\n              design patterns (the next set of questions) — for example, <em>Strategy</em> implements\n              OCP, <em>Decorator</em> implements ISP, and <em>Dependency Injection</em> is the\n              mechanism for DIP.\n            </p>\n\n            <strong>Common misconception:</strong>\n            <p>\n              SOLID is often presented as a rigid set of rules. In practice, they are\n              <strong>guidelines that reveal design problems</strong>. Over-applying them (e.g.,\n              forcing ISP onto a 2-method interface) leads to unnecessary complexity. Use judgment\n              and let the principles guide refactoring, not pre-emptively over-engineer.\n            </p>\n\n            <p><em>See the next five questions for in-depth coverage with code examples of each\n            principle.</em></p>",
      "difficulty": "Beginner",
      "tags": [
        "SOLID",
        "Design Principles"
      ],
      "keyPoints": [
        "Maintainability — Small, focused classes are easier to read, test, and refactor.",
        "Extensibility — Adding new features doesn't require modifying existing, tested code.",
        "Testability — Loosely-coupled code can be unit-tested with mocks and stubs."
      ]
    },
    {
      "question": "S - Single Responsibility Principle (SRP)",
      "answer": "<p>\n                  A class should have only one reason to change, meaning it should have only one job\n                  or responsibility. This promotes higher cohesion and lower coupling.\n                </p>\n                <strong>Example:</strong>\n                A class that manages user data should not also be responsible for sending emails.\n                These should be separate classes.\n                <pre ngnonbindable=\"\"><code class=\"language-java\">// Bad: User class has two responsibilities\npublic class User {\n    public void saveUserToDatabase() { /* ... */ }\n    public void sendWelcomeEmail() { /* ... */ }\n}\n\n// Good: Responsibilities are separated\npublic class User { /* User properties */ }\n\npublic class UserRepository {\n    public void save(User user) { /* ... */ }\n}\n\npublic class EmailService {\n    public void sendWelcomeEmail(User user) { /* ... */ }\n}</code></pre>\n\n<strong>Why it matters:</strong> When a class has multiple responsibilities, changes to one responsibility risk breaking the other. SRP makes code easier to test, refactor, and understand.\n\n<strong>Common violations:</strong>\n<ul>\n  <li>God objects that handle UI, business logic, and data access</li>\n  <li>Service classes with \"Util\" or \"Helper\" in the name doing everything</li>\n  <li>Controllers that directly access the database</li>\n</ul>",
      "difficulty": "Beginner",
      "tags": [
        "SOLID",
        "SRP"
      ],
      "keyPoints": [
        "God objects that handle UI, business logic, and data access",
        "Service classes with \"Util\" or \"Helper\" in the name doing everything",
        "Controllers that directly access the database"
      ]
    },
    {
      "question": "O - Open/Closed Principle (OCP)",
      "answer": "<p>\n                  Software entities (classes, modules, functions) should be open for extension but\n                  closed for modification. You should be able to add new functionality without\n                  changing existing code.\n                </p>\n                <strong>Example:</strong>\n                Use interfaces or abstract classes to allow new implementations without modifying\n                the core logic.\n                <pre ngnonbindable=\"\"><code class=\"language-java\">// Bad: Modifying the class for new shapes\npublic class ShapeDrawer {\n    public void draw(Object shape) {\n        if (shape instanceof Square) { /* draw square */ }\n        else if (shape instanceof Circle) { /* draw circle */ }\n    }\n}\n\n// Good: Extending with new shape classes\npublic interface Shape {\n    void draw();\n}\n\npublic class Square implements Shape {\n    public void draw() { /* ... */ }\n}\n\npublic class ShapeDrawer {\n    public void draw(Shape shape) {\n        shape.draw();\n    }\n}</code></pre>\n\n<strong>Techniques to achieve OCP:</strong>\n<ul>\n  <li><strong>Strategy Pattern:</strong> Swap algorithms without modifying context</li>\n  <li><strong>Template Method:</strong> Define skeleton in base class, override steps</li>\n  <li><strong>Observer Pattern:</strong> Add new listeners without changing the subject</li>\n</ul>",
      "difficulty": "Beginner",
      "tags": [
        "SOLID",
        "OCP"
      ],
      "keyPoints": [
        "Strategy Pattern: Swap algorithms without modifying context",
        "Template Method: Define skeleton in base class, override steps",
        "Observer Pattern: Add new listeners without changing the subject"
      ]
    },
    {
      "question": "L - Liskov Substitution Principle (LSP)",
      "answer": "<p>\n                  Objects of a superclass should be replaceable with objects of a subclass without\n                  affecting the correctness of the program. A subclass must be a true substitute for\n                  its superclass.\n                </p>\n                <strong>Example:</strong>\n                A classic example is the Square-Rectangle problem. A Square might inherit from a\n                Rectangle, but setting width and height independently violates LSP.\n                <pre ngnonbindable=\"\"><code class=\"language-java\">// Bad: Penguin is a Bird but can't fly, breaking the assumption.\npublic class Bird {\n    public void fly() { /* ... */ }\n}\n\npublic class Penguin extends Bird {\n    @Override\n    public void fly() {\n        throw new UnsupportedOperationException(\"Penguins can't fly\");\n    }\n}\n\n// Good: Create a more suitable abstraction\npublic abstract class Bird { }\n\npublic class FlyingBird extends Bird {\n    public void fly() { /* ... */ }\n}\n\npublic class Penguin extends Bird {\n    // No fly method, maybe a swim() method\n}</code></pre>\n\n<strong>LSP violations to watch for:</strong>\n<ul>\n  <li>Subclass throws `UnsupportedOperationException` for inherited methods</li>\n  <li>Subclass strengthens preconditions or weakens postconditions</li>\n  <li>Client code needs `instanceof` checks before calling methods</li>\n</ul>",
      "difficulty": "Beginner",
      "tags": [
        "SOLID",
        "LSP"
      ],
      "keyPoints": [
        "Subclass throws `UnsupportedOperationException` for inherited methods",
        "Subclass strengthens preconditions or weakens postconditions",
        "Client code needs `instanceof` checks before calling methods"
      ]
    },
    {
      "question": "I - Interface Segregation Principle (ISP)",
      "answer": "<p>\n                  Clients should not be forced to depend on interfaces they do not use. It's better\n                  to have many small, specific interfaces (role interfaces) than one large,\n                  general-purpose one.\n                </p>\n                <strong>Example:</strong>\n                A robot worker shouldn't be forced to implement an `eat` method if it doesn't eat.\n                <pre ngnonbindable=\"\"><code class=\"language-java\">// Bad: \"Fat\" interface\npublic interface Worker {\n    void work();\n    void eat();\n}\n\n// Good: Segregated interfaces\npublic interface Workable {\n    void work();\n}\n\npublic interface Eatable {\n    void eat();\n}\n\npublic class HumanWorker implements Workable, Eatable { /* ... */ }\npublic class RobotWorker implements Workable { /* ... */ }</code></pre>\n\n<strong>Key insight:</strong> ISP is about preventing \"interface bloat.\" When an interface grows too large, any change to it forces recompilation of all implementing classes — even those that don't use the changed method.</p>",
      "difficulty": "Beginner",
      "tags": [
        "SOLID",
        "ISP"
      ],
      "keyPoints": [
        "Clients should not be forced to depend on interfaces they do not use.",
        "It's better to have many small, specific interfaces (role interfaces) than one large, general-purpose one."
      ]
    },
    {
      "question": "D - Dependency Inversion Principle (DIP)",
      "answer": "<p>\n                  High-level modules should not depend on low-level modules. Both should depend on\n                  abstractions (e.g., interfaces). This allows for loose coupling and easier\n                  testing.\n                </p>\n                <strong>Example:</strong>\n                A `NotificationService` should depend on a `MessageSender` interface, not a concrete\n                `EmailSender` class.\n                <pre ngnonbindable=\"\"><code class=\"language-java\">// Bad: High-level module depends on low-level module\npublic class NotificationService {\n    private EmailService emailService = new EmailService(); // Direct dependency\n    public void notify() {\n        emailService.send();\n    }\n}\n\n// Good: Both depend on an abstraction (Dependency Injection)\npublic interface MessageSender {\n    void send();\n}\n\npublic class EmailService implements MessageSender { /* ... */ }\n\npublic class NotificationService {\n    private final MessageSender sender; // Depends on abstraction\n\n    public NotificationService(MessageSender sender) {\n        this.sender = sender;\n    }\n\n    public void notify() {\n        sender.send();\n    }\n}</code></pre>\n\n<strong>DIP vs DI vs IoC:</strong>\n<ul>\n  <li><strong>DIP</strong> — The principle: depend on abstractions, not concretions</li>\n  <li><strong>DI (Dependency Injection)</strong> — The technique: pass dependencies via constructor/setter</li>\n  <li><strong>IoC (Inversion of Control)</strong> — The framework pattern: the framework calls your code, not vice versa</li>\n</ul>",
      "difficulty": "Beginner",
      "tags": [
        "SOLID",
        "DIP"
      ],
      "keyPoints": [
        "DIP — The principle: depend on abstractions, not concretions",
        "DI (Dependency Injection) — The technique: pass dependencies via constructor/setter",
        "IoC (Inversion of Control) — The framework pattern: the framework calls your code, not vice versa"
      ]
    },
    {
      "question": "What are common design patterns in Java?",
      "answer": "<p>\n              Design patterns are reusable solutions to commonly occurring problems in software design.\n              Java most commonly uses patterns from three categories:\n            </p>\n\n            <strong>Creational Patterns:</strong>\n            <ul>\n              <li><strong>Singleton</strong> — Ensures a class has only one instance. Used for config managers, connection pools, loggers.</li>\n              <li><strong>Factory Method</strong> — Creates objects without specifying the exact class. Decouples client from concrete types.</li>\n              <li><strong>Builder</strong> — Step-by-step construction of complex objects. Great for objects with many optional fields.</li>\n              <li><strong>Prototype</strong> — Clones existing objects instead of creating new ones. Useful when creation is expensive.</li>\n            </ul>\n\n            <strong>Behavioral Patterns:</strong>\n            <ul>\n              <li><strong>Observer</strong> — One-to-many dependency: when one object changes, all dependents are notified. Used in event systems, MVC.</li>\n              <li><strong>Strategy</strong> — Encapsulates interchangeable algorithms. Think payment methods, sorting strategies.</li>\n              <li><strong>Decorator</strong> — Adds behavior dynamically without modifying the original class. Java I/O streams are built this way.</li>\n            </ul>\n\n            <strong>Architectural Patterns:</strong>\n            <ul>\n              <li><strong>Event Sourcing</strong> — Stores state as a sequence of events, enabling full audit trails and temporal queries.</li>\n              <li><strong>Layered Architecture</strong> — Controller → Service → Repository separation (standard Spring Boot pattern).</li>\n            </ul>\n\n            <p>Each of these patterns has its own dedicated question below with full code examples.</p>",
      "difficulty": "Beginner",
      "tags": [
        "Design Patterns"
      ],
      "keyPoints": [
        "Singleton — Ensures a class has only one instance. Used for config managers, connection pools, loggers.",
        "Factory Method — Creates objects without specifying the exact class. Decouples client from concrete types.",
        "Builder — Step-by-step construction of complex objects. Great for objects with many optional fields."
      ]
    },
    {
      "question": "Singleton Pattern",
      "answer": "<p>\n                  Ensures a class has only one instance and provides a global point of access to it.\n                  Commonly used for config managers, connection pools, and loggers.\n                </p>\n\n                <strong>Thread-Safe Singleton (Double-Checked Locking):</strong>\n                <pre ngnonbindable=\"\"><code class=\"language-java\">public class Singleton {\n    private static volatile Singleton instance;\n\n    private Singleton() { }\n\n    public static Singleton getInstance() {\n        if (instance == null) {                        // First check (no lock)\n            synchronized (Singleton.class) {\n                if (instance == null) {                 // Second check (with lock)\n                    instance = new Singleton();\n                }\n            }\n        }\n        return instance;\n    }\n}</code></pre>\n\n                <strong>Alternative — Eager Initialization:</strong>\n                <pre ngnonbindable=\"\"><code class=\"language-java\">public class EagerSingleton {\n    private static final EagerSingleton INSTANCE = new EagerSingleton();\n    private EagerSingleton() { }\n    public static EagerSingleton getInstance() { return INSTANCE; }\n}</code></pre>\n\n                <strong>Alternative — Enum Singleton (Best Practice per Joshua Bloch):</strong>\n                <pre ngnonbindable=\"\"><code class=\"language-java\">public enum EnumSingleton {\n    INSTANCE;\n    public void doSomething() { /* ... */ }\n}\n// Usage: EnumSingleton.INSTANCE.doSomething();</code></pre>\n\n<strong>Singleton Pitfalls:</strong>\n<ul>\n  <li><strong>Reflection attack:</strong> Private constructor can be bypassed with <code>setAccessible(true)</code></li>\n  <li><strong>Serialization:</strong> Must implement <code>readResolve()</code> to prevent creating a second instance during deserialization</li>\n  <li><strong>Testing:</strong> Global state makes unit tests flaky — consider dependency injection instead</li>\n  <li><strong>Not truly singleton in Spring:</strong> Spring \"singleton\" is per-container, not per-JVM</li>\n</ul>",
      "difficulty": "Intermediate",
      "tags": [
        "Creational",
        "Singleton",
        "Design Patterns"
      ],
      "keyPoints": [
        "Reflection attack: Private constructor can be bypassed with setAccessible(true)",
        "Serialization: Must implement readResolve() to prevent creating a second instance during deserialization",
        "Testing: Global state makes unit tests flaky — consider dependency injection instead"
      ]
    },
    {
      "question": "Factory Method Pattern",
      "answer": "<p>\n              Defines an interface for creating an object but lets subclasses alter the type of\n              objects that will be created. It promotes loose coupling by allowing you to create\n              objects without specifying the exact class.\n            </p>\n            <strong>Example:</strong>\n            <pre ngnonbindable=\"\"><code class=\"language-java\">// Product interface\npublic interface Shape {\n    void draw();\n}\n\n// Concrete products\npublic class Circle implements Shape {\n    @Override\n    public void draw() { System.out.println(\"Drawing a Circle\"); }\n}\n\npublic class Square implements Shape {\n    @Override\n    public void draw() { System.out.println(\"Drawing a Square\"); }\n}\n\n// Creator (Factory)\npublic abstract class ShapeFactory {\n    public abstract Shape createShape();\n}\n\n// Concrete Creators\npublic class CircleFactory extends ShapeFactory {\n    @Override\n    public Shape createShape() { return new Circle(); }\n}\n\npublic class SquareFactory extends ShapeFactory {\n    @Override\n    public Shape createShape() { return new Square(); }\n}</code></pre>\n\n<strong>When to use:</strong>\n<ul>\n  <li>When the exact type shouldn't be known at compile time</li>\n  <li>When you want to delegate object creation to subclasses</li>\n  <li>When you need to decouple client code from concrete classes (e.g., logging frameworks, JDBC drivers)</li>\n</ul>\n\n<strong>Factory Method vs Simple Factory:</strong> Simple Factory is a static method that returns objects — not a true GoF pattern but very common in practice. Factory Method uses inheritance and lets subclasses decide.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Creational",
        "Factory",
        "Design Patterns"
      ],
      "keyPoints": [
        "When the exact type shouldn't be known at compile time",
        "When you want to delegate object creation to subclasses",
        "When you need to decouple client code from concrete classes (e.g., logging frameworks, JDBC drivers)"
      ]
    },
    {
      "question": "Builder Pattern",
      "answer": "<p>\n              Separates the construction of a complex object from its representation, so the same\n              construction process can create different representations. It's useful when an object\n              has many optional parameters or requires a multi-step creation process.\n            </p>\n            <strong>Example:</strong>\n            <pre ngnonbindable=\"\"><code class=\"language-java\">public class User {\n    private final String firstName; // required\n    private final String lastName;  // required\n    private final int age;          // optional\n    private final String phone;     // optional\n\n    private User(UserBuilder builder) {\n        this.firstName = builder.firstName;\n        this.lastName = builder.lastName;\n        this.age = builder.age;\n        this.phone = builder.phone;\n    }\n\n    public static class UserBuilder {\n        private final String firstName;\n        private final String lastName;\n        private int age;\n        private String phone;\n\n        public UserBuilder(String firstName, String lastName) {\n            this.firstName = firstName;\n            this.lastName = lastName;\n        }\n\n        public UserBuilder age(int age) {\n            this.age = age;\n            return this;\n        }\n\n        public UserBuilder phone(String phone) {\n            this.phone = phone;\n            return this;\n        }\n\n        public User build() {\n            return new User(this);\n        }\n    }\n}\n// Usage: User user = new User.UserBuilder(\"John\", \"Doe\").age(30).build();</code></pre>\n\n<strong>Builder vs Constructor Telescoping:</strong>\n<ul>\n  <li><strong>Telescoping constructors:</strong> <code>new User(\"John\", \"Doe\", 30, null, null, \"NY\")</code> — hard to read, error-prone</li>\n  <li><strong>Builder:</strong> <code>new User.UserBuilder(\"John\", \"Doe\").age(30).city(\"NY\").build()</code> — readable, self-documenting</li>\n</ul>\n\n<strong>Real-world usage:</strong> <code>StringBuilder</code>, <code>DocumentBuilder</code> (XML), Lombok <code>@Builder</code>, Spring <code>UriComponentsBuilder</code></p>",
      "difficulty": "Intermediate",
      "tags": [
        "Creational",
        "Builder",
        "Design Patterns"
      ],
      "keyPoints": [
        "Telescoping constructors: new User(\"John\", \"Doe\", 30, null, null, \"NY\") — hard to read, error-prone",
        "Builder: new User.UserBuilder(\"John\", \"Doe\").age(30).city(\"NY\").build() — readable, self-documenting"
      ]
    },
    {
      "question": "Observer Pattern",
      "answer": "<p>\n              Defines a one-to-many dependency between objects so that when one object (the subject)\n              changes state, all its dependents (observers) are notified and updated automatically.\n            </p>\n            <strong>Example:</strong>\n            <pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.ArrayList;\nimport java.util.List;\n\n// Subject\ninterface Subject {\n    void register(Observer o);\n    void unregister(Observer o);\n    void notifyObservers();\n}\n\nclass NewsAgency implements Subject {\n    private String news;\n    private List&lt;Observer&gt; channels = new ArrayList&lt;&gt;();\n\n    public void setNews(String news) {\n        this.news = news;\n        notifyObservers();\n    }\n\n    @Override\n    public void register(Observer o) { channels.add(o); }\n\n    @Override\n    public void unregister(Observer o) { channels.remove(o); }\n\n    @Override\n    public void notifyObservers() {\n        for (Observer o : channels) {\n            o.update(news);\n        }\n    }\n}\n\n// Observer\ninterface Observer {\n    void update(String news);\n}\n\nclass NewsChannel implements Observer {\n    private String channelName;\n    public NewsChannel(String name) { this.channelName = name; }\n    @Override\n    public void update(String news) {\n        System.out.println(channelName + \" received news: \" + news);\n    }\n}</code></pre>\n\n<strong>Common uses in Java/Spring:</strong>\n<ul>\n  <li><code>java.util.Observable</code> (deprecated) / <code>java.beans.PropertyChangeListener</code></li>\n  <li>Spring's <code>ApplicationEvent</code> + <code>@EventListener</code></li>\n  <li>Reactive programming (Project Reactor, RxJava)</li>\n  <li>GUI event listeners (Swing, Android)</li>\n</ul>\n\n<strong>Gotcha:</strong> Memory leaks! If observers aren't unregistered, the subject holds references preventing GC. Use <code>WeakReference</code> or explicit <code>unregister()</code>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Behavioral",
        "Observer",
        "Design Patterns"
      ],
      "keyPoints": [
        "java.util.Observable (deprecated) / java.beans.PropertyChangeListener",
        "Spring's ApplicationEvent + @EventListener",
        "Reactive programming (Project Reactor, RxJava)"
      ]
    },
    {
      "question": "Strategy Pattern",
      "answer": "<p>\n              Defines a family of algorithms, encapsulates each one, and makes them interchangeable.\n              Strategy lets the algorithm vary independently from clients that use it.\n            </p>\n            <strong>Example:</strong>\n            <pre ngnonbindable=\"\"><code class=\"language-java\">// Strategy interface\npublic interface PaymentStrategy {\n    void pay(int amount);\n}\n\n// Concrete Strategies\npublic class CreditCardPayment implements PaymentStrategy {\n    public void pay(int amount) { System.out.println(amount + \" paid with credit card.\"); }\n}\n\npublic class PayPalPayment implements PaymentStrategy {\n    public void pay(int amount) { System.out.println(amount + \" paid using PayPal.\"); }\n}\n\n// Context\npublic class ShoppingCart {\n    private PaymentStrategy paymentStrategy;\n\n    public void setPaymentStrategy(PaymentStrategy strategy) {\n        this.paymentStrategy = strategy;\n    }\n\n    public void checkout(int amount) {\n        paymentStrategy.pay(amount);\n    }\n}</code></pre>\n\n<strong>Strategy vs State Pattern:</strong>\n<ul>\n  <li><strong>Strategy</strong> — Client chooses the algorithm externally</li>\n  <li><strong>State</strong> — Object changes its own behavior based on internal state</li>\n</ul>\n\n<strong>Real-world:</strong> <code>Collections.sort()</code> with <code>Comparator</code>, <code>Comparator</code> itself is a strategy for ordering.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Behavioral",
        "Strategy",
        "Design Patterns"
      ],
      "keyPoints": [
        "Strategy — Client chooses the algorithm externally",
        "State — Object changes its own behavior based on internal state"
      ]
    },
    {
      "question": "Decorator Pattern",
      "answer": "<p>\n              Attaches additional responsibilities to an object dynamically. Decorators provide a\n              flexible alternative to subclassing for extending functionality.\n            </p>\n            <strong>Example:</strong>\n            <pre ngnonbindable=\"\"><code class=\"language-java\">// Component interface\ninterface Coffee {\n    double getCost();\n    String getDescription();\n}\n\n// Concrete Component\nclass SimpleCoffee implements Coffee {\n    @Override\n    public double getCost() { return 1.0; }\n    @Override\n    public String getDescription() { return \"Simple coffee\"; }\n}\n\n// Decorator\nabstract class CoffeeDecorator implements Coffee {\n    protected final Coffee decoratedCoffee;\n    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }\n    public double getCost() { return decoratedCoffee.getCost(); }\n    public String getDescription() { return decoratedCoffee.getDescription(); }\n}\n\n// Concrete Decorators\nclass WithMilk extends CoffeeDecorator {\n    public WithMilk(Coffee c) { super(c); }\n    @Override\n    public double getCost() { return super.getCost() + 0.5; }\n    @Override\n    public String getDescription() { return super.getDescription() + \", with milk\"; }\n}\n\nclass WithSugar extends CoffeeDecorator {\n    public WithSugar(Coffee c) { super(c); }\n    @Override\n    public double getCost() { return super.getCost() + 0.2; }\n    @Override\n    public String getDescription() { return super.getDescription() + \", with sugar\"; }\n}\n\n// Usage: Coffee coffee = new WithSugar(new WithMilk(new SimpleCoffee()));</code></pre>\n\n<strong>Java I/O is built on Decorators:</strong>\n<code>new BufferedInputStream(new FileInputStream(\"file.txt\"))</code> — each stream wraps another, adding buffering, encryption, etc.\n\n<strong>Decorator vs Inheritance:</strong> Decorator adds behavior at runtime without an explosion of subclasses. With inheritance, <code>CoffeeWithMilkAndSugar</code> becomes a combinatorial nightmare.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Structural",
        "Decorator",
        "Design Patterns"
      ],
      "keyPoints": [
        "Attaches additional responsibilities to an object dynamically.",
        "Decorators provide a flexible alternative to subclassing for extending functionality."
      ]
    },
    {
      "question": "Prototype Pattern",
      "answer": "<p>\n              Specifies the kinds of objects to create using a prototypical instance and creates new\n              objects by copying this prototype. It's useful when the cost of creating an object is\n              more expensive or complex than copying an existing one.\n            </p>\n            <strong>Example:</strong>\n            <pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.HashMap;\nimport java.util.Map;\n\n// Prototype interface\ninterface Shape extends Cloneable {\n    void draw();\n    Shape clone();\n}\n\n// Concrete Prototype\nclass Circle implements Shape {\n    private int radius;\n    private String color;\n\n    public Circle(int radius, String color) {\n        this.radius = radius;\n        this.color = color;\n    }\n\n    @Override\n    public void draw() { System.out.println(\"Circle: r=\" + radius + \", color=\" + color); }\n\n    @Override\n    public Shape clone() {\n        try {\n            return (Shape) super.clone();  // Shallow copy\n        } catch (CloneNotSupportedException e) {\n            return null;\n        }\n    }\n}\n\n// Prototype Registry\nclass ShapeCache {\n    private static Map&lt;String, Shape&gt; shapeMap = new HashMap&lt;&gt;();\n\n    public static Shape getShape(String shapeId) {\n        Shape cachedShape = shapeMap.get(shapeId);\n        return cachedShape.clone();\n    }\n\n    public static void loadCache() {\n        shapeMap.put(\"1\", new Circle(10, \"red\"));\n    }\n}</code></pre>\n\n<strong>Shallow vs Deep Copy:</strong>\n<ul>\n  <li><strong>Shallow copy</strong> (<code>super.clone()</code>) — copies primitives and references. Nested objects are shared.</li>\n  <li><strong>Deep copy</strong> — recursively clones all nested objects. Needed when prototype contains mutable fields.</li>\n</ul>\n\n<strong>When to use:</strong> Object creation is expensive (DB queries, network calls) and you need many similar objects with minor variations.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Creational",
        "Prototype",
        "Design Patterns"
      ],
      "keyPoints": [
        "Shallow copy ( super.clone() ) — copies primitives and references. Nested objects are shared.",
        "Deep copy — recursively clones all nested objects. Needed when prototype contains mutable fields."
      ]
    },
    {
      "question": "Explain your project architecture?",
      "answer": "<p>A typical Spring Boot project follows a <strong>layered architecture</strong> that separates concerns cleanly:</p>\n\n          <ul>\n            <li>\n              <strong>Controller Layer (Presentation):</strong>\n              Handles HTTP requests/responses, input validation, and routing. Uses <code>@RestController</code> and <code>@RequestMapping</code>.\n            </li>\n            <li>\n              <strong>Service Layer (Business Logic):</strong>\n              Contains core business rules, orchestrates workflows, and manages transactions. Uses <code>@Service</code> and <code>@Transactional</code>.\n            </li>\n            <li>\n              <strong>Repository Layer (Data Access):</strong>\n              Interacts with the database using Spring Data JPA repositories. Uses <code>@Repository</code> and extends <code>JpaRepository</code>.\n            </li>\n            <li>\n              <strong>Model/Entity Layer:</strong>\n              Represents database tables as Java classes with JPA annotations (<code>@Entity</code>, <code>@Table</code>, <code>@Column</code>).\n            </li>\n            <li>\n              <strong>DTO Layer:</strong>\n              Transfers data between layers efficiently, preventing entity exposure and over-posting vulnerabilities.\n            </li>\n            <li>\n              <strong>Exception Handling:</strong>\n              Uses <code>@ControllerAdvice</code> and custom exceptions for consistent error responses across the API.\n            </li>\n          </ul>\n\n<strong>Flow of a request:</strong>\n<pre>Client → Controller → Service → Repository → Database\n                                            ↓\nClient ← Controller ← Service ← Repository ← Database</pre>\n\n<strong>Interview tip:</strong> Be ready to explain YOUR specific project's layers, why you chose them, and how they communicate. Mention specific technologies (Kafka, Redis, etc.) if your project uses them.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Architecture",
        "Design Patterns"
      ],
      "keyPoints": [
        "Controller Layer (Presentation): Handles HTTP requests/responses, input validation, and routing. Uses @RestController and @RequestMapping .",
        "Service Layer (Business Logic): Contains core business rules, orchestrates workflows, and manages transactions. Uses @Service and @Transactional .",
        "Repository Layer (Data Access): Interacts with the database using Spring Data JPA repositories. Uses @Repository and extends JpaRepository ."
      ]
    },
    {
      "question": "What is the Event Sourcing Design Pattern?",
      "answer": "<p>\n            Event Sourcing is a powerful architectural pattern where all changes to an application's\n            state are stored as a sequence of immutable events. Instead of storing the current state\n            of a domain entity, you store the history of events that led to its current state. The\n            state can be reconstructed at any time by replaying the events.\n          </p>\n\n          <strong>Core Architecture & Flow:</strong>\n          <p>\n            The architecture revolves around a few key components that work together to process\n            changes and maintain state.\n          </p>\n          <ul>\n            <li>\n              <strong>Command:</strong>\n              An intent or request to change the state of the system (e.g., <code>CreateUserCommand</code>).\n            </li>\n            <li>\n              <strong>Aggregate:</strong>\n              A transactional boundary that receives a command. It validates the command against its\n              current state and, if successful, produces one or more events.\n            </li>\n            <li>\n              <strong>Event:</strong>\n              An immutable fact representing a state change that has occurred (e.g.,\n              <code>UserCreatedEvent</code>).\n            </li>\n            <li>\n              <strong>Event Store:</strong>\n              A specialized, append-only database that persists the sequence of events. It serves as\n              the single source of truth.\n            </li>\n          </ul>\n          <p>The typical flow is: Command → Aggregate → Event → Event Store.</p>\n\n          <strong>Architectural Types & Variations:</strong>\n          <p>\n            Event Sourcing is often implemented with other patterns to manage complexity and improve\n            performance.\n          </p>\n          <ol>\n            <li>\n              <strong>Basic Event Sourcing:</strong>\n              <p>\n                The current state of an aggregate is always rebuilt by replaying its entire event stream\n                from the beginning. Simple, but can become slow for aggregates with long histories.\n              </p>\n            </li>\n            <li>\n              <strong>Event Sourcing with Snapshots:</strong>\n              <p>\n                A snapshot of an aggregate's state is periodically saved. To reconstruct the state, load\n                the most recent snapshot and replay only events since that snapshot. Drastically reduces load times.\n              </p>\n            </li>\n            <li>\n              <strong>Event Sourcing with CQRS (Command Query Responsibility Segregation):</strong>\n              <p>\n                The most common and robust approach. The architecture is split into two sides:\n              </p>\n              <ul>\n                <li>\n                  <strong>Command Side:</strong> Handles state changes using Commands, Aggregates, and\n                  the Event Store (the \"write\" model).\n                </li>\n                <li>\n                  <strong>Query Side:</strong> Listens to the event stream and builds materialized views\n                  or \"read models\" optimized for specific queries. Allows efficient and scalable data retrieval.\n                </li>\n              </ul>\n            </li>\n          </ol>\n\n<strong>When to use Event Sourcing:</strong>\n<ul>\n  <li>Audit trails are required (financial, healthcare)</li>\n  <li>You need temporal queries (\"what was the state on Jan 15?\")</li>\n  <li>Complex domain logic with many state transitions</li>\n</ul>\n\n<strong>When NOT to use:</strong> Simple CRUD apps, low-write systems, or when eventual consistency is unacceptable.</p>",
      "difficulty": "Advanced",
      "tags": [
        "Architectural",
        "Event Sourcing",
        "CQRS",
        "Design Patterns"
      ],
      "keyPoints": [
        "Command: An intent or request to change the state of the system (e.g., CreateUserCommand ).",
        "Aggregate: A transactional boundary that receives a command. It validates the command against its current state and, if successful, produces one or more events.",
        "Event: An immutable fact representing a state change that has occurred (e.g., UserCreatedEvent )."
      ]
    },
    {
      "question": "What is the Immutable Design Pattern?",
      "answer": "<p>The Immutable pattern ensures that an object's state cannot be modified after creation. Immutable objects are inherently thread-safe, simplify concurrency, and reduce bugs caused by unexpected state changes.</p>\n\n<strong>Rules for creating immutable classes in Java:</strong>\n<ol>\n  <li>Declare the class as <code>final</code> (prevent subclassing)</li>\n  <li>Make all fields <code>private final</code></li>\n  <li>No setter methods</li>\n  <li>Initialize all fields via constructor</li>\n  <li>If a field is a mutable object, return a defensive copy in the getter</li>\n</ol>\n\n<strong>Complete Example:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">import java.util.Collections;\nimport java.util.List;\nimport java.util.ArrayList;\n\npublic final class ImmutableStudent {\n    private final String name;\n    private final int age;\n    private final List&lt;String&gt; courses;  // Mutable field!\n\n    public ImmutableStudent(String name, int age, List&lt;String&gt; courses) {\n        this.name = name;\n        this.age = age;\n        // Defensive copy — don't store the reference directly\n        this.courses = new ArrayList&lt;&gt;(courses);\n    }\n\n    public String getName() { return name; }\n    public int getAge() { return age; }\n    // Return unmodifiable view to prevent mutation\n    public List&lt;String&gt; getCourses() {\n        return Collections.unmodifiableList(courses);\n    }\n}</code></pre>\n\n<strong>Why immutable objects matter:</strong>\n<ul>\n  <li><strong>Thread-safe by default</strong> — No synchronization needed since state never changes</li>\n  <li><strong>Safe as Map keys / Set elements</strong> — <code>hashCode()</code> never changes</li>\n  <li><strong>Simplifies reasoning</strong> — No surprise mutations from other code</li>\n  <li><strong>Used by String, Integer, BigDecimal</strong> — All wrapper classes in Java are immutable</li>\n</ul>\n\n<strong>Gotcha:</strong> Forgetting the defensive copy on mutable fields (like <code>List</code>) is the #1 mistake. Without it, the caller can mutate the internal state after construction.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Creational",
        "Immutable",
        "Design Patterns"
      ],
      "keyPoints": [
        "Declare the class as final (prevent subclassing)",
        "Make all fields private final",
        "Initialize all fields via constructor"
      ]
    },
    {
      "question": "What is the Adapter Pattern?",
      "answer": "<p>The Adapter pattern converts the interface of a class into another interface that clients expect. It lets incompatible classes work together without modifying their source code — like a travel adapter that lets a US plug work in a European socket.</p>\n\n<strong>Class Diagram:</strong>\n<pre>\nClient → [Target Interface] ← [Adapter] → [Adaptee]\n                                    ↑\n                          Adapter wraps Adaptee\n</pre>\n\n<strong>Example — Legacy Payment Gateway Adapter:</strong>\n<pre ngnonbindable=\"\"><code class=\"language-java\">// Target interface (what the client expects)\npublic interface PaymentProcessor {\n    void processPayment(double amount);\n}\n\n// Adaptee (existing class with incompatible interface)\npublic class LegacyPaymentGateway {\n    public void makePayment(String currency, int cents) {\n        System.out.println(\"Processing \" + currency + \" \" + cents);\n    }\n}\n\n// Adapter bridges the gap\npublic class PaymentAdapter implements PaymentProcessor {\n    private LegacyPaymentGateway legacyGateway;\n\n    public PaymentAdapter(LegacyPaymentGateway gateway) {\n        this.legacyGateway = gateway;\n    }\n\n    @Override\n    public void processPayment(double amount) {\n        int cents = (int) (amount * 100);\n        legacyGateway.makePayment(\"USD\", cents);\n    }\n}\n\n// Usage\nPaymentProcessor processor = new PaymentAdapter(new LegacyPaymentGateway());\nprocessor.processPayment(29.99);</code></pre>\n\n<strong>Adapter vs Decorator vs Facade:</strong>\n<table>\n  <tr><th>Pattern</th><th>Purpose</th></tr>\n  <tr><td>Adapter</td><td>Make incompatible interfaces work together</td></tr>\n  <tr><td>Decorator</td><td>Add behavior without changing interface</td></tr>\n  <tr><td>Facade</td><td>Simplify a complex subsystem with one entry point</td></tr>\n</table>\n\n<strong>Real-world:</strong> <code>Arrays.asList()</code>, <code>Collections.list()</code>, Spring's <code>HandlerAdapter</code>.</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Structural",
        "Adapter",
        "Design Patterns"
      ],
      "keyPoints": [
        "The Adapter pattern converts the interface of a class into another interface that clients expect.",
        "It lets incompatible classes work together without modifying their source code — like a travel adapter that lets a US plug work in a European socket."
      ]
    },
    {
      "question": "What is the Repository Pattern?",
      "answer": "<p>The <strong>Repository Pattern</strong> abstracts the data access layer, providing a collection-like interface for accessing domain objects. It decouples business logic from persistence concerns.</p>\n\n<h4>Benefits</h4>\n<ul>\n  <li><strong>Testability</strong> — Easy to mock data access in unit tests</li>\n  <li><strong>Flexibility</strong> — Switch from SQL to NoSQL without changing business code</li>\n  <li><strong>Centralized Logic</strong> — Common queries in one place</li>\n  <li><strong>Domain-Focused</strong> — Methods named after use cases, not tables</li>\n</ul>\n\n<h4>Java Example</h4>\n<pre ngnonbindable=\"\"><code class=\"language-java\">// Generic Repository interface\npublic interface Repository&lt;T, ID&gt; {\n    Optional&lt;T&gt; findById(ID id);\n    List&lt;T&gt; findAll();\n    T save(T entity);\n    void deleteById(ID id);\n}\n\n// User-specific repository\npublic interface UserRepository extends Repository&lt;User, Long&gt; {\n    Optional&lt;User&gt; findByEmail(String email);\n    List&lt;User&gt; findByStatus(UserStatus status);\n}\n\n// Spring Data JPA implementation (auto-generated)\n@Repository\npublic interface UserRepository extends JpaRepository&lt;User, Long&gt; {\n    Optional&lt;User&gt; findByEmail(String email);  // Auto-implemented!\n}</code></pre>\n\n<h4>Repository vs DAO</h4>\n<table>\n  <tr><th>Aspect</th><th>Repository</th><th>DAO</th></tr>\n  <tr><td>Focus</td><td>Domain-driven</td><td>Data access</td></tr>\n  <tr><td>Returns</td><td>Domain objects</td><td>Tables/rows</td></tr>\n  <tr><td>Style</td><td>Collection-like</td><td>CRUD-focused</td></tr>\n</table>",
      "difficulty": "Intermediate",
      "tags": [
        "Repository",
        "Data Access",
        "Design Patterns"
      ],
      "keyPoints": [
        "Testability — Easy to mock data access in unit tests",
        "Flexibility — Switch from SQL to NoSQL without changing business code",
        "Centralized Logic — Common queries in one place"
      ]
    },
    {
      "question": "What is the Proxy Pattern?",
      "answer": "<p>The <strong>Proxy Pattern</strong> provides a placeholder or surrogate for another object to control access to it. Common in security, lazy loading, and remote calls.</p>\n\n<h4>Types of Proxies</h4>\n<ul>\n  <li><strong>Virtual Proxy</strong> — Lazy initialization of expensive objects</li>\n  <li><strong>Protection Proxy</strong> — Access control (security checks)</li>\n  <li><strong>Remote Proxy</strong> — Represents object in different address space (RPC, RMI)</li>\n  <li><strong>Caching Proxy</strong> — Cache results of expensive operations</li>\n</ul>\n\n<h4>Java Example — Dynamic Proxy</h4>\n<pre ngnonbindable=\"\"><code class=\"language-java\">public interface UserService {\n    User getUser(Long id);\n}\n\npublic class UserServiceImpl implements UserService {\n    public User getUser(Long id) {\n        // ... actual database call\n    }\n}\n\n// Create proxy that adds caching\nUserService realService = new UserServiceImpl();\nUserService proxy = (UserService) Proxy.newProxyInstance(\n    UserService.class.getClassLoader(),\n    new Class&lt;?&gt;[] { UserService.class },\n    (proxyObj, method, args) -&gt; {\n        System.out.println(\"Before: \" + method.getName());\n        Object result = method.invoke(realService, args);\n        System.out.println(\"After: \" + method.getName());\n        return result;\n    }\n);</code></pre>\n\n<h4>Spring AOP Uses Proxies</h4>\n<p>Spring creates dynamic proxies for beans with <code>@Transactional</code>, <code>@Cacheable</code>, <code>@Async</code>, etc. The proxy intercepts method calls and adds cross-cutting concerns.</p>\n\n<p><strong>Real-world use:</strong> Spring AOP, Hibernate lazy loading, Java RMI stubs, caching layers (Redis client).</p>",
      "difficulty": "Intermediate",
      "tags": [
        "Proxy",
        "Structural",
        "Design Patterns"
      ],
      "keyPoints": [
        "Virtual Proxy — Lazy initialization of expensive objects",
        "Protection Proxy — Access control (security checks)",
        "Remote Proxy — Represents object in different address space (RPC, RMI)"
      ]
    }
  ]
}
