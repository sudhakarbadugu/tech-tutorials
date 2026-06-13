export const statsModule1Structure = {
  module1: {
    title: 'Module 1: Introduction to Statistics',
    topics: [
      { id: 'intro', title: 'Introduction to Statistics' },
      { id: 'data-types', title: 'Types of Data' },
      { id: 'descriptive-stats', title: 'Descriptive Statistics' },
      { id: 'probability-basics', title: 'Probability Basics' },
      { id: 'distributions', title: 'Probability Distributions' },
      { id: 'sampling', title: 'Sampling Methods' },
      { id: 'central-limit', title: 'Central Limit Theorem' },
      { id: 'confidence-intervals', title: 'Confidence Intervals' },
      { id: 'hypothesis-intro', title: 'Introduction to Hypothesis Testing' },
    ]
  }
};

export const statsModule1Content = {
  module1: {
    intro: {
      title: 'Introduction to Statistics',
      subtitle: 'The foundation of data science and informed decision-making',
      sections: [
        {
          heading: 'What is Statistics?',
          text: 'Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. It transforms raw numbers into actionable insights and underpins every field that relies on evidence.',
          list: [
            'Descriptive Statistics: summarize and describe data patterns',
            'Inferential Statistics: draw conclusions about populations from samples',
            'Probability: quantify uncertainty and predict outcomes',
            'Experimental Design: structure data collection for valid conclusions',
            'Statistical Modeling: build equations that represent real-world relationships'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The fundamental division of statistics guides how you approach any dataset.',
          example: {
            title: 'Example: Classifying a retail analysis',
            code: 'Dataset: 10,000 customer transactions\n\nDescriptive analysis:\n  - Average spend = $120\n  - Most frequent category = Electronics\n  - Spread (SD) = $45\n\nInferential analysis:\n  - Sample of 200 customers\n  - 95% CI for average spend: ($115, $125)\n  - Hypothesis test: Are male and female\n    spending patterns different?\n    p-value = 0.03 → Significant',
            output: 'Descriptive tells you what happened; inferential guesses what it means for the broader population.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Population vs sample is the most critical distinction in statistics.',
          table: {
            headers: ['Aspect', 'Population', 'Sample'],
            rows: [
              ['Definition', 'All members of a group', 'A subset of the population'],
              ['Parameters', 'Fixed but often unknown', 'Estimated from data'],
              ['Notation', 'μ (mean), σ (SD), N (size)', 'x̄ (mean), s (SD), n (size)'],
              ['When to use', 'Census or complete data', 'When full data is impractical'],
              ['Accuracy', 'Exact (if measured fully)', 'Contains sampling error']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating sample statistics as exact population values (fix: always report confidence intervals or margins of error)',
            'Mistake 2: Ignoring how data was collected (fix: check for bias, randomness, and representativeness before analysis)',
            'Mistake 3: Confusing correlation with causation (fix: use controlled experiments or causal inference methods to claim cause)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Statistics is invisible but everywhere in modern life.',
          list: [
            'Healthcare: clinical trials use statistics to prove drug effectiveness and safety',
            'Finance: risk models estimate default probabilities and portfolio losses',
            'Tech: A/B testing uses hypothesis testing to pick the better product design',
            'Government: census sampling and economic indicators guide policy decisions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Statistics = collecting, analyzing, and interpreting data',
            'Two branches: descriptive (summarize) and inferential (predict)',
            'Population = all members; sample = subset used for inference',
            'Always question how data was collected before trusting conclusions',
            'Statistics turns uncertainty into measurable confidence'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between descriptive and inferential statistics?\nAns: Descriptive summarizes observed data; inferential generalizes from a sample to a population.',
            'Q2: Why do we use samples instead of populations?\nAns: Populations are often too large, expensive, or impossible to measure completely.',
            'Q3: What notation represents the population mean vs the sample mean?\nAns: Population mean = μ; sample mean = x̄.'
          ]
        }
      ]
    },
    'data-types': {
      title: 'Types of Data',
      subtitle: 'Classifying data correctly is the first step to choosing the right analysis',
      sections: [
        {
          heading: 'What are Data Types?',
          text: 'Data comes in different forms, and each form demands different statistical tools. Choosing the wrong method for your data type leads to meaningless results.',
          list: [
            'Numerical (Continuous): can take any value within a range — height, temperature, time',
            'Numerical (Discrete): countable whole numbers — number of students, defective items',
            'Categorical (Nominal): labels without natural order — gender, color, blood type',
            'Categorical (Ordinal): ordered categories — ratings, education levels, pain scales',
            'Binary: exactly two categories — yes/no, pass/fail, 0/1'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The measurement level determines which operations and statistics are valid.',
          example: {
            title: 'Example: Valid operations per data type',
            code: 'Nominal (colors: red, blue, green):\n  Valid: count, mode\n  Invalid: mean, median, ranking\n\nOrdinal (ratings: Poor < Fair < Good):\n  Valid: median, percentiles, ranking\n  Invalid: mean (distance unknown)\n\nInterval (temperature °C):\n  Valid: mean, SD, addition/subtraction\n  Invalid: ratio (20°C is not "twice" 10°C)\n\nRatio (height, weight, income):\n  Valid: all operations including ratios\n  "Twice as tall" is meaningful',
            output: 'Higher measurement levels allow more powerful analyses.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'The numerical vs categorical distinction is fundamental to choosing tests.',
          table: {
            headers: ['Aspect', 'Numerical', 'Categorical'],
            rows: [
              ['Values', 'Numbers (continuous or discrete)', 'Labels or categories'],
              ['Operations', 'Arithmetic (add, subtract, average)', 'Counting and grouping'],
              ['Visualization', 'Histograms, box plots, scatter plots', 'Bar charts, pie charts'],
              ['Central tendency', 'Mean, median', 'Mode, proportions'],
              ['Example tests', 't-test, ANOVA, correlation', 'Chi-square, proportions test']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Computing the mean of ordinal data like Likert scales (fix: report median and interquartile range instead)',
            'Mistake 2: Treating categorical IDs as numbers (fix: zip codes and phone numbers are labels, not quantities)',
            'Mistake 3: Using histograms for categorical variables (fix: use bar charts; histograms are for numerical data)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Data type decisions appear in every domain.',
          list: [
            'Healthcare: blood pressure (continuous) vs blood type (nominal) need completely different summaries',
            'E-commerce: product ratings (ordinal) should not be averaged naively across all products',
            'HR: years of experience (discrete) vs salary bands (ordinal) determine the right regression approach'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Numerical = quantities (continuous or discrete)',
            'Categorical = labels (nominal or ordinal)',
            'Measurement level limits which statistics are valid',
            'Never average ordinal or categorical values blindly',
            'Match your visualization and test to your data type'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Is temperature in Celsius ratio or interval data?\nAns: Interval — 0°C is not an absence of temperature, so ratios are not meaningful.',
            'Q2: What is the best measure of central tendency for ordinal data?\nAns: Median (or mode); the mean is not appropriate because distances between categories are unknown.',
            'Q3: Give an example of discrete numerical data.\nAns: Number of cars in a parking lot, students in a class, or goals scored in a match.'
          ]
        }
      ]
    },
    'descriptive-stats': {
      title: 'Descriptive Statistics',
      subtitle: 'Summarizing data with numbers that tell a story',
      sections: [
        {
          heading: 'What are Descriptive Statistics?',
          text: 'Descriptive statistics condense a dataset into a few meaningful numbers. They answer: What is typical? How spread out is the data? What does the distribution look like?',
          list: [
            'Measures of Central Tendency: mean, median, mode — what is the center?',
            'Measures of Dispersion: range, variance, standard deviation, IQR — how spread out?',
            'Measures of Shape: skewness, kurtosis — is it symmetric? Heavy-tailed?',
            'Percentiles and Quartiles: where does a value stand relative to others?'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each measure of center behaves differently with skewed data and outliers.',
          example: {
            title: 'Example: Mean vs Median with an outlier',
            code: 'Income data (in thousands):\n  [30, 35, 40, 42, 45, 48, 50, 500]\n\nMean:\n  x̄ = (30+35+40+42+45+48+50+500) / 8\n    = 790 / 8 = 98.75\n\nMedian:\n  Sorted: [30, 35, 40, 42, 45, 48, 50, 500]\n  Median = (42 + 45) / 2 = 43.5\n\nMode:\n  All unique → no mode',
            output: 'The outlier (500) inflates the mean to 98.75, but the median stays at 43.5 — a more representative center.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Mean, median, and mode respond differently to data shape.',
          table: {
            headers: ['Aspect', 'Mean', 'Median', 'Mode'],
            rows: [
              ['Calculation', 'Sum divided by count', 'Middle value', 'Most frequent value'],
              ['Sensitive to outliers', 'Yes', 'No', 'No'],
              ['Best for', 'Symmetric distributions', 'Skewed distributions', 'Categorical data'],
              ['Can be non-unique', 'Always one value', 'Always one value', 'Can be multiple'],
              ['Uses all data', 'Yes', 'No (only middle)', 'No (only frequency)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using mean for skewed income or housing price data (fix: report median alongside mean, or use median as primary)',
            'Mistake 2: Ignoring standard deviation when comparing means (fix: a mean of 50 with SD=5 is very different from mean=50 with SD=50)',
            'Mistake 3: Reporting only the mean without any spread measure (fix: always pair central tendency with a dispersion measure)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Descriptive statistics power dashboards and reports.',
          list: [
            'Business KPIs: average revenue per user (ARPU) and its standard deviation reveal consistency',
            'Education: median test scores are fairer than mean scores when some students score extremely low',
            'Healthcare: IQR of patient wait times helps set realistic service level targets'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Mean = average; best for symmetric data without outliers',
            'Median = middle value; robust to outliers and skew',
            'Mode = most frequent; useful for categorical data',
            'Standard deviation = typical distance from the mean',
            'IQR = spread of the middle 50%; robust measure',
            'Always pair center with spread for a complete summary'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When is the median preferred over the mean?\nAns: When data is skewed or contains extreme outliers.',
            'Q2: What does standard deviation measure?\nAns: The average distance of data points from the mean.',
            'Q3: If a dataset is right-skewed, where does the mean lie relative to the median?\nAns: The mean is pulled toward the tail and is greater than the median.'
          ]
        }
      ]
    },
    'probability-basics': {
      title: 'Probability Basics',
      subtitle: 'Quantifying uncertainty with mathematical rigor',
      sections: [
        {
          heading: 'What is Probability?',
          text: 'Probability measures the likelihood of an event occurring. It provides the mathematical foundation for statistical inference, machine learning, and decision-making under uncertainty.',
          list: [
            'Classical Probability: favorable outcomes divided by all possible outcomes (coin flip, dice roll)',
            'Empirical Probability: relative frequency observed in data (30 rainy days out of 365)',
            'Subjective Probability: personal belief based on experience (team has 70% chance to win)',
            'Axiomatic Probability: formal mathematical system (Kolmogorov axioms)',
            'Range: always between 0 (impossible) and 1 (certain)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core rules of probability govern how to combine event likelihoods.',
          example: {
            title: 'Example: Medical screening test',
            code: 'Given:\n  P(Disease) = 0.01\n  P(Test+|Disease) = 0.95\n  P(Test+|No Disease) = 0.05\n\nFind P(Disease|Test+):\n\nStep 1: Total probability of positive test\n  P(Test+) = 0.95×0.01 + 0.05×0.99\n          = 0.0095 + 0.0495 = 0.059\n\nStep 2: Bayes theorem\n  P(D|Test+) = 0.95×0.01 / 0.059\n             ≈ 0.161 (16.1%)',
            output: 'Even with a positive test, there is only a 16.1% chance of actually having the disease — because the disease is rare.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Independence vs mutual exclusivity is often confused.',
          table: {
            headers: ['Aspect', 'Independent Events', 'Mutually Exclusive Events'],
            rows: [
              ['Definition', 'One does not affect the other', 'Cannot happen at the same time'],
              ['P(A ∩ B)', 'P(A) × P(B)', '0'],
              ['Example', 'Two separate coin flips', 'Heads and tails on one flip'],
              ['P(A|B)', 'P(A)', '0'],
              ['Can both occur', 'Yes', 'No']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming conditional probability is symmetric (fix: P(A|B) ≠ P(B|A); use Bayes theorem to convert between them)',
            'Mistake 2: Treating dependent events as independent (fix: check if one event changes the probability of the other; use P(A ∩ B) = P(A) × P(B|A))',
            'Mistake 3: Confusing high test sensitivity with high positive predictive value (fix: always account for base rate using Bayes theorem)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Probability drives decisions across industries.',
          list: [
            'Insurance: premium pricing is based on probability of claims from historical data',
            'Medicine: diagnostic tests are evaluated using sensitivity, specificity, and predictive values',
            'Finance: Value at Risk (VaR) estimates the probability of portfolio losses exceeding a threshold'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Probability ranges from 0 (impossible) to 1 (certain)',
            'Addition rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)',
            'Multiplication rule: P(A ∩ B) = P(A) × P(B|A)',
            'Independence means P(A|B) = P(A); mutual exclusivity means P(A ∩ B) = 0',
            'Bayes theorem converts between P(A|B) and P(B|A)',
            'Base rate matters: rare diseases yield surprisingly low positive predictive values'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: If two events are independent, what is P(A ∩ B)?\nAns: P(A) × P(B).',
            'Q2: What is the probability of getting at least one head in two coin flips?\nAns: 1 - P(both tails) = 1 - 0.25 = 0.75 or 75%.',
            'Q3: Why is P(Disease|Positive Test) often lower than expected?\nAns: Because the disease prevalence (base rate) is usually low; false positives from the healthy majority inflate the total positives.'
          ]
        }
      ]
    },
    distributions: {
      title: 'Probability Distributions',
      subtitle: 'Mathematical models that describe how data is spread',
      sections: [
        {
          heading: 'What are Probability Distributions?',
          text: 'A probability distribution describes the likelihood of all possible outcomes for a random variable. It is the bridge between probability theory and real-world data patterns.',
          list: [
            'Discrete Distributions: outcomes are countable — binomial, Poisson, geometric',
            'Continuous Distributions: outcomes take any value in a range — normal, uniform, exponential',
            'PMF (Probability Mass Function): gives P(X = x) for discrete variables',
            'PDF (Probability Density Function): gives relative likelihood for continuous variables',
            'CDF (Cumulative Distribution Function): gives P(X ≤ x) for all variables'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The normal distribution is the most important due to the Central Limit Theorem.',
          example: {
            title: 'Example: Normal distribution and the 68-95-99.7 rule',
            code: 'IQ scores: X ~ N(μ=100, σ=15)\n\n68% of people:\n  100 ± 15 → IQ between 85 and 115\n\n95% of people:\n  100 ± 30 → IQ between 70 and 130\n\n99.7% of people:\n  100 ± 45 → IQ between 55 and 145\n\nZ-score for IQ=130:\n  Z = (130 - 100) / 15 = 2.0\n  P(X > 130) ≈ 2.5%',
            output: 'The 68-95-99.7 rule lets you estimate probabilities without a calculator.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Discrete and continuous distributions require different tools.',
          table: {
            headers: ['Aspect', 'Discrete', 'Continuous'],
            rows: [
              ['Random variable', 'Countable values', 'Any value in a range'],
              ['Probability at a point', 'P(X = x) is meaningful', 'P(X = x) = 0 (use intervals)'],
              ['Function type', 'PMF: probability mass', 'PDF: probability density'],
              ['Sum/Integral', 'Σ PMF(x) = 1', '∫ PDF(x) dx = 1'],
              ['Examples', 'Binomial, Poisson, Bernoulli', 'Normal, Uniform, Exponential']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Asking for P(X = x) on a continuous variable (fix: use P(a < X < b); probability at any single point is zero)',
            'Mistake 2: Using normal distribution for highly skewed or bounded data (fix: check skewness; consider log-normal or beta distributions)',
            'Mistake 3: Applying binomial conditions where trials are not independent (fix: verify fixed n, two outcomes, constant p, and independence)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Distributions model real phenomena.',
          list: [
            'Binomial: A/B test conversions — how many users click out of 1000?',
            'Poisson: call center arrivals — average 5 calls per hour; what is P(>8 calls)?',
            'Normal: manufacturing tolerances — part dimensions cluster around the target',
            'Exponential: device reliability — time until failure with constant hazard rate'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'PMF for discrete; PDF for continuous; CDF works for both',
            'Normal distribution: symmetric, bell-shaped, defined by μ and σ',
            '68-95-99.7 rule: quick probability estimates for normal data',
            'Binomial: n independent trials with two outcomes each',
            'Poisson: rare events in fixed intervals or large populations',
            'Always check if your data matches the distribution assumptions'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the probability of exactly 3 successes in 10 Bernoulli trials with p=0.2?\nAns: C(10,3) × 0.2³ × 0.8⁷ ≈ 120 × 0.008 × 0.2097 ≈ 0.201.',
            'Q2: Why is P(X = 5) = 0 for a continuous random variable?\nAns: Because there are infinitely many points; probability is defined only over intervals.',
            'Q3: What percentage of data falls within 2 standard deviations of the mean in a normal distribution?\nAns: Approximately 95%.'
          ]
        }
      ]
    },
    sampling: {
      title: 'Sampling Methods',
      subtitle: 'Selecting representative subsets from a population',
      sections: [
        {
          heading: 'What is Sampling?',
          text: 'Sampling is the process of selecting a subset from a population to estimate population characteristics. A good sample is representative — it mirrors the population in key attributes.',
          list: [
            'Simple Random Sampling: every member has an equal chance; most unbiased',
            'Stratified Sampling: divide into homogeneous groups (strata), sample from each',
            'Systematic Sampling: select every k-th member from an ordered list',
            'Cluster Sampling: divide into clusters, randomly select entire clusters',
            'Convenience Sampling: select readily available subjects; prone to bias'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Sample size determines the precision of your estimates.',
          example: {
            title: 'Example: Standard error of the mean',
            code: 'Population: μ = 500, σ = 100\n\nSample size n = 25:\n  SE = σ / √n = 100 / 5 = 20\n  Margin of error (95%): 1.96 × 20 ≈ 39\n\nSample size n = 100:\n  SE = σ / √n = 100 / 10 = 10\n  Margin of error (95%): 1.96 × 10 ≈ 20\n\nQuadrupling sample size\nhalves the margin of error.',
            output: 'Larger samples give tighter estimates, but with diminishing returns.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Random sampling vs non-random sampling determines whether you can generalize.',
          table: {
            headers: ['Aspect', 'Probability Sampling', 'Non-Probability Sampling'],
            rows: [
              ['Selection', 'Random, known probabilities', 'Convenience, judgment, quota'],
              ['Bias', 'Minimized', 'Often present, hard to measure'],
              ['Generalization', 'Valid to population', 'Risky or invalid'],
              ['Cost/Effort', 'Higher', 'Lower'],
              ['When to use', 'Research, surveys, experiments', 'Exploratory, pilot studies']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using convenience samples and treating results as population-level (fix: only generalize from probability samples; report limitations otherwise)',
            'Mistake 2: Ignoring non-response bias (fix: track who did not respond; compare early vs late responders as a proxy)',
            'Mistake 3: Sampling too small for the subgroup you want to analyze (fix: plan sample size for the smallest subgroup of interest, not just the total)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Sampling is everywhere in practice.',
          list: [
            'Election polls: stratified sampling by age, region, and income improves prediction accuracy',
            'Quality control: systematic sampling of every 50th item from a production line',
            'Clinical trials: stratified randomization ensures balanced treatment groups by disease severity',
            'Market research: cluster sampling reduces costs when the population is geographically spread'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Simple random = every member equally likely; gold standard',
            'Stratified = sample from each subgroup; improves precision',
            'Systematic = every k-th item; simple but risks periodic patterns',
            'Cluster = sample groups, not individuals; cheaper but less precise',
            'Standard error = σ/√n; larger n → smaller error',
            'Non-probability samples cannot be reliably generalized'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main advantage of stratified sampling over simple random sampling?\nAns: It ensures representation from all subgroups, often improving precision.',
            'Q2: If you quadruple sample size, what happens to the standard error?\nAns: It is halved, because SE is proportional to 1/√n.',
            'Q3: Why is convenience sampling problematic for inference?\nAns: It introduces selection bias; the sample is unlikely to represent the population.'
          ]
        }
      ]
    },
    'central-limit': {
      title: 'Central Limit Theorem',
      subtitle: 'Why sample means become normal — the backbone of inference',
      sections: [
        {
          heading: 'What is the Central Limit Theorem?',
          text: 'The Central Limit Theorem (CLT) states that the sampling distribution of the mean approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution.',
          list: [
            'Applies to sample means, sums, and proportions',
            'Population can be skewed, uniform, bimodal, or anything else',
            'The magic number is typically n ≥ 30 for means',
            'For proportions, np ≥ 10 and n(1-p) ≥ 10 is the rule',
            'CLT is why we can use normal-based confidence intervals and tests'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The sampling distribution has its own mean and standard deviation.',
          example: {
            title: 'Example: Uniform population → normal sampling distribution',
            code: 'Population: Uniform on [0, 10]\n  μ = 5, σ = 10/√12 ≈ 2.89\n\nTake samples of n = 30:\n  Mean of sample means = μ = 5\n  Standard error = σ/√n = 2.89/√30 ≈ 0.53\n\nResult:\n  Even though the population is uniform,\n  the distribution of x̄ across 1000 samples\n  is approximately N(5, 0.53²).\n\n95% of sample means fall within:\n  5 ± 1.96 × 0.53 → (3.96, 6.04)',
            output: 'The CLT guarantees normality of sample means, enabling z-tests and confidence intervals.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Population distribution vs sampling distribution are two different things.',
          table: {
            headers: ['Aspect', 'Population Distribution', 'Sampling Distribution of x̄'],
            rows: [
              ['What it describes', 'Values of individual data points', 'Values of sample means'],
              ['Shape', 'Can be any shape', 'Approximately normal for large n'],
              ['Mean', 'μ', 'μ (same as population)'],
              ['Spread', 'σ', 'σ/√n (standard error)'],
              ['Depends on n', 'No', 'Yes — larger n = tighter spread']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying CLT to individual data points instead of sample statistics (fix: CLT applies to means, sums, and proportions — not to raw observations)',
            'Mistake 2: Using n < 30 with heavily skewed data and assuming normality (fix: for small samples, use t-distribution or non-parametric methods if skewness is extreme)',
            'Mistake 3: Forgetting that CLT requires independent observations (fix: time series and clustered data violate independence; use adjusted methods)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'The CLT justifies most statistical inference in practice.',
          list: [
            'Quality control: average batch weights are normally distributed, enabling control charts',
            'Polling: sample proportions of voter preference are approximately normal, allowing margin-of-error calculations',
            'Finance: portfolio returns are sums of individual asset returns; CLT justifies normal models for risk',
            'A/B testing: conversion rate differences rely on CLT to compute p-values and confidence intervals'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CLT: sample means become normal as n increases, regardless of population shape',
            'Mean of sample means = population mean μ',
            'Standard error = σ/√n',
            'Rule of thumb: n ≥ 30 for means; np ≥ 10 and n(1-p) ≥ 10 for proportions',
            'CLT applies to sample statistics, not individual observations',
            'Independence of observations is required for CLT to hold'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Does the CLT require the population to be normally distributed?\nAns: No — the CLT works for any population shape given a large enough sample size.',
            'Q2: If population SD = 20 and n = 64, what is the standard error?\nAns: SE = 20/√64 = 20/8 = 2.5.',
            'Q3: Why is the CLT important for confidence intervals?\nAns: It guarantees that sample means are approximately normal, so we can use z/t tables to construct intervals.'
          ]
        }
      ]
    },
    'confidence-intervals': {
      title: 'Confidence Intervals',
      subtitle: 'Quantifying uncertainty around sample estimates',
      sections: [
        {
          heading: 'What is a Confidence Interval?',
          text: 'A confidence interval (CI) is a range of values, derived from sample data, that is likely to contain the true population parameter. It replaces a single point estimate with a range that reflects sampling uncertainty.',
          list: [
            '95% CI means: if we repeated the sampling 100 times, ~95 intervals would contain the true parameter',
            'Wider intervals = more confidence but less precision',
            'Narrower intervals = more precision but lower confidence',
            'Centered on the sample statistic (mean, proportion, etc.)',
            'Width depends on sample size, variability, and confidence level'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The general form is estimate ± margin of error.',
          example: {
            title: 'Example: 95% confidence interval for a mean',
            code: 'Sample: n = 36, x̄ = 52, s = 12\n\nStandard error:\n  SE = s / √n = 12 / 6 = 2\n\n95% CI (using z = 1.96):\n  CI = 52 ± 1.96 × 2\n     = 52 ± 3.92\n     = (48.08, 55.92)\n\nInterpretation:\n  We are 95% confident the\n  true population mean lies\n  between 48.08 and 55.92.',
            output: 'The interval widens with higher confidence or more variability, and narrows with larger samples.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Z-interval vs t-interval depends on what you know about the population.',
          table: {
            headers: ['Aspect', 'Z-Interval', 'T-Interval'],
            rows: [
              ['When to use', 'σ known, or large n', 'σ unknown, small n'],
              ['Distribution', 'Standard normal', "Student's t-distribution"],
              ['Critical value', 'z (e.g., 1.96 for 95%)', 't with df = n-1'],
              ['Assumption', 'Population normal or n large', 'Population approximately normal'],
              ['Typical use', 'Proportions, large samples', 'Means with small samples']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Saying "there is a 95% probability the true mean is in this interval" (fix: the interval either contains it or not; 95% refers to the method, not this specific interval)',
            'Mistake 2: Using z when n is small and σ is unknown (fix: use t-distribution; it accounts for extra uncertainty from estimating σ)',
            'Mistake 3: Making CIs too narrow by increasing confidence (fix: higher confidence requires wider intervals; 99% CI is wider than 95%)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Confidence intervals appear in every field that reports estimates.',
          list: [
            'Polling: "Candidate A leads 48% ± 3%" is a confidence interval for a proportion',
            'Medicine: drug efficacy reported as "reduced symptoms by 15% (95% CI: 10% to 20%)"',
            'Finance: expected return estimates include confidence bands to show risk',
            'Manufacturing: tolerance intervals (a variant) ensure parts meet specifications'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CI = estimate ± (critical value) × (standard error)',
            'Higher confidence level → wider interval',
            'Larger sample size → narrower interval',
            'Use z for large samples or known σ; use t for small samples with unknown σ',
            'Interpretation is about the method, not a single interval',
            'CIs are preferable to p-values for reporting effect sizes'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What happens to the width of a confidence interval if you increase the sample size?\nAns: It narrows, because standard error decreases as n increases.',
            'Q2: Why do we use the t-distribution for small samples?\nAns: Because estimating σ from the sample adds extra uncertainty; t has heavier tails to account for this.',
            'Q3: A 99% CI is calculated as (10, 20). Can we say P(population mean in [10,20]) = 0.99?\nAns: No — the population mean is fixed; the 99% refers to the long-run performance of the method, not this specific interval.'
          ]
        }
      ]
    },
    'hypothesis-intro': {
      title: 'Introduction to Hypothesis Testing',
      subtitle: 'Making decisions with data using a structured framework',
      sections: [
        {
          heading: 'What is Hypothesis Testing?',
          text: 'Hypothesis testing is a formal procedure for evaluating claims about population parameters using sample data. It provides a structured, objective way to decide whether evidence supports or contradicts a belief.',
          list: [
            'Null Hypothesis (H₀): the default claim to be tested (e.g., no effect, no difference)',
            'Alternative Hypothesis (H₁): the claim we seek evidence for (e.g., there is an effect)',
            'Test Statistic: a number summarizing how far the sample result is from H₀',
            'p-value: probability of observing the sample result (or more extreme) if H₀ is true',
            'Significance Level (α): threshold for rejection — typically 0.05'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The p-value guides the decision: compare it to α.',
          example: {
            title: 'Example: One-sample z-test',
            code: 'Claim: Average battery life = 10 hours\n\nH₀: μ = 10\nH₁: μ ≠ 10 (two-tailed)\n\nSample: n = 36, x̄ = 9.5, σ = 1.8\n\nTest statistic:\n  z = (x̄ - μ) / (σ/√n)\n    = (9.5 - 10) / (1.8/6)\n    = -0.5 / 0.3 = -1.67\n\np-value = 2 × P(Z < -1.67)\n        ≈ 2 × 0.0475 = 0.095\n\nDecision (α = 0.05):\n  0.095 > 0.05 → Fail to reject H₀\n\nConclusion:\n  Insufficient evidence that\n  average battery life differs\n  from 10 hours.',
            output: 'A p-value above α means the data is not surprising enough under H₀ to abandon it.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'One-tailed vs two-tailed tests serve different research questions.',
          table: {
            headers: ['Aspect', 'One-Tailed Test', 'Two-Tailed Test'],
            rows: [
              ['H₁ direction', 'Specifies direction (μ > μ₀ or μ < μ₀)', 'Any difference (μ ≠ μ₀)'],
              ['Rejection region', 'One tail of distribution', 'Both tails'],
              ['p-value', 'Area in one tail', 'Area in both tails'],
              ['Power', 'Higher for the specified direction', 'Lower per tail'],
              ['When to use', 'Strong directional prediction exists', 'No directional prediction']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Saying "we accept the null hypothesis" (fix: we never accept H₀; we only fail to reject it — absence of evidence is not evidence of absence)',
            'Mistake 2: Changing from two-tailed to one-tailed after seeing the data (fix: choose the test direction before looking at results; post-hoc switching inflates Type I error)',
            'Mistake 3: Treating p < 0.05 as proof of a large or important effect (fix: report effect sizes and confidence intervals alongside p-values)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Hypothesis testing drives evidence-based decisions.',
          list: [
            'Pharmaceuticals: FDA requires trials to reject H₀ (no effect) before drug approval',
            'Tech: A/B tests use hypothesis testing to decide if a new feature improves metrics',
            'Manufacturing: quality control tests whether defect rates exceed acceptable thresholds',
            'Education: researchers test whether a new teaching method improves test scores'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'H₀ = default claim; H₁ = what we seek evidence for',
            'Test statistic measures distance from H₀ in standard-error units',
            'p-value = probability of seeing this result if H₀ were true',
            'If p < α, reject H₀; otherwise, fail to reject H₀',
            'Never "accept" H₀ — only fail to find enough evidence against it',
            'Report effect size and CI, not just p-value'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does a p-value of 0.03 mean when α = 0.05?\nAns: There is a 3% chance of observing the sample result (or more extreme) if the null hypothesis is true; since 0.03 < 0.05, we reject H₀.',
            'Q2: What is wrong with saying "we accept the null hypothesis"?\nAns: Failing to reject H₀ does not prove it is true; it only means the data is insufficient to disprove it.',
            'Q3: When should you use a one-tailed test instead of a two-tailed test?\nAns: Only when you have a strong, pre-specified directional prediction; switching after seeing data is invalid.'
          ]
        }
      ]
    }
  }
};
