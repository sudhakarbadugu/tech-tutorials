export const rlModule5Structure = {
  module5: {
    title: 'Module 5: RL Applications',
    topics: [
      { id: 'rl-real-world', title: 'Real-World RL Applications' },
      { id: 'rl-robotics', title: 'RL in Robotics' },
      { id: 'rl-games', title: 'RL in Games' },
      { id: 'rl-recommenders', title: 'RL in Recommendation Systems' },
    ]
  }
};

export const rlModule5Content = {
  module5: {
    'rl-real-world': {
      title: 'Real-World Reinforcement Learning Applications',
      subtitle: 'From autonomous systems to finance and healthcare',
      sections: [
        {
          heading: 'What is Real-World RL?',
          text: '<strong>Real-World RL</strong> refers to deploying reinforcement learning algorithms in physical or production environments where safety, sample efficiency, and robustness are critical. Unlike simulated domains, real-world RL must handle partial observability, delayed feedback, and the cost of failed experiments.',
          list: [
            'Sim-to-real transfer bridges simulation and physical deployment',
            'Safety constraints prevent catastrophic failures during learning',
            'Sample efficiency matters because real data is expensive',
            'Non-stationarity is common as the environment evolves over time'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The sim-to-real gap is quantified by comparing policies trained in simulation versus reality. Domain randomization and domain adaptation reduce this gap.',
          example: {
            title: 'Domain Randomization',
            code: `During training, randomize:
  • Friction coefficients: μ ~ U(0.3, 1.2)
  • Mass perturbations: m' = m × N(1, 0.1)
  • Sensor noise: y = y_true + ε, ε ~ N(0, σ)
  • Lighting, textures, camera angles

Policy learned across many variants
→ Generalizes to real-world physics`,
            output: 'Randomization forces the policy to learn robust, invariant features.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Understanding the gap between simulated and real RL is essential for successful deployment.',
          table: {
            headers: ['Aspect', 'Simulated RL', 'Real-World RL'],
            rows: [
              ['Data cost', 'Cheap and infinite', 'Expensive and limited'],
              ['Safety', 'No risk', 'Failures have real consequences'],
              ['Observations', 'Perfect state access', 'Noisy, partial sensors'],
              ['Reset', 'Instant reset to any state', 'Time-consuming or impossible'],
              ['Dynamics', 'Fixed known model', 'Unknown, non-stationary'],
              ['Parallelization', 'Massive GPU clusters', 'Limited by hardware']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Deploying sim-trained policy without real-world validation (fix: use domain randomization, system identification, and staged rollouts)',
            'Mistake 2: Ignoring safety constraints during learning (fix: use constrained RL, barrier functions, or shielding)',
            'Mistake 3: Assuming stationarity (fix: implement continual learning and detect distribution shift)',
            'Mistake 4: Underestimating latency and sensor noise (fix: design observation and action pipelines with real sensor characteristics)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'RL is deployed in diverse domains beyond research benchmarks.',
          list: [
            '<strong>Autonomous Driving:</strong> Waymo uses RL for trajectory planning, lane merging, and pedestrian-aware navigation in real traffic',
            '<strong>Finance & Trading:</strong> RL agents optimize portfolio allocation, execution timing, and risk-adjusted returns under market constraints',
            '<strong>Healthcare:</strong> RL personalizes treatment plans, insulin dosing, and radiotherapy scheduling based on patient response',
            '<strong>Energy Systems:</strong> Google DeepMind reduced data center cooling costs by 40% using RL-based control of HVAC and server load',
            '<strong>Manufacturing:</strong> RL optimizes robotic assembly lines, predictive maintenance schedules, and supply chain logistics'
          ]
        }
      ]
    },
    'rl-robotics': {
      title: 'Reinforcement Learning in Robotics',
      subtitle: 'Teaching machines to move, grasp, and interact',
      sections: [
        {
          heading: 'Why RL for Robotics?',
          text: 'Robotics presents unique challenges: <strong>continuous state and action spaces</strong>, <strong>high-dimensional sensory input</strong>, and <strong>long-horizon tasks</strong>. Classical control theory requires accurate models, which are hard to obtain for complex robots. RL enables robots to learn skills directly from experience, adapting to unmodeled dynamics.',
          list: [
            'Continuous control: joint torques, velocities, end-effector poses',
            'Dexterous manipulation: in-hand object reorientation, tool use',
            'Locomotion: bipedal walking, quadruped gaits, climbing',
            'Multi-robot coordination: swarms, collaborative assembly'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Policy gradient methods are the dominant approach for continuous robotic control.',
          example: {
            title: 'PPO for Continuous Control',
            code: `Objective (PPO-Clip):
  L(θ) = E[min(rₜ(θ)Âₜ, clip(rₜ(θ), 1-ε, 1+ε)Âₜ)]

Where:
  rₜ(θ) = πθ(aₜ|sₜ) / πθ_old(aₜ|sₜ)
  Âₜ = advantage estimate (GAE)
  ε = 0.2 (typical)

Action space:
  a ~ N(μθ(s), σθ(s))
  → continuous joint torque commands`,
            output: 'PPO provides stable, sample-efficient learning for robot motor control.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'RL robotics spans a spectrum from simulation to real hardware.',
          table: {
            headers: ['Method', 'Where Learning Happens', 'Data Source', 'Pros & Cons'],
            rows: [
              ['Sim-to-Real', 'Simulation only', 'Synthetic physics', 'Scalable but has reality gap'],
              ['Real-World RL', 'Physical robot', 'Actual sensor data', 'Authentic but slow and risky'],
              ['Sim-to-Real + Adapt', 'Both stages', 'Sim + fine-tune real', 'Balances speed and accuracy'],
              ['Imitation + RL', 'Real, guided', 'Human demonstrations', 'Warm start reduces exploration'],
              ['Offline RL', 'Real, from logs', 'Existing datasets', 'No online risk but distribution shift']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training entirely in simulation without randomization (fix: apply domain randomization and system identification)',
            'Mistake 2: Using discrete action spaces for joint control (fix: use continuous policy gradients like PPO or SAC)',
            'Mistake 3: Ignoring torque/velocity limits during training (fix: incorporate actuator constraints into the action space or reward)',
            'Mistake 4: Sparse rewards in long-horizon tasks (fix: use reward shaping, hindsight experience replay, or curriculum learning)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'RL-powered robots are transitioning from labs to warehouses, homes, and hospitals.',
          list: [
            '<strong>Boston Dynamics Spot:</strong> Quadruped locomotion trained with RL to walk on uneven terrain, recover from falls, and navigate autonomously',
            '<strong>Google Robot RT-2:</strong> Vision-language-action models combine perception and RL for general-purpose manipulation in unstructured environments',
            '<strong>Dexterous Hand Control:</strong> OpenAI Dactyl learned to solve a Rubik\'s cube in-hand using RL with vision-based state estimation',
            '<strong>Robotic Surgery:</strong> RL optimizes suturing trajectories and force control in minimally invasive procedures',
            '<strong>Warehouse Automation:</strong> RL controls mobile robots for pick-and-place, path planning, and dynamic collision avoidance'
          ]
        }
      ]
    },
    'rl-games': {
      title: 'Reinforcement Learning in Games',
      subtitle: 'From board games to open-world environments',
      sections: [
        {
          heading: 'Games as RL Testbeds',
          text: 'Games provide <strong>clear objectives</strong>, <strong>measurable rewards</strong>, and <strong>scalable difficulty</strong>, making them ideal environments for RL research. Success in games often translates to advances in planning, search, and generalization.',
          list: [
            'Perfect information games: chess, Go, Shogi — full state observable',
            'Imperfect information games: poker, StarCraft — hidden information, bluffing',
            'Real-time strategy: multi-agent, resource management, tactical planning',
            'Open-world games: Minecraft, NetHack — exploration, crafting, survival'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'AlphaZero combines neural networks with Monte Carlo Tree Search (MCTS) for superhuman game play.',
          example: {
            title: 'AlphaZero MCTS',
            code: `At each node s:
  1. Selection: a* = argmaxₐ[Q(s,a) + U(s,a)]
     U(s,a) = c_puct × π(a|s) × √N(s) / (1 + N(s,a))

  2. Expansion: Evaluate leaf with (p, v) = fθ(s)

  3. Backup: Update Q and N up the tree
     Q(s,a) = Σ W(s,a) / N(s,a)

  4. Play: Choose action by visit count
     a ~ π where πₐ ∝ N(s,a)^{1/τ}`,
            output: 'MCTS balances exploration (U term) with exploitation (Q term).',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Games vary in complexity and information structure, requiring different RL approaches.',
          table: {
            headers: ['Game Type', 'Information', 'Key Challenge', 'RL Approach'],
            rows: [
              ['Board (Chess, Go)', 'Perfect', 'Huge branching factor', 'MCTS + deep value/policy nets'],
              ['Atari', 'Pixel input', 'Credit assignment over time', 'DQN with experience replay'],
              ['Real-time (StarCraft)', 'Imperfect, multi-agent', 'Macro strategy + micro control', 'Hierarchical RL, population play'],
              ['Card (Poker)', 'Hidden info', 'Bluffing, game theory', 'Counterfactual regret minimization'],
              ['Open-world (Minecraft)', 'Sparse rewards', 'Exploration and long-term planning', 'Intrinsic motivation, LLM-guided RL']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Equating game success with general intelligence (fix: test transfer to varied environments and real-world tasks)',
            'Mistake 2: Overfitting to specific game mechanics (fix: train on game variants and use domain randomization)',
            'Mistake 3: Ignoring sample efficiency in favor of final performance (fix: measure wall-clock time and sample complexity)',
            'Mistake 4: Single-agent focus in multi-agent games (fix: use population-based training and opponent modeling)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Game-playing RL has produced breakthroughs that generalize beyond entertainment.',
          list: [
            '<strong>AlphaGo / AlphaZero:</strong> Mastered Go, Chess, and Shogi from self-play. The MCTS + neural network architecture is now used in protein folding (AlphaFold) and material design',
            '<strong>OpenAI Five:</strong> Defeated professional Dota 2 teams. The system used a large-scale distributed PPO variant with careful reward shaping',
            '<strong>MuZero:</strong> Plays Atari, Go, chess, and Shogi without knowing the rules. Learns a world model entirely from experience, enabling planning in unknown environments',
            '<strong>Diplomacy:</strong> Meta\'s Cicero used RL + language models to negotiate and compete in the game of Diplomacy, blending strategic reasoning with natural language',
            '<strong>Game Testing:</strong> RL agents automate bug detection, level difficulty balancing, and adversarial playtesting in commercial game development'
          ]
        }
      ]
    },
    'rl-recommenders': {
      title: 'RL in Recommendation Systems',
      subtitle: 'Optimizing long-term user engagement beyond immediate clicks',
      sections: [
        {
          heading: 'Why RL for Recommendations?',
          text: 'Traditional recommender systems optimize <strong>immediate reward</strong> (clicks, ratings) using supervised learning. RL optimizes <strong>long-term user engagement</strong> by modeling the sequential nature of user interactions. A recommendation changes the user\'s state, which affects future preferences.',
          list: [
            'Sequential decision making: each recommendation affects the next user state',
            'Delayed rewards: engagement builds over a session or lifetime',
            'Exploration-exploitation: recommend new items vs known favorites',
            'Dynamic environment: user preferences drift over time'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The recommendation problem is formalized as a Markov Decision Process with user state.',
          example: {
            title: 'RL Formulation for Recommendations',
            code: `MDP for Recommendations:
  State sₜ: User profile + recent interactions
  Action aₜ: Recommend item i from catalog
  Reward rₜ:
    +1 if click
    +5 if purchase/watch complete
    -1 if dismiss / bounce
  Transition: sₜ₊₁ = f(sₜ, aₜ, user response)

Objective: maximize cumulative reward
  J = E[Σ γᵗ rₜ]

Contextual Bandit (simplified):
  γ = 0 → optimize only immediate reward`,
            output: 'Long-term optimization requires full RL, not just bandits.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different approaches trade off between simplicity and long-term optimization.',
          table: {
            headers: ['Approach', 'Optimizes', 'Method', 'Limitation'],
            rows: [
              ['Matrix Factorization', 'Rating prediction', 'SVD, ALS', 'No sequence modeling'],
              ['Collaborative Filtering', 'Item similarity', 'KNN, item-item', 'Cold start problem'],
              ['Contextual Bandit', 'Immediate reward', 'LinUCB, Thompson Sampling', 'Ignores future impact'],
              ['RL (Value-based)', 'Long-term return', 'DQN, Dueling DQN', 'Stability challenges'],
              ['RL (Policy-based)', 'Policy gradient', 'REINFORCE, PPO', 'High variance'],
              ['Offline RL', 'From logged data', 'CQL, BCQ', 'Distribution shift risk']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating recommendations as independent predictions (fix: model sequential interaction with RL or RNN-based state tracking)',
            'Mistake 2: Optimizing only for clicks (fix: include dwell time, diversity, and downstream conversions in the reward)',
            'Mistake 3: Ignoring exploration in production (fix: use epsilon-greedy, Upper Confidence Bound, or Thompson Sampling)',
            'Mistake 4: Deploying online RL without safe exploration (fix: use off-policy evaluation, counterfactual estimation, and staged A/B tests)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Major platforms use RL to personalize content and maximize user satisfaction.',
          list: [
            '<strong>YouTube Recommendations:</strong> Uses RL to optimize watch time, session length, and diversity. The system balances immediate clicks with long-term subscriber retention',
            '<strong>TikTok For You Page:</strong> An RL-like algorithm rapidly adapts to user feedback (swipes, replays, shares) within a single session, optimizing for engagement velocity',
            '<strong>Spotify Discover Weekly:</strong> Combines collaborative filtering with contextual bandits to balance familiar artists with novel discoveries',
            '<strong>Amazon Product Recommendations:</strong> Uses hierarchical RL to recommend complementary products across categories, optimizing for basket value and repeat purchases',
            '<strong>News Feeds (Twitter/X, LinkedIn):</strong> RL models user state transitions to balance fresh content, social signals, and topical diversity in the feed'
          ]
        }
      ]
    }
  }
};
