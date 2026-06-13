export const rlModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Reinforcement Learning',
    topics: [
      { id: 'intro-rl', title: 'Introduction to RL' },
      { id: 'markov-decision', title: 'Markov Decision Processes' },
      { id: 'bellman-equation', title: 'Bellman Equations' },
      { id: 'policy-iteration', title: 'Policy Iteration' },
      { id: 'value-iteration', title: 'Value Iteration' },
    ]
  }
};

export const rlModule1Content = {
  module1: {
    'intro-rl': {
      title: 'Introduction to Reinforcement Learning',
      subtitle: 'Learning by interacting with an environment',
      sections: [
        {
          heading: 'What is Reinforcement Learning?',
          text: 'Reinforcement Learning (RL) is a type of machine learning where an <strong>agent</strong> learns to make decisions by performing <strong>actions</strong> in an <strong>environment</strong> to maximize <strong>cumulative rewards</strong>. Unlike supervised learning, there is no labeled dataset — the agent learns from trial and error through a continuous feedback loop of action and consequence.',
          list: [
            'Agent: the learner and decision-maker that selects actions',
            'Environment: everything the agent interacts with, providing states and rewards',
            'Reward: a scalar feedback signal that evaluates the immediate desirability of an action',
            'Policy: the agent\'s strategy for choosing actions in each state',
            'Goal: maximize the total discounted reward over time, not just immediate gains'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The agent-environment loop is the core mechanism of RL. At each step, the agent observes the current state, selects an action, receives a reward, and transitions to a new state.',
          example: {
            title: 'Example: Robot Navigation',
            code: 'Environment: maze with obstacles\nAgent: robot controller\n\nStep 1: Observe state S\n  S = [sensor_front=0.5m, sensor_left=2m]\n\nStep 2: Select action A\n  A = "turn_left" (from policy π)\n\nStep 3: Environment responds\n  New state S\' = [sensor_front=2m, sensor_left=0.5m]\n  Reward R = -1 (small step penalty)\n\nStep 4: Agent updates\n  Store transition (S, A, R, S\')\n  Update policy to favor paths that reach the goal',
            output: 'The robot learns which sequences of actions lead to the goal with the highest cumulative reward.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'RL differs fundamentally from supervised and unsupervised learning in how it acquires knowledge.',
          table: {
            headers: ['Aspect', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'],
            rows: [
              ['Data source', 'Fixed labeled dataset', 'Unlabeled dataset', 'Agent generates its own data'],
              ['Feedback', 'Immediate correct label', 'None (finds structure)', 'Delayed scalar reward'],
              ['Objective', 'Minimize prediction error', 'Discover patterns', 'Maximize cumulative reward'],
              ['Exploration', 'Not applicable', 'Not applicable', 'Must explore to discover rewards'],
              ['Example task', 'Image classification', 'Customer segmentation', 'Game playing, robotics']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing immediate reward with long-term return (fix: always use discounted return G = Σ γᵗRₜ to evaluate actions, not just the single-step reward)',
            'Mistake 2: Ignoring the exploration-exploitation tradeoff (fix: use ε-greedy or UCB to ensure the agent keeps trying new actions instead of greedily exploiting early estimates)',
            'Mistake 3: Treating RL as supervised learning with delayed labels (fix: remember that there is no ground-truth action; the agent must discover good actions through consequences, not模仿示范)',
            'Mistake 4: Setting γ = 1 in infinite-horizon problems (fix: use γ < 1 to ensure returns are finite and the agent does not optimistically chase rewards that are arbitrarily far in the future)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'RL powers systems that must make sequential decisions in uncertain environments.',
          list: [
            'Robotics: training robots to walk, grasp, and navigate by rewarding successful movements',
            'Game playing: AlphaGo, AlphaStar, and OpenAI Five mastered complex games through self-play and RL',
            'Autonomous vehicles: learning driving policies that balance safety, efficiency, and passenger comfort',
            'Recommendation systems: optimizing long-term user engagement instead of immediate clicks',
            'Finance: algorithmic trading strategies that learn from market interactions to maximize returns'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'RL = agent learns by interacting with an environment to maximize cumulative reward',
            'Core elements: agent, environment, state, action, reward, policy, value function',
            'No labeled data — the agent generates its own experience through trial and error',
            'Key challenge: balancing exploration (trying new things) with exploitation (using known good actions)',
            'Delayed feedback means the agent must credit actions that led to distant rewards'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main difference between RL and supervised learning?\nAns: RL learns from scalar reward signals and generates its own data through interaction, while supervised learning learns from fixed labeled datasets.',
            'Q2: Why is the discount factor γ important in RL?\nAns: It controls how much future rewards matter relative to immediate rewards, ensuring finite returns and shaping the agent\'s time horizon.',
            'Q3: What is the exploration-exploitation dilemma?\nAns: The agent must decide whether to exploit known high-reward actions or explore potentially better but uncertain alternatives.',
            'Q4: Name the four main elements of an RL system.\nAns: Policy (behavior), reward signal (feedback), value function (long-term expectation), and model (optional environment dynamics).'
          ]
        }
      ]
    },
    'markov-decision': {
      title: 'Markov Decision Processes',
      subtitle: 'The formal mathematical framework for reinforcement learning',
      sections: [
        {
          heading: 'What is a Markov Decision Process?',
          text: 'A <strong>Markov Decision Process (MDP)</strong> is the standard mathematical model for sequential decision-making under uncertainty. It formalizes the interaction between an agent and its environment using states, actions, transition probabilities, and rewards. The <strong>Markov property</strong> states that the future depends only on the present state and action, not on the full history.',
          list: [
            'States (S): a finite set of all possible situations the environment can be in',
            'Actions (A): a finite set of choices available to the agent in each state',
            'Transition probability (P): P(s\', r | s, a) — the probability of moving to state s\' with reward r',
            'Reward function (R): the expected immediate reward for taking action a in state s',
            'Discount factor (γ): a scalar between 0 and 1 that weights future rewards relative to immediate ones'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'An MDP is formally defined as a tuple (S, A, P, R, γ). The Markov property ensures the transition dynamics depend only on the current state and action.',
          example: {
            title: 'Example: GridWorld MDP',
            code: 'States S: 16 grid cells (4×4)\nActions A: {up, down, left, right}\n\nTransition dynamics:\n  P(s\'=target | s, a) = 0.8\n  P(s\'=left-of-target | s, a) = 0.1\n  P(s\'=right-of-target | s, a) = 0.1\n\nRewards:\n  R = +10 for reaching goal cell\n  R = -1 for every other step\n  R = -10 for falling into trap cell\n\nDiscount factor: γ = 0.9\n\nGoal: find a policy that maximizes\nexpected cumulative discounted reward.',
            output: 'Even in this simple grid, the agent must plan around stochastic transitions (80% success, 20% slip) and trade off immediate penalties against the distant goal reward.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'MDPs vs Markov chains vs Markov reward processes.',
          table: {
            headers: ['Aspect', 'Markov Chain', 'Markov Reward Process', 'Markov Decision Process'],
            rows: [
              ['Decision maker', 'None (passive)', 'None (passive)', 'Agent (active)'],
              ['Actions', 'No actions', 'No actions', 'Actions determine transitions'],
              ['Transitions', 'Fixed P(s\'|s)', 'Fixed P(s\'|s)', 'P(s\',r|s,a) depends on action'],
              ['Optimization', 'Not applicable', 'Not applicable', 'Find optimal policy π*'],
              ['Use case', 'Random walks, weather', 'Passive value prediction', 'RL, planning, control']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming the environment is fully observable when it is not (fix: if the agent cannot observe the true state, use a Partially Observable MDP (POMDP) and maintain a belief distribution over states)',
            'Mistake 2: Ignoring the stochastic nature of transitions (fix: always work with transition probabilities P(s\',r|s,a); a deterministic transition is just a special case where P = 1 for one outcome)',
            'Mistake 3: Setting γ = 1 in infinite-horizon problems (fix: use γ < 1 to guarantee convergence and avoid unbounded returns; episodic tasks can use γ = 1 only if termination is guaranteed)',
            'Mistake 4: Confusing the reward function with the return (fix: R(s,a) is immediate and local; the return G is the cumulative discounted sum of rewards over a trajectory)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'MDPs provide the formal backbone for decision-making systems across many domains.',
          list: [
            'Inventory management: states = stock levels, actions = order quantities, rewards = profit minus holding cost',
            'Resource allocation: states = available resources, actions = assignments, rewards = task completion efficiency',
            'Robot navigation: states = sensor readings + position, actions = motor commands, rewards = progress toward goal minus collision penalties',
            'Healthcare treatment: states = patient vitals, actions = treatment options, rewards = health improvement minus side-effect costs',
            'Energy systems: states = grid load + battery level, actions = charge/discharge decisions, rewards = cost savings plus grid stability'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MDP = (S, A, P, R, γ) — the formal model of sequential decision-making',
            'Markov property: future depends only on the present state and action, not the past',
            'Transition probability P(s\',r|s,a) captures environment stochasticity',
            'Reward R(s,a) gives immediate feedback; γ discounts future rewards',
            'The agent\'s goal is to find a policy π that maximizes expected return'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the five components of an MDP tuple?\nAns: States (S), Actions (A), Transition probabilities (P), Reward function (R), and Discount factor (γ).',
            'Q2: What does the Markov property imply?\nAns: The next state and reward depend only on the current state and action, not on the entire history of past states and actions.',
            'Q3: Why is the discount factor necessary in infinite-horizon MDPs?\nAns: To prevent returns from becoming infinite and to ensure the agent values immediate rewards more than distant ones.',
            'Q4: How does an MDP differ from a Markov chain?\nAns: An MDP includes an agent that actively chooses actions, which influence state transitions; a Markov chain has no actions and passive transitions.'
          ]
        }
      ]
    },
    'bellman-equation': {
      title: 'Bellman Equations',
      subtitle: 'Recursive relationships that define value functions in MDPs',
      sections: [
        {
          heading: 'What are the Bellman Equations?',
          text: 'The <strong>Bellman equations</strong> are a set of recursive equations named after mathematician Richard Bellman. They express the value of a state (or state-action pair) as the immediate reward plus the discounted expected value of the successor state. These equations are the foundation of virtually all RL algorithms — from dynamic programming to Q-learning.',
          list: [
            'Bellman Expectation Equation for Vπ: expresses the expected return under a fixed policy',
            'Bellman Expectation Equation for Qπ: expresses the expected return of taking an action then following a policy',
            'Bellman Optimality Equation for V*: expresses the maximum achievable value from any state',
            'Bellman Optimality Equation for Q*: expresses the maximum achievable value for each state-action pair',
            'All equations are recursive: the value of today depends on the expected value of tomorrow'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The four core Bellman equations form the backbone of value estimation and policy optimization.',
          example: {
            title: 'Example: Bellman Equations in a Simple Grid',
            code: 'Bellman Expectation Equation (Vπ):\n  Vπ(s) = Σ π(a|s) Σ p(s\',r|s,a) [r + γVπ(s\')]\n\nBellman Optimality Equation (V*):\n  V*(s) = max Σ p(s\',r|s,a) [r + γV*(s\')]\n         a\n\nExample: state "start" with γ=0.9\n  Policy π: 50% up, 50% down\n  Vπ(start) = 0.5×[0 + 0.9×V(goal)]\n            + 0.5×[-1 + 0.9×V(wall)]\n            = 0.5×[0 + 0.9×10]\n            + 0.5×[-1 + 0.9×0]\n            = 4.5 - 0.5 = 4.0',
            output: 'The Bellman equations let us decompose the value of a state into an immediate term and a discounted future term.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Expectation vs optimality equations, and state-value vs action-value forms.',
          table: {
            headers: ['Equation', 'For', 'Uses', 'Purpose'],
            rows: [
              ['Bellman Expectation (Vπ)', 'Fixed policy π', 'Σ over π(a|s)', 'Evaluate how good a policy is'],
              ['Bellman Expectation (Qπ)', 'Fixed policy π', 'Σ over π(a\'|s\')', 'Evaluate state-action pairs under π'],
              ['Bellman Optimality (V*)', 'Optimal policy', 'max over actions', 'Find the best possible state value'],
              ['Bellman Optimality (Q*)', 'Optimal policy', 'max over next actions', 'Find the best possible action value']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to discount future values (fix: always include γ when expanding the Bellman equation; omitting it implies γ=1, which is rarely correct for infinite-horizon tasks)',
            'Mistake 2: Confusing the expectation equation with the optimality equation (fix: the expectation equation averages over the policy; the optimality equation takes the maximum over actions — they are used for different purposes)',
            'Mistake 3: Treating the Bellman equation as a single-step lookahead only (fix: the equation is recursive; solving it means finding a fixed point where V(s) equals the right-hand side for all states simultaneously)',
            'Mistake 4: Using the expectation equation when you want to improve the policy (fix: policy improvement requires Q-values or the optimality equation, which tell you which action is best, not just the average under the current policy)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'The Bellman equations appear in every algorithm that plans or learns from delayed rewards.',
          list: [
            'Dynamic programming: policy iteration and value iteration are essentially solvers for the Bellman optimality equations',
            'Q-learning: the update rule is a sampled, bootstrapped version of the Bellman optimality equation for Q*',
            'TD learning: TD(0) approximates the Bellman expectation equation using sampled transitions',
            'Game AI: chess and Go engines use Bellman backups to propagate win/loss values from terminal positions backward through the game tree',
            'Finance: option pricing and portfolio optimization use Bellman recursion to value multi-stage decisions under uncertainty'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bellman equations express value as immediate reward plus discounted expected future value',
            'Expectation equations evaluate a fixed policy by averaging over its action distribution',
            'Optimality equations find the best possible value by maximizing over actions',
            'They are recursive: solving them requires finding a fixed point across all states',
            'Every major RL algorithm (DP, TD, Q-learning) is a way of solving or approximating these equations'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key difference between the Bellman expectation and optimality equations?\nAns: The expectation equation averages over the current policy\'s actions, while the optimality equation takes the maximum over all possible actions.',
            'Q2: Why are Bellman equations called recursive?\nAns: Because the value of a state is defined in terms of the values of successor states, creating a self-referential system.',
            'Q3: In the Bellman optimality equation for V*, what does the max operator represent?\nAns: It represents choosing the action that yields the highest expected return from the current state.',
            'Q4: Which Bellman equation does Q-learning approximate?\nAns: Q-learning approximates the Bellman optimality equation for Q* using sampled transitions and bootstrapping.'
          ]
        }
      ]
    },
    'policy-iteration': {
      title: 'Policy Iteration',
      subtitle: 'Alternating between policy evaluation and policy improvement to find the optimal policy',
      sections: [
        {
          heading: 'What is Policy Iteration?',
          text: '<strong>Policy iteration</strong> is an algorithm that finds the optimal policy for an MDP by repeatedly performing two steps: <strong>policy evaluation</strong> (compute the value function for the current policy) and <strong>policy improvement</strong> (make the policy greedy with respect to the computed values). These two steps form a cycle that is guaranteed to converge to the optimal policy π* in a finite number of iterations for finite MDPs.',
          list: [
            'Policy evaluation: iteratively compute Vπ for the current policy using the Bellman expectation equation',
            'Policy improvement: construct a new policy π\' that is greedy with respect to Vπ',
            'Policy improvement theorem: the new policy is guaranteed to be as good as or better than the old one',
            'Convergence: for finite MDPs, policy iteration converges to the optimal policy in finite time',
            'Each iteration strictly improves the policy until optimality is reached'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Policy evaluation applies the Bellman expectation equation iteratively; policy improvement selects the action with the highest Q-value.',
          example: {
            title: 'Example: Policy Iteration in GridWorld',
            code: 'Initialization: random policy π₀\n  π₀(up|all_states) = 0.25\n  π₀(down|all_states) = 0.25\n  π₀(left|all_states) = 0.25\n  π₀(right|all_states) = 0.25\n\nIteration 1 — Policy Evaluation:\n  Vπ₀(s) = Σ π₀(a|s) × [r + γVπ₀(s\')]\n  After convergence: Vπ₀(start) = 2.3\n\nIteration 1 — Policy Improvement:\n  π₁(s) = argmax Qπ₀(s,a)\n  Qπ₀(start, up) = 8.2  ← BEST\n  Qπ₀(start, down) = -1.0\n  π₁(start) = "up"\n\nIteration 2 — Evaluate π₁, improve to π₂...\n\nAfter 4 iterations: π = π* (optimal)',
            output: 'Policy iteration often converges in surprisingly few iterations because each improvement step makes a large policy change.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Policy iteration vs value iteration vs policy gradient methods.',
          table: {
            headers: ['Aspect', 'Policy Iteration', 'Value Iteration', 'Policy Gradient'],
            rows: [
              ['Core idea', 'Evaluate then improve policy', 'Update values directly', 'Optimize policy parameters'],
              ['Convergence', 'Finite steps (finite MDP)', 'Asymptotic', 'Gradient-based, stochastic'],
              ['Per-iteration cost', 'High (full evaluation)', 'Low (single backup)', 'Medium (trajectory sampling)'],
              ['Policy representation', 'Tabular (explicit mapping)', 'Implicit from values', 'Parameterized function'],
              ['Best for', 'Small, discrete MDPs', 'Medium MDPs', 'Large, continuous MDPs']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Stopping policy evaluation too early (fix: run evaluation until the maximum change in V is below a small threshold θ; premature stopping gives inaccurate values and slows convergence)',
            'Mistake 2: Forgetting to check for policy stability (fix: the algorithm stops only when the policy stops changing; if values change but the greedy policy does not, you have already reached optimality)',
            'Mistake 3: Applying policy iteration to continuous or very large state spaces (fix: for large problems, switch to value iteration, approximate dynamic programming, or policy gradient methods)',
            'Mistake 4: Confusing policy improvement with value improvement (fix: policy improvement changes the action selection rule; the values are updated during the separate evaluation phase)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Policy iteration and its variants are used wherever explicit planning in known environments is possible.',
          list: [
            'Robot path planning: computing collision-free, shortest-path policies in known maps',
            'Inventory control: finding optimal restocking policies that balance holding costs against stockout penalties',
            'Maintenance scheduling: determining when to service equipment to minimize downtime and repair costs',
            'Call center routing: assigning incoming calls to agents to minimize wait time and maximize resolution rate',
            'Game AI: retro board games and puzzles where the state space is small enough for exact tabular methods'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Policy iteration alternates between evaluation (compute Vπ) and improvement (make policy greedy)',
            'Policy evaluation solves the Bellman expectation equation iteratively for the current policy',
            'Policy improvement constructs a new policy that is greedy with respect to the current values',
            'The policy improvement theorem guarantees the new policy is better than or equal to the old one',
            'Converges to the optimal policy π* in finite iterations for finite MDPs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the two main steps in policy iteration?\nAns: Policy evaluation (computing the value function for the current policy) and policy improvement (making the policy greedy with respect to those values).',
            'Q2: Why does policy iteration converge in finite steps for finite MDPs?\nAns: Because there are finitely many deterministic policies, and each improvement step strictly improves the policy unless it is already optimal.',
            'Q3: What is the policy improvement theorem?\nAns: It states that a new policy constructed to be greedy with respect to Vπ will have values greater than or equal to Vπ in every state.',
            'Q4: When is policy iteration preferable to value iteration?\nAns: When the state space is small enough that full policy evaluation is affordable, because policy iteration often requires fewer total iterations.'
          ]
        }
      ]
    },
    'value-iteration': {
      title: 'Value Iteration',
      subtitle: 'Finding optimal values with a single backup operation per state',
      sections: [
        {
          heading: 'What is Value Iteration?',
          text: '<strong>Value iteration</strong> is a dynamic programming algorithm that finds the optimal value function V* by repeatedly applying the Bellman optimality equation. Unlike policy iteration, which alternates between full policy evaluation and improvement, value iteration combines both into a single update: for each state, it looks one step ahead and takes the maximum over all actions. Once the values converge, the optimal policy can be extracted by acting greedily with respect to V*.',
          list: [
            'Update rule: V(s) ← maxₐ Σ p(s\',r|s,a) × [r + γV(s\')] for every state',
            'Each sweep updates every state using the most recent estimates of neighboring states',
            'Convergence is asymptotic: V approaches V* as the number of sweeps → ∞',
            'In practice, stop when the maximum change across all states is below a threshold θ',
            'After convergence, the optimal policy is π*(s) = argmaxₐ Q*(s,a)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Value iteration is essentially turning the Bellman optimality equation into an iterative update rule.',
          example: {
            title: 'Example: Value Iteration in a 3×3 Grid',
            code: 'Goal state (bottom-right): V(goal) = 0\nAll other states: initial V(s) = 0\nγ = 0.9, step reward = -1\n\nSweep 1:\n  V(2,2) = max{\n    up:    -1 + 0.9×0 = -1\n    down:  -1 + 0.9×0 = -1 ← goal!\n    left:  -1 + 0.9×0 = -1\n    right: -1 + 0.9×0 = -1\n  } = -1  (down leads to goal)\n\nSweep 2:\n  V(2,1) = max{\n    up:    -1 + 0.9×(-1) = -1.9\n    down:  -1 + 0.9×0     = -1  ← goal!\n    left:  -1 + 0.9×0     = -1\n    right: -1 + 0.9×(-1) = -1.9\n  } = -1\n\nAfter 20 sweeps: V converges to V*',
            output: 'Values propagate backward from the goal state, gradually informing earlier states how close they are to the objective.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Value iteration vs policy iteration, and synchronous vs asynchronous updates.',
          table: {
            headers: ['Aspect', 'Value Iteration', 'Policy Iteration', 'Asynchronous VI'],
            rows: [
              ['Update target', 'Values only', 'Policy + values', 'Values only'],
              ['Per-sweep cost', 'Cheap (one max backup)', 'Expensive (full evaluation)', 'Variable'],
              ['Convergence', 'Asymptotic', 'Finite steps', 'Asymptotic'],
              ['Number of sweeps', 'Typically more', 'Typically fewer', 'Depends on order'],
              ['Memory', 'Stores only V', 'Stores V + π', 'Stores only V'],
              ['Best for', 'Medium MDPs', 'Small MDPs', 'Very large MDPs']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Extracting the policy before values have converged (fix: premature policies can be suboptimal; wait until max|V - V_old| < θ, then do one final greedy extraction)',
            'Mistake 2: Using value iteration when the transition model is unknown (fix: value iteration requires P(s\',r|s,a); if the model is unknown, use model-free methods like Q-learning or SARSA)',
            'Mistake 3: Setting the convergence threshold θ too loose (fix: a large θ causes premature termination and suboptimal policies; typical values are 10⁻⁴ to 10⁻⁶ for small problems)',
            'Mistake 4: Confusing value iteration with simple greedy one-step planning (fix: value iteration propagates information across multiple steps through repeated sweeps, not just a single lookahead)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Value iteration and its relatives are used when the environment model is known and the state space is manageable.',
          list: [
            'Navigation systems: computing shortest-path or minimum-time routes in road networks with known topology',
            'Automated manufacturing: scheduling jobs on machines to minimize makespan with known task durations',
            'Drone flight planning: finding energy-optimal trajectories in wind fields modeled as stochastic transitions',
            'Medical treatment protocols: optimizing sequences of interventions when clinical outcomes are modeled probabilistically',
            'Stochastic games: solving for Nash equilibria in small turn-based games with known payoff structures'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Value iteration updates V(s) using the Bellman optimality equation in a single backup per state',
            'It combines evaluation and improvement into one step, making it simpler than policy iteration',
            'Convergence is asymptotic; stop when the maximum value change across states is below θ',
            'After convergence, extract the optimal policy greedily from V*',
            'Best suited for medium-sized MDPs where the transition model is known and tabular storage is feasible'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does value iteration differ from policy iteration?\nAns: Value iteration combines policy evaluation and improvement into a single Bellman optimality backup per state, while policy iteration alternates full evaluation sweeps with improvement steps.',
            'Q2: Why is value iteration said to converge asymptotically?\nAns: Because the values approach V* in the limit as the number of sweeps goes to infinity; exact convergence requires infinitely many updates in general.',
            'Q3: When should you stop value iteration?\nAns: When the maximum change in any state\'s value between sweeps falls below a small threshold θ.',
            'Q4: Can you use value iteration without knowing the transition probabilities?\nAns: No — value iteration is a model-based method and requires P(s\',r|s,a). Use Q-learning or SARSA for model-free settings.'
          ]
        }
      ]
    }
  }
};
