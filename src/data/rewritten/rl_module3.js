export const rlModule3Structure = {
  module3: {
    title: 'Module 3: Model-Free Learning',
    topics: [
      { id: 'mc-prediction', title: 'Monte Carlo Prediction' },
      { id: 'mc-control', title: 'Monte Carlo Control' },
      { id: 'off-policy-mc', title: 'Off-Policy Monte Carlo' },
      { id: 'td-prediction', title: 'TD Prediction' },
      { id: 'sarsa', title: 'SARSA' },
      { id: 'q-learning', title: 'Q-Learning' },
      { id: 'expected-sarsa', title: 'Expected SARSA' },
      { id: 'double-learning', title: 'Double Learning' },
    ]
  }
};

export const rlModule3Content = {
  module3: {
    'mc-prediction': {
      title: 'Monte Carlo Prediction',
      subtitle: 'Learning value functions from complete episodes',
      sections: [
        {
          heading: 'What is Monte Carlo Prediction?',
          text: '<strong>Monte Carlo (MC) Prediction</strong> is a model-free method for estimating the value function of a policy by averaging the returns observed after visiting each state. Unlike dynamic programming, MC does not require knowledge of the environment dynamics — it learns purely from experience by sampling complete episodes and using the actual returns as targets.',
          list: [
            'Learns from complete episodes (must terminate)',
            'No model of the environment required — purely sample-based',
            'Uses actual observed returns rather than bootstrapped estimates',
            'Averages returns to converge to the true value function'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'MC updates the value of a state using the average of all returns observed after first visits to that state.',
          example: {
            title: 'Example: First-Visit MC Prediction',
            code: `Initialize:
  V(s) = 0, Returns(s) = empty list for all s

For each episode:
  Generate episode following policy π
  For each state s in episode (first visit only):
    G = return from first visit to s until end
    Append G to Returns(s)
    V(s) = average(Returns(s))

Episode example (γ = 1):
  S0 → A → R=0 → S1 → A → R=0 → S2 → A → R=1 → END

  Returns:
    G(S0) = 0 + 0 + 1 = 1
    G(S1) = 0 + 1 = 1
    G(S2) = 1

  After 10 episodes with G(S0) ∈ {1, 0, 1, 1, 0, 1, 1, 1, 0, 1}:
    V(S0) = 7/10 = 0.7`,
            output: 'V(s) converges to vπ(s) as the number of visits → ∞.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'MC prediction differs fundamentally from dynamic programming and temporal-difference methods.',
          table: {
            headers: ['Aspect', 'Dynamic Programming', 'Monte Carlo', 'Temporal Difference'],
            rows: [
              ['Model needed', 'Yes — requires P(s′,r|s,a)', 'No — learns from samples', 'No — learns from samples'],
              ['Updates', 'Bellman expectation backup', 'Averaging actual returns', 'Bootstrapped one-step lookahead'],
              ['Episodes', 'Not required (sweeps all states)', 'Requires complete episodes', 'Single step sufficient'],
              ['Bias', 'None (exact with true model)', 'Unbiased', 'Biased (bootstrapping)'],
              ['Variance', 'None', 'High (depends on episode length)', 'Low'],
              ['Convergence', 'Guaranteed with exact model', 'Guaranteed with infinite visits', 'Guaranteed under standard conditions']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying MC to non-episodic tasks (fix: MC requires episodes to terminate; use TD for continuing tasks)',
            'Mistake 2: Using every-visit instead of first-visit without understanding the difference (fix: every-visit MC is also valid but has different convergence properties; first-visit is simpler to analyze)',
            'Mistake 3: Averaging returns without discounting (fix: always apply γᵗ when computing returns for discounted problems)',
            'Mistake 4: Expecting fast convergence with few episodes (fix: MC has high variance; hundreds or thousands of episodes are typically needed for reliable estimates)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'MC prediction is useful when episodes are short and a model is unavailable.',
          list: [
            '<strong>Board Game Evaluation:</strong> Estimate position values by playing out complete games (Go, Chess) and averaging outcomes',
            '<strong>Robot Navigation:</strong> Learn state values from full trajectories in maze-like environments without explicit transition models',
            '<strong>Marketing Campaigns:</strong> Evaluate customer states by running complete campaign episodes and measuring final conversion returns',
            '<strong>Medical Treatment Policies:</strong> Estimate value of treatment protocols from complete patient episode histories when disease progression is uncertain'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MC prediction estimates V(s) by averaging actual returns from sampled episodes',
            'First-visit MC averages returns after the first visit to each state per episode',
            'MC is model-free — requires no knowledge of transition probabilities',
            'MC requires episodic tasks; episodes must terminate',
            'Unbiased but high variance due to dependence on long episode trajectories',
            'Converges to the true value function as visits → infinity'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why does Monte Carlo prediction require complete episodes?
Ans: Because it uses the actual return G from a state until termination as its update target, which is only known when the episode ends.`,
            `Q2: What is the difference between first-visit and every-visit MC?
Ans: First-visit averages returns after the first occurrence of a state in an episode; every-visit averages returns after every occurrence.`,
            `Q3: Why does MC have higher variance than temporal-difference methods?
Ans: MC targets are sums of many random rewards over an entire episode, whereas TD targets use only one reward plus a bootstrapped estimate, reducing variance.`
          ]
        }
      ]
    },
    'mc-control': {
      title: 'Monte Carlo Control',
      subtitle: 'Policy improvement through experience',
      sections: [
        {
          heading: 'What is Monte Carlo Control?',
          text: '<strong>Monte Carlo Control</strong> combines MC prediction with policy improvement to find an optimal policy. It alternates between evaluating the current policy (prediction) and making it greedy with respect to the current action-value estimates (improvement). Exploring Starts or ε-greedy exploration ensures all actions are tried.',
          list: [
            'Generalized Policy Iteration using MC for the evaluation step',
            'Learns Q(s,a) — action-value function — not just V(s)',
            'Exploring Starts (ES) or ε-greedy ensures sufficient exploration',
            'Converges to optimal policy under the assumption of infinite exploration'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'MC Control with Exploring Starts alternates between evaluating Q and improving the policy greedily.',
          example: {
            title: 'Example: MC Control with Exploring Starts',
            code: `Initialize:
  Q(s,a) = 0, Returns(s,a) = [] for all s,a
  π(s) = random action

For each episode:
  s0, a0 = random state-action pair (Exploring Start)
  Generate episode from (s0,a0) following π
  For each (s,a) in episode (first visit):
    G = return from first visit onward
    Append G to Returns(s,a)
    Q(s,a) = average(Returns(s,a))
  For each s in episode:
    π(s) = argmax_a Q(s,a)

After 1000 episodes:
  Q converges → π becomes optimal`,
            output: 'Greedy policy with exploring starts converges to π*.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'MC Control differs from MC Prediction in goal and mechanism.',
          table: {
            headers: ['Aspect', 'MC Prediction', 'MC Control (ES)', 'MC Control (ε-greedy)'],
            rows: [
              ['Goal', 'Evaluate a fixed policy', 'Find optimal policy', 'Find optimal policy'],
              ['What is learned', 'V(s)', 'Q(s,a)', 'Q(s,a)'],
              ['Exploration', 'Follows fixed policy', 'Exploring starts', 'ε-greedy behavior'],
              ['Policy update', 'None', 'Greedy after each episode', 'ε-greedy after each episode'],
              ['Guarantee', 'Converges to vπ', 'Converges to π* (with ES)', 'Converges to near-optimal'],
              ['Practicality', 'Good for evaluation', 'Impractical (needs ES)', 'Practical and widely used']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to use Q(s,a) instead of V(s) (fix: policy improvement needs action values to choose among actions; V(s) alone is insufficient)',
            'Mistake 2: Making the policy fully greedy too early (fix: use ε-greedy with ε decaying over time to maintain exploration while approaching optimality)',
            'Mistake 3: Assuming Exploring Starts is practical (fix: ES requires starting in random states; ε-greedy is preferred for real systems where initial states are constrained)',
            'Mistake 4: Updating the policy before Q has stabilized (fix: allow multiple episodes of evaluation between policy improvements for more stable learning)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'MC Control is effective for episodic decision problems.',
          list: [
            '<strong>Game Playing:</strong> Learn optimal strategies in card games and board games by self-play with MC updates after each complete game',
            '<strong>Inventory Management:</strong> Optimize reorder policies by evaluating complete quarterly or seasonal cycles as episodes',
            '<strong>Financial Trading:</strong> Optimize trading strategies by treating each trading day or month as an episode and updating Q-values from realized P&L',
            '<strong>Dynamic Pricing:</strong> Learn optimal pricing policies from complete sales episodes (e.g., flight seat sales from booking open to close)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MC Control uses Generalized Policy Iteration with MC for evaluation',
            'It learns Q(s,a), not V(s), because actions must be compared for improvement',
            'Exploring Starts guarantees exploration but is often impractical',
            'ε-greedy MC Control is the practical alternative for real-world systems',
            'Converges to optimal or near-optimal policy with sufficient experience'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why does MC Control learn Q(s,a) rather than V(s)?
Ans: To improve the policy, the agent must compare actions at each state. V(s) does not tell us which action is best; Q(s,a) does.`,
            `Q2: What is the practical limitation of Exploring Starts?
Ans: In real systems, the agent cannot usually start from arbitrary random states; initial states are determined by the environment or task constraints.`,
            `Q3: How does ε-greedy MC Control ensure convergence to a near-optimal policy?
Ans: It maintains continuous exploration (with probability ε) while greedily exploiting the best-known actions, ensuring all state-action pairs are visited infinitely often.`
          ]
        }
      ]
    },
    'off-policy-mc': {
      title: 'Off-Policy Monte Carlo',
      subtitle: 'Learning about one policy while following another',
      sections: [
        {
          heading: 'What is Off-Policy Monte Carlo?',
          text: '<strong>Off-Policy Monte Carlo</strong> learns the value of a target policy π while following a different behavior policy b. This is essential when π is deterministic (e.g., greedy) but exploration is needed. Importance sampling adjusts the returns to account for the difference between the policies.',
          list: [
            'Target policy π: the policy being evaluated or optimized',
            'Behavior policy b: the policy generating experience (must explore)',
            'Importance sampling ratios correct for the policy mismatch',
            'Enables learning from observation, demonstration, or exploratory behavior'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The importance sampling ratio weights returns by the relative probability of actions under π versus b.',
          example: {
            title: 'Example: Ordinary Importance Sampling',
            code: `Target policy π: greedy (π(s) = argmax Q(s,a))
Behavior policy b: ε-greedy (explores)

Importance sampling ratio:
  ρ = Π_{k=t}^{T-1} [π(Ak|Sk) / b(Ak|Sk)]

For first-visit to (s,a):
  If π and b agree on all actions:
    ρ = 1
  If b explores actions π would not take:
    ρ can become very large

Ordinary IS:
  V(s) = Σ (ρ × G) / Σ ρ

Weighted IS:
  V(s) = Σ (ρ × G) / Σ ρ  (same ρ in numerator and denominator)
  → biased but lower variance`,
            output: 'Off-policy learning enables evaluation of any target policy from any exploring behavior.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Ordinary and weighted importance sampling trade bias against variance.',
          table: {
            headers: ['Aspect', 'Ordinary IS', 'Weighted IS', 'On-Policy MC'],
            rows: [
              ['Formula', 'Σ(ρG)/N', 'Σ(ρG)/Σρ', 'Simple average of G'],
              ['Bias', 'Unbiased', 'Biased (small)', 'Unbiased'],
              ['Variance', 'Potentially infinite', 'Bounded (preferred)', 'Moderate'],
              ['Zero weights', 'Ignored in count N', 'Ignored entirely', 'Not applicable'],
              ['Use case', 'Theoretical analysis', 'Practical off-policy learning', 'When π = b'],
              ['Convergence', 'Slower (high variance)', 'Faster (lower variance)', 'Standard']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a behavior policy that never takes actions the target policy would take (fix: b must have nonzero probability wherever π has nonzero probability — coverage assumption)',
            'Mistake 2: Ignoring the variance explosion in ordinary IS (fix: prefer weighted importance sampling for practical implementations)',
            'Mistake 3: Computing ρ over the entire episode instead of from the first visit onward (fix: the product should only include timesteps from the visit being updated)',
            'Mistake 4: Applying off-policy MC to continuing tasks (fix: off-policy MC still requires episodes; use off-policy TD for non-episodic settings)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Off-policy methods unlock learning from diverse data sources.',
          list: [
            '<strong>Learning from Demonstrations:</strong> Evaluate and improve upon expert policies while an exploratory agent collects new data',
            '<strong>A/B Testing:</strong> Evaluate a new policy π using data collected under an old policy b without deploying π directly',
            '<strong>Safe Exploration:</strong> Learn about aggressive strategies (π) while maintaining safe exploratory behavior (b)',
            '<strong>Recommender Systems:</strong> Evaluate new recommendation policies using logs from the currently deployed system'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Off-policy MC learns about target policy π from behavior policy b',
            'Importance sampling corrects for differences between π and b',
            'Ordinary IS is unbiased but can have extreme variance',
            'Weighted IS has slightly more bias but much lower variance — preferred in practice',
            'The coverage assumption requires b to explore everywhere π might go',
            'Off-policy learning is foundational for modern deep RL methods like Q-learning'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why is importance sampling necessary in off-policy Monte Carlo?
Ans: Because the returns were generated by behavior policy b, not target policy π. Importance sampling reweights the returns to make them representative of π.`,
            `Q2: What is the coverage assumption in off-policy learning?
Ans: The behavior policy b must have nonzero probability of taking any action that the target policy π might take, otherwise some experiences would have zero weight and be unusable.`,
            `Q3: Why is weighted importance sampling preferred over ordinary importance sampling in practice?
Ans: Weighted IS has bounded variance because the maximum weight on any return is 1, whereas ordinary IS can produce arbitrarily large weights when b takes unlikely actions.`
          ]
        }
      ]
    },
    'td-prediction': {
      title: 'TD Prediction',
      subtitle: 'Bootstrapped value estimation from single steps',
      sections: [
        {
          heading: 'What is TD Prediction?',
          text: '<strong>Temporal-Difference (TD) Prediction</strong> learns value functions by bootstrapping — updating estimates based on other learned estimates. TD(0), the simplest form, updates V(s) after every step using the observed reward and the estimated value of the next state. Unlike MC, TD learns online without waiting for episodes to end.',
          list: [
            'Updates after every step — fully online learning',
            'Bootstraps: uses current V(s′) estimate as part of the target',
            'No need for complete episodes (works in continuing tasks)',
            'Combines the sampling of MC with the bootstrapping of DP'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'TD(0) updates V(s) using the TD error — the difference between the estimated return and the current estimate.',
          example: {
            title: 'Example: TD(0) Update Step',
            code: `TD(0) Update Rule:
  V(St) ← V(St) + α × [Rt+1 + γV(St+1) - V(St)]

TD Error:
  δ = Rt+1 + γV(St+1) - V(St)

Example:
  V(S) = 5.0, α = 0.1, γ = 1.0
  Action: move right
  Reward: R = 0
  Next state: S′ with V(S′) = 8.0

  Target = R + γV(S′) = 0 + 8.0 = 8.0
  δ = 8.0 - 5.0 = 3.0
  V(S) = 5.0 + 0.1 × 3.0 = 5.3`,
            output: 'TD learns immediately after each step, making it suitable for continuous environments.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'TD(0), Monte Carlo, and Dynamic Programming differ in how they compute targets.',
          table: {
            headers: ['Aspect', 'Dynamic Programming', 'Monte Carlo', 'TD(0)'],
            rows: [
              ['Target', 'Expected Bellman backup', 'Actual return G', 'Bootstrapped return R + γV(s′)'],
              ['Model', 'Required', 'Not required', 'Not required'],
              ['Episodic', 'No', 'Yes (must terminate)', 'No'],
              ['Online', 'N/A (model-based)', 'No (wait for end)', 'Yes (every step)'],
              ['Bias', 'None', 'None', 'Biased (bootstrapping)'],
              ['Variance', 'None', 'High', 'Low'],
              ['Markov', 'Required', 'Not required', 'Required for full accuracy']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Setting α too high, causing instability (fix: use α between 0.01 and 0.5; decay α over time for convergence guarantees)',
            'Mistake 2: Ignoring that TD is biased (fix: acknowledge that early TD estimates are biased but converge; use TD(λ) or MC for unbiased alternatives)',
            'Mistake 3: Applying TD in non-Markov environments without adjustment (fix: TD assumes the Markov property; for non-Markov settings, use eligibility traces or longer n-step returns)',
            'Mistake 4: Initializing V(s) to zero and wondering why learning is slow (fix: optimistic initialization encourages exploration by making unexplored states appear valuable)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'TD prediction excels in continuous, real-time decision systems.',
          list: [
            '<strong>Real-Time Bidding:</strong> Update ad value estimates after each auction outcome without waiting for campaign end',
            '<strong>Network Routing:</strong> Learn packet delay values at each router hop from immediate feedback plus estimated remaining delay',
            '<strong>Robotics:</strong> Update state values continuously as a robot navigates, without requiring episode termination',
            '<strong>Energy Management:</strong> Learn the value of current battery states from immediate power consumption plus estimated future value'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'TD(0) updates V(s) using R + γV(s′) as a bootstrapped target',
            'The TD error δ = R + γV(s′) - V(s) drives all TD learning',
            'TD is online — learns after every step without waiting for episode end',
            'TD is model-free like MC, but bootstraps like DP',
            'TD has lower variance than MC but is biased due to bootstrapping',
            'Requires the Markov property for full theoretical guarantees'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: What is bootstrapping in TD learning?
Ans: Bootstrapping means using an existing estimate (V(s′)) as part of the update target, rather than waiting for the true final return.`,
            `Q2: Why can TD learn in continuing (non-episodic) tasks while MC cannot?
Ans: TD updates after a single step using R + γV(s′), which is always available. MC requires the final return G, which only exists when an episode terminates.`,
            `Q3: What is the main trade-off between TD and MC?
Ans: TD has lower variance (uses one-step targets) but is biased (bootstraps from estimates). MC is unbiased but has higher variance (depends on long episode trajectories).`
          ]
        }
      ]
    },
    sarsa: {
      title: 'SARSA',
      subtitle: 'On-policy TD control for action-value learning',
      sections: [
        {
          heading: 'What is SARSA?',
          text: '<strong>SARSA</strong> (State-Action-Reward-State-Action) is an on-policy TD control algorithm. It updates Q(s,a) using the next action actually taken by the current policy — making it conservative and safe. SARSA learns the value of the policy it is following, including exploration.',
          list: [
            'On-policy: learns Q for the policy being followed',
            'Uses the actual next action A′, not the maximum Q',
            'Safe: accounts for exploration in its value estimates',
            'Converges to the optimal policy under standard conditions with ε-greedy exploration'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SARSA updates Q(S,A) using the five elements that give it its name: S, A, R, S′, A′.',
          example: {
            title: 'Example: SARSA Update in GridWorld',
            code: `SARSA Update:
  Q(S,A) ← Q(S,A) + α × [R + γQ(S′,A′) - Q(S,A)]

Example (Windy GridWorld):
  S = (3,2), A = "right"
  R = -1 (step penalty)
  S′ = (3,3)
  A′ = "up" (selected by ε-greedy policy)

  Q(S,A) = 2.0, Q(S′,A′) = 3.5
  α = 0.5, γ = 0.9

  Target = -1 + 0.9 × 3.5 = -1 + 3.15 = 2.15
  δ = 2.15 - 2.0 = 0.15
  Q(S,A) = 2.0 + 0.5 × 0.15 = 2.075`,
            output: 'SARSA learns the value of the ε-greedy policy, including exploration moves.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'SARSA and Q-Learning differ in a critical way that affects behavior.',
          table: {
            headers: ['Aspect', 'SARSA (On-Policy)', 'Q-Learning (Off-Policy)'],
            rows: [
              ['Next action', 'Actual A′ from current policy', 'Max over all actions'],
              ['What it learns', 'Value of policy being followed', 'Value of optimal policy'],
              ['Behavior', 'Conservative — avoids risky paths', 'Aggressive — takes optimal paths'],
              ['Risk during learning', 'Lower (accounts for exploration)', 'Higher (ignores exploration moves)'],
              ['Use case', 'Safety-critical systems', 'Maximum performance systems'],
              ['Classic example', 'Windy GridWorld (safe path)', 'Cliff Walking (dangerous shortcut)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the maximum Q(S′,a) instead of Q(S′,A′) (fix: that would make it Q-learning; SARSA requires the actual next action from the current policy)',
            'Mistake 2: Making the policy greedy during learning (fix: SARSA needs ε-greedy exploration; if greedy, it becomes Q-learning in practice and loses its on-policy safety)',
            'Mistake 3: Not decaying ε over time (fix: start with ε=1.0 and decay to 0.01 to ensure sufficient early exploration while converging to a near-optimal policy)',
            'Mistake 4: Confusing SARSA with Expected SARSA (fix: SARSA uses the sampled A′; Expected SARSA uses the expectation over all actions under the policy)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SARSA is preferred when safety matters more than pure optimality.',
          list: [
            '<strong>Autonomous Vehicles:</strong> Learn driving policies that account for the uncertainty of other drivers, avoiding risky maneuvers even if they appear optimal',
            '<strong>Medical Treatment:</strong> Conservative treatment policies that account for exploration/experimental therapies, prioritizing patient safety',
            '<strong>Industrial Control:</strong> Robot arm policies that avoid dangerous configurations by accounting for the exploration noise in the learning process',
            '<strong>Financial Risk Management:</strong> Trading strategies that account for execution uncertainty and slippage, favoring safer, more reliable actions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SARSA is on-policy TD control — learns the value of the policy being followed',
            'Updates use the actual next action A′, not the maximum Q',
            'SARSA = S, A, R, S′, A′ — the five components of the update',
            'Conservative: learns values that account for exploration',
            'Converges to the optimal policy with GLIE (Greedy in the Limit with Infinite Exploration)',
            'Preferred over Q-learning when safety and conservative behavior matter'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why is SARSA called "on-policy"?
Ans: Because it learns the value of the policy it is currently following, using the actual actions selected by that policy (including exploration).`,
            `Q2: In the Cliff Walking example, why does SARSA learn a safer path than Q-learning?
Ans: SARSA accounts for ε-greedy exploration in its value estimates, so the risk of accidentally falling off the cliff is factored into the learned Q-values.`,
            `Q3: What happens if you set ε=0 (pure greedy) in SARSA?
Ans: SARSA becomes equivalent to Q-learning in behavior, but it still uses the actual next action in the update. With ε=0 and no exploration, it may get stuck in local optima and fail to discover better policies.`
          ]
        }
      ]
    },
    'q-learning': {
      title: 'Q-Learning',
      subtitle: 'Off-policy TD control for optimal action values',
      sections: [
        {
          heading: 'What is Q-Learning?',
          text: '<strong>Q-Learning</strong> is a foundational off-policy TD control algorithm that learns the optimal action-value function Q* directly, regardless of the policy being followed. It updates Q(S,A) using the maximum Q-value over next-state actions, making it independent of the exploration strategy.',
          list: [
            'Off-policy: learns Q* independent of the behavior policy',
            'Uses max Q(S′,a) — assumes optimal future behavior',
            'Watkins (1989): one of the most important RL algorithms',
            'Converges to Q* with probability 1 under standard conditions'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Q-Learning updates Q(S,A) toward the maximum possible future value, learning optimality directly.',
          example: {
            title: 'Example: Q-Learning Update in Cliff Walking',
            code: `Q-Learning Update:
  Q(S,A) ← Q(S,A) + α × [R + γ max_a Q(S′,a) - Q(S,A)]

Example (Cliff Walking):
  S = start, A = "right"
  R = -1, S′ = next_state
  Q(S′,up) = 3, Q(S′,right) = 5, Q(S′,down) = 1

  max Q(S′) = 5
  Q(S,A) = Q(S,A) + 0.5 × [-1 + 0.9×5 - Q(S,A)]
         = Q(S,A) + 0.5 × [3.5 - Q(S,A)]

Key insight:
  The update uses max over actions,
  not the actual action taken!
  → Learns optimal policy directly.`,
            output: 'Q-learning learns the optimal policy even while exploring randomly.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Q-Learning and SARSA differ in what they learn and how they behave.',
          table: {
            headers: ['Aspect', 'Q-Learning', 'SARSA', 'MC Control'],
            rows: [
              ['Policy type', 'Off-policy', 'On-policy', 'On-policy'],
              ['Update target', 'R + γ max Q(S′,a)', 'R + γ Q(S′,A′)', 'G (full return)'],
              ['What it learns', 'Optimal policy Q*', 'Current policy Qπ', 'Current policy Qπ'],
              ['Behavior during learning', 'Risky (ignores exploration)', 'Conservative (accounts for exploration)', 'Varies'],
              ['Updates', 'Every step', 'Every step', 'End of episode'],
              ['Convergence', 'Guaranteed to Q*', 'Guaranteed to Qπ', 'Guaranteed to Qπ']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking Q-Learning is always better than SARSA (fix: Q-Learning learns optimal values but behaves riskily during training; SARSA is safer for real-world deployment)',
            'Mistake 2: Using pure greedy exploration (fix: Q-Learning needs exploration to discover the optimal policy; use ε-greedy or Boltzmann exploration)',
            'Mistake 3: Forgetting that Q-Learning overestimates Q-values (fix: use Double Q-Learning to reduce maximization bias)',
            'Mistake 4: Not updating Q for the current (S,A) after each step (fix: Q-Learning is an online algorithm; delaying updates reduces sample efficiency)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Q-Learning powers many discrete-action control systems.',
          list: [
            '<strong>Game AI:</strong> Deep Q-Network (DQN) mastered Atari games by combining Q-learning with deep neural networks for visual state spaces',
            '<strong>Network Traffic Routing:</strong> Q-Learning optimizes packet routing decisions in dynamic network topologies',
            '<strong>Inventory Control:</strong> Discrete reorder decisions in supply chains where the optimal policy is independent of current exploration',
            '<strong>Dialogue Systems:</strong> Learn optimal response selection policies from user feedback, regardless of the exploration strategy during training'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Q-Learning is off-policy TD control that learns Q* directly',
            'It uses max Q(S′,a) — the optimal next action — in its update',
            'It converges to the optimal policy even with random exploration',
            'Watkins (1989) proved convergence under standard conditions',
            'Q-Learning is the foundation of Deep Q-Networks (DQN)',
            'Suffers from maximization bias — mitigated by Double Q-Learning'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: What makes Q-Learning "off-policy"?
Ans: It learns the optimal action-value function Q* using updates that assume optimal future behavior (max Q), regardless of the actual exploration policy being followed.`,
            `Q2: Why does Q-Learning tend to take riskier paths during learning than SARSA?
Ans: Q-Learning ignores the exploration in its target (it uses max), so it does not account for the risk of accidentally taking bad actions due to ε-greedy exploration.`,
            `Q3: Can Q-Learning converge if the behavior policy is completely random?
Ans: Yes, as long as all state-action pairs are visited infinitely often (exploration guarantee), Q-Learning will converge to Q* regardless of the behavior policy.`
          ]
        }
      ]
    },
    'expected-sarsa': {
      title: 'Expected SARSA',
      subtitle: 'Reducing variance with expected next values',
      sections: [
        {
          heading: 'What is Expected SARSA?',
          text: '<strong>Expected SARSA</strong> is a TD control algorithm that uses the expected value of the next state under the current policy, rather than the sampled next action. This reduces variance compared to SARSA while maintaining similar computational cost. It can be viewed as a generalization that interpolates between SARSA and Q-Learning.',
          list: [
            'Uses expectation over actions: E[ Q(S′,A′) | S′ ] instead of sampled Q(S′,A′)',
            'Lower variance than SARSA because it does not sample the next action',
            'Same computational complexity as SARSA (just one extra expectation)',
            'Can be on-policy or off-policy depending on how the expectation is computed'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Expected SARSA replaces the sampled next action with the policy-weighted expectation over all actions.',
          example: {
            title: 'Example: Expected SARSA Update',
            code: `Expected SARSA Update:
  Q(S,A) ← Q(S,A) + α × [R + γ Σ π(a|S′)Q(S′,a) - Q(S,A)]

For ε-greedy policy at S′:
  π(a|S′) = 1-ε+ε/|A| for greedy action
  π(a|S′) = ε/|A| for all other actions

  Σ π(a|S′)Q(S′,a) =
    (1-ε+ε/|A|) × max Q(S′,a) +
    Σ_{other a} (ε/|A|) × Q(S′,a)

Example:
  ε = 0.1, |A| = 4
  Q(S′) = [3, 5, 1, 2] (max = 5 at a=2)

  Expectation:
    = 0.925 × 5 + 0.025 × (3 + 1 + 2)
    = 4.625 + 0.15
    = 4.775`,
            output: 'Expected SARSA reduces variance by using the mean instead of a sample.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Expected SARSA bridges SARSA and Q-Learning depending on the policy.',
          table: {
            headers: ['Aspect', 'SARSA', 'Expected SARSA', 'Q-Learning'],
            rows: [
              ['Next value', 'Q(S′,A′) sample', 'E_π[Q(S′,a)]', 'max_a Q(S′,a)'],
              ['Variance', 'Higher (samples A′)', 'Lower (uses expectation)', 'Lower (deterministic max)'],
              ['On/Off-policy', 'On-policy', 'On-policy (with π) or off-policy', 'Off-policy'],
              ['With ε-greedy', 'Conservative', 'Conservative (smoother)', 'Aggressive'],
              ['Computation', 'Low', 'Moderate', 'Low'],
              ['When ε→0', 'Becomes greedy', 'Becomes Q-Learning', 'Stays Q-Learning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Computing the expectation over a changing policy incorrectly (fix: recompute π(a|S′) at each step if ε is decaying; cache only if policy is fixed)',
            'Mistake 2: Confusing Expected SARSA with Double Learning (fix: Expected SARSA reduces variance via expectation; Double Learning reduces bias via decoupled estimators)',
            'Mistake 3: Using Expected SARSA with a deterministic target policy (fix: if π is greedy, Expected SARSA becomes identical to Q-Learning — this is fine, but understand the equivalence)',
            'Mistake 4: Thinking the expectation is too expensive (fix: for small action spaces, the sum is trivial; for large spaces, sample a subset or use function approximation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Expected SARSA is useful when action spaces are small and stability matters.',
          list: [
            '<strong>Discrete Control Systems:</strong> Small action spaces (up/down/left/right) where computing expectations is cheap and stability is valued',
            '<strong>Teaching Agents:</strong> When training agents that must not jitter between actions excessively — the expectation smooths the learning signal',
            '<strong>Hyperparameter Optimization:</strong> Grid search over learning rates where expected performance under random initialization is more informative than single runs',
            '<strong>Medical Dosing:</strong> Conservative treatment adjustment where the expected effect of all possible next doses is more relevant than any single sampled choice'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Expected SARSA uses the policy-weighted expectation of next Q-values',
            'It has lower variance than SARSA because it does not sample the next action',
            'With ε-greedy, the expectation blends the greedy max with the average of all actions',
            'As ε→0, Expected SARSA converges to Q-Learning',
            'It is a natural improvement over SARSA when the action space is small',
            'The extra computation is usually negligible for discrete actions'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why does Expected SARSA have lower variance than standard SARSA?
Ans: Because it uses the expected value over the next action distribution rather than a single sampled action, eliminating the randomness of action selection from the update target.`,
            `Q2: What happens to Expected SARSA when the policy becomes greedy (ε=0)?
Ans: The expectation collapses to the maximum Q-value, making Expected SARSA equivalent to Q-Learning.`,
            `Q3: When might Expected SARSA be preferred over Q-Learning?
Ans: When you want the stability of on-policy learning but with reduced variance, especially in safety-critical domains where the behavior policy should be conservative.`
          ]
        }
      ]
    },
    'double-learning': {
      title: 'Double Learning',
      subtitle: 'Eliminating maximization bias in Q-value estimation',
      sections: [
        {
          heading: 'What is Double Learning?',
          text: '<strong>Double Learning</strong> is a technique that eliminates the positive bias caused by using the max operator over estimated Q-values. Standard Q-Learning overestimates action values because max of estimates is not equal to estimate of max. Double Q-Learning maintains two independent Q-tables and uses one to select actions and the other to evaluate them, decoupling selection from evaluation.',
          list: [
            'Addresses maximization bias: E[max Q̂] ≥ max E[Q̂]',
            'Maintains two independent estimators: Q1 and Q2',
            'Uses one Q-table to select the best action',
            'Uses the other Q-table to estimate its value'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Double Q-Learning decouples action selection from value evaluation using two independent Q-functions.',
          example: {
            title: 'Example: Double Q-Learning Update',
            code: `Double Q-Learning:
  Maintain two Q-tables: Q1 and Q2

For each update (randomly choose):
  Update Q1:
    Q1(S,A) ← Q1(S,A) + α × [R + γQ2(S′, argmax_a Q1(S′,a)) - Q1(S,A)]

  Or update Q2:
    Q2(S,A) ← Q2(S,A) + α × [R + γQ1(S′, argmax_a Q2(S′,a)) - Q2(S,A)]

Key decoupling:
  argmax Q1(S′,a) → selects the action
  Q2(S′, selected_action) → evaluates it

Without Double Learning:
  max Q(S′,a) uses the same Q for both
  → positive bias because estimates with
    high noise are selected as maxima`,
            output: 'Double Learning gives unbiased value estimates.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Double Q-Learning differs from standard Q-Learning only in how it handles the max operation.',
          table: {
            headers: ['Aspect', 'Q-Learning', 'Double Q-Learning', 'Expected SARSA'],
            rows: [
              ['Tables', 'Single Q', 'Two: Q1 and Q2', 'Single Q'],
              ['Max bias', 'Present (overestimation)', 'Eliminated', 'Reduced (not max)'],
              ['Selection', 'max Q(S′,a)', 'argmax Q1, value from Q2', 'Expectation over π'],
              ['Sample efficiency', 'Standard', 'Slightly lower (two tables)', 'Standard'],
              ['Implementation', 'Simple', 'Moderate (two updates)', 'Simple'],
              ['When to use', 'Baseline', 'When overestimation hurts', 'When variance hurts']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Updating both Q1 and Q2 on every step (fix: update only one per step, chosen randomly; this maintains independence between the estimators)',
            'Mistake 2: Using the average of Q1 and Q2 for action selection (fix: action selection should use one table; averaging reintroduces the bias problem)',
            'Mistake 3: Thinking Double Learning eliminates all bias (fix: it eliminates maximization bias; other biases like function approximation bias may remain)',
            'Mistake 4: Applying Double Learning where there is no max operator (fix: Double Learning is only needed for max-based updates; SARSA and Expected SARSA do not need it)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Double Learning is critical in settings where overestimation leads to poor decisions.',
          list: [
            '<strong>Deep RL (DDQN):</strong> Deep Double Q-Network uses a target network as Q2 and the online network as Q1 to prevent overoptimistic value estimates',
            '<strong>Portfolio Optimization:</strong> Avoid overestimating returns of risky assets when selecting portfolios based on historical estimates',
            '<strong>Clinical Trial Design:</strong> Prevent overestimation of treatment effects when selecting the best-performing arm from noisy early data',
            '<strong>Resource Allocation:</strong> Avoid overallocating to projects with optimistically estimated returns in multi-project selection'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Maximization bias: E[max Q̂] ≥ max E[Q̂] causes systematic overestimation',
            'Double Learning maintains two independent Q-functions: Q1 and Q2',
            'One Q selects the action; the other evaluates it — decoupling selection from evaluation',
            'Double Q-Learning converges to the same optimal policy but with unbiased estimates',
            'Deep RL extension: Double DQN uses online and target networks analogously',
            'Apply Double Learning whenever you use a max operator over estimated values'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: What is maximization bias and why does it occur in Q-Learning?
Ans: Maximization bias is the systematic overestimation of action values that occurs because the maximum of estimated Q-values is typically higher than the true maximum due to estimation noise.`,
            `Q2: How does Double Q-Learning eliminate maximization bias?
Ans: It uses one Q-table (Q1) to select the maximizing action and the other Q-table (Q2) to estimate its value, so the estimate is independent of the selection noise.`,
            `Q3: In Double DQN, which network corresponds to Q1 and which to Q2?
Ans: The online network acts as Q1 (selecting actions), and the target network acts as Q2 (evaluating their values), updated periodically to maintain independence.`
          ]
        }
      ]
    }
  }
};
