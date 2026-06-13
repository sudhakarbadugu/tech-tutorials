export const designPatternsQuestions = {
  questions: [
    {
      question: 'What are SOLID principles?',
      answer: `<p>
              <strong>SOLID</strong> is an acronym coined by Robert C. Martin ("Uncle Bob") for five
              object-oriented design principles that, when applied together, make software systems
              more <strong>understandable, flexible, and maintainable</strong>. Each letter stands
              for a principle; each is covered in detail in the next five questions.
            </p>

            <strong>Quick Reference Table:</strong>
            <table>
              <tr><th>Letter</th><th>Principle</th><th>One-Line Summary</th></tr>
              <tr><td><strong>S</strong></td><td>Single Responsibility</td><td>One class, one reason to change</td></tr>
              <tr><td><strong>O</strong></td><td>Open/Closed</td><td>Open for extension, closed for modification</td></tr>
              <tr><td><strong>L</strong></td><td>Liskov Substitution</td><td>Subtypes must be substitutable for their base types</td></tr>
              <tr><td><strong>I</strong></td><td>Interface Segregation</td><td>Prefer many small interfaces over one fat one</td></tr>
              <tr><td><strong>D</strong></td><td>Dependency Inversion</td><td>Depend on abstractions, not concretions</td></tr>
            </table>

            <strong>Why these principles matter:</strong>
            <ul>
              <li><strong>Maintainability</strong> — Small, focused classes are easier to read, test, and refactor.</li>
              <li><strong>Extensibility</strong> — Adding new features doesn't require modifying existing, tested code.</li>
              <li><strong>Testability</strong> — Loosely-coupled code can be unit-tested with mocks and stubs.</li>
              <li><strong>Reusability</strong> — Well-abstracted components can be reused across projects.</li>
            </ul>

            <strong>Where SOLID fits in modern development:</strong>
            <p>
              SOLID is the foundation of clean architecture. It works hand-in-hand with the GoF
              design patterns (the next set of questions) — for example, <em>Strategy</em> implements
              OCP, <em>Decorator</em> implements ISP, and <em>Dependency Injection</em> is the
              mechanism for DIP.
            </p>

            <strong>Common misconception:</strong>
            <p>
              SOLID is often presented as a rigid set of rules. In practice, they are
              <strong>guidelines that reveal design problems</strong>. Over-applying them (e.g.,
              forcing ISP onto a 2-method interface) leads to unnecessary complexity. Use judgment
              and let the principles guide refactoring, not pre-emptively over-engineer.
            </p>

            <p><em>See the next five questions for in-depth coverage with code examples of each
            principle.</em></p>`,
      difficulty: 'Beginner',
      tags: ['SOLID', 'Design Principles']
    },
    {
      question: 'S - Single Responsibility Principle (SRP)',
      answer: `<p>
                  A class should have only one reason to change, meaning it should have only one job
                  or responsibility. This promotes higher cohesion and lower coupling.
                </p>
                <strong>Example:</strong>
                A class that manages user data should not also be responsible for sending emails.
                These should be separate classes.
                <pre ngnonbindable=""><code class="language-java">// Bad: User class has two responsibilities
public class User {
    public void saveUserToDatabase() { /* ... */ }
    public void sendWelcomeEmail() { /* ... */ }
}

// Good: Responsibilities are separated
public class User { /* User properties */ }

public class UserRepository {
    public void save(User user) { /* ... */ }
}

public class EmailService {
    public void sendWelcomeEmail(User user) { /* ... */ }
}</code></pre>

<strong>Why it matters:</strong> When a class has multiple responsibilities, changes to one responsibility risk breaking the other. SRP makes code easier to test, refactor, and understand.

<strong>Common violations:</strong>
<ul>
  <li>God objects that handle UI, business logic, and data access</li>
  <li>Service classes with "Util" or "Helper" in the name doing everything</li>
  <li>Controllers that directly access the database</li>
</ul>`,
      difficulty: 'Beginner',
      tags: ['SOLID', 'SRP']
    },
    {
      question: 'O - Open/Closed Principle (OCP)',
      answer: `<p>
                  Software entities (classes, modules, functions) should be open for extension but
                  closed for modification. You should be able to add new functionality without
                  changing existing code.
                </p>
                <strong>Example:</strong>
                Use interfaces or abstract classes to allow new implementations without modifying
                the core logic.
                <pre ngnonbindable=""><code class="language-java">// Bad: Modifying the class for new shapes
public class ShapeDrawer {
    public void draw(Object shape) {
        if (shape instanceof Square) { /* draw square */ }
        else if (shape instanceof Circle) { /* draw circle */ }
    }
}

// Good: Extending with new shape classes
public interface Shape {
    void draw();
}

public class Square implements Shape {
    public void draw() { /* ... */ }
}

public class ShapeDrawer {
    public void draw(Shape shape) {
        shape.draw();
    }
}</code></pre>

<strong>Techniques to achieve OCP:</strong>
<ul>
  <li><strong>Strategy Pattern:</strong> Swap algorithms without modifying context</li>
  <li><strong>Template Method:</strong> Define skeleton in base class, override steps</li>
  <li><strong>Observer Pattern:</strong> Add new listeners without changing the subject</li>
</ul>`,
      difficulty: 'Beginner',
      tags: ['SOLID', 'OCP']
    },
    {
      question: 'L - Liskov Substitution Principle (LSP)',
      answer: `<p>
                  Objects of a superclass should be replaceable with objects of a subclass without
                  affecting the correctness of the program. A subclass must be a true substitute for
                  its superclass.
                </p>
                <strong>Example:</strong>
                A classic example is the Square-Rectangle problem. A Square might inherit from a
                Rectangle, but setting width and height independently violates LSP.
                <pre ngnonbindable=""><code class="language-java">// Bad: Penguin is a Bird but can't fly, breaking the assumption.
public class Bird {
    public void fly() { /* ... */ }
}

public class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}

// Good: Create a more suitable abstraction
public abstract class Bird { }

public class FlyingBird extends Bird {
    public void fly() { /* ... */ }
}

public class Penguin extends Bird {
    // No fly method, maybe a swim() method
}</code></pre>

<strong>LSP violations to watch for:</strong>
<ul>
  <li>Subclass throws \`UnsupportedOperationException\` for inherited methods</li>
  <li>Subclass strengthens preconditions or weakens postconditions</li>
  <li>Client code needs \`instanceof\` checks before calling methods</li>
</ul>`,
      difficulty: 'Beginner',
      tags: ['SOLID', 'LSP']
    },
    {
      question: 'I - Interface Segregation Principle (ISP)',
      answer: `<p>
                  Clients should not be forced to depend on interfaces they do not use. It's better
                  to have many small, specific interfaces (role interfaces) than one large,
                  general-purpose one.
                </p>
                <strong>Example:</strong>
                A robot worker shouldn't be forced to implement an \`eat\` method if it doesn't eat.
                <pre ngnonbindable=""><code class="language-java">// Bad: "Fat" interface
public interface Worker {
    void work();
    void eat();
}

// Good: Segregated interfaces
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}

public class HumanWorker implements Workable, Eatable { /* ... */ }
public class RobotWorker implements Workable { /* ... */ }</code></pre>

<strong>Key insight:</strong> ISP is about preventing "interface bloat." When an interface grows too large, any change to it forces recompilation of all implementing classes — even those that don't use the changed method.</p>`,
      difficulty: 'Beginner',
      tags: ['SOLID', 'ISP']
    },
    {
      question: 'D - Dependency Inversion Principle (DIP)',
      answer: `<p>
                  High-level modules should not depend on low-level modules. Both should depend on
                  abstractions (e.g., interfaces). This allows for loose coupling and easier
                  testing.
                </p>
                <strong>Example:</strong>
                A \`NotificationService\` should depend on a \`MessageSender\` interface, not a concrete
                \`EmailSender\` class.
                <pre ngnonbindable=""><code class="language-java">// Bad: High-level module depends on low-level module
public class NotificationService {
    private EmailService emailService = new EmailService(); // Direct dependency
    public void notify() {
        emailService.send();
    }
}

// Good: Both depend on an abstraction (Dependency Injection)
public interface MessageSender {
    void send();
}

public class EmailService implements MessageSender { /* ... */ }

public class NotificationService {
    private final MessageSender sender; // Depends on abstraction

    public NotificationService(MessageSender sender) {
        this.sender = sender;
    }

    public void notify() {
        sender.send();
    }
}</code></pre>

<strong>DIP vs DI vs IoC:</strong>
<ul>
  <li><strong>DIP</strong> — The principle: depend on abstractions, not concretions</li>
  <li><strong>DI (Dependency Injection)</strong> — The technique: pass dependencies via constructor/setter</li>
  <li><strong>IoC (Inversion of Control)</strong> — The framework pattern: the framework calls your code, not vice versa</li>
</ul>`,
      difficulty: 'Beginner',
      tags: ['SOLID', 'DIP']
    },
    {
      question: 'What are common design patterns in Java?',
      answer: `<p>
              Design patterns are reusable solutions to commonly occurring problems in software design.
              Java most commonly uses patterns from three categories:
            </p>

            <strong>Creational Patterns:</strong>
            <ul>
              <li><strong>Singleton</strong> — Ensures a class has only one instance. Used for config managers, connection pools, loggers.</li>
              <li><strong>Factory Method</strong> — Creates objects without specifying the exact class. Decouples client from concrete types.</li>
              <li><strong>Builder</strong> — Step-by-step construction of complex objects. Great for objects with many optional fields.</li>
              <li><strong>Prototype</strong> — Clones existing objects instead of creating new ones. Useful when creation is expensive.</li>
            </ul>

            <strong>Behavioral Patterns:</strong>
            <ul>
              <li><strong>Observer</strong> — One-to-many dependency: when one object changes, all dependents are notified. Used in event systems, MVC.</li>
              <li><strong>Strategy</strong> — Encapsulates interchangeable algorithms. Think payment methods, sorting strategies.</li>
              <li><strong>Decorator</strong> — Adds behavior dynamically without modifying the original class. Java I/O streams are built this way.</li>
            </ul>

            <strong>Architectural Patterns:</strong>
            <ul>
              <li><strong>Event Sourcing</strong> — Stores state as a sequence of events, enabling full audit trails and temporal queries.</li>
              <li><strong>Layered Architecture</strong> — Controller → Service → Repository separation (standard Spring Boot pattern).</li>
            </ul>

            <p>Each of these patterns has its own dedicated question below with full code examples.</p>`,
      difficulty: 'Beginner',
      tags: ['Design Patterns']
    },
    {
      question: 'Singleton Pattern',
      answer: `<p>
                  Ensures a class has only one instance and provides a global point of access to it.
                  Commonly used for config managers, connection pools, and loggers.
                </p>

                <strong>Thread-Safe Singleton (Double-Checked Locking):</strong>
                <pre ngnonbindable=""><code class="language-java">public class Singleton {
    private static volatile Singleton instance;

    private Singleton() { }

    public static Singleton getInstance() {
        if (instance == null) {                        // First check (no lock)
            synchronized (Singleton.class) {
                if (instance == null) {                 // Second check (with lock)
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}</code></pre>

                <strong>Alternative — Eager Initialization:</strong>
                <pre ngnonbindable=""><code class="language-java">public class EagerSingleton {
    private static final EagerSingleton INSTANCE = new EagerSingleton();
    private EagerSingleton() { }
    public static EagerSingleton getInstance() { return INSTANCE; }
}</code></pre>

                <strong>Alternative — Enum Singleton (Best Practice per Joshua Bloch):</strong>
                <pre ngnonbindable=""><code class="language-java">public enum EnumSingleton {
    INSTANCE;
    public void doSomething() { /* ... */ }
}
// Usage: EnumSingleton.INSTANCE.doSomething();</code></pre>

<strong>Singleton Pitfalls:</strong>
<ul>
  <li><strong>Reflection attack:</strong> Private constructor can be bypassed with <code>setAccessible(true)</code></li>
  <li><strong>Serialization:</strong> Must implement <code>readResolve()</code> to prevent creating a second instance during deserialization</li>
  <li><strong>Testing:</strong> Global state makes unit tests flaky — consider dependency injection instead</li>
  <li><strong>Not truly singleton in Spring:</strong> Spring "singleton" is per-container, not per-JVM</li>
</ul>`,
      difficulty: 'Intermediate',
      tags: ['Creational', 'Singleton', 'Design Patterns']
    },
    {
      question: 'Factory Method Pattern',
      answer: `<p>
              Defines an interface for creating an object but lets subclasses alter the type of
              objects that will be created. It promotes loose coupling by allowing you to create
              objects without specifying the exact class.
            </p>
            <strong>Example:</strong>
            <pre ngnonbindable=""><code class="language-java">// Product interface
public interface Shape {
    void draw();
}

// Concrete products
public class Circle implements Shape {
    @Override
    public void draw() { System.out.println("Drawing a Circle"); }
}

public class Square implements Shape {
    @Override
    public void draw() { System.out.println("Drawing a Square"); }
}

// Creator (Factory)
public abstract class ShapeFactory {
    public abstract Shape createShape();
}

// Concrete Creators
public class CircleFactory extends ShapeFactory {
    @Override
    public Shape createShape() { return new Circle(); }
}

public class SquareFactory extends ShapeFactory {
    @Override
    public Shape createShape() { return new Square(); }
}</code></pre>

<strong>When to use:</strong>
<ul>
  <li>When the exact type shouldn't be known at compile time</li>
  <li>When you want to delegate object creation to subclasses</li>
  <li>When you need to decouple client code from concrete classes (e.g., logging frameworks, JDBC drivers)</li>
</ul>

<strong>Factory Method vs Simple Factory:</strong> Simple Factory is a static method that returns objects — not a true GoF pattern but very common in practice. Factory Method uses inheritance and lets subclasses decide.</p>`,
      difficulty: 'Intermediate',
      tags: ['Creational', 'Factory', 'Design Patterns']
    },
    {
      question: 'Builder Pattern',
      answer: `<p>
              Separates the construction of a complex object from its representation, so the same
              construction process can create different representations. It's useful when an object
              has many optional parameters or requires a multi-step creation process.
            </p>
            <strong>Example:</strong>
            <pre ngnonbindable=""><code class="language-java">public class User {
    private final String firstName; // required
    private final String lastName;  // required
    private final int age;          // optional
    private final String phone;     // optional

    private User(UserBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.phone = builder.phone;
    }

    public static class UserBuilder {
        private final String firstName;
        private final String lastName;
        private int age;
        private String phone;

        public UserBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }

        public UserBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}
// Usage: User user = new User.UserBuilder("John", "Doe").age(30).build();</code></pre>

<strong>Builder vs Constructor Telescoping:</strong>
<ul>
  <li><strong>Telescoping constructors:</strong> <code>new User("John", "Doe", 30, null, null, "NY")</code> — hard to read, error-prone</li>
  <li><strong>Builder:</strong> <code>new User.UserBuilder("John", "Doe").age(30).city("NY").build()</code> — readable, self-documenting</li>
</ul>

<strong>Real-world usage:</strong> <code>StringBuilder</code>, <code>DocumentBuilder</code> (XML), Lombok <code>@Builder</code>, Spring <code>UriComponentsBuilder</code></p>`,
      difficulty: 'Intermediate',
      tags: ['Creational', 'Builder', 'Design Patterns']
    },
    {
      question: 'Observer Pattern',
      answer: `<p>
              Defines a one-to-many dependency between objects so that when one object (the subject)
              changes state, all its dependents (observers) are notified and updated automatically.
            </p>
            <strong>Example:</strong>
            <pre ngnonbindable=""><code class="language-java">import java.util.ArrayList;
import java.util.List;

// Subject
interface Subject {
    void register(Observer o);
    void unregister(Observer o);
    void notifyObservers();
}

class NewsAgency implements Subject {
    private String news;
    private List<Observer> channels = new ArrayList<>();

    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }

    @Override
    public void register(Observer o) { channels.add(o); }

    @Override
    public void unregister(Observer o) { channels.remove(o); }

    @Override
    public void notifyObservers() {
        for (Observer o : channels) {
            o.update(news);
        }
    }
}

// Observer
interface Observer {
    void update(String news);
}

class NewsChannel implements Observer {
    private String channelName;
    public NewsChannel(String name) { this.channelName = name; }
    @Override
    public void update(String news) {
        System.out.println(channelName + " received news: " + news);
    }
}</code></pre>

<strong>Common uses in Java/Spring:</strong>
<ul>
  <li><code>java.util.Observable</code> (deprecated) / <code>java.beans.PropertyChangeListener</code></li>
  <li>Spring's <code>ApplicationEvent</code> + <code>@EventListener</code></li>
  <li>Reactive programming (Project Reactor, RxJava)</li>
  <li>GUI event listeners (Swing, Android)</li>
</ul>

<strong>Gotcha:</strong> Memory leaks! If observers aren't unregistered, the subject holds references preventing GC. Use <code>WeakReference</code> or explicit <code>unregister()</code>.</p>`,
      difficulty: 'Intermediate',
      tags: ['Behavioral', 'Observer', 'Design Patterns']
    },
    {
      question: 'Strategy Pattern',
      answer: `<p>
              Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
              Strategy lets the algorithm vary independently from clients that use it.
            </p>
            <strong>Example:</strong>
            <pre ngnonbindable=""><code class="language-java">// Strategy interface
public interface PaymentStrategy {
    void pay(int amount);
}

// Concrete Strategies
public class CreditCardPayment implements PaymentStrategy {
    public void pay(int amount) { System.out.println(amount + " paid with credit card."); }
}

public class PayPalPayment implements PaymentStrategy {
    public void pay(int amount) { System.out.println(amount + " paid using PayPal."); }
}

// Context
public class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}</code></pre>

<strong>Strategy vs State Pattern:</strong>
<ul>
  <li><strong>Strategy</strong> — Client chooses the algorithm externally</li>
  <li><strong>State</strong> — Object changes its own behavior based on internal state</li>
</ul>

<strong>Real-world:</strong> <code>Collections.sort()</code> with <code>Comparator</code>, <code>Comparator</code> itself is a strategy for ordering.</p>`,
      difficulty: 'Intermediate',
      tags: ['Behavioral', 'Strategy', 'Design Patterns']
    },
    {
      question: 'Decorator Pattern',
      answer: `<p>
              Attaches additional responsibilities to an object dynamically. Decorators provide a
              flexible alternative to subclassing for extending functionality.
            </p>
            <strong>Example:</strong>
            <pre ngnonbindable=""><code class="language-java">// Component interface
interface Coffee {
    double getCost();
    String getDescription();
}

// Concrete Component
class SimpleCoffee implements Coffee {
    @Override
    public double getCost() { return 1.0; }
    @Override
    public String getDescription() { return "Simple coffee"; }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
    protected final Coffee decoratedCoffee;
    public CoffeeDecorator(Coffee c) { this.decoratedCoffee = c; }
    public double getCost() { return decoratedCoffee.getCost(); }
    public String getDescription() { return decoratedCoffee.getDescription(); }
}

// Concrete Decorators
class WithMilk extends CoffeeDecorator {
    public WithMilk(Coffee c) { super(c); }
    @Override
    public double getCost() { return super.getCost() + 0.5; }
    @Override
    public String getDescription() { return super.getDescription() + ", with milk"; }
}

class WithSugar extends CoffeeDecorator {
    public WithSugar(Coffee c) { super(c); }
    @Override
    public double getCost() { return super.getCost() + 0.2; }
    @Override
    public String getDescription() { return super.getDescription() + ", with sugar"; }
}

// Usage: Coffee coffee = new WithSugar(new WithMilk(new SimpleCoffee()));</code></pre>

<strong>Java I/O is built on Decorators:</strong>
<code>new BufferedInputStream(new FileInputStream("file.txt"))</code> — each stream wraps another, adding buffering, encryption, etc.

<strong>Decorator vs Inheritance:</strong> Decorator adds behavior at runtime without an explosion of subclasses. With inheritance, <code>CoffeeWithMilkAndSugar</code> becomes a combinatorial nightmare.</p>`,
      difficulty: 'Intermediate',
      tags: ['Structural', 'Decorator', 'Design Patterns']
    },
    {
      question: 'Prototype Pattern',
      answer: `<p>
              Specifies the kinds of objects to create using a prototypical instance and creates new
              objects by copying this prototype. It's useful when the cost of creating an object is
              more expensive or complex than copying an existing one.
            </p>
            <strong>Example:</strong>
            <pre ngnonbindable=""><code class="language-java">import java.util.HashMap;
import java.util.Map;

// Prototype interface
interface Shape extends Cloneable {
    void draw();
    Shape clone();
}

// Concrete Prototype
class Circle implements Shape {
    private int radius;
    private String color;

    public Circle(int radius, String color) {
        this.radius = radius;
        this.color = color;
    }

    @Override
    public void draw() { System.out.println("Circle: r=" + radius + ", color=" + color); }

    @Override
    public Shape clone() {
        try {
            return (Shape) super.clone();  // Shallow copy
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }
}

// Prototype Registry
class ShapeCache {
    private static Map<String, Shape> shapeMap = new HashMap<>();

    public static Shape getShape(String shapeId) {
        Shape cachedShape = shapeMap.get(shapeId);
        return cachedShape.clone();
    }

    public static void loadCache() {
        shapeMap.put("1", new Circle(10, "red"));
    }
}</code></pre>

<strong>Shallow vs Deep Copy:</strong>
<ul>
  <li><strong>Shallow copy</strong> (<code>super.clone()</code>) — copies primitives and references. Nested objects are shared.</li>
  <li><strong>Deep copy</strong> — recursively clones all nested objects. Needed when prototype contains mutable fields.</li>
</ul>

<strong>When to use:</strong> Object creation is expensive (DB queries, network calls) and you need many similar objects with minor variations.</p>`,
      difficulty: 'Intermediate',
      tags: ['Creational', 'Prototype', 'Design Patterns']
    },
    {
      question: 'Explain your project architecture?',
      answer: `<p>A typical Spring Boot project follows a <strong>layered architecture</strong> that separates concerns cleanly:</p>

          <ul>
            <li>
              <strong>Controller Layer (Presentation):</strong>
              Handles HTTP requests/responses, input validation, and routing. Uses <code>@RestController</code> and <code>@RequestMapping</code>.
            </li>
            <li>
              <strong>Service Layer (Business Logic):</strong>
              Contains core business rules, orchestrates workflows, and manages transactions. Uses <code>@Service</code> and <code>@Transactional</code>.
            </li>
            <li>
              <strong>Repository Layer (Data Access):</strong>
              Interacts with the database using Spring Data JPA repositories. Uses <code>@Repository</code> and extends <code>JpaRepository</code>.
            </li>
            <li>
              <strong>Model/Entity Layer:</strong>
              Represents database tables as Java classes with JPA annotations (<code>@Entity</code>, <code>@Table</code>, <code>@Column</code>).
            </li>
            <li>
              <strong>DTO Layer:</strong>
              Transfers data between layers efficiently, preventing entity exposure and over-posting vulnerabilities.
            </li>
            <li>
              <strong>Exception Handling:</strong>
              Uses <code>@ControllerAdvice</code> and custom exceptions for consistent error responses across the API.
            </li>
          </ul>

<strong>Flow of a request:</strong>
<pre>Client → Controller → Service → Repository → Database
                                            ↓
Client ← Controller ← Service ← Repository ← Database</pre>

<strong>Interview tip:</strong> Be ready to explain YOUR specific project's layers, why you chose them, and how they communicate. Mention specific technologies (Kafka, Redis, etc.) if your project uses them.</p>`,
      difficulty: 'Intermediate',
      tags: ['Architecture', 'Design Patterns']
    },
    {
      question: 'What is the Event Sourcing Design Pattern?',
      answer: `<p>
            Event Sourcing is a powerful architectural pattern where all changes to an application's
            state are stored as a sequence of immutable events. Instead of storing the current state
            of a domain entity, you store the history of events that led to its current state. The
            state can be reconstructed at any time by replaying the events.
          </p>

          <strong>Core Architecture & Flow:</strong>
          <p>
            The architecture revolves around a few key components that work together to process
            changes and maintain state.
          </p>
          <ul>
            <li>
              <strong>Command:</strong>
              An intent or request to change the state of the system (e.g., <code>CreateUserCommand</code>).
            </li>
            <li>
              <strong>Aggregate:</strong>
              A transactional boundary that receives a command. It validates the command against its
              current state and, if successful, produces one or more events.
            </li>
            <li>
              <strong>Event:</strong>
              An immutable fact representing a state change that has occurred (e.g.,
              <code>UserCreatedEvent</code>).
            </li>
            <li>
              <strong>Event Store:</strong>
              A specialized, append-only database that persists the sequence of events. It serves as
              the single source of truth.
            </li>
          </ul>
          <p>The typical flow is: Command → Aggregate → Event → Event Store.</p>

          <strong>Architectural Types & Variations:</strong>
          <p>
            Event Sourcing is often implemented with other patterns to manage complexity and improve
            performance.
          </p>
          <ol>
            <li>
              <strong>Basic Event Sourcing:</strong>
              <p>
                The current state of an aggregate is always rebuilt by replaying its entire event stream
                from the beginning. Simple, but can become slow for aggregates with long histories.
              </p>
            </li>
            <li>
              <strong>Event Sourcing with Snapshots:</strong>
              <p>
                A snapshot of an aggregate's state is periodically saved. To reconstruct the state, load
                the most recent snapshot and replay only events since that snapshot. Drastically reduces load times.
              </p>
            </li>
            <li>
              <strong>Event Sourcing with CQRS (Command Query Responsibility Segregation):</strong>
              <p>
                The most common and robust approach. The architecture is split into two sides:
              </p>
              <ul>
                <li>
                  <strong>Command Side:</strong> Handles state changes using Commands, Aggregates, and
                  the Event Store (the "write" model).
                </li>
                <li>
                  <strong>Query Side:</strong> Listens to the event stream and builds materialized views
                  or "read models" optimized for specific queries. Allows efficient and scalable data retrieval.
                </li>
              </ul>
            </li>
          </ol>

<strong>When to use Event Sourcing:</strong>
<ul>
  <li>Audit trails are required (financial, healthcare)</li>
  <li>You need temporal queries ("what was the state on Jan 15?")</li>
  <li>Complex domain logic with many state transitions</li>
</ul>

<strong>When NOT to use:</strong> Simple CRUD apps, low-write systems, or when eventual consistency is unacceptable.</p>`,
      difficulty: 'Advanced',
      tags: ['Architectural', 'Event Sourcing', 'CQRS', 'Design Patterns']
    },
    {
      question: 'What is the Immutable Design Pattern?',
      answer: `<p>The Immutable pattern ensures that an object's state cannot be modified after creation. Immutable objects are inherently thread-safe, simplify concurrency, and reduce bugs caused by unexpected state changes.</p>

<strong>Rules for creating immutable classes in Java:</strong>
<ol>
  <li>Declare the class as <code>final</code> (prevent subclassing)</li>
  <li>Make all fields <code>private final</code></li>
  <li>No setter methods</li>
  <li>Initialize all fields via constructor</li>
  <li>If a field is a mutable object, return a defensive copy in the getter</li>
</ol>

<strong>Complete Example:</strong>
<pre ngnonbindable=""><code class="language-java">import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

public final class ImmutableStudent {
    private final String name;
    private final int age;
    private final List<String> courses;  // Mutable field!

    public ImmutableStudent(String name, int age, List<String> courses) {
        this.name = name;
        this.age = age;
        // Defensive copy — don't store the reference directly
        this.courses = new ArrayList<>(courses);
    }

    public String getName() { return name; }
    public int getAge() { return age; }
    // Return unmodifiable view to prevent mutation
    public List<String> getCourses() {
        return Collections.unmodifiableList(courses);
    }
}</code></pre>

<strong>Why immutable objects matter:</strong>
<ul>
  <li><strong>Thread-safe by default</strong> — No synchronization needed since state never changes</li>
  <li><strong>Safe as Map keys / Set elements</strong> — <code>hashCode()</code> never changes</li>
  <li><strong>Simplifies reasoning</strong> — No surprise mutations from other code</li>
  <li><strong>Used by String, Integer, BigDecimal</strong> — All wrapper classes in Java are immutable</li>
</ul>

<strong>Gotcha:</strong> Forgetting the defensive copy on mutable fields (like <code>List</code>) is the #1 mistake. Without it, the caller can mutate the internal state after construction.</p>`,
      difficulty: 'Intermediate',
      tags: ['Creational', 'Immutable', 'Design Patterns']
    },
    {
      question: 'What is the Adapter Pattern?',
      answer: `<p>The Adapter pattern converts the interface of a class into another interface that clients expect. It lets incompatible classes work together without modifying their source code — like a travel adapter that lets a US plug work in a European socket.</p>

<strong>Class Diagram:</strong>
<pre>
Client → [Target Interface] ← [Adapter] → [Adaptee]
                                    ↑
                          Adapter wraps Adaptee
</pre>

<strong>Example — Legacy Payment Gateway Adapter:</strong>
<pre ngnonbindable=""><code class="language-java">// Target interface (what the client expects)
public interface PaymentProcessor {
    void processPayment(double amount);
}

// Adaptee (existing class with incompatible interface)
public class LegacyPaymentGateway {
    public void makePayment(String currency, int cents) {
        System.out.println("Processing " + currency + " " + cents);
    }
}

// Adapter bridges the gap
public class PaymentAdapter implements PaymentProcessor {
    private LegacyPaymentGateway legacyGateway;

    public PaymentAdapter(LegacyPaymentGateway gateway) {
        this.legacyGateway = gateway;
    }

    @Override
    public void processPayment(double amount) {
        int cents = (int) (amount * 100);
        legacyGateway.makePayment("USD", cents);
    }
}

// Usage
PaymentProcessor processor = new PaymentAdapter(new LegacyPaymentGateway());
processor.processPayment(29.99);</code></pre>

<strong>Adapter vs Decorator vs Facade:</strong>
<table>
  <tr><th>Pattern</th><th>Purpose</th></tr>
  <tr><td>Adapter</td><td>Make incompatible interfaces work together</td></tr>
  <tr><td>Decorator</td><td>Add behavior without changing interface</td></tr>
  <tr><td>Facade</td><td>Simplify a complex subsystem with one entry point</td></tr>
</table>

<strong>Real-world:</strong> <code>Arrays.asList()</code>, <code>Collections.list()</code>, Spring's <code>HandlerAdapter</code>.</p>`,
      difficulty: 'Intermediate',
      tags: ['Structural', 'Adapter', 'Design Patterns']
    },
    {
      question: 'What is the Repository Pattern?',
      answer: `<p>The <strong>Repository Pattern</strong> abstracts the data access layer, providing a collection-like interface for accessing domain objects. It decouples business logic from persistence concerns.</p>

<h4>Benefits</h4>
<ul>
  <li><strong>Testability</strong> — Easy to mock data access in unit tests</li>
  <li><strong>Flexibility</strong> — Switch from SQL to NoSQL without changing business code</li>
  <li><strong>Centralized Logic</strong> — Common queries in one place</li>
  <li><strong>Domain-Focused</strong> — Methods named after use cases, not tables</li>
</ul>

<h4>Java Example</h4>
<pre ngnonbindable=""><code class="language-java">// Generic Repository interface
public interface Repository<T, ID> {
    Optional<T> findById(ID id);
    List<T> findAll();
    T save(T entity);
    void deleteById(ID id);
}

// User-specific repository
public interface UserRepository extends Repository&lt;User, Long&gt; {
    Optional&lt;User&gt; findByEmail(String email);
    List&lt;User&gt; findByStatus(UserStatus status);
}

// Spring Data JPA implementation (auto-generated)
@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
    Optional&lt;User&gt; findByEmail(String email);  // Auto-implemented!
}</code></pre>

<h4>Repository vs DAO</h4>
<table>
  <tr><th>Aspect</th><th>Repository</th><th>DAO</th></tr>
  <tr><td>Focus</td><td>Domain-driven</td><td>Data access</td></tr>
  <tr><td>Returns</td><td>Domain objects</td><td>Tables/rows</td></tr>
  <tr><td>Style</td><td>Collection-like</td><td>CRUD-focused</td></tr>
</table>`,
      difficulty: 'Intermediate',
      tags: ['Repository', 'Data Access', 'Design Patterns']
    },
    {
      question: 'What is the Proxy Pattern?',
      answer: `<p>The <strong>Proxy Pattern</strong> provides a placeholder or surrogate for another object to control access to it. Common in security, lazy loading, and remote calls.</p>

<h4>Types of Proxies</h4>
<ul>
  <li><strong>Virtual Proxy</strong> — Lazy initialization of expensive objects</li>
  <li><strong>Protection Proxy</strong> — Access control (security checks)</li>
  <li><strong>Remote Proxy</strong> — Represents object in different address space (RPC, RMI)</li>
  <li><strong>Caching Proxy</strong> — Cache results of expensive operations</li>
</ul>

<h4>Java Example — Dynamic Proxy</h4>
<pre ngnonbindable=""><code class="language-java">public interface UserService {
    User getUser(Long id);
}

public class UserServiceImpl implements UserService {
    public User getUser(Long id) {
        // ... actual database call
    }
}

// Create proxy that adds caching
UserService realService = new UserServiceImpl();
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class&lt;?&gt;[] { UserService.class },
    (proxyObj, method, args) -> {
        System.out.println("Before: " + method.getName());
        Object result = method.invoke(realService, args);
        System.out.println("After: " + method.getName());
        return result;
    }
);</code></pre>

<h4>Spring AOP Uses Proxies</h4>
<p>Spring creates dynamic proxies for beans with <code>@Transactional</code>, <code>@Cacheable</code>, <code>@Async</code>, etc. The proxy intercepts method calls and adds cross-cutting concerns.</p>

<p><strong>Real-world use:</strong> Spring AOP, Hibernate lazy loading, Java RMI stubs, caching layers (Redis client).</p>`,
      difficulty: 'Intermediate',
      tags: ['Proxy', 'Structural', 'Design Patterns']
    }
  ]
};