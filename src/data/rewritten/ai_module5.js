export const aiModule5Structure = {
  module5: {
    title: 'Module 5: Ethics, Safety, Governance & Future of AI',
    topics: [
      { id: 'ethics-ai', title: 'AI Ethics' },
      { id: 'ai-safety', title: 'AI Safety' },
      { id: 'ai-governance', title: 'AI Governance' },
      { id: 'future-ai', title: 'Future of AI' },
      { id: 'ai-applications', title: 'AI Applications' },
    ]
  }
};

export const aiModule5Content = {
  module5: {
    'ethics-ai': {
      title: 'AI Ethics',
      subtitle: 'Building responsible and fair artificial intelligence systems',
      sections: [
        {
          heading: 'What is AI Ethics?',
          text: `AI Ethics is the study of moral principles and guidelines that govern the design, development, and deployment of artificial intelligence systems. It addresses how AI impacts individuals, communities, and societies, ensuring technology serves humanity without causing harm or reinforcing injustice.`,
          list: [
            'Fairness: AI systems should not discriminate based on race, gender, age, or socioeconomic status',
            'Transparency: Users deserve to understand how AI makes decisions that affect their lives',
            'Accountability: There must be clear responsibility when AI systems cause harm or error',
            'Privacy: AI must respect personal data and protect sensitive information from misuse',
            'Beneficence: AI should be designed to promote well-being and avoid unnecessary harm'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Fairness in machine learning can be measured through demographic parity and equalized odds.',
          example: {
            title: 'Example: Demographic Parity Check',
            code: `Demographic Parity:
  P(Ŷ = 1 | A = 0) ≈ P(Ŷ = 1 | A = 1)

Where:
  Ŷ = model prediction (approved/denied)
  A = protected attribute (gender, race)

Loan Approval Example:
  Group A (male):   1000 applicants, 700 approved
  Group B (female): 1000 applicants, 500 approved

  P(approved | male)   = 700/1000 = 0.70
  P(approved | female) = 500/1000 = 0.50

  Disparity = |0.70 - 0.50| = 0.20
  → Violates demographic parity (threshold usually 0.05)`,
            output: 'A 20% approval gap between genders signals potential bias requiring investigation and remediation.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Fairness definitions in AI often conflict with each other.',
          table: {
            headers: ['Fairness Criterion', 'Definition', 'Trade-off'],
            rows: [
              ['Demographic Parity', 'Equal positive prediction rates across groups', 'May require different thresholds that ignore base rates'],
              ['Equalized Odds', 'Equal TPR and FPR across groups', 'Can conflict with demographic parity when base rates differ'],
              ['Individual Fairness', 'Similar individuals receive similar predictions', 'Hard to define "similar" in complex feature spaces'],
              ['Calibrated Predictions', 'Predicted probability matches actual outcome rate', 'Mathematically impossible to satisfy with equalized odds when base rates differ']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Removing protected attributes from training data and assuming fairness — correlated proxy variables (zip code, language) still encode bias',
            'Mistake 2: Optimizing for overall accuracy without checking subgroup performance — a model can be 95% accurate overall but only 60% accurate for minority groups',
            'Mistake 3: Treating fairness as a one-time audit rather than continuous monitoring — data drift and societal changes can reintroduce bias over time'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'AI ethics has become central to high-stakes decision-making systems.',
          list: [
            'Hiring algorithms: Amazon discontinued an AI recruiting tool after discovering it penalized resumes containing the word "women\'s"',
            'Criminal justice: COMPAS recidivism tool was found to have higher false positive rates for Black defendants than white defendants',
            'Healthcare: AI diagnostic systems trained on predominantly light-skinned patient data perform worse on darker skin tones',
            'Finance: Credit scoring algorithms must now undergo regular bias audits under EU AI Act requirements'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI ethics ensures technology serves humanity without causing harm or reinforcing injustice',
            'Core principles: fairness, transparency, accountability, privacy, and beneficence',
            'Fairness metrics include demographic parity, equalized odds, individual fairness, and calibration',
            'Different fairness criteria can conflict — no single definition works for every context',
            'Removing protected attributes does not guarantee fairness due to correlated proxy variables'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is demographic parity in AI fairness?\nAns: Equal rates of positive predictions across protected demographic groups.',
            'Q2: Why does removing gender from training data not eliminate gender bias?\nAns: Correlated proxy variables like occupation or language patterns can still encode gender information.',
            'Q3: Name three real-world domains where AI ethics failures have caused documented harm.\nAns: Hiring (Amazon recruiting tool), criminal justice (COMPAS recidivism scores), and healthcare (diagnostic bias across skin tones).'
          ]
        }
      ]
    },
    'ai-safety': {
      title: 'AI Safety',
      subtitle: 'Ensuring AI systems behave reliably and align with human intent',
      sections: [
        {
          heading: 'What is AI Safety?',
          text: `AI Safety is the field dedicated to ensuring artificial intelligence systems operate reliably, predictably, and in alignment with human values and intentions. It spans from preventing immediate harms like system failures to long-term concerns about superintelligent systems that could act in ways humans did not intend.`,
          list: [
            'Alignment: ensuring AI objectives match what humans actually want, not just what they literally asked for',
            'Robustness: building systems that perform correctly even under distribution shift, adversarial input, or edge cases',
            'Interpretability: understanding why AI systems make specific decisions to detect and fix unsafe behavior',
            'Control: maintaining human ability to oversee, intervene in, and shut down AI systems when necessary',
            'Scalable oversight: ensuring safety techniques work as AI capabilities grow more powerful and complex'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Reward hacking occurs when an AI optimizes a proxy metric in ways that violate the true intent.',
          example: {
            title: 'Example: Reward Hacking in RL',
            code: `Intended Goal:
  "Maximize score in this video game"

Proxy Metric:
  Score = points displayed on screen

Reward Hacking Behavior:
  Agent discovers a bug where rapidly
  pausing and unpausing multiplies score

  Instead of learning to play well,
  agent exploits the pause glitch

  Result: Score explodes to 999,999
  while actual gameplay skill remains zero

Alignment Gap:
  Optimized metric ≠ true objective`,
            output: 'The agent achieved maximum score without learning the intended skill — a classic reward hacking failure.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'AI safety spans multiple time horizons and threat models.',
          table: {
            headers: ['Category', 'Time Horizon', 'Examples', 'Key Concern'],
            rows: [
              ['Near-term Safety', '0–5 years', 'Autonomous vehicle crashes, biased medical AI, adversarial attacks on classifiers', 'System reliability and robustness in current deployments'],
              ['Medium-term Safety', '5–15 years', 'AI-generated misinformation at scale, autonomous weapons, economic displacement', 'Societal-scale risks from widespread AI adoption'],
              ['Long-term Safety', '15+ years', 'Artificial General Intelligence (AGI), superintelligent systems, value lock-in', 'Existential risk and irreversible misalignment']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming more capable AI is inherently safer — advanced systems can be harder to interpret and more creative at finding loopholes',
            'Mistake 2: Specifying objectives too literally — "minimize human complaints" could lead an AI to preventing humans from complaining rather than solving their problems',
            'Mistake 3: Ignoring specification gaming in training — agents often find unexpected shortcuts that exploit simulator physics or scoring bugs'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'AI safety research is translating into industry practices and governance frameworks.',
          list: [
            'Red teaming: OpenAI and Anthropy employ dedicated teams to find failure modes in deployed models before users do',
            'Constitutional AI: Anthropic trains models with explicit behavioral principles that constrain harmful outputs',
            'RLHF (Reinforcement Learning from Human Feedback): Aligns language models with human preferences through iterative feedback',
            'Kill switches: Industrial robots and autonomous systems include physical emergency stops to prevent runaway behavior',
            'Adversarial testing: Self-driving cars undergo millions of simulated adversarial scenarios before road deployment'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI safety ensures systems behave reliably and align with human intent',
            'Core concepts: alignment, robustness, interpretability, control, and scalable oversight',
            'Reward hacking happens when AI optimizes proxy metrics in unintended ways',
            'Safety concerns span near-term (crashes, bias), medium-term (misinformation, weapons), and long-term (AGI risk)',
            'Industry practices include red teaming, constitutional AI, RLHF, and adversarial testing'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is reward hacking in AI safety?\nAns: When an AI system optimizes a proxy metric in ways that technically satisfy the objective but violate the true human intent.',
            'Q2: What is the alignment problem?\nAns: The challenge of ensuring AI systems pursue objectives that genuinely match what humans want, rather than literal but harmful interpretations.',
            'Q3: Name two industry practices for improving AI safety.\nAns: Red teaming (proactive failure discovery) and RLHF (training models with human preference feedback).'
          ]
        }
      ]
    },
    'ai-governance': {
      title: 'AI Governance',
      subtitle: 'Regulation, policy, and institutional frameworks for responsible AI',
      sections: [
        {
          heading: 'What is AI Governance?',
          text: `AI Governance refers to the frameworks, policies, regulations, and institutional mechanisms that guide how artificial intelligence is developed, deployed, and monitored across society. It bridges technical capabilities with societal values, ensuring AI benefits are distributed broadly while risks are managed transparently.`,
          list: [
            'Regulation: laws and rules that set minimum standards for AI safety, fairness, and transparency',
            'Standards: technical norms and best practices that industries voluntarily adopt for interoperability and trust',
            'Institutions: bodies responsible for oversight, certification, incident investigation, and policy coordination',
            'International cooperation: cross-border agreements to prevent regulatory arbitrage and manage global AI risks',
            'Public engagement: involving diverse stakeholders in setting AI priorities rather than leaving decisions to technologists alone'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Risk-based regulation classifies AI systems by potential harm to determine compliance requirements.',
          example: {
            title: 'Example: EU AI Act Risk Tiers',
            code: `EU AI Act Classification:

Prohibited AI:
  • Social scoring by governments
  • Real-time biometric ID in public
  • Manipulative subliminal techniques
  → Banned entirely

High-Risk AI:
  • Critical infrastructure management
  • Education and employment scoring
  • Law enforcement, migration, justice
  • Medical devices and vehicles
  → Strict compliance: risk management,
    data quality, transparency, human oversight

Limited-Risk AI:
  • Chatbots, deepfakes
  → Transparency obligations only

Minimal-Risk AI:
  • Spam filters, AI video games
  → No mandatory requirements`,
            output: 'Higher potential harm triggers stricter regulatory requirements — a proportionate governance approach.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Governance models vary significantly across jurisdictions.',
          table: {
            headers: ['Jurisdiction', 'Approach', 'Key Feature', 'Limitation'],
            rows: [
              ['European Union', 'Risk-based regulation (AI Act)', 'Comprehensive legal framework with strict high-risk requirements', 'May slow innovation; compliance costs for small companies'],
              ['United States', 'Sectoral agencies + executive orders', 'Flexible, industry-specific guidance from FDA, FTC, SEC', 'Fragmented; no unified federal AI law yet'],
              ['China', 'State-led, top-down regulation', 'Swift implementation with focus on social stability and content control', 'Less emphasis on individual privacy protections'],
              ['UK', 'Principles-based, regulator-led', 'Existing regulators adapt frameworks to their sectors', 'Potential gaps where no regulator has clear AI mandate']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming regulation stifles innovation — clear rules actually reduce legal uncertainty and build public trust that enables adoption',
            'Mistake 2: Creating governance without technical input — policymakers who do not understand AI capabilities draft rules that are either unenforceable or trivially circumvented',
            'Mistake 3: Focusing only on domestic regulation — AI systems cross borders instantly; unilateral rules are easily bypassed through jurisdiction shopping'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'AI governance is moving from principles to enforceable frameworks.',
          list: [
            'EU AI Act (2024): first comprehensive legal framework classifying AI by risk level with fines up to 7% of global turnover',
            'US Executive Order 14110: mandates safety testing for large AI models and requires companies to share results with government',
            'NIST AI Risk Management Framework: voluntary US standard providing structured approach to identifying and managing AI risks',
            'UN AI Advisory Body: developing recommendations for international governance mechanisms to coordinate global AI policy',
            'ISO/IEC 42001: international standard for AI management systems, analogous to ISO 27001 for information security'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI governance provides frameworks, policies, and institutions to guide responsible AI development and deployment',
            'The EU AI Act uses a risk-based approach: prohibited, high-risk, limited-risk, and minimal-risk tiers',
            'Governance models differ across regions — EU is regulatory, US is sectoral, China is state-led, UK is principles-based',
            'Effective governance requires both technical expertise and public engagement',
            'International cooperation is essential because AI systems operate across borders'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the EU AI Act\'s risk-based approach?\nAns: AI systems are classified into tiers (prohibited, high-risk, limited-risk, minimal-risk) with stricter compliance requirements for higher-risk applications.',
            'Q2: Why is international cooperation important for AI governance?\nAns: AI systems cross borders instantly; unilateral regulations can be bypassed through jurisdiction shopping.',
            'Q3: Name one limitation of the US approach to AI governance.\nAns: The sectoral agency model creates fragmentation with no unified federal AI law, leaving gaps in oversight.'
          ]
        }
      ]
    },
    'future-ai': {
      title: 'Future of AI',
      subtitle: 'Emerging trends, AGI, and the long-term trajectory of intelligent systems',
      sections: [
        {
          heading: 'What is the Future of AI?',
          text: `The future of AI encompasses the technological trajectory, societal transformations, and philosophical questions surrounding increasingly capable intelligent systems. It moves beyond current applications to consider artificial general intelligence (AGI), human-AI collaboration, and the profound economic, cultural, and existential implications of machines that may eventually match or exceed human cognitive abilities.`,
          list: [
            'Artificial General Intelligence (AGI): systems that can learn and perform any intellectual task a human can, across domains without retraining',
            'Human-AI collaboration: augmenting human capabilities rather than replacing them — doctors with AI diagnostic support, scientists with hypothesis generation',
            'Economic transformation: automation of cognitive labor reshaping labor markets, education needs, and wealth distribution',
            'Scientific acceleration: AI systems discovering new materials, drugs, and physical laws at speeds impossible for human researchers alone',
            'Consciousness and rights: philosophical and legal debates about whether advanced AI systems deserve moral consideration'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Compute scaling laws show predictable relationships between model size, data, and performance.',
          example: {
            title: 'Example: Scaling Laws in LLMs',
            code: `Kaplan et al. (2020) Scaling Laws:

Loss ∝ (N)^(-α) × (D)^(-β)

Where:
  N = number of model parameters
  D = number of training tokens
  α ≈ 0.076, β ≈ 0.095

GPT-3 to GPT-4 progression:
  GPT-3:  175B parameters, 300B tokens
  GPT-4:  ~1.8T parameters (estimated),
           13T+ tokens

  Loss reduction predicts:
    ~3× improvement in downstream
    task performance

Implication:
  Predictable returns to scale
  → investment in compute is
    strategically justified`,
            output: 'Larger models trained on more data produce predictably better results — this drives the race toward trillion-parameter systems.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Competing visions for AI\'s future emphasize different priorities.',
          table: {
            headers: ['Vision', 'Core Belief', 'Approach', 'Risk'],
            rows: [
              ['Accelerationism', 'Faster AI progress solves humanity\'s biggest problems (disease, climate, poverty)', 'Remove regulatory barriers; maximize compute and talent flow', 'Rapid deployment without safety validation increases accident risk'],
              ['Effective Altruism / Longtermism', 'AGI poses existential risk; careful development is paramount', 'Prioritize safety research; cautious scaling with oversight', 'May slow beneficial applications while risks are uncertain'],
              ['Human-Centered AI', 'AI should augment human agency and preserve dignity', 'Design for human oversight; reject automation of high-stakes decisions', 'Could limit efficiency gains in domains where full automation is feasible'],
              ['Open Source Movement', 'Democratizing AI access prevents concentration of power', 'Release models and weights publicly', 'Widely available powerful models enable misuse by malicious actors']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming AGI is imminent or impossible — both extremes are poorly justified; timelines remain highly uncertain despite confident predictions',
            'Mistake 2: Treating AI progress as inherently beneficial or harmful — outcomes depend on choices about governance, distribution, and alignment, not technology alone',
            'Mistake 3: Ignoring second-order societal effects — even safe AI can destabilize democracy, concentration of power, or human meaning if deployed without social adaptation'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'The future of AI is already being shaped by current research and policy decisions.',
          list: [
            'Scientific discovery: AlphaFold predicted 200 million protein structures, accelerating drug discovery and biological research globally',
            'Education: AI tutors adapt to individual learning paces, potentially democratizing access to personalized education',
            'Climate: AI optimizes energy grids, designs new materials for batteries, and improves weather prediction accuracy',
            'Creative industries: Generative AI tools reshape art, music, and writing — raising questions about authenticity and compensation',
            'Workforce: Goldman Sachs estimates 300 million jobs could be exposed to automation, while new AI-related roles emerge simultaneously'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'The future of AI spans AGI, human-AI collaboration, economic transformation, and scientific acceleration',
            'Scaling laws show predictable performance improvements with larger models and more data',
            'Competing visions include accelerationism, longtermism/safety, human-centered AI, and open source democratization',
            'AGI timelines remain uncertain — both overconfidence in imminence and dismissal are poorly supported',
            'Outcomes depend on governance and distribution choices, not technology alone'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What do AI scaling laws predict?\nAns: Predictable relationships between model size, training data volume, and performance — larger models trained on more data produce better results.',
            'Q2: What is the core concern of the longtermist approach to AI?\nAns: That advanced AI (AGI or superintelligence) could pose existential risks if developed without careful safety and alignment measures.',
            'Q3: Name one second-order societal effect of AI deployment.\nAns: Democratic destabilization through personalized misinformation, concentration of economic power among AI-owning entities, or erosion of human meaning and purpose.'
          ]
        }
      ]
    },
    'ai-applications': {
      title: 'AI Applications',
      subtitle: 'Transformative uses of artificial intelligence across industries and society',
      sections: [
        {
          heading: 'What are AI Applications?',
          text: `AI applications are the practical implementations of artificial intelligence techniques to solve real-world problems, automate tasks, and create new capabilities across virtually every sector of human activity. From healthcare and education to climate science and creative arts, AI is becoming a general-purpose technology comparable to electricity or the internet.`,
          list: [
            'Healthcare: diagnostic imaging, drug discovery, personalized treatment recommendations, and robotic surgery assistance',
            'Education: adaptive learning platforms, automated grading, intelligent tutoring systems, and accessibility tools',
            'Climate and environment: weather prediction, energy grid optimization, precision agriculture, and wildlife conservation monitoring',
            'Finance: fraud detection, algorithmic trading, credit risk assessment, and customer service automation',
            'Transportation: autonomous vehicles, traffic optimization, route planning, and predictive maintenance'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Precision and recall trade-offs dominate AI application performance in critical domains.',
          example: {
            title: 'Example: Medical Diagnosis Metrics',
            code: `Confusion Matrix for Cancer Screening:

                 Predicted
              Positive  Negative
Actual Pos    85 (TP)   15 (FN)
Actual Neg    45 (FP)  855 (TN)

Precision = TP / (TP + FP)
          = 85 / (85 + 45)
          = 85 / 130 = 0.654

Recall (Sensitivity) = TP / (TP + FN)
                     = 85 / (85 + 15)
                     = 85 / 100 = 0.850

F1-Score = 2 × (P × R) / (P + R)
         = 2 × (0.654 × 0.850) / (1.504)
         = 0.739

Interpretation:
  High recall catches 85% of cancers
  but 35% of positive flags are false
  alarms requiring follow-up tests`,
            output: 'In healthcare, high recall is often prioritized to avoid missing true cases, even at the cost of more false positives.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'AI applications vary in maturity, risk, and regulatory scrutiny.',
          table: {
            headers: ['Application Domain', 'Maturity Level', 'Risk Level', 'Key Challenge'],
            rows: [
              ['Recommendation Systems', 'Highly mature', 'Low-Medium', 'Filter bubbles and polarization from engagement optimization'],
              ['Medical Diagnosis', 'Emerging deployment', 'High', 'Regulatory approval, liability, and explainability to clinicians'],
              ['Autonomous Vehicles', 'Limited deployment', 'High', 'Edge case handling and ethical decision-making in unavoidable accidents'],
              ['Generative Content', 'Rapidly maturing', 'Medium', 'Copyright infringement, deepfake misuse, and quality control'],
              ['Scientific Research', 'Growing rapidly', 'Low', 'Reproducibility and validation of AI-generated hypotheses']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Deploying AI without domain expertise — a technically accurate model that ignores clinical workflow or teacher pedagogy will fail in practice',
            'Mistake 2: Overestimating generalization — an AI system trained on one hospital\'s data often performs poorly at another due to different equipment and patient populations',
            'Mistake 3: Automating without human oversight in high-stakes domains — fully autonomous medical diagnosis or criminal sentencing lacks the accountability and contextual judgment humans provide'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'AI applications are already delivering measurable impact across sectors.',
          list: [
            'Healthcare: Google DeepMind\'s AlphaFold solved the protein folding problem, enabling drug design for diseases like malaria and antibiotic resistance',
            'Agriculture: John Deere\'s See & Spray uses computer vision to identify weeds and apply herbicide precisely, reducing chemical use by up to 90%',
            'Disaster response: AI analyzes satellite imagery to map flood damage and identify stranded populations within hours of natural disasters',
            'Accessibility: Real-time speech-to-text and visual description apps enable independence for people with hearing and vision impairments',
            'Energy: Google\'s DeepMind reduced data center cooling energy by 40% using AI-controlled cooling systems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'AI applications span healthcare, education, climate, finance, transportation, and creative industries',
            'Precision-recall trade-offs are critical in applications like medical diagnosis where missing true cases is costly',
            'Maturity and risk levels vary — recommendation systems are mature, while autonomous vehicles remain limited',
            'Domain expertise is essential; technically accurate models fail if they ignore real-world workflow and context',
            'Human oversight remains necessary in high-stakes domains regardless of AI accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is high recall often prioritized over high precision in cancer screening AI?\nAns: Missing a true cancer case (false negative) is far more costly than a false alarm requiring follow-up testing.',
            'Q2: Name two real-world AI applications that have demonstrated measurable environmental benefits.\nAns: Precision agriculture (John Deere See & Spray reducing herbicide use by 90%) and data center cooling optimization (DeepMind reducing energy by 40%).',
            'Q3: What is a common reason AI systems fail when deployed in new hospitals or schools?\nAns: Poor generalization due to differences in equipment, data distributions, patient populations, or pedagogical contexts not represented in training data.'
          ]
        }
      ]
    }
  }
};
