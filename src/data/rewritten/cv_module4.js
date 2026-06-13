export const cvModule4Structure = {
  module4: {
    title: 'Module 4: 3D Vision & Applications',
    topics: [
      { id: 'camera-calibration', title: 'Camera Calibration' },
      { id: 'epipolar-geometry', title: 'Epipolar Geometry' },
      { id: 'structure-from-motion', title: 'Structure from Motion' },
      { id: 'slam', title: 'SLAM' },
      { id: 'visual-odometry', title: 'Visual Odometry' },
      { id: 'augmented-reality', title: 'Augmented Reality' },
      { id: 'autonomous-driving', title: 'Autonomous Driving' },
      { id: 'medical-imaging-cv', title: 'Medical Imaging' },
    ]
  }
};

export const cvModule4Content = {
  module4: {
    'camera-calibration': {
      title: 'Camera Calibration',
      subtitle: 'Mapping pixels to real-world coordinates',
      sections: [
        {
          heading: 'What is Camera Calibration?',
          text: '<strong>Camera calibration</strong> is the process of estimating the parameters of a camera so that 3D world points can be accurately projected into 2D image pixels. Every camera introduces distortion and has intrinsic properties that must be modeled for precise measurement.',
          list: [
            'Intrinsic parameters: focal length, principal point, skew, and pixel aspect ratio',
            'Extrinsic parameters: camera position (translation) and orientation (rotation) in world coordinates',
            'Lens distortion: radial distortion (barrel/pincushion) and tangential distortion (decentering)',
            'Calibration enables accurate 3D reconstruction, measurement, and augmented reality overlay',
            'Common targets: checkerboard patterns, CharuCo boards, and circular dot grids'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The camera projection equation maps 3D world coordinates to 2D image coordinates through intrinsics, extrinsics, and distortion.',
          example: {
            title: 'Example: Pinhole Camera Model',
            code: "World point: X = [X, Y, Z, 1]ᵀ\n\nProjection pipeline:\n  1. Extrinsic transform (world → camera):\n     X_cam = [R | t] · X\n\n  2. Perspective projection:\n     x = X_cam / Z_cam\n     y = Y_cam / Z_cam\n\n  3. Intrinsic mapping (camera → pixel):\n     u = fx · x + cx\n     v = fy · y + cy\n\nMatrix form:\n  [u]   [fx  s  cx]   [R | t]   [X]\n  [v] = [ 0  fy cy] · [0 0 0 1] · [Y]\n  [1]   [ 0  0  1 ]             [Z]\n                                    [1]\n\nRadial distortion correction:\n  x_dist = x · (1 + k1·r² + k2·r⁴ + k3·r⁶)\n  y_dist = y · (1 + k1·r² + k2·r⁴ + k3·r⁶)",
            output: 'Calibration solves for fx, fy, cx, cy, k1, k2, k3, plus R and t for each view.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Understanding different calibration approaches and parameters.',
          table: {
            headers: ['Aspect', 'Intrinsic Calibration', 'Extrinsic Calibration', 'Self-Calibration'],
            rows: [
              ['What', 'Camera internal parameters', 'Camera pose in world', 'Intrinsics from images alone'],
              ['Input', 'Known calibration target', 'Known 3D world points', 'Image sequence + motion'],
              ['Output', 'K matrix + distortion coeffs', 'R, t for each view', 'K matrix (approximate)'],
              ['Accuracy', 'Very high (<0.1 pixel)', 'Depends on intrinsics', 'Moderate'],
              ['Method', 'Zhang, Tsai', 'PnP, DLT', 'Kruppa equations, absolute quadric'],
              ['Use case', 'Measurement, AR, robotics', 'Localization, mapping', 'Casual 3D reconstruction']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring lens distortion for wide-angle or fisheye lenses (fix: always model radial distortion; uncorrected wide-angle images produce significant errors at image edges)',
            'Mistake 2: Using too few calibration images or poor pose variety (fix: capture 10-20 images with the target at different angles, distances, and positions across the frame)',
            'Mistake 3: Assuming square pixels (fx = fy) without verification (fix: most sensors have near-square pixels, but verify from manufacturer specs or calibrate both independently)',
            'Mistake 4: Calibrating once and assuming permanence (fix: recalibrate after lens changes, temperature shifts, or mechanical shocks — intrinsics can drift)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Camera calibration is foundational for any system that bridges the physical and visual worlds.',
          list: [
            'Industrial measurement: calibrate machine vision cameras to measure part dimensions with sub-millimeter accuracy from images',
            'Autonomous vehicles: precise calibration of multi-camera rigs enables accurate depth estimation and object positioning',
            'Augmented reality: without calibration, virtual objects float, drift, or appear at wrong depths relative to real surfaces',
            'Medical endoscopy: calibrated laparoscopic cameras enable 3D reconstruction of anatomy during minimally invasive surgery',
            'Drone surveying: calibrated cameras turn aerial photos into accurate orthomosaics and elevation models'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Camera calibration estimates intrinsics (K, distortion) and extrinsics (R, t)',
            'The pinhole model projects 3D points through perspective division then scales to pixels',
            'Radial distortion becomes critical for wide-angle lenses and edge regions',
            'Zhang method uses a planar checkerboard; at least 10 images with varied poses recommended',
            'Calibration quality directly affects the accuracy of all downstream 3D vision tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'What is the difference between fx and fy in the intrinsic matrix? When might they differ?',
            'Why does radial distortion increase toward the edges of the image?',
            'How many degrees of freedom does a full camera calibration (intrinsics + one extrinsic) have?',
            'Why is a planar checkerboard sufficient for calibration even though points are coplanar?',
            'What happens to 3D reconstruction accuracy if the principal point (cx, cy) is misestimated by 10 pixels?'
          ]
        }
      ]
    },
    'epipolar-geometry': {
      title: 'Epipolar Geometry',
      subtitle: 'The geometry of two views',
      sections: [
        {
          heading: 'What is Epipolar Geometry?',
          text: '<strong>Epipolar geometry</strong> describes the intrinsic geometric relationship between two images of the same scene taken from different viewpoints. It constrains where corresponding points can appear, reducing the search for matches from 2D to 1D.',
          list: [
            'Epipole: the projection of one camera center into the other image',
            'Epipolar line: the line in one image where the corresponding point must lie',
            'Epipolar plane: the plane containing both camera centers and a 3D point',
            'Fundamental matrix (F): the 3×3 algebraic representation of epipolar geometry for uncalibrated cameras',
            'Essential matrix (E): the calibrated counterpart relating normalized coordinates'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The epipolar constraint states that corresponding points satisfy a bilinear equation through the fundamental matrix.',
          example: {
            title: 'Example: Epipolar Constraint',
            code: "Given: point x in image 1, point x' in image 2\n\nEpipolar constraint:\n  x'ᵀ · F · x = 0\n\nWhere F is the 3×3 fundamental matrix:\n  • rank(F) = 2\n  • det(F) = 0\n  • 7 DOF (scale ambiguity + det=0)\n\nEpipolar line in image 2:\n  l' = F · x\n\nEpipole computation:\n  F · e = 0   (right null space)\n  Fᵀ · e' = 0 (left null space)\n\nEssential matrix (calibrated case):\n  E = K₂ᵀ · F · K₁\n  E = [t]× · R\n\nWhere [t]× is the skew-symmetric matrix of translation.",
            output: 'The epipolar constraint reduces correspondence search from the whole image to a single line.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Fundamental vs essential matrix, and calibrated vs uncalibrated scenarios.',
          table: {
            headers: ['Aspect', 'Fundamental Matrix (F)', 'Essential Matrix (E)'],
            rows: [
              ['Inputs', 'Pixel coordinates', 'Normalized coordinates'],
              ['Encodes', 'Epipolar geometry + intrinsics', 'Epipolar geometry only'],
              ['DOF', '7', '5'],
              ['Relation', 'F = K₂⁻ᵀ · E · K₁⁻¹', 'E = K₂ᵀ · F · K₁'],
              ['Estimation', '8-point algorithm', '5-point algorithm'],
              ['Requirements', 'Any two images', 'Calibrated cameras needed']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the 8-point algorithm without normalization (fix: always normalize coordinates to ~[-1,1] before solving; otherwise numerical instability destroys accuracy)',
            'Mistake 2: Assuming any 3×3 matrix is a valid fundamental matrix (fix: enforce rank-2 constraint by SVD truncation — set smallest singular value to zero)',
            'Mistake 3: Treating epipolar lines as the final match (fix: epipolar geometry only says where to look, not which point is correct — photometric or descriptor matching still needed)',
            'Mistake 4: Ignoring degenerate configurations (fix: pure rotation, planar scenes, or points at infinity all break the standard epipolar model — detect and handle these cases)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Epipolar geometry enables efficient stereo vision and structure-from-motion systems.',
          list: [
            'Stereo matching: epipolar rectification aligns images so correspondences lie on horizontal scanlines, enabling fast block matching',
            'Visual SLAM: epipolar constraints validate feature matches and reject outliers during tracking',
            '3D reconstruction: accurate F or E estimation is the first step to triangulating 3D point clouds from image pairs',
            'Robot navigation: two-camera setups use epipolar geometry to estimate relative motion without depth sensors',
            'Photo tourism: epipolar relationships between community photo collections enable large-scale scene reconstruction'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Epipolar geometry describes the geometric relationship between two views of the same scene',
            'The fundamental matrix F encodes this relationship for uncalibrated cameras',
            'The essential matrix E is the calibrated counterpart with 5 degrees of freedom',
            'The epipolar constraint x\'ᵀFx = 0 reduces correspondence search to a 1D line',
            'Always normalize coordinates and enforce rank-2 constraint when estimating F'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Why does the fundamental matrix have 7 degrees of freedom and not 8?',
            'What happens to epipolar geometry when the two cameras undergo pure rotation (no translation)?',
            'How does epipolar rectification simplify stereo correspondence?',
            'Why must the fundamental matrix be rank 2? What does rank 3 imply?',
            'Given F and a point x in image 1, how do you compute the corresponding epipolar line in image 2?'
          ]
        }
      ]
    },
    'structure-from-motion': {
      title: 'Structure from Motion',
      subtitle: '3D reconstruction from multiple images',
      sections: [
        {
          heading: 'What is Structure from Motion?',
          text: '<strong>Structure from Motion (SfM)</strong> is the process of reconstructing 3D structure and camera motion from a sequence of 2D images. It solves simultaneously for where cameras were and what the scene looks like in 3D.',
          list: [
            'Structure: the 3D positions of points, lines, or surfaces in the scene',
            'Motion: the camera trajectory (position and orientation for each image)',
            'SfM operates from uncontrolled image collections — no calibration or known poses required',
            'Sparse SfM produces point clouds; dense variants (MVS) produce textured meshes',
            'Key insight: parallax from camera motion provides depth cues that single images lack'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SfM alternates between estimating camera motion from correspondences and triangulating structure from known poses.',
          example: {
            title: 'Example: SfM Pipeline',
            code: "Input: Image sequence I₁, I₂, ..., Iₙ\n\nStep 1 — Feature extraction & matching:\n  Detect SIFT/ORB features in each image\n  Match features between overlapping pairs\n\nStep 2 — Motion estimation:\n  For pair (i, j):\n    • Estimate fundamental matrix F\n    • Decompose into E (if calibrated)\n    • Extract R, t from E (4 solutions)\n    • Disambiguate via cheirality (positive depth)\n\nStep 3 — Structure triangulation:\n  For each matched point pair:\n    X = triangulate(xᵢ, xⱼ, Pᵢ, Pⱼ)\n    where P = K[R | t]\n\nStep 4 — Bundle adjustment:\n  Minimize: Σ ||xᵢⱼ - π(Pᵢ, Xⱼ)||²\n  over all cameras Pᵢ and points Xⱼ\n\nOutput:\n  • Sparse 3D point cloud {Xⱼ}\n  • Camera trajectory {Pᵢ}",
            output: 'SfM jointly optimizes structure and motion through iterative refinement.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing SfM variants and related techniques.',
          table: {
            headers: ['Aspect', 'Sparse SfM', 'Dense MVS', 'Visual SLAM'],
            rows: [
              ['Output', 'Point cloud (thousands)', 'Mesh/mesh + texture', 'Map + real-time pose'],
              ['Scale', 'Offline, batch processing', 'Offline, high compute', 'Online, incremental'],
              ['Optimization', 'Global bundle adjustment', 'Patch-based stereo', 'Local + loop closure'],
              ['Cameras', 'Many, unordered', 'Many, calibrated', 'Sequential stream'],
              ['Use case', 'Photo tourism, surveying', '3D scanning, VFX', 'Robotics, AR'],
              ['Scale ambiguity', 'Yes (up to similarity)', 'Resolved by calibration', 'Resolved by initialization']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Processing all image pairs instead of a connected subgraph (fix: build a view graph where edges indicate sufficient matches; only process connected components)',
            'Mistake 2: Ignoring scale ambiguity (fix: SfM recovers structure up to a similarity transform; scale must be set from known baseline, GPS, or IMU data)',
            'Mistake 3: Skipping bundle adjustment (fix: BA reduces drift and refines both structure and motion; even a single round dramatically improves accuracy)',
            'Mistake 4: Expecting SfM to work with pure rotation or textureless scenes (fix: SfM requires parallax and texture; add translation between views and avoid blank walls)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SfM turns ordinary photographs into measurable 3D environments.',
          list: [
            'Cultural heritage: reconstruct ancient buildings and artifacts from tourist photos for digital preservation',
            'Forensic analysis: reconstruct accident scenes from dashcam or surveillance footage for measurement and visualization',
            'Mining and geology: map terrain and estimate volumes from drone imagery without expensive LiDAR',
            'Film and games: create 3D assets from photo reference using photogrammetry pipelines',
            'Archaeology: document excavation sites in 3D by processing daily photo sequences'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SfM recovers 3D structure and camera motion from 2D image sequences',
            'The pipeline: features → matching → motion estimation → triangulation → bundle adjustment',
            'Results are up to a similarity transform — scale must be determined externally',
            'Bundle adjustment is essential for accuracy; it jointly refines cameras and points',
            'SfM requires textured scenes with sufficient baseline translation between views'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Why does SfM require both structure and motion to be estimated simultaneously?',
            'How many solutions exist when decomposing the essential matrix, and how do you choose the correct one?',
            'What is the purpose of bundle adjustment, and why is it called "bundle" adjustment?',
            'Why does pure rotation between views break the SfM pipeline?',
            'How would you handle a scene with repetitive texture (e.g., a brick wall) in feature matching?'
          ]
        }
      ]
    },
    'slam': {
      title: 'SLAM',
      subtitle: 'Simultaneous Localization and Mapping',
      sections: [
        {
          heading: 'What is SLAM?',
          text: '<strong>SLAM (Simultaneous Localization and Mapping)</strong> is the computational problem of constructing or updating a map of an unknown environment while simultaneously keeping track of an agent\'s location within it. It is the core capability behind autonomous robots and AR devices.',
          list: [
            'Localization: estimating the sensor/robot pose (position + orientation) relative to the map',
            'Mapping: building a consistent representation of the environment from sensor data',
            'The chicken-and-egg problem: accurate localization requires a map, and an accurate map requires known poses',
            'SLAM operates online, processing sensor data incrementally as it arrives',
            'Loop closure: detecting when the robot returns to a previously visited place to correct accumulated drift'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'SLAM jointly optimizes over the robot trajectory and map landmarks using probabilistic inference.',
          example: {
            title: 'Example: SLAM as Factor Graph',
            code: "Variables (unknowns):\n  x₁, x₂, ..., xₜ  → robot poses over time\n  m₁, m₂, ..., mₙ  → map landmarks\n\nFactors (constraints):\n  • Odometry: p(xₜ | xₜ₋₁, uₜ)  → motion model\n  • Observation: p(zₜ | xₜ, mⱼ)    → sensor model\n  • Loop closure: p(xₜ ~ xₖ)      → revisit constraint\n\nOptimization objective:\n  argmax p(X, M | Z, U)\n  = argmin Σ ||f(xₜ₋₁, uₜ) - xₜ||²_Σu\n         + Σ ||h(xₜ, mⱼ) - zₜ||²_Σz\n         + Σ ||xₜ - xₖ||²_Σloop\n\nWhere f = motion model, h = observation model.",
            output: 'SLAM is a maximum likelihood estimation over poses and landmarks.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing SLAM paradigms and sensor modalities.',
          table: {
            headers: ['Aspect', 'Visual SLAM', 'LiDAR SLAM', 'Visual-Inertial SLAM'],
            rows: [
              ['Sensor', 'Camera(s)', 'LiDAR, spinning/ solid-state', 'Camera + IMU'],
              ['Output', 'Sparse/dense map + pose', 'Dense point cloud + pose', 'Metric-scale map + pose'],
              ['Scale', 'Ambiguous (monocular)', 'Absolute (metric)', 'Metric (IMU integration)'],
              ['Lighting', 'Sensitive', 'Insensitive', 'Moderately sensitive'],
              ['Loop closure', 'Bag-of-words / netVLAD', 'Scan context / ICP', 'Visual features'],
              ['Examples', 'ORB-SLAM, DSO, LSD-SLAM', 'LOAM, Cartographer, ICP', 'VINS-Mono, OKVIS, Basalt']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating odometry and SLAM as the same (fix: odometry estimates motion incrementally and drifts; SLAM maintains a global map and uses loop closure to eliminate drift)',
            'Mistake 2: Ignoring relocalization requirements (fix: SLAM systems must handle tracking loss and recover pose by matching against the map — design for robust relocalization from the start)',
            'Mistake 3: Expecting monocular SLAM to give metric scale (fix: monocular visual SLAM cannot determine absolute scale without additional sensors or known object sizes)',
            'Mistake 4: Neglecting computational budgets (fix: real-time SLAM on mobile/embedded devices requires careful feature selection, sparse maps, and efficient solvers like iSAM2)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'SLAM enables machines to navigate and interact with unknown environments autonomously.',
          list: [
            'Autonomous vehicles: build local maps of dynamic environments for path planning and obstacle avoidance in real time',
            'Augmented reality: ARKit and ARCore use visual-inertial SLAM to anchor virtual objects persistently in physical space',
            'Indoor robotics: warehouse robots use LiDAR SLAM to navigate aisles, locate inventory, and return to charging stations',
            'Underwater exploration: AUVs use sonar-visual SLAM to map seabed terrain where GPS is unavailable',
            'Search and rescue: drones perform SLAM in GPS-denied environments like collapsed buildings to map safe routes'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'SLAM simultaneously estimates sensor pose and builds a map of the environment',
            'The problem is formulated as probabilistic inference over poses and landmarks',
            'Loop closure detection corrects accumulated drift when revisiting known places',
            'Visual SLAM uses cameras; LiDAR SLAM uses point clouds; visual-inertial fuses both with IMU',
            'Monocular SLAM has scale ambiguity; metric scale requires stereo, depth, or IMU'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Why is SLAM considered a chicken-and-egg problem?',
            'What is loop closure, and why is it critical for long-trajectory SLAM?',
            'How does visual-inertial SLAM resolve the metric scale ambiguity of monocular systems?',
            'What is the difference between frontend (tracking) and backend (optimization) in SLAM?',
            'Why does pure visual SLAM struggle in textureless environments like empty hallways?'
          ]
        }
      ]
    },
    'visual-odometry': {
      title: 'Visual Odometry',
      subtitle: 'Estimating motion from visual input',
      sections: [
        {
          heading: 'What is Visual Odometry?',
          text: '<strong>Visual odometry (VO)</strong> estimates the ego-motion of an agent (camera/robot/vehicle) by analyzing the sequence of images from onboard cameras. Unlike SLAM, VO focuses on incremental motion estimation without maintaining a global map.',
          list: [
            'Ego-motion: the camera\'s own movement through space (translation + rotation)',
            'VO processes consecutive frames to estimate relative pose changes',
            'Two main approaches: feature-based (sparse landmarks) and direct (pixel intensities)',
            'Stereo VO uses two cameras to recover metric scale; monocular VO has scale ambiguity',
            'Visual odometry is the frontend component of most visual SLAM systems'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'VO estimates frame-to-frame motion by minimizing reprojection or photometric error between views.',
          example: {
            title: 'Example: Feature-Based VO Pipeline',
            code: "Input: Image sequence I₁, I₂, ..., Iₙ\n\nFor each frame pair (k, k+1):\n\n  1. Feature detection:\n     Detect corners/keypoints in Iₖ and Iₖ₊₁\n\n  2. Feature matching/tracking:\n     Match descriptors or track with KLT\n\n  3. Motion estimation:\n     • 2D-2D: estimate E or F, decompose to R, t\n     • 3D-2D: solve PnP with triangulated 3D points\n     • 3D-3D: ICP between point clouds\n\n  4. Scale recovery (stereo):\n     Baseline B known → scale = B / disparity\n\n  5. Local optimization:\n     Windowed bundle adjustment\n     (last N frames + associated landmarks)\n\nOutput:\n  Relative poses: T₁, T₂, ..., Tₙ\n  (composed to get global trajectory)",
            output: 'VO incrementally chains frame-to-frame pose estimates into a trajectory.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Feature-based vs direct methods, and monocular vs stereo VO.',
          table: {
            headers: ['Aspect', 'Feature-Based VO', 'Direct VO', 'Hybrid (Semi-Direct)'],
            rows: [
              ['Principle', 'Minimize geometric error', 'Minimize photometric error', 'Both'],
              ['Tracking', 'Descriptor matching', 'Lucas-Kanade / alignment', 'Sparse features + direct'],
              ['Map', 'Sparse point cloud', 'Semi-dense/dense', 'Semi-dense'],
              ['Speed', 'Fast (sparse)', 'Slower (dense)', 'Moderate'],
              ['Robustness', 'Good for texture', 'Good for blur, low texture', 'Balanced'],
              ['Examples', 'LIBVISO2, ORB-SLAM VO', 'DSO, LSD-SLAM', 'SVO, DSO with features']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Accumulating drift over long sequences without correction (fix: VO drifts inevitably; use loop closure (SLAM) or GPS/IMU fusion to reset drift periodically)',
            'Mistake 2: Using monocular VO for metric navigation (fix: monocular VO cannot determine absolute scale; use stereo, known baseline, or IMU integration for metric trajectories)',
            'Mistake 3: Ignoring motion blur and rolling shutter (fix: high-speed motion or cheap sensors produce distorted images; model rolling shutter or use global shutter cameras)',
            'Mistake 4: Matching features across wide baselines without geometric verification (fix: always verify matches with epipolar constraints or RANSAC to remove outliers before pose estimation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'VO provides low-latency motion estimates for systems that need fast pose feedback.',
          list: [
            'Mars rovers: NASA uses visual odometry to track rover movement across Martian terrain where wheel slip is common',
            'Drones: VO provides state estimation for flight control when GPS is jammed or unavailable indoors',
            'Virtual production: camera tracking systems use VO to overlay CGI onto live-action footage in real time',
            'Wearable devices: smart glasses use VO for head pose tracking to stabilize displayed content',
            'Vehicle localization: VO fuses with wheel odometry and GPS to provide robust pose in tunnels and urban canyons'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Visual odometry estimates camera motion from image sequences incrementally',
            'Feature-based methods minimize geometric error; direct methods minimize photometric error',
            'Monocular VO has scale ambiguity; stereo or IMU integration provides metric scale',
            'VO drifts over time; it is typically the frontend of a full SLAM system with loop closure',
            'Geometric verification (RANSAC, epipolar constraints) is essential for outlier rejection'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'What is the fundamental difference between visual odometry and SLAM?',
            'Why does monocular VO have scale ambiguity, and how does stereo VO resolve it?',
            'What is the advantage of direct VO over feature-based VO in low-texture environments?',
            'How does windowed bundle adjustment improve VO accuracy?',
            'Why does VO drift accumulate, and what techniques can mitigate it without full SLAM?'
          ]
        }
      ]
    },
    'augmented-reality': {
      title: 'Augmented Reality',
      subtitle: 'Overlaying digital content on the real world',
      sections: [
        {
          heading: 'What is Augmented Reality?',
          text: '<strong>Augmented Reality (AR)</strong> overlays computer-generated content onto the user\'s view of the real world, blending virtual and physical environments in real time. AR requires accurate geometric understanding of the scene to place virtual objects convincingly.',
          list: [
            'Registration: aligning virtual content with real-world geometry so it appears anchored to surfaces',
            'Tracking: continuously estimating the camera/device pose relative to the environment',
            'Display: rendering virtual objects with correct perspective, lighting, and occlusion',
            'Interaction: enabling users to manipulate virtual content through touch, gaze, or gesture',
            'AR exists on a spectrum from mobile AR (smartphones) to fully immersive AR glasses'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'AR rendering projects virtual 3D objects into the image using the same camera model as the real camera, ensuring alignment.',
          example: {
            title: 'Example: Virtual Object Projection',
            code: "Given:\n  • Camera intrinsics K (from calibration)\n  • Camera pose [R | t] (from SLAM/tracking)\n  • Virtual 3D point X_virt\n\nProjection:\n  x_screen = K · [R | t] · X_virt\n\nFor correct occlusion:\n  • Render real-world depth map\n  • Compare virtual point depth Z_virt\n    with real depth Z_real at same pixel\n  • If Z_virt > Z_real: occluded (hide)\n  • If Z_virt < Z_real: visible (render)\n\nLighting:\n  • Estimate real light sources from image\n  • Apply to virtual material (PBR shading)\n  • Match shadows onto detected planes",
            output: 'Virtual objects must follow the same geometric and photometric rules as real objects.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing AR with related technologies and tracking approaches.',
          table: {
            headers: ['Aspect', 'AR', 'VR', 'Marker-Based AR', 'Markerless AR'],
            rows: [
              ['Environment', 'Real world + virtual overlay', 'Fully virtual', 'Requires printed markers', 'Any real environment'],
              ['Tracking', 'SLAM/VIO for 6DOF pose', 'Inside-out / outside-in', 'Homography from markers', 'Feature-based SLAM'],
              ['Scale', 'Metric (real world)', 'Arbitrary', 'Known marker size', 'Metric from VIO/stereo'],
              ['Hardware', 'Phone, tablet, glasses', 'Headset + controllers', 'Camera + marker', 'Camera + IMU'],
              ['Setup', 'Instant (scan environment)', 'Space setup required', 'Marker placement', 'Instant'],
              ['Examples', 'Pokemon Go, IKEA Place', 'Beat Saber, Half-Life Alyx', 'AR textbooks, demos', 'ARKit, ARCore, HoloLens']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring environmental understanding (fix: AR requires more than pose — it needs plane detection, mesh reconstruction, and lighting estimation for convincing overlays)',
            'Mistake 2: Neglecting latency requirements (fix: motion-to-photon latency above 20ms breaks immersion; use predictive tracking and high refresh rate displays)',
            'Mistake 3: Hard-coding virtual content placement (fix: use real-time plane detection and collision detection so virtual objects sit on actual surfaces, not arbitrary positions)',
            'Mistake 4: Forgetting user safety in spatial AR (fix: AR glasses must maintain awareness of physical obstacles; never fully obscure the user\'s view with opaque virtual content)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'AR is transforming how we visualize, shop, learn, and work.',
          list: [
            'Retail: IKEA Place lets customers visualize furniture at true scale in their homes before purchasing',
            'Maintenance: technicians wearing AR glasses see step-by-step repair instructions overlaid on physical equipment',
            'Surgery: AR navigation systems overlay CT/MRI scans onto the patient, guiding surgeons to tumors and vessels',
            'Education: anatomy students explore 3D organs floating above textbooks through markerless mobile AR',
            'Navigation: AR wayfinding in airports and malls overlays directional arrows directly onto the live camera view'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Augmented reality overlays digital content onto the real world in real time',
            'Accurate camera calibration and 6DOF tracking (SLAM/VIO) are prerequisites for convincing AR',
            'Virtual objects must respect real-world geometry: correct scale, occlusion, lighting, and shadows',
            'Markerless AR using SLAM is the modern standard; marker-based AR is limited to controlled demos',
            'Low latency (<20ms) and environmental understanding (planes, meshes) are critical for quality AR'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Why is camera calibration essential for AR, and what happens if intrinsics are wrong?',
            'How does ARKit/ARCore achieve metric-scale tracking without prior knowledge of the environment?',
            'What is the difference between marker-based and markerless AR tracking?',
            'Why must virtual objects be rendered with the same projection matrix as the real camera?',
            'What are the challenges of outdoor AR compared to indoor AR?'
          ]
        }
      ]
    },
    'autonomous-driving': {
      title: 'Autonomous Driving',
      subtitle: 'Computer vision for self-driving vehicles',
      sections: [
        {
          heading: 'What is Autonomous Driving?',
          text: '<strong>Autonomous driving</strong> uses computer vision, sensors, and AI to enable vehicles to navigate without human intervention. Vision systems are the primary means of understanding the driving environment, complemented by radar and LiDAR.',
          list: [
            'Perception: detecting and classifying objects — vehicles, pedestrians, cyclists, traffic signs, lanes',
            'Localization: determining the vehicle\'s precise position on a map using visual landmarks and GPS',
            'Prediction: forecasting the future behavior of other road users based on motion patterns',
            'Planning: generating safe, comfortable trajectories that follow traffic rules and reach the destination',
            'Control: executing planned trajectories through steering, throttle, and brake commands'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Autonomous driving fuses multiple sensor modalities and AI models into a unified perception stack.',
          example: {
            title: 'Example: Multi-Task Perception Network',
            code: "Input: Camera images + Radar + LiDAR\n\nPerception stack:\n  1. Object detection:\n     • 2D: YOLO/Faster R-CNN on images\n     • 3D: PointPillars/BEVFusion on LiDAR\n\n  2. Lane detection:\n     • Semantic segmentation (lane lines)\n     • Polynomial fitting for lane curves\n\n  3. Depth estimation:\n     • Stereo matching OR\n     • Monocular depth (MiDaS, DPT)\n\n  4. Sensor fusion:\n     • Kalman filter / particle filter\n     • Deep fusion (BEVFormer, TransFusion)\n\n  5. Tracking:\n     • SORT / DeepSORT / ByteTrack\n     • Maintain object IDs across frames\n\nOutput:\n  • Detected objects with class, 3D box, velocity\n  • Lane boundaries and drivable area\n  • Free space and occupancy grid",
            output: 'Perception transforms raw sensor data into a structured world model.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing sensor modalities and autonomy levels.',
          table: {
            headers: ['Aspect', 'Camera', 'LiDAR', 'Radar', 'Sensor Fusion'],
            rows: [
              ['Range', 'Unlimited (but resolution drops)', '~100-300m', '~200m', 'Combined coverage'],
              ['Weather', 'Sensitive (rain, night)', 'Sensitive (fog, rain)', 'Robust', 'Complementary'],
              ['Resolution', 'High (texture, color)', 'High (geometry)', 'Low', 'Best of all'],
              ['Speed', 'Direct', 'Slower (scanning)', 'Direct', 'Synchronization needed'],
              ['Cost', 'Low', 'High', 'Moderate', 'Highest'],
              ['Use', 'Signs, lanes, color', '3D structure, mapping', 'Velocity, long range', 'Redundancy, robustness']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Relying on a single sensor modality (fix: cameras fail at night, LiDAR in fog, radar has low resolution; production systems use redundant, diverse sensors with fusion)',
            'Mistake 2: Treating detection as sufficient without tracking (fix: single-frame detections flicker; temporal tracking smooths estimates, maintains identity, and predicts motion)',
            'Mistake 3: Ignoring edge cases in training data (fix: rare events (construction zones, animals, debris) cause most accidents; actively mine and train on long-tail scenarios)',
            'Mistake 4: Underestimating the importance of HD maps (fix: high-definition maps provide lane geometry, traffic rules, and static structure — they reduce real-time computation and improve safety)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Autonomous driving vision systems operate in the most demanding real-world conditions.',
          list: [
            'Tesla Autopilot: primarily vision-based system using eight cameras and neural networks for end-to-end driving',
            'Waymo: combines LiDAR, camera, and radar with detailed HD maps for fully autonomous robotaxi service',
            'ADAS features: lane keeping assist, adaptive cruise control, and automatic emergency braking use vision as primary input',
            'Truck platooning: autonomous trucks use stereo vision to maintain precise following distances on highways',
            'Mining operations: autonomous haul trucks use vision and LiDAR to navigate open-pit mines without human drivers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Autonomous driving requires perception, localization, prediction, planning, and control',
            'Vision systems detect objects, lanes, and signs; sensor fusion combines camera, LiDAR, and radar',
            'Temporal tracking is essential for stable perception and behavior prediction',
            'HD maps provide prior knowledge that reduces computational load and improves safety',
            'Redundancy and diversity in sensors are non-negotiable for production autonomous vehicles'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Why do autonomous vehicles use multiple sensor types instead of just cameras?',
            'What is the difference between object detection and object tracking?',
            'How do HD maps improve autonomous driving compared to pure perception?',
            'What are the challenges of vision-based perception at night or in heavy rain?',
            'Why is predicting the behavior of pedestrians more difficult than predicting vehicles?'
          ]
        }
      ]
    },
    'medical-imaging-cv': {
      title: 'Medical Imaging',
      subtitle: 'Computer vision for healthcare diagnosis',
      sections: [
        {
          heading: 'What is Medical Imaging in CV?',
          text: '<strong>Medical imaging computer vision</strong> applies image analysis techniques to clinical data for diagnosis, treatment planning, and surgical guidance. It transforms raw scans into actionable clinical insights that assist radiologists and physicians.',
          list: [
            'Modalities: X-ray, CT, MRI, ultrasound, PET, histopathology slides, retinal scans, dermoscopy',
            'Tasks: classification (disease present?), segmentation (where is the tumor?), detection (find lesions), registration (align scans)',
            'Challenges: high-resolution data, class imbalance (rare diseases), small datasets, need for interpretability',
            'Regulatory: FDA/CE approval required; models must demonstrate safety and efficacy through clinical trials',
            'Human-in-the-loop: CV assists rather than replaces clinicians; final decisions remain with physicians'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Medical image analysis uses deep learning architectures adapted to volumetric, multi-modal, and high-resolution clinical data.',
          example: {
            title: 'Example: U-Net for Medical Segmentation',
            code: "Architecture (2D U-Net):\n  Encoder:\n    Input: 572×572 grayscale (CT/MRI slice)\n    Conv → ReLU → Conv → ReLU\n    MaxPool (2×2) → feature maps halved\n    Repeat 4× with doubling channels\n\n  Bottleneck:\n    1024 channels at 28×28\n\n  Decoder:\n    Up-conv (2×2) + skip connection\n    Concatenate with corresponding encoder features\n    Conv → ReLU → Conv → ReLU\n    Repeat 4× with halving channels\n\n  Output: 388×388 segmentation mask\n    Background = 0, Tumor = 1, Edema = 2\n\nLoss: Dice Loss + Cross-Entropy\n  Dice = 2·|pred ∩ true| / (|pred| + |true|)\n  → Handles class imbalance in small lesions",
            output: 'U-Net leverages skip connections to preserve fine spatial detail for precise segmentation.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparing medical imaging tasks and natural image computer vision.',
          table: {
            headers: ['Aspect', 'Natural Images', 'Medical Images', 'Histopathology', 'Retinal Imaging'],
            rows: [
              ['Data size', 'Millions (ImageNet)', 'Thousands (rare diseases)', 'Hundreds of gigapixels', 'Moderate datasets'],
              ['Resolution', 'Standard (224²)', 'High (512² to 3D volumes)', 'Extremely high (40× objective)', 'Moderate'],
              ['Labels', 'Object classes', 'Pixel-level segmentation masks', 'Cell-level annotations', 'Vessel/lesion masks'],
              ['Interpretability', 'Useful', 'Mandatory (clinical trust)', 'Critical', 'Critical'],
              ['Preprocessing', 'Normalize, augment', 'Window/level, resample, align', 'Stain normalization', 'Vessel enhancement'],
              ['Architecture', 'ResNet, EfficientNet', 'U-Net, nnU-Net, V-Net', 'Patch-based CNNs', 'OCT-specific nets']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training on public data and deploying on hospital data without domain adaptation (fix: scanners, protocols, and populations differ; always validate on target domain and use transfer learning or domain randomization)',
            'Mistake 2: Optimizing for accuracy without considering false negatives (fix: in screening, missing disease is worse than false alarm; tune thresholds for high sensitivity and use cascaded models)',
            'Mistake 3: Ignoring data privacy and regulatory requirements (fix: medical data is protected by HIPAA/GDPR; use federated learning, differential privacy, and secure enclaves for model development)',
            'Mistake 4: Presenting AI predictions without uncertainty or confidence (fix: clinicians need to know when the model is unsure; provide probability maps, confidence intervals, and out-of-distribution flags)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Medical CV systems are deployed in clinics worldwide, augmenting clinician capabilities.',
          list: [
            'Radiology: AI detects lung nodules in CT, flags brain hemorrhage in head CT, and scores breast density in mammography',
            'Pathology: whole-slide image analysis quantifies tumor infiltration, grades cancer, and detects lymph node metastases',
            'Ophthalmology: diabetic retinopathy screening from fundus photos; AMD progression monitoring from OCT volumes',
            'Cardiology: automated measurement of ejection fraction from echocardiography; coronary artery segmentation from CT angiography',
            'Surgery: real-time instrument tracking, tissue segmentation, and augmented reality guidance in laparoscopic and robotic procedures'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Medical imaging CV assists diagnosis through classification, segmentation, detection, and registration',
            'U-Net and its 3D variants (V-Net, nnU-Net) are the dominant architectures for medical segmentation',
            'Clinical deployment requires regulatory approval, domain validation, and interpretability',
            'Class imbalance and small datasets are common; Dice loss, data augmentation, and transfer learning help',
            'AI in medicine assists clinicians; human oversight and uncertainty quantification remain essential'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Why is the U-Net architecture particularly well-suited for medical image segmentation?',
            'What is the difference between sensitivity and specificity, and why does sensitivity matter more in disease screening?',
            'How does 3D convolution differ from 2D when processing CT or MRI volumes?',
            'Why is stain normalization important in histopathology image analysis?',
            'What are the regulatory and ethical considerations when deploying AI for medical diagnosis?'
          ]
        }
      ]
    }
  }
};
