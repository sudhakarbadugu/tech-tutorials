// DSA Module 1: Stacks topic (split from stacks-queues)
export const stacksTopic = {
  title: 'Stacks',
  subtitle: 'Last In, First Out — the engine of undo, recursion, and backtracking',
  sections: [
    // A — What is a Stack?
    {
      heading: 'What is a Stack?',
      text: 'A stack is a linear data structure that follows the LIFO principle — Last In, First Out. The last element you add is the first one you can remove. Think of a stack of plates in a cafeteria: you place new plates on top, and you take plates off the top. You never pull a plate from the middle or the bottom. That single restriction is the entire idea — and it is exactly what makes stacks so useful, because it guarantees that the most recently stored item is always the easiest to reach.',
      list: [
        '<strong>LIFO order:</strong> Elements come out in the exact reverse of the order they went in. Push 1, 2, 3 and you pop 3, 2, 1.',
        '<strong>One access point:</strong> All inserts and removals happen at a single end called the <em>top</em>. There is no random access to the middle or the bottom.',
        '<strong>Three core operations:</strong> <code>push</code> (add to the top), <code>pop</code> (remove from the top), and <code>peek</code> (read the top without removing it). All three are O(1).',
        '<strong>The call stack:</strong> Every running program uses a stack to track function calls — each call pushes a frame, each return pops one. Recursion is powered entirely by this structure.',
        '<strong>Undo systems:</strong> Text editors, browsers, and IDEs push every action onto a stack so that Undo simply pops the most recent one.',
        '<strong>Temporary memory you unwind:</strong> Whenever a problem asks you to remember things and revisit them in reverse order — nested brackets, backtracking choices, reversed output — that is a stack.'
      ]
    },
    // B — Stack Anatomy
    {
      heading: 'Stack Anatomy',
      text: 'A stack has exactly two landmarks: the <strong>bottom</strong> (the first element ever pushed, buried under everything else) and the <strong>top</strong> (the most recently pushed element). Only the top is reachable. Every push, pop, and peek touches the top and nothing else — which is precisely why all three are O(1): no traversal, no shifting, no searching. The structure grows and shrinks from one end only, like a spring-loaded plate dispenser.',
      diagram: {
        caption: 'A stack after push(10), push(20), push(30) — only the top is accessible',
        chart: `flowchart LR
    B[Bottom: 10] --> M[20] --> T[Top: 30]
    TOP[top pointer] -.-> T
    style T fill:#f1c40f,color:#000
    style TOP fill:#9b59b6,color:#fff`
      }
    },
    // C — Implementation Choices
    {
      heading: 'Implementation Choices',
      text: 'A stack is an abstract idea — you can build it on top of two very different concrete structures. The choice barely matters for correctness (both give O(1) push and pop) but matters for memory layout, cache behavior, and which language idiom you should reach for.',
      list: [
        '<strong>Array-backed (dynamic array):</strong> Store elements contiguously and treat the <em>end</em> of the array as the top. Push is append, pop removes the last slot. This is the idiomatic choice almost everywhere: in Python a plain <code>list</code> with <code>append()</code> / <code>pop()</code> <em>is</em> a stack (both O(1) amortized); in Java use <code>ArrayDeque</code>, which is array-backed, unsynchronized, and fast.',
        '<strong>Linked-list-backed:</strong> Each node points to the node beneath it, and a head reference serves as the top. Push and pop are pure O(1) pointer rewiring with no amortized growth cost, and the stack never needs resizing. The price is one extra pointer per element and poor cache locality — nodes are scattered across the heap.',
        '<strong>Python guidance:</strong> use a plain list. Do <em>not</em> reach for <code>collections.deque</code> for a pure stack — deque is for when you also need O(1) pops from the front (queues), because <code>list.pop(0)</code> is O(n).',
        '<strong>Java guidance:</strong> prefer <code>ArrayDeque</code> over the legacy <code>java.util.Stack</code>. The legacy Stack extends Vector and synchronizes every method — pointless overhead in single-threaded code — and it exposes non-stack methods like index access that break the abstraction.'
      ]
    },
    {
      heading: 'Array-Backed Stack',
      text: 'The top is simply the last occupied slot of the array. Growth occasionally triggers a resize-and-copy, which is why push is O(1) <em>amortized</em> rather than strictly O(1).',
      diagram: {
        caption: 'Array-backed stack: the end of the array is the top',
        chart: `flowchart LR
    A0[index 0: 10] --> A1[index 1: 20] --> A2[Top: index 2: 30]
    style A2 fill:#f1c40f,color:#000`
      }
    },
    {
      heading: 'Linked-List-Backed Stack',
      text: 'The head node is the top; each node points down to the one beneath it. Push creates a new head, pop advances the head — both strictly O(1).',
      diagram: {
        caption: 'Linked-list-backed stack: the head is the top',
        chart: `flowchart LR
    T[Top: 30] --> M[20] --> B[Bottom: 10] --> NULL[None]
    style T fill:#f1c40f,color:#000
    style NULL fill:#e74c3c,color:#fff`
      }
    },
    // D — Advantages
    {
      heading: 'Advantages',
      text: 'The stack\'s restriction is its strength: by giving up random access you buy constant-time operations and a mental model simple enough to trust under interview pressure.',
      list: [
        '<strong>O(1) push, pop, and peek:</strong> Every core operation touches only the top, so all three run in constant time — no traversal, no shifting, ever.',
        '<strong>Simple mental model:</strong> One access point means almost nothing can go wrong. Stack code is short, easy to verify, and hard to get wrong.',
        '<strong>Natural fit for reversal:</strong> LIFO automatically flips order — reversing a string, a number\'s digits, or a list is just push everything, then pop everything.',
        '<strong>Natural fit for nesting:</strong> Brackets, HTML tags, and function calls are validated by matching each closer against the most recent unmatched opener — exactly what a stack hands you.',
        '<strong>Natural fit for backtracking:</strong> Push each choice as you make it; pop to undo the most recent choice and try the next branch. DFS and undo systems are built on this.',
        '<strong>Minimal memory overhead:</strong> An array-backed stack stores just the values plus one size counter — no per-element pointers like a linked structure.'
      ]
    },
    // E — Disadvantages
    {
      heading: 'Disadvantages',
      text: 'The same restriction that makes a stack fast also makes it useless for a whole class of problems.',
      list: [
        '<strong>No random access:</strong> You cannot read the element in the middle or at the bottom without first popping everything above it.',
        '<strong>O(n) search:</strong> Finding a value means scanning (or popping) up to every element — there is no shortcut, and binary search is impossible.',
        '<strong>One-ended only:</strong> If you ever need to remove from both ends, a stack is the wrong tool — that is a deque\'s job.',
        '<strong>Fixed capacity risk:</strong> A stack built on a fixed-size array (common in C or embedded code) overflows when full unless you add resize logic.',
        '<strong>Recursion depth limits:</strong> Because recursion uses the call stack, deeply recursive algorithms can hit a stack overflow — Python\'s default recursion limit is about 1,000 frames, and the JVM has a fixed thread stack size.',
        '<strong>Not persistent:</strong> Pop destroys information. If you need history <em>and</em> the current state, you need two stacks or an auxiliary structure.'
      ]
    },
    // F — Stack Operations
    {
      heading: 'Stack Operations',
      text: 'Every stack operation is explained below with its best efficient implementation, Python code, and a Mermaid visual. In the diagrams the stack is drawn horizontally — bottom on the left, top on the right.'
    },
    {
      heading: 'Operation 1: Push',
      text: '<strong>What it does:</strong> Add a new element onto the top of the stack, burying the previous top one level deeper.<br/><strong>Best efficiency:</strong> O(1) for a linked-list-backed stack; O(1) amortized for an array-backed stack (occasionally the backing array resizes, copying all n elements).',
      diagram: {
        caption: 'Push 40 onto a stack that holds 10, 20, 30',
        chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    NEW[40] -.push.-> T
    style NEW fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def push(stack, val):
    stack.append(val)   # the end of the list is the top

# Time: O(1) amortized, Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 2: Pop',
      text: '<strong>What it does:</strong> Remove and return the element at the top — the most recently pushed item. The element beneath it becomes the new top.<br/><strong>Best efficiency:</strong> O(1). One caution: popping an empty stack is an error in most languages, so check <code>is_empty</code> first (or let the exception be your guard).',
      diagram: {
        caption: 'Pop returns 30 and exposes 20 as the new top',
        chart: `flowchart LR
    B[10] --> M[Top: 20]
    M -.pop returns 30.-> X[30]
    style M fill:#f1c40f,color:#000
    style X fill:#e74c3c,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def pop(stack):
    if not stack:
        raise IndexError("pop from empty stack")
    return stack.pop()

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 3: Peek / Top',
      text: '<strong>What it does:</strong> Read the top element without removing it. Use it when the decision you are about to make depends on what is currently on top — for example, checking whether the top bracket matches a closing bracket before you pop.<br/><strong>Best efficiency:</strong> O(1) — just look at the last slot or the head node.',
      diagram: {
        caption: 'Peek reads 30 but the stack is unchanged',
        chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    T -.peek returns 30.-> EYE[read only]
    style T fill:#f1c40f,color:#000
    style EYE fill:#3498db,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def peek(stack):
    if not stack:
        return None        # or raise, depending on your API
    return stack[-1]

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 4: Check Empty',
      text: '<strong>What it does:</strong> Report whether the stack holds any elements. This is the guard clause of nearly every stack algorithm — you check it before every pop and peek, and a non-empty stack at the end of bracket matching means an unmatched opener.<br/><strong>Best efficiency:</strong> O(1) — compare the size to zero or check whether the backing list is empty.',
      diagram: {
        caption: 'is_empty on a full stack vs an empty stack',
        chart: `flowchart LR
    S[Stack: 10, 20, 30] --> R[is_empty: False]
    E[Stack: empty] --> R2[is_empty: True]
    style R fill:#e74c3c,color:#fff
    style R2 fill:#2ecc71,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def is_empty(stack):
    return len(stack) == 0

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 5: Size',
      text: '<strong>What it does:</strong> Return how many elements are currently in the stack. Array-backed stacks get this free from the backing array\'s length; linked-list-backed stacks keep a running counter so they do not have to walk the chain.<br/><strong>Best efficiency:</strong> O(1) with a maintained counter or array length.',
      diagram: {
        caption: 'Size of a three-element stack',
        chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    T -.size.-> N[returns 3]
    style T fill:#f1c40f,color:#000
    style N fill:#9b59b6,color:#fff`
      }
    },
    {
      text: 'Code:',
      code: `def size(stack):
    return len(stack)

# Time: O(1), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 6: Search',
      text: '<strong>What it does:</strong> Find whether a value exists in the stack and, if so, how far it is from the top.<br/><strong>Best efficiency:</strong> O(n) — there is no random access, so you scan from the top downward. If your algorithm searches often, a stack is the wrong structure; add a hash set or use a different design.',
      diagram: {
        caption: 'Search for 20: found 1 step below the top',
        chart: `flowchart LR
    B[10] --> M[20] --> T[Top: 30]
    style M fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def search(stack, target):
    for i in range(len(stack) - 1, -1, -1):   # top to bottom
        if stack[i] == target:
            return len(stack) - 1 - i         # distance from the top
    return -1

# Time: O(n), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 7: Traverse / Print',
      text: '<strong>What it does:</strong> Visit every element, conventionally from the top down to the bottom — the order in which elements would be popped.<br/><strong>Best efficiency:</strong> O(n) time, O(1) extra space for a simple read-only walk. Printing a stack is mainly a debugging aid; real algorithms rarely traverse a stack they intend to keep.',
      diagram: {
        caption: 'Traverse from the top down: 30, then 20, then 10',
        chart: `flowchart LR
    T[Top: 30] --> M[20] --> B[Bottom: 10]
    style T fill:#f1c40f,color:#000`
      }
    },
    {
      text: 'Code:',
      code: `def traverse(stack):
    for val in reversed(stack):   # top to bottom
        print(val)

# Time: O(n), Space: O(1)`,
      language: 'python'
    },
    {
      heading: 'Operation 8: Reverse Using a Stack',
      text: '<strong>What it does:</strong> Reverse a sequence by pushing every element onto a stack, then popping them all back out.<br/><strong>Best efficiency:</strong> O(n) time and O(n) extra space for the stack. It is rarely the fastest way to reverse an array in place, but it is the canonical demonstration of LIFO and the engine behind iterative tree/graph traversals that must revisit nodes in reverse order.',
      diagram: {
        caption: 'Pushing 10, 20, 30 then popping flips the order',
        chart: `flowchart LR
    subgraph Before[Before]
      direction LR
      B[10] --> M[20] --> T[Top: 30]
    end
    subgraph After[After]
      direction LR
      A1[30] --> A2[20] --> A3[10]
    end
    Before ~~~ After
    style T fill:#f1c40f,color:#000
    style A1 fill:#2ecc71,color:#fff`
      }
    },
    {
      heading: 'How stack reversal works',
      text: 'Push every element onto the stack in order — 10 goes in first, then 20, then 30, so 30 sits on top. Now pop them all back out: 30 comes out first, then 20, then 10. The last element pushed is the first element retrieved, so the output is the exact reverse of the input. <strong>Trace on [10, 20, 30]:</strong> push 10 → push 20 → push 30 (stack top to bottom: 30, 20, 10) → pop gives 30, pop gives 20, pop gives 10. One pass in, one pass out — order flipped for free.'
    },
    {
      text: 'Code:',
      code: `def reverse_with_stack(items):
    stack = []
    for x in items:
        stack.append(x)      # push everything
    out = []
    while stack:
        out.append(stack.pop())   # pop flips the order
    return out

# Time: O(n), Space: O(n)`,
      language: 'python'
    },
    // G — Complete Stack Class (tabs)
    {
      heading: 'Complete Stack Class',
      text: 'Below is a production-quality stack in both languages: push, pop, peek, is_empty / isEmpty, and size — plus a bonus <code>min()</code> method that tracks a parallel min-stack so the current minimum is retrievable in O(1). The min-stack holds the running minimum at every level: push a value whenever it is less than or equal to the current minimum, and pop it whenever the popped value equals the current minimum. (LeetCode 155 asks for exactly this class.)',
    },
    {
      heading: 'Python Implementation',
      example: {
        title: 'Complete Stack Class in Python',
        code: `class Stack:
    """Array-backed stack: a plain Python list is the idiomatic stack
    because list.append() and list.pop() from the end are O(1) amortized."""
    def __init__(self):
        self._data = []
        self._min = []          # parallel stack of running minimums

    def push(self, val):
        self._data.append(val)
        if not self._min or val <= self._min[-1]:
            self._min.append(val)        # new running minimum

    def pop(self):
        if not self._data:
            raise IndexError("pop from empty stack")
        val = self._data.pop()
        if val == self._min[-1]:
            self._min.pop()              # that minimum is leaving
        return val

    def peek(self):
        if not self._data:
            raise IndexError("peek from empty stack")
        return self._data[-1]

    def is_empty(self):
        return len(self._data) == 0

    def size(self):
        return len(self._data)

    def min(self):
        if not self._min:
            raise IndexError("min from empty stack")
        return self._min[-1]             # O(1) minimum

# Driver
s = Stack()
for v in [5, 3, 7, 3, 8]:
    s.push(v)
print("size:", s.size())        # 5
print("peek:", s.peek())        # 8
print("min:", s.min())          # 3
print("pop:", s.pop())          # 8
print("min:", s.min())          # 3
print("pop:", s.pop())          # 3
print("min:", s.min())          # 3  (the first 3 is still there)
print("pop:", s.pop())          # 7
print("min:", s.min())          # 3
print("pop:", s.pop())          # 3
print("min:", s.min())          # 5
print("is_empty:", s.is_empty())  # False
s.pop()
print("is_empty:", s.is_empty())  # True`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Java Implementation',
      example: {
        title: 'Complete Stack Class in Java',
        code: `import java.util.ArrayDeque;
import java.util.Deque;

public class Stack {
    // ArrayDeque is used instead of the legacy java.util.Stack:
    // legacy Stack extends Vector and synchronizes every method,
    // which is needless overhead in single-threaded code.
    private final Deque<Integer> data = new ArrayDeque<>();
    private final Deque<Integer> minStack = new ArrayDeque<>();  // running minimums

    public void push(int val) {
        data.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);           // new running minimum
        }
    }

    public int pop() {
        int val = data.pop();             // throws NoSuchElementException if empty
        if (val == minStack.peek()) {
            minStack.pop();               // that minimum is leaving
        }
        return val;
    }

    public int peek() {
        return data.peek();               // null-safe alternative: check isEmpty first
    }

    public boolean isEmpty() {
        return data.isEmpty();
    }

    public int size() {
        return data.size();
    }

    public int min() {
        return minStack.peek();           // O(1) minimum
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        for (int v : new int[]{5, 3, 7, 3, 8}) s.push(v);
        System.out.println("size: " + s.size());        // 5
        System.out.println("peek: " + s.peek());        // 8
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 8
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 3
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 7
        System.out.println("min: " + s.min());          // 3
        System.out.println("pop: " + s.pop());          // 3
        System.out.println("min: " + s.min());          // 5
        System.out.println("isEmpty: " + s.isEmpty());  // false
        s.pop();
        System.out.println("isEmpty: " + s.isEmpty());  // true
    }
}`,
        language: 'java',
        type: 'code'
      }
    },
    // H — Complexity Summary
    {
      heading: 'Time & Space Complexity',
      text: 'Summary of stack operation complexities, assuming an array-backed stack (Python list / Java ArrayDeque) unless noted otherwise. The single most important rule: <strong>anything at the top is O(1), anything deeper is O(n)</strong> — because the top is the only door into the structure.',
      table: {
        headers: ['Operation', 'Time', 'Space', 'Notes'],
        rows: [
          ['Push', 'O(1) amortized', 'O(1)', 'Append at the top. Amortized because the backing array occasionally doubles and copies; a linked-list-backed stack is strictly O(1) but pays one pointer per element.'],
          ['Pop', 'O(1)', 'O(1)', 'Remove the top element — no shifting, because removal happens at the end of the array, never the front. Guard against popping an empty stack.'],
          ['Peek / Top', 'O(1)', 'O(1)', 'Read the last slot or head node without removing it. The cheapest operation the structure offers.'],
          ['Check Empty / Size', 'O(1)', 'O(1)', 'Array length or a maintained counter — never requires walking the elements.'],
          ['Search', 'O(n)', 'O(1)', 'No random access, so you must scan from the top (or pop everything). Frequent searching means you chose the wrong structure — pair the stack with a hash set.'],
          ['Traverse / Print', 'O(n)', 'O(1)', 'A read-only walk from top to bottom visits each element once.'],
          ['Reverse via stack', 'O(n)', 'O(n)', 'One pass to push everything, one pass to pop it back; the O(n) space is the second structure holding the elements mid-flip.'],
          ['Monotonic stack pass', 'O(n)', 'O(n)', 'A full next-greater-element style sweep looks like O(n²) but is O(n): each element is pushed once and popped at most once, so total work across the whole pass is 2n.']
        ]
      },
      note: 'Interview tip: when an interviewer challenges the O(n) claim for a monotonic stack ("isn\'t that while loop O(n) inside an O(n) loop?"), the winning argument is amortized analysis — <strong>each element is pushed exactly once and popped at most once</strong>, so the total number of pushes and pops across the entire pass is at most 2n. Also learn the recognition cue: if a problem says "most recent", "nearest previous", "nested", or "in reverse order", it is a stack problem — LIFO means reversal, nesting, and most-recent-first.'
    },
    // I — Applications
    {
      heading: 'Real-World Applications',
      text: 'Stacks sit underneath more of your daily tooling than any other data structure. Every example below shares the same signature: the system must remember a sequence of things and revisit them in the <strong>exact reverse order</strong> — most recent first.',
      list: [
        '<strong>Function call stack (and stack overflow):</strong> Every time your program calls a function, the runtime pushes a <em>stack frame</em> holding the return address, parameters, and local variables; every <code>return</code> pops the top frame and resumes the caller. This is why recursion works at all — each recursive call is just another frame on the pile. It is also why unbounded recursion crashes with a <em>stack overflow</em>: the pile grows past its fixed memory budget.',
        '<strong>Undo / Redo in editors:</strong> Every keystroke, deletion, or paste is pushed onto an <em>undo stack</em>. Ctrl+Z pops the most recent action and reverses it — you always undo your <em>latest</em> change first, never an old one, so LIFO is the only sensible order. Redo uses a second stack: undone actions are pushed there and replayed on Ctrl+Y.',
        '<strong>Expression parsing and bracket matching in compilers:</strong> When a compiler reads <code>{ a * (b + c) }</code> it pushes every opening bracket and operator, and pops when it meets a closer — a closer matches if and only if the stack top is its partner. Mismatched nesting (<code>(]</code>) is detected the moment a pop reveals the wrong opener. The same mechanism converts infix expressions to postfix and evaluates them.',
        '<strong>Browser back button:</strong> Browsers model history with <em>two</em> stacks. Every page you visit is pushed onto the <em>back stack</em>. Clicking Back pops the current page, pushes it onto the <em>forward stack</em>, and shows the new top. Clicking Forward does the mirror image. Visiting a fresh page after going back clears the forward stack — which is why the Forward button greys out.',
        '<strong>DFS and backtracking (maze solving, puzzle solvers):</strong> Depth-first search pushes each newly discovered node and explores the most recent one first — diving deep before backing up. Maze solvers and Sudoku solvers use the same pattern: push every choice, and when you hit a dead end, pop back to the most recent fork and try the next option. Recursive DFS is the same algorithm using the call stack implicitly.',
        '<strong>Runtime memory management:</strong> Beyond function calls, the <em>stack region</em> of process memory allocates and frees local variables automatically in LIFO order — when a function returns, its entire frame is reclaimed by moving one pointer. This is why stack allocation is dramatically cheaper than heap allocation, and why local variables cannot outlive their function.',
        '<strong>Calculators and RPN evaluation:</strong> Reverse Polish Notation (<code>3 4 + 5 *</code>) is evaluated with a single stack: push numbers, and on an operator pop the top two operands, apply it, and push the result. No parentheses or precedence rules are needed — the stack encodes the order of operations. HP\'s classic calculators and the JVM\'s bytecode interpreter both work exactly this way.'
      ],
      note: 'Notice the common thread: every one of these systems accesses data most-recent-first and treats the stack as temporary memory it later unwinds. Calls return in reverse order of being made, edits are undone newest-first, brackets close in reverse of opening, and backtracking retreats to the latest decision. Whenever a problem smells like "remember this for later, and I\'ll need the most recent one first", reach for a stack.'
    },
    // J — Interview Practice Questions
    {
      heading: 'Top Interview Questions on Stacks',
      text: 'The eight most frequently asked stack interview questions are below — each in its own collapsible card with the key idea, a solved Python answer, and its complexity. Master the three recurring patterns — the <strong>monotonic stack</strong> (Questions 4, 5, 8), <strong>two-stack designs</strong> (Question 2, and the browser-history model), and a <strong>stack of pairs / parallel stacks</strong> for tracking extra state (Questions 2 and 8) — and nearly every stack problem becomes a variation of these.',
      note: 'Pattern cheat sheet: a monotonic stack solves anything phrased "next greater/smaller element" or "nearest larger/smaller to the left/right" in O(n); a second parallel stack solves "track an aggregate (min/max) of everything currently in the stack" in O(1) per query; and a plain stack as a running result solves "collapse or cancel adjacent things" (duplicates, backspaces, brackets). If the brute force compares every element with everything after it, suspect a monotonic stack.'
    },
    {
      heading: 'Practice Question 1: Valid Parentheses (LeetCode 20, Easy)',
      text: '<strong>Problem:</strong> Given a string containing only <code>()[]{}</code>, return true if every opening bracket is closed by the same type in the correct order.<br/><strong>Key idea:</strong> Push the <em>expected closing bracket</em> for every opener you see. When you meet a closing bracket, it must equal the top of the stack — the most recent unmatched opener is always the one that must close next, which is exactly LIFO. Two failure modes: a closer with an empty stack (nothing to match), and a non-empty stack at the end (unclosed openers).<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def is_valid(s):
    stack = []                       # stack of expected closers
    pairs = {"(": ")", "[": "]", "{": "}"}
    for ch in s:
        if ch in pairs:
            stack.append(pairs[ch])  # remember what must close this
        else:
            if not stack or stack.pop() != ch:
                return False         # wrong closer, or nothing open
    return not stack                 # valid only if nothing left open`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 2: Min Stack (LeetCode 155, Medium)',
      text: '<strong>Problem:</strong> Design a stack supporting push, pop, top, and retrieving the minimum element — all in O(1) time.<br/><strong>Key idea:</strong> A single variable cannot survive pops (if the min is popped, you have lost the previous min), so keep a <strong>parallel min-stack</strong> whose top always holds the minimum of everything below it. Push a value onto it whenever the new value is less than or equal to the current min; pop from it whenever the popped value equals the current min. The duplicate-push on equality matters: two 3s in the main stack need two 3s in the min-stack, or popping one 3 would wrongly discard the minimum.<br/><strong>Complexity:</strong> Time O(1) per operation, Space O(n).',
      example: {
        title: 'Python Solution',
        code: `class MinStack:
    def __init__(self):
        self.stack = []
        self.mins = []               # parallel stack of running minimums

    def push(self, val):
        self.stack.append(val)
        if not self.mins or val <= self.mins[-1]:
            self.mins.append(val)    # <= keeps duplicate minimums

    def pop(self):
        val = self.stack.pop()
        if val == self.mins[-1]:
            self.mins.pop()

    def top(self):
        return self.stack[-1]

    def get_min(self):
        return self.mins[-1]         # O(1) minimum`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 3: Evaluate Reverse Polish Notation (LeetCode 150, Medium)',
      text: '<strong>Problem:</strong> Evaluate an arithmetic expression in Reverse Polish Notation, e.g. <code>["2", "1", "+", "3", "*"]</code> = (2 + 1) * 3 = 9. Division truncates toward zero.<br/><strong>Key idea:</strong> One operand stack. Push every number; when a token is an operator, pop the top two operands — the <em>right</em> operand comes off first, so pop into <code>b</code> then <code>a</code> and compute <code>a op b</code> — then push the result. Operators always apply to the two most recent values, which is LIFO by definition. For division use <code>int(a / b)</code> rather than <code>//</code> so that negative results truncate toward zero instead of flooring.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def eval_rpn(tokens):
    stack = []
    ops = {"+", "-", "*", "/"}
    for tok in tokens:
        if tok in ops:
            b = stack.pop()          # right operand is on top
            a = stack.pop()
            if tok == "+":
                stack.append(a + b)
            elif tok == "-":
                stack.append(a - b)
            elif tok == "*":
                stack.append(a * b)
            else:
                stack.append(int(a / b))   # truncate toward zero
        else:
            stack.append(int(tok))
    return stack[0]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 4: Daily Temperatures (LeetCode 739, Medium)',
      text: '<strong>Problem:</strong> Given an array of daily temperatures, return for each day how many days you must wait until a warmer day, or 0 if none comes.<br/><strong>Key idea:</strong> Keep a <strong>monotonic decreasing stack of indices</strong> — temperatures on the stack are in decreasing order, each still waiting for its warmer day. When today\'s temperature is warmer than the one at the stack top, today <em>is</em> that day\'s answer: pop it and record the index difference. Store indices rather than values, because the answer is a distance, not a temperature. The while-loop looks quadratic but is not: every index is pushed once and popped at most once.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def daily_temperatures(temps):
    n = len(temps)
    answer = [0] * n
    stack = []                       # indices, temps decreasing top-down
    for i in range(n):
        while stack and temps[i] > temps[stack[-1]]:
            prev = stack.pop()       # day i is prev's warmer day
            answer[prev] = i - prev
        stack.append(i)
    return answer`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 5: Next Greater Element I (LeetCode 496, Easy)',
      text: '<strong>Problem:</strong> Given two arrays <code>nums1</code> and <code>nums2</code> where every element of <code>nums1</code> also appears in <code>nums2</code>, find for each element of <code>nums1</code> the next greater element to its right in <code>nums2</code>, or -1.<br/><strong>Key idea:</strong> Run one monotonic decreasing stack sweep over <code>nums2</code> and record every answer in a <strong>hash map</strong> as you go: whenever a new value pops a smaller value off the stack, the new value is that popped value\'s next greater element — store <code>next_greater[popped] = new</code>. Then answer every query of <code>nums1</code> with an O(1) map lookup. One sweep computes all answers at once instead of searching rightward for each query.<br/><strong>Complexity:</strong> Time O(n + m), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def next_greater_element(nums1, nums2):
    next_greater = {}
    stack = []                       # decreasing values
    for num in nums2:
        while stack and num > stack[-1]:
            next_greater[stack.pop()] = num
        stack.append(num)
    return [next_greater.get(x, -1) for x in nums1]`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 6: Remove All Adjacent Duplicates In String (LeetCode 1047, Easy)',
      text: '<strong>Problem:</strong> Repeatedly remove pairs of adjacent equal letters until none remain, e.g. <code>"abbaca"</code> → <code>"ca"</code>.<br/><strong>Key idea:</strong> Use the stack <em>as the running result</em>. For each character, if it equals the stack top, pop — the pair cancels — otherwise push it. This works because a removal can create a new adjacency with the character just before the pair (<code>"abbaca"</code>: removing <code>bb</code> makes the two <code>a</code>s adjacent), and the stack top is always exactly that previous surviving character. A single pass with no re-scanning.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def remove_duplicates(s):
    stack = []                       # the surviving characters
    for ch in s:
        if stack and stack[-1] == ch:
            stack.pop()              # pair cancels out
        else:
            stack.append(ch)
    return "".join(stack)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 7: Backspace String Compare (LeetCode 844, Easy)',
      text: '<strong>Problem:</strong> Given two strings where <code>#</code> means a backspace, return true if they are equal after being typed into a text editor, e.g. <code>"ab#c"</code> and <code>"ad#c"</code> both become <code>"ac"</code>.<br/><strong>Key idea:</strong> Simulate the typing with a stack: push ordinary characters, pop on <code>#</code>. A backspace always erases the most recent surviving character — pure LIFO — so the final stack contents are the typed text. Build both and compare. (Follow-up worth mentioning: two pointers walking from the right, skipping backspaced characters, solves it in O(1) space — but the stack version is the one to say first.)<br/><strong>Complexity:</strong> Time O(n + m), Space O(n + m).',
      example: {
        title: 'Python Solution',
        code: `def backspace_compare(s, t):
    def build(text):
        stack = []
        for ch in text:
            if ch == "#":
                if stack:
                    stack.pop()      # erase the last typed char
            else:
                stack.append(ch)
        return "".join(stack)
    return build(s) == build(t)`,
        language: 'python',
        type: 'code'
      }
    },
    {
      heading: 'Practice Question 8: Largest Rectangle in Histogram (LeetCode 84, Hard)',
      text: '<strong>Problem:</strong> Given bar heights, return the area of the largest rectangle that fits inside the histogram, e.g. <code>[2,1,5,6,2,3]</code> → 10 (the 5-and-6 bars, two wide).<br/><strong>Key idea:</strong> Every bar can extend left and right until the first shorter bar on each side — and "nearest smaller element" is a monotonic stack problem. Keep a <strong>monotonic increasing stack of indices</strong>; when the current bar is shorter than the stack top, popping that top computes its rectangle: the popped index is the height, and the width is the gap between the current index and the new stack top (the nearest smaller bars on either side). Append a sentinel 0 height at the end so every remaining bar is forced to pop and get evaluated. Amortized O(n) by the same push-once-pop-once argument.<br/><strong>Complexity:</strong> Time O(n), Space O(n).',
      example: {
        title: 'Python Solution',
        code: `def largest_rectangle_area(heights):
    stack = []                       # indices, heights increasing top-down
    max_area = 0
    for i, h in enumerate(heights + [0]):   # sentinel 0 flushes the stack
        while stack and h < heights[stack[-1]]:
            height = heights[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1     # between nearest smaller bars
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area`,
        language: 'python',
        type: 'code'
      }
    }
  ]
}
