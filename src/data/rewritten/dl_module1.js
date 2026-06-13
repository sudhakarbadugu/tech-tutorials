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
            'It needs large datasets and significant compute power (GPUs) to train effectively',
            'It powers modern AI breakthroughs in vision, language, speech, and generative models'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A deep network stacks layers of linear transformations plus non-linear activations.',
          example: {
            title: 'Example: Biological vs Artificial Neuron',
            code: 'Biological Neuron:\n  Dendrites → Cell Body → Axon → Synapse\n  Input → Process → Output → Transmit\n\nArtificial Neuron:\n  x₁, x₂, ..., xn → Σ(wᵢxᵢ + b) → f(·) → output\n  Inputs → Weighted Sum → Activation → Output\n\nKey difference:\n  Biological: electrochemical signals\n  Artificial: mathematical computation',
            output: 'Neural networks are biologically inspired, not biologically accurate.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Machine Learning vs Deep Learning.',
          table: {
            headers: ['Aspect', 'Machine Learning', 'Deep Learning'],
            rows: [
              ['Feature Engineering', 'Manual feature extraction required', 'Automatic feature learning from raw data'],
              ['Data Requirements', 'Works well with small datasets', 'Needs large datasets to generalize'],
              ['Computation', 'CPU is usually sufficient', 'GPU required for training large networks'],
              ['Architecture', 'Fixed algorithms (SVM, Random Forest)', 'Learnable neural architectures'],
              ['Interpretability', 'More interpretable (feature importance)', 'Black box — harder to interpret'],
              ['Examples', 'SVM, Random Forest, XGBoost', 'CNN, RNN, Transformer, GAN']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using deep learning for small datasets (fix: traditional ML often outperforms deep learning when data is limited; use transfer learning or simple models)',
            'Mistake 2: Expecting deep learning to work out of the box without tuning (fix: neural networks require careful hyperparameter tuning, initialization, and architecture design)',
            'Mistake 3: Ignoring the need for proper hardware (fix: training deep networks on CPU is impractical; use GPUs or cloud TPUs for reasonable training times)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main advantage of deep learning over traditional machine learning?\nAns: Deep learning automatically learns features from raw data, eliminating the need for manual feature engineering.',
            'Q2: Why do deep learning models typically require GPUs?\nAns: Training deep neural networks involves massive matrix operations that GPUs parallelize efficiently, reducing training time from days to hours.',
            'Q3: What is the key difference between biological and artificial neurons?\nAns: Biological neurons use electrochemical signals; artificial neurons perform mathematical weighted sums followed by activation functions.'
          ]
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
          heading: 'Key Formula / Rule',
          text: 'The perceptron learning rule adjusts weights proportionally to the error and input.',
          example: {
            title: 'Example: Perceptron Algorithm',
            code: 'Output = sign(w₁x₁ + w₂x₂ + ... + wn xn + b)\n\nLearning Rule:\n  If prediction ≠ target:\n    wi ← wi + η × (target - prediction) × xi\n    b ← b + η × (target - prediction)\n\nExample (AND gate):\n  Input: (1, 1), Target: 1\n  w = [0.5, 0.5], b = -0.7\n  Output = sign(0.5×1 + 0.5×1 - 0.7)\n         = sign(0.3) = +1 ✓',
            output: 'Perceptron learns linearly separable functions by iteratively correcting mistakes.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Single perceptron vs multi-layer perceptron (MLP).',
          table: {
            headers: ['Aspect', 'Single Perceptron', 'Multi-Layer Perceptron'],
            rows: [
              ['Layers', 'One layer (input → output)', 'Multiple hidden layers between input and output'],
              ['Non-linearity', 'No hidden non-linearity', 'Non-linear activation in hidden layers'],
              ['Problem scope', 'Linearly separable only', 'Can approximate any continuous function'],
              ['XOR problem', 'Cannot solve XOR', 'Solves XOR and complex patterns'],
              ['Training', 'Simple perceptron rule', 'Requires backpropagation'],
              ['Parameters', 'Few (weights + bias)', 'Many (weights and biases across all layers)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Trying to solve non-linear problems with a single perceptron (fix: add hidden layers and non-linear activations to create an MLP)',
            'Mistake 2: Setting the learning rate too high (fix: use a small learning rate like η = 0.01; too large causes divergence, too slow causes slow convergence)',
            'Mistake 3: Forgetting that the perceptron step function is non-differentiable (fix: for gradient-based training, use sigmoid or other smooth activations instead of hard step)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: Why can a single perceptron not solve the XOR problem?\nAns: XOR is not linearly separable — no single straight line can separate the classes.',
            'Q2: What happens during the perceptron learning rule update?\nAns: Weights and bias are adjusted by η × (target − prediction) × input when a mistake is made.',
            'Q3: How does an MLP overcome the perceptron limitation?\nAns: By adding hidden layers with non-linear activation functions, the network can learn non-linear decision boundaries.'
          ]
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
          heading: 'Key Formula / Rule',
          text: 'Common activation functions and their properties.',
          example: {
            title: 'Example: Common Activation Functions',
            code: 'Sigmoid: σ(x) = 1 / (1 + e⁻ˣ)\n  Range: (0, 1)\n  Problem: Vanishing gradient for extreme inputs\n\nReLU: f(x) = max(0, x)\n  Range: [0, ∞)\n  Problem: Dead neurons when x < 0 permanently\n\nLeaky ReLU: f(x) = max(αx, x), α = 0.01\n  Allows small negative gradient flow\n\nTanh: tanh(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)\n  Range: (-1, 1), zero-centered\n\nSoftmax: σ(xi) = e^{xi} / Σ e^{xj}\n  Used for multi-class probability output',
            output: 'ReLU is the most popular choice for hidden layers due to simplicity and efficiency.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing popular activation functions.',
          table: {
            headers: ['Function', 'Range', 'Derivative', 'Best For', 'Key Weakness'],
            rows: [
              ['Sigmoid', '(0,1)', 'σ(1−σ)', 'Binary output layer', 'Vanishing gradient; not zero-centered'],
              ['Tanh', '(-1,1)', '1−tanh²', 'Hidden layers in RNNs', 'Still suffers vanishing gradient'],
              ['ReLU', '[0,∞)', '1 if x>0 else 0', 'Default hidden layers', 'Dying ReLU problem'],
              ['Leaky ReLU', '(-∞,∞)', '1 or α', 'Deep networks', 'α is a fixed hyperparameter'],
              ['Softmax', '(0,1)', 'Complex', 'Multi-class output', 'Expensive for large vocabularies']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using sigmoid in hidden layers of deep networks (fix: use ReLU or Leaky ReLU in hidden layers; sigmoid causes vanishing gradients in deep stacks)',
            'Mistake 2: Using ReLU in the output layer for binary classification (fix: use sigmoid for binary and softmax for multi-class output layers)',
            'Mistake 3: Ignoring the dying ReLU problem in very deep networks (fix: use Leaky ReLU, ELU, or proper weight initialization to keep neurons alive)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: Why are activation functions necessary in neural networks?\nAns: Without non-linear activations, multiple layers mathematically collapse into a single linear transformation, unable to learn complex patterns.',
            'Q2: What is the dying ReLU problem?\nAns: If a neuron receives only negative inputs, ReLU always outputs 0, so its gradient is 0 and it stops learning permanently.',
            'Q3: When should you use softmax instead of sigmoid?\nAns: Softmax is for multi-class classification where outputs must sum to 1; sigmoid is for independent binary classifications.'
          ]
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
          heading: 'Key Formula / Rule',
          text: 'The chain rule drives backpropagation, layer by layer.',
          example: {
            title: 'Example: Backpropagation Equations',
            code: 'Forward pass:\n  z₁ = W₁x + b₁\n  h = ReLU(z₁)\n  z₂ = W₂h + b₂\n  y = σ(z₂)\n\nBackward pass (chain rule):\n  δ₂ = (y - target) ⊙ σ\'(z₂)\n  ∇W₂ = δ₂ hᵀ\n  ∇b₂ = δ₂\n  \n  δ₁ = (W₂ᵀδ₂) ⊙ ReLU\'(z₁)\n  ∇W₁ = δ₁ xᵀ\n  ∇b₁ = δ₁\n\nUpdate:\n  W ← W - η × ∇W',
            output: 'Gradients flow backward through the network using the chain rule.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Forward pass vs backward pass.',
          table: {
            headers: ['Aspect', 'Forward Pass', 'Backward Pass'],
            rows: [
              ['Direction', 'Input → Output', 'Output → Input'],
              ['Purpose', 'Compute predictions and loss', 'Compute gradients for weight updates'],
              ['Data flow', 'Activations propagate forward', 'Error signals propagate backward'],
              ['Operations', 'Matrix multiplications + activations', 'Chain rule derivatives'],
              ['Memory need', 'Store intermediate activations', 'Reuse stored activations for grads'],
              ['Result', 'Loss value', 'Gradient ∇W for every parameter']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Confusing forward pass loss with backward pass gradients (fix: the forward pass computes the error; the backward pass computes how to change weights to reduce that error)',
            'Mistake 2: Forgetting to zero gradients before backward pass (fix: always call optimizer.zero_grad() in PyTorch or equivalent; otherwise gradients accumulate across batches)',
            'Mistake 3: Using non-differentiable operations in the computational graph (fix: use smooth approximations; operations like argmax or hard thresholding break gradient flow)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: What mathematical principle does backpropagation rely on?\nAns: The chain rule of calculus, which allows computing derivatives of composite functions layer by layer.',
            'Q2: Why must we store activations during the forward pass?\nAns: They are needed during the backward pass to compute gradients via the chain rule.',
            'Q3: What happens if a non-differentiable operation is placed in the network?\nAns: Gradient flow breaks at that point, preventing backpropagation from updating parameters before it.'
          ]
        }
      ]
    },
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
          heading: 'Key Formula / Rule',
          text: 'The update rule moves weights opposite to the gradient, scaled by the learning rate.',
          example: {
            title: 'Example: Gradient Descent Update',
            code: 'General update rule:\n  w := w - η · ∇L(w)\n\nBatch GD:\n  ∇L = (1/N) Σᵢ ∇Lᵢ  ← average over all N samples\n  Stable but slow per step\n\nStochastic GD:\n  ∇L = ∇Lᵢ  ← single sample gradient\n  Fast but noisy\n\nMini-batch GD:\n  ∇L = (1/B) Σᵢ₌₁ᴮ ∇Lᵢ  ← average over batch of B samples\n  Balance of speed and stability',
            output: 'Mini-batch GD (B=32–512) is the most widely used variant in practice.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Batch vs stochastic vs mini-batch gradient descent.',
          table: {
            headers: ['Type', 'Data Used', 'Pros', 'Cons', 'Best For'],
            rows: [
              ['Batch GD', 'Entire dataset (N samples)', 'Stable, accurate gradient', 'Slow, memory heavy', 'Small datasets'],
              ['Stochastic GD', '1 sample per update', 'Fast, online learning, escapes local minima', 'Noisy, oscillates', 'Streaming data'],
              ['Mini-batch GD', 'B samples (e.g., 32–512)', 'Balanced, vectorized on GPU', 'Requires tuning B', 'Most deep learning tasks']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using batch gradient descent on large datasets (fix: use mini-batch GD; batch GD is too slow and memory-intensive for millions of samples)',
            'Mistake 2: Setting a fixed learning rate that is too high or too low (fix: use learning rate schedules — step decay, exponential decay, or cosine annealing — to adapt η over time)',
            'Mistake 3: Not shuffling data before each epoch in SGD (fix: always shuffle training data each epoch; ordered data introduces harmful correlation in gradient estimates)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: Why is mini-batch gradient descent preferred over batch GD for large datasets?\nAns: It is computationally efficient, fits in GPU memory, and provides a good balance between gradient accuracy and update frequency.',
            'Q2: What is the risk of a learning rate that is too high?\nAns: The loss may oscillate or diverge because weight updates overshoot the minimum.',
            'Q3: Why does SGD help escape local minima better than batch GD?\nAns: The noise in single-sample gradients allows the optimizer to bounce out of shallow local minima and explore the loss landscape.'
          ]
        }
      ]
    },
    'loss-functions': {
      title: 'Loss Functions',
      subtitle: 'Measuring prediction error and guiding learning',
      sections: [
        {
          heading: 'What are Loss Functions?',
          text: 'A <strong>loss function</strong> quantifies the difference between a model\'s predictions and the true target values. It defines the objective that the optimizer minimizes during training. The choice of loss function shapes what the model learns to prioritize — for example, MSE penalizes large errors quadratically, while cross-entropy penalizes confident wrong predictions heavily.',
          list: [
            'Loss functions convert the prediction error into a single scalar the optimizer can minimize',
            'Different tasks require different losses: regression, binary classification, multi-class classification',
            'The loss must be differentiable so gradients can propagate through the network',
            'Some losses are robust to outliers (MAE, Huber), while others are sensitive (MSE)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cross-entropy with softmax produces clean, well-behaved gradients for classification.',
          example: {
            title: 'Example: Cross-Entropy with Softmax',
            code: 'Raw scores (logits): z = [2.0, 1.0, 0.1]\nSoftmax probabilities:\n  ŷ = [0.70, 0.26, 0.04]\n\nTrue label: class 0 (one-hot: [1, 0, 0])\n\nCross-Entropy Loss:\n  L = -Σ yᵢ log(ŷᵢ) = -log(0.70) ≈ 0.36\n\nGradient (simplified):\n  ∂L/∂zᵢ = ŷᵢ - yᵢ\n\nFor class 0:\n  ∂L/∂z₀ = 0.70 - 1 = -0.30',
            output: 'Clean gradient: prediction error directly drives weight updates.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Common loss functions and when to use them.',
          table: {
            headers: ['Loss Function', 'Formula', 'Use Case', 'Key Property'],
            rows: [
              ['MSE', '(1/N)Σ(yᵢ − ŷᵢ)²', 'Regression', 'Penalizes large errors heavily'],
              ['MAE', '(1/N)Σ|yᵢ − ŷᵢ|', 'Regression', 'Robust to outliers'],
              ['Binary Cross-Entropy', '−[y log(ŷ) + (1−y)log(1−ŷ)]', 'Binary classification', 'Penalizes confident wrong predictions'],
              ['Categorical Cross-Entropy', '−Σ yᵢ log(ŷᵢ)', 'Multi-class classification', 'Standard for softmax outputs'],
              ['Huber Loss', 'Piecewise MSE/MAE', 'Robust regression', 'Smooth near zero, linear far from zero']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using MSE for classification problems (fix: use cross-entropy for classification; MSE treats probabilities as continuous values and produces weak gradients for confident errors)',
            'Mistake 2: Applying softmax before a loss that already includes it (fix: PyTorch CrossEntropyLoss expects raw logits, not softmax outputs; using both causes incorrect gradients)',
            'Mistake 3: Ignoring class imbalance when choosing loss (fix: use weighted cross-entropy or focal loss when some classes are rare to prevent the model from ignoring minority classes)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: Why is cross-entropy preferred over MSE for classification?\nAns: Cross-entropy penalizes confident wrong predictions more strongly and produces cleaner gradients when combined with softmax.',
            'Q2: What is the gradient of cross-entropy loss with respect to logits?\nAns: ∂L/∂zᵢ = ŷᵢ − yᵢ, which is a simple and numerically stable expression.',
            'Q3: When should you use Huber loss instead of MSE?\nAns: When outliers are present and you want to avoid them dominating the loss, since Huber transitions to linear penalty far from the target.'
          ]
        }
      ]
    },
    optimization: {
      title: 'Optimization & Advanced Optimizers',
      subtitle: 'Going beyond basic gradient descent',
      sections: [
        {
          heading: 'What is Optimization in Deep Learning?',
          text: 'Optimization refers to the algorithms and techniques used to minimize the loss function during neural network training. While vanilla gradient descent is the foundation, modern deep learning relies on <strong>adaptive optimizers</strong> like Adam, RMSProp, and AdamW that automatically adjust learning rates per parameter and incorporate momentum for faster, more stable convergence.',
          list: [
            'Optimization algorithms determine how weights are updated based on computed gradients',
            'Momentum accumulates past gradients to speed up convergence and dampen oscillations',
            'Adaptive optimizers maintain per-parameter learning rates based on historical gradient magnitudes',
            'The choice of optimizer affects both training speed and final model quality'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Adam combines momentum with adaptive learning rates for robust, parameter-wise updates.',
          example: {
            title: 'Example: Adam Optimizer',
            code: 'Adam update equations:\n\nm = β₁·m + (1−β₁)·∇L   (momentum term)\nv = β₂·v + (1−β₂)·(∇L)²  (squared gradient average)\n\nBias correction:\n  m̂ = m / (1 − β₁ᵗ)\n  v̂ = v / (1 − β₂ᵗ)\n\nParameter update:\n  w = w − α · m̂ / (√v̂ + ε)\n\nDefault values:\n  β₁ = 0.9, β₂ = 0.999, ε = 10⁻⁸, α = 0.001',
            output: 'Adam adapts learning rates per parameter and is the most popular default optimizer.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing popular optimizers.',
          table: {
            headers: ['Optimizer', 'Key Feature', 'Best For', 'Caveat'],
            rows: [
              ['SGD + Momentum', 'Accumulates velocity along gradients', 'General problems', 'Requires tuning learning rate'],
              ['AdaGrad', 'Adapts LR per parameter based on history', 'Sparse data, NLP', 'Learning rate decays too aggressively'],
              ['RMSProp', 'Moving average of squared gradients', 'RNNs, non-stationary data', 'Needs decay hyperparameter tuning'],
              ['Adam', 'Momentum + RMSProp combined', 'Most problems (default choice)', 'May overfit; needs warmup in transformers'],
              ['AdamW', 'Adam with decoupled weight decay', 'Transformers, large models', 'Default for modern NLP and vision']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Adam with L2 regularization instead of AdamW (fix: AdamW decouples weight decay from the adaptive gradient update; using L2 with Adam incorrectly regularizes the scaled gradients)',
            'Mistake 2: Not using learning rate warmup with Adam in transformers (fix: start with a small LR and linearly increase for the first few thousand steps to prevent early instability)',
            'Mistake 3: Sticking with Adam for every problem without trying SGD (fix: SGD with momentum sometimes generalizes better than Adam; it is worth experimenting for final model quality)'
          ]
        },
        {
          heading: 'Real-World Application',
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
          text: 'Test your understanding.',
          list: [
            'Q1: What two ideas does Adam combine?\nAns: Momentum (exponential moving average of gradients) and RMSProp (exponential moving average of squared gradients).',
            'Q2: Why is AdamW preferred over Adam with L2 regularization?\nAns: AdamW decouples weight decay from the adaptive gradient scaling, so regularization is applied correctly to the weights rather than to the momentum-adjusted gradients.',
            'Q3: What problem does learning rate warmup solve?\nAns: In the early stages of training, large adaptive learning rates can cause instability and divergence; warmup gradually increases the LR to prevent this.'
          ]
        }
      ]
    }
  }
};
