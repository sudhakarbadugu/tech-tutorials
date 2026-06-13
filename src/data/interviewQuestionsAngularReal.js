// Real Angular interview questions from actual candidate experiences

export const angularRealQuestions = {
  questions: [
    {
      question: 'What is dependency injection in Angular and what are its main benefits?',
      answer: `<p>Dependency injection (DI) is a design pattern and core Angular mechanism where the framework supplies a class with the objects it needs rather than the class creating them itself. Services, values, and factories are registered with an injector and injected through constructors or the &lt;code&gt;inject()</code> function.</p><p>Benefits include decoupled, testable components; easier mocking in unit tests; singleton service reuse across the application; and the ability to swap implementations via providers, such as providing a mock HTTP client in tests.</p>`,
      difficulty: 'Intermediate',
      tags: ['Angular', 'Dependency Injection'],
      keyPoints: [
        'Angular injects dependencies via constructors or the inject() function.',
        'DI decouples components from concrete service implementations.',
        'It improves testability by allowing easy mocking and stubbing.'
      ]
    },
    {
      question: 'Explain the difference between AOT and JIT compilation in Angular.',
      answer: `<p><strong>Just-in-Time (JIT)</strong> compilation happens in the browser at runtime. It is useful during development because it allows faster rebuilds, but it ships the Angular compiler to the client and delays template error detection.</p><p><strong>Ahead-of-Time (AOT)</strong> compilation runs during the build process. It compiles templates to efficient JavaScript before deployment, catches template errors early, produces smaller bundles by excluding the compiler, and improves runtime performance and security through template sanitization.</p><p>Production builds use AOT by default; JIT is mostly reserved for development workflows.</p>`,
      difficulty: 'Intermediate',
      tags: ['Angular', 'Compilation', 'AOT', 'JIT'],
      keyPoints: [
        'JIT compiles templates in the browser; AOT compiles them at build time.',
        'AOT catches template errors earlier and produces smaller, faster bundles.',
        'Production builds use AOT by default.'
      ]
    },
    {
      question: 'Compare combineLatest, withLatestFrom, and forkJoin in RxJS.',
      answer: `<p>All three are combination operators, but they emit under different conditions.</p><ul><li><strong>combineLatest</strong>: emits the latest value from each source whenever any source emits. Useful when multiple inputs affect one output, such as filtering a list by search text and category.</li><li><strong>withLatestFrom</strong>: used inside a pipeline; the primary observable controls emission, and values from secondary observables are included only if they have emitted at least once.</li><li><strong>forkJoin</strong>: waits for all source observables to complete, then emits a single array/object of their final values. Best for parallel HTTP requests where all results are needed together.</li></ul>`,
      difficulty: 'Advanced',
      tags: ['Angular', 'RxJS'],
      keyPoints: [
        'combineLatest emits when any source emits, using the latest value from each.',
        'withLatestFrom uses the primary observable to drive emissions.',
        'forkJoin waits for all sources to complete and emits final values once.'
      ]
    },
    {
      question: 'What are Signals effects in Angular and when should you use them?',
      answer: `<p>Angular Signals provide a reactive primitive that tracks value changes. An <strong>effect</strong> is a side-effect runner that executes whenever the signals it reads change. Effects are created with &lt;code&gt;effect(() => { ... })</code>.</p><p>Use effects for operations that should happen in response to state changes but do not directly affect the UI, such as logging analytics, syncing state to localStorage, or triggering imperative DOM updates. Avoid using effects to compute derived state; prefer computed signals for that.</p>`,
      difficulty: 'Advanced',
      tags: ['Angular', 'Signals', 'Reactivity'],
      keyPoints: [
        'Signals are fine-grained reactive primitives in Angular.',
        'Effects run side effects when their read signals change.',
        'Use computed signals for derived state, effects for side effects.'
      ]
    }
  ]
}
