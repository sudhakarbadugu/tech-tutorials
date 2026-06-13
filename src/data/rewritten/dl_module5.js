export const dlModule5Content = {
  module5: {
    'ethics-dl': {
      title: 'Ethics in Deep Learning',
      subtitle: 'Responsible AI, fairness, transparency, and societal impact of deep learning systems',
      sections: [
        {
          heading: 'What is Ethics in Deep Learning?',
          text: 'As deep learning systems are deployed in high-stakes domains — hiring, healthcare, criminal justice, finance, and content moderation — ethical considerations have become central to AI development. <strong>AI ethics</strong> addresses the moral principles, fairness, accountability, and transparency needed to ensure these systems benefit society without causing harm.',
          list: [
            'AI ethics ensures deep learning systems are fair, transparent, accountable, and respectful of human rights',
            'Unethical AI can reinforce societal biases, invade privacy, spread misinformation, and cause real-world harm',
            'Ethical AI is not just about preventing bad outcomes — it is about actively designing systems that respect human dignity',
            'Ethics spans the entire AI lifecycle: data collection, model design, deployment, monitoring, and decommissioning'
          ]
        },
        {
          heading: 'Key Principles of Ethical AI',
          text: 'Several frameworks have emerged to guide responsible AI development. These principles form the foundation for ethical deep learning.',
          table: {
            headers: ['Principle', 'Meaning', 'Deep Learning Context'],
            rows: [
              ['Fairness', 'Treat individuals and groups equitably', 'Detect and mitigate bias in training data and model predictions'],
              ['Transparency', 'Make decisions explainable and interpretable', 'Use interpretable models or explainability tools like SHAP, LIME'],
              ['Accountability', 'Clear responsibility for AI outcomes', 'Maintain audit trails, model cards, and human-in-the-loop oversight'],
              ['Privacy', 'Protect personal and sensitive data', 'Use differential privacy, federated learning, and secure multi-party computation'],
              ['Safety', 'Prevent harm to users and society', 'Test for adversarial robustness, edge cases, and unintended consequences'],
              ['Beneficence', 'Act in the best interest of users', 'Design systems that genuinely improve lives, not just optimize metrics']
            ]
          }
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Measuring fairness in machine learning requires formalizing what "fair" means. Different definitions can conflict.',
          example: {
            title: 'Example: Demographic Parity vs Equalized Odds',
            code: `Demographic Parity:
  P(Ŷ = 1 | A = 0) = P(Ŷ = 1 | A = 1)
  → Acceptance rate is same across groups

Equalized Odds:
  P(Ŷ = 1 | Y = 1, A = 0) = P(Ŷ = 1 | Y = 1, A = 1)
  P(Ŷ = 1 | Y = 0, A = 0) = P(Ŷ = 1 | Y = 0, A = 1)
  → True positive and false positive rates are equal

Problem: These two are mathematically
incompatible in most real-world settings!`,
            output: 'There is no universal fairness metric. The right choice depends on the application and affected communities.',
            type: 'code'
          }
        },
        {
          heading: 'Bias in Deep Learning',
          text: 'Bias can enter at every stage of the deep learning pipeline. Understanding sources of bias is the first step toward mitigation.',
          list: [
            '<strong>Data bias:</strong> Training data under-represents certain groups or reflects historical inequities (e.g., facial recognition trained mostly on lighter-skinned faces)',
            '<strong>Algorithmic bias:</strong> Model architecture or loss function may inadvertently favor majority groups',
            '<strong>Interaction bias:</strong> System behavior changes based on how different user groups interact with it',
            '<strong>Evaluation bias:</strong> Benchmarks may not measure performance fairly across demographics',
            '<strong>Deployment bias:</strong> Real-world conditions differ from training assumptions, amplifying errors for marginalized groups'
          ],
          note: 'The famous Gender Shades study (Buolamwini & Gebru, 2018) found commercial facial recognition systems had error rates of 0.8% for light-skinned men but 34.7% for dark-skinned women — a 40x disparity.'
        },
        {
          heading: 'Important Differences',
          text: 'Key concepts in AI ethics are often conflated. Clarifying them helps practitioners make better decisions.',
          table: {
            headers: ['Concept', 'What It Means', 'Example'],
            rows: [
              ['Bias (statistical)', 'Systematic error in estimation or prediction', 'A model consistently underestimates loan default risk for a demographic group'],
              ['Bias (societal)', 'Prejudice embedded in data or society', 'Historical hiring data reflects gender discrimination, which the model learns'],
              ['Fairness', 'Absence of unjust discrimination', 'Equal opportunity in hiring regardless of protected attributes'],
              ['Explainability', 'Ability to understand why a model made a decision', 'A loan rejection comes with specific reasons the applicant can contest'],
              ['Interpretability', 'Model structure is inherently understandable', 'A decision tree is more interpretable than a 100-layer neural network'],
              ['Robustness', 'Model performs well under perturbations', 'A self-driving car still detects stop signs in rain, fog, or graffiti']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Removing protected attributes from input and assuming the model is fair (fix: models can infer protected attributes from correlated features like zip code or name; use causal fairness methods and subgroup auditing)',
            'Mistake 2: Optimizing for overall accuracy without checking subgroup performance (fix: always report metrics stratified by race, gender, age, and other relevant demographics)',
            'Mistake 3: Treating explainability as an afterthought (fix: build interpretability into model design from the start, not as a post-hoc patch)',
            'Mistake 4: Assuming fairness is purely a technical problem (fix: engage affected communities, ethicists, and policymakers; fairness has social, legal, and philosophical dimensions)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Ethical deep learning is being applied across domains to prevent harm and build trust.',
          list: [
            '<strong>Criminal justice:</strong> Some jurisdictions have banned or restricted predictive policing and risk assessment tools due to racial bias concerns',
            '<strong>Healthcare:</strong> FDA now requires algorithmic medical devices to demonstrate performance across diverse populations before approval',
            '<strong>Hiring:</strong> Companies like Amazon discontinued AI recruiting tools after discovering gender bias; newer tools now include bias audits',
            '<strong>Content moderation:</strong> Platforms use human review panels + AI to balance scale with nuance, reducing over-censorship of marginalized voices',
            '<strong>Finance:</strong> EU AI Act classifies credit scoring AI as "high-risk," requiring transparency, human oversight, and bias testing'
          ]
        },
        {
          heading: 'Mitigation Techniques',
          text: 'Practitioners can take concrete technical and procedural steps to build more ethical systems.',
          list: [
            '<strong>Pre-processing:</strong> Reweight training samples, synthesize underrepresented data, or transform features to remove proxy bias',
            '<strong>In-processing:</strong> Add fairness constraints to the loss function (e.g., adversarial debiasing, constrained optimization)',
            '<strong>Post-processing:</strong> Adjust decision thresholds per group, or apply calibrated output transformations',
            '<strong>Explainability tools:</strong> SHAP, LIME, attention visualization, and concept activation vectors (CAV) help reveal model reasoning',
            '<strong>Documentation:</strong> Model cards, data sheets, and system cards document intended use, limitations, and performance across groups',
            '<strong>Participatory design:</strong> Involve affected communities in defining what fairness means for their context'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI ethics in deep learning addresses fairness, transparency, accountability, privacy, safety, and beneficence',
            'Bias enters at every stage: data collection, algorithm design, evaluation, and deployment',
            'Fairness metrics (demographic parity, equalized odds) often conflict — no single metric works for all contexts',
            'Removing protected attributes is insufficient; correlated features can proxy for them',
            'Mitigation spans pre-processing, in-processing, and post-processing techniques',
            'Ethics is not purely technical — it requires interdisciplinary collaboration with affected communities'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is simply removing race or gender from training features insufficient for fairness?\nAns: Models can infer protected attributes from correlated features (e.g., zip code, name, language patterns), so bias can persist even when explicit labels are removed.',
            'Q2: What is the difference between explainability and interpretability?\nAns: Interpretability means the model is inherently understandable (e.g., decision tree); explainability means we can explain a black-box model\'s decisions post-hoc (e.g., using SHAP or LIME).',
            'Q3: Name three stages of the ML pipeline where bias can enter.\nAns: Data collection (underrepresentation), algorithm design (loss function favoring majority groups), and evaluation (benchmarks not testing across demographics).',
            'Q4: Why can demographic parity and equalized odds conflict?\nAns: They impose different mathematical constraints on predictions. Satisfying both simultaneously is generally impossible unless the base rates (prevalence) are identical across groups.'
          ]
        }
      ]
    },
    'future-dl': {
      title: 'Future Directions in Deep Learning',
      subtitle: 'Emerging trends, open challenges, and the next decade of AI research',
      sections: [
        {
          heading: 'What Lies Ahead for Deep Learning?',
          text: 'Deep learning has achieved remarkable success, but the field is evolving rapidly. The next generation of research focuses on making AI more efficient, robust, generalizable, and aligned with human values. Understanding these directions helps practitioners anticipate tools and paradigms that will shape the coming decade.',
          list: [
            'Future deep learning aims for efficiency: smaller models, less data, lower energy consumption, and faster training',
            'Researchers are pursuing generalization beyond narrow tasks toward artificial general intelligence (AGI) and continual learning',
            'Trustworthy AI — robustness, fairness, privacy, and alignment — is becoming a core research priority, not just an afterthought',
            'Multimodal, neurosymbolic, and embodied AI represent major paradigm shifts in how models perceive, reason, and act'
          ]
        },
        {
          heading: 'Key Emerging Directions',
          text: 'Several research frontiers are actively reshaping the deep learning landscape.',
          table: {
            headers: ['Direction', 'Description', 'Key Innovation'],
            rows: [
              ['Neuromorphic Computing', 'Brain-inspired hardware for efficient inference', 'Spiking neural networks (SNNs) on low-power chips'],
              ['Multimodal Foundation Models', 'Unified models for text, image, audio, video', 'GPT-4V, Gemini, CLIP — one model, many modalities'],
              ['Neurosymbolic AI', 'Combining neural networks with symbolic reasoning', 'Neural networks learn patterns; symbolic systems guarantee logic'],
              ['Continual / Lifelong Learning', 'Learning new tasks without forgetting old ones', 'Elastic Weight Consolidation (EWC), memory replay'],
              ['Federated Learning', 'Decentralized training without centralizing data', 'Train on edge devices; share only gradient updates'],
              ['Quantum ML', 'Quantum algorithms for machine learning', 'Potential exponential speedups for specific linear algebra tasks'],
              ['Causal Deep Learning', 'Moving from correlation to causation', 'Causal inference for robust, generalizable predictions'],
              ['World Models', 'Models that learn internal simulations of reality', 'Used in model-based RL, planning, and counterfactual reasoning']
            ]
          }
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Continual learning faces catastrophic forgetting. Elastic Weight Consolidation (EWC) protects important weights for old tasks.',
          example: {
            title: 'Example: Elastic Weight Consolidation (EWC)',
            code: `Standard loss on new task:
  L(θ) = L_new(θ)

EWC loss (protect old-task weights):
  L_EWC(θ) = L_new(θ) + λ Σᵢ Fᵢ(θᵢ - θᵢ*)²

Where:
  θᵢ* = optimal weight for task A
  Fᵢ = Fisher Information (importance of θᵢ for task A)
  λ = regularization strength

Effect:
  → High Fᵢ means θᵢ is critical for task A
  → Penalty keeps θᵢ close to θᵢ*
  → Low Fᵢ means θᵢ can freely adapt to task B`,
            output: 'EWC prevents catastrophic forgetting by selectively freezing important weights.',
            type: 'code'
          }
        },
        {
          heading: 'Efficiency and Sustainability',
          text: 'Training large models consumes enormous energy. Making deep learning sustainable is both an engineering challenge and an ethical imperative.',
          list: [
            '<strong>Model compression:</strong> Techniques like pruning, quantization, knowledge distillation, and low-rank factorization reduce model size with minimal accuracy loss',
            '<strong>Efficient architectures:</strong> Mixture of Experts (MoE), state space models (Mamba), and linear attention reduce computational complexity',
            '<strong>Green AI:</strong> Researchers now report carbon footprint alongside accuracy metrics, and optimize for FLOPs-per-accuracy',
            '<strong>Hardware co-design:</strong> Custom accelerators (TPUs, NPUs) and analog computing reduce energy per operation by orders of magnitude',
            '<strong>Data efficiency:</strong> Few-shot learning, self-supervised pre-training, and synthetic data generation reduce the need for massive labeled datasets'
          ],
          note: 'Training GPT-3 consumed approximately 1,287 MWh of electricity and emitted 552 tons of CO₂ — roughly the lifetime emissions of five average cars. Efficiency research directly addresses this footprint.'
        },
        {
          heading: 'Important Differences',
          text: 'Several related concepts in future AI are often confused.',
          table: {
            headers: ['Concept', 'What It Means', 'Current Status'],
            rows: [
              ['AGI (Artificial General Intelligence)', 'Human-level intelligence across any task', 'Theoretical goal; no consensus on timeline or approach'],
              ['Narrow AI', 'Excellence on a specific task', 'Current state: AlphaGo, GPT-4, DALL-E are all narrow'],
              ['Self-Supervised Learning', 'Learning from unlabeled data by creating pseudo-labels', 'Widely deployed: BERT, GPT, CLIP all use it'],
              ['Unsupervised Learning', 'Learning patterns without any labels', 'Active research; less mature than self-supervised'],
              ['Reinforcement Learning', 'Learning through trial and error with rewards', 'Strong in games and robotics; sample inefficient'],
              ['World Models', 'Internal simulation of environment dynamics', 'Emerging: used in model-based RL and planning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Equating scale with intelligence (fix: bigger models are not necessarily smarter; efficiency, structure, and training data quality matter more than parameter count alone)',
            'Mistake 2: Ignoring the long tail of failure modes (fix: test models on rare, adversarial, and out-of-distribution inputs; average accuracy hides critical weaknesses)',
            'Mistake 3: Treating current benchmarks as sufficient (fix: benchmarks often measure narrow capabilities; real-world robustness requires evaluation across distributions, demographics, and edge cases)',
            'Mistake 4: Assuming AI alignment is solved by scaling (fix: alignment — ensuring models pursue intended goals — requires research in reward modeling, constitutional AI, and human feedback, not just more parameters)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Future deep learning directions are already beginning to transform industries.',
          list: [
            '<strong>Healthcare:</strong> Federated learning enables hospitals to collaboratively train diagnostic models without sharing patient data across institutions',
            '<strong>Robotics:</strong> World models and model-based RL allow robots to plan ahead and adapt to novel environments with minimal real-world trials',
            '<strong>Autonomous vehicles:</strong> Neurosymbolic approaches combine deep perception with rule-based reasoning for safe decision-making in edge cases',
            '<strong>Scientific discovery:</strong> AlphaFold (protein folding), GNoME (materials), and weather forecasting models demonstrate AI as an accelerator for fundamental science',
            '<strong>Edge AI:</strong> TinyML and neuromorphic chips bring deep learning to microcontrollers, enabling on-device speech recognition, health monitoring, and anomaly detection'
          ]
        },
        {
          heading: 'Open Challenges',
          text: 'Despite progress, fundamental challenges remain that will define the next era of deep learning research.',
          list: [
            '<strong>Catastrophic forgetting:</strong> Neural networks forget old tasks when learning new ones — a barrier to lifelong learning',
            '<strong>Out-of-distribution generalization:</strong> Models fail when test data differs subtly from training data, limiting real-world reliability',
            '<strong>Sample efficiency:</strong> Humans learn from a few examples; deep networks need millions — closing this gap is a grand challenge',
            '<strong>Causal reasoning:</strong> Current models excel at pattern matching but struggle with cause-and-effect understanding',
            '<strong>Alignment:</strong> Ensuring powerful AI systems pursue goals that match human intentions and values',
            '<strong>Interpretability:</strong> Understanding what large models truly "know" and why they make specific decisions remains largely unsolved',
            '<strong>Data quality and provenance:</strong> The web-scale data that fuels modern models is noisy, biased, and of uncertain legal and ethical status'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Future deep learning emphasizes efficiency, generalization, trustworthiness, and multimodal/embodied intelligence',
            'Emerging directions include neuromorphic computing, neurosymbolic AI, continual learning, federated learning, and causal reasoning',
            'Sustainability is critical: model compression, efficient architectures, and green AI metrics are becoming standard',
            'AGI remains a distant theoretical goal; current systems are narrow but increasingly capable within their domains',
            'Open challenges include catastrophic forgetting, OOD generalization, sample efficiency, causal reasoning, alignment, and interpretability',
            'Real-world impact is already visible in healthcare federated learning, robotics world models, scientific discovery, and edge AI'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is catastrophic forgetting, and how does EWC address it?\nAns: Catastrophic forgetting is when a neural network loses previously learned knowledge upon learning new tasks. EWC addresses it by identifying weights important for old tasks (via Fisher Information) and penalizing large changes to them.',
            'Q2: What is the difference between self-supervised and unsupervised learning?\nAns: Self-supervised learning creates pseudo-labels from the data structure itself (e.g., masking words in BERT), while unsupervised learning discovers patterns without any labels or constructed supervision signals.',
            'Q3: Why is causal reasoning important for the future of deep learning?\nAns: Current models learn correlations, which can be spurious or non-generalizable. Causal reasoning enables models to understand cause-and-effect relationships, leading to more robust and generalizable predictions.',
            'Q4: What is federated learning, and why is it valuable for privacy?\nAns: Federated learning trains models across decentralized devices by sharing only gradient updates, not raw data. This keeps sensitive data local while still benefiting from collective training.',
            'Q5: Why is AGI considered a theoretical goal rather than a near-term achievement?\nAns: AGI requires human-level generalization across arbitrary tasks with minimal supervision. Current systems excel at narrow tasks but lack the flexibility, reasoning, and adaptability that define general intelligence — and there is no consensus on how to achieve it.'
          ]
        }
      ]
    }
  }
};
