export const dlModule3Content = {
  module3: {
    'cnn-advanced': {
      title: 'Advanced CNN Architectures',
      subtitle: 'Beyond basic convolution: modern building blocks',
      sections: [
        {
          heading: 'What are Advanced CNN Techniques?',
          text: 'Modern CNNs use specialized layers to increase receptive field, reduce parameters, and improve efficiency without sacrificing accuracy.',
          list: [
            'Dilated (Atrous) Convolution: expands receptive field without losing resolution',
            'Depthwise Separable Convolution: splits standard conv into depthwise + pointwise for fewer params',
            'Attention Mechanisms: channel and spatial attention (Squeeze-and-Excitation, CBAM)',
            'Deformable Convolution: learns sampling offsets for geometric variations',
            'Neural Architecture Search (NAS): automates the design of conv layers'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Depthwise separable convolution drastically reduces computation.',
          example: {
            title: 'Depthwise Separable vs Standard Conv',
            code: `Standard Conv (3×3, in=256, out=256):
  Params: 3 × 3 × 256 × 256 = 589,824
  FLOPs: 589,824 × H × W

Depthwise Separable:
  Depthwise: 3 × 3 × 256 = 2,304
  Pointwise: 1 × 1 × 256 × 256 = 65,536
  Total params: 67,840 (8.7× fewer!)

Savings increase with larger channel counts.`,
            output: 'MobileNet and EfficientNet rely on depthwise separable convolutions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Standard vs advanced convolution variants.',
          table: {
            headers: ['Technique', 'What It Does', 'Trade-off'],
            rows: [
              ['Standard Conv', 'Full kernel over all channels', 'High accuracy, many params'],
              ['Depthwise Separable', 'Depthwise + pointwise', 'Fewer params, slightly lower capacity'],
              ['Dilated Conv', 'Gaps in kernel (atrous)', 'Larger receptive field, same resolution'],
              ['Deformable Conv', 'Learns offset per pixel', 'Better for geometry, more compute'],
              ['SE Block', 'Channel-wise recalibration', 'Small overhead, better feature usage']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using dilated conv everywhere (fix: apply only in later layers where resolution is already reduced)',
            'Mistake 2: Ignoring memory bandwidth with separable convs (fix: they reduce compute but can be memory-bound; profile before deploying)',
            'Mistake 3: Adding attention blindly (fix: SE blocks help on harder datasets; on simple tasks, they add overhead without gain)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Advanced CNN blocks power mobile vision and real-time segmentation.',
          list: [
            'MobileNetV3 uses depthwise separable + squeeze-and-excitation for on-device image classification',
            'DeepLabV3+ uses atrous spatial pyramid pooling (ASPP) with dilated convs for semantic segmentation',
            'Deformable ConvNets improve object detection for deformable objects (e.g., animals, pedestrians)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Advanced CNNs improve efficiency and capacity with minimal compute increase',
            'Depthwise separable conv splits operations to reduce params ~8–9×',
            'Dilated conv increases receptive field without pooling',
            'Attention blocks (SE, CBAM) recalibrate channel/spatial importance',
            'NAS automates architecture search but requires large compute budgets'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is depthwise separable convolution cheaper than standard convolution?\nAns: It separates spatial filtering (depthwise) and cross-channel mixing (pointwise), avoiding the full kernel over all channels.',
            'Q2: What does a dilated convolution achieve?\nAns: It expands the receptive field without increasing kernel size or losing spatial resolution.',
            'Q3: What is the role of a Squeeze-and-Excitation (SE) block?\nAns: It learns per-channel scaling factors to recalibrate feature importance.'
          ]
        }
      ]
    },
    resnet: {
      title: 'ResNet (Residual Networks)',
      subtitle: 'Learning residual mappings with skip connections',
      sections: [
        {
          heading: 'What is ResNet?',
          text: 'ResNet introduces <strong>skip connections</strong> (residual connections) that allow gradients to flow directly through the network, enabling training of very deep models.',
          list: [
            'First network to successfully train beyond 100 layers (ResNet-152, ResNet-1000+)',
            'Core idea: learn residual mapping F(x) = H(x) - x instead of direct mapping H(x)',
            'Skip connection: y = F(x) + x (identity shortcut)',
            'Solves vanishing gradient and degradation problems in deep networks'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The residual block and its variants.',
          example: {
            title: 'Residual Block',
            code: `Basic Block (ResNet-18/34):
  y = F(x, {Wi}) + x
  F(x) = W₂(ReLU(W₁x))

Bottleneck Block (ResNet-50/101/152):
  F(x) = W₃(ReLU(W₂(ReLU(W₁x))))
  Where:
    W₁: 1×1 conv (reduce)
    W₂: 3×3 conv (process)
    W₃: 1×1 conv (restore)

When dimensions change:
  y = F(x, {Wi}) + Ws·x
  Ws = 1×1 projection shortcut`,
            output: 'Bottleneck design reduces computation while preserving depth.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'ResNet variants and their characteristics.',
          table: {
            headers: ['Variant', 'Depth', 'Block Type', 'Top-1 ImageNet'],
            rows: [
              ['ResNet-18', '18', 'Basic', '~69.6%'],
              ['ResNet-34', '34', 'Basic', '~73.3%'],
              ['ResNet-50', '50', 'Bottleneck', '~76.1%'],
              ['ResNet-101', '101', 'Bottleneck', '~77.4%'],
              ['ResNet-152', '152', 'Bottleneck', '~78.3%'],
              ['ResNeXt', '50', 'Grouped conv', '~78.2%']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting projection shortcut when channels change (fix: use 1×1 conv on the skip path when input and output dimensions differ)',
            'Mistake 2: Stacking blocks without batch normalization (fix: BN before activation is standard in ResNet; keep the pre-activation ordering consistent)',
            'Mistake 3: Assuming deeper always means better (fix: beyond ResNet-152, gains diminish; use pre-trained weights and fine-tune instead of training from scratch)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'ResNet is the backbone of countless vision systems.',
          list: [
            'Image classification: standard pre-trained backbone for transfer learning',
            'Object detection (Faster R-CNN, Mask R-CNN): ResNet + FPN as feature extractor',
            'Medical imaging: deep ResNets for CT/MRI anomaly detection',
            'Face recognition: ResNet-50/100 architectures dominate benchmark leaderboards'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ResNet learns residual functions F(x) = H(x) - x via skip connections',
            'Identity shortcuts preserve gradient flow, solving degradation in deep nets',
            'Bottleneck blocks (1×1→3×3→1×1) make deeper networks computationally feasible',
            'ResNet-50 and ResNet-101 are the most widely used variants in practice',
            'Pre-trained ResNet weights are the default starting point for computer vision tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What problem do skip connections solve?\nAns: They mitigate vanishing gradients and degradation, allowing very deep networks to train.',
            'Q2: Why does the bottleneck block use 1×1 convolutions?\nAns: To reduce and then restore channel dimensions, cutting FLOPs while keeping representational depth.',
            'Q3: When is a projection shortcut needed?\nAns: When the input and output dimensions (channels or spatial size) differ, a 1×1 conv aligns them.'
          ]
        }
      ]
    },
    inception: {
      title: 'Inception Networks (GoogLeNet)',
      subtitle: 'Multi-scale feature extraction with parallel convolutions',
      sections: [
        {
          heading: 'What is Inception?',
          text: 'Inception modules apply multiple filter sizes (1×1, 3×3, 5×5) and pooling in parallel, letting the network choose which features matter at each layer.',
          list: [
            'Introduced in GoogLeNet (ILSVRC 2014 winner)',
            'Motivation: salient features can vary wildly in size; optimal filter size is task-dependent',
            '1×1 convolutions reduce dimensionality before expensive 3×3 and 5×5 convs',
            'Network-in-Network design: stack Inception modules to build very deep, efficient nets'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Inception module structure and dimensionality reduction.',
          example: {
            title: 'Inception Module (Naïve vs Dimension-Reduced)',
            code: `Naïve Inception (input: 28×28×256):
  1×1 conv → 28×28×128
  3×3 conv → 28×28×192
  5×5 conv → 28×28×96
  3×3 pool → 28×28×256
  Concat = 128+192+96+256 = 672 channels

With 1×1 reductions:
  1×1 conv → 128
  1×1 reduce → 96 → 3×3 conv → 192
  1×1 reduce → 16 → 5×5 conv → 96
  3×3 pool → 1×1 proj → 64
  Concat = 128+192+96+64 = 480 channels

→ Fewer parameters, similar capacity.`,
            output: '1×1 convolutions are the workhorse of Inception efficiency.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Evolution of Inception variants.',
          table: {
            headers: ['Variant', 'Key Improvement', 'Use Case'],
            rows: [
              ['Inception v1 (GoogLeNet)', 'Parallel multi-scale convs', 'General classification'],
              ['Inception v2/v3', 'Factorized convs (7×7 → 1×7+7×1)', 'Better regularization'],
              ['Inception v4', 'Uniform modules + ResNet connection', 'Higher accuracy'],
              ['Inception-ResNet', 'Inception modules + residual', 'Faster convergence'],
              ['Xception', 'Depthwise separable convs', 'Mobile efficiency']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using Inception without auxiliary classifiers for deep training (fix: v1 uses auxiliary softmax heads at intermediate layers to combat vanishing gradients)',
            'Mistake 2: Assuming 5×5 filters are always wasteful (fix: in early layers they capture coarse patterns; in later layers, factorize them into stacked 3×3s)',
            'Mistake 3: Concatenating unequal spatial sizes (fix: use same padding on all branches so height/width match before concatenation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Inception-style multi-scale processing appears in modern detection and segmentation.',
          list: [
            'Object detection (SSD): uses multi-scale feature maps inspired by Inception principles',
            'Feature pyramid networks (FPN): leverage multi-scale representations for multi-resolution object sizes',
            'Medical image analysis: multi-scale convs help detect lesions of varying sizes in histopathology'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Inception runs multiple convolutions in parallel and concatenates results',
            '1×1 convolutions reduce channels before expensive 3×3 and 5×5 operations',
            'Factorization (e.g., 5×5 → two 3×3s) further reduces compute in v2/v3',
            'Auxiliary classifiers help train very deep Inception networks',
            'Inception-ResNet combines multi-scale extraction with residual learning'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does Inception use multiple filter sizes in parallel?\nAns: Because salient features occur at different scales; the network learns which scales matter.',
            'Q2: What is the role of 1×1 convolutions inside an Inception module?\nAns: They reduce channel dimensionality before larger convolutions, keeping computation manageable.',
            'Q3: How does factorization reduce cost in Inception v2/v3?\nAns: A 5×5 conv is replaced by two 3×3 convs, and n×n is replaced by 1×n + n×1.'
          ]
        }
      ]
    },
    densenet: {
      title: 'DenseNet (Densely Connected Networks)',
      subtitle: 'Maximum feature reuse with dense connectivity',
      sections: [
        {
          heading: 'What is DenseNet?',
          text: 'DenseNet connects each layer to every other layer in a feed-forward fashion. Every layer receives feature maps from all preceding layers and passes its own to all subsequent layers.',
          list: [
            'Alleviates vanishing gradients through direct connections',
            'Encourages feature reuse: early low-level features are available to late layers',
            'Reduces parameters: narrow layers (small k) suffice because of dense concatenation',
            'Growth rate (k): number of new feature maps each layer produces (typical k = 12, 24, 32)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Dense connectivity and composite function.',
          example: {
            title: 'Dense Block',
            code: `For layer l in a dense block:
  xl = Hl([x₀, x₁, ..., xl₋₁])

Where:
  [x₀, ..., xl₋₁] = concatenation of all previous outputs
  Hl = BN → ReLU → 3×3 Conv (composite function)

Channels after l layers:
  k₀ + k × l
  k₀ = initial channels
  k = growth rate

Transition layer (between dense blocks):
  1×1 conv (compress) + 2×2 avg pool (downsample)`,
            output: 'Concatenation preserves all previous features; growth rate controls memory.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'DenseNet vs ResNet.',
          table: {
            headers: ['Aspect', 'ResNet', 'DenseNet'],
            rows: [
              ['Connection', 'Additive skip (y = F(x) + x)', 'Concatenative (y = [x, F(x)])'],
              ['Feature reuse', 'Limited (only immediate skip)', 'Maximum (all previous layers)'],
              ['Parameters', 'Moderate', 'Fewer (narrow layers suffice)'],
              ['Memory', 'Moderate', 'Higher (concatenation grows)'],
              ['Gradient flow', 'Good', 'Excellent (direct to all layers)'],
              ['Bottleneck', '1×1→3×3→1×1', '1×1 before 3×3 in composite fn']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Setting growth rate too high (fix: k=12–32 is standard; higher k causes memory explosion due to concatenation)',
            'Mistake 2: Omitting bottleneck 1×1 conv in composite function (fix: DenseNet-B/C use 1×1 before 3×3 to reduce channels and memory)',
            'Mistake 3: Using DenseNet for very high-resolution inputs without compression (fix: add transition layers with compression θ=0.5 to halve channels between blocks)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Dense feature reuse helps tasks needing fine-grained localization.',
          list: [
            'Semantic segmentation: dense skip pathways improve boundary detection (DenseASPP, FC-DenseNet)',
            'Medical imaging: small growth rates work well with limited training data',
            'Style transfer: feature reuse across layers preserves content while transferring style'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'DenseNet concatenates outputs from all previous layers into each new layer',
            'Growth rate (k) controls how many new features each layer adds',
            'Feature reuse reduces the need for wide layers, cutting parameters',
            'Transition layers compress and downsample between dense blocks',
            'Dense connections improve gradient flow and encourage feature propagation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How does DenseNet differ from ResNet in connectivity?\nAns: ResNet adds skips (y = F(x) + x); DenseNet concatenates all previous features (y = [x₀, ..., x]).',
            'Q2: Why can DenseNet use fewer parameters than ResNet?\nAns: Narrow layers suffice because dense concatenation provides rich feature access to every layer.',
            'Q3: What is the purpose of a transition layer?\nAns: To compress channels (1×1 conv) and downsample (pooling) between dense blocks.'
          ]
        }
      ]
    },
    efficientnet: {
      title: 'EfficientNet',
      subtitle: 'Compound scaling of depth, width, and resolution',
      sections: [
        {
          heading: 'What is EfficientNet?',
          text: 'EfficientNet systematically scales CNNs using a compound coefficient that jointly increases depth, width, and input resolution.',
          list: [
            'Insight: scaling only one dimension (depth, width, or resolution) yields diminishing returns',
            'Compound scaling: d = α^φ, w = β^φ, r = γ^φ, where φ is a user-specified scaling factor',
            'Base network (EfficientNet-B0) found via Neural Architecture Search (NAS)',
            'EfficientNet-B0 to B7 cover a spectrum from mobile to server-class accuracy'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Compound scaling equations.',
          example: {
            title: 'Compound Scaling',
            code: `Given base network:
  depth: d = α^φ
  width: w = β^φ
  resolution: r = γ^φ

Constraints:
  α · β² · γ² ≈ 2
  α ≥ 1, β ≥ 1, γ ≥ 1

For φ = 1 (B1):
  d = α, w = β, r = γ

For φ = 2 (B2):
  d = α², w = β², r = γ²

Found via grid search on B0:
  α = 1.2, β = 1.1, γ = 1.15`,
            output: 'Joint scaling gives better accuracy per FLOP than scaling one dimension.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'EfficientNet family vs other CNNs.',
          table: {
            headers: ['Model', 'Params', 'Top-1 Acc', 'FLOPs'],
            rows: [
              ['MobileNetV2', '3.5M', '72.0%', '300M'],
              ['ResNet-50', '26M', '76.0%', '4.1B'],
              ['EfficientNet-B0', '5.3M', '77.1%', '390M'],
              ['EfficientNet-B3', '12M', '81.1%', '1.8B'],
              ['EfficientNet-B7', '66M', '84.3%', '37B'],
              ['ResNet-152', '60M', '78.3%', '11.6B']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Scaling EfficientNet without adjusting input pipeline (fix: higher resolution requires larger batch augmentation and adjusted crop sizes)',
            'Mistake 2: Assuming B7 is always best (fix: B0–B3 are usually sufficient and far faster; use accuracy/speed tradeoff to pick)',
            'Mistake 3: Ignoring memory at higher resolutions (fix: r increases quadratically in memory; use gradient checkpointing or mixed precision)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'EfficientNet is the go-to backbone when efficiency matters.',
          list: [
            'Mobile apps: EfficientNet-B0 runs real-time classification on mid-tier phones',
            'Cloud APIs: B4–B5 offer strong accuracy without the inference cost of giant transformers',
            'Medical edge devices: B0 with quantized weights enables on-device pathology screening'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'EfficientNet scales depth, width, and resolution together via compound coefficients',
            'Base network (B0) is discovered by NAS; larger variants scale with φ',
            'Compound scaling outperforms single-dimension scaling in accuracy vs FLOPs',
            'B0–B3 are practical defaults; B7 is for maximum accuracy at high compute cost',
            'EfficientNetV2 adds progressive learning and Fused-MBConv for faster training'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is compound scaling?\nAns: Scaling depth, width, and resolution jointly using fixed coefficients (α, β, γ) raised to a user factor φ.',
            'Q2: Why is EfficientNet more efficient than ResNet at similar accuracy?\nAns: Better base architecture (NAS-optimized) and balanced scaling prevent diminishing returns.',
            'Q3: What is the downside of scaling resolution too aggressively?\nAns: Memory and compute grow quadratically with resolution; training becomes unstable without adjusted pipelines.'
          ]
        }
      ]
    },
    'neural-architecture-search': {
      title: 'Neural Architecture Search (NAS)',
      subtitle: 'Automating the design of neural networks',
      sections: [
        {
          heading: 'What is NAS?',
          text: 'NAS automates the discovery of optimal neural architectures by searching over a defined space of operations, connections, and hyperparameters.',
          list: [
            'Search space: defines allowable layers, operations, and connectivity patterns',
            'Search strategy: how to explore the space (random, evolutionary, RL, gradient-based)',
            'Performance estimation: how to evaluate candidate architectures quickly',
            'Popular methods: DARTS (differentiable), ENAS (efficient with parameter sharing), Auto-Keras'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'DARTS relaxes the discrete search into a continuous weighting over operations.',
          example: {
            title: 'DARTS Cell',
            code: `Discrete architecture:
  o* = argmax_o α_o  (one operation per edge)

DARTS relaxation:
  mixed operation = Σ softmax(α_o) · o(x)
  
Bilevel optimization:
  Inner: minimize w.r.t. network weights w
    min_w L_train(w, α)
  Outer: minimize w.r.t. architecture parameters α
    min_α L_val(w*(α), α)

After search:
  Keep top-k operations by α to get discrete cell.`,
            output: 'Differentiable NAS reduces search cost from thousands of GPU days to a few days.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'NAS methods compared.',
          table: {
            headers: ['Method', 'Search Strategy', 'Cost', 'Notable Result'],
            rows: [
              ['NASNet', 'RL + 800 GPUs', '22,400 GPU-days', 'State-of-the-art at launch'],
              ['ENAS', 'RL + weight sharing', '1 GPU-day', 'Efficient via parameter reuse'],
              ['DARTS', 'Gradient-based', '4 GPU-days', 'Differentiable relaxation'],
              ['ProxylessNAS', 'Gradient on hardware', '8 GPU-days', 'Hardware-aware latency'],
              ['EfficientNet', 'Compound scaling of NAS base', 'Small', 'Best accuracy/FLOP tradeoff']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Searching on CIFAR-10 and directly transferring to ImageNet (fix: search space must support scale differences; use progressive resizing or proxy tasks with care)',
            'Mistake 2: Overlooking search cost (fix: weight sharing, one-shot supernets, and zero-cost proxies reduce evaluation cost dramatically)',
            'Mistake 3: Optimizing only accuracy (fix: add latency/FLOPs into the objective for deployable models, as in ProxylessNAS and OFA)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'NAS-produced architectures are now mainstream backbones.',
          list: [
            'EfficientNet B0 is an NAS-discovered base scaled by compound coefficients',
            'Mobile models: MNASNet and FBNet optimize for mobile latency directly',
            'Custom hardware: NAS finds ops that map efficiently to specific accelerators (e.g., edge TPU)'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'NAS automates architecture design via search space + strategy + evaluation',
            'Early NAS was prohibitively expensive; modern methods (DARTS, ENAS, ProxylessNAS) cut cost',
            'Differentiable NAS (DARTS) relaxes discrete choices into continuous weights',
            'Hardware-aware NAS optimizes accuracy and latency together',
            'NAS-discovered cells are often transferable across tasks and datasets'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the three components of NAS?\nAns: Search space, search strategy, and performance estimation.',
            'Q2: How does DARTS make NAS differentiable?\nAns: It replaces the discrete operation choice with a softmax-weighted mixture over all operations.',
            'Q3: Why is hardware-aware NAS important?\nAns: Because accuracy alone does not guarantee deployability; latency and memory constraints vary by device.'
          ]
        }
      ]
    },
    'transfer-learning-dl': {
      title: 'Transfer Learning in Deep Learning',
      subtitle: 'Leveraging pre-trained representations',
      sections: [
        {
          heading: 'What is Transfer Learning?',
          text: 'Transfer learning uses a model trained on a large source dataset (e.g., ImageNet) and adapts it to a smaller target task.',
          list: [
            'Feature extractor: freeze early layers, train only the final classifier',
            'Fine-tuning: unfreeze all layers and train end-to-end with a low learning rate',
            'Source and target domains should be related for transfer to work well',
            'Pre-trained weights provide robust initial features, reducing need for massive target data'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Layer-wise transferability: early layers are more transferable than late layers.',
          example: {
            title: 'Transfer Learning Workflow',
            code: `Step 1: Load pre-trained model
  model = ResNet50(weights="imagenet")

Step 2: Replace classifier head
  model.fc = nn.Linear(2048, num_classes)

Step 3: Feature extraction (option A)
  freeze all backbone layers
  train only fc with LR = 1e-3

Step 4: Fine-tuning (option B)
  unfreeze backbone after a few epochs
  use LR = 1e-5 (10× lower than head)
  → differential learning rates per layer block`,
            output: 'Start with frozen features, then progressively unfreeze for best results.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'When to freeze vs fine-tune.',
          table: {
            headers: ['Scenario', 'Approach', 'Rationale'],
            rows: [
              ['Small target data, similar domain', 'Freeze backbone', 'Avoid overfitting, use generic features'],
              ['Small target data, different domain', 'Fine-tune top layers', 'Late layers are task-specific; adjust them'],
              ['Large target data, similar domain', 'Fine-tune all layers', 'Enough data to safely adapt all features'],
              ['Large target data, different domain', 'Train from scratch', 'Pre-trained features may transfer poorly'],
              ['Very large target data', 'Train from scratch', 'Pre-training adds little benefit']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the same learning rate for backbone and head (fix: backbone needs a smaller LR because pre-trained weights are already good; use discriminative fine-tuning)',
            'Mistake 2: Forgetting to match normalization statistics (fix: if source uses ImageNet mean/std, apply same preprocessing to target data)',
            'Mistake 3: Unfreezing everything immediately on tiny datasets (fix: start frozen, validate, then slowly unfreeze layer blocks)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Transfer learning is the default practice in applied deep learning.',
          list: [
            'Computer vision: ImageNet pre-training is standard for classification, detection, and segmentation',
            'NLP: BERT and GPT models are fine-tuned for sentiment analysis, NER, and summarization',
            'Medical imaging: radiology models initialized on ImageNet and fine-tuned on chest X-rays and CT scans',
            'Audio: spectrogram-based models use vision backbones (e.g., ResNet) with audio pre-training'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transfer learning adapts pre-trained models to new tasks with limited data',
            'Feature extraction freezes the backbone; fine-tuning updates all weights',
            'Early layers are more transferable than late layers',
            'Use lower learning rates for pre-trained layers during fine-tuning',
            'Match preprocessing and normalization between source and target datasets'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why are early layers more transferable than late layers?\nAns: Early layers learn generic features (edges, textures); late layers learn task-specific patterns.',
            'Q2: What is discriminative fine-tuning?\nAns: Using different learning rates for different layers, typically smaller for pre-trained backbone layers.',
            'Q3: When should you train from scratch instead of fine-tuning?\nAns: When target data is very large and the target domain is very different from the source domain.'
          ]
        }
      ]
    },
    'fine-tuning': {
      title: 'Fine-Tuning Strategies',
      subtitle: 'How to adapt pre-trained models effectively',
      sections: [
        {
          heading: 'What is Fine-Tuning?',
          text: 'Fine-tuning is the process of continuing training on a pre-trained model using target-domain data. Done correctly, it yields higher accuracy than training from scratch.',
          list: [
            'Progressive unfreezing: start frozen, unfreeze deeper layers gradually',
            'Discriminative learning rates: lower LR for early layers, higher for new head',
            'Layer-wise LR decay: multiply LR by a decay factor per layer block',
            'Warm restarts: use cosine annealing to escape local minima during fine-tuning'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Layer-wise learning rate decay.',
          example: {
            title: 'Discriminative Fine-Tuning',
            code: `Layer groups (ResNet-50):
  Group 1: conv1 + bn1 (most generic)
  Group 2: layer1
  Group 3: layer2
  Group 4: layer3
  Group 5: layer4 (most task-specific)
  Group 6: fc (new head)

Learning rates:
  lr_1 = base_lr / (decay^5)
  lr_2 = base_lr / (decay^4)
  ...
  lr_6 = base_lr

Example (base_lr = 1e-3, decay = 2.6):
  conv1:  9.4e-6
  layer1: 2.4e-5
  layer2: 6.3e-5
  layer3: 1.6e-4
  layer4: 4.2e-4
  fc:     1.0e-3`,
            output: 'Earlier layers change very little; the head changes the most.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Fine-tuning strategies compared.',
          table: {
            headers: ['Strategy', 'How', 'Best For'],
            rows: [
              ['Full fine-tune', 'Unfreeze all, train end-to-end', 'Large target data'],
              ['Progressive unfreeze', 'Unfreeze layer groups over epochs', 'Medium data, avoiding catastrophic forgetting'],
              ['Head only', 'Freeze backbone, train classifier', 'Very small data, similar domain'],
              ['Adapter layers', 'Insert small trainable layers', 'Multi-task, parameter efficiency'],
              ['LoRA', 'Low-rank updates to weights', 'LLMs, GPU-constrained fine-tuning']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too high a learning rate and destroying pre-trained features (fix: start with LR 1e-4 or lower for backbone; monitor validation loss for spikes)',
            'Mistake 2: Fine-tuning batch normalization layers on tiny batches (fix: freeze BN statistics when batch size < 16 to avoid unstable mean/variance estimates)',
            'Mistake 3: Ignoring class imbalance in the target dataset (fix: use weighted loss or oversampling so the head does not bias toward majority classes)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Fine-tuning is the workhorse of production ML.',
          list: [
            'Retail: fine-tune image classifiers on product catalogs with only hundreds of images per class',
            'Finance: fine-tune language models on domain-specific documents (annual reports, filings)',
            'Autonomous driving: fine-tune detection backbones on synthetic-to-real transfer',
            'Healthcare: fine-tune radiology models on hospital-specific scanners and protocols'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Fine-tuning continues training a pre-trained model on target data',
            'Progressive unfreezing and discriminative LRs protect generic features',
            'Batch normalization should often be frozen during fine-tuning on small batches',
            'Adapter layers and LoRA offer parameter-efficient alternatives to full fine-tuning',
            'Monitor validation metrics closely; pre-trained weights can degrade quickly with bad hyperparameters'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why use a lower learning rate for the backbone during fine-tuning?\nAns: Pre-trained features are already good; aggressive updates can destroy useful representations.',
            'Q2: When should you freeze batch normalization layers?\nAns: When target batch sizes are small (<16), to avoid unstable running statistics.',
            'Q3: What is progressive unfreezing?\nAns: Starting with a frozen backbone and gradually unfreezing deeper layers over training epochs.'
          ]
        }
      ]
    },
    quantization: {
      title: 'Model Quantization',
      subtitle: 'Reducing precision for faster, smaller inference',
      sections: [
        {
          heading: 'What is Quantization?',
          text: 'Quantization converts model weights and activations from high-precision floating point (FP32) to lower precision (FP16, INT8, INT4), reducing model size and inference latency.',
          list: [
            'Post-training quantization (PTQ): quantize after training without retraining; fastest to deploy',
            'Quantization-aware training (QAT): simulate low precision during training for best accuracy',
            'Dynamic quantization: quantize weights ahead of time, but activations on-the-fly',
            'Static quantization: pre-compute activation ranges using calibration data'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Linear quantization maps a floating-point range to integers.',
          example: {
            title: 'INT8 Quantization',
            code: `Scale and zero-point:
  scale = (max - min) / (2^b - 1)
  zero_point = -round(min / scale)

Quantize:
  x_int8 = round(x_fp32 / scale) + zero_point

Dequantize:
  x_fp32 ≈ scale × (x_int8 - zero_point)

Example:
  Weights in [-2.5, 2.5], b = 8
  scale = 5.0 / 255 ≈ 0.0196
  zero_point = 128

  w = 1.0 → round(1.0/0.0196) + 128 = 179`,
            output: 'INT8 weights take 4× less storage than FP32.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Quantization approaches compared.',
          table: {
            headers: ['Method', 'When Applied', 'Accuracy Impact', 'Effort'],
            rows: [
              ['FP32 baseline', 'None', 'Best', 'None'],
              ['FP16 mixed', 'Training / inference', 'Negligible', 'Minimal'],
              ['Dynamic INT8', 'Post-training', 'Small drop', 'Low'],
              ['Static INT8', 'Post-training + calibration', 'Small drop', 'Medium'],
              ['QAT INT8', 'During training', 'Minimal drop', 'High']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Quantizing all layers uniformly (fix: sensitive layers like first/last conv and attention should keep higher precision or use per-channel scales)',
            'Mistake 2: Using too few calibration samples for static quantization (fix: 100–1000 representative samples are usually enough; use the training set, not random noise)',
            'Mistake 3: Expecting training-time speedup from quantization (fix: quantization mainly accelerates inference; training with QAT is often slower due to fake-quant ops)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Quantization is essential for edge and mobile deployment.',
          list: [
            'Mobile vision: INT8 MobileNet runs at 30+ FPS on smartphone NPUs',
            'LLM serving: INT4/INT8 weight quantization reduces GPU memory for serving large models',
            'Autonomous driving: quantized perception models run on embedded automotive chips',
            'Smart cameras: INT8 face detection runs on low-power ARM Cortex cores'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Quantization reduces weight/activation precision to shrink models and speed up inference',
            'PTQ is fast but can hurt accuracy; QAT preserves accuracy best',
            'INT8 offers 4× size reduction and 2–4× speedup on supported hardware',
            'Per-channel quantization improves accuracy for convolutional layers',
            'Calibration data should match the real input distribution for static quantization'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between PTQ and QAT?\nAns: PTQ quantizes after training; QAT simulates quantization during training so the model learns to tolerate low precision.',
            'Q2: Why does INT8 quantization save memory?\nAns: INT8 uses 1 byte per value vs 4 bytes for FP32 → 4× reduction.',
            'Q3: What is a zero-point in quantization?\nAns: An integer offset that aligns the quantized range with the original floating-point range, handling asymmetric distributions.'
          ]
        }
      ]
    },
    pruning: {
      title: 'Model Pruning',
      subtitle: 'Removing redundant weights and connections',
      sections: [
        {
          heading: 'What is Pruning?',
          text: 'Pruning removes weights, neurons, or entire filters that contribute little to the output, producing sparser and smaller models.',
          list: [
            'Unstructured pruning: zeros out individual weights (fine-grained, harder to accelerate)',
            'Structured pruning: removes entire channels, filters, or layers (coarse-grained, hardware-friendly)',
            'Magnitude pruning: remove weights with smallest absolute values',
            'Movement pruning: remove weights moving toward zero during training'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Magnitude-based pruning threshold.',
          example: {
            title: 'Pruning Workflow',
            code: `Magnitude pruning:
  mask = |w| > threshold
  w_pruned = w ⊙ mask

Global threshold (sparsity = s):
  Sort all |w| → pick s-th percentile as threshold

Example (sparsity = 80%):
  Weights: [0.01, -0.5, 0.2, -0.02, 0.9]
  Sorted abs: [0.01, 0.02, 0.2, 0.5, 0.9]
  Threshold (80th percentile): 0.5
  Mask: [0, 1, 0, 0, 1]
  Pruned: [0, -0.5, 0, 0, 0.9]

Fine-tune after pruning to recover accuracy.`,
            output: 'Pruning + fine-tuning can retain accuracy with 90%+ sparsity.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Pruning strategies compared.',
          table: {
            headers: ['Type', 'What It Removes', 'Hardware Impact', 'Accuracy'],
            rows: [
              ['Unstructured', 'Individual weights', 'Needs sparse kernels', 'Highest potential compression'],
              ['Structured (filter)', 'Whole filters', 'Direct speedup on dense ops', 'Moderate compression'],
              ['Structured (channel)', 'Whole channels', 'Direct speedup', 'Moderate compression'],
              ['Layer pruning', 'Entire layers', 'Large speedup', 'Risk of large accuracy drop'],
              ['Lottery ticket', 'Subnetwork from random init', 'Same as base net', 'May match full network']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Pruning once and never fine-tuning (fix: always fine-tune pruned models; accuracy recovery is essential)',
            'Mistake 2: Pruning sensitive layers aggressively (fix: first and last layers are often more sensitive; prune middle layers more aggressively)',
            'Mistake 3: Assuming unstructured pruning gives free speedup (fix: standard GPUs do not accelerate sparse matrices well; use structured pruning for real latency gains)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Pruning enables large models on resource-constrained devices.',
          list: [
            'Mobile NLP: prune transformer attention heads to run BERT on phones',
            'Vision on edge: structured pruning of ResNet filters for real-time camera pipelines',
            'Federated learning: prune before sending model updates to reduce bandwidth',
            'Cloud cost reduction: pruned models need fewer FLOPs, lowering inference bills'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Pruning removes redundant weights to reduce model size and compute',
            'Unstructured pruning maximizes compression but is harder to accelerate',
            'Structured pruning removes filters/channels and yields direct speedups',
            'Magnitude pruning is the simplest method; movement pruning often outperforms it',
            'Always fine-tune after pruning to recover lost accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between structured and unstructured pruning?\nAns: Unstructured zeros individual weights; structured removes whole filters or channels.',
            'Q2: Why is fine-tuning necessary after pruning?\nAns: Removing weights disrupts the learned function; fine-tuning adjusts remaining weights to compensate.',
            'Q3: Which pruning type is best for immediate latency reduction on standard GPUs?\nAns: Structured pruning, because it reduces the dimensions of dense matrix operations.'
          ]
        }
      ]
    }
  }
}
