// deep learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js dl_module1.js

export const dlModule1Content = {
  module1: {
    'intro-dl': {
      title: 'Introduction to Deep Learning',
      subtitle: 'From machine learning to deep neural networks',
      sections: [
        {
          heading: 'What is Deep Learning?',
          text: 'Deep Learning is a subfield of machine learning that uses <strong>neural networks with many layers</strong> to automatically learn hierarchical representations from data. It eliminates the need for manual feature engineering by letting the network discover features directly from raw input.',
          list: [
            'Deep learning uses multi-layer neural networks to learn complex patterns automatically',
            'Unlike traditional ML, it does not require manual feature extraction',
            'It needs large datasets and significant compute power (GPUs/TPUs) to train effectively',
            'It powers modern AI breakthroughs in vision, language, speech, and generative models'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Deep Learning is a subfield of machine learning that uses <strong>neural networks with many layers</strong> to automatically learn hierarchical representations from data. It eliminates the need for manual feature engineering by letting the network discover features directly from raw input. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Deep Learning is a subfield of machine learning that uses <strong>neural networks with many layers</strong> to automatically learn hierarchical representations from data. It eliminates the need for manual feature engineering by letting the network discover features directly from raw input. Deep learning uses multi-layer neural networks to learn complex patterns automatically Unlike traditional ML, it does not require manual feature extraction It needs large datasets and significant compute power (GPUs/TPUs) to train effectively It powers modern AI breakthroughs in vision, language, speech, and generative models</p>',
            '<p>You use introduction to deep learning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Deep Learning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Deep Learning sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Core identity for this topic.',
          example: {
            title: 'Worked formula',
            code: 'See Python example below.',
            output: 'Apply the formula before trusting software output.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Introduction to Deep Learning with Python',
            code: `import torch
import torch.nn as nn

# Introduction to Deep Learning — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Machine Learning vs Deep Learning.',
          table: {
            headers: [
              'Aspect',
              'Machine Learning',
              'Deep Learning'
            ],
            rows: [
              [
                'Feature Engineering',
                'Manual feature extraction required',
                'Automatic feature learning from raw data'
              ],
              [
                'Data Requirements',
                'Works well with small datasets',
                'Needs large datasets to generalize'
              ],
              [
                'Computation',
                'CPU is usually sufficient',
                'GPU required for training large networks'
              ],
              [
                'Architecture',
                'Fixed algorithms (SVM, Random Forest)',
                'Learnable neural architectures'
              ],
              [
                'Interpretability',
                'More interpretable (feature importance)',
                'Black box — harder to interpret'
              ],
              [
                'Examples',
                'SVM, Random Forest, XGBoost',
                'CNN, RNN, Transformer, GAN'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using deep learning for small datasets (fix: traditional ML often outperforms deep learning when data is limited; use transfer learning or simple models)',
            'Mistake 2: Expecting deep learning to work out of the box without tuning (fix: neural networks require careful hyperparameter tuning, initialization, and architecture design)',
            'Mistake 3: Ignoring the need for proper hardware (fix: training deep networks on CPU is impractical; use GPUs or cloud TPUs for reasonable training times)'
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
          text: 'Deep learning powers some of the most impactful technologies today.',
          list: [
            'Computer vision: facial recognition, medical imaging diagnosis, autonomous vehicle perception',
            'Natural language processing: machine translation, chatbots, sentiment analysis, summarization',
            'Speech and audio: voice assistants, real-time transcription, music generation',
            'Generative AI: image synthesis, text-to-image models, deepfake detection'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Deep learning = machine learning with deep neural networks that learn features automatically',
            'Key advantage: eliminates manual feature engineering by learning hierarchical representations',
            'Trade-offs: needs more data, more compute, and is less interpretable than traditional ML',
            'Biological neurons inspired the design, but artificial neurons are purely mathematical',
            'Applications span vision, NLP, speech, and generative AI across nearly every industry'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the main advantage of deep learning over traditional machine learning?
Ans: Deep learning automatically learns features from raw data, eliminating the need for manual feature engineering.`,
            `Q2: Why do deep learning models typically require GPUs?
Ans: Training deep neural networks involves massive matrix operations that GPUs parallelize efficiently, reducing training time from days to hours.`,
            `Q3: What is the key difference between biological and artificial neurons?
Ans: Biological neurons use electrochemical signals; artificial neurons perform mathematical weighted sums followed by activation functions.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Deep Learning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to Deep Learning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    perceptron: {
      title: 'Perceptron Model',
      subtitle: 'The building block of neural networks',
      sections: [
        {
          heading: 'What is a Perceptron?',
          text: 'A <strong>perceptron</strong> is the simplest neural network unit. It takes multiple inputs, computes a weighted sum, adds a bias, and passes the result through a step function to produce a binary output. It is the foundation upon which all modern neural networks are built.',
          list: [
            'A perceptron is a single-layer binary classifier that learns linearly separable patterns',
            'It updates weights using a simple learning rule when predictions are wrong',
            'It forms the core computational unit of every neuron in larger networks',
            'It cannot solve non-linearly separable problems like XOR without hidden layers'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>perceptron</strong> is the simplest neural network unit. It takes multiple inputs, computes a weighted sum, adds a bias, and passes the result through a step function to produce a binary output. It is the foundation upon which all modern neural networks are built. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>perceptron</strong> is the simplest neural network unit. It takes multiple inputs, computes a weighted sum, adds a bias, and passes the result through a step function to produce a binary output. It is the foundation upon which all modern neural networks are built. A perceptron is a single-layer binary classifier that learns linearly separable patterns It updates weights using a simple learning rule when predictions are wrong It forms the core computational unit of every neuron in larger networks It cannot solve non-linearly separable problems like XOR without hidden layers</p>',
            '<p>You use perceptron model when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Perceptron Model

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Perceptron Model sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The perceptron learning rule adjusts weights proportionally to the error and input.',
          example: {
            title: 'Example: Perceptron Algorithm',
            code: `import numpy as np

# AND gate dataset
X = np.array([[0,0],[0,1],[1,0],[1,1]])
y = np.array([0, 0, 0, 1])

w = np.zeros(2)
b = 0.0
lr = 0.1
for epoch in range(20):
    for xi, target in zip(X, y):
        pred = 1 if (xi @ w + b) >= 0 else 0
        w += lr * (target - pred) * xi
        b += lr * (target - pred)
print("weights:", w, "bias:", b)

# PyTorch: single linear + threshold
import torch, torch.nn as nn
p = nn.Linear(2, 1)
with torch.no_grad():
    p.weight.fill_(0.0); p.bias.fill_(0.0)
opt = torch.optim.SGD(p.parameters(), lr=0.1)
for _ in range(100):
    out = torch.sigmoid(p(torch.tensor(X, dtype=torch.float32)))
    loss = nn.functional.binary_cross_entropy(out, torch.tensor(y, dtype=torch.float32).view(-1,1))
    opt.zero_grad(); loss.backward(); opt.step()`,
            output: 'Perceptron learns linearly separable functions by iteratively correcting mistakes.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Perceptron Model with Python',
            code: `import torch
import torch.nn as nn

# Perceptron Model — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Single perceptron vs multi-layer perceptron (MLP).',
          table: {
            headers: [
              'Aspect',
              'Single Perceptron',
              'Multi-Layer Perceptron'
            ],
            rows: [
              [
                'Layers',
                'One layer (input → output)',
                'Multiple hidden layers between input and output'
              ],
              [
                'Non-linearity',
                'No hidden non-linearity',
                'Non-linear activation in hidden layers'
              ],
              [
                'Problem scope',
                'Linearly separable only',
                'Can approximate any continuous function'
              ],
              [
                'XOR problem',
                'Cannot solve XOR',
                'Solves XOR and complex patterns'
              ],
              [
                'Training',
                'Simple perceptron rule',
                'Requires backpropagation'
              ],
              [
                'Parameters',
                'Few (weights + bias)',
                'Many (weights and biases across all layers)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Trying to solve non-linear problems with a single perceptron (fix: add hidden layers and non-linear activations to create an MLP)',
            'Mistake 2: Setting the learning rate too high (fix: use a small learning rate like η = 0.01; too large causes divergence, too slow causes slow convergence)',
            'Mistake 3: Forgetting that the perceptron step function is non-differentiable (fix: for gradient-based training, use sigmoid or other smooth activations instead of hard step)'
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
          text: 'While simple, perceptrons illustrate concepts used everywhere in neural networks.',
          list: [
            'Spam detection: binary classification of emails as spam or not spam using word features',
            'Credit approval: simple yes/no decisions based on applicant financial features',
            'Medical diagnosis: preliminary screening tests that separate positive from negative cases',
            'Sensor systems: threshold-based alerts in IoT and industrial monitoring devices'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Perceptron: weighted sum of inputs + bias passed through a step function',
            'Learning rule: update weights when prediction is wrong, proportional to error and input',
            'Limitation: only works for linearly separable problems; XOR is the classic counter-example',
            'MLP extension: adding hidden layers with non-linear activations solves the limitation',
            'Every neuron in a deep network is essentially a perceptron with a smooth activation function'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why can a single perceptron not solve the XOR problem?
Ans: XOR is not linearly separable — no single straight line can separate the classes.`,
            `Q2: What happens during the perceptron learning rule update?
Ans: Weights and bias are adjusted by η × (target − prediction) × input when a mistake is made.`,
            `Q3: How does an MLP overcome the perceptron limitation?
Ans: By adding hidden layers with non-linear activation functions, the network can learn non-linear decision boundaries.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Perceptron Model</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Perceptron Model")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'activation-functions': {
      title: 'Activation Functions',
      subtitle: 'Introducing non-linearity into neural networks',
      sections: [
        {
          heading: 'What are Activation Functions?',
          text: 'Activation functions introduce <strong>non-linearity</strong> into neural networks. Without them, stacking multiple layers would mathematically collapse into a single linear transformation, no matter how deep the network. Non-linearity is what allows neural networks to learn complex, curved decision boundaries.',
          list: [
            'Activation functions decide whether a neuron should fire and by how much',
            'Without non-linear activations, deep networks are equivalent to one linear model',
            'They control gradient flow, which directly impacts how well a network trains',
            'The choice of activation affects convergence speed, accuracy, and stability'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Activation functions introduce <strong>non-linearity</strong> into neural networks. Without them, stacking multiple layers would mathematically collapse into a single linear transformation, no matter how deep the network. Non-linearity is what allows neural networks to learn complex, curved decision boundaries. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Activation functions introduce <strong>non-linearity</strong> into neural networks. Without them, stacking multiple layers would mathematically collapse into a single linear transformation, no matter how deep the network. Non-linearity is what allows neural networks to learn complex, curved decision boundaries. Activation functions decide whether a neuron should fire and by how much Without non-linear activations, deep networks are equivalent to one linear model They control gradient flow, which directly impacts how well a network trains The choice of activation affects convergence speed, accuracy, and stability</p>',
            '<p>You use activation functions when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Activation Functions

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Activation Functions sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Common activation functions and their properties.',
          example: {
            title: 'Example: Common Activation Functions in NumPy, PyTorch, and TensorFlow',
            code: `import numpy as np

x = np.array([-2.0, -1.0, 0.0, 1.0, 2.0])

sigmoid = 1 / (1 + np.exp(-x))
relu = np.maximum(0, x)
tanh = np.tanh(x)
leaky = np.where(x > 0, x, 0.01 * x)

print("sigmoid:", sigmoid)
print("ReLU:", relu)

# PyTorch
import torch
x_t = torch.tensor([-2., -1., 0., 1., 2.])
print(torch.relu(x_t), torch.sigmoid(x_t), torch.tanh(x_t))

# TensorFlow
import tensorflow as tf
x_tf = tf.constant([-2., -1., 0., 1., 2.])
print(tf.nn.relu(x_tf), tf.nn.sigmoid(x_tf), tf.nn.tanh(x_tf))`,
            output: 'ReLU is the most popular choice for hidden layers due to simplicity and efficiency.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Activation Functions with Python',
            code: `import torch
import torch.nn as nn

# Activation Functions — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Comparing popular activation functions.',
          table: {
            headers: [
              'Function',
              'Range',
              'Derivative',
              'Best For',
              'Key Weakness'
            ],
            rows: [
              [
                'Sigmoid',
                '(0,1)',
                'σ(1−σ)',
                'Binary output layer',
                'Vanishing gradient; not zero-centered'
              ],
              [
                'Tanh',
                '(-1,1)',
                '1−tanh²',
                'Hidden layers in RNNs',
                'Still suffers vanishing gradient'
              ],
              [
                'ReLU',
                '[0,∞)',
                '1 if x>0 else 0',
                'Default hidden layers',
                'Dying ReLU problem'
              ],
              [
                'Leaky ReLU',
                '(-∞,∞)',
                '1 or α',
                'Deep networks',
                'α is a fixed hyperparameter'
              ],
              [
                'GELU/Swish',
                '(-∞,∞)',
                'Smooth',
                'Transformers, modern nets',
                'Slightly more compute'
              ],
              [
                'Softmax',
                '(0,1)',
                'Complex',
                'Multi-class output',
                'Expensive for large vocabularies'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using sigmoid in hidden layers of deep networks (fix: use ReLU or Leaky ReLU in hidden layers; sigmoid causes vanishing gradients in deep stacks)',
            'Mistake 2: Using ReLU in the output layer for binary classification (fix: use sigmoid for binary and softmax for multi-class output layers)',
            'Mistake 3: Ignoring the dying ReLU problem in very deep networks (fix: use Leaky ReLU, ELU, GELU, or proper weight initialization to keep neurons alive)'
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
          text: 'Activation function choices directly affect model behavior in production.',
          list: [
            'Computer vision CNNs: ReLU dominates because it trains faster and avoids saturation in deep stacks',
            'RNNs and LSTMs: tanh and sigmoid are used inside gates because they bound values between -1 and 1 or 0 and 1',
            'Transformer models: GELU and Swish activations are preferred for smoother gradient flow in very deep stacks',
            'Medical imaging: Leaky ReLU helps preserve gradient flow in dense 3D convolutional networks'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Activation functions add non-linearity — without them, deep networks collapse to linear models',
            'Sigmoid and tanh are smooth but suffer vanishing gradients in deep networks',
            'ReLU is the default for hidden layers: cheap, avoids vanishing gradients for positive inputs',
            'Dying ReLU: neurons can permanently die if they only receive negative inputs',
            'Output layer activations: sigmoid for binary, softmax for multi-class, linear for regression'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why are activation functions necessary in neural networks?
Ans: Without non-linear activations, multiple layers mathematically collapse into a single linear transformation, unable to learn complex patterns.`,
            `Q2: What is the dying ReLU problem?
Ans: If a neuron receives only negative inputs, ReLU always outputs 0, so its gradient is 0 and it stops learning permanently.`,
            `Q3: When should you use softmax instead of sigmoid?
Ans: Softmax is for multi-class classification where outputs must sum to 1; sigmoid is for independent binary classifications.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Activation Functions</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Activation Functions")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    backpropagation: {
      title: 'Backpropagation',
      subtitle: 'The algorithm that makes deep learning possible',
      sections: [
        {
          heading: 'What is Backpropagation?',
          text: '<strong>Backpropagation</strong> is the algorithm that computes gradients of the loss function with respect to every weight in a neural network. It applies the <strong>chain rule</strong> of calculus recursively from the output layer back to the input layer, enabling efficient training of deep networks.',
          list: [
            'Backpropagation computes how much each weight contributes to the total prediction error',
            'It uses the chain rule to propagate gradients backward through the network layers',
            'It is the foundation of all gradient-based neural network training',
            'Without backpropagation, training deep networks would be computationally infeasible'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Backpropagation</strong> is the algorithm that computes gradients of the loss function with respect to every weight in a neural network. It applies the <strong>chain rule</strong> of calculus recursively from the output layer back to the input layer, enabling efficient training of deep networks. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Backpropagation</strong> is the algorithm that computes gradients of the loss function with respect to every weight in a neural network. It applies the <strong>chain rule</strong> of calculus recursively from the output layer back to the input layer, enabling efficient training of deep networks. Backpropagation computes how much each weight contributes to the total prediction error It uses the chain rule to propagate gradients backward through the network layers It is the foundation of all gradient-based neural network training Without backpropagation, training deep networks would be computationally infeasible</p>',
            '<p>You use backpropagation when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Backpropagation

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Backpropagation sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Core identity for this topic.',
          example: {
            title: 'Worked formula',
            code: 'See Python example below.',
            output: 'Apply the formula before trusting software output.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Backpropagation with Python',
            code: `import torch
import torch.nn as nn

# Backpropagation — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Forward pass vs backward pass.',
          table: {
            headers: [
              'Aspect',
              'Forward Pass',
              'Backward Pass'
            ],
            rows: [
              [
                'Direction',
                'Input → Output',
                'Output → Input'
              ],
              [
                'Purpose',
                'Compute predictions and loss',
                'Compute gradients for weight updates'
              ],
              [
                'Data flow',
                'Activations propagate forward',
                'Error signals propagate backward'
              ],
              [
                'Operations',
                'Matrix multiplications + activations',
                'Chain rule derivatives'
              ],
              [
                'Memory need',
                'Store intermediate activations',
                'Reuse stored activations for grads'
              ],
              [
                'Result',
                'Loss value',
                'Gradient ∇W for every parameter'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing forward pass loss with backward pass gradients (fix: the forward pass computes the error; the backward pass computes how to change weights to reduce that error)',
            'Mistake 2: Forgetting to zero gradients before backward pass (fix: always call optimizer.zero_grad() in PyTorch or equivalent; otherwise gradients accumulate across batches)',
            'Mistake 3: Using non-differentiable operations in the computational graph (fix: use smooth approximations; operations like argmax or hard thresholding break gradient flow)'
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
          text: 'Backpropagation enables training of every modern neural architecture.',
          list: [
            'Image classification: backprop trains millions of parameters in ResNet and EfficientNet on ImageNet',
            'Large language models: backprop through transformer stacks trains billion-parameter models like GPT and BERT',
            'Speech recognition: trains deep acoustic models to map audio spectrograms to text transcripts',
            'Autonomous driving: trains perception networks to detect lanes, vehicles, and pedestrians from camera data'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Backpropagation computes gradients of the loss with respect to all weights using the chain rule',
            'It works backward from the output layer, reusing intermediate values from the forward pass',
            'The algorithm makes training deep networks computationally tractable',
            'Key requirement: all operations in the network must be differentiable',
            'Proper gradient management (zeroing, clipping) is critical for stable training'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What mathematical principle does backpropagation rely on?
Ans: The chain rule of calculus, which allows computing derivatives of composite functions layer by layer.`,
            `Q2: Why must we store activations during the forward pass?
Ans: They are needed during the backward pass to compute gradients via the chain rule.`,
            `Q3: What happens if a non-differentiable operation is placed in the network?
Ans: Gradient flow breaks at that point, preventing backpropagation from updating parameters before it.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Backpropagation</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Backpropagation")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'loss-functions': {
      title: 'Loss Functions',
      subtitle: 'Measuring prediction error and guiding learning',
      sections: [
        {
          heading: 'What are Loss Functions?',
          text: `A <strong>loss function</strong> quantifies the difference between a model's predictions and the true target values. It defines the objective that the optimizer minimizes during training. The choice of loss function shapes what the model learns to prioritize — for example, MSE penalizes large errors quadratically, while cross-entropy penalizes confident wrong predictions heavily.`,
          list: [
            'Loss functions convert the prediction error into a single scalar the optimizer can minimize',
            'Different tasks require different losses: regression, binary classification, multi-class classification',
            'The loss must be differentiable so gradients can propagate through the network',
            'Some losses are robust to outliers (MAE, Huber), while others are sensitive (MSE)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>A <strong>loss function</strong> quantifies the difference between a model's predictions and the true target values. It defines the objective that the optimizer minimizes during training. The choice of loss function shapes what the model learns to prioritize — for example, MSE penalizes large errors quadratically, while cross-entropy penalizes confident wrong predictions heavily. Start with intuition: ask what question this concept answers before memorizing formulas.</p>`,
            `<p>Technically, A <strong>loss function</strong> quantifies the difference between a model's predictions and the true target values. It defines the objective that the optimizer minimizes during training. The choice of loss function shapes what the model learns to prioritize — for example, MSE penalizes large errors quadratically, while cross-entropy penalizes confident wrong predictions heavily. Loss functions convert the prediction error into a single scalar the optimizer can minimize Different tasks require different losses: regression, binary classification, multi-class classification The loss must be differentiable so gradients can propagate through the network Some losses are robust to outliers (MAE, Huber), while others are sensitive (MSE)</p>`,
            '<p>You use loss functions when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Loss Functions

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Loss Functions sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cross-entropy with softmax produces clean, well-behaved gradients for classification.',
          example: {
            title: 'Example: MSE, Cross-Entropy, and Huber in PyTorch & TensorFlow',
            code: `import torch
import torch.nn as nn

# Regression losses
pred = torch.randn(8, requires_grad=True)
target = torch.randn(8)
mse = nn.MSELoss()(pred, target)
mae = nn.L1Loss()(pred, target)
huber = nn.SmoothL1Loss()(pred, target)

# Classification: CrossEntropyLoss expects raw logits
logits = torch.randn(8, 5)
labels = torch.randint(0, 5, (8,))
ce = nn.CrossEntropyLoss()(logits, labels)

# Binary classification
p = torch.sigmoid(torch.randn(8))
t = torch.randint(0, 2, (8,)).float()
bce = nn.BCELoss()(p, t)

print(f"MSE={mse.item():.4f} CE={ce.item():.4f} BCE={bce.item():.4f}")

# TensorFlow equivalents
import tensorflow as tf
pred_tf = tf.random.normal((8,))
target_tf = tf.random.normal((8,))
print(tf.keras.losses.MSE(target_tf, pred_tf))
logits_tf = tf.random.normal((8, 5))
labels_tf = tf.random.uniform((8,), maxval=5, dtype=tf.int32)
print(tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)(labels_tf, logits_tf))`,
            output: 'MSE for regression, cross-entropy for classification, and Huber for robust regression are the canonical choices.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Loss Functions with Python',
            code: `import torch
import torch.nn as nn

# Loss Functions — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Common loss functions and when to use them.',
          table: {
            headers: [
              'Loss Function',
              'Formula',
              'Use Case',
              'Key Property'
            ],
            rows: [
              [
                'MSE',
                '(1/N)Σ(yᵢ − ŷᵢ)²',
                'Regression',
                'Penalizes large errors heavily'
              ],
              [
                'MAE',
                '(1/N)Σ|yᵢ − ŷᵢ|',
                'Regression',
                'Robust to outliers'
              ],
              [
                'Binary Cross-Entropy',
                '−[y log(ŷ) + (1−y)log(1−ŷ)]',
                'Binary classification',
                'Penalizes confident wrong predictions'
              ],
              [
                'Categorical Cross-Entropy',
                '−Σ yᵢ log(ŷᵢ)',
                'Multi-class classification',
                'Standard for softmax outputs'
              ],
              [
                'Huber Loss',
                'Piecewise MSE/MAE',
                'Robust regression',
                'Smooth near zero, linear far from zero'
              ],
              [
                'Focal Loss',
                '−α(1−ŷ)ᵞ log(ŷ)',
                'Imbalanced classification',
                'Down-weights easy examples'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using MSE for classification problems (fix: use cross-entropy for classification; MSE treats probabilities as continuous values and produces weak gradients for confident errors)',
            'Mistake 2: Applying softmax before a loss that already includes it (fix: PyTorch CrossEntropyLoss expects raw logits, not softmax outputs; using both causes incorrect gradients)',
            'Mistake 3: Ignoring class imbalance when choosing loss (fix: use weighted cross-entropy or focal loss when some classes are rare to prevent the model from ignoring minority classes)'
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
          text: 'Loss function choice directly impacts model behavior in production.',
          list: [
            'Financial forecasting: MAE or Huber loss is preferred over MSE because outlier market events should not dominate training',
            'Medical diagnosis: weighted cross-entropy ensures rare diseases are not ignored in favor of common conditions',
            'Autonomous driving: smooth L1 loss balances precise localization with robustness to noisy sensor readings',
            'Object detection: combination of classification cross-entropy and bounding-box regression losses train multi-task detectors'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Loss functions measure prediction error and define what the model optimizes',
            'MSE for regression; cross-entropy for classification; MAE/Huber for robust regression',
            'Cross-entropy + softmax gives clean gradients: ∂L/∂z = ŷ − y',
            'Always match the loss to the task and output activation',
            'Handle class imbalance with weighted losses or focal loss'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is cross-entropy preferred over MSE for classification?
Ans: Cross-entropy penalizes confident wrong predictions more strongly and produces cleaner gradients when combined with softmax.`,
            `Q2: What is the gradient of cross-entropy loss with respect to logits?
Ans: ∂L/∂zᵢ = ŷᵢ − yᵢ, which is a simple and numerically stable expression.`,
            `Q3: When should you use Huber loss instead of MSE?
Ans: When outliers are present and you want to avoid them dominating the loss, since Huber transitions to linear penalty far from the target.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Loss Functions</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Loss Functions")
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
