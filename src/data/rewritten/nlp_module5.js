// natural language processing — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js nlp_module5.js

export const nlpModule5Content = {
  module5: {
    'ethics-nlp': {
      title: 'Ethics in NLP',
      subtitle: 'Moral principles and responsible development of language AI',
      sections: [
        {
          heading: 'What is Ethics in NLP?',
          text: '<strong>Ethics in NLP</strong> refers to the moral principles and guidelines that govern the development, deployment, and use of natural language processing systems. As NLP models increasingly influence communication, decision-making, and information access, ethical considerations ensure these technologies benefit society while minimizing harm.',
          list: [
            'NLP ethics addresses fairness, transparency, accountability, and human dignity in language AI systems',
            'Ethical NLP requires examining who benefits from a system and who might be harmed by its outputs or design choices',
            'Language models can perpetuate stereotypes, generate misinformation, or be used for manipulation at scale',
            'Responsible NLP development involves interdisciplinary collaboration between technologists, ethicists, linguists, and affected communities'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Ethics in NLP</strong> refers to the moral principles and guidelines that govern the development, deployment, and use of natural language processing systems. As NLP models increasingly influence communication, decision-making, and information access, ethical considerations ensure these technologies benefit society while minimizing harm. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Ethics in NLP</strong> refers to the moral principles and guidelines that govern the development, deployment, and use of natural language processing systems. As NLP models increasingly influence communication, decision-making, and information access, ethical considerations ensure these technologies benefit society while minimizing harm. NLP ethics addresses fairness, transparency, accountability, and human dignity in language AI systems Ethical NLP requires examining who benefits from a system and who might be harmed by its outputs or design choices Language models can perpetuate stereotypes, generate misinformation, or be used for manipulation at scale Responsible NLP development involves interdisciplinary collaboration between technologists, ethicists, linguists, and affected communities</p>',
            '<p>You use ethics in nlp when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Ethics in NLP

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Ethics in NLP sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The <strong>ethical risk assessment framework</strong> helps evaluate NLP systems before deployment.',
          example: {
            title: 'Ethical Risk Score Calculation',
            code: `Risk Score = (Severity × Probability × Affected Population) / Mitigation Factor

Where:
  Severity (1-10): Harm caused if risk materializes
  Probability (0-1): Likelihood of harm occurring
  Affected Population: Number or vulnerability of users impacted
  Mitigation Factor (1-5): Effectiveness of safeguards

Example: Bias in hiring chatbot
  Severity = 8 (discrimination affects livelihood)
  Probability = 0.6 (bias present in training data)
  Population = 10,000 job seekers/year
  Mitigation = 2 (minimal fairness testing)

Risk Score = (8 × 0.6 × 10000) / 2 = 24,000
→ HIGH RISK: Requires immediate mitigation before deployment`,
            output: 'Quantifying ethical risk helps prioritize fairness interventions in NLP pipelines.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Ethics in NLP with Python',
            code: `from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["machine learning is great", "deep learning with neural nets", "natural language processing"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
print("Ethics in NLP — TF-IDF shape:", X.shape)
print("Vocabulary sample:", vec.get_feature_names_out()[:6])`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Understanding distinctions between key ethical concepts in NLP.',
          table: {
            headers: [
              'Concept',
              'Definition',
              'NLP Example'
            ],
            rows: [
              [
                'Deontology',
                'Duty-based ethics; rules are absolute',
                'Never generate hate speech, regardless of context'
              ],
              [
                'Consequentialism',
                'Outcome-based ethics; results matter most',
                'Allow synthetic data generation if net benefit is positive'
              ],
              [
                'Virtue Ethics',
                'Character-based; what would a good developer do?',
                'Build transparency into models because it is the right thing to do'
              ],
              [
                'Fairness',
                'Equal treatment across groups',
                'Ensure equal sentiment accuracy across demographic groups'
              ],
              [
                'Justice',
                'Equitable distribution of benefits and burdens',
                'Do not deploy systems that only work well for majority languages'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating ethics as an afterthought (fix: integrate ethical review at every stage — data collection, model design, training, evaluation, and deployment)',
            'Mistake 2: Assuming neutral technology (fix: recognize that all NLP systems encode values and biases from their creators, training data, and deployment contexts; there is no purely neutral language model)',
            'Mistake 3: Using aggregate metrics to hide disparities (fix: report performance broken down by demographic groups, languages, and user populations; a 95% average accuracy can mask 60% accuracy for minority dialects)',
            'Mistake 4: Ignoring downstream harms (fix: conduct impact assessments that examine how your NLP system could be misused or cause unintended consequences in real-world contexts)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Ethical NLP principles guide responsible deployment across industries.',
          list: [
            'Content moderation: Platforms use NLP to detect harmful content while balancing free expression; ethical design requires transparent policies and appeal mechanisms',
            'Healthcare chatbots: Medical NLP systems must provide safe, accurate information; ethical standards require clinical validation and clear disclaimers about limitations',
            'Legal document analysis: NLP tools assisting lawyers must maintain confidentiality and avoid substituting for human judgment in high-stakes decisions',
            'Educational tools: Tutoring systems should enhance rather than replace human educators, with attention to accessibility for students with disabilities',
            'Journalism and fact-checking: Automated fact-checking systems must signal uncertainty clearly and avoid amplifying existing media biases'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Ethics in NLP governs how language AI should be developed and used responsibly',
            'Key frameworks include deontology, consequentialism, virtue ethics, fairness, and justice',
            'Ethical risk can be assessed using severity, probability, affected population, and mitigation factors',
            'Common mistakes include treating ethics as an afterthought, assuming neutrality, hiding disparities in aggregate metrics, and ignoring downstream harms',
            'Real-world applications include content moderation, healthcare chatbots, legal analysis, education, and journalism'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the three main ethical frameworks discussed in NLP ethics?
Ans: Deontology (duty-based), consequentialism (outcome-based), and virtue ethics (character-based).`,
            `Q2: Why is aggregate accuracy a potentially misleading metric for fairness?
Ans: High average accuracy can mask significantly lower performance for minority groups, languages, or dialects.`,
            `Q3: Name three real-world domains where ethical NLP principles are essential.
Ans: Content moderation, healthcare chatbots, legal document analysis, educational tools, and automated fact-checking.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Ethics in NLP</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Ethics in NLP")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'bias-nlp': {
      title: 'Bias in NLP',
      subtitle: 'Identifying, measuring, and mitigating unfairness in language models',
      sections: [
        {
          heading: 'What is Bias in NLP?',
          text: '<strong>Bias in NLP</strong> refers to systematic unfairness in how language models process, represent, or generate text for different demographic groups. Bias can manifest as stereotypes, underrepresentation, disparate performance, or harmful associations embedded in model behavior.',
          list: [
            'Data bias: Training corpora reflect historical inequalities, stereotypes, and underrepresentation of minority groups, languages, and perspectives',
            'Algorithmic bias: Model architectures and optimization objectives may amplify existing patterns or learn spurious correlations',
            'Deployment bias: Systems applied in contexts different from their training environment may produce unfair outcomes for unexpected user populations',
            'Intersectional bias: Bias compounds across multiple identity dimensions (race, gender, class, age, disability) creating unique harms for multiply marginalized groups'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Bias in NLP</strong> refers to systematic unfairness in how language models process, represent, or generate text for different demographic groups. Bias can manifest as stereotypes, underrepresentation, disparate performance, or harmful associations embedded in model behavior. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Bias in NLP</strong> refers to systematic unfairness in how language models process, represent, or generate text for different demographic groups. Bias can manifest as stereotypes, underrepresentation, disparate performance, or harmful associations embedded in model behavior. Data bias: Training corpora reflect historical inequalities, stereotypes, and underrepresentation of minority groups, languages, and perspectives Algorithmic bias: Model architectures and optimization objectives may amplify existing patterns or learn spurious correlations Deployment bias: Systems applied in contexts different from their training environment may produce unfair outcomes for unexpected user populations Intersectional bias: Bias compounds across multiple identity dimensions (race, gender, class, age, disability) creating unique harms for multiply marginalized groups</p>',
            '<p>You use bias in nlp when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Bias in NLP

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Bias in NLP sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The <strong>equalized odds</strong> fairness metric ensures a model performs equally well across groups.',
          example: {
            title: 'Measuring Disparate Performance',
            code: `Equalized Odds requires:
  TPR(Group A) = TPR(Group B)
  FPR(Group A) = FPR(Group B)

Where:
  TPR = TP / (TP + FN)  (True Positive Rate)
  FPR = FP / (FP + TN)  (False Positive Rate)

Example: Toxicity classifier
  Group A (dominant dialect):
    TPR = 0.92, FPR = 0.08
  Group B (minority dialect):
    TPR = 0.71, FPR = 0.23

Analysis:
  TPR gap: 0.92 - 0.71 = 0.21
  FPR gap: 0.23 - 0.08 = 0.15
  → Violates equalized odds
  → Minority dialect speakers more likely to be falsely flagged`,
            output: 'Disparate TPR and FPR across groups indicate unfair classification performance.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Bias in NLP with Python',
            code: `from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["machine learning is great", "deep learning with neural nets", "natural language processing"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
print("Bias in NLP — TF-IDF shape:", X.shape)
print("Vocabulary sample:", vec.get_feature_names_out()[:6])`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Types of bias and their sources in NLP systems.',
          table: {
            headers: [
              'Bias Type',
              'Source',
              'Example in NLP'
            ],
            rows: [
              [
                'Selection Bias',
                'Non-representative training data',
                'Corpus dominated by news and Wikipedia underrepresents informal speech'
              ],
              [
                'Historical Bias',
                'Past inequalities encoded in data',
                'Word embeddings associate "doctor" with "he" and "nurse" with "she"'
              ],
              [
                'Measurement Bias',
                'Flawed feature or label construction',
                'Sentiment labels assigned by majority-culture annotators misread minority expressions'
              ],
              [
                'Aggregation Bias',
                'One-size-fits-all model for distinct groups',
                'A single sentiment model for all English dialects performs poorly on AAVE'
              ],
              [
                'Evaluation Bias',
                'Benchmarks that do not represent all users',
                'GLUE benchmark dominated by standard American English text'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Thinking debiasing is a one-time fix (fix: bias is dynamic; continuous monitoring, retraining, and community feedback loops are necessary as language and social norms evolve)',
            'Mistake 2: Removing protected attributes from input and declaring fairness (fix: proxy variables like zip code, school name, or language patterns can reconstruct race or gender; fairness requires examining outcomes, not just inputs)',
            'Mistake 3: Using small or homogeneous test sets (fix: evaluate on diverse, representative benchmarks that include minority dialects, languages, and demographic groups relevant to your deployment context)',
            'Mistake 4: Treating fairness as purely technical (fix: bias is fundamentally a sociotechnical problem; involve affected communities, social scientists, and domain experts in defining what fairness means for your application)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Bias mitigation strategies are essential across NLP applications.',
          list: [
            'Hiring and recruitment: Resume parsers and chatbots must be audited for gender, racial, and socioeconomic bias; blind evaluation protocols and diverse training data reduce disparate impact',
            'Criminal justice: Risk assessment NLP tools have faced scrutiny for racial bias; fairer alternatives use carefully curated features and regularization for demographic parity',
            'Healthcare: Clinical NLP systems trained on predominantly majority-population data perform worse for minority patients; addressing this requires inclusive data collection and subgroup evaluation',
            'Automated moderation: Content filters disproportionately flag minority dialects as toxic; dialect-aware training and human-in-the-loop review improve fairness',
            'Machine translation: Low-resource languages receive lower-quality translation; bias mitigation involves expanding parallel corpora and developing language-specific evaluation metrics'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Bias in NLP is systematic unfairness toward demographic groups in language models',
            'Major bias types include selection, historical, measurement, aggregation, and evaluation bias',
            'Equalized odds requires equal TPR and FPR across groups',
            'Common mistakes include treating debiasing as one-time, removing protected attributes naively, using homogeneous test sets, and ignoring sociotechnical dimensions',
            'Real-world applications include hiring tools, criminal justice risk assessment, healthcare NLP, content moderation, and machine translation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the three levels at which NLP bias can originate?
Ans: Data bias (training corpora), algorithmic bias (model architecture), and deployment bias (context mismatch).`,
            `Q2: Explain why removing protected attributes from input does not guarantee fairness.
Ans: Proxy variables can reconstruct protected attributes; fairness must be evaluated on outcomes, not just inputs.`,
            `Q3: What does equalized odds require in a classification system?
Ans: Equal true positive rates and equal false positive rates across all demographic groups.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Bias in NLP</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Bias in NLP")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'privacy-nlp': {
      title: 'Privacy in NLP',
      subtitle: 'Protecting sensitive information in language data and models',
      sections: [
        {
          heading: 'What is Privacy in NLP?',
          text: '<strong>Privacy in NLP</strong> encompasses techniques, policies, and design choices that protect sensitive personal information in textual data and prevent language models from inadvertently exposing, memorizing, or leaking private details about individuals.',
          list: [
            'Text data is particularly privacy-sensitive: emails, medical records, chat logs, and social media posts contain names, addresses, health information, financial details, and relationship data',
            'Large language models can memorize training data, potentially regurgitating private information when prompted appropriately',
            'NLP systems often process data in the cloud, creating risks of interception, unauthorized access, and data breaches',
            'Privacy-preserving NLP balances utility (model performance) with privacy protection, requiring careful architectural and procedural choices'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Privacy in NLP</strong> encompasses techniques, policies, and design choices that protect sensitive personal information in textual data and prevent language models from inadvertently exposing, memorizing, or leaking private details about individuals. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Privacy in NLP</strong> encompasses techniques, policies, and design choices that protect sensitive personal information in textual data and prevent language models from inadvertently exposing, memorizing, or leaking private details about individuals. Text data is particularly privacy-sensitive: emails, medical records, chat logs, and social media posts contain names, addresses, health information, financial details, and relationship data Large language models can memorize training data, potentially regurgitating private information when prompted appropriately NLP systems often process data in the cloud, creating risks of interception, unauthorized access, and data breaches Privacy-preserving NLP balances utility (model performance) with privacy protection, requiring careful architectural and procedural choices</p>',
            '<p>You use privacy in nlp when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Privacy in NLP

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Privacy in NLP sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: '<strong>Differential privacy</strong> provides a mathematical guarantee that model training does not reveal whether any individual was in the dataset.',
          example: {
            title: 'Differentially Private SGD',
            code: `Standard SGD:
  gₜ = ∇L(xᵢ, θ)
  θ ← θ - α · gₜ

Differentially Private SGD:
  1. Compute gradient per sample: gᵢ = ∇L(xᵢ, θ)
  2. Clip gradient: ḡᵢ = gᵢ / max(1, ||gᵢ||₂ / C)
  3. Add noise: g̃ = (1/B)Σ ḡᵢ + N(0, σ²C²I)
  4. Update: θ ← θ - α · g̃

Privacy guarantee (ε, δ):
  P[output|D] ≤ e^ε · P[output|D'] + δ

Where D and D' differ by one record.

Example:
  ε = 1.0, δ = 10⁻⁵
  → Strong privacy: output nearly identical
    whether any single person is included or not`,
            output: 'Differential privacy bounds information leakage about any individual.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Privacy in NLP with Python',
            code: `from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["machine learning is great", "deep learning with neural nets", "natural language processing"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
print("Privacy in NLP — TF-IDF shape:", X.shape)
print("Vocabulary sample:", vec.get_feature_names_out()[:6])`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Comparing privacy-preserving techniques for NLP.',
          table: {
            headers: [
              'Technique',
              'How It Works',
              'Strength',
              'Limitation'
            ],
            rows: [
              [
                'Anonymization',
                'Remove direct identifiers (names, IDs)',
                'Simple to implement',
                'Re-identification possible via linkage attacks'
              ],
              [
                'Pseudonymization',
                'Replace identifiers with tokens',
                'Preserves data structure',
                'Token mapping table is a vulnerability point'
              ],
              [
                'Differential Privacy',
                'Add noise to training/inference',
                'Mathematical privacy guarantee',
                'Reduces model utility; complex tuning'
              ],
              [
                'Federated Learning',
                'Train on local data; share only updates',
                'Data never leaves device',
                'Communication overhead; still vulnerable to inference attacks'
              ],
              [
                'Homomorphic Encryption',
                'Compute on encrypted text',
                'Strong security guarantee',
                'Extremely slow; impractical for large models'
              ],
              [
                'Synthetic Data',
                'Generate artificial text statistically similar to real',
                'No real individuals exposed',
                'May not capture rare but important patterns'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming anonymization is sufficient (fix: Netflix Prize and AOL search log cases showed that anonymized records can be re-identified by cross-referencing with external datasets; use differential privacy or k-anonymity with care)',
            'Mistake 2: Storing or logging user queries without encryption (fix: implement end-to-end encryption for all text inputs, minimize retention periods, and avoid logging sensitive query content in plain text)',
            'Mistake 3: Using pre-trained models on sensitive domains without auditing memorization (fix: test models for extractable memorization using membership inference attacks and prompt engineering before deploying in privacy-sensitive settings)',
            'Mistake 4: Ignoring inference-time privacy (fix: even if training data is private, model outputs can leak information through confidence scores, attention patterns, or generated completions; implement output filtering and access controls)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Privacy-preserving NLP is critical in sensitive domains.',
          list: [
            'Healthcare: Clinical NLP systems process patient records; privacy requirements mandate HIPAA compliance, on-premise deployment, or federated learning across hospitals without centralizing data',
            'Finance: Banking chatbots and fraud detection systems handle account numbers, transaction details, and personal identifiers; tokenization and secure multi-party computation protect customer data',
            'Legal: Attorney-client communications and discovery documents require strict confidentiality; NLP tools must operate within secure environments with audit trails and access controls',
            'Education: Student essays and communications contain personal information; educational NLP platforms must comply with regulations like FERPA and COPPA',
            'Workplace: Employee communications analyzed by sentiment or productivity tools raise surveillance concerns; transparent policies, consent mechanisms, and data minimization are essential'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Privacy in NLP protects sensitive personal information in text data and models',
            'Key risks include data memorization, cloud processing vulnerabilities, and re-identification attacks',
            'Differential privacy provides mathematical guarantees through noise addition and gradient clipping',
            'Privacy techniques include anonymization, pseudonymization, federated learning, homomorphic encryption, and synthetic data generation',
            'Real-world applications span healthcare, finance, legal, education, and workplace monitoring'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the core guarantee provided by differential privacy?
Ans: The output of a computation is nearly identical whether or not any single individual is included in the dataset.`,
            `Q2: Why is anonymization alone often insufficient for privacy protection?
Ans: Anonymized records can frequently be re-identified by linking with external datasets, as demonstrated in cases like the Netflix Prize.`,
            `Q3: Name three privacy-preserving techniques suitable for NLP applications.
Ans: Differential privacy, federated learning, homomorphic encryption, synthetic data generation, pseudonymization, and k-anonymity.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Privacy in NLP</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Privacy in NLP")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'future-nlp': {
      title: 'Future of NLP',
      subtitle: 'Emerging directions and challenges in language AI',
      sections: [
        {
          heading: 'What is the Future of NLP?',
          text: 'The <strong>future of NLP</strong> encompasses emerging research directions, technological advances, and societal challenges that will shape how language AI evolves over the coming decade. Key themes include multimodality, efficiency, inclusivity, reasoning, and governance.',
          list: [
            'Multimodal NLP: Integration of text with vision, audio, and sensor data enables richer understanding of human communication beyond written language',
            'Efficient and green AI: Reducing the computational and environmental cost of training and deploying large language models through distillation, pruning, and novel architectures',
            `Inclusive language technology: Expanding NLP to cover the world's 7,000+ languages, dialects, and sign languages rather than focusing on a dozen high-resource languages`,
            'Reasoning and factuality: Moving beyond pattern matching to systems that can reason logically, verify facts against knowledge sources, and acknowledge uncertainty'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>future of NLP</strong> encompasses emerging research directions, technological advances, and societal challenges that will shape how language AI evolves over the coming decade. Key themes include multimodality, efficiency, inclusivity, reasoning, and governance. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, The <strong>future of NLP</strong> encompasses emerging research directions, technological advances, and societal challenges that will shape how language AI evolves over the coming decade. Key themes include multimodality, efficiency, inclusivity, reasoning, and governance. Multimodal NLP: Integration of text with vision, audio, and sensor data enables richer understanding of human communication beyond written language Efficient and green AI: Reducing the computational and environmental cost of training and deploying large language models through distillation, pruning, and novel architectures Inclusive language technology: Expanding NLP to cover the world's 7,000+ languages, dialects, and sign languages rather than focusing on a dozen high-resource languages Reasoning and factuality: Moving beyond pattern matching to systems that can reason logically, verify facts against knowledge sources, and acknowledge uncertainty</p>`,
            '<p>You use future of nlp when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Future of NLP

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Future of NLP sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The <strong>scaling laws</strong> of language models predict how performance improves with compute, data, and parameters.',
          example: {
            title: 'Power-Law Scaling',
            code: `Loss ∝ C^(-α)  where C = compute (PFLOP-days)
Loss ∝ D^(-β)  where D = dataset size (tokens)
Loss ∝ N^(-γ)  where N = model parameters

Typical exponents:
  α ≈ 0.05, β ≈ 0.28, γ ≈ 0.07

Implications:
  • Doubling data reduces loss more than
    doubling parameters
  • Beyond ~1T tokens, returns diminish
  • Optimal allocation:
    compute ≈ 10 × parameters (in FLOPs)

Future challenge:
  We are running out of high-quality text data.
  Next frontier: synthetic data, multimodal data,
  and continuous learning from interaction.`,
            output: 'Scaling laws guide resource allocation but face data scarcity limits.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Future of NLP with Python',
            code: `from sklearn.feature_extraction.text import TfidfVectorizer

docs = ["machine learning is great", "deep learning with neural nets", "natural language processing"]
vec = TfidfVectorizer()
X = vec.fit_transform(docs)
print("Future of NLP — TF-IDF shape:", X.shape)
print("Vocabulary sample:", vec.get_feature_names_out()[:6])`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Current NLP versus emerging future paradigms.',
          table: {
            headers: [
              'Dimension',
              'Current NLP (2020s)',
              'Future NLP (2030s+)'
            ],
            rows: [
              [
                'Scale',
                'Billions of parameters, trillions of tokens',
                'Efficient small models; quality over quantity'
              ],
              [
                'Languages',
                '~100 high-resource languages dominate',
                'Thousands of languages, dialects, and endangered languages supported'
              ],
              [
                'Modality',
                'Primarily text',
                'Seamless text, speech, vision, gesture, and structured data integration'
              ],
              [
                'Reasoning',
                'Pattern matching and statistical association',
                'Explicit logical reasoning, causal inference, and verifiable claims'
              ],
              [
                'Deployment',
                'Cloud-based centralized APIs',
                'On-device, federated, and edge computing with privacy guarantees'
              ],
              [
                'Evaluation',
                'Static benchmarks (GLUE, SuperGLUE)',
                'Dynamic, real-world, and human-centered evaluation protocols'
              ],
              [
                'Alignment',
                'RLHF with small annotator pools',
                'Constitutional AI, democratic deliberation, and diverse value alignment'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming bigger models are always better (fix: emerging research shows smaller, well-trained models can match larger ones on specific tasks; efficiency, latency, and carbon cost matter as much as benchmark scores)',
            'Mistake 2: Ignoring low-resource languages (fix: the next billion internet users will primarily speak Indic, African, and Southeast Asian languages; building inclusive NLP requires intentional data collection and community partnership now)',
            'Mistake 3: Overhyping near-term artificial general intelligence (fix: current NLP systems lack true understanding, causal reasoning, and common sense; responsible communication about capabilities prevents misuse and misplaced trust)',
            'Mistake 4: Treating alignment as a solved problem (fix: RLHF and constitutional AI are initial steps; ongoing research into value pluralism, democratic input, and robust alignment is essential as models gain broader societal influence)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Future NLP directions will transform how we interact with technology.',
          list: [
            'Universal translation: Real-time, high-quality translation across all human languages will bridge communication gaps in diplomacy, healthcare, and education',
            'Scientific discovery: NLP systems that read, synthesize, and reason across millions of research papers will accelerate drug discovery, materials science, and climate research',
            `Personalized education: Adaptive tutoring systems that understand each learner's language, culture, and knowledge gaps will democratize quality education globally`,
            'Accessible technology: Speech-to-text, text-to-speech, and sign language recognition will empower people with disabilities to participate fully in digital life',
            'Democratic deliberation: Future NLP could help communities process diverse viewpoints, identify consensus, and surface underrepresented perspectives in policy discussions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'The future of NLP involves multimodality, efficiency, inclusivity, reasoning, and governance',
            'Scaling laws describe predictable relationships between compute, data, parameters, and performance',
            'Future paradigms shift from scale-focused to efficiency-focused, from text-only to multimodal, and from pattern matching to explicit reasoning',
            'Common mistakes include overvaluing model size, ignoring low-resource languages, overhyping AGI timelines, and treating alignment as solved',
            'Real-world applications include universal translation, scientific discovery, personalized education, accessible technology, and democratic deliberation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: According to scaling laws, which typically improves model performance more: doubling parameters or doubling training data?
Ans: Doubling training data typically reduces loss more than doubling parameters, as indicated by the larger scaling exponent for data.`,
            `Q2: Name three major differences between current NLP and future NLP paradigms.
Ans: Future NLP emphasizes efficiency over scale, thousands of languages instead of ~100, multimodal integration, explicit reasoning, on-device deployment, dynamic evaluation, and democratic alignment.`,
            `Q3: Why is it a mistake to treat AI alignment as a solved problem?
Ans: Current techniques like RLHF are initial steps; ongoing challenges include value pluralism, scalable oversight, and ensuring models remain aligned as they gain broader societal influence.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Future of NLP</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Future of NLP")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
