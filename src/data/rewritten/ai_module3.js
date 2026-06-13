export const aiModule3Structure = {
  module3: {
    title: 'Module 3: Knowledge Representation & Reasoning',
    topics: [
      { id: 'knowledge-representation', title: 'Knowledge Representation' },
      { id: 'logic', title: 'Logic in AI' },
      { id: 'propositional-logic', title: 'Propositional Logic' },
      { id: 'first-order-logic', title: 'First-Order Logic' },
      { id: 'inference', title: 'Inference & Reasoning' },
    ]
  }
};

export const aiModule3Content = {
  module3: {
    'knowledge-representation': {
      title: 'Knowledge Representation',
      subtitle: 'Encoding human knowledge for machines to reason with',
      sections: [
        {
          heading: 'What is Knowledge Representation?',
          text: '<strong>Knowledge Representation (KR)</strong> is the field of AI devoted to storing information about the world in a form that machines can use to solve complex problems. It bridges the gap between human knowledge (vague, contextual, and experiential) and machine computation (precise, symbolic, and algorithmic). Good KR enables an AI to reason, plan, learn, and communicate effectively.',
          list: [
            'Provides a formal language for expressing facts, rules, and relationships about a domain',
            'Enables inference — drawing new conclusions from existing knowledge',
            'Supports reasoning under uncertainty when complete information is unavailable',
            'Must balance expressiveness (what you can say) with tractability (what you can compute)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The knowledge representation hypothesis states that reasoning is computation over represented knowledge.',
          example: {
            title: 'KR Tradeoff Principle',
            code: `Expressiveness vs Tractability:

  More Expressive → Harder to Reason
  Less Expressive → Easier to Reason

Example hierarchy:
  Propositional Logic     ← Fast inference
    ↑
  First-Order Logic       ← Moderate inference
    ↑
  Higher-Order Logic      ← Very hard inference

Desirable KR properties:
  • Representational adequacy — can capture domain knowledge
  • Inferential adequacy — can derive new knowledge
  • Inferential efficiency — derivations are practical
  • Acquisitional efficiency — knowledge is easy to add`,
            output: 'The art of KR is choosing the right balance for your problem.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different KR schemes serve different purposes. Selecting the right one is a core AI design decision.',
          table: {
            headers: ['Scheme', 'Best For', 'Strength', 'Limitation'],
            rows: [
              ['Logic (Propositional/FOL)', 'Formal reasoning, proofs', 'Precise, sound inference', 'Brittle, hard to scale'],
              ['Semantic Networks', 'Conceptual relationships', 'Intuitive, graphical', 'No formal semantics'],
              ['Frames', 'Structured object descriptions', 'Inheritance, defaults', 'Inflexible for new concepts'],
              ['Rules (Production)', 'Expert systems, condition-action', 'Modular, explainable', 'Conflict resolution complexity'],
              ['Ontologies', 'Domain modeling, interoperability', 'Shared meaning, reusable', 'Expensive to build'],
              ['Probabilistic Models', 'Uncertain knowledge', 'Handles noise, incomplete data', 'Computationally expensive']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the most expressive logic available (fix: start simple — propositional or lightweight ontology; upgrade only when needed)',
            'Mistake 2: Ignoring the closed-world assumption (fix: explicitly state whether missing facts are false or simply unknown)',
            'Mistake 3: Representing everything as rules (fix: use frames/ontologies for static structure; reserve rules for dynamic behavior)',
            'Mistake 4: Forgetting that representation shapes reasoning (fix: the same knowledge in different forms enables different inferences — choose deliberately)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'KR is the hidden backbone of many AI systems you interact with daily.',
          list: [
            '<strong>Medical Diagnosis (MYCIN, modern EHR):</strong> Rules encode disease-symptom links; ontologies model anatomy and drug interactions',
            '<strong>Search Engines (Google Knowledge Graph):</strong> Entities and relations are stored in a massive semantic network for query understanding',
            '<strong>Virtual Assistants (Siri, Alexa):</strong> Slot-filling extracts intent and entities; ontologies resolve ambiguous references',
            '<strong>Autonomous Vehicles:</strong> Lane rules, traffic sign meanings, and hazard priors are all represented as structured knowledge',
            '<strong>E-commerce Recommendations:</strong> Product ontologies (category, brand, feature) enable cross-category suggestions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Knowledge Representation converts human knowledge into machine-processable forms',
            'KR must balance expressiveness (what you can represent) against tractability (what you can reason about)',
            'Logic, semantic networks, frames, rules, and ontologies are the major KR families',
            'The representation you choose directly determines what inferences are possible',
            'Modern AI combines symbolic KR with statistical learning for robust systems'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the tradeoff between expressiveness and tractability central to KR design?\nAns: More expressive languages can describe more complex worlds, but inference becomes computationally harder or even undecidable.',
            'Q2: Give one strength and one limitation of rule-based KR.\nAns: Strength: intuitive modularity and explainability. Limitation: rule conflicts and the knowledge acquisition bottleneck.',
            'Q3: What is the closed-world assumption, and why does it matter?\nAns: It assumes anything not stated is false. It matters because real-world knowledge is often incomplete, and treating unknown as false can lead to incorrect inferences.'
          ]
        }
      ]
    },
    logic: {
      title: 'Logic in AI',
      subtitle: 'Formal languages for precise reasoning',
      sections: [
        {
          heading: 'What is Logic in AI?',
          text: '<strong>Logic</strong> provides a formal framework for representing knowledge and drawing valid conclusions. In AI, logic is used to build systems that reason rigorously: given a set of facts (premises) and inference rules, a logical agent derives new facts that are guaranteed to be true if the premises are true. This property is called <strong>soundness</strong>. Logic also allows us to verify that a conclusion necessarily follows from assumptions — a property called <strong>completeness</strong>.',
          list: [
            'Syntax defines the valid symbols and formulas of the language',
            'Semantics defines the meaning — which formulas are true under which conditions',
            'Inference rules define how to derive new true formulas from existing ones',
            'A logic is sound if every derivable conclusion is semantically valid',
            'A logic is complete if every semantically valid conclusion is derivable'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Modus Ponens is the cornerstone of logical inference: if P implies Q, and P is true, then Q must be true.',
          example: {
            title: 'Modus Ponens & Other Rules',
            code: `Modus Ponens:
  Premise 1: P → Q
  Premise 2: P
  ─────────────
  Conclusion: Q

Modus Tollens:
  Premise 1: P → Q
  Premise 2: ¬Q
  ─────────────
  Conclusion: ¬P

And-Elimination:
  Premise: P ∧ Q
  ─────────────
  Conclusion: P   (or Q)

Or-Introduction:
  Premise: P
  ─────────────
  Conclusion: P ∨ Q

Resolution:
  Premise 1: P ∨ Q
  Premise 2: ¬P ∨ R
  ─────────────
  Conclusion: Q ∨ R`,
            output: 'These inference rules form the engine of logical reasoning.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different logics make different tradeoffs between expressiveness and computational complexity.',
          table: {
            headers: ['Logic', 'Expressiveness', 'Inference Complexity', 'Typical Use'],
            rows: [
              ['Propositional', 'Facts only (no variables)', 'NP-complete (SAT)', 'Circuit design, planning'],
              ['First-Order', 'Objects, relations, quantifiers', 'Semi-decidable', 'Theorem proving, ontologies'],
              ['Description Logic', 'Structured concepts, limited quantifiers', 'Polynomial (tableau)', 'Semantic web, ontologies'],
              ['Temporal Logic', 'Time-aware propositions', 'PSPACE-complete', 'Verification, planning'],
              ['Fuzzy Logic', 'Degrees of truth [0,1]', 'Polynomial', 'Control systems, expert systems'],
              ['Probabilistic Logic', 'Uncertainty over worlds', '#P-hard', 'Reasoning under uncertainty']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing syntax with semantics (fix: syntax is just symbols; semantics assigns meaning — a formula can be syntactically valid but semantically false)',
            'Mistake 2: Applying modus ponens to implications that are not logical (fix: P → Q in material implication is true whenever P is false; this leads to unintuitive results if treated causally)',
            'Mistake 3: Assuming classical logic handles every domain (fix: use non-monotonic logic for default reasoning, or probabilistic logic for uncertain domains)',
            'Mistake 4: Ignoring computational cost (fix: even simple logics like propositional logic are NP-complete — use heuristics, SAT solvers, or restricted fragments for scalability)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Logical reasoning powers safety-critical and knowledge-intensive systems.',
          list: [
            '<strong>Formal Verification:</strong> Temporal logic proves that hardware circuits and software systems never enter unsafe states',
            '<strong>Automated Theorem Provers:</strong> Tools like Coq and Isabelle verify mathematical proofs and software correctness',
            '<strong>Planning Systems:</strong> STRIPS planning uses first-order logic preconditions and effects to generate action sequences',
            '<strong>Semantic Web:</strong> OWL (Web Ontology Language) is based on description logic for knowledge sharing across the web',
            '<strong>Legal Reasoning Systems:</strong> Deontic logic models obligations, permissions, and prohibitions in contract analysis'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Logic provides syntax (formulas), semantics (meaning), and inference (derivation) for knowledge representation',
            'Modus ponens, modus tollens, resolution, and natural deduction are core inference patterns',
            'Soundness means derivations preserve truth; completeness means all truths are derivable',
            'Propositional, first-order, temporal, fuzzy, and probabilistic logics serve different AI needs',
            'Choosing the right logic requires balancing expressiveness against computational feasibility'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between soundness and completeness in a logic?\nAns: Soundness means every provable statement is true (no false conclusions). Completeness means every true statement is provable (no missing truths).',
            'Q2: Why is propositional logic inference NP-complete?\nAns: Because deciding whether a propositional formula is satisfiable (SAT) is NP-complete — there is no known polynomial-time algorithm for all cases.',
            'Q3: Give an example where classical logic fails and a non-classical logic is needed.\nAns: Default reasoning: "Birds fly" is true by default, but penguins are exceptions. Classical logic cannot retract conclusions; non-monotonic logic can.'
          ]
        }
      ]
    },
    'propositional-logic': {
      title: 'Propositional Logic',
      subtitle: 'The simplest formal system for truth-based reasoning',
      sections: [
        {
          heading: 'What is Propositional Logic?',
          text: '<strong>Propositional Logic (PL)</strong> is the most basic logical system. It deals with propositions — declarative statements that are either true or false — and combines them using logical connectives (AND, OR, NOT, IMPLIES, IFF). PL is the foundation upon which all more expressive logics are built. Despite its simplicity, PL is computationally powerful: the SAT problem (determining whether a propositional formula is satisfiable) was the first problem proven NP-complete and remains central to AI planning, verification, and optimization.',
          list: [
            'Propositions (P, Q, R) are atomic statements with no internal structure',
            'Logical connectives: ¬ (NOT), ∧ (AND), ∨ (OR), → (IMPLIES), ↔ (IFF)',
            'A formula is satisfiable if at least one truth assignment makes it true',
            'A formula is valid (a tautology) if all truth assignments make it true',
            'PL inference is NP-complete, yet modern SAT solvers handle millions of variables'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Truth tables and normal forms are the workhorses of propositional reasoning.',
          example: {
            title: 'Truth Table & Normal Forms',
            code: `Truth Table for P → Q:
  P  Q  P→Q
  T  T   T
  T  F   F
  F  T   T
  F  F   T

Conjunctive Normal Form (CNF):
  (A ∨ ¬B) ∧ (B ∨ C) ∧ (¬A ∨ ¬C)
  → Clause conjunction, each clause is a disjunction of literals

Disjunctive Normal Form (DNF):
  (A ∧ ¬B) ∨ (B ∧ C) ∨ (¬A ∧ ¬C)
  → Clause disjunction, each clause is a conjunction of literals

Key equivalences:
  P → Q  ≡  ¬P ∨ Q
  P ↔ Q  ≡  (P → Q) ∧ (Q → P)
  ¬(P ∧ Q)  ≡  ¬P ∨ ¬Q   (De Morgan)\n  ¬(P ∨ Q)  ≡  ¬P ∧ ¬Q   (De Morgan)`,
            output: 'Every PL formula can be converted to CNF or DNF.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Understanding the relationship between formulas is essential for efficient reasoning.',
          table: {
            headers: ['Property', 'Definition', 'Test Method'],
            rows: [
              ['Satisfiable', 'At least one model makes it true', 'SAT solver or truth table'],
              ['Unsatisfiable', 'No model makes it true (contradiction)', 'Resolution refutation'],
              ['Valid (Tautology)', 'True in every model', 'Truth table, or prove ¬F is unsatisfiable'],
              ['Entailment (KB ⊨ α)', 'Every model of KB is a model of α', 'Prove KB ∧ ¬α is unsatisfiable'],
              ['Equivalence', 'Same truth value in all models', 'Prove F ↔ G is a tautology']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing implication with causation (fix: P → Q is a material implication — it is true whenever P is false, regardless of causal connection)',
            'Mistake 2: Thinking PL can express "all" or "some" (fix: PL has no quantifiers; use first-order logic for general statements about objects)',
            'Mistake 3: Negating implications incorrectly (fix: ¬(P → Q) is equivalent to P ∧ ¬Q, not to P → ¬Q)',
            'Mistake 4: Building huge truth tables instead of using SAT solvers (fix: for more than 4 variables, use DPLL/CDCL algorithms or tools like Z3, MiniSat)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Propositional logic may seem simple, but it drives powerful real-world systems.',
          list: [
            '<strong>SAT Solvers:</strong> Modern SAT solvers (MiniSat, Glucose, Z3) solve industrial-scale problems with millions of variables for circuit verification and scheduling',
            '<strong>AI Planning (SATPlan):</strong> Planning problems are encoded as propositional formulas; a satisfying assignment corresponds to a valid plan',
            '<strong>Software Verification:</strong> Bounded model checking encodes program behavior as propositional formulas to find bugs within k execution steps',
            '<strong>Configuration Problems:</strong> Product configuration (computers, cars) uses PL constraints to ensure compatible component choices',
            '<strong>Cryptanalysis:</strong> SAT solvers break certain cryptographic constructions by encoding them as satisfiability problems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Propositional logic uses atomic propositions and five connectives to build complex formulas',
            'Truth tables enumerate all possible truth assignments to evaluate formulas',
            'CNF and DNF are standard forms that simplify automated reasoning',
            'SAT, UNSAT, VALID, and ENTAILMENT are the fundamental semantic properties',
            'Despite NP-completeness, modern SAT solvers make PL practical for industrial problems'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Convert (P ∧ Q) → R to CNF using only standard equivalences.\nAns: (P ∧ Q) → R ≡ ¬(P ∧ Q) ∨ R ≡ ¬P ∨ ¬Q ∨ R. This is already a single clause in CNF.',
            'Q2: Why is the SAT problem considered both hard and practically solvable?\nAns: SAT is NP-complete, meaning no polynomial algorithm is known for all cases. But in practice, modern CDCL SAT solvers exploit problem structure and solve most industrial instances efficiently.',
            'Q3: What is the difference between a satisfiable formula and a valid formula?\nAns: Satisfiable means at least one assignment makes it true. Valid means every assignment makes it true (a tautology). All valid formulas are satisfiable, but not vice versa.'
          ]
        }
      ]
    },
    'first-order-logic': {
      title: 'First-Order Logic',
      subtitle: 'Extending logic with objects, relations, and quantifiers',
      sections: [
        {
          heading: 'What is First-Order Logic?',
          text: '<strong>First-Order Logic (FOL)</strong>, also called predicate logic, extends propositional logic with objects, predicates (properties and relations), functions, and quantifiers (∀, ∃). This makes FOL dramatically more expressive: instead of just saying "it is raining" (a proposition), you can say "every student who studies passes" (∀x Student(x) ∧ Studies(x) → Passes(x)). FOL is the standard formalism for knowledge representation in AI and forms the basis of description logics, database query languages, and automated theorem proving.',
          list: [
            'Constants name specific objects: Alice, 42, Earth',
            'Variables range over objects: x, y, z',
            'Predicates represent properties (Red(x)) and relations (Loves(x, y))',
            'Functions map objects to objects: FatherOf(x), Sqrt(x)',
            'Universal quantifier ∀ means "for all"; existential quantifier ∃ means "there exists"'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Quantifier equivalences and skolemization are essential for automated reasoning in FOL.',
          example: {
            title: 'Quantifier Rules & Skolemization',
            code: `Quantifier Negation:
  ¬∀x P(x)  ≡  ∃x ¬P(x)
  ¬∃x P(x)  ≡  ∀x ¬P(x)

Quantifier Distribution:
  ∀x (P(x) ∧ Q(x))  ≡  ∀x P(x) ∧ ∀x Q(x)
  ∃x (P(x) ∨ Q(x))  ≡  ∃x P(x) ∨ ∃x Q(x)

Conversion to Prenex Normal Form:
  ∀x P(x) → ∃y Q(y)
  ≡ ¬∀x P(x) ∨ ∃y Q(y)
  ≡ ∃x ¬P(x) ∨ ∃y Q(y)
  ≡ ∃x ∃y (¬P(x) ∨ Q(y))

Skolemization (eliminate ∃):
  ∀x ∃y Loves(y, x)
  → ∀x Loves(Skolem(x), x)
  
  Where Skolem(x) is a new function symbol`,
            output: 'These transformations enable resolution theorem proving.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'FOL introduces several new concepts beyond propositional logic. Understanding them is key to using FOL effectively.',
          table: {
            headers: ['Concept', 'Propositional Logic', 'First-Order Logic'],
            rows: [
              ['Atomic unit', 'Proposition (P)', 'Predicate (P(x)) or equality (x = y)'],
              ['Variables', 'None', 'Object variables (∀x, ∃x)'],
              ['Quantification', 'None', 'Universal (∀) and existential (∃)'],
              ['Domain', 'Implicit (true/false)', 'Explicit universe of discourse'],
              ['Interpretation', 'Truth assignment', 'Domain + mapping of symbols'],
              ['Inference', 'Resolution on clauses', 'Unification + resolution'],
              ['Complexity', 'NP-complete (SAT)', 'Semi-decidable (not decidable)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using quantifiers over predicates (fix: that is higher-order logic; FOL only quantifies over objects, not predicates or functions)',
            'Mistake 2: Confusing ∀ with ∧ and ∃ with ∨ (fix: ∀ distributes over ∧ but not ∨; ∃ distributes over ∨ but not ∧)',
            'Mistake 3: Forgetting the scope of quantifiers (fix: ∀x P(x) ∧ Q(x) means (∀x P(x)) ∧ Q(x) if x is free in Q; use parentheses: ∀x (P(x) ∧ Q(x)))',
            'Mistake 4: Treating equality as a predicate without special handling (fix: equality requires paramodulation or explicit axioms; most theorem provers treat it as a built-in)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'FOL is the lingua franca of formal knowledge representation in AI.',
          list: [
            '<strong>Automated Theorem Proving:</strong> Prover9, Vampire, and E use resolution with unification to prove mathematical theorems automatically',
            '<strong>Semantic Web (OWL):</strong> OWL-DL is a decidable fragment of FOL used to build ontologies like DBpedia and Schema.org',
            '<strong>Database Theory:</strong> Relational algebra is a fragment of FOL; SQL queries are essentially existential conjunctive formulas',
            '<strong>Planning (PDDL):</strong> The Planning Domain Definition Language uses FOL-like preconditions and effects to describe actions',
            '<strong>Natural Language Semantics:</strong> Montague grammar translates English sentences into FOL formulas to capture meaning formally'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'First-order logic adds objects, predicates, functions, and quantifiers to propositional logic',
            '∀x means "for all x"; ∃x means "there exists an x"',
            'FOL is semi-decidable: valid formulas can be proven, but invalid ones may loop forever',
            'Unification finds substitutions that make two predicates match — the core of FOL inference',
            'Resolution + unification = the standard automated theorem proving method for FOL'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Translate "Every cat loves some human" into FOL.\nAns: ∀x (Cat(x) → ∃y (Human(y) ∧ Loves(x, y))).',
            'Q2: What does it mean that FOL is semi-decidable?\nAns: There exists an algorithm that will eventually prove any valid formula, but if the formula is not valid, the algorithm may run forever without deciding.',
            'Q3: Why is unification necessary for FOL resolution but not for PL resolution?\nAns: In PL, literals are already ground (no variables). In FOL, predicates contain variables — unification finds variable substitutions that make two literals identical, enabling resolution.'
          ]
        }
      ]
    },
    inference: {
      title: 'Inference & Reasoning',
      subtitle: 'Algorithms for deriving new knowledge from what is known',
      sections: [
        {
          heading: 'What is Inference?',
          text: '<strong>Inference</strong> is the process of deriving new sentences (conclusions) from existing sentences (premises) using sound rules of reasoning. In AI, inference algorithms turn a static knowledge base into a dynamic reasoning engine. The two dominant paradigms are <strong>forward chaining</strong> (data-driven: start with facts, apply rules, derive new facts until the goal is reached) and <strong>backward chaining</strong> (goal-driven: start with the goal, find rules that conclude it, recursively prove their premises). For FOL, <strong>resolution</strong> with <strong>unification</strong> provides a single, complete inference rule.',
          list: [
            'Forward chaining: breadth-first, data-driven, generates all derivable facts',
            'Backward chaining: depth-first, goal-directed, focuses proof effort on the query',
            'Resolution: a single rule that is refutation-complete for FOL',
            'Unification: finds the most general substitution that makes two expressions identical',
            'Most General Unifier (MGU): the substitution with the least specificity needed'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Resolution with unification is the universal inference engine for FOL.',
          example: {
            title: 'Resolution & Unification',
            code: `Unification:
  UNIFY(Knows(John, x), Knows(y, Alice))
  → θ = {x/Alice, y/John}

Resolution Rule:
  Clause 1: P(x) ∨ Q(x)
  Clause 2: ¬P(Alice) ∨ R(y)
  Unifier: θ = {x/Alice}
  ─────────────────────────
  Resolvent: Q(Alice) ∨ R(y)

Refutation Proof (Goal: Q):
  1. Add ¬Q to KB
  2. Repeatedly resolve clauses
  3. If empty clause (□) derived:
     → KB ⊨ Q (proven!)

Forward Chaining Example:
  KB:  Bird(Tweety), ∀x Bird(x) → Flies(x)
  → Infer: Flies(Tweety)

Backward Chaining Example:
  Goal: Flies(Tweety)
  Rule: Bird(x) → Flies(x)
  Subgoal: Bird(Tweety)
  Fact: Bird(Tweety) ✓`,
            output: 'Resolution is complete: any entailed sentence can be proven by refutation.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Each inference strategy has distinct characteristics that make it suitable for different problem types.',
          table: {
            headers: ['Strategy', 'Direction', 'Strength', 'Weakness', 'Best For'],
            rows: [
              ['Forward Chaining', 'Data → Goal', 'Finds all consequences', 'May derive irrelevant facts', 'Monitoring, data analysis'],
              ['Backward Chaining', 'Goal → Data', 'Focused, efficient', 'May loop on recursive rules', 'Query answering, diagnosis'],
              ['Resolution', 'Refutation', 'Single rule, complete', 'Search space explodes', 'Theorem proving'],
              ['Tableau', 'Model construction', 'Handles some DLs well', 'Not always efficient', 'Ontology consistency'],
              ['Model Elimination', 'Goal-directed search', 'Very efficient for Horn', 'Incomplete for general FOL', 'Horn clause problems']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using forward chaining for single-query problems (fix: backward chaining is often more efficient when you only need to prove one goal)',
            'Mistake 2: Forgetting that resolution requires CNF conversion (fix: convert all formulas to clausal form first — eliminate implications, move negations inward, skolemize, and distribute)',
            'Mistake 3: Confusing unification with pattern matching (fix: unification is symmetric — both expressions can contain variables; pattern matching is one-directional)',
            'Mistake 4: Ignoring the occurs check (fix: x and f(x) do not unify because it would create an infinite term; the occurs check prevents this)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Inference engines are the reasoning core of many deployed AI systems.',
          list: [
            '<strong>Expert Systems (MYCIN, CLIPS):</strong> Forward and backward chaining over rule bases to diagnose diseases and troubleshoot equipment',
            '<strong>Prolog Programming:</strong> A logic programming language where backward chaining with unification is the execution model',
            '<strong>Ontology Reasoners (HermiT, Pellet):</strong> Tableau-based inference checks concept consistency and computes subclass relations in OWL ontologies',
            '<strong>Automated Planning:</strong> State-space planners use inference to derive reachable states; SAT planners use resolution on propositional encodings',
            '<strong>Natural Language Inference:</strong> Given a premise sentence, infer whether a hypothesis is entailed, contradicted, or neutral — a core NLP task'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Inference derives new knowledge from existing knowledge using sound rules',
            'Forward chaining is data-driven; backward chaining is goal-driven',
            'Resolution is a single, refutation-complete inference rule for FOL',
            'Unification finds substitutions that make two expressions identical',
            'The choice of inference strategy depends on the problem structure and query pattern'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When is forward chaining preferable to backward chaining?\nAns: When you have many facts and want to find all possible conclusions, or when the data arrives incrementally and you need to maintain derived facts.',
            'Q2: Why does resolution require refutation (proving KB ∧ ¬α is unsatisfiable) rather than directly proving α?\nAns: Resolution proves by contradiction. If assuming ¬α leads to a contradiction (empty clause), then α must be entailed by KB. This is simpler because resolution only needs one rule.',
            'Q3: What would happen if unification allowed x to unify with f(x) without the occurs check?\nAns: It would produce a cyclic substitution θ = {x/f(x)}, leading to an infinite term f(f(f(...))) and non-termination of the inference process.'
          ]
        }
      ]
    }
  }
};
