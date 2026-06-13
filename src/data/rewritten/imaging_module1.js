export const imagingModule1Structure = {
  module1: {
    title: 'Module 1: Imaging Foundations',
    topics: [
      { id: 'imaging-basics', title: 'Imaging Basics' },
      { id: 'image-formation', title: 'Image Formation' },
      { id: 'camera-models', title: 'Camera Models' },
      { id: 'image-sensors', title: 'Image Sensors' },
      { id: 'sampling-quantization', title: 'Sampling & Quantization' },
    ]
  }
};

export const imagingModule1Content = {
  module1: {
    'imaging-basics': {
      title: 'Imaging Basics',
      subtitle: 'Fundamentals of digital imaging systems',
      sections: [
        {
          heading: 'What is an Imaging System?',
          text: 'An <strong>imaging system</strong> captures, processes, and displays visual information. It converts physical scenes into digital representations that can be analyzed, stored, or transmitted. Every imaging system follows a pipeline from the physical world to a digital representation.',
          list: [
            'Acquisition: camera, sensor, or scanner captures light from a scene',
            'Processing: enhance, filter, or transform the raw captured image',
            'Analysis: extract information using algorithms and machine learning',
            'Display: render the final image for human or machine consumption'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The imaging pipeline transforms photons into pixels through a series of physical and digital stages.',
          example: {
            title: 'Example: Imaging Pipeline',
            code: `Physical Scene (photons)
    ↓
[Optical System] → Lens focuses light
    ↓
[Sensor] → Photons → electrons (analog signal)
    ↓
[ADC] → Analog → Digital values (0-255)
    ↓
[ISP] → Demosaicing, white balance, gamma
    ↓
Digital Image (pixels)
    ↓
[Analysis/ML] → Detection, segmentation, recognition`,
            output: 'Each stage introduces trade-offs: resolution, noise, color accuracy, and latency.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Analog vs digital imaging systems.',
          table: {
            headers: ['Aspect', 'Analog Imaging', 'Digital Imaging'],
            rows: [
              ['Signal', 'Continuous voltage/current', 'Discrete numeric values'],
              ['Storage', 'Film, tape, physical media', 'Memory cards, SSD, cloud'],
              ['Processing', 'Darkroom, chemical development', 'Software algorithms, ML'],
              ['Copying', 'Generational loss (degrades)', 'Perfect copies (no loss)'],
              ['Sharing', 'Physical transport required', 'Instant network transmission'],
              ['Editing', 'Limited, destructive', 'Non-destructive, unlimited']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring the optical chain and blaming the sensor for poor image quality (fix: clean lenses, proper lighting, and correct focus are often the real culprits)',
            'Mistake 2: Assuming higher resolution always means better images (fix: resolution must match the application; higher resolution without better optics increases noise and storage cost)',
            'Mistake 3: Treating the display as an exact replica of the scene (fix: displays have their own color gamut, brightness limits, and gamma curves; calibration is essential)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Imaging systems are the foundation of modern visual technology.',
          list: [
            'Smartphone cameras: compact imaging pipelines with computational photography (HDR, night mode, portrait effects)',
            'Medical imaging: X-ray, MRI, and ultrasound systems that convert physical signals into diagnostic visuals',
            'Satellite observation: multi-spectral imaging for agriculture, weather, and defense',
            'Industrial inspection: automated quality control using high-speed camera systems'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'An imaging system captures, processes, and displays visual information',
            'Core stages: acquisition → processing → analysis → display',
            'Digital imaging converts continuous light into discrete pixel values',
            'Each pipeline stage introduces trade-offs in quality, speed, and cost',
            'Imaging systems power smartphones, medicine, satellites, and industry'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the four main stages of an imaging system pipeline?\nAns: Acquisition, processing, analysis, and display.',
            'Q2: Why does digital imaging allow perfect copies while analog does not?\nAns: Digital stores discrete numeric values; copying reproduces the exact same numbers. Analog signals degrade with each generation.',
            'Q3: Name two real-world applications of imaging systems beyond consumer photography.\nAns: Medical diagnosis (X-ray, MRI), satellite earth observation, industrial quality inspection, autonomous driving cameras.'
          ]
        }
      ]
    },
    'image-formation': {
      title: 'Image Formation',
      subtitle: 'How light becomes a digital image',
      sections: [
        {
          heading: 'What is Image Formation?',
          text: '<strong>Image formation</strong> describes how a 3D scene is projected onto a 2D image plane. This process involves optics (lens geometry), physics (light behavior), and geometry (perspective projection). Understanding image formation is essential for interpreting what a camera captures and for designing computer vision algorithms.',
          list: [
            'Light rays from scene points travel through the optical system',
            'The lens focuses rays onto a focal plane (sensor or film)',
            'Perspective projection maps 3D coordinates (X, Y, Z) to 2D coordinates (x, y)',
            'The resulting image encodes intensity, color, and spatial relationships'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The thin lens equation and perspective projection define how 3D points map to 2D images.',
          example: {
            title: 'Example: Perspective Projection',
            code: `Thin Lens Equation:
  1/f = 1/u + 1/v

Where:
  f = focal length
  u = object distance from lens
  v = image distance from lens

Perspective Projection (pinhole model):
  x = f × X / Z
  y = f × Y / Z

Scene point (X=3m, Y=1m, Z=10m)
Focal length f = 50mm:
  x = 50 × 3000 / 10000 = 15 mm
  y = 50 × 1000 / 10000 = 5 mm`,
            output: 'Objects farther away appear smaller; closer objects appear larger.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Pinhole camera vs lens camera.',
          table: {
            headers: ['Aspect', 'Pinhole Camera', 'Lens Camera'],
            rows: [
              ['Aperture', 'Tiny hole (no glass)', 'Optical lens element'],
              ['Focus', 'Everything in focus', 'Requires focusing at a distance'],
              ['Light gathering', 'Very low (dim images)', 'High (bright images)'],
              ['Distortion', 'No lens distortion', 'May have radial/tangential distortion'],
              ['Sharpness', 'Diffraction limited', 'Aberration limited'],
              ['Use case', 'Theory, simple cameras', 'All modern cameras, smartphones']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming image coordinates directly correspond to real-world distances (fix: perspective projection is non-linear; account for depth Z and camera calibration parameters)',
            'Mistake 2: Ignoring lens distortion when measuring object sizes from images (fix: apply distortion coefficients (k1, k2) during camera calibration for accurate measurements)',
            'Mistake 3: Confusing focal length with field of view (fix: field of view depends on both focal length and sensor size; shorter focal length = wider FOV on the same sensor)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Image formation principles enable accurate 3D reconstruction and measurement from 2D images.',
          list: [
            'Autonomous vehicles: convert camera pixels to real-world distances for obstacle detection and path planning',
            'Augmented reality: overlay virtual objects correctly by understanding the camera projection model',
            'Photogrammetry: reconstruct 3D models from multiple 2D photographs using calibrated cameras',
            'Medical endoscopy: map 2D video frames to 3D anatomy for surgical navigation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image formation maps 3D scenes to 2D images via perspective projection',
            'The thin lens equation (1/f = 1/u + 1/v) governs optical focus',
            'Pinhole model: x = f×X/Z, y = f×Y/Z — objects shrink with distance',
            'Lens cameras gather more light but introduce distortion',
            'Camera calibration corrects distortion and maps pixels to real-world coordinates'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does the thin lens equation describe?\nAns: The relationship between focal length, object distance, and image distance for a focused image.',
            'Q2: In perspective projection, why do distant objects appear smaller?\nAns: The projection divides X and Y by depth Z, so larger Z produces smaller image coordinates.',
            'Q3: What is the main advantage of a lens camera over a pinhole camera?\nAns: A lens gathers significantly more light, producing brighter images in the same exposure time.'
          ]
        }
      ]
    },
    'camera-models': {
      title: 'Camera Models',
      subtitle: 'From pinhole to modern digital cameras',
      sections: [
        {
          heading: 'What is a Camera Model?',
          text: 'A <strong>camera model</strong> is a mathematical or physical description of how a camera captures images. Models range from the simple pinhole model (idealized geometry) to complex models that account for lens distortion, sensor characteristics, and optical aberrations. Choosing the right model depends on the application — simple models work for theory, while calibrated models are needed for metrology.',
          list: [
            'Pinhole model: simplest geometric model; no lens, just a point aperture',
            'Thin lens model: adds focusing behavior and depth of field effects',
            'Intrinsic parameters: focal length, principal point, pixel aspect ratio',
            'Extrinsic parameters: camera position and orientation in 3D space'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The camera projection matrix combines intrinsics and extrinsics to map 3D world points to 2D image points.',
          example: {
            title: 'Example: Camera Projection Matrix',
            code: `Camera Matrix (P = K [R | t]):

Intrinsic Matrix K:
  K = [[fx,  s, cx],
       [ 0, fy, cy],
       [ 0,  0,  1]]

Extrinsics [R | t]:
  R = 3×3 rotation matrix
  t = 3×1 translation vector

World point (X, Y, Z, 1) → homogeneous
  [x, y, w]ᵀ = P × [X, Y, Z, 1]ᵀ

Pixel coordinates:
  u = x / w,  v = y / w`,
            output: 'A single 3×4 matrix P maps any 3D world point to a 2D pixel.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Common imaging systems and their characteristics.',
          table: {
            headers: ['System', 'Principle', 'Key Strength', 'Typical Application'],
            rows: [
              ['RGB Camera', 'Visible light detection', 'Color fidelity; low cost', 'Photography, surveillance, mobile'],
              ['Thermal Camera', 'Infrared radiation detection', 'Works in complete darkness', 'Night vision, fever detection'],
              ['X-ray', 'Radiation absorption differential', 'Penetrates soft tissue', 'Medical diagnosis, security scanning'],
              ['MRI', 'Magnetic resonance of hydrogen', 'Excellent soft tissue contrast', 'Brain imaging, joint diagnosis'],
              ['Ultrasound', 'Sound wave reflection', 'Real-time, non-ionizing', 'Prenatal imaging, cardiac'],
              ['Satellite', 'Multi-spectral band capture', 'Large area coverage', 'Earth observation, agriculture']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the same camera model for all lenses and sensors (fix: each lens-sensor combination has unique intrinsics; always calibrate per camera setup)',
            'Mistake 2: Ignoring radial distortion in wide-angle lenses (fix: wide lenses exhibit strong barrel distortion; model it with k1, k2 coefficients and undistort before measurement)',
            'Mistake 3: Assuming the principal point is at the image center (fix: manufacturing tolerances shift the principal point; calibrate it as (cx, cy) in the intrinsic matrix)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Camera models are foundational for any system that interprets images geometrically.',
          list: [
            'Structure from motion (SfM): reconstruct 3D scenes from unordered photo collections using calibrated camera models',
            'SLAM (Simultaneous Localization and Mapping): mobile robots use camera models to build maps and track their position',
            'Face unlock: smartphones use calibrated IR camera models to ensure 3D depth accuracy for liveness detection',
            'Sports broadcasting: multi-camera arrays with precise extrinsics enable virtual replay generation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Camera models describe how 3D scenes project onto 2D images',
            'Pinhole model: simplest; thin lens adds focusing behavior',
            'Intrinsic parameters (K): focal length, principal point, skew',
            'Extrinsic parameters (R, t): camera pose in world coordinates',
            'Projection matrix P = K [R | t] maps world points to pixels',
            'Different camera types (RGB, thermal, X-ray, MRI) serve different applications'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What are the two main categories of camera parameters?\nAns: Intrinsics (focal length, principal point) and extrinsics (rotation and translation in world space).',
            'Q2: Why is the pinhole camera model useful despite real cameras using lenses?\nAns: It provides a simple, idealized geometric foundation that is accurate enough for many applications and is the basis for more complex models.',
            'Q3: What is the projection matrix P and what does it do?\nAns: P = K [R | t] is a 3×4 matrix that combines intrinsics and extrinsics to map any 3D world point to 2D image pixel coordinates.'
          ]
        }
      ]
    },
    'image-sensors': {
      title: 'Image Sensors',
      subtitle: 'Converting light into electrical signals',
      sections: [
        {
          heading: 'What is an Image Sensor?',
          text: 'An <strong>image sensor</strong> is the electronic component in a digital camera that converts photons (light) into electrical signals. It consists of a grid of photosites (pixels), each containing a photodiode that generates electrons proportional to the light intensity it receives. The sensor is the bridge between the optical world and the digital domain.',
          list: [
            'Photodiodes convert incoming photons into electron-hole pairs',
            'Each pixel accumulates charge proportional to light intensity and exposure time',
            'An analog-to-digital converter (ADC) reads out the charge as a digital value',
            'Color sensors use a Bayer filter (RGGB) so each pixel captures red, green, or blue light'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The sensor output depends on photon flux, quantum efficiency, and exposure time.',
          example: {
            title: 'Example: Sensor Signal Calculation',
            code: `Signal (electrons) =
  Φ × QE × t_exp × A_pixel

Where:
  Φ  = photon flux (photons / sec / cm²)
  QE = quantum efficiency (0-1, e.g., 0.6)
  t_exp = exposure time (seconds)
  A_pixel = pixel area (cm²)

Example:
  Φ = 1×10¹⁰ photons/s/cm²
  QE = 0.6
  t_exp = 1/100 s
  A_pixel = 1×10⁻⁶ cm² (1 μm²)

Signal = 1×10¹⁰ × 0.6 × 0.01 × 1×10⁻⁶
       = 60 electrons`,
            output: 'Low light + short exposure = fewer electrons = more noise relative to signal.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'CCD vs CMOS sensors.',
          table: {
            headers: ['Aspect', 'CCD (Charge-Coupled Device)', 'CMOS (Complementary MOS)'],
            rows: [
              ['Readout', 'Shift register (serial)', 'Active pixel (per-pixel amplifier)'],
              ['Power', 'Higher (50-300× more)', 'Lower'],
              ['Speed', 'Slower', 'Faster (supports high FPS)'],
              ['Cost', 'More expensive', 'Cheaper (standard CMOS process)'],
              ['Noise', 'Lower read noise', 'Higher but improving rapidly'],
              ['Integration', 'Separate support chips needed', 'All electronics on one chip'],
              ['Dominance', 'Niche scientific/industrial', 'Consumer, mobile, automotive']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Equating megapixels with image quality (fix: pixel size (μm) and sensor area matter more; larger pixels collect more light and have better dynamic range)',
            'Mistake 2: Ignoring quantum efficiency when comparing sensors (fix: a sensor with higher QE converts more photons to electrons, producing better low-light performance even at the same resolution)',
            'Mistake 3: Assuming all pixels in a color sensor capture all colors (fix: Bayer filters assign one color per pixel; demosaicing interpolates the missing two colors, which can cause moiré and color artifacts)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Sensor choice determines camera performance in every domain.',
          list: [
            'Smartphones: CMOS sensors with small pixels (1-2 μm) but large total count; computational photography compensates for noise',
            'Astronomy: cooled CCD/CMOS sensors with large pixels and high QE to capture faint starlight with minimal thermal noise',
            'Automotive ADAS: high-dynamic-range CMOS sensors that handle both bright sky and dark shadows in the same scene',
            'Medical endoscopy: tiny CMOS sensors at the tip of flexible scopes, requiring low power and minimal heat generation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image sensors convert photons into electrical signals via photodiodes',
            'Signal = photon flux × quantum efficiency × exposure time × pixel area',
            'CCD: serial readout, low noise, higher power, more expensive',
            'CMOS: parallel readout, lower power, cheaper, faster — dominates the market',
            'Color sensors use Bayer filters; each pixel captures only R, G, or B',
            'Megapixels alone do not determine quality; pixel size and sensor technology matter'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What does quantum efficiency (QE) measure in an image sensor?\nAns: The fraction of incoming photons that are converted into electrons; higher QE means better light sensitivity.',
            'Q2: Why do CMOS sensors dominate consumer electronics over CCDs?\nAns: CMOS sensors are cheaper to manufacture, consume less power, and support faster readout speeds.',
            'Q3: What is a Bayer filter and why is it needed?\nAns: A Bayer filter places a color filter array (RGGB) over the sensor so each pixel captures only red, green, or blue light; demosaicing reconstructs the full color image.'
          ]
        }
      ]
    },
    'sampling-quantization': {
      title: 'Sampling & Quantization',
      subtitle: 'Digitizing continuous images into discrete pixels',
      sections: [
        {
          heading: 'What are Sampling and Quantization?',
          text: '<strong>Sampling</strong> and <strong>quantization</strong> are the two processes that convert a continuous analog image into a discrete digital image. Sampling determines <em>where</em> we measure (spatial resolution), while quantization determines <em>how precisely</em> we measure (intensity resolution). Together they define the digital image quality and data size.',
          list: [
            'Sampling: discretizing the spatial domain into a grid of pixels',
            'Quantization: discretizing the intensity domain into discrete levels (bins)',
            'Spatial resolution: number of pixels (e.g., 1920 × 1080)',
            'Color/Intensity depth: bits per pixel (e.g., 8-bit = 256 levels, 16-bit = 65,536 levels)'
          ]
        },
        {
          heading: 'Key Formula / Rule',
          text: 'The Nyquist-Shannon theorem and bit-depth calculations govern sampling and quantization quality.',
          example: {
            title: 'Example: Sampling & Quantization',
            code: `Nyquist Rate:
  fs ≥ 2 × f_max
  Sample at least twice the highest frequency

Quantization Levels:
  L = 2ᵇ
  b = bits per pixel
  
  8-bit:  L = 256 levels
  16-bit: L = 65,536 levels

File Size Estimation:
  Grayscale: H × W × b / 8 bytes
  RGB: H × W × 3 × b / 8 bytes

Example (1920×1080 RGB, 8-bit):
  1920 × 1080 × 3 × 1 = 6,220,800 bytes
  ≈ 5.93 MB (uncompressed)`,
            output: 'Higher sampling and quantization improve quality but increase file size exponentially.',
            type: 'code'
          }
        },
        {
          heading: 'Important Differences',
          text: 'Sampling vs quantization and their effects.',
          table: {
            headers: ['Aspect', 'Sampling (Spatial)', 'Quantization (Intensity)'],
            rows: [
              ['Domain', 'Spatial (x, y)', 'Amplitude (pixel value)'],
              ['Determines', 'Resolution, detail', 'Color depth, smoothness'],
              ['Artifacts', 'Aliasing, jagged edges', 'Banding, posterization'],
              ['Units', 'Pixels per inch (PPI)', 'Bits per pixel (bpp)'],
              ['Trade-off', 'More pixels = larger files', 'More bits = larger files'],
              ['Fix for error', 'Anti-aliasing, higher resolution', 'Dithering, higher bit depth']
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Sampling below the Nyquist rate causing aliasing (fix: sample at least 2× the highest spatial frequency in the scene, or apply an anti-aliasing filter before downsampling)',
            'Mistake 2: Using 8-bit quantization for high-dynamic-range scenes (fix: use 12-bit or 16-bit raw capture for scenes with both bright highlights and dark shadows)',
            'Mistake 3: Confusing display resolution with image resolution (fix: a 4K display does not improve a 720p image; the image must be sampled at high resolution to benefit from the display)'
          ]
        },
        {
          heading: 'Real-World Application',
          text: 'Sampling and quantization choices define the quality and usability of digital images.',
          list: [
            'Professional photography: 14-bit RAW files preserve maximum dynamic range for post-processing flexibility',
            'Medical imaging: 12-16 bit DICOM images capture subtle tissue density differences that 8-bit would lose',
            'Web images: 8-bit JPEG with chroma subsampling (4:2:0) balances quality and bandwidth',
            'Satellite imagery: high spatial resolution (sub-meter) with 16-bit multispectral bands for vegetation analysis'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Sampling: discretizes space into pixels; determines spatial resolution',
            'Quantization: discretizes intensity into levels; determines color/bit depth',
            'Nyquist theorem: sample at ≥ 2× the maximum frequency to avoid aliasing',
            '8-bit = 256 levels; 16-bit = 65,536 levels; more bits = smoother tones',
            'Aliasing = spatial undersampling artifact; banding = quantization artifact',
            'Trade-off: higher quality requires more pixels and more bits = larger files'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            'Q1: What is the difference between sampling and quantization?\nAns: Sampling discretizes the spatial domain (where to measure), while quantization discretizes the intensity domain (how precisely to measure).',
            'Q2: What artifact appears when you sample a signal below the Nyquist rate?\nAns: Aliasing — high-frequency components appear as false low-frequency patterns (e.g., moiré patterns).',
            'Q3: How many intensity levels does a 12-bit grayscale image have, and why does this matter?\nAns: 2¹² = 4,096 levels. More levels reduce banding and preserve detail in smooth gradients, which is critical for medical and scientific imaging.'
          ]
        }
      ]
    }
  }
};
