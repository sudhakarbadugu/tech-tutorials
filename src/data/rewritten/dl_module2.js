export const dlModule2Content = {
  module2: {
    cnn: {
      title: 'Convolutional Neural Networks',
      subtitle: 'Deep learning architectures for grid-like data such as images',
      sections: [
        {
          heading: 'What is a Convolutional Neural Network?',
          text: 'A <strong>Convolutional Neural Network (CNN)</strong> is a deep learning architecture specifically designed for processing grid-structured data like images. It uses convolutional layers with learnable filters to automatically detect local features such as edges, textures, and shapes, building up to complex object representations through hierarchical feature learning.',
          list: [
            'CNNs use sliding filters (kernels) to detect local patterns, reducing the need for manual feature engineering',
            'They leverage parameter sharing: the same filter is applied across the entire input, dramatically reducing parameters',
            'Pooling layers provide translation invariance and reduce spatial dimensions, making the network more efficient',
            'They are the dominant architecture for computer vision tasks including classification, detection, and segmentation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The convolution operation computes the dot product between a filter and local patches of the input.',
          example: {
            title: 'Example: Convolution Operation',
            code: `Input patch (3×3):      Filter (3×3):
[1  2  1]              [1  0 -1]
[0  0  0]       *      [1  0 -1]
[-1 -2 -1]             [1  0 -1]

Result = (1×1)+(2×0)+(1×-1)+
         (0×1)+(0×0)+(0×-1)+
         (-1×1)+(-2×0)+(-1×-1)
       = 0

Output feature map size:
  O = (I - K + 2P) / S + 1
  I = input size, K = kernel size
  P = padding, S = stride`,
            output: 'Vertical edge detection filter highlights vertical boundaries in the image.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CNN vs Fully Connected Network.',
          table: {
            headers: ['Aspect', 'Fully Connected Network', 'CNN'],
            rows: [
              ['Connectivity', 'Every neuron connects to all inputs', 'Each neuron connects to a local region only'],
              ['Parameters', 'Grows exponentially with input size', 'Shared filters drastically reduce parameters'],
              ['Translation', 'No built-in translation invariance', 'Pooling provides translation invariance'],
              ['Feature learning', 'Learns global patterns only', 'Hierarchical: edges → textures → objects'],
              ['Input structure', 'Treats input as flat vector', 'Preserves spatial structure (2D/3D)'],
              ['Best for', 'Tabular data, simple features', 'Images, video, spatial grid data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too large kernel sizes like 7×7 in early layers (fix: use 3×3 filters stacked together; two 3×3 layers have the same receptive field as one 5×5 with fewer parameters)',
            'Mistake 2: Ignoring the effect of stride and padding on output dimensions (fix: always compute output size with O = (I - K + 2P)/S + 1 to avoid dimension mismatches in layer stacking)',
            'Mistake 3: Using CNNs on non-spatial data without considering structure (fix: CNNs excel on grid data; for sequential or tabular data, use RNNs or fully connected networks instead)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'CNNs are the backbone of modern computer vision systems.',
          list: [
            'Medical imaging: CNNs detect tumors in X-rays, CT scans, and MRI by learning subtle visual patterns invisible to the human eye',
            'Autonomous driving: perception systems use CNNs to detect lanes, vehicles, pedestrians, and traffic signs from camera feeds in real time',
            'Facial recognition: deep CNNs map faces to compact embeddings for authentication, used in smartphones and security systems worldwide',
            'Retail and manufacturing: visual inspection systems use CNNs to detect product defects on assembly lines with superhuman accuracy'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CNNs are specialized for grid-structured data like images, using sliding filters to detect local features',
            'Parameter sharing and sparse connectivity make CNNs far more efficient than fully connected networks for vision',
            'Convolution extracts features; pooling reduces dimensions and provides translation invariance',
            'Hierarchical feature learning: early layers detect edges, middle layers detect textures, deep layers detect objects',
            'Always track output dimensions when stacking convolutions to avoid shape mismatches'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does a CNN need fewer parameters than a fully connected network for the same input image?\nAns: CNNs use shared filters that slide across the entire image, so the same weights are reused everywhere, unlike fully connected layers which have unique weights per connection.',
            'Q2: What is the purpose of a pooling layer in a CNN?\nAns: Pooling reduces spatial dimensions, lowers computation, and introduces translation invariance by summarizing local regions.',
            'Q3: Why are 3×3 filters preferred over larger filters like 5×5 or 7×7?\nAns: Two stacked 3×3 layers achieve the same receptive field as one 5×5 layer with fewer parameters and more non-linearity, making the network deeper and more expressive.'
          ]
        }
      ]
    },
    'cnn-architectures': {
      title: 'CNN Architectures',
      subtitle: 'Landmark designs that shaped modern computer vision',
      sections: [
        {
          heading: 'What are CNN Architectures?',
          text: '<strong>CNN architectures</strong> refer to the specific arrangements of layers, connections, and design choices that define how a convolutional neural network is structured. Landmark architectures like LeNet, AlexNet, VGG, ResNet, and EfficientNet introduced innovations that solved key training and scaling challenges, setting the standard for how deep networks are built today.',
          list: [
            'LeNet-5 (1998) proved CNNs could work for handwritten digit recognition with just 60K parameters',
            'AlexNet (2012) reignited deep learning by using ReLU, dropout, and GPUs to win ImageNet by a massive margin',
            'ResNet (2015) introduced skip connections that enabled training networks with 100+ layers without degradation',
            'Modern architectures like EfficientNet balance depth, width, and resolution using compound scaling for maximum accuracy per FLOP'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Receptive field grows with depth; skip connections preserve gradients.',
          example: {
            title: 'Example: Receptive Field & Skip Connection',
            code: `Receptive field after n conv layers:
  RF = 1 + Σᵢ (Kᵢ - 1) × Πⱼ₌₁ⁱ⁻¹ Sⱼ

Example: three 3×3 conv layers, stride 1:
  RF = 1 + (3-1) + (3-1) + (3-1) = 7
  → A neuron sees 7×7 region

ResNet Skip Connection:
  y = F(x) + x

If F(x) is a residual mapping:
  Backprop gradient flows through
  both F(x) and the identity path x,
  preventing vanishing gradients.`,
            output: 'Skip connections create an identity path that preserves gradient flow in very deep networks.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Landmark CNN architectures compared.',
          table: {
            headers: ['Architecture', 'Year', 'Key Innovation', 'Parameters', 'Depth'],
            rows: [
              ['LeNet-5', '1998', 'First practical CNN', '~60K', '5 layers'],
              ['AlexNet', '2012', 'ReLU + Dropout + GPU training', '~60M', '8 layers'],
              ['VGG-16', '2014', 'Uniform 3×3 conv blocks', '~138M', '16 layers'],
              ['ResNet-50', '2015', 'Skip (residual) connections', '~25.6M', '50 layers'],
              ['Inception-v3', '2015', 'Multi-scale parallel filters', '~23.8M', '48 layers'],
              ['EfficientNet-B0', '2019', 'Compound scaling (d,w,r)', '~5.3M', '82 layers']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Stacking too many convolutional layers without skip connections (fix: beyond ~20 layers, always use residual connections or dense connections to prevent degradation and vanishing gradients)',
            'Mistake 2: Blindly copying an architecture without considering dataset size (fix: use smaller EfficientNet variants or MobileNet for small datasets; ResNet-50 is overkill for <10K images without transfer learning)',
            'Mistake 3: Ignoring input resolution when choosing architecture depth (fix: match network depth to image resolution; small images do not need 152-layer networks; EfficientNet scales all three dimensions together)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Architecture choice directly impacts deployment feasibility and accuracy.',
          list: [
            'Mobile apps: MobileNet and EfficientNet-Lite are optimized for mobile CPUs, enabling real-time object detection on smartphones with minimal battery drain',
            'Cloud vision APIs: ResNet-50 and Inception-v3 power Google Cloud Vision and AWS Rekognition for high-accuracy image classification at scale',
            'Medical diagnostics: U-Net, a CNN encoder-decoder architecture, is the standard for medical image segmentation in radiology and pathology workflows',
            'Self-driving cars: custom multi-scale CNN architectures process multiple camera feeds simultaneously for 360-degree perception in autonomous vehicles'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LeNet proved CNNs work; AlexNet proved they scale; ResNet proved they can go arbitrarily deep',
            'Receptive field grows with depth: understand how much context each layer sees',
            'Skip connections are essential for training networks deeper than ~20 layers',
            'Match architecture complexity to dataset size and target hardware',
            'Compound scaling (EfficientNet) balances depth, width, and resolution jointly'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What problem do ResNet skip connections solve?\nAns: Skip connections solve the degradation problem in very deep networks by providing an identity path that preserves gradient flow during backpropagation.',
            'Q2: Why are 3×3 convolutions preferred in VGG-style architectures?\nAns: Stacked 3×3 layers achieve the same receptive field as larger filters with fewer parameters and more non-linear activations between them.',
            'Q3: What is compound scaling in EfficientNet?\nAns: EfficientNet scales depth, width, and input resolution together using a single compound coefficient, rather than tuning each dimension independently.'
          ]
        }
      ]
    },
    'transfer-learning': {
      title: 'Transfer Learning',
      subtitle: 'Leveraging pre-trained models for new tasks',
      sections: [
        {
          heading: 'What is Transfer Learning?',
          text: '<strong>Transfer Learning</strong> is the practice of taking a neural network trained on a large, general dataset and adapting it to a new, often smaller, specific task. Instead of training from scratch, you reuse learned features from a source domain, dramatically reducing training time and data requirements while often achieving better accuracy.',
          list: [
            'Transfer learning reuses features learned from large datasets like ImageNet, saving weeks of training time',
            'The early layers of a pre-trained CNN learn generic features (edges, textures) that transfer well to almost any vision task',
            'Only the final classification layers are retrained on the new task, keeping most of the network frozen',
            'Fine-tuning unfreezes deeper layers and trains with a very small learning rate to adapt features subtly'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Transfer learning workflow: freeze base, replace head, retrain.',
          example: {
            title: 'Example: Transfer Learning in PyTorch',
            code: `Load pre-trained ResNet-50:
  model = torchvision.models.resnet50(pretrained=True)

Freeze all base layers:
  for param in model.parameters():
    param.requires_grad = False

Replace classifier head:
  model.fc = nn.Linear(2048, num_new_classes)

Train only the new head:
  optimizer = optim.Adam(model.fc.parameters(), lr=1e-3)

Fine-tune (optional):
  unfreeze deeper layers
  optimizer = optim.Adam(model.parameters(), lr=1e-5)`,
            output: 'Freezing preserves generic features; fine-tuning adapts them to the target domain.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Feature extraction vs fine-tuning.',
          table: {
            headers: ['Aspect', 'Feature Extraction', 'Fine-Tuning'],
            rows: [
              ['Layers trained', 'Only new classifier head', 'All or some pre-trained layers'],
              ['Data needed', 'Very small (hundreds of images)', 'Moderate (thousands of images)'],
              ['Training time', 'Minutes to hours', 'Hours to days'],
              ['Risk of overfitting', 'Very low', 'Moderate (use small LR)'],
              ['Accuracy potential', 'Good baseline', 'Higher ceiling'],
              ['When to use', 'Small dataset, similar domain', 'Larger dataset, different domain']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fine-tuning all layers immediately with a large learning rate (fix: start by training only the classifier head; only fine-tune deeper layers later with a very small LR like 1e-5 to avoid destroying pre-trained features)',
            'Mistake 2: Using a pre-trained model from an unrelated domain without adaptation (fix: if your task is medical imaging, use a model pre-trained on medical data or at least fine-tune extensively; ImageNet features do not transfer perfectly to X-rays)',
            'Mistake 3: Forgetting to normalize input using the pre-trained model\'s mean and std (fix: always use the same preprocessing the pre-trained model was trained with, e.g., ImageNet normalization: mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Transfer learning makes state-of-the-art vision accessible to small teams.',
          list: [
            'Startup product classification: a company with only 500 product images can build a classifier by fine-tuning ResNet-50, achieving 95% accuracy without weeks of GPU training',
            'Medical imaging: radiology departments fine-tune ImageNet-pre-trained models on chest X-rays to detect pneumonia, tuberculosis, and COVID-19 with expert-level accuracy',
            'Agriculture: farmers use transfer learning on drone imagery to detect crop diseases, using just a few hundred labeled photos per disease class',
            'Content moderation: social platforms fine-tune vision transformers to detect harmful imagery across cultures and languages with limited labeled data per region'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transfer learning reuses pre-trained features to save time, data, and compute on new tasks',
            'Feature extraction: freeze base, train only the new head; best for small datasets',
            'Fine-tuning: unfreeze and train deeper layers with small LR; best for larger datasets',
            'Early CNN layers learn generic features that transfer across almost all vision tasks',
            'Always match the pre-processing (normalization, image size) to the pre-trained model\'s training setup'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is transfer learning especially effective for small datasets?\nAns: Pre-trained models already learned generic features from millions of images; the new task only needs to adapt the final classifier, which requires far less data than training from scratch.',
            'Q2: What is the difference between feature extraction and fine-tuning?\nAns: Feature extraction freezes the pre-trained base and trains only a new classifier head; fine-tuning also updates some or all pre-trained layers with a small learning rate.',
            'Q3: Why must input normalization match the pre-trained model?\nAns: The pre-trained features were learned on data with specific mean and standard deviation; feeding differently scaled inputs shifts the feature distribution and degrades performance.'
          ]
        }
      ]
    },
    'object-detection': {
      title: 'Object Detection',
      subtitle: 'Locating and classifying multiple objects in images',
      sections: [
        {
          heading: 'What is Object Detection?',
          text: '<strong>Object Detection</strong> is the computer vision task of identifying all instances of target objects in an image and localizing each with a bounding box and class label. Unlike image classification, which assigns a single label to the entire image, detection must handle multiple objects of varying sizes, positions, and classes simultaneously.',
          list: [
            'Object detection outputs bounding boxes (x, y, width, height) plus class labels for every detected object',
            'It is harder than classification because it must handle variable numbers of objects and localize them precisely',
            'Modern detectors use anchor boxes, region proposals, or direct regression to predict object locations',
            'It powers applications from autonomous driving to retail analytics and medical lesion detection'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Intersection over Union (IoU) measures how well a predicted box overlaps with the ground truth.',
          example: {
            title: 'Example: IoU and Bounding Box Regression',
            code: `Intersection over Union:
  IoU = Area(Intersection) / Area(Union)

Bounding box regression (smooth L1):
  L_loc = Σ smooth_L1(pᵢ - tᵢ)

  smooth_L1(x) = 0.5x²   if |x| < 1
               = |x| - 0.5  otherwise

Typical IoU thresholds:
  IoU ≥ 0.5  → Positive match
  IoU < 0.3  → Negative (background)
  0.3 ≤ IoU < 0.5  → Ignored`,
            output: 'IoU quantifies localization accuracy; smooth L1 loss is robust to outlier box coordinates.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Two-stage vs one-stage detectors.',
          table: {
            headers: ['Aspect', 'Two-Stage (R-CNN family)', 'One-Stage (YOLO, SSD)'],
            rows: [
              ['Pipeline', 'Propose regions, then classify', 'Single forward pass predicts all boxes'],
              ['Speed', 'Slower (~5-15 FPS)', 'Fast (~30-140 FPS)'],
              ['Accuracy', 'Higher accuracy, especially on small objects', 'Good accuracy, faster inference'],
              ['Architecture', 'Region proposal network + classifier', 'Single CNN backbone + detection head'],
              ['Best for', 'High-accuracy offline analysis', 'Real-time applications'],
              ['Examples', 'Faster R-CNN, Mask R-CNN', 'YOLOv8, SSD, RetinaNet']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using classification accuracy instead of mAP to evaluate detectors (fix: use mean Average Precision (mAP) at IoU=0.50:0.95; it rewards both correct classification and precise localization)',
            'Mistake 2: Ignoring class imbalance between background and object boxes (fix: use focal loss or hard negative mining to prevent the model from being overwhelmed by the vast number of background regions)',
            'Mistake 3: Using the same anchor box sizes for all datasets (fix: run k-means clustering on your dataset bounding boxes to find optimal anchor aspect ratios and scales; default COCO anchors may not fit your objects)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Object detection is one of the most deployed vision technologies.',
          list: [
            'Autonomous vehicles: real-time detection of cars, pedestrians, cyclists, and traffic signs at 30+ FPS using YOLO-family detectors on embedded GPUs',
            'Retail analytics: stores detect which products shoppers pick up, track queue lengths, and monitor shelf stock levels using overhead camera detectors',
            'Medical imaging: detectors locate tumors, lesions, and anomalies in radiology scans, drawing radiologist attention to suspicious regions automatically',
            'Drones and robotics: agricultural drones detect weeds and crop health; warehouse robots detect and localize packages for robotic grasping'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Object detection localizes and classifies multiple objects simultaneously in a single image',
            'IoU measures how well predicted and ground-truth boxes overlap; it is the core localization metric',
            'Two-stage detectors (R-CNN) are more accurate; one-stage detectors (YOLO, SSD) are faster',
            'Anchor boxes, focal loss, and non-maximum suppression (NMS) are key techniques in modern detectors',
            'Always evaluate with mAP, not classification accuracy, because detection requires both correct class and correct location'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does IoU measure in object detection?\nAns: IoU measures the overlap between a predicted bounding box and the ground-truth box, calculated as the ratio of intersection area to union area.',
            'Q2: Why is object detection harder than image classification?\nAns: Detection must handle variable numbers of objects, localize each with a bounding box, and distinguish overlapping instances, while classification only assigns a single label to the entire image.',
            'Q3: When should you choose a one-stage detector over a two-stage detector?\nAns: Choose one-stage detectors when real-time inference speed is critical, such as in autonomous driving, live video analytics, or embedded devices.'
          ]
        }
      ]
    },
    segmentation: {
      title: 'Image Segmentation',
      subtitle: 'Pixel-level classification for precise object boundaries',
      sections: [
        {
          heading: 'What is Image Segmentation?',
          text: '<strong>Image Segmentation</strong> is the computer vision task of partitioning an image into meaningful regions at the pixel level. Unlike object detection, which outputs bounding boxes, segmentation predicts a class label for every single pixel, producing precise object boundaries. It comes in two forms: semantic segmentation (class per pixel, no instance distinction) and instance segmentation (separate mask per object instance).',
          list: [
            'Semantic segmentation assigns a class label to every pixel without distinguishing individual object instances',
            'Instance segmentation separates individual objects of the same class, providing a mask for each car, person, or animal',
            'Panoptic segmentation combines both: semantic labels for background stuff and instance masks for foreground things',
            'Segmentation requires encoder-decoder architectures that preserve spatial resolution through skip connections and upsampling'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Segmentation loss is typically pixel-wise cross-entropy, optionally weighted by class frequency.',
          example: {
            title: 'Example: Segmentation Loss & Dice Score',
            code: `Pixel-wise Cross-Entropy:
  L = -(1/N) Σᵢ Σ_c yᵢ,c log(ŷᵢ,c)

Dice Score (F1 for segmentation):
  Dice = 2 × |X ∩ Y| / (|X| + |Y|)

For soft predictions:
  Dice = 2 × Σᵢ pᵢgᵢ / (Σᵢ pᵢ² + Σᵢ gᵢ²)

Where:
  pᵢ = predicted probability for pixel i
  gᵢ = ground truth (0 or 1) for pixel i`,
            output: 'Dice loss directly optimizes overlap, making it robust to class imbalance in medical images.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Semantic vs instance vs panoptic segmentation.',
          table: {
            headers: ['Type', 'Output', 'Distinguishes Instances', 'Use Case'],
            rows: [
              ['Classification', '1 label per image', 'No', 'What is in the image?'],
              ['Object Detection', 'Boxes + labels', 'Yes', 'Where are the objects?'],
              ['Semantic Segmentation', 'Class per pixel', 'No', 'Which pixels belong to road, sky, car?'],
              ['Instance Segmentation', 'Mask per instance', 'Yes', 'Which pixels belong to car #1 vs car #2?'],
              ['Panoptic Segmentation', 'Both semantic + instance', 'Yes', 'Complete scene understanding']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using standard cross-entropy on highly imbalanced segmentation datasets (fix: use weighted cross-entropy, focal loss, or Dice loss to prevent the model from predicting only the dominant background class)',
            'Mistake 2: Downsampling too aggressively in the encoder without skip connections (fix: use U-Net style skip connections that copy high-resolution features from the encoder to the decoder, preserving fine boundary details)',
            'Mistake 3: Evaluating segmentation with pixel accuracy instead of IoU or Dice (fix: pixel accuracy is misleading when backgrounds dominate; always use mean IoU or Dice score to properly measure segmentation quality)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Segmentation provides pixel-precise understanding for demanding applications.',
          list: [
            'Autonomous driving: semantic segmentation labels every pixel as road, pedestrian, vehicle, or sidewalk, enabling precise path planning beyond bounding box detection',
            'Medical imaging: U-Net and its variants segment organs, tumors, and lesions in MRI and CT scans, guiding surgeons and automating radiology measurements',
            'Fashion and e-commerce: segmentation separates clothing items from backgrounds for virtual try-on and automatic product cropping',
            'Satellite imagery: land cover segmentation maps forests, water bodies, urban areas, and agricultural fields from aerial and satellite photos for environmental monitoring'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Segmentation classifies every pixel, producing precise object boundaries unlike bounding box detection',
            'Semantic segmentation: one label map; instance segmentation: separate mask per object; panoptic: both',
            'Encoder-decoder architectures with skip connections (U-Net) preserve spatial detail during upsampling',
            'Dice loss and IoU metrics are preferred over pixel accuracy because they handle class imbalance',
            'Medical and autonomous driving are the two most impactful domains for segmentation technology'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key difference between semantic and instance segmentation?\nAns: Semantic segmentation assigns a class label to every pixel but does not distinguish individual objects; instance segmentation provides a separate mask for each object instance.',
            'Q2: Why are skip connections important in segmentation networks like U-Net?\nAns: Skip connections copy high-resolution encoder features to the decoder, preserving fine spatial details and sharp object boundaries that would otherwise be lost during downsampling.',
            'Q3: Why is pixel accuracy a poor metric for segmentation evaluation?\nAns: Pixel accuracy is dominated by large background regions and ignores how well the model segments minority classes; mIoU and Dice score measure per-class overlap fairly.'
          ]
        }
      ]
    }
  }
};