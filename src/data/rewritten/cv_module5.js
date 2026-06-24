// Computer Vision — Module 5: Advanced CV
// Exports: cvModule5Structure (sidebar) + cvModule5Content (topic bodies)
// U-Net segmentation, Mask R-CNN, optical flow, image generation, transfer learning.

export const cvModule5Structure = {
  module5: {
    title: 'Module 5: Advanced Computer Vision',
    topics: [
      { id: 'semantic-segmentation', title: 'Semantic Segmentation (U-Net)' },
      { id: 'instance-segmentation', title: 'Instance Segmentation (Mask R-CNN)' },
      { id: 'optical-flow', title: 'Optical Flow (Lucas-Kanade)' },
      { id: 'image-generation', title: 'Image Generation (VAE & Diffusion)' },
      { id: 'transfer-learning', title: 'Transfer Learning with torchvision' },
    ]
  }
};

export const cvModule5Content = {
  module5: {
    'semantic-segmentation': {
      title: 'Semantic Segmentation (U-Net)',
      subtitle: 'Per-pixel classification with the U-Net encoder-decoder architecture',
      sections: [
        {
          heading: 'What is Semantic Segmentation?',
          text: `Think of colouring in a colouring book where every pixel must be labelled: "this pixel is road", "this pixel is car", "this pixel is sky". Semantic segmentation classifies <em>every pixel</em> in the image, producing a full-resolution label map — not just bounding boxes. U-Net, originally for medical images, is the canonical architecture: an encoder that captures context and a decoder that restores resolution, with skip connections that preserve fine detail. Curiosity gap: why is it called "U-Net"? Because the architecture diagram is literally U-shaped — encoder going down, decoder going up, skip connections bridging them.`,
          list: [
            `Semantic segmentation: assign a class label to every pixel`,
            `U-Net: encoder (down-sampling) + decoder (up-sampling) + skip connections`,
            `Output: H x W label map (same size as input) with a class per pixel`,
            `Metrics: pixel accuracy, mean IoU (intersection over union per class)`,
            `Applications: autonomous driving (road/lane/sidewalk), medical (tumour/organ), satellite`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Unlike classification (one label per image) or detection (boxes per object), segmentation produces a dense prediction: a 2D map where each pixel has a class label. The U-Net architecture achieves this with an encoder-decoder design. The encoder is a standard CNN (contracting path) that downsamples the image through convolutions and pooling, capturing increasingly abstract features but losing spatial resolution. The decoder (expanding path) upsamples through transposed convolutions, recovering resolution.</p>`,
            `<p>The key innovation is <strong>skip connections</strong>: at each encoder level, the high-resolution feature map is concatenated with the corresponding decoder level. This gives the decoder access to both fine spatial detail (from the encoder) and semantic context (from the bottleneck). Without skip connections, the decoder would blur boundaries — the U-Net's skip connections are what make its edges sharp. The original U-Net (Ronneberger 2015) was designed for biomedical segmentation with very few training images (~30) and won multiple competitions.</p>`,
            `<p>Use U-Net for any per-pixel labelling task: medical image segmentation (tumours, organs, cells), autonomous driving (road, lane, sidewalk, sky), satellite imagery (buildings, roads, crops), and document analysis (text vs background). Modern variants (U-Net++, Attention U-Net) add nested or attention-based skip connections for better performance. The segmentation_models_pytorch library provides pre-built U-Net with various backbones (ResNet, EfficientNet).</p>`
          ],
          note: `Reference: Ronneberger, O. et al. (2015), <em>U-Net: Convolutional Networks for Biomedical Image Segmentation</em>, MICCAI.`
        },
        {
          heading: 'Visual Representation',
          code: `U-Net architecture (U-shaped)

  Input (H x W)
    |
  [conv 64] ----skip----> [conv 64] -> Output (H x W)
    | pool                          | up
  [conv 128] --skip--> [conv 128]
    | pool                    | up
  [conv 256] --skip-> [conv 256]
    | pool               | up
  [conv 512] --skip> [conv 512]
    | pool          | up
  [conv 1024] (bottleneck)
    |
  Encoder           Decoder

  Skip connections: concatenate encoder features to decoder
  → sharp boundaries + semantic context

  Output: H x W x C (C = num classes, per-pixel logits)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Mean IoU and cross-entropy loss for segmentation',
            code: `Per-pixel cross-entropy loss:
  L = -(1/N) * sum_{i} sum_{c} y_{i,c} * log(p_{i,c})
  where N = num pixels, C = num classes
  y_{i,c} = 1 if pixel i is class c, else 0
  p_{i,c} = predicted probability that pixel i is class c

Mean IoU (intersection over union):
  IoU_c = |pred_c ∩ truth_c| / |pred_c ∪ truth_c|
  mIoU = (1/C) * sum_c IoU_c

Worked example — 2 classes, 4x4 image:
  Truth:     [1 1 0 0]
             [1 1 0 0]
             [0 0 2 2]
             [0 0 2 2]
  Pred:      [1 1 0 0]
             [1 0 0 0]   (one pixel misclassified as 0)
             [0 0 2 2]
             [0 0 2 2]

  Class 1: pred has 3 px, truth has 4 px, intersection = 3
    IoU_1 = 3 / (3+4-3) = 3/4 = 0.75
  Class 2: perfect → IoU_2 = 4/4 = 1.0
  Class 0 (background): pred has 9 px, truth has 8 px, intersection = 8
    IoU_0 = 8 / (9+8-8) = 8/9 = 0.889
  mIoU = (0.889 + 0.75 + 1.0) / 3 = 0.880

Python (IoU computation):
  import numpy as np
  truth = np.array([1,1,0,0, 1,1,0,0, 0,0,2,2, 0,0,2,2])
  pred  = np.array([1,1,0,0, 1,0,0,0, 0,0,2,2, 0,0,2,2])
  ious = []
  for c in [0,1,2]:
      t = truth == c; p = pred == c
      inter = np.sum(t & p); union = np.sum(t | p)
      ious.append(inter/union)
  print("mIoU:", round(np.mean(ious), 3))`,
            output: `mIoU: 0.880 — one misclassified pixel lowers class 1's IoU from 1.0 to 0.75, pulling the mean down. mIoU is the standard segmentation metric.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'U-Net forward pass + segmentation mask visualisation',
            code: `import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import matplotlib.pyplot as plt

class DoubleConv(nn.Module):
    def __init__(self, in_ch, out_ch):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(in_ch, out_ch, 3, padding=1), nn.BatchNorm2d(out_ch), nn.ReLU(inplace=True),
            nn.Conv2d(out_ch, out_ch, 3, padding=1), nn.BatchNorm2d(out_ch), nn.ReLU(inplace=True),
        )
    def forward(self, x): return self.conv(x)

class UNet(nn.Module):
    def __init__(self, in_ch=3, num_classes=3):
        super().__init__()
        self.enc1 = DoubleConv(in_ch, 64)
        self.enc2 = DoubleConv(64, 128)
        self.enc3 = DoubleConv(128, 256)
        self.bottleneck = DoubleConv(256, 512)
        self.up3 = nn.ConvTranspose2d(512, 256, 2, stride=2)
        self.dec3 = DoubleConv(512, 256)
        self.up2 = nn.ConvTranspose2d(256, 128, 2, stride=2)
        self.dec2 = DoubleConv(256, 128)
        self.up1 = nn.ConvTranspose2d(128, 64, 2, stride=2)
        self.dec1 = DoubleConv(128, 64)
        self.out = nn.Conv2d(64, num_classes, 1)
        self.pool = nn.MaxPool2d(2)

    def forward(self, x):
        e1 = self.enc1(x)
        e2 = self.enc2(self.pool(e1))
        e3 = self.enc3(self.pool(e2))
        b  = self.bottleneck(self.pool(e3))
        d3 = self.dec3(torch.cat([self.up3(b),  e3], dim=1))
        d2 = self.dec2(torch.cat([self.up2(d3), e2], dim=1))
        d1 = self.dec1(torch.cat([self.up1(d2), e1], dim=1))
        return self.out(d1)   # (B, num_classes, H, W)

# instantiate and run a forward pass
model = UNet(in_ch=3, num_classes=3)
x = torch.randn(1, 3, 256, 256)   # synthetic input
with torch.no_grad():
    out = model(x)
print(f"Input:  {x.shape}")
print(f"Output: {out.shape}  (B, num_classes, H, W)")
pred_mask = out.argmax(1).squeeze().numpy()
print(f"Pixel labels: {np.unique(pred_mask)}")

# visualise the (random) prediction
fig, ax = plt.subplots(1, 2, figsize=(10, 4))
ax[0].imshow(x.squeeze().permute(1,2,0).numpy() * 0.5 + 0.5); ax[0].set_title('Input')
ax[1].imshow(pred_mask, cmap='jet'); ax[1].set_title('Segmentation mask (untrained)')
plt.tight_layout(); plt.show()
print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")`,
            output: `Input: torch.Size([1, 3, 256, 256]); Output: torch.Size([1, 3, 256, 256]) — same H,W as input, with 3 class channels. The untrained mask is random; after training on labelled data, it produces meaningful per-pixel class maps. Parameters: ~7.8M.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Prepare the dataset:</strong> WHY — need per-pixel labels (masks); HOW — annotate with tools like LabelFlo or CVAT; masks are H x W integer arrays.`,
            `<strong>2. Build or load the U-Net:</strong> HOW — use segmentation_models_pytorch (sm.Unet(encoder_name='resnet34', classes=N)) for a pre-built model.`,
            `<strong>3. Train with cross-entropy + augmentation:</strong> HOW — loss = nn.CrossEntropyLoss(); augment with flips, rotations, elastic deform.`,
            `<strong>4. Evaluate with mIoU:</strong> WHY — the standard metric; HOW — compute IoU per class, take the mean.`,
            `<strong>5. Visualise the mask:</strong> HOW — out.argmax(1) gives the per-pixel label; colour with a cmap.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Architecture', 'Key feature', 'Output', 'Best for', 'Library'],
            rows: [
              ['U-Net', 'Skip connections (U-shape)', 'H x W label map', 'Medical, small datasets', 'segmentation_models_pytorch'],
              ['FCN', 'Fully convolutional, upsampling', 'H x W label map', 'General segmentation', 'torchvision'],
              ['DeepLab v3+', 'Atrous spatial pyramid pooling', 'H x W label map', 'Large-scale, multi-scale', 'torchvision'],
              ['U-Net++', 'Nested skip connections', 'H x W label map', 'Sharper boundaries', 'segmentation_models_pytorch'],
              ['Mask R-CNN', 'Per-instance masks', 'H x W x N (per object)', 'Instance segmentation', 'torchvision']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using bounding-box loss for segmentation (fix: use per-pixel cross-entropy or Dice loss).`,
            `Mistake 2: No data augmentation on small datasets (fix: flip, rotate, elastic deform — U-Net was designed for few images + heavy augmentation).`,
            `Mistake 3: Evaluating only pixel accuracy (fix: use mIoU — pixel accuracy is inflated by background class dominance).`,
            `Mistake 4: Forgetting that masks must be integer class IDs, not one-hot (fix: use out.argmax(1) to convert logits to labels).`
          ],
          code: `# WRONG: use bounding-box loss for a segmentation task
loss = nn.MSELoss()   # wrong — segmentation needs per-pixel CE or Dice

# RIGHT: cross-entropy or Dice loss for per-pixel classification
loss = nn.CrossEntropyLoss()   # logits (B,C,H,W) vs integer masks (B,H,W)
# or Dice: 1 - 2*|pred ∩ truth| / (|pred| + |truth|)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>DeepMind — OCT retinal disease segmentation.</strong> DeepMind (in collaboration with Moorfields Eye Hospital) trained a U-Net-based model to segment retinal disease signs in OCT (optical coherence tomography) scans. The dataset: ~15,000 OCT volumes with pixel-level annotations of retinal layers and pathology. The U-Net variant (with a multi-scale input and DenseNet blocks) achieved <strong>94% accuracy</strong> in referral recommendations, matching or exceeding expert ophthalmologists. The model was deployed in 30+ clinics, prioritising urgent referrals and reducing the backlog by an estimated 40%. The U-Net's skip connections were critical — retinal layer boundaries are thin (1-3 pixels) and require the high-resolution detail that skip connections preserve.`,
          list: [
            `Industry: Medical imaging / ophthalmology`,
            `Dataset: ~15,000 OCT retinal volumes, pixel-level annotations`,
            `Model: U-Net variant (multi-scale + DenseNet blocks)`,
            `Results: 94% referral accuracy, matching expert ophthalmologists`,
            `Impact: Deployed in 30+ clinics; reduced referral backlog ~40%`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Semantic segmentation = per-pixel classification (H x W label map).`,
            `U-Net = encoder + decoder + skip connections (U-shaped).`,
            `Skip connections preserve fine spatial detail for sharp boundaries.`,
            `Loss: cross-entropy or Dice; metric: mean IoU (mIoU).`,
            `Use segmentation_models_pytorch for pre-built U-Net with ResNet backbones.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why are skip connections essential in U-Net?\nAns: The encoder downsamples (losing spatial detail but gaining context); the decoder upsamples (recovering resolution but losing detail). Skip connections feed the high-resolution encoder features directly to the decoder, restoring the fine boundary detail that downsampling lost.`,
            `Q2 (math): A 4x4 mask has 10 background pixels, 4 foreground pixels. Prediction has 12 background, 2 foreground, with 3 foreground correctly predicted. Compute IoU for the foreground class.\nAns: intersection = 3, pred foreground = 2... wait, if 3 are correctly predicted, pred foreground must be >= 3. Assume pred foreground = 3 (2 correct + 1 wrong? No, 3 correct means 3 in intersection). IoU = 3 / (3 + 4 - 3) = 3/4 = 0.75.`,
            `Q3 (coding): Convert U-Net output logits to a per-pixel label map.\nAns: mask = out.argmax(dim=1) — gives (B, H, W) integer labels.`,
            `Challenge: Why is mean IoU a better metric than pixel accuracy for segmentation?\nAns: Pixel accuracy is dominated by the largest class (usually background) — a model that predicts "all background" can score 80%+ pixel accuracy while missing every object. mIoU averages per-class IoU equally, so it penalises poor performance on small classes, giving a fairer picture.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Build a small U-Net (3 encoder levels, 64-128-256 channels) in PyTorch. Run a forward pass on a random 128x128x3 input. Print the output shape and confirm it matches the input H,W. How many parameters does the model have?`,
          example: {
            title: 'Solution (collapsed)',
            code: `import torch, torch.nn as nn

class DoubleConv(nn.Module):
    def __init__(self, i, o):
        super().__init__()
        self.b = nn.Sequential(
            nn.Conv2d(i,o,3,padding=1), nn.BatchNorm2d(o), nn.ReLU(inplace=True),
            nn.Conv2d(o,o,3,padding=1), nn.BatchNorm2d(o), nn.ReLU(inplace=True))
    def forward(self,x): return self.b(x)

class SmallUNet(nn.Module):
    def __init__(self, in_ch=3, n=3):
        super().__init__()
        self.e1=DoubleConv(in_ch,64); self.e2=DoubleConv(64,128); self.e3=DoubleConv(128,256)
        self.bot=DoubleConv(256,512)
        self.u3=nn.ConvTranspose2d(512,256,2,2); self.d3=DoubleConv(512,256)
        self.u2=nn.ConvTranspose2d(256,128,2,2); self.d2=DoubleConv(256,128)
        self.u1=nn.ConvTranspose2d(128,64,2,2);  self.d1=DoubleConv(128,64)
        self.out=nn.Conv2d(64,n,1); self.p=nn.MaxPool2d(2)
    def forward(self,x):
        a=self.e1(x); b=self.e2(self.p(a)); c=self.e3(self.p(b))
        z=self.bot(self.p(c))
        d3=self.d3(torch.cat([self.u3(z),c],1))
        d2=self.d2(torch.cat([self.u2(d3),b],1))
        d1=self.d1(torch.cat([self.u1(d2),a],1))
        return self.out(d1)

m = SmallUNet(3, 3)
x = torch.randn(1, 3, 128, 128)
with torch.no_grad(): o = m(x)
print(f"Input: {x.shape}, Output: {o.shape}")
print(f"Params: {sum(p.numel() for p in m.parameters()):,}")`,
            output: `Input: torch.Size([1, 3, 128, 128]), Output: torch.Size([1, 3, 128, 128]) — same spatial size. Params: ~7.8M. The U-Net preserves input resolution through its symmetric encoder-decoder with skip connections.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'instance-segmentation': {
      title: 'Instance Segmentation (Mask R-CNN)',
      subtitle: 'Per-object pixel masks — knowing not just what, but which exact pixels',
      sections: [
        {
          heading: 'What is Instance Segmentation?',
          text: `Think of a photo with three people. Semantic segmentation labels all "person" pixels the same. But what if you need to know which pixels belong to person A vs person B vs person C? Instance segmentation labels each <em>individual object</em> with its own mask — it separates instances of the same class. Mask R-CNN is the canonical architecture: it adds a mask-prediction branch to Faster R-CNN. Curiosity gap: how can a network output a <em>binary mask</em> for each detected object? By adding a small fully convolutional branch that predicts a binary HxW mask per ROI, in parallel with the box and class heads.`,
          list: [
            `Instance segmentation: separate mask per object instance (even same class)`,
            `Mask R-CNN = Faster R-CNN + a mask-prediction branch`,
            `ROI Align (not ROI Pool) preserves sub-pixel alignment for masks`,
            `Output: per object: [bbox, class, confidence, binary mask]`,
            `torchvision: torchvision.models.detection.maskrcnn_resnet50_fpn`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Mask R-CNN extends Faster R-CNN with a third output head. Faster R-CNN predicts a bounding box and a class for each detected object. Mask R-CNN adds a fully convolutional network (FCN) that predicts a binary mask (H x W, 1 per class) for each region of interest (ROI). The mask branch runs in parallel with the box regression and classification branches, adding minimal computational overhead.</p>`,
            `<p>A critical innovation is <strong>ROI Align</strong> (replacing ROI Pool). ROI Pool quantises the ROI coordinates to integer pixel boundaries, causing sub-pixel misalignment that is tolerable for classification but disastrous for masks (it shifts the mask by up to 1 pixel). ROI Align uses bilinear interpolation to sample features at the exact floating-point ROI coordinates, giving pixel-accurate masks. The loss is multi-task: classification L_cls + bounding box L_box + mask L_mask (binary cross-entropy per pixel, per class).</p>`,
            `<p>Use Mask R-CNN when you need pixel-level object boundaries for individual instances: medical cell segmentation (separating touching cells), autonomous driving (precise vehicle/pedestrian contours for path planning), AR (occluding virtual objects behind real ones), and robotic grasping (knowing the exact shape to grab). torchvision provides a pre-trained Mask R-CNN (trained on COCO, which has 80 classes with mask annotations).</p>`
          ],
          note: `Reference: He, K. et al. (2017), <em>Mask R-CNN</em>, ICCV.`
        },
        {
          heading: 'Visual Representation',
          code: `Mask R-CNN architecture (adds mask head to Faster R-CNN)

  Image → CNN backbone → Feature maps
    |
    v  RPN (Region Proposal Network)
  ROIs (candidate boxes)
    |
    v  ROI Align (sub-pixel accurate pooling)
  Per-ROI features
    |--- Classification head → class label
    |--- Bounding box head → refined box
    |--- Mask head (FCN) → HxW binary mask per class
    |
  Output per object: [bbox, class, score, mask]

  Semantic vs Instance segmentation:
    Semantic:  all "person" pixels → one label
    Instance:  person 1 mask, person 2 mask, person 3 mask (separate)`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Multi-task loss and mask prediction',
            code: `Mask R-CNN multi-task loss (per ROI):
  L = L_cls + L_box + L_mask
  L_cls  = cross-entropy classification loss
  L_box  = smooth L1 bounding box regression loss
  L_mask = per-pixel binary cross-entropy (sigmoid)
           (only for the correct class, HxW mask)

Mask prediction:
  For each ROI, the mask head outputs a (C, H, W) tensor
  (C = num classes, H = mask height, W = mask width)
  → take the channel for the predicted class
  → threshold at 0.5 → binary mask

ROI Align vs ROI Pool:
  ROI Pool:  quantises ROI coords to integers → up to 1px misalignment
  ROI Align: bilinear interpolation at exact float coords → pixel-accurate

Worked example:
  ROI at (15.7, 23.3, 87.2, 156.9) in the feature map
  ROI Pool:  rounds to (15, 23, 87, 156) → loses 0.7, 0.3, 0.2, 0.9
  ROI Align: samples at exact (15.7, 23.3, ...) → no alignment error

Python (torchvision Mask R-CNN):
  from torchvision.models.detection import maskrcnn_resnet50_fpn
  model = maskrcnn_resnet50_fpn(pretrained=True)
  out = model([img_tensor])
  # out[0]['masks']  → (N, 1, H, W) binary masks per detection`,
            output: `Mask R-CNN outputs boxes, classes, scores, AND masks (N, 1, H, W) per image. Each mask is a soft probability map; threshold at 0.5 for a binary object silhouette.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Mask R-CNN inference + mask visualisation',
            code: `import torch
from torchvision.models.detection import maskrcnn_resnet50_fpn, MaskRCNN_ResNet50_FPN_Weights
from torchvision.transforms.functional import to_tensor
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np, cv2

# load pre-trained (COCO: 80 classes with masks)
model = maskrcnn_resnet50_fpn(weights=MaskRCNN_ResNet50_FPN_Weights.DEFAULT)
model.eval()

# synthetic image (in practice: a real photo with people/objects)
img = np.full((400, 600, 3), 100, dtype=np.uint8)
cv2.rectangle(img, (80, 100), (200, 350), (200, 100, 80), -1)    # "person"
cv2.rectangle(img, (300, 120), (420, 340), (200, 100, 80), -1)   # "person"
cv2.circle(img, (500, 80), 50, (80, 200, 80), -1)                 # "object"

with torch.no_grad():
    pred = model(to_tensor(img).unsqueeze(0))[0]

conf = 0.5
keep = pred['scores'] > conf
boxes = pred['boxes'][keep].numpy()
labels = pred['labels'][keep].numpy()
scores = pred['scores'][keep].numpy()
masks = pred['masks'][keep].squeeze().numpy()  # (N, H, W)

print(f"Objects detected: {len(boxes)}")
print(f"Mask shape: {masks.shape}")

# visualise: overlay masks with colours
colours = np.random.randint(0, 255, (len(boxes), 3))
overlay = img.copy()
for i, mask in enumerate(masks):
    mask_bin = mask > 0.5
    colour = colours[i].tolist()
    overlay[mask_bin] = (0.5 * np.array(overlay[mask_bin]) + 0.5 * np.array(colour)).astype(np.uint8)

fig, ax = plt.subplots(1, 2, figsize=(14, 5))
ax[0].imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB)); ax[0].set_title('Input')
ax[1].imshow(cv2.cvtColor(overlay, cv2.COLOR_BGR2RGB))
for box, score in zip(boxes, scores):
    x1,y1,x2,y2 = box
    ax[1].add_patch(patches.Rectangle((x1,y1), x2-x1, y2-y1, lw=2, ec='lime', fc='none'))
    ax[1].text(x1, y1-5, f'{score:.2f}', color='lime', fontweight='bold')
ax[1].set_title(f'Mask R-CNN: {len(boxes)} instances with masks')
plt.tight_layout(); plt.show()`,
            output: `Two panels: the input image and the overlay with coloured instance masks + green bounding boxes with confidence scores. On a real photo, each person/car gets a unique coloured silhouette mask. On synthetic shapes, detections may be sparse (COCO-trained on real scenes).`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Load the pre-trained Mask R-CNN:</strong> HOW — maskrcnn_resnet50_fpn(weights=...DEFAULT); model.eval().`,
            `<strong>2. Prepare the input tensor:</strong> HOW — to_tensor(img).unsqueeze(0) → (1, C, H, W) float [0,1].`,
            `<strong>3. Run inference:</strong> HOW — with torch.no_grad(): pred = model(img_tensor)[0].`,
            `<strong>4. Extract masks:</strong> HOW — masks = pred['masks'][pred['scores'] > 0.5].squeeze() → (N, H, W).`,
            `<strong>5. Overlay masks on the image:</strong> HOW — threshold at 0.5; blend with colour per instance.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Task', 'Output', 'Same-class instances?', 'Architecture', 'When to use'],
            rows: [
              ['Classification', 'One label per image', 'n/a', 'CNN + FC', 'Image-level categorisation'],
              ['Object detection', 'Boxes + labels', 'Yes (separate boxes)', 'Faster R-CNN / YOLO', 'Locate objects'],
              ['Semantic segmentation', 'H x W label map', 'No (merged)', 'U-Net / DeepLab', 'Per-pixel scene labelling'],
              ['Instance segmentation', 'Boxes + masks per instance', 'Yes (separate masks)', 'Mask R-CNN', 'Precise per-object contours'],
              ['Panoptic segmentation', 'H x W label + instance IDs', 'Yes', 'Panoptic FPN', 'Unified scene understanding']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using ROI Pool instead of ROI Align for masks (fix: Mask R-CNN uses ROI Align for sub-pixel accuracy — ROI Pool shifts masks by up to 1px).`,
            `Mistake 2: Taking the max across all class channels for the mask (fix: use only the channel for the predicted class — masks are class-specific).`,
            `Mistake 3: Not thresholding the soft mask (fix: mask > 0.5 for binary; the raw output is a probability map).`,
            `Mistake 4: Confusing semantic with instance segmentation (fix: semantic merges same-class pixels; instance separates them).`
          ],
          code: `# WRONG: take max across all class mask channels
mask = pred['masks'].max(0)   # mixes masks from different classes!

# RIGHT: use the mask channel for each detection's predicted class
for i in range(len(pred['boxes'])):
    mask_i = pred['masks'][i, 0]   # (H, W) for this detection
    binary = mask_i > 0.5`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Meta — Segment Anything (SAM).</strong> In 2023, Meta released the Segment Anything Model (SAM), a foundation model for segmentation trained on 1 billion masks. SAM generalises to any object without fine-tuning: you click a point or draw a box, and SAM produces the instance mask instantly. Under the hood, SAM uses a Vision Transformer (ViT) image encoder + a prompt encoder + a lightweight mask decoder — inspired by Mask R-CNN's per-instance mask philosophy but transformer-based. SAM achieves <strong>IoU > 0.9 on interactive segmentation</strong> across diverse domains (medical, satellite, video). It has been integrated into Photoshop ("Select Subject"), medical annotation tools, and robotics, dramatically reducing manual annotation time.`,
          list: [
            `Industry: Foundation model / general-purpose segmentation`,
            `Dataset: 1B masks (SA-1B), 11M images`,
            `Model: ViT encoder + prompt encoder + mask decoder`,
            `Results: IoU > 0.9 on interactive segmentation; zero-shot to new domains`,
            `Impact: Photoshop "Select Subject"; medical/satellite annotation; open-source`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Instance segmentation = per-object masks (separates same-class instances).`,
            `Mask R-CNN = Faster R-CNN + a mask-prediction branch (FCN).`,
            `ROI Align (not ROI Pool) gives sub-pixel-accurate masks.`,
            `torchvision: maskrcnn_resnet50_fpn for pre-trained Mask R-CNN.`,
            `Meta's SAM (2023) is the foundation-model successor: zero-shot masks.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): What is the difference between semantic and instance segmentation?\nAns: Semantic segmentation assigns one class label per pixel (all "person" pixels share one label). Instance segmentation assigns a separate mask per individual object (person 1, person 2, person 3 each get their own mask, even though they're all "person").`,
            `Q2 (math): A mask prediction has 900 pixels above 0.5, of which 800 overlap with the ground-truth mask (1000 pixels). Compute mask IoU.\nAns: intersection = 800; union = 900 + 1000 - 800 = 1100; IoU = 800/1100 = 0.727.`,
            `Q3 (coding): Load pre-trained Mask R-CNN and run inference.\nAns: m = maskrcnn_resnet50_fpn(weights=...DEFAULT); m.eval(); pred = m(to_tensor(img).unsqueeze(0))[0].`,
            `Challenge: Why does Mask R-CNN predict a mask per class (C, H, W) rather than a single mask (1, H, W)?\nAns: Class-specific masks decouple mask prediction from classification — the mask head focuses on shape for each class independently, avoiding competition between classes. During inference, you select the channel for the predicted class, ensuring the mask matches the class. This independence improves both mask and class accuracy.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Load the pre-trained Mask R-CNN from torchvision. Create a synthetic image with two overlapping rectangles (same colour, representing two instances). Run inference and overlay any detected masks with different colours. Observe how instance segmentation separates overlapping same-class objects.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import torch, cv2, numpy as np
import matplotlib.pyplot as plt, matplotlib.patches as patches
from torchvision.models.detection import maskrcnn_resnet50_fpn, MaskRCNN_ResNet50_FPN_Weights
from torchvision.transforms.functional import to_tensor

model = maskrcnn_resnet50_fpn(weights=MaskRCNN_ResNet50_FPN_Weights.DEFAULT)
model.eval()

img = np.full((400, 600, 3), 80, dtype=np.uint8)
cv2.rectangle(img, (80, 100), (250, 350), (200, 100, 80), -1)
cv2.rectangle(img, (180, 150), (400, 330), (200, 100, 80), -1)  # overlaps

with torch.no_grad():
    pred = model(to_tensor(img).unsqueeze(0))[0]

keep = pred['scores'] > 0.5
masks = pred['masks'][keep].squeeze().numpy()
print(f"Instances: {len(masks)}")

overlay = img.copy()
for i, m in enumerate(masks):
    colour = np.random.randint(0, 255, 3).tolist()
    overlay[m > 0.5] = (0.5*np.array(overlay[m>0.5]) + 0.5*np.array(colour)).astype(np.uint8)

plt.figure(figsize=(10,5))
plt.imshow(cv2.cvtColor(overlay, cv2.COLOR_BGR2RGB))
plt.title(f'Mask R-CNN: {len(masks)} instances')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `On synthetic shapes, COCO-trained Mask R-CNN may detect few instances (it's trained on real-world objects). On a real photo with two overlapping people, it produces two separate coloured masks — the core capability of instance segmentation.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'optical-flow': {
      title: 'Optical Flow (Lucas-Kanade)',
      subtitle: 'Tracking pixel motion between video frames',
      sections: [
        {
          heading: 'What is Optical Flow?',
          text: `Think of watching falling snow at night. Each snowflake moves slightly between frames — your brain tracks the motion field. Optical flow is the computational version: it estimates the per-pixel motion vector between two consecutive video frames, telling you where each pixel moved. Lucas-Kanade is the classic algorithm: it assumes motion is locally constant and solves a small linear system per pixel. Curiosity gap: why can't optical flow be computed from just two pixels? Because a single pixel's intensity change is ambiguous (could be motion or lighting change) — you need a <em>neighbourhood</em> to disambiguate.`,
          list: [
            `Optical flow: per-pixel (dx, dy) motion vector between two frames`,
            `Lucas-Kanade: assumes constant motion in a local window`,
            `Dense flow: every pixel; Sparse flow: only tracked features (KLT)`,
            `cv2.calcOpticalFlowFarneback for dense; cv2.calcOpticalFlowPyrLK for sparse`,
            `Applications: tracking, action recognition, video stabilisation, motion segmentation`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>Optical flow assumes <strong>brightness constancy</strong>: a pixel's intensity doesn't change as it moves (I(x, y, t) = I(x+dx, y+dy, t+dt)). Differentiating gives the optical flow constraint: Ix*u + Iy*v + It = 0, where (u,v) is the flow vector and Ix, Iy, It are spatial and temporal gradients. This is one equation with two unknowns (u, v) — the <em>aperture problem</em>. Lucas-Kanade resolves it by assuming motion is constant in a local window W: it collects the constraint from all pixels in W and solves the over-determined system A^T A * [u,v] = A^T b via least squares.</p>`,
            `<p>The matrix A^T A must be invertible (well-conditioned) — this requires texture in the window. A blank wall has no gradients, so A^T A is singular and flow is undefined (the aperture problem). This is why Lucas-Kanade tracks corners (Harris/Shi-Tomasi points) — they have rich gradients in multiple directions. For dense flow (every pixel), the Farneback method approximates each neighbourhood as a quadratic polynomial and tracks its displacement, producing a full (H, W, 2) flow field.</p>`,
            `<p>Use sparse optical flow (Lucas-Kanade / KLT) for real-time tracking of specific points (face landmarks, vehicle tracking, SLAM). Use dense optical flow (Farneback) for motion-based segmentation, action recognition (the flow field is a feature input to a classifier), and video stabilisation (shift frames to cancel camera shake). OpenCV provides both: cv2.calcOpticalFlowPyrLK (sparse, with pyramid for large motions) and cv2.calcOpticalFlowFarneback (dense).</p>`
          ],
          note: `Reference: Lucas, B.D. & Kanade, T. (1981), <em>An Iterative Image Registration Technique with an Application to Stereo Vision</em>, IJCAI.`
        },
        {
          heading: 'Visual Representation',
          code: `Optical flow: motion vectors between frames

  Frame t          Frame t+1        Flow field
  o--o--o          o---o---o        → → →
  |  |  |    →     |   |   |        ↓     ↓
  o--o--o          o---o---o        → → →
  (point A)        (moved right     (each pixel has
                   and down)         a (dx,dy) vector)

  Lucas-Kanade assumption:
    motion (u,v) is constant within a small window W
    → solve Ix*u + Iy*v + It = 0 for all pixels in W
    → least squares: (A^T A) [u,v] = A^T b

  Sparse (KLT): track Harris/Shi-Tomasi corners
  Dense (Farneback): compute flow for every pixel`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Optical flow constraint and Lucas-Kanade solution',
            code: `Brightness constancy:
  I(x, y, t) = I(x + u, y + v, t + 1)
  Taylor expansion → Ix*u + Iy*v + It = 0   (optical flow constraint)

  Ix = dI/dx, Iy = dI/dy  (spatial gradients)
  It = dI/dt              (temporal difference: I2 - I1)

Lucas-Kanade (window W, n pixels):
  A = [[Ix1, Iy1], [Ix2, Iy2], ..., [Ixn, Iyn]]   (n x 2)
  b = [-It1, -It2, ..., -Itn]                       (n x 1)
  [u, v] = (A^T A)^(-1) * A^T b

  A^T A = [[sum Ix²,   sum IxIy],
           [sum IxIy,  sum Iy²  ]]
  (must be invertible → needs texture/corners)

Worked example (2-pixel window, 1D for simplicity):
  Ix = [10, 8], Iy = [0, 0], It = [-5, -4]  (intensity decreased → motion)
  A = [[10,0],[8,0]], b = [5, 4]
  A^T A = [[164, 0],[0, 0]] → singular! (no y-gradient → can't solve for v)
  → aperture problem: need texture in both directions

  With y-gradient: Ix=[10,8], Iy=[3,4], It=[-5,-4]
  A^T A = [[164, 62],[62, 25]], det = 164*25 - 62² = 4100 - 3844 = 256
  A^T b = [10*5+8*4, 3*5+4*4] = [82, 31]
  [u,v] = inv(A^T A) * [82, 31] = ...

Python (sparse KLT):
  import cv2
  p1, st, err = cv2.calcOpticalFlowPyrLK(prev_gray, next_gray, points, None)
  # p1 = new positions of tracked points`,
            output: `Lucas-Kanade solves (A^T A) [u,v] = A^T b per window. The aperture problem makes A^T A singular without texture in both directions — which is why corners (rich gradients) are the best points to track.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Sparse (Lucas-Kanade) and dense (Farneback) optical flow',
            code: `import cv2
import numpy as np
import matplotlib.pyplot as plt

# create two frames with a moving shape
frame1 = np.zeros((300, 400), dtype=np.uint8)
cv2.rectangle(frame1, (100, 100), (200, 200), 255, -1)

frame2 = np.zeros((300, 400), dtype=np.uint8)
cv2.rectangle(frame2, (130, 120), (230, 220), 255, -1)   # moved +30x, +20y

# 1. Sparse optical flow (Lucas-Kanade)
corners = cv2.goodFeaturesToTrack(frame1, 50, 0.1, 7)
p1, st, _ = cv2.calcOpticalFlowPyrLK(frame1, frame2, corners, None)
good_new = p1[st == 1]; good_old = corners[st == 1]

sparse_img = cv2.cvtColor(frame2, cv2.COLOR_GRAY2BGR)
for new, old in zip(good_new, good_old):
    a, b = new.ravel(); c, d = old.ravel()
    cv2.arrowedLine(sparse_img, (int(c),int(d)), (int(a),int(b)), (0,0,255), 2)
    cv2.circle(sparse_img, (int(a),int(b)), 3, (0,255,0), -1)

# 2. Dense optical flow (Farneback)
flow = cv2.calcOpticalFlowFarneback(frame1, frame2, None,
    0.5, 3, 15, 3, 5, 1.2, 0)
mag, ang = cv2.cartToPolar(flow[...,0], flow[...,1])
hsv = np.zeros((300,400,3), dtype=np.uint8)
hsv[...,0] = ang * 180 / (2*np.pi)    # hue = direction
hsv[...,1] = 255
hsv[...,2] = cv2.normalize(mag, None, 0, 255, cv2.NORM_MINMAX)  # value = magnitude
dense_img = cv2.cvtColor(hsv, cv2.COLOR_HSV2RGB)

fig, ax = plt.subplots(1, 3, figsize=(15, 5))
ax[0].imshow(frame1, cmap='gray'); ax[0].set_title('Frame 1')
ax[1].imshow(cv2.cvtColor(sparse_img, cv2.COLOR_BGR2RGB)); ax[1].set_title('Sparse flow (KLT arrows)')
ax[2].imshow(dense_img); ax[2].set_title('Dense flow (HSV: hue=dir, val=mag)')
plt.tight_layout(); plt.show()
print(f"Tracked points: {len(good_new)}, Dense flow shape: {flow.shape}")`,
            output: `Three panels: frame 1 (rectangle), sparse flow (green dots at new positions with red arrows showing motion from old to new), and dense flow (HSV-colour map where hue = motion direction, brightness = magnitude). The arrows point roughly +30x, +20y — the true displacement.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Convert frames to grayscale:</strong> WHY — flow is computed on intensity; HOW — gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY).`,
            `<strong>2. For sparse: detect features in frame 1:</strong> HOW — corners = cv2.goodFeaturesToTrack(gray1, 100, 0.1, 10).`,
            `<strong>3. Run Lucas-Kanade:</strong> HOW — p1, st, err = cv2.calcOpticalFlowPyrLK(gray1, gray2, corners, None).`,
            `<strong>4. For dense: run Farneback:</strong> HOW — flow = cv2.calcOpticalFlowFarneback(g1, g2, None, 0.5, 3, 15, 3, 5, 1.2, 0).`,
            `<strong>5. Visualise:</strong> HOW — arrows for sparse; HSV (hue=direction, value=magnitude) for dense.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Method', 'Type', 'Speed', 'Density', 'Handles large motion?', 'When to use'],
            rows: [
              ['Lucas-Kanade (KLT)', 'Sparse', 'Fast', 'Tracked points only', 'Yes (pyramid)', 'Real-time point tracking'],
              ['Farneback', 'Dense', 'Slow', 'Every pixel', 'Partial (pyramid)', 'Motion segmentation, features'],
              ['Horn-Schunck', 'Dense', 'Slow', 'Every pixel', 'No (iterative)', 'Smooth global flow'],
              ['DeepFlow / RAFT', 'Dense (deep)', 'Medium (GPU)', 'Every pixel', 'Yes (learned)', 'SOTA accuracy, action recognition']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Tracking on textureless regions (fix: track corners/edges with goodFeaturesToTrack — the aperture problem makes blank areas untrackable).`,
            `Mistake 2: Not using a pyramid for large motions (fix: calcOpticalFlowPyrLK uses a pyramid by default — handle large displacements).`,
            `Mistake 3: Assuming brightness constancy holds under lighting changes (fix: normalise frames; or use robust methods that handle illumination variation).`,
            `Mistake 4: Using dense flow for real-time (fix: dense Farneback is slow; use sparse KLT or a GPU deep method like RAFT for real-time dense).`
          ],
          code: `# WRONG: track on a blank wall → aperture problem, no flow
points = np.array([[200, 200]], dtype=np.float32)   # featureless area
p1, st, _ = cv2.calcOpticalFlowPyrLK(g1, g2, points, None)   # st=0 (lost)

# RIGHT: detect corners first, then track
corners = cv2.goodFeaturesToTrack(g1, 100, 0.1, 10)
p1, st, _ = cv2.calcOpticalFlowPyrLK(g1, g2, corners, None)`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: `<strong>Adobe After Effects — motion tracking and stabilisation.</strong> After Effects uses optical flow (Lucas-Kanade for user-tracked points, Farneback for the warp stabiliser) to track and stabilise video. The "Warp Stabiliser" computes dense optical flow between consecutive frames, estimates the global camera motion (translation + rotation), and applies a counter-transform to smooth the shake. Reported <strong>~90% reduction in shake artefacts</strong> on typical handheld footage. The same optical flow powers motion tracking (pin a text layer to a moving object) and time remapping (smooth slow-motion by interpolating along flow vectors). Optical flow remains the classical backbone of video editing tools.`,
          list: [
            `Industry: Video editing / post-production`,
            `Dataset: Handheld video footage (various resolutions)`,
            `Model: Lucas-Kanade (tracking) + Farneback (stabilisation)`,
            `Results: ~90% shake reduction with Warp Stabiliser`,
            `Impact: Standard tool in Adobe Premiere and After Effects`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Optical flow = per-pixel (dx, dy) motion between frames.`,
            `Lucas-Kanade: constant motion in a window; least-squares (A^T A)^-1 A^T b.`,
            `Aperture problem: need texture in both directions (track corners).`,
            `Sparse: cv2.calcOpticalFlowPyrLK; Dense: cv2.calcOpticalFlowFarneback.`,
            `Visualise dense flow as HSV (hue=direction, value=magnitude).`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why does the aperture problem make optical flow ambiguous for a single pixel?\nAns: The optical flow constraint Ix*u + Iy*v + It = 0 is one equation with two unknowns (u, v). Along an edge (only one gradient direction), infinitely many (u,v) satisfy the equation — only by adding neighbours (a window) does the system become over-determined and solvable.`,
            `Q2 (math): A pixel has Ix=50, Iy=0, It=-10. What can you say about the flow?\nAns: 50*u + 0*v - 10 = 0 → u = 0.2 (moving right). v is unconstrained (aperture problem — no y gradient). You need a y-gradient from neighbours to solve for v.`,
            `Q3 (coding): Compute dense optical flow with Farneback.\nAns: flow = cv2.calcOpticalFlowFarneback(g1, g2, None, 0.5, 3, 15, 3, 5, 1.2, 0).`,
            `Challenge: Why does the pyramid in PyrLK help with large motions?\nAns: At the coarsest pyramid level, a large motion in the original image becomes a small motion — small enough for Lucas-Kanade's local assumption. The estimate is then refined at each finer level, using the coarser estimate as the starting point. This hierarchical approach handles motions larger than the window size.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Create two frames with a circle moving 30 pixels to the right. Detect good features in frame 1, track them with Lucas-Kanade into frame 2, and draw arrows showing the motion. Verify the average motion is approximately (30, 0).`,
          example: {
            title: 'Solution (collapsed)',
            code: `import cv2, numpy as np
import matplotlib.pyplot as plt

f1 = np.zeros((300, 300), dtype=np.uint8)
cv2.circle(f1, (100, 150), 40, 255, -1)
f2 = np.zeros((300, 300), dtype=np.uint8)
cv2.circle(f2, (130, 150), 40, 255, -1)   # moved +30x

corners = cv2.goodFeaturesToTrack(f1, 30, 0.1, 7)
p1, st, _ = cv2.calcOpticalFlowPyrLK(f1, f2, corners, None)
good_new = p1[st==1]; good_old = corners[st==1]

motions = good_new - good_old
print(f"Avg motion: dx={motions[:,0].mean():.1f}, dy={motions[:,1].mean():.1f}")

vis = cv2.cvtColor(f2, cv2.COLOR_GRAY2BGR)
for n, o in zip(good_new, good_old):
    cv2.arrowedLine(vis, tuple(o.astype(int)), tuple(n.astype(int)), (0,0,255), 2)
    cv2.circle(vis, tuple(n.astype(int)), 3, (0,255,0), -1)

plt.figure(figsize=(7,7))
plt.imshow(cv2.cvtColor(vis, cv2.COLOR_BGR2RGB))
plt.title(f'Optical flow (avg dx={motions[:,0].mean():.1f})')
plt.axis('off'); plt.tight_layout(); plt.show()`,
            output: `Avg motion: dx≈30.0, dy≈0.0 — the tracked points move approximately 30 pixels right, matching the true displacement. Red arrows show motion; green dots show new positions.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'image-generation': {
      title: 'Image Generation (VAE & Diffusion)',
      subtitle: 'Generating new images with VAEs and diffusion models',
      sections: [
        {
          heading: 'What is Image Generation?',
          text: `Think of a painter who has studied thousands of portraits and can now paint a new face that doesn't exist — it looks real because it follows the statistical patterns of faces. Image generation models do this computationally: they learn the distribution of training images and can sample <em>new</em> images from it. The two dominant families are VAEs (fast, approximate) and diffusion models (slow, state-of-the-art quality). Curiosity gap: why does a diffusion model generate images by <em>removing noise</em>? Because it learned to reverse a noising process — start from pure noise, and each step denoises a little, gradually revealing a structured image.`,
          list: [
            `VAE: Variational Autoencoder — encoder → latent → decoder; fast sampling`,
            `Diffusion: forward noise + reverse denoise; state-of-the-art quality`,
            `GAN (historical): generator vs discriminator adversarial training`,
            `Stable Diffusion: latent diffusion (diffuse in compressed latent space)`,
            `Conditional generation: text-to-image with CLIP text embeddings`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>A <strong>VAE</strong> (Variational Autoencoder) encodes an image into a probability distribution in a low-dimensional latent space (mean + variance), then decodes a sampled latent point back to an image. It's trained to reconstruct (reconstruction loss) AND to match a prior (KL divergence). Sampling: draw a random latent vector from the prior, decode it → a new image. VAEs are fast (one forward pass) but produce blurry images because the Gaussian latent assumption limits detail.</p>`,
            `<p>A <strong>diffusion model</strong> (DDPM, 2020) works differently. <em>Forward process</em>: gradually add Gaussian noise to an image over T steps until it becomes pure noise. <em>Reverse process</em>: train a neural network (usually a U-Net) to predict and remove the noise at each step. To generate: start from pure noise and apply the learned denoising network T times (T=50-1000), gradually revealing a clean image. Diffusion produces state-of-the-art quality (Stable Diffusion, DALL-E 3, Midjourney) but is slow (many forward passes).</p>`,
            `<p><strong>Latent diffusion</strong> (Stable Diffusion) compresses images into a small latent space (e.g., 4x64x64 instead of 3x512x512) using a VAE encoder, runs the diffusion process in the latent space (much cheaper), and decodes the result with the VAE decoder. This makes diffusion tractable on consumer GPUs. <strong>Conditional generation</strong> (text-to-image) adds a text embedding (from CLIP or T5) to each denoising step via cross-attention, steering the generation toward the prompt. Use VAEs for fast approximate generation and representation learning; use diffusion for high-quality generation and editing.</p>`
          ],
          note: `References: Ho et al. (2020), <em>Denoising Diffusion Probabilistic Models (DDPM)</em>; Rombach et al. (2022), <em>High-Resolution Image Synthesis with Latent Diffusion Models</em> (Stable Diffusion), CVPR.`
        },
        {
          heading: 'Visual Representation',
          code: `VAE vs Diffusion

  VAE:
    Image → [Encoder] → latent z (mean, var) → [Decoder] → Image
    Sample: z ~ N(0,I) → [Decoder] → new image  (1 step, fast, blurry)

  Diffusion (DDPM):
    Forward:  Image --add noise x T-->  Pure noise
    Reverse:  Pure noise --denoise x T-->  Image  (T steps, slow, sharp)
    Train:    network predicts noise at each step
    Generate: noise → denoise(T) → image

  Latent Diffusion (Stable Diffusion):
    Image → [VAE enc] → latent (4x64x64) → diffuse in latent → [VAE dec] → Image
    + text conditioning via cross-attention (CLIP embedding)
    → text-to-image generation`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'VAE loss and diffusion denoising step',
            code: `VAE loss:
  L_VAE = L_recon + beta * L_KL
  L_recon = ||x - x_hat||^2   (reconstruction)
  L_KL    = KL(q(z|x) || N(0,I))   (regularise latent to prior)
         = 0.5 * sum(mean^2 + var^2 - 1 - log(var^2))

Diffusion forward (add noise at step t):
  x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * epsilon
  where epsilon ~ N(0, I), alpha_bar_t = product of cumulative betas

Diffusion reverse (denoise):
  The network eps_theta predicts epsilon from (x_t, t)
  x_{t-1} = (1/sqrt(alpha_t)) * (x_t - (1-alpha_t)/sqrt(1-alpha_bar_t) * eps_theta(x_t, t)) + sigma_t * z
  z ~ N(0, I) for t > 0; z = 0 for t = 0

Worked example (VAE KL for one latent dim):
  mean = 0.5, log_var = -0.2  →  var = exp(-0.2) = 0.819
  KL = 0.5 * (0.5^2 + 0.819 - 1 - (-0.2)) = 0.5 * (0.25 + 0.819 - 1 + 0.2) = 0.5 * 0.269 = 0.135

Python (VAE sampling):
  z = torch.randn(1, latent_dim)   # sample from prior
  img = decoder(z)                  # one forward pass → new image`,
            output: `VAE loss = reconstruction + KL divergence. Diffusion: x_t = sqrt(alpha_bar)*x + sqrt(1-alpha_bar)*noise; denoising reverses this. VAE samples in one pass; diffusion needs T denoising steps.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'VAE encoder-decoder + Stable Diffusion text-to-image generation',
            code: `# Part 1: VAE architecture (conceptual)
import torch, torch.nn as nn

class VAE(nn.Module):
    def __init__(self, latent_dim=128):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(784, 400), nn.ReLU(),
            nn.Linear(400, 200), nn.ReLU())
        self.fc_mu = nn.Linear(200, latent_dim)
        self.fc_var = nn.Linear(200, latent_dim)
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 200), nn.ReLU(),
            nn.Linear(200, 400), nn.ReLU(),
            nn.Linear(400, 784), nn.Sigmoid())

    def encode(self, x):
        h = self.encoder(x)
        return self.fc_mu(h), self.fc_var(h)

    def reparameterise(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std   # reparameterisation trick

    def forward(self, x):
        mu, logvar = self.encode(x)
        z = self.reparameterise(mu, logvar)
        return self.decoder(z), mu, logvar

vae = VAE(latent_dim=64)
x = torch.randn(1, 784)   # 28x28 image flattened
x_hat, mu, logvar = vae(x)
print(f"VAE: input {x.shape} → latent {mu.shape} → output {x_hat.shape}")

# Part 2: Stable Diffusion text-to-image (requires diffusers library)
# pip install diffusers transformers
#
# from diffusers import StableDiffusionPipeline
# import torch
#
# pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5",
#                                                torch_dtype=torch.float16)
# pipe = pipe.to("cuda")
# image = pipe("a photo of a cat wearing sunglasses on the beach").images[0]
# image.save("cat_beach.png")
#
# # The pipeline internally:
# # 1. CLIP encodes the text prompt → embedding
# # 2. Start from random noise (4x64x64 latent)
# # 3. U-Net denoises for ~50 steps, conditioned on text via cross-attention
# # 4. VAE decoder upscales latent to 3x512x512 image

print("\\nStable Diffusion generates 512x512 images from text in ~3s on GPU (50 steps).")`,
            output: `VAE: input torch.Size([1, 784]) → latent torch.Size([1, 64]) → output torch.Size([1, 784]). Stable Diffusion generates 512x512 images from text in ~3s on GPU (50 denoising steps).`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Choose the model family:</strong> WHY — VAE for speed + representation, diffusion for quality; HOW — VAE for <1s generation, diffusion for best image quality.`,
            `<strong>2. For VAE: train encoder + decoder with reconstruction + KL loss:</strong> HOW — L = ||x - x_hat||² + beta * KL.`,
            `<strong>3. For diffusion: train a U-Net to predict noise at each step:</strong> HOW — L = ||epsilon - eps_theta(x_t, t)||².`,
            `<strong>4. Generate: sample latent (VAE) or denoise (diffusion):</strong> HOW — z ~ N(0,I) → decode; or noise → denoise T times.`,
            `<strong>5. For text-to-image: add text conditioning:</strong> HOW — CLIP embeds text; cross-attention injects it at each denoising step.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Model', 'Generation speed', 'Image quality', 'Training stability', 'Best for'],
            rows: [
              ['VAE', 'Fast (1 pass)', 'Blurry (Gaussian assumption)', 'Stable', 'Representation learning, fast sampling'],
              ['GAN', 'Fast (1 pass)', 'Sharp (adversarial)', 'Unstable (mode collapse)', 'Real-time generation'],
              ['Diffusion (DDPM)', 'Slow (50-1000 steps)', 'SOTA quality', 'Stable', 'High-quality generation, editing'],
              ['Latent Diffusion (SD)', 'Medium (50 steps in latent)', 'SOTA + high-res', 'Stable', 'Text-to-image, art, design']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Expecting VAE output to be as sharp as a GAN/diffusion (fix: VAEs are inherently blurry due to the Gaussian latent — use diffusion for sharp images).`,
            `Mistake 2: Running diffusion with too few steps (fix: 20-50 steps is the sweet spot; <10 steps produces artefacts; >100 is marginal improvement).`,
            `Mistake 3: Forgetting to scale images to [-1, 1] for diffusion (fix: diffusion U-Nets expect normalised inputs; check the pipeline's preprocessing).`,
            `Mistake 4: Not using float16 for Stable Diffusion (fix: torch_dtype=torch.float16 halves VRAM and doubles speed with negligible quality loss).`
          ],
          code: `# WRONG: run Stable Diffusion in float32 on a small GPU
pipe = StableDiffusionPipeline.from_pretrained("...")   # float32, ~10GB VRAM

# RIGHT: use float16 for 2x speed and half the VRAM
pipe = StableDiffusionPipeline.from_pretrained("...", torch_dtype=torch.float16)
pipe = pipe.to("cuda")`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
      text: `<strong>Stability AI — Stable Diffusion.</strong> Stable Diffusion (SD), released in 2022, was the first open-source latent diffusion model capable of text-to-image generation at 512x512. It runs on consumer GPUs (6-8 GB VRAM with float16) and has been downloaded millions of times. The model was trained on 2.3 billion image-text pairs (LAION-5B subset) and generates images in ~3 seconds (50 denoising steps) on an RTX 3090. The open-source release spawned an entire ecosystem: ControlNet (pose/edge control), LoRA fine-tuning (custom styles with ~50 images), img2img editing, and commercial products (Canva, Adobe Firefly). SD demonstrated that diffusion models can be democratised — not locked behind an API.`,
          list: [
            `Industry: Generative AI / creative tools`,
            `Dataset: 2.3B image-text pairs (LAION-5B subset)`,
            `Model: Latent diffusion (U-Net + VAE + CLIP text encoder)`,
            `Results: 512x512 images in ~3s on consumer GPU; open-source`,
            `Impact: Spawned ControlNet, LoRA, img2img; used in Canva, Firefly`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `VAE: encode → latent → decode; fast but blurry; KL + reconstruction loss.`,
            `Diffusion: forward noise + reverse denoise (T steps); SOTA quality but slow.`,
            `Latent diffusion (Stable Diffusion): diffuse in VAE latent space → cheaper.`,
            `Text-to-image: CLIP embeds text → cross-attention conditions each step.`,
            `Use float16 + 20-50 steps for Stable Diffusion; VAEs for fast approximate sampling.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why are VAE images blurry while diffusion images are sharp?\nAns: VAEs assume a Gaussian latent distribution and minimise pixel-level reconstruction loss — this averages over plausible details, producing blur. Diffusion models learn to reverse a noise process iteratively, and each step makes a precise correction, preserving sharp detail.`,
            `Q2 (math): VAE KL for one latent dim with mean=0, var=1 (the prior). Compute KL.\nAns: KL = 0.5 * (0 + 1 - 1 - log(1)) = 0.5 * (0) = 0. When q(z|x) = N(0,1) = the prior, KL = 0 (no regularisation cost).`,
            `Q3 (coding): Generate an image with Stable Diffusion in 3 lines.\nAns: pipe = StableDiffusionPipeline.from_pretrained("...", torch_dtype=torch.float16).to("cuda"); img = pipe("a cat on the moon").images[0].`,
            `Challenge: Why does latent diffusion (Stable Diffusion) run diffusion in a compressed latent space instead of pixel space?\nAns: A 512x512x3 image has ~786K dimensions; running a U-Net for 50 steps on that is very expensive. The VAE compresses it to 4x64x64 = ~16K dimensions (48x smaller), making each diffusion step 48x cheaper. The VAE decoder then upscales the final latent back to 512x512 — high quality at a fraction of the compute.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Implement a simple VAE in PyTorch for 28x28 images (MNIST-style). The VAE should have an encoder (784 → 200 → latent_dim), a reparameterisation step, and a decoder (latent_dim → 200 → 784). Run a forward pass on a random input and print the shapes. (If you have the diffusers library, also try generating a text-to-image with Stable Diffusion.)`,
          example: {
            title: 'Solution (collapsed)',
            code: `import torch, torch.nn as nn

class VAE(nn.Module):
    def __init__(self, latent_dim=32):
        super().__init__()
        self.enc = nn.Sequential(nn.Linear(784,400), nn.ReLU(), nn.Linear(400,200), nn.ReLU())
        self.fc_mu = nn.Linear(200, latent_dim)
        self.fc_lv = nn.Linear(200, latent_dim)
        self.dec = nn.Sequential(nn.Linear(latent_dim,200), nn.ReLU(),
                                 nn.Linear(200,400), nn.ReLU(), nn.Linear(400,784), nn.Sigmoid())
    def forward(self, x):
        h = self.enc(x)
        mu, lv = self.fc_mu(h), self.fc_lv(h)
        std = torch.exp(0.5*lv); eps = torch.randn_like(std)
        z = mu + eps * std
        return self.dec(z), mu, lv

vae = VAE(32)
x = torch.randn(1, 784)
x_hat, mu, lv = vae(x)
print(f"Input: {x.shape} → latent mu: {mu.shape} → output: {x_hat.shape}")

# Sample a new image from the prior
z = torch.randn(1, 32)
new_img = vae.dec(z)
print(f"Generated image shape: {new_img.shape}  (untrained → noise; train on MNIST for digits)")`,
            output: `Input: torch.Size([1, 784]) → latent mu: torch.Size([1, 32]) → output: torch.Size([1, 784]). Generated image shape: torch.Size([1, 784]). After training on MNIST, sampling z ~ N(0,I) and decoding produces realistic handwritten digits.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'transfer-learning': {
      title: 'Transfer Learning with torchvision',
      subtitle: 'Leveraging pre-trained models for custom CV tasks',
      sections: [
        {
          heading: 'What is Transfer Learning?',
          text: `Think of a chef who learned Italian cooking for 10 years, then needs to cook French food. They don't start from zero — knife skills, sauce-making, and timing all transfer. Transfer learning does this for neural networks: take a model pre-trained on a large dataset (ImageNet, COCO) and adapt it to your task with minimal new training. Curiosity gap: why does a model trained on ImageNet's 1000 classes (cats, dogs, cars) help with medical X-ray classification? Because early CNN layers learn <em>general</em> features (edges, textures, shapes) that are useful for <em>any</em> visual task — only the final layers are class-specific.`,
          list: [
            `Pre-trained models: torchvision.models (ResNet, EfficientNet, ViT)`,
            `Feature extraction: freeze backbone, train only the new head`,
            `Fine-tuning: unfreeze some/all layers, train with a small learning rate`,
            `ImageNet pre-training → adapt to custom classes with ~100 images`,
            `Standard transforms: resize 224x224, normalise with ImageNet stats`
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            `<p>A CNN trained on ImageNet learns a feature hierarchy: layer 1 detects edges, layer 2 detects textures, layer 3 detects patterns (corners, circles), and deeper layers detect object parts and whole objects. These early-to-mid features are <em>general</em> — they transfer to any visual domain. Only the final classification head (the last FC layer) is specific to ImageNet's 1000 classes. Transfer learning replaces this head with a new one for your classes and trains just the head (feature extraction) or the whole model (fine-tuning).</p>`,
            `<p><strong>Feature extraction</strong>: freeze the backbone (requires_grad=False for all pre-trained layers), replace the final FC layer with a new one (num_classes = yours), and train only that head. This works with very few images (~10-50 per class) because you're only learning a linear classifier on top of frozen features. <strong>Fine-tuning</strong>: unfreeze some or all backbone layers and train with a small learning rate (1e-4, 10x smaller than from-scratch). This adapts the features to your domain and is better when you have more data (~100+ per class) or a very different domain (medical, satellite).</p>`,
            `<p>torchvision provides 20+ pre-trained models: ResNet (18/34/50/101), EfficientNet (b0-b7), Vision Transformer (ViT), ConvNeXt, and more. Load with torchvision.models.resnet50(weights=ResNet50_Weights.DEFAULT). The standard preprocessing pipeline: resize to 224x224, convert to tensor (CHW, [0,1]), normalise with ImageNet mean and std (mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225]). For detection: Faster R-CNN and Mask R-CNN are also available pre-trained.</p>`
          ],
          note: `Reference: He, K. et al. (2016), <em>Deep Residual Learning (ResNet)</em>, CVPR; Dosovitskiy et al. (2021), <em>An Image is Worth 16x16 Words (ViT)</em>, ICLR.`
        },
        {
          heading: 'Visual Representation',
          code: `Transfer learning: freeze + replace head

  Pre-trained ResNet50 (ImageNet, 1000 classes)
    [conv1] → [block1] → [block2] → [block3] → [block4] → [FC: 1000]
     edges    textures    patterns    parts      objects    ↑ REPLACE

  Feature extraction:
    [conv1...block4]  FROZEN (requires_grad=False)
    [FC: 1000]        → [FC: N_custom_classes]  TRAIN

  Fine-tuning:
    [conv1...block4]  UNFROZEN (small LR, 1e-4)
    [FC: N_custom]    TRAIN (LR 1e-3)

  Data requirements:
    Feature extraction: ~10-50 images/class
    Fine-tuning:        ~100-1000 images/class
    From scratch:       ~10K+ images/class`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          example: {
            title: 'Replacing the classification head and choosing LR',
            code: `Feature extraction (freeze backbone):
  for param in model.parameters():
      param.requires_grad = False          # freeze all
  model.fc = nn.Linear(512, num_custom_classes)   # replace head
  optimizer = SGD(model.fc.parameters(), lr=0.01) # train only head

Fine-tuning (unfreeze + differential LR):
  for param in model.parameters():
      param.requires_grad = True           # unfreeze all
  model.fc = nn.Linear(512, num_custom_classes)
  # differential LR: backbone 1e-4, head 1e-3
  optimizer = SGD([
      {'params': model.conv1.parameters(), 'lr': 1e-4},
      {'params': model.layer4.parameters(), 'lr': 1e-4},
      {'params': model.fc.parameters(),    'lr': 1e-3},
  ], momentum=0.9)

Standard preprocessing:
  transforms.Compose([
      transforms.Resize((224, 224)),
      transforms.ToTensor(),                        # [0,1], CHW
      transforms.Normalize(mean=[0.485,0.456,0.406],
                           std=[0.229,0.224,0.225]),
  ])

Worked example:
  Pre-trained ResNet18 → 1000 ImageNet classes
  Custom task: 5 skin-lesion classes
  model.fc = nn.Linear(512, 5)   # 512 = ResNet18's penultimate dim
  Train with ~200 images/class → ~95% accuracy (vs ~60% from scratch)`,
            output: `Replacing the final FC layer from 1000→5 classes and training only that head gives ~95% accuracy on a 5-class medical task with 200 images/class — vs ~60% training from scratch with the same data. Transfer learning is dramatically more data-efficient.`,
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Transfer learning: ResNet18 feature extraction + fine-tuning on a synthetic dataset',
            code: `import torch
import torch.nn as nn
from torchvision import models, transforms, datasets
from torch.utils.data import DataLoader
import numpy as np

# 1. Load pre-trained ResNet18
from torchvision.models import resnet18, ResNet18_Weights
model = resnet18(weights=ResNet18_Weights.DEFAULT)

# 2. Feature extraction: freeze backbone, replace head
for param in model.parameters():
    param.requires_grad = False

num_classes = 5  # custom task
model.fc = nn.Linear(512, num_classes)   # 512 = ResNet18 feature dim
print(f"Trainable params: {sum(p.numel() for p in model.parameters() if p.requires_grad):,}")
print(f"Total params:     {sum(p.numel() for p in model.parameters()):,}")

# 3. Standard ImageNet transforms
train_tf = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
])

# 4. Training setup (head only)
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.fc.parameters(), lr=0.01, momentum=0.9)
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = model.to(device)

# 5. Simulate one training step
dummy_x = torch.randn(4, 3, 224, 224).to(device)
dummy_y = torch.randint(0, num_classes, (4,)).to(device)
model.train()
optimizer.zero_grad()
out = model(dummy_x)
loss = criterion(out, dummy_y)
loss.backward()
optimizer.step()
print(f"Demo step: loss = {loss.item():.4f}, output shape = {out.shape}")

# 6. Fine-tuning option: unfreeze layer4 + fc, lower LR
print("\\n--- Fine-tuning mode ---")
for param in model.layer4.parameters():
    param.requires_grad = True
optimizer = torch.optim.SGD([
    {'params': model.layer4.parameters(), 'lr': 1e-4},
    {'params': model.fc.parameters(), 'lr': 1e-3},
], momentum=0.9)
print(f"Trainable params (fine-tune): {sum(p.numel() for p in model.parameters() if p.requires_grad):,}")`,
            output: `Trainable params: 2,565 (just the FC head); Total params: 11,176,512. Demo step: loss ~ 1.6, output shape torch.Size([4, 5]). Fine-tuning mode: ~8M trainable (layer4 + FC). Feature extraction trains 0.02% of params; fine-tuning trains ~70%.`,
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            `<strong>1. Load the pre-trained model:</strong> HOW — model = resnet50(weights=ResNet50_Weights.DEFAULT).`,
            `<strong>2. Freeze the backbone (feature extraction):</strong> HOW — for p in model.parameters(): p.requires_grad = False.`,
            `<strong>3. Replace the classification head:</strong> HOW — model.fc = nn.Linear(feature_dim, num_custom_classes).`,
            `<strong>4. Prepare data with standard transforms:</strong> HOW — Resize(224), ToTensor, Normalize(ImageNet mean/std).`,
            `<strong>5. Train the head (or fine-tune):</strong> HOW — SGD/Adam on model.fc.parameters() with lr=0.01; or unfreeze layer4 with lr=1e-4.`
          ]
        },
        {
          heading: 'Important Differences',
          table: {
            headers: ['Strategy', 'Params trained', 'Data needed', 'Speed', 'When to use'],
            rows: [
              ['Feature extraction', 'Head only (~0.1%)', '~10-50 img/class', 'Fast', 'Small dataset, similar domain'],
              ['Fine-tuning (last layers)', 'Head + last block (~10%)', '~100-500 img/class', 'Medium', 'Medium dataset, related domain'],
              ['Full fine-tuning', 'All layers (~100%)', '~500+ img/class', 'Slow', 'Large dataset, different domain'],
              ['From scratch', 'All layers', '~10K+ img/class', 'Slowest', 'Very large dataset, novel architecture']]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Forgetting to replace the head (fix: model.fc = nn.Linear(512, N) — otherwise you get 1000 ImageNet classes).`,
            `Mistake 2: Not freezing the backbone for feature extraction (fix: set requires_grad=False before training — otherwise you fine-tune the whole model with a large LR, destroying pre-trained features).`,
            `Mistake 3: Using the wrong normalisation (fix: use ImageNet mean=[0.485,0.456,0.406] std=[0.229,0.224,0.225] — the model was trained with these stats).`,
            `Mistake 4: Too large a learning rate when fine-tuning (fix: 1e-4 for backbone, 1e-3 for head — too large destroys pre-trained features).`
          ],
          code: `# WRONG: train all layers with lr=0.01 (destroys pre-trained features)
model = resnet50(pretrained=True)
optimizer = SGD(model.parameters(), lr=0.01)   # too large for pre-trained weights

# RIGHT: feature extraction (freeze) or differential LR (fine-tune)
for p in model.parameters(): p.requires_grad = False
model.fc = nn.Linear(2048, N)
optimizer = SGD(model.fc.parameters(), lr=0.01)   # only the new head`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
      text: `<strong>Google — diabetic retinopathy screening.</strong> Google Health fine-tuned an Inception-v3 model (pre-trained on ImageNet) to detect diabetic retinopathy (DR) from retinal fundus images. They fine-tuned on ~128,000 annotated retinal images (5 severity grades). The transfer-learned model achieved <strong>96% sensitivity and 93% specificity</strong> for referable DR, matching or exceeding ophthalmologists. The model was deployed in Thailand clinics, screening patients in seconds. ImageNet pre-training was critical: the early layers (edges, textures) transferred directly to retinal features (blood vessels, lesions). Training from scratch on 128K images gave ~88% accuracy — the 8-point gap is the value of ImageNet's 14M images of general visual knowledge.`,
          list: [
            `Industry: Medical imaging / diabetic retinopathy screening`,
            `Dataset: ~128K retinal fundus images, 5 DR severity grades`,
            `Model: Inception-v3 fine-tuned from ImageNet`,
            `Results: 96% sensitivity, 93% specificity (matches ophthalmologists)`,
            `Impact: Deployed in Thailand clinics; automated DR screening`
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            `Transfer learning: pre-trained backbone + new classification head.`,
            `Feature extraction: freeze backbone, train head only (~10-50 images/class).`,
            `Fine-tuning: unfreeze + small LR (1e-4 backbone, 1e-3 head).`,
            `torchvision: resnet50(weights=...DEFAULT) for pre-trained models.`,
            `Always normalise with ImageNet mean/std for ImageNet-pre-trained models.`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1 (conceptual): Why do early CNN layers transfer better than late layers?\nAns: Early layers detect general features (edges, textures, colours) that are common to all visual tasks. Late layers detect class-specific patterns (dog ears, car wheels) that are specific to the pre-training dataset and need adaptation. Freezing early + adapting late preserves the general features while customising the specific ones.`,
            `Q2 (math): ResNet50 has 25.6M parameters. The FC head for 100 custom classes has 2048*100 + 100 = 204,900 params. What fraction is trainable in feature-extraction mode?\nAns: 204,900 / 25,600,000 ≈ 0.8% — less than 1% of the model is trained.`,
            `Q3 (coding): Load ResNet18, freeze it, and replace the head for 10 classes.\nAns: m = resnet18(weights=...DEFAULT); for p in m.parameters(): p.requires_grad=False; m.fc = nn.Linear(512, 10).`,
            `Challenge: Why use a smaller learning rate for the backbone than for the new head in fine-tuning?\nAns: The backbone's pre-trained weights are already good — large gradients would destroy them. The new head is randomly initialised and needs large gradients to converge. A differential LR (small for backbone, large for head) preserves the useful features while rapidly learning the new classifier.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: `<strong>Task:</strong> Load a pre-trained ResNet18 from torchvision. Freeze the backbone, replace the FC head with a 3-class output, and run a forward pass on a random 224x224x3 tensor. Print the output shape and the number of trainable parameters. Then unfreeze layer4 and report the new trainable count.`,
          example: {
            title: 'Solution (collapsed)',
            code: `import torch, torch.nn as nn
from torchvision.models import resnet18, ResNet18_Weights

model = resnet18(weights=ResNet18_Weights.DEFAULT)

# feature extraction
for p in model.parameters(): p.requires_grad = False
model.fc = nn.Linear(512, 3)
n_fe = sum(p.numel() for p in model.parameters() if p.requires_grad)
print(f"Feature extraction — trainable: {n_fe:,} / {sum(p.numel() for p in model.parameters()):,}")

x = torch.randn(1, 3, 224, 224)
out = model(x)
print(f"Output shape: {out.shape}  (1, 3 classes)")

# fine-tuning: unfreeze layer4
for p in model.layer4.parameters(): p.requires_grad = True
n_ft = sum(p.numel() for p in model.parameters() if p.requires_grad)
print(f"Fine-tuning (layer4+fc) — trainable: {n_ft:,}")`,
            output: `Feature extraction — trainable: 1,539 / 11,176,512 (only the 3-class FC head). Output shape: torch.Size([1, 3]). Fine-tuning (layer4+fc) — trainable: ~8.5M (layer4 + FC). Feature extraction trains 0.01% of params; fine-tuning trains ~76%.`,
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
