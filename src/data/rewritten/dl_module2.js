// deep learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js dl_module2.js

export const dlModule2Content = {
  module2: {
    'gradient-descent': {
      title: 'Gradient Descent',
      subtitle: 'Optimizing neural network weights',
      sections: [
        {
          heading: 'What is Gradient Descent?',
          text: '<strong>Gradient Descent</strong> is the core optimization algorithm used to train neural networks. It iteratively adjusts weights in the direction that reduces the loss function, using the negative gradient as the update direction. The variants — batch, stochastic, and mini-batch — differ in how much data is used per update.',
          list: [
            'Gradient descent minimizes the loss by moving weights in the opposite direction of the gradient',
            'Batch gradient descent uses the entire dataset for stable but slow updates',
            'Stochastic gradient descent uses one sample at a time for fast but noisy updates',
            'Mini-batch gradient descent balances stability and speed using small batches (e.g., 32–512 samples)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Gradient Descent</strong> is the core optimization algorithm used to train neural networks. It iteratively adjusts weights in the direction that reduces the loss function, using the negative gradient as the update direction. The variants — batch, stochastic, and mini-batch — differ in how much data is used per update. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Gradient Descent</strong> is the core optimization algorithm used to train neural networks. It iteratively adjusts weights in the direction that reduces the loss function, using the negative gradient as the update direction. The variants — batch, stochastic, and mini-batch — differ in how much data is used per update. Gradient descent minimizes the loss by moving weights in the opposite direction of the gradient Batch gradient descent uses the entire dataset for stable but slow updates Stochastic gradient descent uses one sample at a time for fast but noisy updates Mini-batch gradient descent balances stability and speed using small batches (e.g., 32–512 samples)</p>',
            '<p>You use gradient descent when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Gradient Descent

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Gradient Descent sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The update rule moves weights opposite to the gradient, scaled by the learning rate.',
          example: {
            title: 'Mini-Batch Gradient Descent in NumPy and PyTorch',
            code: `import numpy as np

# Synthetic data
np.random.seed(0)
X = np.random.randn(100, 3)
y = (X[:,0] + 2*X[:,1] - 0.5*X[:,2] + 0.1).reshape(-1,1)

w = np.zeros((3, 1))
b = 0.0
lr = 0.05
batch_size = 16
epochs = 100

for epoch in range(epochs):
    # Shuffle each epoch
    idx = np.random.permutation(len(X))
    X, y = X[idx], y[idx]
    for i in range(0, len(X), batch_size):
        xb, yb = X[i:i+batch_size], y[i:i+batch_size]
        pred = xb @ w + b
        grad_w = xb.T @ (pred - yb) / len(xb)
        grad_b = (pred - yb).mean()
        w -= lr * grad_w
        b -= lr * grad_b
print("w:", w.ravel(), "b:", b)

# PyTorch equivalent
import torch, torch.nn as nn
Xt = torch.tensor(X, dtype=torch.float32)
yt = torch.tensor(y, dtype=torch.float32)
model = nn.Linear(3, 1)
opt = torch.optim.SGD(model.parameters(), lr=0.05)
loss_fn = nn.MSELoss()
for epoch in range(100):
    for i in range(0, len(Xt), batch_size):
        xb, yb = Xt[i:i+batch_size], yt[i:i+batch_size]
        opt.zero_grad()
        loss = loss_fn(model(xb), yb)
        loss.backward()
        opt.step()`,
            output: 'Mini-batch GD (B=32–512) is the most widely used variant in practice.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Gradient Descent with Python',
            code: `import torch
import torch.nn as nn

# Gradient Descent — minimal tensor workflow
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
          text: 'Batch vs stochastic vs mini-batch gradient descent.',
          table: {
            headers: [
              'Type',
              'Data Used',
              'Pros',
              'Cons',
              'Best For'
            ],
            rows: [
              [
                'Batch GD',
                'Entire dataset (N samples)',
                'Stable, accurate gradient',
                'Slow, memory heavy',
                'Small datasets'
              ],
              [
                'Stochastic GD',
                '1 sample per update',
                'Fast, online learning, escapes local minima',
                'Noisy, oscillates',
                'Streaming data'
              ],
              [
                'Mini-batch GD',
                'B samples (e.g., 32–512)',
                'Balanced, vectorized on GPU',
                'Requires tuning B',
                'Most deep learning tasks'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using batch gradient descent on large datasets (fix: use mini-batch GD; batch GD is too slow and memory-intensive for millions of samples)',
            'Mistake 2: Setting a fixed learning rate that is too high or too low (fix: use learning rate schedules — step decay, exponential decay, or cosine annealing — to adapt η over time)',
            'Mistake 3: Not shuffling data before each epoch in SGD (fix: always shuffle training data each epoch; ordered data introduces harmful correlation in gradient estimates)'
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
          text: 'Gradient descent variants are chosen based on data scale and constraints.',
          list: [
            'Large-scale vision models: mini-batch GD with momentum on GPUs trains ResNet and Vision Transformer on millions of images',
            'Online recommendation systems: stochastic gradient descent updates models continuously as new user interactions arrive',
            'Small tabular datasets: batch gradient descent or even closed-form solutions work well with limited data',
            'Federated learning: mini-batch GD runs locally on devices before aggregated updates are sent to a central server'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Gradient descent iteratively updates weights to minimize loss using the negative gradient direction',
            'Batch GD: accurate but slow; uses all data per update',
            'Stochastic GD: fast but noisy; uses one sample per update',
            'Mini-batch GD: the practical default; balances speed, stability, and GPU vectorization',
            'Learning rate and batch size are the most critical hyperparameters to tune'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is mini-batch gradient descent preferred over batch GD for large datasets?
Ans: It is computationally efficient, fits in GPU memory, and provides a good balance between gradient accuracy and update frequency.`,
            `Q2: What is the risk of a learning rate that is too high?
Ans: The loss may oscillate or diverge because weight updates overshoot the minimum.`,
            `Q3: Why does SGD help escape local minima better than batch GD?
Ans: The noise in single-sample gradients allows the optimizer to bounce out of shallow local minima and explore the loss landscape.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Gradient Descent</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Gradient Descent")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'advanced-optimizers': {
      title: 'Advanced Optimizers',
      subtitle: 'Momentum, adaptive learning rates, and optimizer comparison',
      sections: [
        {
          heading: 'What are Advanced Optimizers?',
          text: 'Optimization refers to the algorithms and techniques used to minimize the loss function during neural network training. While vanilla gradient descent is the foundation, modern deep learning relies on <strong>adaptive optimizers</strong> like Adam, RMSProp, and AdamW that automatically adjust learning rates per parameter and incorporate momentum for faster, more stable convergence.',
          list: [
            'Optimization algorithms determine how weights are updated based on computed gradients',
            'Momentum accumulates past gradients to speed up convergence and dampen oscillations',
            'Adaptive optimizers maintain per-parameter learning rates based on historical gradient magnitudes',
            'The choice of optimizer affects both training speed and final model quality'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Optimization refers to the algorithms and techniques used to minimize the loss function during neural network training. While vanilla gradient descent is the foundation, modern deep learning relies on <strong>adaptive optimizers</strong> like Adam, RMSProp, and AdamW that automatically adjust learning rates per parameter and incorporate momentum for faster, more stable convergence. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Optimization refers to the algorithms and techniques used to minimize the loss function during neural network training. While vanilla gradient descent is the foundation, modern deep learning relies on <strong>adaptive optimizers</strong> like Adam, RMSProp, and AdamW that automatically adjust learning rates per parameter and incorporate momentum for faster, more stable convergence. Optimization algorithms determine how weights are updated based on computed gradients Momentum accumulates past gradients to speed up convergence and dampen oscillations Adaptive optimizers maintain per-parameter learning rates based on historical gradient magnitudes The choice of optimizer affects both training speed and final model quality</p>',
            '<p>You use advanced optimizers when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Advanced Optimizers

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Advanced Optimizers sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Adam combines momentum with adaptive learning rates for robust, parameter-wise updates.',
          example: {
            title: 'Optimizer Comparison in PyTorch and TensorFlow',
            code: `import torch
import torch.nn as nn

model = nn.Sequential(nn.Linear(10, 64), nn.ReLU(), nn.Linear(64, 1))

# SGD with momentum
sgd = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9, weight_decay=1e-4)

# Adam
adam = torch.optim.Adam(model.parameters(), lr=1e-3, betas=(0.9, 0.999))

# AdamW (decoupled weight decay)
adamw = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=0.01)

# RMSprop
rmsprop = torch.optim.RMSprop(model.parameters(), lr=1e-3, alpha=0.99)

# TensorFlow / Keras equivalents
import tensorflow as tf
sgd_tf = tf.keras.optimizers.SGD(learning_rate=0.01, momentum=0.9)
adam_tf = tf.keras.optimizers.Adam(learning_rate=1e-3)
adamw_tf = tf.keras.optimizers.AdamW(learning_rate=1e-3, weight_decay=0.01)
rmsprop_tf = tf.keras.optimizers.RMSprop(learning_rate=1e-3)

# Plotting learning curves (conceptual)
import matplotlib.pyplot as plt
# history_sgd = ...; history_adam = ...
# plt.plot(history_sgd, label='SGD'); plt.plot(history_adam, label='Adam'); plt.legend()`,
            output: 'Adam adapts learning rates per parameter and is the most popular default optimizer; AdamW is preferred for transformers.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Advanced Optimizers with Python',
            code: `import torch
import torch.nn as nn

# Advanced Optimizers — minimal tensor workflow
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
          text: 'Comparing popular optimizers.',
          table: {
            headers: [
              'Optimizer',
              'Key Feature',
              'Best For',
              'Caveat'
            ],
            rows: [
              [
                'SGD + Momentum',
                'Accumulates velocity along gradients',
                'General problems',
                'Requires tuning learning rate'
              ],
              [
                'AdaGrad',
                'Adapts LR per parameter based on history',
                'Sparse data, NLP',
                'Learning rate decays too aggressively'
              ],
              [
                'RMSProp',
                'Moving average of squared gradients',
                'RNNs, non-stationary data',
                'Needs decay hyperparameter tuning'
              ],
              [
                'Adam',
                'Momentum + RMSProp combined',
                'Most problems (default choice)',
                'May overfit; needs warmup in transformers'
              ],
              [
                'AdamW',
                'Adam with decoupled weight decay',
                'Transformers, large models',
                'Default for modern NLP and vision'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Adam with L2 regularization instead of AdamW (fix: AdamW decouples weight decay from the adaptive gradient update; using L2 with Adam incorrectly regularizes the scaled gradients)',
            'Mistake 2: Not using learning rate warmup with Adam in transformers (fix: start with a small LR and linearly increase for the first few thousand steps to prevent early instability)',
            'Mistake 3: Sticking with Adam for every problem without trying SGD (fix: SGD with momentum sometimes generalizes better than Adam; it is worth experimenting for final model quality)'
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
          text: 'Optimizer choice is a critical design decision in production ML pipelines.',
          list: [
            'Large language models: AdamW with cosine decay and warmup is the standard for training GPT, LLaMA, and BERT-scale models',
            'Computer vision: SGD with momentum and step decay remains competitive for ResNet and ConvNeXt on ImageNet',
            'Reinforcement learning: RMSProp and Adam handle the non-stationary, high-variance gradients common in policy gradient methods',
            'Edge deployment: AdaFactor and memory-efficient variants reduce optimizer state for training on resource-constrained devices'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Optimization goes beyond vanilla GD: momentum, adaptive rates, and weight decay all improve training',
            'Momentum: accumulates velocity to speed up and smooth updates',
            'Adaptive optimizers (Adam, RMSProp) maintain per-parameter learning rates based on gradient history',
            'AdamW decouples weight decay from gradient scaling and is the modern default for many architectures',
            'Learning rate scheduling (warmup, decay, cosine) is as important as the optimizer choice itself'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What two ideas does Adam combine?
Ans: Momentum (exponential moving average of gradients) and RMSProp (exponential moving average of squared gradients).`,
            `Q2: Why is AdamW preferred over Adam with L2 regularization?
Ans: AdamW decouples weight decay from the adaptive gradient scaling, so regularization is applied correctly to the weights rather than to the momentum-adjusted gradients.`,
            `Q3: What problem does learning rate warmup solve?
Ans: In the early stages of training, large adaptive learning rates can cause instability and divergence; warmup gradually increases the LR to prevent this.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Advanced Optimizers</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Advanced Optimizers")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'weight-initialization': {
      title: 'Weight Initialization',
      subtitle: 'Xavier, He, and why initialization matters',
      sections: [
        {
          heading: 'What is Weight Initialization?',
          text: 'Weight Initialization is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Weight Initialization provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use weight initialization when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Weight Initialization

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Weight Initialization sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Xavier and He formulas set initial weight variance to preserve forward and backward signal magnitudes.',
          example: {
            title: 'Xavier and He Initialization in NumPy, PyTorch, and TensorFlow',
            code: `import numpy as np

def xavier_uniform(fan_in, fan_out):
    limit = np.sqrt(6.0 / (fan_in + fan_out))
    return np.random.uniform(-limit, limit, (fan_in, fan_out))

def he_normal(fan_in, fan_out):
    std = np.sqrt(2.0 / fan_in)
    return np.random.normal(0, std, (fan_in, fan_out))

W_xavier = xavier_uniform(784, 256)
W_he = he_normal(784, 256)
print("Xavier std:", W_xavier.std(), "He std:", W_he.std())

# PyTorch
import torch, torch.nn as nn
layer_x = nn.Linear(784, 256)
nn.init.xavier_uniform_(layer_x.weight)

layer_h = nn.Linear(784, 256)
nn.init.kaiming_normal_(layer_h.weight, nonlinearity='relu')

# TensorFlow / Keras
import tensorflow as tf
layer_tf = tf.keras.layers.Dense(256, kernel_initializer='he_normal',
                                  activation='relu')
layer_tf2 = tf.keras.layers.Dense(256, kernel_initializer='glorot_uniform')`,
            output: 'Use Xavier for tanh/sigmoid and He for ReLU to maintain stable variance.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Weight Initialization with Python',
            code: `import torch
import torch.nn as nn

# Weight Initialization — minimal tensor workflow
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
          text: 'Xavier vs He initialization.',
          table: {
            headers: [
              'Aspect',
              'Xavier / Glorot',
              'He'
            ],
            rows: [
              [
                'Formula',
                'Var(W) = 2 / (fan_in + fan_out)',
                'Var(W) = 2 / fan_in'
              ],
              [
                'Activation',
                'Sigmoid, tanh, linear',
                'ReLU, Leaky ReLU'
              ],
              [
                'Distribution',
                'Uniform or normal',
                'Usually normal'
              ],
              [
                'Goal',
                'Keep activation variance constant',
                'Compensate for ReLU killing half the inputs'
              ],
              [
                'Use in modern CNN',
                'Less common',
                'Default for ReLU-based nets'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Initializing all weights to zero (fix: zero weights cause symmetric gradients and prevent learning; use random initialization)',
            'Mistake 2: Using Xavier initialization with ReLU networks (fix: ReLU zeros out half the activations, so He initialization with variance 2/fan_in is more appropriate)',
            'Mistake 3: Forgetting to initialize biases (fix: initialize biases to zero for most layers; use small positive values for LSTM forget gates if specified)'
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
          text: 'Initialization choices directly affect whether deep models train at all.',
          list: [
            'ResNet: He initialization is the default because ResNet uses ReLU activations throughout',
            'Vision Transformers: often use truncated normal initialization with small standard deviations for patch embeddings',
            'LSTMs/GRUs: use orthogonal or Xavier initialization for recurrent weights and forget-gate bias tricks',
            'Generative models: GAN generators and discriminators are sensitive to initialization; spectral normalization helps stability'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Weight initialization sets the optimization starting point and affects gradient flow',
            'Xavier initialization preserves variance for sigmoid/tanh networks',
            'He initialization compensates for ReLU sparsity by using variance 2/fan_in',
            'Never initialize all weights to zero — randomness breaks symmetry',
            'Most modern frameworks apply sensible defaults, but explicit initialization is important for custom layers'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is initializing all weights to zero problematic?
Ans: Zero weights produce identical gradients for all neurons, so hidden units never differentiate and the network cannot learn.`,
            `Q2: When should you use He initialization over Xavier?
Ans: When using ReLU activations, because He initialization accounts for the fact that ReLU zeros out roughly half of the inputs.`,
            `Q3: What does fan_in represent in initialization formulas?
Ans: The number of input connections to a neuron, which determines the scale of the weighted sum variance.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Weight Initialization</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Weight Initialization")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'normalization-and-regularization': {
      title: 'Normalization & Regularization',
      subtitle: 'BatchNorm, LayerNorm, Dropout, and weight decay',
      sections: [
        {
          heading: 'What is Normalization & Regularization?',
          text: 'Normalization & Regularization is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Normalization & Regularization provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use normalization & regularization when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Normalization & Regularization

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Normalization & Regularization sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'BatchNorm: normalize by batch mean and variance, then scale and shift. Dropout: zero neurons with probability p during training.',
          example: {
            title: 'BatchNorm, LayerNorm, and Dropout in PyTorch & TensorFlow',
            code: `import torch, torch.nn as nn

# PyTorch
net = nn.Sequential(
    nn.Linear(256, 128),
    nn.BatchNorm1d(128),
    nn.ReLU(),
    nn.Dropout(0.3),
    nn.Linear(128, 10)
)

# LayerNorm for sequences
seq = nn.TransformerEncoderLayer(d_model=512, nhead=8,
                                  dim_feedforward=2048,
                                  norm_first=True, batch_first=True)

# TensorFlow / Keras
import tensorflow as tf
net_tf = tf.keras.Sequential([
    tf.keras.layers.Dense(128),
    tf.keras.layers.BatchNormalization(),
    tf.keras.layers.ReLU(),
    tf.keras.layers.Dropout(0.3),
    tf.keras.layers.Dense(10)
])

# Manual BatchNorm in NumPy (inference mode)
def batch_norm(x, gamma, beta, mean, var, eps=1e-5):
    return gamma * (x - mean) / np.sqrt(var + eps) + beta`,
            output: 'BatchNorm for CNNs/MLPs, LayerNorm for sequences/RNNs/Transformers; Dropout before the final layer is common.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Normalization & Regularization with Python',
            code: `import torch
import torch.nn as nn

# Normalization & Regularization — minimal tensor workflow
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
          text: 'BatchNorm vs LayerNorm vs Dropout vs Weight Decay.',
          table: {
            headers: [
              'Technique',
              'What It Does',
              'Where Used',
              'Caveat'
            ],
            rows: [
              [
                'BatchNorm',
                'Normalize across batch per feature',
                'CNNs, MLPs',
                'Sensitive to small batch size'
              ],
              [
                'LayerNorm',
                'Normalize across features per sample',
                'RNNs, Transformers',
                'No batch dependence'
              ],
              [
                'InstanceNorm',
                'Normalize per channel per sample',
                'Style transfer',
                'Removes contrast info'
              ],
              [
                'GroupNorm',
                'Normalize in channel groups',
                'Small batches',
                'Generalizes BN'
              ],
              [
                'Dropout',
                'Randomly zero activations',
                'Before fully-connected layers',
                'Must scale by 1/(1-p) at test time'
              ],
              [
                'Weight Decay',
                'Penalize squared weights',
                'All optimizers',
                'Use AdamW for Adam'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to call model.eval() before validation in PyTorch (fix: BatchNorm and Dropout behave differently at train/test time; always switch modes)',
            'Mistake 2: Using BatchNorm with very small batch sizes (fix: use GroupNorm or LayerNorm when batch size < 8 to avoid noisy statistics)',
            'Mistake 3: Applying dropout too close to the output layer or using too high a rate (fix: typical dropout rates are 0.2–0.5; output layers usually have no dropout)'
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
          text: 'Normalization and regularization are essential in production deep learning.',
          list: [
            'ResNet: BatchNorm enables training of networks with 100+ layers by stabilizing gradients',
            'Transformers: LayerNorm is used instead of BatchNorm because sequence batches are variable and attention heads are independent',
            'Computer vision: Dropout in fully-connected layers of AlexNet/VGG prevents overfitting on ImageNet',
            'Medical imaging: small datasets rely heavily on Dropout and data augmentation to avoid overfitting'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'BatchNorm normalizes per-feature across the batch; LayerNorm normalizes per-sample across features',
            'Use BatchNorm for CNNs/MLPs and LayerNorm for sequences and Transformers',
            'Dropout prevents overfitting by randomly dropping activations during training',
            'Weight decay (L2) penalizes large weights; use AdamW when training with Adam',
            'Always set model.eval() in PyTorch before validation/testing'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is LayerNorm preferred over BatchNorm in Transformers?
Ans: Transformers process variable-length sequences and use small per-sample independence; LayerNorm does not depend on batch statistics.`,
            `Q2: Why must dropout be disabled at test time?
Ans: Dropout is only a training regularizer; at inference all neurons are used and outputs are scaled to maintain expected magnitudes.`,
            `Q3: What is the difference between weight decay and L2 regularization in Adam?
Ans: They are mathematically equivalent for SGD, but AdamW decouples weight decay from adaptive gradient scaling, making it work correctly with Adam.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Normalization & Regularization</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Normalization & Regularization")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'learning-rate-scheduling': {
      title: 'Learning Rate Scheduling',
      subtitle: 'Warmup, decay, and cosine annealing',
      sections: [
        {
          heading: 'What is Learning Rate Scheduling?',
          text: 'Learning Rate Scheduling is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Learning Rate Scheduling provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use learning rate scheduling when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Learning Rate Scheduling

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Learning Rate Scheduling sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Common schedules: step decay, exponential decay, cosine annealing, and warmup.',
          example: {
            title: 'LR Schedules in PyTorch and TensorFlow',
            code: `import torch, torch.nn as nn
from torch.optim.lr_scheduler import StepLR, CosineAnnealingLR, ExponentialLR

model = nn.Linear(10, 1)
opt = torch.optim.SGD(model.parameters(), lr=0.1)

# Step decay: multiply LR by gamma every N epochs
step_scheduler = StepLR(opt, step_size=30, gamma=0.1)

# Cosine annealing
T_max = 100
cos_scheduler = CosineAnnealingLR(opt, T_max=T_max, eta_min=1e-6)

# Exponential decay
exp_scheduler = ExponentialLR(opt, gamma=0.95)

# Warmup + cosine (manual)
for epoch in range(T_max):
    if epoch < 5:                       # 5-epoch warmup
        lr = 0.1 * (epoch + 1) / 5
        for pg in opt.param_groups:
            pg['lr'] = lr
    else:
        cos_scheduler.step()
    # training loop here...

# TensorFlow / Keras
callbacks = [
    tf.keras.callbacks.ReduceLROnPlateau(monitor='val_loss', factor=0.2,
                                          patience=5, min_lr=1e-6),
    tf.keras.callbacks.CosineDecay(initial_learning_rate=0.1,
                                    decay_steps=1000, alpha=1e-6)
]`,
            output: 'Combine warmup with cosine annealing for modern transformer and CNN training.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Learning Rate Scheduling with Python',
            code: `import torch
import torch.nn as nn

# Learning Rate Scheduling — minimal tensor workflow
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
          text: 'Common learning rate schedules compared.',
          table: {
            headers: [
              'Schedule',
              'Mechanism',
              'Best For',
              'Caveat'
            ],
            rows: [
              [
                'Step Decay',
                'Drop LR by factor every N epochs',
                'CNNs, simple baselines',
                'Requires tuning step size'
              ],
              [
                'Exponential Decay',
                'Multiply by gamma every step',
                'Smooth decay',
                'May decay too fast'
              ],
              [
                'Cosine Annealing',
                'LR follows cosine curve to eta_min',
                'Modern CNNs, transformers',
                'Needs T_max tuning'
              ],
              [
                'ReduceLROnPlateau',
                'Drop LR when metric stalls',
                'General training',
                'Requires patience'
              ],
              [
                'Warmup',
                'Linearly increase LR at start',
                'Large batches, Adam',
                'Prevents early divergence'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using cosine annealing without warmup for large-batch training (fix: always add a short warmup when batch size or learning rate is large)',
            'Mistake 2: Calling scheduler.step() at the wrong frequency (fix: in PyTorch, some schedulers step per epoch, others per iteration; read the docs and match your loop)',
            'Mistake 3: Combining too many schedules simultaneously (fix: pick one primary schedule and optionally ReduceLROnPlateau; stacking complex schedules often hurts reproducibility)'
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
          text: 'LR scheduling is used in virtually every state-of-the-art training recipe.',
          list: [
            'ImageNet training: SGD with momentum + cosine annealing + warmup is the ResNet standard',
            'BERT/GPT: AdamW with linear warmup and cosine or linear decay over millions of steps',
            'Object detection: warmup followed by step decay at specific epochs is common in Detectron2 and MMDetection',
            'Fine-tuning: use a much smaller base LR and shorter warmup to avoid destroying pre-trained features'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Learning rate scheduling adapts the LR during training for faster convergence and better final accuracy',
            'Warmup stabilizes early training, especially with adaptive optimizers and large batches',
            'Step decay and cosine annealing are the two most common decay strategies',
            'ReduceLROnPlateau reacts to validation metrics and is useful when the optimal schedule is unknown',
            'Match scheduler frequency (epoch vs iteration) to your training loop'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is warmup important when using large learning rates?
Ans: Warmup gradually increases the LR, preventing large adaptive gradient updates from destabilizing early training.`,
            `Q2: What does cosine annealing do?
Ans: It smoothly decreases the learning rate following a cosine curve from the initial value down to a minimum.`,
            `Q3: When is ReduceLROnPlateau preferred over a fixed schedule?
Ans: When you do not know the ideal decay epochs in advance; it reacts to stagnation in validation metrics.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Learning Rate Scheduling</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Learning Rate Scheduling")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'debugging-training': {
      title: 'Debugging Training',
      subtitle: 'NaN loss, vanishing gradients, gradient clipping, accumulation, and distributed training',
      sections: [
        {
          heading: 'What is Debugging Training?',
          text: 'Debugging Training is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Debugging Training provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use debugging training when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Debugging Training

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Debugging Training sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Gradient clipping caps the norm of gradients. Gradient accumulation averages gradients over several forward passes before updating.',
          example: {
            title: 'Gradient Clipping, Accumulation, and Debugging Checks',
            code: `import torch, torch.nn as nn

model = nn.Linear(100, 10)
opt = torch.optim.Adam(model.parameters(), lr=1e-3)

# Gradient clipping by norm
for p in model.parameters():
    if p.grad is not None:
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)

# Gradient accumulation
accum_steps = 4
opt.zero_grad()
for i, (xb, yb) in enumerate(dataloader):
    loss = loss_fn(model(xb), yb) / accum_steps
    loss.backward()
    if (i + 1) % accum_steps == 0:
        opt.step()
        opt.zero_grad()

# Debugging checks
for name, p in model.named_parameters():
    if p.grad is not None:
        assert not torch.isnan(p.grad).any(), f"NaN grad in {name}"
        print(f"{name}: grad mean={p.grad.mean():.2e} std={p.grad.std():.2e}")

# Check loss and activations
print("loss:", loss.item())
print("activations mean:", model(xb).mean().item())

# Detect vanishing gradients
from torch.utils.tensorboard import SummaryWriter
writer = SummaryWriter()
for name, p in model.named_parameters():
    writer.add_histogram(f"grad/{name}", p.grad, global_step)`,
            output: 'Clipping stabilizes training; accumulation reduces memory pressure; histograms reveal vanishing or exploding gradients.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Debugging Training with Python',
            code: `import torch
import torch.nn as nn

# Debugging Training — minimal tensor workflow
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
          text: 'Techniques for stabilizing and scaling training.',
          table: {
            headers: [
              'Technique',
              'Problem Solved',
              'How It Works',
              'When to Use'
            ],
            rows: [
              [
                'Gradient Clipping',
                'Exploding gradients / NaN loss',
                'Caps gradient norm to max_norm',
                'RNNs, Transformers, large LRs'
              ],
              [
                'Gradient Accumulation',
                'Limited GPU memory',
                'Average grads over N mini-batches',
                'Need large batch on small GPU'
              ],
              [
                'Mixed Precision',
                'Memory and speed',
                'FP16 forward/backward + FP32 master weights',
                'Modern GPUs with Tensor Cores'
              ],
              [
                'Gradient Penalty',
                'Unstable GANs',
                'Penalize gradient norm',
                'WGAN-GP'
              ],
              [
                'Check NaNs Early',
                'Silent failures',
                'Assert after loss.backward()',
                'All training loops'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring NaN loss and continuing training (fix: add asserts and print max gradient/activation values; reduce LR or add normalization)',
            'Mistake 2: Using gradient clipping on every problem (fix: clipping helps RNNs and unstable training but can harm convergence in stable CNNs; monitor gradient norms first)',
            'Mistake 3: Forgetting to scale loss when using gradient accumulation (fix: divide loss by accumulation steps so the effective gradient magnitude matches the target batch size)'
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
          text: 'Training at scale requires combining many stabilization techniques.',
          list: [
            'Large language models: gradient clipping, mixed precision, gradient accumulation, and FSDP are all used together to train GPT-scale models',
            'Vision transformers: DDP with cosine annealing and warmup trains models like ViT and DeiT on hundreds of GPUs',
            'Self-driving perception: gradient accumulation lets teams use large effective batch sizes on memory-hungry 3D detection heads',
            'Recommender systems: model parallelism splits huge embedding tables across many GPU nodes'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'NaN loss usually indicates instability: check LR, initialization, loss implementation, and activations',
            'Gradient clipping controls exploding gradients, especially in RNNs and Transformers',
            'Gradient accumulation simulates large batches without requiring a large GPU',
            'Mixed precision (FP16/BF16) speeds up training and reduces memory on modern hardware',
            'Distributed training scales via DDP (data parallel), model parallel, or FSDP (sharded) strategies'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the most common cause of NaN loss?
Ans: A learning rate that is too high, numerical overflow in softmax/loss, or bad initialization.`,
            `Q2: Why must you divide the loss by accumulation steps?
Ans: To keep the effective gradient magnitude the same as training on the full combined batch.`,
            `Q3: What is the difference between Data Parallel and Model Parallel training?
Ans: Data parallel splits the batch across replicas of the full model; model parallel splits the model itself across devices.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Debugging Training</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Debugging Training")
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
