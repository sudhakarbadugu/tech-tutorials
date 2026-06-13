export const cvModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Computer Vision',
    topics: [
      { 'id': 'intro-cv', 'title': 'Introduction to Computer Vision' },
      { 'id': 'image-formation', 'title': 'Image Formation' },
      { 'id': 'color-spaces', 'title': 'Color Spaces' },
      { 'id': 'image-filtering', 'title': 'Image Filtering' },
      { 'id': 'edge-detection', 'title': 'Edge Detection' },
    ]
  }
};

export const cvModule1Content = {
  module1: {
    'intro-cv': {
      'title': 'Introduction to Computer Vision',
      'subtitle': 'From pixels to understanding — how machines learn to see',
      'sections': [
        {
          'heading': 'What is Computer Vision?',
          'text': 'Computer Vision (CV) is a field of artificial intelligence that enables machines to derive meaningful information from digital images, videos, and other visual inputs. It mimics human vision by processing visual data and making decisions based on what it sees.',
          'list': [
            'CV bridges the gap between raw pixels and semantic understanding',
            'It combines image processing, pattern recognition, and machine learning',
            'Modern CV powers autonomous vehicles, medical imaging, facial recognition, and AR/VR',
            'The field spans low-level processing (filters, edges) to high-level reasoning (scene understanding, captioning)'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The fundamental image formation model describes how a 3D world point projects onto a 2D image plane.',
          'example': {
            'title': 'Pinhole Camera Model',
            'code': `World point: P = (X, Y, Z)
Image point: p = (x, y)
Focal length: f

Perspective projection:
  x = f · X / Z
  y = f · Y / Z

In matrix form (homogeneous coordinates):
  [x]   [f  0  0  0]   [X]
  [y] = [0  f  0  0] · [Y]
  [1]   [0  0  1  0]   [Z]
                      [1]

Key insight:
  • Objects farther away (larger Z) appear smaller
  • Parallel lines in 3D converge in the image`,
            'output': 'The pinhole model is the geometric foundation of all camera-based vision systems.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Computer Vision vs Image Processing vs Machine Learning.',
          'table': {
            'headers': ['Aspect', 'Image Processing', 'Computer Vision', 'Machine Learning'],
            'rows': [
              ['Goal', 'Enhance or transform images', 'Extract meaning and understanding', 'Learn patterns from data'],
              ['Output', 'Another image', 'Decisions, labels, measurements', 'Models, predictions'],
              ['Techniques', 'Filters, transforms, compression', 'Feature extraction, geometry, recognition', 'Training, optimization, inference'],
              ['Example', 'Sharpen a blurry photo', 'Detect pedestrians in a scene', 'Classify images into categories']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Confusing image processing with computer vision — image processing manipulates pixels, while CV extracts meaning (fix: clarify whether your goal is enhancement or understanding)',
            'Mistake 2: Ignoring camera calibration — uncalibrated cameras introduce distortions that break geometric algorithms (fix: always calibrate intrinsics and extrinsics before 3D tasks)',
            'Mistake 3: Assuming pixels directly represent real-world measurements — perspective and lens distortion alter size and shape (fix: use calibrated projections and account for depth)',
            'Mistake 4: Overlooking lighting and color variations — algorithms that work in one lighting condition may fail in another (fix: test under varying illumination, use color constancy techniques)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Computer vision is embedded in everyday technology and critical infrastructure.',
          'list': [
            'Autonomous vehicles: detecting lanes, pedestrians, traffic signs from camera feeds in real time',
            'Medical imaging: identifying tumors in MRI/CT scans, guiding surgical robots, and grading diseases',
            'Facial recognition: unlocking phones, airport security, attendance systems, and identity verification',
            'Industrial inspection: detecting defects on production lines with sub-millimeter precision at high speed',
            'Augmented reality: overlaying digital objects onto the real world by understanding camera pose and scene geometry'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Computer Vision enables machines to interpret visual information from images and videos',
            'The pinhole camera model governs how 3D scenes project onto 2D image planes',
            'CV spans low-level processing (filters, edges) to high-level understanding (recognition, scene analysis)',
            'It differs from image processing (pixel manipulation) and machine learning (general pattern learning)',
            'Applications include autonomous driving, healthcare, security, manufacturing, and AR/VR'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: What is the primary difference between image processing and computer vision?\nAns: Image processing transforms or enhances images; computer vision extracts meaning and understanding from them.',
            'Q2: In the pinhole camera model, what happens to the image size as an object moves farther away?\nAns: The image size decreases because x = f·X/Z and y = f·Y/Z — larger Z means smaller projected coordinates.',
            'Q3: Name three real-world applications of computer vision.\nAns: Autonomous driving, medical imaging analysis, facial recognition, industrial defect inspection, augmented reality.',
            'Q4: Why is camera calibration important in computer vision?\nAns: Uncalibrated cameras introduce lens distortion and unknown focal lengths, breaking geometric algorithms and 3D reconstruction accuracy.'
          ]
        }
      ]
    },
    'image-formation': {
      'title': 'Image Formation',
      'subtitle': 'How 3D scenes become 2D images — geometry, optics, and sensing',
      'sections': [
        {
          'heading': 'What is Image Formation?',
          'text': 'Image formation is the physical and mathematical process by which a 3D scene is captured as a 2D image. It involves the interaction of light with objects, the optics of the camera lens, and the sensor that records intensity values.',
          'list': [
            'Light from a source reflects off object surfaces and travels through the camera lens',
            'The lens focuses light onto an image sensor (CCD or CMOS), creating a 2D projection',
            'The geometry of projection determines size, shape, and depth relationships in the image',
            'Color and intensity depend on surface reflectance, illumination spectrum, and sensor response'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The thin lens equation and perspective projection govern how the physical world maps to pixel coordinates.',
          'example': {
            'title': 'Thin Lens & Perspective Projection',
            'code': `Thin Lens Equation:
  1/f = 1/u + 1/v

Where:
  f = focal length
  u = object distance (from lens)
  v = image distance (from lens)

Perspective projection:
  x = f · X / Z
  y = f · Y / Z

Magnification:
  m = v/u = image_size / object_size

Depth of field:
  DOF ≈ 2 · u² · N · c / f²
  (N = f-number, c = circle of confusion)`,
            'output': 'The thin lens equation links object distance to image distance; perspective projection maps 3D to 2D.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Perspective vs orthographic projection.',
          'table': {
            'headers': ['Property', 'Perspective Projection', 'Orthographic Projection'],
            'rows': [
              ['Parallel lines', 'Converge to vanishing points', 'Remain parallel'],
              ['Object size', 'Decreases with distance', 'Constant regardless of distance'],
              ['Depth cue', 'Strong (size, convergence)', 'None'],
              ['Realism', 'Matches human vision and photography', 'Used in engineering diagrams'],
              ['Use case', 'Photography, realistic rendering', 'CAD, technical drawings, distant objects']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Assuming parallel lines stay parallel in images — perspective projection causes convergence (fix: account for vanishing points in geometric algorithms)',
            'Mistake 2: Using the same focal length assumption for all cameras — different lenses distort scenes differently (fix: calibrate each camera individually)',
            'Mistake 3: Ignoring lens distortion — real lenses introduce radial and tangential distortion (fix: apply distortion coefficients (k1, k2, p1, p2) in calibration)',
            'Mistake 4: Confusing image distance with object distance — these are related by the lens equation but are not the same (fix: track which side of the lens you are measuring)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Understanding image formation is essential for any system that interprets camera data.',
          'list': [
            'Camera calibration for SLAM: precise image formation models enable accurate 3D mapping from 2D video',
            'Depth estimation: stereo vision uses the geometry of two viewpoints to triangulate depth from disparity',
            'Photogrammetry: reconstructing 3D terrain and buildings from aerial photographs using projection geometry',
            'Medical endoscopy: correcting wide-angle lens distortion to accurately measure tissue sizes in images',
            'Autonomous drones: using perspective cues to estimate altitude and ground distance from camera feeds'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Image formation combines light physics, lens optics, and sensor technology to create 2D images',
            'The thin lens equation (1/f = 1/u + 1/v) governs focus and magnification',
            'Perspective projection maps 3D world coordinates to 2D image coordinates via x = f·X/Z, y = f·Y/Z',
            'Perspective projection differs from orthographic: parallel lines converge and size decreases with distance',
            'Lens distortion (radial, tangential) must be calibrated for accurate geometric computer vision'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: What is the thin lens equation and what do its variables represent?\nAns: 1/f = 1/u + 1/v, where f is focal length, u is object distance, and v is image distance.',
            'Q2: How does perspective projection differ from orthographic projection?\nAns: Perspective projection makes parallel lines converge and objects appear smaller with distance; orthographic projection preserves parallelism and size.',
            'Q3: Why do real cameras require distortion correction?\nAns: Real lenses introduce radial distortion (barrel or pincushion) and tangential distortion (decentering), which bend straight lines in the image.',
            'Q4: If an object moves twice as far away, how does its image size change under perspective projection?\nAns: The image size is halved because projected size is inversely proportional to depth (x = f·X/Z).' 
          ]
        }
      ]
    },
    'color-spaces': {
      'title': 'Color Spaces',
      'subtitle': 'Representing color digitally — from RGB to perceptual models',
      'sections': [
        {
          'heading': 'What is a Color Space?',
          'text': 'A color space is a mathematical model that defines how colors are represented as tuples of numbers (typically three or four values). Different color spaces are optimized for different purposes: display, printing, image processing, or human perception.',
          'list': [
            'RGB (Red, Green, Blue): additive color model used for displays and cameras',
            'HSV/HSL (Hue, Saturation, Value/Lightness): intuitive for color selection and segmentation',
            'CMYK (Cyan, Magenta, Yellow, Key/Black): subtractive model for printing',
            'CIE Lab: perceptually uniform — equal numerical differences correspond to equal perceived differences',
            'Grayscale: single-channel intensity, useful for simplicity and many algorithms'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'Converting between color spaces and understanding grayscale computation.',
          'example': {
            'title': 'RGB to Grayscale and RGB to HSV',
            'code': `RGB to Grayscale (luminance):
  Y = 0.299·R + 0.587·G + 0.114·B

RGB to HSV:
  Max = max(R, G, B)
  Min = min(R, G, B)
  Δ = Max - Min

  V = Max
  S = 0 if Max = 0 else Δ / Max
  H = 0 if Δ = 0
      60° × (G - B)/Δ + 0°   if Max = R
      60° × (B - R)/Δ + 120° if Max = G
      60° × (R - G)/Δ + 240° if Max = B

Color constancy (Gray World):
  R' = R × (μG / μR)
  G' = G
  B' = B × (μG / μB)`,
            'output': 'HSV separates color (H), purity (S), and brightness (V) — ideal for segmentation. Grayscale uses weighted luminance.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'RGB vs HSV vs CIE Lab.',
          'table': {
            'headers': ['Property', 'RGB', 'HSV', 'CIE Lab'],
            'rows': [
              ['Type', 'Device-dependent, additive', 'Intuitive, cylindrical', 'Perceptually uniform'],
              ['Channels', 'Red, Green, Blue', 'Hue, Saturation, Value', 'Lightness, a (green-red), b (blue-yellow)'],
              ['Best for', 'Display, capture, storage', 'Color picking, thresholding', 'Color difference, matching'],
              ['Perceptual uniformity', 'No', 'Partial', 'Yes'],
              ['Independence', 'Channels are correlated', 'Decouples color and intensity', 'Decouples lightness from color']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using simple average (R+G+B)/3 for grayscale — ignores human luminance sensitivity (fix: use weighted formula Y = 0.299R + 0.587G + 0.114B)',
            'Mistake 2: Thresholding RGB directly for color segmentation — intensity variations break the approach (fix: convert to HSV and threshold H and S independently of V)',
            'Mistake 3: Computing color differences in RGB — Euclidean distance in RGB does not match human perception (fix: use Delta E in CIE Lab space for accurate color comparison)',
            'Mistake 4: Assuming RGB values are directly comparable across different cameras or displays — devices have different gamuts and gamma curves (fix: use standardized spaces like sRGB or CIE XYZ with proper color profiles)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Color spaces are foundational in every vision system that works with color.',
          'list': [
            'Image segmentation: skin detection uses HSV thresholds because skin hue is relatively stable under varying illumination',
            'Color correction: photo editors use Lab space to adjust colors without affecting lightness, preserving natural appearance',
            'Quality control: printing industry uses CMYK and spot colors to ensure consistent brand colors across materials',
            'Medical imaging: pseudocolor (mapping intensity to color) enhances visibility of subtle tissue differences in ultrasound and thermal scans',
            'Autonomous driving: traffic light recognition relies on isolating red, yellow, and green hues in HSV space to handle varying brightness'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'A color space defines how colors are represented numerically for different purposes',
            'RGB is additive and device-dependent; ideal for capture and display but not for perceptual comparison',
            'HSV decouples hue, saturation, and value — making it intuitive for color-based segmentation and selection',
            'CIE Lab is perceptually uniform: equal numerical distance means equal perceived color difference',
            'Grayscale should use luminance weights (0.299R + 0.587G + 0.114B), not a simple average',
            'Color constancy algorithms correct for illumination color to recover surface reflectance'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why is HSV preferred over RGB for color-based segmentation?\nAns: HSV decouples hue (color) from value (brightness), making thresholds robust to illumination changes.',
            'Q2: What is the correct luminance formula for converting RGB to grayscale?\nAns: Y = 0.299·R + 0.587·G + 0.114·B, weighted by human cone sensitivity.',
            'Q3: What does perceptual uniformity mean in CIE Lab?\nAns: Equal numerical differences between Lab values correspond to approximately equal perceived color differences by humans.',
            'Q4: How does the Gray World algorithm achieve color constancy?\nAns: It assumes the average reflectance in a scene is gray, then scales each channel so the means become equal.'
          ]
        }
      ]
    },
    'image-filtering': {
      'title': 'Image Filtering',
      'subtitle': 'Enhancing, smoothing, and transforming images with convolution',
      'sections': [
        {
          'heading': 'What is Image Filtering?',
          'text': 'Image filtering is the process of modifying pixel values by applying a small matrix (kernel or filter) across the image via convolution. Filters can smooth noise, enhance edges, detect patterns, or transform the image for further analysis.',
          'list': [
            'Convolution slides a kernel over the image and computes a weighted sum of neighboring pixels',
            'Linear filters include mean, Gaussian, and derivative filters (Sobel, Laplacian)',
            'Non-linear filters include median and bilateral filters, which preserve edges better than linear smoothing',
            'Filtering is the foundation of feature extraction, edge detection, and deep learning convolutions'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The 2D convolution operation and common filter kernels.',
          'example': {
            'title': '2D Convolution and Common Kernels',
            'code': `2D Convolution:
  (I ∗ K)(x, y) = Σᵢ Σⱼ I(x+i, y+j) · K(i, j)

Gaussian smoothing (3×3, σ ≈ 0.85):
  [1  2  1]
  [2  4  2] / 16
  [1  2  1]

Sobel X (vertical edges):
  [-1  0  1]
  [-2  0  2]
  [-1  0  1]

Sobel Y (horizontal edges):
  [-1 -2 -1]
  [ 0  0  0]
  [ 1  2  1]

Laplacian (second derivative, omnidirectional edges):
  [ 0  1  0]
  [ 1 -4  1]
  [ 0  1  0]

Sharpening:
  I_sharp = I + α · (I - I_blurred)`,
            'output': 'Gaussian smooths noise; Sobel detects oriented edges; Laplacian detects rapid intensity changes in all directions.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Linear vs non-linear filtering.',
          'table': {
            'headers': ['Property', 'Linear Filter', 'Non-Linear Filter'],
            'rows': [
              ['Operation', 'Convolution with fixed kernel', 'Pixel-dependent operation'],
              ['Noise handling', 'Gaussian, mean reduce Gaussian noise', 'Median removes salt-and-pepper noise'],
              ['Edge preservation', 'Blurs edges along with noise', 'Bilateral and median preserve edges'],
              ['Mathematical property', 'Superposition holds: f(a+b) = f(a)+f(b)', 'No superposition'],
              ['Examples', 'Mean, Gaussian, Sobel, Laplacian', 'Median, bilateral, morphological']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using a large Gaussian kernel without considering computational cost — larger kernels mean more multiplications per pixel (fix: use separable 1D kernels or approximate with multiple small convolutions)',
            'Mistake 2: Applying edge detection directly on raw noisy images — noise creates spurious edges (fix: smooth with Gaussian first, then apply derivative filters)',
            'Mistake 3: Confusing Sobel X and Y — Sobel X detects vertical edges (strong response where horizontal gradient is high), Sobel Y detects horizontal edges (fix: remember X kernel has vertical column structure [-1,0,1])',
            'Mistake 4: Forgetting to normalize kernel weights — unnormalized kernels alter image brightness (fix: ensure kernel coefficients sum to 1 for smoothing, or account for the scale in interpretation)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Filtering is the first step in nearly every computer vision pipeline.',
          'list': [
            'Noise reduction: medical and satellite images are smoothed before analysis to prevent false detections',
            'Edge enhancement: sharpening filters improve readability of license plates and document scans',
            'Feature extraction: Sobel and Laplacian responses feed into higher-level algorithms like Hough transform and segmentation',
            'Deep learning: convolutional neural networks learn filter weights automatically from data, replacing hand-crafted kernels',
            'Bilateral filtering: used in portrait mode on smartphones to blur backgrounds while keeping facial edges sharp'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Image filtering modifies pixel values via convolution with a kernel',
            'Gaussian smoothing reduces noise using weighted averages based on spatial distance',
            'Sobel filters detect oriented edges using first derivative kernels in X and Y directions',
            'Laplacian detects edges in all directions using the second derivative (sum of second derivatives)',
            'Non-linear filters like median and bilateral preserve edges better than linear smoothers',
            'Filtering is the foundational step for feature extraction, segmentation, and deep learning'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: What is the purpose of Gaussian smoothing before edge detection?\nAns: It reduces high-frequency noise that would otherwise create false edges in derivative filters.',
            'Q2: How does the Sobel X kernel detect vertical edges?\nAns: It computes the horizontal gradient (differences across columns); strong responses occur where intensity changes horizontally, indicating vertical edges.',
            'Q3: Why does the Laplacian detect edges in all directions?\nAns: It computes the sum of second derivatives (∂²I/∂x² + ∂²I/∂y²), responding to rapid intensity changes regardless of orientation.',
            'Q4: What is the advantage of a bilateral filter over a Gaussian filter?\nAns: Bilateral filtering considers both spatial distance and intensity similarity, smoothing noise without blurring edges.'
          ]
        }
      ]
    },
    'edge-detection': {
      'title': 'Edge Detection',
      'subtitle': 'Finding boundaries and discontinuities in images',
      'sections': [
        {
          'heading': 'What is Edge Detection?',
          'text': 'Edge detection is the process of identifying points in an image where brightness changes sharply. Edges correspond to object boundaries, surface orientation changes, depth discontinuities, or shadow boundaries — making them critical cues for segmentation, recognition, and 3D reconstruction.',
          'list': [
            'Edges are local maxima of the image gradient magnitude',
            'First-derivative methods (Sobel, Prewitt) find edges by detecting intensity changes',
            'Second-derivative methods (Laplacian, LoG) find zero-crossings at edge locations',
            'The Canny edge detector is the gold standard, combining smoothing, gradient computation, non-maximum suppression, and hysteresis thresholding'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The Canny edge detector and gradient-based edge formulations.',
          'example': {
            'title': 'Canny Edge Detector Algorithm',
            'code': `Step 1 — Gaussian Smoothing:
  I_smooth = I ∗ G_σ

Step 2 — Gradient Computation:
  Gx = I_smooth ∗ Sobel_X
  Gy = I_smooth ∗ Sobel_Y
  Magnitude: M = √(Gx² + Gy²)
  Direction: θ = atan2(Gy, Gx)

Step 3 — Non-Maximum Suppression (NMS):
  For each pixel, compare M with neighbors
  along gradient direction θ
  If M is not the local maximum → suppress to 0

Step 4 — Hysteresis Thresholding:
  High threshold (T_high): strong edges → keep
  Low threshold (T_low): weak edges → keep only if connected to strong
  Below T_low: noise → discard`,
            'output': 'Canny produces thin, connected, accurate edges by suppressing non-maxima and linking weak edges to strong ones.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Gradient magnitude vs gradient direction vs Laplacian zero-crossings.',
          'table': {
            'headers': ['Method', 'What it measures', 'Edge indication', 'Sensitivity'],
            'rows': [
              ['Gradient magnitude', 'Strength of intensity change', 'High values = strong edges', 'Sensitive to noise without smoothing'],
              ['Gradient direction', 'Orientation of intensity change', 'Used in NMS and HOG features', 'Requires magnitude for detection'],
              ['Laplacian', 'Second derivative (curvature)', 'Zero-crossing = edge location', 'Very sensitive to noise'],
              ['Canny', 'Multi-step pipeline', 'Connected thin edges after NMS + hysteresis', 'Robust with proper thresholds']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Running Canny without Gaussian smoothing first — raw noise creates spurious edges (fix: always apply a Gaussian blur with σ proportional to noise level before gradients)',
            'Mistake 2: Using symmetric high/low thresholds in Canny — a tight threshold gap misses edges, a wide gap admits noise (fix: typical ratio is T_high ≈ 2-3 × T_low; tune for your dataset)',
            'Mistake 3: Treating all zero-crossings of the Laplacian as edges — many are caused by noise or gradual shading (fix: require zero-crossings to coincide with high gradient magnitude)',
            'Mistake 4: Ignoring scale — edges exist at different resolutions (fine texture vs object boundaries) (fix: use scale-space approaches like Laplacian of Gaussian with multiple σ values)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Edge detection is a universal preprocessing step in vision systems.',
          'list': [
            'Medical imaging: detecting organ boundaries in ultrasound and CT scans for volume measurement',
            'Autonomous driving: lane detection uses edge responses from road markings combined with Hough transform for line fitting',
            'Industrial inspection: measuring component dimensions by detecting precise edges on high-resolution images',
            'Document analysis: deskewing and segmenting text regions by finding page and text line boundaries',
            'Photography: portrait segmentation uses edge-aware algorithms to separate subjects from backgrounds'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Edges mark boundaries where image intensity changes abruptly',
            'First-derivative methods (Sobel) detect edges via gradient magnitude maxima',
            'Second-derivative methods (Laplacian) detect edges via zero-crossings',
            'Canny edge detector combines Gaussian smoothing, gradient computation, non-maximum suppression, and hysteresis thresholding',
            'Non-maximum suppression thins edges to a single pixel width along the gradient direction',
            'Hysteresis thresholding links weak edges to strong ones, reducing noise while preserving real boundaries'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: What are the four steps of the Canny edge detector?\nAns: (1) Gaussian smoothing, (2) gradient computation, (3) non-maximum suppression, (4) hysteresis thresholding.',
            'Q2: What is the purpose of non-maximum suppression in Canny?\nAns: It thins thick gradient ridges to a single pixel width by keeping only local maxima along the gradient direction.',
            'Q3: How does hysteresis thresholding reduce noise while keeping real edges?\nAns: Strong edges above T_high are kept immediately; weak edges between T_low and T_high are kept only if connected to strong edges; below T_low are discarded as noise.',
            'Q4: Why is the Laplacian more sensitive to noise than gradient-based methods?\nAns: The Laplacian is a second derivative, amplifying high-frequency noise more than first derivatives do.'
          ]
        }
      ]
    }
  }
};
