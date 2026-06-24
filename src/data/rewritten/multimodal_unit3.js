// multimodal machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js multimodal_unit3.js

export const multimodalUnit3Content = {
  unit3: {
    'early-late-hybrid-fusion': {
      title: 'Early, Late, and Hybrid Fusion',
      subtitle: 'When and where to combine modalities',
      sections: [
        {
          heading: 'What is Multimodal Fusion?',
          text: 'Fusion is the process of combining information from multiple modalities to make a joint prediction. The level at which fusion happens — early (input level), late (decision level), or hybrid (multiple levels) — determines how modalities interact, how robust the system is to missing inputs, and how much cross-modal context the model can exploit.',
          list: [
            'Early fusion concatenates raw or lightly processed features from all modalities',
            'Late fusion trains separate models per modality and combines their predictions',
            'Hybrid fusion mixes strategies, often fusing embeddings mid-network and predictions at output',
            'The best choice depends on modality availability, dataset size, and task complexity'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Fusion is the process of combining information from multiple modalities to make a joint prediction. The level at which fusion happens — early (input level), late (decision level), or hybrid (multiple levels) — determines how modalities interact, how robust the system is to missing inputs, and how much cross-modal context the model can exploit. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Fusion is the process of combining information from multiple modalities to make a joint prediction. The level at which fusion happens — early (input level), late (decision level), or hybrid (multiple levels) — determines how modalities interact, how robust the system is to missing inputs, and how much cross-modal context the model can exploit. Early fusion concatenates raw or lightly processed features from all modalities Late fusion trains separate models per modality and combines their predictions Hybrid fusion mixes strategies, often fusing embeddings mid-network and predictions at output The best choice depends on modality availability, dataset size, and task complexity</p>',
            '<p>You use early, late, and hybrid fusion when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Early, Late, and Hybrid Fusion

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Early, Late, and Hybrid Fusion sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Gated fusion dynamically weights modalities based on their estimated reliability.',
          example: {
            title: 'Example: Early, Late, and Hybrid Fusion in PyTorch',
            code: `import torch, torch.nn as nn
import torch.nn.functional as F

# Early fusion: concatenate modality features at input
class EarlyFusion(nn.Module):
    def __init__(self, text_dim, image_dim, audio_dim, hidden_dim, num_classes):
        super().__init__()
        self.fc = nn.Sequential(
            nn.Linear(text_dim + image_dim + audio_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, num_classes)
        )
    def forward(self, text, image, audio):
        x = torch.cat([text, image, audio], dim=-1)
        return self.fc(x)

# Late fusion: separate classifiers per modality
class LateFusion(nn.Module):
    def __init__(self, text_dim, image_dim, audio_dim, num_classes):
        super().__init__()
        self.text_clf = nn.Linear(text_dim, num_classes)
        self.image_clf = nn.Linear(image_dim, num_classes)
        self.audio_clf = nn.Linear(audio_dim, num_classes)
    def forward(self, text, image, audio):
        logits = (self.text_clf(text) +
                  self.image_clf(image) +
                  self.audio_clf(audio))
        return logits

# Gated hybrid fusion
class GatedFusion(nn.Module):
    def __init__(self, text_dim, image_dim, audio_dim, hidden_dim):
        super().__init__()
        self.text_enc = nn.Linear(text_dim, hidden_dim)
        self.image_enc = nn.Linear(image_dim, hidden_dim)
        self.audio_enc = nn.Linear(audio_dim, hidden_dim)
        self.gate = nn.Sequential(
            nn.Linear(hidden_dim * 3, 3),
            nn.Softmax(dim=-1)
        )
        self.classifier = nn.Linear(hidden_dim, 1)
    def forward(self, text, image, audio):
        t = F.relu(self.text_enc(text))
        i = F.relu(self.image_enc(image))
        a = F.relu(self.audio_enc(audio))
        weights = self.gate(torch.cat([t, i, a], dim=-1))  # [B, 3]
        fused = weights[:, 0:1] * t + weights[:, 1:2] * i + weights[:, 2:3] * a
        return self.classifier(fused)

# TensorFlow equivalents
import tensorflow as tf
def early_fusion_tf(text, image, audio):
    return tf.keras.layers.Dense(64, activation='relu')(
        tf.keras.layers.Concatenate()([text, image, audio]))

def late_fusion_tf(text, image, audio):
    t = tf.keras.layers.Dense(10)(text)
    i = tf.keras.layers.Dense(10)(image)
    a = tf.keras.layers.Dense(10)(audio)
    return t + i + a`,
            output: 'Early fusion captures low-level interactions; late fusion is robust to missing modalities; gated fusion adapts per sample.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Early, Late, and Hybrid Fusion with Python',
            code: `import numpy as np
# Early, Late, and Hybrid Fusion — image + text feature placeholders
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
          text: 'Fusion strategies compared.',
          table: {
            headers: [
              'Strategy',
              'Fusion Point',
              'Pros',
              'Cons',
              'Best For'
            ],
            rows: [
              [
                'Early Fusion',
                'Input / feature level',
                'Captures cross-modal correlations early',
                'Requires all modalities; curse of dimensionality',
                'Aligned, small datasets'
              ],
              [
                'Late Fusion',
                'Decision / output level',
                'Robust to missing modalities; modular',
                'Misses early interactions',
                'Independent modalities'
              ],
              [
                'Intermediate Fusion',
                'Embedding level',
                'Each encoder specializes; balanced',
                'More complex',
                'General multimodal tasks'
              ],
              [
                'Hybrid Fusion',
                'Multiple levels',
                'Best of all strategies; adaptive',
                'Hardest to implement',
                'Production systems'
              ],
              [
                'Gated Fusion',
                'Dynamic weighting',
                'Adapts to input quality',
                'Needs quality estimates',
                'Noisy environments'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Always using early fusion (fix: early fusion fails when modalities are missing at test time; late or hybrid fusion degrades gracefully)',
            'Mistake 2: Concatenating features without normalization (fix: standardize each modality independently to prevent one high-magnitude feature from dominating)',
            'Mistake 3: Using fixed fusion weights (fix: use attention or gating so the model can down-weight noisy modalities per sample)'
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
          text: 'Fusion strategies are chosen based on deployment constraints.',
          list: [
            'Audio-visual speech recognition: early fusion of synchronized lip and audio features improves robustness',
            'Medical diagnosis: late fusion of imaging, lab tests, and clinical notes allows diagnosis even when some tests are missing',
            'Autonomous driving: hybrid fusion — camera+LiDAR early-fused for 3D detection, then combined with radar+GPS',
            'Sentiment analysis: gated fusion of text, audio, and video adapts to microphone quality and lighting'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Early fusion: concatenate raw features — captures interactions but requires all modalities',
            'Late fusion: combine predictions — robust to missing modalities but misses interactions',
            'Hybrid fusion: combine multiple strategies for production systems',
            'Gated fusion dynamically weights modalities based on estimated reliability',
            'Normalize modalities before fusion and handle missing inputs with dropout or imputation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: When should you prefer late fusion over early fusion?
Ans: When modalities may be missing at test time or are largely independent.`,
            `Q2: Why is normalization important before concatenating multimodal features?
Ans: Features with larger scales would dominate the fused representation.`,
            `Q3: What is the main advantage of gated fusion?
Ans: It learns dynamic weights per sample, suppressing unreliable modalities and emphasizing reliable ones.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Early, Late, and Hybrid Fusion</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Early, Late, and Hybrid Fusion")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'attention-based-fusion': {
      title: 'Attention-Based Fusion',
      subtitle: 'Learning which modality to trust',
      sections: [
        {
          heading: 'What is Attention-Based Fusion?',
          text: 'Attention-Based Fusion is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Attention-Based Fusion provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use attention-based fusion when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Attention-Based Fusion

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Attention-Based Fusion sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Attention computes a weighted sum of values: output = softmax(QK^T / sqrt(d)) V.',
          example: {
            title: 'Example: Modality Attention and Cross-Attention Fusion',
            code: `import torch, torch.nn as nn
import torch.nn.functional as F

class ModalityAttentionFusion(nn.Module):
    def __init__(self, dim, num_modalities=3):
        super().__init__()
        self.queries = nn.ModuleList([nn.Linear(dim, dim) for _ in range(num_modalities)])
        self.keys = nn.ModuleList([nn.Linear(dim, dim) for _ in range(num_modalities)])
        self.values = nn.ModuleList([nn.Linear(dim, dim) for _ in range(num_modalities)])
        self.scale = dim ** -0.5
        self.output_proj = nn.Linear(dim * num_modalities, dim)

    def forward(self, modalities):  # list of [B, dim]
        B = modalities[0].size(0)
        stacked = torch.stack(modalities, dim=1)  # [B, M, dim]

        # Self-attention over modalities
        q = torch.stack([q(m) for q, m in zip(self.queries, modalities)], dim=1)
        k = torch.stack([k(m) for k, m in zip(self.keys, modalities)], dim=1)
        v = torch.stack([v(m) for v, m in zip(self.values, modalities)], dim=1)

        scores = torch.matmul(q, k.transpose(-2, -1)) * self.scale  # [B, M, M]
        weights = F.softmax(scores, dim=-1)
        attended = torch.matmul(weights, v)  # [B, M, dim]

        fused = self.output_proj(attended.view(B, -1))
        return fused, weights

# Cross-attention: text queries attend to image features
class CrossModalAttention(nn.Module):
    def __init__(self, q_dim, kv_dim, hidden_dim):
        super().__init__()
        self.query_proj = nn.Linear(q_dim, hidden_dim)
        self.key_proj = nn.Linear(kv_dim, hidden_dim)
        self.value_proj = nn.Linear(kv_dim, hidden_dim)
        self.scale = hidden_dim ** -0.5

    def forward(self, query, kv):
        Q = self.query_proj(query)      # [B, T_q, H]
        K = self.key_proj(kv)           # [B, T_kv, H]
        V = self.value_proj(kv)         # [B, T_kv, H]
        scores = torch.bmm(Q, K.transpose(1, 2)) * self.scale
        weights = F.softmax(scores, dim=-1)
        return torch.bmm(weights, V), weights

# TensorFlow cross-attention
import tensorflow as tf
layer = tf.keras.layers.MultiHeadAttention(num_heads=4, key_dim=64)
out = layer(query=text_tensor, key=image_tensor, value=image_tensor)`,
            output: 'Attention learns both which modality matters and which positions within each modality are relevant.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Attention-Based Fusion with Python',
            code: `import numpy as np
# Attention-Based Fusion — image + text feature placeholders
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
          text: 'Attention mechanisms for fusion.',
          table: {
            headers: [
              'Type',
              'Operation',
              'Best For',
              'Complexity'
            ],
            rows: [
              [
                'Self-attention',
                'Tokens attend to themselves',
                'Intra-modal context',
                'O(n²) per modality'
              ],
              [
                'Cross-attention',
                'One modality attends to another',
                'Alignment and fusion',
                'O(n·m)'
              ],
              [
                'Modality attention',
                'Per-modality scalar weight',
                'Dynamic reliability',
                'O(M²)'
              ],
              [
                'Co-attention',
                'Bidirectional cross-attention',
                'Deep interaction',
                'O(n·m) each direction'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using self-attention only without cross-attention (fix: self-attention captures intra-modal context, but cross-attention is needed for true multimodal integration)',
            'Mistake 2: Applying attention over unnormalized modalities (fix: layer normalize each modality before attention to stabilize training)',
            'Mistake 3: Ignoring computational cost (fix: attention is O(n²); use efficient variants for very long sequences or large feature maps)'
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
          text: 'Attention-based fusion powers state-of-the-art multimodal models.',
          list: [
            'Visual question answering: text questions attend to image regions to find answers',
            'Image captioning: caption decoder attends to spatial image features per word',
            'Multimodal transformers: co-attention layers fuse text and image tokens',
            'Audio-visual speech recognition: attention weights shift toward visual cues when audio is noisy'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Attention-based fusion learns dynamic, context-aware modality weights',
            'Self-attention captures intra-modal relationships; cross-attention captures inter-modal relationships',
            'Modality attention handles dynamic reliability across samples',
            'Co-attention enables deep bidirectional interaction',
            'Normalize inputs before attention and watch computational cost'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between self-attention and cross-attention in multimodal fusion?
Ans: Self-attention relates tokens within one modality; cross-attention relates tokens from one modality to tokens from another.`,
            `Q2: Why is layer normalization important before attention?
Ans: It stabilizes training and prevents features with large magnitudes from dominating attention scores.`,
            `Q3: What does modality attention learn?
Ans: Per-sample importance weights for each modality, allowing the model to trust reliable modalities more.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Attention-Based Fusion</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Attention-Based Fusion")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'cross-attention': {
      title: 'Cross-Attention Mechanism',
      subtitle: 'How one modality looks at another',
      sections: [
        {
          heading: 'What is Cross-Attention?',
          text: 'Cross-attention is an attention operation where the queries come from one modality and the keys/values come from another. It is the core mechanism that allows a model to align and integrate information across modalities. For example, in visual question answering, text queries attend to image regions to gather visual evidence for the answer.',
          list: [
            'Queries (Q) come from the receiving modality',
            'Keys (K) and Values (V) come from the source modality',
            'Output is a context vector that mixes source information relevant to each query',
            'Stacking cross-attention layers enables deep multimodal reasoning'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Cross-attention is an attention operation where the queries come from one modality and the keys/values come from another. It is the core mechanism that allows a model to align and integrate information across modalities. For example, in visual question answering, text queries attend to image regions to gather visual evidence for the answer. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Cross-attention is an attention operation where the queries come from one modality and the keys/values come from another. It is the core mechanism that allows a model to align and integrate information across modalities. For example, in visual question answering, text queries attend to image regions to gather visual evidence for the answer. Queries (Q) come from the receiving modality Keys (K) and Values (V) come from the source modality Output is a context vector that mixes source information relevant to each query Stacking cross-attention layers enables deep multimodal reasoning</p>',
            '<p>You use cross-attention mechanism when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Cross-Attention Mechanism

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Cross-Attention Mechanism sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Cross-attention: context = softmax(Q_query · K_source^T / sqrt(d)) · V_source.',
          example: {
            title: 'Example: Cross-Attention for Vision-Language Fusion',
            code: `import torch, torch.nn as nn
import torch.nn.functional as F

class CrossAttentionLayer(nn.Module):
    def __init__(self, q_dim, kv_dim, hidden_dim, num_heads=8):
        super().__init__()
        self.num_heads = num_heads
        self.q_proj = nn.Linear(q_dim, hidden_dim)
        self.k_proj = nn.Linear(kv_dim, hidden_dim)
        self.v_proj = nn.Linear(kv_dim, hidden_dim)
        self.out_proj = nn.Linear(hidden_dim, q_dim)
        self.scale = (hidden_dim // num_heads) ** -0.5

    def forward(self, query, kv, mask=None):
        B, T_q, _ = query.shape
        T_kv = kv.size(1)
        Q = self.q_proj(query).view(B, T_q, self.num_heads, -1).transpose(1, 2)
        K = self.k_proj(kv).view(B, T_kv, self.num_heads, -1).transpose(1, 2)
        V = self.v_proj(kv).view(B, T_kv, self.num_heads, -1).transpose(1, 2)

        scores = torch.matmul(Q, K.transpose(-2, -1)) * self.scale
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        weights = F.softmax(scores, dim=-1)
        context = torch.matmul(weights, V)
        context = context.transpose(1, 2).contiguous().view(B, T_q, -1)
        return self.out_proj(context), weights

# Usage in VQA
text_features = torch.randn(2, 10, 512)   # [B, T_text, D]
image_features = torch.randn(2, 196, 768) # [B, N_patches, D]
cross_attn = CrossAttentionLayer(q_dim=512, kv_dim=768, hidden_dim=512)
enhanced_text, attn_weights = cross_attn(text_features, image_features)
print(enhanced_text.shape, attn_weights.shape)  # [2,10,512], [2,8,10,196]

# PyTorch built-in
multihead = nn.MultiheadAttention(embed_dim=512, num_heads=8, kdim=768, vdim=768)
out, weights = multihead(text_features.transpose(0, 1),
                          image_features.transpose(0, 1),
                          image_features.transpose(0, 1))
print(out.shape)`,
            output: 'Cross-attention produces query-enhanced representations by gathering relevant information from the source modality.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Cross-Attention Mechanism with Python',
            code: `import numpy as np
# Cross-Attention Mechanism — image + text feature placeholders
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
          text: 'Cross-attention vs self-attention vs co-attention.',
          table: {
            headers: [
              'Type',
              'Q Source',
              'K/V Source',
              'Purpose'
            ],
            rows: [
              [
                'Self-attention',
                'Same modality',
                'Same modality',
                'Intra-modal context'
              ],
              [
                'Cross-attention',
                'Modality A',
                'Modality B',
                'A attends to B'
              ],
              [
                'Co-attention',
                'Both directions',
                'Both directions',
                'Mutual alignment'
              ],
              [
                'Guided attention',
                'Task signal',
                'Modality',
                'Task-driven focus'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to scale by sqrt(d_k) (fix: scaling prevents softmax saturation for high-dimensional keys)',
            'Mistake 2: Not masking invalid positions in variable-length sequences (fix: use padding masks so attention does not attend to padded tokens)',
            'Mistake 3: Using the same projection dimensions for both modalities (fix: set kdim and vdim to match the source modality dimension when modalities differ)'
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
          text: 'Cross-attention is essential for cross-modal understanding.',
          list: [
            'VQA: question tokens attend to image patches to locate relevant objects',
            'Image captioning: decoder tokens attend to spatial image features',
            'Transformer translation: decoder attends to encoder representations',
            'LLaVA: language model attends to visual tokens projected into its embedding space'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Cross-attention lets one modality gather information from another',
            'Queries come from the target modality; keys and values from the source modality',
            'Scaling and masking are critical for stable and correct attention',
            'Co-attention extends cross-attention to both directions',
            'Cross-attention is the backbone of VQA, captioning, and encoder-decoder transformers'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: In cross-attention for VQA, where do queries, keys, and values come from?
Ans: Queries come from text (the question); keys and values come from image features.`,
            `Q2: Why is the dot product scaled by sqrt(d_k) in attention?
Ans: To prevent dot products from growing too large in high dimensions, which would push softmax into regions with tiny gradients.`,
            `Q3: What is co-attention?
Ans: Bidirectional cross-attention where each modality attends to the other, enabling mutual alignment.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Cross-Attention Mechanism</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Cross-Attention Mechanism")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multimodal-sentiment-classifier': {
      title: 'Build a Multimodal Sentiment Classifier',
      subtitle: 'Fusing text, audio, and video for emotion recognition',
      sections: [
        {
          heading: 'What is Build a Multimodal Sentiment Classifier?',
          text: 'Build a Multimodal Sentiment Classifier is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Build a Multimodal Sentiment Classifier provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use build a multimodal sentiment classifier when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Build a Multimodal Sentiment Classifier

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Build a Multimodal Sentiment Classifier sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'A common architecture encodes each modality, aligns them in time, and fuses them with attention before classification.',
          example: {
            title: 'Example: Multimodal Sentiment Classifier in PyTorch',
            code: `import torch, torch.nn as nn
import torch.nn.functional as F

class MultimodalSentimentClassifier(nn.Module):
    def __init__(self, text_dim=768, audio_dim=128, video_dim=512,
                 hidden_dim=256, num_classes=3):
        super().__init__()
        # Modality encoders (assume input features already extracted)
        self.text_enc = nn.LSTM(text_dim, hidden_dim, batch_first=True,
                                bidirectional=True)
        self.audio_enc = nn.LSTM(audio_dim, hidden_dim, batch_first=True,
                                 bidirectional=True)
        self.video_enc = nn.LSTM(video_dim, hidden_dim, batch_first=True,
                                 bidirectional=True)

        # Self-attention over time for each modality
        self.text_attn = nn.MultiheadAttention(hidden_dim*2, num_heads=4)
        self.audio_attn = nn.MultiheadAttention(hidden_dim*2, num_heads=4)
        self.video_attn = nn.MultiheadAttention(hidden_dim*2, num_heads=4)

        # Cross-modal attention: text queries attend to audio+video
        self.cross_av = nn.MultiheadAttention(hidden_dim*2, num_heads=4,
                                               kdim=hidden_dim*2, vdim=hidden_dim*2)

        # Fusion and classification
        self.fusion = nn.Linear(hidden_dim*2 * 3, hidden_dim)
        self.classifier = nn.Linear(hidden_dim, num_classes)

    def forward(self, text, audio, video, mask=None):
        # text/audio/video: [B, T, D]
        t, _ = self.text_enc(text)
        a, _ = self.audio_enc(audio)
        v, _ = self.video_enc(video)

        # Pool with attention
        t = t.transpose(0, 1)
        a = a.transpose(0, 1)
        v = v.transpose(0, 1)
        t_pool, _ = self.text_attn(t, t, t, key_padding_mask=mask)
        a_pool, _ = self.audio_attn(a, a, a, key_padding_mask=mask)
        v_pool, _ = self.video_attn(v, v, v, key_padding_mask=mask)

        # Cross-modal: text queries attend to concatenated audio+video
        av = torch.cat([a, v], dim=0)
        cross, _ = self.cross_av(t_pool, av, av)

        # Mean pool over time
        t_vec = t_pool.mean(dim=0)
        a_vec = a_pool.mean(dim=0)
        v_vec = v_pool.mean(dim=0)
        cross_vec = cross.mean(dim=0)

        fused = F.relu(self.fusion(torch.cat([t_vec, a_vec, v_vec], dim=-1)))
        return self.classifier(fused)

# TensorFlow/Keras version
import tensorflow as tf
inputs_text = tf.keras.layers.Input(shape=(50, 768))
inputs_audio = tf.keras.layers.Input(shape=(300, 128))
inputs_video = tf.keras.layers.Input(shape=(50, 512))

t = tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(128))(inputs_text)
a = tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(128))(inputs_audio)
v = tf.keras.layers.Bidirectional(tf.keras.layers.LSTM(128))(inputs_video)
fused = tf.keras.layers.Concatenate()([t, a, v])
out = tf.keras.layers.Dense(3, activation='softmax')(fused)
model_tf = tf.keras.Model([inputs_text, inputs_audio, inputs_video], out)
model_tf.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])`,
            output: 'A practical multimodal classifier stacks modality encoders, temporal pooling, optional cross-attention, and a fusion classifier.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Build a Multimodal Sentiment Classifier with Python',
            code: `import numpy as np
# Build a Multimodal Sentiment Classifier — image + text feature placeholders
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
          text: 'Design choices for multimodal sentiment classifiers.',
          table: {
            headers: [
              'Choice',
              'Option A',
              'Option B',
              'Trade-off'
            ],
            rows: [
              [
                'Encoders',
                'Pre-trained (BERT, wav2vec, ResNet)',
                'Train from scratch',
                'Pre-trained is faster and more accurate'
              ],
              [
                'Temporal model',
                'LSTM/GRU',
                'Transformer',
                'LSTM is cheaper; Transformer captures long range'
              ],
              [
                'Fusion',
                'Concatenation',
                'Attention',
                'Attention is more expressive but slower'
              ],
              [
                'Alignment',
                'Forced alignment',
                'Attention alignment',
                'Forced is precise; attention is flexible'
              ],
              [
                'Missing modality',
                'Zero imputation',
                'Modality dropout',
                'Dropout trains robustness'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Ignoring temporal misalignment (fix: use attention or dynamic time warping to align modalities with different sampling rates)',
            'Mistake 2: Letting one modality dominate (fix: modality dropout, gradient modulation, or balanced loss weights)',
            'Mistake 3: Evaluating on acted datasets only (fix: test on spontaneous, noisy, and cross-corpus data for real-world robustness)'
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
          text: 'Multimodal sentiment classifiers are deployed in many industries.',
          list: [
            'Customer service: detect frustration from voice tone, word choice, and facial expression',
            'Market research: measure authentic reactions to advertisements',
            'Healthcare: screen for depression or anxiety from speech and facial cues',
            'Education: assess student engagement during online learning'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal sentiment combines text, audio, and video signals',
            'Use pre-trained encoders for each modality when possible',
            'Handle temporal alignment and missing modalities explicitly',
            'Attention-based fusion improves over simple concatenation',
            'Evaluate on diverse, realistic data beyond acted benchmarks'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is text alone often insufficient for sentiment analysis?
Ans: Sarcasm, tone, and facial expressions carry emotional information that text misses.`,
            `Q2: What is modality dropout and why use it?
Ans: Randomly dropping a modality during training to make the classifier robust when that modality is missing or noisy at test time.`,
            `Q3: Why use pre-trained encoders for each modality?
Ans: They provide strong initial representations learned from large unimodal datasets, reducing the need for massive multimodal labeled data.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Build a Multimodal Sentiment Classifier</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Build a Multimodal Sentiment Classifier")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'fusion-best-practices': {
      title: 'Fusion Best Practices',
      subtitle: 'Making multimodal fusion work in production',
      sections: [
        {
          heading: 'What is Fusion Best Practices?',
          text: 'Fusion Best Practices is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Fusion Best Practices provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use fusion best practices when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Fusion Best Practices

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Fusion Best Practices sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Robust fusion combines domain-specific encoders, normalization, dynamic weighting, and missing-modality training.',
          example: {
            title: 'Example: Training with Modality Dropout',
            code: `import torch

def modality_dropout(batch, p=0.2):
    """Randomly zero out a modality with probability p."""
    text, audio, video = batch
    masks = []
    for mod in [text, audio, video]:
        if torch.rand(1).item() < p:
            masks.append(torch.zeros_like(mod))
        else:
            masks.append(mod)
    return masks

# In training loop
for text, audio, video, labels in loader:
    text, audio, video = modality_dropout((text, audio, video), p=0.1)
    logits = model(text, audio, video)
    loss = criterion(logits, labels)
    loss.backward()
    optimizer.step(); optimizer.zero_grad()

# Missing-modality inference
if audio is None:
    audio = torch.zeros(B, T_a, D_a).to(device)
logits = model(text, audio, video)  # model trained with dropout handles zeros`,
            output: 'Modality dropout makes the model robust to missing or corrupted inputs.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Fusion Best Practices with Python',
            code: `import numpy as np
# Fusion Best Practices — image + text feature placeholders
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
          text: 'Production vs research fusion.',
          table: {
            headers: [
              'Aspect',
              'Research Prototype',
              'Production System'
            ],
            rows: [
              [
                'Data',
                'Clean, aligned',
                'Noisy, misaligned, missing'
              ],
              [
                'Modalities',
                'All available',
                'Some may fail at runtime'
              ],
              [
                'Metric focus',
                'Accuracy on benchmark',
                'Robustness, latency, fairness'
              ],
              [
                'Fusion',
                'Complex attention',
                'Efficient, interpretable gating'
              ],
              [
                'Evaluation',
                'Single test set',
                'A/B tests, edge cases, monitoring'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Skipping modality ablation studies (fix: remove each modality at test time to measure its contribution and robustness)',
            'Mistake 2: Tuning only on aggregate accuracy (fix: report per-class, per-modality, and subgroup metrics to detect imbalance)',
            'Mistake 3: Deploying without latency budgeting (fix: profile each encoder and fusion layer; consider distillation or quantization for production)'
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
          text: 'Production multimodal systems must be robust and efficient.',
          list: [
            'Video conferencing: fuse audio, video, and screen content while handling dropped packets',
            'Autonomous driving: combine sensors with redundancy and safety fallbacks',
            'Healthcare monitors: integrate wearables, voice, and camera data with privacy safeguards',
            'Call centers: route calls based on multimodal emotion and intent signals'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Normalize each modality before fusion',
            'Train with modality dropout for missing-input robustness',
            'Balance modality contributions via loss weighting or gradient modulation',
            'Ablate modalities during evaluation to understand contributions',
            'Consider latency, fairness, and monitoring for production deployment'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is modality dropout useful at training time?
Ans: It simulates missing modalities so the model learns to function when inputs are unavailable.`,
            `Q2: What is a modality ablation study?
Ans: Evaluating the model with each modality removed to measure its contribution and robustness.`,
            `Q3: Why should production systems consider per-class metrics?
Ans: Aggregate accuracy can hide poor performance on minority classes or subgroups.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Fusion Best Practices</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Fusion Best Practices")
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
