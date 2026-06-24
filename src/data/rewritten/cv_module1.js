// Computer Vision — Module 1: Foundations
// Exports: cvModule1Structure (sidebar) + cvModule1Content (topic bodies)
// Enhanced W3Schools-style pedagogy with OpenCV + PyTorch torchvision code.

export const cvModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Computer Vision',
    topics: [
      { id: 'intro-cv', title: 'Introduction to Computer Vision' },
      { id: 'image-formation', title: 'Image Formation' },
      { id: 'color-spaces', title: 'Color Spaces' },
      { id: 'image-filtering', title: 'Image Filtering' },
      { id: 'edge-detection', title: 'Edge Detection' },
    ]
  }
};

export const cvModule1Content = {
  module1: {
    'intro-cv': {
      title: 'Introduction to Computer Vision',
      subtitle: 'From pixels to understanding — how machines learn to see',
      sections: [
        {
          heading: 'What is Computer Vision?',
          text: `Think of a self-driving car approaching a busy intersection. In milliseconds it must spot pedestrians, read a stop sign, estimate distances, and decide whether to brake. A human does this effortlessly — our visual cortex has had 500 million years of evolution. Computer Vision (CV) is the attempt to give machines that same ability: extracting <strong>meaning</strong> from pixels. Curiosity gap: why is vision — something every toddler masters — considered one of the hardest problems in AI? Because an image is just a grid of numbers, and going from numbers to "there is a child crossing the street" requires enormous inference.`,
          list: [
            `CV bridges raw pixels and semantic understanding`,
            `It combines image processing, pattern recognition, and machine learning`,
            `Modern CV powers autonomous vehicles, medical imaging, facial recognition, and AR/VR`,
            `The field spans low-level processing (filters, edges) to high-level reasoning (scene understanding, captioning)`,
            `Deep learning (CNNs, ViTs) has revolutionised CV since 2012`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Imagine looking at a photograph and being asked "what is in this picture?" Your brain instantly decomposes the scene: objects, faces, text, depth, motion. Computer Vision tries to replicate this pipeline computationally — from raw pixel arrays through filtering, feature extraction, and recognition to a semantic decision.</p>`,
            `<p>Technically, a digital image is a 2D (or 3D for color) array of integer values representing intensity. CV algorithms operate on these arrays using signal processing (convolutions, transforms), geometry (camera models, epipolar constraints), and statistical learning (classifiers, neural networks). The modern stack combines OpenCV for classical operations and PyTorch/torchvision for deep-learning models.</p>`,
            `<p>You use CV whenever a machine must <em>perceive</em>: a phone unlocking with your face, a drone avoiding obstacles, a radiologist's AI assistant flagging a tumour, or a retail store counting shoppers. The field sits at the intersection of optics, signal processing, geometry, and machine learning — which is why it is both powerful and challenging.</p>`
          ],
          note: `References: Szeliski, R. (2022), <em>Computer Vision: Algorithms and Applications</em>, 2nd ed.; Forsyth & Ponce (2012), <em>Computer Vision: A Modern Approach</em>.`
        },
        {
          heading: 'Visual Representation',
          code: `The CV pipeline: from pixels to decisions

  Scene → Camera → Image → Processing → Features → Recognition → Decision
  (3D)    (optics)  (2D)    (filters)   (edges,    (CNN,        (drive,
                              corners)    SVM, etc.)   brake, label)

  Image as arrays:
    Grayscale:  H x W        (1 channel)
    Color BGR:  H x W x 3    (Blue, Green, Red — OpenCV default)
    Color RGB:  H x W x 3    (Red, Green, Blue — matplotlib/torchvision)

  Tool roles:
    OpenCV (cv2)       → image I/O, filtering, geometry, classical CV
    PyTorch torchvision → pre-trained models, transforms, datasets
    scikit-image       → complementary image processing utilities`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `The pinhole camera model describes how a 3D world point projects onto a 2D image plane — the geometric foundation of all camera-based vision.`,
          example: {
            title: 'Pinhole camera projection',
            code: `Perspective projection:
  x = f * X / Z
  y = f * Y / Z

In homogeneous coordinates (matrix form):
  [x]   [f  0  0  0]   [X]
  [y] = [0  f  0  0] * [Y]
  [1]   [0  0  1  0]   [Z]
                       [1]

Symbols:
  f       focal length (pixels)
  X,Y,Z   3D world coordinates
  x,y     2D image (pixel) coordinates

Worked example:
  f = 500 px, object at (X,Y,Z) = (200, 150, 5000) mm
  x = 500 * 200 / 5000 = 20 px
  y = 500 * 150 / 5000 = 15 px
  → Object projects to pixel (20, 15) on the image plane

Key insight: objects farther away (larger Z) appear smaller.
  Double Z → image size halves.`,
            output: `The pinhole model is the geometric foundation of all camera-based vision. Real cameras add lens distortion, corrected during calibration.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Load and display an image with OpenCV + torchvision',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt
from torchvision import transforms
from PIL import Image

# OpenCV loads images in BGR; matplotlib expects RGB
img_bgr = cv2.imread('image.jpg')            # H x W x 3, uint8
if img_bgr is None:
    # create a synthetic image for demonstration
    img_bgr = np.zeros((256, 256, 3), dtype=np.uint8)
    cv2.rectangle(img_bgr, (60, 60), (200, 200), (0, 255, 0), -1)
    cv2.putText(img_bgr, 'CV', (90, 140), cv2.FONT_HERSHEY_SIMPLEX, 2, (255,255,255), 3)

img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
gray    = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)

print("BGR shape:", img_bgr.shape, "dtype:", img_bgr.dtype)
print("Gray shape:", gray.shape)

# torchvision transform pipeline (used in deep learning workflows)
transform = transforms.Compose([
    transforms.ToPILImage(),
    transforms.Resize((224, 224)),
    transforms.ToTensor(),                    # HWC -> CHW, [0,1]
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225]),
])
tensor = transform(img_rgb)
print("Tensor shape:", tensor.shape, "  (C, H, W)  range:", round(float(tensor.min()),2), "to", round(float(tensor.max()),2))

fig, ax = plt.subplots(1, 3, figsize=(12, 4))
ax[0].imshow(img_rgb);  ax[0].set_title('RGB (cv2.cvtColor)')
ax[1].imshow(gray, cmap='gray'); ax[1].set_title('Grayscale')
ax[2].imshow(np.transpose(tensor.numpy(), (1,2,0))); ax[2].set_title('torchvision tensor')
plt.tight_layout(); plt.show()`,
            output: `BGR shape: (256, 256, 3) dtype: uint8; Gray shape: (256, 256); Tensor shape: torch.Size([3, 224, 224]) (C, H, W) range: -2.12 to 2.64. Three side-by-side images: color, grayscale, and normalised tensor.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Choose your tools:</strong> WHY — different tasks need different libraries; HOW — OpenCV for I/O & classical ops, torchvision for deep models.`,
            `<strong>2. Load the image:</strong> WHY — everything starts with pixels; HOW — cv2.imread (BGR) or PIL.Image.open (RGB).`,
            `<strong>3. Convert color spaces as needed:</strong> WHY — OpenCV uses BGR, matplotlib uses RGB; HOW — cv2.cvtColor.`,
            `<strong>4. Preprocess:</strong> WHY — models need specific sizes/normalisation; HOW — torchvision.transforms or cv2.resize.`,
            `<strong>5. Run your pipeline:</strong> HOW — filtering → features → model → decision.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Aspect', 'Image Processing', 'Computer Vision', 'Machine Learning'],
            rows: [
              ['Goal', 'Enhance or transform images', 'Extract meaning and understanding', 'Learn patterns from data'],
              ['Output', 'Another image', 'Decisions, labels, measurements', 'Models, predictions'],
              ['Techniques', 'Filters, transforms, compression', 'Feature extraction, geometry, recognition', 'Training, optimisation, inference'],
              ['Tools', 'OpenCV, scikit-image', 'OpenCV + PyTorch/torchvision', 'PyTorch, TensorFlow, scikit-learn'],
              ['Example', 'Sharpen a blurry photo', 'Detect pedestrians in a scene', 'Classify images into categories']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using BGR images with matplotlib (fix: convert cv2.cvtColor(img, cv2.COLOR_BGR2RGB) — otherwise red and blue channels are swapped).`,
            `Mistake 2: Forgetting that torchvision expects CHW float tensors, not HWC uint8 arrays (fix: use transforms.ToTensor() which handles the conversion).`,
            `Mistake 3: Ignoring camera calibration — uncalibrated cameras introduce distortions that break geometric algorithms (fix: calibrate intrinsics before 3D tasks).`,
            `Mistake 4: Confusing image processing with computer vision — image processing manipulates pixels, CV extracts meaning (fix: clarify whether your goal is enhancement or understanding).`
          ],
          code: `# WRONG: display a BGR image directly in matplotlib
plt.imshow(cv2.imread('image.jpg'))    # red and blue are swapped!

# RIGHT: convert BGR to RGB first
img = cv2.imread('image.jpg')
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Waymo — autonomous driving vision system.</strong> Waymo's self-driving cars use a multi-sensor stack with cameras, LiDAR, and radar. The camera pipeline processes 8 high-resolution video streams at 20 Hz: each frame goes through image rectification, object detection (a custom 2D detector), tracking, and scene understanding. The system detects pedestrians, vehicles, cyclists, and traffic signs simultaneously. Waymo reports their vision system achieves <strong>>99.99% pedestrian detection recall</strong> at <50m in daylight, enabling safe emergency braking. The pipeline combines classical OpenCV-style rectification with deep-learning detectors trained on billions of miles of driving data.`,
          list: [
            `Industry: Autonomous vehicles`,
            `Dataset: 8 camera streams at 20 Hz, billions of driving miles`,
            `Model: Classical rectification + custom deep CNN detector + tracker`,
            `Results: >99.99% pedestrian detection recall at <50m`,
            `Impact: Safe driverless ride-hailing in Phoenix, SF, and LA`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `CV = extracting meaning from pixel arrays; harder than it looks.`,
            `Pinhole camera: x = f*X/Z, y = f*Y/Z — 3D to 2D projection.`,
            `OpenCV uses BGR; matplotlib/torchvision use RGB — convert!`,
            `torchvision tensors are CHW float; OpenCV arrays are HWC uint8.`,
            `Modern CV = classical processing + deep learning (CNNs, ViTs).`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is computer vision considered harder than natural language processing for many tasks?\nAns: Vision requires reasoning about continuous 2D projections of a 3D world with enormous variation (lighting, viewpoint, occlusion), whereas text is already a discrete, symbolic representation.`,
            `Q2 (math): A camera has f=800 px. An object at Z=10 m projects to x=120 px. What is the object's X coordinate?\nAns: X = x*Z/f = 120*10/800 = 1.5 m.`,
            `Q3 (coding): Load an image with OpenCV and display it correctly in matplotlib.\nAns: img = cv2.imread('a.jpg'); plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB)).`,
            `Challenge: Why does doubling the distance Z halve the projected image size?\nAns: Because x = f*X/Z is inversely proportional to Z; doubling Z doubles the denominator, halving x. This is why distant objects appear smaller.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic 256x256 image with OpenCV (green rectangle + white text), convert it to RGB and grayscale, then apply a torchvision transform pipeline (resize 224, to tensor, normalise). Print the shapes at each step.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt
from torchvision import transforms

img = np.zeros((256, 256, 3), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (200, 200), (0, 255, 0), -1)
cv2.putText(img, 'Hello CV', (60, 130), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)

rgb  = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
print("BGR:", img.shape, "RGB:", rgb.shape, "Gray:", gray.shape)

tf = transforms.Compose([
    transforms.ToPILImage(),
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485,0.456,0.406],[0.229,0.224,0.225]),
])
t = tf(rgb)
print("Tensor:", t.shape, "min:", round(float(t.min()),2), "max:", round(float(t.max()),2))`,
            output: `BGR: (256, 256, 3) RGB: (256, 256, 3) Gray: (256, 256) Tensor: torch.Size([3, 224, 224]) min: -2.12 max: 2.64.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'image-formation': {
      title: 'Image Formation',
      subtitle: 'How 3D scenes become 2D images — geometry, optics, and sensing',
      sections: [
        {
          heading: 'What is Image Formation?',
          text: `Think of a camera as a translator: it converts the 3D world of objects, light, and depth into a flat 2D grid of numbers. The rules of that translation — governed by optics and geometry — determine what the image looks like and what information is preserved or lost. Curiosity gap: a photograph is flat, yet you can still tell which objects are near and far. How? Because the projection process encodes depth cues (size, occlusion, perspective) even in 2D — and CV algorithms can recover them.`,
          list: [
            `Light reflects off objects and passes through the camera lens`,
            `The lens focuses light onto a sensor (CCD/CMOS), creating a 2D projection`,
            `Perspective geometry determines size, shape, and depth relationships`,
            `Color depends on surface reflectance, illumination, and sensor response`,
            `Real lenses introduce distortion (radial, tangential) — corrected by calibration`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Image formation is a chain: a light source emits photons → they reflect off object surfaces (acquiring surface-dependent colour) → the camera lens refracts them → the sensor integrates photons into discrete pixel values. At each stage, information is transformed and partly lost.</p>`,
            `<p>The thin lens equation 1/f = 1/u + 1/v links focal length f, object distance u, and image distance v. The perspective projection x = f*X/Z, y = f*Y/Z maps 3D world coordinates to 2D image coordinates. Real lenses deviate from the ideal pinhole: radial distortion (barrel or pincushion) bends straight lines, corrected using polynomial coefficients k1, k2, k3 during camera calibration.</p>`,
            `<p>You need image formation models whenever the task involves geometry: 3D reconstruction, SLAM, augmented reality, metric measurements from images. For pure recognition tasks (classify / detect), the model often learns to be robust to projection effects implicitly — but understanding the geometry helps you design better data augmentation and interpret failures.</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Image formation pipeline

  Light source → Object surface → Lens → Sensor → Digital image
  (photons)     (reflectance)    (refract) (integrate) (pixel array)

  3D world point (X, Y, Z)
        |
        |  perspective projection: x = fX/Z, y = fY/Z
        v
  2D image point (x, y)

  Lens distortion (real lenses):
    x_distorted = x(1 + k1*r^2 + k2*r^4 + k3*r^6)
    y_distorted = y(1 + k1*r^2 + k2*r^4 + k3*r^6)
    where r = sqrt(x^2 + y^2)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Thin lens equation and magnification',
            code: `Thin Lens Equation:
  1/f = 1/u + 1/v

Where:
  f = focal length (mm)
  u = object distance from lens (mm)
  v = image distance from lens (mm)

Magnification:
  m = v/u = image_size / object_size

Perspective projection (pinhole):
  x = f * X / Z,   y = f * Y / Z

Worked example:
  f = 50 mm, object at u = 5000 mm (5 m)
  1/v = 1/50 - 1/5000 = (100 - 1)/5000 = 99/5000
  v = 5000/99 = 50.51 mm
  m = v/u = 50.51/5000 = 0.0101
  A 1.8 m tall person: image height = 1.8 * 0.0101 = 0.0182 m = 18.2 mm on sensor

  In pixels (sensor pixel pitch = 5 um):
  height_px = 18.2 mm / 0.005 mm/px = 3640 px`,
            output: `A person 5 m away with a 50 mm lens produces an image ~18.2 mm tall on the sensor (~3640 px at 5 um pitch). The thin lens equation lets you compute the image size for any object distance.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Camera calibration and undistortion with OpenCV',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# Generate a synthetic checkerboard-like image to demonstrate
# (in practice, you'd capture real chessboard images)
img = np.zeros((480, 640, 3), dtype=np.uint8)
sq = 60
for r in range(0, 480, sq):
    for c in range(0, 640, sq):
        color = 255 if (r//sq + c//sq) % 2 == 0 else 0
        img[r:r+sq, c:c+sq] = color

# Simulate radial distortion (barrel)
h, w = img.shape[:2]
cx, cy = w//2, h//2
map_x, map_y = np.meshgrid(np.arange(w), np.arange(h))
dx, dy = map_x - cx, map_y - cy
r = np.sqrt(dx**2 + dy**2)
k1, k2 = -0.0003, 0.0000001
scale = 1 + k1*r**2 + k2*r**4
map_x_dist = cx + dx * scale
map_y_dist = cy + dy * scale
distorted = cv2.remap(img, map_x_dist.astype(np.float32),
                       map_y_dist.astype(np.float32), cv2.INTER_LINEAR)

# Undistort (in practice, you calibrate first with cv2.calibrateCamera)
# Simulated camera matrix
K = np.array([[800, 0, cx], [0, 800, cy], [0, 0, 1]], dtype=np.float32)
dist_coeffs = np.array([k1, k2, 0, 0], dtype=np.float32)
undistorted = cv2.undistort(distorted, K, dist_coeffs)

fig, ax = plt.subplots(1, 3, figsize=(14, 4))
ax[0].imshow(img);         ax[0].set_title('Original (undistorted)')
ax[1].imshow(distorted);   ax[1].set_title('With barrel distortion')
ax[2].imshow(undistorted); ax[2].set_title('Corrected (cv2.undistort)')
plt.tight_layout(); plt.show()
print("Distortion coeffs:", dist_coeffs)
print("Camera matrix K:\\n", K)`,
            output: `Three images: a clean checkerboard, a warped (barrel-distorted) version, and the corrected version. Distortion coeffs: [-0.0003, 0.0000001, 0, 0].`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Capture calibration images:</strong> WHY — need known patterns to estimate K and distortion; HOW — photograph a chessboard from multiple angles.`,
            `<strong>2. Detect corner points:</strong> HOW — cv2.findChessboardCorners on each image.`,
            `<strong>3. Run calibration:</strong> HOW — cv2.calibrateCamera returns K and dist_coeffs.`,
            `<strong>4. Undistort images:</strong> HOW — cv2.undistort(img, K, dist_coeffs).`,
            `<strong>5. Use K for 3D tasks:</strong> HOW — projection, triangulation, SLAM all need the calibrated camera matrix.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Property', 'Perspective Projection', 'Orthographic Projection', 'Weak-Perspective'],
            rows: [
              ['Parallel lines', 'Converge to vanishing points', 'Remain parallel', 'Remain parallel (per object)'],
              ['Object size', 'Decreases with distance', 'Constant', 'Constant (per object depth)'],
              ['Depth cue', 'Strong (size, convergence)', 'None', 'Approximate'],
              ['Use case', 'Photography, realistic rendering', 'CAD, distant objects', 'Face recognition, medical'],
              ['Params', 'f, K', 'Scale only', 'Scale + offset']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Assuming parallel lines stay parallel in images (fix: perspective causes convergence — account for vanishing points).`,
            `Mistake 2: Using uncalibrated cameras for 3D reconstruction (fix: calibrate first with cv2.calibrateCamera).`,
            `Mistake 3: Ignoring lens distortion for wide-angle lenses (fix: apply cv2.undistort with estimated k1, k2).`,
            `Mistake 4: Confusing image distance v with object distance u (fix: they are related by the lens equation but distinct).`
          ],
          code: `# WRONG: use raw camera images for metric 3D reconstruction
points_3d = triangulate(raw_img1, raw_img2)   # distorted -> wrong geometry

# RIGHT: calibrate and undistort first
ret, K, dist, rvecs, tvecs = cv2.calibrateCamera(objpoints, imgpoints, (w,h), None, None)
undist = cv2.undistort(img, K, dist)
points_3d = triangulate(undist1, undist2)     # correct geometry`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Apple — Face ID TrueDepth.</strong> Apple's Face ID projects 30,000 infrared dots onto the user's face and captures the pattern with an IR camera. The image formation model is <em>structured light</em>: the distortion of the known dot pattern encodes depth. By calibrating the projector-camera pair, Apple recovers a 3D face mesh with sub-millimetre precision in real time. The depth map feeds a neural network that matches against the enrolled face template. Reported <strong>1-in-1,000,000 false acceptance rate</strong> — 20x more secure than Touch ID. The system works in darkness because it uses its own IR illumination, bypassing ambient-light image formation.`,
          list: [
            `Industry: Consumer electronics / biometric security`,
            `Dataset: 30K IR dots per frame, real-time depth + mesh`,
            `Model: Structured-light depth + 3D mesh + neural matcher`,
            `Results: 1-in-1M false acceptance; works in darkness`,
            `Impact: Secure face unlock on iPhones since 2017`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Image formation = light → lens → sensor → pixel array.`,
            `Thin lens: 1/f = 1/u + 1/v; pinhole projection: x = fX/Z.`,
            `Real lenses add radial distortion (k1, k2) — calibrate & undistort.`,
            `Perspective: distant objects appear smaller, parallel lines converge.`,
            `Calibration (K, dist_coeffs) is required for any 3D geometry task.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does a wide-angle lens produce stronger distortion than a telephoto lens?\nAns: Wide-angle lenses have shorter focal lengths and bend light more sharply, producing larger radial distortion at the image periphery (where r is large in the distortion polynomial).`,
            `Q2 (math): f=35 mm, object at u=2000 mm. Compute v and magnification.\nAns: 1/v = 1/35 - 1/2000 = (2000-35)/(35*2000) = 1965/70000; v = 70000/1965 = 35.63 mm; m = 35.63/2000 = 0.0178.`,
            `Q3 (coding): Undistort an image given K and dist_coeffs.\nAns: cv2.undistort(img, K, dist_coeffs).`,
            `Challenge: Why can a single 2D image not uniquely determine 3D depth?\nAns: The projection x = fX/Z maps a ray (not a point) from 3D to a single 2D pixel — every point on that ray projects to the same pixel. Resolving depth requires a second viewpoint (stereo) or additional cues (motion, focus, structured light).`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Using OpenCV, create a synthetic chessboard pattern (8x6 inner corners), simulate barrel distortion, and then undistort it using cv2.undistort with a known camera matrix and distortion coefficients. Plot the before/after.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

# synthetic chessboard
img = np.zeros((480, 640), dtype=np.uint8)
for r in range(8):
    for c in range(8):
        if (r+c) % 2 == 0:
            img[r*60:(r+1)*60, c*80:(c+1)*80] = 255

# simulate distortion
h, w = img.shape; cx, cy = w//2, h//2
K = np.array([[600,0,cx],[0,600,cy],[0,0,1]], dtype=np.float32)
dist = np.array([-0.4, 0.15, 0, 0], dtype=np.float32)
map_x, map_y = np.meshgrid(np.arange(w), np.arange(h))
dx, dy = map_x-cx, map_y-cy; r2 = dx**2+dy**2
s = 1 + dist[0]*r2 + dist[1]*r2**2
distorted = cv2.remap(img, (cx+dx*s).astype(np.float32), (cy+dy*s).astype(np.float32), cv2.INTER_LINEAR)
undist = cv2.undistort(distorted, K, dist)

fig, ax = plt.subplots(1,3, figsize=(14,4))
ax[0].imshow(img, cmap='gray'); ax[0].set_title('Original')
ax[1].imshow(distorted, cmap='gray'); ax[1].set_title('Distorted')
ax[2].imshow(undist, cmap='gray'); ax[2].set_title('Undistorted')
plt.tight_layout(); plt.show()`,
            output: `Three images: clean checkerboard → barrel-distorted (curved edges) → corrected (straight edges restored).`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'color-spaces': {
      title: 'Color Spaces',
      subtitle: 'RGB, HSV, Lab, and Grayscale — how machines represent color',
      sections: [
        {
          heading: 'What are Color Spaces?',
          text: `Think of a paint store. The same colour can be described by name ("sky blue"), by RGB numbers (135, 206, 235), or by hue-saturation-value ("light, saturated blue"). A colour space is just a coordinate system for colours — and different coordinate systems make different tasks easy. Curiosity gap: why is the colour "red" easy to isolate in HSV but nearly impossible in RGB? Because HSV separates <em>what colour</em> (hue) from <em>how bright</em> (value), while RGB entangles them across all three channels.`,
          list: [
            `RGB: the default for displays (Red, Green, Blue additive)`,
            `BGR: OpenCV's default ordering (Blue, Green, Red) — a common pitfall`,
            `HSV: Hue (colour), Saturation (purity), Value (brightness) — great for segmentation`,
            `Lab: perceptually uniform — L (lightness), a (green-red), b (blue-yellow)`,
            `Grayscale: single channel — luminance only, for edge detection & many CV tasks`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Colour spaces are different coordinate systems for the same underlying colour sensation. RGB represents colour as a mix of three primaries (red, green, blue) — natural for displays but unintuitive for tasks like "find all red pixels" because brightness is spread across all channels. HSV reorganises the same information: H (hue) encodes the colour angle (0-180 in OpenCV), S (saturation) encodes colour purity, and V (value) encodes brightness.</p>`,
            `<p>Lab (CIELAB) is designed to be <em>perceptually uniform</em> — a unit change in Lab values corresponds to a roughly equal perceptual difference, which is not true in RGB. The L channel encodes luminance; a and b encode colour opponency (green-red, blue-yellow). Grayscale discards colour entirely, keeping only luminance (Y = 0.299R + 0.587G + 0.114B), which suffices for many tasks (edge detection, face detection, OCR) and reduces data by 3x.</p>`,
            `<p>Choose your colour space by task: use HSV for colour-based segmentation (robust to lighting changes), Lab for perceptual colour difference or when lighting varies, grayscale for tasks that don't need colour (faster, simpler), and RGB/BGR for display or deep-learning models (which learn to handle it).</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Color space comparison

  RGB / BGR:  [R, G, B]    3 channels, 0-255 each
    → good for display; entangled brightness

  HSV:        [H, S, V]    H: 0-180 (OpenCV), S: 0-255, V: 0-255
    → isolate a colour by H range (e.g., red: H in 0-10 or 170-180)

  Lab:        [L, a, b]    L: 0-255, a: -128..127, b: -128..127
    → perceptually uniform; separate luminance from chrominance

  Grayscale:  [Y]          Y = 0.299R + 0.587G + 0.114B
    → luminance only; 1/3 the data

  When to use each:
    Segmentation by colour  → HSV
    Varying lighting        → Lab (L channel) or HSV V channel
    Edge detection / OCR    → Grayscale
    Display / deep models   → RGB`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'RGB to Grayscale and RGB to HSV conversion',
            code: `RGB → Grayscale (luminance):
  Y = 0.299*R + 0.587*G + 0.114*B

  (OpenCV uses: Y = 0.299R + 0.587G + 0.114B  for cv2.COLOR_BGR2GRAY)

RGB → HSV (simplified, 8-bit):
  V = max(R, G, B)
  S = (V - min(R,G,B)) / V * 255         (if V > 0, else 0)
  H = angle based on which channel is max:
      if V == R: H = 60 * ((G-B)/(V-min)) mod 360
      if V == G: H = 60 * (2 + (B-R)/(V-min))
      if V == B: H = 60 * (4 + (R-G)/(V-min))
  OpenCV scales H to 0-180 (half degrees) for 8-bit images.

Worked example: pixel (R=255, G=0, B=0) = pure red
  Y = 0.299*255 + 0 + 0 = 76.2 (grayscale: medium-dark)
  V = 255; S = (255-0)/255 * 255 = 255 (fully saturated)
  H = 0 degrees (red) → OpenCV stores H = 0

Python:
  import cv2
  bgr = np.array([[[0, 0, 255]]], dtype=np.uint8)  # BGR for red
  hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
  gray = cv2.cvtColor(bgr, cv2.COLOR_BGR2GRAY)
  print("HSV:", hsv[0,0], "Gray:", gray[0,0])`,
            output: `HSV: [0 255 255] (H=0 red, S=255 full, V=255 bright) Gray: [76]. Pure red has grayscale value 76 (medium-dark because the luminance weights green heavily).`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Convert between all color spaces and isolate a colour with HSV',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# Create a synthetic image with coloured circles
img = np.zeros((300, 400, 3), dtype=np.uint8)
cv2.circle(img, (100, 150), 60, (0, 0, 255), -1)     # red (BGR)
cv2.circle(img, (220, 150), 60, (0, 255, 0), -1)     # green
cv2.circle(img, (340, 150), 60, (255, 0, 0), -1)     # blue

rgb   = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
gray  = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
hsv   = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lab   = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)

# Isolate RED using HSV: H in [0,10] or [170,180]
lower1 = np.array([0, 100, 100]); upper1 = np.array([10, 255, 255])
lower2 = np.array([170, 100, 100]); upper2 = np.array([180, 255, 255])
mask = cv2.bitwise_or(cv2.inRange(hsv, lower1, upper1),
                       cv2.inRange(hsv, lower2, upper2))
red_only = cv2.bitwise_and(rgb, rgb, mask=mask)

fig, ax = plt.subplots(2, 3, figsize=(14, 8))
ax[0,0].imshow(rgb);       ax[0,0].set_title('RGB')
ax[0,1].imshow(gray, cmap='gray'); ax[0,1].set_title('Grayscale')
ax[0,2].imshow(hsv);       ax[0,2].set_title('HSV')
ax[1,0].imshow(lab);       ax[1,0].set_title('Lab')
ax[1,1].imshow(mask, cmap='gray'); ax[1,1].set_title('Red mask (HSV)')
ax[1,2].imshow(red_only);  ax[1,2].set_title('Red isolated')
plt.tight_layout(); plt.show()

# Show HSV channel ranges for the red circle
print("Red circle HSV:", hsv[150, 100])    # ~[0, 255, 255]`,
            output: `Six panels: RGB (3 coloured circles), grayscale, HSV, Lab, the binary red mask (white where red), and only the red circle extracted. Red circle HSV ≈ [0, 255, 255].`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Load in BGR (OpenCV default):</strong> HOW — img = cv2.imread('x.jpg').`,
            `<strong>2. Convert to the task-appropriate space:</strong> WHY — different spaces suit different tasks; HOW — cv2.cvtColor.`,
            `<strong>3. For colour segmentation, use HSV:</strong> WHY — H isolates colour independent of brightness; HOW — cv2.inRange(hsv, lower, upper).`,
            `<strong>4. Split channels if needed:</strong> HOW — h,s,v = cv2.split(hsv) or L,a,b = cv2.split(lab).`,
            `<strong>5. Apply mask to original:</strong> HOW — cv2.bitwise_and(rgb, rgb, mask=mask).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Space', 'Channels', 'Lighting-robust?', 'Best for', 'OpenCV code'],
            rows: [
              ['RGB/BGR', '3 (0-255)', 'No', 'Display, deep models', 'cvtColor(., COLOR_BGR2RGB)'],
              ['HSV', '3 (H,S,V)', 'Yes (V separates brightness)', 'Colour segmentation, tracking', 'cvtColor(., COLOR_BGR2HSV)'],
              ['Lab', '3 (L,a,b)', 'Yes (L separates luminance)', 'Perceptual difference, colour transfer', 'cvtColor(., COLOR_BGR2LAB)'],
              ['Grayscale', '1 (0-255)', 'n/a', 'Edge detection, OCR, face detection', 'cvtColor(., COLOR_BGR2GRAY)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using BGR in matplotlib (fix: convert to RGB first — otherwise colours look wrong).`,
            `Mistake 2: Trying to threshold a colour in RGB (fix: convert to HSV and threshold on the H channel).`,
            `Mistake 3: Forgetting that OpenCV HSV uses H in 0-179, not 0-359 (fix: halve the degree value for 8-bit images).`,
            `Mistake 4: Using grayscale for a colour-discrimination task (fix: keep colour information — use HSV or Lab).`
          ],
          code: `# WRONG: threshold red in RGB (fragile, brightness-dependent)
mask = (img[:,:,2] > 150) & (img[:,:,0] < 50) & (img[:,:,1] < 50)

# RIGHT: threshold in HSV (robust to brightness changes)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
mask = cv2.inRange(hsv, np.array([0,100,100]), np.array([10,255,255]))`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Tesla — traffic-light detection.</strong> Tesla's Autopilot detects traffic lights by converting camera frames to HSV and segmenting the four colours (red, yellow, green, and the off/amber state). HSV's separation of hue from value makes the detection robust to varying sunlight: a red light at noon and at dusk both have H≈0 despite very different brightness. The HSV mask produces candidate blobs; a CNN then classifies the light state. Reported traffic-light recognition accuracy <strong>>99%</strong> across lighting conditions, enabling the "Green Light Chime" feature that alerts drivers when the light turns green.`,
          list: [
            `Industry: Autonomous driving`,
            `Dataset: Camera frames across all lighting conditions`,
            `Model: HSV colour segmentation + CNN classifier`,
            `Results: >99% traffic-light state recognition accuracy`,
            `Impact: Green Light Chime and traffic-aware cruise control`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Colour spaces = coordinate systems for colour; pick by task.`,
            `OpenCV loads BGR; convert to RGB for display, HSV for segmentation.`,
            `OpenCV HSV: H in 0-179 (not 0-359) for 8-bit images.`,
            `Grayscale: Y = 0.299R + 0.587G + 0.114B — 3x less data.`,
            `Lab is perceptually uniform — good for varying lighting.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is HSV better than RGB for colour segmentation?\nAns: HSV separates hue (colour identity) from value (brightness), so you can threshold a narrow H range to isolate a colour regardless of lighting. RGB entangles brightness across all three channels, making thresholds fragile.`,
            `Q2 (math): Convert pixel (R=100, G=200, B=50) to grayscale.\nAns: Y = 0.299*100 + 0.587*200 + 0.114*50 = 29.9 + 117.4 + 5.7 = 153.`,
            `Q3 (coding): Create an HSV mask for green pixels (H≈60 in 0-359).\nAns: hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV); mask = cv2.inRange(hsv, (30,50,50), (90,255,255)) — H=60 degrees → OpenCV H=30.`,
            `Challenge: Why does OpenCV use H in 0-179 instead of 0-359?\nAns: For 8-bit images, H degrees (0-359) exceed the 0-255 range of uint8, so OpenCV halves it to 0-179 to fit in a single byte.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image with three differently coloured rectangles (red, green, blue). Convert to HSV and write a function that takes a colour name and returns a mask isolating only that colour's rectangle.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((200, 300, 3), dtype=np.uint8)
cv2.rectangle(img, (10, 50), (90, 150), (0, 0, 255), -1)     # red
cv2.rectangle(img, (110, 50), (190, 150), (0, 255, 0), -1)   # green
cv2.rectangle(img, (210, 50), (290, 150), (255, 0, 0), -1)   # blue

def isolate(img_bgr, color):
    hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    ranges = {
        'red':   [(0,100,100),(10,255,255),(170,100,100),(180,255,255)],
        'green': [(30,50,50),(90,255,255)],
        'blue':  [(100,50,50),(130,255,255)],
    }
    r = ranges[color]
    m = cv2.inRange(hsv, np.array(r[0][:3]), np.array(r[1][:3]))
    if len(r) > 3:  # red wraps around
        m2 = cv2.inRange(hsv, np.array(r[2][:3]), np.array(r[3][:3]))
        m = cv2.bitwise_or(m, m2)
    return m

rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
fig, ax = plt.subplots(1, 4, figsize=(16, 4))
ax[0].imshow(rgb); ax[0].set_title('Original')
for i, c in enumerate(['red','green','blue']):
    ax[i+1].imshow(isolate(img, c), cmap='gray'); ax[i+1].set_title(f'{c} mask')
plt.tight_layout(); plt.show()`,
            output: `Four panels: the original image with three coloured rectangles, and three binary masks each isolating one colour.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'image-filtering': {
      title: 'Image Filtering',
      subtitle: 'Convolutions, kernels, and the building blocks of all CV',
      sections: [
        {
          heading: 'What is Image Filtering?',
          text: `Think of a water filter: it removes impurities while keeping what you want. An image filter does the same — it transforms a pixel based on its neighbourhood, smoothing noise, sharpening edges, or extracting patterns. The mechanism is <strong>convolution</strong>: a small kernel slides across the image, computing weighted sums at each position. Curiosity gap: why is a CNN called a <em>convolutional</em> neural network? Because its layers perform exactly these sliding-window weighted sums — the network <em>learns</em> the kernel weights that detect edges, textures, and objects.`,
          list: [
            `Convolution: (I * K)(x,y) = sum over kernel window of I * K`,
            `Kernels encode operations: blur, sharpen, edge, emboss`,
            `Box filter (average), Gaussian filter (weighted average), median filter (remove salt-and-pepper noise)`,
            `Sharpening = original + (original - blurred) — emphasises high frequencies`,
            `CNNs learn optimal kernels from data — the foundation of deep learning CV`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>A filter (kernel) is a small matrix of weights. Convolution places the kernel over each pixel, multiplies overlapping values, sums them, and replaces the centre pixel with the result. A 3x3 Gaussian blur averages nearby pixels with weights that decay with distance, suppressing noise. A Laplacian kernel computes the second derivative, highlighting edges. A sharpening kernel amplifies the difference between a pixel and its neighbours.</p>`,
            `<p>Mathematically, 2D convolution: (I * K)(i,j) = sum_{m,n} I(i-m, j-n) * K(m,n). In practice OpenCV uses correlation (no kernel flip) via cv2.filter2D. For symmetric kernels (Gaussian, box) the result is identical. Border handling matters — OpenCV pads by default (BORDER_REFLECT_101) to avoid edge artefacts.</p>`,
            `<p>You filter images to: (1) denoise before edge detection or thresholding; (2) extract features (edges, corners, textures); (3) resize/scale-space for multi-scale analysis; (4) create inputs for deep models. Understanding convolution manually is essential because every CNN layer is a bank of learned convolutional filters.</p>`
          ],
          note: `Reference: Gonzalez & Woods (2018), <em>Digital Image Processing</em>, ch. 3 — spatial filtering.`
        },
        {
          heading: 'Visual Representation',
          code: `Convolution: kernel slides over image

  Image (5x5)        Kernel (3x3)          Output
  10 20 30 40 50     1 0 -1
  10 20 30 40 50     1 0 -1      →    slide, multiply, sum
  10 20 30 40 50     1 0 -1      →    at each pixel
  10 20 30 40 50
  10 20 30 40 50

  Example at (1,1):  1*10+0*20+(-1)*30
                     +1*10+0*20+(-1)*30
                     +1*10+0*20+(-1)*30 = -60  (Sobel vertical edge)

  Common kernels:
    Blur:       [[1,1,1],[1,1,1],[1,1,1]] / 9
    Gaussian:   [[1,2,1],[2,4,2],[1,2,1]] / 16
    Sharpen:    [[0,-1,0],[-1,5,-1],[0,-1,0]]
    Sobel-x:    [[-1,0,1],[-2,0,2],[-1,0,1]]`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: '2D convolution and a worked example',
            code: `2D Convolution (strict):
  (I * K)(i,j) = sum_{m} sum_{n} I(i-m, j-n) * K(m,n)

OpenCV's cv2.filter2D uses correlation:
  (I ⋆ K)(i,j) = sum_{m} sum_{n} I(i+m, j+n) * K(m,n)
  (identical for symmetric kernels)

Worked example — 3x3 box blur on:
  I = [[10, 20, 30],
       [40, 50, 60],
       [70, 80, 90]]
  K = ones(3,3) / 9

  Output(1,1) = (10+20+30+40+50+60+70+80+90) / 9 = 450/9 = 50

  Every output pixel = mean of its 3x3 neighbourhood.

Python:
  import cv2, numpy as np
  I = np.array([[10,20,30],[40,50,60],[70,80,90]], dtype=np.float32)
  K = np.ones((3,3), np.float32) / 9
  out = cv2.filter2D(I, -1, K)
  print(out)`,
            output: `[[50. 50. 50.] [50. 50. 50.] [50. 50. 50.]] (with border padding, all interior values become 50 — the average).`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Apply blur, Gaussian blur, sharpen, and custom kernels',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic image with shapes + noise
img = np.zeros((256, 256, 3), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (120, 120), (255, 255, 255), -1)
cv2.circle(img, (180, 180), 40, (0, 255, 255), -1)
noise = np.random.normal(0, 25, img.shape).astype(np.int16)
noisy = np.clip(img.astype(np.int16) + noise, 0, 255).astype(np.uint8)

# 1. Box blur (3x3 average)
box = cv2.blur(noisy, (5, 5))

# 2. Gaussian blur
gauss = cv2.GaussianBlur(noisy, (5, 5), sigmaX=1.5)

# 3. Median blur (great for salt-and-pepper noise)
med = cv2.medianBlur(noisy, 5)

# 4. Sharpening = original + (original - blurred)
blur = cv2.GaussianBlur(noisy, (5,5), 1.0)
sharp = cv2.addWeighted(noisy, 1.5, blur, -0.5, 0)

# 5. Custom Laplacian edge kernel
kernel_edge = np.array([[0,-1,0],[-1,4,-1],[0,-1,0]], dtype=np.float32)
edges = cv2.filter2D(noisy, -1, kernel_edge)

fig, ax = plt.subplots(2, 3, figsize=(14, 8))
ax[0,0].imshow(cv2.cvtColor(noisy, cv2.COLOR_BGR2RGB));  ax[0,0].set_title('Noisy original')
ax[0,1].imshow(cv2.cvtColor(box, cv2.COLOR_BGR2RGB));    ax[0,1].set_title('Box blur (5x5)')
ax[0,2].imshow(cv2.cvtColor(gauss, cv2.COLOR_BGR2RGB));  ax[0,2].set_title('Gaussian blur')
ax[1,0].imshow(cv2.cvtColor(med, cv2.COLOR_BGR2RGB));    ax[1,0].set_title('Median blur')
ax[1,1].imshow(cv2.cvtColor(sharp, cv2.COLOR_BGR2RGB));  ax[1,1].set_title('Sharpened')
ax[1,2].imshow(cv2.cvtColor(edges, cv2.COLOR_BGR2RGB));  ax[1,2].set_title('Laplacian edges')
plt.tight_layout(); plt.show()`,
            output: `Six panels: noisy original, box-blurred, Gaussian-blurred, median-denoised, sharpened, and Laplacian edge map. Median blur best removes salt-and-pepper noise; Gaussian produces the smoothest result; sharpening enhances edge contrast.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Identify the goal:</strong> WHY — determines kernel type; HOW — denoise? blur. Sharpen? subtract blur. Edges? Sobel/Laplacian.`,
            `<strong>2. Choose kernel size:</strong> WHY — larger = smoother but slower; HOW — 3x3 for light smoothing, 5x5-11x11 for heavy blur.`,
            `<strong>3. Pick the right filter:</strong> HOW — Gaussian for general noise, median for salt-and-pepper, bilateral for edge-preserving.`,
            `<strong>4. Apply with cv2.filter2D or specialised functions:</strong> HOW — cv2.GaussianBlur, cv2.medianBlur, cv2.bilateralFilter.`,
            `<strong>5. Verify result visually:</strong> WHY — over-filtering removes signal; HOW — check that edges are preserved or noise is gone.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Filter', 'Operation', 'Best for', 'Preserves edges?', 'OpenCV call'],
            rows: [
              ['Box blur', 'Uniform average', 'Quick smoothing', 'No (blurs edges)', 'cv2.blur(img,(k,k))'],
              ['Gaussian blur', 'Weighted average', 'General denoising', 'No', 'cv2.GaussianBlur(img,(k,k),sigma)'],
              ['Median blur', 'Take median of window', 'Salt-and-pepper noise', 'Yes (mostly)', 'cv2.medianBlur(img,k)'],
              ['Bilateral', 'Weighted by space + intensity', 'Edge-preserving denoise', 'Yes', 'cv2.bilateralFilter(img,d,sigmaS,sigmaR)'],
              ['Sharpening', 'Original + (original - blur)', 'Enhancing detail', 'n/a', 'cv2.addWeighted(img,1.5,blur,-0.5,0)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using a Gaussian blur on salt-and-pepper noise (fix: use median blur — Gaussian averages the noise but doesn't remove outliers).`,
            `Mistake 2: Over-blurring before edge detection (fix: use a small kernel (3x3) or bilateral filter to preserve edges).`,
            `Mistake 3: Forgetting that kernel size must be odd (fix: cv2 requires odd sizes like 3, 5, 7 for GaussianBlur).`,
            `Mistake 4: Using uint8 for intermediate results (fix: convert to float32 before convolution to avoid overflow).`
          ],
          code: `# WRONG: Gaussian blur on salt-and-pepper noise
noisy = add_salt_pepper(img)                  # outliers remain
cv2.GaussianBlur(noisy, (5,5), 1.5)           # just smears the spots

# RIGHT: median blur removes salt-and-pepper outliers
cv2.medianBlur(noisy, 5)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Google Photos — photo enhancement pipeline.</strong> Google Photos applies a multi-stage filter pipeline to uploaded images: bilateral filtering for edge-preserving denoising, unsharp masking (sharpening) for detail enhancement, and local tone mapping. The bilateral filter smooths skin and sky regions while preserving hair and eye edges. Google reported that this pipeline improved user-perceived image quality scores by <strong>~18%</strong> in A/B testing, with the denoising stage reducing low-light noise complaints. The same convolution principles underpin the deep CNN layers in Google's image classification and portrait-mode bokeh features.`,
          list: [
            `Industry: Consumer photo applications`,
            `Dataset: User-uploaded photos, billions of images`,
            `Model: Bilateral filter + unsharp mask + local tone mapping`,
            `Results: ~18% improvement in perceived quality (A/B test)`,
            `Impact: Better photos without user effort; reduced noise complaints`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Convolution = weighted sum of a pixel's neighbourhood.`,
            `Gaussian for general blur, median for salt-and-pepper, bilateral for edge-preserving.`,
            `Sharpening = original + (original - blurred) = addWeighted(img,1.5,blur,-0.5,0).`,
            `Kernel size must be odd (3, 5, 7) for OpenCV blur functions.`,
            `CNN layers are learned convolutional filters — same operation, learned weights.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does a median filter remove salt-and-pepper noise while Gaussian doesn't?\nAns: A median takes the middle value, ignoring extreme outliers; a Gaussian averages, so a single extreme pixel still inflates the average. Median filters are robust to outlier noise.`,
            `Q2 (math): Apply the 3x3 sharpening kernel [[0,-1,0],[-1,5,-1],[0,-1,0]] to a centre pixel with neighbours all 100.\nAns: 0*100 + (-1)*100 + 0*100 + (-1)*100 + 5*100 + (-1)*100 + 0*100 + (-1)*100 + 0*100 = -400 + 500 = 100. On a flat region the result is unchanged; on an edge it amplifies the difference.`,
            `Q3 (coding): Apply a 5x5 Gaussian blur with sigma=1.5.\nAns: cv2.GaussianBlur(img, (5,5), 1.5).`,
            `Challenge: Why is bilateral filtering called "edge-preserving"?\nAns: It weights neighbours by both spatial distance AND intensity similarity — pixels on the other side of an edge have very different intensities, so they get near-zero weight, preserving the edge while smoothing within regions.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image with a white rectangle on a black background. Add salt-and-pepper noise. Then compare Gaussian blur vs median blur (5x5) — which removes the noise better? Plot both.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((200, 200), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (150, 150), 255, -1)
# add salt-and-pepper noise
noisy = img.copy()
prob = 0.05
noisy[np.random.rand(*img.shape) < prob] = 0      # pepper
noisy[np.random.rand(*img.shape) < prob] = 255    # salt

g = cv2.GaussianBlur(noisy, (5,5), 1.5)
m = cv2.medianBlur(noisy, 5)

fig, ax = plt.subplots(1, 3, figsize=(12, 4))
ax[0].imshow(noisy, cmap='gray'); ax[0].set_title('Noisy')
ax[1].imshow(g, cmap='gray');     ax[1].set_title('Gaussian (smears)')
ax[2].imshow(m, cmap='gray');     ax[2].set_title('Median (clean)')
plt.tight_layout(); plt.show()`,
            output: `Gaussian blur smears the salt-and-pepper spots into grey haze; median blur cleanly removes them. Median wins for this noise type.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'edge-detection': {
      title: 'Edge Detection',
      subtitle: 'Finding boundaries — from Sobel gradients to Canny',
      sections: [
        {
          heading: 'What is Edge Detection?',
          text: `Think of a colouring book: the outlines tell you where one object ends and another begins. Edge detection finds those outlines in a photo — locations where intensity changes sharply, marking object boundaries, shadows, and textures. Curiosity gap: why is the <em>gradient</em> (derivative) of an image the key to edges? Because an edge is exactly where the intensity function changes fastest — and the derivative is maximal at those points.`,
          list: [
            `Edges = locations of high intensity gradient (rapid change)`,
            `Sobel operator: computes gradient in x and y directions`,
            `Canny edge detector: multi-stage pipeline (gradient → NMS → thresholding)`,
            `Laplacian: second derivative — finds zero-crossings (edges)`,
            `Edges are the input to many pipelines: contours, Hough transforms, object detection`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>An edge is a boundary where pixel intensity changes rapidly. The image gradient ∇I = (∂I/∂x, ∂I/∂y) measures the rate and direction of change. The gradient magnitude |∇I| = sqrt(Ix² + Iy²) is high at edges; the gradient direction θ = atan2(Iy, Ix) is perpendicular to the edge. The Sobel operator approximates these derivatives with 3x3 kernels.</p>`,
            `<p>The Canny edge detector is the gold-standard classical pipeline: (1) Gaussian blur to suppress noise; (2) compute Sobel gradients; (3) non-maximum suppression — keep only the local maximum along the gradient direction, thinning edges to 1px; (4) double thresholding — classify pixels as strong (above high threshold), weak (between low and high), or noise (below low); (5) hysteresis — keep weak pixels only if connected to strong ones. This produces clean, thin, connected edges.</p>`,
            `<p>You use edge detection as a pre-processing step for: contour detection (cv2.findContours), Hough line/circle transforms, shape matching, document scanning, and as a classical feature for object detection. For deep-learning tasks, the CNN learns its own edge filters in the first layers — but Canny is still useful for classical pipelines and data labelling.</p>`
          ],
          note: `Reference: Canny, J. (1986), <em>A Computational Approach to Edge Detection</em>, IEEE Trans. PAMI.`
        },
        {
          heading: 'Visual Representation',
          code: `Edge detection pipeline (Canny)

  Image
    |
    v  (1) Gaussian blur (denoise)
    v  (2) Sobel gradients: Ix, Iy
    v  (3) Gradient magnitude + direction
    v  (4) Non-maximum suppression (thin edges)
    v  (5) Double threshold + hysteresis
    |
  Edge map (binary, 1-pixel-wide edges)

  Sobel kernels:
    Gx = [-1 0 1]      Gy = [-1 -2 -1]
         [-2 0 2]           [ 0  0  0]
         [-1 0 1]           [ 1  2  1]
    Gradient magnitude = sqrt(Gx^2 + Gy^2)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Sobel gradient and Canny thresholds',
            code: `Image gradient:
  magnitude = sqrt(Ix^2 + Iy^2)
  direction = atan2(Iy, Ix)

Sobel kernels:
  Gx = [-1 0 1; -2 0 2; -1 0 1]   (horizontal derivative)
  Gy = [-1 -2 -1; 0 0 0; 1 2 1]   (vertical derivative)

Canny double threshold:
  pixel > high_threshold  → strong edge (kept)
  low < pixel < high       → weak edge (kept if connected to strong)
  pixel < low              → discarded

Worked example — 1D edge (intensity step):
  I = [10, 10, 10, 50, 50, 50]
  Ix ≈ [0, 0, 40, 40, 0, 0]   (derivative peaks at the step)
  Edge location = pixel 3 (where |Ix| is maximal)

  Canny with low=50, high=150:
  Strong edges: |gradient| > 150
  Weak edges:   50 < |gradient| < 150 (kept if next to strong)

Python:
  import cv2, numpy as np
  img = np.zeros((100,100), dtype=np.uint8)
  img[:, 50:] = 255                    # vertical edge at x=50
  edges = cv2.Canny(img, threshold1=50, threshold2=150)
  print("Edge pixels:", np.sum(edges > 0))   # count edge pixels`,
            output: `Edge pixels: ~100 (a vertical line at x=50, 1 pixel wide). The Canny pipeline extracts clean, thin edges from the intensity step.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Sobel vs Laplacian vs Canny with parameter tuning',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic image with shapes
img = np.zeros((256, 256), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (120, 120), 255, -1)
cv2.circle(img, (180, 180), 50, 255, -1)
cv2.line(img, (10, 200), (240, 10), 255, 2)

# 1. Sobel gradients
gx = cv2.Sobel(img, cv2.CV_64F, 1, 0, ksize=3)
gy = cv2.Sobel(img, cv2.CV_64F, 0, 1, ksize=3)
sobel_mag = np.sqrt(gx**2 + gy**2).astype(np.uint8)

# 2. Laplacian (second derivative)
lap = cv2.Laplacian(img, cv2.CV_64F, ksize=3)
lap = np.uint8(np.absolute(lap))

# 3. Canny with different thresholds
canny_low  = cv2.Canny(img, 30, 80)     # more edges (lower threshold)
canny_high = cv2.Canny(img, 100, 200)   # fewer edges (higher threshold)

fig, ax = plt.subplots(2, 3, figsize=(14, 8))
ax[0,0].imshow(img, cmap='gray');       ax[0,0].set_title('Original')
ax[0,1].imshow(sobel_mag, cmap='gray'); ax[0,1].set_title('Sobel magnitude')
ax[0,2].imshow(lap, cmap='gray');       ax[0,2].set_title('Laplacian')
ax[1,0].imshow(canny_low, cmap='gray'); ax[1,0].set_title('Canny (30,80) — low')
ax[1,1].imshow(canny_high, cmap='gray');ax[1,1].set_title('Canny (100,200) — high')
ax[1,2].imshow(gx.astype(np.uint8), cmap='gray'); ax[1,2].set_title('Sobel Gx')
plt.tight_layout(); plt.show()

print("Edge pixel counts:", {
    'Sobel': int(np.sum(sobel_mag > 50)),
    'Laplacian': int(np.sum(lap > 50)),
    'Canny_low': int(np.sum(canny_low > 0)),
    'Canny_high': int(np.sum(canny_high > 0)),
})`,
            output: `Six panels: original shapes, Sobel magnitude (thick gradient outlines), Laplacian (zero-crossing edges), Canny low-threshold (many edges including noise), Canny high-threshold (clean edges only), and Sobel Gx (only vertical gradients). Lower Canny thresholds detect more edges but include noise.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Convert to grayscale:</strong> WHY — edges are about intensity, not colour; HOW — cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).`,
            `<strong>2. Apply Gaussian blur:</strong> WHY — reduces noise that creates false edges; HOW — cv2.GaussianBlur(gray, (5,5), 1.4).`,
            `<strong>3. Choose edge detector:</strong> WHY — Canny for clean binary edges, Sobel for gradient magnitude; HOW — cv2.Canny or cv2.Sobel.`,
            `<strong>4. Tune thresholds:</strong> WHY — control sensitivity; HOW — ratio high:low ≈ 2:1 or 3:1; use auto thresholds via median.`,
            `<strong>5. Use edges downstream:</strong> HOW — cv2.findContours, cv2.HoughLines, or as a classical feature.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Detector', 'Output', 'Edge width', 'Noise robustness', 'When to use'],
            rows: [
              ['Sobel', 'Gradient magnitude (grey)', 'Thick (kernel-sized)', 'Moderate', 'Need gradient direction/magnitude'],
              ['Laplacian', 'Second derivative (grey)', 'Zero-crossings', 'Low (noise-sensitive)', 'Detecting rapid intensity changes'],
              ['Canny', 'Binary edge map', '1 pixel (NMS)', 'High (multi-stage)', 'Clean edges for contours/Hough'],
              ['Deep learned', 'Learned feature maps', 'Multi-scale', 'High', 'Inside CNNs (first layers learn edges)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Running Canny on a noisy image without blurring first (fix: always GaussianBlur before Canny).`,
            `Mistake 2: Using fixed thresholds for all images (fix: compute thresholds from the image median: auto = median * 0.66, high = median * 1.33).`,
            `Mistake 3: Expecting thick Sobel edges to be the final output (fix: use Canny for thin, clean edges; Sobel is an intermediate).`,
            `Mistake 4: Setting low threshold too close to high (fix: ratio of 2:1 to 3:1 is standard; too narrow loses hysteresis benefit).`
          ],
          code: `# WRONG: fixed thresholds on every image
edges = cv2.Canny(gray, 100, 200)   # wrong for very dark or bright images

# RIGHT: auto-tune from median intensity
v = np.median(gray)
lower = int(max(0, 0.66 * v))
upper = int(min(255, 1.33 * v))
edges = cv2.Canny(gray, lower, upper)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>ABBYY FineReader — OCR document edge detection.</strong> ABBYY's mobile document scanner uses Canny edge detection to find the four corners of a document in a camera frame. The pipeline: Canny on the grayscale image → Hough line transform → intersection points for corners → perspective transform (warp) to produce a flat, rectified document. Reported <strong>>95% corner detection accuracy</strong> on typical phone-camera captures, enabling the "auto-capture" feature that scans a document when all four edges are detected. The auto-thresholding (median-based) handles diverse paper colours and lighting.`,
          list: [
            `Industry: Mobile document scanning / OCR`,
            `Dataset: Camera-captured document images`,
            `Model: Canny edges + Hough lines + corner intersection + perspective warp`,
            `Results: >95% corner detection accuracy`,
            `Impact: Auto-capture document scanning on millions of phones`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Edges = high gradient magnitude; |∇I| = sqrt(Ix² + Iy²).`,
            `Sobel: 3x3 gradient kernels; Canny: full pipeline with NMS + hysteresis.`,
            `Always blur before Canny; auto-tune thresholds from the image median.`,
            `Canny produces 1-pixel-wide, connected, clean binary edges.`,
            `CNN first layers learn edge detectors automatically — same principle.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does Canny use non-maximum suppression?\nAns: To thin edges to a single pixel — without NMS, edges would be as wide as the gradient region, making downstream contour detection imprecise and ambiguous.`,
            `Q2 (math): A pixel has Sobel gradients Ix=120, Iy=50. Compute gradient magnitude and direction.\nAns: magnitude = sqrt(120² + 50²) = sqrt(14400+2500) = sqrt(16900) = 130; direction = atan2(50,120) ≈ 22.6°.`,
            `Q3 (coding): Auto-tune Canny thresholds from the image median.\nAns: v = np.median(gray); lo = int(max(0, 0.66*v)); hi = int(min(255, 1.33*v)); cv2.Canny(gray, lo, hi).`,
            `Challenge: Why does the Canny high:low threshold ratio of 2:1-3:1 work well?\nAns: Too narrow a range weakens hysteresis (few weak pixels get connected to strong ones → fragmented edges); too wide admits too much noise. The 2:1-3:1 range balances connectivity and noise rejection.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image with a rectangle and circle. Apply Canny edge detection with three different threshold pairs: (50,100), (100,200), (150,300). Compare the number of edge pixels detected. Which gives the cleanest result?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((256, 256), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (120, 120), 255, -1)
cv2.circle(img, (180, 180), 50, 255, -1)
img = cv2.GaussianBlur(img, (5,5), 1.0)

pairs = [(50,100), (100,200), (150,300)]
fig, ax = plt.subplots(1, 3, figsize=(14, 4))
for i, (lo, hi) in enumerate(pairs):
    e = cv2.Canny(img, lo, hi)
    ax[i].imshow(e, cmap='gray'); ax[i].set_title(f'Canny ({lo},{hi}) — {np.sum(e>0)} px')
plt.tight_layout(); plt.show()`,
            output: `Lower thresholds (50,100) detect ~800 edge pixels (thicker, noisier); higher (150,300) detect ~400 (only the strongest edges). (100,200) typically gives the cleanest balance.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
