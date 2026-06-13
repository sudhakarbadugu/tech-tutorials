// Real TypeScript interview questions from actual candidate experiences

export const typescriptRealQuestions = {
  questions: [
    {
      question: 'TypeScript introduces type safety to JavaScript. Walk me through a situation where TypeScript helped prevent a significant bug.',
      answer: `<p>Imagine a React component that receives user profile data from an API. Without TypeScript, the code might access &lt;code&gt;user.profile.email</code>, but the API later returns &lt;code&gt;profile</code> as &lt;code&gt;null</code> for some users. In plain JavaScript this causes a runtime crash. With TypeScript, the &lt;code&gt;User</code> type would model &lt;code&gt;profile?: Profile | null</code>, so the compiler flags &lt;code&gt;user.profile.email</code> and forces the developer to handle the null case with optional chaining or a guard. This catches the bug at build time rather than in production.</p>`,
      difficulty: 'Intermediate',
      tags: ['TypeScript', 'Type Safety', 'Real World'],
      keyPoints: [
        'TypeScript turns runtime errors into compile-time errors through explicit types.',
        'Optional/nullable types force developers to handle missing data safely.',
        'Real-world examples include API contracts, component props, and refactoring support.'
      ]
    },
    {
      question: "How does TypeScript's `unknown` type differ from `any`?",
      answer: `<p>&lt;code&gt;any</code> opts out of type checking entirely, so the compiler allows any operation on an &lt;code&gt;any</code> value and may hide bugs. &lt;code&gt;unknown</code> is the type-safe counterpart: it represents a value whose type is not yet known, and TypeScript requires you to perform a type check (type guard, assertion, or narrowing) before using it.</p><p>Use &lt;code&gt;any</code> only as a last resort for legacy migrations, and prefer &lt;code&gt;unknown</code> for values from dynamic sources such as user input, network responses, or JSON parsing.</p>`,
      difficulty: 'Beginner',
      tags: ['TypeScript', 'Types'],
      keyPoints: [
        '`any` disables type checking; `unknown` enforces it.',
        'You must narrow `unknown` before accessing properties or calling methods.',
        'Prefer `unknown` over `any` for values from external or dynamic sources.'
      ]
    },
    {
      question: 'How can you use mapped types to create a new type from an existing one?',
      answer: `<p>Mapped types let you transform every property of an existing type using a similar syntax to index signatures. For example, you can make all properties optional or readonly.</p><pre>&lt;code class="language-typescript"&gt;type ReadOnly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadOnlyUser = ReadOnly&lt;User&gt;;
// { readonly name: string; readonly age: number; }</code></pre><p>You can also remap keys, change value types, filter keys with &lt;code&gt;as</code>, or combine mapped types with conditional types for powerful transformations.</p>`,
      difficulty: 'Advanced',
      tags: ['TypeScript', 'Mapped Types', 'Advanced Types'],
      keyPoints: [
        'Mapped types iterate over keyof an existing type to produce a new type.',
        'Common built-in mapped types include Partial, Required, Readonly, and Record.',
        'Key remapping and conditional types extend mapped types for complex use cases.'
      ]
    },
    {
      question: 'Design a parking lot using object-oriented principles in TypeScript.',
      answer: `<p>A parking lot can be modeled with clear entities and responsibilities.</p><ul><li><strong>ParkingLot</strong>: owns multiple levels and exposes &lt;code&gt;park(vehicle)</code>, &lt;code&gt;unpark(ticket)</code>, and &lt;code&gt;availableSpots()</code>.</li><li><strong>Level/Floor</strong>: manages a collection of spots and finds a compatible spot.</li><li><strong>ParkingSpot</strong>: has a size (compact, large, handicapped) and tracks whether it is occupied.</li><li><strong>Vehicle</strong>: base class extended by Car, Truck, Motorcycle, each declaring its required spot size.</li><li><strong>Ticket</strong>: immutable record issued when a vehicle parks, used to locate the spot later.</li></ul><p>TypeScript interfaces and abstract classes enforce contracts, while private fields protect internal state.</p>`,
      difficulty: 'Intermediate',
      tags: ['TypeScript', 'OOP', 'System Design'],
      keyPoints: [
        'Identify nouns as classes: ParkingLot, Level, ParkingSpot, Vehicle, Ticket.',
        'Use inheritance or composition to model vehicle types and spot sizes.',
        'Encapsulate state and expose only meaningful operations to callers.'
      ]
    },
    {
      question: 'Explain the concept of generics in TypeScript and provide a real-world example.',
      answer: `<p>Generics let you write reusable code that works with multiple types while preserving type information. Instead of using &lt;code&gt;any</code>, a generic function or class accepts a type parameter and uses it throughout.</p><pre>&lt;code class="language-typescript"&gt;function fetchData&lt;T&gt;(url: string): Promise&lt;T&gt; {
  return fetch(url).then(res => res.json());
}

interface User { id: number; name: string; }
const user = await fetchData&lt;User&gt;('/api/user');
// user is typed as User, not any</code></pre><p>Other common examples are generic React components, API clients, reusable array utilities, and state containers.</p>`,
      difficulty: 'Intermediate',
      tags: ['TypeScript', 'Generics'],
      keyPoints: [
        'Generics make components and functions reusable across types.',
        'Type parameters preserve compile-time type safety.',
        'Real-world uses include API wrappers, reusable hooks, and collection utilities.'
      ]
    }
  ]
}
