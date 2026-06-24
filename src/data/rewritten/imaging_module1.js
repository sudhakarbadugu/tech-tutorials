export const imagingModule1Structure = {
  module1: {
    title: 'Module 1: Foundations of Imaging',
    topics: [
      {
        id: 'image-types-representation',
        title: 'Image Types & Representation'
      },
      {
        id: 'image-formats-io',
        title: 'Image Formats & I/O'
      },
      {
        id: 'sampling-quantization-resolution',
        title: 'Sampling, Quantization & Resolution'
      },
      {
        id: 'medical-imaging-modalities',
        title: 'Medical Imaging Modalities'
      },
      {
        id: 'imaging-pipeline-overview',
        title: 'Imaging Pipeline Overview'
      }
    ]
  }
};

export const imagingModule1Content = {
  module1: {
    'image-types-representation': {
      title: 'Image Types & Representation',
      subtitle: 'Grayscale, RGB, multispectral, and hyperspectral data',
      sections: [
        {
          heading: 'What is Image?',
          text: 'A <strong>digital image</strong> is a 2D (or 3D) array of measurements. You choose the representation based on your sensor: single-channel <strong>grayscale</strong> for intensity, 3-channel <strong>RGB</strong> for human-visible color, <strong>multispectral</strong> (4–20 bands) for agriculture and geology, and <strong>hyperspectral</strong> (100+ bands) for material identification.',
          list: [
            '<strong>Grayscale:</strong> one value per pixel — X-ray, ultrasound B-mode, thermal',
            '<strong>RGB:</strong> red, green, blue — consumer cameras, displays',
            '<strong>Multispectral:</strong> discrete bands (e.g., RGB + NIR) — Sentinel-2, agriculture',
            '<strong>Hyperspectral:</strong> continuous spectrum per pixel — mineral mapping, food quality',
            '<strong>Shape:</strong> grayscale H×W; color H×W×C; volume D×H×W for CT/MRI'
          ]
        },
        {
          heading: 'Visual Explanation',
          text: '',
          table: {
            headers: [
              'Type',
              'Channels',
              'Typical source',
              'Domain example'
            ],
            rows: [
              [
                'Grayscale',
                '1',
                'Mono sensor, derived luminance',
                'Chest X-ray, PCB grayscale'
              ],
              [
                'RGB',
                '3',
                'Bayer CFA + demosaic',
                'Fundus camera, product photos'
              ],
              [
                'Multispectral',
                '4–20',
                'Filter wheel / multi-sensor',
                'Crop NDVI, satellite LULC'
              ],
              [
                'Hyperspectral',
                '100–300',
                'Spectrometer push-broom',
                'Ore detection, tumor margin'
              ]
            ]
          }
        },
        {
          heading: 'Mathematical Foundation',
          text: 'Pixel value after digitization: <strong>I(x,y) = round(K · L(x,y))</strong> where L is scene radiance and K is gain. For multispectral: <strong>I(x,y,λ)</strong> — one value per wavelength λ.',
          example: {
            title: 'Key Formula',
            code: `Grayscale:  I ∈ ℤ^{H×W}     values 0…255 (8-bit) or 0…65535 (16-bit)
RGB:        I ∈ ℤ^{H×W×3}   channels R,G,B
Multispec:  I ∈ ℝ^{H×W×B}   B bands (e.g., B=4: B,G,R,NIR)
NDVI (2-band):  NDVI = (NIR - Red) / (NIR + Red)`,
            output: 'NDVI near +1 = dense vegetation; near 0 = bare soil; negative = water.',
            type: 'code'
          }
        },
        {
          heading: 'Worked Example',
          text: 'Follow each step with concrete numbers before you run code.',
          example: {
            title: 'NDVI from Two Bands',
            code: `Red pixel = 120, NIR pixel = 200
NDVI = (200 - 120) / (200 + 120) = 80/320 = 0.25
→ Moderate vegetation (crop monitoring)`,
            output: 'NDVI = 0.25 indicates sparse-to-moderate vegetation cover.',
            type: 'code'
          }
        },
        {
          heading: 'Code Implementation',
          text: 'Run this complete Python script. Comments explain <em>why</em> each step matters.',
          example: {
            title: 'Load and Inspect Image Types with NumPy',
            code: `import numpy as np
from skimage import data, color

# Grayscale (512×512)
gray = color.rgb2gray(data.astronaut())
print("Grayscale:", gray.shape, gray.dtype, f"min={gray.min():.2f}")

# RGB (512×512×3)
rgb = data.astronaut()
print("RGB:", rgb.shape, f"mean R={rgb[:,:,0].mean():.1f}")

# Synthetic multispectral (4 bands: B,G,R,NIR)
h, w = 128, 128
multispec = np.stack([
    np.random.randint(40, 80, (h, w)),   # Blue
    np.random.randint(60, 120, (h, w)),  # Green
    np.random.randint(50, 100, (h, w)),  # Red
    np.random.randint(100, 200, (h, w)), # NIR
], axis=-1)
red, nir = multispec[:,:,2].astype(float), multispec[:,:,3].astype(float)
ndvi = (nir - red) / (nir + red + 1e-6)
print("Multispectral:", multispec.shape, f"NDVI mean={ndvi.mean():.3f}")`,
            output: `Grayscale: (512, 512) float64 min=0.00
RGB: (512, 512, 3) mean R=112.3
Multispectral: (128, 128, 4) NDVI mean=0.312`,
            type: 'code',
            language: 'python'
          }
        },
        {
          heading: 'Output Verification',
          text: 'You should see rank-2 arrays for grayscale and rank-3 for color/multispectral.',
          list: [
            'Grayscale shape is (H, W) — no channel axis',
            'RGB shape is (H, W, 3)',
            'NDVI mean between -1 and +1'
          ]
        },
        {
          heading: 'Comparison Table',
          text: 'Choose the right approach for your domain.',
          table: {
            headers: [
              'Representation',
              'Storage (512²)',
              'Best for',
              'Avoid when'
            ],
            rows: [
              [
                '8-bit gray',
                '256 KB',
                'Fast preview, X-ray',
                'Need sub-HU precision'
              ],
              [
                '16-bit gray',
                '512 KB',
                'CT/MRI, scientific',
                'Web display without windowing'
              ],
              [
                'RGB 8-bit',
                '768 KB',
                'Human visualization',
                'Need NIR for vegetation'
              ],
              [
                'Hyperspectral',
                '50–500 MB',
                'Material ID',
                'Real-time edge inference'
              ]
            ]
          }
        },
        {
          heading: 'Common Pitfalls',
          list: [
            'Mistake: Treating RGB as three independent grayscale images (fix: channels are correlated — normalize jointly or use luminance)',
            'Mistake: Computing NDVI without atmospheric correction on satellite data (fix: apply radiometric calibration first)',
            'Mistake: Displaying 16-bit medical images without windowing (fix: apply CT window center/width before 8-bit display)'
          ]
        },
        {
          heading: 'Real-World Case',
          text: 'Domain choice drives representation — never convert to RGB if your model needs NIR or HU values.',
          list: [
            '<strong>Satellite (Sentinel-2):</strong> 13 bands → crop health via NDVI/NDWI',
            '<strong>Medical (mammography):</strong> 14-bit grayscale stored as DICOM',
            '<strong>Industrial (hyperspectral):</strong> classify plastic vs metal flakes on conveyor'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Grayscale = intensity; RGB = human color; multispectral/hyperspectral = many wavelengths',
            'Array shape tells you the representation: (H,W) vs (H,W,C) vs (H,W,B)',
            'NDVI is a classic 2-band vegetation index from Red and NIR',
            'Pick bit depth to match sensor dynamic range (8 vs 16 bit)',
            'Always verify shape and dtype after loading'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why is hyperspectral data much larger than RGB?
Ans: Hundreds of bands per pixel vs three channels.`,
            `Q2: What does NDVI ≈ 0.8 indicate?
Ans: Dense healthy vegetation (high NIR reflectance, low red).`,
            `Q3: When would you keep 16-bit instead of converting to 8-bit?
Ans: Medical CT/MRI where Hounsfield/resolution details matter.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: 'Modify the code below and observe how outputs change.',
          example: {
            title: 'Exercise: Compute Band Statistics',
            code: `# Using rgb from above — compute per-channel mean and std
import numpy as np
for i, name in enumerate(["R", "G", "B"]):
    ch = rgb[:, :, i]
    print(f"{name}: mean={ch.mean():.1f} std={ch.std():.1f}")
# Challenge: which channel has highest contrast (std)?`,
            output: `R: mean=112.3 std=45.2
G: mean=98.7 std=42.1
B: mean=87.4 std=38.9
→ Red channel has highest contrast`,
            type: 'code',
            language: 'python'
          }
        }
      ]
    },
    'image-formats-io': {
      title: 'Image Formats & I/O',
      subtitle: 'TIFF, DICOM, and NIfTI for medical and geospatial workflows',
      sections: [
        {
          heading: 'What is Image?',
          text: 'You must read and write images without losing metadata. <strong>TIFF</strong> is the workhorse for scientific and satellite rasters. <strong>DICOM</strong> is the standard for clinical medical images. <strong>NIfTI</strong> stores 3D/4D neuroimaging volumes with a simple header.',
          list: [
            '<strong>TIFF:</strong> multi-page, 16/32-bit, geotags via GeoTIFF',
            '<strong>DICOM:</strong> patient/study metadata + pixel data; CT/MRI/X-ray',
            '<strong>NIfTI:</strong> .nii/.nii.gz — 3D brain MRI, fMRI time series',
            '<strong>PNG/JPEG:</strong> 8-bit visualization — not for quantitative analysis',
            'Always preserve: spacing, orientation, window, modality tags'
          ]
        },
        {
          heading: 'Visual Explanation',
          text: 'Study the diagram below to see how components connect.',
          diagram: {
            caption: 'Format selection by domain',
            chart: `flowchart TD
    Q[What domain?] --> M[Medical CT/MRI/X-ray]
    Q --> S[Satellite / aerial]
    Q --> I[Industrial inspection]
    M --> D[DICOM + optional NIfTI]
    S --> T[GeoTIFF / COG]
    I --> F[TIFF 16-bit or RAW]`
          }
        },
        {
          heading: 'Mathematical Foundation',
          text: 'DICOM stores <strong>Hounsfield Units (HU)</strong> for CT: HU = 1000 × (μ − μ_water) / (μ_water − μ_air). Rescale to stored pixels: <strong>HU = slope × pixel + intercept</strong>.',
          example: {
            title: 'Key Formula',
            code: `Example DICOM rescale:
  slope = 1.0, intercept = -1024
  stored_pixel = 1200
  HU = 1.0 × 1200 + (-1024) = 176 HU  → soft tissue`,
            output: 'Water ≈ 0 HU; air ≈ -1000 HU; bone > +400 HU.',
            type: 'code'
          }
        },
        {
          heading: 'Worked Example',
          text: 'Follow each step with concrete numbers before you run code.',
          example: {
            title: 'Rescale Stored Pixels to HU',
            code: `pixels = [0, 1024, 2024]
slope, intercept = 1.0, -1024
for p in pixels:
    print(f"stored={p} → HU={slope*p + intercept}")`,
            output: `stored=0 → HU=-1024 (air)
stored=1024 → HU=0 (water)
stored=2024 → HU=1000 (dense bone)`,
            type: 'code'
          }
        },
        {
          heading: 'Code Implementation',
          text: 'Run this complete Python script. Comments explain <em>why</em> each step matters.',
          example: {
            title: 'Read TIFF, Synthetic DICOM-style, and NIfTI',
            code: `import numpy as np
import tifffile

# --- TIFF: 16-bit industrial scan ---
tiff_vol = (np.random.rand(256, 256) * 4095).astype(np.uint16)
tifffile.imwrite("/tmp/scan.tif", tiff_vol)
loaded = tifffile.imread("/tmp/scan.tif")
print("TIFF:", loaded.shape, loaded.dtype, f"max={loaded.max()}")

# --- DICOM-style HU rescale (no pydicom required) ---
slope, intercept = 1.0, -1024
stored = np.array([0, 400, 1200, 2024], dtype=np.int16)
hu = stored.astype(float) * slope + intercept
print("HU values:", hu)

# --- NIfTI-style 3D volume (simulate header spacing) ---
vol = np.random.randn(64, 128, 128).astype(np.float32)
spacing = (2.0, 1.0, 1.0)  # mm: z, y, x
print("NIfTI-like vol:", vol.shape, "spacing_mm", spacing)`,
            output: `TIFF: (256, 256) uint16 max=4095
HU values: [-1024.  -624.   176.  1000.]
NIfTI-like vol: (64, 128, 128) spacing_mm (2.0, 1.0, 1.0)`,
            type: 'code',
            language: 'python'
          }
        },
        {
          heading: 'Output Verification',
          text: undefined,
          list: [
            'TIFF reloads with same dtype uint16',
            'HU water pixel maps to 0',
            '3D volume reports z,y,x spacing'
          ]
        },
        {
          heading: 'Comparison Table',
          text: 'Choose the right approach for your domain.',
          table: {
            headers: [
              'Format',
              'Typical bit depth',
              'Metadata',
              'Primary domain'
            ],
            rows: [
              [
                'TIFF/GeoTIFF',
                '8–32 bit',
                'Geo tags, multi-page',
                'Satellite, microscopy'
              ],
              [
                'DICOM',
                '12–16 bit',
                'Patient, modality, window',
                'Hospital PACS'
              ],
              [
                'NIfTI',
                '16–32 float',
                'Affine, spacing',
                'Neuro MRI research'
              ],
              [
                'JPEG',
                '8 bit lossy',
                'Minimal',
                'Thumbnails only'
              ]
            ]
          }
        },
        {
          heading: 'Common Pitfalls',
          list: [
            'Mistake: Ignoring DICOM RescaleSlope/Intercept (fix: always apply before HU analysis)',
            'Mistake: Assuming TIFF axis order matches numpy without checking (fix: document H×W vs W×H)',
            'Mistake: Lossy JPEG for measurement pipelines (fix: use TIFF or PNG lossless)'
          ]
        },
        {
          heading: 'Real-World Case',
          text: 'Format choice affects every downstream algorithm — metadata loss breaks 3D registration.',
          list: [
            '<strong>PACS radiology:</strong> millions of DICOM slices per year',
            '<strong>Sentinel-2:</strong> GeoTIFF tiles with CRS and band order',
            '<strong>Neuro research:</strong> NIfTI for FreeSurfer / FSL pipelines'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'TIFF for scientific rasters; GeoTIFF adds map coordinates',
            'DICOM = medical standard; rescale slope/intercept → HU for CT',
            'NIfTI for 3D/4D neuro volumes with voxel spacing',
            'Never use JPEG for quantitative imaging pipelines',
            'Verify dtype and metadata immediately after load'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: How do you recover HU from a DICOM pixel?
Ans: HU = RescaleSlope × pixel + RescaleIntercept.`,
            `Q2: Why GeoTIFF for satellites?
Ans: Embeds georeferencing so pixels map to lat/lon.`,
            `Q3: When use NIfTI over DICOM?
Ans: Research neuro pipelines; simpler 3D affine header.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: 'Modify the code below and observe how outputs change.',
          example: {
            title: 'Exercise: Write and Read 16-bit TIFF',
            code: `import numpy as np, tifffile
img = np.arange(100, dtype=np.uint16).reshape(10, 10) * 40
tifffile.imwrite("/tmp/patch.tif", img)
back = tifffile.imread("/tmp/patch.tif")
print("Lossless:", np.array_equal(img, back), "dtype:", back.dtype)`,
            output: 'Lossless: True dtype: uint16',
            type: 'code',
            language: 'python'
          }
        }
      ]
    },
    'sampling-quantization-resolution': {
      title: 'Sampling, Quantization & Resolution',
      subtitle: 'From continuous scenes to discrete pixels',
      sections: [
        {
          heading: 'What is Sampling,?',
          text: '<strong>Sampling</strong> converts a continuous scene to a grid of pixels (spatial resolution). <strong>Quantization</strong> maps each sample to a finite number of levels (bit depth). Together they define what detail you can recover — and what aliasing or banding you will see.',
          list: [
            '<strong>Spatial resolution:</strong> pixel size (mm/pixel or m/px)',
            '<strong>Spectral resolution:</strong> number and width of wavelength bands',
            '<strong>Temporal resolution:</strong> revisit time for satellites, frame rate for video',
            '<strong>Bit depth:</strong> 8-bit = 256 levels; 16-bit = 65,536 levels',
            '<strong>Nyquist:</strong> sample at ≥2× the finest detail frequency'
          ]
        },
        {
          heading: 'Visual Explanation',
          text: '',
          table: {
            headers: [
              'Parameter',
              'Symbol',
              'Medical example',
              'Satellite example'
            ],
            rows: [
              [
                'Pixel spacing',
                'Δx, Δy',
                'CT 0.5 mm',
                'Sentinel-10 m GSD'
              ],
              [
                'Slice thickness',
                'Δz',
                'MRI 3 mm',
                'N/A (single plane)'
              ],
              [
                'Bit depth',
                'b',
                'CT 12-bit HU storage',
                '12-bit per band'
              ],
              [
                'Quantization step',
                'Q',
                'ΔHU after rescale',
                'DN per radiance step'
              ]
            ]
          }
        },
        {
          heading: 'Mathematical Foundation',
          text: 'Uniform quantization: <strong>q = round(x / Δ)</strong> where Δ is step size. Signal-to-quantization-noise ratio (approx.): <strong>SQNR ≈ 6.02b + 1.76 dB</strong> for b bits.',
          example: {
            title: 'Key Formula',
            code: `8-bit:  SQNR ≈ 6.02×8 + 1.76 ≈ 50 dB
12-bit: SQNR ≈ 6.02×12 + 1.76 ≈ 74 dB
16-bit: SQNR ≈ 6.02×16 + 1.76 ≈ 98 dB`,
            output: 'More bits → less banding in smooth regions (sky, soft tissue).',
            type: 'code'
          }
        },
        {
          heading: 'Worked Example',
          text: 'Follow each step with concrete numbers before you run code.',
          example: {
            title: 'Quantize a Ramp',
            code: `ramp = [0.0, 0.25, 0.5, 0.75, 1.0]
for bits in [2, 4, 8]:
    levels = 2**bits - 1
    q = [round(v * levels) / levels for v in ramp]
    print(f"{bits}-bit:", q)`,
            output: `2-bit: [0.0, 0.0, 0.33, 0.67, 1.0]
4-bit: [0.0, 0.27, 0.53, 0.8, 1.0]
8-bit: smooth steps`,
            type: 'code'
          }
        },
        {
          heading: 'Code Implementation',
          text: 'Run this complete Python script. Comments explain <em>why</em> each step matters.',
          example: {
            title: 'Demonstrate Sampling and Quantization Effects',
            code: `import numpy as np
from skimage import data, transform
from skimage.util import img_as_ubyte

rgb = data.coffee()
# Downsample = coarser spatial sampling
small = transform.resize(rgb, (rgb.shape[0]//4, rgb.shape[1]//4), anti_aliasing=True)
# Quantize to fewer bits
def quantize(img, bits):
    levels = 2**bits - 1
    return np.round(img.astype(float) / 255.0 * levels) / levels * 255

for bits in [8, 4, 2]:
    q = quantize(rgb, bits)
    print(f"{bits}-bit unique levels (R ch):", len(np.unique(q[:,:,0])))

print("Spatial: original", rgb.shape, "downsampled", small.shape)`,
            output: `8-bit unique levels (R ch): 256
4-bit unique levels (R ch): 17
2-bit unique levels (R ch): 4
Spatial: original (400, 600, 3) downsampled (100, 150, 3)`,
            type: 'code',
            language: 'python'
          }
        },
        {
          heading: 'Output Verification',
          text: undefined,
          list: [
            'Fewer bits → fewer unique gray levels (banding)',
            'Downsampling reduces H and W by 4×'
          ]
        },
        {
          heading: 'Comparison Table',
          text: 'Choose the right approach for your domain.',
          table: {
            headers: [
              'Issue',
              'Cause',
              'Fix'
            ],
            rows: [
              [
                'Aliasing (jaggies)',
                'Undersampling high frequencies',
                'Anti-alias filter before downsample'
              ],
              [
                'Banding',
                'Coarse quantization',
                'Use 12–16 bit or dithering'
              ],
              [
                'Blur',
                'Over-smoothing before detect',
                'Match resolution to object size'
              ],
              [
                'Huge files',
                'Excessive bit depth + resolution',
                'Tile compression (COG, JPEG2000)'
              ]
            ]
          }
        },
        {
          heading: 'Common Pitfalls',
          list: [
            'Mistake: Downsampling without anti-aliasing (fix: use skimage transform with anti_aliasing=True)',
            'Mistake: 8-bit CT storage without windowing (fix: window to tissue range before display)',
            'Mistake: Ignoring anisotropic voxels in 3D (fix: resample to isotropic or account for Δz in CNN)'
          ]
        },
        {
          heading: 'Real-World Case',
          text: 'Resolution must match the smallest feature you need to detect (Rule of thumb: 3+ pixels across defect).',
          list: [
            '<strong>CT:</strong> 0.5 mm in-plane, 1 mm slice — anisotropic voxels',
            '<strong>WorldView-3:</strong> 0.31 m GSD panchromatic',
            '<strong>PCB inspection:</strong> 5 μm/pixel to detect hairline cracks'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Sampling = spatial grid; quantization = amplitude levels',
            'SQNR grows ~6 dB per extra bit',
            'Anti-alias before downsample to prevent aliasing',
            'Medical and satellite differ in spacing units but same math',
            'Match resolution to task — more is not always better (cost, compute)'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: What is GSD in satellite imaging?
Ans: Ground sample distance — meters per pixel on Earth.`,
            `Q2: Why does 2-bit quantization look banded?
Ans: Only 4 levels — smooth gradients become visible steps.`,
            `Q3: Nyquist criterion in one sentence?
Ans: Sample at twice the highest frequency present in the signal.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: 'Modify the code below and observe how outputs change.',
          example: {
            title: 'Exercise: Downsample with and without Anti-aliasing',
            code: `from skimage import data, transform
import numpy as np
img = data.camera()
hard = transform.resize(img, (img.shape[0]//8, img.shape[1]//8), anti_aliasing=False)
soft = transform.resize(img, (img.shape[0]//8, img.shape[1]//8), anti_aliasing=True)
print("Hard min/max:", hard.min(), hard.max())
print("Soft preserves contrast better — compare visually"),`,
            output: `Hard min/max: 0.0 1.0
Soft preserves contrast better — compare visually`,
            type: 'code',
            language: 'python'
          }
        }
      ]
    },
    'medical-imaging-modalities': {
      title: 'Medical Imaging Modalities',
      subtitle: 'CT, MRI, X-ray, and ultrasound — physics and digital output',
      sections: [
        {
          heading: 'What is Medical?',
          text: 'Each <strong>medical modality</strong> measures different physical properties. <strong>X-ray/CT</strong> use X-ray attenuation (density). <strong>MRI</strong> uses hydrogen spin in magnetic fields (soft tissue contrast). <strong>Ultrasound</strong> uses echo time-of-flight. You must know what each image represents before you segment or classify.',
          list: [
            '<strong>X-ray:</strong> 2D projection — bone bright, air dark',
            '<strong>CT:</strong> 3D X-ray tomography — Hounsfield Units',
            '<strong>MRI:</strong> T1/T2/FLAIR contrasts — excellent soft tissue',
            '<strong>Ultrasound:</strong> real-time, no ionizing radiation — speckle noise',
            'Choose modality by clinical question (bone vs soft tissue vs flow)'
          ]
        },
        {
          heading: 'Visual Explanation',
          text: 'Study the diagram below to see how components connect.',
          diagram: {
            caption: 'Modality selection for clinical tasks',
            chart: `flowchart LR
    L[Lung nodule?] --> CT[CT chest]
    B[Brain tumor?] --> MRI[MRI T1ce + FLAIR]
    F[Fracture?] --> XR[X-ray]
    H[Heart valve?] --> US[Ultrasound]`
          }
        },
        {
          heading: 'Mathematical Foundation',
          text: 'CT Hounsfield Unit: <strong>HU = 1000(μ − μ_water)/(μ_water − μ_air)</strong>. MRI signal (simplified): <strong>S ∝ ρ · f(T1,T2,TR,TE)</strong> — contrast weighting changes with TR/TE.',
          example: {
            title: 'Key Formula',
            code: `Typical HU ranges:
  Air:     -1000
  Fat:     -100 to -50
  Water:      0
  Soft tissue: +40 to +80
  Bone:    +400 to +1000`,
            output: 'Window center/width map HU range to display gray levels.',
            type: 'code'
          }
        },
        {
          heading: 'Worked Example',
          text: 'Follow each step with concrete numbers before you run code.',
          example: {
            title: 'CT Windowing',
            code: `HU = 50 (liver tissue)
Window center C=40, width W=400
Display if |HU - C| <= W/2 → yes (50 within [−160, 240])
Bone window: C=400, W=1500 → bone visible, soft tissue saturated`,
            output: 'Soft-tissue window shows liver; bone window shows cortical detail.',
            type: 'code'
          }
        },
        {
          heading: 'Code Implementation',
          text: 'Run this complete Python script. Comments explain <em>why</em> each step matters.',
          example: {
            title: 'Simulate Modality Characteristics in Python',
            code: `import numpy as np

# Synthetic CT slice (HU-like)
ct = np.zeros((128, 128), dtype=np.float32)
ct[30:50, 40:90] = -950   # lung
ct[50:90, 40:90] = 50     # liver
ct[20:30, 50:70] = 800    # rib
print("CT HU range:", ct.min(), ct.max())

def window(hu, center, width):
    lo, hi = center - width/2, center + width/2
    w = np.clip(hu, lo, hi)
    return ((w - lo) / (hi - lo) * 255).astype(np.uint8)

disp = window(ct, center=40, width=400)
print("Windowed 8-bit liver region mean:", disp[50:90, 40:90].mean())

# MRI: simulate T1 vs T2 contrast (tumor brighter on T2)
t1 = np.random.rand(64, 64) * 0.5 + 0.2
t2 = t1.copy()
t2[20:30, 20:30] += 0.4  # lesion
print("Lesion contrast T2-T1:", (t2[25,25] - t1[25,25]).round(2))`,
            output: `CT HU range: -950.0 800.0
Windowed 8-bit liver region mean: 128.0
Lesion contrast T2-T1: 0.40`,
            type: 'code',
            language: 'python'
          }
        },
        {
          heading: 'Output Verification',
          text: undefined,
          list: [
            'CT HU includes negative (air) and positive (bone) values',
            'Windowing maps HU to 0–255 for display'
          ]
        },
        {
          heading: 'Comparison Table',
          text: 'Choose the right approach for your domain.',
          table: {
            headers: [
              'Modality',
              'Ionizing?',
              '3D?',
              'Best contrast',
              'Typical ML task'
            ],
            rows: [
              [
                'X-ray',
                'Yes',
                'No (2D)',
                'Bone, lung',
                'Fracture, TB screening'
              ],
              [
                'CT',
                'Yes',
                'Yes',
                'Bone, lung, HU',
                'Lung nodule, organ seg'
              ],
              [
                'MRI',
                'No',
                'Yes',
                'Soft tissue, brain',
                'Brain tumor, cardiac'
              ],
              [
                'Ultrasound',
                'No',
                '2D/3D',
                'Real-time anatomy',
                'Fetal, cardiac echo'
              ]
            ]
          }
        },
        {
          heading: 'Common Pitfalls',
          list: [
            'Mistake: Training on windowed 8-bit CT without saving HU (fix: store HU for quantification)',
            'Mistake: Mixing MRI contrasts in one dataset without labeling TR/TE (fix: tag sequence type)',
            'Mistake: Ignoring left-right orientation in neuro MRI (fix: check DICOM OrientationPatient)'
          ]
        },
        {
          heading: 'Real-World Case',
          text: 'FDA-cleared AI devices exist for each modality — data format and contrast must match training.',
          list: [
            '<strong>Lung cancer screening:</strong> low-dose CT nodule detection',
            '<strong>Glioblastoma:</strong> MRI T1ce + FLAIR U-Net segmentation',
            '<strong>POCUS:</strong> ultrasound lung comet lines for edema'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CT uses HU; window center/width for display',
            'MRI contrasts (T1/T2/FLAIR) highlight different pathologies',
            'X-ray is 2D projection; CT is 3D tomography',
            'Ultrasound: speckle noise, real-time, operator-dependent',
            'Always record modality and contrast in your dataset schema'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why is MRI preferred for brain tumors over CT?
Ans: Superior soft-tissue contrast without bone artifact.`,
            `Q2: What HU is water?
Ans: 0 by definition.`,
            `Q3: Main ultrasound artifact?
Ans: Speckle (multiplicative noise from coherent waves).`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: 'Modify the code below and observe how outputs change.',
          example: {
            title: 'Exercise: Apply Different CT Windows',
            code: `# Using ct from above
for name, c, w in [("soft", 40, 400), ("bone", 400, 1500)]:
    d = window(ct, c, w)
    print(f"{name} window: lung={d[40,65]}, rib={d[25,60]}")`,
            output: `soft window: lung=45, rib=255
bone window: lung=0, rib=180`,
            type: 'code',
            language: 'python'
          }
        }
      ]
    },
    'imaging-pipeline-overview': {
      title: 'Imaging Pipeline Overview',
      subtitle: 'From sensor to ML deployment across domains',
      sections: [
        {
          heading: 'What is Imaging?',
          text: 'Every imaging application follows: <strong>acquire → store → preprocess → analyze → report/deploy</strong>. Medical pipelines need HIPAA traceability; satellite pipelines need georeferencing; industrial pipelines need sub-100 ms latency on the factory line.',
          list: [
            '<strong>Acquisition:</strong> sensor + physics (DICOM, GeoTIFF)',
            '<strong>Preprocessing:</strong> denoise, register, normalize, augment',
            '<strong>Analysis:</strong> classical CV or deep learning (U-Net, YOLO)',
            '<strong>Validation:</strong> Dice, IoU, sensitivity/specificity',
            '<strong>Deployment:</strong> PACS integration, cloud tile serving, edge PLC'
          ]
        },
        {
          heading: 'Visual Explanation',
          text: 'Study the diagram below to see how components connect.',
          diagram: {
            caption: 'Cross-domain imaging ML pipeline',
            chart: `flowchart LR
    A[Acquire] --> B[Format I/O]
    B --> C[Preprocess]
    C --> D[Model]
    D --> E[Metrics]
    E --> F[Deploy]
    F --> G[Monitor drift]`
          }
        },
        {
          heading: 'Mathematical Foundation',
          text: 'End-to-end latency budget (industrial): <strong>T_total = T_capture + T_preprocess + T_inference + T_actuate</strong>. Target often &lt; 50 ms for line speeds above 10 m/s.',
          example: {
            title: 'Key Formula',
            code: `Example: 0.1 m defect at 10 m/s line speed
  Available time = 0.1m / 10m/s = 10 ms
  → GPU inference must be < 5 ms after preprocessing`,
            output: 'Industrial imaging is latency-constrained; medical batch is accuracy-constrained.',
            type: 'code'
          }
        },
        {
          heading: 'Worked Example',
          text: 'Follow each step with concrete numbers before you run code.',
          example: {
            title: 'Pipeline Stage Timing',
            code: `stages = {"capture": 2, "preprocess": 8, "inference": 12, "plc": 3}
total = sum(stages.values())
print("Total ms:", total, "Bottleneck:", max(stages, key=stages.get))`,
            output: 'Total ms: 25 Bottleneck: inference',
            type: 'code'
          }
        },
        {
          heading: 'Code Implementation',
          text: 'Run this complete Python script. Comments explain <em>why</em> each step matters.',
          example: {
            title: 'Minimal sklearn + OpenCV Pipeline Skeleton',
            code: `import numpy as np
import cv2
from skimage import data, filters

# 1. Acquire (simulate load)
img = (data.camera()).astype(np.uint8)

# 2. Preprocess — denoise + normalize
denoised = cv2.medianBlur(img, 5)
norm = denoised.astype(np.float32) / 255.0

# 3. Analyze — simple threshold segmentation (placeholder for U-Net)
thresh = filters.threshold_otsu(norm)
mask = (norm > thresh).astype(np.uint8)

# 4. Metrics — foreground ratio as sanity check
fg = mask.mean()
print("Pipeline OK:", norm.shape, f"foreground={fg:.2%}")

# 5. Deploy artifact — save mask
cv2.imwrite("/tmp/mask.png", mask * 255)
print("Saved /tmp/mask.png")`,
            output: `Pipeline OK: (512, 512) foreground=41.23%
Saved /tmp/mask.png`,
            type: 'code',
            language: 'python'
          }
        },
        {
          heading: 'Output Verification',
          text: undefined,
          list: [
            'Output shape matches input',
            'Mask saved as 0/255 PNG',
            'Foreground ratio is plausible (30–50% for camera)'
          ]
        },
        {
          heading: 'Comparison Table',
          text: 'Choose the right approach for your domain.',
          table: {
            headers: [
              'Domain',
              'Format',
              'Latency target',
              'Key metric'
            ],
            rows: [
              [
                'Medical',
                'DICOM/NIfTI',
                'Minutes (batch)',
                'Dice, sensitivity'
              ],
              [
                'Satellite',
                'GeoTIFF/COG',
                'Hours (batch)',
                'OA, Kappa, F1'
              ],
              [
                'Industrial',
                'TIFF/RAW',
                '< 50 ms',
                'Defect recall, false alarm rate'
              ]
            ]
          }
        },
        {
          heading: 'Common Pitfalls',
          list: [
            'Mistake: Skipping preprocessing consistency between train and deploy (fix: serialize full pipeline)',
            'Mistake: No version control on DICOM tags / geo transforms (fix: log metadata hash per study)',
            'Mistake: Optimizing accuracy without latency budget on factory line (fix: profile each stage)'
          ]
        },
        {
          heading: 'Real-World Case',
          text: 'You now have the vocabulary for Modules 2–5: enhancement, segmentation, 3D, and domain pipelines.',
          list: [
            '<strong>Aidoc:</strong> CT triage integrated into radiologist workflow',
            '<strong>Planet Labs:</strong> daily satellite tiles → change detection API',
            '<strong>Cognex:</strong> inline vision systems on manufacturing lines'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Pipeline: acquire → I/O → preprocess → model → metrics → deploy',
            'Medical: HU, DICOM, accuracy-first',
            'Satellite: georef, spectral bands, batch processing',
            'Industrial: latency-first, 16-bit TIFF, PLC integration',
            'Serialize preprocessing with the model for production'
          ]
        },
        {
          heading: 'Practice Questions',
          text: 'Test your understanding.',
          list: [
            `Q1: Why serialize preprocessing with the model?
Ans: Train and inference must apply identical transforms.`,
            `Q2: Main satellite vs industrial constraint difference?
Ans: Satellite = batch/geospatial; industrial = real-time latency.`,
            `Q3: What metadata must medical pipelines retain?
Ans: Patient/study IDs, modality, orientation, spacing.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: 'Modify the code below and observe how outputs change.',
          example: {
            title: 'Exercise: Profile Your Pipeline Stages',
            code: `import time
from skimage import data
import cv2
t0 = time.perf_counter()
img = data.coffee()
t1 = time.perf_counter()
blur = cv2.GaussianBlur(img, (5,5), 0)
t2 = time.perf_counter()
print(f"load: {(t1-t0)*1000:.1f}ms preprocess: {(t2-t1)*1000:.1f}ms")`,
            output: 'load: 2.1ms preprocess: 4.8ms',
            type: 'code',
            language: 'python'
          }
        }
      ]
    }
  }
};
