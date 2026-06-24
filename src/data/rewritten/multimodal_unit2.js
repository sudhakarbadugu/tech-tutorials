// multimodal machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js multimodal_unit2.js

export const multimodalUnit2Content = {
  unit2: {
    clip: {
      title: 'CLIP',
      subtitle: 'Contrastive Language-Image Pre-training',
      sections: [
        {
          heading: 'What is CLIP?',
          text: 'CLIP (Contrastive Language-Image Pre-training), introduced by OpenAI in 2021, is a dual-encoder model that learns a shared representation space for images and text by training on 400 million image-text pairs collected from the internet. It uses a contrastive objective: matched image-text pairs are pulled together, and all other pairs in a batch are pushed apart. Once trained, CLIP can perform zero-shot image classification, image-text retrieval, and many vision-language tasks without task-specific training.',
          list: [
            'CLIP has two encoders: an image encoder (ResNet or Vision Transformer) and a text encoder (Transformer)',
            'Both encoders project into the same d-dimensional space (e.g., 512 dimensions)',
            'Training objective is symmetric cross-entropy over an N×N similarity matrix',
            'CLIP generalizes surprisingly well to new datasets and domains without fine-tuning'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>CLIP (Contrastive Language-Image Pre-training), introduced by OpenAI in 2021, is a dual-encoder model that learns a shared representation space for images and text by training on 400 million image-text pairs collected from the internet. It uses a contrastive objective: matched image-text pairs are pulled together, and all other pairs in a batch are pushed apart. Once trained, CLIP can perform zero-shot image classification, image-text retrieval, and many vision-language tasks without task-specific training. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, CLIP (Contrastive Language-Image Pre-training), introduced by OpenAI in 2021, is a dual-encoder model that learns a shared representation space for images and text by training on 400 million image-text pairs collected from the internet. It uses a contrastive objective: matched image-text pairs are pulled together, and all other pairs in a batch are pushed apart. Once trained, CLIP can perform zero-shot image classification, image-text retrieval, and many vision-language tasks without task-specific training. CLIP has two encoders: an image encoder (ResNet or Vision Transformer) and a text encoder (Transformer) Both encoders project into the same d-dimensional space (e.g., 512 dimensions) Training objective is symmetric cross-entropy over an N×N similarity matrix CLIP generalizes surprisingly well to new datasets and domains without fine-tuning</p>',
            '<p>You use clip when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — CLIP

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: CLIP sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'CLIP training objective: maximize cosine similarity for N matched pairs and minimize it for N²−N mismatched pairs in a batch.',
          example: {
            title: 'Example: CLIP Forward Pass and Loss in PyTorch',
            code: `import torch
import torch.nn as nn
import torch.nn.functional as F
from transformers import CLIPModel, CLIPProcessor

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Suppose we have N image-text pairs
images = torch.randn(4, 3, 224, 224)
texts = ["a photo of a cat", "a photo of a dog",
         "a photo of a car", "a photo of a tree"]

inputs = processor(text=texts, images=images, return_tensors="pt",
                   padding=True)
outputs = model(**inputs)

# Image and text embeddings
image_embeds = outputs.image_embeds   # [N, d]
text_embeds = outputs.text_embeds     # [N, d]

# Normalize
image_embeds = F.normalize(image_embeds, dim=-1)
text_embeds = F.normalize(text_embeds, dim=-1)

# Similarity matrix scaled by learned temperature
logit_scale = model.logit_scale.exp()
logits = logit_scale * image_embeds @ text_embeds.T  # [N, N]

labels = torch.arange(len(images))
loss = (F.cross_entropy(logits, labels) +
        F.cross_entropy(logits.T, labels)) / 2
print(f"loss: {loss.item():.4f}")

# Manual CLIP-style model skeleton
class SimpleCLIP(nn.Module):
    def __init__(self, image_encoder, text_encoder, embed_dim=512):
        super().__init__()
        self.image_encoder = image_encoder
        self.text_encoder = text_encoder
        self.image_proj = nn.Linear(image_encoder.output_dim, embed_dim)
        self.text_proj = nn.Linear(text_encoder.output_dim, embed_dim)
        self.logit_scale = nn.Parameter(torch.ones([]) * torch.log(torch.tensor(4.0)))

    def forward(self, images, text_tokens):
        z_i = F.normalize(self.image_proj(self.image_encoder(images)), dim=-1)
        z_t = F.normalize(self.text_proj(self.text_encoder(text_tokens)), dim=-1)
        return z_i, z_t, self.logit_scale.exp()`,
            output: 'CLIP learns aligned embeddings by contrasting matched and mismatched pairs.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'CLIP with Python',
            code: `import numpy as np
# CLIP — image + text feature placeholders
img_feat = np.random.randn(512)
txt_feat = np.random.randn(512)
sim = np.dot(img_feat, txt_feat) / (np.linalg.norm(img_feat)*np.linalg.norm(txt_feat))
print("Cosine similarity (random):", round(sim, 4))`,
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
          text: 'CLIP variants and their design choices.',
          table: {
            headers: [
              'Variant',
              'Image Encoder',
              'Text Encoder',
              'Parameters',
              'Best For'
            ],
            rows: [
              [
                'CLIP ViT-B/32',
                'Vision Transformer, patch 32',
                'Transformer',
                '~150M',
                'Fast inference, good zero-shot'
              ],
              [
                'CLIP ViT-L/14',
                'Vision Transformer, patch 14',
                'Transformer',
                '~400M',
                'Higher accuracy'
              ],
              [
                'CLIP ResNet-50',
                'ResNet-50',
                'Transformer',
                '~77M',
                'Legacy CNN baseline'
              ],
              [
                'OpenCLIP',
                'Various',
                'Various',
                'Varies',
                'Open-source reproductions'
              ],
              [
                'SigLIP',
                'Vision Transformer',
                'Transformer',
                'Varies',
                'Simpler sigmoid loss, better efficiency'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to normalize embeddings before computing similarity (fix: always L2-normalize image and text embeddings; CLIP similarity is cosine-based)',
            'Mistake 2: Using raw class names without prompt templates (fix: use prompts like "a photo of a {label}" or an ensemble of templates for better zero-shot accuracy)',
            'Mistake 3: Assuming CLIP works well on all domains (fix: CLIP underperforms on fine-grained, medical, or synthetic domains; fine-tune or use domain-specific models)'
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
          text: 'CLIP powers many modern vision-language systems.',
          list: [
            'Zero-shot image classification: classify images into any category described by text',
            'Image-text retrieval: search images by text or text by image',
            'Stable Diffusion: CLIP provides text conditioning for text-to-image generation',
            'Open-vocabulary object detection: detect objects using text queries without bounding-box training'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'CLIP = dual image-text encoder trained with contrastive learning',
            'Symmetric cross-entropy aligns matched pairs and separates mismatched pairs',
            'Use L2-normalized embeddings and prompt templates for best zero-shot results',
            'CLIP enables zero-shot classification, retrieval, and open-vocabulary tasks',
            'Domain shift and fine-grained recognition remain challenges'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the two main components of CLIP?
Ans: An image encoder and a text encoder that project into a shared embedding space.`,
            `Q2: Why is normalization important in CLIP?
Ans: CLIP uses cosine similarity, which requires unit-norm embeddings to produce meaningful scores.`,
            `Q3: What is prompt ensembling?
Ans: Averaging text embeddings from multiple prompt templates (e.g., "a photo of a {}" and "a rendering of a {}") to improve zero-shot robustness.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>CLIP</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — CLIP")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'zero-shot-classification': {
      title: 'Zero-Shot Image Classification with CLIP',
      subtitle: 'Classifying into new categories using only text',
      sections: [
        {
          heading: 'What is Zero-Shot Classification?',
          text: 'Zero-shot image classification is the ability to classify images into categories that the model never saw during training. CLIP achieves this by comparing each image to text descriptions of the candidate classes. Instead of learning a fixed classifier head, the model computes similarity between image embeddings and text embeddings of class descriptions, choosing the most similar class.',
          list: [
            'No task-specific training data is required',
            'The classifier is built at inference time from text prompts',
            'Any category can be added by writing a new text description',
            'Performance depends on how well the text descriptions align with the visual concepts'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Zero-shot image classification is the ability to classify images into categories that the model never saw during training. CLIP achieves this by comparing each image to text descriptions of the candidate classes. Instead of learning a fixed classifier head, the model computes similarity between image embeddings and text embeddings of class descriptions, choosing the most similar class. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Zero-shot image classification is the ability to classify images into categories that the model never saw during training. CLIP achieves this by comparing each image to text descriptions of the candidate classes. Instead of learning a fixed classifier head, the model computes similarity between image embeddings and text embeddings of class descriptions, choosing the most similar class. No task-specific training data is required The classifier is built at inference time from text prompts Any category can be added by writing a new text description Performance depends on how well the text descriptions align with the visual concepts</p>',
            '<p>You use zero-shot image classification with clip when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Zero-Shot Image Classification with CLIP

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Zero-Shot Image Classification with CLIP sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Prediction = argmax over classes of cosine similarity between image embedding and class text embedding.',
          example: {
            title: 'Example: Zero-Shot Classification Pipeline',
            code: `from transformers import CLIPProcessor, CLIPModel
from PIL import Image
import torch

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

image = Image.new('RGB', (224, 224), color='red')  # placeholder
labels = ["cat", "dog", "car", "airplane"]
prompts = [f"a photo of a {label}" for label in labels]

inputs = processor(text=prompts, images=image,
                   return_tensors="pt", padding=True)
outputs = model(**inputs)
logits = outputs.logits_per_image  # [1, num_classes]
probs = logits.softmax(dim=-1)

for label, prob in zip(labels, probs[0]):
    print(f"{label}: {prob.item():.3f}")

# Prompt ensembling for better accuracy
import itertools
templates = [
    "a photo of a {}.",
    "a blurry photo of a {}.",
    "a rendering of a {}.",
    "a cropped photo of the {}."
]
all_prompts = [t.format(l) for t in templates for l in labels]
inputs = processor(text=all_prompts, images=image,
                   return_tensors="pt", padding=True)
with torch.no_grad():
    text_features = model.get_text_features(**inputs)
    text_features = text_features.view(len(templates), len(labels), -1)
    text_features = text_features.mean(dim=0)
    text_features = text_features / text_features.norm(dim=-1, keepdim=True)
    image_features = model.get_image_features(pixel_values=inputs['pixel_values'])
    image_features = image_features / image_features.norm(dim=-1, keepdim=True)
    similarity = image_features @ text_features.T
    print(similarity.argmax(dim=-1))`,
            output: 'Prompt engineering and ensembling significantly improve zero-shot accuracy.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Zero-Shot Image Classification with CLIP with Python',
            code: `import numpy as np
# Zero-Shot Image Classification with CLIP — image + text feature placeholders
img_feat = np.random.randn(512)
txt_feat = np.random.randn(512)
sim = np.dot(img_feat, txt_feat) / (np.linalg.norm(img_feat)*np.linalg.norm(txt_feat))
print("Cosine similarity (random):", round(sim, 4))`,
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
          text: 'Zero-shot vs supervised vs few-shot classification.',
          table: {
            headers: [
              'Setting',
              'Training Labels',
              'New Classes',
              'Typical Accuracy',
              'Use Case'
            ],
            rows: [
              [
                'Supervised',
                'Labeled images per class',
                'Cannot add without retraining',
                'Highest',
                'Production classifiers'
              ],
              [
                'Zero-shot',
                'None',
                'Add via text prompts',
                'Moderate to high',
                'Open-ended categories'
              ],
              [
                'Few-shot',
                '5–20 examples per class',
                'Fine-tune embeddings',
                'High',
                'Rapid adaptation'
              ],
              [
                'Linear probe',
                'Train small head on frozen CLIP',
                'Need examples',
                'Very high',
                'Benchmarking representations'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            `Mistake 1: Using single-word labels as prompts (fix: expand to full phrases like "a photo of a {label}" to match CLIP's training distribution)`,
            `Mistake 2: Not using prompt templates for evaluation (fix: standard templates like those in CLIP's codebase ensure fair comparison across papers)`,
            'Mistake 3: Expecting zero-shot to work on fine-grained species or medical images (fix: use few-shot adaptation or domain-specific pre-training)'
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
          text: 'Zero-shot classification enables flexible categorization.',
          list: [
            'Content tagging: automatically tag user-uploaded photos with descriptive labels without labeled training data',
            'Product classification: categorize e-commerce items by text descriptions in new languages or taxonomies',
            'Surveillance: flag objects or behaviors described in natural language without collecting training images',
            'Scientific imaging: classify unusual microscopy patterns by describing them in text'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Zero-shot classification compares images to text descriptions',
            'Use prompt templates like "a photo of a {class}"',
            'Prompt ensembling improves robustness',
            'Zero-shot is flexible but less accurate than supervised or few-shot on specialized domains',
            `Linear probing is the standard way to measure CLIP's representation quality`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does CLIP zero-shot classification not need labeled training images?
Ans: It encodes candidate class descriptions as text and picks the class whose text embedding is most similar to the image embedding.`,
            `Q2: What is the benefit of prompt ensembling?
Ans: It averages over multiple phrasings, reducing sensitivity to any single prompt and improving accuracy.`,
            `Q3: When should you prefer few-shot over zero-shot?
Ans: When you have a small number of labeled examples and need higher accuracy on a specific domain.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Zero-Shot Image Classification with CLIP</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Zero-Shot Image Classification with CLIP")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'image-text-retrieval': {
      title: 'Image-Text Retrieval',
      subtitle: 'Searching images with text and text with images',
      sections: [
        {
          heading: 'What is Image-Text Retrieval?',
          text: 'Image-text retrieval is the task of finding relevant images given a text query (text-to-image retrieval) or finding relevant text given an image query (image-to-text retrieval). CLIP-style models are ideal because they embed both modalities into the same space, where cosine similarity measures relevance. This powers image search engines, stock photo libraries, and visual recommendation systems.',
          list: [
            'Text-to-image retrieval: input a sentence, output matching images',
            'Image-to-text retrieval: input an image, output matching captions',
            'Uses a shared embedding space and nearest-neighbor search',
            'Large-scale systems use vector databases (FAISS, Pinecone, Weaviate) for fast search'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Image-text retrieval is the task of finding relevant images given a text query (text-to-image retrieval) or finding relevant text given an image query (image-to-text retrieval). CLIP-style models are ideal because they embed both modalities into the same space, where cosine similarity measures relevance. This powers image search engines, stock photo libraries, and visual recommendation systems. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Image-text retrieval is the task of finding relevant images given a text query (text-to-image retrieval) or finding relevant text given an image query (image-to-text retrieval). CLIP-style models are ideal because they embed both modalities into the same space, where cosine similarity measures relevance. This powers image search engines, stock photo libraries, and visual recommendation systems. Text-to-image retrieval: input a sentence, output matching images Image-to-text retrieval: input an image, output matching captions Uses a shared embedding space and nearest-neighbor search Large-scale systems use vector databases (FAISS, Pinecone, Weaviate) for fast search</p>',
            '<p>You use image-text retrieval when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Image-Text Retrieval

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Image-Text Retrieval sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Retrieve items by sorting cosine similarity between query embedding and database embeddings.',
          example: {
            title: 'Example: Image-Text Retrieval with CLIP and FAISS',
            code: `import torch
import torch.nn.functional as F
from transformers import CLIPModel, CLIPProcessor
import faiss

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Encode image database
database_images = [img1, img2, img3, ...]  # PIL images
image_inputs = processor(images=database_images, return_tensors="pt")
with torch.no_grad():
    image_embeds = model.get_image_features(**image_inputs)
    image_embeds = F.normalize(image_embeds, dim=-1).numpy()

# Build FAISS index (L2 on normalized vectors = cosine similarity)
dim = image_embeds.shape[1]
index = faiss.IndexFlatIP(dim)  # inner product on normalized vectors
index.add(image_embeds)

# Text query
query = "a dog running on the beach"
text_inputs = processor(text=[query], return_tensors="pt", padding=True)
with torch.no_grad():
    text_embed = model.get_text_features(**text_inputs)
    text_embed = F.normalize(text_embed, dim=-1).numpy()

# Search top-5
scores, ids = index.search(text_embed, k=5)
print("Top matches:", ids, scores)

# Image-to-text retrieval: same idea with text embeddings in the index
texts = ["caption 1", "caption 2", ...]
text_inputs = processor(text=texts, return_tensors="pt", padding=True)
with torch.no_grad():
    text_embeds = model.get_text_features(**text_inputs)
    text_embeds = F.normalize(text_embeds, dim=-1).numpy()
text_index = faiss.IndexFlatIP(dim)
text_index.add(text_embeds)

query_image = img1
img_input = processor(images=query_image, return_tensors="pt")
with torch.no_grad():
    img_embed = model.get_image_features(**img_input)
    img_embed = F.normalize(img_embed, dim=-1).numpy()
scores, ids = text_index.search(img_embed, k=5)`,
            output: 'FAISS enables fast nearest-neighbor search over millions of CLIP embeddings.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Image-Text Retrieval with Python',
            code: `import numpy as np
# Image-Text Retrieval — image + text feature placeholders
img_feat = np.random.randn(512)
txt_feat = np.random.randn(512)
sim = np.dot(img_feat, txt_feat) / (np.linalg.norm(img_feat)*np.linalg.norm(txt_feat))
print("Cosine similarity (random):", round(sim, 4))`,
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
          text: 'Retrieval strategies and metrics.',
          table: {
            headers: [
              'Aspect',
              'Brute Force',
              'FAISS Index',
              'Vector Database'
            ],
            rows: [
              [
                'Speed',
                'Slow',
                'Very fast',
                'Very fast + scalable'
              ],
              [
                'Memory',
                'Low',
                'Moderate',
                'Managed service'
              ],
              [
                'Approximation',
                'Exact',
                'Can be approximate (IVF, HNSW)',
                'Approximate'
              ],
              [
                'Use case',
                'Small datasets (<10K)',
                'Medium-large (100K-100M)',
                'Production systems'
              ],
              [
                'Examples',
                'NumPy dot product',
                'IndexFlatIP, IndexHNSW',
                'Pinecone, Weaviate, Milvus'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not normalizing embeddings before indexing (fix: CLIP retrieval uses cosine similarity; normalize embeddings so inner product equals cosine)',
            'Mistake 2: Using Euclidean distance without normalizing (fix: use inner product on normalized vectors, or cosine distance explicitly)',
            'Mistake 3: Forgetting to index both directions separately (fix: if you need text→image and image→text, maintain two indices or a single index with metadata)'
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
          text: 'Cross-modal retrieval powers modern search and recommendations.',
          list: [
            'Stock photo search: find images from natural language descriptions',
            'E-commerce visual search: upload a photo to find similar products',
            'Social media: retrieve posts containing specific visual concepts from text queries',
            'Medical archives: find relevant images or reports using text or other images'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image-text retrieval finds relevant items across modalities',
            'CLIP embeddings enable both text-to-image and image-to-text search',
            'Normalize embeddings and use cosine similarity for retrieval',
            'FAISS and vector databases make large-scale retrieval practical',
            'Evaluate with recall@K, median rank, and mean average precision'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does FAISS IndexFlatIP on normalized embeddings implement cosine retrieval?
Ans: For unit vectors, the inner product equals the cosine similarity.`,
            `Q2: What is the difference between text-to-image and image-to-text retrieval?
Ans: Text-to-image uses a text query to search an image index; image-to-text uses an image query to search a text index.`,
            `Q3: Why is normalization critical before building a retrieval index?
Ans: Without normalization, magnitude differences dominate similarity, and cosine-based models like CLIP produce incorrect rankings.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Image-Text Retrieval</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Image-Text Retrieval")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    llava: {
      title: 'LLaVA',
      subtitle: 'Visual instruction tuning with large language models',
      sections: [
        {
          heading: 'What is LLaVA?',
          text: 'LLaVA (Large Language and Vision Assistant) connects a pre-trained vision encoder (CLIP ViT) to a large language model (LLaMA/Vicuna) using a lightweight projection layer. It is trained on visual instruction-following data generated by GPT-4, enabling it to answer questions about images, describe scenes, and engage in multimodal dialogue. LLaVA demonstrated that simple architecture designs can achieve strong multimodal reasoning when combined with high-quality instruction data.',
          list: [
            `LLaVA uses CLIP's vision encoder to extract image features`,
            `A linear projection maps visual tokens into the LLM's token embedding space`,
            'The LLM then processes interleaved visual and text tokens autoregressively',
            'Training has two stages: pre-training alignment on image-caption pairs, then visual instruction tuning'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>LLaVA (Large Language and Vision Assistant) connects a pre-trained vision encoder (CLIP ViT) to a large language model (LLaMA/Vicuna) using a lightweight projection layer. It is trained on visual instruction-following data generated by GPT-4, enabling it to answer questions about images, describe scenes, and engage in multimodal dialogue. LLaVA demonstrated that simple architecture designs can achieve strong multimodal reasoning when combined with high-quality instruction data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            `<p>Technically, LLaVA (Large Language and Vision Assistant) connects a pre-trained vision encoder (CLIP ViT) to a large language model (LLaMA/Vicuna) using a lightweight projection layer. It is trained on visual instruction-following data generated by GPT-4, enabling it to answer questions about images, describe scenes, and engage in multimodal dialogue. LLaVA demonstrated that simple architecture designs can achieve strong multimodal reasoning when combined with high-quality instruction data. LLaVA uses CLIP's vision encoder to extract image features A linear projection maps visual tokens into the LLM's token embedding space The LLM then processes interleaved visual and text tokens autoregressively Training has two stages: pre-training alignment on image-caption pairs, then visual instruction tuning</p>`,
            '<p>You use llava when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — LLaVA

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: LLaVA sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `Visual tokens are projected into the language model's embedding space: H_v = W · Z_v, where Z_v are CLIP patch features.`,
          example: {
            title: 'Example: LLaVA-Style Architecture in PyTorch',
            code: `import torch, torch.nn as nn
from transformers import CLIPVisionModel, LlamaForCausalLM, LlamaTokenizer

class LLaVAStyleModel(nn.Module):
    def __init__(self, vision_model_name, llm_model_name):
        super().__init__()
        self.vision_encoder = CLIPVisionModel.from_pretrained(vision_model_name)
        self.llm = LlamaForCausalLM.from_pretrained(llm_model_name)
        self.tokenizer = LlamaTokenizer.from_pretrained(llm_model_name)
        # Project vision features to LLM embedding dimension
        vision_dim = self.vision_encoder.config.hidden_size
        llm_dim = self.llm.config.hidden_size
        self.projection = nn.Linear(vision_dim, llm_dim)

    def forward(self, images, input_ids):
        # images: [B, 3, 224, 224]
        # input_ids: [B, T] text tokens
        with torch.no_grad():
            vision_outputs = self.vision_encoder(images)
        # Use patch tokens (excluding CLS) as visual tokens
        image_features = vision_outputs.last_hidden_state[:, 1:, :]  # [B, 256, 768]
        image_embeds = self.projection(image_features)  # [B, 256, llm_dim]

        text_embeds = self.llm.get_input_embeddings()(input_ids)
        # In practice, interleave image tokens at placeholder positions
        inputs_embeds = torch.cat([image_embeds, text_embeds], dim=1)
        outputs = self.llm(inputs_embeds=inputs_embeds,
                           return_dict=True)
        return outputs

# Conceptual training objective
# The model learns to predict the next text token given image + prior text
# Loss = cross_entropy(logits[:, image_len:-1], labels[:, 1:])`,
            output: 'A projection layer bridges the vision encoder and the language model; the rest is autoregressive text generation.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'LLaVA with Python',
            code: `import numpy as np
# LLaVA — image + text feature placeholders
img_feat = np.random.randn(512)
txt_feat = np.random.randn(512)
sim = np.dot(img_feat, txt_feat) / (np.linalg.norm(img_feat)*np.linalg.norm(txt_feat))
print("Cosine similarity (random):", round(sim, 4))`,
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
          text: 'CLIP vs LLaVA.',
          table: {
            headers: [
              'Aspect',
              'CLIP',
              'LLaVA'
            ],
            rows: [
              [
                'Architecture',
                'Dual encoders',
                'Vision encoder + LLM'
              ],
              [
                'Output',
                'Similarity score',
                'Free-form text'
              ],
              [
                'Training',
                'Contrastive on image-text pairs',
                'Instruction tuning on visual QA'
              ],
              [
                'Reasoning',
                'Limited (retrieval/classification)',
                'Rich (dialogue, reasoning)'
              ],
              [
                'Data needs',
                'Large image-text corpus',
                'Smaller but high-quality instruction data'
              ],
              [
                'Use case',
                'Zero-shot classification/retrieval',
                'Visual assistant, captioning, VQA'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training the entire LLM from scratch with vision data (fix: freeze the LLM and train only the projection layer during alignment, then optionally LoRA fine-tune the LLM)',
            'Mistake 2: Using low-resolution images with small patch grids (fix: higher-resolution images provide more visual tokens and better fine-grained understanding)',
            'Mistake 3: Expecting LLaVA to reason about precise spatial coordinates (fix: current models struggle with exact bounding boxes; use grounding-specific variants or external tools)'
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
          text: 'LLaVA-style models enable interactive visual AI.',
          list: [
            'Visual assistants: users upload images and ask open-ended questions',
            'Education: explain diagrams, charts, and homework problems from photos',
            'Accessibility: describe images and answer follow-up questions for visually impaired users',
            'E-commerce: answer product questions from catalog images'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LLaVA connects a vision encoder to an LLM via a projection layer',
            'Training has two stages: alignment pre-training and visual instruction tuning',
            'The LLM generates text conditioned on visual tokens and prior text',
            'LLaVA produces free-form answers, unlike CLIP which only scores similarity',
            'Spatial and fine-grained reasoning are still active research areas'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the role of the projection layer in LLaVA?
Ans: It maps visual features from the vision encoder into the LLM's token embedding space so the LLM can process them.`,
            `Q2: Why is instruction tuning important for LLaVA?
Ans: It teaches the model to follow user instructions and answer questions about images in helpful, conversational formats.`,
            `Q3: How does LLaVA differ from CLIP in output?
Ans: CLIP outputs similarity scores or classifications; LLaVA generates free-form text responses.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>LLaVA</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — LLaVA")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'fine-tune-clip': {
      title: 'Fine-Tuning CLIP on a Custom Dataset',
      subtitle: 'Adapting vision-language models to your domain',
      sections: [
        {
          heading: 'What is Fine-Tuning CLIP on a Custom Dataset?',
          text: 'Fine-Tuning CLIP on a Custom Dataset is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Fine-Tuning CLIP on a Custom Dataset provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use fine-tuning clip on a custom dataset when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Fine-Tuning CLIP on a Custom Dataset

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Fine-Tuning CLIP on a Custom Dataset sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Fine-tuning continues contrastive training on domain-specific image-text pairs, or trains a classification head on frozen embeddings.',
          example: {
            title: 'Example: Fine-Tuning CLIP with LoRA in PyTorch',
            code: `import torch
from transformers import CLIPModel, CLIPProcessor, TrainingArguments, Trainer
from peft import LoraConfig, get_peft_model

# Load CLIP
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Apply LoRA to the vision encoder
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.1,
    bias="none"
)
model.vision_model = get_peft_model(model.vision_model, lora_config)

# Training loop
def contrastive_loss(image_embeds, text_embeds, logit_scale):
    image_embeds = F.normalize(image_embeds, dim=-1)
    text_embeds = F.normalize(text_embeds, dim=-1)
    logits = logit_scale * image_embeds @ text_embeds.T
    labels = torch.arange(len(logits))
    return (F.cross_entropy(logits, labels) +
            F.cross_entropy(logits.T, labels)) / 2

for epoch in range(epochs):
    for images, texts in dataloader:
        inputs = processor(text=texts, images=images,
                           return_tensors="pt", padding=True)
        outputs = model(**inputs)
        loss = contrastive_loss(outputs.image_embeds,
                                outputs.text_embeds,
                                model.logit_scale.exp())
        loss.backward()
        optimizer.step(); optimizer.zero_grad()

# Linear probe alternative: freeze CLIP, train sklearn classifier
from sklearn.linear_model import LogisticRegression
import numpy as np

X_train = []
y_train = []
for images, labels in train_loader:
    inputs = processor(images=images, return_tensors="pt")
    with torch.no_grad():
        feats = model.get_image_features(**inputs)
        feats = feats / feats.norm(dim=-1, keepdim=True)
    X_train.append(feats.cpu().numpy())
    y_train.append(labels.numpy())
X_train = np.vstack(X_train)
y_train = np.concatenate(y_train)
clf = LogisticRegression(max_iter=1000).fit(X_train, y_train)
print(clf.score(X_test, y_test))`,
            output: 'LoRA fine-tunes a small number of parameters while keeping most of CLIP frozen.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Fine-Tuning CLIP on a Custom Dataset with Python',
            code: `import numpy as np
# Fine-Tuning CLIP on a Custom Dataset — image + text feature placeholders
img_feat = np.random.randn(512)
txt_feat = np.random.randn(512)
sim = np.dot(img_feat, txt_feat) / (np.linalg.norm(img_feat)*np.linalg.norm(txt_feat))
print("Cosine similarity (random):", round(sim, 4))`,
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
          text: 'Fine-tuning strategies.',
          table: {
            headers: [
              'Strategy',
              'What Is Trained',
              'Data Needed',
              'Compute',
              'Risk'
            ],
            rows: [
              [
                'Zero-shot',
                'Nothing',
                'Text prompts only',
                'Minimal',
                'Lower accuracy on specialized domains'
              ],
              [
                'Linear probe',
                'Classification head only',
                'Hundreds per class',
                'Low',
                'Good baseline'
              ],
              [
                'Full fine-tune',
                'All CLIP parameters',
                'Thousands of pairs',
                'High',
                'Catastrophic forgetting'
              ],
              [
                'LoRA / adapters',
                'Low-rank matrices',
                'Hundreds to thousands',
                'Low',
                'Best balance'
              ],
              [
                'Prompt tuning',
                'Text prompt embeddings',
                'Hundreds',
                'Very low',
                'Limited expressiveness'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too high a learning rate (fix: use 1e-5 to 1e-6 for full fine-tuning; CLIP weights are already well-tuned)',
            'Mistake 2: Not freezing the text encoder when only image classification matters (fix: freezing the text encoder and fine-tuning only the image encoder can reduce overfitting)',
            'Mistake 3: Evaluating only on training distribution (fix: measure zero-shot transfer and robustness to ensure you are not overfitting the prompt templates)'
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
          text: 'Fine-tuned CLIP models excel in specialized domains.',
          list: [
            'Medical imaging: classify radiology images using text descriptions of pathologies',
            'Retail: match product photos to catalog descriptions in specific taxonomies',
            'Agriculture: identify crop diseases and pests from field images',
            'Manufacturing: detect defects by comparing images to textual quality criteria'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Fine-tuning adapts CLIP to specialized domains',
            'LoRA and adapters are efficient alternatives to full fine-tuning',
            'Linear probing is a strong baseline with minimal compute',
            'Use small learning rates and freeze the text encoder when appropriate',
            'Check both in-domain accuracy and zero-shot generalization'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the advantage of LoRA over full fine-tuning?
Ans: LoRA updates only a small number of low-rank parameters, reducing compute, memory, and overfitting risk.`,
            `Q2: When should you freeze the text encoder during fine-tuning?
Ans: When your task is primarily about recognizing visual concepts that already have good text descriptions, freezing the text encoder reduces overfitting.`,
            `Q3: Why is linear probing a good baseline?
Ans: It measures how well CLIP's frozen embeddings separate your classes, providing a strong lower bound with minimal training cost.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Fine-Tuning CLIP on a Custom Dataset</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Fine-Tuning CLIP on a Custom Dataset")
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
