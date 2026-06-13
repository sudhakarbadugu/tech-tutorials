export const cvModule5Content = {
  module5: {
    '3d-reconstruction': {
      title: '3D Reconstruction',
      subtitle: 'Recovering three-dimensional structure from images and video',
      sections: [
        {
          heading: 'What is 3D Reconstruction?',
          text: '<strong>3D Reconstruction</strong> is the process of capturing the shape and appearance of real-world objects or scenes to create digital three-dimensional models. It bridges computer vision and computer graphics, enabling machines to perceive depth and structure from visual inputs.',
          list: [
            'Converts 2D image data into 3D geometry using triangulation and depth estimation',
            'Uses multiple viewpoints (stereo) or motion over time (SfM) to infer depth',
            'Output formats include point clouds, meshes, volumetric grids, and implicit surfaces',
            'Applications span robotics, AR/VR, cultural heritage preservation, and autonomous navigation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Depth from stereo disparity uses the principle of triangulation.',
          example: {
            title: 'Example: Stereo Depth Estimation',
            code: `Stereo Camera Setup:
  Baseline (B) = 10 cm
  Focal length (f) = 500 pixels
  Disparity (d) = x_left - x_right

Depth Formula:
  Z = (f × B) / d

Example Calculation:
  Point P projected at:
    x_left = 320 px, x_right = 290 px
    d = 320 - 290 = 30 px

  Z = (500 × 10) / 30
    = 5000 / 30
    ≈ 166.7 cm

Key insight:
  Larger disparity → closer object
  Smaller disparity → farther object`,
            output: 'Stereo triangulation computes depth from the disparity between two camera views.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing major 3D reconstruction approaches.',
          table: {
            headers: ['Method', 'Input', 'Output', 'Strengths', 'Limitations'],
            rows: [
              ['Stereo Vision', 'Two calibrated images', 'Dense depth map', 'Real-time capable, well understood', 'Requires texture, limited baseline flexibility'],
              ['Structure from Motion', 'Unordered image collection', 'Sparse point cloud + camera poses', 'Works with casual photos, scalable', 'Sparse output, computationally expensive'],
              ['Multi-View Stereo', 'Multiple calibrated views', 'Dense mesh / point cloud', 'High accuracy, dense reconstruction', 'Requires many views, sensitive to calibration'],
              ['NeRF / Gaussian Splatting', 'Images with known poses', 'Radiance field / 3D Gaussians', 'Photorealistic novel views', 'Slow training, view-dependent artifacts'],
              ['Depth Sensors (LiDAR/ToF)', 'Active light emission', 'Accurate point cloud', 'Precise metric depth, works in darkness', 'Hardware cost, limited resolution, range limits']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming perfect camera calibration without lens distortion correction (fix: calibrate intrinsics and extrinsics using checkerboard patterns; apply distortion coefficients before triangulation)',
            'Mistake 2: Using too small a baseline for stereo depth, causing poor depth resolution for far objects (fix: scale baseline proportionally to expected depth range; use wider baseline for outdoor scenes)',
            'Mistake 3: Treating NeRF outputs as metrically accurate 3D models (fix: NeRF captures appearance fields, not precise geometry; use it for rendering, not measurement unless combined with depth priors)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: '3D reconstruction powers systems that need spatial understanding.',
          list: [
            'Autonomous vehicles: fusing stereo cameras and LiDAR to build real-time occupancy grids for path planning and collision avoidance',
            'Medical imaging: reconstructing 3D organ models from CT/MRI slices for surgical planning and tumor volume measurement',
            'Cultural heritage: photogrammetry-based digitization of ancient sculptures and archaeological sites for preservation and virtual museum tours',
            'AR furniture placement: smartphone depth sensors reconstruct room geometry so virtual objects can be placed with correct occlusion and lighting'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            '3D reconstruction recovers geometry and depth from 2D visual inputs',
            'Stereo vision computes depth from disparity using triangulation: Z = (f × B) / d',
            'Structure from Motion reconstructs sparse scenes from unordered photo collections',
            'NeRF and Gaussian splatting enable photorealistic novel-view synthesis from posed images',
            'Accurate calibration and appropriate baselines are critical for metrically correct reconstructions'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does larger disparity indicate a closer object in stereo vision?\nAns: A nearby object projects to very different positions on the two image planes; a distant object projects to nearly the same position, giving small disparity.',
            'Q2: What is the main limitation of Structure from Motion compared to Multi-View Stereo?\nAns: SfM produces sparse point clouds; MVS densifies them but requires more views and precise calibration.',
            'Q3: Why should NeRF outputs not be used directly as CAD-quality 3D models?\nAns: NeRF models a radiance field optimized for view synthesis, not metric geometry; surfaces can be fuzzy and view-dependent.'
          ]
        }
      ]
    },
    'video-analysis': {
      title: 'Video Analysis',
      subtitle: 'Understanding temporal sequences for action, motion, and event detection',
      sections: [
        {
          heading: 'What is Video Analysis?',
          text: '<strong>Video Analysis</strong> is the discipline of automatically extracting meaningful information from video sequences by leveraging both spatial (frame-level) and temporal (across-frame) cues. Unlike static image analysis, it must model motion, temporal continuity, and long-range dependencies.',
          list: [
            'Processes sequences of frames rather than isolated images to capture dynamics and change over time',
            'Tasks include action recognition, object tracking, event detection, and temporal segmentation',
            'Combines CNNs for spatial feature extraction with RNNs, 3D convolutions, or transformers for temporal modeling',
            'Challenging due to computational cost, motion blur, occlusion, and variable video lengths'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Optical flow estimates per-pixel motion between consecutive frames using brightness constancy.',
          example: {
            title: 'Example: Optical Flow Constraint',
            code: `Brightness Constancy Assumption:
  I(x, y, t) = I(x + dx, y + dy, t + dt)

Taylor Expansion (first-order):
  I(x + dx, y + dy, t + dt) ≈
    I(x, y, t) + Iₓ·dx + Iᵧ·dy + Iₜ·dt

Optical Flow Equation:
  Iₓ·u + Iᵧ·v + Iₜ = 0

Where:
  u = dx/dt, v = dy/dt (pixel velocities)
  Iₓ, Iᵧ = spatial gradients
  Iₜ = temporal gradient

Lucas-Kanade (window-based):
  Solves [Iₓ Iᵧ]·[u v]ᵀ = -Iₜ
  for all pixels in a local window`,
            output: 'Optical flow yields a dense velocity field describing where each pixel moves between frames.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing temporal modeling strategies in video analysis.',
          table: {
            headers: ['Approach', 'Mechanism', 'Strengths', 'Weaknesses'],
            rows: [
              ['2D CNN + LSTM', 'Frame features fed to recurrent layer', 'Lightweight, works with pre-trained image CNNs', 'Slow training, limited long-range context, sequential bottleneck'],
              ['3D CNN (C3D)', 'Spatiotemporal convolutions', 'End-to-end learning of space-time features', 'Massive parameter count, very data-hungry, heavy compute'],
              ['Two-Stream Network', 'RGB stream + optical flow stream', 'Explicit motion representation, strong baseline', 'Requires pre-computed flow, two separate pipelines'],
              ['Video Transformer', 'Self-attention across space and time', 'Captures long-range dependencies well', 'Quadratic memory cost, needs large pre-training datasets'],
              ['SlowFast Networks', 'Slow pathway (spatial) + Fast pathway (temporal)', 'Efficient multi-scale temporal modeling', 'Two-branch architecture adds design complexity']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Feeding raw video frames directly into a standard 2D image classifier without any temporal modeling (fix: aggregate features across frames with pooling, RNNs, or temporal convolutions; a video is more than a bag of frames)',
            'Mistake 2: Downsampling videos too aggressively in time, losing fast motions critical for action recognition (fix: maintain at least 8–16 frames per clip; use higher frame rates for fine-grained motion tasks)',
            'Mistake 3: Ignoring camera motion and background clutter that dominate optical flow instead of object motion (fix: use motion compensation, background subtraction, or attention mechanisms to focus on foreground actors)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Video analysis enables systems that interpret dynamic visual events.',
          list: [
            'Surveillance and security: real-time anomaly detection in CCTV feeds — detecting fights, crowd stampedes, or abandoned bags by analyzing motion trajectories',
            'Sports analytics: tracking player positions and poses frame-by-frame to compute speed, formation heatmaps, and biomechanical metrics for coaching',
            'Content moderation: flagging violent or harmful video content by recognizing action categories and context across multiple frames',
            'Autonomous driving: predicting pedestrian intent and vehicle trajectories from dashcam video by modeling temporal motion patterns and interactions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video analysis extracts meaning from frame sequences by modeling both space and time',
            'Optical flow estimates pixel motion using the brightness constancy constraint: Iₓ·u + Iᵧ·v + Iₜ = 0',
            'Architectures range from 2D CNN+LSTM to 3D CNNs, two-stream networks, and video transformers',
            'Key challenges: high compute cost, occlusion, camera motion, and preserving fine temporal detail',
            'Applications include surveillance, sports analytics, content moderation, and autonomous driving'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does a standard 2D CNN classifier perform poorly on video action recognition without temporal modeling?\nAns: It processes frames independently and cannot capture motion dynamics or temporal ordering, which are essential for distinguishing actions.',
            'Q2: What does the optical flow equation Iₓ·u + Iᵧ·v + Iₜ = 0 assume about pixel intensities?\nAns: It assumes brightness constancy — the intensity of a moving pixel remains approximately constant between consecutive frames.',
            'Q3: What is the main computational drawback of using video transformers for long clips?\nAns: Self-attention scales quadratically with the number of tokens, making memory and compute costs prohibitive for long, high-resolution videos.'
          ]
        }
      ]
    },
    'cv-deployment': {
      title: 'CV Model Deployment',
      subtitle: 'Bringing computer vision models from research to production systems',
      sections: [
        {
          heading: 'What is CV Model Deployment?',
          text: '<strong>CV Model Deployment</strong> is the engineering practice of converting trained computer vision models into efficient, reliable, and maintainable production services. It encompasses optimization, serving infrastructure, monitoring, and edge-device adaptation.',
          list: [
            'Production models must balance accuracy with latency, throughput, and memory constraints',
            'Deployment targets include cloud servers, mobile devices, embedded systems, and browsers',
            'Involves model optimization (quantization, pruning, distillation) and serving pipelines (batching, caching)',
            'Requires monitoring for data drift, accuracy degradation, and operational health in real-world conditions'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Model quantization reduces precision to shrink model size and speed up inference.',
          example: {
            title: 'Example: INT8 Quantization',
            code: `Floating-point to INT8 Mapping:
  r = S × (q - Z)

Where:
  r = real (float) value
  q = quantized (int8) value
  S = scale factor
  Z = zero-point (offset)

Scale Calculation:
  S = (r_max - r_min) / 255

Zero-Point:
  Z = round(r_min / S)

Example:
  Weight range: [-2.5, 2.5]
  S = (2.5 - (-2.5)) / 255 = 5 / 255 ≈ 0.0196
  Z = round(-2.5 / 0.0196) ≈ -128

  q = round(r / 0.0196) + (-128)

Result:
  4× reduction in model size
  2–4× faster inference on INT8 hardware`,
            output: 'INT8 quantization maps float weights to 8-bit integers with minimal accuracy loss.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing deployment targets and optimization strategies.',
          table: {
            headers: ['Target', 'Constraints', 'Typical Optimizations', 'Frameworks'],
            rows: [
              ['Cloud GPU Server', 'High throughput, low latency', 'TensorRT, ONNX Runtime, batching, dynamic shapes', 'PyTorch, TensorFlow, Triton'],
              ['Mobile Phone', 'Battery, thermal, memory', 'Core ML, TFLite Lite, quantization, pruning, MobileNet backbones', 'TensorFlow Lite, Core ML, ONNX Mobile'],
              ['Edge Device (Jetson)', 'Limited CUDA cores, shared memory', 'TensorRT, FP16/INT8, stream pipelining', 'NVIDIA TensorRT, DeepStream'],
              ['Web Browser', 'No install, diverse hardware', 'ONNX.js, TensorFlow.js, WebGL/WebGPU, small models', 'TensorFlow.js, ONNX Runtime Web'],
              ['Microcontroller', 'KB of RAM, no FPU', 'Extreme quantization (INT4), TinyML, hand-optimized kernels', 'TensorFlow Lite Micro, CMSIS-NN']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Deploying a full-precision research model to a mobile app without optimization, causing excessive memory usage and slow inference (fix: quantize to INT8, prune redundant channels, and switch to efficient backbones like MobileNet or EfficientNet-Lite)',
            'Mistake 2: Ignoring input preprocessing consistency between training and inference pipelines, causing silent accuracy drops in production (fix: lock down normalization constants, resize methods, and color space conversions; version them alongside the model)',
            'Mistake 3: Skipping production monitoring and assuming the model will perform identically to validation metrics forever (fix: log predictions, track confidence distributions, set up drift detection on input images, and schedule periodic retraining triggers)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Deployed CV systems operate under real-world resource and reliability constraints.',
          list: [
            'Retail checkout: real-time object detection running on edge cameras to scan shopping baskets with sub-100ms latency using quantized YOLO models',
            'Medical imaging PACS: cloud-deployed segmentation models integrated into radiology workflows, with explainability overlays and confidence thresholds for flagging critical cases',
            'Augmented reality filters: mobile-optimized face mesh models running at 30 FPS on smartphones via Core ML and GPU delegate backends',
            'Industrial quality inspection: defect detection models on factory-floor edge boxes, streaming GigE camera feeds with TensorRT-optimized inference and MQTT alerting'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CV deployment converts research models into efficient, reliable production services',
            'Quantization maps floats to lower-bit integers: r = S × (q − Z), reducing size and latency',
            'Deployment targets range from cloud GPUs to microcontrollers, each with unique constraints',
            'Optimization techniques: quantization, pruning, distillation, knowledge transfer, and efficient architectures',
            'Production readiness requires monitoring, input pipeline versioning, and drift detection'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the primary benefit of INT8 quantization for CV model deployment?\nAns: It reduces model size by approximately 4× and accelerates inference on hardware with INT8 support, with minimal accuracy loss.',
            'Q2: Why is preprocessing pipeline consistency critical between training and inference?\nAns: Mismatched normalization, resizing, or color space handling silently degrades accuracy because the model expects the exact input distribution it was trained on.',
            'Q3: What is a practical way to detect when a deployed CV model is degrading in production?\nAns: Monitor input distribution drift, track prediction confidence trends, and compare live outputs against a held-out golden test set on a schedule.'
          ]
        }
      ]
    },
    'cv-ethics': {
      title: 'Ethics in Computer Vision',
      subtitle: 'Responsible development and deployment of visual AI systems',
      sections: [
        {
          heading: 'What is Ethics in Computer Vision?',
          text: '<strong>Ethics in Computer Vision</strong> addresses the societal implications, fairness, privacy risks, and accountability concerns arising from automated visual analysis systems. It demands that CV practitioners consider who is affected by their systems and how.',
          list: [
            'Facial recognition and biometric systems raise significant privacy and surveillance concerns',
            'Training datasets often under-represent certain demographics, causing biased model behavior',
            'Deepfake and synthetic media technologies enable disinformation and identity fraud at scale',
            'Responsible CV requires transparency, consent, fairness audits, and clear human oversight mechanisms'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Demographic parity measures whether a classifier produces equal outcomes across groups.',
          example: {
            title: 'Example: Fairness Metric — Demographic Parity',
            code: `Demographic Parity:
  P(Ŷ = 1 | A = 0) = P(Ŷ = 1 | A = 1)

Where:
  Ŷ = predicted label (e.g., "qualified")
  A = protected attribute (e.g., gender, race)

Example (Hiring classifier):
  Group A (male):
    1000 applicants, 200 predicted "qualified"
    P(Ŷ=1 | A=0) = 200 / 1000 = 0.20

  Group B (female):
    1000 applicants, 120 predicted "qualified"
    P(Ŷ=1 | A=1) = 120 / 1000 = 0.12

Demographic parity gap:
  |0.20 - 0.12| = 0.08

Fairness threshold (common):
  Gap should be < 0.05 for deployment`,
            output: 'Demographic parity checks whether predictions are independent of protected attributes.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing fairness and privacy concepts in CV.',
          table: {
            headers: ['Concept', 'Definition', 'CV Relevance', 'Mitigation'],
            rows: [
              ['Demographic Parity', 'Equal positive prediction rates across groups', 'Face attribute classifiers, hiring tools', 'Reweighing data, threshold adjustment'],
              ['Equalized Odds', 'Equal TPR and FPR across groups', 'Security screening, medical diagnosis', 'Adversarial debiasing, constrained optimization'],
              ['Differential Privacy', 'Mathematical privacy guarantee for training data', 'Training on sensitive images', 'Add controlled noise to gradients/outputs'],
              ['Federated Learning', 'Train without centralizing raw data', 'Medical imaging across hospitals', 'Local training + secure aggregation'],
              ['Adversarial Robustness', 'Resilience to input perturbations', 'Face recognition spoofing', 'Adversarial training, certified defenses']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Testing model accuracy only on aggregate metrics, hiding performance disparities for underrepresented subgroups (fix: report stratified metrics by gender, age, and skin tone; use benchmarks like Fitzpatrick skin-type partitioning)',
            'Mistake 2: Collecting biometric datasets without informed consent or proper data governance, creating legal and ethical liability (fix: establish IRB review, clear consent protocols, data retention limits, and anonymization procedures before any collection)',
            'Mistake 3: Deploying facial recognition in public spaces without transparency about data usage, retention, and access controls (fix: publish model cards, system datasheets, and audit logs; provide opt-out mechanisms and human-in-the-loop review for high-stakes decisions)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Ethical CV practice shapes how visual AI is built and governed.',
          list: [
            'Law enforcement: some jurisdictions ban or restrict facial recognition in policing due to accuracy disparities across demographics and risks of wrongful identification',
            'Healthcare imaging: ensuring dermatology models trained primarily on lighter skin tones perform equitably across all populations by expanding training data and auditing subgroup performance',
            'Workplace monitoring: employee activity tracking via CV must balance safety goals with privacy rights — clear disclosure, minimal data collection, and no covert surveillance',
            'Social media platforms: deploying deepfake detection and provenance tracing to combat synthetic media fraud while preserving user expression and avoiding over-censorship'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Ethics in CV addresses fairness, privacy, accountability, and societal impact of visual AI',
            'Demographic parity requires equal positive prediction rates: P(Ŷ=1 | A=0) = P(Ŷ=1 | A=1)',
            'Bias often stems from unrepresentative training data and unchecked aggregate metrics',
            'Privacy tools: differential privacy, federated learning, data minimization, and informed consent',
            'Responsible deployment requires transparency (model cards), audits, and human oversight'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does demographic parity measure in a classification system?\nAns: It measures whether the probability of a positive prediction is equal across different demographic groups defined by a protected attribute.',
            'Q2: Why is aggregate accuracy a misleading fairness metric?\nAns: A model can have high overall accuracy while performing very poorly on minority subgroups; aggregate metrics hide these disparities.',
            'Q3: What is federated learning and how does it help with privacy in CV?\nAns: Federated learning trains models across decentralized devices or institutions without centralizing raw images, keeping sensitive visual data local.'
          ]
        }
      ]
    }
  }
};
