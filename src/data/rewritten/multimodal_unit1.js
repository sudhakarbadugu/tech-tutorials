// multimodal machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js multimodal_unit1.js

export const multimodalUnit1Content = {
  unit1: {
    'intro-multimodal': {
      title: 'Introduction to Multimodal Machine Learning',
      subtitle: 'Why combining vision, language, and audio changes everything',
      sections: [
        {
          heading: 'What is Multimodal Machine Learning?',
          text: 'Multimodal Machine Learning (MML) studies how to build models that can process, relate, and reason over information from multiple modalities. A <strong>modality</strong> is a distinct channel of information: text, images, audio, video, depth maps, sensor streams, or even structured tabular data. While unimodal systems look at the world through one lens, multimodal systems combine several lenses to form a richer, more robust understanding.',
          list: [
            'Human perception is inherently multimodal — we see, hear, touch, and read at the same time',
            'Real-world data is rarely unimodal: a video contains visual frames, audio waveform, and often text captions or transcripts',
            'MML must solve five core challenges: representation, alignment, translation, fusion, and co-learning',
            'Modern applications include visual assistants, medical diagnosis, autonomous driving, and generative AI'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Multimodal Machine Learning (MML) studies how to build models that can process, relate, and reason over information from multiple modalities. A <strong>modality</strong> is a distinct channel of information: text, images, audio, video, depth maps, sensor streams, or even structured tabular data. While unimodal systems look at the world through one lens, multimodal systems combine several lenses to form a richer, more robust understanding. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Multimodal Machine Learning (MML) studies how to build models that can process, relate, and reason over information from multiple modalities. A <strong>modality</strong> is a distinct channel of information: text, images, audio, video, depth maps, sensor streams, or even structured tabular data. While unimodal systems look at the world through one lens, multimodal systems combine several lenses to form a richer, more robust understanding. Human perception is inherently multimodal — we see, hear, touch, and read at the same time Real-world data is rarely unimodal: a video contains visual frames, audio waveform, and often text captions or transcripts MML must solve five core challenges: representation, alignment, translation, fusion, and co-learning Modern applications include visual assistants, medical diagnosis, autonomous driving, and generative AI</p>',
            '<p>You use introduction to multimodal machine learning when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Introduction to Multimodal Machine Learning

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Introduction to Multimodal Machine Learning sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A simple multimodal system encodes each modality into a vector and then fuses them into a joint representation.',
          example: {
            title: 'Example: Modality-Specific Encoders + Concatenation',
            code: `import torch, torch.nn as nn
import torchvision.models as models
from transformers import BertModel, BertTokenizer

# Text encoder
bert = BertModel.from_pretrained('bert-base-uncased')
text_tokens = tokenizer("a dog playing in the park", return_tensors='pt')
text_feat = bert(**text_tokens).last_hidden_state[:, 0]  # [1, 768]

# Image encoder
resnet = models.resnet50(pretrained=True)
resnet.fc = nn.Identity()
image = torch.randn(1, 3, 224, 224)
image_feat = resnet(image)  # [1, 2048]

# Audio encoder (simple CNN on spectrogram)
audio_cnn = nn.Sequential(
    nn.Conv2d(1, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),
    nn.Conv2d(64, 128, 3, padding=1), nn.ReLU(), nn.AdaptiveAvgPool2d(1)
)
mel_spec = torch.randn(1, 1, 128, 300)
audio_feat = audio_cnn(mel_spec).view(1, -1)  # [1, 128]

# Early fusion
fused = torch.cat([text_feat, image_feat, audio_feat], dim=1)
print(fused.shape)  # [1, 2944]

# TensorFlow equivalent
import tensorflow as tf
text_in = tf.keras.layers.Input(shape=(None,), dtype='int32')
image_in = tf.keras.layers.Input(shape=(224, 224, 3))
audio_in = tf.keras.layers.Input(shape=(128, 300, 1))

text_emb = tf.keras.layers.Embedding(30000, 768)(text_in)
text_vec = tf.keras.layers.GlobalAveragePooling1D()(text_emb)
image_vec = tf.keras.applications.ResNet50(
    include_top=False, pooling='avg')(image_in)
audio_vec = tf.keras.layers.GlobalAveragePooling2D()(
    tf.keras.layers.Conv2D(32, 3, activation='relu')(audio_in))

fused_tf = tf.keras.layers.Concatenate()([text_vec, image_vec, audio_vec])
model = tf.keras.Model([text_in, image_in, audio_in], fused_tf)`,
            output: 'Each modality is processed by a domain-specific encoder before fusion.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Introduction to Multimodal Machine Learning with Python',
            code: `import numpy as np
# Introduction to Multimodal Machine Learning — image + text feature placeholders
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
          text: 'Unimodal vs multimodal systems.',
          table: {
            headers: [
              'Aspect',
              'Unimodal',
              'Multimodal'
            ],
            rows: [
              [
                'Input',
                'Single data type',
                'Multiple data types'
              ],
              [
                'Robustness',
                'Fails if modality is noisy/missing',
                'Compensates across modalities'
              ],
              [
                'Information',
                'Limited perspective',
                'Richer, complementary information'
              ],
              [
                'Complexity',
                'Simpler models, fewer parameters',
                'Needs alignment, fusion, and coordination'
              ],
              [
                'Training data',
                'Labels in one domain',
                'Aligned pairs across domains'
              ],
              [
                'Example',
                'Image classifier',
                'Visual question answering system'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating multimodal data as independent inputs without alignment (fix: use attention, cross-modal embeddings, or contrastive learning to relate modalities)',
            'Mistake 2: Assuming more modalities always help (fix: validate each modality; irrelevant or noisy data can hurt performance)',
            'Mistake 3: Ignoring modality-specific preprocessing (fix: images need normalization, text needs tokenization, audio needs spectrograms — each modality has its own pipeline)'
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
          text: 'Multimodal ML powers a wide range of real-world applications.',
          list: [
            'Healthcare: combining X-rays, clinical notes, and lab results for diagnosis',
            'Autonomous vehicles: fusing camera, LiDAR, radar, and GPS data for navigation',
            'Content moderation: analyzing images, text, and audio together for policy violations',
            'Virtual assistants: understanding spoken commands plus visual context for better responses'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal ML = processing and relating information from multiple data types',
            'Modalities include text, image, audio, video, and sensor data',
            'Combining modalities improves robustness and accuracy beyond any single source',
            'Core challenges: representation, translation, alignment, fusion, and co-learning',
            'Applications span healthcare, autonomous driving, content moderation, and assistive tech'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is a modality in multimodal machine learning?
Ans: A distinct type of data or sensory channel, such as text, image, audio, or video.`,
            `Q2: Why is audio-visual speech recognition better than audio-only in noisy environments?
Ans: Visual lip-reading provides complementary information that compensates when audio is degraded.`,
            `Q3: Name the five core challenges in multimodal ML.
Ans: Representation, translation, alignment, fusion, and co-learning.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Introduction to Multimodal Machine Learning</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Introduction to Multimodal Machine Learning")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'modality-representations': {
      title: 'Modality Representations',
      subtitle: 'How text, image, audio, and video become vectors',
      sections: [
        {
          heading: 'What is a Modality Representation?',
          text: 'Before any multimodal fusion can happen, each modality must be converted into a vector representation. These representations should preserve the semantic information needed for downstream tasks while compressing raw, high-dimensional signals into a form that downstream layers can process. The choice of encoder strongly influences final performance.',
          list: [
            'Text is typically tokenized and passed through BERT, GPT, or T5 style transformers',
            'Images are encoded using CNNs (ResNet, EfficientNet) or Vision Transformers (ViT)',
            'Audio is converted to spectrograms or mel-filterbanks and processed by CNNs or wav2vec',
            'Video combines spatial encoders (per-frame) with temporal encoders (RNN/Transformer/3D CNN)'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Before any multimodal fusion can happen, each modality must be converted into a vector representation. These representations should preserve the semantic information needed for downstream tasks while compressing raw, high-dimensional signals into a form that downstream layers can process. The choice of encoder strongly influences final performance. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Before any multimodal fusion can happen, each modality must be converted into a vector representation. These representations should preserve the semantic information needed for downstream tasks while compressing raw, high-dimensional signals into a form that downstream layers can process. The choice of encoder strongly influences final performance. Text is typically tokenized and passed through BERT, GPT, or T5 style transformers Images are encoded using CNNs (ResNet, EfficientNet) or Vision Transformers (ViT) Audio is converted to spectrograms or mel-filterbanks and processed by CNNs or wav2vec Video combines spatial encoders (per-frame) with temporal encoders (RNN/Transformer/3D CNN)</p>',
            '<p>You use modality representations when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Modality Representations

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Modality Representations sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Each modality is transformed from raw data x_m into a dense embedding z_m = f_m(x_m; θ_m).',
          example: {
            title: 'Example: Building Modality Encoders in PyTorch',
            code: `import torch, torch.nn as nn
import torchvision.models as models
from transformers import BertModel

class ModalityEncoders(nn.Module):
    def __init__(self, text_dim=768, image_dim=2048, audio_dim=128):
        super().__init__()
        # Text: BERT
        self.bert = BertModel.from_pretrained('bert-base-uncased')
        # Image: ResNet
        resnet = models.resnet50(pretrained=True)
        self.image_encoder = nn.Sequential(*list(resnet.children())[:-1])
        # Audio: simple CNN on mel spectrogram
        self.audio_encoder = nn.Sequential(
            nn.Conv2d(1, 32, kernel_size=3, stride=2, padding=1),
            nn.BatchNorm2d(32), nn.ReLU(),
            nn.Conv2d(32, 64, kernel_size=3, stride=2, padding=1),
            nn.BatchNorm2d(64), nn.ReLU(),
            nn.AdaptiveAvgPool2d(1)
        )
        # Projection heads to a common dimension
        self.text_proj = nn.Linear(text_dim, 512)
        self.image_proj = nn.Linear(image_dim, 512)
        self.audio_proj = nn.Linear(audio_dim, 512)

    def forward(self, text_tokens, image, audio_spec):
        text = self.bert(**text_tokens).pooler_output
        text = self.text_proj(text)
        image = self.image_encoder(image).view(image.size(0), -1)
        image = self.image_proj(image)
        audio = self.audio_encoder(audio_spec).view(audio.size(0), -1)
        audio = self.audio_proj(audio)
        return text, image, audio

# Typical shapes
text_input = tokenizer("a cat sleeping", return_tensors='pt')
img = torch.randn(2, 3, 224, 224)
audio = torch.randn(2, 1, 128, 300)
model = ModalityEncoders()
t, i, a = model(text_input, img, audio)
print(t.shape, i.shape, a.shape)  # [2,512] [2,512] [2,512]`,
            output: 'Projection heads map each modality into the same dimensionality, making later fusion easier.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Modality Representations with Python',
            code: `import numpy as np
# Modality Representations — image + text feature placeholders
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
          text: 'Comparing modality encoders.',
          table: {
            headers: [
              'Modality',
              'Raw Input',
              'Common Encoder',
              'Output',
              'Key Consideration'
            ],
            rows: [
              [
                'Text',
                'Tokens / characters',
                'BERT, GPT, T5',
                '768–4096 dim vector',
                'Contextual embeddings beat bag-of-words'
              ],
              [
                'Image',
                'Pixels (H×W×3)',
                'ResNet, ViT, CLIP image encoder',
                '512–2048 dim vector',
                'Pre-trained on ImageNet or web data'
              ],
              [
                'Audio',
                'Waveform / spectrogram',
                'wav2vec, CNN on mel-spectrogram',
                '128–768 dim vector',
                'Log-mel + normalization is standard'
              ],
              [
                'Video',
                'Frames (T×H×W×3)',
                'TimeSformer, I3D, ViViT',
                '512–2048 dim vector',
                'Temporal + spatial modeling needed'
              ],
              [
                'Sensor',
                'Numeric time series',
                '1D CNN, LSTM, Transformer',
                'Variable',
                'Calibration and scale matter'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the same architecture for every modality (fix: images need 2D spatial inductive bias, audio needs time-frequency modeling, text needs sequential token modeling)',
            'Mistake 2: Not normalizing inputs per modality (fix: images use ImageNet normalization, audio uses log compression and mean/std scaling, text uses embedding layer lookup)',
            'Mistake 3: Ignoring the output dimension mismatch (fix: project all modality embeddings to the same dimension before fusion or attention)'
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
          text: 'Modality encoders are the foundation of every multimodal system.',
          list: [
            'CLIP: uses a ViT image encoder and a Transformer text encoder trained jointly',
            'Whisper: uses a CNN audio encoder plus a Transformer decoder for speech recognition',
            'VideoBERT: tokenizes video frames and text into a shared vocabulary for pre-training',
            'Medical imaging: combines ResNet for scans and BERT for clinical reports'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Every modality needs a domain-specific encoder to produce a vector representation',
            'Text uses transformers, images use CNNs/ViTs, audio uses spectrogram CNNs or wav2vec',
            'Projection heads align modality embeddings to a common dimension',
            'Pre-trained encoders dramatically improve multimodal performance',
            'Normalize and preprocess each modality independently'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why should image and text encoders differ architecturally?
Ans: Images have 2D spatial structure best captured by convolutions or patch embeddings; text is a 1D discrete sequence best modeled by token embeddings and attention.`,
            `Q2: What is the purpose of a projection head in multimodal encoders?
Ans: It maps different modality embeddings into the same dimension so they can be compared or fused.`,
            `Q3: Why is log-mel spectrogram preferred over raw waveform for many audio tasks?
Ans: It compresses the wide dynamic range of audio and matches human frequency perception, producing compact and informative inputs.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Modality Representations</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Modality Representations")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'alignment-challenge': {
      title: 'The Alignment Challenge',
      subtitle: 'Bridging different representation spaces',
      sections: [
        {
          heading: 'What is The Alignment Challenge?',
          text: 'The Alignment Challenge is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The Alignment Challenge provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use the alignment challenge when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — The Alignment Challenge

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: The Alignment Challenge sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Contrastive alignment pulls matched pairs together and pushes unmatched pairs apart.',
          example: {
            title: 'Example: Contrastive Alignment Loss',
            code: `import torch
import torch.nn.functional as F

# z_img and z_txt are L2-normalized embeddings
# N = batch size
z_img = F.normalize(torch.randn(32, 512), dim=1)
z_txt = F.normalize(torch.randn(32, 512), dim=1)

# Similarity matrix
logit_scale = torch.exp(torch.tensor(4.0))  # learned or fixed
logits = logit_scale * z_img @ z_txt.T  # [N, N]

labels = torch.arange(32)
loss_i2t = F.cross_entropy(logits, labels)
loss_t2i = F.cross_entropy(logits.T, labels)
loss = (loss_i2t + loss_t2i) / 2
print(loss.item())

# TensorFlow equivalent
import tensorflow as tf
z_img_tf = tf.nn.l2_normalize(tf.random.normal((32, 512)), axis=1)
z_txt_tf = tf.nn.l2_normalize(tf.random.normal((32, 512)), axis=1)
logits_tf = 100.0 * tf.matmul(z_img_tf, z_txt_tf, transpose_b=True)
labels_tf = tf.range(32)
loss_tf = (tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)(labels_tf, logits_tf) +
           tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)(labels_tf, tf.transpose(logits_tf))) / 2`,
            output: 'Symmetric contrastive loss aligns image and text embeddings bidirectionally.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'The Alignment Challenge with Python',
            code: `import numpy as np
# The Alignment Challenge — image + text feature placeholders
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
          text: 'Alignment strategies.',
          table: {
            headers: [
              'Strategy',
              'Supervision',
              'Granularity',
              'Pros',
              'Cons'
            ],
            rows: [
              [
                'Explicit',
                'Labeled correspondences',
                'Fine-grained (word ↔ region)',
                'Precise, interpretable',
                'Expensive to annotate'
              ],
              [
                'Implicit (attention)',
                'Task labels only',
                'Coarse to fine',
                'Scalable, flexible',
                'Less interpretable'
              ],
              [
                'Contrastive',
                'Paired samples',
                'Coarse (sample ↔ sample)',
                'Web-scale training',
                'No fine-grained alignment'
              ],
              [
                'CCA / kernel',
                'Paired samples',
                'Linear/non-linear projections',
                'Theoretically grounded',
                'Limited scalability'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming cosine similarity equals semantic equivalence (fix: embeddings capture co-occurrence and visual similarity, not grounded truth; verify with downstream tasks)',
            'Mistake 2: Ignoring the modality gap (fix: normalize embeddings and use temperature scaling to control the sharpness of similarity scores)',
            'Mistake 3: Expecting alignment without enough paired data (fix: pre-train on large aligned datasets like CC12M, LAION-5B, or YFCC100M before fine-tuning)'
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
          text: 'Alignment enables cross-modal search, retrieval, and understanding.',
          list: [
            'CLIP: aligns 400M image-text pairs to enable zero-shot classification and retrieval',
            'Visual grounding: maps text phrases like "the red ball" to bounding boxes in images',
            'Image captioning: aligns visual features to text generation via attention',
            'Audio-visual speech recognition: aligns lip movements with phonemes'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Alignment relates elements across different modality spaces',
            'Explicit alignment uses labels; implicit alignment uses attention; contrastive alignment uses paired samples',
            'The modality gap is the persistent separation between aligned embeddings',
            'Contrastive learning scales to web-sized datasets and powers CLIP',
            'Always evaluate alignment with downstream tasks, not just similarity scores'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the modality gap?
Ans: A systematic separation between embeddings of different modalities even when they represent the same concept.`,
            `Q2: Why is explicit alignment expensive?
Ans: It requires detailed annotations such as bounding boxes or word-region correspondences.`,
            `Q3: How does contrastive alignment work at scale?
Ans: It treats each aligned pair as positive and all other pairs in a batch as negatives, allowing training on billions of paired examples without fine-grained labels.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>The Alignment Challenge</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — The Alignment Challenge")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'co-learning-zero-shot': {
      title: 'Co-Learning, Transfer Learning, and Zero-Shot',
      subtitle: 'Leveraging one modality to improve another',
      sections: [
        {
          heading: 'What is Co-Learning?',
          text: 'Co-learning allows a model to transfer knowledge from one modality to another. If labeled data is scarce for audio but abundant for video, a model can learn from visual supervision and transfer that knowledge to improve audio understanding. This is closely related to transfer learning and zero-shot learning, where a model generalizes to new tasks or categories without task-specific training data.',
          list: [
            'Teacher-student: a strong modality teaches a weaker modality through alignment',
            'Cross-modal transfer: pre-train on one modality, fine-tune on another',
            'Zero-shot: classify or retrieve across modalities using only text descriptions',
            'Few-shot: adapt to new concepts with only a handful of examples'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Co-learning allows a model to transfer knowledge from one modality to another. If labeled data is scarce for audio but abundant for video, a model can learn from visual supervision and transfer that knowledge to improve audio understanding. This is closely related to transfer learning and zero-shot learning, where a model generalizes to new tasks or categories without task-specific training data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Co-learning allows a model to transfer knowledge from one modality to another. If labeled data is scarce for audio but abundant for video, a model can learn from visual supervision and transfer that knowledge to improve audio understanding. This is closely related to transfer learning and zero-shot learning, where a model generalizes to new tasks or categories without task-specific training data. Teacher-student: a strong modality teaches a weaker modality through alignment Cross-modal transfer: pre-train on one modality, fine-tune on another Zero-shot: classify or retrieve across modalities using only text descriptions Few-shot: adapt to new concepts with only a handful of examples</p>',
            '<p>You use co-learning, transfer learning, and zero-shot when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Co-Learning, Transfer Learning, and Zero-Shot

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Co-Learning, Transfer Learning, and Zero-Shot sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Zero-shot classification with CLIP: compute image-text similarity and pick the class with highest score.',
          example: {
            title: 'Example: Zero-Shot Classification with CLIP',
            code: `import torch
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

image = torch.randn(1, 3, 224, 224)
classes = ["a photo of a cat", "a photo of a dog", "a photo of a car"]

inputs = processor(text=classes, images=image,
                   return_tensors="pt", padding=True)
outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # [1, 3]
probs = logits_per_image.softmax(dim=1)
print(probs)

# Manual implementation
with torch.no_grad():
    image_features = model.get_image_features(pixel_values=inputs['pixel_values'])
    text_features = model.get_text_features(input_ids=inputs['input_ids'],
                                             attention_mask=inputs['attention_mask'])
    image_features = image_features / image_features.norm(dim=-1, keepdim=True)
    text_features = text_features / text_features.norm(dim=-1, keepdim=True)
    similarity = image_features @ text_features.T
    print(similarity.softmax(dim=-1))`,
            output: 'CLIP compares image embeddings against text label embeddings, enabling zero-shot classification.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Co-Learning, Transfer Learning, and Zero-Shot with Python',
            code: `import numpy as np
# Co-Learning, Transfer Learning, and Zero-Shot — image + text feature placeholders
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
          text: 'Co-learning, transfer, and zero-shot compared.',
          table: {
            headers: [
              'Concept',
              'What It Does',
              'Requires',
              'Example'
            ],
            rows: [
              [
                'Co-learning',
                'One modality teaches another',
                'Paired unlabeled data',
                'Video helps train audio emotion model'
              ],
              [
                'Transfer learning',
                'Reuse pre-trained weights',
                'Pre-trained model + target labels',
                'ImageNet CNN for medical imaging'
              ],
              [
                'Zero-shot',
                'Classify without target labels',
                'Aligned semantic space',
                'CLIP classifies new categories from text'
              ],
              [
                'Few-shot',
                'Learn from few examples',
                'Small support set',
                'Adapt CLIP with 10 examples per class'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Assuming zero-shot works for all domains (fix: CLIP generalizes well to natural images but may fail on specialized domains; fine-tune or use domain-specific text prompts)',
            'Mistake 2: Ignoring prompt engineering (fix: phrases like "a photo of a {label}" often work better than raw class names)',
            'Mistake 3: Forgetting to handle missing modalities at test time (fix: train with modality dropout so the model works when one modality is unavailable)'
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
          text: 'Co-learning and zero-shot transfer reduce annotation costs.',
          list: [
            'Medical imaging: MRI-pretrained features transfer to scarce PET scans',
            'Multilingual retrieval: align English and Chinese text embeddings to search across languages',
            'Open-vocabulary detection: detect object categories not seen during training using text descriptions',
            'Accessibility: zero-shot image classification generates descriptions for unseen visual concepts'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Co-learning transfers knowledge between modalities',
            'Transfer learning reuses pre-trained representations',
            'Zero-shot classification compares embeddings to text descriptions',
            'Prompt engineering matters for zero-shot performance',
            'Modality dropout improves robustness when inputs are missing'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does co-learning help when audio labels are scarce?
Ans: Video data can act as a teacher, providing supervision through aligned embeddings that improve the audio encoder.`,
            `Q2: Why does CLIP zero-shot classification need text prompts?
Ans: Class names alone may not align well with the image embedding space; prompts like "a photo of a cat" provide richer semantic context.`,
            `Q3: What is modality dropout?
Ans: Randomly dropping one modality during training so the model learns to function when a modality is missing at test time.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Co-Learning, Transfer Learning, and Zero-Shot</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Co-Learning, Transfer Learning, and Zero-Shot")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multimodal-datasets': {
      title: 'Multimodal Datasets',
      subtitle: 'MS COCO, Flickr30k, VQA, and beyond',
      sections: [
        {
          heading: 'What is Multimodal Datasets?',
          text: 'Multimodal Datasets is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Multimodal Datasets provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use multimodal datasets when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multimodal Datasets

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multimodal Datasets sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Dataset size and quality trade off: curated datasets are smaller but cleaner; web-scale datasets are larger but noisier.',
          example: {
            title: 'Example: Loading MS COCO Captions with Hugging Face',
            code: `from datasets import load_dataset

# MS COCO captions (image + 5 captions each)
coco = load_dataset("yerevann/coco-karpathy", split="train")
print(coco[0])
# {'image': PIL.Image, 'sentences': [{'raw': '...'}, ...]}

# Flickr30k (image + 5 captions)
flickr = load_dataset("nlphuji/flickr30k", split="test")
print(flickr[0])

# VQA v2 (image + question + answer)
vqa = load_dataset("HuggingFaceM4/VQAv2", split="train")
print(vqa[0])
# {'image': PIL.Image, 'question': 'What color is the car?',
#  'multiple_choice_answer': 'red'}

# PyTorch DataLoader for CLIP-style training
import torch
from torch.utils.data import DataLoader
from transformers import CLIPProcessor

processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

def collate_fn(batch):
    images = [item['image'] for item in batch]
    texts = [item['sentences'][0]['raw'] for item in batch]
    return processor(text=texts, images=images,
                     return_tensors='pt', padding=True)

loader = DataLoader(coco, batch_size=32, collate_fn=collate_fn)
for batch in loader:
    outputs = model(**batch)
    loss = outputs.contrastive_loss
    break`,
            output: 'Hugging Face Datasets makes it easy to load and preprocess multimodal benchmarks.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Multimodal Datasets with Python',
            code: `import numpy as np
# Multimodal Datasets — image + text feature placeholders
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
          text: 'Major multimodal datasets compared.',
          table: {
            headers: [
              'Dataset',
              'Modality',
              'Size',
              'Task',
              'Notes'
            ],
            rows: [
              [
                'MS COCO',
                'Image + captions',
                '120K images, 5 captions each',
                'Captioning, retrieval',
                'Curated, diverse scenes'
              ],
              [
                'Flickr30k',
                'Image + captions',
                '30K images, 5 captions each',
                'Retrieval, captioning',
                'Everyday activities'
              ],
              [
                'VQA v2',
                'Image + Q&A',
                '1.1M questions',
                'Visual reasoning',
                'Balances yes/no answers'
              ],
              [
                'LAION-5B',
                'Image + text',
                '5.85B pairs',
                'Foundation pre-training',
                'Web-scraped, noisy'
              ],
              [
                'AudioSet',
                'Audio + labels',
                '2M clips',
                'Audio event classification',
                'YouTube sound events'
              ],
              [
                'How2R',
                'Video + text + audio',
                '85K clips',
                'Multimodal retrieval',
                'Instructional videos'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training on web-scale data without filtering (fix: web datasets contain unsafe, biased, and low-quality content; filter with safety classifiers and quality scores)',
            'Mistake 2: Evaluating captioning with BLEU alone (fix: use CIDEr and SPICE for semantic quality; BLEU misses synonyms and paraphrases)',
            'Mistake 3: Ignoring dataset bias (fix: VQA datasets have language priors; train on balanced splits and measure robustness)'
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
          text: 'Datasets drive progress in multimodal AI.',
          list: [
            'CLIP and ALIGN: trained on LAION and JFT-3B for zero-shot transfer',
            'Image captioning: MS COCO and Flickr30k are standard benchmarks',
            'Visual reasoning: VQA, GQA, and VizWiz test different reasoning skills',
            'Speech processing: LibriSpeech, VoxCeleb, and AudioSet cover recognition, speaker ID, and event detection'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal datasets provide paired examples for training and evaluation',
            'MS COCO and Flickr30k are classic image-caption benchmarks',
            'VQA tests joint vision-language reasoning',
            'Web-scale datasets like LAION-5B enable foundation models',
            'Always account for dataset bias and use appropriate metrics'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does MS COCO provide five captions per image?
Ans: Multiple captions capture linguistic variability and allow richer evaluation of captioning models.`,
            `Q2: What is the main challenge of web-scale datasets like LAION-5B?
Ans: They are noisy, biased, and may contain unsafe content, requiring filtering and careful evaluation.`,
            `Q3: Why is BLEU alone insufficient for evaluating image captions?
Ans: BLEU measures n-gram overlap but ignores semantic equivalence and synonymy; CIDEr and SPICE are better semantic metrics.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multimodal Datasets</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multimodal Datasets")
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
