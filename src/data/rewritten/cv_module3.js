export const cvModule3Structure = {
  module3: {
    title: 'Module 3: Stereo Vision, Motion & 3D Reconstruction',
    topics: [
      {
        id: 'stereo-vision-cv',
        title: 'Stereo Vision'
      },
      {
        id: 'motion-estimation-cv',
        title: 'Motion Estimation'
      },
      {
        id: 'optical-flow',
        title: 'Optical Flow'
      },
      {
        id: 'video-analysis',
        title: 'Video Analysis'
      },
      {
        id: 'action-recognition-cv',
        title: 'Action Recognition'
      },
      {
        id: 'image-stitching-cv',
        title: 'Image Stitching'
      },
      {
        id: 'panorama',
        title: 'Panoramas'
      },
      {
        id: 'photogrammetry-cv',
        title: 'Photogrammetry'
      },
      {
        id: '3d-reconstruction',
        title: '3D Reconstruction'
      },
      {
        id: 'depth-estimation-cv',
        title: 'Depth Estimation'
      }
    ]
  }
};

export const cvModule3Content = {
  module3: {
    'stereo-vision-cv': {
      title: 'Stereo Vision',
      subtitle: 'Recovering 3D structure from two or more calibrated camera views',
      sections: [
        {
          heading: 'What is Stereo Vision?',
          text: 'Stereo vision is the process of extracting 3D information about a scene from two or more 2D images taken from different viewpoints. It mimics human binocular vision — our brain infers depth by comparing the slightly different images seen by each eye. In computer vision, stereo matching algorithms compute the disparity between corresponding points in left and right images, which is inversely proportional to depth.',
          list: [
            'Disparity: the pixel shift between the same 3D point projected onto two image planes',
            'Depth is inversely proportional to disparity: closer objects have larger disparity',
            'Stereo vision requires calibrated cameras with known intrinsic and extrinsic parameters',
            'Applications include autonomous driving, robot navigation, 3D scanning, and augmented reality'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The fundamental stereo geometry relates disparity to depth through triangulation.',
          example: {
            title: 'Stereo Depth from Disparity',
            code: 'Given:\n  B = baseline distance between cameras\n  f = focal length (in pixels)\n  d = disparity (x_L - x_R) in pixels\n\nDepth Z:\n  Z = (B × f) / d\n\nExample:\n  B = 0.12 m (12 cm baseline)\n  f = 700 pixels\n  d = 35 pixels\n\n  Z = (0.12 × 700) / 35 = 2.4 meters',
            output: 'Depth is inversely proportional to disparity. Zero disparity means the point is at infinity.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Stereo matching algorithms differ in matching cost, aggregation strategy, and optimization.',
          table: {
            headers: [
              'Method',
              'Approach',
              'Speed',
              'Quality'
            ],
            rows: [["Block Matching (BM)","Fixed window SAD/SSD","Very fast","Noisy at depth boundaries"],["Semi-Global Matching (SGM)","Path-wise dynamic programming","Fast","Smooth, well-defined edges"],["Graph Cut","Global MRF optimization","Slow","Very accurate, sharp edges"],["PatchMatch Stereo","Randomized nearest neighbor","Moderate","Handles slanted surfaces"],["Deep Stereo (PSMNet)","CNN feature + 3D cost volume","Moderate","Best quality, end-to-end"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming rectified images without actual rectification (fix: perform stereo rectification so epipolar lines are horizontal, reducing search to 1D)',
            'Mistake 2: Using a single fixed window size for all regions (fix: use adaptive window sizes or cost aggregation that adjusts to local texture; small windows for edges, large for textureless regions)',
            'Mistake 3: Ignoring occlusion regions where one camera cannot see a point (fix: perform left-right consistency check and mark inconsistent pixels as invalid/occluded)',
            'Mistake 4: Computing disparity in pixels without converting to real-world depth (fix: always calibrate cameras and convert disparity maps to metric depth using Z = B×f/d)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Stereo vision is widely deployed in systems requiring real-time depth sensing.',
          list: [
            'Autonomous vehicles: stereo cameras (e.g., Mobileye, Tesla) estimate distances to pedestrians, vehicles, and lane boundaries for collision avoidance',
            'Industrial robotics: bin-picking systems use stereo depth to locate and grasp objects of varying shapes from cluttered bins',
            'Medical imaging: stereo endoscopy provides depth-enhanced visualization during minimally invasive surgery',
            '3D scene reconstruction: stereo pairs from drone imagery are used to generate dense elevation maps and 3D terrain models'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Stereo vision recovers depth by triangulating corresponding points between two calibrated views',
            'Disparity (pixel shift) is inversely proportional to depth: Z = B×f/d',
            'Epipolar geometry reduces the correspondence search from 2D to 1D after rectification',
            'SGM balances speed and quality; deep learning methods (PSMNet, GA-Net) achieve the best accuracy',
            'Always handle occlusions, textureless regions, and reflective surfaces — these are failure modes for all stereo algorithms'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does a nearby object have larger disparity than a distant one?\nAns: Nearby objects project to very different positions in left/right images; distant objects project nearly to the same position.',
            'Q2: What is the epipolar constraint and why does it matter?\nAns: The corresponding point in the second image must lie on the epipolar line, reducing search from 2D to 1D.',
            'Q3: What happens if the baseline is too large or too small?\nAns: Too small → small disparities, poor depth precision. Too large → large occluded regions and harder matching.'
          ]
        }
      ]
    },
    'motion-estimation-cv': {
      title: 'Motion Estimation',
      subtitle: 'Tracking and quantifying movement between video frames',
      sections: [
        {
          heading: 'What is Motion Estimation?',
          text: 'Motion estimation is the process of determining how image points, regions, or objects move between consecutive frames of a video sequence. It is fundamental to video compression (removing temporal redundancy), video stabilization, tracking, action recognition, and frame interpolation. Motion is typically represented as motion vectors that describe the displacement of pixels or blocks from one frame to the next.',
          list: [
            'Motion vectors describe the 2D displacement of image content between frames',
            'Block-matching is the simplest approach: find the best matching block in the next frame',
            'Parametric motion models (translation, affine, homography) describe global camera motion',
            'Motion estimation underlies MPEG/H.264 video codecs, where it achieves 100:1 compression ratios'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Block-matching algorithms minimize a matching cost to find the displacement vector.',
          example: {
            title: 'Block Matching Motion Vector',
            code: 'For a block centered at (x, y) in frame t:\n  Search in frame t+1 within a neighborhood\n\nSSD (Sum of Squared Differences):\n  MV = argmin_{(dx,dy)} Σ [I_t(x+i, y+j) - I_{t+1}(x+i+dx, y+j+dy)]²\n\nSAD (Sum of Absolute Differences):\n  MV = argmin_{(dx,dy)} Σ |I_t(x+i, y+j) - I_{t+1}(x+i+dx, y+j+dy)|\n\nTypical search range: ±16 pixels\nBlock size: 16×16 or 8×8',
            output: 'The motion vector (dx, dy) points to where the block moved in the next frame.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Motion estimation methods differ in model complexity, search strategy, and assumptions.',
          table: {
            headers: [
              'Method',
              'Model',
              'Speed',
              'Best For'
            ],
            rows: [["Block Matching (Exhaustive)","Translation only","Slow","Simple scenes, hardware encoding"],["Block Matching (Three-Step)","Translation only","Fast","Real-time video codecs"],["Optical Flow (Lucas-Kanade)","Per-pixel flow","Moderate","Small motion, dense estimation"],["Parametric (Affine/Homography)","Global transformation","Fast","Camera motion, stabilization"],["Deep Flow (FlowNet, RAFT)","CNN/Transformer","Moderate","Large motion, challenging scenes"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a fixed block size for all content types (fix: use adaptive block sizes — smaller blocks for detailed regions, larger for uniform areas; H.264 uses variable macroblock partitions)',
            'Mistake 2: Searching the full space exhaustively in high-resolution video (fix: use fast search strategies like three-step search, diamond search, or hierarchical coarse-to-fine approaches)',
            'Mistake 3: Ignoring illumination changes between frames (fix: use normalized cross-correlation (NCC) or zero-mean SAD instead of raw intensity differences)',
            'Mistake 4: Assuming all motion is purely translational (fix: for rotating or zooming cameras, estimate affine or homography parameters instead of block translations)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Motion estimation powers core functionality in video systems.',
          list: [
            'Video codecs (H.264/HEVC): motion-compensated prediction achieves massive compression by encoding only motion vectors and residual differences',
            'Video stabilization: global motion estimation compensates for camera shake, producing smooth footage from shaky sources',
            'Object tracking: motion vectors seed the search region for trackers like KCF or DeepSORT, reducing drift',
            'Slow-motion interpolation (e.g., SVP, DAIN): motion estimation synthesizes intermediate frames for smooth 60fps playback from 24fps source'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Motion estimation finds how image content displaces between consecutive video frames',
            'Block matching is the classical approach; optical flow provides dense per-pixel motion',
            'Matching cost functions include SSD, SAD, NCC, and NCC with subpixel refinement',
            'Fast search strategies (three-step, diamond, coarse-to-fine) are essential for real-time applications',
            'Modern deep methods (FlowNet, RAFT) handle large displacements and occlusions better than classical methods'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is SAD preferred over SSD in hardware video encoders?\nAns: SAD avoids multiplication (cheaper in hardware) and is more robust to outliers.',
            'Q2: What is the aperture problem in motion estimation?\nAns: A local window cannot determine motion perpendicular to an edge, only along it.',
            'Q3: How does hierarchical coarse-to-fine motion estimation work?\nAns: Estimate motion at low resolution first, then refine at progressively higher resolutions, handling large displacements efficiently.'
          ]
        }
      ]
    },
    'optical-flow': {
      title: 'Optical Flow',
      subtitle: 'Dense per-pixel motion estimation between two images',
      sections: [
        {
          heading: 'What is Optical Flow?',
          text: 'Optical flow is the apparent motion of brightness patterns in an image sequence. It assigns a 2D motion vector to every pixel (dense flow) or to a sparse set of features (sparse flow). The core assumption is brightness constancy: the intensity of a moving point remains constant between frames. This, combined with spatial coherence, allows solving for pixel velocities across the entire image.',
          list: [
            'Brightness constancy assumption: I(x, y, t) = I(x+dx, y+dy, t+dt)',
            'Optical flow is a velocity field (u, v) describing horizontal and vertical motion per pixel',
            'The problem is mathematically ill-posed (one equation, two unknowns) and requires regularization',
            'Applications include motion segmentation, video stabilization, structure from motion, and action recognition'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The optical flow constraint equation relates spatial and temporal image gradients to motion.',
          example: {
            title: 'Optical Flow Constraint Equation',
            code: 'Brightness constancy (Taylor expansion):\n  I(x+u, y+v, t+1) ≈ I(x, y, t)\n\nFirst-order approximation:\n  I_x · u + I_y · v + I_t = 0\n\nWhere:\n  I_x, I_y = spatial gradients\n  I_t      = temporal gradient (frame difference)\n  u, v     = optical flow components\n\nLucas-Kanade (local window):\n  For each pixel, solve in a neighborhood W:\n    [Σ I_x²    Σ I_x I_y] [u]   [-Σ I_x I_t]\n    [Σ I_x I_y  Σ I_y²  ] [v] = [-Σ I_y I_t]\n\n  → Solve 2×2 linear system per pixel',
            output: 'The Lucas-Kanade method solves for flow using a least-squares fit over a local window.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Optical flow algorithms differ in how they handle the aperture problem and regularization.',
          table: {
            headers: [
              'Method',
              'Regularization',
              'Output',
              'Strengths'
            ],
            rows: [["Lucas-Kanade","Local window","Sparse/dense","Fast, good for corners"],["Horn-Schunck","Global smoothness","Dense","Smooth fields, fills gaps"],["Farneback","Polynomial expansion","Dense","Subpixel accuracy, fast"],["TV-L1","Total variation","Dense","Robust to noise and occlusion"],["RAFT","Recurrent refinement","Dense","State-of-the-art accuracy"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying optical flow to large displacements without pyramid scaling (fix: use a Gaussian pyramid and estimate flow coarse-to-fine; large motions break the small-motion Taylor approximation)',
            'Mistake 2: Computing gradients without Gaussian smoothing first (fix: smooth images before computing derivatives; noisy gradients produce unreliable flow estimates)',
            'Mistake 3: Assuming brightness constancy holds for all scenes (fix: use illumination-robust variants or feature-based flow for scenes with lighting changes)',
            'Mistake 4: Trusting flow estimates in textureless regions (fix: the aperture problem makes flow unreliable along edges and impossible in uniform regions; use confidence measures or edge-aware regularization)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Optical flow is essential for understanding dynamic scenes.',
          list: [
            'Autonomous driving: optical flow helps detect moving pedestrians and vehicles independently of camera motion, feeding into collision warning systems',
            'Video frame interpolation: optical flow warps adjacent frames to synthesize intermediate frames for smooth slow-motion playback',
            'Motion segmentation: clustering pixels by similar flow vectors separates independently moving objects from the background',
            'Medical imaging: cardiac ultrasound optical flow measures blood velocity and wall motion for cardiac function assessment'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Optical flow computes a dense 2D velocity field from the brightness constancy assumption',
            'The optical flow constraint I_x·u + I_y·v + I_t = 0 is ill-posed (one equation, two unknowns)',
            'Lucas-Kanade solves locally (good at corners); Horn-Schunck adds global smoothness (dense fields)',
            'Use Gaussian pyramids for large displacements; always smooth before computing derivatives',
            'RAFT and PWC-Net achieve state-of-the-art results by learning feature correlation and iterative refinement'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is optical flow estimation ill-posed?\nAns: The brightness constancy equation gives one constraint but two unknowns (u, v) — the aperture problem.',
            'Q2: When does Lucas-Kanade fail to produce reliable flow?\nAns: In textureless regions or along straight edges where the local gradient matrix is rank-deficient.',
            'Q3: How do modern deep optical flow methods (RAFT) differ from classical approaches?\nAns: They learn feature representations and correlation volumes, then iteratively refine flow using a recurrent network.'
          ]
        }
      ]
    },
    'video-analysis': {
      title: 'Video Analysis',
      subtitle: 'Extracting meaning and structure from temporal visual sequences',
      sections: [
        {
          heading: 'What is Video Analysis?',
          text: 'Video analysis encompasses the algorithms and systems that interpret, summarize, and understand video content. Unlike image analysis which processes a single frame, video analysis leverages temporal continuity — objects persist across frames, motion reveals dynamics, and events unfold over time. Core tasks include shot boundary detection, object tracking, activity recognition, video summarization, and anomaly detection.',
          list: [
            'Temporal coherence: objects and scenes persist across frames, enabling tracking and motion analysis',
            'Video is high-dimensional: a 1080p 30fps video has 62 million pixels per second',
            'Spatio-temporal features combine appearance (space) with dynamics (time) for richer representations',
            'Applications include surveillance, sports analytics, content moderation, and autonomous navigation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Shot boundary detection uses frame difference metrics to identify cuts and transitions.',
          example: {
            title: 'Shot Boundary Detection',
            code: 'Inter-frame difference metrics:\n\nPixel difference:\n  D_t = Σ |I_t(x,y) - I_{t+1}(x,y)|\n\nHistogram difference:\n  D_t = Σ |H_t(b) - H_{t+1}(b)|\n  (more robust to motion than pixel diff)\n\nThreshold:\n  If D_t > τ × median(D) → CUT detected\n\nGradual transitions (fade/dissolve):\n  Detect by sustained elevated difference\n  over multiple frames',
            output: 'Histogram difference is more robust to local motion than raw pixel comparison.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Video analysis tasks differ in granularity and the temporal scope they analyze.',
          table: {
            headers: [
              'Task',
              'Temporal Scope',
              'Output',
              'Example Method'
            ],
            rows: [["Shot Detection","1–2 frames","Shot boundaries","Histogram difference"],["Object Tracking","Entire sequence","Per-frame bounding boxes","DeepSORT, KCF"],["Action Recognition","Clip (seconds)","Activity class","I3D, TimeSformer"],["Video Summarization","Full video","Key frames / highlights","Attention-based scoring"],["Anomaly Detection","Streaming","Anomaly score","Autoencoder on spatio-temporal cubes"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating video as independent frames without exploiting temporal redundancy (fix: use temporal convolutions, optical flow, or recurrent models to capture motion and temporal context)',
            'Mistake 2: Using spatial-only CNN features for action recognition (fix: use 3D convolutions (I3D, C3D) or two-stream networks that combine RGB appearance with optical flow motion)',
            'Mistake 3: Ignoring computational cost of processing full-resolution video (fix: sample key frames, use sparse frame sampling, or employ efficient architectures like X3D and MoViNet)',
            'Mistake 4: Evaluating tracking by only looking at detection accuracy, not identity consistency (fix: use MOTA and MOTP metrics that penalize identity switches and track fragmentation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Video analysis powers industries that depend on understanding dynamic visual data.',
          list: [
            'Smart surveillance: real-time anomaly detection flags unattended bags, crowd stampedes, or perimeter breaches without human monitoring',
            'Sports analytics: player and ball tracking generates heat maps, pass networks, and tactical insights for coaching decisions',
            'Video content moderation: automated systems detect violence, inappropriate content, or copyrighted material in uploaded videos',
            'Retail analytics: in-store camera video analysis tracks customer flow, dwell time, and queue length to optimize store layout and staffing'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video analysis leverages temporal continuity to understand dynamic scenes beyond what single frames reveal',
            'Shot detection uses frame/histogram differences; tracking uses appearance + motion models',
            '3D CNNs and two-stream networks are the dominant architectures for action recognition',
            'Always consider computational cost — full-resolution 30fps video is extremely data-intensive',
            'Modern methods (TimeSformer, Video Swin Transformer) use attention over space-time tokens for efficient long-range modeling'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is histogram difference preferred over pixel difference for shot detection?\nAns: Local motion changes pixel values but preserves the color distribution; histograms are robust to motion within a shot.',
            'Q2: What does a two-stream network process in action recognition?\nAns: One stream processes RGB frames (appearance), the other processes optical flow (motion); their features are fused for classification.',
            'Q3: What is the difference between online and offline tracking?\nAns: Online tracking processes frames sequentially (real-time); offline tracking uses future frames for stronger associations (higher accuracy, non-real-time).'
          ]
        }
      ]
    },
    'action-recognition-cv': {
      title: 'Action Recognition',
      subtitle: 'Classifying human activities and movements in video',
      sections: [
        {
          heading: 'What is Action Recognition?',
          text: 'Action recognition is the task of classifying what activity a person or group is performing in a video clip. Unlike image classification which predicts a static label, action recognition must model temporal dynamics — the sequence of poses and movements that define an action. It bridges computer vision and video understanding, with applications ranging from surveillance and sports analytics to human-robot interaction and video retrieval.',
          list: [
            'Actions are defined by temporal evolution: the same pose at different times can belong to different actions',
            'Challenges include viewpoint variation, occlusions, background clutter, and intra-class variability',
            'Datasets like Kinetics, UCF-101, and HMDB-51 provide labeled video clips for training and benchmarking',
            'Applications include video search, surveillance alerts, assisted living, and sports coaching'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The two-stream network fuses spatial appearance and temporal motion for action classification.',
          example: {
            title: 'Two-Stream Action Recognition',
            code: 'Spatial stream (RGB):\n  f_spatial = CNN(I_RGB) → class scores\n\nTemporal stream (optical flow):\n  f_temporal = CNN(I_flow) → class scores\n\nLate fusion (average):\n  P(action) = softmax(α·f_spatial + β·f_temporal)\n\nExample scores for \'running\':\n  Spatial:  [0.6, 0.2, 0.2]  (running, walking, standing)\n  Temporal: [0.9, 0.05, 0.05] (high motion → running)\n  \n  Fused:    [0.75, 0.125, 0.125] → predict \'running\'',
            output: 'Combining appearance and motion significantly improves action recognition accuracy.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Action recognition architectures differ in how they model spatial and temporal information.',
          table: {
            headers: [
              'Architecture',
              'Spatial Model',
              'Temporal Model',
              'Strengths'
            ],
            rows: [["Two-Stream (Simonyan)","2D CNN on RGB","2D CNN on optical flow","Simple, effective baseline"],["C3D / I3D","3D convolutions","3D convolutions","Joint spatio-temporal learning"],["LSTM + CNN","2D CNN per frame","LSTM over frame features","Captures long-range order"],["TimeSformer","ViT patches","Time attention","Efficient, long-range temporal"],["SlowFast","Slow path (spatial)","Fast path (motion)","Best speed/accuracy trade-off"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training on full video clips without considering temporal redundancy (fix: use sparse temporal sampling — e.g., sample 8 frames uniformly from a clip rather than processing all 300 frames)',
            'Mistake 2: Using optical flow pre-computed at low resolution (fix: optical flow quality matters; compute at reasonable resolution or use end-to-end learned motion features instead)',
            'Mistake 3: Ignoring the difference between action classification and temporal action detection (fix: classification assumes a pre-segmented clip; temporal detection localizes action boundaries in untrimmed video and requires different architectures)',
            'Mistake 4: Evaluating only on top-1 accuracy without considering class imbalance (fix: report per-class metrics, confusion matrices, and balanced accuracy for datasets with imbalanced action categories)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Action recognition enables systems to understand and respond to human behavior.',
          list: [
            'Elderly care monitoring: fall detection systems recognize sudden collapse motions and alert caregivers in assisted living facilities',
            'Sports broadcasting: automatic highlight generation by recognizing goals, slam dunks, and celebrations from live game footage',
            'Security screening: action recognition in CCTV identifies suspicious behaviors like loitering, fighting, or abandoned objects',
            'Fitness apps: smartphone cameras count reps, assess form, and provide real-time coaching feedback by recognizing exercise actions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Action recognition classifies activities by modeling both spatial appearance and temporal dynamics',
            'Two-stream networks fuse RGB and optical flow; 3D CNNs (I3D, C3D) learn spatio-temporal features jointly',
            'Temporal sampling is crucial — processing every frame is computationally wasteful and often unnecessary',
            'Distinguish between clip-level classification and temporal action detection in untrimmed videos',
            'Modern architectures (TimeSformer, SlowFast) use attention or multi-path designs for efficient, accurate recognition'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does the temporal stream use optical flow instead of raw frame differences?\nAns: Optical flow encodes motion direction and magnitude, providing a more structured motion representation than simple frame differencing.',
            'Q2: What is the advantage of 3D convolutions over 2D convolutions + LSTM for action recognition?\nAns: 3D convolutions jointly model space and time at every layer, learning motion patterns directly from pixels rather than treating space and time separately.',
            'Q3: How does SlowFast achieve both accuracy and efficiency?\nAns: It uses a slow path (fewer frames, high spatial detail) for semantics and a fast path (more frames, low detail) for motion, fusing them efficiently.'
          ]
        }
      ]
    },
    'image-stitching-cv': {
      title: 'Image Stitching',
      subtitle: 'Combining overlapping images into seamless wide-angle composites',
      sections: [
        {
          heading: 'What is Image Stitching?',
          text: 'Image stitching (or image mosaicing) is the process of combining multiple overlapping photographs into a single seamless composite with a wider field of view. It is the core technology behind panorama creation, satellite imagery composition, and medical image registration. The pipeline typically involves feature detection, matching, geometric transformation estimation (homography), warping, and blending to hide seams.',
          list: [
            'Stitching requires sufficient overlap (typically 20–40%) between adjacent images for feature matching',
            'A homography maps points between two planar views of the same scene taken from different angles',
            'For scenes with depth variation, a homography is only approximate; cylindrical/spherical projections or multi-plane methods improve results',
            'Applications include panorama apps, aerial mapping, 360° virtual tours, and microscopy tiling'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The homography matrix H relates corresponding points between two views of a planar scene.',
          example: {
            title: 'Homography Transformation',
            code: 'Point correspondence:\n  p\' = H · p\n\nIn homogeneous coordinates:\n  [x\']   [h11 h12 h13] [x]\n  [y\'] = [h21 h22 h23] [y]\n  [w ]   [h31 h32 h33] [1]\n\nNormalized image coordinates:\n  x\'_norm = x\' / w,  y\'_norm = y\' / w\n\nEstimation:\n  Each correspondence gives 2 equations\n  4 correspondences → solve for 8 DOF of H\n  (h33 = 1 for normalized homography)',
            output: 'A homography is a 3×3 matrix with 8 degrees of freedom that maps one image plane to another.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Stitching methods differ in projection model and alignment strategy.',
          table: {
            headers: [
              'Projection',
              'Geometry',
              'Best For',
              'Limitation'
            ],
            rows: [["Planar (Homography)","Flat plane","Small rotation, distant scenes","Parallax errors for depth"],["Cylindrical","Cylinder surface","Horizontal panoramas","No vertical tilt support"],["Spherical","Sphere surface","360° panoramas","Complex warp, distortions"],["Parallax-Tolerant","Multi-plane or mesh warp","Scenes with depth","More complex, slower"],["Deep Stitching","Learned alignment","General scenes","Requires training data"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Estimating homography from only 3 or fewer correspondences (fix: homography has 8 DOF, requiring at least 4 point pairs; use RANSAC to robustly estimate H from many correspondences while rejecting outliers)',
            'Mistake 2: Assuming all scenes are planar when stitching (fix: for scenes with depth, use cylindrical/spherical projection or parallax-tolerant stitching with local alignment and seam carving)',
            'Mistake 3: Not blending images at the seam, causing visible brightness or color discontinuities (fix: use multi-band blending or Laplacian pyramid blending to smooth transitions across frequency bands)',
            'Mistake 4: Stitching images with insufficient overlap (fix: ensure at least 20–30% overlap; less overlap leads to poor feature matching and unstable homography estimation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Image stitching is ubiquitous in photography, mapping, and medical imaging.',
          list: [
            'Smartphone panorama mode: devices automatically detect motion direction, capture overlapping frames, and stitch them into wide or spherical panoramas',
            'Satellite/aerial imagery: orthophoto mosaics stitch hundreds of overlapping drone or satellite images into seamless geographic maps',
            'Medical imaging: whole-slide imaging in pathology stitches thousands of microscope tiles into a single high-resolution image for diagnosis',
            'Virtual tours: real estate and tourism platforms use spherical stitching to create immersive 360° indoor and outdoor experiences'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image stitching combines overlapping photos into a wide-field composite via feature matching and geometric warping',
            'A homography (8 DOF) aligns planar scenes; cylindrical/spherical projections handle wider panoramas',
            'RANSAC robustly estimates transformations from noisy feature correspondences',
            'Blending (multi-band, Laplacian pyramid) hides seams by smoothing intensity and color transitions',
            'Depth variation causes parallax — use parallax-tolerant methods or spherical projection for best results'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does a homography fail for scenes with significant depth variation?\nAns: A homography assumes all points lie on a single plane or that the camera rotates about its optical center; depth variation violates this assumption.',
            'Q2: How many point correspondences are needed to estimate a homography, and why use more?\nAns: 4 pairs (8 DOF); using more with RANSAC provides robustness against outlier matches.',
            'Q3: What is the purpose of multi-band blending in stitching?\nAns: It blends low frequencies over a wide region and high frequencies near the seam, hiding both color and detail discontinuities.'
          ]
        }
      ]
    },
    'panorama': {
      title: 'Panoramas',
      subtitle: 'Creating immersive wide-angle and spherical views from multiple images',
      sections: [
        {
          heading: 'What is a Panorama?',
          text: 'A panorama is a wide-angle image created by stitching together multiple overlapping photographs. Panoramas can span from simple wide horizontal views to full spherical (360°) environments. The key challenge is projecting images onto a common surface (cylinder or sphere) while maintaining geometric and photometric consistency across seams.',
          list: [
            'Cylindrical panoramas: images projected onto a cylinder; good for horizontal sweeps',
            'Spherical panoramas: images projected onto a sphere; full 360° × 180° coverage',
            'The projection surface determines how straight lines and shapes are warped',
            'Viewers include scrollable web viewers, VR headsets, and planetarium dome projection'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cylindrical projection maps image pixels to a cylinder aligned with the camera\'s rotation axis.',
          example: {
            title: 'Cylindrical Projection',
            code: 'For a point (x, y) in image coordinates:\n  θ = (x - x₀) / f    (horizontal angle)\n  h = (y - y₀) / f    (vertical angle)\n\nCylindrical coordinates:\n  X_cyl = sin(θ)\n  Y_cyl = h\n  Z_cyl = cos(θ)\n\nProject to cylindrical surface:\n  x\' = f · tan(θ) + x₀\n  y\' = f · h / cos(θ) + y₀\n\nSpherical projection:\n  x\' = f · θ · cos(φ) + x₀\n  y\' = f · φ + y₀\n  where φ = arcsin(h / √(h²+1))',
            output: 'Cylindrical projection preserves vertical lines but bends horizontal lines into arcs.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Panorama types differ in projection geometry and field of view.',
          table: {
            headers: [
              'Type',
              'Projection Surface',
              'FOV',
              'Best Use Case'
            ],
            rows: [["Planar (Flat)","Plane","< 120°","Simple wide shots"],["Cylindrical","Cylinder","360° horizontal","Horizontal landscapes"],["Spherical","Sphere","360° × 180°","VR, virtual tours"],["Stereographic","Sphere → plane","360°","Little planet effect"],["Mercator","Cylinder","360° horizontal","Web maps, wide prints"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Stitching images taken from different viewpoints without parallax compensation (fix: capture images by rotating the camera around its nodal point; use a tripod and panoramic head to eliminate parallax)',
            'Mistake 2: Using planar projection for very wide panoramas (fix: planar projection causes extreme stretching beyond ~120°; switch to cylindrical or spherical projection for wide fields of view)',
            'Mistake 3: Ignoring vignetting and exposure differences between source images (fix: apply vignetting correction and exposure compensation before blending; use gain compensation or multi-band blending)',
            'Mistake 4: Creating panoramas from images with moving objects at seams (fix: use seam finding algorithms that avoid cutting through moving objects; or mask out dynamic regions during blending)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Panoramas are central to immersive imaging and mapping.',
          list: [
            'Google Street View: spherical panoramas captured by car-mounted cameras provide street-level 360° imagery worldwide',
            'Real estate virtual tours: Matterport and similar platforms use spherical panoramas to create walkable 3D property tours',
            'Astronomy: panoramic mosaics from telescopes (e.g., Hubble, Pan-STARRS) create ultra-wide sky surveys for research',
            'Event photography: gigapixel panoramas capture entire stadium crowds or festival grounds in explorable detail'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Panoramas stitch multiple images onto a common projection surface: planar, cylindrical, or spherical',
            'Cylindrical projection is ideal for horizontal sweeps; spherical provides full 360° × 180° immersive views',
            'Rotate around the camera nodal point to eliminate parallax between overlapping images',
            'Multi-band blending and seam finding are essential for hiding photometric and geometric discontinuities',
            'Exposure compensation and vignetting correction must be applied before or during stitching'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is the nodal point important when capturing panorama source images?\nAns: Rotating around the nodal point ensures the same optical ray passes through the same scene point, eliminating parallax between frames.',
            'Q2: What visual artifact appears if you use planar projection for a 180° panorama?\nAns: Extreme stretching and distortion at the edges; horizontal lines bend dramatically and resolution becomes non-uniform.',
            'Q3: How does spherical projection differ from cylindrical projection?\nAns: Spherical maps both horizontal and vertical angles to a sphere; cylindrical only maps horizontal angles, keeping vertical lines straight.'
          ]
        }
      ]
    },
    'photogrammetry-cv': {
      title: 'Photogrammetry',
      subtitle: 'Deriving precise 3D measurements from photographs',
      sections: [
        {
          heading: 'What is Photogrammetry?',
          text: 'Photogrammetry is the science of making measurements from photographs. It reconstructs the 3D geometry of objects, terrain, and structures from 2D images by exploiting geometric relationships between camera positions, image projections, and real-world points. Unlike general 3D reconstruction, photogrammetry emphasizes metric accuracy — producing models with real-world scale and precise measurements.',
          list: [
            'Photogrammetry recovers both shape and scale when camera calibration and baseline are known',
            'It requires overlapping images with known or recoverable camera poses',
            'Key outputs include dense point clouds, digital elevation models (DEMs), orthophotos, and 3D meshes',
            'Applications include surveying, archaeology, construction monitoring, accident reconstruction, and heritage preservation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The collinearity equation states that an image point, the camera center, and the corresponding 3D point are collinear.',
          example: {
            title: 'Collinearity Equation',
            code: '3D point (X, Y, Z) projects to image (x, y):\n\n  x - x₀ = -f · [r11(X-Xc) + r12(Y-Yc) + r13(Z-Zc)]\n              ───────────────────────────────────────\n              [r31(X-Xc) + r32(Y-Yc) + r33(Z-Zc)]\n\n  y - y₀ = -f · [r21(X-Xc) + r22(Y-Yc) + r23(Z-Zc)]\n              ───────────────────────────────────────\n              [r31(X-Xc) + r32(Y-Yc) + r33(Z-Zc)]\n\nWhere:\n  (Xc, Yc, Zc) = camera center\n  f = focal length\n  r_ij = rotation matrix elements\n  (x₀, y₀) = principal point',
            output: 'The collinearity equation is the mathematical foundation of all photogrammetric reconstruction.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Photogrammetry approaches differ in camera configuration and output precision.',
          table: {
            headers: [
              'Type',
              'Camera Setup',
              'Output',
              'Accuracy'
            ],
            rows: [["Aerial / UAV","Drone with GPS/IMU","DEM, orthophoto","1–5 cm GSD"],["Close-range","Tripod, targets","3D model, measurements","Sub-millimeter"],["Terrestrial","Ground-based multiple views","Building facade, terrain","Millimeter to centimeter"],["Satellite","Pushbroom / frame sensor","Global DEM, mapping","Meters to sub-meter"],["Mobile","Handheld / smartphone","Casual 3D scanning","Centimeter to decimeter"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using uncalibrated cameras for metric photogrammetry (fix: calibrate cameras to determine focal length, principal point, and lens distortion; use checkerboard or 3D calibration targets)',
            'Mistake 2: Capturing images with insufficient overlap or poor geometry (fix: maintain 60–80% forward overlap and 30–60% side overlap; ensure convergent viewing angles for strong triangulation geometry)',
            'Mistake 3: Ignoring lens distortion in wide-angle or fisheye lenses (fix: model radial (k1, k2, k3) and tangential distortion; undistort images before feature matching and triangulation)',
            'Mistake 4: Trusting scale-free SfM output without ground control (fix: add ground control points (GCPs) with known coordinates or use a scale bar to georeference and scale the reconstruction to real-world units)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Photogrammetry delivers precise 3D data across industries.',
          list: [
            'Construction monitoring: weekly drone photogrammetry surveys track earthwork volumes, compare as-built progress to BIM models, and detect deviations',
            'Archaeology: close-range photogrammetry creates millimeter-accurate 3D models of artifacts and excavation sites for digital preservation and remote study',
            'Forensics: accident scene photogrammetry from photographs reconstructs vehicle positions, skid marks, and impact points for legal analysis',
            'Mining: aerial photogrammetry generates stockpile volume calculations and pit progression maps with centimeter-level accuracy'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Photogrammetry derives precise 3D measurements from 2D images using geometric projection principles',
            'The collinearity equation relates image points, camera pose, and 3D world points',
            'Camera calibration (intrinsics + distortion) and good imaging geometry (overlap, baseline) are essential for accuracy',
            'Ground control points or scale bars are required to convert reconstructions from arbitrary units to metric coordinates',
            'Modern pipelines (Pix4D, Metashape, OpenDroneMap) automate the full photogrammetric workflow'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why are ground control points (GCPs) necessary in aerial photogrammetry?\nAns: SfM reconstructs up to a similarity transform; GCPs provide absolute scale and georeferencing to real-world coordinates.',
            'Q2: What is the ideal overlap percentage for aerial photogrammetry?\nAns: 60–80% forward overlap and 30–60% side overlap ensures every point is seen in multiple images with strong triangulation geometry.',
            'Q3: How does lens distortion affect photogrammetric accuracy?\nAns: Uncorrected radial distortion shifts image points away from their true projection rays, introducing systematic errors in triangulated 3D positions.'
          ]
        }
      ]
    },
    '3d-reconstruction': {
      title: '3D Reconstruction',
      subtitle: 'Recovering three-dimensional structure from two-dimensional images',
      sections: [
        {
          heading: 'What is 3D Reconstruction?',
          text: '3D reconstruction is the process of inferring the three-dimensional geometry of a scene or object from one or more 2D images. It bridges the gap between the 2D image plane and the 3D world, enabling applications in virtual reality, robotics, heritage digitization, and industrial inspection. Methods range from multi-view stereo (MVS) and structure from motion (SfM) to monocular depth estimation and neural radiance fields (NeRF).',
          list: [
            'Multi-view stereo (MVS) reconstructs dense geometry from many calibrated views',
            'Structure from motion (SfM) recovers camera poses and sparse structure simultaneously from unordered images',
            'Monocular methods infer depth from a single image using learned priors or shading cues',
            'NeRF and Gaussian Splatting represent scenes as differentiable volumetric functions for novel view synthesis'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Triangulation recovers a 3D point from its projections in two calibrated camera views.',
          example: {
            title: 'Linear Triangulation',
            code: 'Given two cameras with projection matrices P1, P2:\n  P1 = K1 [R1 | t1]\n  P2 = K2 [R2 | t2]\n\nFor corresponding points x1 ↔ x2:\n  x1 × (P1 · X) = 0\n  x2 × (P2 · X) = 0\n\nThis gives 4 linear equations in 3 unknowns.\nSolve using SVD for least-squares optimal X.\n\nReprojection error:\n  e = ||x1 - π(P1·X)||² + ||x2 - π(P2·X)||²\n\nWhere π() = perspective division (X/Z, Y/Z)',
            output: 'Triangulation finds the 3D point that best explains both image observations.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: '3D reconstruction methods differ in input requirements, density, and accuracy.',
          table: {
            headers: [
              'Method',
              'Input',
              'Output',
              'Accuracy',
              'Speed'
            ],
            rows: [["SfM (Sparse)","Unordered photos","Sparse point cloud + poses","Pixel-level","Minutes–hours"],["MVS (Dense)","SfM output + images","Dense point cloud / mesh","Sub-pixel","Hours"],["Monocular Depth","Single image","Depth map","Relative","Real-time"],["NeRF","Many posed images","Radiance field","View-accurate","Hours training"],["Gaussian Splatting","Many posed images","3D Gaussians","View-accurate","Minutes"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Attempting dense reconstruction with only 2–3 images (fix: MVS requires many views (20–100+) with good baseline and overlap; for few images, use stereo methods or photometric stereo instead)',
            'Mistake 2: Ignoring camera calibration in SfM/MVS pipelines (fix: always calibrate intrinsics or let SfM optimize them jointly; uncalibrated reconstruction is only projective, not metric)',
            'Mistake 3: Using triangulation without checking reprojection error (fix: large reprojection errors indicate bad correspondences; filter points with error above 1–2 pixels and run bundle adjustment)',
            'Mistake 4: Treating monocular depth predictions as metric measurements (fix: monocular depth (MiDaS, DPT) produces relative/ordinal depth; scale must be determined from external references or stereo baseline)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: '3D reconstruction enables digital twins and spatial understanding at scale.',
          list: [
            'Cultural heritage: the Google Arts Project and museum partners use photogrammetry and NeRF to create explorable 3D models of sculptures, buildings, and archaeological sites',
            'Autonomous vehicles: multi-camera MVS reconstructs surrounding traffic and road geometry for path planning and collision avoidance',
            'Medical imaging: 3D reconstruction from CT/MRI slices or endoscopic video aids surgical planning and volumetric measurement',
            'E-commerce: neural reconstruction from a few product photos generates interactive 3D models for online retail catalogs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            '3D reconstruction recovers scene geometry from 2D images via triangulation, stereo, or learned priors',
            'SfM recovers sparse structure and camera poses from unordered images; MVS densifies into point clouds and meshes',
            'Triangulation requires calibrated cameras and corresponding points; bundle adjustment refines everything jointly',
            'Monocular depth estimation provides dense depth from a single image but only up to an unknown scale',
            'NeRF and Gaussian Splatting represent scenes implicitly for photorealistic novel view synthesis'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does SfM output only a sparse point cloud, and how is densification achieved?\nAns: SfM matches features (corners, blobs) which are sparse; MVS densifies by matching patches densely across all views.',
            'Q2: What is the ambiguity in uncalibrated structure from motion?\nAns: Without known intrinsics, reconstruction is only up to a projective transformation; metric structure requires calibration or self-calibration.',
            'Q3: What is the key advantage of Gaussian Splatting over NeRF?\nAns: Gaussian Splatting renders in real time (100+ fps) by rasterizing 3D Gaussians, while NeRF requires costly volume rendering per ray.'
          ]
        }
      ]
    },
    'depth-estimation-cv': {
      title: 'Depth Estimation',
      subtitle: 'Inferring distance from camera for every pixel in a scene',
      sections: [
        {
          heading: 'What is Depth Estimation?',
          text: 'Depth estimation is the task of predicting the distance from the camera to each point in a scene, producing a depth map where each pixel value represents depth. Methods range from active sensing (LiDAR, structured light) to passive stereo and monocular inference. Deep learning has transformed monocular depth estimation, enabling dense, real-time depth prediction from a single RGB image — a fundamentally ill-posed problem that humans solve effortlessly using scene priors.',
          list: [
            'Stereo depth uses triangulation from two views; monocular depth relies on learned size, perspective, and occlusion cues',
            'Depth maps can be metric (absolute meters) or relative (ordinal up to scale)',
            'Active sensors (LiDAR, ToF) measure depth directly but are expensive and have limited resolution',
            'Applications include autonomous driving, AR occlusion, portrait mode photography, and robot navigation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'For stereo depth, disparity and depth are inversely related. For monocular depth, neural networks learn a scale-invariant loss.',
          example: {
            title: 'Scale-Invariant Depth Loss',
            code: 'Given predicted depth d and ground truth d*:\n\nScale-invariant MSE:\n  L = (1/n) Σ (log(d_i) - log(d*_i))²\n      - λ · [(1/n) Σ (log(d_i) - log(d*_i))]²\n\nThe second term removes the global scale ambiguity,\npenalizing only the relative depth errors.\n\nFor stereo:\n  Z = (B × f) / d\n\nFor monocular (MiDaS-style):\n  Output is relative depth (inverse depth)\n  d_pred = 1 / network_output',
            output: 'Scale-invariant loss lets monocular networks learn from unscaled depth datasets.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Depth estimation methods differ in sensors, output type, and assumptions.',
          table: {
            headers: [
              'Method',
              'Input',
              'Output',
              'Strengths',
              'Weaknesses'
            ],
            rows: [["Stereo Matching","Two RGB images","Metric depth","Accurate, metric","Requires baseline, struggles with textureless regions"],["Structure Light","Projector + camera","Metric depth","Very accurate indoors","Outdoor interference, limited range"],["LiDAR / ToF","Active laser pulse","Metric depth","Long range, accurate","Sparse, expensive, interference"],["Monocular CNN","Single RGB image","Relative/metric","Any camera, dense","Scale ambiguity, less accurate"],["Multi-view Stereo","Many images","Metric depth","Dense, accurate","Requires many views, slow"]]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using monocular depth predictions as absolute metric depth without scaling (fix: monocular depth is relative — scale it using a known distance, IMU, or stereo baseline; or use metric-depth-specific models like ZoeDepth)',
            'Mistake 2: Evaluating depth with pixel-wise MSE alone (fix: use multiple metrics: RMSE, log RMSE, δ-threshold (fraction of pixels within 1.25×, 1.25²×, 1.25³× of ground truth), and edge accuracy)',
            'Mistake 3: Assuming stereo depth works on textureless surfaces (fix: textureless walls, glass, and reflective surfaces produce no features for matching; use structured light, ToF, or learned stereo for these cases)',
            'Mistake 4: Ignoring depth discontinuities when post-processing (fix: apply edge-aware filtering like guided filtering or bilateral filtering to preserve sharp depth edges at object boundaries)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Depth estimation is foundational for spatial computing and autonomous systems.',
          list: [
            'Smartphone portrait mode: dual-camera stereo or monocular depth estimation blurs the background while keeping the subject sharp',
            'Autonomous driving: stereo cameras combined with LiDAR provide dense depth for obstacle detection, free space estimation, and path planning',
            'AR occlusion: real-time depth estimation lets virtual objects pass behind real furniture and people, enhancing immersion',
            'Agriculture: drone-based depth and height estimation creates crop growth maps and detects irrigation irregularities'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Depth estimation predicts per-pixel distance from the camera to scene surfaces',
            'Stereo depth is metric and geometrically principled but requires calibrated camera pairs',
            'Monocular depth uses learned scene priors but is scale-ambiguous; metric models (ZoeDepth) address this with fine-tuning',
            'Active sensors (LiDAR, ToF) provide accurate metric depth but are sparse or expensive',
            'Depth evaluation should use scale-invariant metrics (δ-threshold, log RMSE) rather than raw MSE'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is monocular depth estimation fundamentally ambiguous?\nAns: A single 2D image can correspond to infinitely many 3D scenes; networks resolve ambiguity by learning statistical scene priors from training data.',
            'Q2: What does the δ < 1.25 metric mean in depth evaluation?\nAns: It measures the fraction of pixels where the predicted depth is within 25% of the ground truth — a threshold-based accuracy measure.',
            'Q3: How do modern monocular depth models (ZoeDepth) achieve metric predictions?\nAns: They combine relative depth pre-training on diverse data with metric fine-tuning on datasets with absolute depth labels, learning an adaptive scale factor.'
          ]
        }
      ]
    }
  }
};
