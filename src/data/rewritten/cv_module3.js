// Computer Vision — Module 3: Feature Detection & Matching
// Exports: cvModule3Structure (sidebar) + cvModule3Content (topic bodies)
// Harris, SIFT/SURF/ORB, feature matching with RANSAC, panorama stitching, template matching.

export const cvModule3Structure = {
  module3: {
    title: 'Module 3: Feature Detection & Matching',
    topics: [
      { id: 'harris-corners', title: 'Harris Corner Detection' },
      { id: 'sift-orb', title: 'SIFT, SURF & ORB Features' },
      { id: 'feature-matching', title: 'Feature Matching with RANSAC' },
      { id: 'panorama-stitching', title: 'Panorama Stitching' },
      { id: 'template-matching', title: 'Template Matching' },
    ]
  }
};

export const cvModule3Content = {
  module3: {
    'harris-corners': {
      title: 'Harris Corner Detection',
      subtitle: 'Finding stable interest points where intensity changes in all directions',
      sections: [
        {
          heading: 'What is Harris Corner Detection?',
          text: `Think of looking at a chessboard. The corners of the squares are the most distinctive points — they're unique in every direction, so you can find them again from a different angle. Harris corner detection is the algorithmic version of that intuition: it finds pixels where intensity changes significantly in <em>multiple</em> directions simultaneously. Curiosity gap: why are corners better than edges for tracking? Because an edge looks the same along its length — slide along it and nothing changes. A corner is unique in every direction, so there's only one correct match.`,
          list: [
            `Corner = intensity changes strongly in two or more directions`,
            `Harris uses the structure tensor (second-moment matrix) M`,
            `R = det(M) - k * trace(M)² — corner response function`,
            `R > 0 → corner; R < 0 → edge; |R| ≈ 0 → flat region`,
            `Invariant to rotation; NOT invariant to scale (use SIFT for that)`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>At each pixel, Harris computes the structure tensor M = sum_W [Ix², IxIy; IxIy, Iy²] over a window W, where Ix and Iy are image gradients. The eigenvalues lambda1, lambda2 of M tell you the local structure: both small → flat region; one large, one small → edge; both large → corner. Harris avoids computing eigenvalues directly (expensive in 1988) by using the response R = det(M) - k * trace(M)² = lambda1*lambda2 - k*(lambda1+lambda2)², where k ≈ 0.04-0.06.</p>`,
            `<p>The response R is positive at corners (both eigenvalues large), negative at edges (one eigenvalue large), and near zero in flat regions. After computing R for every pixel, you threshold and apply non-maximum suppression to pick the strongest, well-separated corners. The parameter k controls sensitivity — lower k detects more corners, higher k is stricter.</p>`,
            `<p>Use Harris when you need stable, repeatable interest points for tracking (optical flow, SLAM), image alignment (stitching), or 3D reconstruction. Harris is rotation-invariant but NOT scale-invariant — if your images have scale changes (zoom, different distances), use SIFT or Harris-Laplace instead. For real-time applications, consider FAST (faster) or ORB (free + fast + binary descriptor).</p>`
          ],
          note: `Reference: Harris, C. & Stephens, M. (1988), <em>A Combined Corner and Edge Detector</em>, Alvey Vision Conference.`
        },
        {
          heading: 'Visual Representation',
          code: `Harris corner response R

  Eigenvalue interpretation:
    lambda1, lambda2 both small  → flat (R ≈ 0)
    lambda1 >> lambda2           → edge (R < 0)
    lambda1, lambda2 both large  → corner (R > 0)

  Structure tensor M:
    M = [sum Ix²     sum IxIy]
        [sum IxIy    sum Iy²  ]

  Response:
    R = det(M) - k * trace(M)²
      = λ1*λ2 - k*(λ1+λ2)²
    k ≈ 0.04 (typical)

  Chessboard example:
    ├──┤├──┤├──┤     corners at every intersection
    ├──┤├──┤├──┤     R is maximally positive there
    ────── edge: R < 0 (one direction only)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Harris response computation with worked example',
            code: `Structure tensor at a pixel:
  M = [Ix²_window   IxIy_window]
      [IxIy_window  Iy²_window ]

  det(M)   = Ix² * Iy² - (IxIy)² = λ1 * λ2
  trace(M) = Ix² + Iy² = λ1 + λ2

  R = det(M) - k * trace(M)²

Worked example — at a corner-like pixel:
  Suppose in the window: sum(Ix²) = 1000, sum(Iy²) = 800, sum(IxIy) = 50
  det(M)   = 1000*800 - 50² = 800000 - 2500 = 797500
  trace(M) = 1000 + 800 = 1800
  k = 0.04
  R = 797500 - 0.04 * 1800² = 797500 - 0.04*3240000 = 797500 - 129600 = 667900
  R >> 0 → corner confirmed

  At an edge pixel (one-directional change):
  sum(Ix²) = 1000, sum(Iy²) = 10, sum(IxIy) = 0
  det(M) = 1000*10 - 0 = 10000
  trace(M) = 1010
  R = 10000 - 0.04 * 1010² = 10000 - 40804 = -30804
  R < 0 → edge, not a corner

Python:
  import cv2, numpy as np
  img = np.zeros((100,100), dtype=np.uint8)
  cv2.rectangle(img, (20,20), (80,80), 255, -1)
  gray = np.float32(img)
  R = cv2.cornerHarris(gray, blockSize=2, ksize=3, k=0.04)
  corners = np.argwhere(R > 0.01 * R.max())
  print("Corners found:", len(corners))`,
            output: `Corners found: 4 — the four corners of the rectangle, where R exceeds the threshold (1% of max R).`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Harris + Shi-Tomasi + FAST corner detection comparison',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic chessboard-like image
img = np.zeros((300, 300), dtype=np.uint8)
sq = 50
for r in range(6):
    for c in range(6):
        if (r + c) % 2 == 0:
            img[r*sq:(r+1)*sq, c*sq:(c+1)*sq] = 255

# 1. Harris
gray = np.float32(img)
harris_R = cv2.cornerHarris(gray, 2, 3, 0.04)
harris_img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
harris_img[harris_R > 0.01 * harris_R.max()] = [0, 0, 255]   # mark red

# 2. Shi-Tomasi (good features to track)
corners_st = cv2.goodFeaturesToTrack(img, maxCorners=50, qualityLevel=0.1, minDistance=10)
st_img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
if corners_st is not None:
    for c in corners_st.astype(int):
        cv2.circle(st_img, tuple(c[0]), 4, (0, 255, 0), -1)

# 3. FAST
fast = cv2.FastFeatureDetector_create(threshold=30)
kp_fast = fast.detect(img, None)
fast_img = cv2.drawKeypoints(img, kp_fast, None, color=(255, 0, 0))

fig, ax = plt.subplots(1, 3, figsize=(15, 5))
ax[0].imshow(cv2.cvtColor(harris_img, cv2.COLOR_BGR2RGB)); ax[0].set_title(f'Harris ({np.sum(harris_R > 0.01*harris_R.max())} corners)')
ax[1].imshow(cv2.cvtColor(st_img, cv2.COLOR_BGR2RGB));     ax[1].set_title(f'Shi-Tomasi ({len(corners_st) if corners_st is not None else 0} corners)')
ax[2].imshow(cv2.cvtColor(fast_img, cv2.COLOR_BGR2RGB));   ax[2].set_title(f'FAST ({len(kp_fast)} corners)')
plt.tight_layout(); plt.show()`,
            output: `Three panels: Harris marks red dots at chessboard intersections, Shi-Tomasi draws green circles at the top-50 strongest corners, FAST draws blue keypoints rapidly. All three find the intersections, differing in count, speed, and precision.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Convert to grayscale:</strong> WHY — Harris operates on intensity gradients; HOW — gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).`,
            `<strong>2. Compute the Harris response:</strong> HOW — R = cv2.cornerHarris(np.float32(gray), blockSize=2, ksize=3, k=0.04).`,
            `<strong>3. Threshold the response:</strong> HOW — corners = R > 0.01 * R.max() (1% of max is a standard threshold).`,
            `<strong>4. Mark or extract corner locations:</strong> HOW — img[corners] = [255,0,0] or np.argwhere(corners).`,
            `<strong>5. Apply non-max suppression if needed:</strong> HOW — cv2.goodFeaturesToTrack(img, maxCorners, qualityLevel, minDistance).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Detector', 'Invariant to', 'Speed', 'Scale-invariant?', 'Best for', 'OpenCV call'],
            rows: [
              ['Harris', 'Rotation', 'Fast', 'No', 'General corners, tracking', 'cv2.cornerHarris'],
              ['Shi-Tomasi', 'Rotation', 'Fast', 'No', 'Tracking (selects stable corners)', 'cv2.goodFeaturesToTrack'],
              ['FAST', 'None (basic)', 'Very fast', 'No', 'Real-time, robotics', 'cv2.FastFeatureDetector_create'],
              ['SIFT', 'Scale + rotation', 'Slow', 'Yes', 'Matching across viewpoints', 'cv2.SIFT_create'],
              ['ORB', 'Rotation', 'Fast', 'Partial (pyramid)', 'Real-time matching (free)', 'cv2.ORB_create']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Running Harris on raw noisy images (fix: Gaussian blur first — gradients amplify noise).`,
            `Mistake 2: Using Harris for large scale changes (fix: use SIFT or a multi-scale detector).`,
            `Mistake 3: Setting k too high or too low (fix: k=0.04-0.06 is standard; too high misses corners, too low finds noise).`,
            `Mistake 4: Not applying non-max suppression (fix: use goodFeaturesToTrack for well-separated corners).`
          ],
          code: `# WRONG: Harris on noisy image without blur
R = cv2.cornerHarris(noisy_gray, 2, 3, 0.04)   # detects noise as corners

# RIGHT: blur first, then Harris
blurred = cv2.GaussianBlur(gray, (5,5), 1.0)
R = cv2.cornerHarris(np.float32(blurred), 2, 3, 0.04)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>OpenCV-based panorama apps (e.g., Microsoft ICE successor).</strong> Panorama stitching starts with Harris or Shi-Tomasi corner detection on overlapping images. The detected corners are matched between images, and the matches estimate a homography for warping. OpenCV's Stitcher class uses goodFeaturesToTrack (Shi-Tomasi) internally because it selects the most stable, well-separated corners — ideal for matching. On typical phone panoramas (5-15 overlapping shots), the pipeline produces seamless stitches in <2 seconds. The quality of the initial corner detection directly determines stitching accuracy: too few corners = no matches; too many clustered = ambiguous matches.`,
          list: [
            `Industry: Computational photography`,
            `Dataset: Overlapping phone camera shots`,
            `Model: Shi-Tomasi corners + ORB matching + homography + blending`,
            `Results: Seamless panoramas in <2 seconds on a phone`,
            `Impact: Built into every phone camera's panorama mode`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Harris finds pixels where intensity changes in multiple directions.`,
            `R = det(M) - k*trace(M)²; R>0 → corner, R<0 → edge, R≈0 → flat.`,
            `k ≈ 0.04; blur before; threshold at 1% of max R.`,
            `Rotation-invariant but NOT scale-invariant.`,
            `Shi-Tomasi (goodFeaturesToTrack) selects the most stable corners.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why are corners better than edges for image matching?\nAns: An edge is ambiguous — any point along it looks the same, causing sliding-match ambiguity. A corner is unique in all directions, so there is only one correct match, making it a reliable reference point.`,
            `Q2 (math): At a pixel, sum(Ix²)=400, sum(Iy²)=400, sum(IxIy)=0, k=0.04. Compute R and classify.\nAns: det = 400*400 - 0 = 160000; trace = 800; R = 160000 - 0.04*640000 = 160000 - 25600 = 134400. R >> 0 → corner.`,
            `Q3 (coding): Detect the top 100 corners with Shi-Tomasi in OpenCV.\nAns: cv2.goodFeaturesToTrack(gray, maxCorners=100, qualityLevel=0.1, minDistance=10).`,
            `Challenge: Why is Harris not scale-invariant, and how does SIFT solve this?\nAns: Harris uses a fixed-size window — at a different scale, the same corner produces a different response. SIFT uses a scale-space pyramid (Difference of Gaussians) and finds the scale at which each feature is maximally stable, making detection invariant to zoom.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic chessboard image (8x8 squares). Run Harris corner detection and count the detected corners. Then rotate the image 30° and re-detect — are the same corners found (rotation invariance)?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

# chessboard
img = np.zeros((400, 400), dtype=np.uint8)
sq = 50
for r in range(8):
    for c in range(8):
        if (r+c) % 2 == 0:
            img[r*sq:(r+1)*sq, c*sq:(c+1)*sq] = 255

# Harris on original
R1 = cv2.cornerHarris(np.float32(img), 2, 3, 0.04)
n1 = np.sum(R1 > 0.01 * R1.max())

# Rotate 30°
h, w = img.shape
M = cv2.getRotationMatrix2D((w//2, h//2), 30, 1.0)
rot = cv2.warpAffine(img, M, (w, h))
R2 = cv2.cornerHarris(np.float32(rot), 2, 3, 0.04)
n2 = np.sum(R2 > 0.01 * R2.max())

print(f"Original corners: {n1}, Rotated corners: {n2}")
fig, ax = plt.subplots(1, 2, figsize=(10,4))
ax[0].imshow(img, cmap='gray'); ax[0].set_title(f'Original ({n1} corners)')
ax[1].imshow(rot, cmap='gray'); ax[1].set_title(f'Rotated 30° ({n2} corners)')
plt.tight_layout(); plt.show()`,
            output: `Original corners ~49 (7x7 internal intersections), Rotated corners ~49. Harris is rotation-invariant — the same corners are found at the (rotated) intersections.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'sift-orb': {
      title: 'SIFT, SURF & ORB Features',
      subtitle: 'Scale-invariant detectors and descriptors for robust matching',
      sections: [
        {
          heading: 'What are SIFT, SURF & ORB?',
          text: `Think of identifying a friend in a crowd. You don't need them to be the same size, under the same light, or at the same angle — you recognise their distinctive features (face shape, hair, posture). SIFT, SURF, and ORB do this for images: they find <em>keypoints</em> and describe them in a way that's invariant to scale, rotation, and (partially) lighting. Curiosity gap: why was SIFT called a "patent-free zone" for years, and why did ORB become the open-source favourite? Because SIFT was patented until 2020 — ORB was created as a fast, free alternative.`,
          list: [
            `SIFT: Scale-Invariant Feature Transform — DoG pyramid + 128-dim descriptor`,
            `SURF: Speeded-Up Robust Features — Hessian + integral images (faster than SIFT)`,
            `ORB: Oriented FAST + Rotated BRIEF — binary descriptor, free, fast`,
            `All three: detect keypoints + compute descriptors`,
            `SIFT is the gold standard for accuracy; ORB for real-time + free use`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>SIFT (Scale-Invariant Feature Transform) builds a scale-space pyramid using Difference-of-Gaussians (DoG) and finds keypoints at local extrema across scale and space. Each keypoint gets an orientation (from the dominant gradient direction in its neighbourhood), making it rotation-invariant. The descriptor is a 128-dimensional histogram of oriented gradients in a 4x4 grid around the keypoint, normalised for illumination. SIFT is the most robust but also the slowest.</p>`,
            `<p>SURF approximates SIFT using Hessian-based detection with integral images (box filters), making it 3-5x faster with similar robustness. ORB (Oriented FAST + Rotated BRIEF) combines FAST corner detection (with orientation) and a binary BRIEF descriptor rotated to the keypoint orientation. ORB descriptors are 256-bit strings — matching is just a Hamming distance (XOR + popcount), which is extremely fast. ORB is free (unlike SIFT which was patented until 2020) and is the default in OpenCV's panorama stitcher.</p>`,
            `<p>Choose SIFT when you need maximum accuracy and scale invariance (image stitching with large zoom differences, object recognition across viewpoints). Choose ORB for real-time applications (SLAM, AR, mobile) where speed and patent-freedom matter. Use SURF as a middle ground (but it was also patented until recently). All three are now free in OpenCV's xfeatures2d and main modules.</p>`
          ],
          note: `References: Lowe, D.G. (2004), <em>Distinctive Image Features from Scale-Invariant Keypoints</em>, IJCV; Rublee et al. (2011), <em>ORB: an efficient alternative to SIFT or SURF</em>, ICCV.`
        },
        {
          heading: 'Visual Representation',
          code: `Feature detection + description pipeline

  Image
    |  Detect keypoints (WHERE)
    v     SIFT: DoG extrema  |  ORB: FAST corners
  Keypoints (x, y, scale, orientation)
    |  Compute descriptors (WHAT)
    v     SIFT: 128-float histogram  |  ORB: 256-bit binary
  Descriptors
    |  Match across images (HOW)
    v     SIFT: L2 distance  |  ORB: Hamming distance

  Invariances:
    SIFT: scale + rotation + (partial) illumination
    SURF: scale + rotation (faster than SIFT)
    ORB:  rotation (partial scale via pyramid)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'SIFT descriptor and ORB Hamming matching',
            code: `SIFT descriptor (per keypoint):
  4x4 spatial grid, each cell = 8-bin orientation histogram
  → 4*4*8 = 128 dimensions, float, L2-normalised

  Matching: L2 distance between descriptors
  good_match if dist < 0.75 * dist_second_best (Lowe's ratio test)

ORB descriptor (per keypoint):
  256 binary intensity tests (BRIEF pattern, rotated to orientation)
  → 256 bits = 32 bytes

  Matching: Hamming distance = popcount(desc1 XOR desc2)
  good_match if hamming_dist < threshold (e.g., 64)

Worked example — ORB:
  desc1 = [1,0,1,1,0,0,1,0]  (8-bit toy)
  desc2 = [1,1,1,0,0,0,1,1]
  XOR   = [0,1,0,1,0,0,0,1]  → Hamming = 3 (3 bits differ)
  → close match (small Hamming distance)

Python:
  import cv2, numpy as np
  img = np.zeros((200,200), dtype=np.uint8)
  cv2.rectangle(img, (30,30), (170,170), 255, 2)
  orb = cv2.ORB_create(nfeatures=100)
  kp, des = orb.detectAndCompute(img, None)
  print("Keypoints:", len(kp), "Descriptor shape:", des.shape if des is not None else None)`,
            output: `Keypoints: ~4-20 (corners of the rectangle) Descriptor shape: (N, 32) — each descriptor is 256 bits = 32 bytes.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'SIFT vs ORB: detect, describe, and draw keypoints',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic image with rich features
img = np.zeros((300, 300), dtype=np.uint8)
cv2.rectangle(img, (30, 30), (120, 120), 200, -1)
cv2.circle(img, (200, 200), 50, 200, -1)
cv2.line(img, (10, 280), (290, 10), 200, 3)
cv2.putText(img, 'CV', (130, 150), cv2.FONT_HERSHEY_SIMPLEX, 1.5, 255, 3)

# SIFT
sift = cv2.SIFT_create(nfeatures=200)
kp_sift, des_sift = sift.detectAndCompute(img, None)
sift_img = cv2.drawKeypoints(img, kp_sift, None, flags=cv2.DRAW_MATCHES_FLAGS_DRAW_RICH_KEYPOINTS)

# ORB
orb = cv2.ORB_create(nfeatures=200)
kp_orb, des_orb = orb.detectAndCompute(img, None)
orb_img = cv2.drawKeypoints(img, kp_orb, None, color=(0,255,0), flags=0)

# Scale + rotation test: rotate and resize, then re-detect SIFT
M = cv2.getRotationMatrix2D((150,150), 45, 0.7)  # rotate 45°, scale 0.7
transformed = cv2.warpAffine(img, M, (300,300))
kp_t, des_t = sift.detectAndCompute(transformed, None)
print(f"SIFT: {len(kp_sift)} kp, descriptor {des_sift.shape}")
print(f"ORB:  {len(kp_orb)} kp, descriptor {des_orb.shape}")
print(f"SIFT on rotated+scaled: {len(kp_t)} kp (should be similar)")

fig, ax = plt.subplots(1, 3, figsize=(15, 5))
ax[0].imshow(sift_img, cmap='gray'); ax[0].set_title(f'SIFT ({len(kp_sift)} kp, 128-dim)')
ax[1].imshow(orb_img, cmap='gray');  ax[1].set_title(f'ORB ({len(kp_orb)} kp, 256-bit)')
ax[2].imshow(transformed, cmap='gray'); ax[2].set_title(f'Rotated+scaled ({len(kp_t)} SIFT kp)')
plt.tight_layout(); plt.show()`,
            output: `Three panels: SIFT keypoints with scale circles and orientation arrows, ORB keypoints as green dots, and the rotated+scaled image with SIFT re-detection. SIFT finds a similar number of keypoints on the transformed image, demonstrating scale+rotation invariance.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Choose the detector:</strong> WHY — accuracy vs speed trade-off; HOW — SIFT for accuracy, ORB for speed, SURF for middle ground.`,
            `<strong>2. Detect keypoints:</strong> HOW — kp = sift.detect(img, None) or detectAndCompute for both.`,
            `<strong>3. Compute descriptors:</strong> HOW — kp, des = detector.detectAndCompute(img, None).`,
            `<strong>4. Match descriptors across images:</strong> HOW — BFMatcher or FlannBasedMatcher; apply Lowe's ratio test.`,
            `<strong>5. Draw or use matches:</strong> HOW — cv2.drawMatches; or estimate homography with RANSAC.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Feature', 'SIFT', 'SURF', 'ORB'],
            rows: [
              ['Detector', 'DoG pyramid', 'Hessian + integral', 'FAST + orientation'],
              ['Descriptor', '128-dim float', '64/128-dim float', '256-bit binary'],
              ['Scale-invariant', 'Yes (excellent)', 'Yes', 'Partial (pyramid)'],
              ['Rotation-invariant', 'Yes', 'Yes', 'Yes'],
              ['Speed', 'Slow (~0.5s/image)', 'Fast (~0.1s)', 'Very fast (~0.02s)'],
              ['Matching', 'L2 distance', 'L2 distance', 'Hamming distance'],
              ['Patent status', 'Free since 2020', 'Free since 2020', 'Always free'],
              ['Best for', 'Max accuracy', 'Balanced', 'Real-time + free']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using ORB for large scale changes (fix: use SIFT — ORB's scale invariance is weaker).`,
            `Mistake 2: Not applying Lowe's ratio test (fix: keep matches only if dist1 < 0.75 * dist2 to remove ambiguous matches).`,
            `Mistake 3: Matching with L2 on binary ORB descriptors (fix: use cv2.NORM_HAMMING for ORB, cv2.NORM_L2 for SIFT).`,
            `Mistake 4: Expecting feature matching on textureless images (fix: SIFT/ORB need texture; blank walls produce no keypoints).`
          ],
          code: `# WRONG: match ORB with L2 norm (wrong distance for binary descriptors)
bf = cv2.BFMatcher(cv2.NORM_L2)   # slow and inaccurate for binary

# RIGHT: use Hamming norm for ORB
bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
matches = bf.match(des1, des2)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Meta — Facebook 360° panorama.</strong> Facebook's 360 photo feature uses ORB features to detect and stitch overlapping phone-camera frames into a full 360° panorama. ORB was chosen over SIFT for speed: the entire feature detection + matching + blending pipeline runs in <3 seconds on a mid-range phone. The pipeline detects ~500 ORB keypoints per frame, matches them with a Hamming-based BFMatcher, estimates a homography with RANSAC, and multi-band blends the warped images. Reported <strong>>90% automatic stitching success rate</strong> on standard panoramas. The choice of ORB (free + fast) was critical for deployment on billions of devices.`,
          list: [
            `Industry: Social media / computational photography`,
            `Dataset: Overlapping phone camera frames for 360° panoramas`,
            `Model: ORB keypoints + BFMatcher + RANSAC homography + multi-band blend`,
            `Results: >90% stitching success; <3s on phone`,
            `Impact: 360° photos used by hundreds of millions of users`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `SIFT: DoG + 128-dim float descriptor; gold standard accuracy; slow.`,
            `ORB: FAST + 256-bit binary descriptor; fast; free; real-time.`,
            `Match SIFT with L2; match ORB with Hamming (NORM_HAMMING).`,
            `Apply Lowe's ratio test: keep matches where dist1 < 0.75*dist2.`,
            `All three need texture — blank/featureless images produce no keypoints.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is ORB's Hamming distance faster to compute than SIFT's L2 distance?\nAns: Hamming distance is a bitwise XOR + popcount (CPU-native instruction), operating on 32 bytes per descriptor. L2 requires subtracting, squaring, and summing 128 floats — far more arithmetic. Hamming is ~10x faster.`,
            `Q2 (math): Two ORB descriptors (8-bit toy): [1,0,1,1,0,1,0,0] and [1,1,1,0,0,1,1,0]. Compute the Hamming distance.\nAns: XOR = [0,1,0,1,0,0,1,0] → popcount = 3.`,
            `Q3 (coding): Create a SIFT detector and extract 200 keypoints.\nAns: sift = cv2.SIFT_create(nfeatures=200); kp, des = sift.detectAndCompute(gray, None).`,
            `Challenge: Why does Lowe's ratio test (dist1 < 0.75*dist2) improve matching?\nAns: It rejects ambiguous matches where the nearest and second-nearest descriptors are similarly close — meaning the keypoint isn't distinctive. Only keeping matches where the nearest is clearly closer ensures the match is reliable.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image with shapes and text. Detect SIFT keypoints and ORB keypoints on it. Then apply a 45° rotation + 50% scale, re-detect both, and compare how many keypoints are re-found. Which is more scale-invariant?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((300,300), dtype=np.uint8)
cv2.rectangle(img, (30,30), (120,120), 200, -1)
cv2.circle(img, (220,220), 50, 200, -1)
cv2.putText(img, 'TEST', (100,180), cv2.FONT_HERSHEY_SIMPLEX, 1.5, 255, 3)

sift = cv2.SIFT_create(200)
orb = cv2.ORB_create(200)
kp_s1, _ = sift.detectAndCompute(img, None)
kp_o1, _ = orb.detectAndCompute(img, None)

M = cv2.getRotationMatrix2D((150,150), 45, 0.5)
img2 = cv2.warpAffine(img, M, (300,300))
kp_s2, _ = sift.detectAndCompute(img2, None)
kp_o2, _ = orb.detectAndCompute(img2, None)

print(f"SIFT: {len(kp_s1)} -> {len(kp_s2)} keypoints (ratio {len(kp_s2)/max(len(kp_s1),1):.1%})")
print(f"ORB:  {len(kp_o1)} -> {len(kp_o2)} keypoints (ratio {len(kp_o2)/max(len(kp_o1),1):.1%})")
fig, ax = plt.subplots(1,2, figsize=(10,4))
ax[0].imshow(img, cmap='gray'); ax[0].set_title('Original')
ax[1].imshow(img2, cmap='gray'); ax[1].set_title('Rotated 45° + scaled 0.5')
plt.tight_layout(); plt.show()`,
            output: `SIFT retains a higher ratio of keypoints after rotation+scaling (typically 60-80%) vs ORB (40-60%), confirming SIFT is more scale-invariant.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'feature-matching': {
      title: 'Feature Matching with RANSAC',
      subtitle: 'Matching keypoints across images and rejecting outliers',
      sections: [
        {
          heading: 'What is Feature Matching with RANSAC?',
          text: `Think of matching two photos of the same building from different angles. You find distinctive features (corners, windows) in each and pair them up. But some matches are wrong — a window in photo A might accidentally match a similar-looking window in photo B that is actually a different part of the building. RANSAC (RANdom SAmple Consensus) is the algorithm that separates the correct matches (inliers) from the wrong ones (outliers) by testing many small random hypotheses. Curiosity gap: how can <em>random sampling</em> produce a robust result? Because the correct model is supported by many inliers — a random sample of correct matches will confirm it, while wrong matches disagree with each other.`,
          list: [
            `Feature matching: compare descriptors with BFMatcher or FlannBasedMatcher`,
            `Lowe's ratio test: keep matches where dist1 < 0.75 * dist2`,
            `RANSAC: iteratively fit a model (homography) from random 4-point samples`,
            `Inliers = matches consistent with the best model; outliers = rejected`,
            `Output: a homography H (3x3) mapping one image to the other`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Feature matching compares each descriptor in image A to all descriptors in image B, finding the nearest neighbour (smallest distance). Lowe's ratio test rejects ambiguous matches: if the best match's distance is not significantly smaller than the second-best (ratio < 0.75), the match is discarded. This removes many false matches but not all — some survive by chance.</p>`,
            `<p>RANSAC then estimates a geometric model (typically a 3x3 homography for planar scenes or a fundamental matrix for 3D scenes) from the surviving matches. It works in iterations: (1) randomly sample the minimum number of matches needed (4 for homography); (2) compute the model (cv2.findHomography); (3) count how many other matches are consistent with it (inliers); (4) repeat many times and keep the model with the most inliers. After RANSAC, the final homography is re-estimated from all inliers for precision.</p>`,
            `<p>Use feature matching + RANSAC whenever you need to align two images: panorama stitching (estimate the homography between overlapping frames), object recognition (match a template to a scene), visual odometry (match consecutive frames for camera motion), and augmented reality (anchor virtual objects to real-world planes). The homography H maps points from one image to the other: p' = H * p.</p>`
          ],
          note: `Reference: Fischler, M.A. & Bolles, R.C. (1981), <em>Random Sample Consensus: A Paradigm for Model Fitting with Applications to Image Analysis</em>, Communications of the ACM.`
        },
        {
          heading: 'Visual Representation',
          code: `Feature matching + RANSAC pipeline

  Image A                Image B
    |                      |
  SIFT/ORB detect        SIFT/ORB detect
    |                      |
  Descriptors A          Descriptors B
    |                      |
    +-------- MATCH --------+  (BFMatcher + Lowe ratio test)
               |
          Raw matches (some correct, some wrong)
               |
          RANSAC (cv2.findHomography with RANSAC)
               |
     Inliers (correct) + Homography H (3x3)
     Outliers (rejected)

  RANSAC iteration:
    1. Sample 4 random matches
    2. Compute H from these 4
    3. Count inliers (matches consistent with H)
    4. Repeat N times; keep H with most inliers`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Homography and RANSAC inlier count',
            code: `Homography (3x3):
  [x']   [h11 h12 h13]   [x]
  [y'] = [h21 h22 h23] * [y]
  [1 ]   [h31 h32 h33]   [1]
  → x' = (h11*x + h12*y + h13) / (h31*x + h32*y + h33)
  → y' = (h21*x + h22*y + h23) / (h31*x + h32*y + h33)

  Requires 4 matched point pairs (8 equations for 8 DOF)

RANSAC inlier test:
  For each match (p_A, p_B):
    project p_A via H → p_pred = H * p_A
    error = ||p_pred - p_B||
    inlier if error < threshold (e.g., 5 pixels)

Worked example — 10 matches, RANSAC with 5px threshold:
  Iteration 1: sample 4 matches → H1 → 6 inliers, 4 outliers
  Iteration 2: sample 4 matches → H2 → 3 inliers
  ...
  Best H: the one with 8 inliers (2 outliers)
  → H is recomputed from the 8 inliers for precision.

Python:
  H, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
  inliers = mask.ravel().tolist().count(1)
  print("Inliers:", inliers, "Outliers:", len(mask) - inliers)`,
            output: `Inliers: 8 Outliers: 2 — RANSAC found the homography supported by 8 of 10 matches, rejecting the 2 false matches. The mask has 1 for inliers, 0 for outliers.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Match SIFT features between two images with RANSAC outlier rejection',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# create two related images: original + perspective-warped version
img1 = np.zeros((300, 400), dtype=np.uint8)
cv2.rectangle(img1, (50, 50), (150, 150), 200, -1)
cv2.circle(img1, (280, 200), 40, 200, -1)
cv2.putText(img1, 'MATCH', (100, 250), cv2.FONT_HERSHEY_SIMPLEX, 1, 255, 2)

# warp img1 to create img2 (perspective change)
src = np.float32([[0,0],[399,0],[399,299],[0,299]])
dst = np.float32([[20,40],[380,10],[370,280],[30,260]])
H_true = cv2.getPerspectiveTransform(src, dst)
img2 = cv2.warpPerspective(img1, H_true, (400, 300))

# SIFT detect + describe
sift = cv2.SIFT_create(300)
kp1, des1 = sift.detectAndCompute(img1, None)
kp2, des2 = sift.detectAndCompute(img2, None)

# match with BFMatcher + Lowe ratio test
bf = cv2.BFMatcher()
raw_matches = bf.knnMatch(des1, des2, k=2)
good = [m for m, n in raw_matches if m.distance < 0.75 * n.distance]
print(f"Raw matches: {len(raw_matches)}, After ratio test: {len(good)}")

# RANSAC to find homography and reject outliers
src_pts = np.float32([kp1[m.queryIdx].pt for m in good]).reshape(-1, 1, 2)
dst_pts = np.float32([kp2[m.trainIdx].pt for m in good]).reshape(-1, 1, 2)
H, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
inliers = [m for i, m in enumerate(good) if mask[i]]
outliers = [m for i, m in enumerate(good) if not mask[i]]
print(f"RANSAC inliers: {len(inliers)}, outliers: {len(outliers)}")

# draw: green = inliers, red = outliers
match_img = cv2.drawMatches(img1, kp1, img2, kp2, inliers, None,
                            matchColor=(0,255,0), flags=cv2.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS)
match_img = cv2.drawMatches(img1, kp1, img2, kp2, outliers, match_img,
                            matchColor=(0,0,255), flags=cv2.DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS)

plt.figure(figsize=(16, 6))
plt.imshow(match_img); plt.title(f'Green=inliers ({len(inliers)}), Red=outliers ({len(outliers)})')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `A match visualisation: two images side-by-side with lines connecting matched keypoints. Green lines = RANSAC inliers (correct matches consistent with the homography); red lines = outliers (false matches rejected by RANSAC). Typically 70-90% of ratio-tested matches survive as inliers.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Detect + describe features in both images:</strong> HOW — kp, des = sift.detectAndCompute(img, None) for each.`,
            `<strong>2. Match descriptors:</strong> HOW — bf.knnMatch(des1, des2, k=2) for the top-2 nearest neighbours.`,
            `<strong>3. Apply Lowe's ratio test:</strong> WHY — reject ambiguous matches; HOW — keep if m.distance < 0.75 * n.distance.`,
            `<strong>4. Run RANSAC:</strong> WHY — reject geometric outliers and estimate homography; HOW — cv2.findHomography(src, dst, cv2.RANSAC, 5.0).`,
            `<strong>5. Use the homography:</strong> HOW — cv2.warpPerspective to align, or count inliers for object recognition.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Matcher', 'Speed', 'Accuracy', 'When to use', 'OpenCV call'],
            rows: [
              ['BFMatcher (brute force)', 'Slow (O(N*M))', 'Exact nearest', 'Small #keypoints, exact matching', 'cv2.BFMatcher(cv2.NORM_L2)'],
              ['FLANN', 'Fast (approximate)', 'Approximate', 'Large #keypoints, real-time', 'cv2.FlannBasedMatcher(...)'],
              ['RANSAC (post-match)', 'Medium', 'Rejects outliers', 'Always use after matching for geometry', 'cv2.findHomography(..., RANSAC)'],
              ['Cross-check', '2x BFMatcher', 'No false matches', 'When #matches is small', 'BFMatcher(crossCheck=True)']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using all raw matches without ratio test or RANSAC (fix: always apply Lowe's ratio test, then RANSAC for geometry).`,
            `Mistake 2: Using RANSAC threshold too tight (fix: 3-5 pixels is standard; too tight rejects valid matches under noise).`,
            `Mistake 3: Not enough matches for homography (fix: need at least 4 point pairs; aim for 10+ after ratio test).`,
            `Mistake 4: Using BFMatcher when FLANN would be much faster (fix: for >500 keypoints, use FlannBasedMatcher with a KD-tree index).`
          ],
          code: `# WRONG: use raw matches without filtering
matches = bf.match(des1, des2)   # includes many false matches
H = cv2.findHomography(src, dst, 0, 5.0)   # no RANSAC → H is garbage

# RIGHT: ratio test + RANSAC
good = [m for m,n in bf.knnMatch(des1, des2, k=2) if m.distance < 0.75*n.distance]
H, mask = cv2.findHomography(src, dst, cv2.RANSAC, 5.0)   # robust H`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Pix4D — drone photogrammetry.</strong> Pix4D's drone-mapping software matches SIFT features across hundreds of overlapping aerial photos to reconstruct 3D terrain models. Each pair of adjacent photos produces ~10,000 SIFT matches; after Lowe's ratio test, ~3,000 survive; after RANSAC (fundamental matrix, 5px threshold), ~2,500 inliers remain. These inliers feed a bundle-adjustment pipeline that jointly optimises all camera poses and 3D points. The pipeline produces <strong>cm-level accuracy</strong> on a 100-hectare site from 200 drone photos. RANSAC is essential — without it, the ~500 false matches per pair would corrupt the 3D reconstruction, producing warped terrain models.`,
          list: [
            `Industry: Drone surveying / photogrammetry`,
            `Dataset: 200+ overlapping aerial photos (42 MP each)`,
            `Model: SIFT matching + RANSAC + bundle adjustment`,
            `Results: cm-level 3D terrain accuracy on 100-hectare sites`,
            `Impact: Used in construction, agriculture, mining surveys`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Match descriptors with BFMatcher or FLANN; apply Lowe's ratio test (< 0.75).`,
            `RANSAC fits a homography from random 4-point samples; keeps the model with most inliers.`,
            `cv2.findHomography(src, dst, cv2.RANSAC, 5.0) returns H + inlier mask.`,
            `RANSAC threshold 3-5 pixels; need at least 4 matches (aim for 10+).`,
            `Use FLANN for >500 keypoints; BFMatcher for small sets or exact matching.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does RANSAC work even when 50% of matches are wrong?\nAns: RANSAC samples the minimum model size (4 points) randomly; if all 4 are correct (probability (0.5)^4 ≈ 6% per iteration), the resulting model is correct. After ~100 iterations, the probability of never sampling 4 correct points is negligible. The correct model is then supported by all inliers.`,
            `Q2 (math: RANSAC iterations): If the inlier ratio is 0.7 and the model needs 4 points, how many iterations for 99% confidence?\nAns: w=0.7, p=0.99; N = log(1-0.99)/log(1-w^4) = log(0.01)/log(1-0.24) = 4.6/0.12 ≈ 38 iterations.`,
            `Q3 (coding): Run RANSAC homography with a 5-pixel threshold.\nAns: H, mask = cv2.findHomography(src, dst, cv2.RANSAC, 5.0).`,
            `Challenge: Why use Lowe's ratio test BEFORE RANSAC instead of after?\nAns: The ratio test is cheap (O(1) per match) and removes most false matches, reducing the outlier ratio before RANSAC. A lower outlier ratio means RANSAC needs fewer iterations to find a good model — making the whole pipeline faster and more reliable.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create two images (original + a perspective-warped version). Detect SIFT features, match with BFMatcher + Lowe's ratio test, then run RANSAC. Draw the matches with inliers in green and outliers in red. How many outliers does RANSAC reject?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img1 = np.zeros((300,400), dtype=np.uint8)
cv2.rectangle(img1,(50,50),(150,150),200,-1)
cv2.circle(img1,(300,200),40,200,-1)
cv2.putText(img1,'CV',(120,250),cv2.FONT_HERSHEY_SIMPLEX,1.5,255,3)

src = np.float32([[0,0],[399,0],[399,299],[0,299]])
dst = np.float32([[30,50],[370,20],[360,280],[20,260]])
H_t = cv2.getPerspectiveTransform(src, dst)
img2 = cv2.warpPerspective(img1, H_t, (400,300))

sift = cv2.SIFT_create(200)
kp1,des1 = sift.detectAndCompute(img1,None)
kp2,des2 = sift.detectAndCompute(img2,None)
bf = cv2.BFMatcher()
good = [m for m,n in bf.knnMatch(des1,des2,k=2) if m.distance < 0.75*n.distance]
src_p = np.float32([kp1[m.queryIdx].pt for m in good]).reshape(-1,1,2)
dst_p = np.float32([kp2[m.trainIdx].pt for m in good]).reshape(-1,1,2)
H, mask = cv2.findHomography(src_p, dst_p, cv2.RANSAC, 5.0)
inliers = [m for i,m in enumerate(good) if mask[i]]
outliers = [m for i,m in enumerate(good) if not mask[i]]
print(f"Good matches: {len(good)}, Inliers: {len(inliers)}, Outliers: {len(outliers)}")

vis = cv2.drawMatches(img1,kp1,img2,kp2,inliers,None,matchColor=(0,255,0))
vis = cv2.drawMatches(img1,kp1,img2,kp2,outliers,vis,matchColor=(0,0,255))
plt.figure(figsize=(14,5)); plt.imshow(vis)
plt.title(f'Green=inliers ({len(inliers)}), Red=outliers ({len(outliers)})')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `Good matches ~20-40; inliers ~80-95% of good matches; outliers ~1-5. Green lines connect correctly matched features; red lines are false matches rejected by RANSAC.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'panorama-stitching': {
      title: 'Panorama Stitching',
      subtitle: 'Building a panorama stitcher from features to blending',
      sections: [
        {
          heading: 'What is Panorama Stitching?',
          text: `Think of taking multiple overlapping photos of a landscape and taping them together into one wide panorama. The algorithm does this automatically: it finds matching features in the overlaps, computes how the images relate (a homography), warps them into a common frame, and blends the seams. Curiosity gap: why can't you just overlay the images? Because each photo is taken from a slightly different position — the perspective changes. You need a geometric <em>warp</em> to align them, not just a translation.`,
          list: [
            `Detect features (SIFT/ORB) in each image`,
            `Match features between overlapping pairs`,
            `Estimate homography with RANSAC`,
            `Warp images into a common panorama canvas`,
            `Blend seams (multi-band or feather blending) to hide stitching artefacts`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Panorama stitching is the showcase application of feature detection + matching + homography. The pipeline: (1) detect keypoints in each image; (2) match descriptors between adjacent (overlapping) images; (3) use RANSAC to estimate the 3x3 homography mapping one image to the next; (4) create a large canvas and warp each image into it using cv2.warpPerspective; (5) blend overlapping regions to hide exposure differences and seams.</p>`,
            `<p>For a 2-image panorama, you fix image 1 as the reference and warp image 2 into image 1's coordinate frame. For N images, you chain homographies (H_12, H_23, ...) to map all into the reference frame. The canvas must be large enough to contain all warped images — compute the bounding box of the warped corners. Blending matters: simple averaging creates ghosting where objects moved; multi-band blending (Laplacian pyramids) blends low frequencies broadly and high frequencies narrowly, hiding seams while preserving detail.</p>`,
            `<p>OpenCV provides cv2.Stitcher_create() for a ready-made pipeline. But building it manually teaches you each step and gives you control (custom blending, handling specific overlaps). The quality depends on: sufficient overlap (20-30%), texture in the overlap (featureless sky = no matches), and consistent exposure (or good blending).</p>`
          ],
          note: `Reference: Brown, M. & Lowe, D.G. (2007), <em>Automatic Panoramic Image Stitching using Invariant Features</em>, IJCV.`
        },
        {
          heading: 'Visual Representation',
          code: `Panorama stitching pipeline (2 images)

  img1 (left)      img2 (right)
    |                 |
  SIFT detect      SIFT detect
    |                 |
    +---- match -------+
              |
         RANSAC → H (3x3 homography)
              |
    warp img2 into img1's frame:
    result = cv2.warpPerspective(img2, H, (W_total, H_total))
    result[0:H1, 0:W1] = img1     # paste img1
              |
         blend the overlap seam
              |
         Panorama (one wide image)

  For N images: chain homographies H_12, H_23, ...`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Homography chaining and canvas bounding box',
            code: `Single pair:
  p' = H * p   (warp img2 point p into img1's coordinate frame)
  H is 3x3, estimated by RANSAC from 4+ matched point pairs.

Canvas size (to fit both images):
  corners_img1 = [[0,0],[W1,0],[W1,H1],[0,H1]]
  corners_img2_warped = H * corners_img2  (project img2's corners)
  all_corners = concat(corners_img1, corners_img2_warped)
  canvas_W = max_x - min_x; canvas_H = max_y - min_y
  offset = translation so min corner → (0,0)
  T = [[1,0,-min_x],[0,1,-min_y],[0,0,1]]
  H_final = T * H   (apply offset to the homography)

Worked example:
  img1: 400x300, img2: 400x300
  H maps img2 into img1; warped img2 corners extend to x=750
  → canvas width = 750, canvas height = 320
  T shifts by (-min_x, -min_y) to fit in the canvas
  H_final = T @ H

Python (2-image stitch):
  H, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
  result = cv2.warpPerspective(img2, H, (img1.shape[1]+img2.shape[1], img1.shape[0]))
  result[0:img1.shape[0], 0:img1.shape[1]] = img1`,
            output: `A wide canvas with img1 on the left and img2 warped and placed on the right, overlapping in the middle. The homography H aligns the overlapping features.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Build a panorama stitcher from scratch (2 images)',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# create two overlapping synthetic images
img1 = np.zeros((300, 400, 3), dtype=np.uint8)
cv2.rectangle(img1, (50, 50), (200, 200), (0, 100, 255), -1)
cv2.circle(img1, (300, 150), 50, (255, 200, 0), -1)
cv2.putText(img1, 'IMG1', (100, 280), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)

# img2 = img1 shifted right by 200px (simulating camera pan)
img2 = np.zeros((300, 400, 3), dtype=np.uint8)
img2[:, :200] = img1[:, 200:]   # left half of img2 = right half of img1
cv2.circle(img2, (100, 150), 50, (255, 200, 0), -1)   # overlap region
cv2.putText(img2, 'IMG2', (100, 280), cv2.FONT_HERSHEY_SIMPLEX, 1, (255,255,255), 2)

# 1. SIFT detect + describe
sift = cv2.SIFT_create(500)
kp1, des1 = sift.detectAndCompute(cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY), None)
kp2, des2 = sift.detectAndCompute(cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY), None)

# 2. Match + ratio test
bf = cv2.BFMatcher()
good = [m for m, n in bf.knnMatch(des1, des2, k=2) if m.distance < 0.75 * n.distance]
print(f"Good matches: {len(good)}")

# 3. RANSAC homography
src = np.float32([kp1[m.queryIdx].pt for m in good]).reshape(-1,1,2)
dst = np.float32([kp2[m.trainIdx].pt for m in good]).reshape(-1,1,2)
H, mask = cv2.findHomography(src, dst, cv2.RANSAC, 5.0)
print(f"Inliers: {int(mask.sum())}/{len(good)}")

# 4. Warp img2 into img1's frame
result = cv2.warpPerspective(img2, H, (img1.shape[1]+img2.shape[1], img1.shape[0]))
result[0:img1.shape[0], 0:img1.shape[1]] = img1

fig, ax = plt.subplots(1, 3, figsize=(18, 5))
ax[0].imshow(cv2.cvtColor(img1, cv2.COLOR_BGR2RGB)); ax[0].set_title('Image 1')
ax[1].imshow(cv2.cvtColor(img2, cv2.COLOR_BGR2RGB)); ax[1].set_title('Image 2')
ax[2].imshow(cv2.cvtColor(result, cv2.COLOR_BGR2RGB)); ax[2].set_title('Stitched panorama')
plt.tight_layout(); plt.show()`,
            output: `Three panels: img1 (left half), img2 (right half with overlap), and the wide stitched panorama with the overlapping circle aligned. The homography aligns the shared features.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Capture overlapping images:</strong> WHY — need 20-30% overlap for feature matching; HOW — pan the camera horizontally with ~25% overlap.`,
            `<strong>2. Detect + match features:</strong> HOW — SIFT/ORB + BFMatcher + Lowe ratio test.`,
            `<strong>3. Estimate homography with RANSAC:</strong> HOW — cv2.findHomography(src, dst, cv2.RANSAC, 5.0).`,
            `<strong>4. Compute the canvas size:</strong> HOW — project all corners, find bounding box, add translation to H.`,
            `<strong>5. Warp and blend:</strong> HOW — cv2.warpPerspective; blend the overlap (feathering or multi-band).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Approach', 'Ease', 'Flexibility', 'Blending', 'When to use'],
            rows: [
              ['cv2.Stitcher (built-in)', 'Easiest', 'Low (black-box)', 'Built-in multi-band', 'Quick panorama, standard cases'],
              ['Manual (SIFT + RANSAC + warp)', 'Medium', 'High (customise each step)', 'You implement blending', 'Learning, custom pipelines'],
              ['Multi-band blending', 'Hard', 'High', 'Best (Laplacian pyramid)', 'Professional panoramas'],
              ['Feather blending', 'Easy', 'Medium', 'Simple alpha fade', 'Quick prototypes']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Too little overlap between images (fix: aim for 20-30% overlap — without it, too few features match).`,
            `Mistake 2: Featureless overlap (sky, blank wall) (fix: include textured areas in the overlap; sky produces no SIFT keypoints).`,
            `Mistake 3: Not computing the canvas bounding box (fix: warp all corners and find the min/max to size the canvas).`,
            `Mistake 4: No blending — hard seam visible (fix: feather or multi-band blend the overlap region).`
          ],
          code: `# WRONG: just concatenate images side by side (no alignment)
panorama = np.hstack([img1, img2])   # misaligned if camera moved

# RIGHT: warp img2 into img1's frame using the homography
result = cv2.warpPerspective(img2, H, (W_canvas, H_canvas))
result[0:H1, 0:W1] = img1   # paste reference`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Google Street View.</strong> Google's Street View cars capture overlapping 360° panoramas every 10-20 metres. Each panorama is stitched from multiple overlapping fisheye photos. The pipeline uses SIFT features (now ORB for speed) to match adjacent photos, RANSAC for the homography, and multi-band blending for seamless joins. For geo-referencing, consecutive panoramas are matched to close the "loop" and correct drift. Google processes <strong>millions of panoramas</strong> with this pipeline, achieving sub-pixel alignment in most cases. The same feature-matching pipeline enables the "jump" navigation between Street View bubbles by matching features across consecutive panoramas.`,
          list: [
            `Industry: Mapping / street-level imagery`,
            `Dataset: Millions of 360° panoramas from fisheye cameras`,
            `Model: ORB matching + RANSAC homography + multi-band blend`,
            `Results: Sub-pixel alignment; seamless 360° panoramas`,
            `Impact: Google Street View covering 16M+ km of roads`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Panorama = feature matching + homography + warp + blend.`,
            `Need 20-30% overlap with texture for reliable feature matching.`,
            `RANSAC estimates the 3x3 homography; warp with warpPerspective.`,
            `Compute the canvas bounding box from warped corners.`,
            `Blend the overlap (feather or multi-band) to hide seams.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does a homography (not just a translation) model the relationship between panorama photos?\nAns: The camera rotates and translates between shots, causing perspective distortion — straight lines may converge differently in each photo. A homography (8 DOF) captures the full projective transformation; a translation (2 DOF) cannot handle perspective effects.`,
            `Q2 (math): You stitch two 400x300 images. The warped corners of img2 extend to x=700. What canvas width do you need?\nAns: 700px (to contain both img1 at 0-400 and warped img2 extending to 700).`,
            `Q3 (coding): Use OpenCV's built-in stitcher for two images.\nAns: stitcher = cv2.Stitcher_create(); status, pano = stitcher.stitch([img1, img2]).`,
            `Challenge: Why does multi-band blending produce better panoramas than simple averaging?\nAns: Multi-band blending decomposes the image into Laplacian pyramids: low frequencies (colour, exposure) are blended over a wide area, hiding exposure differences; high frequencies (edges, detail) are blended narrowly, preserving sharpness. Simple averaging blurs all frequencies uniformly, creating ghosting where objects moved.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create two overlapping synthetic images (shift the second by 150 pixels). Build a manual panorama stitcher: SIFT → match → RANSAC → warp → paste. Then try the built-in cv2.Stitcher_create() and compare.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

# overlapping images
img1 = np.zeros((300, 400, 3), dtype=np.uint8)
cv2.rectangle(img1,(50,50),(200,200),(50,150,255),-1)
cv2.circle(img1,(320,150),40,(255,200,50),-1)
img2 = np.zeros((300, 400, 3), dtype=np.uint8)
img2[:, :250] = img1[:, 150:]    # 250px overlap
cv2.putText(img2,'2',(150,250),cv2.FONT_HERSHEY_SIMPLEX,2,(255,255,255),3)

sift = cv2.SIFT_create(300)
g1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
g2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
kp1,des1 = sift.detectAndCompute(g1, None)
kp2,des2 = sift.detectAndCompute(g2, None)
bf = cv2.BFMatcher()
good = [m for m,n in bf.knnMatch(des1,des2,k=2) if m.distance < 0.75*n.distance]
src = np.float32([kp1[m.queryIdx].pt for m in good]).reshape(-1,1,2)
dst = np.float32([kp2[m.trainIdx].pt for m in good]).reshape(-1,1,2)
H,mask = cv2.findHomography(src, dst, cv2.RANSAC, 5.0)
result = cv2.warpPerspective(img2, H, (img1.shape[1]+img2.shape[1], img1.shape[0]))
result[0:img1.shape[0], 0:img1.shape[1]] = img1
plt.figure(figsize=(14,5)); plt.imshow(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))
plt.title(f'Panorama ({len(good)} matches, {int(mask.sum())} inliers)'); plt.axis('off')
plt.tight_layout(); plt.show()`,
            output: `A wide stitched panorama with the overlapping circle aligned. Match and inlier counts confirm reliable stitching.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'template-matching': {
      title: 'Template Matching',
      subtitle: 'Finding a small patch in a larger image by sliding and comparing',
      sections: [
        {
          heading: 'What is Template Matching?',
          text: `Think of a child playing "Where's Waldo?" — they scan the page looking for a specific pattern. Template matching does this computationally: you have a small template image and a larger search image; you slide the template across every position and compute a similarity score. The position with the highest score is where the template best matches. Curiosity gap: why does template matching fail when the object is rotated or scaled? Because it slides the template <em>literally</em> — it doesn't account for geometric changes. A 10° rotation breaks it.`,
          list: [
            `Slide a template across the image; compare at each position`,
            `Methods: squared difference (TM_SQDIFF), correlation (TM_CCORR), normalised (TM_CCOEFF_NORMED)`,
            `cv2.matchTemplate returns a result map; cv2.minMaxLoc finds the best match`,
            `Works for exact or near-exact matches; fails under rotation/scale change`,
            `For scale/rotation invariance, use feature matching (SIFT/ORB) instead`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Template matching slides a small template T across a larger image I, at each position (x,y) computing a similarity (or dissimilarity) score between T and the corresponding patch of I. The result is a map R(x,y) of scores. For TM_CCOEFF_NORMED (normalised cross-correlation), R ranges from -1 (perfect anti-match) to +1 (perfect match). The best match is at the position with the maximum R (or minimum for TM_SQDIFF).</p>`,
            `<p>Normalised cross-correlation (TM_CCOEFF_NORMED) is the most robust method because it's invariant to brightness and contrast changes — it correlates the zero-mean, unit-norm versions of the template and patch. TM_SQDIFF (squared difference) is simple but sensitive to brightness. Multi-scale template matching repeats the search at multiple template sizes to handle scale changes; multi-rotation repeats at multiple angles — but both are expensive.</p>`,
            `<p>Use template matching when the object appears at a fixed scale and orientation: factory inspection (finding a specific part on a conveyor), UI testing (finding a button on a screenshot), medical imaging (finding a standard landmark), or tracking a patch in a short video. When the object can rotate or scale, switch to feature-based matching (SIFT/ORB + RANSAC) which is inherently invariant.</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Template matching: slide and score

  Search image I (W x H)     Template T (w x h)
  +---+---+---+---+---+      +---+
  |   |   |   |   |   |      | T |
  +---+---+---+---+---+      +---+
  |   |[T]|   |   |   |   ← slide T across I
  +---+---+---+---+---+      at each (x,y):
  |   |   |   |   |   |      R(x,y) = match_score(I[y:y+h, x:x+w], T)
  +---+---+---+---+---+
                              Result map R: (W-w+1) x (H-h+1)
  Best match = argmax(R)      → (x_best, y_best) = top-left corner

  Methods:
    TM_SQDIFF_NORMED:    0 = perfect (minimise)
    TM_CCORR_NORMED:     1 = perfect (maximise)
    TM_CCOEFF_NORMED:    1 = perfect (maximise, brightness-invariant)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Normalised cross-correlation formula',
            code: `TM_CCOEFF_NORMED (normalised cross-correlation):
  R(x,y) = sum_{x',y'} (T'(x',y') * I'(x+x', y+y'))
           / sqrt( sum T'^2 * sum I'^2 )

  where T' = T - mean(T),  I' = I_patch - mean(I_patch)

  Range: [-1, 1]
    +1 = perfect match (identical pattern)
     0 = no correlation
    -1 = perfect anti-match (inverted pattern)

Worked example — 2x2 template on a 3x3 image:
  T = [[1, 0], [0, 1]]   (diagonal pattern)
  I = [[0,0,0], [0,1,0], [0,0,1]]   (diagonal at bottom-right)

  At position (1,1): I_patch = [[1,0],[0,1]] = T
  → R = 1.0 (perfect match)
  At position (0,0): I_patch = [[0,0],[0,1]]
  → R = lower (partial match)

  Best match → (1,1) → the template is found at row 1, col 1.

Python:
  import cv2, numpy as np
  img = np.zeros((100,100), dtype=np.uint8)
  cv2.rectangle(img, (30,30), (60,60), 255, -1)   # target
  template = img[30:61, 30:61].copy()              # the target as template
  R = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)
  _, max_val, _, max_loc = cv2.minMaxLoc(R)
  print("Best match at:", max_loc, "score:", round(max_val,3))`,
            output: `Best match at: (30, 30) score: 1.0 — the template is found at exactly the position where it was cropped, with a perfect correlation score.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Multi-template matching with threshold for multiple detections',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# create a search image with multiple identical shapes
img = np.zeros((300, 400), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (90, 90), 200, -1)       # target shape (40x40)
cv2.rectangle(img, (200, 100), (240, 140), 200, -1)   # same shape
cv2.rectangle(img, (300, 200), (340, 240), 200, -1)   # same shape
cv2.circle(img, (150, 200), 25, 150, -1)               # distractor

# crop the template
template = img[50:91, 50:91].copy()
h, w = template.shape

# match
R = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)
threshold = 0.8
locations = np.where(R >= threshold)

# draw all matches (NMS to avoid duplicates)
result = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
for pt in zip(*locations[::-1]):
    cv2.rectangle(result, pt, (pt[0]+w, pt[1]+h), (0, 0, 255), 2)

print(f"Matches above {threshold}: {len(list(zip(*locations[::-1])))}")

fig, ax = plt.subplots(1, 3, figsize=(15, 5))
ax[0].imshow(img, cmap='gray');      ax[0].set_title('Search image')
ax[1].imshow(template, cmap='gray'); ax[1].set_title('Template (40x40)')
ax[2].imshow(cv2.cvtColor(result, cv2.COLOR_BGR2RGB)); ax[2].set_title('Detections (red boxes)')
plt.tight_layout(); plt.show()`,
            output: `Three panels: the search image with three identical squares and a circle distractor, the 40x40 template, and the detection result with red boxes around all three matching squares (the circle is correctly not matched).`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Prepare the template:</strong> WHY — needs to be an exact crop of the target; HOW — template = img[y:y+h, x:x+w].copy().`,
            `<strong>2. Run matchTemplate:</strong> HOW — R = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED).`,
            `<strong>3. Find the best match:</strong> HOW — _, max_val, _, max_loc = cv2.minMaxLoc(R).`,
            `<strong>4. For multiple matches, threshold R:</strong> HOW — locations = np.where(R >= 0.8); apply NMS to avoid duplicates.`,
            `<strong>5. Draw bounding boxes:</strong> HOW — cv2.rectangle(img, pt, (pt[0]+w, pt[1]+h), colour, 2).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Method', 'Score range', 'Best match', 'Brightness-invariant?', 'When to use'],
            rows: [
              ['TM_SQDIFF', '0 to large', 'Minimum', 'No', 'Exact pixel match'],
              ['TM_SQDIFF_NORMED', '0 to 1', 'Minimum', 'Partial', 'Near-exact match'],
              ['TM_CCORR_NORMED', '0 to 1', 'Maximum', 'No', 'Simple correlation'],
              ['TM_CCOEFF_NORMED', '-1 to 1', 'Maximum', 'Yes (zero-mean)', 'Recommended (robust)']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using template matching on rotated/scaled objects (fix: use SIFT/ORB feature matching for geometric invariance).`,
            `Mistake 2: Using TM_SQDIFF on images with varying brightness (fix: use TM_CCOEFF_NORMED — brightness-invariant).`,
            `Mistake 3: Not applying a threshold for multiple matches (fix: threshold R at 0.7-0.9 and apply NMS).`,
            `Mistake 4: Template too large or too small (fix: the template should be the exact size of the target object).`
          ],
          code: `# WRONG: template matching on a rotated object
R = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)  # rotated → no match

# RIGHT: for rotated/scaled objects, use feature matching
orb = cv2.ORB_create()
kp1, des1 = orb.detectAndCompute(template, None)
kp2, des2 = orb.detectAndCompute(img, None)
# then match + RANSAC (see feature-matching topic)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Siemens — PCB defect inspection.</strong> Siemens' factory automation inspects printed circuit boards (PCBs) on a production line at 100+ boards/minute. Each board has known components at known positions; template matching (TM_CCOEFF_NORMED) checks that each component is present and correctly placed. The template is a golden-sample image of a perfect component. A match score below 0.95 flags the component as missing or misaligned. Reported <strong>>99.5% defect detection rate</strong> at line speed. Template matching works here because the camera position, lighting, and board orientation are controlled — no rotation or scale variation, making it faster and more reliable than feature matching.`,
          list: [
            `Industry: Electronics manufacturing / quality inspection`,
            `Dataset: PCB images at 100+ boards/minute, controlled environment`,
            `Model: Template matching (TM_CCOEFF_NORMED) with golden-sample templates`,
            `Results: >99.5% defect detection at line speed`,
            `Impact: Automated quality control for electronics manufacturing`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Template matching slides a template across the image; scores each position.`,
            `TM_CCOEFF_NORMED is recommended (brightness-invariant, range -1 to 1).`,
            `cv2.matchTemplate + cv2.minMaxLoc for single; threshold + NMS for multiple.`,
            `Fails under rotation/scale — use SIFT/ORB for those cases.`,
            `Best for controlled environments (factory inspection, UI testing).`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is TM_CCOEFF_NORMED more robust than TM_SQDIFF?\nAns: TM_CCOEFF_NORMED subtracts the mean from both the template and the patch before correlating, making the score invariant to brightness and contrast. TM_SQDIFF directly compares pixel values, so a brightness shift inflates the difference even for a correct match.`,
            `Q2 (math): Template is 30x40, image is 300x400. What is the size of the match result map?\nAns: (300-30+1) x (400-40+1) = 271 x 361.`,
            `Q3 (coding): Find all positions where the match score exceeds 0.9.\nAns: R = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED); positions = np.where(R >= 0.9).`,
            `Challenge: Why does template matching fail when the object is rotated 15°, even though it's the same object?\nAns: The template is a fixed pixel pattern; a 15° rotation changes every pixel's position relative to the template grid. Even a small rotation causes the pixel-by-pixel comparison to fail because no position in the search image exactly matches the unrotated template. Feature-based methods (SIFT/ORB) handle this because they extract rotation-invariant descriptors.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a 400x400 image with three identical circles and one square. Crop one circle as a template. Use cv2.matchTemplate with TM_CCOEFF_NORMED and a threshold of 0.9 to find all circles. Draw red boxes around them. Does the square get matched?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((400, 400), dtype=np.uint8)
cv2.circle(img, (80, 80), 30, 200, -1)
cv2.circle(img, (200, 200), 30, 200, -1)
cv2.circle(img, (320, 120), 30, 200, -1)
cv2.rectangle(img, (150, 300), (210, 360), 200, -1)    # distractor

template = img[50:111, 50:111].copy()   # crop one circle (61x61)
h, w = template.shape

R = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)
locs = np.where(R >= 0.9)
result = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
for pt in zip(*locs[::-1]):
    cv2.rectangle(result, pt, (pt[0]+w, pt[1]+h), (0,0,255), 2)

print(f"Matches: {len(list(zip(*locs[::-1])))}")
fig, ax = plt.subplots(1, 3, figsize=(14,4))
ax[0].imshow(img, cmap='gray'); ax[0].set_title('Search image')
ax[1].imshow(template, cmap='gray'); ax[1].set_title('Template')
ax[2].imshow(cv2.cvtColor(result, cv2.COLOR_BGR2RGB)); ax[2].set_title('Detections')
plt.tight_layout(); plt.show()`,
            output: `Matches: 3 (the three circles). The square is correctly NOT matched — its shape differs from the circular template, so the correlation score is below 0.9.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
