export const imagingModule2Structure = {
  module2: {
    title: 'Module 2: Image Processing Fundamentals',
    topics: [
      { id: 'color-spaces', title: 'Color Spaces' },
      { id: 'histogram', title: 'Histogram & Contrast' },
      { id: 'filtering', title: 'Image Filtering' },
      { id: 'edge-detection', title: 'Edge Detection' },
      { id: 'morphological', title: 'Morphological Operations' },
      { id: 'segmentation', title: 'Image Segmentation' },
    ]
  }
};

export const imagingModule2Content = {
  module2: {
    'color-spaces': {
      title: 'Color Spaces',
      subtitle: 'Representing and transforming color information in digital images',
      sections: [
        {
          heading: 'What is a Color Space?',
          text: 'A <strong>color space</strong> is a mathematical model that describes how colors can be represented as tuples of numbers, typically as three or four values (color channels). Different color spaces are designed for different purposes — display, printing, human perception, or computational processing.',
          list: [
            'RGB: additive color model used by screens and cameras (Red, Green, Blue channels)',
            'HSV/HSL: intuitive models separating hue, saturation, and brightness/lightness',
            'CMYK: subtractive model used in printing (Cyan, Magenta, Yellow, Key/black)',
            'YCbCr: luma + chroma separation used in video compression (JPEG, MPEG)',
            'LAB: perceptually uniform — equal numerical distances correspond to equal perceived color differences'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Converting between color spaces allows algorithms to operate on the most meaningful channel for a given task.',
          example: {
            title: 'Example: RGB to HSV Conversion',
            code: `Given RGB values (R, G, B) normalized to [0, 1]:

  MAX = max(R, G, B)
  MIN = min(R, G, B)
  Δ   = MAX - MIN

  Hue (H):
    if Δ = 0 → H = 0
    if MAX = R → H = 60° × ((G-B)/Δ mod 6)
    if MAX = G → H = 60° × ((B-R)/Δ + 2)
    if MAX = B → H = 60° × ((R-G)/Δ + 4)

  Saturation (S):
    if MAX = 0 → S = 0
    else        → S = Δ / MAX

  Value (V):
    V = MAX`,
            output: 'HSV separates color information (H, S) from brightness (V), making it easier to threshold or adjust colors independently.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Color spaces serve different purposes and have different properties.',
          table: {
            headers: ['Color Space', 'Type', 'Best For', 'Key Property'],
            rows: [
              ['RGB', 'Additive', 'Displays, cameras', 'Direct hardware mapping'],
              ['HSV / HSL', 'Cylindrical', 'Color picking, segmentation', 'Intuitive separation of color and brightness'],
              ['YCbCr', 'Luma-chroma', 'Video compression', 'Luma channel is grayscale; chroma can be subsampled'],
              ['LAB', 'Perceptual', 'Color correction, distance', 'Perceptually uniform; L = lightness, A/B = color opponents'],
              ['CMYK', 'Subtractive', 'Printing', 'Ink-based; K prevents muddy grays']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running edge detection directly on the RGB channels separately (fix: convert to grayscale first using luminance formula: Y = 0.299R + 0.587G + 0.114B)',
            'Mistake 2: Computing Euclidean distance in RGB space to measure color similarity (fix: use LAB for perceptual distance or Delta E metric)',
            'Mistake 3: Treating HSV hue as a linear value near the 0°/360° wraparound boundary (fix: use circular distance when comparing hues)',
            'Mistake 4: Ignoring gamma correction when converting between linear and non-linear spaces (fix: apply gamma encode/decode appropriately for the target space)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Color space choice directly impacts the quality and efficiency of imaging pipelines.',
          list: [
            'Skin detection: convert to HSV or YCbCr and threshold the chroma channels to isolate skin-toned regions',
            'Image compression: JPEG converts RGB → YCbCr and downsamples Cb/Cr by 2× because human eyes are less sensitive to color detail',
            'Color grading: film editors work in LAB or HSL to adjust hue and saturation without affecting perceived brightness',
            'Object tracking: tracking by color is more robust in HSV because lighting changes affect V, not H'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A color space defines how colors are represented numerically',
            'RGB is hardware-native; HSV is intuitive; LAB is perceptually uniform; YCbCr is compression-friendly',
            'Color space conversion enables algorithms to target the right information (hue, brightness, or chroma)',
            'Always choose the color space that matches your task: segmentation, compression, display, or distance measurement',
            'Perceptual uniformity matters whenever humans judge color similarity'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why is HSV preferred over RGB for color-based segmentation?\nAns: HSV separates hue (color) from value (brightness), making thresholds stable under lighting changes.',
            'Q2: What does it mean for LAB to be "perceptually uniform"?\nAns: A fixed numerical distance between two colors corresponds to a similar perceived difference anywhere in the space.',
            'Q3: In JPEG compression, why is RGB converted to YCbCr before encoding?\nAns: Human vision is more sensitive to brightness (Y) than color (Cb/Cr), so chroma can be downsampled to save space.'
          ]
        }
      ]
    },
    histogram: {
      title: 'Histogram & Contrast',
      subtitle: 'Analyzing and enhancing image intensity distributions',
      sections: [
        {
          heading: 'What is an Image Histogram?',
          text: 'An <strong>image histogram</strong> is a graphical representation of the distribution of pixel intensities in an image. For a grayscale image, it counts how many pixels have each possible intensity value (0–255). For color images, separate histograms are computed for each channel.',
          list: [
            'X-axis: pixel intensity values (0 to 255 for 8-bit images)',
            'Y-axis: number of pixels (or frequency) at each intensity',
            'A narrow histogram indicates low contrast; a spread-out histogram indicates high contrast',
            'Peaks correspond to dominant tones; valleys indicate rarely occurring intensities',
            'Histograms are lossless summaries — they discard spatial information but preserve intensity statistics'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Histogram equalization redistributes intensities to span the full dynamic range, improving contrast automatically.',
          example: {
            title: 'Example: Histogram Equalization',
            code: `Given grayscale image with L intensity levels (0 to L-1):

  1. Compute histogram:
     h(k) = number of pixels with intensity k

  2. Compute cumulative distribution function (CDF):
     c(k) = Σ h(i) for i = 0 to k

  3. Normalize CDF:
     c_norm(k) = c(k) / (M × N)   [total pixels]

  4. Map to new intensity:
     new_value(k) = round((L-1) × c_norm(k))

  5. Apply mapping to every pixel`,
            output: 'Low-contrast images with histograms clustered in a narrow range are stretched to use all 256 levels, enhancing visible detail.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Global vs adaptive histogram equalization.',
          table: {
            headers: ['Method', 'Approach', 'Strengths', 'Weaknesses'],
            rows: [
              ['Global HE', 'Single transform for entire image', 'Simple, fast, automatic', 'Amplifies noise; over-enhances some regions'],
              ['CLAHE', 'Adaptive HE on small tiles with contrast limiting', 'Preserves details; avoids noise amplification', 'Requires tile size and clip limit tuning'],
              ['Gamma correction', 'Non-linear power-law transform', 'Controlled dark/bright region emphasis', 'Manual parameter selection'],
              ['Linear stretching', 'Map min/max to full range', 'Extremely fast', 'Fails if min/max are outliers (saturation)'],
              ['Histogram matching', 'Match target histogram shape', 'Creates consistent look across images', 'Requires a reference histogram']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying histogram equalization to color images by equalizing R, G, and B independently (fix: equalize the intensity channel in HSV/YCbCr, or convert to LAB and equalize L only)',
            'Mistake 2: Using global HE on images with highly varying illumination (fix: use CLAHE or adaptive methods that operate on local regions)',
            'Mistake 3: Confusing histogram shape with image quality (fix: a flat histogram does not guarantee a good image; it only guarantees full dynamic range usage)',
            'Mistake 4: Ignoring the effect of saturated/clipped pixels on linear stretching (fix: use percentile-based clipping before stretching to ignore extreme outliers)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Histogram analysis drives both manual and automated image enhancement workflows.',
          list: [
            'Medical imaging: X-rays and mammograms often have low contrast; equalization improves visibility of soft tissue',
            'Satellite imagery: remote sensing images with narrow histograms are enhanced to reveal terrain and vegetation detail',
            'Photography: RAW processing uses tone curves (custom histogram transforms) to adjust mood and exposure',
            'Quality control: automated systems flag histograms that deviate from expected distributions as potential defects'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A histogram counts pixels at each intensity level',
            'Narrow histogram = low contrast; wide histogram = high contrast',
            'Histogram equalization stretches intensities automatically using the CDF',
            'CLAHE improves on global HE by working locally and limiting contrast amplification',
            'For color images, equalize only the luminance channel to preserve hue'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does a histogram peak at the left side (low intensities) indicate?\nAns: The image is predominantly dark or underexposed.',
            'Q2: Why does CLAHE outperform global histogram equalization in many cases?\nAns: It processes small local tiles and clips extreme bins, preventing noise amplification and over-enhancement.',
            'Q3: When equalizing a color image, which channel should you modify?\nAns: The luminance/intensity channel (Y in YCbCr, V in HSV, or L in LAB), not the color channels.'
          ]
        }
      ]
    },
    filtering: {
      title: 'Image Filtering',
      subtitle: 'Smoothing, sharpening, and noise removal using convolution',
      sections: [
        {
          heading: 'What is Image Filtering?',
          text: '<strong>Image filtering</strong> is the process of modifying pixel values based on a neighborhood of surrounding pixels. It is implemented via <strong>convolution</strong>: sliding a small matrix (kernel or filter) across the image and computing a weighted sum at each position. Filters can blur, sharpen, detect edges, or remove noise.',
          list: [
            'Linear filters: output is a weighted sum of neighborhood pixels (mean, Gaussian, Sobel)',
            'Non-linear filters: output depends on order statistics rather than linear weights (median, bilateral)',
            'Convolution: flip the kernel, slide it over the image, multiply and sum at each position',
            'Padding is required at image boundaries to maintain output size (zero padding, replicate, reflect)',
            'Separable kernels (e.g., Gaussian) can be split into 1D passes for efficiency'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Discrete 2D convolution is the core operation behind most linear filters.',
          example: {
            title: 'Example: 2D Convolution',
            code: `Given image I and kernel K of size (2m+1) × (2n+1):

  (I * K)(x, y) = Σ Σ I(x+i, y+j) · K(i, j)
                   i   j

  where i, j range over the kernel support.

Gaussian Kernel (5×5, σ = 1):
  K(i, j) ∝ exp(-(i² + j²) / (2σ²))

  Normalized so that Σ K(i, j) = 1

Mean/Box Filter (3×3):
  K = (1/9) × [[1, 1, 1],
               [1, 1, 1],
               [1, 1, 1]]`,
            output: 'Gaussian smoothing preserves edges better than a box filter because weights fall off with distance, reducing abrupt transitions.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Common filter types and their properties.',
          table: {
            headers: ['Filter', 'Kernel Type', 'Effect', 'Best For'],
            rows: [
              ['Mean / Box', 'Uniform weights', 'Blurring, noise reduction', 'Fast, simple smoothing'],
              ['Gaussian', 'Bell curve weights', 'Smoothing, anti-aliasing', 'Natural blur; separable for speed'],
              ['Median', 'Non-linear rank', 'Removes salt & pepper noise', 'Preserves edges while removing outliers'],
              ['Bilateral', 'Spatial + intensity weights', 'Edge-preserving smoothing', 'Noise reduction without blurring edges'],
              ['Laplacian', 'Second derivative', 'Edge enhancement', 'Detecting rapid intensity changes'],
              ['Unsharp mask', 'Original - blurred', 'Sharpening', 'Enhancing fine detail']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a large Gaussian kernel without considering computational cost (fix: use separable 1D filters or approximate with multiple small-box filters)',
            'Mistake 2: Applying sharpening to noisy images (fix: denoise first, then sharpen; otherwise noise is amplified)',
            'Mistake 3: Forgetting to normalize convolution kernels whose weights do not sum to 1 (fix: divide by the sum before applying; otherwise brightness shifts)',
            'Mistake 4: Using zero padding for images where black borders are undesirable (fix: use replicate or reflect padding to avoid dark edge artifacts)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Filtering is the workhorse of almost every imaging pipeline.',
          list: [
            'Portrait mode (bokeh): depth-aware bilateral filtering blurs backgrounds while keeping subjects sharp',
            'Denoising in low-light photos: median or non-local means filtering removes sensor noise before further processing',
            'Medical imaging: Gaussian smoothing reduces grain in CT and MRI slices before segmentation',
            'Barcode scanning: bilateral filtering cleans up uneven illumination so barcode edges remain sharp for decoding'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image filtering modifies pixels based on local neighborhoods via convolution',
            'Linear filters include mean, Gaussian, and derivative kernels',
            'Non-linear filters (median, bilateral) preserve edges better than linear blur',
            'Kernel weights must sum to 1 for smoothing filters to preserve brightness',
            'Padding strategy matters: zero padding introduces dark borders; replicate padding is often safer'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does a median filter remove salt & pepper noise better than a mean filter?\nAns: Outlier pixels (salt/pepper) do not affect the median value, whereas the mean is pulled toward extreme values.',
            'Q2: What makes the bilateral filter "edge-preserving"?\nAns: It weights pixels by both spatial distance and intensity similarity, so pixels across strong edges are not averaged together.',
            'Q3: Why is a Gaussian kernel preferred over a box filter for anti-aliasing?\nAns: Gaussian weights taper smoothly, avoiding the blocky artifacts and ringing introduced by the sharp cutoff of a box filter.'
          ]
        }
      ]
    },
    'edge-detection': {
      title: 'Edge Detection',
      subtitle: 'Identifying boundaries and rapid intensity transitions in images',
      sections: [
        {
          heading: 'What is Edge Detection?',
          text: '<strong>Edge detection</strong> is the process of identifying points in an image where the brightness changes sharply. Edges typically correspond to object boundaries, surface discontinuities, or texture changes. Most edge detectors compute the <strong>gradient</strong> (first derivative) of image intensity and look for high-magnitude responses.',
          list: [
            'Edges are characterized by high gradient magnitude (rapid intensity change)',
            'Gradient direction indicates the orientation perpendicular to the edge',
            'Noise amplifies gradient responses, so smoothing is usually applied first',
            'Edge thinning (non-maximum suppression) ensures edges are one pixel wide',
            'Hysteresis thresholding distinguishes strong edges from weak but connected ones'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The gradient of a 2D image is approximated using convolution kernels.',
          example: {
            title: 'Example: Sobel Gradient Computation',
            code: `Sobel kernels for horizontal and vertical edges:

  Gx = [[-1,  0,  1],       Gy = [[-1, -2, -1],
        [-2,  0,  2],             [ 0,  0,  0],
        [-1,  0,  1]]             [ 1,  2,  1]]

  Ix = I * Gx   (horizontal derivative)
  Iy = I * Gy   (vertical derivative)

  Gradient magnitude:
    |∇I| = √(Ix² + Iy²)

  Gradient direction:
    θ = atan2(Iy, Ix)

Canny Edge Detector adds:
  1. Gaussian smoothing (noise reduction)
  2. Non-maximum suppression (thinning)
  3. Hysteresis thresholding (linking)`,
            output: 'Sobel provides fast gradient estimates; Canny produces cleaner, continuous edges by suppressing noise and thinning.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparison of popular edge detection methods.',
          table: {
            headers: ['Method', 'Derivative', 'Strengths', 'Weaknesses'],
            rows: [
              ['Sobel', 'First-order', 'Fast, simple, directional', 'Thick edges; noise-sensitive'],
              ['Prewitt', 'First-order', 'Slightly more noise-robust than Sobel', 'Lower edge localization accuracy'],
              ['Roberts', 'First-order (2×2)', 'Very fast', 'Highly noise-sensitive; diagonal bias'],
              ['Canny', 'First-order + post-processing', 'Thin edges; good noise rejection; continuous contours', 'Slower; two thresholds to tune'],
              ['Laplacian', 'Second-order', 'Zero-crossing detection; isotropic', 'Very noise-sensitive; no direction info'],
              ['LoG', 'Second-order + Gaussian', 'Noise-resistant; finds blob-like edges', 'Blurs fine detail; slower than Sobel']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Running edge detection on unsmoothed images (fix: apply Gaussian blur first; derivatives amplify high-frequency noise)',
            'Mistake 2: Using a single global threshold for all images (fix: use adaptive thresholding or Canny hysteresis to handle varying edge strengths)',
            'Mistake 3: Expecting edge detectors to produce closed object boundaries (fix: edges are local operations; contour completion or segmentation is needed for closed regions)',
            'Mistake 4: Confusing gradient magnitude with edge direction (fix: magnitude tells you how strong the edge is; direction tells you the edge orientation, perpendicular to the intensity change)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Edge detection is a foundational step in higher-level vision tasks.',
          list: [
            'Object detection: edges help localize object boundaries before classification (HOG features use oriented gradients)',
            'Document scanning: edge detection finds page boundaries so the app can perform perspective correction',
            'Medical imaging: edges delineate organs and tumors in ultrasound and MRI slices',
            'Industrial inspection: edge-based measurements verify part dimensions and detect manufacturing defects',
            'Lane detection: Canny edges + Hough transform identify road lane markings in self-driving systems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Edges correspond to rapid intensity changes captured by image gradients',
            'First-order detectors (Sobel, Canny) compute gradient magnitude and direction',
            'Second-order detectors (Laplacian, LoG) find zero-crossings of the second derivative',
            'Canny is the gold standard: smooth → gradient → thin → hysteresis threshold',
            'Always smooth before differentiation to avoid noise amplification'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: Why does Canny edge detection include a Gaussian smoothing step before computing gradients?\nAns: Derivatives amplify noise; smoothing reduces high-frequency noise before differentiation.',
            'Q2: What is the purpose of non-maximum suppression in Canny?\nAns: It thins wide gradient ridges to a single pixel, producing sharp, precise edges.',
            'Q3: How does hysteresis thresholding improve edge continuity?\nAns: Weak edges are kept only if they connect to strong edges, filling gaps in contours while suppressing isolated noise responses.'
          ]
        }
      ]
    },
    morphological: {
      title: 'Morphological Operations',
      subtitle: 'Shape-based image processing using structuring elements',
      sections: [
        {
          heading: 'What are Morphological Operations?',
          text: '<strong>Morphological operations</strong> process images based on shapes. They use a small shape template called a <strong>structuring element</strong> (SE) to probe the image and transform it according to how the SE fits or misses the foreground pixels. These operations are fundamental for binary image cleaning and shape analysis.',
          list: [
            'Dilation: grows foreground regions by adding pixels where the SE overlaps foreground',
            'Erosion: shrinks foreground regions by removing pixels where the SE does not fully fit inside foreground',
            'Opening: erosion followed by dilation — removes small noise blobs and smooths boundaries',
            'Closing: dilation followed by erosion — fills small holes and connects nearby regions',
            'Structuring elements define the shape and size of the neighborhood: common choices are squares, disks, and crosses'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Morphological operations are defined using set-theoretic operations on the image and structuring element.',
          example: {
            title: 'Example: Dilation and Erosion Definitions',
            code: `Let A = set of foreground pixels (image)
Let B = structuring element (origin at center)

  Dilation:  A ⊕ B = { z | (B̂)z ∩ A ≠ ∅ }
    → Expand foreground where SE touches any foreground pixel

  Erosion:   A ⊖ B = { z | Bz ⊆ A }
    → Keep only pixels where SE fully fits inside foreground

  Opening:   A ∘ B = (A ⊖ B) ⊕ B
    → Erode then dilate: removes small protrusions

  Closing:   A • B = (A ⊕ B) ⊖ B
    → Dilate then erode: fills small gaps`,
            output: 'Dilation and erosion are dual operations under complementation. Opening and closing are idempotent — applying them twice produces the same result as once.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Comparison of core morphological operations.',
          table: {
            headers: ['Operation', 'Effect on Foreground', 'Effect on Holes', 'Best For'],
            rows: [
              ['Dilation', 'Grows', 'Shrinks', 'Connecting broken regions; thickening lines'],
              ['Erosion', 'Shrinks', 'Grows', 'Removing small noise; separating touching objects'],
              ['Opening', 'Smooths (removes small blobs)', 'Unchanged', 'Noise removal; smoothing contours'],
              ['Closing', 'Unchanged', 'Fills small holes', 'Closing gaps; joining nearby components'],
              ['Gradient', 'Edge enhancement', 'Unchanged', 'Finding object boundaries (dilate - erode)'],
              ['Top-hat', 'Isolates small bright features', 'Unchanged', 'Detecting small objects on bright backgrounds']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using a structuring element that is much larger than the features of interest (fix: choose an SE slightly larger than the noise or gap you want to remove; oversized SEs destroy valid structures)',
            'Mistake 2: Applying morphological operations to grayscale images as if they were binary (fix: for grayscale, use min/max-based definitions; erosion takes the minimum, dilation takes the maximum in the SE neighborhood)',
            'Mistake 3: Expecting opening to fill holes (fix: opening removes small blobs; use closing to fill holes)',
            'Mistake 4: Performing dilation before erosion on a noisy image thinking it will clean it (fix: that is closing, which fills noise blobs into foreground; use opening to remove noise)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Morphological operations clean and prepare binary and grayscale images for analysis.',
          list: [
            'OCR preprocessing: opening removes speckle noise from scanned documents; closing fills broken character strokes',
            'Medical imaging: morphological operations clean up thresholded tumor masks before measuring area and perimeter',
            'PCB inspection: opening removes solder paste splatter artifacts; closing bridges small gaps in trace masks',
            'Satellite imagery: morphological filtering separates connected buildings and fills small shadows that break object boundaries'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Morphology processes images based on shape using a structuring element',
            'Dilation grows foreground; erosion shrinks foreground',
            'Opening = erosion + dilation (removes small noise blobs)',
            'Closing = dilation + erosion (fills holes and gaps)',
            'Structuring element size and shape must match the target feature scale',
            'Grayscale morphology uses min/max instead of set intersection'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between opening and closing?\nAns: Opening erodes then dilates to remove small foreground noise; closing dilates then erodes to fill holes and gaps.',
            'Q2: Why is the structuring element size critical in morphological operations?\nAns: An SE that is too small will not remove the target noise; one that is too large will destroy valid features.',
            'Q3: In grayscale morphology, what operation replaces set intersection for erosion?\nAns: The minimum operation over the structuring element neighborhood.'
          ]
        }
      ]
    },
    segmentation: {
      title: 'Image Segmentation',
      subtitle: 'Partitioning images into meaningful regions or objects',
      sections: [
        {
          heading: 'What is Image Segmentation?',
          text: '<strong>Image segmentation</strong> is the process of partitioning an image into multiple segments (sets of pixels) such that pixels in the same segment share certain characteristics. It simplifies the image into something more meaningful and easier to analyze. Segmentation is a critical bridge between low-level image processing and high-level object understanding.',
          list: [
            'Semantic segmentation: classifies every pixel into a predefined category (e.g., road, sky, person)',
            'Instance segmentation: separates individual object instances of the same class (e.g., person 1 vs person 2)',
            'Panoptic segmentation: combines semantic and instance segmentation',
            'Thresholding: the simplest form — segments based on intensity value',
            'Clustering-based: groups pixels by color or feature similarity (K-means, mean shift)',
            'Edge-based: uses detected edges to form closed boundaries'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Otsu thresholding finds the optimal intensity threshold by maximizing between-class variance.',
          example: {
            title: 'Example: Otsu Thresholding',
            code: `Given histogram with L intensity levels:

  For each candidate threshold t:
    ω₀(t) = Σ h(i) for i=0 to t      (weight of class 0)
    ω₁(t) = Σ h(i) for i=t+1 to L-1  (weight of class 1)

    μ₀(t) = mean intensity of class 0
    μ₁(t) = mean intensity of class 1

    μT = total mean intensity

  Between-class variance:
    σ²b(t) = ω₀(t)·(μ₀(t) - μT)² + ω₁(t)·(μ₁(t) - μT)²

  Optimal threshold:
    t* = argmax σ²b(t)

  Binary image: pixel = 255 if I(x,y) > t*, else 0`,
            output: 'Otsu automatically separates foreground and background without manual tuning, assuming a bimodal histogram.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Segmentation approaches compared.',
          table: {
            headers: ['Method', 'Type', 'Input', 'Strengths', 'Weaknesses'],
            rows: [
              ['Thresholding', 'Intensity-based', 'Grayscale image', 'Extremely fast; simple', 'Fails with uneven illumination'],
              ['Otsu', 'Auto threshold', 'Histogram', 'Automatic; no parameters', 'Assumes bimodal distribution'],
              ['K-Means', 'Clustering', 'Pixel features (RGB, position)', 'Simple; finds color regions', 'Must choose K; sensitive to initialization'],
              ['Watershed', 'Region-based', 'Gradient image', 'Finds precise boundaries', 'Severe over-segmentation without markers'],
              ['GrabCut', 'Graph + interaction', 'RGB image + user box', 'Accurate with minimal input', 'Requires user initialization'],
              ['U-Net / Deep', 'Deep learning', 'RGB image', 'State-of-the-art accuracy', 'Requires large labeled dataset; compute heavy']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using global thresholding on images with uneven lighting (fix: use adaptive thresholding, or preprocess with illumination correction / top-hat transform)',
            'Mistake 2: Running K-means on raw RGB without spatial coordinates (fix: append (x, y) to feature vectors so spatially close pixels cluster together, producing smoother segments)',
            'Mistake 3: Treating segmentation as a solved problem for all domains (fix: medical and industrial images often need domain-specific loss functions and architectures)',
            'Mistake 4: Ignoring class imbalance in semantic segmentation training (fix: use weighted cross-entropy, Dice loss, or focal loss to prevent the model from ignoring small classes)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Segmentation turns images into structured, analyzable regions.',
          list: [
            'Medical imaging: segmenting organs, tumors, and blood vessels for diagnosis, treatment planning, and volumetric measurement',
            'Autonomous driving: panoptic segmentation labels every pixel as road, pedestrian, vehicle, or sky for safe navigation',
            'Satellite analysis: land cover segmentation classifies terrain into forest, water, urban, and agriculture for environmental monitoring',
            'Fashion e-commerce: instance segmentation extracts clothing items from photos for virtual try-on and catalog indexing',
            'Video editing: semantic segmentation enables background replacement without green screens'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Segmentation partitions images into meaningful regions based on shared properties',
            'Thresholding is the simplest approach; Otsu automates threshold selection',
            'K-means clusters pixels by feature similarity; adding spatial coordinates improves smoothness',
            'Watershed and graph-cut methods find precise boundaries but need careful initialization',
            'Deep learning (U-Net, Mask R-CNN) achieves state-of-the-art segmentation but requires labeled data',
            'Always consider illumination, scale, and class imbalance when designing a segmentation pipeline'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the main limitation of global thresholding, and how does adaptive thresholding address it?\nAns: Global thresholding fails with uneven illumination; adaptive thresholding computes local thresholds for each image region.',
            'Q2: Why might K-means segmentation produce noisy or speckled regions?\nAns: K-means considers only color similarity; adding spatial coordinates or post-processing with morphological operations produces smoother segments.',
            'Q3: In semantic segmentation, what problem does class imbalance cause, and what is one solution?\nAns: Small classes (e.g., pedestrians) are underrepresented in the loss; solutions include weighted loss, Dice loss, or focal loss.'
          ]
        }
      ]
    }
  }
};
