// deep learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js dl_module4.js

export const dlModule4Content = {
  module4: {
    'rnn-basics': {
      title: 'Recurrent Neural Networks',
      subtitle: 'Modeling sequences and time-structured data',
      sections: [
        {
          heading: 'What is an RNN?',
          text: 'A <strong>Recurrent Neural Network (RNN)</strong> processes sequential data by maintaining a hidden state that captures information from previous time steps. Unlike feed-forward networks, RNNs share parameters across time and can handle inputs of variable length, making them ideal for language, speech, and time series.',
          list: [
            'RNNs maintain a hidden state that acts as a memory of past inputs',
            'The same weights are applied at every time step (parameter sharing)',
            'They can map sequences to sequences, sequences to vectors, or vectors to sequences',
            'Vanilla RNNs suffer from vanishing and exploding gradients over long sequences'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>Recurrent Neural Network (RNN)</strong> processes sequential data by maintaining a hidden state that captures information from previous time steps. Unlike feed-forward networks, RNNs share parameters across time and can handle inputs of variable length, making them ideal for language, speech, and time series. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>Recurrent Neural Network (RNN)</strong> processes sequential data by maintaining a hidden state that captures information from previous time steps. Unlike feed-forward networks, RNNs share parameters across time and can handle inputs of variable length, making them ideal for language, speech, and time series. RNNs maintain a hidden state that acts as a memory of past inputs The same weights are applied at every time step (parameter sharing) They can map sequences to sequences, sequences to vectors, or vectors to sequences Vanilla RNNs suffer from vanishing and exploding gradients over long sequences</p>',
            '<p>You use recurrent neural networks when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Recurrent Neural Networks

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Recurrent Neural Networks sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'RNN update equations: hidden state h_t = tanh(W_ih x_t + W_hh h_{t-1} + b).',
          example: {
            title: 'Vanilla RNN in NumPy and PyTorch',
            code: `import numpy as np

# Manual single-layer RNN forward pass
np.random.seed(0)
x = np.random.randn(5, 4, 3)       # seq_len=5, batch=4, input_dim=3
hidden_dim = 4
W_ih = np.random.randn(3, hidden_dim) * 0.01
W_hh = np.random.randn(hidden_dim, hidden_dim) * 0.01
b = np.zeros(hidden_dim)

h = np.zeros((4, hidden_dim))
for t in range(x.shape[0]):
    h = np.tanh(x[t] @ W_ih + h @ W_hh + b)
print("final hidden shape:", h.shape)  # (4, 4)

# PyTorch RNN
import torch, torch.nn as nn
rnn = nn.RNN(input_size=3, hidden_size=4, batch_first=False)
xt = torch.tensor(x, dtype=torch.float32)
out, hidden = rnn(xt)
print(out.shape, hidden.shape)

# TensorFlow
import tensorflow as tf
rnn_tf = tf.keras.layers.SimpleRNN(4, return_sequences=False,
                                   input_shape=(5, 3))
print(rnn_tf(tf.random.normal((4, 5, 3))).shape)`,
            output: 'RNNs process one time step at a time, updating the hidden state recursively.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Recurrent Neural Networks with Python',
            code: `import torch
import torch.nn as nn

# Recurrent Neural Networks — minimal tensor workflow
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
          text: 'RNN variants and architectures.',
          table: {
            headers: [
              'Type',
              'Input → Output',
              'Use Case',
              'Example'
            ],
            rows: [
              [
                'Many-to-one',
                'Sequence → vector',
                'Sentiment classification',
                'Review → positive/negative'
              ],
              [
                'One-to-many',
                'Vector → sequence',
                'Image captioning',
                'Image → sentence'
              ],
              [
                'Many-to-many (synced)',
                'Sequence → sequence',
                'Named entity recognition',
                'Token labels'
              ],
              [
                'Many-to-many (encoder-decoder)',
                'Sequence → sequence',
                'Machine translation',
                'English → French'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using vanilla RNNs for long sequences (fix: use LSTM or GRU to mitigate vanishing gradients; attention or transformers for very long contexts)',
            'Mistake 2: Forgetting to pad and pack sequences of different lengths (fix: use nn.utils.rnn.pack_padded_sequence in PyTorch to skip padding computations)',
            'Mistake 3: Passing long sequences through RNNs without truncation (fix: truncate or chunk very long sequences; RNN gradients become unstable over hundreds of steps)'
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
          text: 'RNNs are foundational for sequential data.',
          list: [
            'Natural language processing: part-of-speech tagging, named entity recognition, and sentiment analysis',
            'Speech recognition: mapping audio frames to phonemes and text transcripts',
            'Time series forecasting: predicting stock prices, energy demand, and sensor readings',
            'Music generation: learning note sequences and generating new melodies'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'RNNs process sequences by maintaining a hidden state updated at each time step',
            'Parameter sharing across time lets RNNs handle variable-length inputs',
            'Vanilla RNNs struggle with long-term dependencies due to vanishing gradients',
            'LSTM and GRU introduce gating mechanisms to preserve long-term information',
            'RNNs support many-to-one, one-to-many, and many-to-many mappings'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the main advantage of RNNs over feed-forward networks for sequences?
Ans: RNNs maintain a hidden state and share parameters across time, allowing them to process variable-length sequential data.`,
            `Q2: Why do vanilla RNNs struggle with long sequences?
Ans: Gradients tend to vanish or explode as they are backpropagated through many time steps.`,
            `Q3: What is parameter sharing in RNNs?
Ans: The same weight matrices (W_ih, W_hh) are used at every time step, drastically reducing parameter count.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Recurrent Neural Networks</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Recurrent Neural Networks")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'lstm-gru': {
      title: 'LSTM & GRU',
      subtitle: 'Gated recurrent units for long-term dependencies',
      sections: [
        {
          heading: 'What is LSTM & GRU?',
          text: 'LSTM & GRU is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, LSTM & GRU provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use lstm & gru when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — LSTM & GRU

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: LSTM & GRU sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'LSTM gates and GRU gates regulate information flow through the recurrent state.',
          example: {
            title: 'LSTM and GRU Gate Diagrams and Equations',
            code: `LSTM equations:
  f_t = σ(W_f · [h_{t-1}, x_t] + b_f)   # forget gate
  i_t = σ(W_i · [h_{t-1}, x_t] + b_i)   # input gate
  o_t = σ(W_o · [h_{t-1}, x_t] + b_o)   # output gate
  c̃_t = tanh(W_c · [h_{t-1}, x_t] + b_c) # candidate cell
  c_t = f_t ⊙ c_{t-1} + i_t ⊙ c̃_t       # cell state
  h_t = o_t ⊙ tanh(c_t)                 # hidden state

GRU equations:
  z_t = σ(W_z · [h_{t-1}, x_t] + b_z)   # update gate
  r_t = σ(W_r · [h_{t-1}, x_t] + b_r)   # reset gate
  h̃_t = tanh(W · [r_t ⊙ h_{t-1}, x_t])  # candidate
  h_t = (1 - z_t) ⊙ h_{t-1} + z_t ⊙ h̃_t # new hidden

ASCII LSTM cell:
        x_t
         │
    ┌────┴────┐
    │  gates  │──► f_t, i_t, o_t
    └────┬────┘
         ▼
  c_{t-1} ──►[⊕]◄── c̃_t   (cell state)
              │
              ▼
            tanh
              │
         h_{t-1} ──►[⊙]──► h_t  (hidden state)

# PyTorch usage
import torch.nn as nn
lstm = nn.LSTM(input_size=10, hidden_size=20, num_layers=2,
               batch_first=True, dropout=0.3, bidirectional=True)
gru = nn.GRU(input_size=10, hidden_size=20, num_layers=2,
             batch_first=True, bidirectional=True)`,
            output: 'Gates let LSTM/GRU selectively remember and forget, preserving long-term dependencies.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'LSTM & GRU with Python',
            code: `import torch
import torch.nn as nn

# LSTM & GRU — minimal tensor workflow
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
          text: 'LSTM vs GRU.',
          table: {
            headers: [
              'Aspect',
              'LSTM',
              'GRU'
            ],
            rows: [
              [
                'Gates',
                'Forget, input, output',
                'Reset, update'
              ],
              [
                'Cell state',
                'Separate cell and hidden state',
                'No separate cell state'
              ],
              [
                'Parameters',
                'More (4 gate matrices)',
                'Fewer (3 gate matrices)'
              ],
              [
                'Training speed',
                'Slower',
                'Faster'
              ],
              [
                'Long dependencies',
                'Very strong',
                'Strong'
              ],
              [
                'Best choice when',
                'Long sequences, max accuracy',
                'Speed and smaller models matter'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using the wrong hidden state for classification (fix: for many-to-one tasks, use the final hidden state or the output at the last valid time step, not the padding)',
            'Mistake 2: Not using bidirectional RNNs when future context is available (fix: bidirectional LSTM/GRU doubles capacity and uses both past and future context)',
            'Mistake 3: Using too many recurrent layers for small datasets (fix: start with 1–2 layers; deeper recurrent stacks are harder to train and easier to overfit)'
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
          text: 'LSTM and GRU are workhorses for sequence modeling.',
          list: [
            'Machine translation: encoder-decoder LSTM/GRU with attention powers many production translation systems',
            'Sentiment analysis: bidirectional LSTM captures context from both directions of a sentence',
            'Speech recognition: deep bidirectional LSTMs map acoustic features to text',
            'Anomaly detection: LSTM autoencoders learn normal time-series patterns and flag deviations'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LSTM uses forget, input, and output gates plus a separate cell state',
            'GRU combines forget and input into an update gate and has no separate cell state',
            'Gating mitigates vanishing gradients, enabling learning of long-term dependencies',
            'Bidirectional RNNs use both past and future context when available',
            'Choose LSTM for maximum accuracy on long sequences; GRU for speed and fewer parameters'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the role of the forget gate in an LSTM?
Ans: It decides what proportion of the previous cell state to retain, allowing the network to discard irrelevant information.`,
            `Q2: How does GRU differ from LSTM in terms of gates?
Ans: GRU merges the forget and input gates into a single update gate and adds a reset gate, removing the separate cell state.`,
            `Q3: When should you use a bidirectional RNN?
Ans: When the full sequence is available at inference and future context improves the prediction (e.g., sentence understanding).`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>LSTM & GRU</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — LSTM & GRU")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'text-generation': {
      title: 'Text Generation',
      subtitle: 'Autoregressive language modeling with RNNs',
      sections: [
        {
          heading: 'What is Text Generation?',
          text: 'Text Generation is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Text Generation provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use text generation when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Text Generation

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Text Generation sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: `Teacher forcing: during training, use the true previous token y_{t-1} as input at time t instead of the model's own prediction.`,
          example: {
            title: 'Character-Level RNN Text Generator in PyTorch',
            code: `import torch, torch.nn as nn

class CharRNN(nn.Module):
    def __init__(self, vocab_size, embed_dim=64, hidden_dim=256):
        super().__init__()
        self.embed = nn.Embedding(vocab_size, embed_dim)
        self.lstm = nn.LSTM(embed_dim, hidden_dim, num_layers=2,
                            batch_first=True)
        self.fc = nn.Linear(hidden_dim, vocab_size)
    def forward(self, x, hidden=None):
        e = self.embed(x)
        out, hidden = self.lstm(e, hidden)
        logits = self.fc(out)
        return logits, hidden

# Training with teacher forcing
criterion = nn.CrossEntropyLoss()
opt = torch.optim.Adam(model.parameters(), lr=1e-3)
for xb, yb in loader:                 # xb: (B, T), yb: (B, T)
    opt.zero_grad()
    logits, _ = model(xb)
    loss = criterion(logits.view(-1, vocab_size), yb.view(-1))
    loss.backward(); opt.step()

# Generation (no teacher forcing)
model.eval()
idx = torch.tensor([[char2idx['H']]])
hidden = None
output = []
for _ in range(200):
    with torch.no_grad():
        logits, hidden = model(idx, hidden)
        probs = torch.softmax(logits[:, -1] / temperature, dim=-1)
        idx_next = torch.multinomial(probs, num_samples=1)
    output.append(idx2char[idx_next.item()])
    idx = idx_next
print(''.join(output))`,
            output: 'Teacher forcing during training and autoregressive sampling at inference are the core text-generation patterns.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Text Generation with Python',
            code: `import torch
import torch.nn as nn

# Text Generation — minimal tensor workflow
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
          text: 'Teacher forcing vs scheduled sampling vs autoregressive inference.',
          table: {
            headers: [
              'Method',
              'Training Input at t',
              'Pros',
              'Cons'
            ],
            rows: [
              [
                'Teacher forcing',
                'Ground-truth y_{t-1}',
                'Fast, stable training',
                'Exposure bias at inference'
              ],
              [
                'Scheduled sampling',
                'Mix of true and predicted',
                'Reduces exposure bias',
                'Non-differentiable, tricky to tune'
              ],
              [
                'Autoregressive inference',
                'Model prediction ŷ_{t-1}',
                'Matches test-time behavior',
                'Error accumulation over long texts'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to set model.eval() during generation (fix: dropout and batch norm behave differently at inference; eval mode is required for consistent sampling)',
            'Mistake 2: Using greedy decoding exclusively (fix: use temperature scaling, top-k, or nucleus sampling to produce more diverse and natural text)',
            'Mistake 3: Training on too small a corpus (fix: character-level models need millions of characters; word/subword models need large curated datasets)'
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
          text: 'Autoregressive generation underpins many NLP products.',
          list: [
            'Chatbots and assistants: GPT-style models generate contextually relevant responses',
            'Code completion: models predict the next token of source code given prior context',
            'Creative writing: tools generate stories, poems, and marketing copy from prompts',
            'Keyboard suggestions: mobile keyboards predict the next word in real time'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Text generation predicts the next token autoregressively',
            'Teacher forcing uses ground-truth inputs during training',
            'At inference, generated tokens are fed back as the next input',
            'Temperature, top-k, and nucleus sampling control output diversity',
            'Exposure bias arises because training sees only true prefixes, not model-generated ones'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is teacher forcing?
Ans: During training, feeding the ground-truth previous token as input to predict the next token, rather than the model's own prediction.`,
            `Q2: What is exposure bias?
Ans: The mismatch between training with true prefixes and inference with model-generated prefixes, causing error accumulation.`,
            `Q3: How does temperature affect sampling?
Ans: Temperature scales logits before softmax; high temperature flattens the distribution and increases diversity, low temperature makes output more deterministic.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Text Generation</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Text Generation")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'time-series-forecasting': {
      title: 'Time Series Forecasting',
      subtitle: 'Predicting future values with RNNs',
      sections: [
        {
          heading: 'What is Time Series Forecasting?',
          text: 'Time Series Forecasting is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Time Series Forecasting provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use time series forecasting when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Time Series Forecasting

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Time Series Forecasting sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Sequence-to-vector: encode a window of past values into a hidden state, then decode future values.',
          example: {
            title: 'LSTM Forecaster in PyTorch and TensorFlow',
            code: `import torch, torch.nn as nn

class LSTMForecaster(nn.Module):
    def __init__(self, input_dim=1, hidden_dim=64, output_steps=12):
        super().__init__()
        self.lstm = nn.LSTM(input_dim, hidden_dim, batch_first=True)
        self.fc = nn.Linear(hidden_dim, output_steps)
    def forward(self, x):                # x: (B, T, input_dim)
        out, (h, c) = self.lstm(x)
        return self.fc(h.squeeze(0))     # (B, output_steps)

# Generate synthetic data
T, H = 24, 12
model = LSTMForecaster(input_dim=1, hidden_dim=64, output_steps=H)
x = torch.randn(32, T, 1)              # batch=32, past window=24
y = torch.randn(32, H)                 # future horizon=12
loss = nn.MSELoss()(model(x), y)
print(loss.item())

# TensorFlow equivalent
import tensorflow as tf
model_tf = tf.keras.Sequential([
    tf.keras.layers.LSTM(64, input_shape=(T, 1)),
    tf.keras.layers.Dense(H)
])
model_tf.compile(optimizer='adam', loss='mse')
# model_tf.fit(X_train, y_train, epochs=20)`,
            output: 'An LSTM encodes the past window and a fully-connected layer predicts the future horizon.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Time Series Forecasting with Python',
            code: `import torch
import torch.nn as nn

# Time Series Forecasting — minimal tensor workflow
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
          text: 'Forecasting strategies.',
          table: {
            headers: [
              'Strategy',
              'How',
              'Pros',
              'Cons'
            ],
            rows: [
              [
                'Direct multi-step',
                'One model per horizon',
                'Stable, no error accumulation',
                'Many models'
              ],
              [
                'Recursive multi-step',
                'Predict one step, feed back',
                'Single model',
                'Error accumulation'
              ],
              [
                'Sequence-to-sequence',
                'Decoder predicts all horizons',
                'One model, captures dependencies',
                'More complex'
              ],
              [
                'Seq2Vec',
                'Encode window, predict vector',
                'Simple and fast',
                'Assumes fixed horizon'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Not normalizing the time series (fix: standardize or normalize each series; unscaled values make gradients unstable and metrics misleading)',
            'Mistake 2: Leaking future information into training windows (fix: ensure each training sample uses only past values to predict future values; shuffle samples, not time order within a sample)',
            'Mistake 3: Evaluating with MAE/MSE on scaled data without inverse transform (fix: report metrics in original units so stakeholders can interpret forecast quality)'
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
          text: 'Time series forecasting impacts many industries.',
          list: [
            'Energy: predicting electricity demand to optimize grid operations and pricing',
            'Finance: forecasting stock volatility and risk metrics',
            'Retail: predicting sales to manage inventory and supply chains',
            'Healthcare: forecasting patient admissions and disease spread'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'RNNs model ordered temporal dependencies directly',
            'Normalize time series before training for stable gradients',
            'Multi-step forecasting can be direct, recursive, or sequence-to-sequence',
            'Avoid future information leakage when constructing training windows',
            'Report metrics in the original scale of the data'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is normalization important for time series forecasting?
Ans: Different scales cause unstable gradients and make loss/optimization behave poorly.`,
            `Q2: What is future information leakage?
Ans: Using data that would not be available at prediction time when creating training examples.`,
            `Q3: What is the downside of recursive multi-step forecasting?
Ans: Errors from earlier predictions compound when they are fed back as inputs for later steps.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Time Series Forecasting</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Time Series Forecasting")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'attention-intro': {
      title: 'Attention Mechanism',
      subtitle: 'Focusing on what matters in sequences',
      sections: [
        {
          heading: 'What is Attention?',
          text: '<strong>Attention</strong> allows a model to focus on different parts of the input sequence when producing each output. Instead of compressing the entire sequence into a single fixed-size vector, attention computes a weighted combination of encoder hidden states, where the weights are learned dynamically for each output step.',
          list: [
            'Attention weights determine how much each input position contributes to each output',
            'It solves the bottleneck of encoding long sequences into a single vector',
            'Dot-product attention scores compatibility between query and key vectors',
            'Self-attention applies attention within a single sequence, enabling rich contextual representations'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Attention</strong> allows a model to focus on different parts of the input sequence when producing each output. Instead of compressing the entire sequence into a single fixed-size vector, attention computes a weighted combination of encoder hidden states, where the weights are learned dynamically for each output step. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Attention</strong> allows a model to focus on different parts of the input sequence when producing each output. Instead of compressing the entire sequence into a single fixed-size vector, attention computes a weighted combination of encoder hidden states, where the weights are learned dynamically for each output step. Attention weights determine how much each input position contributes to each output It solves the bottleneck of encoding long sequences into a single vector Dot-product attention scores compatibility between query and key vectors Self-attention applies attention within a single sequence, enabling rich contextual representations</p>',
            '<p>You use attention mechanism when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Attention Mechanism

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Attention Mechanism sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Scaled dot-product attention: Attention(Q,K,V) = softmax(QK^T / sqrt(d_k)) V.',
          example: {
            title: 'Attention Weights and Context Vector in NumPy and PyTorch',
            code: `import numpy as np

# Toy encoder hidden states (seq_len=4, hidden_dim=3)
H = np.random.randn(4, 3)

# Decoder query vector
q = np.random.randn(3)

# Dot-product scores
scores = H @ q
weights = np.exp(scores) / np.exp(scores).sum()
context = weights @ H
print("weights:", weights.round(3))
print("context:", context.round(3))

# PyTorch scaled dot-product
import torch, torch.nn.functional as F

def scaled_dot_attention(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = Q @ K.transpose(-2, -1) / np.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))
    weights = F.softmax(scores, dim=-1)
    return weights @ V, weights

B, T, d = 2, 5, 8
Q = torch.randn(B, T, d)
K = torch.randn(B, T, d)
V = torch.randn(B, T, d)
out, attn = scaled_dot_attention(Q, K, V)
print(out.shape, attn.shape)  # (B, T, d), (B, T, T)

# TensorFlow
import tensorflow as tf
layer = tf.keras.layers.Attention(use_scale=True)
out_tf = layer([Q.numpy(), V.numpy(), K.numpy()], return_attention_scores=False)`,
            output: 'Attention produces a context vector that is a weighted sum of values, with weights from query-key compatibility.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Attention Mechanism with Python',
            code: `import torch
import torch.nn as nn

# Attention Mechanism — minimal tensor workflow
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
          text: 'Encoder-decoder attention vs self-attention.',
          table: {
            headers: [
              'Type',
              'Query Source',
              'Key/Value Source',
              'Purpose'
            ],
            rows: [
              [
                'Encoder-decoder',
                'Decoder hidden state',
                'Encoder outputs',
                'Align output to input'
              ],
              [
                'Self-attention',
                'Same sequence',
                'Same sequence',
                'Build contextual representation'
              ],
              [
                'Masked self-attention',
                'Same sequence up to t',
                'Same sequence up to t',
                'Autoregressive generation'
              ],
              [
                'Cross-attention',
                'One modality',
                'Another modality',
                'Multimodal alignment'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting to scale by sqrt(d_k) (fix: scaling prevents softmax from entering extremely flat regions for large dimensions)',
            'Mistake 2: Not applying a causal mask in decoder self-attention (fix: mask future positions so the model cannot cheat by looking ahead during autoregressive generation)',
            'Mistake 3: Treating attention weights as explanations without caution (fix: attention shows where the model looked, but weights can be noisy and are not reliable causal explanations)'
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
          text: 'Attention is the core mechanism behind modern NLP and vision models.',
          list: [
            'Machine translation: attention aligns source and target words, improving translation quality',
            'Transformers: self-attention replaces recurrence entirely, enabling parallel training on long sequences',
            'Vision transformers: image patches attend to each other across the entire image',
            'Speech recognition: attention connects audio frames to output characters or words'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Attention computes a weighted sum of values based on query-key compatibility',
            'Scaled dot-product attention is the most common form: softmax(QK^T / sqrt(d_k)) V',
            'Self-attention relates different positions within the same sequence',
            'Causal masking prevents autoregressive models from seeing future tokens',
            'Attention enables Transformers and is central to modern deep learning'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What are the roles of Q, K, and V in attention?
Ans: Query is what is being looked for; Key is what is being matched against; Value is what is aggregated using the resulting weights.`,
            `Q2: Why is the dot-product scaled by sqrt(d_k)?
Ans: For large dimensions, dot products grow in magnitude, pushing softmax into regions with very small gradients.`,
            `Q3: Why is masking needed in decoder self-attention?
Ans: To prevent the model from attending to future tokens during training, preserving the autoregressive property.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Attention Mechanism</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Attention Mechanism")
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
