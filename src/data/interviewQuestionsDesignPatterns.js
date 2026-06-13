// Auto-generated from trinits-web-angular interview question sources
// Generated: 2026-06-13T02:33:42.671Z

export const designPatternsQuestions = {
  questions: [
    {
      question: 'What are SOLID principles?',
      answer: `<p>
              SOLID is an acronym for five design principles intended to make software designs more
              understandable, flexible, and maintainable.
            </p>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">
                <strong>S - Single Responsibility Principle (SRP)</strong>
                <p>
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
              </li>
              <li class="list-group-item">
                <strong>O - Open/Closed Principle (OCP)</strong>
                <p>
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
              </li>
              <li class="list-group-item">
                <strong>L - Liskov Substitution Principle (LSP)</strong>
                <p>
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
              </li>
              <li class="list-group-item">
                <strong>I - Interface Segregation Principle (ISP)</strong>
                <p>
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
              </li>
              <li class="list-group-item">
                <strong>D - Dependency Inversion Principle (DIP)</strong>
                <p>
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
              </li>
            </ol>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
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
public class RobotWorker implements Workable { /* ... */ }</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'What are common design patterns in Java?',
      answer: `<p>
              Design patterns are reusable solutions to commonly occurring problems within a given
              context in software design. They are not finished designs that can be transformed
              directly into code, but rather templates for how to solve a problem.
            </p>
            <ol class="list-group list-group-numbered">
              <li class="list-group-item">
                <strong>Singleton Pattern</strong>
                <p>
                  Ensures a class has only one instance and provides a global point of access to it.
                  This is useful for managing shared resources like a database connection or a
                  logger. The implementation involves a private constructor, a static instance of
                  the class, and a static method to get the instance. For thread safety,
                  double-checked locking or an eager initialization approach is used.
                </p>
                <strong>Example (Thread-Safe):</strong>
                <pre ngnonbindable=""><code class="language-java">public class Singleton {
    // The volatile keyword ensures that multiple threads handle the instance variable correctly
    private static volatile Singleton instance;
  
  private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}</code></pre>
              </li>
              <li>
                <strong>Explanation:</strong>
                Quickselect reduces the problem size by partitioning the array around a pivot.
              </li>
            </ol>

            <!-- Sort the Array with Less Time Complexity -->`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'Singleton Pattern',
      answer: `<p>
                  Ensures a class has only one instance and provides a global point of access to it.
                  This is useful for managing shared resources like a database connection or a
                  logger. The implementation involves a private constructor, a static instance of
                  the class, and a static method to get the instance. For thread safety,
                  double-checked locking or an eager initialization approach is used.
                </p>
                <strong>Example (Thread-Safe):</strong>
                <pre ngnonbindable=""><code class="language-java">public class Singleton {
    // The volatile keyword ensures that multiple threads handle the instance variable correctly
    private static volatile Singleton instance;
  
  private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
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
        'Design Patterns'
      ]
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

// Creator (Factory)
public abstract class ShapeFactory {
    public abstract Shape createShape();
}

// Concrete Creators
public class CircleFactory extends ShapeFactory {
    @Override
    public Shape createShape() {
        return new Circle();
    }
}</code></pre>`,
      difficulty: 'Beginner',
      tags: [
        'Design Patterns'
      ]
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
// Usage: User user = new User.UserBuilder("John", "Doe").age(30).build();</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
      ]
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
}</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
      ]
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
    @Override
    public void draw() { System.out.println("Circle.draw"); }

    @Override
    public Shape clone() {
        try {
            return (Shape) super.clone();
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
        shapeMap.put("1", new Circle());
    }
}</code></pre>`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'Explain your project architecture?',
      answer: `My project follows layered architecture using Spring Boot:
          <ul>
            <li>
              <strong>Controller Layer:</strong>
              Handles HTTP requests and responses.
            </li>
            <li>
              <strong>Service Layer:</strong>
              Contains business logic and service methods.
            </li>
            <li>
              <strong>Repository Layer:</strong>
              Interacts with the database using Spring Data JPA.
            </li>
            <li>
              <strong>Model/Entity Layer:</strong>
              Represents database entities as Java classes.
            </li>
            <li>
              <strong>DTO Layer:</strong>
              Transfers data between layers efficiently.
            </li>
            <li>
              <strong>Exception Handling:</strong>
              Uses \`@ControllerAdvice\` and custom exceptions.
            </li>
          </ul>`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
      ]
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
              An intent or request to change the state of the system (e.g., \`CreateUserCommand\`).
            </li>
            <li>
              <strong>Aggregate:</strong>
              A transactional boundary that receives a command. It validates the command against its
              current state and, if successful, produces one or more events.
            </li>
            <li>
              <strong>Event:</strong>
              An immutable fact representing a state change that has occurred (e.g.,
              \`UserCreatedEvent\`).
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
                This is the simplest form where the current state of an aggregate is always rebuilt
                by replaying its entire event stream from the beginning. While simple, it can become
                slow for aggregates with a long history.
              </p>
            </li>
            <li>
              <strong>Event Sourcing with Snapshots:</strong>
              <p>
                To optimize performance, a snapshot of an aggregate's state is periodically saved.
                To reconstruct the state, the application loads the most recent snapshot and then
                replays only the events that have occurred since that snapshot was taken. This
                drastically reduces load times.
              </p>
            </li>
            <li>
              <strong>Event Sourcing with CQRS (Command Query Responsibility Segregation):</strong>
              <p>
                This is the most common and robust approach. The architecture is split into two
                distinct sides:
              </p>
              <ul>
                <li>
                  <strong>Command Side:</strong>
                  Handles all state changes using Commands, Aggregates, and the Event Store. This is
                  the "write" model.
                </li>
                <li>
                  <strong>Query Side:</strong>
                  Listens to the event stream and builds materialized views or "read models"
                  optimized for specific queries. This allows for highly efficient and scalable data
                  retrieval without impacting the write model.
                </li>
              </ul>
            </li>
          </ol>

          <!-- Duplicate Elements Count -->`,
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
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
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
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
      difficulty: 'Intermediate',
      tags: [
        'Design Patterns'
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
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
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
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
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
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'Data structure used for index?',
      answer: `<ol>
              <li>
                <strong>Answer:</strong>
                B-Trees or Hash Tables are commonly used for indexing in databases.
              </li>
              <li>
                B-Trees provide efficient range queries, while Hash Tables offer constant-time
                lookups.
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'Data structure used for index?',
      answer: `<ol>
              <li>
                <strong>Answer:</strong>
                B-Trees or Hash Tables are commonly used for indexing in databases.
              </li>
              <li>
                B-Trees provide efficient range queries, while Hash Tables offer constant-time
                lookups.
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'What is immutable design pattern? Write an example for that?',
      answer: `<ol>
              <li>
                <strong>Immutable Design Pattern:</strong>
                Ensures that an object's state cannot be modified after creation.
              </li>
              <li>
                <strong>Code Example:</strong>
                <pre ngnonbindable=""><code class="language-java">final class ImmutableClass {
    private final int value;
  
    public ImmutableClass(int value) {
        this.value = value;
    }
  
    public int getValue() {
        return value;
    }
  }</code></pre>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
      ]
    },
    {
      question: 'What is Singleton design pattern? Write an example for that?',
      answer: `<ol>
              <li>
                <strong>Singleton Design Pattern:</strong>
                Ensures that a class has only one instance and provides a global point of access to
                it.
              </li>
              <li>The Singleton class ensures that only one instance of the class is created.</li>
              <li>It should have a private constructor to prevent direct instantiation.</li>
              <li>It should provide a public static method to access the instance.</li>
              <li>
                <strong>Code Example:</strong>
                <pre ngnonbindable=""><code class="language-java">class Singleton {
    private static Singleton instance;
  
    private Singleton() { }
  
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
  }</code></pre>
              </li>
            </ol>`,
      difficulty: 'Advanced',
      tags: [
        'Design Patterns'
      ]
    }
  ]
};
