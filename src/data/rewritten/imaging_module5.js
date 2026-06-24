// medical and satellite imaging — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js imaging_module5.js

export const imagingModule5Content = {
  module5: {
    'video-processing': {
      title: 'Video Processing',
      subtitle: 'Fundamentals of digital video manipulation and analysis',
      sections: [
        {
          heading: 'What is Video Processing?',
          text: 'Video processing is the manipulation and analysis of digital video sequences. Unlike static images, video adds the temporal dimension — a sequence of frames over time. Processing video requires handling massive data volumes while preserving spatial and temporal coherence.',
          list: [
            'A video is a sequence of frames (images) played at a frame rate (e.g., 24, 30, 60 fps)',
            'Temporal redundancy: consecutive frames are often similar, enabling compression',
            'Spatial redundancy: neighboring pixels within a frame are correlated',
            'Video processing spans filtering, restoration, compression, enhancement, and analysis'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Video processing is the manipulation and analysis of digital video sequences. Unlike static images, video adds the temporal dimension — a sequence of frames over time. Processing video requires handling massive data volumes while preserving spatial and temporal coherence. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Video processing is the manipulation and analysis of digital video sequences. Unlike static images, video adds the temporal dimension — a sequence of frames over time. Processing video requires handling massive data volumes while preserving spatial and temporal coherence. A video is a sequence of frames (images) played at a frame rate (e.g., 24, 30, 60 fps) Temporal redundancy: consecutive frames are often similar, enabling compression Spatial redundancy: neighboring pixels within a frame are correlated Video processing spans filtering, restoration, compression, enhancement, and analysis</p>',
            '<p>You use video processing when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Video Processing

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Video Processing sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Frame differencing is the simplest motion detection technique — subtract consecutive frames to highlight changes.',
          example: {
            title: 'Example: Frame Differencing',
            code: `Given two consecutive grayscale frames:
  I(t)   = current frame pixel values
  I(t-1) = previous frame pixel values

Difference frame:
  D(x, y) = |I(t, x, y) - I(t-1, x, y)|

Threshold to detect motion:
  M(x, y) = 1 if D(x, y) > T else 0

Example pixel values:
  I(t-1)[10,10] = 120, I(t)[10,10] = 122
  D = |122 - 120| = 2
  If T = 10 → M = 0 (no motion detected)

  I(t-1)[50,50] = 100, I(t)[50,50] = 180
  D = |180 - 100| = 80
  If T = 10 → M = 1 (motion detected)`,
            output: 'Areas with pixel changes above the threshold are flagged as motion regions.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Video Processing with Python',
            code: `import numpy as np
# Video Processing — synthetic 16-bit slice
ct = np.random.randint(-1000, 2000, (512, 512), dtype=np.int16)
print("HU range:", ct.min(), "to", ct.max(), "mean:", round(ct.mean(), 1))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Image processing vs video processing.',
          table: {
            headers: [
              'Aspect',
              'Image Processing',
              'Video Processing'
            ],
            rows: [
              [
                'Input',
                'Single static image',
                'Sequence of frames over time'
              ],
              [
                'Data volume',
                'One 2D array (H × W)',
                'Multiple 2D arrays (T × H × W)'
              ],
              [
                'Redundancy',
                'Only spatial',
                'Spatial + temporal'
              ],
              [
                'Key operations',
                'Filtering, transforms, segmentation',
                'Motion estimation, tracking, temporal filtering'
              ],
              [
                'Complexity',
                'Lower; single frame analysis',
                'Higher; must maintain temporal consistency'
              ],
              [
                'Compression',
                'JPEG, PNG',
                'H.264, H.265 (exploit temporal redundancy)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating video as independent frames (fix: always consider temporal context; use sliding windows or memory modules to preserve continuity)',
            'Mistake 2: Ignoring frame rate when comparing videos (fix: normalize to a common frame rate or account for temporal sampling differences in analysis)',
            'Mistake 3: Using spatial filters without considering motion blur (fix: apply motion-aware deblurring or use optical flow to guide filtering across frames)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Video processing underpins many modern technologies.',
          list: [
            'Surveillance: real-time anomaly detection in security camera feeds using background subtraction',
            'Streaming: H.264/H.265 compression reduces bandwidth by 100x while preserving perceptual quality',
            'Video stabilization: removing unwanted camera shake by estimating and compensating motion trajectories',
            'Slow-motion: frame interpolation synthesizes intermediate frames to create smooth slow-motion from standard footage'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video = sequence of frames with temporal and spatial dimensions',
            'Temporal redundancy means consecutive frames are similar — key for compression',
            'Frame differencing: |I(t) - I(t-1)| > threshold is the simplest motion detector',
            'Video processing adds motion estimation, tracking, and temporal filtering to image processing',
            'Real-world uses: surveillance, streaming, stabilization, slow-motion synthesis'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is temporal redundancy important in video processing?
Ans: Consecutive frames are often similar, allowing efficient compression and enabling motion-based analysis.`,
            `Q2: What is the main limitation of simple frame differencing for motion detection?
Ans: It is sensitive to noise and cannot distinguish object motion from global changes (e.g., lighting shifts).`,
            `Q3: How does video processing differ from image processing in terms of data volume?
Ans: Video is a 3D array (time × height × width) while an image is 2D (height × width), increasing complexity significantly.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Video Processing</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Video Processing")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'motion-estimation': {
      title: 'Motion Estimation',
      subtitle: 'Tracking pixel movement across video frames',
      sections: [
        {
          heading: 'What is Motion Estimation?',
          text: 'Motion estimation is the process of determining how pixels or regions move from one video frame to the next. It is fundamental to video compression, tracking, stabilization, and action recognition. The goal is to find the displacement vector for each pixel or block.',
          list: [
            'Optical flow: computes per-pixel motion vectors between two frames',
            'Block matching: divides frames into blocks and searches for the best match in the next frame',
            'Motion vectors describe displacement (dx, dy) for each pixel or block over time',
            'Assumption of brightness constancy: a pixel keeps its intensity as it moves'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Motion estimation is the process of determining how pixels or regions move from one video frame to the next. It is fundamental to video compression, tracking, stabilization, and action recognition. The goal is to find the displacement vector for each pixel or block. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Motion estimation is the process of determining how pixels or regions move from one video frame to the next. It is fundamental to video compression, tracking, stabilization, and action recognition. The goal is to find the displacement vector for each pixel or block. Optical flow: computes per-pixel motion vectors between two frames Block matching: divides frames into blocks and searches for the best match in the next frame Motion vectors describe displacement (dx, dy) for each pixel or block over time Assumption of brightness constancy: a pixel keeps its intensity as it moves</p>',
            '<p>You use motion estimation when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Motion Estimation

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Motion Estimation sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The optical flow constraint equation relates spatial and temporal intensity changes to motion.',
          example: {
            title: 'Example: Optical Flow Constraint',
            code: `Brightness Constancy Assumption:
  I(x, y, t) = I(x+dx, y+dy, t+dt)

Taylor expansion (first-order approximation):
  I(x+dx, y+dy, t+dt) ≈ I(x,y,t) + (∂I/∂x)dx + (∂I/∂y)dy + (∂I/∂t)dt

Optical Flow Constraint Equation:
  Iₓ·u + Iᵧ·v + Iₜ = 0

Where:
  Iₓ = ∂I/∂x (spatial gradient in x)
  Iᵧ = ∂I/∂y (spatial gradient in y)
  Iₜ = ∂I/∂t (temporal gradient)
  u = dx/dt, v = dy/dt (motion velocities)

Lucas-Kanade solves for (u, v) using a window of pixels:
  [ΣIₓ²    ΣIₓIᵧ] [u]   [-ΣIₓIₜ]
  [ΣIₓIᵧ  ΣIᵧ²  ] [v] = [-ΣIᵧIₜ]`,
            output: 'The Lucas-Kanade method solves a linear system for motion vectors using local image gradients.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Motion Estimation with Python',
            code: `import numpy as np
# Motion Estimation — synthetic 16-bit slice
ct = np.random.randint(-1000, 2000, (512, 512), dtype=np.int16)
print("HU range:", ct.min(), "to", ct.max(), "mean:", round(ct.mean(), 1))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Sparse vs dense optical flow.',
          table: {
            headers: [
              'Aspect',
              'Sparse Optical Flow',
              'Dense Optical Flow'
            ],
            rows: [
              [
                'Tracked points',
                'Selected interest points (corners, features)',
                'Every pixel in the image'
              ],
              [
                'Method',
                'Lucas-Kanade on keypoints',
                'Horn-Schunck, Farneback, deep learning'
              ],
              [
                'Speed',
                'Fast (few points)',
                'Slow (many computations)'
              ],
              [
                'Accuracy',
                'Accurate at tracked points',
                'Can be noisy in uniform regions'
              ],
              [
                'Use case',
                'Object tracking, motion analysis',
                'Video segmentation, frame interpolation'
              ],
              [
                'Output',
                'Few motion vectors',
                'Full motion field'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming motion is purely translational (fix: use affine or parametric models for rotation, scaling, and deformation; deep flow networks handle complex motions)',
            'Mistake 2: Ignoring the aperture problem (fix: use regions with texture or corners where motion is unambiguous; smooth regions cannot determine motion uniquely)',
            'Mistake 3: Using optical flow on large displacements without coarse-to-fine approaches (fix: apply pyramidal or multi-scale processing to handle large motions)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Motion estimation powers many practical systems.',
          list: [
            'Video compression (MPEG, H.264): motion vectors reduce bitrate by predicting frames from references',
            'Autonomous driving: estimating ego-motion and object velocity from camera sequences',
            'Video stabilization: compensating for unwanted camera motion using estimated motion fields',
            'Gesture recognition: tracking hand motion trajectories for interactive interfaces'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Motion estimation finds pixel displacement between consecutive frames',
            'Optical flow constraint: Iₓ·u + Iᵧ·v + Iₜ = 0 relates gradients to motion',
            'Lucas-Kanade: solves motion vectors locally using a window of pixels',
            'Sparse flow tracks keypoints; dense flow computes motion for every pixel',
            'Applications: compression, driving, stabilization, gesture recognition'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does the brightness constancy assumption state?
Ans: A pixel maintains its intensity value as it moves across frames.`,
            `Q2: What is the aperture problem in motion estimation?
Ans: In a small window, motion along an edge is ambiguous — only the normal flow component can be determined.`,
            `Q3: Why is Lucas-Kanade called a local method?
Ans: It solves motion vectors using information from a small neighborhood (window) around each point.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Motion Estimation</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Motion Estimation")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'video-segmentation': {
      title: 'Video Segmentation',
      subtitle: 'Partitioning video into meaningful spatial-temporal regions',
      sections: [
        {
          heading: 'What is Video Segmentation?',
          text: 'Video segmentation partitions a video sequence into semantically or spatially coherent regions. Unlike image segmentation which operates on a single frame, video segmentation must maintain temporal consistency — the same object should have the same label across frames.',
          list: [
            'Semantic segmentation: classifies every pixel into a category (e.g., person, car, road)',
            'Instance segmentation: separates individual objects of the same class',
            'Video object segmentation (VOS): tracks and segments a specific object through the video',
            'Temporal consistency is critical: segmentation masks should not flicker between frames'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Video segmentation partitions a video sequence into semantically or spatially coherent regions. Unlike image segmentation which operates on a single frame, video segmentation must maintain temporal consistency — the same object should have the same label across frames. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Video segmentation partitions a video sequence into semantically or spatially coherent regions. Unlike image segmentation which operates on a single frame, video segmentation must maintain temporal consistency — the same object should have the same label across frames. Semantic segmentation: classifies every pixel into a category (e.g., person, car, road) Instance segmentation: separates individual objects of the same class Video object segmentation (VOS): tracks and segments a specific object through the video Temporal consistency is critical: segmentation masks should not flicker between frames</p>',
            '<p>You use video segmentation when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Video Segmentation

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Video Segmentation sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Temporal consistency can be enforced by propagating segmentation masks using optical flow and penalizing changes.',
          example: {
            title: 'Example: Temporal Consistency Loss',
            code: `Given segmentation mask at frame t: Sₜ(x, y)
And optical flow from t to t+1: (u, v)

Warped mask from t to t+1:
  Sₜ→ₜ₊₁(x, y) = Sₜ(x - u, y - v)

Temporal consistency loss:
  L_temp = Σ|Sₜ₊₁(x, y) - Sₜ→ₜ₊₁(x, y)|

Total segmentation loss:
  L = L_seg + λ·L_temp

Where:
  L_seg = cross-entropy or Dice loss for frame t+1
  λ = weight for temporal consistency (typically 0.1 to 1.0)

Example:
  If a pixel is "person" in frame 10,
  and the person moves 5 pixels right,
  the warped prediction should still be "person".
  L_temp penalizes any label flip at that location.`,
            output: 'Adding temporal consistency loss reduces mask flickering and improves tracking quality.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Video Segmentation with Python',
            code: `import numpy as np
# Video Segmentation — synthetic 16-bit slice
ct = np.random.randint(-1000, 2000, (512, 512), dtype=np.int16)
print("HU range:", ct.min(), "to", ct.max(), "mean:", round(ct.mean(), 1))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Image segmentation vs video segmentation.',
          table: {
            headers: [
              'Aspect',
              'Image Segmentation',
              'Video Segmentation'
            ],
            rows: [
              [
                'Input',
                'Single frame',
                'Sequence of frames'
              ],
              [
                'Temporal awareness',
                'None',
                'Must maintain label consistency across time'
              ],
              [
                'Occlusion handling',
                'Not applicable',
                'Must handle objects appearing/disappearing'
              ],
              [
                'Output flickering',
                'Not a concern',
                'Major issue — masks must be stable'
              ],
              [
                'Model architecture',
                'CNN (U-Net, DeepLab)',
                'CNN + RNN, 3D conv, or memory networks'
              ],
              [
                'Annotation cost',
                'Lower (one frame)',
                'Higher (must label across frames)'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying image segmentation independently to each frame (fix: incorporate temporal models like ConvLSTM, optical flow warping, or memory networks to propagate context)',
            'Mistake 2: Ignoring occlusion and disocclusion (fix: use appearance models or memory mechanisms to re-identify objects when they reappear after being hidden)',
            'Mistake 3: Over-relying on motion cues alone (fix: combine appearance and motion features; objects may be stationary while the background moves)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Video segmentation enables rich video understanding.',
          list: [
            'Video editing: background removal and replacement in real-time video calls (e.g., Zoom virtual backgrounds)',
            'Autonomous driving: segmenting roads, pedestrians, and vehicles across frames for safe navigation',
            'Medical imaging: tracking organs or tumors across 3D ultrasound or MRI slices over time',
            'Sports analysis: isolating players from the field to compute performance metrics'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video segmentation partitions video into coherent regions with temporal consistency',
            'Semantic segmentation classifies pixels; instance segmentation separates objects; VOS tracks specific objects',
            'Temporal consistency loss: penalizes mask changes that violate optical flow warping',
            'Key challenge: preventing flickering and handling occlusions across frames',
            'Applications: video editing, autonomous driving, medical tracking, sports analysis'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is temporal consistency important in video segmentation?
Ans: Without it, object labels flicker between frames, producing noisy and unusable results.`,
            `Q2: What is the difference between semantic and instance segmentation in video?
Ans: Semantic segmentation classifies all pixels by category; instance segmentation also distinguishes individual objects of the same class.`,
            `Q3: How does optical flow help enforce temporal consistency?
Ans: It warps segmentation masks from one frame to the next, allowing comparison and penalization of unexpected label changes.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Video Segmentation</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Video Segmentation")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'action-recognition': {
      title: 'Action Recognition',
      subtitle: 'Classifying human activities from video sequences',
      sections: [
        {
          heading: 'What is Action Recognition?',
          text: 'Action recognition is the task of identifying human activities or events from video sequences. Unlike image classification which analyzes a single snapshot, action recognition must model temporal dynamics — how poses and scenes evolve over time to distinguish activities like running, waving, or eating.',
          list: [
            'Action recognition classifies the entire video clip into a predefined activity category',
            'Temporal modeling is essential: the same pose at different times can belong to different actions',
            'Challenges: viewpoint variation, occlusions, background clutter, intra-class variation',
            'Closely related tasks: temporal action localization (when does the action start/end?) and spatial-temporal detection (where is the actor?)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Action recognition is the task of identifying human activities or events from video sequences. Unlike image classification which analyzes a single snapshot, action recognition must model temporal dynamics — how poses and scenes evolve over time to distinguish activities like running, waving, or eating. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Action recognition is the task of identifying human activities or events from video sequences. Unlike image classification which analyzes a single snapshot, action recognition must model temporal dynamics — how poses and scenes evolve over time to distinguish activities like running, waving, or eating. Action recognition classifies the entire video clip into a predefined activity category Temporal modeling is essential: the same pose at different times can belong to different actions Challenges: viewpoint variation, occlusions, background clutter, intra-class variation Closely related tasks: temporal action localization (when does the action start/end?) and spatial-temporal detection (where is the actor?)</p>',
            '<p>You use action recognition when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Action Recognition

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Action Recognition sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Two-stream networks fuse appearance (RGB) and motion (optical flow) streams for robust action recognition.',
          example: {
            title: 'Example: Two-Stream Network Fusion',
            code: `RGB Stream:
  Input: RGB frames → CNN → f_rgb ∈ R^d
  Captures: appearance, objects, scenes

Flow Stream:
  Input: optical flow → CNN → f_flow ∈ R^d
  Captures: motion, velocity, temporal dynamics

Fusion strategies:
  Late fusion:   y = softmax(W·[f_rgb; f_flow])
  Average:       y = 0.5·y_rgb + 0.5·y_flow
  Weighted:      y = w₁·y_rgb + w₂·y_flow

Example scores:
  Action: "running"
  RGB stream confidence: 0.65
  Flow stream confidence: 0.90
  Fused (average): 0.775 → classified as "running"`,
            output: 'Combining appearance and motion cues improves recognition accuracy by 10–20% over single-stream methods.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Action Recognition with Python',
            code: `import numpy as np
# Action Recognition — synthetic 16-bit slice
ct = np.random.randint(-1000, 2000, (512, 512), dtype=np.int16)
print("HU range:", ct.min(), "to", ct.max(), "mean:", round(ct.mean(), 1))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: '2D CNN vs 3D CNN for action recognition.',
          table: {
            headers: [
              'Aspect',
              '2D CNN + LSTM',
              '3D CNN (C3D, I3D)'
            ],
            rows: [
              [
                'Spatial features',
                'Extracted per frame',
                'Extracted jointly across space and time'
              ],
              [
                'Temporal modeling',
                'LSTM / GRU over frame features',
                'Built into 3D convolutions'
              ],
              [
                'Parameter count',
                'Lower (2D conv + RNN)',
                'Higher (3D kernels)'
              ],
              [
                'Training data',
                'Less demanding',
                'Requires more data due to more parameters'
              ],
              [
                'Speed',
                'Faster inference',
                'Slower but captures spatiotemporal patterns directly'
              ],
              [
                'Representative',
                'Two-Stream + LSTM',
                'I3D, SlowFast networks'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using only RGB frames without motion information (fix: add an optical flow stream or use 3D convolutions; motion is often more discriminative than appearance for actions)',
            'Mistake 2: Ignoring temporal order by using simple frame averaging (fix: use recurrent layers or temporal convolutions that respect sequence ordering)',
            'Mistake 3: Training on very short clips that miss the full action (fix: sample longer clips or use multiple clip sampling strategies to capture the complete temporal extent)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Action recognition powers many intelligent video systems.',
          list: [
            'Surveillance: detecting suspicious activities (fighting, loitering) in public spaces',
            'Healthcare: monitoring elderly patients for falls or abnormal movements',
            'Sports analytics: automatically tagging game events (goals, fouls, celebrations) from broadcast video',
            'Human-computer interaction: controlling devices via hand gestures and body movements'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Action recognition classifies activities from video by modeling temporal dynamics',
            'Two-stream networks fuse RGB (appearance) and optical flow (motion) streams',
            '2D CNN + LSTM separates spatial and temporal modeling; 3D CNN jointly models both',
            'Motion cues are often more discriminative than appearance for action classification',
            'Applications: surveillance, healthcare, sports analytics, gesture control'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does a two-stream network outperform a single RGB stream for action recognition?
Ans: The flow stream captures motion dynamics that the RGB stream misses, and motion is highly discriminative for actions.`,
            `Q2: What is the main advantage of 3D CNNs over 2D CNNs + LSTM for video?
Ans: 3D CNNs jointly learn spatiotemporal features in a unified architecture without separating spatial and temporal processing.`,
            `Q3: Why is temporal ordering important in action recognition?
Ans: Actions are defined by how poses evolve over time; shuffling frames destroys the action identity.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Action Recognition</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Action Recognition")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'video-synthesis': {
      title: 'Video Synthesis',
      subtitle: 'Generating and manipulating video content with deep learning',
      sections: [
        {
          heading: 'What is Video Synthesis?',
          text: 'Video synthesis is the generation of new video content using machine learning models. It includes creating entirely new videos from text or images, predicting future frames, interpolating between frames, and altering existing video (e.g., face swapping, style transfer). The challenge is maintaining temporal coherence so that generated frames form a smooth, realistic sequence.',
          list: [
            'Video prediction: forecasting future frames from past frames',
            'Video interpolation: synthesizing intermediate frames to increase frame rate',
            'Text-to-video: generating video clips from natural language descriptions',
            'Video editing: modifying content while preserving temporal consistency'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Video synthesis is the generation of new video content using machine learning models. It includes creating entirely new videos from text or images, predicting future frames, interpolating between frames, and altering existing video (e.g., face swapping, style transfer). The challenge is maintaining temporal coherence so that generated frames form a smooth, realistic sequence. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Video synthesis is the generation of new video content using machine learning models. It includes creating entirely new videos from text or images, predicting future frames, interpolating between frames, and altering existing video (e.g., face swapping, style transfer). The challenge is maintaining temporal coherence so that generated frames form a smooth, realistic sequence. Video prediction: forecasting future frames from past frames Video interpolation: synthesizing intermediate frames to increase frame rate Text-to-video: generating video clips from natural language descriptions Video editing: modifying content while preserving temporal consistency</p>',
            '<p>You use video synthesis when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Video Synthesis

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Video Synthesis sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Future frame prediction can be formulated as a conditional generation problem using recurrent or transformer architectures.',
          example: {
            title: 'Example: Future Frame Prediction Loss',
            code: `Given past frames: I₁, I₂, ..., Iₜ
Predict next frame: Îₜ₊₁ = f_θ(I₁, ..., Iₜ)

Reconstruction loss (per-pixel):
  L_pixel = Σ|Iₜ₊₁(x,y) - Îₜ₊₁(x,y)|

Perceptual loss (feature-level):
  L_perceptual = Σ|φ(Iₜ₊₁) - φ(Îₜ₊₁)|²
  where φ = pre-trained VGG network features

Adversarial loss (GAN-based):
  L_adv = -log(D(Îₜ₊₁))

Total loss:
  L = L_pixel + λ_p·L_perceptual + λ_a·L_adv

Example:
  Predicting frame 11 from frames 1–10:
  L_pixel = 12.5 (blurry but close)
  L_perceptual = 3.2 (good structure)
  L_adv = 0.8 (realistic textures)`,
            output: 'Combining pixel, perceptual, and adversarial losses produces sharp and temporally consistent predictions.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Video Synthesis with Python',
            code: `import numpy as np
# Video Synthesis — synthetic 16-bit slice
ct = np.random.randint(-1000, 2000, (512, 512), dtype=np.int16)
print("HU range:", ct.min(), "to", ct.max(), "mean:", round(ct.mean(), 1))`,
            output: 'Run in a notebook; verify shapes, p-values, or metrics match expectations.',
            language: 'python',
            type: 'code'
          }
        },
        {
          heading: 'Step-by-Step Walkthrough',
          list: [
            '<strong>1. Load & inspect data:</strong> WHY — garbage in, garbage out; HOW — pandas read_csv, df.info(), check dtypes.',
            '<strong>2. Check assumptions:</strong> WHY — invalid tests lie confidently; HOW — plots, Shapiro, VIF, or independence checks.',
            '<strong>3. Compute statistic:</strong> WHY — quantify evidence; HOW — scipy.stats or statsmodels.',
            '<strong>4. Interpret:</strong> WHY — p-values alone mislead; HOW — pair with effect size and confidence interval.',
            '<strong>5. Report:</strong> HOW — state H₀/H₁, test, α, statistic, p-value, CI, and practical significance.'
          ]
        },
        {
          heading: 'Important Differences',
          text: 'Video prediction vs video generation.',
          table: {
            headers: [
              'Aspect',
              'Video Prediction',
              'Video Generation'
            ],
            rows: [
              [
                'Input',
                'Past video frames',
                'Text, noise, or single image'
              ],
              [
                'Output',
                'Future frames',
                'Complete video sequence'
              ],
              [
                'Goal',
                'Continue existing dynamics',
                'Create new content from scratch'
              ],
              [
                'Coherence',
                'Must match past motion',
                'Must invent consistent motion'
              ],
              [
                'Architecture',
                'ConvLSTM, PredRNN',
                'Video diffusion models, VAEs, GANs'
              ],
              [
                'Evaluation',
                'PSNR, SSIM vs ground truth',
                'FVD (Fréchet Video Distance), human preference'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using only per-pixel MSE loss for prediction (fix: add perceptual and adversarial losses; MSE alone produces blurry results because it averages plausible futures)',
            'Mistake 2: Ignoring long-term temporal dependencies (fix: use memory-augmented networks or transformer-based models that can attend to distant past frames)',
            'Mistake 3: Evaluating only on single-frame quality without temporal metrics (fix: measure FVD and temporal consistency scores; good frames can still form a jerky video)'
          ],
          code: `# WRONG: multiple t-tests without correction
for group in groups:
    ttest_ind(a, group)  # inflates Type I error

# RIGHT: one-way ANOVA + post-hoc with correction
f, p = f_oneway(*groups)
# then Tukey HSD or Bonferroni-adjusted pairs`,
          language: 'python'
        },
        {
          heading: 'Real-World Case Study',
          text: 'Video synthesis is transforming content creation and video technology.',
          list: [
            'Frame interpolation: doubling frame rate in sports broadcasts and gaming for smoother playback',
            'Text-to-video: generating marketing clips, educational animations, and movie previews from scripts',
            'Video restoration: upscaling old footage, colorizing black-and-white film, and removing artifacts',
            'Virtual production: creating synthetic training data for autonomous vehicles and robotics'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video synthesis generates or manipulates video content using deep learning',
            'Prediction forecasts future frames; generation creates video from text or images',
            'Combined loss: pixel + perceptual + adversarial for sharp, realistic results',
            'Temporal coherence is the central challenge — frames must form smooth sequences',
            'Applications: frame interpolation, text-to-video, restoration, synthetic data'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does MSE loss alone produce blurry video predictions?
Ans: Multiple plausible futures exist; MSE averages them, producing blurry results instead of committing to one sharp possibility.`,
            `Q2: What is FVD and why is it used for video generation evaluation?
Ans: Fréchet Video Distance measures distribution similarity between real and generated videos, capturing both frame quality and temporal coherence.`,
            `Q3: What is the main difference between video prediction and video generation?
Ans: Video prediction continues an existing sequence from past frames; video generation creates entirely new sequences from conditioning inputs like text or noise.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Video Synthesis</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Video Synthesis")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    }
  }
};
