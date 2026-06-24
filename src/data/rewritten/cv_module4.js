// Computer Vision — Module 4: Object Detection
// Exports: cvModule4Structure (sidebar) + cvModule4Content (topic bodies)
// Classical HOG+SVM, R-CNN family, YOLO, fine-tuning + mAP evaluation.

export const cvModule4Structure = {
  module4: {
    title: 'Module 4: Object Detection',
    topics: [
      { id: 'hog-svm-detection', title: 'Classical Detection (HOG + SVM)' },
      { id: 'rcnn-family', title: 'R-CNN Family (Fast & Faster R-CNN)' },
      { id: 'yolo-detection', title: 'YOLO Architecture & Inference' },
      { id: 'fine-tune-detection', title: 'Fine-Tuning & mAP Evaluation' },
    ]
  }
};

export const cvModule4Content = {
  module4: {
    'hog-svm-detection': {
      title: 'Classical Detection (HOG + SVM)',
      subtitle: 'Sliding window + HOG features + SVM — the pre-deep-learning pipeline',
      sections: [
        {
          heading: 'What is Classical Object Detection?',
          text: `Think of a security guard scanning a row of monitors. They move their eyes across each screen (sliding window), recognise suspicious shapes (feature extraction), and decide "person" or "not person" (classifier). The classical HOG + SVM pipeline does exactly this: slide a window across the image, extract HOG features from each window, and classify with an SVM. Curiosity gap: how did computers detect pedestrians <em>before</em> deep learning? With HOG features and SVMs — and the famous Dalal & Triggs 2005 paper achieved ~90% pedestrian detection accuracy, a result that stood for years.`,
          list: [
            `Sliding window: scan the image at multiple positions and scales`,
            `HOG: Histogram of Oriented Gradients — edge-direction histograms in cells`,
            `SVM: Support Vector Machine — classifies the HOG feature vector`,
            `Non-maximum suppression: remove overlapping detections`,
            `The pre-2012 standard for pedestrian, face, and object detection`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>The classical pipeline has three stages. (1) <strong>Sliding window</strong>: a fixed-size window (e.g., 64x128 for pedestrians) slides across the image at every position and at multiple scales (image pyramid), generating thousands of candidate patches. (2) <strong>Feature extraction</strong>: each patch is converted to a HOG descriptor — the patch is divided into cells (8x8 pixels); each cell computes a 9-bin histogram of gradient orientations; cells are grouped into blocks (2x2 cells) and normalised; the concatenation gives a ~3780-dimensional feature vector. (3) <strong>Classification</strong>: a pre-trained SVM decides "object" or "background" from the HOG vector.</p>`,
            `<p>HOG features work because object shape is captured by edge directions: a pedestrian has a characteristic pattern of vertical edges (legs, torso) and horizontal edges (shoulders, head). The histogram of gradient orientations encodes this shape compactly and is somewhat invariant to illumination (because gradients are normalised). The SVM finds the optimal hyperplane separating object HOG vectors from background HOG vectors.</p>`,
            `<p>This pipeline was state-of-the-art until ~2012. It's still used when you can't train a deep model: limited data, edge devices, or real-time constraints on CPU. OpenCV's built-in cv2.HOGDescriptor_getDefaultPeopleDetector() provides a pre-trained pedestrian detector. The limitation: HOG + SVM is rigid — it can't learn the rich hierarchical features that CNNs discover, so accuracy plateaus well below modern deep detectors.</p>`
          ],
          note: `Reference: Dalal, N. & Triggs, B. (2005), <em>Histograms of Oriented Gradients for Human Detection</em>, CVPR.`
        },
        {
          heading: 'Visual Representation',
          code: `HOG + SVM + sliding window pipeline

  Image
    |  Image pyramid (multiple scales)
    v
  For each scale:
    |  Sliding window (64x128)
    v
  For each window:
    |  Compute HOG features (~3780-dim)
    |    → 8x8 cells, 9-bin gradient histograms
    |    → 2x2 block normalisation
    v
  SVM classifies: object or background?
    |
  All detections (many overlapping)
    |  Non-maximum suppression
    v
  Final detections (one box per object)

  HOG feature computation:
    patch → gradients (Sobel) → cells (8x8)
    → 9-bin histogram per cell → blocks (2x2)
    → L2 normalise → concatenate → ~3780-dim vector`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'HOG descriptor dimensions and SVM decision',
            code: `HOG descriptor size:
  image: 64x128 (winSize)
  cell: 8x8 (cellSize)
  block: 2x2 cells (blockSize = 16x16)
  block stride: 8x8 (blockStride)
  bins: 9 (orientation bins, 0-180°)

  # blocks horizontally: (64 - 16) / 8 + 1 = 7
  # blocks vertically:   (128 - 16) / 8 + 1 = 15
  # blocks total: 7 * 15 = 105
  # per block: 2*2 cells * 9 bins = 36 values
  # total descriptor: 105 * 36 = 3780 dimensions

SVM decision:
  f(x) = sign(w · x + b)
  x = HOG descriptor (3780-dim)
  w = SVM weights (learned from training data)
  f(x) > 0 → object, f(x) < 0 → background

Worked example:
  HOG vector x (3780-dim), SVM weights w (3780-dim)
  dot product w·x = 2.3, bias b = -1.0
  f(x) = 2.3 - 1.0 = 1.3 > 0 → "object detected"

Python:
  import cv2
  hog = cv2.HOGDescriptor()
  hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())
  img = np.zeros((256, 128), dtype=np.uint8)  # placeholder
  # (rects, weights) = hog.detectMultiScale(img)`,
            output: `HOG descriptor for a 64x128 window is 3780-dimensional. The SVM computes a dot product and applies a sign function. Positive → object detected at that window position.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Pedestrian detection with OpenCV HOG + SVM (Haar cascade face detection as comparison)',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. HOG pedestrian detector (built-in pre-trained SVM)
hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

# create a synthetic "person-like" image (tall rectangle)
img = np.zeros((400, 300, 3), dtype=np.uint8)
cv2.rectangle(img, (120, 80), (180, 320), (200, 200, 200), -1)  # body
cv2.circle(img, (150, 60), 25, (200, 200, 200), -1)             # head
cv2.line(img, (120, 200), (180, 200), 100, 3)                   # arms

# detect at multiple scales
rects, weights = hog.detectMultiScale(img, winStride=(8,8), padding=(8,8), scale=1.05)
print(f"HOG detections: {len(rects)}")
for (x,y,w,h) in rects:
    cv2.rectangle(img, (x,y), (x+w,y+h), (0,255,0), 2)

# 2. Haar cascade face detection (another classical detector)
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3, minSize=(30,30))
print(f"Haar face detections: {len(faces)}")
for (x,y,w,h) in faces:
    cv2.rectangle(img, (x,y), (x+w,y+h), (255,0,0), 2)

# 3. Visualise HOG features
hog_img = np.zeros((400, 300), dtype=np.uint8)
hog_desc = hog.compute(img)   # not exactly right shape, but demonstrates
print(f"HOG descriptor size: {len(hog_desc) if hog_desc is not None else 0}")

plt.figure(figsize=(12,5))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.title(f'HOG (green): {len(rects)} | Haar (blue): {len(faces)}')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `A synthetic person-like figure with green bounding boxes from the HOG detector and blue boxes from the Haar cascade. The HOG descriptor is ~3780-dimensional per window. Both are classical (no deep learning) but still useful for CPU-constrained applications.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Choose the detector type:</strong> WHY — HOG for pedestrians/body shapes, Haar for faces; HOW — cv2.HOGDescriptor or cv2.CascadeClassifier.`,
            `<strong>2. Set the detection parameters:</strong> WHY — control speed vs accuracy; HOW — winStride (step size), scale (pyramid ratio), minSize.`,
            `<strong>3. Run detectMultiScale:</strong> HOW — rects, weights = hog.detectMultiScale(img, winStride=(8,8), scale=1.05).`,
            `<strong>4. Apply non-max suppression:</strong> WHY — remove overlapping duplicate boxes; HOW — cv2.dnn.NMSBoxes or manual IoU-based NMS.`,
            `<strong>5. Draw and use results:</strong> HOW — cv2.rectangle for each detection.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Method', 'Features', 'Classifier', 'Speed (CPU)', 'Accuracy', 'When to use'],
            rows: [
              ['HOG + SVM', 'Gradient histograms', 'Linear SVM', 'Medium', 'Good (~90% pedestrian)', 'CPU-only, pedestrian detection'],
              ['Haar cascade', 'Rect intensity features', 'Boosted cascade', 'Fast', 'Moderate (face)', 'Real-time face detection on CPU'],
              ['R-CNN (deep)', 'CNN features', 'SVM/softmax', 'Slow', 'High', 'High accuracy, offline'],
              ['YOLO (deep)', 'CNN end-to-end', 'Single network', 'Fast (GPU)', 'High', 'Real-time on GPU']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Not using multi-scale detection (fix: detectMultiScale with scale=1.05 to find objects at different sizes).`,
            `Mistake 2: Skipping non-max suppression (fix: NMS removes overlapping duplicate detections — without it, one person has 5 boxes).`,
            `Mistake 3: Using HOG for objects without distinctive edge patterns (fix: HOG works for pedestrians/cars but fails for amorphous objects — use deep learning).`,
            `Mistake 4: winStride too small (fix: 8-16 pixels is standard; too small = very slow with marginal accuracy gain).`
          ],
          code: `# WRONG: single-scale detection misses objects at other sizes
rects = hog.detect(img)   # only finds objects at exactly 64x128 px

# RIGHT: multi-scale with reasonable stride
rects, weights = hog.detectMultiScale(img, winStride=(8,8), scale=1.05)
# then apply NMS
indices = cv2.dnn.NMSBoxes(rects.tolist(), weights.tolist(), 0.5, 0.3)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>OpenCV Haar cascades — face detection on every laptop.</strong> Before deep learning, the standard face detection in webcams, digital cameras, and early phone cameras used Haar cascades (Viola-Jones, 2001). The detector uses simple rectangle features and a boosted cascade of classifiers, running at 15+ fps on a 2005-era CPU. OpenCV ships pre-trained Haar cascades for faces, eyes, and full bodies. While modern phones use deep-learning face detection, Haar cascades remain the default in OpenCV's ` + "`cv2.CascadeClassifier`" + ` and are still used in low-cost embedded devices. The algorithm's contribution — the cascade structure that rejects easy negatives in early stages — influenced all subsequent detection architectures.`,
          list: [
            `Industry: Consumer electronics / webcam`,
            `Dataset: Frontal face images (15K+ for training)`,
            `Model: Haar features + AdaBoost cascade (Viola-Jones)`,
            `Results: 15+ fps on 2005 CPU; ~95% frontal face detection`,
            `Impact: Enabled webcam face detection; influenced all later cascade detectors`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Classical detection = sliding window + features (HOG) + classifier (SVM).`,
            `HOG: 64x128 window → 3780-dim gradient-histogram feature vector.`,
            `Always use multi-scale (detectMultiScale) and non-max suppression.`,
            `Haar cascades: fast face detection on CPU (Viola-Jones 2001).`,
            `Superseded by deep learning (YOLO, R-CNN) for accuracy, but still useful on CPU.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does HOG use gradient orientation histograms instead of raw pixel values?\nAns: Gradients capture shape (edge direction) which is more discriminative for object form than raw intensity. Histograms make the representation robust to small spatial shifts. Normalisation makes it robust to illumination changes.`,
            `Q2 (math): A 64x128 HOG window with 8x8 cells, 2x2 blocks, 9 bins. Compute the descriptor size.\nAns: 7 blocks horizontal * 15 blocks vertical * (2*2*9 = 36) = 105 * 36 = 3780.`,
            `Q3 (coding): Run the built-in HOG pedestrian detector.\nAns: hog = cv2.HOGDescriptor(); hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector()); rects, w = hog.detectMultiScale(img).`,
            `Challenge: Why is the sliding-window approach slower than YOLO's single-pass detection?\nAns: Sliding window evaluates a classifier at thousands of positions (and scales), each requiring a separate feature computation and SVM decision. YOLO processes the entire image in one forward pass of a single CNN, predicting all bounding boxes simultaneously — amortising the computation across the whole image.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task — Face Detection System:</strong> Using OpenCV's pre-trained Haar cascade, build a face detection system. Create a synthetic image with two "faces" (circles with eye dots), run the face cascade, and draw blue boxes around detected faces. This is the classical approach used in early digital cameras.`,
          example: {
            title: 'Solution (collapsed) — Face Detection System',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# synthetic "faces": skin-coloured circles with eye dots
img = np.full((300, 400, 3), 50, dtype=np.uint8)
for (cx, cy) in [(100, 150), (300, 150)]:
    cv2.circle(img, (cx, cy), 50, (200, 170, 150), -1)    # face
    cv2.circle(img, (cx-18, cy-10), 6, (40,40,40), -1)    # left eye
    cv2.circle(img, (cx+18, cy-10), 6, (40,40,40), -1)    # right eye
    cv2.ellipse(img, (cx, cy+15), (15, 8), 0, 0, 180, (100,50,50), -1)  # mouth

# Haar cascade face detection
cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faces = cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=3, minSize=(40,40))
print(f"Faces detected: {len(faces)}")

for (x,y,w,h) in faces:
    cv2.rectangle(img, (x,y), (x+w,y+h), (255,0,0), 2)

plt.figure(figsize=(10,5))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.title(f'Face Detection: {len(faces)} faces found')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `Faces detected: 0-2 (Haar cascades may not fire on synthetic shapes — they're trained on real faces. On a real photo, it detects faces reliably. This demonstrates a limitation: classical detectors need realistic input distributions.)`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'rcnn-family': {
      title: 'R-CNN Family (Fast & Faster R-CNN)',
      subtitle: 'Region-based CNNs — from selective search to learned proposals',
      sections: [
        {
          heading: 'What is the R-CNN Family?',
          text: `Think of a detective who first identifies suspicious areas (regions) of a crime scene photo, then examines each one closely. R-CNN does the same: it first proposes ~2000 candidate regions, then runs a CNN on each to classify and refine the bounding box. The family evolved from slow (R-CNN: 2000 separate CNN passes) to fast (Fast R-CNN: one CNN pass over the whole image) to real-time (Faster R-CNN: a neural network proposes the regions). Curiosity gap: what made Faster R-CNN "faster"? Replacing the CPU-based selective search with a <em>neural</em> region proposer that runs on the GPU alongside the detector.`,
          list: [
            `R-CNN (2014): selective search → 2000 regions → CNN each → SVM`,
            `Fast R-CNN (2015): one CNN pass → ROI pooling → classify all regions`,
            `Faster R-CNN (2015): Region Proposal Network (RPN) + Fast R-CNN`,
            `Mask R-CNN (2017): adds pixel-level mask (instance segmentation)`,
            `torchvision.models.detection has pre-trained Faster R-CNN + Mask R-CNN`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>R-CNN (2014) was the first to combine CNNs with region proposals. It used selective search (a CPU algorithm) to propose ~2000 candidate bounding boxes, ran a CNN on each (2000 forward passes!), then an SVM classified each and a bounding-box regressor refined the box. Accuracy jumped 30% over DPM on PASCAL VOC — but it took 47 seconds per image.</p>`,
            `<p>Fast R-CNN (2015) ran the CNN once on the whole image, then used ROI (Region of Interest) pooling to extract a fixed-size feature map for each proposed region from the shared feature map. This was 9x faster and more accurate. But selective search (CPU, ~2s/image) was now the bottleneck. Faster R-CNN (2015) replaced it with a Region Proposal Network (RPN) — a small CNN that proposes regions from the feature map, running on the GPU. This brought detection to ~5 fps and is still a strong two-stage detector.</p>`,
            `<p>Use Faster R-CNN when you need high accuracy and can afford ~100ms inference (medical imaging, satellite analysis, quality inspection). Use Mask R-CNN (Faster R-CNN + a mask head) when you need pixel-level instance masks (document analysis, biological cell segmentation). torchvision provides pre-trained Faster R-CNN (ResNet-50-FPN) and Mask R-CNN — load with torchvision.models.detection.fasterrcnn_resnet50_fpn(pretrained=True).</p>`
          ],
          note: `References: Girshick et al. (2014), <em>Rich feature hierarchies (R-CNN)</em>; Ren et al. (2015), <em>Faster R-CNN: Towards Real-Time Object Detection with RPNs</em>, NeurIPS.`
        },
        {
          heading: 'Visual Representation',
          code: `R-CNN family evolution

  R-CNN (47s/image):
    selective search → 2000 regions → CNN(each) → SVM → bbox regress
    (2000 separate CNN forward passes)

  Fast R-CNN (0.3s/image):
    CNN(whole image) → ROI pooling(regions) → softmax + bbox regress
    (one CNN pass, regions share features)

  Faster R-CNN (0.05s/image):
    CNN → RPN (proposes regions) → ROI pooling → classify + regress
    (everything is neural, runs on GPU)

  Mask R-CNN:
    Faster R-CNN + mask head → adds pixel mask per instance
    (instance segmentation)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'ROI pooling and the RPN anchor boxes',
            code: `ROI Pooling (Fast R-CNN):
  For each proposed region (of any size), divide into HxW grid
  (e.g., 7x7), max-pool in each cell → fixed HxW feature map.
  This lets the classifier handle variable-size regions.

RPN Anchor boxes (Faster R-CNN):
  At each feature-map position, generate k reference boxes (anchors)
  with 3 scales x 3 aspect ratios = 9 anchors per position.
  RPN predicts: objectness score (binary) + 4 box adjustments per anchor.

  For a 50x38 feature map (from 800x600 image, stride 16):
  positions = 50*38 = 1900
  anchors = 1900 * 9 = 17,100
  → RPN proposes top-N (e.g., 300) by objectness score

Multi-task loss (Faster R-CNN):
  L = L_cls(p, u) + lambda * [u >= 1] * L_box(t, v)
  where L_cls = classification loss, L_box = smooth L1 bbox regression

Python (torchvision):
  from torchvision.models.detection import fasterrcnn_resnet50_fpn
  model = fasterrcnn_resnet50_fpn(pretrained=True)
  # input: list of tensors (C,H,W), 0-1 float
  # output: [{'boxes':..., 'labels':..., 'scores':...}, ...]`,
            output: `Faster R-CNN generates ~17,100 anchor boxes, the RPN scores them and proposes the top 300. ROI pooling extracts fixed-size features for each. The model outputs boxes, labels, and confidence scores.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Inference with pre-trained Faster R-CNN from torchvision',
            code: `import torch
from torchvision.models.detection import fasterrcnn_resnet50_fpn, FasterRCNN_ResNet50_FPN_Weights
from torchvision.transforms.functional import to_tensor
import torchvision
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

# load pre-trained model (COCO: 80 classes)
model = fasterrcnn_resnet50_fpn(weights=FasterRCNN_ResNet50_FPN_Weights.DEFAULT)
model.eval()

# create a synthetic image with shapes (stands in for a real photo)
img_np = np.zeros((400, 600, 3), dtype=np.uint8)
img_np[:] = [120, 120, 120]   # grey background
cv2_rect = patches.Rectangle  # just for matplotlib
# draw some "objects"
import cv2
cv2.rectangle(img_np, (100, 100), (200, 250), (200, 50, 50), -1)  # red block
cv2.rectangle(img_np, (350, 150), (500, 300), (50, 50, 200), -1)  # blue block
cv2.circle(img_np, (450, 80), 40, (50, 200, 50), -1)               # green circle

# prepare input tensor (C, H, W), float [0, 1]
img_tensor = to_tensor(img_np).unsqueeze(0)  # add batch dim

# inference
with torch.no_grad():
    predictions = model(img_tensor)

pred = predictions[0]
# filter by confidence
conf_thresh = 0.5
keep = pred['scores'] > conf_thresh
boxes = pred['boxes'][keep].numpy()
labels = pred['labels'][keep].numpy()
scores = pred['scores'][keep].numpy()

COCO_NAMES = ['__bg__','person','bicycle','car','motorcycle','airplane','bus','train','truck','boat','traffic light',]
print(f"Detections above {conf_thresh}: {len(boxes)}")

fig, ax = plt.subplots(1, figsize=(10, 6))
ax.imshow(img_np)
for box, label, score in zip(boxes, labels, scores):
    x1, y1, x2, y2 = box
    name = COCO_NAMES[label] if label < len(COCO_NAMES) else f'class {label}'
    rect = patches.Rectangle((x1,y1), x2-x1, y2-y1, linewidth=2, edgecolor='lime', facecolor='none')
    ax.add_patch(rect)
    ax.text(x1, y1-5, f'{name} {score:.2f}', color='lime', fontsize=10, weight='bold')
ax.set_title(f'Faster R-CNN detections ({len(boxes)} boxes)')
ax.axis('off'); plt.tight_layout(); plt.show()`,
            output: `Faster R-CNN produces bounding boxes with class labels and confidence scores. On synthetic shapes, detections may be sparse (the model is trained on COCO's 80 real-world classes). On a real photo, it detects people, cars, animals, furniture, etc. with ~44% mAP on COCO.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Load the pre-trained model:</strong> HOW — fasterrcnn_resnet50_fpn(weights=...DEFAULT); model.eval().`,
            `<strong>2. Prepare the input:</strong> HOW — to_tensor(img) gives (C,H,W) float [0,1]; add batch dim.`,
            `<strong>3. Run inference:</strong> HOW — with torch.no_grad(): preds = model(img_tensor).`,
            `<strong>4. Filter by confidence:</strong> WHY — remove low-confidence detections; HOW — keep = preds['scores'] > 0.5.`,
            `<strong>5. Draw boxes and labels:</strong> HOW — iterate preds['boxes'], 'labels', 'scores'; draw with matplotlib or cv2.rectangle.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Model', 'Proposals', 'CNN passes', 'Speed (GPU)', 'mAP (COCO)', 'When to use'],
            rows: [
              ['R-CNN', 'Selective search (2000)', '2000', '47s/img', '66.0 (VOC)', 'Historical only'],
              ['Fast R-CNN', 'Selective search (2000)', '1 + ROI pool', '0.3s/img', '70.0 (VOC)', 'Historical'],
              ['Faster R-CNN', 'RPN (neural, 300)', '1 (shared)', '0.05s/img', '44% (COCO)', 'High accuracy, two-stage'],
              ['Mask R-CNN', 'RPN + mask head', '1 (shared)', '0.07s/img', '44% + masks', 'Instance segmentation'],
              ['YOLOv8', 'None (single pass)', '1', '0.01s/img', '53% (COCO)', 'Real-time, one-stage']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Forgetting model.eval() (fix: always call model.eval() before inference — otherwise dropout/batchnorm behave incorrectly).`,
            `Mistake 2: Passing a numpy array instead of a tensor (fix — use to_tensor(img) to convert HWC uint8 → CHW float [0,1]).`,
            `Mistake 3: Not filtering by confidence (fix — threshold scores at 0.5+; below that are near-random detections).`,
            `Mistake 4: Using R-CNN for real-time (fix — use Faster R-CNN or YOLO; R-CNN is 47s/image and historical only).`
          ],
          code: `# WRONG: pass numpy array, forget eval(), no threshold
model = fasterrcnn_resnet50_fpn(pretrained=True)   # eval() missing
preds = model(img_numpy)                             # wrong input type

# RIGHT: eval, tensor, threshold
model.eval()
with torch.no_grad():
    preds = model(to_tensor(img).unsqueeze(0))
keep = preds[0]['scores'] > 0.5`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Facebook AI — Detectron2.</strong> Facebook (Meta) AI Research open-sourced Detectron2 in 2019, a modular detection library built on Faster R-CNN, Mask R-CNN, and newer architectures (Panoptic FPN, Cascade R-CNN). It is used in production at Meta for content understanding (detecting objects in user photos for accessibility alt-text), and by thousands of companies for custom detection tasks. Detectron2's Faster R-CNN with a ResNeXt-101 backbone achieves <strong>48% mAP on COCO</strong> — near the top of two-stage detectors. The library's modular design lets researchers swap backbones, heads, and proposal methods, making it the standard platform for detection research.`,
          list: [
            `Industry: Social media / AI research`,
            `Dataset: COCO (80 classes, 80K training images)`,
            `Model: Detectron2 — Faster R-CNN / Mask R-CNN with ResNeXt-101`,
            `Results: 48% mAP on COCO (two-stage SOTA)`,
            `Impact: Auto alt-text for visually impaired users; open-source detection research`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `R-CNN → Fast R-CNN → Faster R-CNN: 47s → 0.3s → 0.05s per image.`,
            `Faster R-CNN = RPN (neural proposals) + ROI pooling + classifier.`,
            `Mask R-CNN = Faster R-CNN + a mask head for instance segmentation.`,
            `torchvision: fasterrcnn_resnet50_fpn(weights=...DEFAULT) for pre-trained.`,
            `Two-stage = high accuracy; one-stage (YOLO) = real-time speed.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): What did Faster R-CNN replace from Fast R-CNN, and why?\nAns: It replaced selective search (a CPU algorithm that took ~2s/image to propose regions) with a Region Proposal Network (RPN) — a small CNN that proposes regions from the feature map on the GPU. This removed the CPU bottleneck and made the entire pipeline neural.`,
            `Q2 (math): A feature map is 50x38 with 9 anchors per position. How many anchors total?\nAns: 50 * 38 * 9 = 17,100 anchors.`,
            `Q3 (coding): Load a pre-trained Faster R-CNN and run inference on a tensor.\nAns: m = fasterrcnn_resnet50_fpn(weights=...DEFAULT); m.eval(); p = m(img_tensor).`,
            `Challenge: Why does ROI pooling allow processing regions of different sizes with a shared CNN?\nAns: ROI pooling divides any-sized region into a fixed grid (e.g., 7x7) and max-pools each cell, producing a fixed 7x7 feature map regardless of the original region size. This lets the classifier head always receive the same input dimension, even though the regions vary.`
          ]
        },
        {
          heading: 'Practice Questions (continued)',
          list: [
            `Challenge: Why is Faster R-CNN called a "two-stage" detector while YOLO is "one-stage"?\nAns: Faster R-CNN has two stages: (1) the RPN proposes candidate regions, (2) the classifier + regressor processes each region. YOLO does both in a single stage: one CNN pass predicts all boxes, classes, and confidences directly. Two-stage is more accurate; one-stage is faster.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Load the pre-trained Faster R-CNN from torchvision. Create a synthetic image with coloured rectangles. Run inference, filter detections above 0.5 confidence, and draw the bounding boxes with labels. (Note: on synthetic shapes, COCO-trained detections may be sparse — try a real image for meaningful results.)`,
          example: {
            title: 'Solution (collapsed)',
            code: `import torch, cv2, numpy as np
import matplotlib.pyplot as plt, matplotlib.patches as patches
from torchvision.models.detection import fasterrcnn_resnet50_fpn, FasterRCNN_ResNet50_FPN_Weights
from torchvision.transforms.functional import to_tensor

model = fasterrcnn_resnet50_fpn(weights=FasterRCNN_ResNet50_FPN_Weights.DEFAULT)
model.eval()

img = np.full((400, 600, 3), 100, dtype=np.uint8)
cv2.rectangle(img, (80, 100), (220, 300), (200, 50, 50), -1)
cv2.rectangle(img, (350, 120), (520, 280), (50, 50, 200), -1)
cv2.circle(img, (450, 60), 35, (50, 200, 50), -1)

with torch.no_grad():
    pred = model(to_tensor(img).unsqueeze(0))[0]
keep = pred['scores'] > 0.5
print(f"Detections: {keep.sum().item()}")

fig, ax = plt.subplots(1, figsize=(10, 6))
ax.imshow(img)
for box, score in zip(pred['boxes'][keep].numpy(), pred['scores'][keep].numpy()):
    x1,y1,x2,y2 = box
    ax.add_patch(patches.Rectangle((x1,y1), x2-x1, y2-y1, lw=2, ec='lime', fc='none'))
    ax.text(x1, y1-5, f'{score:.2f}', color='lime', fontweight='bold')
ax.set_title('Faster R-CNN inference'); ax.axis('off'); plt.tight_layout(); plt.show()`,
            output: `Detections vary on synthetic images. On a real photo (e.g., a street scene), Faster R-CNN detects people, cars, and traffic lights with bounding boxes and confidence scores.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'yolo-detection': {
      title: 'YOLO Architecture & Inference',
      subtitle: 'You Only Look Once — real-time object detection in a single pass',
      sections: [
        {
          heading: 'What is YOLO?',
          text: `Think of glancing at a busy street for one second. In that single glance, you see cars, people, signs, and a dog — all at once. YOLO (You Only Look Once) does the same: instead of scanning the image region by region, it processes the entire image in <em>one forward pass</em> and predicts all objects simultaneously. Curiosity gap: how can one network pass produce hundreds of bounding boxes? By dividing the image into a grid and having each grid cell predict boxes + classes directly — no separate proposal stage.`,
          list: [
            `YOLO: one-stage detector — single CNN pass for all boxes + classes`,
            `Divides image into SxS grid; each cell predicts B boxes + C classes`,
            `Versions: YOLOv1-v10, with YOLOv8 (Ultralytics) the most popular modern version`,
            `Real-time: 30-300+ FPS on GPU; YOLOv8n runs on edge devices`,
            `Trained on COCO (80 classes); easily fine-tuned for custom classes`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>YOLO divides the input image into an SxS grid (e.g., 13x13 for a 416x416 input at stride 32). Each grid cell predicts B bounding boxes (each with x, y, width, height, and a confidence score) and C class probabilities. The final prediction tensor is S x S x (B*5 + C). For YOLOv1 with S=7, B=2, C=20 (PASCAL VOC): 7*7*(2*5+20) = 7*7*30 = 1470 values per image. Non-maximum suppression then removes overlapping boxes, keeping the highest-confidence one per object.</p>`,
            `<p>Modern YOLO versions (v5, v8) add: anchor-free detection (decoupled box + class heads), feature pyramid networks (detect objects at multiple scales), and a focus on speed-accuracy trade-off (nano/small/medium/large/xlarge variants). YOLOv8 (Ultralytics, 2023) achieves 53% mAP on COCO at 280 FPS (YOLOv8x) — the best speed-accuracy Pareto frontier among one-stage detectors. Inference is as simple as: from ultralytics import YOLO; model = YOLO('yolov8n.pt'); results = model('image.jpg').</p>`,
            `<p>Use YOLO when you need real-time detection: video streams (surveillance, autonomous driving, sports analytics), edge devices (Jetson, phone), or batch processing of large image sets. Use the nano (n) or small (s) variant for speed-constrained deployments; the large (l) or extra-large (x) variant for maximum accuracy. For custom classes, fine-tune (see the next topic) — YOLOv8 fine-tunes in a few lines: model.train(data='custom.yaml', epochs=100).</p>`
          ],
          note: `References: Redmon et al. (2016), <em>You Only Look Once: Unified, Real-Time Object Detection</em>, CVPR; Jocher et al. (2023), <em>Ultralytics YOLOv8</em>.`
        },
        {
          heading: 'Visual Representation',
          code: `YOLO: single-pass detection

  Image (416x416)
    |
    v  CNN backbone (Darknet / CSPDarknet)
  Feature maps at multiple scales (FPN)
    |
    v  Detection heads (3 scales: 13x13, 26x26, 52x52)
  Each cell predicts: B boxes (x,y,w,h,conf) + C class probs
    |
    v  Non-maximum suppression
  Final detections: [box, class, confidence]

  YOLOv1 output tensor (S=7, B=2, C=20):
    7 x 7 x (2*5 + 20) = 7 x 7 x 30 = 1470 values

  YOLOv8 variants (COCO mAP / speed):
    nano  (n): 37.3% mAP,  ~1ms   (edge devices)
    small (s): 44.9% mAP,  ~2ms
    medium(m): 50.2% mAP,  ~5ms
    large (l): 52.9% mAP,  ~9ms
    xlarge(x): 53.9% mAP,  ~14ms`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'YOLO prediction tensor and NMS',
            code: `YOLO prediction (per grid cell):
  For each of B boxes:
    (x, y, w, h, confidence)
    x, y = box centre relative to grid cell (sigmoid)
    w, h = box size relative to image (exp of network output)
    confidence = Pr(object) * IoU(pred, truth)
  Class probabilities: Pr(class_i | object) for each of C classes

  Total output per cell: B * 5 + C values

Non-maximum suppression (NMS):
  1. Sort boxes by confidence (descending)
  2. Pick the top box; remove all boxes with IoU > threshold (e.g., 0.45)
  3. Repeat until no boxes remain

IoU (Intersection over Union):
  IoU = area(A ∩ B) / area(A ∪ B)
  Worked example:
    A = [10,10,50,50] (area = 40*40 = 1600)
    B = [30,30,70,70] (area = 40*40 = 1600)
    intersection = [30,30,50,50] (area = 20*20 = 400)
    union = 1600 + 1600 - 400 = 2800
    IoU = 400 / 2800 = 0.143
    → IoU < 0.45 → both boxes kept (different objects)

Python (Ultralytics YOLOv8):
  from ultralytics import YOLO
  model = YOLO('yolov8n.pt')          # nano variant
  results = model('image.jpg')
  for r in results:
      print(r.boxes.xyxy, r.boxes.conf, r.boxes.cls)`,
            output: `YOLO outputs bounding boxes (xyxy format), confidence scores, and class IDs for all detected objects in one forward pass. NMS removes overlapping duplicates using IoU.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'YOLOv8 inference + object counting (count detected objects by class)',
            code: `# NOTE: requires  pip install ultralytics
# This code shows the standard YOLOv8 inference + counting pipeline.

from ultralytics import YOLO
import cv2
import numpy as np
import matplotlib.pyplot as plt

# load the nano model (fastest; download weights on first run)
model = YOLO('yolov8n.pt')   # auto-downloads if not present

# create a synthetic image (in practice, load a real photo)
img = np.full((480, 640, 3), 120, dtype=np.uint8)
cv2.rectangle(img, (100, 150), (250, 400), (180, 80, 60), -1)
cv2.rectangle(img, (350, 200), (550, 420), (60, 80, 180), -1)
cv2.circle(img, (400, 80), 50, (60, 180, 60), -1)
cv2.imsage = img  # typo guard

# run inference
results = model(img)

# extract detections
boxes   = results[0].boxes.xyxy.cpu().numpy()    # (N, 4)
confs   = results[0].boxes.conf.cpu().numpy()     # (N,)
classes = results[0].boxes.cls.cpu().numpy().astype(int)  # (N,)

# count objects by class
from collections import Counter
COCO_NAMES = model.names   # dict {0: 'person', 1: 'bicycle', ...}
counts = Counter(classes)
print(f"Total objects: {len(boxes)}")
for cls_id, cnt in counts.items():
    print(f"  {COCO_NAMES[cls_id]}: {cnt}")

# draw
for (x1,y1,x2,y2), conf, cls in zip(boxes, confs, classes):
    cv2.rectangle(img, (int(x1),int(y1)), (int(x2),int(y2)), (0,255,0), 2)
    label = f"{COCO_NAMES[cls]} {conf:.2f}"
    cv2.putText(img, label, (int(x1),int(y1)-5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0,255,0), 1)

plt.figure(figsize=(10, 6))
plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
plt.title(f'YOLOv8: {len(boxes)} objects detected')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `YOLOv8 detects objects in one forward pass, outputting boxes, confidence scores, and class IDs. The Counter tallies detections per class — the core of an object-counting application. On a real street photo, expect ~10-30 detections (people, cars, signs) in <10ms on a GPU.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Install and load the model:</strong> HOW — pip install ultralytics; from ultralytics import YOLO; model = YOLO('yolov8n.pt').`,
            `<strong>2. Run inference:</strong> HOW — results = model(img) (one line, one forward pass).`,
            `<strong>3. Extract boxes, confidences, classes:</strong> HOW — results[0].boxes.xyxy / .conf / .cls.`,
            `<strong>4. Filter by confidence:</strong> HOW — keep = confs > 0.5 (NMS is done internally by YOLO).`,
            `<strong>5. Draw or count:</strong> HOW — cv2.rectangle for boxes; Counter(classes) for counting.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Detector', 'Type', 'Speed (GPU)', 'mAP (COCO)', 'Use case', 'Library'],
            rows: [
              ['Faster R-CNN', 'Two-stage', '20 FPS', '44%', 'Max accuracy, offline', 'torchvision / Detectron2'],
              ['YOLOv8n', 'One-stage', '280+ FPS', '37%', 'Edge / real-time', 'ultralytics'],
              ['YOLOv8x', 'One-stage', '70 FPS', '54%', 'High accuracy + speed', 'ultralytics'],
              ['SSD300', 'One-stage', '46 FPS', '26%', 'Embedded / mobile', 'torchvision'],
              ['DETR (transformer)', 'Transformer', '28 FPS', '42%', 'Research, set-based', 'torch hub']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using the xlarge model for real-time video (fix: use nano or small for speed; xlarge is for offline accuracy).`,
            `Mistake 2: Forgetting that YOLO expects BGR (OpenCV) or RGB (PIL) consistently (fix: match the input format — Ultralytics handles both, but be consistent).`,
            `Mistake 3: Not filtering low-confidence boxes (fix — keep conf > 0.5; YOLO's internal NMS uses IoU 0.45 but you should also threshold confidence).`,
            `Mistake 4: Resizing input to non-multiples of 32 (fix: YOLO requires input dimensions divisible by the stride — 32 for most versions; the library auto-resizes, but be aware).`
          ],
          code: `# WRONG: use the xlarge model on a CPU for real-time video
model = YOLO('yolov8x.pt')   # 68M params, ~14ms/frame on GPU, ~300ms on CPU
model(video_stream)          # too slow for real-time on CPU

# RIGHT: nano for speed, on GPU if available
model = YOLO('yolov8n.pt')   # 3M params, ~1ms on GPU
results = model(frame)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>NVIDIA — DeepStream traffic analytics.</strong> NVIDIA's DeepStream SDK uses YOLO (originally YOLOv4, now YOLOv8) as its primary detection model for traffic monitoring at intersections. Cameras stream 1080p video at 30 fps; YOLOv8s on an NVIDIA Jetson Orin detects vehicles, pedestrians, and cyclists in real time. The detections feed a tracker (DeepSORT) that follows each object across frames, enabling traffic counts, speed estimation, and near-miss detection. A single Jetson Orin processes <strong>4 camera streams at 30 fps</strong> with YOLOv8s — covering a full intersection. Deployed in smart-city projects across 50+ countries for adaptive traffic signal control.`,
          list: [
            `Industry: Smart cities / traffic monitoring`,
            `Dataset: 1080p intersection camera streams at 30 fps`,
            `Model: YOLOv8s + DeepSORT tracker on NVIDIA Jetson Orin`,
            `Results: 4 streams x 30 fps on one edge device; ~50% mAP on traffic classes`,
            `Impact: Adaptive traffic signals in 50+ countries; reduced congestion`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `YOLO = one-stage, single-pass detector; SxS grid predicts boxes + classes.`,
            `YOLOv8 (Ultralytics): 37-54% mAP, 70-280 FPS; variants n/s/m/l/x.`,
            `Inference: model = YOLO('yolov8n.pt'); results = model(img).`,
            `NMS and IoU thresholding happen internally; filter confidence externally.`,
            `Use nano/small for edge/real-time; large/xlarge for max accuracy.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why is YOLO faster than Faster R-CNN?\nAns: YOLO processes the entire image in one CNN forward pass, predicting all boxes and classes directly from the feature map. Faster R-CNN has two stages: the RPN proposes regions, then each region is classified separately — adding a second forward computation.`,
            `Q2 (math): Two boxes A=[10,10,50,50] and B=[20,20,60,60]. Compute IoU.\nAns: intersection = [20,20,50,50], area = 30*30 = 900; A area = 40*40 = 1600, B area = 40*40 = 1600; union = 1600+1600-900 = 2300; IoU = 900/2300 = 0.391.`,
            `Q3 (coding): Run YOLOv8 inference and print the class names of all detections.\nAns: results = model(img); for c in results[0].boxes.cls: print(model.names[int(c)]).`,
            `Challenge: Why does YOLO struggle with very small objects compared to Faster R-CNN?\nAns: YOLO's grid is coarse (e.g., 13x13 at stride 32), so small objects may fall into a single grid cell that also covers background. Faster R-CNN's RPN generates dense anchors at multiple scales, catching small objects better. Modern YOLO versions mitigate this with FPN multi-scale detection heads.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task — Object Counting Application:</strong> Load YOLOv8n. Create a synthetic image with 5 shapes (representing objects). Run inference and count how many objects are detected above 0.3 confidence. Print a summary table of class name → count. This is the foundation of a retail footfall counter or traffic counter.`,
          example: {
            title: 'Solution (collapsed) — Object Counting',
            code: `from ultralytics import YOLO
import cv2, numpy as np
from collections import Counter
import matplotlib.pyplot as plt

model = YOLO('yolov8n.pt')

# synthetic "scene" with 5 shapes
img = np.full((480, 640, 3), 80, dtype=np.uint8)
cv2.rectangle(img, (50, 100), (150, 300), (180,80,60), -1)
cv2.rectangle(img, (200, 150), (300, 350), (180,80,60), -1)
cv2.rectangle(img, (400, 100), (500, 300), (60,80,180), -1)
cv2.circle(img, (550, 200), 50, (60,180,60), -1)
cv2.circle(img, (100, 400), 40, (60,180,60), -1)

results = model(img, conf=0.3)
boxes = results[0].boxes
cls_ids = boxes.cls.cpu().numpy().astype(int)
counts = Counter(cls_ids)
print("Object count summary:")
for cid, cnt in sorted(counts.items()):
    print(f"  {model.names[cid]}: {cnt}")
print(f"Total: {len(boxes)} objects")

# draw
annotated = results[0].plot()  # built-in rendering
plt.figure(figsize=(10,6))
plt.imshow(cv2.cvtColor(annotated, cv2.COLOR_BGR2RGB))
plt.title(f'Object counting: {len(boxes)} total')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `Object count summary (on synthetic shapes may be sparse). On a real photo of a street: person: 5, car: 3, traffic light: 2; Total: 10 objects. This is the core of an automated counting system.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'fine-tune-detection': {
      title: 'Fine-Tuning & mAP Evaluation',
      subtitle: 'Fine-tuning a detector on a custom dataset and evaluating with mAP',
      sections: [
        {
          heading: 'What is Fine-Tuning & mAP?',
          text: `Think of a chef trained in French cuisine who needs to cook Japanese food. They don't start from scratch — they adapt their existing skills (fine-tuning). Fine-tuning a detector takes a pre-trained model (trained on COCO's 80 classes) and adapts it to your custom classes (e.g., "defect", "tumour", "licence plate"). mAP (mean Average Precision) is the standard score that tells you how well your detector performs. Curiosity gap: why is mAP not just "accuracy"? Because object detection has <em>two</em> kinds of correctness — the box must be in the right place (IoU) AND the class must be right. mAP combines both.`,
          list: [
            `Fine-tuning: adapt a pre-trained detector to custom classes`,
            `Transfer learning: leverage features learned on COCO/ImageNet`,
            `mAP = mean Average Precision across all classes`,
            `mAP@0.5: IoU threshold 0.5; mAP@0.5:0.95: averaged over IoU 0.5-0.95`,
            `Data format: YOLO (.txt) or COCO (.json) annotations`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Fine-tuning replaces the detection head's output layer (which has 80 COCO classes) with your custom classes (e.g., 3 classes) and re-trains the whole model (or just the head) on your labelled dataset. The backbone retains the features learned on COCO (edges, textures, shapes) — you only need a few hundred to a few thousand annotated images to get strong performance on a narrow domain. YOLOv8 makes this one command: model.train(data='custom.yaml', epochs=100).</p>`,
            `<p>mAP (mean Average Precision) is the standard detection metric. For each class, you compute the precision-recall curve by varying the confidence threshold, then take the area under it (Average Precision, AP). mAP = mean of AP across all classes. mAP@0.5 uses IoU threshold 0.5 (a box is correct if IoU with the ground truth ≥ 0.5). mAP@[0.5:0.95] averages AP over IoU thresholds from 0.5 to 0.95 in steps of 0.05 — this is the stricter COCO standard that rewards precise localisation.</p>`,
            `<p>IoU (Intersection over Union) = area(intersection) / area(union). A prediction is a True Positive if IoU ≥ threshold AND the class is correct; otherwise it's a False Positive. Ground-truth objects not matched are False Negatives. Precision = TP / (TP + FP); Recall = TP / (TP + FN). The AP curve traces the precision-recall trade-off as the confidence threshold varies.</p>`
          ],
          note: `Reference: Lin et al. (2014), <em>Microsoft COCO: Common Objects in Context</em>, ECCV — defines mAP@[0.5:0.95].`
        },
        {
          heading: 'Visual Representation',
          code: `Fine-tuning + mAP evaluation pipeline

  Pre-trained YOLO/Faster-RCNN (COCO, 80 classes)
    |
    v  Replace head with N custom classes
  Custom dataset (annotated: images + bounding boxes)
    |
    v  Train (fine-tune) for 50-200 epochs
  Fine-tuned detector
    |
    v  Run on validation set → predictions
    |
    v  Compare predictions to ground truth (IoU + class)
    |
  mAP computation:
    For each class:
      vary confidence threshold → PR curve → AP = area under PR
    mAP = mean(AP across all classes)
    mAP@0.5      → IoU threshold = 0.5
    mAP@0.5:.95  → average over IoU 0.5,0.55,...,0.95`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'IoU, precision-recall, and AP computation',
            code: `IoU (Intersection over Union):
  IoU = area(A ∩ B) / area(A ∪ B)
  TP if IoU >= threshold AND class correct

Precision = TP / (TP + FP)    (of all detections, how many correct)
Recall    = TP / (TP + FN)    (of all ground truth, how many found)

Average Precision (AP) for one class:
  1. Sort detections by confidence (descending)
  2. For each detection, compute cumulative TP, FP
  3. Plot precision vs recall
  4. AP = area under the PR curve (interpolated)

mAP = mean(AP_c for c in classes)

Worked example — 2 classes, 3 ground truth objects:
  Class A: AP = 0.80
  Class B: AP = 0.60
  mAP = (0.80 + 0.60) / 2 = 0.70

IoU example:
  pred = [10,10,50,50], truth = [30,30,70,70]
  intersection = [30,30,50,50], area = 400
  pred area = 1600, truth area = 1600
  union = 1600 + 1600 - 400 = 2800
  IoU = 400/2800 = 0.143 → below 0.5 → FP

Python (compute mAP with a library):
  # YOLOv8 computes mAP automatically during validation:
  from ultralytics import YOLO
  model = YOLO('best.pt')
  metrics = model.val(data='custom.yaml')
  print(f"mAP@0.5: {metrics.box.map50:.3f}")
  print(f"mAP@0.5:.95: {metrics.box.map:.3f}")`,
            output: `mAP@0.5: 0.823, mAP@0.5:.95: 0.561 — typical for a well-fine-tuned YOLOv8 on a custom dataset. mAP@0.5 is always ≥ mAP@0.5:.95 because the latter averages stricter IoU thresholds.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Fine-tune YOLOv8 on a custom dataset + evaluate mAP',
            code: `# NOTE: requires  pip install ultralytics
# This code shows the COMPLETE fine-tuning + evaluation workflow.

from ultralytics import YOLO
import os

# ---- Step 1: Prepare the dataset ----
# YOLO format: one .txt per image with rows: class x_center y_center w h (normalised)
# Dataset YAML (custom.yaml):
#   path: /data/my_dataset
#   train: images/train
#   val: images/val
#   names:
#     0: defect
#     1: no_defect

# ---- Step 2: Fine-tune (transfer learning) ----
model = YOLO('yolov8n.pt')   # start from pre-trained COCO weights

# Train on custom data (epochs, imgsz, batch are tunable)
results = model.train(
    data='custom.yaml',      # path to your dataset YAML
    epochs=100,
    imgsz=640,
    batch=16,
    device=0,                # GPU
    patience=20,             # early stopping
)
# Best weights saved to runs/detect/train/weights/best.pt

# ---- Step 3: Evaluate on the validation set ----
best = YOLO('runs/detect/train/weights/best.pt')
metrics = best.val(data='custom.yaml')

print(f"mAP@0.5      (mAP50):  {metrics.box.map50:.3f}")
print(f"mAP@0.5:0.95 (mAP):    {metrics.box.map:.3f}")
print(f"Precision:             {metrics.box.mp:.3f}")
print(f"Recall:                {metrics.box.mr:.3f}")
print(f"Per-class AP@0.5:      {metrics.box.ap50}")

# ---- Step 4: Inference on new images ----
results = best('test_image.jpg', conf=0.5)
results[0].show()   # display with boxes

# ---- Step 5: Export for deployment ----
best.export(format='onnx')   # creates best.onnx for TensorRT/OpenVINO`,
            output: `After training: mAP@0.5: 0.85-0.95, mAP@0.5:.95: 0.55-0.70 (typical for a well-annotated custom dataset with a few hundred images). Precision and recall per class show which classes the model handles well.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Collect and annotate images:</strong> WHY — need labelled data; HOW — use LabelImg or CVAT; export in YOLO format (.txt per image).`,
            `<strong>2. Create the dataset YAML:</strong> HOW — define train/val paths and class names.`,
            `<strong>3. Fine-tune from pre-trained weights:</strong> HOW — model = YOLO('yolov8n.pt'); model.train(data='custom.yaml', epochs=100).`,
            `<strong>4. Evaluate mAP on validation:</strong> HOW — metrics = model.val(data='custom.yaml'); read metrics.box.map50 and .map.`,
            `<strong>5. Export and deploy:</strong> HOW — model.export(format='onnx') for TensorRT; or use the .pt directly.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Metric', 'What it measures', 'IoU threshold', 'Range', 'When to use'],
            rows: [
              ['mAP@0.5', 'Detection accuracy (lenient localisation)', '0.5 (fixed)', '0-1', 'PASCAL VOC standard; compare models'],
              ['mAP@0.5:.95', 'Detection accuracy (strict localisation)', '0.5,0.55,...,0.95', '0-1', 'COCO standard; rewards precise boxes'],
              ['Precision', 'Of detections, how many correct', 'n/a', '0-1', 'False positive cost is high (e.g., alarms)'],
              ['Recall', 'Of ground truth, how many found', 'n/a', '0-1', 'False negative cost is high (e.g., safety)'],
              ['F1 score', 'Harmonic mean of P and R', 'n/a', '0-1', 'Balance precision and recall']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Too few annotated images (fix: aim for 100+ per class; use data augmentation if scarce).`,
            `Mistake 2: Inconsistent annotation format (fix: use one tool (CVAT/LabelImg); verify class IDs match the YAML).`,
            `Mistake 3: Evaluating on the training set (fix: always use a separate validation set; mAP on training is meaningless).`,
            `Mistake 4: Reporting only mAP@0.5 (fix: also report mAP@0.5:.95 — the stricter COCO metric that rewards precise boxes).`
          ],
          code: `# WRONG: evaluate on the training set (inflated mAP)
metrics = model.val(data='train.yaml')   # mAP on training = useless

# RIGHT: evaluate on a held-out validation set
metrics = model.val(data='custom.yaml')  # val split
print(f"mAP@0.5:.95: {metrics.box.map:.3f}")`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
      text: `<strong>Roboflow — custom defect detection for manufacturing.</strong> A semiconductor manufacturer partnered with Roboflow to fine-tune YOLOv8 for detecting chip defects on a production line. They annotated 2,500 images of wafer defects (3 classes: crack, scratch, contamination) using Roboflow's labelling tool, then fine-tuned YOLOv8s from COCO weights. After 150 epochs: <strong>mAP@0.5 = 0.91, mAP@0.5:.95 = 0.64</strong> — strong enough for automated quality control. The fine-tuned model runs at 45 FPS on an NVIDIA Jetson, inspecting 100% of wafers (vs 5% sampled manually before). Estimated annual savings: $1.2M in reduced defect escape rate.`,
          list: [
            `Industry: Semiconductor manufacturing`,
            `Dataset: 2,500 annotated wafer images, 3 defect classes`,
            `Model: YOLOv8s fine-tuned from COCO (150 epochs)`,
            `Results: mAP@0.5 = 0.91, mAP@0.5:.95 = 0.64; 45 FPS on Jetson`,
            `Impact: 100% inspection (vs 5% manual); ~$1.2M/yr savings`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Fine-tuning adapts a pre-trained detector to custom classes.`,
            `YOLOv8: model.train(data='custom.yaml', epochs=100) — one line.`,
            `mAP = mean Average Precision across all classes.`,
            `mAP@0.5 is lenient; mAP@0.5:.95 (COCO) is strict — report both.`,
            `IoU = intersection / union; TP if IoU >= threshold AND class correct.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does fine-tuning need fewer images than training from scratch?\nAns: The backbone has already learned general features (edges, textures, shapes) from COCO/ImageNet. Fine-tuning only adapts the detection head and fine-tunes the backbone for your domain — reusing the learned features, so a few hundred images can suffice vs millions for from-scratch.`,
            `Q2 (math): A detector has AP@0.5 of 0.85 for class A, 0.70 for class B, 0.90 for class C. Compute mAP@0.5.\nAns: mAP = (0.85 + 0.70 + 0.90) / 3 = 2.45/3 = 0.817.`,
            `Q3 (coding): Evaluate a fine-tuned YOLOv8 and print mAP@0.5 and mAP@0.5:.95.\nAns: m = YOLO('best.pt'); metrics = m.val(data='custom.yaml'); print(metrics.box.map50, metrics.box.map).`,
            `Challenge: Why is mAP@0.5:.95 always lower than mAP@0.5?\nAns: mAP@0.5:.95 averages AP over 10 IoU thresholds (0.5 to 0.95). At higher IoU thresholds (0.7, 0.9), the box must be much more precisely placed, so AP drops. Averaging in these stricter thresholds lowers the overall mAP compared to the single lenient 0.5 threshold.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Simulate a fine-tuning workflow: download YOLOv8n, create a tiny custom dataset YAML (2 classes), and write the training + evaluation commands. (If you don't have a dataset, write the code and explain each step — the goal is to understand the workflow.) Then write code to compute IoU between a predicted box [20,20,80,80] and a ground-truth box [50,50,100,100] by hand.`,
          example: {
            title: 'Solution (collapsed)',
            code: `from ultralytics import YOLO

# Step 1: Create custom.yaml (write to disk in practice)
yaml_content = """
path: /data/my_dataset
train: images/train
val: images/val
names:
  0: widget
  1: gadget
"""
# with open('custom.yaml', 'w') as f: f.write(yaml_content)

# Step 2: Fine-tune
model = YOLO('yolov8n.pt')
# model.train(data='custom.yaml', epochs=100, imgsz=640, batch=16)

# Step 3: Evaluate
# best = YOLO('runs/detect/train/weights/best.pt')
# metrics = best.val(data='custom.yaml')
# print(f"mAP@0.5: {metrics.box.map50:.3f}, mAP@0.5:.95: {metrics.box.map:.3f}")

# Step 4: Compute IoU by hand
import numpy as np
def iou(boxA, boxB):
    xA = max(boxA[0], boxB[0]); yA = max(boxA[1], boxB[1])
    xB = min(boxA[2], boxB[2]); yB = min(boxA[3], boxB[3])
    inter = max(0, xB-xA) * max(0, yB-yA)
    areaA = (boxA[2]-boxA[0]) * (boxA[3]-boxA[1])
    areaB = (boxB[2]-boxB[0]) * (boxB[3]-boxB[1])
    return inter / (areaA + areaB - inter)

pred = [20, 20, 80, 80]; gt = [50, 50, 100, 100]
print(f"IoU: {iou(pred, gt):.3f}")   # intersection [50,50,80,80]=900; areas=3600+2500; union=5200; IoU=900/5200=0.173`,
            output: `IoU: 0.173 — below 0.5, so this prediction is a False Positive at IoU threshold 0.5. The boxes overlap only partially (intersection = 30x30 = 900 out of union 5200).`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
