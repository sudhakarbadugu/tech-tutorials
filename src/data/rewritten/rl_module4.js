export const rlModule4Structure = {
  'module4': {
    'title': 'Module 4: Advanced RL Methods',
    'topics': [
      { 'id': 'rl-algorithms', 'title': 'Deep RL Algorithms' },
      { 'id': 'model-based-rl', 'title': 'Model-Based RL' },
      { 'id': 'imitation-learning', 'title': 'Imitation Learning' },
      { 'id': 'rl-challenges', 'title': 'RL Challenges & Frontiers' },
    ]
  }
};

export const rlModule4Content = {
  'module4': {
    'rl-algorithms': {
      'title': 'Deep Reinforcement Learning Algorithms',
      'subtitle': 'Scaling RL with neural network function approximation',
      'sections': [
        {
          'heading': 'What is Deep Reinforcement Learning?',
          'text': '<strong>Deep Reinforcement Learning (Deep RL)</strong> combines RL with deep neural networks to handle high-dimensional state and action spaces. Traditional tabular RL fails when states are continuous or images, because it cannot generalize across similar states. Deep RL uses neural networks as function approximators for policies, value functions, or models, enabling agents to learn directly from raw pixels, sensor data, or complex embeddings.',
          'list': [
            'Deep Q-Networks (DQN): use a neural network to approximate the Q-function for discrete actions',
            'Policy Gradient methods (REINFORCE, A2C, PPO): directly optimize the policy network via gradient ascent',
            'Actor-Critic methods: combine a value-based critic with a policy-based actor for stable learning',
            'Experience replay: store and reuse past transitions to break correlation and improve sample efficiency'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'DQN minimizes the temporal-difference error between predicted Q-values and target Q-values computed from the Bellman equation.',
          'example': {
            'title': 'Example: DQN Loss Computation',
            'code': `Initialize: Q-network Q(s, a; θ), target network Q(s, a; θ⁻)

For each transition (S, A, R, S', done):
  1. Compute current Q-value:
     Q_pred = Q(S, A; θ)

  2. Compute target Q-value:
     If done:
       Q_target = R
     Else:
       Q_target = R + γ × max_a Q(S', a; θ⁻)

  3. Loss (Huber / MSE):
     L(θ) = E[(Q_target - Q_pred)²]

  4. Gradient update:
     θ ← θ - α × ∇L(θ)

Target network θ⁻ is copied from θ every N steps
  → stabilizes training by decoupling target from online network`,
            'output': 'DQN converges to optimal Q-values by bootstrapping from a slowly-updated target network.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Deep RL algorithms differ in how they represent and update the policy and value function.',
          'table': {
            'headers': ['Aspect', 'DQN', 'REINFORCE', 'Actor-Critic (A2C/A3C)', 'PPO'],
            'rows': [
              ['Action space', 'Discrete only', 'Discrete or continuous', 'Discrete or continuous', 'Discrete or continuous'],
              ['Value function', 'Q-network', 'None (Monte Carlo returns)', 'Critic V(s) or Q(s,a)', 'Critic V(s)'],
              ['Policy update', 'ε-greedy from Q', 'Gradient on log-prob × return', 'Advantage-weighted gradient', 'Clipped surrogate objective'],
              ['Sample efficiency', 'High (replay buffer)', 'Low (needs full episodes)', 'Medium', 'Medium-High'],
              ['Stability', 'Needs target network', 'High variance', 'Lower variance with critic', 'Very stable (clipping)'],
              ['Best for', 'Atari games (discrete)', 'Simple policy search', 'Continuous control', 'General-purpose RL']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using a single Q-network without a target network (fix: always maintain a separate target network that lags behind the online network to prevent divergence from chasing moving targets)',
            'Mistake 2: Ignoring the dead-ReLU problem in DQN (fix: use dueling architectures, double DQN, or noisy networks to improve exploration and value estimation)',
            'Mistake 3: Applying PPO with a badly tuned clipping parameter ε (fix: start with ε = 0.2 and adjust based on the KL divergence between old and new policies; monitor surrogate loss)',
            'Mistake 4: Setting the learning rate too high for policy gradient methods (fix: use adaptive optimizers like Adam with conservative learning rates, or employ learning rate annealing during training)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Deep RL powers systems that must make decisions from rich sensory input in complex environments.',
          'list': [
            'Game AI: DeepMind\'s DQN mastered Atari games from raw pixels; AlphaStar reached Grandmaster level in StarCraft II using a distributed actor-critic architecture',
            'Robotics: robotic arms learn dexterous manipulation by training policy networks on visual and proprioceptive input in simulated and real environments',
            'Autonomous driving: deep RL agents learn lane keeping, overtaking, and emergency braking by training convolutional encoders on camera feeds',
            'Recommendation systems: deep RL optimizes long-term user engagement by training a policy on user history embeddings and reward signals like session duration',
            'Resource scheduling: Google\'s data center cooling uses Deep RL to minimize energy consumption by learning from sensor inputs and PUE metrics'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Deep RL = RL + deep neural networks for function approximation',
            'DQN uses a Q-network with experience replay and a target network for stable discrete-action learning',
            'Policy gradient methods directly optimize the policy via gradient ascent on expected return',
            'Actor-Critic combines value estimation (critic) with policy optimization (actor) to reduce variance',
            'PPO is the current go-to algorithm for general deep RL due to its simplicity, stability, and strong performance'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            `Q1: Why does DQN need a target network?
Ans: The target network provides stable bootstrapping targets by lagging behind the online network, preventing the Q-values from diverging due to correlated updates.`,
            `Q2: What is the key innovation of PPO over vanilla policy gradients?
Ans: PPO uses a clipped surrogate objective that limits how far the policy can change in a single update, ensuring stable, monotonic improvement without complex trust-region optimization.`,
            `Q3: How does experience replay improve sample efficiency?
Ans: By storing past transitions and sampling them randomly, experience replay breaks temporal correlations and allows each transition to be reused for multiple gradient updates.`,
            `Q4: In Actor-Critic, what is the role of the baseline?
Ans: The baseline (usually the value function) reduces the variance of the policy gradient by subtracting the expected return, so only advantages above average drive policy updates.`
          ]
        }
      ]
    },
    'model-based-rl': {
      'title': 'Model-Based Reinforcement Learning',
      'subtitle': 'Learning and planning with an internal world model',
      'sections': [
        {
          'heading': 'What is Model-Based RL?',
          'text': '<strong>Model-Based RL</strong> is an approach where the agent learns an internal model of the environment dynamics — predicting next states and rewards — and uses this model for planning and decision-making. Unlike model-free methods that learn directly from experience without understanding environment dynamics, model-based agents can simulate possible futures, evaluate outcomes mentally, and choose actions through lookahead planning.',
          'list': [
            'Learned model: a neural network that predicts P(s′|s,a) and R(s,a) from observed transitions',
            'Planning: the agent generates imagined trajectories by rolling out the learned model to evaluate action sequences',
            'Model predictive control (MPC): replan at every step using the latest model, executing only the first planned action',
            'World models (Ha & Schmidhuber): agents learn complete latent-space models of the environment for sample-efficient learning'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'A learned dynamics model predicts the next state and reward given the current state and action. Planning then selects actions by simulating rollouts through this model.',
          'example': {
            'title': 'Example: Model Predictive Control (MPC) Loop',
            'code': `Learned model:
  s_{t+1} = f(s_t, a_t; θ)   (dynamics model)
  r_t     = g(s_t, a_t; φ)   (reward model)

Planning (cross-entropy method, CEM):
  1. Sample N action sequences from prior
     A = [a_1, a_2, ..., a_H]

  2. Simulate each sequence through model:
     For t = 1 to H:
       s_{t+1} = f(s_t, a_t)
       r_t     = g(s_t, a_t)
       R_total = Σ γ^t r_t

  3. Select top-k sequences by R_total
  4. Refit action distribution to top-k
  5. Repeat for M iterations

Execute: a_1 from best sequence
Replan at next step with new state`,
            'output': 'MPC replans at every step, correcting for model errors before they compound.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Model-based and model-free RL differ in sample efficiency, computational cost, and handling of model errors.',
          'table': {
            'headers': ['Aspect', 'Model-Free RL', 'Model-Based RL'],
            'rows': [
              ['Environment model', 'Not learned (implicit in value/policy)', 'Explicitly learned from data'],
              ['Sample efficiency', 'Low (needs millions of steps)', 'High (learns from few real interactions)'],
              ['Computational cost', 'Low at test time', 'High (planning needs rollouts)'],
              ['Generalization', 'Limited to visited states', 'Can plan through imagined states'],
              ['Compounding errors', 'Not applicable', 'Major issue: small model errors compound over long rollouts'],
              ['Exploration', 'Random or curiosity-driven', 'Directed by model uncertainty (optimism in face of uncertainty)'],
              ['Best for', 'Complex dynamics, simulators', 'Real-world robotics, expensive interactions']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Trusting a learned model for very long rollouts without correction (fix: use short planning horizons H (5-15 steps) and replan at each step with the true state to prevent error accumulation)',
            'Mistake 2: Ignoring model uncertainty (fix: use probabilistic models (e.g., Gaussian processes, ensembles, Bayesian neural networks) or MBPO-style branched rollouts that cut off before errors explode)',
            'Mistake 3: Planning in raw pixel space (fix: learn a compact latent representation with an autoencoder or world model, then plan in the latent space for computational tractability)',
            'Mistake 4: Treating model learning as a solved subproblem (fix: use on-policy data for model updates, schedule model-data ratios carefully, and consider model-free fallback when model predictions become unreliable)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Model-based RL excels in domains where real-world interaction is expensive, slow, or dangerous.',
          'list': [
            'Robotics manipulation: MBPO and PETS enable sample-efficient robot learning by training on only hours of real-world interaction supplemented by millions of model-generated transitions',
            'Autonomous vehicles: model-based approaches allow self-driving cars to anticipate future traffic scenarios and plan safe trajectories through mentally simulated rollouts of road dynamics',
            'Drug discovery: model-based RL plans molecular modifications by learning predictive models of binding affinity and toxicity, reducing expensive lab experiments',
            'Power systems: grid control agents learn thermal and electrical dynamics models to plan load balancing and prevent outages without destabilizing the real grid during training',
            'Spacecraft control: NASA uses model-based RL for spacecraft docking and landing, where long rollouts in a learned dynamics model guide fuel-optimal trajectories'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Model-based RL learns an explicit model of environment dynamics (transitions and rewards)',
            'Planning uses the learned model to simulate futures and select actions via lookahead (MPC, MCTS, CEM)',
            'Key advantage: high sample efficiency — learns from few real interactions by generating synthetic experience',
            'Key challenge: compounding model errors over long rollouts cause planned policies to fail in the real environment',
            'Hybrid approaches (MBPO, Dreamer) combine model-based imagination with model-free policy learning for robustness'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            `Q1: What is the primary advantage of model-based RL over model-free RL?
Ans: Model-based RL is far more sample-efficient because it can generate unlimited synthetic experience from a learned model, reducing the need for costly real-world interactions.`,
            `Q2: What causes compounding errors in model-based RL?
Ans: Small prediction errors in the learned model accumulate when the model is used to simulate long trajectories, causing the imagined states to diverge from reality.`,
            `Q3: How does Model Predictive Control (MPC) mitigate compounding errors?
Ans: MPC uses short planning horizons and replans from the true state at every step, preventing errors from accumulating beyond the horizon length.`,
            `Q4: Name one way to handle model uncertainty in model-based RL.
Ans: Use an ensemble of dynamics models and plan conservatively against the worst-case or expected outcome, or use probabilistic models that explicitly capture prediction uncertainty.`
          ]
        }
      ]
    },
    'imitation-learning': {
      'title': 'Imitation Learning',
      'subtitle': 'Learning policies from expert demonstrations',
      'sections': [
        {
          'heading': 'What is Imitation Learning?',
          'text': '<strong>Imitation Learning (IL)</strong> is a paradigm where an agent learns to perform a task by observing and mimicking expert demonstrations, rather than learning through trial-and-error reward signals. Also called learning from demonstration (LfD) or apprenticeship learning, IL is powerful when reward functions are hard to specify but expert trajectories are available — such as human driving recordings, robotic kinesthetic teaching, or gameplay videos.',
          'list': [
            'Behavioral Cloning (BC): supervised learning that maps states to expert actions using a classification or regression loss',
            'DAgger (Dataset Aggregation): iteratively collects new demonstrations from an expert in states visited by the learned policy',
            'Inverse Reinforcement Learning (IRL): infers the expert\'s reward function from demonstrations, then optimizes a policy for that reward',
            'Generative Adversarial Imitation Learning (GAIL): uses a discriminator to distinguish expert from agent behavior and trains the policy to fool the discriminator'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'Behavioral cloning minimizes the cross-entropy or mean-squared error between the predicted action and the expert action at each state. DAgger extends this by querying the expert on states the policy actually visits.',
          'example': {
            'title': 'Example: DAgger Iterative Training',
            'code': `Initialize:
  D = expert demonstrations {(s, a*)}
  Train policy π_θ on D

For i = 1 to N iterations:
  1. Roll out π_θ in environment
     → states S_i = {s visited by policy}

  2. Query expert for labels on S_i
     → new pairs {(s, a*_expert)}

  3. Aggregate into dataset:
     D ← D ∪ {(s, a*_expert)}

  4. Retrain π_θ on D

Behavioral cloning loss:
  L(θ) = Σ -log π_θ(a* | s)     (discrete)
  L(θ) = Σ ||π_θ(s) - a*||²    (continuous)

DAgger guarantees:
  Performance ≤ expert + O(1/T)
  (unlike BC which suffers from covariate shift)`,
            'output': 'DAgger matches expert performance by training on the actual state distribution the policy encounters.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Imitation learning methods differ in how they handle distribution mismatch and the need for expert feedback.',
          'table': {
            'headers': ['Aspect', 'Behavioral Cloning', 'DAgger', 'IRL', 'GAIL'],
            'rows': [
              ['Training data', 'Fixed expert trajectories', 'Expert + on-policy queries', 'Expert trajectories only', 'Expert + agent trajectories'],
              ['Expert interaction', 'None after data collection', 'Interactive (queries during training)', 'None after data collection', 'None after data collection'],
              ['Reward needed', 'No', 'No', 'Infers reward', 'No (learns implicit reward via discriminator)'],
              ['Covariate shift', 'Severe (compounding errors)', 'Solved by on-policy queries', 'Solved by learned reward', 'Solved by matching occupancy'],
              ['Sample complexity', 'Low (offline)', 'Medium (needs expert queries)', 'High (reward inference + RL)', 'High (GAN training)'],
              ['Best for', 'Simple tasks, abundant data', 'Tasks where expert is queryable', 'Understanding expert intent', 'Complex continuous control']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Assuming behavioral cloning will generalize to unseen states (fix: use DAgger or data augmentation to train on the state distribution the policy actually visits; otherwise compounding errors cause catastrophic failure)',
            'Mistake 2: Collecting expert data only from optimal trajectories (fix: include recovery behavior and near-miss states so the policy learns how to recover from mistakes, not just perfect execution)',
            'Mistake 3: Ignoring action noise in human demonstrations (fix: filter or model human reaction time and noise; use temporal convolution or noise injection to make the policy robust to imperfect labels)',
            'Mistake 4: Applying GAIL without sufficient expert data (fix: GAIL needs a large and diverse expert dataset to train a stable discriminator; with few demos, BC or DAgger is more reliable)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Imitation learning enables agents to acquire complex skills quickly when expert demonstrations are easier to obtain than reward functions.',
          'list': [
            'Autonomous driving: Waymo and Tesla use human driving logs to train lane-following, intersection handling, and obstacle avoidance policies via behavioral cloning and DAgger variants',
            'Robotic surgery: surgical robots learn suturing and tissue manipulation by imitating expert surgeon trajectories captured via teleoperation or motion tracking',
            'Game playing: AlphaGo initially learned from human expert games (supervised learning) before refining via self-play RL; many game AIs use human replays as initialization',
            'Natural language generation: chatbots and code assistants are trained via imitation learning on human-written text, learning to mimic style and reasoning patterns',
            'Warehouse automation: pick-and-place robots learn grasping strategies by watching human demonstrations, reducing engineering time for reward shaping'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Imitation learning learns policies from expert demonstrations rather than hand-crafted rewards',
            'Behavioral cloning is simple supervised learning but suffers from covariate shift and compounding errors',
            'DAgger solves covariate shift by iteratively querying the expert on states visited by the learned policy',
            'IRL infers a reward function from expert behavior, then optimizes a policy for that reward',
            'GAIL uses adversarial training to match the state-action occupancy of the expert without explicit rewards'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            `Q1: What is covariate shift in behavioral cloning?
Ans: Covariate shift occurs when the learned policy visits states that differ from the expert training distribution, causing compounding errors because the policy was never trained on those states.`,
            `Q2: How does DAgger differ from behavioral cloning?
Ans: DAgger iteratively collects new expert demonstrations on states visited by the current policy, aggregating them into the training dataset so the policy learns recovery behavior.`,
            `Q3: What is the goal of Inverse Reinforcement Learning?
Ans: IRL infers the underlying reward function that explains expert behavior, then uses that reward to train new policies that may generalize beyond the original demonstrations.`,
            `Q4: In GAIL, what role does the discriminator play?
Ans: The discriminator learns to distinguish between expert and agent state-action pairs; the policy is trained to generate trajectories that fool the discriminator, implicitly matching expert behavior.`
          ]
        }
      ]
    },
    'rl-challenges': {
      'title': 'RL Challenges & Frontiers',
      'subtitle': 'Open problems and emerging directions in reinforcement learning',
      'sections': [
        {
          'heading': 'What are the Key Challenges in RL?',
          'text': 'Despite impressive successes, RL faces fundamental challenges that limit its deployment in real-world systems. These include <strong>sample inefficiency</strong> (needing millions of interactions), <strong>reward specification</strong> (designing reward functions that capture true objectives without loopholes), <strong>generalization</strong> (policies that fail when deployed outside training conditions), <strong>safety</strong> (ensuring agents do not take dangerous actions during exploration), and <strong>scalability</strong> (scaling to long-horizon, partially observable, multi-agent domains).',
          'list': [
            'Sample inefficiency: model-free methods need millions of environment steps, making them impractical for expensive real-world domains',
            'Reward hacking: agents exploit loopholes in reward functions, achieving high reward without fulfilling the intended objective',
            'Poor generalization: policies overfit to training environments and fail under minor distribution shifts',
            'Exploration in sparse-reward domains: agents struggle to discover reward signals that are rare or delayed by hundreds of steps',
            'Safety and alignment: ensuring RL agents remain safe, controllable, and aligned with human values during and after training'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'Reward shaping modifies the original sparse reward to provide denser feedback, but must preserve the optimal policy to avoid unintended behavior.',
          'example': {
            'title': 'Example: Reward Shaping and Potential-Based Rewards',
            'code': `Original sparse reward:
  R(s) = +1 if goal reached, 0 otherwise

Potential-based shaping:
  F(s, a, s') = γ × Φ(s') - Φ(s)

Where Φ(s) is a potential function estimating
progress toward the goal.

Shaped reward:
  R'(s, a, s') = R(s) + F(s, a, s')

Theorem (Ng & Russell):
  If F is potential-based, optimal policy
  under R' is also optimal under R.

Caution:
  If Φ is misspecified (e.g., local maxima),
  F can create suboptimal attractors.

Example: maze navigation
  Φ(s) = -Manhattan_distance(s, goal)
  → rewards moving closer to goal at each step`,
            'output': 'Potential-based shaping accelerates learning without changing the optimal policy.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'RL paradigms differ in how they address exploration, generalization, and safety.',
          'table': {
            'headers': ['Challenge', 'Traditional Approach', 'Emerging Solution', 'Status'],
            'rows': [
              ['Sample efficiency', 'Experience replay, target networks', 'Model-based RL, offline RL', 'Promising but not solved'],
              ['Reward design', 'Hand-crafted shaping', 'Inverse RL, reward modeling', 'Active research'],
              ['Generalization', 'Domain randomization', 'Meta-RL, causal RL', 'Improving rapidly'],
              ['Long-horizon tasks', 'Hierarchical RL', 'Options framework, skill libraries', 'Partially solved'],
              ['Multi-agent systems', 'Independent learners', 'Centralized training decentralized execution', 'Active research'],
              ['Safety', 'Constrained MDPs', 'Shielding, formal verification, RLHF', 'Critical open problem']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Assuming a trained policy will generalize to deployment environments (fix: use domain randomization during training, test on held-out environments, and monitor for distributional shift; consider meta-learning for fast adaptation)',
            'Mistake 2: Designing reward functions without thinking about loopholes (fix: run reward auditing — simulate an agent optimized purely for reward and check if it finds unintended shortcuts; use constrained MDPs to enforce safety)',
            'Mistake 3: Deploying exploration-heavy policies in safety-critical systems (fix: separate exploration from exploitation; use safe RL techniques (CPO, Lyapunov constraints) that bound the probability of dangerous states)',
            'Mistake 4: Treating RL as a plug-and-play solution for any sequential decision problem (fix: evaluate whether the problem has clear reward signals, sufficient data, and safe exploration before choosing RL; sometimes rule-based or planning methods are better)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Addressing RL challenges is essential for moving from research demos to production systems.',
          'list': [
            'Healthcare: safe RL for personalized treatment dosing must guarantee that exploration never harms patients — constrained MDPs and conservative policy updates are essential',
            'Finance: reward hacking in trading bots can manifest as exploiting backtest overfitting; rigorous out-of-sample testing and reward auditing prevent deployment disasters',
            'Industrial control: RL for chemical plant optimization must generalize across varying feedstock quality; domain randomization and robust RL methods ensure stable operation',
            'Assistive robotics: home-care robots must safely explore household environments; shielding mechanisms and human-in-the-loop feedback (RLHF) constrain behavior',
            'Climate policy: RL for energy grid optimization must align with multi-stakeholder objectives; multi-objective RL and reward modeling help capture competing preferences'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Sample inefficiency is the biggest barrier to real-world RL deployment',
            'Reward hacking shows that agents optimize what you measure, not what you intend',
            'Generalization remains weak — policies overfit to training conditions and fail under distribution shift',
            'Safety and alignment are critical: unconstrained exploration can cause harm in physical or high-stakes domains',
            'Frontiers include model-based RL, offline RL, meta-learning, multi-agent RL, and human-aligned RL via RLHF'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            `Q1: What is reward hacking?
Ans: Reward hacking occurs when an agent finds a loophole in the reward function that yields high reward without achieving the intended task objective.`,
            `Q2: Why does domain randomization improve generalization?
Ans: By training on a wide distribution of simulated environments with randomized parameters, the policy learns invariant features that transfer to unseen real-world conditions.`,
            `Q3: What is the main safety concern with deploying RL in physical systems?
Ans: Exploration may cause dangerous actions before the agent has learned safe behavior; safety constraints and shielding mechanisms are needed to bound risk during learning.`,
            `Q4: Name two frontier directions in RL research.
Ans: Offline RL (learning from fixed datasets without environment interaction) and RLHF (reinforcement learning from human feedback to align agents with human preferences).` 
          ]
        }
      ]
    }
  }
};
