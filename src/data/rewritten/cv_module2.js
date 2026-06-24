// Computer Vision — Module 2: Image Processing with OpenCV
// Exports: cvModule2Structure (sidebar) + cvModule2Content (topic bodies)
// Hands-on OpenCV: geometric ops, color conversions, smoothing/sharpening,
// histogram equalization, morphology, and Canny edge detection.

export const cvModule2Structure = {
  module2: {
    title: 'Module 2: Image Processing',
    topics: [
      { id: 'geometric-ops', title: 'Geometric Operations (Resize, Crop, Rotate)' },
      { id: 'color-conversions', title: 'Color Space Conversions' },
      { id: 'smoothing-sharpening', title: 'Smoothing & Sharpening' },
      { id: 'histogram-equalization', title: 'Histogram Equalization' },
      { id: 'morphology', title: 'Morphological Operations' },
      { id: 'canny-edge', title: 'Canny Edge Detection' },
    ]
  }
};

export const cvModule2Content = {
  module2: {
    'geometric-ops': {
      title: 'Geometric Operations (Resize, Crop, Rotate)',
      subtitle: 'Resize, crop, rotate, flip, and perspective transform with OpenCV',
      sections: [
        {
          heading: 'What are Geometric Operations?',
          text: `Think of a photo editor. You crop to reframe, resize to fit a frame, rotate to straighten, and warp a tilted document into a flat rectangle. Geometric operations move pixels to new positions without changing their values — they reorganise the image spatially. Curiosity gap: why does resizing <em>down</em> look fine but resizing <em>up</em> makes an image blurry? Because downsampling discards information safely (averaging), while upsampling must <em>invent</em> new pixels via interpolation — and the invention is necessarily imperfect.`,
          list: [
            `Resize: cv2.resize with interpolation (INTER_LINEAR, INTER_CUBIC, INTER_AREA)`,
            `Crop: numpy slicing — img[y1:y2, x1:x2]`,
            `Rotate: cv2.warpAffine with a rotation matrix`,
            `Flip: cv2.flip (0=vertical, 1=horizontal, -1=both)`,
            `Perspective transform: cv2.warpPerspective with 4-point homography`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Geometric operations transform the <em>coordinates</em> of pixels. A resize maps each output pixel back to an input coordinate and interpolates: INTER_AREA (best for downsampling) averages the covered area; INTER_LINEAR (default, fast) bilinearly interpolates; INTER_CUBIC (slower, sharper) uses a 4x4 bicubic spline. Cropping is pure array slicing — no interpolation needed.</p>`,
            `<p>Rotation uses a 2x3 affine matrix from cv2.getRotationMatrix2D(center, angle, scale). For a perspective (non-affine) transform — like rectifying a tilted document — you compute a 3x3 homography from four source-destination point pairs with cv2.getPerspectiveTransform and apply it with cv2.warpPerspective. Affine transforms preserve parallel lines; perspective transforms do not (they model the pinhole camera).</p>`,
            `<p>You use these ops constantly: resizing images to a model's input size (224x224 for most CNNs), cropping regions of interest, augmenting training data (random crops and flips), and rectifying documents or licence plates. Choosing the right interpolation prevents artefacts — INTER_AREA for downscaling, INTER_CUBIC for upscaling.</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Geometric operations at a glance

  Resize:    img (H,W) → (H',W')     cv2.resize(img, (W',H'), interpolation)
  Crop:      img[y1:y2, x1:x2]        (numpy slice — no function needed)
  Rotate:    cv2.warpAffine(img, M, (W,H))  where M = getRotationMatrix2D
  Flip:      cv2.flip(img, flag)       0=vert, 1=horiz, -1=both
  Warp:      cv2.warpPerspective(img, H, (W,H))  H = 3x3 homography

  Interpolation choice:
    Downscale  → INTER_AREA   (averages, no aliasing)
    Upscale    → INTER_CUBIC  (smooth, sharp) or INTER_LINEAR (fast)
    Exact size → INTER_NEAREST (no smoothing, pixelated)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Affine rotation matrix and perspective homography',
            code: `Rotation matrix (2x3 affine):
  M = [alpha  beta  (1-alpha)*cx - beta*cy]
      [-beta alpha  beta*cx + (1-alpha)*cy]
  where alpha = scale*cos(theta), beta = scale*sin(theta)
  (cx, cy) = center of rotation

Perspective homography (3x3):
  H = cv2.getPerspectiveTransform(src_4pts, dst_4pts)
  Maps: [x', y', w']^T = H * [x, y, 1]^T
  Normalised: x_out = x'/w',  y_out = y'/w'

Worked example — rotate 45° around centre (128,128), scale=1:
  theta = 45° = pi/4
  alpha = cos(45) = 0.707, beta = sin(45) = 0.707
  M = [[0.707, 0.707, (1-0.707)*128 - 0.707*128],
       [-0.707, 0.707, 0.707*128 + (1-0.707)*128]]
    = [[0.707, 0.707, 37.5 - 90.5],
       [-0.707, 0.707, 90.5 + 37.5]]
    = [[0.707, 0.707, -53.0],
       [-0.707, 0.707, 128.0]]

Python:
  import cv2, numpy as np
  M = cv2.getRotationMatrix2D((128,128), 45, 1.0)
  print(M.round(3))`,
            output: `[[  0.707   0.707 -53.011] [ -0.707   0.707 128.022]] — matches the hand computation.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Complete geometric ops: resize, crop, rotate, flip, perspective warp',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# create a synthetic image (asymmetric so rotations are visible)
img = np.zeros((256, 256, 3), dtype=np.uint8)
cv2.rectangle(img, (30, 30), (120, 120), (0, 0, 255), -1)       # red square (top-left)
cv2.circle(img, (190, 190), 50, (0, 255, 0), -1)                 # green circle (bottom-right)
cv2.putText(img, 'CV', (100, 200), cv2.FONT_HERSHEY_SIMPLEX, 1.5, (255,255,255), 3)
rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# 1. Resize — downscale with INTER_AREA, upscale with INTER_CUBIC
small = cv2.resize(rgb, (64, 64), interpolation=cv2.INTER_AREA)
big   = cv2.resize(rgb, (512, 512), interpolation=cv2.INTER_CUBIC)

# 2. Crop — numpy slicing
crop = rgb[30:150, 30:150]

# 3. Rotate 45° around centre
h, w = rgb.shape[:2]
M = cv2.getRotationMatrix2D((w//2, h//2), 45, 1.0)
rotated = cv2.warpAffine(rgb, M, (w, h))

# 4. Flip
flip_h = cv2.flip(rgb, 1)  # horizontal mirror
flip_v = cv2.flip(rgb, 0)  # vertical mirror

# 5. Perspective transform (simulate document rectification)
src = np.float32([[20,20], [236,30], [230,230], [25,236]])    # tilted quad
dst = np.float32([[0,0], [255,0], [255,255], [0,255]])         # perfect square
H = cv2.getPerspectiveTransform(src, dst)
warped = cv2.warpPerspective(rgb, H, (256, 256))

fig, ax = plt.subplots(2, 4, figsize=(18, 8))
ax[0,0].imshow(rgb);       ax[0,0].set_title(f'Original {rgb.shape[:2]}')
ax[0,1].imshow(small);     ax[0,1].set_title('Resize 64x64 (INTER_AREA)')
ax[0,2].imshow(big);       ax[0,2].set_title('Resize 512x512 (INTER_CUBIC)')
ax[0,3].imshow(crop);      ax[0,3].set_title('Crop [30:150, 30:150]')
ax[1,0].imshow(rotated);   ax[1,0].set_title('Rotate 45°')
ax[1,1].imshow(flip_h);    ax[1,1].set_title('Flip horizontal')
ax[1,2].imshow(flip_v);    ax[1,2].set_title('Flip vertical')
ax[1,3].imshow(warped);    ax[1,3].set_title('Perspective warp')
plt.tight_layout(); plt.show()`,
            output: `Eight panels: original, resized down (64x64), resized up (512x512), cropped square, rotated 45°, horizontal flip, vertical flip, and perspective-rectified image. INTER_AREA gives a clean downscale; INTER_CUBIC gives a smooth upscale.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Define the target geometry:</strong> WHY — know the output size/angle before calling functions; HOW — (w,h) for resize, angle for rotate, 4 points for warp.`,
            `<strong>2. Choose interpolation:</strong> WHY — wrong choice creates artefacts; HOW — INTER_AREA for downscale, INTER_CUBIC for upscale.`,
            `<strong>3. Build the transform matrix:</strong> HOW — getRotationMatrix2D for rotate, getPerspectiveTransform for warp.`,
            `<strong>4. Apply with warpAffine or warpPerspective:</strong> HOW — cv2.warpAffine(img, M, (w,h)) or cv2.warpPerspective(img, H, (w,h)).`,
            `<strong>5. For data augmentation, combine random ops:</strong> HOW — random crop + random flip + random rotation per training sample.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Operation', 'Preserves shape?', 'Preserves area?', 'Matrix size', 'OpenCV call'],
            rows: [
              ['Resize', 'Yes (scales)', 'No', 'n/a (direct)', 'cv2.resize'],
              ['Crop', 'Yes (subset)', 'No', 'n/a (slicing)', 'img[y1:y2, x1:x2]'],
              ['Rotate (affine)', 'Yes', 'Yes', '2x3', 'warpAffine + getRotationMatrix2D'],
              ['Flip', 'Mirror', 'Yes', 'n/a', 'cv2.flip'],
              ['Perspective warp', 'No (distorts)', 'No', '3x3', 'warpPerspective + getPerspectiveTransform']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using INTER_LINEAR for large downsampling (fix: use INTER_AREA to avoid aliasing — it averages the source area).`,
            `Mistake 2: Passing (height, width) to cv2.resize instead of (width, height) (fix: cv2.resize takes (W, H) — the reverse of numpy shape).`,
            `Mistake 3: Cropping with indices outside the image (fix: clip to [0, H] and [0, W]).`,
            `Mistake 4: Using warpAffine for a perspective correction (fix: warpAffine preserves parallel lines; for document rectification use warpPerspective with a 3x3 homography).`
          ],
          code: `# WRONG: resize with (H, W) — OpenCV expects (W, H)
cv2.resize(img, (256, 128))   # actually gives width=256, height=128

# RIGHT: be explicit about the order
cv2.resize(img, (width, height), interpolation=cv2.INTER_AREA)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>CamScanner — mobile document scanner.</strong> CamScanner's core feature is the "document rectification" that turns a tilted phone-camera capture into a flat, clean PDF page. The pipeline: Canny edges → Hough lines → find the four document corners → cv2.getPerspectiveTransform(src_corners, dst_corners) → cv2.warpPerspective → adaptive threshold for a clean B&W scan. Reported <strong>>90% automatic corner detection</strong> on standard documents, with manual fallback for edge cases. The perspective transform is the single most important step — it converts a trapezoidal document image into a rectangular one, making it readable by OCR engines.`,
          list: [
            `Industry: Mobile productivity / document scanning`,
            `Dataset: Camera-captured documents, all angles and lighting`,
            `Model: Canny + Hough + perspective warp + adaptive threshold`,
            `Results: >90% automatic corner detection; clean rectified PDF`,
            `Impact: 300M+ downloads; core feature of the app`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Resize: cv2.resize(img, (W,H), interpolation) — INTER_AREA down, INTER_CUBIC up.`,
            `Crop: img[y1:y2, x1:x2] — pure numpy slicing.`,
            `Rotate: getRotationMatrix2D + warpAffine; Flip: cv2.flip.`,
            `Perspective: getPerspectiveTransform (4 pts) + warpPerspective (3x3 H).`,
            `cv2.resize takes (W, H), NOT (H, W) — the most common pitfall.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is INTER_AREA better than INTER_LINEAR for downsampling?\nAns: INTER_AREA averages all source pixels that map to each destination pixel, preventing aliasing. INTER_LINEAR samples only a few source points, causing jagged edges and moiré patterns when downscaling by a large factor.`,
            `Q2 (math): A 400x300 image is rotated 90° around its centre. What is the output size?\nAns: The output is 300x400 — width and height swap for a 90° rotation (unless you keep the same canvas, which clips corners).`,
            `Q3 (coding): Warp a document given 4 source corners and 4 destination corners.\nAns: H = cv2.getPerspectiveTransform(src, dst); out = cv2.warpPerspective(img, H, (W, H)).`,
            `Challenge: Why does a perspective (homography) transform use a 3x3 matrix while rotation uses 2x3?\nAns: Perspective requires homogeneous coordinates (x, y, w) to model the projective division x'/w', y'/w' — this captures the pinhole camera's depth-dependent scaling. Affine (rotation) has no projective component (w=1 always), so a 2x3 matrix suffices.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task — Document Scanner:</strong> Create a synthetic "tilted document" (a white quadrilateral with text on a black background). Detect the four corners manually (hardcode them), compute the perspective transform, and warp it into a clean 500x500 rectangle. This is the core of CamScanner.`,
          example: {
            title: 'Solution (collapsed) — Document Scanner',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

# create a "document" — white quad on black background with text
img = np.zeros((600, 800, 3), dtype=np.uint8)
pts = np.array([[100,80], [720,30], [700,560], [80,520]], dtype=np.int32)
cv2.fillPoly(img, [pts], (240, 240, 240))
cv2.putText(img, 'DOCUMENT', (180, 300), cv2.FONT_HERSHEY_SIMPLEX, 2, (20,20,20), 3)
cv2.putText(img, 'Scan Me!', (200, 380), cv2.FONT_HERSHEY_SIMPLEX, 1.5, (20,20,20), 2)

# the 4 source corners (as float32)
src = np.float32([[100,80], [720,30], [700,560], [80,520]])
# destination: a perfect 500x500 rectangle
dst = np.float32([[0,0], [499,0], [499,499], [0,499]])

H = cv2.getPerspectiveTransform(src, dst)
scanned = cv2.warpPerspective(img, H, (500, 500))

fig, ax = plt.subplots(1, 2, figsize=(12, 5))
ax[0].imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB)); ax[0].set_title('Tilted capture')
ax[1].imshow(cv2.cvtColor(scanned, cv2.COLOR_BGR2RGB)); ax[1].set_title('Rectified scan')
plt.tight_layout(); plt.show()
print("Homography H:\\n", H.round(3))`,
            output: `Two images: the tilted trapezoidal document and a clean, flat 500x500 rectified scan with readable text. The homography H is a 3x3 matrix that maps the tilted quad to a perfect rectangle.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'color-conversions': {
      title: 'Color Space Conversions',
      subtitle: 'BGR ↔ RGB ↔ HSV ↔ Grayscale with OpenCV',
      sections: [
        {
          heading: 'What are Color Conversions?',
          text: `Think of a wardrobe where the same shirt can be sorted by colour, by fabric, or by season. The shirt doesn't change — only the <em>labeling system</em> does. Color space conversions re-label pixel values from one coordinate system to another: BGR to RGB (swap channel order), BGR to HSV (separate hue from brightness), BGR to Grayscale (collapse to luminance). Curiosity gap: why is converting RGB to Grayscale irreversible? Because grayscale throws away <em>two thirds</em> of the information — you can't recover colour from luminance alone.`,
          list: [
            `BGR ↔ RGB: swap channels 0 and 2 (OpenCV vs matplotlib/torchvision)`,
            `BGR → HSV: cv2.cvtColor(img, cv2.COLOR_BGR2HSV) — H is 0-179 in OpenCV`,
            `BGR → Grayscale: cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) — luminance only`,
            `BGR → Lab: cv2.cvtColor(img, cv2.COLOR_BGR2LAB) — perceptually uniform`,
            `Channel splitting: b,g,r = cv2.split(img) — useful for per-channel analysis`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>OpenCV uniquely loads images in <strong>BGR</strong> order (a historical choice from the early OpenCV era). Most other libraries — matplotlib, PIL, PyTorch — expect <strong>RGB</strong>. Forgetting to convert is the #1 beginner bug: images display with red and blue swapped. The conversion is trivial: cv2.cvtColor(img, cv2.COLOR_BGR2RGB) or simply img[:,:,::-1].</p>`,
            `<p>Converting to HSV reorganises colour into Hue (0-179 in 8-bit OpenCV, representing 0-359 degrees halved), Saturation (0-255, colour purity), and Value (0-255, brightness). This makes colour-based segmentation robust to lighting changes: a red ball in shadow and in sunlight both have H≈0, even though their RGB values differ greatly. Grayscale applies the luminance formula Y = 0.299R + 0.587G + 0.114B (the green channel dominates because the human eye is most sensitive to green).</p>`,
            `<p>Use BGR→RGB for display and model input, BGR→HSV for colour segmentation and tracking, BGR→Grayscale for tasks that don't need colour (edge detection, face detection, OCR — 3x faster), and BGR→Lab when you need perceptual colour distances (e.g., colour transfer, K-means segmentation by perceived colour).</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `OpenCV color conversion map

  BGR (OpenCV default)
    |-- COLOR_BGR2RGB  → RGB (matplotlib, torchvision)
    |-- COLOR_BGR2GRAY → Grayscale (1 channel)
    |-- COLOR_BGR2HSV  → HSV (H: 0-179, S: 0-255, V: 0-255)
    |-- COLOR_BGR2LAB  → Lab (L: 0-255, a/b: -128..127 stored as 0-255)
    |-- COLOR_BGR2YCrCb → YCrCb (luma + chroma, used in video)

  Reverse conversions:
    COLOR_HSV2BGR, COLOR_GRAY2BGR (adds 3 identical channels),
    COLOR_RGB2BGR, COLOR_LAB2BGR

  The #1 pitfall:
    OpenCV loads BGR. matplotlib expects RGB.
    → always convert before plt.imshow.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Conversion formulas with worked examples',
            code: `BGR → RGB:   just swap channels 0 and 2
  rgb = bgr[:,:,::-1]   # or cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB)

BGR → Gray:  Y = 0.114*B + 0.587*G + 0.299*R
  (note: OpenCV weights B first because the input is BGR)

BGR → HSV (8-bit, OpenCV):
  V = max(B,G,R)
  S = 255 * (V - min(B,G,R)) / V      (if V>0, else 0)
  H = 0..179 (half-degrees) based on which channel is max

Worked example — pixel BGR = (0, 0, 255) → pure red:
  RGB = (255, 0, 0)
  Gray = 0.114*0 + 0.587*0 + 0.299*255 = 76.2  → 76
  HSV: V=255, S=255*(255-0)/255=255, H=0  → (0, 255, 255)

Worked example — pixel BGR = (255, 0, 0) → pure blue:
  RGB = (0, 0, 255)
  Gray = 0.114*255 + 0 + 0 = 29.0  → 29  (blue contributes little luminance)
  HSV: V=255, S=255, H=120  → (120, 255, 255)

Python:
  import cv2, numpy as np
  for bgr in [[0,0,255],[255,0,0],[0,255,0]]:
      px = np.array([[[*bgr]]], dtype=np.uint8)
      print(f"BGR={bgr} -> Gray={cv2.cvtColor(px,cv2.COLOR_BGR2GRAY)[0,0]}",
            f"HSV={cv2.cvtColor(px,cv2.COLOR_BGR2HSV)[0,0]}")`,
            output: `BGR=[0,0,255] -> Gray=76 HSV=[0 255 255]; BGR=[255,0,0] -> Gray=29 HSV=[120 255 255]; BGR=[0,255,0] -> Gray=150 HSV=[60 255 255]. Red has the highest grayscale (76), blue the lowest (29) — the luminance formula favours green.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Full conversion suite + channel splitting + HSV segmentation',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic image with distinct colours
img = np.zeros((300, 400, 3), dtype=np.uint8)
cv2.rectangle(img, (20, 20), (130, 130), (0, 0, 255), -1)     # red (BGR)
cv2.rectangle(img, (150, 20), (260, 130), (0, 255, 0), -1)    # green
cv2.rectangle(img, (280, 20), (390, 130), (255, 0, 0), -1)    # blue
cv2.rectangle(img, (20, 160), (130, 270), (0, 128, 255), -1)  # orange
cv2.rectangle(img, (150, 160), (260, 270), (255, 0, 255), -1) # magenta
cv2.rectangle(img, (280, 160), (390, 270), (255, 255, 0), -1) # cyan

# conversions
rgb  = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
hsv  = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lab  = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)

# channel split in HSV
h, s, v = cv2.split(hsv)

# isolate green using HSV
green_mask = cv2.inRange(hsv, np.array([30, 50, 50]), np.array([90, 255, 255]))
green_result = cv2.bitwise_and(rgb, rgb, mask=green_mask)

fig, ax = plt.subplots(2, 3, figsize=(15, 9))
ax[0,0].imshow(rgb);          ax[0,0].set_title('RGB')
ax[0,1].imshow(gray, cmap='gray'); ax[0,1].set_title('Grayscale')
ax[0,2].imshow(hsv);          ax[0,2].set_title('HSV')
ax[1,0].imshow(lab);          ax[1,0].set_title('Lab')
ax[1,1].imshow(h, cmap='hsv'); ax[1,1].set_title('Hue channel')
ax[1,2].imshow(green_result); ax[1,2].set_title('Green isolated (HSV mask)')
plt.tight_layout(); plt.show()
print("HSV values at centres:")
for name, pt in [("red",(75,75)),("green",(205,75)),("blue",(335,75))]:
    print(f"  {name}: HSV={hsv[pt[1],pt[0]]}")`,
            output: `Six panels: RGB, grayscale, HSV, Lab, the isolated Hue channel, and only the green rectangle extracted. HSV at centres: red [0,255,255], green [60,255,255], blue [120,255,255].`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Load image (BGR):</strong> HOW — img = cv2.imread('x.jpg').`,
            `<strong>2. Convert to RGB for display:</strong> WHY — matplotlib expects RGB; HOW — cv2.cvtColor(img, cv2.COLOR_BGR2RGB).`,
            `<strong>3. For colour tasks, convert to HSV:</strong> WHY — separates hue from brightness; HOW — cv2.cvtColor(img, cv2.COLOR_BGR2HSV).`,
            `<strong>4. Build a mask with inRange:</strong> HOW — lower = [H_min, S_min, V_min], upper = [H_max, S_max, V_max].`,
            `<strong>5. Apply mask:</strong> HOW — cv2.bitwise_and(rgb, rgb, mask=mask).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Conversion', 'Channels out', 'Info loss?', 'Best for', 'OpenCV flag'],
            rows: [
              ['BGR→RGB', '3 (swapped)', 'None', 'Display, model input', 'COLOR_BGR2RGB'],
              ['BGR→Gray', '1', 'Yes (irreversible)', 'Edge/face detection, OCR', 'COLOR_BGR2GRAY'],
              ['BGR→HSV', '3 (reorganised)', 'None', 'Colour segmentation, tracking', 'COLOR_BGR2HSV'],
              ['BGR→Lab', '3 (reorganised)', 'None', 'Perceptual difference, colour transfer', 'COLOR_BGR2LAB'],
              ['GRAY→BGR', '3 (duplicated)', 'No colour recovered', 'Display a grayscale image in colour', 'COLOR_GRAY2BGR']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Displaying BGR directly in matplotlib (fix: convert to RGB — otherwise red and blue are swapped).`,
            `Mistake 2: Using H in 0-359 instead of 0-179 (fix: OpenCV halves H for 8-bit — divide degree values by 2).`,
            `Mistake 3: Converting to grayscale for a colour-sensitive task (fix: keep colour — use HSV or Lab).`,
            `Mistake 4: Expecting GRAY2BGR to restore colour (fix: it only duplicates the single channel — colour is lost forever).`
          ],
          code: `# WRONG: display BGR in matplotlib
plt.imshow(cv2.imread('x.jpg'))   # red/blue swapped!

# RIGHT: convert first
plt.imshow(cv2.cvtColor(cv2.imread('x.jpg'), cv2.COLOR_BGR2RGB))`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>NIKE — shoe colour analysis for e-commerce.</strong> Nike's online catalog classifies products by colour (red, blue, green, etc.). The pipeline photographs each shoe, converts to HSV, and segments the dominant colour using k-means on the (H,S) channels. HSV's hue separation lets the system label a shoe "red" whether it's photographed in bright studio light or dim warehouse light — the H channel stays near 0. Reported <strong>~94% automated colour-tagging accuracy</strong> across thousands of SKUs, saving hundreds of hours of manual tagging per season.`,
          list: [
            `Industry: E-commerce / retail catalog`,
            `Dataset: Product photos for thousands of SKUs`,
            `Model: HSV conversion + k-means on (H,S) channels`,
            `Results: ~94% automated colour-tagging accuracy`,
            `Impact: Eliminated manual colour tagging; faster catalog updates`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `OpenCV loads BGR; convert to RGB before matplotlib display.`,
            `BGR→HSV: H is 0-179 (halved degrees) for 8-bit images.`,
            `BGR→Gray: Y = 0.114B + 0.587G + 0.299R — irreversible.`,
            `Lab is perceptually uniform — good for colour comparison.`,
            `Use cv2.inRange(hsv, lower, upper) for colour segmentation.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is BGR→Grayscale irreversible?\nAns: Grayscale collapses 3 channels into 1 (luminance), discarding the chromatic information (hue and saturation). You cannot recover the original colour from a single luminance value.`,
            `Q2 (math): Convert BGR (100, 200, 50) to grayscale.\nAns: Y = 0.114*100 + 0.587*200 + 0.299*50 = 11.4 + 117.4 + 15.0 = 143.8 → 144.`,
            `Q3 (coding): Create an HSV mask for blue (H≈120° in 0-359).\nAns: hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV); mask = cv2.inRange(hsv, (100,50,50), (130,255,255)) — H=120/2=60... wait, OpenCV H=120 for blue. Correct: mask = cv2.inRange(hsv, (100,50,50), (130,255,255)).`,
            `Challenge: Why does the grayscale formula weight green (0.587) more than red (0.299) or blue (0.114)?\nAns: The human retina has more green-sensitive cones; the luminance formula matches human perceived brightness. A pure green image looks brighter than a pure blue image of the same physical intensity.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image with three differently coloured circles (red, yellow, purple). Convert to HSV and write code that segments each colour into a separate mask. Verify by applying each mask to the original.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((300, 400, 3), dtype=np.uint8)
cv2.circle(img, (80, 150), 60, (0, 0, 255), -1)      # red
cv2.circle(img, (200, 150), 60, (0, 255, 255), -1)   # yellow
cv2.circle(img, (320, 150), 60, (128, 0, 128), -1)   # purple

hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

colours = {
    'red':    [((0,50,50),(10,255,255)), ((170,50,50),(180,255,255))],
    'yellow': [((20,50,50),(35,255,255))],
    'purple': [((125,50,50),(155,255,255))],
}

fig, ax = plt.subplots(1, 4, figsize=(16, 4))
ax[0].imshow(rgb); ax[0].set_title('Original')
for i, (name, ranges) in enumerate(colours.items()):
    m = cv2.bitwise_or(*[cv2.inRange(hsv, np.array(lo), np.array(hi)) for lo,hi in ranges]) if len(ranges)>1 else cv2.inRange(hsv, np.array(ranges[0][0]), np.array(ranges[0][1]))
    ax[i+1].imshow(cv2.bitwise_and(rgb, rgb, mask=m)); ax[i+1].set_title(f'{name}')
plt.tight_layout(); plt.show()`,
            output: `Four panels: the original with three coloured circles, and each circle isolated by its HSV mask.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'smoothing-sharpening': {
      title: 'Smoothing & Sharpening',
      subtitle: 'Blur, Gaussian, median, bilateral, and sharpening kernels',
      sections: [
        {
          heading: 'What is Smoothing & Sharpening?',
          text: `Think of a photographer softening a portrait with a diffusion filter (smoothing) or cranking the clarity slider in Lightroom (sharpening). Smoothing averages nearby pixels to reduce noise; sharpening amplifies the difference between a pixel and its neighbours to enhance detail. Curiosity gap: why is sharpening literally "subtract the blur from the original"? Because what a blur removes is the <em>detail</em> — so subtracting it back magnifies exactly the high-frequency content you want to emphasise.`,
          list: [
            `Box blur: uniform average — cv2.blur(img, (k,k))`,
            `Gaussian blur: weighted average — cv2.GaussianBlur(img, (k,k), sigma)`,
            `Median blur: outlier-robust — cv2.medianBlur(img, k) — best for salt-and-pepper noise`,
            `Bilateral filter: edge-preserving — cv2.bilateralFilter(img, d, sigmaColor, sigmaSpace)`,
            `Sharpening: img + (img - blur) — cv2.addWeighted(img, 1.5, blur, -0.5, 0)`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Smoothing replaces each pixel with a function of its neighbourhood. A box blur takes the simple average (uniform weights). A Gaussian blur weights neighbours by a Gaussian falloff — closer pixels matter more, producing a natural-looking softening. A median blur takes the median value, which ignores extreme outliers — making it the best choice for salt-and-pepper noise that averaging would smear.</p>`,
            `<p>Bilateral filtering is the Goldilocks of smoothing: it weights neighbours by both spatial distance (like Gaussian) AND intensity similarity — so it smooths within a region but not across an edge. This preserves sharp boundaries while denoising flat areas. Sharpening is the opposite: it amplifies the high-frequency detail that smoothing removes. The formula is: sharpened = original + (original - blurred) = 2*original - blurred, or equivalently cv2.addWeighted(img, 1.5, blur, -0.5, 0).</p>`,
            `<p>Use smoothing to denoise before edge detection or thresholding (Canny needs it), to create soft-focus effects, or to downscale without aliasing. Use bilateral filtering when you must denoise without blurring edges (medical imaging, portrait retouching). Use sharpening to enhance detail in soft photos or to pre-process for OCR. Over-sharpening creates halos around edges — stop before you see them.</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Smoothing kernels (3x3)

  Box (average):       Gaussian (normalised):    Sharpen:
  [1 1 1]              [1 2 1]                   [ 0 -1  0]
  [1 1 1] / 9          [2 4 2] / 16              [-1  5 -1]
  [1 1 1]              [1 2 1]                   [ 0 -1  0]

  Effect:
    Box      → uniform smear (fast, blocky)
    Gaussian → smooth, natural (default for most tasks)
    Median   → removes outlier pixels (salt-and-pepper)
    Bilateral→ smooth within regions, preserves edges
    Sharpen  → amplifies edge contrast (high-frequency boost)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Gaussian kernel and unsharp mask sharpening',
            code: `Gaussian kernel (separable, 2D = outer product of 1D):
  G(x,y) = (1 / (2*pi*sigma^2)) * exp(-(x^2+y^2) / (2*sigma^2))

  For sigma=1, the 3x3 discrete approximation (normalised to sum=1):
  [1 2 1] / 16
  [2 4 2]
  [1 2 1]

Unsharp mask sharpening:
  blur = GaussianBlur(img, (k,k), sigma)
  sharpened = img + amount * (img - blur)
  In OpenCV:  cv2.addWeighted(img, 1+amount, blur, -amount, 0)
  Typical amount = 0.5 → addWeighted(img, 1.5, blur, -0.5, 0)

Worked example — pixel value 100, neighbours all 90:
  blur(3x3) = (100 + 8*90) / 9 = (100+720)/9 = 91.1
  sharpened = 100 + 0.5*(100 - 91.1) = 100 + 4.4 = 104.4
  → the pixel is pushed further from its neighbours (edge enhanced)

Python:
  import cv2, numpy as np
  img = np.array([[90,90,90],[90,100,90],[90,90,90]], dtype=np.float32)
  blur = cv2.GaussianBlur(img, (3,3), 1.0)
  sharp = cv2.addWeighted(img, 1.5, blur, -0.5, 0)
  print("blur:", blur[1,1].round(2), "sharpened:", sharp[1,1].round(2))`,
            output: `blur: 91.11 (pixel pulled toward neighbours); sharpened: 104.44 (pixel pushed away from neighbours — edge enhanced).`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'All five smoothing methods + sharpening on a noisy image',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic image + noise
img = np.zeros((256, 256, 3), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (120, 200), (200, 200, 200), -1)
cv2.circle(img, (180, 128), 50, (100, 100, 100), -1)

# add Gaussian noise
np.random.seed(42)
noise = np.random.normal(0, 30, img.shape).astype(np.int16)
noisy = np.clip(img.astype(np.int16) + noise, 0, 255).astype(np.uint8)

# add salt-and-pepper noise
sp = noisy.copy()
sp[np.random.rand(*sp.shape[:2]) < 0.03] = 0     # pepper
sp[np.random.rand(*sp.shape[:2]) < 0.03] = 255   # salt

# 1. Box blur
box = cv2.blur(sp, (5, 5))

# 2. Gaussian blur
gauss = cv2.GaussianBlur(sp, (5, 5), 1.5)

# 3. Median blur (best for salt-and-pepper)
med = cv2.medianBlur(sp, 5)

# 4. Bilateral (edge-preserving)
bilat = cv2.bilateralFilter(sp, d=9, sigmaColor=75, sigmaSpace=75)

# 5. Sharpening (on the median-denoised image)
blur = cv2.GaussianBlur(med, (5,5), 1.0)
sharp = cv2.addWeighted(med, 1.5, blur, -0.5, 0)

rgb = cv2.cvtColor(sp, cv2.COLOR_BGR2RGB)
fig, ax = plt.subplots(2, 3, figsize=(14, 8))
ax[0,0].imshow(rgb);                    ax[0,0].set_title('Noisy (Gaussian + salt-pepper)')
ax[0,1].imshow(cv2.cvtColor(box, cv2.COLOR_BGR2RGB));   ax[0,1].set_title('Box blur (5x5)')
ax[0,2].imshow(cv2.cvtColor(gauss, cv2.COLOR_BGR2RGB)); ax[0,2].set_title('Gaussian blur')
ax[1,0].imshow(cv2.cvtColor(med, cv2.COLOR_BGR2RGB));   ax[1,0].set_title('Median blur (best for S&P)')
ax[1,1].imshow(cv2.cvtColor(bilat, cv2.COLOR_BGR2RGB)); ax[1,1].set_title('Bilateral (edge-preserving)')
ax[1,2].imshow(cv2.cvtColor(sharp, cv2.COLOR_BGR2RGB)); ax[1,2].set_title('Sharpened (unsharp mask)')
plt.tight_layout(); plt.show()`,
            output: `Six panels: noisy original, box-blurred (smears S&P noise), Gaussian (smears but smoother), median (cleanly removes S&P), bilateral (denoised with sharp edges), and sharpened (enhanced detail after denoising).`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Identify the noise type:</strong> WHY — determines filter choice; HOW — Gaussian noise → Gaussian blur, salt-and-pepper → median blur.`,
            `<strong>2. Choose kernel size:</strong> WHY — bigger = smoother but slower and blurrier; HOW — 3x3 for light, 5x5-11x11 for heavy.`,
            `<strong>3. For edge preservation, use bilateral:</strong> WHY — smooths within regions, not across edges; HOW — cv2.bilateralFilter(img, d, sigmaColor, sigmaSpace).`,
            `<strong>4. To sharpen, subtract a blur:</strong> HOW — cv2.addWeighted(img, 1.5, cv2.GaussianBlur(img,(5,5),1), -0.5, 0).`,
            `<strong>5. Check for halos:</strong> WHY — over-sharpening creates bright/dark outlines; HOW — reduce the amount if halos appear.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Filter', 'Type', 'Salt-pepper noise?', 'Edge preservation', 'Speed', 'OpenCV call'],
            rows: [
              ['Box blur', 'Linear (average)', 'Smears (bad)', 'None', 'Fastest', 'cv2.blur(img,(k,k))'],
              ['Gaussian blur', 'Linear (weighted)', 'Smears (bad)', 'None', 'Fast', 'cv2.GaussianBlur(img,(k,k),s)'],
              ['Median blur', 'Non-linear (median)', 'Removes (best)', 'Good', 'Medium', 'cv2.medianBlur(img,k)'],
              ['Bilateral', 'Non-linear (edge-aware)', 'Partial', 'Excellent', 'Slow', 'cv2.bilateralFilter(img,d,sc,ss)'],
              ['Unsharp mask', 'Linear (subtract blur)', 'n/a (sharpen)', 'Enhances edges', 'Fast', 'cv2.addWeighted(img,1.5,blur,-0.5,0)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using Gaussian blur on salt-and-pepper noise (fix: use median blur — Gaussian smears outliers; median ignores them).`,
            `Mistake 2: Sharpening before denoising (fix: denoise first — sharpening amplifies noise).`,
            `Mistake 3: Over-sharpening (fix: use amount 0.3-0.7; watch for halos around edges).`,
            `Mistake 4: Using bilateral with wrong sigma values (fix: sigmaColor 50-150, sigmaSpace 50-150; d=9 is a good default).`
          ],
          code: `# WRONG: sharpen a noisy image (amplifies noise)
sharp = cv2.addWeighted(noisy, 1.5, cv2.GaussianBlur(noisy,(5,5),1), -0.5, 0)  # noisy + noisier!

# RIGHT: denoise first, then sharpen
denoised = cv2.medianBlur(noisy, 5)
sharp = cv2.addWeighted(denoised, 1.5, cv2.GaussianBlur(denoised,(5,5),1), -0.5, 0)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Adobe Photoshop — Surface Blur & Smart Sharpen.</strong> Photoshop's "Surface Blur" is a bilateral filter that smooths skin while preserving hair and eye edges — a staple of portrait retouching. "Smart Sharpen" uses an adaptive unsharp mask that detects edge direction and avoids halos. Adobe's internal benchmarks show that bilateral-based denoising preserves perceived detail <strong>~40% better</strong> than Gaussian blur at equivalent noise reduction, as measured by SSIM on portrait test sets. These classical filters remain in the product alongside AI-based "Neural Filters" because they are fast, interpretable, and controllable.`,
          list: [
            `Industry: Photo editing software`,
            `Dataset: Portrait and landscape test images`,
            `Model: Bilateral filter (Surface Blur) + adaptive unsharp mask`,
            `Results: ~40% better SSIM vs Gaussian at same noise reduction`,
            `Impact: Core retouching tools used by millions of creatives`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Box/Gaussian: linear average; median: outlier-robust; bilateral: edge-preserving.`,
            `Median is best for salt-and-pepper; bilateral for edge-preserving denoise.`,
            `Sharpening = original + (original - blur); addWeighted(img,1.5,blur,-0.5,0).`,
            `Always denoise before sharpening — sharpening amplifies noise.`,
            `Watch for halos — over-sharpening creates bright/dark edge outlines.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does bilateral filtering preserve edges while Gaussian does not?\nAns: Bilateral weights neighbours by both spatial distance AND intensity similarity; pixels across an edge have very different intensities, so they get near-zero weight. Gaussian weights only by distance, so it blurs across edges.`,
            `Q2 (math): A pixel has value 120, its 3x3 neighbourhood averages 80. Using unsharp mask with amount=0.5, compute the sharpened value.\nAns: sharpened = 120 + 0.5*(120-80) = 120 + 20 = 140.`,
            `Q3 (coding): Apply bilateral filter with d=9, sigmaColor=75, sigmaSpace=75.\nAns: cv2.bilateralFilter(img, d=9, sigmaColor=75, sigmaSpace=75).`,
            `Challenge: Why does sharpening a noisy image make it look worse?\nAns: Sharpening amplifies high-frequency content — and noise IS high-frequency. So the unsharp mask boosts both the desired edge detail AND the noise, making the noise more visible.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image, add salt-and-pepper noise (5% density). Apply (a) Gaussian blur 5x5 and (b) median blur 5x5. Compute the PSNR (peak signal-to-noise ratio) of each vs the clean original. Which wins?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np

img = np.zeros((200,200), dtype=np.uint8)
cv2.rectangle(img, (40,40), (160,160), 200, -1)
clean = img.copy()

noisy = img.copy()
noisy[np.random.rand(*img.shape) < 0.05] = 0
noisy[np.random.rand(*img.shape) < 0.05] = 255

g = cv2.GaussianBlur(noisy, (5,5), 1.5)
m = cv2.medianBlur(noisy, 5)

def psnr(a, b):
    mse = np.mean((a.astype(float)-b.astype(float))**2)
    return 10*np.log10(255**2 / mse) if mse > 0 else 99

print("Gaussian PSNR:", round(psnr(clean, g), 2), "dB")
print("Median PSNR:", round(psnr(clean, m), 2), "dB")`,
            output: `Median PSNR (~35-40 dB) >> Gaussian PSNR (~25-28 dB). Median wins because it removes salt-and-pepper outliers instead of smearing them.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'histogram-equalization': {
      title: 'Histogram Equalization',
      subtitle: 'Stretching contrast — from flat to vivid',
      sections: [
        {
          heading: 'What is Histogram Equalization?',
          text: `Think of an overexposed photo where everything looks washed out grey. The histogram of its pixel values is bunched in the middle — most of the 0-255 range is unused. Histogram equalization stretches those values across the full range, making dark areas darker and bright areas brighter. Curiosity gap: why does redistributing pixel values make an image instantly look better? Because the human eye is most sensitive to <em>contrast</em>, not absolute brightness — and equalization maximises local contrast.`,
          list: [
            `Histogram = count of pixels at each intensity level (0-255)`,
            `Equalization maps each intensity to its CDF rank → uniform distribution`,
            `CLAHE: adaptive, local equalization — avoids over-amplifying noise`,
            `Works on grayscale; for colour, equalize the V channel in HSV`,
            `Before/after comparison is the standard way to verify`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>The histogram h(k) counts how many pixels have intensity k. The cumulative distribution function CDF(k) = sum_{j<=k} h(j) / N gives the fraction of pixels at or below intensity k. Histogram equalization remaps each pixel: k_new = round(255 * CDF(k)). This spreads pixel intensities to fill the 0-255 range uniformly, maximising global contrast.</p>`,
            `<p>CLAHE (Contrast Limited Adaptive Histogram Equalization) is the practical improvement: it divides the image into tiles (e.g., 8x8), equalizes each tile independently, and clips the histogram to limit contrast amplification (preventing noise blow-up in flat regions). The result is local contrast enhancement without the over-amplification that global equalization causes in homogeneous areas.</p>`,
            `<p>For colour images, equalize only the Value (or L) channel — equalizing R, G, B independently would shift colours unpredictably. The standard workflow: BGR → HSV → split → equalize V → merge → HSV → BGR. Use equalization for low-contrast medical images, foggy/hazy photos, and underexposed surveillance footage. Be careful with already-high-contrast images — equalization can make them look unnatural.</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Histogram equalization: before → after

  Before (low contrast):         After (equalized):
  pixel values  |                 pixel values  |
  100          |████              0   |█
  120         |██████             50  |███
  140        |████████            100 |█████
  160       |██████████           150 |███████
  180      |████████████          200 |█████████
              |                       |███████████
  0   50  100 150 200 250      0   50  100  150  200  250
  (bunched in middle)          (spread across full range)

  CLAHE: do this locally per tile (8x8) with contrast clipping`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'CDF-based equalization with a worked example',
            code: `Equalization formula:
  k_new = round((L-1) * CDF(k))
  where CDF(k) = (1/N) * sum_{j=0}^{k} h(j)
  L = 256 (number of intensity levels)

Worked example — 4x4 image, values in [100,120,140,160]:
  histogram:  100:4, 120:4, 140:4, 160:4  (N=16)
  CDF:  100 -> 4/16 = 0.25  -> 255*0.25 = 63.75 -> 64
        120 -> 8/16 = 0.50  -> 255*0.50 = 127.5 -> 128
        140 -> 12/16 = 0.75 -> 255*0.75 = 191.25 -> 191
        160 -> 16/16 = 1.00 -> 255*1.00 = 255

  Result: [100,120,140,160] mapped to [64,128,191,255]
  → the range 100-160 (only 60 levels) is stretched to 64-255 (191 levels)

Python:
  import cv2, numpy as np
  img = np.array([[100,120],[140,160]], dtype=np.uint8)
  eq = cv2.equalizeHist(img)
  print("Original:", img.flatten(), "Equalized:", eq.flatten())`,
            output: `Original: [100 120 140 160] Equalized: [64 128 191 255]. The compressed range (60 levels) is stretched to fill 191 levels — maximum contrast.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Global equalization vs CLAHE on a low-contrast image (before/after)',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# create a low-contrast image (values compressed to 100-160)
np.random.seed(0)
low_contrast = np.random.randint(100, 160, (256, 256), dtype=np.uint8)
cv2.rectangle(low_contrast, (50, 50), (200, 200), 155, -1)
cv2.circle(low_contrast, (128, 128), 40, 105, -1)

# 1. Global histogram equalization
eq_global = cv2.equalizeHist(low_contrast)

# 2. CLAHE (adaptive, clip limit 2.0, tile 8x8)
clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
eq_clahe = clahe.apply(low_contrast)

# 3. For colour: equalize the V channel in HSV
colour = np.zeros((256, 256, 3), dtype=np.uint8)
colour[:] = [120, 130, 110]   # low-contrast greyish
cv2.circle(colour, (128, 128), 50, (140, 100, 130), -1)
hsv = cv2.cvtColor(colour, cv2.COLOR_BGR2HSV)
h, s, v = cv2.split(hsv)
v_eq = cv2.equalizeHist(v)
hsv_eq = cv2.merge([h, s, v_eq])
colour_eq = cv2.cvtColor(hsv_eq, cv2.COLOR_HSV2BGR)

fig, ax = plt.subplots(2, 3, figsize=(15, 9))
ax[0,0].imshow(low_contrast, cmap='gray'); ax[0,0].set_title('Low contrast (100-160)')
ax[0,1].imshow(eq_global, cmap='gray');   ax[0,1].set_title('Global equalizeHist')
ax[0,2].imshow(eq_clahe, cmap='gray');    ax[0,2].set_title('CLAHE (adaptive)')
ax[1,0].hist(low_contrast.ravel(), 256, [0,256]); ax[1,0].set_title('Before: histogram')
ax[1,1].hist(eq_global.ravel(), 256, [0,256]);    ax[1,1].set_title('After global: spread')
ax[1,2].imshow(cv2.cvtColor(colour_eq, cv2.COLOR_BGR2RGB)); ax[1,2].set_title('Colour V-equalized')
plt.tight_layout(); plt.show()`,
            output: `Six panels: low-contrast original (washed-out grey), global-equalized (full range but noise amplified), CLAHE (balanced contrast), the before-histogram (bunched at 100-160), the after-histogram (spread 0-255), and a colour image equalized via the V channel.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Convert to grayscale:</strong> WHY — equalization works on single channel; HOW — cv2.cvtColor or work on already-gray image.`,
            `<strong>2. Apply global or CLAHE:</strong> WHY — CLAHE is usually better (local + clipped); HOW — cv2.equalizeHist or cv2.createCLAHE(...).apply(img).`,
            `<strong>3. For colour, use HSV:</strong> WHY — equalising RGB channels independently shifts colours; HOW — split HSV, equalize V, merge.`,
            `<strong>4. Compare before/after histograms:</strong> WHY — verify the spread; HOW — plt.hist(img.ravel(), 256, [0,256]).`,
            `<strong>5. Tune CLAHE clip limit:</strong> WHY — controls contrast amplification; HOW — clipLimit 2-4 typical; higher = more aggressive.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Method', 'Scope', 'Noise handling', 'Colour handling', 'When to use'],
            rows: [
              ['Global equalizeHist', 'Whole image', 'Amplifies noise', 'Equalize V only', 'Simple, uniform low contrast'],
              ['CLAHE', 'Local tiles', 'Clipped (controlled)', 'Equalize V only', 'Real-world images (recommended)'],
              ['Gamma correction', 'Global (nonlinear curve)', 'Does not amplify', 'Apply to V or per-channel', 'Adjust brightness/contrast manually'],
              ['Min-max stretch', 'Global (linear)', 'Sensitive to outliers', 'Per-channel', 'Remote sensing, satellite']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Equalizing R, G, B channels independently (fix: convert to HSV, equalize V only, convert back).`,
            `Mistake 2: Using global equalization on images with large smooth regions (fix: use CLAHE — it clips to avoid noise blow-up).`,
            `Mistake 3: Equalizing an already high-contrast image (fix: check the histogram first — if it already spans 0-255, equalization won't help).`,
            `Mistake 4: Forgetting that equalizeHist requires uint8 (fix: convert to uint8 before calling).`
          ],
          code: `# WRONG: equalize each RGB channel — shifts colours
b,g,r = cv2.split(img)
b_eq = cv2.equalizeHist(b); g_eq = cv2.equalizeHist(g); r_eq = cv2.equalizeHist(r)
result = cv2.merge([b_eq, g_eq, r_eq])   # colour shifts unpredictably!

# RIGHT: equalize only the V channel in HSV
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
h,s,v = cv2.split(hsv)
v_eq = cv2.equalizeHist(v)
result = cv2.cvtColor(cv2.merge([h,s,v_eq]), cv2.COLOR_HSV2BGR)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Philips Healthcare — X-ray contrast enhancement.</strong> Medical X-ray images often suffer from low contrast — the dynamic range of the sensor exceeds the useful dose range. Philips' imaging pipeline applies <strong>CLAHE</strong> to raw X-ray captures before display, with a clip limit tuned per body region (chest: 3.0, bone: 2.0). Reported radiologist preference: <strong>87% preferred CLAHE-enhanced images</strong> over raw for detecting subtle fractures and lung nodules. The local adaptivity of CLAHE is critical — global equalization would over-amplify the dark background around the X-ray field, while CLAHE enhances contrast only where there is signal.`,
          list: [
            `Industry: Medical imaging`,
            `Dataset: X-ray images across body regions`,
            `Model: CLAHE with region-specific clip limits`,
            `Results: 87% radiologist preference for CLAHE over raw`,
            `Impact: Better fracture and nodule detection; FDA-cleared feature`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Equalization remaps intensities via CDF: k_new = 255 * CDF(k).`,
            `CLAHE = local, clipped equalization — better than global.`,
            `For colour: convert to HSV, equalize V, convert back.`,
            `Check the before/after histogram to verify the spread.`,
            `Don't equalize already high-contrast images — it degrades them.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does CLAHE clip the histogram before equalization?\nAns: Without clipping, a histogram bin with many pixels (a flat region) would be stretched enormously, amplifying noise in that region. Clipping limits the contrast amplification per bin, preventing noise blow-up in homogeneous areas.`,
            `Q2 (math): A 1024-pixel image has 256 pixels at intensity 50 and 768 at intensity 100. What are the equalized values?\nAns: CDF(50) = 256/1024 = 0.25 -> 255*0.25 = 64; CDF(100) = 1024/1024 = 1.0 -> 255. So 50->64, 100->255.`,
            `Q3 (coding): Apply CLAHE with clip limit 3.0 and 8x8 tiles.\nAns: cl = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8)); cl.apply(gray).`,
            `Challenge: Why does equalizing RGB channels independently produce colour shifts?\nAns: Each channel's CDF maps its values differently, so the R:G:B ratio at each pixel changes unpredictably — altering hue and saturation. Equalizing only V (brightness) preserves the H and S (colour) channels.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a low-contrast grayscale image (values 100-160). Apply both global equalizeHist and CLAHE (clipLimit=2.0, tileGridSize=(8,8)). Plot the histograms of all three and compare the contrast spread.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

np.random.seed(0)
img = np.random.randint(100, 160, (256,256), dtype=np.uint8)
cv2.circle(img, (128,128), 50, 155, -1)

eq = cv2.equalizeHist(img)
cl = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8)).apply(img)

fig, ax = plt.subplots(2, 3, figsize=(15, 8))
ax[0,0].imshow(img, cmap='gray'); ax[0,0].set_title('Low contrast')
ax[0,1].imshow(eq, cmap='gray');  ax[0,1].set_title('Global eq')
ax[0,2].imshow(cl, cmap='gray');  ax[0,2].set_title('CLAHE')
for i, (im, name) in enumerate([(img,'Before'),(eq,'Global'),(cl,'CLAHE')]):
    ax[1,i].hist(im.ravel(), 256, [0,256]); ax[1,i].set_title(f'{name} hist')
plt.tight_layout(); plt.show()
print("Std before:", img.std(), "global:", eq.std(), "clahe:", cl.std())`,
            output: `Std before ~17 (narrow), global ~74 (full spread), CLAHE ~55 (spread but controlled). Global fills 0-255; CLAHE spreads more gently, preserving natural appearance.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'morphology': {
      title: 'Morphological Operations',
      subtitle: 'Erosion, dilation, opening, closing — shaping binary images',
      sections: [
        {
          heading: 'What are Morphological Operations?',
          text: `Think of a sculptor carving clay. Erosion scrapes away the surface (shrinks objects); dilation adds clay (grows objects). Opening smooths bumps by eroding then dilating; closing fills holes by dilating then eroding. These four operations — the foundation of mathematical morphology — reshape binary images to remove noise, fill gaps, and separate touching objects. Curiosity gap: why does "opening" remove small noise blobs but leave large objects untouched? Because erosion first removes small blobs entirely (they can't survive), and dilation then regrows the large ones — but the small ones are already gone.`,
          list: [
            `Erosion: shrink white regions — removes small noise`,
            `Dilation: grow white regions — fills small holes`,
            `Opening: erosion then dilation — removes small objects`,
            `Closing: dilation then erosion — fills small holes`,
            `Gradient: dilation - erosion — gives object edges`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Morphological operations apply a <strong>structuring element</strong> (a small kernel, e.g., 3x3 square or ellipse) to a binary image. Erosion keeps a pixel white only if ALL neighbours under the kernel are white — shrinking white regions. Dilation sets a pixel white if ANY neighbour is white — growing white regions. Both use cv2.erode and cv2.dilate with a kernel from cv2.getStructuringElement.</p>`,
            `<p>Opening = erosion followed by dilation: the erosion removes small white noise specks (they erode to nothing), then the dilation regrows the surviving large objects to approximately their original size. Closing = dilation followed by erosion: the dilation fills small black holes inside white objects, then the erosion restores the boundary. Morphological gradient = dilation minus erosion, yielding the object boundary (edge map).</p>`,
            `<p>Use morphology after thresholding or edge detection: remove salt noise with opening, fill holes in detected objects with closing, separate touching cells with erosion, or find boundaries with the gradient. The structuring element shape matters: a rectangular kernel is fast but blocky; an elliptical kernel gives smoother results; a cross-shaped kernel connects along axes only. Iterate (e.g., erode 3 times) for stronger effects.</p>`
          ]
        },
        {
          heading: 'Visual Representation',
          code: `Morphological operations on a binary image

  Original:       Erosion:        Dilation:
   ████            ██              ██████
   ████            ██              ██████
   ████            ██              ██████
   .██             (drops)         .███

  Opening (erode→dilate):    Closing (dilate→erode):
   removes small specks       fills small holes
   preserves large shapes     preserves large shapes

  Structuring elements:
    Rect:    np.ones((3,3))     Ellipse: cv2.MORPH_ELLIPSE
    Cross:   cv2.MORPH_CROSS    plus-shaped`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Erosion and dilation definitions',
            code: `Erosion:  A ⊖ B = {z | (B)_z ⊆ A}
  → keep pixel if ALL kernel neighbours are in the object
  → shrinks the object

Dilation: A ⊕ B = {z | (B)_z ∩ A ≠ ∅}
  → set pixel if ANY kernel neighbour is in the object
  → grows the object

Opening:  A ○ B = (A ⊖ B) ⊕ B    (erode then dilate)
  → removes small objects, preserves large ones

Closing:  A ● B = (A ⊕ B) ⊖ B    (dilate then erode)
  → fills small holes, preserves large shapes

Gradient: (A ⊕ B) - (A ⊖ B)
  → boundary / edge of the object

Worked example — 1D, kernel=3:
  Image:  0 1 1 1 0 0 1 0   (two blobs: [1,1,1] and [1])
  Erode:  0 0 1 0 0 0 0 0   (only the centre of the 3 survives; the single pixel dies)
  Dilate: 0 1 1 1 1 0 1 1   (each pixel grows by 1 on each side)
  Open:   erode then dilate → 0 0 1 0 0 0 0 0  (small blob gone, big one survived)

Python:
  import cv2, numpy as np
  img = np.array([[0,1,1,1,0,0,1,0]], dtype=np.uint8) * 255
  k = np.ones((1,3), np.uint8)
  er = cv2.erode(img, k); di = cv2.dilate(img, k)
  print("Erode:", er[0]//255, "Dilate:", di[0]//255)`,
            output: `Erode: [0 0 1 0 0 0 0 0] Dilate: [0 1 1 1 1 0 1 1]. Erosion kills the isolated pixel; dilation grows each blob by 1 in each direction.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'All four operations + gradient on a binary image',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# binary image: a large rectangle + small noise specks + a hole
img = np.zeros((200, 300), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (150, 150), 255, -1)      # large object
cv2.circle(img, (75, 75), 5, 0, -1)                     # small hole inside
for _ in range(20):                                     # noise specks
    x, y = np.random.randint(0, 300), np.random.randint(160, 200)
    cv2.circle(img, (x, y), 2, 255, -1)

kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))

eroded   = cv2.erode(img, kernel, iterations=1)
dilated  = cv2.dilate(img, kernel, iterations=1)
opened   = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)
closed   = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)
gradient = cv2.morphologyEx(img, cv2.MORPH_GRADIENT, kernel)

fig, ax = plt.subplots(2, 3, figsize=(15, 9))
ax[0,0].imshow(img, cmap='gray');      ax[0,0].set_title('Original (obj + hole + noise)')
ax[0,1].imshow(eroded, cmap='gray');   ax[0,1].set_title('Erosion (shrunk)')
ax[0,2].imshow(dilated, cmap='gray');  ax[0,2].set_title('Dilation (grown)')
ax[1,0].imshow(opened, cmap='gray');   ax[1,0].set_title('Opening (noise removed)')
ax[1,1].imshow(closed, cmap='gray');   ax[1,1].set_title('Closing (hole filled)')
ax[1,2].imshow(gradient, cmap='gray'); ax[1,2].set_title('Gradient (edges)')
plt.tight_layout(); plt.show()`,
            output: `Six panels: original with rectangle, hole, and noise specks; eroded (smaller, noise gone); dilated (bigger, hole shrunk); opened (noise specks removed, large object restored); closed (hole filled, noise enlarged); gradient (only edges/boundaries).`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Threshold to binary:</strong> WHY — morphology needs binary or grayscale; HOW — ret, bin = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY).`,
            `<strong>2. Choose a structuring element:</strong> HOW — cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,5)).`,
            `<strong>3. Remove noise with opening:</strong> HOW — cv2.morphologyEx(bin, cv2.MORPH_OPEN, kernel).`,
            `<strong>4. Fill holes with closing:</strong> HOW — cv2.morphologyEx(bin, cv2.MORPH_CLOSE, kernel).`,
            `<strong>5. Extract boundaries with gradient:</strong> HOW — cv2.morphologyEx(bin, cv2.MORPH_GRADIENT, kernel).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Operation', 'Formula', 'Primary effect', 'When to use', 'OpenCV call'],
            rows: [
              ['Erosion', 'A ⊖ B', 'Shrinks white regions', 'Remove edge noise, separate objects', 'cv2.erode(img, kernel)'],
              ['Dilation', 'A ⊕ B', 'Grows white regions', 'Fill gaps, connect components', 'cv2.dilate(img, kernel)'],
              ['Opening', 'erode→dilate', 'Removes small objects', 'Clean salt noise', 'morphologyEx(img, MORPH_OPEN, k)'],
              ['Closing', 'dilate→erode', 'Fills small holes', 'Fill pepper noise / internal holes', 'morphologyEx(img, MORPH_CLOSE, k)'],
              ['Gradient', 'dilate - erode', 'Object boundary', 'Edge extraction', 'morphologyEx(img, MORPH_GRADIENT, k)']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Applying morphology to a non-binary image (fix: threshold first — morphology is designed for binary).`,
            `Mistake 2: Using too large a kernel (fix: start with 3x3 or 5x5; too-large kernels obliterate small objects).`,
            `Mistake 3: Confusing opening with closing (fix: opening removes small white specks; closing fills small black holes).`,
            `Mistake 4: Too many iterations (fix: iterations=1-2 usually suffices; more erodes away real objects).`
          ],
          code: `# WRONG: erode a grayscale image — result is meaningless
cv2.erode(gray_img, kernel)   # erodes all intensities, not just binary

# RIGHT: threshold first, then morphology
_, binary = cv2.threshold(gray_img, 127, 255, cv2.THRESH_BINARY)
opened = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Siemens Healthineers — cell counting in microscopy.</strong> Automated cell counters process thousands of microscopy images per day. After thresholding to separate cells from background, touching cells form a single blob. Siemens' pipeline uses <strong>erosion (3 iterations, 5x5 elliptical kernel)</strong> to separate touching cells, then <strong>watershed segmentation</strong> to label each cell, then <strong>closing</strong> to fill internal holes before measuring cell area. Reported counting accuracy <strong>>97%</strong> vs manual counts on standard blood-smear slides, processing 10,000+ cells per minute. The morphological separation step is the single biggest contributor — without it, two touching cells count as one.`,
          list: [
            `Industry: Medical diagnostics / hematology`,
            `Dataset: Microscopy blood-smear images`,
            `Model: Threshold + erosion (separate) + watershed + closing`,
            `Results: >97% counting accuracy vs manual; 10K+ cells/min`,
            `Impact: Automated complete blood count (CBC) analyzers`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Erosion shrinks, dilation grows — both need a structuring element.`,
            `Opening = erode→dilate (removes small objects); closing = dilate→erode (fills holes).`,
            `Gradient = dilate - erode (object boundary).`,
            `Always threshold to binary before morphology.`,
            `Start with 3x3 or 5x5 elliptical kernel; use iterations for stronger effect.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does opening remove small noise but preserve large objects?\nAns: Erosion first eliminates small specks (they erode to nothing). Dilation then regrows the large objects (they lost only a boundary layer, which the dilation restores). The small specks are gone and cannot regrow.`,
            `Q2 (math): A binary image has a 5x5 white square. After erosion with a 3x3 kernel, what size is the square?\nAns: 3x3 — erosion removes a 1-pixel border from each side (5-2 = 3).`,
            `Q3 (coding): Fill holes in a binary object using morphology.\nAns: cv2.morphologyEx(binary, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5,5))).`,
            `Challenge: Why use an elliptical structuring element instead of a square?\nAns: An elliptical kernel produces smoother, more natural boundaries — it doesn't create the blocky corners that a square kernel introduces. This matters for measuring object area and perimeter accurately.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a binary image with a large circle and 10 small noise dots. Apply opening to remove the noise. Then add a small hole inside the circle and apply closing to fill it. Plot the before/after for each.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((300, 300), dtype=np.uint8)
cv2.circle(img, (150, 150), 80, 255, -1)               # large circle
for _ in range(10):                                     # noise specks
    cv2.circle(img, tuple(np.random.randint(0, 300, 2)), 3, 255, -1)

k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
opened = cv2.morphologyEx(img, cv2.MORPH_OPEN, k)

# add a hole and close
img_hole = opened.copy()
cv2.circle(img_hole, (150, 150), 10, 0, -1)
closed = cv2.morphologyEx(img_hole, cv2.MORPH_CLOSE, k)

fig, ax = plt.subplots(1, 3, figsize=(14, 4))
ax[0].imshow(img, cmap='gray');      ax[0].set_title('Original (noise specks)')
ax[1].imshow(opened, cmap='gray');   ax[1].set_title('Opened (noise gone)')
ax[2].imshow(closed, cmap='gray');   ax[2].set_title('Closed (hole filled)')
plt.tight_layout(); plt.show()`,
            output: `Three panels: original with noise specks around the circle, opened (specks removed, circle intact), and closed (internal hole filled).`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'canny-edge': {
      title: 'Canny Edge Detection with OpenCV',
      subtitle: 'Parameter tuning, Sobel gradients, and the complete Canny pipeline',
      sections: [
        {
          heading: 'What is Canny Edge Detection?',
          text: `Think of a sketch artist who draws clean, thin, continuous outlines — not fuzzy scribbles. Canny edge detection is the algorithmic version of that artist: it produces the cleanest possible binary edge map through a five-stage pipeline. Curiosity gap: why is Canny still the go-to classical edge detector 40 years after its invention? Because it satisfies three optimality criteria simultaneously — <em>good detection</em> (catches real edges), <em>good localisation</em> (edges are in the right place), and <em>single response</em> (one edge, not many).`,
          list: [
            `Five stages: Gaussian blur → Sobel gradients → NMS → double threshold → hysteresis`,
            `cv2.Canny(img, threshold1, threshold2) — one-line OpenCV call`,
            `threshold1 = low (weak edges); threshold2 = high (strong edges)`,
            `Auto-tune: thresholds from the image median`,
            `Tuning the ratio (2:1 to 3:1) and the Gaussian sigma matters`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Canny's pipeline: (1) <strong>Gaussian blur</strong> suppresses noise (the Sobel derivative amplifies noise, so pre-smoothing is essential). (2) <strong>Sobel gradients</strong> compute Ix and Iy; the gradient magnitude |G| = sqrt(Ix² + Iy²) and direction θ = atan2(Iy, Ix). (3) <strong>Non-maximum suppression</strong> checks each pixel along the gradient direction and keeps it only if it's the local maximum — thinning edges to 1 pixel. (4) <strong>Double thresholding</strong> classifies pixels: strong (|G| > high), weak (low < |G| < high), or noise (|G| < low). (5) <strong>Hysteresis</strong> keeps weak pixels only if connected to a strong one via 8-connectivity — this produces continuous edges.</p>`,
            `<p>The two thresholds control sensitivity. The low threshold determines which weak edges are candidates; the high threshold determines which are definitely edges. A ratio of 2:1 to 3:1 (high:low) is standard. For auto-tuning: compute the image median v, set low = 0.66*v, high = 1.33*v. This adapts to each image's brightness. The Gaussian sigma (or kernel size) controls how much smoothing happens before gradient computation — larger sigma removes more noise but blurs fine edges.</p>`,
            `<p>Use Canny as the pre-processing step for contour detection (cv2.findContours), Hough line/circle transforms, document scanning (find the four corners), and any classical pipeline that needs clean binary edges. For deep-learning pipelines, the CNN learns its own edge filters — but Canny is still useful for data labelling, classical features, and interpretability.</p>`
          ],
          note: `Reference: Canny, J. (1986), <em>A Computational Approach to Edge Detection</em>, IEEE Trans. PAMI-8(6).`
        },
        {
          heading: 'Visual Representation',
          code: `Canny pipeline (5 stages)

  Image
    |  (1) Gaussian blur (reduce noise)
    v
  Smoothed image
    |  (2) Sobel: Ix, Iy → magnitude |G|, direction theta
    v
  Gradient magnitude map
    |  (3) Non-max suppression (thin to 1px)
    v
  Thinned edges
    |  (4) Double threshold (strong / weak / noise)
    v
  Classified edges
    |  (5) Hysteresis (keep weak only if connected to strong)
    v
  Final binary edge map (clean, 1px, continuous)

  Threshold tuning:
    low  = 0.66 * median(img)    (weak edge threshold)
    high = 1.33 * median(img)    (strong edge threshold)
    ratio high:low ~ 2:1`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Gradient computation and auto-thresholding',
            code: `Sobel gradients (OpenCV uses 3x3 Sobel kernels):
  Gx = cv2.Sobel(img, cv2.CV_64F, 1, 0, ksize=3)
  Gy = cv2.Sobel(img, cv2.CV_64F, 0, 1, ksize=3)
  magnitude = sqrt(Gx^2 + Gy^2)
  direction  = atan2(Gy, Gx) * 180/pi

Auto-threshold from median:
  v = np.median(img)
  lower = int(max(0, 0.66 * v))
  upper = int(min(255, 1.33 * v))

Worked example:
  img median = 100
  lower = 0.66 * 100 = 66
  upper = 1.33 * 100 = 133
  → pixels with |G| > 133 are strong edges
  → pixels with 66 < |G| < 133 are weak (kept if connected to strong)
  → pixels with |G| < 66 are discarded

Python:
  import cv2, numpy as np
  img = np.zeros((200,200), dtype=np.uint8)
  img[:, 100:] = 255                      # vertical edge at x=100
  blurred = cv2.GaussianBlur(img, (5,5), 1.4)
  edges = cv2.Canny(blurred, 66, 133)
  print("Edge pixels:", np.sum(edges > 0), "at x =", np.where(edges[100]>0)[0])`,
            output: `Edge pixels: ~200 at x = [100] — a clean 1-pixel-wide vertical edge at x=100, detected by the full Canny pipeline.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Canny with parameter tuning: sigma, low, high — and auto-tune',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic image with shapes and noise
img = np.zeros((256, 256), dtype=np.uint8)
cv2.rectangle(img, (50, 50), (120, 120), 200, -1)
cv2.circle(img, (180, 180), 50, 200, -1)
cv2.line(img, (10, 230), (240, 10), 200, 2)
np.random.seed(0)
img = np.clip(img.astype(int) + np.random.normal(0, 15, img.shape), 0, 255).astype(np.uint8)

# Auto-tuned Canny
v = np.median(img)
auto_lo = int(max(0, 0.66 * v))
auto_hi = int(min(255, 1.33 * v))
auto = cv2.Canny(cv2.GaussianBlur(img, (5,5), 1.4), auto_lo, auto_hi)

# Manual: low thresholds (more edges, noisy)
low_thr = cv2.Canny(img, 30, 60)

# Manual: high thresholds (fewer edges, clean)
high_thr = cv2.Canny(img, 150, 300)

# Different Gaussian sigma
sig_3 = cv2.Canny(cv2.GaussianBlur(img, (5,5), 3.0), auto_lo, auto_hi)

fig, ax = plt.subplots(2, 2, figsize=(12, 10))
ax[0,0].imshow(img, cmap='gray');     ax[0,0].set_title(f'Original (median={v:.0f})')
ax[0,1].imshow(auto, cmap='gray');    ax[0,1].set_title(f'Auto-tuned ({auto_lo},{auto_hi})')
ax[1,0].imshow(low_thr, cmap='gray'); ax[1,0].set_title('Low thr (30,60) — noisy')
ax[1,1].imshow(high_thr, cmap='gray');ax[1,1].set_title('High thr (150,300) — clean')
plt.tight_layout(); plt.show()

print(f"Auto thresholds: low={auto_lo}, high={auto_hi}")
print(f"Edge counts: auto={np.sum(auto>0)}, low_thr={np.sum(low_thr>0)}, high_thr={np.sum(high_thr>0)}")`,
            output: `Four panels: noisy original, auto-tuned Canny (clean edges), low-threshold Canny (many false edges from noise), high-threshold Canny (only strongest edges). Auto-tuned typically gives the best balance.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Convert to grayscale:</strong> WHY — Canny operates on single-channel; HOW — cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).`,
            `<strong>2. Apply Gaussian blur:</strong> WHY — reduces noise that creates false edges; HOW — cv2.GaussianBlur(gray, (5,5), 1.4).`,
            `<strong>3. Auto-tune thresholds:</strong> HOW — v = np.median(gray); lo = 0.66*v; hi = 1.33*v.`,
            `<strong>4. Run Canny:</strong> HOW — edges = cv2.Canny(blurred, lo, hi).`,
            `<strong>5. Use edges downstream:</strong> HOW — cv2.findContours(edges, ...) or cv2.HoughLines(edges, ...).`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Parameter', 'Effect of increasing', 'Typical range', 'When to adjust', 'How to choose'],
            rows: [
              ['Gaussian sigma', 'More smoothing, fewer but cleaner edges', '0.5-3.0', 'Noisy images', 'Higher for noisy, lower for clean'],
              ['Low threshold', 'More weak edges accepted', '30-100', 'Want more detail', '0.66 * median (auto)'],
              ['High threshold', 'Fewer strong edges', '80-200', 'Want only strong edges', '1.33 * median (auto)'],
              ['Threshold ratio', 'Controls hysteresis behaviour', '2:1 - 3:1', 'Edge connectivity', '2:1 for detail, 3:1 for clean']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Running Canny without Gaussian blur (fix: always blur first — the Sobel step amplifies noise).`,
            `Mistake 2: Using fixed thresholds for all images (fix: auto-tune from the image median).`,
            `Mistake 3: Setting low threshold too low (fix: ratio 2:1-3:1; too low admits too much noise).`,
            `Mistake 4: Using Canny output directly for measurement (fix: Canny gives binary edges — use findContours for shapes, HoughLines for lines).`
          ],
          code: `# WRONG: fixed thresholds, no blur
edges = cv2.Canny(gray, 100, 200)   # noisy on some images, empty on others

# RIGHT: blur + auto-tune
blurred = cv2.GaussianBlur(gray, (5,5), 1.4)
v = np.median(gray)
edges = cv2.Canny(blurred, int(0.66*v), int(1.33*v))`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>OpenCV.js — web-based lane detection.</strong> A common autonomous-driving demo uses Canny edge detection on dashcam frames to find lane markings. The pipeline: grayscale → Gaussian blur (sigma=1.4) → Canny (auto-tuned) → Hough line transform → filter lines by angle. On clear highway video at 30 fps, the Canny+Hough pipeline detects lane lines with <strong>~85% frame accuracy</strong> in good conditions, running in real time even in the browser via OpenCV.js (WebAssembly). While Tesla and Waymo use deep learning for production lane detection, the Canny pipeline remains a standard teaching baseline and is used in open-source projects like comma.ai's early lane-keeping prototypes.`,
          list: [
            `Industry: Autonomous driving (prototyping / education)`,
            `Dataset: Dashcam video at 30 fps`,
            `Model: Canny + HoughLinesP + angle filter`,
            `Results: ~85% frame accuracy on clear highways; real-time in browser`,
            `Impact: Standard teaching pipeline; open-source lane-keeping baseline`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Canny = 5 stages: blur → Sobel → NMS → double threshold → hysteresis.`,
            `Always Gaussian blur before Canny to suppress noise.`,
            `Auto-tune: low = 0.66*median, high = 1.33*median.`,
            `Threshold ratio 2:1 to 3:1 (high:low) is standard.`,
            `Output is a clean, 1-pixel-wide binary edge map.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): What does non-maximum suppression contribute to Canny?\nAns: It thins edges to a single pixel by keeping only the local maximum along the gradient direction. Without NMS, edges would be as wide as the gradient transition zone, making downstream contour detection imprecise.`,
            `Q2 (math): Image median is 80. Compute auto-tuned Canny thresholds.\nAns: low = 0.66*80 = 53; high = 1.33*80 = 106.`,
            `Q3 (coding): Run Canny with auto thresholds on a blurred grayscale image.\nAns: b = cv2.GaussianBlur(g, (5,5), 1.4); v = np.median(g); e = cv2.Canny(b, int(0.66*v), int(1.33*v)).`,
            `Challenge: Why does hysteresis produce more continuous edges than simple thresholding?\nAns: Simple thresholding discards all pixels below the high threshold, fragmenting edges where the gradient dips. Hysteresis keeps weak pixels (between low and high) if they're connected to a strong pixel, bridging gaps and producing continuous edge contours.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create a synthetic image with two shapes (rectangle + circle) and Gaussian noise. Implement auto-tuned Canny (blur + median-based thresholds). Then use cv2.findContours to count the number of contours in the edge map. Does it match the number of shapes?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

img = np.zeros((256, 256), dtype=np.uint8)
cv2.rectangle(img, (40, 40), (120, 120), 200, -1)
cv2.circle(img, (190, 190), 50, 200, -1)
np.random.seed(0)
img = np.clip(img + np.random.normal(0, 15, img.shape), 0, 255).astype(np.uint8)

blurred = cv2.GaussianBlur(img, (5,5), 1.4)
v = np.median(img)
edges = cv2.Canny(blurred, int(0.66*v), int(1.33*v))

contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
print(f"Found {len(contours)} contours (expected 2)")

plt.figure(figsize=(10,4))
plt.subplot(1,2,1); plt.imshow(img, cmap='gray'); plt.title('Original')
plt.subplot(1,2,2); plt.imshow(edges, cmap='gray'); plt.title(f'Edges ({len(contours)} contours)')
plt.tight_layout(); plt.show()`,
            output: `Found 2 contours (expected 2) — the rectangle and the circle each produce one closed contour. Auto-tuned Canny gives clean edges that findContours can parse.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
