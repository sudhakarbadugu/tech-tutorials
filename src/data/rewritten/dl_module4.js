export const dlModule4Content = {
  module4: {
    'object-detection-dl': {
      title: 'Object Detection',
      subtitle: 'Localizing and classifying objects in images',
      sections: [
        {
          heading: 'What is Object Detection?',
          text: 'Object detection is a computer vision task that identifies <strong>what</strong> objects are present in an image and <strong>where</strong> they are located. Unlike image classification, which only assigns a single label, detection outputs bounding boxes with associated class labels and confidence scores.',
          list: [
            'Object detection combines classification (what) and localization (where) in a single pipeline',
            'Each detected object is represented by a bounding box: (x, y, width, height) plus a class label',
            'Modern detectors handle multiple objects, overlapping instances, and varying scales simultaneously',
            'Applications include autonomous driving, surveillance, medical imaging, and retail analytics'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Intersection over Union (IoU) measures how well a predicted box overlaps with the ground truth.',
          example: {
            title: 'Example: IoU and Bounding Box Regression',
            code: `IoU (Intersection over Union):
  IoU = Area of Intersection / Area of Union

  Ground truth: (50, 50, 100, 80)
  Prediction:  (55, 45, 95, 85)

  Intersection: overlap region
  Union: combined area

  IoU = 0.72 → Good overlap (> 0.5 is typical threshold)

Bounding Box Regression:
  tx = (Gx - Px) / Pw
  ty = (Gy - Py) / Ph
  tw = log(Gw / Pw)
  th = log(Gh / Ph)

  Where G = ground truth, P = predicted (anchor) box`,
            output: 'IoU > 0.5 is considered a positive detection. IoU > 0.75 is high quality.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Two-stage vs single-stage object detectors.',
          table: {
            headers: ['Aspect', 'Two-Stage (R-CNN family)', 'Single-Stage (YOLO, SSD)'],
            rows: [
              ['Pipeline', 'First propose regions, then classify', 'Predict boxes and classes in one pass'],
              ['Speed', 'Slower (10–20 FPS)', 'Faster (30–140+ FPS)'],
              ['Accuracy', 'Higher AP on complex scenes', 'Lower AP but often sufficient'],
              ['Architecture', 'Region Proposal Network + classifier', 'Dense prediction grid'],
              ['Examples', 'Faster R-CNN, Mask R-CNN', 'YOLOv8, SSD, RetinaNet'],
              ['Best for', 'High-accuracy applications', 'Real-time applications']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a single anchor size for all objects (fix: design anchor boxes at multiple scales and aspect ratios; use feature pyramid networks to handle small and large objects)',
            'Mistake 2: Ignoring class imbalance — background dominates (fix: use focal loss or hard negative mining to focus training on difficult examples and reduce background noise)',
            'Mistake 3: Setting IoU threshold too low or too high (fix: use 0.5 for positive/negative assignment during training; use 0.5–0.75 for evaluation depending on strictness needed)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Object detection enables machines to perceive and interact with the physical world.',
          list: [
            'Autonomous vehicles: detecting pedestrians, traffic signs, and other vehicles in real time for safe navigation',
            'Medical imaging: locating tumors, lesions, and anatomical structures in CT and MRI scans',
            'Retail and inventory: counting products on shelves, detecting out-of-stock items automatically',
            'Security systems: identifying intruders, abandoned objects, and anomalous behavior in video feeds'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Object detection = classification + localization with bounding boxes and confidence scores',
            'IoU measures overlap quality between predicted and ground-truth boxes',
            'Two-stage detectors (R-CNN) are more accurate; single-stage (YOLO) are faster',
            'Anchor boxes, feature pyramids, and focal loss address scale and imbalance challenges',
            'Non-Maximum Suppression (NMS) removes duplicate detections for the same object'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between image classification and object detection?\nAns: Classification assigns one label to an entire image; detection outputs multiple bounding boxes with class labels and confidence scores.',
            'Q2: What does IoU measure and what is a typical threshold for a positive match?\nAns: IoU measures the overlap between predicted and ground-truth bounding boxes; a threshold of 0.5 is commonly used.',
            'Q3: Why are single-stage detectors faster than two-stage detectors?\nAns: Single-stage detectors predict bounding boxes and class probabilities in one forward pass, eliminating the separate region proposal step.'
          ]
        }
      ]
    },
    'semantic-segmentation': {
      title: 'Semantic Segmentation',
      subtitle: 'Pixel-level classification of images',
      sections: [
        {
          heading: 'What is Semantic Segmentation?',
          text: 'Semantic segmentation assigns a <strong>class label to every pixel</strong> in an image. Unlike object detection, which uses bounding boxes, segmentation produces a dense pixel-wise mask where each pixel belongs to a category (e.g., road, sky, person, car). It does not distinguish between different instances of the same class.',
          list: [
            'Every pixel is classified into one of the predefined semantic categories',
            'Output is a segmentation mask with the same spatial dimensions as the input image',
            'Pixels of the same class receive the same label regardless of object instance',
            'Applications include autonomous driving, medical imaging, and satellite imagery analysis'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Encoder-decoder architectures with skip connections recover fine-grained spatial detail.',
          example: {
            title: 'Example: U-Net Architecture',
            code: `Encoder (downsampling):
  Input: 572×572×3
  Conv → 568×568×64
  MaxPool → 284×284×64
  ... (repeated conv + pool)
  Bottleneck: 28×28×1024

Decoder (upsampling):
  UpConv + Concat(skip) → 56×56×512
  UpConv + Concat(skip) → 112×112×256
  ...
  Output: 388×388×N_classes

Skip connections:
  Preserve high-resolution features from encoder
  → Better boundary definition`,
            output: 'U-Net uses skip connections to preserve spatial detail lost during downsampling.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Semantic vs instance vs panoptic segmentation.',
          table: {
            headers: ['Type', 'What it does', 'Distinguishes instances', 'Example output'],
            rows: [
              ['Semantic', 'Labels every pixel by class', 'No', 'All people = same color'],
              ['Instance', 'Labels every pixel + separates objects', 'Yes', 'Each person = different color'],
              ['Panoptic', 'Combines semantic + instance', 'Yes for things, no for stuff', 'Unified dense labeling'],
              ['Object Detection', 'Bounding boxes + classes', 'Yes', 'Boxes around objects']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using standard classification loss for segmentation (fix: use pixel-wise cross-entropy or dice loss; dice loss handles class imbalance better for small foreground regions)',
            'Mistake 2: Downsampling too aggressively without recovery (fix: use transposed convolutions or upsampling blocks in the decoder; preserve skip connections to retain fine spatial information)',
            'Mistake 3: Evaluating with overall accuracy when classes are imbalanced (fix: use mean IoU (mIoU) or dice score per class; overall accuracy is misleading when background dominates)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Pixel-perfect understanding of visual scenes enables precise decision-making.',
          list: [
            'Autonomous driving: identifying drivable road surfaces, sidewalks, and obstacles at pixel precision',
            'Medical imaging: segmenting organs, tumors, and blood vessels for diagnosis and surgical planning',
            'Agriculture: detecting crop boundaries, weed patches, and plant health from drone imagery',
            'Satellite and remote sensing: mapping land use, deforestation, and urban expansion from aerial images'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Semantic segmentation classifies every pixel into a semantic category',
            'Encoder-decoder architectures (U-Net, SegNet) are the standard design pattern',
            'Skip connections recover fine spatial details lost during encoder downsampling',
            'Dice loss and mIoU are preferred metrics due to class imbalance challenges',
            'Semantic segmentation does not distinguish different instances of the same class'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: How is semantic segmentation different from object detection?\nAns: Segmentation labels every pixel with a class mask, while detection outputs bounding boxes around objects.',
            'Q2: What is the purpose of skip connections in U-Net?\nAns: Skip connections copy high-resolution feature maps from the encoder to the decoder, preserving fine spatial detail for accurate boundary segmentation.',
            'Q3: Why is overall pixel accuracy a misleading metric for segmentation?\nAns: Because background pixels often dominate the image, making the model appear accurate even if it fails on small but important foreground classes.'
          ]
        }
      ]
    },
    'instance-segmentation': {
      title: 'Instance Segmentation',
      subtitle: 'Segmenting and distinguishing individual objects',
      sections: [
        {
          heading: 'What is Instance Segmentation?',
          text: 'Instance segmentation is the task of <strong>identifying and separating each individual object</strong> in an image at the pixel level. It combines the pixel-level precision of semantic segmentation with the instance-awareness of object detection, producing a distinct mask for every object instance.',
          list: [
            'Instance segmentation assigns a unique mask to each individual object, even if they belong to the same class',
            'It requires both localization (bounding box) and pixel-wise mask prediction',
            'Output is a set of masks, one per detected instance, with class labels and confidence scores',
            'Applications include robotics, augmented reality, autonomous systems, and video editing'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Mask R-CNN extends Faster R-CNN by adding a mask branch for pixel-level prediction.',
          example: {
            title: 'Example: Mask R-CNN Architecture',
            code: `Faster R-CNN backbone:
  Image → ResNet-FPN → feature maps

RPN: proposes object regions
  → RoIAlign extracts fixed-size features

Branches (parallel):
  1. Classifier: predicts class + refines box
     → class scores, bbox deltas

  2. Mask Head: FCN over RoI
     → 28×28 binary mask per class

Loss (multi-task):
  L = L_cls + L_box + L_mask

  L_mask = binary cross-entropy
    (per-pixel sigmoid, not softmax)`,
            output: 'Mask R-CNN detects objects and predicts a binary mask for each in one unified network.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Object detection vs semantic segmentation vs instance segmentation.',
          table: {
            headers: ['Task', 'Output', 'Pixel-level', 'Instance-aware'],
            rows: [
              ['Object Detection', 'Bounding boxes + classes', 'No', 'Yes'],
              ['Semantic Segmentation', 'Per-pixel class labels', 'Yes', 'No'],
              ['Instance Segmentation', 'Per-pixel masks per object', 'Yes', 'Yes'],
              ['Panoptic Segmentation', 'Unified semantic + instance', 'Yes', 'Partial']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using RoIPool instead of RoIAlign (fix: RoIPool performs coarse quantization causing misalignment; RoIAlign uses bilinear interpolation for precise feature extraction at sub-pixel locations)',
            'Mistake 2: Applying softmax across classes for the mask branch (fix: Mask R-CNN uses per-class binary sigmoid; this decouples mask prediction from classification and avoids competition between classes)',
            'Mistake 3: Training mask head with low-resolution targets only (fix: supervise the mask head at the native resolution of the RoI feature map and upsample to full resolution during inference for crisp boundaries)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Understanding scenes at the individual object level enables fine-grained interaction.',
          list: [
            'Autonomous driving: tracking each pedestrian and vehicle separately for motion prediction and collision avoidance',
            'Robotics: enabling robots to grasp, manipulate, and avoid specific objects in cluttered environments',
            'Medical imaging: isolating and measuring individual tumors, cells, or organs for precise treatment planning',
            'Video editing and AR: replacing or augmenting specific objects in a scene while leaving others untouched'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Instance segmentation = pixel-level masks + instance separation for every object',
            'Mask R-CNN extends Faster R-CNN with a parallel mask branch using RoIAlign',
            'RoIAlign is critical for accurate mask prediction; RoIPool causes misalignment',
            'Per-class binary sigmoid (not softmax) decouples mask and classification training',
            'It is the hardest of the three segmentation tasks, requiring both detection and dense prediction'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key difference between semantic and instance segmentation?\nAns: Semantic segmentation labels every pixel by class but does not distinguish individual objects; instance segmentation produces a separate mask for each object instance.',
            'Q2: Why does Mask R-CNN use RoIAlign instead of RoIPool?\nAns: RoIAlign uses bilinear interpolation to sample features at exact locations, avoiding the quantization misalignment introduced by RoIPool.',
            'Q3: Why is per-class binary sigmoid preferred over softmax for the mask branch?\nAns: Binary sigmoid decouples mask prediction from classification, allowing the network to predict a mask for each class independently without forcing a single-class winner.'
          ]
        }
      ]
    },
    'generative-models': {
      title: 'Generative Models',
      subtitle: 'Learning to create new data from patterns',
      sections: [
        {
          heading: 'What are Generative Models?',
          text: 'Generative models learn the <strong>underlying probability distribution</strong> of training data so they can generate new, realistic samples that resemble the data they were trained on. Unlike discriminative models, which learn boundaries between classes, generative models understand what the data looks like.',
          list: [
            'Generative models learn p(x) — the distribution of the data itself',
            'They can generate new samples, interpolate between examples, and fill in missing data',
            'Key families include GANs, VAEs, autoregressive models, and flow-based models',
            'Applications include image synthesis, data augmentation, drug discovery, and anomaly detection'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The core objective is to maximize the likelihood of the training data under the learned model.',
          example: {
            title: 'Example: Maximum Likelihood Training',
            code: `Goal: Learn model parameters θ such that pθ(x) ≈ p_data(x)

Maximum Likelihood:
  θ* = argmax_θ Π pθ(xi)
  → log-likelihood: Σ log pθ(xi)

For a simple Gaussian:
  p(x) = (1/√(2πσ²)) exp(-(x-μ)²/(2σ²))
  θ = {μ, σ²}

In deep generative models:
  pθ(x) is parameterized by a neural network
  → Direct optimization is often intractable
  → Use variational bounds (VAE) or adversarial training (GAN)`,
            output: 'Generative models optimize the probability of generating real data.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Discriminative vs generative models.',
          table: {
            headers: ['Aspect', 'Discriminative', 'Generative'],
            rows: [
              ['Objective', 'Learn p(y|x)', 'Learn p(x) or p(x,y)'],
              ['What it models', 'Decision boundaries', 'Data distribution'],
              ['Can generate data', 'No', 'Yes'],
              ['Can handle missing data', 'No', 'Yes'],
              ['Training data needs', 'Less data typically sufficient', 'More data needed'],
              ['Examples', 'CNN, SVM, logistic regression', 'GAN, VAE, diffusion, normalizing flows']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming generative models always produce higher quality than discriminative ones (fix: generative models excel at generation and density estimation; for pure classification, discriminative models often perform better with less data)',
            'Mistake 2: Ignoring mode collapse in generative training (fix: monitor diversity of generated samples; use techniques like minibatch discrimination, unrolled GANs, or alternative losses to prevent the model from producing limited varieties)',
            'Mistake 3: Training generative models on too little data (fix: generative models need abundant data to capture the full distribution; use data augmentation or pre-training when data is scarce)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Generative models create, augment, and complete data in transformative ways.',
          list: [
            'Image synthesis: generating photorealistic faces, artwork, and product designs from noise or text prompts',
            'Data augmentation: creating synthetic training samples to improve model robustness in medical and industrial domains',
            'Anomaly detection: learning normal data distribution and flagging outliers in manufacturing and cybersecurity',
            'Drug discovery: generating novel molecular structures with desired chemical properties for pharmaceutical research'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Generative models learn the data distribution p(x) to create new realistic samples',
            'Discriminative models learn p(y|x); generative models learn p(x) or joint p(x,y)',
            'Major families: GANs, VAEs, autoregressive models, normalizing flows, and diffusion models',
            'Mode collapse and data scarcity are common training challenges',
            'Applications span synthesis, augmentation, completion, and anomaly detection'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the fundamental difference between discriminative and generative models?\nAns: Discriminative models learn the conditional probability p(y|x) to classify; generative models learn the data distribution p(x) to generate new samples.',
            'Q2: Why do generative models typically need more training data than discriminative models?\nAns: Because they must learn the full joint distribution of the data, which is a harder problem than learning class boundaries.',
            'Q3: What is mode collapse and why is it a problem?\nAns: Mode collapse occurs when a generative model learns to produce only a narrow subset of possible outputs, ignoring diversity in the training data.'
          ]
        }
      ]
    },
    'diffusion-models': {
      title: 'Diffusion Models',
      subtitle: 'Gradual denoising for high-quality generation',
      sections: [
        {
          heading: 'What are Diffusion Models?',
          text: 'Diffusion models generate data by <strong>reversing a gradual noising process</strong>. During training, noise is progressively added to real data until it becomes pure random noise. A neural network learns to reverse this process, starting from noise and iteratively denoising to produce realistic samples.',
          list: [
            'Forward process: add Gaussian noise step by step over T timesteps until data becomes pure noise',
            'Reverse process: train a neural network to predict and remove noise at each step',
            'The model learns p(xₜ₋₁ | xₜ) — how to denoise one step at a time',
            'Diffusion models produce state-of-the-art image quality and have strong theoretical foundations'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The forward process is a fixed Markov chain that adds Gaussian noise with a schedule.',
          example: {
            title: 'Example: Forward and Reverse Diffusion',
            code: `Forward (fixed Markov chain):
  x₀ ~ q(x₀)   (real data)
  xₜ = √(ᾱₜ) x₀ + √(1-ᾱₜ) ε
    where ε ~ N(0, I)
    ᾱₜ = Π (1-βᵢ)   (cumulative noise schedule)

Reverse (learned):
  pθ(xₜ₋₁|xₜ) = N(xₜₓ₁; μθ(xₜ,t), Σθ(xₜ,t))

Simplified training objective:
  L = E[||ε - εθ(xₜ, t)||²]

  → Predict the noise ε that was added
  → Network input: noisy xₜ + timestep t`,
            output: 'The network learns to predict the noise added at each timestep, enabling iterative denoising.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Diffusion models vs GANs vs VAEs.',
          table: {
            headers: ['Aspect', 'Diffusion', 'GAN', 'VAE'],
            rows: [
              ['Training stability', 'Very stable', 'Unstable (mode collapse)', 'Stable'],
              ['Sample quality', 'State-of-the-art', 'High but can collapse', 'Blurred, lower quality'],
              ['Sampling speed', 'Slow (many steps)', 'Fast (one pass)', 'Fast (one pass)'],
              ['Likelihood', 'Tractable lower bound', 'Not directly available', 'Tractable lower bound'],
              ['Conditioning', 'Strong (text, class)', 'Possible but harder', 'Possible'],
              ['Coverage', 'Excellent (all modes)', 'Risk of mode collapse', 'Good but blurry']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too few sampling steps for inference (fix: while diffusion requires many steps, use fast samplers like DDIM or DPM-Solver that reduce steps from 1000 to 20–50 without significant quality loss)',
            'Mistake 2: Ignoring the noise schedule during training (fix: choose a cosine or linear schedule carefully; the schedule controls how quickly information is destroyed and must be matched during reverse sampling)',
            'Mistake 3: Training without proper conditioning for controllable generation (fix: use classifier-free guidance by randomly dropping conditions during training; this enables strong text or class conditioning at inference)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Diffusion models power the most impressive generative systems available today.',
          list: [
            'Text-to-image: Stable Diffusion, DALL-E, and Midjourney generate detailed images from natural language descriptions',
            'Image editing: in-painting, out-painting, and style transfer by conditioning the denoising process on partial images',
            'Audio generation: synthesizing music, sound effects, and speech by applying diffusion in the spectrogram or waveform domain',
            'Molecular design: generating 3D molecular structures and protein conformations for scientific discovery'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Diffusion models generate data by learning to reverse a gradual noising process',
            'Forward process adds noise over T steps; reverse process learns to denoise iteratively',
            'Training objective: predict the noise ε that was added at each timestep',
            'They offer the best sample quality and coverage among generative model families',
            'Fast samplers (DDIM, DPM-Solver) mitigate the slow inference speed drawback'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does the diffusion model learn during training?\nAns: It learns to predict the noise ε that was added at each timestep, enabling it to reverse the noising process.',
            'Q2: Why are diffusion models slower at sampling than GANs?\nAns: Diffusion models require many iterative denoising steps (e.g., 50–1000), while GANs generate samples in a single forward pass.',
            'Q3: What is classifier-free guidance and why is it important?\nAns: It is a training technique where conditions are randomly dropped, enabling strong and controllable conditioning at inference by interpolating between conditional and unconditional generation.'
          ]
        }
      ]
    },
    'normalizing-flows': {
      title: 'Normalizing Flows',
      subtitle: 'Invertible transformations for exact likelihood',
      sections: [
        {
          heading: 'What are Normalizing Flows?',
          text: 'Normalizing flows are generative models that use a sequence of <strong>invertible and differentiable transformations</strong> to map a simple base distribution (like Gaussian noise) to a complex data distribution. Because each transformation is invertible, the exact likelihood of data can be computed efficiently using the change of variables formula.',
          list: [
            'Flows transform a simple latent distribution into a complex data distribution through invertible mappings',
            'The exact log-likelihood is tractable using the change of variables and the Jacobian determinant',
            'Sampling is fast: one forward pass through the invertible network',
            'They provide both high-quality generation and principled density estimation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The change of variables formula relates the density of the transformed variable to the base density and the Jacobian.',
          example: {
            title: 'Example: Change of Variables in Flows',
            code: `Base distribution:
  z ~ N(0, I)

Invertible mapping:
  x = f(z),  z = f⁻¹(x)

Log-likelihood (change of variables):
  log p(x) = log p(z) + log |det(Jf⁻¹)|

  where J = ∂z/∂x  (Jacobian of inverse)

Stacked transformations:
  x = f₁ ∘ f₂ ∘ ... ∘ fK(z)

  log p(x) = log p(z) + Σ log |det(Jfₖ⁻¹)|

Coupling layers (efficient Jacobian):
  Split z into [z₁, z₂]
  z₁\` = z₁
  z₂\` = z₂ ⊙ exp(s(z₁)) + t(z₁)
  → Jacobian is triangular → det is product of diagonal`,
            output: 'The exact likelihood makes flows uniquely suited for density estimation and variational inference.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Normalizing flows vs VAEs vs diffusion models.',
          table: {
            headers: ['Aspect', 'Normalizing Flows', 'VAE', 'Diffusion'],
            rows: [
              ['Likelihood', 'Exact and tractable', 'Lower bound (ELBO)', 'Lower bound'],
              ['Sampling speed', 'Fast (one pass)', 'Fast (one pass)', 'Slow (many steps)'],
              ['Invertibility', 'Required by design', 'Encoder-decoder not invertible', 'Approximate (learned)'],
              ['Latent space', 'Same dimension as data', 'Usually lower dimension', 'Same dimension as data'],
              ['Architecture constraint', 'Invertible layers only', 'Flexible', 'Flexible'],
              ['Best for', 'Density estimation, likelihood', 'Representation learning', 'High-quality generation']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Designing non-invertible layers in a flow model (fix: every layer must be bijective; use coupling layers, autoregressive flows, or residual flows that guarantee invertibility and efficient Jacobian computation)',
            'Mistake 2: Ignoring the computational cost of the Jacobian determinant (fix: use coupling or autoregressive architectures where the Jacobian is triangular; the determinant becomes a simple product of diagonal terms)',
            'Mistake 3: Expecting flows to match diffusion quality on high-dimensional images (fix: flows excel at density estimation and lower-dimensional data; for photorealistic images, diffusion or GANs are currently stronger)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Exact likelihoods make flows valuable for principled probabilistic modeling.',
          list: [
            'Density estimation and anomaly detection: computing exact log-likelihoods to identify out-of-distribution samples',
            'Variational inference: using flows as flexible posterior approximations in Bayesian neural networks',
            'Audio generation: WaveGlow and similar models generate high-fidelity speech with fast sampling',
            'Molecular modeling: learning distributions over molecular conformations and continuous variables in chemistry'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Normalizing flows use invertible transformations to map simple noise to complex data',
            'Exact likelihood is tractable via the change of variables formula and Jacobian determinant',
            'Coupling and autoregressive layers ensure efficient computation of the Jacobian',
            'Sampling is fast (one forward pass), but architecture choices are constrained by invertibility',
            'Best suited for density estimation, variational inference, and lower-dimensional generation tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What makes normalizing flows different from VAEs in terms of likelihood?\nAns: Flows provide an exact, tractable likelihood via invertible transformations and the change of variables formula; VAEs only optimize a lower bound (ELBO).',
            'Q2: Why must normalizing flow layers be invertible?\nAns: Invertibility ensures that both forward sampling and inverse density evaluation are possible, which is required for computing exact log-likelihoods.',
            'Q3: What is a coupling layer and why is it efficient?\nAns: A coupling layer splits the input, leaves one part unchanged, and transforms the other conditioned on it; the Jacobian is triangular, so its determinant is simply the product of diagonal terms.'
          ]
        }
      ]
    },
    'graph-neural-networks': {
      title: 'Graph Neural Networks',
      subtitle: 'Deep learning on structured graph data',
      sections: [
        {
          heading: 'What are Graph Neural Networks?',
          text: 'Graph Neural Networks (GNNs) extend deep learning to <strong>graph-structured data</strong> — data where entities (nodes) are connected by relationships (edges). Unlike images or sequences, graphs have irregular structure, variable size, and no canonical ordering, requiring specialized architectures.',
          list: [
            'GNNs operate on graphs with nodes, edges, and optional global attributes',
            'They learn by passing messages between connected nodes and updating representations iteratively',
            'GNNs are permutation invariant — the output does not depend on node ordering',
            'Applications include molecular chemistry, social networks, recommendation systems, and traffic forecasting'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Message passing aggregates information from a node\'s neighbors to update its representation.',
          example: {
            title: 'Example: Message Passing Layer (GCN)',
            code: `Graph Convolutional Network (GCN):

Message aggregation:
  hᵥ^(l+1) = σ( Σ_u (1/√(dᵥdᵤ)) W^(l) hᵤ^(l) )

  where:
    hᵥ = feature vector of node v
    dᵥ = degree of node v
    W^(l) = learnable weight matrix at layer l
    σ = activation function
    N(v) = neighbors of v (including self)

GraphSAGE (sampling):
  hᵥ^(l+1) = σ( W · CONCAT(hᵥ^(l), MEAN({hᵤ^(l) : u ∈ N(v)})) )

  → Samples a fixed number of neighbors
  → Scales to large graphs`,
            output: 'Each layer propagates information one hop further across the graph.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'GNN variants and their aggregation strategies.',
          table: {
            headers: ['Model', 'Aggregation', 'Key Feature', 'Best For'],
            rows: [
              ['GCN', 'Normalized mean of neighbors', 'Spectral convolution', 'Semi-supervised node classification'],
              ['GraphSAGE', 'Sampled neighbor mean/max/LSTM', 'Inductive learning', 'Large, unseen graphs'],
              ['GAT', 'Attention-weighted sum', 'Learnable attention', 'Nodes with varying neighbor importance'],
              ['GIN', 'Sum of neighbor features', 'Theoretically powerful', 'Graph-level classification'],
              ['MPNN', 'General message + update', 'Flexible framework', 'Molecular property prediction']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying standard CNN or RNN directly to graph data (fix: use GNN layers designed for irregular structure; standard convolutions assume grid-like adjacency which does not generalize to arbitrary graphs)',
            'Mistake 2: Using too many message-passing layers (fix: deeper GNNs suffer from over-smoothing — node features become indistinguishable; use 2–4 layers or add residual connections and jumping knowledge)',
            'Mistake 3: Ignoring edge features and directions (fix: use relational GNNs or edge-conditioned convolutions when edge type, weight, or direction carries important information)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Graph structure is everywhere — GNNs unlock learning on relational data.',
          list: [
            'Drug discovery: predicting molecular properties and generating new drug candidates by modeling atoms as nodes and bonds as edges',
            'Recommendation systems: modeling user-item interactions as bipartite graphs to improve collaborative filtering',
            'Traffic prediction: forecasting road congestion by treating road networks as graphs with temporal edge features',
            'Fraud detection: identifying anomalous transaction patterns in financial networks and social graphs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'GNNs extend deep learning to graph-structured data through message passing',
            'Each layer aggregates neighbor information and updates node representations',
            'Variants differ in aggregation: GCN (normalized mean), GraphSAGE (sampling), GAT (attention), GIN (sum)',
            'Over-smoothing limits depth; 2–4 layers are typical without special techniques',
            'GNNs are permutation invariant and naturally handle variable-size, irregular inputs'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is message passing in a GNN?\nAns: Message passing is the process where each node aggregates information from its neighbors to update its own feature representation.',
            'Q2: Why can deep GNNs suffer from over-smoothing?\nAns: With many layers, all node features converge to similar values because each node aggregates from an increasingly overlapping and large neighborhood.',
            'Q3: What makes GAT different from GCN?\nAns: GAT uses learnable attention weights to aggregate neighbor features, allowing the model to focus on more important neighbors, whereas GCN uses a fixed normalized mean.'
          ]
        }
      ]
    },
    'capsule-networks': {
      title: 'Capsule Networks',
      subtitle: 'Encoding spatial relationships with pose-aware neurons',
      sections: [
        {
          heading: 'What are Capsule Networks?',
          text: 'Capsule Networks (CapsNets) replace scalar-output neurons with <strong>capsules</strong> — vectors that encode both the probability of a feature and its spatial pose (position, orientation, scale). This allows the network to understand spatial hierarchies and be robust to viewpoint changes.',
          list: [
            'A capsule outputs a vector where magnitude represents feature presence and orientation represents pose parameters',
            'CapsNets use dynamic routing to send the output of lower-level capsules to appropriate higher-level capsules',
            'They preserve equivariance — changing the input transform changes the capsule pose predictably',
            'Proposed by Geoffrey Hinton as an alternative to CNNs for better part-whole relationship modeling'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Dynamic routing determines how much each lower capsule contributes to each higher capsule.',
          example: {
            title: 'Example: Dynamic Routing by Agreement',
            code: `Capsule j receives prediction vectors from capsules i:
  ûⱼ|ᵢ = Wᵢⱼ · uᵢ   (vote from capsule i to j)

Routing algorithm:
  Initialize: bᵢⱼ = 0 for all i, j

  Repeat r times:
    cᵢⱼ = softmax(bᵢⱼ)   (routing weights)
    sⱼ = Σᵢ cᵢⱼ ûⱼ|ᵢ    (weighted sum of votes)
    vⱼ = squash(sⱼ)    (normalize to unit length)
    bᵢⱼ += ûⱼ|ᵢ · vⱼ   (update by agreement)

Squash function:
  v = (||s||² / (1 + ||s||²)) · (s / ||s||)

  → Ensures output length is between 0 and 1`,
            output: 'Capsules that agree strongly receive higher routing weights.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Capsule networks vs convolutional neural networks.',
          table: {
            headers: ['Aspect', 'Capsule Networks', 'CNNs'],
            rows: [
              ['Output per unit', 'Vector (pose + activation)', 'Scalar (activation only)'],
              ['Spatial understanding', 'Explicit via pose vectors', 'Implicit via pooling'],
              ['Routing', 'Dynamic routing by agreement', 'Fixed filter positions'],
              ['Equivariance', 'Equivariant to transformations', 'Translation equivariant only'],
              ['Pooling', 'Not used (information loss)', 'Max/average pooling (reduces spatial)'],
              ['Training efficiency', 'Slower (iterative routing)', 'Fast (convolution is efficient)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting CapsNets to outperform CNNs on all benchmarks (fix: CapsNets are conceptually elegant but remain harder to scale; CNNs with data augmentation are still dominant for most large-scale vision tasks)',
            'Mistake 2: Using too few routing iterations (fix: dynamic routing requires multiple iterations (3–5) to converge; too few iterations lead to poor agreement and unstable capsule assignments)',
            'Mistake 3: Applying capsules directly to high-resolution images without convolutional preprocessing (fix: use convolutional layers to extract low-level features first, then feed feature maps into a capsule layer for higher-level reasoning)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Capsule networks excel where spatial relationships and viewpoint robustness matter.',
          list: [
            'Small object recognition: classifying objects from novel viewpoints with limited training data',
            'Medical imaging: detecting anatomical structures where relative positioning between parts is clinically significant',
            'Scene understanding: parsing images into part-whole hierarchies for robotics and augmented reality',
            'Adversarial robustness: capsules\' structured representations show some resilience to perturbations that fool CNNs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Capsules output vectors encoding both feature presence (magnitude) and pose (orientation)',
            'Dynamic routing sends lower-level capsule outputs to higher-level capsules based on agreement',
            'CapsNets preserve equivariance and avoid the information loss of pooling',
            'They are theoretically promising but harder to scale than modern CNNs or transformers',
            'Best used for problems where spatial hierarchy and viewpoint invariance are critical'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What information does a capsule vector encode?\nAns: The magnitude represents the probability that the feature exists; the direction represents the pose (position, orientation, scale) of the feature.',
            'Q2: How does dynamic routing work?\nAns: Lower-level capsules send prediction vectors to higher-level capsules; routing weights are updated based on how much the predictions agree with the higher capsule output.',
            'Q3: Why are capsule networks considered equivariant rather than invariant?\nAns: Because a transformation of the input produces a corresponding transformation in the capsule pose vectors, rather than discarding the transformation information as invariance would.'
          ]
        }
      ]
    },
    'self-supervised-learning': {
      title: 'Self-Supervised Learning',
      subtitle: 'Learning representations without manual labels',
      sections: [
        {
          heading: 'What is Self-Supervised Learning?',
          text: 'Self-supervised learning (SSL) creates <strong>supervisory signals from the data itself</strong>, eliminating the need for human-annotated labels. The model is trained on a pretext task designed from the data structure — such as predicting masked words, rotated images, or missing patches — and the learned representations are then transferred to downstream tasks.',
          list: [
            'SSL constructs labels automatically from the inherent structure of unlabeled data',
            'It bridges the gap between unsupervised and supervised learning',
            'The pretext task forces the model to learn meaningful, generalizable representations',
            'Modern SSL rivals or exceeds supervised pre-training on ImageNet and in NLP'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A contrastive or predictive pretext task defines the learning objective.',
          example: {
            title: 'Example: Masked Language Modeling (BERT-style)',
            code: `Input sentence:
  "The cat sat on the [MASK] and looked outside"

Pretext task:
  Predict the masked token from context

Objective:
  L = -log P("mat" | context)

  Model: Transformer encoder
  Output: softmax over vocabulary

In vision (MAE):
  Mask random patches (e.g., 75%)
  Encoder processes visible patches only
  Decoder reconstructs full image

  L = MSE(original, reconstruction)`,
            output: 'The model must understand context deeply to solve the pretext task.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Supervised vs self-supervised vs unsupervised learning.',
          table: {
            headers: ['Aspect', 'Supervised', 'Self-Supervised', 'Unsupervised'],
            rows: [
              ['Labels', 'Human-annotated', 'Automatically derived from data', 'None'],
              ['Objective', 'Task-specific (e.g., classify)', 'Pretext task (e.g., predict mask)', 'Structure discovery (e.g., cluster)'],
              ['Data needs', 'Labeled datasets (expensive)', 'Large unlabeled datasets (cheap)', 'Any data'],
              ['Transferability', 'To similar tasks', 'Strong across diverse tasks', 'Task-dependent'],
              ['Examples', 'ImageNet classification', 'BERT, MAE, SimCLR', 'K-means, PCA, t-SNE'],
              ['Scalability', 'Limited by annotation cost', 'Scales with unlabeled data', 'Scales easily']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Choosing a pretext task that is too easy (fix: the pretext task must be challenging enough to require semantic understanding; trivial tasks like colorization from grayscale may not force deep feature learning)',
            'Mistake 2: Evaluating SSL only on the pretext task accuracy (fix: the true measure of SSL is downstream task performance after fine-tuning; pretext accuracy is not the goal — representation quality is)',
            'Mistake 3: Assuming SSL removes the need for any labeled data (fix: SSL learns representations from unlabeled data, but downstream tasks usually still require some fine-tuning on labeled examples; it reduces label needs, rarely eliminates them)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SSL unlocks learning from the vast amounts of unlabeled data available in the world.',
          list: [
            'Natural language processing: BERT, GPT, and T5 are pre-trained on billions of unlabeled tokens, then fine-tuned for specific tasks',
            'Computer vision: MAE and DINO learn visual representations from millions of unlabeled images, rivaling supervised pre-training',
            'Speech and audio: wav2vec learns speech representations from raw audio, enabling low-resource language recognition',
            'Scientific domains: training on unlabeled protein sequences, molecular structures, and astronomical images where labels are scarce'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Self-supervised learning creates supervisory signals from the data structure itself',
            'Pretext tasks (mask prediction, rotation, contrast) force the model to learn useful representations',
            'The learned representations are transferred and fine-tuned on downstream tasks',
            'SSL scales with unlabeled data and often matches or surpasses supervised pre-training',
            'Evaluation should focus on downstream performance, not pretext task accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main advantage of self-supervised learning over supervised learning?\nAns: SSL can leverage vast amounts of unlabeled data without requiring expensive human annotations, while still learning representations that transfer well to downstream tasks.',
            'Q2: What is a pretext task?\nAns: A pretext task is an artificially designed supervised task constructed from unlabeled data (e.g., predicting masked tokens or reconstructing masked image patches) that forces the model to learn meaningful features.',
            'Q3: Why should SSL not be evaluated on pretext task accuracy?\nAns: Because the goal of SSL is to learn generalizable representations; good pretext accuracy does not guarantee useful features for downstream tasks.'
          ]
        }
      ]
    },
    'contrastive-learning': {
      title: 'Contrastive Learning',
      subtitle: 'Learning by comparing similar and dissimilar samples',
      sections: [
        {
          heading: 'What is Contrastive Learning?',
          text: 'Contrastive learning is a self-supervised technique that learns representations by <strong>pulling similar samples together</strong> and <strong>pushing dissimilar samples apart</strong> in the embedding space. It trains the model to recognize that two augmented views of the same image (positive pair) should be closer than views of different images (negative pairs).',
          list: [
            'Positive pairs: two augmented views of the same data point',
            'Negative pairs: views from different data points',
            'The model learns an embedding space where semantic similarity corresponds to geometric proximity',
            'It is one of the most effective SSL approaches for vision and has been extended to text, audio, and multimodal data'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The InfoNCE loss maximizes the similarity of positive pairs relative to negative pairs.',
          example: {
            title: 'Example: SimCLR InfoNCE Loss',
            code: `Given batch of N samples:
  Create 2 augmented views per sample
  → 2N views total

For positive pair (i, j):
  zᵢ = f(xᵢ)   (projection head output)
  zⱼ = f(xⱼ)

Similarity: sim(zᵢ, zⱼ) = zᵢᵀzⱼ / (||zᵢ|| ||zⱼ||)

InfoNCE loss:
  Lᵢ,ⱼ = -log( exp(sim(zᵢ,zⱼ)/τ) / Σₖ exp(sim(zᵢ,zₖ)/τ) )

  where:
    τ = temperature parameter (e.g., 0.5)
    k runs over all 2N-1 negative samples

→ Maximizes agreement between positive pairs`,
            output: 'The model learns to distinguish its own augmented views from all others in the batch.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'SimCLR vs MoCo vs BYOL — key contrastive learning frameworks.',
          table: {
            headers: ['Method', 'Negatives', 'Memory', 'Key Innovation', 'Best For'],
            rows: [
              ['SimCLR', 'In-batch', 'None (end-to-end)', 'Strong augmentations + projection head', 'Medium batch sizes'],
              ['MoCo', 'Queue-based', 'Momentum encoder + queue', 'Large dictionary of negatives', 'Small batches'],
              ['BYOL', 'None (no negatives)', 'Momentum encoder', 'Online + target networks', 'Avoids negative sampling'],
              ['SwAV', 'Cluster assignments', 'None', 'Online clustering + multi-crop', 'Scalable training'],
              ['DINO', 'None (self-distillation)', 'Momentum teacher', 'Self-distillation + multi-crop', 'Vision transformers']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using weak data augmentations (fix: strong augmentations (color jitter, random crop, blur) are critical; they force the model to learn invariant features rather than memorizing superficial patterns)',
            'Mistake 2: Setting the temperature τ too high or too low (fix: τ controls the sharpness of the softmax; typical values are 0.1–0.5; too high makes all negatives equally important, too low collapses to hard negatives only)',
            'Mistake 3: Training without a projection head and evaluating on projection outputs (fix: use a non-linear projection head during training but evaluate representations from the layer before the head; the projection head is for training only)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Contrastive learning powers representation learning across domains without labels.',
          list: [
            'Computer vision: CLIP aligns image and text embeddings for zero-shot classification and retrieval from natural language',
            'Recommendation systems: learning user and item embeddings by contrasting interacted vs non-interacted items',
            'Medical imaging: pre-training on unlabeled scans to learn anatomical representations that transfer to diagnosis tasks',
            'Multimodal AI: aligning video, audio, and text embeddings for cross-modal search and generation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Contrastive learning learns by pulling positive pairs together and pushing negatives apart',
            'InfoNCE loss maximizes the relative similarity of positive pairs against a set of negatives',
            'Data augmentation and temperature scaling are critical hyperparameters',
            'Variants differ in how they obtain negatives: in-batch (SimCLR), queue (MoCo), or no negatives (BYOL)',
            'It is one of the most effective self-supervised methods for learning transferable visual representations'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is a positive pair in contrastive learning?\nAns: A positive pair consists of two augmented views derived from the same original data sample.',
            'Q2: What does the temperature parameter τ control in InfoNCE loss?\nAns: τ controls the concentration of the distribution; lower values make the model focus more on hard negatives, while higher values treat all negatives more uniformly.',
            'Q3: Why should the projection head not be used for downstream evaluation?\nAns: The projection head is trained specifically to make contrastive optimization easier; the representations from the backbone layer before the head are more general and transfer better to downstream tasks.'
          ]
        }
      ]
    }
  }
}
