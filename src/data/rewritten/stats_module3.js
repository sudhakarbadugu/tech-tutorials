export const statsModule3Structure = {
  module3: {
    title: 'Module 3: Hypothesis Testing',
    topics: [
      { id: 'hypothesis-testing', title: 'Hypothesis Testing' },
      { id: 'z-test', title: 'Z-Test' },
      { id: 't-test', title: 'T-Test' },
      { id: 'chi-square', title: 'Chi-Square Test' },
      { id: 'anova', title: 'ANOVA' },
      { id: 'non-parametric', title: 'Non-Parametric Tests' },
    ]
  }
};

export const statsModule3Content = {
  module3: {
    'hypothesis-testing': {
      title: 'Hypothesis Testing',
      subtitle: 'The framework for making data-driven decisions about populations',
      sections: [
        {
          heading: 'What is Hypothesis Testing?',
          text: 'Hypothesis testing is a formal procedure for evaluating claims about population parameters using sample data. It helps you decide whether an observed effect is genuine or just due to random chance.',
          list: [
            'Null Hypothesis (H₀): the default claim — usually "no effect," "no difference," or "no relationship"',
            'Alternative Hypothesis (H₁): the claim you seek evidence for — a difference, effect, or relationship exists',
            'Significance Level (α): the threshold for rejecting H₀, typically 0.05 (5% chance of false rejection)',
            'Test Statistic: a standardized score computed from sample data',
            'p-value: the probability of seeing your result (or more extreme) if H₀ were true'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The five-step testing process is the backbone of all inferential statistics.',
          example: {
            title: 'Example: Testing if a coin is fair',
            code: 'Claim: Coin is biased toward heads (p > 0.5)\n\nStep 1 — State hypotheses:\n  H₀: p = 0.5 (fair coin)\n  H₁: p > 0.5 (biased toward heads)\n\nStep 2 — Choose α = 0.05\n\nStep 3 — Collect data: 100 flips, 60 heads\n\nStep 4 — Compute test statistic (z-test for proportion):\n  z = (p̂ - p₀) / √(p₀(1-p₀)/n)\n    = (0.60 - 0.50) / √(0.5×0.5/100)\n    = 0.10 / 0.05 = 2.0\n\nStep 5 — Decision:\n  p-value = P(Z > 2.0) = 0.0228\n  0.0228 < 0.05 → Reject H₀\n  Conclusion: Evidence suggests the coin is biased.',
            output: 'p = 0.0228 < α = 0.05 → Reject H₀. The coin shows statistically significant bias toward heads.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'One-tailed vs two-tailed tests lead to different critical regions and conclusions.',
          table: {
            headers: ['Aspect', 'One-Tailed Test', 'Two-Tailed Test'],
            rows: [
              ['H₁ direction', 'Specifies direction (μ > μ₀ or μ < μ₀)', 'Any difference (μ ≠ μ₀)'],
              ['Critical region', 'All in one tail', 'Split between both tails'],
              ['p-value', 'Probability in one direction', 'Probability in both directions'],
              ['Power', 'Higher for same α if direction is correct', 'Lower, but detects both directions'],
              ['When to use', 'Strong prior theory about direction', 'No prior directional expectation']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Saying "accept H₀" instead of "fail to reject H₀" — you never prove the null true, you just lack evidence against it',
            'Mistake 2: Treating p = 0.05 as a magical cutoff — p = 0.051 and p = 0.049 are practically identical; report the exact p-value',
            'Mistake 3: Running a one-tailed test after seeing the data direction — this doubles your false positive rate; choose the test before collecting data'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Hypothesis testing underlies evidence-based decisions across every domain.',
          list: [
            'Pharmaceuticals: clinical trials test H₀ "drug has no effect" vs H₁ "drug improves recovery" before FDA approval',
            'Manufacturing: quality control tests whether batch mean matches specification, rejecting off-spec products',
            'Marketing: A/B tests use hypothesis testing to decide whether a new layout increases click-through rates',
            'Education: researchers test whether a teaching method produces higher exam scores than the standard approach'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'H₀ = default claim; H₁ = what you want to prove',
            'α = risk of falsely rejecting H₀ (Type I error)',
            'p-value = probability of your result under H₀; smaller = stronger evidence',
            'Reject H₀ when p < α; otherwise fail to reject',
            'Never "accept" H₀ — absence of evidence is not evidence of absence'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between a Type I and Type II error?\nAns: Type I = rejecting a true H₀ (false alarm); Type II = failing to reject a false H₀ (missed detection).',
            'Q2: If p = 0.03 and α = 0.05, what is your decision?\nAns: Reject H₀ — the result is statistically significant.',
            'Q3: Why can\'t we say we "accept" the null hypothesis?\nAns: Failing to reject H₀ only means the data does not provide enough evidence against it; it does not prove H₀ is true.'
          ]
        }
      ]
    },
    'z-test': {
      title: 'Z-Test',
      subtitle: 'Testing means and proportions when the population standard deviation is known',
      sections: [
        {
          heading: 'What is a Z-Test?',
          text: 'A Z-test evaluates whether a sample statistic differs from a hypothesized population value when the population standard deviation is known and the sample is sufficiently large. It relies on the normal distribution.',
          list: [
            'One-Sample Z-Test: compares a sample mean to a known population mean',
            'Two-Sample Z-Test: compares means from two independent populations',
            'Z-Test for Proportions: compares a sample proportion to a hypothesized value',
            'Requirement: population σ known, or n ≥ 30 (CLT justifies normality)',
            'The test statistic follows the standard normal distribution: Z ~ N(0, 1)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Z-statistic measures how many standard errors the sample statistic is from the null value.',
          example: {
            title: 'Example: One-sample Z-test for mean',
            code: 'Population: μ₀ = 100, σ = 15 (known)\nSample: n = 36, x̄ = 105\nTest: Is the sample from this population?\n\nStep 1 — Hypotheses:\n  H₀: μ = 100\n  H₁: μ ≠ 100 (two-tailed)\n\nStep 2 — α = 0.05, critical Z = ±1.96\n\nStep 3 — Compute Z-statistic:\n  Z = (x̄ - μ₀) / (σ/√n)\n    = (105 - 100) / (15/6)\n    = 5 / 2.5 = 2.0\n\nStep 4 — p-value = 2 × P(Z > 2.0)\n         = 2 × 0.0228 = 0.0456\n\nStep 5 — Decision:\n  |2.0| > 1.96 and p = 0.0456 < 0.05\n  → Reject H₀',
            output: 'Z = 2.0, p = 0.0456. The sample mean is significantly different from the hypothesized population mean at α = 0.05.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Z-test vs T-test is one of the most important distinctions in introductory statistics.',
          table: {
            headers: ['Aspect', 'Z-Test', 'T-Test'],
            rows: [
              ['Population SD (σ)', 'Must be known', 'Unknown; uses sample SD (s)'],
              ['Sample size', 'Any size if σ known; large if σ estimated', 'Any size, but especially small (n < 30)'],
              ['Distribution', 'Standard normal (Z)', 'Student\'s t-distribution'],
              ['Degrees of freedom', 'Not applicable', 'df = n - 1'],
              ['When to use', 'Known σ or very large n', 'Unknown σ, especially small samples']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a Z-test when σ is unknown and n is small — the t-test protects against underestimated standard error',
            'Mistake 2: Forgetting to check the direction for one-tailed tests — a one-tailed p-value is half the two-tailed p-value only if the effect is in the predicted direction',
            'Mistake 3: Applying the Z-test for proportions to small samples — the normal approximation requires np ≥ 10 and n(1-p) ≥ 10'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Z-tests are common in standardized, large-scale testing scenarios.',
          list: [
            'Quality control: a factory knows historical σ = 2g and tests whether a new batch mean of 502g differs from the target 500g',
            'Election polling: testing whether a candidate\'s support (52% in n = 1000) is significantly above 50% using the known standard error formula',
            'Standardized testing: comparing a class average to the national mean when the national SD is published and known'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Z-test requires known population standard deviation (σ)',
            'Z = (statistic - null value) / standard error',
            'Compare |Z| to critical value, or compare p-value to α',
            'Use when σ is known or sample is very large (n > 100)',
            'For proportions: Z = (p̂ - p₀) / √(p₀(1-p₀)/n)'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When should you use a Z-test instead of a T-test?\nAns: When the population standard deviation is known and the sample size is large, or when working with proportions.',
            'Q2: What is the standard error formula for a one-sample Z-test?\nAns: SE = σ / √n, where σ is the population standard deviation.',
            'Q3: A Z-statistic of 2.5 is obtained with α = 0.05 (two-tailed). What is the decision?\nAns: Reject H₀, since |2.5| > 1.96 (the critical value) and p < 0.05.'
          ]
        }
      ]
    },
    't-test': {
      title: 'T-Test',
      subtitle: 'Testing means when the population standard deviation is unknown',
      sections: [
        {
          heading: 'What is a T-Test?',
          text: 'A t-test evaluates whether a sample mean (or difference between means) is statistically significant when the population standard deviation is unknown. It uses the sample standard deviation and the t-distribution, which has heavier tails than the normal distribution to account for extra uncertainty.',
          list: [
            'One-Sample T-Test: compares a sample mean to a known or hypothesized value',
            'Independent Samples T-Test: compares means from two unrelated groups',
            'Paired Samples T-Test: compares means from the same subjects under two conditions',
            'Requirement: data approximately normally distributed, especially for small samples',
            'Uses degrees of freedom (df), which adjusts the shape of the t-distribution'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The t-statistic is structurally similar to the z-statistic, but replaces σ with the sample standard deviation s.',
          example: {
            title: 'Example: Independent samples t-test',
            code: 'Group A (new drug): n₁ = 25, x̄₁ = 82, s₁ = 10\nGroup B (placebo):  n₂ = 25, x̄₂ = 75, s₂ = 12\nTest: Does the drug improve scores?\n\nStep 1 — Hypotheses:\n  H₀: μ₁ = μ₂\n  H₁: μ₁ > μ₂ (one-tailed)\n\nStep 2 — α = 0.05, df = 25 + 25 - 2 = 48\n\nStep 3 — Pooled variance:\n  s²p = [(24×100) + (24×144)] / 48\n      = [2400 + 3456] / 48 = 121.17\n\nStep 4 — Standard error:\n  SE = √(121.17 × (1/25 + 1/25))\n     = √(121.17 × 0.08) = √9.69 ≈ 3.11\n\nStep 5 — t-statistic:\n  t = (82 - 75) / 3.11 = 7 / 3.11 ≈ 2.25\n\nStep 6 — Critical t(48, 0.05) ≈ 1.677\n  2.25 > 1.677 → Reject H₀',
            output: 't = 2.25, critical value = 1.677. The drug produces a statistically significant improvement.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Choosing between equal and unequal variance versions affects your standard error calculation.',
          table: {
            headers: ['Aspect', 'Pooled Variance (Equal SD)', 'Welch\'s T-Test (Unequal SD)'],
            rows: [
              ['Assumption', 'σ₁ = σ₂', 'σ₁ ≠ σ₂ (no assumption)'],
              ['Formula', 'Uses combined s²p', 'Uses separate SDs with adjusted df'],
              ['df', 'n₁ + n₂ - 2', 'Approximate, usually smaller'],
              ['Robustness', 'Less robust if variances differ', 'More robust, slightly less powerful'],
              ['Recommendation', 'Use only after variance homogeneity test', 'Safer default choice']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using an independent t-test when data is paired — paired designs control for between-subject variability and are more powerful',
            'Mistake 2: Ignoring the normality assumption with very small samples — for n < 15, non-parametric alternatives (Mann-Whitney, Wilcoxon) are safer',
            'Mistake 3: Reporting a one-tailed test after seeing the data direction — this inflates Type I error and is considered p-hacking'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'T-tests are the workhorse of experimental research.',
          list: [
            'Medical trials: comparing blood pressure reduction between treatment and control groups',
            'Education research: testing whether students who use tutoring score higher than those who do not',
            'Product development: A/B testing whether a new checkout flow increases conversion rate between two user groups',
            'Psychology: comparing pre-test and post-test anxiety scores within the same participants after therapy'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'T-test is used when population σ is unknown',
            'One-sample: compare sample mean to a known value',
            'Independent samples: compare two unrelated group means',
            'Paired samples: compare two measurements from the same subjects',
            'Always check normality and variance assumptions before interpreting'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does the t-distribution have heavier tails than the normal distribution?\nAns: Because we estimate σ from the sample, adding uncertainty; heavier tails compensate for this extra variability.',
            'Q2: When should you use a paired t-test instead of an independent t-test?\nAns: When the two groups consist of the same subjects measured under different conditions, or matched pairs.',
            'Q3: What happens to the t-distribution as sample size increases?\nAns: It approaches the standard normal distribution; for n > 100, Z and t critical values are nearly identical.'
          ]
        }
      ]
    },
    'chi-square': {
      title: 'Chi-Square Test',
      subtitle: 'Testing relationships and distributions with categorical data',
      sections: [
        {
          heading: 'What is the Chi-Square Test?',
          text: 'The chi-square (χ²) test is a non-parametric test used with categorical data to evaluate whether observed frequencies differ from expected frequencies. It is the categorical equivalent of the t-test and ANOVA.',
          list: [
            'Chi-Square Test of Independence: tests whether two categorical variables are related',
            'Chi-Square Goodness of Fit: tests whether observed frequencies match a theoretical distribution',
            'Test Statistic: χ² = Σ (O - E)² / E, where O = observed and E = expected',
            'Requirement: expected frequency in each cell should be ≥ 5 (or ≥ 1 with few cells)',
            'Degrees of freedom: (rows - 1) × (columns - 1) for independence; (categories - 1) for goodness of fit'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Expected frequencies are computed under the assumption that the null hypothesis (independence) is true.',
          example: {
            title: 'Example: Test of independence',
            code: 'Research question: Is gender associated with\nproduct preference (Tea vs Coffee)?\n\nObserved counts:\n         Tea   Coffee   Total\nMale      30     20       50\nFemale    25     25       50\nTotal     55     45      100\n\nExpected (Male, Tea):\n  E = (Row Total × Column Total) / Grand Total\n    = (50 × 55) / 100 = 27.5\n\nχ² = Σ (O - E)² / E\n   = (30-27.5)²/27.5 + (20-22.5)²/22.5\n     + (25-27.5)²/27.5 + (25-22.5)²/22.5\n   = 6.25/27.5 + 6.25/22.5 + 6.25/27.5 + 6.25/22.5\n   ≈ 0.227 + 0.278 + 0.227 + 0.278\n   ≈ 1.01\n\ndf = (2-1) × (2-1) = 1\nCritical χ²(1, 0.05) = 3.84\n1.01 < 3.84 → Fail to reject H₀',
            output: 'χ² = 1.01, p > 0.05. Gender and beverage preference are not significantly associated.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Independence, goodness of fit, and homogeneity tests serve different purposes but share the same test statistic.',
          table: {
            headers: ['Test', 'Purpose', 'Expected Frequencies', 'Example'],
            rows: [
              ['Independence', 'Are two variables related?', 'Row × Column / Total', 'Gender vs voting preference'],
              ['Goodness of Fit', 'Does data match a distribution?', 'Theoretical proportions', 'Die rolls vs fair die expectation'],
              ['Homogeneity', 'Do groups have same distribution?', 'Row × Column / Total', 'Do three cities prefer the same brands?']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using chi-square on percentages instead of raw counts — percentages lose sample size information and distort expected frequencies',
            'Mistake 2: Ignoring cells with expected frequency < 5 — this inflates Type I error; combine categories or use Fisher\'s exact test instead',
            'Mistake 3: Interpreting a non-significant result as proof of independence — it only means you lack evidence of a relationship'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Chi-square tests are essential whenever you work with categorical data.',
          list: [
            'Epidemiology: testing whether a disease exposure is associated with an outcome (case-control studies)',
            'Marketing: testing whether customer satisfaction ratings differ across product lines',
            'Genetics: testing whether observed genotype ratios match Mendelian inheritance expectations (9:3:3:1)',
            'Social science: testing whether education level and political affiliation are independent'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'χ² = Σ (O - E)² / E — always use raw counts, not percentages',
            'Independence test: variables are unrelated under H₀',
            'Goodness of fit: observed matches theoretical distribution',
            'Expected frequency should be ≥ 5 per cell',
            'χ² only tells you a relationship exists — it does not measure strength or direction'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How do you calculate expected frequency in a test of independence?\nAns: E = (row total × column total) / grand total.',
            'Q2: What is the minimum expected frequency rule for the chi-square test?\nAns: Expected frequency should be at least 5 in each cell (some allow ≥ 1 with few cells and use Yates\' correction).',
            'Q3: If χ² = 8.5 with df = 2 and critical value = 5.99 at α = 0.05, what is your conclusion?\nAns: Reject H₀ — the result is statistically significant since 8.5 > 5.99.'
          ]
        }
      ]
    },
    'anova': {
      title: 'ANOVA',
      subtitle: 'Analysis of Variance — comparing means across three or more groups',
      sections: [
        {
          heading: 'What is ANOVA?',
          text: 'Analysis of Variance (ANOVA) tests whether the means of three or more groups are significantly different. Instead of running multiple t-tests (which inflates Type I error), ANOVA uses a single F-test to compare between-group variation to within-group variation.',
          list: [
            'One-Way ANOVA: one independent variable with three or more levels',
            'Two-Way ANOVA: two independent variables, also tests interaction effects',
            'F-statistic: ratio of between-group variance to within-group variance',
            'Assumptions: normality within each group, homogeneity of variances (equal SDs), independent observations',
            'If ANOVA is significant, post-hoc tests (Tukey, Bonferroni) identify which specific groups differ'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The F-statistic compares how much groups differ relative to how much individuals within groups differ.',
          example: {
            title: 'Example: One-way ANOVA',
            code: 'Research: Do three teaching methods produce\ndifferent exam scores?\n\nGroup A (Lecture):   72, 75, 78, 70, 80\nGroup B (Discussion): 80, 82, 85, 78, 88\nGroup C (Hands-on):   85, 88, 90, 84, 92\n\nGroup means:\n  x̄A = 75, x̄B = 82.6, x̄C = 87.8\n  Grand mean = 81.8\n\nSSB (Between Groups):\n  = 5(75-81.8)² + 5(82.6-81.8)² + 5(87.8-81.8)²\n  = 5(46.24) + 5(0.64) + 5(36)\n  = 231.2 + 3.2 + 180 = 414.4\n  MSB = 414.4 / (3-1) = 207.2\n\nSSW (Within Groups):\n  = Σ(xi - x̄group)²\n  = 44 + 68.8 + 44.8 = 157.6\n  MSW = 157.6 / (15-3) = 13.13\n\nF = MSB / MSW = 207.2 / 13.13 ≈ 15.78\n\nCritical F(2, 12, 0.05) = 3.89\n15.78 > 3.89 → Reject H₀',
            output: 'F = 15.78, p < 0.05. At least one teaching method produces a significantly different mean score.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Understanding the SS partition is key to interpreting what ANOVA measures.',
          table: {
            headers: ['Source', 'What it measures', 'Formula', 'Degrees of Freedom'],
            rows: [
              ['SS Total', 'Total variation in all data', 'Σ(xi - x̄grand)²', 'N - 1'],
              ['SS Between', 'Variation due to group differences', 'Σ nᵢ(x̄ᵢ - x̄grand)²', 'k - 1'],
              ['SS Within', 'Variation due to random error', 'Σ(xi - x̄ᵢ)²', 'N - k'],
              ['MS (Mean Square)', 'Variance estimate', 'SS / df', '—'],
              ['F-statistic', 'Signal-to-noise ratio', 'MSB / MSW', 'k-1, N-k']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running multiple t-tests instead of ANOVA — with 5 groups, you need 10 t-tests, and the family-wise error rate balloons to roughly 40%',
            'Mistake 2: Interpreting a significant F-test as "all groups differ" — it only tells you at least one pair differs; post-hoc tests find which ones',
            'Mistake 3: Ignoring unequal variances — if group SDs differ greatly, use Welch\'s ANOVA or a non-parametric alternative (Kruskal-Wallis)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ANOVA is used wherever you need to compare more than two conditions.',
          list: [
            'Agriculture: comparing crop yields across multiple fertilizer types',
            'Medicine: testing whether three dosages of a drug produce different recovery times',
            'Education: evaluating whether four teaching methods lead to different learning outcomes',
            'Manufacturing: comparing product quality across five production lines'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ANOVA compares 3+ group means with a single F-test',
            'F = between-group variance / within-group variance',
            'A significant F only means "not all means are equal" — post-hoc tests find which pairs differ',
            'Assumptions: normality, equal variances, independence',
            'Never replace ANOVA with multiple t-tests; that inflates Type I error'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is ANOVA preferred over multiple t-tests when comparing three or more groups?\nAns: Multiple t-tests inflate the family-wise Type I error rate; ANOVA controls this by using a single F-test.',
            'Q2: What does a significant F-statistic tell you?\nAns: It tells you that at least one group mean is significantly different from the others, but not which specific groups.',
            'Q3: What are the assumptions of one-way ANOVA?\nAns: Observations are independent, residuals are normally distributed, and group variances are approximately equal (homogeneity of variance).'
          ]
        }
      ]
    },
    'non-parametric': {
      title: 'Non-Parametric Tests',
      subtitle: 'Statistical tests that make no assumptions about the underlying distribution',
      sections: [
        {
          heading: 'What are Non-Parametric Tests?',
          text: 'Non-parametric tests are statistical methods that do not assume the data follows a specific distribution (like normal). They use ranks, signs, or counts instead of means and variances, making them robust to outliers and suitable for ordinal or heavily skewed data.',
          list: [
            'Mann-Whitney U Test: compares two independent groups (non-parametric alternative to independent t-test)',
            'Wilcoxon Signed-Rank Test: compares paired measurements (alternative to paired t-test)',
            'Kruskal-Wallis Test: compares three or more independent groups (alternative to one-way ANOVA)',
            'Spearman Rank Correlation: measures monotonic association between two variables (alternative to Pearson correlation)',
            'No normality or equal variance assumptions required — only that observations are independent'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Non-parametric tests convert raw data to ranks and analyze the ranks instead of the original values.',
          example: {
            title: 'Example: Mann-Whitney U Test',
            code: 'Group A scores: [12, 15, 18, 22, 25]\nGroup B scores: [10, 14, 20, 24, 30]\n\nStep 1 — Combine and rank all values:\n  10(B)=1, 12(A)=2, 14(B)=3, 15(A)=4,\n  18(A)=5, 20(B)=6, 22(A)=7, 24(B)=8,\n  25(A)=9, 30(B)=10\n\nStep 2 — Sum ranks for each group:\n  RA = 2+4+5+7+9 = 27\n  RB = 1+3+6+8+10 = 28\n\nStep 3 — Compute U statistics:\n  UA = nA×nB + nA(nA+1)/2 - RA\n     = 5×5 + 5(6)/2 - 27\n     = 25 + 15 - 27 = 13\n\n  UB = nA×nB - UA = 25 - 13 = 12\n\nStep 4 — Compare to critical value:\n  U = min(UA, UB) = 12\n  Critical U(5,5, 0.05, two-tailed) = 2\n  12 > 2 → Fail to reject H₀',
            output: 'U = 12 > critical value = 2. No significant difference between Group A and Group B distributions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Choosing between parametric and non-parametric tests depends on your data and assumptions.',
          table: {
            headers: ['Aspect', 'Parametric', 'Non-Parametric'],
            rows: [
              ['Assumptions', 'Normality, equal variance, interval/ratio data', 'No distribution assumption; works with ordinal/ranked data'],
              ['Power', 'More powerful when assumptions hold', 'Less powerful when parametric assumptions are met'],
              ['Outliers', 'Sensitive (mean is affected)', 'Robust (ranks are less affected)'],
              ['Data type', 'Interval or ratio', 'Ordinal, ranked, or heavily skewed continuous'],
              ['Examples', 't-test, ANOVA, Pearson r', 'Mann-Whitney, Kruskal-Wallis, Spearman ρ']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Defaulting to non-parametric tests out of fear of normality — parametric tests are often robust to mild non-normality, especially with n > 30',
            'Mistake 2: Reporting means when using a non-parametric test — report medians and interquartile ranges, which align with rank-based methods',
            'Mistake 3: Ignoring ties in rank-based tests — many software packages handle ties automatically, but heavy ties reduce test power'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Non-parametric tests shine when data is messy, ordinal, or comes from small, non-normal samples.',
          list: [
            'Healthcare: comparing pain scores (ordinal scales: 1-10) between two treatments where scores are heavily skewed',
            'Customer surveys: analyzing Likert-scale satisfaction ratings (ordinal) across demographic groups',
            'Finance: comparing investment returns with extreme outliers (market crashes) that distort parametric means',
            'Sports science: comparing race times from small samples where normality cannot be assumed'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Non-parametric tests do not assume normality or equal variance',
            'They use ranks, signs, or counts instead of raw values',
            'Mann-Whitney U = two independent groups; Wilcoxon = paired samples',
            'Kruskal-Wallis = three or more groups (ANOVA alternative)',
            'Use when data is ordinal, heavily skewed, or has extreme outliers'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: When should you choose a non-parametric test over a parametric test?\nAns: When data is ordinal, heavily skewed, has extreme outliers, or fails normality assumptions — especially with small samples.',
            'Q2: What is the non-parametric equivalent of the independent samples t-test?\nAns: The Mann-Whitney U test (also called Wilcoxon rank-sum test).',
            'Q3: Why are non-parametric tests less powerful than parametric tests when assumptions are met?\nAns: Because converting data to ranks discards some information about the magnitude of differences, reducing the test\'s ability to detect true effects.'
          ]
        }
      ]
    }
  }
};
