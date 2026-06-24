// multimodal machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js multimodal_unit5.js

export const multimodalUnit5Content = {
  unit5: {
    'visual-question-answering': {
      title: 'Visual Question Answering',
      subtitle: 'Answering questions about images',
      sections: [
        {
          heading: 'What is Visual Question Answering?',
          text: 'Visual Question Answering (VQA) is the task of answering natural language questions about images. It requires the model to understand both the visual content of the image and the semantics of the question, then fuse the two to predict an answer. VQA is a fundamental benchmark for multimodal reasoning.',
          list: [
            'Input: an image and a natural language question',
            'Output: a natural language answer, often from a fixed vocabulary',
            'Core challenge: align question words with relevant image regions',
            'Modern approaches use cross-attention between text and image features'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Visual Question Answering (VQA) is the task of answering natural language questions about images. It requires the model to understand both the visual content of the image and the semantics of the question, then fuse the two to predict an answer. VQA is a fundamental benchmark for multimodal reasoning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Visual Question Answering (VQA) is the task of answering natural language questions about images. It requires the model to understand both the visual content of the image and the semantics of the question, then fuse the two to predict an answer. VQA is a fundamental benchmark for multimodal reasoning. Input: an image and a natural language question Output: a natural language answer, often from a fixed vocabulary Core challenge: align question words with relevant image regions Modern approaches use cross-attention between text and image features</p>',
            '<p>You use visual question answering when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Visual Question Answering

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Visual Question Answering sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A typical VQA model scores answer candidates: score(a) = f(image, question, a) where f is a multimodal fusion network.',
          example: {
            title: 'Example: VQA Model in PyTorch',
            code: `import torch, torch.nn as nn
import torch.nn.functional as F
from transformers import CLIPModel, CLIPProcessor

class VQAModel(nn.Module):
    def __init__(self, num_answers=3129):
        super().__init__()
        self.clip = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
        for p in self.clip.parameters():
            p.requires_grad = False

        d = self.clip.config.text_config.hidden_size
        self.fusion = nn.Sequential(
            nn.Linear(d * 2, d),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(d, num_answers)
        )

    def forward(self, images, text_inputs):
        # text_inputs is a dict with input_ids and attention_mask
        text_features = self.clip.get_text_features(**text_inputs)
        image_features = self.clip.get_image_features(pixel_values=images)
        fused = torch.cat([text_features, image_features], dim=-1)
        return self.fusion(fused)

# Training loop
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.AdamW(vqa_model.fusion.parameters(), lr=1e-4)

# TensorFlow/Keras example
import tensorflow as tf
from transformers import TFCLIPModel
clip_tf = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")

inputs_text = tf.keras.layers.Input(shape=(77,), dtype=tf.int32)
inputs_image = tf.keras.layers.Input(shape=(3, 224, 224))

text_feat = clip_tf({'input_ids': inputs_text}).text_embeds
image_feat = clip_tf({'pixel_values': inputs_image}).image_embeds
fused = tf.keras.layers.Concatenate()([text_feat, image_feat])
out = tf.keras.layers.Dense(3129, activation='softmax')(fused)
vqa_tf = tf.keras.Model([inputs_text, inputs_image], out)
vqa_tf.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`,
            output: 'A VQA model fuses image and question features, then classifies over candidate answers.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Visual Question Answering with Python',
            code: `import numpy as np
# Visual Question Answering — image + text feature placeholders
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
          text: 'VQA design choices.',
          table: {
            headers: [
              'Approach',
              'Fusion Method',
              'Pros',
              'Cons'
            ],
            rows: [
              [
                'CNN + LSTM',
                'Concatenate CNN image and LSTM question features',
                'Simple baseline',
                'Weak cross-modal interaction'
              ],
              [
                'Bottom-up top-down',
                'Object-level features + question attention',
                'Strong grounding',
                'Requires object detector'
              ],
              [
                'Cross-attention',
                'Text attends to image patches',
                'Captures fine-grained alignment',
                'More compute'
              ],
              [
                'Multimodal LLM',
                'Project image into LLM',
                'Open-ended answers',
                'Expensive inference'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating VQA as pure language QA (fix: image features must be fused with text, not added as an afterthought)',
            'Mistake 2: Using raw image embeddings without spatial structure (fix: use patch-level or object-level features to preserve localization)',
            'Mistake 3: Ignoring answer distribution bias (fix: balance the answer vocabulary and evaluate per-question-type accuracy)'
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
          text: 'VQA systems help users understand visual content.',
          list: [
            'Accessibility: answer questions about images for visually impaired users',
            'Customer support: interpret product photos and manuals',
            'Education: create interactive quizzes from diagrams',
            'Robotics: enable agents to ask and answer questions about their environment'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'VQA requires understanding both image and question',
            'Cross-attention aligns question words with image regions',
            'Modern systems use pretrained vision-language models or multimodal LLMs',
            'Preserve spatial/object structure in image features',
            'Evaluate across question types to avoid language bias'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the main challenge in VQA?
Ans: Aligning the meaning of the question with the relevant visual content in the image.`,
            `Q2: Why are patch-level image features better than global embeddings for VQA?
Ans: They preserve spatial localization, helping the model attend to specific regions.`,
            `Q3: How do multimodal LLMs change VQA?
Ans: They allow open-ended, free-form answers instead of classification over a fixed answer set.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Visual Question Answering</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Visual Question Answering")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'image-captioning': {
      title: 'Image Captioning',
      subtitle: 'Generating natural language descriptions of images',
      sections: [
        {
          heading: 'What is Image Captioning?',
          text: 'Image captioning generates a descriptive sentence for an input image. It combines computer vision (to understand what is in the image) with natural language generation (to produce fluent descriptions). Early encoder-decoder models used CNN encoders and RNN decoders; modern systems use vision transformers and large multimodal language models.',
          list: [
            'Encoder extracts visual features from the image',
            'Decoder generates text autoregressively',
            'Attention connects decoder words to image regions',
            'Metrics include BLEU, METEOR, ROUGE, CIDEr, and SPICE'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Image captioning generates a descriptive sentence for an input image. It combines computer vision (to understand what is in the image) with natural language generation (to produce fluent descriptions). Early encoder-decoder models used CNN encoders and RNN decoders; modern systems use vision transformers and large multimodal language models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Image captioning generates a descriptive sentence for an input image. It combines computer vision (to understand what is in the image) with natural language generation (to produce fluent descriptions). Early encoder-decoder models used CNN encoders and RNN decoders; modern systems use vision transformers and large multimodal language models. Encoder extracts visual features from the image Decoder generates text autoregressively Attention connects decoder words to image regions Metrics include BLEU, METEOR, ROUGE, CIDEr, and SPICE</p>',
            '<p>You use image captioning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Image Captioning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Image Captioning sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Autoregressive captioning maximizes p(caption | image) = ∏_t p(w_t | w_<t, image).',
          example: {
            title: 'Example: Image Captioning with Vision Transformer + GPT',
            code: `import torch, torch.nn as nn
from transformers import GPT2LMHeadModel, GPT2Tokenizer, ViTModel

class ImageCaptioner(nn.Module):
    def __init__(self):
        super().__init__()
        self.vit = ViTModel.from_pretrained("google/vit-base-patch16-224")
        self.tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
        self.gpt2 = GPT2LMHeadModel.from_pretrained("gpt2")
        self.tokenizer.pad_token = self.tokenizer.eos_token

        self.proj = nn.Linear(self.vit.config.hidden_size,
                              self.gpt2.config.n_embd)

    def forward(self, images, captions):
        vit_out = self.vit(images).last_hidden_state  # [B, N_patches, D_vit]
        visual_embeds = self.proj(vit_out)            # [B, N_patches, D_gpt]

        text_inputs = self.tokenizer(captions, return_tensors="pt",
                                     padding=True, truncation=True)
        text_embeds = self.gpt2.transformer.wte(text_inputs.input_ids)

        # Prepend visual tokens to text tokens
        inputs_embeds = torch.cat([visual_embeds, text_embeds], dim=1)
        labels = torch.cat([
            torch.full((text_inputs.input_ids.size(0), visual_embeds.size(1)), -100),
            text_inputs.input_ids
        ], dim=1)

        outputs = self.gpt2(inputs_embeds=inputs_embeds, labels=labels)
        return outputs.loss

# TensorFlow/Keras with CNN + LSTM
import tensorflow as tf
from tensorflow.keras.applications import InceptionV3
image_model = InceptionV3(weights='imagenet')
image_features = tf.keras.Model(image_model.input,
                                image_model.layers[-2].output)

cnn_input = tf.keras.layers.Input(shape=(299, 299, 3))
seq_input = tf.keras.layers.Input(shape=(None,))
x = image_features(cnn_input)
x = tf.keras.layers.RepeatVector(1)(x)  # placeholder for feature sequence
embedded = tf.keras.layers.Embedding(10000, 256)(seq_input)
merged = tf.keras.layers.Concatenate(axis=1)([x, embedded])
decoder = tf.keras.layers.LSTM(512)(merged)
out = tf.keras.layers.Dense(10000, activation='softmax')(decoder)
caption_model = tf.keras.Model([cnn_input, seq_input], out)`,
            output: 'Image captioning fuses visual features into a language decoder that generates descriptions token by token.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Image Captioning with Python',
            code: `import numpy as np
# Image Captioning — image + text feature placeholders
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
          text: 'Captioning architectures compared.',
          table: {
            headers: [
              'Architecture',
              'Encoder',
              'Decoder',
              'Strength'
            ],
            rows: [
              [
                'CNN + LSTM',
                'ResNet/Inception',
                'LSTM',
                'Simple, proven baseline'
              ],
              [
                'CNN + Transformer',
                'ResNet',
                'Transformer',
                'Better long-range generation'
              ],
              [
                'Vision Transformer + LLM',
                'ViT',
                'GPT-style decoder',
                'Strong pretrained representations'
              ],
              [
                'Multimodal LLM',
                'Vision encoder in LLM',
                'Frozen LLM',
                'Open-ended, instruction following'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using global image vector only (fix: use spatial/patch features so the decoder can attend to relevant regions)',
            'Mistake 2: Training captioning models from scratch on small datasets (fix: use pretrained vision encoders and language decoders; fine-tune)',
            'Mistake 3: Optimizing only for n-gram metrics (fix: n-gram metrics correlate poorly with human quality; use CIDEr/SPICE and human evaluation)'
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
          text: 'Image captioning is widely used.',
          list: [
            'Accessibility: describe images for screen readers',
            'Social media: generate alt text automatically',
            'Surveillance and monitoring: summarize video frames',
            'Medical imaging: generate preliminary radiology reports'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Image captioning maps images to natural language descriptions',
            'Encoder-decoder architecture with attention is standard',
            'Pretrained vision encoders and language decoders improve results',
            'Use patch/spatial features, not just global vectors',
            'Evaluate with CIDEr, SPICE, and human judgment'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is attention important in image captioning?
Ans: It lets the decoder focus on relevant image regions when generating each word.`,
            `Q2: What is the limitation of BLEU for captioning?
Ans: It rewards n-gram overlap but does not capture semantic meaning well.`,
            `Q3: Why use pretrained vision and language models for captioning?
Ans: They provide strong initial representations, reducing data and training requirements.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Image Captioning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Image Captioning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'video-understanding': {
      title: 'Video Understanding',
      subtitle: 'Models that see motion and time',
      sections: [
        {
          heading: 'What is Video Understanding?',
          text: 'Video understanding extends image understanding across time. Models must capture spatial appearance, temporal motion, and often audio or subtitles. Tasks include action recognition, video captioning, temporal localization, and video question answering. Video is computationally demanding due to its high dimensionality.',
          list: [
            'Spatial features describe objects and scenes in frames',
            'Temporal features describe motion and change across frames',
            'Audio and subtitles provide additional semantic context',
            'Sampling strategies balance cost and coverage'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Video understanding extends image understanding across time. Models must capture spatial appearance, temporal motion, and often audio or subtitles. Tasks include action recognition, video captioning, temporal localization, and video question answering. Video is computationally demanding due to its high dimensionality. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Video understanding extends image understanding across time. Models must capture spatial appearance, temporal motion, and often audio or subtitles. Tasks include action recognition, video captioning, temporal localization, and video question answering. Video is computationally demanding due to its high dimensionality. Spatial features describe objects and scenes in frames Temporal features describe motion and change across frames Audio and subtitles provide additional semantic context Sampling strategies balance cost and coverage</p>',
            '<p>You use video understanding when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Video Understanding

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Video Understanding sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Video transformers split clips into tubelet embeddings (spatio-temporal patches) and process them with self-attention.',
          example: {
            title: 'Example: Video Action Recognition in PyTorch',
            code: `import torch, torch.nn as nn
import torchvision.models.video as video_models

# Pretrained 3D ResNet from torchvision
model = video_models.r3d_18(pretrained=True)
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Input: [B, C, T, H, W]
clip = torch.randn(2, 3, 16, 112, 112)
logits = model(clip)

# Video Swin Transformer from transformers
from transformers import VideoSwinModel
video_swin = VideoSwinModel.from_pretrained("microsoft/video-swin-base-k400")
outputs = video_swin(pixel_values=clip)
print(outputs.last_hidden_state.shape)

# TensorFlow/Keras I3D example
import tensorflow as tf
base = tf.keras.applications.InceptionV3(include_top=False, pooling='avg')
frame_input = tf.keras.layers.Input(shape=(299, 299, 3))
frame_features = base(frame_input)
video_input = tf.keras.layers.Input(shape=(None, 299, 299, 3))
# TimeDistributed extracts features per frame
x = tf.keras.layers.TimeDistributed(base)(video_input)
x = tf.keras.layers.LSTM(512)(x)
out = tf.keras.layers.Dense(num_classes, activation='softmax')(x)
video_model = tf.keras.Model(video_input, out)
video_model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`,
            output: 'Video models combine spatial and temporal modeling, either with 3D convolutions or transformers.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Video Understanding with Python',
            code: `import numpy as np
# Video Understanding — image + text feature placeholders
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
          text: 'Strategies for video modeling.',
          table: {
            headers: [
              'Approach',
              'Mechanism',
              'Pros',
              'Cons'
            ],
            rows: [
              [
                '2D CNN + pooling',
                'Frame-level CNN, average predictions',
                'Simple',
                'Ignores motion'
              ],
              [
                'Two-stream network',
                'RGB stream + optical flow stream',
                'Captures motion',
                'Requires flow computation'
              ],
              [
                '3D CNN',
                'Spatio-temporal convolutions',
                'Joint space-time features',
                'Heavy compute'
              ],
              [
                'Video transformer',
                'Tubelet embeddings + self-attention',
                'Long-range modeling',
                'Needs lots of data'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using every frame without sampling (fix: sample frames uniformly or use key frames; full video is often too large)',
            'Mistake 2: Ignoring temporal order (fix: use 3D convolutions, LSTMs, or transformers to model sequence)',
            'Mistake 3: Evaluating only on short, clean clips (fix: test on long, untrimmed videos with background activity)'
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
          text: 'Video understanding is used across industries.',
          list: [
            'Sports analytics: classify actions and tactics',
            'Surveillance: detect unusual events',
            'Content moderation: identify harmful video content',
            'Streaming platforms: generate thumbnails, captions, and recommendations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Video understanding models spatial appearance and temporal motion',
            'Common approaches: 2D+pooling, two-stream, 3D CNN, video transformer',
            'Sample frames strategically to manage compute',
            'Use pretrained video backbones when available',
            'Evaluate on realistic, untrimmed video'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why are 3D CNNs suitable for video?
Ans: They jointly model spatial and temporal information through spatio-temporal convolutions.`,
            `Q2: What is a two-stream network?
Ans: A model with separate streams for RGB frames and optical flow to capture appearance and motion.`,
            `Q3: Why sample frames instead of using every frame?
Ans: To reduce memory and compute while maintaining enough temporal information.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Video Understanding</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Video Understanding")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'medical-multimodal-ai': {
      title: 'Medical Multimodal AI',
      subtitle: 'Fusing imaging, text, and structured data',
      sections: [
        {
          heading: 'What is Medical Multimodal AI?',
          text: 'Medical Multimodal AI is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Medical Multimodal AI provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use medical multimodal ai when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Medical Multimodal AI

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Medical Multimodal AI sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Multimodal medical models fuse representations from imaging and clinical data, often with attention to highlight evidence.',
          example: {
            title: 'Example: Medical Multimodal Fusion in PyTorch',
            code: `import torch, torch.nn as nn
import torch.nn.functional as F
from torchvision.models import resnet50

class MedicalMultimodalClassifier(nn.Module):
    def __init__(self, num_tab_features, num_classes):
        super().__init__()
        image_backbone = resnet50(pretrained=True)
        self.image_encoder = nn.Sequential(*list(image_backbone.children())[:-1])
        self.image_dim = image_backbone.fc.in_features

        self.tab_encoder = nn.Sequential(
            nn.Linear(num_tab_features, 256),
            nn.ReLU(),
            nn.Linear(256, 128)
        )

        self.fusion_attn = nn.MultiheadAttention(embed_dim=128, num_heads=4,
                                                  kdim=self.image_dim, vdim=self.image_dim)
        self.classifier = nn.Linear(128, num_classes)

    def forward(self, image, tabular):
        img_feat = self.image_encoder(image).squeeze(-1).squeeze(-1)  # [B, 2048]
        tab_feat = self.tab_encoder(tabular).unsqueeze(0)            # [1, B, 128]
        img_feat = img_feat.unsqueeze(0)                              # [1, B, 2048]

        attended, weights = self.fusion_attn(tab_feat, img_feat, img_feat)
        return self.classifier(attended.squeeze(0)), weights

# TensorFlow/Keras
import tensorflow as tf
image_input = tf.keras.layers.Input(shape=(224, 224, 3))
base = tf.keras.applications.ResNet50(include_top=False, pooling='avg')
img = base(image_input)

tab_input = tf.keras.layers.Input(shape=(num_tab_features,))
tab = tf.keras.layers.Dense(128, activation='relu')(tab_input)

fused = tf.keras.layers.Concatenate()([img, tab])
out = tf.keras.layers.Dense(1, activation='sigmoid')(fused)
med_model = tf.keras.Model([image_input, tab_input], out)
med_model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['AUC'])`,
            output: 'Medical multimodal models fuse imaging and clinical features, often with attention for interpretability.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Medical Multimodal AI with Python',
            code: `import numpy as np
# Medical Multimodal AI — image + text feature placeholders
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
          text: 'Challenges unique to medical multimodal AI.',
          table: {
            headers: [
              'Challenge',
              'Research Setting',
              'Clinical Deployment'
            ],
            rows: [
              [
                'Data size',
                'Can use public benchmarks',
                'Often small, siloed, proprietary'
              ],
              [
                'Labels',
                'Curated',
                'Noisy, incomplete, biased'
              ],
              [
                'Safety',
                'Accuracy is enough',
                'Need uncertainty, calibration, explanation'
              ],
              [
                'Fairness',
                'Often ignored',
                'Must audit across demographics'
              ],
              [
                'Regulation',
                'Not required',
                'FDA/CE approval may be needed'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Overestimating performance on curated datasets (fix: validate on external, multi-site, real-world data)',
            'Mistake 2: Fusing modalities without clinical rationale (fix: design fusion to mirror clinical decision-making and preserve interpretability)',
            'Mistake 3: Ignoring data leakage from text reports (fix: ensure reports do not contain the target label in plain text, or split by patient)'
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
          text: 'Multimodal AI is making inroads in clinical workflows.',
          list: [
            'Radiology: combine chest X-rays with clinical notes for diagnosis',
            'Oncology: fuse histopathology slides, genomics, and EHR for prognosis',
            'Dermatology: merge skin images with patient history',
            'Mental health: integrate speech, text, and behavioral signals'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Medical AI combines imaging, text, labs, and structured EHR data',
            'Safety, fairness, and interpretability are critical',
            'Validate on external, real-world, multi-site data',
            'Avoid leakage between reports and labels',
            'Regulatory and clinical integration requirements are stricter than research'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is data leakage a particular risk in medical multimodal AI?
Ans: Text reports may directly state the diagnosis, letting the model cheat instead of learning from images or labs.`,
            `Q2: What validation practice is essential for clinical generalization?
Ans: External validation on data from different hospitals, devices, and patient populations.`,
            `Q3: Why is interpretability especially important in medical AI?
Ans: Clinicians need to understand model evidence to trust and safely act on predictions.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Medical Multimodal AI</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Medical Multimodal AI")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multimodal-systems-design': {
      title: 'Designing Multimodal Systems',
      subtitle: 'Architecture, trade-offs, and deployment',
      sections: [
        {
          heading: 'What is Designing Multimodal Systems?',
          text: 'Designing Multimodal Systems is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Designing Multimodal Systems provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use designing multimodal systems when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Designing Multimodal Systems

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Designing Multimodal Systems sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'System latency ≈ max(encoder latencies) + fusion latency + decoder latency + network overhead.',
          example: {
            title: 'Example: Designing a Multimodal Search System',
            code: `# Conceptual pipeline for multimodal product search
# 1. Index images and text into a shared embedding space
from sentence_transformers import SentenceTransformer
from PIL import Image
import torch.nn.functional as F

# Image and text encoders (CLIP-style)
from transformers import CLIPProcessor, CLIPModel
clip = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

def embed_text(texts):
    inputs = processor(text=texts, return_tensors="pt", padding=True)
    return F.normalize(clip.get_text_features(**inputs), dim=-1)

def embed_image(paths):
    images = [Image.open(p) for p in paths]
    inputs = processor(images=images, return_tensors="pt")
    return F.normalize(clip.get_image_features(**inputs), dim=-1)

# Index
all_embeddings = []
for texts, images in catalog_batches:
    all_embeddings.append(torch.cat([embed_text(texts), embed_image(images)], dim=0))

# Search by text query
query_emb = embed_text(["red running shoes"])
scores = query_emb @ index_embeddings.T
top_k = torch.topk(scores, k=5)

# Deployment sketch: FastAPI service
from fastapi import FastAPI, UploadFile
app = FastAPI()

@app.post("/search")
async def search_image(file: UploadFile):
    image = Image.open(file.file)
    emb = embed_image([image])
    results = retrieve(emb)
    return {"results": results}`,
            output: 'Multimodal systems combine embedding models, indexing, retrieval, and serving infrastructure.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Designing Multimodal Systems with Python',
            code: `import numpy as np
# Designing Multimodal Systems — image + text feature placeholders
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
          text: 'Architectural trade-offs.',
          table: {
            headers: [
              'Decision',
              'Option A',
              'Option B',
              'When to Choose'
            ],
            rows: [
              [
                'Embedding storage',
                'Vector database',
                'In-memory index',
                'Large scale vs low latency'
              ],
              [
                'Inference',
                'Cloud GPU',
                'Edge device',
                'Flexibility vs privacy/latency'
              ],
              [
                'Fusion',
                'Joint model',
                'Separate + ensemble',
                'Accuracy vs modularity'
              ],
              [
                'Updates',
                'Retrain end-to-end',
                'Adapter tuning',
                'Frequency and cost'
              ],
              [
                'Fallback',
                'Single modality',
                'Reject request',
                'Reliability vs coverage'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Designing for average case only (fix: measure tail latency and behavior under partial failures)',
            'Mistake 2: Ignoring modality desynchronization (fix: add buffering, timestamps, and alignment logic)',
            'Mistake 3: Skipping monitoring after deployment (fix: track embedding drift, prediction distributions, and error patterns)'
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
          text: 'Multimodal systems appear in many products.',
          list: [
            'E-commerce search: search products by photo, text, or voice',
            'Smart assistants: combine voice, touch, and camera input',
            'Autonomous systems: fuse camera, LiDAR, radar, and maps with redundancy',
            'Healthcare triage: integrate symptoms, images, and lab results'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal system design spans data, model, infrastructure, and monitoring',
            'Balance accuracy, latency, cost, and robustness',
            'Plan for missing modalities, desynchronization, and partial failures',
            'Use vector databases for large-scale retrieval',
            'Monitor embedding drift and prediction behavior in production'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why measure tail latency, not just average latency?
Ans: Worst-case delays can ruin user experience even if average latency looks good.`,
            `Q2: What is a common fallback when a modality is missing at inference time?
Ans: Use remaining modalities or return a single-modality prediction, possibly with lower confidence.`,
            `Q3: Why monitor embedding drift?
Ans: Input distributions change over time, causing model performance to degrade silently.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Designing Multimodal Systems</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Designing Multimodal Systems")
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
