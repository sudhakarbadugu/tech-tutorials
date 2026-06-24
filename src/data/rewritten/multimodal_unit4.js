// multimodal machine learning — enhanced W3Schools-style (auto-upgraded + overrides)
// Regenerate: node scripts/upgrade-modules.js multimodal_unit4.js

export const multimodalUnit4Content = {
  unit4: {
    'dalle-stable-diffusion': {
      title: 'Text-to-Image Models: DALL·E and Stable Diffusion',
      subtitle: 'Generating images from language',
      sections: [
        {
          heading: 'What is Text-to-Image Generation?',
          text: 'Text-to-image models generate images conditioned on natural language descriptions. They bridge the language and vision modalities by learning a shared representation where semantic concepts from text can be rendered as pixels. DALL·E popularized this capability, while Stable Diffusion made it efficient and widely accessible by operating in a compressed latent space.',
          list: [
            'DALL·E 1 used a discrete VAE to convert images into tokens, then an autoregressive transformer to generate them from text',
            'DALL·E 2 uses a CLIP text encoder and two diffusion models: prior and decoder',
            'Stable Diffusion uses a latent diffusion model (LDM) to denoise in a VAE latent space',
            'Both rely on large-scale text-image pairs for training'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Text-to-image models generate images conditioned on natural language descriptions. They bridge the language and vision modalities by learning a shared representation where semantic concepts from text can be rendered as pixels. DALL·E popularized this capability, while Stable Diffusion made it efficient and widely accessible by operating in a compressed latent space. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Text-to-image models generate images conditioned on natural language descriptions. They bridge the language and vision modalities by learning a shared representation where semantic concepts from text can be rendered as pixels. DALL·E popularized this capability, while Stable Diffusion made it efficient and widely accessible by operating in a compressed latent space. DALL·E 1 used a discrete VAE to convert images into tokens, then an autoregressive transformer to generate them from text DALL·E 2 uses a CLIP text encoder and two diffusion models: prior and decoder Stable Diffusion uses a latent diffusion model (LDM) to denoise in a VAE latent space Both rely on large-scale text-image pairs for training</p>',
            '<p>You use text-to-image models: dall·e and stable diffusion when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Text-to-Image Models: DALL·E and Stable Diffusion

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Text-to-Image Models: DALL·E and Stable Diffusion sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Diffusion models learn to reverse a noise-corruption process: loss = E_t || ε − ε_θ(x_t, t, c) ||² where c is the text conditioning.',
          example: {
            title: 'Example: Generate Images with Stable Diffusion',
            code: `# Using Hugging Face diffusers (PyTorch)
from diffusers import StableDiffusionPipeline
import torch

pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
).to("cuda")

prompt = "a futuristic city at sunset, digital art"
image = pipe(prompt, num_inference_steps=50, guidance_scale=7.5).images[0]
image.save("generated_city.png")

# Negative prompting to avoid unwanted content
prompt = "portrait of a person, oil painting"
neg_prompt = "blurry, extra fingers, distorted face"
image = pipe(prompt, negative_prompt=neg_prompt,
             num_inference_steps=50, guidance_scale=7.5).images[0]

# TensorFlow/Keras equivalent uses KerasCV
import keras_cv
import tensorflow as tf
model = keras_cv.models.StableDiffusion(img_width=512, img_height=512)
img = model.text_to_image("a photograph of an astronaut riding a horse",
                          batch_size=1)
tf.keras.utils.save_img("astronaut.png", img[0])`,
            output: 'Stable Diffusion generates images by iteratively denoising a latent tensor conditioned on CLIP text embeddings.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Text-to-Image Models: DALL·E and Stable Diffusion with Python',
            code: `import numpy as np
# Text-to-Image Models: DALL·E and Stable Diffusion — image + text feature placeholders
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
          text: 'Comparing DALL·E 2 and Stable Diffusion.',
          table: {
            headers: [
              'Aspect',
              'DALL·E 2',
              'Stable Diffusion'
            ],
            rows: [
              [
                'Architecture',
                'CLIP prior + GLIDE decoder',
                'Latent diffusion model'
              ],
              [
                'Resolution',
                '1024×1024',
                '512×512 / 768×768 / 1024×1024'
              ],
              [
                'Speed',
                'Slower; requires API or large GPU',
                'Faster; can run on consumer GPUs'
              ],
              [
                'Open weights',
                'No (API only)',
                'Yes'
              ],
              [
                'Conditioning',
                'CLIP text embeddings',
                'CLIP text encoder + cross-attention'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Expecting photorealism from small models (fix: use larger checkpoints, more inference steps, and classifier-free guidance for sharper results)',
            'Mistake 2: Ignoring prompt engineering (fix: be specific about subject, style, lighting, and composition; use negative prompts)',
            'Mistake 3: Running high-resolution diffusion without enough VRAM (fix: use float16, enable attention slicing, or use latent upscalers)'
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
          text: 'Text-to-image generation is used across creative and commercial domains.',
          list: [
            'Marketing: generate ad creatives and product visuals from briefs',
            'Entertainment: concept art, storyboarding, and game asset generation',
            'Fashion and interior design: visualize styles from descriptions',
            'Accessibility: generate illustrations for textual content'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'DALL·E 2 and Stable Diffusion generate images from text prompts',
            'Stable Diffusion uses latent diffusion, making it faster and open-source',
            'Training objective: predict noise added to latent/image representations',
            'Classifier-free guidance trades off prompt adherence and diversity',
            'Prompt engineering and negative prompts strongly influence output quality'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the main advantage of Stable Diffusion over pixel-space diffusion?
Ans: It operates in a compressed latent space, reducing memory and compute requirements.`,
            `Q2: What does classifier-free guidance control?
Ans: The strength of conditioning — higher values make output more aligned with the prompt but less diverse.`,
            `Q3: What is a negative prompt?
Ans: A prompt describing what the model should avoid, used to reduce unwanted artifacts.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Text-to-Image Models: DALL·E and Stable Diffusion</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Text-to-Image Models: DALL·E and Stable Diffusion")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'text-to-image-pipeline': {
      title: 'Building a Text-to-Image Pipeline',
      subtitle: 'From prompt to polished output',
      sections: [
        {
          heading: 'What is Building a Text-to-Image Pipeline?',
          text: 'Building a Text-to-Image Pipeline is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Building a Text-to-Image Pipeline provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use building a text-to-image pipeline when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Building a Text-to-Image Pipeline

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Building a Text-to-Image Pipeline sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Classifier-free guidance modifies prediction: ε_guided = ε_uncond + scale × (ε_cond − ε_uncond).',
          example: {
            title: 'Example: Stable Diffusion XL Pipeline with Refiner',
            code: `# PyTorch with diffusers
from diffusers import StableDiffusionXLPipeline, StableDiffusionXLImg2ImgPipeline
import torch

base = StableDiffusionXLPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16
).to("cuda")

refiner = StableDiffusionXLImg2ImgPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-refiner-1.0",
    torch_dtype=torch.float16
).to("cuda")

prompt = "a red sports car on a mountain road, cinematic lighting, 8k"
base_image = base(prompt, num_inference_steps=40,
                  denoising_end=0.8, output_type="latent").images[0]
refined = refiner(prompt, num_inference_steps=40, denoising_start=0.8,
                  image=base_image).images[0]
refined.save("car_refined.png")

# Image-to-image: edit an existing image
from diffusers import StableDiffusionImg2ImgPipeline
pipe_i2i = StableDiffusionImg2ImgPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5", torch_dtype=torch.float16
).to("cuda")

from PIL import Image
init_image = Image.open("photo.png").convert("RGB").resize((512, 512))
edited = pipe_i2i(prompt="turn this into a watercolor painting",
                  image=init_image, strength=0.6).images[0]`,
            output: 'A complete pipeline can generate, refine, and edit images while controlling style and quality.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Building a Text-to-Image Pipeline with Python',
            code: `import numpy as np
# Building a Text-to-Image Pipeline — image + text feature placeholders
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
          text: 'Pipeline stages and their purposes.',
          table: {
            headers: [
              'Stage',
              'Input',
              'Output',
              'Purpose'
            ],
            rows: [
              [
                'Text encoding',
                'Raw prompt',
                'Conditioning embeddings',
                'Interpret prompt semantics'
              ],
              [
                'Base generation',
                'Noise + text',
                'Low-res latent/image',
                'Produce initial image'
              ],
              [
                'Refinement',
                'Base output',
                'Higher-quality image',
                'Sharpen details'
              ],
              [
                'Inpainting',
                'Image + mask',
                'Filled region',
                'Edit局部 regions'
              ],
              [
                'Safety filter',
                'Generated image',
                'Flag or block',
                'Prevent harmful outputs'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Using one fixed seed and guidance scale for all prompts (fix: tune per prompt and dataset; some prompts need higher guidance)',
            'Mistake 2: Forgetting to normalize prompts before safety filtering (fix: filter both input prompts and output images; audit false positives)',
            'Mistake 3: Skipping output validation (fix: run human or automated evaluation on a representative sample before deployment)'
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
          text: 'Text-to-image pipelines are deployed in creative tools.',
          list: [
            'Stock image generation: produce on-demand visuals from article titles',
            'E-commerce: generate product scene images from descriptions',
            'UI/UX design: create mockups and variations from design briefs',
            'Publishing: illustrate books and articles at scale'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'A full pipeline includes encoding, generation, refinement, editing, safety, and post-processing',
            'Classifier-free guidance controls prompt adherence vs diversity',
            'Refiners and image-to-image models improve quality and enable editing',
            'Safety filters should be applied to both prompts and outputs',
            'Always validate outputs with representative samples'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What is the purpose of a refiner model?
Ans: To improve detail and quality of a base-generated image.`,
            `Q2: What does the strength parameter control in image-to-image generation?
Ans: How much the original image is preserved versus how much it is modified.`,
            `Q3: Why should safety filters inspect both prompts and outputs?
Ans: Harmful content can arise from either unsafe prompts or unexpected model outputs.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Building a Text-to-Image Pipeline</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Building a Text-to-Image Pipeline")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'multimodal-gpt4v': {
      title: 'Multimodal LLMs: GPT-4V and Beyond',
      subtitle: 'Large language models that see',
      sections: [
        {
          heading: 'What is a Multimodal LLM?',
          text: 'A multimodal large language model (MLLM) extends an LLM with the ability to process images, audio, or video in addition to text. Models like GPT-4V, Gemini, and LLaVA project visual features into the language model’s token embedding space, allowing the same transformer to reason across modalities.',
          list: [
            'MLLMs typically keep a frozen LLM backbone and add a visual projector',
            'Images are encoded by a vision encoder (e.g., CLIP ViT)',
            'A projection layer aligns visual tokens to language token embeddings',
            'The model is instruction-tuned on multimodal dialogue data'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>A multimodal large language model (MLLM) extends an LLM with the ability to process images, audio, or video in addition to text. Models like GPT-4V, Gemini, and LLaVA project visual features into the language model’s token embedding space, allowing the same transformer to reason across modalities. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, A multimodal large language model (MLLM) extends an LLM with the ability to process images, audio, or video in addition to text. Models like GPT-4V, Gemini, and LLaVA project visual features into the language model’s token embedding space, allowing the same transformer to reason across modalities. MLLMs typically keep a frozen LLM backbone and add a visual projector Images are encoded by a vision encoder (e.g., CLIP ViT) A projection layer aligns visual tokens to language token embeddings The model is instruction-tuned on multimodal dialogue data</p>',
            '<p>You use multimodal llms: gpt-4v and beyond when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Multimodal LLMs: GPT-4V and Beyond

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Multimodal LLMs: GPT-4V and Beyond sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Visual tokens are projected into LLM space: h_visual = W_proj · f_image(image).',
          example: {
            title: 'Example: LLaVA-Style Multimodal LLM in PyTorch',
            code: `import torch, torch.nn as nn
from transformers import CLIPVisionModel, LlamaForCausalLM, LlamaTokenizer

class MultimodalLLM(nn.Module):
    def __init__(self, llama_name="meta-llama/Llama-2-7b-hf"):
        super().__init__()
        self.vision_encoder = CLIPVisionModel.from_pretrained("openai/clip-vit-large-patch14")
        self.llm = LlamaForCausalLM.from_pretrained(llama_name, torch_dtype=torch.float16)
        self.tokenizer = LlamaTokenizer.from_pretrained(llama_name)

        vision_dim = self.vision_encoder.config.hidden_size
        llm_dim = self.llm.config.hidden_size
        self.projector = nn.Linear(vision_dim, llm_dim)

    def forward(self, images, text):
        # images: [B, 3, 224, 224]
        vision_outputs = self.vision_encoder(images)
        visual_tokens = self.projector(vision_outputs.last_hidden_state)  # [B, N_v, D_llm]

        text_inputs = self.tokenizer(text, return_tensors="pt", padding=True)
        text_embeds = self.llm.get_input_embeddings()(text_inputs.input_ids.to(images.device))

        # Interleave visual and text tokens (simplified)
        inputs_embeds = torch.cat([visual_tokens, text_embeds], dim=1)
        outputs = self.llm(inputs_embeds=inputs_embeds)
        return outputs

# Inference with OpenAI API (GPT-4V)
import openai
response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": [
            {"type": "text", "text": "Describe this image."},
            {"type": "image_url", "image_url": {"url": "https://example.com/image.png"}}
        ]}
    ]
)
print(response.choices[0].message.content)`,
            output: 'MLLMs fuse vision and language by projecting visual features into the LLM token space.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Multimodal LLMs: GPT-4V and Beyond with Python',
            code: `import numpy as np
# Multimodal LLMs: GPT-4V and Beyond — image + text feature placeholders
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
          text: 'Design choices in multimodal LLMs.',
          table: {
            headers: [
              'Approach',
              'How It Works',
              'Pros',
              'Cons'
            ],
            rows: [
              [
                'Frozen LLM + projector',
                'Train only projection',
                'Cheap, preserves LLM knowledge',
                'Limited multimodal capability'
              ],
              [
                'End-to-end fine-tune',
                'Fine-tune LLM and vision parts',
                'Stronger alignment',
                'Expensive, risk of catastrophic forgetting'
              ],
              [
                'Adapter layers',
                'Small trainable modules',
                'Efficient',
                'May underfit complex tasks'
              ],
              [
                'Specialized encoders',
                'Separate encoders per modality',
                'Flexible',
                'Requires careful fusion design'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Treating visual tokens the same as text tokens (fix: visual tokens represent spatial patches, not linguistic units; use positional embeddings and cross-attention carefully)',
            'Mistake 2: Expecting perfect spatial reasoning (fix: MLLMs can struggle with precise coordinates and counting; verify on your use case)',
            'Mistake 3: Ignoring token cost and latency (fix: high-resolution images produce many visual tokens; downsample or tile strategically)'
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
          text: 'Multimodal LLMs are transforming many applications.',
          list: [
            'Document understanding: extract structured data from invoices, forms, and receipts',
            'Accessibility: describe images and videos for visually impaired users',
            'Customer support: answer questions about product photos',
            'Robotics and agents: interpret visual environments to plan actions'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Multimodal LLMs extend language models with vision/audio encoders and projectors',
            'LLaVA-style architectures freeze the LLM and train a lightweight projector',
            'Instruction tuning on multimodal dialogue is essential for chat behavior',
            'Visual token count affects cost and latency',
            'Spatial reasoning and precise counting remain active research challenges'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: How does an MLLM process an image?
Ans: A vision encoder extracts features, and a projector maps those features into the LLM token embedding space.`,
            `Q2: What is the advantage of freezing the LLM and training only the projector?
Ans: It is computationally efficient and preserves the LLM’s pretrained language knowledge.`,
            `Q3: Why is high-resolution image input costly for MLLMs?
Ans: More patches produce more visual tokens, increasing compute, memory, and latency.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Multimodal LLMs: GPT-4V and Beyond</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Multimodal LLMs: GPT-4V and Beyond")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'whisper-audio-text': {
      title: 'Whisper: Audio-Text Foundation Model',
      subtitle: 'Robust speech recognition and translation',
      sections: [
        {
          heading: 'What is Whisper?',
          text: 'Whisper is an encoder-decoder transformer model trained by OpenAI on 680,000 hours of multilingual and multitask supervised data. It performs speech recognition, speech translation, spoken language identification, and timestamp prediction in a single model. Its robustness comes from large-scale diverse training data rather than architectural novelty.',
          list: [
            'Audio is converted to log-Mel spectrograms',
            'An encoder processes spectrograms into hidden representations',
            'An autoregressive decoder predicts text tokens conditioned on the encoder and task tokens',
            'Task tokens specify transcribe, translate, or detect-language'
          ]
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>Whisper is an encoder-decoder transformer model trained by OpenAI on 680,000 hours of multilingual and multitask supervised data. It performs speech recognition, speech translation, spoken language identification, and timestamp prediction in a single model. Its robustness comes from large-scale diverse training data rather than architectural novelty. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Whisper is an encoder-decoder transformer model trained by OpenAI on 680,000 hours of multilingual and multitask supervised data. It performs speech recognition, speech translation, spoken language identification, and timestamp prediction in a single model. Its robustness comes from large-scale diverse training data rather than architectural novelty. Audio is converted to log-Mel spectrograms An encoder processes spectrograms into hidden representations An autoregressive decoder predicts text tokens conditioned on the encoder and task tokens Task tokens specify transcribe, translate, or detect-language</p>',
            '<p>You use whisper: audio-text foundation model when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Whisper: Audio-Text Foundation Model

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Whisper: Audio-Text Foundation Model sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'Training objective: maximize p(text | audio, task) using standard cross-entropy on decoder outputs.',
          example: {
            title: 'Example: Using Whisper with Transformers',
            code: `# PyTorch with transformers
from transformers import WhisperProcessor, WhisperForConditionalGeneration
import librosa

processor = WhisperProcessor.from_pretrained("openai/whisper-base")
model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-base")

audio, sr = librosa.load("audio.wav", sr=16000)
inputs = processor(audio, sampling_rate=16000, return_tensors="pt")

forced_ids = processor.get_decoder_prompt_ids(language="en", task="transcribe")
generated = model.generate(inputs.input_features, forced_decoder_ids=forced_ids)
transcription = processor.batch_decode(generated, skip_special_tokens=True)[0]
print(transcription)

# OpenAI Whisper local
import whisper
model = whisper.load_model("base")
result = model.transcribe("audio.wav", language="en", task="translate")
print(result["text"])

# TensorFlow/Keras: TFWhisperModel is available in transformers
from transformers import TFWhisperForConditionalGeneration
model_tf = TFWhisperForConditionalGeneration.from_pretrained("openai/whisper-base")
generated = model_tf.generate(inputs.input_features)
print(processor.batch_decode(generated, skip_special_tokens=True)[0])`,
            output: 'Whisper converts audio spectrograms into text by encoding audio and decoding text autoregressively.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Whisper: Audio-Text Foundation Model with Python',
            code: `import numpy as np
# Whisper: Audio-Text Foundation Model — image + text feature placeholders
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
          text: 'Whisper model sizes and capabilities.',
          table: {
            headers: [
              'Model',
              'Parameters',
              'Speed',
              'Best For'
            ],
            rows: [
              [
                'tiny',
                '39M',
                'Fastest',
                'Prototyping, edge devices'
              ],
              [
                'base',
                '74M',
                'Fast',
                'General transcription'
              ],
              [
                'small',
                '244M',
                'Moderate',
                'Better accuracy'
              ],
              [
                'medium',
                '769M',
                'Slower',
                'Multilingual'
              ],
              [
                'large-v3',
                '1550M',
                'Slowest',
                'Best accuracy'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Passing stereo audio or wrong sample rate (fix: resample to 16 kHz mono before processing)',
            'Mistake 2: Not using forced decoder IDs for consistent task/language (fix: set task and language tokens to guide generation)',
            'Mistake 3: Evaluating only on clean read speech (fix: test on noisy, accented, and conversational data to assess real-world robustness)'
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
          text: 'Whisper is widely deployed for audio-text tasks.',
          list: [
            'Meeting transcription and summarization',
            'Subtitle generation for videos',
            'Voice assistants and call center analytics',
            'Multilingual speech translation'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Whisper is an encoder-decoder transformer for speech recognition and translation',
            'It uses log-Mel spectrograms and task tokens to handle multiple tasks',
            'Large-scale diverse training gives strong robustness',
            'Use forced decoder IDs to control language and task',
            'Evaluate on realistic, noisy, accented speech'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What input representation does Whisper use?
Ans: Log-Mel spectrograms computed from 16 kHz mono audio.`,
            `Q2: What do task tokens in Whisper specify?
Ans: Whether to transcribe, translate, or identify language.`,
            `Q3: Why is Whisper robust to accents and noise?
Ans: It was trained on a very large and diverse multilingual supervised dataset.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Whisper: Audio-Text Foundation Model</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Whisper: Audio-Text Foundation Model")
plt.suptitle("")
plt.show()`,
            output: 'You should see summary stats and a boxplot by day; compare medians and spread before choosing a test.',
            language: 'python',
            type: 'code'
          }
        }
      ]
    },
    'generation-evaluation': {
      title: 'Evaluating Generative Multimodal Models',
      subtitle: 'Metrics for images, audio, and text',
      sections: [
        {
          heading: 'What is Evaluating Generative Multimodal Models?',
          text: 'Evaluating Generative Multimodal Models is essential for multimodal machine learning.',
          list: []
        },
        {
          heading: 'Concept Explanation',
          content: [
            '<p>This topic is a core building block in multimodal machine learning. Start with intuition: ask what question this concept answers before memorizing formulas.</p>',
            '<p>Technically, Evaluating Generative Multimodal Models provides formal tools for quantifying patterns and uncertainty in data.</p>',
            '<p>You use evaluating generative multimodal models when you need reproducible, evidence-based decisions rather than gut feeling — A/B tests, clinical trials, forecasting, and model evaluation all depend on it.</p>'
          ],
          note: 'References: Casella & Berger (2002), <em>Statistical Inference</em>; Wasserman (2004), <em>All of Statistics</em>.'
        },
        {
          heading: 'Visual Representation',
          code: `Concept map — Evaluating Generative Multimodal Models

  Raw data  →  Summarize / model  →  Inference  →  Decision
     |              |                    |              |
  sample n      estimate θ̂          CI / p-value    deploy / report

  Key idea: Evaluating Generative Multimodal Models sits in the inference layer — turning noisy samples into actionable ranges.`,
          language: 'text'
        },
        {
          heading: 'Key Formula / Rule',
          text: 'FID measures distribution similarity between real and generated images: lower is better. CLIP score measures text-image alignment: higher is better.',
          example: {
            title: 'Example: FID and CLIP Score Evaluation',
            code: `# PyTorch: compute FID and CLIP score
import torch
from torchvision.models import inception_v3
from scipy import linalg
import numpy as np

def frechet_distance(mu1, sigma1, mu2, sigma2):
    diff = mu1 - mu2
    covmean = linalg.sqrtm(sigma1 @ sigma2)
    if np.iscomplexobj(covmean):
        covmean = covmean.real
    return diff @ diff + np.trace(sigma1 + sigma2 - 2 * covmean)

# Extract Inception features from real and generated images, then compute FID
# real_features, gen_features: [N, 2048]
mu_real, sigma_real = real_features.mean(0), np.cov(real_features, rowvar=False)
mu_gen, sigma_gen = gen_features.mean(0), np.cov(gen_features, rowvar=False)
fid = frechet_distance(mu_real, sigma_real, mu_gen, sigma_gen)
print("FID:", fid)

# CLIP score with transformers
from transformers import CLIPProcessor, CLIPModel
import torch.nn.functional as F

clip = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

inputs = processor(text=[prompt], images=image, return_tensors="pt", padding=True)
outputs = clip(**inputs)
logits_per_image = outputs.logits_per_image
clip_score = logits_per_image.item()
print("CLIP score:", clip_score)`,
            output: 'FID captures realism, CLIP score captures text-image alignment.',
            type: 'code'
          }
        },
        {
          heading: 'Python Code Example',
          example: {
            title: 'Evaluating Generative Multimodal Models with Python',
            code: `import numpy as np
# Evaluating Generative Multimodal Models — image + text feature placeholders
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
          text: 'Metrics for generative multimodal outputs.',
          table: {
            headers: [
              'Metric',
              'Measures',
              'Use Case',
              'Limitation'
            ],
            rows: [
              [
                'FID',
                'Image distribution similarity',
                'Overall image quality',
                'Sensitive to mode collapse detection'
              ],
              [
                'Inception Score',
                'Quality and diversity',
                'Image generation',
                'Ignores conditioning'
              ],
              [
                'CLIP Score',
                'Text-image alignment',
                'Prompt adherence',
                'Does not measure realism'
              ],
              [
                'WER / BLEU',
                'Text correctness',
                'Speech transcription, captioning',
                'N-gram based'
              ],
              [
                'Human evaluation',
                'Preference and quality',
                'Final validation',
                'Expensive and subjective'
              ]
            ]
          }
        },
        {
          heading: 'Common Mistakes',
          list: [
            'Mistake 1: Optimizing a single metric (fix: use a battery of metrics plus human evaluation; optimizing FID alone can hurt text alignment)',
            'Mistake 2: Evaluating on the training distribution only (fix: test on out-of-distribution prompts, edge cases, and adversarial inputs)',
            'Mistake 3: Ignoring bias and safety (fix: audit outputs for stereotypes, harmful content, and memorization; add safety filters and red-teaming)'
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
          text: 'Evaluation frameworks guide deployment decisions.',
          list: [
            'Creative tools: A/B test generated images with users',
            'Medical imaging generation: require clinician review and fidelity checks',
            'Speech systems: report WER across accents, noise levels, and domains',
            'Content moderation: combine classifiers and human reviewers'
          ]
        },
        {
          heading: 'Quick Recap',
          list: [
            'Evaluate generative models on quality, faithfulness, diversity, safety, and preference',
            'FID measures distribution realism; CLIP score measures text-image alignment',
            'No single metric is sufficient; combine automatic, model-based, and human evaluation',
            'Test on out-of-distribution and adversarial inputs',
            'Audit for bias, harmful content, and copyright issues'
          ]
        },
        {
          heading: 'Practice Questions',
          list: [
            `Q1: What does FID measure and what is a good value?
Ans: FID measures similarity between real and generated image feature distributions; lower is better.`,
            `Q2: What is the limitation of CLIP score?
Ans: It measures text-image semantic alignment but not realism or image quality.`,
            `Q3: Why is human evaluation still important?
Ans: It captures preference, aesthetics, safety, and nuanced quality that automatic metrics miss.`,
            `Challenge: Your p-value is 0.049 but the effect size is tiny. What should you report?
Ans: Statistical significance ≠ practical importance — report the CI and effect size; the result may be significant only because n is huge.`
          ]
        },
        {
          heading: 'Try It Yourself',
          text: '<strong>Task:</strong> Load the seaborn <code>tips</code> dataset, compute a group summary statistic relevant to <em>Evaluating Generative Multimodal Models</em>, and visualize the distribution. Interpret one number from the output.',
          example: {
            title: 'Solution (collapsed)',
            code: `import seaborn as sns
import matplotlib.pyplot as plt

tips = sns.load_dataset("tips")
print(tips.describe())
print("Categories:", tips["day"].unique())
tips.boxplot(column="total_bill", by="day")
plt.title("Bill by day — Evaluating Generative Multimodal Models")
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
