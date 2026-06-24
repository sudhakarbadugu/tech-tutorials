// deep learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js dl_module5.js

export const dlModule5Content = {
  module5: {
    'transformers-from-scratch': {
      title: 'Transformers from Scratch',
      subtitle: 'Multi-head attention, positional encoding, and the encoder-decoder architecture',
      sections: [
        {
          heading: 'What is a Transformer?',
          text: 'The <strong>Transformer</strong> is a neural architecture that replaces recurrence with <strong>self-attention</strong>, allowing it to model long-range dependencies in parallel. It consists of an encoder that builds contextual representations and a decoder that generates outputs autoregressively. Transformers are the foundation of BERT, GPT, T5, and modern vision models.',
          list: [
            'Transformers rely entirely on attention mechanisms; no recurrent or convolutional layers are needed',
            'Multi-head attention runs several attention operations in parallel, capturing different relationship types',
            'Positional encoding injects sequence order information because attention itself is permutation-invariant',
            'Layer normalization, residual connections, and feed-forward networks are core building blocks'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>The <strong>Transformer</strong> is a neural architecture that replaces recurrence with <strong>self-attention</strong>, allowing it to model long-range dependencies in parallel. It consists of an encoder that builds contextual representations and a decoder that generates outputs autoregressively. Transformers are the foundation of BERT, GPT, T5, and modern vision models. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, The <strong>Transformer</strong> is a neural architecture that replaces recurrence with <strong>self-attention</strong>, allowing it to model long-range dependencies in parallel. It consists of an encoder that builds contextual representations and a decoder that generates outputs autoregressively. Transformers are the foundation of BERT, GPT, T5, and modern vision models. Transformers rely entirely on attention mechanisms; no recurrent or convolutional layers are needed Multi-head attention runs several attention operations in parallel, capturing different relationship types Positional encoding injects sequence order information because attention itself is permutation-invariant Layer normalization, residual connections, and feed-forward networks are core building blocks</p>',
            '<p>You use transformers from scratch when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Transformers from Scratch

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Transformers from Scratch sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Multi-head attention: concat(head_1,...,head_h)W^O where head_i = Attention(QW_i^Q, KW_i^K, VW_i^V). Positional encoding uses sine and cosine functions.',
          example: {
            title: 'Transformer Components in PyTorch and TensorFlow',
            code: `import torch, torch.nn as nn, torch.nn.functional as F
import math

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, n_heads=8):
        super().__init__()
        assert d_model % n_heads == 0
        self.d_k = d_model // n_heads
        self.n_heads = n_heads
        self.W_q = nn.Linear(d_model, d_model)
        self.W_k = nn.Linear(d_model, d_model)
        self.W_v = nn.Linear(d_model, d_model)
        self.W_o = nn.Linear(d_model, d_model)
    def forward(self, Q, K, V, mask=None):
        B, T, _ = Q.size()
        reshape = lambda x: x.view(B, T, self.n_heads, self.d_k).transpose(1, 2)
        Q, K, V = reshape(self.W_q(Q)), reshape(self.W_k(K)), reshape(self.W_v(V))
        scores = Q @ K.transpose(-2, -1) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        attn = F.softmax(scores, dim=-1)
        out = (attn @ V).transpose(1, 2).contiguous().view(B, T, -1)
        return self.W_o(out)

class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        pos = torch.arange(0, max_len).float().unsqueeze(1)
        div = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(pos * div)
        pe[:, 1::2] = torch.cos(pos * div)
        self.register_buffer('pe', pe.unsqueeze(0))
    def forward(self, x):
        return x + self.pe[:, :x.size(1)]

# TensorFlow / Keras TransformerEncoder
import tensorflow as tf
enc = tf.keras.layers.TransformerEncoderLayer(num_heads=8, key_dim=64,
                                               feed_forward_dim=2048)
out_tf = enc(tf.random.normal((2, 10, 512)))`,
            output: 'Multi-head attention splits representation subspaces; positional encoding injects order.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Transformers from Scratch with Python',
            code: `import torch
import torch.nn as nn

# Transformers from Scratch — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Encoder-only, decoder-only, and encoder-decoder Transformers.',
          table: {
            headers: [
              'Variant',
              'Architecture',
              'Training Objective',
              'Examples'
            ],
            rows: [
              [
                'Encoder-only',
                'Bi-directional self-attention',
                'Masked token / classification',
                'BERT, RoBERTa, ViT'
              ],
              [
                'Decoder-only',
                'Causal self-attention',
                'Next-token prediction',
                'GPT, LLaMA, PaLM'
              ],
              [
                'Encoder-decoder',
                'Encoder + cross-attention decoder',
                'Seq2seq (translation, summarization)',
                'T5, BART, original Transformer'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting positional encoding (fix: without positional information, the Transformer is permutation-invariant and cannot distinguish word order)',
            'Mistake 2: Not using causal masking in decoder-only models (fix: mask future positions to maintain autoregressive generation)',
            'Mistake 3: Using the wrong normalization placement (fix: pre-norm (norm before attention/FFN) is more stable for deep Transformers than post-norm)'
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
          text: 'Transformers dominate modern AI.',
          list: [
            'Large language models: GPT-4, LLaMA, and Claude use decoder-only Transformer stacks',
            'Search and classification: BERT-based encoders power semantic search and named entity recognition',
            'Vision: Vision Transformers (ViT) treat image patches as tokens and match or exceed CNNs',
            'Multimodal models: CLIP and GPT-4V align text and image representations using Transformer encoders'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transformers replace recurrence with self-attention, enabling parallel training',
            'Multi-head attention captures multiple types of relationships simultaneously',
            'Positional encoding is required because attention has no built-in order awareness',
            'Pre-norm, residual connections, and feed-forward layers stabilize deep training',
            'Choose encoder-only for understanding, decoder-only for generation, encoder-decoder for translation'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why do Transformers need positional encoding?
Ans: Attention operations are permutation-invariant; positional encoding tells the model the order of tokens.`,
            `Q2: What is the purpose of multi-head attention?
Ans: It allows the model to jointly attend to information from different representation subspaces at different positions.`,
            `Q3: What is the difference between pre-norm and post-norm Transformer blocks?
Ans: Pre-norm applies LayerNorm before attention/FFN and is more stable for very deep models; post-norm applies it after.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Transformers from Scratch</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Transformers from Scratch")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    autoencoders: {
      title: 'Autoencoders',
      subtitle: 'Denoising, variational, and representation learning',
      sections: [
        {
          heading: 'What is an Autoencoder?',
          text: 'An <strong>autoencoder</strong> is a neural network trained to copy its input to its output through a compressed latent representation. By forcing information through a bottleneck, the model learns efficient, low-dimensional features useful for compression, denoising, anomaly detection, and generation.',
          list: [
            'Autoencoders have an encoder that maps input to a latent code and a decoder that reconstructs the input',
            'The bottleneck prevents trivial copying and forces the model to learn salient features',
            'Denoising autoencoders reconstruct clean inputs from corrupted versions',
            'Variational autoencoders (VAEs) learn a probabilistic latent space for generation'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>An <strong>autoencoder</strong> is a neural network trained to copy its input to its output through a compressed latent representation. By forcing information through a bottleneck, the model learns efficient, low-dimensional features useful for compression, denoising, anomaly detection, and generation. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, An <strong>autoencoder</strong> is a neural network trained to copy its input to its output through a compressed latent representation. By forcing information through a bottleneck, the model learns efficient, low-dimensional features useful for compression, denoising, anomaly detection, and generation. Autoencoders have an encoder that maps input to a latent code and a decoder that reconstructs the input The bottleneck prevents trivial copying and forces the model to learn salient features Denoising autoencoders reconstruct clean inputs from corrupted versions Variational autoencoders (VAEs) learn a probabilistic latent space for generation</p>',
            '<p>You use autoencoders when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Autoencoders

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Autoencoders sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'VAE loss = reconstruction loss + KL divergence between learned latent distribution and prior N(0,I).',
          example: {
            title: 'Denoising and Variational Autoencoders in PyTorch',
            code: `import torch, torch.nn as nn, torch.nn.functional as F

class DenoisingAutoencoder(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(nn.Linear(784, 256), nn.ReLU(), nn.Linear(256, 64))
        self.decoder = nn.Sequential(nn.Linear(64, 256), nn.ReLU(), nn.Linear(256, 784), nn.Sigmoid())
    def forward(self, x):
        return self.decoder(self.encoder(x))

# Training: add noise then reconstruct
x_noisy = x + 0.3 * torch.randn_like(x)
out = model(x_noisy)
loss = F.mse_loss(out, x)

# Variational Autoencoder
class VAE(nn.Module):
    def __init__(self, input_dim=784, latent_dim=20):
        super().__init__()
        self.fc1 = nn.Linear(input_dim, 400)
        self.fc_mu = nn.Linear(400, latent_dim)
        self.fc_logvar = nn.Linear(400, latent_dim)
        self.fc_decode = nn.Linear(latent_dim, 400)
        self.fc_out = nn.Linear(400, input_dim)
    def encode(self, x):
        h = F.relu(self.fc1(x))
        return self.fc_mu(h), self.fc_logvar(h)
    def reparameterize(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std
    def decode(self, z):
        h = F.relu(self.fc_decode(z))
        return torch.sigmoid(self.fc_out(h))
    def forward(self, x):
        mu, logvar = self.encode(x)
        z = self.reparameterize(mu, logvar)
        return self.decode(z), mu, logvar

# VAE loss
recon = F.binary_cross_entropy(x_hat, x, reduction='sum')
kl = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
loss = recon + kl`,
            output: 'Autoencoders reconstruct inputs; VAEs regularize the latent space with a KL term for generation.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Autoencoders with Python',
            code: `import torch
import torch.nn as nn

# Autoencoders — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Autoencoder types compared.',
          table: {
            headers: [
              'Type',
              'Latent Space',
              'Training Signal',
              'Use Case'
            ],
            rows: [
              [
                'Standard AE',
                'Deterministic',
                'Reconstruction MSE',
                'Compression, feature learning'
              ],
              [
                'Denoising AE',
                'Deterministic',
                'Reconstruct clean from noisy',
                'Robust features, denoising'
              ],
              [
                'Sparse AE',
                'Deterministic',
                'Reconstruction + sparsity penalty',
                'Interpretable features'
              ],
              [
                'VAE',
                'Probabilistic',
                'Reconstruction + KL',
                'Generation, interpolation'
              ],
              [
                'β-VAE',
                'Probabilistic',
                'Reconstruction + β·KL',
                'Disentangled representations'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using too large a bottleneck (fix: the bottleneck must be smaller than the input to force compression; otherwise the network learns the identity function)',
            'Mistake 2: Forgetting the KL term in VAE training (fix: without KL regularization, the encoder does not learn a structured latent space and generation fails)',
            'Mistake 3: Applying the same noise level to all inputs (fix: tune noise magnitude to the data; too little has no effect, too much makes reconstruction impossible)'
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
          text: 'Autoencoders are versatile representation learners.',
          list: [
            'Anomaly detection: autoencoders reconstruct normal data poorly on outliers, flagging anomalies',
            'Image denoising: denoising autoencoders remove sensor noise from medical and satellite images',
            'Recommendation: autoencoders learn user and item embeddings from interaction matrices',
            'Drug discovery: VAEs generate novel molecular structures by sampling from the latent space'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Autoencoders learn compressed representations by reconstructing inputs through a bottleneck',
            'Denoising autoencoders reconstruct clean data from corrupted inputs',
            'VAEs add a KL term to learn a smooth, probabilistic latent space suitable for generation',
            'Choose bottleneck size based on desired compression and downstream task',
            'Autoencoders are widely used for denoising, anomaly detection, and representation learning'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What prevents a standard autoencoder from learning the identity function?
Ans: The bottleneck layer is smaller than the input, forcing the network to learn a compressed representation.`,
            `Q2: What is the role of the KL divergence in a VAE?
Ans: It regularizes the learned latent distribution to stay close to a standard normal prior, enabling sampling and interpolation.`,
            `Q3: How does a denoising autoencoder learn robust features?
Ans: It is trained to reconstruct clean inputs from corrupted versions, so it must capture invariant structure rather than noise.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Autoencoders</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Autoencoders")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    gans: {
      title: 'Generative Adversarial Networks',
      subtitle: 'Generator and discriminator training dynamics',
      sections: [
        {
          heading: 'What is a GAN?',
          text: 'A <strong>Generative Adversarial Network (GAN)</strong> pits two networks against each other: a <strong>generator</strong> creates fake samples from random noise, and a <strong>discriminator</strong> tries to distinguish real samples from fakes. Through this adversarial game, the generator learns to produce increasingly realistic data.',
          list: [
            'GANs learn a mapping from a latent distribution to the data distribution',
            'The generator tries to fool the discriminator; the discriminator tries to detect fakes',
            'Training is a minimax game with a value function V(D,G)',
            'GANs can generate sharp images but are notoriously unstable to train'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Generative Adversarial Network (GAN)</strong> pits two networks against each other: a <strong>generator</strong> creates fake samples from random noise, and a <strong>discriminator</strong> tries to distinguish real samples from fakes. Through this adversarial game, the generator learns to produce increasingly realistic data. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Generative Adversarial Network (GAN)</strong> pits two networks against each other: a <strong>generator</strong> creates fake samples from random noise, and a <strong>discriminator</strong> tries to distinguish real samples from fakes. Through this adversarial game, the generator learns to produce increasingly realistic data. GANs learn a mapping from a latent distribution to the data distribution The generator tries to fool the discriminator; the discriminator tries to detect fakes Training is a minimax game with a value function V(D,G) GANs can generate sharp images but are notoriously unstable to train</p>',
            '<p>You use generative adversarial networks when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Generative Adversarial Networks

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Generative Adversarial Networks sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Minimax objective: min_G max_D E[log D(x)] + E[log(1 - D(G(z)))]. In practice, train G to maximize log D(G(z)) for better gradients.',
          example: {
            title: 'Simple GAN in PyTorch',
            code: `import torch, torch.nn as nn

latent_dim = 100
img_dim = 28 * 28

class Generator(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 256), nn.LeakyReLU(0.2),
            nn.Linear(256, 512), nn.LeakyReLU(0.2),
            nn.Linear(512, img_dim), nn.Tanh()
        )
    def forward(self, z):
        return self.net(z)

class Discriminator(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(img_dim, 512), nn.LeakyReLU(0.2),
            nn.Linear(512, 256), nn.LeakyReLU(0.2),
            nn.Linear(256, 1), nn.Sigmoid()
        )
    def forward(self, x):
        return self.net(x)

G = Generator(); D = Discriminator()
opt_G = torch.optim.Adam(G.parameters(), lr=2e-4, betas=(0.5, 0.999))
opt_D = torch.optim.Adam(D.parameters(), lr=2e-4, betas=(0.5, 0.999))
criterion = nn.BCELoss()

for real in dataloader:
    B = real.size(0)
    real = real.view(B, -1)
    z = torch.randn(B, latent_dim)
    fake = G(z)

    # Train D
    opt_D.zero_grad()
    loss_D = criterion(D(real), torch.ones(B,1)) +              criterion(D(fake.detach()), torch.zeros(B,1))
    loss_D.backward(); opt_D.step()

    # Train G
    opt_G.zero_grad()
    loss_G = criterion(D(fake), torch.ones(B,1))
    loss_G.backward(); opt_G.step()`,
            output: 'Alternating discriminator and generator updates drive the adversarial learning process.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Generative Adversarial Networks with Python',
            code: `import torch
import torch.nn as nn

# Generative Adversarial Networks — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'GAN training challenges and solutions.',
          table: {
            headers: [
              'Problem',
              'Symptom',
              'Solution'
            ],
            rows: [
              [
                'Mode collapse',
                'Generator outputs limited variety',
                'Minibatch discrimination, WGAN, unrolled GANs'
              ],
              [
                'Vanishing gradients',
                'Discriminator too strong',
                'Use WGAN-GP, LSGAN, or label smoothing'
              ],
              [
                'Training instability',
                'Loss oscillates / diverges',
                'Lower LR, spectral normalization, TTUR'
              ],
              [
                'Non-convergence',
                'No Nash equilibrium',
                'Progressive growing, style-based architectures'
              ],
              [
                'Evaluation difficulty',
                'No explicit likelihood',
                'Inception Score, FID, precision/recall'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Training generator and discriminator at the same ratio regardless of performance (fix: use TTUR — different learning rates for G and D; often update D more frequently than G)',
            'Mistake 2: Using ReLU in the generator output (fix: use Tanh for normalized [-1,1] images or Sigmoid for [0,1]; ReLU can kill gradients and clip outputs)',
            'Mistake 3: Evaluating GANs with reconstruction loss (fix: use FID or IS; pixel-level loss does not capture perceptual quality)'
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
          text: 'GANs have transformed generative media.',
          list: [
            'Image synthesis: StyleGAN generates high-resolution photorealistic faces and artwork',
            'Image editing: GANs enable style transfer, face aging, and attribute manipulation',
            'Data augmentation: synthetic training images improve rare-class detection',
            'Super-resolution: GANs upscale low-resolution images with realistic detail'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'GANs consist of a generator and discriminator trained adversarially',
            'The value function defines a minimax game between D and G',
            'Mode collapse and training instability are the main challenges',
            'WGAN-GP, spectral normalization, and TTUR improve stability',
            'FID and IS are standard metrics for evaluating GAN sample quality'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is mode collapse in GANs?
Ans: Mode collapse occurs when the generator learns to produce only a small subset of possible outputs, ignoring diversity in the data distribution.`,
            `Q2: Why is the generator trained to maximize log D(G(z)) instead of minimizing log(1-D(G(z)))?
Ans: The original objective has vanishing gradients early in training; maximizing log D(G(z)) provides stronger gradients.`,
            `Q3: What metric is commonly used to evaluate GAN image quality?
Ans: Fréchet Inception Distance (FID) measures the distance between real and generated image feature distributions.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Generative Adversarial Networks</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Generative Adversarial Networks")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'modern-regularization': {
      title: 'Modern Regularization',
      subtitle: 'Dropout, BatchNorm, LayerNorm, and DropBlock',
      sections: [
        {
          heading: 'What is Modern Regularization?',
          text: 'Modern Regularization is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Modern Regularization provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use modern regularization when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Modern Regularization

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Modern Regularization sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'BatchNorm: y = γ · (x - μ_B) / sqrt(σ_B² + ε) + β. DropBlock: drop contiguous spatial blocks instead of individual units.',
          example: {
            title: 'Dropout, DropBlock, and Normalization in PyTorch',
            code: `import torch, torch.nn as nn

class RegularizedCNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.Dropout2d(0.2),      # spatial dropout for feature maps
            nn.MaxPool2d(2)
        )
        self.fc = nn.Sequential(
            nn.Flatten(),
            nn.Linear(64*16*16, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, 10)
        )
    def forward(self, x):
        return self.fc(self.conv(x))

# DropBlock implementation sketch
class DropBlock(nn.Module):
    def __init__(self, drop_prob=0.3, block_size=7):
        super().__init__()
        self.drop_prob = drop_prob
        self.block_size = block_size
    def forward(self, x):
        if not self.training or self.drop_prob == 0.0:
            return x
        gamma = self.drop_prob / (self.block_size ** 2)
        mask = torch.bernoulli(torch.ones_like(x) * gamma)
        # Simplified: in practice mask is convolved to create block mask
        return x * (1 - mask) / (1 - self.drop_prob)

# LayerNorm for sequences
ln = nn.LayerNorm(512)
seq = torch.randn(2, 10, 512)
print(ln(seq).shape)  # same shape`,
            output: 'Dropout prevents co-adaptation; normalization stabilizes distributions; DropBlock regularizes spatial CNN features.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Modern Regularization with Python',
            code: `import torch
import torch.nn as nn

# Modern Regularization — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Regularization and normalization techniques compared.',
          table: {
            headers: [
              'Technique',
              'Mechanism',
              'Best For',
              'Key Consideration'
            ],
            rows: [
              [
                'Dropout',
                'Randomly zero units',
                'Fully-connected layers',
                'Scale by 1/(1-p) at test time'
              ],
              [
                'Dropout2d',
                'Randomly zero channels',
                'CNN feature maps',
                'Drop entire feature maps'
              ],
              [
                'DropBlock',
                'Zero spatial blocks',
                'Object detection CNNs',
                'Stronger spatial regularization'
              ],
              [
                'BatchNorm',
                'Normalize across batch',
                'CNNs, MLPs',
                'Use eval mode at inference; needs batch > 8'
              ],
              [
                'LayerNorm',
                'Normalize across features',
                'RNNs, Transformers',
                'No batch dependence'
              ],
              [
                'GroupNorm',
                'Normalize channel groups',
                'Small batches',
                'Generalizes BatchNorm'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using BatchNorm with batch size 1 (fix: use LayerNorm or GroupNorm; BatchNorm statistics are meaningless with a single sample)',
            'Mistake 2: Placing Dropout after the final layer (fix: dropout is a training regularizer for hidden layers; output layers should not have dropout)',
            'Mistake 3: Forgetting to switch to eval mode during inference (fix: BatchNorm and Dropout behavior changes between train and eval; always call model.eval())'
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
          text: 'Modern regularization is everywhere in production models.',
          list: [
            'ResNet and DenseNet: BatchNorm enables training of very deep CNNs',
            'Transformers: LayerNorm is the normalization of choice for encoder and decoder blocks',
            'Object detection: DropBlock improves generalization in detectors like Faster R-CNN',
            'Large-scale training: Dropout combined with Mixup/CutMix provides strong regularization for ImageNet models'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Dropout randomly drops activations to prevent overfitting',
            'DropBlock extends dropout to contiguous spatial regions for CNNs',
            'BatchNorm normalizes per feature across the batch; LayerNorm normalizes per sample across features',
            'Use BatchNorm for CNNs, LayerNorm/GroupNorm for sequences and small batches',
            'Always set model.eval() at inference when using BatchNorm or Dropout'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between Dropout and DropBlock?
Ans: Dropout zeros individual units; DropBlock zeros contiguous spatial regions in feature maps, providing stronger structural regularization.`,
            `Q2: Why is LayerNorm preferred over BatchNorm in Transformers?
Ans: Transformers process variable-length sequences and small batches; LayerNorm does not depend on batch statistics.`,
            `Q3: What happens if you forget to call model.eval() in PyTorch during inference?
Ans: Dropout remains active and BatchNorm uses batch statistics instead of running estimates, producing inconsistent predictions.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Modern Regularization</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Modern Regularization")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'scalable-training': {
      title: 'Scalable & Distributed Training',
      subtitle: 'Training large models across multiple GPUs and nodes',
      sections: [
        {
          heading: 'What is Scalable & Distributed Training?',
          text: 'Scalable & Distributed Training is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Scalable & Distributed Training provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use scalable & distributed training when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Scalable & Distributed Training

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Scalable & Distributed Training sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'In data parallel SGD, each worker computes gradients on its batch shard; gradients are averaged across workers before updating weights.',
          example: {
            title: 'PyTorch DDP, FSDP, and TensorFlow Strategy',
            code: `# PyTorch DistributedDataParallel
import os, torch, torch.nn as nn
from torch.distributed import init_process_group
from torch.nn.parallel import DistributedDataParallel as DDP

init_process_group(backend='nccl')
local_rank = int(os.environ['LOCAL_RANK'])
torch.cuda.set_device(local_rank)

model = MyModel().to(local_rank)
model = DDP(model, device_ids=[local_rank])
opt = torch.optim.AdamW(model.parameters(), lr=1e-4)

for xb, yb in dataloader:
    xb, yb = xb.to(local_rank), yb.to(local_rank)
    opt.zero_grad()
    loss = criterion(model(xb), yb)
    loss.backward()
    opt.step()

# PyTorch FSDP for very large models
from torch.distributed.fsdp import FullyShardedDataParallel as FSDP
model = FSDP(MyLargeModel(), auto_wrap_policy=size_based_auto_wrap_policy)

# TensorFlow MirroredStrategy
import tensorflow as tf
strategy = tf.distribute.MirroredStrategy()
with strategy.scope():
    model = create_model()
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')
model.fit(dataset, epochs=10)`,
            output: 'DDP averages gradients across GPUs; FSDP shards model states; MirroredStrategy mirrors the model on each GPU.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Scalable & Distributed Training with Python',
            code: `import torch
import torch.nn as nn

# Scalable & Distributed Training — minimal tensor workflow
x = torch.randn(8, 3, 32, 32)  # batch of "images"
conv = nn.Conv2d(3, 16, kernel_size=3, padding=1)
out = conv(x)
print("Input:", x.shape, "→ Conv output:", out.shape)`,
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
          text: 'Parallelism strategies.',
          table: {
            headers: [
              'Strategy',
              'What Is Split',
              'Best For',
              'Framework'
            ],
            rows: [
              [
                'Data Parallel',
                'Batch',
                'Model fits on one GPU',
                'PyTorch DDP, TF MirroredStrategy'
              ],
              [
                'Model Parallel',
                'Layers',
                'Model too large for one GPU',
                'PipelineParallel, Megatron'
              ],
              [
                'Pipeline Parallel',
                'Batch + layers',
                'Very large models',
                'DeepSpeed, GPipe'
              ],
              [
                'FSDP',
                'Params, grads, optim states',
                'Large models on modest cluster',
                'PyTorch FSDP'
              ],
              [
                'ZeRO',
                'Optimizer state sharding',
                'Billion-parameter models',
                'DeepSpeed'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not scaling the learning rate with batch size (fix: linear LR scaling is common when increasing batch size; use warmup to avoid instability)',
            'Mistake 2: Ignoring gradient synchronization costs (fix: overlap communication and computation; use DDP instead of DataParallel in PyTorch)',
            'Mistake 3: Running distributed code without proper launch (fix: use torchrun or mpirun with the correct rank/world_size environment variables)'
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
          text: 'Distributed training powers the largest AI systems.',
          list: [
            'Large language models: GPT-4 and LLaMA are trained on thousands of GPUs using 3D parallelism (data, tensor, pipeline)',
            'Vision transformers: DDP with cosine schedules trains models like ViT-G on hundreds of TPUs/GPUs',
            'Recommender systems: model parallelism splits massive embedding tables across many GPU nodes',
            'Scientific computing: climate and protein models use distributed training to handle huge spatial and temporal inputs'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Distributed training enables larger models and faster training across multiple devices',
            'Data parallelism splits batches; model parallelism splits layers; pipeline parallelism combines both',
            'FSDP and ZeRO shard optimizer states and parameters to fit very large models',
            'Scale learning rate with batch size and use warmup for large-batch training',
            'Use torchrun or equivalent launchers and prefer DDP over DataParallel in PyTorch'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the difference between data parallelism and model parallelism?
Ans: Data parallelism splits the batch across replicas of the full model; model parallelism splits the model itself across devices.`,
            `Q2: Why is FSDP useful for training very large models?
Ans: FSDP shards parameters, gradients, and optimizer states across workers, so no single GPU has to hold the entire model.`,
            `Q3: Why should you scale the learning rate when increasing batch size?
Ans: Larger batches produce more accurate gradient estimates, allowing larger steps; linear scaling keeps the optimization trajectory consistent.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Scalable & Distributed Training</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Scalable & Distributed Training")
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
