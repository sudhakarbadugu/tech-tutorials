// deep learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js dl_module3.js

export const dlModule3Content = {
  module3: {
    'convolution-arithmetic': {
      title: 'Convolution Arithmetic',
      subtitle: 'Kernels, strides, padding, and feature map sizes',
      sections: [
        {
          heading: 'What is a Convolution?',
          text: 'A <strong>convolution</strong> slides a learnable filter (kernel) across the input and computes dot products at every location, producing a feature map. By learning many filters, a CNN detects edges, textures, shapes, and objects at increasing levels of abstraction.',
          list: [
            'Kernel size (K) defines the local receptive field of each output neuron',
            'Stride (S) controls how far the kernel moves; larger strides reduce spatial dimensions faster',
            'Padding (P) adds zeros around the input to preserve spatial size or control output shape',
            'Output channels equal the number of independent filters applied to the input'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A <strong>convolution</strong> slides a learnable filter (kernel) across the input and computes dot products at every location, producing a feature map. By learning many filters, a CNN detects edges, textures, shapes, and objects at increasing levels of abstraction. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A <strong>convolution</strong> slides a learnable filter (kernel) across the input and computes dot products at every location, producing a feature map. By learning many filters, a CNN detects edges, textures, shapes, and objects at increasing levels of abstraction. Kernel size (K) defines the local receptive field of each output neuron Stride (S) controls how far the kernel moves; larger strides reduce spatial dimensions faster Padding (P) adds zeros around the input to preserve spatial size or control output shape Output channels equal the number of independent filters applied to the input</p>',
            '<p>You use convolution arithmetic when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Convolution Arithmetic

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Convolution Arithmetic sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Feature map size: output = floor((input + 2*padding - kernel)/stride) + 1.',
          example: {
            title: 'Feature Map Size and Manual Convolution in NumPy',
            code: `import numpy as np

# Manual 2D convolution (single channel, no bias)
def conv2d(x, kernel, stride=1, padding=0):
    if padding > 0:
        x = np.pad(x, pad_width=padding, mode='constant')
    k_h, k_w = kernel.shape
    out_h = (x.shape[0] - k_h) // stride + 1
    out_w = (x.shape[1] - k_w) // stride + 1
    out = np.zeros((out_h, out_w))
    for i in range(out_h):
        for j in range(out_w):
            patch = x[i*stride:i*stride+k_h, j*stride:j*stride+k_w]
            out[i,j] = (patch * kernel).sum()
    return out

x = np.array([[1,2,3,0],
              [0,1,2,3],
              [3,0,1,2],
              [2,3,0,1]])
kernel = np.array([[1,0,-1],
                   [1,0,-1],
                   [1,0,-1]])  # vertical edge filter
print(conv2d(x, kernel, stride=1, padding=1))

# Feature map size formula
def output_size(n, k, p, s):
    return (n + 2*p - k) // s + 1

print(output_size(32, 3, 1, 1))   # 32 (same padding)
print(output_size(32, 3, 0, 2))   # 15 (valid, stride 2)
print(output_size(224, 7, 3, 2))  # 112

# PyTorch equivalent
import torch, torch.nn as nn
conv = nn.Conv2d(1, 1, kernel_size=3, stride=1, padding=1, bias=False)
with torch.no_grad():
    conv.weight[:] = torch.tensor(kernel, dtype=torch.float32).view(1,1,3,3)
xt = torch.tensor(x, dtype=torch.float32).view(1,1,4,4)
print(conv(xt).shape)`,
            output: 'Padding preserves spatial size for stride=1; stride and pooling reduce it.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Convolution Arithmetic with Python',
            code: `import torch
import torch.nn as nn

# Convolution Arithmetic — minimal tensor workflow
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
          text: 'Same vs valid padding and pooling effects.',
          table: {
            headers: [
              'Setting',
              'Padding',
              'Output Size',
              'Use Case'
            ],
            rows: [
              [
                'Valid',
                '0',
                'Smaller than input',
                'No padding, simple arithmetic'
              ],
              [
                'Same (stride=1)',
                '(K-1)/2',
                'Same as input',
                'Preserve spatial resolution'
              ],
              [
                'Same (stride>1)',
                'Computed',
                'ceil(input/stride)',
                'Downsampling with aligned sizes'
              ],
              [
                'Dilated conv',
                'Effective K = K + (K-1)(d-1)',
                'Larger receptive field',
                'Segmentation, audio'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Forgetting the floor in output size formula (fix: always use integer division; fractional output sizes mean the kernel does not fit evenly)',
            'Mistake 2: Mismatching padding and stride when stacking layers (fix: compute the output size of each conv before wiring the next layer)',
            'Mistake 3: Confusing kernel size with receptive field (fix: receptive field grows with depth; two 3×3 layers have a 5×5 receptive field)'
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
          text: 'Convolution arithmetic governs every vision model design.',
          list: [
            'Image classification: ResNet-50 starts with 224×224 input and halves spatial size five times to reach 7×7 before the classifier',
            'Object detection: FPN builds multi-scale feature maps by carefully tracking strides (4, 8, 16, 32)',
            'Semantic segmentation: dilated convolutions maintain resolution while expanding receptive field',
            'Mobile networks: depthwise separable convolutions reduce params by splitting filtering and mixing'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Convolution applies a sliding kernel; output size depends on input, kernel, padding, and stride',
            'Formula: output = floor((input + 2*padding - kernel)/stride) + 1',
            'Same padding preserves size for stride=1; valid padding shrinks the output',
            'Stacking convolutions increases receptive field without increasing kernel size',
            'Always compute shapes before connecting layers to avoid dimension mismatches'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the output size of a 7×7 conv with stride 2 and padding 3 on a 224×224 input?
Ans: floor((224 + 6 - 7)/2) + 1 = 112.`,
            `Q2: Why is padding used?
Ans: Padding controls output spatial size and prevents information loss at image borders.`,
            `Q3: What is the receptive field of two stacked 3×3 conv layers with stride 1?
Ans: 5×5, because the second layer sees a 3×3 region of the first layer's 3×3 outputs.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Convolution Arithmetic</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Convolution Arithmetic")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'lenet-alexnet-vgg': {
      title: 'LeNet, AlexNet, and VGG',
      subtitle: 'Building classic CNNs step-by-step',
      sections: [
        {
          heading: 'What is LeNet, AlexNet, and VGG?',
          text: 'LeNet, AlexNet, and VGG is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, LeNet, AlexNet, and VGG provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use lenet, alexnet, and vgg when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — LeNet, AlexNet, and VGG

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: LeNet, AlexNet, and VGG sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'VGG insight: two 3×3 convs have the same receptive field as one 5×5 conv with fewer parameters and more non-linearity.',
          example: {
            title: 'LeNet, AlexNet, and VGG in PyTorch',
            code: `import torch.nn as nn

# LeNet-5 style
class LeNet(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 6, kernel_size=5, padding=2),
            nn.Tanh(),
            nn.AvgPool2d(2),
            nn.Conv2d(6, 16, kernel_size=5),
            nn.Tanh(),
            nn.AvgPool2d(2)
        )
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(16*5*5, 120),
            nn.Tanh(),
            nn.Linear(120, 84),
            nn.Tanh(),
            nn.Linear(84, num_classes)
        )
    def forward(self, x):
        return self.classifier(self.features(x))

# VGG-style block builder
def vgg_block(in_ch, out_ch, num_convs):
    layers = []
    for _ in range(num_convs):
        layers += [nn.Conv2d(in_ch, out_ch, kernel_size=3, padding=1),
                   nn.ReLU(inplace=True)]
        in_ch = out_ch
    layers.append(nn.MaxPool2d(2, 2))
    return nn.Sequential(*layers)

class VGG16(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            vgg_block(3, 64, 2),
            vgg_block(64, 128, 2),
            vgg_block(128, 256, 3),
            vgg_block(256, 512, 3),
            vgg_block(512, 512, 3)
        )
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(512*7*7, 4096), nn.ReLU(True), nn.Dropout(0.5),
            nn.Linear(4096, 4096), nn.ReLU(True), nn.Dropout(0.5),
            nn.Linear(4096, num_classes)
        )
    def forward(self, x):
        return self.classifier(self.features(x))`,
            output: 'LeNet is small for MNIST; VGG shows how stacking 3×3 convs creates deep, powerful networks.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'LeNet, AlexNet, and VGG with Python',
            code: `import torch
import torch.nn as nn

# LeNet, AlexNet, and VGG — minimal tensor workflow
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
          text: 'LeNet vs AlexNet vs VGG.',
          table: {
            headers: [
              'Architecture',
              'Year',
              'Key Innovation',
              'Parameters',
              'Depth'
            ],
            rows: [
              [
                'LeNet-5',
                '1998',
                'First practical CNN',
                '~60K',
                '5 layers'
              ],
              [
                'AlexNet',
                '2012',
                'ReLU + Dropout + GPU training',
                '~60M',
                '8 layers'
              ],
              [
                'VGG-16',
                '2014',
                'Uniform 3×3 conv blocks',
                '~138M',
                '16 layers'
              ],
              [
                'VGG-19',
                '2014',
                'Deeper VGG',
                '~144M',
                '19 layers'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using large kernels in early layers (fix: stack 3×3 convs instead; they have fewer parameters and more non-linearities)',
            'Mistake 2: Forgetting that VGG-16 expects 224×224 input (fix: adjust the first classifier linear input dimension if your image size differs)',
            'Mistake 3: Training VGG from scratch on tiny datasets (fix: use pre-trained weights or a smaller network; VGG has 138M parameters and overfits easily)'
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
          text: 'Classic architectures remain foundational.',
          list: [
            'MNIST teaching: LeNet is still the standard first CNN for educational datasets',
            'Transfer learning: VGG and AlexNet backbones are used for style transfer and feature extraction',
            'Benchmarking: VGG-style designs are baselines for comparing normalization and activation innovations',
            'Edge devices: smaller variants of these architectures are quantized and deployed on microcontrollers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'LeNet proved CNNs work on small digit datasets',
            'AlexNet scaled CNNs to ImageNet using ReLU, dropout, and GPUs',
            'VGG replaced large kernels with stacks of 3×3 convolutions',
            'Two 3×3 convs have a 5×5 receptive field with fewer parameters and more non-linearity',
            'These architectures share the conv → activation → pool → classifier pattern'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why does VGG use 3×3 convolutions instead of 5×5 or 7×7?
Ans: Stacked 3×3 convs achieve the same receptive field with fewer parameters and more non-linear activations.`,
            `Q2: What innovation made AlexNet successful on ImageNet?
Ans: ReLU activations, dropout regularization, data augmentation, and efficient GPU training.`,
            `Q3: How does LeNet differ from VGG in size?
Ans: LeNet has tens of thousands of parameters for MNIST; VGG has ~138M parameters for ImageNet.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>LeNet, AlexNet, and VGG</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — LeNet, AlexNet, and VGG")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    resnet: {
      title: 'ResNet',
      subtitle: 'Residual connections and deep networks that train',
      sections: [
        {
          heading: 'What is ResNet?',
          text: '<strong>ResNet</strong> (Residual Network) introduced skip connections that allow gradients to flow directly through the network, enabling training of very deep models without degradation. Instead of learning H(x), each block learns the residual F(x) = H(x) − x.',
          list: [
            'ResNet-50, ResNet-101, and ResNet-152 are standard backbones for computer vision',
            'Residual blocks add the input to the transformed output: y = F(x) + x',
            'Identity shortcuts preserve gradient flow and combat vanishing gradients',
            'Bottleneck blocks (1×1→3×3→1×1) make deep networks computationally feasible'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>ResNet</strong> (Residual Network) introduced skip connections that allow gradients to flow directly through the network, enabling training of very deep models without degradation. Instead of learning H(x), each block learns the residual F(x) = H(x) − x. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>ResNet</strong> (Residual Network) introduced skip connections that allow gradients to flow directly through the network, enabling training of very deep models without degradation. Instead of learning H(x), each block learns the residual F(x) = H(x) − x. ResNet-50, ResNet-101, and ResNet-152 are standard backbones for computer vision Residual blocks add the input to the transformed output: y = F(x) + x Identity shortcuts preserve gradient flow and combat vanishing gradients Bottleneck blocks (1×1→3×3→1×1) make deep networks computationally feasible</p>',
            '<p>You use resnet when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — ResNet

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: ResNet sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Residual block: y = F(x) + x. When dimensions change, use a projection shortcut Ws·x.',
          example: {
            title: 'ResNet Building Blocks in PyTorch',
            code: `import torch
import torch.nn as nn

class BasicBlock(nn.Module):
    expansion = 1
    def __init__(self, in_ch, out_ch, stride=1):
        super().__init__()
        self.conv1 = nn.Conv2d(in_ch, out_ch, 3, stride, 1, bias=False)
        self.bn1 = nn.BatchNorm2d(out_ch)
        self.conv2 = nn.Conv2d(out_ch, out_ch, 3, 1, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(out_ch)
        self.relu = nn.ReLU(inplace=True)
        self.shortcut = nn.Sequential()
        if stride != 1 or in_ch != out_ch:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_ch, out_ch, 1, stride, bias=False),
                nn.BatchNorm2d(out_ch)
            )
    def forward(self, x):
        out = self.relu(self.bn1(self.conv1(x)))
        out = self.bn2(self.conv2(out))
        out += self.shortcut(x)
        return self.relu(out)

class Bottleneck(nn.Module):
    expansion = 4
    def __init__(self, in_ch, out_ch, stride=1):
        super().__init__()
        mid = out_ch // self.expansion
        self.conv1 = nn.Conv2d(in_ch, mid, 1, bias=False)
        self.bn1 = nn.BatchNorm2d(mid)
        self.conv2 = nn.Conv2d(mid, mid, 3, stride, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(mid)
        self.conv3 = nn.Conv2d(mid, out_ch, 1, bias=False)
        self.bn3 = nn.BatchNorm2d(out_ch)
        self.relu = nn.ReLU(inplace=True)
        self.shortcut = nn.Sequential()
        if stride != 1 or in_ch != out_ch:
            self.shortcut = nn.Sequential(
                nn.Conv2d(in_ch, out_ch, 1, stride, bias=False),
                nn.BatchNorm2d(out_ch)
            )
    def forward(self, x):
        out = self.relu(self.bn1(self.conv1(x)))
        out = self.relu(self.bn2(self.conv2(out)))
        out = self.bn3(self.conv3(out))
        out += self.shortcut(x)
        return self.relu(out)

# TensorFlow / Keras ResNet block
def resnet_block_tf(x, filters, stride=1):
    shortcut = x
    if stride != 1 or x.shape[-1] != filters:
        shortcut = tf.keras.layers.Conv2D(filters, 1, stride, use_bias=False)(x)
        shortcut = tf.keras.layers.BatchNormalization()(shortcut)
    out = tf.keras.layers.Conv2D(filters, 3, stride, padding='same', use_bias=False)(x)
    out = tf.keras.layers.BatchNormalization()(out)
    out = tf.keras.layers.ReLU()(out)
    out = tf.keras.layers.Conv2D(filters, 3, 1, padding='same', use_bias=False)(out)
    out = tf.keras.layers.BatchNormalization()(out)
    return tf.keras.layers.ReLU()(out + shortcut)`,
            output: 'Bottleneck blocks reduce computation while preserving depth; projection shortcuts align dimensions.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'ResNet with Python',
            code: `import torch
import torch.nn as nn

# ResNet — minimal tensor workflow
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
          text: 'ResNet variants and their characteristics.',
          table: {
            headers: [
              'Variant',
              'Depth',
              'Block Type',
              'Top-1 ImageNet'
            ],
            rows: [
              [
                'ResNet-18',
                '18',
                'Basic',
                '~69.6%'
              ],
              [
                'ResNet-34',
                '34',
                'Basic',
                '~73.3%'
              ],
              [
                'ResNet-50',
                '50',
                'Bottleneck',
                '~76.1%'
              ],
              [
                'ResNet-101',
                '101',
                'Bottleneck',
                '~77.4%'
              ],
              [
                'ResNet-152',
                '152',
                'Bottleneck',
                '~78.3%'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Stacking too many convolutional layers without skip connections (fix: beyond ~20 layers, always use residual connections to prevent degradation)',
            'Mistake 2: Forgetting projection shortcut when channels change (fix: use a 1×1 conv on the skip path when input and output dimensions differ)',
            'Mistake 3: Placing activation after the addition in pre-activation ResNet incorrectly (fix: follow the original ordering or pre-activation paper carefully; BN→ReLU→Conv is common in pre-act blocks)'
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
          text: 'ResNet is the backbone of countless vision systems.',
          list: [
            'Image classification: standard pre-trained backbone for transfer learning',
            'Object detection (Faster R-CNN, Mask R-CNN): ResNet + FPN as feature extractor',
            'Medical imaging: deep ResNets for CT/MRI anomaly detection',
            'Face recognition: ResNet-50/100 architectures dominate benchmark leaderboards'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'ResNet learns residual functions F(x) = H(x) - x via skip connections',
            'Identity shortcuts preserve gradient flow, solving degradation in deep nets',
            'Bottleneck blocks (1×1→3×3→1×1) make deeper networks computationally feasible',
            'ResNet-50 and ResNet-101 are the most widely used variants in practice',
            'Pre-trained ResNet weights are the default starting point for computer vision tasks'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What problem do ResNet skip connections solve?
Ans: Skip connections solve the degradation problem in very deep networks by providing an identity path that preserves gradient flow during backpropagation.`,
            `Q2: Why does the bottleneck block use 1×1 convolutions?
Ans: To reduce and then restore channel dimensions, cutting FLOPs while keeping representational depth.`,
            `Q3: When is a projection shortcut needed?
Ans: When the input and output dimensions (channels or spatial size) differ, a 1×1 conv aligns them.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>ResNet</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — ResNet")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'transfer-learning-cnn': {
      title: 'Transfer Learning with torchvision',
      subtitle: 'Leveraging pre-trained CNNs for new tasks',
      sections: [
        {
          heading: 'What is Transfer Learning?',
          text: '<strong>Transfer Learning</strong> takes a neural network trained on a large, general dataset and adapts it to a new, often smaller, specific task. Instead of training from scratch, you reuse learned features from a source domain, dramatically reducing training time and data requirements while often achieving better accuracy.',
          list: [
            'Transfer learning reuses features learned from large datasets like ImageNet, saving weeks of training time',
            'The early layers of a pre-trained CNN learn generic features (edges, textures) that transfer well to almost any vision task',
            'Feature extraction freezes the base and trains only a new classifier head',
            'Fine-tuning unfreezes deeper layers and trains with a very small learning rate to adapt features subtly'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p><strong>Transfer Learning</strong> takes a neural network trained on a large, general dataset and adapts it to a new, often smaller, specific task. Instead of training from scratch, you reuse learned features from a source domain, dramatically reducing training time and data requirements while often achieving better accuracy. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, <strong>Transfer Learning</strong> takes a neural network trained on a large, general dataset and adapts it to a new, often smaller, specific task. Instead of training from scratch, you reuse learned features from a source domain, dramatically reducing training time and data requirements while often achieving better accuracy. Transfer learning reuses features learned from large datasets like ImageNet, saving weeks of training time The early layers of a pre-trained CNN learn generic features (edges, textures) that transfer well to almost any vision task Feature extraction freezes the base and trains only a new classifier head Fine-tuning unfreezes deeper layers and trains with a very small learning rate to adapt features subtly</p>',
            '<p>You use transfer learning with torchvision when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Transfer Learning with torchvision

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Transfer Learning with torchvision sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Transfer learning workflow: freeze base, replace head, retrain; optionally fine-tune with discriminative learning rates.',
          example: {
            title: 'Transfer Learning in PyTorch and TensorFlow',
            code: `import torch, torchvision
import torch.nn as nn
import torch.optim as optim
from torchvision import transforms, models

# PyTorch transfer learning pipeline
train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

num_classes = 10
model = models.resnet50(weights=models.ResNet50_Weights.IMAGENET1K_V2)

# Freeze backbone
for param in model.parameters():
    param.requires_grad = False

# Replace classifier head
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Train only the head
optimizer = optim.Adam(model.fc.parameters(), lr=1e-3)

# Fine-tune later
for param in model.layer4.parameters():
    param.requires_grad = True
optimizer = optim.Adam([
    {'params': model.layer4.parameters(), 'lr': 1e-5},
    {'params': model.fc.parameters(), 'lr': 1e-3}
])

# TensorFlow / Keras equivalent
import tensorflow as tf
base = tf.keras.applications.ResNet50(weights='imagenet', include_top=False,
                                       input_shape=(224,224,3))
base.trainable = False
model_tf = tf.keras.Sequential([
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(num_classes)
])
model_tf.compile(optimizer=tf.keras.optimizers.Adam(1e-3),
                 loss='sparse_categorical_crossentropy',
                 metrics=['accuracy'])`,
            output: 'Freezing preserves generic features; fine-tuning adapts them to the target domain.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Transfer Learning with torchvision with Python',
            code: `import torch
import torch.nn as nn

# Transfer Learning with torchvision — minimal tensor workflow
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
          text: 'Feature extraction vs fine-tuning.',
          table: {
            headers: [
              'Aspect',
              'Feature Extraction',
              'Fine-Tuning'
            ],
            rows: [
              [
                'Layers trained',
                'Only new classifier head',
                'All or some pre-trained layers'
              ],
              [
                'Data needed',
                'Very small (hundreds of images)',
                'Moderate (thousands of images)'
              ],
              [
                'Training time',
                'Minutes to hours',
                'Hours to days'
              ],
              [
                'Risk of overfitting',
                'Very low',
                'Moderate (use small LR)'
              ],
              [
                'Accuracy potential',
                'Good baseline',
                'Higher ceiling'
              ],
              [
                'When to use',
                'Small dataset, similar domain',
                'Larger dataset, different domain'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Fine-tuning all layers immediately with a large learning rate (fix: start by training only the classifier head; only fine-tune deeper layers later with a very small LR like 1e-5)',
            'Mistake 2: Using a pre-trained model from an unrelated domain without adaptation (fix: if your task is medical imaging, use a model pre-trained on medical data or at least fine-tune extensively)',
            `Mistake 3: Forgetting to normalize input using the pre-trained model's mean and std (fix: always use the same preprocessing the pre-trained model was trained with, e.g., ImageNet normalization)`
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
          text: 'Transfer learning makes state-of-the-art vision accessible to small teams.',
          list: [
            'Startup product classification: a company with only 500 product images can build a classifier by fine-tuning ResNet-50',
            'Medical imaging: radiology departments fine-tune ImageNet-pre-trained models on chest X-rays to detect pneumonia, tuberculosis, and COVID-19',
            'Agriculture: farmers use transfer learning on drone imagery to detect crop diseases with just a few hundred labeled photos per class',
            'Content moderation: social platforms fine-tune vision transformers to detect harmful imagery across cultures and languages'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Transfer learning reuses pre-trained features to save time, data, and compute on new tasks',
            'Feature extraction: freeze base, train only the new head; best for small datasets',
            'Fine-tuning: unfreeze and train deeper layers with small LR; best for larger datasets',
            'Early CNN layers learn generic features that transfer across almost all vision tasks',
            `Always match the pre-processing (normalization, image size) to the pre-trained model's training setup`
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why is transfer learning especially effective for small datasets?
Ans: Pre-trained models already learned generic features from millions of images; the new task only needs to adapt the final classifier.`,
            `Q2: What is the difference between feature extraction and fine-tuning?
Ans: Feature extraction freezes the pre-trained base and trains only a new classifier head; fine-tuning also updates some or all pre-trained layers.`,
            `Q3: Why must input normalization match the pre-trained model?
Ans: The pre-trained features were learned on data with specific mean and standard deviation; feeding differently scaled inputs shifts the feature distribution.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Transfer Learning with torchvision</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Transfer Learning with torchvision")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'data-augmentation': {
      title: 'Data Augmentation',
      subtitle: 'Building robust training pipelines',
      sections: [
        {
          heading: 'What is Data Augmentation?',
          text: 'Data Augmentation is essential for deep learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in deep learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Data Augmentation provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use data augmentation when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Data Augmentation

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Data Augmentation sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Augmentations should be label-preserving and applied only during training, not validation or test.',
          example: {
            title: ' torchvision and Albumentations Augmentation Pipelines',
            code: `import torchvision.transforms as T

train_transform = T.Compose([
    T.RandomResizedCrop(224, scale=(0.08, 1.0)),
    T.RandomHorizontalFlip(),
    T.RandomRotation(15),
    T.ColorJitter(brightness=0.4, contrast=0.4, saturation=0.4, hue=0.1),
    T.RandomGrayscale(p=0.1),
    T.ToTensor(),
    T.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

val_transform = T.Compose([
    T.Resize(256),
    T.CenterCrop(224),
    T.ToTensor(),
    T.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# Albumentations (faster, more flexible)
import albumentations as A
from albumentations.pytorch import ToTensorV2

train_aug = A.Compose([
    A.RandomResizedCrop(224, 224, scale=(0.08, 1.0)),
    A.HorizontalFlip(p=0.5),
    A.ShiftScaleRotate(shift_limit=0.05, scale_limit=0.1, rotate_limit=15),
    A.ColorJitter(brightness=0.4, contrast=0.4, saturation=0.4, hue=0.1),
    A.Normalize(mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225]),
    ToTensorV2()
])

# TensorFlow equivalent
import tensorflow as tf
augment = tf.keras.Sequential([
    tf.keras.layers.RandomResizedCrop(224, 224, scale=(0.08, 1.0)),
    tf.keras.layers.RandomFlip('horizontal'),
    tf.keras.layers.RandomRotation(0.08),
    tf.keras.layers.RandomBrightness(0.2),
    tf.keras.layers.RandomContrast(0.2),
])`,
            output: 'Training gets heavy augmentation; validation only gets deterministic resizing/cropping.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Data Augmentation with Python',
            code: `import torch
import torch.nn as nn

# Data Augmentation — minimal tensor workflow
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
          text: 'Augmentation families and when to use them.',
          table: {
            headers: [
              'Augmentation',
              'Type',
              'Best For',
              'Caution'
            ],
            rows: [
              [
                'RandomResizedCrop',
                'Geometric',
                'All image classification',
                'Avoid too small scale for tiny objects'
              ],
              [
                'HorizontalFlip',
                'Geometric',
                'Most natural images',
                'Only if label is symmetric'
              ],
              [
                'ColorJitter',
                'Photometric',
                'Real-world lighting',
                'Too strong hurts convergence'
              ],
              [
                'Cutout / RandomErasing',
                'Occlusion',
                'Robustness to occlusion',
                'Use small patch size'
              ],
              [
                'Mixup / CutMix',
                'Sample mixing',
                'Regularization',
                'Adjust loss target distribution'
              ],
              [
                'AutoAugment',
                'Learned policy',
                'Large datasets',
                'Policy may overfit to dataset'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Applying augmentation to validation/test sets (fix: validation should use deterministic preprocessing only; never augment evaluation data)',
            'Mistake 2: Using label-changing augmentations without adjusting targets (fix: vertical flips change the meaning of digit "6"/"9"; bounding boxes must be transformed too)',
            'Mistake 3: Over-augmenting small datasets (fix: strong augmentation can overwhelm limited signal; start light and increase gradually while monitoring validation loss)'
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
          text: 'Augmentation pipelines are essential in production vision systems.',
          list: [
            'ImageNet training: random resized crop, color jitter, and horizontal flip are standard for ResNet and EfficientNet',
            'Medical imaging: random rotations, elastic deformations, and intensity shifts help models generalize across scanners',
            'Autonomous driving: augmentation with weather effects (rain, fog) and lighting improves robustness in adverse conditions',
            'Satellite imagery: random flips, rotations, and channel shifts help because satellites have no canonical orientation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Data augmentation increases effective training data with label-preserving transforms',
            'Use geometric transforms for spatial invariance and photometric transforms for lighting invariance',
            'Apply augmentation only during training; validation and test use deterministic preprocessing',
            'AutoAugment, Mixup, and CutMix are advanced regularization-style augmentations',
            'Match augmentation strength to dataset size and task difficulty'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: Why should you not apply random augmentation to the validation set?
Ans: Validation measures real-world performance; random augmentation would make metrics noisy and inconsistent.`,
            `Q2: What is the difference between Mixup and CutMix?
Ans: Mixup blends two images and their labels pixel-wise; CutMix pastes a patch from one image into another and blends labels proportionally.`,
            `Q3: When should you use Albumentations instead of torchvision?
Ans: Albumentations is faster and more flexible, especially for bounding-box and segmentation augmentation.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Data Augmentation</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Data Augmentation")
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
