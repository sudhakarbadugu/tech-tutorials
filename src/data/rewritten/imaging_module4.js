export const imagingModule4Structure = {
  module4: {
    title: 'Module 4: 3D Vision & Reconstruction',
    topics: [
      { id: '3d-vision', title: '3D Vision' },
      { id: 'stereo-vision', title: 'Stereo Vision' },
      { id: 'depth-estimation', title: 'Depth Estimation' },
      { id: 'photogrammetry', title: 'Photogrammetry' },
      { id: 'point-clouds', title: 'Point Clouds' },
      { id: 'mesh-processing', title: 'Mesh Processing' },
      { id: 'volume-rendering', title: 'Volume Rendering' },
      { id: 'medical-imaging', title: 'Medical Imaging' },
    ]
  }
};

export const imagingModule4Content = {
  module4: {
    '3d-vision': {
      title: '3D Vision',
      subtitle: 'Understanding and reconstructing three-dimensional structure from visual data',
      sections: [
        {
          heading: 'What is 3D Vision?',
          text: 'A <strong>3D vision</strong> (or geometric computer vision) is the field of recovering three-dimensional structure and motion from 2D images or video. Unlike 2D image processing, 3D vision aims to infer depth, shape, spatial layout, and camera pose — enabling machines to perceive the world in three dimensions.',
          list: [
            'Structure from Motion (SfM): recover 3D scene geometry and camera trajectories from unordered images',
            'Multi-View Stereo (MVS): generate dense 3D models from multiple calibrated views',
            'SLAM (Simultaneous Localization and Mapping): build a map while tracking the sensor position in real time',
            'Shape from X: infer shape from shading, texture, focus, or contours',
            'Applications span robotics, AR/VR, autonomous driving, archaeology, and digital twin creation'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The fundamental goal of 3D vision is to recover the depth Z of each scene point from 2D observations. Triangulation is the core principle.',
          example: {
            title: 'Example: Baseline Triangulation',
            code: `Given two cameras separated by baseline B:

  Left camera:  xL = f * X / Z
  Right camera: xR = f * (X - B) / Z

Disparity d = xL - xR = f * B / Z

Therefore:
  Z = f * B / d

Example values:
  f = 800 px, B = 10 cm, d = 40 px
  Z = 800 * 0.10 / 40 = 2.0 meters`,
            output: 'Depth is inversely proportional to disparity: larger disparity means closer objects.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: '3D vision methods vary in input requirements and output density.',
          table: {
            headers: ['Method', 'Input', 'Output', 'Density'],
            rows: [
              ['Structure from Motion', 'Unordered images', 'Camera poses + sparse 3D points', 'Sparse'],
              ['Multi-View Stereo', 'Ordered / calibrated views', 'Dense depth map / mesh', 'Dense'],
              ['Depth from Stereo', 'Stereo image pair', 'Per-pixel disparity / depth', 'Dense'],
              ['SLAM', 'Video stream', 'Real-time pose + map', 'Semi-dense'],
              ['Photogrammetry', 'Overlapping photos with metadata', 'Geo-referenced 3D model', 'Dense']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming a single image is enough for accurate 3D reconstruction without strong priors (fix: single-image depth estimation requires learned priors and yields only relative/scale-ambiguous depth; use multiple views for metric accuracy)',
            'Mistake 2: Ignoring camera calibration when triangulating points (fix: always calibrate intrinsics (focal length, principal point) and extrinsics (R, t) before triangulation; uncalibrated reconstruction is only up to a projective ambiguity)',
            'Mistake 3: Treating 3D vision as just stacking 2D image processing operations (fix: 3D vision involves projective geometry, epipolar constraints, and bundle adjustment — respect the geometry)',
            'Mistake 4: Forgetting scale ambiguity in monocular SLAM/SfM (fix: add a known baseline, GPS/IMU data, or an object of known size to fix the metric scale)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: '3D vision powers spatial understanding across industries.',
          list: [
            'Autonomous vehicles: build dense 3D maps of roads, detect obstacles in 3D space, and localize the ego-vehicle using visual SLAM',
            'Augmented reality: anchor virtual objects onto real surfaces by understanding scene geometry and depth',
            'Cultural heritage: create millimeter-accurate 3D models of sculptures, buildings, and archaeological sites from drone imagery',
            'Robotics: enable pick-and-place by reconstructing object poses and workspace geometry from camera feeds'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            '3D vision recovers depth, shape, and camera motion from 2D images',
            'Triangulation: Z = f×B/d — depth is inversely proportional to disparity',
            'Structure from Motion recovers sparse 3D geometry from unordered photos',
            'Multi-View Stereo produces dense models from multiple calibrated views',
            'SLAM simultaneously builds a map and tracks sensor position in real time',
            'Camera calibration (intrinsics + extrinsics) is essential for metric accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is depth inversely proportional to disparity in stereo vision?\nAns: As an object moves farther away, the difference in its projection between two viewpoints becomes smaller; disparity decreases while depth increases.',
            'Q2: What is the difference between sparse and dense 3D reconstruction?\nAns: Sparse methods recover key feature points and camera poses; dense methods estimate depth for every pixel, producing a complete surface.',
            'Q3: What causes scale ambiguity in monocular 3D vision?\nAns: Without a known baseline or metric reference, the reconstruction can be uniformly scaled and still satisfy all geometric constraints.'
          ]
        }
      ]
    },
    'stereo-vision': {
      title: 'Stereo Vision',
      subtitle: 'Recovering depth from two viewpoints using binocular geometry',
      sections: [
        {
          heading: 'What is Stereo Vision?',
          text: 'A <strong>stereo vision</strong> is the process of inferring depth from two images captured by cameras at different positions, mimicking human binocular perception. By finding correspondences between the two views and measuring their horizontal displacement (disparity), we can compute per-pixel depth using known camera geometry.',
          list: [
            'Epipolar geometry constrains the search for corresponding points to a single line, dramatically reducing complexity',
            'Rectification warps stereo pairs so that epipolar lines are horizontal and aligned, simplifying matching',
            'Disparity is the horizontal pixel shift of a point between left and right images',
            'Depth is computed from disparity using triangulation with known focal length and baseline',
            'Modern stereo systems use block matching, semi-global matching (SGM), or learned deep stereo networks'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The essential relationship between disparity and depth, plus the epipolar constraint that makes matching tractable.',
          example: {
            title: 'Example: Stereo Triangulation & Epipolar Constraint',
            code: `Epipolar constraint (rectified cameras):
  For point (x, y) in left image,
  match lies on same scanline y in right image

Disparity d = x_left - x_right
Depth Z = (f * B) / d

Where:
  f = focal length in pixels
  B = baseline (distance between camera centers)

Worked example:
  f = 700 px, B = 12 cm, matched point at d = 28 px
  Z = 700 * 0.12 / 28 = 3.0 meters

For a point at Z = 10 m:
  d = 700 * 0.12 / 10 = 8.4 px`,
            output: 'Closer objects have larger disparity; farther objects have smaller disparity.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Stereo matching algorithms balance speed, accuracy, and robustness.',
          table: {
            headers: ['Algorithm', 'Approach', 'Speed', 'Quality'],
            rows: [
              ['Block Matching (BM)', 'SSD/SAD on fixed windows', 'Very fast', 'Noisy at depth edges'],
              ['Semi-Global Matching (SGM)', 'Path-wise dynamic programming', 'Fast', 'Smooth, preserves edges'],
              ['Graph Cuts', 'Global energy minimization', 'Slow', 'Very accurate'],
              ['Deep Stereo (PSMNet)', 'CNN feature + 3D cost volume', 'GPU real-time', 'State-of-the-art accuracy'],
              ['Census Transform', 'Robust binary pattern matching', 'Fast', 'Good on textureless regions']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using uncorrected lens distortion before stereo matching (fix: undistort both images using calibration coefficients; otherwise epipolar lines will not align and matching fails)',
            'Mistake 2: Searching the entire right image for a match instead of just the epipolar line (fix: after rectification, search only along the same horizontal scanline; this reduces search space from O(N²) to O(N))',
            'Mistake 3: Assuming all surfaces have texture for matching (fix: textureless regions (walls, roads) cause ambiguous matches; use regularization, semi-global matching, or structured light to add artificial texture)',
            'Mistake 4: Expecting accurate depth at object boundaries (fix: depth discontinuities cause matching windows to straddle multiple depths; use adaptive support windows or edge-aware cost aggregation)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Stereo vision is deployed wherever depth perception from passive cameras is needed.',
          list: [
            'Autonomous driving: many self-driving stacks use stereo cameras alongside LiDAR for dense depth estimation in all weather conditions',
            'Industrial inspection: measure component dimensions and detect assembly defects by comparing stereo depth maps to CAD models',
            'Robot navigation: stereo depth enables obstacle avoidance, terrain mapping, and manipulation planning on mobile robots and drones',
            '3D filmmaking: stereo rigs capture depth for post-production effects, refocusing, and VFX integration'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Stereo vision recovers depth from two calibrated camera views',
            'Epipolar geometry reduces correspondence search to a single line (scanline after rectification)',
            'Disparity d = xL - xR; depth Z = f×B/d',
            'Block matching is fast but noisy; SGM is the practical standard; deep stereo is most accurate',
            'Textureless regions and depth edges are the hardest cases for stereo matching',
            'Rectification, undistortion, and camera calibration are prerequisites for accurate results'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is epipolar geometry important in stereo vision?\nAns: It constrains the search for corresponding points to a single line (or scanline after rectification), reducing the search space and eliminating false matches.',
            'Q2: What happens to disparity as an object moves farther away?\nAns: Disparity decreases because the angular separation between the two camera viewpoints becomes smaller for distant objects.',
            'Q3: Why do textureless surfaces cause problems for stereo matching?\nAns: Without distinctive visual patterns, multiple candidate matches have nearly identical appearance scores, making the correct match ambiguous.'
          ]
        }
      ]
    },
    'depth-estimation': {
      title: 'Depth Estimation',
      subtitle: 'Computing per-pixel distance from camera using monocular and multi-view cues',
      sections: [
        {
          heading: 'What is Depth Estimation?',
          text: 'A <strong>depth estimation</strong> is the task of predicting the distance from the camera to every point in a scene. It can be performed with a single image (monocular depth), a stereo pair, multiple views, or active sensors. Monocular depth estimation has advanced dramatically with deep learning, using learned scene priors to infer plausible geometry from a single photograph.',
          list: [
            'Monocular depth: single image → relative or metric depth map; relies on learned size, perspective, and occlusion cues',
            'Stereo depth: two calibrated views → metric depth via triangulation and disparity matching',
            'Multi-view depth: N calibrated views → dense depth via plane-sweep or MVS fusion',
            'Active depth: structured light, time-of-flight (ToF), or LiDAR directly measure distance',
            'Depth is represented as a depth map (Z per pixel), a point cloud, or a mesh surface'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Depth estimation fuses geometry and learning. Here is the plane-sweep formula used in multi-view depth.',
          example: {
            title: 'Example: Plane-Sweep Multi-View Depth',
            code: `For each hypothesized depth Z (plane at distance Z):
  1. Warp image i to reference camera:
     xi = K_ref * [R|t] * Ki_inv * xi_homogeneous * Z

  2. Compute photometric cost across N views:
     C(Z) = sum_i |I_ref(x) - I_i(xi)|

  3. Winner-takes-all:
     Z*(x) = argmin_Z C(Z)

Hyperparameters:
  Zmin, Zmax = near/far plane
  N_planes   = number of depth hypotheses

Example: Zmin=0.5m, Zmax=10m, N_planes=256`,
            output: 'Plane-sweep tests every depth hypothesis and picks the one with minimum reprojection error.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Different depth sensing modalities have different strengths, ranges, and failure modes.',
          table: {
            headers: ['Method', 'Range', 'Accuracy', 'Weakness'],
            rows: [
              ['Monocular (learned)', 'Any (scale ambiguous)', 'Relative: good', 'Absolute scale unknown'],
              ['Stereo', '~0.5–50 m', 'Medium (cm at 5m)', 'Textureless, occlusions'],
              ['Structured Light', '0.1–5 m', 'Very high (mm)', 'Outdoor/sunlight fail'],
              ['Time-of-Flight (ToF)', '0.1–10 m', 'Medium (cm)', 'Multi-path interference'],
              ['LiDAR', '1–200 m', 'High (cm)', 'Sparse (unless solid-state)'],
              ['Photogrammetry', 'Any', 'High (cm–mm)', 'Requires many overlapping images']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating monocular depth predictions as metric without scale alignment (fix: monocular depth is typically scale-invariant; align the median or use a known reference distance before using for measurement)',
            'Mistake 2: Ignoring depth edge bleeding in learned depth models (fix: use edge-aware losses, normal consistency constraints, or post-process with guided filtering to sharpen depth boundaries)',
            'Mistake 3: Evaluating depth only by mean error while ignoring structural quality (fix: report multiple metrics — RMSE, AbsRel, δ-thresholds, and qualitative mesh renders — to capture different failure modes)',
            'Mistake 4: Fusing inconsistent depth maps without outlier rejection (fix: use robust fusion like TSDF with truncation, or probabilistic depth fusion that weights each observation by confidence)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Depth estimation enables spatial reasoning across consumer, industrial, and scientific domains.',
          list: [
            'Portrait mode on smartphones: a learned monocular depth map segments the subject from background for synthetic bokeh',
            'Autonomous driving: dense depth from stereo cameras fills gaps between sparse LiDAR points, improving obstacle detection at range',
            'Construction monitoring: photogrammetric depth from drone imagery tracks earthworks volume and structural deformation over time',
            'VR/AR passthrough: real-time depth estimation allows virtual objects to occlude correctly behind real-world furniture and hands'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Depth estimation predicts per-pixel distance from the camera',
            'Monocular depth uses learned priors; it is scale-ambiguous without a reference',
            'Stereo depth uses triangulation from two calibrated views',
            'Multi-view depth fuses evidence across N images via plane-sweep or MVS',
            'Active sensors (ToF, LiDAR, structured light) directly measure distance',
            'Each modality has distinct range, accuracy, and environmental limitations'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is monocular depth estimation scale-ambiguous?\nAns: A single image contains no absolute metric reference; a small nearby object and a large distant one can project identically.',
            'Q2: What is the main advantage of plane-sweep stereo over traditional two-view stereo?\nAns: It fuses evidence from many views simultaneously, improving robustness and completeness in occluded or low-texture regions.',
            'Q3: Why does structured light fail outdoors in sunlight?\nAns: The projected light pattern is overwhelmed by ambient sunlight, making it impossible for the camera to detect the structured pattern.'
          ]
        }
      ]
    },
    'photogrammetry': {
      title: 'Photogrammetry',
      subtitle: 'Extracting metric 3D measurements from photographs',
      sections: [
        {
          heading: 'What is Photogrammetry?',
          text: 'A <strong>photogrammetry</strong> is the science of making precise measurements from photographs. By capturing overlapping images of an object or terrain from multiple positions, photogrammetry reconstructs accurate 3D coordinates, orthomosaics, digital elevation models (DEMs), and textured meshes. It bridges the gap between photography and surveying.',
          list: [
            'Aerial / drone photogrammetry: map terrain, vegetation, and infrastructure from UAV imagery',
            'Close-range photogrammetry: model small objects, sculptures, and industrial parts with sub-millimeter precision',
            'Bundle adjustment: jointly optimize 3D point positions and camera poses to minimize reprojection error',
            'Scale is established from known ground control points (GCPs), GPS/RTK data, or scale bars',
            'Output products include dense point clouds, textured meshes, orthophotos, and contour maps'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Collinearity equations relate a 3D point, camera pose, and its 2D image projection. Bundle adjustment minimizes the error across all observations.',
          example: {
            title: 'Example: Collinearity Equation',
            code: `Image coordinate (x, y) of 3D point (X, Y, Z):

  [x]   [X]   
  [y] = P * [Y]
  [1]   [Z]
            [1]

Where projection matrix P = K * [R | t]

Reprojection error for point i in image j:
  e_ij = ||x_ij_observed - projected(Pj, Xi)||

Bundle adjustment minimizes:
  sum_ij  e_ij^2

Example result after BA:
  Mean reprojection error: 0.3 px
  → sub-pixel accuracy achieved`,
            output: 'Bundle adjustment is the gold-standard optimization for accurate photogrammetric reconstruction.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Aerial vs close-range photogrammetry differ in scale, platform, and output purpose.',
          table: {
            headers: ['Aspect', 'Aerial Photogrammetry', 'Close-Range Photogrammetry'],
            rows: [
              ['Camera distance', '50–500 m (drone) to 1–10 km (aircraft)', '0.1–10 m'],
              ['Subject', 'Terrain, buildings, forests, agriculture', 'Artifacts, sculptures, machine parts'],
              ['Scale control', 'GPS/RTK ground control points', 'Scale bars, calibration rigs'],
              ['Accuracy', '1–5 cm absolute', '0.01–0.1 mm relative'],
              ['Output', 'Orthomosaic, DEM, contour lines', 'Textured mesh, CAD model'],
              ['Regulation', 'Airspace, flight permits', 'Controlled indoor environment']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Insufficient image overlap (fix: aerial photogrammetry requires at least 70% frontal overlap and 60% side overlap; close-range needs convergent views from many angles to avoid occlusions)',
            'Mistake 2: No ground control points for georeferencing (fix: distribute at least 5 well-spaced GCPs with accurate GPS coordinates; otherwise the model will be correctly shaped but in an arbitrary coordinate system)',
            'Mistake 3: Using auto-exposure causing brightness variation between images (fix: lock exposure and white balance across all images; otherwise photometric consistency is lost and dense matching suffers)',
            'Mistake 4: Ignoring lens distortion in wide-angle or fisheye lenses (fix: calibrate the camera to obtain radial (k1, k2, k3) and tangential (p1, p2) coefficients; undistort before feature extraction)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Photogrammetry creates actionable geospatial data and precise 3D assets.',
          list: [
            'Mining and quarry management: weekly drone surveys calculate exact excavation volumes and monitor stockpile quantities with centimeter accuracy',
            'Disaster response: post-earthquake or flood photogrammetry rapidly maps damage extent and produces up-to-date terrain models for rescue planning',
            'Heritage preservation: millimeter-accurate 3D models of ancient monuments document condition and enable virtual tourism and restoration planning',
            'Film and gaming: photogrammetry captures photorealistic 3D assets of real-world locations, props, and actors for digital environments'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Photogrammetry makes metric 3D measurements from overlapping photographs',
            'Collinearity equations map 3D points to 2D image coordinates through projection matrices',
            'Bundle adjustment jointly optimizes camera poses and 3D points to minimize reprojection error',
            'Ground control points or scale bars establish real-world scale and georeferencing',
            'Aerial photogrammetry maps large terrain; close-range models small objects with high precision',
            'High overlap, locked exposure, calibrated cameras, and sufficient GCPs are prerequisites for accuracy'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does bundle adjustment optimize?\nAns: It jointly optimizes camera poses (rotation, translation) and 3D point coordinates to minimize the total reprojection error across all images.',
            'Q2: Why are ground control points essential in aerial photogrammetry?\nAns: Without GCPs, the reconstructed model has the correct shape but no absolute scale, orientation, or georeference; GCPs anchor it to real-world coordinates.',
            'Q3: What is the minimum recommended image overlap for aerial photogrammetry?\nAns: At least 70% frontal overlap and 60% side overlap between consecutive flight lines.'
          ]
        }
      ]
    },
    'point-clouds': {
      title: 'Point Clouds',
      subtitle: 'Representing 3D geometry as unordered collections of points',
      sections: [
        {
          heading: 'What is a Point Cloud?',
          text: 'A <strong>point cloud</strong> is a set of 3D coordinates (X, Y, Z) that sample the surface of objects or environments. Point clouds may also carry additional attributes: color (RGB), intensity, normal vectors, or classification labels. They are the raw output of LiDAR scanners, depth cameras, and multi-view stereo pipelines, and serve as the starting point for many 3D analysis tasks.',
          list: [
            'Raw sensor output: LiDAR returns a point cloud of range measurements; stereo depth produces a dense colored point cloud',
            'Unordered nature: unlike images, point clouds have no grid structure, requiring specialized neural architectures (PointNet, PointCNN)',
            'Direct 3D representation: no lossy conversion to meshes or voxels; geometry is preserved at native resolution',
            'Processing includes filtering (outlier removal, downsampling), registration (aligning multiple scans), and segmentation',
            'Common formats: LAS/LAZ (LiDAR), PLY, PCD, E57, and XYZ'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Point cloud registration aligns multiple scans by finding the optimal rigid transformation (rotation + translation) that minimizes point-to-point or point-to-plane distance.',
          example: {
            title: 'Example: ICP (Iterative Closest Point) Registration',
            code: `Given source point cloud P and target Q:

1. For each point pi in P, find closest qj in Q
2. Compute centroids:
   μP = mean(pi), μQ = mean(qj)
3. Center the clouds:
   pi' = pi - μP,   qj' = qj - μQ
4. Compute cross-covariance matrix H = sum(pi' * qj'^T)
5. SVD: H = U * S * V^T
6. Rotation R = V * U^T
7. Translation t = μQ - R * μP
8. Apply to P: P_new = R * P + t
9. Iterate until convergence (|error_change| < ε)`,
            output: 'ICP converges to the rigid transformation that best aligns two overlapping point clouds.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Point cloud generation and processing methods differ in density, accuracy, and data source.',
          table: {
            headers: ['Source', 'Density', 'Accuracy', 'Typical Use'],
            rows: [
              ['LiDAR', 'Sparse (64–1024 beams)', '1–3 cm', 'Autonomous driving, mapping'],
              ['Depth camera (ToF)', 'Dense (VGA–HD)', '1–5 cm', 'Indoor scanning, AR'],
              ['Stereo MVS', 'Dense (image resolution)', '1–10 cm', 'Photogrammetry, 3D models'],
              ['Structured light', 'Very dense', '0.1–1 mm', 'Industrial inspection, metrology'],
              ['Neural radiance fields', 'Implicit, renderable', 'View-dependent', 'Novel view synthesis']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying image processing operations designed for grids directly to point clouds (fix: point clouds are unordered; use k-d trees for neighborhood queries, and architectures like PointNet that are permutation-invariant)',
            'Mistake 2: Registering point clouds without an initial rough alignment (fix: ICP converges to local minima; use feature-based pre-alignment (FPFH, RANSAC) or GPS/IMU poses to initialize within the capture basin)',
            'Mistake 3: Ignoring coordinate system scale and units (fix: ensure all point clouds use the same unit (meters, not millimeters mixed with meters) and the same coordinate frame before processing)',
            'Mistake 4: Keeping every point without downsampling or noise filtering (fix: use voxel grid downsampling to unify density and statistical outlier removal to eliminate spurious points from reflections or multipath)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Point clouds are the lingua franca of 3D sensing and mapping.',
          list: [
            'Autonomous driving: LiDAR point clouds feed perception pipelines for object detection, ground segmentation, and simultaneous localization and mapping (SLAM)',
            'Digital twins: indoor laser scanning produces BIM-ready point clouds that are meshed and classified for facility management and renovation planning',
            'Forensics and accident reconstruction: 3D laser scans preserve exact scene geometry for measurements and virtual walkthroughs in court presentations',
            'Agriculture: drone LiDAR point clouds measure canopy height, biomass volume, and terrain elevation for precision farming'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A point cloud is an unordered set of 3D points sampling a surface',
            'LiDAR, stereo, depth cameras, and structured light all produce point clouds with different densities and accuracies',
            'ICP registration aligns point clouds by iteratively minimizing closest-point distances via SVD',
            'Pre-alignment (features, GPS) is essential; ICP alone converges to local minima',
            'Downsampling and outlier removal improve quality and processing speed',
            'Permutation-invariant architectures (PointNet, DGCNN) are required for deep learning on point clouds'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why are standard CNNs not directly applicable to point clouds?\nAns: Point clouds are unordered sets with no grid structure; CNNs assume fixed spatial neighborhoods and spatial ordering.',
            'Q2: What is the main limitation of vanilla ICP registration?\nAns: ICP requires a good initial alignment; otherwise it converges to a local minimum and fails to find the correct overlap.',
            'Q3: What is the purpose of voxel grid downsampling?\nAns: It reduces point density to a uniform resolution, speeding up processing and preventing bias toward high-density scan regions.'
          ]
        }
      ]
    },
    'mesh-processing': {
      title: 'Mesh Processing',
      subtitle: 'Creating, cleaning, and analyzing polygonal surface meshes from point clouds and other sources',
      sections: [
        {
          heading: 'What is Mesh Processing?',
          text: 'A <strong>mesh processing</strong> encompasses the algorithms that create, refine, simplify, repair, and analyze polygonal meshes — typically triangle meshes — that represent surfaces in 3D. Meshes are the dominant representation for graphics, simulation, and manufacturing because they explicitly encode connectivity, enabling efficient rendering, collision detection, and finite-element analysis.',
          list: [
            'Reconstruction: converting point clouds or implicit fields into watertight meshes (Poisson reconstruction, marching cubes, Delaunay triangulation)',
            'Simplification: reducing polygon count while preserving shape (edge collapse, quadric error metrics)',
            'Smoothing and denoising: removing acquisition noise while preserving sharp features (Laplacian smoothing, bilateral mesh filtering)',
            'Repair: filling holes, removing self-intersections, and ensuring manifold topology',
            'Parameterization and remeshing: improving triangle quality and creating UV maps for texturing'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The marching cubes algorithm extracts an isosurface from a scalar field, while Laplacian smoothing iteratively averages vertex positions to reduce noise.',
          example: {
            title: 'Example: Laplacian Smoothing',
            code: `For each vertex vi at iteration k:

  vi^(k+1) = vi^(k) + λ * L(vi)

Where Laplacian L(vi) = mean(neighbors) - vi
     = (1/|N(i)|) * sum(vj in N(i)) vj - vi

Parameters:
  λ = smoothing factor (0 < λ < 1)
  iterations = 10–50 typically

Example:
  vi = (1.0, 2.0, 0.5)
  neighbors = [(1.1, 1.9, 0.6), (0.9, 2.1, 0.4), (1.0, 2.0, 0.7)]
  mean = (1.0, 2.0, 0.566)
  L(vi) = (0.0, 0.0, 0.066)
  vi_new = vi + 0.5 * L(vi) = (1.0, 2.0, 0.533)`,
            output: 'Laplacian smoothing moves each vertex toward the average of its neighbors, reducing noise but also shrinking the mesh over many iterations.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Mesh reconstruction algorithms differ in input requirements and output guarantees.',
          table: {
            headers: ['Algorithm', 'Input', 'Output', 'Guarantee'],
            rows: [
              ['Marching Cubes', 'Implicit field / SDF grid', 'Triangle mesh', 'Watertight if grid is closed'],
              ['Poisson Reconstruction', 'Oriented point cloud + normals', 'Watertight mesh', 'Smooth, closed surface'],
              ['Delaunay Triangulation', 'Unorganized points', 'Triangle mesh', 'Maximizes minimum angle'],
              ['Alpha Shapes', 'Point cloud + radius α', 'Polygonal mesh', 'Controls level of detail'],
              ['Ball Pivoting', 'Point cloud + ball radius', 'Triangle mesh', 'Interpolates input points']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Reconstructing a mesh from an unoriented point cloud without normals (fix: estimate normals via PCA on local neighborhoods before Poisson reconstruction; Poisson requires consistently oriented normals)',
            'Mistake 2: Over-smoothing with Laplacian smoothing until sharp edges disappear (fix: use constrained Laplacian smoothing, bilateral mesh filtering, or anisotropic diffusion that preserves features while removing noise)',
            'Mistake 3: Simplifying a mesh too aggressively for the intended use (fix: determine target polygon count based on the viewing distance and platform; a mobile AR asset needs fewer polygons than a cinematic render)',
            'Mistake 4: Ignoring non-manifold edges and self-intersections before 3D printing or simulation (fix: run mesh repair operations — hole filling, duplicate vertex merging, intersection removal — to ensure the mesh is watertight and manifold)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Mesh processing transforms raw 3D data into production-ready digital assets and simulation models.',
          list: [
            '3D printing: mesh repair ensures models are watertight and manifold so that slicing software can generate valid toolpaths without errors',
            'Game engines: mesh simplification creates LOD (level-of-detail) chains so distant objects render with fewer polygons, saving GPU budget',
            'Medical simulation: patient-specific organ meshes from CT/MRI segmentation are remeshed for high-quality finite-element biomechanical simulation',
            'Virtual try-on: body scan meshes are cleaned, aligned to a template, and remeshed for real-time cloth simulation in e-commerce apps'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Mesh processing creates, cleans, simplifies, and analyzes triangle surface meshes',
            'Marching cubes extracts surfaces from implicit fields; Poisson reconstruction builds watertight meshes from oriented point clouds',
            'Laplacian smoothing reduces noise by averaging vertices with their neighbors',
            'Mesh simplification (edge collapse) reduces polygon count for real-time rendering',
            'Mesh repair fills holes, removes self-intersections, and ensures manifold topology',
            'Always match mesh resolution and quality to the target application (print, render, sim)'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What input does Poisson surface reconstruction require?\nAns: An oriented point cloud where each point has a consistently oriented normal vector.',
            'Q2: Why does Laplacian smoothing cause mesh shrinkage over many iterations?\nAns: Each vertex moves toward the centroid of its neighbors, progressively reducing local curvature and volume.',
            'Q3: What is a non-manifold mesh edge, and why is it problematic?\nAns: A non-manifold edge is shared by more than two faces or adjacent to a boundary in an invalid way; it breaks assumptions required by rendering, simulation, and 3D printing algorithms.'
          ]
        }
      ]
    },
    'volume-rendering': {
      title: 'Volume Rendering',
      subtitle: 'Visualizing and analyzing 3D scalar and vector fields without explicit surfaces',
      sections: [
        {
          heading: 'What is Volume Rendering?',
          text: 'A <strong>volume rendering</strong> is a technique for displaying 3D datasets — typically scalar fields defined on a regular grid (voxels) — as 2D images without first extracting an intermediate surface. It is essential for visualizing phenomena that have no well-defined surfaces: medical scans (CT, MRI), weather simulations, fluid dynamics, and seismic data. Volume rendering composites color and opacity along rays cast through the volume.',
          list: [
            'Direct volume rendering (DVR): ray casting through voxels, accumulating color and opacity according to a transfer function',
            'Transfer function: maps voxel intensity (scalar value) to color (RGB) and opacity (α), revealing different tissues or materials',
            'Maximum intensity projection (MIP): displays only the brightest voxel along each ray, common in angiography',
            'Isosurface rendering: extracts a surface at a specific threshold using marching cubes (not true volume rendering, but often compared)',
            'Acceleration structures: empty space skipping, early ray termination, and GPU texture slicing make real-time volume rendering feasible'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The volume rendering integral composites color and opacity along a viewing ray using the over-operator, simulating light absorption and emission by participating media.',
          example: {
            title: 'Example: DVR Ray Accumulation',
            code: `For each pixel, cast ray r(t) = o + t*d through volume:

Accumulate front-to-back:
  C_out = 0,   α_out = 0

For each sample i along ray (step Δt):
  Ci, αi = transfer_function( scalar_at(ri) )
  αi = 1 - exp(-σi * Δt)   // absorption approximation

  C_out = C_out + (1 - α_out) * Ci * αi
  α_out = α_out + (1 - α_out) * αi

Terminate early if α_out > 0.99

Final pixel color = C_out`,
            output: 'Front-to-back compositing accumulates color weighted by remaining transparency, producing the appearance of a translucent 3D structure.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Volume rendering techniques differ in how they map data to visible pixels.',
          table: {
            headers: ['Technique', 'Visual Style', 'Best For', 'Limitation'],
            rows: [
              ['Direct Volume Rendering', 'Translucent, layered', 'CT/MRI anatomy education', 'Requires good transfer function'],
              ['Maximum Intensity Projection', 'Brightest-voxel-only', 'Angiography, vessel tracking', 'No depth cue, loss of context'],
              ['Isosurface (Marching Cubes)', 'Hard surface', 'Bone, segmented organs', 'Misses fuzzy boundaries'],
              ['Slice Rendering', '2D cross-section', 'Measurement, diagnosis', 'No 3D spatial context'],
              ['Multi-Planar Reconstruction', 'Orthogonal slices', 'Surgical planning', 'Mental 3D reconstruction needed']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a default transfer function for all modalities (fix: CT Hounsfield units and MRI intensities have different meanings; design modality-specific transfer functions that map tissue types to distinct colors and opacities)',
            'Mistake 2: Sampling too coarsely along rays, causing aliasing and missing thin structures (fix: use adaptive sampling or pre-integrated transfer functions; sample spacing should be at most half the voxel size along the ray)',
            'Mistake 3: Setting opacity too high everywhere, producing an opaque block (fix: use low base opacity and let the transfer function modulate it; enable depth cueing and shading to enhance spatial perception)',
            'Mistake 4: Rendering without shading, making volumes look flat and lacking depth (fix: compute local gradients at each voxel to approximate surface normals; apply Blinn-Phong or ambient occlusion shading)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Volume rendering makes invisible 3D data visible and interpretable.',
          list: [
            'Radiology workstations: neuroradiologists use DVR with tailored transfer functions to inspect brain vasculature and tumor boundaries from contrast CT',
            'Weather forecasting: meteorologists render 3D temperature, pressure, and moisture fields to communicate storm structure and predict tornado formation',
            'Oil and gas exploration: seismic volume rendering visualizes subsurface geological structures to identify hydrocarbon traps and plan drilling paths',
            'Scientific visualization: researchers render combustion simulations and astrophysical simulations to validate models and communicate findings'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Volume rendering visualizes 3D scalar fields without extracting explicit surfaces',
            'Ray casting accumulates color and opacity along viewing rays using a transfer function',
            'The transfer function maps voxel intensity to color (RGB) and opacity (α)',
            'Maximum Intensity Projection (MIP) shows only the brightest voxel per ray',
            'Shading (gradient-based normals) is essential for depth perception in volume renders',
            'Real-time volume rendering uses GPU acceleration, empty-space skipping, and early ray termination'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the role of the transfer function in volume rendering?\nAns: It maps voxel scalar values to color and opacity, determining which tissues or materials are visible and how they appear.',
            'Q2: Why does Maximum Intensity Projection lose depth information?\nAns: MIP only displays the brightest voxel along each ray, discarding all other voxels and any positional or depth ordering.',
            'Q3: Why is shading important in direct volume rendering?\nAns: Without shading, all voxels appear equally illuminated; local gradient-based shading adds depth cues and makes structures appear rounded and spatially grounded.'
          ]
        }
      ]
    },
    'medical-imaging': {
      title: 'Medical Imaging',
      subtitle: 'Acquiring, processing, and analyzing images for clinical diagnosis and treatment',
      sections: [
        {
          heading: 'What is Medical Imaging?',
          text: 'A <strong>medical imaging</strong> is the discipline of creating visual representations of the interior of the body for clinical analysis and medical intervention. It spans physics (how energy interacts with tissue), engineering (sensor and system design), and computer science (image reconstruction, visualization, and AI-assisted diagnosis). Modalities differ in the physical principle used to probe anatomy and the clinical questions they answer.',
          list: [
            'X-ray / CT: uses ionizing radiation; excellent for bone, lung, and trauma; CT provides 3D cross-sections',
            'MRI: uses magnetic fields and radio waves; superior soft-tissue contrast; no ionizing radiation',
            'Ultrasound: uses acoustic waves; real-time, portable, safe; ideal for cardiac, prenatal, and point-of-care imaging',
            'PET / SPECT: uses radioactive tracers; reveals metabolic activity; combined with CT or MRI for anatomical context',
            'Optical / Endoscopy: visible light cameras for surface and cavity inspection; combined with AI for polyp detection'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'CT reconstruction uses the Radon transform and filtered back-projection to recover attenuation coefficients from X-ray projections.',
          example: {
            title: 'Example: CT Radon Transform & Back-Projection',
            code: `Radon Transform (forward):
  p(θ, s) = ∫ f(x,y) δ(x·cosθ + y·sinθ - s) dx dy

Filtered Back-Projection (inverse):
  f(x,y) ≈ ∫ [ p(θ, s) * h(s) ] dθ

Where:
  h(s) = ramp filter in frequency domain (|ν|)
  s = x·cosθ + y·sinθ  (projection coordinate)

In practice (discrete):
  1. Take projections at many angles (typically 360–1000)
  2. Apply ramp filter to each projection
  3. Smear (back-project) filtered projections
  4. Sum all back-projections to reconstruct slice`,
            output: 'Filtered back-projection inverts the Radon transform to recover the 2D attenuation map from 1D projections.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Medical imaging modalities are chosen based on the clinical question, tissue type, and safety constraints.',
          table: {
            headers: ['Modality', 'Physics', 'Best For', 'Risk / Limitation'],
            rows: [
              ['X-ray', 'Ionizing radiation', 'Bone, chest, trauma', 'Cumulative dose risk'],
              ['CT', 'X-ray + tomography', '3D trauma, oncology', 'Higher dose than X-ray'],
              ['MRI', 'Magnetic resonance', 'Brain, spine, soft tissue', 'Metal implants contraindicated; loud'],
              ['Ultrasound', 'Acoustic waves', 'Cardiac, fetal, guiding needles', 'Operator dependent; limited depth'],
              ['PET', 'Positron emission', 'Cancer staging, metabolism', 'Radiotracer injection; expensive'],
              ['Mammography', 'Low-dose X-ray', 'Breast cancer screening', 'Compression discomfort; density limits']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Comparing pixel intensities across different modalities directly (fix: Hounsfield units (CT), signal intensity (MRI), and echogenicity (ultrasound) are modality-specific; use standardized scales or radiologist annotations for cross-modal comparison)',
            'Mistake 2: Training AI on a single scanner or hospital without testing on external data (fix: medical images have strong domain shift across vendors, protocols, and populations; validate on multi-site data and use domain adaptation or federated learning)',
            'Mistake 3: Ignoring patient safety (radiation dose, contrast allergies) when designing acquisition protocols (fix: apply ALARA principle — as low as reasonably achievable — for dose; screen for contrast allergies; optimize scan time to reduce motion artifacts)',
            'Mistake 4: Reporting only accuracy without sensitivity/specificity in clinical AI (fix: in medicine, false negatives (missed disease) and false positives (unnecessary procedures) have very different costs; report confusion matrices, ROC curves, and AUC)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Medical imaging combined with AI is transforming healthcare delivery worldwide.',
          list: [
            'Screening mammography: AI systems flag suspicious regions for radiologist review, reducing missed cancers by 10–20% and cutting reading time in half in high-volume programs',
            'Stroke assessment: CT perfusion and angiography automatically identify large vessel occlusion and quantify salvageable brain tissue, enabling faster treatment decisions',
            'Lung cancer screening: low-dose CT with AI nodule detection and volumetric tracking identifies early-stage cancers that are curable with surgery',
            'Surgical navigation: real-time ultrasound or fluorescence imaging fused with preoperative CT/MRI guides tumor resection margins, preserving healthy tissue'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Medical imaging creates visual representations of anatomy and function for diagnosis',
            'CT uses X-ray projections and filtered back-projection to reconstruct cross-sectional slices',
            'MRI provides excellent soft-tissue contrast without ionizing radiation',
            'Ultrasound is real-time, portable, and safe; ideal for cardiac and prenatal imaging',
            'PET reveals metabolic activity; often fused with CT or MRI for anatomical context',
            'AI in medical imaging requires multi-site validation, clinical-grade metrics, and attention to safety and bias'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is MRI preferred over CT for brain imaging when both can visualize the skull?\nAns: MRI provides superior soft-tissue contrast and does not use ionizing radiation, making it safer for repeated scans and better for visualizing brain parenchyma.',
            'Q2: What is the ALARA principle in medical imaging?\nAns: As Low As Reasonably Achievable — minimize radiation dose to the patient while maintaining diagnostic image quality.',
            'Q3: Why is sensitivity more important than accuracy alone when evaluating a cancer detection AI?\nAns: Missing a cancer (false negative) has far more severe consequences than a false alarm (false positive); sensitivity directly measures the rate of missed cases.'
          ]
        }
      ]
    }
  }
};
