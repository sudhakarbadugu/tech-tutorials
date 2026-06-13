export const cvModule2Structure = {
  module2: {
    title: 'Module 2: Feature Detection, Description & Recognition',
    topics: [
      { id: 'corner-detection', title: 'Corner & Interest Point Detection' },
      { id: 'blob-detection', title: 'Blob Detection' },
      { id: 'sift', title: 'SIFT — Scale-Invariant Feature Transform' },
      { id: 'hog', title: 'HOG — Histogram of Oriented Gradients' },
      { id: 'feature-matching', title: 'Feature Matching' },
      { id: 'image-segmentation', title: 'Image Segmentation' },
      { id: 'object-detection-cv', title: 'Object Detection' },
      { id: 'face-detection-cv', title: 'Face Detection' },
      { id: 'image-classification', title: 'Image Classification' },
      { id: 'image-retrieval', title: 'Image Retrieval' },
    ]
  }
};

export const cvModule2Content = {
  module2: {
    'corner-detection': {
      title: 'Corner & Interest Point Detection',
      subtitle: 'Finding stable, distinctive points in images for tracking and matching',
      sections: [
        {
          heading: 'What is Corner Detection?',
          text: 'A <strong>corner</strong> (or interest point) is a location in an image where intensity changes significantly in multiple directions. Unlike edges (change in one direction) or flat regions (no change), corners are locally distinct and stable under viewpoint changes, making them ideal for tracking, matching, and alignment.',
          list: [
            'Corners have high localization accuracy — their position can be estimated precisely',
            'They are invariant to small rotations, scale changes, and illumination shifts',
            'Corners provide sparse but powerful image representations for downstream tasks',
            'Applications include stereo matching, motion tracking, panorama stitching, and SLAM'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The <strong>Harris corner detector</strong> analyzes the structure tensor (second-moment matrix) to measure intensity variation in a local window.',
          example: {
            title: 'Harris Corner Response',
            code: 'Structure tensor M for window W:\n  M = Σ_w [Ix²   IxIy\n           IxIy  Iy²]\n\nWhere Ix, Iy are image gradients in x and y.\n\nCorner response R:\n  R = det(M) - k · trace(M)²\n  R = λ₁λ₂ - k(λ₁ + λ₂)²\n\nInterpretation:\n  • R > 0 (both λ large)   → corner\n  • R ≈ 0 (both λ small)   → flat region\n  • R < 0 (one λ large)    → edge',
            output: 'Harris corners are detected where both eigenvalues of M are large — meaning intensity changes strongly in multiple directions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different corner detectors trade off speed, invariance, and accuracy.',
          table: {
            headers: ['Detector', 'Invariant To', 'Speed', 'Best For'],
            rows: [
              ['Harris', 'Translation, rotation', 'Fast', 'General corner detection'],
              ['Shi-Tomasi (GFTT)', 'Translation, rotation', 'Fast', 'Tracking — selects most stable corners'],
              ['FAST', 'None', 'Very fast', 'Real-time applications, robotics'],
              ['ORB', 'Rotation', 'Fast', 'Binary descriptor + detection in one'],
              ['SIFT/SURF', 'Scale, rotation', 'Slow', 'Robust matching across large viewpoint changes']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running corner detection on raw images without Gaussian smoothing (fix: smooth first to reduce noise; the structure tensor is sensitive to gradient noise)',
            'Mistake 2: Using Harris on images with large scale changes (fix: use scale-space detectors like SIFT or Harris-Laplace for scale invariance)',
            'Mistake 3: Selecting too many corners clustered in small regions (fix: apply non-maximum suppression and enforce a minimum distance between detected corners)',
            'Mistake 4: Confusing corners with edges — accepting points where R ≈ 0 (fix: threshold R strictly; only accept points where both eigenvalues exceed a minimum)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Corner detection is a foundational step in many computer vision pipelines.',
          list: [
            'Visual SLAM (e.g., ORB-SLAM): FAST corners are tracked across frames to estimate camera pose and build sparse 3D maps in real time',
            'Panorama stitching: Harris/Shi-Tomasi corners are matched between overlapping images to compute the homography for alignment',
            'Augmented reality: tracked corners anchor virtual objects to real-world surfaces by providing stable reference points',
            'Autonomous vehicles: corner features from lane markings and road signs are tracked to estimate ego-motion and lane position'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Corners are points where intensity changes significantly in multiple directions',
            'The Harris detector uses the structure tensor and its eigenvalues to classify regions as flat, edge, or corner',
            'Shi-Tomasi improves Harris by using min(λ₁, λ₂) as the response, selecting the most trackable corners',
            'For real-time speed, use FAST; for scale/rotation invariance, use SIFT or ORB',
            'Always apply non-maximum suppression and minimum-distance constraints to distribute keypoints evenly'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why are corners more useful than edges for image matching?\nAns: Edges only constrain one direction; corners constrain two, giving precise 2D localization.',
            'Q2: What does a negative Harris response indicate?\nAns: One eigenvalue is large and the other is small → an edge, not a corner.',
            'Q3: Why is Gaussian smoothing applied before computing gradients for corner detection?\nAns: Gradients are noisy; smoothing reduces false responses from random intensity variations.'
          ]
        }
      ]
    },
    'blob-detection': {
      title: 'Blob Detection',
      subtitle: 'Finding scale-invariant regions of distinctive appearance',
      sections: [
        {
          heading: 'What is Blob Detection?',
          text: 'A <strong>blob</strong> is a region in an image that differs in properties like brightness or color from its surroundings. Unlike corners (point features), blobs are <strong>extended regions</strong> that capture larger image structures. Blob detectors are designed to find regions that are stable and repeatable across scale changes, making them powerful for wide-baseline matching.',
          list: [
            'Blobs correspond to regions of homogeneous appearance bounded by contrast edges',
            'They are detected at their characteristic scale — the scale where the response is strongest',
            'Blob detectors are inherently multi-scale, searching across a range of kernel sizes',
            'Famous examples include the Laplacian-of-Gaussian (LoG) and Difference-of-Gaussian (DoG) detectors'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The <strong>Laplacian-of-Gaussian (LoG)</strong> measures how much a region stands out from its surroundings at a particular scale.',
          example: {
            title: 'LoG Blob Detection',
            code: 'Laplacian-of-Gaussian:\n  LoG(x, y, σ) = σ² · ∇²G(x, y, σ) * I(x, y)\n\nWhere:\n  G(x, y, σ) = (1 / 2πσ²) · exp(-(x²+y²)/2σ²)\n  ∇² = ∂²/∂x² + ∂²/∂y²\n\nScale-space search:\n  1. Compute LoG at multiple scales σ\n  2. Find local maxima/minima in (x, y, σ) space\n  3. Each extremum = blob center and characteristic scale\n\nApproximation: Difference-of-Gaussian (DoG)\n  DoG ≈ LoG (faster to compute)\n  DoG = G(x,y,kσ) - G(x,y,σ)',
            output: 'A dark circle on a bright background produces a strong negative LoG response at a scale matching the circle\'s radius.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Blob detection methods differ in speed, scale-space approach, and approximation quality.',
          table: {
            headers: ['Method', 'Operator', 'Scale Selection', 'Speed'],
            rows: [
              ['LoG', 'Exact Laplacian of Gaussian', 'Continuous scale search', 'Slow (exact)'],
              ['DoG', 'Difference of two Gaussians', 'Discrete octave scales', 'Fast — used in SIFT'],
              ['Hessian', 'Determinant of Hessian matrix', 'Box filter approximation (SURF)', 'Fast — integral images'],
              ['MSER', 'Extremal regions in intensity', 'Automatic — no scale-space', 'Fast — binary regions'],
              ['Selective Search', 'Hierarchical grouping', 'Multi-scale segments', 'Medium — object proposals']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Searching for blobs at only a single scale (fix: blobs have a natural characteristic scale; search a scale pyramid to find the scale where the response peaks)',
            'Mistake 2: Confusing blobs with contours — a blob is a region, not just a boundary (fix: blob detection produces a center and radius/scale, suitable for descriptor extraction like SIFT)',
            'Mistake 3: Using LoG without the σ² normalization factor (fix: without σ², responses decay at large scales and the true scale maximum is lost)',
            'Mistake 4: Thresholding blob responses too aggressively (fix: use relative thresholding or top-K selection to preserve blobs in low-contrast regions)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Blob detectors provide the regions that feed many higher-level vision tasks.',
          list: [
            'SIFT keypoints: DoG extrema define blob-like regions that are described with 128-dimension histograms for robust matching',
            'Medical imaging: blob detection finds nodules in CT scans and tumors in MRI by identifying spherical regions of unusual intensity',
            'Astronomy: stars and galaxies appear as blobs; LoG/DoG filters detect them automatically across telescope images of varying resolution',
            'Cell biology: fluorescence microscopy uses blob detection to count and track cells that appear as bright spots against dark backgrounds'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Blobs are extended regions that stand out from their surroundings in brightness or color',
            'The LoG operator finds blobs by measuring how much a region contrasts with its neighborhood at a given scale',
            'DoG approximates LoG efficiently and is the core of the SIFT scale-space search',
            'Blob detection is multi-scale — each blob has a characteristic scale where the filter response peaks',
            'The output of blob detection is a set of (x, y, σ) positions suitable for descriptor extraction'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the σ² factor necessary in the LoG blob response?\nAns: Without it, the Laplacian response naturally decreases with larger scales, masking the true scale maximum. σ² compensates for this decay.',
            'Q2: How does DoG approximate LoG mathematically?\nAns: The difference of two Gaussians at scales σ and kσ approximates the Laplacian of Gaussian up to a scale factor, due to the heat equation property.',
            'Q3: What is the output of blob detection besides (x, y) coordinates?\nAns: The characteristic scale σ, which determines the size of the local neighborhood used for descriptor computation.'
          ]
        }
      ]
    },
    sift: {
      title: 'SIFT — Scale-Invariant Feature Transform',
      subtitle: 'Robust feature detection and description for matching under viewpoint changes',
      sections: [
        {
          heading: 'What is SIFT?',
          text: '<strong>SIFT</strong> is one of the most influential algorithms in computer vision. It detects keypoints (blobs) that are invariant to scale and rotation, and describes each with a 128-dimensional histogram of local gradient orientations. SIFT features remain matchable even when images differ in scale, rotation, lighting, and limited viewpoint angle.',
          list: [
            'SIFT keypoints are detected as extrema in a Difference-of-Gaussian (DoG) scale-space pyramid',
            'Each keypoint is assigned a scale, orientation, and precise sub-pixel location',
            'The descriptor captures the spatial histogram of gradient orientations in the keypoint neighborhood',
            'SIFT is patented (expired in 2020) and remains a gold standard for evaluation of newer descriptors'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The SIFT descriptor is a 128-element vector computed from a 4×4 grid of orientation histograms, each with 8 orientation bins.',
          example: {
            title: 'SIFT Descriptor Construction',
            code: '1. Scale-space extrema detection:\n   - Build Gaussian pyramid with octaves\n   - Compute DoG between adjacent scales\n   - Detect local 3D extrema (x, y, σ)\n\n2. Keypoint refinement:\n   - Taylor expansion for sub-pixel accuracy\n   - Reject low-contrast points |D(x)| < 0.03\n   - Reject edge responses (Harris ratio > 10)\n\n3. Orientation assignment:\n   θ(x,y) = atan2(Gy, Gx)\n   Histogram over 36 bins → dominant orientation\n\n4. Descriptor (128-D):\n   4×4 spatial grid × 8 orientation bins\n   = 16 cells × 8 bins = 128 values\n   - Normalize → threshold at 0.2 → renormalize',
            output: 'SIFT produces highly discriminative, scale- and rotation-invariant 128-D descriptors.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'SIFT vs alternatives and variants.',
          table: {
            headers: ['Descriptor', 'Dimensions', 'Invariant To', 'Speed', 'Binary?'],
            rows: [
              ['SIFT', '128', 'Scale, rotation', 'Slow', 'No'],
              ['SURF', '64', 'Scale, rotation', 'Medium', 'No'],
              ['ORB', '32', 'Rotation', 'Fast', 'Yes'],
              ['BRISK', '64', 'Scale, rotation', 'Fast', 'Yes'],
              ['AKAZE', '61/486', 'Scale, rotation', 'Medium', 'No'],
              ['BRIEF', '128-512', 'None (rotation-sensitive)', 'Very fast', 'Yes']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using SIFT on real-time mobile applications without considering speed (fix: use ORB or FAST + BRIEF for real-time; SIFT is better for offline matching where quality matters)',
            'Mistake 2: Matching SIFT descriptors with simple Euclidean distance without ratio test (fix: use Lowe\'s ratio test — accept match only if d1/d2 < 0.8 to reject ambiguous matches)',
            'Mistake 3: Not normalizing images before SIFT detection (fix: SIFT is illumination-invariant to a degree, but extreme illumination changes may require histogram normalization)',
            'Mistake 4: Expecting invariance to large affine or perspective transforms (fix: SIFT is only rotation/scale invariant; for viewpoint changes, use ASIFT or deep learning matchers)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SIFT has enabled robust visual matching across decades of applications.',
          list: [
            'Panorama stitching: SIFT features are matched across overlapping photos to compute homographies and blend images seamlessly',
            '3D reconstruction (COLMAP): SIFT keypoints are matched across multiple views, then triangulated and refined with bundle adjustment',
            'Object recognition: SIFT descriptors from a database of known objects are matched against query images for instance recognition',
            'Robot navigation: visual teach-and-repeat systems use SIFT landmarks to localize robots in previously mapped environments'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SIFT detects keypoints via DoG scale-space extrema and refines them to sub-pixel accuracy',
            'Each keypoint receives a dominant orientation, making the descriptor rotation-invariant',
            'The 128-D descriptor captures a spatial histogram of gradient orientations in a 4×4 neighborhood',
            'Always apply Lowe\'s ratio test (d1/d2 < 0.8) when matching SIFT descriptors to remove ambiguous correspondences',
            'For speed-critical applications, consider ORB or AKAZE; for maximum robustness, SIFT remains excellent'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does SIFT use a 4×4 grid of 8-bin orientation histograms instead of a single global histogram?\nAns: The spatial grid preserves rough geometric layout; a single histogram would lose all spatial information and be less discriminative.',
            'Q2: What is the purpose of the 0.2 threshold and renormalization in the SIFT descriptor?\nAns: It clips large gradient peaks caused by illumination changes, making the descriptor robust to non-linear lighting.',
            'Q3: Why is DoG used instead of LoG directly in SIFT?\nAns: DoG can be computed by simple subtraction of two Gaussian-smoothed images, which is much faster than computing the true Laplacian.'
          ]
        }
      ]
    },
    hog: {
      title: 'HOG — Histogram of Oriented Gradients',
      subtitle: 'Describing object shape through gradient orientation histograms',
      sections: [
        {
          heading: 'What is HOG?',
          text: '<strong>HOG</strong> is a feature descriptor that captures the shape of objects by counting gradient orientations in local cells. Unlike SIFT, which describes sparse keypoints, HOG is a <strong>dense descriptor</strong> computed over the entire image or detection window. It was originally designed for pedestrian detection and remains a staple in object detection pipelines, especially when combined with SVM classifiers.',
          list: [
            'HOG computes gradients for every pixel, then builds orientation histograms in small spatial cells',
            'Cells are grouped into larger overlapping blocks that are normalized together',
            'The descriptor is illumination-invariant because gradients cancel out constant offsets',
            'Dalal and Triggs\' 2005 paper demonstrated that HOG + SVM achieved near-perfect pedestrian detection on INRIA'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'HOG computes gradient magnitude and orientation, then builds histograms in cells and normalizes within overlapping blocks.',
          example: {
            title: 'HOG Descriptor Computation',
            code: '1. Gradient computation:\n   Gx = I * [-1, 0, 1]\n   Gy = I * [-1, 0, 1]ᵀ\n   magnitude = √(Gx² + Gy²)\n   orientation = atan2(Gy, Gx) (unsigned: 0°–180°)\n\n2. Cell histograms (e.g., 8×8 pixels):\n   - 9 orientation bins (0°, 20°, ..., 160°)\n   - Vote weighted by magnitude\n\n3. Block normalization (e.g., 2×2 cells = 16×16 pixels):\n   - Concatenate 4 cells × 9 bins = 36-D\n   - L2-normalize: v\' = v / √(‖v‖² + ε²)\n\n4. Window descriptor (e.g., 64×128):\n   - 7×15 blocks × 36 = 3780-D vector',
            output: 'HOG produces a fixed-length vector that encodes local shape and edge structure across the detection window.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'HOG vs SIFT and other shape descriptors.',
          table: {
            headers: ['Property', 'HOG', 'SIFT'],
            rows: [
              ['Coverage', 'Dense (entire window)', 'Sparse (keypoints only)'],
              ['Scale invariance', 'No (fixed window size)', 'Yes (scale-space detection)'],
              ['Rotation invariance', 'No (fixed orientation)', 'Yes (orientation assignment)'],
              ['Descriptor length', 'Fixed per window (e.g., 3780)', '128 per keypoint'],
              ['Best use case', 'Object detection (sliding window)', 'Matching, recognition'],
              ['Illumination invariance', 'Yes (gradient + normalize)', 'Yes (gradient + normalize)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using HOG for rotated objects without data augmentation (fix: HOG is not rotation-invariant; augment training data with rotated samples or use rotation-invariant alternatives like R-HOG)',
            'Mistake 2: Using HOG at multiple scales without resizing the image pyramid (fix: HOG operates at a fixed window size; build an image pyramid and run the detector at each scale, or use modern CNNs for native scale invariance)',
            'Mistake 3: Ignoring signed vs unsigned orientation bins (fix: unsigned (0°–180°) works for most objects; signed (0°–360°) is needed when gradient direction carries meaningful information, such as in face images)',
            'Mistake 4: Using non-overlapping blocks (fix: overlapping blocks improve normalization robustness at boundaries; Dalal-Triggs uses 50% overlap, which significantly improves detection accuracy)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'HOG shaped the era of classical object detection before deep learning.',
          list: [
            'Pedestrian detection: the original Dalal-Triggs detector scans HOG + linear SVM across image pyramids, achieving >90% detection rates on INRIA',
            'DPM (Deformable Parts Model): extends HOG with part-based models and latent SVM, becoming the state-of-the-art detector before CNNs (used in early autonomous vehicles)',
            'Face detection: early Viola-Jones used Haar features; HOG-based detectors offered better accuracy for profile and rotated faces before CNNs took over',
            'Industrial inspection: HOG features on grayscale images detect defects like cracks and scratches on machined surfaces with simple SVM classifiers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'HOG is a dense descriptor that encodes local edge orientations in overlapping spatial cells',
            'Gradient computation → cell histograms → block normalization → window concatenation',
            'HOG is illumination-invariant but NOT scale- or rotation-invariant',
            'Block normalization (L2 or Hellinger) is critical for robustness to local lighting changes',
            'HOG + linear SVM was the dominant object detection pipeline before convolutional neural networks'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does HOG use gradient orientations instead of raw pixel intensities?\nAns: Gradients are invariant to constant illumination offsets; only edges and structure matter, not absolute brightness.',
            'Q2: Why are blocks normalized before concatenation?\nAns: Normalization makes the descriptor robust to local contrast variations and shadows across the detection window.',
            'Q3: Why does HOG perform poorly on rotated objects?\nAns: The orientation bins are aligned to absolute directions; rotating the object shifts all histogram bins, breaking the fixed descriptor pattern.'
          ]
        }
      ]
    },
    'feature-matching': {
      title: 'Feature Matching',
      subtitle: 'Establishing correspondences between local descriptors across images',
      sections: [
        {
          heading: 'What is Feature Matching?',
          text: '<strong>Feature matching</strong> is the process of finding corresponding keypoints between two or more images by comparing their local descriptors. Once correspondences are established, they enable geometric alignment, 3D reconstruction, motion estimation, and object recognition. The quality of matching directly determines the accuracy of downstream tasks.',
          list: [
            'Descriptors encode local appearance around a keypoint as a fixed-length vector',
            'Matching compares descriptor vectors using a distance metric (Euclidean, Hamming, cosine)',
            'The nearest neighbor in descriptor space is the candidate match',
            'Outliers are inevitable; robust estimation (RANSAC) is required for geometric verification'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Lowe\'s ratio test rejects ambiguous matches by comparing the best and second-best neighbor distances.',
          example: {
            title: 'Matching with Ratio Test',
            code: 'Given descriptor d from image A,\nfind two nearest neighbors in image B:\n  d1 = distance(d, n1)   [best match]\n  d2 = distance(d, n2)   [second best]\n\nLowe\'s ratio test:\n  accept if d1 / d2 < threshold\n  typical threshold = 0.7–0.8\n\nWhy it works:\n  - A clear match has one much closer neighbor\n  - Ambiguous matches have two similarly close neighbors\n  → Reject to reduce false positives\n\nAlternative: cross-check (mutual nearest neighbor)\n  Match A→B and B→A; keep only mutual matches.',
            output: 'The ratio test removes ~90% of false matches while retaining most correct ones.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Distance metrics and matching strategies for different descriptor types.',
          table: {
            headers: ['Descriptor', 'Distance Metric', 'Matching Speed', 'Ratio Test?'],
            rows: [
              ['SIFT/SURF', 'Euclidean (L2)', 'KD-tree / FLANN', 'Yes'],
              ['ORB/BRISK', 'Hamming (bit XOR)', 'LSH / brute force', 'Yes'],
              ['BRIEF', 'Hamming', 'Brute force', 'Yes'],
              ['Deep descriptors', 'Cosine / L2', 'Approximate NN', 'Yes'],
              ['HOG (window)', 'Cosine / L2', 'Sliding window conv', 'No (classifier score)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Brute-forcing matches for millions of descriptors (fix: use FLANN with KD-trees for float descriptors or LSH for binary descriptors; for very large databases, use product quantization or HNSW)',
            'Mistake 2: Skipping geometric verification after matching (fix: always run RANSAC on the putative matches to estimate the fundamental matrix, homography, or essential matrix and filter outliers)',
            'Mistake 3: Using the same ratio threshold for all scenes (fix: stricter thresholds (0.6) for highly textured scenes with many similar features; looser thresholds (0.8–0.9) for sparse scenes)',
            'Mistake 4: Matching without cross-check for symmetric consistency (fix: enforce mutual nearest neighbors to eliminate one-way matches caused by asymmetric descriptor distributions)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Feature matching is the glue that connects multiple views into a coherent understanding.',
          list: [
            'Structure from Motion: matched SIFT features across photo collections are triangulated to reconstruct 3D scenes (e.g., COLMAP, OpenMVG)',
            'Panorama stitching: ORB or SIFT matches between overlapping images estimate the homography for warping and blending',
            'Visual localization: query image descriptors are matched against a pre-built database of geo-tagged images to estimate camera position',
            'Document alignment: feature matching aligns scanned pages or historical documents that may be rotated, scaled, or distorted'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Feature matching finds correspondences by comparing local descriptor vectors between images',
            'Lowe\'s ratio test (d1/d2 < 0.8) rejects ambiguous matches by requiring the best match to be distinctly closer than the second best',
            'Cross-check (mutual nearest neighbors) adds a symmetric consistency constraint',
            'Always verify matches geometrically with RANSAC to remove outliers before using them for pose or structure estimation',
            'For large-scale matching, use approximate nearest neighbor methods like FLANN or HNSW'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does Lowe\'s ratio test work?\nAns: A correct match usually has one clearly closer neighbor; ambiguous matches have two neighbors at similar distances.',
            'Q2: What distance metric is used for ORB descriptors?\nAns: Hamming distance — fast XOR-based comparison because ORB produces binary strings.',
            'Q3: Why is RANSAC necessary after feature matching?\nAns: Even good matchers produce some false correspondences; RANSAC robustly estimates the geometric transformation while discarding outliers.'
          ]
        }
      ]
    },
    'image-segmentation': {
      title: 'Image Segmentation',
      subtitle: 'Partitioning images into meaningful regions or objects',
      sections: [
        {
          heading: 'What is Image Segmentation?',
          text: '<strong>Image segmentation</strong> partitions an image into multiple segments (sets of pixels), typically such that pixels in the same segment share visual properties like color, intensity, or texture. Unlike classification (one label per image) or detection (bounding boxes), segmentation produces a <strong>pixel-wise mask</strong> that delineates exact object boundaries.',
          list: [
            'Semantic segmentation: assigns a class label to every pixel (e.g., road, car, pedestrian)',
            'Instance segmentation: separates individual object instances of the same class (e.g., car #1 vs car #2)',
            'Panoptic segmentation: combines semantic and instance segmentation into a unified output',
            'Segmentation enables precise measurement, editing, and 3D extraction for robotics and medical imaging'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Semantic segmentation is typically formulated as per-pixel classification using fully convolutional networks (FCNs) that preserve spatial resolution through encoder-decoder architectures.',
          example: {
            title: 'FCN Segmentation Pipeline',
            code: 'Encoder (backbone):\n  Input: H × W × 3 image\n  → Convolution + pooling layers\n  → Feature maps: H/32 × W/32 × C\n\nDecoder (upsampling):\n  - Transposed convolutions (learned upsampling)\n  - Skip connections from encoder layers\n  → Output: H × W × K (K = number of classes)\n\nLoss function:\n  L = -Σᵢ Σ_c yᵢ,c · log(ŷᵢ,c)\n  (per-pixel cross-entropy over all pixels i)\n\nAlternative:\n  - Dice loss for imbalanced classes\n  - Focal loss for hard pixel examples',
            output: 'FCNs output a dense classification map the same size as the input, with one class probability distribution per pixel.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Segmentation types and their outputs.',
          table: {
            headers: ['Type', 'Output', 'Granularity', 'Example Use Case'],
            rows: [
              ['Semantic', 'Class mask (no instance IDs)', 'Per-pixel class', 'Road scene parsing, land cover mapping'],
              ['Instance', 'Object masks + instance IDs', 'Per-pixel + instance', 'Counting cells, autonomous driving'],
              ['Panoptic', 'Unified mask with all labels', 'Per-pixel + semantic + instance', 'Scene understanding, robotics'],
              ['Interactive', 'Mask from user cues (clicks, boxes)', 'Per-pixel, guided', 'Photo editing, medical annotation'],
              ['Matting', 'Alpha matte (soft edges)', 'Per-pixel opacity', 'Video compositing, green screen']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using standard cross-entropy on heavily imbalanced classes (fix: use weighted cross-entropy, Dice loss, or Lovász loss to prevent the network from ignoring rare classes like pedestrians)',
            'Mistake 2: Downsampling too aggressively without skip connections (fix: aggressive pooling loses fine boundary detail; U-Net-style skip connections restore high-resolution features in the decoder)',
            'Mistake 3: Evaluating segmentation only with pixel accuracy (fix: use mIoU (mean Intersection over Union) which properly accounts for class imbalance and boundary quality)',
            'Mistake 4: Confusing instance and semantic segmentation requirements (fix: instance segmentation requires additional instance-aware heads or clustering; semantic segmentation alone cannot separate two touching objects of the same class)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Segmentation provides the pixel-level understanding needed for precise interaction with visual scenes.',
          list: [
            'Autonomous driving: semantic segmentation of camera feeds identifies drivable road, lane markings, pedestrians, and other vehicles for path planning',
            'Medical imaging: segmentation of tumors in MRI/CT enables volumetric measurement, treatment planning, and progression tracking over time',
            'Satellite imagery: land cover segmentation maps forests, urban areas, water bodies, and agriculture for environmental monitoring and urban planning',
            'Video editing: background removal (segmentation + matting) replaces backgrounds in video calls without a physical green screen'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Segmentation assigns a label to every pixel, producing precise object boundaries',
            'Semantic segmentation assigns class labels; instance segmentation also separates individual objects',
            'Fully Convolutional Networks (FCNs) with encoder-decoder structures are the standard architecture',
            'Skip connections (U-Net) preserve fine details that would be lost through downsampling',
            'For imbalanced classes, use mIoU for evaluation and Dice/focal loss for training'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the key architectural innovation of U-Net that improves segmentation boundaries?\nAns: Skip connections that concatenate high-resolution encoder features with upsampled decoder features.',
            'Q2: Why is pixel accuracy a poor metric for segmentation?\nAns: In imbalanced datasets (e.g., a road scene with mostly sky), a classifier predicting the dominant class for all pixels achieves high accuracy while failing at the rare but important classes.',
            'Q3: What additional component does instance segmentation need beyond semantic segmentation?\nAns: A mechanism to distinguish individual instances — typically an instance embedding branch or a detection head (as in Mask R-CNN).'
          ]
        }
      ]
    },
    'object-detection-cv': {
      title: 'Object Detection',
      subtitle: 'Localizing and classifying objects with bounding boxes',
      sections: [
        {
          heading: 'What is Object Detection?',
          text: '<strong>Object detection</strong> combines <strong>classification</strong> (what is it?) and <strong>localization</strong> (where is it?) to produce bounding boxes around objects of interest, each labeled with a class and a confidence score. It is more informative than classification alone and less precise than segmentation, but strikes the best balance for many real-time applications.',
          list: [
            'Two-stage detectors (R-CNN family): first propose regions, then classify them — high accuracy, slower',
            'Single-stage detectors (YOLO, SSD, RetinaNet): predict boxes and classes in one forward pass — fast, suitable for real time',
            'Anchor-based methods use predefined reference boxes; anchor-free methods predict directly from keypoints or centers',
            'Modern detectors use Feature Pyramid Networks (FPN) to detect objects at multiple scales efficiently'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Object detection loss combines a classification loss (what class?) and a regression loss (where is the box?).',
          example: {
            title: 'Detection Loss (Faster R-CNN / YOLO style)',
            code: 'Total Loss = L_cls + λ · L_reg\n\nClassification loss (per box):\n  L_cls = -Σ_c p_c · log(ṕ_c)\n  (cross-entropy over C classes + background)\n\nRegression loss (smooth L1 / IoU):\n  L_reg = smooth_L1(t_pred, t_target)\n\nWhere t encodes box offsets:\n  tx = (Gx - Px) / Pw\n  ty = (Gy - Py) / Ph\n  tw = log(Gw / Pw)\n  th = log(Gh / Ph)\n\n(G = ground truth, P = proposal/prior anchor)\n\nIoU-based variants (GIoU, DIoU, CIoU):\n  better encode spatial overlap quality.',
            output: 'Balancing classification and regression loss terms is critical — regression errors dominate early training.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Two-stage vs single-stage detection paradigms.',
          table: {
            headers: ['Property', 'Two-Stage (R-CNN)', 'Single-Stage (YOLO/SSD)'],
            rows: [
              ['Speed', 'Slow (10–15 FPS)', 'Fast (30–140+ FPS)'],
              ['Accuracy', 'Higher (especially small objects)', 'Good (improving rapidly)'],
              ['Mechanism', 'Propose regions → classify', 'Dense predictions in one pass'],
              ['Anchor handling', 'RPN proposals', 'Dense anchors or anchor-free'],
              ['Best for', 'High-accuracy offline tasks', 'Real-time video, mobile']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a single anchor size for all object scales (fix: use multi-scale anchors or FPN; small objects need small anchors on high-resolution feature maps)',
            'Mistake 2: Treating detection as pure classification without considering box quality (fix: use IoU-aware losses like CIoU and quality estimation heads that predict IoU directly)',
            'Mistake 3: NMS threshold set too low (0.3) causing merged boxes or too high (0.7) causing missed duplicates (fix: tune NMS on validation data; consider soft-NMS or learned NMS for crowded scenes)',
            'Mistake 4: Training on images without sufficient background negatives (fix: hard negative mining or focal loss addresses the extreme foreground/background imbalance in dense detectors)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Object detection powers visual understanding in nearly every deployed vision system.',
          list: [
            'Autonomous vehicles: YOLO/SSD variants run at 30+ FPS to detect cars, pedestrians, cyclists, and traffic signs in real time',
            'Retail analytics: overhead cameras detect and track shoppers and products to analyze store traffic patterns and shelf inventory',
            'Security and surveillance: face and person detection triggers alerts or records events of interest in crowded environments',
            'Industrial automation: defect detection on production lines uses customized detectors to find scratches, dents, and misaligned parts'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Object detection outputs bounding boxes with class labels and confidence scores',
            'Two-stage detectors prioritize accuracy; single-stage detectors prioritize speed',
            'Box regression predicts offsets relative to anchor boxes or reference points',
            'Multi-scale detection requires FPN or multi-scale anchors to handle objects of varying sizes',
            'NMS removes duplicate detections; IoU-based losses improve box quality estimation'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do single-stage detectors need focal loss?\nAns: Dense detectors evaluate thousands of anchors per image, creating extreme class imbalance (mostly negatives); focal loss down-weights easy negatives.',
            'Q2: What does Non-Maximum Suppression (NMS) do?\nAns: It removes overlapping bounding boxes for the same object, keeping only the highest-confidence prediction.',
            'Q3: Why is IoU preferred over L2 distance for bounding box regression?\nAns: IoU directly measures overlap quality and is scale-invariant; L2 distance can be small for non-overlapping boxes if they are close in coordinate space.'
          ]
        }
      ]
    },
    'face-detection-cv': {
      title: 'Face Detection',
      subtitle: 'Locating human faces in images and videos',
      sections: [
        {
          heading: 'What is Face Detection?',
          text: '<strong>Face detection</strong> is a specialized form of object detection focused on finding human faces in visual data. It must handle extreme variations in pose, scale, illumination, occlusion, and facial appearance. Because faces are highly structured (two eyes, nose, mouth in a rough geometric arrangement), detectors can exploit this prior knowledge for efficiency and accuracy.',
          list: [
            'Face detection is the first step in face recognition, verification, alignment, and analysis pipelines',
            'Challenges include profile views, partial occlusion (masks, sunglasses), varying expressions, and extreme lighting',
            'Classical methods used Haar cascades or HOG + SVM; modern methods use deep CNNs (MTCNN, RetinaFace, YuNet)',
            'Real-time face detection is required for video conferencing, photography autofocus, and access control systems'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The classic <strong>Viola-Jones</strong> detector uses AdaBoost on Haar-like features and an integral image for real-time detection.',
          example: {
            title: 'Viola-Jones Detection Cascade',
            code: 'Haar-like features (rectangular filters):\n  Value = Σ(pixels in white rects) - Σ(pixels in black rects)\n\nIntegral image II(x,y):\n  II(x,y) = Σᵢ≤x,ⱼ≤y I(i,j)\n  → Any rectangle sum in O(1) time\n\nAdaBoost training:\n  1. Generate thousands of Haar features\n  2. Select best weak classifiers\n  3. Combine into strong classifier\n\nCascade architecture:\n  Stage 1: simple, rejects most non-faces\n  Stage 2: more complex\n  ...\n  Stage N: full classifier\n\nResult: fast rejection of background windows.',
            output: 'The cascade processes only ~10% of windows with all stages, achieving real-time speeds.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Classical vs modern face detection approaches.',
          table: {
            headers: ['Method', 'Features', 'Speed', 'Accuracy', 'Era'],
            rows: [
              ['Viola-Jones', 'Haar + AdaBoost', 'Very fast (CPU)', 'Moderate', '2001'],
              ['HOG + SVM', 'HOG descriptor', 'Medium', 'Good', '2005–2010'],
              ['DPM', 'Part-based model', 'Slow', 'Good', '2010–2013'],
              ['MTCNN', 'CNN cascade (P/R/O nets)', 'Medium', 'High', '2016'],
              ['RetinaFace', 'ResNet + FPN + multi-task', 'Fast (GPU)', 'Very high', '2020'],
              ['YuNet', 'Ultra-light CNN', 'Very fast (CPU)', 'High', '2022']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training on frontal faces only and expecting profile detection (fix: include multi-pose data or use pose-invariant anchors; modern detectors train on datasets like WIDERFace with extreme pose variation)',
            'Mistake 2: Using a single detection scale for group photos (fix: face sizes range from tiny (background) to large (foreground); run detection on an image pyramid or use FPN to natively handle scale variation)',
            'Mistake 3: Ignoring detection confidence thresholds (fix: tune the threshold to balance false positives and missed detections; lower thresholds for security applications, higher for photography)',
            'Mistake 4: Skipping face alignment before recognition (fix: detected faces should be aligned to a canonical pose using landmark detection; recognition accuracy degrades significantly on unaligned faces)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Face detection is the entry point for all face-related AI systems.',
          list: [
            'Smartphone cameras: real-time face detection drives autofocus, exposure, and portrait mode blur effects',
            'Video conferencing: face detection centers the crop on the speaker and enables background replacement',
            'Access control: detection + recognition pipelines authenticate employees at secure building entrances',
            'Social media: automatic face detection suggests photo tags and organizes albums by person'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Face detection finds human faces regardless of pose, scale, lighting, and partial occlusion',
            'Viola-Jones introduced the cascade architecture with integral images for real-time CPU detection',
            'Modern CNN-based detectors (RetinaFace, YuNet) achieve far higher accuracy with multi-task learning',
            'Multi-scale processing is essential because face sizes vary enormously within a single image',
            'Face detection is always followed by alignment (landmark detection) before recognition or analysis'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the integral image critical for Viola-Jones speed?\nAns: It allows rectangular Haar feature computation in constant time, regardless of rectangle size.',
            'Q2: What is the purpose of the cascade in Viola-Jones?\nAns: Early stages are simple and quickly reject non-face windows; only promising windows reach expensive later stages.',
            'Q3: Why do modern face detectors output landmarks in addition to bounding boxes?\nAns: Landmarks enable geometric normalization (alignment), which dramatically improves downstream recognition accuracy.'
          ]
        }
      ]
    },
    'image-classification': {
      title: 'Image Classification',
      subtitle: 'Assigning a single label to an entire image',
      sections: [
        {
          heading: 'What is Image Classification?',
          text: '<strong>Image classification</strong> assigns a single category label to an entire image. It answers the question "What is in this image?" without specifying where objects are located. While simpler than detection or segmentation, classification is foundational — the encoder backbones trained for classification (ResNet, EfficientNet, ViT) are reused as feature extractors across nearly all vision tasks.',
          list: [
            'Classification models map an image to a probability distribution over predefined classes',
            'Convolutional Neural Networks (CNNs) dominated from 2012–2020; Vision Transformers (ViT) are now competitive',
            'Transfer learning: pre-trained classification backbones are fine-tuned for new tasks with limited data',
            'Challenges include background clutter, occlusion, intra-class variation, and adversarial perturbations'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Classification is trained with cross-entropy loss, measuring the divergence between predicted probabilities and the true one-hot label.',
          example: {
            title: 'Softmax + Cross-Entropy',
            code: 'Logits (pre-softmax scores):\n  z = f_θ(x)  where f_θ is the CNN/ViT\n\nSoftmax probabilities:\n  pᵢ = e^(zᵢ) / Σⱼ e^(zⱼ)\n\nCross-entropy loss (for true class y):\n  L = -log(p_y) = -z_y + log(Σⱼ e^(zⱼ))\n\nTop-1 / Top-5 accuracy:\n  Top-1: predicted class = true class?\n  Top-5: true class in top 5 predictions?\n\nLabel smoothing (regularization):\n  y_smooth = (1-ε)·y_onehot + ε/K\n  Prevents overconfidence.',
            output: 'Cross-entropy loss penalizes incorrect confident predictions more heavily than uncertain ones.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CNN vs Vision Transformer architectures for classification.',
          table: {
            headers: ['Property', 'CNN (ResNet)', 'Vision Transformer (ViT)'],
            rows: [
              ['Inductive bias', 'Locality, translation invariance', 'Minimal — learned from data'],
              ['Computation', 'Convolutions (parameter sharing)', 'Self-attention (global interactions)'],
              ['Data efficiency', 'Better on small datasets', 'Needs large datasets (ImageNet-21k, JFT)'],
              ['Scale invariance', 'Built-in via pooling', 'Requires multi-scale training'],
              ['Interpretability', 'Feature maps visualize filters', 'Attention maps show relevance'],
              ['Typical accuracy', 'Strong baselines', 'State-of-the-art with sufficient data']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training a large model from scratch on a small dataset (fix: use transfer learning — initialize with ImageNet pre-trained weights and fine-tune; this typically outperforms training from scratch by large margins)',
            'Mistake 2: Not normalizing input images with the same statistics used during pre-training (fix: use the exact mean and std from the pre-training dataset, e.g., ImageNet [0.485, 0.456, 0.406] and [0.229, 0.224, 0.225])',
            'Mistake 3: Expecting high accuracy with heavy class imbalance and no mitigation (fix: use class-weighted loss, oversampling rare classes, or focal loss to prevent the model from ignoring minority classes)',
            'Mistake 4: Evaluating only on training distribution without testing robustness (fix: evaluate on out-of-distribution data, corrupted images, and adversarial examples to understand real-world reliability)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Classification backbones power the majority of deployed computer vision systems.',
          list: [
            'Medical diagnosis: chest X-ray classification detects pneumonia, tuberculosis, and COVID-19 patterns from radiographs',
            'Content moderation: image classifiers flag inappropriate content categories (violence, adult material) for review or automatic filtering',
            'Agriculture: drone imagery is classified to identify crop types, stress levels, and disease outbreaks across large farms',
            'E-commerce: product images are automatically categorized into taxonomy hierarchies for search and recommendation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image classification assigns a single category label to an entire image',
            'CNNs use inductive biases (locality, translation invariance); Vision Transformers learn global patterns from large data',
            'Cross-entropy loss with softmax is the standard training objective',
            'Transfer learning from ImageNet pre-trained models is the dominant approach for limited-data tasks',
            'Always use the same normalization statistics as the pre-training dataset when applying transfer learning'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why do Vision Transformers need more data than CNNs?\nAns: CNNs have built-in inductive biases (locality, translation invariance); ViTs learn these from scratch and need large datasets to discover them.',
            'Q2: What does label smoothing prevent?\nAns: It prevents the model from becoming overconfident (predicting probabilities near 1.0), improving generalization and calibration.',
            'Q3: Why is transfer learning so effective for image classification?\nAns: Pre-trained models have already learned generic visual features (edges, textures, shapes) from large datasets; fine-tuning adapts these to the target task with minimal data.'
          ]
        }
      ]
    },
    'image-retrieval': {
      title: 'Image Retrieval',
      subtitle: 'Finding visually similar images from large databases',
      sections: [
        {
          heading: 'What is Image Retrieval?',
          text: '<strong>Image retrieval</strong> (or content-based image retrieval, CBIR) finds images in a database that are visually similar to a query image. Unlike classification, retrieval does not require predefined categories — it finds images based on visual content, enabling search by example, near-duplicate detection, and recommendation.',
          list: [
            'Retrieval encodes images into compact feature vectors (embeddings) in a metric space',
            'Similar images have embeddings that are close in distance (cosine, Euclidean)',
            'Approximate nearest neighbor (ANN) search scales retrieval to billions of images',
            'Applications include reverse image search, product recommendation, copyright detection, and face search'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Triplet loss trains the embedding network by pushing positive pairs closer and negative pairs farther apart in the embedding space.',
          example: {
            title: 'Triplet Loss for Retrieval',
            code: 'Triplet: (anchor a, positive p, negative n)\n\nEmbedding network: f(x) → R^D\n\nDistance: d(a,b) = ‖f(a) - f(b)‖²\n\nTriplet loss:\n  L = max(0, d(a,p) - d(a,n) + margin)\n\nHard negative mining:\n  Select negatives where d(a,n) < d(a,p)\n  → Most informative for training\n\nSiamese network variant:\n  L = (1-Y)·½·d² + Y·½·max(0, m-d)²\n  Y=1 for dissimilar, Y=0 for similar.',
            output: 'Triplet loss learns an embedding space where visual similarity corresponds to geometric proximity.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Global vs local feature retrieval approaches.',
          table: {
            headers: ['Approach', 'Representation', 'Invariant To', 'Best For'],
            rows: [
              ['Global CNN features', 'Final FC layer or pooled features', 'Scene-level similarity', 'Similar scenes, domains'],
              ['Fine-tuned embeddings', 'Task-specific trained embeddings', 'Learned invariances', 'Domain-specific retrieval'],
              ['Local features (SIFT)', 'Sparse keypoint descriptors', 'Partial occlusion', 'Object instance retrieval'],
              ['VLAD / BoW', 'Aggregated local descriptors', 'Partial views', 'Landmark / place recognition'],
              ['Deep metric learning', 'Learned embeddings', 'Semantic similarity', 'Face, product, person re-ID']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using raw pre-trained classification features without fine-tuning (fix: classification features are task-specific; for retrieval, fine-tune with metric learning losses (triplet, contrastive) on the target domain)',
            'Mistake 2: Brute-force nearest neighbor search on millions of embeddings (fix: use approximate nearest neighbor libraries like FAISS, Annoy, or HNSW for sub-linear search time with minimal accuracy loss)',
            'Mistake 3: Not normalizing embeddings before computing distances (fix: L2-normalize embeddings so cosine similarity and Euclidean distance are equivalent; this stabilizes training and search)',
            'Mistake 4: Using easy random negatives instead of hard negatives in triplet loss (fix: hard negative mining selects challenging negatives that actually violate the margin, providing much stronger gradients)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Image retrieval connects visual content at scale across domains.',
          list: [
            'Reverse image search: Google Images and Bing find visually similar or identical images across the web given a query photo',
            'E-commerce: visual search lets shoppers upload a photo and find similar products (clothing, furniture) from a catalog',
            'Face search: law enforcement and social platforms use face retrieval to find a person across millions of enrolled images',
            'Copyright enforcement: content owners detect unauthorized use of their images by retrieving near-duplicates from social media and websites'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image retrieval finds similar images by comparing embeddings in a learned metric space',
            'Triplet loss and contrastive loss train networks to produce embeddings where visual similarity equals geometric proximity',
            'Approximate nearest neighbor search (FAISS, HNSW) scales retrieval to billions of images',
            'Always L2-normalize embeddings before distance computation for stable comparisons',
            'Hard negative mining is essential — random negatives provide weak training signals'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is triplet loss preferred over simple classification loss for retrieval?\nAns: Classification learns decision boundaries between classes; triplet loss learns a metric space where distance directly encodes visual similarity, enabling search across open-ended databases.',
            'Q2: What is the role of the margin in triplet loss?\nAns: It enforces a minimum separation between positive and negative distances, preventing the model from collapsing all embeddings to the same point.',
            'Q3: Why use approximate nearest neighbor instead of exact nearest neighbor?\nAns: Exact NN is O(N) and becomes infeasible for large databases; ANN algorithms achieve near-exact accuracy with sub-linear (log N) search time.'
          ]
        }
      ]
    }
  }
};
