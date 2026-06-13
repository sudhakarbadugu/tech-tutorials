export const multimodalUnit1Content = {
  unit1: {
    intro: {
      title: 'Introduction to Multimodal Machine Learning',
      subtitle: 'Understanding multimodal data and its importance across various fields',
      sections: [
        {
          heading: 'What is Multimodal Machine Learning?',
          text: 'Multimodal Machine Learning (MML) is a subfield of artificial intelligence that builds models capable of processing and relating information from multiple modalities. A <strong>modality</strong> refers to a distinct type of data or sensory channel, such as text, images, audio, video, or sensor data.',
          list: [
            'Humans naturally process multimodal information — we see, hear, and read simultaneously',
            'Real-world data is inherently multimodal: videos contain visual + audio + text (subtitles)',
            'MML aims to create systems that can understand and reason across these different data types',
            'Applications include autonomous driving, healthcare diagnostics, content moderation, and assistive technologies'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Different modalities capture complementary aspects of the world. Combining them leads to more robust and accurate systems than any single modality alone.',
          example: {
            title: 'Example: Audio-Visual Speech Recognition',
            code: 'Input Modalities:\n  - Audio: Speech waveform / spectrogram\n  - Visual: Lip movements / face video\n  \nScenario: Noisy restaurant (SNR = 5dB)\n  \nAudio-only ASR accuracy: 30%\nAudio-Visual (AVSR) accuracy: 85%\n  \nImprovement: Visual lip-reading compensates\nfor degraded audio signal.',
            output: 'AVSR outperforms audio-only ASR by <strong>55 percentage points</strong> in noisy conditions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Unimodal vs multimodal systems.',
          table: {
            headers: ['Aspect', 'Unimodal', 'Multimodal'],
            rows: [
              ['Input', 'Single data type (text, image, or audio)', 'Multiple data types combined'],
              ['Robustness', 'Fails if that modality is noisy or missing', 'Compensates across modalities'],
              ['Information', 'Limited to one perspective', 'Richer, complementary information'],
              ['Complexity', 'Simpler models, fewer parameters', 'More complex fusion and alignment needed']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating multimodal data as independent inputs without alignment (fix: use attention or cross-modal embedding layers to relate modalities)',
            'Mistake 2: Assuming more modalities always help (fix: validate each modality; irrelevant data can hurt performance through noise)',
            'Mistake 3: Ignoring modality-specific preprocessing (fix: images need normalization, text needs tokenization, audio needs spectrograms — each has its own pipeline)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Multimodal ML powers a wide range of real-world applications.',
          list: [
            'Healthcare: combining X-rays + clinical notes + lab results for diagnosis',
            'Autonomous vehicles: fusing camera, LiDAR, radar, and GPS data for navigation',
            'Content moderation: analyzing images, text, and audio together for policy violations',
            'Virtual assistants: understanding spoken commands + visual context for better responses'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal ML = processing and relating information from multiple data types',
            'Modalities include text, image, audio, video, and sensor data',
            'Combining modalities improves robustness and accuracy beyond any single source',
            'Core challenges: representation, translation, alignment, fusion, and co-learning',
            'Applications span healthcare, autonomous driving, content moderation, and assistive tech'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is a modality in multimodal machine learning?\nAns: A distinct type of data or sensory channel, such as text, image, audio, or video.',
            'Q2: Why does audio-visual speech recognition outperform audio-only in noisy environments?\nAns: Visual lip-reading provides complementary information that compensates when audio is degraded.',
            'Q3: Name the five core challenges in multimodal ML.\nAns: Representation, translation, alignment, fusion, and co-learning.'
          ]
        }
      ]
    },
    'linear-models': {
      title: 'Linear Models',
      subtitle: 'The foundation of machine learning and neural networks',
      sections: [
        {
          heading: 'What is a Linear Model?',
          text: 'A <strong>Linear Model</strong> predicts the output as a linear combination of input features. It is the simplest parametric model and forms the mathematical foundation for neural networks. Every neuron in a neural network is essentially a linear model followed by a non-linear activation function.',
          list: [
            'Predicts output as a weighted sum of inputs plus a bias term',
            'Forms the mathematical core of every neuron in a neural network',
            'Computationally efficient with closed-form solutions for some variants',
            'Highly interpretable — each weight shows the contribution of a feature'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The linear model formula and its variants.',
          example: {
            title: 'Example: House Price Prediction',
            code: 'Linear Model Formula:\n  ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b\n\nWhere:\n  xᵢ = input features\n  wᵢ = learned weights\n  b  = bias (intercept)\n  ŷ  = predicted output\n\nHouse Price Example:\n  Features: [sqft=1200, bedrooms=3, location_score=7]\n  Model: Price = 0.2×sqft + 15×bedrooms + 5×location + 100\n\n  Price = 0.2(1200) + 15(3) + 5(7) + 100\n        = 240 + 45 + 35 + 100\n        = 420 ($420,000)',
            output: 'Each coefficient is directly interpretable: each additional square foot adds $200.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Linear regression vs logistic regression.',
          table: {
            headers: ['Aspect', 'Linear Regression', 'Logistic Regression'],
            rows: [
              ['Task', 'Continuous prediction', 'Binary classification'],
              ['Output', 'Real value (-∞ to +∞)', 'Probability (0 to 1)'],
              ['Activation', 'None (raw linear output)', 'Sigmoid function'],
              ['Loss', 'Mean Squared Error (MSE)', 'Binary Cross-Entropy'],
              ['Interpretation', 'Each unit increase in x changes y by w', 'Log-odds change; odds ratio interpretation']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using linear regression for classification (fix: use logistic regression or softmax for categorical targets)',
            'Mistake 2: Ignoring feature scaling when features have very different ranges (fix: standardize or normalize inputs so weights are comparable)',
            'Mistake 3: Assuming linearity in relationships that are inherently non-linear (fix: add polynomial features or switch to neural networks for complex patterns)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Linear models are used everywhere as baselines and building blocks.',
          list: [
            'Finance: linear regression for predicting stock returns from fundamental factors',
            'Healthcare: logistic regression for predicting disease risk from patient features',
            'Marketing: predicting customer lifetime value from engagement metrics',
            'Neural networks: every neuron performs a linear transformation before activation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Linear model: ŷ = Σwᵢxᵢ + b — weighted sum plus bias',
            'Linear regression: for continuous targets; MSE loss',
            'Logistic regression: for binary classification; sigmoid + cross-entropy',
            'Every neuron in a neural network is a linear model followed by non-linearity',
            'Simple, interpretable, and computationally efficient — but limited to linear relationships'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is a linear model called the foundation of neural networks?\nAns: Every neuron computes a weighted sum of inputs (linear transformation) before applying an activation function.',
            'Q2: What is the key difference between linear and logistic regression outputs?\nAns: Linear regression outputs unbounded real values; logistic regression outputs probabilities between 0 and 1 via the sigmoid.',
            'Q3: What loss function should you use for a linear regression problem?\nAns: Mean Squared Error (MSE) is the standard choice for continuous prediction tasks.'
          ]
        }
      ]
    },
    'score-loss': {
      title: 'Score & Loss Functions',
      subtitle: 'Measuring model performance and guiding learning',
      sections: [
        {
          heading: 'What are Score and Loss Functions?',
          text: 'A <strong>score function</strong> maps raw input data to class scores (unnormalized log probabilities). A <strong>loss function</strong> quantifies how far predictions are from true values, providing the signal that drives weight updates during training.',
          list: [
            'Score function: raw outputs before normalization (logits)',
            'Loss function: measures prediction error; the objective to minimize',
            'Different tasks need different loss functions',
            'The choice of loss shapes what the model learns to optimize'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cross-entropy with softmax produces clean gradients that make training efficient.',
          example: {
            title: 'Example: Cross-Entropy with Softmax',
            code: 'Input image → [CNN] → Raw scores: [2.0, 1.0, 0.1]\n                                    (cat)  (dog)  (bird)\n\nSoftmax → Probabilities: [0.70, 0.26, 0.04]\n\nTrue label: cat (class 0)\n\nCross-Entropy Loss:\n  L = -log(0.70) = 0.36\n\nGradient (simplified):\n  ∂L/∂zᵢ = ŷᵢ - yᵢ\n\nFor class 0:\n  ∂L/∂z₀ = 0.70 - 1 = -0.30',
            output: 'Clean gradient: prediction error directly drives weight updates.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Common loss functions and when to use them.',
          table: {
            headers: ['Loss Function', 'Formula', 'Use Case', 'Properties'],
            rows: [
              ['MSE', '(1/N)Σ(yᵢ - ŷᵢ)²', 'Regression', 'Differentiable; sensitive to outliers'],
              ['MAE', '(1/N)Σ|yᵢ - ŷᵢ|', 'Regression', 'Robust to outliers'],
              ['Cross-Entropy', '-Σ yᵢ log(ŷᵢ)', 'Classification', 'Penalizes confident wrong predictions heavily'],
              ['Hinge Loss', 'Σ max(0, 1 - yᵢ·f(xᵢ))', 'SVM', 'Encourages classification margin']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using MSE for classification (fix: use cross-entropy for classification; MSE treats probabilities as continuous values and gives weak gradients)',
            'Mistake 2: Applying softmax before computing cross-entropy in frameworks that do it internally (fix: use log-softmax + NLLLoss or the built-in combined CrossEntropyLoss)',
            'Mistake 3: Ignoring class imbalance when choosing loss (fix: use weighted cross-entropy or focal loss when some classes are rare)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Loss functions guide model behavior in practical systems.',
          list: [
            'Image classification: cross-entropy trains CNNs to assign correct class probabilities',
            'Object detection: combines localization loss (MSE/IoU) with classification loss (cross-entropy)',
            'Autonomous driving: Huber loss balances MSE and MAE for robust steering angle prediction',
            'Language models: cross-entropy measures how well the model predicts the next token'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Score function: raw unnormalized outputs (logits) from the model',
            'Loss function: measures how wrong predictions are; minimized during training',
            'MSE/MAE for regression; cross-entropy for classification',
            'Cross-entropy + softmax gives clean gradients: ∂L/∂z = ŷ - y',
            'Choosing the right loss is as important as choosing the right model architecture'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between a score function and a loss function?\nAns: A score function produces raw outputs (logits); a loss function measures the error between predictions and true labels.',
            'Q2: Why is cross-entropy preferred over MSE for classification?\nAns: Cross-entropy penalizes confident wrong predictions more strongly and provides better gradients for discrete class probabilities.',
            'Q3: What is the gradient of cross-entropy loss with respect to logits when combined with softmax?\nAns: ∂L/∂zᵢ = ŷᵢ - yᵢ — the difference between predicted probability and true label.'
          ]
        }
      ]
    },
    'regularization': {
      title: 'Regularization',
      subtitle: 'Preventing overfitting and improving generalization',
      sections: [
        {
          heading: 'What is Regularization?',
          text: 'Regularization is a technique to <strong>prevent overfitting</strong> by adding a penalty term to the loss function that discourages overly complex models (large weights). It improves how well the model generalizes to unseen data.',
          list: [
            'Overfitting: model memorizes training data but fails on new data',
            'Regularization penalizes large weights to encourage simpler models',
            'Common methods: L1, L2, dropout, and early stopping',
            'The goal is better validation/test performance, not lower training loss'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'L2 regularization adds the squared magnitude of weights to the loss.',
          example: {
            title: 'Example: L2 Regularization Effect',
            code: 'Without regularization:\n  Training loss: 0.01\n  Validation loss: 2.5  ← SEVERE OVERFITTING\n\nWith L2 (λ = 0.01):\n  Loss = MSE + λΣwⱼ²\n  Training loss: 0.15\n  Validation loss: 0.8  ← MUCH BETTER\n\nWith Dropout (p = 0.5):\n  Training loss: 0.20\n  Validation loss: 0.7  ← BEST GENERALIZATION',
            output: 'Regularization sacrifices some training accuracy for better generalization.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'L1 vs L2 regularization.',
          table: {
            headers: ['Aspect', 'L1 (Lasso)', 'L2 (Ridge)'],
            rows: [
              ['Penalty term', 'λΣ|wⱼ|', 'λΣwⱼ²'],
              ['Effect on weights', 'Sparse (many weights become exactly zero)', 'Small but all weights remain non-zero'],
              ['Feature selection', 'Yes — built-in', 'No — distributes across all features'],
              ['Differentiability', 'Non-differentiable at zero', 'Differentiable everywhere'],
              ['Best used when', 'Many irrelevant features exist', 'Features are correlated (multicollinearity)'],
              ['Geometric intuition', 'Diamond-shaped constraint region', 'Circular constraint region']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying regularization without tuning the strength hyperparameter λ (fix: use cross-validation to find the λ that minimizes validation loss)',
            'Mistake 2: Using dropout at test time (fix: dropout is only for training; at test time use all neurons and scale outputs by the keep probability)',
            'Mistake 3: Confusing early stopping with underfitting (fix: monitor both training and validation curves; stop when validation loss plateaus, not when training loss stops)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Regularization is essential in production ML systems.',
          list: [
            'Computer vision: dropout in CNNs prevents overfitting on small image datasets',
            'Natural language processing: L2 regularization stabilizes training of large embedding matrices',
            'Recommendation systems: L1 regularization selects the most informative user features',
            'Medical diagnosis: early stopping prevents models from memorizing limited patient records'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Regularization prevents overfitting by penalizing model complexity',
            'L1 (Lasso): sparsity-inducing; performs feature selection',
            'L2 (Ridge): shrinks all weights uniformly; handles correlated features',
            'Dropout: randomly drops neurons during training; trains an implicit ensemble',
            'Early stopping: halts training when validation loss stops improving',
            'Always tune the regularization strength via cross-validation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main goal of regularization?\nAns: To prevent overfitting and improve generalization to unseen data.',
            'Q2: When should you prefer L1 over L2 regularization?\nAns: When you suspect many features are irrelevant and want automatic feature selection via sparse weights.',
            'Q3: Why does dropout improve generalization?\nAns: It prevents neurons from co-adapting too strongly and effectively trains an ensemble of many thinned networks.'
          ]
        }
      ]
    },
    'neural-networks': {
      title: 'Neural Networks & Multi-Layer Perceptron',
      subtitle: 'The building blocks of deep learning',
      sections: [
        {
          heading: 'What is a Neural Network?',
          text: 'A <strong>Multi-Layer Perceptron (MLP)</strong> is a feedforward neural network consisting of an input layer, one or more hidden layers, and an output layer. Each neuron applies a weighted sum of inputs followed by a non-linear activation function.',
          list: [
            'Input layer: receives raw features',
            'Hidden layers: learn intermediate representations',
            'Output layer: produces final predictions',
            'Stacking layers enables hierarchical feature learning'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each neuron computes a linear transformation followed by a non-linear activation.',
          example: {
            title: 'Example: MLP Architecture for MNIST',
            code: 'Input (784) → Hidden1 (128) → Hidden2 (64) → Output (10)\n    [x₁..x₇₈₄]    [ReLU]         [ReLU]        [Softmax]\n\nEach neuron computation:\n  z = Σwᵢxᵢ + b\n  a = f(z)  ← activation function\n\nFull forward pass:\n  a₁ = ReLU(W₁x + b₁)\n  a₂ = ReLU(W₂a₁ + b₂)\n  ŷ = Softmax(W₃a₂ + b₃)',
            output: 'This MLP achieves ~98% accuracy on MNIST handwritten digits.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Shallow vs deep neural networks.',
          table: {
            headers: ['Aspect', 'Shallow Network', 'Deep Network'],
            rows: [
              ['Layers', '1 hidden layer', 'Many hidden layers (3+)'],
              ['Parameters', 'Fewer', 'Many more'],
              ['Feature learning', 'Limited', 'Hierarchical (edges → textures → objects)'],
              ['Training', 'Easier, faster', 'Harder; needs careful initialization'],
              ['Risk', 'Underfitting on complex data', 'Overfitting and vanishing gradients'],
              ['Best for', 'Simple patterns', 'Complex, structured data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too many hidden layers for a small dataset (fix: start with 1-2 hidden layers and increase only if validation loss improves)',
            'Mistake 2: Forgetting non-linear activation functions (fix: without activation, even a 10-layer network collapses to a single linear transformation)',
            'Mistake 3: Using the same architecture for all problems (fix: match capacity to data size and complexity; more data can support deeper networks)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Neural networks power modern AI across domains.',
          list: [
            'Finance: MLPs predict credit risk from applicant features',
            'Healthcare: neural networks detect diabetic retinopathy from eye scans',
            'Manufacturing: predict equipment failure from sensor time series',
            'Recommendation: deep neural networks model user-item interactions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'MLP = input layer + hidden layers + output layer',
            'Each neuron: weighted sum + bias, then non-linear activation',
            'Without activation functions, deep networks collapse to linear models',
            'Universal Approximation Theorem: one hidden layer can approximate any continuous function',
            'Deeper networks learn hierarchical features but need more data and careful training'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What happens if you remove all activation functions from a neural network?\nAns: The network becomes equivalent to a single linear transformation, no matter how many layers it has.',
            'Q2: What does the Universal Approximation Theorem state?\nAns: An MLP with at least one hidden layer can approximate any continuous function given enough neurons.',
            'Q3: Why are hidden layers called hidden?\nAns: Their values are not directly observed in the training data — they are learned internal representations.'
          ]
        }
      ]
    },
    'activation-functions': {
      title: 'Activation Functions',
      subtitle: 'Introducing non-linearity into neural networks',
      sections: [
        {
          heading: 'What is an Activation Function?',
          text: 'An <strong>activation function</strong> introduces non-linearity into a neural network. Without it, no matter how many layers are stacked, the entire network would collapse into a single linear transformation. Activation functions enable the network to learn <strong>complex, non-linear patterns</strong>.',
          list: [
            'Applied after the linear weighted sum in each neuron',
            'Introduces non-linearity so networks can model curved decision boundaries',
            'Different activations have different properties (range, gradient behavior, cost)',
            'The right choice depends on network depth, task, and layer position'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The XOR problem demonstrates why non-linearity is essential.',
          example: {
            title: 'Example: The XOR Problem',
            code: 'XOR is NOT linearly separable:\n  (0,0) → 0    (0,1) → 1\n  (1,0) → 1    (1,1) → 0\n\nSingle-layer perceptron: FAILS\n\nMLP with 1 hidden layer (2 neurons):\n  Neuron 1: learns OR gate\n  Neuron 2: learns AND gate\n  Output: XOR = OR - AND\n  → SUCCESS!',
            output: 'Non-linear hidden representations solve problems that linear models cannot.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Popular activation functions compared.',
          table: {
            headers: ['Function', 'Formula', 'Range', 'Pros', 'Cons', 'Best For'],
            rows: [
              ['Sigmoid', '1/(1+e⁻ˣ)', '(0,1)', 'Smooth gradient; probability output', 'Vanishing gradient; not zero-centered', 'Binary classification output'],
              ['Tanh', '(eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)', '(-1,1)', 'Zero-centered; stronger gradients', 'Still vanishing gradient', 'Hidden layers in RNNs'],
              ['ReLU', 'max(0,x)', '[0,∞)', 'Cheap; no vanishing for x>0', 'Dying ReLU problem', 'Default hidden layers'],
              ['Leaky ReLU', 'max(αx, x)', '(-∞,∞)', 'Fixes dying ReLU', 'α is arbitrary', 'Deep networks'],
              ['Swish', 'x·σ(x)', '(-∞,∞)', 'Self-gated; outperforms ReLU', 'More computation', 'Very deep networks'],
              ['Softmax', 'e^(zᵢ)/Σe^(zⱼ)', '(0,1)', 'Output sums to 1', 'Expensive for large vocab', 'Multi-class output']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using sigmoid in hidden layers of deep networks (fix: use ReLU or variants in hidden layers; sigmoid causes vanishing gradients in deep stacks)',
            'Mistake 2: Ignoring the dying ReLU problem (fix: use Leaky ReLU, ELU, or PReLU to allow small negative gradients)',
            'Mistake 3: Using ReLU in the output layer for probability predictions (fix: use sigmoid for binary and softmax for multi-class classification outputs)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Activation choices directly impact model performance in production.',
          list: [
            'Image classification: ReLU in CNN hidden layers enables efficient training of very deep networks like ResNet',
            'Generative models: GANs use Leaky ReLU in discriminators to avoid dead gradients',
            'Language models: Swish and GELU activations improve transformer training stability',
            'Medical imaging: softmax at the output layer produces interpretable class probabilities'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Activation functions introduce non-linearity; without them, deep networks are just linear models',
            'ReLU is the default for hidden layers: fast, simple, effective',
            'Sigmoid/softmax are for output layers producing probabilities',
            'Vanishing gradients: sigmoid and tanh suffer in deep networks',
            'Dying ReLU: fixed by Leaky ReLU, ELU, or careful learning rate tuning',
            'Match the activation to the layer position and network depth'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why can a neural network without activation functions not solve XOR?\nAns: Without non-linearity, the network is equivalent to a single linear model, and XOR is not linearly separable.',
            'Q2: What is the dying ReLU problem?\nAns: When a neuron only receives negative inputs, ReLU outputs zero permanently and the neuron stops learning.',
            'Q3: Which activation should you use for a binary classification output layer?\nAns: Sigmoid, because it produces a probability between 0 and 1.'
          ]
        }
      ]
    },
    'backpropagation': {
      title: 'Backpropagation',
      subtitle: 'The algorithm that makes deep learning possible',
      sections: [
        {
          heading: 'What is Backpropagation?',
          text: '<strong>Backpropagation</strong> is the algorithm used to compute gradients of the loss function with respect to each weight by applying the <strong>chain rule</strong> recursively from the output layer back to the input layer. It enables efficient training of deep neural networks.',
          list: [
            'Forward pass: compute predictions layer by layer',
            'Backward pass: propagate error gradients back through the network',
            'Chain rule: decomposes gradients into products of local derivatives',
            'Efficient: computes all gradients in one backward pass'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The chain rule breaks the gradient computation into manageable local pieces.',
          example: {
            title: 'Example: Chain Rule in a 3-Layer Network',
            code: 'FORWARD PASS:\n  x → [W₁] → a₁ → [W₂] → a₂ → [W₃] → ŷ → Loss\n\nBACKWARD PASS (chain rule):\n  ∂L/∂W₃ = ∂L/∂ŷ · ∂ŷ/∂W₃\n  ∂L/∂W₂ = ∂L/∂ŷ · ∂ŷ/∂a₂ · ∂a₂/∂W₂\n  ∂L/∂W₁ = ∂L/∂ŷ · ∂ŷ/∂a₂ · ∂a₂/∂a₁ · ∂a₁/∂W₁\n\nOutput layer error:\n  δᴸ = ∇ₐL ⊙ f\'(zᴸ)\n\nHidden layer error:\n  δˡ = ((Wˡ⁺¹)ᵀ δˡ⁺¹) ⊙ f\'(zˡ)\n\nWeight gradient:\n  ∂L/∂Wˡ = δˡ (aˡ⁻¹)ᵀ',
            output: 'Gradients flow backward through the network using the chain rule.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Gradient descent variants for training.',
          table: {
            headers: ['Variant', 'Update Rule', 'Advantages', 'Disadvantages'],
            rows: [
              ['Batch GD', 'Uses entire dataset', 'Stable; accurate gradient', 'Slow; memory intensive'],
              ['Stochastic GD', 'One sample per update', 'Fast; escapes local minima', 'Noisy; oscillates'],
              ['Mini-batch GD', 'Small batch (32-512)', 'Balanced; vectorized', 'Requires tuning batch size'],
              ['Adam', 'Momentum + RMSProp', 'Adaptive; works well by default', 'May overfit; needs warmup']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a learning rate that is too large (fix: start with 0.001 for Adam or 0.01 for SGD; use learning rate schedules to decay over time)',
            'Mistake 2: Not shuffling data before each epoch in SGD (fix: always shuffle training data to prevent ordered patterns from biasing gradient estimates)',
            'Mistake 3: Ignoring vanishing/exploding gradients in deep networks (fix: use batch normalization, residual connections, ReLU, and proper weight initialization)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Backpropagation is the engine behind virtually all modern deep learning.',
          list: [
            'Computer vision: backprop trains CNNs with millions of parameters on ImageNet',
            'Natural language processing: transformers like GPT and BERT are trained via backpropagation on massive text corpora',
            'Speech recognition: deep acoustic models learn from spectrograms through backprop',
            'Reinforcement learning: policy gradients use backprop to optimize agent behavior'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Backpropagation computes gradients via the chain rule from output to input',
            'Forward pass: compute predictions; backward pass: compute gradients',
            'SGD updates weights using one sample; mini-batch GD balances speed and stability',
            'Adam adapts learning rates per parameter and is widely used by default',
            'Vanishing/exploding gradients are solved by ReLU, batch norm, and skip connections'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What mathematical principle does backpropagation rely on?\nAns: The chain rule from calculus, which decomposes the derivative of a composite function into products of local derivatives.',
            'Q2: Why is mini-batch gradient descent preferred over pure batch or pure stochastic?\nAns: It balances computational efficiency (vectorization) with gradient stability (averaging over a small batch).',
            'Q3: What problem do residual connections solve in deep networks?\nAns: They create shortcut paths that allow gradients to flow directly, mitigating the vanishing gradient problem.'
          ]
        }
      ]
    },
    'optimization': {
      title: 'Optimization & Stochastic Gradient Descent',
      subtitle: 'How neural networks learn from data',
      sections: [
        {
          heading: 'What is Optimization in Deep Learning?',
          text: '<strong>Optimization</strong> is the process of finding the set of weights that minimizes the loss function. <strong>Stochastic Gradient Descent (SGD)</strong> is the foundational algorithm that updates weights using noisy gradient estimates from small data batches.',
          list: [
            'Goal: minimize the loss function over the training data',
            'SGD: uses one or a few samples per update for speed and noise-driven exploration',
            'Learning rate: controls step size; critical hyperparameter',
            'Advanced optimizers: Momentum, AdaGrad, RMSProp, Adam improve convergence'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SGD and its comparison to batch gradient descent.',
          example: {
            title: 'Example: SGD Update Rule',
            code: 'For each epoch:\n  Shuffle training data\n  For each sample (xᵢ, yᵢ):\n    1. Forward pass: compute ŷᵢ\n    2. Compute loss: Lᵢ = (yᵢ - ŷᵢ)²\n    3. Compute gradient: gᵢ = ∇wLᵢ\n    4. Update: w := w - η · gᵢ\n\nCompare to Batch GD:\n  - Batch: w := w - η · (1/N)Σgᵢ  ← uses all N samples\n  - SGD:   w := w - η · gᵢ        ← uses 1 sample\n\nMini-batch (batch size = 32):\n  w := w - η · (1/32)Σgᵢ  ← balanced',
            output: 'SGD is ~N× faster per iteration but needs more iterations to converge.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Weight initialization strategies for different activations.',
          table: {
            headers: ['Method', 'Formula', 'Use Case', 'Why It Works'],
            rows: [
              ['Xavier/Glorot', 'W ~ U[-√(6/(nᵢₙ+nₒᵤₜ)), √(6/(nᵢₙ+nₒᵤₜ))]', 'Sigmoid, tanh activations', 'Keeps variance constant through layers'],
              ['He Initialization', 'W ~ N(0, √(2/nᵢₙ))', 'ReLU activations', 'Accounts for ReLU killing half the inputs'],
              ['Orthogonal', 'W = QR decomposition', 'RNNs, deep networks', 'Preserves gradient norm through depth']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a fixed learning rate throughout training (fix: use step decay, exponential decay, or cosine annealing to reduce the learning rate as training progresses)',
            'Mistake 2: Using Xavier initialization with ReLU networks (fix: use He initialization for ReLU; Xavier is designed for symmetric activations like sigmoid and tanh)',
            'Mistake 3: Not using learning rate warmup with Adam (fix: start with a small learning rate for the first few epochs and gradually increase to prevent early instability)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Optimization choices determine whether a model trains successfully at scale.',
          list: [
            'Large language models: AdamW with cosine decay and warmup trains GPT-class models with billions of parameters',
            'Computer vision: SGD with momentum and step decay remains popular for training ResNets on ImageNet',
            'Reinforcement learning: RMSProp handles the non-stationary gradients in policy gradient methods',
            'Edge devices: quantized SGD with reduced precision runs on mobile hardware'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Optimization = finding weights that minimize the loss function',
            'SGD: fast, noisy updates; mini-batch GD is the practical standard',
            'Learning rate is the most important hyperparameter — schedule it carefully',
            'Adam adapts per-parameter learning rates and works well by default',
            'Weight initialization: Xavier for sigmoid/tanh, He for ReLU',
            'Warmup + decay is essential for stable training of large models'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is SGD faster per iteration than batch gradient descent?\nAns: SGD uses only one sample to compute the gradient, while batch GD must process the entire dataset.',
            'Q2: When should you use He initialization instead of Xavier?\nAns: Use He initialization when your network uses ReLU activations, because ReLU zeros out half the inputs and needs larger initial weights.',
            'Q3: What is the purpose of learning rate warmup?\nAns: It prevents early training instability by starting with a small learning rate and gradually increasing it before decaying.'
          ]
        }
      ]
    },
    'svm': {
      title: 'Support Vector Machine (SVM)',
      subtitle: 'Finding the optimal hyperplane for classification',
      sections: [
        {
          heading: 'What is SVM?',
          text: 'A <strong>Support Vector Machine (SVM)</strong> is a supervised learning algorithm used primarily for classification. Its goal is to find the optimal <strong>hyperplane</strong> that separates classes with the <strong>maximum margin</strong>.',
          list: [
            'Hyperplane: the decision boundary that separates classes',
            'Support vectors: the data points closest to the hyperplane that define its position',
            'Margin: the perpendicular distance between support vectors and the hyperplane',
            'SVM maximizes this margin for better generalization'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SVM finds the hyperplane that maximizes the margin between classes.',
          example: {
            title: 'Example: SVM Margin',
            code: 'Linear SVM Decision Boundary:\n  w·x + b = 0\n\nMargin width:\n  margin = 2 / ||w||\n\nOptimization:\n  minimize ½||w||²\n  subject to: yᵢ(w·xᵢ + b) ≥ 1\n\nFor non-linear data:\n  Kernel trick: K(xᵢ, xⱼ) = φ(xᵢ)·φ(xⱼ)\n  Common kernels: Linear, RBF, Polynomial',
            output: 'SVM maximizes margin = 2 / ||w|| for robust classification.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Linear vs non-linear SVM.',
          table: {
            headers: ['Aspect', 'Linear SVM', 'Non-Linear SVM'],
            rows: [
              ['Data type', 'Linearly separable', 'Not linearly separable'],
              ['Boundary', 'Straight line / hyperplane', 'Curved boundary via kernel'],
              ['Kernel', 'None needed', 'RBF, Polynomial, Sigmoid'],
              ['Computation', 'Faster', 'Slower (kernel matrix)'],
              ['Best for', 'Text classification, high-dim data', 'Image, complex patterns']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using default parameters without tuning C (fix: C controls trade-off between smooth boundary and training accuracy; use cross-validation)',
            'Mistake 2: Not scaling features before training (fix: SVM is sensitive to feature scales; always normalize or standardize inputs)',
            'Mistake 3: Using SVM on very large datasets without approximation (fix: use linear SVM or approximate methods like SGDClassifier for datasets with >100k samples)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SVMs are used across many domains for classification tasks.',
          list: [
            'Face detection: SVM classifies image regions as face or non-face',
            'Text categorization: linear SVM is highly effective for spam detection and sentiment analysis',
            'Bioinformatics: protein classification and cancer diagnosis from gene expression data',
            'Handwritten digit recognition: SVM with RBF kernel achieves high accuracy on MNIST'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SVM finds the hyperplane with maximum margin between classes',
            'Support vectors are the critical points that define the boundary',
            'Linear SVM: for linearly separable data; fast and interpretable',
            'Non-linear SVM: uses kernel trick to map data to higher dimensions',
            'Key hyperparameters: C (regularization) and kernel type/gamma',
            'Always scale features before training SVM'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are support vectors in SVM?\nAns: The data points closest to the decision boundary that directly influence its position and orientation.',
            'Q2: What is the kernel trick?\nAns: A method to implicitly map data to a higher-dimensional space where it becomes linearly separable, without explicitly computing the transformation.',
            'Q3: When should you use linear SVM over non-linear SVM?\nAns: When the data is high-dimensional and approximately linearly separable — linear SVM is faster and often performs comparably.'
          ]
        }
      ]
    },
    'knn': {
      title: 'K-Nearest Neighbor (KNN)',
      subtitle: 'Lazy learning based on similarity',
      sections: [
        {
          heading: 'What is KNN?',
          text: '<strong>K-Nearest Neighbor (KNN)</strong> is a lazy learning algorithm that classifies a data point based on the majority class of its K closest neighbors in the feature space.',
          list: [
            'Lazy learner: no explicit training phase; stores all training data',
            'Classification: majority vote of K nearest neighbors',
            'Regression: average value of K nearest neighbors',
            'Distance metric: typically Euclidean distance'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'KNN uses distance to find the closest training samples.',
          example: {
            title: 'Example: KNN Classification',
            code: 'Euclidean Distance:\n  d(x, y) = √(Σ(xᵢ - yᵢ)²)\n\nQuery point: x = [5.1, 3.5]\nTraining samples:\n  a = [5.0, 3.4] → Class A  (d = 0.14)\n  b = [6.2, 2.8] → Class B  (d = 1.32)\n  c = [4.9, 3.1] → Class A  (d = 0.41)\n\nK = 3 nearest: a(A), c(A), b(B)\nMajority vote: Class A (2 vs 1)',
            output: 'KNN assigns the query point to Class A based on neighbor majority.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Effect of K value on KNN behavior.',
          table: {
            headers: ['Aspect', 'Small K (e.g., K=1)', 'Large K (e.g., K=20)'],
            rows: [
              ['Boundary', 'Complex, jagged', 'Smooth, simple'],
              ['Sensitivity', 'High (to noise)', 'Low (more robust)'],
              ['Overfitting', 'Prone', 'Less likely'],
              ['Underfitting', 'Unlikely', 'Possible'],
              ['Computation', 'Faster', 'Slower']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not normalizing features (fix: KNN is distance-based; features with larger scales dominate; always normalize to [0,1] or standardize)',
            'Mistake 2: Choosing K arbitrarily (fix: use odd K to avoid ties; cross-validate K to find the value that minimizes validation error)',
            'Mistake 3: Using KNN on high-dimensional data without dimensionality reduction (fix: apply PCA or feature selection; distance metrics become less meaningful in high dimensions — curse of dimensionality)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'KNN is simple but effective for many practical tasks.',
          list: [
            'Recommendation systems: find users with similar preferences (user-based collaborative filtering)',
            'Medical diagnosis: classify patient risk based on similar historical cases',
            'Image recognition: classify handwritten digits by comparing to stored prototypes',
            'Anomaly detection: points with very distant neighbors may be outliers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'KNN: lazy learner that classifies based on nearest neighbors',
            'No training phase — stores all data and queries at prediction time',
            'K controls smoothness: small K = complex boundary; large K = smooth boundary',
            'Always normalize features before applying KNN',
            'Use odd K to avoid tie votes in binary classification',
            'Curse of dimensionality: KNN degrades in very high-dimensional spaces'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is KNN called a lazy learning algorithm?\nAns: It does not learn an explicit model during training; it simply stores the training data and performs computation only at prediction time.',
            'Q2: What happens if you choose K = 1?\nAns: The model becomes very sensitive to noise and outliers, creating a highly complex decision boundary that may overfit.',
            'Q3: Why is feature scaling important for KNN?\nAns: Because KNN uses distance metrics; features with larger numerical ranges would dominate the distance calculation unless scaled.'
          ]
        }
      ]
    },
    'decision-trees': {
      title: 'Decision Trees',
      subtitle: 'Tree-like models for classification and regression',
      sections: [
        {
          heading: 'What is a Decision Tree?',
          text: 'A <strong>Decision Tree</strong> is a flowchart-like structure where each internal node represents a test on a feature, each branch represents the outcome of the test, and each leaf node represents a class label or continuous value.',
          list: [
            'Root node: the topmost node that splits the data based on the most informative feature',
            'Internal nodes: decision points that test a feature and branch accordingly',
            'Leaf nodes: terminal nodes that output the prediction',
            'Highly interpretable — the tree can be visualized as a set of rules'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Trees split data using impurity measures to find the best feature and threshold.',
          example: {
            title: 'Example: Gini Index for Splitting',
            code: 'Gini Index (for node t):\n  Gini(t) = 1 - Σ(pᵢ)²\n\nWhere pᵢ = proportion of class i in node t\n\nExample:\n  Node has 10 samples: 6 Class A, 4 Class B\n  p_A = 0.6, p_B = 0.4\n  Gini = 1 - (0.6² + 0.4²)\n       = 1 - (0.36 + 0.16)\n       = 1 - 0.52\n       = 0.48\n\nBest split: the one with lowest weighted average Gini.',
            output: 'Gini = 0.48 means moderate impurity; a pure node would have Gini = 0.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Impurity metrics for splitting criteria.',
          table: {
            headers: ['Metric', 'Formula', 'Range', 'Best For', 'Behavior'],
            rows: [
              ['Gini Index', '1 - Σpᵢ²', '[0, 0.5]', 'Classification', 'Faster to compute; tends to isolate frequent classes'],
              ['Entropy', '-Σpᵢ·log(pᵢ)', '[0, 1]', 'Classification', 'More theoretically grounded; information-theoretic'],
              ['Variance', 'Σ(yᵢ - ȳ)² / N', '[0, ∞)', 'Regression', 'Measures spread of target values in node']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Allowing trees to grow too deep (fix: set max_depth, min_samples_leaf, or min_samples_split to prevent overfitting; a deep tree memorizes training data)',
            'Mistake 2: Not handling categorical features properly (fix: encode categorical variables using one-hot encoding or ordinal encoding; some implementations handle them natively)',
            'Mistake 3: Using decision trees on their own for complex data (fix: trees are powerful but unstable; use ensemble methods like Random Forest or Gradient Boosting for better performance)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Decision trees are widely used for their interpretability.',
          list: [
            'Credit scoring: banks use decision trees to approve or reject loans based on applicant features',
            'Medical diagnosis: symptom-based decision trees help triage patients and suggest conditions',
            'Customer segmentation: trees classify customers into groups for targeted marketing',
            'Fraud detection: rule-based trees flag suspicious transactions based on patterns'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Decision tree: flowchart of feature tests leading to predictions',
            'Root node splits on the most informative feature (lowest impurity)',
            'Gini and Entropy are the main splitting criteria for classification',
            'Variance is used for regression trees',
            'Trees are interpretable but prone to overfitting if grown too deep',
            'Pruning and ensemble methods (Random Forest, XGBoost) improve tree performance'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the Gini index of a completely pure node?\nAns: 0 — a pure node contains only one class, so Σpᵢ² = 1 and Gini = 1 - 1 = 0.',
            'Q2: Why are decision trees considered interpretable?\nAns: Because they can be visualized as a set of if-then rules, making the decision process transparent and easy to explain.',
            'Q3: What is pre-pruning vs post-pruning?\nAns: Pre-pruning stops tree growth early (e.g., max_depth); post-pruning grows the full tree then removes branches that do not improve validation performance.'
          ]
        }
      ]
    },
    'ensemble-learning': {
      title: 'Ensemble Learning',
      subtitle: 'Combining multiple models for stronger predictions',
      sections: [
        {
          heading: 'What is Ensemble Learning?',
          text: '<strong>Ensemble Learning</strong> combines multiple weak or base learners into a strong learner. The key idea is that a group of models working together often outperforms any single model.',
          list: [
            'Bagging: trains multiple models in parallel on bootstrap samples; reduces variance',
            'Boosting: trains models sequentially, each correcting errors of the previous; reduces bias',
            'Stacking: combines predictions from multiple models using a meta-learner',
            'The wisdom of crowds principle: diverse models make fewer collective errors'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Random Forest combines bagging with random feature selection for each tree.',
          example: {
            title: 'Example: Random Forest Prediction',
            code: 'Random Forest (100 trees):\n  For each tree:\n    1. Bootstrap sample: random subset of data with replacement\n    2. Random feature subset: select m features at each split\n    3. Grow tree to max depth (or until pure)\n\nPrediction (classification):\n  ŷ = mode(Tree₁(x), Tree₂(x), ..., Tree₁₀₀(x))\n\nPrediction (regression):\n  ŷ = mean(Tree₁(x), Tree₂(x), ..., Tree₁₀₀(x))\n\nOOB Error: estimate generalization without cross-validation.',
            output: 'Random Forest reduces variance by averaging many decorrelated trees.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Bagging vs Boosting strategies.',
          table: {
            headers: ['Aspect', 'Bagging (e.g., Random Forest)', 'Boosting (e.g., XGBoost)'],
            rows: [
              ['Training', 'Parallel; independent models', 'Sequential; each fixes prior errors'],
              ['Goal', 'Reduce variance', 'Reduce bias'],
              ['Data sampling', 'Bootstrap (with replacement)', 'Weighted; misclassified samples get more weight'],
              ['Model complexity', 'Each model is full-sized', 'Models are typically weak learners (shallow trees)'],
              ['Overfitting risk', 'Lower', 'Higher if not regularized'],
              ['Best for', 'High-variance base learners', 'High-bias base learners']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too few estimators in Random Forest (fix: use at least 100 trees; more trees generally improve performance up to a point with diminishing returns)',
            'Mistake 2: Not tuning learning rate and max_depth in Gradient Boosting (fix: start with learning_rate=0.1 and max_depth=3-6; lower learning rate requires more estimators)',
            'Mistake 3: Ignoring overfitting in boosting models (fix: XGBoost provides L1/L2 regularization, subsampling, and early stopping; use them to control model complexity)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Ensemble methods dominate machine learning competitions and production systems.',
          list: [
            'Finance: XGBoost and LightGBM predict loan default risk from applicant features',
            'E-commerce: Random Forest ranks products for recommendations based on user behavior',
            'Healthcare: ensemble models combine predictions from multiple diagnostic tests',
            'Kaggle competitions: gradient boosting machines (XGBoost, CatBoost) consistently win structured data competitions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Ensemble learning: combine multiple models for better performance',
            'Bagging (Random Forest): parallel training on bootstrap samples; reduces variance',
            'Boosting (AdaBoost, XGBoost): sequential training focusing on errors; reduces bias',
            'Random Forest: bagging + random feature subsets; robust and easy to use',
            'XGBoost: optimized gradient boosting with regularization; top performer for tabular data',
            'Stacking: meta-learner combines base model predictions; more complex but powerful'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the fundamental difference between bagging and boosting?\nAns: Bagging trains models in parallel on random subsets to reduce variance; boosting trains models sequentially, each correcting the errors of the previous, to reduce bias.',
            'Q2: Why does Random Forest use random feature subsets at each split?\nAns: To decorrelate the trees; without this, all trees would make similar splits and the ensemble would not benefit from diversity.',
            'Q3: What makes XGBoost faster and more accurate than standard gradient boosting?\nAns: XGBoost uses second-order gradients, built-in regularization (L1/L2), parallel processing, tree pruning, and handles missing values natively.'
          ]
        }
      ]
    }
  }
};
