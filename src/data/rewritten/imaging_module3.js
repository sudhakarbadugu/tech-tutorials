export const imagingModule3Structure = {
  module3: {
    title: 'Module 3: Advanced Image Processing',
    topics: [
      { 'id': 'image-restoration', 'title': 'Image Restoration' },
      { 'id': 'frequency-domain', 'title': 'Frequency Domain Processing' },
      { 'id': 'morphological-ops', 'title': 'Morphological Operations' },
      { 'id': 'feature-extraction', 'title': 'Feature Extraction' },
      { 'id': 'texture-analysis', 'title': 'Texture Analysis' },
      { 'id': 'image-registration', 'title': 'Image Registration' },
      { 'id': 'image-quality', 'title': 'Image Quality Assessment' },
    ]
  }
};

export const imagingModule3Content = {
  module3: {
    'image-restoration': {
      'title': 'Image Restoration',
      'subtitle': 'Recovering degraded images using model-based and data-driven methods',
      'sections': [
        {
          'heading': 'What is Image Restoration?',
          'text': '<strong>Image restoration</strong> is the process of recovering a clean image from a degraded observation. Unlike enhancement (which improves visual appeal), restoration aims to invert a known or estimated degradation model to recover the original scene. Common degradations include blur, noise, compression artifacts, and missing pixels.',
          'list': [
            'Blur: caused by camera shake, out-of-focus optics, or atmospheric turbulence',
            'Noise: sensor noise, photon noise, or transmission errors corrupt pixel values',
            'Compression artifacts: blockiness and ringing from aggressive JPEG or video encoding',
            'Missing data: occlusions, dead pixels, or damaged regions that must be inpainted'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The classical degradation model assumes the observed image is a convolution of the true image with a point spread function (PSF), plus additive noise.',
          'example': {
            'title': 'Example: Degradation & Restoration Model',
            'code': `Degradation model:
  g(x, y) = h(x, y) * f(x, y) + n(x, y)

Where:
  g = observed (degraded) image
  f = original (unknown) image
  h = point spread function (blur kernel)
  n = additive noise
  * = 2D convolution

Inverse filtering (naive):
  F̂(u, v) = G(u, v) / H(u, v)

Wiener filtering (optimal in MSE sense):
  F̂(u, v) = [ H*(u,v) / (|H(u,v)|² + K(u,v)) ] · G(u, v)

Where K = noise-to-signal power ratio`,
            'output': 'Wiener filtering balances deblurring against noise amplification, avoiding the instability of pure inverse filtering.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Restoration methods differ in whether they model the degradation explicitly or learn it from data.',
          'table': {
            'headers': ['Method', 'Approach', 'Needs PSF?', 'Strengths', 'Weaknesses'],
            'rows': [
              ['Inverse Filter', 'Direct division in frequency domain', 'Yes', 'Simple, exact if no noise', 'Amplifies noise catastrophically'],
              ['Wiener Filter', 'Optimal linear estimator', 'Yes', 'Stable; minimizes MSE', 'Requires PSF and noise stats'],
              ['Richardson-Lucy', 'Iterative ML for Poisson noise', 'Yes', 'Good for photon noise', 'Slow; may diverge'],
              ['Non-local Means', 'Patch-based self-similarity', 'No', 'No blur model needed', 'Computationally expensive'],
              ['DnCNN / U-Net', 'Deep learning denoising', 'No', 'State-of-the-art quality', 'Needs large training data'],
              ['Blind Deconvolution', 'Estimates PSF + image jointly', 'No', 'No PSF required', 'Ill-posed; many local minima']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Applying inverse filtering to noisy images without regularization (fix: use Wiener filtering or add Tikhonov regularization to stabilize the inverse)',
            'Mistake 2: Assuming a Gaussian PSF when the actual blur is motion or atmospheric (fix: estimate the PSF from calibration images or use blind deconvolution)',
            'Mistake 3: Using the same denoising strength across the entire image (fix: use spatially adaptive methods or noise-level maps for non-uniform noise)',
            'Mistake 4: Treating restoration and enhancement as interchangeable (fix: restoration is model-based inversion; enhancement is perceptual improvement — choose based on your goal)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Restoration is critical in domains where image fidelity directly impacts decision-making.',
          'list': [
            'Satellite imagery: atmospheric turbulence and motion blur are removed to reveal ground details for mapping and surveillance',
            'Medical imaging: CT and MRI reconstructions use iterative algorithms to reduce noise while preserving tissue boundaries',
            'Forensics: license plates and faces from low-quality CCTV are restored using super-resolution and deblurring networks',
            'Cultural heritage: historical photographs with scratches and fading are digitally restored using inpainting and colorization pipelines'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Image restoration inverts a degradation model to recover the original image',
            'The degradation model is typically convolution (blur) plus additive noise',
            'Inverse filtering is unstable; Wiener filtering provides a stable linear solution',
            'Deep learning methods (DnCNN, U-Net) achieve the best results when training data is available',
            'Blind deconvolution estimates both the blur kernel and the clean image simultaneously'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why is inverse filtering unstable in the presence of noise?\nAns: Division by small values in the frequency domain amplifies noise, especially at high frequencies where H(u,v) ≈ 0.',
            'Q2: What information does Wiener filtering require that inverse filtering does not?\nAns: Wiener filtering needs the noise-to-signal power ratio K to balance deblurring against noise suppression.',
            'Q3: When is blind deconvolution preferred over Wiener filtering?\nAns: When the point spread function (blur kernel) is unknown and cannot be measured or calibrated.'
          ]
        }
      ]
    },
    'frequency-domain': {
      'title': 'Frequency Domain Processing',
      'subtitle': 'Analyzing and manipulating images via Fourier and spectral transforms',
      'sections': [
        {
          'heading': 'What is Frequency Domain Processing?',
          'text': '<strong>Frequency domain processing</strong> transforms an image from the spatial domain (pixels) to a representation where information is organized by frequency. Low frequencies capture smooth intensity variations; high frequencies capture edges, textures, and fine detail. Operations like filtering, compression, and restoration are often simpler and more efficient in the frequency domain.',
          'list': [
            'Fourier Transform: decomposes an image into sinusoidal basis functions of varying frequency, amplitude, and phase',
            'Discrete Cosine Transform (DCT): real-valued variant used in JPEG compression',
            'Wavelet Transform: multi-resolution decomposition capturing both frequency and spatial location',
            'Frequency domain enables global operations (like blur and sharpening) to be performed as simple pointwise multiplications'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The 2D Discrete Fourier Transform (DFT) converts an M×N image into a complex frequency spectrum.',
          'example': {
            'title': 'Example: 2D DFT and Inverse DFT',
            'code': `2D Discrete Fourier Transform:
  F(u, v) = Σ Σ f(x, y) · e^(-j2π(ux/M + vy/N))
             x=0..M-1  y=0..N-1

Inverse DFT:
  f(x, y) = (1/MN) Σ Σ F(u, v) · e^(j2π(ux/M + vy/N))

Frequency interpretation:
  - Center (u=0, v=0): DC component (average intensity)
  - Near center: low frequencies (smooth regions)
  - Far from center: high frequencies (edges, noise)

Shift for visualization:
  F_shifted(u,v) = F((u+M/2)%M, (v+N/2)%N)`,
            'output': 'Shifting places the DC component at the center, making the spectrum easier to interpret: radial distance from center corresponds to frequency magnitude.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Transforms differ in their basis functions, computational cost, and suitability for different tasks.',
          'table': {
            'headers': ['Transform', 'Basis', 'Output', 'Best For'],
            'rows': [
              ['DFT / FFT', 'Complex exponentials', 'Complex spectrum (mag + phase)', 'Filtering, analysis, convolution speedup'],
              ['DCT', 'Cosine functions (real)', 'Real coefficients', 'Compression (JPEG), energy compaction'],
              ['Wavelet', 'Localized wavelets', 'Scale-space coefficients', 'Multi-resolution analysis, denoising'],
              ['Gabor', 'Gaussian-modulated sinusoids', 'Localized frequency response', 'Texture analysis, feature extraction'],
              ['Laplacian Pyramid', 'Bandpass images at scales', 'Multi-scale decomposition', 'Blending, enhancement']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Ignoring phase information and using only magnitude spectrum for reconstruction (fix: phase contains spatial structure; both magnitude and phase are needed for accurate reconstruction)',
            'Mistake 2: Designing spatial filters without considering frequency response (fix: always check the filter in the frequency domain to understand which frequencies are being passed or attenuated)',
            'Mistake 3: Forgetting to pad images before convolution via FFT to avoid circular convolution artifacts (fix: zero-pad to size M+M_kernel-1 by N+N_kernel-1 before multiplying in frequency domain)',
            'Mistake 4: Confusing the DFT shift (fftshift) with the actual frequency content (fix: fftshift is for visualization only; the raw DFT output has DC at the top-left corner)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Frequency domain methods underpin many imaging standards and advanced algorithms.',
          'list': [
            'JPEG compression: DCT transforms 8×8 blocks into frequency coefficients, then quantizes high-frequency components aggressively to reduce file size',
            'Optical character recognition (OCR): frequency analysis removes periodic scan-line artifacts before text extraction',
            'MRI reconstruction: raw k-space data is captured in the frequency domain; inverse FFT produces the anatomical image',
            'Fingerprint enhancement: directional Gabor filters in the frequency domain enhance ridge structures while suppressing noise'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'The Fourier Transform decomposes an image into sinusoidal frequency components',
            'Low frequencies represent smooth areas; high frequencies represent edges and noise',
            'Convolution in spatial domain equals pointwise multiplication in frequency domain',
            'DCT is real-valued and preferred for compression; wavelets capture both frequency and location',
            'Always pad images before FFT-based convolution to avoid wraparound artifacts'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why does shifting the DFT center improve visualization?\nAns: It places the DC (zero-frequency) component at the image center, making radial frequency interpretation intuitive.',
            'Q2: Why is the DCT preferred over the DFT in JPEG compression?\nAns: DCT produces real-valued coefficients with better energy compaction and avoids the complex arithmetic of DFT.',
            'Q3: What artifact occurs if you multiply FFTs without zero-padding?\nAns: Circular convolution — kernel values wrap around the image edges, causing ghosting and boundary errors.'
          ]
        }
      ]
    },
    'morphological-ops': {
      'title': 'Morphological Operations',
      'subtitle': 'Shape-based image processing using structuring elements',
      'sections': [
        {
          'heading': 'What are Morphological Operations?',
          'text': '<strong>Morphological operations</strong> are a set of image processing techniques that probe an image with a small shape called a <strong>structuring element</strong> (SE). They operate on the geometry of objects rather than pixel intensities, making them ideal for binary image analysis, noise removal, boundary extraction, and shape simplification.',
          'list': [
            'Erosion: shrinks foreground objects by removing pixels at boundaries',
            'Dilation: expands foreground objects by adding pixels to boundaries',
            'Opening: erosion followed by dilation — removes small noise and breaks thin connections',
            'Closing: dilation followed by erosion — fills small holes and smooths contours',
            'Structuring element: a small binary mask (disk, square, line) that defines the neighborhood shape'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'Morphological operations are defined using set operations between the image and the structuring element.',
          'example': {
            'title': 'Example: Erosion and Dilation Definitions',
            'code': `Let A = binary image (set of foreground pixels)
Let B = structuring element (set of SE pixels)
Let B̂ = reflection of B about its origin

Erosion (A ⊖ B):
  (A ⊖ B)(x) = 1  if B̂ + x ⊆ A
             = 0  otherwise

Dilation (A ⊕ B):
  (A ⊕ B)(x) = 1  if (B̂ + x) ∩ A ≠ ∅
             = 0  otherwise

Opening:  A ∘ B = (A ⊖ B) ⊕ B
Closing:  A • B = (A ⊕ B) ⊖ B

Grayscale extension:
  Erosion:  (f ⊖ b)(x) = min{ f(x+y) - b(y) | y ∈ B }
  Dilation: (f ⊕ b)(x) = max{ f(x-y) + b(y) | y ∈ B }`,
            'output': 'Erosion removes pixels where the SE does not fully fit inside the foreground; dilation adds pixels where the SE touches the foreground.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Different operations produce complementary effects on object shapes.',
          'table': {
            'headers': ['Operation', 'Effect', 'Removes', 'Fills', 'Best For'],
            'rows': [
              ['Erosion', 'Shrinks objects', 'Small objects, noise', '—', 'Separating touching objects'],
              ['Dilation', 'Grows objects', '—', 'Small holes, gaps', 'Connecting broken contours'],
              ['Opening', 'Smooths from outside', 'Noise spikes, thin bridges', '—', 'Noise removal before analysis'],
              ['Closing', 'Smooths from inside', '—', 'Small holes, indentations', 'Completing fragmented shapes'],
              ['Gradient', 'Edge detection', '—', '—', 'Boundary extraction'],
              ['Top-hat', 'Small feature isolation', 'Large objects', '—', 'Detecting small bright/dark spots']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using a structuring element that is larger than the smallest objects of interest (fix: choose SE size smaller than the smallest feature you want to preserve)',
            'Mistake 2: Applying morphological operations to grayscale images without understanding that max/min operations change intensity (fix: use grayscale morphology carefully, or binarize first if shape is the only concern)',
            'Mistake 3: Chaining erosion and dilation with different SE sizes (fix: opening and closing use the same SE for both steps to ensure idempotence after repeated application)',
            'Mistake 4: Ignoring connectivity when cleaning binary masks (fix: use connected component analysis after morphology to filter objects by size or shape)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Morphology is foundational in industrial inspection, medical imaging, and document processing.',
          'list': [
            'PCB inspection: opening removes solder paste specks; closing fills etching defects before trace measurement',
            'Cell segmentation: erosion separates clumped cells; dilation restores them to original size after counting',
            'Document processing: morphological closing connects broken text strokes in scanned documents before OCR',
            'Satellite imagery: top-hat transform detects small buildings or vehicles against large uniform backgrounds'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Morphology probes images with a structuring element to modify object shapes',
            'Erosion shrinks; dilation grows; opening removes noise; closing fills holes',
            'Operations are defined using set theory and extend naturally to grayscale via min/max',
            'Structuring element size and shape must be chosen relative to target features',
            'Opening and closing are idempotent — applying them twice yields the same result'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: What happens if you apply erosion repeatedly with the same SE?\nAns: Objects continue shrinking; very small objects disappear entirely. The operation is not idempotent alone.',
            'Q2: Why is opening effective at removing salt noise in binary images?\nAns: Erosion removes isolated foreground pixels (salt); subsequent dilation restores remaining objects without reintroducing the noise.',
            'Q3: What is the difference between a disk and a square structuring element?\nAns: A disk produces isotropic (rotation-invariant) results; a square produces axis-aligned effects with sharper corners.'
          ]
        }
      ]
    },
    'feature-extraction': {
      'title': 'Feature Extraction',
      'subtitle': 'Detecting and describing salient image structures for recognition and matching',
      'sections': [
        {
          'heading': 'What is Feature Extraction?',
          'text': '<strong>Feature extraction</strong> is the process of identifying and describing meaningful structures in an image that can be used for matching, recognition, or classification. Good features are <strong>repeatable</strong> (detected under viewpoint/lighting changes), <strong>distinctive</strong> (unique enough to avoid mismatches), and <strong>compact</strong> (low-dimensional for efficient comparison).',
          'list': [
            'Corners: points where intensity changes sharply in multiple directions (Harris, Shi-Tomasi)',
            'Blobs: regions with distinctive scale-space extrema (SIFT, SURF, ORB)',
            'Edges: boundaries between regions (Canny, Sobel)',
            'Descriptors: numerical vectors that capture the local appearance around each feature point'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The Harris corner detector identifies points where the image gradient has significant variation in multiple directions.',
          'example': {
            'title': 'Example: Harris Corner Response',
            'code': `1. Compute image gradients:
   Ix = ∂I/∂x,  Iy = ∂I/∂y

2. Form structure tensor M at each pixel:
   M = [ Σ(Ix²)   Σ(Ix·Iy) ]
       [ Σ(Ix·Iy) Σ(Iy²)   ]
   (sums over a local window)

3. Compute corner response:
   R = det(M) - k · trace(M)²
     = λ₁λ₂ - k(λ₁ + λ₂)²

4. Threshold R:
   R > threshold → corner detected

Interpretation:
   λ₁ ≈ 0, λ₂ ≈ 0: flat region
   λ₁ >> 0, λ₂ ≈ 0: edge
   λ₁ >> 0, λ₂ >> 0: corner`,
            'output': 'Both eigenvalues large → corner; one large → edge; both small → flat region.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Feature detectors and descriptors vary in speed, invariance, and patent restrictions.',
          'table': {
            'headers': ['Method', 'Type', 'Invariance', 'Speed', 'Best For'],
            'rows': [
              ['Harris', 'Corner detector', 'Translation, rotation', 'Fast', 'Tracking, calibration'],
              ['Shi-Tomasi', 'Corner detector', 'Translation, rotation', 'Fast', 'Optical flow (goodFeaturesToTrack)'],
              ['SIFT', 'Blob + descriptor', 'Scale, rotation, illumination', 'Slow', 'Robust matching, 3D reconstruction'],
              ['SURF', 'Blob + descriptor', 'Scale, rotation', 'Medium', 'Faster alternative to SIFT'],
              ['ORB', 'Corner + binary desc', 'Rotation, scale (limited)', 'Very fast', 'Real-time applications, SLAM'],
              ['AKAZE', 'Blob + descriptor', 'Scale, rotation', 'Medium', 'Non-linear scale spaces']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using SIFT for real-time video without downsampling (fix: use ORB or FAST for real-time; SIFT is accurate but 10–100× slower)',
            'Mistake 2: Matching features using only nearest neighbor without ratio test (fix: Lowe ratio test rejects ambiguous matches by comparing best vs second-best distance)',
            'Mistake 3: Ignoring scale when detecting features across images at different resolutions (fix: use scale-invariant detectors or build an image pyramid)',
            'Mistake 4: Extracting features from raw images without preprocessing (fix: apply Gaussian smoothing and contrast normalization to improve repeatability)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Feature extraction enables machines to see and match visual patterns across images and scenes.',
          'list': [
            'Visual SLAM: ORB features tracked across video frames estimate camera pose and build 3D maps in real time',
            'Panorama stitching: SIFT features matched between overlapping photos compute homography for seamless blending',
            'Object recognition: bags of visual words (quantized SIFT descriptors) classify objects in cluttered scenes',
            'Medical registration: distinctive anatomical landmarks extracted from CT and MRI enable multi-modal alignment'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Feature extraction finds salient points and describes their local appearance',
            'Corners (Harris) and blobs (SIFT, ORB) are the most common feature types',
            'Descriptors convert local patches into compact vectors for matching',
            'Invariance to scale, rotation, and illumination is essential for robust matching',
            'ORB trades some accuracy for speed; SIFT is the gold standard for precision'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why does the Harris detector use eigenvalues of the structure tensor?\nAns: Eigenvalues reveal how intensity varies along principal directions — both large means a corner.',
            'Q2: What is the Lowe ratio test and why is it important?\nAns: It compares the distance to the nearest neighbor vs. the second-nearest; a low ratio indicates a distinctive match.',
            'Q3: When should ORB be preferred over SIFT?\nAns: When speed is critical (real-time, mobile, embedded) and some loss of scale invariance is acceptable.'
          ]
        }
      ]
    },
    'texture-analysis': {
      'title': 'Texture Analysis',
      'subtitle': 'Characterizing spatial patterns and surface properties in images',
      'sections': [
        {
          'heading': 'What is Texture Analysis?',
          'text': '<strong>Texture</strong> refers to the spatial repetition and arrangement of pixel intensities in a region. Unlike color or shape, texture describes the <strong>local variability</strong> and <strong>pattern structure</strong> of a surface. Texture analysis extracts quantitative descriptors that distinguish materials, tissues, and terrains based on their visual patterns.',
          'list': [
            'Statistical methods: analyze intensity distributions and co-occurrence (GLCM, Haralick features)',
            'Structural methods: model textures as repeating primitives (texels) with placement rules',
            'Spectral methods: use frequency domain analysis (Fourier, Gabor filters) to capture periodicity',
            'Model-based methods: fit parametric models (autoregressive, Markov random fields) to texture'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'The Gray Level Co-occurrence Matrix (GLCM) counts how often pairs of pixels with specific intensities occur at a given spatial relationship.',
          'example': {
            'title': 'Example: GLCM and Haralick Features',
            'code': `GLCM definition:
  P(i, j; d, θ) = count of pixel pairs
  with intensity i and j,
  separated by distance d at angle θ

Common Haralick features from GLCM:

Contrast (Inertia):
  Σ (i-j)² · P(i,j)
  → High when local variations are strong

Correlation:
  Σ (i·j)·P(i,j) - μx·μy
  -----------------------
        σx · σy
  → Measures linear dependency

Energy (Uniformity):
  Σ P(i,j)²
  → High for ordered, repetitive textures

Homogeneity:
  Σ P(i,j) / (1 + |i-j|)
  → High when off-diagonal elements are small`,
            'output': 'GLCM captures second-order statistics (pixel pairs) that discriminate textures with similar histograms but different spatial arrangements.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Texture methods differ in what they capture and their computational complexity.',
          'table': {
            'headers': ['Method', 'What It Captures', 'Speed', 'Best For'],
            'rows': [
              ['GLCM / Haralick', 'Co-occurrence statistics', 'Medium', 'Material classification, medical tissue'],
              ['LBP', 'Local binary patterns', 'Fast', 'Face recognition, real-time texture'],
              ['Gabor Filters', 'Frequency + orientation', 'Medium', 'Directional textures, fingerprint analysis'],
              ['Wavelet Energy', 'Multi-scale energy', 'Medium', 'Image segmentation, defect detection'],
              ['Deep Features', 'Hierarchical patterns', 'Slow (inference)', 'General texture when training data exists'],
              ['Fractal Dimension', 'Self-similarity at scales', 'Medium', 'Natural terrain, roughness measurement']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Computing GLCM on the entire image instead of local windows (fix: use sliding windows or tiling to capture spatial variation in texture across the image)',
            'Mistake 2: Using too few gray levels, causing loss of discriminative power (fix: quantize to 32–64 levels; fewer levels speed up computation but may merge distinct textures)',
            'Mistake 3: Choosing a single displacement d and angle θ for GLCM (fix: compute GLCMs at multiple distances and angles, then average or stack features for rotation invariance)',
            'Mistake 4: Confusing texture with noise (fix: texture has structure and repeatability; use periodicity analysis or autocorrelation to distinguish organized patterns from random noise)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Texture analysis distinguishes visually similar surfaces and detects subtle changes.',
          'list': [
            'Medical imaging: tissue texture in ultrasound and MRI helps classify tumors as benign or malignant',
            'Remote sensing: satellite texture features classify land cover types (forest, urban, agricultural) beyond color alone',
            'Industrial inspection: surface roughness and defect detection in textiles, metals, and ceramics',
            'Forensics: document texture analysis detects forged signatures and counterfeit currency'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Texture describes spatial patterns of pixel intensity variation',
            'GLCM captures second-order statistics (pixel pairs) at defined distances and angles',
            'Haralick features (contrast, correlation, energy, homogeneity) quantify GLCM properties',
            'LBP is fast and effective for real-time texture classification',
            'Gabor filters analyze texture in specific orientations and frequency bands'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why is GLCM called a second-order statistical method?\nAns: It counts pairs of pixels (joint probability), unlike first-order histograms that count individual pixel intensities.',
            'Q2: What does high GLCM energy indicate about a texture?\nAns: The texture is highly ordered and repetitive, with a few dominant pixel pair relationships.',
            'Q3: Why might LBP outperform GLCM in face recognition?\nAns: LBP captures fine local structures efficiently and is robust to monotonic illumination changes, making it ideal for facial micro-textures.'
          ]
        }
      ]
    },
    'image-registration': {
      'title': 'Image Registration',
      'subtitle': 'Aligning multiple images into a common coordinate system',
      'sections': [
        {
          'heading': 'What is Image Registration?',
          'text': '<strong>Image registration</strong> is the process of geometrically aligning two or more images of the same scene so that corresponding points coincide. It is essential for comparing, combining, or analyzing images acquired at different times, from different viewpoints, or by different sensors. Registration solves for a spatial transformation that maps one image (the moving image) onto another (the fixed/reference image).',
          'list': [
            'Rigid: translation and rotation only (6 DOF in 3D; 3 DOF in 2D)',
            'Affine: rigid + scaling + shearing (12 DOF in 3D; 6 DOF in 2D)',
            'Projective: preserves straight lines but not parallelism (8 DOF in 2D; homography)',
            'Non-rigid / deformable: free-form deformation modeled by B-splines or optical flow'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'Registration minimizes a similarity metric between the fixed image and the transformed moving image.',
          'example': {
            'title': 'Example: Similarity Metrics and Transformations',
            'code': `General registration objective:
  T* = argmin_T  S(F(x), M(T(x))) + λ·R(T)

Where:
  F = fixed image
  M = moving image
  T = spatial transformation
  S = similarity metric
  R = regularization on T

Common similarity metrics:

Sum of Squared Differences (SSD):
  SSD = Σ (F(x) - M(T(x)))²
  → Best for same-modality, same-intensity images

Normalized Cross-Correlation (NCC):
  NCC = Σ (F - F̄)(M(T) - M̄) / (σF · σM(T))
  → Robust to linear intensity changes

Mutual Information (MI):
  MI = H(F) + H(M(T)) - H(F, M(T))
  → Best for multi-modal registration (CT-MRI, MRI-PET)`,
            'output': 'The choice of similarity metric depends on whether images are from the same modality and how illumination varies.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Registration methods differ in transformation model, optimization strategy, and application domain.',
          'table': {
            'headers': ['Method', 'Transform', 'Metric', 'Speed', 'Best For'],
            'rows': [
              ['Feature-based', 'Rigid / affine / homography', 'Geometric error on landmarks', 'Fast', 'Remote sensing, panorama stitching'],
              ['Intensity-based', 'Any', 'SSD / NCC / MI', 'Slow', 'Medical, same-scene alignment'],
              ['Phase correlation', 'Translation / rotation', 'Frequency domain peak', 'Very fast', 'Shift/rotation estimation'],
              ['Optical flow', 'Dense per-pixel motion', 'Brightness constancy', 'Medium', 'Video frame alignment'],
              ['Deep learning', 'Learned deformation field', 'Learned or MSE', 'Fast (inference)', 'When training data is abundant'],
              ['Demons algorithm', 'Deformable', 'Intensity difference', 'Medium', 'Medical image warping']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using SSD for multi-modal images (fix: SSD assumes identical intensities; use mutual information or normalized metrics for CT-MRI or MRI-PET alignment)',
            'Mistake 2: Optimizing a non-rigid transform before a rigid alignment (fix: always start with rigid or affine to capture global alignment, then refine with deformable)',
            'Mistake 3: Ignoring the regularization term in deformable registration (fix: without smoothness constraints, deformable registration can produce physically implausible folds and extreme local distortions)',
            'Mistake 4: Using too few feature correspondences for homography estimation (fix: RANSAC requires at least 4 points for homography; use 8+ for robustness and outlier rejection)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'Registration is a prerequisite for almost any multi-image analysis workflow.',
          'list': [
            'Medical diagnosis: registering pre-operative CT with intra-operative ultrasound guides surgical navigation systems',
            'Change detection: aligning satellite images from different dates enables detection of deforestation, urban growth, or disaster damage',
            'Panorama creation: feature-based homography estimation stitches multiple photos into a seamless wide-angle view',
            'Super-resolution: sub-pixel registration of low-resolution frames enables fusion into a higher-resolution image'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'Image registration aligns images into a common coordinate system',
            'Transformations range from rigid (translation + rotation) to deformable (free-form)',
            'Similarity metrics include SSD, NCC, and mutual information for different scenarios',
            'Feature-based methods are fast; intensity-based methods are accurate for fine alignment',
            'Always initialize non-rigid registration with a rigid or affine pre-alignment'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why is mutual information preferred over SSD for CT-to-MRI registration?\nAns: CT and MRI have completely different intensity meanings for the same tissue; MI measures statistical dependency regardless of intensity mapping.',
            'Q2: How many point correspondences are needed to estimate a 2D homography?\nAns: 4 points (8 degrees of freedom, 2 equations per point). Use 8+ with RANSAC for robustness.',
            'Q3: What is the risk of skipping regularization in deformable registration?\nAns: The transformation can become non-smooth or fold over itself, producing physically impossible distortions.'
          ]
        }
      ]
    },
    'image-quality': {
      'title': 'Image Quality Assessment',
      'subtitle': 'Measuring perceived and technical quality of digital images',
      'sections': [
        {
          'heading': 'What is Image Quality Assessment?',
          'text': '<strong>Image Quality Assessment (IQA)</strong> is the task of quantifying the visual quality of an image. IQA methods predict how humans would judge quality, or measure technical fidelity against a pristine reference. Quality degradations include blur, noise, compression artifacts, color distortion, and geometric errors.',
          'list': [
            'Full-reference (FR): a perfect reference image is available; quality is deviation from reference (PSNR, SSIM, LPIPS)',
            'Reduced-reference (RR): only partial reference information is available (features, statistics)',
            'No-reference (NR) / blind: no reference at all; quality predicted from image statistics alone (BRISQUE, NIQE, deep IQA)',
            'Perceptual metrics aim to correlate with human opinion scores (MOS — Mean Opinion Score)'
          ]
        },
        {
          'heading': 'Key Formula / Rule',
          'text': 'Structural Similarity Index Measure (SSIM) compares luminance, contrast, and structure between two images.',
          'example': {
            'title': 'Example: SSIM Decomposition',
            'code': `SSIM(x, y) = l(x, y) · c(x, y) · s(x, y)

Luminance comparison:
  l(x, y) = (2μx·μy + C₁) / (μx² + μy² + C₁)

Contrast comparison:
  c(x, y) = (2σx·σy + C₂) / (σx² + σy² + C₂)

Structure comparison:
  s(x, y) = (σxy + C₃) / (σx·σy + C₃)

Where:
  μ = local mean
  σ = local standard deviation
  σxy = covariance
  C₁, C₂, C₃ = small constants for stability

SSIM is computed in a sliding window
and averaged over the image.
Range: [-1, 1], with 1 = perfect match.`,
            'output': 'SSIM captures perceptual differences better than PSNR because it models human visual sensitivity to structural distortions.',
            'type': 'code'
          }
        },
        {
          'heading': 'Important Differences',
          'text': 'Metrics differ in whether they need a reference and how well they match human perception.',
          'table': {
            'headers': ['Metric', 'Type', 'Reference?', 'Perceptual?', 'Best For'],
            'rows': [
              ['PSNR', 'Pixel error', 'Full', 'Poor', 'Technical signal fidelity, compression benchmarking'],
              ['SSIM', 'Structural', 'Full', 'Good', 'General-purpose perceptual quality'],
              ['MS-SSIM', 'Multi-scale SSIM', 'Full', 'Better', 'Varying resolution, scale-sensitive tasks'],
              ['LPIPS', 'Deep perceptual', 'Full', 'Excellent', 'GAN evaluation, neural network outputs'],
              ['BRISQUE', 'Statistical (NR)', 'None', 'Good', 'Blind quality assessment in the wild'],
              ['NIQE', 'Statistical (NR)', 'None', 'Good', 'Natural image quality without training'],
              ['FID', 'Deep statistical', 'Full', 'Excellent', 'Generative model evaluation (GANs, VAEs)']
            ]
          }
        },
        {
          'heading': 'Common Mistakes',
          'list': [
            'Mistake 1: Using PSNR as a proxy for perceptual quality (fix: PSNR correlates poorly with human judgment; use SSIM or LPIPS for perceptual tasks)',
            'Mistake 2: Computing SSIM on color images without converting to luminance first (fix: SSIM is designed for luminance; convert to grayscale or LAB and compute on the L channel)',
            'Mistake 3: Comparing IQA scores across different datasets without normalization (fix: MOS scores are dataset-dependent; report relative rankings or z-scores for cross-dataset comparison)',
            'Mistake 4: Assuming no-reference metrics are universally applicable (fix: NR metrics like BRISQUE are trained on natural photographs; they may fail on medical, synthetic, or satellite images)'
          ]
        },
        {
          'heading': 'Real-World Application',
          'text': 'IQA drives optimization and quality control in imaging pipelines.',
          'list': [
            'Streaming video: SSIM and VMAF optimize bitrate allocation so perceptual quality is maximized within bandwidth constraints',
            'Medical imaging: PSNR and SSIM monitor reconstruction quality to ensure diagnostic confidence in compressed DICOM images',
            'Generative AI: FID and LPIPS evaluate GAN and diffusion model outputs, guiding architecture and loss function design',
            'Smartphone cameras: no-reference IQA selects the best frame from a burst capture by scoring sharpness, noise, and exposure'
          ]
        },
        {
          'heading': 'Quick Recap',
          'list': [
            'IQA measures image quality with or without a reference image',
            'PSNR measures pixel-level error but correlates poorly with perception',
            'SSIM captures structural similarity and matches human judgment better',
            'LPIPS uses deep features for state-of-the-art perceptual comparison',
            'No-reference metrics (BRISQUE, NIQE) enable blind quality assessment in production pipelines'
          ]
        },
        {
          'heading': 'Practice Questions',
          'text': 'Test your understanding.',
          'list': [
            'Q1: Why does PSNR correlate poorly with human perception of quality?\nAns: PSNR treats all pixel errors equally; humans are more sensitive to structured distortions than random noise of the same energy.',
            'Q2: What are the three components of SSIM and what do they measure?\nAns: Luminance (mean intensity match), contrast (standard deviation match), and structure (cross-correlation of normalized patches).',
            'Q3: When would you use a no-reference metric instead of SSIM?\nAns: When no reference image exists, such as in real-time quality monitoring of camera feeds or user-generated content platforms.'
          ]
        }
      ]
    }
  }
};